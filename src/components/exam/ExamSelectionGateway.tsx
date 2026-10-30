'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';

export const ExamSelectionGateway: React.FC = () => {
  const { initializeExam, setLanguage, language } = useExamStore();

  const [selectedCategoryKey, setSelectedCategoryKey] = useState<ExamCategoryKey>('SBI_PO_PRELIMS');
  const [filterBody, setFilterBody] = useState<'ALL' | 'SBI' | 'IBPS' | 'RRB'>('ALL');
  const [isDrillMode, setIsDrillMode] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [hasAgreedToDeclaration, setHasAgreedToDeclaration] = useState<boolean>(false);
  const [seed, setSeed] = useState<number>(() => (typeof window !== 'undefined' ? Date.now() : 20251030));
  const [mockNumber, setMockNumber] = useState<number>(1);

  const selectedTemplate: ExamTemplateConfig = OFFICIAL_EXAM_CATALOG[selectedCategoryKey];

  const examKeys = Object.keys(OFFICIAL_EXAM_CATALOG) as ExamCategoryKey[];
  const filteredExamKeys = examKeys.filter((key) => {
    if (filterBody === 'ALL') return true;
    return OFFICIAL_EXAM_CATALOG[key].examBody === filterBody;
  });

  const handleStartExam = () => {
    const freshSeed = seed || Date.now();
    const examData = buildOfficialBankingExam(selectedCategoryKey, freshSeed, isDrillMode, mockNumber);
    initializeExam(examData);
  };

  const handleShufflePaper = () => {
    const newSeed = Date.now();
    setSeed(newSeed);
  };

  return (
    <div className="min-h-screen bg-[#edf2f7] text-gray-900 font-sans flex flex-col justify-between">
      {/* Top Gateway Header */}
      <header className="bg-[#0e3b64] text-white border-b-4 border-[#ff9900] px-4 sm:px-8 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#0e3b64] font-black text-xl shadow-xs">
              🏛️
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center space-x-2">
                <span>Indian Banking Examination Portal</span>
                <span className="text-xs bg-[#ff9900] text-[#0e3b64] font-bold px-2 py-0.5 rounded uppercase">
                  TCS iON CBT 2025-26
                </span>
              </h1>
              <p className="text-xs text-blue-200">
                Official Mock Test &amp; AI Practice Arena • SBI PO/Clerk, IBPS PO/Clerk &amp; RRB PO/Clerk
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-medium text-blue-100">
            <span className="flex items-center">
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
            {/* Filter Tabs */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
                  Select Board:
                </span>
                {(['ALL', 'SBI', 'IBPS', 'RRB'] as const).map((body) => (
                  <button
                    key={body}
                    onClick={() => setFilterBody(body)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      filterBody === body
                        ? 'bg-[#0e3b64] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {body === 'ALL' ? 'All Banking Exams' : body}
                  </button>
                ))}
              </div>

              {/* Dynamic Shuffle & Practice Mode Controls */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-200 text-xs font-bold text-[#0e3b64]">
                  <span className="text-gray-500 uppercase text-[10px]">Mock:</span>
                  <select
                    value={mockNumber}
                    onChange={(e) => setMockNumber(Number(e.target.value))}
                    className="bg-transparent font-black text-[#0e3b64] cursor-pointer outline-none text-xs"
                    title="Select official mock test paper number (rotates topics to cover 100% syllabus)"
                  >
                    {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
                      <option key={num} value={num}>
                        Mock Test #{num}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleShufflePaper}
                  title="Randomize questions, number series, roots and puzzle arrangements"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0e3b64] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5 text-blue-700" />
                  <span>🎲 Shuffle (Seed #{seed.toString().slice(-4)})</span>
                </button>

                <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg border border-gray-200 text-xs">
                  <button
                    onClick={() => setIsDrillMode(false)}
                    className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                      !isDrillMode ? 'bg-[#0e3b64] text-white shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Full Official Mock
                  </button>
                  <button
                    onClick={() => setIsDrillMode(true)}
                    className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                      isDrillMode ? 'bg-[#0e3b64] text-white shadow-xs' : 'text-gray-600'
                    }`}
                  >
                    Rapid Speed Drill
                  </button>
                </div>

                {/* Direct Continue Button in Top Bar */}
                <button
                  onClick={() => setShowInstructions(true)}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-black text-white bg-emerald-700 hover:bg-emerald-800 shadow-md transition-all active:scale-95 cursor-pointer ring-2 ring-emerald-400"
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
                        ? 'bg-blue-50/70 border-[#0e3b64] shadow-md ring-2 ring-[#0e3b64]'
                        : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-xs'
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

                      <h3 className="font-bold text-base text-gray-900 line-clamp-1 mb-1">
                        {exam.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                        {exam.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-200/80 space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span className="flex items-center font-medium">
                          <Layers className="w-3.5 h-3.5 mr-1 text-gray-500" />
                          {exam.totalQuestions} Questions ({exam.totalMarks} Marks)
                        </span>
                        <span className="flex items-center font-medium">
                          <Clock className="w-3.5 h-3.5 mr-1 text-gray-500" />
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
                          className="mt-3 w-full py-2 bg-[#0e3b64] hover:bg-[#07243e] text-white text-xs font-bold rounded-lg shadow-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer ring-1 ring-blue-300"
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
            <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                  Selected Assessment:
                </div>
                <h2 className="text-lg font-black text-gray-900 mt-0.5">
                  {selectedTemplate.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-600">
                  <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">
                    Total Questions: {isDrillMode ? '25 (Speed Drill)' : selectedTemplate.totalQuestions}
                  </span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">
                    Total Time: {Math.round(selectedTemplate.totalDurationSeconds / 60)} Minutes
                  </span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded font-mono">
                    Negative Penalty: -{selectedTemplate.negativeMarkRatio} Marks
                  </span>
                  <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-medium">
                    {selectedTemplate.timingType === 'SECTIONAL_LOCKED'
                      ? 'Strict 20-min Section Auto-advance'
                      : 'Free Section Switching (RRB Prelims)'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowInstructions(true)}
                className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0e3b64] hover:bg-[#07243e] shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <span>Proceed to Exam Instructions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sticky Persistent Bottom Action Bar */}
            <div className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#0e3b64] shadow-2xl p-4 px-6 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-3 text-left">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Selection:</div>
                    <div className="text-sm sm:text-base font-black text-gray-900">{selectedTemplate.title} ({isDrillMode ? '25 Qs Drill' : `${selectedTemplate.totalQuestions} Qs`} • {Math.round(selectedTemplate.totalDurationSeconds / 60)} Mins)</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowInstructions(true)}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 rounded-xl font-black text-white bg-[#0e3b64] hover:bg-[#07243e] shadow-lg transition-all active:scale-95 text-sm sm:text-base cursor-pointer ring-2 ring-blue-400"
                >
                  <span>Proceed to Exam Instructions</span>
                  <ChevronRight className="w-5 h-5 text-[#ff9900]" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 2: OFFICIAL TCS iON INSTRUCTIONS SCREEN */
          <div className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden max-w-4xl mx-auto animate-in fade-in duration-200">
            {/* Header */}
            <div className="bg-[#0e3b64] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-bold">
                  General Examination Instructions
                </h2>
                <p className="text-xs text-blue-200">
                  Please read the instructions carefully before launching the test arena.
                </p>
              </div>
              <div className="text-right text-xs">
                <span className="bg-blue-900 px-2.5 py-1 rounded font-mono">
                  {selectedTemplate.title}
                </span>
              </div>
            </div>

            {/* Instruction Body */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-[#0e3b64] text-sm mb-1.5 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-blue-700" />
                  1. Server Clock &amp; Countdown:
                </h3>
                <p>
                  The server countdown timer in the top header will display the remaining time available for you to complete the examination. When the timer hits <strong>00:00</strong>, the examination will automatically submit.
                  {selectedTemplate.timingType === 'SECTIONAL_LOCKED' ? (
                    <span className="block mt-1 font-semibold text-amber-900 bg-amber-50 p-2 rounded border border-amber-200">
                      ⚠️ Note on Hard Sectional Timing: Each section has a fixed 20-minute timer. You cannot navigate between sections until the current section&apos;s timer expires and auto-advances.
                    </span>
                  ) : (
                    <span className="block mt-1 font-semibold text-emerald-900 bg-emerald-50 p-2 rounded border border-emerald-200">
                      ⚡ Note on Composite Timing: In IBPS RRB Prelims, you have 45 minutes total time. You are allowed to navigate freely between Reasoning and Quantitative sections at any point.
                    </span>
                  )}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0e3b64] text-sm mb-2 flex items-center">
                  <Layers className="w-4 h-4 mr-1.5 text-blue-700" />
                  2. Question Palette Symbols (Real TCS iON Logic):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded border">
                    <span className="w-7 h-7 rounded bg-[#e0e0e0] border border-gray-400 text-gray-700 flex items-center justify-center font-bold">
                      1
                    </span>
                    <span>You have not visited the question yet.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded border">
                    <span className="w-7 h-7 rounded-t-sm rounded-b bg-[#e53935] text-white flex items-center justify-center font-bold">
                      2
                    </span>
                    <span>You have not answered the question.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded border">
                    <span className="w-7 h-7 rounded-t-sm rounded-b bg-[#2e7d32] text-white flex items-center justify-center font-bold">
                      3
                    </span>
                    <span>You have answered the question.</span>
                  </div>

                  <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded border">
                    <span className="w-7 h-7 rounded-full bg-[#7b1fa2] text-white flex items-center justify-center font-bold">
                      4
                    </span>
                    <span>You have marked the question for review (NOT evaluated).</span>
                  </div>
                </div>

                <div className="mt-2.5 p-2.5 bg-purple-50 border border-purple-200 rounded flex items-start space-x-2 text-xs">
                  <div className="relative shrink-0">
                    <span className="w-7 h-7 rounded-full bg-[#7b1fa2] text-white flex items-center justify-center font-bold">
                      5
                    </span>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#00c853] border border-white rounded-full flex items-center justify-center">
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
                <h3 className="font-bold text-[#0e3b64] text-sm mb-1.5 flex items-center">
                  <Award className="w-4 h-4 mr-1.5 text-blue-700" />
                  3. Negative Marking:
                </h3>
                <p>
                  For each question answered correctly, you will be awarded <strong>1.00 Mark</strong>. For each wrong answer, <strong>0.25 Mark (one-fourth)</strong> will be deducted as negative marking. Unanswered questions attract 0 marks.
                </p>
              </div>

              {/* Language Default Preference */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-bold text-blue-900 text-xs">
                  Choose your default viewing language:
                </span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-white border border-blue-300 text-xs font-semibold px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="en">English (default)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>

              {/* Declaration Checkbox */}
              <div className="pt-2 border-t">
                <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasAgreedToDeclaration}
                    onChange={(e) => setHasAgreedToDeclaration(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                  />
                  <span className="text-xs text-gray-700 font-medium leading-relaxed">
                    I have read and understood all the instructions above. All computer hardware and browser components allotted to me are in proper working condition. I declare that I am ready to begin the test under authentic exam regulations.
                  </span>
                </label>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-4 py-2 text-xs font-bold text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
              >
                ← Back to Exam Selection
              </button>

              <button
                disabled={!hasAgreedToDeclaration}
                onClick={handleStartExam}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all ${
                  hasAgreedToDeclaration
                    ? 'bg-[#0e3b64] text-white hover:bg-[#07243e] cursor-pointer active:scale-98'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
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
      <footer className="bg-white border-t border-gray-200 py-3 px-4 text-center text-xs text-gray-500">
        © 2025-2026 Indian Banking Examination Simulation Portal • SBI, IBPS, and RRB Recruitment Pattern Simulator
      </footer>
    </div>
  );
};
