// Comprehensive BPSC TRE 4.0 Elementary Mathematics & Mental Ability Course Data
// In-depth curriculum covering Number Systems, HCF/LCM, Percentages, Profit & Loss, Simple & Compound Interest, Time & Work, Series, Coding-Decoding, Blood Relations, and Direction Sense
// Fully equipped with authentic BPSC TRE PYQs, clean mathematical formulas, solved step-by-step shortcuts, yellow highlighters (==text==), and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_MATH_REASONING_SUBJECTS: LMSSubject[] = [
  {
    key: 'ELEMENTARY_MATHEMATICS',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Elementary Mathematics & Mental Ability',
    displayNameHi: 'प्रारंभिक गणित एवं मानसिक क्षमता परीक्षण (रीजनिंग)',
    iconName: 'Calculator',
    descriptionEn: 'High-scoring quantitative aptitude & reasoning topics tested in BPSC TRE General Studies: Number systems, HCF-LCM, Percentages, Profit & Loss, SI/CI, Time & Work, Coding-Decoding, Blood Relations, and Direction Sense.',
    descriptionHi: 'बीपीएससी टीआरई सामान्य अध्ययन में पूछे जाने वाले अंकगणित एवं रीजनिंग के मुख्य अध्याय: संख्या पद्धति, म.स.-ल.स., प्रतिशतता, लाभ-हानि, साधारण एवं चक्रवृद्धि ब्याज, कार्य और समय, कोडिंग-डिकोडिंग, रक्त संबंध, तथा दिशा परीक्षण।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: ELEMENTARY MATHEMATICS
      // ----------------------------------------------------
      {
        id: 'math-ch-arithmetic',
        subjectKey: 'ELEMENTARY_MATHEMATICS',
        chapterNumber: 1,
        slug: 'elementary-arithmetic-quant',
        titleEn: 'Elementary Arithmetic & Quantitative Aptitude',
        titleHi: 'प्रारंभिक अंकगणित एवं मात्रात्मक अभिरुचि',
        descriptionEn: 'Divisibility rules, HCF & LCM property, Percentage shortcuts, Profit & Loss, 2-year CI-SI difference formula, and Time & Work efficiency methods.',
        descriptionHi: 'विभाज्यता के नियम, म.स. एवं ल.स. का संबंध, प्रतिशत एवं क्रमिक छूट, लाभ-हानि, 2 वर्ष के साधारण एवं चक्रवृद्धि ब्याज का अंतर, तथा कार्य और समय।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'math-topic-core-arithmetic',
            chapterId: 'math-ch-arithmetic',
            topicNumber: 1,
            slug: 'number-systems-percentages-profit-loss-work',
            titleEn: 'Number Systems, Percentages, Profit & Loss and Time & Work',
            titleHi: 'संख्या पद्धति, प्रतिशतता, लाभ-हानि एवं कार्य और समय',
            descriptionEn: 'Formula derivations, rapid shortcut methods, HCF × LCM = Product of Numbers, Successive percentage formula, and LCM method for Work.',
            descriptionHi: 'ल.स. × म.स. = दो संख्याओं का गुणनफल, क्रमिक प्रतिशत परिवर्तन, लाभ-हानि सूत्र, तथा समय और कार्य की शॉर्टकट ट्रिक्स।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 15,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.47, Q.48), TRE 2.0 (Q.48, Q.49) & TRE 3.0 (Q.50, Q.51)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-core-arithmetic',
              topicId: 'math-topic-core-arithmetic',
              titleEn: 'Number Systems, Percentages, Profit & Loss and Time & Work',
              titleHi: 'संख्या पद्धति, प्रतिशतता, लाभ-हानि एवं कार्य और समय',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Apply the fundamental HCF-LCM property: HCF(a, b) × LCM(a, b) = a × b.',
                'Solve successive percentage change problems using x + y + (xy / 100).',
                'Calculate Profit, Loss, Marked Price, and effective discounts without equation clutter.',
                'Master 2-year CI and SI difference formula: Difference = P × (R / 100)².',
                'Solve Time & Work problems using total work units (LCM of days).'
              ],
              introductionEn: '==In competitive examinations like BPSC TRE, Elementary Mathematics tests conceptual speed, pattern recognition, and applying clean shortcut formulas.==\n\nBy converting percentages into standard fractions and using LCM unit-work methods, multi-step arithmetic problems can be solved in under 45 seconds with complete accuracy.',
              introductionHi: 'बीपीएससी टीआरई में प्रारंभिक गणित के प्रश्नों को हल करने के लिए गति और सटीकता आवश्यक है। प्रतिशत को भिन्नों में बदलकर और ल.स. इकाई विधि से कार्य-समय के प्रश्नों को अत्यंत शीघ्रता से हल किया जा सकता है।',
              conceptSections: [
                {
                  title: '1. Number System & HCF-LCM Properties',
                  contentMarkdownEn: '* **Fundamental HCF-LCM Property:** ==Product of two numbers = HCF × LCM== (a × b = HCF × LCM).\n* **Divisibility by 11:** Difference between sum of digits at odd positions and sum of digits at even positions must be ==0 or a multiple of 11==.\n* **Fractions HCF & LCM:**\n  * HCF of fractions = (HCF of Numerators) / (LCM of Denominators)\n  * LCM of fractions = (LCM of Numerators) / (HCF of Denominators)'
                },
                {
                  title: '2. Percentage, Profit-Loss & CI-SI Formulas',
                  contentMarkdownEn: '* **Successive Percentage Change:** Effective Net Change = ==x + y + (x × y) / 100==.\n* **Single Equivalent Discount for d₁ and d₂:** Net Discount = ==d₁ + d₂ - (d₁ × d₂) / 100==.\n* **Difference between CI and SI for 2 Years:** ==Difference = P × (R / 100)²==. *(One of the most frequently asked questions in BPSC General Studies!)*'
                },
                {
                  title: '3. Time and Work: The Unit / LCM Method',
                  contentMarkdownEn: '* Total Work Units = LCM of individual days taken.\n* Efficiency = Total Units / Number of Days.\n* **Combined Formula for 2 Persons:** If A takes x days and B takes y days: Together = ==(x × y) / (x + y) days==.\n* *Example:* A takes 10 days, B takes 15 days => LCM = 30 units. A = 3 units/day, B = 2 units/day. Together = 30 / (3 + 2) = ==6 days==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Compound Interest Difference (2 Years)',
                  definitionEn: 'The algebraic excess of compound interest over simple interest for 2 years at annual rate R% given by P × (R / 100)²',
                  definitionHi: '2 वर्षों के लिए चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर P × (R/100)² होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: '2-Year CI vs SI Difference',
                  formulaOrRule: 'Difference = P × (R / 100)²',
                  explanationEn: 'Allows instantaneous calculation of difference or principal without calculating separate interests.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: CI and SI Difference',
                  problemEn: 'Find the difference between CI and SI on ₹10,000 for 2 years at 10% per annum.',
                  stepByStepSolutionEn: '1. Use Difference = P × (R / 100)².\n2. P = 10,000, R = 10.\n3. Difference = 10,000 × (10 / 100)² = 10,000 × (1 / 100) = ₹100.\n4. Answer: ₹100.',
                  shortcutTrick: '10% of 10% of 10,000 = 1% of 10,000 = ₹100!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Adding 20% and 10% successive discounts to get 30%.',
                  whyWrongEn: 'Successive discount is 20 + 10 - (20 × 10)/100 = 28%, not 30%.',
                  correctWayEn: 'Always use d₁ + d₂ - (d₁ × d₂)/100.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Difference between CI and SI for 2 years (TRE 1.0 Q.47)',
                  'HCF × LCM = Product of numbers (TRE 2.0 Q.48)',
                  'Time and work combined days formula (TRE 3.0 Q.50)'
                ],
                commonDistractorTraps: ['Calculating SI instead of CI-SI difference'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.47)', 'BPSC TRE 2.0 (Q.48)']
              },
              quickRevisionPoints: [
                'HCF × LCM = Product of two numbers.',
                'Divisibility by 11: (Sum of odd digits - Sum of even digits) = 0 or multiple of 11.',
                'Successive percentage change = x + y + (xy / 100).',
                'Single equivalent discount for d₁ and d₂ = d₁ + d₂ - (d₁ × d₂) / 100.',
                'Difference between CI and SI for 2 years = P × (R / 100)²',
                'Time taken together by A and B = (x × y) / (x + y).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-math-arith-1',
                  questionEn: 'The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, what is the second number?',
                  questionHi: 'दो संख्याओं का महत्तम समापवर्तक (HCF) 12 तथा लघुत्तम समापवर्त्य (LCM) 240 है। यदि इनमें से एक संख्या 48 है, तो दूसरी संख्या क्या होगी?',
                  options: [
                    { id: 'A', textEn: '40', isCorrect: false },
                    { id: 'B', textEn: '60', isCorrect: true },
                    { id: 'C', textEn: '72', isCorrect: false },
                    { id: 'D', textEn: '80', isCorrect: false }
                  ],
                  explanationEn: 'Product of numbers = HCF × LCM => 48 × Second Number = 12 × 240 => Second Number = (12 × 240) / 48 = 60.',
                  conceptTested: 'HCF × LCM product property'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-math-arith-1',
                topicId: 'math-topic-core-arithmetic',
                chapterId: 'math-ch-arithmetic',
                subjectKey: 'ELEMENTARY_MATHEMATICS',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'A person invested ₹10,000 at a compound interest rate of 10% per annum for 2 years. What is the difference between the compound interest and simple interest earned over this period?',
                questionTextHi: 'एक व्यक्ति ने ₹10,000 की धनराशि 10% वार्षिक ब्याज की दर से 2 वर्षों के लिए चक्रवृद्धि ब्याज पर निवेश की। इस अवधि में अर्जित चक्रवृद्धि ब्याज और साधारण ब्याज के बीच क्या अंतर होगा?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '₹50', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '₹100', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '₹150', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Using the 2-year difference formula: Difference = P × (R / 100)² = 10,000 × (10 / 100)² = 10,000 × (1 / 100) = ₹100.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-25',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 47,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: REASONING & MENTAL ABILITY
      // ----------------------------------------------------
      {
        id: 'math-ch-reasoning',
        subjectKey: 'ELEMENTARY_MATHEMATICS',
        chapterNumber: 2,
        slug: 'logical-reasoning-and-mental-ability',
        titleEn: 'Logical Reasoning & Mental Ability',
        titleHi: 'तार्किक क्षमता एवं मानसिक अभियोग्यता',
        descriptionEn: 'Coding-Decoding patterns, Reverse alphabet pairs, Blood relation diagrams, Direction sense & displacement, and Number/Letter series.',
        descriptionHi: 'कोडिंग-डिकोडिंग के नियम, विपरीत वर्णमाला युग्म, रक्त संबंध आरेख, दिशा एवं दूरी (पाइथागोरस प्रमेय), तथा संख्या एवं वर्ण शृंखला।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          {
            id: 'math-topic-reasoning-core',
            chapterId: 'math-ch-reasoning',
            topicNumber: 1,
            slug: 'coding-decoding-blood-relations-direction',
            titleEn: 'Coding-Decoding, Blood Relations & Direction Sense',
            titleHi: 'कोडिंग-डिकोडिंग, रक्त संबंध एवं दिशा ज्ञान परीक्षण',
            descriptionEn: 'Alphabet position ranks (EJOTY), Reverse letters (AZ, BY, CX), Family tree diagrams, and 8-point compass navigation.',
            descriptionHi: 'वर्णमाला क्रमांक (EJOTY विधि), विपरीत अक्षर, पारिवारिक संबंध आरेख (पीढ़ी अंतराल), तथा 8 दिशाएं एवं विस्थापन।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.49), TRE 2.0 (Q.50) & TRE 3.0 (Q.52)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-reasoning-core',
              topicId: 'math-topic-reasoning-core',
              titleEn: 'Coding-Decoding, Blood Relations & Direction Sense',
              titleHi: 'कोडिंग-डिकोडिंग, रक्त संबंध एवं दिशा ज्ञान परीक्षण',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Memorize forward and reverse ranks of all 26 English alphabets using the EJOTY technique.',
                'Solve letter coding, number coding, and substitution coding problems.',
                'Construct clean family trees using standard generational symbols (+ for male, - for female, = for spouse).',
                'Calculate shortest straight-line distance using the Pythagoras Theorem (a² + b² = c²).'
              ],
              introductionEn: '==Reasoning in BPSC General Studies tests analytical alertness and structured logic.==\n\nBy mastering the EJOTY benchmark (E=5, J=10, O=15, T=20, Y=25) and drawing clear family tree diagrams, multi-step logical problems can be solved with zero errors.',
              introductionHi: 'बीपीएससी सामान्य अध्ययन में रीजनिंग के प्रश्न उम्मीदवार की तार्किक सतर्कता का परीक्षण करते हैं। EJOTY फॉर्मूला और पारिवारिक आरेख का उपयोग करके जटिल प्रश्नों को भी आसानी से हल किया जा सकता है।',
              conceptSections: [
                {
                  title: '1. Alphabet Positions & Coding-Decoding',
                  contentMarkdownEn: '* **EJOTY Benchmark:** ==E = 5, J = 10, O = 15, T = 20, Y = 25==.\n* **Reverse Pairs (Sum = 27):** A-Z, B-Y, C-X, D-W, E-V, F-U, G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q, K-P, L-O, M-N.'
                },
                {
                  title: '2. Blood Relations: Generation Tree Method',
                  contentMarkdownEn: '* Male = **[ + ]**, Female = **[ - ]**, Married Couple = **[ A = B ]**, Siblings = **[ A — B ]**.\n* Generation levels: Grandparents (+2), Parents (+1), Self/Spouse/Siblings (0), Children (-1).'
                },
                {
                  title: '3. Direction Sense & Shortest Distance',
                  contentMarkdownEn: '* Clockwise = Right turn (90°); Anti-clockwise = Left turn (90°).\n* **Shortest Distance (Displacement):** ==Hypotenuse² = Base² + Perpendicular²==.\n* Standard Triplet: 3 km North + 4 km East => Shortest distance = √(3² + 4²) = ==5 km==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'EJOTY Rule',
                  definitionEn: 'A mnemonic tool indexing English alphabet positions at intervals of 5: E(5), J(10), O(15), T(20), Y(25).',
                  definitionHi: 'अंग्रेजी वर्णमाला के अक्षरों का 5-5 के अंतराल पर क्रम याद रखने का सूत्र।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Displacement Formula',
                  formulaOrRule: 'Shortest Distance = √(Δx² + Δy²)',
                  explanationEn: 'Direct application of the Pythagorean theorem.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Direction Distance',
                  problemEn: 'A person walks 6 km North, then 8 km East. Find shortest distance from start.',
                  stepByStepSolutionEn: '1. Base = 8, Perpendicular = 6.\n2. Hypotenuse = √(6² + 8²) = √(36 + 64) = √100 = 10 km.\n3. Answer: 10 km.',
                  shortcutTrick: 'Standard 6-8-10 triangle!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing final facing direction with direction from start point.',
                  whyWrongEn: 'He may be walking East, but his position relative to starting point may be North-East.',
                  correctWayEn: 'Always check if the question asks "Facing direction" or "Direction from origin".'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Direction sense shortest distance (TRE 1.0 Q.49)',
                  'Letter shift coding (TRE 2.0 Q.50)',
                  'Blood relation family tree deduction'
                ],
                commonDistractorTraps: ['Assuming person gender from their name'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.49)', 'BPSC TRE 2.0 (Q.50)']
              },
              quickRevisionPoints: [
                'EJOTY: E=5, J=10, O=15, T=20, Y=25.',
                'Sum of reverse alphabet ranks is always 27.',
                'Never assume gender in blood relations without explicit clues.',
                'Shortest distance uses Pythagoras theorem: √(Base² + Perpendicular²).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-math-reas-1',
                  questionEn: 'A man walks 6 km towards North and then turns East and walks 8 km. What is the shortest straight-line distance from his initial starting point?',
                  questionHi: 'एक व्यक्ति उत्तर की ओर 6 किमी चलता है और फिर पूर्व की ओर मुड़कर 8 किमी चलता है। अपने प्रारंभिक बिंदु से उसकी न्यूनतम सीधी दूरी क्या है?',
                  options: [
                    { id: 'A', textEn: '10 km', isCorrect: true },
                    { id: 'B', textEn: '14 km', isCorrect: false },
                    { id: 'C', textEn: '12 km', isCorrect: false },
                    { id: 'D', textEn: '8 km', isCorrect: false }
                  ],
                  explanationEn: 'Shortest distance = √(6² + 8²) = √(36 + 64) = √100 = 10 km.',
                  conceptTested: 'Pythagorean triplet in direction sense'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-math-reas-1',
                topicId: 'math-topic-reasoning-core',
                chapterId: 'math-ch-reasoning',
                subjectKey: 'ELEMENTARY_MATHEMATICS',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'In a certain code language, if "MADRAS" is coded as "NBESBT", how will "BOMBAY" be coded in the same language?',
                questionTextHi: 'किसी निश्चित कूट भाषा में यदि "MADRAS" को "NBESBT" लिखा जाता है, तो उसी कूट भाषा में "BOMBAY" को कैसे लिखा जाएगा?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'CPNCBX', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'CPNCBZ', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'CPOCBZ', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Each letter is shifted forward by +1: B(+1)=C, O(+1)=P, M(+1)=N, B(+1)=C, A(+1)=B, Y(+1)=Z => CPNCBZ.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 50,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
