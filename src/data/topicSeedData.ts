// src/data/topicSeedData.ts

import {
  ConceptGuideData,
  TopicPracticeQuestionData,
  DifficultyLevel,
} from '@/types/topicPractice';
import { SYLLABUS_TAXONOMY, getTopicBySlug } from './syllabusTaxonomy';
import { generateDynamicTopicQuestions } from '@/lib/topicAiGenerator';

// ============================================================================
// 1. HAND-CRAFTED CORE CONCEPT GUIDES (WITH LATEX, SHORTCUTS, TRAPS & SVGS)
// ============================================================================

export const PRESEEDED_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  // --------------------------------------------------------------------------
  // SYLLOGISM (REASONING)
  // --------------------------------------------------------------------------
  'syllogism': {
    topicSlug: 'syllogism',
    coreTheoryEn: `Syllogism tests deductive logical reasoning where statements are accepted as 100% indisputable truth regardless of real-world facts. In modern TCS iON banking examinations, standard "All/Some/No" questions have been largely replaced by new-pattern conditional qualifiers: **"Only a few A are B"** and **"Only A are B"**.

### Golden Axioms for Banking Syllogisms:
1. **Definite Conclusion:** Must hold true in ALL possible Venn diagram configurations. If even a single valid diagram disproves it, the conclusion is FALSE.
2. **Possibility Conclusion:** If a scenario is valid in at least ONE possible Venn diagram without violating any given statements, the possibility is TRUE.
3. **"Only a few A are B" (Dual Meaning):** Means BOTH:
   - $\\text{Some } A \\text{ are } B$ (Positive definite)
   - $\\text{Some } A \\text{ are not } B$ (Negative definite)
   - *Key Deduction:* All $A$ can NEVER be $B$, but All $B$ CAN be $A$.
4. **"Only A are B":** Means $\\text{All } B \\text{ are } A$ and $B$ CANNOT have any overlap with any third entity (Restricted boundary).`,
    coreTheoryHi: `न्याय निगमन (Syllogism) में दिए गए कथनों को 100% सत्य मानकर तार्किक निष्कर्ष निकाला जाता है। आधुनिक बैंकिंग परीक्षाओं (TCS iON) में पारंपरिक प्रश्नों के स्थान पर **"केवल कुछ (Only a few)"** और **"केवल A, B हैं (Only A are B)"** के प्रश्न पूछे जाते हैं।

### बैंकिंग न्याय निगमन के स्वर्णिम नियम:
1. **निश्चित निष्कर्ष (Definite Conclusion):** सभी संभावित वेन आरेखों में सत्य होना चाहिए। यदि एक भी स्थिति में असत्य हो, तो निष्कर्ष असत्य होगा।
2. **संभावना निष्कर्ष (Possibility):** यदि कथनों का उल्लंघन किए बिना किसी भी एक संभावित आरेख में स्थिति बन सकती है, तो संभावना सत्य होगी।
3. **"केवल कुछ A, B हैं (Only a few A are B)":** इसके दो निश्चित अर्थ होते हैं:
   - कुछ A, B हैं (Some A are B)
   - कुछ A, B नहीं हैं (Some A are not B)
   - *मुख्य निष्कर्ष:* सभी A कभी भी B नहीं हो सकते, लेकिन सभी B, A हो सकते हैं।
4. **"केवल A, B हैं (Only A are B)":** इसका अर्थ है "सभी B, A हैं" और B का संबंध किसी तीसरे पद से कभी नहीं हो सकता।`,
    conceptSvgDiagram: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <rect width="600" height="300" fill="#f8fafc" rx="12" />
  <text x="300" y="30" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Syllogism: &quot;Only a few A are B&quot; Venn Model</text>
  
  <!-- Circle A -->
  <circle cx="230" cy="150" r="95" fill="#3b82f6" fillOpacity="0.2" stroke="#2563eb" strokeWidth="2.5" />
  <text x="170" y="150" fill="#1e40af" fontWeight="bold" fontSize="18">Set A</text>
  
  <!-- Circle B -->
  <circle cx="370" cy="150" r="95" fill="#10b981" fillOpacity="0.2" stroke="#059669" strokeWidth="2.5" />
  <text x="430" y="150" fill="#065f46" fontWeight="bold" fontSize="18">Set B</text>
  
  <!-- Overlap Region -->
  <text x="300" y="145" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="13">Some A</text>
  <text x="300" y="165" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="13">are B (✓)</text>
  
  <!-- Shaded Restricted A -->
  <path d="M 180 100 Q 210 150 180 200" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 4" fill="none" />
  <text x="145" y="240" fill="#dc2626" fontWeight="bold" fontSize="12">⚠️ Some A are NOT B</text>
  <text x="145" y="258" fill="#64748b" fontSize="11">(All A can NEVER be B)</text>
  
  <!-- Possibility Rule -->
  <text x="440" y="240" fill="#059669" fontWeight="bold" fontSize="12">✓ All B can be A</text>
  <text x="440" y="258" fill="#64748b" fontSize="11">(Allowed possibility)</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Only A Few Rule (केवल कुछ नियम)',
        latexFormula: `\\text{Only a few } A \\text{ are } B \\iff (\\text{Some } A \\text{ are } B) \\land (\\text{Some } A \\text{ are not } B)`,
        explanationEn: 'Crucial implication: "All A can be B is a possibility" is ALWAYS FALSE. "All B can be A is a possibility" is ALWAYS TRUE.',
        explanationHi: 'महत्वपूर्ण परिणाम: "सभी A के B होने की संभावना" सदैव असत्य होगी। "सभी B के A होने की संभावना" सदैव सत्य होगी।',
        exampleEn: 'Statements: Only a few doctors are surgeons. Conclusion: All doctors can be surgeons (FALSE).',
        exampleHi: 'कथन: केवल कुछ डॉक्टर सर्जन हैं। निष्कर्ष: सभी डॉक्टर के सर्जन होने की संभावना है (असत्य)।',
      },
      {
        title: 'Complimentary Either-Or Pair (या तो नियम)',
        latexFormula: `(\\text{Some } A \\text{ is } B) + (\\text{No } A \\text{ is } B) \\implies \\text{Either I or II follows}`,
        explanationEn: 'Conditions: (1) Same subject & predicate, (2) Both conclusions individually false/doubtful, (3) One positive and one negative.',
        explanationHi: 'शर्तें: (1) दोनों निष्कर्षों में समान कर्ता और विधेय हों, (2) दोनों स्वतंत्र रूप से असत्य/संदेहास्पद हों, (3) एक सकारात्मक और एक नकारात्मक हो।',
      },
    ],
    shortcutTricks: [
      {
        trickName: '10-Second Negative Elimination Trick',
        conventionalTime: '60s',
        shortcutTime: '10s',
        conventionalMethodEn: 'Draw full overlapping alternative Venn diagrams, test each boundary condition individually, and verify negation.',
        conventionalMethodHi: 'सभी वैकल्पिक वेन आरेख बनाकर प्रत्येक सीमा स्थिति की अलग-अलग जांच करना।',
        shortcutStepsEn: '1. If all statements are positive ("All", "Some"), ANY definite negative conclusion ("No", "Some not") is instantly FALSE without drawing diagrams.\n2. For "Only a few A are B", immediately circle the remaining part of A and cross out any arrow from A to B.',
        shortcutStepsHi: '1. यदि सभी कथन सकारात्मक हैं, तो कोई भी निश्चित नकारात्मक निष्कर्ष बिना आरेख बनाए तुरंत असत्य हो जाएगा।\n2. "Only a few A are B" देखते ही A के शेष भाग को चिन्हित करें कि वह B में कभी नहीं जा सकता।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'Confusing "Only a few" with "A few"',
        mistakeStudentsMake: 'Treating "Only a few A are B" as just "Some A are B" and marking "All A can be B" as true.',
        howToAvoid: 'Remember the "Only" keyword strictly imposes a negative barrier: Some A are definitely NOT B.',
      },
      {
        trapTitle: 'The "Only A are B" Third-Party Intrusion Trap',
        mistakeStudentsMake: 'Allowing entity B to have a possibility overlap with another entity C.',
        howToAvoid: 'In "Only A are B", entity B belongs EXCLUSIVELY to A. No other element can ever touch B.',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'Statements: Only a few Pens are Pencils. All Pencils are Erasers. Conclusions: I. Some Pens are Erasers. II. All Pens can be Pencils.',
        questionHi: 'कथन: केवल कुछ पेन, पेंसिल हैं। सभी पेंसिल, इरेज़र हैं। निष्कर्ष: I. कुछ पेन, इरेज़र हैं। II. सभी पेन के पेंसिल होने की संभावना है।',
        conventionalSolEn: 'Pen overlaps with Pencil. Pencil is entirely inside Eraser. Therefore, Pen overlaps with Eraser (I is true). Since "Only a few Pens are Pencils", some Pens can never be Pencils. Thus, All Pens can never be Pencils (II is false).',
        conventionalSolHi: 'पेन का पेंसिल से संबंध है और सभी पेंसिल इरेज़र के अंदर हैं, अतः कुछ पेन अवश्य इरेज़र हैं (I सत्य)। "केवल कुछ पेन पेंसिल हैं" के कारण सभी पेन कभी पेंसिल नहीं हो सकते (II असत्य)।',
        shortcutTrickEn: '"Only a few" directly bans "All A can be B". II is instantly invalid without drawing.',
        shortcutTrickHi: '"Only a few" सीधे "All A can be B" को प्रतिबंधित करता है। II बिना आरेख तुरंत गलत है।',
        finalAnswer: 'Only Conclusion I follows',
      },
      {
        level: 'Moderate',
        questionEn: 'Statements: No River is Sea. Only a few Seas are Oceans. Some Oceans are Lakes. Conclusions: I. All Rivers can be Oceans. II. Some Seas are not Lakes.',
        questionHi: 'कथन: कोई नदी समुद्र नहीं है। केवल कुछ समुद्र महासागर हैं। कुछ महासागर झील हैं। निष्कर्ष: I. सभी नदियों के महासागर होने की संभावना है। II. कुछ समुद्र झील नहीं हैं।',
        conventionalSolEn: 'River has restriction only with Sea. Ocean is free to contain River without touching Sea. Hence I is a valid possibility. There is no negative restriction between Sea and Lake, so II is doubtful/false.',
        conventionalSolHi: 'नदी का प्रतिबंध केवल समुद्र के साथ है, महासागर के साथ नहीं। अतः सभी नदी महासागर हो सकती हैं (I सत्य)। समुद्र और झील के बीच कोई नकारात्मक संबंध नहीं है, अतः II असत्य है।',
        shortcutTrickEn: 'River has a red flag only with Sea. River can safely enter the independent part of Ocean.',
        shortcutTrickHi: 'नदी का क्रॉस केवल समुद्र के साथ है। वह महासागर के स्वतंत्र हिस्से में आ सकती है।',
        finalAnswer: 'Only Conclusion I follows',
      },
      {
        level: 'Mains',
        questionEn: 'Statements: Only Apple are Mango. Some Apple are Banana. Only a few Banana are Orange. Conclusions: I. Some Orange are Mango is a possibility. II. All Apple can be Orange.',
        questionHi: 'कथन: केवल सेब आम हैं। कुछ सेब केला हैं। केवल कुछ केला संतरा हैं। निष्कर्ष: I. कुछ संतरा के आम होने की संभावना है। II. सभी सेब के संतरा होने की संभावना है।',
        conventionalSolEn: '"Only Apple are Mango" means All Mango are Apple, and Mango CANNOT touch any other entity (including Orange). Hence I is false. Since Mango is inside Apple and cannot touch Orange, All Apple can never go inside Orange. Hence II is false.',
        conventionalSolHi: '"केवल सेब आम हैं" का अर्थ है सभी आम सेब हैं और आम किसी अन्य पद (संतरा) को स्पर्श नहीं कर सकता। अतः I असत्य है। चूंकि आम सेब के अंदर है, इसलिए पूरा सेब संतरा में नहीं जा सकता (II असत्य)।',
        shortcutTrickEn: 'Mango is an exclusive locked entity. It blocks both possibility overlap (I) and full containment of Apple into Orange (II).',
        shortcutTrickHi: 'आम एक विशेष आरक्षित पद है। यह न तो किसी से मिल सकता है और न ही सेब को संतरा में जाने देगा।',
        finalAnswer: 'Neither I nor II follows',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // QUADRATIC EQUATIONS (QUANT)
  // --------------------------------------------------------------------------
  'quadratic-equations': {
    topicSlug: 'quadratic-equations',
    coreTheoryEn: `In banking prelims (SBI/IBPS PO & Clerk), Quadratic Equations represent **5 guaranteed marks in 90 seconds**. The conventional method of finding roots using the discriminant formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ is too slow for banking speed requirements.

### The 2-Step Sign Method:
A quadratic equation is standardly written as:
$$ax^2 + bx + c = 0$$

The signs of the roots depend strictly on the signs of $b$ and $c$:
| Equation Signs ($b$, $c$) | Root 1 Sign | Root 2 Sign |
| :---: | :---: | :---: |
| $+$, $+$ | **$-$** | **$-$** |
| $-$, $+$ | **$+$** | **$+$** |
| $+$, $-$ | **$-$** | **$+$** |
| $-$, $-$ | **$+$** | **$-$** |

### The "No Relation / CND" Golden Shortcut:
If in both equations, the constant term $c$ is negative (e.g. $x^2 + 5x - 24 = 0$ and $y^2 - 7y - 18 = 0$), the relationship is **ALWAYS Cannot be Determined (CND / $x = y$)**, solvable in **2 SECONDS without calculating factors!**`,
    coreTheoryHi: `बैंकिंग परीक्षाओं में द्विघात समीकरण **90 सेकंड में 5 निश्चित अंक** प्रदान करते हैं। पारंपरिक द्विघात सूत्र $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ का उपयोग करना अत्यधिक समय लेने वाला होता है।

### 2-चरणीय चिन्ह विधि (Sign Method):
समीकरण का मानक रूप: $ax^2 + bx + c = 0$

| समीकरण के चिन्ह ($b$, $c$) | मूल 1 (Root 1) | मूल 2 (Root 2) |
| :---: | :---: | :---: |
| $+$, $+$ | **$-$** | **$-$** |
| $-$, $+$ | **$+$** | **$+$** |
| $+$, $-$ | **$-$** | **$+$** |
| $-$, $-$ | **$+$** | **$-$** |

### 2-सेकंड "संबंध निर्धारित नहीं किया जा सकता (CND)" नियम:
यदि दोनों समीकरणों में अचर पद $c$ ऋणात्मक ($-$) है, तो उत्तर हमेशा **"संबंध स्थापित नहीं किया जा सकता ($x = y$ या CND)"** होगा। गुणनखंड निकालने की कोई आवश्यकता नहीं है!`,
    conceptSvgDiagram: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <rect width="600" height="280" fill="#f8fafc" rx="12" />
  <text x="300" y="32" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Quadratic Equation: 20-Second Sign Matrix</text>

  <!-- Box 1: Minus-Plus to Plus-Plus -->
  <rect x="40" y="60" width="240" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
  <text x="55" y="88" fill="#065f46" fontWeight="bold" fontSize="14">Case 1: ax² - bx + c = 0</text>
  <text x="55" y="112" fill="#047857" fontSize="13">Signs: ( - , + ) ➔ Roots: ( + , + )</text>
  <text x="55" y="134" fill="#64748b" fontSize="11">Example: x² - 7x + 12 = 0 ➔ x = +4, +3</text>

  <!-- Box 2: Plus-Plus to Minus-Minus -->
  <rect x="320" y="60" width="240" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
  <text x="335" y="88" fill="#1e40af" fontWeight="bold" fontSize="14">Case 2: ax² + bx + c = 0</text>
  <text x="335" y="112" fill="#1d4ed8" fontSize="13">Signs: ( + , + ) ➔ Roots: ( - , - )</text>
  <text x="335" y="134" fill="#64748b" fontSize="11">Example: y² + 9y + 20 = 0 ➔ y = -4, -5</text>

  <!-- Box 3: 2-Second Trap Shortcut -->
  <rect x="40" y="170" width="520" height="85" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
  <text x="55" y="198" fill="#991b1b" fontWeight="bold" fontSize="14">⚡ 2-Second Super Shortcut: Both Constant Terms Negative</text>
  <text x="55" y="222" fill="#b91c1c" fontSize="13">If c₁ &lt; 0 and c₂ &lt; 0 (e.g. x² + 3x - 18 = 0 and y² - 4y - 21 = 0)</text>
  <text x="55" y="242" fill="#b91c1c" fontWeight="bold" fontSize="13">➔ Direct Answer: x = y or Relationship Cannot Be Established (CND)</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Sign Conversion Rule (चिन्ह परिवर्तन नियम)',
        latexFormula: `ax^2 + bx + c = 0 \\implies x_1, x_2 = \\text{Opposite sign of } b, \\text{ Sign depends on } c`,
        explanationEn: 'Sign of Root 1 is always the OPPOSITE of sign of b. If c is positive, both roots have the same sign. If c is negative, roots have opposite signs.',
        explanationHi: 'मूल 1 का चिन्ह सदैव b के चिन्ह का विपरीत होता है। यदि c धनात्मक है, तो दोनों मूल समान चिन्ह के होंगे। यदि c ऋणात्मक है, तो दोनों के चिन्ह विपरीत होंगे।',
      },
      {
        title: 'Coefficient Normalization Trick',
        latexFormula: `a_1 x^2 + b_1 x + c_1 = 0, \\quad a_2 y^2 + b_2 y + c_2 = 0 \\implies \\text{Multiply roots of } x \\text{ by } a_2 \\text{ and } y \\text{ by } a_1`,
        explanationEn: 'Never divide factors by leading coefficient a (avoids decimals!). Instead, cross-multiply the roots by the other equation’s coefficient.',
        explanationHi: 'गुणनखंडों को a से भाग देकर दशमलव में न बदलें। इसके बजाय, x के मूलों को a₂ से तथा y के मूलों को a₁ से गुणा करें।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'Cross-Multiplication Factor Comparison',
        conventionalTime: '80s',
        shortcutTime: '20s',
        conventionalMethodEn: 'Calculate roots, divide each by 2 or 3, get decimals like 1.66 and 2.33, and compare on number line.',
        conventionalMethodHi: 'मूलों को दशमलव में निकालना और संख्या रेखा पर तुलना करना।',
        shortcutStepsEn: '1. Find raw factors for both equations.\n2. Invert signs according to table.\n3. Multiply x-roots by coefficient of y², and y-roots by coefficient of x².\n4. Compare clean integers directly.',
        shortcutStepsHi: '1. दोनों के मूल गुणनखंड निकालें।\n2. चिन्ह तालिका से चिन्ह बदलें।\n3. x के मूलों को y² के गुणांक से तथा y के मूलों को x² के गुणांक से गुणा करें।\n4. पूर्णांकों की त्वरित तुलना करें।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'Forgetting to Reverse Signs',
        mistakeStudentsMake: 'Splitting -7 into -4 and -3, and forgetting to flip signs to +4 and +3.',
        howToAvoid: 'The factors that add up to b are NOT the roots. Roots are always the negation of factor values.',
      },
      {
        trapTitle: 'Square Root vs Square Ambiguity',
        mistakeStudentsMake: 'Writing x² = 16 ➔ x = 4 instead of x = ±4, or writing y = √16 ➔ y = ±4 instead of y = +4.',
        howToAvoid: 'x² = 16 has TWO roots (+4, -4). But y = √16 has only ONE principal root (+4).',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'I. x² - 11x + 30 = 0, II. y² - 15y + 56 = 0',
        questionHi: 'I. x² - 11x + 30 = 0, II. y² - 15y + 56 = 0',
        conventionalSolEn: 'I. x² - 6x - 5x + 30 = 0 ➔ x = 5, 6. II. y² - 7y - 8y + 56 = 0 ➔ y = 7, 8. Comparing: 5 < 7, 5 < 8, 6 < 7, 6 < 8. Hence x < y.',
        conventionalSolHi: 'I. x = 5, 6. II. y = 7, 8. तुलना करने पर: 5 और 6 दोनों 7 और 8 से छोटे हैं। अतः x < y.',
        shortcutTrickEn: 'Signs (-, +) gives (+, +) for both. Factors: 30 = 5×6, 56 = 7×8. x = 5, 6 < y = 7, 8.',
        shortcutTrickHi: 'दोनों के चिन्ह (+, +) होंगे। 5 और 6 स्पष्ट रूप से 7 और 8 से छोटे हैं।',
        finalAnswer: 'x < y',
      },
      {
        level: 'Moderate',
        questionEn: 'I. 2x² + 11x + 15 = 0, II. 4y² + 16y + 15 = 0',
        questionHi: 'I. 2x² + 11x + 15 = 0, II. 4y² + 16y + 15 = 0',
        conventionalSolEn: 'I. 2×15 = 30. Factors: 6, 5. Roots: x = -6/2, -5/2 = -3, -2.5. II. 4×15 = 60. Factors: 10, 6. Roots: y = -10/4, -6/4 = -2.5, -1.5. Comparison: -3 < -2.5, -3 < -1.5, -2.5 = -2.5, -2.5 < -1.5. Hence x ≤ y.',
        conventionalSolHi: 'I. मूल x = -3, -2.5. II. मूल y = -2.5, -1.5. तुलना: x ≤ y.',
        shortcutTrickEn: 'Instead of dividing by 2 and 4, multiply x-factors by 2 (since 4/2 = 2): x = -6×2 = -12, -5×2 = -10. y = -10, -6. Comparing -12 and -10 with -10 and -6 gives x ≤ y.',
        shortcutTrickHi: 'दशमलव से बचने के लिए x के मूलों को 2 से गुणा करें: x = -12, -10; y = -10, -6. अतः x ≤ y.',
        finalAnswer: 'x ≤ y',
      },
      {
        level: 'Mains',
        questionEn: 'I. x² - (1 + √2)x + √2 = 0, II. y² - 3y + 2 = 0',
        questionHi: 'I. x² - (1 + √2)x + √2 = 0, II. y² - 3y + 2 = 0',
        conventionalSolEn: 'I. Factors are 1 and √2. Product = √2, Sum = 1 + √2. Roots: x = 1, √2 ≈ 1.414. II. Factors: 2, 1. Roots: y = 1, 2. Comparing: when x = 1, y = 1 (x = y), y = 2 (x < y). When x = 1.414, x > 1 but x < 2. Conflicting signs (x > y and x < y) means CND.',
        conventionalSolHi: 'I. x के मूल 1 और √2 (≈ 1.414) हैं। II. y के मूल 1 और 2 हैं। जब x = 1.414 है तो वह y = 1 से बड़ा है किन्तु y = 2 से छोटा है। विरोधाभास के कारण CND।',
        shortcutTrickEn: 'x = 1.414 falls strictly in between y = 1 and y = 2. Whenever an x-root is sandwiched between y-roots, the answer is instantly CND.',
        shortcutTrickHi: 'जब भी x का कोई मूल y के दोनों मूलों के बीच स्थित हो, उत्तर तुरंत CND होता है।',
        finalAnswer: 'Relationship cannot be established (CND / x = y)',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TIME, SPEED & DISTANCE (QUANT)
  // --------------------------------------------------------------------------
  'time-speed-distance': {
    topicSlug: 'time-speed-distance',
    coreTheoryEn: `Time, Speed & Distance (TSD) along with Trains and Boats & Streams forms the bedrock of banking arithmetic and Mains Caselet DIs.

### Core Foundation:
$$\\text{Distance} = \\text{Speed} \\times \\text{Time}$$

1. **Unit Conversion:**
   - $\\text{km/h} \\to \\text{m/s}$: Multiply by $\\frac{5}{18}$
   - $\\text{m/s} \\to \\text{km/h}$: Multiply by $\\frac{18}{5}$

2. **Inverse Ratio Rule (Distance Constant):**
   When Distance is constant:
   $$\\text{Speed} \\propto \\frac{1}{\\text{Time}} \\implies \\frac{S_1}{S_2} = \\frac{T_2}{T_1}$$

3. **Boats & Streams Vector Rules:**
   - Still Water Speed of Boat $= u$, Stream/Current Speed $= v$
   - Downstream Speed ($D$) $= u + v$
   - Upstream Speed ($U$) $= u - v$
   - Boat Speed: $u = \\frac{D + U}{2}$
   - Stream Speed: $v = \\frac{D - U}{2}$`,
    coreTheoryHi: `समय, चाल एवं दूरी (TSD), रेलगाड़ी तथा नाव-धारा अंकगणित और मेन्स डीआई का अत्यंत महत्वपूर्ण विषय है।

### मूलभूत सूत्र:
$$\\text{दूरी (Distance)} = \\text{चाल (Speed)} \\times \\text{समय (Time)}$$

1. **इकाई रूपांतरण:**
   - किमी/घंटा से मी/सेकंड: $\\frac{5}{18}$ से गुणा करें
   - मी/सेकंड से किमी/घंटा: $\\frac{18}{5}$ से गुणा करें

2. **व्युत्क्रमानुपाती नियम (दूरी स्थिर होने पर):**
   $$\\frac{S_1}{S_2} = \\frac{T_2}{T_1}$$

3. **नाव एवं धारा के नियम:**
   - शांत जल में नाव की चाल $= u$, धारा की चाल $= v$
   - अनुप्रवाह (Downstream) चाल: $D = u + v$
   - ऊर्ध्वप्रवाह (Upstream) चाल: $U = u - v$
   - शांत जल में नाव: $u = \\frac{D + U}{2}$
   - धारा की चाल: $v = \\frac{D - U}{2}$`,
    conceptSvgDiagram: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <rect width="600" height="280" fill="#f8fafc" rx="12" />
  <text x="300" y="32" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Boats &amp; Streams: Vector Speed Analysis</text>

  <!-- Downstream Section -->
  <rect x="40" y="60" width="240" height="180" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
  <text x="160" y="90" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="15">Downstream (धारा के अनुकूल)</text>
  <path d="M 80 130 L 220 130" stroke="#2563eb" strokeWidth="4" markerEnd="url(#arrow)" />
  <text x="160" y="120" textAnchor="middle" fill="#1d4ed8" fontSize="12">Boat (u) ➔ Stream (v) ➔</text>
  <text x="160" y="165" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">D = u + v</text>
  <text x="160" y="200" textAnchor="middle" fill="#64748b" fontSize="12">Speeds add up (Fastest)</text>

  <!-- Upstream Section -->
  <rect x="320" y="60" width="240" height="180" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
  <text x="440" y="90" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="15">Upstream (धारा के प्रतिकूल)</text>
  <path d="M 500 130 L 380 130" stroke="#dc2626" strokeWidth="4" />
  <text x="440" y="120" textAnchor="middle" fill="#b91c1c" fontSize="12">Boat (u) ➔ ⚡ 🠔 Stream (v)</text>
  <text x="440" y="165" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">U = u - v</text>
  <text x="440" y="200" textAnchor="middle" fill="#64748b" fontSize="12">Speeds subtract (Slower)</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Average Speed over Equal Distances',
        latexFormula: `S_{avg} = \\frac{2 S_1 S_2}{S_1 + S_2}`,
        explanationEn: 'Only applicable when the distance covered going and returning is exactly equal.',
        explanationHi: 'केवल तब लागू होता है जब आने और जाने की तय की गई दूरी पूर्णतः समान हो।',
      },
      {
        title: 'Train Crossing Moving Object in Opposite Direction',
        latexFormula: `T = \\frac{L_1 + L_2}{S_1 + S_2}`,
        explanationEn: 'Lengths ALWAYS add up, relative speeds add up in opposite directions.',
        explanationHi: 'लंबाइयां सदैव जुड़ती हैं तथा विपरीत दिशा में सापेक्ष चालें जुड़ती हैं।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'Ratio Shift Method for Early/Late Problems',
        conventionalTime: '90s',
        shortcutTime: '20s',
        conventionalMethodEn: 'Set up distance equations: d/s1 - d/s2 = delta t, find common denominator, solve for d.',
        conventionalMethodHi: 'समीकरण d/s₁ - d/s₂ = Δt बनाकर हल करना।',
        shortcutStepsEn: '1. Write speed ratio S1 : S2.\n2. Invert to get time ratio T1 : T2.\n3. Match ratio unit difference with actual time difference (Late + Early).\n4. Multiply speed by actual time to get distance in seconds.',
        shortcutStepsHi: '1. चाल का अनुपात S₁ : S₂ लिखें।\n2. समय का अनुपात T₁ : T₂ हो जाएगा।\n3. अनुपात अंतर को वास्तविक समय अंतर (देरी + पहले) के बराबर रखें।\n4. दूरी तुरंत ज्ञात हो जाएगी।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'Forgetting to Convert km/h to m/s for Train Lengths',
        mistakeStudentsMake: 'Dividing train length in meters directly by speed in km/h.',
        howToAvoid: 'Always multiply speed in km/h by 5/18 before calculating time in seconds.',
      },
      {
        trapTitle: 'Subtracting Train Lengths in Same Direction',
        mistakeStudentsMake: 'Subtracting lengths of trains (L1 - L2) when moving in the same direction.',
        howToAvoid: 'Lengths ALWAYS ADD UP (L1 + L2) regardless of whether trains move in the same or opposite directions.',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'A train 180 m long crosses a standing pole in 9 seconds. What is the speed of the train in km/h?',
        questionHi: '180 मीटर लंबी एक रेलगाड़ी किसी खंभे को 9 सेकंड में पार करती है। रेलगाड़ी की चाल किमी/घंटा में क्या है?',
        conventionalSolEn: 'Speed = Distance / Time = 180 / 9 = 20 m/s. Convert to km/h: 20 × (18/5) = 72 km/h.',
        conventionalSolHi: 'चाल = 180 / 9 = 20 मी/से। किमी/घंटा में: 20 × (18/5) = 72 किमी/घंटा।',
        shortcutTrickEn: '20 m/s is 4 × 5 m/s ➔ 4 × 18 km/h = 72 km/h (Using 5-to-18 ratio table).',
        shortcutTrickHi: '5 मी/से = 18 किमी/घंटा, अतः 20 मी/से = 4 × 18 = 72 किमी/घंटा।',
        finalAnswer: '72 km/h',
      },
      {
        level: 'Moderate',
        questionEn: 'A boat travels 48 km downstream in 3 hours and 32 km upstream in 4 hours. Find the speed of the stream.',
        questionHi: 'एक नाव 48 किमी अनुप्रवाह 3 घंटे में तथा 32 किमी ऊर्ध्वप्रवाह 4 घंटे में तय करती है। धारा की चाल ज्ञात कीजिए।',
        conventionalSolEn: 'Downstream speed D = 48 / 3 = 16 km/h. Upstream speed U = 32 / 4 = 8 km/h. Speed of stream v = (D - U) / 2 = (16 - 8) / 2 = 4 km/h.',
        conventionalSolHi: 'अनुप्रवाह चाल D = 16 किमी/घंटा। ऊर्ध्वप्रवाह चाल U = 8 किमी/घंटा। धारा की चाल v = (16 - 8) / 2 = 4 किमी/घंटा।',
        shortcutTrickEn: 'v = (D - U)/2. 16 - 8 = 8, half of 8 is 4 km/h.',
        shortcutTrickHi: 'v = (D - U)/2. 16 में से 8 घटाकर 2 से भाग दें ➔ 4 किमी/घंटा।',
        finalAnswer: '4 km/h',
      },
      {
        level: 'Mains',
        questionEn: 'Walking at 5/6th of his usual speed, a bank clerk reaches his branch 12 minutes late. Find his usual time to reach the branch.',
        questionHi: 'अपनी सामान्य चाल की 5/6 चाल से चलने पर एक बैंक क्लर्क अपनी शाखा 12 मिनट देरी से पहुंचता है। शाखा पहुंचने का उसका सामान्य समय ज्ञात कीजिए।',
        conventionalSolEn: 'Let usual speed be S and usual time be T. Distance = S × T. New speed = (5/6)S. New time = T + 12. S × T = (5/6)S × (T + 12) ➔ T = 5/6(T + 12) ➔ 6T = 5T + 60 ➔ T = 60 minutes.',
        conventionalSolHi: 'मान लें सामान्य चाल S व समय T है। नया समय = T + 12. हल करने पर T = 60 मिनट।',
        shortcutTrickEn: 'Speed ratio = 6 : 5 ➔ Time ratio = 5 : 6. Difference = 1 unit = 12 minutes. Usual time = 5 units = 5 × 12 = 60 minutes = 1 hour.',
        shortcutTrickHi: 'चाल का अनुपात 6 : 5 है, तो समय 5 : 6 होगा। अंतर 1 इकाई = 12 मिनट। सामान्य समय = 5 × 12 = 60 मिनट।',
        finalAnswer: '60 minutes (1 hour)',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // ERROR SPOTTING (LANGUAGE)
  // --------------------------------------------------------------------------
  'error-spotting': {
    topicSlug: 'error-spotting',
    coreTheoryEn: `Error Spotting in banking exams (SBI/IBPS PO & Clerk) is governed by **10 recurring grammatical structural traps**. Examiners exploit conversational spoken English habits to camouflage syntax violations.

### Top 5 High-Frequency Banking Grammar Traps:
1. **Subject-Verb Inversion after Negative Adverbs:**
   When a sentence begins with negative or restrictive adverbs (*Hardly, Scarcely, Seldom, Rarely, Barely, No sooner*), the auxiliary verb MUST precede the subject.
   - *Wrong:* Hardly the manager entered the branch when the alarm rang.
   - *Right:* **Hardly had** the manager entered the branch **when** the alarm rang.
   - *Pairs:* Hardly/Scarcely takes **when**; No sooner takes **than**.

2. **Subjunctive Mood with Mandative Verbs:**
   Verbs of recommendation, request, demand (*recommend, demand, insist, mandate that*) require the BASE FORM of the verb without '-s'.
   - *Wrong:* The committee recommended that the director steps down.
   - *Right:* The committee recommended that the director **step** down.

3. **Prepositional Interveners:**
   Phrases like *along with, as well as, together with, in addition to* do NOT change the subject number. Verb agrees with the FIRST subject.
   - *Right:* The Governor, along with all deputy directors, **has** arrived.

4. **Dangling Participial Modifiers:**
   A participial phrase at sentence opening must logically modify the immediate subject following the comma.

5. **Comparison Trap ("That of / Those of"):**
   Comparing an attribute of entity A directly to entity B instead of its attribute.
   - *Wrong:* The NPA ratio of Bank A is higher than Bank B.
   - *Right:* The NPA ratio of Bank A is higher than **that of** Bank B.`,
    coreTheoryHi: `बैंकिंग परीक्षाओं में एरर स्पॉटिंग (Error Spotting) 10 प्रमुख व्याकरण नियमों पर आधारित होती है। परीक्षक बोलचाल की अंग्रेजी की अशुद्धियों को प्रश्नों में शामिल करते हैं।

### प्रमुख 5 बैंकिंग व्याकरण नियम:
1. **नकारात्मक क्रियाविशेषण के बाद व्युत्क्रमण (Inversion):**
   *Hardly, Scarcely, Seldom, No sooner* से वाक्य शुरू होने पर सहायक क्रिया कर्ता से पहले आती है।
   - *Hardly / Scarcely* के साथ **when** आता है।
   - *No sooner* के साथ **than** आता है।
2. **सबजंक्टिव मूड (Subjunctive Mood):**
   *Recommend, demand, insist that* के बाद क्रिया का मूल रूप (Base verb) आता है (बिना s/es के)।
3. **मध्यवर्ती पूर्वसर्ग (Along with, As well as):**
   क्रिया सदैव प्रथम कर्ता के अनुसार आती है।
4. **असंगत विशेषण (Dangling Modifiers):**
   वाक्य के प्रारंभ में प्रयुक्त पार्टिसिपल सीधे कॉमा के बाद आने वाले कर्ता से संबंधित होना चाहिए।
5. **तुलना का नियम (That of / Those of):**
   समान वस्तुओं या विशेषताओं की ही तुलना की जानी चाहिए।`,
    conceptSvgDiagram: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <rect width="600" height="280" fill="#f8fafc" rx="12" />
  <text x="300" y="32" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">Banking Grammar: Subject-Verb Inversion Architecture</text>

  <!-- Rule 1 -->
  <rect x="40" y="60" width="520" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
  <text x="60" y="88" fill="#1e40af" fontWeight="bold" fontSize="14">Rule 1: Negative Adverb Opening ➔ Auxiliary BEFORE Subject</text>
  <text x="60" y="112" fill="#0f172a" fontSize="13">Hardly / Scarcely + [had / did] + Subject + V3 + ... + WHEN + clause</text>
  <text x="60" y="132" fill="#059669" fontWeight="bold" fontSize="12">✓ Example: Hardly HAD the manager ARRIVED when the bell rang.</text>

  <!-- Rule 2 -->
  <rect x="40" y="165" width="520" height="90" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
  <text x="60" y="193" fill="#991b1b" fontWeight="bold" fontSize="14">Rule 2: Correlative Pair Trap (Common TCS iON Error)</text>
  <text x="60" y="217" fill="#b91c1c" fontSize="13">❌ Hardly had the bell rung THAN the students left (Wrong pair)</text>
  <text x="60" y="237" fill="#15803d" fontWeight="bold" fontSize="12">✓ Correct: Hardly ➔ WHEN | No sooner ➔ THAN</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Negative Adverb Inversion Formula',
        latexFormula: `\\text{Hardly/Scarcely} + \\text{Auxiliary} + \\text{Subject} + \\text{Verb} \\dots + \\textbf{WHEN}`,
        explanationEn: 'Inversion triggers whenever negative adverbs open the sentence. Always verify "when" pairs with Hardly/Scarcely, not "than".',
        explanationHi: 'नकारात्मक क्रियाविशेषण से आरंभ होने पर क्रिया कर्ता से पहले आती है। Hardly/Scarcely के साथ सदैव "when" आता है।',
      },
      {
        title: 'Correlative Parallelism Formula',
        latexFormula: `\\text{Not only } [\\text{POS}] \\dots \\text{ but also } [\\text{POS}]`,
        explanationEn: 'Both sides of "not only ... but also" must belong to identical Parts of Speech (Verb with Verb, Preposition with Preposition).',
        explanationHi: '"Not only ... but also" के दोनों पक्षों में समान शब्द-भेद (Parts of Speech) होना अनिवार्य है।',
      },
    ],
    shortcutTricks: [
      {
        trickName: '3-Point Grammar Scan Strategy',
        conventionalTime: '45s',
        shortcutTime: '15s',
        conventionalMethodEn: 'Read the full sentence 3 times trying to hear which part sounds odd.',
        conventionalMethodHi: 'वाक्य को बार-बार पढ़कर यह महसूस करने का प्रयास करना कि कहां अटपटा लग रहा है।',
        shortcutStepsEn: 'Scan strictly for 3 trigger words in order:\n1. Look at sentence openers: Negative adverbs? Along with? Having + V3?\n2. Check verbs: Does verb agree with the true subject across interveners?\n3. Check conjunction pairs: Hardly...when, neither...nor, not only...but also.',
        shortcutStepsHi: '1. वाक्य की शुरुआत देखें (Hardly, Along with, Having)।\n2. मुख्य क्रिया का प्रथम कर्ता से सामंजस्य जांचें।\n3. संयोजक युग्मों की जांच करें (Hardly...when, Neither...nor)।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'The "One of the" Plural Noun vs Singular Verb Trap',
        mistakeStudentsMake: 'Writing "One of the employee who was present" or "One of the factors are".',
        howToAvoid: '"One of the + PLURAL NOUN + SINGULAR VERB". E.g., One of the factors IS.',
      },
      {
        trapTitle: 'Preposition + Gerund Trap (Look forward to)',
        mistakeStudentsMake: 'Writing "look forward to meet you" instead of "look forward to meeting you".',
        howToAvoid: 'In "look forward to", "to" is a preposition, not part of an infinitive. It requires a gerund (-ing).',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'The chief executive officer (A) / along with his directors (B) / have approved the budget (C) / for the next fiscal year. (D)',
        questionHi: 'The chief executive officer (A) / along with his directors (B) / have approved the budget (C) / for the next fiscal year. (D)',
        conventionalSolEn: 'When two subjects are connected by "along with", the verb agrees with the first subject ("The chief executive officer", singular). Replace "have" with "has" in part (C).',
        conventionalSolHi: 'जब दो कर्ता "along with" से जुड़े हों, तो क्रिया प्रथम कर्ता ("The chief executive officer") के अनुसार एकवचन होगी। (C) में "have" के स्थान पर "has" आएगा।',
        shortcutTrickEn: 'Bracket out the phrase between commas: "The CEO [along with his directors] HAS approved...".',
        shortcutTrickHi: '"along with..." वाले भाग को कोष्ठक में रखकर मुख्य कर्ता के साथ क्रिया पढ़ें।',
        finalAnswer: 'Error in Part (C)',
      },
      {
        level: 'Moderate',
        questionEn: 'Hardly had the loan officer (A) / finalized the verification documents (B) / than the applicant submitted (C) / the revised income tax returns. (D)',
        questionHi: 'Hardly had the loan officer (A) / finalized the verification documents (B) / than the applicant submitted (C) / the revised income tax returns. (D)',
        conventionalSolEn: 'Correlative pair for "Hardly" is "when", not "than". Replace "than" with "when" in part (C).',
        conventionalSolHi: '"Hardly" के साथ संयोजक "when" आता है, "than" नहीं। भाग (C) में "than" के स्थान पर "when" आएगा।',
        shortcutTrickEn: 'Hardly/Scarcely ➔ WHEN. No sooner ➔ THAN. Instant catch.',
        shortcutTrickHi: 'Hardly ➔ when. No sooner ➔ than. 5 सेकंड में उत्तर।',
        finalAnswer: 'Error in Part (C)',
      },
      {
        level: 'Mains',
        questionEn: 'The forensic audit committee recommended that (A) / the general manager steps down immediately (B) / until all suspicious transactions (C) / were thoroughly audited. (D)',
        questionHi: 'The forensic audit committee recommended that (A) / the general manager steps down immediately (B) / until all suspicious transactions (C) / were thoroughly audited. (D)',
        conventionalSolEn: 'Mandative subjunctive verb ("recommended that") mandates base verb without -s. Replace "steps down" with "step down" in part (B).',
        conventionalSolHi: '"Recommended that" के साथ सबजंक्टिव मूड आता है जिसमें क्रिया का मूल रूप आता है। भाग (B) में "steps down" के स्थान पर "step down" आएगा।',
        shortcutTrickEn: 'Verbs of recommendation / demand take base verb (step, not steps).',
        shortcutTrickHi: 'सुझाव या मांग सूचक क्रियाओं के बाद base verb आता है (step down)।',
        finalAnswer: 'Error in Part (B)',
      },
    ],
  },
};

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
  if (PRESEEDED_CONCEPT_GUIDES[topicSlug]) {
    return PRESEEDED_CONCEPT_GUIDES[topicSlug];
  }

  const topicConfig = getTopicBySlug(topicSlug);
  const titleEn = topicConfig ? topicConfig.titleEn : topicSlug;
  const titleHi = topicConfig ? topicConfig.titleHi : topicSlug;
  const cluster = topicConfig ? topicConfig.clusterName : 'Banking Syllabus';

  // Fallback high-utility concept guide
  return {
    topicSlug,
    coreTheoryEn: `### ${titleEn} — Core Banking Conceptual Framework

In TCS iON Indian Banking Examinations, **${titleEn}** (${cluster}) carries significant weightage across both Prelims and Mains stages.

1. **Fundamental Principle:**
   Mastering this topic requires moving away from school-level brute-force methods to unit-based, ratio-based, and option-elimination strategies.

2. **Exam Calibration:**
   - **Clerk Prelims:** Single-step direct calculations with clean numbers. Target speed: 25–35 seconds.
   - **PO Prelims:** 2-step questions featuring close option distractors and calculation traps. Target speed: 45–60 seconds.
   - **Mains Stage:** Statement-based (Quantity I vs II), data sufficiency, or multi-variable caselet setups requiring conceptual depth. Target speed: 75–120 seconds.`,
    coreTheoryHi: `### ${titleHi} — मुख्य बैंकिंग संकल्पना रूपरेखा

TCS iON भारतीय बैंकिंग परीक्षाओं में **${titleHi}** (${cluster}) प्रारंभिक एवं मुख्य दोनों चरणों में महत्वपूर्ण भूमिका निभाता है।

1. **मूलभूत सिद्धांत:**
   इस विषय में सफलता हेतु पारंपरिक लंबे तरीकों के स्थान पर इकाई विधि, अनुपात विधि एवं विकल्प विलोपन तकनीक का उपयोग अनिवार्य है।

2. **परीक्षा स्तर वर्गीकरण:**
   - **क्लर्क प्रीलिम्स:** एकल-चरणीय प्रत्यक्ष गणना (लक्ष्य समय: 25–35 सेकंड)।
   - **पीओ प्रीलिम्स:** द्वि-चरणीय वैचारिक प्रश्न एवं जाल विकल्प (लक्ष्य समय: 45–60 सेकंड)।
   - **मेन्स चरण:** कथन आधारित, मात्रा तुलना (Q1 vs Q2) एवं बहु-चर आधारित प्रश्न (लक्ष्य समय: 75–120 सेकंड)।`,
    conceptSvgDiagram: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
  <rect width="600" height="240" fill="#f8fafc" rx="12" />
  <text x="300" y="36" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="16">${titleEn} Concept Mastery</text>
  <rect x="50" y="70" width="150" height="120" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
  <text x="125" y="110" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="14">Level 1</text>
  <text x="125" y="135" textAnchor="middle" fill="#1e40af" fontSize="12">Clerk Prelims</text>
  <text x="125" y="160" textAnchor="middle" fill="#64748b" fontSize="11">Speed &amp; Basics</text>
  
  <rect x="225" y="70" width="150" height="120" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
  <text x="300" y="110" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="14">Level 2</text>
  <text x="300" y="135" textAnchor="middle" fill="#065f46" fontSize="12">PO Prelims</text>
  <text x="300" y="160" textAnchor="middle" fill="#64748b" fontSize="11">Traps &amp; Ratios</text>
  
  <rect x="400" y="70" width="150" height="120" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
  <text x="475" y="110" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="14">Level 3</text>
  <text x="475" y="135" textAnchor="middle" fill="#991b1b" fontSize="12">Mains Analysis</text>
  <text x="475" y="160" textAnchor="middle" fill="#64748b" fontSize="11">Multi-Variable</text>
</svg>`,
    formulasAndRules: [
      {
        title: `${titleEn} Core Axiom`,
        latexFormula: `\\text{Mastery Formula} = \\frac{\\text{Conceptual Accuracy}}{\\text{Calculation Friction}} \\times 100`,
        explanationEn: 'Always isolate common terms and avoid premature multiplication. Use fraction equivalents.',
        explanationHi: 'हमेशा समान पदों को अलग करें और अंतिम चरण से पहले गुणा करने से बचें। भिन्न समतुल्य का उपयोग करें।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'Option Elimination & Boundary Check',
        conventionalTime: '90s',
        shortcutTime: '20s',
        conventionalMethodEn: 'Full paper-pencil derivation step by step.',
        conventionalMethodHi: 'चरणबद्ध पारंपरिक समीकरण हल करना।',
        shortcutStepsEn: '1. Check the unit digit and divisibility rules.\n2. Eliminate extreme outliers.\n3. Verify against boundary conditions.',
        shortcutStepsHi: '1. इकाई अंक और विभाज्यता नियम देखें।\n2. अत्यधिक बड़े/छोटे विकल्पों को हटाएं।\n3. सीमा स्थितियों से मिलान करें।',
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
        questionEn: `Standard Level 1 drill question for ${titleEn}.`,
        questionHi: `${titleHi} के लिए मानक लेवल 1 अभ्यास प्रश्न।`,
        conventionalSolEn: 'Step 1: Identify given variables. Step 2: Apply direct formula. Step 3: Compute final value.',
        conventionalSolHi: 'चरण 1: दिए गए मानों की पहचान करें। चरण 2: सूत्र लागू करें। चरण 3: उत्तर ज्ञात करें।',
        shortcutTrickEn: 'Direct unit method without decimal conversion.',
        shortcutTrickHi: 'बिना दशमलव बदले प्रत्यक्ष इकाई विधि।',
        finalAnswer: 'Option (A)',
      },
      {
        level: 'Moderate',
        questionEn: `Standard Level 2 PO Prelims scenario for ${titleEn}.`,
        questionHi: `${titleHi} के लिए मानक लेवल 2 पीओ प्रीलिम्स प्रश्न।`,
        conventionalSolEn: 'Step 1: Set up relational ratio. Step 2: Equate common units. Step 3: Solve for unknown factor.',
        conventionalSolHi: 'चरण 1: आनुपातिक संबंध बनाएं। चरण 2: समान पदों को बराबर रखें। चरण 3: अज्ञात मान निकालें।',
        shortcutTrickEn: 'Use ratio equivalence to eliminate calculation overhead.',
        shortcutTrickHi: 'गणना कम करने के लिए अनुपात समतुल्यता का उपयोग करें।',
        finalAnswer: 'Option (B)',
      },
      {
        level: 'Mains',
        questionEn: `Mains statement analysis question for ${titleEn}.`,
        questionHi: `${titleHi} के लिए मेन्स कथन विश्लेषण प्रश्न।`,
        conventionalSolEn: 'Evaluate Statement I and Statement II independently to determine sufficiency.',
        conventionalSolHi: 'कथन I और कथन II का स्वतंत्र रूप से मूल्यांकन करके पर्याप्तता की जांच करें।',
        shortcutTrickEn: 'Check degrees of freedom; avoid solving if equations suffice.',
        shortcutTrickHi: 'समीकरणों की संख्या जांचें; हल किए बिना पर्याप्तता तय करें।',
        finalAnswer: 'Both Statements Together are Sufficient',
      },
    ],
  };
}

export function getTopicQuestions(
  topicSlug: string,
  difficulty?: DifficultyLevel
): TopicPracticeQuestionData[] {
  let questions = PRESEEDED_PRACTICE_QUESTIONS[topicSlug] || [];

  if (questions.length === 0) {
    // Generate route-specific, authentic examination questions via the Dynamic Engine Router
    const diffs: DifficultyLevel[] = difficulty
      ? [difficulty]
      : ['LEVEL_1_CLERK_PRE', 'LEVEL_2_PO_PRE', 'LEVEL_3_MAINS'];

    questions = diffs.flatMap((diff) =>
      generateDynamicTopicQuestions(topicSlug, diff, 2, 20261031)
    );
  }

  if (difficulty) {
    const filtered = questions.filter((q) => q.difficulty === difficulty);
    return filtered.length > 0 ? filtered : questions;
  }

  return questions;
}
