'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useExamStore } from '@/store/useExamStore';
import { OFFICIAL_EXAM_CATALOG, ExamCategoryKey, ExamTemplateConfig } from '@/types/examCatalog';
import { buildOfficialBankingExam } from '@/lib/generator/examBuilder';
import { Language } from '@/types/exam';
import {
  Building2,
  Clock,
  Award,
  CheckCircle2,
  Shuffle,
  ShieldAlert,
  HelpCircle,
  Play,
  FileText,
  UserCheck,
  ChevronRight,
  Layers,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const ExamSelectionGateway: React.FC = () => {
  const { initializeExam, setLanguage, language } = useExamStore();

  const [selectedCategoryKey, setSelectedCategoryKey] = useState<ExamCategoryKey>('SBI_PO_PRELIMS');
  const [filterBody, setFilterBody] = useState<'ALL' | 'SBI' | 'IBPS' | 'RRB'>('ALL');
  const [isDrillMode, setIsDrillMode] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [hasAgreedToDeclaration, setHasAgreedToDeclaration] = useState<boolean>(false);
  const [seed, setSeed] = useState<number>(8792);
  const [mockNumber, setMockNumber] = useState<number>(1);
  const mounted = useIsMounted();

  const selectedTemplate: ExamTemplateConfig = OFFICIAL_EXAM_CATALOG[selectedCategoryKey];

  const examKeys = Object.keys(OFFICIAL_EXAM_CATALOG) as ExamCategoryKey[];
  const filteredExamKeys = examKeys.filter((key) => {
    if (filterBody === 'ALL') return true;
    return OFFICIAL_EXAM_CATALOG[key].examBody === filterBody;
  });

  const handleStartExam = () => {
    const freshSeed = seed || 8792;
    const examData = buildOfficialBankingExam(selectedCategoryKey, freshSeed, isDrillMode, mockNumber);
    initializeExam(examData);
  };

  const handleShufflePaper = () => {
    const newSeed = Math.floor(Math.random() * 9000) + 1000;
    setSeed(newSeed);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans flex flex-col justify-between selection:bg-[#0B4F8A] selection:text-white">
      {/* Top Gateway Header */}
      <header
        className="bg-[#0A2F5C] text-white border-b-[3px] border-[#F59E0B] px-4 sm:px-8 py-3 shadow-md"
        style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0A2F5C] font-black text-xl shadow-xs">
              🏛️
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-black tracking-tight text-white flex items-center space-x-2">
                <span>Indian Banking Examination Portal</span>
                <span
                  className="text-[10px] sm:text-xs bg-[#F59E0B] text-[#0A2F5C] font-black px-2 py-0.5 rounded uppercase"
                  style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
                >
                  TCS iON CBT
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs text-blue-200">
                Official Mock Test &amp; Practice Arena • SBI PO/Clerk, IBPS PO/Clerk &amp; RRB PO/Clerk
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs font-medium text-blue-100">
            <Link
              href="/practice"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-amber-400 text-[#0A2F5C] font-black text-xs shadow-xs transition-all transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>📚 Topic Practice</span>
            </Link>
            <span className="hidden md:flex items-center">
              <UserCheck className="w-4 h-4 mr-1 text-emerald-400" />
              Candidate: Karna • Node: C042 • Roll: 2408199201
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 w-full flex-1">
        {!showInstructions ? (
          /* STEP 1: EXAM SELECTION SCREEN */
          <div className="space-y-6">
            {/* Topic-Wise Concept & Practice Feature Banner */}
            <div className="bg-gradient-to-r from-[#0A2F5C] via-[#0E3D73] to-[#0A2F5C] text-white p-5 rounded-2xl shadow-md border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-amber-500 flex items-center justify-center text-2xl shadow-md shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] sm:text-xs bg-[#F59E0B]/20 border border-[#F59E0B]/50 text-amber-300 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      New Module
                    </span>
                    <span className="text-xs text-blue-200">Bilingual English + Hindi</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white mt-1">
                    Topic-Wise Concept Mastery &amp; 20-Second Shortcuts
                  </h2>
                  <p className="text-xs text-blue-200 mt-0.5">
                    Master 34+ banking topics with LaTeX formulas, TCS iON examiner traps, Level 1–3 drills, and Learn Mode.
                  </p>
                </div>
              </div>
              <Link
                href="/practice"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#F59E0B] hover:bg-amber-400 text-[#0A2F5C] font-black text-xs sm:text-sm rounded-xl shadow-md transition-all transform hover:scale-105 shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Syllabus Hub</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Filter Tabs & Mock Controls (Bug A Fix: Responsive wrapping & zero overflow) */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
              {/* Board Selector Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Select Board:
                </span>
                {(['ALL', 'SBI', 'IBPS', 'RRB'] as const).map((body) => (
                  <button
                    key={body}
                    onClick={() => setFilterBody(body)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      filterBody === body
                        ? 'bg-[#0B4F8A] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {body === 'ALL' ? 'All Banking Exams' : body}
                  </button>
                ))}
              </div>

              {/* Dynamic Shuffle & Practice Mode Controls */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
                {/* Mock Selector */}
                <div className="flex items-center space-x-1.5 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-200 text-xs font-bold text-[#0B4F8A]">
                  <span className="text-slate-500 uppercase text-[10px]">Mock:</span>
                  <select
                    value={mockNumber}
                    onChange={(e) => setMockNumber(Number(e.target.value))}
                    className="bg-transparent font-black text-[#0B4F8A] cursor-pointer outline-none text-xs w-full"
                    title="Select official mock test paper number"
                  >
                    {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
                      <option key={num} value={num}>
                        Mock #{num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Shuffle Button */}
                <button
                  onClick={handleShufflePaper}
                  title="Randomize questions, number series, roots and puzzle arrangements"
                  className="flex items-center justify-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#0B4F8A] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5 text-[#0B4F8A] shrink-0" />
                  <span suppressHydrationWarning>🎲 Seed #{seed.toString().slice(-4)}</span>
                </button>

                {/* Mode Toggle */}
                <div className="col-span-2 sm:col-span-1 flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                  <button
                    onClick={() => setIsDrillMode(false)}
                    className={`flex-1 sm:flex-none px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                      !isDrillMode ? 'bg-[#0B4F8A] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Full Official Mock
                  </button>
                  <button
                    onClick={() => setIsDrillMode(true)}
                    className={`flex-1 sm:flex-none px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                      isDrillMode ? 'bg-[#0B4F8A] text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Speed Drill
                  </button>
                </div>

                {/* Direct Continue Button */}
                <button
                  onClick={() => setShowInstructions(true)}
                  className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-black text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Continue to Test ➔</span>
                </button>
              </div>
            </div>

            {/* Exam Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExamKeys.map((key) => {
                const exam = OFFICIAL_EXAM_CATALOG[key];
                const isSelected = selectedCategoryKey === key;

                return (
                  <div
                    key={key}
                    onClick={() => setSelectedCategoryKey(key)}
                    className={`rounded-xl border p-5 cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-50/70 border-[#0B4F8A] shadow-md ring-2 ring-[#0B4F8A]'
                        : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                            exam.examBody === 'SBI'
                              ? 'bg-blue-100 text-blue-800'
                              : exam.examBody === 'IBPS'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {exam.examBody} • {exam.post}
                        </span>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            exam.stage === 'PRELIMS'
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {exam.stage}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-slate-900 line-clamp-1 mb-1">
                        {exam.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {exam.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span className="flex items-center font-medium">
                          <Layers className="w-3.5 h-3.5 mr-1 text-slate-500" />
                          {exam.totalQuestions} Questions ({exam.totalMarks} Marks)
                        </span>
                        <span className="flex items-center font-medium">
                          <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                          {Math.round(exam.totalDurationSeconds / 60)} Mins
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span
                          className={`font-semibold ${
                            exam.timingType === 'SECTIONAL_LOCKED'
                              ? 'text-amber-800'
                              : 'text-emerald-700'
                          }`}
                        >
                          {exam.timingType === 'SECTIONAL_LOCKED'
                            ? '🔒 Hard Sectional Lock (20m)'
                            : '⚡ Composite Timing (45m)'}
                        </span>
                        <span className="text-red-600 font-mono font-medium">-0.25 Negative</span>
                      </div>

                      {isSelected && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowInstructions(true);
                          }}
                          className="mt-3 w-full py-2 bg-[#0B4F8A] hover:bg-[#083D6B] text-white text-xs font-bold rounded-lg shadow-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <span>Selected — Click to Proceed ➔</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Exam Blueprint Summary & Next Step */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#0B4F8A] uppercase tracking-wide">
                  Selected Assessment:
                </div>
                <h2 className="text-lg font-black text-slate-900 mt-0.5">
                  {selectedTemplate.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-600">
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-mono">
                    Total Questions: {isDrillMode ? '25 (Speed Drill)' : selectedTemplate.totalQuestions}
                  </span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-mono">
                    Total Time: {Math.round(selectedTemplate.totalDurationSeconds / 60)} Minutes
                  </span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-mono">
                    Negative Penalty: -{selectedTemplate.negativeMarkRatio} Marks
                  </span>
                  <span className="bg-blue-50 text-[#0B4F8A] px-2 py-0.5 rounded font-semibold">
                    {selectedTemplate.timingType === 'SECTIONAL_LOCKED'
                      ? 'Strict 20-min Section Auto-advance'
                      : 'Free Section Switching (RRB Prelims)'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowInstructions(true)}
                className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0B4F8A] hover:bg-[#083D6B] shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <span>Proceed to Exam Instructions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sticky Persistent Bottom Action Bar */}
            <div className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#0A2F5C] shadow-2xl p-4 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-3 text-left">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Selection:</div>
                    <div className="text-sm sm:text-base font-black text-slate-900">{selectedTemplate.title} ({isDrillMode ? '25 Qs Drill' : `${selectedTemplate.totalQuestions} Qs`} • {Math.round(selectedTemplate.totalDurationSeconds / 60)} Mins)</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowInstructions(true)}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 rounded-xl font-black text-white bg-[#0B4F8A] hover:bg-[#083D6B] shadow-lg transition-all active:scale-95 text-sm sm:text-base cursor-pointer"
                >
                  <span>Proceed to Exam Instructions</span>
                  <ChevronRight className="w-5 h-5 text-[#F59E0B]" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 2: OFFICIAL TCS iON INSTRUCTIONS SCREEN (Bug B Fix: Stacked responsive header, visible declaration, 2-col footer buttons) */
          <div className="bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden max-w-4xl mx-auto animate-in fade-in duration-200">
            {/* Header: Stacked cleanly on mobile */}
            <div
              className="bg-[#0A2F5C] text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 border-b-2 border-[#F59E0B]"
              style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
            >
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  General Examination Instructions
                </h2>
                <p className="text-xs text-blue-200">
                  Please read the instructions carefully before launching the test arena.
                </p>
              </div>
              <div className="self-start sm:self-auto">
                <span
                  className="bg-[#06203D] border border-blue-400/40 text-[#F59E0B] px-3 py-1 rounded font-mono text-xs font-bold inline-block"
                  style={{ backgroundColor: '#06203D', color: '#F59E0B' }}
                >
                  {selectedTemplate.title}
                </span>
              </div>
            </div>

            {/* Instruction Body */}
            <div className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-[#0A2F5C] text-sm mb-1.5 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-[#0B4F8A]" />
                  1. Server Clock &amp; Countdown:
                </h3>
                <p>
                  The server countdown timer in the top header will display the remaining time available for you to complete the examination. When the timer hits <strong>00:00</strong>, the examination will automatically submit.
                  {selectedTemplate.timingType === 'SECTIONAL_LOCKED' ? (
                    <span className="block mt-1 font-semibold text-amber-900 bg-amber-50 p-2.5 rounded border border-amber-200">
                      ⚠️ Note on Hard Sectional Timing: Each section has a fixed 20-minute timer. You cannot navigate between sections until the current section&apos;s timer expires and auto-advances.
                    </span>
                  ) : (
                    <span className="block mt-1 font-semibold text-emerald-900 bg-emerald-50 p-2.5 rounded border border-emerald-200">
                      ⚡ Note on Composite Timing: In IBPS RRB Prelims, you have 45 minutes total time. You are allowed to navigate freely between Reasoning and Quantitative sections at any point.
                    </span>
                  )}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A2F5C] text-sm mb-2 flex items-center">
                  <Layers className="w-4 h-4 mr-1.5 text-[#0B4F8A]" />
                  2. Question Palette Symbols (Real TCS iON Logic):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <span
                      className="w-7 h-7 rounded bg-[#E2E8F0] border border-[#CBD5E1] text-[#334155] flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#E2E8F0', color: '#334155' }}
                    >
                      1
                    </span>
                    <span>You have not visited the question yet.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <span
                      className="w-7 h-7 rounded-t-sm rounded-b bg-[#DC2626] text-white flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#DC2626', color: '#ffffff' }}
                    >
                      2
                    </span>
                    <span>You have not answered the question.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <span
                      className="w-7 h-7 rounded-t-sm rounded-b bg-[#16A34A] text-white flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#16A34A', color: '#ffffff' }}
                    >
                      3
                    </span>
                    <span>You have answered the question.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <span
                      className="w-7 h-7 rounded-full bg-[#7E22CE] text-white flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
                    >
                      4
                    </span>
                    <span>You have marked the question for review (NOT evaluated).</span>
                  </div>
                </div>

                <div className="mt-2.5 p-2.5 bg-purple-50 border border-purple-200 rounded flex items-start space-x-2 text-xs">
                  <div className="relative shrink-0">
                    <span
                      className="w-7 h-7 rounded-full bg-[#7E22CE] text-white flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#7E22CE', color: '#ffffff' }}
                    >
                      5
                    </span>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] border border-white rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#16A34A' }}
                    >
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-purple-900">
                      Answered &amp; Marked for Review:
                    </span>{' '}
                    The question has been answered and marked for review. In official SBI and IBPS exams,{' '}
                    <strong className="text-emerald-800">THIS STATE IS EVALUATED FOR FINAL SCORING</strong> when the exam concludes.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#0A2F5C] text-sm mb-1.5 flex items-center">
                  <Award className="w-4 h-4 mr-1.5 text-[#0B4F8A]" />
                  3. Negative Marking:
                </h3>
                <p>
                  For each question answered correctly, you will be awarded <strong>1.00 Mark</strong>. For each wrong answer, <strong>0.25 Mark (one-fourth)</strong> will be deducted as negative marking. Unanswered questions attract 0 marks.
                </p>
              </div>

              {/* Language Default Preference */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-bold text-[#0A2F5C] text-xs">
                  Choose your default viewing language:
                </span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-white border border-blue-300 text-xs font-semibold px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-[#0B4F8A]"
                >
                  <option value="en">English (default)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>

              {/* Declaration Checkbox: Clear and prominent */}
              <div className="pt-3 border-t border-slate-200 bg-amber-50/70 p-3.5 rounded-lg border border-amber-200">
                <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasAgreedToDeclaration}
                    onChange={(e) => setHasAgreedToDeclaration(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#0B4F8A] focus:ring-[#0B4F8A] border-slate-300 cursor-pointer"
                  />
                  <span className="text-xs text-slate-800 font-medium leading-relaxed">
                    I have read and understood all the instructions above. All computer hardware and browser components allotted to me are in proper working condition. I declare that I am ready to begin the test under authentic exam regulations.
                  </span>
                </label>
              </div>
            </div>

            {/* Action Bar Footer (Bug B Fix: Responsive grid of 2 buttons) */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setShowInstructions(false)}
                className="py-2.5 px-3 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-center"
              >
                ← Back to Exam Selection
              </button>

              <button
                disabled={!hasAgreedToDeclaration}
                onClick={handleStartExam}
                style={hasAgreedToDeclaration ? { backgroundColor: '#0B4F8A', color: '#ffffff' } : {}}
                className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center justify-center space-x-1.5 ${
                  hasAgreedToDeclaration
                    ? 'bg-[#0B4F8A] text-white hover:bg-[#083D6B] cursor-pointer active:scale-98'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-60'
                }`}
              >
                <Play className="w-4 h-4 fill-white" />
                <span>I am ready to begin</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3 px-4 text-center text-xs text-slate-500">
        © 2025-2026 Indian Banking Examination Simulation Portal • SBI, IBPS, and RRB Recruitment Pattern Simulator
      </footer>
    </div>
  );
};
