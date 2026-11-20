'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LMSCourse } from '@/types/bpscLms';
import { useBPSCLmsStore } from '@/store/useBPSCLmsStore';
import { useIsMounted } from '@/hooks/useIsMounted';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  AlertTriangle,
  RotateCcw,
  Bookmark,
  Search,
  Sparkles,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  Shield,
  MapPin,
  Languages,
  Play
} from 'lucide-react';

interface BPSCLmsDashboardProps {
  course: LMSCourse;
}

export default function BPSCLmsDashboard({ course }: BPSCLmsDashboardProps) {
  const {
    activeTopicId,
    topicProgressMap,
    topicMasteryMap,
    bookmarks,
    revisionQueue,
    getOverallStats,
    getWeakTopics,
    getOverdueRevisions
  } = useBPSCLmsStore();

  const [searchQuery, setSearchQuery] = useState('');
  const mounted = useIsMounted();

  const stats = mounted
    ? getOverallStats()
    : { completedTopicsCount: 0, totalStudyMinutes: 0, accuracyPercentage: 0, bookmarkedCount: 0, overdueRevisionsCount: 0 };
  const weakTopics = mounted ? getWeakTopics() : [];
  const overdueRevisions = mounted ? getOverdueRevisions() : [];

  // Calculate total topics across all sections
  let totalTopicsCount = 0;
  course.sections.forEach(sec => {
    sec.subjects.forEach(sub => {
      sub.chapters.forEach(ch => {
        totalTopicsCount += ch.topics.length;
      });
    });
  });

  const completionPct = totalTopicsCount > 0 
    ? Math.round((stats.completedTopicsCount / totalTopicsCount) * 100) 
    : 0;

  // Filter topics for search
  const searchResults: { topicTitle: string; chapterTitle: string; subjectName: string; topicId: string }[] = [];
  if (searchQuery.trim().length > 1) {
    const q = searchQuery.toLowerCase();
    course.sections.forEach(sec => {
      sec.subjects.forEach(sub => {
        sub.chapters.forEach(ch => {
          ch.topics.forEach(t => {
            if (
              t.titleEn.toLowerCase().includes(q) ||
              t.titleHi.toLowerCase().includes(q) ||
              ch.titleEn.toLowerCase().includes(q)
            ) {
              searchResults.push({
                topicTitle: t.titleEn,
                chapterTitle: ch.titleEn,
                subjectName: sub.displayNameEn,
                topicId: t.id
              });
            }
          });
        });
      });
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg shadow-sm">
              B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  LMS KNOWLEDGE HUB
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  TRE 4.0 Standard
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-none">
                BPSC TRE 4.0 Computer Science (Class 11–12)
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Banking Tests
            </Link>
            <Link
              href="/?bpsc=tre4"
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-400 transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Full CBT Mock Exam (150 Qs)
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* ======================================================== */}
        {/* HERO BANNER & METRICS                                    */}
        {/* ======================================================== */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-200 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              LEARN ➔ UNDERSTAND ➔ PRACTICE ➔ TEST ➔ ANALYZE ➔ REVISE
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Master the Complete BPSC TRE 4.0 Syllabus
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Textbook-grade pedagogical chapters, 12-section blueprint tutorials, bilingual terminology, and adaptive practice drills covering Language (30M), General Studies (40M), and Computer Science (80M).
            </p>

            {/* Overall Syllabus Progress Bar */}
            <div className="pt-2">
              <div className="flex justify-between text-xs font-semibold text-blue-200 mb-1.5">
                <span>Course Completion Progress</span>
                <span>{completionPct}% ({stats.completedTopicsCount} of {totalTopicsCount} Topics)</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-blue-950/60 overflow-hidden border border-blue-400/20">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.max(5, completionPct)}%` }}
                />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href={`/bpsc/learn/PART_1_LANGUAGE/ENGLISH_LANGUAGE/eng-ch-parts-of-speech/${activeTopicId || 'eng-topic-nouns-pronouns'}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-950 shadow-md hover:bg-blue-50 transition-all"
              >
                Continue Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/bpsc/learn/PART_3_SUBJECT_CORE/COMPUTER_SCIENCE_11_12/cs-ch-digital-logic/cs-topic-number-systems-twos-comp`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-700/60 border border-blue-400/30 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700/80 transition-all"
              >
                <Cpu className="h-4 w-4 text-blue-300" />
                Go to Computer Science (80M)
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LEARNER INTELLIGENCE METRIC CARDS                        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold">Completed Topics</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {stats.completedTopicsCount} <span className="text-xs font-normal text-slate-400">/ {totalTopicsCount}</span>
            </div>
            <div className="mt-1 text-[11px] text-slate-500">
              {completionPct}% of total syllabus
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold">Study Time Logged</span>
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {stats.totalStudyMinutes} <span className="text-xs font-normal text-slate-400">mins</span>
            </div>
            <div className="mt-1 text-[11px] text-slate-500">
              Active reading & drill time
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold">Practice Accuracy</span>
              <TrendingUp className="h-4 w-4 text-indigo-500" />
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {stats.accuracyPercentage}%
            </div>
            <div className="mt-1 text-[11px] text-slate-500">
              Across all topic practice drills
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold">Spaced Revisions Due</span>
              <RotateCcw className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {stats.overdueRevisionsCount} <span className="text-xs font-normal text-slate-400">topics</span>
            </div>
            <div className="mt-1 text-[11px] text-slate-500">
              Interval repetition queue
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SEARCH BAR                                               */}
        {/* ======================================================== */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search all concepts, topics, or formulas (e.g. 2's complement, Champaran, Subject-Verb Agreement)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />

          {/* Search Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-13 z-30 max-h-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              {searchResults.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/bpsc/learn?topic=${item.topicId}`}
                  className="flex items-center justify-between rounded-xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{item.topicTitle}</div>
                    <div className="text-slate-500">{item.subjectName} • {item.chapterTitle}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* SECTION CARDS (3 MAJOR DIVISIONS)                        */}
        {/* ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Syllabus Structure (3 Distinct Sections)
            </h3>
            <span className="text-xs text-slate-500">
              Aligned with Official BPSC TRE Notification
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.sections.map((section) => {
              const isLanguage = section.key === 'PART_1_LANGUAGE';
              const isGS = section.key === 'PART_2_GENERAL_STUDIES';
              const isCS = section.key === 'PART_3_SUBJECT_CORE';

              const icon = isLanguage ? (
                <Languages className="h-6 w-6 text-blue-600" />
              ) : isGS ? (
                <MapPin className="h-6 w-6 text-emerald-600" />
              ) : (
                <Cpu className="h-6 w-6 text-purple-600" />
              );

              const badgeColor = isLanguage
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                : isGS
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                : 'bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300';

              // First topic in this section
              const firstTopic = section.subjects[0]?.chapters[0]?.topics[0];

              return (
                <div
                  key={section.key}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                        {icon}
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${badgeColor}`}>
                        {section.weightageMarks} Marks {section.isQualifyingOnly && '(Qualifying)'}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {section.displayNameEn}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi mt-0.5">
                        {section.displayNameHi}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {section.descriptionEn}
                    </p>

                    {/* Subjects included */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                      <span className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider block">
                        Included Modules:
                      </span>
                      {section.subjects.map((sub) => (
                        <div key={sub.key} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="truncate">• {sub.displayNameEn}</span>
                          <span className="text-[11px] text-slate-400 shrink-0">
                            {sub.chapters.length} Ch
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    {firstTopic && (
                      <Link
                        href={`/bpsc/learn/${section.key}/${section.subjects[0].key}/${section.subjects[0].chapters[0].id}/${firstTopic.id}`}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-all shadow"
                      >
                        Explore Lessons
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* WEAK TOPICS & REVISION ALERTS                           */}
        {/* ======================================================== */}
        {weakTopics.length > 0 && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 dark:border-rose-900/40 dark:bg-rose-950/20 space-y-3">
            <div className="flex items-center gap-2 text-rose-900 dark:text-rose-300 font-bold text-sm">
              <AlertTriangle className="h-4 w-4 text-rose-600" />
              Weak Topics Requiring Focused Practice (Accuracy &lt; 60%)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weakTopics.map((item) => (
                <div key={item.topicId} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-rose-100 dark:bg-slate-900 dark:border-slate-800 text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{item.topicId}</div>
                    <div className="text-slate-500">Accuracy: {item.accuracy}% ({item.correctAttempts}/{item.totalAttempts} correct)</div>
                  </div>
                  <Link
                    href={`/bpsc/learn?topic=${item.topicId}`}
                    className="rounded-lg bg-rose-100 px-3 py-1 font-bold text-rose-700 hover:bg-rose-200 dark:bg-rose-950 dark:text-rose-300"
                  >
                    Revise
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
