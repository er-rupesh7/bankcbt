// src/components/practice/TopicWorkspaceClient.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { getTopicBySlug } from '@/data/syllabusTaxonomy';
import { getConceptGuide, getTopicQuestions } from '@/data/topicSeedData';
import { DifficultyLevel } from '@/types/topicPractice';
import { useTopicPracticeStore } from '@/store/useTopicPracticeStore';
import { PracticeHeader } from '@/components/practice/PracticeHeader';
import { ConceptMasteryView } from '@/components/practice/ConceptMasteryView';
import { TopicPracticeArena } from '@/components/practice/TopicPracticeArena';
import { TopicAnalyticsView } from '@/components/practice/TopicAnalyticsView';
import { MathText } from '@/components/common/MathText';
import {
  BookOpen,
  Zap,
  TrendingUp,
  X,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface TopicWorkspaceClientProps {
  topicSlug: string;
}

export const TopicWorkspaceClient: React.FC<TopicWorkspaceClientProps> = ({
  topicSlug,
}) => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const topic = getTopicBySlug(topicSlug);
  if (!topic) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<'CONCEPT' | 'PRACTICE' | 'ANALYTICS'>(() => {
    if (tabParam === 'practice') return 'PRACTICE';
    if (tabParam === 'analytics') return 'ANALYTICS';
    return 'CONCEPT';
  });

  useEffect(() => {
    if (tabParam === 'practice') {
      setActiveTab('PRACTICE');
    } else if (tabParam === 'analytics') {
      setActiveTab('ANALYTICS');
    }
  }, [tabParam]);

  const [isConceptDrawerOpen, setIsConceptDrawerOpen] = useState(false);

  const conceptGuide = getConceptGuide(topicSlug);
  const initialQuestions = getTopicQuestions(topicSlug);

  const {
    getTopicMastery,
    markConceptCompleted,
    setSelectedDifficulty,
  } = useTopicPracticeStore();

  const mastery = getTopicMastery(topicSlug);

  const handleStartPractice = () => {
    setActiveTab('PRACTICE');
  };

  const handleStartPracticeLevel = (level: DifficultyLevel) => {
    setSelectedDifficulty(level);
    setActiveTab('PRACTICE');
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-gray-900 font-sans flex flex-col justify-between">
      {/* 1. Top Header */}
      <PracticeHeader
        title={topic.titleEn}
        subtitle={`${topic.clusterName} • Prelims: ${topic.weightagePrelims} • Mains: ${topic.weightageMains}`}
        showBackToHub={true}
      />

      {/* 2. Breadcrumb & Navigation Sub-Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-1.5 text-gray-500 font-medium overflow-x-auto py-0.5">
            <Link href="/practice" className="hover:text-blue-600 transition">
              Syllabus Hub
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-gray-600 shrink-0">{topic.clusterName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-[#0e3b64] font-bold shrink-0">{topic.titleEn}</span>
          </nav>

          {/* Tab Switcher */}
          <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg border border-gray-200 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('CONCEPT')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'CONCEPT'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>📖 Concept &amp; Shortcuts</span>
            </button>

            <button
              onClick={() => setActiveTab('PRACTICE')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'PRACTICE'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>🎯 Practice Arena</span>
            </button>

            <button
              onClick={() => setActiveTab('ANALYTICS')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition flex items-center space-x-1.5 ${
                activeTab === 'ANALYTICS'
                  ? 'bg-white text-purple-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>📊 Mastery Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        {activeTab === 'CONCEPT' && (
          <ConceptMasteryView
            topic={topic}
            conceptGuide={conceptGuide}
            onStartPractice={handleStartPractice}
            onMarkConceptCompleted={() => markConceptCompleted(topicSlug)}
            isCompleted={mastery.conceptCompleted}
          />
        )}

        {activeTab === 'PRACTICE' && (
          <TopicPracticeArena
            topic={topic}
            conceptGuide={conceptGuide}
            initialQuestions={initialQuestions}
            onOpenConceptDrawer={() => setIsConceptDrawerOpen(true)}
          />
        )}

        {activeTab === 'ANALYTICS' && (
          <TopicAnalyticsView
            topic={topic}
            mastery={mastery}
            onStartPracticeLevel={handleStartPracticeLevel}
          />
        )}
      </main>

      {/* 4. Slide-Over Concept Refresher Drawer */}
      {isConceptDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-gray-200">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0e3b64] text-white flex items-center justify-between border-b-2 border-[#ff9900]">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-[#ff9900]" />
                <h3 className="font-bold text-sm text-white">
                  {topic.titleEn} — Quick Formula Refresher
                </h3>
              </div>
              <button
                onClick={() => setIsConceptDrawerOpen(false)}
                className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm flex-1">
              {/* Formula Sheet */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Core Formulas &amp; Rules</span>
                </h4>
                {conceptGuide.formulasAndRules.map((f, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200 space-y-1">
                    <span className="font-bold text-gray-800 text-xs block">{f.title}</span>
                    <div className="bg-white p-2 rounded border border-gray-200 font-mono text-center text-blue-900 my-1">
                      <MathText text={`$$${f.latexFormula}$$`} />
                    </div>
                    <p className="text-gray-600 text-xs">{f.explanationEn}</p>
                  </div>
                ))}
              </div>

              {/* 20s Shortcut */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Bank PO 20s Exam Shortcut</span>
                </h4>
                {conceptGuide.shortcutTricks.map((t, i) => (
                  <div key={i} className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-200 space-y-1">
                    <span className="font-bold text-emerald-900 text-xs block">{t.trickName}</span>
                    <p className="text-emerald-800 text-xs whitespace-pre-line font-medium">
                      {t.shortcutStepsEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Common Traps */}
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>TCS iON Common Traps</span>
                </h4>
                {conceptGuide.commonTraps.map((tr, i) => (
                  <div key={i} className="bg-red-50/60 p-3 rounded-lg border border-red-200 space-y-1">
                    <span className="font-bold text-red-900 text-xs block">{tr.trapTitle}</span>
                    <p className="text-red-700 text-xs">{tr.mistakeStudentsMake}</p>
                    <p className="text-emerald-800 text-xs font-semibold pt-1">
                      ✓ Avoid: {tr.howToAvoid}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsConceptDrawerOpen(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
              >
                Return to Question
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <footer className="bg-white border-t border-gray-200 text-center py-4 text-xs text-gray-500 mt-12">
        <p>
          Official Banking Examination CBT Portal &bull; Practice Engine calibrated for SBI PO/Clerk, IBPS PO/Clerk &amp; RRB Exams.
        </p>
      </footer>
    </div>
  );
};
