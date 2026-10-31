// src/lib/topicAiGenerator.ts

import { z } from 'zod';
import {
  DifficultyLevel,
  TopicPracticeQuestionData,
  TopicOptionItem,
} from '@/types/topicPractice';
import { getTopicBySlug } from '@/data/syllabusTaxonomy';

// ============================================================================
// 1. UPDATED MASTER SYSTEM PROMPT (STRICT ZERO-TOLERANCE BANKING ENGINE)
// ============================================================================

export const TOPIC_AI_SYSTEM_PROMPT = `
You are an authoritative Question Generation Engine for Indian Banking Examinations (SBI PO/Clerk, IBPS PO/Clerk, RRB PO/Clerk).

SYSTEM DIRECTIVES:
1. STRICT ZERO-TOLERANCE BANS:
   - NEVER start any question with: "In a banking assessment scenario...", "In an analytical problem on...", "Regarding [Topic]...", or similar meta-narratives.
   - NEVER use the phrase "base input", "secondary factor", "parameter P", or "metric".
   - NEVER reuse the template "if X increases by A% and Y decreases by B%".
   - NEVER output arithmetic questions for Reasoning (Puzzles) or English (Reading Comprehension).

2. TRACK DISPATCHER:
   - IF topic in ['Simplification', 'Approximation', 'Quadratic Equations', 'Number Series']:
       Generate purely numeric expressions solving for '?' or comparison of 'x' and 'y'.
   - IF topic in ['Ratio, Proportion & Partnership', 'Simple & Compound Interest', 'Ages', 'Time & Work', 'Boats & Streams', 'Profit & Loss', 'Mixtures']:
       Generate practical word problems with authentic names (e.g., A, B, Aman, Neha), currency amounts (Rs.), weights, or time units.
   - IF topic in ['Floor & Flat Matrix Puzzles', 'Seating Arrangement', 'Direction Sense', 'Syllogism', 'Inequalities']:
       Generate pure logical puzzle premises followed by 1 definitive relational question.
   - IF topic in ['Reading Comprehension & Inferences', 'Cloze Test', 'Error Spotting', 'Para Jumbles']:
       Provide a topical editorial excerpt followed by an inference, main idea, or vocabulary-in-context question.

3. OUTPUT FORMAT:
   Return strictly a JSON object:
   {
     "question_text": "<Clear, authentic body question>",
     "options": [
       {"label": "A", "text": "<Option 1>"},
       {"label": "B", "text": "<Option 2>"},
       {"label": "C", "text": "<Option 3>"},
       {"label": "D", "text": "<Option 4>"},
       {"label": "E", "text": "<Option 5>"}
     ],
     "correct_option": "<A/B/C/D/E>",
     "step_by_step_explanation": "<Detailed derivation mathematical/logical>"
   }
`;

// ============================================================================
// 2. ZOD SCHEMAS FOR STRUCTURED VALIDATION
// ============================================================================

export const TopicQuestionSchema = z.object({
  id: z.string(),
  topicSlug: z.string(),
  difficulty: z.enum(['LEVEL_1_CLERK_PRE', 'LEVEL_2_PO_PRE', 'LEVEL_3_MAINS']),
  examTag: z.string(),
  conceptTag: z.string(),
  commonContextEn: z.string().optional(),
  commonContextHi: z.string().optional(),
  questionEn: z.string(),
  questionHi: z.string(),
  options: z
    .array(
      z.object({
        id: z.enum(['A', 'B', 'C', 'D', 'E']),
        textEn: z.string(),
        textHi: z.string().optional(),
      })
    )
    .length(5),
  correctOption: z.enum(['A', 'B', 'C', 'D', 'E']),
  conventionalSolEn: z.string(),
  conventionalSolHi: z.string(),
  examShortcutEn: z.string(),
  examShortcutHi: z.string(),
  solutionSvgDiagram: z.string().optional(),
  idealTimeSeconds: z.number().int().min(15).max(180),
});

export const TopicQuestionsResponseSchema = z.object({
  topicSlug: z.string(),
  difficulty: z.enum(['LEVEL_1_CLERK_PRE', 'LEVEL_2_PO_PRE', 'LEVEL_3_MAINS']),
  questions: z.array(TopicQuestionSchema),
});

// ============================================================================
// 3. DYNAMIC ENGINE ROUTER: MULTI-TRACK ROUTING LAYER
// ============================================================================

export type TopicRoute =
  | 'ROUTE_1_SPEED_MATH'
  | 'ROUTE_2_ARITHMETIC'
  | 'ROUTE_3_DATA_INTERPRETATION'
  | 'ROUTE_4_REASONING'
  | 'ROUTE_5_ENGLISH'
  | 'ROUTE_6_GA_COMPUTER';

export function resolveTopicRoute(topicSlug: string): TopicRoute {
  const config = getTopicBySlug(topicSlug);
  const cluster = config?.clusterName || '';
  const category = config?.category;

  if (
    cluster.includes('Speed Math') ||
    topicSlug.includes('simplification') ||
    topicSlug.includes('number-series') ||
    topicSlug.includes('quadratic')
  ) {
    return 'ROUTE_1_SPEED_MATH';
  }

  if (cluster.includes('Data Interpretation') || topicSlug.includes('-di')) {
    return 'ROUTE_3_DATA_INTERPRETATION';
  }

  if (category === 'QUANT') {
    return 'ROUTE_2_ARITHMETIC';
  }

  if (category === 'REASONING') {
    return 'ROUTE_4_REASONING';
  }

  if (category === 'LANGUAGE') {
    return 'ROUTE_5_ENGLISH';
  }

  return 'ROUTE_6_GA_COMPUTER';
}

interface QuestionBuildPayload {
  examTag: string;
  conceptTag: string;
  commonContextEn?: string;
  commonContextHi?: string;
  questionEn: string;
  questionHi: string;
  correctAnswer: { en: string; hi: string };
  distractors: { en: string; hi: string }[];
  conventionalSolEn: string;
  conventionalSolHi: string;
  examShortcutEn: string;
  examShortcutHi: string;
  idealTimeSeconds: number;
}

// ----------------------------------------------------------------------------
// ROUTE 1: Speed Math (Simplification / Approximation / Quadratic / Series)
// ----------------------------------------------------------------------------
function buildSpeedMathQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  const variant = Math.abs(seed + index) % 4;

  if (topicSlug.includes('quadratic')) {
    // Quadratic Equations Route
    const rootsA = [2 + (seed % 4), 5 + (seed % 3)]; // e.g. 3, 6
    const rootsB = [rootsA[0] + 1 + (index % 2), rootsA[1] + 2]; // e.g. 5, 8 => x <= y or x < y
    const sumA = rootsA[0] + rootsA[1];
    const prodA = rootsA[0] * rootsA[1];
    const sumB = rootsB[0] + rootsB[1];
    const prodB = rootsB[0] * rootsB[1];

    const eqI = `x² - ${sumA}x + ${prodA} = 0`;
    const eqII = `y² - ${sumB}y + ${prodB} = 0`;

    return {
      examTag: difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims Style' : 'IBPS PO Prelims Pattern',
      conceptTag: 'Quadratic Equation Root Comparison',
      questionEn: `In each of the following questions, two equations I and II are given. You have to solve both equations and establish the correct relationship between x and y:\n\nI. ${eqI}\nII. ${eqII}`,
      questionHi: `निम्नलिखित प्रत्येक प्रश्न में दो समीकरण I और II दिए गए हैं। दोनों समीकरणों को हल करके x और y के बीच संबंध स्थापित कीजिए:\n\nI. ${eqI}\nII. ${eqII}`,
      correctAnswer: { en: 'x < y', hi: 'x < y' },
      distractors: [
        { en: 'x > y', hi: 'x > y' },
        { en: 'x ≤ y', hi: 'x ≤ y' },
        { en: 'x ≥ y', hi: 'x ≥ y' },
        { en: 'x = y or relationship cannot be established (CND)', hi: 'x = y अथवा संबंध स्थापित नहीं किया जा सकता (CND)' },
      ],
      conventionalSolEn: `Equation I: ${eqI} ➔ (x - ${rootsA[0]})(x - ${rootsA[1]}) = 0 ➔ x = ${rootsA[0]}, ${rootsA[1]}.\nEquation II: ${eqII} ➔ (y - ${rootsB[0]})(y - ${rootsB[1]}) = 0 ➔ y = ${rootsB[0]}, ${rootsB[1]}.\nComparing all root pairs: both ${rootsA[0]} and ${rootsA[1]} are strictly less than ${rootsB[0]} and ${rootsB[1]}. Hence, x < y.`,
      conventionalSolHi: `समीकरण I से: x के मूल = ${rootsA[0]}, ${rootsA[1]}.\nसमीकरण II से: y के मूल = ${rootsB[0]}, ${rootsB[1]}.\nतुलना करने पर x के दोनों मूल y के मूलों से छोटे हैं। अतः x < y।`,
      examShortcutEn: `Sign rule: Both equations have (-, +) signs, meaning all roots are (+, +). Quick factor comparison gives roots directly without writing full quadratic formulas.`,
      examShortcutHi: `चिह्न नियम: दोनों समीकरणों में (-, +) है, अतः दोनों मूल धनात्मक (+, +) होंगे। गुणनखंड से सीधे तुलना करें।`,
      idealTimeSeconds: 25,
    };
  }

  if (topicSlug.includes('number-series')) {
    // Number Series Route
    const base = 12 + ((seed + index * 7) % 20);
    const diffs = [7, 11, 15, 19, 23]; // AP of diffs (+4)
    const t0 = base;
    const t1 = t0 + diffs[0];
    const t2 = t1 + diffs[1];
    const t3 = t2 + diffs[2];
    const t4 = t3 + diffs[3];
    const missing = t4 + diffs[4];

    return {
      examTag: difficulty === 'LEVEL_1_CLERK_PRE' ? 'IBPS Clerk Prelims Pattern' : 'SBI PO Prelims Style',
      conceptTag: 'Double Difference Arithmetic Series',
      questionEn: `What should come in place of the question mark (?) in the following number series?\n\n${t0},  ${t1},  ${t2},  ${t3},  ${t4},  ?`,
      questionHi: `निम्नलिखित संख्या श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\n\n${t0},  ${t1},  ${t2},  ${t3},  ${t4},  ?`,
      correctAnswer: { en: `${missing}`, hi: `${missing}` },
      distractors: [
        { en: `${missing + 4}`, hi: `${missing + 4}` },
        { en: `${missing - 4}`, hi: `${missing - 4}` },
        { en: `${missing + 8}`, hi: `${missing + 8}` },
        { en: `${missing - 6}`, hi: `${missing - 6}` },
      ],
      conventionalSolEn: `Step 1: Check difference between consecutive terms:\n${t1} - ${t0} = ${diffs[0]}\n${t2} - ${t1} = ${diffs[1]}\n${t3} - ${t2} = ${diffs[2]}\n${t4} - ${t3} = ${diffs[3]}\nStep 2: Check double difference: 11 - 7 = 4, 15 - 11 = 4, 19 - 15 = 4 (constant difference of +4).\nNext difference = 19 + 4 = 23.\nMissing term = ${t4} + 23 = ${missing}.`,
      conventionalSolHi: `पदों के बीच अंतर: +7, +11, +15, +19 (प्रत्येक अंतर में +4 की वृद्धि).\nअगला अंतर = 19 + 4 = 23.\nअतः ? = ${t4} + 23 = ${missing}।`,
      examShortcutEn: `Double difference constant (+4). Add 23 to ${t4} in 10 seconds.`,
      examShortcutHi: `दोहरा अंतर +4 स्थिर है। ${t4} में 23 जोड़ें ➔ ${missing}।`,
      idealTimeSeconds: 30,
    };
  }

  // Pure Simplification & Approximation
  if (variant === 0) {
    // (A * B) / C + D^2 - ? = sqrt(E)
    // Numbers: (360 * 15) / 18 + 14^2 - ? = sqrt(1764)
    // 300 + 196 - ? = 42 => 496 - ? = 42 => ? = 454
    return {
      examTag: 'SBI Clerk Prelims Style',
      conceptTag: 'BODMAS, Squares & Square Roots',
      questionEn: `What will come in place of the question mark (?) in the following question?\n\n(360 × 15) ÷ 18 + 14² - ? = √1764`,
      questionHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n\n(360 × 15) ÷ 18 + 14² - ? = √1764`,
      correctAnswer: { en: '454', hi: '454' },
      distractors: [
        { en: '464', hi: '464' },
        { en: '444', hi: '444' },
        { en: '434', hi: '434' },
        { en: '474', hi: '474' },
      ],
      conventionalSolEn: `Step 1: Apply BODMAS.\n(360 × 15) ÷ 18 = 20 × 15 = 300.\nStep 2: 14² = 196.\nStep 3: √1764 = 42 (since 40² = 1600 and 42² = 1764).\nStep 4: 300 + 196 - ? = 42\n496 - ? = 42\n? = 496 - 42 = 454.`,
      conventionalSolHi: `चरण 1: (360 × 15) ÷ 18 = 300.\nचरण 2: 14² = 196.\nचरण 3: √1764 = 42.\nचरण 4: 300 + 196 - ? = 42 ➔ ? = 496 - 42 = 454.`,
      examShortcutEn: `Digital root verification: Digital sum of LHS must equal digital sum of RHS (6). 454 has digital root 4+5+4 = 13 ➔ 4. Exact direct calculation takes 18 seconds.`,
      examShortcutHi: `BODMAS से पहले भाग फिर गुणा करें: 20 × 15 = 300; 300 + 196 - 42 = 454.`,
      idealTimeSeconds: 25,
    };
  } else if (variant === 1) {
    // ?% of 450 + 12.5% of 960 = 19^2 - 106
    // ?% of 450 + 120 = 361 - 106 = 255 => ?% of 450 = 135 => ? = 30
    return {
      examTag: 'IBPS Clerk Prelims Pattern',
      conceptTag: 'Fraction-to-Percentage Conversion',
      questionEn: `What will come in place of the question mark (?) in the following question?\n\n?% of 450 + 12.5% of 960 = 19² - 106`,
      questionHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n\n450 का ?% + 960 का 12.5% = 19² - 106`,
      correctAnswer: { en: '30', hi: '30' },
      distractors: [
        { en: '24', hi: '24' },
        { en: '36', hi: '36' },
        { en: '25', hi: '25' },
        { en: '42', hi: '42' },
      ],
      conventionalSolEn: `Step 1: 12.5% is equivalent to 1/8. (1/8) × 960 = 120.\nStep 2: 19² = 361. 361 - 106 = 255.\nStep 3: (? / 100) × 450 + 120 = 255\n4.5 × ? = 255 - 120 = 135\n? = 135 / 4.5 = 30.`,
      conventionalSolHi: `चरण 1: 12.5% = 1/8. 960 का 1/8 = 120.\nचरण 2: 19² - 106 = 361 - 106 = 255.\nचरण 3: (? / 100) × 450 = 255 - 120 = 135 ➔ ? = 135 / 4.5 = 30.`,
      examShortcutEn: `Remember standard banking fraction: 12.5% = 1/8. Division by 8 takes 2 seconds: 960/8 = 120. Then 135/4.5 = 30.`,
      examShortcutHi: `मानक भिन्न 12.5% = 1/8 याद रखें। 960 ÷ 8 = 120. शेष 135 ÷ 4.5 = 30.`,
      idealTimeSeconds: 25,
    };
  } else if (variant === 2) {
    // 48% of 650 - ? + 16^2 = 28 * 15
    // 312 - ? + 256 = 420 => 568 - ? = 420 => ? = 148
    return {
      examTag: 'SBI PO Prelims Approximation Drill',
      conceptTag: 'Percentage Splitting Technique',
      questionEn: `What will come in place of the question mark (?) in the following question?\n\n48% of 650 - ? + 16² = 28 × 15`,
      questionHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n\n650 का 48% - ? + 16² = 28 × 15`,
      correctAnswer: { en: '148', hi: '148' },
      distractors: [
        { en: '138', hi: '138' },
        { en: '158', hi: '158' },
        { en: '142', hi: '142' },
        { en: '152', hi: '152' },
      ],
      conventionalSolEn: `Step 1: 48% of 650 = (50% - 2%) of 650 = 325 - 13 = 312.\nStep 2: 16² = 256.\nStep 3: 28 × 15 = 28 × 10 + 140 = 420.\nStep 4: 312 - ? + 256 = 420\n568 - ? = 420\n? = 568 - 420 = 148.`,
      conventionalSolHi: `चरण 1: 48% = 50% - 2% ➔ 325 - 13 = 312.\nचरण 2: 16² = 256.\nचरण 3: 28 × 15 = 420.\nचरण 4: 312 + 256 - 420 = 148.`,
      examShortcutEn: `Split percentage: 48% = 50% - 2%. Half of 650 is 325, minus 13 = 312. Unit digit calculation confirms answer ends in 8.`,
      examShortcutHi: `प्रतिशत विभाजन: 50% - 2% = 325 - 13 = 312. इकाई अंक 2 + 6 - 0 = 8.`,
      idealTimeSeconds: 28,
    };
  } else {
    // Approximation: sqrt(624.98) * 14.02 - 179.91 / 5.98 = ?^2 - 15.01
    // 25 * 14 - 180 / 6 = ?^2 - 15 => 350 - 30 = 320 => ?^2 - 15 = 320 => ?^2 = 335 => ? ≈ 18
    return {
      examTag: 'IBPS PO Prelims Approximation',
      conceptTag: 'Surds and Decimal Approximation',
      questionEn: `What approximate value should come in place of the question mark (?) in the following question? (Note: You are not expected to calculate the exact value)\n\n√624.98 × 14.02 - 179.91 ÷ 5.98 = ?² - 15.01`,
      questionHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिह्न (?) के स्थान पर लगभग क्या मान आना चाहिए? (नोट: आपसे सटीक मान की गणना करने की अपेक्षा नहीं है)\n\n√624.98 × 14.02 - 179.91 ÷ 5.98 = ?² - 15.01`,
      correctAnswer: { en: '18', hi: '18' },
      distractors: [
        { en: '14', hi: '14' },
        { en: '22', hi: '22' },
        { en: '26', hi: '26' },
        { en: '12', hi: '12' },
      ],
      conventionalSolEn: `Step 1: Round to nearest whole numbers:\n√624.98 ≈ √625 = 25\n14.02 ≈ 14\n179.91 ÷ 5.98 ≈ 180 ÷ 6 = 30\n15.01 ≈ 15\nStep 2: 25 × 14 - 30 = 350 - 30 = 320.\nStep 3: 320 = ?² - 15 ➔ ?² = 335.\nSince 18² = 324 and 19² = 361, 335 is closest to 18² = 324. Hence ? ≈ 18.`,
      conventionalSolHi: `निकटतम पूर्णांक मान:\n√625 = 25, 25 × 14 = 350.\n180 ÷ 6 = 30. 350 - 30 = 320.\n?² - 15 = 320 ➔ ?² = 335 ➔ ? ≈ 18 (चूंकि 18² = 324).`,
      examShortcutEn: `Round aggressively: 25 × 14 = 350; 350 - 30 + 15 = 335. Closest perfect square is 18² (324). Takes 20s.`,
      examShortcutHi: `सीधे राउंड करें: 350 - 30 + 15 = 335. निकटतम वर्ग 18² (324) है।`,
      idealTimeSeconds: 30,
    };
  }
}

// ----------------------------------------------------------------------------
// ROUTE 2: Arithmetic Word Problems (Partnership, SI-CI, Time & Work, etc.)
// ----------------------------------------------------------------------------
function buildArithmeticQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  const variant = Math.abs(seed + index) % 4;

  if (topicSlug.includes('interest')) {
    // SI-CI Route
    const P = 8000 + (index % 4) * 2000;
    const R = 10;
    const diff = (P * R * R) / 10000; // P * (R/100)^2

    return {
      examTag: difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims' : 'IBPS PO Prelims',
      conceptTag: 'Compound Interest vs Simple Interest Difference',
      questionEn: `A sum of Rs. ${P.toLocaleString('en-IN')} is invested for 2 years at an interest rate of ${R}% per annum. What is the difference between the compound interest (compounded annually) and the simple interest earned on the same sum over the 2-year period?`,
      questionHi: `रु. ${P.toLocaleString('en-IN')} की धनराशि 2 वर्ष के लिए ${R}% वार्षिक ब्याज दर पर निवेश की जाती है। उसी धनराशि पर 2 वर्ष में अर्जित चक्रवृद्धि ब्याज (वार्षिक संयोजित) और साधारण ब्याज के बीच का अंतर क्या है?`,
      correctAnswer: { en: `Rs. ${diff}`, hi: `रु. ${diff}` },
      distractors: [
        { en: `Rs. ${diff + 20}`, hi: `रु. ${diff + 20}` },
        { en: `Rs. ${diff - 20}`, hi: `रु. ${diff - 20}` },
        { en: `Rs. ${diff + 40}`, hi: `रु. ${diff + 40}` },
        { en: `Rs. ${diff + 60}`, hi: `रु. ${diff + 60}` },
      ],
      conventionalSolEn: `SI for 2 years = (P × R × T) / 100 = (${P} × 10 × 2) / 100 = Rs. ${(P * 20) / 100}.\nCI for 2 years = P[(1 + R/100)² - 1] = ${P}[(1.1)² - 1] = ${P} × 0.21 = Rs. ${P * 0.21}.\nDifference = CI - SI = Rs. ${P * 0.21} - Rs. ${(P * 20) / 100} = Rs. ${diff}.`,
      conventionalSolHi: `2 वर्ष का साधारण ब्याज = (${P} × 10 × 2)/100 = रु. ${(P * 20) / 100}.\n2 वर्ष का चक्रवृद्धि ब्याज = ${P} × 0.21 = रु. ${P * 0.21}.\nअंतर = रु. ${diff}।`,
      examShortcutEn: `Direct 2-year CI-SI Difference formula: Difference = P × (R / 100)² = ${P} × (10/100)² = ${P} / 100 = Rs. ${diff}. Calculated in 15 seconds!`,
      examShortcutHi: `2 वर्ष के CI-SI अंतर का सीधा सूत्र: अंतर = P × (R/100)² = ${P} × (1/100) = रु. ${diff}।`,
      idealTimeSeconds: 30,
    };
  }

  if (topicSlug.includes('time-speed-distance') || topicSlug.includes('boat')) {
    // TSD / Trains / Boats Route
    // Train of 200m at 72 km/h crosses platform of 260m
    return {
      examTag: 'IBPS PO Prelims Standard',
      conceptTag: 'Train Crossing Platform & Speed Conversion',
      questionEn: `A train running at a uniform speed of 72 km/h crosses a 260-meter-long railway platform in 23 seconds. How much time (in seconds) will the same train take to cross an electric pole?`,
      questionHi: `72 किमी/घंटा की समान गति से चलने वाली एक रेलगाड़ी 260 मीटर लंबे रेलवे प्लेटफॉर्म को 23 सेकंड में पार करती है। वही रेलगाड़ी एक बिजली के खंभे को पार करने में कितना समय (सेकंड में) लेगी?`,
      correctAnswer: { en: '10 seconds', hi: '10 सेकंड' },
      distractors: [
        { en: '12 seconds', hi: '12 सेकंड' },
        { en: '14 seconds', hi: '14 सेकंड' },
        { en: '8 seconds', hi: '8 सेकंड' },
        { en: '15 seconds', hi: '15 सेकंड' },
      ],
      conventionalSolEn: `Step 1: Convert speed to m/s: 72 × (5/18) = 20 m/s.\nStep 2: Total distance covered in crossing platform = Length of train (L) + Length of platform (260m).\nDistance = Speed × Time ➔ L + 260 = 20 × 23 = 460 m ➔ L = 460 - 260 = 200 m.\nStep 3: Time to cross an electric pole = Train length / Speed = 200 / 20 = 10 seconds.`,
      conventionalSolHi: `चाल = 72 × 5/18 = 20 मीटर/सेकंड।\nगाड़ी की लंबाई (L) + 260 = 20 × 23 = 460 ➔ L = 200 मीटर।\nखंभे को पार करने का समय = 200 ÷ 20 = 10 सेकंड।`,
      examShortcutEn: `Speed is 20 m/s. In 23s distance is 460m. Train length = 460 - 260 = 200m. 200 / 20 = 10s directly.`,
      examShortcutHi: `चाल = 20 मी/से. कुल दूरी = 460 मी. ट्रेन = 200 मी. समय = 200 ÷ 20 = 10 सेकंड.`,
      idealTimeSeconds: 40,
    };
  }

  if (topicSlug.includes('time-work') || topicSlug.includes('pipe')) {
    // Time & Work / Pipes Route
    return {
      examTag: 'SBI Clerk Prelims Style',
      conceptTag: 'LCM Efficiency Method in Work & Wages',
      questionEn: `A can complete a piece of work alone in 18 days and B can complete the same work alone in 24 days. Both of them started working together, but B left the work after 6 days. In how many more days will A alone complete the remaining work?`,
      questionHi: `A अकेला किसी कार्य को 18 दिनों में पूरा कर सकता है तथा B उसी कार्य को अकेले 24 दिनों में पूरा कर सकता है। दोनों ने एक साथ कार्य करना प्रारंभ किया, किन्तु 6 दिनों के बाद B कार्य छोड़ देता है। शेष कार्य को A अकेला कितने और दिनों में पूरा करेगा?`,
      correctAnswer: { en: '7.5 days', hi: '7.5 दिन' },
      distractors: [
        { en: '9 days', hi: '9 दिन' },
        { en: '8 days', hi: '8 दिन' },
        { en: '6.5 days', hi: '6.5 दिन' },
        { en: '10 days', hi: '10 दिन' },
      ],
      conventionalSolEn: `Step 1: Total work = LCM(18, 24) = 72 units.\nEfficiency of A = 72 / 18 = 4 units/day.\nEfficiency of B = 72 / 24 = 3 units/day.\nStep 2: Combined efficiency of (A + B) = 4 + 3 = 7 units/day.\nWork completed in first 6 days = 7 × 6 = 42 units.\nStep 3: Remaining work = 72 - 42 = 30 units.\nDays taken by A alone = Remaining work / A's efficiency = 30 / 4 = 7.5 days.`,
      conventionalSolHi: `कुल कार्य = LCM(18, 24) = 72 इकाई।\nA की क्षमता = 72/18 = 4 इकाई/दिन, B की क्षमता = 72/24 = 3 इकाई/दिन।\n6 दिनों में किया गया कार्य = (4 + 3) × 6 = 42 इकाई।\nशेष कार्य = 72 - 42 = 30 इकाई।\nA द्वारा लिया गया अतिरिक्त समय = 30 ÷ 4 = 7.5 दिन।`,
      examShortcutEn: `Total 72 units. (4 + 3) × 6 = 42 done. Remaining 30 units. A completes at 4 units/day ➔ 30/4 = 7.5 days.`,
      examShortcutHi: `LCM = 72 इकाई। 6 दिन में 42 इकाई समाप्त। शेष 30 ÷ 4 = 7.5 दिन।`,
      idealTimeSeconds: 35,
    };
  }

  // General Partnership / Profit-Loss Default
  if (variant % 2 === 0) {
    // Partnership Word Problem
    return {
      examTag: 'IBPS PO Prelims Standard',
      conceptTag: 'Partnership with Unequal Investment Duration',
      questionEn: `A and B entered into a business partnership with initial investments of Rs. 4,800 and Rs. 7,200 respectively. After 6 months, B withdrew Rs. 1,200 from his capital and C joined them with an investment of Rs. 6,000. If the total annual profit earned by the business at the end of the year was Rs. 13,200, find the profit share of B.`,
      questionHi: `A और B ने क्रमशः रु. 4,800 और रु. 7,200 के प्रारंभिक निवेश के साथ एक साझेदारी व्यवसाय प्रारंभ किया। 6 महीने के बाद, B ने अपनी पूंजी से रु. 1,200 निकाल लिए तथा C रु. 6,000 के निवेश के साथ उनके साथ जुड़ गया। यदि वर्ष के अंत में व्यवसाय द्वारा अर्जित कुल वार्षिक लाभ रु. 13,200 था, तो B का लाभ हिस्सा ज्ञात कीजिए।`,
      correctAnswer: { en: 'Rs. 5,280', hi: 'रु. 5,280' },
      distractors: [
        { en: 'Rs. 4,800', hi: 'रु. 4,800' },
        { en: 'Rs. 5,600', hi: 'रु. 5,600' },
        { en: 'Rs. 4,400', hi: 'रु. 4,400' },
        { en: 'Rs. 5,120', hi: 'रु. 5,120' },
      ],
      conventionalSolEn: `Step 1: Calculate capital-month equivalent for each partner:\nA's share = 4,800 × 12 = 57,600.\nB's share = (7,200 × 6) + [(7,200 - 1,200) × 6] = 43,200 + (6,000 × 6) = 43,200 + 36,000 = 79,200.\nC's share = 6,000 × 6 = 36,000.\nStep 2: Ratio of profit shares A : B : C = 57,600 : 79,200 : 36,000\nDivide by 7,200 ➔ 8 : 11 : 5.\nStep 3: Total ratio units = 8 + 11 + 5 = 24 units.\nB's profit share = (11 / 24) × 13,200 = 11 × 550 = Rs. 5,280.`,
      conventionalSolHi: `A का भारित अनुपात = 4800 × 12 = 57,600.\nB का भारित अनुपात = (7200 × 6) + (6000 × 6) = 79,200.\nC का भारित अनुपात = 6000 × 6 = 36,000.\nलाभ अनुपात A : B : C = 576 : 792 : 360 = 8 : 11 : 5.\nकुल इकाई = 24. 1 इकाई = 13,200 / 24 = 550.\nB का हिस्सा = 11 × 550 = रु. 5,280।`,
      examShortcutEn: `Cancel common factor 1,200 initially: A = 4 × 12 = 48. B = (6 × 6) + (5 × 6) = 66. C = 5 × 6 = 30. Ratio = 48 : 66 : 30 = 8 : 11 : 5. Total = 24 units. 1 unit = 13200/24 = 550. B = 11 × 550 = Rs. 5,280.`,
      examShortcutHi: `प्रारंभ में ही 1200 से भाग देकर अनुपात छोटा करें: 8 : 11 : 5. कुल 24 इकाई = 13200 ➔ B = 11 × 550 = रु. 5,280.`,
      idealTimeSeconds: 50,
    };
  } else {
    // Profit & Loss with Markup and Discount
    return {
      examTag: 'SBI PO Prelims Standard',
      conceptTag: 'Cost Price, Markup & Customer Discount Relation',
      questionEn: `A merchant marks the price of an article 40% above its cost price and allows a discount of 15% to a customer on the marked price. If he earns a total profit of Rs. 285 on selling the article, find the cost price of the article.`,
      questionHi: `एक व्यापारी किसी वस्तु का मूल्य उसके क्रय मूल्य से 40% अधिक अंकित करता है और ग्राहक को अंकित मूल्य पर 15% की छूट देता है। यदि वह वस्तु को बेचकर कुल रु. 285 का लाभ कमाता है, तो वस्तु का क्रय मूल्य ज्ञात कीजिए।`,
      correctAnswer: { en: 'Rs. 1,500', hi: 'रु. 1,500' },
      distractors: [
        { en: 'Rs. 1,400', hi: 'रु. 1,400' },
        { en: 'Rs. 1,600', hi: 'रु. 1,600' },
        { en: 'Rs. 1,750', hi: 'रु. 1,750' },
        { en: 'Rs. 1,250', hi: 'रु. 1,250' },
      ],
      conventionalSolEn: `Step 1: Let Cost Price (CP) = 100 units.\nMarked Price (MP) = 100 + 40% = 140 units.\nStep 2: Discount = 15% of 140 = 0.15 × 140 = 21 units.\nSelling Price (SP) = 140 - 21 = 119 units.\nStep 3: Profit = SP - CP = 119 - 100 = 19 units.\nGiven profit = Rs. 285 ➔ 19 units = Rs. 285 ➔ 1 unit = 285 / 19 = Rs. 15.\nCost Price = 100 × 15 = Rs. 1,500.`,
      conventionalSolHi: `मान लें CP = 100 इकाई. MP = 140 इकाई.\nछूट = 140 का 15% = 21 इकाई ➔ SP = 140 - 21 = 119 इकाई.\nलाभ = 119 - 100 = 19 इकाई = रु. 285.\n1 इकाई = 285 ÷ 19 = रु. 15 ➔ CP = 100 × 15 = रु. 1,500।`,
      examShortcutEn: `Net profit % = Markup% - Discount% - (Markup × Discount)/100 = 40 - 15 - (40 × 15)/100 = 25 - 6 = 19%. 19% of CP = 285 ➔ CP = 285 / 0.19 = Rs. 1,500.`,
      examShortcutHi: `शुद्ध लाभ % = 40 - 15 - 6 = 19%. CP का 19% = 285 ➔ CP = 285 ÷ 0.19 = रु. 1,500.`,
      idealTimeSeconds: 45,
    };
  }
}

// ----------------------------------------------------------------------------
// ROUTE 3: Data Interpretation (Caselets, Tables, Graphs)
// ----------------------------------------------------------------------------
function buildDIQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  return {
    examTag: 'IBPS PO Prelims Caselet DI',
    conceptTag: '3-Set Venn Diagram Distribution & Proportions',
    commonContextEn: `Directions: Study the following information carefully and answer the question that follows:\n\nIn an inter-college sports festival of 600 students, each student participates in at least one game among Badminton, Table Tennis, and Cricket.\n- 40% of the total students participate in Badminton.\n- 45% of the total students participate in Table Tennis.\n- 35% of the total students participate in Cricket.\n- 12% participate in both Badminton and Table Tennis but not Cricket.\n- 8% participate in both Table Tennis and Cricket but not Badminton.\n- 5% participate in all three sports.\n- 6% participate in both Badminton and Cricket but not Table Tennis.`,
    commonContextHi: `निर्देश: निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन कीजिए और नीचे दिए गए प्रश्न का उत्तर दीजिए:\n\n600 विद्यार्थियों के एक अंतर-कॉलेज खेल उत्सव में, प्रत्येक विद्यार्थी बैडमिंटन, टेबल टेनिस और क्रिकेट में से कम से कम एक खेल में भाग लेता है।\n- कुल विद्यार्थियों के 40% बैडमिंटन में भाग लेते हैं।\n- कुल विद्यार्थियों के 45% टेबल टेनिस में भाग लेते हैं।\n- कुल विद्यार्थियों के 35% क्रिकेट में भाग लेते हैं।\n- 12% केवल बैडमिंटन और टेबल टेनिस दोनों में भाग लेते हैं किन्तु क्रिकेट में नहीं।\n- 8% केवल टेबल टेनिस और क्रिकेट दोनों में भाग लेते हैं किन्तु बैडमिंटन में नहीं।\n- 5% तीनों खेलों में भाग लेते हैं।\n- 6% केवल बैडमिंटन और क्रिकेट दोनों में भाग लेते हैं किन्तु टेबल टेनिस में नहीं।`,
    questionEn: `How many students participate in ONLY Badminton?`,
    questionHi: `केवल बैडमिंटन में भाग लेने वाले विद्यार्थियों की कुल संख्या कितनी है?`,
    correctAnswer: { en: '102 students', hi: '102 विद्यार्थी' },
    distractors: [
      { en: '114 students', hi: '114 विद्यार्थी' },
      { en: '96 students', hi: '96 विद्यार्थी' },
      { en: '120 students', hi: '120 विद्यार्थी' },
      { en: '84 students', hi: '84 विद्यार्थी' },
    ],
    conventionalSolEn: `Step 1: Total students = 600.\nTotal in Badminton = 40% of 600 = 240.\nStep 2: Break down the Badminton circle in Venn Diagram:\n- Badminton and Table Tennis only = 12% of 600 = 72.\n- Badminton and Cricket only = 6% of 600 = 36.\n- All three sports = 5% of 600 = 30.\nStep 3: Only Badminton = Total Badminton - (Badminton & TT only + Badminton & Cricket only + All 3)\nOnly Badminton = 240 - (72 + 36 + 30) = 240 - 138 = 102 students.`,
    conventionalSolHi: `कुल छात्र = 600. बैडमिंटन = 600 का 40% = 240.\nबैडमिंटन व टीटी केवल = 72.\nबैडमिंटन व क्रिकेट केवल = 36.\nतीनों खेल = 30.\nकेवल बैडमिंटन = 240 - (72 + 36 + 30) = 240 - 138 = 102 विद्यार्थी।`,
    examShortcutEn: `Direct percentage subtraction: Only Badminton % = 40% - (12% + 6% + 5%) = 40% - 23% = 17%. 17% of 600 = 17 × 6 = 102. Done in 20 seconds without calculating intermediate values!`,
    examShortcutHi: `सीधे प्रतिशत में घटाएं: 40% - 23% = 17%. 600 का 17% = 17 × 6 = 102 विद्यार्थी।`,
    idealTimeSeconds: 45,
  };
}

// ----------------------------------------------------------------------------
// ROUTE 4: Reasoning Ability (Floor/Flat, Seating, Syllogisms, Inequalities)
// ----------------------------------------------------------------------------
function buildReasoningQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  if (topicSlug.includes('syllogism')) {
    return {
      examTag: 'SBI PO Prelims Standard',
      conceptTag: 'Only a few & Possibility Deductions',
      questionEn: `Directions: In the question below are given statements followed by two conclusions numbered I and II. You have to take the given statements to be true even if they seem to be at variance from commonly known facts.\n\nStatements:\nOnly a few Laptops are Computers.\nAll Computers are Tablets.\nNo Tablet is a Smartphone.\n\nConclusions:\nI. Some Laptops are not Smartphones.\nII. All Laptops can never be Tablets.`,
      questionHi: `निर्देश: नीचे दिए गए प्रश्न में कुछ कथन और उनके बाद दो निष्कर्ष I और II दिए गए हैं। दिए गए कथनों को सत्य मानिए भले ही वे सर्वज्ञात तथ्यों से भिन्न प्रतीत होते हों।\n\nकथन:\nकेवल कुछ लैपटॉप कंप्यूटर हैं।\nसभी कंप्यूटर टैबलेट हैं।\nकोई टैबलेट स्मार्टफोन नहीं है।\n\nनिष्कर्ष:\nI. कुछ लैपटॉप स्मार्टफोन नहीं हैं।\nII. सभी लैपटॉप कभी भी टैबलेट नहीं हो सकते।`,
      correctAnswer: { en: 'Only conclusion I follows', hi: 'केवल निष्कर्ष I अनुसरण करता है' },
      distractors: [
        { en: 'Only conclusion II follows', hi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { en: 'Either conclusion I or II follows', hi: 'या तो निष्कर्ष I या II अनुसरण करता है' },
        { en: 'Neither conclusion I nor II follows', hi: 'न तो निष्कर्ष I और न ही II अनुसरण करता है' },
        { en: 'Both conclusions I and II follow', hi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
      ],
      conventionalSolEn: `1. The portion of Laptops that are Computers are also Tablets. Since No Tablet is a Smartphone, that common portion of Laptops can never be a Smartphone. Hence Conclusion I ('Some Laptops are not Smartphones') is 100% definitively TRUE.\n2. 'Only a few Laptops are Computers' restricts Laptops from being entirely Computers, but does NOT prevent all Laptops from being inside Tablets. Conclusion II ('All Laptops can never be Tablets') is FALSE because all Laptops can comfortably reside inside Tablets without violating any statement.`,
      conventionalSolHi: `1. लैपटॉप का जो भाग कंप्यूटर है वह टैबलेट भी है। चूंकि कोई टैबलेट स्मार्टफोन नहीं है, अतः लैपटॉप का वह भाग कभी स्मार्टफोन नहीं हो सकता (निष्कर्ष I सत्य है)।\n2. 'केवल कुछ लैपटॉप कंप्यूटर हैं' लैपटॉप को पूरी तरह टैबलेट होने से नहीं रोकता (निष्कर्ष II असत्य है)।`,
      examShortcutEn: `Venn overlap: Common region (Laptop ∩ Computer) is completely quarantined from Smartphone by Tablet boundary ➔ Conclusion I must hold. 'Only a few Laptops are Computers' doesn't lock Tablets ➔ Conclusion II fails.`,
      examShortcutHi: `लैपटॉप और कंप्यूटर का उभयनिष्ठ भाग स्मार्टफोन से प्रतिबंधित है, अतः I सही है। केवल I अनुसरण करता है।`,
      idealTimeSeconds: 30,
    };
  }

  if (topicSlug.includes('inequalit')) {
    return {
      examTag: 'IBPS Clerk Prelims Speed Test',
      conceptTag: 'Coded Inequality & Definite Relations',
      questionEn: `Directions: In the following question, assuming the given statements to be true, find which of the conclusions is/are definitely true:\n\nStatements: M ≥ N > O = P ≤ Q < R\n\nConclusions:\nI. M > P\nII. R > P`,
      questionHi: `निर्देश: निम्नलिखित प्रश्न में दिए गए कथनों को सत्य मानते हुए ज्ञात कीजिए कि कौन सा/से निष्कर्ष निश्चित रूप से सत्य है/हैं:\n\nकथन: M ≥ N > O = P ≤ Q < R\n\nनिष्कर्ष:\nI. M > P\nII. R > P`,
      correctAnswer: { en: 'Both conclusions I and II follow', hi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
      distractors: [
        { en: 'Only conclusion I follows', hi: 'केवल निष्कर्ष I अनुसरण करता है' },
        { en: 'Only conclusion II follows', hi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { en: 'Either conclusion I or II follows', hi: 'या तो निष्कर्ष I या II अनुसरण करता है' },
        { en: 'Neither conclusion I nor II follows', hi: 'न तो निष्कर्ष I और न ही II अनुसरण करता है' },
      ],
      conventionalSolEn: `From the statement chain:\nFor Conclusion I: M ≥ N > O = P. From M to P, we have '≥' and '>' signs in the same direction. Since '>' has higher priority than '≥', M > P is definitely TRUE.\nFor Conclusion II: P ≤ Q < R. Moving from R to P: R > Q ≥ P. Between R and P, '>' has higher priority. Hence R > P is definitely TRUE.`,
      conventionalSolHi: `M से P तक: M ≥ N > O = P में '>' उपस्थित है, अतः M > P सत्य है।\nR से P तक: R > Q ≥ P में '>' उपस्थित है, अतः R > P सत्य है। दोनों अनुसरण करते हैं।`,
      examShortcutEn: `Open gate rule: Route from M to P is unobstructed with a strict '>' gate. Route from R to P is unobstructed with strict '>' gate. Both hold in under 10 seconds!`,
      examShortcutHi: `ओपन गेट विधि: M से P तथा R से P दोनों मार्ग खुले हैं और '>' विद्यमान है। दोनों सत्य हैं।`,
      idealTimeSeconds: 20,
    };
  }

  // Floor & Flat Matrix Puzzle
  return {
    examTag: 'SBI PO Prelims Standard Puzzle',
    conceptTag: '4-Storey 2-Flat Matrix Arrangement',
    commonContextEn: `Directions: Study the following information carefully and answer the question below:\n\nEight persons A, B, C, D, E, F, G, and H live in a 4-storey building where the lowermost floor is numbered 1 and the topmost floor is 4. Each floor has two flats: Flat 1 and Flat 2. Flat 1 is to the west of Flat 2.\n- C lives on an even-numbered floor in Flat 1.\n- Only one floor is between C and A, and both live in the same flat (Flat 1).\n- B lives immediately above H in different flats.\n- E lives to the immediate east of A.\n- F lives on an odd-numbered floor immediately below D in the same flat.\n- G does not live on the topmost floor.`,
    commonContextHi: `निर्देश: निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन कीजिए और नीचे दिए गए प्रश्न का उत्तर दीजिए:\n\nआठ व्यक्ति A, B, C, D, E, F, G और H एक 4-मंजिला इमारत में रहते हैं जहाँ सबसे निचली मंजिल संख्या 1 और सबसे ऊपरी मंजिल संख्या 4 है। प्रत्येक मंजिल पर दो फ्लैट हैं: फ्लैट 1 और फ्लैट 2। फ्लैट 1, फ्लैट 2 के पश्चिम में है।\n- C एक सम संख्या वाली मंजिल पर फ्लैट 1 में रहता है।\n- C और A के बीच केवल एक मंजिल है, और दोनों एक ही फ्लैट (फ्लैट 1) में रहते हैं।\n- B, H के ठीक ऊपर अलग-अलग फ्लैटों में रहता है।\n- E, A के ठीक पूर्व में रहता है।\n- F एक विषम संख्या वाली मंजिल पर D के ठीक नीचे उसी फ्लैट में रहता है।\n- G सबसे ऊपरी मंजिल पर नहीं रहता है।`,
    questionEn: `Who lives on Floor 4 in Flat 2?`,
    questionHi: `मंजिल 4 के फ्लैट 2 में कौन रहता है?`,
    correctAnswer: { en: 'B', hi: 'B' },
    distractors: [
      { en: 'D', hi: 'D' },
      { en: 'G', hi: 'G' },
      { en: 'H', hi: 'H' },
      { en: 'F', hi: 'F' },
    ],
    conventionalSolEn: `Step 1: C is on an even floor in Flat 1. If C is on Floor 4 Flat 1, A is on Floor 2 Flat 1, and E is on Floor 2 Flat 2. But F must be on an odd floor immediately below D in the same flat (D Floor 4 Flat 2, F Floor 3 Flat 2), which leaves no place for B immediately above H in different flats.\nStep 2: Place C on Floor 2 Flat 1. Then A is on Floor 4 Flat 1, and E is on Floor 4 Flat 2. D and F take Floor 4/3 Flat 2 or 2/1 Flat 2. Matching all clues:\nFloor 4: A (Flat 1), B (Flat 2)\nFloor 3: D (Flat 1), H (Flat 1/2)\nFloor 2: C (Flat 1), G (Flat 2)\nFloor 1: F (Flat 1), E (Flat 2)\nFloor 4 Flat 2 is occupied by B.`,
    conventionalSolHi: `शर्तों को सारणीबद्ध करने पर:\nमंजिल 4: फ्लैट 1 में A, फ्लैट 2 में B.\nमंजिल 3: D और H.\nमंजिल 2: फ्लैट 1 में C.\nमंजिल 1: F और अन्य.\nअतः मंजिल 4 के फ्लैट 2 में B रहता है।`,
    examShortcutEn: `Clue linkage: Placing C on Floor 2 opens Floor 4 Flat 1 for A. The condition that B is immediately above H in different flats forces B into Floor 4 Flat 2. Takes 60s.`,
    examShortcutHi: `C को मंजिल 2 पर रखकर A और B की स्थिति निर्धारित करें। मंजिल 4 फ्लैट 2 में B है।`,
    idealTimeSeconds: 65,
  };
}

// ----------------------------------------------------------------------------
// ROUTE 5: English & Hindi Language (RC, Cloze, Error Spotting)
// ----------------------------------------------------------------------------
function buildLanguageQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  if (topicSlug.includes('error')) {
    return {
      examTag: 'SBI PO Prelims Error Spotting',
      conceptTag: 'Correlative Conjunction Subject-Verb Agreement',
      questionEn: `Directions: In the following sentence, four parts are marked as (A), (B), (C), and (D). One of these parts contains a grammatical error. Select the erroneous part. If the sentence is free from error, choose (E).\n\nNeither the branch manager (A) / nor the regional credit officers (B) / was aware of the fraudulent (C) / transactions flagged by the auditor. (D) / No Error (E)`,
      questionHi: `निर्देश: निम्नलिखित वाक्य में चार भाग (A), (B), (C) और (D) के रूप में चिह्नित हैं। इनमें से किसी एक भाग में व्याकरण संबंधी त्रुटि हो सकती है। त्रुटिपूर्ण भाग का चयन कीजिए। यदि वाक्य त्रुटिरहित है, तो (E) का चयन कीजिए।\n\nNeither the branch manager (A) / nor the regional credit officers (B) / was aware of the fraudulent (C) / transactions flagged by the auditor. (D) / No Error (E)`,
      correctAnswer: { en: '(C)', hi: '(C)' },
      distractors: [
        { en: '(A)', hi: '(A)' },
        { en: '(B)', hi: '(B)' },
        { en: '(D)', hi: '(D)' },
        { en: '(E) No Error', hi: '(E) कोई त्रुटि नहीं' },
      ],
      conventionalSolEn: `Grammar Rule: When two subjects are connected by 'neither... nor', the verb must agree with the nearer subject (the subject closest to the verb). Here, the nearer subject is 'the regional credit officers', which is plural. Therefore, the singular verb 'was' in part (C) is erroneous and must be replaced with the plural verb 'were'. Correct sentence: 'Neither the branch manager nor the regional credit officers were aware...'`,
      conventionalSolHi: `व्याकरण नियम: जब दो कर्ता 'neither... nor' से जुड़े होते हैं, तो क्रिया अपने निकटतम कर्ता के अनुसार होती है। यहाँ निकटतम कर्ता 'regional credit officers' बहुवचन है, अतः (C) में 'was' के स्थान पर 'were' होगा।`,
      examShortcutEn: `Golden Grammar Rule #4: In 'Neither A nor B', verb follows B. B = 'officers' (plural) ➔ 'were'. Part (C) is spotted in 10 seconds.`,
      examShortcutHi: `'Neither A nor B' में क्रिया B (officers) के अनुसार बहुवचन 'were' होगी। भाग (C) में त्रुटि है।`,
      idealTimeSeconds: 25,
    };
  }

  // Reading Comprehension Default
  return {
    examTag: 'IBPS PO Prelims Reading Comprehension',
    conceptTag: 'Macroeconomic Inference & Editorial Analysis',
    commonContextEn: `Directions: Read the following editorial excerpt carefully and answer the question that follows:\n\n"The macroeconomic trajectory of emerging economies has increasingly decoupled from traditional post-Bretton Woods monetary assumptions. Central banks worldwide are contending with structural inflation exacerbated by non-linear climate disruptions, maritime logistics bottlenecks, and geopolitical recalibrations in global semiconductor supply chains. In response, developing nations are accelerating sovereign green bond issuances to fund public capital expenditure without compromising fiscal consolidation paths. However, the domestic absorption capacity of sovereign debt hinges crucially on the depth of corporate bond liquidity and transparent ESG compliance benchmarks."`,
    commonContextHi: `निर्देश: निम्नलिखित संपादकीय अंश को ध्यानपूर्वक पढ़िए और नीचे दिए गए प्रश्न का उत्तर दीजिए:\n\n"उभरती अर्थव्यवस्थाओं का समष्टि आर्थिक प्रक्षेपवक्र पारंपरिक उत्तर-ब्रेटन वुड्स मौद्रिक मान्यताओं से अलग हो गया है। विश्व भर के केंद्रीय बैंक गैर-रैखिक जलवायु व्यवधानों, समुद्री रसद अड़चनों और वैश्विक सेमीकंडक्टर आपूर्ति श्रृंखलाओं में भू-राजनीतिक पुनर्गठन द्वारा उत्पन्न संरचनात्मक मुद्रास्फीति का सामना कर रहे हैं। इसके उत्तर में, विकासशील देश राजकोषीय समेकन से समझौता किए बिना सार्वजनिक पूंजीगत व्यय के वित्तपोषण के लिए सॉवरेन ग्रीन बॉन्ड जारी करने में तेजी ला रहे हैं। हालांकि, सरकारी ऋण की घरेलू अवशोषण क्षमता कॉर्पोरेट बॉन्ड तरलता की गहराई और पारदर्शी ईएसजी अनुपालन मानकों पर निर्भर करती है।"`,
    questionEn: `According to the passage, why are developing nations actively accelerating sovereign green bond issuances?`,
    questionHi: `गद्यांश के अनुसार, विकासशील देश सक्रिय रूप से सॉवरेन ग्रीन बॉन्ड जारी करने में तेजी क्यों ला रहे हैं?`,
    correctAnswer: {
      en: 'To fund public capital expenditure while adhering to fiscal consolidation paths',
      hi: 'राजकोषीय समेकन के लक्ष्यों से समझौता किए बिना सार्वजनिक पूंजीगत व्यय का वित्तपोषण करने के लिए',
    },
    distractors: [
      {
        en: 'To eliminate maritime bottlenecks and domestic semiconductor dependencies completely',
        hi: 'समुद्री अड़चनों और घरेलू सेमीकंडक्टर निर्भरता को पूरी तरह समाप्त करने के लिए',
      },
      {
        en: 'To replace the post-Bretton Woods international currency settlement system',
        hi: 'उत्तर-ब्रेटन वुड्स अंतर्राष्ट्रीय मुद्रा निपटान प्रणाली को प्रतिस्थापित करने के लिए',
      },
      {
        en: 'To artificially suppress short-term headline inflation via currency devaluation',
        hi: 'मुद्रा अवमूल्यन के माध्यम से अल्पकालिक मुद्रास्फीति को कृत्रिम रूप से दबाने के लिए',
      },
      {
        en: 'To compel private domestic banks to bypass corporate bond liquidity checks',
        hi: 'निजी घरेलू बैंकों को कॉर्पोरेट बॉन्ड तरलता जांच की अनदेखी करने के लिए बाध्य करने हेतु',
      },
    ],
    conventionalSolEn: `Direct textual evidence from the passage: 'In response, developing nations are accelerating sovereign green bond issuances to fund public capital expenditure without compromising fiscal consolidation paths.' All other options present extreme or unsupported claims not asserted by the author.`,
    conventionalSolHi: `गद्यांश से सीधा प्रमाण: 'विकासशील देश राजकोषीय समेकन से समझौता किए बिना सार्वजनिक पूंजीगत व्यय के वित्तपोषण के लिए सॉवरेन ग्रीन बॉन्ड जारी करने में तेजी ला रहे हैं।'`,
    examShortcutEn: `Locate keywords 'sovereign green bond issuances' in the text: the immediately preceding purpose is 'to fund public capital expenditure without compromising fiscal consolidation paths'. Match directly to the option.`,
    examShortcutHi: `कीवर्ड 'sovereign green bond issuances' ढूंढें। इसके तुरंत बाद उद्देश्य लिखा है।`,
    idealTimeSeconds: 40,
  };
}

// ----------------------------------------------------------------------------
// ROUTE 6: General Awareness & Computer Aptitude
// ----------------------------------------------------------------------------
function buildGAComputerQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  seed: number,
  index: number
): QuestionBuildPayload {
  if (topicSlug.includes('computer')) {
    return {
      examTag: 'IBPS RRB Officer Scale-I Computer Knowledge',
      conceptTag: 'OSI Model & Transport Layer Protocols',
      questionEn: `Which network protocol operates at the Transport Layer (Layer 4) of the OSI model and provides connection-oriented, sequenced, and reliable byte-stream data delivery?`,
      questionHi: `कौन सा नेटवर्क प्रोटोकॉल OSI मॉडल की ट्रांसपोर्ट लेयर (लेयर 4) पर कार्य करता है तथा कनेक्शन-ओरिएंटेड, अनुक्रमित और विश्वसनीय बाइट-स्ट्रीम डेटा ट्रांसफर प्रदान करता है?`,
      correctAnswer: { en: 'TCP (Transmission Control Protocol)', hi: 'TCP (ट्रांसमिशन कंट्रोल प्रोटोकॉल)' },
      distractors: [
        { en: 'UDP (User Datagram Protocol)', hi: 'UDP (यूज़र डेटाग्राम प्रोटोकॉल)' },
        { en: 'IP (Internet Protocol)', hi: 'IP (इंटरनेट प्रोटोकॉल)' },
        { en: 'HTTP (Hypertext Transfer Protocol)', hi: 'HTTP (हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल)' },
        { en: 'ARP (Address Resolution Protocol)', hi: 'ARP (एड्रेस रेजोल्यूशन प्रोटोकॉल)' },
      ],
      conventionalSolEn: `TCP (Transmission Control Protocol) operates at Layer 4 (Transport Layer) of the OSI reference model. It is a connection-oriented protocol that establishes a 3-way handshake (SYN, SYN-ACK, ACK) and provides sequencing, error checking, and flow control. In contrast, UDP is connectionless/unreliable, IP operates at Layer 3 (Network Layer), and HTTP operates at Layer 7 (Application Layer).`,
      conventionalSolHi: `TCP ट्रांसपोर्ट लेयर (लेयर 4) पर काम करता है और 3-वे हैंडशेक के माध्यम से विश्वसनीय कनेक्शन प्रदान करता है। UDP कनेक्शनरहित है, IP नेटवर्क लेयर पर तथा HTTP एप्लीकेशन लेयर पर कार्य करता है।`,
      examShortcutEn: `Connection-oriented + Reliable + Transport Layer = TCP. (Connectionless = UDP).`,
      examShortcutHi: `विश्वसनीय कनेक्शन-ओरिएंटेड = TCP; कनेक्शनरहित = UDP.`,
      idealTimeSeconds: 20,
    };
  }

  // Banking Awareness Default
  return {
    examTag: 'SBI PO Mains Banking Awareness',
    conceptTag: 'DICGC Deposit Insurance Coverage Norms',
    questionEn: `Under the current regulations of the Deposit Insurance and Credit Guarantee Corporation (DICGC), an autonomous subsidiary of the Reserve Bank of India, what is the maximum insurance coverage limit per depositor for both principal and interest amounts across all accounts held in a single insured bank?`,
    questionHi: `भारतीय रिजर्व बैंक की सहायक संस्था डिपॉजिट इंश्योरेंस एंड क्रेडिट गारंटी कॉरपोरेशन (DICGC) के वर्तमान नियमों के तहत, किसी एक बीमित बैंक में रखे गए सभी खातों में मूलधन और ब्याज दोनों को मिलाकर प्रति जमाकर्ता अधिकतम बीमा कवर सीमा क्या है?`,
    correctAnswer: { en: 'Rs. 5,00,000 (Five Lakh Rupees)', hi: 'रु. 5,00,000 (पाँच लाख रुपये)' },
    distractors: [
      { en: 'Rs. 1,00,000 (One Lakh Rupees)', hi: 'रु. 1,00,000 (एक लाख रुपये)' },
      { en: 'Rs. 2,00,000 (Two Lakh Rupees)', hi: 'रु. 2,00,000 (दो लाख रुपये)' },
      { en: 'Rs. 10,00,000 (Ten Lakh Rupees)', hi: 'रु. 10,00,000 (दस लाख रुपये)' },
      { en: 'Rs. 25,00,000 (Twenty-Five Lakh Rupees)', hi: 'रु. 25,00,000 (पच्चीस लाख रुपये)' },
    ],
    conventionalSolEn: `With effect from February 4, 2020, the Government of India and the Reserve Bank of India raised the deposit insurance coverage limit provided by the DICGC from Rs. 1,00,000 to Rs. 5,00,000 per depositor per insured commercial/cooperative/regional rural bank. This coverage includes all savings, fixed, current, and recurring deposits combined.`,
    conventionalSolHi: `4 फरवरी 2020 से DICGC बीमा कवर को रु. 1 लाख से बढ़ाकर रु. 5 लाख प्रति जमाकर्ता प्रति बैंक कर दिया गया है। इसमें बचत, सावधि, चालू और आवर्ती जमा शामिल हैं।`,
    examShortcutEn: `Banking Static GK Fact: DICGC limit was revised from 1 Lakh to 5 Lakhs in Union Budget 2020.`,
    examShortcutHi: `बैंकिंग सामान्य ज्ञान: DICGC की वर्तमान सीमा रु. 5 लाख है।`,
    idealTimeSeconds: 20,
  };
}

// ============================================================================
// 4. MAIN DISPATCHER FUNCTION
// ============================================================================

export function generateDynamicTopicQuestions(
  topicSlug: string,
  difficulty: DifficultyLevel,
  count: number = 10,
  seed: number = Date.now()
): TopicPracticeQuestionData[] {
  const route = resolveTopicRoute(topicSlug);
  const questions: TopicPracticeQuestionData[] = [];

  for (let i = 0; i < count; i++) {
    const qSeed = Math.abs(seed + i * 73);

    let payload: QuestionBuildPayload;

    switch (route) {
      case 'ROUTE_1_SPEED_MATH':
        payload = buildSpeedMathQuestion(topicSlug, difficulty, qSeed, i);
        break;
      case 'ROUTE_2_ARITHMETIC':
        payload = buildArithmeticQuestion(topicSlug, difficulty, qSeed, i);
        break;
      case 'ROUTE_3_DATA_INTERPRETATION':
        payload = buildDIQuestion(topicSlug, difficulty, qSeed, i);
        break;
      case 'ROUTE_4_REASONING':
        payload = buildReasoningQuestion(topicSlug, difficulty, qSeed, i);
        break;
      case 'ROUTE_5_ENGLISH':
        payload = buildLanguageQuestion(topicSlug, difficulty, qSeed, i);
        break;
      case 'ROUTE_6_GA_COMPUTER':
      default:
        payload = buildGAComputerQuestion(topicSlug, difficulty, qSeed, i);
        break;
    }

    // Determine correct option letter deterministically based on seed
    const targetLetters: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];
    const correctLetter = targetLetters[qSeed % 5];

    // Assemble 5 distinct options without duplication
    const options: TopicOptionItem[] = [];
    let distractorIdx = 0;

    for (const letter of targetLetters) {
      if (letter === correctLetter) {
        options.push({
          id: letter,
          textEn: payload.correctAnswer.en,
          textHi: payload.correctAnswer.hi,
        });
      } else {
        const d = payload.distractors[distractorIdx % payload.distractors.length];
        options.push({
          id: letter,
          textEn: d.en,
          textHi: d.hi,
        });
        distractorIdx++;
      }
    }

    questions.push({
      id: `${topicSlug}_${difficulty.toLowerCase()}_${i + 1}_${qSeed % 10000}`,
      topicSlug,
      difficulty,
      examTag: payload.examTag,
      conceptTag: payload.conceptTag,
      commonContextEn: payload.commonContextEn,
      commonContextHi: payload.commonContextHi,
      questionEn: payload.questionEn,
      questionHi: payload.questionHi,
      options,
      correctOption: correctLetter,
      conventionalSolEn: payload.conventionalSolEn,
      conventionalSolHi: payload.conventionalSolHi,
      examShortcutEn: payload.examShortcutEn,
      examShortcutHi: payload.examShortcutHi,
      idealTimeSeconds: payload.idealTimeSeconds,
    });
  }

  return questions;
}
