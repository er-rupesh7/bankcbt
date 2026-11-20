// TypeScript definitions for BPSC TRE 4.0 Learning Management System (LMS)
// Hierarchical structure: Exam -> Course -> Section -> Subject -> Chapter -> Topic -> Subtopic -> Tutorial
// Supports Part 1 (Language), Part 2 (General Awareness), Part 3 (Subject-Specific: CS, Math, Science)

import { BPSCSubject, BPSCTREVersion, BPSCVerificationStatus } from './bpsc';

export type LMSSectionKey = 'PART_1_LANGUAGE' | 'PART_2_GENERAL_STUDIES' | 'PART_3_SUBJECT_CORE';

export type LMSSubjectKey = 
  // Part 1: Language
  | 'ENGLISH_LANGUAGE'
  | 'HINDI_LANGUAGE'
  // Part 2: General Studies
  | 'BIHAR_SPECIAL_GK'
  | 'INDIAN_HISTORY'
  | 'INDIAN_POLITY'
  | 'INDIAN_GEOGRAPHY'
  | 'INDIAN_ECONOMY'
  | 'GENERAL_SCIENCE'
  | 'ELEMENTARY_MATHEMATICS'
  | 'CURRENT_AFFAIRS'
  | 'CURRENT_AFAIRS'
  // Part 3: Core Subjects
  | 'COMPUTER_SCIENCE_11_12'
  | 'MATHEMATICS_TGT'
  | 'SCIENCE_TGT';

export type PracticeDrillMode = 
  | 'BASIC'           // Mode A: Basic Learning Practice (Immediate feedback, links to tutorial)
  | 'MASTERY'         // Mode B: Topic Mastery Practice (Progressive difficulty)
  | 'BPSC_EXAM'       // Mode C: BPSC Examination Level (Timed, actual exam patterns)
  | 'PYQ'             // Mode D: Authentic PYQs only
  | 'CHALLENGE'       // Mode E: High-difficulty conceptual traps & multi-step problems
  | 'REVISION';       // Mode F: Weak topics & previously incorrect questions

export interface KnowledgeCheckOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  textEn: string;
  textHi?: string;
  isCorrect: boolean;
}

export interface KnowledgeCheckQuestion {
  id: string;
  questionEn: string;
  questionHi?: string;
  options: KnowledgeCheckOption[];
  explanationEn: string;
  explanationHi?: string;
  conceptTested: string;
}

export interface LMSTutorialSection {
  title: string;
  contentMarkdownEn: string;
  contentMarkdownHi?: string;
  codeSnippet?: {
    language: string;
    code: string;
    output?: string;
    explanation?: string;
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  calloutBox?: {
    type: 'NOTE' | 'TIP' | 'IMPORTANT' | 'WARNING' | 'EXAM_TRAP';
    title: string;
    textEn: string;
    textHi?: string;
  };
}

export interface LMSTutorial {
  id: string;
  topicId: string;
  titleEn: string;
  titleHi: string;
  readingTimeMinutes: number;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  
  // Standard 12-Section Educational Blueprint
  learningObjectives: string[];
  introductionEn: string;
  introductionHi?: string;
  conceptSections: LMSTutorialSection[];
  importantDefinitions: { term: string; definitionEn: string; definitionHi?: string }[];
  rulesAndFormulas: { title: string; formulaOrRule: string; explanationEn: string; explanationHi?: string }[];
  examples: {
    title: string;
    problemEn: string;
    problemHi?: string;
    stepByStepSolutionEn: string;
    stepByStepSolutionHi?: string;
    shortcutTrick?: string;
  }[];
  practicalApplications: string[];
  commonMistakesAndMisconceptions: {
    mistakeEn: string;
    mistakeHi?: string;
    whyWrongEn: string;
    correctWayEn: string;
  }[];
  bpscTrePerspective: {
    frequentlyTestedAspects: string[];
    commonDistractorTraps: string[];
    relatedPyqReferences?: string[];
  };
  quickRevisionPoints: string[];
  knowledgeCheck: KnowledgeCheckQuestion[];
}

export interface LMSPracticeQuestion {
  id: string;
  topicId: string;
  chapterId: string;
  subjectKey: LMSSubjectKey;
  sectionKey: LMSSectionKey;
  questionTextEn: string;
  questionTextHi?: string;
  options: {
    id: string;
    identifier: 'A' | 'B' | 'C' | 'D' | 'E';
    textEn: string;
    textHi?: string;
    isCorrect: boolean;
  }[];
  correctOptionIdentifier: 'A' | 'B' | 'C' | 'D' | 'E';
  difficulty: 'EASY' | 'MODERATE' | 'HARD';
  practiceMode: PracticeDrillMode;
  explanationEn: string;
  explanationHi?: string;
  examTrapNote?: string;
  isAuthenticPyq?: boolean;
  treVersion?: BPSCTREVersion;
  examDate?: string;
  shift?: string;
  bookletSeries?: string;
  officialQuestionNumber?: number;
  sourceDocumentRef?: string;
  verificationStatus: BPSCVerificationStatus;
}

export type LMSExamImportance = 'CRITICAL_HIGH_YIELD' | 'HIGH_YIELD' | 'MODERATE' | 'FOUNDATIONAL';

export interface LMSTopic {
  id: string;
  chapterId: string;
  topicNumber: number;
  slug: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi?: string;
  estimatedMinutes: number;
  isPrescribedInOfficialSyllabus: boolean;
  pyqCount: number;
  hasAppearedInPyq?: boolean;
  examImportance?: LMSExamImportance;
  pyqAppearanceSummary?: string;
  isStoryFormat?: boolean;
  storyEra?: string;
  tutorial: LMSTutorial;
  practiceQuestions: LMSPracticeQuestion[];
}

export interface LMSChapter {
  id: string;
  subjectKey: LMSSubjectKey;
  chapterNumber: number;
  slug: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi?: string;
  topics: LMSTopic[];
  totalPracticeQuestions: number;
  totalEstimatedMinutes: number;
}

export interface LMSSubject {
  key: LMSSubjectKey;
  sectionKey: LMSSectionKey;
  displayNameEn: string;
  displayNameHi: string;
  iconName: string; // Lucide icon identifier
  descriptionEn: string;
  descriptionHi?: string;
  chapters: LMSChapter[];
}

export interface LMSSection {
  key: LMSSectionKey;
  partNumber: 1 | 2 | 3;
  displayNameEn: string;
  displayNameHi: string;
  weightageMarks: number;
  isQualifyingOnly: boolean;
  descriptionEn: string;
  subjects: LMSSubject[];
}

export interface LMSCourse {
  id: string;
  examId: string;
  title: string;
  targetExam: string; // "BPSC TRE 4.0"
  description: string;
  sections: LMSSection[];
}

// User Learning Tracking Entities (Persisted)
export interface UserTopicProgress {
  topicId: string;
  isCompleted: boolean;
  completedAt?: string;
  timeSpentSeconds: number;
  lastVisitedAt: string;
  knowledgeCheckScore?: {
    correct: number;
    total: number;
    percentage: number;
  };
}

export interface UserTopicMastery {
  topicId: string;
  chapterId: string;
  subjectKey: LMSSubjectKey;
  totalAttempts: number;
  correctAttempts: number;
  accuracy: number;
  masteryPercentage: number; // 0 to 100
  isWeakTopic: boolean; // accuracy < 60% with at least 5 attempts
  lastPracticedAt: string;
}

export interface UserRevisionItem {
  id: string;
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  subjectKey: LMSSubjectKey;
  addedAt: string;
  stage: 1 | 2 | 3 | 4 | 5; // Spaced repetition interval: 1 day, 3 days, 7 days, 14 days, 30 days
  nextRevisionDueDate: string;
  isOverdue: boolean;
  reason: 'WEAK_ACCURACY' | 'BOOKMARKED' | 'SCHEDULED_SPACED';
}

export interface UserPersonalNote {
  id: string;
  topicId: string;
  title: string;
  content: string;
  updatedAt: string;
}
