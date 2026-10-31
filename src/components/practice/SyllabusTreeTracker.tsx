// src/components/practice/SyllabusTreeTracker.tsx

'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import {
  useSyllabusTreeStore,
  getTopicLeafIds,
  getAllSubjectLeafIds,
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
  RotateCcw,
  Maximize2,
  Minimize2,
  BookOpen,
  HelpCircle,
  FileText,
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
  } = useSyllabusTreeStore();

  const effectiveSubjectId = mounted ? activeSubjectId : 'quant';
  const effectiveFilter = mounted ? activeFilter : 'ALL';

  const currentSubject: SyllabusSubjectNode = useMemo(() => {
    return (
      OFFICIAL_SYLLABUS_TREE.syllabus.find((s) => s.id === effectiveSubjectId) ||
      OFFICIAL_SYLLABUS_TREE.syllabus[0]
    );
  }, [effectiveSubjectId]);

  const subjectProgress = useMemo(() => {
    if (!mounted) {
      const leafCount = getAllSubjectLeafIds(effectiveSubjectId).length;
      return { completed: 0, total: leafCount || 35, percentage: 0 };
    }
    return getSubjectProgress(effectiveSubjectId);
  }, [mounted, checkedItemIds, effectiveSubjectId, getSubjectProgress]);

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
  }, [currentSubject, effectiveFilter, searchQuery, mounted, getLeafProgress]);

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
      {/* 1. Subject Navigation Control Bar & Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        {/* Subject Tabs */}
        <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 inline-flex flex-wrap gap-1.5 w-full sm:w-auto">
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
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 font-medium'
                }`}
              >
                <span>{subject.icon}</span>
                <span>{subject.name}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-400'
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
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs font-semibold shadow-xs cursor-pointer transition"
          >
            <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Expand All</span>
          </button>
          <button
            onClick={collapseAll}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 text-xs font-semibold shadow-xs cursor-pointer transition"
          >
            <Minimize2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Collapse All</span>
          </button>
          <button
            onClick={() => {
              if (window.confirm('Reset all checked items in your syllabus tracker?')) {
                resetAllProgress();
              }
            }}
            className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-red-950/40 border border-red-900/60 text-red-400 hover:bg-red-900/60 text-xs font-semibold cursor-pointer transition"
            title="Reset All Checks"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* 2. Active Subject Mastery Overview Bar */}
      <div className="bg-slate-900/90 border border-blue-500/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold shadow-xs">
            {currentSubject.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {currentSubject.name} Mastery
              </h3>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                {currentSubject.clusters.length} Clusters
              </span>
            </div>
            <span
              className="text-xs text-slate-400 font-medium block mt-0.5"
              suppressHydrationWarning
            >
              {subjectProgress.completed} of {subjectProgress.total} sub-concepts mastered ({subjectProgress.percentage}%)
            </span>
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full sm:w-72 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>Subject Completion</span>
            <span className="text-white font-bold" suppressHydrationWarning>
              {subjectProgress.percentage}%
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${subjectProgress.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Filter Controls & Search Bar */}
      <div className="bg-slate-900/90 p-3 sm:p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        {/* Stage Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
            Stage:
          </span>
          {(['ALL', 'PRELIMS', 'MAINS', 'UNCOMPLETED'] as TreeFilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {f === 'ALL'
                ? 'All Stages'
                : f === 'PRELIMS'
                ? 'Prelims Only'
                : f === 'MAINS'
                ? 'Mains Only'
                : 'Uncompleted'}
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
            className="w-full pl-9 pr-8 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500"
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

      {/* 4. Tree Canvas: Hierarchical Syllabus Tree */}
      <div className="space-y-5">
        {filteredClusters.length === 0 ? (
          <div className="bg-slate-900/90 p-12 text-center rounded-2xl border border-slate-800 space-y-3 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl mx-auto text-slate-400">
              🔍
            </div>
            <h4 className="text-base font-bold text-white">
              No matching topics found
            </h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No topics matched &apos;{searchQuery}&apos; with current stage filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('ALL');
              }}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-500 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredClusters.map((cluster, clusterIdx) => {
            // Default expanded state: all clusters open by default
            const isClusterExpanded = expandedNodeIds[cluster.id] !== false;
            const clusterLeaves = cluster.topics.flatMap((t) => getTopicLeafIds(t));
            const clusterState = mounted ? getNodeCheckboxState(clusterLeaves) : 'UNCHECKED';
            const clusterProgress = mounted
              ? getLeafProgress(clusterLeaves)
              : { completed: 0, total: clusterLeaves.length, percentage: 0 };

            return (
              <div
                key={cluster.id}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl overflow-hidden transition-all"
                style={{ borderLeftWidth: '4px', borderLeftColor: cluster.accentColor || '#3b82f6' }}
              >
                {/* Level 1: Cluster Header (High Contrast Crisp Typography) */}
                <div
                  onClick={() => toggleNodeExpanded(cluster.id)}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/50 transition select-none"
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
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {cluster.name}
                        </h3>
                        <span className="text-[11px] bg-slate-800 text-blue-400 border border-slate-700 px-2 py-0.5 rounded-full font-semibold">
                          {cluster.topics.length} Chapters
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 mt-0.5 block font-normal">
                        Weightage: {cluster.weightage}
                      </span>
                    </div>
                  </div>

                  {/* Right Progress Gauge & Chevron */}
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/25"
                        suppressHydrationWarning
                      >
                        {clusterProgress.percentage}% Mastered
                      </span>
                      <span
                        className="text-[11px] text-slate-400 hidden sm:inline"
                        suppressHydrationWarning
                      >
                        ({clusterProgress.completed}/{clusterProgress.total})
                      </span>
                    </div>

                    <div className="w-20 sm:w-28 bg-slate-800 rounded-full h-2 overflow-hidden hidden sm:block border border-slate-700">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${clusterProgress.percentage}%` }}
                      />
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition">
                      {isClusterExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Level 2: Topic Rows Container */}
                {isClusterExpanded && (
                  <div className="border-t border-slate-800/80 p-3 sm:p-5 space-y-3.5 bg-slate-950/60">
                    {cluster.topics.map((topic, topicIdx) => {
                      // By default, open the first topic of each cluster so tree is never empty
                      const isTopicExpanded =
                        expandedNodeIds[topic.id] !== undefined
                          ? expandedNodeIds[topic.id]
                          : (clusterIdx === 0 && topicIdx === 0);

                      const topicLeaves = getTopicLeafIds(topic);
                      const topicState = mounted ? getNodeCheckboxState(topicLeaves) : 'UNCHECKED';
                      const topicProgress = mounted
                        ? getLeafProgress(topicLeaves)
                        : { completed: 0, total: topicLeaves.length, percentage: 0 };
                      const practiceSlug = getTopicSlug(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className="border border-slate-800 bg-slate-900/90 rounded-xl overflow-hidden shadow-lg transition-all hover:border-slate-700 ml-0 sm:ml-4"
                        >
                          {/* Level 2: Topic Row Header */}
                          <div
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 cursor-pointer select-none hover:bg-slate-800/50 transition-colors gap-3"
                            onClick={() => toggleNodeExpanded(topic.id)}
                          >
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
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
                                <span className="text-sm md:text-base font-bold text-white block">
                                  {topic.name}
                                </span>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                  {topic.stageTag === 'PRELIMS' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-blue-500/15 text-blue-400 border border-blue-500/30">
                                      Prelims Core
                                    </span>
                                  )}
                                  {topic.stageTag === 'MAINS' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30">
                                      Mains Advanced
                                    </span>
                                  )}
                                  {topic.badgeTag && topic.badgeTag !== 'Prelims Core' && topic.badgeTag !== 'Mains Advanced' && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                      {topic.badgeTag}
                                    </span>
                                  )}
                                  <span className="text-xs text-slate-400 font-normal">
                                    Weightage: {topic.weightageTag || cluster.weightage}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons & Status */}
                            <div
                              className="flex items-center gap-3 self-end sm:self-auto shrink-0"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="hidden md:flex flex-col items-end">
                                <span
                                  className="text-xs font-semibold text-slate-300"
                                  suppressHydrationWarning
                                >
                                  {topicProgress.percentage}% Mastered
                                </span>
                                <div className="w-16 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden border border-slate-700">
                                  <div
                                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                    style={{ width: `${topicProgress.percentage}%` }}
                                  />
                                </div>
                              </div>

                              {/* Two Quick Links */}
                              <Link
                                href={`/practice/${practiceSlug}?tab=concept`}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                              >
                                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                                <span>Concept &amp; Notes</span>
                              </Link>

                              <Link
                                href={`/practice/${practiceSlug}?tab=practice`}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-600/20"
                              >
                                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                                <span>Solve 10 Qs</span>
                              </Link>
                            </div>
                          </div>

                          {/* Expanded Tree Content: Real Hierarchy Tree Lines + Speed Arsenal */}
                          {isTopicExpanded && (
                            <div className="px-4 sm:px-6 pb-5 pt-3 bg-slate-950/80 border-t border-slate-800/80 space-y-4">
                              {/* Level 3: Subtopic Tree Guide Lines (Real Tree Hierarchy) */}
                              <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 pl-4 space-y-4">
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
                                      className="relative before:absolute before:-left-4 before:top-3 before:w-3 before:h-px before:bg-slate-700 space-y-2"
                                    >
                                      {/* Subtopic Header */}
                                      <div className="flex items-center gap-2">
                                        <TriStateCheckbox
                                          state={subtopicState}
                                          onChange={() => toggleParentNode(subtopicLeafIds)}
                                          size="sm"
                                          ariaLabel={`Check ${sub.name}`}
                                        />
                                        <span className="text-xs md:text-sm font-semibold text-slate-200">
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
                                                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300 line-through'
                                                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500/50'
                                              }`}
                                            >
                                              <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => toggleLeafItem(leafId)}
                                                className="h-3 w-3 rounded text-blue-600 border-slate-700 bg-slate-950 focus:ring-0 cursor-pointer"
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
                                <div className="mt-5 rounded-xl border border-amber-800/40 bg-gradient-to-r from-amber-950/30 to-orange-950/20 p-3.5 sm:p-4">
                                  <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                                      <Zap className="fill-amber-400 text-amber-400 w-3.5 h-3.5" />
                                      <span>⚡ SPEED &amp; TRICK ARSENAL</span>
                                      <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-amber-900/60 text-amber-300 font-extrabold border border-amber-800">
                                        {topic.speed_arsenal.length} Shortcuts
                                      </span>
                                    </div>
                                    <span className="text-[11px] text-amber-400/80 flex items-center gap-1 font-medium">
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
