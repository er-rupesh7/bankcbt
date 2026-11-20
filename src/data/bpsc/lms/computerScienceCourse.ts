// Comprehensive BPSC TRE 4.0 Computer Science (Class 11-12) Course Data
// 7 Chapters, 16 High-Yield Topics covering the entire official BPSC/NCERT syllabus
// Fully equipped with 12-section blueprint, authentic TRE 1/2/3 PYQs, and ==yellow highlighters==

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_COMPUTER_SCIENCE_SUBJECTS: LMSSubject[] = [
  {
    key: 'COMPUTER_SCIENCE_11_12',
    sectionKey: 'PART_3_SUBJECT_CORE',
    displayNameEn: 'Computer Science (Class 11 & 12)',
    displayNameHi: 'कंप्यूटर साइंस (कक्षा 11 एवं 12)',
    iconName: 'Cpu',
    descriptionEn: 'Complete 80-mark BPSC TRE Computer Science core syllabus: Digital Logic, OS, DSA, OOP in C++, Relational DBMS, Computer Networks, and Python 11-12.',
    descriptionHi: 'BPSC TRE कंप्यूटर साइंस (80 अंक) का संपूर्ण पाठ्यक्रम: डिजिटल लॉजिक, ऑपरेटिंग सिस्टम, डेटा स्ट्रक्चर, C++ OOP, DBMS, नेटवर्क्स एवं पायथन।',
    chapters: [

      // ----------------------------------------------------
      // CHAPTER 1: DIGITAL LOGIC, NUMBER SYSTEMS & BOOLEAN ALGEBRA
      // ----------------------------------------------------
      {
        id: 'cs-ch-digital-logic',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 1,
        slug: 'digital-logic-number-systems',
        titleEn: 'Digital Logic, Number Systems & Boolean Algebra',
        titleHi: 'डिजिटल लॉजिक, संख्या पद्धतियां एवं बूलियन बीजगणित',
        descriptionEn: 'Binary, Octal, Hexadecimal conversions, 1\'s and 2\'s complement, logic gates, Universal Gates (NAND/NOR), De Morgan\'s laws, and K-Maps.',
        descriptionHi: 'बाइनरी, हेक्साडेसिमल, 2 का पूरक, यूनिवर्सल लॉजिक गेट्स (NAND/NOR), डी मॉर्गन के नियम एवं कार्नो मैप (K-Map)।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 75,
        topics: [
          // Topic 1.1: 2's Complement & Number Systems
          {
            id: 'cs-topic-number-systems-twos-comp',
            chapterId: 'cs-ch-digital-logic',
            topicNumber: 1,
            slug: 'number-systems-and-twos-complement',
            titleEn: 'Number Conversions & 2\'s Complement Arithmetic',
            titleHi: 'संख्या परिवर्तन एवं 2\'s पूरक अंकगणित',
            descriptionEn: 'Range of signed integers in 2\'s complement ($-2^{n-1}$ to $2^{n-1}-1$), overflow detection, and hex/binary fast conversion.',
            descriptionHi: '8-बिट 2\'s complement की परास (-128 से +127), बाइनरी से हेक्साडेसिमल परिवर्तन, तथा ओवरफ्लो के नियम।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.78 Series A)',
            tutorial: {
              id: 'tut-cs-twos-comp',
              topicId: 'cs-topic-number-systems-twos-comp',
              titleEn: 'Number Systems & 2\'s Complement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु संख्या पद्धतियां एवं 2\'s पूरक का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Master 2\'s complement representation for signed integers.',
                'Derive the standard n-bit range formula: ==[-2^(n-1) to +2^(n-1) - 1]==.',
                'Perform binary, octal, and hexadecimal conversions using 3-bit and 4-bit grouping.',
                'Detect arithmetic overflow when adding two signed binary numbers.'
              ],
              introductionEn: 'Digital logic and binary representation form the foundational scoring section of the BPSC TRE Computer Science paper. Questions testing the mathematical bounds of 2\'s complement signed numbers have appeared in every single TRE examination without exception.',
              introductionHi: 'डिजिटल लॉजिक और संख्या पद्धतियां BPSC TRE कंप्यूटर साइंस के 80 अंकों वाले मुख्य विषय पत्र का सबसे महत्वपूर्ण भाग हैं। 2\'s complement की संख्या सीमा (-128 से +127) से संबंधित प्रश्न प्रत्येक TRE परीक्षा में पूछे गए हैं।',
              conceptSections: [
                {
                  title: '1. Why Modern Computers Use 2\'s Complement',
                  contentMarkdownEn: 'Modern computer ALUs utilize ==2\'s complement== for representing signed integers because:\\n* It provides a **single unique representation for zero** (unlike 1\'s complement which has +0 and -0).\\n* Addition and subtraction use the exact same hardware circuit.\\n\\n**Representation Range for n Bits:**\\n* **Unsigned Integer Range:** $0$ to $2^n - 1$\\n* **1\'s Complement Range:** $-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$\\n* **2\'s Complement Range:** ==$-2^{n-1}$ to $+2^{n-1} - 1$==\\n\\nFor an 8-bit byte ($n=8$):\\n* Smallest negative number: $-2^7 = ==-128==$ (`10000000`)\\n* Largest positive number: $+2^7 - 1 = ==+127==$ (`01111111`)',
                  tableData: {
                    headers: ['Bit Width (n)', 'Unsigned Range', '1\'s Complement Range', '2\'s Complement Range (BPSC Focus)'],
                    rows: [
                      ['4 bits', '0 to 15', '-7 to +7', '== -8 to +7 =='],
                      ['8 bits (1 Byte)', '0 to 255', '-127 to +127', '== -128 to +127 == (TRE 2.0 Q.78)'],
                      ['16 bits (Short)', '0 to 65,535', '-32,767 to +32,767', '== -32,768 to +32,767 =='],
                      ['32 bits (Int)', '0 to 4.29B', '-(2^31 - 1) to +(2^31 - 1)', '== -2,147,483,648 to +2,147,483,647 ==']
                    ]
                  }
                },
                {
                  title: '2. 5-Second Shortcut for 2\'s Complement',
                  contentMarkdownEn: '**Fast Exam Derivation Method:**\\n1. Scan binary bits from **Right to Left (LSB to MSB)**.\\n2. Keep all digits unchanged up to and including the **first \'1\'**.\\n3. Invert all remaining bits to the left (0 becomes 1, 1 becomes 0).\\n\\n*Example:* Find 2\'s complement of `01011000`:\\n* Scan right-to-left: `...1000` -> keep unchanged.\\n* Invert remaining bits `0101` -> becomes `1010`.\\n* Result = ==`10101000`==.'
                }
              ],
              importantDefinitions: [
                {
                  term: '2\'s Complement',
                  definitionEn: 'A mathematical operation on binary numbers: invert all bits (1\'s complement) and add 1 to the LSB.',
                  definitionHi: 'बाइनरी संख्या के सभी बिट्स को उलटकर (0 को 1, 1 को 0) उसमें 1 जोड़ने पर 2\'s पूरक प्राप्त होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: '2\'s Complement Range Formula',
                  formulaOrRule: 'Range = -2^(n-1) to +(2^(n-1) - 1)',
                  explanationEn: 'For 8 bits: -2^7 to +2^7 - 1 = ==-128 to +127==.',
                  explanationHi: '8-बिट हेतु: -128 से +127।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'What is the range of numbers that can be represented in 8-bit 2\'s complement form? (A) -127 to +127 (B) -128 to +127 (C) 0 to 255 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Recall the standard formula for n-bit 2\'s complement: -2^(n-1) to +(2^(n-1) - 1).\\n2. For 8 bits, n = 8.\\n3. Lower bound = -2^(8-1) = -2^7 = -128.\\n4. Upper bound = +(2^(8-1) - 1) = +(128 - 1) = +127.\\n5. Official BPSC TRE 2.0 Answer Key: Option (B) -128 to +127.',
                  shortcutTrick: 'In 2\'s complement, negative side has ONE EXTRA number (-128 to +127).'
                }
              ],
              practicalApplications: ['ALU integer representation, fixed-point arithmetic, and memory addressing.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Choosing -127 to +127 for 2\'s complement.',
                  whyWrongEn: '-127 to +127 is for 1\'s complement or signed magnitude because of double zero.',
                  correctWayEn: '2\'s complement has only one zero, giving range ==-128 to +127==.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  '8-bit 2\'s complement range (-128 to +127).',
                  'Hexadecimal to binary fast 4-bit conversion.',
                  'Overflow condition: adding two positive numbers yields negative.'
                ],
                commonDistractorTraps: ['Confusing 1\'s complement range (-127 to +127) with 2\'s complement.'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.78 Series A)']
              },
              quickRevisionPoints: [
                'Unsigned 8-bit: 0 to 255.',
                'Signed 8-bit 2\'s complement: ==-128 to +127==.',
                '2\'s complement = 1\'s complement + 1.',
                'Hex digit = Exactly 4 binary bits.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-logic-1',
                  questionEn: 'What is the 2\'s complement representation of the decimal number -13 in an 8-bit system?',
                  questionHi: '8-बिट सिस्टम में दशमलव संख्या -13 का 2\'s पूरक क्या होगा?',
                  options: [
                    { id: 'A', textEn: '11110011', isCorrect: true },
                    { id: 'B', textEn: '11110010', isCorrect: false },
                    { id: 'C', textEn: '00001101', isCorrect: false },
                    { id: 'D', textEn: '10001101', isCorrect: false }
                  ],
                  explanationEn: '+13 is 00001101. Inverting bits gives 11110010. Adding 1 yields 11110011.',
                  conceptTested: '2\'s complement calculation'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-1',
                topicId: 'cs-topic-number-systems-twos-comp',
                chapterId: 'cs-ch-digital-logic',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'What is the range of signed decimal integer numbers that can be represented using 8-bit 2\'s complement representation in computer systems?',
                questionTextHi: 'कंप्यूटर सिस्टम में 8-बिट 2\'s पूरक (2\'s complement) प्रतिनिधित्व का उपयोग करके कितनी परास (Range) की हस्ताक्षरित दशमलव पूर्णांक संख्याओं को दर्शाया जा सकता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '-127 to +127', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '-128 to +127', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '0 to 255', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In 2\'s complement representation with n bits, the range is -2^(n-1) to +(2^(n-1) - 1). For n=8, this evaluates to -2^7 to +(2^7 - 1), which equals -128 to +127.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 78,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.78 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 1.2: Logic Gates & Universal Gates (NAND / NOR)
          {
            id: 'cs-topic-logic-gates-universal',
            chapterId: 'cs-ch-digital-logic',
            topicNumber: 2,
            slug: 'logic-gates-universal-nand-nor',
            titleEn: 'Logic Gates & Universal Gates (NAND / NOR)',
            titleHi: 'लॉजिक गेट्स एवं यूनिवर्सल गेट्स (NAND / NOR)',
            descriptionEn: 'Basic gates (AND, OR, NOT), Universal gates (NAND, NOR), Exclusive gates (XOR, XNOR), and minimum gate implementation requirements.',
            descriptionHi: 'मूल गेट, यूनिवर्सल गेट (NAND, NOR), XOR, XNOR की सत्यता सारणी, तथा न्यूनतम आवश्यक गेट्स की संख्या।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.72 Series A)',
            tutorial: {
              id: 'tut-cs-gates',
              topicId: 'cs-topic-logic-gates-universal',
              titleEn: 'Logic Gates & Universal Gates for BPSC TRE',
              titleHi: 'BPSC TRE हेतु लॉजिक गेट्स एवं यूनिवर्सल गेट्स का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Define Universal Gates and explain why ==NAND and NOR== are universal.',
                'Memorize the minimum number of NAND and NOR gates required to build basic gates.',
                'Understand XOR and XNOR truth tables and their parity checking applications.',
                'Solve BPSC questions asking for gate identification from Boolean equations.'
              ],
              introductionEn: 'Logic gates are the elemental building blocks of all modern digital integrated circuits. BPSC TRE regularly tests candidates on Universal Gate implementations and minimum gate count theorems.',
              introductionHi: 'लॉजिक गेट डिजिटल सर्किट की आधारशिला हैं। BPSC TRE में यूनिवर्सल गेट्स (NAND और NOR) तथा किसी विशेष गेट को बनाने के लिए आवश्यक न्यूनतम NAND/NOR गेट्स की संख्या से संबंधित प्रश्न निश्चित रूप से पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Universal Gates: NAND and NOR',
                  contentMarkdownEn: 'A **Universal Gate** is a gate that can implement ==any Boolean function== without using any other gate type.\\n* There are strictly **TWO Universal Gates**: ==NAND gate== and ==NOR gate==.\\n* AND, OR, and NOT are **Basic Gates** (not universal on their own).\\n\\n**Minimum Gates Implementation Table (High-Yield BPSC Formula):**',
                  tableData: {
                    headers: ['Target Gate', 'Min NAND Gates Needed', 'Min NOR Gates Needed', 'BPSC Exam Priority'],
                    rows: [
                      ['NOT Gate', '==1==', '==1==', 'High'],
                      ['AND Gate', '==2==', '==3==', 'Very High'],
                      ['OR Gate', '==3==', '==2==', 'Very High'],
                      ['NOR Gate', '==4==', '==1==', 'Moderate'],
                      ['NAND Gate', '==1==', '==4==', 'Moderate'],
                      ['XOR Gate', '==4==', '==5==', 'Highest (Frequent Trap)'],
                      ['XNOR Gate', '==5==', '==4==', 'Highest (Frequent Trap)']
                    ]
                  }
                },
                {
                  title: '2. XOR Gate: The Odd-1s Detector',
                  contentMarkdownEn: '* **XOR (Exclusive-OR):** Output is HIGH ($1$) when inputs are **different** (odd parity):\\n  * $Y = A \\\\oplus B = A\\\\bar{B} + \\\\bar{A}B$\\n* **XNOR (Equivalence / Coincidence Gate):** Output is HIGH ($1$) when inputs are **identical**:\\n  * $Y = A \\\\odot B = AB + \\\\bar{A}\\\\bar{B}$'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Universal Gate',
                  definitionEn: 'A digital logic gate (NAND or NOR) that can implement any Boolean switching function without requiring any other gate type.',
                  definitionHi: 'वह गेट (NAND या NOR) जिसकी सहायता से किसी भी बूलियन फलन या अन्य सभी गेट्स को बनाया जा सकता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'NAND Implementation Rule',
                  formulaOrRule: 'NOT=1, AND=2, OR=3, XOR=4, XNOR=5 NAND gates',
                  explanationEn: 'Ascending sequence 1-2-3-4-5 for NOT, AND, OR, XOR, XNOR using NAND gates.',
                  explanationHi: 'NAND से बनाने का सरल क्रम: NOT (1), AND (2), OR (3), XOR (4), XNOR (5)।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which of the following logic gates is classified as a "Universal Gate"? (A) AND gate (B) NAND gate (C) XOR gate (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. A universal gate can create all other logic functions (AND, OR, NOT).\\n2. Only NAND and NOR possess this universal property.\\n3. Among the options, NAND is present at (B).\\n4. Official BPSC TRE 1.0 Key: Option (B) NAND gate.',
                  shortcutTrick: 'Universal Gates are ONLY TWO: NAND and NOR.'
                }
              ],
              practicalApplications: ['ASIC fabrication, FPGA logic elements, and digital memory latches.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking XOR is a universal gate.',
                  whyWrongEn: 'XOR cannot implement the NOT function without an external high voltage supply, hence it is not universal.',
                  correctWayEn: 'Only NAND and NOR are universal gates.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Identification of Universal Gates (NAND & NOR - TRE 1.0 Q.72).',
                  'Number of NAND gates required to build XOR (4 NAND gates).',
                  'XOR gate truth table.'
                ],
                commonDistractorTraps: ['Selecting AND or OR as universal gates.'],
                relatedPyqReferences: ['BPSC TRE 1.0 (26-08-2023, Shift 1, Q.72 Series A)']
              },
              quickRevisionPoints: [
                'Universal Gates: NAND and NOR only.',
                'NAND = AND + NOT; NOR = OR + NOT.',
                'To build XOR: 4 NAND gates or 5 NOR gates.',
                'To build XNOR: 5 NAND gates or 4 NOR gates.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-gate-1',
                  questionEn: 'How many minimum 2-input NAND gates are required to design an exclusive-OR (XOR) gate?',
                  questionHi: 'एक 2-इनपुट XOR गेट को डिजाइन करने के लिए न्यूनतम कितने NAND गेट्स की आवश्यकता होती है?',
                  options: [
                    { id: 'A', textEn: '3', isCorrect: false },
                    { id: 'B', textEn: '4', isCorrect: true },
                    { id: 'C', textEn: '5', isCorrect: false },
                    { id: 'D', textEn: '6', isCorrect: false }
                  ],
                  explanationEn: 'An XOR gate requires exactly 4 NAND gates.',
                  conceptTested: 'XOR using NAND gates'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-gates-1',
                topicId: 'cs-topic-logic-gates-universal',
                chapterId: 'cs-ch-digital-logic',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following digital logic gates is officially designated as a "Universal Logic Gate"?',
                questionTextHi: 'निम्नलिखित में से किस डिजिटल लॉजिक गेट को आधिकारिक रूप से "यूनिवर्सल लॉजिक गेट" कहा जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'AND gate', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'NAND gate', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'XOR gate', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'NAND and NOR gates are termed Universal Gates because any Boolean switching function and all other gates (AND, OR, NOT, XOR, XNOR) can be implemented solely using combinations of NAND or NOR gates.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 72,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.72 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 1.3: Boolean Algebra, De Morgan's & K-Maps
          {
            id: 'cs-topic-boolean-algebra-kmaps',
            chapterId: 'cs-ch-digital-logic',
            topicNumber: 3,
            slug: 'boolean-algebra-demorgan-kmaps',
            titleEn: 'Boolean Algebra, De Morgan\'s Laws & Karnaugh Maps (K-Maps)',
            titleHi: 'बूलियन बीजगणित, डी मॉर्गन नियम एवं कार्नो मैप (K-Map)',
            descriptionEn: 'De Morgan\'s laws, Boolean simplification axioms, Gray code adjacency, and Karnaugh Map (K-Map) minimization.',
            descriptionHi: 'डी मॉर्गन प्रमेय, K-Map में ग्रे कोड (Gray Code) क्रम, आसन्न सेल में केवल 1-बिट परिवर्तन, तथा बूलियन सरलीकरण।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.75 Series A)',
            tutorial: {
              id: 'tut-cs-kmaps',
              topicId: 'cs-topic-boolean-algebra-kmaps',
              titleEn: 'Boolean Algebra & K-Maps for BPSC TRE',
              titleHi: 'BPSC TRE हेतु बूलियन बीजगणित एवं K-Maps का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State and apply De Morgan\'s first and second laws.',
                'Understand why K-Map axes are labeled in Gray Code (00, 01, 11, 10).',
                'Identify adjacent cell grouping sizes in K-Maps: powers of 2 (1, 2, 4, 8, 16).',
                'Eliminate redundant terms using Boolean consensus and absorption laws.'
              ],
              introductionEn: 'Boolean minimization is essential for reducing gate complexity in digital design. BPSC questions frequently test the Gray code bit-change property of Karnaugh maps and De Morgan transformation identities.',
              introductionHi: 'बूलियन सरलीकरण और K-Map डिजिटल इलेक्ट्रॉनिक्स के अनिवार्य भाग हैं। K-Map में आसन्न सेल में केवल 1 बिट का बदलाव होता है (Gray Code: 00, 01, 11, 10), जिससे सरलीकरण संभव होता है।',
              conceptSections: [
                {
                  title: '1. De Morgan\'s Theorems',
                  contentMarkdownEn: '* **First Theorem:** The complement of a product equals the sum of complements:\\n  * ==$\\\\overline{A \\\\cdot B} = \\\\bar{A} + \\\\bar{B}$==\\n* **Second Theorem:** The complement of a sum equals the product of complements:\\n  * ==$\\\\overline{A + B} = \\\\bar{A} \\\\cdot \\\\bar{B}$==\\n* **Mnemonic:** "Break the line, change the sign."'
                },
                {
                  title: '2. Karnaugh Map (K-Map) Gray Code Adjacency',
                  contentMarkdownEn: 'In a K-Map, rows and columns are arranged in **Gray Code** order: ==`00, 01, 11, 10`== (NOT binary `00, 01, 10, 11`).\\n* **Crucial Property:** Between any two adjacent cells, ==ONLY ONE BIT CHANGES==.\\n* This allows the minimization $(A + \\\\bar{A} = 1)$ to eliminate a literal when two adjacent cells are grouped together.\\n* Groups must always be powers of 2: **1, 2, 4, 8, 16** cells.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Gray Code',
                  definitionEn: 'An unweighted binary numeral system where two successive values differ in only one bit position (unit distance code).',
                  definitionHi: 'वह कोड जिसमें दो लगातार संख्याओं के बीच केवल एक बिट का अंतर होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'K-Map Grouping Rule',
                  formulaOrRule: 'Group Size = 2^k (1, 2, 4, 8, 16) | Adjacent Cells Differ by 1 Bit',
                  explanationEn: 'Diagonal grouping is strictly prohibited in K-Maps.',
                  explanationHi: 'K-Map में विकर्ण (diagonal) ग्रुपिंग वर्जित है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'In a Karnaugh Map, the cell addresses are arranged according to Gray code so that between any two adjacent cells: (A) Only one bit changes (B) Two bits change (C) All bits change (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Karnaugh maps use Gray code ordering (00, 01, 11, 10).\\n2. The defining property of Gray code is unit distance (single-bit change between adjacent states).\\n3. Official BPSC TRE 2.0 Key: Option (A) Only one bit changes.',
                  shortcutTrick: 'Gray code = 1-bit change only.'
                }
              ],
              practicalApplications: ['Digital logic circuit optimization, PLA and PAL programming.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Numbering K-Map columns as 00, 01, 10, 11.',
                  whyWrongEn: '01 to 10 changes two bits simultaneously, violating physical adjacency.',
                  correctWayEn: 'Always use Gray code: 00, 01, 11, 10.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Gray code adjacent bit difference (1 bit - TRE 2.0 Q.75).',
                  'De Morgan\'s law conversions.',
                  'Grouping of 4 cells (quad) eliminates 2 variables.'
                ],
                commonDistractorTraps: ['Selecting 2 bits change for K-Map cells.'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.75 Series A)']
              },
              quickRevisionPoints: [
                'Gray Code = Unit distance code (1 bit change).',
                'De Morgan: Break line, change sign.',
                'Quad (4 cells) eliminates 2 variables; Octet (8 cells) eliminates 3 variables.',
                'A + A\'B = A + B (Absorption rule).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-kmap-1',
                  questionEn: 'In a 4-variable K-Map, grouping 8 adjacent cells (an octet) eliminates how many variables from the simplified term?',
                  questionHi: '4-चर वाले K-Map में 8 आसन्न सेल (octet) का एक ग्रुप बनाने पर कितने चर (variables) समाप्त हो जाते हैं?',
                  options: [
                    { id: 'A', textEn: '1 variable', isCorrect: false },
                    { id: 'B', textEn: '2 variables', isCorrect: false },
                    { id: 'C', textEn: '3 variables', isCorrect: true },
                    { id: 'D', textEn: '4 variables', isCorrect: false }
                  ],
                  explanationEn: 'Group of size 2^k eliminates k variables. For an octet (2^3), 3 variables are eliminated.',
                  conceptTested: 'K-Map octet variable elimination'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-kmaps-1',
                topicId: 'cs-topic-boolean-algebra-kmaps',
                chapterId: 'cs-ch-digital-logic',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In a Karnaugh Map (K-Map), the cells are arranged according to Gray code so that between any two adjacent horizontal or vertical cells:',
                questionTextHi: 'कार्नो मैप (K-Map) में खानों (cells) को ग्रे कोड के अनुसार व्यवस्थित किया जाता है, ताकि किन्हीं दो आसन्न क्षैतिज या ऊर्ध्वाधर खानों के बीच:',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Only one bit changes', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Two bits change simultaneously', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'All bits invert', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'K-Maps rely on Gray code labeling (00, 01, 11, 10) because Gray code possesses the single-bit change property (unit distance). This guarantees that adjacent cells differ in exactly one variable, allowing algebraic minimization (A + A\' = 1).',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 75,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.75 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: OPERATING SYSTEMS: SCHEDULING, DEADLOCKS & MEMORY
      // ----------------------------------------------------
      {
        id: 'cs-ch-os',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 2,
        slug: 'operating-systems-scheduling',
        titleEn: 'Operating Systems: Scheduling, Deadlocks & Memory',
        titleHi: 'ऑपरेटिंग सिस्टम: शेड्यूलिंग, डेडलॉक एवं मेमोरी प्रबंधन',
        descriptionEn: 'Process states, CPU scheduling (FCFS, SJF, Round Robin), Coffman deadlock conditions, Banker\'s Algorithm, Paging, and Belady\'s Anomaly.',
        descriptionHi: 'प्रोसेस शेड्यूलिंग, टर्नअराउंड/वेटिंग टाइम, डेडलॉक की 4 शर्तें, सेमाफोर, बैंकर एल्गोरिदम, तथा पेज रिप्लेसमेंट में बेलाडी विसंगति।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 2.1: CPU Scheduling & Deadlocks
          {
            id: 'cs-topic-cpu-scheduling-deadlocks',
            chapterId: 'cs-ch-os',
            topicNumber: 1,
            slug: 'cpu-scheduling-and-deadlocks',
            titleEn: 'CPU Scheduling Algorithms & Deadlock Coffman Conditions',
            titleHi: 'CPU शेड्यूलिंग एल्गोरिदम एवं डेडलॉक की शर्तें',
            descriptionEn: 'Formulas for Turnaround Time (TAT) and Waiting Time (WT), SJF optimality, Round Robin quantum impact, and 4 Coffman conditions.',
            descriptionHi: 'TAT और Waiting Time की गणना, SJF का न्यूनतम औसत समय, राउंड रॉबिन, तथा डेडलॉक की 4 शर्तें।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.52 Series A)',
            tutorial: {
              id: 'tut-cs-os',
              topicId: 'cs-topic-cpu-scheduling-deadlocks',
              titleEn: 'CPU Scheduling & Deadlocks for BPSC TRE',
              titleHi: 'BPSC TRE हेतु CPU शेड्यूलिंग एवं डेडलॉक का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Calculate Turnaround Time (TAT = CT - AT) and Waiting Time (WT = TAT - BT).',
                'Understand why Shortest Job First (SJF) gives minimum average waiting time.',
                'Memorize the 4 Coffman conditions for deadlock.',
                'Identify deadlock handling strategies: Prevention, Avoidance (Banker\'s Algorithm), and Detection.'
              ],
              introductionEn: 'Process scheduling and synchronization are among the highest-frequency topics in the BPSC TRE Computer Science syllabus. Questions evaluating scheduling optimality and deadlock prevention appear consistently.',
              introductionHi: 'प्रोसेस शेड्यूलिंग और डेडलॉक BPSC TRE कंप्यूटर साइंस के अति-महत्वपूर्ण विषय हैं। SJF द्वारा न्यूनतम औसत प्रतीक्षा समय तथा डेडलॉक की 4 शर्तों से संबंधित प्रश्न आयोग द्वारा बार-बार पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Standard CPU Scheduling Formulas',
                  contentMarkdownEn: '* **Turnaround Time (TAT):** Total time taken from submission to completion:\\n  * ==$TAT = \\\\text{Completion Time (CT)} - \\\\text{Arrival Time (AT)}$==\\n* **Waiting Time (WT):** Total time spent waiting in ready queue:\\n  * ==$WT = \\\\text{Turnaround Time (TAT)} - \\\\text{Burst Time (BT)}$==\\n* **SJF Optimality Theorem:** Shortest Job First (non-preemptive or preemptive SRTF) gives the **minimum average waiting time** for a given set of processes.'
                },
                {
                  title: '2. The 4 Necessary Coffman Conditions for Deadlock',
                  contentMarkdownEn: 'A deadlock can arise if and only if all four conditions hold simultaneously in a system:\\n1. ==Mutual Exclusion:== At least one resource must be held in a non-shareable mode.\\n2. ==Hold and Wait:== A process must be holding at least one resource and waiting to acquire additional resources held by others.\\n3. ==No Preemption:== Resources cannot be preempted; a resource can be released only voluntarily by the process holding it.\\n4. ==Circular Wait:== A closed chain of processes exists such that each process holds at least one resource needed by the next process in the chain.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Deadlock',
                  definitionEn: 'A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.',
                  definitionHi: 'वह स्थिति जहाँ दो या अधिक प्रोसेस एक-दूसरे द्वारा रोके गए संसाधनों की प्रतीक्षा में अनिश्चित काल के लिए रुक जाते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Scheduling Calculation Rule',
                  formulaOrRule: 'TAT = CT - AT | WT = TAT - BT | SJF = Minimum Avg WT',
                  explanationEn: 'Response Time for non-preemptive algorithms equals Waiting Time.',
                  explanationHi: 'नॉन-प्रिएम्प्टिव एल्गोरिदम में रिस्पांस टाइम और वेटिंग टाइम बराबर होते हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which CPU scheduling algorithm gives the minimum average waiting time for a given set of processes? (A) FCFS (B) SJF (C) Round Robin (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Theoretical optimality theorem of CPU scheduling states that Shortest Job First (SJF) is mathematically optimal.\\n2. It schedule processes with shortest burst time first, minimizing the sum of waiting times.\\n3. Official BPSC TRE 1.0 Key: Option (B) SJF.',
                  shortcutTrick: 'Minimum average waiting time = ALWAYS SJF.'
                }
              ],
              practicalApplications: ['Operating system kernel process management, real-time audio scheduling.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing Deadlock Prevention with Deadlock Avoidance.',
                  whyWrongEn: 'Prevention negates one of the 4 Coffman conditions; Avoidance uses Banker\'s algorithm dynamically ensuring a safe state.',
                  correctWayEn: 'Banker\'s algorithm is for Deadlock Avoidance.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'SJF optimality for minimum waiting time (TRE 1.0 Q.52).',
                  '4 Coffman conditions.',
                  'Banker\'s algorithm safe sequence.'
                ],
                commonDistractorTraps: ['Assuming FCFS or Round Robin yields minimum waiting time.'],
                relatedPyqReferences: ['BPSC TRE 1.0 (26-08-2023, Shift 1, Q.52 Series A)']
              },
              quickRevisionPoints: [
                'TAT = CT - AT; WT = TAT - BT.',
                'SJF provides minimum average waiting time.',
                '4 Deadlock Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
                'Banker\'s Algorithm = Deadlock Avoidance via Safe State.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-os-1',
                  questionEn: 'Which deadlock handling approach dynamically examines resource allocation state to ensure circular wait never occurs?',
                  questionHi: 'कौन-सा दृष्टिकोण सुरक्षित स्थिति (Safe State) सुनिश्चित करने के लिए संसाधन आवंटन की गतिशील जांच करता है?',
                  options: [
                    { id: 'A', textEn: 'Deadlock Prevention', isCorrect: false },
                    { id: 'B', textEn: 'Deadlock Avoidance (Banker\'s Algorithm)', isCorrect: true },
                    { id: 'C', textEn: 'Deadlock Detection', isCorrect: false },
                    { id: 'D', textEn: 'Ostrich Algorithm', isCorrect: false }
                  ],
                  explanationEn: 'Deadlock avoidance dynamically tracks resource availability to ensure the system remains in a safe state.',
                  conceptTested: 'Deadlock Avoidance'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-2',
                topicId: 'cs-topic-cpu-scheduling-deadlocks',
                chapterId: 'cs-ch-os',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following CPU scheduling algorithms is mathematically provable to result in the minimum average waiting time for a given set of processes?',
                questionTextHi: 'निम्नलिखित में से कौन-सा CPU शेड्यूलिंग एल्गोरिदम गणितीय रूप से किसी दिए गए प्रोसेस सेट के लिए न्यूनतम औसत प्रतीक्षा समय (Minimum Average Waiting Time) प्रदान करता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'First-Come, First-Served (FCFS)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Shortest Job First (SJF)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Round Robin (RR)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Shortest Job First (SJF) is provably optimal because scheduling a shorter job before a longer one decreases the waiting time of the shorter job more than it increases that of the longer job, minimizing total and average waiting time.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 52,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.52 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 2.2: Process Synchronization & Semaphores
          {
            id: 'cs-topic-process-sync-semaphores',
            chapterId: 'cs-ch-os',
            topicNumber: 2,
            slug: 'process-sync-semaphores-critical-section',
            titleEn: 'Process Synchronization, Critical Section & Semaphores',
            titleHi: 'प्रोसेस सिंक्रोनाइज़ेशन, क्रिटिकल सेक्शन एवं सेमाफोर',
            descriptionEn: 'Critical section problem (Mutual Exclusion, Progress, Bounded Waiting), Counting vs Binary Semaphore, and wait(P) / signal(V) arithmetic.',
            descriptionHi: 'क्रिटिकल सेक्शन की 3 शर्तें, काउंटिंग और बाइनरी सेमाफोर, तथा Wait (P) एवं Signal (V) ऑपरेशन्स की गणना।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.58 Series A)',
            tutorial: {
              id: 'tut-cs-semaphores',
              topicId: 'cs-topic-process-sync-semaphores',
              titleEn: 'Process Synchronization & Semaphores for BPSC TRE',
              titleHi: 'BPSC TRE हेतु प्रोसेस सिंक्रोनाइज़ेशन एवं सेमाफोर का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State the 3 requirements of the Critical Section problem.',
                'Differentiate between Binary Semaphore (Mutex: 0 or 1) and Counting Semaphore.',
                'Calculate the final value of a semaphore given initial value, P, and V operations.',
                'Identify race conditions and understand atomic test-and-set hardware.'
              ],
              introductionEn: 'Process synchronization ensures concurrent processes share system resources without data inconsistency. BPSC TRE regularly tests numerical semaphore calculations and the three fundamental conditions of critical sections.',
              introductionHi: 'प्रोसेस सिंक्रोनाइज़ेशन समवर्ती प्रोसेसों के बीच डेटा असंगति को रोकता है। BPSC TRE में काउंटिंग सेमाफोर पर P (wait) और V (signal) ऑपरेशन के बाद अंतिम मान निकालने के संख्यात्मक प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Three Rules of Critical Section Solution',
                  contentMarkdownEn: 'A valid solution to the critical section problem must satisfy all three criteria:\\n1. ==Mutual Exclusion:== If process $P_i$ is executing in its critical section, no other process can execute in its critical section.\\n2. ==Progress:== If no process is executing in its critical section and some wish to enter, only those not in their remainder sections can participate in deciding who enters next.\\n3. ==Bounded Waiting:== There must be a bound on the number of times other processes are allowed to enter their critical sections after a process has made a request to enter.'
                },
                {
                  title: '2. Semaphore Operations and Arithmetic',
                  contentMarkdownEn: 'A **Semaphore** is an integer variable accessed only through two atomic operations:\\n* **Wait / P Operation:** Decrements the semaphore value: ==$S = S - 1$==. If $S < 0$, process is blocked.\\n* **Signal / V Operation:** Increments the semaphore value: ==$S = S + 1$==.\\n\\n**Master Calculation Formula:**\\n==$S_{\\\\text{final}} = S_{\\\\text{initial}} - \\\\text{Number of } P \\\\text{ operations} + \\\\text{Number of } V \\\\text{ operations}$==\\n\\n*Example:* Initial $S = 10$. Execute $6 P$ and $4 V$ operations:\\n* $S_{\\\\text{final}} = 10 - 6 + 4 = ==8==$.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Semaphore',
                  definitionEn: 'A synchronization tool: a protected integer variable that provides mutual exclusion between concurrent cooperating processes.',
                  definitionHi: 'सिंक्रोनाइज़ेशन उपकरण: एक सुरक्षित पूर्णांक चर जो प्रोसेसों के बीच म्यूचुअल एक्सक्लूजन प्रदान करता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Semaphore Final Value Formula',
                  formulaOrRule: 'Final S = Initial S - (P operations) + (V operations)',
                  explanationEn: 'P (wait) subtracts 1; V (signal) adds 1.',
                  explanationHi: 'P ऑपरेशन 1 घटाता है; V ऑपरेशन 1 जोड़ता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'A counting semaphore S is initialized to 10. Then 6 P (wait) operations and 4 V (signal) operations are completed on S. What is the resulting value of S? (A) 8 (B) 10 (C) 12 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Initial value of semaphore S = 10.\\n2. Each P (wait) operation decrements S by 1: 6 P operations subtract 6 -> 10 - 6 = 4.\\n3. Each V (signal) operation increments S by 1: 4 V operations add 4 -> 4 + 4 = 8.\\n4. Resulting value = 8.\\n5. Official BPSC TRE 2.0 Answer Key: Option (A) 8.',
                  shortcutTrick: 'S_final = 10 - 6 + 4 = 8.'
                }
              ],
              practicalApplications: ['Database transaction locking, printer spooler synchronization, multithreading.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Adding on P and subtracting on V.',
                  whyWrongEn: 'P (proberen/wait) always decrements; V (verhogen/signal) always increments.',
                  correctWayEn: 'Remember: P = Penalize/Pause (-1); V = Victory/Value (+1).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Semaphore arithmetic (TRE 2.0 Q.58).',
                  'Three requirements of Critical Section (Mutual Exclusion, Progress, Bounded Waiting).',
                  'Binary semaphore equals Mutex.'
                ],
                commonDistractorTraps: ['Confusing P with increment and V with decrement.'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.58 Series A)']
              },
              quickRevisionPoints: [
                'P operation: Decrement (-1).',
                'V operation: Increment (+1).',
                'Final S = Initial - P + V.',
                'Critical Section: Mutual Exclusion, Progress, Bounded Waiting.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-sem-1',
                  questionEn: 'A counting semaphore S is initialized to 7. After 9 wait operations and 5 signal operations, what is the value of S?',
                  questionHi: 'एक काउंटिंग सेमाफोर S का प्रारंभिक मान 7 है। 9 wait और 5 signal ऑपरेशनों के बाद S का मान क्या होगा?',
                  options: [
                    { id: 'A', textEn: '3', isCorrect: true },
                    { id: 'B', textEn: '5', isCorrect: false },
                    { id: 'C', textEn: '7', isCorrect: false },
                    { id: 'D', textEn: '11', isCorrect: false }
                  ],
                  explanationEn: 'S = 7 - 9 + 5 = 3.',
                  conceptTested: 'Semaphore arithmetic'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-sem-1',
                topicId: 'cs-topic-process-sync-semaphores',
                chapterId: 'cs-ch-os',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'A counting semaphore S is initialized to 10. Then 6 P (wait) operations and 4 V (signal) operations are performed on S. What is the resulting value of S?',
                questionTextHi: 'एक काउंटिंग सेमाफोर S का प्रारंभिक मान 10 है। इसके बाद S पर 6 P (wait) ऑपरेशन और 4 V (signal) ऑपरेशन संपन्न किए जाते हैं। S का परिणामी मान क्या होगा?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '8', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: '10', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '12', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The wait operation P decrements the semaphore by 1, and signal V increments it by 1. Starting with S = 10, executing 6 P operations yields 10 - 6 = 4. Executing 4 V operations yields 4 + 4 = 8.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 58,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.58 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 2.3: Paging & Belady's Anomaly
          {
            id: 'cs-topic-paging-virtual-memory',
            chapterId: 'cs-ch-os',
            topicNumber: 3,
            slug: 'paging-virtual-memory-beladys-anomaly',
            titleEn: 'Memory Management: Paging, TLB & Belady\'s Anomaly',
            titleHi: 'मेमोरी प्रबंधन: पेजिंग, TLB एवं बेलाडी विसंगति',
            descriptionEn: 'Paging hardware, Translation Lookaside Buffer (TLB), Page Replacement Algorithms (FIFO, LRU, OPT), and Belady\'s Anomaly.',
            descriptionHi: 'पेज टेबल, TLB, FIFO, LRU एवं ऑप्टिमल पेज रिप्लेसमेंट; FIFO में फ्रेम बढ़ाने पर पेज फॉल्ट बढ़ने की विसंगति (Belady\'s Anomaly)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.67 Series A)',
            tutorial: {
              id: 'tut-cs-paging',
              topicId: 'cs-topic-paging-virtual-memory',
              titleEn: 'Paging & Page Replacement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु पेजिंग एवं पेज रिप्लेसमेंट का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand logical-to-physical address translation via Page Table.',
                'Explain Belady\'s Anomaly and identify which algorithms suffer from it (FIFO).',
                'Demonstrate why LRU (Least Recently Used) and Optimal do NOT suffer from Belady\'s anomaly (Stack Algorithms).',
                'Calculate Effective Memory Access Time (EMAT) with TLB hit ratio.'
              ],
              introductionEn: 'Virtual memory allows programs larger than physical RAM to execute seamlessly. BPSC TRE regularly tests page replacement characteristics, especially Belady\'s anomaly in FIFO.',
              introductionHi: 'वर्चुअल मेमोरी और पेज रिप्लेसमेंट BPSC TRE के प्रमुख घटक हैं। FIFO एल्गोरिदम में मेमोरी फ्रेम बढ़ाने के बावजूद पेज फॉल्ट बढ़ जाना \'बेलाडी विसंगति\' (Belady\'s Anomaly) कहलाता है, जिससे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. What is Belady\'s Anomaly?',
                  contentMarkdownEn: 'Ordinarily, allocating **more page frames** to a process should decrease or keep the page fault rate constant.\\n* **Belady\'s Anomaly:** A phenomenon where increasing the number of page frames results in an ==INCREASE in the number of page faults==.\\n* **Which algorithm suffers from it?** ==FIFO (First-In, First-Out)== page replacement.\\n* **Which algorithms NEVER suffer from it?** **Stack Algorithms** such as ==LRU (Least Recently Used)== and **Optimal (OPT)**.'
                },
                {
                  title: '2. Page Replacement Algorithms Comparison',
                  contentMarkdownEn: '* **FIFO:** Replaces the oldest page loaded. Suffers from Belady\'s Anomaly.\\n* **LRU:** Replaces the page that has not been referenced for the longest period. Optimal practical algorithm.\\n* **Optimal (Bélády\'s Optimal):** Replaces the page that will not be used for the longest period in the future. Theoretical benchmark (cannot be implemented practically).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Belady\'s Anomaly',
                  definitionEn: 'The paradoxical phenomenon where increasing the number of page frames allocated to a process results in an increased number of page faults under FIFO.',
                  definitionHi: 'वह स्थिति जहाँ प्रोसेस को अधिक पेज फ्रेम आवंटित करने पर भी पेज फॉल्ट की संख्या घटती नहीं बल्कि बढ़ जाती है (केवल FIFO में)।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Belady\'s Anomaly Axiom',
                  formulaOrRule: 'Belady\'s Anomaly = FIFO only | LRU and Optimal are Immune (Stack Algorithms)',
                  explanationEn: 'Stack algorithms guarantee that the set of pages in m frames is a subset of m+1 frames.',
                  explanationHi: 'स्टैक एल्गोरिदम (LRU, OPT) में बेलाडी विसंगति कभी नहीं होती।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'Which of the following page replacement algorithms suffers from Belady\'s anomaly? (A) FIFO (B) LRU (C) Optimal (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Belady\'s anomaly is an established property of non-stack page replacement algorithms.\\n2. Among the common algorithms, FIFO is the classic algorithm exhibiting Belady\'s anomaly.\\n3. LRU and Optimal are stack algorithms and are mathematically proven to be immune.\\n4. Official BPSC TRE 3.0 Key: Option (A) FIFO.',
                  shortcutTrick: 'Belady\'s anomaly = FIFO.'
                }
              ],
              practicalApplications: ['Operating system virtual memory managers, Linux swap partitions, database buffer pools.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing LRU suffers from Belady\'s anomaly.',
                  whyWrongEn: 'LRU is a stack algorithm; the set of pages in n frames is always a subset of n+1 frames.',
                  correctWayEn: 'Only FIFO suffers from Belady\'s anomaly.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Belady\'s anomaly occurs in FIFO (TRE 3.0 Q.67).',
                  'LRU replacement principle.',
                  'Optimal algorithm as benchmark.'
                ],
                commonDistractorTraps: ['Selecting "More than one of the above" assuming LRU also has Belady\'s anomaly.'],
                relatedPyqReferences: ['BPSC TRE 3.0 (22-07-2024, Shift 1, Q.67 Series A)']
              },
              quickRevisionPoints: [
                'Belady\'s Anomaly: More frames -> More page faults.',
                'Occurs in: FIFO.',
                'Does NOT occur in: LRU, Optimal.',
                'Optimal algorithm looks into future.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-belady-1',
                  questionEn: 'Which class of page replacement algorithms is mathematically immune to Belady\'s anomaly?',
                  questionHi: 'पेज रिप्लेसमेंट एल्गोरिदम का कौन-सा वर्ग गणितीय रूप से बेलाडी विसंगति से सुरक्षित है?',
                  options: [
                    { id: 'A', textEn: 'FIFO algorithms', isCorrect: false },
                    { id: 'B', textEn: 'Stack algorithms (like LRU)', isCorrect: true },
                    { id: 'C', textEn: 'Queue algorithms', isCorrect: false },
                    { id: 'D', textEn: 'Random algorithms', isCorrect: false }
                  ],
                  explanationEn: 'Stack algorithms satisfy inclusion property and can never suffer from Belady\'s anomaly.',
                  conceptTested: 'Stack Algorithms'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-paging-1',
                topicId: 'cs-topic-paging-virtual-memory',
                chapterId: 'cs-ch-os',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following page replacement algorithms suffers from "Belady\'s Anomaly", where increasing the number of page frames results in an increased number of page faults?',
                questionTextHi: 'निम्नलिखित में से कौन-सा पेज रिप्लेसमेंट एल्गोरिदम "बेलाडी विसंगति" (Belady\'s Anomaly) से ग्रस्त होता है, जिसमें पेज फ्रेम की संख्या बढ़ाने पर पेज फॉल्ट की संख्या बढ़ जाती है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'First-In, First-Out (FIFO)', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Least Recently Used (LRU)', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Optimal Page Replacement (OPT)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Belady\'s Anomaly is a counter-intuitive phenomenon where increasing the number of page frames leads to more page faults. It occurs in FIFO because FIFO is not a stack algorithm. LRU and Optimal are stack algorithms and are immune.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 67,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.67 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: DATA STRUCTURES: TREES, STACKS, QUEUES & SORTING
      // ----------------------------------------------------
      {
        id: 'cs-ch-dsa',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 3,
        slug: 'data-structures-algorithms',
        titleEn: 'Data Structures: Trees, Stacks, Queues & Sorting',
        titleHi: 'डेटा संरचनाएं: ट्री, स्टैक, कतार एवं सॉर्टिंग एल्गोरिदम',
        descriptionEn: 'Binary Trees (Leaf Node Theorem), BST Inorder sort, Stacks (LIFO), Infix-to-Postfix, Queues (FIFO), Graph BFS/DFS, and QuickSort complexities.',
        descriptionHi: 'बाइनरी ट्री में पत्ती नोड्स का प्रमेय (n0 = n2 + 1), स्टैक से पोस्टफिक्स मूल्यांकन, कतार, ग्राफ BFS/DFS, तथा क्विक सॉर्ट की जटिलता।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 3.1: Binary Search Trees & Sorting
          {
            id: 'cs-topic-trees-traversals',
            chapterId: 'cs-ch-dsa',
            topicNumber: 1,
            slug: 'binary-search-trees-and-sorting',
            titleEn: 'Binary Search Trees & Sorting Algorithm Complexities',
            titleHi: 'बाइनरी सर्च ट्री एवं सॉर्टिंग जटिलताएं',
            descriptionEn: 'BST Inorder traversal property, Binary tree leaf node theorem ($n_0 = n_2 + 1$), and QuickSort/MergeSort asymptotic bounds.',
            descriptionHi: 'बाइनरी ट्री में लीफ नोड्स की संख्या ($n_0 = n_2 + 1$), BST इनऑर्डर ट्रैवर्सल, तथा क्विक सॉर्ट की $O(n^2)$ और $O(n \\\\log n)$ जटिलताएं।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.71) & TRE 2.0 (15-12-2023, Shift 1, Q.71)',
            tutorial: {
              id: 'tut-cs-dsa',
              topicId: 'cs-topic-trees-traversals',
              titleEn: 'Binary Trees & Sorting for BPSC TRE',
              titleHi: 'BPSC TRE हेतु बाइनरी ट्री एवं सॉर्टिंग का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State and apply the Binary Tree Leaf Node Theorem: ==n0 = n2 + 1==.',
                'Understand why Inorder Traversal of a BST produces an ascending sorted sequence.',
                'Compare worst-case and average-case time complexities of QuickSort, MergeSort, and HeapSort.',
                'Identify stable vs unstable sorting algorithms.'
              ],
              introductionEn: 'Trees and sorting algorithms represent the core analytical section of BPSC TRE. Mathematical tree theorems and asymptotic sorting bounds are tested extensively.',
              introductionHi: 'डेटा स्ट्रक्चर और एल्गोरिदम में बाइनरी ट्री के प्रमेय तथा सॉर्टिंग की जटिलताओं से प्रतिवर्ष 5-7 प्रश्न पूछे जाते हैं। विशेष रूप से ट्री में लीफ नोड सूत्र ($n_0 = n_2 + 1$) आयोग का प्रिय प्रश्न है।',
              conceptSections: [
                {
                  title: '1. Binary Tree Leaf Node Theorem',
                  contentMarkdownEn: 'In any strictly non-empty binary tree where every node has degree $0, 1,$ or $2$:\\n* Let $n_0$ = number of leaf nodes (nodes with 0 children).\\n* Let $n_2$ = number of internal nodes with exactly 2 children.\\n* **Universal Theorem:** ==$n_0 = n_2 + 1$==\\n* *Meaning:* The number of leaf nodes is always **strictly ONE MORE** than the number of nodes having two children.'
                },
                {
                  title: '2. Sorting Complexities Cheat Sheet',
                  contentMarkdownEn: '**Asymptotic Time & Space Complexities:**',
                  tableData: {
                    headers: ['Algorithm', 'Best Time', 'Average Time', 'Worst Time (BPSC Focus)', 'Space Complexity'],
                    rows: [
                      ['QuickSort', '$O(n \\\\log n)$', '$O(n \\\\log n)$', '== $O(n^2)$ == (TRE 2.0 Q.71)', '$O(\\\\log n)$'],
                      ['MergeSort', '$O(n \\\\log n)$', '$O(n \\\\log n)$', '== $O(n \\\\log n)$ ==', '$O(n)$'],
                      ['HeapSort', '$O(n \\\\log n)$', '$O(n \\\\log n)$', '== $O(n \\\\log n)$ ==', '$O(1)$'],
                      ['Insertion Sort', '$O(n)$', '$O(n^2)$', '== $O(n^2)$ ==', '$O(1)$']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Leaf Node',
                  definitionEn: 'A terminal node in a tree with degree 0 (no children).',
                  definitionHi: 'ट्री का वह नोड जिसकी कोई संतान (चाइल्ड नोड) नहीं होती।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Leaf Node Formula',
                  formulaOrRule: 'n0 = n2 + 1 (Leaf Nodes = Two-Child Nodes + 1)',
                  explanationEn: 'Holds true for any binary tree regardless of balance.',
                  explanationHi: 'प्रत्येक बाइनरी ट्री में लीफ नोड्स की संख्या = (2-चाइल्ड वाले नोड्स की संख्या) + 1।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'In a non-empty binary tree, if n0 is the number of leaf nodes and n2 is the number of nodes of degree 2, then which relation is true? (A) n0 = n2 + 1 (B) n0 = n2 - 1 (C) n0 = 2 * n2 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Standard handshaking theorem on binary trees establishes that n0 = n2 + 1.\\n2. Official BPSC TRE 3.0 Key: Option (A) n0 = n2 + 1.',
                  shortcutTrick: 'Leaves are always 1 more than 2-child nodes (n0 = n2 + 1).'
                }
              ],
              practicalApplications: ['Database indexing (B-Trees), syntax tree parsing in compilers.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Subtracting 1 instead of adding 1: n0 = n2 - 1.',
                  whyWrongEn: 'Every node with 2 children introduces two branches, yielding one extra leaf.',
                  correctWayEn: 'Leaf count is always greater: ==n0 = n2 + 1==.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Leaf node theorem n0 = n2 + 1 (TRE 3.0 Q.71).',
                  'QuickSort worst-case time complexity O(n^2) (TRE 2.0 Q.71).',
                  'Inorder traversal of BST gives sorted order.'
                ],
                commonDistractorTraps: ['Confusing MergeSort O(n log n) with QuickSort worst-case O(n^2).'],
                relatedPyqReferences: [
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.71 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.71 Series A)'
                ]
              },
              quickRevisionPoints: [
                'BST Inorder = Ascending sorted sequence.',
                'Binary Tree: Leaf nodes ==n0 = n2 + 1==.',
                'QuickSort worst case: O(n^2); Average case: O(n log n).',
                'MergeSort guarantees O(n log n) even in worst case.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-dsa-1',
                  questionEn: 'If a binary tree has 15 nodes with two children each, how many leaf nodes does the tree possess?',
                  questionHi: 'यदि किसी बाइनरी ट्री में 2-चाइल्ड वाले नोड्स की संख्या 15 है, तो ट्री में लीफ नोड्स की संख्या कितनी होगी?',
                  options: [
                    { id: 'A', textEn: '14', isCorrect: false },
                    { id: 'B', textEn: '15', isCorrect: false },
                    { id: 'C', textEn: '16', isCorrect: true },
                    { id: 'D', textEn: '30', isCorrect: false }
                  ],
                  explanationEn: 'n0 = n2 + 1 = 15 + 1 = 16.',
                  conceptTested: 'Leaf node calculation'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-3',
                topicId: 'cs-topic-trees-traversals',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In a non-empty binary tree, if n0 is the number of leaf nodes and n2 is the number of internal nodes of degree 2, which of the following mathematical relations holds strictly true?',
                questionTextHi: 'किसी गैर-रिक्त बाइनरी ट्री में, यदि n0 लीफ नोड्स (पत्ती नोड्स) की संख्या है और n2 डिग्री 2 वाले आंतरिक नोड्स की संख्या है, तो निम्नलिखित में से कौन-सा संबंध सही है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'n0 = n2 + 1', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'n0 = n2 - 1', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'n0 = 2 * n2', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In any binary tree, let n be the total nodes, e be the total edges. Sum of degrees gives 2e = n1 + 2*n2. Also e = n - 1. Substituting n = n0 + n1 + n2 yields n0 = n2 + 1.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 71,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.71 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 3.2: Linear Data Structures: Stacks, Queues & Infix-to-Postfix
          {
            id: 'cs-topic-stacks-queues-linkedlists',
            chapterId: 'cs-ch-dsa',
            topicNumber: 2,
            slug: 'stacks-queues-infix-postfix',
            titleEn: 'Linear Data Structures: Stacks (LIFO), Queues (FIFO) & Infix-to-Postfix',
            titleHi: 'रैखिक डेटा संरचनाएं: स्टैक (LIFO), कतार (FIFO) एवं इनफिक्स से पोस्टफिक्स',
            descriptionEn: 'Stack LIFO operations (Push/Pop), Postfix expression evaluation, Circular Queue modulo arithmetic, and Linked List pointer manipulation.',
            descriptionHi: 'स्टैक LIFO नियम, पोस्टफिक्स एक्सप्रेशन मूल्यांकन, सर्कुलर क्यू, तथा लिंक्ड लिस्ट के मूल संचालन।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.48 Series A)',
            tutorial: {
              id: 'tut-cs-stacks',
              topicId: 'cs-topic-stacks-queues-linkedlists',
              titleEn: 'Stacks, Queues & Postfix for BPSC TRE',
              titleHi: 'BPSC TRE हेतु स्टैक, कतार एवं पोस्टफिक्स का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Stack LIFO (Last-In, First-Out) and Queue FIFO principles.',
                'Evaluate Postfix (Reverse Polish) expressions using a stack step-by-step.',
                'Convert Infix expressions to Postfix using operator precedence.',
                'Identify circular queue wrap-around formulas.'
              ],
              introductionEn: 'Stacks and Queues form the bedrock of systems programming, runtime activation records, and scheduling queues. Postfix expression evaluation is tested regularly in BPSC examinations.',
              introductionHi: 'स्टैक (LIFO) और कतार (FIFO) सबसे महत्वपूर्ण रैखिक डेटा संरचनाएं हैं। BPSC TRE में पोस्टफिक्स व्यंजक के मूल्यांकन (Postfix Evaluation) से जुड़े संख्यात्मक प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Stack and Queue Principles',
                  contentMarkdownEn: '* **Stack (LIFO - Last-In, First-Out):** Insert and delete at the same end called **TOP**.\\n  * *Applications:* Function call recursion, Undo operations, Balanced parentheses, Postfix evaluation.\\n* **Queue (FIFO - First-In, First-Out):** Insert at **REAR**, delete at **FRONT**.\\n  * *Circular Queue Full Condition:* ==`(rear + 1) % capacity == front`==.'
                },
                {
                  title: '2. Postfix Expression Evaluation Algorithm',
                  contentMarkdownEn: '**Algorithm using Stack:**\\n1. Scan token left-to-right.\\n2. If operand, **push** onto stack.\\n3. If operator, **pop two operands** ($op_2$ then $op_1$), compute $op_1 \\\\text{ operator } op_2$, and push result back.\\n\\n*Example:* Evaluate ==`5 3 + 2 *`==:\\n* Push 5, Push 3.\\n* Encounter `+` -> Pop 3 and 5 -> Calculate $5 + 3 = 8$ -> Push 8.\\n* Push 2.\\n* Encounter `*` -> Pop 2 and 8 -> Calculate $8 \\\\times 2 = ==16==$.\\n* Final answer = ==`16`==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Stack (LIFO)',
                  definitionEn: 'A linear data structure in which insertions and deletions take place strictly at one end called the TOP.',
                  definitionHi: 'वह रैखिक डेटा संरचना जिसमें प्रविष्टि (Push) और निष्कासन (Pop) केवल एक सिरे (TOP) से होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Postfix Evaluation Order',
                  formulaOrRule: 'Operand2 = Pop() | Operand1 = Pop() | Result = Operand1 OP Operand2',
                  explanationEn: 'The first popped element is the right operand.',
                  explanationHi: 'स्टैक से पहला निकला अवयव दायाँ ऑपरेंड होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'What is the value of the postfix expression: 5 3 + 2 * ? (A) 16 (B) 11 (C) 13 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. 5 and 3 pushed to stack.\\n2. Operator + pops 3 and 5, computes 5 + 3 = 8, pushes 8.\\n3. 2 pushed to stack.\\n4. Operator * pops 2 and 8, computes 8 * 2 = 16.\\n5. Official BPSC TRE 1.0 Key: Option (A) 16.',
                  shortcutTrick: '(5 + 3) * 2 = 8 * 2 = 16.'
                }
              ],
              practicalApplications: ['Compiler arithmetic parsing, browser history back/forward navigation.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Evaluating postfix as 5 + (3 * 2) = 11.',
                  whyWrongEn: 'Postfix does not obey infix operator precedence rules; evaluation is strictly left-to-right.',
                  correctWayEn: 'Always process operators as they appear from left to right.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Postfix evaluation (TRE 1.0 Q.48).',
                  'Stack used in function call recursion.',
                  'Queue used in printer buffering and BFS.'
                ],
                commonDistractorTraps: ['Confusing LIFO (Stack) with FIFO (Queue).'],
                relatedPyqReferences: ['BPSC TRE 1.0 (26-08-2023, Shift 1, Q.48 Series A)']
              },
              quickRevisionPoints: [
                'Stack: LIFO (Push / Pop at TOP).',
                'Queue: FIFO (Enqueue at REAR, Dequeue at FRONT).',
                'Postfix evaluation uses Stack.',
                'Circular Queue avoids memory waste.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-stack-1',
                  questionEn: 'Which data structure is inherently used by operating systems to maintain function call recursion?',
                  questionHi: 'फंक्शन रिकर्शन और रिटर्न एड्रेस को बनाए रखने के लिए ऑपरेटिंग सिस्टम किस डेटा संरचना का उपयोग करता है?',
                  options: [
                    { id: 'A', textEn: 'Queue', isCorrect: false },
                    { id: 'B', textEn: 'Stack', isCorrect: true },
                    { id: 'C', textEn: 'Binary Tree', isCorrect: false },
                    { id: 'D', textEn: 'Hash Table', isCorrect: false }
                  ],
                  explanationEn: 'Function execution frames and local variables are pushed onto the Call Stack.',
                  conceptTested: 'Call Stack'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-stacks-1',
                topicId: 'cs-topic-stacks-queues-linkedlists',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'What is the evaluated final result of the following Postfix (Reverse Polish) expression?\n`5 3 + 2 *`',
                questionTextHi: 'निम्नलिखित पोस्टफिक्स (Reverse Polish) व्यंजक का अंतिम मूल्यांकित मान क्या होगा?\n`5 3 + 2 *`',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '16', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: '11', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '13', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Scanning left to right: 5 and 3 are pushed to stack. Operator + pops 3 and 5, computes 5 + 3 = 8, and pushes 8. Next, 2 is pushed. Operator * pops 2 and 8, computes 8 * 2 = 16, leaving 16 on the stack.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 48,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.48 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 3.3: Graph Algorithms: BFS, DFS & MST
          {
            id: 'cs-topic-graph-traversals-mst',
            chapterId: 'cs-ch-dsa',
            topicNumber: 3,
            slug: 'graph-traversals-bfs-dfs-mst',
            titleEn: 'Graph Algorithms: BFS, DFS & Minimum Spanning Tree (MST)',
            titleHi: 'ग्राफ एल्गोरिदम: BFS, DFS एवं मिनिमम स्पैनिंग ट्री (MST)',
            descriptionEn: 'Breadth First Search (Queue), Depth First Search (Stack), Kruskal\'s and Prim\'s Minimum Spanning Tree algorithms.',
            descriptionHi: 'BFS (कतार का उपयोग), DFS (स्टैक/रिकर्शन), क्रुस्कल और प्राइम के मिनिमम स्पैनिंग ट्री एल्गोरिदम।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.63 Series A)',
            tutorial: {
              id: 'tut-cs-graphs',
              topicId: 'cs-topic-graph-traversals-mst',
              titleEn: 'Graph Algorithms & MST for BPSC TRE',
              titleHi: 'BPSC TRE हेतु ग्राफ एल्गोरिदम एवं MST का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify data structures used for graph traversals: ==BFS uses Queue, DFS uses Stack==.',
                'State time complexity of BFS and DFS using adjacency list: ==O(V + E)==.',
                'Understand Minimum Spanning Tree (MST) properties: V vertices have exactly ==V - 1 edges== with no cycles.',
                'Differentiate between Kruskal\'s (greedy edge selection) and Prim\'s (greedy vertex expansion) MST algorithms.'
              ],
              introductionEn: 'Graph algorithms model computer networks, routing, and dependencies. BPSC questions frequently test the underlying data structures used by BFS and DFS, and the edge counts of spanning trees.',
              introductionHi: 'ग्राफ थ्योरी नेटवर्किंग और एल्गोरिदम का महत्वपूर्ण हिस्सा है। BFS में कतार (Queue) तथा DFS में स्टैक (Stack) का प्रयोग BPSC TRE का क्लासिक प्रश्न है।',
              conceptSections: [
                {
                  title: '1. BFS vs. DFS Comparison',
                  contentMarkdownEn: '* **Breadth First Search (BFS):** Traverses level-by-level.\\n  * Underlying Data Structure: ==QUEUE (FIFO)==.\\n  * Finds shortest path in unweighted graphs.\\n* **Depth First Search (DFS):** Traverses deep into branches.\\n  * Underlying Data Structure: ==STACK (LIFO) or Recursion==.\\n  * Used for topological sorting and cycle detection.'
                },
                {
                  title: '2. Minimum Spanning Tree (MST) Axioms',
                  contentMarkdownEn: 'A Spanning Tree of a connected, undirected graph $G = (V, E)$:\\n* Must connect all $V$ vertices.\\n* Must contain **NO CYCLES**.\\n* Must contain exactly ==$V - 1$ edges==.\\n* **Kruskal\'s Algorithm:** Sorts edges by weight, adds cheapest edge that does not form a cycle ($O(E \\\\log E)$ using Disjoint Set Union).\\n* **Prim\'s Algorithm:** Grows a single tree from a starting vertex ($O(E \\\\log V)$ using Priority Queue).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Minimum Spanning Tree (MST)',
                  definitionEn: 'A subset of the edges of a connected, edge-weighted undirected graph that connects all vertices together without any cycles and with minimum total edge weight.',
                  definitionHi: 'ग्राफ के सभी नोड्स को बिना किसी चक्र (cycle) के न्यूनतम कुल भार के साथ जोड़ने वाला सब-ग्राफ जिसमें V-1 किनारे होते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Graph Traversal Data Structure Axiom',
                  formulaOrRule: 'BFS = Queue | DFS = Stack | MST Edges = V - 1',
                  explanationEn: 'Breadth uses Queue; Depth uses Stack.',
                  explanationHi: 'BFS के लिए Queue, DFS के लिए Stack।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Which data structure is used in Breadth First Search (BFS) graph traversal? (A) Stack (B) Queue (C) Priority Queue (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. BFS visits vertices level by level, maintaining a first-in, first-out ordering.\\n2. The standard data structure for FIFO ordering is a Queue.\\n3. Official BPSC TRE 2.0 Key: Option (B) Queue.',
                  shortcutTrick: 'BFS = Queue | DFS = Stack.'
                }
              ],
              practicalApplications: ['GPS shortest path routing, network cable laying, topological build systems.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking an MST can contain cycles.',
                  whyWrongEn: 'Any cycle in a spanning tree contradicts the definition of a tree.',
                  correctWayEn: 'Trees can NEVER contain cycles.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Data structure for BFS is Queue (TRE 2.0 Q.63).',
                  'Number of edges in an MST of V vertices is V - 1.',
                  'DFS cycle detection.'
                ],
                commonDistractorTraps: ['Selecting Stack for BFS traversal.'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.63 Series A)']
              },
              quickRevisionPoints: [
                'BFS: Uses Queue; finds shortest path.',
                'DFS: Uses Stack / Recursion; cycle detection.',
                'MST for V vertices has exactly V - 1 edges.',
                'Kruskal and Prim are greedy MST algorithms.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-graph-1',
                  questionEn: 'How many edges are present in a Minimum Spanning Tree of a connected graph having 20 vertices?',
                  questionHi: '20 शीर्षों (vertices) वाले एक जुड़े हुए ग्राफ के मिनिमम स्पैनिंग ट्री में कुल कितने किनारे (edges) होंगे?',
                  options: [
                    { id: 'A', textEn: '19', isCorrect: true },
                    { id: 'B', textEn: '20', isCorrect: false },
                    { id: 'C', textEn: '21', isCorrect: false },
                    { id: 'D', textEn: '38', isCorrect: false }
                  ],
                  explanationEn: 'An MST of V vertices always has V - 1 edges: 20 - 1 = 19.',
                  conceptTested: 'MST Edge count'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-graphs-1',
                topicId: 'cs-topic-graph-traversals-mst',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following linear data structures is conventionally utilized to perform Breadth First Search (BFS) traversal on a graph?',
                questionTextHi: 'ग्राफ पर ब्रेड्थ फर्स्ट सर्च (BFS) ट्रैवर्सल करने के लिए पारंपरिक रूप से किस डेटा संरचना का उपयोग किया जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Stack', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Queue', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Binary Search Tree', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Breadth First Search (BFS) explores vertices in increasing order of their distance from the source vertex. This level-by-level exploration strictly requires a First-In, First-Out (FIFO) ordering, which is provided by a Queue data structure.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 63,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.63 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 4: OBJECT-ORIENTED PROGRAMMING IN C++
      // ----------------------------------------------------
      {
        id: 'cs-ch-cpp-oop',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 4,
        slug: 'cpp-object-oriented-programming',
        titleEn: 'Object-Oriented Programming in C++',
        titleHi: 'C++ में ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)',
        descriptionEn: 'Classes, Objects, Constructors, Destructors, Virtual functions, Inheritance modes, Diamond Problem, and Friend functions.',
        descriptionHi: 'कंस्ट्रक्टर, डिस्ट्रक्टर, वर्चुअल फंक्शन (लेट बाइंडिंग), इनहेरिटेंस के प्रकार, डायमंड प्रॉब्लम, तथा फ्रेंड फंक्शन।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          // Topic 4.1: Constructors & Polymorphism
          {
            id: 'cs-topic-cpp-constructors-polymorphism',
            chapterId: 'cs-ch-cpp-oop',
            topicNumber: 1,
            slug: 'cpp-constructors-and-polymorphism',
            titleEn: 'C++ Constructors, Destructors & Virtual Functions',
            titleHi: 'C++ कंस्ट्रक्टर, डिस्ट्रक्टर एवं वर्चुअल फंक्शन',
            descriptionEn: 'Constructor rules (no return type), Copy constructor, Destructor tilde syntax, and runtime polymorphism via virtual functions.',
            descriptionHi: 'कंस्ट्रक्टर के नियम (कोई रिटर्न प्रकार नहीं), कॉपी कंस्ट्रक्टर, डिस्ट्रक्टर (~), तथा वर्चुअल फंक्शन द्वारा रनटाइम पॉलीमॉर्फिज्म।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.41 Series A)',
            tutorial: {
              id: 'tut-cs-cpp',
              topicId: 'cs-topic-cpp-constructors-polymorphism',
              titleEn: 'C++ Constructors & Polymorphism for BPSC TRE',
              titleHi: 'BPSC TRE हेतु C++ कंस्ट्रक्टर एवं पॉलीमॉर्फिज्म का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify constructor characteristics: ==Same name as class, NO return type (not even void)==.',
                'Understand destructor syntax (~ClassName) and execution order (reverse of constructor).',
                'Differentiate between Compile-Time (Overloading) and Run-Time (Virtual Function) polymorphism.',
                'Identify Pure Virtual Functions (`= 0`) and Abstract Classes.'
              ],
              introductionEn: 'Object-Oriented Programming in C++ is a heavy-weight subject in the Class 11-12 syllabus. BPSC TRE consistently examines constructor definitions, destructor constraints, and late-binding dynamic dispatch.',
              introductionHi: 'C++ में OOP के सिद्धांत BPSC TRE कंप्यूटर साइंस के अनिवार्य भाग हैं। कंस्ट्रक्टर के लक्षण (कोई रिटर्न टाइप नहीं, क्लास के समान नाम) से प्रश्न सीधे पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Constructor Golden Rules in C++',
                  contentMarkdownEn: 'A **Constructor** is a special member function invoked automatically upon object instantiation:\\n* Has the **exact same name as its enclosing class**.\\n* Has ==NO return type==, not even `void`.\\n* Can be overloaded (Default, Parameterized, Copy Constructor).\\n* Cannot be declared `virtual` in C++.'
                },
                {
                  title: '2. Polymorphism: Static vs. Dynamic Binding',
                  contentMarkdownEn: '* **Compile-Time (Early Binding):** Function Overloading, Operator Overloading.\\n* **Run-Time (Late Binding):** Achieved via ==`virtual` functions== and base-class pointers.\\n* **Pure Virtual Function:** A virtual function with no implementation in the base class: `virtual void display() = 0;`.\\n* A class with at least one pure virtual function is an **Abstract Class** and cannot be directly instantiated.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Constructor',
                  definitionEn: 'A member function having the same name as the class that initializes the object upon creation and has no return type.',
                  definitionHi: 'क्लास के समान नाम वाला विशेष फंक्शन जो ऑब्जेक्ट निर्माण के समय स्वतः कॉल होता है और जिसका कोई रिटर्न टाइप नहीं होता।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Constructor Identification Axiom',
                  formulaOrRule: 'Constructor Name == Class Name | Return Type == NONE (Never void)',
                  explanationEn: 'Writing void MyClass() turns it into a normal function, not a constructor.',
                  explanationHi: 'यदि आगे void लगा दिया जाए तो वह सामान्य फंक्शन बन जाता है, कंस्ट्रक्टर नहीं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which of the following is true regarding a constructor in C++? (A) It has the same name as the class (B) It has no return type (C) It is automatically called when an object is created (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Statement A is true: Constructor shares the class name.\\n2. Statement B is true: Constructor has no return type.\\n3. Statement C is true: It is automatically invoked upon creation.\\n4. Since statements A, B, and C are all true, option (D) must be selected.\\n5. Official BPSC TRE 1.0 Key: Option (D) More than one of the above.',
                  shortcutTrick: 'All three properties describe a constructor -> Pick (D) More than one of the above.'
                }
              ],
              practicalApplications: ['Resource allocation (RAII idiom), GUI widget construction, game entity lifecycles.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Selecting Option A without reading B and C, missing "More than one of the above".',
                  whyWrongEn: 'In BPSC examinations, multiple true statements require Option D.',
                  correctWayEn: 'Always read all 5 options before marking your answer.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Constructor properties (TRE 1.0 Q.41).',
                  'Virtual functions for runtime polymorphism.',
                  'Destructors cannot be overloaded and take no arguments.'
                ],
                commonDistractorTraps: ['Assuming constructors return void.'],
                relatedPyqReferences: ['BPSC TRE 1.0 (26-08-2023, Shift 1, Q.41 Series A)']
              },
              quickRevisionPoints: [
                'Constructor: Same name as class, no return type (not even void).',
                'Destructor: ~ClassName(), no arguments, cannot be overloaded.',
                'Virtual function = Runtime polymorphism (late binding).',
                'Abstract class = Class with at least one pure virtual function (= 0).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-cpp-1',
                  questionEn: 'Which of the following functions in C++ cannot be overloaded within the same class?',
                  questionHi: 'C++ में एक ही क्लास के भीतर निम्नलिखित में से किसे ओवरलोड नहीं किया जा सकता?',
                  options: [
                    { id: 'A', textEn: 'Constructor', isCorrect: false },
                    { id: 'B', textEn: 'Destructor', isCorrect: true },
                    { id: 'C', textEn: 'Member function', isCorrect: false },
                    { id: 'D', textEn: 'Static function', isCorrect: false }
                  ],
                  explanationEn: 'A destructor takes no parameters and cannot be overloaded.',
                  conceptTested: 'Destructor constraints'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-4',
                topicId: 'cs-topic-cpp-constructors-polymorphism',
                chapterId: 'cs-ch-cpp-oop',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following statements is strictly correct regarding a constructor in C++?\n1. It shares the exact same name as the class.\n2. It has no return type, not even void.\n3. It is automatically invoked when an object is created.',
                questionTextHi: 'C++ में कंस्ट्रक्टर के संबंध में निम्नलिखित में से कौन-सा कथन सत्य है?\n1. इसका नाम क्लास के समान होता है।\n2. इसका कोई रिटर्न प्रकार नहीं होता, यहाँ तक कि void भी नहीं।\n3. ऑब्जेक्ट बनने पर यह स्वतः कॉल होता है।',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Only statement 1 is true', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Statements 1 and 2 are true', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'It has void return type', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: true },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'D',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In C++, a constructor has the same name as the class, specifies no return type (not even void), and is invoked automatically when an object of that class is instantiated. Since multiple statements are correct, Option D is the official answer.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 41,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.41 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 4.2: C++ Inheritance & Diamond Problem
          {
            id: 'cs-topic-cpp-inheritance-access',
            chapterId: 'cs-ch-cpp-oop',
            topicNumber: 2,
            slug: 'cpp-inheritance-diamond-problem',
            titleEn: 'C++ Inheritance Modes, Diamond Problem & Friend Functions',
            titleHi: 'C++ इनहेरिटेंस मोड्स, डायमंड प्रॉब्लम एवं फ्रेंड फंक्शन',
            descriptionEn: 'Public, Protected, and Private inheritance visibility, multiple inheritance ambiguity (Diamond Problem), and Virtual Base Class resolution.',
            descriptionHi: 'इनहेरिटेंस के प्रकार, डायमंड प्रॉब्लम (Diamond Problem) का समाधान वर्चुअल बेस क्लास द्वारा, तथा फ्रेंड फंक्शन।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.92 Series A)',
            tutorial: {
              id: 'tut-cs-inheritance',
              topicId: 'cs-topic-cpp-inheritance-access',
              titleEn: 'Inheritance & Diamond Problem for BPSC TRE',
              titleHi: 'BPSC TRE हेतु इनहेरिटेंस एवं डायमंड प्रॉब्लम का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Multiple Inheritance and the Diamond Problem ambiguity.',
                'Solve the Diamond Problem using ==Virtual Base Class (`virtual public Base`)==.',
                'Analyze the visibility table under public, protected, and private inheritance.',
                'Explain friend functions and friend classes (accessing private members without inheritance).'
              ],
              introductionEn: 'Inheritance provides code reuse and taxonomic class design. The classic multiple inheritance ambiguity (the Diamond Problem) is a standard benchmark question in BPSC examinations.',
              introductionHi: 'इनहेरिटेंस ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग का मूल स्तंभ है। मल्टीपल इनहेरिटेंस में उत्पन्न होने वाली डायमंड समस्या (Diamond Problem) को C++ में \'वर्चुअल बेस क्लास\' द्वारा हल किया जाता है।',
              conceptSections: [
                {
                  title: '1. The Diamond Problem in C++',
                  contentMarkdownEn: 'The **Diamond Problem** occurs in multiple inheritance when a class $D$ inherits from two classes $B$ and $C$, which both inherit from a single base class $A$:\\n```\\n     A\\n    / \\\\\\n   B   C\\n    \\\\ /\\n     D\\n```\\n* Class $D$ receives **two duplicate copies** of class $A$\'s members (one via $B$, one via $C$).\\n* Any reference to $A$\'s members in $D$ creates an **ambiguity error** at compile time.\\n* **The C++ Solution:** Inherit $A$ as a ==VIRTUAL BASE CLASS== in both $B$ and $C$:\\n  * `class B : virtual public A { ... };`\\n  * `class C : virtual public A { ... };`\\n* This ensures only **one shared copy** of $A$ exists in $D$.'
                },
                {
                  title: '2. Friend Functions',
                  contentMarkdownEn: 'A **Friend Function** (`friend void func();`):\\n* Is **NOT a member function** of the class.\\n* Has access to all **private and protected members** of the class.\\n* Friendship is not inherited and is not transitive.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Virtual Base Class',
                  definitionEn: 'A base class whose member variables are shared between multiple indirect sub-classes, preventing duplication in diamond inheritance.',
                  definitionHi: 'वह बेस क्लास जिसकी प्रतियां डायमंड इनहेरिटेंस में दोहराई नहीं जातीं, केवल एक ही साझा प्रति सब-क्लास को मिलती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Diamond Problem Solution Axiom',
                  formulaOrRule: 'Diamond Ambiguity Solution = Virtual Base Class (virtual public Base)',
                  explanationEn: 'Only one copy of Base is inherited into the bottom derived class.',
                  explanationHi: 'डायमंड समस्या का एकमात्र C++ समाधान वर्चुअल बेस क्लास है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'In C++, how is the ambiguity caused by the Diamond Problem in multiple inheritance resolved? (A) Using Virtual Base Class (B) Using Abstract Class (C) Using Friend Class (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. The Diamond Problem arises when two derived classes share a common base class.\\n2. C++ provides the `virtual` base class mechanism to ensure only a single instance of the root class is constructed.\\n3. Official BPSC TRE 3.0 Key: Option (A) Using Virtual Base Class.',
                  shortcutTrick: 'Diamond Problem = Virtual Base Class.'
                }
              ],
              practicalApplications: ['C++ STL iostream hierarchy (`ios` is a virtual base class for `istream` and `ostream`, inherited by `iostream`).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking abstract classes resolve the diamond problem.',
                  whyWrongEn: 'An abstract class can still be duplicated unless declared virtual.',
                  correctWayEn: 'Declare the base class as `virtual`.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Resolution of Diamond problem via Virtual Base Class (TRE 3.0 Q.92).',
                  'Friend function access rights (can access private members).',
                  'Private inheritance converts public and protected members into private.'
                ],
                commonDistractorTraps: ['Selecting Friend Class for resolving Diamond problem.'],
                relatedPyqReferences: ['BPSC TRE 3.0 (22-07-2024, Shift 1, Q.92 Series A)']
              },
              quickRevisionPoints: [
                'Diamond problem occurs in multiple inheritance.',
                'Resolved using: Virtual Base Class.',
                'Friend function is not a member function, but can access private data.',
                'Constructor call order in inheritance: Base first, Derived next.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-diamond-1',
                  questionEn: 'Which keyword is used in C++ before a base class name in derived class declarations to prevent multiple copies of the base class?',
                  questionHi: 'C++ में बेस क्लास की कई प्रतियों को रोकने के लिए किस कीवर्ड का उपयोग किया जाता है?',
                  options: [
                    { id: 'A', textEn: 'static', isCorrect: false },
                    { id: 'B', textEn: 'virtual', isCorrect: true },
                    { id: 'C', textEn: 'inline', isCorrect: false },
                    { id: 'D', textEn: 'friend', isCorrect: false }
                  ],
                  explanationEn: 'The `virtual` keyword creates a virtual base class.',
                  conceptTested: 'Virtual Base Class'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-inherit-1',
                topicId: 'cs-topic-cpp-inheritance-access',
                chapterId: 'cs-ch-cpp-oop',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In C++, how is the member ambiguity and duplication caused by the "Diamond Problem" in multiple inheritance formally resolved?',
                questionTextHi: 'C++ में मल्टीपल इनहेरिटेंस में "डायमंड प्रॉब्लम" के कारण होने वाली अस्पष्टता और डेटा दोहराव को औपचारिक रूप से कैसे हल किया जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'By declaring the common ancestor as a Virtual Base Class', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'By making all member variables static', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'By declaring the derived class as friend of the base class', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'When two intermediate classes inherit from a common base class, declaring the base class with the `virtual` keyword (`class B : virtual public A`) ensures that only one shared instance of class A is included in the final derived class D, resolving the Diamond Problem ambiguity.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 92,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.92 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 5: DBMS: RELATIONAL MODEL, SQL & NORMALIZATION
      // ----------------------------------------------------
      {
        id: 'cs-ch-dbms',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 5,
        slug: 'dbms-relational-sql-normalization',
        titleEn: 'DBMS: Relational Model, SQL & Normalization',
        titleHi: 'DBMS: रिलेशनल मॉडल, SQL एवं नॉर्मलाइजेशन',
        descriptionEn: 'Relational keys (Primary, Foreign, Candidate), SQL SELECT/HAVING, Joins (INNER, FULL OUTER), Normal forms (1NF to BCNF), and ACID transactions.',
        descriptionHi: 'प्राइमरी और फॉरेन कुंजी, SQL HAVING क्लॉज, SQL जॉइन्स, नॉर्मलाइजेशन (1NF, 2NF, 3NF, BCNF), तथा ACID गुणधर्म।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 5.1: Relational Keys, HAVING & Normalization
          {
            id: 'cs-topic-normalization-acid',
            chapterId: 'cs-ch-dbms',
            topicNumber: 1,
            slug: 'relational-keys-having-normalization',
            titleEn: 'Relational Keys, SQL HAVING Clause & Normalization',
            titleHi: 'रिलेशनल कुंजियां, SQL HAVING क्लॉज एवं नॉर्मलाइजेशन',
            descriptionEn: 'Primary Key rules (unique, NOT NULL), WHERE vs HAVING clause difference, 1NF, 2NF, 3NF functional dependencies, and ACID properties.',
            descriptionHi: 'प्राइमरी की (अद्वितीय एवं NOT NULL), WHERE और HAVING क्लॉज का अंतर, 1NF-3NF नॉर्मल फॉर्म, तथा ACID गुण।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.42) & TRE 3.0 (22-07-2024, Shift 1, Q.79)',
            tutorial: {
              id: 'tut-cs-dbms',
              topicId: 'cs-topic-normalization-acid',
              titleEn: 'Relational Keys & SQL for BPSC TRE',
              titleHi: 'BPSC TRE हेतु रिलेशनल कुंजियां एवं SQL का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand relational key axioms: ==Primary Key must be unique and CANNOT be NULL==.',
                'Distinguish between WHERE (row-level filter before grouping) and HAVING (group filter after GROUP BY).',
                'Identify Normal Forms: 1NF (Atomic), 2NF (No partial dependency), 3NF (No transitive dependency).',
                'State ACID properties of database transactions.'
              ],
              introductionEn: 'Relational databases underpin enterprise information systems. BPSC TRE questions thoroughly test the distinction between SQL filtering clauses, relational integrity constraints, and normalization levels.',
              introductionHi: 'डेटाबेस प्रबंधन प्रणाली (DBMS) BPSC TRE कंप्यूटर साइंस का सबसे अधिक अंक दिलाने वाला विषय है। प्राइमरी की के नियम, WHERE और HAVING क्लॉज का अंतर, तथा नॉर्मलाइजेशन से संबंधित प्रश्न प्रतिवर्ष पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Primary Key and Relational Integrity Constraints',
                  contentMarkdownEn: '* **Primary Key:** A candidate key chosen to uniquely identify tuples in a relation.\\n  * Must contain **UNIQUE** values.\\n  * ==CANNOT CONTAIN NULL VALUES== (Entity Integrity Constraint).\\n  * A relation can have **only ONE Primary Key** (which may be composite).\\n* **Foreign Key:** References a Primary Key in another relation (Referential Integrity Constraint; CAN accept NULL values unless restricted).'
                },
                {
                  title: '2. SQL WHERE vs. HAVING Clause',
                  contentMarkdownEn: '* **WHERE Clause:** Filters **individual rows BEFORE** any grouping occurs. Cannot use aggregate functions directly (`WHERE AVG(salary) > 5000` is illegal).\\n* **HAVING Clause:** Filters **aggregated groups AFTER** `GROUP BY` has been performed. Designed specifically for aggregate conditions:\\n  * `SELECT dept_id, AVG(salary) FROM emp GROUP BY dept_id HAVING AVG(salary) > 50000;`'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Primary Key',
                  definitionEn: 'A minimal candidate key that uniquely identifies each record in a relational table, strictly disallowing NULL values.',
                  definitionHi: 'वह कुंजी जो तालिका में प्रत्येक रिकॉर्ड को विशिष्ट रूप से पहचानती है और जिसमें NULL मान कभी नहीं हो सकता।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Normalization Ladder Rule',
                  formulaOrRule: '1NF = Atomic Values | 2NF = 1NF + No Partial Dependency | 3NF = 2NF + No Transitive Dependency',
                  explanationEn: '2NF removes partial functional dependencies; 3NF removes transitive dependencies.',
                  explanationHi: '2NF आंशिक निर्भरता को हटाता है; 3NF संक्रामक (transitive) निर्भरता को हटाता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'Which SQL clause is used to filter groups based on aggregate function values? (A) WHERE (B) HAVING (C) GROUP BY (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Filtering individual rows is done by WHERE.\\n2. Filtering groups formed by GROUP BY on aggregate conditions is done by HAVING.\\n3. Official BPSC TRE 3.0 Key: Option (B) HAVING.',
                  shortcutTrick: 'Filter aggregate groups = ALWAYS HAVING.'
                }
              ],
              practicalApplications: ['PostgreSQL and MySQL database architecture, schema normalization, banking transactions.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Primary Keys can have one NULL value.',
                  whyWrongEn: 'Primary keys strictly prohibit NULL. Only Unique keys allow NULL values.',
                  correctWayEn: 'Primary Key = Unique + NOT NULL.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Primary Key cannot be NULL (TRE 1.0 Q.42).',
                  'HAVING clause with aggregate functions (TRE 3.0 Q.79).',
                  '3NF eliminates transitive dependency.'
                ],
                commonDistractorTraps: ['Using WHERE to filter aggregate functions.'],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.42 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.79 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Primary Key: Unique + NOT NULL.',
                'WHERE filters rows; HAVING filters groups.',
                '1NF: Atomic values; 2NF: No partial dependency; 3NF: No transitive dependency.',
                'ACID: Atomicity (All or None), Consistency, Isolation, Durability.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-db-1',
                  questionEn: 'A relation is in 2NF if it is in 1NF and every non-prime attribute is fully functionally dependent on the primary key, meaning it has no:',
                  questionHi: 'एक संबंध 2NF में होता है यदि वह 1NF में हो और उसमें किसका अभाव हो?',
                  options: [
                    { id: 'A', textEn: 'Transitive dependency', isCorrect: false },
                    { id: 'B', textEn: 'Partial dependency', isCorrect: true },
                    { id: 'C', textEn: 'Multivalued dependency', isCorrect: false },
                    { id: 'D', textEn: 'Join dependency', isCorrect: false }
                  ],
                  explanationEn: '2NF strictly eliminates partial dependencies.',
                  conceptTested: '2NF definition'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-db-1',
                topicId: 'cs-topic-normalization-acid',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In a Relational Database Management System (RDBMS), which of the following integrity constraints is strictly enforced for a designated Primary Key attribute?',
                questionTextHi: 'रिलेशनल डेटाबेस मैनेजमेंट सिस्टम (RDBMS) में, प्राथमिक कुंजी (Primary Key) विशेषता के लिए निम्नलिखित में से कौन-सा नियम अनिवार्य रूप से लागू होता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'It can accept multiple duplicate values but not NULL', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'It must contain unique values and cannot accept NULL values', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'It can contain NULL values if unique', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'By relational database definition (Entity Integrity Constraint), a Primary Key must uniquely identify each row in a table. Therefore, it must be unique and cannot contain NULL values.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 42,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.42 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-cs-pyq-db-2',
                topicId: 'cs-topic-normalization-acid',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In Structured Query Language (SQL), which clause is specifically used to apply conditional filters on grouped result sets produced by aggregate functions?',
                questionTextHi: 'स्ट्रक्चर्ड क्वेरी लैंग्वेज (SQL) में, एग्रीगेट फ़ंक्शंस द्वारा उत्पादित समूहीकृत परिणाम सेट पर सशर्त फ़िल्टर लगाने के लिए किस क्लॉज का उपयोग किया जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'WHERE', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'HAVING', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'GROUP BY', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The WHERE clause cannot be used with aggregate functions (like COUNT, SUM, AVG) because it filters individual rows before grouping. The HAVING clause was added to SQL specifically to filter groups based on aggregate results.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 79,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.79 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 5.2: SQL Joins & Transactions
          {
            id: 'cs-topic-sql-joins-transactions',
            chapterId: 'cs-ch-dbms',
            topicNumber: 2,
            slug: 'sql-joins-transactions-acid',
            titleEn: 'SQL Joins, Aggregate Functions & ACID Transaction States',
            titleHi: 'SQL जॉइन्स, एग्रीगेट फंक्शन्स एवं ACID ट्रांजेक्शन',
            descriptionEn: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, COUNT(*) vs COUNT(col), and Transaction States (Active, Committed, Aborted).',
            descriptionHi: 'SQL जॉइन्स (INNER, LEFT, RIGHT, FULL OUTER), COUNT(*) द्वारा NULL पंक्तियों की गिनती, तथा ट्रांजेक्शन की अवस्थाएं।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.82 Series A)',
            tutorial: {
              id: 'tut-cs-joins',
              topicId: 'cs-topic-sql-joins-transactions',
              titleEn: 'SQL Joins & ACID Transactions for BPSC TRE',
              titleHi: 'BPSC TRE हेतु SQL जॉइन्स एवं ट्रांजेक्शन्स का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Differentiate between INNER JOIN and FULL OUTER JOIN.',
                'Understand how SQL aggregate functions handle NULL values (`COUNT(*)` counts all rows; `COUNT(col)` ignores NULLs).',
                'Trace the 5 states of a database transaction: Active, Partially Committed, Committed, Failed, Aborted.',
                'Apply ACID properties: Atomicity (Rollback on failure), Consistency, Isolation, Durability.'
              ],
              introductionEn: 'Multi-table queries and transactional integrity are central to database applications. BPSC examinations frequently test join mechanics and the exact behavior of SQL aggregate functions on NULL data.',
              introductionHi: 'SQL में जॉइन्स (Joins) और ट्रांजेक्शन स्टेट्स से प्रश्न निश्चित रूप से पूछे जाते हैं। विशेष रूप से FULL OUTER JOIN का कार्य तथा COUNT(*) में NULL मानों की गिनती आयोग के प्रिय प्रश्न हैं।',
              conceptSections: [
                {
                  title: '1. Types of SQL Joins',
                  contentMarkdownEn: '* **INNER JOIN:** Returns records that have matching values in ==both tables==.\\n* **LEFT (OUTER) JOIN:** Returns all records from left table, and matched records from right table (NULL for non-matches).\\n* **RIGHT (OUTER) JOIN:** Returns all records from right table, and matched records from left table.\\n* **FULL (OUTER) JOIN:** Returns all records when there is a match in ==EITHER the left or right table==.'
                },
                {
                  title: '2. Aggregate Functions & NULL Behavior',
                  contentMarkdownEn: '* ==`COUNT(*)`== counts the **total number of rows**, including rows with NULLs and duplicates.\\n* `COUNT(column_name)` counts only non-NULL entries.\\n* `SUM()`, `AVG()`, `MIN()`, `MAX()` strictly **ignore NULL values**.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'FULL OUTER JOIN',
                  definitionEn: 'An SQL join operation that combines the results of both LEFT and RIGHT outer joins, returning all matching and non-matching rows from both tables.',
                  definitionHi: 'वह SQL जॉइन जो दोनों तालिकाओं (बाएं और दाएं) के सभी रिकॉर्ड्स को लौटाता है, भले ही उनमें कोई मेल हो या न हो।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'COUNT(*) vs COUNT(col) Rule',
                  formulaOrRule: 'COUNT(*) = Total Rows (Includes NULLs) | COUNT(column) = Non-NULL Rows only',
                  explanationEn: 'COUNT(*) never returns NULL; it returns at least 0.',
                  explanationHi: 'COUNT(*) कभी NULL को नजरअंदाज नहीं करता, वह सभी पंक्तियों को गिनता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Which SQL JOIN returns all records when there is a match in either left or right table? (A) INNER JOIN (B) FULL OUTER JOIN (C) LEFT JOIN (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Match in either left or right table means union of both tables.\\n2. This is the exact textbook definition of FULL OUTER JOIN.\\n3. Official BPSC TRE 2.0 Key: Option (B) FULL OUTER JOIN.',
                  shortcutTrick: 'Match in either table = FULL OUTER JOIN.'
                }
              ],
              practicalApplications: ['Data warehousing ETL jobs, transaction logging, distributed ledger consistency.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking INNER JOIN returns unmatched rows.',
                  whyWrongEn: 'INNER JOIN discards all rows that do not have an exact key match.',
                  correctWayEn: 'Only OUTER joins preserve unmatched rows.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'FULL OUTER JOIN behavior (TRE 2.0 Q.82).',
                  'COUNT(*) includes NULL rows.',
                  'ACID property Atomicity ensures all-or-none.'
                ],
                commonDistractorTraps: ['Confusing LEFT JOIN with FULL OUTER JOIN.'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.82 Series A)']
              },
              quickRevisionPoints: [
                'INNER JOIN = Intersection of matching keys.',
                'FULL OUTER JOIN = Union of both tables with NULLs for unmatched keys.',
                'COUNT(*) counts every row.',
                'Transaction states: Active -> Partially Committed -> Committed.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-join-1',
                  questionEn: 'If Table A has 5 rows and Table B has 4 rows, what is the maximum number of rows produced by a FULL OUTER JOIN?',
                  questionHi: 'यदि तालिका A में 5 पंक्तियाँ और तालिका B में 4 पंक्तियाँ हैं, तो FULL OUTER JOIN द्वारा अधिकतम कितनी पंक्तियाँ उत्पन्न हो सकती हैं (यदि कोई मेल न हो)?',
                  options: [
                    { id: 'A', textEn: '5', isCorrect: false },
                    { id: 'B', textEn: '9', isCorrect: true },
                    { id: 'C', textEn: '20', isCorrect: false },
                    { id: 'D', textEn: '1', isCorrect: false }
                  ],
                  explanationEn: 'When no keys match, FULL OUTER JOIN preserves all rows from both tables: 5 + 4 = 9.',
                  conceptTested: 'Outer Join Max Rows'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-joins-1',
                topicId: 'cs-topic-sql-joins-transactions',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In SQL database queries, which JOIN operation returns all records when there is a match in EITHER the left table or the right table records?',
                questionTextHi: 'SQL डेटाबेस प्रश्नों में, कौन-सा JOIN ऑपरेशन तब सभी रिकॉर्ड लौटाता है जब बाएं टेबल या दाएं टेबल में से किसी एक में भी मेल (match) होता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'INNER JOIN', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'FULL OUTER JOIN', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'LEFT JOIN', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The FULL OUTER JOIN keyword returns all matching records from both tables, plus all unmatched rows from the left table (with NULLs for right table columns) and all unmatched rows from the right table (with NULLs for left table columns).',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 82,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.82 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 6: COMPUTER NETWORKS & INTERNET PROTOCOLS
      // ----------------------------------------------------
      {
        id: 'cs-ch-networks',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 6,
        slug: 'computer-networks-protocols',
        titleEn: 'Computer Networks & Internet Protocols',
        titleHi: 'कंप्यूटर नेटवर्क्स एवं इंटरनेट प्रोटोकॉल्स',
        descriptionEn: 'OSI 7 Layers, TCP/IP Suite, IPv4 Address Classes, Class D Multicasting, TCP vs UDP, Subnetting, and Port Numbers.',
        descriptionHi: 'OSI 7 परतें, IPv4 एड्रेस क्लास (Class A to E), क्लास D मल्टीकास्टिंग, TCP vs UDP, सबनेट मास्क, तथा पोर्ट नंबर्स।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 6.1: OSI Layers & IPv4 Classes
          {
            id: 'cs-topic-osi-ip-addressing',
            chapterId: 'cs-ch-networks',
            topicNumber: 1,
            slug: 'osi-layers-and-ip-addressing',
            titleEn: 'OSI 7 Layer Functions & IPv4 Address Classes',
            titleHi: 'OSI 7 परतें एवं IPv4 एड्रेस क्लासेज',
            descriptionEn: 'Data units per layer (Bits, Frames, Packets, Segments), IPv4 classes (A to E), and Class D Multicast range (224.0.0.0 to 239.255.255.255).',
            descriptionHi: 'प्रत्येक परत की डेटा इकाई, IPv4 की 5 श्रेणियां (Class A से E), तथा क्लास D मल्टीकास्टिंग परास (224 से 239)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.88 Series A)',
            tutorial: {
              id: 'tut-cs-networks',
              topicId: 'cs-topic-osi-ip-addressing',
              titleEn: 'OSI Model & IP Addressing for BPSC TRE',
              titleHi: 'BPSC TRE हेतु OSI मॉडल एवं IP एड्रेसिंग का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Memorize the 7 layers of the OSI reference model from Layer 1 (Physical) to Layer 7 (Application).',
                'Identify protocol data units (PDU): Bits -> Frames -> Packets -> Segments -> Data.',
                'Categorize IPv4 classes by first octet: ==Class A (1-126), Class B (128-191), Class C (192-223), Class D (224-239)==.',
                'Identify Class D as reserved strictly for Multicasting.'
              ],
              introductionEn: 'Networking is a crucial pillar of computer systems engineering. BPSC TRE consistently questions candidates on IPv4 address classification and the specific operational role of each OSI layer.',
              introductionHi: 'कंप्यूटर नेटवर्किंग से BPSC TRE में 8-10 प्रश्न पूछे जाते हैं। विशेष रूप से IPv4 की क्लास D (मल्टीकास्टिंग हेतु आरक्षित) और OSI मॉडल की 7 परतों की डेटा इकाइयों से प्रश्न बार-बार आते हैं।',
              conceptSections: [
                {
                  title: '1. OSI 7 Layers & Protocol Data Units (PDU)',
                  contentMarkdownEn: '* **Layer 7: Application** - HTTP, FTP, SMTP, DNS (PDU: Data)\\n* **Layer 6: Presentation** - Encryption, Compression, Translation (PDU: Data)\\n* **Layer 5: Session** - Dialog control, token management (PDU: Data)\\n* **Layer 4: Transport** - TCP, UDP, Port addressing (PDU: ==Segments==)\\n* **Layer 3: Network** - IP, Routing, Logical addressing (PDU: ==Packets==)\\n* **Layer 2: Data Link** - MAC address, framing, error control (PDU: ==Frames==)\\n* **Layer 1: Physical** - Cables, repeaters, bits transmission (PDU: ==Bits==)'
                },
                {
                  title: '2. IPv4 Classes Breakdown',
                  contentMarkdownEn: '**Class Ranges (First Octet Decimal):**',
                  tableData: {
                    headers: ['Class', 'Leading Bits', '1st Octet Range', 'Subnet Mask', 'Official Purpose / BPSC Note'],
                    rows: [
                      ['Class A', '`0...`', '==1 to 126==', '255.0.0.0 (/8)', 'Huge networks (127 is Loopback)'],
                      ['Class B', '`10...`', '==128 to 191==', '255.255.0.0 (/16)', 'Medium networks'],
                      ['Class C', '`110...`', '==192 to 223==', '255.255.255.0 (/24)', 'Small local LANs'],
                      ['Class D', '`1110...`', '==224 to 239==', 'No subnet mask', '==MULTICASTING== (TRE 3.0 Q.88)'],
                      ['Class E', '`1111...`', '==240 to 255==', 'No subnet mask', 'Experimental / Research']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Multicasting (Class D)',
                  definitionEn: 'A transmission technique where data is sent simultaneously from one source to a specific select group of recipient nodes on the network.',
                  definitionHi: 'नेटवर्क पर एक स्रोत से विशिष्ट नोड्स के समूह को एक साथ डेटा भेजने की तकनीक (क्लास D: 224 से 239)।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Class D Identification Rule',
                  formulaOrRule: 'First Octet 224 to 239 = Class D = MULTICASTING ONLY',
                  explanationEn: 'Class D has no host bits or network bits; it is treated as a multicast group address.',
                  explanationHi: '224 से 239 की श्रेणी केवल मल्टीकास्टिंग हेतु आरक्षित है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'Which IPv4 address class is exclusively reserved for multicasting? (A) Class B (B) Class C (C) Class D (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Class A, B, C are unicast addresses for host assignment.\\n2. Class D (224.0.0.0 to 239.255.255.255) is exclusively designated for multicasting.\\n3. Official BPSC TRE 3.0 Key: Option (C) Class D.',
                  shortcutTrick: 'Class D = Multicast.'
                }
              ],
              practicalApplications: ['IPTV video streaming, Zoom/Teams video conferencing, OSPF router multicasting.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Class E is for multicasting.',
                  whyWrongEn: 'Class E is reserved for military and experimental research; Class D is for multicasting.',
                  correctWayEn: 'Class D = Multicast; Class E = Experimental.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Class D reserved for multicasting (TRE 3.0 Q.88).',
                  '127.0.0.1 is loopback testing address.',
                  'Data Link layer PDU is Frame.'
                ],
                commonDistractorTraps: ['Confusing Class C (192-223) with Class D (224-239).'],
                relatedPyqReferences: ['BPSC TRE 3.0 (22-07-2024, Shift 1, Q.88 Series A)']
              },
              quickRevisionPoints: [
                'OSI Layers: Physical (Bits), Data Link (Frames), Network (Packets), Transport (Segments).',
                'Class A: 1-126; Class B: 128-191; Class C: 192-223.',
                'Class D: 224-239 (Multicasting).',
                'Class E: 240-255 (Experimental).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-net-1',
                  questionEn: 'Which protocol data unit (PDU) is managed at the Transport layer of the OSI model?',
                  questionHi: 'OSI मॉडल की ट्रांसपोर्ट परत पर किस प्रोटोकॉल डेटा यूनिट (PDU) का प्रबंधन किया जाता है?',
                  options: [
                    { id: 'A', textEn: 'Bits', isCorrect: false },
                    { id: 'B', textEn: 'Frames', isCorrect: false },
                    { id: 'C', textEn: 'Packets', isCorrect: false },
                    { id: 'D', textEn: 'Segments', isCorrect: true }
                  ],
                  explanationEn: 'Transport layer encapsulates data into Segments (TCP) or User Datagrams (UDP).',
                  conceptTested: 'Transport layer PDU'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-net-1',
                topicId: 'cs-topic-osi-ip-addressing',
                chapterId: 'cs-ch-networks',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In IPv4 addressing, which class of IP addresses (ranging from 224.0.0.0 to 239.255.255.255) is exclusively reserved for multicasting?',
                questionTextHi: 'IPv4 एड्रेसिंग में, कौन-सी क्लास के IP एड्रेस (224.0.0.0 से 239.255.255.255) विशेष रूप से मल्टीकास्टिंग के लिए आरक्षित हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Class B', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Class C', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Class D', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Class D addresses (first octet having high-order bits 1110, decimal range 224 to 239) are specifically reserved for multicast groups in internet protocol networks.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 88,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.88 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 6.2: TCP vs UDP & Protocols
          {
            id: 'cs-topic-tcp-udp-app-protocols',
            chapterId: 'cs-ch-networks',
            topicNumber: 2,
            slug: 'tcp-vs-udp-protocols-ports',
            titleEn: 'Transport Protocols (TCP vs UDP), Subnetting & Port Numbers',
            titleHi: 'ट्रांसपोर्ट प्रोटोकॉल्स (TCP vs UDP), सबनेटिंग एवं पोर्ट नंबर्स',
            descriptionEn: 'Connection-oriented (TCP) vs Connectionless (UDP), 3-way handshake, Subnet Masking calculation, and well-known ports (80, 443, 53, 21).',
            descriptionHi: 'TCP (विश्वसनीय 3-वे हैंडशेक) vs UDP (तीव्र, अविश्वसनीय), पोर्ट 80 (HTTP), 443 (HTTPS), 53 (DNS), तथा सबनेट मास्क।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.56 Series A)',
            tutorial: {
              id: 'tut-cs-tcp-udp',
              topicId: 'cs-topic-tcp-udp-app-protocols',
              titleEn: 'TCP, UDP & Port Numbers for BPSC TRE',
              titleHi: 'BPSC TRE हेतु TCP, UDP एवं पोर्ट नंबर्स का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Contrast TCP (Connection-oriented, Reliable, Flow & Congestion Control) with UDP (Connectionless, Fast).',
                'Understand the 3-Way Handshake mechanism: ==SYN -> SYN-ACK -> ACK==.',
                'Memorize well-known port numbers tested in BPSC: HTTP (80), HTTPS (443), DNS (53), FTP (20/21), SSH (22).',
                'Calculate the number of usable hosts in an IPv4 subnet ($2^{32 - n} - 2$).'
              ],
              introductionEn: 'Transport layer protocols ensure end-to-end communication across diverse physical networks. Questions differentiating TCP from UDP and matching applications to well-known port numbers appear frequently.',
              introductionHi: 'ट्रांसपोर्ट परत पर TCP और UDP के अंतर से संबंधित प्रश्न BPSC TRE के पसंदीदा प्रश्न हैं। TCP का 3-वे हैंडशेक, विश्वसनीयता, और पोर्ट नंबर (80, 443, 53) छात्रों को अवश्य कंठस्थ होने चाहिए।',
              conceptSections: [
                {
                  title: '1. TCP vs. UDP Head-to-Head Comparison',
                  contentMarkdownEn: '**Comprehensive Comparison Table:**',
                  tableData: {
                    headers: ['Feature', 'TCP (Transmission Control Protocol)', 'UDP (User Datagram Protocol)', 'BPSC Exam Priority'],
                    rows: [
                      ['Connection Mode', '==Connection-Oriented== (3-way handshake)', '==Connectionless==', 'Very High (TRE 1.0 Q.56)'],
                      ['Reliability', '==Reliable== (Guarantees delivery & order)', '==Unreliable== (Best effort, packets may drop)', 'Very High'],
                      ['Speed / Overhead', 'Slower (20-60 byte header)', 'Much faster (8 byte fixed header)', 'High'],
                      ['Flow & Congestion Control', 'YES (Sliding window, AIMD)', 'NO', 'High'],
                      ['Typical Use Cases', 'Web (HTTP/HTTPS), Email (SMTP), File transfer (FTP)', 'Live streaming, DNS queries, VoIP, Online gaming', 'Highest']
                    ]
                  }
                },
                {
                  title: '2. Well-Known Port Numbers (0 to 1023)',
                  contentMarkdownEn: '* **Port 20 / 21:** FTP (File Transfer Protocol - Data / Control)\\n* **Port 22:** SSH (Secure Shell)\\n* **Port 25:** SMTP (Simple Mail Transfer Protocol - Outgoing email)\\n* **Port 53:** ==DNS (Domain Name System)== - Resolves domain to IP (uses UDP primarily)\\n* **Port 80:** ==HTTP (HyperText Transfer Protocol)==\\n* **Port 443:** ==HTTPS (HTTP Secure - TLS/SSL)==\\n* **Port 110:** POP3 (Incoming email)'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Three-Way Handshake',
                  definitionEn: 'The sequence of three packets (SYN, SYN-ACK, ACK) exchanged between a client and server to establish a reliable TCP socket connection.',
                  definitionHi: 'क्लाइंट और सर्वर के बीच एक विश्वसनीय TCP कनेक्शन स्थापित करने के लिए प्रेषित 3 पैकेट्स (SYN, SYN-ACK, ACK) का अनुक्रम।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Usable Hosts Formula in Subnetting',
                  formulaOrRule: 'Usable Hosts = 2^(Host Bits) - 2',
                  explanationEn: 'Subtract 2 for Network Address (all 0s) and Broadcast Address (all 1s).',
                  explanationHi: '2 घटाया जाता है क्योंकि पहला नेटवर्क पता और अंतिम ब्रॉडकास्ट पता होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which Transport layer protocol is connection-oriented, provides reliable ordered delivery, and performs flow control? (A) UDP (B) TCP (C) IP (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Connection-oriented and reliable delivery are the hallmark properties of TCP.\\n2. UDP is connectionless and best-effort; IP operates at the Network layer.\\n3. Official BPSC TRE 1.0 Key: Option (B) TCP.',
                  shortcutTrick: 'Reliable and Connection-oriented = TCP.'
                }
              ],
              practicalApplications: ['Browser web communication, secure shell server administration, streaming video.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Classifying IP as a transport layer protocol.',
                  whyWrongEn: 'IP operates at Layer 3 (Network Layer); TCP and UDP operate at Layer 4 (Transport Layer).',
                  correctWayEn: 'TCP and UDP are Transport protocols; IP is Network protocol.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'TCP is connection-oriented and reliable (TRE 1.0 Q.56).',
                  'DNS default port is 53.',
                  'HTTP port is 80; HTTPS port is 443.'
                ],
                commonDistractorTraps: ['Selecting UDP for reliable data transfer.'],
                relatedPyqReferences: ['BPSC TRE 1.0 (26-08-2023, Shift 1, Q.56 Series A)']
              },
              quickRevisionPoints: [
                'TCP: Connection-oriented, Reliable, Heavy header (20 bytes).',
                'UDP: Connectionless, Fast, Lightweight header (8 bytes).',
                'Port 80 = HTTP; Port 443 = HTTPS; Port 53 = DNS.',
                'Subnet formula: 2^(32-prefix) - 2 usable hosts.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-ports-1',
                  questionEn: 'Which port number is assigned by IANA as the default port for secure web browsing (HTTPS)?',
                  questionHi: 'सुरक्षित वेब ब्राउज़िंग (HTTPS) के लिए डिफ़ॉल्ट पोर्ट नंबर कौन-सा है?',
                  options: [
                    { id: 'A', textEn: '80', isCorrect: false },
                    { id: 'B', textEn: '443', isCorrect: true },
                    { id: 'C', textEn: '8080', isCorrect: false },
                    { id: 'D', textEn: '22', isCorrect: false }
                  ],
                  explanationEn: 'HTTPS runs over port 443; plain HTTP runs over port 80.',
                  conceptTested: 'HTTPS port number'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-trans-1',
                topicId: 'cs-topic-tcp-udp-app-protocols',
                chapterId: 'cs-ch-networks',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following transport protocols is connection-oriented, provides end-to-end reliable data delivery, and uses a three-way handshake to establish communication?',
                questionTextHi: 'निम्नलिखित में से कौन-सा ट्रांसपोर्ट प्रोटोकॉल कनेक्शन-ओरिएंटेड है, एंड-टू-एंड विश्वसनीय डेटा वितरण प्रदान करता है, और संचार स्थापित करने के लिए थ्री-वे हैंडशेक का उपयोग करता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'User Datagram Protocol (UDP)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Transmission Control Protocol (TCP)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Internet Protocol (IP)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Transmission Control Protocol (TCP) establishes a virtual connection using a 3-way handshake (SYN, SYN-ACK, ACK) and provides sequence numbers, acknowledgments, and retransmission of lost packets to guarantee reliable delivery.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 56,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.56 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 7: COMPUTATIONAL THINKING & PYTHON PROGRAMMING
      // ----------------------------------------------------
      {
        id: 'cs-ch-python-prog',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 7,
        slug: 'python-data-structures-slicing',
        titleEn: 'Python Programming: Slicing, Data Types & Functions',
        titleHi: 'पायथन प्रोग्रामिंग: स्लाइसिंग, डेटा प्रकार एवं फंक्शन्स',
        descriptionEn: 'Mutable vs Immutable types (List, Dict vs Tuple, String), String/List slicing [start:stop:step], Dictionary hashing, and Built-in functions.',
        descriptionHi: 'परिवर्तनीय (List, Dictionary) vs अपरिवर्तनीय (Tuple, String, int) डेटा प्रकार; स्ट्रिंग स्लाइसिंग; पायथन फंक्शन्स एवं स्कोप।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 7.1: Python Slicing & Mutability
          {
            id: 'cs-topic-python-datastructures',
            chapterId: 'cs-ch-python-prog',
            topicNumber: 1,
            slug: 'python-slicing-mutability',
            titleEn: 'Python Data Types, Slicing & Mutability',
            titleHi: 'पायथन डेटा प्रकार, स्लाइसिंग एवं म्यूटैबिलिटी',
            descriptionEn: 'Deep dive into Mutable (List, Set, Dict) vs Immutable (Int, Float, Str, Tuple) types, and Python slice notation string[start:stop:step].',
            descriptionHi: 'Tuple और String अपरिवर्तनीय (Immutable) क्यों हैं; s[5:8] इंडेक्सिंग नियम; डिक्शनरी कुंजियों (Keys) के नियम।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.64) & TRE 3.0 (22-07-2024, Shift 1, Q.82)',
            tutorial: {
              id: 'tut-cs-python',
              topicId: 'cs-topic-python-datastructures',
              titleEn: 'Python Programming for BPSC TRE Class 11–12',
              titleHi: 'BPSC TRE कक्षा 11-12 हेतु पायथन प्रोग्रामिंग एवं डेटा प्रकार',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Python memory model: Mutable (in-place modification) vs Immutable (creates new object).',
                'Identify all Immutable types: ==int, float, complex, string, tuple, frozenset==.',
                'Master slice notation: ==sequence[start : stop : step]== where stop is non-inclusive.',
                'Understand Dictionary keys restriction: Keys must be immutable and hashable (e.g. Tuples yes, Lists no).'
              ],
              introductionEn: 'Python is a core pillar of the CBSE/NCERT Class 11–12 Computer Science syllabus adopted by BPSC TRE. 10 to 12 questions in the 80-mark Subject paper directly evaluate Python data type mutability, slicing arithmetic, and expression evaluation.',
              introductionHi: 'BPSC TRE कंप्यूटर साइंस (कक्षा 11-12) में NCERT पाठ्यक्रम के तहत पायथन प्रोग्रामिंग से 10-12 प्रश्न पूछे जाते हैं। विशेष रूप से म्यूटैबिलिटी (Mutable vs Immutable), स्ट्रिंग स्लाइसिंग, तथा डिक्शनरी की बनावट मुख्य केंद्र होते हैं।',
              conceptSections: [
                {
                  title: '1. Mutability vs. Immutability in Python',
                  contentMarkdownEn: 'In Python, every variable is a reference to an object in memory:\\n* **Immutable Data Types (Cannot be modified after creation):**\\n  * `int`, `float`, `complex`, `bool`\\n  * `str` (String)\\n  * ==`tuple` (e.g., `(1, 2, 3)`)==\\n  * `frozenset`\\n  * *Note:* Attempting in-place modification raises `TypeError: \'tuple\' object does not support item assignment`.\\n* **Mutable Data Types (Can be modified in place):**\\n  * `list` (e.g., `[1, 2, 3]`)\\n  * `dict` (e.g., `{\'a\': 1}`)\\n  * `set` (e.g., `{1, 2, 3}`)'
                },
                {
                  title: '2. Sequence Slicing Notation: seq[start:stop:step]',
                  contentMarkdownEn: 'Slicing extracts a subsequence without modifying the original object:\\n* `start`: Initial index (inclusive, defaults to `0`).\\n* `stop`: Final index (**non-inclusive / exclusive**, defaults to `len(seq)`).\\n* `step`: Index increment (defaults to `1`).\\n\\n**Example:**\\n```python\\ns = "BPSC-TRE-4"\\n# Indices: 0:B, 1:P, 2:S, 3:C, 4:-, 5:T, 6:R, 7:E, 8:-, 9:4\\nprint(s[5:8])  # Extracts indices 5, 6, 7 -> "TRE"\\n```'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Immutable Object',
                  definitionEn: 'An object with a fixed value that cannot be altered after instantiation. Modifications create a new object in memory.',
                  definitionHi: 'वह ऑब्जेक्ट जिसका मान निर्माण के बाद बदला नहीं जा सकता। परिवर्तन करने पर नया ऑब्जेक्ट बनता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Slice Length Formula',
                  formulaOrRule: 'Length = max(0, stop - start) (when step = 1)',
                  explanationEn: 'The character at the "stop" index is never included in the slice.',
                  explanationHi: 'स्टॉप इंडेक्स वाला कैरेक्टर कभी भी स्लाइस में शामिल नहीं होता।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'What will be the output of the following Python code?\\ns = "BPSC-TRE-4"\\nprint(s[5:8])\\n(A) TRE (B) RE- (C) BPSC (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Index 5 = \'T\', index 6 = \'R\', index 7 = \'E\'.\\n2. Stop index 8 is excluded.\\n3. Sliced substring = "TRE".\\n4. Official BPSC Key: Option (A) TRE.',
                  shortcutTrick: 'stop index 8 means chars at 5, 6, 7 -> "TRE".'
                }
              ],
              practicalApplications: ['Data parsing, machine learning preprocessing, algorithmic programming.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Tuples can be modified if they contain numbers.',
                  whyWrongEn: 'Tuples are strictly immutable regardless of elements.',
                  correctWayEn: 'Tuples cannot be altered in place.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Tuple is immutable (TRE 1.0 Q.64).',
                  'String slicing s[5:8] non-inclusive stop (TRE 3.0 Q.82).',
                  'Dictionary key hashability (Lists cannot be keys).'
                ],
                commonDistractorTraps: ['Including the character at the stop index.'],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.64 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.82 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Immutable: int, float, str, tuple, frozenset.',
                'Mutable: list, dict, set.',
                'Slice s[start:stop:step]: stop is non-inclusive.',
                'Only immutable types can be Dictionary keys.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-py-1',
                  questionEn: 'Which of the following operations will raise a TypeError in Python?',
                  questionHi: 'पायथन में निम्नलिखित में से कौन-सा ऑपरेशन TypeError उत्पन्न करेगा?',
                  options: [
                    { id: 'A', textEn: 'my_list = [1, 2]; my_list[0] = 5', isCorrect: false },
                    { id: 'B', textEn: 'my_tuple = (1, 2); my_tuple[0] = 5', isCorrect: true },
                    { id: 'C', textEn: 'my_dict = {"a": 1}; my_dict["a"] = 5', isCorrect: false },
                    { id: 'D', textEn: 'my_set = {1, 2}; my_set.add(5)', isCorrect: false }
                  ],
                  explanationEn: 'Tuples are immutable; item assignment is prohibited.',
                  conceptTested: 'Tuple Immutability'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-py-1',
                topicId: 'cs-topic-python-datastructures',
                chapterId: 'cs-ch-python-prog',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following data types in Python is IMMUTABLE (cannot be modified after creation)?',
                questionTextHi: 'पायथन में निम्नलिखित में से कौन-सा डेटा प्रकार अपरिवर्तनीय (IMMUTABLE) है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'List', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Dictionary', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Tuple', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In Python, Tuples and Strings are immutable sequences. Once created, their elements cannot be changed or reassigned in place. Lists and Dictionaries are mutable.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 64,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper II Computer Science, Q.64 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-cs-pyq-py-2',
                topicId: 'cs-topic-python-datastructures',
                chapterId: 'cs-ch-python-prog',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'What will be the output of the following Python expression?\n```python\ns = "BPSC-TRE-4"\nprint(s[5:8])\n```',
                questionTextHi: 'निम्नलिखित पायथन एक्सप्रेशन का आउटपुट क्या होगा?\n```python\ns = "BPSC-TRE-4"\nprint(s[5:8])\n```',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'TRE', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'RE-', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'BPSC', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In the string "BPSC-TRE-4", index 5 corresponds to "T", index 6 to "R", and index 7 to "E". Slicing stop index 8 is exclusive, returning characters from index 5 through 7 ("TRE").',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 82,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.82 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 7.2: Python Functions, Scope & Modules
          {
            id: 'cs-topic-python-functions-modules',
            chapterId: 'cs-ch-python-prog',
            topicNumber: 2,
            slug: 'python-functions-scope-random',
            titleEn: 'Python Functions, Scope (LEGB) & Built-in Modules',
            titleHi: 'पायथन फंक्शन्स, स्कोप (LEGB) एवं Built-in मॉड्यूल्स',
            descriptionEn: 'Default arguments, variable arguments (*args, **kwargs), LEGB scope resolution, and math/random modules (randint vs randrange).',
            descriptionHi: 'डिफ़ॉल्ट और कीवर्ड तर्क, LEGB स्कोप नियम, तथा random.randint(1, 6) में दोनों सीमाओं का समावेश।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.91 Series A)',
            tutorial: {
              id: 'tut-cs-py-func',
              topicId: 'cs-topic-python-functions-modules',
              titleEn: 'Python Functions & Modules for BPSC TRE',
              titleHi: 'BPSC TRE हेतु पायथन फंक्शन्स एवं मॉड्यूल्स का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand default argument constraints (non-default arguments cannot follow default arguments).',
                'Apply the LEGB Scope Rule: Local -> Enclosing -> Global -> Built-in.',
                'Differentiate `random.randint(a, b)` (both bounds INCLUSIVE) from `random.randrange(a, b)` (b is EXCLUSIVE).',
                'Use `math` module functions (`math.ceil`, `math.floor`, `math.pow`).'
              ],
              introductionEn: 'Functions provide modularity in Python programming. BPSC TRE regularly tests candidates on random number boundaries and the LEGB variable scope lookup sequence.',
              introductionHi: 'पायथन फंक्शन्स और मॉड्यूल्स BPSC TRE कक्षा 11-12 के पाठ्यक्रम का महत्वपूर्ण हिस्सा हैं। विशेष रूप से `random.randint(a, b)` दोनों सिरों (a और b) को शामिल करता है, जिससे परीक्षा में प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. `random.randint()` vs. `random.randrange()`',
                  contentMarkdownEn: '* **`random.randint(a, b)`:** Returns a random integer $N$ such that ==$a \\\\le N \\\\le b$==.\\n  * **BOTH $a$ AND $b$ ARE INCLUSIVE**.\\n  * *Example:* `random.randint(1, 6)` generates random integers from **1 to 6 inclusive** (like a 6-sided die).\\n* **`random.randrange(a, b)`:** Returns a random integer $N$ such that $a \\\\le N < b$ (upper bound $b$ is **EXCLUSIVE**).'
                },
                {
                  title: '2. The LEGB Scope Resolution Rule',
                  contentMarkdownEn: 'When a variable name is referenced in Python, the interpreter searches in strict order:\\n1. ==L (Local):== Names assigned inside a function.\\n2. ==E (Enclosing):== Names in the local scope of any enclosing/nested functions.\\n3. ==G (Global):== Names assigned at the top level of the module file.\\n4. ==B (Built-in):== Predefined names in the Python built-in namespace (`len`, `range`, `print`).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'LEGB Rule',
                  definitionEn: 'The order in which Python resolves variable scope: Local, Enclosing, Global, and Built-in.',
                  definitionHi: 'पायथन द्वारा चर (variable) के मान को खोजने का निश्चित क्रम: लोकल -> एन्क्लोजिंग -> ग्लोबल -> बिल्ट-इन।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Randint Inclusivity Rule',
                  formulaOrRule: 'random.randint(a, b) = [a, b] (Both bounds inclusive)',
                  explanationEn: 'Both a and b are possible outputs.',
                  explanationHi: 'a और b दोनों मान आ सकते हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'What is the range of integers that can be generated by random.randint(1, 6) in Python? (A) 1 to 5 (B) 1 to 6 (both 1 and 6 inclusive) (C) 0 to 6 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. The Python documentation for `random.randint(a, b)` explicitly specifies that both endpoints are inclusive.\\n2. Therefore, `random.randint(1, 6)` can return 1, 2, 3, 4, 5, or 6.\\n3. Official BPSC TRE 2.0 Key: Option (B) 1 to 6 (both 1 and 6 inclusive).',
                  shortcutTrick: 'randint = BOTH ends included.'
                }
              ],
              practicalApplications: ['Game development dice rolling, automated Monte Carlo simulation, randomized unit tests.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking random.randint(1, 6) excludes 6.',
                  whyWrongEn: 'randrange(1, 6) excludes 6, but randint(1, 6) includes 6.',
                  correctWayEn: 'randint(a, b) includes both a and b.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'random.randint inclusivity (TRE 2.0 Q.91).',
                  'LEGB scope resolution order.',
                  'Default parameters must follow non-default parameters.'
                ],
                commonDistractorTraps: ['Selecting 1 to 5 for randint(1, 6).'],
                relatedPyqReferences: ['BPSC TRE 2.0 (15-12-2023, Shift 1, Q.91 Series A)']
              },
              quickRevisionPoints: [
                'randint(a, b) includes both a and b.',
                'randrange(a, b) excludes b.',
                'Scope lookup order: L -> E -> G -> B.',
                'def func(a, b=2) is valid; def func(a=2, b) is SYNTAX ERROR.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-py-func-1',
                  questionEn: 'Which of the following function definitions will raise a SyntaxError in Python?',
                  questionHi: 'पायथन में निम्नलिखित में से कौन-सी फंक्शन परिभाषा SyntaxError उत्पन्न करेगी?',
                  options: [
                    { id: 'A', textEn: 'def calc(x, y=10): return x + y', isCorrect: false },
                    { id: 'B', textEn: 'def calc(x=10, y): return x + y', isCorrect: true },
                    { id: 'C', textEn: 'def calc(x=10, y=20): return x + y', isCorrect: false },
                    { id: 'D', textEn: 'def calc(*args): return sum(args)', isCorrect: false }
                  ],
                  explanationEn: 'Non-default argument `y` cannot follow default argument `x=10`.',
                  conceptTested: 'Default argument order'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-pyq-py-func-1',
                topicId: 'cs-topic-python-functions-modules',
                chapterId: 'cs-ch-python-prog',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In Python, what is the exact range of integer values that can be generated by executing the expression `random.randint(1, 6)`?',
                questionTextHi: 'पायथन में, `random.randint(1, 6)` एक्सप्रेशन को निष्पादित करने पर पूर्णांक मानों की सटीक परास (Range) क्या हो सकती है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Integers from 1 to 5 only', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Integers from 1 to 6 (both 1 and 6 inclusive)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Floating-point values between 1.0 and 6.0', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'In Python\'s standard random module, `random.randint(a, b)` returns a random integer N such that a <= N <= b. Thus, both endpoint 1 and endpoint 6 are inclusive possibilities.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 91,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.91 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
