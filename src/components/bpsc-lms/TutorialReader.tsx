'use client';

import React, { useState, useEffect } from 'react';
import { 
  LMSCourse, 
  LMSTopic, 
  LMSChapter, 
  LMSSubject, 
  LMSSection, 
  LMSSectionKey, 
  LMSSubjectKey 
} from '@/types/bpscLms';
import { useBPSCLmsStore } from '@/store/useBPSCLmsStore';
import LmsPracticeDrillModal from './LmsPracticeDrillModal';
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  Layers,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  FileText,
  Search,
  ArrowLeft,
  ArrowRight,
  Play,
  RotateCw,
  Edit3,
  Trash2,
  Save,
  Languages,
  Flame,
  Star,
  History as HistoryIcon,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

// ============================================================================
// RICH MARKDOWN & HIGHLIGHTER FORMATTER
// Turns raw asterisks, bullets, formulas, and story blocks into human-readable,
// beautifully styled, multi-colored typography with yellow highlighters.
// ============================================================================
function parseInlineFormatting(text: string): React.ReactNode[] {
  if (!text) return [];

  // Regex to match **bold**, ==highlight==, `code`, and $formula$
  const tokenRegex = /(\*\*[\s\S]+?\*\*|==[\s\S]+?==|`[\s\S]+?`|\$[\s\S]+?\$)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // 1. Bold text: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} className="font-extrabold text-slate-900 dark:text-amber-100">
          {parseInlineFormatting(inner)}
        </strong>
      );
    }

    // 2. Yellow Highlighter: ==text==
    if (part.startsWith('==') && part.endsWith('==') && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <mark
          key={idx}
          className="bg-yellow-200/90 text-amber-950 dark:bg-yellow-400/25 dark:text-yellow-200 px-1.5 py-0.5 rounded font-bold border-b-2 border-yellow-400 dark:border-yellow-500 shadow-sm mx-0.5"
        >
          {inner}
        </mark>
      );
    }

    // 3. Inline code: `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      const inner = part.slice(1, -1);
      return (
        <code
          key={idx}
          className="rounded bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-slate-700 px-1.5 py-0.5 font-mono text-xs font-semibold"
        >
          {inner}
        </code>
      );
    }

    // 4. Math formula: $formula$
    if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
      const inner = part.slice(1, -1)
        .replace(/\\rightarrow/g, ' → ')
        .replace(/\\times/g, ' × ')
        .replace(/\\le/g, ' ≤ ')
        .replace(/\\ge/g, ' ≥ ')
        .replace(/\\theta/g, 'θ')
        .replace(/\\approx/g, ' ≈ ');
      return (
        <span
          key={idx}
          className="font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-950/40 px-1.5 py-0.5 rounded text-xs mx-0.5 border border-blue-200/60 dark:border-blue-900/40"
        >
          {inner}
        </span>
      );
    }

    // Regular text (substitute escaped LaTeX arrows if any)
    const cleanText = part
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\times/g, ' × ');

    return <React.Fragment key={idx}>{cleanText}</React.Fragment>;
  });
}

function renderRichLmsText(rawText: string, isHindi = false): React.ReactNode {
  if (!rawText) return null;

  const lines = rawText.split('\n');

  return (
    <div className={`space-y-3 ${isHindi ? 'font-hindi' : ''}`}>
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lineIdx} className="h-1.5" />;

        // Sub-headings (e.g. ### Title or **Title:**)
        if (trimmed.startsWith('### ')) {
          return (
            <h4
              key={lineIdx}
              className="text-base font-extrabold text-slate-900 dark:text-white pt-3 pb-1 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {trimmed.replace('### ', '')}
            </h4>
          );
        }

        // Bullet item (* or -)
        const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ');
        if (isBullet) {
          const content = trimmed.slice(2).trim();
          return (
            <div key={lineIdx} className="flex items-start gap-2.5 my-1.5 pl-1 sm:pl-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-black text-xs mt-0.5 shadow-xs">
                •
              </span>
              <div className="flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineFormatting(content)}
              </div>
            </div>
          );
        }

        // Numbered list item (e.g. 1. or 2.)
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const content = numberedMatch[2];
          return (
            <div key={lineIdx} className="flex items-start gap-2.5 my-1.5 pl-1 sm:pl-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 font-bold text-xs mt-0.5">
                {num}
              </span>
              <div className="flex-1 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {parseInlineFormatting(content)}
              </div>
            </div>
          );
        }

        // Regular paragraph with rich inline formatting
        return (
          <p key={lineIdx} className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
            {parseInlineFormatting(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

interface TutorialReaderProps {
  course: LMSCourse;
  initialTopicId?: string;
}

export default function TutorialReader({ course, initialTopicId }: TutorialReaderProps) {
  const {
    activeTopicId,
    setActiveTopic,
    topicProgressMap,
    markTopicCompleted,
    bookmarks,
    toggleBookmark,
    personalNotes,
    savePersonalNote,
    deletePersonalNote,
    revisionQueue,
    languagePreference,
    setLanguagePreference
  } = useBPSCLmsStore();

  // Find active items
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || activeTopicId || 'eng-topic-nouns-pronouns'
  );

  // Search in sidebar
  const [searchQuery, setSearchQuery] = useState('');
  // Expanded chapters state
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'eng-ch-parts-of-speech': true,
    'bih-ch-freedom-struggle': true,
    'cs-ch-digital-logic': true
  });

  // Practice modal state
  const [isDrillOpen, setIsDrillOpen] = useState(false);
  // Notes drawer state
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  // Knowledge check state
  const [kcAnswers, setKcAnswers] = useState<Record<string, string>>({});
  const [kcChecked, setKcChecked] = useState(false);

  // Locate the active topic metadata
  let currentTopic: LMSTopic | null = null;
  let currentChapter: LMSChapter | null = null;
  let currentSubject: LMSSubject | null = null;
  let currentSection: LMSSection | null = null;

  for (const sec of course.sections) {
    for (const sub of sec.subjects) {
      for (const ch of sub.chapters) {
        for (const top of ch.topics) {
          if (top.id === selectedTopicId || top.slug === selectedTopicId) {
            currentTopic = top;
            currentChapter = ch;
            currentSubject = sub;
            currentSection = sec;
            break;
          }
        }
      }
    }
  }

  // Fallback to first available topic if not found
  if (!currentTopic && course.sections[0]?.subjects[0]?.chapters[0]?.topics[0]) {
    currentSection = course.sections[0];
    currentSubject = currentSection.subjects[0];
    currentChapter = currentSubject.chapters[0];
    currentTopic = currentChapter.topics[0];
  }

  // Sync with store
  useEffect(() => {
    if (currentTopic && currentChapter && currentSubject && currentSection) {
      setActiveTopic(currentSection.key, currentSubject.key, currentChapter.id, currentTopic.id);
      // Load note if exists
      const existingNote = personalNotes[currentTopic.id];
      setNoteContent(existingNote ? existingNote.content : '');
      // Reset knowledge check
      setKcAnswers({});
      setKcChecked(false);
    }
  }, [selectedTopicId]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const handleSelectTopic = (topId: string, chapId: string) => {
    setSelectedTopicId(topId);
    setExpandedChapters(prev => ({ ...prev, [chapId]: true }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCompleted = currentTopic ? Boolean(topicProgressMap[currentTopic.id]?.isCompleted) : false;
  const isBookmarked = currentTopic ? bookmarks.includes(currentTopic.id) : false;
  const revisionItem = currentTopic ? revisionQueue.find(r => r.topicId === currentTopic?.id) : undefined;

  const handleToggleComplete = () => {
    if (!currentTopic) return;
    markTopicCompleted(currentTopic.id, 600); // 10 minutes logged
  };

  const handleToggleBookmark = () => {
    if (!currentTopic || !currentChapter || !currentSubject) return;
    toggleBookmark(currentTopic.id, currentTopic.titleEn, currentChapter.titleEn, currentSubject.key);
  };

  const handleSaveNote = () => {
    if (!currentTopic) return;
    savePersonalNote(currentTopic.id, currentTopic.titleEn, noteContent);
  };

  const handleCheckKnowledge = () => {
    setKcChecked(true);
    if (!currentTopic) return;
    const kc = currentTopic.tutorial.knowledgeCheck;
    let correctCount = 0;
    kc.forEach(q => {
      const correctOpt = q.options.find(o => o.isCorrect);
      if (correctOpt && kcAnswers[q.id] === correctOpt.id) {
        correctCount++;
      }
    });
    markTopicCompleted(currentTopic.id, 300, { correct: correctCount, total: kc.length });
  };

  // Find next and previous topics
  const allTopics: { topic: LMSTopic; chapter: LMSChapter }[] = [];
  course.sections.forEach(sec => {
    sec.subjects.forEach(sub => {
      sub.chapters.forEach(ch => {
        ch.topics.forEach(top => {
          allTopics.push({ topic: top, chapter: ch });
        });
      });
    });
  });

  const currentIndex = allTopics.findIndex(t => t.topic.id === currentTopic?.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  if (!currentTopic || !currentChapter || !currentSubject || !currentSection) {
    return <div className="p-8 text-center">No topic found.</div>;
  }

  const tut = currentTopic.tutorial;

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* ======================================================== */}
      {/* LEFT SIDEBAR: COLLAPSIBLE SYLLABUS TREE                  */}
      {/* ======================================================== */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 h-screen sticky top-0 overflow-hidden">
        {/* Course Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <Link 
            href="/bpsc/learn" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            LMS Dashboard
          </Link>
          <h2 className="text-sm font-bold text-slate-800 dark:text-white line-clamp-1">
            {course.targetExam}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            12-Section Comprehensive Syllabus
          </p>

          {/* Quick Search */}
          <div className="relative mt-3">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search syllabus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Tree List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
          {course.sections.map((section) => (
            <div key={section.key} className="space-y-1">
              <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Part {section.partNumber}: {section.displayNameEn.split('(')[0]}
              </div>

              {section.subjects.map((subject) => (
                <div key={subject.key} className="space-y-1">
                  <div className="flex items-center gap-1.5 px-2 py-1 font-semibold text-slate-700 dark:text-slate-300">
                    <BookOpen className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">{subject.displayNameEn}</span>
                  </div>

                  {subject.chapters.map((chapter) => {
                    const isExpanded = Boolean(expandedChapters[chapter.id]);
                    const hasMatches = searchQuery
                      ? chapter.topics.some(t => t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()))
                      : true;

                    if (!hasMatches) return null;

                    return (
                      <div key={chapter.id} className="pl-2">
                        <button
                          onClick={() => toggleChapter(chapter.id)}
                          className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60"
                        >
                          <span className="truncate pr-2">{chapter.chapterNumber}. {chapter.titleEn}</span>
                          {isExpanded ? (
                            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                          ) : (
                            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-800 space-y-0.5 mt-1">
                            {chapter.topics.map((topic) => {
                              if (searchQuery && !topic.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) {
                                return null;
                              }
                              const isActive = topic.id === currentTopic?.id;
                              const isDone = Boolean(topicProgressMap[topic.id]?.isCompleted);

                              return (
                                <button
                                  key={topic.id}
                                  onClick={() => handleSelectTopic(topic.id, chapter.id)}
                                  className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-colors ${
                                    isActive
                                      ? 'bg-blue-50 text-blue-700 font-semibold dark:bg-blue-900/30 dark:text-blue-300'
                                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/40'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 truncate">
                                    {isDone ? (
                                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                    ) : (
                                      <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${isActive ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`} />
                                    )}
                                    <span className="truncate">{topic.titleEn}</span>
                                  </div>
                                  {topic.pyqCount > 0 && (
                                    <span className="ml-1 rounded bg-amber-100 px-1 py-0.2 text-[9px] font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 shrink-0">
                                      {topic.pyqCount} PYQ
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* ======================================================== */}
      {/* MAIN TUTORIAL READING AREA                               */}
      {/* ======================================================== */}
      <main className="flex-1 flex flex-col min-w-0 max-w-5xl mx-auto px-4 sm:px-8 py-6">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{currentSection.displayNameEn.split('(')[0]}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{currentSubject.displayNameEn}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{currentChapter.titleEn}</span>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* Language Switch */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-800">
              <button
                onClick={() => setLanguagePreference('BILINGUAL')}
                className={`rounded px-2 py-1 ${languagePreference === 'BILINGUAL' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}
              >
                द्विभाषी
              </button>
              <button
                onClick={() => setLanguagePreference('EN')}
                className={`rounded px-2 py-1 ${languagePreference === 'EN' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}
              >
                EN
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={handleToggleBookmark}
              title={isBookmarked ? 'Bookmarked' : 'Add to Bookmarks & Spaced Repetition'}
              className={`rounded-lg border p-1.5 transition-all ${
                isBookmarked
                  ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                  : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>

            {/* Personal Notes button */}
            <button
              onClick={() => setIsNotesOpen(!isNotesOpen)}
              className={`rounded-lg border p-1.5 transition-all ${
                isNotesOpen || personalNotes[currentTopic.id]
                  ? 'border-indigo-300 bg-indigo-50 text-indigo-600 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                  : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <Edit3 className="h-4 w-4" />
            </button>

            {/* Launch Practice Drill */}
            <button
              onClick={() => setIsDrillOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-all"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Practice Drill ({currentTopic.practiceQuestions.length})
            </button>
          </div>
        </div>

        {/* Notes Drawer (when opened) */}
        {isNotesOpen && (
          <div className="my-4 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                <Edit3 className="h-3.5 w-3.5" />
                Personal Study Notes for: {currentTopic.titleEn}
              </span>
              <button 
                onClick={handleSaveNote} 
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:underline"
              >
                <Save className="h-3.5 w-3.5" /> Save
              </button>
            </div>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Write your personal mnemonics, BPSC exam reflections, or doubts here..."
              rows={3}
              className="w-full rounded-lg border border-indigo-200 bg-white p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:outline-none dark:border-indigo-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 1: HEADER & METADATA                             */}
        {/* ======================================================== */}
        <div className="my-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Topic {currentTopic.topicNumber}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="h-3.5 w-3.5" /> {tut.readingTimeMinutes} mins read
            </span>
            <span className="rounded bg-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">
              {tut.difficulty}
            </span>
            {revisionItem && (
              <span className="rounded bg-purple-100 px-2 py-0.5 text-[11px] font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                Spaced Interval: Stage {revisionItem.stage}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {currentTopic.titleEn}
          </h1>
          {languagePreference !== 'EN' && currentTopic.titleHi && (
            <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-400 font-hindi mt-1">
              {currentTopic.titleHi}
            </h2>
          )}
        </div>

        {/* ======================================================== */}
        {/* EXAM TRACK RECORD & QUESTION PROBABILITY SPOTLIGHT CARD  */}
        {/* ======================================================== */}
        <div className="mb-6 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50/60 to-orange-50/40 p-5 shadow-sm dark:border-amber-800/70 dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-amber-200/80 dark:border-amber-800/50 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white font-black text-sm shadow-sm">
                🏛️
              </span>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                  Official BPSC TRE Exam Track Record & Question Probability
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                </h3>
                <p className="text-[11px] text-amber-800 dark:text-amber-400">
                  Real question trend analysis across official TRE 1.0, 2.0 & 3.0 question booklets
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black shadow-xs ${
                currentTopic.examImportance === 'CRITICAL_HIGH_YIELD'
                  ? 'bg-rose-600 text-white shadow-rose-200'
                  : currentTopic.examImportance === 'HIGH_YIELD'
                  ? 'bg-amber-600 text-white shadow-amber-200'
                  : 'bg-blue-600 text-white shadow-blue-200'
              }`}>
                <Flame className="h-3.5 w-3.5" />
                {currentTopic.examImportance === 'CRITICAL_HIGH_YIELD' && '🔥 CRITICAL: HIGH-YIELD (Must-Read)'}
                {currentTopic.examImportance === 'HIGH_YIELD' && '⭐ HIGH YIELD (Repeated Pattern)'}
                {(!currentTopic.examImportance || currentTopic.examImportance === 'MODERATE') && '📘 ESSENTIAL SYLLABUS CORE'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl bg-white/90 dark:bg-slate-800/80 p-3 border border-amber-200/70 dark:border-slate-700 shadow-2xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                Was a question ever asked?
              </span>
              <span className="font-extrabold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 text-sm">
                ✅ YES: OFFICIALLY ASKED
              </span>
            </div>

            <div className="rounded-xl bg-white/90 dark:bg-slate-800/80 p-3 border border-amber-200/70 dark:border-slate-700 shadow-2xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                Verified BPSC Papers
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {currentTopic.pyqAppearanceSummary || `${currentTopic.pyqCount} Verified PYQs (TRE 1.0, 2.0 & 3.0)`}
              </span>
            </div>

            <div className="rounded-xl bg-white/90 dark:bg-slate-800/80 p-3 border border-amber-200/70 dark:border-slate-700 shadow-2xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                TRE 4.0 Expected Weightage
              </span>
              <span className="font-extrabold text-indigo-700 dark:text-indigo-400">
                🎯 1 to 2 Questions (~1–2 Marks)
              </span>
            </div>
          </div>
        </div>

        {/* Story Mode Banner if History / Narrative Topic */}
        {(currentTopic.isStoryFormat || currentSubject.key === 'BIHAR_SPECIAL_GK' || currentSubject.key === 'INDIAN_HISTORY') && (
          <div className="mb-6 rounded-2xl border-2 border-amber-300/80 bg-gradient-to-r from-amber-100/70 via-orange-50 to-yellow-100/50 p-4 dark:border-amber-700/60 dark:from-amber-950/40 dark:via-slate-900 dark:to-slate-900 flex items-center gap-3 shadow-xs">
            <span className="text-2xl shrink-0">📜</span>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                Historical Story Mode Active {currentTopic.storyEra ? `• ${currentTopic.storyEra}` : '• Complete Narrative'}
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                Taught in a captivating chronological story format with hero spotlights, battle accounts, and memorable dialogue so you can effortlessly retain every historical fact for BPSC TRE.
              </p>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: LEARNING OBJECTIVES                           */}
        {/* ======================================================== */}
        <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900/40 dark:bg-blue-950/20">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-3">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Learning Objectives (BPSC TRE Mastery)
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
            {tut.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: INTRODUCTION                                 */}
        {/* ======================================================== */}
        <div className="mb-8 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Conceptual Foundation
          </h3>
          <div className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
            {renderRichLmsText(tut.introductionEn)}
          </div>
          {languagePreference !== 'EN' && tut.introductionHi && (
            <div className="text-sm text-slate-600 dark:text-slate-400 font-hindi leading-relaxed border-l-2 border-slate-300 pl-3 dark:border-slate-700 mt-2">
              {renderRichLmsText(tut.introductionHi, true)}
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* SECTION 4: STEP-BY-STEP CONCEPT SECTIONS                 */}
        {/* ======================================================== */}
        <div className="space-y-8 mb-10">
          {tut.conceptSections.map((sec, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 pb-3 dark:border-slate-800">
                {sec.title}
              </h3>

              {/* Rich Markdown & Highlighter Content */}
              <div className="max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {renderRichLmsText(sec.contentMarkdownEn)}
              </div>

              {/* Code Snippet if present */}
              {sec.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs">
                  <div className="bg-slate-900 px-4 py-1.5 text-slate-400 text-[11px] font-semibold flex justify-between">
                    <span>{sec.codeSnippet.language.toUpperCase()}</span>
                    <span>Shortcut Code</span>
                  </div>
                  <pre className="p-4 text-emerald-400 overflow-x-auto">
                    <code>{sec.codeSnippet.code}</code>
                  </pre>
                  {sec.codeSnippet.explanation && (
                    <div className="border-t border-slate-800 bg-slate-900/60 p-2.5 text-[11px] text-slate-400">
                      💡 {sec.codeSnippet.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Structured Comparison Table if present */}
              {sec.tableData && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                      <tr>
                        {sec.tableData.headers.map((h, i) => (
                          <th key={i} className="p-3 border-b border-slate-200 dark:border-slate-700">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 align-top font-sans">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout Box if present */}
              {sec.calloutBox && (
                <div className={`rounded-xl border p-4 space-y-1 ${
                  sec.calloutBox.type === 'EXAM_TRAP' 
                    ? 'border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30'
                    : sec.calloutBox.type === 'IMPORTANT'
                    ? 'border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30'
                    : 'border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30'
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <AlertTriangle className={`h-4 w-4 ${
                      sec.calloutBox.type === 'EXAM_TRAP' ? 'text-amber-600' : 'text-rose-600'
                    }`} />
                    <span className={
                      sec.calloutBox.type === 'EXAM_TRAP' ? 'text-amber-900 dark:text-amber-300' : 'text-rose-900 dark:text-rose-300'
                    }>
                      {sec.calloutBox.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {sec.calloutBox.textEn}
                  </p>
                  {languagePreference !== 'EN' && sec.calloutBox.textHi && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-hindi pt-1">
                      {sec.calloutBox.textHi}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* SECTION 5: FORMAL DEFINITIONS & AXIOMS                   */}
        {/* ======================================================== */}
        {tut.importantDefinitions.length > 0 && (
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-4">
              <FileText className="h-4 w-4 text-blue-600" />
              Essential Definitions & Terminology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tut.importantDefinitions.map((def, idx) => (
                <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <h4 className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">{def.term}</h4>
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{parseInlineFormatting(def.definitionEn)}</div>
                  {languagePreference !== 'EN' && def.definitionHi && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi mt-1">{def.definitionHi}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 6: GOLDEN RULES & FORMULAS                      */}
        {/* ======================================================== */}
        {tut.rulesAndFormulas.length > 0 && (
          <div className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 to-indigo-50/30 p-6 dark:border-blue-900/40 dark:from-slate-900 dark:to-blue-950/20">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-4">
              <Award className="h-4 w-4 text-blue-600" />
              Standard Formulas & Decision Rules
            </h3>
            <div className="space-y-4">
              {tut.rulesAndFormulas.map((rf, idx) => (
                <div key={idx} className="rounded-xl bg-white p-4 shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-800 dark:text-white mb-1">{rf.title}</div>
                  <div className="rounded-lg bg-blue-50/80 p-2.5 font-mono text-xs font-bold text-blue-800 dark:bg-slate-800 dark:text-blue-300 my-2 overflow-x-auto border border-blue-200/60 dark:border-slate-700">
                    {rf.formulaOrRule}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{parseInlineFormatting(rf.explanationEn)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 7: STEP-BY-STEP WORKED EXAMPLES                 */}
        {/* ======================================================== */}
        {tut.examples.length > 0 && (
          <div className="mb-10 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Worked Examples: School Method vs. 20-Second BPSC Shortcut
            </h3>
            {tut.examples.map((ex, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {ex.title}
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {ex.problemEn}
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {renderRichLmsText(ex.stepByStepSolutionEn)}
                </div>
                {ex.shortcutTrick && (
                  <div className="flex items-start gap-2 rounded-xl bg-amber-50/80 border border-amber-200/80 p-3.5 text-xs text-amber-950 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-200">
                    <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <strong className="block font-black text-amber-900 dark:text-amber-100 mb-0.5">
                        ⚡ 20-Second BPSC Inspection Shortcut:
                      </strong>
                      <span className="bg-yellow-200/80 dark:bg-yellow-400/25 px-1 py-0.5 rounded font-medium">
                        {ex.shortcutTrick}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 8: COMMON MISTAKES & MISCONCEPTIONS              */}
        {/* ======================================================== */}
        {tut.commonMistakesAndMisconceptions.length > 0 && (
          <div className="mb-10 rounded-2xl border border-rose-200 bg-rose-50/40 p-6 dark:border-rose-900/40 dark:bg-rose-950/20">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 mb-4">
              <AlertTriangle className="h-4 w-4 text-rose-600" />
              Common Candidate Traps & Misconceptions
            </h3>
            <div className="space-y-4">
              {tut.commonMistakesAndMisconceptions.map((mis, idx) => (
                <div key={idx} className="rounded-xl bg-white p-4 shadow-sm border border-rose-100 dark:bg-slate-900 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                    ❌ Common Mistake: "{parseInlineFormatting(mis.mistakeEn)}"
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Why It's Wrong:</strong> {parseInlineFormatting(mis.whyWrongEn)}
                  </div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    ✅ Correct Examination Standard: {parseInlineFormatting(mis.correctWayEn)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SECTION 9: BPSC TRE PERSPECTIVE & PYQ REFERENCES         */}
        {/* ======================================================== */}
        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/40 dark:bg-amber-950/20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-600" />
            BPSC TRE 4.0 Examination Perspective
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300">
            <div>
              <strong className="block text-slate-900 dark:text-white font-bold mb-2">Frequently Tested Question Patterns:</strong>
              <ul className="list-disc pl-4 space-y-1">
                {tut.bpscTrePerspective.frequentlyTestedAspects.map((aspect, i) => (
                  <li key={i}>{parseInlineFormatting(aspect)}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong className="block text-slate-900 dark:text-white font-bold mb-2">Common Distractor Traps in Options:</strong>
              <ul className="list-disc pl-4 space-y-1">
                {tut.bpscTrePerspective.commonDistractorTraps.map((dist, i) => (
                  <li key={i}>{parseInlineFormatting(dist)}</li>
                ))}
              </ul>
            </div>
          </div>
          {tut.bpscTrePerspective.relatedPyqReferences && (
            <div className="mt-4 pt-3 border-t border-amber-200 dark:border-amber-800 text-xs">
              <span className="font-bold text-amber-800 dark:text-amber-300">Authentic BPSC PYQs on this topic: </span>
              <span className="text-slate-600 dark:text-slate-400">
                {tut.bpscTrePerspective.relatedPyqReferences.join(' • ')}
              </span>
            </div>
          )}

          {/* Authentic PYQ Spotlights with Exam & Shift Details */}
          {currentTopic.practiceQuestions.filter(q => q.isAuthenticPyq).length > 0 && (
            <div className="mt-5 pt-4 border-t border-amber-200 dark:border-amber-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <span>🏛️ Official Past BPSC TRE Questions from Real Exam Papers:</span>
              </div>
              <div className="space-y-3">
                {currentTopic.practiceQuestions.filter(q => q.isAuthenticPyq).map((pyq, pIdx) => (
                  <div key={pyq.id || pIdx} className="rounded-xl bg-white p-4 shadow-sm border border-amber-200 dark:bg-slate-900 dark:border-slate-800 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[11px] font-black text-amber-800 dark:text-amber-300">
                        {pyq.treVersion === 'TRE_1_0' ? 'BPSC TRE 1.0' : pyq.treVersion === 'TRE_2_0' ? 'BPSC TRE 2.0' : 'BPSC TRE 3.0'}
                      </span>
                      {pyq.examDate && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                          📅 {pyq.examDate}
                        </span>
                      )}
                      {pyq.shift && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:text-blue-300">
                          ⏱️ {pyq.shift}
                        </span>
                      )}
                      {pyq.officialQuestionNumber && (
                        <span className="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-800 dark:text-slate-200">
                          {pyq.bookletSeries ? `${pyq.bookletSeries} ` : ''}Q.{pyq.officialQuestionNumber}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {parseInlineFormatting(pyq.questionTextEn)}
                    </div>
                    {pyq.questionTextHi && (
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-hindi">
                        {parseInlineFormatting(pyq.questionTextHi)}
                      </div>
                    )}
                    <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold pt-1">
                      ✅ Official Answer Key: Option ({pyq.correctOptionIdentifier})
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                      <strong>Official Explanation:</strong> {parseInlineFormatting(pyq.explanationEn)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* SECTION 10: QUICK REVISION BULLETS                      */}
        {/* ======================================================== */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-4">
            Quick Revision Points (Last-Day Review)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tut.quickRevisionPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  {i + 1}
                </span>
                <span>{parseInlineFormatting(pt)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 11: KNOWLEDGE CHECK MCQS                         */}
        {/* ======================================================== */}
        {tut.knowledgeCheck.length > 0 && (
          <div className="mb-12 rounded-2xl border border-blue-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Interactive Knowledge Check
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Test your conceptual understanding before starting the timed practice drill.
                </p>
              </div>
              <button
                onClick={handleCheckKnowledge}
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-sm"
              >
                Evaluate My Answers
              </button>
            </div>

            <div className="space-y-6">
              {tut.knowledgeCheck.map((kc, idx) => (
                <div key={kc.id} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30 space-y-3">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Q{idx + 1}. {parseInlineFormatting(kc.questionEn)}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {kc.options.map((opt) => {
                      const isSelected = kcAnswers[kc.id] === opt.id;
                      let btnStyle = 'border-slate-200 bg-white hover:border-blue-400 dark:border-slate-700 dark:bg-slate-800';
                      if (kcChecked) {
                        if (opt.isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200';
                        }
                      } else if (isSelected) {
                        btnStyle = 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-200 font-semibold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => setKcAnswers(prev => ({ ...prev, [kc.id]: opt.id }))}
                          disabled={kcChecked}
                          className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs transition-all ${btnStyle}`}
                        >
                          <span className="font-bold">{opt.id}.</span>
                          <span>{parseInlineFormatting(opt.textEn)}</span>
                        </button>
                      );
                    })}
                  </div>

                  {kcChecked && (
                    <div className="rounded-lg bg-blue-50/60 p-2.5 text-xs text-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
                      <strong>Explanation:</strong> {parseInlineFormatting(kc.explanationEn)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* BOTTOM ACTION BAR: COMPLETION & DRILL LAUNCH             */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleComplete}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-sm ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              {isCompleted ? 'Topic Completed' : 'Mark as Completed'}
            </button>

            <button
              onClick={() => setIsDrillOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-all"
            >
              <Play className="h-4 w-4 fill-current" />
              Start Practice Drill ({currentTopic.practiceQuestions.length} Questions)
            </button>
          </div>

          {/* Prev / Next Topic Links */}
          <div className="flex items-center gap-2">
            {prevTopic && (
              <button
                onClick={() => handleSelectTopic(prevTopic.topic.id, prevTopic.chapter.id)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous
              </button>
            )}
            {nextTopic && (
              <button
                onClick={() => handleSelectTopic(nextTopic.topic.id, nextTopic.chapter.id)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

      </main>

      {/* ======================================================== */}
      {/* PRACTICE DRILL MODAL (When Triggered)                    */}
      {/* ======================================================== */}
      {isDrillOpen && currentTopic && (
        <LmsPracticeDrillModal
          topicTitle={currentTopic.titleEn}
          topicId={currentTopic.id}
          chapterId={currentChapter.id}
          subjectKey={currentSubject.key}
          questions={currentTopic.practiceQuestions}
          onClose={() => setIsDrillOpen(false)}
        />
      )}

    </div>
  );
}
