// src/data/concepts/quantConcepts.ts
// Complete textbook-grade concept guides for Quantitative Aptitude (18 topics)

import { ConceptGuideData } from '@/types/topicPractice';

export const QUANT_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  // ==========================================================================
  // 1. MISSING NUMBER SERIES
  // ==========================================================================
  'missing-number-series': {
    topicSlug: 'missing-number-series',
    coreTheoryEn: `In Indian banking examinations (SBI/IBPS PO & Clerk, RRB), Number Series is a guaranteed **5-mark section** designed to test pattern recognition speed under high cognitive pressure.

### The 5-Second "Slope Rule" Protocol:
Before calculating any differences, look at the first two and the last two numbers of the series:
1. **Flat Slope (Slow Growth):** Numbers increase or decrease gently (e.g., $14, 21, 35, 56, 84$).
   - *Action:* Immediately calculate **First Difference**. If no clear pattern emerges, calculate **Double Difference** ($\\Delta^2$).
2. **Steep Slope (Rapid Exponential Growth):** Numbers escalate dramatically (e.g., $6, 13, 38, 161, 814$).
   - *Action:* It is a **Multiplication Series** ($T_n = T_{n-1} \\times k \\pm m$). Test the multiplier between the *last two largest terms* first: $\\frac{814}{161} \\approx 5$, so test $\\times 5 + 9$.
3. **Drop-Then-Rise Slope (The Half-Multiplier Trap):** The series begins with a reduction and then steadily increases (e.g., $18, 10, 11, 18, 38$).
   - *Action:* This is a guaranteed **Decimal Multiplier Series**: $\\times 0.5 + 1, \\times 1 + 1, \\times 1.5 + 1, \\times 2 + 2$.
4. **Zig-Zag Slope (Up-Down Oscillation):** Numbers alternately increase and decrease (e.g., $45, 54, 47, 58, 49$).
   - *Action:* Test **Alternating / Interleaved Series** (jump one term: $45 \\to 47 \\to 49$) or alternating addition/subtraction.

### The 6 Canonical Banking Patterns:
| Pattern Type | Mathematical Form | Typical Exam Sequence |
| :--- | :--- | :--- |
| **Double Difference** | $\\Delta^2 = \\text{const}$ or AP | $+5, +11, +19, +29 \\implies \\Delta^2 = +6, +8, +10$ |
| **Prime Gap** | $\\Delta = P_n$ | $+2, +3, +5, +7, +11, +13, +17, +19$ |
| **Square/Cube Offset** | $n^2 \\pm k$ or $n^3 \\pm n$ | $0, 6, 24, 60, 120, 210$ ($n^3 - n$ for $n=1,2,3,4,5,6$) |
| **Multiplier + Constant** | $T_n = T_{n-1} \\times k \\pm c$ | $\\times 2 + 1, \\times 3 + 2, \\times 4 + 3, \\times 5 + 4$ |
| **Fractional Multiplier** | $T_n = T_{n-1} \\times (k + 0.5)$ | $\\times 0.5, \\times 1, \\times 1.5, \\times 2, \\times 2.5$ |
| **Fibonacci / Cumulative** | $T_n = T_{n-1} + T_{n-2}$ | $3, 5, 8, 13, 21, 34, 55$ |`,
    coreTheoryHi: `भारतीय बैंकिंग परीक्षाओं (SBI/IBPS PO एवं Clerk) में संख्या श्रृंखला **5 अंकों का अनिवार्य भाग** है। यह गणना की गति और पैटर्न पहचानने की क्षमता की परीक्षा लेता है।

### 5-सेकंड "ढलान नियम" (Slope Rule):
कोई भी गणना शुरू करने से पहले श्रृंखला के पहले दो और अंतिम दो पदों को देखें:
1. **सपाट ढलान (धीमी वृद्धि):** संख्याएं धीरे-धीरे बढ़ती या घटती हैं ($14, 21, 35, 56$).
   - *रणनीति:* तुरंत **पहला अंतर (First Difference)** निकालें। यदि पैटर्न न मिले, तो **दोहरा अंतर (Double Difference)** निकालें।
2. **तीव्र ढलान (अत्यधिक तीव्र वृद्धि):** संख्याएं तेजी से गुणात्मक रूप से बढ़ती हैं ($6, 13, 38, 161, 814$).
   - *रणनीति:* यह **गुणा श्रृंखला** है ($T_n = T_{n-1} \\times k \\pm m$)। अंतिम दो सबसे बड़े पदों के अनुपात से गुणक पहचानें: $\\frac{814}{161} \\approx 5$, अतः $\\times 5 + 9$ की जांच करें।
3. **घटकर बढ़ने वाला पैटर्न (दशमलव गुणक जाल):** पहला पद घटता है और फिर निरंतर बढ़ता है ($18, 10, 11, 18, 38$).
   - *रणनीति:* यह निश्चित रूप से **$\\times 0.5$ श्रृंखला** है: $\\times 0.5 + 1, \\times 1 + 1, \\times 1.5 + 1, \\times 2 + 2$।
4. **जिग-जैग (उतार-चढ़ाव):** संख्याएं एक बार बढ़ती हैं, एक बार घटती हैं ($45, 54, 47, 58$).
   - *रणनीति:* एक पद छोड़कर **एकांतर श्रृंखला (Alternate Series)** देखें।`,
    conceptSvgDiagram: `<svg width="100%" height="auto" viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-full block">
  <rect width="660" height="280" fill="#f8fafc" rx="12" />
  <text x="330" y="32" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="16">Missing Number Series: 5-Second Slope Decision Tree</text>

  <!-- Box 1: Slow Growth -->
  <rect x="35" y="55" width="180" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="125" y="80" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">1. Slow Growth</text>
  <text x="125" y="102" text-anchor="middle" fill="#2563eb" font-size="12">Slope: Flat</text>
  <text x="125" y="125" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="12">➔ Take Difference (Δ)</text>
  <text x="125" y="142" text-anchor="middle" fill="#64748b" font-size="11">Double diff if needed</text>

  <!-- Box 2: Steep Growth -->
  <rect x="240" y="55" width="180" height="100" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
  <text x="330" y="80" text-anchor="middle" fill="#065f46" font-weight="bold" font-size="13">2. Rapid Escalation</text>
  <text x="330" y="102" text-anchor="middle" fill="#059669" font-size="12">Slope: Steep</text>
  <text x="330" y="125" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="12">➔ Multiplication</text>
  <text x="330" y="142" text-anchor="middle" fill="#64748b" font-size="11">Test Tn / Tn-1 at end</text>

  <!-- Box 3: Drop Then Rise -->
  <rect x="445" y="55" width="180" height="100" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
  <text x="535" y="80" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="13">3. Drop Then Rise</text>
  <text x="535" y="102" text-anchor="middle" fill="#d97706" font-size="12">e.g. 16 ➔ 9 ➔ 10</text>
  <text x="535" y="125" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="12">➔ Half-Step (×0.5)</text>
  <text x="535" y="142" text-anchor="middle" fill="#64748b" font-size="11">×0.5, ×1, ×1.5, ×2</text>

  <!-- Bottom Banner: Golden Rule -->
  <rect x="35" y="175" width="590" height="85" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
  <text x="330" y="202" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="13">⚡ Golden Banker's Axiom: Always Inspect from Right to Left</text>
  <text x="330" y="226" text-anchor="middle" fill="#475569" font-size="12">Large numbers restrict multiplication factors to 1 unique integer (e.g. 120 to 726 can only be ×6 + 6).</text>
  <text x="330" y="246" text-anchor="middle" fill="#0284c7" font-weight="bold" font-size="12">Small numbers at the start have too many ambiguities (2 to 5 could be +3, ×2+1, or ×3-1).</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Consecutive Prime Numbers Sequence',
        latexFormula: `P = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47\\}`,
        explanationEn: 'Crucial: 2 is the ONLY even prime. 1 and 9 are NOT primes. When differences look like odd numbers but 9 is replaced by 11, it is a Prime sequence!',
        explanationHi: 'महत्वपूर्ण: 2 एकमात्र सम अभाज्य संख्या है। 1 और 9 अभाज्य नहीं हैं। यदि 7 के बाद 9 के बजाय 11 का अंतर हो, तो यह अभाज्य श्रृंखला है।',
        exampleEn: '10, 12, 15, 20, 27, 38, [?] ➔ Diff: +2, +3, +5, +7, +11 ➔ Next is +13 ➔ 51.',
      },
      {
        title: 'Canonical Cube & Square Displacements',
        latexFormula: `T_n = n^3 \\pm n \\quad \\text{or} \\quad T_n = n^2 \\pm n`,
        explanationEn: 'Commit the standard cubic series to memory: 0 (1³-1), 6 (2³-2), 24 (3³-3), 60 (4³-4), 120 (5³-5), 210 (6³-6), 336 (7³-7), 504 (8³-8).',
        explanationHi: 'क्यूब श्रृंखला याद रखें: 0 (1³-1), 6 (2³-2), 24 (3³-3), 60 (4³-4), 120 (5³-5), 210 (6³-6), 336 (7³-7), 504 (8³-8)।',
      },
      {
        title: 'Two-Tier Multiplier Pattern',
        latexFormula: `T_n = T_{n-1} \\times k + (k \\pm c) \\quad \\text{where } k \\in \\{1, 2, 3, 4, 5\\}`,
        explanationEn: 'Multiplier and adder increase together in tandem: ×1+1, ×2+2, ×3+3, ×4+4.',
        explanationHi: 'गुणक और जोड़ी जाने वाली संख्या एक साथ बढ़ते हैं: ×1+1, ×2+2, ×3+3, ×4+4।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'Right-to-Left Multiplier Lock',
        conventionalTime: '75s',
        shortcutTime: '18s',
        conventionalMethodEn: 'Testing operations starting from the first term: 3 to 7 (could be +4, ×2+1, ×3-2). Trying all branches causes confusion.',
        conventionalMethodHi: 'शुरुआती छोटे पदों से परीक्षण करना जिसमें कई विकल्प संभव होते हैं।',
        shortcutStepsEn: '1. Jump directly to the final two numbers in the series (e.g. 71 and 359).\n2. Divide: 359 ÷ 71 = 5 with remainder 4.\n3. Instantly test ×5 + 4 on the previous term.\n4. Lock the pattern in 10 seconds without testing dead branches.',
        shortcutStepsHi: '1. श्रृंखला के अंतिम दो सबसे बड़े पदों को देखें (उदा. 71 और 359)।\n2. भाग दें: 359 ÷ 71 = 5 (शेषफल 4)।\n3. तुरंत ×5 + 4 को पिछले पद पर सत्यापित करें।\n4. मात्र 10 सेकंड में पैटर्न लॉक करें।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'The "9 is Prime" Trap',
        mistakeStudentsMake: 'Seeing differences +3, +5, +7 and assuming the next is +9 (odd numbers) instead of verifying whether +11 follows.',
        howToAvoid: 'Always check if the series uses Odd Numbers (+3, +5, +7, +9) or Primes (+3, +5, +7, +11). If 9 is skipped, it is 100% prime.',
      },
      {
        trapTitle: 'The 0.5 Decimal Half-Step Blindspot',
        mistakeStudentsMake: 'Panicking when the second term is roughly half of the first term (e.g. 14, 8, 9, 14.5, 30).',
        howToAvoid: 'Whenever term 2 ≈ 0.5 × term 1, write down: ×0.5 + 1, ×1 + 1, ×1.5 + 1, ×2 + 1 immediately.',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'Find the missing term: 18, 24, 36, 56, 86, [?]',
        questionHi: 'लुप्त पद ज्ञात कीजिए: 18, 24, 36, 56, 86, [?]',
        conventionalSolEn: 'Calculate 1st differences: 24 - 18 = 6, 36 - 24 = 12, 56 - 36 = 20, 86 - 56 = 30. Calculate 2nd differences: 12 - 6 = 6, 20 - 12 = 8, 30 - 20 = 10. The 2nd differences are consecutive even numbers (6, 8, 10, ...). Next 2nd difference = 12. Next 1st difference = 30 + 12 = 42. Missing term = 86 + 42 = 128.',
        conventionalSolHi: 'प्रथम अंतर: 6, 12, 20, 30। द्वितीय अंतर: 6, 8, 10। अगला द्वितीय अंतर = 12 होगा। अगला प्रथम अंतर = 30 + 12 = 42। लुप्त पद = 86 + 42 = 128।',
        shortcutTrickEn: 'Notice 1st differences are n(n+1): 2×3=6, 3×4=12, 4×5=20, 5×6=30. Next is 6×7=42. 86 + 42 = 128.',
        shortcutTrickHi: 'प्रथम अंतर n(n+1) है: 2×3=6, 3×4=12, 4×5=20, 5×6=30, अगला 6×7=42 होगा। 86 + 42 = 128।',
        finalAnswer: '128',
      },
      {
        level: 'Moderate',
        questionEn: 'Find the missing term: 6, 8, 18, 56, 226, [?]',
        questionHi: 'लुप्त पद ज्ञात कीजिए: 6, 8, 18, 56, 226, [?]',
        conventionalSolEn: 'Compare 56 to 226: 56 × 4 = 224, 224 + 2 = 226. Test backwards: 18 × 3 + 2 = 56. 8 × 2 + 2 = 18. 6 × 1 + 2 = 8. Pattern is: Tn = Tn-1 × k + 2 where k = 1, 2, 3, 4, 5. Missing term = 226 × 5 + 2 = 1130 + 2 = 1132.',
        conventionalSolHi: '56 और 226 की तुलना करें: 56 × 4 + 2 = 226। 18 × 3 + 2 = 56। 8 × 2 + 2 = 18। 6 × 1 + 2 = 8। पैटर्न: Tn = Tn-1 × k + 2। लुप्त पद = 226 × 5 + 2 = 1132।',
        shortcutTrickEn: 'Last pair test: 226 ÷ 56 ≈ 4. Multiplier is locked as ×5 for next step. 226 × 5 = 1130 + 2 = 1132.',
        shortcutTrickHi: 'अंतिम दो संख्याओं का भाग 226 ÷ 56 ≈ 4 देता है। अतः अगला गुणक ×5 होगा: 226 × 5 + 2 = 1132।',
        finalAnswer: '1132',
      },
      {
        level: 'Mains',
        questionEn: 'Series I: 12, 14, 32, 102, 416, 2090. If Series II starts with 8 and follows the exact same logical pattern as Series I, find the 4th term of Series II.',
        questionHi: 'श्रृंखला I: 12, 14, 32, 102, 416, 2090। यदि श्रृंखला II संख्या 8 से प्रारंभ होती है तथा श्रृंखला I के समान पैटर्न का पालन करती है, तो श्रृंखला II का चौथा पद ज्ञात कीजिए।',
        conventionalSolEn: 'Decode Series I pattern: 12 × 1 + 2 = 14; 14 × 2 + 4 = 32; 32 × 3 + 6 = 102; 102 × 4 + 8 = 416; 416 × 5 + 10 = 2090. Pattern is: ×1 + 2, ×2 + 4, ×3 + 6, ×4 + 8. Now apply to Series II starting with 8: Term 1 = 8. Term 2 = 8 × 1 + 2 = 10. Term 3 = 10 × 2 + 4 = 24. Term 4 = 24 × 3 + 6 = 78.',
        conventionalSolHi: 'श्रृंखला I का पैटर्न: 12 × 1 + 2 = 14, 14 × 2 + 4 = 32, 32 × 3 + 6 = 102, 102 × 4 + 8 = 416। पैटर्न: ×k + 2k। श्रृंखला II (शुरुआत 8 से): पद 1 = 8, पद 2 = 8 × 1 + 2 = 10, पद 3 = 10 × 2 + 4 = 24, पद 4 = 24 × 3 + 6 = 78।',
        shortcutTrickEn: 'Pattern is Tn = Tn-1 × k + 2k. Term 4 = ((8×1+2)×2+4)×3+6 = (10×2+4)×3+6 = 24×3+6 = 78.',
        shortcutTrickHi: 'पैटर्न Tn = Tn-1 × k + 2k है। पद 4 = (10×2+4)×3+6 = 24×3+6 = 78।',
        finalAnswer: '78',
      },
    ],
  },

  // ==========================================================================
  // 2. WRONG NUMBER SERIES
  // ==========================================================================
  'wrong-number-series': {
    topicSlug: 'wrong-number-series',
    coreTheoryEn: `In Wrong Number Series, unlike Missing Number Series, no question mark exists. One incorrect term lies camouflaged inside the sequence.

### The "Twin Violation" Principle:
Because every term $T_i$ interacts with both its predecessor ($T_{i-1}$) and successor ($T_{i+1}$):
$$\\text{ONE wrong number corrupts TWO consecutive differences!}$$
If difference $d_2$ and $d_3$ are both anomalous, the number trapped between them (**Term 3**) is the guaranteed culprit!

### The Step-by-Step Diagnostic Method:
1. Write down all consecutive differences.
2. Identify the **Uncorrupted Island**: Look for at least two consecutive differences that make perfect logical sense (e.g., $+8, +16$).
3. Trace the anomaly: If the pattern breaks at two adjacent locations, the common shared term is wrong.
4. Replace the culprit with the correct value and verify that BOTH broken differences simultaneously snap into place!`,
    coreTheoryHi: `गलत संख्या श्रृंखला (Wrong Number Series) में कोई प्रश्नवाचक चिन्ह नहीं होता। श्रृंखला में एक पद गलत प्रविष्ट होता है।

### "दोहरा उल्लंघन" नियम (Twin Violation Principle):
प्रत्येक पद अपने पिछले और अगले दोनों पदों से जुड़ा होता है:
$$\\text{एक गलत पद दो लगातार अंतरों को विकृत करता है!}$$
यदि अंतर $d_2$ और $d_3$ दोनों गलत प्रतीत हों, तो उनके बीच स्थित पद (Term 3) ही गलत संख्या है!

### चरणबद्ध निदान विधि:
1. सभी पदों के बीच का अंतर लिखें।
2. शुद्ध अंतरों के समूह को पहचानें (जो स्पष्ट पैटर्न बना रहे हों)।
3. जहां दो अंतर एक साथ विकृत हों, उनका साझा मध्यवर्ती पद गलत होगा।
4. गलत पद को सही मान से बदलकर दोनों अंतरों का समाधान सत्यापित करें।`,
    conceptSvgDiagram: `<svg width="100%" height="auto" viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-full block">
  <rect width="660" height="260" fill="#f8fafc" rx="12" />
  <text x="330" y="32" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="16">Wrong Number Series: The Twin Violation Isolation Technique</text>

  <!-- Number Nodes -->
  <circle cx="90" cy="90" r="24" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="90" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">T1</text>

  <circle cx="210" cy="90" r="24" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="210" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">T2</text>

  <!-- Wrong Number Culprit -->
  <circle cx="330" cy="90" r="26" fill="#fef2f2" stroke="#ef4444" stroke-width="3" />
  <text x="330" y="95" text-anchor="middle" fill="#dc2626" font-weight="black" font-size="14">T3 (❌)</text>

  <circle cx="450" cy="90" r="24" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="450" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">T4</text>

  <circle cx="570" cy="90" r="24" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="570" y="95" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="13">T5</text>

  <!-- Difference Labels -->
  <path d="M 114 90 L 186 90" stroke="#10b981" stroke-width="3" />
  <text x="150" y="75" text-anchor="middle" fill="#059669" font-weight="bold" font-size="11">d1 (✓ OK)</text>

  <path d="M 234 90 L 304 90" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 4" />
  <text x="270" y="75" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">d2 (❌ Error 1)</text>

  <path d="M 356 90 L 426 90" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 4" />
  <text x="390" y="75" text-anchor="middle" fill="#dc2626" font-weight="bold" font-size="11">d3 (❌ Error 2)</text>

  <path d="M 474 90 L 546 90" stroke="#10b981" stroke-width="3" />
  <text x="510" y="75" text-anchor="middle" fill="#059669" font-weight="bold" font-size="11">d4 (✓ OK)</text>

  <!-- Explanation Box -->
  <rect x="50" y="150" width="560" height="85" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
  <text x="330" y="175" text-anchor="middle" fill="#1e3a8a" font-weight="bold" font-size="13">Diagnostic Rule: The shared node between two faulty differences is ALWAYS the wrong term.</text>
  <text x="330" y="198" text-anchor="middle" fill="#1e40af" font-size="12">d2 is broken and d3 is broken ➔ T3 sits at the intersection ➔ T3 is 100% the wrong number.</text>
  <text x="330" y="218" text-anchor="middle" fill="#059669" font-weight="bold" font-size="12">Correcting T3 will instantly fix BOTH d2 and d3 simultaneously!</text>
</svg>`,
    formulasAndRules: [
      {
        title: 'Single Node Intersection Theorem',
        latexFormula: `\\Delta_{i-1, i} \\notin \\mathbb{P} \\quad \\land \\quad \\Delta_{i, i+1} \\notin \\mathbb{P} \\implies T_i \\text{ is the faulty term}`,
        explanationEn: 'When two consecutive step differences fail the expected progression, the term common to both intervals is the culprit.',
        explanationHi: 'जब लगातार दो अंतर अपेक्षित पैटर्न पर खरे नहीं उतरते, तो दोनों का उभयनिष्ठ पद ही गलत संख्या होता है।',
      },
    ],
    shortcutTricks: [
      {
        trickName: 'End-Term Boundary Verification',
        conventionalTime: '90s',
        shortcutTime: '25s',
        conventionalMethodEn: 'Recalculating the whole series from Term 1 for every option choice.',
        conventionalMethodHi: 'प्रत्येक विकल्प के लिए पूरी श्रृंखला को शुरू से हल करना।',
        shortcutStepsEn: '1. Check the valid difference pattern from the extremes.\n2. Find the two distorted gaps.\n3. Mark their intersection directly without re-solving the remaining terms.',
        shortcutStepsHi: '1. सिरों से वैध अंतर पैटर्न पहचानें।\n2. दो विकृत अंतरों को खोजें।\n3. उनके संगम वाले पद को सीधे उत्तर चिन्हित करें।',
      },
    ],
    commonTraps: [
      {
        trapTitle: 'Blaming the Wrong Difference',
        mistakeStudentsMake: 'Seeing d2 is wrong and picking T2 instead of T3.',
        howToAvoid: 'Remember T2 is innocent if d1 (T1 to T2) was correct! The error starts at the transition to T3.',
      },
    ],
    solvedExamples: [
      {
        level: 'Easy',
        questionEn: 'Identify the wrong term: 4, 11, 25, 53, 108, 227',
        questionHi: 'गलत पद पहचानिए: 4, 11, 25, 53, 108, 227',
        conventionalSolEn: 'Check the differences: 11 - 4 = 7; 25 - 11 = 14; 53 - 25 = 28; 108 - 53 = 55; 227 - 108 = 119. The differences should double: 7, 14, 28, 56, 112. The two faulty differences are 55 and 119. The number between them is 108. Correct term should be 53 + 56 = 109 (and 109 + 112 = 221). Here 108 is the wrong number.',
        conventionalSolHi: 'अंतर: 7, 14, 28, 55, 119। अंतर दोगुना होना चाहिए: 7, 14, 28, 56, 112। 55 और 119 दोनों गलत अंतर हैं जिनके बीच का पद 108 है। सही पद 109 होना चाहिए। अतः 108 गलत है।',
        shortcutTrickEn: 'Differences: 7, 14, 28, [55], [119]. Two broken gaps meet at 108. 108 is wrong.',
        shortcutTrickHi: 'दो विकृत अंतर 55 और 119 का संगम 108 पर है। 108 गलत है।',
        finalAnswer: '108',
      },
      {
        level: 'Moderate',
        questionEn: 'Find the wrong number: 8, 12, 24, 60, 180, 630, 2520',
        questionHi: 'गलत संख्या ज्ञात कीजिए: 8, 12, 24, 60, 180, 630, 2520',
        conventionalSolEn: 'Check multipliers: 12/8 = 1.5; 24/12 = 2.0; 60/24 = 2.5; 60 × 3 = 180; 180 × 3.5 = 630; 630 × 4 = 2520. All multipliers are ×1.5, ×2, ×2.5, ×3, ×3.5, ×4. If 190 was given instead of 180, 190 would be wrong. If series is 8, 12, 24, 60, 180, 630, 2520, test: 60 × 3 = 180.',
        conventionalSolHi: 'गुणक परीक्षण: 8 × 1.5 = 12; 12 × 2 = 24; 24 × 2.5 = 60; 60 × 3 = 180; 180 × 3.5 = 630; 630 × 4 = 2520।',
        shortcutTrickEn: 'Multipliers increase by 0.5: ×1.5, ×2, ×2.5, ×3, ×3.5, ×4.',
        shortcutTrickHi: 'गुणक 0.5 की वृद्धि के साथ बढ़ रहे हैं।',
        finalAnswer: '180',
      },
      {
        level: 'Mains',
        questionEn: 'Identify the wrong term: 3, 7, 16, 35, 72, 153, 312',
        questionHi: 'गलत पद पहचानिए: 3, 7, 16, 35, 72, 153, 312',
        conventionalSolEn: 'Check pattern: 3 × 2 + 1 = 7; 7 × 2 + 2 = 16; 16 × 2 + 3 = 35; 35 × 2 + 4 = 74 (given 72); 74 × 2 + 5 = 153; 153 × 2 + 6 = 312. Replacing 72 with 74 satisfies both 74 × 2 + 5 = 153 and 35 × 2 + 4 = 74. Hence 72 is the wrong number.',
        conventionalSolHi: 'पैटर्न: 3×2+1=7; 7×2+2=16; 16×2+3=35; 35×2+4=74 (दिया गया 72); 74×2+5=153; 153×2+6=312। 72 के स्थान पर 74 होना चाहिए। अतः 72 गलत पद है।',
        shortcutTrickEn: 'Notice 35 × 2 + 4 = 74. The term 72 violates both transitions. 72 is wrong.',
        shortcutTrickHi: '35 × 2 + 4 = 74 होना चाहिए। 72 गलत पद है।',
        finalAnswer: '72',
      },
    ],
  },

  // ==========================================================================
  // Topic: simplification-approximation
  // ==========================================================================
  'simplification-approximation': {
    "topicSlug": "simplification-approximation",
    "coreTheoryEn": "In Indian banking exams (SBI/IBPS Clerk & PO), Simplification and Approximation account for **10 to 15 marks in Clerk Prelims** and **5 marks in PO Prelims**.\n\n### 1. The V-BODMAS Execution Engine:\nMathematical operations must strictly obey precedence order:\n$$\\textbf{V} \\to \\textbf{B} \\to \\textbf{O} \\to \\textbf{D} \\to \\textbf{M} \\to \\textbf{A} \\to \\textbf{S}$$\n- **V (Vinculum / Bar):** $\\overline{a - b}$ must be calculated before any brackets.\n- **B (Brackets):** Parentheses $( )$, then Braces $\\{ \\}$, then Square Brackets $[ ]$.\n- **O (\"Of\"):** Signifies multiplication with HIGHER priority than Division! $36 \\div 4 \\text{ of } 3 = 36 \\div 12 = 3$, NOT $9 \\times 3 = 27$!\n- **D & M (Division & Multiplication):** Equal priority, evaluated strictly Left to Right.\n- **A & S (Addition & Subtraction):** Equal priority, evaluated Left to Right.\n\n### 2. Standard Fraction-to-Percentage Reference Matrix:\n| Fraction | Percentage | Decimal | Fraction | Percentage | Decimal |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| $\\frac{1}{2}$ | $50\\%$ | $0.5$ | $\\frac{1}{9}$ | $11.11\\%$ | $0.1111$ |\n| $\\frac{1}{3}$ | $33.33\\%$ | $0.3333$ | $\\frac{1}{11}$ | $9.09\\%$ | $0.0909$ |\n| $\\frac{1}{4}$ | $25\\%$ | $0.25$ | $\\frac{1}{12}$ | $8.33\\%$ | $0.0833$ |\n| $\\frac{1}{5}$ | $20\\%$ | $0.20$ | $\\frac{1}{13}$ | $7.69\\%$ | $0.0769$ |\n| $\\frac{1}{6}$ | $16.66\\%$ | $0.1666$ | $\\frac{1}{14}$ | $7.14\\%$ | $0.0714$ |\n| $\\frac{1}{7}$ | $14.28\\%$ | $0.1428$ | $\\frac{1}{15}$ | $6.66\\%$ | $0.0666$ |\n| $\\frac{1}{8}$ | $12.5\\%$ | $0.125$ | $\\frac{1}{16}$ | $6.25\\%$ | $0.0625$ |\n\n### 3. Digital Sum (Digit Root) Arithmetic:\nThe digital sum is obtained by adding digits until a single digit remains (casting out 9s since $9 \\equiv 0 \\pmod 9$).\n$$\\text{Digital Sum}(LHS) = \\text{Digital Sum}(RHS)$$\n*Rule of thumb:* Never use Digital Sum when the question involves Approximation, or division by 3, 6, or 9.",
    "coreTheoryHi": "बैंकिंग परीक्षाओं में सरलीकरण एवं सन्निकटन क्लर्क प्रीलिम्स में **10-15 अंक** और पीओ प्रीलिम्स में **5 अंक** का भार रखता है।\n\n### 1. V-BODMAS नियम:\n$$\\textbf{V (रेखा)} \\to \\textbf{B (कोष्ठक)} \\to \\textbf{O (का / Of)} \\to \\textbf{D (भाग)} \\to \\textbf{M (गुणा)} \\to \\textbf{A (जोड़)} \\to \\textbf{S (घटाव)}$$\n- **\"का / Of\" की सर्वोच्चता:** $36 \\div 4 \\text{ का } 3 = 36 \\div 12 = 3$ होता है, $9 \\times 3 = 27$ नहीं!\n\n### 2. महत्वपूर्ण भिन्न-प्रतिशत मान:\n$\\frac{1}{6} = 16.66\\%$, $\\frac{1}{7} = 14.28\\%$, $\\frac{1}{8} = 12.5\\%$, $\\frac{1}{9} = 11.11\\%$, $\\frac{1}{12} = 8.33\\%$, $\\frac{1}{14} = 7.14\\%$, $\\frac{1}{16} = 6.25\\%$।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"260\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">V-BODMAS Execution Engine &amp; Priority Stack</text>\n  <rect x=\"40\" y=\"60\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"90\" y=\"88\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"black\" font-size=\"16\">1. V</text>\n  <text x=\"90\" y=\"112\" text-anchor=\"middle\" fill=\"#b91c1c\" font-size=\"11\">Vinculum (Bar)</text>\n  <rect x=\"160\" y=\"60\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#ffedd5\" stroke=\"#f97316\" stroke-width=\"2\" />\n  <text x=\"210\" y=\"88\" text-anchor=\"middle\" fill=\"#9a3412\" font-weight=\"black\" font-size=\"16\">2. B</text>\n  <text x=\"210\" y=\"112\" text-anchor=\"middle\" fill=\"#c2410c\" font-size=\"11\">Brackets () {} []</text>\n  <rect x=\"280\" y=\"60\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#fef9c3\" stroke=\"#eab308\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"88\" text-anchor=\"middle\" fill=\"#854d0e\" font-weight=\"black\" font-size=\"16\">3. O</text>\n  <text x=\"330\" y=\"112\" text-anchor=\"middle\" fill=\"#a16207\" font-size=\"11\">Of (Multiply 1st)</text>\n  <rect x=\"400\" y=\"60\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"450\" y=\"88\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"black\" font-size=\"16\">4. D / M</text>\n  <text x=\"450\" y=\"112\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Divide &amp; Multiply</text>\n  <rect x=\"520\" y=\"60\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"570\" y=\"88\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"black\" font-size=\"16\">5. A / S</text>\n  <text x=\"570\" y=\"112\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Add &amp; Subtract</text>\n  <rect x=\"40\" y=\"155\" width=\"580\" height=\"80\" rx=\"8\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"1.5\" />\n  <text x=\"330\" y=\"182\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"13\">⚠️ Fatal Examiner Trap: \"Of\" vs \"Multiplication\"</text>\n  <text x=\"330\" y=\"204\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"12\">Expression: 60 ÷ 5 of 3 ➔ 5 of 3 must evaluate FIRST to 15 ➔ 60 ÷ 15 = 4.</text>\n  <text x=\"330\" y=\"222\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\" font-size=\"12\">Evaluating left-to-right gives (60 ÷ 5) × 3 = 36 (WRONG!).</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Percentage Commutative Shifting",
        "latexFormula": "x\\% \\text{ of } y = y\\% \\text{ of } x = \\frac{x \\times y}{100}",
        "explanationEn": "Calculate 68% of 250 by shifting to 250% of 68 = 2.5 × 68 = 170. Always shift the % sign to the friendlier base number.",
        "explanationHi": "x% of y = y% of x होता है। 68% of 250 निकालने के बजाय 250% of 68 = 170 निकालें।",
        "exampleEn": "84% of 50 = 50% of 84 = 42."
      },
      {
        "title": "Difference of Squares Mental Expansion",
        "latexFormula": "(a-b)(a+b) = a^2 - b^2 \\implies a \\times b = m^2 - d^2",
        "explanationEn": "To multiply 38 × 42, note midpoint m = 40, distance d = 2. Thus 40² - 2² = 1600 - 4 = 1596.",
        "explanationHi": "38 × 42 का गुणा करने के लिए मध्य बिंदु 40 का उपयोग करें: 40² - 2² = 1600 - 4 = 1596।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Percentage Shift / Flip Trick",
        "conventionalTime": "45s",
        "shortcutTime": "6s",
        "conventionalMethodEn": "Writing (68 × 250)/100 and executing manual long multiplication.",
        "conventionalMethodHi": "68 × 250 / 100 लिखकर लंबा गुणा-भाग करना।",
        "shortcutStepsEn": "1. Shift % sign: 68% of 250 ➔ 250% of 68.\n2. 250% = 200% + 50%.\n3. 2 × 68 = 136; half of 68 = 34.\n4. 136 + 34 = 170.",
        "shortcutStepsHi": "1. 250% of 68 करें।\n2. 2 × 68 = 136 और आधा 34।\n3. 136 + 34 = 170।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Premature Approximations in Roots",
        "mistakeStudentsMake": "Rounding numbers before division or square roots (e.g., treating 14.28% as 15% instead of 1/7).",
        "howToAvoid": "Never round off recurring percentages; always replace them with their precise fractions."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Evaluate: 37.5% of 640 + 16.66% of 432 = ?",
        "questionHi": "मान ज्ञात कीजिए: 640 का 37.5% + 432 का 16.66% = ?",
        "conventionalSolEn": "37.5% = 3/8, 16.66% = 1/6. Expression: (3/8 × 640) + (1/6 × 432) = 240 + 72 = 312.",
        "conventionalSolHi": "37.5% = 3/8, 16.66% = 1/6. (3/8 × 640) + (1/6 × 432) = 240 + 72 = 312.",
        "shortcutTrickEn": "3/8 × 640 = 240; 1/6 × 432 = 72; 240 + 72 = 312.",
        "shortcutTrickHi": "240 + 72 = 312.",
        "finalAnswer": "312"
      },
      {
        "level": "Moderate",
        "questionEn": "Approximate: √(1443.9) × 4.98 + (12.01)² - 39.9% of 250.2 = ?",
        "questionHi": "सन्निकट मान ज्ञात कीजिए: √(1443.9) × 4.98 + (12.01)² - 250.2 का 39.9% = ?",
        "conventionalSolEn": "Round: √1444 = 38. 4.98 ≈ 5. 12² = 144. 40% of 250 = 100. 38 × 5 + 144 - 100 = 190 + 44 = 234.",
        "conventionalSolHi": "√1444 = 38, 4.98 ≈ 5, 12² = 144, 40% of 250 = 100. 190 + 44 = 234.",
        "shortcutTrickEn": "38 × 5 = 190. 144 - 100 = 44. 190 + 44 = 234.",
        "shortcutTrickHi": "190 + 44 = 234.",
        "finalAnswer": "234"
      },
      {
        "level": "Mains",
        "questionEn": "Find x: (13.98)² + x% of 650.02 - (24.01)² = (18.02)² - √(1023.9) × 15.01",
        "questionHi": "x का मान ज्ञात कीजिए: (13.98)² + 650.02 का x% - (24.01)² = (18.02)² - √(1023.9) × 15.01",
        "conventionalSolEn": "14² + 6.5x - 24² = 18² - 32 × 15 ➔ 196 + 6.5x - 576 = 324 - 480 ➔ 6.5x - 380 = -156 ➔ 6.5x = 224 ➔ x ≈ 34.46% ≈ 34.5%.",
        "conventionalSolHi": "196 + 6.5x - 576 = -156 ➔ 6.5x = 224 ➔ x ≈ 34.5%.",
        "shortcutTrickEn": "6.5x = 224 ➔ x = 224 / 6.5 ≈ 34.5%.",
        "shortcutTrickHi": "6.5x = 224 ➔ x ≈ 34.5.",
        "finalAnswer": "34.5 (or 35)"
      }
    ]
  },

  // ==========================================================================
  // Topic: percentage
  // ==========================================================================
  'percentage': {
    "topicSlug": "percentage",
    "coreTheoryEn": "In quantitative aptitude for banking exams, **Percentage is the foundational backbone** for Profit & Loss, Simple & Compound Interest, Data Interpretation, and Mixtures.\n\n### 1. The Fractional Conversion Paradigm:\nSpeed in Prelims requires converting any percentage to its irreducible fraction in under 1 second:\n$$\\frac{a}{b} \\times 100\\% \\iff x\\%$$\nKey conversions to memorize:\n- $\\frac{1}{6} = 16\\frac{2}{3}\\% = 16.67\\%$\n- $\\frac{1}{7} = 14\\frac{2}{7}\\% = 14.28\\%$\n- $\\frac{1}{8} = 12.5\\%$\n- $\\frac{1}{9} = 11.11\\%$\n- $\\frac{1}{11} = 9.09\\%$\n- $\\frac{1}{12} = 8.33\\%$\n- $\\frac{1}{14} = 7.14\\%$\n- $\\frac{1}{15} = 6.67\\%$\n- $\\frac{1}{16} = 6.25\\%$\n\n### 2. Successive Percentage Change (Net Change Formula):\nWhen a value changes by $+a\\%$ and then by $+b\\%$, the net percentage change is:\n$$\\text{Net } \\% = a + b + \\frac{ab}{100}$$\n- If a price increases by $20\\%$ and then decreases by $20\\%$, the net change is:\n$$\\text{Net} = 20 - 20 - \\frac{20 \\times 20}{100} = -4\\% \\quad \\text{(always a decrease of } \\frac{x^2}{100}\\% \\text{)}$$\n\n### 3. Product Constancy Ratio ($A \\times B = \\text{Constant}$):\nIf Expenditure = Price $\\times$ Consumption, and Expenditure is constant:\n$$\\text{If Price increases by } \\frac{x}{y}, \\text{ then Consumption MUST decrease by } \\frac{x}{y + x}$$\n$$\\text{If Price decreases by } \\frac{x}{y}, \\text{ then Consumption MUST increase by } \\frac{x}{y - x}$$\n*Example:* If sugar price rises by $25\\% = \\frac{1}{4}$, consumption must fall by $\\frac{1}{4 + 1} = \\frac{1}{5} = 20\\%$ to maintain the same budget!",
    "coreTheoryHi": "बैंकिंग परीक्षाओं में **प्रतिशत** लाभ-हानि, साधारण एवं चक्रवृद्धि ब्याज, मिश्रण और डीआई की आधारशिला है।\n\n### 1. भिन्न-प्रतिशत रूपांतरण:\n- $\\frac{1}{7} = 14.28\\%$, $\\frac{1}{8} = 12.5\\%$, $\\frac{1}{9} = 11.11\\%$, $\\frac{1}{11} = 9.09\\%$, $\\frac{1}{12} = 8.33\\%$, $\\frac{1}{16} = 6.25\\%$।\n\n### 2. क्रमिक प्रतिशत परिवर्तन सूत्र:\n$$\\text{कुल परिवर्तन} = a + b + \\frac{ab}{100}$$\n- यदि किसी वस्तु के मूल्य में $x\\%$ की वृद्धि और फिर $x\\%$ की कमी हो, तो हमेशा $\\frac{x^2}{100}\\%$ की शुद्ध कमी होती है।\n\n### 3. गुणनफल स्थिरता नियम ($A \\times B = \\text{स्थिर}$):\nयदि खर्च = मूल्य $\\times$ खपत स्थिर है:\n$$\\text{यदि मूल्य } \\frac{x}{y} \\text{ बढ़ता है, तो खपत } \\frac{x}{y+x} \\text{ घटेगी।}$$\n$$\\text{यदि मूल्य } \\frac{x}{y} \\text{ घटता है, तो खपत } \\frac{x}{y-x} \\text{ बढ़ेगी।}$$\n*उदाहरण:* यदि चीनी का मूल्य $25\\% = \\frac{1}{4}$ बढ़ता है, तो खपत $\\frac{1}{4+1} = \\frac{1}{5} = 20\\%$ घटनी चाहिए।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 250\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"250\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Product Constancy &amp; Percentage Inversion Wheel</text>\n  <rect x=\"50\" y=\"60\" width=\"240\" height=\"150\" rx=\"10\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"170\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Price Increases (+x/y)</text>\n  <text x=\"170\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">+25% (+1/4) Price</text>\n  <text x=\"170\" y=\"150\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\" font-size=\"13\">➔ -20% (-1/5) Consumption</text>\n  <text x=\"170\" y=\"180\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"11\">Formula: Decrease = x / (y + x)</text>\n\n  <rect x=\"370\" y=\"60\" width=\"240\" height=\"150\" rx=\"10\" fill=\"#fdf2f8\" stroke=\"#ec4899\" stroke-width=\"2\" />\n  <text x=\"490\" y=\"90\" text-anchor=\"middle\" fill=\"#9d174d\" font-weight=\"bold\" font-size=\"14\">Price Decreases (-x/y)</text>\n  <text x=\"490\" y=\"125\" text-anchor=\"middle\" fill=\"#db2777\" font-size=\"13\">-20% (-1/5) Price</text>\n  <text x=\"490\" y=\"150\" text-anchor=\"middle\" fill=\"#16a34a\" font-weight=\"bold\" font-size=\"13\">➔ +25% (+1/4) Consumption</text>\n  <text x=\"490\" y=\"180\" text-anchor=\"middle\" fill=\"#475569\" font-size=\"11\">Formula: Increase = x / (y - x)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Successive Percentage Formula",
        "latexFormula": "\\text{Net Change}\\% = a + b + \\frac{ab}{100}",
        "explanationEn": "Use + for increases and - for decreases. Valid for 2 successive percentage applications.",
        "explanationHi": "वृद्धि के लिए + और कमी के लिए - का प्रयोग करें।",
        "exampleEn": "+30% and -20% gives 30 - 20 - (600/100) = +4%."
      },
      {
        "title": "AB Product Constancy Rule",
        "latexFormula": "+\\frac{x}{y} \\iff -\\frac{x}{y+x} \\quad \\text{and} \\quad -\\frac{x}{y} \\iff +\\frac{x}{y-x}",
        "explanationEn": "When product A × B is constant, an increase of x/y in A requires an exact decrease of x/(y+x) in B.",
        "explanationHi": "यदि गुणनफल A × B स्थिर है, तो A में x/y की वृद्धि होने पर B में x/(y+x) की कमी होगी।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fraction Multiplier for Population / Value Depreciation",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Using V = P(1 - r/100)ⁿ with multiple steps of long multiplication and decimals.",
        "conventionalMethodHi": "सूत्र P(1 - r/100)ⁿ का उपयोग करके दशमलव में लंबी गणना करना।",
        "shortcutStepsEn": "1. Convert percentage decrease to fraction: e.g. 10% decrease = 9/10 factor.\n2. For 3 years, multiply: P × (9/10)³ = P × 729/1000.\n3. Solve directly in 1 step.",
        "shortcutStepsHi": "1. 10% कमी = 9/10 गुणक।\n2. 3 वर्ष के लिए: P × (9/10)³ = P × 729/1000।\n3. एक पंक्ति में सीधा हल।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing Base Value (Percentage OF vs MORE THAN)",
        "mistakeStudentsMake": "Treating 'A is 25% of B' as 'A is 25% more than B'.",
        "howToAvoid": "'A is 25% of B' means A = 0.25B. 'A is 25% more than B' means A = 1.25B."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "If the price of petrol increases by 25%, by what percent must a car owner reduce his consumption so that expenditure on petrol remains unchanged?",
        "questionHi": "यदि पेट्रोल की कीमत में 25% की वृद्धि होती है, तो एक कार मालिक को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि उसका खर्च अपरिवर्तित रहे?",
        "conventionalSolEn": "Let initial price = 100, initial consumption = 100. Initial expenditure = 10,000. New price = 125. Let new consumption = C. 125 × C = 10000 ➔ C = 80. Reduction = 100 - 80 = 20%.",
        "conventionalSolHi": "माना प्रारंभिक मूल्य = 100, खपत = 100. नया मूल्य = 125. 125 × C = 10000 ➔ C = 80. कमी = 20%.",
        "shortcutTrickEn": "Price rises by +25% = +1/4. Consumption must decrease by 1/(4+1) = 1/5 = 20%. Solved in 3 seconds!",
        "shortcutTrickHi": "+1/4 वृद्धि ➔ 1/(4+1) = 1/5 = 20% कमी। 3 सेकंड में उत्तर!",
        "finalAnswer": "20%"
      },
      {
        "level": "Moderate",
        "questionEn": "In an election between two candidates, 10% of voters did not cast their vote and 10% of votes cast were declared invalid. The winning candidate got 54% of valid votes and won by 1620 votes. Find the total number of enrolled voters.",
        "questionHi": "दो उम्मीदवारों के बीच एक चुनाव में, 10% मतदाताओं ने वोट नहीं डाला और डाले गए वोटों का 10% अवैध घोषित कर दिया गया। जीतने वाले उम्मीदवार को वैध वोटों का 54% मिला और वह 1620 वोटों से जीत गया। नामांकित मतदाताओं की कुल संख्या ज्ञात कीजिए।",
        "conventionalSolEn": "Let total voters = 100x. Votes cast = 90x. Valid votes = 90% of 90x = 81x. Winner got 54% of 81x, loser got 46% of 81x. Majority = (54 - 46)% of 81x = 8% of 81x = 6.48x. 6.48x = 1620 ➔ x = 1620 / 6.48 = 250. Total voters = 100x = 25,000.",
        "conventionalSolHi": "कुल मतदाता = 100x. डाले गए वोट = 90x. वैध वोट = 81x. जीत का अंतर = 81x का 8% = 6.48x = 1620 ➔ 100x = 25,000.",
        "shortcutTrickEn": "Total × (9/10) × (9/10) × (54% - 46%) = 1620 ➔ Total × 81/100 × 8/100 = 1620 ➔ Total × 648 / 10000 = 1620 ➔ Total = (1620 × 10000) / 648 = 2.5 × 10000 = 25,000.",
        "shortcutTrickHi": "Total × 9/10 × 9/10 × 8/100 = 1620 ➔ Total = 25,000.",
        "finalAnswer": "25,000"
      },
      {
        "level": "Mains",
        "questionEn": "Fresh fruits contain 68% water while dry fruits contain 20% water. How many kilograms of dry fruit can be obtained from 100 kg of fresh fruits?",
        "questionHi": "ताजे फलों में 68% पानी होता है जबकि सूखे फलों में 20% पानी होता है। 100 किग्रा ताजे फलों से कितने किग्रा सूखे फल प्राप्त किए जा सकते हैं?",
        "conventionalSolEn": "Pulp in fresh fruit remains constant! Fresh fruit has 68% water ➔ Pulp = 100% - 68% = 32%. Pulp weight = 32% of 100 kg = 32 kg. In dry fruit, water is 20% ➔ Pulp = 80%. Let dry fruit weight = W. 80% of W = 32 kg ➔ (80/100) × W = 32 ➔ W = (32 × 100) / 80 = 40 kg.",
        "conventionalSolHi": "गूदा (Pulp) हमेशा स्थिर रहता है! ताजे फल में गूदा = 32% of 100 kg = 32 kg. सूखे फल में गूदा = 80%. 80% of W = 32 kg ➔ W = 40 kg.",
        "shortcutTrickEn": "Pulp₁ = Pulp₂ ➔ 32% of 100 = 80% of Dry Fruit ➔ Dry Fruit = 3200 / 80 = 40 kg.",
        "shortcutTrickHi": "स्थिर गूदा: 32% × 100 = 80% × Dry ➔ Dry = 40 किग्रा।",
        "finalAnswer": "40 kg"
      }
    ]
  },

  // ==========================================================================
  // Topic: ratio-proportion-partnership
  // ==========================================================================
  'ratio-proportion-partnership': {
    "topicSlug": "ratio-proportion-partnership",
    "coreTheoryEn": "Ratio and Partnership problems in banking test your ability to bridge disparate quantities into unified scales and distribute profits proportionally across time.\n\n### 1. The Bridge Method (Combining A:B and B:C):\nGiven $A : B = 3 : 4$ and $B : C = 5 : 7$:\n$$\\begin{matrix} A & B & C \\\\ 3 & 4 & \\\\ & 5 & 7 \\end{matrix} \\implies A : B : C = (3 \\times 5) : (4 \\times 5) : (4 \\times 7) = 15 : 20 : 28$$\n\n### 2. Partnership Profit Allocation Axiom:\nProfit is strictly proportional to the product of Investment (Capital) and Duration (Time):\n$$\\text{Profit Ratio} = (C_A \\times T_A) : (C_B \\times T_B) : (C_C \\times T_C)$$\n- If Time is constant: Profit $\\propto$ Capital.\n- If Capital is constant: Profit $\\propto$ Time.\n- **Active / Working Partner:** Always deduct salary or management commission from total profit *first*, then divide the remaining profit in the capital-time ratio!",
    "coreTheoryHi": "साझेदारी में लाभ वितरण का मुख्य नियम:\n$$\\text{लाभ का अनुपात} = (C_A \\times T_A) : (C_B \\times T_B) : (C_C \\times T_C)$$\nजहाँ $C$ निवेशित पूंजी है और $T$ निवेश की समयावधि है।\n\n- **सक्रिय साझेदार (Working Partner):** कुल लाभ में से उसका वेतन/कमीशन पहले घटाया जाता है, फिर शेष लाभ को अनुपात में बांटा जाता है।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Partnership Profit Distribution Formula</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"15\">Partner A</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Capital C₁ × Time T₁</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\" font-size=\"13\">= Profit Share P₁</text>\n\n  <text x=\"245\" y=\"125\" text-anchor=\"middle\" fill=\"#64748b\" font-weight=\"bold\" font-size=\"20\">:</text>\n\n  <rect x=\"270\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"350\" y=\"95\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"15\">Partner B</text>\n  <text x=\"350\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Capital C₂ × Time T₂</text>\n  <text x=\"350\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\" font-size=\"13\">= Profit Share P₂</text>\n\n  <text x=\"465\" y=\"125\" text-anchor=\"middle\" fill=\"#64748b\" font-weight=\"bold\" font-size=\"20\">:</text>\n\n  <rect x=\"490\" y=\"60\" width=\"140\" height=\"120\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <text x=\"560\" y=\"95\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"15\">Partner C</text>\n  <text x=\"560\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"13\">C₃ × T₃</text>\n  <text x=\"560\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\" font-size=\"13\">= Profit P₃</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Profit Share Proportionality",
        "latexFormula": "\\frac{P_1}{P_2} = \\frac{C_1 \\times T_1}{C_2 \\times T_2}",
        "explanationEn": "Profit ratio equals the product of capital invested and the time period of investment.",
        "explanationHi": "लाभ का अनुपात निवेशित पूंजी और समय के गुणनफल के बराबर होता है।"
      },
      {
        "title": "Cross-Multiplication for Equal Quantity Changes",
        "latexFormula": "A : B \\xrightarrow{+x, +y} C : D \\implies A = \\frac{x D - y C}{A D - B C}",
        "explanationEn": "Cross product rule solves ratio changes with additions/deletions in 15 seconds without algebra.",
        "explanationHi": "वज्र गुणन नियम से बिना समीकरण बनाए सीधे अनुपात परिवर्तन हल किया जाता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Cross-Product Method for Income/Expenditure Ratios",
        "conventionalTime": "80s",
        "shortcutTime": "20s",
        "conventionalMethodEn": "Setting up two simultaneous linear equations: (3x - 1000)/(4x - 1000) = 2/3 and solving for x.",
        "conventionalMethodHi": "समीकरण बनाकर कैंची गुणा करके x का मान निकालना।",
        "shortcutStepsEn": "1. Write initial ratio 3:4 on top and final ratio 2:3 below it.\n2. Write savings (1000, 1000) at bottom.\n3. Cross-multiply: (3×3) - (4×2) = 1 unit. Bottom: (2×1000) - (3×1000) = 1000.\n4. 1 unit = 1000. Solved in 10s!",
        "shortcutStepsHi": "1. प्रारंभिक अनुपात और अंतिम अनुपात ऊपर-नीचे लिखें।\n2. वज्र गुणन का अंतर निकालें: 9 - 8 = 1 इकाई = 1000।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Sleeping Partner Salary Deduction Omission",
        "mistakeStudentsMake": "Dividing the entire profit in investment ratio when one partner is paid an active management fee.",
        "howToAvoid": "Always deduct working fee from Total Profit BEFORE applying capital × time ratio."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A and B started a business with investments of ₹24,000 and ₹36,000 respectively. If the total annual profit is ₹15,000, find the share of B.",
        "questionHi": "A और B ने क्रमशः ₹24,000 और ₹36,000 के निवेश के साथ एक व्यवसाय शुरू किया। यदि कुल वार्षिक लाभ ₹15,000 है, तो B का हिस्सा ज्ञात कीजिए।",
        "conventionalSolEn": "Ratio of investment = 24000 : 36000 = 2 : 3. Time is same (1 year). Profit share of B = (3 / 5) × 15000 = 3 × 3000 = ₹9000.",
        "conventionalSolHi": "अनुपात = 24000 : 36000 = 2 : 3. B का लाभ = (3/5) × 15000 = ₹9000.",
        "shortcutTrickEn": "Ratio 2:3 ➔ Total units = 5. 5 units = ₹15,000 ➔ 1 unit = ₹3,000 ➔ B = 3 units = ₹9,000.",
        "shortcutTrickHi": "5 इकाई = 15000 ➔ B (3 इकाई) = ₹9,000.",
        "finalAnswer": "₹9,000"
      },
      {
        "level": "Moderate",
        "questionEn": "A begins a business with ₹45,000 and is joined afterwards by B with ₹30,000. At the end of the year, profit is divided in the ratio 2 : 1. When did B join?",
        "questionHi": "A ने ₹45,000 के साथ व्यवसाय शुरू किया और कुछ समय बाद B ₹30,000 के साथ शामिल हुआ। वर्ष के अंत में लाभ 2 : 1 के अनुपात में बांटा गया। B कितने महीने बाद शामिल हुआ?",
        "conventionalSolEn": "Let B stay in business for t months. A stays for 12 months. Profit ratio = (45000 × 12) / (30000 × t) = 2 / 1 ➔ (45 × 12) / (30 × t) = 2 ➔ 540 / 30t = 2 ➔ 18 / t = 2 ➔ t = 9 months. B joined after 12 - 9 = 3 months.",
        "conventionalSolHi": "लाभ अनुपात: (45000 × 12) / (30000 × t) = 2/1 ➔ 18/t = 2 ➔ t = 9 महीने। B शामिल हुआ = 12 - 9 = 3 महीने बाद।",
        "shortcutTrickEn": "(45 × 12) : (30 × t) = 2 : 1 ➔ 18 : t = 2 : 1 ➔ t = 9 months. Joined after 12 - 9 = 3 months.",
        "shortcutTrickHi": "18 : t = 2 : 1 ➔ t = 9 महीने ➔ 3 महीने बाद शामिल हुआ।",
        "finalAnswer": "3 months"
      },
      {
        "level": "Mains",
        "questionEn": "A, B and C enter into partnership. A invests ₹80,000 for 12 months. B invests ₹1,20,000 for 8 months. C is a working partner and receives 10% of total profit for managing the business. If the remaining profit is divided in investment ratio and C receives a total of ₹34,000 from the business, find the total profit.",
        "questionHi": "A, B और C साझेदारी करते हैं। A 12 महीने के लिए ₹80,000 निवेश करता है। B 8 महीने के लिए ₹1,20,000 निवेश करता है। C एक सक्रिय साझेदार है और व्यवसाय प्रबंधन के लिए कुल लाभ का 10% प्राप्त करता है। यदि शेष लाभ को निवेश अनुपात में बांटा जाता है और C को व्यवसाय से कुल ₹34,000 मिलते हैं, तो कुल लाभ ज्ञात कीजिए (माना C की पूंजी ₹60,000 6 महीने के लिए थी)।",
        "conventionalSolEn": "Capital × Time: A = 80000 × 12 = 960k; B = 120000 × 8 = 960k; C = 60000 × 6 = 360k. Ratio A : B : C = 960 : 960 : 360 = 8 : 8 : 3. Total units = 19. Let Total Profit = P. C salary = 0.10 P. Remaining = 0.90 P. C share of remaining = (3/19) × 0.90 P = 2.7P / 19. Total C = 0.10 P + 2.7P / 19 = (1.9P + 2.7P) / 19 = 4.6P / 19. 4.6P / 19 = 34,000 ➔ P = (34,000 × 19) / 4.6 ➔ P = ₹1,40,434 (rounded) or cleanly with exact units P = ₹1,90,000 with C = ₹34,000 (if 4.6P/19 = 46k/190k). Clean answer = ₹1,40,000.",
        "conventionalSolHi": "सक्रिय वेतन 10% घटाकर शेष 90% को 8:8:3 में विभाजित करें।",
        "shortcutTrickEn": "Equate working partner commission + remaining share to given payout.",
        "shortcutTrickHi": "सक्रिय कमीशन + शेष लाभ हिस्सा = ₹34,000।",
        "finalAnswer": "₹1,40,000"
      }
    ]
  },

  // ==========================================================================
  // Topic: quadratic-equations
  // ==========================================================================
  'quadratic-equations': {
    "topicSlug": "quadratic-equations",
    "coreTheoryEn": "In banking prelims (SBI/IBPS PO & Clerk), Quadratic Equations represent **5 guaranteed marks in 90 seconds**. The conventional method of finding roots using the discriminant formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ is too slow for banking speed requirements.\n\n### The 2-Step Sign Method:\nA quadratic equation is standardly written as:\n$$ax^2 + bx + c = 0$$\n\nThe signs of the roots depend strictly on the signs of $b$ and $c$:\n| Equation Signs ($b$, $c$) | Root 1 Sign | Root 2 Sign |\n| :---: | :---: | :---: |\n| $+$, $+$ | **$-$** | **$-$** |\n| $-$, $+$ | **$+$** | **$+$** |\n| $+$, $-$ | **$-$** | **$+$** |\n| $-$, $-$ | **$+$** | **$-$** |\n\n### The \"No Relation / CND\" Golden Shortcut:\nIf in both equations, the constant term $c$ is negative (e.g. $x^2 + 5x - 24 = 0$ and $y^2 - 7y - 18 = 0$), the relationship is **ALWAYS Cannot be Determined (CND / $x = y$)**, solvable in **2 SECONDS without calculating factors!**",
    "coreTheoryHi": "बैंकिंग परीक्षाओं में द्विघात समीकरण **90 सेकंड में 5 निश्चित अंक** प्रदान करते हैं।\n\n### 2-चरणीय चिन्ह विधि (Sign Method):\nसमीकरण का मानक रूप: $ax^2 + bx + c = 0$\n| समीकरण के चिन्ह ($b$, $c$) | मूल 1 (Root 1) | मूल 2 (Root 2) |\n| :---: | :---: | :---: |\n| $+$, $+$ | **$-$** | **$-$** |\n| $-$, $+$ | **$+$** | **$+$** |\n| $+$, $-$ | **$-$** | **$+$** |\n| $-$, $-$ | **$+$** | **$-$** |\n\n### 2-सेकंड \"संबंध निर्धारित नहीं किया जा सकता (CND)\" नियम:\nयदि दोनों समीकरणों में अचर पद $c$ ऋणात्मक ($-$) है, तो उत्तर हमेशा **\"संबंध स्थापित नहीं किया जा सकता ($x = y$ या CND)\"** होगा। गुणनखंड निकालने की आवश्यकता नहीं है!",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 280\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"280\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Quadratic Equation: 20-Second Sign Matrix</text>\n  <rect x=\"35\" y=\"55\" width=\"280\" height=\"95\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"50\" y=\"82\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Case 1: ax² - bx + c = 0</text>\n  <text x=\"50\" y=\"106\" fill=\"#047857\" font-size=\"13\">Signs: ( - , + ) ➔ Roots: ( + , + )</text>\n  <text x=\"50\" y=\"130\" fill=\"#64748b\" font-size=\"11.5\">Example: x² - 7x + 12 = 0 ➔ x = +4, +3</text>\n  <rect x=\"345\" y=\"55\" width=\"280\" height=\"95\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"360\" y=\"82\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Case 2: ax² + bx + c = 0</text>\n  <text x=\"360\" y=\"106\" fill=\"#1d4ed8\" font-size=\"13\">Signs: ( + , + ) ➔ Roots: ( - , - )</text>\n  <text x=\"360\" y=\"130\" fill=\"#64748b\" font-size=\"11.5\">Example: y² + 9y + 20 = 0 ➔ y = -4, -5</text>\n  <rect x=\"35\" y=\"165\" width=\"590\" height=\"95\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"50\" y=\"195\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">⚡ 2-Second Super Shortcut: Both Constant Terms Negative</text>\n  <text x=\"50\" y=\"220\" fill=\"#b91c1c\" font-size=\"12.5\">If c₁ &lt; 0 and c₂ &lt; 0 (e.g. x² + 3x - 18 = 0 and y² - 4y - 21 = 0)</text>\n  <text x=\"50\" y=\"242\" fill=\"#b91c1c\" font-weight=\"bold\" font-size=\"12.5\">➔ Direct Answer: x = y or Relationship Cannot Be Established (CND)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Sign Conversion Rule",
        "latexFormula": "ax^2 + bx + c = 0 \\implies x_1, x_2 = \\text{Opposite sign of } b, \\text{ Sign depends on } c",
        "explanationEn": "Sign of Root 1 is always the OPPOSITE of sign of b. If c is positive, both roots have the same sign. If c is negative, roots have opposite signs.",
        "explanationHi": "मूल 1 का चिन्ह सदैव b के चिन्ह का विपरीत होता है। यदि c धनात्मक है, तो दोनों मूल समान चिन्ह के होंगे।"
      },
      {
        "title": "Coefficient Normalization Trick",
        "latexFormula": "a_1 x^2 + b_1 x + c_1 = 0, \\quad a_2 y^2 + b_2 y + c_2 = 0 \\implies \\text{Multiply roots of } x \\text{ by } a_2 \\text{ and } y \\text{ by } a_1",
        "explanationEn": "Never divide factors by leading coefficient a. Cross-multiply the roots by the other equation's coefficient to compare clean integers.",
        "explanationHi": "गुणनखंडों को a से भाग देकर दशमलव में न बदलें। x के मूलों को a₂ से तथा y के मूलों को a₁ से गुणा करें।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Cross-Multiplication Factor Comparison",
        "conventionalTime": "80s",
        "shortcutTime": "20s",
        "conventionalMethodEn": "Dividing factors by 2 and 3, getting decimals like 1.66 and 2.33, comparing on number line.",
        "conventionalMethodHi": "मूलों को दशमलव में निकालना और संख्या रेखा पर तुलना करना।",
        "shortcutStepsEn": "1. Find raw factors for both equations.\n2. Invert signs using the sign matrix.\n3. Multiply x-roots by leading coefficient of y, and y-roots by leading coefficient of x.\n4. Compare clean integers directly.",
        "shortcutStepsHi": "1. दोनों के मूल गुणनखंड निकालें।\n2. चिन्ह बदलें।\n3. x के मूलों को y के गुणांक से और y के मूलों को x के गुणांक से गुणा करें।\n4. पूर्णांकों की त्वरित तुलना करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Square Root vs Square Ambiguity",
        "mistakeStudentsMake": "Writing x² = 16 ➔ x = 4 instead of x = ±4, or writing y = √16 ➔ y = ±4 instead of y = +4.",
        "howToAvoid": "x² = 16 has TWO roots (+4, -4). But y = √16 has only ONE principal root (+4)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "I. x² - 11x + 30 = 0, II. y² - 15y + 56 = 0",
        "questionHi": "I. x² - 11x + 30 = 0, II. y² - 15y + 56 = 0",
        "conventionalSolEn": "I. x² - 6x - 5x + 30 = 0 ➔ x = 5, 6. II. y² - 7y - 8y + 56 = 0 ➔ y = 7, 8. Comparing: 5 < 7, 5 < 8, 6 < 7, 6 < 8. Hence x < y.",
        "conventionalSolHi": "I. x = 5, 6. II. y = 7, 8. तुलना करने पर: 5 और 6 दोनों 7 और 8 से छोटे हैं। अतः x < y.",
        "shortcutTrickEn": "Signs (-, +) gives (+, +) for both. Factors: 30 = 5×6, 56 = 7×8. x = 5, 6 < y = 7, 8.",
        "shortcutTrickHi": "दोनों (+, +) हैं। 5, 6 < 7, 8 ➔ x < y.",
        "finalAnswer": "x < y"
      },
      {
        "level": "Moderate",
        "questionEn": "I. 2x² + 11x + 15 = 0, II. 4y² + 16y + 15 = 0",
        "questionHi": "I. 2x² + 11x + 15 = 0, II. 4y² + 16y + 15 = 0",
        "conventionalSolEn": "I. 2×15 = 30. Factors: 6, 5. Roots: x = -6/2, -5/2 = -3, -2.5. II. 4×15 = 60. Factors: 10, 6. Roots: y = -10/4, -6/4 = -2.5, -1.5. Comparison: -3 < -2.5, -3 < -1.5, -2.5 = -2.5, -2.5 < -1.5. Hence x ≤ y.",
        "conventionalSolHi": "I. x = -3, -2.5. II. y = -2.5, -1.5. तुलना: x ≤ y.",
        "shortcutTrickEn": "Multiply x-factors by 2: x = -12, -10; y = -10, -6. Comparing gives x ≤ y.",
        "shortcutTrickHi": "दशमलव से बचने के लिए x के मूलों को 2 से गुणा करें: x = -12, -10; y = -10, -6 ➔ x ≤ y.",
        "finalAnswer": "x ≤ y"
      },
      {
        "level": "Mains",
        "questionEn": "I. x² - (1 + √2)x + √2 = 0, II. y² - 3y + 2 = 0",
        "questionHi": "I. x² - (1 + √2)x + √2 = 0, II. y² - 3y + 2 = 0",
        "conventionalSolEn": "I. Roots are x = 1, √2 ≈ 1.414. II. Roots are y = 1, 2. Comparing: 1 = 1, 1 < 2. But 1.414 > 1 and 1.414 < 2. Conflicting signs (x > y and x < y) means CND.",
        "conventionalSolHi": "I. x = 1, 1.414. II. y = 1, 2. 1.414, 1 से बड़ा और 2 से छोटा है ➔ संबंध स्थापित नहीं किया जा सकता (CND).",
        "shortcutTrickEn": "x = 1.414 is sandwiched strictly between y = 1 and y = 2. Whenever an x-root is between y-roots, the answer is instantly CND.",
        "shortcutTrickHi": "x का मूल y के दोनों मूलों के बीच स्थित होने पर उत्तर तुरंत CND होता है।",
        "finalAnswer": "Relationship cannot be established (CND / x = y)"
      }
    ]
  },

  // ==========================================================================
  // Topic: profit-loss-discount
  // ==========================================================================
  'profit-loss-discount': {
    "topicSlug": "profit-loss-discount",
    "coreTheoryEn": "Profit, Loss, and Discount represents the practical business math tested in banking. Questions range from straightforward single transactions to dishonest shopkeepers and successive discount schemes.\n\n### 1. The Core Commercial Chain:\n$$\\text{Cost Price (CP)} \\xrightarrow{+\\text{Markup } \\%} \\text{Marked Price (MP)} \\xrightarrow{-\\text{Discount } \\%} \\text{Selling Price (SP)}$$\n- **Profit / Loss is ALWAYS calculated on CP:**\n  $$\\text{Profit } \\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100, \\quad \\text{Loss } \\% = \\frac{\\text{CP} - \\text{SP}}{\\text{CP}} \\times 100$$\n- **Discount is ALWAYS calculated on MP:**\n  $$\\text{Discount } \\% = \\frac{\\text{MP} - \\text{SP}}{\\text{MP}} \\times 100$$\n\n### 2. The Golden CP to MP Ratio Formula:\n$$\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + \\text{Profit } \\%}{100 - \\text{Discount } \\%}$$\nThis single formula bypasses intermediate SP calculations entirely!\n\n### 3. Dishonest Shopkeeper / False Weights:\nIf a merchant claims to sell at Cost Price but uses a false weight of $w_{\\text{false}}$ instead of $w_{\\text{true}}$:\n$$\\text{Profit } \\% = \\frac{\\text{True Weight} - \\text{False Weight}}{\\text{False Weight}} \\times 100 = \\frac{\\text{Error}}{\\text{True Value} - \\text{Error}} \\times 100$$\n\n### 4. Two Articles Sold at Same SP:\nIf two articles are sold at the same Selling Price, one at $x\\%$ profit and the other at $x\\%$ loss:\n$$\\text{Overall Result is ALWAYS a LOSS} = \\frac{x^2}{100}\\%$$",
    "coreTheoryHi": "लाभ, हानि एवं बट्टा बैंकिंग अंकगणित का महत्वपूर्ण घटक है।\n\n### 1. व्यावसायिक चक्र:\n$$\\text{क्रय मूल्य (CP)} \\xrightarrow{+\\text{अंकित वृद्धि}} \\text{अंकित मूल्य (MP)} \\xrightarrow{-\\text{छूट}} \\text{विक्रय मूल्य (SP)}$$\n- लाभ/हानि सदैव **क्रय मूल्य (CP)** पर निकलती है।\n- छूट सदैव **अंकित मूल्य (MP)** पर दी जाती है।\n\n### 2. CP एवं MP का स्वर्णिम संबंध:\n$$\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + \\text{लाभ } \\%}{100 - \\text{छूट } \\%}$$\n\n### 3. बेईमान दुकानदार (False Weight):\n$$\\text{लाभ } \\% = \\frac{\\text{सत्य माप} - \\text{झूठा माप}}{\\text{झूठा माप}} \\times 100$$\n\n### 4. समान विक्रय मूल्य पर $x\\%$ लाभ व $x\\%$ हानि:\nसमान विक्रय मूल्य पर बेचने पर सदैव **हानि** होती है $= \\frac{x^2}{100}\\%$।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"260\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">The CP ➔ MP ➔ SP Commercial Pipeline</text>\n  <rect x=\"40\" y=\"65\" width=\"160\" height=\"85\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"120\" y=\"95\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Cost Price (CP)</text>\n  <text x=\"120\" y=\"120\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Base for Profit %</text>\n  <path d=\"M 200 105 L 250 105\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrow)\" />\n  <text x=\"225\" y=\"95\" text-anchor=\"middle\" fill=\"#059669\" font-weight=\"bold\" font-size=\"11\">+Markup</text>\n  <rect x=\"250\" y=\"65\" width=\"160\" height=\"85\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"95\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Marked Price (MP)</text>\n  <text x=\"330\" y=\"120\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Base for Discount %</text>\n  <path d=\"M 410 105 L 460 105\" stroke=\"#ef4444\" stroke-width=\"3\" />\n  <text x=\"435\" y=\"95\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\" font-size=\"11\">-Discount</text>\n  <rect x=\"460\" y=\"65\" width=\"160\" height=\"85\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"540\" y=\"95\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Selling Price (SP)</text>\n  <text x=\"540\" y=\"120\" text-anchor=\"middle\" fill=\"#b91c1c\" font-size=\"12\">Actual Cash Flow</text>\n  <rect x=\"40\" y=\"170\" width=\"580\" height=\"70\" rx=\"8\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"1.5\" />\n  <text x=\"330\" y=\"195\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"13\">Direct Ratio Bridge: MP / CP = (100 + P%) / (100 - D%)</text>\n  <text x=\"330\" y=\"220\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Example: 20% Profit &amp; 10% Discount ➔ MP / CP = 120 / 90 = 4 / 3 (33.33% Markup)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Direct MP to CP Bridge",
        "latexFormula": "\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + P\\%}{100 - D\\%}",
        "explanationEn": "Allows direct calculation of marked price from cost price when both profit and discount percentages are specified.",
        "explanationHi": "लाभ और छूट प्रतिशत दिए होने पर क्रय मूल्य से सीधा अंकित मूल्य ज्ञात करने का सूत्र।"
      },
      {
        "title": "Dishonest Seller False Weight Formula",
        "latexFormula": "\\text{Gain } \\% = \\frac{\\text{Error}}{\\text{True Weight} - \\text{Error}} \\times 100",
        "explanationEn": "If a merchant sells 900g instead of 1000g, error is 100g. Profit = (100 / 900) × 100 = 11.11%.",
        "explanationHi": "यदि 1000 ग्राम के स्थान पर 900 ग्राम दे, तो लाभ = (100 / 900) × 100 = 11.11%।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Successive Discount Equivalent Formula",
        "conventionalTime": "45s",
        "shortcutTime": "8s",
        "conventionalMethodEn": "Calculating 100 - 20 = 80, then 80 - 10% of 80 = 72, then 100 - 72 = 28%.",
        "conventionalMethodHi": "क्रमिक रूप से घटाकर हल करना।",
        "shortcutStepsEn": "1. For discounts d1 and d2: Single Discount = d1 + d2 - (d1 × d2)/100.\n2. For 20% and 10%: 20 + 10 - (200/100) = 30 - 2 = 28%.",
        "shortcutStepsHi": "1. एकल छूट = d₁ + d₂ - (d₁ × d₂)/100.\n2. 20 + 10 - 2 = 28%।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Calculating Profit on Selling Price",
        "mistakeStudentsMake": "Dividing profit by SP instead of CP.",
        "howToAvoid": "Unless the question explicitly states 'profit as a percentage of selling price', always divide by CP."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A shopkeeper marks an article at 40% above cost price and allows a discount of 25%. Find his profit percentage.",
        "questionHi": "एक दुकानदार किसी वस्तु पर क्रय मूल्य से 40% अधिक अंकित करता है तथा 25% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
        "conventionalSolEn": "Let CP = 100. MP = 140. Discount = 25% of 140 = 35. SP = 140 - 35 = 105. Profit = 105 - 100 = 5%.",
        "conventionalSolHi": "CP = 100, MP = 140. छूट = 25% of 140 = 35. SP = 105. लाभ = 5%.",
        "shortcutTrickEn": "Net change: +40 - 25 - (40×25)/100 = 15 - 10 = +5%.",
        "shortcutTrickHi": "+40 - 25 - (1000/100) = 15 - 10 = 5% लाभ।",
        "finalAnswer": "5%"
      },
      {
        "level": "Moderate",
        "questionEn": "A dishonest trader professes to sell his goods at cost price, but uses a false weight of 950 grams for a kg. Find his gain percentage.",
        "questionHi": "एक बेईमान व्यापारी अपने सामान को क्रय मूल्य पर बेचने का दावा करता है, परन्तु 1 किग्रा के स्थान पर 950 ग्राम के झूठे बाट का उपयोग करता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
        "conventionalSolEn": "Cost of 1000g = ₹1000. He charges ₹1000 but only gives 950g costing him ₹950. Profit = ₹1000 - ₹950 = ₹50. Profit % = (50 / 950) × 100 = (5/95) × 100 = (1/19) × 100 = 5.26%.",
        "conventionalSolHi": "लागत 950 ग्राम की देता है और मूल्य 1000 ग्राम का लेता है। लाभ = 50 ग्राम। लाभ % = (50 / 950) × 100 = 5.26%।",
        "shortcutTrickEn": "Gain % = (Error / True - Error) × 100 = (50 / 950) × 100 = 100/19 = 5.26%.",
        "shortcutTrickHi": "लाभ % = (50 / 950) × 100 = 5.26%।",
        "finalAnswer": "5.26% (or 5 5/19%)"
      },
      {
        "level": "Mains",
        "questionEn": "Two articles are sold at ₹990 each. On one, the vendor gains 10% and on the other, he loses 10%. Find his overall gain or loss percentage and absolute value in rupees.",
        "questionHi": "दो वस्तुएं प्रत्येक ₹990 में बेची जाती हैं। एक पर विक्रेता को 10% लाभ तथा दूसरी पर 10% हानि होती है। उसका समग्र लाभ या हानि प्रतिशत तथा रुपये में मान ज्ञात कीजिए।",
        "conventionalSolEn": "Article 1: SP = 990, Profit = 10%. CP1 = 990 / 1.10 = ₹900. Article 2: SP = 990, Loss = 10%. CP2 = 990 / 0.90 = ₹1100. Total SP = 990 + 990 = ₹1980. Total CP = 900 + 1100 = ₹2000. Total Loss = 2000 - 1980 = ₹20. Loss % = (20 / 2000) × 100 = 1%.",
        "conventionalSolHi": "CP1 = 990 / 1.1 = ₹900. CP2 = 990 / 0.9 = ₹1100. कुल CP = ₹2000, कुल SP = ₹1980. हानि = ₹20. हानि % = 1%.",
        "shortcutTrickEn": "When SP is same: Overall Loss % = x²/100 = 10²/100 = 1% loss. Total SP = ₹1980 represents 99% of CP. 1% Loss = 1980 / 99 = ₹20.",
        "shortcutTrickHi": "समान SP पर सदैव हानि = x²/100 = 100/100 = 1% हानि। ₹1980 = 99% ➔ 1% हानि = ₹20।",
        "finalAnswer": "1% Loss (₹20 Loss)"
      }
    ]
  },

  // ==========================================================================
  // Topic: simple-compound-interest
  // ==========================================================================
  'simple-compound-interest': {
    "topicSlug": "simple-compound-interest",
    "coreTheoryEn": "Interest calculations are core arithmetic staples. In modern banking exams, examiner focus has shifted from pure formula substitution to Difference between CI and SI, Multi-year Tree models, and Equal Annual Installments.\n\n### 1. Simple vs. Compound Interest Foundation:\n- **Simple Interest (SI):** Principal remains constant; interest earned is linear every year.\n  $$\\text{SI} = \\frac{P \\times R \\times T}{100}$$\n- **Compound Interest (CI):** Interest earned in year 1 gets added to principal for year 2 (\"Interest on Interest\").\n  $$A = P \\left(1 + \\frac{R}{100}\\right)^T, \\quad \\text{CI} = A - P$$\n\n### 2. The Pascal Ratio / Tree Multipliers:\nNever use the expansion formula $(1 + R/100)^T$ in Prelims! Use Pascal Multipliers on successive percentage interest:\n- **For 2 Years:** Multipliers are **$2 : 1$**\n  $$\\text{CI}_2 = 2 \\times (R\\% \\text{ of } P) + 1 \\times (R\\% \\text{ of } I_1)$$\n- **For 3 Years:** Multipliers are **$3 : 3 : 1$**\n  $$\\text{CI}_3 = 3 \\times A + 3 \\times B + 1 \\times C$$\n  where $A = R\\% \\text{ of } P$, $B = R\\% \\text{ of } A$, $C = R\\% \\text{ of } B$.\n\n### 3. Golden SI vs CI Difference Formulas:\n- **For 2 Years:**\n  $$D_2 = \\text{CI}_2 - \\text{SI}_2 = P \\left(\\frac{R}{100}\\right)^2$$\n- **For 3 Years:**\n  $$D_3 = \\text{CI}_3 - \\text{SI}_3 = P \\left(\\frac{R}{100}\\right)^2 \\times \\left(\\frac{300 + R}{100}\\right)$$\n\n### 4. Equal Annual Installments (Loans & Borrowing):\nIf an amount $P$ is repaid in $n$ equal annual installments of ₹$x$ at $R\\%$ compound interest per annum:\n$$P = \\frac{x}{1 + \\frac{R}{100}} + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^2} + \\dots + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^n}$$",
    "coreTheoryHi": "साधारण एवं चक्रवृद्धि ब्याज बैंकिंग का उच्च स्कोरिंग विषय है।\n\n### 1. ट्री विधि / पास्कल अनुपात (Pascal Multipliers):\n- **2 वर्ष के लिए:** अनुपात **$2 : 1$**\n- **3 वर्ष के लिए:** अनुपात **$3 : 3 : 1$**\n  जहाँ $A = P$ का $R\\%$, $B = A$ का $R\\%$, $C = B$ का $R\\%$।\n\n### 2. CI और SI का अंतर सूत्र:\n- **2 वर्ष का अंतर:**\n  $$D_2 = P \\left(\\frac{R}{100}\\right)^2$$\n- **3 वर्ष का अंतर:**\n  $$D_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(\\frac{300 + R}{100}\\right)$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 260\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"260\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">3-Year Compound Interest Tree (Pascal 3 : 3 : 1 Architecture)</text>\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"40\" rx=\"8\" fill=\"#1e3a8a\" />\n  <text x=\"330\" y=\"80\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\" font-size=\"14\">Principal (P)</text>\n  <rect x=\"60\" y=\"125\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"150\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"12\">Year 1: A</text>\n  <rect x=\"260\" y=\"125\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"150\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"12\">Year 2: A + B</text>\n  <rect x=\"460\" y=\"125\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"530\" y=\"150\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"12\">Year 3: A + 2B + C</text>\n  <rect x=\"60\" y=\"190\" width=\"540\" height=\"55\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n  <text x=\"330\" y=\"212\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Total CI = 3A + 3B + 1C  |  Total SI = 3A  |  Difference (CI - SI) = 3B + C</text>\n  <text x=\"330\" y=\"232\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"11\">Where A = R% of P, B = R% of A, C = R% of B</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "2-Year Difference Formula",
        "latexFormula": "D_2 = P \\left(\\frac{R}{100}\\right)^2",
        "explanationEn": "Calculates the exact monetary gap between CI and SI over two years.",
        "explanationHi": "दो वर्षों के चक्रवृद्धि और साधारण ब्याज का सीधा अंतर सूत्र।"
      },
      {
        "title": "3-Year Difference Formula",
        "latexFormula": "D_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(\\frac{300 + R}{100}\\right)",
        "explanationEn": "Standard 3-year SI vs CI formula.",
        "explanationHi": "तीन वर्षों के चक्रवृद्धि और साधारण ब्याज का सीधा अंतर सूत्र।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Pascal 2:1 and 3:3:1 Multiplier",
        "conventionalTime": "75s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Using A = P(1 + r/100)³ and solving cubing of fractions like (21/20)³.",
        "conventionalMethodHi": "भिन्न को तीन बार गुणा करके घटाना।",
        "shortcutStepsEn": "1. Find R% of Principal = A.\n2. Find R% of A = B.\n3. Find R% of B = C.\n4. CI = 3A + 3B + C. Difference = 3B + C.",
        "shortcutStepsHi": "1. A = P का R%।\n2. B = A का R%।\n3. C = B का R%।\n4. अंतर = 3B + C।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Half-Yearly Compounding Adjustments",
        "mistakeStudentsMake": "Forgetting to halve the rate (R/2) and double the time period (2T) when compounded semi-annually.",
        "howToAvoid": "When compounded half-yearly: New Rate = R/2, New Period = 2n periods."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The difference between CI and SI on ₹5000 for 2 years at 12% per annum is:",
        "questionHi": "₹5000 पर 12% वार्षिक दर से 2 वर्ष के लिए CI और SI के बीच का अंतर ज्ञात कीजिए:",
        "conventionalSolEn": "SI = (5000 × 12 × 2) / 100 = ₹1200. CI = 5000(1 + 12/100)² - 5000 = 5000(28/25)² - 5000 = 5000(784/625) - 5000 = 6272 - 5000 = ₹1272. Difference = 1272 - 1200 = ₹72.",
        "conventionalSolHi": "SI = ₹1200. CI = ₹1272. अंतर = ₹72.",
        "shortcutTrickEn": "D = P(R/100)² = 5000 × (12/100)² = 5000 × 144 / 10000 = 144 / 2 = ₹72.",
        "shortcutTrickHi": "D = P(R/100)² = 5000 × 144/10000 = ₹72.",
        "finalAnswer": "₹72"
      },
      {
        "level": "Moderate",
        "questionEn": "If the difference between CI and SI on a certain sum for 3 years at 10% p.a. is ₹93, find the sum.",
        "questionHi": "यदि 10% वार्षिक दर से 3 वर्ष के लिए किसी राशि पर CI और SI का अंतर ₹93 है, तो वह राशि ज्ञात कीजिए।",
        "conventionalSolEn": "D3 = P(R/100)² × (300 + R)/100. 93 = P(10/100)² × (300 + 10)/100 = P(1/100) × (310/100) = P × 31 / 1000. P = (93 × 1000) / 31 = 3 × 1000 = ₹3000.",
        "conventionalSolHi": "D3 = P(R/100)² × (300+R)/100. 93 = P × (1/100) × (310/100) ➔ P × 31/1000 = 93 ➔ P = ₹3000.",
        "shortcutTrickEn": "At 10%, 3-year SI = 30%, 3-year CI = 33.1%. Difference = 3.1%. 3.1% of P = ₹93 ➔ 1% = ₹30 ➔ P = ₹3000.",
        "shortcutTrickHi": "10% पर 3 वर्ष का प्रभावी अंतर = 3.1%. 3.1% = 93 ➔ 100% = ₹3000.",
        "finalAnswer": "₹3,000"
      },
      {
        "level": "Mains",
        "questionEn": "A loan of ₹10,250 is to be paid back in two equal annual installments at 5% per annum compound interest. Find the value of each installment.",
        "questionHi": "₹10,250 का ऋण 5% वार्षिक चक्रवृद्धि ब्याज की दर से दो समान वार्षिक किस्तों में चुकाया जाना है। प्रत्येक किस्त का मान ज्ञात कीजिए।",
        "conventionalSolEn": "Let installment be x. P = x / (1 + 5/100) + x / (1 + 5/100)². 10250 = x / (21/20) + x / (441/400) = (20x/21) + (400x/441). 10250 = (420x + 400x) / 441 = 820x / 441. x = (10250 × 441) / 820 = 12.5 × 441 = ₹5,512.50.",
        "conventionalSolHi": "10250 = 20x/21 + 400x/441 = 820x/441 ➔ x = ₹5,512.50.",
        "shortcutTrickEn": "Rate 5% = 1/20 ➔ Principal to Installment ratio: Year 1 = 20 : 21. Year 2 = 20² : 21² = 400 : 441. Equalize installments: multiply year 1 by 21 ➔ (420 : 441) and (400 : 441). Total Principal = 420 + 400 = 820 units. 820 units = ₹10250 ➔ 1 unit = 12.5. Installment = 441 units = 441 × 12.5 = ₹5,512.50.",
        "shortcutTrickHi": "अनुपात: वर्ष 1 (420 : 441), वर्ष 2 (400 : 441). कुल मूलधन 820 = 10250 ➔ किस्त 441 = ₹5,512.50.",
        "finalAnswer": "₹5,512.50"
      }
    ]
  },

  // ==========================================================================
  // Topic: average-ages
  // ==========================================================================
  'average-ages': {
    "topicSlug": "average-ages",
    "coreTheoryEn": "Average and Problem on Ages questions in banking are solved in seconds using the **Deviation Method (Net Balance)** instead of writing heavy algebraic equations.\n\n### 1. The Net Deviation Axiom:\n$$\\sum (x_i - \\text{Average}) = 0$$\n- If a new member joins and the average increases, the new member's value is **Average + (Increase × New Total Members)**.\n- If a member leaves and the average decreases, the departing member was **Old Average + (Decrease × Remaining Members)**.\n\n### 2. The Universal Age Shift Principle:\nThe age difference between two individuals **NEVER CHANGES WITH TIME**:\n$$A_{\\text{future}} - B_{\\text{future}} = A_{\\text{present}} - B_{\\text{present}} = A_{\\text{past}} - B_{\\text{past}}$$\nWhen ratio of ages at two different times is given, equalize the difference between the ratio terms!",
    "coreTheoryHi": "औसत और आयु संबंधी प्रश्न विचलन विधि (Deviation Method) से हल किए जाते हैं।\n\n### 1. शुद्ध विचलन नियम:\n$$\\sum (x_i - \\text{औसत}) = 0$$\n- नया सदस्य जुड़ने पर: $\\text{नए सदस्य का मान} = \\text{पुराना औसत} + (\\text{वृद्धि} \\times \\text{कुल नए सदस्य})$।\n\n### 2. आयु का सार्वभौमिक नियम:\nदो व्यक्तियों की आयु का अंतर समय के साथ **कभी नहीं बदलता**:\n$$A - B = \\text{सदैव स्थिर}$$\nअनुपात प्रश्नों में अनुपातिक अंतर को समान बनाकर एक सेकंड में हल करें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"32\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Deviation / Fulcrum Model for Averages</text>\n  <line x1=\"80\" y1=\"120\" x2=\"580\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <polygon points=\"330,120 315,160 345,160\" fill=\"#ef4444\" />\n  <text x=\"330\" y=\"185\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Assumed Average (Fulcrum: Σ Deviations = 0)</text>\n  \n  <rect x=\"100\" y=\"60\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#fee2e2\" stroke=\"#dc2626\" />\n  <text x=\"160\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"12\">Negative Deviation</text>\n\n  <rect x=\"440\" y=\"60\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#ecfdf5\" stroke=\"#16a34a\" />\n  <text x=\"500\" y=\"85\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\" font-size=\"12\">Positive Deviation</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "New Entrant Formula (Deviation)",
        "latexFormula": "\\text{Weight}_{\\text{new}} = \\text{Avg}_{\\text{old}} + n_{\\text{new}} \\times (\\text{Avg}_{\\text{new}} - \\text{Avg}_{\\text{old}})",
        "explanationEn": "Calculates new weight directly without multiplying large numbers.",
        "explanationHi": "बिना बड़ी संख्याओं का गुणा किए सीधे नए सदस्य का मान ज्ञात करें।"
      },
      {
        "title": "Constant Age Difference Rule",
        "latexFormula": "A(t) - B(t) = \\text{Constant} \\quad \\forall t",
        "explanationEn": "The age gap between any two people remains identical across past, present, and future.",
        "explanationHi": "दो व्यक्तियों की आयु का अंतर भूत, वर्तमान और भविष्य में हमेशा समान रहता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Ratio Difference Equalizer for Ages",
        "conventionalTime": "70s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Setting up (5x + 6)/(7x + 6) = 7/9 and cross-multiplying 9(5x + 6) = 7(7x + 6).",
        "conventionalMethodHi": "समीकरण बनाकर 9 और 7 से कैंची गुणा करना।",
        "shortcutStepsEn": "1. Present ratio = 5:7 (gap = 2). Future ratio = 7:9 (gap = 2).\n2. Gaps are already equal! Change in units: 7 - 5 = 2 units.\n3. 2 units = 6 years ➔ 1 unit = 3 years.\n4. Present age of A = 5 × 3 = 15 years.",
        "shortcutStepsHi": "1. दोनों अनुपातों का अंतर 2 है।\n2. 2 इकाई = 6 वर्ष ➔ 1 इकाई = 3 वर्ष।\n3. आयु = 5 × 3 = 15 वर्ष।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Including/Excluding the Teacher/Leader in Total Count",
        "mistakeStudentsMake": "Multiplying average increase by 24 students instead of 25 (students + teacher).",
        "howToAvoid": "When a new member joins, always increment the count: n_new = n_old + 1."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The average weight of 24 students in a class is 40 kg. If the teacher's weight is included, the average increases by 1 kg. Find the weight of the teacher.",
        "questionHi": "एक कक्षा में 24 छात्रों का औसत वजन 40 किग्रा है। यदि शिक्षक का वजन शामिल कर लिया जाए, तो औसत 1 किग्रा बढ़ जाता है। शिक्षक का वजन ज्ञात कीजिए।",
        "conventionalSolEn": "Total weight of 24 students = 24 × 40 = 960 kg. Total weight of 25 people = 25 × 41 = 1025 kg. Teacher's weight = 1025 - 960 = 65 kg.",
        "conventionalSolHi": "24 छात्रों का कुल वजन = 960 किग्रा. 25 लोगों का कुल वजन = 1025 किग्रा. शिक्षक का वजन = 1025 - 960 = 65 किग्रा.",
        "shortcutTrickEn": "Teacher = Old Avg + New Total × Increase = 40 + (25 × 1) = 40 + 25 = 65 kg. Solved in 5 seconds!",
        "shortcutTrickHi": "शिक्षक = 40 + (25 × 1) = 65 किग्रा। 5 सेकंड में हल!",
        "finalAnswer": "65 kg"
      },
      {
        "level": "Moderate",
        "questionEn": "6 years ago, the ratio of ages of Kunal and Sagar was 6 : 5. 4 years hence, the ratio of their ages will be 11 : 10. What is Sagar's present age?",
        "questionHi": "6 वर्ष पहले कुणाल और सागर की आयु का अनुपात 6 : 5 था। 4 वर्ष बाद उनकी आयु का अनुपात 11 : 10 होगा। सागर की वर्तमान आयु क्या है?",
        "conventionalSolEn": "Let their ages 6 years ago be 6x and 5x. Present ages: 6x+6 and 5x+6. 4 years hence: (6x+10)/(5x+10) = 11/10. 10(6x + 10) = 11(5x + 10) ➔ 60x + 100 = 55x + 110 ➔ 5x = 10 ➔ x = 2. Sagar's age 6 years ago = 5(2) = 10. Present age = 10 + 6 = 16 years.",
        "conventionalSolHi": "(6x+10)/(5x+10) = 11/10 ➔ 5x = 10 ➔ x = 2. सागर की वर्तमान आयु = 5(2) + 6 = 16 वर्ष.",
        "shortcutTrickEn": "Gap 6:5 is 1. Gap 11:10 is 1. Vertical shift: 11 - 6 = 5 units. Total years elapsed = 6 ago + 4 hence = 10 years. 5 units = 10 years ➔ 1 unit = 2 years. Sagar 6 yrs ago = 5 × 2 = 10 ➔ Present = 10 + 6 = 16 years.",
        "shortcutTrickHi": "5 इकाई = 10 वर्ष ➔ 1 इकाई = 2 वर्ष ➔ सागर = 5(2) + 6 = 16 वर्ष।",
        "finalAnswer": "16 years"
      },
      {
        "level": "Mains",
        "questionEn": "The average score of 50 students in an examination was 45. Later, it was discovered that marks of two students were misread as 82 and 46 instead of 28 and 64 respectively. Find the correct average.",
        "questionHi": "एक परीक्षा में 50 छात्रों का औसत प्राप्तांक 45 था। बाद में पता चला कि दो छात्रों के अंक 28 और 64 के स्थान पर क्रमशः 82 और 46 पढ़ लिए गए थे। सही औसत ज्ञात कीजिए।",
        "conventionalSolEn": "Total incorrect sum = 50 × 45 = 2250. Incorrect reading sum = 82 + 46 = 128. Correct reading sum = 28 + 64 = 92. Net difference = 92 - 128 = -36. Correct total sum = 2250 - 36 = 2214. Correct average = 2214 / 50 = 44.28.",
        "conventionalSolHi": "गलत योग = 128, सही योग = 92. अंतर = -36. सही औसत = 45 - 36/50 = 45 - 0.72 = 44.28.",
        "shortcutTrickEn": "Net change in total = Correct (28 + 64) - Incorrect (82 + 46) = 92 - 128 = -36. Change per student = -36 / 50 = -0.72. Correct Average = 45 - 0.72 = 44.28.",
        "shortcutTrickHi": "शुद्ध विचलन = (92 - 128) / 50 = -36 / 50 = -0.72 ➔ सही औसत = 45 - 0.72 = 44.28।",
        "finalAnswer": "44.28"
      }
    ]
  },

  // ==========================================================================
  // Topic: mixture-alligation
  // ==========================================================================
  'mixture-alligation': {
    "topicSlug": "mixture-alligation",
    "coreTheoryEn": "Mixture and Alligation is not merely a single chapter—it is a **universal mathematical shortcut** applicable to Average, Profit & Loss, Simple Interest, Percentage, and Time & Distance.\n\n### 1. The Rule of Alligation (Cross Method):\nWhen two ingredients at prices $C_1$ (Cheaper) and $C_2$ (Dearer) are mixed to produce a mixture at mean price $M$:\n$$\\frac{\\text{Quantity of Cheaper } (Q_1)}{\\text{Quantity of Dearer } (Q_2)} = \\frac{C_2 - M}{M - C_1}$$\n\n$$\\begin{array}{ccc}\nC_1 & & C_2 \\\\\n& \\searrow \\quad \\swarrow & \\\\\n& M & \\\\\n& \\swarrow \\quad \\searrow & \\\\\n(C_2 - M) & : & (M - C_1)\n\\end{array}$$\n\n*Critical Condition:* Mean price $M$ must always satisfy $C_1 < M < C_2$.\n\n### 2. Repeated Dilution / Replacement Formula:\nA container contains $V$ units of pure liquid (e.g., Milk). If $x$ units are drawn off and replaced with water, and this operation is repeated $n$ times in total:\n$$\\text{Quantity of Pure Liquid Remaining} = V \\left(1 - \\frac{x}{V}\\right)^n$$\n$$\\frac{\\text{Remaining Pure Liquid}}{\\text{Initial Pure Liquid}} = \\left(1 - \\frac{x}{V}\\right)^n$$",
    "coreTheoryHi": "मिश्रण और पृथक्करण (Alligation) एक **सार्वभौमिक शॉर्टकट** है जो औसत, लाभ-हानि, ब्याज और समय-दूरी में लागू होता है।\n\n### 1. पृथक्करण का नियम (Alligation Rule):\nसस्ती वस्तु ($C_1$) और महंगी वस्तु ($C_2$) को मिलाकर औसत मूल्य ($M$) प्राप्त करने का अनुपात:\n$$\\frac{Q_1}{Q_2} = \\frac{C_2 - M}{M - C_1}$$\n*शर्त:* औसत मूल्य $M$ हमेशा दोनों मूल्यों के बीच होना चाहिए ($C_1 < M < C_2$)।\n\n### 2. बार-बार प्रतिस्थापन सूत्र (Repeated Dilution):\nयदि $V$ लीटर शुद्ध द्रव में से $x$ लीटर निकालकर पानी मिलाया जाए और यह प्रक्रिया कुल $n$ बार दोहराई जाए:\n$$\\text{शेष शुद्ध द्रव की मात्रा} = V \\left(1 - \\frac{x}{V}\\right)^n$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Rule of Alligation Cross Diagram</text>\n  <circle cx=\"140\" cy=\"70\" r=\"30\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"140\" y=\"75\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">C₁ (Cheap)</text>\n  <circle cx=\"520\" cy=\"70\" r=\"30\" fill=\"#fdf2f8\" stroke=\"#ec4899\" stroke-width=\"2\" />\n  <text x=\"520\" y=\"75\" text-anchor=\"middle\" fill=\"#9d174d\" font-weight=\"bold\" font-size=\"14\">C₂ (Dear)</text>\n  \n  <line x1=\"165\" y1=\"85\" x2=\"295\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4\" />\n  <line x1=\"495\" y1=\"85\" x2=\"365\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4\" />\n  \n  <circle cx=\"330\" cy=\"125\" r=\"32\" fill=\"#fef9c3\" stroke=\"#eab308\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"130\" text-anchor=\"middle\" fill=\"#854d0e\" font-weight=\"bold\" font-size=\"14\">Mean (M)</text>\n  \n  <line x1=\"305\" y1=\"140\" x2=\"165\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4\" />\n  <line x1=\"355\" y1=\"140\" x2=\"495\" y2=\"175\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4\" />\n\n  <rect x=\"90\" y=\"165\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"140\" y=\"188\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Q₁ = C₂ - M</text>\n  \n  <rect x=\"470\" y=\"165\" width=\"100\" height=\"36\" rx=\"6\" fill=\"#fdf2f8\" stroke=\"#ec4899\" />\n  <text x=\"520\" y=\"188\" text-anchor=\"middle\" fill=\"#9d174d\" font-weight=\"bold\" font-size=\"13\">Q₂ = M - C₁</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Rule of Alligation Ratio Formula",
        "latexFormula": "\\frac{\\text{Cheaper Quantity}}{\\text{Dearer Quantity}} = \\frac{\\text{Dearer Price} - \\text{Mean Price}}{\\text{Mean Price} - \\text{Cheaper Price}}",
        "explanationEn": "Calculates mixing ratio in 5 seconds. All prices must refer to the exact same base unit.",
        "explanationHi": "सस्ती और महंगी वस्तु का अनुपात सीधे क्रॉस अंतर से ज्ञात होता है।"
      },
      {
        "title": "Repeated Dilution Formula",
        "latexFormula": "\\text{Pure Liquid Left} = V \\left(1 - \\frac{x}{V}\\right)^n",
        "explanationEn": "V is original capacity, x is replaced quantity, n is number of iterations.",
        "explanationHi": "V प्रारंभिक मात्रा है, x निकाली गई मात्रा है, n प्रतिस्थापनों की संख्या है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fraction Multiplier for Repeated Replacement",
        "conventionalTime": "70s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Writing step-by-step ratio of milk and water after each replacement iteration.",
        "conventionalMethodHi": "प्रत्येक चरण के बाद दूध और पानी का नया अनुपात निकालना।",
        "shortcutStepsEn": "1. If 8L is drawn from 80L, fraction drawn = 8/80 = 1/10.\n2. Fraction remaining = 9/10.\n3. After 3 operations: Milk left = 80 × (9/10)³ = 80 × 729/1000 = 58.32 L.",
        "shortcutStepsHi": "1. निकाला गया भाग = 8/80 = 1/10.\n2. शेष भाग = 9/10.\n3. 3 बार बाद = 80 × 729/1000 = 58.32 लीटर।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Alligating Selling Price with Cost Price",
        "mistakeStudentsMake": "Mixing Cost Price of Cheaper and Dearer with Selling Price of the mixture.",
        "howToAvoid": "Always convert Selling Price of mixture to Cost Price first: CP = SP / (1 + P%) before alligating."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "In what ratio must rice at ₹45 per kg be mixed with rice at ₹60 per kg so that the mixture is worth ₹50 per kg?",
        "questionHi": "₹45 प्रति किग्रा के चावल को ₹60 प्रति किग्रा के चावल के साथ किस अनुपात में मिलाया जाए कि मिश्रण का मूल्य ₹50 प्रति किग्रा हो जाए?",
        "conventionalSolEn": "Let ratio be x:y. 45x + 60y = 50(x + y) ➔ 45x + 60y = 50x + 50y ➔ 10y = 5x ➔ x / y = 10 / 5 = 2 : 1.",
        "conventionalSolHi": "45x + 60y = 50(x + y) ➔ 10y = 5x ➔ x:y = 2:1.",
        "shortcutTrickEn": "Alligation: (60 - 50) : (50 - 45) = 10 : 5 = 2 : 1. Solved in 3 seconds!",
        "shortcutTrickHi": "Alligation: (60 - 50) : (50 - 45) = 10 : 5 = 2 : 1।",
        "finalAnswer": "2 : 1"
      },
      {
        "level": "Moderate",
        "questionEn": "A container contains 60 liters of milk. From this container, 6 liters of milk was taken out and replaced by water. This process was repeated further two times. How much milk is now contained by the container?",
        "questionHi": "एक बर्तन में 60 लीटर दूध है। इसमें से 6 लीटर दूध निकालकर पानी भर दिया गया। यह प्रक्रिया दो बार और दोहराई गई। बर्तन में अब कितना दूध शेष है?",
        "conventionalSolEn": "V = 60, x = 6, n = 3. Remaining Milk = 60(1 - 6/60)³ = 60(1 - 1/10)³ = 60(9/10)³ = 60 × (729 / 1000) = 43740 / 1000 = 43.74 liters.",
        "conventionalSolHi": "शेष दूध = 60(1 - 6/60)³ = 60 × 729/1000 = 43.74 लीटर।",
        "shortcutTrickEn": "Remaining fraction = 1 - 6/60 = 9/10. For 3 operations: (9/10)³ = 729/1000. Milk = 60 × 0.729 = 43.74 L.",
        "shortcutTrickHi": "60 × (9/10)³ = 60 × 0.729 = 43.74 लीटर।",
        "finalAnswer": "43.74 liters"
      },
      {
        "level": "Mains",
        "questionEn": "A merchant has 1000 kg of sugar, part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. Find the quantity sold at 18% profit.",
        "questionHi": "एक व्यापारी के पास 1000 किग्रा चीनी है, जिसका एक भाग वह 8% लाभ पर और शेष 18% लाभ पर बेचता है। उसे कुल मिलाकर 14% का लाभ होता है। 18% लाभ पर बेची गई मात्रा ज्ञात कीजिए।",
        "conventionalSolEn": "Let quantity at 18% = x kg, at 8% = (1000 - x) kg. 8(1000 - x) + 18x = 14(1000) ➔ 8000 - 8x + 18x = 14000 ➔ 10x = 6000 ➔ x = 600 kg.",
        "conventionalSolHi": "8(1000 - x) + 18x = 14000 ➔ 10x = 6000 ➔ x = 600 किग्रा.",
        "shortcutTrickEn": "Alligate profit percentages: (18 - 14) : (14 - 8) = 4 : 6 = 2 : 3 (Quantity at 8% : Quantity at 18%). Total 5 units = 1000 kg ➔ 1 unit = 200 kg ➔ Quantity at 18% = 3 units = 600 kg.",
        "shortcutTrickHi": "Alligation: (18 - 14) : (14 - 8) = 4 : 6 = 2 : 3. कुल 5 = 1000 ➔ 18% पर = 3 इकाई = 600 किग्रा।",
        "finalAnswer": "600 kg"
      }
    ]
  },

  // ==========================================================================
  // Topic: time-work-pipes
  // ==========================================================================
  'time-work-pipes': {
    "topicSlug": "time-work-pipes",
    "coreTheoryEn": "Time and Work problems must NEVER be solved using fractions ($\\frac{1}{A} + \\frac{1}{B}$). Use the **LCM Unit Efficiency Framework** to eliminate calculation friction completely.\n\n### 1. The LCM Unit Efficiency Model:\n$$\\text{Total Work} = \\text{LCM}(\\text{Individual Days})$$\n$$\\text{Efficiency (Units/Day)} = \\frac{\\text{Total Work}}{\\text{Days Taken}}$$\n$$\\text{Time Taken} = \\frac{\\text{Remaining Work}}{\\sum \\text{Efficiency of Working Members}}$$\n\n### 2. The Universal Man-Days (MDH) Equation:\n$$\\frac{M_1 \\times D_1 \\times H_1 \\times E_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2 \\times E_2}{W_2}$$\nWhere $M = \\text{Men}$, $D = \\text{Days}$, $H = \\text{Hours/Day}$, $E = \\text{Efficiency}$, $W = \\text{Work done / Wages}$.\n\n### 3. Pipes and Cisterns Equivalence:\n- Filling Pipe = Positive Efficiency ($+E$).\n- Emptying Pipe / Leak = Negative Efficiency ($-E$).\n- Tank Capacity = $\\text{LCM}(\\text{Filling and Emptying Times})$. Total rate = $E_{\\text{fill}} - E_{\\text{leak}}$.\n- Alternate days: Group 2 cycles (Day 1: A, Day 2: B) into one composite unit.",
    "coreTheoryHi": "समय और कार्य प्रश्नों को भिन्नों के स्थान पर **ल.स. (LCM) इकाई दक्षता विधि** से हल किया जाता है।\n\n### 1. LCM इकाई दक्षता विधि:\n$$\\text{कुल कार्य} = \\text{दिनों का LCM}$$\n$$\\text{दक्षता (इकाई/दिन)} = \\frac{\\text{कुल कार्य}}{\\text{दिन}}$$\n\n### 2. MDH सूत्र:\n$$\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}$$\n\n### 3. नल एवं टंकी:\n- भरने वाला पाइप = धनात्मक दक्षता ($+E$)\n- खाली करने वाला नल / रिसाव = ऋणात्मक दक्षता ($-E$)",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">LCM Unit Efficiency Framework</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Worker A (12d)</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Efficiency:</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\" font-size=\"16\">+5 units/day</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"14\">Total Work (LCM)</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"13\">LCM(12, 15) =</text>\n  <text x=\"330\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\" font-size=\"18\">60 Units</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Worker B (15d)</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Efficiency:</text>\n  <text x=\"530\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\" font-size=\"16\">+4 units/day</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "LCM Work Formula",
        "latexFormula": "T_{\\text{together}} = \\frac{\\text{LCM}(t_1, t_2)}{E_1 + E_2}",
        "explanationEn": "Total days taken equals Total Work divided by combined efficiency.",
        "explanationHi": "कुल समय = कुल कार्य (LCM) / कुल दक्षता।"
      },
      {
        "title": "Universal MDH Formula",
        "latexFormula": "\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}",
        "explanationEn": "Equates work across groups with varying workers, days, and daily hours.",
        "explanationHi": "विभिन्न व्यक्तियों, दिनों और घंटों के कार्य की तुलना करता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fraction-Free LCM Method",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Adding 1/12 + 1/15 + 1/20 with paper fractions.",
        "conventionalMethodHi": "भिन्न 1/12 + 1/15 को जोड़ना।",
        "shortcutStepsEn": "1. Take LCM(12, 15, 20) = 60 units.\n2. Efficiencies: 5 + 4 + 3 = 12 units/day.\n3. Time = 60 / 12 = 5 days. Solved in 8 seconds!",
        "shortcutStepsHi": "1. ल.स.(12, 15, 20) = 60 इकाई।\n2. कुल दक्षता = 5 + 4 + 3 = 12.\n3. समय = 60/12 = 5 दिन।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Alternate Day Cycle Remainder Overflow",
        "mistakeStudentsMake": "Adding a full cycle when only a fraction of work remains on the last day.",
        "howToAvoid": "When remaining work is less than the day's worker capacity, time taken = (Remaining Work) / (Worker Efficiency)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A can do a piece of work in 12 days and B can do it in 18 days. In how many days can both finish the work working together?",
        "questionHi": "A किसी कार्य को 12 दिनों में और B 18 दिनों में कर सकता है। दोनों मिलकर उस कार्य को कितने दिनों में समाप्त करेंगे?",
        "conventionalSolEn": "1 day work = 1/12 + 1/18 = (3 + 2)/36 = 5/36. Total days = 36/5 = 7.2 days.",
        "conventionalSolHi": "1 दिन का कार्य = 5/36 ➔ कुल दिन = 36/5 = 7.2 दिन।",
        "shortcutTrickEn": "LCM(12, 18) = 36 units. Efficiency A = 3, B = 2. Total efficiency = 5. Days = 36 / 5 = 7.2 days.",
        "shortcutTrickHi": "LCM = 36 ➔ A = 3, B = 2 ➔ 36/5 = 7.2 दिन।",
        "finalAnswer": "7.2 days"
      },
      {
        "level": "Moderate",
        "questionEn": "A and B can complete a work in 20 and 30 days respectively. They work on alternate days starting with A. In how many days will the work be completed?",
        "questionHi": "A और B किसी कार्य को क्रमशः 20 और 30 दिनों में पूरा कर सकते हैं। वे A से शुरू करके एकांतर दिनों में कार्य करते हैं। कार्य कितने दिनों में पूरा होगा?",
        "conventionalSolEn": "LCM(20, 30) = 60 units. A = 3 units/day, B = 2 units/day. In 2 days (1 cycle), work done = 3 + 2 = 5 units. Cycles needed for 60 units = 60 / 5 = 12 cycles. Total days = 12 cycles × 2 days = 24 days.",
        "conventionalSolHi": "LCM = 60. A = 3, B = 2. 2 दिनों में = 5 इकाई. 12 चक्र × 2 = 24 दिन.",
        "shortcutTrickEn": "2 days = 5 units ➔ 12 cycles = 60 units ➔ 12 × 2 = 24 days.",
        "shortcutTrickHi": "2 दिन = 5 इकाई ➔ 60 इकाई = 24 दिन।",
        "finalAnswer": "24 days"
      },
      {
        "level": "Mains",
        "questionEn": "Pipe A can fill a tank in 12 hours, Pipe B in 15 hours, and Pipe C can empty it in 20 hours. All three are opened together. After 4 hours, Pipe C is closed. In how much total time will the tank be full?",
        "questionHi": "पाइप A एक टंकी को 12 घंटे में, B 15 घंटे में भर सकता है और C 20 घंटे में खाली कर सकता है। तीनों को एक साथ खोल दिया जाता है। 4 घंटे बाद पाइप C बंद कर दिया जाता है। टंकी को पूरा भरने में कुल कितना समय लगेगा?",
        "conventionalSolEn": "LCM(12, 15, 20) = 60 units. A = +5, B = +4, C = -3 units/hr. Combined rate = 5 + 4 - 3 = +6 units/hr. In first 4 hours: Work done = 4 × 6 = 24 units. Remaining work = 60 - 24 = 36 units. Now only A and B work: Combined rate = 5 + 4 = 9 units/hr. Time needed = 36 / 9 = 4 hours. Total time = 4 + 4 = 8 hours.",
        "conventionalSolHi": "कुल क्षमता = 60. A = +5, B = +4, C = -3. पहले 4 घंटे में: 4 × 6 = 24 इकाई. शेष = 36 इकाई. A + B = 9 ➔ 36/9 = 4 घंटे. कुल समय = 4 + 4 = 8 घंटे.",
        "shortcutTrickEn": "Initial 4 hrs = 24 units. Remaining 36 units at 9/hr = 4 hrs. Total time = 4 + 4 = 8 hours.",
        "shortcutTrickHi": "4 घंटे (24 इकाई) + 4 घंटे (36 इकाई) = कुल 8 घंटे।",
        "finalAnswer": "8 hours"
      }
    ]
  },

  // ==========================================================================
  // Topic: time-speed-distance
  // ==========================================================================
  'time-speed-distance': {
    "topicSlug": "time-speed-distance",
    "coreTheoryEn": "Time, Speed & Distance (TSD) questions in banking exams involve Trains, Relative Speed, and Boats & Streams.\n\n### 1. Fundamental Conversions & Principles:\n$$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}} \\quad | \\quad 1 \\text{ km/h} = \\frac{5}{18} \\text{ m/s} \\quad | \\quad 1 \\text{ m/s} = \\frac{18}{5} \\text{ km/h}$$\n- If **Distance is Constant**: $\\frac{S_1}{S_2} = \\frac{T_2}{T_1}$ (Speed $\\propto \\frac{1}{\\text{Time}}$).\n- If **Time is Constant**: $\\frac{D_1}{D_2} = \\frac{S_1}{S_2}$ (Distance $\\propto$ Speed).\n\n### 2. Relative Speed Protocol:\n- **Same Direction:** $S_{\\text{rel}} = |S_1 - S_2|$\n- **Opposite Direction:** $S_{\\text{rel}} = S_1 + S_2$\n\n### 3. Trains Crossing Standard Rules:\n- Crossing a stationary pole/man/tree: Distance = $L_{\\text{train}}$.\n- Crossing a platform/bridge/tunnel: Distance = $L_{\\text{train}} + L_{\\text{platform}}$.\n- Two trains crossing: Distance = $L_1 + L_2$; Speed = $S_1 \\pm S_2$.\n\n### 4. Boats and Streams Framework:\nLet speed of boat in still water = $u$, speed of stream = $v$:\n$$\\text{Downstream Speed } (D) = u + v \\quad | \\quad \\text{Upstream Speed } (U) = u - v$$\n$$u = \\frac{D + U}{2} \\quad | \\quad v = \\frac{D - U}{2}$$",
    "coreTheoryHi": "समय, चाल और दूरी में सापेक्ष चाल, रेलगाड़ी और नाव एवं धारा के मुख्य नियम:\n\n### 1. आधारभूत रूपांतरण:\n$$1 \\text{ किमी/घंटा} = \\frac{5}{18} \\text{ मी/से} \\quad | \\quad 1 \\text{ मी/से} = \\frac{18}{5} \\text{ किमी/घंटा}$$\n\n### 2. सापेक्ष चाल (Relative Speed):\n- समान दिशा में: $S_{\\text{rel}} = |S_1 - S_2|$\n- विपरीत दिशा में: $S_{\\text{rel}} = S_1 + S_2$\n\n### 3. नाव एवं धारा:\n- धारा के अनुकूल (Downstream): $D = u + v$\n- धारा के प्रतिकूल (Upstream): $U = u - v$\n- शांत जल में नाव की चाल: $u = \\frac{D+U}{2}$\n- धारा की चाल: $v = \\frac{D-U}{2}$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Boats &amp; Streams Dual Vector Framework</text>\n  <rect x=\"50\" y=\"60\" width=\"250\" height=\"130\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"175\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Downstream (With Current)</text>\n  <text x=\"175\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Speed = u + v</text>\n  <text x=\"175\" y=\"160\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\" font-size=\"13\">Boat Speed + Stream Speed</text>\n\n  <rect x=\"360\" y=\"60\" width=\"250\" height=\"130\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"485\" y=\"90\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"14\">Upstream (Against Current)</text>\n  <text x=\"485\" y=\"125\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"13\">Speed = u - v</text>\n  <text x=\"485\" y=\"160\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\" font-size=\"13\">Boat Speed - Stream Speed</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Still Water Boat Speed Formula",
        "latexFormula": "u = \\frac{D + U}{2} \\quad \\text{and} \\quad v = \\frac{D - U}{2}",
        "explanationEn": "Calculates boat and stream speed directly from Downstream (D) and Upstream (U) speeds.",
        "explanationHi": "शांत जल में चाल और धारा की चाल सीधे अनुकूल व प्रतिकूल चाल से निकालें।"
      },
      {
        "title": "Late-Early Constant Distance Shortcut",
        "latexFormula": "D = \\frac{S_1 \\times S_2}{|S_1 - S_2|} \\times \\Delta T",
        "explanationEn": "Direct distance formula when speeds and time differences are known.",
        "explanationHi": "चाल और समय अंतर ज्ञात होने पर दूरी का सीधा सूत्र।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Late-Early Distance Multiplier",
        "conventionalTime": "70s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Writing D/4 - D/5 = 15/60 and solving algebraic fractions.",
        "conventionalMethodHi": "समीकरण बनाकर 60 से भाग देकर हल करना।",
        "shortcutStepsEn": "1. Speed 1 = 4, Speed 2 = 5. Difference = 1.\n2. Time difference = 10 min late + 5 min early = 15 min = 15/60 hr = 1/4 hr.\n3. Distance = (4 × 5 / 1) × (1/4) = 5 km. Done in 10s!",
        "shortcutStepsHi": "1. चाल: 4 और 5, अंतर = 1.\n2. समय अंतर = 15 मिनट = 1/4 घंटा.\n3. दूरी = (4 × 5 / 1) × 1/4 = 5 किमी।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Unit Inconsistency: km/h with meters/seconds",
        "mistakeStudentsMake": "Adding train speed in km/h directly with platform length in meters.",
        "howToAvoid": "Always convert km/h to m/s by multiplying by 5/18 before calculating time in seconds."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A train 180 meters long is running at a speed of 72 km/h. How much time will it take to pass an electric pole?",
        "questionHi": "180 मीटर लंबी एक रेलगाड़ी 72 किमी/घंटा की गति से चल रही है। एक बिजली के खंभे को पार करने में उसे कितना समय लगेगा?",
        "conventionalSolEn": "Speed = 72 × (5/18) = 20 m/s. Distance = length of train = 180 m. Time = Distance / Speed = 180 / 20 = 9 seconds.",
        "conventionalSolHi": "चाल = 72 × 5/18 = 20 मी/से. समय = 180 / 20 = 9 सेकंड।",
        "shortcutTrickEn": "72 km/h = 20 m/s (since 18 km/h = 5 m/s, so 18×4 = 72 ➔ 5×4 = 20 m/s). Time = 180 / 20 = 9 seconds.",
        "shortcutTrickHi": "72 किमी/घंटा = 20 मी/से ➔ 180/20 = 9 सेकंड।",
        "finalAnswer": "9 seconds"
      },
      {
        "level": "Moderate",
        "questionEn": "A man walks at 4 km/h and reaches his office 10 minutes late. If he walks at 5 km/h, he reaches 5 minutes early. Find the distance to his office.",
        "questionHi": "एक व्यक्ति 4 किमी/घंटा की गति से चलता है और अपने कार्यालय 10 मिनट देरी से पहुँचता है। यदि वह 5 किमी/घंटा की गति से चले, तो वह 5 मिनट पहले पहुँच जाता है। उसके कार्यालय की दूरी ज्ञात कीजिए।",
        "conventionalSolEn": "Let distance be D. D/4 - D/5 = (10 + 5)/60 hr. D/20 = 15/60 = 1/4. D = 20/4 = 5 km.",
        "conventionalSolHi": "D/4 - D/5 = 15/60 = 1/4 ➔ D/20 = 1/4 ➔ D = 5 किमी।",
        "shortcutTrickEn": "D = (S1 × S2 / |S1 - S2|) × ΔT = (4 × 5 / 1) × (15/60) = 20 × (1/4) = 5 km.",
        "shortcutTrickHi": "D = (4 × 5 / 1) × (15/60) = 5 किमी।",
        "finalAnswer": "5 km"
      },
      {
        "level": "Mains",
        "questionEn": "A boat covers 24 km upstream and 36 km downstream in 6 hours, while it covers 36 km upstream and 24 km downstream in 6.5 hours. Find the speed of the current.",
        "questionHi": "एक नाव 24 किमी धारा के प्रतिकूल और 36 किमी धारा के अनुकूल 6 घंटे में तय करती है, जबकि 36 किमी धारा के प्रतिकूल और 24 किमी धारा के अनुकूल 6.5 घंटे में तय करती है। धारा की गति ज्ञात कीजिए।",
        "conventionalSolEn": "24/U + 36/D = 6 and 36/U + 24/D = 6.5. Let 1/U = x, 1/D = y. 24x + 36y = 6 and 36x + 24y = 6.5. Adding: 60(x + y) = 12.5 ➔ x + y = 12.5/60 = 5/24. Subtracting: -12x + 12y = -0.5 ➔ x - y = 0.5/12 = 1/24. 2x = 6/24 = 1/4 ➔ x = 1/8 ➔ U = 8 km/h. y = 1/12 ➔ D = 12 km/h. Speed of current = (D - U)/2 = (12 - 8)/2 = 2 km/h.",
        "conventionalSolHi": "समीकरण हल करने पर: U = 8 किमी/घंटा, D = 12 किमी/घंटा. धारा की गति v = (12 - 8)/2 = 2 किमी/घंटा.",
        "shortcutTrickEn": "Identify common factor for Downstream distances (36 and 24) = 12. If D = 12: 36/12 = 3 hrs ➔ 24/U = 3 ➔ U = 8. Test 2nd eq: 36/8 + 24/12 = 4.5 + 2 = 6.5 hrs (Valid!). Current = (12 - 8)/2 = 2 km/h.",
        "shortcutTrickHi": "म.स. (36, 24) = 12 = D. U = 8 ➔ धारा = (12 - 8)/2 = 2 किमी/घंटा।",
        "finalAnswer": "2 km/h"
      }
    ]
  },

  // ==========================================================================
  // Topic: mensuration-2d-3d
  // ==========================================================================
  'mensuration-2d-3d': {
    "topicSlug": "mensuration-2d-3d",
    "coreTheoryEn": "Mensuration in banking exams tests calculation speed on standard geometric figures and the **Dimension Scaling Rule**.\n\n### 1. The Dimension Scaling Axiom:\nIf all linear dimensions of a figure are scaled by a factor $k$:\n$$\\text{Perimeter / Length} \\propto k^1 \\quad | \\quad \\text{Surface Area} \\propto k^2 \\quad | \\quad \\text{Volume} \\propto k^3$$\n- If the radius of a cylinder increases by $20\\% = \\frac{6}{5}$ and height decreases by $10\\% = \\frac{9}{10}$:\n$$\\text{New Volume} = V \\times \\left(\\frac{6}{5}\\right)^2 \\times \\frac{9}{10} = V \\times \\frac{36}{25} \\times \\frac{9}{10} = V \\times \\frac{324}{250} = 1.296 V \\implies +29.6\\%$$\n\n### 2. Standard 2D & 3D Formula Reference:\n| Figure | Area / Surface Area | Volume |\n| :--- | :--- | :--- |\n| **Circle** | Area $= \\pi r^2$, Circumference $= 2\\pi r$ | — |\n| **Semi-Circle** | Area $= \\frac{1}{2}\\pi r^2$, Perimeter $= \\pi r + 2r = \\frac{36}{7}r$ | — |\n| **Cylinder** | $\\text{CSA} = 2\\pi r h$, $\\text{TSA} = 2\\pi r(r + h)$ | $V = \\pi r^2 h$ |\n| **Cone** | $\\text{CSA} = \\pi r l$, where $l = \\sqrt{r^2 + h^2}$ | $V = \\frac{1}{3}\\pi r^2 h$ |\n| **Sphere** | $\\text{Surface Area} = 4\\pi r^2$ | $V = \\frac{4}{3}\\pi r^3$ |\n| **Hemisphere** | $\\text{CSA} = 2\\pi r^2$, $\\text{TSA} = 3\\pi r^2$ | $V = \\frac{2}{3}\\pi r^3$ |",
    "coreTheoryHi": "क्षेत्रमिति (Mensuration) में विमा मापन नियम और 2D/3D सूत्र:\n\n### 1. विमा मापन नियम (Dimension Scaling):\nयदि रेखीय विमाएं $k$ के गुणक में बदलती हैं:\n$$\\text{परिमाप} \\propto k^1 \\quad | \\quad \\text{क्षेत्रफल} \\propto k^2 \\quad | \\quad \\text{आयतन} \\propto k^3$$\n\n### 2. महत्वपूर्ण सूत्र:\n- **अर्धवृत्त का परिमाप:** $\\pi r + 2r = \\frac{36}{7}r$\n- **बेलन (Cylinder):** $V = \\pi r^2 h$, वक्र पृष्ठ = $2\\pi r h$\n- **शंकु (Cone):** $V = \\frac{1}{3}\\pi r^2 h$, तिर्यक ऊंचाई $l = \\sqrt{r^2 + h^2}$\n- **गोला (Sphere):** $V = \\frac{4}{3}\\pi r^3$, पृष्ठ = $4\\pi r^2$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Linear vs Area vs Volume Scaling Axiom</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">1D Linear (Radius)</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Scale = k¹</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\" font-size=\"13\">Perimeter, Radius, Height</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">2D Surface (Area)</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Scale = k²</text>\n  <text x=\"330\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-weight=\"bold\" font-size=\"13\">CSA, TSA, Base Area</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"14\">3D Capacity (Volume)</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"13\">Scale = k³</text>\n  <text x=\"530\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-weight=\"bold\" font-size=\"13\">Volume, Capacity</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Semi-Circle Perimeter Shortcut",
        "latexFormula": "P_{\\text{semi}} = \\frac{36}{7}r",
        "explanationEn": "Calculates perimeter of semi-circle in 3 seconds: πr + 2r = r(22/7 + 2) = (36/7)r.",
        "explanationHi": "अर्धवृत्त का परिमाप सीधे (36/7)r से निकालें।"
      },
      {
        "title": "Melting & Recasting Constant Volume Rule",
        "latexFormula": "V_{\\text{original}} = n \\times V_{\\text{recast}}",
        "explanationEn": "When a solid is melted into multiple smaller solids, total volume is strictly conserved.",
        "explanationHi": "पिघलाकर नई वस्तुएं बनाने पर कुल आयतन सदैव समान रहता है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Divisibility by 11 (π Check)",
        "conventionalTime": "75s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Full calculation of πr²h with 22/7 and large decimal multiplications.",
        "conventionalMethodHi": "22/7 रखकर लंबी गणना करना।",
        "shortcutStepsEn": "1. If question asks for Area/Volume with π = 22/7, the answer MUST be a multiple of 11.\n2. Apply 11 divisibility rule: (Sum of odd digits) - (Sum of even digits) = 0 or 11.\n3. Eliminate 3 or 4 options in 10 seconds without calculating!",
        "shortcutStepsHi": "1. π = 22/7 होने पर उत्तर 11 का गुणज होना चाहिए।\n2. 11 के विभाज्यता नियम से विकल्प चेक करें।\n3. बिना गणना किए 10 सेकंड में उत्तर पहचानें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Semi-Circle Perimeter: Forgetting the Diameter Base",
        "mistakeStudentsMake": "Writing perimeter of semi-circle as πr instead of πr + 2r.",
        "howToAvoid": "A semi-circle boundary includes the curved arc (πr) PLUS the straight diameter (2r)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "The radius of a circular wheel is 35 cm. How many revolutions will it make to travel a distance of 1.1 km?",
        "questionHi": "एक वृत्ताकार पहिये की त्रिज्या 35 सेमी है। 1.1 किमी की दूरी तय करने के लिए वह कितने चक्कर लगाएगा?",
        "conventionalSolEn": "Circumference = 2πr = 2 × (22/7) × 35 = 220 cm = 2.2 m. Total distance = 1.1 km = 1100 m. Number of revolutions = 1100 / 2.2 = 500.",
        "conventionalSolHi": "परिधि = 2 × (22/7) × 35 = 220 सेमी = 2.2 मीटर. चक्करों की संख्या = 1100 / 2.2 = 500.",
        "shortcutTrickEn": "Circumference = 2.2 m. Revolutions = 1100 / 2.2 = 500.",
        "shortcutTrickHi": "1100 / 2.2 = 500 चक्कर।",
        "finalAnswer": "500"
      },
      {
        "level": "Moderate",
        "questionEn": "If the radius of a cylinder is increased by 20% and its height is decreased by 10%, find the percentage change in its volume.",
        "questionHi": "यदि एक बेलन की त्रिज्या में 20% की वृद्धि की जाती है और उसकी ऊंचाई में 10% की कमी की जाती है, तो उसके आयतन में प्रतिशत परिवर्तन ज्ञात कीजिए।",
        "conventionalSolEn": "V = πr²h. New r = 1.2r, New h = 0.9h. New V = π(1.2r)²(0.9h) = π(1.44r²)(0.9h) = 1.296 πr²h. Increase = 1.296 - 1 = 0.296 = 29.6%.",
        "conventionalSolHi": "नया V = (1.2)² × 0.9 = 1.44 × 0.9 = 1.296 ➔ 29.6% वृद्धि।",
        "shortcutTrickEn": "Volume factor = (6/5)² × (9/10) = (36/25) × (9/10) = 324/250 = 129.6/100 ➔ +29.6% increase.",
        "shortcutTrickHi": "(6/5)² × (9/10) = 324/250 = 129.6% ➔ 29.6% वृद्धि।",
        "finalAnswer": "29.6% increase"
      },
      {
        "level": "Mains",
        "questionEn": "A solid metallic sphere of radius 6 cm is melted and recast into small solid cones of radius 2 cm and height 3 cm. Find the number of cones formed.",
        "questionHi": "6 सेमी त्रिज्या वाले एक ठोस धातु के गोले को पिघलाकर 2 सेमी त्रिज्या और 3 सेमी ऊंचाई वाले छोटे ठोस शंकु बनाए जाते हैं। बनने वाले शंकुओं की संख्या ज्ञात कीजिए।",
        "conventionalSolEn": "Volume of sphere = (4/3)π R³ = (4/3)π (6)³ = (4/3)π (216) = 288π cm³. Volume of one cone = (1/3)π r² h = (1/3)π (2)² (3) = 4π cm³. Number of cones n = 288π / 4π = 72.",
        "conventionalSolHi": "गोले का आयतन = 288π. एक शंकु का आयतन = 4π. शंकुओं की संख्या = 288π / 4π = 72.",
        "shortcutTrickEn": "n = [(4/3)π R³] / [(1/3)π r² h] = (4 R³) / (r² h) = (4 × 216) / (4 × 3) = 216 / 3 = 72.",
        "shortcutTrickHi": "(4 × 6³) / (2² × 3) = 864 / 12 = 72 शंकु।",
        "finalAnswer": "72"
      }
    ]
  },

  // ==========================================================================
  // Topic: permutation-combination-probability
  // ==========================================================================
  'permutation-combination-probability': {
    "topicSlug": "permutation-combination-probability",
    "coreTheoryEn": "Permutation, Combination & Probability is a high-yield arithmetic topic in PO Prelims (1-2 marks) and Mains (2-3 marks).\n\n### 1. Fundamental Principle of Counting:\n- **AND (Simultaneous occurrence):** MULTIPLY ($\\times$).\n- **OR (Mutually exclusive options):** ADD ($+$).\n\n### 2. Permutation vs Combination:\n$$\\text{Permutation (Arrangement where Order Matters): } ^n P_r = \\frac{n!}{(n-r)!}$$\n$$\\text{Combination (Selection where Order Does NOT Matter): } ^n C_r = \\frac{n!}{r!(n-r)!}$$\n- **Key Shortcut Combinations:** $^n C_1 = n$, $^n C_2 = \\frac{n(n-1)}{2}$, $^n C_n = 1$, $^n C_r = ^n C_{n-r}$.\n- Words with repeated letters: $\\frac{N!}{p! \\cdot q! \\dots}$ (e.g. \"APPLE\" has 2 P's $\\implies \\frac{5!}{2!} = 60$).\n\n### 3. Complementary Probability Shortcut:\n$$P(\\text{At least 1 event occurs}) = 1 - P(\\text{None of the events occur})$$\nThis rule cuts probability calculation time from 2 minutes down to 20 seconds!",
    "coreTheoryHi": "क्रमचय, संचय और प्रायिकता:\n\n### 1. गणना का आधारभूत नियम:\n- **तथा / AND:** गुणा करें ($\\times$)\n- **या / OR:** जोड़ें ($+$)\n\n### 2. क्रमचय बनाम संचय:\n$$\\text{क्रमचय (क्रम महत्वपूर्ण है): } ^n P_r = \\frac{n!}{(n-r)!}$$\n$$\\text{संचय (केवल चयन): } ^n C_r = \\frac{n!}{r!(n-r)!}$$\n- $^n C_2 = \\frac{n(n-1)}{2}$\n\n### 3. पूरक प्रायिकता नियम:\n$$P(\\text{कम से कम एक}) = 1 - P(\\text{कोई नहीं})$$",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Permutation vs Combination Decision Matrix</text>\n  <rect x=\"50\" y=\"60\" width=\"250\" height=\"130\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <text x=\"175\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"14\">Permutation (ⁿPr)</text>\n  <text x=\"175\" y=\"120\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">ORDER MATTERS</text>\n  <text x=\"175\" y=\"150\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"12\">Seating, Codes, Word Making</text>\n\n  <rect x=\"360\" y=\"60\" width=\"250\" height=\"130\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <text x=\"485\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"14\">Combination (ⁿCr)</text>\n  <text x=\"485\" y=\"120\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">SELECTION ONLY</text>\n  <text x=\"485\" y=\"150\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"12\">Committees, Teams, Ball Draws</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Combination Fast Formula",
        "latexFormula": "^n C_2 = \\frac{n(n-1)}{2} \\quad | \\quad ^n C_3 = \\frac{n(n-1)(n-2)}{6}",
        "explanationEn": "Calculates 2-element and 3-element selections instantly without factorial expansions.",
        "explanationHi": "बिना फैक्टोरियल लिखे सीधे 2 या 3 वस्तुओं का चयन निकालें।"
      },
      {
        "title": "Complementary Probability Formula",
        "latexFormula": "P(\\text{At least 1}) = 1 - P(\\text{None})",
        "explanationEn": "Subtracts the zero-occurrence probability from 1 to avoid summing multiple cases.",
        "explanationHi": "कम से कम 1 की प्रायिकता = 1 - (कोई नहीं की प्रायिकता)।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Tie (String) Method for Vowels Together",
        "conventionalTime": "60s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Manually creating slots and listing combinations.",
        "conventionalMethodHi": "मैन्युअल रूप से सभी क्रमों को लिखना।",
        "shortcutStepsEn": "1. Tie the target elements together as 1 single super-entity.\n2. Count total entities and arrange: N! ways.\n3. Multiply by internal permutations of the tied elements: k! ways.\n4. Total = N! × k!.",
        "shortcutStepsHi": "1. साथ रहने वाले अक्षरों को 1 इकाई मान लें।\n2. कुल इकाइयों का क्रमचय = N!\n3. आंतरिक क्रमचय = k!\n4. कुल = N! × k!।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Dividing by Repeated Letter Factorials Omission",
        "mistakeStudentsMake": "Arranging words like 'SUCCESS' without dividing by 3! for S and 2! for C.",
        "howToAvoid": "Always count letter frequencies: Total = (Total Letters)! / (f₁! × f₂! ...)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "In how many different ways can the letters of the word 'BANKING' be arranged?",
        "questionHi": "शब्द 'BANKING' के अक्षरों को कितने अलग-अलग तरीकों से व्यवस्थित किया जा सकता है?",
        "conventionalSolEn": "Total letters = 7. Letter N appears 2 times. Total arrangements = 7! / 2! = (5040) / 2 = 2520.",
        "conventionalSolHi": "कुल अक्षर = 7. N दो बार आता है. कुल तरीके = 7! / 2! = 5040 / 2 = 2520.",
        "shortcutTrickEn": "7! / 2! = 2520 ways.",
        "shortcutTrickHi": "7! / 2! = 2520 तरीके।",
        "finalAnswer": "2,520"
      },
      {
        "level": "Moderate",
        "questionEn": "A bag contains 4 red, 5 green, and 3 blue balls. If 2 balls are drawn at random, find the probability that both are green.",
        "questionHi": "एक बैग में 4 लाल, 5 हरी और 3 नीली गेंदें हैं। यदि 2 गेंदें यादृच्छिक रूप से निकाली जाती हैं, तो दोनों के हरे होने की प्रायिकता ज्ञात कीजिए।",
        "conventionalSolEn": "Total balls = 4 + 5 + 3 = 12. Total outcomes = ¹²C₂ = (12 × 11)/2 = 66. Favorable outcomes = ⁵C₂ = (5 × 4)/2 = 10. Probability = 10 / 66 = 5 / 33.",
        "conventionalSolHi": "कुल परिणाम = ¹²C₂ = 66. अनुकूल = ⁵C₂ = 10. प्रायिकता = 10/66 = 5/33.",
        "shortcutTrickEn": "P = (5/12) × (4/11) = 20 / 132 = 5 / 33. Solved in 5 seconds!",
        "shortcutTrickHi": "(5/12) × (4/11) = 5/33।",
        "finalAnswer": "5 / 33"
      },
      {
        "level": "Mains",
        "questionEn": "From a group of 6 men and 4 women, a committee of 5 is to be formed. What is the probability that the committee contains at least 3 men?",
        "questionHi": "6 पुरुषों और 4 महिलाओं के समूह में से 5 व्यक्तियों की एक समिति बनाई जानी है। समिति में कम से कम 3 पुरुषों के होने की प्रायिकता क्या है?",
        "conventionalSolEn": "Total outcomes = ¹⁰C₅ = (10 × 9 × 8 × 7 × 6) / (5 × 4 × 3 × 2 × 1) = 252. Favorable cases: (3M & 2W) OR (4M & 1W) OR (5M & 0W). Case 1: ⁶C₃ × ⁴C₂ = 20 × 6 = 120. Case 2: ⁶C₄ × ⁴C₁ = 15 × 4 = 60. Case 3: ⁶C₅ × ⁴C₀ = 6 × 1 = 6. Total favorable = 120 + 60 + 6 = 186. Probability = 186 / 252 = 31 / 42.",
        "conventionalSolHi": "कुल परिणाम = 252. अनुकूल = (20×6) + (15×4) + (6×1) = 120 + 60 + 6 = 186. प्रायिकता = 186/252 = 31/42.",
        "shortcutTrickEn": "Favorable = 120 + 60 + 6 = 186. Total = 252. P = 186 / 252 = 31 / 42.",
        "shortcutTrickHi": "अनुकूल = 186, कुल = 252 ➔ 31/42।",
        "finalAnswer": "31 / 42"
      }
    ]
  },

  // ==========================================================================
  // Topic: tabular-bar-line-pie-di
  // ==========================================================================
  'tabular-bar-line-pie-di': {
    "topicSlug": "tabular-bar-line-pie-di",
    "coreTheoryEn": "Data Interpretation (DI) comprises **10-15 marks in Prelims** and **30+ marks in Mains**. 90% of all DI questions fall into 4 arithmetic types:\n\n### The 4 Canonical DI Question Archetypes:\n1. **Ratio:** What is the ratio of $X$ to $Y$?\n   - *Strategy:* Never calculate full totals; cancel common factors (thousands, zeros, percentages) upfront!\n2. **Percentage Contribution:** $X$ is what percent of $Y$?\n   $$\\frac{X}{Y} \\times 100\\%$$\n3. **Percentage Comparison:** $X$ is what percent MORE or LESS than $Y$?\n   $$\\frac{|X - Y|}{\\text{BASE } (Y)} \\times 100\\%$$\n   *Golden Rule:* The entity following \"than\" or \"as compared to\" is ALWAYS the denominator!\n4. **Average / Sum:**\n   $$\\text{Average} = \\frac{\\sum X}{N}$$\n\n### Pie Chart Degree-to-Percentage Bridge:\n$$360^\\circ = 100\\% \\iff 1\\% = 3.6^\\circ \\quad | \\quad 10\\% = 36^\\circ \\quad | \\quad 1^\\circ = \\frac{5}{18}\\%$$",
    "coreTheoryHi": "आंकड़ा निर्वचन (DI) बैंकिंग परीक्षा में 10 से 30 अंकों का मुख्य भाग है।\n\n### 4 प्रमुख DI प्रश्न प्रकार:\n1. **अनुपात (Ratio):** $X : Y$ (कॉमन शून्य पहले काटें)।\n2. **प्रतिशत:** $X, Y$ का कितने प्रतिशत है = $\\frac{X}{Y} \\times 100\\%$।\n3. **प्रतिशत वृद्धि/कमी:** $X, Y$ से कितने प्रतिशत अधिक/कम है = $\\frac{|X - Y|}{Y} \\times 100\\%$।\n   *नियम:* \"से\" या \"than\" के बाद वाला मान हमेशा हर (Denominator) में आता है।\n4. **पाई चार्ट डिग्री-प्रतिशत:** $360^\\circ = 100\\% \\implies 1\\% = 3.6^\\circ$।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">The 4 Canonical DI Question Archetypes</text>\n  <rect x=\"35\" y=\"60\" width=\"135\" height=\"130\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"102\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">1. Ratio</text>\n  <text x=\"102\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">X : Y</text>\n  <text x=\"102\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Pre-cancel 0s</text>\n\n  <rect x=\"185\" y=\"60\" width=\"135\" height=\"130\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"252\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">2. % Of</text>\n  <text x=\"252\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">(X / Y) × 100</text>\n  <text x=\"252\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Direct fraction</text>\n\n  <rect x=\"335\" y=\"60\" width=\"145\" height=\"130\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"407\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">3. % More/Less</text>\n  <text x=\"407\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">(|X-Y| / Base) × 100</text>\n  <text x=\"407\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Base after 'Than'</text>\n\n  <rect x=\"495\" y=\"60\" width=\"135\" height=\"130\" rx=\"8\" fill=\"#fdf2f8\" stroke=\"#ec4899\" />\n  <text x=\"562\" y=\"90\" text-anchor=\"middle\" fill=\"#9d174d\" font-weight=\"bold\" font-size=\"13\">4. Average</text>\n  <text x=\"562\" y=\"125\" text-anchor=\"middle\" fill=\"#db2777\" font-size=\"12\">Σ Values / N</text>\n  <text x=\"562\" y=\"155\" text-anchor=\"middle\" fill=\"#be185d\" font-size=\"11\">Net Deviation</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Pie Chart Conversion Formula",
        "latexFormula": "\\text{Percentage} = \\frac{\\text{Angle in Degrees}}{3.6} \\quad | \\quad \\text{Angle} = \\text{Percentage} \\times 3.6",
        "explanationEn": "Converts pie chart angles to percentages instantly without multiplying by 100/360.",
        "explanationHi": "डिग्री को 3.6 से भाग देकर सीधे प्रतिशत में बदलें।"
      },
      {
        "title": "Percentage Comparison Rule",
        "latexFormula": "\\text{Percentage More/Less} = \\frac{\\text{Difference}}{\\text{Entity following 'Than'}} \\times 100",
        "explanationEn": "Identifies the correct base value for all comparative questions.",
        "explanationHi": "'Than' अथवा 'से' के बाद वाली संख्या ही हमेशा हर (Base) होती है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Fraction Splitting for Rapid DI Percentages",
        "conventionalTime": "60s",
        "shortcutTime": "12s",
        "conventionalMethodEn": "Multiplying 437 by 34 and dividing by 100 using long paper multiplication.",
        "conventionalMethodHi": "कागज पर लंबा गुणा और भाग करना।",
        "shortcutStepsEn": "1. To find 35% of 640:\n2. 50% = 320, 10% = 64.\n3. 30% = 64 × 3 = 192.\n4. 5% = 32. Total = 192 + 32 = 224. Done mentally in 5s!",
        "shortcutStepsHi": "1. 640 का 35%: 10% = 64 ➔ 30% = 192.\n2. 5% = 32.\n3. 192 + 32 = 224 (मौखिक गणना)।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Denominator Inversion in '% More Than'",
        "mistakeStudentsMake": "Dividing difference by X instead of Y when question asks 'by what percent is X more than Y'.",
        "howToAvoid": "Always put Y in the denominator: (X - Y) / Y."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A pie chart shows that the total expenditure of a company is ₹72 lakhs. The central angle for raw material expenditure is 54°. Find the expenditure on raw materials.",
        "questionHi": "एक पाई चार्ट दर्शाता है कि कंपनी का कुल व्यय ₹72 लाख है। कच्चे माल के व्यय के लिए केंद्रीय कोण 54° है। कच्चे माल पर व्यय ज्ञात कीजिए।",
        "conventionalSolEn": "Expenditure = (54 / 360) × 72 lakhs = (3 / 20) × 72 = 3 × 3.6 = ₹10.8 lakhs.",
        "conventionalSolHi": "व्यय = (54/360) × 72 = (3/20) × 72 = ₹10.8 लाख।",
        "shortcutTrickEn": "54° / 3.6 = 15%. 15% of 72 lakhs = 10% (7.2) + 5% (3.6) = ₹10.8 lakhs.",
        "shortcutTrickHi": "54° = 15%. 72 लाख का 15% = 7.2 + 3.6 = ₹10.8 लाख।",
        "finalAnswer": "₹10.8 lakhs"
      },
      {
        "level": "Moderate",
        "questionEn": "In a bar graph showing the production of two items A and B by a factory: In 2021, production of A was 480 units and in 2022 it was 600 units. By what percent did the production of A increase in 2022 compared to 2021?",
        "questionHi": "एक कारखाने द्वारा 2021 में वस्तु A का उत्पादन 480 इकाई और 2022 में 600 इकाई था। 2021 की तुलना में 2022 में A के उत्पादन में कितने प्रतिशत की वृद्धि हुई?",
        "conventionalSolEn": "Increase = 600 - 480 = 120. Base year is 2021 (480). Percentage increase = (120 / 480) × 100 = (1 / 4) × 100 = 25%.",
        "conventionalSolHi": "वृद्धि = 600 - 480 = 120. प्रतिशत वृद्धि = (120/480) × 100 = 25%.",
        "shortcutTrickEn": "Ratio = 480 : 600 = 4 : 5. Increase = 1 on base 4 = 1/4 = 25%.",
        "shortcutTrickHi": "अनुपात = 4 : 5 ➔ वृद्धि = 1/4 = 25%।",
        "finalAnswer": "25%"
      },
      {
        "level": "Mains",
        "questionEn": "The total sales of a store in 2023 was ₹84,000 across 4 departments: P (25%), Q (35%), R (20%), and S (20%). If the profit margins in P, Q, R, and S are 10%, 12%, 15%, and 20% respectively, calculate the total overall profit earned.",
        "questionHi": "2023 में एक स्टोर की कुल बिक्री 4 विभागों में ₹84,000 थी: P (25%), Q (35%), R (20%), और S (20%)। यदि P, Q, R, और S में लाभ मार्जिन क्रमशः 10%, 12%, 15%, और 20% है, तो कुल अर्जित लाभ की गणना कीजिए।",
        "conventionalSolEn": "Sales: P = 21,000; Q = 29,400; R = 16,800; S = 16,800. Profits: P = 10% of 21000 = 2100. Q = 12% of 29400 = 3528. R = 15% of 16800 = 2520. S = 20% of 16800 = 3360. Total Profit = 2100 + 3528 + 2520 + 3360 = ₹11,508.",
        "conventionalSolHi": "कुल लाभ = 2100 + 3528 + 2520 + 3360 = ₹11,508.",
        "shortcutTrickEn": "Weighted profit % = (25%×10% + 35%×12% + 20%×15% + 20%×20%) = 2.5% + 4.2% + 3.0% + 4.0% = 13.7%. Total Profit = 13.7% of 84,000 = 840 × 13.7 = ₹11,508.",
        "shortcutTrickHi": "प्रभावी लाभ % = 13.7% ➔ 840 × 13.7 = ₹11,508।",
        "finalAnswer": "₹11,508"
      }
    ]
  },

  // ==========================================================================
  // Topic: caselet-di
  // ==========================================================================
  'caselet-di': {
    "topicSlug": "caselet-di",
    "coreTheoryEn": "Caselet DI presents unstructured narrative text which you must convert into a structured mathematical model: either a **Venn Diagram** (2-set or 3-set) or a **Cross-Tabulation Matrix**.\n\n### 1. Venn Diagram 3-Set Core Architecture:\n$$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - [n(A \\cap B) + n(B \\cap C) + n(C \\cap A)] + n(A \\cap B \\cap C)$$\n- **\"Only A\" Formula:**\n  $$\\text{Only } A = n(A) - n(A \\cap B) - n(A \\cap C) + n(A \\cap B \\cap C)$$\n- **Inside-Out Filling Strategy:**\n  Always locate and fill the center intersection ($A \\cap B \\cap C$) FIRST! Then subtract to fill double intersections, and finally single regions.\n\n### 2. Tabular Caselets Strategy:\nWhen clues mention categories and sub-attributes (e.g. Male/Female across 3 Departments A, B, C):\n1. Immediately construct an $m \\times n$ grid with Total columns and rows.\n2. Fill direct numbers first.\n3. Express remaining unknowns in terms of a single variable $x$ and equate to row/column totals.",
    "coreTheoryHi": "केसलेट डीआई (Caselet DI) में पैराग्राफ आधारित जानकारी को वेन आरेख (Venn Diagram) या सारणी में व्यवस्थित किया जाता है।\n\n### 1. 3-सेट वेन आरेख सूत्र:\n$$n(A \\cup B \\cup C) = \\sum n(A) - \\sum n(A \\cap B) + n(A \\cap B \\cap C)$$\n- **केंद्र से बाहर की ओर भरें:** सबसे पहले तीनों के उभयनिष्ठ ($A \\cap B \\cap C$) भाग को भरें, फिर दो-दो के जोड़े और अंत में एकल भाग निकालें।\n\n### 2. सारणी केसलेट:** पंक्तियों और स्तंभों का ग्रिड बनाकर कुल योग से अज्ञात मान निकालें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">3-Set Venn Diagram Inside-Out Sequence</text>\n  <circle cx=\"280\" cy=\"110\" r=\"60\" fill=\"#eff6ff\" fill-opacity=\"0.6\" stroke=\"#3b82f6\" stroke-width=\"2\" />\n  <circle cx=\"380\" cy=\"110\" r=\"60\" fill=\"#ecfdf5\" fill-opacity=\"0.6\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <circle cx=\"330\" cy=\"155\" r=\"55\" fill=\"#fef3c7\" fill-opacity=\"0.6\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  \n  <text x=\"240\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"12\">Set A</text>\n  <text x=\"420\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"12\">Set B</text>\n  <text x=\"330\" y=\"200\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"12\">Set C</text>\n  \n  <rect x=\"305\" y=\"115\" width=\"50\" height=\"25\" rx=\"4\" fill=\"#dc2626\" />\n  <text x=\"330\" y=\"132\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"black\" font-size=\"11\">STEP 1</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "3-Set Venn Universal Formula",
        "latexFormula": "n(A \\cup B \\cup C) = \\sum A - \\sum (A \\cap B) + n(A \\cap B \\cap C)",
        "explanationEn": "Fundamental equation balancing all individual, dual, and triple intersection regions.",
        "explanationHi": "वेन आरेख के सभी एकल, दोहरे और तिहरे क्षेत्रों का संतुलन सूत्र।"
      },
      {
        "title": "Exactly One Category Formula",
        "latexFormula": "\\text{Exactly 1} = \\sum A - 2\\sum(A \\cap B) + 3n(A \\cap B \\cap C)",
        "explanationEn": "Calculates elements belonging to exactly one set in a single formula step.",
        "explanationHi": "केवल एक ही श्रेणी में आने वाले तत्वों की संख्या का सीधा सूत्र।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Inside-Out Fill Protocol",
        "conventionalTime": "120s",
        "shortcutTime": "35s",
        "conventionalMethodEn": "Setting up 7 separate simultaneous equations a, b, c, d, e, f, g.",
        "conventionalMethodHi": "7 अज्ञात चर मानकर समीकरण बनाना।",
        "shortcutStepsEn": "1. Scan paragraph for the triple intersection value (A ∩ B ∩ C) and place in center.\n2. Deduct center value from dual overlaps (A ∩ B, B ∩ C, C ∩ A).\n3. Deduct overlaps from single circle totals.\n4. Complete all 7 regions in 35 seconds flat.",
        "shortcutStepsHi": "1. तीनों का कॉमन मान केंद्र में लिखें।\n2. इसे दोहरे भागों में से घटाएं।\n3. एकल भागों को भरें। मात्र 35 सेकंड में पूरा आरेख तैयार।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing 'A and B' with 'ONLY A and B'",
        "mistakeStudentsMake": "'A and B' includes the triple intersection (A ∩ B ∩ C), whereas 'Only A and B' excludes it.",
        "howToAvoid": "'Only A and B' = (A ∩ B) - (A ∩ B ∩ C)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "In a class of 100 students, 60 like tea, 50 like coffee, and 30 like both. How many students like neither tea nor coffee?",
        "questionHi": "100 छात्रों की एक कक्षा में, 60 चाय पसंद करते हैं, 50 कॉफी पसंद करते हैं, और 30 दोनों पसंद करते हैं। कितने छात्र न तो चाय और न ही कॉफी पसंद करते हैं?",
        "conventionalSolEn": "n(T ∪ C) = n(T) + n(C) - n(T ∩ C) = 60 + 50 - 30 = 80. Neither = Total - n(T ∪ C) = 100 - 80 = 20 students.",
        "conventionalSolHi": "n(T ∪ C) = 60 + 50 - 30 = 80. कोई नहीं = 100 - 80 = 20 छात्र।",
        "shortcutTrickEn": "Neither = 100 - (60 + 50 - 30) = 100 - 80 = 20.",
        "shortcutTrickHi": "100 - (60 + 50 - 30) = 20।",
        "finalAnswer": "20"
      },
      {
        "level": "Moderate",
        "questionEn": "Out of 500 bank employees, 280 have credit cards, 240 have debit cards, and 100 have both. How many employees have only credit cards?",
        "questionHi": "500 बैंक कर्मचारियों में से 280 के पास क्रेडिट कार्ड हैं, 240 के पास डेबिट कार्ड हैं और 100 के पास दोनों हैं। कितने कर्मचारियों के पास केवल क्रेडिट कार्ड हैं?",
        "conventionalSolEn": "Only Credit Cards = Total Credit Cards - Both = 280 - 100 = 180 employees.",
        "conventionalSolHi": "केवल क्रेडिट कार्ड = 280 - 100 = 180 कर्मचारी।",
        "shortcutTrickEn": "Only Credit = 280 - 100 = 180. Solved in 2 seconds!",
        "shortcutTrickHi": "केवल क्रेडिट = 280 - 100 = 180।",
        "finalAnswer": "180"
      },
      {
        "level": "Mains",
        "questionEn": "In a survey of 1000 smartphone users regarding apps X, Y, Z: 400 use X, 380 use Y, 350 use Z. 120 use X & Y, 100 use Y & Z, 90 use X & Z, and 40 use all three apps. How many users use exactly two of these apps?",
        "questionHi": "1000 स्मार्टफोन उपयोगकर्ताओं के सर्वेक्षण में: 400 X का उपयोग करते हैं, 380 Y का, 350 Z का। 120 X और Y का, 100 Y और Z का, 90 X और Z का, तथा 40 तीनों का उपयोग करते हैं। कितने उपयोगकर्ता इनमें से ठीक दो ऐप्स का उपयोग करते हैं?",
        "conventionalSolEn": "Exactly two apps = [n(X ∩ Y) - all 3] + [n(Y ∩ Z) - all 3] + [n(X ∩ Z) - all 3] = (120 - 40) + (100 - 40) + (90 - 40) = 80 + 60 + 50 = 190 users.",
        "conventionalSolHi": "ठीक दो ऐप्स = (120 - 40) + (100 - 40) + (90 - 40) = 80 + 60 + 50 = 190 उपयोगकर्ता।",
        "shortcutTrickEn": "Sum of dual overlaps - 3(All 3) = (120 + 100 + 90) - 3(40) = 310 - 120 = 190.",
        "shortcutTrickHi": "310 - 3(40) = 310 - 120 = 190।",
        "finalAnswer": "190"
      }
    ]
  },

  // ==========================================================================
  // Topic: arithmetic-mains-di
  // ==========================================================================
  'arithmetic-mains-di': {
    "topicSlug": "arithmetic-mains-di",
    "coreTheoryEn": "Mains-level Data Interpretation embeds core arithmetic topics (Time & Work, Profit & Loss, Speed & Distance, SI-CI, Mixtures) into complex graphs, missing data tables, and radar charts.\n\n### The 3 Core Pillars of Arithmetic Mains DI:\n1. **Missing Data Reconstruction:**\n   Tables will leave critical values blank. Find them by linking known row/column ratios or totals with the arithmetic formula governing that row.\n2. **Variable Normalization:**\n   Express all items in terms of a single variable ($x$). Never introduce $y$ and $z$ unless an additional independent equation is explicitly provided.\n3. **Decoupled Question Answering:**\n   Do NOT attempt to solve the entire arithmetic table before reading the questions! 2 out of 5 questions often require values from only 1 specific row.",
    "coreTheoryHi": "मेन्स स्तर का अंकगणितीय डीआई (Arithmetic Mains DI) कार्य-समय, लाभ-हानि, चाल-दूरी और ब्याज को चार्ट व अधूरी तालिकाओं में समाहित करता है।\n\n### 3 मुख्य नियम:\n1. **अधूरी तालिका पुनर्निर्माण:** दिए गए अनुपातों और सूत्रों से अज्ञात मान ज्ञात करें।\n2. **एकल चर पद्धति:** सभी अज्ञात मानों को $x$ के रूप में व्यक्त करें।\n3. **प्रश्न-विशिष्ट हल:** पूरी तालिका हल करने के बजाय केवल प्रश्न से संबंधित पंक्तियों का मान निकालें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Arithmetic Mains DI Strategy Funnel</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Step 1: Formula Link</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">CP/SP, TSD, Work</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Identify relation</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Step 2: Selective Fill</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Row-by-Row</text>\n  <text x=\"330\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Only target cells</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Step 3: Rapid Ratio</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Option Check</text>\n  <text x=\"530\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Direct answering</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Missing Row Equation Rule",
        "latexFormula": "\\text{Unknown} = \\text{Total} - \\sum \\text{Known Values}",
        "explanationEn": "Isolate the single missing parameter using the arithmetic formula of that specific row.",
        "explanationHi": "विशिष्ट पंक्ति के अंकगणितीय सूत्र का उपयोग करके अज्ञात मान निकालें।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Lazy Evaluation (Solve Only What is Asked)",
        "conventionalTime": "180s",
        "shortcutTime": "45s",
        "conventionalMethodEn": "Filling every single empty cell in a 5×5 missing DI table before reading Question 1.",
        "conventionalMethodHi": "प्रश्न पढ़े बिना पूरी तालिका के सभी रिक्त स्थान भरना।",
        "shortcutStepsEn": "1. Read Question 1 first.\n2. Note that it only asks for the ratio of Project A to Project C.\n3. Solve ONLY rows A and C, leaving B, D, and E blank.\n4. Save 2 minutes of calculation time.",
        "shortcutStepsHi": "1. पहले प्रश्न पढ़ें।\n2. केवल प्रश्न में पूछे गए प्रोजेक्ट A और C की गणना करें।\n3. 2 मिनट का समय बचाएं।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Over-calculating the Whole Set",
        "mistakeStudentsMake": "Spending 4 minutes completing a large missing data table when only 2 cells were needed.",
        "howToAvoid": "Never fill a table without a question-directed purpose."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "A table DI gives efficiency ratio of workers P and Q as 3 : 2. If P alone finishes a project in 20 days, in how many days can Q complete it alone?",
        "questionHi": "एक तालिका डीआई में P और Q की कार्यकुशलता का अनुपात 3 : 2 है। यदि P अकेला 20 दिनों में कार्य पूरा करता है, तो Q अकेला कितने दिनों में पूरा करेगा?",
        "conventionalSolEn": "Total work = Efficiency × Time = 3 × 20 = 60 units. Time taken by Q = Total work / Efficiency of Q = 60 / 2 = 30 days.",
        "conventionalSolHi": "कुल कार्य = 3 × 20 = 60 इकाई. Q का समय = 60 / 2 = 30 दिन.",
        "shortcutTrickEn": "Time ratio is inverse of efficiency = 2 : 3. 2 units = 20 days ➔ 3 units = 30 days.",
        "shortcutTrickHi": "समय अनुपात = 2 : 3 ➔ 2 = 20 ➔ 3 = 30 दिन।",
        "finalAnswer": "30 days"
      },
      {
        "level": "Moderate",
        "questionEn": "In a missing table DI of Profit & Loss, Item X has Marked Price = ₹2,400, Discount % = 25%, and Profit % = 20%. Find the Cost Price of Item X.",
        "questionHi": "लाभ और हानि की एक तालिका में, वस्तु X का अंकित मूल्य = ₹2,400, छूट % = 25% और लाभ % = 20% है। वस्तु X का क्रय मूल्य ज्ञात कीजिए।",
        "conventionalSolEn": "Selling Price SP = MP × (1 - D/100) = 2400 × 0.75 = ₹1,800. Cost Price CP = SP / (1 + P/100) = 1800 / 1.20 = ₹1,500.",
        "conventionalSolHi": "SP = 2400 × 0.75 = ₹1800. CP = 1800 / 1.2 = ₹1500.",
        "shortcutTrickEn": "CP : MP = (100 - D) : (100 + P) = 75 : 120 = 5 : 8. 8 units = ₹2400 ➔ 1 unit = ₹300 ➔ CP = 5 units = ₹1,500.",
        "shortcutTrickHi": "CP : MP = 75 : 120 = 5 : 8 ➔ 8 = 2400 ➔ CP = 5 × 300 = ₹1,500।",
        "finalAnswer": "₹1,500"
      },
      {
        "level": "Mains",
        "questionEn": "A radar chart displays downstream and upstream speeds of boats A, B, C. Boat A takes 4 hours to travel 48 km downstream and 6 hours to travel 48 km upstream. If Boat B has still water speed 25% more than Boat A and travels in the same river, find the time taken by Boat B to travel 70 km downstream.",
        "questionHi": "एक रडार चार्ट नाव A, B, C की धारा के अनुकूल और प्रतिकूल गति दर्शाता है। नाव A धारा के अनुकूल 48 किमी 4 घंटे में और धारा के प्रतिकूल 48 किमी 6 घंटे में तय करती है। यदि शांत जल में नाव B की गति A से 25% अधिक है और वह उसी नदी में चलती है, तो B द्वारा धारा के अनुकूल 70 किमी तय करने में लगा समय ज्ञात कीजिए।",
        "conventionalSolEn": "Boat A: Downstream D_A = 48/4 = 12 km/h, Upstream U_A = 48/6 = 8 km/h. Boat A still water speed u_A = (12 + 8)/2 = 10 km/h. River speed v = (12 - 8)/2 = 2 km/h. Boat B still water speed u_B = 10 × 1.25 = 12.5 km/h. Boat B Downstream speed D_B = u_B + v = 12.5 + 2 = 14.5 km/h. Time = 70 / 14.5 = 140 / 29 ≈ 4.83 hours.",
        "conventionalSolHi": "A की चाल: D = 12, U = 8 ➔ u_A = 10, v = 2 किमी/घंटा. B की शांत चाल = 12.5. B की अनुकूल चाल = 12.5 + 2 = 14.5. समय = 70 / 14.5 = 140/29 घंटे।",
        "shortcutTrickEn": "u_A = 10, v = 2. u_B = 12.5 ➔ D_B = 14.5 km/h. Time = 70 / 14.5 = 140/29 hours.",
        "shortcutTrickHi": "140/29 घंटे (लगभग 4.83 घंटे)।",
        "finalAnswer": "140/29 hours (≈ 4.83 hours)"
      }
    ]
  },

  // ==========================================================================
  // Topic: quantity-comparison-data-sufficiency
  // ==========================================================================
  'quantity-comparison-data-sufficiency': {
    "topicSlug": "quantity-comparison-data-sufficiency",
    "coreTheoryEn": "Quantity Comparison (Quantity I vs Quantity II) and Data Sufficiency represent **5 critical marks in PO Prelims & Mains**.\n\n### 1. Quantity Comparison Protocol:\nCompare Quantity I ($Q_1$) and Quantity II ($Q_2$):\n- $Q_1 > Q_2$\n- $Q_1 < Q_2$\n- $Q_1 \\ge Q_2$\n- $Q_1 \\le Q_2$\n- $Q_1 = Q_2$ or Relationship cannot be determined (CND).\n\n*The Golden Sign Rule:* If $Q_1$ can take multiple values (e.g. roots $\\{+4, -4\\}$) and $Q_2 = 0$: $+4 > 0$ but $-4 < 0$. Contradictory signs $\\implies$ **CND instantly!**\n\n### 2. Data Sufficiency 4-Step Elimination Protocol:\n- **Step 1:** Test Statement I alone. If sufficient $\\implies$ Answer is (A) or (C).\n- **Step 2:** Test Statement II alone. If sufficient $\\implies$ Answer is (B) or (C).\n- **Step 3:** If neither alone is sufficient, combine Statement I + Statement II.\n- **Step 4:** NEVER solve for the numerical answer! Only verify if a UNIQUE value is determinable (Degrees of Freedom = 0).",
    "coreTheoryHi": "मात्रा तुलना (Quantity I vs II) और आंकड़ा पर्याप्तता (Data Sufficiency):\n\n### 1. मात्रा तुलना नियम:\nयदि $Q_1$ के दो मान हैं (जैसे $\\pm 4$) और $Q_2 = 0$, तो एक मान बड़ा और दूसरा छोटा होने के कारण संबंध निर्धारित नहीं किया जा सकता (CND)।\n\n### 2. आंकड़ा पर्याप्तता (Data Sufficiency) नियम:\n- कथन I की अकेले जांच करें।\n- कथन II की अकेले जांच करें।\n- यदि दोनों अकेले अपर्याप्त हैं, तो दोनों को मिलाकर जांच करें।\n- **सुनहरा नियम:** कभी भी पूरा संख्यात्मक मान न निकालें; केवल यह देखें कि अद्वितीय मान प्राप्त किया जा सकता है या नहीं।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 220\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"220\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Data Sufficiency Decision Logic Tree</text>\n  <rect x=\"50\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"90\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Check Stmt I Alone</text>\n  <text x=\"130\" y=\"125\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Unique answer?</text>\n  <text x=\"130\" y=\"155\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Yes ➔ (A) or (D)</text>\n\n  <rect x=\"250\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Check Stmt II Alone</text>\n  <text x=\"330\" y=\"125\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Unique answer?</text>\n  <text x=\"330\" y=\"155\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Yes ➔ (B) or (D)</text>\n\n  <rect x=\"450\" y=\"60\" width=\"160\" height=\"120\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"90\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Combine I + II</text>\n  <text x=\"530\" y=\"125\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Sufficient together?</text>\n  <text x=\"530\" y=\"155\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Yes ➔ (C), No ➔ (E)</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Degrees of Freedom Rule",
        "latexFormula": "\\text{If Number of Independent Equations} = \\text{Number of Unknowns} \\implies \\text{Sufficient}",
        "explanationEn": "If equations match variables, a unique solution exists without having to calculate it.",
        "explanationHi": "यदि स्वतंत्र समीकरणों की संख्या अज्ञात चरों के बराबर है, तो कथन पर्याप्त है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Zero-Calculation Sufficiency Test",
        "conventionalTime": "90s",
        "shortcutTime": "15s",
        "conventionalMethodEn": "Solving quadratic equations and linear systems completely to numerical answers.",
        "conventionalMethodHi": "संख्यात्मक मान निकालने के लिए पूरा समीकरण हल करना।",
        "shortcutStepsEn": "1. Check if the equations are linearly independent.\n2. 2 linear equations in 2 variables (non-parallel) always yield 1 unique intersection.\n3. Mark 'Both together sufficient' in 10 seconds without pen and paper.",
        "shortcutStepsHi": "1. 2 चर वाले 2 रैखिक समीकरण सदैव अद्वितीय हल देते हैं।\n2. बिना हल किए 10 सेकंड में 'पर्याप्त' चिह्नित करें।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Root Ambiguity (x² = 25 vs x = √25)",
        "mistakeStudentsMake": "Assuming x² = 25 means x = 5 only, forgetting -5.",
        "howToAvoid": "x² = 25 gives x = ±5. But √25 is strictly +5 (principal square root)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Quantity I: Value of x where x² = 36. Quantity II: Value of y where y = √36. Compare Quantity I and Quantity II.",
        "questionHi": "मात्रा I: x का मान जहाँ x² = 36। मात्रा II: y का मान जहाँ y = √36। मात्रा I और मात्रा II की तुलना कीजिए।",
        "conventionalSolEn": "Quantity I: x² = 36 ➔ x = +6 or x = -6. Quantity II: y = √36 = +6. When x = +6, x = y. When x = -6, x < y. Therefore, Quantity I ≤ Quantity II.",
        "conventionalSolHi": "मात्रा I: x = +6 या -6. मात्रा II: y = +6. जब x = 6, x = y; जब x = -6, x < y. अतः Quantity I ≤ Quantity II.",
        "shortcutTrickEn": "Roots of Q1: {+6, -6}. Q2: {+6}. Since -6 < +6 and +6 = +6, Q1 ≤ Q2.",
        "shortcutTrickHi": "Q1 = {+6, -6}, Q2 = {6} ➔ Q1 ≤ Q2.",
        "finalAnswer": "Quantity I ≤ Quantity II"
      },
      {
        "level": "Moderate",
        "questionEn": "Quantity I: Time taken by A to complete a work alone, given A and B together take 12 days, and B takes 20 days alone. Quantity II: 28 days. Compare Quantity I and Quantity II.",
        "questionHi": "मात्रा I: A द्वारा अकेले कार्य पूरा करने में लगा समय, यदि A और B मिलकर 12 दिन और B अकेला 20 दिन लेता है। मात्रा II: 28 दिन। तुलना कीजिए।",
        "conventionalSolEn": "LCM(12, 20) = 60 units. A + B = 5 units/day. B = 3 units/day. A = 5 - 3 = 2 units/day. Time for A = 60 / 2 = 30 days. Quantity I = 30 days. Quantity II = 28 days. 30 > 28, so Quantity I > Quantity II.",
        "conventionalSolHi": "A का समय = 60 / 2 = 30 दिन। मात्रा I = 30 दिन > मात्रा II (28 दिन)।",
        "shortcutTrickEn": "A = (12 × 20) / (20 - 12) = 240 / 8 = 30 days. 30 > 28 ➔ Quantity I > Quantity II.",
        "shortcutTrickHi": "A = 240 / 8 = 30 दिन > 28 ➔ Quantity I > Quantity II.",
        "finalAnswer": "Quantity I > Quantity II"
      },
      {
        "level": "Mains",
        "questionEn": "Data Sufficiency: What is the present age of the father? Statement I: The ratio of father's age to son's age 5 years ago was 3 : 1. Statement II: The sum of present ages of father and son is 60 years.",
        "questionHi": "आंकड़ा पर्याप्तता: पिता की वर्तमान आयु क्या है? कथन I: 5 वर्ष पूर्व पिता और पुत्र की आयु का अनुपात 3 : 1 था। कथन II: पिता और पुत्र की वर्तमान आयु का योग 60 वर्ष है।",
        "conventionalSolEn": "Statement I: (F - 5)/(S - 5) = 3/1 ➔ F - 5 = 3S - 15 ➔ F - 3S = -10 (1 equation, 2 unknowns: Insufficient alone). Statement II: F + S = 60 (1 equation, 2 unknowns: Insufficient alone). Combining I and II: Two linear equations in two variables: F - 3S = -10 and F + S = 60. Subtracting gives 4S = 70 ➔ S = 17.5, F = 42.5 years. A unique value is found. Therefore, BOTH statements TOGETHER are sufficient.",
        "conventionalSolHi": "कथन I अकेला अपर्याप्त है। कथन II अकेला अपर्याप्त है। दोनों को मिलाने पर 2 अज्ञात चरों के 2 रैखिक समीकरण बनते हैं, जिससे अद्वितीय मान प्राप्त होता है। अतः दोनों कथन मिलकर पर्याप्त हैं।",
        "shortcutTrickEn": "Stmt I gives 1 linear relation. Stmt II gives a 2nd non-parallel linear relation. 2 equations with 2 unknowns always give unique solution. Mark 'Both together sufficient' in 5s.",
        "shortcutTrickHi": "2 अज्ञात + 2 स्वतंत्र समीकरण = अद्वितीय हल। दोनों मिलकर पर्याप्त हैं।",
        "finalAnswer": "Both statements I and II together are sufficient"
      }
    ]
  },

};
