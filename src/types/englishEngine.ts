// src/types/englishEngine.ts
// TypeScript definitions for the Unlimited BPSC TRE 4.0 English Question Generation Engine

export type EnglishQuestionType =
  | 'SINGLE_CORRECT_MCQ'
  | 'ERROR_DETECTION'
  | 'FILL_IN_THE_BLANKS'
  | 'SENTENCE_IMPROVEMENT'
  | 'CORRECT_INCORRECT_IDENTIFICATION'
  | 'VOCABULARY_MCQ'
  | 'SENTENCE_TRANSFORMATION'
  | 'ACTIVE_PASSIVE_TRANSFORMATION'
  | 'DIRECT_INDIRECT_TRANSFORMATION'
  | 'READING_COMPREHENSION'
  | 'MIXED_GRAMMAR';

export type EnglishDifficulty =
  | 'BEGINNER'
  | 'BASIC'
  | 'INTERMEDIATE'
  | 'BPSC_EXAM'
  | 'ADVANCED_CHALLENGE';

export type EnglishPracticeMode =
  | 'LEARNING'       // Immediate explanation after each answer
  | 'PRACTICE'       // Feedback after submission
  | 'TEST'           // No immediate hints; results at the end
  | 'TIMED_DRILL'    // Configurable time limit
  | 'WEAK_TOPIC'     // Generate questions from mistakes
  | 'REVISION_DRILL'; // Test previously learned concepts

export type EnglishQuestionProvenance =
  | 'OFFICIAL_PYQ'
  | 'ADAPTED_PYQ'
  | 'BPSC_STYLE'
  | 'AI_GENERATED';

export interface EnglishQuestionOption {
  identifier: 'A' | 'B' | 'C' | 'D' | 'E';
  textEn: string;
  textHi?: string;
  isCorrect: boolean;
}

export interface GeneratedEnglishQuestion {
  questionId: string;
  chapterId: string;
  subtopicId: string;
  chapterTitleEn: string;
  subtopicTitleEn: string;
  questionType: EnglishQuestionType;
  difficulty: EnglishDifficulty;
  questionText: string;
  passageText?: string;
  options: EnglishQuestionOption[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  explanationEn: string;
  explanationHi?: string;
  ruleTested: string;
  examTrapNote?: string;
  provenance: EnglishQuestionProvenance;
  pyqSource?: {
    exam: string;
    shift: string;
    questionNumber: number;
    year: string;
  };
  createdTimestamp: number;
}

export interface EnglishGenerationRequest {
  chapterId?: string;
  subtopicId?: string;
  moduleKey?: string;
  count: number;
  difficulty?: EnglishDifficulty;
  mode?: EnglishPracticeMode;
  questionTypes?: EnglishQuestionType[];
  excludeQuestionIds?: string[];
}

export interface EnglishGenerationResponse {
  questions: GeneratedEnglishQuestion[];
  totalAvailable: number;
  chapterId?: string;
  subtopicId?: string;
  difficulty: EnglishDifficulty;
  mode: EnglishPracticeMode;
  timestamp: number;
}

export interface EnglishQuestionHistoryItem {
  questionId: string;
  chapterId: string;
  subtopicId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E';
  isCorrect: boolean;
  timeTakenSeconds: number;
  timestamp: number;
}
