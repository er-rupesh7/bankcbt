// src/types/topicPractice.ts

export type TopicCategory = 'QUANT' | 'REASONING' | 'LANGUAGE' | 'GA_COMPUTER';

export type DifficultyLevel =
  | 'LEVEL_1_CLERK_PRE'
  | 'LEVEL_2_PO_PRE'
  | 'LEVEL_3_MAINS';

export type PracticeMode = 'LEARN' | 'DRILL';

export type ContentLanguage = 'EN' | 'HI' | 'BILINGUAL';

export interface FormulaRule {
  id?: string;
  title: string;
  latexFormula: string;
  explanationEn: string;
  explanationHi: string;
  exampleEn?: string;
  exampleHi?: string;
}

export interface ShortcutTrick {
  id?: string;
  trickName: string;
  conventionalTime: string; // e.g., "90s"
  shortcutTime: string;     // e.g., "20s"
  conventionalMethodEn: string;
  conventionalMethodHi: string;
  shortcutStepsEn: string;
  shortcutStepsHi: string;
  keyRule?: string;
}

export interface CommonTrap {
  id?: string;
  trapTitle: string;
  mistakeStudentsMake: string;
  howToAvoid: string;
  exampleTrap?: string;
}

export interface SolvedExample {
  id?: string;
  level: 'Easy' | 'Moderate' | 'Mains';
  questionEn: string;
  questionHi: string;
  conventionalSolEn: string;
  conventionalSolHi: string;
  shortcutTrickEn: string;
  shortcutTrickHi: string;
  finalAnswer: string;
}

export interface ConceptGuideData {
  topicSlug: string;
  coreTheoryEn: string;
  coreTheoryHi: string;
  formulasAndRules: FormulaRule[];
  shortcutTricks: ShortcutTrick[];
  commonTraps: CommonTrap[];
  solvedExamples: SolvedExample[];
  conceptSvgDiagram?: string;
}

export interface TopicOptionItem {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  textEn: string;
  textHi?: string;
}

export interface TopicPracticeQuestionData {
  id: string;
  topicSlug: string;
  difficulty: DifficultyLevel;
  examTag: string;          // e.g., "SBI PO Prelims Style"
  conceptTag: string;       // e.g., "Successive Discount vs Markup"
  commonContextEn?: string;
  commonContextHi?: string;
  questionEn: string;
  questionHi: string;
  options: TopicOptionItem[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  conventionalSolEn: string;
  conventionalSolHi: string;
  examShortcutEn: string;
  examShortcutHi: string;
  solutionSvgDiagram?: string;
  idealTimeSeconds: number;
}

export interface SyllabusTopicConfig {
  slug: string;
  category: TopicCategory;
  clusterName: string;
  titleEn: string;
  titleHi: string;
  icon?: string;
  examRelevance: string[]; // e.g. ["SBI_PO", "SBI_CLERK", "IBPS_PO", "IBPS_CLERK", "RRB_PO", "RRB_CLERK"]
  weightagePrelims: string; // e.g. "3-5 Marks"
  weightageMains: string;   // e.g. "5-10 Marks"
  descriptionEn: string;
  descriptionHi: string;
}

export interface UserTopicMastery {
  topicSlug: string;
  conceptCompleted: boolean;
  questionsAttempted: number;
  questionsCorrect: number;
  level1Attempted: number;
  level1Correct: number;
  level2Attempted: number;
  level2Correct: number;
  level3Attempted: number;
  level3Correct: number;
  avgTimeSeconds: number;
  masteryScore: number; // 0 to 100
  lastPracticedAt?: number;
  bookmarkedQuestionIds: string[];
  wrongQuestionIds: string[];
}
