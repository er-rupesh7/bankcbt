// TypeScript type definitions for TCS iON Indian Banking Exam Simulation Engine

export type ExamBody = 'SBI' | 'IBPS' | 'RRB' | 'RBI';
export type ExamPost = 'PO' | 'CLERK' | 'SO' | 'GRADE_B';
export type ExamStage = 'PRELIMS' | 'MAINS';
export type TimingType = 'SECTIONAL_LOCKED' | 'COMPOSITE';

export type SectionType = 
  | 'REASONING_ABILITY'
  | 'QUANTITATIVE_APTITUDE'
  | 'ENGLISH_LANGUAGE'
  | 'GENERAL_FINANCIAL_AWARENESS'
  | 'COMPUTER_KNOWLEDGE';

export type GroupType =
  | 'SEATING_ARRANGEMENT_CIRCULAR'
  | 'SEATING_ARRANGEMENT_LINEAR'
  | 'SEATING_ARRANGEMENT_PARALLEL_ROW'
  | 'PUZZLE_FLOOR_FLAT'
  | 'PUZZLE_BOX_BASED'
  | 'PUZZLE_MONTH_DAY_YEAR'
  | 'PUZZLE_UNCERTAIN_PERSONS'
  | 'DI_TABULAR'
  | 'DI_BAR_CHART'
  | 'DI_LINE_GRAPH'
  | 'DI_PIE_CHART'
  | 'DI_CASELET_ARITHMETIC'
  | 'DI_RADAR_CHART'
  | 'READING_COMPREHENSION'
  | 'CLOZE_TEST'
  | 'INPUT_OUTPUT_MACHINE'
  | 'STANDALONE_NONE';

export type QuestionDifficulty = 'EASY' | 'MODERATE' | 'HARD';

/**
 * Exact 5-State Palette Status in TCS iON:
 * 1. NOT_VISITED: Candidate has not yet visited the question (Gray badge)
 * 2. NOT_ANSWERED: Candidate has visited but not answered the question (Red badge)
 * 3. ANSWERED: Candidate answered the question (Green badge)
 * 4. MARKED_FOR_REVIEW: Marked for review without answering (Purple badge - NOT evaluated)
 * 5. ANSWERED_AND_MARKED_FOR_REVIEW: Answered & marked for review (Purple badge with Green indicator - EVALUATED in IBPS/SBI)
 */
export type PaletteState = 
  | 'NOT_VISITED'
  | 'NOT_ANSWERED'
  | 'ANSWERED'
  | 'MARKED_FOR_REVIEW'
  | 'ANSWERED_AND_MARKED_FOR_REVIEW';

export type Language = 'en' | 'hi';

export type DiagramType = 
  | 'SEATING_DIAGRAM' 
  | 'SYLLOGISM_VENN' 
  | 'DIRECTION_PATH' 
  | 'FAMILY_TREE' 
  | 'INPUT_OUTPUT_BOX' 
  | 'NONE';

export interface DiagramSpec {
  diagramType: DiagramType;
  svgCode: string;
  imagePrompt: string;
}

export interface Option {
  id: string;
  questionId: string;
  identifier: 'A' | 'B' | 'C' | 'D' | 'E';
  optionTextEn: string;
  optionTextHi?: string;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  sectionId: string;
  questionGroupId?: string | null;
  questionNumber: number; // 1 to 100
  orderInSection: number; // 1 to 35
  questionTextEn: string;
  questionTextHi?: string;
  marks: number;
  negativeMarks: number;
  topic: string;
  subTopic?: string;
  difficulty: QuestionDifficulty;
  avgIdealTimeSeconds: number;
  
  conventionalSolutionEn: string;
  conventionalSolutionHi?: string;
  shortcutTrickEn?: string;
  shortcutTrickHi?: string;
  diagramSpec?: DiagramSpec;

  options: Option[];
}

export interface ChartConfig {
  type: 'bar' | 'pie' | 'line' | 'table' | 'caselet';
  title?: string;
  categories?: string[];
  series?: { name: string; data: (number | string)[] }[];
  tableHeaders?: string[];
  tableRows?: (string | number)[][];
}

export interface QuestionGroup {
  id: string;
  sectionId: string;
  groupType: GroupType;
  title?: string;
  passageEn: string;
  passageHi?: string;
  chartConfig?: ChartConfig;
  diagramSpec?: DiagramSpec;
  masterArrangementGrid?: Record<string, unknown>;
  questions: Question[];
}

export interface Section {
  id: string;
  examId: string;
  sectionType: SectionType;
  displayName: string;
  orderIndex: number;
  durationSeconds: number; // 1200 for 20 mins Prelims sectional lock
  questionCount: number;
  maxMarks: number;
  sectionalCutoff?: number;
  questionGroups: QuestionGroup[];
  questions: Question[];
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  examBody: ExamBody;
  post: ExamPost;
  stage: ExamStage;
  year: number;
  shift?: string;
  timingType: TimingType;
  totalDurationSeconds: number; // 3600 (60 mins) or 2700 (45 mins)
  totalMarks: number;
  totalQuestions: number;
  negativeMarkRatio: number;
  sections: Section[];
}

export interface QuestionRuntimeState {
  selectedOptionId: string | null;
  paletteState: PaletteState;
  timeSpentSeconds: number;
  visitCount: number;
  isEvaluated: boolean; // Computed by TCS iON rules: true if ANSWERED or ANSWERED_AND_MARKED_FOR_REVIEW
  visitTimeline: {
    enteredAt: number;
    leftAt?: number;
    durationSeconds: number;
    actionTaken?: string;
  }[];
}

export interface SectionalScoreResult {
  sectionId: string;
  sectionType: SectionType;
  displayName: string;
  score: number;
  maxMarks: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  accuracy: number;
  cutoff: number;
  clearedCutoff: boolean;
  timeSpentSeconds: number;
}

export type TimeTrapQuadrant = 
  | 'FAST_CORRECT'
  | 'SLOW_CORRECT'
  | 'FAST_WRONG'
  | 'SLOW_WRONG_OR_SKIPPED'; // Fatal Time-Trap (>90s spent & wrong or skipped)

export interface QuestionAnalysis {
  questionId: string;
  questionNumber: number;
  sectionType: SectionType;
  topic: string;
  difficulty: QuestionDifficulty;
  timeSpentSeconds: number;
  avgIdealTimeSeconds: number;
  paletteState: PaletteState;
  userSelectedOptionId: string | null;
  correctOptionId: string;
  isCorrect: boolean;
  marksAwarded: number;
  quadrant: TimeTrapQuadrant;
  conventionalSolution: string;
  shortcutTrick?: string;
  diagramSpec?: DiagramSpec;
}

export interface ExamSubmissionResult {
  attemptId: string;
  examTitle: string;
  submittedAt: string;
  totalScore: number;
  totalMarks: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  accuracy: number;
  percentilePredictor: number;
  sectionalResults: SectionalScoreResult[];
  timeTrapAnalysis: {
    fastCorrectCount: number;
    slowCorrectCount: number;
    fastWrongCount: number;
    fatalTimeTrapsCount: number; // Slow wrong or skipped
    fatalTimeTrapQuestions: QuestionAnalysis[];
  };
  questionsAnalysis: QuestionAnalysis[];
}
