// Comprehensive BPSC TRE 4.0 General Science Course Data
// In-depth curriculum covering Physics (Newton's Laws, Optics, Electricity), Chemistry (pH scale, Salts, Alloys), and Biology (Cell, Physiology, Vitamins, Kala-Azar)
// Fully equipped with authentic BPSC TRE PYQs, clean Unicode math (no raw LaTeX/escaped backslashes), yellow highlighters (==text==), and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_SCIENCE_SUBJECTS: LMSSubject[] = [
  {
    key: 'GENERAL_SCIENCE',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'General Science (Physics, Chemistry & Biology)',
    displayNameHi: 'सामान्य विज्ञान (भौतिकी, रसायन एवं जीव विज्ञान)',
    iconName: 'FlaskConical',
    descriptionEn: 'High-yield scientific principles: Newton\'s laws, Optics & eye defects (Myopia/Hypermetropia), pH scale, Common commercial salts (Baking soda, Bleaching powder, Plaster of Paris), Human physiology, Vitamins, and Bihar endemic diseases (Kala-Azar & Sandfly).',
    descriptionHi: 'न्यूटन के गति नियम, प्रकाशिकी एवं दृष्टि दोष (निकट/दूर दृष्टि), pH पैमाना, व्यापारिक लवण (बेकिंग सोडा, विरंजक चूर्ण, प्लास्टर ऑफ पेरिस), मानव शरीर क्रिया विज्ञान, विटामिन, तथा कालाजार (बालू मक्खी/सैंडफ्लाई)।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: PHYSICS & OPTICS
      // ----------------------------------------------------
      {
        id: 'sci-ch-physics',
        subjectKey: 'GENERAL_SCIENCE',
        chapterNumber: 1,
        slug: 'physics-mechanics-optics-electricity',
        titleEn: 'Physics: Mechanics, Optics & Electricity',
        titleHi: 'भौतिकी: यांत्रिकी, प्रकाशिकी एवं विद्युत',
        descriptionEn: 'Newton\'s laws of motion, Work-Energy-Power, Mirrors and Lenses, Total Internal Reflection, Eye defects & corrections, and Ohm\'s Law.',
        descriptionHi: 'न्यूटन के गति नियम, कार्य-ऊर्जा-शक्ति, दर्पण एवं लेंस, पूर्ण आंतरिक परावर्तन, नेत्र दोष एवं निवारण, तथा ओम का नियम।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'sci-topic-optics-mechanics',
            chapterId: 'sci-ch-physics',
            topicNumber: 1,
            slug: 'optics-eye-defects-and-mechanics',
            titleEn: 'Optics, Vision Defects & Applied Mechanics',
            titleHi: 'प्रकाशिकी, दृष्टि दोष एवं व्यावहारिक यांत्रिकी',
            descriptionEn: 'Concave vs Convex mirrors, Total Internal Reflection phenomena (fiber optics, mirage), Myopia, Hypermetropia, and Newton\'s laws.',
            descriptionHi: 'अवतल एवं उत्तल दर्पण के उपयोग, पूर्ण आंतरिक परावर्तन (ऑप्टिकल फाइबर, मरीचिका), निकट दृष्टि दोष, दूर दृष्टि दोष, एवं न्यूटन के नियम।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 14,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.44), TRE 2.0 (Q.45) & TRE 3.0 (Q.47)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-optics-mechanics',
              topicId: 'sci-topic-optics-mechanics',
              titleEn: 'Optics, Vision Defects & Applied Mechanics',
              titleHi: 'प्रकाशिकी, दृष्टि दोष एवं व्यावहारिक यांत्रिकी',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand practical applications of Concave mirrors (shaving, dentists, headlights) and Convex mirrors (vehicle rear-view).',
                'Explain Total Internal Reflection (TIR) conditions: light travelling from denser to rarer medium and angle of incidence > critical angle.',
                'Master eye defects: Myopia (corrected by Concave lens) vs Hypermetropia (corrected by Convex lens).',
                'Recall work and energy conversions: 1 Horsepower (HP) = 746 Watts; 1 kWh = 3.6 × 10⁶ Joules.'
              ],
              introductionEn: '==From optical fibers crossing oceans to the corrective lenses that restore human vision, optics governs the modern world.==\n\nWhen the eyeball becomes elongated, light focuses in front of the retina rather than on it, creating myopia (near-sightedness). By using a simple diverging concave lens, this vision defect is instantly restored.',
              introductionHi: 'ऑप्टिकल फाइबर में प्रकाश के संचरण से लेकर मानव आंख के दृष्टि दोषों तक, प्रकाशिकी के नियम दैनिक जीवन में अत्यंत महत्वपूर्ण हैं। निकट दृष्टि दोष (Myopia) में प्रकाश रेटिना से पहले मिलता है, जिसे अवतल लेंस से ठीक किया जाता है।',
              conceptSections: [
                {
                  title: '1. Mirrors: Concave vs Convex Applications & TIR',
                  contentMarkdownEn: '* **Concave Mirror (Converging):** Produces enlarged, virtual, and erect image when object is placed between Pole and Focus. Uses: ==Dentist mirrors==, Shaving mirrors, Automobile headlights, Solar furnaces.\n* **Convex Mirror (Diverging):** Always forms a ==virtual, erect, and diminished image==, providing a **much wider field of view**. Uses: ==Rear-view mirrors in vehicles==, Security vigilance mirrors.\n* **Total Internal Reflection (TIR):** Occurs when light travels from denser to rarer medium and angle of incidence > critical angle. Applications: ==Optical Fiber cables==, ==Mirage (मरीचिका)== in deserts, ==Sparkle of diamonds==.'
                },
                {
                  title: '2. Human Eye Defects & Corrective Lenses',
                  contentMarkdownEn: '* **1. Myopia (Near-Sightedness):** Nearby objects seen clearly, distant objects blurred. Image formed **in front of retina**. Corrected by ==Concave Lens (Diverging)==.\n* **2. Hypermetropia (Far-Sightedness):** Distant objects clear, nearby blurred. Image formed **behind retina**. Corrected by ==Convex Lens (Converging)==.\n* **3. Presbyopia:** Old-age stiffening of ciliary muscles. Corrected by ==Bifocal Lens==.\n* **4. Astigmatism:** Corrected by ==Cylindrical Lens==.'
                },
                {
                  title: '3. Electrical Units & Ohm\'s Law',
                  contentMarkdownEn: '* **Ohm\'s Law:** V = I × R.\n* **Units of Power & Energy:**\n  * 1 Horsepower (HP) = ==746 Watts==.\n  * 1 Commercial Unit of Electricity (1 kWh) = ==3.6 × 10⁶ Joules==.\n* Household wiring is connected strictly in ==Parallel circuit== so each appliance receives full 220V.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Total Internal Reflection (पूर्ण आंतरिक परावर्तन)',
                  definitionEn: 'Complete reflection of a ray of light within a medium when the angle of incidence exceeds the critical angle.',
                  definitionHi: 'सघन माध्यम से विरल माध्यम में जाने वाली किरण का पूर्ण परावर्तन जब आपतन कोण क्रांतिक कोण से बड़ा हो।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Optics Mnemonic for Eye Lenses',
                  formulaOrRule: 'Myopia (Short word) -> Concave (Long word) | Hypermetropia (Long word) -> Convex (Short word)',
                  explanationEn: 'In Hindi: निकट (3 अक्षर) = अवतल (4 अक्षर); दूर (2 अक्षर) = उत्तल (3 अक्षर).'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Mirage Principle',
                  problemEn: 'What principle causes the optical illusion of mirage in deserts?',
                  stepByStepSolutionEn: '1. Light travels through hot air layers of varying refractive indices.\n2. When angle exceeds critical angle, total internal reflection occurs.\n3. Correct Answer: Total Internal Reflection.',
                  shortcutTrick: 'Mirage = Total Internal Reflection!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Using a convex mirror in headlights of automobiles.',
                  whyWrongEn: 'Convex mirrors diverge light, whereas headlights require a powerful parallel beam produced by placing a bulb at the focus of a concave mirror.',
                  correctWayEn: 'Headlights = Concave mirror; Rear-view = Convex mirror.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Mirage and Optical Fiber work on Total Internal Reflection (TRE 1.0 Q.44)',
                  'Myopia corrected by Concave lens; Hypermetropia by Convex lens (TRE 2.0 Q.45)',
                  '1 Horsepower = 746 Watts; 1 kWh = 3.6 × 10⁶ Joules'
                ],
                commonDistractorTraps: ['Confusing Concave and Convex mirror applications'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.44)', 'BPSC TRE 2.0 (Q.45)']
              },
              quickRevisionPoints: [
                'Dentist & shaving mirrors use CONCAVE mirrors.',
                'Vehicle rear-view mirrors use CONVEX mirrors (wide field of view).',
                'Optical fiber and mirage are based on Total Internal Reflection (TIR).',
                'Myopia (near-sightedness) is corrected using a CONCAVE lens.',
                'Hypermetropia (far-sightedness) is corrected using a CONVEX lens.',
                '1 Horsepower (HP) = 746 Watts; 1 kWh = 3.6 × 10⁶ Joules.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sci-optics-1',
                  questionEn: 'Which type of lens is used by an optometrist to correct Myopia (near-sightedness)?',
                  questionHi: 'निकट दृष्टि दोष (मायोपिया) को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?',
                  options: [
                    { id: 'A', textEn: 'Convex lens', isCorrect: false },
                    { id: 'B', textEn: 'Concave lens', isCorrect: true },
                    { id: 'C', textEn: 'Cylindrical lens', isCorrect: false },
                    { id: 'D', textEn: 'Bifocal lens', isCorrect: false }
                  ],
                  explanationEn: 'Myopia causes light rays to converge in front of the retina. A diverging concave lens is used to push the focus back onto the retina.',
                  conceptTested: 'Concave lens for Myopia'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sci-optics-1',
                topicId: 'sci-topic-optics-mechanics',
                chapterId: 'sci-ch-physics',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'The phenomenon of "Mirage" observed in hot deserts during summer is based on which of the following optical principles?',
                questionTextHi: 'गर्मियों में रेगिस्तान में दिखाई देने वाला "मृगमरीचिका" (Mirage) का दृश्य निम्नलिखित में से किस प्रकाशिक सिद्धांत पर आधारित है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Total Internal Reflection of light', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Interference of light', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Diffraction of light', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Mirage is an optical illusion caused by total internal reflection (TIR) of light through successive layers of air of varying temperatures and densities near the hot desert surface.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-25',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 44,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: CHEMISTRY, SALTS & ACIDS
      // ----------------------------------------------------
      {
        id: 'sci-ch-chemistry',
        subjectKey: 'GENERAL_SCIENCE',
        chapterNumber: 2,
        slug: 'chemistry-acids-bases-salts-alloys',
        titleEn: 'Chemistry: Acids, Bases, pH Scale & Everyday Compounds',
        titleHi: 'रसायन विज्ञान: अम्ल, क्षार, pH पैमाना एवं दैनिक रासायनिक यौगिक',
        descriptionEn: 'pH scale, Litmus indicators, Baking soda, Bleaching powder, Plaster of Paris, Gypsum, Rusting of iron, and Common Alloys (Brass, Bronze, Solder).',
        descriptionHi: 'pH पैमाना, लिटमस पत्र, बेकिंग सोडा, विरंजक चूर्ण, प्लास्टर ऑफ पेरिस, जिप्सम, लोहे में जंग लगना (भार में वृद्धि), तथा प्रमुख मिश्र धातुएं।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          {
            id: 'sci-topic-ph-salts-alloys',
            chapterId: 'sci-ch-chemistry',
            topicNumber: 1,
            slug: 'ph-scale-salts-and-alloys',
            titleEn: 'pH Scale, Common Commercial Salts & Important Alloys',
            titleHi: 'pH पैमाना, प्रमुख व्यापारिक लवण एवं महत्वपूर्ण मिश्र धातुएं',
            descriptionEn: 'Chemical formulas and applications: NaHCO₃, CaOCl₂, CaSO₄·½H₂O, Brass (Cu+Zn), Bronze (Cu+Sn), and Rusting chemistry.',
            descriptionHi: 'रासायनिक सूत्र एवं उपयोग: बेकिंग सोडा (NaHCO₃), विरंजक चूर्ण (CaOCl₂), प्लास्टर ऑफ पेरिस (CaSO₄·½H₂O), पीतल (Cu+Zn), कांसा (Cu+Sn)।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.45), TRE 2.0 (Q.46) & TRE 3.0 (Q.48)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-ph-salts-alloys',
              topicId: 'sci-topic-ph-salts-alloys',
              titleEn: 'pH Scale, Common Commercial Salts & Important Alloys',
              titleHi: 'pH पैमाना, प्रमुख व्यापारिक लवण एवं महत्वपूर्ण मिश्र धातुएं',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the pH scale introduced by Sørensen (pH 7 is neutral; human blood is 7.35–7.45).',
                'Memorize chemical formulas of commercial salts: Baking soda (NaHCO₃), Washing soda (Na₂CO₃·10H₂O), Bleaching powder (CaOCl₂), Plaster of Paris (CaSO₄·½H₂O).',
                'Recall compositions of key alloys: Brass (Copper + Zinc), Bronze (Copper + Tin), Solder (Lead + Tin).',
                'Explain the chemical change during rusting of iron (hydrated ferric oxide Fe₂O₃·xH₂O; weight increases!).'
              ],
              introductionEn: '==Chemistry is interwoven with daily life: from baking soda releasing carbon dioxide to make dough spongy, to Plaster of Paris setting broken bones into solid gypsum.==\n\nLitmus indicator extracted from lichens turns red in acids and blue in bases, providing a simple visual measure of acidity alongside the mathematical pH scale.',
              introductionHi: 'दैनिक जीवन में प्रयुक्त होने वाले रसायन जैसे बेकिंग सोडा (NaHCO₃), विरंजक चूर्ण (CaOCl₂), तथा प्लास्टर ऑफ पेरिस (CaSO₄·½H₂O) से सीधे प्रश्न पूछे जाते हैं। मानव रक्त का pH मान 7.35–7.45 होता है।',
              conceptSections: [
                {
                  title: '1. The pH Scale & Natural Organic Acids',
                  contentMarkdownEn: '* **pH Scale (Sørensen, 1909):** pH < 7 is Acidic; pH = 7 is Neutral; pH > 7 is Basic. ==Human blood pH = 7.35 to 7.45== (slightly alkaline).\n* **Litmus (from Lichen):** Acid turns Blue → Red; Base turns Red → Blue.\n* **Natural Sources:** Vinegar (Acetic acid), Lemon (Citric acid), Tamarind (Tartaric acid), Tomato (Oxalic acid), Curd (Lactic acid), Ant sting (Methanoic / Formic acid HCOOH).'
                },
                {
                  title: '2. Four Most Tested Commercial Salts',
                  contentMarkdownEn: '* **1. Baking Soda (NaHCO₃):** Sodium Hydrogen Carbonate. Releases ==CO₂== when heated, making cakes soft and spongy.\n* **2. Washing Soda (Na₂CO₃·10H₂O):** Sodium Carbonate Decahydrate. Removes permanent hardness of water.\n* **3. Bleaching Powder (CaOCl₂):** Calcium Oxychloride. Produced by passing chlorine over slaked lime Ca(OH)₂; water disinfectant.\n* **4. Plaster of Paris (CaSO₄·½H₂O):** Calcium Sulphate Hemihydrate. Prepared by heating Gypsum (CaSO₄·2H₂O) at ==373 K (100°C)==.'
                },
                {
                  title: '3. Important Alloys & Rusting Phenomenon',
                  contentMarkdownEn: '* **Brass (पीतल):** ==Copper (Cu) + Zinc (Zn)==.\n* **Bronze (कांसा):** ==Copper (Cu) + Tin (Sn)==.\n* **Solder (टांका):** ==Lead (Pb) + Tin (Sn)==.\n* **Rusting of Iron:** Hydrated ferric oxide (==Fe₂O₃·xH₂O==). ==CRITICAL EXAM TRAP: The weight of iron INCREASES upon rusting== because oxygen and moisture chemically bond with iron atoms!'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Plaster of Paris (CaSO₄·½H₂O)',
                  definitionEn: 'Hemihydrate of calcium sulphate prepared by heating gypsum to 100°C, which rapidly sets hard on addition of water.',
                  definitionHi: 'जिप्सम को 373 K पर गर्म करके प्राप्त यौगिक जो जल मिलाने पर पुनः ठोस जिप्सम बन जाता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Alloys Memory Trigger',
                  formulaOrRule: 'Brass = Cu + Zn | Bronze = Cu + Sn | Solder = Pb + Sn',
                  explanationEn: 'Bronze has Z in name but Sn (Tin) in formula. Brass has No Z in name but Zn (Zinc) in formula.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Rusting Weight',
                  problemEn: 'What happens to the weight of an iron nail when it rusts in air?',
                  stepByStepSolutionEn: '1. Rust is Fe₂O₃·xH₂O.\n2. Atmospheric oxygen and water molecules attach to iron.\n3. The total mass increases.\n4. Answer: Increases.',
                  shortcutTrick: 'Rusting = Added Oxygen = Weight Increases!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking iron gets lighter as rust falls off.',
                  whyWrongEn: 'At the chemical level, oxidation adds oxygen and water mass to the iron, increasing its total weight.',
                  correctWayEn: 'Always choose "Increases".'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Plaster of Paris formula: CaSO₄·½H₂O (TRE 1.0 Q.45)',
                  'Weight of iron increases on rusting (TRE 2.0 Q.46)',
                  'Human blood pH: 7.35 to 7.45'
                ],
                commonDistractorTraps: ['Confusing POP (½H₂O) with Gypsum (2H₂O)'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.45)', 'BPSC TRE 2.0 (Q.46)']
              },
              quickRevisionPoints: [
                'pH scale ranges from 0 to 14; Human blood pH is 7.35–7.45.',
                'Litmus turns Red in Acid, Blue in Base.',
                'Baking soda is NaHCO₃; Washing soda is Na₂CO₃·10H₂O.',
                'Plaster of Paris is CaSO₄·½H₂O (made by heating gypsum at 373 K).',
                'Bleaching powder is CaOCl₂.',
                'During rusting, the weight of iron INCREASES.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sci-chem-1',
                  questionEn: 'What is the chemical formula of Plaster of Paris (POP)?',
                  questionHi: 'प्लास्टर ऑफ पेरिस (POP) का रासायनिक सूत्र क्या है?',
                  options: [
                    { id: 'A', textEn: 'CaSO₄·2H₂O', isCorrect: false },
                    { id: 'B', textEn: 'CaSO₄·½H₂O', isCorrect: true },
                    { id: 'C', textEn: 'CaCO₃', isCorrect: false },
                    { id: 'D', textEn: 'CaOCl₂', isCorrect: false }
                  ],
                  explanationEn: 'Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄·½H₂O). CaSO₄·2H₂O is Gypsum.',
                  conceptTested: 'Plaster of Paris formula'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sci-chem-1',
                topicId: 'sci-topic-ph-salts-alloys',
                chapterId: 'sci-ch-chemistry',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'When an iron nail gets rusted in moist air, its weight:',
                questionTextHi: 'जब नम हवा में लोहे की कील में जंग लग जाता है, तो उसका वजन:',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Increases', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Decreases', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Remains exactly unchanged', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Rusting involves the chemical addition of atmospheric oxygen and moisture to iron to form Fe₂O₃·xH₂O, which increases the total weight of the object.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 46,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: BIOLOGY, VITAMINS & HEALTH
      // ----------------------------------------------------
      {
        id: 'sci-ch-biology',
        subjectKey: 'GENERAL_SCIENCE',
        chapterNumber: 3,
        slug: 'biology-cell-vitamins-diseases-bihar',
        titleEn: 'Biology: Cell, Vitamins & Endemic Diseases (Kala-Azar)',
        titleHi: 'जीव विज्ञान: कोशिका, विटामिन एवं बिहार की स्थानिक बीमारियां (कालाजार)',
        descriptionEn: 'Cell organelles (Mitochondria, Ribosomes, Lysosomes), Human circulatory system & Blood groups, Vitamins and deficiency diseases, and Kala-Azar (Leishmania / Sandfly).',
        descriptionHi: 'कोशिकांग (माइटोकॉन्ड्रिया, राइबोसोम, लाइसोसोम), रक्त समूह (ओ-नेगेटिव एवं एबी-पॉजिटिव), विटामिन एवं हीनताजन्य रोग, तथा कालाजार (लीशमैनिया/बालू मक्खी)।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'sci-topic-vitamins-kalaazar',
            chapterId: 'sci-ch-biology',
            topicNumber: 1,
            slug: 'cell-vitamins-and-kala-azar-sandfly',
            titleEn: 'Cell Biology, Vitamins & Communicable Diseases (Kala-Azar in Bihar)',
            titleHi: 'कोशिका विज्ञान, विटामिन एवं संक्रामक रोग (बिहार में कालाजार)',
            descriptionEn: 'Mitochondria (ATP powerhouse), Lysosomes (suicide bags), Water vs Fat-soluble vitamins, Blood groups, and Kala-Azar transmission via Sandfly.',
            descriptionHi: 'माइटोकॉन्ड्रिया (पावरहाउस), लाइसोसोम (आत्मघाती थैली), जल एवं वसा में घुलनशील विटामिन, रक्त समूह, तथा सैंडफ्लाई (बालू मक्खी) द्वारा कालाजार का प्रसार।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 16,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.46), TRE 2.0 (Q.47) & TRE 3.0 (Q.49)',
            isStoryFormat: true,
            storyEra: 'Public Health in Bihar',
            tutorial: {
              id: 'tut-vitamins-kalaazar',
              topicId: 'sci-topic-vitamins-kalaazar',
              titleEn: 'Cell Biology, Vitamins & Communicable Diseases (Kala-Azar in Bihar)',
              titleHi: 'कोशिका विज्ञान, विटामिन एवं संक्रामक रोग (बिहार में कालाजार)',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify cell organelle functions: Mitochondria (Powerhouse), Ribosomes (Protein synthesis), Lysosomes (Suicide bags).',
                'Classify vitamins into Water-soluble (B, C) and Fat-soluble (A, D, E, K), with their scientific names and deficiency diseases.',
                'Understand human blood groups: ABO system discovered by Karl Landsteiner; Universal Donor (O-) and Universal Recipient (AB+).',
                'Trace the vector and pathogen of Kala-Azar (Black Fever): Protozoan Leishmania donovani transmitted by the Female Sandfly (Phlebotomus argentipes).'
              ],
              introductionEn: '==In the floodplains of the Ganga and Gandak in Bihar, high humidity and alluvial soil historically nurtured the Sandfly (Phlebotomus argentipes).==\n\nThis insect transmits the protozoan parasite Leishmania donovani, causing Visceral Leishmaniasis, known as "Kala-Azar". Through concerted public health measures, Bihar has achieved massive reductions in cases, making it one of the most frequently asked real-world questions in BPSC.',
              introductionHi: 'बिहार के मैदानी इलाकों में सैंडफ्लाई (बालू मक्खी) लीशमैनिया डोनोवानी नामक प्रोटोजोआ परजीवी को फैलाती है, जिससे कालाजार होता है। बिहार सरकार ने कालाजार उन्मूलन के लिए सघन अभियान चलाया है।',
              conceptSections: [
                {
                  title: '1. Cell Organelles & Functions',
                  contentMarkdownEn: '* **Mitochondria:** ==Powerhouse of the Cell==; synthesizes energy in the form of ==ATP (Adenosine Triphosphate)==. Possesses its own circular DNA and ribosomes.\n* **Ribosomes:** ==Protein Factory==; site of protein translation.\n* **Lysosomes:** ==Suicidal Bags==; contain hydrolytic digestive enzymes.'
                },
                {
                  title: '2. Vitamins: Classification & Deficiencies',
                  contentMarkdownEn: '* **Water-Soluble:** ==Vitamins B-complex and C== (excreted in urine; not stored).\n* **Fat-Soluble:** ==Vitamins A, D, E, K (KEDA)== (stored in liver).\n* **High-Yield Details:**\n  * **Vitamin A (Retinol):** Night Blindness (रतोंधी).\n  * **Vitamin B₁ (Thiamine):** Beriberi.\n  * **Vitamin B₁₂ (Cyanocobalamin):** Contains ==Cobalt metal==! Deficiency causes Pernicious Anemia.\n  * **Vitamin C (Ascorbic Acid):** Scurvy (bleeding gums). ==Easily destroyed by cooking heat!==\n  * **Vitamin D (Calciferol):** Rickets in children; Osteomalacia in adults.\n  * **Vitamin K (Phylloquinone):** Essential for ==Blood Clotting==.'
                },
                {
                  title: '3. Communicable Diseases & Bihar Endemic (Kala-Azar)',
                  contentMarkdownEn: '* **==Kala-Azar (Visceral Leishmaniasis)==:** Pathogen: Protozoan ==Leishmania donovani==. Vector: ==Female Sandfly (बालू मक्खी / Phlebotomus argentipes)==. Enlarges liver and spleen.\n* **Malaria:** Pathogen: Protozoan ==Plasmodium==. Vector: ==Female Anopheles mosquito==. Medicine: Quinine from ==Cinchona bark==.\n* **Dengue:** Virus transmitted by ==Aedes aegypti mosquito== (day-biting).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Kala-Azar (कालाजार)',
                  definitionEn: 'A slow progressing indigenous disease caused by protozoan parasite Leishmania donovani, transmitted by the bite of the sandfly.',
                  definitionHi: 'लीशमैनिया प्रोटोजोआ द्वारा बालू मक्खी के काटने से होने वाला संक्रामक बुखार।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Vitamin Solubility Mnemonic',
                  formulaOrRule: 'K-E-D-A (कीड़ा) = Fat Soluble | B and C = Water Soluble',
                  explanationEn: 'KEDA dissolves in fat; B and C dissolve in water.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Kala-Azar Vector',
                  problemEn: 'Which insect transmits Kala-Azar in Bihar?',
                  stepByStepSolutionEn: '1. Kala-Azar is visceral leishmaniasis.\n2. The transmitting carrier is the Sandfly (Phlebotomus).\n3. Answer: Sandfly.',
                  shortcutTrick: 'Kala-Azar = Sandfly (बालू मक्खी)!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Vitamin C can be stored in the body for months.',
                  whyWrongEn: 'Vitamin C is water-soluble and excreted regularly in urine; excess cannot be stored.',
                  correctWayEn: 'Remember that Vitamin C requires daily dietary intake and degrades on cooking.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Kala-Azar transmitted by Sandfly (TRE 1.0 Q.46, TRE 3.0 Q.49)',
                  'Vitamin C destroyed by cooking (TRE 3.0 Q.47)',
                  'Mitochondria is powerhouse of cell (TRE 2.0 Q.47)',
                  'Vitamin B12 contains Cobalt'
                ],
                commonDistractorTraps: ['Confusing Sandfly (Kala-Azar) with Tsetse fly (Sleeping sickness)'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.46)', 'BPSC TRE 3.0 (Q.47, Q.49)']
              },
              quickRevisionPoints: [
                'Mitochondria is Powerhouse of the cell (ATP).',
                'Lysosomes are Suicidal Bags; Ribosomes are Protein Factories.',
                'Water-soluble: B and C; Fat-soluble: K, E, D, A (KEDA).',
                'Vitamin C (Ascorbic acid) is destroyed by cooking heat; prevents Scurvy.',
                'Vitamin B12 contains Cobalt metal.',
                'Kala-Azar caused by Leishmania donovani and transmitted by Sandfly.',
                'Quinine is obtained from the bark of Cinchona tree.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sci-bio-1',
                  questionEn: 'Which insect serves as the primary vector for transmitting the protozoan parasite causing Kala-Azar (Visceral Leishmaniasis) in Bihar?',
                  questionHi: 'बिहार में कालाजार (लीशमैनियासिस) फैलाने वाले प्रोटोजोआ परजीवी को संचारित करने के लिए कौन सा कीट प्राथमिक वाहक के रूप में कार्य करता है?',
                  options: [
                    { id: 'A', textEn: 'Female Anopheles mosquito', isCorrect: false },
                    { id: 'B', textEn: 'Sandfly (Phlebotomus)', isCorrect: true },
                    { id: 'C', textEn: 'Tsetse fly', isCorrect: false },
                    { id: 'D', textEn: 'Aedes aegypti mosquito', isCorrect: false }
                  ],
                  explanationEn: 'The Sandfly (Phlebotomus argentipes) transmits Leishmania donovani, the causative protozoan parasite of Kala-Azar.',
                  conceptTested: 'Kala-Azar vector Sandfly'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sci-bio-1',
                topicId: 'sci-topic-vitamins-kalaazar',
                chapterId: 'sci-ch-biology',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Which of the following vitamins is water-soluble and is easily destroyed when food is heated or cooked?',
                questionTextHi: 'निम्नलिखित में से कौन सा विटामिन जल में घुलनशील है और भोजन को गर्म करने या पकाने पर आसानी से नष्ट हो जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Vitamin A', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Vitamin C', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Vitamin D', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Vitamin C (Ascorbic acid) is water-soluble and highly heat-labile, meaning it degrades and oxidizes rapidly upon heating or cooking.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 47,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
