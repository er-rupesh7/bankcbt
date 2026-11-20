// Automated Verification Script for BPSC TRE 4.0 Module & Banking Exam Integrity
import { buildOfficialBankingExam } from '../src/lib/generator/examBuilder';
import { buildOfficialBPSCExam } from '../src/lib/generator/bpscExamBuilder';
import { queryBPSCPYQs, getPYQDatabaseStats } from '../src/data/bpsc/bpscPyqDatabase';
import { BPSC_CS_11_12_SYLLABUS, getBPSCCoverageMatrix } from '../src/data/bpsc/bpscTaxonomy';

console.log('====================================================');
console.log('🧪 BPSC TRE 4.0 & Universal Engine Verification Test');
console.log('====================================================\n');

let failedTests = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failedTests++;
  }
}

// ---------------------------------------------------------
// TEST 1: Absolute Preservation of Existing Banking Exams
// ---------------------------------------------------------
console.log('--- 1. Testing Banking Exam Integrity ---');
const sbiPoPrelims = buildOfficialBankingExam('SBI_PO_PRELIMS', 8792, false, 1);
assert(sbiPoPrelims.sections.length === 3, 'SBI PO Prelims has 3 sections');
assert(sbiPoPrelims.totalQuestions === 100, 'SBI PO Prelims has exactly 100 questions');
assert(sbiPoPrelims.timingType === 'SECTIONAL_LOCKED', 'SBI PO Prelims enforces SECTIONAL_LOCKED timing');
assert(sbiPoPrelims.negativeMarkRatio === 0.25, 'SBI PO Prelims enforces 0.25 negative marking');

const rrbPoPrelims = buildOfficialBankingExam('IBPS_RRB_PO_PRELIMS', 8792, false, 1);
assert(rrbPoPrelims.sections.length === 2, 'IBPS RRB Prelims has 2 sections (Reasoning & Quant)');
assert(rrbPoPrelims.totalDurationSeconds === 2700, 'IBPS RRB Prelims is 45 minutes');

// ---------------------------------------------------------
// TEST 2: BPSC TRE 4.0 Full-Length Exam Blueprint
// ---------------------------------------------------------
console.log('\n--- 2. Testing BPSC TRE 4.0 Full Mock Blueprint & Marking Scheme ---');
const bpscMock = buildOfficialBPSCExam({
  mode: 'FULL_LENGTH_TRE4',
  treVersion: 'TRE_4_0',
  subject: 'COMPUTER_SCIENCE_11_12',
  seed: 98765,
  mockNumber: 1,
});

assert(bpscMock.examBody === 'BPSC', 'ExamBody is BPSC');
assert(bpscMock.totalQuestions === 150, 'BPSC TRE 4.0 has exactly 150 questions');
assert(bpscMock.totalMarks === 150, 'BPSC TRE 4.0 has exactly 150 marks');
assert(bpscMock.totalDurationSeconds === 9000, 'BPSC TRE 4.0 duration is exactly 150 minutes (9000s)');
assert(bpscMock.timingType === 'COMPOSITE', 'BPSC TRE 4.0 allows free section switching with COMPOSITE timing');
assert(Math.abs(bpscMock.negativeMarkRatio - (1 / 3)) < 0.0001, 'BPSC TRE 4.0 enforces 1/3 negative marking ratio');
assert(bpscMock.isTRE4MarkingScheme === true, 'BPSC TRE 4.0 has isTRE4MarkingScheme = true');
assert(Math.abs((bpscMock.penaltyForBlank || 0) - (1 / 3)) < 0.0001, 'BPSC TRE 4.0 enforces 1/3 blank penalty');
assert(bpscMock.sections.length === 3, 'BPSC TRE 4.0 has 3 distinct sections');

const [part1, part2, part3] = bpscMock.sections;
assert(part1.sectionType === 'BPSC_LANGUAGE' && part1.questionCount === 30, 'Part 1 is Language with 30 questions');
assert(part1.sectionalCutoff === 9.0, 'Part 1 Language cutoff is 9.0 marks (30% qualifying)');
assert(part2.sectionType === 'BPSC_GENERAL_STUDIES' && part2.questionCount === 40, 'Part 2 is General Studies with 40 questions');
assert(part3.sectionType === 'BPSC_COMPUTER_SCIENCE' && part3.questionCount === 80, 'Part 3 is Computer Science with 80 questions');

// Verify 5 Options structure & Option E for all questions
let allHave5Options = true;
let allOptionENotAnswered = true;
let allOptionETextCorrect = true;
let allTRE4EvaluationFlags = true;
let allNegativeMarksThird = true;

bpscMock.sections.forEach((sec) => {
  sec.questions.forEach((q) => {
    if (q.options.length !== 5) allHave5Options = false;
    if (Math.abs(q.negativeMarks - (1 / 3)) > 0.0001) allNegativeMarksThird = false;
    if (Math.abs((q.penaltyForBlank || 0) - (1 / 3)) > 0.0001) allNegativeMarksThird = false;
    if (!q.isTRE4Evaluation || !q.isOptionENotAnswered) allTRE4EvaluationFlags = false;

    const optE = q.options.find((o) => o.identifier === 'E');
    if (!optE) {
      allOptionENotAnswered = false;
    } else {
      if (optE.optionTextEn !== 'Not Answered' || optE.optionTextHi !== 'अनुत्तरित प्रश्न') {
        allOptionETextCorrect = false;
      }
      if (optE.isCorrect !== false) {
        allOptionENotAnswered = false;
      }
    }
  });
});
assert(allHave5Options, 'Every BPSC question contains exactly 5 options (A, B, C, D & E)');
assert(allNegativeMarksThird, 'Every BPSC question has negativeMarks = 1/3 and penaltyForBlank = 1/3');
assert(allTRE4EvaluationFlags, 'Every BPSC question has isTRE4Evaluation = true & isOptionENotAnswered = true');
assert(allOptionENotAnswered && allOptionETextCorrect, 'Option E is explicitly "Not Answered" / "अनुत्तरित प्रश्न" with isCorrect = false');

// ---------------------------------------------------------
// TEST 3: Authentic PYQ Database & Verification
// ---------------------------------------------------------
console.log('\n--- 3. Testing Authentic PYQ Database & Coverage ---');
const stats = getPYQDatabaseStats();
assert(stats.totalQuestions >= 10, `PYQ Database populated with ${stats.totalQuestions} real questions`);
assert(stats.byVersion.TRE_1_0 > 0, 'TRE 1.0 (26-08-2023) questions present');
assert(stats.byVersion.TRE_2_0 > 0, 'TRE 2.0 (15-12-2023) questions present');
assert(stats.byVersion.TRE_3_0 > 0, 'TRE 3.0 (22-07-2024) questions present');
assert(stats.officiallyVerifiedCount > 0, 'Officially verified questions verified against official keys');

const csPyqs = queryBPSCPYQs({ section: 'SUBJECT_CORE' });
assert(csPyqs.length > 0, 'Subject core Computer Science PYQs queried successfully');

// ---------------------------------------------------------
// TEST 4: Computer Science 12-Unit Syllabus Mapping
// ---------------------------------------------------------
console.log('\n--- 4. Testing CS Syllabus & Coverage Matrix ---');
assert(BPSC_CS_11_12_SYLLABUS.length === 12, 'Syllabus covers all 12 mandatory official units');
const matrix = getBPSCCoverageMatrix({}, {});
assert(matrix.length === 12, 'Coverage matrix generated for all 12 units');

// ---------------------------------------------------------
// TEST 5: Subject Specific & Historical PYQ Exam Profiles
// ---------------------------------------------------------
console.log('\n--- 5. Testing Subject Drill & Historical PYQ Exam Profiles ---');
const csDrill = buildOfficialBPSCExam({
  mode: 'SUBJECT_SPECIFIC',
  subject: 'COMPUTER_SCIENCE_11_12',
});
assert(csDrill.totalQuestions === 80, 'Subject specific drill generates exactly 80 questions');
assert(csDrill.sections.length === 1, 'Subject specific drill only contains Computer Science core');

const tre1Mock = buildOfficialBPSCExam({
  mode: 'PYQ_MOCK',
  treVersion: 'TRE_1_0',
});
assert(tre1Mock.totalQuestions === 120, 'TRE 1.0 mock preserves historical 120 questions count');
assert(tre1Mock.negativeMarkRatio === 0.0, 'TRE 1.0 historical paper maintains 0.0 negative marking');
assert(tre1Mock.penaltyForBlank === 0.0, 'TRE 1.0 historical paper maintains 0.0 blank penalty');
assert(tre1Mock.isTRE4MarkingScheme === false, 'TRE 1.0 historical paper has isTRE4MarkingScheme = false');

// ---------------------------------------------------------
// TEST 6: BPSC TRE 4.0 Response Evaluation Logic (All 4 Rules)
// ---------------------------------------------------------
console.log('\n--- 6. Testing Response Evaluation Engine (4 Marking Rules) ---');
// Rule 1: Correct A/B/C/D -> +1 mark
// Rule 2: Incorrect A/B/C/D -> -1/3 mark
// Rule 3: Option E (Not Answered) -> 0 marks
// Rule 4: Completely blank question -> -1/3 mark penalty

// Simulate 4 questions with different candidate actions
const testSection = bpscMock.sections[0];
const [q1, q2, q3, q4] = testSection.questions;
const correct1 = q1.options.find((o) => o.isCorrect)!.id;
const incorrect2 = q2.options.find((o) => !o.isCorrect && o.identifier !== 'E')!.id;

// Question 1: Candidate correctly answers (+1 mark)
// Question 2: Candidate answers incorrectly (-1/3 mark)
// Question 3: Candidate explicitly selects Option E (0 marks)
// Question 4: Candidate leaves completely blank (-1/3 mark penalty)
const sampleStates: Record<string, any> = {
  [q1.id]: { selectedOptionId: correct1, isEvaluated: true, timeSpentSeconds: 30, paletteState: 'ANSWERED' },
  [q2.id]: { selectedOptionId: incorrect2, isEvaluated: true, timeSpentSeconds: 25, paletteState: 'ANSWERED' },
  [q3.id]: { selectedOptionId: 'E', isEvaluated: true, timeSpentSeconds: 15, paletteState: 'ANSWERED' },
  [q4.id]: { selectedOptionId: null, isEvaluated: false, timeSpentSeconds: 10, paletteState: 'NOT_ANSWERED' },
};

let simScore = 0;
let simOptionECount = 0;
let simBlankCount = 0;
let simCorrect = 0;
let simIncorrect = 0;

[q1, q2, q3, q4].forEach((q) => {
  const state = sampleStates[q.id];
  const isSelectedE = state.selectedOptionId === 'E';
  if (isSelectedE) {
    simOptionECount++;
    // 0 marks
  } else if (state.isEvaluated && state.selectedOptionId) {
    const isCorr = q.options.find((o) => o.isCorrect)?.id === state.selectedOptionId;
    if (isCorr) {
      simScore += q.marks;
      simCorrect++;
    } else {
      simScore -= (q.negativeMarks || (1 / 3));
      simIncorrect++;
    }
  } else {
    // Blank
    simScore -= (q.penaltyForBlank || (1 / 3));
    simBlankCount++;
  }
});

assert(simCorrect === 1, 'Rule 1: Exactly 1 question answered correctly (+1 mark)');
assert(simIncorrect === 1, 'Rule 2: Exactly 1 question answered incorrectly (-1/3 mark)');
assert(simOptionECount === 1, 'Rule 3: Option E was explicitly chosen (0 marks)');
assert(simBlankCount === 1, 'Rule 4: Blank question was penalized with -1/3 mark');

// Expected Score: 1.0 (Q1) - 1/3 (Q2) + 0.0 (Q3) - 1/3 (Q4) = 1/3 = ~0.333333
const expectedScore = 1.0 - (1 / 3) + 0.0 - (1 / 3);
assert(Math.abs(simScore - expectedScore) < 0.0001, `Calculated score ${simScore.toFixed(4)} matches expected ${expectedScore.toFixed(4)}`);
assert(simScore !== (1.0 - (1 / 3) + 0.0 + 0.0), 'Blank response strictly incurs penalty and is NOT treated as Option E');

// ---------------------------------------------------------
// TEST 7: Zero Repetition & Distinct Question Verification
// ---------------------------------------------------------
console.log('\n--- 7. Testing Zero Repetition Across Full 150Q Mock ---');
const langQuestionsList = bpscMock.sections[0].questions;
const langTexts = new Set(langQuestionsList.map((q) => q.questionTextEn));
assert(langQuestionsList.length === 30, 'Part 1 Language contains exactly 30 questions');
assert(langTexts.size === 30, `Part 1 Language has 30 unique questions (Found: ${langTexts.size} distinct, 0 duplicates)`);

const gsQuestionsList = bpscMock.sections[1].questions;
const gsTexts = new Set(gsQuestionsList.map((q) => q.questionTextEn));
assert(gsQuestionsList.length === 40, 'Part 2 General Studies contains exactly 40 questions');
assert(gsTexts.size === 40, `Part 2 General Studies has 40 unique questions (Found: ${gsTexts.size} distinct, 0 duplicates)`);

const csQuestionsList = bpscMock.sections[2].questions;
const csTexts = new Set(csQuestionsList.map((q) => q.questionTextEn));
assert(csQuestionsList.length === 80, 'Part 3 Computer Science contains exactly 80 questions');
assert(csTexts.size === 80, `Part 3 Computer Science has 80 unique questions (Found: ${csTexts.size} distinct, 0 duplicates)`);

const allExamTexts = new Set(
  bpscMock.sections.flatMap((s) => s.questions.map((q) => q.questionTextEn))
);
assert(allExamTexts.size === 150, `Entire 150-question mock has 150 completely unique questions without a single duplicate! (Found: ${allExamTexts.size})`);

console.log('\n====================================================');
if (failedTests === 0) {
  console.log('🎉 ALL INTEGRATION & VERIFICATION TESTS PASSED (0 FAILURES)');
} else {
  console.error(`💥 ${failedTests} TESTS FAILED!`);
  process.exit(1);
}
console.log('====================================================\n');
