'use client';

import React from 'react';
import { useExamStore } from '@/store/useExamStore';
import { PaletteState, Question } from '@/types/exam';

export const QuestionPalette: React.FC = () => {
  const {
    exam,
    currentSectionId,
    currentQuestionId,
    questionStates,
    jumpToQuestion,
  } = useExamStore();

  if (!exam || !currentSectionId) return null;

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  if (!currentSection) return null;

  // Calculate counts for current section
  let notVisitedCount = 0;
  let notAnsweredCount = 0;
  let answeredCount = 0;
  let markedForReviewCount = 0;
  let answeredAndMarkedCount = 0;

  currentSection.questions.forEach((q) => {
    const qState = questionStates[q.id]?.paletteState || 'NOT_VISITED';
    switch (qState) {
      case 'NOT_VISITED':
        notVisitedCount++;
        break;
      case 'NOT_ANSWERED':
        notAnsweredCount++;
        break;
      case 'ANSWERED':
        answeredCount++;
        break;
      case 'MARKED_FOR_REVIEW':
        markedForReviewCount++;
        break;
      case 'ANSWERED_AND_MARKED_FOR_REVIEW':
        answeredAndMarkedCount++;
        break;
    }
  });

  const renderBadgeIcon = (state: PaletteState, num: number, isCurrent: boolean) => {
    const baseStyle =
      'w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-bold text-xs sm:text-sm rounded relative transition-transform shadow-xs';
    const activeBorder = isCurrent ? 'ring-2 ring-blue-700 ring-offset-1 scale-105 z-10' : '';

    switch (state) {
      case 'NOT_VISITED':
        return (
          <div className={`${baseStyle} bg-[#e0e0e0] text-gray-700 border border-gray-400 ${activeBorder}`}>
            {num}
          </div>
        );
      case 'NOT_ANSWERED':
        return (
          <div className={`${baseStyle} bg-[#e53935] text-white rounded-t-sm rounded-b-md ${activeBorder}`}>
            {num}
          </div>
        );
      case 'ANSWERED':
        return (
          <div className={`${baseStyle} bg-[#2e7d32] text-white rounded-t-sm rounded-b-md ${activeBorder}`}>
            {num}
          </div>
        );
      case 'MARKED_FOR_REVIEW':
        return (
          <div className={`${baseStyle} bg-[#7b1fa2] text-white rounded-full ${activeBorder}`}>
            {num}
          </div>
        );
      case 'ANSWERED_AND_MARKED_FOR_REVIEW':
        return (
          <div className={`${baseStyle} bg-[#7b1fa2] text-white rounded-full ${activeBorder}`}>
            {num}
            {/* Small green badge at bottom right representing Answered + Evaluated */}
            <span
              title="Answered & Marked for Review (Evaluated in IBPS)"
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00c853] border border-white rounded-full flex items-center justify-center shadow-xs"
            >
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
        );
    }
  };

  return (
    <aside className="w-full lg:w-80 bg-[#f4f7fa] border-l border-[#c4d1db] flex flex-col h-full select-none text-gray-800">
      {/* Legend Area (Exact TCS iON Legend) */}
      <div className="p-3 bg-white border-b border-[#c4d1db] shadow-xs">
        <h3 className="text-xs font-bold text-[#0e3b64] uppercase tracking-wider mb-2 border-b pb-1">
          Question Palette Legend
        </h3>

        <div className="grid grid-cols-2 gap-2 text-[11px] leading-tight">
          {/* Answered */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-t-sm rounded-b bg-[#2e7d32] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {answeredCount}
            </span>
            <span className="text-gray-700">Answered</span>
          </div>

          {/* Not Answered */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-t-sm rounded-b bg-[#e53935] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {notAnsweredCount}
            </span>
            <span className="text-gray-700">Not Answered</span>
          </div>

          {/* Not Visited */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-[#e0e0e0] border border-gray-400 text-gray-700 flex items-center justify-center font-bold text-xs shrink-0">
              {notVisitedCount}
            </span>
            <span className="text-gray-700">Not Visited</span>
          </div>

          {/* Marked for Review */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-full bg-[#7b1fa2] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {markedForReviewCount}
            </span>
            <span className="text-gray-700">Marked for Review</span>
          </div>
        </div>

        {/* Answered and Marked for Review (Evaluated Notice) */}
        <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-start space-x-2 text-[10.5px]">
          <div className="relative shrink-0">
            <span className="w-6 h-6 rounded-full bg-[#7b1fa2] text-white flex items-center justify-center font-bold text-xs">
              {answeredAndMarkedCount}
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00c853] border border-white rounded-full flex items-center justify-center">
              <svg className="w-1.5 h-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <span className="text-purple-900 font-medium">
            Answered & Marked for Review (<span className="text-emerald-700 font-bold">will be evaluated</span>)
          </span>
        </div>
      </div>

      {/* Section Filter Banner */}
      <div className="bg-[#0e3b64] text-white px-3 py-1.5 text-xs font-semibold flex items-center justify-between">
        <span>Section: {currentSection.displayName}</span>
        <span className="font-mono text-[11px] text-amber-300">
          Q: {currentSection.questions.length} Total
        </span>
      </div>

      {/* Question Grid */}
      <div className="p-3 overflow-y-auto flex-1 bg-[#edf2f7]">
        <div className="grid grid-cols-5 gap-2 justify-items-center">
          {currentSection.questions.map((q: Question) => {
            const state = questionStates[q.id]?.paletteState || 'NOT_VISITED';
            const isCurrent = q.id === currentQuestionId;

            return (
              <button
                key={q.id}
                onClick={() => jumpToQuestion(q.id)}
                title={`Question ${q.orderInSection}: ${state.replace(/_/g, ' ')}`}
                className="cursor-pointer focus:outline-none"
              >
                {renderBadgeIcon(state, q.orderInSection, isCurrent)}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
