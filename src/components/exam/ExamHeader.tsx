'use client';

import React from 'react';
import { Clock, User, Globe, AlertCircle } from 'lucide-react';
import { useExamStore } from '@/store/useExamStore';
import { Language } from '@/types/exam';

export const ExamHeader: React.FC = () => {
  const {
    exam,
    currentSectionId,
    totalTimeRemaining,
    sectionTimers,
    language,
    setLanguage,
    returnToGateway,
  } = useExamStore();

  if (!exam) return null;

  // Determine which timer to show:
  // If SECTIONAL_LOCKED -> Show current section's timer!
  // If COMPOSITE -> Show totalTimeRemaining!
  const isSectionLocked = exam.timingType === 'SECTIONAL_LOCKED';
  const activeRemainingSeconds = isSectionLocked && currentSectionId
    ? (sectionTimers[currentSectionId] ?? 0)
    : totalTimeRemaining;

  const minutes = Math.floor(activeRemainingSeconds / 60);
  const seconds = activeRemainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isUrgent = activeRemainingSeconds < 120; // Under 2 minutes

  return (
    <header className="bg-[#0e3b64] text-white border-b-2 border-[#ff9900] select-none shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
        {/* Left: Exam Title & Badge */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#ff9900] text-[#0e3b64] font-black text-xs px-2.5 py-1 rounded tracking-wider uppercase shadow-sm">
            {exam.examBody} {exam.post} {exam.stage}
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-tight text-white line-clamp-1">
              {exam.title}
            </h1>
            <p className="text-[11px] text-blue-200">
              Shift: {exam.shift || 'Official Pattern'} • Marking: +1.00 / -{exam.negativeMarkRatio}
            </p>
          </div>
        </div>

        {/* Center: Strict Countdown Timer */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md border font-mono font-bold text-sm md:text-base shadow-inner ${
              isUrgent
                ? 'bg-red-600/90 border-red-400 text-white animate-pulse'
                : 'bg-[#062440] border-blue-400/40 text-amber-300'
            }`}
          >
            <Clock className={`w-4 h-4 ${isUrgent ? 'text-white' : 'text-amber-400'}`} />
            <span className="text-xs uppercase font-sans tracking-wide text-gray-300">
              {isSectionLocked ? 'Section Time Left:' : 'Total Time Left:'}
            </span>
            <span className="text-lg tracking-wider">{formattedTime}</span>
          </div>

          {/* Bilingual Toggle Dropdown */}
          <div className="flex items-center space-x-1.5 bg-[#062440] px-2.5 py-1 rounded border border-blue-400/30">
            <Globe className="w-3.5 h-3.5 text-blue-300" />
            <label htmlFor="lang-select" className="text-xs text-blue-200 font-medium">
              View In:
            </label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-[#0e3b64] text-xs text-white border border-blue-400/50 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer font-medium"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
          </div>
        </div>

        {/* Right: Candidate Profile Info & Change Exam */}
        <div className="flex items-center space-x-3">
          <button
            onClick={returnToGateway}
            title="Switch Exam Category or generate a fresh mock test"
            className="hidden sm:flex items-center space-x-1 bg-amber-500 hover:bg-amber-600 text-[#0e3b64] font-bold text-xs px-2.5 py-1 rounded shadow-xs transition-colors cursor-pointer"
          >
            <span>🔄 Change Exam</span>
          </button>

          <div className="flex items-center space-x-3 bg-[#062440]/80 px-3 py-1 rounded border border-blue-400/20">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 border border-white">
              <User className="w-4 h-4" />
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-white">Karna (Candidate)</div>
              <div className="text-[10px] text-blue-300 font-mono">Roll: 2408199201 | Node: C042</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
