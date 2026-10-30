'use client';

import React, { useState } from 'react';
import { useExamStore } from '@/store/useExamStore';
import {
  Trophy,
  Target,
  Zap,
  AlertOctagon,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';
import { SectionalScoreResult, QuestionAnalysis } from '@/types/exam';

export const AnalyticsDashboard: React.FC = () => {
  const { submissionResult, resetExamState, exam, initializeExam, returnToGateway } = useExamStore();
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionAnalysis | null>(null);
  const [solutionMode, setSolutionMode] = useState<'conventional' | 'shortcut'>('shortcut');

  if (!submissionResult) return null;

  return (
    <div className="min-h-screen bg-[#f3f6fa] text-gray-900 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              <span>Post-Exam Comprehensive Diagnostics</span>
              <span>•</span>
              <span>{submissionResult.submittedAt}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              {submissionResult.examTitle}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Evaluated strictly under official SBI / IBPS negative marking guidelines (-0.25 penalty per incorrect response).
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (exam) {
                  resetExamState();
                  initializeExam(exam);
                }
              }}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-gray-600" />
              <span>Reattempt Same Mock</span>
            </button>

            <button
              onClick={returnToGateway}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0e3b64] hover:bg-[#082743] shadow-xs cursor-pointer"
            >
              <span>📚 Choose Another Exam / Fresh Paper</span>
            </button>
          </div>
        </div>

        {/* 4 Scorecard KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Score */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Overall Score</div>
              <div className="text-2xl font-black text-[#0e3b64]">
                {submissionResult.totalScore.toFixed(2)}{' '}
                <span className="text-xs font-normal text-gray-400">/ {submissionResult.totalMarks}</span>
              </div>
            </div>
          </div>

          {/* Accuracy */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Accuracy</div>
              <div className="text-2xl font-black text-emerald-700">
                {submissionResult.accuracy}%
              </div>
            </div>
          </div>

          {/* Percentile Rank */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Percentile Rank</div>
              <div className="text-2xl font-black text-purple-800">
                {submissionResult.percentilePredictor}th
              </div>
            </div>
          </div>

          {/* Fatal Time-Traps */}
          <div className="bg-white rounded-xl p-5 border border-red-200 shadow-xs flex items-center space-x-4 bg-red-50/30">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-red-700 uppercase tracking-wide">Fatal Time-Traps</div>
              <div className="text-2xl font-black text-red-600">
                {submissionResult.timeTrapAnalysis.fatalTimeTrapsCount}
              </div>
            </div>
          </div>
        </div>

        {/* Sectional Cutoff Comparison Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Sectional Cutoff Clearance Breakdown</span>
            </h2>
            <span className="text-xs text-gray-500">Based on Expected Official Cutoffs</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
              <thead className="bg-gray-50 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-3 text-left">Section</th>
                  <th className="px-4 py-3 text-center">Score</th>
                  <th className="px-4 py-3 text-center">Cutoff</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Accuracy</th>
                  <th className="px-4 py-3 text-center">Correct / Wrong</th>
                  <th className="px-4 py-3 text-center">Time Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {submissionResult.sectionalResults.map((sec: SectionalScoreResult) => {
                  const minutes = Math.floor(sec.timeSpentSeconds / 60);
                  const seconds = sec.timeSpentSeconds % 60;

                  return (
                    <tr key={sec.sectionId} className="hover:bg-blue-50/40">
                      <td className="px-6 py-3.5 font-bold text-gray-900">{sec.displayName}</td>
                      <td className="px-4 py-3.5 text-center font-mono font-bold text-blue-900">
                        {sec.score.toFixed(2)} / {sec.maxMarks}
                      </td>
                      <td className="px-4 py-3.5 text-center font-mono text-gray-600">{sec.cutoff}</td>
                      <td className="px-4 py-3.5 text-center">
                        {sec.clearedCutoff ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Cleared
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                            <XCircle className="w-3 h-3 mr-1" />
                            Missed (-{(sec.cutoff - sec.score).toFixed(2)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center font-mono">{sec.accuracy}%</td>
                      <td className="px-4 py-3.5 text-center font-mono text-xs">
                        <span className="text-emerald-700 font-bold">{sec.correctCount}</span> /{' '}
                        <span className="text-red-600 font-bold">{sec.incorrectCount}</span>
                      </td>
                      <td className="px-4 py-3.5 text-center font-mono text-gray-600 text-xs">
                        {minutes}m {seconds}s
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4-Quadrant Time-Trap Matrix */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>The 4-Quadrant Speed-Accuracy & Time-Trap Matrix</span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                In Indian banking exams, skipping fatal time-traps is just as critical as solving questions quickly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Q1: Fast & Correct */}
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Quadrant 1: Fast &amp; Correct (Your Strengths)
                </span>
                <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                  {submissionResult.timeTrapAnalysis.fastCorrectCount} Questions
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Solved within ideal benchmark time. Maintain this speed and muscle memory.
              </p>
            </div>

            {/* Q2: Slow & Correct */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Quadrant 2: Slow &amp; Correct (Needs Shortcut Speed)
                </span>
                <span className="text-xs font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded font-mono">
                  {submissionResult.timeTrapAnalysis.slowCorrectCount} Questions
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Got the right answer but spent more than benchmark time. Learn ratio or Vedic math shortcuts.
              </p>
            </div>

            {/* Q3: Fast & Wrong */}
            <div className="bg-orange-50/60 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-900">
                  Quadrant 3: Fast &amp; Wrong (Silly Mistakes / Guesswork)
                </span>
                <span className="text-xs font-black text-orange-900 bg-orange-100 px-2 py-0.5 rounded font-mono">
                  {submissionResult.timeTrapAnalysis.fastWrongCount} Questions
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Attempted too hastily or guessed blindly. Attracted 0.25 negative penalty without gaining points.
              </p>
            </div>

            {/* Q4: Fatal Time-Traps */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-900 flex items-center space-x-1.5">
                  <AlertOctagon className="w-4 h-4 text-red-600" />
                  <span>Quadrant 4: FATAL TIME-TRAPS (&gt;90s &amp; Wrong/Skipped)</span>
                </span>
                <span className="text-xs font-black text-white bg-red-600 px-2.5 py-0.5 rounded font-mono">
                  {submissionResult.timeTrapAnalysis.fatalTimeTrapsCount} Traps
                </span>
              </div>
              <p className="text-xs text-red-700 leading-relaxed">
                Critical warning: Spending &gt;90s on a puzzle or DI question and getting it wrong or leaving it blank drains 15-20% of your total sectional time!
              </p>
            </div>
          </div>
        </div>

        {/* Questions Diagnostic Grid & Dual-Solution Viewer */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="text-base font-bold text-gray-900 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#0e3b64]" />
              <span>Question-by-Question Solution &amp; Shortcut Engine</span>
            </h2>
            <span className="text-xs text-gray-500">Click any question below to inspect dual solutions</span>
          </div>

          {/* Question Number Pills */}
          <div className="flex flex-wrap gap-2">
            {submissionResult.questionsAnalysis.map((qa: QuestionAnalysis) => {
              const isSelected = selectedQuestion?.questionId === qa.questionId;
              let badgeColor = 'bg-gray-100 text-gray-700 border-gray-300';

              if (qa.quadrant === 'FAST_CORRECT') badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
              else if (qa.quadrant === 'SLOW_CORRECT') badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
              else if (qa.quadrant === 'FAST_WRONG') badgeColor = 'bg-orange-100 text-orange-800 border-orange-300';
              else if (qa.quadrant === 'SLOW_WRONG_OR_SKIPPED') badgeColor = 'bg-red-600 text-white border-red-700 font-black animate-pulse';

              return (
                <button
                  key={qa.questionId}
                  onClick={() => setSelectedQuestion(qa)}
                  className={`w-9 h-9 rounded-lg border text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${badgeColor} ${
                    isSelected ? 'ring-2 ring-blue-700 scale-105 shadow-md' : 'hover:opacity-90'
                  }`}
                >
                  {qa.questionNumber}
                </button>
              );
            })}
          </div>

          {/* Detailed Solution Drawer / Card */}
          {selectedQuestion ? (
            <div className="mt-4 p-5 rounded-xl border border-blue-200 bg-blue-50/30 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-blue-200/60 pb-3">
                <div>
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Question {selectedQuestion.questionNumber} • {selectedQuestion.topic}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    Time Spent: <span className="font-mono font-bold">{selectedQuestion.timeSpentSeconds}s</span> (Ideal: ~{selectedQuestion.avgIdealTimeSeconds}s) • Result: {selectedQuestion.isCorrect ? '+1.00 Marks' : `${selectedQuestion.marksAwarded} Marks`}
                  </div>
                </div>

                {/* Solution Toggle: Conventional vs Shortcut */}
                <div className="flex items-center space-x-1 bg-white p-1 rounded-lg border border-gray-300 shadow-xs">
                  <button
                    onClick={() => setSolutionMode('shortcut')}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      solutionMode === 'shortcut'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    ⚡ Shortcut / Vedic Trick
                  </button>
                  <button
                    onClick={() => setSolutionMode('conventional')}
                    className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                      solutionMode === 'conventional'
                        ? 'bg-[#0e3b64] text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    📖 Textbook Solution
                  </button>
                </div>
              </div>

              {/* Solution Content */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line text-gray-800 space-y-4">
                {/* Visual Solution Diagram if available */}
                {selectedQuestion.diagramSpec?.svgCode && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Visual Solution Diagram ({selectedQuestion.diagramSpec.diagramType})
                      </span>
                      <span className="text-[10px] bg-blue-100 text-[#0e3b64] font-bold px-2 py-0.5 rounded">
                        TCS iON Standard
                      </span>
                    </div>
                    <div
                      className="w-full flex justify-center overflow-x-auto bg-white rounded p-2 border border-slate-100"
                      dangerouslySetInnerHTML={{ __html: selectedQuestion.diagramSpec.svgCode }}
                    />
                  </div>
                )}

                {solutionMode === 'shortcut' ? (
                  selectedQuestion.shortcutTrick ? (
                    <div>
                      <div className="font-bold text-amber-800 text-xs uppercase tracking-wider mb-2">
                        Exam Speed Shortcut:
                      </div>
                      <p className="text-gray-800 font-sans">{selectedQuestion.shortcutTrick}</p>
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">No specific shortcut trick recorded for this question. See conventional solution below.</div>
                  )
                ) : (
                  <div>
                    <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-2">
                      Conventional Step-by-Step Method:
                    </div>
                    <p className="text-gray-800 font-sans">{selectedQuestion.conventionalSolution}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 text-gray-400 text-xs">
              Select any question number button above to inspect its step-by-step solution and speed shortcuts.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
