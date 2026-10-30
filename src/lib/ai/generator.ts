import { z } from 'zod';

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
  comprehension_group_id: z.string().optional().describe('Group ID if linked to a puzzle or DI set (e.g. PUZZLE_SET_1)'),
  direction_en: z.string().optional().describe('Directions/Passage/Puzzle clues in English'),
  direction_hi: z.string().optional().describe('Directions/Passage/Puzzle clues in Hindi'),
  question_en: z.string().min(5, 'Question text in English is required'),
  question_hi: z.string().optional(),
  options: z.array(OptionItemSchema).length(5, 'Banking exams strictly require exactly 5 options (A, B, C, D, E)'),
  correct_option: z.enum(['A', 'B', 'C', 'D', 'E']),
  solution_en: z.string().min(10, 'Step-by-step logical deduction or textbook method'),
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
// 2. IBPS / SBI PAPER SETTER SYSTEM PROMPTS & CONFIGURATION MATRIX
// ============================================================================

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

export function buildSectionPrompt(
  examCode: string,
  sectionId: 'REASONING' | 'QUANTITATIVE' | 'ENGLISH' | 'GENERAL_AWARENESS' | 'COMPUTER_KNOWLEDGE',
  positiveMarks: number,
  durationSeconds: number,
  questionCount: number
): string {
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
// 3. PROGRAMMATIC VERIFICATION ENGINE
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
    errors.push(`Negative marks (${data.negative_marks}) does not equal 1/4th of positive marks (${data.positive_marks}, expected ${expectedNeg}).`);
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
    if (!expected.every((id) => optIds.includes(id as any))) {
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
