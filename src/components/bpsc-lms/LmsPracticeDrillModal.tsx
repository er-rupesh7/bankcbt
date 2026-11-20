'use client';

import React, { useState } from 'react';
import { LMSPracticeQuestion, PracticeDrillMode } from '@/types/bpscLms';
import { useBPSCLmsStore } from '@/store/useBPSCLmsStore';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Flame, 
  RotateCcw, 
  Award,
  ChevronRight,
  ChevronLeft,
  Timer
} from 'lucide-react';

interface LmsPracticeDrillModalProps {
  topicTitle: string;
  topicId: string;
  chapterId: string;
  subjectKey: any;
  questions: LMSPracticeQuestion[];
  onClose: () => void;
}

export default function LmsPracticeDrillModal({
  topicTitle,
  topicId,
  chapterId,
  subjectKey,
  questions,
  onClose
}: LmsPracticeDrillModalProps) {
  const [selectedMode, setSelectedMode] = useState<PracticeDrillMode>('BPSC_EXAM');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [drillFinished, setDrillFinished] = useState(false);

  const { recordPracticeAttempt, advanceRevisionItem } = useBPSCLmsStore();

  const activeQuestions = questions.length > 0 ? questions : [];
  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (identifier: string) => {
    if (isSubmitted && selectedMode === 'BASIC') return;
    setSelectedOption(identifier);
    setUserAnswers(prev => ({ ...prev, [currentIndex]: identifier }));
  };

  const handleConfirmAnswer = () => {
    if (!currentQ || !selectedOption) return;
    setIsSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctOptionIdentifier;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    recordPracticeAttempt(topicId, chapterId, subjectKey, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(userAnswers[nextIdx] || null);
      setIsSubmitted(Boolean(userAnswers[nextIdx]));
    } else {
      setDrillFinished(true);
      advanceRevisionItem(topicId);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setSelectedOption(userAnswers[prevIdx] || null);
      setIsSubmitted(Boolean(userAnswers[prevIdx]));
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUserAnswers({});
    setScore(0);
    setDrillFinished(false);
  };

  if (!currentQ) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Practice Drill</h3>
            <button onClick={onClose} className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
              <X className="h-5 w-5 text-slate-500" />
            </button>
          </div>
          <div className="py-8 text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-3" />
            <p className="text-slate-600 dark:text-slate-300">Practice questions for this topic are being compiled according to TRE 4.0 patterns.</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                PRACTICE DRILL
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Question {currentIndex + 1} of {activeQuestions.length}
              </span>
            </div>
            <h2 className="text-base font-bold text-slate-800 dark:text-white mt-1 line-clamp-1">
              {topicTitle}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Mode selection pills */}
            <div className="hidden sm:flex rounded-lg bg-slate-200 p-0.5 text-xs font-medium dark:bg-slate-700">
              {(['BASIC', 'BPSC_EXAM', 'CHALLENGE'] as PracticeDrillMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => { setSelectedMode(mode); handleRestart(); }}
                  className={`rounded-md px-2.5 py-1 transition-all ${
                    selectedMode === mode
                      ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {mode === 'BASIC' ? 'Learn' : mode === 'BPSC_EXAM' ? 'Exam' : 'Challenge'}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!drillFinished ? (
            <>
              {/* Question Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
                  {currentQ.isAuthenticPyq ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-xs font-black text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        🏛️ OFFICIAL BPSC PYQ: {currentQ.treVersion === 'TRE_1_0' ? 'BPSC TRE 1.0' : currentQ.treVersion === 'TRE_2_0' ? 'BPSC TRE 2.0' : 'BPSC TRE 3.0'}
                      </span>
                      {currentQ.examDate && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                          📅 {currentQ.examDate}
                        </span>
                      )}
                      {currentQ.shift && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                          ⏱️ {currentQ.shift}
                        </span>
                      )}
                      {currentQ.officialQuestionNumber && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-bold text-slate-800 dark:text-slate-200">
                          {currentQ.bookletSeries ? `${currentQ.bookletSeries} ` : ''}Q.{currentQ.officialQuestionNumber}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      BPSC TRE Standard Question
                    </span>
                  )}
                  <span className="rounded bg-slate-200 px-2 py-0.5 font-medium dark:bg-slate-700">
                    {currentQ.difficulty}
                  </span>
                </div>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  {currentQ.questionTextEn}
                </p>
                {currentQ.questionTextHi && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-hindi">
                    {currentQ.questionTextHi}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOption === opt.identifier;
                  const isCorrect = opt.identifier === currentQ.correctOptionIdentifier;
                  
                  let optionStyle = 'border-slate-200 hover:border-blue-400 bg-white dark:border-slate-700 dark:bg-slate-800/60';
                  if (isSubmitted) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 shadow-sm';
                  }

                  return (
                    <button
                      key={opt.id || opt.identifier}
                      onClick={() => handleSelectOption(opt.identifier)}
                      disabled={isSubmitted}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${optionStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isSelected 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                        }`}>
                          {opt.identifier}
                        </span>
                        <div>
                          <span className="text-sm text-slate-800 dark:text-slate-200">
                            {opt.textEn}
                          </span>
                          {opt.textHi && (
                            <span className="block text-xs text-slate-500 dark:text-slate-400 font-hindi mt-0.5">
                              {opt.textHi}
                            </span>
                          )}
                        </div>
                      </div>

                      {isSubmitted && (
                        <div>
                          {isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                          {isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback & Explanation when Submitted */}
              {isSubmitted && (
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/40 dark:bg-blue-950/20 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-300">
                    <span>Explanation & BPSC Insight:</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanationEn}
                  </p>
                  {currentQ.examTrapNote && (
                    <div className="flex items-start gap-2 pt-2 text-xs text-amber-800 dark:text-amber-300">
                      <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                      <span>{currentQ.examTrapNote}</span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Results Screen */
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Drill Completed!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You scored <strong className="text-blue-600">{score}</strong> out of <strong className="text-slate-800 dark:text-slate-200">{activeQuestions.length}</strong>.
              </p>
              <div className="inline-block rounded-xl bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Your topic mastery score and spaced revision schedule have been updated.
              </div>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </button>
                <button
                  onClick={onClose}
                  className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 shadow-md"
                >
                  Return to Tutorial
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!drillFinished && (
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-800/60">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 disabled:opacity-40 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {!isSubmitted ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={!selectedOption}
                className="rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow hover:bg-blue-700 disabled:opacity-50"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow hover:bg-blue-700"
              >
                {currentIndex === activeQuestions.length - 1 ? 'Finish Drill' : 'Next Question'}
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
