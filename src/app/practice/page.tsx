// src/app/practice/page.tsx

'use client';

import React, { useState, useMemo } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';
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
  const mounted = useIsMounted();

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
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans flex flex-col justify-between selection:bg-[#0B4F8A] selection:text-white relative overflow-x-hidden">
      {/* 1. Official Sticky Header Navbar */}
      <PracticeHeader showBackToHub={false} />

      {/* 2. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-6 flex-1 w-full relative z-10">
        
        {/* Single Compact Formal Official Hero Banner (Bug C Fix) */}
        <div
          className="rounded-2xl bg-[#0A2F5C] text-white border-b-[3px] border-[#F59E0B] p-5 sm:p-7 shadow-lg relative overflow-hidden"
          style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
        >
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left Column: Title & Mission */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F59E0B]/20 text-amber-300 border border-[#F59E0B]/40">
                  <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>OFFICIAL TCS iON SYLLABUS ENGINE</span>
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  Topic-Wise Concept Mastery &amp; Speed Drills
                </h2>
                <p className="text-xs sm:text-sm text-blue-200 max-w-2xl leading-relaxed">
                  Master every single chapter of SBI PO, SBI Clerk, IBPS PO, and RRB exams. Study 20-second shortcuts, memorize formula sheets, and practice calibrated drills from Level 1 (Clerk Speed) to Level 3 (Mains Analysis).
                </p>
              </div>

              {/* Right Column: Unified Readiness Widget */}
              <div
                className="bg-[#06203D] border border-blue-400/30 rounded-xl p-4 flex items-center gap-5 shrink-0 shadow-md self-start lg:self-auto"
                style={{ backgroundColor: '#06203D' }}
              >
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
                      className="text-[#F59E0B] transition-all duration-700 ease-out"
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                      Topics PO Ready
                    </span>
                    <span
                      className="text-base font-extrabold text-white block"
                      suppressHydrationWarning
                    >
                      {mounted ? stats.masteredCount : 0}{' '}
                      <span className="text-xs text-blue-300 font-semibold">
                        / {stats.totalTopics} Chapters
                      </span>
                    </span>
                  </div>
                  <div className="pt-1 border-t border-blue-900/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      Curriculum Granular Mastery
                    </span>
                    <span
                      className="text-xs font-bold text-slate-200"
                      suppressHydrationWarning
                    >
                      {mounted ? globalTreeProgress.completed : 0} / {globalTreeProgress.total} Sub-Concepts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Compact KPI Stat Boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-5 border-t border-blue-900/60 text-center">
              <div
                className="bg-[#06203D] border border-blue-400/20 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#06203D' }}
              >
                <span className="text-[11px] text-blue-200 block font-semibold">Total Chapters</span>
                <span className="text-lg font-black text-white">{stats.totalTopics} Topics</span>
              </div>
              <div
                className="bg-[#06203D] border border-blue-400/20 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#06203D' }}
              >
                <span className="text-[11px] text-blue-200 block font-semibold">Concepts Read</span>
                <span
                  className="text-lg font-black text-emerald-400"
                  suppressHydrationWarning
                >
                  {stats.conceptsRead} Completed
                </span>
              </div>
              <div
                className="bg-[#06203D] border border-blue-400/20 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#06203D' }}
              >
                <span className="text-[11px] text-blue-200 block font-semibold">Questions Solved</span>
                <span
                  className="text-lg font-black text-amber-300"
                  suppressHydrationWarning
                >
                  {stats.totalAttempted} Qs
                </span>
              </div>
              <div
                className="bg-[#06203D] border border-blue-400/20 rounded-xl px-4 py-3"
                style={{ backgroundColor: '#06203D' }}
              >
                <span className="text-[11px] text-blue-200 block font-semibold">Average Accuracy</span>
                <span
                  className="text-lg font-black text-cyan-300"
                  suppressHydrationWarning
                >
                  {stats.accuracy}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Official View Switcher & Filter Control Bar */}
        <div id="topics-grid" className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
          {/* Row 1: View Mode Segmented Control + Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* View Mode Segmented Bar */}
            <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 inline-flex flex-1 sm:flex-none">
              <button
                onClick={() => setViewMode('GRID')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'GRID'
                    ? 'bg-[#0B4F8A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Topic Cards Grid</span>
              </button>

              <button
                onClick={() => setViewMode('TREE')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'TREE'
                    ? 'bg-[#0B4F8A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#0B4F8A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Target Banking Examination Filter (Responsive horizontal scroll) */}
          <div className="space-y-1.5 pt-2 border-t border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Target Banking Examination:
            </span>
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
              {TARGET_EXAMS.map((exam) => (
                <button
                  key={exam.key}
                  onClick={() => setSelectedExam(exam.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    activeExam === exam.key
                      ? 'bg-[#0B4F8A] text-white border border-[#0B4F8A] shadow-xs'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {exam.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Subject Category Tabs (Responsive horizontal scroll) */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-slate-200 pb-1">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeCategory === 'ALL'
                  ? 'bg-blue-50 text-[#0B4F8A] border border-blue-300 font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
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
                      ? 'bg-blue-50 text-[#0B4F8A] border border-blue-300 font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
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
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-3 shadow-xs">
                <span className="text-3xl">🔍</span>
                <h3 className="font-bold text-slate-900 text-base">No Topics Match Your Search</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing the search query or changing your target exam and subject filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedExam('ALL');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-[#0B4F8A] hover:bg-[#083D6B] text-white rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {groupedByCluster.map(([clusterName, topics]) => (
                  <section key={clusterName} className="space-y-4">
                    {/* Cluster Section Header (High Contrast Official Light Typography) */}
                    <div className="flex items-center justify-between pt-4 pb-2 border-b border-slate-300">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-5 rounded-full bg-[#0B4F8A]" />
                        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                          {clusterName}
                        </h2>
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-[#0B4F8A] border border-blue-200">
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

      {/* 5. Official Light Footer */}
      <footer className="bg-white border-t border-slate-200 text-center py-6 text-xs text-slate-500">
        <p>
          Official Banking Examination CBT Portal &bull; Designed according to latest SBI &amp; IBPS TCS iON testing guidelines.
        </p>
      </footer>
    </div>
  );
}
