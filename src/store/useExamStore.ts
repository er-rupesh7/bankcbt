import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  Exam,
  Section,
  Question,
  PaletteState,
  Language,
  QuestionRuntimeState,
  ExamSubmissionResult,
} from '@/types/exam';

interface ExamStoreState {
  // Static Exam Data
  exam: Exam | null;
  currentSectionId: string | null;
  currentQuestionId: string | null;
  language: Language;

  // Timers & Controls
  isExamStarted: boolean;
  isExamSubmitted: boolean;
  totalTimeRemaining: number; // In seconds (for composite timing)
  sectionTimers: Record<string, number>; // sectionId -> remaining seconds (for sectional lock)
  completedSectionIds: string[]; // Sections already completed & locked

  // Question Runtime State Map (questionId -> QuestionRuntimeState)
  questionStates: Record<string, QuestionRuntimeState>;
  
  // Temporary unstored selection for current question before clicking Save & Next
  currentDraftOptionId: string | null;

  // UI state
  isQuestionPaletteOpen: boolean;
  isSubmitModalOpen: boolean;
  isGatewayOpen: boolean;
  submissionResult: ExamSubmissionResult | null;
  
  // Actions
  initializeExam: (examData: Exam) => void;
  startExam: () => void;
  tickTimer: () => void;
  setLanguage: (lang: Language) => void;
  returnToGateway: () => void;
  toggleQuestionPalette: () => void;
  setQuestionPaletteOpen: (open: boolean) => void;
  
  // Navigation & Palette Actions
  selectOptionDraft: (optionId: string) => void;
  saveAndNext: () => void;
  markForReviewAndNext: () => void;
  clearResponse: () => void;
  jumpToQuestion: (targetQuestionId: string) => void;
  goToPrevQuestion: () => void;
  
  // Section Navigation
  switchSection: (targetSectionId: string) => void;
  autoAdvanceSection: () => void;
  
  // Submission
  openSubmitModal: () => void;
  closeSubmitModal: () => void;
  submitExam: () => void;
  resetExamState: () => void;
}

export const useExamStore = create<ExamStoreState>()(
  persist(
    (set, get) => ({
      exam: null,
      currentSectionId: null,
      currentQuestionId: null,
      language: 'en',
      isExamStarted: false,
      isExamSubmitted: false,
      totalTimeRemaining: 3600,
      sectionTimers: {},
      completedSectionIds: [],
      questionStates: {},
      currentDraftOptionId: null,
      isQuestionPaletteOpen: false,
      isSubmitModalOpen: false,
      isGatewayOpen: true,
      submissionResult: null,

      initializeExam: (examData: Exam) => {
        const initialQuestionStates: Record<string, QuestionRuntimeState> = {};
        const initialSectionTimers: Record<string, number> = {};

        examData.sections.forEach((sec) => {
          initialSectionTimers[sec.id] = sec.durationSeconds;
          sec.questions.forEach((q) => {
            initialQuestionStates[q.id] = {
              selectedOptionId: null,
              paletteState: 'NOT_VISITED',
              timeSpentSeconds: 0,
              visitCount: 0,
              isEvaluated: false,
              visitTimeline: [],
            };
          });
        });

        const firstSection = examData.sections[0];
        const firstQuestion = firstSection?.questions[0];

        // First question of first section starts as NOT_ANSWERED (visited)
        if (firstQuestion) {
          initialQuestionStates[firstQuestion.id] = {
            ...initialQuestionStates[firstQuestion.id],
            paletteState: 'NOT_ANSWERED',
            visitCount: 1,
            visitTimeline: [
              {
                enteredAt: Date.now(),
                durationSeconds: 0,
                actionTaken: 'INITIAL_LOAD',
              },
            ],
          };
        }

        set({
          exam: examData,
          currentSectionId: firstSection?.id || null,
          currentQuestionId: firstQuestion?.id || null,
          language: 'en',
          isExamStarted: true,
          isExamSubmitted: false,
          isGatewayOpen: false,
          totalTimeRemaining: examData.totalDurationSeconds,
          sectionTimers: initialSectionTimers,
          completedSectionIds: [],
          questionStates: initialQuestionStates,
          currentDraftOptionId: null,
          isQuestionPaletteOpen: false,
          submissionResult: null,
        });
      },

      returnToGateway: () => {
        set({
          isExamStarted: false,
          isGatewayOpen: true,
          isExamSubmitted: false,
          submissionResult: null,
        });
      },

      startExam: () => {
        set({ isExamStarted: true });
      },

      setLanguage: (lang: Language) => {
        set({ language: lang });
      },

      tickTimer: () => {
        const state = get();
        if (!state.isExamStarted || state.isExamSubmitted || !state.exam) return;

        const currentSecId = state.currentSectionId;
        const currentQId = state.currentQuestionId;

        // 1. Increment active question timeSpent
        const updatedQuestionStates = { ...state.questionStates };
        if (currentQId && updatedQuestionStates[currentQId]) {
          updatedQuestionStates[currentQId] = {
            ...updatedQuestionStates[currentQId],
            timeSpentSeconds: updatedQuestionStates[currentQId].timeSpentSeconds + 1,
          };
        }

        // 2. Decrement composite timer
        const newTotalTime = Math.max(0, state.totalTimeRemaining - 1);

        // 3. Decrement sectional timer if SECTIONAL_LOCKED
        if (state.exam.timingType === 'SECTIONAL_LOCKED' && currentSecId) {
          const currentSecTime = state.sectionTimers[currentSecId] ?? 0;
          const newSecTime = Math.max(0, currentSecTime - 1);

          const updatedSectionTimers = {
            ...state.sectionTimers,
            [currentSecId]: newSecTime,
          };

          if (newSecTime === 0) {
            // Auto-advance section when 20 minutes hit 00:00!
            set({
              totalTimeRemaining: newTotalTime,
              sectionTimers: updatedSectionTimers,
              questionStates: updatedQuestionStates,
            });
            get().autoAdvanceSection();
            return;
          }

          set({
            totalTimeRemaining: newTotalTime,
            sectionTimers: updatedSectionTimers,
            questionStates: updatedQuestionStates,
          });
        } else {
          // Composite mode (e.g. IBPS RRB 45 mins)
          if (newTotalTime === 0) {
            set({
              totalTimeRemaining: 0,
              questionStates: updatedQuestionStates,
            });
            get().submitExam();
            return;
          }

          set({
            totalTimeRemaining: newTotalTime,
            questionStates: updatedQuestionStates,
          });
        }
      },

      selectOptionDraft: (optionId: string) => {
        set({ currentDraftOptionId: optionId });
      },

      saveAndNext: () => {
        const state = get();
        const { currentQuestionId, currentSectionId, exam, questionStates, currentDraftOptionId } = state;
        if (!currentQuestionId || !currentSectionId || !exam) return;

        const currentSection = exam.sections.find((s) => s.id === currentSectionId);
        if (!currentSection) return;

        const existingState = questionStates[currentQuestionId];
        const chosenOptionId = currentDraftOptionId ?? existingState?.selectedOptionId ?? null;

        // Determine new palette state
        const newPaletteState: PaletteState = chosenOptionId ? 'ANSWERED' : 'NOT_ANSWERED';
        const isEvaluated = chosenOptionId !== null;

        const updatedStates = {
          ...questionStates,
          [currentQuestionId]: {
            ...existingState,
            selectedOptionId: chosenOptionId,
            paletteState: newPaletteState,
            isEvaluated,
          },
        };

        // Move to next question in section
        const currentIndex = currentSection.questions.findIndex((q) => q.id === currentQuestionId);
        const nextQuestion = currentSection.questions[currentIndex + 1];

        if (nextQuestion) {
          const nextState = updatedStates[nextQuestion.id];
          const updatedNextPalette = nextState.paletteState === 'NOT_VISITED' ? 'NOT_ANSWERED' : nextState.paletteState;

          updatedStates[nextQuestion.id] = {
            ...nextState,
            paletteState: updatedNextPalette,
            visitCount: nextState.visitCount + 1,
          };

          set({
            questionStates: updatedStates,
            currentQuestionId: nextQuestion.id,
            currentDraftOptionId: nextState.selectedOptionId,
          });
        } else {
          // Reached end of current section
          set({
            questionStates: updatedStates,
            currentDraftOptionId: null,
          });
        }
      },

      markForReviewAndNext: () => {
        const state = get();
        const { currentQuestionId, currentSectionId, exam, questionStates, currentDraftOptionId } = state;
        if (!currentQuestionId || !currentSectionId || !exam) return;

        const currentSection = exam.sections.find((s) => s.id === currentSectionId);
        if (!currentSection) return;

        const existingState = questionStates[currentQuestionId];
        const chosenOptionId = currentDraftOptionId ?? existingState?.selectedOptionId ?? null;

        // TCS iON Domain Rule:
        // If option is chosen -> ANSWERED_AND_MARKED_FOR_REVIEW (Evaluated in final scoring)
        // If no option chosen -> MARKED_FOR_REVIEW (NOT evaluated in final scoring)
        const newPaletteState: PaletteState = chosenOptionId 
          ? 'ANSWERED_AND_MARKED_FOR_REVIEW' 
          : 'MARKED_FOR_REVIEW';
        
        const isEvaluated = chosenOptionId !== null;

        const updatedStates = {
          ...questionStates,
          [currentQuestionId]: {
            ...existingState,
            selectedOptionId: chosenOptionId,
            paletteState: newPaletteState,
            isEvaluated,
          },
        };

        // Move to next question
        const currentIndex = currentSection.questions.findIndex((q) => q.id === currentQuestionId);
        const nextQuestion = currentSection.questions[currentIndex + 1];

        if (nextQuestion) {
          const nextState = updatedStates[nextQuestion.id];
          const updatedNextPalette = nextState.paletteState === 'NOT_VISITED' ? 'NOT_ANSWERED' : nextState.paletteState;

          updatedStates[nextQuestion.id] = {
            ...nextState,
            paletteState: updatedNextPalette,
            visitCount: nextState.visitCount + 1,
          };

          set({
            questionStates: updatedStates,
            currentQuestionId: nextQuestion.id,
            currentDraftOptionId: nextState.selectedOptionId,
          });
        } else {
          set({
            questionStates: updatedStates,
            currentDraftOptionId: null,
          });
        }
      },

      clearResponse: () => {
        const state = get();
        const { currentQuestionId, questionStates } = state;
        if (!currentQuestionId) return;

        const existingState = questionStates[currentQuestionId];
        const updatedStates = {
          ...questionStates,
          [currentQuestionId]: {
            ...existingState,
            selectedOptionId: null,
            paletteState: 'NOT_ANSWERED' as PaletteState,
            isEvaluated: false,
          },
        };

        set({
          questionStates: updatedStates,
          currentDraftOptionId: null,
        });
      },

      jumpToQuestion: (targetQuestionId: string) => {
        const state = get();
        const { currentQuestionId, questionStates, exam } = state;
        if (!exam || !targetQuestionId || targetQuestionId === currentQuestionId) return;

        // Find target section
        let targetSection: Section | undefined;
        for (const sec of exam.sections) {
          if (sec.questions.some((q) => q.id === targetQuestionId)) {
            targetSection = sec;
            break;
          }
        }

        if (!targetSection) return;

        // If hard sectional timing is active, verify user is in current active section
        if (exam.timingType === 'SECTIONAL_LOCKED' && targetSection.id !== state.currentSectionId) {
          return; // Blocked: Hard sectional lock prevents switching to questions outside current section!
        }

        const updatedStates = { ...questionStates };

        // Handle current question exit:
        // In authentic TCS iON, if an option was clicked but "Save & Next" was NOT clicked,
        // jumping away directly via the palette does NOT save that draft option!
        if (currentQuestionId && updatedStates[currentQuestionId]) {
          const curr = updatedStates[currentQuestionId];
          // If it was NOT_VISITED, now marked NOT_ANSWERED
          if (curr.paletteState === 'NOT_VISITED') {
            updatedStates[currentQuestionId] = {
              ...curr,
              paletteState: 'NOT_ANSWERED',
            };
          }
        }

        // Handle target question entrance:
        const targetState = updatedStates[targetQuestionId];
        const targetPalette = targetState.paletteState === 'NOT_VISITED' ? 'NOT_ANSWERED' : targetState.paletteState;

        updatedStates[targetQuestionId] = {
          ...targetState,
          paletteState: targetPalette,
          visitCount: targetState.visitCount + 1,
        };

        set({
          currentSectionId: targetSection.id,
          currentQuestionId: targetQuestionId,
          questionStates: updatedStates,
          currentDraftOptionId: targetState.selectedOptionId, // Load previously saved answer if any
        });
      },

      goToPrevQuestion: () => {
        const state = get();
        const { currentQuestionId, currentSectionId, exam } = state;
        if (!currentQuestionId || !currentSectionId || !exam) return;

        const currentSection = exam.sections.find((s) => s.id === currentSectionId);
        if (!currentSection) return;

        const currentIndex = currentSection.questions.findIndex((q) => q.id === currentQuestionId);
        if (currentIndex > 0) {
          const prevQuestion = currentSection.questions[currentIndex - 1];
          get().jumpToQuestion(prevQuestion.id);
        }
      },

      toggleQuestionPalette: () => {
        set((state) => ({ isQuestionPaletteOpen: !state.isQuestionPaletteOpen }));
      },

      setQuestionPaletteOpen: (open: boolean) => {
        set({ isQuestionPaletteOpen: open });
      },

      switchSection: (targetSectionId: string) => {
        const state = get();
        const { exam, currentSectionId, completedSectionIds } = state;
        if (!exam || !targetSectionId || targetSectionId === currentSectionId) return;

        // In SECTIONAL_LOCKED mode, candidates CANNOT manually switch sections!
        if (exam.timingType === 'SECTIONAL_LOCKED') {
          return;
        }

        // In COMPOSITE mode (e.g. IBPS RRB), candidates can freely switch
        const targetSection = exam.sections.find((s) => s.id === targetSectionId);
        if (!targetSection || targetSection.questions.length === 0) return;

        const firstQ = targetSection.questions[0];
        get().jumpToQuestion(firstQ.id);
      },

      autoAdvanceSection: () => {
        const state = get();
        const { exam, currentSectionId, completedSectionIds } = state;
        if (!exam || !currentSectionId) return;

        const currentIndex = exam.sections.findIndex((s) => s.id === currentSectionId);
        const nextSection = exam.sections[currentIndex + 1];

        const updatedCompleted = [...completedSectionIds, currentSectionId];

        if (nextSection) {
          // Lock current section and advance to next
          const firstQ = nextSection.questions[0];
          const updatedStates = { ...state.questionStates };
          
          if (firstQ) {
            const fState = updatedStates[firstQ.id];
            updatedStates[firstQ.id] = {
              ...fState,
              paletteState: fState.paletteState === 'NOT_VISITED' ? 'NOT_ANSWERED' : fState.paletteState,
              visitCount: fState.visitCount + 1,
            };
          }

          set({
            completedSectionIds: updatedCompleted,
            currentSectionId: nextSection.id,
            currentQuestionId: firstQ?.id || null,
            questionStates: updatedStates,
            currentDraftOptionId: firstQ ? updatedStates[firstQ.id]?.selectedOptionId : null,
          });
        } else {
          // Last section time expired -> Auto Submit Exam!
          set({ completedSectionIds: updatedCompleted });
          get().submitExam();
        }
      },

      openSubmitModal: () => set({ isSubmitModalOpen: true }),
      closeSubmitModal: () => set({ isSubmitModalOpen: false }),

      submitExam: () => {
        const state = get();
        const { exam, questionStates } = state;
        if (!exam || state.isExamSubmitted) return;

        // Post-Exam Evaluation Calculation
        let totalScore = 0;
        let totalCorrect = 0;
        let totalIncorrect = 0;
        let totalUnattempted = 0;
        let totalOptionESelected = 0;
        let totalBlankWithPenalty = 0;
        let totalNegativePenaltyDeducted = 0;

        const isTRE4 = !!(exam.isTRE4MarkingScheme || exam.stage === 'TRE_4_0');

        const sectionalResults = exam.sections.map((sec) => {
          let secScore = 0;
          let secCorrect = 0;
          let secIncorrect = 0;
          let secUnattempted = 0;
          let secTimeSpent = 0;

          sec.questions.forEach((q) => {
            const qState = questionStates[q.id];
            secTimeSpent += qState?.timeSpentSeconds || 0;

            const isEvaluated = !!(qState?.isEvaluated && qState?.selectedOptionId);
            const selectedOptId = qState?.selectedOptionId;
            const isOptionESelected =
              (q.isOptionENotAnswered || isTRE4) &&
              (selectedOptId === 'E' || q.options.find((o) => o.id === selectedOptId)?.identifier === 'E');

            if (isTRE4) {
              if (isOptionESelected) {
                // Rule 3: Option E (Not Answered) -> 0 marks (safe skip without blank penalty)
                totalOptionESelected += 1;
                secUnattempted += 1;
              } else if (isEvaluated && selectedOptId) {
                // Candidate chose Option A, B, C, or D
                const correctOption = q.options.find((opt) => opt.isCorrect);
                if (correctOption && correctOption.id === selectedOptId) {
                  // Rule 1: Correct option A/B/C/D -> +1 mark
                  secScore += q.marks;
                  secCorrect += 1;
                } else {
                  // Rule 2: Incorrect option A/B/C/D -> -1/3 mark
                  const incorrectPenalty = q.negativeMarks || (1 / 3);
                  secScore -= incorrectPenalty;
                  secIncorrect += 1;
                  totalNegativePenaltyDeducted += incorrectPenalty;
                }
              } else {
                // Rule 4: Completely unselected / blank question -> -1/3 mark penalty!
                const blankPenalty = q.penaltyForBlank || (1 / 3);
                secScore -= blankPenalty;
                secUnattempted += 1;
                totalBlankWithPenalty += 1;
                totalNegativePenaltyDeducted += blankPenalty;
              }
            } else {
              // Banking exams and historical papers (TRE 1.0, 2.0, 3.0)
              if (isEvaluated && selectedOptId) {
                const correctOption = q.options.find((opt) => opt.isCorrect);
                if (correctOption && correctOption.id === selectedOptId) {
                  secScore += q.marks;
                  secCorrect += 1;
                } else {
                  secScore -= q.negativeMarks; // -0.25 in Banking, 0.0 in historical TRE
                  secIncorrect += 1;
                  totalNegativePenaltyDeducted += q.negativeMarks;
                }
              } else {
                secUnattempted += 1;
              }
            }
          });

          const totalAttempted = secCorrect + secIncorrect;
          const accuracy = totalAttempted > 0 ? (secCorrect / totalAttempted) * 100 : 0;
          const cutoff = sec.sectionalCutoff || 10;

          totalScore += secScore;
          totalCorrect += secCorrect;
          totalIncorrect += secIncorrect;
          totalUnattempted += secUnattempted;

          return {
            sectionId: sec.id,
            sectionType: sec.sectionType,
            displayName: sec.displayName,
            score: Math.round(secScore * 100) / 100,
            maxMarks: sec.maxMarks,
            correctCount: secCorrect,
            incorrectCount: secIncorrect,
            unattemptedCount: secUnattempted,
            accuracy: Math.round(accuracy * 10) / 10,
            cutoff,
            clearedCutoff: secScore >= cutoff,
            timeSpentSeconds: secTimeSpent,
          };
        });

        // Question Analysis and Time-Trap Matrix
        let fastCorrectCount = 0;
        let slowCorrectCount = 0;
        let fastWrongCount = 0;
        let fatalTimeTrapsCount = 0;

        const questionsAnalysis = exam.sections.flatMap((sec) =>
          sec.questions.map((q) => {
            const qState = questionStates[q.id] || {
              selectedOptionId: null,
              paletteState: 'NOT_VISITED' as PaletteState,
              timeSpentSeconds: 0,
              isEvaluated: false,
            };

            const correctOption = q.options.find((opt) => opt.isCorrect);
            const selectedOptId = qState.selectedOptionId;
            const isOptionESelected =
              (q.isOptionENotAnswered || isTRE4) &&
              (selectedOptId === 'E' || q.options.find((o) => o.id === selectedOptId)?.identifier === 'E');

            const isAnswered = qState.isEvaluated && selectedOptId !== null;
            const isCorrect = isAnswered && !isOptionESelected && correctOption?.id === selectedOptId;
            const timeSpent = qState.timeSpentSeconds;
            const idealTime = q.avgIdealTimeSeconds || 45;

            let quadrant: 'FAST_CORRECT' | 'SLOW_CORRECT' | 'FAST_WRONG' | 'SLOW_WRONG_OR_SKIPPED';
            let marksAwarded = 0;
            let isBlankPenaltyApplied = false;

            if (isTRE4) {
              if (isOptionESelected) {
                marksAwarded = 0.0;
                quadrant = timeSpent > 90 ? 'SLOW_WRONG_OR_SKIPPED' : 'FAST_WRONG';
              } else if (isCorrect) {
                marksAwarded = q.marks;
                if (timeSpent <= idealTime) {
                  quadrant = 'FAST_CORRECT';
                  fastCorrectCount++;
                } else {
                  quadrant = 'SLOW_CORRECT';
                  slowCorrectCount++;
                }
              } else if (isAnswered) {
                marksAwarded = -(q.negativeMarks || (1 / 3));
                if (timeSpent > 90) {
                  quadrant = 'SLOW_WRONG_OR_SKIPPED';
                  fatalTimeTrapsCount++;
                } else {
                  quadrant = 'FAST_WRONG';
                  fastWrongCount++;
                }
              } else {
                // Completely blank / unselected question in TRE 4.0
                marksAwarded = -(q.penaltyForBlank || (1 / 3));
                isBlankPenaltyApplied = true;
                if (timeSpent > 90) {
                  quadrant = 'SLOW_WRONG_OR_SKIPPED';
                  fatalTimeTrapsCount++;
                } else {
                  quadrant = 'FAST_WRONG';
                }
              }
            } else {
              // Banking exams and historical papers
              if (isCorrect) {
                marksAwarded = q.marks;
                if (timeSpent <= idealTime) {
                  quadrant = 'FAST_CORRECT';
                  fastCorrectCount++;
                } else {
                  quadrant = 'SLOW_CORRECT';
                  slowCorrectCount++;
                }
              } else if (isAnswered && !isCorrect) {
                marksAwarded = -q.negativeMarks;
                if (timeSpent > 90) {
                  quadrant = 'SLOW_WRONG_OR_SKIPPED';
                  fatalTimeTrapsCount++;
                } else {
                  quadrant = 'FAST_WRONG';
                  fastWrongCount++;
                }
              } else {
                // Unattempted
                marksAwarded = 0;
                if (timeSpent > 90) {
                  quadrant = 'SLOW_WRONG_OR_SKIPPED';
                  fatalTimeTrapsCount++;
                } else {
                  quadrant = 'FAST_WRONG';
                }
              }
            }

            return {
              questionId: q.id,
              questionNumber: q.questionNumber,
              sectionType: sec.sectionType,
              topic: q.topic,
              difficulty: q.difficulty,
              timeSpentSeconds: timeSpent,
              avgIdealTimeSeconds: idealTime,
              paletteState: qState.paletteState,
              userSelectedOptionId: qState.selectedOptionId,
              correctOptionId: correctOption?.id || '',
              isCorrect,
              marksAwarded: Math.round(marksAwarded * 1000) / 1000,
              isOptionESelected,
              isBlankPenaltyApplied,
              quadrant,
              conventionalSolution: q.conventionalSolutionEn,
              shortcutTrick: q.shortcutTrickEn,
              diagramSpec: q.diagramSpec,
            };
          })
        );

        const fatalTimeTrapQuestions = questionsAnalysis.filter(
          (qa) => qa.quadrant === 'SLOW_WRONG_OR_SKIPPED'
        );

        const totalAttempts = totalCorrect + totalIncorrect;
        const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;
        
        // Percentile estimation based on normalized bell curve
        const scorePercentage = (totalScore / exam.totalMarks) * 100;
        const percentilePredictor = Math.min(99.9, Math.max(1.0, 50 + (scorePercentage - 55) * 1.8));

        // BPSC TRE specific merit calculation & topic intelligence
        const isBpscExam = exam.examBody === 'BPSC';
        let bpscMeritScore = 0;
        let isLanguageQualified = true;
        let languageScore = 0;
        const bpscTopicBreakdown: Record<
          string,
          {
            unitName: string;
            total: number;
            correct: number;
            incorrect: number;
            unattempted: number;
            accuracy: number;
          }
        > = {};

        if (isBpscExam) {
          sectionalResults.forEach((sec) => {
            if (sec.sectionType === 'BPSC_LANGUAGE') {
              languageScore = sec.score;
              isLanguageQualified = sec.score >= (sec.cutoff || 9.0);
            } else {
              bpscMeritScore += sec.score;
            }
          });

          questionsAnalysis.forEach((qa) => {
            const topicKey = qa.topic || 'General';
            if (!bpscTopicBreakdown[topicKey]) {
              bpscTopicBreakdown[topicKey] = {
                unitName: topicKey,
                total: 0,
                correct: 0,
                incorrect: 0,
                unattempted: 0,
                accuracy: 0,
              };
            }
            bpscTopicBreakdown[topicKey].total += 1;
            if (qa.isCorrect) {
              bpscTopicBreakdown[topicKey].correct += 1;
            } else if (qa.userSelectedOptionId && !qa.isOptionESelected) {
              bpscTopicBreakdown[topicKey].incorrect += 1;
            } else {
              bpscTopicBreakdown[topicKey].unattempted += 1;
            }
          });

          Object.keys(bpscTopicBreakdown).forEach((k) => {
            const item = bpscTopicBreakdown[k];
            const attempted = item.correct + item.incorrect;
            item.accuracy = attempted > 0 ? Math.round((item.correct / attempted) * 100) : 0;
          });
        }

        const submissionResult: ExamSubmissionResult = {
          attemptId: `att_${Date.now()}`,
          examTitle: exam.title,
          submittedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          totalScore: Math.round(totalScore * 100) / 100,
          totalMarks: exam.totalMarks,
          totalCorrect,
          totalIncorrect,
          totalUnattempted,
          accuracy: Math.round(overallAccuracy * 10) / 10,
          percentilePredictor: Math.round(percentilePredictor * 10) / 10,
          sectionalResults,
          timeTrapAnalysis: {
            fastCorrectCount,
            slowCorrectCount,
            fastWrongCount,
            fatalTimeTrapsCount,
            fatalTimeTrapQuestions,
          },
          // BPSC Fields
          isBpscExam,
          isTRE4MarkingScheme: isTRE4,
          totalOptionESelected,
          totalBlankWithPenalty,
          totalNegativePenaltyDeducted: Math.round(totalNegativePenaltyDeducted * 100) / 100,
          bpscSubject: 'Computer Science (Class 11-12)',
          isLanguageQualified,
          languageScore,
          bpscMeritScore: Math.round(bpscMeritScore * 100) / 100,
          bpscMaxMeritMarks: 120,
          bpscTopicBreakdown,
          questionsAnalysis,
        };

        set({
          isExamSubmitted: true,
          isSubmitModalOpen: false,
          submissionResult,
        });
      },

      resetExamState: () => {
        set({
          exam: null,
          currentSectionId: null,
          currentQuestionId: null,
          isExamStarted: false,
          isGatewayOpen: true,
          isExamSubmitted: false,
          questionStates: {},
          submissionResult: null,
          completedSectionIds: [],
        });
      },
    }),
    {
      name: 'bankexam_tcs_ion_state',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        exam: state.exam,
        currentSectionId: state.currentSectionId,
        currentQuestionId: state.currentQuestionId,
        language: state.language,
        isExamStarted: state.isExamStarted,
        isExamSubmitted: state.isExamSubmitted,
        totalTimeRemaining: state.totalTimeRemaining,
        sectionTimers: state.sectionTimers,
        completedSectionIds: state.completedSectionIds,
        questionStates: state.questionStates,
        submissionResult: state.submissionResult,
      }),
    }
  )
);
