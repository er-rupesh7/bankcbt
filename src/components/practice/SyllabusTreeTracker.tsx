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
  SyllabusClusterNode,
  SyllabusTopicNode,
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
  BookOpen,
  Filter,
  CheckCircle2,
  Layers,
  Sparkles,
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
} from 'lucide-react';

export const SyllabusTreeTracker: React.FC = () => {
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

  const currentSubject: SyllabusSubjectNode = useMemo(() => {
    return (
      OFFICIAL_SYLLABUS_TREE.syllabus.find((s) => s.id === activeSubjectId) ||
      OFFICIAL_SYLLABUS_TREE.syllabus[0]
    );
  }, [activeSubjectId]);

  const globalProgress = useMemo(() => getGlobalProgress(), [checkedItemIds, getGlobalProgress]);
  const subjectProgress = useMemo(
    () => getSubjectProgress(activeSubjectId),
    [checkedItemIds, activeSubjectId, getSubjectProgress]
  );

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
          if (activeFilter === 'PRELIMS' && topic.stageTag === 'MAINS') return false;
          if (activeFilter === 'MAINS' && topic.stageTag === 'PRELIMS') return false;

          const topicLeaves = getTopicLeafIds(topic);
          const topicProg = getLeafProgress(topicLeaves);
          if (activeFilter === 'UNCOMPLETED' && topicProg.percentage === 100) return false;

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
      {/* 1. Global Metrics & Circular Progress Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left Title & Status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Banking Exam Curriculum</span>
              <span className="text-white/40">•</span>
              <span>SBI • IBPS • RRB PO &amp; Clerk</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Syllabus &amp; Speed Arsenal Tree
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200/80 max-w-xl">
              Track your mastery across official banking syllabus chapters. Check off granular
              concepts and memorized speed shortcuts to monitor live exam readiness.
            </p>
          </div>

          {/* Right Circular Gauge & Global Numbers */}
          <div className="flex items-center space-x-5 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 backdrop-blur-xs">
            {/* SVG Circular Ring */}
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-white/10"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-amber-400 transition-all duration-700 ease-out"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-black text-white">{globalProgress.percentage}%</span>
              </div>
            </div>

            <div className="text-left space-y-0.5">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                Total Syllabus Mastered
              </span>
              <div className="text-base font-extrabold text-white">
                {globalProgress.completed}{' '}
                <span className="text-xs font-normal text-indigo-200">
                  / {globalProgress.total} Concepts Checked
                </span>
              </div>
              <span className="text-[10px] text-indigo-300/70 block">
                Auto-saved in local browser cache
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Subject Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center space-x-2 overflow-x-auto py-1 w-full sm:w-auto">
          {OFFICIAL_SYLLABUS_TREE.syllabus.map((subject) => {
            const isActive = subject.id === activeSubjectId;
            const subProg = getSubjectProgress(subject.id);

            return (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-indigo-500/20 shadow-md ring-2 ring-indigo-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span className="text-base">{subject.icon}</span>
                <span>{subject.name}</span>
                <span
                  className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {subProg.percentage}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Global Controls */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={expandAll}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 text-xs font-semibold"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Expand All</span>
          </button>
          <button
            onClick={collapseAll}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 text-xs font-semibold"
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
            className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 hover:bg-red-100 text-xs font-semibold"
            title="Reset All Checks"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* 3. Filter Bar & Search Input */}
      <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        {/* Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
            Filter:
          </span>
          {(['ALL', 'PRELIMS', 'MAINS', 'UNCOMPLETED'] as TreeFilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
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
            placeholder="Search topic, method or Vedic trick..."
            className="w-full pl-9 pr-8 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50 dark:text-white"
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
      <div className="bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-xs">
            {currentSubject.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {currentSubject.name} Mastery
            </h3>
            <span className="text-xs text-indigo-700 dark:text-indigo-300">
              {subjectProgress.completed} of {subjectProgress.total} items completed ({subjectProgress.percentage}%)
            </span>
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full sm:w-64 space-y-1">
          <div className="w-full bg-indigo-200 dark:bg-indigo-950 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${subjectProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5. Tree Canvas (Card-Accordion Hybrid) */}
      <div className="space-y-5">
        {filteredClusters.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 p-12 text-center rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl mx-auto">
              🔍
            </div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">
              No matching topics found
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              No topics matched your search &apos;{searchQuery}&apos; or filter &apos;{activeFilter}&apos;. Try clearing filters.
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
            const clusterState = getNodeCheckboxState(clusterLeaves);
            const clusterProgress = getLeafProgress(clusterLeaves);

            return (
              <div
                key={cluster.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all"
                style={{ borderLeftWidth: '6px', borderLeftColor: cluster.accentColor || '#4f46e5' }}
              >
                {/* Level 1: Cluster Header */}
                <div
                  onClick={() => toggleNodeExpanded(cluster.id)}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 transition select-none"
                >
                  <div className="flex items-center space-x-3.5">
                    {/* Tri-state Checkbox for entire cluster */}
                    <TriStateCheckbox
                      state={clusterState}
                      onChange={() => toggleParentNode(clusterLeaves)}
                      ariaLabel={`Check all in ${cluster.name}`}
                      size="md"
                    />

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                          {cluster.name}
                        </h3>
                        <span className="text-[11px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-semibold">
                          {cluster.topics.length} Topics
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                        Weightage: {cluster.weightage}
                      </span>
                    </div>
                  </div>

                  {/* Right Cluster Progress and Chevron */}
                  <div className="flex items-center space-x-4 self-end md:self-auto">
                    <div className="text-right">
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200 block">
                        {clusterProgress.percentage}% Mastered
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {clusterProgress.completed}/{clusterProgress.total} items
                      </span>
                    </div>

                    <div className="w-20 sm:w-28 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden hidden sm:block">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${clusterProgress.percentage}%` }}
                      />
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                      {isClusterExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Level 2: Topics Container */}
                {isClusterExpanded && (
                  <div className="border-t border-slate-100 dark:border-slate-700/60 p-4 sm:p-5 space-y-4 bg-slate-50/50 dark:bg-slate-850">
                    {cluster.topics.map((topic) => {
                      const isTopicExpanded = !!expandedNodeIds[topic.id];
                      const topicLeaves = getTopicLeafIds(topic);
                      const topicState = getNodeCheckboxState(topicLeaves);
                      const topicProgress = getLeafProgress(topicLeaves);
                      const practiceSlug = getTopicSlug(topic.id);

                      // Badge Color
                      const badgeClasses = {
                        'Prelims Core': 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border-blue-200',
                        'Mains Advanced': 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 border-purple-200',
                        'High Frequency': 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border-amber-200',
                        'Speed Drill': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-200',
                      }[topic.badgeTag || 'Prelims Core'];

                      return (
                        <div
                          key={topic.id}
                          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden transition-all"
                        >
                          {/* Topic Card Bar */}
                          <div
                            onClick={() => toggleNodeExpanded(topic.id)}
                            className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 select-none"
                          >
                            <div className="flex items-center space-x-3">
                              {/* Tri-state Checkbox for Topic */}
                              <TriStateCheckbox
                                state={topicState}
                                onChange={() => toggleParentNode(topicLeaves)}
                                ariaLabel={`Check all in ${topic.name}`}
                                size="md"
                              />

                              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                  {topic.name}
                                </h4>

                                {topic.badgeTag && (
                                  <span
                                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${badgeClasses}`}
                                  >
                                    {topic.badgeTag}
                                  </span>
                                )}

                                {topic.stageTag && (
                                  <span className="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-semibold">
                                    {topic.stageTag}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Right Controls */}
                            <div className="flex items-center space-x-3 self-end sm:self-auto">
                              {/* Topic Progress */}
                              <div className="text-right">
                                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                                  {topicProgress.percentage}%
                                </span>
                              </div>

                              <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                                <div
                                  className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${topicProgress.percentage}%` }}
                                />
                              </div>

                              {/* Link directly to Concept & Practice Arena */}
                              <Link
                                href={`/practice/${practiceSlug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 text-[11px] font-bold border border-indigo-200 dark:border-indigo-800 transition"
                                title="Open Practice Arena for this topic"
                              >
                                <span>Practice</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>

                              <div className="w-6 h-6 rounded flex items-center justify-center text-slate-400">
                                {isTopicExpanded ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Level 3 & Level 4: Nested Subtopics & Speed Arsenal */}
                          {isTopicExpanded && (
                            <div className="border-t border-slate-100 dark:border-slate-700/60 p-4 space-y-4 bg-slate-50/40 dark:bg-slate-900/40">
                              {/* Level 3: Sub-topics & Core Concepts */}
                              <div className="space-y-3 relative pl-4 sm:pl-6 border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-2 sm:ml-4">
                                {topic.subtopics.map((subtopic, subIdx) => {
                                  const subtopicLeafIds = subtopic.techniques.map(
                                    (_, techIdx) => `${topic.id}_sub_${subIdx}_tech_${techIdx}`
                                  );
                                  const subtopicState = getNodeCheckboxState(subtopicLeafIds);

                                  return (
                                    <div key={subtopic.id || subIdx} className="space-y-1.5">
                                      {/* Subtopic Header */}
                                      <div className="flex items-center space-x-2">
                                        <TriStateCheckbox
                                          state={subtopicState}
                                          onChange={() => toggleParentNode(subtopicLeafIds)}
                                          size="sm"
                                          ariaLabel={`Check ${subtopic.name}`}
                                        />
                                        <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                                          {subtopic.name}
                                        </h5>
                                      </div>

                                      {/* Specific Techniques Checklist */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 pl-6">
                                        {subtopic.techniques.map((tech, techIdx) => {
                                          const leafId = `${topic.id}_sub_${subIdx}_tech_${techIdx}`;
                                          const isChecked = !!checkedItemIds[leafId];

                                          return (
                                            <label
                                              key={techIdx}
                                              className={`flex items-center space-x-2 p-1.5 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                                                isChecked
                                                  ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-slate-500 dark:text-slate-400 line-through'
                                                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                                              }`}
                                            >
                                              <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => toggleLeafItem(leafId)}
                                                className="accent-indigo-600 w-3.5 h-3.5 rounded cursor-pointer shrink-0"
                                              />
                                              <span className="truncate">
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

                              {/* Level 4: Speed Arsenal Pill Box */}
                              {topic.speed_arsenal && topic.speed_arsenal.length > 0 && (
                                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-2.5">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2 text-amber-900 dark:text-amber-300">
                                      <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                                      <h6 className="text-xs font-black uppercase tracking-wider">
                                        ⚡ Speed &amp; Fast-Solving Arsenal
                                      </h6>
                                      <span className="text-[10px] bg-amber-200 dark:bg-amber-900/80 text-amber-900 dark:text-amber-200 font-bold px-2 py-0.5 rounded-full">
                                        {topic.speed_arsenal.length} Shortcuts
                                      </span>
                                    </div>
                                    <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                                      Hover for real exam example
                                    </span>
                                  </div>

                                  <div className="flex flex-wrap gap-2 pt-1">
                                    {topic.speed_arsenal.map((arsenalName, arsenalIdx) => {
                                      const arsenalLeafId = `${topic.id}_arsenal_${arsenalIdx}`;
                                      const isArsenalChecked = !!checkedItemIds[arsenalLeafId];
                                      const tooltipText =
                                        topic.speed_arsenal_tooltips?.[arsenalName] ||
                                        'Official banking exam speed calculation trick tested in SBI/IBPS/RRB PO & Clerk.';

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
