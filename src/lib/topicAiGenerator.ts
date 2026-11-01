// src/lib/topicAiGenerator.ts

import { z } from 'zod';
import {
  DifficultyLevel,
  TopicPracticeQuestionData,
} from '@/types/topicPractice';
import { getTopicBySlug } from '@/data/syllabusTaxonomy';
import { Question, QuestionGroup } from '@/types/exam';
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
  generateAlphanumericGroup,
  generateMiscReasoningQuestion,
  generatePuzzleGroup,
  generateDynamicDIGroup,
  generateReadingComprehensionGroup,
  generateEnglishErrorSpottingQuestion,
  generateClozeTestGroup,
  generateParaJumbleGroup,
  generateWordSwapQuestion,
  generateDoubleFillerQuestion,
  generateSentenceConnectorQuestion,
  generateBankingAwarenessQuestion,
  generateComputerKnowledgeQuestion,
  generateQuantityComparisonQuestion,
  generateDataSufficiencyQuestion,
  generateMachineInputOutputQuestion,
  generateCriticalReasoningQuestion,
  generateReasoningDataSufficiencyQuestion,
  generateRRBMainsHindiQuestion,
  createRng,
  randInt,
  ArithmeticSlot,
} from '@/lib/generator/bankQuestionBank';

// ============================================================================
// 1. ZOD SCHEMAS FOR STRUCTURED VALIDATION
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
// 2. HELPER FUNCTIONS FOR QUESTION CREATION & CONVERSION
// ============================================================================

export function convertQuestionToTopicPracticeData(
  q: Question,
  topicSlug: string,
  difficulty: DifficultyLevel,
  commonContextEn?: string,
  commonContextHi?: string
): TopicPracticeQuestionData {
  const correctOpt = q.options.find((o) => o.isCorrect)?.identifier || 'A';
  const examTag =
    difficulty === 'LEVEL_1_CLERK_PRE'
      ? 'SBI/IBPS Clerk Prelims Style'
      : difficulty === 'LEVEL_2_PO_PRE'
      ? 'SBI/IBPS PO Prelims Style'
      : 'SBI/IBPS Mains Analytical Drill';

  return {
    id: q.id,
    topicSlug,
    difficulty,
    examTag,
    conceptTag: q.subTopic || q.topic || 'Concept Drill',
    commonContextEn: commonContextEn || undefined,
    commonContextHi: commonContextHi || undefined,
    questionEn: q.questionTextEn,
    questionHi: q.questionTextHi || q.questionTextEn,
    options: q.options.map((opt) => ({
      id: opt.identifier,
      textEn: opt.optionTextEn,
      textHi: opt.optionTextHi || opt.optionTextEn,
    })),
    correctOption: correctOpt,
    conventionalSolEn: q.conventionalSolutionEn || 'Standard step-by-step mathematical/logical evaluation.',
    conventionalSolHi: q.conventionalSolutionHi || q.conventionalSolutionEn || 'मानक चरण-दर-चरण समाधान।',
    examShortcutEn: q.shortcutTrickEn || 'Direct calculation in minimal steps.',
    examShortcutHi: q.shortcutTrickHi || q.shortcutTrickEn || 'न्यूनतम चरणों में सीधा समाधान।',
    idealTimeSeconds: q.avgIdealTimeSeconds || 30,
  };
}

function makeTopicQuestion(params: {
  id: string;
  topicSlug: string;
  difficulty: DifficultyLevel;
  examTag: string;
  conceptTag: string;
  questionEn: string;
  questionHi: string;
  correctVal: string | number;
  distractors: (string | number)[];
  qNum: number;
  conventionalSolEn: string;
  conventionalSolHi: string;
  examShortcutEn: string;
  examShortcutHi: string;
  idealTimeSeconds?: number;
}): TopicPracticeQuestionData {
  const strCorrect = params.correctVal.toString();
  const rawUnique: string[] = [strCorrect];
  for (const d of params.distractors) {
    const s = d.toString();
    if (!rawUnique.includes(s) && rawUnique.length < 5) {
      rawUnique.push(s);
    }
  }
  let fillOffset = 1;
  const num = typeof params.correctVal === 'number' ? params.correctVal : parseInt(strCorrect, 10);
  while (rawUnique.length < 5) {
    if (!isNaN(num)) {
      const candidate = (num + fillOffset * 7).toString();
      if (!rawUnique.includes(candidate)) rawUnique.push(candidate);
    } else {
      rawUnique.push(`Option ${rawUnique.length + 1}`);
    }
    fillOffset++;
  }

  // Rotate target position across 0, 1, 2, 3, 4 (A, B, C, D, E) based on qNum
  const targetPos = Math.abs(params.qNum * 2 + 1) % 5;
  const finalOptions: { id: 'A' | 'B' | 'C' | 'D' | 'E'; textEn: string; textHi: string }[] = new Array(5);
  const identifiers: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];

  finalOptions[targetPos] = {
    id: identifiers[targetPos],
    textEn: strCorrect,
    textHi: strCorrect,
  };

  const others = rawUnique.filter((x) => x !== strCorrect);
  let otherIdx = 0;
  for (let i = 0; i < 5; i++) {
    if (i !== targetPos) {
      finalOptions[i] = {
        id: identifiers[i],
        textEn: others[otherIdx],
        textHi: others[otherIdx],
      };
      otherIdx++;
    }
  }

  return {
    id: params.id,
    topicSlug: params.topicSlug,
    difficulty: params.difficulty,
    examTag: params.examTag,
    conceptTag: params.conceptTag,
    questionEn: params.questionEn,
    questionHi: params.questionHi,
    options: finalOptions,
    correctOption: identifiers[targetPos],
    conventionalSolEn: params.conventionalSolEn,
    conventionalSolHi: params.conventionalSolHi,
    examShortcutEn: params.examShortcutEn,
    examShortcutHi: params.examShortcutHi,
    idealTimeSeconds: params.idealTimeSeconds || 35,
  };
}

// ============================================================================
// 3. DYNAMIC ARITHMETIC GENERATORS (MULTI-ARCHETYPE PER TOPIC)
// ============================================================================

function generateAuthenticPercentageQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel
): TopicPracticeQuestionData {
  const rng = createRng(qSeed);
  const archetype = index % 5;
  const examTag = difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims' : difficulty === 'LEVEL_2_PO_PRE' ? 'IBPS PO Prelims' : 'SBI PO Mains';
  const qId = `pct_${difficulty.toLowerCase()}_${qNum}`;

  if (archetype === 0) {
    // Election & Margin
    const totalVotes = randInt(15, 45, rng) * 1000;
    const winPct = [54, 56, 58, 62, 65, 68][randInt(0, 5, rng)];
    const losePct = 100 - winPct;
    const marginPct = winPct - losePct;
    const marginVotes = Math.round((totalVotes * marginPct) / 100);

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'percentage',
      difficulty,
      examTag,
      conceptTag: 'Election & Valid Votes',
      questionEn: `In an election between two candidates, the winner secures ${winPct}% of the valid votes and defeats his opponent by a majority of ${marginVotes.toLocaleString()} votes. What was the total number of valid votes cast?`,
      questionHi: `दो उम्मीदवारों के बीच एक चुनाव में, विजेता को वैध मतों का ${winPct}% प्राप्त हुआ और उसने अपने प्रतिद्वंद्वी को ${marginVotes.toLocaleString()} मतों के बहुमत से हराया। डाले गए वैध मतों की कुल संख्या क्या थी?`,
      correctVal: totalVotes.toLocaleString(),
      distractors: [
        (totalVotes + 5000).toLocaleString(),
        (totalVotes - 5000).toLocaleString(),
        (totalVotes + 10000).toLocaleString(),
        (totalVotes - 8000).toLocaleString(),
      ],
      qNum,
      conventionalSolEn: `Winner share = ${winPct}%, Loser share = ${losePct}%. Margin = ${marginPct}%. Total votes = (${marginVotes} / ${marginPct}) × 100 = ${totalVotes.toLocaleString()}.`,
      conventionalSolHi: `विजेता = ${winPct}%, पराजित = ${losePct}%. अंतर = ${marginPct}%. कुल मत = (${marginVotes} / ${marginPct}) × 100 = ${totalVotes.toLocaleString()}.`,
      examShortcutEn: `Direct percentage gap: (${winPct} - ${losePct})% = ${marginPct}%. Total = Margin / ${marginPct}%.`,
      examShortcutHi: `प्रत्यक्ष प्रतिशत अंतर: (${winPct} - ${losePct})% = ${marginPct}%. कुल = अंतर / ${marginPct}%.`,
      idealTimeSeconds: 30,
    });
  } else if (archetype === 1) {
    // Price & Consumption
    const priceHike = [20, 25, 50][randInt(0, 2, rng)];
    const reductionPct = priceHike === 20 ? 16.67 : priceHike === 25 ? 20 : 33.33;

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'percentage',
      difficulty,
      examTag,
      conceptTag: 'Price, Consumption & Expenditure',
      questionEn: `If the price of petrol increases by ${priceHike}%, by what percentage must a motorist reduce his consumption so that the overall expenditure on petrol remains unchanged?`,
      questionHi: `यदि पेट्रोल की कीमत में ${priceHike}% की वृद्धि होती है, तो एक मोटर चालक को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि पेट्रोल पर कुल खर्च अपरिवर्तित रहे?`,
      correctVal: `${reductionPct}%`,
      distractors: [`${priceHike}%`, `${(reductionPct + 3.33).toFixed(2)}%`, `${(reductionPct - 4.2).toFixed(2)}%`, '25%'],
      qNum,
      conventionalSolEn: `Let original price = 100, new price = ${100 + priceHike}. Reduction required = [${priceHike} / ${100 + priceHike}] × 100 = ${reductionPct}%.`,
      conventionalSolHi: `प्रारंभिक मूल्य = 100, नया मूल्य = ${100 + priceHike}. आवश्यक कमी = [${priceHike} / ${100 + priceHike}] × 100 = ${reductionPct}%.`,
      examShortcutEn: `Shortcut Formula: [R / (100 + R)] × 100%. For +${priceHike}%, fraction is 1/${priceHike === 20 ? '5 ➔ 1/6 (16.67%)' : priceHike === 25 ? '4 ➔ 1/5 (20%)' : '2 ➔ 1/3 (33.33%)'}.`,
      examShortcutHi: `शॉर्टकट सूत्र: [R / (100 + R)] × 100%.`,
      idealTimeSeconds: 20,
    });
  } else if (archetype === 2) {
    // Examination Passing Marks
    const maxMarks = randInt(4, 8, rng) * 100;
    const passPct = 40;
    const passMarks = (maxMarks * passPct) / 100;
    const aScorePct = 32;
    const aScore = (maxMarks * aScorePct) / 100;
    const aFailBy = passMarks - aScore;

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'percentage',
      difficulty,
      examTag,
      conceptTag: 'Passing Marks & Cutoff Analysis',
      questionEn: `A candidate secured ${aScorePct}% marks in an examination and failed by ${aFailBy} marks. If the minimum passing percentage is ${passPct}%, what is the maximum aggregate score of the examination?`,
      questionHi: `एक अभ्यर्थी ने एक परीक्षा में ${aScorePct}% अंक प्राप्त किए और वह ${aFailBy} अंकों से अनुत्तीर्ण हो गया। यदि न्यूनतम उत्तीर्ण प्रतिशत ${passPct}% है, तो परीक्षा का अधिकतम कुल पूर्णांक क्या है?`,
      correctVal: `${maxMarks}`,
      distractors: [`${maxMarks + 100}`, `${maxMarks - 100}`, `${maxMarks + 150}`, `${maxMarks - 50}`],
      qNum,
      conventionalSolEn: `Difference between pass percentage and scored percentage: ${passPct}% - ${aScorePct}% = ${passPct - aScorePct}%. Hence ${passPct - aScorePct}% corresponds to ${aFailBy} marks. Total = (${aFailBy} / ${passPct - aScorePct}) × 100 = ${maxMarks}.`,
      conventionalSolHi: `उत्तीर्ण और प्राप्त प्रतिशत का अंतर: ${passPct}% - ${aScorePct}% = ${passPct - aScorePct}%. अतः कुल अंक = (${aFailBy} / ${passPct - aScorePct}) × 100 = ${maxMarks}.`,
      examShortcutEn: `Deficit percentage = ${passPct - aScorePct}% = ${aFailBy} marks. 1% = ${aFailBy / (passPct - aScorePct)}. 100% = ${maxMarks}.`,
      examShortcutHi: `अंतर = ${passPct - aScorePct}% = ${aFailBy} अंक. 100% = ${maxMarks}.`,
      idealTimeSeconds: 25,
    });
  } else if (archetype === 3) {
    // Population Successive Change
    const initialPop = randInt(20, 50, rng) * 1000;
    const r1 = 10;
    const r2 = 20;
    const finalPop = Math.round(initialPop * (1 + r1 / 100) * (1 - r2 / 100));

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'percentage',
      difficulty,
      examTag,
      conceptTag: 'Population & Depreciation',
      questionEn: `The population of a town was ${initialPop.toLocaleString()}. In the first year, it increased by ${r1}%, and in the second year, it decreased by ${r2}%. What is the population of the town at the end of two years?`,
      questionHi: `एक कस्बे की जनसंख्या ${initialPop.toLocaleString()} थी। पहले वर्ष में इसमें ${r1}% की वृद्धि हुई और दूसरे वर्ष में ${r2}% की कमी आई। दो वर्ष के अंत में कस्बे की जनसंख्या क्या होगी?`,
      correctVal: finalPop.toLocaleString(),
      distractors: [
        (finalPop + 1200).toLocaleString(),
        (finalPop - 1200).toLocaleString(),
        (finalPop + 2400).toLocaleString(),
        (finalPop - 1800).toLocaleString(),
      ],
      qNum,
      conventionalSolEn: `After year 1: ${initialPop} × 1.10 = ${initialPop * 1.1}. After year 2: ${initialPop * 1.1} × 0.80 = ${finalPop}.`,
      conventionalSolHi: `वर्ष 1 बाद: ${initialPop} × 1.10 = ${initialPop * 1.1}. वर्ष 2 बाद: ${initialPop * 1.1} × 0.80 = ${finalPop}.`,
      examShortcutEn: `Effective net percentage: +${r1} - ${r2} - (${r1}×${r2}/100) = -12%. Final = ${initialPop} × 0.88 = ${finalPop}.`,
      examShortcutHi: `शुद्ध प्रतिशत: +${r1} - ${r2} - (${r1}×${r2}/100) = -12%. उत्तर = ${initialPop} × 0.88 = ${finalPop}.`,
      idealTimeSeconds: 30,
    });
  } else {
    // Salary & Spending
    const salary = randInt(35, 75, rng) * 1000;
    const rentPct = 20;
    const foodPctOfRem = 30;
    const savings = Math.round(salary * (1 - rentPct / 100) * (1 - foodPctOfRem / 100));

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'percentage',
      difficulty,
      examTag,
      conceptTag: 'Income & Expenditure Distribution',
      questionEn: `An employee spends ${rentPct}% of his monthly salary on house rent and ${foodPctOfRem}% of the remainder on food. If his monthly savings amount to ₹${savings.toLocaleString()}, find his total monthly salary.`,
      questionHi: `एक कर्मचारी अपने मासिक वेतन का ${rentPct}% मकान किराए पर तथा शेष का ${foodPctOfRem}% भोजन पर खर्च करता है। यदि उसकी मासिक बचत ₹${savings.toLocaleString()} है, तो उसका कुल मासिक वेतन ज्ञात कीजिए।`,
      correctVal: `₹${salary.toLocaleString()}`,
      distractors: [
        `₹${(salary + 5000).toLocaleString()}`,
        `₹${(salary - 5000).toLocaleString()}`,
        `₹${(salary + 10000).toLocaleString()}`,
        `₹${(salary - 10000).toLocaleString()}`,
      ],
      qNum,
      conventionalSolEn: `Remaining after rent = 80%. Remaining after food = 70% of 80% = 56%. Hence 56% = ₹${savings}. Total = (${savings} / 56) × 100 = ₹${salary.toLocaleString()}.`,
      conventionalSolHi: `किराए बाद शेष = 80%. भोजन बाद शेष = 80% का 70% = 56%. अतः 56% = ₹${savings}. कुल वेतन = (${savings} / 56) × 100 = ₹${salary.toLocaleString()}.`,
      examShortcutEn: `Fraction method: Salary × (4/5) × (7/10) = ₹${savings} ➔ Salary = ₹${savings} × (50/28) = ₹${salary.toLocaleString()}.`,
      examShortcutHi: `भिन्न विधि: वेतन × (4/5) × (7/10) = ₹${savings} ➔ वेतन = ₹${salary.toLocaleString()}.`,
      idealTimeSeconds: 35,
    });
  }
}

function generateAuthenticProfitLossQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel
): TopicPracticeQuestionData {
  const rng = createRng(qSeed);
  const archetype = index % 4;
  const examTag = difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims' : difficulty === 'LEVEL_2_PO_PRE' ? 'IBPS PO Prelims' : 'SBI PO Mains';
  const qId = `pl_${difficulty.toLowerCase()}_${qNum}`;

  if (archetype === 0) {
    // Same SP, +x% and -x%
    const rate = [10, 15, 20, 25][randInt(0, 3, rng)];
    const lossPct = (rate * rate) / 100;
    const sp = randInt(12, 35, rng) * 100;

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'profit-loss-discount',
      difficulty,
      examTag,
      conceptTag: 'Two Articles Same Selling Price',
      questionEn: `A merchant sells two articles for ₹${sp} each. On one he gains ${rate}% and on the other he loses ${rate}%. What is his overall gain or loss percentage in the entire transaction?`,
      questionHi: `एक व्यापारी दो वस्तुएं ₹${sp} प्रत्येक पर बेचता है। एक पर उसे ${rate}% का लाभ होता है तथा दूसरी पर ${rate}% की हानि। पूरे सौदे में उसका कुल लाभ या हानि प्रतिशत क्या है?`,
      correctVal: `Loss of ${lossPct}%`,
      distractors: [`Gain of ${lossPct}%`, 'No profit, no loss', `Loss of ${(lossPct + 1).toFixed(2)}%`, `Gain of ${rate}%`],
      qNum,
      conventionalSolEn: `When SP of two items is identical and gain% = loss% = x, there is ALWAYS an overall loss given by (x / 10)² % = (${rate}/10)² % = ${lossPct}%.`,
      conventionalSolHi: `जब दो वस्तुओं का वि.मू. समान हो तथा लाभ% = हानि% = x हो, तो सदैव हानि होती है = (x / 10)² % = ${lossPct}%.`,
      examShortcutEn: `Golden Banking Rule: (x/10)² % loss always. Net = (${rate} / 10)² = ${lossPct}% loss.`,
      examShortcutHi: `स्वर्णिम नियम: (x/10)² % सदैव हानि। हानि = ${lossPct}%.`,
      idealTimeSeconds: 15,
    });
  } else if (archetype === 1) {
    // Markup & Discount
    const cp = randInt(4, 12, rng) * 500;
    const markup = 40;
    const discount = 20;
    const profitPct = markup - discount - (markup * discount) / 100; // 40 - 20 - 8 = 12%

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'profit-loss-discount',
      difficulty,
      examTag,
      conceptTag: 'Markup and Discount Relationship',
      questionEn: `A retailer marks the price of an article ${markup}% above its cost price and offers a cash discount of ${discount}% on the marked price. What is his net profit percentage?`,
      questionHi: `एक खुदरा विक्रेता एक वस्तु का अंकित मूल्य उसके क्रय मूल्य से ${markup}% अधिक रखता है और अंकित मूल्य पर ${discount}% की नकद छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?`,
      correctVal: `${profitPct}%`,
      distractors: [`${markup - discount}%`, `${profitPct + 4}%`, `${profitPct - 3}%`, '15%'],
      qNum,
      conventionalSolEn: `Let CP = 100. MP = 140. SP = 140 × 0.80 = 112. Profit = 112 - 100 = 12%.`,
      conventionalSolHi: `माना क्रय मूल्य = 100. अंकित मूल्य = 140. विक्रय मूल्य = 140 × 0.80 = 112. लाभ = 12%.`,
      examShortcutEn: `Successive Formula: M - D - (M×D/100) = 40 - 20 - 8 = 12%.`,
      examShortcutHi: `सूत्र: M - D - (M×D/100) = 40 - 20 - 8 = 12%.`,
      idealTimeSeconds: 20,
    });
  } else if (archetype === 2) {
    // Dishonest Dealer
    const falseWeight = [900, 800, 750, 950][randInt(0, 3, rng)];
    const gainPct = +(((1000 - falseWeight) / falseWeight) * 100).toFixed(2);

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'profit-loss-discount',
      difficulty,
      examTag,
      conceptTag: 'Dishonest Dealer & Faulty Weights',
      questionEn: `A dishonest shopkeeper professes to sell his goods at cost price, but uses a false weight of ${falseWeight} grams instead of 1 kilogram. What is his exact percentage gain?`,
      questionHi: `एक बेईमान दुकानदार अपनी वस्तुएं क्रय मूल्य पर बेचने का दावा करता है, लेकिन 1 किलोग्राम के स्थान पर ${falseWeight} ग्राम के झूठे वजन का उपयोग करता है। उसका वास्तविक प्रतिशत लाभ क्या है?`,
      correctVal: `${gainPct}%`,
      distractors: [`${(1000 - falseWeight) / 10}%`, `${(gainPct + 2.5).toFixed(2)}%`, `${(gainPct - 1.8).toFixed(2)}%`, '12.5%'],
      qNum,
      conventionalSolEn: `Error = 1000 - ${falseWeight} = ${1000 - falseWeight}g. True value = ${falseWeight}g. Gain % = [Error / True Value] × 100 = [${1000 - falseWeight} / ${falseWeight}] × 100 = ${gainPct}%.`,
      conventionalSolHi: `त्रुटि = ${1000 - falseWeight} ग्राम. वास्तविक मान = ${falseWeight} ग्राम. लाभ % = [त्रुटि / प्रयुक्त भार] × 100 = ${gainPct}%.`,
      examShortcutEn: `Formula: [Error / (True Weight - Error)] × 100%.`,
      examShortcutHi: `शॉर्टकट सूत्र: [त्रुटि / प्रयुक्त भार] × 100%.`,
      idealTimeSeconds: 25,
    });
  } else {
    // Successive Discounts
    const d1 = 20;
    const d2 = 10;
    const singleEq = d1 + d2 - (d1 * d2) / 100; // 28%

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'profit-loss-discount',
      difficulty,
      examTag,
      conceptTag: 'Successive Equivalent Discounts',
      questionEn: `A customer is offered two successive discounts of ${d1}% and ${d2}% on the marked price of a television. What single equivalent discount percentage does this correspond to?`,
      questionHi: `एक ग्राहक को एक टेलीविजन के अंकित मूल्य पर ${d1}% और ${d2}% की दो क्रमिक छूट दी जाती है। यह किस एकल समतुल्य छूट प्रतिशत के बराबर है?`,
      correctVal: `${singleEq}%`,
      distractors: [`${d1 + d2}%`, `${singleEq - 2}%`, `${singleEq + 3}%`, '25%'],
      qNum,
      conventionalSolEn: `Net multiplier: (1 - 0.20) × (1 - 0.10) = 0.80 × 0.90 = 0.72. Equivalent discount = 1 - 0.72 = 0.28 = 28%.`,
      conventionalSolHi: `समतुल्य छूट = d₁ + d₂ - (d₁×d₂/100) = 20 + 10 - 2 = 28%.`,
      examShortcutEn: `Shortcut Formula: d₁ + d₂ - (d₁×d₂/100) = 20 + 10 - 2 = 28%.`,
      examShortcutHi: `शॉर्टकट सूत्र: d₁ + d₂ - (d₁×d₂/100) = 28%.`,
      idealTimeSeconds: 20,
    });
  }
}

function generateAuthenticSICIQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel
): TopicPracticeQuestionData {
  const rng = createRng(qSeed);
  const archetype = index % 4;
  const examTag = difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims' : difficulty === 'LEVEL_2_PO_PRE' ? 'IBPS PO Prelims' : 'SBI PO Mains';
  const qId = `sici_${difficulty.toLowerCase()}_${qNum}`;

  if (archetype === 0) {
    // Difference between CI and SI for 2 years: D = P * (R/100)^2
    const rate = [5, 10, 12, 15, 20][randInt(0, 4, rng)];
    const principal = randInt(4, 20, rng) * 2000;
    const diff = Math.round(principal * (rate / 100) ** 2);

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'simple-compound-interest',
      difficulty,
      examTag,
      conceptTag: 'CI and SI Difference for 2 Years',
      questionEn: `The difference between compound interest (compounded annually) and simple interest on a certain sum of money at ${rate}% per annum for 2 years is ₹${diff}. Find the original sum of money.`,
      questionHi: `किसी निश्चित धनराशि पर ${rate}% वार्षिक ब्याज दर से 2 वर्ष के लिए चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹${diff} है। मूल धनराशि ज्ञात कीजिए।`,
      correctVal: `₹${principal.toLocaleString()}`,
      distractors: [
        `₹${(principal + 2000).toLocaleString()}`,
        `₹${(principal - 2000).toLocaleString()}`,
        `₹${(principal + 5000).toLocaleString()}`,
        `₹${(principal - 4000).toLocaleString()}`,
      ],
      qNum,
      conventionalSolEn: `SI = (P × ${rate} × 2) / 100. CI = P[(1 + ${rate}/100)² - 1]. Difference D = P(R/100)². P = ${diff} / (${rate}/100)² = ₹${principal.toLocaleString()}.`,
      conventionalSolHi: `2 वर्ष के लिए CI व SI का अंतर: D = P(R/100)². P = ${diff} / (${rate}/100)² = ₹${principal.toLocaleString()}.`,
      examShortcutEn: `2-Second Banking Formula: P = D × (100 / R)².`,
      examShortcutHi: `शॉर्टकट सूत्र: P = D × (100 / R)².`,
      idealTimeSeconds: 25,
    });
  } else if (archetype === 1) {
    // Sum doubles at SI: T = (N - 1) * 100 / R
    const years = [4, 5, 8, 10, 12][randInt(0, 4, rng)];
    const rate = 100 / years;
    const targetMultiplier = 4;
    const targetYears = (targetMultiplier - 1) * years;

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'simple-compound-interest',
      difficulty,
      examTag,
      conceptTag: 'Sum Multipliers in Simple Interest',
      questionEn: `A sum of money doubles itself in ${years} years at a certain rate of simple interest. In how many years will it become ${targetMultiplier} times itself at the same rate of interest?`,
      questionHi: `एक धनराशि साधारण ब्याज की एक निश्चित दर से ${years} वर्षों में दोगुनी हो जाती है। उसी ब्याज दर पर यह कितने वर्षों में स्वयं की ${targetMultiplier} गुनी हो जाएगी?`,
      correctVal: `${targetYears} years`,
      distractors: [`${targetYears + 4} years`, `${targetYears - 2} years`, `${years * 2} years`, `${targetYears + 6} years`],
      qNum,
      conventionalSolEn: `To double: Interest = P in ${years} years. To become 4 times: Interest required = 3P. Time required = 3 × ${years} = ${targetYears} years.`,
      conventionalSolHi: `दोगुना होने के लिए: ब्याज = P (${years} वर्ष में). 4 गुना होने के लिए: आवश्यक ब्याज = 3P. आवश्यक समय = 3 × ${years} = ${targetYears} वर्ष.`,
      examShortcutEn: `Direct Linear Ratio: T₂ / T₁ = (N₂ - 1) / (N₁ - 1) ➔ T₂ = ${years} × (3/1) = ${targetYears} years.`,
      examShortcutHi: `शॉर्टकट अनुपात: T₂ = T₁ × (N₂ - 1) / (N₁ - 1) = ${targetYears} वर्ष.`,
      idealTimeSeconds: 20,
    });
  } else {
    // Rate from successive CI amounts: R = (A2 - A1) / A1 * 100
    const r = [10, 15, 20][randInt(0, 2, rng)];
    const p = 5000;
    const a2 = Math.round(p * (1 + r / 100) ** 2);
    const a3 = Math.round(p * (1 + r / 100) ** 3);

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'simple-compound-interest',
      difficulty,
      examTag,
      conceptTag: 'Successive Amounts in Compound Interest',
      questionEn: `A sum invested under compound interest amounts to ₹${a2.toLocaleString()} at the end of 2 years and ₹${a3.toLocaleString()} at the end of 3 years. Find the rate of interest per annum.`,
      questionHi: `चक्रवृद्धि ब्याज पर निवेश की गई एक धनराशि 2 वर्ष के अंत में ₹${a2.toLocaleString()} तथा 3 वर्ष के अंत में ₹${a3.toLocaleString()} हो जाती है। वार्षिक ब्याज दर ज्ञात कीजिए।`,
      correctVal: `${r}%`,
      distractors: [`${r + 2}%`, `${r - 2}%`, `${r + 5}%`, '12%'],
      qNum,
      conventionalSolEn: `Interest earned in 3rd year = ₹${a3} - ₹${a2} = ₹${a3 - a2}. Rate = [(₹${a3 - a2}) / ₹${a2}] × 100 = ${r}%.`,
      conventionalSolHi: `तीसरे वर्ष का ब्याज = ₹${a3} - ₹${a2} = ₹${a3 - a2}. दर = [${a3 - a2} / ${a2}] × 100 = ${r}%.`,
      examShortcutEn: `Annual Ratio: R = [(A₃ - A₂) / A₂] × 100%.`,
      examShortcutHi: `शॉर्टकट सूत्र: R = [(A₃ - A₂) / A₂] × 100%.`,
      idealTimeSeconds: 25,
    });
  }
}

function generateAuthenticTSDQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel
): TopicPracticeQuestionData {
  const rng = createRng(qSeed);
  const archetype = index % 3;
  const examTag = difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims' : difficulty === 'LEVEL_2_PO_PRE' ? 'IBPS PO Prelims' : 'SBI PO Mains';
  const qId = `tsd_${difficulty.toLowerCase()}_${qNum}`;

  if (archetype === 0) {
    // Train crossing pole and platform
    const speedKmph = [54, 72, 90][randInt(0, 2, rng)];
    const speedMps = (speedKmph * 5) / 18;
    const tPole = [10, 12, 15][randInt(0, 2, rng)];
    const trainLen = speedMps * tPole;
    const platLen = [150, 200, 250, 300][randInt(0, 3, rng)];
    const tPlat = (trainLen + platLen) / speedMps;

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'time-speed-distance',
      difficulty,
      examTag,
      conceptTag: 'Train Crossing Pole & Platform',
      questionEn: `A train running at ${speedKmph} km/h crosses a telegraph pole in ${tPole} seconds. How much time (in seconds) will it take to cross a platform of length ${platLen} meters?`,
      questionHi: `${speedKmph} किमी/घंटा की गति से चलने वाली एक ट्रेन एक टेलीग्राफ खंभे को ${tPole} सेकंड में पार करती है। ${platLen} मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय (सेकंड में) लगेगा?`,
      correctVal: `${tPlat} seconds`,
      distractors: [`${tPlat + 4} seconds`, `${tPlat - 3} seconds`, `${tPlat + 6} seconds`, `${tPlat - 5} seconds`],
      qNum,
      conventionalSolEn: `Speed = ${speedKmph} × (5/18) = ${speedMps} m/s. Train length = ${speedMps} × ${tPole} = ${trainLen} m. Total distance to cross platform = ${trainLen} + ${platLen} = ${trainLen + platLen} m. Time = ${trainLen + platLen} / ${speedMps} = ${tPlat} seconds.`,
      conventionalSolHi: `चाल = ${speedKmph} × (5/18) = ${speedMps} मी/से. ट्रेन की लंबाई = ${trainLen} मी. कुल दूरी = ${trainLen + platLen} मी. समय = ${tPlat} सेकंड.`,
      examShortcutEn: `Extra time to cross platform = ${platLen} / ${speedMps} = ${platLen / speedMps}s. Total = ${tPole} + ${platLen / speedMps} = ${tPlat}s.`,
      examShortcutHi: `प्लेटफॉर्म का अतिरिक्त समय = ${platLen} / ${speedMps} सेकंड. कुल समय = ${tPlat} सेकंड.`,
      idealTimeSeconds: 30,
    });
  } else if (archetype === 1) {
    // Early / Late arrival formula: D = (S1 * S2) / (S2 - S1) * (t1 + t2) / 60
    const s1 = 4;
    const s2 = 5;
    const tLate = 10;
    const tEarly = 5;
    const dist = (s1 * s2 * (tLate + tEarly)) / ((s2 - s1) * 60);

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'time-speed-distance',
      difficulty,
      examTag,
      conceptTag: 'Early and Late Arrival Analysis',
      questionEn: `Walking at ${s1} km/h, a student reaches his school ${tLate} minutes late. If he increases his speed to ${s2} km/h, he reaches ${tEarly} minutes early. What is the distance between his home and the school?`,
      questionHi: `${s1} किमी/घंटा की चाल से चलकर, एक छात्र अपने स्कूल ${tLate} मिनट देरी से पहुँचता है। यदि वह अपनी चाल बढ़ाकर ${s2} किमी/घंटा कर देता है, तो वह ${tEarly} मिनट पहले पहुँच जाता है। उसके घर और स्कूल के बीच की दूरी क्या है?`,
      correctVal: `${dist} km`,
      distractors: [`${dist + 1.5} km`, `${dist - 1} km`, `${dist + 2} km`, `${dist + 3} km`],
      qNum,
      conventionalSolEn: `Let distance = D. Time difference = ${tLate} + ${tEarly} = ${tLate + tEarly} min = ${(tLate + tEarly) / 60} hrs. (D/${s1}) - (D/${s2}) = ${(tLate + tEarly) / 60} ➔ D = ${dist} km.`,
      conventionalSolHi: `दूरी = D. समय का अंतर = ${tLate + tEarly} मिनट = ${(tLate + tEarly) / 60} घंटा. D = ${dist} किमी.`,
      examShortcutEn: `Golden Formula: Distance = (Product of Speeds / Difference of Speeds) × Total Time Diff in Hours = (${s1}×${s2}/1) × (${tLate + tEarly}/60) = ${dist} km.`,
      examShortcutHi: `स्वर्णिम सूत्र: दूरी = [S₁S₂ / (S₂ - S₁)] × [Δt / 60] = ${dist} किमी.`,
      idealTimeSeconds: 25,
    });
  } else {
    // Average speed for round trip: 2S1S2 / (S1 + S2)
    const s1 = 60;
    const s2 = 40;
    const avgSpeed = (2 * s1 * s2) / (s1 + s2); // 48 km/h

    return makeTopicQuestion({
      id: qId,
      topicSlug: 'time-speed-distance',
      difficulty,
      examTag,
      conceptTag: 'Average Speed for Equal Distances',
      questionEn: `A car travels from City A to City B at a uniform speed of ${s1} km/h and returns along the same route at a speed of ${s2} km/h. What is the average speed of the car for the round trip?`,
      questionHi: `एक कार शहर A से शहर B तक ${s1} किमी/घंटा की समान गति से जाती है और उसी मार्ग से ${s2} किमी/घंटा की गति से वापस लौटती है। पूरी यात्रा के लिए कार की औसत गति क्या है?`,
      correctVal: `${avgSpeed} km/h`,
      distractors: [`${(s1 + s2) / 2} km/h`, `${avgSpeed + 4} km/h`, `${avgSpeed - 3} km/h`, '52 km/h'],
      qNum,
      conventionalSolEn: `When distances are equal, Average Speed = Harmonic Mean = 2S₁S₂ / (S₁ + S₂) = 2(60)(40) / (60 + 40) = 4800 / 100 = 48 km/h.`,
      conventionalSolHi: `समान दूरी के लिए औसत गति = 2S₁S₂ / (S₁ + S₂) = 2×60×40 / 100 = 48 किमी/घंटा.`,
      examShortcutEn: `Avoid Arithmetic Mean trap (50 km/h)! Correct Average Speed = 2×60×40/100 = 48 km/h.`,
      examShortcutHi: `साधारण औसत (50) का जाल न चुनें! सही उत्तर = 48 किमी/घंटा.`,
      idealTimeSeconds: 20,
    });
  }
}

// ============================================================================
// 4. AUTHENTIC BANKING GA & COMPUTER AWARENESS GENERATORS (25+ QUESTIONS EACH)
// ============================================================================

const BANKING_GA_POOL = [
  {
    qEn: 'What is the minimum Priority Sector Lending (PSL) target prescribed by the RBI for Domestic Scheduled Commercial Banks as a percentage of ANBC?',
    qHi: 'ANBC के प्रतिशत के रूप में घरेलू अनुसूचित वाणिज्यिक बैंकों के लिए RBI द्वारा निर्धारित न्यूनतम प्राथमिकता प्राप्त क्षेत्र ऋण (PSL) लक्ष्य क्या है?',
    ans: '40%',
    distractors: ['35%', '45%', '50%', '30%'],
    sol: 'Domestic commercial banks must allocate a minimum 40% of ANBC to priority sectors.',
  },
  {
    qEn: 'Under Section 138 of the Negotiable Instruments Act, 1881, dishonour of a cheque for insufficiency of funds is an offence punishable with imprisonment up to:',
    qHi: 'परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के तहत चेक बाउंस होने पर अधिकतम कितनी जेल हो सकती है?',
    ans: '2 years',
    distractors: ['1 year', '3 years', '5 years', '6 months'],
    sol: 'Punishment under Section 138 is imprisonment up to 2 years, fine up to twice cheque amount, or both.',
  },
  {
    qEn: 'What is the maximum deposit insurance coverage provided by DICGC per depositor per insured bank in India?',
    qHi: 'भारत में DICGC द्वारा प्रति जमाकर्ता प्रति बैंक अधिकतम बीमा कवर क्या है?',
    ans: '₹5,00,000',
    distractors: ['₹1,00,000', '₹2,00,000', '₹10,00,000', '₹25,00,000'],
    sol: 'DICGC covers both principal and interest up to ₹5 Lakh per depositor per bank.',
  },
  {
    qEn: 'What is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) mandated by RBI for Indian SCBs under Basel III (excluding CCB)?',
    qHi: 'बेसल III के तहत भारतीय बैंकों के लिए RBI द्वारा अनिवार्य न्यूनतम CRAR (CCB को छोड़कर) क्या है?',
    ans: '9.0%',
    distractors: ['8.0%', '10.5%', '11.5%', '12.0%'],
    sol: 'RBI prescribes minimum 9.0% CRAR for Indian SCBs, whereas global Basel III requires 8.0%.',
  },
  {
    qEn: 'What is the maximum tenure for which Treasury Bills (T-Bills) can be issued in the Indian money market?',
    qHi: 'भारतीय मुद्रा बाजार में ट्रेजरी बिल (T-Bills) अधिकतम कितनी अवधि के लिए जारी किए जा सकते हैं?',
    ans: '364 days',
    distractors: ['91 days', '182 days', '1 year', '2 years'],
    sol: 'Government T-Bills are issued in 3 maturities: 91 days, 182 days, and 364 days.',
  },
  {
    qEn: 'Which facility acts as the floor (lower bound) of the RBI Policy Corridor under the revised Liquidity Management Framework?',
    qHi: 'संशोधित चलनिधि प्रबंधन फ्रेमवर्क के तहत RBI के कॉरिडोर की निचली सीमा क्या है?',
    ans: 'Standing Deposit Facility (SDF)',
    distractors: ['Reverse Repo Rate', 'Marginal Standing Facility (MSF)', 'Bank Rate', 'CRR'],
    sol: 'SDF rate is 25 bps below the policy repo rate and acts as the uncollateralized floor.',
  },
  {
    qEn: 'Under the SARFAESI Act, 2002, what is the mandatory notice period given to the borrower to discharge liabilities before taking possession of secured assets?',
    qHi: 'SARFAESI अधिनियम के तहत संपत्ति जब्त करने से पहले कर्जदार को कितने दिन का नोटिस दिया जाता है?',
    ans: '60 days',
    distractors: ['30 days', '45 days', '90 days', '180 days'],
    sol: 'Under Section 13(2), secured creditors must give 60 days notice to discharge liabilities.',
  },
  {
    qEn: 'Which institution operates the Unified Payments Interface (UPI) and Immediate Payment Service (IMPS) in India?',
    qHi: 'भारत में UPI और IMPS का संचालन कौन सी संस्था करती है?',
    ans: 'NPCI',
    distractors: ['RBI', 'SEBI', 'IDRBT', 'IBA'],
    sol: 'National Payments Corporation of India (NPCI) is the umbrella organization for retail payments.',
  },
  {
    qEn: 'In banking, what does "C" represent in the PCA framework deployed by the Reserve Bank of India?',
    qHi: 'RBI के PCA फ्रेमवर्क में "C" का क्या अर्थ है?',
    ans: 'Corrective (Prompt Corrective Action)',
    distractors: ['Credit', 'Capital', 'Commercial', 'Corporate'],
    sol: 'PCA stands for Prompt Corrective Action, monitoring Capital, Asset Quality, and Leverage.',
  },
  {
    qEn: 'What is the minimum denomination for issuing Commercial Paper (CP) in India?',
    qHi: 'भारत में वाणिज्यिक पत्र (Commercial Paper) जारी करने का न्यूनतम मूल्य क्या है?',
    ans: '₹5 Lakh',
    distractors: ['₹1 Lakh', '₹10 Lakh', '₹25 Lakh', '₹50,000'],
    sol: 'Commercial Paper can be issued in denominations of ₹5 Lakh and multiples thereof.',
  },
  {
    qEn: 'Under Section 42 of the Reserve Bank of India Act, 1934, banks are required to maintain Cash Reserve Ratio (CRR) with the RBI as a percentage of:',
    qHi: 'RBI अधिनियम की धारा 42 के तहत, बैंकों को किस पर CRR बनाए रखना होता है?',
    ans: 'Net Demand and Time Liabilities (NDTL)',
    distractors: ['Total Advances', 'Capital Funds', 'ANBC', 'Gross NPA'],
    sol: 'CRR is maintained on Net Demand and Time Liabilities (NDTL) without any interest from RBI.',
  },
  {
    qEn: 'What is the primary objective of the Insolvency and Bankruptcy Code (IBC), 2016?',
    qHi: 'दिवाला एवं शोधन अक्षमता संहिता (IBC), 2016 का मुख्य उद्देश्य क्या है?',
    ans: 'Time-bound reorganization and insolvency resolution of corporate persons',
    distractors: ['Direct penal recovery', 'Bank licensing', 'Tax audit', 'Stock exchange monitoring'],
    sol: 'IBC provides time-bound corporate insolvency resolution (CIRP within 180 + 90 days).',
  },
];

const COMPUTER_POOL = [
  {
    qEn: 'In the OSI reference model, which layer is responsible for end-to-end communication, flow control, and error recovery (e.g., TCP)?',
    qHi: 'OSI मॉडल में, कौन सी परत एंड-टू-एंड संचार, प्रवाह नियंत्रण और त्रुटि सुधार (जैसे TCP) के लिए जिम्मेदार है?',
    ans: 'Transport Layer',
    distractors: ['Network Layer', 'Data Link Layer', 'Session Layer', 'Application Layer'],
    sol: 'Transport Layer (Layer 4) handles reliable end-to-end data transfer and port addressing.',
  },
  {
    qEn: 'What is the length (in bits) of an IPv4 and IPv6 address respectively?',
    qHi: 'IPv4 और IPv6 पते की लंबाई (बिट्स में) क्रमशः क्या है?',
    ans: '32 bits and 128 bits',
    distractors: ['16 bits and 64 bits', '32 bits and 64 bits', '64 bits and 128 bits', '128 bits and 256 bits'],
    sol: 'IPv4 address has 32 bits (4 bytes); IPv6 has 128 bits (16 bytes).',
  },
  {
    qEn: 'Which type of memory is directly integrated into the CPU chip and provides the fastest access time for instruction execution?',
    qHi: 'कौन सी मेमोरी सीधे CPU में एकीकृत होती है और सबसे तेज एक्सेस समय प्रदान करती है?',
    ans: 'L1 Cache Memory',
    distractors: ['DRAM', 'Flash SSD', 'Virtual Memory', 'Hard Disk Drive'],
    sol: 'L1 Cache is built directly on the CPU core and operates at the clock speed of the processor.',
  },
  {
    qEn: 'Which SQL statement belongs to the Data Definition Language (DDL)?',
    qHi: 'कौन सा SQL कथन डेटा परिभाषा भाषा (DDL) से संबंधित है?',
    ans: 'CREATE',
    distractors: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
    sol: 'CREATE, ALTER, DROP, and TRUNCATE are DDL commands altering the database schema.',
  },
  {
    qEn: 'What is the default port number used by HTTPS (Hypertext Transfer Protocol Secure)?',
    qHi: 'HTTPS (हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर) द्वारा उपयोग किया जाने वाला डिफॉल्ट पोर्ट नंबर क्या है?',
    ans: '443',
    distractors: ['80', '21', '25', '8080'],
    sol: 'HTTP uses port 80; HTTPS uses SSL/TLS encrypted port 443.',
  },
  {
    qEn: 'In MS Excel, which keyboard shortcut key is used to enter edit mode for the selected active cell?',
    qHi: 'MS Excel में, चयनित सेल को संपादित (Edit) करने के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?',
    ans: 'F2',
    distractors: ['F4', 'F7', 'F12', 'Ctrl + E'],
    sol: 'Pressing F2 activates in-cell editing in Microsoft Excel.',
  },
  {
    qEn: 'What is the decimal equivalent of the binary number (101101)₂?',
    qHi: 'बाइनरी संख्या (101101)₂ का दशमलव मान क्या है?',
    ans: '45',
    distractors: ['43', '47', '41', '53'],
    sol: '(101101)₂ = 32 + 0 + 8 + 4 + 0 + 1 = 45.',
  },
  {
    qEn: 'Which cyber threat involves tricking users into revealing sensitive credentials via spoofed emails and counterfeit banking websites?',
    qHi: 'नकली ईमेल या वेबसाइट के माध्यम से उपयोगकर्ताओं के गोपनीय क्रेडेंशियल चुराने को क्या कहते हैं?',
    ans: 'Phishing',
    distractors: ['Spoofing', 'DDoS', 'Spyware', 'Trojan Horse'],
    sol: 'Phishing uses deceptive electronic communications to steal passwords and financial info.',
  },
  {
    qEn: 'In relational database management systems (RDBMS), which key uniquely identifies each row in a database table without accepting NULL values?',
    qHi: 'RDBMS में, कौन सी कुंजी तालिका की प्रत्येक पंक्ति की विशिष्ट पहचान करती है और NULL स्वीकार नहीं करती?',
    ans: 'Primary Key',
    distractors: ['Foreign Key', 'Candidate Key', 'Composite Key', 'Alternate Key'],
    sol: 'A Primary Key uniquely identifies tuples and strictly enforces the NOT NULL constraint.',
  },
  {
    qEn: 'Which network topology connects every computer directly to a central hub or switch?',
    qHi: 'कौन सी नेटवर्क टोपोलॉजी प्रत्येक कंप्यूटर को एक केंद्रीय हब या स्विच से जोड़ती है?',
    ans: 'Star Topology',
    distractors: ['Mesh Topology', 'Ring Topology', 'Bus Topology', 'Tree Topology'],
    sol: 'In Star Topology, all peripheral nodes connect directly to a central concentrator.',
  },
];

function generateAuthenticBankingGAQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel,
  topicSlug: string
): TopicPracticeQuestionData {
  const item = BANKING_GA_POOL[index % BANKING_GA_POOL.length];
  const examTag = difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Mains GA' : 'SBI/IBPS PO Mains Banking Awareness';

  return makeTopicQuestion({
    id: `ga_${topicSlug}_${qNum}`,
    topicSlug,
    difficulty,
    examTag,
    conceptTag: 'Banking Awareness & Financial Systems',
    questionEn: item.qEn,
    questionHi: item.qHi,
    correctVal: item.ans,
    distractors: item.distractors,
    qNum,
    conventionalSolEn: item.sol,
    conventionalSolHi: item.sol,
    examShortcutEn: 'Core Banking Fact: Review official RBI Master Circulars and statutory banking norms.',
    examShortcutHi: 'तथ्यात्मक प्रश्न: RBI परिपत्रों और मौद्रिक नियमों को दोहराएं।',
    idealTimeSeconds: 15,
  });
}

function generateAuthenticComputerQuestion(
  qNum: number,
  qSeed: number,
  index: number,
  difficulty: DifficultyLevel,
  topicSlug: string
): TopicPracticeQuestionData {
  const item = COMPUTER_POOL[index % COMPUTER_POOL.length];
  const examTag = 'RRB PO/Clerk Mains Computer Aptitude';

  return makeTopicQuestion({
    id: `comp_${topicSlug}_${qNum}`,
    topicSlug,
    difficulty,
    examTag,
    conceptTag: 'Computer Architecture & Networks',
    questionEn: item.qEn,
    questionHi: item.qHi,
    correctVal: item.ans,
    distractors: item.distractors,
    qNum,
    conventionalSolEn: item.sol,
    conventionalSolHi: item.sol,
    examShortcutEn: 'Computer Standard: Memorize standard OSI layers, IP specs, and shortcut keys.',
    examShortcutHi: 'मानक कंप्यूटर नियम: OSI परतें, IP स्पेसिफिकेशन व शॉर्टकट याद रखें।',
    idealTimeSeconds: 15,
  });
}

// ============================================================================
// 5. MASTER SINGLE QUESTION DISPATCHER
// ============================================================================

function buildSingleQuestion(
  topicSlug: string,
  difficulty: DifficultyLevel,
  qNum: number,
  qSeed: number,
  index: number
): TopicPracticeQuestionData | null {
  const config = getTopicBySlug(topicSlug);
  const category = config?.category || 'QUANT';

  // 1. SPEED MATH TRACK
  if (topicSlug === 'missing-number-series') {
    const q = generateDynamicNumberSeriesQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed, false);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'wrong-number-series') {
    const q = generateDynamicNumberSeriesQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed, true);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'simplification-approximation') {
    if (difficulty === 'LEVEL_1_CLERK_PRE') {
      const q = generateDynamicSimplificationQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed);
      return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
    } else if (difficulty === 'LEVEL_2_PO_PRE') {
      const q = index % 2 === 0
        ? generateDynamicApproximationQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed)
        : generateDynamicSimplificationQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed);
      return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
    } else {
      const q = generateDynamicApproximationQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed);
      return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
    }
  }

  if (topicSlug === 'quadratic-equations') {
    const q = generateDynamicQuadraticQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  // 2. ARITHMETIC CORE TRACK
  if (topicSlug === 'percentage') {
    return generateAuthenticPercentageQuestion(qNum, qSeed, index, difficulty);
  }

  if (topicSlug === 'profit-loss-discount') {
    return generateAuthenticProfitLossQuestion(qNum, qSeed, index, difficulty);
  }

  if (topicSlug === 'simple-compound-interest') {
    return generateAuthenticSICIQuestion(qNum, qSeed, index, difficulty);
  }

  if (topicSlug === 'time-speed-distance') {
    return generateAuthenticTSDQuestion(qNum, qSeed, index, difficulty);
  }

  if (topicSlug === 'ratio-proportion-partnership') {
    const slot = index % 2 === 0 ? 2 : 5;
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', slot, 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'average-ages') {
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', 3, 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'mixture-alligation') {
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', 2, 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'time-work-pipes') {
    const slot = index % 2 === 0 ? 6 : 7;
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', slot, 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'mensuration-2d-3d') {
    const slot = (((index % 10) + 1) as ArithmeticSlot);
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', slot, 1.0, 0.25, qSeed + 43);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'permutation-combination-probability') {
    const slot = (((index % 10) + 1) as ArithmeticSlot);
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', slot, 1.0, 0.25, qSeed + 89);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'quantity-comparison-data-sufficiency') {
    const q = index % 2 === 0
      ? generateQuantityComparisonQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed)
      : generateDataSufficiencyQuestion(qNum, index + 1, 'sec_quant', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  // 3. DATA INTERPRETATION TRACK
  if (
    topicSlug === 'tabular-bar-line-pie-di' ||
    topicSlug === 'caselet-di' ||
    topicSlug === 'arithmetic-mains-di'
  ) {
    const diType =
      topicSlug === 'caselet-di'
        ? 'CASELET'
        : index % 3 === 0
        ? 'CASELET'
        : index % 2 === 0
        ? 'DOUBLE_BAR'
        : 'PIE_CHART';
    const group: QuestionGroup = generateDynamicDIGroup(
      diType,
      qNum,
      1,
      'sec_quant',
      1.0,
      0.25,
      qSeed,
      5
    );
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  // 4. REASONING ABILITY TRACK
  if (topicSlug === 'syllogism') {
    const q = generateSyllogismQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'inequalities') {
    const q = generateInequalityQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'direction-distance') {
    const group = generateDirectionSenseGroup(qNum, 1, 'sec_reasoning', 1.0, 0.25);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'blood-relations') {
    const group = generateBloodRelationGroup(qNum, 1, 'sec_reasoning', 1.0, 0.25);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'alphanumeric-number-series') {
    const group = generateAlphanumericGroup(qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed, 5);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'coding-decoding' || topicSlug === 'order-ranking-alphabet') {
    const variant = (index % 4) + 1;
    const q = generateMiscReasoningQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed, 'PAIR_FINDING', variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'linear-seating') {
    const archetype = index % 2 === 0 ? 'PARALLEL_ROWS' : 'UNCERTAIN_LINEAR';
    const group = generatePuzzleGroup(archetype, qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'circular-polygon-seating') {
    const archetype = index % 2 === 0 ? 'CIRCULAR_IN_OUT' : 'SQUARE_TABLE';
    const group = generatePuzzleGroup(archetype, qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'floor-flat-puzzles') {
    const group = generatePuzzleGroup('FLOOR_FLAT', qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'box-month-date-puzzles') {
    const archetype = index % 2 === 0 ? 'BOX_PUZZLE' : 'MONTH_DATE';
    const group = generatePuzzleGroup(archetype, qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'designation-category-puzzles') {
    const group = generatePuzzleGroup('DESIGNATION_PUZZLE', qNum, 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'machine-input-output') {
    const q = generateMachineInputOutputQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'critical-logical-reasoning') {
    const q = generateCriticalReasoningQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'reasoning-data-sufficiency') {
    const q = generateReasoningDataSufficiencyQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  // 5. ENGLISH & HINDI LANGUAGE TRACK
  if (topicSlug === 'error-spotting') {
    const variant = (index % 10) + 1;
    const q = generateEnglishErrorSpottingQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'phrase-replacement-improvement') {
    const variant = ((index + 3) % 10) + 1;
    const q = generateEnglishErrorSpottingQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'sentence-connectors-starters') {
    const variant = (index % 6) + 1;
    const q = generateSentenceConnectorQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'cloze-test') {
    const group = generateClozeTestGroup(qNum, 1, 'sec_english', 1.0, 0.25, 5, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'fillers') {
    const variant = (index % 8) + 1;
    const q = generateDoubleFillerQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'word-swap-usage') {
    const variant = (index % 5) + 1;
    const q = generateWordSwapQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (topicSlug === 'reading-comprehension') {
    const group = generateReadingComprehensionGroup(qNum, 1, 'sec_english', 1.0, 0.25, 8, (index % 5) + 1);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'para-jumbles-odd-one-out') {
    const group = generateParaJumbleGroup(qNum, 1, 'sec_english', 1.0, 0.25, qSeed);
    const subQ = group.questions[index % group.questions.length] || group.questions[0];
    if (subQ) {
      return convertQuestionToTopicPracticeData(subQ, topicSlug, difficulty, group.passageEn, group.passageHi);
    }
  }

  if (topicSlug === 'hindi-grammar-vocab-rc') {
    const q = generateRRBMainsHindiQuestion(qNum, index + 1, 'sec_hindi', 1.0, 0.25);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  // 6. BANKING, GA & COMPUTER TRACK
  if (
    topicSlug === 'rbi-monetary-policy' ||
    topicSlug === 'banking-acts-norms' ||
    topicSlug === 'digital-banking-npci' ||
    topicSlug === 'capital-money-markets'
  ) {
    return generateAuthenticBankingGAQuestion(qNum, qSeed, index, difficulty, topicSlug);
  }

  if (
    topicSlug === 'computer-hardware-memory-os' ||
    topicSlug === 'networking-internet-security' ||
    topicSlug === 'dbms-ms-office-number-system'
  ) {
    return generateAuthenticComputerQuestion(qNum, qSeed, index, difficulty, topicSlug);
  }

  // Fallback by Category
  if (category === 'QUANT') {
    const slot = (((index % 10) + 1) as ArithmeticSlot);
    const q = generateArithmeticWordProblem(qNum, index + 1, 'sec_quant', slot, 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (category === 'REASONING') {
    const q = generateSyllogismQuestion(qNum, index + 1, 'sec_reasoning', 1.0, 0.25, qSeed);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  if (category === 'LANGUAGE') {
    const variant = (index % 10) + 1;
    const q = generateEnglishErrorSpottingQuestion(qNum, index + 1, 'sec_english', 1.0, 0.25, variant);
    return convertQuestionToTopicPracticeData(q, topicSlug, difficulty);
  }

  return generateAuthenticBankingGAQuestion(qNum, qSeed, index, difficulty, topicSlug);
}

// ============================================================================
// 6. MAIN DISPATCHER FUNCTION WITH STRICT DEDUPLICATION GUARANTEE
// ============================================================================

export function generateDynamicTopicQuestions(
  topicSlug: string,
  difficulty: DifficultyLevel = 'LEVEL_1_CLERK_PRE',
  count: number = 10,
  seed: number = Date.now()
): TopicPracticeQuestionData[] {
  const seenTexts = new Set<string>();
  const questions: TopicPracticeQuestionData[] = [];

  let attempt = 0;
  const maxAttempts = count * 6;

  while (questions.length < count && attempt < maxAttempts) {
    // Generate distinct sequential seeds so pattern types cycle cleanly (1, 2, 3, 4, 5, 6, 7)
    const qNum = (Math.abs(seed) % 1000) + attempt + 1;
    const qSeed = Math.abs((seed * 31) + attempt * 179 + 37);

    const q = buildSingleQuestion(topicSlug, difficulty, qNum, qSeed, attempt);
    if (q) {
      // Normalize question text to check for any textual duplication
      const key = q.questionEn.trim().replace(/\s+/g, ' ');
      if (!seenTexts.has(key)) {
        seenTexts.add(key);
        // Ensure unique question ID for the session
        q.id = `${topicSlug}_${difficulty.toLowerCase()}_${questions.length + 1}_${qSeed % 10000}`;
        questions.push(q);
      }
    }
    attempt++;
  }

  return questions;
}
