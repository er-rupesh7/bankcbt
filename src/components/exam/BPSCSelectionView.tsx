'use client';

import React, { useState } from 'react';
import {
  BPSCMockMode,
  BPSCSubject,
  BPSCTREVersion,
} from '@/types/bpsc';
import { buildOfficialBPSCExam } from '@/lib/generator/bpscExamBuilder';
import { useExamStore } from '@/store/useExamStore';
import {
  BPSC_CS_11_12_SYLLABUS,
  getBPSCCoverageMatrix,
} from '@/data/bpsc/bpscTaxonomy';
import { getPYQDatabaseStats } from '@/data/bpsc/bpscPyqDatabase';
import {
  Trophy,
  BookOpen,
  History,
  Target,
  Brain,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Play,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';

export const BPSCSelectionView: React.FC = () => {
  const { initializeExam } = useExamStore();

  const [mode, setMode] = useState<BPSCMockMode>('FULL_LENGTH_TRE4');
  const [subject, setSubject] = useState<BPSCSubject>('COMPUTER_SCIENCE_11_12');
  const [treVersion, setTreVersion] = useState<BPSCTREVersion>('TRE_4_0');
  const [selectedUnit, setSelectedUnit] = useState<string>('ALL');
  const [mockNum, setMockNum] = useState<number>(1);
  const [showCoverage, setShowCoverage] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  const pyqStats = getPYQDatabaseStats();
  const coverageMatrix = getBPSCCoverageMatrix(
    {
      UNIT_1_COMPUTER_FUNDAMENTALS: 8,
      UNIT_2_DIGITAL_LOGIC: 10,
      UNIT_3_COA: 7,
      UNIT_4_OPERATING_SYSTEMS: 9,
      UNIT_5_DATA_STRUCTURES_ALGORITHMS: 12,
      UNIT_6_PROGRAMMING_LANGUAGES: 14,
      UNIT_7_DBMS_SQL: 11,
      UNIT_8_COMPUTER_NETWORKS: 10,
      UNIT_9_SOFTWARE_ENGINEERING: 6,
      UNIT_10_WEB_TECHNOLOGIES: 6,
      UNIT_11_TOC_SYSTEM_SOFTWARE: 5,
      UNIT_12_EMERGING_TECH_SECURITY: 5,
    },
    {
      UNIT_1_COMPUTER_FUNDAMENTALS: 10,
      UNIT_2_DIGITAL_LOGIC: 12,
      UNIT_3_COA: 8,
      UNIT_4_OPERATING_SYSTEMS: 12,
      UNIT_5_DATA_STRUCTURES_ALGORITHMS: 15,
      UNIT_6_PROGRAMMING_LANGUAGES: 16,
      UNIT_7_DBMS_SQL: 15,
      UNIT_8_COMPUTER_NETWORKS: 12,
      UNIT_9_SOFTWARE_ENGINEERING: 8,
      UNIT_10_WEB_TECHNOLOGIES: 8,
      UNIT_11_TOC_SYSTEM_SOFTWARE: 7,
      UNIT_12_EMERGING_TECH_SECURITY: 7,
    }
  );

  const handleLaunchBPSC = () => {
    const examData = buildOfficialBPSCExam({
      mode,
      treVersion,
      subject,
      seed: Date.now() % 100000,
      mockNumber: mockNum,
      filterTopic: selectedUnit === 'ALL' ? undefined : selectedUnit,
    });
    initializeExam(examData);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-sans">
      {/* BPSC TRE 4.0 Learning Management System (LMS) Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-md border border-blue-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-500/30 px-2.5 py-0.5 text-[10px] font-bold text-blue-200 uppercase tracking-wider">
              NEW: Comprehensive LMS Platform
            </span>
            <span className="rounded-full bg-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
              12-Section Blueprints
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-white">
            BPSC TRE 4.0 Digital Learning &amp; Knowledge Centre
          </h2>
          <p className="text-xs text-blue-100 max-w-2xl">
            Learn every concept from scratch: Part 1 Language (30M Qualifying), Part 2 General Studies (40M), and Part 3 Computer Science Class 11–12 (80M) with textbook-grade lessons, examples, 20-second exam shortcuts, and practice drills.
          </p>
        </div>
        <a
          href="/bpsc/learn"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-300 transition-all cursor-pointer"
        >
          <GraduationCap className="h-4 w-4" />
          <span>Launch BPSC LMS Course</span>
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      {/* Target Subject Selector */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-[#0A2F5C]" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Target Teaching Post &amp; Subject:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSubject('COMPUTER_SCIENCE_11_12')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
              subject === 'COMPUTER_SCIENCE_11_12'
                ? 'bg-[#0A2F5C] text-white shadow-xs ring-2 ring-[#0A2F5C]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>💻 Computer Science (Class 11–12)</span>
            <span className="bg-[#F59E0B] text-[#0A2F5C] text-[10px] font-black px-1.5 py-0.2 rounded">
              Active
            </span>
          </button>

          <button
            disabled
            title="Extensible Architecture: Reuses Part 1 Language & Part 2 GS with Mathematics Subject Module"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-400 cursor-not-allowed border border-dashed border-slate-300"
          >
            <span>📐 Mathematics TGT (Class 9–10)</span>
            <span className="text-[10px] text-slate-400 ml-1">[Upcoming]</span>
          </button>

          <button
            disabled
            title="Extensible Architecture: Reuses Part 1 Language & Part 2 GS with Science Subject Module"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-400 cursor-not-allowed border border-dashed border-slate-300"
          >
            <span>🔬 Science TGT (Class 9–10)</span>
            <span className="text-[10px] text-slate-400 ml-1">[Upcoming]</span>
          </button>
        </div>
      </div>

      {/* Official Exam Regulations Banner */}
      <div className="bg-gradient-to-r from-[#0A2F5C] via-[#0E3D73] to-[#0A2F5C] text-white p-5 rounded-2xl shadow-md border border-blue-400/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[10px] bg-[#F59E0B] text-[#0A2F5C] font-black px-2 py-0.5 rounded uppercase">
              BPSC TRE 4.0 Standard CBT
            </span>
            <span className="text-xs text-blue-200">Class 11 &amp; 12 PGT / Senior Secondary</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-white">
            150 Questions • 150 Minutes • 150 Marks • Zero Negative Marking
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-blue-100">
            <span>
              <strong>Part 1:</strong> Language (30 Qs / Qualifying min 9.0 marks)
            </span>
            <span>•</span>
            <span>
              <strong>Part 2:</strong> General Studies (40 Qs / 40 Marks)
            </span>
            <span>•</span>
            <span>
              <strong>Part 3:</strong> Computer Science (80 Qs / 80 Marks)
            </span>
            <span>•</span>
            <span className="text-[#F59E0B] font-bold">5 Options (A, B, C, D &amp; E)</span>
          </div>
        </div>

        <button
          onClick={() => setShowCoverage(!showCoverage)}
          className="shrink-0 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all flex items-center space-x-1.5 cursor-pointer"
        >
          <Layers className="w-4 h-4 text-[#F59E0B]" />
          <span>{showCoverage ? 'Hide Syllabus Coverage' : 'View Syllabus Matrix'}</span>
        </button>
      </div>

      {/* Syllabus Coverage Matrix Accordion */}
      {showCoverage && (
        <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <h3 className="font-bold text-sm text-[#0A2F5C]">
                Official Class 11-12 Computer Science 12-Unit Syllabus Matrix
              </h3>
              <p className="text-xs text-slate-500">
                Mapped to NCERT &amp; official BPSC TRE syllabus standards.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              100% Units Mapped
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {coverageMatrix.map((u) => (
              <div key={u.unitKey} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
                <div className="text-xs font-bold text-slate-800 line-clamp-1">{u.unitTitle}</div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 font-mono">
                  <span>Authentic PYQs: {u.totalPYQs}</span>
                  <span>Generated: {u.totalGenerated}</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#0A2F5C] h-full rounded-full"
                    style={{ width: `${u.coveragePercentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5 Mock Modes Grid */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
          <span>Select Examination Preparation Mode:</span>
          <span className="text-[11px] text-blue-700 font-semibold">
            {pyqStats.totalQuestions} Verified PYQs Loaded ({pyqStats.officiallyVerifiedCount} Officially Verified)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* MODE 1: PYQ MOCKS */}
          <div
            onClick={() => setMode('PYQ_MOCK')}
            className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              mode === 'PYQ_MOCK'
                ? 'bg-blue-50/80 border-[#0A2F5C] shadow-md ring-2 ring-[#0A2F5C]'
                : 'bg-white border-slate-200 hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-900 px-2 py-0.5 rounded">
                  Mode 1: Authentic PYQ
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-0.5" />
                  Verified Keys
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center space-x-1.5">
                <History className="w-4 h-4 text-purple-700" />
                <span>Previous Year Official Papers</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Attempt authentic papers from TRE 1.0 (Aug 2023), TRE 2.0 (Dec 2023), and TRE 3.0 (July 2024 Re-Exam).
              </p>

              {/* Shift / Version selector when Mode 1 is active */}
              {mode === 'PYQ_MOCK' && (
                <div className="mt-2 pt-2 border-t border-blue-200 space-y-1.5">
                  <label className="text-[11px] font-bold text-[#0A2F5C] block">Select Official Shift / Paper:</label>
                  <select
                    value={treVersion}
                    onChange={(e) => setTreVersion(e.target.value as BPSCTREVersion)}
                    className="w-full text-xs font-semibold bg-white border border-blue-300 rounded p-1.5 outline-none"
                  >
                    <option value="TRE_1_0">BPSC TRE 1.0 (26 Aug 2023 - 120 Qs)</option>
                    <option value="TRE_2_0">BPSC TRE 2.0 (15 Dec 2023 - 150 Qs)</option>
                    <option value="TRE_3_0">BPSC TRE 3.0 (22 July 2024 Re-Exam - 150 Qs)</option>
                    <option value="TRE_4_0">All TRE Combined PYQ Pool</option>
                  </select>
                </div>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-purple-800">
              Authentic Original Questions Only ➔
            </div>
          </div>

          {/* MODE 2: FULL-LENGTH TRE 4.0 MOCKS */}
          <div
            onClick={() => setMode('FULL_LENGTH_TRE4')}
            className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              mode === 'FULL_LENGTH_TRE4'
                ? 'bg-blue-50/80 border-[#0A2F5C] shadow-md ring-2 ring-[#0A2F5C]'
                : 'bg-white border-slate-200 hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  Mode 2: Full Simulation
                </span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  150 Qs • 150 Mins
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center space-x-1.5">
                <Trophy className="w-4 h-4 text-blue-700" />
                <span>Full-Length BPSC TRE 4.0 Mock</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Complete official CBT simulation: Part 1 Language (30Q), Part 2 General Studies (40Q), and Part 3 CS Core (80Q).
              </p>

              {mode === 'FULL_LENGTH_TRE4' && (
                <div className="mt-2 pt-2 border-t border-blue-200 flex items-center space-x-2">
                  <span className="text-xs font-bold text-[#0A2F5C]">Paper #:</span>
                  <select
                    value={mockNum}
                    onChange={(e) => setMockNum(Number(e.target.value))}
                    className="text-xs font-bold bg-white border border-blue-300 rounded px-2 py-1 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        Full Official Mock #{n}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-blue-800">
              150 Minutes Composite Arena ➔
            </div>
          </div>

          {/* MODE 3: SUBJECT-SPECIFIC PRACTICE */}
          <div
            onClick={() => setMode('SUBJECT_SPECIFIC')}
            className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              mode === 'SUBJECT_SPECIFIC'
                ? 'bg-blue-50/80 border-[#0A2F5C] shadow-md ring-2 ring-[#0A2F5C]'
                : 'bg-white border-slate-200 hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                  Mode 3: Focused Practice
                </span>
                <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  80 Qs Drill
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center space-x-1.5">
                <Target className="w-4 h-4 text-emerald-700" />
                <span>Computer Science Core Drill</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Focus purely on the 80-mark Computer Science subject-specific paper without Language or GS sections.
              </p>

              {mode === 'SUBJECT_SPECIFIC' && (
                <div className="mt-2 pt-2 border-t border-blue-200 space-y-1">
                  <span className="text-[11px] font-bold text-[#0A2F5C] block">Filter by Unit (Optional):</span>
                  <select
                    value={selectedUnit}
                    onChange={(e) => setSelectedUnit(e.target.value)}
                    className="w-full text-xs font-semibold bg-white border border-blue-300 rounded p-1.5 outline-none"
                  >
                    <option value="ALL">All 12 Syllabus Units (Mixed 80Q)</option>
                    {BPSC_CS_11_12_SYLLABUS.map((u) => (
                      <option key={u.unit} value={u.unit}>
                        {u.unitNameEn}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-emerald-800">
              Rapid 80-Mark Drill ➔
            </div>
          </div>

          {/* MODE 4: ADAPTIVE PRACTICE MOCK */}
          <div
            onClick={() => setMode('ADAPTIVE')}
            className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              mode === 'ADAPTIVE'
                ? 'bg-blue-50/80 border-[#0A2F5C] shadow-md ring-2 ring-[#0A2F5C]'
                : 'bg-white border-slate-200 hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  Mode 4: Adaptive AI
                </span>
                <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                  Diagnostic
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center space-x-1.5">
                <Brain className="w-4 h-4 text-amber-600" />
                <span>Weakness Diagnostic Mock</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Intelligently boosts question representation for challenging units (Operating Systems, DBMS Normalization &amp; DSA).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-amber-800">
              Personalized Calibration ➔
            </div>
          </div>

          {/* MODE 5: EXPECTED TRE 4.0 MOCK */}
          <div
            onClick={() => setMode('EXPECTED_TRE4')}
            className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              mode === 'EXPECTED_TRE4'
                ? 'bg-blue-50/80 border-[#0A2F5C] shadow-md ring-2 ring-[#0A2F5C]'
                : 'bg-white border-slate-200 hover:border-slate-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-900 px-2 py-0.5 rounded">
                  Mode 5: Expected Mock
                </span>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                  High-Yield
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Expected TRE 4.0 Paper</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-2">
                Curated high-frequency question patterns synthesized from TRE 1, 2, and 3 examination trends.
              </p>
              <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded border border-amber-200 font-medium">
                ⚠️ &quot;These are syllabus-based, BPSC pattern-oriented practice questions, not predicted or confirmed examination questions.&quot;
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-rose-800">
              Targeted Preparation ➔
            </div>
          </div>
        </div>
      </div>

      {/* Selected Action Card & Continue Button */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-[#0A2F5C] uppercase tracking-wide">
            Selected BPSC Configuration:
          </div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
            {mode === 'PYQ_MOCK'
              ? `Previous Year Paper (${treVersion.replace('_', ' ')})`
              : mode === 'SUBJECT_SPECIFIC'
              ? 'Computer Science Core Drill (80 Marks)'
              : mode === 'ADAPTIVE'
              ? 'Adaptive Diagnostic Mock'
              : mode === 'EXPECTED_TRE4'
              ? `Expected TRE 4.0 Full Paper #${mockNum}`
              : `BPSC TRE 4.0 Full-Length Mock #${mockNum}`}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-600">
            <span className="bg-slate-100 px-2 py-0.5 rounded font-mono">
              Duration: {mode === 'SUBJECT_SPECIFIC' ? '80 Mins' : mode === 'PYQ_MOCK' && treVersion === 'TRE_1_0' ? '120 Mins' : '150 Mins'}
            </span>
            <span className="bg-slate-100 px-2 py-0.5 rounded font-mono">
              Negative Penalty: {mode === 'PYQ_MOCK' && treVersion !== 'TRE_4_0' ? '0.00 (Historical Zero Penalty)' : '-1/3 Mark (TRE 4.0)'}
            </span>
            <span className="bg-blue-50 text-blue-900 px-2 py-0.5 rounded font-semibold">
              Free Section Navigation (Composite Clock)
            </span>
            <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-semibold">
              5 Options {mode === 'PYQ_MOCK' && treVersion !== 'TRE_4_0' ? '(Includes Option D & E)' : '(Option E = Not Answered)'}
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowInstructions(true)}
          className="w-full md:w-auto px-8 py-3 rounded-xl font-black text-white bg-[#0A2F5C] hover:bg-[#082743] shadow-md transition-all active:scale-98 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Launch BPSC Test Arena</span>
          <ChevronRight className="w-4 h-4 text-[#F59E0B]" />
        </button>
      </div>

      {/* Official Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-300 max-w-2xl w-full overflow-hidden animate-in zoom-in-95">
            <div className="bg-[#0A2F5C] text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-[#F59E0B]">
              <div>
                <h3 className="font-bold text-base text-white">
                  BPSC TRE 4.0 Official CBT Instructions
                </h3>
                <p className="text-xs text-blue-200">
                  Computer Science (Class 11–12) Examination Guidelines
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-[#06203D] text-[#F59E0B] px-2.5 py-1 rounded">
                150 Mins
              </span>
            </div>

            <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-800 leading-relaxed">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 space-y-1">
                <div className="font-bold text-xs uppercase tracking-wide">
                  1. Three Distinct Sections:
                </div>
                <p className="text-xs">
                  • <strong>Part 1 (Language - 30 Marks):</strong> Qualifying only with 30% cutoff (Minimum 9.0 Marks).<br />
                  • <strong>Part 2 (General Studies - 40 Marks):</strong> Elementary Math, Science, INM &amp; Geography.<br />
                  • <strong>Part 3 (Computer Science - 80 Marks):</strong> Class 11-12 Core Subject.<br />
                  • Merit is calculated based on Part 2 + Part 3 = 120 Marks.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-300 text-amber-950 space-y-1">
                <div className="font-bold text-xs uppercase tracking-wide">
                  2. Marking Scheme &amp; Option E Rules:
                </div>
                <p className="text-xs">
                  • <strong>BPSC TRE 4.0 Marking:</strong> Correct Option (A/B/C/D) gives <strong>+1.00 Mark</strong>. Incorrect Option (A/B/C/D) incurs <strong>-1/3 Mark Penalty (-0.33)</strong>.<br />
                  • <strong>Option E (&quot;Not Answered&quot;):</strong> Awards <strong>0.00 Marks</strong> (Safe Skip — completely avoids penalty).<br />
                  • <strong>Completely Blank / Unselected Question:</strong> Incurs <strong>-1/3 Mark Penalty (-0.33)</strong>! Never leave a question blank; select Option E to skip safely.<br />
                  • <em>(Note: Historical TRE 1.0, 2.0 &amp; 3.0 past papers are evaluated under their original 0 negative marking rules).</em>
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 space-y-1">
                <div className="font-bold text-xs uppercase tracking-wide">
                  3. Navigation &amp; Composite Timer:
                </div>
                <p className="text-xs">
                  The examination countdown timer runs continuously for 150 minutes. You may freely navigate between Part 1, Part 2, and Part 3 at any point.
                </p>
              </div>

              <div className="pt-2 border-t">
                <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasAgreed}
                    onChange={(e) => setHasAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#0A2F5C] cursor-pointer"
                  />
                  <span className="text-xs text-slate-700 font-medium">
                    I have read and understood all official BPSC TRE examination rules and instructions. I am ready to begin.
                  </span>
                </label>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                disabled={!hasAgreed}
                onClick={() => {
                  setShowInstructions(false);
                  handleLaunchBPSC();
                }}
                className={`px-6 py-2 rounded-lg text-xs font-bold text-white transition-all flex items-center space-x-1.5 ${
                  hasAgreed
                    ? 'bg-[#0A2F5C] hover:bg-[#082743] shadow-md cursor-pointer'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-60'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Start BPSC CBT Exam</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
