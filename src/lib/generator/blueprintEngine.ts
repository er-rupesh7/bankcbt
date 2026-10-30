// Master Blueprint Orchestrator & Exam Paper Controller for Indian Banking CBT Platform
// Specializes in SBI PO/Clerk, IBPS PO/Clerk, and IBPS RRB PO/Clerk (Prelims & Mains)
// Enforces Zero-Omission Normalization, Modulo Topic Rotation (mock_number % variant_count),
// and Exact Question Count Normalization Rules.

import { ExamCategoryKey } from '@/types/examCatalog';
import { SectionType } from '@/types/exam';

export interface BatchItem {
  batch_id: string;
  topic: string;
  sub_pattern: string;
  question_count: number;
  q_range: [number, number];
  group_type?: string;
}

export interface SectionBlueprintManifest {
  section_id: string;
  section_type: SectionType;
  display_name: string;
  total_questions: number;
  duration_minutes: number;
  max_marks: number;
  batches: BatchItem[];
}

export interface ExamBlueprintManifest {
  exam: string;
  stage: 'PRELIMS' | 'MAINS';
  mock_number: number;
  total_questions: number;
  total_marks: number;
  total_duration_minutes: number;
  sections: SectionBlueprintManifest[];
}

/**
 * 8 Official Bank PO/Clerk Reasoning Puzzle Archetypes
 */
export const OFFICIAL_PUZZLE_ARCHETYPES = [
  { id: 'CIRCULAR_IN_OUT', name: 'Circular Seating (Inward & Outward)', sub: '8 Persons, 5 Facing In, 3 Facing Out' },
  { id: 'PARALLEL_ROWS', name: 'Parallel Row Seating', sub: '10 Persons in 2 Rows facing North and South' },
  { id: 'UNCERTAIN_LINEAR', name: 'Uncertain Number of Persons Linear Row', sub: 'Single Row facing North (Total ~16-19 persons)' },
  { id: 'SQUARE_TABLE', name: 'Square / Rectangular Table Arrangement', sub: '8 Persons (Corners Outside, Sides Center)' },
  { id: 'FLOOR_FLAT', name: 'Floor & Flat Puzzle', sub: '4 Floors × 2 Flats (Flat A & B, 8 Persons)' },
  { id: 'MONTH_DATE', name: 'Month & Date Scheduling Puzzle', sub: '4 Months (2 Dates each = 8 Persons)' },
  { id: 'BOX_PUZZLE', name: 'Box Stacking Hierarchy Puzzle', sub: '7 or 8 Boxes stacked vertically' },
  { id: 'DESIGNATION_PUZZLE', name: 'Designation / Seniority Hierarchy', sub: '8 Corporate Banking Posts (CMD down to Clerk)' },
] as const;

/**
 * 5 Data Interpretation (DI) Archetypes
 */
export const OFFICIAL_DI_ARCHETYPES = [
  { id: 'DI_TABULAR', name: 'Tabular Data Interpretation', sub: 'Production, Defective & Sales ratio' },
  { id: 'DI_DOUBLE_BAR', name: 'Double Bar Graph DI', sub: 'Target vs Actual / Income vs Expenditure' },
  { id: 'DI_LINE_GRAPH', name: 'Line Graph DI', sub: 'Turnover & Profit % across consecutive fiscal years' },
  { id: 'DI_PIE_CHART', name: 'Degree / Percentage Pie Chart DI', sub: 'Sectoral loan disbursement or population share' },
  { id: 'DI_CASELET', name: 'Caselet / Paragraph DI', sub: 'Venn Diagram / Arithmetic multi-department data' },
] as const;

/**
 * 4 Pure Chart DI Archetypes (excluding Caselet, for exams with a dedicated Caselet set)
 */
export const OFFICIAL_CHART_DI_ARCHETYPES = [
  { id: 'DI_TABULAR', name: 'Tabular Data Interpretation', sub: 'Production, Defective & Sales ratio' },
  { id: 'DI_DOUBLE_BAR', name: 'Double Bar Graph DI', sub: 'Target vs Actual / Income vs Expenditure' },
  { id: 'DI_LINE_GRAPH', name: 'Line Graph DI', sub: 'Turnover & Profit % across consecutive fiscal years' },
  { id: 'DI_PIE_CHART', name: 'Degree / Percentage Pie Chart DI', sub: 'Sectoral loan disbursement or population share' },
] as const;

/**
 * Mandatory 10-Slot Arithmetic Coverage Guarantee
 */
export const ARITHMETIC_10_BUCKETS = [
  { slot: 1, name: 'Percentage / Election & Population', sub: 'Voter turnout, valid votes, population growth' },
  { slot: 2, name: 'Ratio & Proportion / Partnership', sub: 'Active/sleeping partner, time-weighted capital ratio' },
  { slot: 3, name: 'Average / Problems on Ages', sub: 'Replaced member weight, father-son age ratio' },
  { slot: 4, name: 'Profit, Loss & Marked Price Discount', sub: 'Successive discount, markup % and net gain' },
  { slot: 5, name: 'Simple Interest & Compound Interest', sub: 'Difference between CI and SI for 2/3 years' },
  { slot: 6, name: 'Mixture & Alligation', sub: 'Repeated liquid replacement formula, two container mixing' },
  { slot: 7, name: 'Time & Work / Pipes & Cisterns', sub: 'LCM unit efficiency, alternate day work, inlet/outlet' },
  { slot: 8, name: 'Time, Speed & Distance / Trains', sub: 'Opposite/same direction crossing, platform length' },
  { slot: 9, name: 'Boats & Streams', sub: 'Upstream & downstream speed, stream velocity' },
  { slot: 10, name: 'Mensuration (2D/3D) / Probability', sub: 'Cylinder/Cone volume or urn marble probability' },
] as const;

/**
 * Returns the 100% normalized blueprint manifest for any official Indian banking exam.
 */
export function getExamBlueprint(
  examKey: ExamCategoryKey,
  mockNumber: number = 1
): ExamBlueprintManifest {
  // Normalize mockNumber 1..50
  const m = Math.max(1, mockNumber);

  switch (examKey) {
    // -------------------------------------------------------------------------
    // MATRIX A: SBI PO PRELIMS (100 Qs | 100M | 60 mins)
    // English (40 Qs), Quant (30 Qs), Reasoning (30 Qs)
    // -------------------------------------------------------------------------
    case 'SBI_PO_PRELIMS': {
      // Rotate 4 of 8 puzzle types for reasoning (4 sets × 5 Qs = 20 Qs)
      const p1 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 0) % 8];
      const p2 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 1) % 8];
      const p3 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 2) % 8];
      const p4 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 3) % 8];

      // Rotate 2 of 5 DI types (2 sets × 5 Qs = 10 Qs)
      const di1 = OFFICIAL_DI_ARCHETYPES[(m + 0) % 5];
      const di2 = OFFICIAL_DI_ARCHETYPES[(m + 1) % 5];

      // Quant speed math (Approximation vs Wrong Number Series alternating)
      const speedMathTopic = m % 2 === 1 ? 'Approximation' : 'Wrong Number Series';
      const bloodOrDir = m % 2 === 1 ? 'Direction & Distance Sense (3-Point Trail)' : 'Blood Relations (3-Generation Tree)';

      return {
        exam: 'SBI_PO',
        stage: 'PRELIMS',
        mock_number: m,
        total_questions: 100,
        total_marks: 100,
        total_duration_minutes: 60,
        sections: [
          {
            section_id: 'SEC_ENG_1',
            section_type: 'ENGLISH_LANGUAGE',
            display_name: 'English Language',
            total_questions: 40,
            duration_minutes: 20,
            max_marks: 40,
            batches: [
              { batch_id: 'ENG_RC', topic: 'Reading Comprehension', sub_pattern: '7 Passage Analysis + 3 Vocab/Contextual Idioms', question_count: 10, q_range: [1, 10], group_type: 'RC_PASSAGE' },
              { batch_id: 'ENG_CLOZE', topic: 'Cloze Test', sub_pattern: 'Banking/Economy passage with 6 numbered blanks', question_count: 6, q_range: [11, 16], group_type: 'CLOZE_TEST' },
              { batch_id: 'ENG_ERROR', topic: 'Error Spotting', sub_pattern: 'Grammatical rules & subject-verb/preposition traps', question_count: 6, q_range: [17, 22] },
              { batch_id: 'ENG_PJ', topic: 'Para Jumbles', sub_pattern: '5 Sentences coherent order rearrangement', question_count: 5, q_range: [23, 27], group_type: 'PARA_JUMBLE' },
              { batch_id: 'ENG_FILLERS', topic: 'Double Fillers', sub_pattern: 'Contextual vocabulary & collocation pairs', question_count: 5, q_range: [28, 32] },
              { batch_id: 'ENG_SWAP', topic: 'Word Swap / Phrase Replacement', sub_pattern: '4 Words highlighted interchange', question_count: 4, q_range: [33, 36] },
              { batch_id: 'ENG_CONNECT', topic: 'Sentence Connectors / Match the Column', sub_pattern: 'Two columns (Column 1 & 2) grammatical pairing', question_count: 4, q_range: [37, 40] },
            ],
          },
          {
            section_id: 'SEC_QUANT_2',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Quantitative Aptitude',
            total_questions: 30,
            duration_minutes: 20,
            max_marks: 30,
            batches: [
              { batch_id: 'Q_SPEED', topic: speedMathTopic, sub_pattern: 'BODMAS / Series alternating cube & decimal patterns', question_count: 5, q_range: [41, 45] },
              { batch_id: 'Q_QUAD', topic: 'Quadratic Equations', sub_pattern: 'Sign Method & Factorization (x vs y root comparison)', question_count: 5, q_range: [46, 50] },
              { batch_id: 'Q_DI_1', topic: di1.name, sub_pattern: di1.sub, question_count: 5, q_range: [51, 55], group_type: di1.id },
              { batch_id: 'Q_DI_2', topic: di2.name, sub_pattern: di2.sub, question_count: 5, q_range: [56, 60], group_type: di2.id },
              { batch_id: 'Q_ARITH_10', topic: 'Arithmetic 10-Bucket Coverage', sub_pattern: 'Strictly 1 Q each from Slots 1 to 10 (Zero Omission)', question_count: 10, q_range: [61, 70] },
            ],
          },
          {
            section_id: 'SEC_REAS_3',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability',
            total_questions: 30,
            duration_minutes: 20,
            max_marks: 30,
            batches: [
              { batch_id: 'R_PUZ_1', topic: p1.name, sub_pattern: p1.sub, question_count: 5, q_range: [71, 75], group_type: p1.id },
              { batch_id: 'R_PUZ_2', topic: p2.name, sub_pattern: p2.sub, question_count: 5, q_range: [76, 80], group_type: p2.id },
              { batch_id: 'R_PUZ_3', topic: p3.name, sub_pattern: p3.sub, question_count: 5, q_range: [81, 85], group_type: p3.id },
              { batch_id: 'R_PUZ_4', topic: p4.name, sub_pattern: p4.sub, question_count: 5, q_range: [86, 90], group_type: p4.id },
              { batch_id: 'R_SYLL', topic: 'Syllogism ("Only a few")', sub_pattern: 'Definite & possibility conclusions with Venn diagrams', question_count: 3, q_range: [91, 93] },
              { batch_id: 'R_INEQ', topic: 'Inequalities', sub_pattern: 'Open-gate method & either-or complementary pairs', question_count: 3, q_range: [94, 96] },
              { batch_id: 'R_BD_ROT', topic: bloodOrDir, sub_pattern: 'Multi-step relationship or Pythagoras triplet path', question_count: 3, q_range: [97, 99], group_type: 'BLOOD_OR_DIR_GROUP' },
              { batch_id: 'R_MISC', topic: 'Word/Number Pair Formation', sub_pattern: 'Forward & backward pairs / Meaningful word', question_count: 1, q_range: [100, 100] },
            ],
          },
        ],
      };
    }

    // -------------------------------------------------------------------------
    // MATRIX B: SBI CLERK PRELIMS & IBPS CLERK PRELIMS (100 Qs | 100M | 60 mins)
    // English (30 Qs), Numerical (35 Qs), Reasoning (35 Qs)
    // -------------------------------------------------------------------------
    case 'SBI_CLERK_PRELIMS':
    case 'IBPS_CLERK_PRELIMS': {
      const p1 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 0) % 8];
      const p2 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 1) % 8];
      const p3 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 2) % 8];
      const p4 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 3) % 8];
      const di1 = OFFICIAL_DI_ARCHETYPES[(m + 0) % 5];
      const bloodOrDir = m % 2 === 1 ? 'Blood Relations (3 Qs)' : 'Direction Sense (3 Qs)';

      return {
        exam: examKey.includes('SBI') ? 'SBI_CLERK' : 'IBPS_CLERK',
        stage: 'PRELIMS',
        mock_number: m,
        total_questions: 100,
        total_marks: 100,
        total_duration_minutes: 60,
        sections: [
          {
            section_id: 'SEC_ENG_1',
            section_type: 'ENGLISH_LANGUAGE',
            display_name: 'English Language',
            total_questions: 30,
            duration_minutes: 20,
            max_marks: 30,
            batches: [
              { batch_id: 'ENG_RC', topic: 'Reading Comprehension', sub_pattern: 'Direct facts + inference + vocab', question_count: 8, q_range: [1, 8], group_type: 'RC_PASSAGE' },
              { batch_id: 'ENG_ERROR', topic: 'Error Spotting', sub_pattern: 'High-frequency banking grammar rules', question_count: 5, q_range: [9, 13] },
              { batch_id: 'ENG_CLOZE', topic: 'Cloze Test', sub_pattern: '5 Blank passage contextual testing', question_count: 5, q_range: [14, 18], group_type: 'CLOZE_TEST' },
              { batch_id: 'ENG_PJ', topic: 'Para Jumbles', sub_pattern: '5 Sentences rearrangement', question_count: 5, q_range: [19, 23], group_type: 'PARA_JUMBLE' },
              { batch_id: 'ENG_SWAP', topic: 'Misspelt / Word Swap', sub_pattern: 'Incorrect spelling or misplaced words', question_count: 4, q_range: [24, 27] },
              { batch_id: 'ENG_FILLERS', topic: 'Phrase Replacement / Fillers', sub_pattern: 'Single fillers & idioms', question_count: 3, q_range: [28, 30] },
            ],
          },
          {
            section_id: 'SEC_QUANT_2',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Numerical Ability',
            total_questions: 35,
            duration_minutes: 20,
            max_marks: 35,
            batches: [
              { batch_id: 'Q_SIMP', topic: 'Simplification', sub_pattern: 'BODMAS, fractions, decimal & square root rapid arithmetic', question_count: 15, q_range: [31, 45] },
              { batch_id: 'Q_SERIES', topic: 'Missing Number Series', sub_pattern: 'Difference, alternating, prime, 0.5+0.5 pattern', question_count: 5, q_range: [46, 50] },
              { batch_id: 'Q_DI', topic: di1.name, sub_pattern: 'Direct calculation based 5-Question chart set', question_count: 5, q_range: [51, 55], group_type: di1.id },
              { batch_id: 'Q_ARITH_10', topic: 'Arithmetic Word Problems', sub_pattern: '10 Distinct Syllabus Topics (Slots 1 to 10)', question_count: 10, q_range: [56, 65] },
            ],
          },
          {
            section_id: 'SEC_REAS_3',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability',
            total_questions: 35,
            duration_minutes: 20,
            max_marks: 35,
            batches: [
              { batch_id: 'R_PUZ_1', topic: p1.name, sub_pattern: p1.sub, question_count: 5, q_range: [66, 70], group_type: p1.id },
              { batch_id: 'R_PUZ_2', topic: p2.name, sub_pattern: p2.sub, question_count: 5, q_range: [71, 75], group_type: p2.id },
              { batch_id: 'R_PUZ_3', topic: p3.name, sub_pattern: p3.sub, question_count: 5, q_range: [76, 80], group_type: p3.id },
              { batch_id: 'R_PUZ_4', topic: p4.name, sub_pattern: p4.sub, question_count: 5, q_range: [81, 85], group_type: p4.id },
              { batch_id: 'R_ALPHA', topic: 'Alphanumeric / 3-Digit Series', sub_pattern: 'Letter-Number-Symbol sequence & conditions', question_count: 5, q_range: [86, 90], group_type: 'ALPHANUMERIC_SERIES' },
              { batch_id: 'R_SYLL', topic: 'Syllogism', sub_pattern: 'Direct & only a few statements', question_count: 3, q_range: [91, 93] },
              { batch_id: 'R_INEQ', topic: 'Inequalities', sub_pattern: 'Direct open-gate comparison', question_count: 3, q_range: [94, 96] },
              { batch_id: 'R_MISC_SET', topic: bloodOrDir, sub_pattern: '3-Question connected reasoning set', question_count: 3, q_range: [97, 99], group_type: 'BLOOD_OR_DIR_GROUP' },
              { batch_id: 'R_PAIR', topic: 'Pair Finding / Alphabet Test', sub_pattern: 'Letter pairs forward/backward', question_count: 1, q_range: [100, 100] },
            ],
          },
        ],
      };
    }

    // -------------------------------------------------------------------------
    // MATRIX C: IBPS PO PRELIMS (100 Qs | 100M | 60 mins)
    // English (30 Qs), Quant (35 Qs), Reasoning (35 Qs)
    // -------------------------------------------------------------------------
    case 'IBPS_PO_PRELIMS': {
      const p1 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 0) % 8];
      const p2 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 1) % 8];
      const p3 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 2) % 8];
      const p4 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 3) % 8];
      const di1 = OFFICIAL_CHART_DI_ARCHETYPES[(m + 0) % 4];
      const di2 = OFFICIAL_CHART_DI_ARCHETYPES[(m + 1) % 4];

      return {
        exam: 'IBPS_PO',
        stage: 'PRELIMS',
        mock_number: m,
        total_questions: 100,
        total_marks: 100,
        total_duration_minutes: 60,
        sections: [
          {
            section_id: 'SEC_ENG_1',
            section_type: 'ENGLISH_LANGUAGE',
            display_name: 'English Language',
            total_questions: 30,
            duration_minutes: 20,
            max_marks: 30,
            batches: [
              { batch_id: 'ENG_RC', topic: 'Reading Comprehension', sub_pattern: 'Financial editorial RC with vocabulary & inferences', question_count: 9, q_range: [1, 9], group_type: 'RC_PASSAGE' },
              { batch_id: 'ENG_ERROR', topic: 'Error Spotting', sub_pattern: 'Multi-part error identification', question_count: 5, q_range: [10, 14] },
              { batch_id: 'ENG_CLOZE', topic: 'Cloze Test', sub_pattern: 'Economic policy passage (5 blanks)', question_count: 5, q_range: [15, 19], group_type: 'CLOZE_TEST' },
              { batch_id: 'ENG_PJ', topic: 'Para Jumbles', sub_pattern: 'Rearrangement 5 Qs', question_count: 5, q_range: [20, 24], group_type: 'PARA_JUMBLE' },
              { batch_id: 'ENG_SWAP', topic: 'Word Swap / Fillers', sub_pattern: 'Vocabulary in context', question_count: 3, q_range: [25, 27] },
              { batch_id: 'ENG_CONN', topic: 'Phrase Replacement / Connectors', sub_pattern: 'Conjunctions and sentence starters', question_count: 3, q_range: [28, 30] },
            ],
          },
          {
            section_id: 'SEC_QUANT_2',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Quantitative Aptitude',
            total_questions: 35,
            duration_minutes: 20,
            max_marks: 35,
            batches: [
              { batch_id: 'Q_APPROX', topic: 'Approximation', sub_pattern: 'Speed estimation & percentage rounding', question_count: 5, q_range: [31, 35] },
              { batch_id: 'Q_SERIES_QUAD', topic: 'Quadratic Equations & Series', sub_pattern: 'Root comparison and alternate series', question_count: 6, q_range: [36, 41] },
              { batch_id: 'Q_DI_1', topic: di1.name, sub_pattern: di1.sub, question_count: 5, q_range: [42, 46], group_type: di1.id },
              { batch_id: 'Q_DI_2', topic: di2.name, sub_pattern: di2.sub, question_count: 5, q_range: [47, 51], group_type: di2.id },
              { batch_id: 'Q_CASELET', topic: 'Caselet DI', sub_pattern: 'Arithmetic paragraph based 4 questions', question_count: 4, q_range: [52, 55], group_type: 'DI_CASELET' },
              { batch_id: 'Q_ARITH_10', topic: 'Arithmetic 10-Bucket Coverage', sub_pattern: 'Strictly 1 Q each from Slots 1 to 10', question_count: 10, q_range: [56, 65] },
            ],
          },
          {
            section_id: 'SEC_REAS_3',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability',
            total_questions: 35,
            duration_minutes: 20,
            max_marks: 35,
            batches: [
              { batch_id: 'R_PUZ_1', topic: p1.name, sub_pattern: p1.sub, question_count: 5, q_range: [66, 70], group_type: p1.id },
              { batch_id: 'R_PUZ_2', topic: p2.name, sub_pattern: p2.sub, question_count: 5, q_range: [71, 75], group_type: p2.id },
              { batch_id: 'R_PUZ_3', topic: p3.name, sub_pattern: p3.sub, question_count: 5, q_range: [76, 80], group_type: p3.id },
              { batch_id: 'R_PUZ_4', topic: p4.name, sub_pattern: p4.sub, question_count: 5, q_range: [81, 85], group_type: p4.id },
              { batch_id: 'R_PUZ_SHORT', topic: 'Short Linear Arrangement', sub_pattern: '3 Persons / Comparison puzzle set', question_count: 3, q_range: [86, 88], group_type: 'PUZZLE_SHORT' },
              { batch_id: 'R_SYLL', topic: 'Syllogism', sub_pattern: '4 Statements & conclusions (Only a few)', question_count: 4, q_range: [89, 92] },
              { batch_id: 'R_INEQ', topic: 'Inequalities', sub_pattern: 'Strict and coded comparisons', question_count: 3, q_range: [93, 95] },
              { batch_id: 'R_DIR', topic: 'Direction Sense (Pythagorean Trail)', sub_pattern: '3 Qs connected walking puzzle', question_count: 3, q_range: [96, 98], group_type: 'DIRECTION_SENSE_SET' },
              { batch_id: 'R_MISC', topic: 'Chinese Coding / Meaningful Word', sub_pattern: 'Word decoding & meaningful letter test', question_count: 2, q_range: [99, 100] },
            ],
          },
        ],
      };
    }

    // -------------------------------------------------------------------------
    // MATRIX D: IBPS RRB PO PRELIMS (80 Qs | 80M | 45 mins: 40 Reasoning, 40 Quant)
    // -------------------------------------------------------------------------
    case 'IBPS_RRB_PO_PRELIMS': {
      // Rotate 5 of 8 puzzle types for reasoning (5 sets × 5 Qs = 25 Qs!)
      const p1 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 0) % 8];
      const p2 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 1) % 8];
      const p3 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 2) % 8];
      const p4 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 3) % 8];
      const p5 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 4) % 8];

      // 3 DI sets for Quant: 2 chart sets (5 Qs each) + 1 caselet (5 Qs) = 15 Qs!
      const di1 = OFFICIAL_CHART_DI_ARCHETYPES[(m + 0) % 4];
      const di2 = OFFICIAL_CHART_DI_ARCHETYPES[(m + 1) % 4];

      return {
        exam: 'IBPS_RRB_PO',
        stage: 'PRELIMS',
        mock_number: m,
        total_questions: 80,
        total_marks: 80,
        total_duration_minutes: 45,
        sections: [
          {
            section_id: 'SEC_REAS_1',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability',
            total_questions: 40,
            duration_minutes: 25,
            max_marks: 40,
            batches: [
              { batch_id: 'R_PUZ_1', topic: p1.name, sub_pattern: p1.sub, question_count: 5, q_range: [1, 5], group_type: p1.id },
              { batch_id: 'R_PUZ_2', topic: p2.name, sub_pattern: p2.sub, question_count: 5, q_range: [6, 10], group_type: p2.id },
              { batch_id: 'R_PUZ_3', topic: p3.name, sub_pattern: p3.sub, question_count: 5, q_range: [11, 15], group_type: p3.id },
              { batch_id: 'R_PUZ_4', topic: p4.name, sub_pattern: p4.sub, question_count: 5, q_range: [16, 20], group_type: p4.id },
              { batch_id: 'R_PUZ_5', topic: p5.name, sub_pattern: p5.sub, question_count: 5, q_range: [21, 25], group_type: p5.id },
              { batch_id: 'R_SYLL', topic: 'Syllogism ("Only a few")', sub_pattern: 'Strict banking syllabus (4 distinct questions)', question_count: 4, q_range: [26, 29] },
              { batch_id: 'R_INEQ', topic: 'Inequalities', sub_pattern: 'Open-gate & either-or (4 distinct questions)', question_count: 4, q_range: [30, 33] },
              { batch_id: 'R_BLOOD_DIR', topic: m % 2 === 1 ? 'Blood Relations (3-Generation Tree)' : 'Direction Sense (Pythagorean Trail)', sub_pattern: '3 connected questions on single puzzle', question_count: 3, q_range: [34, 36], group_type: 'BLOOD_OR_DIR_GROUP' },
              { batch_id: 'R_MISC_WORD', topic: 'Word/Number Pair Finding', sub_pattern: 'Letter count in forward & backward direction', question_count: 2, q_range: [37, 38] },
              { batch_id: 'R_MISC_ORDER', topic: 'Meaningful Word / Alphabet Ranking', sub_pattern: 'Odd one out & position ranking', question_count: 2, q_range: [39, 40] },
            ],
          },
          {
            section_id: 'SEC_QUANT_2',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Quantitative Aptitude',
            total_questions: 40,
            duration_minutes: 20,
            max_marks: 40,
            batches: [
              { batch_id: 'Q_APPROX', topic: 'Approximation', sub_pattern: 'Square root, percentage and decimal estimation', question_count: 5, q_range: [41, 45] },
              { batch_id: 'Q_SERIES', topic: 'Missing / Wrong Number Series', sub_pattern: 'Prime difference, alternating, square-cube patterns', question_count: 5, q_range: [46, 50] },
              { batch_id: 'Q_QUAD', topic: 'Quadratic Equations', sub_pattern: 'x vs y factorization and sign method', question_count: 5, q_range: [51, 55] },
              { batch_id: 'Q_DI_1', topic: di1.name, sub_pattern: di1.sub, question_count: 5, q_range: [56, 60], group_type: di1.id },
              { batch_id: 'Q_DI_2', topic: di2.name, sub_pattern: di2.sub, question_count: 5, q_range: [61, 65], group_type: di2.id },
              { batch_id: 'Q_CASELET', topic: 'Caselet DI', sub_pattern: 'Venn Diagram / Arithmetic narrative data (5 Qs)', question_count: 5, q_range: [66, 70], group_type: 'DI_CASELET' },
              { batch_id: 'Q_ARITH_10', topic: 'Arithmetic 10-Bucket Coverage', sub_pattern: '1 Question each from Slots 1 to 10 (Zero Omission)', question_count: 10, q_range: [71, 80] },
            ],
          },
        ],
      };
    }

    // -------------------------------------------------------------------------
    // MATRIX D2: IBPS RRB CLERK PRELIMS (80 Qs | 80M | 45 mins: 40 Reasoning, 40 Numerical)
    // -------------------------------------------------------------------------
    case 'IBPS_RRB_CLERK_PRELIMS': {
      const p1 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 0) % 8];
      const p2 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 1) % 8];
      const p3 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 2) % 8];
      const p4 = OFFICIAL_PUZZLE_ARCHETYPES[(m + 3) % 8];
      const di1 = OFFICIAL_DI_ARCHETYPES[(m + 0) % 5];
      const di2 = OFFICIAL_DI_ARCHETYPES[(m + 1) % 5];

      return {
        exam: 'IBPS_RRB_CLERK',
        stage: 'PRELIMS',
        mock_number: m,
        total_questions: 80,
        total_marks: 80,
        total_duration_minutes: 45,
        sections: [
          {
            section_id: 'SEC_REAS_1',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability',
            total_questions: 40,
            duration_minutes: 25,
            max_marks: 40,
            batches: [
              { batch_id: 'R_PUZ_1', topic: p1.name, sub_pattern: p1.sub, question_count: 5, q_range: [1, 5], group_type: p1.id },
              { batch_id: 'R_PUZ_2', topic: p2.name, sub_pattern: p2.sub, question_count: 5, q_range: [6, 10], group_type: p2.id },
              { batch_id: 'R_PUZ_3', topic: p3.name, sub_pattern: p3.sub, question_count: 5, q_range: [11, 15], group_type: p3.id },
              { batch_id: 'R_PUZ_4', topic: p4.name, sub_pattern: p4.sub, question_count: 5, q_range: [16, 20], group_type: p4.id },
              { batch_id: 'R_ALPHA', topic: 'Alphanumeric Series', sub_pattern: 'Number & Symbol condition series (5 Qs)', question_count: 5, q_range: [21, 25], group_type: 'ALPHANUMERIC_SERIES' },
              { batch_id: 'R_SYLL', topic: 'Syllogism', sub_pattern: 'Standard 2-3 statement deductions', question_count: 4, q_range: [26, 29] },
              { batch_id: 'R_INEQ', topic: 'Inequalities', sub_pattern: 'Direct open gate inequalities', question_count: 4, q_range: [30, 33] },
              { batch_id: 'R_DIR', topic: 'Direction Sense', sub_pattern: 'Cardinal distance & relative positions', question_count: 3, q_range: [34, 36], group_type: 'DIRECTION_SENSE_SET' },
              { batch_id: 'R_BLOOD', topic: 'Blood Relations', sub_pattern: 'Family members generation hierarchy', question_count: 2, q_range: [37, 38], group_type: 'BLOOD_RELATIONS_SET' },
              { batch_id: 'R_MISC', topic: 'Meaningful Word / Pair Test', sub_pattern: 'Standard clerical alphabet speed questions', question_count: 2, q_range: [39, 40] },
            ],
          },
          {
            section_id: 'SEC_QUANT_2',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Numerical Ability',
            total_questions: 40,
            duration_minutes: 20,
            max_marks: 40,
            batches: [
              { batch_id: 'Q_SIMP_15', topic: 'Simplification', sub_pattern: 'BODMAS, percentage fractions, square roots rapid math (15 Qs)', question_count: 15, q_range: [41, 55] },
              { batch_id: 'Q_SERIES', topic: 'Missing Number Series', sub_pattern: 'Standard AP, difference, multi-step series', question_count: 5, q_range: [56, 60] },
              { batch_id: 'Q_DI_1', topic: di1.name, sub_pattern: di1.sub, question_count: 5, q_range: [61, 65], group_type: di1.id },
              { batch_id: 'Q_DI_2', topic: di2.name, sub_pattern: di2.sub, question_count: 5, q_range: [66, 70], group_type: di2.id },
              { batch_id: 'Q_ARITH_10', topic: 'Arithmetic Word Problems', sub_pattern: 'Slots 1 to 10 Complete Syllabus Rotation (10 Qs)', question_count: 10, q_range: [71, 80] },
            ],
          },
        ],
      };
    }

    // -------------------------------------------------------------------------
    // MATRIX E: MAINS EXAMS (SBI PO, IBPS PO, CLERK MAINS, RRB MAINS)
    // -------------------------------------------------------------------------
    case 'SBI_PO_MAINS':
    case 'IBPS_PO_MAINS':
    case 'SBI_CLERK_MAINS':
    case 'IBPS_CLERK_MAINS':
    case 'IBPS_RRB_PO_MAINS':
    case 'IBPS_RRB_CLERK_MAINS':
    default: {
      const isPO = examKey.includes('PO');
      const isRRB = examKey.includes('RRB');
      const totalQ = isRRB ? 200 : isPO ? 170 : examKey.includes('SBI') ? 190 : 160;

      return {
        exam: examKey,
        stage: 'MAINS',
        mock_number: m,
        total_questions: totalQ,
        total_marks: 200,
        total_duration_minutes: isPO ? 180 : 140,
        sections: [
          {
            section_id: 'SEC_REAS_MAINS',
            section_type: 'REASONING_ABILITY',
            display_name: 'Reasoning Ability & Computer Aptitude',
            total_questions: isRRB ? 40 : 40,
            duration_minutes: 45,
            max_marks: 60,
            batches: [
              { batch_id: 'R_MAIN_PUZ_1', topic: 'Multi-Variable Floor & Flat Puzzle', sub_pattern: '8 Persons with Cities & Professions', question_count: 5, q_range: [1, 5], group_type: 'FLOOR_FLAT' },
              { batch_id: 'R_MAIN_PUZ_2', topic: 'Concentric Circular / Square Seating', sub_pattern: 'Two inner and outer tables arrangement', question_count: 5, q_range: [6, 10], group_type: 'CIRCULAR_IN_OUT' },
              { batch_id: 'R_MAIN_PUZ_3', topic: 'Month & Date with Year of Birth', sub_pattern: 'Calculated ages relative to base year', question_count: 5, q_range: [11, 15], group_type: 'MONTH_DATE' },
              { batch_id: 'R_MAIN_PUZ_4', topic: 'Parallel Row with Vacant Seats', sub_pattern: '12 Persons with 2 vacant positions', question_count: 5, q_range: [16, 20], group_type: 'PARALLEL_ROWS' },
              { batch_id: 'R_MAIN_INP_OUT', topic: 'Machine Input-Output', sub_pattern: 'Shifting & mathematical word-number processing', question_count: 4, q_range: [21, 24] },
              { batch_id: 'R_MAIN_CODED', topic: 'Coded Blood Relations & Directions', sub_pattern: 'P#Q means P is north of Q, P@Q means father of Q', question_count: 4, q_range: [25, 28] },
              { batch_id: 'R_MAIN_CRIT', topic: 'Critical / Analytical Reasoning', sub_pattern: 'Course of action, statement assumption & inference', question_count: 6, q_range: [29, 34] },
              { batch_id: 'R_MAIN_DS', topic: 'Reasoning Data Sufficiency', sub_pattern: 'Two-statement sufficiency verification', question_count: 6, q_range: [35, 40] },
            ],
          },
          {
            section_id: 'SEC_QUANT_MAINS',
            section_type: 'QUANTITATIVE_APTITUDE',
            display_name: 'Data Analysis & Interpretation',
            total_questions: isPO ? 35 : 40,
            duration_minutes: 45,
            max_marks: 60,
            batches: [
              { batch_id: 'Q_MAIN_DI_1', topic: 'Missing Data Table DI', sub_pattern: 'Variable arithmetic linkage with missing percentages', question_count: 5, q_range: [41, 45], group_type: 'DI_TABULAR' },
              { batch_id: 'Q_MAIN_DI_2', topic: 'Radar / Spider Graph DI', sub_pattern: 'Performance metrics across 5 parameters', question_count: 5, q_range: [46, 50], group_type: 'DI_DOUBLE_BAR' },
              { batch_id: 'Q_MAIN_DI_3', topic: 'Funnel / Mixed DI (Pie + Table)', sub_pattern: 'Total candidates and pass ratio by category', question_count: 5, q_range: [51, 55], group_type: 'DI_LINE_GRAPH' },
              { batch_id: 'Q_MAIN_CASELET', topic: 'High-Level Arithmetic Caselet', sub_pattern: 'SI/CI and Partnership multi-step narrative', question_count: 5, q_range: [56, 60], group_type: 'DI_CASELET' },
              { batch_id: 'Q_MAIN_Q1Q2', topic: 'Quantity Comparison (Quantity I & II)', sub_pattern: 'Algebraic & geometric value comparison', question_count: 5, q_range: [61, 65] },
              { batch_id: 'Q_MAIN_DS', topic: 'Data Sufficiency in Quant', sub_pattern: 'Evaluating whether Statement I or II is sufficient', question_count: 5, q_range: [66, 70] },
              { batch_id: 'Q_MAIN_ARITH', topic: 'Mains Arithmetic Word Problems', sub_pattern: 'Multi-concept Mixture, Time-Work & Probability', question_count: isPO ? 5 : 10, q_range: [71, isPO ? 75 : 80] },
            ],
          },
        ],
      };
    }
  }
}
