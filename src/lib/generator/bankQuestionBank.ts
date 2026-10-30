import { Question, Option, QuestionGroup, QuestionDifficulty, SectionType } from '@/types/exam';
import {
  generateSeatingDiagram,
  generateSyllogismVennDiagram,
  generateDirectionPathDiagram,
  generateFamilyTreeDiagram,
  generateInputOutputBoxesDiagram,
} from '@/lib/graphics/svgDiagrams';

// Random integer helper [min, max]
function randInt(min: number, max: number, rng = Math.random): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

// Deterministic pseudo-random generator with seed
function createRng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
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
  
  // Pick clean integer roots
  // Eq 1: x roots
  const r1 = randInt(2, 9, rng);
  const r2 = randInt(2, 9, rng);
  const b1 = r1 + r2;
  const c1 = r1 * r2;

  // Eq 2: y roots
  const s1 = randInt(2, 9, rng);
  const s2 = randInt(2, 9, rng);
  const b2 = s1 + s2;
  const c2 = s1 * s2;

  // Determine exact mathematical relationship
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
  } else if (xMin === yMin && xMax === yMax) {
    correctRelation = 'x <= y';
  } else {
    correctRelation = 'CND'; // Overlapping or x=y
  }

  const standardOptions = [
    { text: 'x > y', isCorrect: correctRelation === 'x > y' },
    { text: 'x >= y', isCorrect: correctRelation === 'x >= y' },
    { text: 'x < y', isCorrect: correctRelation === 'x < y' },
    { text: 'x <= y', isCorrect: correctRelation === 'x <= y' },
    { text: 'x = y or relationship cannot be established', isCorrect: correctRelation === 'CND' },
  ];

  const options: Option[] = standardOptions.map((opt, i) => ({
    id: `opt_quad_${qNum}_${i}`,
    questionId: `q_quad_${qNum}`,
    identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
    optionTextEn: opt.text,
    optionTextHi: opt.text === 'x = y or relationship cannot be established' ? 'x = y अथवा संबंध स्थापित नहीं किया जा सकता' : opt.text,
    isCorrect: opt.isCorrect,
  }));

  const questionTextEn = `In the following question, two equations numbered I and II are given. You have to solve both equations and establish the relationship between x and y:

I. x² - ${b1}x + ${c1} = 0
II. y² - ${b2}y + ${c2} = 0`;

  const questionTextHi = `निम्नलिखित प्रश्न में दो समीकरण I और II दिए गए हैं। दोनों को हल करें और x तथा y के बीच संबंध स्थापित करें:

I. x² - ${b1}x + ${c1} = 0
II. y² - ${b2}y + ${c2} = 0`;

  const solutionEn = `Equation I: x² - ${b1}x + ${c1} = 0
Factoring: (x - ${r1})(x - ${r2}) = 0
Roots for x = +${r1}, +${r2}

Equation II: y² - ${b2}y + ${c2} = 0
Factoring: (y - ${s1})(y - ${s2}) = 0
Roots for y = +${s1}, +${s2}

Comparison:
Roots of x: [${r1}, ${r2}]
Roots of y: [${s1}, ${s2}]
Result: ${correctRelation === 'CND' ? 'Overlapping values -> Relationship cannot be established.' : correctRelation}`;

  return {
    id: `q_dyn_quad_${qNum}_${seed % 9999}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn,
    questionTextHi,
    marks,
    negativeMarks,
    topic: 'Quadratic Equations',
    subTopic: 'Sign Method Comparison',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: solutionEn,
    shortcutTrickEn: `Sign Rule: Both equations have (- , +), so all roots are positive (+, +). Compare factors directly without solving full quadratic formula: x factors = (${r1}, ${r2}), y factors = (${s1}, ${s2}).`,
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
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 53);
  const patternType = randInt(1, 4, rng);

  let sequence: number[] = [];
  let explanation = '';
  const missingIndex = 4; // 5th number is missing

  if (patternType === 1) {
    // Difference of squares
    const start = randInt(12, 40, rng);
    const baseDiff = randInt(2, 5, rng);
    sequence = [start];
    explanation = 'Pattern: Difference is consecutive squares: ';
    for (let i = 0; i < 5; i++) {
      const diff = Math.pow(baseDiff + i, 2);
      sequence.push(sequence[i] + diff);
      explanation += `+${baseDiff + i}² (${diff}), `;
    }
  } else if (patternType === 2) {
    // Alternate * 2 + 1, * 2 + 2...
    const start = randInt(4, 10, rng);
    sequence = [start];
    explanation = 'Pattern: ';
    for (let i = 0; i < 5; i++) {
      const nextVal = sequence[i] * 2 + (i + 1);
      sequence.push(nextVal);
      explanation += `× 2 + ${i + 1}, `;
    }
  } else if (patternType === 3) {
    // Prime number differences
    const primes = [7, 11, 13, 17, 19, 23];
    const start = randInt(20, 60, rng);
    sequence = [start];
    explanation = 'Pattern: Consecutive prime number additions: ';
    for (let i = 0; i < 5; i++) {
      sequence.push(sequence[i] + primes[i]);
      explanation += `+${primes[i]}, `;
    }
  } else {
    // Difference of cubes
    const start = randInt(15, 50, rng);
    sequence = [start];
    explanation = 'Pattern: Difference of consecutive cubes: ';
    for (let i = 0; i < 5; i++) {
      const diff = Math.pow(i + 1, 3);
      sequence.push(sequence[i] + diff);
      explanation += `+${i + 1}³ (${diff}), `;
    }
  }

  const correctVal = sequence[missingIndex];
  const displaySequence = sequence.map((val, idx) => (idx === missingIndex ? '?' : val.toString())).join(', ');

  const distractors = new Set<number>();
  distractors.add(correctVal + 2);
  distractors.add(correctVal - 3);
  distractors.add(correctVal + 10);
  distractors.add(correctVal - 8);

  const distArray = Array.from(distractors).slice(0, 4);
  const allChoices = [correctVal, ...distArray].sort((a, b) => a - b);
  const correctOptionIdx = allChoices.indexOf(correctVal);

  const options: Option[] = allChoices.map((choice, i) => ({
    id: `opt_series_${qNum}_${i}`,
    questionId: `q_series_${qNum}`,
    identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
    optionTextEn: choice.toString(),
    optionTextHi: choice.toString(),
    isCorrect: i === correctOptionIdx,
  }));

  return {
    id: `q_dyn_series_${qNum}_${seed % 9999}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `What will come in place of the question mark (?) in the following number series?\n\n${displaySequence}`,
    questionTextHi: `निम्नलिखित संख्या श्रृंखला में प्रश्नवाचक चिन्ह (?) के स्थान पर क्या आएगा?\n\n${displaySequence}`,
    marks,
    negativeMarks,
    topic: 'Number Series',
    subTopic: 'Missing Number Series',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 35,
    conventionalSolutionEn: `${explanation}\nHence, missing number = ${correctVal}.`,
    shortcutTrickEn: 'Check the difference of successive terms first; banking series almost always follow square/cube differences or multi-step arithmetic.',
    options,
  };
}

// ---------------------------------------------------------------------------
// 3. DYNAMIC SPEED MATH & SIMPLIFICATION / APPROXIMATION
// ---------------------------------------------------------------------------

export function generateDynamicSimplificationQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 71);
  
  const pct = [25, 40, 50, 60, 75][randInt(0, 4, rng)];
  const baseNum = randInt(4, 16, rng) * 20;
  const pctVal = (pct / 100) * baseNum;

  const sqrtRoots = [16, 24, 25, 32, 36, 40];
  const root = sqrtRoots[randInt(0, sqrtRoots.length - 1, rng)];
  const sqVal = root * root;

  const multA = randInt(3, 8, rng);
  const multB = randInt(4, 9, rng);
  const multVal = multA * multB;

  const correctVal = pctVal + root - multVal;

  const distractors = [correctVal + 4, correctVal - 5, correctVal + 12, correctVal - 10];
  const allChoices = [correctVal, ...distractors].sort((a, b) => a - b);
  const correctIdx = allChoices.indexOf(correctVal);

  const options: Option[] = allChoices.map((choice, i) => ({
    id: `opt_simp_${qNum}_${i}`,
    questionId: `q_simp_${qNum}`,
    identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
    optionTextEn: choice.toString(),
    optionTextHi: choice.toString(),
    isCorrect: i === correctIdx,
  }));

  const questionTextEn = `What will come in place of question mark (?) in the following question?\n\n${pct}% of ${baseNum} + √${sqVal} - (${multA} × ${multB}) = ?`;
  const questionTextHi = `निम्नलिखित प्रश्न में प्रश्न चिन्ह (?) के स्थान पर क्या मान आएगा?\n\n${pct}% का ${baseNum} + √${sqVal} - (${multA} × ${multB}) = ?`;

  const solutionEn = `Step 1: ${pct}% of ${baseNum} = (${pct}/100) × ${baseNum} = ${pctVal}
Step 2: √${sqVal} = ${root}
Step 3: ${multA} × ${multB} = ${multVal}
Step 4: ${pctVal} + ${root} - ${multVal} = ${correctVal}`;

  return {
    id: `q_dyn_simp_${qNum}_${seed % 9999}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn,
    questionTextHi,
    marks,
    negativeMarks,
    topic: 'Simplification & Approximation',
    subTopic: 'BODMAS Speed Calculation',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: solutionEn,
    shortcutTrickEn: `Vedic Math Fraction Split: ${pct}% can be split into simple fractions (e.g., 25% = 1/4, 50% = 1/2) for instantaneous mental arithmetic without pen-paper.`,
    options,
  };
}

// ---------------------------------------------------------------------------
// 4. ARITHMETIC WORD PROBLEMS
// ---------------------------------------------------------------------------

export function generateArithmeticWordProblem(
  qNum: number,
  orderInSec: number,
  secId: string,
  topicType: 'PROFIT_LOSS' | 'TIME_WORK' | 'SI_CI' | 'BOATS_STREAMS' | 'PARTNERSHIP',
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 89);

  if (topicType === 'PROFIT_LOSS') {
    const cp = randInt(20, 60, rng) * 50;
    const markupPct = 40;
    const mp = cp * (1 + markupPct / 100);
    const discountPct = 20;
    const sp = mp * (1 - discountPct / 100);
    const profit = sp - cp;
    const profitPct = ((profit / cp) * 100).toFixed(1);

    const correctVal = `₹${profit}`;
    const distractors = [`₹${profit + 40}`, `₹${profit - 30}`, `₹${profit + 80}`, `₹${profit - 60}`];
    const choices = [correctVal, ...distractors].sort();
    const correctIdx = choices.indexOf(correctVal);

    return {
      id: `q_arith_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `A merchant marks his goods 40% above the cost price and allows a discount of 20% on the marked price. If the cost price of the article is ₹${cp}, find the profit earned by the merchant.`,
      questionTextHi: `एक व्यापारी अपने सामान पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 20% की छूट देता है। यदि वस्तु का क्रय मूल्य ₹${cp} है, तो व्यापारी द्वारा अर्जित लाभ ज्ञात कीजिए।`,
      marks,
      negativeMarks,
      topic: 'Arithmetic Word Problems',
      subTopic: 'Profit, Loss & Discount',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 40,
      conventionalSolutionEn: `CP = ₹${cp}
Marked Price (MP) = ${cp} × 1.40 = ₹${mp}
Selling Price (SP) after 20% discount = ${mp} × 0.80 = ₹${sp}
Profit = SP - CP = ₹${sp} - ₹${cp} = ₹${profit} (${profitPct}% profit).`,
      shortcutTrickEn: `Successive percentage formula: Net % Profit = a + b + (ab)/100 = 40 - 20 - (40×20)/100 = 20 - 8 = +12%. Profit = 12% of CP = 0.12 × ${cp} = ₹${profit}.`,
      options: choices.map((c, i) => ({
        id: `opt_pl_${qNum}_${i}`,
        questionId: `q_arith_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: c,
        optionTextHi: c,
        isCorrect: i === correctIdx,
      })),
    };
  } else if (topicType === 'TIME_WORK') {
    const daysA = [12, 15, 20][randInt(0, 2, rng)];
    const daysB = [20, 30, 60][randInt(0, 2, rng)];
    const totalWork = 60;
    const effA = totalWork / daysA;
    const effB = totalWork / daysB;
    const combinedEff = effA + effB;
    const combinedDays = (totalWork / combinedEff).toFixed(1);

    const correctVal = `${combinedDays} days`;
    const distractors = [`${(parseFloat(combinedDays) + 1.5).toFixed(1)} days`, `${(parseFloat(combinedDays) - 1.0).toFixed(1)} days`, '14 days', '10 days'];
    const choices = [correctVal, ...distractors].sort();
    const correctIdx = choices.indexOf(correctVal);

    return {
      id: `q_arith_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `A can complete a piece of work in ${daysA} days and B can complete the same work in ${daysB} days. If both work together, in how many days will the entire work be finished?`,
      questionTextHi: `A किसी कार्य को ${daysA} दिनों में पूरा कर सकता है और B उसी कार्य को ${daysB} दिनों में पूरा कर सकता है। यदि दोनों एक साथ कार्य करते हैं, तो पूरा कार्य कितने दिनों में समाप्त होगा?`,
      marks,
      negativeMarks,
      topic: 'Arithmetic Word Problems',
      subTopic: 'Time and Work (LCM Efficiency)',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 35,
      conventionalSolutionEn: `A's 1 day work = 1/${daysA}
B's 1 day work = 1/${daysB}
Combined 1 day work = 1/${daysA} + 1/${daysB} = (${effA} + ${effB})/${totalWork} = ${combinedEff}/${totalWork}
Total days = ${totalWork}/${combinedEff} = ${combinedDays} days.`,
      shortcutTrickEn: `LCM Efficiency Method: Assume Total Work = LCM(${daysA}, ${daysB}) = ${totalWork} units. Efficiency of A = ${effA} u/day, B = ${effB} u/day. Combined = ${combinedEff} u/day. Time = ${totalWork}/${combinedEff} = ${combinedDays} days.`,
      options: choices.map((c, i) => ({
        id: `opt_tw_${qNum}_${i}`,
        questionId: `q_arith_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: c,
        optionTextHi: c.replace('days', 'दिन'),
        isCorrect: i === correctIdx,
      })),
    };
  } else {
    // Boats & Streams
    const speedBoat = 18;
    const speedStream = 6;
    const upstream = speedBoat - speedStream;
    const downstream = speedBoat + speedStream;
    const distance = 72;
    const totalTime = distance / upstream + distance / downstream;

    const correctVal = `${totalTime} hours`;
    const distractors = ['8 hours', '10.5 hours', '12 hours', '7.5 hours'];
    const choices = [correctVal, ...distractors].sort();
    const correctIdx = choices.indexOf(correctVal);

    return {
      id: `q_arith_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `The speed of a boat in still water is ${speedBoat} km/h and the speed of the stream is ${speedStream} km/h. If the boat travels ${distance} km upstream and returns back to the starting point downstream, what is the total time taken for the round trip?`,
      questionTextHi: `शांत जल में एक नाव की गति ${speedBoat} किमी/घंटा है और धारा की गति ${speedStream} किमी/घंटा है। यदि नाव धारा के प्रतिकूल ${distance} किमी जाती है और धारा के अनुकूल प्रारंभिक बिंदु पर वापस लौटती है, तो कुल यात्रा में कितना समय लगेगा?`,
      marks,
      negativeMarks,
      topic: 'Arithmetic Word Problems',
      subTopic: 'Boats and Streams',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 45,
      conventionalSolutionEn: `Upstream speed = ${speedBoat} - ${speedStream} = ${upstream} km/h
Downstream speed = ${speedBoat} + ${speedStream} = ${downstream} km/h
Time upstream = ${distance} / ${upstream} = 6 hours
Time downstream = ${distance} / ${downstream} = 3 hours
Total round trip time = 6 + 3 = 9 hours.`,
      shortcutTrickEn: 'Time = Distance × [1/(u-v) + 1/(u+v)] = 72 × [1/12 + 1/24] = 72 × (3/24) = 72 / 8 = 9 hours.',
      options: choices.map((c, i) => ({
        id: `opt_bs_${qNum}_${i}`,
        questionId: `q_arith_${qNum}`,
        identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
        optionTextEn: c,
        optionTextHi: c.replace('hours', 'घंटे'),
        isCorrect: i === correctIdx,
      })),
    };
  }
}

// ---------------------------------------------------------------------------
// 5. AUTHENTIC SYLLOGISMS & INEQUALITIES GENERATOR
// ---------------------------------------------------------------------------

export function generateSyllogismQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  variant: 1 | 2 | 3 = 1
): Question {
  if (variant === 1) {
    const diagram = generateSyllogismVennDiagram({
      title: 'Only a few Laptops are Computers (Venn Representation)',
      setA: 'Laptops',
      setB: 'Computers',
      relationType: 'ONLY_A_FEW',
    });

    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:
Only a few Laptops are Computers.
All Computers are Tablets.
No Tablet is Mobile.

Conclusions:
I. Some Laptops are not Computers.
II. All Tablets can never be Laptops.`,
      questionTextHi: `कथन:
केवल कुछ Laptops, Computers हैं।
सभी Computers, Tablets हैं।
कोई Tablet, Mobile नहीं है।

निष्कर्ष:
I. कुछ Laptops, Computers नहीं हैं।
II. सभी Tablets कभी भी Laptops नहीं हो सकते।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Only a few & Negative Deductions',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `1. "Only a few Laptops are Computers" strictly implies BOTH "Some Laptops are Computers" AND "Some Laptops are NOT Computers". Therefore, Conclusion I is TRUE.
2. All Tablets can easily be accommodated inside Laptop without violating any rule. Hence Conclusion II ("All Tablets can never be Laptops") is FALSE.
Therefore, only Conclusion I follows.`,
      shortcutTrickEn: '"Only a few A is B" rule: Statement inherently contains negative conclusion "Some A are not B". Look for this direct conclusion first!',
      diagramSpec: diagram,
      options: [
        { id: `opt_syl_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_syl_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else {
    const diagram = generateSyllogismVennDiagram({
      title: 'Funds, Assets & Liabilities (Venn Representation)',
      setA: 'Funds',
      setB: 'Assets',
      relationType: 'ALL',
    });

    return {
      id: `q_syl_${qNum}`,
      sectionId: secId,
      questionNumber: qNum,
      orderInSection: orderInSec,
      questionTextEn: `Statements:
All Funds are Assets.
Only a few Assets are Liabilities.
Some Liabilities are Debts.

Conclusions:
I. Some Funds being Liabilities is a possibility.
II. No Asset is Debt.`,
      questionTextHi: `कथन:
सभी Funds, Assets हैं।
केवल कुछ Assets, Liabilities हैं।
कुछ Liabilities, Debts हैं।

निष्कर्ष:
I. कुछ Funds के Liabilities होने की संभावना है।
II. कोई Asset, Debt नहीं है।`,
      marks,
      negativeMarks,
      topic: 'Syllogism',
      subTopic: 'Possibility Conclusions',
      difficulty: 'MODERATE',
      avgIdealTimeSeconds: 25,
      conventionalSolutionEn: `1. Funds are inside Assets. Funds have no negative restriction with Liabilities. Thus, "Some Funds being Liabilities is a possibility" is TRUE.
2. Assets and Debts overlap partially through Liabilities. Definite negative statement "No Asset is Debt" is FALSE.
Therefore, only Conclusion I follows.`,
      shortcutTrickEn: 'Possibility Rule: When no negative relation is defined between two categories, possibility between them is always valid.',
      diagramSpec: diagram,
      options: [
        { id: `opt_syl2_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_syl2_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl2_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl2_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl2_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  }
}

export function generateInequalityQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  return {
    id: `q_ineq_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Statements: A ≥ B = C > D; E ≤ F < D

Conclusions:
I. A > E
II. B > F`,
    questionTextHi: `कथन: A ≥ B = C > D; E ≤ F < D

निष्कर्ष:
I. A > E
II. B > F`,
    marks,
    negativeMarks,
    topic: 'Inequalities',
    subTopic: 'Coded & Direct Open Gate',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `Connecting line: A ≥ B = C > D > F ≥ E
For I: Moving from A to E passes through '>' at C > D and D > F. Hence A > E is strictly TRUE.
For II: Moving from B to F: B = C > D > F. Both gates open with strict '>'. Hence B > F is strictly TRUE.
Both conclusions I and II follow.`,
    shortcutTrickEn: 'Open Gate Trick: The gate is open from A all the way to E (A ≥ B = C > D > F ≥ E) with strict > gates along the path. Both conclusions are instantaneously verified in <10 seconds.',
    options: [
      { id: `opt_ineq_${qNum}_A`, questionId: `q_ineq_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I', isCorrect: false },
      { id: `opt_ineq_${qNum}_B`, questionId: `q_ineq_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II', isCorrect: false },
      { id: `opt_ineq_${qNum}_C`, questionId: `q_ineq_${qNum}`, identifier: 'C', optionTextEn: 'Either I or II follows', optionTextHi: 'या तो I या II', isCorrect: false },
      { id: `opt_ineq_${qNum}_D`, questionId: `q_ineq_${qNum}`, identifier: 'D', optionTextEn: 'Neither I nor II follows', optionTextHi: 'न तो I न ही II', isCorrect: false },
      { id: `opt_ineq_${qNum}_E`, questionId: `q_ineq_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: true },
    ],
  };
}

// ---------------------------------------------------------------------------
// 6. GENERAL & BANKING AWARENESS
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
      qEn: 'Under the Reserve Bank of India (RBI) Priority Sector Lending (PSL) norms, what is the mandatory target for Domestic Commercial Banks (excluding RRBs & SFBs) as a percentage of Adjusted Net Bank Credit (ANBC)?',
      qHi: 'भारतीय रिज़र्व बैंक (RBI) के प्राथमिकता प्राप्त क्षेत्र ऋण (PSL) मानदंडों के तहत, समायोजित शुद्ध बैंक ऋण (ANBC) के प्रतिशत के रूप में घरेलू वाणिज्यिक बैंकों के लिए अनिवार्य लक्ष्य क्या है?',
      ans: '40%',
      options: ['32%', '40%', '45%', '50%', '75%'],
      sol: 'Domestic scheduled commercial banks are mandated to allocate 40% of their Adjusted Net Bank Credit (ANBC) or credit equivalent of off-balance sheet exposure, whichever is higher, to the priority sector.',
    },
    {
      qEn: 'Which section of the Negotiable Instruments Act, 1881 deals with the dishonour of cheques due to insufficiency of funds in the bank account?',
      qHi: 'परक्राम्य लिखत अधिनियम, 1881 की कौन सी धारा बैंक खाते में धन की अपर्याप्तता के कारण चेक के अनादर (Dishonour of Cheque) से संबंधित है?',
      ans: 'Section 138',
      options: ['Section 131', 'Section 138', 'Section 142', 'Section 25', 'Section 16'],
      sol: 'Section 138 of the Negotiable Instruments Act, 1881 makes the bouncing or dishonour of cheques for insufficiency of funds a criminal offence punishable with imprisonment or fine.',
    },
    {
      qEn: 'The Deposit Insurance and Credit Guarantee Corporation (DICGC), a wholly owned subsidiary of RBI, currently insures bank deposits up to what maximum limit per depositor per bank?',
      qHi: 'RBI की पूर्ण स्वामित्व वाली सहायक कंपनी DICGC वर्तमान में प्रति बैंक प्रति जमाकर्ता अधिकतम कितनी सीमा तक बैंक जमा का बीमा करती है?',
      ans: '₹5,00,000',
      options: ['₹1,00,000', '₹2,00,000', '₹5,00,000', '₹10,00,000', '₹25,00,000'],
      sol: 'DICGC provides insurance cover for all bank deposits (savings, fixed, current, recurring) up to a maximum limit of ₹5 Lakh per depositor per insured commercial/cooperative bank.',
    },
    {
      qEn: 'What is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) required to be maintained by Indian Scheduled Commercial Banks under RBI Basel III guidelines (excluding Capital Conservation Buffer)?',
      qHi: 'RBI बेसल III दिशानिर्देशों के तहत भारतीय अनुसूचित वाणिज्यिक बैंकों द्वारा बनाए रखने के लिए आवश्यक न्यूनतम पूंजी से जोखिम-भारित संपत्ति अनुपात (CRAR) क्या है?',
      ans: '9.0%',
      options: ['8.0%', '9.0%', '10.5%', '11.5%', '12.0%'],
      sol: 'Under RBI Basel III rules, Indian commercial banks are required to maintain a minimum CRAR of 9% (compared to the Basel Committee international baseline of 8%). With the 2.5% CCB, total minimum capital is 11.5%.',
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
    shortcutTrickEn: 'Direct memory retention: Core RBI static figures (40% PSL, Section 138 NI Act, ₹5 Lakh DICGC, 9% CRAR) appear in nearly every banking Mains paper.',
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

// ---------------------------------------------------------------------------
// 7. COMPUTER KNOWLEDGE (For RRB Mains & Office Assistant)
// ---------------------------------------------------------------------------

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
      qEn: 'In the OSI (Open Systems Interconnection) reference model, which layer is responsible for end-to-end communication, flow control, and error recovery (e.g., TCP)?',
      qHi: 'OSI संदर्भ मॉडल में, कौन सी परत एंड-टू-एंड संचार, प्रवाह नियंत्रण और त्रुटि सुधार के लिए जिम्मेदार है?',
      ans: 'Transport Layer',
      options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Session Layer', 'Application Layer'],
      sol: 'Layer 4 (Transport Layer) provides transparent transfer of data between end users, providing reliable data transfer services including TCP handshake and flow control.',
    },
    {
      qEn: 'Which of the following SQL statements belongs to the Data Definition Language (DDL)?',
      qHi: 'निम्नलिखित में से कौन सा SQL कथन डेटा डेफिनिशन लैंग्वेज (DDL) से संबंधित है?',
      ans: 'CREATE',
      options: ['SELECT', 'INSERT', 'UPDATE', 'CREATE', 'DELETE'],
      sol: 'DDL commands define or alter the database structure (CREATE, ALTER, DROP, TRUNCATE). In contrast, SELECT, INSERT, UPDATE, DELETE belong to Data Manipulation Language (DML).',
    },
    {
      qEn: 'What is the length (size in bits) of an IPv4 and IPv6 address respectively?',
      qHi: 'IPv4 और IPv6 पते की लंबाई (बिट्स में आकार) क्रमशः क्या है?',
      ans: '32 bits and 128 bits',
      options: ['16 bits and 64 bits', '32 bits and 64 bits', '32 bits and 128 bits', '64 bits and 128 bits', '128 bits and 256 bits'],
      sol: 'IPv4 addresses are 32-bit numeric values written as four decimal octets. IPv6 addresses are 128-bit hexadecimal strings.',
    },
    {
      qEn: 'What is the keyboard shortcut to insert a hyperlink in Microsoft Word / Excel?',
      qHi: 'Microsoft Word / Excel में हाइपरलिंक डालने के लिए कीबोर्ड शॉर्टकट क्या है?',
      ans: 'Ctrl + K',
      options: ['Ctrl + H', 'Ctrl + K', 'Ctrl + L', 'Ctrl + Shift + H', 'Alt + K'],
      sol: 'Ctrl + K opens the Insert Hyperlink dialog box across all Microsoft Office applications.',
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
    shortcutTrickEn: 'Elimination technique: Memorize standard OSI layers bottom-up (Physical, Data, Network, Transport, Session, Presentation, Application) and 32/128 bit standards.',
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

// ---------------------------------------------------------------------------
// 8. PO PRELIMS APPROXIMATION GENERATOR
// ---------------------------------------------------------------------------

export function generateDynamicApproximationQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25,
  seed: number = 20251030
): Question {
  const rng = createRng(seed + qNum * 53);

  // Exact numbers: 24.98% of 799.89 + sqrt(575.92) - (14.02 * 4.99)
  // Round to: 25% of 800 + sqrt(576) - (14 * 5)
  // = 200 + 24 - 70 = 154
  const correctVal = 154;
  // Realistic calculation traps:
  // Trap 1: 174 (Added 70 instead of subtracting)
  // Trap 2: 138 (Miscomputed sqrt(576) as 22 or 25% of 800 as 180)
  // Trap 3: 165 (Miscomputed 14*5 as 60)
  // Trap 4: 148 (Off-by-6 arithmetic slip)
  const trapChoices = [154, 174, 138, 165, 148].sort((a, b) => a - b);
  const correctIdx = trapChoices.indexOf(correctVal);

  return {
    id: `q_approx_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `What approximate value should come in place of the question mark (?) in the following equation? (You are not expected to calculate the exact value.)\n\n$24.98\\% \\text{ of } 799.89 + \\sqrt{575.92} - (14.02 \\times 4.99) = ?$`,
    questionTextHi: `निम्नलिखित समीकरण में प्रश्न चिह्न (?) के स्थान पर क्या सन्निकट (लगभग) मान आना चाहिए? (आपसे सटीक मान की गणना करने की अपेक्षा नहीं की जाती है।)\n\n$24.98\\% \\text{ का } 799.89 + \\sqrt{575.92} - (14.02 \\times 4.99) = ?$`,
    marks,
    negativeMarks,
    topic: 'Approximation & Calculation',
    subTopic: 'PO Prelims Speed Approximation',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: `Step 1: Round off the terms to nearest integers:
- 24.98% ≈ 25% = 1/4
- 799.89 ≈ 800
- √575.92 ≈ √576 = 24
- 14.02 ≈ 14
- 4.99 ≈ 5

Step 2: Substitute and compute using BODMAS:
= (1/4 × 800) + 24 - (14 × 5)
= 200 + 24 - 70
= 224 - 70 = 154.`,
    shortcutTrickEn: `Approximation Rule: In PO exams, always round decimals (.98, .02) to the nearest integer immediately. Beware of the common trap of adding 70 instead of subtracting it (producing distractor 174)!`,
    options: trapChoices.map((choice, i) => ({
      id: `opt_approx_${qNum}_${i}`,
      questionId: `q_approx_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: choice.toString(),
      optionTextHi: choice.toString(),
      isCorrect: i === correctIdx,
    })),
  };
}

// ---------------------------------------------------------------------------
// 9. WRONG NUMBER SERIES GENERATOR
// ---------------------------------------------------------------------------

export function generateWrongNumberSeriesQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  // Pattern: *2 + 1, *2 + 2, *2 + 3, *2 + 4, *2 + 5
  // Correct sequence: 14 -> 29 -> 60 -> 123 -> 250 -> 505
  // Wrong number inserted: 248 instead of 250!
  const terms = ['14', '29', '60', '123', '248', '505'];
  const wrongTerm = '248';
  const optionsList = ['29', '60', '123', '248', '505'];
  const correctIdx = optionsList.indexOf(wrongTerm);

  return {
    id: `q_wrong_ser_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `In the following number series, one number is wrong. Find out the incorrect / wrong number:\n\n$14, \\quad 29, \\quad 60, \\quad 123, \\quad 248, \\quad 505$`,
    questionTextHi: `निम्नलिखित संख्या श्रृंखला में एक संख्या गलत है। गलत संख्या ज्ञात कीजिए:\n\n$14, \\quad 29, \\quad 60, \\quad 123, \\quad 248, \\quad 505$`,
    marks,
    negativeMarks,
    topic: 'Wrong Number Series',
    subTopic: 'Multiplication + Increasing Constant Pattern',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 35,
    conventionalSolutionEn: `Analyzing the pattern of consecutive terms:
- 14 × 2 + 1 = 29
- 29 × 2 + 2 = 60
- 60 × 2 + 3 = 123
- 123 × 2 + 4 = 250 (Given: 248 ❌)
- 250 × 2 + 5 = 505

Therefore, 248 is wrong and must be replaced by 250.`,
    shortcutTrickEn: 'Pattern: Term_{n+1} = (Term_n × 2) + n. Check the units digit: (3 × 2) + 4 = 0, so the 4th term must end in 0. 248 ends in 8, directly exposing it as the wrong number.',
    options: optionsList.map((opt, i) => ({
      id: `opt_wser_${qNum}_${i}`,
      questionId: `q_wrong_ser_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt,
      optionTextHi: opt,
      isCorrect: i === correctIdx,
    })),
  };
}

// ---------------------------------------------------------------------------
// 10. DIRECTION SENSE WITH SVG DIAGRAM
// ---------------------------------------------------------------------------

export function generateDirectionSenseQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const diagram = generateDirectionPathDiagram({
    title: 'Candidate Walk Path from Point A to Point C',
    points: [
      { id: 'A', x: 220, y: 280, label: 'Point A (Start)' },
      { id: 'B', x: 220, y: 140, label: 'Point B' },
      { id: 'C', x: 380, y: 140, label: 'Point C (End)' },
    ],
    connections: [
      { from: 'A', to: 'B', distance: '12m North' },
      { from: 'B', to: 'C', distance: '16m East' },
    ],
    shortestDistance: { from: 'A', to: 'C', distance: '20m (Hypotenuse)' },
  });

  const optionsList = [
    { text: '20m, North-East', isCorrect: true },
    { text: '28m, North-East', isCorrect: false }, // Trap: 12 + 16 direct sum
    { text: '20m, South-East', isCorrect: false },
    { text: '24m, North', isCorrect: false },
    { text: '16m, East', isCorrect: false },
  ];

  return {
    id: `q_dir_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `A candidate starts walking from Point A and travels 12m towards the North to reach Point B. From Point B, he takes a 90° right turn and walks 16m towards the East to reach Point C.\n\nWhat is the shortest distance between Point A and Point C, and in which direction is Point C with respect to Point A?`,
    questionTextHi: `एक उम्मीदवार बिंदु A से चलना शुरू करता है और बिंदु B तक पहुंचने के लिए उत्तर की ओर 12 मीटर जाता है। बिंदु B से, वह 90° दाएं मुड़ता है और बिंदु C तक पहुंचने के लिए पूर्व की ओर 16 मीटर चलता है।\n\nबिंदु A और बिंदु C के बीच की न्यूनतम दूरी क्या है, और बिंदु A के संदर्भ में बिंदु C किस दिशा में है?`,
    marks,
    negativeMarks,
    topic: 'Direction & Distance Sense',
    subTopic: 'Pythagorean Triplet & Cardinal Directions',
    difficulty: 'EASY',
    avgIdealTimeSeconds: 25,
    conventionalSolutionEn: `By applying Pythagoras Theorem in right-angled triangle ABC:
$AC^2 = AB^2 + BC^2$
$AC^2 = 12^2 + 16^2 = 144 + 256 = 400$
$AC = \\sqrt{400} = 20\\text{m}$.

Direction: Starting from origin A, Point C lies to the North and East. Hence, Point C is in the North-East direction with respect to Point A.`,
    shortcutTrickEn: 'Pythagorean Triplet Shortcut: Recognize the standard 3:4:5 right triangle scaled by 4 (3×4=12, 4×4=16, 5×4=20). The hypotenuse is instantly 20m without squaring large numbers.',
    diagramSpec: diagram,
    options: optionsList.map((opt, i) => ({
      id: `opt_dir_${qNum}_${i}`,
      questionId: `q_dir_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text.replace('North-East', 'उत्तर-पूर्व').replace('South-East', 'दक्षिण-पूर्व').replace('North', 'उत्तर').replace('East', 'पूर्व'),
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 11. BLOOD RELATION WITH FAMILY TREE SVG
// ---------------------------------------------------------------------------

export function generateBloodRelationQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const diagram = generateFamilyTreeDiagram({
    title: '3-Generation Family Tree Diagram',
    members: [
      { id: 'A', name: 'A', gender: 'M', gen: 1, x: 230 },
      { id: 'B', name: 'B', gender: 'F', gen: 1, x: 370 },
      { id: 'C', name: 'C', gender: 'M', gen: 2, x: 230 },
      { id: 'E', name: 'E', gender: 'F', gen: 2, x: 370 },
      { id: 'D', name: 'D', gender: 'F', gen: 2, x: 490 },
      { id: 'F', name: 'F', gender: 'F', gen: 3, x: 230 },
      { id: 'G', name: 'G', gender: 'M', gen: 3, x: 370 },
    ],
    couples: [
      { p1: 'A', p2: 'B' },
      { p1: 'C', p2: 'E' },
    ],
    siblings: [
      { from: 'C', to: 'D' },
      { from: 'F', to: 'G' },
    ],
    parentChild: [
      { parentId: 'A', childId: 'C' },
      { parentId: 'C', childId: 'F' },
      { parentId: 'C', childId: 'G' },
    ],
  });

  const optionsList = [
    { text: 'Grandson', isCorrect: true },
    { text: 'Son', isCorrect: false },
    { text: 'Brother', isCorrect: false },
    { text: 'Father', isCorrect: false },
    { text: 'Nephew', isCorrect: false },
  ];

  return {
    id: `q_br_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Read the following information carefully:\n- In a family of seven members, A is married to B.\n- C is the only son of A.\n- D is the sister of C.\n- C is married to E.\n- F is the daughter of C and E.\n- G is the brother of F.\n\nHow is G related to A?`,
    questionTextHi: `निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन करें:\n- सात सदस्यों के एक परिवार में, A का विवाह B से हुआ है।\n- C, A का इकलौता पुत्र है।\n- D, C की बहन है।\n- C का विवाह E से हुआ है।\n- F, C और E की पुत्री है।\n- G, F का भाई है।\n\nG का A से क्या संबंध है?`,
    marks,
    negativeMarks,
    topic: 'Blood Relations',
    subTopic: '3-Generation Family Tree',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 30,
    conventionalSolutionEn: `Step 1: Gen 1: A [Male] = B [Female] (Married couple).
Step 2: Gen 2: C is the son of A. C is married to E. D is C's sister.
Step 3: Gen 3: F is the daughter of C & E. G is the brother of F (hence G is male).
Conclusion: G is the son of C, and C is the son of A. Therefore, G is the Grandson (पोता) of A.`,
    shortcutTrickEn: 'Tier Diagram: Draw 3 distinct horizontal lines for Generations I, II, and III. Place A at Gen I, C at Gen II, and G at Gen III. G is male (+), directly giving Grandson.',
    diagramSpec: diagram,
    options: optionsList.map((opt, i) => ({
      id: `opt_br_${qNum}_${i}`,
      questionId: `q_br_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text === 'Grandson' ? 'पोता (Grandson)' : opt.text === 'Son' ? 'पुत्र' : opt.text === 'Brother' ? 'भाई' : opt.text === 'Father' ? 'पिता' : 'भतीजा/भांजा',
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 12. QUANTITY I & QUANTITY II COMPARISON (Mains & PO Prelims)
// ---------------------------------------------------------------------------

export function generateQuantityComparisonQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const optionsList = [
    { text: 'Quantity I > Quantity II', isCorrect: false },
    { text: 'Quantity I < Quantity II', isCorrect: true },
    { text: 'Quantity I ≥ Quantity II', isCorrect: false },
    { text: 'Quantity I ≤ Quantity II', isCorrect: false },
    { text: 'Quantity I = Quantity II or relationship cannot be established', isCorrect: false },
  ];

  return {
    id: `q_qty_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `In the question below, two quantities labeled Quantity I and Quantity II are given. You have to find the value of both quantities and establish the mathematical relationship between them:\n\nQuantity I: A car travels a distance of 240 km at a uniform speed of 60 km/h. Find the time taken by the car.\n\nQuantity II: A train travels a distance of 350 km at a uniform speed of 70 km/h. Find the time taken by the train.`,
    questionTextHi: `नीचे दिए गए प्रश्न में मात्रा I और मात्रा II के रूप में दो मात्राएँ दी गई हैं। दोनों का मान ज्ञात करें और उनके बीच संबंध स्थापित करें:\n\nमात्रा I: एक कार 60 किमी/घंटा की समान गति से 240 किमी की दूरी तय करती है। कार द्वारा लिया गया समय ज्ञात कीजिए।\n\nमात्रा II: एक ट्रेन 70 किमी/घंटा की समान गति से 350 किमी की दूरी तय करती है। ट्रेन द्वारा लिया गया समय ज्ञात कीजिए।`,
    marks,
    negativeMarks,
    topic: 'Quantity I vs Quantity II',
    subTopic: 'Time, Speed & Distance Comparison',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 30,
    conventionalSolutionEn: `Calculation for Quantity I:
Time = Distance / Speed = 240 / 60 = 4 hours.

Calculation for Quantity II:
Time = Distance / Speed = 350 / 70 = 5 hours.

Comparison: 4 hours < 5 hours.
Therefore, Quantity I < Quantity II.`,
    shortcutTrickEn: 'Direct ratio check: Q1 = 24/6 = 4, Q2 = 35/7 = 5. Since 4 < 5, Q1 < Q2 directly.',
    options: optionsList.map((opt, i) => ({
      id: `opt_qty_${qNum}_${i}`,
      questionId: `q_qty_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text === 'Quantity I = Quantity II or relationship cannot be established' ? 'मात्रा I = मात्रा II अथवा संबंध स्थापित नहीं किया जा सकता' : opt.text.replace('Quantity', 'मात्रा'),
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 13. DATA SUFFICIENCY (2 Statements)
// ---------------------------------------------------------------------------

export function generateDataSufficiencyQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const optionsList = [
    { text: 'Statement I alone is sufficient to answer the question, but Statement II alone is not sufficient.', isCorrect: false },
    { text: 'Statement II alone is sufficient to answer the question, but Statement I alone is not sufficient.', isCorrect: false },
    { text: 'Either Statement I alone or Statement II alone is sufficient to answer the question.', isCorrect: false },
    { text: 'Neither Statement I nor Statement II is sufficient to answer the question.', isCorrect: false },
    { text: 'Both Statements I and II together are necessary to answer the question.', isCorrect: true },
  ];

  return {
    id: `q_ds_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `The question below is followed by two statements numbered I and II. You have to decide whether the data provided in the statements are sufficient to answer the question:\n\nWhat is the two-digit number?\n\nStatement I: The sum of the two digits of the number is 9.\nStatement II: The difference between the number and the number obtained by interchanging its digits is 27.`,
    questionTextHi: `नीचे दिए गए प्रश्न के बाद दो कथन I और II दिए गए हैं। आपको यह निर्णय लेना है कि कथनों में दिया गया डेटा प्रश्न का उत्तर देने के लिए पर्याप्त है या नहीं:\n\nदो अंकों की संख्या क्या है?\n\nकथन I: संख्या के दोनों अंकों का योग 9 है।\nकथन II: संख्या और उसके अंकों को आपस में बदलने पर प्राप्त संख्या के बीच का अंतर 27 है।`,
    marks,
    negativeMarks,
    topic: 'Data Sufficiency',
    subTopic: 'Number System & 2-Statement Sufficiency',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 35,
    conventionalSolutionEn: `Let the two-digit number be 10x + y, where x is tens digit and y is units digit.

From Statement I:
x + y = 9
Possible numbers: 18, 27, 36, 45, 54, 63, 72, 81, 90.
Hence, Statement I alone is NOT sufficient.

From Statement II:
(10x + y) - (10y + x) = 27
=> 9(x - y) = 27
=> x - y = 3
Possible numbers: 30, 41, 52, 63, 74, 85, 96.
Hence, Statement II alone is NOT sufficient.

Combining Statements I and II:
x + y = 9
x - y = 3
Adding both: 2x = 12 => x = 6.
Substituting in I: 6 + y = 9 => y = 3.
The number is unique: 63.
Therefore, BOTH Statements I and II together are necessary to answer the question.`,
    shortcutTrickEn: 'Data Sufficiency Rule: You do not need to calculate the final number completely! As soon as you establish that two independent linear equations (x+y=9 and x-y=3) exist for two variables, unique solvability is guaranteed.',
    options: optionsList.map((opt, i) => ({
      id: `opt_ds_${qNum}_${i}`,
      questionId: `q_ds_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text.replace('Statement', 'कथन').replace('alone is sufficient', 'अकेले पर्याप्त है').replace('Both Statements I and II together are necessary', 'दोनों कथन I और II मिलकर उत्तर देने के लिए आवश्यक हैं'),
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 14. MULTI-STATEMENT BANKING & REVISION CAPSULE
// ---------------------------------------------------------------------------

export function generateMultiStatementBankingQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const optionsList = [
    { text: 'Only I and II are correct', isCorrect: true },
    { text: 'Only II and III are correct', isCorrect: false },
    { text: 'Only I and III are correct', isCorrect: false },
    { text: 'All I, II and III are correct', isCorrect: false },
    { text: 'None of the above', isCorrect: false },
  ];

  return {
    id: `q_multi_ga_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Consider the following statements regarding the Reserve Bank of India's Monetary Policy Committee (MPC):\n\nI. The MPC comprises six members: three from the RBI and three external members appointed by the Central Government.\nII. The Governor of the RBI acts as the ex-officio Chairperson of the MPC and possesses a casting vote in the event of a tie.\nIII. The MPC is statutory mandated under the RBI Act, 1934 to hold its policy meeting at least twice in every financial year.\n\nWhich of the above statements is/are correct?`,
    questionTextHi: `भारतीय रिज़र्व बैंक की मौद्रिक नीति समिति (MPC) के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n\nI. MPC में छह सदस्य होते हैं: तीन RBI से और तीन केंद्र सरकार द्वारा नियुक्त बाहरी सदस्य।\nII. RBI के गवर्नर MPC के पदेन अध्यक्ष के रूप में कार्य करते हैं और मत बराबरी की स्थिति में उनके पास निर्णायक मत (Casting Vote) होता है।\nIII. RBI अधिनियम, 1934 के तहत MPC को प्रत्येक वित्तीय वर्ष में कम से कम दो बार अपनी नीतिगत बैठक आयोजित करना वैधानिक रूप से अनिवार्य है।\n\nउपर्युक्त कथनों में से कौन-सा/से सही है/हैं?`,
    marks,
    negativeMarks,
    topic: 'Banking & Financial Awareness',
    subTopic: 'RBI Monetary Policy Framework',
    difficulty: 'HARD',
    avgIdealTimeSeconds: 30,
    conventionalSolutionEn: `Statement I is CORRECT: Under Section 45ZB of the amended RBI Act, 1934, the MPC comprises 6 members (3 from RBI including Governor, Deputy Governor, and one nominated official; and 3 external experts appointed by the Central Government for a 4-year tenure).
Statement II is CORRECT: The RBI Governor is the ex-officio Chairperson and exercises a casting vote in case of equal division of votes.
Statement III is INCORRECT: Under Section 45ZI of the RBI Act, the MPC is mandated to meet at least FOUR times in a year (not twice).

Therefore, only Statements I and II are correct.

══════════════════════════════════════════════════
★ COMPLETE REVISION CAPSULE: RBI MONETARY POLICY ★
══════════════════════════════════════════════════
• Enacted under: RBI Act, 1934 (amended by Finance Act 2016)
• Inflation Target: 4% with a tolerance band of +/- 2% (2% to 6%)
• Quorum for MPC meeting: 4 members
• Decision rule: Majority vote, Governor has casting vote
• Frequency: Minimum 4 meetings per financial year (bi-monthly pattern)
• Monetary Policy Instruments: Repo Rate, Reverse Repo, Standing Deposit Facility (SDF), Marginal Standing Facility (MSF), CRR, SLR.`,
    shortcutTrickEn: 'Fact recall: RBI MPC meetings take place Bi-Monthly (every 2 months = 6 times a year), with the legal statutory floor set at 4 times/year.',
    options: optionsList.map((opt, i) => ({
      id: `opt_mga_${qNum}_${i}`,
      questionId: `q_multi_ga_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text.replace('Only I and II are correct', 'केवल I और II सही हैं').replace('Only II and III are correct', 'केवल II और III सही हैं').replace('All I, II and III are correct', 'सभी I, II और III सही हैं').replace('None of the above', 'इनमें से कोई नहीं'),
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 15. ENGLISH ERROR SPOTTING WITH GRAMMAR RULES
// ---------------------------------------------------------------------------

export function generateEnglishErrorSpottingQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const optionsList = [
    { text: '(A) The chief executive officer', isCorrect: false },
    { text: '(B) along with his senior directors', isCorrect: false },
    { text: '(C) have attended the annual banking conclave', isCorrect: true },
    { text: '(D) held at Mumbai yesterday', isCorrect: false },
    { text: '(E) No Error', isCorrect: false },
  ];

  return {
    id: `q_eng_err_${qNum}`,
    sectionId: secId,
    questionNumber: qNum,
    orderInSection: orderInSec,
    questionTextEn: `Read the sentence below to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence. If there is no error, mark 'No Error' (E) as your answer:\n\nThe chief executive officer (A) / along with his senior directors (B) / have attended the annual banking conclave (C) / held at Mumbai yesterday. (D) / No Error (E)`,
    questionTextHi: `निम्नलिखित वाक्य को ध्यान से पढ़ें और पहचानें कि किस भाग में व्याकरण संबंधी त्रुटि है:\n\nThe chief executive officer (A) / along with his senior directors (B) / have attended the annual banking conclave (C) / held at Mumbai yesterday. (D) / No Error (E)`,
    marks,
    negativeMarks,
    topic: 'English Language',
    subTopic: 'Subject-Verb Agreement Rule',
    difficulty: 'MODERATE',
    avgIdealTimeSeconds: 20,
    conventionalSolutionEn: `Error is in Part (C): Replace 'have attended' with 'has attended'.

GRAMMATICAL RULE CITATION:
When two subjects are connected using phrases such as 'along with', 'as well as', 'together with', 'with', 'in addition to', 'accompanied by', or 'and not', the verb MUST agree in number and person with the FIRST SUBJECT.

Here, the first subject is 'The chief executive officer' which is SINGULAR. Therefore, the verb must be singular ('has attended', not 'have attended').`,
    shortcutTrickEn: 'Golden Grammar Rule: Ignore parenthetical phrases enclosed between "along with / as well as" when locating the real grammatical subject.',
    options: optionsList.map((opt, i) => ({
      id: `opt_eng_err_${qNum}_${i}`,
      questionId: `q_eng_err_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text,
      isCorrect: opt.isCorrect,
    })),
  };
}

// ---------------------------------------------------------------------------
// 16. RRB MAINS HINDI LANGUAGE QUESTION
// ---------------------------------------------------------------------------

export function generateRRBMainsHindiQuestion(
  qNum: number,
  orderInSec: number,
  secId: string,
  marks: number = 1.0,
  negativeMarks: number = 0.25
): Question {
  const optionsList = [
    { text: 'अत्यधिक भयभीत या घबरा जाना', isCorrect: true },
    { text: 'बहुत अधिक क्रोधित होना', isCorrect: false },
    { text: 'बीमार पड़ जाना', isCorrect: false },
    { text: 'अत्यधिक प्रसन्न होना', isCorrect: false },
    { text: 'कड़ी मेहनत करना', isCorrect: false },
  ];

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
    options: optionsList.map((opt, i) => ({
      id: `opt_rrb_hi_${qNum}_${i}`,
      questionId: `q_rrb_hi_${qNum}`,
      identifier: (['A', 'B', 'C', 'D', 'E'] as const)[i],
      optionTextEn: opt.text,
      optionTextHi: opt.text,
      isCorrect: opt.isCorrect,
    })),
  };
}
