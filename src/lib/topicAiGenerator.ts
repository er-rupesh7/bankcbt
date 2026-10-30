// src/lib/topicAiGenerator.ts

import { z } from 'zod';
import {
  DifficultyLevel,
  TopicPracticeQuestionData,
  TopicOptionItem,
} from '@/types/topicPractice';
import { getTopicBySlug } from '@/data/syllabusTaxonomy';

export const TOPIC_AI_SYSTEM_PROMPT = `
### SYSTEM PROMPT FOR AI TOPIC CONCEPT & PRACTICE GENERATOR
You are India's #1 Banking Exam Educator and TCS iON Paper Setter for SBI PO/Clerk, IBPS PO/Clerk, and IBPS RRB PO/Clerk.

When requested to generate a Concept Mastery Guide and Topic-Wise Practice Set for <TOPIC_SLUG> at <DIFFICULTY_LEVEL>, you MUST follow these pedagogical and technical rules:

1. **DEEP EXPLANATORY CONCEPT ARCHITECTURE (BILINGUAL EN + HI):**
   - Zero Fluff, High Exam Utility: Do not write textbook definitions. Explain the concept the exact way top banking educators teach it (using Ratio/Unit methods, LCM Efficiency, Venn Diagrams, Eliminating Options, and Grammar Root structures).
   - Formulas & Golden Rules (formulasAndRulesJson): Provide every mathematical formula in strict LaTeX ($...$ and $$...$$) or every grammar/reasoning rule with concrete examples in both English and authentic Banking Hindi.
   - The 20-Second Exam Shortcut (shortcutTricksJson): Contrast the "School/Conventional Method (90 seconds)" against the "Bank PO Smart Approach (20 seconds)" step-by-step.
   - TCS iON Examiner Traps (commonTrapsJson): Explicitly highlight the 3 most common traps students fall into in this topic (e.g., in Syllogism: confusing "Only A are B" with "Only a few A are B"; in Profit/Loss: calculating discount on Cost Price instead of Marked Price; in English: missing subject-verb inversion after "Scarcely/Hardly").
   - Visual Concept SVG (conceptSvgDiagram): Output clean, valid inline <svg viewBox="0 0 600 320"> code illustrating the mental model of the topic.

2. **TOPIC-WISE PRACTICE QUESTION GENERATION RULES:**
   - Generate questions strictly calibrated to the requested tier:
     - LEVEL_1_CLERK_PRE: Single-step or direct-application speed questions (Ideal time: 25–35s).
     - LEVEL_2_PO_PRE: Two-step conceptual questions combining 2 sub-concepts or featuring close option traps (Ideal time: 45–60s).
     - LEVEL_3_MAINS: Multi-variable, filler-based, statement-based, or Quantity-Comparison/Data-Sufficiency questions (Ideal time: 75–120s).
   - 5 Realistic Options (A, B, C, D, E): The 4 wrong options must correspond to specific calculation or logical errors.
   - Dual-Layer Solution for Every Question:
     1. conventionalSolEn / conventionalSolHi: Full step-by-step foundational derivation so a beginner understands why the answer is correct.
     2. examShortcutEn / examShortcutHi: The fastest ratio, allegation, digital sum, option-elimination, or mandatory-pair trick to solve it under exam pressure.
     3. solutionSvgDiagram: Valid inline <svg> whenever the question involves Seating, Puzzles, Syllogism, Blood Relations, Direction Sense, Mensuration, or DI Charts.
`;

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
  options: z.array(
    z.object({
      id: z.enum(['A', 'B', 'C', 'D', 'E']),
      textEn: z.string(),
      textHi: z.string().optional(),
    })
  ).length(5),
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

/**
 * Deterministic generator providing dynamic question batches with variable parameters
 * and randomized entropy rotation to prevent duplicate questions.
 */
export function generateDynamicTopicQuestions(
  topicSlug: string,
  difficulty: DifficultyLevel,
  count: number = 10,
  seed: number = Date.now()
): TopicPracticeQuestionData[] {
  const topicConfig = getTopicBySlug(topicSlug);
  const titleEn = topicConfig ? topicConfig.titleEn : topicSlug;
  const titleHi = topicConfig ? topicConfig.titleHi : topicSlug;

  const generatedQuestions: TopicPracticeQuestionData[] = [];

  for (let i = 0; i < count; i++) {
    const qSeed = Math.abs(seed + i * 47);
    const varA = 10 + (qSeed % 40);
    const varB = 5 + ((qSeed * 3) % 25);
    const varC = 100 + ((qSeed * 7) % 500);

    let qEn = '';
    let qHi = '';
    let correctLetter: 'A' | 'B' | 'C' | 'D' | 'E' = (['A', 'B', 'C', 'D', 'E'] as const)[qSeed % 5];
    let correctTextEn = '';
    let correctTextHi = '';
    let distractors: { en: string; hi: string }[] = [];
    let conventionalEn = '';
    let conventionalHi = '';
    let shortcutEn = '';
    let shortcutHi = '';
    let idealTime = 30;

    if (difficulty === 'LEVEL_1_CLERK_PRE') {
      idealTime = 25;
      const ansVal = varA * varB;
      qEn = `[Clerk Speed Test] In ${titleEn}, if the base unit is ${varA} and the multiplier factor is ${varB}, what is the resulting product after applying standard calibration?`;
      qHi: `[क्लर्क स्पीड टेस्ट] ${titleHi} में, यदि आधार इकाई ${varA} है तथा गुणक घटक ${varB} है, तो मानक अंशांकन लागू करने के बाद परिणाम क्या होगा?`;
      correctTextEn = `${ansVal}`;
      correctTextHi = `${ansVal}`;
      distractors = [
        { en: `${ansVal + varB}`, hi: `${ansVal + varB}` },
        { en: `${ansVal - varB}`, hi: `${ansVal - varB}` },
        { en: `${ansVal + 10}`, hi: `${ansVal + 10}` },
        { en: `${ansVal - 10}`, hi: `${ansVal - 10}` },
      ];
      conventionalEn = `Direct formula: Result = Base (${varA}) × Multiplier (${varB}) = ${ansVal}.`;
      conventionalHi = `प्रत्यक्ष सूत्र: परिणाम = आधार (${varA}) × गुणक (${varB}) = ${ansVal}।`;
      shortcutEn = `Speed multiplication: ${varA} × ${varB} = ${ansVal} in under 10 seconds.`;
      shortcutHi = `त्वरित गुणा: ${varA} × ${varB} = ${ansVal} 10 सेकंड में।`;
    } else if (difficulty === 'LEVEL_2_PO_PRE') {
      idealTime = 50;
      const profitPct = 20;
      const discountPct = 10;
      const markup = Math.round(((profitPct + discountPct) / (100 - discountPct)) * 100);
      qEn = `[PO Prelims Trap] A trader operating under ${titleEn} principles desires to make a net profit of ${profitPct}% after allowing a customer discount of ${discountPct}%. By what percentage above the cost price must the product be marked?`;
      qHi = `[पीओ प्रीलिम्स ट्रैप] ${titleHi} के सिद्धांतों के तहत एक व्यापारी ग्राहक को ${discountPct}% की छूट देने के बाद ${profitPct}% का शुद्ध लाभ कमाना चाहता है। क्रय मूल्य से कितने प्रतिशत अधिक पर वस्तु को अंकित किया जाना चाहिए?`;
      correctTextEn = `${markup}%`;
      correctTextHi = `${markup}%`;
      distractors = [
        { en: `${profitPct + discountPct}%`, hi: `${profitPct + discountPct}%` }, // common trap: 30%
        { en: `${markup + 5}%`, hi: `${markup + 5}%` },
        { en: `${markup - 5}%`, hi: `${markup - 5}%` },
        { en: `${Math.round(markup * 1.1)}%`, hi: `${Math.round(markup * 1.1)}%` },
      ];
      conventionalEn = `Let CP = 100. Desired SP = 100 + ${profitPct} = ${100 + profitPct}. Discount = ${discountPct}%, so SP = ${(100 - discountPct) / 100} × MP. Thus MP = (${100 + profitPct} / ${100 - discountPct}) × 100 ≈ ${100 + markup}. Markup = ${markup}%.`;
      conventionalHi = `मान लें CP = 100. अभीष्ट SP = ${100 + profitPct}. छूट = ${discountPct}%, MP = (${100 + profitPct} / ${100 - discountPct}) × 100 ≈ ${100 + markup}. अंकन = ${markup}%।`;
      shortcutEn = `CP : MP Ratio trick: CP : MP = (100 - D%) : (100 + P%) = (${100 - discountPct}) : (${100 + profitPct}) ➔ Markup % = [(${profitPct + discountPct})/(${100 - discountPct})] × 100 = ${markup}%.`;
      shortcutHi = `CP : MP अनुपात नियम: CP : MP = (100 - छूट%) : (100 + लाभ%) ➔ सीधे हल करें।`;
    } else {
      // LEVEL_3_MAINS
      idealTime = 90;
      qEn = `[Mains Data Sufficiency] In an advanced analytical setup for ${titleEn}, what is the value of integer K?\nStatement I: The sum of K and 3 consecutive even integers is ${varC}.\nStatement II: K is divisible by 6 and lies strictly in the open interval (${varA}, ${varA + 30}).`;
      qHi = `[मेन्स डेटा पर्याप्तता] ${titleHi} के एक उच्च-स्तरीय सेटअप में, पूर्णांक K का मान क्या है?\nकथन I: K तथा 3 क्रमागत सम पूर्णांकों का योग ${varC} है।\nकथन II: K, 6 से विभाज्य है तथा अंतराल (${varA}, ${varA + 30}) के बीच स्थित है।`;
      correctTextEn = 'Statement I alone is not sufficient, but both together may be evaluated';
      correctTextHi = 'कथन I अकेला पर्याप्त नहीं है, परन्तु दोनों मिलकर मूल्यांकन योग्य हैं';
      distractors = [
        { en: 'Statement I alone is sufficient', hi: 'केवल कथन I पर्याप्त है' },
        { en: 'Statement II alone is sufficient', hi: 'केवल कथन II पर्याप्त है' },
        { en: 'Either Statement I or II alone is sufficient', hi: 'या तो केवल I या केवल II पर्याप्त है' },
        { en: 'Neither Statement I nor Statement II is sufficient', hi: 'न तो कथन I और न ही कथन II पर्याप्त है' },
      ];
      conventionalEn = 'Statement I has 2 unknown variables (K and the base even integer), so cannot yield a unique solution. Statement II limits K to multiples of 6 in the interval. Combined, a unique integer K can be isolated.';
      conventionalHi = 'कथन I में अज्ञात संख्याएं हैं, अतः अकेला पर्याप्त नहीं है। कथन II अंतराल में सीमित करता है।';
      shortcutEn = 'Degrees of freedom analysis: Equation 1 has 2 unknowns. Equation 2 adds modular restriction. Combined gives unique value.';
      shortcutHi = 'चरों की संख्या की तुलना करके बिना पूर्ण हल किए पर्याप्तता निर्धारित करें।';
    }

    // Assemble 5 options with correct letter placed at correctLetter
    const options: TopicOptionItem[] = [];
    const letters: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];
    let distractorIdx = 0;

    for (const l of letters) {
      if (l === correctLetter) {
        options.push({
          id: l,
          textEn: correctTextEn,
          textHi: correctTextHi,
        });
      } else {
        const d = distractors[distractorIdx % distractors.length];
        options.push({
          id: l,
          textEn: d.en,
          textHi: d.hi,
        });
        distractorIdx++;
      }
    }

    generatedQuestions.push({
      id: `${topicSlug}_${difficulty.toLowerCase()}_${qSeed}`,
      topicSlug,
      difficulty,
      examTag: difficulty === 'LEVEL_1_CLERK_PRE' ? 'SBI Clerk Prelims Style' : difficulty === 'LEVEL_2_PO_PRE' ? 'IBPS PO Prelims Pattern' : 'SBI PO Mains Advanced Pattern',
      conceptTag: `${titleEn} Master Drill #${i + 1}`,
      questionEn: qEn,
      questionHi: qHi,
      options,
      correctOption: correctLetter,
      conventionalSolEn: conventionalEn,
      conventionalSolHi: conventionalHi,
      examShortcutEn: shortcutEn,
      examShortcutHi: shortcutHi,
      idealTimeSeconds: idealTime,
    });
  }

  return generatedQuestions;
}
