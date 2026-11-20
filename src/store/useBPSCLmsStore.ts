import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  LMSSectionKey,
  LMSSubjectKey,
  UserTopicProgress,
  UserTopicMastery,
  UserRevisionItem,
  UserPersonalNote
} from '@/types/bpscLms';

interface BPSCLmsStoreState {
  // Navigation State
  activeSectionKey: LMSSectionKey;
  activeSubjectKey: LMSSubjectKey;
  activeChapterId: string;
  activeTopicId: string;
  languagePreference: 'EN' | 'HI' | 'BILINGUAL';

  // Persistence Maps
  topicProgressMap: Record<string, UserTopicProgress>;
  topicMasteryMap: Record<string, UserTopicMastery>;
  bookmarks: string[]; // List of topicIds
  personalNotes: Record<string, UserPersonalNote>; // Keyed by topicId
  revisionQueue: UserRevisionItem[];
  drillStats: {
    totalDrills: number;
    totalQuestions: number;
    totalCorrect: number;
  };

  // Actions
  setActiveTopic: (sectionKey: LMSSectionKey, subjectKey: LMSSubjectKey, chapterId: string, topicId: string) => void;
  setLanguagePreference: (pref: 'EN' | 'HI' | 'BILINGUAL') => void;
  markTopicCompleted: (topicId: string, timeSpentSeconds: number, kcScore?: { correct: number; total: number }) => void;
  toggleBookmark: (topicId: string, topicTitle?: string, chapterTitle?: string, subjectKey?: LMSSubjectKey) => void;
  savePersonalNote: (topicId: string, title: string, content: string) => void;
  deletePersonalNote: (topicId: string) => void;
  recordPracticeAttempt: (topicId: string, chapterId: string, subjectKey: LMSSubjectKey, isCorrect: boolean) => void;
  advanceRevisionItem: (topicId: string) => void;
  scheduleSpacedRevision: (topicId: string, topicTitle: string, chapterTitle: string, subjectKey: LMSSubjectKey, reason: 'WEAK_ACCURACY' | 'BOOKMARKED' | 'SCHEDULED_SPACED') => void;

  // Selectors / Helpers
  getTopicProgress: (topicId: string) => UserTopicProgress | undefined;
  getTopicMastery: (topicId: string) => UserTopicMastery | undefined;
  getWeakTopics: () => UserTopicMastery[];
  getOverdueRevisions: () => UserRevisionItem[];
  getOverallStats: () => {
    completedTopicsCount: number;
    totalStudyMinutes: number;
    accuracyPercentage: number;
    bookmarkedCount: number;
    overdueRevisionsCount: number;
  };
}

export const useBPSCLmsStore = create<BPSCLmsStoreState>()(
  persist(
    (set, get) => ({
      activeSectionKey: 'PART_1_LANGUAGE',
      activeSubjectKey: 'ENGLISH_LANGUAGE',
      activeChapterId: 'eng-ch-parts-of-speech',
      activeTopicId: 'eng-topic-nouns-pronouns',
      languagePreference: 'BILINGUAL',

      topicProgressMap: {},
      topicMasteryMap: {},
      bookmarks: [],
      personalNotes: {},
      revisionQueue: [],
      drillStats: {
        totalDrills: 0,
        totalQuestions: 0,
        totalCorrect: 0
      },

      setActiveTopic: (sectionKey, subjectKey, chapterId, topicId) => {
        set({
          activeSectionKey: sectionKey,
          activeSubjectKey: subjectKey,
          activeChapterId: chapterId,
          activeTopicId: topicId
        });
      },

      setLanguagePreference: (pref) => {
        set({ languagePreference: pref });
      },

      markTopicCompleted: (topicId, timeSpentSeconds, kcScore) => {
        const state = get();
        const existing = state.topicProgressMap[topicId] || {
          topicId,
          isCompleted: false,
          timeSpentSeconds: 0,
          lastVisitedAt: new Date().toISOString()
        };

        const updated: UserTopicProgress = {
          ...existing,
          isCompleted: true,
          completedAt: existing.completedAt || new Date().toISOString(),
          timeSpentSeconds: existing.timeSpentSeconds + timeSpentSeconds,
          lastVisitedAt: new Date().toISOString(),
          knowledgeCheckScore: kcScore
            ? {
                correct: kcScore.correct,
                total: kcScore.total,
                percentage: Math.round((kcScore.correct / kcScore.total) * 100)
              }
            : existing.knowledgeCheckScore
        };

        set({
          topicProgressMap: {
            ...state.topicProgressMap,
            [topicId]: updated
          }
        });
      },

      toggleBookmark: (topicId, topicTitle, chapterTitle, subjectKey) => {
        const state = get();
        const isBookmarked = state.bookmarks.includes(topicId);
        const newBookmarks = isBookmarked
          ? state.bookmarks.filter(id => id !== topicId)
          : [...state.bookmarks, topicId];

        set({ bookmarks: newBookmarks });

        if (!isBookmarked && topicTitle && chapterTitle && subjectKey) {
          get().scheduleSpacedRevision(topicId, topicTitle, chapterTitle, subjectKey, 'BOOKMARKED');
        }
      },

      savePersonalNote: (topicId, title, content) => {
        const state = get();
        const note: UserPersonalNote = {
          id: `note-${topicId}-${Date.now()}`,
          topicId,
          title,
          content,
          updatedAt: new Date().toISOString()
        };
        set({
          personalNotes: {
            ...state.personalNotes,
            [topicId]: note
          }
        });
      },

      deletePersonalNote: (topicId) => {
        const state = get();
        const copy = { ...state.personalNotes };
        delete copy[topicId];
        set({ personalNotes: copy });
      },

      recordPracticeAttempt: (topicId, chapterId, subjectKey, isCorrect) => {
        const state = get();
        const currentMastery = state.topicMasteryMap[topicId] || {
          topicId,
          chapterId,
          subjectKey,
          totalAttempts: 0,
          correctAttempts: 0,
          accuracy: 0,
          masteryPercentage: 0,
          isWeakTopic: false,
          lastPracticedAt: new Date().toISOString()
        };

        const totalAttempts = currentMastery.totalAttempts + 1;
        const correctAttempts = currentMastery.correctAttempts + (isCorrect ? 1 : 0);
        const accuracy = Math.round((correctAttempts / totalAttempts) * 100);
        const isWeakTopic = totalAttempts >= 4 && accuracy < 60;

        // Progressive mastery weight formula
        const masteryPercentage = Math.min(100, Math.round(accuracy * 0.7 + (Math.min(10, totalAttempts) / 10) * 30));

        const updatedMastery: UserTopicMastery = {
          ...currentMastery,
          totalAttempts,
          correctAttempts,
          accuracy,
          masteryPercentage,
          isWeakTopic,
          lastPracticedAt: new Date().toISOString()
        };

        set({
          topicMasteryMap: {
            ...state.topicMasteryMap,
            [topicId]: updatedMastery
          },
          drillStats: {
            totalDrills: state.drillStats.totalDrills,
            totalQuestions: state.drillStats.totalQuestions + 1,
            totalCorrect: state.drillStats.totalCorrect + (isCorrect ? 1 : 0)
          }
        });

        if (isWeakTopic) {
          get().scheduleSpacedRevision(topicId, topicId, chapterId, subjectKey, 'WEAK_ACCURACY');
        }
      },

      scheduleSpacedRevision: (topicId, topicTitle, chapterTitle, subjectKey, reason) => {
        const state = get();
        const existingIdx = state.revisionQueue.findIndex(r => r.topicId === topicId);
        const now = new Date();
        const due = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day interval initially

        const item: UserRevisionItem = {
          id: `rev-${topicId}`,
          topicId,
          topicTitle,
          chapterTitle,
          subjectKey,
          addedAt: now.toISOString(),
          stage: 1,
          nextRevisionDueDate: due.toISOString(),
          isOverdue: false,
          reason
        };

        if (existingIdx >= 0) {
          const updated = [...state.revisionQueue];
          updated[existingIdx] = item;
          set({ revisionQueue: updated });
        } else {
          set({ revisionQueue: [...state.revisionQueue, item] });
        }
      },

      advanceRevisionItem: (topicId) => {
        const state = get();
        const updated = state.revisionQueue.map(item => {
          if (item.topicId === topicId) {
            const nextStage = Math.min(5, item.stage + 1) as 1 | 2 | 3 | 4 | 5;
            // Spaced intervals: Stage 1 = 1d, Stage 2 = 3d, Stage 3 = 7d, Stage 4 = 14d, Stage 5 = 30d
            const intervalsDays = [1, 3, 7, 14, 30];
            const daysToAdd = intervalsDays[nextStage - 1] || 14;
            const nextDue = new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000);
            return {
              ...item,
              stage: nextStage,
              nextRevisionDueDate: nextDue.toISOString(),
              isOverdue: false
            };
          }
          return item;
        });
        set({ revisionQueue: updated });
      },

      getTopicProgress: (topicId) => {
        return get().topicProgressMap[topicId];
      },

      getTopicMastery: (topicId) => {
        return get().topicMasteryMap[topicId];
      },

      getWeakTopics: () => {
        return Object.values(get().topicMasteryMap).filter(m => m.isWeakTopic);
      },

      getOverdueRevisions: () => {
        if (typeof window === 'undefined') return [];
        const now = new Date().toISOString();
        return get().revisionQueue.filter(item => item.nextRevisionDueDate <= now);
      },

      getOverallStats: () => {
        const state = get();
        const completedCount = Object.values(state.topicProgressMap).filter(p => p.isCompleted).length;
        const totalMinutes = Math.round(
          Object.values(state.topicProgressMap).reduce((acc, p) => acc + (p.timeSpentSeconds || 0), 0) / 60
        );
        const accuracy = state.drillStats.totalQuestions > 0
          ? Math.round((state.drillStats.totalCorrect / state.drillStats.totalQuestions) * 100)
          : 0;

        return {
          completedTopicsCount: completedCount,
          totalStudyMinutes: totalMinutes,
          accuracyPercentage: accuracy,
          bookmarkedCount: state.bookmarks.length,
          overdueRevisionsCount: get().getOverdueRevisions().length
        };
      }
    }),
    {
      name: 'bpsc_tre4_lms_state'
    }
  )
);
