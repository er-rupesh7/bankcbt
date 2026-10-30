// Official Indian Banking Exam Catalog & Structure Definitions
import { ExamBody, ExamPost, ExamStage, TimingType, SectionType } from './exam';

export type ExamCategoryKey =
  | 'SBI_PO_PRELIMS'
  | 'SBI_PO_MAINS'
  | 'SBI_CLERK_PRELIMS'
  | 'SBI_CLERK_MAINS'
  | 'IBPS_PO_PRELIMS'
  | 'IBPS_PO_MAINS'
  | 'IBPS_CLERK_PRELIMS'
  | 'IBPS_CLERK_MAINS'
  | 'IBPS_RRB_PO_PRELIMS'
  | 'IBPS_RRB_PO_MAINS'
  | 'IBPS_RRB_CLERK_PRELIMS'
  | 'IBPS_RRB_CLERK_MAINS';

export interface SectionBlueprint {
  sectionType: SectionType;
  displayName: string;
  questionCount: number;
  durationSeconds: number; // e.g. 1200s (20m), 1500s (25m)
  maxMarks: number;
  marksPerQuestion: number;
  negativeMarksPerQuestion: number;
  isEnglishOnly?: boolean;
  isDescriptive?: boolean;
  cutoff: number;
}

export interface ExamTemplateConfig {
  key: ExamCategoryKey;
  title: string;
  examBody: ExamBody;
  post: ExamPost;
  stage: ExamStage;
  timingType: TimingType;
  totalDurationSeconds: number;
  totalQuestions: number;
  totalMarks: number;
  negativeMarkRatio: number;
  description: string;
  sections: SectionBlueprint[];
}

export const OFFICIAL_EXAM_CATALOG: Record<ExamCategoryKey, ExamTemplateConfig> = {
  // 1. SBI_PO_PRELIMS: 60m | 100 Qs | 100 Marks (40 English, 30 Quant, 30 Reasoning)
  SBI_PO_PRELIMS: {
    key: 'SBI_PO_PRELIMS',
    title: 'SBI PO Prelims (Probationary Officer)',
    examBody: 'SBI',
    post: 'PO',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 3600, // 60 mins
    totalQuestions: 100,
    totalMarks: 100,
    negativeMarkRatio: 0.25,
    description: 'SBI PO Prelims: English (40 Qs/40M/20m), Quantitative Aptitude (30 Qs/30M/20m), Reasoning Ability (30 Qs/30M/20m).',
    sections: [
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 40,
        durationSeconds: 1200, // 20 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 12.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 30,
        durationSeconds: 1200, // 20 mins
        maxMarks: 30,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 10.0,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 30,
        durationSeconds: 1200, // 20 mins
        maxMarks: 30,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 10.5,
      },
    ],
  },

  // 2. SBI_PO_MAINS: 210m | 170 MCQs + 3 Descriptive | 230 Marks
  SBI_PO_MAINS: {
    key: 'SBI_PO_MAINS',
    title: 'SBI PO Mains Exam',
    examBody: 'SBI',
    post: 'PO',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 12600, // 210 mins (50m + 45m + 45m + 40m + 30m)
    totalQuestions: 173,
    totalMarks: 230,
    negativeMarkRatio: 0.25,
    description: 'SBI PO Mains: Reasoning & Computer (40 Qs/60M/50m), Data Analysis (30 Qs/60M/45m), General/Banking Awareness (60 Qs/60M/45m), English (40 Qs/20M/40m), Descriptive (3 Qs/30M/30m).',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning & Computer Aptitude',
        questionCount: 40,
        durationSeconds: 3000, // 50 mins
        maxMarks: 60,
        marksPerQuestion: 1.5,
        negativeMarksPerQuestion: 0.375, // 0.25 * 1.5
        cutoff: 18.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Data Analysis & Interpretation',
        questionCount: 30,
        durationSeconds: 2700, // 45 mins
        maxMarks: 60,
        marksPerQuestion: 2.0,
        negativeMarksPerQuestion: 0.50, // 0.25 * 2.0
        cutoff: 16.0,
      },
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General/Economy/Banking Awareness',
        questionCount: 60,
        durationSeconds: 2700, // 45 mins
        maxMarks: 60,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 19.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 40,
        durationSeconds: 2400, // 40 mins
        maxMarks: 20,
        marksPerQuestion: 0.5,
        negativeMarksPerQuestion: 0.125, // 0.25 * 0.5
        isEnglishOnly: true,
        cutoff: 8.0,
      },
    ],
  },

  // 3. SBI_CLERK_PRELIMS: 60m | 100 Qs | 100 Marks (30 English, 35 Numerical, 35 Reasoning)
  SBI_CLERK_PRELIMS: {
    key: 'SBI_CLERK_PRELIMS',
    title: 'SBI Clerk (Junior Associate) Prelims',
    examBody: 'SBI',
    post: 'CLERK',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 3600,
    totalQuestions: 100,
    totalMarks: 100,
    negativeMarkRatio: 0.25,
    description: 'SBI Clerk Prelims: English (30 Qs/30M/20m), Numerical Ability (35 Qs/35M/20m), Reasoning Ability (35 Qs/35M/20m).',
    sections: [
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 30,
        durationSeconds: 1200,
        maxMarks: 30,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 11.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Numerical Ability',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 35,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 13.0,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 35,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 14.0,
      },
    ],
  },

  // 4. SBI_CLERK_MAINS: 160m | 190 Qs | 200 Marks
  SBI_CLERK_MAINS: {
    key: 'SBI_CLERK_MAINS',
    title: 'SBI Clerk (Junior Associate) Mains',
    examBody: 'SBI',
    post: 'CLERK',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 9600, // 160 mins (35m + 35m + 45m + 45m)
    totalQuestions: 190,
    totalMarks: 200,
    negativeMarkRatio: 0.25,
    description: 'SBI Clerk Mains: General/Financial Awareness (50 Qs/50M/35m), General English (40 Qs/40M/35m), Quantitative Aptitude (50 Qs/50M/45m), Reasoning & Computer (50 Qs/60M [1.2/Q]/45m).',
    sections: [
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General / Financial Awareness',
        questionCount: 50,
        durationSeconds: 2100, // 35 mins
        maxMarks: 50,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 18.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'General English',
        questionCount: 40,
        durationSeconds: 2100, // 35 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 14.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 50,
        durationSeconds: 2700, // 45 mins
        maxMarks: 50,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 17.5,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability & Computer Aptitude',
        questionCount: 50,
        durationSeconds: 2700, // 45 mins
        maxMarks: 60,
        marksPerQuestion: 1.2,
        negativeMarksPerQuestion: 0.30, // 0.25 * 1.2
        cutoff: 19.0,
      },
    ],
  },

  // 5. IBPS_PO_PRELIMS: 60m | 100 Qs | 100 Marks (30 English [1.0/Q], 35 Quant [0.857/Q], 35 Reasoning [1.143/Q])
  IBPS_PO_PRELIMS: {
    key: 'IBPS_PO_PRELIMS',
    title: 'IBPS PO / MT Prelims Exam',
    examBody: 'IBPS',
    post: 'PO',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 3600,
    totalQuestions: 100,
    totalMarks: 100,
    negativeMarkRatio: 0.25,
    description: 'IBPS PO Prelims: English (30 Qs, 30M [1.0/Q], 20m), Quantitative Aptitude (35 Qs, 30M [0.857/Q], 20m), Reasoning Ability (35 Qs, 40M [1.143/Q], 20m).',
    sections: [
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 30,
        durationSeconds: 1200,
        maxMarks: 30,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 9.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 30,
        marksPerQuestion: 0.857,
        negativeMarksPerQuestion: 0.214, // 0.25 * 0.857
        cutoff: 10.0,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 40,
        marksPerQuestion: 1.143,
        negativeMarksPerQuestion: 0.286, // 0.25 * 1.143
        cutoff: 12.0,
      },
    ],
  },

  // 6. IBPS_PO_MAINS: 190m | 170 MCQs + 2 Descriptive | 225 Marks
  IBPS_PO_MAINS: {
    key: 'IBPS_PO_MAINS',
    title: 'IBPS PO Mains Exam',
    examBody: 'IBPS',
    post: 'PO',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 11400, // 190 mins (45m + 35m + 35m + 45m + 30m)
    totalQuestions: 172,
    totalMarks: 225,
    negativeMarkRatio: 0.25,
    description: 'IBPS PO Mains: Reasoning & Computer (40 Qs/60M [1.5/Q]/45m), General/Banking/Digital Awareness (50 Qs/60M [1.2/Q]/35m), English (40 Qs/20M [0.5/Q]/35m), Data Analysis (40 Qs/60M [1.5/Q]/45m), Descriptive Paper (2 Qs/25M/30m).',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning & Computer Aptitude',
        questionCount: 40,
        durationSeconds: 2700, // 45 mins
        maxMarks: 60,
        marksPerQuestion: 1.5,
        negativeMarksPerQuestion: 0.375,
        cutoff: 16.0,
      },
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General/Economy/Banking/Digital Awareness',
        questionCount: 50,
        durationSeconds: 2100, // 35 mins
        maxMarks: 60,
        marksPerQuestion: 1.2,
        negativeMarksPerQuestion: 0.30,
        cutoff: 15.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 40,
        durationSeconds: 2100, // 35 mins
        maxMarks: 20,
        marksPerQuestion: 0.5,
        negativeMarksPerQuestion: 0.125,
        isEnglishOnly: true,
        cutoff: 8.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Data Analysis & Interpretation',
        questionCount: 40,
        durationSeconds: 2700, // 45 mins
        maxMarks: 60,
        marksPerQuestion: 1.5,
        negativeMarksPerQuestion: 0.375,
        cutoff: 15.5,
      },
    ],
  },

  // 7. IBPS_CLERK_PRELIMS: 60m | 100 Qs | 100 Marks
  IBPS_CLERK_PRELIMS: {
    key: 'IBPS_CLERK_PRELIMS',
    title: 'IBPS Clerk (CRP Clerical) Prelims',
    examBody: 'IBPS',
    post: 'CLERK',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 3600,
    totalQuestions: 100,
    totalMarks: 100,
    negativeMarkRatio: 0.25,
    description: 'IBPS Clerk Prelims: English (30 Qs/30M/20m), Numerical Ability (35 Qs/35M/20m), Reasoning Ability (35 Qs/35M/20m).',
    sections: [
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 30,
        durationSeconds: 1200,
        maxMarks: 30,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 12.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Numerical Ability',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 35,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 13.5,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 35,
        durationSeconds: 1200,
        maxMarks: 35,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 14.5,
      },
    ],
  },

  // 8. IBPS_CLERK_MAINS: 125m | 160 Qs | 200 Marks
  IBPS_CLERK_MAINS: {
    key: 'IBPS_CLERK_MAINS',
    title: 'IBPS Clerk Mains Exam',
    examBody: 'IBPS',
    post: 'CLERK',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 7500, // 125 mins (20m + 35m + 35m + 35m)
    totalQuestions: 160,
    totalMarks: 200,
    negativeMarkRatio: 0.25,
    description: 'IBPS Clerk Mains: General/Financial Awareness (40 Qs/50M [1.25/Q]/20m), General English (40 Qs/40M [1.0/Q]/35m), Reasoning & Computer (40 Qs/60M [1.5/Q]/35m), Quantitative Aptitude (40 Qs/50M [1.25/Q]/35m).',
    sections: [
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General / Financial Awareness',
        questionCount: 40,
        durationSeconds: 1200, // 20 mins
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125, // 0.25 * 1.25
        cutoff: 16.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'General English',
        questionCount: 40,
        durationSeconds: 2100, // 35 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 13.0,
      },
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability & Computer Aptitude',
        questionCount: 40,
        durationSeconds: 2100, // 35 mins
        maxMarks: 60,
        marksPerQuestion: 1.5,
        negativeMarksPerQuestion: 0.375, // 0.25 * 1.5
        cutoff: 17.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 40,
        durationSeconds: 2100, // 35 mins
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125, // 0.25 * 1.25
        cutoff: 15.0,
      },
    ],
  },

  // 9. IBPS_RRB_PO_PRELIMS: 45m | 80 Qs | 80 Marks (40 Reasoning [25m], 40 Quant [20m])
  IBPS_RRB_PO_PRELIMS: {
    key: 'IBPS_RRB_PO_PRELIMS',
    title: 'IBPS RRB Officer Scale-I (PO) Prelims',
    examBody: 'RRB',
    post: 'PO',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 2700, // 45 mins
    totalQuestions: 80,
    totalMarks: 80,
    negativeMarkRatio: 0.25,
    description: 'RRB PO Prelims: Reasoning Ability (40 Qs, 40 Marks [1.0/Q], 25 mins), Quantitative Aptitude (40 Qs, 40 Marks [1.0/Q], 20 mins). Total 45 minutes.',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 40,
        durationSeconds: 1500, // 25 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 16.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 40,
        durationSeconds: 1200, // 20 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 15.0,
      },
    ],
  },

  // 10. IBPS_RRB_CLERK_PRELIMS: 45m | 80 Qs | 80 Marks (40 Reasoning [25m], 40 Numerical [20m])
  IBPS_RRB_CLERK_PRELIMS: {
    key: 'IBPS_RRB_CLERK_PRELIMS',
    title: 'IBPS RRB Office Assistant (Clerk) Prelims',
    examBody: 'RRB',
    post: 'CLERK',
    stage: 'PRELIMS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 2700, // 45 mins
    totalQuestions: 80,
    totalMarks: 80,
    negativeMarkRatio: 0.25,
    description: 'RRB Clerk Prelims: Reasoning Ability (40 Qs, 40 Marks [1.0/Q], 25 mins), Numerical Ability (40 Qs, 40 Marks [1.0/Q], 20 mins). High attempt rate paper.',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 40,
        durationSeconds: 1500, // 25 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 17.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Numerical Ability',
        questionCount: 40,
        durationSeconds: 1200, // 20 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 17.0,
      },
    ],
  },

  // 11. IBPS_RRB_PO_MAINS: 120m | 200 Qs | 200 Marks
  IBPS_RRB_PO_MAINS: {
    key: 'IBPS_RRB_PO_MAINS',
    title: 'IBPS RRB Officer Scale-I (PO) Mains',
    examBody: 'RRB',
    post: 'PO',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 7200, // 120 mins (30m + 15m + 15m + 30m + 30m)
    totalQuestions: 200,
    totalMarks: 200,
    negativeMarkRatio: 0.25,
    description: 'RRB PO Mains: Reasoning (40 Qs/50M [1.25/Q]/30m), Computer Knowledge (40 Qs/20M [0.50/Q]/15m), General Awareness (40 Qs/40M [1.0/Q]/15m), English/Hindi (40 Qs/40M [1.0/Q]/30m), Quantitative Aptitude (40 Qs/50M [1.25/Q]/30m).',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 40,
        durationSeconds: 1800, // 30 mins
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125,
        cutoff: 15.0,
      },
      {
        sectionType: 'COMPUTER_KNOWLEDGE',
        displayName: 'Computer Knowledge',
        questionCount: 40,
        durationSeconds: 900, // 15 mins
        maxMarks: 20,
        marksPerQuestion: 0.50,
        negativeMarksPerQuestion: 0.125,
        cutoff: 10.5,
      },
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General Awareness',
        questionCount: 40,
        durationSeconds: 900, // 15 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 13.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 40,
        durationSeconds: 1800, // 30 mins
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 12.0,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Quantitative Aptitude',
        questionCount: 40,
        durationSeconds: 1800, // 30 mins
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125,
        cutoff: 14.0,
      },
    ],
  },

  // 12. IBPS_RRB_CLERK_MAINS: 120m | 200 Qs | 200 Marks
  IBPS_RRB_CLERK_MAINS: {
    key: 'IBPS_RRB_CLERK_MAINS',
    title: 'IBPS RRB Office Assistant (Clerk) Mains',
    examBody: 'RRB',
    post: 'CLERK',
    stage: 'MAINS',
    timingType: 'SECTIONAL_LOCKED',
    totalDurationSeconds: 7200,
    totalQuestions: 200,
    totalMarks: 200,
    negativeMarkRatio: 0.25,
    description: 'RRB Clerk Mains: Reasoning (40 Qs/50M [1.25/Q]/30m), Computer Knowledge (40 Qs/20M [0.50/Q]/15m), General Awareness (40 Qs/40M [1.0/Q]/15m), English (40 Qs/40M [1.0/Q]/30m), Numerical Ability (40 Qs/50M [1.25/Q]/30m).',
    sections: [
      {
        sectionType: 'REASONING_ABILITY',
        displayName: 'Reasoning Ability',
        questionCount: 40,
        durationSeconds: 1800,
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125,
        cutoff: 16.5,
      },
      {
        sectionType: 'COMPUTER_KNOWLEDGE',
        displayName: 'Computer Knowledge',
        questionCount: 40,
        durationSeconds: 900,
        maxMarks: 20,
        marksPerQuestion: 0.50,
        negativeMarksPerQuestion: 0.125,
        cutoff: 12.0,
      },
      {
        sectionType: 'GENERAL_FINANCIAL_AWARENESS',
        displayName: 'General Awareness',
        questionCount: 40,
        durationSeconds: 900,
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        cutoff: 14.0,
      },
      {
        sectionType: 'ENGLISH_LANGUAGE',
        displayName: 'English Language',
        questionCount: 40,
        durationSeconds: 1800,
        maxMarks: 40,
        marksPerQuestion: 1.0,
        negativeMarksPerQuestion: 0.25,
        isEnglishOnly: true,
        cutoff: 13.5,
      },
      {
        sectionType: 'QUANTITATIVE_APTITUDE',
        displayName: 'Numerical Ability',
        questionCount: 40,
        durationSeconds: 1800,
        maxMarks: 50,
        marksPerQuestion: 1.25,
        negativeMarksPerQuestion: 0.3125,
        cutoff: 15.5,
      },
    ],
  },
};
