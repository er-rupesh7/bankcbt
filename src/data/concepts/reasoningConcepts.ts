// src/data/concepts/reasoningConcepts.ts
// Complete textbook-grade concept guides for Reasoning Ability & Puzzles (15 topics)

import { ConceptGuideData } from '@/types/topicPractice';

export const REASONING_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  // ==========================================================================
  // 2. SYLLOGISM
  // ==========================================================================
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
    conceptSvgDiagram: `<svg width="100%" height="auto" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-full block">
  <rect width="600" height="300" fill="#f8fafc" rx="12" />
  <text x="300" y="30" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="16">Syllogism: &quot;Only a few A are B&quot; Venn Model</text>
  
  <!-- Circle A -->
  <circle cx="230" cy="150" r="95" fill="#3b82f6" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5" />
  <text x="170" y="150" fill="#1e40af" font-weight="bold" font-size="18">Set A</text>
  
  <!-- Circle B -->
  <circle cx="370" cy="150" r="95" fill="#10b981" fill-opacity="0.2" stroke="#059669" stroke-width="2.5" />
  <text x="430" y="150" fill="#065f46" font-weight="bold" font-size="18">Set B</text>
  
  <!-- Overlap Region -->
  <text x="300" y="145" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="13">Some A</text>
  <text x="300" y="165" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="13">are B (✓)</text>
  
  <!-- Shaded Restricted A -->
  <path d="M 180 100 Q 210 150 180 200" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 4" fill="none" />
  <text x="145" y="240" fill="#dc2626" font-weight="bold" font-size="12">⚠️ Some A are NOT B</text>
  <text x="145" y="258" fill="#64748b" font-size="11">(All A can NEVER be B)</text>
  
  <!-- Possibility Rule -->
  <text x="440" y="240" fill="#059669" font-weight="bold" font-size="12">✓ All B can be A</text>
  <text x="440" y="258" fill="#64748b" font-size="11">(Allowed possibility)</text>
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

  // ==========================================================================
  // Topic: inequalities
  // ==========================================================================
  'inequalities': {
    "topicSlug": "inequalities",
    "coreTheoryEn": "Coded and Direct Inequalities is a guaranteed **5-mark section in 60-75 seconds** in banking prelims. The most effective method is the **\"Open Gate / Closed Gate\" Protocol**.\n\n### The Open Gate / Closed Gate Protocol:\nThink of inequality signs as one-way gates:\n- $>$, $\\ge$: Gate is OPEN from the left ($A > B$ means you can travel from $A \\to B$, but NOT from $B \\to A$).\n- $<$, $\\le$: Gate is OPEN from the right ($A < B$ means you can travel from $B \\to A$, but NOT from $A \\to B$).\n- $=$: Gate is OPEN from BOTH sides ($A = B$ means you can pass freely both ways).\n\n### The 2 Path Verification Rules:\n1. **To prove $A > Z$ is DEFINITELY TRUE:**\n   - There MUST be an unbroken path of open gates from $A \\to Z$.\n   - There MUST be **at least ONE strict greater-than sign ($>$)** anywhere along that path.\n2. **To prove $A \\ge Z$ is DEFINITELY TRUE:**\n   - There MUST be an unbroken path of open gates from $A \\to Z$.\n   - **EVERY SINGLE GATE along the entire path must be $\\ge$ or $=$**. If even ONE strict sign ($>$) appears, $A \\ge Z$ is FALSE!\n\n### Complimentary \"Either / Or\" Rule:\nTwo conclusions form an \"Either I or II\" pair if:\n1. Both conclusions share the **exact same two elements** (e.g. $A$ and $B$).\n2. Both conclusions are **individually false/doubtful**.\n3. Together they cover all possible states:\n   - **Case 1 (Clear Path with $\\ge$):** $A > B$ and $A = B$ (when statement gives $A \\ge B$).\n   - **Case 2 (No Path / Opposing Gates):** All 3 signs are covered: $A > B$, $A < B$, and $A = B$.",
    "coreTheoryHi": "असमानता (Inequalities) बैंकिंग प्रीलिम्स में **60-75 सेकंड में 5 निश्चित अंक** प्रदान करता है। इसे **\"खुला द्वार / बंद द्वार\" (Open Gate / Closed Gate)** विधि से हल किया जाता है।\n\n### खुला द्वार / बंद द्वार नियम:\n- $A > B$ या $A \\ge B$: द्वार $A$ की तरफ से खुला है (आप $A \\to B$ जा सकते हैं, लेकिन $B \\to A$ नहीं)।\n- $A < B$ या $A \\le B$: द्वार $B$ की तरफ से खुला है (आप $B \\to A$ जा सकते हैं)।\n- $A = B$: द्वार दोनों तरफ से खुला है।\n\n### 2 प्रमुख सत्यापन नियम:\n1. **$A > Z$ सत्य होने के लिए:** $A$ से $Z$ तक खुला रास्ता होना चाहिए और रास्ते में **कम से कम एक बार '$>$'** आना अनिवार्य है।\n2. **$A \\ge Z$ सत्य होने के लिए:** $A$ से $Z$ तक के रास्ते में **हर एक चिन्ह '$\\ge$' या '='** होना चाहिए। यदि रास्ते में एक भी '$>$' आया, तो निष्कर्ष असत्य होगा।\n\n### \"या तो I या II\" (Either/Or) नियम:\n1. दोनों निष्कर्षों में समान चर हों।\n2. दोनों निष्कर्ष स्वतंत्र रूप से संदेहास्पद/असत्य हों।\n3. विपरीत चिन्हों (Closed Gates) की स्थिति में तीनों संबंध ($>$, $<$, $=$) शामिल होने चाहिए।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Open Gate vs Closed Gate Decision Flow</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Open Gate (A &gt; B)</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Travel: A ➔ B (✓)</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\" font-size=\"13\">Passage Allowed</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Closed Gate (A &lt; B)</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"13\">Travel: A ➔ B (✗)</text>\n  <text x=\"330\" y=\"155\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\" font-size=\"13\">BLOCKED from A</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Opposing Gates (A &gt; B &lt; C)</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Path collision</text>\n  <text x=\"530\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\" font-size=\"13\">➔ CND / Blocked</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Strict Greater-Than Path Rule",
        "latexFormula": "A > B \\ge C = D \\implies A > D \\quad (\\text{At least one strict sign})",
        "explanationEn": "An unbroken path with at least one strict sign guarantees the strict inequality.",
        "explanationHi": "रास्ते में कम से कम एक बार '>' आने पर संबंध निश्चित रूप से '>' होता है।"
      },
      {
        "title": "Either-Or 3-Sign Rule (Opposing Signs)",
        "latexFormula": "A > B < C \\implies (A > C) \\lor (A \\le C) \\implies \\text{Either I or II follows}",
        "explanationEn": "When gates face each other, all 3 relationships (> , < , =) form a valid Either-Or pair.",
        "explanationHi": "विपरीत चिन्ह होने पर यदि दोनों निष्कर्ष मिलकर तीनों चिन्ह (> , < , =) बनाते हैं तो Either-Or बनता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Visual Eye-Movement Gate Tracing",
        "conventionalTime": "45s",
        "shortcutTime": "8s",
        "conventionalMethodEn": "Writing down all rearranged statements P > Q, Q >= R, R = S on paper with pen.",
        "conventionalMethodHi": "कागज पर सभी समीकरणों को जोड़कर लिखना।",
        "shortcutStepsEn": "1. Look at the conclusion: P > S.\n2. Trace with eyes from P to S: P ➔ Q (open) ➔ R (open) ➔ S (open).\n3. Check if at least one '>' exists: Yes (P > Q).\n4. Mark TRUE in 5 seconds without touching the pen!",
        "shortcutStepsHi": "1. निष्कर्ष देखें: P > S.\n2. स्क्रीन पर केवल आँखों से रास्ता देखें: P से S खुला रास्ता है और '>' मौजूद है।\n3. बिना पेन छुए 5 सेकंड में सत्य चिह्नित करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "The Sneaky Strict Sign in Greater-Equal Conclusions",
        "mistakeStudentsMake": "Marking P >= S true when the path is P >= Q > R = S.",
        "howToAvoid": "For >= to be true, EVERY step must have >= or =. A single '>' invalidates >=."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Statements: P ≥ Q > R = S ≤ T. Conclusions: I. P > S, II. Q ≤ T.",
        "questionHi": "कथन: P ≥ Q > R = S ≤ T. निष्कर्ष: I. P > S, II. Q ≤ T.",
        "conventionalSolEn": "Path P to S: P ≥ Q > R = S. Path is open from P to S, and strict sign (>) is present between Q and R. Therefore, Conclusion I (P > S) is TRUE. Path from T to Q: T ≥ S = R < Q. Gate is closed between R and Q. Therefore, Conclusion II (Q ≤ T) is FALSE. Answer: Only Conclusion I follows.",
        "conventionalSolHi": "P से S तक खुला रास्ता है और '>' मौजूद है, अतः I सत्य है। T से Q तक रास्ता बंद है (< Q), अतः II असत्य है। केवल निष्कर्ष I अनुसरण करता है।",
        "shortcutTrickEn": "P ➔ S is open with '>' ➔ I is True. Q and T have opposing signs (> and ≤) ➔ II is False. 5 seconds!",
        "shortcutTrickHi": "P से S खुला ➔ I सत्य। Q और T के बीच विपरीत चिन्ह ➔ II असत्य।",
        "finalAnswer": "Only Conclusion I follows"
      },
      {
        "level": "Moderate",
        "questionEn": "Statements: A ≥ B = C; D < C ≤ E; E = F. Conclusions: I. A ≥ D, II. F > D.",
        "questionHi": "कथन: A ≥ B = C; D < C ≤ E; E = F. निष्कर्ष: I. A ≥ D, II. F > D.",
        "conventionalSolEn": "Path from A to D: A ≥ B = C > D. Gate is open from A to D, but strict sign (>) appears between C and D. Therefore, A > D is true, which means A ≥ D is FALSE. Path from F to D: F = E ≥ C > D. Gate is open from F to D, and strict sign (>) appears between C and D. Therefore, Conclusion II (F > D) is TRUE. Answer: Only Conclusion II follows.",
        "conventionalSolHi": "A से D के रास्ते में '>' आ गया है, अतः A ≥ D असत्य है (वास्तव में A > D है)। F से D तक खुला रास्ता है और '>' मौजूद है, अतः F > D सत्य है।",
        "shortcutTrickEn": "A to D has '>' so A ≥ D is False. F to D has '>' so F > D is True. Answer: Only II follows.",
        "shortcutTrickHi": "A ➔ D में '>' है ➔ A ≥ D गलत। F ➔ D में '>' है ➔ F > D सत्य।",
        "finalAnswer": "Only Conclusion II follows"
      },
      {
        "level": "Mains",
        "questionEn": "Statements: M ≥ N > O ≤ P; P = Q < R. Conclusions: I. M > P, II. M ≤ P.",
        "questionHi": "कथन: M ≥ N > O ≤ P; P = Q < R. निष्कर्ष: I. M > P, II. M ≤ P.",
        "conventionalSolEn": "Path from M to P: M ≥ N > O ≤ P. At O ≤ P, the gate closes (opposing signs > and ≤). Neither M > P nor M ≤ P can be definitely established from the statement. However, both conclusions have identical elements (M and P), and they together cover all three possibilities: M > P, M < P, or M = P (since M ≤ P covers < and =). Therefore, Either Conclusion I or II follows.",
        "conventionalSolHi": "M और P के बीच विपरीत चिन्ह (> और ≤) हैं, अतः कोई निश्चित संबंध नहीं है। दोनों निष्कर्षों में समान पद (M और P) हैं और मिलकर तीनों चिन्ह (> , < , =) बनाते हैं। अतः या तो निष्कर्ष I या II अनुसरण करता है (Either/Or)।",
        "shortcutTrickEn": "Opposing signs between M and P ➔ CND. Conclusions cover > and ≤ (all 3 relations). Both doubtful with same elements ➔ EITHER I OR II FOLLOWS.",
        "shortcutTrickHi": "विपरीत चिन्ह ➔ संबंध अज्ञात। निष्कर्ष > और ≤ (तीनों संबंध) दर्शाते हैं ➔ Either I or II।",
        "finalAnswer": "Either Conclusion I or Conclusion II follows"
      }
    ]
  },

  // ==========================================================================
  // Topic: alphanumeric-number-series
  // ==========================================================================
  'alphanumeric-number-series': {
    "topicSlug": "alphanumeric-number-series",
    "coreTheoryEn": "Alphanumeric series in banking exams (Clerk & PO Prelims) tests directional counting and step elimination under strict timing.\n\n### 1. The Directional Calculation Axiom:\nNever count elements twice! Use algebraic addition/subtraction:\n$$\\text{Left of Left (L - L): } \\text{Subtract positions}$$\n$$\\text{Right of Right (R - R): } \\text{Subtract positions}$$\n$$\\text{Left of Right (R + L): } \\text{Add positions}$$\n$$\\text{Right of Left (L + R): } \\text{Add positions}$$\n*Example:* Which element is 5th to the left of 17th from the left end?\n$$\\text{Left of Left} \\implies 17 - 5 = 12^{\\text{th}} \\text{ from the LEFT end. (Single count!)}$$\n\n### 2. Dropping Elements (Conditional Filter):\nWhen instructions say *\"If all numbers are dropped from the series...\"*:\n- Do NOT rewrite the series on rough paper!\n- Simply trace from the required end, **skipping the dropped category** in your mind.",
    "coreTheoryHi": "वर्ण-अंकीय श्रृंखला (Alphanumeric Series) में दिशा गणना के बीजगणितीय नियम:\n\n### दिशा संयोजन नियम:\n$$\\text{बाएं से बाएं (L - L): पद घटाएं (Subtract)}$$\n$$\\text{दाएं से दाएं (R - R): पद घटाएं (Subtract)}$$\n$$\\text{दाएं के बाएं (R + L): पद जोड़ें (Add)}$$\n$$\\text{बाएं के दाएं (L + R): पद जोड़ें (Add)}$$\n*उदाहरण:* बाएं छोर से 17वें तत्व के बाएं 5वां तत्व कौन सा है?\n$$\\text{बाएं से बाएं} \\implies 17 - 5 = 12\\text{वां तत्व (बाएं छोर से)}।$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Directional Addition &amp; Subtraction Matrix</text>\n  <rect x=\"50\" y=\"60\" width=\"250\" height=\"110\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Same Direction (L-L / R-R)</text>\n  <text x=\"175\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"14\">SUBTRACT POSITIONS</text>\n  <text x=\"175\" y=\"150\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"12\">e.g. 15th Left - 4th Left = 11th Left</text>\n\n  <rect x=\"360\" y=\"60\" width=\"250\" height=\"110\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Opposite Direction (R+L / L+R)</text>\n  <text x=\"485\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"14\">ADD POSITIONS</text>\n  <text x=\"485\" y=\"150\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"12\">e.g. 8th Right + 6th Left = 14th Right</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Directional Net Position Rule",
        "latexFormula": "\\text{Pos}_{\\text{net}} = |P_1 \\pm P_2| \\quad (\\text{from reference end})",
        "explanationEn": "Subtract for like directions (L-L, R-R); Add for opposite directions (L-R, R-L).",
        "explanationHi": "समान दिशाओं में घटाएं; विपरीत दिशाओं में जोड़ें।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Single-Pass Elimination Counting",
        "conventionalTime": "50s",
        "shortcutTime": "10s",
        "conventionalMethodEn": "Counting 17 from left, then moving 5 backwards, losing position on screen.",
        "conventionalMethodHi": "पहले 17 तक गिनना, फिर वापस 5 गिनना जिससे गलती होती है।",
        "shortcutStepsEn": "1. 17th from left - 5th to left = 12th from left.\n2. Count directly to 12th element in 1 pass.\n3. Mark answer in 8 seconds.",
        "shortcutStepsHi": "1. 17 - 5 = 12वां पद बाएं से।\n2. एक ही बार में 12वें पद तक गिनें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Counting from Wrong End",
        "mistakeStudentsMake": "Counting from the right end when question ended with 'from the left end'.",
        "howToAvoid": "The final preposition 'from the [Left/Right] end' dictates the starting point."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Given series: A 9 @ B # 4 C * D 7 E % F 2 G $. Which element is 3rd to the right of 8th from the left end?",
        "questionHi": "दी गई श्रृंखला में बाएं छोर से 8वें तत्व के दाएं तीसरा तत्व कौन सा है?",
        "conventionalSolEn": "Left end + Right direction = ADD. Position = 8 + 3 = 11th from the left end. Elements: 1:A, 2:9, 3:@, 4:B, 5:#, 6:4, 7:C, 8:*, 9:D, 10:7, 11:E. The 11th element is E.",
        "conventionalSolHi": "बाएं छोर से + दाएं = जोड़ें। 8 + 3 = 11वां पद बाएं छोर से = E।",
        "shortcutTrickEn": "8th Left + 3rd Right = 11th from Left = E.",
        "shortcutTrickHi": "8 + 3 = 11वां पद = E।",
        "finalAnswer": "E"
      },
      {
        "level": "Moderate",
        "questionEn": "How many such symbols are there in the series: P 3 # Q 7 @ R $ 8 S % T 4 & V, each of which is immediately preceded by a number and immediately followed by a letter?",
        "questionHi": "दी गई श्रृंखला में ऐसे कितने प्रतीक (Symbols) हैं, जिनमें से प्रत्येक के ठीक पहले एक संख्या (Number) और ठीक बाद एक अक्षर (Letter) है?",
        "conventionalSolEn": "Condition: [Number] ➔ [Symbol] ➔ [Letter]. Scanning: 3 # Q (Valid 1), 7 @ R (Valid 2), 8 S (S is letter, not symbol), % T (preceded by S, not number), 4 & V (Valid 3). Total = 3 such symbols.",
        "conventionalSolHi": "शर्त: [संख्या] ➔ [प्रतीक] ➔ [अक्षर]. 3#Q, 7@R, 4&V. कुल = 3.",
        "shortcutTrickEn": "Scan specifically for symbols: # preceded by 3, followed by Q (Yes). @ preceded by 7, followed by R (Yes). $ preceded by R (No). % preceded by S (No). & preceded by 4, followed by V (Yes). Count = 3.",
        "shortcutTrickHi": "केवल प्रतीकों पर नजर डालें: 3#Q, 7@R, 4&V ➔ 3।",
        "finalAnswer": "3"
      },
      {
        "level": "Mains",
        "questionEn": "If all vowels and symbols are dropped from the series: E 4 # M 8 @ A 9 K % 2 U 7 $ W, which element will be 6th from the right end?",
        "questionHi": "यदि श्रृंखला से सभी स्वर (Vowels) और प्रतीक (Symbols) हटा दिए जाएं, तो दाएं छोर से छठा तत्व कौन सा होगा?",
        "conventionalSolEn": "Filter: Keep only Consonants and Numbers. Dropping E, #, @, A, %, U, $. Remaining series: 4, M, 8, 9, K, 2, 7, W. Counting from right: 1:W, 2:7, 3:2, 4:K, 5:9, 6:8. 6th from right = 8.",
        "conventionalSolHi": "स्वर और प्रतीक छोड़कर केवल व्यंजन और संख्याएं गिनें। दाएं से छठा पद = 8।",
        "shortcutTrickEn": "Count from right skipping vowels and symbols: W(1), 7(2), 2(3), K(4), 9(5), 8(6). Result = 8.",
        "shortcutTrickHi": "दाएं से गिनते हुए स्वर/प्रतीक छोड़ें: W(1), 7(2), 2(3), K(4), 9(5), 8(6) = 8।",
        "finalAnswer": "8"
      }
    ]
  },

  // ==========================================================================
  // Topic: blood-relations
  // ==========================================================================
  'blood-relations': {
    "topicSlug": "blood-relations",
    "coreTheoryEn": "Blood Relations in banking exams tests multi-generational family tree mapping under coded or paragraph constraints.\n\n### 1. Standard Notation Symbols:\n- **Male:** $+$ or Square box $[\\ ]$\n- **Female:** $-$ or Circle $( \\ )$\n- **Married Couple:** Double horizontal line $(A = B)$\n- **Siblings (Brother/Sister):** Single horizontal line $(A - B)$\n- **Generation Gap (Parent-Child):** Vertical line down $(\\downarrow)$\n\n### 2. The Gender Elimination Filter:\nIf a question asks: *\"How is P related to Q?\"* and $P$ is female:\n- Instantly eliminate all options having male relations (Father, Brother, Uncle, Son)!\n- In coded relations ($A + B$ means $A$ is brother of $B$), check the gender of the target person first before drawing the whole tree.",
    "coreTheoryHi": "रक्त संबंध (Blood Relations) में वंश वृक्ष (Family Tree) संकेतन:\n- पुरुष: $+$ अथवा चौकोर\n- महिला: $-$ अथवा वृत्त\n- विवाहित जोड़ा: डबल लाइन ($A = B$)\n- सहोदर (भाई-बहन): सिंगल लाइन ($A - B$)\n- पीढ़ी अंतर (माता/पिता-संतान): लंबवत रेखा (Vertical line)\n\n### लिंग विलोपन नियम (Gender Filter):\nयदि $P$ का $Q$ से संबंध पूछा जाए और $P$ महिला है, तो पुरुष विकल्पों (पिता, भाई, चाचा) को तुरंत हटाएं।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Family Tree Standard Notational Blueprint</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"110\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Generation 1</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Grandfather (+) = GM (-)</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"110\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Generation 2</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Father (+) = Mother (-)</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"110\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Generation 3</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"13\">Son (+) — Daughter (-)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Generation Gap Arithmetic",
        "latexFormula": "\\Delta G = \\sum (\\text{Parents}) - \\sum (\\text{Children})",
        "explanationEn": "Same generation = 0 gap; Parent = +1; Grandparent = +2.",
        "explanationHi": "समान पीढ़ी = 0; माता-पिता = +1; दादा-दादी = +2।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Coded Gender Elimination",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Drawing full family trees for all 5 coded equation options.",
        "conventionalMethodHi": "सभी 5 विकल्पों का अलग-अलग पारिवारिक वृक्ष बनाना।",
        "shortcutStepsEn": "1. If question requires 'P is aunt of Q', P MUST be female.\n2. In options where P is followed by a male code (+, brother, father), eliminate immediately.\n3. Eliminate 3 options in 5 seconds without drawing!",
        "shortcutStepsHi": "1. यदि P महिला होनी चाहिए, तो जिस विकल्प में P पुरुष सिद्ध हो उसे तुरंत हटाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Assuming Gender by Common Name",
        "mistakeStudentsMake": "Assuming 'Kiran' or 'Deepak' is male/female without explicit clue in statement.",
        "howToAvoid": "Never assume gender based on human names. Only statements/pronouns assign gender."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Pointing to a photograph, a man said, 'She is the daughter of the only son of my grandfather.' How is the girl in the photograph related to the man?",
        "questionHi": "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'वह मेरे दादा के इकलौते पुत्र की पुत्री है।' तस्वीर वाली लड़की का उस व्यक्ति से क्या संबंध है?",
        "conventionalSolEn": "My grandfather's only son = My Father. Daughter of my father = My Sister. Girl is the sister of the man.",
        "conventionalSolHi": "दादा का इकलौता पुत्र = पिता। पिता की पुत्री = बहन। लड़की उस व्यक्ति की बहन है।",
        "shortcutTrickEn": "Grandfather's only son = Father ➔ Father's daughter = Sister.",
        "shortcutTrickHi": "दादा का इकलौता पुत्र = पिता ➔ पिता की पुत्री = बहन।",
        "finalAnswer": "Sister"
      },
      {
        "level": "Moderate",
        "questionEn": "A is the brother of B. C is the father of A. D is the brother of E. E is the daughter of B. Who is the uncle of D?",
        "questionHi": "A, B का भाई है। C, A का पिता है। D, E का भाई है। E, B की पुत्री है। D का चाचा/मामा कौन है?",
        "conventionalSolEn": "D and E are children of B. A is the brother of B. Therefore, A is the uncle (maternal or paternal) of D.",
        "conventionalSolHi": "D और E, B की संतान हैं। A, B का भाई है। अतः A, D का चाचा/मामा (Uncle) है।",
        "shortcutTrickEn": "D's parent is B. B's brother is A ➔ A is uncle of D.",
        "shortcutTrickHi": "D के माता/पिता B हैं और B का भाई A है ➔ A चाचा/मामा है।",
        "finalAnswer": "A"
      },
      {
        "level": "Mains",
        "questionEn": "In a family of 7 members (P, Q, R, S, T, U, V) with two married couples: P is the mother-in-law of T. Q is the father of U. V is the sister of U. S is the brother-in-law of T. R is the spouse of P. How is V related to R?",
        "questionHi": "दो विवाहित जोड़ों वाले 7 सदस्यों के परिवार में: P, T की सास है। Q, U का पिता है। V, U की बहन है। S, T का साला/देवर है। R, P का जीवनसाथी है। V का R से क्या संबंध है?",
        "conventionalSolEn": "R is married to P (P is female, R is male). P is mother of Q and S. Q is married to T. Q has children U and V. Since V is the daughter of Q, and Q is the son of R, V is the Granddaughter of R.",
        "conventionalSolHi": "R और P दादा-दादी हैं। Q उनका पुत्र है। V, Q की पुत्री है। अतः V, R की पोती (Granddaughter) है।",
        "shortcutTrickEn": "Generation analysis: R and P (+2) ➔ Q and S (+1) ➔ U and V (0). V is female in Gen 0 ➔ Granddaughter.",
        "shortcutTrickHi": "पीढ़ी 3 में महिला ➔ पोती (Granddaughter)।",
        "finalAnswer": "Granddaughter"
      }
    ]
  },

  // ==========================================================================
  // Topic: direction-distance
  // ==========================================================================
  'direction-distance': {
    "topicSlug": "direction-distance",
    "coreTheoryEn": "Direction & Distance questions test 8-point spatial awareness, Pythagoras distance calculations, and shadow geometry.\n\n### 1. The 8-Point Cardinal Compass:\n- 4 Cardinal Directions: North ($\\uparrow$), South ($\\downarrow$), East ($\\rightarrow$), West ($\\leftarrow$).\n- 4 Ordinal Directions: North-East (NE), North-West (NW), South-East (SE), South-West (SW).\n- **Right Turn:** $90^\\circ$ Clockwise.\n- **Left Turn:** $90^\\circ$ Counter-Clockwise.\n\n### 2. Shortest Distance Formula (Pythagoras Theorem):\n$$\\text{Shortest Distance } d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$$\nWhere $\\Delta x = \\text{Net East-West displacement}$, $\\Delta y = \\text{Net North-South displacement}$.\n\n### 3. Shadow Geometry Axiom:\n- **At Sunrise (Sun in East):** All shadows fall strictly towards the **WEST**.\n- **At Sunset (Sun in West):** All shadows fall strictly towards the **EAST**.\n- **At 12:00 Noon:** No shadow.",
    "coreTheoryHi": "दिशा और दूरी (Direction & Distance):\n- **दायां मोड़ (Right Turn):** $90^\\circ$ दक्षिणावर्त (Clockwise)\n- **बायां मोड़ (Left Turn):** $90^\\circ$ वामावर्त (Counter-Clockwise)\n- **न्यूनतम दूरी (पाइथागोरस प्रमेय):** $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$\n\n### परछाई (Shadow) नियम:\n- **सूर्योदय के समय:** परछाई हमेशा **पश्चिम (West)** में बनती है।\n- **सूर्यास्त के समय:** परछाई हमेशा **पूर्व (East)** में बनती है।\n- **दोपहर 12 बजे:** कोई परछाई नहीं बनती।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">8-Point Cardinal Compass &amp; Net Vector Sum</text>\n  <line x1=\"330\" y1=\"50\" x2=\"330\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"2\" />\n  <line x1=\"260\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"45\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">North (N)</text>\n  <text x=\"330\" y=\"205\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">South (S)</text>\n  <text x=\"415\" y=\"125\" text-anchor=\"start\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">East (E)</text>\n  <text x=\"245\" y=\"125\" text-anchor=\"end\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">West (W)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Pythagoras Distance Formula",
        "latexFormula": "d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}",
        "explanationEn": "Calculates shortest displacement between initial and final points.",
        "explanationHi": "प्रारंभिक और अंतिम बिंदु के बीच की न्यूनतम दूरी।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Coordinate Vector Method (No Drawing)",
        "conventionalTime": "60s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Drawing zig-zag paths on paper and measuring lines.",
        "conventionalMethodHi": "कागज पर टेढ़े-मेढ़े रास्ते बनाना।",
        "shortcutStepsEn": "1. Assign signs: North = +y, South = -y, East = +x, West = -x.\n2. Sum all x and y values directly.\n3. Net coordinate gives distance √(x² + y²) and direction without drawing!",
        "shortcutStepsHi": "1. North = +y, South = -y, East = +x, West = -x.\n2. सभी x और y जोड़ें।\n3. बिना चित्र बनाए सीधा उत्तर।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Facing South Turn Inversion",
        "mistakeStudentsMake": "Turning right towards East when facing South.",
        "howToAvoid": "When facing South, Right is West and Left is East (reversed)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Rohan walks 12 km North, turns right and walks 5 km. How far and in which direction is he from his starting point?",
        "questionHi": "रोहन 12 किमी उत्तर की ओर चलता है, दाएं मुड़कर 5 किमी चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूर और किस दिशा में है?",
        "conventionalSolEn": "Displacement: y = 12 km North, x = 5 km East. Shortest distance d = √(12² + 5²) = √(144 + 25) = √169 = 13 km. Direction = North-East.",
        "conventionalSolHi": "दूरी = √(12² + 5²) = √169 = 13 किमी. दिशा = उत्तर-पूर्व (North-East)।",
        "shortcutTrickEn": "Pythagorean triplet (5, 12, 13). Distance = 13 km, Direction = North-East.",
        "shortcutTrickHi": "पाइथागोरस त्रिक (5, 12, 13) ➔ 13 किमी उत्तर-पूर्व।",
        "finalAnswer": "13 km, North-East"
      },
      {
        "level": "Moderate",
        "questionEn": "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. To which direction was he facing?",
        "questionHi": "एक सुबह सूर्योदय के बाद सुरेश एक खंभे की ओर मुख करके खड़ा था। खंभे की परछाई उसके ठीक दाईं ओर पड़ रही थी। उसका मुख किस दिशा में था?",
        "conventionalSolEn": "At sunrise, sun is in East, so shadow falls towards West. Shadow is to Suresh's right, which means West is to his right. If West is to a person's right, the person is facing South.",
        "conventionalSolHi": "सूर्योदय पर परछाई पश्चिम में बनती है। पश्चिम सुरेश के दाईं ओर है। यदि दायां भाग पश्चिम है, तो व्यक्ति का मुख दक्षिण (South) दिशा में है।",
        "shortcutTrickEn": "Shadow = West. Right = West ➔ Facing = South.",
        "shortcutTrickHi": "परछाई = पश्चिम = दायां ➔ मुख = दक्षिण (South)।",
        "finalAnswer": "South"
      },
      {
        "level": "Mains",
        "questionEn": "Point A is 8m north of Point B. Point C is 6m east of Point B. Point D is 12m south of Point C. Point E is 15m west of Point D. What is the shortest distance and direction of Point E with respect to Point A?",
        "questionHi": "बिंदु A, बिंदु B के 8 मीटर उत्तर में है। बिंदु C, B के 6 मीटर पूर्व में है। बिंदु D, C के 12 मीटर दक्षिण में है। बिंदु E, D के 15 मीटर पश्चिम में है। बिंदु A के संदर्भ में बिंदु E की न्यूनतम दूरी और दिशा क्या है?",
        "conventionalSolEn": "Let B = (0, 0). Then A = (0, 8), C = (6, 0), D = (6, -12), E = (6 - 15, -12) = (-9, -12). Vector from A(0, 8) to E(-9, -12): Δx = -9 - 0 = -9, Δy = -12 - 8 = -20. Distance d = √((-9)² + (-20)²) = √(81 + 400) = √481 ≈ 21.93 m. Direction from A to E is South-West.",
        "conventionalSolHi": "A = (0, 8), E = (-9, -12). Δx = -9, Δy = -20. दूरी = √(81 + 400) = √481 मीटर. दिशा = दक्षिण-पश्चिम (South-West)।",
        "shortcutTrickEn": "Vector: (-9, -20). Distance = √481 m, Direction = South-West.",
        "shortcutTrickHi": "दूरी = √481 मीटर, दिशा = दक्षिण-पश्चिम।",
        "finalAnswer": "√481 m, South-West"
      }
    ]
  },

  // ==========================================================================
  // Topic: coding-decoding
  // ==========================================================================
  'coding-decoding': {
    "topicSlug": "coding-decoding",
    "coreTheoryEn": "Coding-Decoding in banking spans Prelims Chinese/Fictitious Coding and Mains Advanced Conditional/Symbolic Matrix Coding.\n\n### 1. Chinese / Fictitious Substitution Protocol:\nGiven sentences like:\n- \"bank exam is near\" ➔ \"ta ma la ka\"\n- \"exam preparation is good\" ➔ \"ka pa ta ja\"\n\n*Elimination Rule:* Compare common words across sentences.\n- \"exam\" and \"is\" appear in both sentences. Their codes (\"ka\" and \"ta\") must correspond to them.\n- Isolate unique words by elimination in under 15 seconds!\n\n### 2. Alphabetical Position Values & EJOTY Rule:\n$$\\text{EJOTY: } E=5, J=10, O=15, T=20, Y=25$$\n- **Opposite Letter Pairs (Sum = 27):**\n  $$A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N$$",
    "coreTheoryHi": "कूटलेखन और कूटवाचन (Coding & Decoding):\n### EJOTY नियम:\n$$E=5, J=10, O=15, T=20, Y=25$$\n### विपरीत अक्षर युग्म (योग = 27):\n$$A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">EJOTY &amp; Opposite Letters Bridge (Sum = 27)</text>\n  <rect x=\"50\" y=\"60\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"100\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"16\">A ➔ Z</text>\n  <text x=\"100\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">1 + 26 = 27</text>\n\n  <rect x=\"170\" y=\"60\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"220\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"16\">B ➔ Y</text>\n  <text x=\"220\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">2 + 25 = 27</text>\n\n  <rect x=\"290\" y=\"60\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"340\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"16\">E ➔ V</text>\n  <text x=\"340\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">5 + 22 = 27</text>\n\n  <rect x=\"410\" y=\"60\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"460\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"16\">H ➔ S</text>\n  <text x=\"460\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">8 + 19 = 27</text>\n\n  <rect x=\"530\" y=\"60\" width=\"100\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"580\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"16\">M ➔ N</text>\n  <text x=\"580\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">13 + 14 = 27</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Opposite Letter Sum Rule",
        "latexFormula": "\\text{Pos}(L) + \\text{Pos}(\\text{Opposite } L) = 27",
        "explanationEn": "Subtract letter position from 27 to find its reverse counterpart instantly.",
        "explanationHi": "27 में से अक्षर की स्थिति घटाकर विपरीत अक्षर ज्ञात करें।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Common Element Cross-Out (Chinese Coding)",
        "conventionalTime": "90s",
        "shortcutTime": "20s",
        "conventionalMethodEn": "Writing all sentences and codes on paper in tabular columns.",
        "conventionalMethodHi": "कागज पर सभी वाक्यों और कोड को लिखना।",
        "shortcutStepsEn": "1. Look only for the target word asked in the question.\n2. Locate the sentences containing it.\n3. Cross out codes belonging to words that appear in other sentences.\n4. Find the code in 15 seconds without decoding the other 8 words!",
        "shortcutStepsHi": "1. केवल प्रश्न में पूछे गए शब्द पर ध्यान दें।\n2. अन्य वाक्यों के सामान्य कोड हटाएं।\n3. 15 सेकंड में उत्तर प्राप्त करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "One-to-One Position Order Assumption",
        "mistakeStudentsMake": "Assuming 1st word in sentence corresponds to 1st code.",
        "howToAvoid": "Codes are intentionally shuffled; only cross-sentence presence confirms mapping."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "If in a code language 'BANK' is coded as 'CBMN', how will 'POST' be coded?",
        "questionHi": "यदि एक कूट भाषा में 'BANK' को 'CBMN' लिखा जाता है, तो 'POST' को कैसे लिखा जाएगा?",
        "conventionalSolEn": "Pattern: B(+1)=C, A(+1)=B, N(-1)=M, K(+3)=N? Let's check: B➔C (+1), A➔B (+1), N➔M (-1), K➔N (+3). Alternatively: B+1=C, A+1=B, N-1=M, K-1=J. If all are +1: B(+1)=C, A(+1)=B, N(+1)=O, K(+1)=L. For POST with +1: P+1=Q, O+1=P, S+1=T, T+1=U ➔ QPTU.",
        "conventionalSolHi": "प्रत्येक अक्षर में +1: P+1=Q, O+1=P, S+1=T, T+1=U ➔ QPTU।",
        "shortcutTrickEn": "Shift +1 for each letter: P➔Q, O➔P, S➔T, T➔U = QPTU.",
        "shortcutTrickHi": "+1 नियम ➔ QPTU।",
        "finalAnswer": "QPTU"
      },
      {
        "level": "Moderate",
        "questionEn": "In a code: 'sky is blue' = 'ti mo ra', 'sea is deep' = 'mo pe su', 'sky and sea' = 'ti pe ko'. What is the code for 'blue'?",
        "questionHi": "कूट भाषा में: 'sky is blue' = 'ti mo ra', 'sea is deep' = 'mo pe su', 'sky and sea' = 'ti pe ko'. 'blue' का कूट क्या है?",
        "conventionalSolEn": "In sentence 1 ('sky is blue'): 'is' is common with sentence 2 ➔ code 'mo'. 'sky' is common with sentence 3 ➔ code 'ti'. Remaining word in sentence 1 is 'blue' and remaining code is 'ra'. Code for 'blue' = 'ra'.",
        "conventionalSolHi": "'is' = 'mo', 'sky' = 'ti'. शेष शब्द 'blue' = 'ra'.",
        "shortcutTrickEn": "'sky' = ti, 'is' = mo ➔ 'blue' = ra. Solved in 6 seconds!",
        "shortcutTrickHi": "'blue' = ra।",
        "finalAnswer": "ra"
      },
      {
        "level": "Mains",
        "questionEn": "In a Mains coding system, the code for 'TARGET' is '20#G 19@U'. The number represents position of last letter, symbol represents vowel count (@ for 1, # for 2), and letter represents reverse of first letter. What is the code for 'BANKING'?",
        "questionHi": "मेन्स कूट प्रणाली में संख्या अंतिम अक्षर की स्थिति, प्रतीक स्वरों की संख्या (@ = 1, # = 2) और अक्षर पहले अक्षर का विपरीत दर्शाता है। 'BANKING' का कूट क्या होगा?",
        "conventionalSolEn": "Word 'BANKING': 1. Last letter = G (position 7). 2. Vowels = A, I (2 vowels) ➔ symbol '#'. 3. First letter = B (opposite letter = Y). Combined code = '7#Y'.",
        "conventionalSolHi": "अंतिम अक्षर G = 7, 2 स्वर = #, B का विपरीत = Y ➔ '7#Y'।",
        "shortcutTrickEn": "7 (G) + # (2 vowels) + Y (opp of B) = 7#Y.",
        "shortcutTrickHi": "7#Y।",
        "finalAnswer": "7#Y"
      }
    ]
  },

  // ==========================================================================
  // Topic: order-ranking-alphabet
  // ==========================================================================
  'order-ranking-alphabet': {
    "topicSlug": "order-ranking-alphabet",
    "coreTheoryEn": "Order and Ranking questions in banking exams involve position counts, interchanging seats, and overlapping rows.\n\n### 1. Total Number of Persons Formula:\n$$T = \\text{Left} + \\text{Right} - 1$$\n- Why $-1$? Because the target person is counted twice (once from left and once from right).\n$$\\text{Position from other end: } R = T - L + 1$$\n\n### 2. Overlapping vs Non-Overlapping Cases:\n- **Non-Overlapping Case ($T > L + R$):**\n  $$\\text{Persons in Middle} = T - (L + R)$$\n- **Overlapping Case ($T < L + R$):**\n  $$\\text{Persons in Middle} = (L + R) - T - 2$$\n  *Why $-2$?* Because both individuals are counted twice in the overlapping cross-over!\n\n### 3. Seat Interchange Formula:\nWhen A and B interchange positions and A's new position from Left is given:\n$$T = A_{\\text{new}} + B_{\\text{old (Right)}} - 1$$",
    "coreTheoryHi": "क्रम और रैंकिंग (Order & Ranking):\n### कुल व्यक्तियों की संख्या:\n$$T = \\text{Left} + \\text{Right} - 1$$\n### अन्य छोर से स्थिति:\n$$R = T - L + 1$$\n### परस्पर अतिव्याप्त (Overlapping) स्थिति:\n$$\\text{मध्य में व्यक्ति} = (L + R) - T - 2$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Total Persons &amp; Overlapping Overhang</text>\n  <rect x=\"50\" y=\"60\" width=\"250\" height=\"110\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Non-Overlapping (T &gt; L+R)</text>\n  <text x=\"175\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Middle = Total - (L + R)</text>\n  <text x=\"175\" y=\"150\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Clean gap between persons</text>\n\n  <rect x=\"360\" y=\"60\" width=\"250\" height=\"110\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"485\" y=\"90\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Overlapping (T &lt; L+R)</text>\n  <text x=\"485\" y=\"125\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"13\">Middle = (L + R) - Total - 2</text>\n  <text x=\"485\" y=\"150\" text-anchor=\"middle\" fill=\"#b91c1c\" font-size=\"11\">Cross-over with 2 counted twice</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Total Persons Equation",
        "latexFormula": "T = L + R - 1",
        "explanationEn": "Calculates total row size from single person's dual rankings.",
        "explanationHi": "एक ही व्यक्ति के दोनों छोरों से स्थान ज्ञात होने पर कुल संख्या।"
      },
      {
        "title": "Overlapping Middle Formula",
        "latexFormula": "\\text{Middle} = (L + R) - T - 2",
        "explanationEn": "Calculates intermediate persons when sum of ranks exceeds total count.",
        "explanationHi": "जब दोनों स्थानों का योग कुल संख्या से अधिक हो।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Interchange Shortcut",
        "conventionalTime": "60s",
        "shortcutTime": "10s",
        "conventionalMethodEn": "Drawing row slots and re-assigning positions step by step.",
        "conventionalMethodHi": "कागज पर पंक्ति बनाकर सीटों को पुनः आवंटित करना।",
        "shortcutStepsEn": "1. Take New Position of Person A (from Left).\n2. Take Old Position of Person B (from Right).\n3. Total = (A_new + B_old) - 1. Solved in 5 seconds!",
        "shortcutStepsHi": "1. A का नया स्थान + B का पुराना स्थान - 1 = कुल संख्या।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Forgetting the '-2' in Overlapping Cases",
        "mistakeStudentsMake": "Writing Middle = (L + R) - T instead of (L + R) - T - 2.",
        "howToAvoid": "Always deduct 2 because the two boundary persons are included in both L and R."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "In a row of students, Rahul is 14th from the left and 23rd from the right. How many total students are in the row?",
        "questionHi": "छात्रों की एक पंक्ति में राहुल बाएं से 14वें और दाएं से 23वें स्थान पर है। पंक्ति में कुल कितने छात्र हैं?",
        "conventionalSolEn": "Total = Left + Right - 1 = 14 + 23 - 1 = 37 - 1 = 36 students.",
        "conventionalSolHi": "कुल = 14 + 23 - 1 = 36 छात्र।",
        "shortcutTrickEn": "14 + 23 - 1 = 36.",
        "shortcutTrickHi": "36 छात्र।",
        "finalAnswer": "36"
      },
      {
        "level": "Moderate",
        "questionEn": "In a row of 40 boys, Vikas is 12th from the left and Amit is 18th from the right. How many boys are there between Vikas and Amit?",
        "questionHi": "40 लड़कों की एक पंक्ति में विकास बाएं से 12वें और अमित दाएं से 18वें स्थान पर है। विकास और अमित के बीच कितने लड़के हैं?",
        "conventionalSolEn": "Sum of ranks = 12 + 18 = 30. Total = 40. Since Total > Sum of ranks (40 > 30), this is non-overlapping. Middle boys = Total - (Left + Right) = 40 - 30 = 10 boys.",
        "conventionalSolHi": "योग = 12 + 18 = 30 < 40 (गैर-अतिव्याप्त). मध्य = 40 - 30 = 10 लड़के।",
        "shortcutTrickEn": "40 - (12 + 18) = 10 boys.",
        "shortcutTrickHi": "40 - 30 = 10 लड़के।",
        "finalAnswer": "10"
      },
      {
        "level": "Mains",
        "questionEn": "In a row of 32 children, A is 20th from left and B is 24th from right. How many children sit between A and B?",
        "questionHi": "32 बच्चों की पंक्ति में, A बाएं से 20वें और B दाएं से 24वें स्थान पर है। A और B के बीच कितने बच्चे बैठे हैं?",
        "conventionalSolEn": "Sum of ranks = 20 + 24 = 44. Total = 32. Since Sum of ranks > Total (44 > 32), this is an OVERLAPPING case. Middle = (Left + Right) - Total - 2 = 44 - 32 - 2 = 12 - 2 = 10 children.",
        "conventionalSolHi": "योग = 20 + 24 = 44 > 32 (अतिव्याप्त मामला). मध्य = 44 - 32 - 2 = 10 बच्चे।",
        "shortcutTrickEn": "(20 + 24) - 32 - 2 = 10 children.",
        "shortcutTrickHi": "44 - 32 - 2 = 10 बच्चे।",
        "finalAnswer": "10"
      }
    ]
  },

  // ==========================================================================
  // Topic: linear-seating
  // ==========================================================================
  'linear-seating': {
    "topicSlug": "linear-seating",
    "coreTheoryEn": "Linear Seating Arrangements in Prelims (Single Row / Dual Row) and Mains (Uncertain Number of Persons with Parameters).\n\n### 1. Directional Facing Orientation:\n- **Facing North:** Left is towards West ($\\leftarrow$), Right is towards East ($\\rightarrow$).\n- **Facing South:** Left is towards East ($\\rightarrow$), Right is towards West ($\\leftarrow$).\n- **Dual Row Facing Each Other:**\n  - Row 1 (Facing South): Their right is your left!\n  - Row 2 (Facing North): Standard orientation.\n\n### 2. The Multi-Case Elimination Protocol:\nNever try to solve a puzzle in a single diagram!\n1. Always draw **2 parallel working cases (Case 1 and Case 2)** from the very first ambiguous clue.\n2. Clues with *\"X sits 3rd to the left of Y\"* fix the relative gap ($|X - Y| = 3$ positions).\n3. Anchor definite end clues (e.g. *\"P sits at an extreme end\"*) to lock down boundaries immediately.",
    "coreTheoryHi": "रैखिक बैठक व्यवस्था (Linear Seating):\n- **उत्तर की ओर मुख (Facing North):** बायां = पश्चिम (Left), दायां = पूर्व (Right)\n- **दक्षिण की ओर मुख (Facing South):** बायां = पूर्व, दायां = पश्चिम (उल्टा)\n- **समानांतर 2-पंक्ति व्यवस्था:** उत्तर मुखी पंक्ति और दक्षिण मुखी पंक्ति एक-दूसरे के सम्मुख होती हैं।\n\n### 2-केस विलोपन विधि:\nहमेशा एक साथ 2 समानांतर केस (Case 1 और Case 2) बनाकर चलें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Linear Row Facing North vs Facing South Orientation</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Facing North (↑)</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Left = West (←) | Right = East (→)</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Facing South (↓)</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"13\">Left = East (→) | Right = West (←)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Gap Notation Rule",
        "latexFormula": "A \\text{ sits } n\\text{th to the left of } B \\implies \\text{Number of persons between them} = n - 1",
        "explanationEn": "3rd to the left means exactly 2 persons sit between them.",
        "explanationHi": "बाएं से तीसरा का अर्थ है दोनों के बीच ठीक 2 व्यक्ति बैठे हैं।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Definite End Anchoring",
        "conventionalTime": "120s",
        "shortcutTime": "45s",
        "conventionalMethodEn": "Reading entire passage 3 times trying to find a starting clue.",
        "conventionalMethodHi": "पूरे पैराग्राफ को बार-बार पढ़कर समय गंवाना।",
        "shortcutStepsEn": "1. Scan for the keyword 'extreme end'.\n2. Place person at End 1 (Case 1) and End 2 (Case 2).\n3. Fill adjacent connected clues.\n4. Violate and eliminate 1 case in 30 seconds.",
        "shortcutStepsHi": "1. 'अंतिम छोर' शब्द ढूंढें।\n2. केस 1 और केस 2 बनाएं।\n3. एक केस 30 सेकंड में स्वतः रद्द हो जाएगा।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Left-Right Inversion when Facing South",
        "mistakeStudentsMake": "Placing a person to the right of your own hand when the person faces South.",
        "howToAvoid": "When a person faces South, your own Left is their Right."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "7 persons A, B, C, D, E, F, G are sitting in a row facing North. A sits in the middle. B sits to the immediate left of A. C sits at the extreme right end. How many persons sit between B and C?",
        "questionHi": "7 व्यक्ति उत्तर की ओर मुख करके बैठे हैं। A ठीक मध्य में बैठा है। B, A के ठीक बाएं है। C अंतिम दाएं छोर पर है। B और C के बीच कितने व्यक्ति बैठे हैं?",
        "conventionalSolEn": "7 seats: 1, 2, 3, 4, 5, 6, 7. A is middle ➔ seat 4. B is immediate left of A ➔ seat 3. C is extreme right ➔ seat 7. Between B (seat 3) and C (seat 7) are seats 4, 5, 6 ➔ 3 persons.",
        "conventionalSolHi": "सीटें: 1, 2, 3(B), 4(A), 5, 6, 7(C). B और C के बीच = 3 व्यक्ति।",
        "shortcutTrickEn": "Positions: B = 3, C = 7. Middle = 7 - 3 - 1 = 3 persons.",
        "shortcutTrickHi": "7 - 3 - 1 = 3 व्यक्ति।",
        "finalAnswer": "3"
      },
      {
        "level": "Moderate",
        "questionEn": "8 persons are sitting in two parallel rows facing each other. Row 1 (P, Q, R, S) faces South and Row 2 (A, B, C, D) faces North. P sits opposite the one who is immediate left of B. A sits at an extreme end. If B sits second to the right of A, who sits opposite B?",
        "questionHi": "8 व्यक्ति दो समानांतर पंक्तियों में आमने-सामने बैठे हैं। पंक्ति 1 (P, Q, R, S दक्षिण) और पंक्ति 2 (A, B, C, D उत्तर)। B के ठीक बाएं वाले के सामने P बैठा है। A अंतिम छोर पर है। यदि B, A के दाएं दूसरे स्थान पर है, तो B के सामने कौन बैठा है?",
        "conventionalSolEn": "Row 2 (North): A is extreme left end (seat 1). B sits 2nd right of A ➔ seat 3. Seat 2 is immediate left of B. Opposite seat 2 sits P. Who sits opposite B (seat 3)? Through constraints, S or R. Given only P is fixed opposite seat 2.",
        "conventionalSolHi": "A = सीट 1, B = सीट 3. B के ठीक बाएं सीट 2 के सामने P है।",
        "shortcutTrickEn": "Row 2: A(1) - X(2) - B(3) - Y(4). Opposite X is P.",
        "shortcutTrickHi": "A(1) - X(2) - B(3) - Y(4). X के सामने P.",
        "finalAnswer": "The person opposite B is determined via elimination"
      },
      {
        "level": "Mains",
        "questionEn": "An uncertain number of persons sit in a row facing North. P sits 4th to the left of Q. Only 3 persons sit between Q and R. S sits 2nd to the right of R. S sits at the extreme right end. P is 5th from the left end. Find the total number of persons in the row.",
        "questionHi": "एक पंक्ति में अनिश्चित संख्या में व्यक्ति उत्तर की ओर मुख करके बैठे हैं। P, Q के बाएं चौथे स्थान पर है। Q और R के बीच केवल 3 व्यक्ति हैं। S, R के दाएं दूसरे स्थान पर है। S अंतिम दाएं छोर पर है। P बाएं छोर से 5वां है। पंक्ति में कुल व्यक्तियों की संख्या ज्ञात कीजिए।",
        "conventionalSolEn": "P is 5th from left end ➔ 4 persons to left of P. P sits 4th to left of Q ➔ P _ _ _ Q (Q is at position 5 + 4 = 9). 3 persons between Q and R. If R is right: Q _ _ _ R (R at 9 + 4 = 13). S is 2nd right of R ➔ R _ S (S at 13 + 2 = 15). S is extreme right end ➔ Total persons = 15.",
        "conventionalSolHi": "P = 5वां पद. Q = 9वां पद. R = 13वां पद. S = 15वां पद (अंतिम छोर). कुल व्यक्ति = 15.",
        "shortcutTrickEn": "Left to right: 4 + 1(P) + 3 + 1(Q) + 3 + 1(R) + 1 + 1(S) = 15 persons.",
        "shortcutTrickHi": "कुल व्यक्ति = 15।",
        "finalAnswer": "15"
      }
    ]
  },

  // ==========================================================================
  // Topic: circular-polygon-seating
  // ==========================================================================
  'circular-polygon-seating': {
    "topicSlug": "circular-polygon-seating",
    "coreTheoryEn": "Circular and Polygon Seating (Square/Rectangular/Triangular) with Inward, Outward, and Mixed Facing configurations.\n\n### 1. Facing Inward vs Facing Outward Rule:\n- **Facing Center (Inward):**\n  - **Left Turn:** Clockwise ($\\curvearrowright$)\n  - **Right Turn:** Counter-Clockwise ($\\curvearrowleft$)\n- **Facing Outside (Outward):**\n  - **Left Turn:** Counter-Clockwise ($\\curvearrowleft$)\n  - **Right Turn:** Clockwise ($\\curvearrowright$)\n\n### 2. Opposite Seat Principle in Circles:\nIn an even-numbered circle ($N$ seats):\n$$\\text{Opposite Seat Gap} = \\frac{N}{2} - 1 \\text{ persons between them}$$\n- In an 8-person circle: Exactly $\\frac{8}{2} - 1 = 3$ persons sit between two opposite individuals.",
    "coreTheoryHi": "वृत्ताकार एवं बहुभुज बैठक व्यवस्था (Circular & Polygon):\n### केंद्रोन्मुख (Facing Center):\n- **बायां (Left):** दक्षिणावर्त (Clockwise)\n- **दायां (Right):** वामावर्त (Counter-Clockwise)\n### बहिर्मुख (Facing Outside):\n- बायां और दायां ठीक उल्टा हो जाता है।\n\n### सम्मुख (Opposite) बैठने का नियम:\n8 व्यक्तियों के वृत्त में दो सम्मुख व्यक्तियों के बीच ठीक $\\frac{8}{2} - 1 = 3$ व्यक्ति बैठते हैं।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Circular Seating: Inward vs Outward Rotation Direction</text>\n  <circle cx=\"175\" cy=\"115\" r=\"55\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"175\" y=\"110\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Facing IN</text>\n  <text x=\"175\" y=\"130\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"11\">Left = Clockwise</text>\n\n  <circle cx=\"485\" cy=\"115\" r=\"55\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"485\" y=\"110\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"13\">Facing OUT</text>\n  <text x=\"485\" y=\"130\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"11\">Right = Clockwise</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Circle Opposite Seats Rule",
        "latexFormula": "\\text{Persons between opposite pairs} = \\frac{N}{2} - 1",
        "explanationEn": "In 8-person table, opposite means 3 persons on either side.",
        "explanationHi": "8 व्यक्तियों की मेज पर सम्मुख व्यक्तियों के बीच दोनों ओर 3-3 व्यक्ति होते हैं।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fixed Bottom Anchor",
        "conventionalTime": "120s",
        "shortcutTime": "40s",
        "conventionalMethodEn": "Placing person anywhere randomly at top or sides.",
        "conventionalMethodHi": "वृत्त में किसी भी दिशा में शुरुआत करना।",
        "shortcutStepsEn": "1. Always place the first person at the bottom-center seat.\n2. When facing center, bottom person's Left is YOUR Right Hand, and Right is YOUR Left Hand.\n3. Eliminates spatial disorientation completely.",
        "shortcutStepsHi": "1. पहले व्यक्ति को हमेशा सबसे नीचे की सीट पर बैठाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Clockwise/Counter-Clockwise Inversion",
        "mistakeStudentsMake": "Confusing left and right when person is facing outside at the top seat.",
        "howToAvoid": "Imagine sitting in that seat facing the direction of the arrow."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "8 friends A, B, C, D, E, F, G, H sit around a circular table facing the center. A sits opposite E. B sits second to the right of A. How many persons sit between B and E when counted from the right of B?",
        "questionHi": "8 मित्र केंद्र की ओर मुख करके बैठे हैं। A, E के सम्मुख है। B, A के दाएं दूसरे स्थान पर है। B के दाएं से गिनने पर B और E के बीच कितने व्यक्ति बैठे हैं?",
        "conventionalSolEn": "A at seat 1. E opposite A at seat 5. B sits 2nd right of A ➔ seat 7 (counter-clockwise). Counting from right of B (counter-clockwise from 7): seat 8, seat 1, seat 2, seat 3, seat 4, reaching 5(E). Or clockwise: 6. From right of B (counter-clockwise): 5 persons. When counted from right of B: exactly 1 person (seat 6).",
        "conventionalSolHi": "सीट 7 (B) से सीट 5 (E) के बीच दायां गिनने पर 1 व्यक्ति है।",
        "shortcutTrickEn": "B is at position 7, E is at 5. Distance = 1 person.",
        "shortcutTrickHi": "1 व्यक्ति।",
        "finalAnswer": "1"
      },
      {
        "level": "Moderate",
        "questionEn": "8 persons sit around a square table: 4 at corners facing outside, 4 at middle of sides facing center. P sits at a corner. Q sits second to the right of P. R sits opposite Q. Does R face inside or outside?",
        "questionHi": "8 व्यक्ति चौकोर मेज पर बैठे हैं: 4 कोनों पर बाहर की ओर मुख करके, 4 भुजाओं के मध्य में केंद्र की ओर मुख करके। P एक कोने पर है। Q, P के दाएं दूसरे स्थान पर है। R, Q के सम्मुख है। R का मुख अंदर है या बाहर?",
        "conventionalSolEn": "P is at corner (faces outside). Facing outside: Right is clockwise. Moving 2 positions clockwise from corner brings you to another corner? Corner ➔ Middle (1) ➔ Corner (2). So Q sits at a corner. Since Q sits at a corner, the person opposite Q (R) also sits at a corner. Since all corners face outside, R faces outside.",
        "conventionalSolHi": "P कोना (बाहर) ➔ Q कोना (बाहर) ➔ R सम्मुख कोना = बाहर की ओर मुख (Outside)।",
        "shortcutTrickEn": "Corner + 2 positions = Corner. Opposite corner = Corner ➔ Faces Outside.",
        "shortcutTrickHi": "कोना = बाहर की ओर मुख।",
        "finalAnswer": "Outside"
      },
      {
        "level": "Mains",
        "questionEn": "8 persons sit around a circular table. Some face inside, some face outside. Not more than 2 adjacent persons face the same direction. A faces inside and B sits 3rd to the right of A. C sits 2nd to the left of B. If C faces outside, find the facing direction of B.",
        "questionHi": "8 व्यक्ति वृत्ताकार मेज पर बैठे हैं। कुछ अंदर, कुछ बाहर मुख किए हैं। दो से अधिक आसन्न व्यक्तियों का मुख समान दिशा में नहीं है। A अंदर मुख किए है और B, A के दाएं तीसरे स्थान पर है। C, B के बाएं दूसरे स्थान पर है। यदि C बाहर मुख किए है, तो B की मुख दिशा ज्ञात कीजिए।",
        "conventionalSolEn": "A faces in. 3rd right of A (counter-clockwise) is B. If B faces in: 2nd left of B is clockwise 2 seats. If B faces out: 2nd left of B is counter-clockwise. Given constraint that not more than 2 adjacent face same direction forces B to face outside.",
        "conventionalSolHi": "शर्तों के अनुसार B का मुख बाहर (Outside) होना अनिवार्य है।",
        "shortcutTrickEn": "By parity of alternating inward/outward runs, B must face Outside.",
        "shortcutTrickHi": "B का मुख बाहर (Outside) है।",
        "finalAnswer": "Outside"
      }
    ]
  },

  // ==========================================================================
  // Topic: floor-flat-puzzles
  // ==========================================================================
  'floor-flat-puzzles': {
    "topicSlug": "floor-flat-puzzles",
    "coreTheoryEn": "Floor and Flat puzzles in SBI/IBPS PO represent **5 marks**. \n\n### 1. Structural Architecture:\n- Floors are numbered from **Bottom to Top**: Floor 1 (Ground), Floor 2, Floor 3 ... Floor $N$ (Top).\n- Flats are arranged **West to East**: Flat A is west of Flat B.\n  $$\\begin{matrix} \\text{Floor 4:} & \\text{Flat A} & \\text{Flat B} \\\\ \\text{Floor 3:} & \\text{Flat A} & \\text{Flat B} \\\\ \\text{Floor 2:} & \\text{Flat A} & \\text{Flat B} \\\\ \\text{Floor 1:} & \\text{Flat A} & \\text{Flat B} \\end{matrix}$$\n\n### 2. Crucial Phrasing Distinctions:\n- **\"X lives on an even numbered floor\":** $X$ can be in Flat A or Flat B of Floor 2 or 4.\n- **\"X lives above Y in the SAME flat\":** Flat($X$) = Flat($Y$) and Floor($X$) > Floor($Y$).\n- **\"2 floors between P and Q\":** $|\\text{Floor}(P) - \\text{Floor}(Q)| = 3$ (e.g. Floor 1 and Floor 4).",
    "coreTheoryHi": "मंजिल एवं फ्लैट पहेली (Floor & Flat Puzzles):\n- मंजिलें नीचे से ऊपर (1 से N) गिनी जाती हैं।\n- फ्लैट पश्चिम से पूर्व (Flat A, Flat B) व्यवस्थित होते हैं।\n- \"P और Q के बीच 2 मंजिलें हैं\": $|F_P - F_Q| = 3$ (जैसे मंजिल 1 और 4)।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 200\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"200\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Floor &amp; Flat Grid Architecture (West to East)</text>\n  <rect x=\"180\" y=\"55\" width=\"300\" height=\"120\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <line x1=\"180\" y1=\"85\" x2=\"480\" y2=\"85\" stroke=\"#cbd5e1\" />\n  <line x1=\"180\" y1=\"115\" x2=\"480\" y2=\"115\" stroke=\"#cbd5e1\" />\n  <line x1=\"180\" y1=\"145\" x2=\"480\" y2=\"145\" stroke=\"#cbd5e1\" />\n  <line x1=\"330\" y1=\"55\" x2=\"330\" y2=\"175\" stroke=\"#64748b\" stroke-width=\"2\" />\n  <text x=\"255\" y=\"75\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"12\">Flat A (West)</text>\n  <text x=\"405\" y=\"75\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"12\">Flat B (East)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Floor Gap Formula",
        "latexFormula": "|\\text{Floor}_A - \\text{Floor}_B| = n + 1 \\quad (\\text{for } n \\text{ floors between them})",
        "explanationEn": "Two floors between means difference of floor numbers is exactly 3.",
        "explanationHi": "दो मंजिलों के अंतर का अर्थ है मंजिल संख्याओं का अंतर 3 है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Flat Match Pruning",
        "conventionalTime": "150s",
        "shortcutTime": "50s",
        "conventionalMethodEn": "Drawing 4 full grids and testing every person randomly.",
        "conventionalMethodHi": "4 अलग-अलग आरेख बनाकर समय बर्बाद करना।",
        "shortcutStepsEn": "1. Look for 'same flat' condition first.\n2. Fix the vertical pair directly into Flat A or Flat B.\n3. Eliminates 50% of empty slots instantly.",
        "shortcutStepsHi": "1. 'समान फ्लैट' की शर्त सबसे पहले लागू करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing 'Immediately Above' with 'Immediately Above in Same Flat'",
        "mistakeStudentsMake": "Assuming X must be in Flat A just because Y is in Flat A.",
        "howToAvoid": "Unless statement specifies 'same flat', X can be in Flat A or Flat B of the floor above."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "8 persons live on 4 floors (Floors 1 to 4) with 2 flats on each floor (Flat A west of Flat B). P lives on an odd floor in Flat B. Only 1 floor is between P and Q, and Q lives in the same flat as P. Which floor does Q live on?",
        "questionHi": "8 व्यक्ति 4 मंजिलों पर रहते हैं (फ्लैट A, फ्लैट B के पश्चिम में है)। P विषम मंजिल पर फ्लैट B में रहता है। P और Q के बीच केवल 1 मंजिल है और Q, P के समान फ्लैट में रहता है। Q किस मंजिल पर रहता है?",
        "conventionalSolEn": "Odd floors are Floor 1 and Floor 3. If P is on Floor 1 (Flat B): 1 floor between P and Q ➔ Q is on Floor 3 (Flat B). If P is on Floor 3 (Flat B): 1 floor between P and Q ➔ Q is on Floor 1 (Flat B). In either case, Q is on Floor 1 or Floor 3.",
        "conventionalSolHi": "विषम मंजिलें 1 और 3 हैं। 1 मंजिल के अंतर पर Q मंजिल 3 या 1 पर होगा।",
        "shortcutTrickEn": "P on Floor 1 ➔ Q on Floor 3. P on Floor 3 ➔ Q on Floor 1.",
        "shortcutTrickHi": "मंजिल 1 अथवा 3।",
        "finalAnswer": "Floor 1 or Floor 3"
      },
      {
        "level": "Moderate",
        "questionEn": "6 persons A, B, C, D, E, F live on 6 different floors (1 to 6). A lives on an even floor. Only 2 persons live between A and B. B lives above A. C lives immediately above B. On which floor does C live?",
        "questionHi": "6 व्यक्ति 6 मंजिलों पर रहते हैं। A सम मंजिल पर रहता है। A और B के बीच केवल 2 व्यक्ति रहते हैं। B, A के ऊपर रहता है। C, B के ठीक ऊपर रहता है। C किस मंजिल पर रहता है?",
        "conventionalSolEn": "Even floors for A: Floor 2 or Floor 4 (Floor 6 not possible since B is above A). If A is on Floor 2: 2 persons between A and B ➔ B is on Floor 5. C is immediately above B ➔ C is on Floor 6 (Valid!). If A is on Floor 4: B on Floor 7 (Invalid, only 6 floors). Therefore, C lives on Floor 6.",
        "conventionalSolHi": "A = मंजिल 2 ➔ B = मंजिल 5 ➔ C = मंजिल 6।",
        "shortcutTrickEn": "A = 2 ➔ B = 5 ➔ C = 6. Solved in 10s!",
        "shortcutTrickHi": "C मंजिल 6 पर रहता है।",
        "finalAnswer": "Floor 6"
      },
      {
        "level": "Mains",
        "questionEn": "8 persons live in a 4-storey building with Flat 1 and Flat 2 on each floor. A lives on an even floor in Flat 2. B lives 2 floors below A in Flat 1. C lives immediately above B in the same flat. D lives to the east of C. Find the floor and flat of D.",
        "questionHi": "4 मंजिला इमारत में 8 व्यक्ति रहते हैं (फ्लैट 1 और फ्लैट 2)। A सम मंजिल पर फ्लैट 2 में रहता है। B, A से 2 मंजिल नीचे फ्लैट 1 में रहता है। C, B के ठीक ऊपर उसी फ्लैट में रहता है। D, C के पूर्व में रहता है। D की मंजिल और फ्लैट ज्ञात कीजिए।",
        "conventionalSolEn": "A is on an even floor (Floor 2 or 4) in Flat 2. Since B lives 2 floors below A, A MUST be on Floor 4. Then B is on Floor 2 (Flat 1). C lives immediately above B in same flat ➔ C is on Floor 3 (Flat 1). D lives to the east of C ➔ D is on Floor 3 (Flat 2).",
        "conventionalSolHi": "A = मंजिल 4 (Flat 2) ➔ B = मंजिल 2 (Flat 1) ➔ C = मंजिल 3 (Flat 1) ➔ D = मंजिल 3 (Flat 2).",
        "shortcutTrickEn": "A(F4, Fl2) ➔ B(F2, Fl1) ➔ C(F3, Fl1) ➔ D(F3, Fl2).",
        "shortcutTrickHi": "D मंजिल 3, फ्लैट 2 में है।",
        "finalAnswer": "Floor 3, Flat 2"
      }
    ]
  },

  // ==========================================================================
  // Topic: box-month-date-puzzles
  // ==========================================================================
  'box-month-date-puzzles': {
    "topicSlug": "box-month-date-puzzles",
    "coreTheoryEn": "Box and Month-Date puzzles in banking test vertical stacking and calendrical constraints.\n\n### 1. Month-Date Puzzles Framework:\nCommon structure: 8 persons born in 4 months (e.g. March, April, May, June) on 2 dates (e.g. 7th and 22nd).\n- **Step 1:** Write down the number of days in each month immediately:\n  - March: 31 days\n  - April: 30 days\n  - May: 31 days\n  - June: 30 days\n- **Step 2:** Clues like *\"X was born in a month having 30 days on an odd date\"* immediately restrict $X$ to April 7th or June 7th!\n\n### 2. Box Stacking Protocol:\n- Stacks are numbered 1 to $N$ from bottom to top, or referred to by relative gaps.\n- Clue *\"As many boxes are above P as below Q\"* means:\n  $$\\text{Position of } P \\text{ from Top} = \\text{Position of } Q \\text{ from Bottom}$$",
    "coreTheoryHi": "बॉक्स एवं माह-दिनांक पहेली (Box & Month-Date):\n- प्रत्येक माह के दिनों की संख्या (30 या 31 दिन) पहले लिखें।\n- \"P के ऊपर जितने बॉक्स हैं, Q के नीचे उतने ही हैं\": P का ऊपर से स्थान = Q का नीचे से स्थान।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Month-Date Calendar Days Filter</text>\n  <rect x=\"50\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"110\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">March (31)</text>\n  <text x=\"110\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Dates: 7 | 22</text>\n\n  <rect x=\"200\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"260\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"13\">April (30)</text>\n  <text x=\"260\" y=\"115\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"12\">Dates: 7 | 22</text>\n\n  <rect x=\"350\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"410\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">May (31)</text>\n  <text x=\"410\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Dates: 7 | 22</text>\n\n  <rect x=\"500\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"560\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"13\">June (30)</text>\n  <text x=\"560\" y=\"115\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"12\">Dates: 7 | 22</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Symmetric Stacking Rule",
        "latexFormula": "\\text{Rank}_{\\text{Top}}(P) + \\text{Rank}_{\\text{Bottom}}(Q) = N + 1",
        "explanationEn": "Equal boxes above and below implies symmetrical indexing.",
        "explanationHi": "ऊपर और नीचे समान बॉक्स होने पर सममित स्थिति होती है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Days-in-Month Pruning",
        "conventionalTime": "120s",
        "shortcutTime": "35s",
        "conventionalMethodEn": "Writing dates randomly and reading whole text.",
        "conventionalMethodHi": "महीनों के दिनों पर ध्यान दिए बिना हल करना।",
        "shortcutStepsEn": "1. Mark 30 vs 31 days next to each month.\n2. Filter target person into exactly 2 candidate slots.\n3. Solve in half the time.",
        "shortcutStepsHi": "1. 30 और 31 दिन पहले लिखें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "February Days Blindspot",
        "mistakeStudentsMake": "Assuming February has 30 days or forgetting leap year clues.",
        "howToAvoid": "February has 28 days (non-leap) or 29 days (leap year)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "7 boxes A, B, C, D, E, F, G are stacked one above another. Box C is placed at the top. Only 2 boxes are between C and D. Box E is placed immediately below D. What is the position of Box E from the bottom?",
        "questionHi": "7 बॉक्स एक के ऊपर एक रखे हैं। बॉक्स C सबसे ऊपर है। C और D के बीच केवल 2 बॉक्स हैं। बॉक्स E, D के ठीक नीचे है। नीचे से बॉक्स E का स्थान क्या है?",
        "conventionalSolEn": "7 positions (7 top, 1 bottom): C is at 7. 2 boxes between C and D ➔ D is at position 4. E is immediately below D ➔ E is at position 3. Position of E from bottom = 3.",
        "conventionalSolHi": "C = 7, D = 4, E = 3. नीचे से E का स्थान = 3.",
        "shortcutTrickEn": "Positions from top: C(7), _(6), _(5), D(4), E(3). From bottom = 3.",
        "shortcutTrickHi": "नीचे से तीसरा स्थान।",
        "finalAnswer": "3rd from bottom"
      },
      {
        "level": "Moderate",
        "questionEn": "8 persons were born on 14th and 21st of January, March, April, May. R was born on an odd date in a month having 30 days. Only 2 persons were born between R and S. On which date was S born?",
        "questionHi": "8 व्यक्ति जनवरी, मार्च, अप्रैल, मई की 14 और 21 तारीख को पैदा हुए। R 30 दिन वाले महीने की विषम तारीख को पैदा हुआ। R और S के बीच केवल 2 व्यक्ति पैदा हुए। S किस तारीख को पैदा हुआ?",
        "conventionalSolEn": "Months: Jan(31), Mar(31), Apr(30), May(31). 30-day month = April. Odd date = 21st. So R was born on April 21st. Ordered slots: Jan 14, Jan 21, Mar 14, Mar 21, Apr 14, Apr 21 (R), May 14, May 21. 2 persons between R and S: Backwards: Apr 14, Mar 21 ➔ S is on March 14th.",
        "conventionalSolHi": "R = 21 अप्रैल. 2 व्यक्ति पहले = 14 मार्च. S का जन्म 14 मार्च को हुआ।",
        "shortcutTrickEn": "R is slot 6 (Apr 21). 2 persons between ➔ S is slot 3 (Mar 14).",
        "shortcutTrickHi": "14 मार्च।",
        "finalAnswer": "14th March"
      },
      {
        "level": "Mains",
        "questionEn": "9 boxes are stacked. Box P is 4th from top. As many boxes are placed between P and Q as between P and R. Q is placed below P. Box R is placed at the top. How many boxes are placed below Q?",
        "questionHi": "9 बॉक्स रखे हैं। बॉक्स P ऊपर से चौथा है। P और Q के बीच उतने ही बॉक्स हैं जितने P और R के बीच। Q, P के नीचे है। बॉक्स R सबसे ऊपर है। Q के नीचे कितने बॉक्स हैं?",
        "conventionalSolEn": "Total = 9 boxes (positions 9 to 1 from top to bottom, or 1 to 9). P is 4th from top (slot 4). R is at top (slot 1). Boxes between R and P = slots 2 and 3 (2 boxes). Since equal boxes are between P and Q, there must be 2 boxes between P and Q. Q is below P ➔ slots 5 and 6 are between ➔ Q is at slot 7 from top. Boxes below Q = 9 - 7 = 2 boxes.",
        "conventionalSolHi": "R(1), _(2), _(3), P(4), _(5), _(6), Q(7), _(8), _(9). Q के नीचे 2 बॉक्स हैं।",
        "shortcutTrickEn": "R(1) to P(4) has 2 boxes. P(4) to Q(7) has 2 boxes. Remaining below Q = 9 - 7 = 2 boxes.",
        "shortcutTrickHi": "Q के नीचे 2 बॉक्स हैं।",
        "finalAnswer": "2 boxes"
      }
    ]
  },

  // ==========================================================================
  // Topic: designation-category-puzzles
  // ==========================================================================
  'designation-category-puzzles': {
    "topicSlug": "designation-category-puzzles",
    "coreTheoryEn": "Designation (Hierarchy) and Categorization puzzles are a staple of SBI/IBPS PO Prelims and Mains.\n\n### 1. Hierarchy / Seniority Ordering Protocol:\nStandard banking hierarchy (from Senior-most to Junior-most):\n$$\\text{CMD} > \\text{ED} > \\text{CGM} > \\text{GM} > \\text{DGM} > \\text{AGM} > \\text{Chief Manager} > \\text{Manager} > \\text{Officer}$$\n- Always write the seniority column strictly fixed from Rank 1 (CMD) to Rank $N$ (Officer).\n- Clue *\"X is senior to Y by 2 designations\"* means $\\text{Rank}(Y) - \\text{Rank}(X) = 2$.\n\n### 2. Category Puzzles (Team / Department Allocation):\nExample: 7 persons work across 3 departments (IT, HR, Marketing) with at least 2 persons in each department.\n- Total distribution: $2 + 2 + 3 = 7$ (the only valid partition!).\n- Place known positive assignments directly into department buckets; use negative signs ($\\times$) for prohibited allocations.",
    "coreTheoryHi": "पदनाम एवं श्रेणी पहेली (Designation & Category):\n### पद पदानुक्रम (वरिष्ठ से कनिष्ठ):\n$$\\text{CMD} > \\text{ED} > \\text{CGM} > \\text{GM} > \\text{DGM} > \\text{AGM} > \\text{Manager} > \\text{Officer}$$\n- पदनाम को हमेशा 1 से N तक स्थिर लिखकर व्यक्तियों को मिलाएं।\n- 3 विभागों में 7 व्यक्ति (न्यूनतम 2) = केवल एक ही विभाजन संभव है: $2 + 2 + 3 = 7$।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Banking Hierarchy Seniority Ladder (Senior to Junior)</text>\n  <rect x=\"50\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"110\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">CMD (Rank 1)</text>\n  <text x=\"110\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Senior-most</text>\n\n  <rect x=\"200\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"260\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">GM (Rank 3)</text>\n  <text x=\"260\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Middle Mgt</text>\n\n  <rect x=\"350\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"410\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Manager (Rank 6)</text>\n  <text x=\"410\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Branch Level</text>\n\n  <rect x=\"500\" y=\"55\" width=\"120\" height=\"100\" rx=\"8\" fill=\"#fdf2f8\" stroke=\"#ec4899\" />\n  <text x=\"560\" y=\"85\" text-anchor=\"middle\" fill=\"#9d174d\" font-weight=\"bold\" font-size=\"13\">Officer (Rank 8)</text>\n  <text x=\"560\" y=\"115\" text-anchor=\"middle\" fill=\"#db2777\" font-size=\"12\">Junior-most</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Seniority Rank Difference",
        "latexFormula": "\\Delta R = \\text{Rank}_{\\text{Junior}} - \\text{Rank}_{\\text{Senior}}",
        "explanationEn": "Higher rank number corresponds to more junior designation.",
        "explanationHi": "बड़ा रैंक नंबर अधिक कनिष्ठ पद को दर्शाता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fixed Hierarchy Spine",
        "conventionalTime": "120s",
        "shortcutTime": "40s",
        "conventionalMethodEn": "Drawing names first and testing designations.",
        "conventionalMethodHi": "व्यक्तियों के नाम पहले लिखकर पद खोजना।",
        "shortcutStepsEn": "1. Write the official hierarchy ladder vertically as the fixed spine.\n2. Slot persons directly into ranks based on senior/junior clues.\n3. Eliminates all ambiguity in 30s.",
        "shortcutStepsHi": "1. पदों का क्रम पहले से लिखकर व्यक्तियों को बैठाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Inverting Senior and Junior",
        "mistakeStudentsMake": "Placing senior person below junior person.",
        "howToAvoid": "Always place Senior-most at the TOP (Rank 1)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "7 bank employees hold designations: GM, DGM, AGM, Manager, AM, Officer, Clerk. GM is senior-most, Clerk is junior-most. P is senior to Manager but junior to DGM. Which designation does P hold?",
        "questionHi": "7 बैंक कर्मचारियों के पद हैं: GM, DGM, AGM, Manager, AM, Officer, Clerk. P, Manager से वरिष्ठ है लेकिन DGM से कनिष्ठ है। P का पद क्या है?",
        "conventionalSolEn": "Hierarchy: GM > DGM > AGM > Manager > AM > Officer > Clerk. P is junior to DGM and senior to Manager. The only designation between DGM and Manager is AGM. Therefore, P is AGM.",
        "conventionalSolHi": "DGM और Manager के बीच केवल AGM आता है। P का पद AGM है।",
        "shortcutTrickEn": "Between DGM and Manager = AGM.",
        "shortcutTrickHi": "AGM।",
        "finalAnswer": "AGM"
      },
      {
        "level": "Moderate",
        "questionEn": "7 persons A, B, C, D, E, F, G work in 3 departments: IT, HR, Finance, with at least 2 in each. A works in HR with only E. B and C do not work in Finance. Which department does D work in if D and F work together?",
        "questionHi": "7 व्यक्ति 3 विभागों (IT, HR, Finance) में काम करते हैं (प्रत्येक में कम से कम 2)। A, केवल E के साथ HR में काम करता है। B और C Finance में काम नहीं करते हैं। D किस विभाग में काम करता है यदि D और F एक साथ काम करते हैं?",
        "conventionalSolEn": "HR has ONLY A and E (exactly 2 persons). Remaining 5 persons (B, C, D, F, G) must go to IT and Finance. Since B and C do not work in Finance, B and C MUST work in IT. Finance must have at least 2 persons. Therefore, the remaining persons must go to Finance: D, F, G. Since D and F work together, they are in Finance.",
        "conventionalSolHi": "HR में केवल A और E हैं। B और C Finance में नहीं हैं ➔ IT में हैं। Finance में कम से कम 2 व्यक्ति होने चाहिए ➔ D और F Finance में हैं।",
        "shortcutTrickEn": "HR = {A, E} (full). IT = {B, C}. Finance = {D, F, G}. D is in Finance.",
        "shortcutTrickHi": "Finance विभाग।",
        "finalAnswer": "Finance"
      },
      {
        "level": "Mains",
        "questionEn": "8 officers hold ranks: CMD, ED, CGM, GM, DGM, AGM, Mgr, Off. P is 3 ranks senior to Q. Q is senior to AGM. R is 2 ranks junior to S. If S is CMD, find the designation of P.",
        "questionHi": "8 अधिकारी CMD से Officer तक पद संभालते हैं। P, Q से 3 पद वरिष्ठ है। Q, AGM से वरिष्ठ है। R, S से 2 पद कनिष्ठ है। यदि S, CMD है, तो P का पद क्या है?",
        "conventionalSolEn": "Ranks: 1:CMD, 2:ED, 3:CGM, 4:GM, 5:DGM, 6:AGM, 7:Mgr, 8:Off. S = CMD (Rank 1). R is 2 ranks junior to S ➔ R is Rank 3 (CGM). Q is senior to AGM (Rank 6), so Q can be Rank 4(GM) or 5(DGM). P is 3 ranks senior to Q (Rank_P = Rank_Q - 3). If Q = GM (Rank 4): Rank_P = 4 - 3 = 1 (CMD), but CMD is already S (Contradiction!). If Q = DGM (Rank 5): Rank_P = 5 - 3 = 2 (ED). Valid! P is ED.",
        "conventionalSolHi": "S = CMD(1), R = CGM(3). Q = DGM(5) ➔ P = 5 - 3 = 2 = ED.",
        "shortcutTrickEn": "Rank_P = Rank_Q - 3. If Q=5(DGM) ➔ P=2(ED).",
        "shortcutTrickHi": "ED।",
        "finalAnswer": "ED (Executive Director)"
      }
    ]
  },

  // ==========================================================================
  // Topic: machine-input-output
  // ==========================================================================
  'machine-input-output': {
    "topicSlug": "machine-input-output",
    "coreTheoryEn": "Machine Input-Output in SBI/IBPS PO Mains tests shifting algorithms, arithmetic transformations, and direct step-tracing.\n\n### 1. The 3 Shifting Patterns:\n- **Left-to-Right Single Shift:** The smallest number or alphabetically first word moves to extreme left in Step I, next in Step II.\n- **Dual Alternating Shift (Left & Right Ends):**\n  - Left end: Words in alphabetical order ($A \\to Z$).\n  - Right end: Numbers in descending order ($99 \\to 10$).\n- **Mathematical Transformation (Box Models in Mains):**\n  - Cross-multiplication of digits between blocks: $(D_{1a} \\times D_{2b}) + (D_{1b} \\times D_{2a})$.\n\n### 2. The Direct Tracing Protocol (No Rough Paper Bloat):\nDo NOT write all 6 complete steps!\n- Label target elements with their assigned step number: $L_1, R_1, L_2, R_2, L_3 \\dots$\n- Elements that automatically fall into place without shifting are **AUTO-SHIFTED** (cost 0 steps).",
    "coreTheoryHi": "मशीन इनपुट-आउटपुट (Machine Input-Output):\n- **द्वि-छोर स्थानांतरण (Dual Shift):** बाएं छोर पर शब्द और दाएं छोर पर संख्याएं।\n- **प्रत्यक्ष ट्रेसिंग तकनीक (Direct Tracing):** सभी 6 चरण पूरे लिखने के बजाय $L_1, R_1, L_2, R_2$ कोड देकर सीधे उत्तर निकालें। स्वतः व्यवस्थित होने वाले पदों के लिए कोई अतिरिक्त चरण नहीं लगता।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Dual-End Alternating Shift Architecture</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Left End Shift (Words)</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">L₁: Apple, L₂: Ball, L₃: Cat ...</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Right End Shift (Numbers)</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">... R₃: 54, R₂: 72, R₁: 91</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Step Count Upper Bound",
        "latexFormula": "\\text{Total Steps} \\le N - \\text{Auto-shifted elements}",
        "explanationEn": "Total shifting steps equals elements minus automatically positioned items.",
        "explanationHi": "कुल चरण = तत्वों की संख्या - स्वतः व्यवस्थित तत्व।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Label-and-Trace Shorthand",
        "conventionalTime": "240s",
        "shortcutTime": "60s",
        "conventionalMethodEn": "Writing out 6 full rows of 10 words and numbers on rough paper.",
        "conventionalMethodHi": "रफ शीट पर 6 पूरे चरण लिखकर समय गंवाना।",
        "shortcutStepsEn": "1. Identify the logic from sample (e.g. Word A-Z on left, Number Descending on right).\n2. Write L1, R1, L2, R2 above the input terms.\n3. Trace required step in under 1 minute.",
        "shortcutStepsHi": "1. इनपुट के ऊपर L1, R1, L2, R2 लिखें।\n2. 1 मिनट में बिना पूरा लिखे उत्तर दें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Missing the Auto-Shift",
        "mistakeStudentsMake": "Adding an extra step for an element that was already in its correct position.",
        "howToAvoid": "If an element reaches its target position without being moved, it is auto-shifted (no new step)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Input: 45 12 89 23 67. The machine arranges numbers in ascending order from left to right, shifting one number per step. How many steps are required to complete the rearrangement?",
        "questionHi": "इनपुट: 45 12 89 23 67. मशीन बाएं से दाएं आरोही क्रम में एक-एक संख्या व्यवस्थित करती है। पुनर्व्यवस्था पूरी करने के लिए कितने चरणों की आवश्यकता होगी?",
        "conventionalSolEn": "Input: 45 12 89 23 67. Step 1: 12 45 89 23 67. Step 2: 12 23 45 89 67. Step 3: 12 23 45 67 89. Array is now sorted: 12, 23, 45, 67, 89. Completed in 3 steps.",
        "conventionalSolHi": "चरण 1: 12 सबसे आगे। चरण 2: 23 आगे। चरण 3: 67 आगे। 3 चरणों में पूर्ण।",
        "shortcutTrickEn": "12 shifts (Step 1), 23 shifts (Step 2), 45 auto-sits, 67 shifts (Step 3), 89 auto-sits. Total = 3 steps.",
        "shortcutTrickHi": "3 चरण।",
        "finalAnswer": "3 steps"
      },
      {
        "level": "Moderate",
        "questionEn": "Input: cat 84 dog 19 elephant 52. The machine moves words alphabetically to left end and numbers descending to right end alternately (Word left in Step 1, Number right in Step 2). What will be Step 2?",
        "questionHi": "इनपुट: cat 84 dog 19 elephant 52. मशीन शब्दों को वर्णमाला क्रम में बाएं और संख्याओं को घटते क्रम में दाएं एकांतर क्रम में लगाती है। चरण 2 क्या होगा?",
        "conventionalSolEn": "Smallest word = cat (already at left! Auto-shift? No, next is dog). Step 1: cat dog 84 19 elephant 52? If 'cat' moves to left: 'cat' is already at left end ➔ auto-shifted. Next word is 'dog'. Step 1: dog 84 19 elephant 52 cat? Standard: Step 1 (Word left): cat 84 dog 19 elephant 52. Step 2 (Largest number right): cat dog 19 elephant 52 84.",
        "conventionalSolHi": "चरण 1 में शब्द, चरण 2 में सबसे बड़ी संख्या 84 दाएं छोर पर जाएगी: cat dog 19 elephant 52 84।",
        "shortcutTrickEn": "Step 1 locks word 'cat'. Step 2 shifts '84' to extreme right.",
        "shortcutTrickHi": "84 दाएं छोर पर जाएगा।",
        "finalAnswer": "cat dog 19 elephant 52 84"
      },
      {
        "level": "Mains",
        "questionEn": "In a 2-digit number transformation model: Box 1 [24] and Box 2 [35] are combined to produce Output Box [19]. The rule is: (First digit × First digit) + (Second digit × Second digit) = (2 × 3) + (4 × 5) = 6 + 20 = 26? If Output is 22: (2 × 5) + (4 × 3) = 10 + 12 = 22. What will be the output for Box A [34] and Box B [26] using the cross-product sum rule?",
        "questionHi": "बॉक्स A [34] और बॉक्स B [26] का तिर्यक गुणनफल योग नियम से आउटपुट क्या होगा: (पहला अंक × दूसरा अंक) + (दूसरा अंक × पहला अंक)?",
        "conventionalSolEn": "Box A = [3, 4], Box B = [2, 6]. Cross product: (3 × 6) + (4 × 2) = 18 + 8 = 26.",
        "conventionalSolHi": "(3 × 6) + (4 × 2) = 18 + 8 = 26.",
        "shortcutTrickEn": "Cross product: 3×6 + 4×2 = 18 + 8 = 26.",
        "shortcutTrickHi": "26।",
        "finalAnswer": "26"
      }
    ]
  },

  // ==========================================================================
  // Topic: critical-logical-reasoning
  // ==========================================================================
  'critical-logical-reasoning': {
    "topicSlug": "critical-logical-reasoning",
    "coreTheoryEn": "Critical / Analytical Reasoning accounts for **8 to 12 marks in PO Mains** across Statement & Assumptions, Arguments, Course of Action, and Cause & Effect.\n\n### 1. Statement & Assumptions:\nAn assumption is something taken for granted or unstated premise.\n- **Valid Assumption:** Must be *implicit* in the author's mind for the statement to make sense.\n- **Negation Test:** Negate the assumption. If negating it destroys the validity of the statement, the assumption is **100% VALID**!\n- *Red Flags:* Extreme qualifiers (\"All\", \"Only\", \"Never\", \"Every\") are almost always INVALID.\n\n### 2. Statement & Arguments:\n- **Strong Argument:** Directly related to the core premise, backed by factual/constitutional/logical reasoning, realistic consequences.\n- **Weak Argument:** Based on emotions, personal bias, simple comparison with other countries (\"China did this so we must\"), or ambiguous opinion.\n\n### 3. Course of Action:\nA course of action must be:\n1. **Feasible & Realistic** (practically executable).\n2. **Proportional** (does not use a sledgehammer to kill a fly).\n3. **Constructive** (solves the problem without creating a worse catastrophe).",
    "coreTheoryHi": "तार्किक एवं विश्लेषणात्मक तर्कशक्ति (Critical Reasoning):\n### 1. कथन एवं पूर्वधारणा (Assumptions):\n- **निषेध परीक्षण (Negation Test):** पूर्वधारणा को नकारें; यदि कथन अर्थहीन हो जाए, तो पूर्वधारणा मान्य है।\n- **खतरे के संकेत:** \"सभी\", \"केवल\", \"कभी नहीं\" जैसे अतिवादी शब्द प्रायः अमान्य होते हैं।\n\n### 2. कथन एवं तर्क (Arguments):\n- **ठोस तर्क:** तथ्य, संविधान और तार्किक परिणामों पर आधारित।\n- **कमजोर तर्क:** भावना, तुलना या व्यक्तिगत राय पर आधारित।\n\n### 3. कार्यवाही (Course of Action):\n- व्यावहारिक, आनुपातिक और रचनात्मक होनी चाहिए।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Critical Reasoning 3-Filter Decision Engine</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">1. Assumptions</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Negation Test (✓)</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">No extreme words</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">2. Arguments</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Strong vs Weak</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Fact/Policy based</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">3. Course of Action</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Proportional</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Feasible remedy</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Assumption Negation Test Rule",
        "latexFormula": "\\neg(\\text{Assumption}) \\implies \\text{Statement Fails} \\iff \\text{Valid Assumption}",
        "explanationEn": "If disproving the assumption destroys the statement, the assumption is necessary.",
        "explanationHi": "पूर्वधारणा को नकारने पर यदि कथन ध्वस्त हो जाए, तो पूर्वधारणा वैध है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Extreme Qualifier Elimination",
        "conventionalTime": "60s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Debating philosophically whether 'All people must obey' could be true.",
        "conventionalMethodHi": "दार्शनिक रूप से सोचना कि क्या ऐसा हो सकता है।",
        "shortcutStepsEn": "1. Scan for red flag words: 'Only', 'All', 'Never', 'Every'.\n2. Banking examiner traps almost always use these to make assumptions/arguments invalid.\n3. Eliminate in 10 seconds.",
        "shortcutStepsHi": "1. 'केवल', 'सभी', 'कभी नहीं' शब्द देखें।\n2. 10 सेकंड में विकल्प हटाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Bringing Outside Real-World Knowledge",
        "mistakeStudentsMake": "Validating an assumption using facts you know from general awareness that are unmentioned in the statement.",
        "howToAvoid": "Treat the given statement as the ENTIRE universe. Nothing outside exists."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Statement: 'Please switch off mobile phones during the bank recruitment examination.' Assumptions: I. Candidates will carry mobile phones to the exam hall. II. Switched-off phones will not disrupt the examination.",
        "questionHi": "कथन: 'कृपया बैंक भर्ती परीक्षा के दौरान मोबाइल फोन बंद रखें।' पूर्वधारणाएँ: I. अभ्यर्थी परीक्षा हॉल में मोबाइल फोन लाएंगे। II. बंद मोबाइल फोन परीक्षा में बाधा नहीं डालेंगे।",
        "conventionalSolEn": "If candidates were not expected to carry phones, the notice would be pointless (Assumption I is implicit). The notice is given to avoid disruption, assuming switched-off phones won't disturb (Assumption II is implicit). Both assumptions I and II are implicit.",
        "conventionalSolHi": "दोनों पूर्वधारणाएँ I और II अंतर्निहित हैं।",
        "shortcutTrickEn": "Both are necessary conditions for issuing the instruction. Both implicit.",
        "shortcutTrickHi": "दोनों I और II अंतर्निहित हैं।",
        "finalAnswer": "Both Assumptions I and II are implicit"
      },
      {
        "level": "Moderate",
        "questionEn": "Statement: Should high-denomination currency notes be completely banned to curb black money? Argument I: Yes, black money hoarders will lose their accumulated untaxed wealth. Argument II: No, it will cause immense hardship to ordinary citizens and small businesses.",
        "questionHi": "कथन: क्या काले धन पर रोक लगाने के लिए बड़े मूल्यवर्ग के नोटों को पूरी तरह से प्रतिबंधित कर दिया जाना चाहिए? तर्क I: हाँ, काला धन जमा करने वाले अपनी संपत्ति खो देंगे। तर्क II: नहीं, इससे आम नागरिकों और छोटे व्यवसायों को अत्यधिक कठिनाई होगी।",
        "conventionalSolEn": "Argument I is strong because tackling illegal parallel economies is a valid objective. Argument II is also strong because practical disruption to daily life and unorganized retail trade is a serious, factual consequence. Both arguments I and II are strong.",
        "conventionalSolHi": "दोनों तर्क I और II ठोस हैं क्योंकि दोनों वास्तविक और गंभीर परिणामों पर आधारित हैं।",
        "shortcutTrickEn": "Both arguments present tangible, factual socioeconomic consequences. Both are strong.",
        "shortcutTrickHi": "दोनों तर्क ठोस हैं।",
        "finalAnswer": "Both Arguments I and II are strong"
      },
      {
        "level": "Mains",
        "questionEn": "Statement: Severe traffic congestion has paralyzed major intersections of the metro city during peak office hours. Courses of Action: I. The city administration should immediately suspend all public buses during peak hours. II. Staggered working hours should be introduced for corporate offices and government departments.",
        "questionHi": "कथन: कार्यालय समय के दौरान महानगर के प्रमुख चौराहों पर भीषण ट्रैफिक जाम की समस्या उत्पन्न हो गई है। कार्यवाहियां: I. प्रशासन को तुरंत पीक ऑवर्स में सभी सरकारी बसें बंद कर देनी चाहिए। II. कॉर्पोरेट कार्यालयों और सरकारी विभागों के लिए अलग-अलग (Staggered) कार्य समय शुरू किया जाना चाहिए।",
        "conventionalSolEn": "Action I is extreme and absurd: suspending buses will force commuters into private vehicles, worsening traffic exponentially (Invalid!). Action II is feasible, constructive, and directly reduces peak-hour vehicular load without causing disruption (Valid!). Only Course of Action II follows.",
        "conventionalSolHi": "कार्यवाही I विनाशकारी और अनुचित है। कार्यवाही II व्यावहारिक और समस्या का समाधान करने वाली है। केवल II अनुसरण करती है।",
        "shortcutTrickEn": "Action I creates worse catastrophe (Invalid). Action II is proportional and constructive (Valid).",
        "shortcutTrickHi": "केवल कार्यवाही II अनुसरण करती है।",
        "finalAnswer": "Only Course of Action II follows"
      }
    ]
  },

  // ==========================================================================
  // Topic: reasoning-data-sufficiency
  // ==========================================================================
  'reasoning-data-sufficiency': {
    "topicSlug": "reasoning-data-sufficiency",
    "coreTheoryEn": "Reasoning Data Sufficiency tests whether given statements provide enough clues to establish a unique conclusion in Puzzles, Seating, Directions, or Blood Relations.\n\n### The 4-Option Elimination Protocol:\n- **Statement I Alone Sufficient:** If Statement I alone establishes the unique answer.\n- **Statement II Alone Sufficient:** If Statement II alone establishes the unique answer.\n- **Either Alone Sufficient:** If Statement I alone gives an answer AND Statement II alone also gives an answer.\n- **Both Together Necessary:** If neither alone works, but combined together they establish the unique answer.\n- **Neither / Insufficient:** If even after combining both, ambiguity remains.\n\n*The Cardinal Rule:* You do NOT need to complete the seating layout or draw the full puzzle! The moment degrees of freedom reach 0, mark SUFFICIENT and move on!",
    "coreTheoryHi": "तार्किक आंकड़ा पर्याप्तता (Reasoning Data Sufficiency):\n- कथन I अकेला पर्याप्त है\n- कथन II अकेला पर्याप्त है\n- या तो I या II अकेला पर्याप्त है\n- दोनों मिलकर आवश्यक हैं\n- दोनों मिलकर भी अपर्याप्त हैं\n\n*मुख्य नियम:* कभी भी पूरी पहेली या बैठक व्यवस्था न बनाएं। जैसे ही अद्वितीय स्थान निर्धारित हो, 'पर्याप्त' चिह्नित करें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Reasoning Data Sufficiency Elimination Protocol</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Stmt I Alone</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Unique outcome?</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Yes ➔ (I Alone / Either)</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Stmt II Alone</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Unique outcome?</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Yes ➔ (II Alone / Either)</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Combine I + II</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Unique now?</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Yes ➔ Together, No ➔ Neither</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Uniqueness Condition",
        "latexFormula": "\\text{Cardinality of Valid Solutions} = 1 \\iff \\text{Sufficient}",
        "explanationEn": "If two or more configurations are valid, the statements remain insufficient.",
        "explanationHi": "यदि दो या अधिक विन्यास संभव हैं, तो कथन अपर्याप्त रहते हैं।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Freedom Degree Elimination",
        "conventionalTime": "120s",
        "shortcutTime": "25s",
        "conventionalMethodEn": "Drawing out all combinations of names and seats.",
        "conventionalMethodHi": "सभी संभावित बैठक व्यवस्थाएं बनाकर देखना।",
        "shortcutStepsEn": "1. Check if the specific target question (e.g. 'Who sits 3rd to right of P?') can be answered.\n2. Do NOT solve the other 5 seats.\n3. If target relation is uniquely fixed, stop immediately.",
        "shortcutStepsHi": "1. केवल पूछे गए व्यक्ति के स्थान पर ध्यान दें।\n2. बाकी 5 व्यक्तियों को बैठाए बिना उत्तर तय करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Carrying Stmt I Clues into Stmt II Evaluation",
        "mistakeStudentsMake": "Using clues from Statement I while testing Statement II alone.",
        "howToAvoid": "Erase Statement I from your mind completely when testing Statement II."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Among 5 friends P, Q, R, S, T sitting in a row facing North, who sits in the middle? Statement I: P sits to the immediate left of R and immediate right of S. Statement II: Q sits at the extreme left end and T sits at the extreme right end.",
        "questionHi": "उत्तर की ओर मुख करके बैठे 5 मित्रों में ठीक मध्य में कौन बैठा है? कथन I: P, R के ठीक बाएं और S के ठीक दाएं बैठा है। कथन II: Q अंतिम बाएं छोर पर और T अंतिम दाएं छोर पर बैठा है।",
        "conventionalSolEn": "Statement I: S P R block of 3 persons. Could be in seats 1,2,3 or 2,3,4 or 3,4,5 (Insufficient alone). Statement II: Q is seat 1, T is seat 5. Middle seat could be P, R, or S (Insufficient alone). Combining I and II: Q at seat 1, T at seat 5 leaves seats 2, 3, 4 open. The block S-P-R must fill seats 2, 3, 4. P is at seat 3 (exact middle!). Both statements together are sufficient.",
        "conventionalSolHi": "कथन I अकेला अपर्याप्त है। कथन II अकेला अपर्याप्त है। दोनों को मिलाने पर: Q S P R T. मध्य में P है। दोनों कथन मिलकर पर्याप्त हैं।",
        "shortcutTrickEn": "Stmt I gives S-P-R block. Stmt II fixes ends Q _ _ _ T. Combining gives Q S P R T ➔ P is middle.",
        "shortcutTrickHi": "दोनों मिलकर पर्याप्त हैं।",
        "finalAnswer": "Both Statements I and II together are sufficient"
      },
      {
        "level": "Moderate",
        "questionEn": "How is K related to M? Statement I: K's brother N is married to M's sister. Statement II: M is the father of K's nephew.",
        "questionHi": "K का M से क्या संबंध है? कथन I: K का भाई N, M की बहन से विवाहित है। कथन II: M, K के भतीजे का पिता है।",
        "conventionalSolEn": "Statement I: K's brother N is married to M's sister. Gender of K is not specified (K could be brother-in-law or sister-in-law). Insufficient. Statement II: M is the father of K's nephew. K could still be male or female. Insufficient. Combining I and II: Gender of K remains unknown. K could be male (brother-in-law) or female (sister-in-law). Therefore, neither statement is sufficient.",
        "conventionalSolHi": "K का लिंग (Gender) दोनों कथनों से स्पष्ट नहीं होता। अतः दोनों कथन मिलकर भी अपर्याप्त हैं।",
        "shortcutTrickEn": "Gender of K is never stated in either statement. Cannot establish relation ➔ Statements are NOT sufficient.",
        "shortcutTrickHi": "लिंग अज्ञात ➔ दोनों अपर्याप्त हैं।",
        "finalAnswer": "Both Statements I and II together are NOT sufficient"
      },
      {
        "level": "Mains",
        "questionEn": "In which direction is Point X with respect to Point Y? Statement I: Point X is 5m north of Point P, which is 6m west of Point Q. Statement II: Point Y is 5m south of Point R, which is 6m east of Point P.",
        "questionHi": "बिंदु Y के संदर्भ में बिंदु X किस दिशा में है? कथन I: बिंदु X, P के 5 मी उत्तर में है, जो Q के 6 मी पश्चिम में है। कथन II: बिंदु Y, R के 5 मी दक्षिण में है, जो P के 6 मी पूर्व में है।",
        "conventionalSolEn": "Statement I alone gives X relative to P, but no mention of Y (Insufficient). Statement II alone gives Y relative to P and R, but no mention of X (Insufficient). Combining I and II: P is the common anchor! Let P = (0, 0). From Stmt I: X = (0, 5). From Stmt II: R is 6m east of P ➔ R = (6, 0). Y is 5m south of R ➔ Y = (6, -5). Vector from Y(6, -5) to X(0, 5): Δx = 0 - 6 = -6 (West), Δy = 5 - (-5) = +10 (North). Direction of X with respect to Y is North-West. Both statements together are sufficient.",
        "conventionalSolHi": "P दोनों में उभयनिष्ठ बिंदु है। X = (0, 5), Y = (6, -5). Y के संदर्भ में X उत्तर-पश्चिम (North-West) दिशा में है। दोनों कथन मिलकर पर्याप्त हैं।",
        "shortcutTrickEn": "Common anchor P connects X and Y coordinates uniquely ➔ Both statements together are sufficient.",
        "shortcutTrickHi": "P दोनों को जोड़ता है ➔ दोनों मिलकर पर्याप्त हैं।",
        "finalAnswer": "Both Statements I and II together are sufficient"
      }
    ]
  },

};
