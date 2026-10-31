// src/app/practice/page.tsx

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { SYLLABUS_TAXONOMY, TOPIC_CATEGORIES } from '@/data/syllabusTaxonomy';
import { TopicCategory, SyllabusTopicConfig } from '@/types/topicPractice';
import { useTopicPracticeStore } from '@/store/useTopicPracticeStore';
import { useSyllabusTreeStore } from '@/store/useSyllabusTreeStore';
import { PracticeHeader } from '@/components/practice/PracticeHeader';
import { TopicCard } from '@/components/practice/TopicCard';
import { SyllabusTreeTracker } from '@/components/practice/SyllabusTreeTracker';
import {
  Search,
  Zap,
  LayoutGrid,
  GitBranch,
  X,
} from 'lucide-react';

const TARGET_EXAMS = [
  { key: 'ALL', label: 'All Banking Exams' },
  { key: 'SBI_PO', label: 'SBI PO' },
  { key: 'SBI_CLERK', label: 'SBI Clerk' },
  { key: 'IBPS_PO', label: 'IBPS PO' },
  { key: 'IBPS_CLERK', label: 'IBPS Clerk' },
  { key: 'RRB_PO', label: 'IBPS RRB PO' },
  { key: 'RRB_CLERK', label: 'IBPS RRB Clerk' },
];

export default function PracticeHubPage() {
  const [viewMode, setViewMode] = useState<'GRID' | 'TREE'>('GRID');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    selectedExam,
    selectedCategory,
    searchQuery,
    setSelectedExam,
    setSelectedCategory,
    setSearchQuery,
    getTopicMastery,
    topicMasteryMap,
  } = useTopicPracticeStore();

  const { getGlobalProgress, checkedItemIds } = useSyllabusTreeStore();

  // SSR-safe state reads
  const activeExam = mounted ? selectedExam : 'ALL';
  const activeCategory = mounted ? selectedCategory : 'ALL';

  // Global Syllabus Tree progress (for dual readiness widget)
  const globalTreeProgress = useMemo(() => {
    if (!mounted) return { completed: 0, total: 119, percentage: 0 };
    return getGlobalProgress();
  }, [mounted, checkedItemIds, getGlobalProgress]);

  // Filter topics based on category, exam relevance, and search query
  const filteredTopics = useMemo(() => {
    return SYLLABUS_TAXONOMY.filter((topic) => {
      // Category filter
      if (activeCategory !== 'ALL' && topic.category !== activeCategory) {
        return false;
      }

      // Exam filter
      if (activeExam !== 'ALL' && !topic.examRelevance.includes(activeExam)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitleEn = topic.titleEn.toLowerCase().includes(q);
        const matchTitleHi = topic.titleHi.toLowerCase().includes(q);
        const matchCluster = topic.clusterName.toLowerCase().includes(q);
        const matchDesc = topic.descriptionEn.toLowerCase().includes(q);
        if (!matchTitleEn && !matchTitleHi && !matchCluster && !matchDesc) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeExam, searchQuery]);

  // Group topics by cluster
  const groupedByCluster = useMemo(() => {
    const map = new Map<string, SyllabusTopicConfig[]>();
    for (const t of filteredTopics) {
      const list = map.get(t.clusterName) || [];
      list.push(t);
      map.set(t.clusterName, list);
    }
    return Array.from(map.entries());
  }, [filteredTopics]);

  // Global Mastery Statistics (SSR-safe: 0 on server & initial hydration, populates post-mount)
  const stats = useMemo(() => {
    const allTopics = SYLLABUS_TAXONOMY;
    if (!mounted) {
      return {
        totalTopics: allTopics.length,
        conceptsRead: 0,
        totalAttempted: 0,
        accuracy: 0,
        masteredCount: 0,
      };
    }

    let totalAttempted = 0;
    let totalCorrect = 0;
    let conceptsRead = 0;
    let masteredCount = 0;

    for (const t of allTopics) {
      const m = getTopicMastery(t.slug);
      totalAttempted += m.questionsAttempted;
      totalCorrect += m.questionsCorrect;
      if (m.conceptCompleted) conceptsRead++;
      if (m.masteryScore >= 70) masteredCount++;
    }

    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    return {
      totalTopics: allTopics.length,
      conceptsRead,
      totalAttempted,
      accuracy,
      masteredCount,
    };
  }, [mounted, getTopicMastery, topicMasteryMap]);

  // Circular gauge math for Readiness widget
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (globalTreeProgress.percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />

      {/* 1. Sticky Header Navbar */}
      <PracticeHeader showBackToHub={false} />

      {/* 2. Main Content Container (pt-8 pb-20 guarantees no top clipping) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-6 flex-1 w-full relative z-10">
        
        {/* Consolidated Hero & Live Telemetry Header */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-900 border border-blue-500/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Column: Title & Mission */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>OFFICIAL TCS iON SYLLABUS ENGINE</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Topic-Wise Concept Mastery &amp; Speed Drills
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Master every single chapter of SBI PO, SBI Clerk, IBPS PO, and RRB exams. Study 20-second shortcuts, memorize formula sheets, and practice calibrated drills from Level 1 (Clerk Speed) to Level 3 (Mains Analysis).
                </p>
              </div>

              {/* Right Column: Unified Readiness Widget */}
              <div className="bg-slate-900/80 border border-slate-700/70 rounded-xl p-4 flex items-center gap-5 shrink-0 shadow-lg self-start lg:self-auto">
                {/* SVG Progress Ring */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="5"
                      className="text-slate-800"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="5"
                      className="text-blue-500 transition-all duration-700 ease-out"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span
                      className="text-xs font-black text-white"
                      suppressHydrationWarning
                    >
                      {mounted ? `${globalTreeProgress.percentage}%` : '0%'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Topics PO Ready
                    </span>
                    <span
                      className="text-base font-extrabold text-white block"
                      suppressHydrationWarning
                    >
                      {mounted ? stats.masteredCount : 0}{' '}
                      <span className="text-xs text-slate-400 font-semibold">
                        / {stats.totalTopics} Chapters
                      </span>
                    </span>
                  </div>
                  <div className="pt-1 border-t border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                      Curriculum Granular Mastery
                    </span>
                    <span
                      className="text-xs font-bold text-slate-300"
                      suppressHydrationWarning
                    >
                      {mounted ? globalTreeProgress.completed : 0} / {globalTreeProgress.total} Sub-Concepts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Compact KPI Stat Pills */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-center">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3">
                <span className="text-[11px] text-slate-400 block font-semibold">Total Chapters</span>
                <span className="text-lg font-black text-white">{stats.totalTopics} Topics</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3">
                <span className="text-[11px] text-slate-400 block font-semibold">Concepts Read</span>
                <span
                  className="text-lg font-black text-emerald-400"
                  suppressHydrationWarning
                >
                  {stats.conceptsRead} Completed
                </span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3">
                <span className="text-[11px] text-slate-400 block font-semibold">Questions Solved</span>
                <span
                  className="text-lg font-black text-amber-400"
                  suppressHydrationWarning
                >
                  {stats.totalAttempted} Qs
                </span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3">
                <span className="text-[11px] text-slate-400 block font-semibold">Average Accuracy</span>
                <span
                  className="text-lg font-black text-cyan-400"
                  suppressHydrationWarning
                >
                  {stats.accuracy}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Unified View Switcher & Sticky Filter Control Bar */}
        <div id="topics-grid" className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4 backdrop-blur-md">
          {/* Row 1: View Mode Segmented Control + Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* View Mode Segmented Bar */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 inline-flex flex-1 sm:flex-none">
              <button
                onClick={() => setViewMode('GRID')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'GRID'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Topic Cards Grid</span>
              </button>

              <button
                onClick={() => setViewMode('TREE')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'TREE'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <GitBranch className="w-4 h-4" />
                <span>Interactive Syllabus Tree</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded-full uppercase">
                  Arsenal
                </span>
              </button>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topic or shortcut..."
                className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Target Banking Examination Filter */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Target Banking Examination:
            </span>
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
              {TARGET_EXAMS.map((exam) => (
                <button
                  key={exam.key}
                  onClick={() => setSelectedExam(exam.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    activeExam === exam.key
                      ? 'bg-blue-600 text-white border border-blue-500 shadow-sm shadow-blue-500/20'
                      : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {exam.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Subject Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pt-2 border-t border-slate-800/80 pb-1">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeCategory === 'ALL'
                  ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-semibold shadow-xs'
                  : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              All Subjects ({SYLLABUS_TAXONOMY.length})
            </button>
            {TOPIC_CATEGORIES.map((cat) => {
              const count = SYLLABUS_TAXONOMY.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-semibold shadow-xs'
                      : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.nameEn} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Dynamic View Rendering: Tree vs Grid */}
        {viewMode === 'TREE' ? (
          <SyllabusTreeTracker />
        ) : (
          <div>
            {groupedByCluster.length === 0 ? (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-12 text-center space-y-3 shadow-xl">
                <span className="text-3xl">🔍</span>
                <h3 className="font-bold text-white text-base">No Topics Match Your Search</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try clearing the search query or changing your target exam and subject filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedExam('ALL');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {groupedByCluster.map(([clusterName, topics]) => (
                  <section key={clusterName} className="space-y-4">
                    {/* Cluster Section Header (High Contrast Crisp White Typography!) */}
                    <div className="flex items-center justify-between pt-4 pb-2 border-b border-slate-800/80">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-5 rounded-full bg-blue-500" />
                        <h2 className="text-lg font-bold text-white tracking-tight">
                          {clusterName}
                        </h2>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                          {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
                        </span>
                      </div>
                    </div>

                    {/* Topic Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {topics.map((t) => (
                        <TopicCard
                          key={t.slug}
                          topic={t}
                          mastery={getTopicMastery(t.slug)}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* 5. Cohesive Dark Slate Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-center py-6 text-xs text-slate-500">
        <p>
          Official Banking Examination CBT Portal &bull; Designed according to latest SBI &amp; IBPS TCS iON testing guidelines.
        </p>
      </footer>
    </div>
  );
}
