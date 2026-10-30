// src/store/useTopicPracticeStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  DifficultyLevel,
  PracticeMode,
  TopicCategory,
  UserTopicMastery,
  TopicPracticeQuestionData,
} from '@/types/topicPractice';

interface TopicPracticeState {
  // Global Filters & Preferences
  selectedExam: string; // 'ALL' or specific exam key
  selectedCategory: TopicCategory | 'ALL';
  selectedDifficulty: DifficultyLevel;
  practiceMode: PracticeMode;
  preferredLanguage: 'EN' | 'HI';
  searchQuery: string;

  // Active Workspace / Session State
  activeTopicSlug: string | null;
  activeQuestions: TopicPracticeQuestionData[];
  currentQuestionIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>; // questionId -> option
  revealedInLearnMode: Record<string, boolean>;             // questionId -> boolean
  questionTimeSpent: Record<string, number>;                // questionId -> seconds
  drillTimeRemaining: number;                               // in seconds
  isDrillActive: boolean;
  isDrillSubmitted: boolean;

  // Persistent User Mastery Data (topicSlug -> mastery)
  topicMasteryMap: Record<string, UserTopicMastery>;
  globalBookmarks: string[]; // array of question IDs

  // Actions - Filters & Preferences
  setSelectedExam: (exam: string) => void;
  setSelectedCategory: (cat: TopicCategory | 'ALL') => void;
  setSelectedDifficulty: (diff: DifficultyLevel) => void;
  setPracticeMode: (mode: PracticeMode) => void;
  setPreferredLanguage: (lang: 'EN' | 'HI') => void;
  setSearchQuery: (query: string) => void;

  // Actions - Session Management
  startSession: (
    topicSlug: string,
    questions: TopicPracticeQuestionData[],
    mode?: PracticeMode,
    difficulty?: DifficultyLevel
  ) => void;
  selectOption: (questionId: string, optionId: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  revealAnswer: (questionId: string) => void;
  goToNextQuestion: () => void;
  goToPrevQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  tickSessionTimer: () => void;
  submitDrill: () => void;
  resetSession: () => void;

  // Actions - Mastery & Bookmarks
  markConceptCompleted: (topicSlug: string) => void;
  recordQuestionAttempt: (
    topicSlug: string,
    questionId: string,
    difficulty: DifficultyLevel,
    isCorrect: boolean,
    timeSpent: number
  ) => void;
  toggleBookmark: (questionId: string, topicSlug?: string) => void;
  getTopicMastery: (topicSlug: string) => UserTopicMastery;
}

export const useTopicPracticeStore = create<TopicPracticeState>()(
  persist(
    (set, get) => ({
      // Defaults
      selectedExam: 'ALL',
      selectedCategory: 'ALL',
      selectedDifficulty: 'LEVEL_1_CLERK_PRE',
      practiceMode: 'LEARN',
      preferredLanguage: 'EN',
      searchQuery: '',

      activeTopicSlug: null,
      activeQuestions: [],
      currentQuestionIndex: 0,
      userAnswers: {},
      revealedInLearnMode: {},
      questionTimeSpent: {},
      drillTimeRemaining: 600, // 10 minutes default
      isDrillActive: false,
      isDrillSubmitted: false,

      topicMasteryMap: {},
      globalBookmarks: [],

      // Filters
      setSelectedExam: (exam) => set({ selectedExam: exam }),
      setSelectedCategory: (cat) => set({ selectedCategory: cat }),
      setSelectedDifficulty: (diff) => set({ selectedDifficulty: diff }),
      setPracticeMode: (mode) => set({ practiceMode: mode }),
      setPreferredLanguage: (lang) => set({ preferredLanguage: lang }),
      setSearchQuery: (query) => set({ searchQuery: query }),

      // Session
      startSession: (topicSlug, questions, mode, difficulty) => {
        const state = get();
        const activeMode = mode || state.practiceMode;
        const activeDiff = difficulty || state.selectedDifficulty;
        const drillDuration = questions.length * (activeDiff === 'LEVEL_3_MAINS' ? 90 : 60);

        set({
          activeTopicSlug: topicSlug,
          activeQuestions: questions,
          currentQuestionIndex: 0,
          userAnswers: {},
          revealedInLearnMode: {},
          questionTimeSpent: {},
          drillTimeRemaining: drillDuration,
          isDrillActive: activeMode === 'DRILL',
          isDrillSubmitted: false,
          practiceMode: activeMode,
          selectedDifficulty: activeDiff,
        });
      },

      selectOption: (questionId, optionId) => {
        const state = get();
        const updatedAnswers = { ...state.userAnswers, [questionId]: optionId };
        
        // In Learn mode, auto-reveal and record attempt immediately
        let updatedRevealed = state.revealedInLearnMode;
        if (state.practiceMode === 'LEARN') {
          updatedRevealed = { ...state.revealedInLearnMode, [questionId]: true };
          
          const currentQ = state.activeQuestions.find((q) => q.id === questionId);
          if (currentQ && state.activeTopicSlug) {
            const isCorrect = optionId === currentQ.correctOption;
            const timeSpent = state.questionTimeSpent[questionId] || 15;
            state.recordQuestionAttempt(
              state.activeTopicSlug,
              questionId,
              currentQ.difficulty,
              isCorrect,
              timeSpent
            );
          }
        }

        set({
          userAnswers: updatedAnswers,
          revealedInLearnMode: updatedRevealed,
        });
      },

      revealAnswer: (questionId) => {
        set((state) => ({
          revealedInLearnMode: { ...state.revealedInLearnMode, [questionId]: true },
        }));
      },

      goToNextQuestion: () => {
        const { currentQuestionIndex, activeQuestions } = get();
        if (currentQuestionIndex < activeQuestions.length - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        }
      },

      goToPrevQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        }
      },

      jumpToQuestion: (index) => {
        const { activeQuestions } = get();
        if (index >= 0 && index < activeQuestions.length) {
          set({ currentQuestionIndex: index });
        }
      },

      tickSessionTimer: () => {
        const state = get();
        const currentQ = state.activeQuestions[state.currentQuestionIndex];
        if (!currentQ) return;

        const qId = currentQ.id;
        const currentQTime = (state.questionTimeSpent[qId] || 0) + 1;
        const newTimeSpent = { ...state.questionTimeSpent, [qId]: currentQTime };

        if (state.isDrillActive && !state.isDrillSubmitted) {
          const newRemaining = Math.max(0, state.drillTimeRemaining - 1);
          if (newRemaining === 0) {
            // Auto submit drill
            state.submitDrill();
            return;
          }
          set({
            questionTimeSpent: newTimeSpent,
            drillTimeRemaining: newRemaining,
          });
        } else {
          set({ questionTimeSpent: newTimeSpent });
        }
      },

      submitDrill: () => {
        const state = get();
        if (!state.activeTopicSlug) return;

        // Score and record all questions in this drill
        const topicSlug = state.activeTopicSlug;
        state.activeQuestions.forEach((q) => {
          const selected = state.userAnswers[q.id];
          if (selected) {
            const isCorrect = selected === q.correctOption;
            const timeSpent = state.questionTimeSpent[q.id] || 30;
            state.recordQuestionAttempt(topicSlug, q.id, q.difficulty, isCorrect, timeSpent);
          }
        });

        set({
          isDrillActive: false,
          isDrillSubmitted: true,
        });
      },

      resetSession: () => {
        set({
          activeTopicSlug: null,
          activeQuestions: [],
          currentQuestionIndex: 0,
          userAnswers: {},
          revealedInLearnMode: {},
          questionTimeSpent: {},
          isDrillActive: false,
          isDrillSubmitted: false,
        });
      },

      // Mastery & Progress Management
      markConceptCompleted: (topicSlug) => {
        set((state) => {
          const current = state.getTopicMastery(topicSlug);
          const updated: UserTopicMastery = {
            ...current,
            conceptCompleted: true,
            masteryScore: Math.min(100, Math.max(current.masteryScore, 20)), // at least 20 for reading concept
          };
          return {
            topicMasteryMap: { ...state.topicMasteryMap, [topicSlug]: updated },
          };
        });
      },

      recordQuestionAttempt: (topicSlug, questionId, difficulty, isCorrect, timeSpent) => {
        set((state) => {
          const current = state.getTopicMastery(topicSlug);

          const newAttempted = current.questionsAttempted + 1;
          const newCorrect = current.questionsCorrect + (isCorrect ? 1 : 0);

          let l1Att = current.level1Attempted;
          let l1Cor = current.level1Correct;
          let l2Att = current.level2Attempted;
          let l2Cor = current.level2Correct;
          let l3Att = current.level3Attempted;
          let l3Cor = current.level3Correct;

          if (difficulty === 'LEVEL_1_CLERK_PRE') {
            l1Att++;
            if (isCorrect) l1Cor++;
          } else if (difficulty === 'LEVEL_2_PO_PRE') {
            l2Att++;
            if (isCorrect) l2Cor++;
          } else {
            l3Att++;
            if (isCorrect) l3Cor++;
          }

          // Compute moving average time
          const prevTotalTime = current.avgTimeSeconds * current.questionsAttempted;
          const newAvgTime = Math.round((prevTotalTime + timeSpent) / newAttempted);

          // Calculate Mastery Score (0 to 100):
          // Concept read: 20 pts
          // Level 1: up to 25 pts (accuracy * min(1, l1Att/5))
          // Level 2: up to 30 pts (accuracy * min(1, l2Att/5))
          // Level 3: up to 25 pts (accuracy * min(1, l3Att/5))
          const conceptScore = current.conceptCompleted ? 20 : 0;
          const l1Score = l1Att > 0 ? (l1Cor / l1Att) * 25 * Math.min(1, l1Att / 5) : 0;
          const l2Score = l2Att > 0 ? (l2Cor / l2Att) * 30 * Math.min(1, l2Att / 5) : 0;
          const l3Score = l3Att > 0 ? (l3Cor / l3Att) * 25 * Math.min(1, l3Att / 5) : 0;
          const totalMastery = Math.min(100, Math.round(conceptScore + l1Score + l2Score + l3Score));

          const wrongIds = new Set(current.wrongQuestionIds);
          if (!isCorrect) {
            wrongIds.add(questionId);
          } else {
            wrongIds.delete(questionId);
          }

          const updated: UserTopicMastery = {
            ...current,
            questionsAttempted: newAttempted,
            questionsCorrect: newCorrect,
            level1Attempted: l1Att,
            level1Correct: l1Cor,
            level2Attempted: l2Att,
            level2Correct: l2Cor,
            level3Attempted: l3Att,
            level3Correct: l3Cor,
            avgTimeSeconds: newAvgTime,
            masteryScore: totalMastery,
            lastPracticedAt: Date.now(),
            wrongQuestionIds: Array.from(wrongIds),
          };

          return {
            topicMasteryMap: { ...state.topicMasteryMap, [topicSlug]: updated },
          };
        });
      },

      toggleBookmark: (questionId, topicSlug) => {
        set((state) => {
          const bookmarks = new Set(state.globalBookmarks);
          const isBookmarked = bookmarks.has(questionId);
          if (isBookmarked) {
            bookmarks.delete(questionId);
          } else {
            bookmarks.add(questionId);
          }

          let updatedMap = state.topicMasteryMap;
          if (topicSlug) {
            const current = state.getTopicMastery(topicSlug);
            const topicBm = new Set(current.bookmarkedQuestionIds);
            if (isBookmarked) {
              topicBm.delete(questionId);
            } else {
              topicBm.add(questionId);
            }
            updatedMap = {
              ...state.topicMasteryMap,
              [topicSlug]: { ...current, bookmarkedQuestionIds: Array.from(topicBm) },
            };
          }

          return {
            globalBookmarks: Array.from(bookmarks),
            topicMasteryMap: updatedMap,
          };
        });
      },

      getTopicMastery: (topicSlug) => {
        const map = get().topicMasteryMap;
        if (map[topicSlug]) {
          return map[topicSlug];
        }
        return {
          topicSlug,
          conceptCompleted: false,
          questionsAttempted: 0,
          questionsCorrect: 0,
          level1Attempted: 0,
          level1Correct: 0,
          level2Attempted: 0,
          level2Correct: 0,
          level3Attempted: 0,
          level3Correct: 0,
          avgTimeSeconds: 0,
          masteryScore: 0,
          bookmarkedQuestionIds: [],
          wrongQuestionIds: [],
        };
      },
    }),
    {
      name: 'bankcbt-topic-practice-storage',
      partialize: (state) => ({
        selectedExam: state.selectedExam,
        selectedCategory: state.selectedCategory,
        selectedDifficulty: state.selectedDifficulty,
        practiceMode: state.practiceMode,
        preferredLanguage: state.preferredLanguage,
        topicMasteryMap: state.topicMasteryMap,
        globalBookmarks: state.globalBookmarks,
      }),
    }
  )
);
