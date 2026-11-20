import { LMSSubject } from '@/types/bpscLms';

export const BPSC_COMPUTER_SCIENCE_SUBJECTS: LMSSubject[] = [
  // ==========================================
  // SUBJECT 1: COMPUTER SCIENCE (CLASS 11–12)
  // ==========================================
  {
    key: 'COMPUTER_SCIENCE_11_12',
    sectionKey: 'PART_3_SUBJECT_CORE',
    displayNameEn: 'Computer Science (Class 11 & 12)',
    displayNameHi: 'कंप्यूटर विज्ञान (कक्षा 11 एवं 12)',
    iconName: 'Cpu',
    descriptionEn: 'Complete 80-mark curriculum for BPSC TRE 4.0 PGT Computer Science: Digital Logic, Architecture, OS, DSA, OOP, DBMS/SQL, Networks, Software Eng, TOC, and Cyber Security.',
    descriptionHi: 'BPSC TRE 4.0 11-12वीं कंप्यूटर शिक्षक हेतु संपूर्ण 80 अंकों का विस्तृत पाठ्यक्रम।',
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
        descriptionEn: 'Binary/Octal/Hex conversions, 1\'s/2\'s complement, De Morgan\'s laws, K-Maps, Logic Gates, and Combinational circuits.',
        descriptionHi: 'संख्या रूपांतरण, 2\'s पूरक, डि मॉर्गन के नियम, K-मैप, तथा संयोजन लॉजिक परिपथ।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 55,
        topics: [
          {
            id: 'cs-topic-number-systems-twos-comp',
            chapterId: 'cs-ch-digital-logic',
            topicNumber: 1,
            slug: 'number-systems-twos-complement',
            titleEn: 'Number Conversions & 2\'s Complement Arithmetic',
            titleHi: 'संख्या पद्धति रूपांतरण एवं 2\'s पूरक अंकगणित',
            descriptionEn: 'Binary, Octal, Hexadecimal conversions, range of signed numbers (-(2^(n-1)) to 2^(n-1)-1), and overflow detection.',
            descriptionHi: 'बाइनरी-दशमलव-हेक्साडेसिमल रूपांतरण, 2\'s पूरक की सीमा, और ओवरफ्लो की शर्तें।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            tutorial: {
              id: 'tut-cs-twos-comp',
              topicId: 'cs-topic-number-systems-twos-comp',
              titleEn: 'Number Systems & 2\'s Complement Representation for BPSC TRE',
              titleHi: 'BPSC TRE के लिए संख्या पद्धतियां एवं 2\'s पूरक की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Convert fluently between Binary, Octal, Decimal, and Hexadecimal representations.',
                'Compute 1\'s complement and 2\'s complement of binary numbers with shortcut inspection.',
                'Determine the range of signed integers representable using n bits in 2\'s complement: -2^(n-1) to 2^(n-1) - 1.',
                'Detect arithmetic overflow when adding signed 2\'s complement numbers.'
              ],
              introductionEn: 'In BPSC TRE Class 11-12 Computer Science papers, questions on 2\'s complement representation and number base conversions appear in virtually every examination. Examiners frequently test the boundary values of n-bit signed integers and shortcut conversion rules.',
              introductionHi: 'BPSC TRE 11-12 कंप्यूटर शिक्षक परीक्षा में 2\'s पूरक और संख्या रूपांतरण से 2 से 3 प्रश्न निश्चित पूछे जाते हैं। आयोग n-बिट हस्ताक्षरित (signed) संख्याओं की सीमा और हेक्साडेसिमल रूपांतरण पर विशेष बल देता है।',
              conceptSections: [
                {
                  title: '1. Number Base Conversions & Grouping Method',
                  contentMarkdownEn: 'Converting between base 2, base 8, and base 16 is simplified using the bit-grouping shortcut:\n\n* **Octal (Base 8) to Binary:** Group each octal digit into **3 binary bits** ($2^3 = 8$).\n  * $(725)_8 = (111 \\, 010 \\, 101)_2$.\n* **Hexadecimal (Base 16) to Binary:** Group each hex digit into **4 binary bits** ($2^4 = 16$).\n  * $(2F)_H = (0010 \\, 1111)_2 = (101111)_2$.\n  * $(A)_{16} = 10, \\, (B)_{16} = 11, \\, (C)_{16} = 12, \\, (D)_{16} = 13, \\, (E)_{16} = 14, \\, (F)_{16} = 15$.\n* **Binary to Hexadecimal:** Group bits into sets of 4 starting from the **radix point** (from right-to-left for integer part, and left-to-right for fractional part).'
                },
                {
                  title: '2. 1\'s Complement & 2\'s Complement Representation',
                  contentMarkdownEn: 'Digital systems utilize 2\'s complement for arithmetic because it allows addition and subtraction to use identical hardware without a separate subtraction circuit, and it eliminates the problem of **negative zero (+0 and -0)**.\n\n* **1\'s Complement:** Invert all bits (replace 0 with 1, and 1 with 0).\n* **2\'s Complement Formula:** $\\mathbf{2\'s \\text{ complement} = 1\'s \\text{ complement} + 1}$.\n\n**Fastest Inspection Trick for 2\'s Complement:**\nScan the binary number from **right to left (LSB to MSB)**: Keep all bits identical up to and including the first \'1\'. Invert every bit after that first \'1\'!',
                  codeSnippet: {
                    language: 'text',
                    code: 'Example: Find 2\'s complement of 101100\nStep 1: Scan from right: 0, 0, 1 (keep as 100)\nStep 2: Invert all remaining bits to the left: 101 becomes 010\nResult: 010100\nVerification: 1\'s complement = 010011 -> Add 1 = 010100. (Matches!)',
                    explanation: 'The right-to-left scan produces the 2\'s complement in under 3 seconds.'
                  }
                },
                {
                  title: '3. Range of Signed Integers with n Bits',
                  contentMarkdownEn: 'The range of representation for an $n$-bit register depends on the encoding scheme:',
                  tableData: {
                    headers: ['Representation Scheme', 'Range Formula (for n bits)', 'For n = 8 bits', 'Zero Representations'],
                    rows: [
                      ['Unsigned Integer', '$0$ to $2^n - 1$', '$0$ to $255$', 'Single zero ($00000000$)'],
                      ['Signed Magnitude', '$-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$', '$-127$ to $+127$', 'Two zeros: $+0$ and $-0$'],
                      ['1\'s Complement', '$-(2^{n-1} - 1)$ to $+(2^{n-1} - 1)$', '$-127$ to $+127$', 'Two zeros: $+0$ and $-0$'],
                      ['2\'s Complement (Standard)', '$\\mathbf{-(2^{n-1})}$ to $\\mathbf{+(2^{n-1} - 1)}$', '$\\mathbf{-128}$ to $\\mathbf{+127}$', 'Unique zero ($00000000$)']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Classical Trap: Range of 8-bit 2\'s Complement',
                    textEn: 'For 8 bits, 2\'s complement can represent -128, but CANNOT represent +128! The positive ceiling is +127. Why? Because 0 is included in the positive half (0 to 127 = 128 non-negative values).',
                    textHi: '8-बिट 2\'s पूरक में -128 से +127 तक की संख्याएं आती हैं। इसमें +128 शामिल नहीं हो सकता!'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: '2\'s Complement',
                  definitionEn: 'A mathematical operation on binary numbers used to represent negative signed integers where negative x is computed as (2^n - x).',
                  definitionHi: 'बाइनरी संख्याओं का वह रूप जिसमें ऋणात्मक पूर्णांकों को दर्शाने के लिए 1\'s पूरक में 1 जोड़ा जाता है।'
                },
                {
                  term: 'Arithmetic Overflow',
                  definitionEn: 'A condition that occurs when the result of an arithmetic operation exceeds the representable range of the destination register, detectable when adding two numbers of the same sign produces a result of the opposite sign.',
                  definitionHi: 'जब दो समान चिह्न वाली संख्याओं के योग से विपरीत चिह्न का परिणाम प्राप्त हो।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Range of n-bit 2\'s Complement',
                  formulaOrRule: 'Range = [ -2^(n-1) , + (2^(n-1) - 1) ]',
                  explanationEn: 'For n=16 bits: -32768 to +32767.',
                  explanationHi: '16 बिट के लिए: -32768 से +32767।'
                },
                {
                  title: 'Overflow Detection Rule',
                  formulaOrRule: 'Overflow = Carry_in XOR Carry_out of MSB',
                  explanationEn: 'Overflow occurs if and only if the carry into the sign bit is different from the carry out of the sign bit.',
                  explanationHi: 'यदि MSB में आने वाला कैरी और उससे निकलने वाला कैरी भिन्न हो तो ओवरफ्लो होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Decimal value of 2\'s complement binary',
                  problemEn: 'What is the decimal equivalent of the 8-bit 2\'s complement number (1111 0000)_2?',
                  stepByStepSolutionEn: '1. Observe the MSB (sign bit): It is \'1\', indicating a negative number.\n2. To find its magnitude, take its 2\'s complement:\n   - 1\'s complement of 1111 0000 = 0000 1111\n   - Add 1: 0000 1111 + 1 = 0001 0000 (which is 16 in decimal).\n3. Apply the negative sign: -16.\n4. Therefore, (1111 0000)_2 represents -16 in decimal.',
                  shortcutTrick: 'MSB has weight -2^(n-1) = -128. Value = -128 + 64 + 32 + 16 = -128 + 112 = -16.'
                }
              ],
              practicalApplications: [
                'ALU hardware design in CPUs for integer addition and subtraction without dedicated sub-circuits.',
                'Understanding fixed-width integer types (int8_t, int16_t, int32_t) in C++ and Java.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing 2\'s complement has two representations for zero (+0 and -0).',
                  whyWrongEn: 'Only 1\'s complement and signed magnitude have two zeros. 2\'s complement has exactly ONE zero (00000000), allowing an extra negative number (-2^(n-1)).',
                  correctWayEn: '2\'s complement uniquely represents zero without ambiguity.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Range of n-bit signed integers in 2\'s complement.',
                  'Hexadecimal to binary and octal direct conversions.',
                  'Decimal value of a given 2\'s complement byte.',
                  'Reason why 2\'s complement is preferred in modern ALUs.'
                ],
                commonDistractorTraps: [
                  'Confusing the range of 1\'s complement (-(2^(n-1)-1) to +(2^(n-1)-1)) with 2\'s complement.',
                  'Forgetting to invert bits when calculating the value of a negative 2\'s complement string.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 Computer Science Paper Q84',
                  'BPSC TRE 2.0 CS Paper Q78'
                ]
              },
              quickRevisionPoints: [
                'Hexadecimal digit = 4 binary bits; Octal digit = 3 binary bits.',
                '2\'s complement = 1\'s complement + 1.',
                'Shortcut: Scan right to left, keep first 1, flip all remaining bits to the left.',
                '8-bit 2\'s complement range: -128 to +127.',
                'Only 2\'s complement eliminates double-zero representation.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-logic-1',
                  questionEn: 'What is the maximum positive and minimum negative decimal integer representable in an 8-bit register using 2\'s complement format?',
                  questionHi: '2\'s पूरक प्रारूप में 8-बिट रजिस्टर का उपयोग करके अधिकतम धनात्मक और न्यूनतम ऋणात्मक दशमलव पूर्णांक क्या दर्शाया जा सकता है?',
                  options: [
                    { id: 'A', textEn: '-127 to +127', isCorrect: false },
                    { id: 'B', textEn: '-128 to +127', isCorrect: true },
                    { id: 'C', textEn: '-128 to +128', isCorrect: false },
                    { id: 'D', textEn: '-256 to +255', isCorrect: false }
                  ],
                  explanationEn: 'For n=8 bits: Minimum negative = -2^(8-1) = -2^7 = -128; Maximum positive = 2^(8-1) - 1 = 128 - 1 = +127.',
                  conceptTested: 'Range of 2\'s complement numbers'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-twos-1',
                topicId: 'cs-topic-number-systems-twos-comp',
                chapterId: 'cs-ch-digital-logic',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In an 8-bit register, what is the 2\'s complement representation of the decimal number -35?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '11011101', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: '11011100', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '10100011', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'MODERATE',
                practiceMode: 'BPSC_EXAM',
                explanationEn: '+35 in 8-bit binary is 0010 0011. Its 1\'s complement is 1101 1100. Adding 1 gives 1101 1101.',
                treVersion: 'TRE_4_0',
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
        slug: 'operating-systems-process-scheduling',
        titleEn: 'Operating Systems: Process Scheduling, Deadlocks & Memory',
        titleHi: 'ऑपरेटिंग सिस्टम: प्रोसेस शेड्यूलिंग, डेडलॉक एवं मेमोरी प्रबंधन',
        descriptionEn: 'Process states, PCB, CPU scheduling algorithms (FCFS, SJF, Round Robin), Banker\'s Deadlock Avoidance, Paging and LRU.',
        descriptionHi: 'प्रोसेस स्टेट्स, CPU शेड्यूलिंग, बैंकर एल्गोरिथम (डेडलॉक), पेजिंग तथा LRU पेज रिप्लेसमेंट।',
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 60,
        topics: [
          {
            id: 'cs-topic-cpu-scheduling-deadlocks',
            chapterId: 'cs-ch-os',
            topicNumber: 1,
            slug: 'cpu-scheduling-and-deadlocks',
            titleEn: 'CPU Scheduling Algorithms & Deadlock Coffman Conditions',
            titleHi: 'CPU शेड्यूलिंग एल्गोरिदम एवं डेडलॉक की शर्तें',
            descriptionEn: 'Gantt chart calculations for Turnaround Time & Waiting Time (FCFS, Non-preemptive/Preemptive SJF, Round Robin) and 4 Coffman conditions.',
            descriptionHi: 'टर्नअराउंड व वेटिंग टाइम की गणना, SJF, राउंड रॉबिन, तथा डेडलॉक की 4 अनिवार्य शर्तें।',
            estimatedMinutes: 30,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            tutorial: {
              id: 'tut-cs-os-scheduling',
              topicId: 'cs-topic-cpu-scheduling-deadlocks',
              titleEn: 'Mastering CPU Scheduling & Deadlocks for BPSC TRE',
              titleHi: 'BPSC TRE हेतु CPU शेड्यूलिंग एवं डेडलॉक की संपूर्ण गाइड',
              readingTimeMinutes: 15,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Compute Turnaround Time (TAT) and Waiting Time (WT) given Arrival Time (AT) and Burst Time (BT).',
                'Demonstrate how Shortest Job First (SJF) is theoretically optimal for minimizing average waiting time.',
                'Understand the Convoy Effect in FCFS and Starvation in Priority/SJF.',
                'Memorize the 4 Coffman conditions required simultaneously for a deadlock to exist.'
              ],
              introductionEn: 'Operating Systems is a core pillar of the BPSC TRE Class 11-12 syllabus. Process scheduling algorithms and the 4 Coffman conditions for deadlocks account for substantial marks in every official test.',
              introductionHi: 'BPSC TRE 11-12 में ऑपरेटिंग सिस्टम से 8 से 10 प्रश्न पूछे जाते हैं। इनमें CPU शेड्यूलिंग (FCFS, SJF, Round Robin) के संख्यात्मक प्रश्न तथा डेडलॉक की शर्तें सर्वाधिक महत्वपूर्ण हैं।',
              conceptSections: [
                {
                  title: '1. CPU Scheduling Metrics & Formulas',
                  contentMarkdownEn: 'For every process $P_i$:\n* **Turnaround Time (TAT):** $\\mathbf{TAT = \\text{Completion Time (CT)} - \\text{Arrival Time (AT)}}$.\n* **Waiting Time (WT):** $\\mathbf{WT = \\text{Turnaround Time (TAT)} - \\text{Burst Time (BT)}}$.\n* **Response Time (RT):** Time from arrival to first execution by CPU (identical to WT in non-preemptive systems).\n\n**Key Algorithm Characteristics:**\n* **FCFS (First-Come First-Served):** Non-preemptive. Suffers from **Convoy Effect** (short processes wait behind a long burst process).\n* **SJF (Shortest Job First):** Minimizes average waiting time (provably optimal for non-preemptive), but can lead to **Starvation** for long jobs.\n* **SRTF (Shortest Remaining Time First):** Preemptive version of SJF.\n* **Round Robin (RR):** Preemptive based on a fixed **Time Quantum**. If quantum is too large, it degenerates to FCFS; if too small, high context-switch overhead occurs.'
                },
                {
                  title: '2. The 4 Coffman Conditions for Deadlock',
                  contentMarkdownEn: 'A deadlock situation can occur **if and only if** all four conditions hold simultaneously in a system:',
                  tableData: {
                    headers: ['Coffman Condition', 'Formal Meaning', 'Prevention Strategy'],
                    rows: [
                      ['1. Mutual Exclusion', 'At least one resource must be held in a non-shareable mode (only one process at a time).', 'Make resources shareable (e.g. read-only files); not possible for printers.'],
                      ['2. Hold and Wait', 'A process must be holding at least one resource and requesting additional resources currently held by others.', 'Require processes to request all resources at once before execution.'],
                      ['3. No Preemption', 'Resources cannot be preempted; a resource can only be released voluntarily by the process after task completion.', 'If a process holding resources is denied an additional request, preempt its current resources.'],
                      ['4. Circular Wait', 'A closed loop of processes exists: $P_0$ waits for $P_1$, $P_1$ waits for $P_2$, ..., $P_n$ waits for $P_0$.', 'Impose a strict global linear ordering on all resource types ($F(R_i) < F(R_j)$).']
                    ]
                  },
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC Gold Fact: Banker\'s Algorithm',
                    textEn: 'Banker\'s Algorithm is used for Deadlock AVOIDANCE (not prevention or detection). It tests for a "Safe State" where at least one execution sequence exists that allows all processes to finish.',
                    textHi: 'बैंकर का एल्गोरिदम (Banker\'s Algorithm) डेडलॉक से बचाव (Avoidance) के लिए उपयोग होता है, जो सुरक्षित अवस्था (Safe State) की जांच करता है।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Convoy Effect',
                  definitionEn: 'A phenomenon in FCFS scheduling where smaller processes queue behind a CPU-intensive heavy process, severely degrading device and CPU utilization.',
                  definitionHi: 'FCFS शेड्यूलिंग में जब छोटे प्रोसेस एक बड़े प्रोसेस के पीछे कतार में फंस जाते हैं।'
                },
                {
                  term: 'Safe State',
                  definitionEn: 'A state in which the operating system can allocate resources to each process in some order without triggering a deadlock.',
                  definitionHi: 'ऐसी स्थिति जिसमें सिस्टम बिना डेडलॉक के सभी प्रक्रियाओं को उनके अधिकतम आवश्यक संसाधन दे सकता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Turnaround Time Formula',
                  formulaOrRule: 'TAT = Completion Time - Arrival Time',
                  explanationEn: 'The total time spent by a process in the system from arrival to completion.',
                  explanationHi: 'प्रक्रिया के आगमन से लेकर पूर्ण होने तक का कुल समय।'
                },
                {
                  title: 'Waiting Time Formula',
                  formulaOrRule: 'WT = Turnaround Time - Burst Time',
                  explanationEn: 'The total time a process spends waiting in the ready queue.',
                  explanationHi: 'प्रक्रिया द्वारा रेडी क्यू में प्रतीक्षा किया गया समय।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Problem: Average Waiting Time in FCFS',
                  problemEn: 'Three processes P1 (Burst 24ms), P2 (Burst 3ms), P3 (Burst 3ms) arrive at time t=0. What is the average waiting time under FCFS?',
                  stepByStepSolutionEn: '1. Order of execution: P1 (0 to 24), P2 (24 to 27), P3 (27 to 30).\n2. Waiting Times:\n   - WT(P1) = 0 ms\n   - WT(P2) = 24 ms\n   - WT(P3) = 27 ms\n3. Total Waiting Time = 0 + 24 + 27 = 51 ms.\n4. Average Waiting Time = 51 / 3 = 17 ms.',
                  shortcutTrick: 'If arrival is 0, each process waits for the sum of previous burst times: (0 + 24 + 27)/3 = 17.'
                }
              ],
              practicalApplications: [
                'Tuning kernel parameters in Linux systems for real-time responsiveness vs server throughput.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing Deadlock Prevention with Deadlock Avoidance.',
                  whyWrongEn: 'Deadlock Prevention restricts how requests can be made by breaking at least 1 of the 4 Coffman conditions; Deadlock Avoidance dynamically analyzes each request using Banker\'s algorithm before granting.',
                  correctWayEn: 'Prevention = static constraints; Avoidance = dynamic safe state check.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which CPU scheduling algorithm gives minimum average waiting time (SJF).',
                  'The 4 Coffman conditions (Mutual exclusion, Hold and wait, No preemption, Circular wait).',
                  'Purpose of Banker\'s Algorithm (Deadlock avoidance).',
                  'Time Quantum impact in Round Robin.'
                ],
                commonDistractorTraps: [
                  'Including "Preemption" as a condition for deadlock (it is "NO Preemption").'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 CS Paper Q92',
                  'BPSC TRE 2.0 CS Paper Q88'
                ]
              },
              quickRevisionPoints: [
                'TAT = CT - AT; WT = TAT - BT.',
                'SJF yields the minimum average waiting time.',
                'FCFS suffers from Convoy Effect.',
                '4 Deadlock Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
                'Banker\'s Algorithm = Deadlock Avoidance via Safe State.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-os-1',
                  questionEn: 'Which of the following conditions is NOT one of the four necessary Coffman conditions for a deadlock to occur?',
                  questionHi: 'निम्नलिखित में से कौन सी स्थिति डेडलॉक होने के लिए आवश्यक चार शर्तों में से नहीं है?',
                  options: [
                    { id: 'A', textEn: 'Mutual Exclusion', isCorrect: false },
                    { id: 'B', textEn: 'Hold and Wait', isCorrect: false },
                    { id: 'C', textEn: 'Resource Preemption', isCorrect: true },
                    { id: 'D', textEn: 'Circular Wait', isCorrect: false }
                  ],
                  explanationEn: 'The condition is "NO Preemption" (resources cannot be preempted forcibly). Resource preemption breaks deadlock, so "Resource Preemption" is NOT a condition for deadlock.',
                  conceptTested: 'Coffman conditions'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-os-1',
                topicId: 'cs-topic-cpu-scheduling-deadlocks',
                chapterId: 'cs-ch-os',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which CPU scheduling algorithm is theoretically optimal with respect to minimizing average waiting time for a given set of processes?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'First Come First Served (FCFS)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Shortest Job First (SJF)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Round Robin with small quantum', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Shortest Job First (SJF) is provably optimal because scheduling a shorter process before a longer one decreases the waiting time of the short process more than it increases that of the long process.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
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
        titleEn: 'Data Structures: Arrays, Stacks, Queues, Trees & Graphs',
        titleHi: 'डेटा संरचनाएं: एरे, स्टैक, क्यू, ट्री एवं ग्राफ',
        descriptionEn: 'Time complexity Big-O, Infix/Postfix stack operations, BST traversals, Graph algorithms (BFS/DFS, Dijkstra), and Sorting.',
        descriptionHi: 'समय जटिलता, स्टैक के अनुप्रयोग (इनफिक्स-पोस्टफिक्स), बाइनरी सर्च ट्री (BST), तथा सॉर्टिंग तकनीकें।',
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 60,
        topics: [
          {
            id: 'cs-topic-trees-traversals',
            chapterId: 'cs-ch-dsa',
            topicNumber: 1,
            slug: 'binary-trees-bst-traversals',
            titleEn: 'Binary Search Trees & Traversal Algorithms',
            titleHi: 'बाइनरी सर्च ट्री एवं ट्रैवर्सल एल्गोरिदम',
            descriptionEn: 'Inorder, Preorder, Postorder traversals; BST property; Tree reconstruction from Inorder + Preorder; and AVL rotations.',
            descriptionHi: 'इनऑर्डर (LNR), प्रीऑर्डर (NLR), पोस्टऑर्डर (LRN) ट्रैवर्सल तथा BST से सॉर्टेड आउटपुट।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            tutorial: {
              id: 'tut-cs-tree-traversals',
              topicId: 'cs-topic-trees-traversals',
              titleEn: 'Binary Search Trees & Tree Traversals for BPSC TRE',
              titleHi: 'BPSC TRE हेतु बाइनरी सर्च ट्री एवं ट्रैवर्सल की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'State the BST property: Left Subtree < Root < Right Subtree.',
                'Perform Inorder (L-Root-R), Preorder (Root-L-R), and Postorder (L-R-Root) traversals.',
                'Recognize that the Inorder traversal of any BST yields elements in monotonically ASCENDING sorted order.',
                'Determine the minimum and maximum height of a binary tree with n nodes.'
              ],
              introductionEn: 'Tree structures and their traversals are heavily represented in BPSC TRE Class 11-12 questions. Recognizing that Inorder traversal of a BST produces sorted output and calculating tree heights are recurring question patterns.',
              introductionHi: 'BPSC TRE 11-12 में डेटा संरचनाओं के अंतर्गत ट्री और उसके ट्रैवर्सल से 3 से 4 प्रश्न पूछे जाते हैं। विशेष रूप से BST का इनऑर्डर ट्रैवर्सल हमेशा आरोही (ascending) क्रम में होता है, यह तथ्य बार-बार पूछा जाता है।',
              conceptSections: [
                {
                  title: '1. Binary Tree Traversals (The Universal Rules)',
                  contentMarkdownEn: 'There are three standard depth-first traversals for binary trees:\n\n1. **Preorder Traversal (N-L-R):** Visit Node $\\rightarrow$ Traverse Left Subtree $\\rightarrow$ Traverse Right Subtree.\n2. **Inorder Traversal (L-N-R):** Traverse Left Subtree $\\rightarrow$ Visit Node $\\rightarrow$ Traverse Right Subtree.\n3. **Postorder Traversal (L-R-N):** Traverse Left Subtree $\\rightarrow$ Traverse Right Subtree $\\rightarrow$ Visit Node.\n\n**Golden Rule for Binary Search Trees (BST):**\n$$\\mathbf{\\text{Inorder Traversal of a BST}} = \\mathbf{\\text{Elements in strictly ASCENDING (Sorted) order!}}$$'
                },
                {
                  title: '2. Binary Tree Formulas & Height Bounds',
                  contentMarkdownEn: 'Let $n$ be the number of nodes and $h$ be the height of the tree (with root at height 0):',
                  tableData: {
                    headers: ['Property', 'Formula / Expression', 'Extreme Case'],
                    rows: [
                      ['Maximum nodes at depth $d$', '$2^d$', 'Full binary tree'],
                      ['Maximum nodes in tree of height $h$', '$2^{h+1} - 1$', 'Perfect binary tree'],
                      ['Minimum height with $n$ nodes', '$\\lceil \\log_2(n+1) \\rceil - 1$', 'Completely balanced tree'],
                      ['Maximum height with $n$ nodes', '$n - 1$', 'Skewed binary tree (degenerate)'],
                      ['Leaf vs Degree-2 nodes relation', '$\\mathbf{n_0 = n_2 + 1}$', 'Number of leaves is always 1 more than degree-2 internal nodes!']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Classical Theorem: Leaves = Degree-2 Nodes + 1',
                    textEn: 'In any strictly binary tree, the number of leaf nodes (nodes with 0 children, n_0) is ALWAYS equal to the number of nodes with 2 children (n_2) plus 1: n_0 = n_2 + 1. BPSC frequently asks this numeric relation.',
                    textHi: 'किसी भी बाइनरी ट्री में लीफ नोड्स (पत्तियाँ) की संख्या हमेशा 2 बच्चों वाले नोड्स की संख्या से 1 अधिक होती है: n0 = n2 + 1।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Binary Search Tree (BST)',
                  definitionEn: 'A binary tree data structure where each node has a key such that all keys in the left subtree are strictly less than the node key, and all keys in the right subtree are strictly greater.',
                  definitionHi: 'वह बाइनरी ट्री जिसमें बाएँ सब-ट्री के सभी मान मूल नोड से छोटे और दाएँ सब-ट्री के मान मूल नोड से बड़े होते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Inorder of BST Rule',
                  formulaOrRule: 'Inorder(BST) = Sorted Array in Ascending Order',
                  explanationEn: 'If BST has keys {5, 2, 8, 1, 3}, Inorder is {1, 2, 3, 5, 8}.',
                  explanationHi: 'BST का इनऑर्डर हमेशा बढ़ते क्रम में होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Exam Problem: BST Inorder Traversal',
                  problemEn: 'A Binary Search Tree is constructed by inserting elements in the order: 50, 20, 80, 10, 30, 70, 90. What is its Inorder traversal?',
                  stepByStepSolutionEn: '1. By definition, the Inorder traversal of ANY valid BST visits elements in strictly ascending sorted order.\n2. Elements in ascending order: 10, 20, 30, 50, 70, 80, 90.\n3. There is no need to manually trace the tree!',
                  shortcutTrick: 'Sort the elements in ascending order directly. That is always the Inorder traversal.'
                }
              ],
              practicalApplications: [
                'Implementing indexed lookups in databases (B-Trees and BSTs).',
                'Symbol tables and abstract syntax tree (AST) traversals in compiler construction.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Preorder or Postorder also yields sorted elements in a BST.',
                  whyWrongEn: 'ONLY Inorder traversal yields sorted elements. Preorder and Postorder do not produce sorted sequences.',
                  correctWayEn: 'Only Inorder (L-N-R) produces sorted output in a BST.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Inorder traversal of BST gives sorted list.',
                  'Relation n_0 = n_2 + 1 in binary trees.',
                  'Time complexity of search in BST (Average O(log n), Worst O(n) for skewed tree).',
                  'Preorder = Root-Left-Right, Postorder = Left-Right-Root.'
                ],
                commonDistractorTraps: [
                  'Saying worst case BST search is O(log n) instead of O(n) for skewed tree.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 CS Paper Q101',
                  'BPSC TRE 2.0 CS Paper Q95'
                ]
              },
              quickRevisionPoints: [
                'Preorder = Root, Left, Right.',
                'Inorder = Left, Root, Right -> Always sorted in BST.',
                'Postorder = Left, Right, Root.',
                'Leaves relation: Leaf nodes = Degree-2 nodes + 1.',
                'BST Search: Best/Average = O(log n); Worst (skewed) = O(n).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-dsa-1',
                  questionEn: 'Which traversal of a Binary Search Tree (BST) produces the keys in ascending sorted order?',
                  questionHi: 'बाइनरी सर्च ट्री (BST) का कौन सा ट्रैवर्सल कुंजियों को आरोही क्रम में उत्पन्न करता है?',
                  options: [
                    { id: 'A', textEn: 'Preorder traversal', isCorrect: false },
                    { id: 'B', textEn: 'Inorder traversal', isCorrect: true },
                    { id: 'C', textEn: 'Postorder traversal', isCorrect: false },
                    { id: 'D', textEn: 'Level order traversal', isCorrect: false }
                  ],
                  explanationEn: 'Inorder traversal (Left, Root, Right) processes nodes in increasing order of key values in a BST.',
                  conceptTested: 'BST Inorder traversal'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-dsa-1',
                topicId: 'cs-topic-trees-traversals',
                chapterId: 'cs-ch-dsa',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'In a strictly binary tree with 25 internal nodes having two children each, how many leaf nodes are there?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '24', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '25', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '26', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'BPSC_EXAM',
                explanationEn: 'According to the binary tree theorem: n_0 = n_2 + 1. With n_2 = 25, the number of leaf nodes n_0 = 25 + 1 = 26.',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 4: DATABASE MANAGEMENT SYSTEMS & SQL
      // ----------------------------------------------------
      {
        id: 'cs-ch-dbms',
        subjectKey: 'COMPUTER_SCIENCE_11_12',
        chapterNumber: 4,
        slug: 'dbms-and-sql',
        titleEn: 'DBMS: Relational Model, SQL & Normalization',
        titleHi: 'DBMS: रिलेशनल मॉडल, SQL एवं सामान्यीकरण (Normalization)',
        descriptionEn: '3-schema architecture, Primary/Foreign keys, SQL clauses (GROUP BY, HAVING), 1NF/2NF/3NF/BCNF, and ACID properties.',
        descriptionHi: 'प्राथमिक कुंजी, SQL कमांड्स, 1NF से BCNF तक सामान्यीकरण, तथा ACID गुण।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'cs-topic-normalization-acid',
            chapterId: 'cs-ch-dbms',
            topicNumber: 1,
            slug: 'normalization-and-acid-properties',
            titleEn: 'Database Normalization (1NF to BCNF) & ACID Properties',
            titleHi: 'डेटाबेस सामान्यीकरण (1NF से BCNF) एवं ACID गुण',
            descriptionEn: 'Functional dependencies, 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), and BCNF.',
            descriptionHi: 'कार्यात्मक निर्भरता, 1NF, 2NF, 3NF, BCNF के नियम, तथा ट्रांजैक्शन के ACID गुण।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-cs-dbms-norm',
              topicId: 'cs-topic-normalization-acid',
              titleEn: 'Database Normalization & ACID Properties for BPSC TRE',
              titleHi: 'BPSC TRE हेतु डेटाबेस सामान्यीकरण एवं ACID गुणों की संपूर्ण गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify 1NF violation: non-atomic multi-valued attributes.',
                'Detect 2NF violation: partial dependency of a non-prime attribute on a proper subset of candidate key.',
                'Detect 3NF violation: transitive dependency (non-prime -> non-prime).',
                'Understand BCNF: for every X -> Y, X must be a super key.',
                'Define ACID properties: Atomicity, Consistency, Isolation, Durability.'
              ],
              introductionEn: 'Database Management Systems questions in BPSC TRE consistently target functional dependencies and Normal Forms. Being able to pinpoint which normal form a relation satisfies based on key attributes is crucial for maximizing score in the Subject section.',
              introductionHi: 'BPSC TRE 11-12 कंप्यूटर शिक्षक परीक्षा में DBMS से 10 से 12 प्रश्न आते हैं। सामान्यीकरण (1NF, 2NF, 3NF, BCNF) और ट्रांजैक्शन के ACID गुणों पर सीधे नियम-आधारित प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Normal Forms Hierarchy & Violations',
                  contentMarkdownEn: 'Normalization minimizes data redundancy and avoids insertion, deletion, and update anomalies:\n\n* **1NF (First Normal Form):** All attribute values must be **atomic** (no multi-valued attributes or repeating groups).\n* **2NF (Second Normal Form):** Must be in 1NF **AND no non-prime attribute is partially dependent on any candidate key** (eliminates Partial Dependency).\n  * *Note:* If every candidate key is a single attribute (not composite), the relation is automatically in 2NF!\n* **3NF (Third Normal Form):** Must be in 2NF **AND no non-prime attribute is transitively dependent on candidate key**.\n  * *Formal Rule:* For every functional dependency $X \\rightarrow Y$, either **$X$ is a Super Key** OR **$Y$ is a Prime Attribute**.\n* **BCNF (Boyce-Codd Normal Form):** Strictly stronger than 3NF. For every $X \\rightarrow Y$, **$X$ MUST be a Super Key** (no exception for prime attributes!).',
                  tableData: {
                    headers: ['Normal Form', 'Eliminated Anomaly / Dependency', 'Condition for X -> Y'],
                    rows: [
                      ['1NF', 'Composite / Multi-valued attributes', 'All domain values must be atomic'],
                      ['2NF', 'Partial Dependency', 'No Non-Prime depends on part of Candidate Key'],
                      ['3NF', 'Transitive Dependency', 'X is Super Key OR Y is Prime Attribute'],
                      ['BCNF', 'All functional dependency anomalies', 'X must strictly be a Super Key']
                    ]
                  }
                },
                {
                  title: '2. ACID Properties of Transactions',
                  contentMarkdownEn: 'Transactions ensure database integrity under concurrent access and hardware failures:\n\n* **Atomicity (All or None):** Either all operations of the transaction are committed successfully to the database or none are. Handled by **Recovery Management (Log-based rollback)**.\n* **Consistency (Correctness):** The transaction brings the database from one valid consistent state to another valid state, preserving all integrity constraints.\n* **Isolation (Independent Execution):** Concurrent execution of transactions yields the same result as if they had executed serially. Handled by **Concurrency Control (Two-Phase Locking, Timestamping)**.\n* **Durability (Permanence):** Once a transaction commits, its modifications persist permanently even in the event of an immediate system crash or power outage.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Prime Attribute',
                  definitionEn: 'An attribute that forms part of any candidate key of the relation schema.',
                  definitionHi: 'वह गुणधर्म (स्तंभ) जो संबंध की किसी भी उम्मीदवार कुंजी (Candidate Key) का हिस्सा हो।'
                },
                {
                  term: 'Partial Dependency',
                  definitionEn: 'A condition where a non-prime attribute is functionally dependent on only a part of a composite candidate key rather than the whole key.',
                  definitionHi: 'जब कोई गैर-मुख्य विशेषता किसी समग्र उम्मीदवार कुंजी के केवल एक हिस्से पर निर्भर हो।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: '3NF Verification Rule',
                  formulaOrRule: 'For every X -> Y: (X is Super Key) OR (Y is Prime Attribute)',
                  explanationEn: 'If either condition holds for all dependencies, relation is in 3NF.',
                  explanationHi: 'प्रत्येक X -> Y के लिए या तो X सुपर की हो या Y प्राइम एट्रिब्यूट हो।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Exam Problem: Identifying 2NF',
                  problemEn: 'A table R(A, B, C, D) has Candidate Key (A, B) and functional dependency B -> C. Which normal form is violated?',
                  stepByStepSolutionEn: '1. Candidate Key is composite: (A, B).\n2. Prime attributes = {A, B}. Non-prime attributes = {C, D}.\n3. Dependency B -> C shows non-prime attribute C depends on B, which is a proper subset of candidate key (A, B).\n4. This is a Partial Dependency, which violates 2NF.',
                  shortcutTrick: 'Composite Key + dependency on only one part = 2NF violation.'
                }
              ],
              practicalApplications: [
                'Relational schema design in PostgreSQL/MySQL for high-traffic enterprise portals without redundant data corruption.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Assuming every 3NF relation is in BCNF.',
                  whyWrongEn: 'BCNF is strictly stronger than 3NF. A relation can be in 3NF (due to Y being prime) while failing BCNF (when X is not a super key).',
                  correctWayEn: 'All BCNF relations are in 3NF, but not all 3NF relations are in BCNF.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which normal form eliminates transitive dependency (3NF).',
                  'Which normal form eliminates partial dependency (2NF).',
                  'ACID property ensuring all-or-nothing (Atomicity).',
                  'Difference between 3NF and BCNF.'
                ],
                commonDistractorTraps: [
                  'Confusing Consistency with Isolation in ACID.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 CS Paper Q112',
                  'BPSC TRE 2.0 CS Paper Q108'
                ]
              },
              quickRevisionPoints: [
                '1NF: Atomic attributes.',
                '2NF: No partial dependency (non-prime on part of key).',
                '3NF: No transitive dependency (X is SK or Y is Prime).',
                'BCNF: Every determinant X must be a Super Key.',
                'ACID: Atomicity (All or None), Consistency, Isolation, Durability (Permanent).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-cs-db-1',
                  questionEn: 'Which database normal form specifically eliminates transitive functional dependencies among non-prime attributes?',
                  questionHi: 'कौन सा डेटाबेस सामान्य रूप गैर-प्रमुख विशेषताओं के बीच संक्रामक निर्भरता को समाप्त करता है?',
                  options: [
                    { id: 'A', textEn: 'First Normal Form (1NF)', isCorrect: false },
                    { id: 'B', textEn: 'Second Normal Form (2NF)', isCorrect: false },
                    { id: 'C', textEn: 'Third Normal Form (3NF)', isCorrect: true },
                    { id: 'D', textEn: 'Boyce-Codd Normal Form (BCNF)', isCorrect: false }
                  ],
                  explanationEn: 'Third Normal Form (3NF) requires 2NF and removes all transitive dependencies (where a non-prime attribute determines another non-prime attribute).',
                  conceptTested: '3NF definition'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-cs-db-1',
                topicId: 'cs-topic-normalization-acid',
                chapterId: 'cs-ch-dbms',
                subjectKey: 'COMPUTER_SCIENCE_11_12',
                sectionKey: 'PART_3_SUBJECT_CORE',
                questionTextEn: 'Which ACID property guarantees that all operations within a database transaction are either executed completely or not executed at all ("all or nothing")?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Consistency', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Atomicity', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Isolation', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Atomicity ensures that all changes made during a transaction are treated as a single indivisible unit: either all succeed and commit, or all fail and roll back.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
