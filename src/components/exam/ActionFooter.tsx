'use client';

import React from 'react';
import { useExamStore } from '@/store/useExamStore';
import { ChevronRight, Bookmark, RotateCcw, Send } from 'lucide-react';

export const ActionFooter: React.FC = () => {
  const {
    exam,
    currentSectionId,
    saveAndNext,
    markForReviewAndNext,
    clearResponse,
    openSubmitModal,
  } = useExamStore();

  if (!exam) return null;

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  const isLastSection = exam.sections[exam.sections.length - 1]?.id === currentSectionId;

  return (
    <footer className="bg-[#f0f4f8] border-t-2 border-[#b8c9d9] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 select-none">
      {/* Left Action Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={markForReviewAndNext}
          className="flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-semibold text-[#7b1fa2] bg-white border border-[#7b1fa2] hover:bg-purple-50 transition-colors shadow-xs active:scale-98 cursor-pointer"
        >
          <Bookmark className="w-4 h-4 fill-purple-100 text-[#7b1fa2]" />
          <span>Mark for Review & Next</span>
        </button>

        <button
          onClick={clearResponse}
          className="flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors shadow-xs active:scale-98 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
          <span>Clear Response</span>
        </button>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={saveAndNext}
          className="flex items-center space-x-1.5 px-5 sm:px-6 py-2 rounded text-xs sm:text-sm font-bold text-white bg-[#0e3b64] hover:bg-[#092947] border border-[#092947] transition-all shadow-sm active:scale-98 cursor-pointer"
        >
          <span>Save & Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={openSubmitModal}
          className="flex items-center space-x-1.5 px-4 sm:px-5 py-2 rounded text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 border border-emerald-800 transition-all shadow-sm active:scale-98 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isLastSection ? 'Submit Test' : 'Submit Exam'}</span>
        </button>
      </div>
    </footer>
  );
};
