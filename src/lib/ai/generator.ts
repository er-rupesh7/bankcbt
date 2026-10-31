import { z } from 'zod';
import {
  buildEnglishEntropyContext,
  EnglishEntropyContext,
  RC_DOMAIN_MATRIX,
  GRAMMAR_TRAP_POOL,
  VOCAB_SEED_CLUSTERS,
} from '../englishEntropyEngine';

export {
  buildEnglishEntropyContext,
  RC_DOMAIN_MATRIX,
  GRAMMAR_TRAP_POOL,
  VOCAB_SEED_CLUSTERS,
};
export type { EnglishEntropyContext };

// ============================================================================
// 1. ZOD JSON SCHEMAS FOR STRUCTURED AI OUTPUT (IBPS / TCS iON STANDARD)
// ============================================================================

export const OptionItemSchema = z.object({
  id: z.enum(['A', 'B', 'C', 'D', 'E']),
  text_en: z.string().min(1, 'English option text is required'),
  text_hi: z.string().optional(),
});

export const BankingQuestionSchema = z.object({
  q_id: z.number().int().min(1),
  comprehension_group_id: z.string().optional().describe('Group ID if linked to a puzzle, DI set, or RC set (e.g. PUZZLE_SET_1, RC_SET_1)'),
  direction_en: z.string().optional().describe('Directions/Passage/Puzzle clues in English'),
  direction_hi: z.string().optional().describe('Directions/Passage/Puzzle clues in Hindi'),
  common_context_html: z.string().optional().describe('Shared reading comprehension passage, cloze test text, or jumbled sentences'),
  question_stem: z.string().optional().describe('Specific question stem or inquiry separated from common passage'),
  question_en: z.string().min(5, 'Question text in English is required'),
  question_hi: z.string().optional(),
  options: z.array(OptionItemSchema).length(5, 'Banking exams strictly require exactly 5 options (A, B, C, D, E)'),
  correct_option: z.enum(['A', 'B', 'C', 'D', 'E']),
  solution_en: z.string().min(10, 'Step-by-step logical deduction, grammatical rule proof, or textbook method'),
  solution_hi: z.string().optional(),
});

export const IBPSStandardSectionOutputSchema = z.object({
  exam_code: z.enum([
    'SBI_PO_PRELIMS',
    'SBI_PO_MAINS',
    'SBI_CLERK_PRELIMS',
    'SBI_CLERK_MAINS',
    'IBPS_PO_PRELIMS',
    'IBPS_PO_MAINS',
    'IBPS_CLERK_PRELIMS',
    'IBPS_CLERK_MAINS',
    'IBPS_RRB_PO_PRELIMS',
    'IBPS_RRB_PO_MAINS',
    'IBPS_RRB_CLERK_PRELIMS',
    'IBPS_RRB_CLERK_MAINS',
  ]),
  section_id: z.enum([
    'REASONING',
    'QUANTITATIVE',
    'ENGLISH',
    'GENERAL_AWARENESS',
    'COMPUTER_KNOWLEDGE',
  ]),
  duration_seconds: z.number().int().min(600).max(3600),
  positive_marks: z.number().positive(),
  negative_marks: z.number().positive(),
  questions: z.array(BankingQuestionSchema),
});

export type IBPSStandardSectionOutput = z.infer<typeof IBPSStandardSectionOutputSchema>;

// ============================================================================
// 2. TCS iON PRINCIPAL ENGLISH PAPER SETTER SYSTEM PROMPT
// ============================================================================

export const TCS_ION_ENGLISH_PAPER_SETTER_SYSTEM_PROMPT = `
### ROLE & OBJECTIVE
You are the Principal English Language Paper Setter for TCS iON Indian Banking Examinations (SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, and IBPS RRB Mains). Your task is to generate a 100% unique, non-repetitive, exam-accurate English Language section that strictly follows the official topic-wise question distribution for the requested <EXAM_TYPE> and <STAGE>.

---

### 1. STRICT ANTI-REPETITION & ENTROPY RULES (CRITICAL)
1. **BANNED DEFAULT TOPICS:** You are STRICTLY FORBIDDEN from writing Reading Comprehension or Cloze Test passages about "Central Bank Digital Currencies (CBDCs)" or "Digital Rupee (e₹)" unless explicitly instructed.
2. **DYNAMIC SEED INJECTION:** You MUST base your passages and questions on the injected <ENTROPY_SEED>:
   - Primary RC Passage Domain: {{rcThemePrimary}}
   - Secondary RC Passage Domain (Mains only): {{rcThemeSecondary}}
   - Cloze Test Domain: {{clozeTheme}}
   - Mandatory Grammar Rules to test: {{grammarRules}}
   - Mandatory Vocabulary Seed Pool: {{vocabSeeds}}
3. **UNIQUE QUESTION IDs & ZERO DUPLICATION:** Every single question from q_no: 1 to q_no: N MUST have a completely distinct stem, distinct options, and distinct grammatical/logical focus. NEVER repeat a question or recycle sentences across the same paper.
4. **SHARED CONTEXT vs. QUESTION STEM SEPARATION:**
   - For Reading Comprehension (Q. 1–10 or Q. 1–8), Cloze Test, and Para Jumbles, place the shared passage or jumbled sentences inside common_context_html.
   - Each individual question inside that group MUST have its own unique question_stem (e.g., Q1 asks for Central Theme, Q2 is an Inference question, Q3 asks "Which of the following is FALSE according to paragraph 2?", Q4 asks for a filler inside the passage, Q5-Q7 test contextual Synonyms/Antonyms of bolded words in the passage).

---

### 2. LOCKED TOPIC-WISE QUESTION DISTRIBUTION BY EXAM TYPE
You MUST generate the exact number of questions per sub-topic so the sum equals the exact section total:

#### A. SBI PO PRELIMS (Total = 40 Questions | 40 Marks | 20 Mins)
- **Q1 – Q10 (10 Qs): Reading Comprehension** (450–550 words editorial passage on {{rcThemePrimary}}).
  - Breakdown: 1 Central Theme/Tone + 3 Indirect Inference/Deduction + 2 Multi-statement True/False (I, II, III) + 1 Blank/Idiom inside passage + 2 Contextual Synonyms + 1 Contextual Antonym.
- **Q11 – Q16 (6 Qs): Cloze Test (New Pattern Word Replacement)** (220-word passage on {{clozeTheme}} with 6 numbered blanks [A] to [F], each containing a bold base word that may or may not need replacement).
- **Q17 – Q22 (6 Qs): Error Detection** (Divide complex 35-word sentences into 4 parts (A), (B), (C), (D) with (E) No Error, testing {{grammarRules}}).
- **Q23 – Q27 (5 Qs): Para Jumbles (Sentence Rearrangement)** (6 jumbled sentences A, B, C, D, E, F forming a cohesive analytical paragraph; ask for 1st, 2nd, 3rd, 5th, and 6th sentences after rearrangement).
- **Q28 – Q32 (5 Qs): Double Fillers** (Sentences with two blanks requiring high-level contextual vocabulary & collocation pairs).
- **Q33 – Q36 (4 Qs): Word Swap / Word Rearrangement** (Sentence with 4 bold words (A), (B), (C), (D); identify the swap pair like A-D & B-C needed to make it meaningful).
- **Q37 – Q40 (4 Qs): Phrase Replacement / Sentence Connectors** (2 Phrase Improvement + 2 Sentence Starters/Connectors).

#### B. IBPS PO PRELIMS (Total = 30 Questions | 30 Marks | 20 Mins)
- **Q1 – Q9 (9 Qs): Reading Comprehension** (5 Comprehension/Inference + 1 Blank inside RC + 2 Synonyms + 1 Antonym).
- **Q10 – Q14 (5 Qs): Error Detection** (testing 5 distinct rules from {{grammarRules}}).
- **Q15 – Q19 (5 Qs): Cloze Test** (5 blanks in a cohesive passage on {{clozeTheme}}).
- **Q20 – Q24 (5 Qs): Para Jumbles** (5 jumbled sentences A, B, C, D, E).
- **Q25 – Q27 (3 Qs): Word Swap** (A-B, B-D, etc.).
- **Q28 – Q30 (3 Qs): Phrase Replacement / Sentence Improvement**.

#### C. SBI CLERK PRELIMS & IBPS CLERK PRELIMS (Total = 30 Questions | 30 Marks | 20 Mins)
- **Q1 – Q8 (8 Qs): Reading Comprehension** (350-word accessible socio-economic or narrative passage: 5 Direct/Inference + 2 Synonyms + 1 Antonym).
- **Q9 – Q13 (5 Qs): Cloze Test** (Single-blank contextual vocabulary).
- **Q14 – Q18 (5 Qs): Error Spotting** (Direct single-part grammatical error).
- **Q19 – Q23 (5 Qs): Para Jumbles** (5 sentences A, B, C, D, E with clear chronological or pronoun connectors).
- **Q24 – Q27 (4 Qs): Misspelt / Contextually Inappropriate Word** (4 bold words in a sentence; find the wrongly spelt or inappropriate one).
- **Q28 – Q30 (3 Qs): Single/Double Fillers OR Phrase Replacement**.

#### D. SBI PO MAINS, IBPS PO MAINS, SBI/IBPS CLERK MAINS & RRB MAINS (Total = 40 Questions)
- **Q1 – Q14 (14 Qs): Two High-Density Editorial Reading Comprehensions** (RC-1: 7 Qs on {{rcThemePrimary}}; RC-2: 7 Qs on {{rcThemeSecondary}} including Author's Assumption, Strengthen/Weaken, Tone, and Idiomatic Inference).
- **Q15 – Q20 (6 Qs): Multi-Layer Cloze Passage** (Phrase-level or Dual-word blanks + Root-word transformation).
- **Q21 – Q25 (5 Qs): Mains Para Jumble with Odd-Sentence-Out + Filler** (6 sentences where 1 sentence is an odd-one-out, 1 sentence has a blank to fill, and the remaining 5 form a logical sequence).
- **Q26 – Q30 (5 Qs): Multi-Statement Error Identification** (3 sentences I, II, III each split into parts; identify combinations like "Both I-(B) and III-(A) are erroneous").
- **Q31 – Q35 (5 Qs): Match the Column (2 Columns A-B-C and D-E-F) + Sentence Starters/Connectors**.
- **Q36 – Q40 (5 Qs): Contextual Word Usage / Triple Fillers / Phrasal Verb Application**.

---

### 3. ALGORITHMIC QUALITY & TRAP DESIGN RULES
1. **5 Options Mandatory (A, B, C, D, E):** Every question must have 5 options.
2. **Close Distractors:** For Vocabulary and Fillers, at least 2 wrong options must be near-synonyms that fail only because of collocation or tone (e.g., ameliorate vs placate).
3. **Para Jumble Mandatory Pair Proof:** In the solution_en for Para Jumbles, explicitly write out the Opening Sentence logic, Mandatory Pair links (e.g., Pronoun "This framework" in D refers to the policy introduced in B -> B-D link), and Concluding Sentence.
4. **Chunked Generation Support:** Because 40 detailed questions exceed a single LLM output window, accept a batch_range parameter (e.g., Batch 1: Q1-Q16 [RC + Cloze], Batch 2: Q17-Q27 [Errors + Para Jumble], Batch 3: Q28-Q40 [Fillers + Word Swap + Connectors]) and output 100% complete questions for that batch without truncation.
`;

export const IBPS_PAPER_SETTER_SYSTEM_PROMPT = `
You are the Chief Assessment Architect and Question Paper Setter for Indian Banking Exams (SBI PO/Clerk, IBPS PO/Clerk, and IBPS RRB PO/Clerk).

Your mandate is to generate production-grade, syllabus-strict question papers matching official TCS iON live exam patterns.

### STRICT EXAM CONFIGURATION MATRIX:
1. SBI_PO_PRELIMS (60m | 100 Qs | 100 Marks):
   - English Language: 40 Qs, 40 Marks, 20 mins, English only
   - Quantitative Aptitude: 30 Qs, 30 Marks, 20 mins, Bilingual EN/HI
   - Reasoning Ability: 30 Qs, 30 Marks, 20 mins, Bilingual EN/HI

2. SBI_PO_MAINS (210m | 170 MCQs + 3 Descriptive | 230 Marks):
   - Reasoning & Computer: 40 Qs, 60 Marks (1.5/Q), 50 mins, Bilingual
   - Data Analysis & Interpretation: 30 Qs, 60 Marks (2.0/Q), 45 mins, Bilingual
   - General/Economy/Banking: 60 Qs, 60 Marks (1.0/Q), 45 mins, Bilingual
   - English Language: 40 Qs, 20 Marks (0.5/Q), 40 mins, English only
   - Descriptive Test: 3 Qs (Email, Situation Analysis, Report/Precis), 30 Marks, 30 mins

3. SBI_CLERK_PRELIMS & IBPS_CLERK_PRELIMS (60m | 100 Qs | 100 Marks):
   - English Language: 30 Qs, 30 Marks, 20 mins, English only
   - Numerical Ability: 35 Qs, 35 Marks, 20 mins, Bilingual
   - Reasoning Ability: 35 Qs, 35 Marks, 20 mins, Bilingual

4. SBI_CLERK_MAINS (160m | 190 Qs | 200 Marks):
   - General/Financial Awareness: 50 Qs, 50 Marks (1.0/Q), 35 mins
   - General English: 40 Qs, 40 Marks (1.0/Q), 35 mins, English only
   - Quantitative Aptitude: 50 Qs, 50 Marks (1.0/Q), 45 mins
   - Reasoning Ability & Computer: 50 Qs, 60 Marks (1.2/Q), 45 mins

5. IBPS_PO_PRELIMS (60m | 100 Qs | 100 Marks):
   - English Language: 30 Qs, 30 Marks (1.0/Q), 20 mins, English only
   - Quantitative Aptitude: 35 Qs, 30 Marks (0.857/Q), 20 mins, Bilingual
   - Reasoning Ability: 35 Qs, 40 Marks (1.143/Q), 20 mins, Bilingual

6. IBPS_PO_MAINS (190m | 170 MCQs + 2 Descriptive | 225 Marks):
   - Reasoning & Computer: 40 Qs, 60 Marks (1.5/Q), 45 mins
   - General/Banking/Digital Awareness: 50 Qs, 60 Marks (1.2/Q), 35 mins
   - English Language: 40 Qs, 20 Marks (0.5/Q), 35 mins, English only
   - Data Analysis & Interpretation: 40 Qs, 60 Marks (1.5/Q), 45 mins
   - Descriptive Paper: 2 Qs (Essay & Reading Comprehension), 25 Marks, 30 mins, English only

7. IBPS_CLERK_MAINS (125m | 160 Qs | 200 Marks):
   - General/Financial Awareness: 40 Qs, 50 Marks (1.25/Q), 20 mins
   - General English: 40 Qs, 40 Marks (1.0/Q), 35 mins, English only
   - Reasoning Ability & Computer: 40 Qs, 60 Marks (1.5/Q), 35 mins
   - Quantitative Aptitude: 40 Qs, 50 Marks (1.25/Q), 35 mins

8. IBPS_RRB_PO_PRELIMS & IBPS_RRB_CLERK_PRELIMS (45m | 80 Qs | 80 Marks):
   - Reasoning Ability: 40 Qs, 40 Marks (1.0/Q), 25 mins, Bilingual
   - Quantitative Aptitude: 40 Qs, 40 Marks (1.0/Q), 20 mins, Bilingual

9. IBPS_RRB_PO_MAINS & IBPS_RRB_CLERK_MAINS (120m | 200 Qs | 200 Marks):
   - Reasoning Ability: 40 Qs, 50 Marks (1.25/Q), 30 mins
   - Computer Knowledge: 40 Qs, 20 Marks (0.50/Q), 15 mins
   - General Awareness: 40 Qs, 40 Marks (1.00/Q), 15 mins
   - Optional Language (English OR Hindi): 40 Qs, 40 Marks (1.00/Q), 30 mins
   - Quantitative Aptitude: 40 Qs, 50 Marks (1.25/Q), 30 mins

CRITICAL SCORING & PARSING RULES:
1. Negative Marking Formula: exactly 0.25 * (positive_marks).
2. Options Count: exactly 5 options (A, B, C, D, E).
3. Evaluated Rule: Answered & Marked for Review is evaluated.
4. Output must be strictly valid JSON conforming to IBPSStandardSectionOutputSchema.
`;

export const TCS_ION_QUANT_REASONING_PAPER_SETTER_PROMPT = `
You are an expert Quant & Reasoning Content Developer for Indian Banking Exams (SBI PO/Clerk, IBPS PO/Clerk, IBPS RRB PO/Clerk, RBI Grade B). 

Your objective is to generate authentic, flawless, examination-grade questions strictly mirroring the authentic Previous Year Question (PYQ) blueprints from TCS/IBPS exam patterns.

### 1. ABSOLUTE ZERO-TOLERANCE RULES (WHAT NEVER TO GENERATE)
1. NEVER use meta-contextual openings:
   - FORBIDDEN: "In a banking assessment scenario...", "In a test on...", "Regarding [Topic]...", "In an analytical problem..."
   - Start directly with the equation or the scenario narrative.
2. NEVER use sterile placeholder jargon like "Parameter P", "Base Input", "Secondary Factor", "Metric A".
   - Use natural exam entities: Person names (A, B, C or Amit, Priya), physical objects (liters of milk/water, toys, cost price/selling price, days, pipes A and B, train speed in km/h).
3. NEVER confuse topic formats:
   - If topic is "Simplification" or "Approximation", it MUST be a pure numeric/algebraic equation solving for '?' or 'x'. It must NEVER be an arithmetic word problem.
   - If topic is "Percentages", "Ratio & Proportion", "Profit & Loss", "Time & Work", etc., use real-world banking word-problem phrasing.

### 2. TOPIC FORMAT DICTIONARY & BLUEPRINTS
A. Simplification (SBI/IBPS Clerk Prelims, RRB Clerk): Exact BODMAS, square/cube roots, percentages of standard numbers, powers/surds.
B. Approximation (SBI/IBPS PO Prelims, RRB PO Prelims): Decimal numbers close to round integers, surds requiring approximation.
C. Arithmetic Word Problems (Clerk Pre / PO Pre / Mains): Realistic contexts (Partnerships with unequal investment time; Boats & Streams upstream/downstream; Train overtaking bridge/man; Profit & discount on Marked Price).
D. Data Sufficiency (SBI PO / IBPS PO Mains): Standard Lead with Statements I and II and 5 standard sufficiency choices.
E. Quantity Comparison / Q1 vs Q2 (PO Pre & Mains): Quantity I vs Quantity II evaluation across standard 5 relation choices.
`;


// ============================================================================
// 3. PROMPT GENERATORS (WITH ENTROPY INJECTION & CHUNKED BATCH SUPPORT)
// ============================================================================

export interface BuildEnglishPromptOptions {
  examCode: string;
  stage?: 'PRELIMS' | 'MAINS';
  mockNumber: number;
  shiftSeed?: number;
  batchRange?: string; // e.g. "Batch 1: Q1-Q16 [RC + Cloze]"
  positiveMarks?: number;
  durationSeconds?: number;
}

export function buildEnglishSectionPrompt(options: BuildEnglishPromptOptions): string {
  const {
    examCode,
    mockNumber,
    shiftSeed = 42,
    batchRange,
    positiveMarks = 1.0,
    durationSeconds = 1200,
  } = options;

  const isMains = options.stage === 'MAINS' || examCode.toUpperCase().includes('MAINS');
  const entropy = buildEnglishEntropyContext(mockNumber, shiftSeed);

  let distText = '';
  let totalQs = 30;

  if (isMains) {
    totalQs = 40;
    distText = `Exam Category: MAINS (Total = 40 Questions | 40 mins)
- Q1 – Q14 (14 Qs): Two High-Density Editorial Reading Comprehensions
  * RC-1 (7 Qs): Passage domain: "${entropy.rcThemePrimary}"
  * RC-2 (7 Qs): Passage domain: "${entropy.rcThemeSecondary}" (Author's Assumption, Strengthen/Weaken, Tone, Idiomatic Inference)
- Q15 – Q20 (6 Qs): Multi-Layer Cloze Passage (Phrase-level or Dual-word blanks + Root-word transformation) on domain "${entropy.clozeTheme}"
- Q21 – Q25 (5 Qs): Mains Para Jumble with Odd-Sentence-Out + Filler (6 sentences: 1 odd-one-out, 1 blank to fill, 5 in logical sequence)
- Q26 – Q30 (5 Qs): Multi-Statement Error Identification (3 sentences I, II, III; testing: ${entropy.grammarRules.slice(0, 3).join('; ')})
- Q31 – Q35 (5 Qs): Match the Column (Columns A-B-C & D-E-F) + Sentence Starters/Connectors
- Q36 – Q40 (5 Qs): Contextual Word Usage / Triple Fillers / Phrasal Verbs (using vocab pool: ${entropy.vocabSeeds.join(', ')})`;
  } else if (examCode.toUpperCase().includes('SBI_PO')) {
    totalQs = 40;
    distText = `Exam Category: SBI PO PRELIMS (Total = 40 Questions | 40 Marks | 20 Mins)
- Q1 – Q10 (10 Qs): Reading Comprehension on "${entropy.rcThemePrimary}" (450–550 words editorial passage)
  * Breakdown: 1 Central Theme/Tone + 3 Indirect Inference/Deduction + 2 Multi-statement True/False (I, II, III) + 1 Blank/Idiom inside passage + 2 Contextual Synonyms + 1 Contextual Antonym
- Q11 – Q16 (6 Qs): Cloze Test (New Pattern Word Replacement) on "${entropy.clozeTheme}" (220-word passage with 6 numbered blanks [A] to [F])
- Q17 – Q22 (6 Qs): Error Detection (Divide 35-word sentences into 4 parts (A), (B), (C), (D) + (E) No Error, testing: ${entropy.grammarRules.join('; ')})
- Q23 – Q27 (5 Qs): Para Jumbles (Rearrange 6 sentences A, B, C, D, E, F; questions for 1st, 2nd, 3rd, 5th, 6th)
- Q28 – Q32 (5 Qs): Double Fillers (Contextual vocabulary & collocations with words like: ${entropy.vocabSeeds.join(', ')})
- Q33 – Q36 (4 Qs): Word Swap / Word Rearrangement (Sentence with 4 bold words (A), (B), (C), (D))
- Q37 – Q40 (4 Qs): Phrase Replacement / Sentence Connectors (2 Phrase Improvement + 2 Sentence Starters/Connectors)`;
  } else if (examCode.toUpperCase().includes('CLERK')) {
    totalQs = 30;
    distText = `Exam Category: SBI CLERK PRELIMS & IBPS CLERK PRELIMS (Total = 30 Questions | 30 Marks | 20 Mins)
- Q1 – Q8 (8 Qs): Reading Comprehension on "${entropy.rcThemePrimary}" (350-word accessible socio-economic/narrative passage: 5 Direct/Inference + 2 Synonyms + 1 Antonym)
- Q9 – Q13 (5 Qs): Cloze Test (Single-blank contextual vocabulary) on "${entropy.clozeTheme}"
- Q14 – Q18 (5 Qs): Error Spotting (Direct single-part grammatical error testing: ${entropy.grammarRules.slice(0, 5).join('; ')})
- Q19 – Q23 (5 Qs): Para Jumbles (5 sentences A, B, C, D, E with clear chronological or pronoun connectors)
- Q24 – Q27 (4 Qs): Misspelt / Contextually Inappropriate Word (4 bold words in a sentence)
- Q28 – Q30 (3 Qs): Single/Double Fillers OR Phrase Replacement (using words from: ${entropy.vocabSeeds.join(', ')})`;
  } else {
    // Default IBPS PO PRELIMS
    totalQs = 30;
    distText = `Exam Category: IBPS PO PRELIMS (Total = 30 Questions | 30 Marks | 20 Mins)
- Q1 – Q9 (9 Qs): Reading Comprehension on "${entropy.rcThemePrimary}" (5 Comprehension/Inference + 1 Blank inside RC + 2 Synonyms + 1 Antonym)
- Q10 – Q14 (5 Qs): Error Detection (testing 5 distinct rules from: ${entropy.grammarRules.slice(0, 5).join('; ')})
- Q15 – Q19 (5 Qs): Cloze Test on "${entropy.clozeTheme}" (5 blanks in a cohesive passage)
- Q20 – Q24 (5 Qs): Para Jumbles (5 jumbled sentences A, B, C, D, E)
- Q25 – Q27 (3 Qs): Word Swap (A-B, B-D, etc.)
- Q28 – Q30 (3 Qs): Phrase Replacement / Sentence Improvement`;
  }

  const negativeMarks = Math.round(positiveMarks * 0.25 * 1000) / 1000;

  return `Generate an authentic, 100% unique English Language section for exam "${examCode}".

### DYNAMIC ENTROPY SEED INJECTION:
- Mock Number: ${mockNumber}
- Primary RC Passage Domain: "${entropy.rcThemePrimary}"
- Secondary RC Passage Domain: "${entropy.rcThemeSecondary}"
- Cloze Test Domain: "${entropy.clozeTheme}"
- Mandatory Grammar Rules to test:
${entropy.grammarRules.map((r, i) => `  ${i + 1}. ${r}`).join('\n')}
- Mandatory Vocabulary Seed Pool: ${entropy.vocabSeeds.join(', ')}
- BANNED DEFAULT TOPICS: ${entropy.bannedTopics.join(', ')} (NEVER write passages on these topics)

### LOCKED TOPIC-WISE QUESTION DISTRIBUTION:
${distText}

${
  batchRange
    ? `### ACTIVE BATCH RANGE (CHUNKED GENERATION):
You MUST only generate questions for the requested range:
"${batchRange}"
Ensure 100% complete questions for this batch without truncation, with 5 options (A, B, C, D, E) per question.`
    : `### FULL GENERATION:
Generate all ${totalQs} questions strictly adhering to the distribution above.`
}

### CRITICAL RULES:
1. 5 Options Mandatory (A, B, C, D, E) for every question.
2. Shared Context Separation: Place the shared passage, cloze text, or jumbled sentences in "common_context_html". Place each question's individual inquiry in "question_en" (and "question_stem").
3. Close Distractors: For Vocabulary and Fillers, at least 2 wrong options must be near-synonyms that fail only because of collocation or tone.
4. Para Jumble Proof: In "solution_en", explicitly write out Opening Sentence logic, Mandatory Pair links, and Concluding Sentence.
5. Mathematical / Quantitative notation: Use KaTeX notation (e.g. $A$, $B$) where appropriate.
6. Parameters: positive_marks: ${positiveMarks}, negative_marks: ${negativeMarks}, duration_seconds: ${durationSeconds}.
7. Output must be strictly valid JSON conforming to IBPSStandardSectionOutputSchema.`;
}

export function buildSectionPrompt(
  examCode: string,
  sectionId: 'REASONING' | 'QUANTITATIVE' | 'ENGLISH' | 'GENERAL_AWARENESS' | 'COMPUTER_KNOWLEDGE',
  positiveMarks: number,
  durationSeconds: number,
  questionCount: number,
  mockNumber: number = 1
): string {
  if (sectionId === 'ENGLISH') {
    return buildEnglishSectionPrompt({
      examCode,
      mockNumber,
      positiveMarks,
      durationSeconds,
    });
  }

  const negativeMarks = Math.round(positiveMarks * 0.25 * 1000) / 1000;

  return `Generate an authentic ${questionCount}-question section for exam "${examCode}", section "${sectionId}".
Parameters:
- positive_marks: ${positiveMarks}
- negative_marks: ${negativeMarks}
- duration_seconds: ${durationSeconds}

Ensure:
1. All questions follow official banking difficulty calibration (Clerk = high speed single-step, PO = multi-step moderate, Mains = high conceptual depth).
2. Exactly 5 options (A, B, C, D, E) for every question.
3. Include step-by-step solutions and shortcut tricks.
4. Output strict JSON conforming to IBPSStandardSectionOutputSchema.`;
}

// ============================================================================
// 4. PROGRAMMATIC VERIFICATION ENGINE
// ============================================================================

export interface SectionVerificationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function verifyIBPSSectionOutput(data: IBPSStandardSectionOutput): SectionVerificationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Negative mark consistency: negative_marks === 0.25 * positive_marks
  const expectedNeg = Math.round(data.positive_marks * 0.25 * 1000) / 1000;
  const actualNeg = Math.round(data.negative_marks * 1000) / 1000;
  if (Math.abs(expectedNeg - actualNeg) > 0.005) {
    errors.push(
      `Negative marks (${data.negative_marks}) does not equal 1/4th of positive marks (${data.positive_marks}, expected ${expectedNeg}).`
    );
  }

  // 2. Validate all questions
  data.questions.forEach((q, idx) => {
    // Exactly 5 options
    if (q.options.length !== 5) {
      errors.push(`Question #${idx + 1} (q_id: ${q.q_id}) does not have 5 options (found ${q.options.length}).`);
    }

    // Option IDs A, B, C, D, E
    const optIds = q.options.map((o) => o.id);
    const expected = ['A', 'B', 'C', 'D', 'E'];
    if (!expected.every((id) => (optIds as string[]).includes(id))) {
      errors.push(`Question #${idx + 1} options must be labeled exactly A, B, C, D, E.`);
    }

    // Correct option matches one of the 5 options
    if (!optIds.includes(q.correct_option)) {
      errors.push(`Question #${idx + 1} correct_option "${q.correct_option}" is not in the option list.`);
    }

    // Distinct option values
    const uniqueEn = new Set(q.options.map((o) => o.text_en.trim().toLowerCase()));
    if (uniqueEn.size !== q.options.length) {
      warnings.push(`Question #${idx + 1} contains duplicate option texts.`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
