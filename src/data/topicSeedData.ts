// src/data/topicSeedData.ts

import {
  ConceptGuideData,
  TopicPracticeQuestionData,
  DifficultyLevel,
} from '@/types/topicPractice';
import { SYLLABUS_TAXONOMY, getTopicBySlug } from './syllabusTaxonomy';
import { ALL_CONCEPT_GUIDES } from './concepts';
import { generateDynamicTopicQuestions } from '@/lib/topicAiGenerator';

// ============================================================================
// 1. HAND-CRAFTED CORE CONCEPT GUIDES (WITH LATEX, SHORTCUTS, TRAPS & SVGS)
// ============================================================================

export const PRESEEDED_CONCEPT_GUIDES: Record<string, ConceptGuideData> = ALL_CONCEPT_GUIDES;

// ============================================================================
// 2. PRE-SEEDED MULTI-LEVEL PRACTICE QUESTIONS
// ============================================================================

export const PRESEEDED_PRACTICE_QUESTIONS: Record<string, TopicPracticeQuestionData[]> = {
  // Syllogism Questions
  'syllogism': [
    {
      id: 'syl_l1_01',
      topicSlug: 'syllogism',
      difficulty: 'LEVEL_1_CLERK_PRE',
      examTag: 'SBI Clerk Prelims Style',
      conceptTag: 'Standard Venn Deduction',
      questionEn: 'Statements: All Books are Pens. All Pens are Copies. Conclusions: I. All Books are Copies. II. Some Copies are Books.',
      questionHi: 'कथन: सभी किताबें पेन हैं। सभी पेन कॉपियां हैं। निष्कर्ष: I. सभी किताबें कॉपियां हैं। II. कुछ कॉपियां किताबें हैं।',
      options: [
        { id: 'A', textEn: 'Only Conclusion I follows', textHi: 'केवल निष्कर्ष I अनुसरण करता है' },
        { id: 'B', textEn: 'Only Conclusion II follows', textHi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { id: 'C', textEn: 'Either Conclusion I or II follows', textHi: 'या तो निष्कर्ष I या II अनुसरण करता है' },
        { id: 'D', textEn: 'Neither Conclusion I nor II follows', textHi: 'न तो निष्कर्ष I और न ही II अनुसरण करता है' },
        { id: 'E', textEn: 'Both Conclusions I and II follow', textHi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
      ],
      correctOption: 'E',
      conventionalSolEn: 'Books is a subset of Pens, which is a subset of Copies. Hence Books is a subset of Copies (I is true). Copies overlaps with Books (II is true).',
      conventionalSolHi: 'किताबें पेन के अंदर हैं और पेन कॉपियों के अंदर हैं। अतः सभी किताबें कॉपियां हैं (I सत्य) तथा कुछ कॉपियां किताबें हैं (II सत्य)।',
      examShortcutEn: 'Concentric circles: Moving from inner to outer circle, "All" and "Some" are both 100% valid.',
      examShortcutHi: 'संकेंद्री वृत्त: अंदर से बाहर की ओर जाने पर "All" और "Some" दोनों सत्य होते हैं।',
      idealTimeSeconds: 25,
    },
    {
      id: 'syl_l2_01',
      topicSlug: 'syllogism',
      difficulty: 'LEVEL_2_PO_PRE',
      examTag: 'IBPS PO Prelims Pattern',
      conceptTag: 'Only a few with Possibility',
      questionEn: 'Statements: Only a few Cards are Papers. No Paper is Plastic. Some Plastics are Metals. Conclusions: I. All Cards can never be Plastic. II. All Metals can be Paper.',
      questionHi: 'कथन: केवल कुछ कार्ड कागज हैं। कोई कागज प्लास्टिक नहीं है। कुछ प्लास्टिक धातु हैं। निष्कर्ष: I. सभी कार्ड कभी प्लास्टिक नहीं हो सकते। II. सभी धातु के कागज होने की संभावना है।',
      options: [
        { id: 'A', textEn: 'Only Conclusion I follows', textHi: 'केवल निष्कर्ष I अनुसरण करता है' },
        { id: 'B', textEn: 'Only Conclusion II follows', textHi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { id: 'C', textEn: 'Either I or II follows', textHi: 'या तो I या II अनुसरण करता है' },
        { id: 'D', textEn: 'Neither I nor II follows', textHi: 'न तो I और न ही II अनुसरण करता है' },
        { id: 'E', textEn: 'Both I and II follow', textHi: 'I और II दोनों अनुसरण करते हैं' },
      ],
      correctOption: 'A',
      conventionalSolEn: 'Part of Cards that is Paper can never touch Plastic because No Paper is Plastic. Thus, All Cards can never be Plastic (I is true). Metals overlaps with Plastic, and that overlapping part can never be Paper. Hence All Metals can never be Paper (II is false).',
      conventionalSolHi: 'कार्ड का वह भाग जो कागज है वह कभी प्लास्टिक नहीं हो सकता। अतः सभी कार्ड कभी प्लास्टिक नहीं हो सकते (I सत्य)। धातु का वह भाग जो प्लास्टिक है वह कभी कागज नहीं हो सकता, अतः II असत्य है।',
      examShortcutEn: 'Common element Paper blocks full entry of Cards into Plastic (I true). Plastic part of Metal blocks full entry into Paper (II false).',
      examShortcutHi: 'कागज कार्ड के कुछ भाग को प्लास्टिक में जाने से रोकता है (I सत्य)। प्लास्टिक धातु को कागज में जाने से रोकता है (II असत्य)।',
      idealTimeSeconds: 45,
    },
    {
      id: 'syl_l3_01',
      topicSlug: 'syllogism',
      difficulty: 'LEVEL_3_MAINS',
      examTag: 'SBI PO Mains Advanced Pattern',
      conceptTag: 'Only A are B + Reverse Restriction',
      questionEn: 'Statements: Only Gold are Silver. Some Gold are Platinum. Only a few Platinum are Diamond. Conclusions: I. Some Diamond are Silver is a possibility. II. All Gold can be Platinum.',
      questionHi: 'कथन: केवल सोना चांदी है। कुछ सोना प्लेटिनम है। केवल कुछ प्लेटिनम हीरा है। निष्कर्ष: I. कुछ हीरा के चांदी होने की संभावना है। II. सभी सोना के प्लेटिनम होने की संभावना है।',
      options: [
        { id: 'A', textEn: 'Only Conclusion I follows', textHi: 'केवल निष्कर्ष I अनुसरण करता है' },
        { id: 'B', textEn: 'Only Conclusion II follows', textHi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { id: 'C', textEn: 'Either I or II follows', textHi: 'या तो I या II अनुसरण करता है' },
        { id: 'D', textEn: 'Neither Conclusion I nor II follows', textHi: 'न तो निष्कर्ष I और न ही II अनुसरण करता है' },
        { id: 'E', textEn: 'Both Conclusions I and II follow', textHi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
      ],
      correctOption: 'D',
      conventionalSolEn: '"Only Gold are Silver" means All Silver are Gold, and Silver CANNOT touch Diamond. Hence I is false. Since Silver is exclusively inside Gold and cannot touch Platinum, All Gold can never be inside Platinum. Hence II is false.',
      conventionalSolHi: '"केवल सोना चांदी है" का अर्थ है चांदी केवल सोने के अंदर रहेगी और किसी अन्य पद से नहीं मिल सकती। अतः I असत्य। चूंकि चांदी प्लैटिनम में नहीं जा सकती, इसलिए पूरा सोना भी प्लैटिनम में नहीं जा सकता (II असत्य)।',
      examShortcutEn: 'Silver is an exclusively locked element. Any possibility touching Silver is false (I false). Silver prevents full movement of Gold into Platinum (II false).',
      examShortcutHi: 'चांदी एक आरक्षित पद है। चांदी को छूने वाली कोई भी संभावना असत्य होगी (I असत्य)। चांदी पूरे सोने को प्लैटिनम में जाने से रोकेगी (II असत्य)।',
      idealTimeSeconds: 75,
    },
  ],

  // Quadratic Equations Questions
  'quadratic-equations': [
    {
      id: 'quad_l1_01',
      topicSlug: 'quadratic-equations',
      difficulty: 'LEVEL_1_CLERK_PRE',
      examTag: 'SBI Clerk Prelims Pattern',
      conceptTag: 'Sign Method Direct',
      questionEn: 'I. x² - 8x + 15 = 0, II. y² - 12y + 35 = 0',
      questionHi: 'I. x² - 8x + 15 = 0, II. y² - 12y + 35 = 0',
      options: [
        { id: 'A', textEn: 'x > y', textHi: 'x > y' },
        { id: 'B', textEn: 'x < y', textHi: 'x < y' },
        { id: 'C', textEn: 'x ≥ y', textHi: 'x ≥ y' },
        { id: 'D', textEn: 'x ≤ y', textHi: 'x ≤ y' },
        { id: 'E', textEn: 'x = y or Relationship cannot be determined', textHi: 'x = y या संबंध निर्धारित नहीं किया जा सकता' },
      ],
      correctOption: 'D',
      conventionalSolEn: 'I. Factors of 15 adding to 8: 3 and 5. Roots x = 3, 5. II. Factors of 35 adding to 12: 5 and 7. Roots y = 5, 7. Comparing: 3 < 5, 3 < 7, 5 = 5, 5 < 7. Thus x ≤ y.',
      conventionalSolHi: 'I. x के मूल: 3, 5. II. y के मूल: 5, 7. तुलना: x ≤ y.',
      examShortcutEn: 'Signs (-, +) ➔ (+, +). x = 3, 5. y = 5, 7. x is less than or equal to y in all 4 pairs ➔ x ≤ y.',
      examShortcutHi: 'दोनों मूल धनात्मक होंगे। 3 व 5 की तुलना 5 व 7 से करने पर ➔ x ≤ y.',
      idealTimeSeconds: 25,
    },
    {
      id: 'quad_l2_01',
      topicSlug: 'quadratic-equations',
      difficulty: 'LEVEL_2_PO_PRE',
      examTag: 'IBPS PO Prelims Style',
      conceptTag: 'Negative Constants CND Shortcut',
      questionEn: 'I. 3x² + 4x - 15 = 0, II. 2y² - 5y - 12 = 0',
      questionHi: 'I. 3x² + 4x - 15 = 0, II. 2y² - 5y - 12 = 0',
      options: [
        { id: 'A', textEn: 'x > y', textHi: 'x > y' },
        { id: 'B', textEn: 'x < y', textHi: 'x < y' },
        { id: 'C', textEn: 'x ≥ y', textHi: 'x ≥ y' },
        { id: 'D', textEn: 'x ≤ y', textHi: 'x ≤ y' },
        { id: 'E', textEn: 'x = y or Relationship cannot be determined (CND)', textHi: 'x = y या संबंध निर्धारित नहीं किया जा सकता (CND)' },
      ],
      correctOption: 'E',
      conventionalSolEn: 'I. 3 × (-15) = -45. Factors +9, -5. Roots x = -9/3, +5/3 = -3, +1.67. II. 2 × (-12) = -24. Factors -8, +3. Roots y = +8/2, -3/2 = +4, -1.5. Cross comparing gives conflicting relations: +1.67 > -1.5 but +1.67 < +4. Hence CND.',
      conventionalSolHi: 'I. x = -3, +1.67. II. y = +4, -1.5. तुलना में +1.67 > -1.5 किन्तु +1.67 < +4. विरोधाभास के कारण CND.',
      examShortcutEn: 'Both constant terms are negative (-15 and -12). By the 2-second rule, roots are (-, +) and (+, -). Relationship is ALWAYS CND.',
      examShortcutHi: 'दोनों समीकरणों में अचर पद ऋणात्मक हैं (-15 और -12)। 2-सेकंड नियम से उत्तर सदैव CND होगा।',
      idealTimeSeconds: 15,
    },
    {
      id: 'quad_l3_01',
      topicSlug: 'quadratic-equations',
      difficulty: 'LEVEL_3_MAINS',
      examTag: 'SBI PO Mains High-Level Roots',
      conceptTag: 'Root / Surd Equation with α, β',
      questionEn: 'I. x² - 4√3x + 9 = 0, II. y² - 7√2y + 24 = 0',
      questionHi: 'I. x² - 4√3x + 9 = 0, II. y² - 7√2y + 24 = 0',
      options: [
        { id: 'A', textEn: 'x > y', textHi: 'x > y' },
        { id: 'B', textEn: 'x < y', textHi: 'x < y' },
        { id: 'C', textEn: 'x ≥ y', textHi: 'x ≥ y' },
        { id: 'D', textEn: 'x ≤ y', textHi: 'x ≤ y' },
        { id: 'E', textEn: 'x = y or Relationship cannot be determined', textHi: 'x = y या संबंध निर्धारित नहीं किया जा सकता' },
      ],
      correctOption: 'E',
      conventionalSolEn: 'I. Divide 9 by 3 = 3. Factors of 3 adding to 4: 3 and 1. Roots x = 3√3, 1√3. (x ≈ 5.196, 1.732). II. Divide 24 by 2 = 12. Factors of 12 adding to 7: 4 and 3. Roots y = 4√2, 3√2. (y ≈ 5.656, 4.242). Comparing: 1.732 < 4.242 and 5.196 < 5.656. When comparing 5.196 with 4.242, 5.196 > 4.242. Hence CND.',
      conventionalSolHi: 'I. x के मूल 3√3 (≈ 5.196) व √3 (≈ 1.732). II. y के मूल 4√2 (≈ 5.656) व 3√2 (≈ 4.242). तुलना करने पर 5.196 > 4.242 किन्तु 5.196 < 5.656. अतः CND.',
      examShortcutEn: 'To solve ax² - b√k x + c = 0: Divide constant c by k (9/3 = 3), split 3 into factors summing to 4 (3 & 1), append √3. Roots: 3√3 and √3.',
      examShortcutHi: 'ax² - b√k x + c = 0 के लिए अचर c को k से भाग दें (9/3 = 3), 3 के गुणनखंड जिनका योग 4 हो: 3 व 1, अंत में √3 लगाएं। मूल: 3√3 व √3।',
      idealTimeSeconds: 90,
    },
  ],

  // Error Spotting Questions
  'error-spotting': [
    {
      id: 'err_l1_01',
      topicSlug: 'error-spotting',
      difficulty: 'LEVEL_1_CLERK_PRE',
      examTag: 'SBI Clerk Prelims Style',
      conceptTag: 'Subject-Verb Agreement Intervener',
      questionEn: 'The branch manager (A) / as well as his clerical staff (B) / were felicitated at the ceremony (C) / for outstanding quarterly recovery. (D) / No Error (E)',
      questionHi: 'The branch manager (A) / as well as his clerical staff (B) / were felicitated at the ceremony (C) / for outstanding quarterly recovery. (D) / No Error (E)',
      options: [
        { id: 'A', textEn: '(A)', textHi: '(A)' },
        { id: 'B', textEn: '(B)', textHi: '(B)' },
        { id: 'C', textEn: '(C)', textHi: '(C)' },
        { id: 'D', textEn: '(D)', textHi: '(D)' },
        { id: 'E', textEn: '(E) No Error', textHi: '(E) कोई त्रुटि नहीं' },
      ],
      correctOption: 'C',
      conventionalSolEn: 'When two subjects are connected by "as well as", the verb agrees with the first subject ("The branch manager", singular). Replace "were felicitated" with "was felicitated" in part (C).',
      conventionalSolHi: 'जब दो कर्ता "as well as" से जुड़े हों, तो क्रिया प्रथम कर्ता ("The branch manager") के अनुसार होगी। (C) में "were" के स्थान पर "was" आएगा।',
      examShortcutEn: 'Ignore "as well as his clerical staff": The branch manager WAS felicitated.',
      examShortcutHi: '"as well as..." को छोड़कर पढ़ें: The branch manager WAS felicitated.',
      idealTimeSeconds: 20,
    },
    {
      id: 'err_l2_01',
      topicSlug: 'error-spotting',
      difficulty: 'LEVEL_2_PO_PRE',
      examTag: 'IBPS PO Prelims Pattern',
      conceptTag: 'Dangling Participial Modifier',
      questionEn: 'Having scrutinized the financial records, (A) / several discrepancies were discovered (B) / by the forensic accounting auditor (C) / during the quarterly compliance audit. (D) / No Error (E)',
      questionHi: 'Having scrutinized the financial records, (A) / several discrepancies were discovered (B) / by the forensic accounting auditor (C) / during the quarterly compliance audit. (D) / No Error (E)',
      options: [
        { id: 'A', textEn: '(A)', textHi: '(A)' },
        { id: 'B', textEn: '(B)', textHi: '(B)' },
        { id: 'C', textEn: '(C)', textHi: '(C)' },
        { id: 'D', textEn: '(D)', textHi: '(D)' },
        { id: 'E', textEn: '(E) No Error', textHi: '(E) कोई त्रुटि नहीं' },
      ],
      correctOption: 'B',
      conventionalSolEn: 'Dangling modifier error in part (B). The participial phrase "Having scrutinized the financial records" must logically modify the person who performed the scrutiny (the auditor), not the "discrepancies". The sentence should read: "Having scrutinized the financial records, the forensic accounting auditor discovered several discrepancies...".',
      conventionalSolHi: 'भाग (B) में डांगलिंग मॉडिफायर की त्रुटि है। "Having scrutinized..." का संबंध सीधे उस व्यक्ति (ऑडिटर) से होना चाहिए जिसने जांच की, न कि "discrepancies" से।',
      examShortcutEn: 'Ask: Who scrutinized the records? The auditor, not discrepancies. Part (B) immediately fails.',
      examShortcutHi: 'पूछें: रिकॉर्ड की जांच किसने की? ऑडिटर ने। अतः कॉमा के बाद auditor आना चाहिए, discrepancies नहीं।',
      idealTimeSeconds: 35,
    },
    {
      id: 'err_l3_01',
      topicSlug: 'error-spotting',
      difficulty: 'LEVEL_3_MAINS',
      examTag: 'SBI PO Mains Multi-Clause Subjunctive',
      conceptTag: 'Subjunctive with Mandative Verb',
      questionEn: 'The internal risk control committee demanded that (A) / the chief compliance officer submits (B) / a comprehensive forensic report on the unauthorized trades (C) / before the board meeting commences. (D) / No Error (E)',
      questionHi: 'The internal risk control committee demanded that (A) / the chief compliance officer submits (B) / a comprehensive forensic report on the unauthorized trades (C) / before the board meeting commences. (D) / No Error (E)',
      options: [
        { id: 'A', textEn: '(A)', textHi: '(A)' },
        { id: 'B', textEn: '(B)', textHi: '(B)' },
        { id: 'C', textEn: '(C)', textHi: '(C)' },
        { id: 'D', textEn: '(D)', textHi: '(D)' },
        { id: 'E', textEn: '(E) No Error', textHi: '(E) कोई त्रुटि नहीं' },
      ],
      correctOption: 'B',
      conventionalSolEn: 'Mandative verbs like "demanded that", "recommended that", and "insisted that" trigger the subjunctive mood, requiring the base form of the verb without "-s". Replace "submits" with "submit" in part (B).',
      conventionalSolHi: '"Demanded that" के बाद सबजंक्टिव मूड का प्रयोग होता है जिसमें क्रिया का मूल रूप (Base form बिना s/es के) आता है। भाग (B) में "submits" के स्थान पर "submit" आएगा।',
      examShortcutEn: 'Demanded that + subject + BASE VERB (submit, not submits).',
      examShortcutHi: 'Demanded that के बाद सदैव बेस वर्ब "submit" आएगा।',
      idealTimeSeconds: 40,
    },
  ],
};

// ============================================================================
// 3. DYNAMIC GENERATORS FOR REMAINING TOPICS (100% COVERAGE)
// ============================================================================

export function getConceptGuide(topicSlug: string): ConceptGuideData {
  if (ALL_CONCEPT_GUIDES[topicSlug]) {
    return ALL_CONCEPT_GUIDES[topicSlug];
  }

  if (PRESEEDED_CONCEPT_GUIDES[topicSlug]) {
    return PRESEEDED_CONCEPT_GUIDES[topicSlug];
  }

  const topicConfig = getTopicBySlug(topicSlug);
  const titleEn = topicConfig ? topicConfig.titleEn : topicSlug;
  const titleHi = topicConfig ? topicConfig.titleHi : topicSlug;
  const cluster = topicConfig ? topicConfig.clusterName : 'Banking Syllabus';

  return {
    topicSlug,
    coreTheoryEn: `### ${titleEn} — Core Banking Conceptual Framework

In TCS iON Indian Banking Examinations, **${titleEn}** (${cluster}) carries significant weightage across both Prelims and Mains stages.

1. **Foundational Principle:**
   Move away from brute-force school calculations to high-speed ratio scaling, unit-based mental calculations, and option elimination.
2. **Exam Calibration:**
   - **Clerk Prelims:** Single-step direct calculations (Target: 25–35 seconds).
   - **PO Prelims:** 2-step questions with trap options (Target: 45–60 seconds).
   - **Mains Stage:** Statement-based multi-variable scenarios (Target: 75–120 seconds).`,
    coreTheoryHi: `### ${titleHi} — मुख्य बैंकिंग संकल्पना रूपरेखा

TCS iON भारतीय बैंकिंग परीक्षाओं में **${titleHi}** (${cluster}) प्रारंभिक एवं मुख्य दोनों चरणों में महत्वपूर्ण भूमिका निभाता है।

1. **मूलभूत सिद्धांत:**
   पारंपरिक लंबे तरीकों के स्थान पर इकाई विधि, अनुपात विधि एवं विकल्प विलोपन तकनीक का उपयोग करें।
2. **परीक्षा स्तर वर्गीकरण:**
   - **क्लर्क प्रीलिम्स:** एकल-चरणीय गणना (25–35 सेकंड)।
   - **पीओ प्रीलिम्स:** द्वि-चरणीय वैचारिक प्रश्न (45–60 सेकंड)।
   - **मेन्स चरण:** बहु-चर आधारित प्रश्न (75–120 सेकंड)।`,
    conceptSvgDiagram: `<svg width="100%" height="auto" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-full block">
  <rect width="600" height="240" fill="#f8fafc" rx="12" />
  <text x="300" y="36" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="16">${titleEn} Concept Mastery</text>
  <rect x="50" y="70" width="150" height="120" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="125" y="110" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="14">Level 1</text>
  <text x="125" y="135" text-anchor="middle" fill="#1e40af" font-size="12">Clerk Prelims</text>
  <text x="125" y="160" text-anchor="middle" fill="#64748b" font-size="11">Speed &amp; Basics</text>
  
  <rect x="225" y="70" width="150" height="120" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
  <text x="300" y="110" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="14">Level 2</text>
  <text x="300" y="135" text-anchor="middle" fill="#065f46" font-size="12">PO Prelims</text>
  <text x="300" y="160" text-anchor="middle" fill="#64748b" font-size="11">Traps &amp; Ratios</text>
  
  <rect x="400" y="70" width="150" height="120" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2" />
  <text x="475" y="110" text-anchor="middle" fill="#991b1b" font-weight="bold" font-size="14">Level 3</text>
  <text x="475" y="135" text-anchor="middle" fill="#991b1b" font-size="12">Mains Analysis</text>
  <text x="475" y="160" text-anchor="middle" fill="#64748b" font-size="11">Multi-Variable</text>
</svg>`,
    formulasAndRules: [
      {
        title: `${titleEn} Fundamental Rule`,
        latexFormula: `\\text{Efficiency Ratio} = \\frac{\\text{Target Outcome}}{\\text{Standard Input Units}}`,
        explanationEn: 'Always eliminate common factors first before performing complex multi-digit calculations.',
        explanationHi: 'जटिल गणनाओं से पहले समान पदों को अनुपात में बदलकर हल करें।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'Option Elimination & Boundary Check',
        conventionalTime: '90s',
        shortcutTime: '20s',
        conventionalMethodEn: 'Full paper-pencil step-by-step derivation without utilizing options.',
        conventionalMethodHi: 'बिना विकल्पों को देखे कागज पर लंबा समीकरण हल करना।',
        shortcutStepsEn: '1. Check the unit digit and divisibility rules.\\n2. Eliminate extreme outlier choices.\\n3. Verify against boundary conditions.',
        shortcutStepsHi: '1. इकाई अंक और विभाज्यता नियम देखें।\\n2. अत्यधिक बड़े/छोटे विकल्पों को हटाएं।\\n3. सीमा शर्तों से मिलान करें।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'Misreading the Target Variable',
        mistakeStudentsMake: 'Calculating X when the question asked for X + Y, or finding original value instead of increased value.',
        howToAvoid: 'Always re-read the final line of the question stem before clicking the option.',
      },
      {
        trapTitle: 'Unit Inconsistency Trap',
        mistakeStudentsMake: 'Mixing hours with minutes, or meters with kilometers without conversion.',
        howToAvoid: 'Standardize all units at the beginning of reading the question.',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: `Calculate the standard fundamental value for ${titleEn} when base unit is 120 and rate is 15%.`,
        questionHi: `${titleHi} के लिए मानक मान ज्ञात कीजिए जब आधार 120 और दर 15% है।`,
        conventionalSolEn: 'Step 1: Convert rate 15% to fraction (3/20). Step 2: Multiply 120 × (3/20) = 18.',
        conventionalSolHi: 'चरण 1: 15% = 3/20. चरण 2: 120 × (3/20) = 18.',
        shortcutTrickEn: '10% of 120 = 12; 5% = 6 ➔ 12 + 6 = 18.',
        shortcutTrickHi: '12 + 6 = 18 (मौखिक गणना)।',
        finalAnswer: '18',
      },
      {
        level: 'Moderate',
        questionEn: `If the initial value in ${titleEn} increases by 25% and subsequently decreases by 20%, find the net percentage change.`,
        questionHi: `यदि ${titleHi} में प्रारंभिक मान में 25% की वृद्धि और फिर 20% की कमी होती है, तो शुद्ध प्रतिशत परिवर्तन क्या है?`,
        conventionalSolEn: 'Net change = a + b + (ab/100) = 25 - 20 - (25 × 20 / 100) = 5 - 5 = 0%.',
        conventionalSolHi: 'कुल परिवर्तन = 25 - 20 - (500/100) = 0%.',
        shortcutTrickEn: '+25% (+1/4) requires -20% (-1/5) to balance. Net change = 0%.',
        shortcutTrickHi: '+1/4 और -1/5 एक-दूसरे को संतुलित करते हैं ➔ 0%।',
        finalAnswer: '0% (No change)',
      },
      {
        level: 'Mains',
        questionEn: `In a statement-based comparison for ${titleEn}: Quantity I: Value under 20% compounded rate for 2 years. Quantity II: Value under 21% simple rate for 2 years. Compare quantities.`,
        questionHi: `${titleHi} के लिए मात्रा I और मात्रा II की तुलना कीजिए।`,
        conventionalSolEn: 'Quantity I: 20% CI for 2 years effective rate = 20 + 20 + (20×20/100) = 44%. Quantity II: 21% SI for 2 years = 21 × 2 = 42%. Since 44% > 42%, Quantity I > Quantity II.',
        conventionalSolHi: 'मात्रा I: 44%. मात्रा II: 42%. अतः Quantity I > Quantity II.',
        shortcutTrickEn: '20% CI for 2 yrs = 44% > 42% SI ➔ Q1 > Q2.',
        shortcutTrickHi: '44% > 42% ➔ Q1 > Q2।',
        finalAnswer: 'Quantity I > Quantity II',
      },
    ],
  };
}

export function getTopicQuestions(
  topicSlug: string,
  difficulty?: DifficultyLevel,
  count: number = 10,
  seed: number = 20261031
): TopicPracticeQuestionData[] {
  const diff: DifficultyLevel = difficulty || 'LEVEL_1_CLERK_PRE';
  const preseeded = PRESEEDED_PRACTICE_QUESTIONS[topicSlug] || [];
  const filtered = preseeded.filter((q) => q.difficulty === diff);

  if (filtered.length >= count) {
    return filtered.slice(0, count);
  }

  const needed = count - filtered.length;
  const dynamic = generateDynamicTopicQuestions(topicSlug, diff, needed, seed);

  const combined: TopicPracticeQuestionData[] = [];
  const seen = new Set<string>();

  for (const q of [...filtered, ...dynamic]) {
    const key = q.questionEn.trim().replace(/\s+/g, ' ');
    if (!seen.has(key)) {
      seen.add(key);
      combined.push(q);
    }
  }

  return combined;
}
