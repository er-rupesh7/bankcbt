'use client';

import React from 'react';
import { useExamStore } from '@/store/useExamStore';
import { PaletteState, Question } from '@/types/exam';
import { X, User, Send } from 'lucide-react';

interface QuestionPaletteProps {
  isMobileDrawer?: boolean;
  onClose?: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  isMobileDrawer = false,
  onClose,
}) => {
  const {
    exam,
    currentSectionId,
    currentQuestionId,
    questionStates,
    jumpToQuestion,
    openSubmitModal,
  } = useExamStore();

  if (!exam || !currentSectionId) return null;

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  if (!currentSection) return null;

  const isLastSection = exam.sections[exam.sections.length - 1]?.id === currentSectionId;

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

  const handleSelectQuestion = (qId: string) => {
    jumpToQuestion(qId);
    if (isMobileDrawer && onClose) {
      onClose();
    }
  };

  const renderBadgeIcon = (state: PaletteState, num: number, isCurrent: boolean) => {
    const baseStyle =
      'w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-bold text-xs sm:text-sm rounded relative transition-transform shadow-xs';
    const activeBorder = isCurrent ? 'ring-2 ring-[#0B4F8A] ring-offset-1 scale-105 z-10' : '';

    switch (state) {
      case 'NOT_VISITED':
        return (
          <div
            className={`${baseStyle} bg-[#E2E8F0] text-[#334155] border border-[#CBD5E1] ${activeBorder}`}
            style={{ backgroundColor: '#E2E8F0', color: '#334155' }}
          >
            {num}
          </div>
        );
      case 'NOT_ANSWERED':
        return (
          <div
            className={`${baseStyle} bg-[#DC2626] text-white rounded-t-sm rounded-b-md ${activeBorder}`}
            style={{ backgroundColor: '#DC2626', color: '#ffffff' }}
          >
            {num}
          </div>
        );
      case 'ANSWERED':
        return (
          <div
            className={`${baseStyle} bg-[#16A34A] text-white rounded-t-sm rounded-b-md ${activeBorder}`}
            style={{ backgroundColor: '#16A34A', color: '#ffffff' }}
          >
            {num}
          </div>
        );
      case 'MARKED_FOR_REVIEW':
        return (
          <div
            className={`${baseStyle} bg-[#7E22CE] text-white rounded-full ${activeBorder}`}
            style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
          >
            {num}
          </div>
        );
      case 'ANSWERED_AND_MARKED_FOR_REVIEW':
        return (
          <div
            className={`${baseStyle} bg-[#7E22CE] text-white rounded-full ${activeBorder}`}
            style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
          >
            {num}
            {/* Small green badge at bottom right representing Answered + Evaluated */}
            <span
              title="Answered & Marked for Review (Evaluated in IBPS)"
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#16A34A] border border-white rounded-full flex items-center justify-center shadow-xs"
              style={{ backgroundColor: '#16A34A' }}
            >
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
        );
    }
  };

  const content = (
    <div className="flex flex-col h-full bg-[#F8FAFC] select-none text-slate-800">
      {/* Mobile Drawer Header: Candidate Profile Info + Close Button */}
      {/* Mobile Drawer Header: Candidate Profile Info + Close Button */}
      {isMobileDrawer && (
        <div
          className="p-3 bg-[#0A2F5C] text-white flex items-center justify-between border-b-2 border-[#F59E0B]"
          style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
        >
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0A2F5C] border border-white">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Karna (Candidate)</div>
              <div className="text-[10px] text-blue-200 font-mono">Roll: 2408199201 • Node: C042</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close question palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Legend Area (Exact TCS iON Legend) */}
      <div className="p-3 bg-white border-b border-slate-300 shadow-xs">
        <h3 className="text-xs font-bold text-[#0A2F5C] uppercase tracking-wider mb-2 border-b border-slate-200 pb-1">
          Question Palette Legend
        </h3>

        <div className="grid grid-cols-2 gap-2 text-[11px] leading-tight">
          {/* Answered */}
          <div className="flex items-center space-x-2">
            <span
              className="w-6 h-6 rounded-t-sm rounded-b bg-[#16A34A] text-white flex items-center justify-center font-bold text-xs shrink-0"
              style={{ backgroundColor: '#16A34A', color: '#ffffff' }}
            >
              {answeredCount}
            </span>
            <span className="text-slate-700">Answered</span>
          </div>

          {/* Not Answered */}
          <div className="flex items-center space-x-2">
            <span
              className="w-6 h-6 rounded-t-sm rounded-b bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0"
              style={{ backgroundColor: '#DC2626', color: '#ffffff' }}
            >
              {notAnsweredCount}
            </span>
            <span className="text-slate-700">Not Answered</span>
          </div>

          {/* Not Visited */}
          <div className="flex items-center space-x-2">
            <span
              className="w-6 h-6 rounded bg-[#E2E8F0] border border-[#CBD5E1] text-[#334155] flex items-center justify-center font-bold text-xs shrink-0"
              style={{ backgroundColor: '#E2E8F0', color: '#334155' }}
            >
              {notVisitedCount}
            </span>
            <span className="text-slate-700">Not Visited</span>
          </div>

          {/* Marked for Review */}
          <div className="flex items-center space-x-2">
            <span
              className="w-6 h-6 rounded-full bg-[#7E22CE] text-white flex items-center justify-center font-bold text-xs shrink-0"
              style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
            >
              {markedForReviewCount}
            </span>
            <span className="text-slate-700">Marked for Review</span>
          </div>
        </div>

        {/* Answered and Marked for Review (Evaluated Notice) */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-start space-x-2 text-[10.5px]">
          <div className="relative shrink-0">
            <span
              className="w-6 h-6 rounded-full bg-[#7E22CE] text-white flex items-center justify-center font-bold text-xs"
              style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
            >
              {answeredAndMarkedCount}
            </span>
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#16A34A] border border-white rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#16A34A' }}
            >
              <svg className="w-1.5 h-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <span className="text-purple-900 font-medium leading-tight">
            Answered & Marked for Review (<span className="text-emerald-700 font-bold">will be evaluated</span>)
          </span>
        </div>
      </div>

      {/* Section Filter Banner */}
      <div
        className="bg-[#0A2F5C] text-white px-3 py-1.5 text-xs font-semibold flex items-center justify-between"
        style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
      >
        <span>Section: {currentSection.displayName}</span>
        <span
          className="font-mono text-[11px] text-[#F59E0B]"
          style={{ color: '#F59E0B' }}
        >
          Q: 1 to {currentSection.questions.length}
        </span>
      </div>

      {/* Question Grid */}
      <div className="p-3 overflow-y-auto flex-1 bg-[#F1F5F9]">
        <div className="grid grid-cols-5 gap-2 justify-items-center">
          {currentSection.questions.map((q: Question) => {
            const state = questionStates[q.id]?.paletteState || 'NOT_VISITED';
            const isCurrent = q.id === currentQuestionId;

            return (
              <button
                key={q.id}
                onClick={() => handleSelectQuestion(q.id)}
                title={`Question ${q.orderInSection}: ${state.replace(/_/g, ' ')}`}
                className="cursor-pointer focus:outline-none"
              >
                {renderBadgeIcon(state, q.orderInSection, isCurrent)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Footer: Quick Submit Button */}
      {isMobileDrawer && (
        <div className="p-3 bg-white border-t border-slate-300">
          <button
            onClick={() => {
              onClose?.();
              openSubmitModal();
            }}
            className="w-full py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isLastSection ? 'Submit Test' : 'Submit Exam'}</span>
          </button>
        </div>
      )}
    </div>
  );

  // If Mobile Drawer Mode: render modal overlay wrapper
  if (isMobileDrawer) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
        <div className="w-full max-w-xs sm:max-w-sm h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-200">
          {content}
        </div>
      </div>
    );
  }

  // Desktop Sidebar Layout (>= 1024px)
  return (
    <aside className="hidden lg:flex w-80 shrink-0 border-l border-slate-300 flex-col h-full select-none text-slate-800">
      {content}
    </aside>
  );
};
