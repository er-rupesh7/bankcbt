// src/app/practice/page.tsx

'use client';

import React, { useState, useMemo } from 'react';
import { SYLLABUS_TAXONOMY, TOPIC_CATEGORIES } from '@/data/syllabusTaxonomy';
import { TopicCategory, SyllabusTopicConfig } from '@/types/topicPractice';
import { useTopicPracticeStore } from '@/store/useTopicPracticeStore';
import { PracticeHeader } from '@/components/practice/PracticeHeader';
import { TopicCard } from '@/components/practice/TopicCard';
import { SyllabusTreeTracker } from '@/components/practice/SyllabusTreeTracker';
import {
  Search,
  Filter,
  Award,
  Sparkles,
  BookOpen,
  Zap,
  TrendingUp,
  CheckCircle2,
  Layers,
  Network,
  LayoutGrid,
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
  const [viewMode, setViewMode] = useState<'TREE' | 'GRID'>('TREE');

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

  // Filter topics based on category, exam relevance, and search query
  const filteredTopics = useMemo(() => {
    return SYLLABUS_TAXONOMY.filter((topic) => {
      // Category filter
      if (selectedCategory !== 'ALL' && topic.category !== selectedCategory) {
        return false;
      }

      // Exam filter
      if (selectedExam !== 'ALL' && !topic.examRelevance.includes(selectedExam)) {
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
  }, [selectedCategory, selectedExam, searchQuery]);

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

  // Global Mastery Statistics
  const stats = useMemo(() => {
    const allTopics = SYLLABUS_TAXONOMY;
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
  }, [getTopicMastery, topicMasteryMap]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors">
      {/* 1. Header */}
      <PracticeHeader showBackToHub={false} />

      {/* 2. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 flex-1 w-full">
        {/* Overall Platform Mastery Banner */}
        <div className="bg-gradient-to-r from-[#0c2f54] via-[#0e3b64] to-[#12497d] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#ff9900] text-[#0e3b64] px-2.5 py-0.5 rounded">
                  Official Syllabus Engine
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-1 text-white">
                  Topic-Wise Concept Mastery &amp; Exam Drills
                </h2>
                <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-2xl leading-relaxed">
                  Master every single chapter of SBI PO, SBI Clerk, IBPS PO, and RRB exams. Study 20-second shortcuts, memorize formula sheets, and practice calibrated questions from Level 1 (Clerk Speed) to Level 3 (Mains Analysis).
                </p>
              </div>

              {/* Quick Stat Pill */}
              <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-3.5 flex items-center space-x-3 self-start md:self-auto shrink-0">
                <div className="w-10 h-10 rounded-lg bg-[#ff9900] text-[#0e3b64] flex items-center justify-center font-black text-xl">
                  🏆
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-200 block">
                    Exam Readiness
                  </span>
                  <span className="text-base sm:text-lg font-black text-white">
                    {stats.masteredCount} / {stats.totalTopics} Topics PO Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-center">
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Total Chapters</span>
                <span className="text-lg font-black text-white">{stats.totalTopics} Topics</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Concepts Read</span>
                <span className="text-lg font-black text-emerald-400">{stats.conceptsRead} Completed</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Questions Solved</span>
                <span className="text-lg font-black text-amber-300">{stats.totalAttempted} Qs</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                <span className="text-[11px] text-blue-200 block font-semibold">Average Accuracy</span>
                <span className="text-lg font-black text-white">{stats.accuracy}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Toggle: Interactive Tree Tracker vs Cards Grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-gray-900 p-2 rounded-xl border border-slate-200 dark:border-gray-800 shadow-xs">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={() => setViewMode('TREE')}
              className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'TREE'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Interactive Syllabus Tree</span>
              <span className="text-[10px] bg-amber-400 text-slate-900 font-black px-1.5 py-0.5 rounded-full uppercase">
                Arsenal
              </span>
            </button>

            <button
              onClick={() => setViewMode('GRID')}
              className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'GRID'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Topic Cards Grid</span>
            </button>
          </div>

          <div className="text-xs text-gray-500 dark:text-slate-400 px-2 font-medium hidden md:block">
            {viewMode === 'TREE'
              ? 'Hierarchical curriculum view with live progress rings & speed shortcuts'
              : 'Direct topic access cards with mastery badges & practice links'}
          </div>
        </div>

        {/* Dynamic View Rendering */}
        {viewMode === 'TREE' ? (
          <SyllabusTreeTracker />
        ) : (
          <>
            {/* 3. Filter Bar (Exam Pills & Subject Tabs) */}
            <div id="topics-grid" className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-4">
              {/* Target Exam Filter Pills */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Target Banking Examination:
                </span>
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
                  {TARGET_EXAMS.map((exam) => (
                    <button
                      key={exam.key}
                      onClick={() => setSelectedExam(exam.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                        selectedExam === exam.key
                          ? 'bg-[#0e3b64] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {exam.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Category Tabs & Search Bar */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-3 border-t border-gray-100">
                {/* Subject Tabs */}
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0">
                  <button
                    onClick={() => setSelectedCategory('ALL')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                      selectedCategory === 'ALL'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Subjects ({SYLLABUS_TAXONOMY.length})
                  </button>
                  {TOPIC_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.nameEn}</span>
                    </button>
                  ))}
                </div>

                {/* Keyword Search Input */}
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topic or formula..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
                  />
                </div>
              </div>
            </div>

            {/* 4. Grouped Topic Cards Grid */}
            {groupedByCluster.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl p-12 text-center space-y-3">
                <span className="text-3xl">🔍</span>
                <h3 className="font-bold text-gray-800 text-base">No Topics Match Your Search</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try clearing the search query or changing your target exam and subject filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedExam('ALL');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {groupedByCluster.map(([clusterName, topics]) => (
                  <section key={clusterName} className="space-y-3.5">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                      <Layers className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-black text-gray-900 tracking-tight">
                        {clusterName}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
                      </span>
                    </div>

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
          </>
        )}
      </main>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-gray-200 text-center py-4 text-xs text-gray-500 mt-12">
        <p>
          Official Banking Examination CBT Portal &bull; Designed according to latest SBI &amp; IBPS TCS iON testing guidelines.
        </p>
      </footer>
    </div>
  );
}
