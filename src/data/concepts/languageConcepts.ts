// src/data/concepts/languageConcepts.ts
// Complete textbook-grade concept guides for English & Hindi Language (9 topics)

import { ConceptGuideData } from '@/types/topicPractice';

export const LANGUAGE_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  // ==========================================================================
  // 1. ERROR SPOTTING
  // ==========================================================================
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
    conceptSvgDiagram: `<svg width="100%" height="auto" viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-full block">
  <rect width="600" height="280" fill="#f8fafc" rx="12" />
  <text x="300" y="32" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="16">Banking Grammar: Subject-Verb Inversion Architecture</text>

  <!-- Rule 1 -->
  <rect x="40" y="60" width="520" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="60" y="88" fill="#1e40af" font-weight="bold" font-size="14">Rule 1: Negative Adverb Opening ➔ Auxiliary BEFORE Subject</text>
  <text x="60" y="112" fill="#0f172a" font-size="13">Hardly / Scarcely + [had / did] + Subject + V3 + ... + WHEN + clause</text>
  <text x="60" y="132" fill="#059669" font-weight="bold" font-size="12">✓ Example: Hardly HAD the manager ARRIVED when the bell rang.</text>

  <!-- Rule 2 -->
  <rect x="40" y="165" width="520" height="90" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2" />
  <text x="60" y="193" fill="#991b1b" font-weight="bold" font-size="14">Rule 2: Correlative Pair Trap (Common TCS iON Error)</text>
  <text x="60" y="217" fill="#b91c1c" font-size="13">❌ Hardly had the bell rung THAN the students left (Wrong pair)</text>
  <text x="60" y="237" fill="#15803d" font-weight="bold" font-size="12">✓ Correct: Hardly ➔ WHEN | No sooner ➔ THAN</text>
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

  // ==========================================================================
  // Topic: phrase-replacement-improvement
  // ==========================================================================
  'phrase-replacement-improvement': {
    "topicSlug": "phrase-replacement-improvement",
    "coreTheoryEn": "Phrase Replacement in SBI & IBPS PO tests idiomatic phrasal verbs, conditional tense harmony, and parallel structure.\n\n### 1. Conditional Clause Tense Harmony:\n| Conditional Type | \"If\" Clause (Condition) | Main Clause (Result) | Example |\n| :--- | :--- | :--- | :--- |\n| **Type 0 (Universal Truth)** | Simple Present | Simple Present | If water reaches $100^\\circ\\text{C}$, it boils. |\n| **Type 1 (Real Future)** | Simple Present ($V_1$) | Future Simple (will/shall $+ V_1$) | If he **studies** hard, he **will clear** the exam. |\n| **Type 2 (Hypothetical)** | Simple Past ($V_2$ / were) | would/could $+ V_1$ | If I **were** the Governor, I **would reduce** rates. |\n| **Type 3 (Past Unreal)** | Past Perfect (had $+ V_3$) | would have $+ V_3$ | If they **had audited** earlier, fraud **would have been prevented**. |\n\n### 2. Phrasal Verb Traps in Banking:\n- **Account for:** Explain the cause of / comprise a proportion.\n- **Call off:** Cancel (vs *Call on*: Visit).\n- **Cope with:** Never say *\"cope up with\"*! The standard English idiom is strictly **\"cope with\"**!\n- **Bring about:** Cause something to happen.",
    "coreTheoryHi": "वाक्यांश प्रतिस्थापन एवं वाक्य सुधार (Phrase Replacement):\n### 1. शर्त सूचक वाक्य (Conditional Clauses):\n- **Type 3 (काल्पनिक भूतकाल):** If + had + $V_3$ $\\dots$ would have + $V_3$\n  *उदाहरण:* If he **had invested** earlier, he **would have earned** profit.\n\n### 2. महत्वपूर्ण Phrasal Verbs:\n- **Cope with:** कभी भी \"cope up with\" न लिखें; सही रूप केवल **\"cope with\"** है।\n- **Call off:** रद्द करना (Cancel)।\n- **Bring about:** घटित कराना।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Conditional Tense Harmony Engine</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">If Clause (Past Perfect)</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">If + had + V₃</text>\n  <text x=\"175\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">e.g. If the bank had verified...</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Main Clause (Result)</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">... would have + V₃</text>\n  <text x=\"485\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">... the loan would have passed.</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Third Conditional Harmony Rule",
        "latexFormula": "\\text{If} + S + \\text{had} + V_3 \\dots S + \\text{would have} + V_3",
        "explanationEn": "Past counterfactual condition must strictly pair with would have + V3 in the result clause.",
        "explanationHi": "भूतकाल की अवास्तविक शर्त में had + V3 के साथ would have + V3 आता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Preposition Collocation Filter",
        "conventionalTime": "45s",
        "shortcutTime": "10s",
        "conventionalMethodEn": "Reading all 5 replacement choices aloud in your head.",
        "conventionalMethodHi": "मन में सभी 5 विकल्पों को बार-बार पढ़कर देखना।",
        "shortcutStepsEn": "1. Look at the trailing preposition after the bold phrase (e.g. 'with', 'to', 'for').\n2. Match verbs that naturally collocate: comply WITH, adhere TO, account FOR.\n3. Eliminate 3 mismatched options in 5 seconds.",
        "shortcutStepsHi": "1. बोल्ड वाक्यांश के बाद आने वाले Preposition को देखें (Comply with, Adhere to)।\n2. 5 सेकंड में 3 विकल्प हटाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "The 'Cope up with' Superfluous 'Up' Trap",
        "mistakeStudentsMake": "Choosing options containing 'cope up with'.",
        "howToAvoid": "'Cope with' is the only correct phrase. 'Up' is grammatically incorrect."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The new branch manager was unable to **cope up with** the mounting pressure of quarterly targets. Replace the bold phrase.",
        "questionHi": "The new branch manager was unable to **cope up with** the mounting pressure of quarterly targets. बोल्ड भाग को सुधारें।",
        "conventionalSolEn": "'Cope up with' is an incorrect Indianism. The standard English idiom is 'cope with'. Correct sentence: '...unable to cope with the mounting pressure...'.",
        "conventionalSolHi": "'Cope up with' गलत है। सही प्रयोग 'cope with' है।",
        "shortcutTrickEn": "Remove superfluous 'up' ➔ 'cope with'.",
        "shortcutTrickHi": "'cope with' सही है।",
        "finalAnswer": "cope with"
      },
      {
        "level": "Moderate",
        "questionEn": "If the audit team **would have inspected** the physical inventory earlier, the discrepancy would not have gone unnoticed. Replace bold phrase.",
        "questionHi": "If the audit team **would have inspected** the physical inventory earlier, the discrepancy would not have gone unnoticed. सुधारें।",
        "conventionalSolEn": "In third conditional sentences, the 'if' clause NEVER takes 'would have'. It must take Past Perfect ('had + V3'). Replace with 'had inspected'.",
        "conventionalSolHi": "If वाले भाग में कभी 'would have' नहीं आता, 'had + V3' आता है। सही रूप: 'had inspected'।",
        "shortcutTrickEn": "Never put 'would have' in the 'if' condition ➔ 'had inspected'.",
        "shortcutTrickHi": "If + had inspected।",
        "finalAnswer": "had inspected"
      },
      {
        "level": "Mains",
        "questionEn": "No sooner the monetary policy committee **announced the repo rate hike when** bond yields surged sharply. Replace bold phrase.",
        "questionHi": "No sooner the monetary policy committee **announced the repo rate hike when** bond yields surged sharply. सुधारें।",
        "conventionalSolEn": "Two errors: 1. 'No sooner' triggers inversion (auxiliary before subject: 'had the MPC announced' or 'did the MPC announce'). 2. Correlative pair for 'No sooner' is 'THAN', not 'when'. Correct replacement: 'had the monetary policy committee announced the repo rate hike than'.",
        "conventionalSolHi": "'No sooner' के बाद Inversion (had + S + V3) आता है और इसका जोड़ा 'than' होता है ('when' नहीं)।",
        "shortcutTrickEn": "No sooner had + S + V3 ... THAN. Instant catch in 5s.",
        "shortcutTrickHi": "No sooner had ... than।",
        "finalAnswer": "had the monetary policy committee announced the repo rate hike than"
      }
    ]
  },

  // ==========================================================================
  // Topic: sentence-connectors-starters
  // ==========================================================================
  'sentence-connectors-starters': {
    "topicSlug": "sentence-connectors-starters",
    "coreTheoryEn": "Sentence Connectors and Starters in SBI/IBPS PO Mains test the ability to fuse two independent statements without altering meaning.\n\n### The 4 Connector Logic Categories:\n1. **Contrast / Concession:** *Although, Even though, Despite, In spite of, However, Nonetheless, While, Whereas*.\n   - Statement 1 and Statement 2 have opposite positive/negative vectors.\n2. **Cause & Consequence:** *Since, Because, As a result, Consequently, Therefore, Owing to, Due to*.\n   - Statement 1 is the reason, Statement 2 is the outcome.\n3. **Condition:** *Provided that, Unless, As long as, In the event of*.\n4. **Addition / Reinforcement:** *Furthermore, Moreover, In addition to, Not only...but also*.\n\n### Starter Validation Protocol:\nWhen testing whether Starter (I, II, or III) can combine statements A and B:\n- The starter must initiate the new combined sentence **without dangling modifiers**.\n- The core factual cause-and-effect relationship must remain **100% PRESERVED**.",
    "coreTheoryHi": "वाक्य संयोजक एवं आरंभक (Sentence Connectors & Starters):\n### 4 प्रमुख संयोजक श्रेणियां:\n1. **विरोधाभास (Contrast):** Although, Despite, In spite of, However (विपरीत विचार)।\n2. **कारण और परिणाम (Cause & Effect):** Because, Since, Therefore, Consequently, Due to।\n3. **शर्त (Condition):** Provided that, Unless।\n4. **अतिरिक्त जानकारी (Addition):** Furthermore, Moreover।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Sentence Connector Polarity Alignment</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Contrast Connectors (+ ➔ -)</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Although, Despite, However</text>\n  <text x=\"175\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Opposite semantic directions</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Causal Connectors (Cause ➔ Effect)</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Because, Since, Consequently</text>\n  <text x=\"485\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Same semantic trajectory</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Despite vs In Spite Of Rule",
        "latexFormula": "\\text{Despite} + \\text{Noun/Gerund} \\quad | \\quad \\text{In spite of} + \\text{Noun/Gerund}",
        "explanationEn": "NEVER use 'Despite of'. It is either 'Despite' alone or 'In spite of'.",
        "explanationHi": "कभी भी 'Despite of' न लिखें; केवल 'Despite' अथवा 'In spite of' सही है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Semantic Polarity Check",
        "conventionalTime": "60s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Writing out 3 full combined sentences on paper.",
        "conventionalMethodHi": "तीनों संयोजकों से पूरे वाक्य बनाकर देखना।",
        "shortcutStepsEn": "1. Check the mood of Statement 1 (e.g. Positive: high profits) and Statement 2 (e.g. Negative: stock fell).\n2. Positive + Negative = MUST use a Contrast connector (Although / Despite).\n3. Eliminate Causal starters (Because / Since) in 5 seconds.",
        "shortcutStepsHi": "1. वाक्य 1 सकारात्मक और वाक्य 2 नकारात्मक है ➔ केवल विरोधाभासी (Although/Despite) संयोजक आएगा।\n2. 5 सेकंड में Because/Since हटाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Reversing Cause and Effect with 'Owing to'",
        "mistakeStudentsMake": "Attaching 'Owing to' to the result rather than the initiating cause.",
        "howToAvoid": "'Owing to / Because of' must precede the CAUSE, never the consequence."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Combine: (I) The central bank raised interest rates. (II) Inflation remained stubbornly high. Which connector fits?",
        "questionHi": "दोनों वाक्यों को जोड़ें: (I) The central bank raised interest rates. (II) Inflation remained stubbornly high.",
        "conventionalSolEn": "Statement I is an action intended to curb inflation; Statement II indicates inflation did not subside (Contrast!). A contrast connector is required: 'Although the central bank raised interest rates, inflation remained stubbornly high.'",
        "conventionalSolHi": "दरें बढ़ाने पर भी मुद्रास्फीति कम नहीं हुई (विरोधाभास)। सही संयोजक 'Although' होगा।",
        "shortcutTrickEn": "Rates raised (Action) + Inflation high (Defied) = CONTRAST ➔ Although.",
        "shortcutTrickHi": "विरोधाभास ➔ Although।",
        "finalAnswer": "Although"
      },
      {
        "level": "Moderate",
        "questionEn": "Statements: (A) The company implemented rigorous cyber-security audits. (B) There was an alarming increase in corporate data breach incidents. Starters: (I) In view of the alarming increase... (II) Despite implementing... Which can start the combined sentence?",
        "questionHi": "Starters: (I) In view of the alarming increase... (II) Despite implementing... कौन सा सही है?",
        "conventionalSolEn": "Cause: Increase in data breaches. Effect: Implemented cyber audits. Starter (I): 'In view of the alarming increase in corporate data breach incidents, the company implemented rigorous cyber-security audits.' (Valid causal sequence!). Starter (II) says 'Despite implementing audits, there was an increase' which inverts the chronological order (audits were implemented because of breaches). Only Starter (I) correctly captures the intended meaning.",
        "conventionalSolHi": "डेटा चोरी बढ़ने के कारण ऑडिट लागू किए गए। स्टार्टर (I) कारण-परिणाम को सही रूप से व्यक्त करता है। केवल (I) सही है।",
        "shortcutTrickEn": "Breaches came first (cause) ➔ audits followed. 'In view of...' preserves chronological cause.",
        "shortcutTrickHi": "केवल स्टार्टर (I) सही है।",
        "finalAnswer": "Only (I)"
      },
      {
        "level": "Mains",
        "questionEn": "Statements: (1) The government extended tax incentives to electric vehicle manufacturers. (2) Several global automotive giants decided to establish manufacturing plants in India. Starters: (I) Encouraged by the tax incentives... (II) Following the government's decision to extend... (III) While several global automotive giants...",
        "questionHi": "कौन-कौन से स्टार्टर्स दोनों वाक्यों को बिना अर्थ बदले जोड़ सकते हैं?",
        "conventionalSolEn": "Tax incentives caused companies to set up plants (Causal sequence). Starter (I): 'Encouraged by the tax incentives extended by the government, several global automotive giants decided to establish manufacturing plants in India.' (Valid!). Starter (II): 'Following the government's decision to extend tax incentives, several global automotive giants decided...' (Valid!). Starter (III) uses 'While' which implies contrast or concurrence, altering the causal relation (Invalid). Both (I) and (II) are valid starters.",
        "conventionalSolHi": "कर छूट के कारण कंपनियों ने संयंत्र लगाने का निर्णय लिया। स्टार्टर (I) और (II) दोनों सही कारण-परिणाम को जोड़ते हैं। (III) 'While' विरोधाभास पैदा करता है जो गलत है। अतः (I) और (II) दोनों सही हैं।",
        "shortcutTrickEn": "(I) Encouraged by... (Valid cause). (II) Following... (Valid sequence). (III) While (Wrong contrast). Answer: Both I and II.",
        "shortcutTrickHi": "दोनों (I) और (II) सही हैं।",
        "finalAnswer": "Both (I) and (II)"
      }
    ]
  },

  // ==========================================================================
  // Topic: cloze-test
  // ==========================================================================
  'cloze-test': {
    "topicSlug": "cloze-test",
    "coreTheoryEn": "Cloze Test in banking prelims (5-7 marks) and mains (8-10 marks) tests contextual reading, tone consistency, and grammatical collocation.\n\n### The 3-Step Cloze Elimination Strategy:\n1. **Passage Skim (Tone & Tense Lock):**\n   Read the entire passage in 45 seconds WITHOUT looking at the options. Determine:\n   - *Tone:* Is the author optimistic, critical, analytical, or cautionary?\n   - *Tense:* Is it narrating past events (Past Tense) or economic policy trends (Present Continuous)?\n2. **Part of Speech (POS) Slotting:**\n   Look at words immediately preceding and succeeding the blank:\n   - *Article + [Blank] + Noun:* The blank MUST be an **Adjective**!\n   - *Has/Have/Had + [Blank]:* The blank MUST be a **Past Participle ($V_3$)**!\n   - *Modal Verb (Can/May/Should) + [Blank]:* The blank MUST be a **Base Verb ($V_1$)**!\n3. **Collocation & Preposition Matching:**\n   A word might mean 'prevent', but if the following preposition is 'from', the correct choice is *deter / prevent*, not *forbid* (which takes 'to').",
    "coreTheoryHi": "क्लोज़ टेस्ट (Cloze Test):\n### 3-चरणीय रणनीति:\n1. **गद्यांश का भाव (Tone):** सकारात्मक, आलोचनात्मक या विश्लेषणात्मक।\n2. **शब्द-भेद (Part of Speech) पहचान:**\n   - Article + [रिक्त स्थान] + Noun $\\implies$ रिक्त स्थान में **विशेषण (Adjective)** आएगा।\n   - Has/Have/Had + [रिक्त स्थान] $\\implies$ क्रिया का तीसरा रूप ($V_3$) आएगा।\n3. **Preposition मिलान:** वाक्य में आगे आने वाले Preposition (from, to, in, with) के अनुसार सही शब्द चुनें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Cloze Test 3-Filter Elimination Funnel</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Filter 1: Tone</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Positive / Negative</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Eliminates 2 options</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Filter 2: Grammar</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">POS: Noun/Adj/Verb</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Eliminates 1-2 options</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Filter 3: Collocation</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Preposition Match</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Locks final answer</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Collocation Pairing Rule",
        "latexFormula": "\\text{Verb} + \\text{Preposition} \\quad (\\text{e.g. Prevent} \\dots \\text{from}, \\text{Comply} \\dots \\text{with})",
        "explanationEn": "The following preposition dictates the correct synonym choice in close vocab options.",
        "explanationHi": "अनुगामी Preposition ही समानार्थी शब्दों में से सही विकल्प तय करता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Preposition-First Scanning",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Reading the dictionary definition of each option word.",
        "conventionalMethodHi": "प्रत्येक विकल्प के शब्दार्थ पर विचार करना।",
        "shortcutStepsEn": "1. Look immediately after the blank.\n2. Notice the word 'from'.\n3. Look at options: prohibit, restrict, abstain, refrain.\n4. Lock 'refrain from' or 'abstain from' instantly based on human vs habit context.",
        "shortcutStepsHi": "1. रिक्त स्थान के ठीक बाद Preposition देखें।\n2. 10 सेकंड में सही शब्द का चयन करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Choosing a Word with the Right Meaning but Wrong Grammar",
        "mistakeStudentsMake": "Inserting a noun into a blank requiring an adjective because the root meaning fits.",
        "howToAvoid": "Always verify that the option matches the Part of Speech demanded by the syntax."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The Reserve Bank of India has consistently advised commercial banks to remain ______ against emerging credit default risks. Options: (A) vigilant, (B) vigil, (C) vigilance, (D) vigilantly.",
        "questionHi": "The Reserve Bank of India has consistently advised commercial banks to remain ______ against emerging credit default risks. सही विकल्प चुनें।",
        "conventionalSolEn": "'Remain' is a linking verb requiring a predicate ADJECTIVE. (B) 'vigil' is noun, (C) 'vigilance' is noun, (D) 'vigilantly' is adverb. Only (A) 'vigilant' is the correct adjective.",
        "conventionalSolHi": "'Remain' के बाद विशेषण (Adjective) आना चाहिए। केवल 'vigilant' विशेषण है।",
        "shortcutTrickEn": "Linking verb 'remain' + Adjective ➔ 'vigilant'.",
        "shortcutTrickHi": "Adjective ➔ vigilant।",
        "finalAnswer": "vigilant"
      },
      {
        "level": "Moderate",
        "questionEn": "The central government introduced strict regulatory oversight to ______ non-banking financial companies from engaging in speculative real estate investments. Options: (A) inhibit, (B) prevent, (C) forbid, (D) curb.",
        "questionHi": "...to ______ non-banking financial companies from engaging in... सही विकल्प चुनें।",
        "conventionalSolEn": "Notice the preposition 'from engaging'. 'Forbid' takes 'to + infinitive' (forbid to engage). 'Curb' is a transitive verb that takes direct object without 'from'. 'Prevent' takes the structure 'prevent someone from doing something'. Thus, (B) 'prevent' is the exact collocation.",
        "conventionalSolHi": "वाक्य में 'from engaging' आया है। 'Prevent someone from doing something' सही बनावट है। 'Forbid' के साथ 'to' आता है। अतः 'prevent' सही उत्तर है।",
        "shortcutTrickEn": "[Blank] + entity + FROM + -ing ➔ PREVENT.",
        "shortcutTrickHi": "Prevent ... from।",
        "finalAnswer": "prevent"
      },
      {
        "level": "Mains",
        "questionEn": "Despite persistent global supply chain disruptions, domestic manufacturing showed remarkable ______, expanding output for the fifth consecutive quarter. Options: (A) complacency, (B) resilience, (C) vulnerability, (D) stagnation.",
        "questionHi": "...showed remarkable ______, expanding output... सही विकल्प चुनें।",
        "conventionalSolEn": "Sentence opener 'Despite persistent disruptions' signals contrast with adversity. The second half notes positive expansion ('expanding output'). The blank requires a positive noun denoting strength in the face of adversity. 'Complacency' (negative), 'vulnerability' (negative), 'stagnation' (negative). Only (B) 'resilience' matches both positive tone and meaning.",
        "conventionalSolHi": "'Despite disruptions' (कठिनाई के बावजूद) और 'expanding output' (उत्पादन बढ़ा) दर्शाते हैं कि सकारात्मक शब्द आएगा। केवल 'resilience' (प्रतिरोधक क्षमता/सहनशक्ति) सही बैठता है।",
        "shortcutTrickEn": "Despite adversity + expansion = Resilience (ability to bounce back).",
        "shortcutTrickHi": "Resilience।",
        "finalAnswer": "resilience"
      }
    ]
  },

  // ==========================================================================
  // Topic: fillers
  // ==========================================================================
  'fillers': {
    "topicSlug": "fillers",
    "coreTheoryEn": "Single and Double Fillers test sentence trajectory, semantic congruence, and precise vocabulary.\n\n### The Dual Congruence Axiom for Double Fillers:\nIn a 2-blank question:\n$$\\text{Option MUST satisfy BOTH Blank 1 AND Blank 2 simultaneously!}$$\n- Never test words in isolation. 90% of wrong options have 1 word that fits brilliantly, but the other word violates grammar or tone!\n- If Blank 1 is followed by 'and', both blanks must share the **identical semantic polarity** (both positive or both negative).",
    "coreTheoryHi": "रिक्त स्थान पूर्ति (Single & Double Fillers):\n- **दोहरा सामंजस्य नियम:** विकल्प के दोनों शब्दों का एक साथ दोनों रिक्त स्थानों में सही बैठना अनिवार्य है।\n- यदि दोनों रिक्त स्थानों के बीच 'and' है, तो दोनों शब्द समान भाव (दोनों सकारात्मक या दोनों नकारात्मक) के होने चाहिए।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Double Filler Dual Congruence Filter</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Word 1 Check</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Fits Blank 1 Grammar?</text>\n  <text x=\"175\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Yes ➔ Proceed to Word 2</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Word 2 Check</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Fits Blank 2 Context?</text>\n  <text x=\"485\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">MUST be 100% congruent</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Dual Congruence Rule",
        "latexFormula": "\\text{Valid Option} = (W_1 \\in \\text{Blank}_1) \\land (W_2 \\in \\text{Blank}_2)",
        "explanationEn": "An option is invalid if even one word fails grammatical or contextual alignment.",
        "explanationHi": "यदि एक भी शब्द व्याकरण या संदर्भ में गलत हो तो विकल्प अमान्य है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Easier Blank First Strategy",
        "conventionalTime": "60s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Always starting with Blank 1, even when Blank 1 is abstract and complex.",
        "conventionalMethodHi": "हमेशा पहले रिक्त स्थान से शुरू करना चाहे वह कितना भी कठिन हो।",
        "shortcutStepsEn": "1. Look at Blank 2 first if it has a strict preposition or clearer clue.\n2. Eliminate 3 options based on Blank 2 alone in 5 seconds.\n3. Test only the remaining 2 options on Blank 1.",
        "shortcutStepsHi": "1. जो रिक्त स्थान अधिक सरल या Preposition से बंधा हो, उसे पहले हल करें।\n2. 5 सेकंड में 3 विकल्प हटाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "The 'Word 1 Seducer' Trap",
        "mistakeStudentsMake": "Falling in love with a fantastic Word 1 and selecting the option without verifying Word 2.",
        "howToAvoid": "Always test Word 2 with equal scrutiny before clicking save."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The audit report revealed that the branch manager acted with gross ______, causing substantial financial ______ to the institution. Options: (A) diligence, gain (B) negligence, loss (C) honesty, deficit (D) competence, damage.",
        "questionHi": "...acted with gross ______, causing substantial financial ______... सही विकल्प चुनें।",
        "conventionalSolEn": "'Gross' collocates with negative conduct like 'negligence'. This caused financial harm ('loss'). Option (B) matches both blanks perfectly: 'gross negligence' causing 'financial loss'.",
        "conventionalSolHi": "'Gross' के साथ 'negligence' (घोर लापरवाही) आता है जिससे 'financial loss' (वित्तीय नुकसान) हुआ। (B) सही है।",
        "shortcutTrickEn": "Gross + Negligence ➔ Financial + Loss.",
        "shortcutTrickHi": "Gross negligence, financial loss।",
        "finalAnswer": "negligence, loss"
      },
      {
        "level": "Moderate",
        "questionEn": "To ______ financial inclusion among marginalized communities, the regional bank decided to ______ mobile banking vans to remote villages. Options: (A) curtail, withdraw (B) promote, deploy (C) impede, station (D) foster, dismantle.",
        "questionHi": "To ______ financial inclusion... decided to ______ mobile banking vans... सही विकल्प चुनें।",
        "conventionalSolEn": "Objective is positive: promote financial inclusion. Action is positive: send/deploy banking vans. In (B), 'promote' fits Blank 1 and 'deploy' fits Blank 2. Other options mix positive with negative actions (curtail/withdraw, impede, dismantle).",
        "conventionalSolHi": "वित्तीय समावेशन को 'promote' (बढ़ावा देना) करने के लिए मोबाइल वैन 'deploy' (तैनात) करने का निर्णय लिया गया।",
        "shortcutTrickEn": "Both actions must be positive ➔ promote, deploy.",
        "shortcutTrickHi": "promote, deploy।",
        "finalAnswer": "promote, deploy"
      },
      {
        "level": "Mains",
        "questionEn": "Although the preliminary quarterly data indicated a ______ recovery in retail demand, economists remained ______ about the sustainability of this trend due to persistent inflationary headwinds. Options: (A) robust, optimistic (B) sluggish, unconcerned (C) nascent, skeptical (D) catastrophic, hopeful.",
        "questionHi": "Although the preliminary quarterly data indicated a ______ recovery... economists remained ______ about sustainability... सही विकल्प चुनें।",
        "conventionalSolEn": "'Although' indicates contrast between early recovery and economists' attitude. If recovery was 'nascent' (just beginning / early-stage), economists would be 'skeptical' (doubtful) due to inflation. In (A), 'robust' and 'optimistic' lacks contrast with 'Although'. Option (C) 'nascent, skeptical' provides exact nuance.",
        "conventionalSolHi": "'Although' विरोधाभास दर्शाता है: मांग में 'nascent' (प्रारंभिक) सुधार दिखा, फिर भी अर्थशास्त्री 'skeptical' (संदेहास्पद) रहे। (C) सही है।",
        "shortcutTrickEn": "Although + early sign (nascent) ➔ cautious stance (skeptical).",
        "shortcutTrickHi": "nascent, skeptical।",
        "finalAnswer": "nascent, skeptical"
      }
    ]
  },

  // ==========================================================================
  // Topic: word-swap-usage
  // ==========================================================================
  'word-swap-usage': {
    "topicSlug": "word-swap-usage",
    "coreTheoryEn": "Word Swap in banking exams features 4 words in bold (A, B, C, D) within a sentence that have been scrambled.\n\n### The Part of Speech (POS) Transposition Method:\n1. Examine the syntactic slot of each bold word:\n   - If Word (A) is an Adverb ending in *-ly* placed in front of a Noun (where an Adjective is required), (A) MUST be swapped!\n   - Find which other bold word (B, C, or D) is an Adjective.\n2. **Contextual Inversion:**\n   - E.g., *\"The bank announced a (A) strict of interest rates to (B) reduction inflation.\"*\n   - 'strict' is an Adjective, but precedes preposition 'of' where a Noun ('reduction') is required. Swap **A-B**!",
    "coreTheoryHi": "शब्द प्रतिस्थापन (Word Swap):\n### शब्द-भेद (Part of Speech) विधि:\n- यदि किसी Noun से पहले Noun या गलत शब्द रखा है, तो विशेषण (Adjective) से बदलें।\n- जैसे: \"a (A) strict of rates to (B) reduction inflation\" ➔ (A) और (B) को आपस में बदलें (A-B) क्योंकि 'reduction of' और 'strict inflation' व्याकरण सम्मत हैं।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Word Swap Syntax Slot Matching</text>\n  <rect x=\"50\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"175\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Position A: Needs NOUN</text>\n  <text x=\"175\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Currently holds: Adjective (A)</text>\n  <text x=\"175\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">➔ Must swap with Position C</text>\n\n  <rect x=\"360\" y=\"55\" width=\"250\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"485\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Position C: Needs ADJECTIVE</text>\n  <text x=\"485\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Currently holds: Noun (C)</text>\n  <text x=\"485\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">➔ Swap A-C locks syntax!</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Syntax Slot Matching Rule",
        "latexFormula": "\\text{Slot}(\\text{POS}_x) \\leftrightarrow \\text{Slot}(\\text{POS}_y)",
        "explanationEn": "Swapping words must simultaneously repair the grammar in both positions.",
        "explanationHi": "शब्दों को आपस में बदलने पर दोनों स्थानों का व्याकरण सही होना चाहिए।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Single Pair Confirmation",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Testing all 4 words in every possible permutation (A-B, A-C, B-D, etc.).",
        "conventionalMethodHi": "सभी संयोजनों को बार-बार पढ़कर देखना।",
        "shortcutStepsEn": "1. Find ONE word that is 100% grammatically impossible in its current slot.\n2. Identify the unique slot where it belongs.\n3. Look at options having this single pair (e.g. A-C).\n4. Mark answer in 10 seconds.",
        "shortcutStepsHi": "1. उस एक शब्द को पकड़ें जो अपने स्थान पर व्याकरण की दृष्टि से बैठ ही नहीं सकता।\n2. उसका सही स्थान पहचानें और विकल्प टिक करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Double Swap Oversight (A-B and C-D)",
        "mistakeStudentsMake": "Swapping only A-B and missing that C and D are also inverted.",
        "howToAvoid": "Check whether options contain single pair (A-B) or dual pair (A-B and C-D)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The board of directors approved the **merger (A)** of two regional banks to **efficiency (B)** operational **enhance (C)** and customer outreach. Identify the correct swap.",
        "questionHi": "...to **efficiency (B)** operational **enhance (C)**... सही स्वैप पहचानें।",
        "conventionalSolEn": "Infinitival 'to' requires a base verb ('to enhance'). 'Operational' is an adjective requiring a noun ('operational efficiency'). Swapping B and C produces: 'to enhance operational efficiency'.",
        "conventionalSolHi": "'to' के बाद क्रिया का मूल रूप 'enhance' आएगा और 'operational' के बाद संज्ञा 'efficiency' आएगी। B-C को आपस में बदलें।",
        "shortcutTrickEn": "'to enhance' + 'operational efficiency' ➔ Swap B-C.",
        "shortcutTrickHi": "B-C।",
        "finalAnswer": "B-C"
      },
      {
        "level": "Moderate",
        "questionEn": "The central bank **issued (A)** strict **penalties (B)** to commercial lenders that failed to **guidelines (C)** with priority sector lending **comply (D)**. Identify the swap.",
        "questionHi": "...failed to **guidelines (C)** with priority sector lending **comply (D)**. सही स्वैप पहचानें।",
        "conventionalSolEn": "'failed to' requires base verb 'comply' (followed by 'with'). 'priority sector lending' modifies noun 'guidelines'. Swapping C and D gives: 'failed to comply with priority sector lending guidelines'.",
        "conventionalSolHi": "'failed to' के बाद क्रिया 'comply with' आएगी और अंत में संज्ञा 'guidelines' आएगी। C-D को बदलें।",
        "shortcutTrickEn": "To comply with guidelines ➔ Swap C-D.",
        "shortcutTrickHi": "C-D।",
        "finalAnswer": "C-D"
      },
      {
        "level": "Mains",
        "questionEn": "Despite **escalating (A)** geopolitical tensions, the domestic stock market **demonstrated (B)** surprising **investor (C)**, bolstered by robust domestic institutional **resilience (D)** inflows. Identify the correct swap.",
        "questionHi": "...surprising **investor (C)**... institutional **resilience (D)** inflows. सही स्वैप पहचानें।",
        "conventionalSolEn": "Adjective 'surprising' modifies noun 'resilience' ('surprising resilience'). Modifier 'institutional' modifies noun 'investor' ('institutional investor inflows'). Words C ('investor') and D ('resilience') are scrambled. Swapping C-D yields grammatical and semantic harmony.",
        "conventionalSolHi": "'surprising resilience' (हैरान करने वाली सहनशक्ति) और 'institutional investor inflows' (संस्थागत निवेशक प्रवाह)। C और D को आपस में बदलें (C-D)।",
        "shortcutTrickEn": "Surprising resilience + Institutional investor inflows ➔ Swap C-D.",
        "shortcutTrickHi": "C-D।",
        "finalAnswer": "C-D"
      }
    ]
  },

  // ==========================================================================
  // Topic: reading-comprehension
  // ==========================================================================
  'reading-comprehension': {
    "topicSlug": "reading-comprehension",
    "coreTheoryEn": "Reading Comprehension in banking exams carries **8 to 12 marks in Prelims** and **12 to 15 marks in Mains**. The passages focus on Central Banking, Global Macroeconomics, Fintech, and ESG Sustainability.\n\n### The 3-Step Reading Comprehension Protocol:\n1. **The 60-Second Question Lead Read:**\n   Read the question stems FIRST before reading the passage!\n   - Highlight proper nouns, dates, monetary policies, and acronyms.\n   - Note down factual questions (direct search targets) vs inferential questions.\n2. **Active Skimming:**\n   Read paragraph 1 completely (introduces core thesis). Read first sentence and last sentence of middle paragraphs. Read final paragraph completely (author's conclusion / recommendation).\n3. **The 3 Lethal Option Traps:**\n   - **Half-Truth Trap:** First half of the option matches the passage 100%, but the second half subtly distorts the truth.\n   - **Extreme Qualifier Trap:** Words like *always, exclusively, entirely, indisputably* make an option invalid unless passage uses the exact same word.\n   - **Out-of-Scope Trap:** True in the real world, but UNMENTIONED in the passage.",
    "coreTheoryHi": "गद्यांश बोध (Reading Comprehension):\n### 3-चरणीय रणनीति:\n1. **पहले प्रश्न पढ़ें:** गद्यांश पढ़ने से पहले प्रश्नों के मुख्य शब्दों (Keywords) पर नजर डालें।\n2. **सक्रिय अध्ययन (Active Skimming):** पहला और अंतिम पैराग्राफ पूरा पढ़ें; मध्य पैराग्राफों की पहली और अंतिम पंक्तियों पर ध्यान दें।\n3. **विकल्पों के 3 जाल:**\n   - **आधा सच (Half-Truth):** विकल्प का पहला आधा भाग सही, दूसरा आधा भाग भ्रामक।\n   - **अतिवादी शब्द (Extreme Qualifiers):** Always, Never, Entirely जैसे शब्द प्रायः गलत होते हैं।\n   - **गद्यांश से बाहर की जानकारी (Out of Scope):** जो गद्यांश में नहीं लिखा, वह सत्य होते हुए भी गलत उत्तर है।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Reading Comprehension Question-First Workflow</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Step 1: Questions</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Extract Keywords</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Proper nouns, dates</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Step 2: Skim</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">First &amp; Last Paras</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Core thesis &amp; tone</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Step 3: Eliminate</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Avoid Half-Truths</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Drop extreme words</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Passage Evidence Axiom",
        "latexFormula": "\\text{Correct Option} \\iff \\exists \\text{ Direct Textual / Logical Basis in Passage}",
        "explanationEn": "Any choice relying on unstated real-world general knowledge is automatically incorrect.",
        "explanationHi": "वही विकल्प सही होगा जिसका प्रत्यक्ष या तार्किक प्रमाण गद्यांश में मौजूद हो।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Extreme Qualifier Elimination",
        "conventionalTime": "90s",
        "shortcutTime": "20s",
        "conventionalMethodEn": "Re-reading the entire 600-word passage to verify an option.",
        "conventionalMethodHi": "विकल्प की पुष्टि के लिए पूरा 600 शब्दों का पैराग्राफ फिर से पढ़ना।",
        "shortcutStepsEn": "1. Look at option words: 'completely eliminates', 'sole cause', 'invariably fails'.\n2. Unless the author used identical extreme phrasing, strike out these options instantly.\n3. Keep choices with moderate hedging words: 'tends to', 'can potentially', 'often'.",
        "shortcutStepsHi": "1. 'Completely', 'Sole cause' जैसे अतिवादी विकल्प हटाएं।\n2. 'Tends to', 'Can potentially' जैसे संतुलित विकल्पों को प्राथमिकता दें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Answering from Personal Memory instead of Passage",
        "mistakeStudentsMake": "Answering banking questions based on what you read in the morning newspaper instead of what this specific passage author states.",
        "howToAvoid": "If the passage says inflation was caused by crop failure, do not mark crude oil even if crude oil was also responsible in reality."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Passage snippet: 'While digital public infrastructure has enabled rapid financial inclusion, cybersecurity vulnerabilities continue to threaten small depositors.' What is the primary concern of the author?",
        "questionHi": "गद्यांश के अनुसार लेखक की प्राथमिक चिंता क्या है?",
        "conventionalSolEn": "The author praises inclusion ('While digital public infrastructure has enabled...') but points to cybersecurity threats as the pressing danger ('cybersecurity vulnerabilities continue to threaten small depositors'). Primary concern: Protecting small depositors from cybersecurity risks.",
        "conventionalSolHi": "लेखक की मुख्य चिंता छोटे जमाकर्ताओं को साइबर सुरक्षा खतरों से बचाना है।",
        "shortcutTrickEn": "Focus on the main clause after 'While': cybersecurity risks to depositors.",
        "shortcutTrickHi": "साइबर सुरक्षा खतरे।",
        "finalAnswer": "Cybersecurity vulnerabilities affecting small depositors"
      },
      {
        "level": "Moderate",
        "questionEn": "Which of the following can be inferred from the statement: 'Central banks in emerging markets face a delicate balancing act between anchoring inflation expectations and sustaining post-pandemic economic growth'?",
        "questionHi": "कथन से क्या निष्कर्ष निकाला जा सकता है?",
        "conventionalSolEn": "Anchoring inflation requires raising interest rates (which slows growth), while sustaining economic growth requires keeping credit accessible (which may stoke inflation). Thus, the two policy goals exert opposing pressures on interest rate decisions.",
        "conventionalSolHi": "मुद्रास्फीति नियंत्रण और आर्थिक विकास के बीच नीतिगत संतुलन बनाना चुनौतीपूर्ण है क्योंकि दोनों के साधन एक-दूसरे के विपरीत प्रभाव डालते हैं।",
        "shortcutTrickEn": "Balancing act = competing trade-offs between rate hikes (inflation) and rate cuts (growth).",
        "shortcutTrickHi": "मुद्रास्फीति और विकास के बीच नीतिगत समझौता (Trade-off)।",
        "finalAnswer": "Central banks face competing policy trade-offs between tightening credit and supporting growth"
      },
      {
        "level": "Mains",
        "questionEn": "What is the tone of the author who writes: 'The regulatory framework, while ostensibly designed to foster fintech innovation, has instead erected labyrinthine compliance hurdles that inadvertently stifle early-stage startups'?",
        "questionHi": "लेखक का स्वर (Tone) क्या है?",
        "conventionalSolEn": "Words like 'ostensibly' (supposedly but not really), 'labyrinthine' (overly complex), and 'inadvertently stifle' (strangle) reveal a sharp, critical stance towards the regulatory framework's practical execution. Tone is Critical / Skeptical.",
        "conventionalSolHi": "'Ostensibly' और 'labyrinthine compliance hurdles' जैसे शब्द दर्शाते हैं कि लेखक नियमों की जटिलता की आलोचना कर रहा है। स्वर: आलोचनात्मक (Critical)।",
        "shortcutTrickEn": "Labyrinthine hurdles + stifle = Critical tone.",
        "shortcutTrickHi": "आलोचनात्मक (Critical)।",
        "finalAnswer": "Critical / Evaluative"
      }
    ]
  },

  // ==========================================================================
  // Topic: para-jumbles-odd-one-out
  // ==========================================================================
  'para-jumbles-odd-one-out': {
    "topicSlug": "para-jumbles-odd-one-out",
    "coreTheoryEn": "Para Jumbles in banking exams test logical ordering of 5-6 scrambled sentences (A, B, C, D, E, F) and identifying thematic outliers.\n\n### The 4-Step Mandatory Pair Protocol:\n1. **Identify the Opening Sentence (Independent Anchor):**\n   - The opening sentence introduces the core topic/noun for the first time.\n   - It NEVER begins with pronouns (*He, She, It, They*), connectors (*However, Therefore, Furthermore*), or comparative phrases (*This phenomenon*).\n2. **Find Mandatory Pairs (The Secret Weapon):**\n   - **Full Name $\\to$ Acronym:** 'Reserve Bank of India' MUST precede 'RBI'.\n   - **Noun $\\to$ Pronoun:** 'Commercial lenders' precedes 'They'.\n   - **Problem $\\to$ Solution:** Statement describing NPAs precedes statement describing recovery mechanisms.\n   - **Question $\\to$ Answer:** A sentence raising a question precedes the sentence answering it.\n3. **Closing Sentence:**\n   - Summarizes the findings, draws a policy recommendation, or looks toward the future.",
    "coreTheoryHi": "पैरा जम्बल्स एवं विषम वाक्य (Para Jumbles & Odd One Out):\n### 4-चरणीय अनिवार्य युग्म (Mandatory Pair) नियम:\n1. **प्रारंभिक वाक्य की पहचान:** जो विषय या संज्ञा का पहली बार परिचय दे। यह कभी सर्वनाम (He, They) या संयोजक (However, Therefore) से शुरू नहीं होता।\n2. **अनिवार्य जोड़े (Mandatory Pairs):**\n   - पूरा नाम पहले, संक्षिप्त रूप (Acronym) बाद में (Reserve Bank of India $\\to$ RBI)।\n   - संज्ञा पहले, सर्वनाम बाद में।\n   - समस्या पहले, समाधान बाद में।\n3. **अंतिम वाक्य:** निष्कर्ष या भविष्य का दृष्टिकोण।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Para Jumble Mandatory Pair Architecture</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">1. Anchor (Opener)</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Independent Noun</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">No pronouns/connectors</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">2. Mandatory Pairs</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Noun ➔ Pronoun</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Cause ➔ Consequence</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">3. Closer</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Conclusion / Impact</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Forward-looking view</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Mandatory Pair Ordering Rule",
        "latexFormula": "\\text{Entity}_{\\text{Full}} \\prec \\text{Entity}_{\\text{Abbreviation}} \\quad | \\quad \\text{Noun} \\prec \\text{Pronoun}",
        "explanationEn": "Full nominal forms strictly precede pronominal or abbreviated mentions.",
        "explanationHi": "पूर्ण संज्ञा रूप हमेशा सर्वनाम अथवा संक्षिप्त रूप से पहले आता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Block Locking",
        "conventionalTime": "180s",
        "shortcutTime": "45s",
        "conventionalMethodEn": "Trying to assemble all 6 sentences from scratch (720 permutations!).",
        "conventionalMethodHi": "सभी 6 वाक्यों का क्रम एक साथ बैठाने का प्रयास करना।",
        "shortcutStepsEn": "1. Find ONE indisputable mandatory pair (e.g. C must be immediately followed by A: block [CA]).\n2. Look at sub-questions: 'Which is 3rd sentence?', 'Which is 4th?'.\n3. Match against options containing block [CA] to answer 3 questions in 30 seconds.",
        "shortcutStepsHi": "1. केवल एक निश्चित जोड़ा ढूंढें (जैसे C के बाद A आएगा: [CA])।\n2. इस जोड़े के आधार पर प्रश्नों के उत्तर दें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing Topic Introducer with a General Statement",
        "mistakeStudentsMake": "Picking a sentence that contains 'In today's world...' even when it references a specific previous concept with 'this'.",
        "howToAvoid": "A valid opening sentence must be completely self-contained."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Arrange: (A) However, high interest rates have dampened consumer borrowing. (B) The Indian economy witnessed robust retail expansion last year. (C) This contraction in household credit is now a concern for lenders. What is the correct sequence?",
        "questionHi": "सही क्रम क्या होगा?",
        "conventionalSolEn": "(B) is the self-contained opening statement introducing economic expansion. (A) introduces the contrasting reality ('However, high interest rates have dampened...'). (C) connects to the drop in borrowing ('This contraction in household credit...'). Correct order: B - A - C.",
        "conventionalSolHi": "(B) स्वतंत्र वाक्य है। (A) 'However' से विरोधाभास प्रस्तुत करता है। (C) 'This contraction' से (A) के परिणाम को जोड़ता है। सही क्रम: B - A - C.",
        "shortcutTrickEn": "B (Opener) ➔ A (However contrast) ➔ C (This contraction refers to A) = B-A-C.",
        "shortcutTrickHi": "B - A - C।",
        "finalAnswer": "B - A - C"
      },
      {
        "level": "Moderate",
        "questionEn": "Odd One Out: (A) Central banks deploy open market operations to regulate systemic liquidity. (B) Repo rate hikes are aimed at suppressing stubborn consumer price inflation. (C) Microfinance institutions offer collateral-free loans to low-income rural women. (D) Cash Reserve Ratio mandates the liquid cash reserves banks must park with the regulator. Which sentence is the thematic outlier?",
        "questionHi": "विषम वाक्य (Odd One Out) कौन सा है?",
        "conventionalSolEn": "Sentences (A), (B), and (D) all discuss Central Bank Monetary Policy tools (OMOs, Repo Rate, CRR). Sentence (C) discusses microfinance operational lending practices to rural borrowers. (C) is the thematic outlier.",
        "conventionalSolHi": "(A), (B) और (D) केंद्रीय बैंक के मौद्रिक नीति उपकरणों (Monetary Policy) से संबंधित हैं। (C) माइक्रोफाइनेंस ऋण से संबंधित है। अतः (C) विषम वाक्य है।",
        "shortcutTrickEn": "A, B, D = RBI monetary tools. C = MFI microcredit product ➔ Outlier is C.",
        "shortcutTrickHi": "वाक्य (C) विषम है।",
        "finalAnswer": "Sentence (C)"
      },
      {
        "level": "Mains",
        "questionEn": "Given 5 sentences on Green Banking: (A) These green debt securities finance renewable energy and sustainable agriculture projects. (B) To combat climate risks, global financial institutions have increasingly turned to green bonds. (C) Consequently, retail and institutional investor demand for ESG assets has surged to record highs. (D) Last year alone, global issuance of such bonds crossed $500 billion. (E) They offer fixed returns while ensuring compliance with stringent environmental mandates. What is the mandatory opening pair?",
        "questionHi": "प्रारंभिक अनिवार्य युग्म (Opening Pair) कौन सा है?",
        "conventionalSolEn": "(B) introduces the core topic: 'global financial institutions have increasingly turned to green bonds'. Sentence (A) explains what these bonds do ('These green debt securities finance...'). Sentence (D) provides statistics on the issuance mentioned in B ('global issuance of such bonds crossed $500B'). Pair B-A introduces the instrument and defines its purpose. B-D provides its quantitative scale.",
        "conventionalSolHi": "(B) विषय (Green Bonds) का परिचय देता है। (A) बताता है कि ये बॉन्ड क्या करते हैं। अनिवार्य प्रारंभिक युग्म B-A है।",
        "shortcutTrickEn": "B is the only independent opener introducing Green Bonds. A directly refers back via 'These green debt securities'. Opening pair = B - A.",
        "shortcutTrickHi": "B - A।",
        "finalAnswer": "B - A"
      }
    ]
  },

  // ==========================================================================
  // Topic: hindi-grammar-vocab-rc
  // ==========================================================================
  'hindi-grammar-vocab-rc': {
    "topicSlug": "hindi-grammar-vocab-rc",
    "coreTheoryEn": "Hindi Language in IBPS RRB PO & Clerk covers **40 marks** in Mains: Vakyashuddhi (Sentence Correction), Muhavare (Idioms), Paryayvachi/Vilom (Synonyms/Antonyms), and Gadhyansh (RC).\n\n### 1. वाक्य शुद्धि (Sentence Correction) के मुख्य नियम:\n- **लिंग एवं वचन संबंधी अशुद्धि:** 'अनेक' सदैव बहुवचन होता है; कभी भी 'अनेकों' नहीं लिखा जाता!\n  - *गलत:* वहाँ अनेकों लोग उपस्थित थे।\n  - *सही:* वहाँ **अनेक** लोग उपस्थित थे।\n- **अनावश्यक पद दोष (Redundancy):** 'कृपया' और 'कृपा करके' एक साथ नहीं आते।\n- **पदक्रम संबंधी अशुद्धि:** विशेषण को विशेष्य के ठीक पहले आना चाहिए।\n\n### 2. महत्वपूर्ण मुहावरे एवं लोकोक्तियां:\n- **अंगूठा दिखाना:** ऐन वक्त पर मना कर देना।\n- **ईद का चाँद होना:** बहुत दिनों बाद दिखाई देना।\n- **गागर में सागर भरना:** थोड़े शब्दों में बहुत अधिक भाव व्यक्त करना।\n- **घाट-घाट का पानी पीना:** बहुत अनुभवी होना।",
    "coreTheoryHi": "हिन्दी भाषा एवं व्याकरण (RRB PO एवं Clerk मेन्स - 40 अंक):\n### 1. वाक्य शुद्धि के महत्वपूर्ण नियम:\n- **'अनेक' बनाम 'अनेकों':** 'अनेक' स्वयं में बहुवचन है। 'अनेकों' शब्द का प्रयोग व्याकरण की दृष्टि से पूर्णतः अशुद्ध है।\n- **पुनरुक्ति दोष (Redundancy):** \"केवल मात्र\", \"सकुशल पूर्वक\" में शब्दों का दोहराव अशुद्ध है।\n- **कारक अशुद्धि:** \"उसने यह बात बोला\" (अशुद्ध) $\\to$ \"उसने यह बात **कही**\" (शुद्ध)।\n\n### 2. परीक्षा में पूछे जाने वाले मुहावरे:\n- **गागर में सागर भरना:** थोड़े शब्दों में विस्तृत विचार व्यक्त करना।\n- **घाट-घाट का पानी पीना:** अत्यधिक सांसारिक अनुभव होना।\n- **आस्तीन का सांप:** कपटी मित्र।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">हिन्दी व्याकरण 3-चरणीय शुद्धि परीक्षण</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">1. लिंग-वचन</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">'अनेक' (✓) | 'अनेकों' (✗)</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">क्रिया-कर्ता सामंजस्य</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">2. पुनरुक्ति दोष</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">अनावश्यक शब्द हटाएं</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">केवल/मात्र एक साथ नहीं</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">3. पदक्रम</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">सही स्थान पर शब्द</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">विशेषण + विशेष्य</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "अनेक बहुवचन नियम",
        "latexFormula": "\\text{शुद्ध: 'अनेक छात्र'} \\quad | \\quad \\text{अशुद्ध: 'अनेकों छात्र'}",
        "explanationEn": "'Anek' is intrinsically plural in Hindi grammar; 'Anekon' is strictly ungrammatical.",
        "explanationHi": "'अनेक' शब्द स्वतः बहुवचन है, इसका बहुवचन 'अनेकों' बनाना व्याकरण विरुद्ध है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "पुनरुक्ति विलोपन ट्रिक",
        "conventionalTime": "45s",
        "shortcutTime": "10s",
        "conventionalMethodEn": "Reading entire sentences repeatedly.",
        "conventionalMethodHi": "वाक्य को बार-बार पढ़ना।",
        "shortcutStepsEn": "1. Look for paired redundancies: 'केवल मात्र', 'सकुशल पूर्वक', 'कृपया करके'.\n2. Any sentence containing both is immediately grammatically flawed.\n3. Spot error in 5 seconds.",
        "shortcutStepsHi": "1. 'केवल मात्र' या 'कृपया करके' युग्म देखें।\n2. 5 सेकंड में अशुद्धि पहचानें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "'अनेकों' का प्रयोग",
        "mistakeStudentsMake": "वाक्य में 'अनेकों' को सही मान लेना।",
        "howToAvoid": "'अनेकों' देखते ही उसे अशुद्ध भाग मान लें।"
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "निम्न में से शुद्ध वाक्य का चयन कीजिए: (A) वहाँ अनेकों लोग उपस्थित थे। (B) वहाँ अनेक लोग उपस्थित थे। (C) वहाँ केवल मात्र अनेक लोग थे। (D) वहाँ अनेकों जनता थी।",
        "questionHi": "निम्न में से शुद्ध वाक्य का चयन कीजिए:",
        "conventionalSolEn": "'अनेक' is inherently plural. 'अनेकों' in (A) and (D) is incorrect. In (C), 'केवल' and 'मात्र' are redundant. Option (B) 'वहाँ अनेक लोग उपस्थित थे' is 100% grammatically correct.",
        "conventionalSolHi": "'अनेक' स्वतः बहुवचन है। (B) 'वहाँ अनेक लोग उपस्थित थे' पूर्णतः शुद्ध वाक्य है।",
        "shortcutTrickEn": "'अनेकों' गलत, 'केवल मात्र' गलत ➔ (B) सही।",
        "shortcutTrickHi": "(B) सही उत्तर है।",
        "finalAnswer": "वहाँ अनेक लोग उपस्थित थे।"
      },
      {
        "level": "Moderate",
        "questionEn": "मुहावरे 'गागर में सागर भरना' का सही अर्थ क्या है? (A) कम समय में अधिक काम करना (B) थोड़े शब्दों में बहुत कुछ कह देना (C) अत्यधिक व्यय करना (D) कठिन परिश्रम करना।",
        "questionHi": "'गागर में सागर भरना' का सही अर्थ क्या है?",
        "conventionalSolEn": "'गागर में सागर भरना' means expressing deep, expansive thoughts in very few, concise words. Correct meaning is (B).",
        "conventionalSolHi": "'गागर में सागर भरना' का अर्थ है थोड़े शब्दों में बहुत अधिक भाव या विचार व्यक्त करना। (B) सही है।",
        "shortcutTrickEn": "गागर (छोटा घड़ा) में सागर (विशाल समुद्र) = संक्षेप में विस्तार ➔ (B)।",
        "shortcutTrickHi": "थोड़े शब्दों में बहुत कुछ कह देना।",
        "finalAnswer": "थोड़े शब्दों में बहुत कुछ कह देना"
      },
      {
        "level": "Mains",
        "questionEn": "दिए गए गद्यांश अंश: 'आर्थिक उदारीकरण ने जहाँ एक ओर विदेशी निवेश के द्वार खोले हैं, वहीं दूसरी ओर घरेलू लघु उद्योगों के समक्ष कड़ी प्रतिस्पर्धा की चुनौती भी प्रस्तुत की है।' लेखक का क्या दृष्टिकोण है?",
        "questionHi": "लेखक का दृष्टिकोण क्या है?",
        "conventionalSolEn": "The author presents both the positive outcome (foreign investment) and the corresponding challenge (competition for domestic small industries). The stance is objective, balanced, and analytical (संतुलित एवं विश्लेषणात्मक दृष्टिकोण).",
        "conventionalSolHi": "लेखक लाभ (विदेशी निवेश) और चुनौती (प्रतिस्पर्धा) दोनों पक्षों को समान रूप से प्रस्तुत कर रहा है। अतः दृष्टिकोण संतुलित एवं विश्लेषणात्मक है।",
        "shortcutTrickEn": "जहाँ एक ओर (लाभ) + वहीं दूसरी ओर (चुनौती) = संतुलित दृष्टिकोण।",
        "shortcutTrickHi": "संतुलित एवं विश्लेषणात्मक दृष्टिकोण।",
        "finalAnswer": "संतुलित एवं विश्लेषणात्मक दृष्टिकोण"
      }
    ]
  },

};
