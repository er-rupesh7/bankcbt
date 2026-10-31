'use client';

import React from 'react';
import { Clock, User, Globe, LayoutGrid, RotateCcw } from 'lucide-react';
import { useExamStore } from '@/store/useExamStore';
import { Language } from '@/types/exam';

export const ExamHeader: React.FC = () => {
  const {
    exam,
    currentSectionId,
    currentQuestionId,
    questionStates,
    totalTimeRemaining,
    sectionTimers,
    language,
    setLanguage,
    returnToGateway,
    toggleQuestionPalette,
  } = useExamStore();

  if (!exam) return null;

  const isSectionLocked = exam.timingType === 'SECTIONAL_LOCKED';
  const activeRemainingSeconds = isSectionLocked && currentSectionId
    ? (sectionTimers[currentSectionId] ?? 0)
    : totalTimeRemaining;

  const minutes = Math.floor(activeRemainingSeconds / 60);
  const seconds = activeRemainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isUrgent = activeRemainingSeconds < 120; // Under 2 minutes

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  const totalSectionQuestions = currentSection?.questions.length || 0;
  const currentQIndex = currentSection && currentQuestionId
    ? currentSection.questions.findIndex((q) => q.id === currentQuestionId) + 1
    : 1;

  let answeredCount = 0;
  currentSection?.questions.forEach((q) => {
    const st = questionStates[q.id]?.paletteState;
    if (st === 'ANSWERED' || st === 'ANSWERED_AND_MARKED_FOR_REVIEW') {
      answeredCount++;
    }
  });

  return (
    <header
      className="bg-[#0A2F5C] text-white border-b-[3px] border-[#F59E0B] select-none shadow-md shrink-0"
      style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
    >
      {/* Mobile Compact Top Header (< 1024px) */}
      <div className="flex lg:hidden items-center justify-between px-3 h-14 gap-2">
        {/* Left: Exam Title + Tag */}
        <div className="flex items-center space-x-1.5 min-w-0">
          <span
            className="bg-[#F59E0B] text-[#0A2F5C] font-black text-[10px] px-1.5 py-0.5 rounded tracking-wider uppercase shrink-0"
            style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
          >
            {exam.examBody}
          </span>
          <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-[120px] sm:max-w-[200px]" title={exam.title}>
            {exam.title}
          </h1>
        </div>

        {/* Center: High-contrast Countdown Timer Pill */}
        <div
          className={`flex items-center space-x-1 px-2 py-1 rounded font-mono font-bold text-xs sm:text-sm shadow-inner shrink-0 ${
            isUrgent
              ? 'bg-red-600 border border-red-400 text-white animate-pulse'
              : 'bg-[#06203D] border border-blue-400/40 text-[#F59E0B]'
          }`}
          style={{ backgroundColor: isUrgent ? '#DC2626' : '#06203D' }}
        >
          <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-white' : 'text-[#F59E0B]'}`} />
          <span className="tracking-wider">{formattedTime}</span>
        </div>

        {/* Right: Bilingual Toggle + Mobile Question Palette Drawer Trigger */}
        <div className="flex items-center space-x-1.5 shrink-0">
          <select
            id="mobile-lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-[#06203D] text-[11px] text-white border border-blue-400/50 rounded px-1.5 py-1 focus:outline-none cursor-pointer font-bold"
            aria-label="Select Language"
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>

          {/* Palette Drawer Trigger Button */}
          <button
            onClick={toggleQuestionPalette}
            className="flex items-center space-x-1 bg-[#0B4F8A] hover:bg-[#083D6B] active:bg-[#062c4e] text-white px-2.5 py-1 rounded border border-blue-300/40 text-xs font-bold shadow-xs cursor-pointer"
            title="Open Question Palette Grid"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-amber-300" />
            <span>Q.{currentQIndex}/{totalSectionQuestions}</span>
            <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full ml-0.5">
              {answeredCount}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Classic TCS iON Top Header (>= 1024px) */}
      <div className="hidden lg:flex items-center justify-between px-4 py-2.5 gap-4">
        {/* Left: Exam Title & Badge */}
        <div className="flex items-center space-x-3">
          <div
            className="bg-[#F59E0B] text-[#0A2F5C] font-black text-xs px-2.5 py-1 rounded tracking-wider uppercase shadow-xs"
            style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
          >
            {exam.examBody} {exam.post} {exam.stage}
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white line-clamp-1">
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
                : 'bg-[#06203D] border-blue-400/40 text-[#F59E0B]'
            }`}
            style={{ backgroundColor: isUrgent ? '#DC2626' : '#06203D' }}
          >
            <Clock className={`w-4 h-4 ${isUrgent ? 'text-white' : 'text-[#F59E0B]'}`} />
            <span className="text-xs uppercase font-sans tracking-wide text-gray-300">
              {isSectionLocked ? 'Section Time Left:' : 'Total Time Left:'}
            </span>
            <span className="text-lg tracking-wider">{formattedTime}</span>
          </div>

          {/* Bilingual Toggle Dropdown */}
          <div className="flex items-center space-x-1.5 bg-[#06203D] px-2.5 py-1 rounded border border-blue-400/30">
            <Globe className="w-3.5 h-3.5 text-blue-300" />
            <label htmlFor="lang-select" className="text-xs text-blue-200 font-medium">
              View In:
            </label>
            <select
              id="lang-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-[#0A2F5C] text-xs text-white border border-blue-400/50 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer font-medium"
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
            className="flex items-center space-x-1 bg-amber-500 hover:bg-amber-600 text-[#0A2F5C] font-bold text-xs px-2.5 py-1.5 rounded shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Change Exam</span>
          </button>

          <div className="flex items-center space-x-3 bg-[#06203D]/80 px-3 py-1 rounded border border-blue-400/20">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0A2F5C] border border-white">
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
