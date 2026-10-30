// src/components/practice/TopicPracticeArena.tsx

'use client';

import React, { useState, useEffect } from 'react';
import {
  DifficultyLevel,
  PracticeMode,
  TopicPracticeQuestionData,
  SyllabusTopicConfig,
  ConceptGuideData,
} from '@/types/topicPractice';
import { useTopicPracticeStore } from '@/store/useTopicPracticeStore';
import { MathText } from '@/components/common/MathText';
import {
  Zap,
  BookOpen,
  Bookmark,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  RefreshCw,
  Award,
  Layers,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface TopicPracticeArenaProps {
  topic: SyllabusTopicConfig;
  conceptGuide: ConceptGuideData;
  initialQuestions: TopicPracticeQuestionData[];
  onOpenConceptDrawer?: () => void;
}

export const TopicPracticeArena: React.FC<TopicPracticeArenaProps> = ({
  topic,
  conceptGuide,
  initialQuestions,
  onOpenConceptDrawer,
}) => {
  const {
    activeQuestions,
    currentQuestionIndex,
    userAnswers,
    revealedInLearnMode,
    questionTimeSpent,
    drillTimeRemaining,
    isDrillActive,
    isDrillSubmitted,
    selectedDifficulty,
    practiceMode,
    preferredLanguage,
    globalBookmarks,
    startSession,
    selectOption,
    goToNextQuestion,
    goToPrevQuestion,
    jumpToQuestion,
    tickSessionTimer,
    submitDrill,
    setSelectedDifficulty,
    setPracticeMode,
    setPreferredLanguage,
    toggleBookmark,
  } = useTopicPracticeStore();

  const [solutionTab, setSolutionTab] = useState<'SHORTCUT' | 'CONVENTIONAL' | 'DIAGRAM'>('SHORTCUT');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDrillSummaryModal, setShowDrillSummaryModal] = useState(false);

  // Initialize session on mount or when topic/difficulty changes
  useEffect(() => {
    if (activeQuestions.length === 0 || useTopicPracticeStore.getState().activeTopicSlug !== topic.slug) {
      startSession(topic.slug, initialQuestions, practiceMode, selectedDifficulty);
    }
  }, [topic.slug, initialQuestions, startSession, practiceMode, selectedDifficulty, activeQuestions.length]);

  // Master timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      tickSessionTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [tickSessionTimer]);

  const currentQ = activeQuestions[currentQuestionIndex] || initialQuestions[0];
  const qId = currentQ?.id || 'q_fallback';
  const selectedOption = userAnswers[qId];
  const isRevealed = practiceMode === 'LEARN' ? !!revealedInLearnMode[qId] : isDrillSubmitted;
  const isCorrect = selectedOption && currentQ ? selectedOption === currentQ.correctOption : false;
  const timeSpentOnQ = questionTimeSpent[qId] || 0;
  const isBookmarked = globalBookmarks.includes(qId);

  // Fetch / Generate 10 Fresh AI Questions with Entropy Seed
  const handleGenerateFreshQuestions = async () => {
    try {
      setIsGenerating(true);
      const res = await fetch('/api/topic-engine/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: topic.slug,
          difficulty: selectedDifficulty,
          count: 10,
          attemptSeed: Date.now(),
          forceFresh: true,
        }),
      });

      const data = await res.json();
      if (data.success && data.questions && data.questions.length > 0) {
        startSession(topic.slug, data.questions, practiceMode, selectedDifficulty);
      }
    } catch (err) {
      console.error('Failed to generate fresh questions:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Change difficulty filter & regenerate questions
  const handleDifficultyChange = async (diff: DifficultyLevel) => {
    setSelectedDifficulty(diff);
    try {
      setIsGenerating(true);
      const res = await fetch('/api/topic-engine/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: topic.slug,
          difficulty: diff,
          count: 10,
          attemptSeed: Date.now(),
        }),
      });
      const data = await res.json();
      if (data.success && data.questions) {
        startSession(topic.slug, data.questions, practiceMode, diff);
      }
    } catch {
      // fallback
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFinishDrill = () => {
    submitDrill();
    setShowDrillSummaryModal(true);
  };

  // Compute Drill stats
  const totalAttempted = Object.keys(userAnswers).length;
  let totalCorrect = 0;
  activeQuestions.forEach((q) => {
    if (userAnswers[q.id] === q.correctOption) {
      totalCorrect++;
    }
  });
  const accuracyPct = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!currentQ) {
    return (
      <div className="p-8 text-center bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500 font-medium">Loading practice questions...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* 1. TOP CONTROL BAR */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Difficulty Level Selector */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-gray-500 mr-1 whitespace-nowrap">
              Level:
            </span>
            <button
              onClick={() => handleDifficultyChange('LEVEL_1_CLERK_PRE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                selectedDifficulty === 'LEVEL_1_CLERK_PRE'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 1 (Clerk Pre)
            </button>
            <button
              onClick={() => handleDifficultyChange('LEVEL_2_PO_PRE')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                selectedDifficulty === 'LEVEL_2_PO_PRE'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 2 (PO Pre)
            </button>
            <button
              onClick={() => handleDifficultyChange('LEVEL_3_MAINS')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                selectedDifficulty === 'LEVEL_3_MAINS'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Level 3 (Mains)
            </button>
          </div>

          {/* Mode & Action Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Mode Switcher */}
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-0.5">
              <button
                onClick={() => setPracticeMode('LEARN')}
                className={`px-3 py-1 text-xs font-black rounded-md flex items-center space-x-1 transition ${
                  practiceMode === 'LEARN'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>🧠 Learn Mode</span>
              </button>
              <button
                onClick={() => setPracticeMode('DRILL')}
                className={`px-3 py-1 text-xs font-black rounded-md flex items-center space-x-1 transition ${
                  practiceMode === 'DRILL'
                    ? 'bg-white text-[#0e3b64] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>⏱️ Timed Drill</span>
              </button>
            </div>

            {/* Language Toggle */}
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-0.5 text-xs font-bold">
              <button
                onClick={() => setPreferredLanguage('EN')}
                className={`px-2.5 py-1 rounded-md transition ${
                  preferredLanguage === 'EN'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setPreferredLanguage('HI')}
                className={`px-2.5 py-1 rounded-md transition ${
                  preferredLanguage === 'HI'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                HI
              </button>
            </div>

            {/* Fresh Questions Generator Button */}
            <button
              onClick={handleGenerateFreshQuestions}
              disabled={isGenerating}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs disabled:opacity-50"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generating...' : '✨ Fresh 10 Questions'}</span>
            </button>
          </div>
        </div>

        {/* Drill Mode Stopwatch Bar (If Drill Mode is Active) */}
        {practiceMode === 'DRILL' && (
          <div className="bg-[#0e3b64] text-white px-4 py-2.5 rounded-lg flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#ff9900] animate-pulse" />
              <span className="text-xs font-bold text-blue-200">
                TCS iON Speed Drill Timer:
              </span>
              <span className="font-mono font-black text-sm text-[#ff9900]">
                {formatSeconds(drillTimeRemaining)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-blue-200 hidden sm:inline">
                Attempted: {totalAttempted}/{activeQuestions.length}
              </span>
              <button
                onClick={handleFinishDrill}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-black rounded transition"
              >
                Submit Drill
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. QUESTION & WORKSPACE AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Main Question Card (Left 3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-5">
            {/* Question Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentQuestionIndex + 1}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  {currentQ.examTag}
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  {currentQ.conceptTag}
                </span>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                {/* Per-Question Live Timer vs Ideal Time */}
                <div className="flex items-center space-x-1 font-mono text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span className={timeSpentOnQ > currentQ.idealTimeSeconds ? 'text-red-500 font-bold' : ''}>
                    {timeSpentOnQ}s
                  </span>
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-400">ideal: {currentQ.idealTimeSeconds}s</span>
                </div>

                {/* Bookmark Toggle */}
                <button
                  onClick={() => toggleBookmark(qId, topic.slug)}
                  className={`p-1.5 rounded-md border transition ${
                    isBookmarked
                      ? 'bg-amber-50 text-amber-600 border-amber-300'
                      : 'bg-gray-50 text-gray-400 hover:text-gray-700 border-gray-200'
                  }`}
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* Common Context / Passage (if present) */}
            {(currentQ.commonContextEn || currentQ.commonContextHi) && (
              <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-gray-800 whitespace-pre-line leading-relaxed">
                <span className="font-bold text-blue-900 block mb-1">
                  Directions / Context:
                </span>
                <MathText
                  text={
                    preferredLanguage === 'HI' && currentQ.commonContextHi
                      ? currentQ.commonContextHi
                      : currentQ.commonContextEn || ''
                  }
                />
              </div>
            )}

            {/* Question Stem */}
            <div className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
              <MathText
                text={
                  preferredLanguage === 'HI' && currentQ.questionHi
                    ? currentQ.questionHi
                    : currentQ.questionEn
                }
              />
            </div>

            {/* 5 Realistic Options (A - E) */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                const isThisCorrect = opt.id === currentQ.correctOption;

                let optStyle =
                  'border-gray-200 bg-white hover:bg-gray-50/80 text-gray-800';

                if (isRevealed) {
                  if (isThisCorrect) {
                    optStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-900 font-bold';
                  } else if (isSelected && !isThisCorrect) {
                    optStyle = 'border-red-500 bg-red-50/80 text-red-900';
                  }
                } else if (isSelected) {
                  optStyle = 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold ring-1 ring-blue-600';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => selectOption(qId, opt.id)}
                    className={`w-full p-3 sm:p-3.5 rounded-lg border text-left transition flex items-start space-x-3 text-xs sm:text-sm ${optStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                        isRevealed && isThisCorrect
                          ? 'bg-emerald-600 text-white'
                          : isRevealed && isSelected && !isThisCorrect
                          ? 'bg-red-600 text-white'
                          : isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {opt.id}
                    </span>

                    <span className="flex-1 mt-0.5">
                      <MathText
                        text={
                          preferredLanguage === 'HI' && opt.textHi
                            ? opt.textHi
                            : opt.textEn
                        }
                      />
                    </span>

                    {isRevealed && isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                    )}
                    {isRevealed && isSelected && !isThisCorrect && (
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                onClick={goToPrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-3.5 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-semibold text-gray-500">
                Question {currentQuestionIndex + 1} of {activeQuestions.length}
              </span>

              <button
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === activeQuestions.length - 1}
                className="px-4 py-1.5 rounded-lg bg-[#0e3b64] hover:bg-[#12497d] text-white text-xs font-bold transition flex items-center space-x-1 disabled:opacity-40"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. INSTANT CONCEPT FEEDBACK PANEL (Shown in Learn Mode after selecting option or after Drill submit) */}
          {isRevealed && (
            <div className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden shadow-xs space-y-0">
              {/* Status Header Banner */}
              <div
                className={`p-4 flex items-center justify-between text-white ${
                  isCorrect
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
                    : 'bg-gradient-to-r from-red-600 to-rose-700'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  ) : (
                    <XCircle className="w-6 h-6 text-white" />
                  )}
                  <div>
                    <h4 className="font-black text-sm sm:text-base">
                      {isCorrect ? 'Correct Answer! Well Done.' : 'Incorrect Answer.'}
                    </h4>
                    <p className="text-xs text-white/80">
                      Correct Option is{' '}
                      <span className="font-bold underline">
                        Option ({currentQ.correctOption})
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="block font-black text-sm">
                    {timeSpentOnQ}s
                  </span>
                  <span className="text-white/70">
                    {timeSpentOnQ <= currentQ.idealTimeSeconds ? '⚡ Faster than average' : '⏳ Needs speed optimization'}
                  </span>
                </div>
              </div>

              {/* Solution Tab Bar */}
              <div className="bg-gray-100 border-b border-gray-200 px-4 pt-2 flex items-center space-x-2">
                <button
                  onClick={() => setSolutionTab('SHORTCUT')}
                  className={`px-3 py-1.5 text-xs font-black rounded-t-lg transition flex items-center space-x-1.5 ${
                    solutionTab === 'SHORTCUT'
                      ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>⚡ 20s Exam Shortcut</span>
                </button>

                <button
                  onClick={() => setSolutionTab('CONVENTIONAL')}
                  className={`px-3 py-1.5 text-xs font-black rounded-t-lg transition flex items-center space-x-1.5 ${
                    solutionTab === 'CONVENTIONAL'
                      ? 'bg-white text-blue-800 border-t-2 border-blue-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>📘 Step-by-Step Derivation</span>
                </button>

                {currentQ.solutionSvgDiagram && (
                  <button
                    onClick={() => setSolutionTab('DIAGRAM')}
                    className={`px-3 py-1.5 text-xs font-black rounded-t-lg transition flex items-center space-x-1.5 ${
                      solutionTab === 'DIAGRAM'
                        ? 'bg-white text-purple-800 border-t-2 border-purple-600 shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>📐 Visual Diagram</span>
                  </button>
                )}

                {/* Quick Concept Refresher Drawer Button */}
                {onOpenConceptDrawer && (
                  <button
                    onClick={onOpenConceptDrawer}
                    className="ml-auto text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center space-x-1 pb-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Concept Refresher</span>
                  </button>
                )}
              </div>

              {/* Solution Body */}
              <div className="p-5 text-xs sm:text-sm">
                {solutionTab === 'SHORTCUT' && (
                  <div className="bg-emerald-50/60 p-4 rounded-lg border border-emerald-200 space-y-2">
                    <span className="font-bold text-emerald-900 flex items-center space-x-1.5">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>Bank PO 20-Second Shortcut Trick:</span>
                    </span>
                    <p className="text-emerald-900 font-medium whitespace-pre-line leading-relaxed">
                      <MathText
                        text={
                          preferredLanguage === 'HI' && currentQ.examShortcutHi
                            ? currentQ.examShortcutHi
                            : currentQ.examShortcutEn
                        }
                      />
                    </p>
                  </div>
                )}

                {solutionTab === 'CONVENTIONAL' && (
                  <div className="bg-blue-50/40 p-4 rounded-lg border border-blue-200 space-y-2">
                    <span className="font-bold text-blue-900 flex items-center space-x-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Foundational Derivation (Why this works):</span>
                    </span>
                    <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                      <MathText
                        text={
                          preferredLanguage === 'HI' && currentQ.conventionalSolHi
                            ? currentQ.conventionalSolHi
                            : currentQ.conventionalSolEn
                        }
                      />
                    </p>
                  </div>
                )}

                {solutionTab === 'DIAGRAM' && currentQ.solutionSvgDiagram && (
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex justify-center">
                    <div
                      className="w-full max-w-lg"
                      dangerouslySetInnerHTML={{ __html: currentQ.solutionSvgDiagram }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Palette Grid & Topic Info */}
        <div className="space-y-4">
          {/* Question Palette Grid */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 border-b border-gray-100 pb-2 flex items-center justify-between">
              <span>Question Palette</span>
              <span className="text-blue-700 font-black">
                {activeQuestions.length} Qs
              </span>
            </h4>

            <div className="grid grid-cols-5 gap-1.5">
              {activeQuestions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAns = !!userAnswers[q.id];
                const isQCorrect = userAnswers[q.id] === q.correctOption;

                let btnBg = 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                if (isRevealed && isAns) {
                  btnBg = isQCorrect
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-red-500 text-white font-bold';
                } else if (isAns) {
                  btnBg = 'bg-blue-600 text-white font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(idx)}
                    className={`w-full aspect-square rounded-md text-xs font-bold transition flex items-center justify-center relative ${btnBg} ${
                      isCurrent ? 'ring-2 ring-offset-1 ring-[#0e3b64]' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weightage & Blueprint Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-xs space-y-2.5">
            <h4 className="font-black text-blue-900 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Exam Weightage Blueprint</span>
            </h4>
            <div className="space-y-1 text-gray-700">
              <p>
                <strong className="text-gray-900">Prelims:</strong> {topic.weightagePrelims}
              </p>
              <p>
                <strong className="text-gray-900">Mains:</strong> {topic.weightageMains}
              </p>
            </div>
            <p className="text-[11px] text-blue-800/80 leading-relaxed pt-1 border-t border-blue-200/60">
              {topic.descriptionEn}
            </p>
          </div>
        </div>
      </div>

      {/* Drill Summary Modal */}
      {showDrillSummaryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-gray-200 animate-in fade-in zoom-in-95">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl">
                🏆
              </div>
              <h3 className="text-lg font-black text-gray-900">
                Speed Drill Completed!
              </h3>
              <p className="text-xs text-gray-500">
                {topic.titleEn} &bull; {selectedDifficulty}
              </p>
            </div>

            {/* Scorecard Metrics */}
            <div className="grid grid-cols-3 gap-2.5 text-center bg-gray-50 p-3.5 rounded-xl border border-gray-200">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 block">
                  Score
                </span>
                <span className="text-xl font-black text-blue-700">
                  {totalCorrect} / {activeQuestions.length}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 block">
                  Accuracy
                </span>
                <span className="text-xl font-black text-emerald-600">
                  {accuracyPct}%
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 block">
                  Attempted
                </span>
                <span className="text-xl font-black text-gray-900">
                  {totalAttempted}
                </span>
              </div>
            </div>

            <p className="text-xs text-center text-gray-600">
              Detailed solutions and 20-second shortcuts have been unlocked for every question in this drill.
            </p>

            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => {
                  setShowDrillSummaryModal(false);
                  setPracticeMode('LEARN');
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#0e3b64] text-white text-xs font-black hover:bg-[#12497d] transition"
              >
                Review Solutions &amp; Shortcuts
              </button>
              <button
                onClick={() => {
                  setShowDrillSummaryModal(false);
                  handleGenerateFreshQuestions();
                }}
                className="px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-xs font-bold text-gray-700 transition"
              >
                Re-drill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
