import { Question, Option, QuestionGroup, QuestionDifficulty, SectionType } from '@/types/exam';

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
      options: [
        { id: `opt_syl_${qNum}_A`, questionId: `q_syl_${qNum}`, identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
        { id: `opt_syl_${qNum}_B`, questionId: `q_syl_${qNum}`, identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_C`, questionId: `q_syl_${qNum}`, identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_D`, questionId: `q_syl_${qNum}`, identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
        { id: `opt_syl_${qNum}_E`, questionId: `q_syl_${qNum}`, identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: false },
      ],
    };
  } else {
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
