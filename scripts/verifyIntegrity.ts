import { buildOfficialBankingExam } from '../src/lib/generator/examBuilder';
import { OFFICIAL_EXAM_CATALOG, ExamCategoryKey } from '../src/types/examCatalog';

console.log('Testing all exam blueprint generations...');

const examKeys: ExamCategoryKey[] = Object.keys(OFFICIAL_EXAM_CATALOG) as ExamCategoryKey[];

for (const key of examKeys) {
  for (let mockNum = 1; mockNum <= 10; mockNum++) {
    const exam = buildOfficialBankingExam(key, 20251030 + mockNum * 99, false, mockNum);
    
    // Check total questions count
    let totalQuestionsCount = 0;
    const seenQuestionIds = new Set<string>();
    const seenQuestionTexts = new Set<string>();
    let duplicateIds = 0;
    let duplicateTexts = 0;

    for (const sec of exam.sections) {
      totalQuestionsCount += sec.questions.length;
      for (const q of sec.questions) {
        if (seenQuestionIds.has(q.id)) {
          duplicateIds++;
          console.error(`Duplicate question ID in ${key} mock ${mockNum}: ${q.id}`);
        }
        seenQuestionIds.add(q.id);

        // Check if question text is identical (full text, not prefix)
        const fullText = q.questionTextEn.trim();
        if (seenQuestionTexts.has(fullText)) {
          duplicateTexts++;
          console.error(`DUPLICATE FULL TEXT in ${key} mock ${mockNum}: Q${q.questionNumber} (ID: ${q.id}) vs previously seen! Text:\n${fullText.slice(0, 80)}...`);
        }
        seenQuestionTexts.add(fullText);
      }
    }

    if (duplicateIds > 0 || duplicateTexts > 0) {
      throw new Error(`Integrity check failed for ${key} Mock #${mockNum}: dupIds=${duplicateIds}, dupTexts=${duplicateTexts}`);
    }

    console.log(`✓ ${key} Mock #${mockNum}: ${totalQuestionsCount} questions generated, 0 duplicate IDs, 0 duplicate texts`);
  }
}

console.log('ALL EXAM BLUEPRINTS AND GENERATIONS VERIFIED SUCCESSFULLY!');
