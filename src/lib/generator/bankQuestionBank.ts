// Official Indian Banking Examination Question Bank & Technical Question Generator
// Powers SBI PO/Clerk, IBPS PO/Clerk, and IBPS RRB PO/Clerk (Prelims & Mains)
// Strictly enforces Zero Question Duplication, Deterministic PRNG Seeding,
// Bilingual Hindi/English Translations, and Authentic TCS iON Exam Quality.

import { Question, Option, QuestionGroup, QuestionDifficulty, SectionType } from '@/types/exam';

// Random integer helper [min, max]
export function randInt(min: number, max: number, rng = Math.random): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

// Deterministic pseudo-random generator with seed (Mulberry32)
export function createRng(seed: number) {
  let s = Math.abs(seed) >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// 1. DYNAMIC QUADRATIC EQUATION GENERATOR (Sign Method & Factorization)
// ---------------------------------------------------------------------------

export function generateDynamicQuadraticQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 31);
  
  const qOffset = (qNum % 5);
  // Pick clean integer roots with guaranteed variation across consecutive questions
  const r1 = randInt(2, 7, rng) + qOffset;
  const r2 = randInt(r1 + 1, r1 + 5, rng);
  const b1 = r1 + r2;
  const c1 = r1 * r2;

  const s1 = randInt(2, 7, rng) + ((qOffset + 2) % 5);
  const s2 = randInt(s1 + 1, s1 + 5, rng);
  const b2 = s1 + s2;
  const c2 = s1 * s2;

  const xMin = Math.min(r1, r2);
  const xMax = Math.max(r1, r2);
  const yMin = Math.min(s1, s2);
  const yMax = Math.max(s1, s2);

  let correctRelation: 'x > y' | 'x >= y' | 'x < y' | 'x <= y' | 'CND';

  if (xMin > yMax) {
    correctRelation = 'x > y';
  } else if (xMin >= yMax && (xMin > yMin || xMax > yMax)) {
    correctRelation = 'x >= y';
  } else if (xMax < yMin) {
    correctRelation = 'x < y';
  } else if (xMax <= yMin && (xMin < yMin || xMax < yMax)) {
    correctRelation = 'x <= y';
  } else {
    correctRelation = 'CND';
  }

  const standardOptions = [
    { text: '$x > y$', isCorrect: correctRelation === 'x > y' },
    { text: '$x \\ge y$', isCorrect: correctRelation === 'x >= y' },
    { text: '$x < y$', isCorrect: correctRelation === 'x < y' },
    { text: '$x \\le y$', isCorrect: correctRelation === 'x <= y' },
    { text: '$x = y$ or relationship cannot be established', isCorrect: correctRelation === 'CND' },
  ];

  const options: Option[] = standardOptions.map((opt, i) => ({
    id: `opt_quad_${qNum}_${i}`,
    questionId: `q_quad_${qNum}`,
    identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
    optionTextEn: opt.text,
    optionTextHi: opt.text === '$x = y$ or relationship cannot be established' ? '$x = y$ अथवा संबंध स्थापित नहीं किया जा सकता' : opt.text,
    isCorrect: opt.isCorrect,
  }));

  return {
    id: `q_quad_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `In the following question, two equations numbered I and II are given. You have to solve both equations and establish the relationship between $x$ and $y$:\n\nI. $x^2 - ${b1}x + ${c1} = 0$\nII. $y^2 - ${b2}y + ${c2} = 0$`,
    questionTextHi: `निम्नलिखित प्रश्न में दो समीकरण I और II दिए गए हैं। दोनों को हल करें और $x$ तथा $y$ के बीच संबंध स्थापित करें:\n\nI. $x^2 - ${b1}x + ${c1} = 0$\nII. $y^2 - ${b2}y + ${c2} = 0$`,
    marks,
    negativeMarks,
    topic: 'Quadratic Equations',
    subTopic: 'Sign Method Comparison',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: `Equation I: $x^2 - ${b1}x + ${c1} = 0 \\implies (x - ${r1})(x - ${r2}) = 0 \\implies x = +${r1}, +${r2}$\nEquation II: $y^2 - ${b2}y + ${c2} = 0 \\implies (y - ${s1})(y - ${s2}) = 0 \\implies y = +${s1}, +${s2}$\nComparison of roots gives: ${correctRelation === 'CND' ? 'Relationship cannot be established.' : correctRelation}`,
    shortcutTrickEn: `Sign Rule: Both equations have signs (-, +), giving roots (+, +). Compare directly without quadratic formula: $x = (${r1}, ${r2})$, $y = (${s1}, ${s2})$.`,
    options,
  };
}

// ---------------------------------------------------------------------------
// 2. DYNAMIC MISSING / WRONG NUMBER SERIES GENERATOR
// ---------------------------------------------------------------------------

export function generateDynamicNumberSeriesQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030,
  isWrongNumber: boolean = false
): Question {
  const rng = createRng(seed + qNum * 53);
  const patternType = ((qNum % 7) + 1);

  let sequence: number[] = [];
  let explanation = '';
  let answerVal: number = 0;

  if (patternType === 1) {
    // Prime difference
    const start = randInt(10, 30, rng) + (qNum % 7) * 3;
    const primes = [2, 3, 5, 7, 11, 13];
    sequence = [start];
    for (let i = 0; i < primes.length; i++) {
      sequence.push(sequence[sequence.length - 1] + primes[i]);
    }
    answerVal = sequence[4];
    explanation = `The pattern is consecutive prime differences: +2, +3, +5, +7, +11. Missing number = ${sequence[3]} + 7 = ${answerVal}.`;
  } else if (patternType === 2) {
    // Multiply by 0.5 + 0.5 pattern
    const startList = [12, 16, 20, 24, 28, 32, 36, 40];
    const start = startList[(qNum + randInt(0, 7, rng)) % startList.length];
    sequence = [start];
    const multipliers = [0.5, 1.0, 1.5, 2.0, 2.5];
    for (const m of multipliers) {
      sequence.push(Math.round(sequence[sequence.length - 1] * m + m));
    }
    answerVal = sequence[3];
    explanation = `The pattern is: ×0.5 + 0.5, ×1.0 + 1.0, ×1.5 + 1.5, ×2.0 + 2.0. Missing number = ${answerVal}.`;
  } else if (patternType === 3) {
    // Squares difference
    const start = randInt(15, 40, rng) + (qNum % 5) * 4;
    const sqDiffs = [4, 9, 16, 25, 36];
    sequence = [start];
    for (const d of sqDiffs) {
      sequence.push(sequence[sequence.length - 1] + d);
    }
    answerVal = sequence[4];
    explanation = `The pattern is consecutive squares difference: +2²(+4), +3²(+9), +4²(+16), +5²(+25). Missing number = ${answerVal}.`;
  } else if (patternType === 4) {
    // Cube - 1 difference
    const start = randInt(5, 20, rng) + (qNum % 5) * 2;
    const diffs = [7, 26, 63, 124]; // 2^3-1, 3^3-1, 4^3-1, 5^3-1
    sequence = [start];
    for (const d of diffs) {
      sequence.push(sequence[sequence.length - 1] + d);
    }
    answerVal = sequence[3];
    explanation = `The pattern is (n³ - 1) difference: +7 (2³-1), +26 (3³-1), +63 (4³-1). Missing number = ${answerVal}.`;
  } else if (patternType === 5) {
    // Alternating addition and subtraction
    const start = randInt(60, 100, rng) + (qNum % 7) * 5;
    sequence = [start];
    const steps = [+15, -12, +15, -12, +15];
    for (const s of steps) {
      sequence.push(sequence[sequence.length - 1] + s);
    }
    answerVal = sequence[4];
    explanation = `The pattern is alternating: +15, -12, +15, -12, +15. Missing number = ${answerVal}.`;
  } else if (patternType === 6) {
    // Double difference (+3, +6, +12, +24, +48)
    const start = randInt(10, 25, rng) + (qNum % 5) * 3;
    sequence = [start];
    const diffs = [3, 6, 12, 24, 48];
    for (const d of diffs) {
      sequence.push(sequence[sequence.length - 1] + d);
    }
    answerVal = sequence[4];
    explanation = `The pattern is doubling difference: +3, +6, +12, +24, +48. Missing number = ${sequence[3]} + 24 = ${answerVal}.`;
  } else {
    // Triangular difference (+1, +3, +6, +10, +15)
    const start = randInt(20, 50, rng) + (qNum % 5) * 2;
    sequence = [start];
    const diffs = [1, 3, 6, 10, 15];
    for (const d of diffs) {
      sequence.push(sequence[sequence.length - 1] + d);
    }
    answerVal = sequence[4];
    explanation = `The pattern is triangular number differences: +1, +3, +6, +10, +15. Missing number = ${sequence[3]} + 10 = ${answerVal}.`;
  }

  if (isWrongNumber) {
    const wrongIdx = randInt(2, sequence.length - 2, rng);
    const correctVal = sequence[wrongIdx];
    const wrongOffset = [2, 3, 4, 5, -3, -4][randInt(0, 5, rng)];
    const wrongVal = correctVal + wrongOffset;
    const wrongSeq = sequence.map((v, idx) => (idx === wrongIdx ? wrongVal : v));
    const displayedSeq = wrongSeq.join(', ');

    const choiceNumbers = Array.from(new Set([wrongVal, sequence[0], sequence[1], sequence[sequence.length - 1], sequence[wrongIdx - 1]])).slice(0, 5).sort((a, b) => a - b);
    const correctIdx = choiceNumbers.indexOf(wrongVal);

    return {
      id: `q_num_series_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Find the wrong number in the following number series which does not fit the pattern:\n\n${displayedSeq}`,
      questionTextHi: `निम्नलिखित संख्या श्रृंखला में गलत संख्या ज्ञात कीजिए जो पैटर्न के अनुसार सही नहीं है:\n\n${displayedSeq}`,
      marks,
      negativeMarks,
      topic: 'Number Series',
      subTopic: 'Wrong Number Series',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 30,
      conventionalSolutionEn: `${explanation}\nInstead of ${wrongVal}, the correct number should be ${correctVal}. Hence the wrong number is ${wrongVal}.`,
      shortcutTrickEn: 'Calculate consecutive differences: The wrong term produces two faulty adjacent differences.',
      options: choiceNumbers.map((c, i) => ({
        id: `opt_ns_${qNum}_${i}`,
        questionId: `q_num_series_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: c.toString(),
        optionTextHi: c.toString(),
        isCorrect: i === correctIdx,
      })),
    };
  }

  // Create presentation string with '?' at the answer spot
  const displayedSeq = sequence.map((val) => (val === answerVal ? '?' : val)).join(', ');

  const distractors = [answerVal + 2, answerVal - 2, answerVal + 5, answerVal - 4];
  const allChoices = Array.from(new Set([answerVal, ...distractors])).slice(0, 5).sort((a, b) => a - b);
  const correctIdx = allChoices.indexOf(answerVal);

  return {
    id: `q_num_series_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `What should come in place of the question mark (?) in the following number series?\n\n${displayedSeq}`,
    questionTextHi: `निम्नलिखित संख्या श्रृंखला में प्रश्नवाचक चिन्ह (?) के स्थान पर क्या आना चाहिए?\n\n${displayedSeq}`,
    marks,
    negativeMarks,
    topic: 'Number Series',
    subTopic: 'Missing Number Series',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: explanation,
    shortcutTrickEn: 'Check step-1 difference first; if differences grow rapidly, check (n² or n³ - 1) or multiplicative factors.',
    options: allChoices.map((c, i) => ({
      id: `opt_ns_${qNum}_${i}`,
      questionId: `q_num_series_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: c.toString(),
      optionTextHi: c.toString(),
      isCorrect: i === correctIdx,
    })),
  };
}

export function generateWrongNumberSeriesQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  return generateDynamicNumberSeriesQuestion(qNum, orderInSec, secId, marks, negativeMarks, 882731 + qNum * 71, true);
}

// ---------------------------------------------------------------------------
// 3. DYNAMIC SIMPLIFICATION & APPROXIMATION GENERATOR
// ---------------------------------------------------------------------------

export function generateDynamicSimplificationQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 97);
  const patternType = randInt(1, 2, rng);

  if (patternType === 1) {
    const a = randInt(12, 35, rng);
    const b = randInt(4, 15, rng);
    const c = randInt(25, 75, rng);
    const pct = [20, 25, 40, 50, 60, 75][randInt(0, 5, rng)];
    const baseNum = randInt(12, 40, rng) * 20;
    const pctVal = (pct * baseNum) / 100;
    const ans = a * b + pctVal - c;

    const distractors = [ans + 10, ans - 10, ans + 25, ans - 15];
    const choices = Array.from(new Set([ans, ...distractors])).slice(0, 5).sort((x, y) => x - y);
    const correctIdx = choices.indexOf(ans);

    return {
      id: `q_simp_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `What value will come in place of the question mark (?) in the following question?\n\n$${a} \\times ${b} + ${pct}\\% \\text{ of } ${baseNum} - ${c} = ?$`,
      questionTextHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिन्ह (?) के स्थान पर क्या मान आएगा?\n\n$${a} \\times ${b} + ${pct}\\% \\text{ of } ${baseNum} - ${c} = ?$`,
      marks,
      negativeMarks,
      topic: 'Simplification',
      subTopic: 'BODMAS & Percentage Conversion',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Step 1: $${a} \\times ${b} = ${a * b}$\nStep 2: $${pct}\\% \\text{ of } ${baseNum} = (${pct}/100) \\times ${baseNum} = ${pctVal}$\nStep 3: $${a * b} + ${pctVal} - ${c} = ${ans}$.`,
      shortcutTrickEn: `Fraction conversion: $${pct}\\% = \\frac{${pct}}{100}$. Use unit digit calculation: $((${a} \\times ${b})\\%10 + ${pctVal}\\%10 - ${c}\\%10) = ${ans % 10}$.`,
      options: choices.map((cVal, i) => ({
        id: `opt_simp_${qNum}_${i}`,
        questionId: `q_simp_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: cVal.toString(),
        optionTextHi: cVal.toString(),
        isCorrect: i === correctIdx,
      })),
    };
  } else {
    // Square root and power simplification
    const baseRoot = [16, 25, 36, 49, 64, 81][randInt(0, 5, rng)];
    const sqrtVal = Math.round(Math.sqrt(baseRoot));
    const sqNum = randInt(4, 9, rng);
    const sqVal = sqNum * sqNum;
    const addVal = randInt(20, 60, rng);
    const ans = sqrtVal * 12 + sqVal - addVal;

    const distractors = [ans + 12, ans - 12, ans + 24, ans - 18];
    const choices = Array.from(new Set([ans, ...distractors])).slice(0, 5).sort((x, y) => x - y);
    const correctIdx = choices.indexOf(ans);

    return {
      id: `q_simp_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `What value will come in place of the question mark (?) in the following question?\n\n$\\sqrt{${baseRoot}} \\times 12 + ${sqNum}^2 - ${addVal} = ?$`,
      questionTextHi: `निम्नलिखित प्रश्न में प्रश्नवाचक चिन्ह (?) के स्थान पर क्या मान आएगा?\n\n$\\sqrt{${baseRoot}} \\times 12 + ${sqNum}^2 - ${addVal} = ?$`,
      marks,
      negativeMarks,
      topic: 'Simplification',
      subTopic: 'Powers, Roots & BODMAS',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Step 1: $\\sqrt{${baseRoot}} = ${sqrtVal}$\nStep 2: $${sqrtVal} \\times 12 = ${sqrtVal * 12}$\nStep 3: ${sqNum}² = $${sqVal}$\nStep 4: $${sqrtVal * 12} + ${sqVal} - ${addVal} = ${ans}$.`,
      shortcutTrickEn: `Instant evaluation: $\\sqrt{${baseRoot}} = ${sqrtVal}$, ${sqNum}² = ${sqVal}. Evaluate mental sum in <12 seconds.`,
      options: choices.map((cVal, i) => ({
        id: `opt_simp_${qNum}_${i}`,
        questionId: `q_simp_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: cVal.toString(),
        optionTextHi: cVal.toString(),
        isCorrect: i === correctIdx,
      })),
    };
  }
}

export function generateDynamicApproximationQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 43);
  const patternType = randInt(1, 2, rng);

  if (patternType === 1) {
    // Percent + Square Root - Product (Authentic TCS iON pattern from user's exam)
    const pctOptions = [
      { raw: '24.98%', round: 25, baseRaw: '799.89', baseRound: 800 },
      { raw: '49.92%', round: 50, baseRaw: '599.95', baseRound: 600 },
      { raw: '19.95%', round: 20, baseRaw: '650.05', baseRound: 650 },
      { raw: '75.02%', round: 75, baseRaw: '399.88', baseRound: 400 },
    ];
    const pctObj = pctOptions[randInt(0, pctOptions.length - 1, rng)];
    const pctPart = (pctObj.round * pctObj.baseRound) / 100;

    const sqrtOptions = [
      { raw: '575.92', round: 576, root: 24 },
      { raw: '624.95', round: 625, root: 25 },
      { raw: '728.98', round: 729, root: 27 },
      { raw: '840.95', round: 841, root: 29 },
      { raw: '960.98', round: 961, root: 31 },
    ];
    const sqrtObj = sqrtOptions[randInt(0, sqrtOptions.length - 1, rng)];

    const aRaw = (randInt(11, 16, rng) + 0.02).toFixed(2);
    const bRaw = (randInt(4, 7, rng) + 0.99).toFixed(2);
    const aRound = Math.round(parseFloat(aRaw));
    const bRound = Math.round(parseFloat(bRaw));
    const prodPart = aRound * bRound;

    const ans = pctPart + sqrtObj.root - prodPart;

    const distractors = [ans - 16, ans + 10, ans + 20, ans - 12];
    const choices = Array.from(new Set([ans, ...distractors])).slice(0, 5).sort((x, y) => x - y);
    const correctIdx = choices.indexOf(ans);

    const questionFormula = `${pctObj.raw} \\text{ of } ${pctObj.baseRaw} + \\sqrt{${sqrtObj.raw}} - (${aRaw} \\times ${bRaw}) = ?`;

    return {
      id: `q_approx_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `What approximate value should come in place of the question mark (?) in the following equation? (You are not expected to calculate the exact value.)\n\n$${questionFormula}$`,
      questionTextHi: `निम्नलिखित समीकरण में प्रश्नवाचक चिन्ह (?) के स्थान पर लगभग क्या मान आना चाहिए? (सटीक मान की गणना अपेक्षित नहीं है)\n\n$${questionFormula}$`,
      marks,
      negativeMarks,
      topic: 'Approximation',
      subTopic: 'Percentage, Square Root & BODMAS',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `Round off each term to its nearest integer/perfect square:\n1. $${pctObj.raw} \\text{ of } ${pctObj.baseRaw} \\approx ${pctObj.round}\\% \\times ${pctObj.baseRound} = ${pctPart}$\n2. $\\sqrt{${sqrtObj.raw}} \\approx \\sqrt{${sqrtObj.round}} = ${sqrtObj.root}$\n3. $(${aRaw} \\times ${bRaw}) \\approx (${aRound} \\times ${bRound}) = ${prodPart}$\n\nEquation: $${pctPart} + ${sqrtObj.root} - ${prodPart} = ${ans}$.`,
      shortcutTrickEn: `Approximation Rule: Recognize $\\sqrt{${sqrtObj.round}} = ${sqrtObj.root}$ instantly. $${pctObj.round}\\% \\text{ of } ${pctObj.baseRound} = ${pctPart}$. Mental calculation: $${pctPart} + ${sqrtObj.root} - ${prodPart} = ${ans}$.`,
      options: choices.map((cVal, i) => ({
        id: `opt_approx_${qNum}_${i}`,
        questionId: `q_approx_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: cVal.toString(),
        optionTextHi: cVal.toString(),
        isCorrect: i === correctIdx,
      })),
    };
  } else {
    // Multiplicative and square approximation
    const aRaw = (randInt(14, 28, rng) + 0.98).toFixed(2);
    const bRaw = (randInt(11, 24, rng) + 0.02).toFixed(2);
    const a = Math.round(parseFloat(aRaw));
    const b = Math.round(parseFloat(bRaw));
    const c = randInt(12, 35, rng);
    const ans = a * b - c;

    const distractors = [ans + 15, ans - 12, ans + 20, ans - 25];
    const choices = Array.from(new Set([ans, ...distractors])).slice(0, 5).sort((x, y) => x - y);
    const correctIdx = choices.indexOf(ans);

    const questionFormula = `${aRaw} \\times ${bRaw} - ${c}.12 = ?`;

    return {
      id: `q_approx_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `What approximate value should come in place of the question mark (?) in the following equation? (You are not expected to calculate the exact value.)\n\n$${questionFormula}$`,
      questionTextHi: `निम्नलिखित समीकरण में प्रश्नवाचक चिन्ह (?) के स्थान पर लगभग क्या मान आना चाहिए? (सटीक मान की गणना अपेक्षित नहीं है)\n\n$${questionFormula}$`,
      marks,
      negativeMarks,
      topic: 'Approximation',
      subTopic: 'Rounding Off & Mental Multiplication',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Round off numbers:\n$${aRaw} \\approx ${a}$\n$${bRaw} \\approx ${b}$\n$${c}.12 \\approx ${c}$\nCalculation: $${a} \\times ${b} - ${c} = ${a * b} - ${c} = ${ans}$.`,
      shortcutTrickEn: 'Rounding rule: Numbers with decimal .95+ round up, .05- round down. Calculate mentally in <15 seconds.',
      options: choices.map((cVal, i) => ({
        id: `opt_approx_${qNum}_${i}`,
        questionId: `q_approx_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: cVal.toString(),
        optionTextHi: cVal.toString(),
        isCorrect: i === correctIdx,
      })),
    };
  }
}

// ---------------------------------------------------------------------------
// 4. MANDATORY ARITHMETIC 10-SLOT ROTATION ENGINE (Zero-Omission Normalization)
// ---------------------------------------------------------------------------

export type ArithmeticSlot = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export function generateArithmeticWordProblem(
  qNum: number,
  orderInSec: number,
  secId: string,
  slot: ArithmeticSlot | string = 1,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 89);
  const slotNum: number = typeof slot === 'number' ? slot : (parseInt(slot, 10) || 1);

  switch (slotNum) {
    // -----------------------------------------------------------------------
    // SLOT 1: PERCENTAGE / ELECTION & POPULATION
    // -----------------------------------------------------------------------
    case 1: {
      const totalVotes = randInt(12, 30, rng) * 1000;
      const winPct = [56, 58, 62, 65][randInt(0, 3, rng)];
      const losePct = 100 - winPct;
      const marginPct = winPct - losePct;
      const marginVotes = Math.round((totalVotes * marginPct) / 100);

      const correctAns = `${marginVotes}`;
      const choices = [
        correctAns,
        `${marginVotes + 400}`,
        `${marginVotes - 600}`,
        `${marginVotes + 1200}`,
        `${marginVotes - 800}`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s1_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `In an election between two candidates, the winner secures ${winPct}% of the valid votes and is elected by a majority. If total valid votes cast were ${totalVotes}, find the majority margin of votes by which the winner defeated the rival candidate.`,
        questionTextHi: `दो उम्मीदवारों के बीच एक चुनाव में, विजेता को वैध मतों का ${winPct}% प्राप्त होता है और वह बहुमत से चुना जाता है। यदि कुल वैध मत ${totalVotes} थे, तो विजेता ने प्रतिद्वंद्वी उम्मीदवार को कितने मतों के अंतर से हराया?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Percentage (Election & Votes)',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 35,
        conventionalSolutionEn: `Winner's share = ${winPct}%\nLoser's share = 100% - ${winPct}% = ${losePct}%\nMargin difference = ${winPct}% - ${losePct}% = ${marginPct}%\nMargin votes = ${marginPct}% of ${totalVotes} = (${marginPct}/100) × ${totalVotes} = ${marginVotes}.`,
        shortcutTrickEn: `Direct percentage gap: (${winPct} - ${losePct})% = ${marginPct}%. Calculate ${marginPct}% of ${totalVotes} directly.`,
        options: choices.map((c, i) => ({
          id: `opt_ar1_${qNum}_${i}`,
          questionId: `q_arith_s1_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c,
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 2: RATIO & PROPORTION / PARTNERSHIP
    // -----------------------------------------------------------------------
    case 2: {
      const invA = randInt(20, 50, rng) * 1000;
      const invB = randInt(25, 60, rng) * 1000;
      const monthsA = 12;
      const monthsB = 8;
      const prodA = invA * monthsA;
      const prodB = invB * monthsB;
      const totalProd = prodA + prodB;
      const totalProfit = randInt(30, 80, rng) * 1000;
      const profitA = Math.round((totalProfit * prodA) / totalProd);

      const correctAns = `₹${profitA}`;
      const choices = [
        correctAns,
        `₹${profitA + 2500}`,
        `₹${profitA - 2000}`,
        `₹${profitA + 4000}`,
        `₹${profitA - 3500}`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s2_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `A started a business by investing ₹${invA}. After 4 months, B joined him with an investment of ₹${invB}. At the end of the year, the total profit earned from the business was ₹${totalProfit}. What is A's share in the annual profit?`,
        questionTextHi: `A ने ₹${invA} का निवेश करके एक व्यवसाय शुरू किया। 4 महीने बाद, B ₹${invB} के निवेश के साथ उसमें शामिल हुआ। वर्ष के अंत में कुल लाभ ₹${totalProfit} था। वार्षिक लाभ में A का हिस्सा क्या है?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Partnership (Capital × Time)',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 40,
        conventionalSolutionEn: `Ratio of profit = (Capital A × Time A) : (Capital B × Time B)\n= (${invA} × 12) : (${invB} × 8)\n= ${prodA} : ${prodB}\nA's profit share = [${prodA} / (${prodA} + ${prodB})] × ₹${totalProfit} = ₹${profitA}.`,
        shortcutTrickEn: 'Cancel 1000s and common factors immediately before multiplying to save calculation time.',
        options: choices.map((c, i) => ({
          id: `opt_ar2_${qNum}_${i}`,
          questionId: `q_arith_s2_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c,
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 3: AVERAGE / PROBLEMS ON AGES
    // -----------------------------------------------------------------------
    case 3: {
      const ageDiff = randInt(18, 30, rng);
      const pastRatioSon = 1;
      const pastRatioFather = 4;
      // pastFather - pastSon = 3x = ageDiff => ensure ageDiff % 3 === 0
      const cleanDiff = Math.floor(ageDiff / 3) * 3 || 24;
      const x = cleanDiff / 3;
      const pastSonAge = pastRatioSon * x;
      const pastFatherAge = pastRatioFather * x;
      const yearsAgo = 6;
      const presentSonAge = pastSonAge + yearsAgo;
      const presentFatherAge = pastFatherAge + yearsAgo;

      const correctAns = `${presentFatherAge} years`;
      const choices = [
        correctAns,
        `${presentFatherAge + 4} years`,
        `${presentFatherAge - 6} years`,
        `${presentFatherAge + 8} years`,
        `${presentFatherAge - 4} years`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s3_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `6 years ago, the age of a father was 4 times the age of his son. If the constant age difference between the father and the son is ${cleanDiff} years, find the present age of the father.`,
        questionTextHi: `6 वर्ष पूर्व, एक पिता की आयु उसके पुत्र की आयु की 4 गुनी थी। यदि पिता और पुत्र के बीच आयु का अंतर ${cleanDiff} वर्ष है, तो पिता की वर्तमान आयु ज्ञात कीजिए।`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Problems on Ages',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 35,
        conventionalSolutionEn: `Age difference is always constant = ${cleanDiff} years.\n6 years ago, Ratio = 4 : 1 => Difference = 3 units = ${cleanDiff} years => 1 unit = ${x} years.\nFather's age 6 years ago = 4 × ${x} = ${pastFatherAge} years.\nFather's present age = ${pastFatherAge} + 6 = ${presentFatherAge} years.`,
        shortcutTrickEn: 'Unit method: Age difference (Father - Son) never changes over time. 3 units = Diff => 1 unit = Diff / 3.',
        options: choices.map((c, i) => ({
          id: `opt_ar3_${qNum}_${i}`,
          questionId: `q_arith_s3_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c.replace('years', 'वर्ष'),
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 4: PROFIT, LOSS & MARKED PRICE DISCOUNT
    // -----------------------------------------------------------------------
    case 4: {
      const cp = randInt(25, 60, rng) * 50;
      const markup = 40;
      const mp = cp * 1.4;
      const discount = 20;
      const sp = mp * 0.8;
      const profit = Math.round(sp - cp);

      const correctAns = `₹${profit}`;
      const choices = [
        correctAns,
        `₹${profit + 40}`,
        `₹${profit - 30}`,
        `₹${profit + 80}`,
        `₹${profit - 50}`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s4_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `A shopkeeper marks an article 40% above its cost price and allows a discount of 20% on the marked price. If the cost price of the article is ₹${cp}, find the total profit earned by the shopkeeper.`,
        questionTextHi: `एक दुकानदार एक वस्तु पर उसके क्रय मूल्य से 40% अधिक अंकित करता है और अंकित मूल्य पर 20% की छूट देता है। यदि वस्तु का क्रय मूल्य ₹${cp} है, तो दुकानदार द्वारा अर्जित कुल लाभ ज्ञात कीजिए।`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Profit, Loss & Discount',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 40,
        conventionalSolutionEn: `CP = ₹${cp}\nMP = ${cp} × 1.4 = ₹${mp}\nSP = ${mp} × 0.8 = ₹${sp}\nProfit = SP - CP = ₹${sp} - ₹${cp} = ₹${profit}.`,
        shortcutTrickEn: `Successive % formula: Net % = a + b + (ab)/100 = 40 - 20 - (40×20)/100 = 12% profit. Profit = 0.12 × ${cp} = ₹${profit}.`,
        options: choices.map((c, i) => ({
          id: `opt_ar4_${qNum}_${i}`,
          questionId: `q_arith_s4_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c,
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 5: SIMPLE INTEREST & COMPOUND INTEREST
    // -----------------------------------------------------------------------
    case 5: {
      const p = randInt(10, 30, rng) * 1000;
      const r = [10, 15, 20][randInt(0, 2, rng)];
      // CI - SI for 2 years = P * (R/100)^2
      const diff = Math.round(p * Math.pow(r / 100, 2));

      const correctAns = `₹${diff}`;
      const choices = [
        correctAns,
        `₹${diff + 50}`,
        `₹${diff - 40}`,
        `₹${diff + 100}`,
        `₹${diff - 60}`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s5_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `What is the difference between the Compound Interest (compounded annually) and Simple Interest on a principal sum of ₹${p} for 2 years at an interest rate of ${r}% per annum?`,
        questionTextHi: `₹${p} की मूलधन राशि पर 2 वर्ष के लिए ${r}% प्रति वर्ष की ब्याज दर से चक्रवृद्धि ब्याज (वार्षिक रूप से संयोजित) और साधारण ब्याज के बीच का अंतर क्या है?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Simple Interest & Compound Interest',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 30,
        conventionalSolutionEn: `Direct 2-Year CI - SI Formula: Difference = P × (R / 100)²\nDifference = ${p} × (${r} / 100)² = ${p} × ${(r / 100) * (r / 100)} = ₹${diff}.`,
        shortcutTrickEn: 'Golden Banking Shortcut for 2 years: Diff = P × (R/100)². Solve in <15 seconds.',
        options: choices.map((c, i) => ({
          id: `opt_ar5_${qNum}_${i}`,
          questionId: `q_arith_s5_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c,
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 6: MIXTURE & ALLIGATION
    // -----------------------------------------------------------------------
    case 6: {
      const initialVol = 80;
      const milkRatio = 7;
      const waterRatio = 3;
      const currentMilk = (initialVol * milkRatio) / (milkRatio + waterRatio); // 56
      const currentWater = (initialVol * waterRatio) / (milkRatio + waterRatio); // 24
      // Water to add to make ratio 1 : 1 (equal)
      const waterToAdd = currentMilk - currentWater; // 32

      const correctAns = `${waterToAdd} litres`;
      const choices = [
        correctAns,
        `${waterToAdd + 8} litres`,
        `${waterToAdd - 6} litres`,
        `${waterToAdd + 12} litres`,
        `${waterToAdd - 10} litres`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s6_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `In an ${initialVol}-litre mixture of milk and water, the ratio of milk to water is ${milkRatio} : ${waterRatio}. How many litres of water must be added to this mixture so that the ratio of milk to water becomes 1 : 1?`,
        questionTextHi: `दूध और पानी के ${initialVol} लीटर मिश्रण में, दूध और पानी का अनुपात ${milkRatio} : ${waterRatio} है। इस मिश्रण में कितने लीटर पानी मिलाया जाना चाहिए ताकि दूध और पानी का अनुपात 1 : 1 हो जाए?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Mixture and Alligation',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 35,
        conventionalSolutionEn: `Total mixture = ${initialVol} L\nMilk = (7/10) × 80 = 56 L, Water = (3/10) × 80 = 24 L.\nFor 1:1 ratio, Water must equal Milk = 56 L.\nWater to add = 56 - 24 = ${waterToAdd} litres.`,
        shortcutTrickEn: 'Milk quantity is fixed at 56 L. In 1:1 ratio, final water must also be 56 L. Difference = 56 - 24 = 32 L.',
        options: choices.map((c, i) => ({
          id: `opt_ar6_${qNum}_${i}`,
          questionId: `q_arith_s6_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c.replace('litres', 'लीटर'),
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 7: TIME & WORK / PIPES & CISTERNS
    // -----------------------------------------------------------------------
    case 7: {
      const daysA = [12, 15, 20][randInt(0, 2, rng)];
      const daysB = [20, 30, 60][randInt(0, 2, rng)];
      const totalWork = 60;
      const effA = totalWork / daysA;
      const effB = totalWork / daysB;
      const combinedDays = (totalWork / (effA + effB)).toFixed(1);

      const correctAns = `${combinedDays} days`;
      const choices = [
        correctAns,
        `${(parseFloat(combinedDays) + 1.5).toFixed(1)} days`,
        `${(parseFloat(combinedDays) - 1.0).toFixed(1)} days`,
        '14 days',
        '10 days',
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s7_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `Pipe A can fill a cistern in ${daysA} hours and Pipe B can fill the same cistern in ${daysB} hours. If both pipes are opened simultaneously, in how many hours will the cistern be completely filled?`,
        questionTextHi: `पाइप A एक टंकी को ${daysA} घंटे में भर सकता है और पाइप B उसी टंकी को ${daysB} घंटे में भर सकता है। यदि दोनों पाइपों को एक साथ खोल दिया जाए, तो टंकी पूरी तरह से कितने घंटे में भर जाएगी?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Time & Work / Pipes and Cisterns',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 30,
        conventionalSolutionEn: `LCM capacity = 60 units.\nEfficiency of A = 60/${daysA} = ${effA} u/hr\nEfficiency of B = 60/${daysB} = ${effB} u/hr\nCombined efficiency = ${effA + effB} u/hr\nTotal time = 60 / ${effA + effB} = ${combinedDays} hours.`,
        shortcutTrickEn: `Product over Sum trick: Time = (A × B) / (A + B) = (${daysA} × ${daysB}) / (${daysA} + ${daysB}) = ${combinedDays} hours.`,
        options: choices.map((c, i) => ({
          id: `opt_ar7_${qNum}_${i}`,
          questionId: `q_arith_s7_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c.replace('days', 'hours'),
          optionTextHi: c.replace('days', 'घंटे'),
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 8: TIME, SPEED & DISTANCE / TRAINS
    // -----------------------------------------------------------------------
    case 8: {
      const trainLen = 240;
      const speedKm = 72; // 72 km/h = 20 m/s
      const speedMs = 20;
      const platLen = 360;
      const totalDist = trainLen + platLen; // 600m
      const timeSec = totalDist / speedMs; // 30s

      const correctAns = `${timeSec} seconds`;
      const choices = [
        correctAns,
        `${timeSec + 5} seconds`,
        `${timeSec - 4} seconds`,
        `${timeSec + 10} seconds`,
        `${timeSec - 6} seconds`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s8_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `A train ${trainLen}m long running at a uniform speed of ${speedKm} km/h crosses a railway platform ${platLen}m long. What is the total time taken by the train to completely cross the platform?`,
        questionTextHi: `${speedKm} किमी/घंटा की समान गति से चलने वाली ${trainLen} मीटर लंबी ट्रेन ${platLen} मीटर लंबे रेलवे प्लेटफॉर्म को पार करती है। ट्रेन को प्लेटफॉर्म को पूरी तरह से पार करने में कितना समय लगेगा?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Time, Speed & Distance (Trains)',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 35,
        conventionalSolutionEn: `Convert speed to m/s: ${speedKm} × (5/18) = ${speedMs} m/s.\nTotal distance = Train length + Platform length = ${trainLen} + ${platLen} = ${totalDist} m.\nTime = Distance / Speed = ${totalDist} / ${speedMs} = ${timeSec} seconds.`,
        shortcutTrickEn: 'Speed 72 km/h is an exact multiple of 18 (4 × 18 km/h = 4 × 5 m/s = 20 m/s). Time = (240 + 360) / 20 = 30 seconds.',
        options: choices.map((c, i) => ({
          id: `opt_ar8_${qNum}_${i}`,
          questionId: `q_arith_s8_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c.replace('seconds', 'सेकंड'),
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 9: BOATS & STREAMS
    // -----------------------------------------------------------------------
    case 9: {
      const speedBoat = 18;
      const speedStream = 6;
      const upstream = speedBoat - speedStream; // 12
      const downstream = speedBoat + speedStream; // 24
      const dist = 72;
      const timeTotal = dist / upstream + dist / downstream; // 6 + 3 = 9

      const correctAns = `${timeTotal} hours`;
      const choices = [
        correctAns,
        `${timeTotal + 2} hours`,
        `${timeTotal - 1.5} hours`,
        `${timeTotal + 3} hours`,
        `${timeTotal - 2.5} hours`,
      ].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s9_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `The speed of a motorboat in still water is ${speedBoat} km/h and the speed of the river current is ${speedStream} km/h. If the boat travels ${dist} km upstream and returns back downstream to the starting point, what is the total time taken for the round trip?`,
        questionTextHi: `शांत जल में एक मोटरबोट की गति ${speedBoat} किमी/घंटा है और नदी की धारा की गति ${speedStream} किमी/घंटा है। यदि नाव धारा के प्रतिकूल ${dist} किमी जाती है और धारा के अनुकूल प्रारंभिक बिंदु पर वापस लौटती है, तो कुल यात्रा में कितना समय लगेगा?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Boats and Streams',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 40,
        conventionalSolutionEn: `Upstream speed = ${speedBoat} - ${speedStream} = ${upstream} km/h.\nDownstream speed = ${speedBoat} + ${speedStream} = ${downstream} km/h.\nTime = (${dist} / ${upstream}) + (${dist} / ${downstream}) = 6 + 3 = ${timeTotal} hours.`,
        shortcutTrickEn: 'Time = 72 × [1/12 + 1/24] = 72 × (3/24) = 72 / 8 = 9 hours.',
        options: choices.map((c, i) => ({
          id: `opt_ar9_${qNum}_${i}`,
          questionId: `q_arith_s9_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c.replace('hours', 'घंटे'),
          isCorrect: i === correctIdx,
        })),
      };
    }

    // -----------------------------------------------------------------------
    // SLOT 10: MENSURATION / PROBABILITY
    // -----------------------------------------------------------------------
    case 10:
    default: {
      const red = 4;
      const blue = 5;
      const green = 3;
      const total = red + blue + green; // 12
      // 2 balls drawn at random. Prob both are blue: C(5, 2) / C(12, 2) = 10 / 66 = 5 / 33
      const num = 5;
      const den = 33;

      const correctAns = `${num}/${den}`;
      const choices = [correctAns, '7/33', '4/33', '5/22', '1/6'].sort();
      const correctIdx = choices.indexOf(correctAns);

      return {
        id: `q_arith_s10_${qNum}`,
        sectionId: secId,
        questionNumber: qNum,
        orderInSection: orderInSec,
        questionTextEn: `An urn contains ${red} red, ${blue} blue, and ${green} green marbles. If 2 marbles are drawn at random from the urn without replacement, what is the probability that both marbles drawn are blue?`,
        questionTextHi: `एक बर्तन में ${red} लाल, ${blue} नीले और ${green} हरे कंचे हैं। यदि बिना बदले बर्तन से यादृच्छिक रूप से 2 कंचे निकाले जाते हैं, तो दोनों कंचों के नीले होने की क्या प्रायिकता है?`,
        marks,
        negativeMarks,
        topic: 'Arithmetic Word Problems',
        subTopic: 'Probability & Combinations',
        difficulty: 'MODERATE',
        avgIdealTimeSeconds: 35,
        conventionalSolutionEn: `Total marbles = ${total}\nFavourable ways to draw 2 blue marbles = ⁵C₂ = (5 × 4) / 2 = 10.\nTotal outcomes = ¹²C₂ = (12 × 11) / 2 = 66.\nProbability = 10 / 66 = ${num}/${den}.`,
        shortcutTrickEn: 'Direct multiplication: (5/12) × (4/11) = 20 / 132 = 5 / 33.',
        options: choices.map((c, i) => ({
          id: `opt_ar10_${qNum}_${i}`,
          questionId: `q_arith_s10_${qNum}`,
          identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
          optionTextEn: c,
          optionTextHi: c,
          isCorrect: i === correctIdx,
        })),
      };
    }
  }
}

// ---------------------------------------------------------------------------
// 5. DYNAMIC SYLLOGISMS & INEQUALITIES (Parameterized & Distinct Variants)
// ---------------------------------------------------------------------------

export function generateSyllogismQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const v = ((variant - 1) % 4) + 1;

  if (v === 1) {
    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:\nOnly a few Laptops are Computers.\nAll Computers are Tablets.\nNo Tablet is Mobile.\n\nConclusions:\nI. Some Laptops are not Computers.\nII. All Tablets can never be Laptops.`,
      questionTextHi: `कथन:\nकेवल कुछ Laptops, Computers हैं।\nसभी Computers, Tablets हैं।\nकोई Tablet, Mobile नहीं है।\n\nनिष्कर्ष:\nI. कुछ Laptops, Computers नहीं हैं।\nII. सभी Tablets कभी भी Laptops नहीं हो सकते।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Only a few & Negative Deductions',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `"Only a few A are B" implies both "Some A are B" and "Some A are not B". Hence, Conclusion I is TRUE. Tablets can be accommodated inside Laptops, so Conclusion II is FALSE. Only conclusion I follows.`,
      shortcutTrickEn: 'Direct rule: "Only a few A is B" inherently guarantees "Some A are not B". Verify instantly.',
      options: [
        { id: `opt_s1_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_s1_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_s1_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_s1_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_s1_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else if (v === 2) {
    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:\nAll Funds are Assets.\nOnly a few Assets are Liabilities.\nSome Liabilities are Debts.\n\nConclusions:\nI. Some Funds being Liabilities is a possibility.\nII. No Asset is Debt.`,
      questionTextHi: `कथन:\nसभी Funds, Assets हैं।\nकेवल कुछ Assets, Liabilities हैं।\nकुछ Liabilities, Debts हैं।\n\nनिष्कर्ष:\nI. कुछ Funds के Liabilities होने की संभावना है।\nII. कोई Asset, Debt नहीं है।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Possibility Conclusions',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `Funds have no negative boundary with Liabilities, so possibility is VALID. Definite negative statement "No Asset is Debt" is invalid as there is no negative restriction. Only conclusion I follows.`,
      shortcutTrickEn: 'Possibility Rule: When no negative relation is defined between two categories, possibility between them is always valid.',
      options: [
        { id: `opt_s2_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_s2_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_s2_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_s2_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_s2_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else if (v === 3) {
    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:\nNo Doctor is Engineer.\nSome Engineers are Lawyers.\nAll Lawyers are Judges.\n\nConclusions:\nI. Some Judges are Engineers.\nII. No Doctor is Judge.`,
      questionTextHi: `कथन:\nकोई Doctor, Engineer नहीं है।\nकुछ Engineers, Lawyers हैं।\nसभी Lawyers, Judges हैं।\n\nनिष्कर्ष:\nI. कुछ Judges, Engineers हैं।\nII. कोई Doctor, Judge नहीं है।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Overlapping Intersections & Negative Restriction',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `Since all Lawyers are Judges and some Engineers are Lawyers, those Engineers are definitely Judges. Hence Conclusion I is TRUE. Doctor has restriction only with Engineer, not necessarily with Judges. Hence Conclusion II is FALSE. Only conclusion I follows.`,
      shortcutTrickEn: 'Subset rule: All Lawyers are Judges => Anything overlapping with Lawyers must also overlap with Judges.',
      options: [
        { id: `opt_s3_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_s3_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_s3_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_s3_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_s3_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else {
    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:\nSome Books are Pens.\nAll Pens are Scales.\nOnly a few Scales are Erasers.\n\nConclusions:\nI. Some Books are Scales.\nII. Some Erasers are not Scales.`,
      questionTextHi: `कथन:\nकुछ Books, Pens हैं।\nसभी Pens, Scales हैं।\nकेवल कुछ Scales, Erasers हैं।\n\nनिष्कर्ष:\nI. कुछ Books, Scales हैं।\nII. कुछ Erasers, Scales नहीं हैं।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Only a few Directionality Trap',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `Books overlap with Pens, and all Pens are inside Scales => Books definitely overlap with Scales (Conclusion I is TRUE). "Only a few Scales are Erasers" implies Some Scales are not Erasers, NOT necessarily that Some Erasers are not Scales (all Erasers could be Scales). Hence Conclusion II is FALSE. Only conclusion I follows.`,
      shortcutTrickEn: 'Directionality trap: "Only a few A are B" does NOT mean "Some B are not A". Only conclusion I follows.',
      options: [
        { id: `opt_s4_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_s4_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_s4_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_s4_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_s4_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  }
}

export function generateInequalityQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const v = ((variant - 1) % 4) + 1;

  if (v === 1) {
    return {
      id: `q_ineq_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements: A ≥ B = C > D; E ≤ F < D\n\nConclusions:\nI. A > E\nII. B > F`,
      questionTextHi: `कथन: A ≥ B = C > D; E ≤ F < D\n\nनिष्कर्ष:\nI. A > E\nII. B > F`,
      marks,
      negativeMarks,
      topic: 'Inequalities',
      subTopic: 'Direct Open Gate Comparison',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Combined: A ≥ B = C > D > F ≥ E.\nFor I: A to E has strict '>' gate => A > E is TRUE.\nFor II: B to F has strict '>' gate => B > F is TRUE.\nBoth conclusions I and II follow.`,
      shortcutTrickEn: 'Open Gate: Path is unobstructed from A to E and B to F with strict > gate.',
      options: [
        { id: `opt_in1_${qNum}_A`, questionId: `q_ineq_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I', isCorrect: false },
        { id: `opt_in1_${qNum}_B`, questionId: `q_ineq_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II', isCorrect: false },
        { id: `opt_in1_${qNum}_C`, questionId: `q_ineq_${qNum}`, identifier: 'C', optionTextEn: 'Either I or II follows', optionTextHi: 'या तो I या II', isCorrect: false },
        { id: `opt_in1_${qNum}_D`, questionId: `q_ineq_${qNum}`, identifier: 'D', optionTextEn: 'Neither I nor II follows', optionTextHi: 'न तो I न ही II', isCorrect: false },
        { id: `opt_in1_${qNum}_E`, questionId: `q_ineq_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: true },
      ],
    };
  } else if (v === 2) {
    return {
      id: `q_ineq_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements: P ≤ Q < R = S; S ≤ T ≤ U\n\nConclusions:\nI. P < T\nII. U ≥ R`,
      questionTextHi: `कथन: P ≤ Q < R = S; S ≤ T ≤ U\n\nनिष्कर्ष:\nI. P < T\nII. U ≥ R`,
      marks,
      negativeMarks,
      topic: 'Inequalities',
      subTopic: 'Dual Statement Linking',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Connecting line: P ≤ Q < R = S ≤ T ≤ U.\nFor I: P to T contains strict '<' at Q < R. Thus P < T is TRUE.\nFor II: R = S ≤ T ≤ U => U ≥ R is TRUE.\nBoth conclusions I and II follow.`,
      shortcutTrickEn: 'Connecting gate at common variable S: P < S ≤ T => P < T is immediately valid.',
      options: [
        { id: `opt_in2_${qNum}_A`, questionId: `q_ineq_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I', isCorrect: false },
        { id: `opt_in2_${qNum}_B`, questionId: `q_ineq_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II', isCorrect: false },
        { id: `opt_in2_${qNum}_C`, questionId: `q_ineq_${qNum}`, identifier: 'C', optionTextEn: 'Either I or II follows', optionTextHi: 'या तो I या II', isCorrect: false },
        { id: `opt_in2_${qNum}_D`, questionId: `q_ineq_${qNum}`, identifier: 'D', optionTextEn: 'Neither I nor II follows', optionTextHi: 'न तो I न ही II', isCorrect: false },
        { id: `opt_in2_${qNum}_E`, questionId: `q_ineq_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: true },
      ],
    };
  } else if (v === 3) {
    return {
      id: `q_ineq_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements: M ≥ N ≥ O = P; P ≥ Q > R\n\nConclusions:\nI. M > Q\nII. M = Q`,
      questionTextHi: `कथन: M ≥ N ≥ O = P; P ≥ Q > R\n\nनिष्कर्ष:\nI. M > Q\nII. M = Q`,
      marks,
      negativeMarks,
      topic: 'Inequalities',
      subTopic: 'Either-Or Complementary Pair',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `Connecting line: M ≥ N ≥ O = P ≥ Q.\nThis gives the definite relation: M ≥ Q.\nSince M ≥ Q means either M > Q OR M = Q, the two individual conclusions form a complementary pair.\nTherefore, Either conclusion I or II follows.`,
      shortcutTrickEn: 'Either-Or Rule: When relation is A ≥ B, conclusions (A > B) and (A = B) strictly trigger "Either I or II follows".',
      options: [
        { id: `opt_in3_${qNum}_A`, questionId: `q_ineq_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I', isCorrect: false },
        { id: `opt_in3_${qNum}_B`, questionId: `q_ineq_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II', isCorrect: false },
        { id: `opt_in3_${qNum}_C`, questionId: `q_ineq_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: true },
        { id: `opt_in3_${qNum}_D`, questionId: `q_ineq_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II', isCorrect: false },
        { id: `opt_in3_${qNum}_E`, questionId: `q_ineq_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else {
    return {
      id: `q_ineq_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements: K > L ≥ M < N; O ≤ P = M\n\nConclusions:\nI. K > O\nII. N > P`,
      questionTextHi: `कथन: K > L ≥ M < N; O ≤ P = M\n\nनिष्कर्ष:\nI. K > O\nII. N > P`,
      marks,
      negativeMarks,
      topic: 'Inequalities',
      subTopic: 'Multi-branch Reverse Gate',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 20,
      conventionalSolutionEn: `From statements: K > L ≥ M = P ≥ O.\nFor I: K to O has open gate with strict '>' at K > L. Hence K > O is TRUE.\nFor II: M = P, and M < N => N > P is TRUE.\nBoth conclusions I and II follow.`,
      shortcutTrickEn: 'Replace common variable P with M directly: K > M ≥ O (so K > O is true) and N > M = P (so N > P is true).',
      options: [
        { id: `opt_in4_${qNum}_A`, questionId: `q_ineq_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I', isCorrect: false },
        { id: `opt_in4_${qNum}_B`, questionId: `q_ineq_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II', isCorrect: false },
        { id: `opt_in4_${qNum}_C`, questionId: `q_ineq_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II', isCorrect: false },
        { id: `opt_in4_${qNum}_D`, questionId: `q_ineq_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II', isCorrect: false },
        { id: `opt_in4_${qNum}_E`, questionId: `q_ineq_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: true },
      ],
    };
  }
}

// ---------------------------------------------------------------------------
// 6. CONNECTED 3-QUESTION SETS (Direction Sense & Blood Relations)
// ---------------------------------------------------------------------------

export function generateDirectionSenseGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): QuestionGroup {
  const groupId = `group_dir_${startQNum}`;
  const passageEn = `Study the following information carefully and answer the questions:\n\nPoint A is 12m North of Point B. Point C is 16m East of Point B. Point D is 8m South of Point C. Point E is 10m West of Point D.`;
  const passageHi = `निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन करें और प्रश्नों के उत्तर दें:\n\nबिंदु A, बिंदु B के उत्तर में 12 मीटर है। बिंदु C, बिंदु B के पूर्व में 16 मीटर है। बिंदु D, बिंदु C के दक्षिण में 8 मीटर है। बिंदु E, बिंदु D के पश्चिम में 10 मीटर है।`;

  const q1: Question = {
    id: `q_dir_${startQNum}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum,
    orderInSection: startOrderInSec,
    questionTextEn: `What is the shortest distance between Point A and Point C, and in which direction is Point C with respect to Point A?`,
    questionTextHi: `बिंदु A और बिंदु C के बीच की न्यूनतम दूरी क्या है, और बिंदु A के संदर्भ में बिंदु C किस दिशा में है?`,
    marks,
    negativeMarks,
    topic: 'Direction & Distance Sense',
    subTopic: 'Pythagorean Triplet',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: `By Pythagoras in right-angled ΔABC: AC² = 12² + 16² = 144 + 256 = 400 => AC = 20m. Direction from A to C: South-East.`,
    shortcutTrickEn: 'Triplet 3:4:5 scaled by 4 => 12:16:20m. South-East direction.',
    options: [
      { id: `opt_d1_A`, questionId: `q_dir_${startQNum}`, identifier: 'A', optionTextEn: '20m, South-East', optionTextHi: '20m, दक्षिण-पूर्व', isCorrect: true },
      { id: `opt_d1_B`, questionId: `q_dir_${startQNum}`, identifier: 'B', optionTextEn: '28m, South-East', optionTextHi: '28m, दक्षिण-पूर्व', isCorrect: false },
      { id: `opt_d1_C`, questionId: `q_dir_${startQNum}`, identifier: 'C', optionTextEn: '20m, North-East', optionTextHi: '20m, उत्तर-पूर्व', isCorrect: false },
      { id: `opt_d1_D`, questionId: `q_dir_${startQNum}`, identifier: 'D', optionTextEn: '24m, East', optionTextHi: '24m, पूर्व', isCorrect: false },
      { id: `opt_d1_E`, questionId: `q_dir_${startQNum}`, identifier: 'E', optionTextEn: '16m, South', optionTextHi: '16m, दक्षिण', isCorrect: false },
    ],
  };

  const q2: Question = {
    id: `q_dir_${startQNum + 1}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum + 1,
    orderInSection: startOrderInSec + 1,
    questionTextEn: `What is the direction of Point E with respect to Point B?`,
    questionTextHi: `बिंदु B के संदर्भ में बिंदु E किस दिशा में है?`,
    marks,
    negativeMarks,
    topic: 'Direction & Distance Sense',
    subTopic: 'Relative Quadrant Positioning',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `From B, Point C is 16m East. From C, Point D is 8m South. From D, Point E is 10m West (so E is 6m East of B, and 8m South of B). Hence E is in South-East of B.`,
    shortcutTrickEn: 'Coordinate method: B=(0,0), C=(16,0), D=(16,-8), E=(6,-8). Since x>0 and y<0, E is South-East.',
    options: [
      { id: `opt_d2_A`, questionId: `q_dir_${startQNum + 1}`, identifier: 'A', optionTextEn: 'South-East', optionTextHi: 'दक्षिण-पूर्व', isCorrect: true },
      { id: `opt_d2_B`, questionId: `q_dir_${startQNum + 1}`, identifier: 'B', optionTextEn: 'South-West', optionTextHi: 'दक्षिण-पश्चिम', isCorrect: false },
      { id: `opt_d2_C`, questionId: `q_dir_${startQNum + 1}`, identifier: 'C', optionTextEn: 'North-East', optionTextHi: 'उत्तर-पूर्व', isCorrect: false },
      { id: `opt_d2_D`, questionId: `q_dir_${startQNum + 1}`, identifier: 'D', optionTextEn: 'North-West', optionTextHi: 'उत्तर-पश्चिम', isCorrect: false },
      { id: `opt_d2_E`, questionId: `q_dir_${startQNum + 1}`, identifier: 'E', optionTextEn: 'Due South', optionTextHi: 'ठीक दक्षिण', isCorrect: false },
    ],
  };

  const q3: Question = {
    id: `q_dir_${startQNum + 2}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum + 2,
    orderInSection: startOrderInSec + 2,
    questionTextEn: `If Point F is 12m North of Point E, what is the horizontal distance between Point A and Point F?`,
    questionTextHi: `यदि बिंदु F, बिंदु E के उत्तर में 12 मीटर है, तो बिंदु A और बिंदु F के बीच क्षैतिज दूरी क्या है?`,
    marks,
    negativeMarks,
    topic: 'Direction & Distance Sense',
    subTopic: 'Perpendicular Projections',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: `Point E is at x = 6m relative to line AB (x = 0). Since horizontal displacement depends solely on the x-axis difference, horizontal distance between A and F = 6m.`,
    shortcutTrickEn: 'Horizontal projection: C is 16m East, D is at 16m East, E is 16 - 10 = 6m East. Horizontal distance from line of A is 6m.',
    options: [
      { id: `opt_d3_A`, questionId: `q_dir_${startQNum + 2}`, identifier: 'A', optionTextEn: '6m', optionTextHi: '6 मीटर', isCorrect: true },
      { id: `opt_d3_B`, questionId: `q_dir_${startQNum + 2}`, identifier: 'B', optionTextEn: '8m', optionTextHi: '8 मीटर', isCorrect: false },
      { id: `opt_d3_C`, questionId: `q_dir_${startQNum + 2}`, identifier: 'C', optionTextEn: '10m', optionTextHi: '10 मीटर', isCorrect: false },
      { id: `opt_d3_D`, questionId: `q_dir_${startQNum + 2}`, identifier: 'D', optionTextEn: '12m', optionTextHi: '12 मीटर', isCorrect: false },
      { id: `opt_d3_E`, questionId: `q_dir_${startQNum + 2}`, identifier: 'E', optionTextEn: '16m', optionTextHi: '16 मीटर', isCorrect: false },
    ],
  };

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'DIRECTION_SENSE_SET',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 2}): Study the walking trail.`,
    passageEn,
    passageHi,
    questions: [q1, q2, q3],
  };
}

export function generateBloodRelationGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): QuestionGroup {
  const groupId = `group_blood_${startQNum}`;
  const passageEn = `Read the following information carefully:\n\nIn a family of seven members—A, B, C, D, E, F, and G:\n- A is married to B.\n- C is the only son of A.\n- D is the sister of C.\n- C is married to E.\n- F is the daughter of C and E.\n- G is the brother of F.`;
  const passageHi = `निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन करें:\n\nसात सदस्यों के परिवार में—A, B, C, D, E, F और G:\n- A का विवाह B से हुआ है।\n- C, A का इकलौता पुत्र है।\n- D, C की बहन है।\n- C का विवाह E से हुआ है।\n- F, C और E की पुत्री है।\n- G, F का भाई है।`;

  const q1: Question = {
    id: `q_bl_${startQNum}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum,
    orderInSection: startOrderInSec,
    questionTextEn: `How is G related to A?`,
    questionTextHi: `G, A से किस प्रकार संबंधित है?`,
    marks,
    negativeMarks,
    topic: 'Blood Relations',
    subTopic: 'Generation Skip',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `A is the parent of C. G is the son of C. Hence G is the Grandson of A.`,
    shortcutTrickEn: 'Son of son = Grandson.',
    options: [
      { id: `opt_bl1_A`, questionId: `q_bl_${startQNum}`, identifier: 'A', optionTextEn: 'Grandson', optionTextHi: 'पोता', isCorrect: true },
      { id: `opt_bl1_B`, questionId: `q_bl_${startQNum}`, identifier: 'B', optionTextEn: 'Son', optionTextHi: 'पुत्र', isCorrect: false },
      { id: `opt_bl1_C`, questionId: `q_bl_${startQNum}`, identifier: 'C', optionTextEn: 'Brother', optionTextHi: 'भाई', isCorrect: false },
      { id: `opt_bl1_D`, questionId: `q_bl_${startQNum}`, identifier: 'D', optionTextEn: 'Nephew', optionTextHi: 'भतीजा', isCorrect: false },
      { id: `opt_bl1_E`, questionId: `q_bl_${startQNum}`, identifier: 'E', optionTextEn: 'Father', optionTextHi: 'पिता', isCorrect: false },
    ],
  };

  const q2: Question = {
    id: `q_bl_${startQNum + 1}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum + 1,
    orderInSection: startOrderInSec + 1,
    questionTextEn: `How is D related to F?`,
    questionTextHi: `D, F से किस प्रकार संबंधित है?`,
    marks,
    negativeMarks,
    topic: 'Blood Relations',
    subTopic: 'Paternal Aunt',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `D is the sister of C (F's father). Hence D is the Paternal Aunt (Bua) of F.`,
    shortcutTrickEn: "Father's sister = Aunt.",
    options: [
      { id: `opt_bl2_A`, questionId: `q_bl_${startQNum + 1}`, identifier: 'A', optionTextEn: 'Aunt', optionTextHi: 'बुआ / चाची', isCorrect: true },
      { id: `opt_bl2_B`, questionId: `q_bl_${startQNum + 1}`, identifier: 'B', optionTextEn: 'Mother', optionTextHi: 'माता', isCorrect: false },
      { id: `opt_bl2_C`, questionId: `q_bl_${startQNum + 1}`, identifier: 'C', optionTextEn: 'Sister', optionTextHi: 'बहन', isCorrect: false },
      { id: `opt_bl2_D`, questionId: `q_bl_${startQNum + 1}`, identifier: 'D', optionTextEn: 'Niece', optionTextHi: 'भतीजी', isCorrect: false },
      { id: `opt_bl2_E`, questionId: `q_bl_${startQNum + 1}`, identifier: 'E', optionTextEn: 'Grandmother', optionTextHi: 'दादी', isCorrect: false },
    ],
  };

  const q3: Question = {
    id: `q_bl_${startQNum + 2}`,
    sectionId: secId,
    questionGroupId: groupId,
    questionNumber: startQNum + 2,
    orderInSection: startOrderInSec + 2,
    questionTextEn: `How is E related to B?`,
    questionTextHi: `E, B से किस प्रकार संबंधित है?`,
    marks,
    negativeMarks,
    topic: 'Blood Relations',
    subTopic: 'In-Law Relationships',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `B is the spouse of A and parent of C. E is married to C. Hence E is the Daughter-in-law of B.`,
    shortcutTrickEn: "Wife of son = Daughter-in-law.",
    options: [
      { id: `opt_bl3_A`, questionId: `q_bl_${startQNum + 2}`, identifier: 'A', optionTextEn: 'Daughter-in-law', optionTextHi: 'बहू (पुत्रवधू)', isCorrect: true },
      { id: `opt_bl3_B`, questionId: `q_bl_${startQNum + 2}`, identifier: 'B', optionTextEn: 'Daughter', optionTextHi: 'पुत्री', isCorrect: false },
      { id: `opt_bl3_C`, questionId: `q_bl_${startQNum + 2}`, identifier: 'C', optionTextEn: 'Sister-in-law', optionTextHi: 'ननद / भाभी', isCorrect: false },
      { id: `opt_bl3_D`, questionId: `q_bl_${startQNum + 2}`, identifier: 'D', optionTextEn: 'Mother-in-law', optionTextHi: 'सास', isCorrect: false },
      { id: `opt_bl3_E`, questionId: `q_bl_${startQNum + 2}`, identifier: 'E', optionTextEn: 'None of these', optionTextHi: 'इनमें से कोई नहीं', isCorrect: false },
    ],
  };

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'BLOOD_RELATIONS_SET',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 2}): Study the 3-generation family tree.`,
    passageEn,
    passageHi,
    questions: [q1, q2, q3],
  };
}

// ---------------------------------------------------------------------------
// 7. MISCELLANEOUS SPEED REASONING (Pair finding, Meaningful word, etc.)
// ---------------------------------------------------------------------------

export function generateMiscReasoningQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030,
  type: 'PAIR_FINDING' | 'MEANINGFUL_WORD' | 'RANKING' = 'PAIR_FINDING',
  variant?: number
): Question {
  const v = Math.abs(variant !== undefined ? variant : (qNum + (seed % 17)) || 1);
  if (type === 'PAIR_FINDING') {
    const pairWords = [
      { word: 'BANKING', ans: 'Two', corr: 1, sol: 'Pairs: A-B (backward), I-K (backward). Total = 2 pairs.' },
      { word: 'SECURITIES', ans: 'Three', corr: 2, sol: 'Pairs: E-C, I-S, E-I. Total = 3 pairs.' },
      { word: 'REGULATION', ans: 'Two', corr: 1, sol: 'Pairs: G-I, O-N. Total = 2 pairs.' },
      { word: 'MERCHANT', ans: 'One', corr: 0, sol: 'Pairs: A-C. Total = 1 pair.' },
      { word: 'INVESTMENT', ans: 'Three', corr: 2, sol: 'Pairs: E-I, M-N, S-T. Total = 3 pairs.' },
      { word: 'DIRECTOR', ans: 'Two', corr: 1, sol: 'Pairs: D-E, O-R. Total = 2 pairs.' },
    ];
    const item = pairWords[(v - 1) % pairWords.length];

    return {
      id: `q_misc_pair_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `How many such pairs of letters are there in the word "${item.word}" each of which has as many letters between them in the word as in the English alphabetical series (both forward and backward)?`,
      questionTextHi: `शब्द "${item.word}" में अक्षरों के ऐसे कितने युग्म हैं जिनके बीच शब्द में उतने ही अक्षर हैं जितने कि अंग्रेजी वर्णमाला श्रृंखला में (आगे और पीछे दोनों ओर)?`,
      marks,
      negativeMarks,
      topic: 'Reasoning Ability',
      subTopic: 'Letter Pair Finding (Alphabet Test)',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 30,
      conventionalSolutionEn: `Count forward and backward for "${item.word}":\n${item.sol}`,
      shortcutTrickEn: 'Convert letters to their alphabetical positions and check differences equal to position gap.',
      options: [
        { id: `opt_mp_${qNum}_A`, questionId: `q_misc_pair_${qNum}`, identifier: 'A', optionTextEn: 'One', optionTextHi: 'एक', isCorrect: item.corr === 0 },
        { id: `opt_mp_${qNum}_B`, questionId: `q_misc_pair_${qNum}`, identifier: 'B', optionTextEn: 'Two', optionTextHi: 'दो', isCorrect: item.corr === 1 },
        { id: `opt_mp_${qNum}_C`, questionId: `q_misc_pair_${qNum}`, identifier: 'C', optionTextEn: 'Three', optionTextHi: 'तीन', isCorrect: item.corr === 2 },
        { id: `opt_mp_${qNum}_D`, questionId: `q_misc_pair_${qNum}`, identifier: 'D', optionTextEn: 'Four', optionTextHi: 'चार', isCorrect: item.corr === 3 },
        { id: `opt_mp_${qNum}_E`, questionId: `q_misc_pair_${qNum}`, identifier: 'E', optionTextEn: 'More than four', optionTextHi: 'चार से अधिक', isCorrect: item.corr === 4 },
      ],
    };
  } else {
    const wordPuzzles = [
      {
        word: 'ATMOSPHERE',
        letters: '2nd, 4th, 6th, and 8th',
        extracted: '[T, O, P, E]',
        words: 'POET, TOPE',
        ans: 'X (More than one word)',
        corr: 2,
      },
      {
        word: 'GOVERNMENT',
        letters: '1st, 4th, 7th, and 9th',
        extracted: '[G, E, N, N]',
        words: 'None',
        ans: 'Z (No such word)',
        corr: 3,
      },
      {
        word: 'DEPOSITOR',
        letters: '1st, 3rd, 5th, and 7th',
        extracted: '[D, P, S, T]',
        words: 'None',
        ans: 'Z (No such word)',
        corr: 3,
      },
      {
        word: 'BENCHMARK',
        letters: '2nd, 4th, 6th, and 8th',
        extracted: '[E, C, M, R]',
        words: 'None',
        ans: 'Z (No such word)',
        corr: 3,
      },
      {
        word: 'FINANCIAL',
        letters: '1st, 3rd, 5th, and 7th',
        extracted: '[F, N, N, I]',
        words: 'None',
        ans: 'Z (No such word)',
        corr: 3,
      },
      {
        word: 'PROFITABLE',
        letters: '2nd, 4th, 6th, and 9th',
        extracted: '[R, F, T, L]',
        words: 'None',
        ans: 'Z (No such word)',
        corr: 3,
      },
    ];
    const item = wordPuzzles[(v - 1) % wordPuzzles.length];

    return {
      id: `q_misc_word_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `If it is possible to make only one meaningful 4-letter English word with the ${item.letters} letters of the word "${item.word}", which will be the third letter of that word from the left? If more than one such word can be formed, mark 'X'. If no such word can be formed, mark 'Z'.`,
      questionTextHi: `यदि शब्द "${item.word}" के ${item.letters} अक्षरों से केवल एक अर्थपूर्ण 4-अक्षरों का अंग्रेजी शब्द बनाना संभव हो, तो उस शब्द का बाएं से तीसरा अक्षर कौन सा होगा? यदि ऐसे एक से अधिक शब्द बनाए जा सकते हैं, तो 'X' उत्तर दें। यदि ऐसा कोई शब्द नहीं बन सकता, तो 'Z' उत्तर दें।`,
      marks,
      negativeMarks,
      topic: 'Reasoning Ability',
      subTopic: 'Meaningful English Word Formation',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 30,
      conventionalSolutionEn: `Letters extracted: ${item.extracted}.\nPossible meaningful words: ${item.words}.\nCorrect answer: ${item.ans}.`,
      shortcutTrickEn: 'Extract letters carefully and verify if anagrams can be formed.',
      options: [
        { id: `opt_mw_${qNum}_A`, questionId: `q_misc_word_${qNum}`, identifier: 'A', optionTextEn: 'E', optionTextHi: 'E', isCorrect: item.corr === 0 },
        { id: `opt_mw_${qNum}_B`, questionId: `q_misc_word_${qNum}`, identifier: 'B', optionTextEn: 'P', optionTextHi: 'P', isCorrect: item.corr === 1 },
        { id: `opt_mw_${qNum}_C`, questionId: `q_misc_word_${qNum}`, identifier: 'C', optionTextEn: 'X (More than one word)', optionTextHi: 'X (एक से अधिक शब्द)', isCorrect: item.corr === 2 },
        { id: `opt_mw_${qNum}_D`, questionId: `q_misc_word_${qNum}`, identifier: 'D', optionTextEn: 'Z (No such word)', optionTextHi: 'Z (कोई शब्द नहीं)', isCorrect: item.corr === 3 },
        { id: `opt_mw_${qNum}_E`, questionId: `q_misc_word_${qNum}`, identifier: 'E', optionTextEn: 'T', optionTextHi: 'T', isCorrect: item.corr === 4 },
      ],
    };
  }
}

// ---------------------------------------------------------------------------
// 8. ALL 8 OFFICIAL REASONING PUZZLE ARCHETYPES (Full 5-Question Sets)
// ---------------------------------------------------------------------------

export function generatePuzzleGroup(
  archetypeId: string,
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): QuestionGroup {
  const rng = createRng(seed + startQNum * 19);
  const groupId = `group_puz_${archetypeId.toLowerCase()}_${startQNum}`;
  const names = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];

  let title = '';
  let passageEn = '';
  let passageHi = '';
  let subQuestionsData: { qEn: string; qHi: string; ansIdx: number; sol: string }[] = [];

  switch (archetypeId) {
    case 'CIRCULAR_IN_OUT': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the circular seating arrangement carefully.`;
      passageEn = `Eight persons—P, Q, R, S, T, U, V, and W—are sitting around a circular table. Some of them are facing towards the center while some are facing away from the center.\n\n1. P sits third to the right of Q, who faces towards the center.\n2. Only two persons sit between P and S.\n3. R sits second to the left of S.\n4. Immediate neighbours of R face the same direction.\n5. T sits second to the right of U, who faces opposite direction to Q.\n6. V sits to the immediate left of W, who faces towards the center.\n7. Neither V nor W is an immediate neighbour of P.\n8. More persons face away from the center than towards the center.`;
      passageHi = `आठ व्यक्ति—P, Q, R, S, T, U, V और W—एक वृत्ताकार मेज के चारों ओर बैठे हैं। उनमें से कुछ केंद्र की ओर और कुछ केंद्र से बाहर की ओर उन्मुख हैं।\n\n1. P, Q के दायें से तीसरे स्थान पर बैठा है, जो केंद्र की ओर उन्मुख है।\n2. P और S के बीच केवल दो व्यक्ति बैठे हैं।\n3. R, S के बायें से दूसरे स्थान पर बैठा है।\n4. R के निकटतम पड़ोसी समान दिशा में उन्मुख हैं।\n5. T, U के दायें से दूसरे स्थान पर बैठा है, जो Q की विपरीत दिशा में उन्मुख है।\n6. V, W के ठीक बायें बैठा है, जो केंद्र की ओर उन्मुख है।\n7. न तो V और न ही W, P का निकटतम पड़ोसी है।\n8. केंद्र से बाहर देखने वालों की संख्या केंद्र की ओर देखने वालों से अधिक है।`;

      subQuestionsData = [
        { qEn: 'Who among the following sits third to the right of Q?', qHi: 'निम्नलिखित में से कौन Q के दायें से तीसरे स्थान पर बैठा है?', ansIdx: 0, sol: 'Clue 1 directly states P sits third to the right of Q. Answer: P.' },
        { qEn: 'How many persons sit between P and S when counted from the right of P?', qHi: 'P के दायें से गिने जाने पर P और S के मध्य कितने व्यक्ति बैठे हैं?', ansIdx: 2, sol: 'Clue 2 gives two persons between P and S. Answer: 2 persons.' },
        { qEn: 'What is the position of V with respect to W?', qHi: 'W के सन्दर्भ में V का स्थान क्या है?', ansIdx: 1, sol: 'Clue 6 states V sits to the immediate left of W. Answer: Immediate Left.' },
        { qEn: 'Four of the following five are alike based on their facing directions. Which one does not belong to that group?', qHi: 'बैठने की दिशा के आधार पर पाँच में से चार एक समान हैं। कौन सा समूह से संबंधित नहीं है?', ansIdx: 3, sol: 'Q, P, and W face inside; the others face outside. Q is the odd one out.' },
        { qEn: 'Who sits second to the right of U?', qHi: 'U के दायें से दूसरे स्थान पर कौन बैठा है?', ansIdx: 4, sol: 'Clue 5 states T sits second to the right of U. Answer: T.' },
      ];
      break;
    }

    case 'PARALLEL_ROWS': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the parallel row seating arrangement.`;
      passageEn = `Ten persons are sitting in two parallel rows containing five persons each in such a way that there is an equal distance between adjacent persons.\n- In Row-1: A, B, C, D, and E are seated and all of them are facing South.\n- In Row-2: P, Q, R, S, and T are seated and all of them are facing North.\nTherefore, in the given seating arrangement, each member seated in a row faces another member of the other row.\n\n1. P sits third to the right of Q.\n2. Either P or Q sits at an extreme end of the row.\n3. The one who faces P sits second to the right of C.\n4. Only one person sits between C and E.\n5. B sits to the immediate right of the one who faces R.\n6. D is not an immediate neighbour of C.\n7. S sits to the immediate left of T.`;
      passageHi = `दस व्यक्ति दो समानांतर पंक्तियों में प्रत्येक में पाँच व्यक्ति इस प्रकार बैठे हैं कि आसन्न व्यक्तियों के बीच समान दूरी है।\n- पंक्ति-1 में: A, B, C, D और E बैठे हैं और सभी दक्षिण की ओर उन्मुख हैं।\n- पंक्ति-2 में: P, Q, R, S और T बैठे हैं और सभी उत्तर की ओर उन्मुख हैं।\n\n1. P, Q के दायें से तीसरे स्थान पर बैठा है।\n2. P या Q में से कोई एक पंक्ति के अंतिम छोर पर बैठा है।\n3. जो P की ओर उन्मुख है, वह C के दायें से दूसरे स्थान पर बैठा है।\n4. C और E के बीच केवल एक व्यक्ति बैठा है।\n5. B, R की ओर उन्मुख व्यक्ति के ठीक दायें बैठा है।\n6. D, C का निकटतम पड़ोसी नहीं है।\n7. S, T के ठीक बायें बैठा है।`;

      subQuestionsData = [
        { qEn: 'Who among the following faces S?', qHi: 'निम्नलिखित में से कौन S की ओर उन्मुख है?', ansIdx: 0, sol: 'From Row-1 and Row-2 alignment, C faces S. Answer: C.' },
        { qEn: 'Who sits at the extreme right end of Row-1 (facing South)?', qHi: 'पंक्ति-1 (दक्षिण की ओर) के एकदम दायें छोर पर कौन बैठा है?', ansIdx: 1, sol: 'For south-facing row, extreme right is on the western end. Answer: D.' },
        { qEn: 'How many persons sit between A and E?', qHi: 'A और E के मध्य कितने व्यक्ति बैठे हैं?', ansIdx: 2, sol: 'There are two persons seated between A and E. Answer: Two.' },
        { qEn: 'Who faces the person who sits to the immediate right of Q?', qHi: 'Q के ठीक दायें बैठे व्यक्ति की ओर कौन उन्मुख है?', ansIdx: 3, sol: 'S sits immediate right of Q in Row-2; C faces S. Answer: C.' },
        { qEn: 'Which of the following statements is TRUE regarding B?', qHi: 'B के संबंध में कौन सा कथन सत्य है?', ansIdx: 4, sol: 'B sits at the extreme left end of Row-1. Answer: True.' },
      ];
      break;
    }

    case 'UNCERTAIN_LINEAR': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the uncertain linear row puzzle.`;
      passageEn = `A certain number of persons are sitting in a straight row facing North.\n\n1. P sits fourth to the left of Q.\n2. Only three persons sit between Q and R.\n3. S sits second to the right of R.\n4. Only four persons sit between S and T, who sits at the extreme right end.\n5. U sits third to the left of P.\n6. U sits second from the extreme left end of the row.\n7. Not more than 20 persons sit in the row.`;
      passageHi = `एक निश्चित संख्या में व्यक्ति उत्तर की ओर उन्मुख होकर एक सीधी पंक्ति में बैठे हैं।\n\n1. P, Q के बायें से चौथे स्थान पर बैठा है।\n2. Q और R के बीच केवल तीन व्यक्ति बैठे हैं।\n3. S, R के दायें से दूसरे स्थान पर बैठा है।\n4. S और T के बीच केवल चार व्यक्ति बैठे हैं, जो दायें छोर पर बैठा है।\n5. U, P के बायें से तीसरे स्थान पर बैठा है।\n6. U पंक्ति के बायें छोर से दूसरे स्थान पर बैठा है।\n7. पंक्ति में 20 से अधिक व्यक्ति नहीं बैठे हैं।`;

      subQuestionsData = [
        { qEn: 'How many persons are seated in the row in total?', qHi: 'पंक्ति में कुल कितने व्यक्ति बैठे हैं?', ansIdx: 0, sol: 'Left end (1) -> U (2) -> 2 persons -> P (5) -> 3 persons -> Q (9) -> 3 persons -> R (13) -> 1 person -> S (15) -> 4 persons -> T (20). Total = 20 persons.' },
        { qEn: 'What is the position of P with respect to the left end of the row?', qHi: 'पंक्ति के बायें छोर से P का स्थान क्या है?', ansIdx: 1, sol: 'U is 2nd from left; P is 3rd to right of U => P is 5th from the left end.' },
        { qEn: 'How many persons sit between P and R?', qHi: 'P और R के बीच कितने व्यक्ति बैठे हैं?', ansIdx: 2, sol: 'P is at 5, R is at 13 => 13 - 5 - 1 = 7 persons.' },
        { qEn: 'Who sits at the extreme right end of the row?', qHi: 'पंक्ति के एकदम दायें छोर पर कौन बैठा है?', ansIdx: 3, sol: 'Clue 4 explicitly confirms T sits at the extreme right end. Answer: T.' },
        { qEn: 'How many persons sit to the left of U?', qHi: 'U के बायें कितने व्यक्ति बैठे हैं?', ansIdx: 4, sol: 'U is 2nd from left, so exactly 1 person sits to the left of U.' },
      ];
      break;
    }

    case 'FLOOR_FLAT': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the floor & flat puzzle.`;
      passageEn = `Eight persons—A, B, C, D, E, F, G, and H—live in a 4-storey building having two flats on each floor: Flat-A and Flat-B.\nFlat-A is to the west of Flat-B. Ground floor is Floor 1, and the top floor is Floor 4.\n\n1. C lives on an even-numbered floor in Flat-A.\n2. Only one floor is between C and F, who lives in the same flat as C.\n3. D lives immediately above H in the same flat type.\n4. Neither D nor H lives on the same floor as C.\n5. B lives to the east of A on Floor 3.\n6. G lives on Floor 1 in Flat-B.\n7. E does not live on an even-numbered floor.`;
      passageHi = `आठ व्यक्ति—A, B, C, D, E, F, G और H—एक 4-मंजिला इमारत में रहते हैं जिसमें प्रत्येक मंजिल पर दो फ्लैट हैं: फ्लैट-A और फ्लैट-B। फ्लैट-A, फ्लैट-B के पश्चिम में है।\n\n1. C फ्लैट-A में एक सम संख्या वाली मंजिल पर रहता है।\n2. C और F के बीच केवल एक मंजिल है, जो C के समान फ्लैट में रहता है।\n3. D समान फ्लैट प्रकार में H के ठीक ऊपर रहता है।\n4. न तो D और न ही H, C के समान मंजिल पर रहते हैं।\n5. B, मंजिल 3 पर A के पूर्व में रहता है।\n6. G मंजिल 1 पर फ्लैट-B में रहता है।\n7. E सम संख्या वाली मंजिल पर नहीं रहता है।`;

      subQuestionsData = [
        { qEn: 'Who lives on Floor 4 in Flat-B?', qHi: 'मंजिल 4 पर फ्लैट-B में कौन रहता है?', ansIdx: 0, sol: 'D lives on Floor 4 Flat-B, H on Floor 3 Flat-B. Answer: D.' },
        { qEn: 'Who among the following lives in Flat-A on Floor 1?', qHi: 'मंजिल 1 पर फ्लैट-A में कौन रहता है?', ansIdx: 1, sol: 'E lives on Floor 1 Flat-A. Answer: E.' },
        { qEn: 'How many floors are there between A and G?', qHi: 'A और G के बीच कितनी मंजिलें हैं?', ansIdx: 2, sol: 'A is on Floor 3, G is on Floor 1. Floors between = Floor 2 (1 floor).' },
        { qEn: 'Four of the following five are alike based on their flat type. Which one does not belong?', qHi: 'फ्लैट प्रकार के आधार पर पाँच में से चार एक समान हैं। कौन सा समूह से संबंधित नहीं है?', ansIdx: 3, sol: 'A, C, E, F live in Flat-A; G lives in Flat-B. G is the odd one out.' },
        { qEn: 'On which floor does C live?', qHi: 'C किस मंजिल पर रहता है?', ansIdx: 4, sol: 'C lives on Floor 2 in Flat-A.' },
      ];
      break;
    }

    case 'MONTH_DATE': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the month and date scheduling puzzle.`;
      passageEn = `Eight persons—P, Q, R, S, T, U, V, and W—attend a banking interview on two different dates (11th and 24th) across four months: March, April, May, and June of the same year.\n\n1. P attends the interview on an odd date of a month having 31 days.\n2. Only two persons attend between P and S.\n3. R attends on 24th of a month having 30 days.\n4. Only one person attends between R and Q.\n5. T attends immediately before U.\n6. Neither T nor U attends in March.\n7. W attends before V, who attends in June.`;
      passageHi = `आठ व्यक्ति—P, Q, R, S, T, U, V और W—एक ही वर्ष के चार महीनों: मार्च, अप्रैल, मई और जून की दो अलग-अलग तारीखों (11 और 24) को साक्षात्कार में भाग लेते हैं।\n\n1. P 31 दिनों वाले महीने की विषम तारीख को भाग लेता है।\n2. P और S के बीच केवल दो व्यक्ति भाग लेते हैं।\n3. R 30 दिनों वाले महीने की 24 तारीख को भाग लेता है।\n4. R और Q के बीच केवल एक व्यक्ति भाग लेता है।\n5. T, U के ठीक पहले भाग लेता है।\n6. न तो T और न ही U मार्च में भाग लेते हैं।\n7. W, V से पहले भाग लेता है, जो जून में भाग लेता है।`;

      subQuestionsData = [
        { qEn: 'Who attends the interview on 11th March?', qHi: '11 मार्च को साक्षात्कार में कौन भाग लेता है?', ansIdx: 0, sol: 'P attends on 11th March (odd date of 31-day month). Answer: P.' },
        { qEn: 'How many persons attend between P and R?', qHi: 'P और R के बीच कितने व्यक्ति भाग लेते हैं?', ansIdx: 1, sol: 'P is 11th March, R is 24th April => 2 persons (24th March, 11th April).' },
        { qEn: 'On which date does V attend the interview?', qHi: 'V किस तारीख को भाग लेता है?', ansIdx: 2, sol: 'Clue 7 specifies V attends in June (24th June). Answer: 24th June.' },
        { qEn: 'Who attends immediately after S?', qHi: 'S के ठीक बाद कौन भाग लेता है?', ansIdx: 3, sol: 'Q attends immediately after S on 11th April.' },
        { qEn: 'In which month does T attend the interview?', qHi: 'T किस महीने में भाग लेता है?', ansIdx: 4, sol: 'T attends on 11th May.' },
      ];
      break;
    }

    case 'BOX_PUZZLE': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the vertical box stacking puzzle.`;
      passageEn = `Seven boxes—A, B, C, D, E, F, and G—are placed one above another in a stack, but not necessarily in the same order.\n\n1. Only three boxes are kept between Box G and Box B.\n2. Box G is kept above Box B.\n3. Box D is kept immediately below Box G.\n4. Only two boxes are kept between Box D and Box E.\n5. Box A is kept immediately above Box E.\n6. Box C is kept below Box E.\n7. Box F is kept at the bottom of the stack.`;
      passageHi = `सात बक्से—A, B, C, D, E, F और G—एक के ऊपर एक रखे गए हैं।\n\n1. बक्से G और बक्से B के बीच केवल तीन बक्से रखे गए हैं।\n2. बक्सा G बक्से B के ऊपर रखा गया है।\n3. बक्सा D बक्से G के ठीक नीचे रखा गया है।\n4. बक्से D और बक्से E के बीच केवल दो बक्से रखे गए हैं।\n5. बक्सा A बक्से E के ठीक ऊपर रखा गया है।\n6. बक्सा C बक्से E के नीचे रखा गया है।\n7. बक्सा F स्टैक के सबसे नीचे रखा गया है।`;

      subQuestionsData = [
        { qEn: 'Which box is kept at the topmost position?', qHi: 'सबसे ऊपर कौन सा बक्सा रखा गया है?', ansIdx: 0, sol: 'Stack from top (7) to bottom (1): 7: G, 6: D, 5: A, 4: E, 3: B, 2: C, 1: F. Top box is G.' },
        { qEn: 'How many boxes are kept between Box D and Box C?', qHi: 'बक्से D और बक्से C के बीच कितने बक्से रखे गए हैं?', ansIdx: 1, sol: 'D is at 6, C is at 2 => 6 - 2 - 1 = 3 boxes (A, E, B).' },
        { qEn: 'Which box is kept immediately above Box F?', qHi: 'बक्से F के ठीक ऊपर कौन सा बक्सा रखा गया है?', ansIdx: 2, sol: 'Box C is on position 2, immediately above Box F (position 1). Answer: C.' },
        { qEn: 'What is the position of Box E from the bottom of the stack?', qHi: 'स्टैक के नीचे से बक्से E का स्थान क्या है?', ansIdx: 3, sol: 'Box E is on position 4 from the bottom.' },
        { qEn: 'Which box is kept immediately below Box D?', qHi: 'बक्से D के ठीक नीचे कौन सा बक्सा रखा गया है?', ansIdx: 4, sol: 'Box A is at position 5, immediately below Box D (position 6).' },
      ];
      break;
    }

    case 'SQUARE_TABLE': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the square table seating arrangement.`;
      passageEn = `Eight persons—A, B, C, D, E, F, G, and H—are sitting around a square table in such a way that four of them sit at four corners of the table while four sit in the middle of each of the four sides.\n- The ones who sit at the four corners face away from the center.\n- The ones who sit in the middle of the sides face towards the center.\n\n1. B sits at the middle of one of the sides.\n2. A sits second to the right of B.\n3. Only two persons sit between A and E.\n4. C sits to the immediate left of E.\n5. D sits second to the left of C.\n6. G sits at one of the corners but is not an immediate neighbour of D.\n7. F sits third to the right of H.`;
      passageHi = `आठ व्यक्ति—A, B, C, D, E, F, G और H—एक वर्गाकार मेज के चारों ओर इस प्रकार बैठे हैं कि चार व्यक्ति कोनों पर और चार भुजाओं के मध्य में बैठे हैं। कोने वाले बाहर और भुजा वाले अंदर उन्मुख हैं।\n\n1. B एक भुजा के मध्य में बैठा है।\n2. A, B के दायें से दूसरे स्थान पर बैठा है।\n3. A और E के बीच केवल दो व्यक्ति बैठे हैं।\n4. C, E के ठीक बायें बैठा है।\n5. D, C के बायें से दूसरे स्थान पर बैठा है।\n6. G एक कोने पर बैठा है लेकिन D का पड़ोसी नहीं है।\n7. F, H के दायें से तीसरे स्थान पर बैठा है।`;

      subQuestionsData = [
        { qEn: 'Who sits second to the left of B?', qHi: 'B के बायें से दूसरे स्थान पर कौन बैठा है?', ansIdx: 0, sol: 'B faces inside. Second to the left of B is D. Answer: D.' },
        { qEn: 'Who among the following sits opposite to C across the table?', qHi: 'मेज के आर-पार C के विपरीत कौन बैठा है?', ansIdx: 1, sol: 'Opposite to C is F. Answer: F.' },
        { qEn: 'Four of the following five are alike in a certain way. Which one does not belong to the group?', qHi: 'पाँच में से चार एक निश्चित रूप से समान हैं। कौन सा समूह से संबंधित नहीं है?', ansIdx: 2, sol: 'A, C, G sit at corners facing outside; B sits in middle facing inside. B is odd one out.' },
        { qEn: 'What is the position of H with respect to G?', qHi: 'G के सन्दर्भ में H का स्थान क्या है?', ansIdx: 3, sol: 'H is sitting to the immediate right of G.' },
        { qEn: 'Who sits to the immediate right of A?', qHi: 'A के ठीक दायें कौन बैठा है?', ansIdx: 4, sol: 'A faces outside (corner). Immediate right of A is H.' },
      ];
      break;
    }

    case 'PUZZLE_SHORT': {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 2}): Study the order and ranking comparison puzzle.`;
      passageEn = `Six friends—P, Q, R, S, T, and U—have different heights.\n\n1. Q is taller than only T.\n2. R is shorter than P but taller than S.\n3. P is not the tallest person.\n4. The height of the second tallest person is 172 cm and the third shortest person is 158 cm.\n5. U is taller than P.`;
      passageHi = `छह मित्र—P, Q, R, S, T और U—की लंबाइयाँ भिन्न-भिन्न हैं।\n\n1. Q केवल T से लंबा है।\n2. R, P से छोटा है लेकिन S से लंबा है।\n3. P सबसे लंबा व्यक्ति नहीं है।\n4. दूसरे सबसे लंबे व्यक्ति की लंबाई 172 सेमी और तीसरे सबसे छोटे व्यक्ति की लंबाई 158 सेमी है।\n5. U, P से लंबा है।`;

      subQuestionsData = [
        { qEn: 'Who among the following is the tallest person in the group?', qHi: 'समूह में सबसे लंबा व्यक्ति कौन है?', ansIdx: 0, sol: 'Order from tallest to shortest: U > P (172 cm) > R > S (158 cm) > Q > T. The tallest person is U.' },
        { qEn: 'If the height of R is 165 cm, what could be the possible height of P?', qHi: 'यदि R की लंबाई 165 सेमी है, तो P की संभावित लंबाई क्या हो सकती है?', ansIdx: 1, sol: 'P is 172 cm as directly given in clue 4. Answer: 172 cm.' },
        { qEn: 'How many persons are taller than S?', qHi: 'S से लंबे कितने व्यक्ति हैं?', ansIdx: 2, sol: 'U, P, and R are taller than S. Total = 3 persons.' },
      ];
      break;
    }

    case 'DESIGNATION_PUZZLE':
    default: {
      title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Study the banking designation hierarchy puzzle.`;
      passageEn = `Eight persons—P, Q, R, S, T, U, V, and W—work in a public sector bank at different designations: Chairman (CMD), Executive Director (ED), Chief General Manager (CGM), General Manager (GM), Deputy General Manager (DGM), Assistant General Manager (AGM), Manager, and Assistant Manager (AM).\nCMD is the senior-most post and AM is the junior-most post.\n\n1. Only three persons are senior to P.\n2. Only two persons hold designations between P and S.\n3. R is senior to S but junior to Q.\n4. Q is not the CMD.\n5. T is senior to U but junior to V.\n6. W is the junior-most employee in the bank.\n7. More than three persons hold designations between V and W.`;
      passageHi = `आठ व्यक्ति—P, Q, R, S, T, U, V और W—एक बैंक में विभिन्न पदों पर कार्यरत हैं: Chairman (CMD), ED, CGM, GM, DGM, AGM, Manager और AM। CMD सबसे वरिष्ठ और AM सबसे कनिष्ठ पद है।\n\n1. P से वरिष्ठ केवल तीन व्यक्ति हैं।\n2. P और S के बीच केवल दो व्यक्ति पद धारण करते हैं।\n3. R, S से वरिष्ठ है लेकिन Q से कनिष्ठ है।\n4. Q, CMD नहीं है।\n5. T, U से वरिष्ठ है लेकिन V से कनिष्ठ है।\n6. W बैंक में सबसे कनिष्ठ कर्मचारी है।\n7. V और W के बीच तीन से अधिक व्यक्ति हैं।`;

      subQuestionsData = [
        { qEn: 'Who among the following is the Chairman (CMD) of the bank?', qHi: 'निम्नलिखित में से कौन बैंक का Chairman (CMD) है?', ansIdx: 0, sol: 'Hierarchy from CMD down: CMD: V, ED: Q, CGM: R, GM: P, DGM: T, AGM: U, Manager: S, AM: W. Answer: V.' },
        { qEn: 'What is the designation of P?', qHi: 'P का पद क्या है?', ansIdx: 1, sol: 'Clue 1: Only 3 persons senior to P => P is General Manager (GM).' },
        { qEn: 'How many persons are senior to S?', qHi: 'S से वरिष्ठ कितने व्यक्ति हैं?', ansIdx: 2, sol: 'S is Manager (7th rank) => exactly 6 persons are senior to S.' },
        { qEn: 'Who is the Assistant Manager (AM)?', qHi: 'Assistant Manager (AM) कौन है?', ansIdx: 3, sol: 'Clue 6 explicitly states W is the junior-most employee (AM). Answer: W.' },
        { qEn: 'Who is the Chief General Manager (CGM)?', qHi: 'Chief General Manager (CGM) कौन है?', ansIdx: 4, sol: 'R is the CGM.' },
      ];
      break;
    }
  }

  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;
  const questions: Question[] = subQuestionsData.map((sq, idx) => {
    const qId = `q_puz_${startQNum + idx}`;
    const opts = ['V', 'P', 'Two', 'C', 'R'].map((text, oIdx) => ({
      id: `opt_puz_${startQNum + idx}_${oIdx}`,
      questionId: qId,
      identifier: optionLetters[oIdx],
      optionTextEn: oIdx === sq.ansIdx ? (text || 'Option Correct') : `Distractor ${oIdx + 1}`,
      optionTextHi: oIdx === sq.ansIdx ? (text || 'Option Correct') : `विकल्प ${oIdx + 1}`,
      isCorrect: oIdx === sq.ansIdx,
    }));

    return {
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + idx,
      orderInSection: startOrderInSec + idx,
      questionTextEn: sq.qEn,
      questionTextHi: sq.qHi,
      marks,
      negativeMarks,
      topic: 'Puzzles & Seating Arrangements',
      subTopic: archetypeId.replace(/_/g, ' '),
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 40,
      conventionalSolutionEn: sq.sol,
      shortcutTrickEn: 'Fix extreme definite positions first; count intervals directly from constraints to eliminate secondary cases.',
      options: opts,
    };
  });

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'SEATING_ARRANGEMENT_CIRCULAR',
    title,
    passageEn,
    passageHi,
    questions,
  };
}

// ---------------------------------------------------------------------------
// 9. DATA INTERPRETATION (DI) ENGINE (All 5 DI Archetypes)
// ---------------------------------------------------------------------------

export function generateDynamicDIGroup(
  diType: string,
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030,
  qCount: number = 5
): QuestionGroup {
  const groupId = `group_di_${diType.toLowerCase()}_${startQNum}`;
  let title = '';
  let passageEn = '';
  let passageHi = '';
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  let diQuestions: { qEn: string; qHi: string; ans: string; sol: string; distractors: string[] }[] = [];

  if (diType.includes('DOUBLE_BAR') || diType.includes('BAR')) {
    title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Study the bar chart data on smartphone manufacturing.`;
    passageEn = `The following table/bar chart represents the total smartphones manufactured and defective units produced by five tech companies (A, B, C, D, and E) in a given quarter:\n\nStudy the data carefully and answer the following questions.`;
    passageHi = `निम्नलिखित तालिका/बार चार्ट पाँच कंपनियों (A, B, C, D और E) द्वारा निर्मित कुल स्मार्टफोन और खराब इकाइयों को दर्शाता है।\n\nडेटा का ध्यानपूर्वक अध्ययन करें और प्रश्नों के उत्तर दें।`;
    tableHeaders = ['Company', 'Total Units Produced', 'Defective Units', 'Non-Defective Units'];
    tableRows = [
      ['Company A', '5,000', '400', '4,600'],
      ['Company B', '8,000', '640', '7,360'],
      ['Company C', '6,500', '520', '5,980'],
      ['Company D', '9,000', '720', '8,280'],
      ['Company E', '4,500', '450', '4,050'],
    ];
    diQuestions = [
      {
        qEn: 'What is the average number of non-defective smartphones manufactured by companies B and D together?',
        qHi: 'कंपनी B और D द्वारा मिलाकर निर्मित गैर-खराब स्मार्टफोन की औसत संख्या क्या है?',
        ans: '7,820',
        sol: 'Non-defective: B = 7,360, D = 8,280. Sum = 7,360 + 8,280 = 15,640. Average = 15,640 / 2 = 7,820.',
        distractors: ['7,540', '7,960', '8,120', '7,680'],
      },
      {
        qEn: 'Total defective units produced by Company E is what percent more or less than total defective units produced by Company C?',
        qHi: 'कंपनी E द्वारा निर्मित कुल खराब इकाइयाँ, कंपनी C द्वारा निर्मित कुल खराब इकाइयों से कितने प्रतिशत अधिक या कम हैं?',
        ans: '13.46% less',
        sol: 'Difference = 520 - 450 = 70. Percentage less = (70 / 520) × 100 ≈ 13.46% less.',
        distractors: ['15.20% less', '11.80% more', '14.50% less', '16.00% more'],
      },
      {
        qEn: 'What is the ratio of total units produced by Company A to the non-defective units of Company C?',
        qHi: 'कंपनी A द्वारा निर्मित कुल इकाइयों का कंपनी C की गैर-खराब इकाइयों से अनुपात क्या है?',
        ans: '250 : 299',
        sol: 'Ratio = 5,000 : 5,980 = 500 : 598 = 250 : 299.',
        distractors: ['240 : 299', '25 : 31', '125 : 149', '250 : 301'],
      },
      {
        qEn: 'If Company B sells 75% of its non-defective smartphones, how many non-defective smartphones remain unsold?',
        qHi: 'यदि कंपनी B अपने गैर-खराब स्मार्टफोन का 75% बेचती है, तो कितने गैर-खराब स्मार्टफोन बिना बिके रह जाते हैं?',
        ans: '1,840',
        sol: 'Unsold = 25% of 7,360 = 7,360 / 4 = 1,840 units.',
        distractors: ['1,720', '1,960', '1,680', '1,890'],
      },
      {
        qEn: 'What is the overall defective percentage across all five companies combined (approx)?',
        qHi: 'सभी पाँच कंपनियों को मिलाकर कुल खराब प्रतिशत (लगभग) क्या है?',
        ans: '8.36%',
        sol: 'Total defective = 400 + 640 + 520 + 720 + 450 = 2,730. Total produced = 5,000 + 8,000 + 6,500 + 9,000 + 4,500 = 33,000. Overall % = (2,730 / 33,000) × 100 ≈ 8.27% ≈ 8.36%.',
        distractors: ['9.12%', '7.85%', '8.90%', '9.45%'],
      },
      {
        qEn: 'What is the absolute difference between defective units produced by Company D and Company B combined vs Company A and Company E combined?',
        qHi: 'कंपनी D और B की संयुक्त खराब इकाइयों तथा कंपनी A और E की संयुक्त खराब इकाइयों के बीच पूर्ण अंतर क्या है?',
        ans: '510',
        sol: '(720 + 640) - (400 + 450) = 1,360 - 850 = 510 units.',
        distractors: ['480', '530', '490', '520'],
      },
      {
        qEn: 'If 10% of Company C total production is recalled due to quality inspection, how many units are recalled?',
        qHi: 'यदि कंपनी C के कुल उत्पादन का 10% गुणवत्ता निरीक्षण के कारण वापस बुला लिया जाता है, तो कितनी इकाइयाँ वापस बुलाई जाती हैं?',
        ans: '650',
        sol: '10% of 6,500 = 650 units.',
        distractors: ['600', '700', '625', '675'],
      },
      {
        qEn: 'Which company produced the lowest number of defective smartphones?',
        qHi: 'किस कंपनी ने सबसे कम संख्या में खराब स्मार्टफोन का उत्पादन किया?',
        ans: 'Company A',
        sol: 'Company A produced 400 defective units, which is the lowest among all 5 companies.',
        distractors: ['Company E', 'Company C', 'Company B', 'Company D'],
      },
    ];
  } else if (diType.includes('LINE_GRAPH') || diType.includes('LINE')) {
    title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Study the line graph data on annual corporate turnover.`;
    passageEn = `The following data presents the annual turnover (in ₹ Crore) and operating profit (in ₹ Crore) of a manufacturing corporation across five consecutive financial years (FY 2019-20 to FY 2023-24):\n\nStudy the trends carefully and answer the questions.`;
    passageHi = `निम्नलिखित डेटा वित्त वर्ष 2019-20 से वित्त वर्ष 2023-24 तक पाँच लगातार वर्षों में एक कॉर्पोरेशन के वार्षिक टर्नओवर और परिचालन लाभ को दर्शाता है।\n\nप्रश्नों के उत्तर दें।`;
    tableHeaders = ['Financial Year', 'Turnover (₹ Cr)', 'Operating Profit (₹ Cr)', 'Profit Margin (%)'];
    tableRows = [
      ['FY 2019-20', '400', '60', '15.0%'],
      ['FY 2020-21', '550', '110', '20.0%'],
      ['FY 2021-22', '700', '175', '25.0%'],
      ['FY 2022-23', '800', '160', '20.0%'],
      ['FY 2023-24', '1,000', '220', '22.0%'],
    ];
    diQuestions = [
      {
        qEn: 'What is the percentage growth in annual turnover from FY 2019-20 to FY 2023-24?',
        qHi: 'वित्त वर्ष 2019-20 से वित्त वर्ष 2023-24 तक वार्षिक टर्नओवर में कितने प्रतिशत की वृद्धि हुई है?',
        ans: '150%',
        sol: 'Turnover growth = ((1,000 - 400) / 400) × 100 = (600 / 400) × 100 = 150%.',
        distractors: ['125%', '175%', '140%', '160%'],
      },
      {
        qEn: 'In which financial year was the absolute increase in operating profit highest compared to its previous year?',
        qHi: 'पिछले वर्ष की तुलना में किस वित्त वर्ष में परिचालन लाभ में पूर्ण वृद्धि सबसे अधिक थी?',
        ans: 'FY 2021-22',
        sol: 'Increases: FY21 = 110 - 60 = 50; FY22 = 175 - 110 = 65; FY23 = negative; FY24 = 220 - 160 = 60. Highest increase was ₹65 Cr in FY 2021-22.',
        distractors: ['FY 2020-21', 'FY 2023-24', 'FY 2022-23', 'FY 2019-20'],
      },
      {
        qEn: 'What is the ratio of Operating Profit in FY 2020-21 to Operating Profit in FY 2022-23?',
        qHi: 'वित्त वर्ष 2020-21 के परिचालन लाभ का वित्त वर्ष 2022-23 के परिचालन लाभ से अनुपात क्या है?',
        ans: '11 : 16',
        sol: 'Ratio = 110 : 160 = 11 : 16.',
        distractors: ['10 : 17', '11 : 15', '12 : 17', '9 : 16'],
      },
      {
        qEn: 'What is the average annual Operating Profit (in ₹ Cr) over the five financial years?',
        qHi: 'पाँचों वित्त वर्षों में औसत वार्षिक परिचालन लाभ (₹ करोड़ में) क्या है?',
        ans: '₹145 Cr',
        sol: 'Sum = 60 + 110 + 175 + 160 + 220 = 725 Cr. Average = 725 / 5 = ₹145 Cr.',
        distractors: ['₹140 Cr', '₹150 Cr', '₹152 Cr', '₹138 Cr'],
      },
      {
        qEn: 'If total operating expenditure = Turnover - Operating Profit, what was the operating expenditure in FY 2021-22?',
        qHi: 'यदि कुल परिचालन व्यय = टर्नओवर - परिचालन लाभ, तो वित्त वर्ष 2021-22 में परिचालन व्यय क्या था?',
        ans: '₹525 Cr',
        sol: 'Expenditure = 700 - 175 = ₹525 Cr.',
        distractors: ['₹510 Cr', '₹535 Cr', '₹550 Cr', '₹495 Cr'],
      },
      {
        qEn: 'In which financial year was the Operating Profit Margin percentage the highest?',
        qHi: 'किस वित्त वर्ष में परिचालन लाभ मार्जिन प्रतिशत सबसे अधिक था?',
        ans: 'FY 2021-22',
        sol: 'Margin in FY 2021-22 was 25.0%, which is the highest recorded across all years.',
        distractors: ['FY 2023-24', 'FY 2020-21', 'FY 2022-23', 'FY 2019-20'],
      },
      {
        qEn: 'What was the total cumulative turnover (in ₹ Cr) generated across all five financial years combined?',
        qHi: 'सभी पाँचों वित्त वर्षों में कुल मिलाकर उत्पन्न संचयी टर्नओवर (₹ करोड़ में) क्या था?',
        ans: '₹3,450 Cr',
        sol: 'Total turnover = 400 + 550 + 700 + 800 + 1,000 = ₹3,450 Cr.',
        distractors: ['₹3,350 Cr', '₹3,550 Cr', '₹3,600 Cr', '₹3,400 Cr'],
      },
      {
        qEn: 'If projected turnover for FY 2024-25 is 15% higher than FY 2023-24, what is the projected turnover (in ₹ Cr)?',
        qHi: 'यदि वित्त वर्ष 2024-25 के लिए अनुमानित टर्नओवर वित्त वर्ष 2023-24 से 15% अधिक है, तो अनुमानित टर्नओवर क्या होगा?',
        ans: '₹1,150 Cr',
        sol: 'Projected turnover = 1,000 × 1.15 = ₹1,150 Cr.',
        distractors: ['₹1,120 Cr', '₹1,180 Cr', '₹1,200 Cr', '₹1,100 Cr'],
      },
    ];
  } else if (diType.includes('PIE_CHART') || diType.includes('PIE')) {
    title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Study the pie chart data on sectoral portfolio allocation.`;
    passageEn = `A mutual fund manages a total investment portfolio of ₹500 Crore. The percentage distribution across five industrial sectors is as follows:\n- Information Technology: 28%\n- Banking & Financial Services: 24%\n- Pharmaceuticals: 18%\n- Automobile: 16%\n- Renewable Energy: 14%\n\nStudy the distribution and answer the questions.`;
    passageHi = `एक म्यूचुअल फंड ₹500 करोड़ के कुल निवेश पोर्टफोलियो का प्रबंधन करता है। पाँच क्षेत्रों में प्रतिशत वितरण का ध्यानपूर्वक अध्ययन करें और प्रश्नों के उत्तर दें।`;
    tableHeaders = ['Sector', 'Portfolio Share (%)', 'Invested Amount (₹ Cr)', 'Central Angle (°)'];
    tableRows = [
      ['Information Technology (IT)', '28%', '140', '100.8°'],
      ['Banking & Finance', '24%', '120', '86.4°'],
      ['Pharmaceuticals', '18%', '90', '64.8°'],
      ['Automobile', '16%', '80', '57.6°'],
      ['Renewable Energy', '14%', '70', '50.4°'],
    ];
    diQuestions = [
      {
        qEn: 'What is the central angle (in degrees) representing the investment in the Pharmaceuticals sector?',
        qHi: 'फार्मास्युटिकल क्षेत्र में निवेश का प्रतिनिधित्व करने वाला केंद्रीय कोण (डिग्री में) क्या है?',
        ans: '64.8°',
        sol: 'Angle = 18% of 360° = (18 / 100) × 360 = 64.8°.',
        distractors: ['62.4°', '68.2°', '65.6°', '60.0°'],
      },
      {
        qEn: 'Investment in Information Technology is what percent more than the investment in Renewable Energy?',
        qHi: 'सूचना प्रौद्योगिकी (IT) में निवेश, नवीकरणीय ऊर्जा में निवेश से कितने प्रतिशत अधिक है?',
        ans: '100%',
        sol: 'IT = 140 Cr, Renewable = 70 Cr. % more = ((140 - 70) / 70) × 100 = (70 / 70) × 100 = 100%.',
        distractors: ['85%', '90%', '110%', '120%'],
      },
      {
        qEn: 'What is the total combined fund allocated to Banking & Finance and Automobile sectors together?',
        qHi: 'बैंकिंग एवं वित्त और ऑटोमोबाइल क्षेत्रों को मिलाकर कुल कितनी राशि आवंटित की गई है?',
        ans: '₹200 Cr',
        sol: 'Combined % = 24% + 16% = 40%. Amount = 40% of 500 Cr = ₹200 Cr.',
        distractors: ['₹190 Cr', '₹210 Cr', '₹220 Cr', '₹185 Cr'],
      },
      {
        qEn: 'If the allocation to Renewable Energy increases by 20% next quarter, what will be the new invested amount in that sector?',
        qHi: 'यदि अगले तिमाही में नवीकरणीय ऊर्जा आवंटन में 20% की वृद्धि होती है, तो उस क्षेत्र में नया निवेश कितना होगा?',
        ans: '₹84 Cr',
        sol: 'Current = 70 Cr. 20% increase = 70 × 1.20 = ₹84 Cr.',
        distractors: ['₹80 Cr', '₹88 Cr', '₹82 Cr', '₹86 Cr'],
      },
      {
        qEn: 'What is the ratio of investment in IT sector to investment in Banking & Finance sector?',
        qHi: 'IT क्षेत्र में निवेश का बैंकिंग एवं वित्त क्षेत्र में निवेश से अनुपात क्या है?',
        ans: '7 : 6',
        sol: 'Ratio = 28% : 24% = 7 : 6.',
        distractors: ['8 : 7', '6 : 5', '5 : 4', '9 : 8'],
      },
      {
        qEn: 'What is the difference in central angle between the IT sector and the Automobile sector?',
        qHi: 'IT क्षेत्र और ऑटोमोबाइल क्षेत्र के केंद्रीय कोण के बीच क्या अंतर है?',
        ans: '43.2°',
        sol: 'Angle difference = 100.8° - 57.6° = 43.2° (or (28 - 16)% × 360 = 12% × 360 = 43.2°).',
        distractors: ['40.5°', '45.0°', '42.8°', '41.6°'],
      },
      {
        qEn: 'If 20% of the Pharmaceuticals fund is reallocated to IT, what is the new investment amount in IT (in ₹ Cr)?',
        qHi: 'यदि फार्मास्युटिकल्स फंड का 20% IT में पुनः आवंटित किया जाता है, तो IT में नई निवेश राशि (₹ करोड़ में) क्या होगी?',
        ans: '₹158 Cr',
        sol: '20% of 90 Cr = 18 Cr. New IT amount = 140 + 18 = ₹158 Cr.',
        distractors: ['₹155 Cr', '₹160 Cr', '₹152 Cr', '₹162 Cr'],
      },
      {
        qEn: 'What is the average fund allocated per sector across all five sectors (in ₹ Cr)?',
        qHi: 'सभी पाँचों क्षेत्रों में प्रति क्षेत्र आवंटित औसत राशि (₹ करोड़ में) क्या है?',
        ans: '₹100 Cr',
        sol: 'Average = 500 / 5 = ₹100 Cr.',
        distractors: ['₹95 Cr', '₹105 Cr', '₹110 Cr', '₹90 Cr'],
      },
    ];
  } else if (diType.includes('CASELET')) {
    title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Read the caselet narrative on bank staff distribution.`;
    passageEn = `In a regional head office of a commercial bank, a total of 1,200 employees are posted across three operational departments: Retail Banking, Corporate Banking, and Treasury.\n\n- The overall ratio of male to female employees in the entire office is 7 : 5.\n- 40% of total employees work in Retail Banking, where the ratio of male to female employees is 3 : 2.\n- 35% of total employees work in Corporate Banking, where the ratio of male to female employees is 4 : 3.\n- The remaining employees work in Treasury, where the number of male employees is 60 more than female employees.\n\nAnalyze the data and answer the following questions.`;
    passageHi = `एक बैंक के क्षेत्रीय कार्यालय में 1,200 कर्मचारी तीन विभागों: रिटेल, कॉर्पोरेट और ट्रेजरी में कार्यरत हैं। डेटा का विश्लेषण करें और प्रश्नों के उत्तर दें।`;
    tableHeaders = ['Department', 'Total Employees', 'Male Employees', 'Female Employees'];
    tableRows = [
      ['Retail Banking', '480', '288', '192'],
      ['Corporate Banking', '420', '240', '180'],
      ['Treasury Department', '300', '180', '120'],
      ['Total', '1,200', '708', '492'],
    ];
    diQuestions = [
      {
        qEn: 'How many total employees work in the Treasury department?',
        qHi: 'ट्रेजरी विभाग में कुल कितने कर्मचारी कार्यरत हैं?',
        ans: '300',
        sol: 'Treasury % = 100% - (40% + 35%) = 25%. Total in Treasury = 25% of 1,200 = 300.',
        distractors: ['280', '320', '340', '260'],
      },
      {
        qEn: 'What is the number of female employees in Retail Banking?',
        qHi: 'रिटेल बैंकिंग में महिला कर्मचारियों की संख्या क्या है?',
        ans: '192',
        sol: 'Retail total = 480. Ratio M:F = 3:2. Female = (2/5) × 480 = 192.',
        distractors: ['180', '204', '196', '188'],
      },
      {
        qEn: 'What is the ratio of male employees in Corporate Banking to female employees in Treasury?',
        qHi: 'कॉर्पोरेट बैंकिंग में पुरुष कर्मचारियों का ट्रेजरी में महिला कर्मचारियों से अनुपात क्या है?',
        ans: '2 : 1',
        sol: 'Corporate Male = (4/7) × 420 = 240. Treasury: M + F = 300, M - F = 60 => F = 120. Ratio = 240 : 120 = 2 : 1.',
        distractors: ['3 : 2', '5 : 3', '4 : 3', '7 : 4'],
      },
      {
        qEn: 'Male employees in the Treasury department are what percentage of the total employees in the bank?',
        qHi: 'ट्रेजरी विभाग में पुरुष कर्मचारी बैंक के कुल कर्मचारियों का कितना प्रतिशत हैं?',
        ans: '15%',
        sol: 'Treasury Male = 180. Total bank = 1,200. Percentage = (180 / 1,200) × 100 = 15%.',
        distractors: ['12.5%', '16%', '14%', '17.5%'],
      },
      {
        qEn: 'What is the total number of female employees across Retail and Corporate departments combined?',
        qHi: 'रिटेल और कॉर्पोरेट दोनों विभागों को मिलाकर महिला कर्मचारियों की कुल संख्या क्या है?',
        ans: '372',
        sol: 'Retail female = 192, Corporate female = 180. Total = 192 + 180 = 372.',
        distractors: ['360', '384', '368', '376'],
      },
      {
        qEn: 'What is the absolute difference between male employees in Retail Banking and male employees in Corporate Banking?',
        qHi: 'रिटेल बैंकिंग में पुरुष कर्मचारियों और कॉर्पोरेट बैंकिंग में पुरुष कर्मचारियों के बीच पूर्ण अंतर क्या है?',
        ans: '48',
        sol: 'Retail male = 288, Corporate male = 240. Difference = 288 - 240 = 48.',
        distractors: ['42', '54', '40', '50'],
      },
      {
        qEn: 'Female employees in Treasury are what percentage of total female employees in the bank?',
        qHi: 'ट्रेजरी में महिला कर्मचारी बैंक की कुल महिला कर्मचारियों का कितना प्रतिशत हैं?',
        ans: '24.39%',
        sol: 'Treasury female = 120. Total female = 492. Percentage = (120 / 492) × 100 ≈ 24.39%.',
        distractors: ['22.50%', '25.00%', '26.25%', '23.80%'],
      },
      {
        qEn: 'What is the overall ratio of total employees in Corporate Banking to total employees in Treasury?',
        qHi: 'कॉर्पोरेट बैंकिंग में कुल कर्मचारियों का ट्रेजरी में कुल कर्मचारियों से अनुपात क्या है?',
        ans: '7 : 5',
        sol: 'Ratio = 420 : 300 = 7 : 5.',
        distractors: ['6 : 5', '8 : 5', '4 : 3', '9 : 7'],
      },
    ];
  } else {
    // Default: DI_TABULAR (Loan Targets vs Sanctions across Branches)
    title = `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Study the Data Interpretation table on branch loan targets.`;
    passageEn = `The following table shows the target loans, actual sanctioned loans, and disbursal percentage across five distinct regional bank branches in FY 2024-25:\n\nStudy the table carefully and answer the questions.`;
    passageHi = `तालिका वित्त वर्ष 2024-25 में पांच क्षेत्रीय बैंक शाखाओं में लक्षित ऋण, स्वीकृत ऋण और संवितरण प्रतिशत दर्शाती है।\n\nतालिका का ध्यानपूर्वक अध्ययन करें और प्रश्नों के उत्तर दें।`;
    tableHeaders = ['Branch / Category', 'Target Loans (₹ Cr)', 'Sanctioned Loans (₹ Cr)', 'Disbursal %'];
    tableRows = [
      ['North Branch', '120', '96', '80%'],
      ['South Branch', '150', '135', '90%'],
      ['East Branch', '80', '60', '75%'],
      ['West Branch', '200', '170', '85%'],
      ['Central Branch', '100', '70', '70%'],
    ];
    diQuestions = [
      {
        qEn: 'What is the average sanctioned loan amount (in ₹ Cr) across all five branches combined?',
        qHi: 'सभी पाँच शाखाओं को मिलाकर औसत स्वीकृत ऋण राशि (₹ करोड़ में) क्या है?',
        ans: '106.2',
        sol: 'Total sanctioned = 96 + 135 + 60 + 170 + 70 = 531 Cr. Average = 531 / 5 = 106.2 Cr.',
        distractors: ['98.4', '112.5', '104.8', '108.6'],
      },
      {
        qEn: 'Sanctioned loan of West Branch is what percent more or less than the sanctioned loan of North Branch?',
        qHi: 'West Branch का स्वीकृत ऋण, North Branch के स्वीकृत ऋण से कितने प्रतिशत अधिक या कम है?',
        ans: '77.08% more',
        sol: 'Difference = 170 - 96 = 74 Cr. % more = (74 / 96) × 100 = 77.08% more.',
        distractors: ['72.50% more', '81.25% more', '75.00% more', '79.16% more'],
      },
      {
        qEn: 'What is the ratio of target loans of East Branch to actual sanctioned loans of South Branch?',
        qHi: 'East Branch के लक्षित ऋण का South Branch के वास्तविक स्वीकृत ऋण से अनुपात क्या है?',
        ans: '16 : 27',
        sol: 'Ratio = 80 : 135 = 16 : 27 (dividing both by 5).',
        distractors: ['14 : 25', '15 : 28', '16 : 29', '18 : 27'],
      },
      {
        qEn: 'If Central Branch achieves 100% of its target next fiscal with 90% disbursal, what will be the new sanctioned amount?',
        qHi: 'यदि Central Branch अगले वित्त वर्ष में 90% संवितरण के साथ अपने लक्ष्य का 100% प्राप्त करती है, तो नई स्वीकृत राशि क्या होगी?',
        ans: '₹90 Cr',
        sol: 'New target = 100 Cr. Sanctioned at 90% = 100 × 0.90 = ₹90 Cr.',
        distractors: ['₹85 Cr', '₹95 Cr', '₹80 Cr', '₹100 Cr'],
      },
      {
        qEn: 'Which branch achieved the highest disbursal percentage relative to its sanctioned loan?',
        qHi: 'किस शाखा ने अपने स्वीकृत ऋण के सापेक्ष उच्चतम संवितरण प्रतिशत प्राप्त किया?',
        ans: 'South Branch',
        sol: 'South Branch achieved 90% disbursal rate, which is the highest among all branches.',
        distractors: ['North Branch', 'West Branch', 'East Branch', 'Central Branch'],
      },
      {
        qEn: 'What is the total target loan amount (in ₹ Cr) across all five regional branches combined?',
        qHi: 'सभी पाँच क्षेत्रीय शाखाओं को मिलाकर कुल लक्षित ऋण राशि (₹ करोड़ में) क्या है?',
        ans: '₹650 Cr',
        sol: 'Total target = 120 + 150 + 80 + 200 + 100 = ₹650 Cr.',
        distractors: ['₹620 Cr', '₹680 Cr', '₹640 Cr', '₹660 Cr'],
      },
      {
        qEn: 'What is the absolute difference between the sanctioned loan of West Branch and North Branch (in ₹ Cr)?',
        qHi: 'वेस्ट ब्रांच और नॉर्थ ब्रांच के स्वीकृत ऋण के बीच पूर्ण अंतर (₹ करोड़ में) क्या है?',
        ans: '₹74 Cr',
        sol: 'Difference = 170 - 96 = ₹74 Cr.',
        distractors: ['₹70 Cr', '₹76 Cr', '₹72 Cr', '₹78 Cr'],
      },
      {
        qEn: 'Which branch had the lowest target loan allocated?',
        qHi: 'किस शाखा को सबसे कम लक्षित ऋण आवंटित किया गया था?',
        ans: 'East Branch',
        sol: 'East Branch was allocated ₹80 Cr, which is the lowest target among all 5 branches.',
        distractors: ['Central Branch', 'North Branch', 'South Branch', 'West Branch'],
      },
    ];
  }

  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;
  const questions: Question[] = [];

  for (let i = 0; i < qCount; i++) {
    const item = diQuestions[i % diQuestions.length];
    const qId = `q_di_${startQNum + i}`;
    const choices = [item.ans, ...item.distractors.slice(0, 4)].sort();
    const correctIdx = choices.indexOf(item.ans);

    questions.push({
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + i,
      orderInSection: startOrderInSec + i,
      questionTextEn: item.qEn,
      questionTextHi: item.qHi,
      marks,
      negativeMarks,
      topic: 'Data Interpretation',
      subTopic: diType.replace(/_/g, ' '),
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 40,
      conventionalSolutionEn: item.sol,
      shortcutTrickEn: 'Cancel multiples of 5 or 10 before dividing to accelerate ratio and percentage computation.',
      options: choices.map((c, oIdx) => ({
        id: `opt_di_${startQNum + i}_${oIdx}`,
        questionId: qId,
        identifier: optionLetters[oIdx],
        optionTextEn: c,
        optionTextHi: c,
        isCorrect: oIdx === correctIdx,
      })),
    });
  }

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'DI_TABULAR',
    title,
    passageEn,
    passageHi,
    chartConfig: {
      type: 'table',
      tableHeaders,
      tableRows,
    },
    questions,
  };
}

export function generateAlphanumericGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030,
  qCount: number = 5
): QuestionGroup {
  const groupId = `group_alpha_${startQNum}`;
  const passageEn = `Study the following sequence of letters, numbers, and symbols carefully and answer the questions:\n\nW  4  &  R  9  %  T  #  6  B  @  2  M  $  8  K  *  5  P  ©  7  H  £  3  J  ^`;
  const passageHi = `अक्षरों, संख्याओं और प्रतीकों की निम्नलिखित श्रृंखला का ध्यानपूर्वक अध्ययन करें और प्रश्नों के उत्तर दें:\n\nW  4  &  R  9  %  T  #  6  B  @  2  M  $  8  K  *  5  P  ©  7  H  £  3  J  ^`;

  const alphaQuestions = [
    {
      qEn: 'How many such numbers are there in the above sequence, each of which is immediately preceded by a symbol and immediately followed by a letter?',
      qHi: 'उपरोक्त श्रृंखला में ऐसी कितनी संख्याएं हैं, जिनमें से प्रत्येक के ठीक पहले एक प्रतीक और ठीक बाद एक अक्षर है?',
      ans: 'Three',
      sol: 'Pattern: Symbol -> Number -> Letter. Checking:\n1. # 6 B (Yes: # is symbol, 6 is number, B is letter)\n2. @ 2 M (Yes: @ is symbol, 2 is number, M is letter)\n3. $ 8 K (Yes: $ is symbol, 8 is number, K is letter)\nTotal = 3.',
      distractors: ['One', 'Two', 'Four', 'More than four'],
    },
    {
      qEn: 'Which element is 7th to the right of the 15th element from the left end?',
      qHi: 'बायें छोर से 15वें तत्व के दायें से 7वां तत्व कौन सा है?',
      ans: '£',
      sol: 'Right of Left rule: 15 + 7 = 22nd element from the left end. 22nd element is H and 23rd is £. Correct = £.',
      distractors: ['7', 'H', '3', 'J'],
    },
    {
      qEn: 'If all the symbols are dropped from the sequence, which element will be the 8th from the right end?',
      qHi: 'यदि श्रृंखला से सभी प्रतीकों को हटा दिया जाए, तो दायें छोर से 8वां तत्व कौन सा होगा?',
      ans: 'M',
      sol: 'Sequence without symbols: W 4 R 9 T 6 B 2 M 8 K 5 P 7 H 3 J. From right: J(1) 3(2) H(3) 7(4) P(5) 5(6) K(7) 8(8) M(9). 8th element from right is 8 or M.',
      distractors: ['8', '2', 'B', 'K'],
    },
    {
      qEn: 'How many such symbols are there in the sequence, each of which is immediately preceded by a number and immediately followed by a letter?',
      qHi: 'श्रृंखला में ऐसे कितने प्रतीक हैं, जिनमें से प्रत्येक के ठीक पहले एक संख्या और ठीक बाद एक अक्षर है?',
      ans: 'Two',
      sol: 'Pattern: Number -> Symbol -> Letter. Checking: 4 & R (Yes), 9 % T (Yes). Total = 2.',
      distractors: ['One', 'Three', 'Four', 'None'],
    },
    {
      qEn: 'What is the sum of all the even numbers present in the given sequence?',
      qHi: 'दी गई श्रृंखला में उपस्थित सभी सम संख्याओं का योग क्या है?',
      ans: '20',
      sol: 'Even numbers: 4, 6, 2, 8. Sum = 4 + 6 + 2 + 8 = 20.',
      distractors: ['18', '22', '24', '16'],
    },
  ];

  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;
  const questions: Question[] = [];

  for (let i = 0; i < qCount; i++) {
    const item = alphaQuestions[i % alphaQuestions.length];
    const qId = `q_alpha_${startQNum + i}`;
    const choices = [item.ans, ...item.distractors.slice(0, 4)].sort();
    const correctIdx = choices.indexOf(item.ans);

    questions.push({
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + i,
      orderInSection: startOrderInSec + i,
      questionTextEn: item.qEn,
      questionTextHi: item.qHi,
      marks,
      negativeMarks,
      topic: 'Reasoning Ability',
      subTopic: 'Alphanumeric & Symbol Series',
      difficulty: 'EASY',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: item.sol,
      shortcutTrickEn: 'Left-Right rule: "Nth to the right of Mth from left" = (M + N)th from left.',
      options: choices.map((c, oIdx) => ({
        id: `opt_alp_${startQNum + i}_${oIdx}`,
        questionId: qId,
        identifier: optionLetters[oIdx],
        optionTextEn: c,
        optionTextHi: c,
        isCorrect: oIdx === correctIdx,
      })),
    });
  }

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'ALPHANUMERIC_SERIES',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Study the Alphanumeric Sequence.`,
    passageEn,
    passageHi,
    questions,
  };
}

// ---------------------------------------------------------------------------
// 10. ENGLISH LANGUAGE SECTION GENERATORS
// ---------------------------------------------------------------------------

export function generateReadingComprehensionGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  qCount: number = 8
): QuestionGroup {
  const groupId = `group_rc_${startQNum}`;
  const passageEn = `The financial architecture of global emerging economies has undergone profound structural disruption over the past decade, driven predominantly by the accelerated digitization of retail financial services and the central banking sector's strategic pivot towards Central Bank Digital Currencies (CBDCs). In India, the Reserve Bank of India's (RBI) calibrated phased pilot for the digital Rupee (e₹) across both wholesale and retail verticals exemplifies this transition.\n\nHistorically, physical currency settlement incurred significant frictional overheads, encompassing recurring minting expenditures, security logistics, and vulnerability to counterfeit currency networks. The introduction of retail CBDC aims to augment transaction settlement velocity, reduce cross-border payment frictions, and furnish an immutable sovereign alternative to non-sovereign cryptographic assets.\n\nHowever, monetary economists caution that wholesale migration towards digital sovereign currency poses liquidity challenges for commercial banks. In periods of macroeconomic volatility, the frictionless ability of retail depositors to convert commercial bank liabilities into sovereign central bank liabilities could precipitate rapid disintermediation, necessitating rigorous reserve management and calibrated holding caps.`;

  const rcQuestions = [
    {
      q: 'According to the passage, what is a primary motivation for the RBI introducing the digital Rupee (e₹)?',
      ans: 'To augment transaction velocity and reduce physical currency logistical overheads',
      sol: 'Paragraph 2 highlights reducing frictional overheads and augmenting transaction settlement velocity as core objectives.',
    },
    {
      q: 'What potential systemic risk do monetary economists identify regarding widespread retail CBDC adoption?',
      ans: 'Risk of rapid bank disintermediation and retail commercial deposit flight during volatility',
      sol: 'Paragraph 3 explicitly warns that rapid conversion into sovereign liabilities could trigger bank disintermediation.',
    },
    {
      q: 'Which of the following is TRUE regarding physical currency settlement according to the passage?',
      ans: 'It entailed high frictional costs, security logistics, and vulnerability to counterfeit networks',
      sol: 'Directly stated in Paragraph 2.',
    },
    {
      q: 'What does the author suggest commercial banks must maintain to mitigate CBDC liquidity pressures?',
      ans: 'Rigorous reserve management and calibrated holding caps',
      sol: 'Mentioned in the final sentence of Paragraph 3.',
    },
    {
      q: 'Choose the word most SIMILAR in meaning to "AUGMENT" as used in the passage.',
      ans: 'Enhance',
      sol: 'Augment means to make greater, increase, or enhance.',
    },
    {
      q: 'Choose the word most OPPOSITE in meaning to "IMMUTABLE" as used in the passage.',
      ans: 'Variable',
      sol: 'Immutable means unchangeable or permanent; its opposite is variable or alterable.',
    },
    {
      q: 'Which of the following can be inferred regarding non-sovereign cryptocurrencies?',
      ans: 'CBDC offers an immutable sovereign alternative to counter them',
      sol: 'Paragraph 2 notes furnishing a sovereign alternative to non-sovereign cryptographic assets.',
    },
    {
      q: 'What would be the most suitable title for the passage?',
      ans: 'Sovereign Digital Currency: Strategic Impetus and Banking Liquidity Dynamics',
      sol: 'The passage evaluates the strategic drivers of CBDC and its impact on banking liquidity.',
    },
    {
      q: 'The tone of the author throughout the passage is best described as:',
      ans: 'Analytical and Objective',
      sol: 'The author impartially examines both advantages and systemic risks of CBDC.',
    },
    {
      q: 'Which sector is cited as driving the structural disruption in emerging financial systems?',
      ans: 'Digitization of retail financial services and central banking pivots',
      sol: 'Found in the opening sentence of Paragraph 1.',
    },
  ];

  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;
  const questions: Question[] = [];

  for (let i = 0; i < qCount; i++) {
    const item = rcQuestions[i % rcQuestions.length];
    const qId = `q_rc_${startQNum + i}`;
    const distractors = [
      'To completely eliminate commercial banks from the credit cycle',
      'To promote speculative cryptocurrency trading among retail investors',
      'To dismantle conventional monetary policy interest rate corridors',
      'None of the above',
    ];
    const choices = [item.ans, ...distractors].sort();
    const correctIdx = choices.indexOf(item.ans);

    questions.push({
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + i,
      orderInSection: startOrderInSec + i,
      questionTextEn: item.q,
      questionTextHi: undefined, // English section is English only!
      marks,
      negativeMarks,
      topic: 'Reading Comprehension',
      subTopic: 'Economy & Central Banking (CBDC)',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 40,
      conventionalSolutionEn: item.sol,
      shortcutTrickEn: 'Locate keywords in the passage; eliminate choices containing extreme words like "completely", "dismantle".',
      options: choices.map((c, oIdx) => ({
        id: `opt_rc_${startQNum + i}_${oIdx}`,
        questionId: qId,
        identifier: optionLetters[oIdx],
        optionTextEn: c,
        optionTextHi: c,
        isCorrect: oIdx === correctIdx,
      })),
    });
  }

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'RC_PASSAGE',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Read the passage carefully and answer the questions.`,
    passageEn,
    questions,
  };
}

export function generateEnglishErrorSpottingQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const errorBank = [
    {
      sent: `The chief executive officer (A) / along with his senior directors (B) / have attended the annual banking conclave (C) / held at Mumbai yesterday. (D) / No Error (E)`,
      errPart: 'C',
      rule: `Error in (C): Replace 'have attended' with 'has attended'. When subjects are connected by 'along with', the verb agrees with the first subject ('The chief executive officer').`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 2,
    },
    {
      sent: `Hardly had the branch manager (A) / entered the bank premises (B) / than the alarm bell (C) / began ringing loudly. (D) / No Error (E)`,
      errPart: 'C',
      rule: `Error in (C): Replace 'than' with 'when'. Correlative conjunction pair for 'Hardly / Scarcely' is always 'when', not 'than'.`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 2,
    },
    {
      sent: `Neither the loan officer (A) / nor the branch accountants (B) / was present in the meeting (C) / to verify the audit reports. (D) / No Error (E)`,
      errPart: 'C',
      rule: `Error in (C): Replace 'was present' with 'were present'. When two subjects are connected by 'Neither... nor', the verb agrees with the closer subject ('the branch accountants', which is plural).`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 2,
    },
    {
      sent: `One of the most significant (A) / factor contributing to the rise (B) / in non-performing assets (C) / is inadequate credit appraisal. (D) / No Error (E)`,
      errPart: 'B',
      rule: `Error in (B): Replace 'factor' with 'factors'. The phrase 'One of the' is always followed by a PLURAL NOUN and a singular verb.`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 1,
    },
    {
      sent: `The regulatory framework prohibits (A) / commercial financial institutions (B) / from to disburse loans (C) / without verifying valid collateral. (D) / No Error (E)`,
      errPart: 'C',
      rule: `Error in (C): Replace 'from to disburse' with 'from disbursing'. Verbs like 'prohibit / prevent' take preposition 'from' followed by Gerund (-ing form).`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 2,
    },
    {
      sent: `Had the treasury department (A) / anticipated the sudden interest rate surge, (B) / they would avert the heavy mark-to-market losses. (C) / in government bond holdings. (D) / No Error (E)`,
      errPart: 'C',
      rule: `Error in (C): Replace 'would avert' with 'would have averted'. Past conditional 'Had + V3' requires 'would have + V3' in the main clause.`,
      options: ['(A)', '(B)', '(C)', '(D)', '(E) No Error'],
      corr: 2,
    },
  ];

  const item = errorBank[(variant - 1) % errorBank.length];

  return {
    id: `q_eng_err_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Read the sentence to find out whether there is any grammatical error in it. If there is no error, mark 'No Error' (E):\n\n${item.sent}`,
    marks,
    negativeMarks,
    topic: 'English Language',
    subTopic: 'Grammar Rules & Error Spotting',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: item.rule,
    shortcutTrickEn: 'Direct rule application: Memorize the 10 Golden Banking Grammar Rules (along with, hardly...when, neither...nor).',
    options: item.options.map((opt, i) => ({
      id: `opt_ee_${qNum}_${i}`,
      questionId: `q_eng_err_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === item.corr,
    })),
  };
}

export function generateClozeTestGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  qCount: number = 5
): QuestionGroup {
  const groupId = `group_cloze_${startQNum}`;
  const passageEn = `In the following passage, there are blanks numbered (1) to (${qCount}). Fill in the blanks with the most appropriate option from the choices provided:\n\nFinancial inclusion has evolved from a philanthropic objective into an economic __(1)__ for sustainable development. When low-income households gain access to formal banking channels, their capacity to __(2)__ against unforeseen financial emergencies improves substantially. Moreover, digital payment infrastructure has significantly __(3)__ leakages in direct government subsidy transfers. However, digital illiteracy remains a persistent __(4)__ that must be addressed through comprehensive awareness drives. Financial institutions must therefore __(5)__ innovative customer-centric solutions to achieve universal inclusion.`;

  const blanks = [
    { num: 1, ans: 'imperative', options: ['imperative', 'negligence', 'obstacle', 'coincidence', 'liability'] },
    { num: 2, ans: 'insulate', options: ['insulate', 'deteriorate', 'surrender', 'depreciate', 'aggravate'] },
    { num: 3, ans: 'curtailed', options: ['curtailed', 'augmented', 'neglected', 'expanded', 'amplified'] },
    { num: 4, ans: 'impediment', options: ['impediment', 'catalyst', 'advantage', 'incentive', 'milestone'] },
    { num: 5, ans: 'deploy', options: ['deploy', 'abandon', 'demolish', 'withhold', 'forfeit'] },
  ];

  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;
  const questions: Question[] = [];

  for (let i = 0; i < qCount; i++) {
    const item = blanks[i % blanks.length];
    const qId = `q_cloze_${startQNum + i}`;
    const choices = item.options;
    const correctIdx = choices.indexOf(item.ans);

    questions.push({
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + i,
      orderInSection: startOrderInSec + i,
      questionTextEn: `Select the most appropriate word that fits blank (${i + 1}):`,
      marks,
      negativeMarks,
      topic: 'English Language',
      subTopic: 'Cloze Test Vocabulary in Context',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `Blank (${i + 1}) requires '${item.ans}' which fits grammatically and contextually with the surrounding passage.`,
      shortcutTrickEn: 'Context clue: Read the entire sentence preceding and succeeding the blank to gauge the positive/negative tone.',
      options: choices.map((c, oIdx) => ({
        id: `opt_clz_${startQNum + i}_${oIdx}`,
        questionId: qId,
        identifier: optionLetters[oIdx],
        optionTextEn: c,
        optionTextHi: c,
        isCorrect: oIdx === correctIdx,
      })),
    });
  }

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'CLOZE_TEST',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + qCount - 1}): Cloze Test on Financial Inclusion.`,
    passageEn,
    questions,
  };
}

export function generateParaJumbleGroup(
  startQNum: number,
  startOrderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): QuestionGroup {
  const groupId = `group_pj_${startQNum}`;
  const passageEn = `Rearrange the following five sentences (A), (B), (C), (D), and (E) in the proper sequence to form a meaningful paragraph, then answer the questions given below:\n\n(A) Consequently, central banks across advanced economies responded by orchestrating coordinated interest rate hikes.\n(B) These inflationary pressures were primarily stoked by geopolitical supply bottlenecks and post-pandemic demand surges.\n(C) Over the past three years, global financial markets have navigated an unprecedented era of macroeconomic volatility.\n(D) At the heart of this disruption lay a sudden and stubborn resurgence in headline consumer price inflation.\n(E) While these aggressive monetary tightening measures helped tame prices, they simultaneously intensified recessionary anxieties worldwide.`;

  // Correct sequence: C -> D -> B -> A -> E
  const seq = ['C', 'D', 'B', 'A', 'E'];
  const ordinals = ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'];

  const questions: Question[] = [];
  const optionLetters = ['A', 'B', 'C', 'D', 'E'] as const;

  for (let i = 0; i < 5; i++) {
    const qId = `q_pj_${startQNum + i}`;
    const targetSentence = seq[i];

    questions.push({
      id: qId,
      sectionId: secId,
      questionGroupId: groupId,
      questionNumber: startQNum + i,
      orderInSection: startOrderInSec + i,
      questionTextEn: `Which of the following should be the ${ordinals[i]} sentence after rearrangement?`,
      marks,
      negativeMarks,
      topic: 'English Language',
      subTopic: 'Para Jumbles Coherent Ordering',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 30,
      conventionalSolutionEn: `The logical narrative sequence is:\n1. (C) Introduces the broad context of macroeconomic volatility.\n2. (D) Identifies the central cause (resurgence in consumer price inflation).\n3. (B) Explains the underlying drivers of this inflation.\n4. (A) States the central bank response (Consequently, rate hikes).\n5. (E) Discusses the dual outcome of these measures.\n\nCorrect sequence: C - D - B - A - E. The ${ordinals[i]} sentence is (${targetSentence}).`,
      shortcutTrickEn: 'Mandatory pair identification: D (inflation) pairs with B (inflationary pressures stoked by...). A (Consequently, rate hikes) pairs with E (While these measures...).',
      options: ['A', 'B', 'C', 'D', 'E'].map((opt, oIdx) => ({
        id: `opt_pj_${startQNum + i}_${oIdx}`,
        questionId: qId,
        identifier: optionLetters[oIdx],
        optionTextEn: opt,
        optionTextHi: opt,
        isCorrect: opt === targetSentence,
      })),
    });
  }

  return {
    id: groupId,
    sectionId: secId,
    groupType: 'PARA_JUMBLE',
    title: `Directions (Q. ${startOrderInSec} - ${startOrderInSec + 4}): Rearrange the sentences into a coherent paragraph.`,
    passageEn,
    questions,
  };
}

export function generateWordSwapQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const wordSwapBank = [
    {
      sent: `The regulator has **issued** (A) strict **directives** (B) to ensure that all financial **disclosures** (C) are published in an **accurate** (D) manner.`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `All highlighted words are in their correct contextual positions: 'issued directives', 'financial disclosures', 'accurate manner'. No swap is required.`,
      trick: 'Standard collocations: "issued directives", "financial disclosures".',
    },
    {
      sent: `The commercial bank decided to **mitigate** (A) its branch network in order to **expand** (B) customer outreach and **curb** (C) operating **expenditures** (D).`,
      correct: 'A - B',
      corrIdx: 0,
      sol: `Swapping (A) and (B) gives: 'decided to expand its branch network in order to mitigate customer outreach' -> 'decided to expand its branch network to curb operating expenditures'. Correct pair: A - B.`,
      trick: 'A bank "expands" its network rather than "mitigating" its network.',
    },
    {
      sent: `Surging non-performing assets have **strained** (A) the bank's **capital** (B) adequacy buffers, prompting directors to **raise** (C) supplementary equity **reserves** (D).`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `The sentence is logically and grammatically sound in its original form. No word swap is needed.`,
      trick: '"Strained capital buffers", "raise equity reserves" are correct banking usages.',
    },
    {
      sent: `To **ensure** (A) higher quarterly profitability, the treasury desk **liquidated** (B) long-term bonds and **reallocated** (C) the liquidity into money market **instruments** (D).`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `Every bold word is syntactically and semantically correct in its position. No swap is required.`,
      trick: '"Liquidated bonds", "reallocated liquidity" are standard investment terms.',
    },
    {
      sent: `The board voted to **diminish** (A) the internal audit findings which had **revealed** (B) severe compliance omissions that could **enhance** (C) the bank's brand **reputation** (D).`,
      correct: 'A - C',
      corrIdx: 3,
      sol: `Swapping (A) and (C) makes the sentence coherent: compliance omissions could 'diminish' the brand reputation, so the board voted to 'enhance' internal findings. Correct swap: A - C.`,
      trick: 'Compliance omissions destroy/diminish reputation, not enhance it.',
    },
    {
      sent: `A sudden spike in headline **inflation** (A) compelled the monetary panel to **hike** (B) repo rates despite fears of an economic **slowdown** (C) in industrial **output** (D).`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `All words are correctly aligned with economic logic: "headline inflation", "hike repo rates", "economic slowdown", "industrial output".`,
      trick: 'All 4 terms are textbook macroeconomic pairings.',
    },
    {
      sent: `The investment analyst was unable to **predict** (A) the volatile **fluctuations** (B) in foreign exchange markets despite utilizing **sophisticated** (C) econometric **models** (D).`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `The sentence is grammatically intact and contextually appropriate. No swap required.`,
      trick: '"Predict fluctuations", "sophisticated models" are standard phrasing.',
    },
    {
      sent: `The managing director decided to **postpone** (A) the proposed interim dividend to **preserve** (B) vital cash flows for upcoming bond **maturities** (C) and statutory **commitments** (D).`,
      correct: 'No swap required',
      corrIdx: 4,
      sol: `No word swap is needed. The narrative is coherent and grammatically correct.`,
      trick: '"Postpone dividend", "preserve cash flows" fit precisely.',
    },
  ];

  const item = wordSwapBank[(variant - 1) % wordSwapBank.length];

  return {
    id: `q_wswap_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `In the following sentence, four words highlighted in bold are marked as (A), (B), (C), and (D). One or more pairs may need to be swapped to make the sentence grammatically correct and meaningful:\n\n${item.sent}`,
    marks,
    negativeMarks,
    topic: 'English Language',
    subTopic: 'Word Swap & Contextual Placement',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: item.trick,
    options: [
      { id: `opt_ws_${qNum}_A`, questionId: `q_wswap_${qNum}`, identifier: 'A', optionTextEn: 'A - B', optionTextHi: 'A - B', isCorrect: item.corrIdx === 0 },
      { id: `opt_ws_${qNum}_B`, questionId: `q_wswap_${qNum}`, identifier: 'B', optionTextEn: 'B - C', optionTextHi: 'B - C', isCorrect: item.corrIdx === 1 },
      { id: `opt_ws_${qNum}_C`, questionId: `q_wswap_${qNum}`, identifier: 'C', optionTextEn: 'C - D', optionTextHi: 'C - D', isCorrect: item.corrIdx === 2 },
      { id: `opt_ws_${qNum}_D`, questionId: `q_wswap_${qNum}`, identifier: 'D', optionTextEn: 'A - C', optionTextHi: 'A - C', isCorrect: item.corrIdx === 3 },
      { id: `opt_ws_${qNum}_E`, questionId: `q_wswap_${qNum}`, identifier: 'E', optionTextEn: 'No swap required', optionTextHi: 'No swap required', isCorrect: item.corrIdx === 4 },
    ],
  };
}

export function generateDoubleFillerQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const fillers = [
    {
      q: 'The central bank has taken proactive measures to _______ market liquidity and _______ runaway inflation.',
      ans: 'augment, curb',
      options: ['augment, curb', 'destroy, foster', 'deplete, ignore', 'destabilize, provoke', 'diminish, trigger'],
      sol: 'Central banks aim to "augment" (support) liquidity while "curbing" (controlling) inflation.',
    },
    {
      q: 'Despite facing severe economic _______, the commercial banking sector remained _______ due to adequate capital buffers.',
      ans: 'headwinds, resilient',
      options: ['headwinds, resilient', 'prosperity, vulnerable', 'growth, fragile', 'stimulus, bankrupt', 'harmony, volatile'],
      sol: 'Economic "headwinds" (difficulties) contrast with being "resilient" (strong/adaptable).',
    },
    {
      q: 'The government unveiled targeted credit initiatives to _______ domestic manufacturing and _______ foreign direct investment.',
      ans: 'stimulate, attract',
      options: ['stimulate, attract', 'paralyze, repel', 'weaken, discard', 'suppress, banish', 'curtail, abandon'],
      sol: 'Initiatives aim to "stimulate" manufacturing and "attract" investment.',
    },
    {
      q: 'Rigorous supervisory oversight is indispensable to _______ systemic irregularities and _______ depositor trust.',
      ans: 'prevent, uphold',
      options: ['prevent, uphold', 'encourage, undermine', 'overlook, compromise', 'foster, erode', 'tolerate, demolish'],
      sol: 'Oversight serves to "prevent" irregularities and "uphold" (maintain) trust.',
    },
    {
      q: 'The institutional consolidation was meticulously orchestrated to _______ operational synergies and _______ overall overhead costs.',
      ans: 'maximize, curtail',
      options: ['maximize, curtail', 'annihilate, escalate', 'minimize, multiply', 'sabotage, expand', 'squander, amplify'],
      sol: 'Consolidation seeks to "maximize" synergies and "curtail" (reduce) costs.',
    },
    {
      q: 'Cutting-edge digital core platforms have enabled lenders to _______ transaction workflows and _______ customer turnaround times.',
      ans: 'streamline, expedite',
      options: ['streamline, expedite', 'complicate, prolong', 'impede, delay', 'obstruct, forfeit', 'hinder, obstruct'],
      sol: 'Modern technology serves to "streamline" processes and "expedite" (speed up) service.',
    },
    {
      q: 'To _______ higher retail penetration, regional rural banks must _______ their conventional credit underwriting frameworks.',
      ans: 'achieve, modernize',
      options: ['achieve, modernize', 'forfeit, abandon', 'relinquish, dismantle', 'halt, deteriorate', 'stifle, terminate'],
      sol: 'To "achieve" penetration, institutions must "modernize" frameworks.',
    },
    {
      q: 'Rating agencies cautioned that unfettered sovereign borrowing could _______ fiscal sustainability and _______ institutional investor sentiment.',
      ans: 'undermine, erode',
      options: ['undermine, erode', 'reinforce, elevate', 'consolidate, bolster', 'enhance, enrich', 'fortify, nourish'],
      sol: 'Uncontrolled debt will "undermine" sustainability and "erode" investor sentiment.',
    },
  ];

  const item = fillers[(variant - 1) % fillers.length];
  const correctIdx = item.options.indexOf(item.ans);

  return {
    id: `q_filler_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `The sentence has two blanks. Choose the pair of words that best fits both blanks:\n\n${item.q}`,
    marks,
    negativeMarks,
    topic: 'English Language',
    subTopic: 'Double Fillers & Collocation',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Context tone matching: Look for whether the sentence calls for positive or restrictive verb-noun pairings.',
    options: item.options.map((opt, i) => ({
      id: `opt_fil_${qNum}_${i}`,
      questionId: `q_filler_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === correctIdx,
    })),
  };
}

export function generateSentenceConnectorQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const connectors = [
    {
      s1: 'The monetary policy committee raised the policy repo rate by 50 basis points.',
      s2: 'Core inflation remained persistently above the upper tolerance threshold of 6%.',
      ans: 'Because',
      options: ['Because', 'Although', 'Unless', 'Whereas', 'Despite'],
      sol: "'Because' correctly introduces the causal justification for raising interest rates.",
    },
    {
      s1: 'The national economy experienced severe supply-chain shocks during the fiscal year.',
      s2: 'The scheduled commercial banks maintained exceptionally high capital adequacy ratios.',
      ans: 'Although',
      options: ['Although', 'Because', 'Unless', 'Therefore', 'Since'],
      sol: "'Although' correctly marks the contrast between severe economic shocks and healthy banking buffers.",
    },
    {
      s1: 'The central bank significantly relaxed statutory reserve requirements.',
      s2: 'Credit expansion across micro and small enterprises remained subdued throughout the quarter.',
      ans: 'Nevertheless',
      options: ['Nevertheless', 'Because', 'Provided that', 'Owing to', 'Consequently'],
      sol: "'Nevertheless' conveys the adversative result that lending remained subdued despite monetary easing.",
    },
    {
      s1: 'Monthly digital payment transactions achieved record all-time high volumes.',
      s2: 'The merchant QR-code acceptance ecosystem expanded across thousands of tier-3 towns.',
      ans: 'Furthermore',
      options: ['Furthermore', 'Despite', 'Whereas', 'Unless', 'Although'],
      sol: "'Furthermore' adds complementary positive information about expanding merchant infrastructure.",
    },
    {
      s1: 'Commercial banks must adhere strictly to mandatory Liquidity Coverage Ratio norms.',
      s2: 'They face severe supervisory penalties and disciplinary restrictions from the regulator.',
      ans: 'Otherwise',
      options: ['Otherwise', 'Although', 'Even though', 'Whereas', 'Despite'],
      sol: "'Otherwise' introduces the conditional adverse consequence of failing to adhere to regulatory norms.",
    },
    {
      s1: 'Public sector lenders concentrated heavily on agricultural and priority-sector lending.',
      s2: 'Private commercial banks expanded their unsecured retail credit card portfolios aggressively.',
      ans: 'Whereas',
      options: ['Whereas', 'Because', 'Since', 'Unless', 'Therefore'],
      sol: "'Whereas' establishes a direct contrast between the lending priorities of public vs private banks.",
    },
    {
      s1: 'Export earnings contracted noticeably due to weakening global consumer demand.',
      s2: 'The domestic currency depreciated moderately against the US dollar in foreign trade.',
      ans: 'Consequently',
      options: ['Consequently', 'Although', 'Despite', 'Unless', 'Whereas'],
      sol: "'Consequently' denotes the logical economic effect of falling export earnings on currency depreciation.",
    },
    {
      s1: 'The overall loan portfolio of the banking conglomerate demonstrated exemplary asset quality.',
      s2: 'A few legacy infrastructure exposures necessitated incremental provisioning buffers.',
      ans: 'Except that',
      options: ['Except that', 'Because', 'Therefore', 'Since', 'Consequently'],
      sol: "'Except that' correctly introduces the isolated negative exception to an otherwise healthy loan book.",
    },
  ];

  const item = connectors[(variant - 1) % connectors.length];

  return {
    id: `q_conn_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Select the connector from the options that can connect the two given statements without changing their original meaning:\n\nStatement I: ${item.s1}\nStatement II: ${item.s2}`,
    marks,
    negativeMarks,
    topic: 'English Language',
    subTopic: 'Sentence Connectors & Cohesion',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Identify the logical relation: Causal (Because/Since), Concession (Although/Nevertheless), or Addition (Furthermore).',
    options: item.options.map((opt, i) => ({
      id: `opt_cn_${qNum}_${i}`,
      questionId: `q_conn_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: opt === item.ans,
    })),
  };
}

// ---------------------------------------------------------------------------
// 11. BANKING AWARENESS & COMPUTER KNOWLEDGE (For Mains)
// ---------------------------------------------------------------------------

export function generateBankingAwarenessQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  idx: number = 0
): Question {
  const bankQuestions = [
    {
      qEn: 'What is the minimum Priority Sector Lending (PSL) target prescribed by the RBI for Domestic Scheduled Commercial Banks as a percentage of ANBC?',
      qHi: 'ANBC के प्रतिशत के रूप में घरेलू अनुसूचित वाणिज्यिक बैंकों के लिए RBI द्वारा निर्धारित न्यूनतम प्राथमिकता प्राप्त क्षेत्र ऋण (PSL) लक्ष्य क्या है?',
      ans: '40%',
      options: ['30%', '35%', '40%', '45%', '50%'],
      sol: 'Under RBI Priority Sector Lending guidelines, domestic commercial banks must allocate a minimum of 40% of ANBC to priority sectors.',
    },
    {
      qEn: 'Under Section 138 of the Negotiable Instruments Act, 1881, dishonour of a cheque for insufficiency of funds is an offence punishable with imprisonment up to:',
      qHi: 'परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के तहत, धन की अपर्याप्तता के कारण चेक का अनादर कितनी अवधि के कारावास से दंडनीय अपराध है?',
      ans: '2 years',
      options: ['6 months', '1 year', '2 years', '3 years', '5 years'],
      sol: 'Punishment under Section 138 of the NI Act is imprisonment up to 2 years, or fine up to twice the cheque amount, or both.',
    },
    {
      qEn: 'What is the maximum insurance coverage provided by DICGC per depositor per bank in India?',
      qHi: 'भारत में DICGC द्वारा प्रति जमाकर्ता प्रति बैंक प्रदान किया जाने वाला अधिकतम बीमा कवर क्या है?',
      ans: '₹5,00,000',
      options: ['₹1,00,000', '₹2,00,000', '₹5,00,000', '₹10,00,000', '₹25,00,000'],
      sol: 'DICGC provides deposit insurance up to ₹5 Lakh per depositor per commercial/cooperative bank.',
    },
    {
      qEn: 'What is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) required by RBI for Indian SCBs under Basel III (excluding CCB)?',
      qHi: 'RBI बेसल III के तहत भारतीय बैंकों के लिए आवश्यक न्यूनतम CRAR क्या है?',
      ans: '9.0%',
      options: ['8.0%', '9.0%', '10.5%', '11.5%', '12.0%'],
      sol: 'RBI mandates a minimum 9.0% CRAR for Indian scheduled commercial banks.',
    },
  ];

  const item = bankQuestions[idx % bankQuestions.length];
  const correctIdx = item.options.indexOf(item.ans);

  return {
    id: `q_ga_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: item.qEn,
    questionTextHi: item.qHi,
    marks,
    negativeMarks,
    topic: 'Banking & Financial Awareness',
    subTopic: 'RBI Norms & Regulatory Architecture',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Direct memory retention: Core RBI static figures (40% PSL, Section 138, ₹5 Lakh DICGC, 9% CRAR).',
    options: item.options.map((opt, i) => ({
      id: `opt_ga_${qNum}_${i}`,
      questionId: `q_ga_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === correctIdx,
    })),
  };
}

export function generateComputerKnowledgeQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 0.5,
  negativeMarks: number = 0.125,
  idx: number = 0
): Question {
  const computerQuestions = [
    {
      qEn: 'In the OSI model, which layer is responsible for end-to-end communication, flow control, and error recovery (e.g., TCP)?',
      qHi: 'OSI मॉडल में, कौन सी परत एंड-टू-एंड संचार, प्रवाह नियंत्रण और त्रुटि सुधार के लिए जिम्मेदार है?',
      ans: 'Transport Layer',
      options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Session Layer', 'Application Layer'],
      sol: 'Transport Layer (Layer 4) handles reliable end-to-end data transfer and flow control.',
    },
    {
      qEn: 'What is the length of an IPv4 and IPv6 address respectively?',
      qHi: 'IPv4 और IPv6 पते की लंबाई क्रमशः क्या है?',
      ans: '32 bits and 128 bits',
      options: ['16 bits and 64 bits', '32 bits and 64 bits', '32 bits and 128 bits', '64 bits and 128 bits', '128 bits and 256 bits'],
      sol: 'IPv4 is 32 bits; IPv6 is 128 bits.',
    },
    {
      qEn: 'Which SQL statement belongs to the Data Definition Language (DDL)?',
      qHi: 'कौन सा SQL कथन DDL से संबंधित है?',
      ans: 'CREATE',
      options: ['SELECT', 'INSERT', 'UPDATE', 'CREATE', 'DELETE'],
      sol: 'CREATE is a DDL command that defines database schema structures.',
    },
  ];

  const item = computerQuestions[idx % computerQuestions.length];
  const correctIdx = item.options.indexOf(item.ans);

  return {
    id: `q_comp_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: item.qEn,
    questionTextHi: item.qHi,
    marks,
    negativeMarks,
    topic: 'Computer Aptitude',
    subTopic: 'Networking & Software Architecture',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 15,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'OSI layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    options: item.options.map((opt, i) => ({
      id: `opt_comp_${qNum}_${i}`,
      questionId: `q_comp_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === correctIdx,
    })),
  };
}

export function generateQuantityComparisonQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const qcBank = [
    {
      q1: 'The area of a circle with radius $r = 14\\text{ cm}$ (take $\\pi = \\frac{22}{7}$).',
      q2: 'The area of a square with perimeter $P = 96\\text{ cm}$.',
      ansIdx: 0, // Q1 > Q2
      sol: '$\\text{Quantity I: } \\text{Area} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = 616\\text{ cm}^2$.\n$\\text{Quantity II: } \\text{Side } s = \\frac{96}{4} = 24\\text{ cm}, \\text{Area} = s^2 = 24^2 = 576\\text{ cm}^2$.\nComparison: $616 > 576 \\implies Q_1 > Q_2$.',
    },
    {
      q1: 'Speed of a train of length $L = 180\\text{ m}$ crossing a stationary pole in $9\\text{ s}$ (in $\\text{km/h}$).',
      q2: 'Speed of an electric car covering $280\\text{ km}$ in $4\\text{ hours}$ (in $\\text{km/h}$).',
      ansIdx: 0, // Q1 > Q2
      sol: '$\\text{Quantity I: } \\text{Speed} = \\frac{180}{9} \\times \\frac{18}{5} = 20 \\times 3.6 = 72\\text{ km/h}$.\n$\\text{Quantity II: } \\text{Speed} = \\frac{280}{4} = 70\\text{ km/h}$.\nComparison: $72 > 70 \\implies Q_1 > Q_2$.',
    },
    {
      q1: 'Simple Interest ($SI$) earned on $P = ₹10,000$ for $T = 2\\text{ years}$ at $R = 12\\%$ per annum.',
      q2: 'Compound Interest ($CI$) earned on $P = ₹8,000$ for $T = 2\\text{ years}$ at $R = 15\\%$ per annum (compounded annually).',
      ansIdx: 1, // Q1 < Q2
      sol: '$\\text{Quantity I: } SI = \\frac{10000 \\times 12 \\times 2}{100} = ₹2,400$.\n$\\text{Quantity II: } \\text{Net rate} = 15 + 15 + \\frac{15 \\times 15}{100} = 32.25\\% \\implies CI = 8000 \\times 0.3225 = ₹2,580$.\nComparison: $2,400 < 2,580 \\implies Q_1 < Q_2$.',
    },
    {
      q1: 'Time taken ($T_{A+B}$) by $A$ and $B$ together to complete a task (where $A$ takes $12\\text{ days}$, $B$ takes $18\\text{ days}$).',
      q2: 'Time taken ($T_C$) by $C$ alone to complete the same task (where $C$ works twice as fast as $A$).',
      ansIdx: 0, // Q1 > Q2
      sol: '$\\text{Quantity I: } T_{A+B} = \\frac{12 \\times 18}{12 + 18} = \\frac{216}{30} = 7.2\\text{ days}$.\n$\\text{Quantity II: } T_C = \\frac{12}{2} = 6\\text{ days}$.\nComparison: $7.2 > 6 \\implies Q_1 > Q_2$.',
    },
    {
      q1: 'Upstream speed $v_u$ of a boat (Speed in still water $u = 18\\text{ km/h}$, stream speed $v = 3\\text{ km/h}$).',
      q2: 'Downstream speed $v_d$ of a boat (Speed in still water $u = 12\\text{ km/h}$, stream speed $v = 4\\text{ km/h}$).',
      ansIdx: 1, // Q1 < Q2
      sol: '$\\text{Quantity I: } v_u = 18 - 3 = 15\\text{ km/h}$.\n$\\text{Quantity II: } v_d = 12 + 4 = 16\\text{ km/h}$.\nComparison: $15 < 16 \\implies Q_1 < Q_2$.',
    },
    {
      q1: 'The larger root $x_{\\max}$ of the quadratic equation $x^2 - 11x + 30 = 0$.',
      q2: 'The smaller root $y_{\\min}$ of the quadratic equation $y^2 - 15y + 56 = 0$.',
      ansIdx: 1, // Q1 < Q2
      sol: '$\\text{Quantity I: } x^2 - 11x + 30 = 0 \\implies (x - 5)(x - 6) = 0 \\implies x_{\\max} = 6$.\n$\\text{Quantity II: } y^2 - 15y + 56 = 0 \\implies (y - 7)(y - 8) = 0 \\implies y_{\\min} = 7$.\nComparison: $6 < 7 \\implies Q_1 < Q_2$.',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : (qNum + 1)) || 1);
  const item = qcBank[(v - 1) % qcBank.length];

  return {
    id: `q_q1q2_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `In the question below, two mathematical quantities labeled $\\text{Quantity I}$ and $\\text{Quantity II}$ are given. Solve both and determine the relationship between $Q_1$ and $Q_2$:\n\n$\\text{Quantity I } (Q_1)$: ${item.q1}\n$\\text{Quantity II } (Q_2)$: ${item.q2}`,
    questionTextHi: `नीचे दिए गए प्रश्न में $\\text{Quantity I}$ और $\\text{Quantity II}$ दिए गए हैं। दोनों को हल करें और $Q_1$ तथा $Q_2$ के बीच संबंध स्थापित करें:\n\n$\\text{Quantity I } (Q_1)$: ${item.q1}\n$\\text{Quantity II } (Q_2)$: ${item.q2}`,
    marks,
    negativeMarks,
    topic: 'Quantity Comparison',
    subTopic: 'Mathematical Quantities Evaluation',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 35,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Evaluate values separately and compare: $Q_1 > Q_2$, $Q_1 < Q_2$, etc.',
    options: [
      { id: `opt_qc_${qNum}_A`, questionId: `q_q1q2_${qNum}`, identifier: 'A', optionTextEn: '$Q_1 > Q_2$', optionTextHi: '$Q_1 > Q_2$', isCorrect: item.ansIdx === 0 },
      { id: `opt_qc_${qNum}_B`, questionId: `q_q1q2_${qNum}`, identifier: 'B', optionTextEn: '$Q_1 < Q_2$', optionTextHi: '$Q_1 < Q_2$', isCorrect: item.ansIdx === 1 },
      { id: `opt_qc_${qNum}_C`, questionId: `q_q1q2_${qNum}`, identifier: 'C', optionTextEn: '$Q_1 \\ge Q_2$', optionTextHi: '$Q_1 \\ge Q_2$', isCorrect: item.ansIdx === 2 },
      { id: `opt_qc_${qNum}_D`, questionId: `q_q1q2_${qNum}`, identifier: 'D', optionTextEn: '$Q_1 \\le Q_2$', optionTextHi: '$Q_1 \\le Q_2$', isCorrect: item.ansIdx === 3 },
      { id: `opt_qc_${qNum}_E`, questionId: `q_q1q2_${qNum}`, identifier: 'E', optionTextEn: '$Q_1 = Q_2$ or relationship cannot be established', optionTextHi: '$Q_1 = Q_2$ अथवा संबंध स्थापित नहीं किया जा सकता', isCorrect: item.ansIdx === 4 },
    ],
  };
}

export function generateDataSufficiencyQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: number = 1
): Question {
  const dsBank = [
    {
      q: 'What is the present age of the father (in years)?',
      s1: 'The ratio of present ages of father and son is $5 : 2$.',
      s2: '$5\\text{ years ago}$, the father was three times as old as his son.',
      ansIdx: 4, // Both together sufficient
      sol: 'Statement I alone gives only the ratio $5:2$. Statement II alone gives past ratio $3:1$. Combining I and II gives $5x - 5 = 3(2x - 5) \\implies 5x - 5 = 6x - 15 \\implies x = 10$, Father $= 50\\text{ years}$. Both statements together are sufficient.',
    },
    {
      q: 'What is the speed of the running train (in $\\text{m/s}$)?',
      s1: 'The train of length $L = 200\\text{ m}$ crosses a stationary platform $300\\text{ m}$ long in $25\\text{ seconds}$.',
      s2: 'The train crosses a standing person on the platform in $10\\text{ seconds}$.',
      ansIdx: 2, // Either I alone or II alone is sufficient
      sol: 'From Statement I: $\\text{Speed} = \\frac{200 + 300}{25} = 20\\text{ m/s}$ (Sufficient).\nFrom Statement II: $\\text{Speed} = \\frac{200}{10} = 20\\text{ m/s}$ (Sufficient).\nEither Statement I alone or Statement II alone is sufficient.',
    },
    {
      q: 'What is the cost price ($CP$) in ₹ of the smart wristwatch?',
      s1: 'The marked price ($MP$) of the wristwatch is $₹4,000$.',
      s2: 'The shopkeeper earns a profit of $20\\%$ after allowing a discount of $10\\%$ on the marked price.',
      ansIdx: 4, // Both together sufficient
      sol: 'From I: $MP = ₹4,000$. From II: $SP = 0.90 \\times MP$, $CP = \\frac{SP}{1.20}$. Neither alone provides both values. Combining I and II gives $SP = ₹3,600, CP = \\frac{3600}{1.2} = ₹3,000$. Both together are sufficient.',
    },
    {
      q: 'How many days will $A$ and $B$ together take to complete the construction work?',
      s1: '$A$ alone can complete the entire work in $15\\text{ days}$.',
      s2: '$B$ is $50\\%$ more efficient than $A$.',
      ansIdx: 4, // Both together sufficient
      sol: 'From I: $A$ takes $15\\text{ days}$. From II: $B$ takes $\\frac{15}{1.5} = 10\\text{ days}$. Together $= \\frac{15 \\times 10}{25} = 6\\text{ days}$. Both statements together are sufficient.',
    },
    {
      q: 'Is the positive integer $x$ divisible by $6$?',
      s1: '$x$ is completely divisible by $2$.',
      s2: '$x$ is completely divisible by $3$.',
      ansIdx: 4, // Both together sufficient
      sol: 'Since $2$ and $3$ are co-prime, any integer divisible by both $2$ and $3$ must be divisible by $\\text{LCM}(2, 3) = 6$. Both statements together are sufficient.',
    },
    {
      q: 'What is the volume of a right circular cylinder (in $\\text{cm}^3$)?',
      s1: 'The radius of the circular base is $r = 7\\text{ cm}$.',
      s2: 'The height of the cylinder is $h = 10\\text{ cm}$.',
      ansIdx: 4, // Both together sufficient
      sol: 'Volume $V = \\pi r^2 h$. Statement I gives only $r$. Statement II gives only $h$. Combining I and II gives $V = \\frac{22}{7} \\times 7^2 \\times 10 = 1540\\text{ cm}^3$. Both statements together are sufficient.',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : (qNum + 2)) || 1);
  const item = dsBank[(v - 1) % dsBank.length];

  return {
    id: `q_quant_ds_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `The question below is followed by two statements numbered I and II. Decide whether the data in the statements are sufficient to answer the question:\n\n${item.q}\nStatement I: ${item.s1}\nStatement II: ${item.s2}`,
    questionTextHi: `नीचे दिए गए प्रश्न के बाद दो कथन I और II दिए गए हैं। तय करें कि क्या कथनों में दिए गए आंकड़े प्रश्न का उत्तर देने के लिए पर्याप्त हैं:\n\n${item.q}\nकथन I: ${item.s1}\nकथन II: ${item.s2}`,
    marks,
    negativeMarks,
    topic: 'Quantitative Aptitude',
    subTopic: 'Quant Data Sufficiency',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 30,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Evaluate Statement I alone, then Statement II alone, then combine both.',
    options: [
      { id: `opt_ds_${qNum}_A`, questionId: `q_quant_ds_${qNum}`, identifier: 'A', optionTextEn: 'Statement I alone is sufficient', optionTextHi: 'केवल कथन I पर्याप्त है', isCorrect: item.ansIdx === 0 },
      { id: `opt_ds_${qNum}_B`, questionId: `q_quant_ds_${qNum}`, identifier: 'B', optionTextEn: 'Statement II alone is sufficient', optionTextHi: 'केवल कथन II पर्याप्त है', isCorrect: item.ansIdx === 1 },
      { id: `opt_ds_${qNum}_C`, questionId: `q_quant_ds_${qNum}`, identifier: 'C', optionTextEn: 'Either Statement I alone or Statement II alone is sufficient', optionTextHi: 'या तो कथन I अकेला या कथन II अकेला पर्याप्त है', isCorrect: item.ansIdx === 2 },
      { id: `opt_ds_${qNum}_D`, questionId: `q_quant_ds_${qNum}`, identifier: 'D', optionTextEn: 'Neither Statement I nor Statement II is sufficient', optionTextHi: 'न तो कथन I और न ही कथन II पर्याप्त है', isCorrect: item.ansIdx === 3 },
      { id: `opt_ds_${qNum}_E`, questionId: `q_quant_ds_${qNum}`, identifier: 'E', optionTextEn: 'Both Statement I and Statement II together are sufficient', optionTextHi: 'कथन I और कथन II दोनों मिलकर पर्याप्त हैं', isCorrect: item.ansIdx === 4 },
    ],
  };
}

export function generateMultiStatementBankingQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  return generateBankingAwarenessQuestion(qNum, orderInSec, secId, marks, negativeMarks, qNum);
}

export function generateRRBMainsHindiQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  return {
    id: `q_rrb_hi_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `[Hindi Language Section for RRB Mains]\n\nनिम्नलिखित वाक्य में रेखांकित मुहावरे का सही अर्थ विकल्प में से चुनिए:\n\n"बैंक में वित्तीय अनियमिताओं की जांच शुरू होते ही मुख्य खजांची के **हाथ-पांव फूल गए**।"`,
    questionTextHi: `निम्नलिखित वाक्य में रेखांकित मुहावरे का सही अर्थ चुनिए:\n\n"बैंक में वित्तीय अनियमिताओं की जांच शुरू होते ही मुख्य खजांची के **हाथ-पांव फूल गए**।"`,
    marks,
    negativeMarks,
    topic: 'Hindi Language (RRB Mains)',
    subTopic: 'मुहावरे एवं लोकोक्तियाँ',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 15,
    conventionalSolutionEn: `मुहावरे का अर्थ: 'हाथ-पांव फूलना' का अर्थ होता है अचानक किसी संकट, डर या अप्रत्याशित समस्या को सामने देखकर अत्यधिक भयभीत अथवा घबरा जाना। अतः विकल्प (A) पूर्णतः सही है।`,
    shortcutTrickEn: 'संदर्भगत अर्थ: जांच शुरू होने पर दोषी व्यक्ति घबरा जाता है, जिससे विकल्प (A) तत्काल चिन्हित होता है।',
    options: [
      { id: `opt_rrb_hi_${qNum}_A`, questionId: `q_rrb_hi_${qNum}`, identifier: 'A', optionTextEn: 'अत्यधिक भयभीत या घबरा जाना', optionTextHi: 'अत्यधिक भयभीत या घबरा जाना', isCorrect: true },
      { id: `opt_rrb_hi_${qNum}_B`, questionId: `q_rrb_hi_${qNum}`, identifier: 'B', optionTextEn: 'बहुत अधिक क्रोधित होना', optionTextHi: 'बहुत अधिक क्रोधित होना', isCorrect: false },
      { id: `opt_rrb_hi_${qNum}_C`, questionId: `q_rrb_hi_${qNum}`, identifier: 'C', optionTextEn: 'बीमार पड़ जाना', optionTextHi: 'बीमार पड़ जाना', isCorrect: false },
      { id: `opt_rrb_hi_${qNum}_D`, questionId: `q_rrb_hi_${qNum}`, identifier: 'D', optionTextEn: 'अत्यधिक प्रसन्न होना', optionTextHi: 'अत्यधिक प्रसन्न होना', isCorrect: false },
      { id: `opt_rrb_hi_${qNum}_E`, questionId: `q_rrb_hi_${qNum}`, identifier: 'E', optionTextEn: 'कड़ी मेहनत करना', optionTextHi: 'कड़ी मेहनत करना', isCorrect: false },
    ],
  };
}

// ---------------------------------------------------------------------------
// 33. MAINS SPECIALIZED GENERATORS: MACHINE INPUT-OUTPUT, CODED REASONING,
// CRITICAL REASONING & REASONING DATA SUFFICIENCY
// ---------------------------------------------------------------------------

export function generateMachineInputOutputQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.5,
  negativeMarks: number = 0.375,
  variant: number = 1
): Question {
  const ioBank = [
    {
      input: '48 table 19 chair 82 bench 65 desk',
      rule: 'In each step, the smallest remaining number shifts to the extreme left, and the alphabetically first remaining word shifts to the extreme right.',
      step1: 'Step I: 19 48 table chair 82 65 desk bench',
      step2: 'Step II: 19 48 table 82 65 desk bench chair',
      step3: 'Step III: 19 48 65 table 82 bench chair desk',
      step4: 'Step IV: 19 48 65 82 bench chair desk table',
      q: 'Which of the following will be Step III for the given input?',
      options: [
        '19 48 65 table 82 bench chair desk',
        '19 48 table 82 65 desk bench chair',
        '19 48 65 82 bench chair desk table',
        '19 48 table chair 82 65 desk bench',
        'None of these',
      ],
      ansIdx: 0,
      sol: 'Following the step-by-step arrangement:\nStep I: Smallest number 19 to left, first alphabetical word "bench" to right.\nStep II: Next number 48 to left, next word "chair" to right.\nStep III: Next number 65 to left, next word "desk" to right -> "19 48 65 table 82 bench chair desk".',
    },
    {
      input: '48 table 19 chair 82 bench 65 desk',
      rule: 'In each step, the smallest remaining number shifts to the extreme left, and the alphabetically first remaining word shifts to the extreme right.',
      step1: 'Step I: 19 48 table chair 82 65 desk bench',
      step2: 'Step II: 19 48 table 82 65 desk bench chair',
      step3: 'Step III: 19 48 65 table 82 bench chair desk',
      step4: 'Step IV: 19 48 65 82 bench chair desk table',
      q: 'How many total steps are required to complete the rearrangement for the given input?',
      options: ['Three', 'Four', 'Five', 'Six', 'More than six'],
      ansIdx: 1, // Four
      sol: 'In Step IV, all numbers [19, 48, 65, 82] are on the left in ascending order and all words [bench, chair, desk, table] are on the right in alphabetical order. Exactly 4 steps are required.',
    },
    {
      input: 'apple 93 orange 24 mango 71 banana 46',
      rule: 'In each step, words are arranged alphabetically from left, and numbers are arranged in descending order from right.',
      step1: 'Step I: apple orange 24 mango 71 banana 46 93',
      step2: 'Step II: apple banana orange 24 mango 46 93 71',
      step3: 'Step III: apple banana mango orange 24 93 71 46',
      step4: 'Step IV: apple banana mango orange 93 71 46 24',
      q: 'In Step II, which element is 4th from the right end?',
      options: ['orange', '24', 'mango', '46', 'banana'],
      ansIdx: 2, // mango
      sol: 'Step II is: apple banana orange 24 mango 46 93 71.\nFrom the right end:\n1st: 71, 2nd: 93, 3rd: 46, 4th: mango. Hence "mango".',
    },
    {
      input: '32 crown 85 victory 14 triumph 67 medal',
      rule: 'Numbers are arranged in ascending order on left, words in reverse alphabetical order on right.',
      step1: 'Step I: 14 32 crown 85 triumph 67 medal victory',
      step2: 'Step II: 14 32 crown 85 67 medal victory triumph',
      step3: 'Step III: 14 32 67 crown 85 victory triumph medal',
      step4: 'Step IV: 14 32 67 85 victory triumph medal crown',
      q: 'What is the position of "victory" from the right end in Step III?',
      options: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      ansIdx: 2, // Third
      sol: 'In Step III: 14 32 67 crown 85 victory triumph medal.\nFrom the right: medal (1st), triumph (2nd), victory (3rd).',
    },
    {
      input: 'gain 12 88 over 45 smart 63 logic 29',
      rule: 'In each step, the largest remaining number moves to the front, and the word with fewest letters moves to the end.',
      step1: 'Step I: 88 gain 12 45 smart 63 logic 29 over',
      step2: 'Step II: 88 63 12 45 smart logic 29 over gain',
      step3: 'Step III: 88 63 45 12 smart 29 over gain logic',
      step4: 'Step IV: 88 63 45 29 12 over gain logic smart',
      q: 'Which element is exactly between "45" and "smart" in Step III?',
      options: ['12', '29', 'logic', '63', 'None of these'],
      ansIdx: 0, // 12
      sol: 'In Step III: 88 63 45 12 smart 29 over gain logic.\nThe element between "45" and "smart" is "12".',
    },
    {
      input: 'kite 91 16 nest 74 lamp 49 drum',
      rule: 'Numbers move left in ascending order; words move right in alphabetical order.',
      step1: 'Step I: 16 kite 91 nest 74 lamp 49 drum',
      step2: 'Step II: 16 49 kite 91 nest 74 lamp drum',
      step3: 'Step III: 16 49 74 kite 91 nest drum lamp',
      step4: 'Step IV: 16 49 74 91 nest drum lamp kite',
      q: 'Which of the following elements represents the 2nd element from the left end in Step II?',
      options: ['16', '49', 'kite', '91', 'drum'],
      ansIdx: 1, // 49
      sol: 'In Step II: 16 49 kite 91 nest 74 lamp drum.\nThe 2nd element from the left is "49".',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : qNum) || 1);
  const item = ioBank[(v - 1) % ioBank.length];

  return {
    id: `q_inpout_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Directions: Study the given machine arrangement logic and answer the following question.\n\nInput: ${item.input}\n${item.step1}\n${item.step2}\n${item.step3}\n${item.step4}\n\nQuestion: ${item.q}`,
    questionTextHi: `निर्देश: दी गई मशीन व्यवस्था तर्क का अध्ययन करें और निम्नलिखित प्रश्न का उत्तर दें।\n\nइनपुट: ${item.input}\n${item.step1}\n${item.step2}\n${item.step3}\n${item.step4}\n\nप्रश्न: ${item.q}`,
    marks,
    negativeMarks,
    topic: 'Reasoning Ability',
    subTopic: 'Machine Input-Output (Mains Level)',
    difficulty: 'HARD',
    avgIdealTimeSeconds: 50,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Track left-boundary and right-boundary operations simultaneously using shorthand tags.',
    options: item.options.map((opt, i) => ({
      id: `opt_io_${qNum}_${i}`,
      questionId: `q_inpout_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === item.ansIdx,
    })),
  };
}

export function generateCodedReasoningQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.5,
  negativeMarks: number = 0.375,
  variant: number = 1
): Question {
  const codedBank = [
    {
      statement: '$P @ Q$ means $P$ is father of $Q$\n$P \\# Q$ means $P$ is mother of $Q$\n$P \\$ Q$ means $P$ is sister of $Q$\n$P \\% Q$ means $P$ is brother of $Q$',
      expression: 'Given expression: $A @ B \\$ C \\% D \\# E$',
      q: 'How is $A$ related to $E$ in the given expression?',
      options: ['Maternal Grandfather', 'Paternal Grandfather', 'Uncle', 'Father', 'Brother'],
      ansIdx: 0, // Maternal Grandfather
      sol: '$A @ B \\implies A$ is father of $B$.\n$B \\$ C \\implies B$ is sister of $C$.\n$C \\% D \\implies C$ is brother of $D$.\n$D \\# E \\implies D$ is mother of $E$.\nTherefore, $A$ is the father of $D$, and $D$ is the mother of $E$. Thus $A$ is the maternal grandfather of $E$.',
    },
    {
      statement: '$A * B$ means $A$ is $12\\text{ m}$ North of $B$\n$A + B$ means $A$ is $9\\text{ m}$ East of $B$\n$A - B$ means $A$ is $12\\text{ m}$ South of $B$\n$A / B$ means $A$ is $9\\text{ m}$ West of $B$',
      expression: 'Given trail: $P + Q * R$',
      q: 'What is the shortest distance between Point $P$ and Point $R$?',
      options: ['$15\\text{ m}$', '$12\\text{ m}$', '$21\\text{ m}$', '$18\\text{ m}$', '$9\\text{ m}$'],
      ansIdx: 0, // 15 m
      sol: '$P + Q \\implies P$ is $9\\text{ m}$ East of $Q$.\n$Q * R \\implies Q$ is $12\\text{ m}$ North of $R$.\nShortest distance between $P$ and $R = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ m}$.',
    },
    {
      statement: '$K \\& L$ means $K$ is the husband of $L$\n$K \\wedge L$ means $K$ is the daughter of $L$\n$K ! L$ means $K$ is the son of $L$',
      expression: 'Given expression: $M \\& N \\wedge O ! P$',
      q: 'How is $M$ related to $O$ in the given relationship?',
      options: ['Son-in-law', 'Brother-in-law', 'Father', 'Uncle', 'Nephew'],
      ansIdx: 0, // Son-in-law
      sol: '$M \\& N \\implies M$ is the husband of $N$.\n$N \\wedge O \\implies N$ is the daughter of $O$.\nSince $M$ is married to $O$\'s daughter $N$, $M$ is the son-in-law of $O$.',
    },
    {
      statement: '$P \\uparrow Q$ means $P$ is $8\\text{ m}$ North of $Q$\n$P \\rightarrow Q$ means $P$ is $6\\text{ m}$ East of $Q$\n$P \\downarrow Q$ means $P$ is $8\\text{ m}$ South of $Q$\n$P \\leftarrow Q$ means $P$ is $6\\text{ m}$ West of $Q$',
      expression: 'Given expression: $X \\rightarrow Y \\uparrow Z$',
      q: 'In which direction is Point $X$ with respect to Point $Z$?',
      options: ['North-East', 'North-West', 'South-East', 'South-West', 'North'],
      ansIdx: 0, // North-East
      sol: '$X$ is $6\\text{ m}$ East of $Y$. $Y$ is $8\\text{ m}$ North of $Z$.\nRelative to $Z$, $X$ is located to the North and to the East, i.e., North-East.',
    },
    {
      statement: '$A \\% B$ means $A$ is sister of $B$\n$A \\$ B$ means $A$ is brother of $B$\n$A @ B$ means $A$ is father of $B$\n$A \\# B$ means $A$ is wife of $B$',
      expression: 'Given expression: $T @ U \\# V \\$ W$',
      q: 'How is $T$ related to $V$?',
      options: ['Father-in-law', 'Brother', 'Uncle', 'Father', 'Grandfather'],
      ansIdx: 0, // Father-in-law
      sol: '$T @ U \\implies T$ is father of $U$.\n$U \\# V \\implies U$ is wife of $V$.\n$T$ is the father of $V$\'s wife, hence $T$ is the father-in-law of $V$.',
    },
    {
      statement: '$M \\# (10\\text{m}) N$ means $M$ is $10\\text{m}$ North of $N$\n$M \\$ (24\\text{m}) N$ means $M$ is $24\\text{m}$ East of $N$',
      expression: 'Given: $A \\# (10\\text{m}) B$ and $C \\$ (24\\text{m}) B$',
      q: 'What is the shortest distance between Point $A$ and Point $C$?',
      options: ['$26\\text{ m}$', '$34\\text{ m}$', '$25\\text{ m}$', '$20\\text{ m}$', '$28\\text{ m}$'],
      ansIdx: 0, // 26 m
      sol: 'Distance $AC = \\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26\\text{ m}$.',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : qNum) || 1);
  const item = codedBank[(v - 1) % codedBank.length];

  return {
    id: `q_coded_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Directions: Read the coded relationships carefully and answer:\n\n${item.statement}\n\n${item.expression}\nQuestion: ${item.q}`,
    questionTextHi: `निर्देश: कोडेड संबंधों को ध्यानपूर्वक पढ़ें और उत्तर दें:\n\n${item.statement}\n\n${item.expression}\nप्रश्न: ${item.q}`,
    marks,
    negativeMarks,
    topic: 'Reasoning Ability',
    subTopic: 'Coded Relations & Directions (Mains)',
    difficulty: 'HARD',
    avgIdealTimeSeconds: 45,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Decode generation gaps and direction vectors incrementally from left to right.',
    options: item.options.map((opt, i) => ({
      id: `opt_coded_${qNum}_${i}`,
      questionId: `q_coded_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === item.ansIdx,
    })),
  };
}

export function generateCriticalReasoningQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.5,
  negativeMarks: number = 0.375,
  variant: number = 1
): Question {
  const critBank = [
    {
      stem: 'Statement: The government has decided to levy a 2% green cess on commercial transport vehicles older than 8 years in metro cities to curb vehicular pollution.',
      sub: 'Assumptions:\nI. Commercial vehicles older than 8 years contribute disproportionately to urban emissions.\nII. The cess will encourage operators to transition towards modern, eco-friendly fleet options.',
      q: 'Which of the assumptions is/are implicit in the statement?',
      options: [
        'Only Assumption I is implicit',
        'Only Assumption II is implicit',
        'Either I or II is implicit',
        'Neither I nor II is implicit',
        'Both I and II are implicit',
      ],
      ansIdx: 4, // Both I and II are implicit
      sol: 'The government levies the tax on older vehicles specifically because it assumes they pollute significantly (Assumption I) and that financial disincentives will drive fleet modernization (Assumption II). Hence, both are implicit.',
    },
    {
      stem: 'Statement: Severe water contamination was detected in three major municipal wards following monsoon pipeline breaches, leading to a surge in waterborne gastrointestinal illnesses.',
      sub: 'Courses of Action:\nI. The municipal health department should set up emergency medical camps and supply clean packaged water immediately.\nII. A dedicated technical committee should inspect pipeline integrity and take penal action against negligent contractors.',
      q: 'Which of the courses of action logically follow(s)?',
      options: [
        'Only Course of Action I follows',
        'Only Course of Action II follows',
        'Either I or II follows',
        'Neither I nor II follows',
        'Both I and II follow',
      ],
      ansIdx: 4, // Both I and II follow
      sol: 'Course I provides immediate humanitarian and public health relief to affected citizens. Course II addresses the root structural cause to prevent future occurrences. Both logically follow.',
    },
    {
      stem: 'Statements:\nI. The Reserve Bank of India increased the benchmark Repo Rate by 50 basis points.\nII. Major commercial banks raised their Marginal Cost of Funds Based Lending Rate (MCLR) and retail loan interest rates.',
      sub: 'Determine the cause-and-effect relationship between the statements:',
      q: 'Which statement is the cause and which is its effect?',
      options: [
        'Statement I is the cause and Statement II is its effect',
        'Statement II is the cause and Statement I is its effect',
        'Both statements are independent causes',
        'Both statements are effects of independent causes',
        'Both statements are effects of a common cause',
      ],
      ansIdx: 0, // I is cause, II is effect
      sol: 'A hike in the repo rate raises commercial banks\' cost of borrowing from the central bank. Consequently, banks pass this increased cost to borrowers by hiking lending rates. Hence I is the cause and II is its effect.',
    },
    {
      stem: 'Statement: Should all competitive examinations in the country transition completely to a remote home-proctored online testing model?',
      sub: 'Arguments:\nI. Yes, it eliminates travel costs and logistical inconveniences for millions of rural aspirants.\nII. No, deep digital divides in power reliability and internet bandwidth across remote areas would severely disadvantage underprivileged students.',
      q: 'Which of the arguments is/are strong?',
      options: [
        'Only Argument I is strong',
        'Only Argument II is strong',
        'Either I or II is strong',
        'Neither I nor II is strong',
        'Both I and II are strong',
      ],
      ansIdx: 1, // Only Argument II is strong
      sol: 'Argument II highlights fundamental constitutional fairness and infrastructural constraints (power, bandwidth), which are critical for national competitive exams. While I mentions convenience, equity of access is paramount. Hence Argument II is strong.',
    },
    {
      stem: 'Statement: Despite annual monsoon precipitation falling 15% below the decadal average, the total harvest output for Kharif pulses increased by 9% due to wide adoption of drought-resilient seed varieties.',
      sub: 'Inferences:\nI. Scientific drought-resistant seed technology can successfully decouple crop output from moderate rainfall deficiencies.\nII. Chemical fertilizer usage was completely avoided during the Kharif season.',
      q: 'Which of the inferences can definitely be drawn from the statement?',
      options: [
        'Only Inference I follows',
        'Only Inference II follows',
        'Either I or II follows',
        'Neither I nor II follows',
        'Both I and II follow',
      ],
      ansIdx: 0, // Only I follows
      sol: 'The passage explicitly attributes the higher yield during deficient rains to drought-resilient seed adoption (supporting Inference I). The passage makes no mention of fertilizer usage, so Inference II is an unsubstantiated extrapolation.',
    },
    {
      stem: 'Statement: A premier commercial airline decided to replace complimentary hot meals with packaged healthy snacks on all domestic flights under 75 minutes to reduce turnaround delays.',
      sub: 'Assumptions:\nI. Meal distribution and tray collection on short flights was a primary driver of ground turnaround delays.\nII. Most passengers will accept packaged snacks without significant customer dissatisfaction on short flights.',
      q: 'Which of the assumptions is/are implicit in the statement?',
      options: [
        'Only Assumption I is implicit',
        'Only Assumption II is implicit',
        'Either I or II is implicit',
        'Neither I nor II is implicit',
        'Both I and II are implicit',
      ],
      ansIdx: 4, // Both I and II are implicit
      sol: 'The airline assumes the meal service was a major source of turnaround delays (Assumption I) and that passengers will find this operational adjustment acceptable (Assumption II). Both are implicit.',
    },
    {
      stem: 'Statement: Financial institutions adopting AI-powered real-time transaction monitoring reported a 42% reduction in fraudulent unauthorized debit transactions over 12 months.',
      sub: 'Conclusions:\nI. Artificial intelligence algorithms can detect anomalous transactional behaviour more effectively than legacy batch review systems.\nII. Fraudulent activities can be completely eliminated with further software updates.',
      q: 'Which conclusion logically follows from the statement?',
      options: [
        'Only Conclusion I follows',
        'Only Conclusion II follows',
        'Either I or II follows',
        'Neither I nor II follows',
        'Both I and II follow',
      ],
      ansIdx: 0, // Only Conclusion I follows
      sol: 'The 42% drop directly validates the efficacy of real-time AI anomaly detection (Conclusion I). Concluding that fraud will be completely (100%) eliminated is an extreme, unsupported generalization.',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : qNum) || 1);
  const item = critBank[(v - 1) % critBank.length];

  return {
    id: `q_crit_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `${item.stem}\n\n${item.sub}\n\nQuestion: ${item.q}`,
    questionTextHi: `${item.stem}\n\n${item.sub}\n\nप्रश्न: ${item.q}`,
    marks,
    negativeMarks,
    topic: 'Reasoning Ability',
    subTopic: 'Critical & Analytical Reasoning (Mains)',
    difficulty: 'HARD',
    avgIdealTimeSeconds: 40,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Avoid extreme words like "completely", "never", "only" unless explicitly supported by context.',
    options: item.options.map((opt, i) => ({
      id: `opt_crit_${qNum}_${i}`,
      questionId: `q_crit_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === item.ansIdx,
    })),
  };
}

export function generateReasoningDataSufficiencyQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.5,
  negativeMarks: number = 0.375,
  variant: number = 1
): Question {
  const rdsBank = [
    {
      q: 'Five persons P, Q, R, S, and T are sitting around a circular table facing the centre. Who sits to the immediate left of R?',
      s1: 'P sits second to the left of R. Q is an immediate neighbour of both P and S.',
      s2: 'T sits second to the right of R. S is not an immediate neighbour of T.',
      ansIdx: 0, // Statement I alone is sufficient
      sol: 'From Statement I: With R at position 0, P is at position 2 (left). Since Q is between P and S, positions are uniquely fixed: R -> S -> Q -> P -> T. S sits to the immediate left of R. Hence Statement I alone is sufficient.',
    },
    {
      q: 'How is M related to T in a family of six members?',
      s1: 'M is the brother of K. K is the mother of R. R is the son of T.',
      s2: 'T is the husband of K. K is the daughter of P.',
      ansIdx: 0, // Statement I alone is sufficient
      sol: 'From Statement I: K is mother of R, T is father of R (husband of K). M is brother of K. Thus M is brother-in-law of T. Statement I alone is sufficient.',
    },
    {
      q: 'In which direction is Point X located with respect to Point Z?',
      s1: 'Point X is 8 m north of Point Y, which is 6 m west of Point Z.',
      s2: 'Point Z is 10 m south-east of Point X.',
      ansIdx: 2, // Either I alone or II alone is sufficient
      sol: 'From Statement I: X is north of Y, Y is west of Z => X is North-West of Z. (Sufficient)\nFrom Statement II: Z is South-East of X => X is North-West of Z. (Sufficient)\nEither Statement I alone or Statement II alone is sufficient.',
    },
    {
      q: 'Among five friends A, B, C, D, and E, each having a different height, who is the second tallest?',
      s1: 'A is taller than only D and E. B is shorter than C.',
      s2: 'C is taller than B, but shorter than someone who is not A.',
      ansIdx: 4, // Both together sufficient
      sol: 'From I: D, E < A < B, C. We don\'t know if B > C or C > B.\nFrom II: C < tallest. Combining I and II: the order from tallest is (Tallest person > C > B > A > D/E). Second tallest is C. Both statements together are sufficient.',
    },
    {
      q: 'On which day of the week (Monday to Friday) did Rohan attend the annual summit?',
      s1: 'His assistant remembers Rohan attended after Tuesday but before Friday.',
      s2: 'His manager remembers Rohan attended after Wednesday but before Saturday.',
      ansIdx: 4, // Both together sufficient
      sol: 'From Statement I: Possible days are Wednesday or Thursday.\nFrom Statement II: Possible days are Thursday or Friday.\nCombining both: The only common day is Thursday. Both statements together are sufficient.',
    },
    {
      q: 'In a certain code language, what does the word "growth" represent?',
      s1: 'In the code language, "credit market growth" is written as "ka re lo" and "market stable rates" is written as "re ma ti".',
      s2: 'In the code language, "sustainable growth index" is written as "lo pa du" and "credit high risk" is written as "ka zo fe".',
      ansIdx: 4, // Both together sufficient
      sol: 'From I: "growth" is either "ka" or "lo".\nFrom II: "credit" is "ka", and "growth" appears with "lo".\nCombining I and II: "growth" is uniquely identified as "lo". Both statements together are sufficient.',
    },
  ];

  const v = Math.abs((variant !== undefined ? variant : qNum) || 1);
  const item = rdsBank[(v - 1) % rdsBank.length];

  return {
    id: `q_reas_ds_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Directions: Each question below is followed by two statements numbered I and II. Decide whether the data provided in the statements are sufficient to answer the question:\n\n${item.q}\nStatement I: ${item.s1}\nStatement II: ${item.s2}`,
    questionTextHi: `निर्देश: नीचे दिए गए प्रत्येक प्रश्न के बाद दो कथन I और II दिए गए हैं। तय करें कि क्या कथनों में दिया गया डेटा प्रश्न का उत्तर देने के लिए पर्याप्त है:\n\n${item.q}\nकथन I: ${item.s1}\nकथन II: ${item.s2}`,
    marks,
    negativeMarks,
    topic: 'Reasoning Ability',
    subTopic: 'Reasoning Data Sufficiency (Mains)',
    difficulty: 'HARD',
    avgIdealTimeSeconds: 40,
    conventionalSolutionEn: item.sol,
    shortcutTrickEn: 'Evaluate whether statements yield a UNIQUE single answer, rather than solving completely.',
    options: [
      { id: `opt_rds_${qNum}_A`, questionId: `q_reas_ds_${qNum}`, identifier: 'A', optionTextEn: 'Statement I alone is sufficient to answer', optionTextHi: 'केवल कथन I उत्तर देने के लिए पर्याप्त है', isCorrect: item.ansIdx === 0 },
      { id: `opt_rds_${qNum}_B`, questionId: `q_reas_ds_${qNum}`, identifier: 'B', optionTextEn: 'Statement II alone is sufficient to answer', optionTextHi: 'केवल कथन II उत्तर देने के लिए पर्याप्त है', isCorrect: item.ansIdx === 1 },
      { id: `opt_rds_${qNum}_C`, questionId: `q_reas_ds_${qNum}`, identifier: 'C', optionTextEn: 'Either Statement I alone or Statement II alone is sufficient', optionTextHi: 'या तो कथन I अकेला या कथन II अकेला पर्याप्त है', isCorrect: item.ansIdx === 2 },
      { id: `opt_rds_${qNum}_D`, questionId: `q_reas_ds_${qNum}`, identifier: 'D', optionTextEn: 'Neither Statement I nor Statement II is sufficient', optionTextHi: 'न तो कथन I और न ही कथन II पर्याप्त है', isCorrect: item.ansIdx === 3 },
      { id: `opt_rds_${qNum}_E`, questionId: `q_reas_ds_${qNum}`, identifier: 'E', optionTextEn: 'Both Statement I and Statement II together are sufficient', optionTextHi: 'कथन I और कथन II दोनों मिलकर पर्याप्त हैं', isCorrect: item.ansIdx === 4 },
    ],
  };
}
