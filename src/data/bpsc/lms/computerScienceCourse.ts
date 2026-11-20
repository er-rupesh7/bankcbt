import { LMSSubject } from '@/types/bpscLms';

export const BPSC_COMPUTER_SCIENCE_SUBJECTS: LMSSubject[] = [
  // =========================================================================
  // SUBJECT 1: COMPUTER SCIENCE (CLASS 11 & 12 PGT / SENIOR SECONDARY)
  // =========================================================================
  {
    key: 'COMPUTER_SCIENCE_11_12',
    sectionKey: 'PART_3_SUBJECT_CORE',
    displayNameEn: 'Computer Science (Class 11 & 12)',
    displayNameHi: 'कंप्यूटर विज्ञान (कक्षा 11 एवं 12)',
    iconName: 'Cpu',
    descriptionEn: 'Official 80-mark curriculum for BPSC TRE PGT: Digital Logic, Architecture, OS, DSA, C++, Python, DBMS/SQL, Networks, Software Eng, and Cyber Security with authentic TRE 1.0, 2.0 & 3.0 PYQs.',
    descriptionHi: 'BPSC TRE 4.0 11-12वीं कंप्यूटर शिक्षक हेतु संपूर्ण 80 अंकों का विस्तृत पाठ्यक्रम एवं वास्तविक TRE 1.0, 2.0, 3.0 के प्रश्न।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: DIGITAL LOGIC & NUMBER SYSTEMS
      // ----------------------------------------------------
      {
        id: 'cs-ch-digital-logic',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 1,
        slug: 'digital-logic-number-systems',
        titleEn: 'Digital Logic, Number Systems & Boolean Algebra',
        titleHi: 'डिजिटल लॉजिक, संख्या पद्धतियां एवं बूलियन बीजगणित',
        descriptionEn: 'Base conversions, 1\'s/2\'s complement arithmetic, De Morgan\'s laws, K-Maps, logic gates, and combinational circuits.',
        descriptionHi: 'संख्या रूपांतरण, 2\'s पूरक, डि मॉर्गन के नियम, K-मैप, तथा संयोजन परिपथ।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'cs-topic-number-systems-twos-comp',
            chapterId: 'cs-ch-digital-logic',
            topicNumber: 1,
            slug: 'number-systems-twos-complement',
            titleEn: 'Number Conversions & 2\'s Complement Arithmetic',
            titleHi: 'संख्या पद्धति रूपांतरण एवं 2\'s पूरक अंकगणित',
            descriptionEn: 'Binary, Octal, Hexadecimal conversions, range of signed numbers (-2^(n-1) to 2^(n-1)-1), and ALU overflow detection.',
            descriptionHi: 'बाइनरी-दशमलव-हेक्साडेसिमल रूपांतरण, 2\'s पूरक की सीमा, और ओवरफ्लो की शर्तें।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            tutorial: {
              id: 'tut-cs-twos-comp',
              topicId: 'cs-topic-number-systems-twos-comp',
              titleEn: 'Number Systems & 2\'s Complement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु संख्या पद्धतियां एवं 2\'s पूरक की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Convert fluently between Binary, Octal, Decimal, and Hexadecimal representations.',
                'Compute 1\'s complement and 2\'s complement using the fastest right-to-left inspection shortcut.',
                'State the range of n-bit 2\'s complement numbers: -2^(n-1) to +(2^(n-1) - 1).',
                'Explain why modern ALUs use 2\'s complement (single zero and unified addition hardware).'
              ],
              introductionEn: 'In every BPSC TRE Computer Science paper, questions on 2\'s complement representation and number base conversions appear prominently. Examiners test the boundary values of signed integers and fast conversion rules.',
              introductionHi: 'BPSC TRE 11-12 कंप्यूटर शिक्षक परीक्षा में 2\'s पूरक और संख्या रूपांतरण से 2 से 3 प्रश्न निश्चित पूछे जाते हैं। आयोग n-बिट 2\'s पूरक की सीमा (-128 से +127) पर विशेष बल देता है।',
              conceptSections: [
                {
                  title: '1. Number Base Conversions & Grouping Method',
                  contentMarkdownEn: '* **Octal (Base 8) to Binary:** Group each octal digit into 3 binary bits ($2^3 = 8$).\n  * $(725)_8 = (111 \\, 010 \\, 101)_2$.\n* **Hexadecimal (Base 16) to Binary:** Group each hex digit into 4 binary bits ($2^4 = 16$).\n  * $(2F)_H = (0010 \\, 1111)_2 = (101111)_2$.\n* **Binary to Hex:** Group bits in sets of 4 from the radix point (right-to-left for integer part, left-to-right for fractional part).'
                },
                {
                  title: '2. 2\'s Complement & Register Range',
                  contentMarkdownEn: '* **2\'s Complement Formula:** $\\mathbf{2\'s \\text{ complement} = 1\'s \\text{ complement} + 1}$.\n* **Fastest Inspection Trick:** Scan from right to left (LSB to MSB): copy all bits up to and including the first \'1\'. Invert all remaining bits to the left.\n* **Range Formula for $n$ bits:** $\\mathbf{-(2^{n-1})}$ to $\\mathbf{+(2^{n-1} - 1)}$.\n  * For 8 bits: **-128 to +127**.\n  * For 16 bits: **-32,768 to +32,767**.',
                  tableData: {
                    headers: ['Encoding Scheme', 'Range Formula (for n bits)', '8-bit Range', 'Zero Representations'],
                    rows: [
                      ['Unsigned Binary', '0 to 2^n - 1', '0 to 255', 'Single zero (00000000)'],
                      ['Signed Magnitude', '-(2^(n-1) - 1) to +(2^(n-1) - 1)', '-127 to +127', 'Two zeros: +0 and -0'],
                      ['1\'s Complement', '-(2^(n-1) - 1) to +(2^(n-1) - 1)', '-127 to +127', 'Two zeros: +0 and -0'],
                      ['2\'s Complement', '-(2^(n-1)) to +(2^(n-1) - 1)', '-128 to +127', 'Unique single zero']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: '2\'s Complement',
                  definitionEn: 'Binary encoding where a negative value -x in an n-bit register is represented as (2^n - x).',
                  definitionHi: 'ऋणात्मक बाइनरी संख्याओं का वह रूप जिसमें 1\'s पूरक में 1 जोड़कर मान प्राप्त किया जाता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Range of n-bit 2\'s Complement',
                  formulaOrRule: 'Range = [ -2^(n-1) , + (2^(n-1) - 1) ]',
                  explanationEn: 'For n=8 bits: -128 to +127.',
                  explanationHi: '8 बिट के लिए: -128 से +127।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'What is the range of signed integers that can be represented using an 8-bit register in 2\'s complement form? (A) -127 to +127 (B) -128 to +127 (C) -128 to +128 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Apply formula: -2^(8-1) to +(2^(8-1) - 1) = -2^7 to +(2^7 - 1) = -128 to +127.\n2. Official BPSC TRE 2.0 Key: Option (B).',
                  shortcutTrick: '8-bit 2\'s complement = -128 to +127.'
                }
              ],
              practicalApplications: [
                'Arithmetic logic unit (ALU) design and integer overflow checking in low-level systems programming.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking +128 can be represented in 8-bit 2\'s complement.',
                  whyWrongEn: 'Positive ceiling is 2^(n-1) - 1 = 127 because zero takes one positive slot.',
                  correctWayEn: 'Maximum positive value is +127, not +128.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Range of n-bit 2\'s complement.',
                  'Why 2\'s complement is preferred (unique zero, same adder circuit).',
                  'Conversion of negative decimal to 2\'s complement byte.'
                ],
                commonDistractorTraps: [
                  'Option A (-127 to +127) is for 1\'s complement, not 2\'s complement.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.78 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Hex digit = 4 bits; Octal digit = 3 bits.',
                '2\'s complement = 1\'s complement + 1.',
                '8-bit 2\'s complement range: -128 to +127.',
                'Eliminates dual representation of zero (+0 and -0).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-logic-1',
                  questionEn: 'Which of the following is the 2\'s complement representation of decimal -5 in an 8-bit register?',
                  questionHi: '8-बिट रजिस्टर में दशमलव संख्या -5 का 2\'s पूरक क्या होगा?',
                  options: [
                    { id: 'A', textEn: '1111 1010', isCorrect: false },
                    { id: 'B', textEn: '1111 1011', isCorrect: true },
                    { id: 'C', textEn: '1000 0101', isCorrect: false },
                    { id: 'D', textEn: '0000 0101', isCorrect: false }
                  ],
                  explanationEn: '+5 in 8 bits is 0000 0101. 1\'s complement is 1111 1010. Adding 1 gives 1111 1011.',
                  conceptTested: '2\'s complement computation'
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
                questionTextEn: 'What is the range of signed integers that can be stored in an 8-bit register using 2\'s complement representation?',
                questionTextHi: '2\'s पूरक निरूपण का उपयोग करके 8-बिट रजिस्टर में किस सीमा के हस्ताक्षरित पूर्णांकों को संग्रहीत किया जा सकता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '-127 to +127', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '-128 to +127', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '-128 to +128', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'For an n-bit register, the range of 2\'s complement representation is -2^(n-1) to +(2^(n-1) - 1). For n = 8, the range is -2^7 to +(2^7 - 1) = -128 to +127.',
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
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: OPERATING SYSTEMS & PROCESS MANAGEMENT
      // ----------------------------------------------------
      {
        id: 'cs-ch-os',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 2,
        slug: 'operating-systems-scheduling',
        titleEn: 'Operating Systems: Scheduling, Deadlocks & Memory',
        titleHi: 'ऑपरेटिंग सिस्टम: शेड्यूलिंग, डेडलॉक एवं मेमोरी प्रबंधन',
        descriptionEn: 'Process states, CPU scheduling (FCFS, SJF, Round Robin), Coffman deadlock conditions, Banker\'s Algorithm, Paging, and LRU.',
        descriptionHi: 'प्रोसेस शेड्यूलिंग, टर्नअराउंड/वेटिंग टाइम, डेडलॉक की 4 शर्तें, बैंकर का नियम, तथा LRU पेज रिप्लेसमेंट।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'cs-topic-cpu-scheduling-deadlocks',
            chapterId: 'cs-ch-os',
            topicNumber: 1,
            slug: 'cpu-scheduling-and-deadlocks',
            titleEn: 'CPU Scheduling Algorithms & Deadlock Coffman Conditions',
            titleHi: 'CPU शेड्यूलिंग एल्गोरिदम एवं डेडलॉक की शर्तें',
            descriptionEn: 'Formulas for TAT and WT, optimal waiting time of SJF, Convoy Effect in FCFS, and the 4 Coffman conditions for deadlocks.',
            descriptionHi: 'TAT = CT - AT, WT = TAT - BT, SJF का न्यूनतम औसत प्रतीक्षा समय, तथा डेडलॉक की 4 अनिवार्य शर्तें।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            tutorial: {
              id: 'tut-cs-os-scheduling',
              topicId: 'cs-topic-cpu-scheduling-deadlocks',
              titleEn: 'CPU Scheduling & Deadlocks for BPSC TRE',
              titleHi: 'BPSC TRE हेतु CPU शेड्यूलिंग एवं डेडलॉक की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Calculate Turnaround Time (TAT = CT - AT) and Waiting Time (WT = TAT - BT).',
                'Demonstrate why SJF minimizes average waiting time compared to all other scheduling algorithms.',
                'Memorize the 4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
                'Explain how Banker\'s Algorithm avoids deadlock by ensuring safe states.'
              ],
              introductionEn: 'Process scheduling and synchronization are core pillars of operating system engineering. BPSC TRE examinations regularly feature numerical problems on Gantt charts as well as conceptual checks on deadlock conditions.',
              introductionHi: 'BPSC TRE 11-12वीं में ऑपरेटिंग सिस्टम से 8 से 10 प्रश्न पूछे जाते हैं। इनमें CPU शेड्यूलिंग (FCFS, SJF, Round Robin) और डेडलॉक की शर्तों पर सीधे प्रश्न आते हैं।',
              conceptSections: [
                {
                  title: '1. CPU Scheduling Metrics & Formulas',
                  contentMarkdownEn: '* **Turnaround Time (TAT):** $\\mathbf{TAT = \\text{Completion Time (CT)} - \\text{Arrival Time (AT)}}$.\n* **Waiting Time (WT):** $\\mathbf{WT = \\text{Turnaround Time (TAT)} - \\text{Burst Time (BT)}}$.\n* **SJF (Shortest Job First):** Provably optimal for minimizing average waiting time.\n* **FCFS (First Come First Served):** Suffers from the **Convoy Effect** (short jobs stuck behind long jobs).\n* **Round Robin (RR):** Preemptive based on a time slice (**Quantum**).'
                },
                {
                  title: '2. 4 Coffman Conditions for Deadlock',
                  contentMarkdownEn: 'Deadlock occurs **if and only if** all four conditions hold simultaneously:\n1. **Mutual Exclusion:** Resources cannot be shared simultaneously.\n2. **Hold and Wait:** A process holds at least one resource while waiting for another.\n3. **No Preemption:** Resources cannot be forcibly preempted from a process.\n4. **Circular Wait:** Closed loop where $P_0$ waits for $P_1$, $P_1$ waits for $P_2$, ..., $P_n$ waits for $P_0$.\n\n*Note:* **Banker\'s Algorithm** is used for Deadlock **AVOIDANCE** (ensuring safe state).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Convoy Effect',
                  definitionEn: 'Phenomenon in FCFS where short processes spend excessive time waiting behind a CPU-intensive heavy process.',
                  definitionHi: 'FCFS में जब छोटे प्रोसेस एक भारी प्रोसेस के पीछे कतार में लंबे समय तक फंसे रहते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Waiting Time Formula',
                  formulaOrRule: 'WT = TAT - Burst Time',
                  explanationEn: 'Time a process spends in ready queue before completion.',
                  explanationHi: 'प्रक्रिया द्वारा कतार में प्रतीक्षा किया गया कुल समय।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which CPU scheduling algorithm gives the minimum average waiting time for a given set of processes? (A) FCFS (B) Shortest Job First (SJF) (C) Round Robin (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Mathematical proof shows that scheduling jobs in increasing order of burst times minimizes the waiting time of subsequent jobs.\n2. In official BPSC TRE 1.0 key: Option (B) SJF.',
                  shortcutTrick: 'Minimum average waiting time = SJF.'
                }
              ],
              practicalApplications: [
                'Kernel process management in Linux/UNIX for interactive responsiveness and server throughput.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Listing "Preemption" as a condition for deadlock.',
                  whyWrongEn: 'It is NO PREEMPTION. If resources could be preempted, deadlock would be broken.',
                  correctWayEn: 'Condition is "No Preemption".'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which algorithm gives minimum average waiting time (SJF).',
                  'The 4 Coffman conditions.',
                  'Banker\'s algorithm is for deadlock avoidance.'
                ],
                commonDistractorTraps: [
                  'Confusing deadlock prevention with deadlock avoidance.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.52 Series A)'
                ]
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
                  questionEn: 'Which of the following is NOT one of the four necessary Coffman conditions for a deadlock?',
                  questionHi: 'निम्नलिखित में से कौन सी स्थिति डेडलॉक के लिए आवश्यक चार शर्तों में से नहीं है?',
                  options: [
                    { id: 'A', textEn: 'Mutual Exclusion', isCorrect: false },
                    { id: 'B', textEn: 'Hold and Wait', isCorrect: false },
                    { id: 'C', textEn: 'Preemption of resources', isCorrect: true },
                    { id: 'D', textEn: 'Circular Wait', isCorrect: false }
                  ],
                  explanationEn: 'The condition is "NO Preemption". Preemption breaks deadlocks, so Preemption is NOT a condition for deadlock.',
                  conceptTested: 'Coffman deadlock conditions'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-os-pyq-1',
                topicId: 'cs-topic-cpu-scheduling-deadlocks',
                chapterId: 'cs-ch-os',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which CPU scheduling algorithm is theoretically provable to produce the minimum average waiting time for a given set of processes?',
                questionTextHi: 'दिए गए प्रोसेस के सेट के लिए न्यूनतम औसत प्रतीक्षा समय उत्पन्न करने वाला सैद्धांतिक रूप से सिद्ध CPU शेड्यूलिंग एल्गोरिदम कौन-सा है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'First Come First Served (FCFS)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Shortest Job First (SJF)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Priority Scheduling', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Shortest Job First (SJF) is mathematically optimal because by scheduling shorter jobs ahead of longer jobs, the cumulative waiting time of waiting processes is minimized.',
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
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: DATA STRUCTURES & ALGORITHMS (DSA)
      // ----------------------------------------------------
      {
        id: 'cs-ch-dsa',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 3,
        slug: 'data-structures-and-algorithms',
        titleEn: 'Data Structures: Trees, Stacks, Queues & Sorting',
        titleHi: 'डेटा संरचनाएं: ट्री, स्टैक, क्यू एवं सॉर्टिंग एल्गोरिदम',
        descriptionEn: 'Asymptotic notation Big-O, Inorder/Preorder traversals, BST properties, QuickSort/MergeSort complexities, and binary tree theorems.',
        descriptionHi: 'बाइनरी सर्च ट्री (BST), इनऑर्डर ट्रैवर्सल, क्विकसॉर्ट की समय जटिलता, तथा ट्री प्रमेय (n0 = n2 + 1)।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'cs-topic-trees-traversals',
            chapterId: 'cs-ch-dsa',
            topicNumber: 1,
            slug: 'binary-trees-bst-traversals',
            titleEn: 'Binary Search Trees & Sorting Algorithm Complexities',
            titleHi: 'बाइनरी सर्च ट्री एवं सॉर्टिंग की समय जटिलता',
            descriptionEn: 'Inorder of BST produces sorted array, strictly binary tree leaves relation (n0 = n2 + 1), and QuickSort worst case O(n^2).',
            descriptionHi: 'BST का इनऑर्डर आरोही क्रम में होता है, लीफ नोड सूत्र (n0 = n2 + 1), तथा क्विकसॉर्ट की वर्स्ट-केस जटिलता O(n^2)।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            tutorial: {
              id: 'tut-cs-tree-traversals',
              topicId: 'cs-topic-trees-traversals',
              titleEn: 'Binary Search Trees & Sorting for BPSC TRE',
              titleHi: 'BPSC TRE हेतु BST एवं सॉर्टिंग की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State and apply the BST property: Left Subtree < Root < Right Subtree.',
                'Recognize that Inorder traversal of any BST yields keys in strictly ASCENDING sorted order.',
                'Apply the binary tree theorem: In any strictly binary tree, Leaf Nodes = Degree-2 Nodes + 1 (n0 = n2 + 1).',
                'Compare time complexities of BubbleSort, QuickSort, MergeSort, and HeapSort.'
              ],
              introductionEn: 'Binary trees and sorting algorithm complexities are among the most heavily tested themes in BPSC TRE PGT Computer Science. Questions regularly test asymptotic bounds and tree property relations.',
              introductionHi: 'BPSC TRE 11-12 में डेटा संरचनाओं से 10 से 12 प्रश्न आते हैं। विशेष रूप से BST का इनऑर्डर ट्रैवर्सल हमेशा सॉर्टेड होता है और क्विकसॉर्ट की वर्स्ट-केस जटिलता O(n^2) होती है, यह तथ्य बार-बार पूछा जाता है।',
              conceptSections: [
                {
                  title: '1. Binary Tree Traversals & BST Property',
                  contentMarkdownEn: '* **Inorder Traversal (Left - Root - Right):** In any valid Binary Search Tree (BST), Inorder traversal visits keys in **strictly ascending sorted order**!\n* **Preorder Traversal (Root - Left - Right):** Root is visited first; used for cloning/serializing trees.\n* **Postorder Traversal (Left - Right - Root):** Leaves are visited before root; used for tree deletion and bottom-up evaluation.\n* **Binary Tree Leaves Theorem:** In every non-empty binary tree where every node has either 0 or 2 children: $\\mathbf{n_0 = n_2 + 1}$. (Number of leaf nodes is always 1 more than internal nodes with 2 children).'
                },
                {
                  title: '2. Sorting Algorithm Complexities',
                  contentMarkdownEn: 'Comparison of standard sorting algorithms:',
                  tableData: {
                    headers: ['Algorithm', 'Best Case Time', 'Average Case Time', 'Worst Case Time', 'Space Complexity'],
                    rows: [
                      ['Bubble Sort', '$O(n)$ (with flag)', '$O(n^2)$', '$O(n^2)$', '$O(1)$'],
                      ['Insertion Sort', '$O(n)$ (already sorted)', '$O(n^2)$', '$O(n^2)$', '$O(1)$'],
                      ['QuickSort', '$O(n \\log n)$', '$O(n \\log n)$', '$\\mathbf{O(n^2)}$ (unbalanced pivot)', '$O(\\log n)$'],
                      ['MergeSort', '$O(n \\log n)$', '$O(n \\log n)$', '$O(n \\log n)$ (Guaranteed)', '$O(n)$ auxiliary'],
                      ['HeapSort', '$O(n \\log n)$', '$O(n \\log n)$', '$O(n \\log n)$', '$O(1)$ in-place']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Binary Search Tree (BST)',
                  definitionEn: 'A binary tree where each node key is greater than all keys in its left subtree and less than all keys in its right subtree.',
                  definitionHi: 'वह बाइनरी ट्री जिसमें बाएँ सब-ट्री के सभी मान मूल नोड से छोटे और दाएँ सब-ट्री के मान मूल नोड से बड़े होते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Binary Tree Leaves Formula',
                  formulaOrRule: 'n_0 = n_2 + 1 (Leaf Nodes = Degree-2 Internal Nodes + 1)',
                  explanationEn: 'Essential theorem tested in TRE 3.0 Q.71.',
                  explanationHi: 'पत्तियों की संख्या हमेशा दो बच्चों वाले नोड्स से 1 अधिक होती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'In a strictly binary tree having 30 internal nodes with two children each, how many leaf nodes are there? (A) 29 (B) 30 (C) 31 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Theorem states: n_0 = n_2 + 1.\n2. Here, n_2 = 30.\n3. Therefore, n_0 = 30 + 1 = 31.\n4. Official BPSC TRE 3.0 Key: Option (C) 31.',
                  shortcutTrick: 'Leaves = Degree-2 nodes + 1 = 30 + 1 = 31.'
                }
              ],
              practicalApplications: [
                'Database index B-Trees, compiler symbol tables, and fast $O(\\log n)$ in-memory lookups.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing QuickSort worst-case time complexity is O(n log n).',
                  whyWrongEn: 'When the array is already sorted or reverse-sorted and the first/last element is picked as pivot, QuickSort degenerates to O(n^2).',
                  correctWayEn: 'QuickSort worst-case is O(n^2), while MergeSort is guaranteed O(n log n).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Inorder traversal of BST gives sorted keys.',
                  'Theorem n0 = n2 + 1 in strictly binary trees.',
                  'Worst case time complexity of QuickSort (O(n^2)).'
                ],
                commonDistractorTraps: [
                  'Subtracting 1 instead of adding 1 for leaf nodes.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.71 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.71 Series A)'
                ]
              },
              quickRevisionPoints: [
                'BST Inorder traversal = Ascending sorted sequence.',
                'Binary Tree: Leaf nodes n_0 = n_2 + 1.',
                'QuickSort worst case: O(n^2); Average case: O(n log n).',
                'MergeSort guarantees O(n log n) in all cases but needs O(n) space.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-dsa-1',
                  questionEn: 'Which traversal of a Binary Search Tree (BST) visits elements in ascending numerical order?',
                  questionHi: 'बाइनरी सर्च ट्री (BST) का कौन-सा ट्रैवर्सल तत्वों को आरोही संख्यात्मक क्रम में प्रोसेस करता है?',
                  options: [
                    { id: 'A', textEn: 'Preorder (NLR)', isCorrect: false },
                    { id: 'B', textEn: 'Inorder (LNR)', isCorrect: true },
                    { id: 'C', textEn: 'Postorder (LRN)', isCorrect: false },
                    { id: 'D', textEn: 'Level Order', isCorrect: false }
                  ],
                  explanationEn: 'Inorder traversal processes Left subtree, then Root, then Right subtree, producing keys in monotonically non-decreasing order.',
                  conceptTested: 'BST Inorder traversal'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-dsa-pyq-1',
                topicId: 'cs-topic-trees-traversals',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In a strictly binary tree with 40 internal nodes each having two children, what is the exact number of leaf nodes?',
                questionTextHi: 'एक स्ट्रिक्टली बाइनरी ट्री में जिसमें 40 आंतरिक नोड्स हैं और प्रत्येक के दो बच्चे हैं, लीफ (पत्ती) नोड्स की कुल संख्या कितनी होगी?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '39', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '40', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '41', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'By the binary tree leaf theorem, n_0 = n_2 + 1. Given n_2 = 40, the number of leaf nodes n_0 = 40 + 1 = 41.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 71,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Paper II Computer Science, Q.71 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-dsa-pyq-2',
                topicId: 'cs-topic-trees-traversals',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'What is the worst-case time complexity of the QuickSort algorithm when the chosen pivot consistently partitions the array into unbalanced subarrays of size 0 and n-1?',
                questionTextHi: 'क्विकसॉर्ट (QuickSort) एल्गोरिदम की सबसे खराब स्थिति (Worst-case) में समय जटिलता क्या होती है जब चुना गया पिवट सरणी को 0 और n-1 आकार के असंतुलित सब-एरे में विभाजित करता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'O(n log n)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'O(n^2)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'O(log n)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'When QuickSort encounters an already sorted or reverse-sorted array with an extreme pivot, the recurrence relation becomes T(n) = T(n-1) + O(n), which solves to O(n^2).',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (PGT Class 11-12 Computer Science)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 71,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Paper II Computer Science, Q.71 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 4: PROGRAMMING IN C++ & OBJECT-ORIENTED CONCEPTS
      // ----------------------------------------------------
      {
        id: 'cs-ch-cpp-oop',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 4,
        slug: 'cpp-programming-oop',
        titleEn: 'Object-Oriented Programming in C++',
        titleHi: 'C++ में ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP)',
        descriptionEn: 'Classes, Objects, Constructors/Destructors, Inheritance types, Virtual Functions, and Runtime Polymorphism.',
        descriptionHi: 'कंस्ट्रक्टर, इनहेरिटेंस, वर्चुअल फंक्शंस, तथा रनटाइम पॉलीमॉर्फिज्म के आधिकारिक BPSC प्रश्न।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'cs-topic-cpp-constructors-polymorphism',
            chapterId: 'cs-ch-cpp-oop',
            topicNumber: 1,
            slug: 'cpp-constructors-and-polymorphism',
            titleEn: 'C++ Constructors, Destructors & Virtual Functions',
            titleHi: 'C++ कंस्ट्रक्टर, डिस्ट्रक्टर एवं वर्चुअल फंक्शन',
            descriptionEn: 'Constructor rules (same name, no return type, invoked on object creation), virtual destructors, and pure virtual functions (abstract classes).',
            descriptionHi: 'कंस्ट्रक्टर के 3 स्वर्णिम नियम (TRE 1.0 Q.41), वर्चुअल फंक्शन तथा डायनामिक बाइंडिंग।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-cs-cpp',
              topicId: 'cs-topic-cpp-constructors-polymorphism',
              titleEn: 'C++ Constructors & Polymorphism for BPSC TRE',
              titleHi: 'BPSC TRE हेतु C++ कंस्ट्रक्टर एवं पॉलीमॉर्फिज्म',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State the 3 defining rules of C++ constructors tested in TRE 1.0 Q.41.',
                'Distinguish between compile-time polymorphism (function/operator overloading) and runtime polymorphism (virtual functions).',
                'Understand abstract classes and pure virtual functions (virtual void func() = 0;).',
                'Explain why destructors in base classes should be declared virtual.'
              ],
              introductionEn: 'Object-Oriented Programming in C++ forms an indispensable component of the BPSC TRE Class 11-12 Computer Science paper. The very first question in TRE 1.0 (Q.41) directly tested the fundamental properties of C++ constructors.',
              introductionHi: 'BPSC TRE 1.0 में कंप्यूटर साइंस का पहला प्रश्न (Q.41) सीधे C++ कंस्ट्रक्टर के नियमों पर था, जिसमें विकल्प (D) "उपर्युक्त में से एक से अधिक" सही उत्तर था। कंस्ट्रक्टर और वर्चुअल फंक्शंस पर हर परीक्षा में प्रश्न आते हैं।',
              conceptSections: [
                {
                  title: '1. C++ कंस्ट्रक्टर के 3 स्वर्णिम नियम',
                  contentMarkdownEn: 'एक कंस्ट्रक्टर एक विशेष सदस्य फलन (member function) होता है जिसकी 3 प्रमुख विशेषताएं हैं:\n1. **इसका नाम क्लास के नाम के बिल्कुल समान होता है** (It has the same name as the class).\n2. **इसका कोई रिटर्न टाइप नहीं होता**, यहाँ तक कि `void` भी नहीं (It has no return type, not even void).\n3. **ऑब्जेक्ट के निर्माण के समय यह स्वतः निष्पादित होता है** (It is invoked automatically whenever an object is instantiated).\n\n*BPSC TRE 1.0 Insight:* जब किसी प्रश्न में ये तीनों कथन दिए गए हों, तो उत्तर हमेशा विकल्प **(D) \'More than one of the above\'** होता है!'
                },
                {
                  title: '2. Polymorphism: Compile-Time vs. Run-Time',
                  contentMarkdownEn: '**1. Compile-Time (Early Binding / Static):**\n* Function Overloading (समान नाम, भिन्न पैरामीटर)।\n* Operator Overloading (ऑपरेटरों को नया अर्थ देना)।\n\n**2. Run-Time (Late Binding / Dynamic):**\n* **Virtual Functions:** बेस क्लास में `virtual` कीवर्ड द्वारा घोषित फलन।\n* **Pure Virtual Function:** `virtual void display() = 0;` (जिस क्लास में कम से कम एक pure virtual function हो, उसे **Abstract Class** कहते हैं; इसका ऑब्जेक्ट नहीं बन सकता)।',
                  codeSnippet: {
                    language: 'cpp',
                    code: 'class Base {\npublic:\n    virtual void show() { cout << "Base Class"; }\n};\nclass Derived : public Base {\npublic:\n    void show() override { cout << "Derived Class"; }\n};\n// Base* b = new Derived(); b->show(); prints "Derived Class" via Late Binding',
                    explanation: 'Virtual functions enable dynamic dispatch at runtime using a VTABLE.'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Pure Virtual Function',
                  definitionEn: 'A function declared in a base class with no definition and assigned to 0, enforcing derived classes to override it.',
                  definitionHi: 'वह वर्चुअल फलन जिसका बेस क्लास में कोई क्रियान्वयन नहीं होता (= 0) और जिसे डिराइव्ड क्लास में ओवरराइड करना अनिवार्य होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'कंस्ट्रक्टर के लक्षण सूत्र',
                  formulaOrRule: 'Same Name as Class + No Return Type (Not even void) + Auto-invoked upon creation',
                  explanationEn: 'All 3 conditions hold simultaneously, making option D correct in TRE 1.0 Q.41.',
                  explanationHi: 'तीनों शर्तें सत्य होने पर "More than one of the above" सही होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Which of the following is true about a constructor in C++? (A) It has the same name as the class (B) It does not return any value, not even void (C) It is invoked automatically when an object is created (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Statement A is true by definition of C++ constructors.\n2. Statement B is true (constructors have no return types).\n3. Statement C is true (instantiation automatically calls the constructor).\n4. Since A, B, and C are all true, Option (D) "More than one of the above" is the official answer.\n5. Official BPSC TRE 1.0 Key: Option (D).',
                  shortcutTrick: 'All 3 are canonical constructor rules -> Choose Option (D).'
                }
              ],
              practicalApplications: [
                'Resource management (RAII - Resource Acquisition Is Initialization) in memory-safe C++ application architecture.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking constructors can be declared virtual in C++.',
                  whyWrongEn: 'In C++, constructors CANNOT be virtual because an object\'s vtable pointer is only set up during construction. Destructors, however, CAN and should be virtual.',
                  correctWayEn: 'Constructors cannot be virtual; destructors can be virtual.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Rules of C++ constructors (TRE 1.0 Q.41).',
                  'Run-time polymorphism using virtual functions (TRE 3.0 Q.95).',
                  'Can constructors return void (No, not even void).'
                ],
                commonDistractorTraps: [
                  'Selecting Option A without reading B and C, missing "More than one of the above".'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.41 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.95 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Constructor: Same name as class, no return type (not even void), auto-called upon creation.',
                'Destructor: Preceded by tilde (~), takes no arguments, cannot be overloaded.',
                'Virtual function = Runtime polymorphism (late binding).',
                'Abstract class = Class with at least one pure virtual function (= 0).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cpp-1',
                  questionEn: 'Can a constructor in C++ be declared with a \'void\' return type?',
                  questionHi: 'क्या C++ में किसी कंस्ट्रक्टर को \'void\' रिटर्न टाइप के साथ घोषित किया जा सकता है?',
                  options: [
                    { id: 'A', textEn: 'Yes, if it returns nothing', isCorrect: false },
                    { id: 'B', textEn: 'No, constructors have no return type, not even void', isCorrect: true },
                    { id: 'C', textEn: 'Yes, but only in private access specifiers', isCorrect: false },
                    { id: 'D', textEn: 'Only in inline member functions', isCorrect: false }
                  ],
                  explanationEn: 'In C++, specifying any return type (even void) for a constructor is a syntax error; constructors do not return values.',
                  conceptTested: 'Constructor return type rule'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cpp-pyq-1',
                topicId: 'cs-topic-cpp-constructors-polymorphism',
                chapterId: 'cs-ch-cpp-oop',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which of the following is true about a constructor in C++?',
                questionTextHi: 'C++ में कंस्ट्रक्टर (Constructor) के संबंध में निम्नलिखित में से कौन-सा कथन सत्य है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'It has the same name as the class', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'It does not return any value, not even void', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'It is invoked automatically when an object is created', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: true },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'D',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'All three statements A, B, and C are canonical rules of constructors in C++:\n1. It shares the identical name of the class.\n2. It has no return type (not even void).\n3. It executes automatically upon object allocation.\nSince all three are true, Option D ("More than one of the above") is the official answer.',
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
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 5: DATABASE MANAGEMENT SYSTEMS & SQL
      // ----------------------------------------------------
      {
        id: 'cs-ch-dbms',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 5,
        slug: 'dbms-and-sql',
        titleEn: 'DBMS: Relational Model, SQL & Normalization',
        titleHi: 'DBMS: रिलेशनल मॉडल, SQL एवं सामान्यीकरण',
        descriptionEn: 'Primary/Foreign keys, Normalization 1NF to BCNF, SQL clauses (GROUP BY, HAVING), and ACID properties.',
        descriptionHi: 'प्राइमरी की के लक्षण, 1NF से BCNF तक सामान्यीकरण, SQL में GROUP BY व HAVING, तथा ACID गुण।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'cs-topic-normalization-acid',
            chapterId: 'cs-ch-dbms',
            topicNumber: 1,
            slug: 'normalization-and-acid-properties',
            titleEn: 'Relational Keys, SQL HAVING Clause & Normalization',
            titleHi: 'रिलेशनल कुंजियाँ, SQL HAVING क्लॉज एवं सामान्यीकरण',
            descriptionEn: 'Primary Key rules (unique, cannot be NULL), SQL WHERE vs HAVING, 1NF/2NF/3NF/BCNF dependencies, and ACID.',
            descriptionHi: 'प्राइमरी की में NULL का निषेध (TRE 1.0 Q.42), HAVING क्लॉज का उपयोग (TRE 3.0 Q.79), और 3NF/BCNF।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            tutorial: {
              id: 'tut-cs-dbms-norm',
              topicId: 'cs-topic-normalization-acid',
              titleEn: 'Relational Keys & SQL for BPSC TRE',
              titleHi: 'BPSC TRE हेतु रिलेशनल कीज एवं SQL की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State Entity Integrity constraint: Primary Key must be unique and CANNOT contain NULL (TRE 1.0 Q.42).',
                'Distinguish between WHERE (filters individual rows before grouping) and HAVING (filters aggregated groups after GROUP BY) in SQL (TRE 3.0 Q.79).',
                'Identify Normal Forms: 1NF (atomic), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (determinant is super key).',
                'Explain ACID transaction guarantees: Atomicity, Consistency, Isolation, Durability.'
              ],
              introductionEn: 'Database Management Systems and SQL constitute over 12 marks in the BPSC Class 11-12 Computer Science paper. Questions on Primary Key integrity, GROUP BY / HAVING syntax, and normal forms appear in every single edition of the examination.',
              introductionHi: 'BPSC TRE में DBMS और SQL सर्वाधिक अंक दिलाने वाले विषय हैं। TRE 1.0 में प्राइमरी की के लक्षणों पर प्रश्न पूछा गया था, और TRE 3.0 में SQL के HAVING क्लॉज पर।',
              conceptSections: [
                {
                  title: '1. रिलेशनल कुंजियों के नियम (Primary Key Integrity)',
                  contentMarkdownEn: '* **Primary Key (प्राथमिक कुंजी):** संबंध (तालिका) के प्रत्येक टुपल (रिकॉर्ड) को विशिष्ट रूप से पहचानने वाला एट्रिब्यूट।\n  * **एंटिटी इंटीग्रिटी नियम:** प्राइमरी की का मान **हमेशा अद्वितीय (Unique)** होना चाहिए और यह **कभी भी NULL नहीं हो सकता** (Must be unique and CANNOT contain NULL).\n* **Foreign Key (विदेशी कुंजी):** किसी अन्य तालिका की प्राइमरी की को संदर्भित करती है (Referential Integrity constraint)। यह NULL मान रख सकती है।'
                },
                {
                  title: '2. SQL: WHERE बनाम HAVING क्लॉज',
                  contentMarkdownEn: 'परीक्षक अक्सर WHERE और HAVING के अंतर पर प्रश्न पूछते हैं:\n* **WHERE क्लॉज:** पंक्तियों (individual rows) पर फ़िल्टर लागू करता है; यह `GROUP BY` से **पहले** निष्पादित होता है। यह aggregate functions (SUM, AVG, COUNT) के साथ सीधे उपयोग नहीं हो सकता।\n* **HAVING क्लॉज:** समूहों (aggregated groups) पर फ़िल्टर लागू करता है; यह `GROUP BY` के **बाद** निष्पादित होता है।\n\n```sql\n-- Aggregate function पर शर्त लगाने के लिए HAVING अनिवार्य है:\nSELECT Department, COUNT(*)\nFROM Employees\nGROUP BY Department\nHAVING COUNT(*) > 5; -- (WHERE COUNT(*) > 5 सिंटैक्स एरर होगा!)\n```'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Entity Integrity',
                  definitionEn: 'Constraint stating that in a base relation, no primary key attribute value can be null.',
                  definitionHi: 'नियम जिसके अनुसार किसी भी टेबल की प्राइमरी की का मान कभी भी NULL नहीं हो सकता।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Primary Key स्वर्णिम नियम',
                  formulaOrRule: 'Unique for each row + NOT NULL (Never accepts NULL)',
                  explanationEn: 'Directly tested in TRE 1.0 Q.42.',
                  explanationHi: 'प्राइमरी की हमेशा अद्वितीय होती है और कभी NULL नहीं हो सकती।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'A primary key in a relational database table: (A) Can contain NULL values (B) Must be unique for each record and cannot contain NULL (C) Can have duplicate entries (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. By the Entity Integrity rule, every primary key attribute must uniquely identify records and must not be NULL.\n2. Statement B is correct, while A and C are false.\n3. Official BPSC TRE 1.0 Key: Option (B).',
                  shortcutTrick: 'Primary Key = Unique + NOT NULL.'
                }
              ],
              practicalApplications: [
                'Relational schema design and data consistency enforcement in production SQL databases.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Using WHERE clause with aggregate functions like WHERE COUNT(*) > 5.',
                  whyWrongEn: 'WHERE filters rows before grouping; conditions on aggregates MUST use HAVING.',
                  correctWayEn: 'Use HAVING for conditions on aggregate functions.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Primary key properties (TRE 1.0 Q.42).',
                  'Filtering grouped records with HAVING (TRE 3.0 Q.79).',
                  'Which normal form eliminates transitive dependency (3NF).'
                ],
                commonDistractorTraps: [
                  'Selecting Option D (More than one of the above) when only statement B is true.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.42 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.79 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Primary Key: Must be unique, cannot be NULL.',
                'WHERE filters individual rows; HAVING filters grouped aggregates.',
                '1NF: Atomic values; 2NF: No partial dependency; 3NF: No transitive dependency.',
                'ACID: Atomicity (All or None), Consistency, Isolation, Durability.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-db-1',
                  questionEn: 'Which SQL clause is strictly used to specify conditions that filter groups created by the GROUP BY clause?',
                  questionHi: 'GROUP BY क्लॉज द्वारा बनाए गए समूहों पर शर्त लगाने के लिए किस SQL क्लॉज का उपयोग किया जाता है?',
                  options: [
                    { id: 'A', textEn: 'WHERE', isCorrect: false },
                    { id: 'B', textEn: 'HAVING', isCorrect: true },
                    { id: 'C', textEn: 'ORDER BY', isCorrect: false },
                    { id: 'D', textEn: 'FILTER', isCorrect: false }
                  ],
                  explanationEn: 'The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions on grouped data.',
                  conceptTested: 'HAVING vs WHERE'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-db-pyq-1',
                topicId: 'cs-topic-normalization-acid',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'A primary key in a relational database table:',
                questionTextHi: 'एक रिलेशनल डेटाबेस तालिका में प्राइमरी की (Primary Key):',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Can contain NULL values', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Must be unique for each record and cannot contain NULL', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Can have duplicate entries for different records', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'By the Entity Integrity constraint of the Relational Model, a primary key must uniquely identify each tuple in the relation and cannot have a null value for any tuple.',
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
                id: 'pq-db-pyq-2',
                topicId: 'cs-topic-normalization-acid',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In SQL, which clause is specifically used to apply filter conditions on aggregated groups formed by the GROUP BY statement?',
                questionTextHi: 'SQL में, GROUP BY स्टेटमेंट द्वारा बनाए गए एकत्रित समूहों (aggregated groups) पर फ़िल्टर शर्तें लागू करने के लिए विशेष रूप से किस क्लॉज का उपयोग किया जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'WHERE clause', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'HAVING clause', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'LIMIT clause', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The HAVING clause filters groups created by GROUP BY, allowing conditions on aggregate functions like COUNT(), SUM(), AVG(), which cannot be used in a WHERE clause.',
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
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 6: COMPUTER NETWORKS
      // ----------------------------------------------------
      {
        id: 'cs-ch-networks',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 6,
        slug: 'computer-networks-protocols',
        titleEn: 'Computer Networks & Internet Protocols',
        titleHi: 'कंप्यूटर नेटवर्क एवं इंटरनेट प्रोटोकॉल',
        descriptionEn: 'OSI 7 Layers, TCP/IP Model, IPv4 addressing (Classes A, B, C, D, E), CIDR Subnetting, TCP vs UDP, and DNS.',
        descriptionHi: 'OSI 7 परतें, IPv4 क्लासफुल एड्रेसिंग, TCP/UDP में अंतर, राउटर, तथा DNS प्रोटोकॉल।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'cs-topic-osi-ip-addressing',
            chapterId: 'cs-ch-networks',
            topicNumber: 1,
            slug: 'osi-layers-and-ipv4-classes',
            titleEn: 'OSI 7 Layer Functions & IPv4 Address Classes',
            titleHi: 'OSI 7 परतें एवं IPv4 एड्रेस क्लास',
            descriptionEn: 'Layer functions (Physical, Data Link, Network, Transport, Session, Presentation, Application) and IPv4 Class ranges (Class A: 1-126, Class B: 128-191, Class C: 192-223).',
            descriptionHi: 'OSI की 7 परतें (TRE 1.0 Q.52), तथा IPv4 की क्लास A, B, C, D (मल्टीकास्ट) की श्रेणियां (TRE 3.0 Q.88)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-cs-networks',
              topicId: 'cs-topic-osi-ip-addressing',
              titleEn: 'OSI Model & IP Addressing for BPSC TRE',
              titleHi: 'BPSC TRE हेतु OSI मॉडल एवं IP एड्रेसिंग की संपूर्ण गाइड',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State the exact order and responsibilities of the 7 layers of the OSI model.',
                'Identify data units at each layer: Bits (Physical), Frames (Data Link), Packets (Network), Segments (Transport).',
                'Classify IPv4 addresses into Classes A, B, C, D, E and recognize Class D is reserved for Multicast.',
                'Distinguish between Connection-oriented TCP (reliable) and Connectionless UDP (fast, best-effort).'
              ],
              introductionEn: 'Computer Networks questions in BPSC TRE consistently target the functional responsibilities of the 7 layers of the OSI model and IPv4 class boundaries. Examiners regularly ask about IP address classification and transport protocols.',
              introductionHi: 'BPSC TRE 11-12 में कंप्यूटर नेटवर्क से 8 से 10 प्रश्न आते हैं। OSI मॉडल की परतों के कार्य और IPv4 एड्रेस की क्लास (Class A to E) पर सीधे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. OSI 7 परतें एवं उनके कार्य',
                  contentMarkdownEn: 'नीचे से ऊपर की ओर 7 परतें:\n1. **Physical Layer (भौतिक परत):** कच्चे बिट्स (raw bits) का संचरण; केबल, हब, रिपीटर।\n2. **Data Link Layer (डेटा लिंक परत):** **फ्रेम्स (Frames)**, MAC एड्रेस, एरर डिटेक्शन (CRC); स्विच, ब्रिज।\n3. **Network Layer (नेटवर्क परत):** **पैकेट्स (Packets)**, लॉजिकल IP एड्रेसिंग, **राउटिंग (Routing)**; राउटर।\n4. **Transport Layer (ट्रांसपोर्ट परत):** **सेगमेंट्स (Segments)**, एंड-टू-एंड डिलीवरी, फ्लो और एरर कंट्रोल; **TCP एवं UDP**।\n5. **Session Layer (सत्र परत):** संचार सत्रों का निर्माण व समाप्ति।\n6. **Presentation Layer (प्रस्तुति परत):** डेटा एन्क्रिप्शन, संपीड़न (Compression), अनुवाद (ASCII/EBCDIC)।\n7. **Application Layer (एप्लिकेशन परत):** उपयोगकर्ता इंटरफेस; HTTP, FTP, SMTP, DNS।'
                },
                {
                  title: '2. IPv4 एड्रेस क्लास (BPSC TRE 3.0 Q.88)',
                  contentMarkdownEn: 'IPv4 32-बिट का एड्रेस होता है जिसे 4 ऑक्टेट में विभाजित किया जाता है:',
                  tableData: {
                    headers: ['क्लास', 'प्रथम ऑक्टेट रेंज', 'डिफ़ॉल्ट सबनेट मास्क', 'उपयोग / उद्देश्य'],
                    rows: [
                      ['Class A', '1 to 126 (0 reserved, 127 loopback)', '255.0.0.0 (/8)', 'विशाल नेटवर्क (Very large networks)'],
                      ['Class B', '128 to 191', '255.255.0.0 (/16)', 'मध्यम आकार नेटवर्क (Medium networks)'],
                      ['Class C', '192 to 223', '255.255.255.0 (/24)', 'छोटे लोकल नेटवर्क (Small LANs)'],
                      ['Class D', '224 to 239', 'कोई सबनेट नहीं', 'मल्टीकास्टिंग (Multicasting) हेतु आरक्षित'],
                      ['Class E', '240 to 255', 'कोई सबनेट नहीं', 'प्रायोगिक एवं अनुसंधान (Research/Experimental)']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Class D IP Address',
                  definitionEn: 'IPv4 address range 224.0.0.0 to 239.255.255.255 reserved strictly for multicast group transmissions.',
                  definitionHi: '224 से 239 की श्रेणी का IP एड्रेस जो मल्टीकास्टिंग प्रसारण के लिए आरक्षित है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'क्लास D पहचान सूत्र',
                  formulaOrRule: 'प्रथम ऑक्टेट 224 से 239 = Class D (Multicast)',
                  explanationEn: 'Directly tested in TRE 3.0 Q.88.',
                  explanationHi: '224-239 की रेंज हमेशा क्लास D (मल्टीकास्ट) होती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'Which class of IPv4 addresses is reserved for multicasting? (A) Class B (B) Class C (C) Class D (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Fact: IPv4 Class D addresses (224.0.0.0 to 239.255.255.255) are designated exclusively for multicasting.\n2. Official BPSC TRE 3.0 Key: Option (C) Class D.',
                  shortcutTrick: 'Multicast = Class D (224 to 239).'
                }
              ],
              practicalApplications: [
                'Subnet mask design and enterprise firewall routing configuration.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Class E is used for multicasting.',
                  whyWrongEn: 'Class D is for Multicasting; Class E is reserved for Experimental/Future research.',
                  correctWayEn: 'Class D = Multicast; Class E = Experimental.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which class is for multicasting (Class D - TRE 3.0 Q.88).',
                  'Which layer handles routing (Network Layer - TRE 1.0 Q.52).',
                  'Data unit at Transport layer (Segment).'
                ],
                commonDistractorTraps: [
                  'Confusing 127.0.0.1 (Loopback) with Class A usable host addresses.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.88 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.52 Series A)'
                ]
              },
              quickRevisionPoints: [
                'OSI Layers: Physical (Bits), Data Link (Frames), Network (Packets), Transport (Segments).',
                'Class A: 1-126; Class B: 128-191; Class C: 192-223.',
                'Class D (224-239): Multicasting.',
                'Class E (240-255): Research & Experimental.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-net-1',
                  questionEn: 'Which layer of the OSI model is directly responsible for routing packets across intermediate networks from source to destination?',
                  questionHi: 'OSI मॉडल की कौन-सी परत स्रोत से गंतव्य तक पैकेटों के राउटिंग के लिए सीधे जिम्मेदार है?',
                  options: [
                    { id: 'A', textEn: 'Data Link Layer', isCorrect: false },
                    { id: 'B', textEn: 'Network Layer', isCorrect: true },
                    { id: 'C', textEn: 'Transport Layer', isCorrect: false },
                    { id: 'D', textEn: 'Session Layer', isCorrect: false }
                  ],
                  explanationEn: 'The Network layer handles logical addressing (IP addresses) and path determination (routing) across interconnected networks.',
                  conceptTested: 'Network layer routing'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-net-pyq-1',
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
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 7: COMPUTATIONAL THINKING & PYTHON PROGRAMMING (CLASS 11-12)
      // -----------------------------------------------------------------------
      {
        id: 'cs-ch-python-prog',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 7,
        slug: 'python-data-structures-slicing',
        titleEn: 'Python Programming: Slicing, Data Types & Functions',
        titleHi: 'पायथन प्रोग्रामिंग: स्लाइसिंग, डेटा प्रकार एवं फंक्शन्स',
        descriptionEn: 'Mutable vs Immutable types (List, Dict vs Tuple, String), String/List slicing [start:stop:step], Dictionary hashing, and Built-in functions.',
        descriptionHi: 'परिवर्तनीय (List, Dictionary) vs अपरिवर्तनीय (Tuple, String, int) डेटा प्रकार; स्ट्रिंग स्लाइसिंग; पायथन फंक्शन्स एवं स्कोप।',
        totalPracticeQuestions: 18,
        totalEstimatedMinutes: 40,
        topics: [
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
            tutorial: {
              id: 'tut-cs-python',
              topicId: 'cs-topic-python-datastructures',
              titleEn: 'Python Programming for BPSC TRE Class 11–12',
              titleHi: 'BPSC TRE कक्षा 11-12 हेतु पायथन प्रोग्रामिंग एवं डेटा प्रकार',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Python memory model: Mutable (in-place modification) vs Immutable (creates new object).',
                'Identify all Immutable types: int, float, complex, string, tuple, frozenset.',
                'Master slice notation: sequence[start : stop : step] where stop is non-inclusive.',
                'Understand Dictionary keys restriction: Keys must be immutable and hashable (e.g. Tuples yes, Lists no).'
              ],
              introductionEn: 'Python is a core pillar of the CBSE/NCERT Class 11–12 Computer Science syllabus adopted by BPSC TRE. 10 to 12 questions in the 80-mark Subject paper directly evaluate Python data type mutability, slicing arithmetic, and expression evaluation.',
              introductionHi: 'BPSC TRE कंप्यूटर साइंस (कक्षा 11-12) में NCERT पाठ्यक्रम के तहत पायथन प्रोग्रामिंग से 10-12 प्रश्न पूछे जाते हैं। विशेष रूप से म्यूटैबिलिटी (Mutable vs Immutable), स्ट्रिंग स्लाइसिंग, तथा डिक्शनरी की बनावट मुख्य केंद्र होते हैं।',
              conceptSections: [
                {
                  title: '1. Mutability vs. Immutability in Python',
                  contentMarkdownEn: 'In Python, every variable is a reference to an object in memory:\n* **Immutable Data Types (Cannot be modified after creation):**\n  * `int`, `float`, `complex`, `bool`\n  * `str` (String)\n  * `tuple` (e.g., `(1, 2, 3)`)\n  * `frozenset`\n  * *Note:* Any attempt to modify an immutable object raises a `TypeError` (e.g., `t = (1, 2); t[0] = 99` $\\rightarrow$ `TypeError: \'tuple\' object does not support item assignment`).\n* **Mutable Data Types (Can be modified in place):**\n  * `list` (e.g., `[1, 2, 3]`)\n  * `dict` (e.g., `{\'a\': 1}`)\n  * `set` (e.g., `{1, 2, 3}`)',
                  tableData: {
                    headers: ['Data Type', 'Mutable / Immutable', 'Can be Dict Key?', 'BPSC TRE Frequency'],
                    rows: [
                      ['Tuple ()', 'IMMUTABLE', 'YES (Hashable)', 'Highest (TRE 1.0 Q.64)'],
                      ['String ""', 'IMMUTABLE', 'YES (Hashable)', 'Very High'],
                      ['List []', 'MUTABLE', 'NO (Unhashable)', 'Very High'],
                      ['Dictionary {}', 'MUTABLE', 'NO', 'High'],
                      ['Set {}', 'MUTABLE', 'NO', 'Moderate']
                    ]
                  }
                },
                {
                  title: '2. Sequence Slicing Notation: `seq[start:stop:step]`',
                  contentMarkdownEn: 'Slicing extracts a subsequence without modifying the original object:\n* `start`: Initial index (inclusive, defaults to `0`).\n* `stop`: Final index (**non-inclusive / exclusive**, defaults to `len(seq)`).\n* `step`: Index increment (defaults to `1`).\n\n**Example:**\n```python\ns = "BPSC-TRE-4"\n# Indices: 0:B, 1:P, 2:S, 3:C, 4:-, 5:T, 6:R, 7:E, 8:-, 9:4\nprint(s[5:8])  # Extracts indices 5, 6, 7 -> "TRE"\n```\n* `s[::-1]` reverses the string.\n* `s[:4]` extracts characters from index 0 to 3 $\\rightarrow$ `"BPSC"`.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Immutable Object',
                  definitionEn: 'An object with a fixed value that cannot be altered after instantiation. Modifications create a new object in memory.',
                  definitionHi: 'वह ऑब्जेक्ट जिसका मान निर्माण के बाद बदला नहीं जा सकता। परिवर्तन करने पर नया ऑब्जेक्ट बनता है।'
                },
                {
                  term: 'Hashable Object',
                  definitionEn: 'An object having a hash value that never changes during its lifetime, allowing it to serve as a dictionary key or set element.',
                  definitionHi: 'जिसका हैश मान आजीवन स्थिर रहे, जैसे Tuple, int, str। केवल यही डिक्शनरी की Key बन सकते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Slice Length Formula',
                  formulaOrRule: 'Length = max(0, stop - start) (when step = 1)',
                  explanationEn: 'The character at the "stop" index is never included in the slice.',
                  explanationHi: 'स्टॉप इंडेक्स वाला कैरेक्टर कभी भी स्लाइस में शामिल नहीं होता।'
                },
                {
                  title: 'Dictionary Key Golden Rule',
                  formulaOrRule: 'Dict Key = Must be Immutable (Tuple YES, List NO)',
                  explanationEn: 'Lists cannot be dictionary keys because they are unhashable.',
                  explanationHi: 'डिक्शनरी की कुंजी केवल अपरिवर्तनीय डेटा (जैसे Tuple, String, Int) ही हो सकती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Original Question Analysis',
                  problemEn: 'What will be the output of the following Python code?\n```python\ns = "BPSC-TRE-4"\nprint(s[5:8])\n```\n(A) TRE (B) RE- (C) BPSC (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Write down 0-based indexing of "BPSC-TRE-4":\n   Index 0 = \'B\'\n   Index 1 = \'P\'\n   Index 2 = \'S\'\n   Index 3 = \'C\'\n   Index 4 = \'-\'\n   Index 5 = \'T\'\n   Index 6 = \'R\'\n   Index 7 = \'E\'\n   Index 8 = \'-\'\n   Index 9 = \'4\'\n2. The slice is `s[5:8]`, which includes indices 5, 6, and 7 (stopping strictly before index 8).\n3. Character at 5 = \'T\', 6 = \'R\', 7 = \'E\'.\n4. Output string is "TRE".\n5. Official BPSC Key: Option (A) TRE.',
                  shortcutTrick: 'stop index 8 means include up to index 7: chars at 5, 6, 7 are T, R, E.'
                }
              ],
              practicalApplications: [
                'Data parsing, machine learning preprocessing, and algorithmic programming.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Tuples can be modified if they contain numbers.',
                  whyWrongEn: 'Tuples are strictly immutable regardless of elements.',
                  correctWayEn: 'Tuples cannot be altered. Use a List if in-place modification is required.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Tuple is immutable (TRE 1.0 Q.64).',
                  'String slicing s[5:8] non-inclusive stop (TRE 3.0 Q.82).',
                  'Dictionary key hashability (Lists cannot be keys).'
                ],
                commonDistractorTraps: [
                  'Including the character at the stop index (e.g. thinking s[5:8] includes index 8).'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.64 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.82 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Immutable: int, float, str, tuple, frozenset.',
                'Mutable: list, dict, set.',
                'Slice s[start:stop:step]: stop is non-inclusive.',
                's[::-1] reverses a sequence.',
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
                  explanationEn: 'Tuples are immutable; assigning to an indexed element `my_tuple[0] = 5` raises `TypeError: \'tuple\' object does not support item assignment`.',
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
                difficulty: 'MODERATE',
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
          }
        ]
      }
    ]
  }
];
