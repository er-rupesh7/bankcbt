'use client';

import React from 'react';
import { Lock, Info, CheckCircle2 } from 'lucide-react';
import { useExamStore } from '@/store/useExamStore';
import { Section } from '@/types/exam';

export const SectionTabBar: React.FC = () => {
  const {
    exam,
    currentSectionId,
    completedSectionIds,
    switchSection,
  } = useExamStore();

  if (!exam) return null;

  const isSectionLocked = exam.timingType === 'SECTIONAL_LOCKED';

  return (
    <div className="bg-[#e4ebf2] border-b border-[#b0c4de] px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 select-none">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <span className="text-xs font-bold text-[#0e3b64] uppercase tracking-wider mr-2 hidden sm:inline">
          Sections:
        </span>
        {exam.sections.map((section: Section) => {
          const isActive = section.id === currentSectionId;
          const isCompleted = completedSectionIds.includes(section.id);
          const isLocked = isSectionLocked && !isActive && !isCompleted;

          return (
            <button
              key={section.id}
              onClick={() => {
                if (!isSectionLocked) {
                  switchSection(section.id);
                }
              }}
              disabled={isSectionLocked && !isActive}
              title={
                isLocked
                  ? 'Locked: In SBI/IBPS exams, sectional timing is strictly locked until current section timer ends.'
                  : isCompleted
                  ? 'Section already completed and submitted.'
                  : `Switch to ${section.displayName}`
              }
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-t text-xs font-semibold border-t border-l border-r transition-all ${
                isActive
                  ? 'bg-white text-[#0e3b64] border-[#0e3b64] shadow-sm font-bold border-b-2 border-b-white translate-y-[1px]'
                  : isCompleted
                  ? 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed opacity-80'
                  : isLocked
                  ? 'bg-gray-200/90 text-gray-400 border-gray-300 cursor-not-allowed'
                  : 'bg-white/70 text-[#0e3b64] border-gray-300 hover:bg-white cursor-pointer'
              }`}
            >
              <span>{section.displayName}</span>
              {isLocked && <Lock className="w-3 h-3 text-gray-400 ml-1" />}
              {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600 ml-1" />}
              <span className="text-[10px] bg-blue-100 text-[#0e3b64] px-1 py-0.2 rounded font-mono">
                {section.questions.length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2 text-[11px] text-[#0e3b64]">
        <span className="inline-flex items-center bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-900 font-medium">
          <Info className="w-3 h-3 mr-1 text-blue-600" />
          {isSectionLocked
            ? `Strict Sectional Timing (${Math.round((exam.sections.find((s) => s.id === currentSectionId)?.durationSeconds ?? 1200) / 60)}m)`
            : 'Composite Time (Free Navigation)'}
        </span>
      </div>
    </div>
  );
};
