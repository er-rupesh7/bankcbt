// TypeScript Type Definitions for Universal BPSC TRE Examination Module
// Extensible for Computer Science (Class 11-12), Mathematics TGT, Science TGT

export type BPSCSubject = 
  | 'COMPUTER_SCIENCE_11_12'
  | 'MATHEMATICS_TGT'
  | 'SCIENCE_TGT';

export type BPSCTREVersion = 
  | 'TRE_1_0' // Advt. 26/2023 (Aug 2023)
  | 'TRE_2_0' // Advt. 27/2023 (Dec 2023)
  | 'TRE_3_0' // Advt. 22/2024 (July 2024 Re-Exam)
  | 'TRE_4_0'; // Upcoming Target

export type BPSCVerificationStatus = 
  | 'OFFICIALLY_VERIFIED' // Original question and official BPSC answer key verified
  | 'PAPER_VERIFIED'      // Question verified from original booklet, provisional/audit verified
  | 'MEMORY_BASED';       // Reconstructed from candidate recollections (explicitly labeled)

export type BPSCMockMode = 
  | 'PYQ_MOCK'           // Authentic PYQs only
  | 'FULL_LENGTH_TRE4'   // Full 150Q BPSC TRE 4.0 Mock (Part 1 30Q + Part 2 40Q + Part 3 80Q)
  | 'SUBJECT_SPECIFIC'   // Computer Science (80Q), GS (40Q), or Language (30Q)
  | 'ADAPTIVE'           // Diagnostic targeting candidate weak units
  | 'EXPECTED_TRE4';     // High-yield syllabus-mapped practice mock with disclaimer

export type BPSCQuestionSource = 'AUTHENTIC_PYQ' | 'PATTERN_GENERATED';

// 12 Mandatory Official Units for Class 11-12 Computer Science
export type BPSCComputerScienceUnit = 
  | 'UNIT_1_COMPUTER_FUNDAMENTALS'
  | 'UNIT_2_DIGITAL_LOGIC'
  | 'UNIT_3_COA'
  | 'UNIT_4_OPERATING_SYSTEMS'
  | 'UNIT_5_DATA_STRUCTURES_ALGORITHMS'
  | 'UNIT_6_PROGRAMMING_LANGUAGES'
  | 'UNIT_7_DBMS_SQL'
  | 'UNIT_8_COMPUTER_NETWORKS'
  | 'UNIT_9_SOFTWARE_ENGINEERING'
  | 'UNIT_10_WEB_TECHNOLOGIES'
  | 'UNIT_11_TOC_SYSTEM_SOFTWARE'
  | 'UNIT_12_EMERGING_TECH_SECURITY';

export interface BPSCOption {
  id: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  identifier: 'A' | 'B' | 'C' | 'D' | 'E';
  optionTextEn: string;
  optionTextHi: string;
  isCorrect?: boolean;
}

export interface BPSCQuestionMetadata {
  id: string;
  questionNumber?: number;
  subject: BPSCSubject;
  section: 'LANGUAGE' | 'GENERAL_STUDIES' | 'SUBJECT_CORE';
  unit?: BPSCComputerScienceUnit | string;
  unitTitleEn?: string;
  unitTitleHi?: string;
  topic: string;
  subtopic?: string;
  sourceType: BPSCQuestionSource;
  treVersion?: BPSCTREVersion;
  examDate?: string;
  shift?: string;
  bookletSeries?: string;
  verificationStatus: BPSCVerificationStatus;
  difficulty: 'EASY' | 'MODERATE' | 'HARD';
  officialAnswerKeyVerified: boolean;
  sourceDocumentRef?: string;
  questionTextEn: string;
  questionTextHi: string;
  options: BPSCOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D' | 'E';
  explanationEn: string;
  explanationHi: string;
  distractorRationale?: {
    optionDWhyCorrectOrIncorrect?: string; // Analysis of "More than one of the above"
    optionEWhyCorrectOrIncorrect?: string; // Analysis of "None of the above"
  };
}

export interface BPSCUnitCoverage {
  unitKey: BPSCComputerScienceUnit | string;
  unitTitle: string;
  totalPYQs: number;
  totalGenerated: number;
  easyCount: number;
  moderateCount: number;
  hardCount: number;
  coveragePercentage: number;
}

export interface BPSCExamProfile {
  title: string;
  treVersion: BPSCTREVersion;
  subject: BPSCSubject;
  mode: BPSCMockMode;
  totalQuestions: number;
  totalDurationSeconds: number; // 9000 for 150 mins
  totalMarks: number;
  negativeMarkRatio: number; // 1/3 for TRE 4.0, 0.0 for historical
  penaltyForBlank: number; // 1/3 for TRE 4.0 blank response penalty
  isTRE4MarkingScheme: boolean;
  isOptionENotAnswered: boolean;
  qualifyingMarksPart1: number; // 9.0 (30% of 30)
  meritMarksTotal: number; // 120 (Part 2 40 + Part 3 80)
  sections: {
    partNumber: 1 | 2 | 3;
    displayName: string;
    sectionType: 'BPSC_LANGUAGE' | 'BPSC_GENERAL_STUDIES' | 'BPSC_COMPUTER_SCIENCE' | 'BPSC_MATHEMATICS' | 'BPSC_SCIENCE';
    questionCount: number;
    maxMarks: number;
    isQualifyingOnly: boolean;
  }[];
}
