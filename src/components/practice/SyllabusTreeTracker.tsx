// src/components/practice/SyllabusTreeTracker.tsx

'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import {
  useSyllabusTreeStore,
  getTopicLeafIds,
} from '@/store/useSyllabusTreeStore';
import { OFFICIAL_SYLLABUS_TREE } from '@/data/syllabusTreeData';
import {
  SyllabusSubjectNode,
  TreeFilterType,
} from '@/types/syllabusTree';
import { TriStateCheckbox } from './TriStateCheckbox';
import { SpeedArsenalPill } from './SpeedArsenalPill';
import { MathText } from '@/components/common/MathText';
import {
  ChevronRight,
  ChevronDown,
  Search,
  X,
  Zap,
  Sparkles,
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';

export const SyllabusTreeTracker: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const {
    checkedItemIds,
    expandedNodeIds,
    activeSubjectId,
    activeFilter,
    searchQuery,
    toggleNodeExpanded,
    expandAll,
    collapseAll,
    toggleLeafItem,
    toggleParentNode,
    setActiveSubject,
    setActiveFilter,
    setSearchQuery,
    resetAllProgress,
    getNodeCheckboxState,
    getLeafProgress,
    getSubjectProgress,
    getGlobalProgress,
  } = useSyllabusTreeStore();

  const effectiveSubjectId = mounted ? activeSubjectId : 'quant';
  const effectiveFilter = mounted ? activeFilter : 'ALL';

  const currentSubject: SyllabusSubjectNode = useMemo(() => {
    return (
      OFFICIAL_SYLLABUS_TREE.syllabus.find((s) => s.id === effectiveSubjectId) ||
      OFFICIAL_SYLLABUS_TREE.syllabus[0]
    );
  }, [effectiveSubjectId]);

  const globalProgress = useMemo(() => {
    if (!mounted) return { completed: 0, total: 119, percentage: 0 };
    return getGlobalProgress();
  }, [mounted, checkedItemIds, getGlobalProgress]);

  const subjectProgress = useMemo(() => {
    if (!mounted) {
      return { completed: 0, total: 35, percentage: 0 };
    }
    return getSubjectProgress(effectiveSubjectId);
  }, [mounted, checkedItemIds, effectiveSubjectId, getSubjectProgress]);

  // SVG Circular progress math
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (globalProgress.percentage / 100) * circumference;

  // Filter and search topics
  const filteredClusters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return currentSubject.clusters
      .map((cluster) => {
        const matchingTopics = cluster.topics.filter((topic) => {
          // Stage filter
          if (effectiveFilter === 'PRELIMS' && topic.stageTag === 'MAINS') return false;
          if (effectiveFilter === 'MAINS' && topic.stageTag === 'PRELIMS') return false;

          const topicLeaves = getTopicLeafIds(topic);
          const topicProg = mounted ? getLeafProgress(topicLeaves) : { percentage: 0 };
          if (effectiveFilter === 'UNCOMPLETED' && topicProg.percentage === 100) return false;

          // Search query filter
          if (q) {
            const matchTopicName = topic.name.toLowerCase().includes(q);
            const matchSubtopics = topic.subtopics.some(
              (s) =>
                s.name.toLowerCase().includes(q) ||
                s.techniques.some((t) => t.toLowerCase().includes(q))
            );
            const matchArsenal = topic.speed_arsenal.some((a) => a.toLowerCase().includes(q));
            if (!matchTopicName && !matchSubtopics && !matchArsenal) return false;
          }

          return true;
        });

        return {
          ...cluster,
          topics: matchingTopics,
        };
      })
      .filter((cluster) => cluster.topics.length > 0);
  }, [currentSubject, activeFilter, searchQuery, getLeafProgress]);

  // Topic Slug Mapper to link directly to practice arena
  const getTopicSlug = (topicId: string): string => {
    const mapping: Record<string, string> = {
      topic_simplification_approx: 'simplification-approximation',
      topic_number_series: 'missing-number-series',
      topic_quadratic_equations: 'quadratic-equations',
      topic_percentages_pl: 'profit-loss-discount',
      topic_ratio_partnership: 'ratio-proportion-partnership',
      topic_time_work_pipes: 'time-work-pipes',
      topic_tsd_trains_boats: 'time-speed-distance',
      topic_sici: 'simple-compound-interest',
      topic_mixtures: 'mixture-alligation',
      topic_basic_di: 'tabular-bar-line-pie-di',
      topic_advanced_di: 'caselet-di',
      topic_data_sufficiency: 'quantity-comparison-data-sufficiency',
      topic_seating: 'circular-polygon-seating',
      topic_puzzles_matrix: 'floor-flat-puzzles',
      topic_syllogism: 'syllogism',
      topic_inequalities: 'inequalities',
      topic_blood_direction: 'blood-relations',
      topic_coding_series: 'coding-decoding',
      topic_rc: 'reading-comprehension',
      topic_cloze_parajumble: 'cloze-test',
      topic_error_detection: 'error-spotting',
      topic_vocab_usage: 'word-swap-usage',
      topic_rbi_monetary: 'rbi-monetary-policy',
      topic_fintech_payments: 'digital-banking-npci',
    };
    return mapping[topicId] || 'simplification-approximation';
  };

  return (
    <div className="space-y-6">
      {/* 1. Global Metrics & Circular Progress Banner (Surface Level 1: Elevated Clean FinTech Card) */}
      <div className="bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-gray-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left Title & Status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Official Banking Exam Curriculum</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span>SBI • IBPS • RRB PO &amp; Clerk</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Interactive Syllabus Tree &amp; Speed Arsenal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Track granular chapter mastery across SBI, IBPS, and RRB. Check off individual concepts and
              fast-solving shortcuts to monitor your live exam readiness.
            </p>
          </div>

          {/* Right Circular Gauge & Global Numbers */}
          <div className="flex items-center space-x-5 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 shadow-2xs">
            {/* SVG Circular Ring */}
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-slate-200 dark:text-slate-700"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-indigo-600 dark:text-indigo-400 transition-all duration-700 ease-out"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span
                  className="text-sm font-black text-slate-900 dark:text-white"
                  suppressHydrationWarning
                >
                  {globalProgress.percentage}%
                </span>
              </div>
            </div>

            <div className="text-left space-y-0.5">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                Total Syllabus Mastered
              </span>
              <div
                className="text-base font-extrabold text-slate-900 dark:text-white"
                suppressHydrationWarning
              >
                {globalProgress.completed}{' '}
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  / {globalProgress.total} Concepts
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">
                Auto-saved in local browser cache
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Modern Segmented Control Bar (Subject Navigation) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-gray-800 pb-3">
        {/* Segmented Subject Navigation Bar */}
        <div className="bg-slate-100 dark:bg-gray-800/90 p-1 rounded-xl border border-slate-200 dark:border-gray-700 inline-flex flex-wrap gap-1.5 w-full sm:w-auto">
          {OFFICIAL_SYLLABUS_TREE.syllabus.map((subject) => {
            const isActive = subject.id === effectiveSubjectId;
            const subProg = mounted
              ? getSubjectProgress(subject.id)
              : { completed: 0, total: 35, percentage: 0 };

            return (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer select-none ${
                  isActive
                    ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs border border-slate-200 dark:border-gray-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-gray-700 font-medium'
                }`}
              >
                <span>{subject.icon}</span>
                <span>{subject.name}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      : 'bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-slate-300'
                  }`}
                  suppressHydrationWarning
                >
                  {subProg.completed}/{subProg.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Global Expand & Reset Controls */}
        <div className="flex items-center space-x-2 text-xs self-end sm:self-auto">
          <button
            onClick={expandAll}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 text-xs font-semibold shadow-2xs cursor-pointer transition"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Expand All</span>
          </button>
          <button
            onClick={collapseAll}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 text-xs font-semibold shadow-2xs cursor-pointer transition"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Collapse All</span>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Reset all checked items in your syllabus tracker?')) {
                resetAllProgress();
              }
            }}
            className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/60 text-xs font-semibold cursor-pointer transition"
            title="Reset All Checks"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* 3. Filter Controls & Search Bar */}
      <div className="bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        {/* Stage Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
            Filter:
          </span>
          {(['ALL', 'PRELIMS', 'MAINS', 'UNCOMPLETED'] as TreeFilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700'
              }`}
            >
              {f === 'ALL'
                ? 'All Topics'
                : f === 'PRELIMS'
                ? 'Prelims Only'
                : f === 'MAINS'
                ? 'Mains Only'
                : 'Uncompleted Only'}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic or speed trick..."
            className="w-full pl-9 pr-8 py-1.5 bg-slate-50 dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50"
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

      {/* 4. Active Subject Progress Overview Bar */}
      <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-xs">
            {currentSubject.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {currentSubject.name} Mastery
            </h3>
            <span className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">
              {subjectProgress.completed} of {subjectProgress.total} concepts completed ({subjectProgress.percentage}%)
            </span>
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full sm:w-64 space-y-1">
          <div className="w-full bg-slate-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${subjectProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5. Tree Canvas: Hierarchical Syllabus Tree */}
      <div className="space-y-5">
        {filteredClusters.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 p-12 text-center rounded-2xl border border-slate-200 dark:border-gray-800 space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-2xl mx-auto">
              🔍
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              No matching topics found
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              No topics matched &apos;{searchQuery}&apos; with &apos;{activeFilter}&apos;. Try clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('ALL');
              }}
              className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredClusters.map((cluster) => {
            const isClusterExpanded = expandedNodeIds[cluster.id] !== false; // default open
            const clusterLeaves = cluster.topics.flatMap((t) => getTopicLeafIds(t));
            const clusterState = mounted ? getNodeCheckboxState(clusterLeaves) : 'UNCHECKED';
            const clusterProgress = mounted
              ? getLeafProgress(clusterLeaves)
              : { completed: 0, total: clusterLeaves.length, percentage: 0 };

            return (
              <div
                key={cluster.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm overflow-hidden transition-all"
                style={{ borderLeftWidth: '4px', borderLeftColor: cluster.accentColor || '#4f46e5' }}
              >
                {/* Level 1: Cluster Header (High Contrast Crisp Typography) */}
                <div
                  onClick={() => toggleNodeExpanded(cluster.id)}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-800/60 transition select-none"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Tri-state Checkbox for cluster */}
                    <TriStateCheckbox
                      state={clusterState}
                      onChange={() => toggleParentNode(clusterLeaves)}
                      ariaLabel={`Check all in ${cluster.name}`}
                      size="md"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {cluster.name}
                        </h3>
                        <span className="text-[11px] bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-gray-700 px-2 py-0.5 rounded-full font-semibold">
                          {cluster.topics.length} Topics
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block font-normal">
                        Weightage: {cluster.weightage}
                      </span>
                    </div>
                  </div>

                  {/* Right Progress Gauge & Chevron */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800"
                        suppressHydrationWarning
                      >
                        {clusterProgress.percentage}% Mastered
                      </span>
                      <span
                        className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline"
                        suppressHydrationWarning
                      >
                        ({clusterProgress.completed}/{clusterProgress.total})
                      </span>
                    </div>

                    <div className="w-20 sm:w-28 bg-slate-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden hidden sm:block border border-slate-200/60 dark:border-gray-700">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${clusterProgress.percentage}%` }}
                      />
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
                      {isClusterExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Level 2: Topic Rows Container (Surface Level 2: Slate 100 / Gray 800) */}
                {isClusterExpanded && (
                  <div className="border-t border-slate-100 dark:border-gray-800/80 p-3 sm:p-5 space-y-3.5 bg-slate-50/70 dark:bg-gray-950/60">
                    {cluster.topics.map((topic) => {
                      const isTopicExpanded = !!expandedNodeIds[topic.id];
                      const topicLeaves = getTopicLeafIds(topic);
                      const topicState = mounted ? getNodeCheckboxState(topicLeaves) : 'UNCHECKED';
                      const topicProgress = mounted
                        ? getLeafProgress(topicLeaves)
                        : { completed: 0, total: topicLeaves.length, percentage: 0 };
                      const practiceSlug = getTopicSlug(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className="border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xs transition-all hover:border-slate-300 dark:hover:border-gray-700 ml-0 sm:ml-4"
                        >
                          {/* Level 2: Topic Row Header */}
                          <div
                            className="flex items-center justify-between p-3.5 sm:p-4 cursor-pointer select-none hover:bg-slate-50/80 dark:hover:bg-gray-800/50 transition-colors"
                            onClick={() => toggleNodeExpanded(topic.id)}
                          >
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-800 transition cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleNodeExpanded(topic.id);
                                }}
                              >
                                {isTopicExpanded ? (
                                  <ChevronDown size={18} />
                                ) : (
                                  <ChevronRight size={18} />
                                )}
                              </button>

                              {/* Tri-state Checkbox for Topic */}
                              <TriStateCheckbox
                                state={topicState}
                                onChange={() => toggleParentNode(topicLeaves)}
                                ariaLabel={`Check all in ${topic.name}`}
                                size="md"
                              />

                              <div>
                                <span className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 block">
                                  {topic.name}
                                </span>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                  {topic.stageTag === 'PRELIMS' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                                      Prelims Core
                                    </span>
                                  )}
                                  {topic.stageTag === 'MAINS' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-900">
                                      Mains Advanced
                                    </span>
                                  )}
                                  {topic.badgeTag && topic.badgeTag !== 'Prelims Core' && topic.badgeTag !== 'Mains Advanced' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                      {topic.badgeTag}
                                    </span>
                                  )}
                                  <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                                    Weightage: {topic.weightageTag || cluster.weightage}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Action & Status */}
                            <div
                              className="flex items-center gap-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="hidden sm:flex flex-col items-end">
                                <span
                                  className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                                  suppressHydrationWarning
                                >
                                  {topicProgress.percentage}% Mastered
                                </span>
                                <div className="w-16 h-1.5 bg-slate-100 dark:bg-gray-800 rounded-full mt-1 overflow-hidden border border-slate-200/60 dark:border-gray-700">
                                  <div
                                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                                    style={{ width: `${topicProgress.percentage}%` }}
                                  />
                                </div>
                              </div>

                              <Link
                                href={`/practice/${practiceSlug}`}
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-lg transition-colors border border-indigo-200 dark:border-indigo-900"
                              >
                                <span>Practice Drill</span>
                                <ExternalLink size={12} />
                              </Link>
                            </div>
                          </div>

                          {/* Expanded Tree Content: Real Hierarchy Tree Lines + Speed Arsenal */}
                          {isTopicExpanded && (
                            <div className="px-4 sm:px-6 pb-5 pt-3 bg-slate-50/50 dark:bg-gray-900/50 border-t border-slate-100 dark:border-gray-800/80 space-y-4">
                              {/* Level 3: Subtopic Tree Guide Lines (Real Tree Hierarchy) */}
                              <div className="relative border-l-2 border-slate-200 dark:border-gray-700 ml-3 sm:ml-6 pl-4 space-y-4">
                                {topic.subtopics.map((sub, subIdx) => {
                                  const subtopicLeafIds = sub.techniques.map(
                                    (_, techIdx) => `${topic.id}_sub_${subIdx}_tech_${techIdx}`
                                  );
                                  const subtopicState = mounted
                                    ? getNodeCheckboxState(subtopicLeafIds)
                                    : 'UNCHECKED';

                                  return (
                                    <div
                                      key={sub.id || subIdx}
                                      className="relative before:absolute before:-left-4 before:top-3 before:w-3 before:h-px before:bg-slate-300 dark:before:bg-gray-600 space-y-2"
                                    >
                                      {/* Subtopic Header */}
                                      <div className="flex items-center gap-2">
                                        <TriStateCheckbox
                                          state={subtopicState}
                                          onChange={() => toggleParentNode(subtopicLeafIds)}
                                          size="sm"
                                          ariaLabel={`Check ${sub.name}`}
                                        />
                                        <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                          {sub.name}
                                        </span>
                                      </div>

                                      {/* Specific Techniques Micro-Bullets */}
                                      <div className="ml-6 flex flex-wrap gap-2">
                                        {sub.techniques.map((tech, techIdx) => {
                                          const leafId = `${topic.id}_sub_${subIdx}_tech_${techIdx}`;
                                          const isChecked = mounted ? !!checkedItemIds[leafId] : false;

                                          return (
                                            <label
                                              key={techIdx}
                                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border cursor-pointer select-none transition-all ${
                                                isChecked
                                                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 line-through'
                                                  : 'bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                                              }`}
                                            >
                                              <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => toggleLeafItem(leafId)}
                                                className="h-3 w-3 rounded text-indigo-600 border-slate-300 focus:ring-0 cursor-pointer"
                                              />
                                              <span>
                                                <MathText text={tech} />
                                              </span>
                                            </label>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Level 4: Speed & Fast-Solving Arsenal Power-Up Box */}
                              {topic.speed_arsenal?.length > 0 && (
                                <div className="mt-5 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 p-3.5 sm:p-4">
                                  <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                                      <Zap className="fill-amber-500 text-amber-500 w-3.5 h-3.5" />
                                      <span>⚡ SPEED &amp; TRICK ARSENAL</span>
                                      <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 font-extrabold border border-amber-200 dark:border-amber-800">
                                        {topic.speed_arsenal.length} Shortcuts
                                      </span>
                                    </div>
                                    <span className="text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1 font-medium">
                                      <HelpCircle className="w-3 h-3" />
                                      <span>Hover chip for 10-second exam trick</span>
                                    </span>
                                  </div>

                                  <div className="flex flex-wrap gap-2 pt-1">
                                    {topic.speed_arsenal.map((arsenalName, arsenalIdx) => {
                                      const arsenalLeafId = `${topic.id}_arsenal_${arsenalIdx}`;
                                      const isArsenalChecked = mounted
                                        ? !!checkedItemIds[arsenalLeafId]
                                        : false;
                                      const tooltipText =
                                        topic.speed_arsenal_tooltips?.[arsenalName] ||
                                        'Official banking exam speed shortcut tested in SBI/IBPS/RRB PO & Clerk.';

                                      return (
                                        <SpeedArsenalPill
                                          key={arsenalIdx}
                                          id={arsenalLeafId}
                                          name={arsenalName}
                                          tooltipExample={tooltipText}
                                          isChecked={isArsenalChecked}
                                          onToggle={() => toggleLeafItem(arsenalLeafId)}
                                        />
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
