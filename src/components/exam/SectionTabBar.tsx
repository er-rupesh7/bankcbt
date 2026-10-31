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
    <div className="bg-slate-100 border-b border-slate-300 px-3 sm:px-4 py-1.5 flex items-center justify-between gap-2 select-none shrink-0 overflow-x-auto no-scrollbar">
      <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
        <span className="text-xs font-bold text-[#0A2F5C] uppercase tracking-wider mr-1 hidden sm:inline">
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
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-t text-xs font-semibold border-t border-l border-r transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-white text-[#0B4F8A] border-slate-300 shadow-xs font-bold border-b-2 border-b-white translate-y-[1px]'
                  : isCompleted
                  ? 'bg-slate-200 text-slate-500 border-slate-300 cursor-not-allowed opacity-80'
                  : isLocked
                  ? 'bg-slate-200/90 text-slate-400 border-slate-300 cursor-not-allowed'
                  : 'bg-white/70 text-slate-700 border-slate-300 hover:bg-white cursor-pointer'
              }`}
            >
              <span>{section.displayName}</span>
              {isLocked && <Lock className="w-3 h-3 text-slate-400 ml-0.5" />}
              {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600 ml-0.5" />}
              <span className="text-[10px] bg-blue-100 text-[#0B4F8A] px-1 py-0.2 rounded font-mono font-bold">
                {section.questions.length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="hidden sm:flex items-center space-x-2 text-[11px] text-[#0A2F5C] shrink-0">
        <span className="inline-flex items-center bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-900 font-medium">
          <Info className="w-3 h-3 mr-1 text-[#0B4F8A]" />
          {isSectionLocked
            ? `Strict Sectional Timing (${Math.round((exam.sections.find((s) => s.id === currentSectionId)?.durationSeconds ?? 1200) / 60)}m)`
            : 'Composite Time (Free Navigation)'}
        </span>
      </div>
    </div>
  );
};
