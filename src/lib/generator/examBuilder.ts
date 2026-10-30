// Official Indian Banking Exam Paper Builder & Master Blueprint Orchestrator
// Enforces Zero-Omission Normalization, Exact Question Count Normalization,
// and Zero Question Repetition across SBI PO/Clerk, IBPS PO/Clerk, and RRB PO/Clerk.

import { Exam, Section, QuestionGroup, Question } from '@/types/exam';
import { OFFICIAL_EXAM_CATALOG, ExamCategoryKey } from '@/types/examCatalog';
import { getExamBlueprint } from './blueprintEngine';
import {
  generateDynamicQuadraticQuestion,
  generateDynamicNumberSeriesQuestion,
  generateDynamicSimplificationQuestion,
  generateDynamicApproximationQuestion,
  generateArithmeticWordProblem,
  generateSyllogismQuestion,
  generateInequalityQuestion,
  generateDirectionSenseGroup,
  generateBloodRelationGroup,
  generateMiscReasoningQuestion,
  generatePuzzleGroup,
  generateDynamicDIGroup,
  generateReadingComprehensionGroup,
  generateClozeTestGroup,
  generateParaJumbleGroup,
  generateEnglishErrorSpottingQuestion,
  generateWordSwapQuestion,
  generateDoubleFillerQuestion,
  generateSentenceConnectorQuestion,
  generateBankingAwarenessQuestion,
  generateComputerKnowledgeQuestion,
  generateQuantityComparisonQuestion,
  generateDataSufficiencyQuestion,
  generateMachineInputOutputQuestion,
  generateCodedReasoningQuestion,
  generateCriticalReasoningQuestion,
  generateReasoningDataSufficiencyQuestion,
  generateAlphanumericGroup,
  ArithmeticSlot,
} from './bankQuestionBank';

export function buildOfficialBankingExam(
  examKey: ExamCategoryKey = 'SBI_PO_PRELIMS',
  seed: number = 20251030,
  isDrillMode: boolean = false,
  mockNumber: number = 1
): Exam {
  const config = OFFICIAL_EXAM_CATALOG[examKey] || OFFICIAL_EXAM_CATALOG.SBI_PO_PRELIMS;
  const blueprint = getExamBlueprint(examKey, mockNumber);

  let globalQNum = 1;

  const sections: Section[] = blueprint.sections.map((secBlueprint, secIdx) => {
    const secId = `sec_${secBlueprint.section_type.toLowerCase()}_${secIdx}`;
    const questionGroups: QuestionGroup[] = [];
    const questions: Question[] = [];

    // Official marks from catalog blueprint
    const catalogSec = config.sections.find((s) => s.sectionType === secBlueprint.section_type) || config.sections[secIdx] || config.sections[0];
    const marks = catalogSec.marksPerQuestion;
    const negativeMarks = catalogSec.negativeMarksPerQuestion;

    // Target question count (if drill mode, limit to 20 rapid questions, otherwise full official count)
    const targetQCount = isDrillMode ? Math.min(20, secBlueprint.total_questions) : secBlueprint.total_questions;
    let secQOrder = 1;

    for (const batch of secBlueprint.batches) {
      if (secQOrder > targetQCount) break;

      const qToGenerate = Math.min(batch.question_count, targetQCount - secQOrder + 1);
      if (qToGenerate <= 0) break;

      // 1. Group-based batches (Puzzles, DI, RC, Cloze, Para Jumbles, Direction/Blood sets)
      if (batch.group_type) {
        if (
          batch.group_type === 'CIRCULAR_IN_OUT' ||
          batch.group_type === 'PARALLEL_ROWS' ||
          batch.group_type === 'UNCERTAIN_LINEAR' ||
          batch.group_type === 'SQUARE_TABLE' ||
          batch.group_type === 'FLOOR_FLAT' ||
          batch.group_type === 'MONTH_DATE' ||
          batch.group_type === 'BOX_PUZZLE' ||
          batch.group_type === 'DESIGNATION_PUZZLE' ||
          batch.group_type === 'PUZZLE_FLOOR_FLAT' ||
          batch.group_type === 'PUZZLE_MONTH_DATE' ||
          batch.group_type === 'PUZZLE_SHORT' ||
          batch.group_type === 'SEATING_CONCENTRIC'
        ) {
          const puzGroup = generatePuzzleGroup(
            batch.group_type,
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            seed + secQOrder * 37
          );
          questionGroups.push(puzGroup);
          for (const q of puzGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type.startsWith('DI_') || batch.group_type === 'DI_TABULAR') {
          const diGroup = generateDynamicDIGroup(
            batch.group_type,
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            seed + secQOrder * 41,
            qToGenerate
          );
          questionGroups.push(diGroup);
          for (const q of diGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'RC_PASSAGE') {
          const rcGroup = generateReadingComprehensionGroup(
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            qToGenerate,
            seed + mockNumber * 19
          );
          questionGroups.push(rcGroup);
          for (const q of rcGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'CLOZE_TEST') {
          const clozeGroup = generateClozeTestGroup(
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            qToGenerate,
            seed + mockNumber * 23
          );
          questionGroups.push(clozeGroup);
          for (const q of clozeGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'PARA_JUMBLE') {
          const pjGroup = generateParaJumbleGroup(
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            seed + mockNumber * 29
          );
          questionGroups.push(pjGroup);
          for (const q of pjGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'BLOOD_OR_DIR_GROUP' || batch.group_type === 'DIRECTION_SENSE_SET') {
          const isBlood = batch.topic.includes('Blood') || (batch.group_type === 'BLOOD_OR_DIR_GROUP' && mockNumber % 2 === 0);
          const grp = isBlood
            ? generateBloodRelationGroup(globalQNum, secQOrder, secId, marks, negativeMarks)
            : generateDirectionSenseGroup(globalQNum, secQOrder, secId, marks, negativeMarks);
          questionGroups.push(grp);
          for (const q of grp.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'BLOOD_RELATIONS_SET') {
          const bloodGroup = generateBloodRelationGroup(
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks
          );
          questionGroups.push(bloodGroup);
          for (const q of bloodGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        } else if (batch.group_type === 'ALPHANUMERIC_SERIES') {
          const alphaGroup = generateAlphanumericGroup(
            globalQNum,
            secQOrder,
            secId,
            marks,
            negativeMarks,
            seed + secQOrder * 31,
            qToGenerate
          );
          questionGroups.push(alphaGroup);
          for (const q of alphaGroup.questions) {
            questions.push(q);
            globalQNum++;
            secQOrder++;
          }
        }
      } else {
        // 2. Standalone questions
        for (let i = 0; i < qToGenerate && secQOrder <= targetQCount; i++) {
          if (batch.batch_id === 'Q_ARITH_10' || batch.topic.includes('Arithmetic')) {
            // Strictly assign Slots 1 to 10 so NO arithmetic chapter is repeated
            const slot = ((i % 10) + 1) as ArithmeticSlot;
            questions.push(
              generateArithmeticWordProblem(
                globalQNum,
                secQOrder,
                secId,
                slot,
                marks,
                negativeMarks,
                seed + i * 101
              )
            );
          } else if (batch.topic.includes('Simplification')) {
            questions.push(
              generateDynamicSimplificationQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 97
              )
            );
          } else if (batch.topic.includes('Approximation')) {
            questions.push(
              generateDynamicApproximationQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 53
              )
            );
          } else if (batch.topic.includes('Quadratic')) {
            questions.push(
              generateDynamicQuadraticQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 47
              )
            );
          } else if (batch.topic.includes('Number Series') || batch.topic.includes('Series')) {
            const isWrong = batch.topic.includes('Wrong');
            questions.push(
              generateDynamicNumberSeriesQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 61,
                isWrong
              )
            );
          } else if (batch.topic.includes('Syllogism')) {
            questions.push(
              generateSyllogismQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                (i % 4) + 1
              )
            );
          } else if (batch.topic.includes('Inequalit')) {
            questions.push(
              generateInequalityQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                (i % 4) + 1
              )
            );
          } else if (batch.topic.includes('Error Spotting')) {
            questions.push(
              generateEnglishErrorSpottingQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                (mockNumber * 3 + i) % 10 + 1
              )
            );
          } else if (batch.topic.includes('Word Swap')) {
            questions.push(
              generateWordSwapQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.topic.includes('Fillers')) {
            questions.push(
              generateDoubleFillerQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.topic.includes('Connector')) {
            questions.push(
              generateSentenceConnectorQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.batch_id === 'R_MAIN_INP_OUT' || batch.topic.includes('Input-Output') || batch.topic.includes('Input')) {
            questions.push(
              generateMachineInputOutputQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.batch_id === 'R_MAIN_CODED' || batch.topic.includes('Coded')) {
            questions.push(
              generateCodedReasoningQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.batch_id === 'R_MAIN_CRIT' || batch.topic.includes('Critical') || batch.topic.includes('Analytical')) {
            questions.push(
              generateCriticalReasoningQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.batch_id === 'R_MAIN_DS' || (batch.topic.includes('Data Sufficiency') && secBlueprint.section_type === 'REASONING_ABILITY')) {
            questions.push(
              generateReasoningDataSufficiencyQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.topic.includes('Pair') || batch.topic.includes('Alphabet') || batch.topic.includes('Word')) {
            const miscType = batch.topic.includes('Pair')
              ? 'PAIR_FINDING'
              : batch.topic.includes('Meaningful')
              ? 'MEANINGFUL_WORD'
              : (i % 2 === 0 ? 'PAIR_FINDING' : 'MEANINGFUL_WORD');
            questions.push(
              generateMiscReasoningQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 19,
                miscType,
                secQOrder
              )
            );
          } else if (batch.topic.includes('Quantity Comparison')) {
            questions.push(
              generateQuantityComparisonQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (batch.topic.includes('Data Sufficiency')) {
            questions.push(
              generateDataSufficiencyQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i + 1
              )
            );
          } else if (secBlueprint.section_type === 'GENERAL_FINANCIAL_AWARENESS') {
            questions.push(
              generateBankingAwarenessQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i
              )
            );
          } else if (secBlueprint.section_type === 'COMPUTER_KNOWLEDGE') {
            questions.push(
              generateComputerKnowledgeQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                i
              )
            );
          } else if (secBlueprint.section_type === 'REASONING_ABILITY') {
            // Strict Reasoning fallback - NEVER leak Quant into Reasoning
            questions.push(
              generateMiscReasoningQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                seed + i * 19,
                secQOrder % 2 === 0 ? 'PAIR_FINDING' : 'MEANINGFUL_WORD',
                secQOrder
              )
            );
          } else if (secBlueprint.section_type === 'ENGLISH_LANGUAGE') {
            // Strict English fallback - NEVER leak Quant into English
            questions.push(
              generateEnglishErrorSpottingQuestion(
                globalQNum,
                secQOrder,
                secId,
                marks,
                negativeMarks,
                (mockNumber * 3 + i) % 10 + 1
              )
            );
          } else {
            // Quantitative Aptitude fallback: slot-based arithmetic
            questions.push(
              generateArithmeticWordProblem(
                globalQNum,
                secQOrder,
                secId,
                ((i % 10) + 1) as ArithmeticSlot,
                marks,
                negativeMarks,
                seed + i * 71
              )
            );
          }
          globalQNum++;
          secQOrder++;
        }
      }
    }

    return {
      id: secId,
      examId: `exam_${config.key.toLowerCase()}_${seed}`,
      sectionType: secBlueprint.section_type,
      displayName: secBlueprint.display_name,
      orderIndex: secIdx,
      durationSeconds: catalogSec.durationSeconds,
      questionCount: questions.length,
      maxMarks: catalogSec.maxMarks,
      sectionalCutoff: catalogSec.cutoff,
      questionGroups,
      questions,
    };
  });

  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);

  return {
    id: `exam_${config.key.toLowerCase()}_m${mockNumber}_${seed}`,
    slug: `${config.key.toLowerCase()}-m${mockNumber}-${seed}`,
    title: `${config.title} • Mock Test #${mockNumber}`,
    examBody: config.examBody,
    post: config.post,
    stage: config.stage,
    year: 2025,
    shift: 'Official TCS iON Interface Simulation',
    timingType: config.timingType,
    totalDurationSeconds: config.totalDurationSeconds,
    totalMarks: config.totalMarks,
    totalQuestions,
    negativeMarkRatio: config.negativeMarkRatio,
    sections,
  };
}
