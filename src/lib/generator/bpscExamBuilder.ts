// Official BPSC TRE Master Exam Builder & Multi-Subject Orchestrator
// Conforms to official BPSC TRE Regulations (150 Questions, 150 Minutes Composite, Zero Negative Marking)
// Seamlessly plugs into useExamStore and the CBT test arena

import { Exam, Section, Question, Option, QuestionDifficulty } from '@/types/exam';
import { BPSCMockMode, BPSCSubject, BPSCTREVersion, BPSCQuestionMetadata } from '@/types/bpsc';
import { AUTHENTIC_BPSC_PYQ_DATABASE, queryBPSCPYQs } from '@/data/bpsc/bpscPyqDatabase';
import { getDistinctBPSCLanguageQuestion } from '@/data/bpsc/bpscLanguageBank';
import { getDistinctBPSCGSQuestion } from '@/data/bpsc/bpscGSBank';
import { getDistinctBPSCCSQuestion } from '@/data/bpsc/bpscCSBank';
import {
  generateCppOutputQuestion,
  generateSQLQueryQuestion,
  generateDigitalLogicQuestion,
  generateDSAComplexityQuestion,
  generateOSQuestion,
  generateBPSCLanguageQuestion,
  generateBPSCGSQuestion,
} from './bpscQuestionEngine';
import { BPSC_CS_11_12_SYLLABUS } from '@/data/bpsc/bpscTaxonomy';

export interface BPSCBuildExamOptions {
  mode: BPSCMockMode;
  treVersion?: BPSCTREVersion;
  subject?: BPSCSubject;
  seed?: number;
  mockNumber?: number;
  weakUnits?: string[];
  filterTopic?: string;
}

export function buildOfficialBPSCExam(options: BPSCBuildExamOptions): Exam {
  const {
    mode = 'FULL_LENGTH_TRE4',
    treVersion = 'TRE_4_0',
    subject = 'COMPUTER_SCIENCE_11_12',
    seed = 20251120,
    mockNumber = 1,
    weakUnits = [],
    filterTopic,
  } = options;

  let examTitle = `BPSC TRE 4.0 - Computer Science (Class 11-12) Full Mock #${mockNumber}`;
  let stageName: 'TRE_1_0' | 'TRE_2_0' | 'TRE_3_0' | 'TRE_4_0' = 'TRE_4_0';
  let totalDuration = 9000; // 150 minutes (2.5 hours)
  let totalQuestions = 150;
  let totalMarks = 150.0;

  if (mode === 'PYQ_MOCK') {
    if (treVersion === 'TRE_1_0') {
      examTitle = 'BPSC TRE 1.0 (26 Aug 2023) Official Paper - CS (Class 11-12)';
      stageName = 'TRE_1_0';
      totalQuestions = 120; // Official TRE 1.0 paper had 120 Qs (40 GS + 80 CS)
      totalMarks = 120.0;
      totalDuration = 7200; // 120 minutes
    } else if (treVersion === 'TRE_2_0') {
      examTitle = 'BPSC TRE 2.0 (15 Dec 2023) Official Paper - CS (Class 11-12)';
      stageName = 'TRE_2_0';
      totalQuestions = 150;
      totalMarks = 150.0;
      totalDuration = 9000;
    } else if (treVersion === 'TRE_3_0') {
      examTitle = 'BPSC TRE 3.0 (22 July 2024 Re-Exam) Official Paper - CS (Class 11-12)';
      stageName = 'TRE_3_0';
      totalQuestions = 150;
      totalMarks = 150.0;
      totalDuration = 9000;
    } else {
      examTitle = 'BPSC TRE Combined Authentic Previous Year Questions Mock';
    }
  } else if (mode === 'SUBJECT_SPECIFIC') {
    examTitle = 'BPSC TRE 4.0 - Computer Science Core Section Drill (80 Qs)';
    totalQuestions = 80;
    totalMarks = 80.0;
    totalDuration = 4800; // 80 mins
  } else if (mode === 'ADAPTIVE') {
    examTitle = 'BPSC TRE 4.0 - Adaptive Diagnostic Mock (Weakness Targeted)';
  } else if (mode === 'EXPECTED_TRE4') {
    examTitle = `BPSC TRE 4.0 - Expected High-Yield Full Mock #${mockNumber}`;
  }

  const examId = `exam_bpsc_${treVersion.toLowerCase()}_${mode.toLowerCase()}_${seed}`;

  // BPSC TRE 4.0 Response Evaluation Profile Rules:
  // - Correct A/B/C/D: +1.0
  // - Incorrect A/B/C/D: -1/3 (-0.333...)
  // - Option E ("Not Answered"): 0.0
  // - Blank / Unselected: -1/3 penalty (-0.333...)
  const isTRE4 =
    treVersion === 'TRE_4_0' ||
    mode === 'FULL_LENGTH_TRE4' ||
    mode === 'EXPECTED_TRE4' ||
    mode === 'ADAPTIVE' ||
    mode === 'SUBJECT_SPECIFIC';

  const tre4NegativeRatio = 1 / 3;
  const tre4BlankPenalty = 1 / 3;

  // Helper: Convert BPSCQuestionMetadata to standard CBT Question interface
  function convertToCBTQuestion(
    meta: BPSCQuestionMetadata,
    globalQNum: number,
    orderInSection: number,
    sectionId: string
  ): Question {
    let cbtOptions: Option[];

    if (isTRE4) {
      // In BPSC TRE 4.0:
      // 1. Every question must have 5 options: A, B, C, D, E.
      // 2. Options A, B, C, D represent the subject choices / distractors.
      // 3. Option E is explicitly "Not Answered" / "अनुत्तरित प्रश्न".
      // 4. Correct answer is always one of A, B, C, or D.
      const optionsAtoD = meta.options.filter((opt) => opt.identifier !== 'E');
      const baseOptions: Option[] = optionsAtoD.map((opt) => ({
        id: opt.id,
        questionId: meta.id,
        identifier: opt.identifier,
        optionTextEn: opt.optionTextEn,
        optionTextHi: opt.optionTextHi,
        isCorrect: opt.identifier === meta.correctOptionId,
      }));

      // Explicit Option E: "Not Answered"
      cbtOptions = [
        ...baseOptions,
        {
          id: 'E',
          questionId: meta.id,
          identifier: 'E',
          optionTextEn: 'Not Answered',
          optionTextHi: 'अनुत्तरित प्रश्न',
          isCorrect: false,
        },
      ];
    } else {
      // Historical papers (TRE 1.0, 2.0, 3.0) retain original 5 options
      cbtOptions = meta.options.map((opt) => ({
        id: opt.id,
        questionId: meta.id,
        identifier: opt.identifier,
        optionTextEn: opt.optionTextEn,
        optionTextHi: opt.optionTextHi,
        isCorrect: opt.identifier === meta.correctOptionId,
      }));
    }

    return {
      id: meta.id,
      sectionId,
      questionNumber: globalQNum,
      orderInSection,
      questionTextEn: meta.questionTextEn,
      questionTextHi: meta.questionTextHi,
      marks: 1.0,
      negativeMarks: isTRE4 ? tre4NegativeRatio : 0.0,
      penaltyForBlank: isTRE4 ? tre4BlankPenalty : 0.0,
      isTRE4Evaluation: isTRE4,
      isOptionENotAnswered: isTRE4,
      topic: meta.topic,
      subTopic: meta.subtopic || meta.unitTitleEn,
      difficulty: meta.difficulty as QuestionDifficulty,
      avgIdealTimeSeconds: 50,
      conventionalSolutionEn: meta.explanationEn,
      conventionalSolutionHi: meta.explanationHi,
      shortcutTrickEn: meta.distractorRationale?.optionDWhyCorrectOrIncorrect
        ? `Option D Rationale: ${meta.distractorRationale.optionDWhyCorrectOrIncorrect}`
        : undefined,
      options: cbtOptions,
    };
  }

  // -------------------------------------------------------------------------
  // SECTION 1: Part 1 - Language Section (Qualifying, 30 Questions)
  // -------------------------------------------------------------------------
  const langSecId = `sec_bpsc_lang_${examId}`;
  const langQuestions: Question[] = [];
  let globalIndex = 1;

  if (mode !== 'SUBJECT_SPECIFIC' && !(mode === 'PYQ_MOCK' && treVersion === 'TRE_1_0')) {
    // Collect PYQ Language questions first if in PYQ mode
    const pyqLang = queryBPSCPYQs({ section: 'LANGUAGE', treVersion: mode === 'PYQ_MOCK' ? treVersion : undefined });

    for (let i = 1; i <= 30; i++) {
      let qMeta: BPSCQuestionMetadata;
      if (pyqLang[i - 1] && mode === 'PYQ_MOCK') {
        qMeta = pyqLang[i - 1];
      } else {
        qMeta = getDistinctBPSCLanguageQuestion(i, seed + mockNumber * 101);
      }
      langQuestions.push(convertToCBTQuestion(qMeta, globalIndex, i, langSecId));
      globalIndex++;
    }
  }

  const languageSection: Section = {
    id: langSecId,
    examId,
    sectionType: 'BPSC_LANGUAGE',
    displayName: 'Part 1: Language (Qualifying - 30 Marks)',
    orderIndex: 0,
    durationSeconds: totalDuration,
    questionCount: langQuestions.length,
    maxMarks: langQuestions.length * 1.0,
    sectionalCutoff: 9.0, // Minimum 30% to qualify
    questionGroups: [],
    questions: langQuestions,
  };

  // -------------------------------------------------------------------------
  // SECTION 2: Part 2 - General Studies (40 Questions, 40 Marks)
  // -------------------------------------------------------------------------
  const gsSecId = `sec_bpsc_gs_${examId}`;
  const gsQuestions: Question[] = [];
  let gsOrder = 1;

  if (mode !== 'SUBJECT_SPECIFIC') {
    const pyqGS = queryBPSCPYQs({ section: 'GENERAL_STUDIES', treVersion: mode === 'PYQ_MOCK' ? treVersion : undefined });

    for (let i = 1; i <= 40; i++) {
      let qMeta: BPSCQuestionMetadata;
      if (pyqGS[i - 1] && mode === 'PYQ_MOCK') {
        qMeta = pyqGS[i - 1];
      } else {
        qMeta = getDistinctBPSCGSQuestion(i, seed + mockNumber * 101);
      }
      gsQuestions.push(convertToCBTQuestion(qMeta, globalIndex, gsOrder, gsSecId));
      globalIndex++;
      gsOrder++;
    }
  }

  const gsSection: Section = {
    id: gsSecId,
    examId,
    sectionType: 'BPSC_GENERAL_STUDIES',
    displayName: 'Part 2: General Studies (40 Marks)',
    orderIndex: langQuestions.length > 0 ? 1 : 0,
    durationSeconds: totalDuration,
    questionCount: gsQuestions.length,
    maxMarks: gsQuestions.length * 1.0,
    sectionalCutoff: 0.0,
    questionGroups: [],
    questions: gsQuestions,
  };

  // -------------------------------------------------------------------------
  // SECTION 3: Part 3 - Computer Science Core (80 Questions, 80 Marks)
  // -------------------------------------------------------------------------
  const csSecId = `sec_bpsc_cs_${examId}`;
  const csQuestions: Question[] = [];
  let csOrder = 1;

  // Authentic PYQs for Computer Science
  const pyqCS = queryBPSCPYQs({
    section: 'SUBJECT_CORE',
    treVersion: mode === 'PYQ_MOCK' ? treVersion : undefined,
    unit: filterTopic,
  });

  const csTargetCount = mode === 'SUBJECT_SPECIFIC' ? 80 : 80;

  for (let i = 1; i <= csTargetCount; i++) {
    let qMeta: BPSCQuestionMetadata;

    if (pyqCS[i - 1] && mode === 'PYQ_MOCK') {
      qMeta = pyqCS[i - 1];
    } else {
      qMeta = getDistinctBPSCCSQuestion(i, seed + mockNumber * 101, mockNumber);
    }

    csQuestions.push(convertToCBTQuestion(qMeta, globalIndex, csOrder, csSecId));
    globalIndex++;
    csOrder++;
  }

  const csSection: Section = {
    id: csSecId,
    examId,
    sectionType: 'BPSC_COMPUTER_SCIENCE',
    displayName: 'Part 3: Computer Science (80 Marks)',
    orderIndex: (langQuestions.length > 0 ? 1 : 0) + (gsQuestions.length > 0 ? 1 : 0),
    durationSeconds: totalDuration,
    questionCount: csQuestions.length,
    maxMarks: csQuestions.length * 1.0,
    sectionalCutoff: 0.0,
    questionGroups: [],
    questions: csQuestions,
  };

  // Compile active sections
  const activeSections: Section[] = [];
  if (langQuestions.length > 0) activeSections.push(languageSection);
  if (gsQuestions.length > 0) activeSections.push(gsSection);
  if (csQuestions.length > 0) activeSections.push(csSection);

  const finalTotalQuestions = activeSections.reduce((acc, s) => acc + s.questionCount, 0);
  const finalTotalMarks = activeSections.reduce((acc, s) => acc + s.maxMarks, 0);

  return {
    id: examId,
    slug: `bpsc-${mode.toLowerCase()}-${treVersion.toLowerCase()}-${seed}`,
    title: examTitle,
    examBody: 'BPSC',
    post: 'PGT_11_12',
    stage: stageName,
    year: 2025,
    shift: mode === 'PYQ_MOCK' ? 'Official Past Examination Paper' : 'BPSC TRE 4.0 Standard Pattern',
    timingType: 'COMPOSITE',
    totalDurationSeconds: totalDuration,
    totalMarks: finalTotalMarks,
    totalQuestions: finalTotalQuestions,
    negativeMarkRatio: isTRE4 ? tre4NegativeRatio : 0.0,
    isTRE4MarkingScheme: isTRE4,
    penaltyForBlank: isTRE4 ? tre4BlankPenalty : 0.0,
    sections: activeSections,
  };
}
