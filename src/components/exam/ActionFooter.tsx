'use client';

import React from 'react';
import { useExamStore } from '@/store/useExamStore';
import { ChevronRight, ChevronLeft, Bookmark, RotateCcw, Send } from 'lucide-react';

export const ActionFooter: React.FC = () => {
  const {
    exam,
    currentSectionId,
    currentQuestionId,
    saveAndNext,
    markForReviewAndNext,
    clearResponse,
    goToPrevQuestion,
    openSubmitModal,
  } = useExamStore();

  if (!exam) return null;

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  const isLastSection = exam.sections[exam.sections.length - 1]?.id === currentSectionId;
  const isFirstQuestion = currentSection?.questions[0]?.id === currentQuestionId;

  return (
    <footer className="sticky bottom-0 z-30 bg-white border-t border-slate-300 p-2 sm:px-4 sm:py-2.5 shadow-lg select-none shrink-0">
      {/* Mobile 2-Row Layout (< sm) */}
      <div className="flex sm:hidden flex-col gap-2">
        {/* Row 1: 2 Compact Secondary Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={markForReviewAndNext}
            className="flex-1 flex items-center justify-center space-x-1 py-2 px-2 rounded text-xs font-semibold text-[#7E22CE] bg-purple-50 border border-[#7E22CE] active:bg-purple-100 transition-colors shadow-xs cursor-pointer"
          >
            <Bookmark className="w-3.5 h-3.5 fill-purple-200 text-[#7E22CE]" />
            <span>Mark for Review</span>
          </button>

          <button
            onClick={clearResponse}
            className="px-3 py-2 rounded text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-300 active:bg-slate-200 transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600 inline mr-1" />
            <span>Clear</span>
          </button>
        </div>

        {/* Row 2: Primary Navigation + Submit */}
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPrevQuestion}
            disabled={isFirstQuestion}
            className={`px-3 py-2.5 rounded text-xs font-bold border transition-colors flex items-center space-x-0.5 ${
              isFirstQuestion
                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 cursor-pointer shadow-xs'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          <button
            onClick={saveAndNext}
            className="flex-1 py-2.5 px-3 rounded text-xs font-bold text-white bg-[#0B4F8A] hover:bg-[#083D6B] active:bg-[#062c4e] transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer"
          >
            <span>Save &amp; Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={openSubmitModal}
            className="px-3.5 py-2.5 rounded text-xs font-bold text-white bg-[#059669] hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md flex items-center space-x-1 cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Desktop / Tablet Single Row Layout (>= sm) */}
      <div className="hidden sm:flex items-center justify-between gap-3">
        {/* Left Action Buttons */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={markForReviewAndNext}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#7E22CE] bg-white border border-[#7E22CE] hover:bg-purple-50 transition-colors shadow-xs active:scale-98 cursor-pointer"
          >
            <Bookmark className="w-4 h-4 fill-purple-100 text-[#7E22CE]" />
            <span>Mark for Review &amp; Next</span>
          </button>

          <button
            onClick={clearResponse}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-xs active:scale-98 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Clear Response</span>
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={goToPrevQuestion}
            disabled={isFirstQuestion}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${
              isFirstQuestion
                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 shadow-xs cursor-pointer active:scale-98'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={saveAndNext}
            className="flex items-center space-x-1.5 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#0B4F8A] hover:bg-[#083D6B] border border-[#083D6B] transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <span>Save &amp; Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={openSubmitModal}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-emerald-700 border border-emerald-700 transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isLastSection ? 'Submit Test' : 'Submit Exam'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
