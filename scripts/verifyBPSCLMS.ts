/**
 * Comprehensive Verification Suite for BPSC TRE 4.0 Learning Management System (LMS)
 * Tests Course Hierarchy, 12-Section Blueprints, Lookup Catalog, and Diagnostic Linking.
 */

import {
  getMasterBPSCCourse,
  getLMSSection,
  getLMSSubject,
  getLMSTopic,
  getAllLMSTopics,
  searchLMSTopics,
  getRelatedTutorialForExamTopic
} from '../src/data/bpsc/lms/lmsMasterCatalog';

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${testName} - ${detail || 'Assertion failed'}`);
  }
}

console.log('================================================================');
console.log('  RUNNING BPSC TRE 4.0 LMS VERIFICATION SUITE');
console.log('================================================================\n');

// 1. Verify Course Structure & Sections
console.log('--- 1. Testing Course Structure & Sections ---');
const course = getMasterBPSCCourse();
assert(Boolean(course), 'Master course is defined');
assert(course.sections.length === 3, 'Course has exactly 3 sections (Part 1, Part 2, Part 3)');

const part1 = getLMSSection('PART_1_LANGUAGE');
assert(Boolean(part1), 'Part 1 (Language Qualifying) exists');
assert(part1?.weightageMarks === 30, 'Part 1 weightage is 30 marks');
assert(part1?.isQualifyingOnly === true, 'Part 1 is marked as qualifying only');
assert(part1?.subjects.length === 2, 'Part 1 contains English and Hindi');

const part2 = getLMSSection('PART_2_GENERAL_STUDIES');
assert(Boolean(part2), 'Part 2 (General Studies) exists');
assert(part2?.weightageMarks === 40, 'Part 2 weightage is 40 marks');
assert(part2?.isQualifyingOnly === false, 'Part 2 contributes to merit');

const part3 = getLMSSection('PART_3_SUBJECT_CORE');
assert(Boolean(part3), 'Part 3 (Subject Core) exists');
assert(part3?.weightageMarks === 80, 'Part 3 weightage is 80 marks');

// 2. Verify 12-Section Blueprint for Every Topic
console.log('\n--- 2. Testing 12-Section Blueprint for All Topics ---');
const allTopics = getAllLMSTopics();
assert(allTopics.length >= 6, `Total topics indexed: ${allTopics.length}`);

for (const { topic, chapter, subject, section } of allTopics) {
  const tut = topic.tutorial;
  const prefix = `[${subject.key} -> ${topic.titleEn}]`;

  assert(Boolean(tut.learningObjectives && tut.learningObjectives.length > 0), `${prefix} Section 1: Learning Objectives present`);
  assert(Boolean(tut.introductionEn && tut.introductionEn.length > 40), `${prefix} Section 2: Conceptual Introduction present`);
  assert(Boolean(tut.conceptSections && tut.conceptSections.length > 0), `${prefix} Section 3: Concept Sections present`);
  assert(Boolean(tut.importantDefinitions && tut.importantDefinitions.length > 0), `${prefix} Section 4: Definitions present`);
  assert(Boolean(tut.rulesAndFormulas && tut.rulesAndFormulas.length > 0), `${prefix} Section 5: Rules & Formulas present`);
  assert(Boolean(tut.examples && tut.examples.length > 0), `${prefix} Section 6: Worked Examples present`);
  assert(Boolean(tut.practicalApplications && tut.practicalApplications.length > 0), `${prefix} Section 7: Practical Applications present`);
  assert(Boolean(tut.commonMistakesAndMisconceptions && tut.commonMistakesAndMisconceptions.length > 0), `${prefix} Section 8: Traps & Misconceptions present`);
  assert(Boolean(tut.bpscTrePerspective && tut.bpscTrePerspective.frequentlyTestedAspects.length > 0), `${prefix} Section 9: BPSC Exam Perspective present`);
  assert(Boolean(tut.quickRevisionPoints && tut.quickRevisionPoints.length > 0), `${prefix} Section 10: Quick Revision Points present`);
  assert(Boolean(tut.knowledgeCheck && tut.knowledgeCheck.length > 0), `${prefix} Section 11: Knowledge Check Questions present`);
  assert(Boolean(topic.practiceQuestions && topic.practiceQuestions.length > 0), `${prefix} Section 12: Practice Questions present`);
}

// 3. Verify Practice Question Quality & No Duplication
console.log('\n--- 3. Testing Practice Questions Uniqueness & Format ---');
const seenQuestionTexts = new Set<string>();
let duplicatePracticeCount = 0;

for (const { topic } of allTopics) {
  for (const pq of topic.practiceQuestions) {
    if (seenQuestionTexts.has(pq.questionTextEn)) {
      duplicatePracticeCount++;
    }
    seenQuestionTexts.add(pq.questionTextEn);

    // Verify 5 options (A, B, C, D, E) standard
    assert(
      pq.options.length === 5,
      `Question ${pq.id} has 5 options (A, B, C, D, E)`,
      `Found ${pq.options.length} options`
    );
    assert(
      ['A', 'B', 'C', 'D', 'E'].includes(pq.correctOptionIdentifier),
      `Question ${pq.id} has valid correct option letter`
    );
  }
}
assert(duplicatePracticeCount === 0, 'Zero duplicate practice questions across topics');

// 4. Verify Catalog Search & Diagnostic Mapping
console.log('\n--- 4. Testing Search & Diagnostic Link Resolution ---');
const searchChamparan = searchLMSTopics('Champaran');
assert(searchChamparan.length > 0, 'Search for "Champaran" returns valid topic');

const searchTwosComp = searchLMSTopics('complement');
assert(searchTwosComp.length > 0, 'Search for "complement" returns Digital Logic topic');

// Test CBT Diagnostic Transition Mapping
const testCases = [
  'English Grammar & Vocabulary',
  'Tenses and Conditionals',
  'Subject-Verb Agreement',
  'वर्ण विचार एवं उच्चारण',
  'स्वर संधि',
  '1857 Revolt & Champaran Satyagraha',
  'Fundamental Rights & Articles',
  '2\'s Complement Arithmetic',
  'CPU Scheduling Algorithms',
  'Binary Search Trees',
  'DBMS Normalization'
];

for (const query of testCases) {
  const resolved = getRelatedTutorialForExamTopic(query);
  assert(
    Boolean(resolved && resolved.topic),
    `Diagnostic topic "${query}" resolves to LMS lesson -> ${resolved?.topic.titleEn}`
  );
}

console.log('\n================================================================');
console.log(`  VERIFICATION RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
}
