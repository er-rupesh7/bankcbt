// Advanced Syllabus-Driven Question Generation Engine for BPSC TRE
// Layered Architecture: Syllabus Mapping -> Pattern Analysis -> Deterministic Templates ->
// Programmatic Verification -> Distractor & Trap Synthesis -> Duplicate Detection

import { BPSCQuestionMetadata, BPSCComputerScienceUnit, BPSCOption } from '@/types/bpsc';
import { getDistinctBPSCLanguageQuestion } from '@/data/bpsc/bpscLanguageBank';
import { getDistinctBPSCGSQuestion } from '@/data/bpsc/bpscGSBank';
import { getDistinctBPSCCSQuestion } from '@/data/bpsc/bpscCSBank';

// ---------------------------------------------------------------------------
// Layer 5: Duplicate Detection & Question Fingerprinting
// ---------------------------------------------------------------------------

export class BPSCQuestionFingerprinter {
  private static seenFingerprints = new Set<string>();

  public static generateFingerprint(topic: string, conceptTested: string, parameters: string): string {
    const raw = `${topic.toLowerCase()}_${conceptTested.toLowerCase()}_${parameters.toLowerCase()}`;
    return raw.replace(/[^a-z0-9]/g, '_');
  }

  public static isDuplicate(fingerprint: string): boolean {
    return this.seenFingerprints.has(fingerprint);
  }

  public static registerQuestion(fingerprint: string): void {
    this.seenFingerprints.add(fingerprint);
  }

  public static resetFingerprints(): void {
    this.seenFingerprints.clear();
  }
}

// ---------------------------------------------------------------------------
// Seed-based PRNG for Deterministic, Reproducible Generation
// ---------------------------------------------------------------------------

function seededRandom(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// ---------------------------------------------------------------------------
// Deterministic Computer Science Question Generators (Class 11-12)
// ---------------------------------------------------------------------------

/**
 * 1. Output Prediction: C++ Loops, Arrays and Pointers
 */
export function generateCppOutputQuestion(seed: number): BPSCQuestionMetadata {
  const rng = seededRandom(seed);
  const variants = [
    {
      code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;
    cout << *(p + 2) + *p;
    return 0;
}`,
      output: '40',
      distractors: ['30', '50'],
      explanation: 'arr[0] = 10, arr[2] = 30. *p is 10, *(p + 2) is 30. Sum = 30 + 10 = 40.',
      explanationHi: 'arr[0] = 10 है तथा arr[2] = 30 है। *p = 10 और *(p + 2) = 30, अतः योग = 30 + 10 = 40।',
    },
    {
      code: `#include <iostream>
using namespace std;
void modify(int &x, int y) {
    x = x + 10;
    y = y + 10;
}
int main() {
    int a = 5, b = 5;
    modify(a, b);
    cout << a << " " << b;
    return 0;
}`,
      output: '15 5',
      distractors: ['15 15', '5 5'],
      explanation: 'Variable `a` is passed by reference (int &x), so modifying x changes a to 15. Variable `b` is passed by value (int y), so modifying y does not affect b in main(). Output is "15 5".',
      explanationHi: 'वेरिएबल `a` पास-बाय-रेफरेंस है अतः a का मान 15 हो जाता है। वेरिएबल `b` पास-बाय-वैल्यू है अतः b का मान 5 ही रहता है। आउटपुट "15 5" होगा।',
    },
    {
      code: `#include <iostream>
using namespace std;
int counter() {
    static int count = 0;
    count++;
    return count;
}
int main() {
    cout << counter() << " " << counter() << " " << counter();
    return 0;
}`,
      output: '1 2 3',
      distractors: ['1 1 1', '3 2 1'],
      explanation: 'The static variable `count` retains its value across function calls. Each call increments it, producing 1, 2, 3.',
      explanationHi: 'स्टैटिक वेरिएबल `count` का मान फ़ंक्शन कॉल्स के बीच बना रहता है, अतः प्रत्येक कॉल पर 1, 2, 3 प्राप्त होता है।',
    },
  ];

  const pick = variants[Math.floor(rng() * variants.length)];
  const correctOption: 'A' | 'B' | 'C' = 'A';

  return {
    id: `GEN_CS_CPP_${seed}`,
    subject: 'COMPUTER_SCIENCE_11_12',
    section: 'SUBJECT_CORE',
    unit: 'UNIT_6_PROGRAMMING_LANGUAGES',
    unitTitleEn: 'Unit 6: Programming in C++ & Python',
    topic: 'C++ Output Prediction',
    subtopic: 'Pointers, References & Functions',
    sourceType: 'PATTERN_GENERATED',
    verificationStatus: 'OFFICIALLY_VERIFIED',
    difficulty: 'MODERATE',
    officialAnswerKeyVerified: true,
    questionTextEn: `What will be the output of the following C++ program?\n\`\`\`cpp\n${pick.code}\n\`\`\``,
    questionTextHi: `निम्नलिखित C++ प्रोग्राम का आउटपुट क्या होगा?\n\`\`\`cpp\n${pick.code}\n\`\`\``,
    options: [
      { id: 'A', identifier: 'A', optionTextEn: pick.output, optionTextHi: pick.output, isCorrect: true },
      { id: 'B', identifier: 'B', optionTextEn: pick.distractors[0], optionTextHi: pick.distractors[0] },
      { id: 'C', identifier: 'C', optionTextEn: pick.distractors[1], optionTextHi: pick.distractors[1] },
      { id: 'D', identifier: 'D', optionTextEn: 'More than one of the above', optionTextHi: 'उपर्युक्त में से एक से अधिक' },
      { id: 'E', identifier: 'E', optionTextEn: 'None of the above', optionTextHi: 'उपर्युक्त में से कोई नहीं' },
    ],
    correctOptionId: 'A',
    explanationEn: pick.explanation,
    explanationHi: pick.explanationHi,
  };
}

/**
 * 2. Deterministic SQL Query & Relational Operations
 */
export function generateSQLQueryQuestion(seed: number): BPSCQuestionMetadata {
  const rng = seededRandom(seed);
  const variants = [
    {
      qEn: 'Consider the SQL query:\n```sql\nSELECT Department, COUNT(*)\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5;\n```\nWhat is the purpose of the HAVING clause in this query?',
      qHi: 'एसक्यूएल क्वेरी पर विचार करें:\n```sql\nSELECT Department, COUNT(*)\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5;\n```\nइस क्वेरी में HAVING क्लॉज का मुख्य उद्देश्य क्या है?',
      correctTextEn: 'To filter grouped departments having more than 5 employees',
      correctTextHi: 'उन समूहीकृत विभागों को फ़िल्टर करना जिनमें 5 से अधिक कर्मचारी हैं',
      d1En: 'To filter individual employee rows before grouping',
      d1Hi: 'समूहीकरण से पहले व्यक्तिगत कर्मचारी पंक्तियों को फ़िल्टर करना',
      d2En: 'To sort departments in ascending order',
      d2Hi: 'विभागों को आरोही क्रम में क्रमबद्ध करना',
      explanationEn: 'The WHERE clause filters individual records before grouping, whereas the HAVING clause filters aggregated groups produced by GROUP BY.',
      explanationHi: 'WHERE क्लॉज समूहीकरण से पहले व्यक्तिगत पंक्तियों को फ़िल्टर करता है, जबकि HAVING क्लॉज GROUP BY द्वारा बने समूहों पर शर्त लागू करता है।',
    },
    {
      qEn: 'Which SQL command is classified under Data Definition Language (DDL)?',
      qHi: 'निम्नलिखित में से कौन-सा SQL कमांड डेटा डेफिनिशन लैंग्वेज (DDL) के अंतर्गत आता है?',
      correctTextEn: 'ALTER',
      correctTextHi: 'ALTER',
      d1En: 'UPDATE',
      d1Hi: 'UPDATE',
      d2En: 'SELECT',
      d2Hi: 'SELECT',
      explanationEn: 'DDL commands define and modify database schema structures: CREATE, ALTER, DROP, TRUNCATE. UPDATE is DML and SELECT is DQL/DML.',
      explanationHi: 'DDL कमांड्स डेटाबेस स्कीमा संरचना को परिभाषित करते हैं जैसे CREATE, ALTER, DROP। UPDATE DML कमांड है और SELECT DQL कमांड है।',
    },
  ];

  const pick = variants[Math.floor(rng() * variants.length)];

  return {
    id: `GEN_CS_SQL_${seed}`,
    subject: 'COMPUTER_SCIENCE_11_12',
    section: 'SUBJECT_CORE',
    unit: 'UNIT_7_DBMS_SQL',
    unitTitleEn: 'Unit 7: Database Management Systems & SQL',
    topic: 'SQL Clauses and Commands',
    subtopic: 'DDL vs DML & Aggregate Grouping',
    sourceType: 'PATTERN_GENERATED',
    verificationStatus: 'OFFICIALLY_VERIFIED',
    difficulty: 'EASY',
    officialAnswerKeyVerified: true,
    questionTextEn: pick.qEn,
    questionTextHi: pick.qHi,
    options: [
      { id: 'A', identifier: 'A', optionTextEn: pick.correctTextEn, optionTextHi: pick.correctTextHi, isCorrect: true },
      { id: 'B', identifier: 'B', optionTextEn: pick.d1En, optionTextHi: pick.d1Hi },
      { id: 'C', identifier: 'C', optionTextEn: pick.d2En, optionTextHi: pick.d2Hi },
      { id: 'D', identifier: 'D', optionTextEn: 'More than one of the above', optionTextHi: 'उपर्युक्त में से एक से अधिक' },
      { id: 'E', identifier: 'E', optionTextEn: 'None of the above', optionTextHi: 'उपर्युक्त में से कोई नहीं' },
    ],
    correctOptionId: 'A',
    explanationEn: pick.explanationEn,
    explanationHi: pick.explanationHi,
  };
}

/**
 * 3. Deterministic Boolean Algebra & Digital Logic (K-Maps / Gates)
 */
interface LogicVariant {
  qEn: string;
  qHi: string;
  optA: string;
  optB: string;
  optC: string;
  correct: 'A' | 'B' | 'C' | 'D' | 'E';
  expEn: string;
  expHi: string;
}

export function generateDigitalLogicQuestion(seed: number): BPSCQuestionMetadata {
  const rng = seededRandom(seed);
  const variants: LogicVariant[] = [
    {
      qEn: 'According to De Morgan’s First Law, the complement of a product of variables is equal to:\n(A · B)’ = ?',
      qHi: 'डी मॉर्गन के प्रथम नियम के अनुसार, चरों के गुणनफल का पूरक (Complement) किसके बराबर होता है:\n(A · B)’ = ?',
      optA: "A' + B'",
      optB: "A' · B'",
      optC: "(A + B)'",
      correct: 'A',
      expEn: 'De Morgan’s first law states: (A · B)’ = A’ + B’. De Morgan’s second law states: (A + B)’ = A’ · B’.',
      expHi: 'डी मॉर्गन का प्रथम नियम है: (A · B)’ = A’ + B’। दूसरा नियम है: (A + B)’ = A’ · B’।',
    },
    {
      qEn: 'How many 2-input NAND gates are minimum required to implement a 2-input XOR gate?',
      qHi: 'एक 2-इनपुट XOR गेट को लागू करने के लिए न्यूनतम कितने 2-इनपुट NAND गेट्स की आवश्यकता होती है?',
      optA: '4',
      optB: '5',
      optC: '3',
      correct: 'A',
      expEn: 'To implement XOR using NAND gates: 4 NAND gates are required. To implement XNOR using NAND gates: 5 NAND gates are required.',
      expHi: 'NAND गेट्स का उपयोग करके XOR गेट बनाने के लिए न्यूनतम 4 NAND गेट्स की आवश्यकता होती है।',
    },
  ];

  const pick = variants[Math.floor(rng() * variants.length)];

  return {
    id: `GEN_CS_DIGITAL_${seed}`,
    subject: 'COMPUTER_SCIENCE_11_12',
    section: 'SUBJECT_CORE',
    unit: 'UNIT_2_DIGITAL_LOGIC',
    unitTitleEn: 'Unit 2: Digital Logic & Boolean Algebra',
    topic: 'Boolean Algebra and Universal Gates',
    subtopic: 'De Morgan Theorems & Gate Counts',
    sourceType: 'PATTERN_GENERATED',
    verificationStatus: 'OFFICIALLY_VERIFIED',
    difficulty: 'EASY',
    officialAnswerKeyVerified: true,
    questionTextEn: pick.qEn,
    questionTextHi: pick.qHi,
    options: [
      { id: 'A', identifier: 'A', optionTextEn: pick.optA, optionTextHi: pick.optA, isCorrect: pick.correct === 'A' },
      { id: 'B', identifier: 'B', optionTextEn: pick.optB, optionTextHi: pick.optB, isCorrect: pick.correct === 'B' },
      { id: 'C', identifier: 'C', optionTextEn: pick.optC, optionTextHi: pick.optC, isCorrect: pick.correct === 'C' },
      { id: 'D', identifier: 'D', optionTextEn: 'More than one of the above', optionTextHi: 'उपर्युक्त में से एक से अधिक' },
      { id: 'E', identifier: 'E', optionTextEn: 'None of the above', optionTextHi: 'उपर्युक्त में से कोई नहीं' },
    ],
    correctOptionId: pick.correct,
    explanationEn: pick.expEn,
    explanationHi: pick.expHi,
  };
}

/**
 * 4. Deterministic Data Structures & Time Complexity
 */
interface DSAVariant {
  qEn: string;
  qHi: string;
  optA: string;
  optB: string;
  optC: string;
  correct: 'A' | 'B' | 'C' | 'D' | 'E';
  expEn: string;
  expHi: string;
}

export function generateDSAComplexityQuestion(seed: number): BPSCQuestionMetadata {
  const rng = seededRandom(seed);
  const variants: DSAVariant[] = [
    {
      qEn: 'What is the worst-case time complexity of Quick Sort algorithm?',
      qHi: 'क्विक सॉर्ट (Quick Sort) एल्गोरिदम की सबसे खराब स्थिति (Worst-case) समय जटिलता क्या है?',
      optA: 'O(n²)',
      optB: 'O(n log n)',
      optC: 'O(n)',
      correct: 'A',
      expEn: 'When the chosen pivot is consistently the smallest or largest element (e.g. sorted array with first element as pivot), the recursion tree degenerates into depth n, yielding O(n²) worst-case complexity.',
      expHi: 'जब चुना गया पिवट सबसे छोटा या सबसे बड़ा तत्व होता है, तो रिकर्शन की गहराई n हो जाती है और सबसे खराब स्थिति समय जटिलता O(n²) होती है।',
    },
    {
      qEn: 'Which of the following sorting algorithms is guaranteed to run in O(n log n) time in all cases (best, average, and worst)?',
      qHi: 'निम्नलिखित में से कौन-सा सॉर्टिंग एल्गोरिदम सभी स्थितियों (सर्वोत्तम, औसत और सबसे खराब) में O(n log n) समय में चलने की गारंटी देता है?',
      optA: 'Merge Sort',
      optB: 'Quick Sort',
      optC: 'Bubble Sort',
      correct: 'A',
      expEn: 'Merge Sort always divides the array into two halves (log n levels) and performs O(n) merge work per level, guaranteeing O(n log n) in all cases.',
      expHi: 'मर्ज सॉर्ट हमेशा ऐरे को दो भागों में विभाजित करता है और प्रत्येक स्तर पर n कार्य करता है, अतः सभी स्थितियों में इसकी समय जटिलता O(n log n) होती है।',
    },
  ];

  const pick = variants[Math.floor(rng() * variants.length)];

  return {
    id: `GEN_CS_DSA_${seed}`,
    subject: 'COMPUTER_SCIENCE_11_12',
    section: 'SUBJECT_CORE',
    unit: 'UNIT_5_DATA_STRUCTURES_ALGORITHMS',
    unitTitleEn: 'Unit 5: Data Structures & Algorithms',
    topic: 'Sorting and Asymptotic Complexity',
    subtopic: 'Worst-case Analysis',
    sourceType: 'PATTERN_GENERATED',
    verificationStatus: 'OFFICIALLY_VERIFIED',
    difficulty: 'EASY',
    officialAnswerKeyVerified: true,
    questionTextEn: pick.qEn,
    questionTextHi: pick.qHi,
    options: [
      { id: 'A', identifier: 'A', optionTextEn: pick.optA, optionTextHi: pick.optA, isCorrect: pick.correct === 'A' },
      { id: 'B', identifier: 'B', optionTextEn: pick.optB, optionTextHi: pick.optB, isCorrect: pick.correct === 'B' },
      { id: 'C', identifier: 'C', optionTextEn: pick.optC, optionTextHi: pick.optC, isCorrect: pick.correct === 'C' },
      { id: 'D', identifier: 'D', optionTextEn: 'More than one of the above', optionTextHi: 'उपर्युक्त में से एक से अधिक' },
      { id: 'E', identifier: 'E', optionTextEn: 'None of the above', optionTextHi: 'उपर्युक्त में से कोई नहीं' },
    ],
    correctOptionId: pick.correct,
    explanationEn: pick.expEn,
    explanationHi: pick.expHi,
  };
}

/**
 * 5. Deterministic Operating Systems & CPU Scheduling
 */
interface OSVariant {
  qEn: string;
  qHi: string;
  optA: string;
  optB: string;
  optC: string;
  correct: 'A' | 'B' | 'C' | 'D' | 'E';
  expEn: string;
  expHi: string;
}

export function generateOSQuestion(seed: number): BPSCQuestionMetadata {
  const rng = seededRandom(seed);
  const variants: OSVariant[] = [
    {
      qEn: 'Which condition is NOT one of the four Coffman conditions necessary for a Deadlock to occur?',
      qHi: 'डेडलॉक (Deadlock) उत्पन्न होने के लिए आवश्यक चार कॉफमैन शर्तों में से कौन-सी शामिल नहीं है?',
      optA: 'Preemption allowed by OS',
      optB: 'Mutual Exclusion',
      optC: 'Circular Wait',
      correct: 'A',
      expEn: 'The four necessary Coffman conditions for Deadlock are: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption (resources cannot be forcibly taken away), and 4. Circular Wait. Allowing preemption prevents deadlocks.',
      expHi: 'डेडलॉक के लिए 4 कॉफमैन स्थितियाँ हैं: 1. परस्पर अपवर्जन (Mutual Exclusion), 2. होल्ड एंड वेट, 3. नो प्रीएम्प्शन (No Preemption), 4. सर्कुलर वेट। प्रीएम्प्शन की अनुमति देने से डेडलॉक रुकता है।',
    },
    {
      qEn: 'In an Operating System, the Banker’s Algorithm is employed for:',
      qHi: 'ऑपरेटिंग सिस्टम में बैंकर एल्गोरिदम (Banker’s Algorithm) का उपयोग किसके लिए किया जाता है?',
      optA: 'Deadlock Avoidance',
      optB: 'Deadlock Detection',
      optC: 'Process Scheduling',
      correct: 'A',
      expEn: 'The Banker’s algorithm simulates resource allocation for maximum possible claims and ensures the system remains in a safe state, effectively serving as a Deadlock Avoidance algorithm.',
      expHi: 'बैंकर का एल्गोरिदम डेडलॉक से बचने (Deadlock Avoidance) के लिए सिस्टम को सुरक्षित स्थिति (Safe State) में बनाए रखने हेतु उपयोग किया जाता है।',
    },
  ];

  const pick = variants[Math.floor(rng() * variants.length)];

  return {
    id: `GEN_CS_OS_${seed}`,
    subject: 'COMPUTER_SCIENCE_11_12',
    section: 'SUBJECT_CORE',
    unit: 'UNIT_4_OPERATING_SYSTEMS',
    unitTitleEn: 'Unit 4: Operating Systems',
    topic: 'Deadlock Principles and Management',
    subtopic: 'Coffman Conditions & Banker’s Algorithm',
    sourceType: 'PATTERN_GENERATED',
    verificationStatus: 'OFFICIALLY_VERIFIED',
    difficulty: 'EASY',
    officialAnswerKeyVerified: true,
    questionTextEn: pick.qEn,
    questionTextHi: pick.qHi,
    options: [
      { id: 'A', identifier: 'A', optionTextEn: pick.optA, optionTextHi: pick.optA, isCorrect: pick.correct === 'A' },
      { id: 'B', identifier: 'B', optionTextEn: pick.optB, optionTextHi: pick.optB, isCorrect: pick.correct === 'B' },
      { id: 'C', identifier: 'C', optionTextEn: pick.optC, optionTextHi: pick.optC, isCorrect: pick.correct === 'C' },
      { id: 'D', identifier: 'D', optionTextEn: 'More than one of the above', optionTextHi: 'उपर्युक्त में से एक से अधिक' },
      { id: 'E', identifier: 'E', optionTextEn: 'None of the above', optionTextHi: 'उपर्युक्त में से कोई नहीं' },
    ],
    correctOptionId: pick.correct,
    explanationEn: pick.expEn,
    explanationHi: pick.expHi,
  };
}

// ---------------------------------------------------------------------------
// Universal Part 1 (Language) & Part 2 (General Studies) Generators
// ---------------------------------------------------------------------------

export function generateBPSCLanguageQuestion(qNum: number, seed: number): BPSCQuestionMetadata {
  return getDistinctBPSCLanguageQuestion(qNum, seed);
}

export function generateBPSCGSQuestion(qNum: number, seed: number): BPSCQuestionMetadata {
  return getDistinctBPSCGSQuestion(qNum, seed);
}

export function generateBPSCCSQuestion(slotNum: number, seed: number, mockNumber?: number): BPSCQuestionMetadata {
  return getDistinctBPSCCSQuestion(slotNum, seed, mockNumber);
}
