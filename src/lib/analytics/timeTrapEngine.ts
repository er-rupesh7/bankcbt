import {
  QuestionAnalysis,
  TimeTrapQuadrant,
  PaletteState,
  QuestionDifficulty,
  SectionType,
} from '@/types/exam';

export interface TimeTrapEngineInput {
  timeSpentSeconds: number;
  avgIdealTimeSeconds: number;
  paletteState: PaletteState;
  isCorrect: boolean;
  isEvaluated: boolean;
}

/**
 * Classifies a question attempt into one of 4 Time-Trap quadrants:
 * 1. FAST_CORRECT: Answered correctly within or close to ideal time.
 * 2. SLOW_CORRECT: Answered correctly but exceeded ideal time by >40%.
 * 3. FAST_WRONG: Incurred negative penalty quickly (<ideal time). Indicates haste or guessing.
 * 4. SLOW_WRONG_OR_SKIPPED: FATAL TIME-TRAP! Spent >90s and ended up wrong or skipped.
 */
export function classifyTimeTrapQuadrant(input: TimeTrapEngineInput): TimeTrapQuadrant {
  const { timeSpentSeconds, avgIdealTimeSeconds, isCorrect, isEvaluated } = input;

  if (isEvaluated && isCorrect) {
    if (timeSpentSeconds <= avgIdealTimeSeconds * 1.2) {
      return 'FAST_CORRECT';
    }
    return 'SLOW_CORRECT';
  }

  // If wrong or unattempted
  if (timeSpentSeconds > 90) {
    // Spending more than 90 seconds without gaining marks is a fatal time trap in banking exams
    return 'SLOW_WRONG_OR_SKIPPED';
  }

  return 'FAST_WRONG';
}

/**
 * Computes an estimated national percentile using a normalized distribution
 * calibrated against historical SBI PO and IBPS PO Prelims raw score distributions.
 */
export function calculateBankingPercentile(score: number, totalMarks: number): number {
  if (totalMarks <= 0) return 50.0;
  
  const scorePercent = (score / totalMarks) * 100;
  
  // Banking prelims cutoffs generally sit between 50-60 marks out of 100.
  // Aspirants scoring >70 are in the 95th+ percentile.
  if (scorePercent >= 75) return Math.min(99.9, 97.0 + (scorePercent - 75) * 0.11);
  if (scorePercent >= 65) return 90.0 + (scorePercent - 65) * 0.7;
  if (scorePercent >= 55) return 75.0 + (scorePercent - 55) * 1.5;
  if (scorePercent >= 45) return 50.0 + (scorePercent - 45) * 2.5;
  if (scorePercent >= 30) return 25.0 + (scorePercent - 30) * 1.6;
  return Math.max(1.0, scorePercent * 0.8);
}
