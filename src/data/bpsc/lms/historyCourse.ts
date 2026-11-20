// Comprehensive History of India & Bihar Course for BPSC TRE 4.0
// Covers Ancient India, Medieval India, Modern Freedom Struggle, and Bihar Special History
// Includes authentic stories, timelines, yellow highlighters, mnemonics, and verified BPSC PYQs.

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_HISTORY_SUBJECTS: LMSSubject[] = [
  {
    key: 'INDIAN_HISTORY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian & Bihar History (Ancient, Medieval & Modern)',
    displayNameHi: 'भारत एवं बिहार का इतिहास (प्राचीन, मध्यकालीन एवं आधुनिक)',
    iconName: 'History',
    descriptionEn: 'Complete textbook-level historical curriculum from Indus Valley and Magadha Empire to 1857 Revolt, Champaran Satyagraha, and Indian Independence.',
    descriptionHi: 'सिंधु घाटी सभ्यता एवं मगध साम्राज्य से लेकर 1857 की क्रांति, चंपारण सत्याग्रह एवं भारतीय स्वतंत्रता संग्राम तक संपूर्ण इतिहास।',
    chapters: [
      // CHAPTER 1: ANCIENT INDIA - INDUS VALLEY, VEDIC & RISE OF MAGADHA
      {
        id: 'hist-ch-ancient-magadha',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 1,
        slug: 'ancient-india-indus-vedic-magadha',
        titleEn: 'Ancient India: Harappa, Vedic Period & Rise of Magadha',
        titleHi: 'प्राचीन भारत: हड़प्पा, वैदिक काल एवं मगध साम्राज्य का उत्कर्ष',
        descriptionEn: 'From Bronze Age urban planning and Vedic literature to the 16 Mahajanapadas and Magadhan supremacy.',
        descriptionHi: 'कांस्य युगीन नगर नियोजन एवं वैदिक साहित्य से लेकर 16 महाजनपदों और मगध के उत्थान का संपूर्ण अध्ययन।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'hist-topic-indus-valley',
            chapterId: 'hist-ch-ancient-magadha',
            topicNumber: 1,
            slug: 'indus-valley-civilisation',
            titleEn: 'Indus Valley Civilisation: Urban Planning, Sites & Trade',
            titleHi: 'सिंधु घाटी सभ्यता: नगर नियोजन, प्रमुख स्थल एवं व्यापार',
            descriptionEn: 'Grid system, Great Bath, dockyards, bronze sculpture, seals and decline theories.',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Lothal Dockyard) & TRE 2.0 (Great Bath)',
            isStoryFormat: true,
            storyEra: 'Bronze Age (~2500 BCE – 1750 BCE)',
            tutorial: {
              id: 'tut-indus-valley',
              topicId: 'hist-topic-indus-valley',
              titleEn: 'The First Urban Marvel of India: Harappan Civilisation',
              titleHi: 'भारत की प्रथम नगरीय क्रांति: सिंधु घाटी सभ्यता',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the grid pattern, baked brick architecture, and underground drainage of Harappan cities.',
                'Identify major sites: Harappa (Ravi), Mohenjo-daro (Indus), Lothal (Bhogava), Kalibangan (Ghaggar), Dholavira (Rann of Kutch).',
                'Analyze the economic life: Bronze metallurgy, steatite seals, lapis lazuli trade with Mesopotamia (Meluhha).',
                'Master the unique features of Dholavira (3-part division & water reservoir) and Lothal (artificial tidal dockyard).'
              ],
              introductionEn: '==Around 2600 BCE, while Europeans were still in the Stone Age, the northwestern plains of India witnessed humanity\'s most sophisticated planned cities.==\n\nNo towering palaces or gigantic tombs were built to celebrate tyrannical despots. Instead, the Harappans pioneered ==standardised burnt brick architecture, underground drainage systems, public baths, and civic sanitation== that modern cities often fail to achieve even today.',
              introductionHi: 'लगभग 2600 ईसा पूर्व में, जब दुनिया के अधिकांश हिस्से आदिम अवस्था में थे, तब भारत की धरती पर सिंधु घाटी सभ्यता के रूप में एक अत्यंत विकसित, सुनियोजित नगरीय संस्कृति का उदय हुआ।',
              conceptSections: [
                {
                  title: '1. Town Planning & Revolutionary Drainage Architecture',
                  contentMarkdownEn: '### The Grid Pattern (Chessboard Layout)\n* Streets intersected strictly at ==right angles (90°)==, dividing cities into rectangular blocks.\n* **Baked Bricks in 4:2:1 Ratio**: Houses, granaries, and city walls were built with burnt bricks having uniform dimensions: Length:Breadth:Thickness = ==4 : 2 : 1==.\n* **Citadel (Upper Town) vs Lower Town**: Most cities had two parts: a fortified Western Citadel (for administration and public rituals) and an expansive Eastern Lower Town (residential quarters for common citizens).\n* ==Dholavira Exception==: Unlike Harappa and Mohenjo-daro which were divided into 2 parts, **Dholavira (Kutch, Gujarat)** was uniquely divided into ==three distinct parts== (Citadel, Middle Town, Lower Town) with massive stone reservoirs.',
                  tableData: {
                    headers: ['Indus Site', 'River', 'Current Location', 'Key Archaeological Discovery'],
                    rows: [
                      ['Harappa', 'Ravi (Left bank)', 'Punjab, Pakistan', 'Row of 6 Granaries, Stone Dancing Nataraja, R-37 Cemetery'],
                      ['Mohenjo-daro', 'Indus (Right bank)', 'Sindh, Pakistan', 'Great Bath (बिटुमेन लेपित), Great Granary, Bronze Dancing Girl, Pashupati Seal'],
                      ['Lothal', 'Bhogava', 'Gujarat (Gulf of Khambhat)', 'Tidal Brick Dockyard (गोदीवाड़ा), Rice husk, Bead-making factory, Double burial'],
                      ['Kalibangan', 'Ghaggar', 'Rajasthan (Hanumangarh)', 'Ploughed field (जुता हुआ खेत), Fire altars (अग्निकुंड), Camel bones, Black bangles'],
                      ['Dholavira', 'Luni basin', 'Gujarat (Khadir Bet)', 'Three-tier city division, Giant water reservoir, 10-letter Harappan Signboard'],
                      ['Chanhudaro', 'Indus', 'Sindh, Pakistan', 'Only city WITHOUT a Citadel, Lipstick, Inkpot, Bead factory']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Examiner Trap: Dockyard vs Citadel',
                    textEn: 'BPSC frequently asks which site possessed an artificial tidal dockyard. The answer is ==Lothal== on the Bhogava river. Furthermore, Chanhudaro is the only Indus city completely lacking a fortified Citadel!',
                    textHi: 'लोथल (भोगवा नदी) एकमात्र ऐसा स्थल था जहाँ कृत्रिम गोदीवाड़ा (Dockyard) मिला है। चन्हूदड़ो एकमात्र ऐसा शहर था जिसमें कोई दुर्ग (Citadel) नहीं था।'
                  }
                },
                {
                  title: '2. Society, Economy, Seals & Script',
                  contentMarkdownEn: '### The Steatite Pashupati Seal & Proto-Shiva\n* Found at Mohenjo-daro, a three-faced seated deity wearing a horned headdress is surrounded by ==5 animals: Elephant, Tiger, Rhinoceros, Buffalo, and two Antelopes/Deer== beneath the stool.\n* ==Script==: Pictographic and **Boustrophedon** (written right-to-left in the first line, and left-to-right in the second line). It remains undeciphered.\n* ==Trade with Mesopotamia==: Sumerian cuneiform texts refer to trade with **Meluhha** (the ancient name for the Indus region), exporting carnelian beads, copper, and ivory.\n* ==Absence of Iron and Horse Dominance==: Harappans were a Bronze Age culture using Copper + Tin = Bronze. ==They did NOT know the use of Iron (Loha)==. Iron was discovered later during the Later Vedic age (~1000 BCE at Atranjikhera).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Boustrophedon Script (बूस्ट्रोफीडन लिपि)',
                  definitionEn: 'An ancient writing system written in alternating directions: from right to left in one line, and left to right in the next line.',
                  definitionHi: 'प्रारंभ में दाएं से बाएं और अगली पंक्ति में बाएं से दाएं लिखी जाने वाली सर्पिलाकार लिपि।'
                },
                {
                  term: 'Meluhha (मेलुहा)',
                  definitionEn: 'The cuneiform name given by ancient Mesopotamian Sumerians to the Indus Valley Civilisation trading partner.',
                  definitionHi: 'मेसोपोटामिया के सुमेरियाई अभिलेखों में सिंधु घाटी सभ्यता के लिए प्रयुक्त नाम।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Harappan Brick Standard Ratio',
                  formulaOrRule: 'Length : Breadth : Thickness = 4 : 2 : 1',
                  explanationEn: 'Strict dimensional standardization observed across thousands of kilometers from Sutkagen Dor to Alamgirpur.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Dockyard Location',
                  problemEn: 'At which of the following Harappan sites was an artificial brick dockyard discovered?',
                  stepByStepSolutionEn: '1. Recall maritime trade hubs of Harappa in Gujarat.\n2. Lothal on the Bhogava river connected the Gulf of Cambay to the Arabian Sea.\n3. Archaeological excavations by S.R. Rao revealed the massive brick basin used as a tidal dockyard.\n4. Therefore, correct answer is Lothal.',
                  shortcutTrick: 'Dockyard = Sea Port = Lothal (Bhogava River, Gujarat)!'
                }
              ],
              practicalApplications: ['Directly yields 1 to 2 questions in BPSC General Studies (Part 2) paper.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Harappans used iron weapons in warfare.',
                  whyWrongEn: 'Harappan civilisation was purely Chalcolithic and Bronze Age. Iron was unknown until 1000 BCE in the Later Vedic era.',
                  correctWayEn: 'Always associate Harappan tools with Bronze, Copper, Stone, and Steatite—never Iron.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Location of Lothal Dockyard (Gujarat, Bhogava river)',
                  'Great Bath location (Mohenjo-daro)',
                  'Ploughed field evidence (Kalibangan, Rajasthan)',
                  'Metals known to Harappans (Copper, Bronze, Gold, Silver; NO IRON)'
                ],
                commonDistractorTraps: [
                  'Confusing Harappa on Ravi with Mohenjo-daro on Indus',
                  'Claiming horse was the primary religious animal (it was the Unicorn bull)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.31 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.32 Series A)'
                ]
              },
              quickRevisionPoints: [
                'First discovered site: Harappa (1921 by Daya Ram Sahni under Sir John Marshall).',
                'Mohenjo-daro discovered in 1922 by R.D. Banerjee (Mound of the Dead).',
                'Great Bath: Mohenjo-daro, lined with natural bitumen/tar waterproofing.',
                'Lothal: Brick tidal dockyard, double burial, rice husk evidence.',
                'Kalibangan: Furrowed/ploughed field, fire altars.',
                'Dholavira: Divided into 3 parts, unique stone architecture, water reservoir.',
                'Metals: Copper, Bronze, Silver, Gold known; IRON UNKNOWN.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-ivc-1',
                  questionEn: 'Which of the following Indus Valley Civilisation sites is famously known for possessing an artificial brick dockyard?',
                  options: [
                    { id: 'a', textEn: 'Kalibangan', isCorrect: false },
                    { id: 'b', textEn: 'Lothal', isCorrect: true },
                    { id: 'c', textEn: 'Mohenjo-daro', isCorrect: false },
                    { id: 'd', textEn: 'Banawali', isCorrect: false }
                  ],
                  explanationEn: 'Lothal, situated on the Bhogava river in Gujarat, possessed a massive burnt-brick tidal dockyard connecting to the Gulf of Khambhat.',
                  conceptTested: 'Harappan Maritime Trade & Sites'
                },
                {
                  id: 'kc-ivc-2',
                  questionEn: 'Which of the following metals was completely UNKNOWN to the people of the Harappan Civilisation?',
                  options: [
                    { id: 'a', textEn: 'Copper', isCorrect: false },
                    { id: 'b', textEn: 'Bronze', isCorrect: false },
                    { id: 'c', textEn: 'Iron', isCorrect: true },
                    { id: 'd', textEn: 'Gold', isCorrect: false }
                  ],
                  explanationEn: 'Harappan civilisation was a Bronze Age civilisation. Iron was not known to Harappans; it appeared in India during the Later Vedic period (~1000 BCE).',
                  conceptTested: 'Metallurgy in Ancient India'
                }
              ]
            },
            practiceQuestions: []
          },
          {
            id: 'hist-topic-mahajanapadas-magadha',
            chapterId: 'hist-ch-ancient-magadha',
            topicNumber: 2,
            slug: 'mahajanapadas-and-rise-of-magadha',
            titleEn: '16 Mahajanapadas & The Rise of Magadhan Empire in Bihar',
            titleHi: '16 महाजनपद एवं बिहार में मगध साम्राज्य का उत्कर्ष',
            descriptionEn: 'Haryanka, Shishunaga, Nanda dynasties, Bimbisara, Ajatashatru and Rajgir to Pataliputra.',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Ajatashatru & Rajgir), TRE 2.0 (First Buddhist Council) & TRE 3.0 (Pataliputra capital transfer)',
            isStoryFormat: true,
            storyEra: '6th Century BCE – 4th Century BCE',
            tutorial: {
              id: 'tut-mahajanapadas-magadha',
              topicId: 'hist-topic-mahajanapadas-magadha',
              titleEn: 'Why Did Bihar Become the Epicenter of India\'s First Empire?',
              titleHi: 'मगध का उत्कर्ष: बिहार कैसे बना भारत के प्रथम साम्राज्य का केंद्र?',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the transition from Janapadas to the 16 Mahajanapadas mentioned in Anguttara Nikaya.',
                'Identify the three Mahajanapadas located in ancient Bihar: Magadha, Vajji, and Anga.',
                'Analyze the geopolitical, economic, and strategic reasons for Magadha\'s rise over all other kingdoms.',
                'Track the dynastic chronology: Haryanka Dynasty (Bimbisara, Ajatashatru, Udayin) -> Shishunaga -> Nanda (Mahapadma Nanda).'
              ],
              introductionEn: '==In the 6th century BCE, the political gravity of the Indian subcontinent shifted decisively to southern Bihar (Magadha).==\n\nSurrounded by natural fortresses of five hills at **Rajgriha (Girivraja)**, protected by the holy confluence of Ganga, Son, and Gandak rivers at **Pataliputra**, and blessed with rich iron ore deposits in the nearby Chhota Nagpur hills, Magadha crushed all rivals to forge India\'s first great empire.',
              introductionHi: 'छठी शताब्दी ईसा पूर्व में भारत का राजनीतिक केंद्र बिहार बना। अंगुत्तर निकाय के अनुसार 16 महाजनपदों में से तीन महाजनपद—मगध, वज्जि और अंग—प्राचीन बिहार की भूमि पर स्थित थे।',
              conceptSections: [
                {
                  title: '1. The 16 Mahajanapadas & Bihar\'s Three Great Powers',
                  contentMarkdownEn: 'According to the Buddhist text **Anguttara Nikaya** and Jain text **Bhagavati Sutra**, 16 great kingdoms (Mahajanapadas) flourished in northern India in the 6th century BCE.\n\n### Bihar\'s 3 Mahajanapadas:\n1. ==Magadha==: Capital at **Girivraja / Rajagriha** (later shifted to Pataliputra). Modern Patna and Gaya districts.\n2. ==Vajji Confederacy==: Capital at **Vaishali**. The world\'s **first democratic republic**, comprised of eight clans (Licchavis were the most prominent).\n3. ==Anga==: Capital at **Champa** (near modern Bhagalpur and Munger). Later conquered and annexed to Magadha by King Bimbisara.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'World\'s First Republic: Vaishali (Licchavis)',
                    textEn: 'Vaishali in Bihar is globally celebrated as the birthplace of the world\'s first recorded republican democracy, governed by an elected assembly of 7,707 Raja rajas.',
                    textHi: 'वैशाली (लिच्छवि गणराज्य) को विश्व का प्रथम गणतंत्र माना जाता है, जहाँ राजा का चयन लोकतांत्रिक सभा द्वारा होता था।'
                  }
                },
                {
                  title: '2. Dynastic Succession of Magadha Empire',
                  contentMarkdownEn: '### I. Haryanka Dynasty (पितृहंता वंश)\n* **Bimbisara (544–492 BCE)**: Founder. Adopted matrimonial alliances (married Kosala Devi, Chellana of Licchavi, Khema of Madra). Sent his royal physician **Jivaka** to treat Gautama Buddha and King Pradyota of Avanti.\n* **Ajatashatru (492–460 BCE)**: Imprisoned his father Bimbisara. Conquered Kosala and Vaishali using two terrifying new military weapons: ==Mahashilakantaka== (catapult throwing huge stones) and ==Rathamusala== (scythed chariot with rotating blades). Built the initial fort at Pataligram.\n* **Udayin (460–444 BCE)**: Formally ==founded Pataliputra== at the sacred confluence of rivers Ganga and Son, and shifted the imperial capital from Rajgriha to Pataliputra.\n\n### II. Shishunaga Dynasty\n* **Shishunaga**: Destroyed the 100-year-old rivalry with Avanti (Pradyota dynasty) by capturing Ujjain.\n* **Kalashoka (Kakavarna)**: Convened the **Second Buddhist Council at Vaishali in 383 BCE** (presided by Sabakami), where Buddhism first split into Sthaviravadins and Mahasanghikas.\n\n### III. Nanda Dynasty (First Non-Kshatriya Empire)\n* **Mahapadma Nanda (Ekarat / Sarvakshatrantaka)**: Eradicated Kshatriya rulers, earning the title *Ekarat* (Sole Emperor). Held an immense standing army.\n* **Dhana Nanda**: Extremely wealthy and tyrannical ruler. Alexander the Great invaded India during his reign (326 BCE), but Alexander\'s mutinous soldiers refused to advance beyond the Beas River, terrified of Dhana Nanda\'s colossal army of 200,000 infantry and 6,000 war elephants. He was eventually overthrown by Chandragupta Maurya and Chanakya in 321 BCE.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Mahashilakantaka (महाशिलाकंटक)',
                  definitionEn: 'An ancient catapult war engine developed by Ajatashatru to hurl giant boulders across long distances against Vaishali forts.',
                  definitionHi: 'अजातशत्रु द्वारा आविष्कृत बड़े पत्थरों को फेंकने वाला प्राचीन युद्ध यंत्र।'
                },
                {
                  term: 'Ekarat (एकराट्)',
                  definitionEn: 'Title assumed by Mahapadma Nanda meaning "Sole Sovereign Monarch of the entire earth".',
                  definitionHi: 'महापद्म नंद द्वारा धारण की गई उपाधि जिसका अर्थ है \'समस्त पृथ्वी का एकमात्र सम्राट\'।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Chronology Mnemonic for Magadhan Dynasties',
                  formulaOrRule: 'HASN-M-SK (Haryanka -> Shishunaga -> Nanda -> Maurya -> Shunga -> Kanva)',
                  explanationEn: 'Enables instant chronological ordering for BPSC history questions.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Capital Shift to Pataliputra',
                  problemEn: 'Which ruler of Magadha transferred the capital from Rajgriha to Pataliputra for the first time?',
                  stepByStepSolutionEn: '1. Bimbisara ruled from Rajgriha (Girivraja).\n2. Ajatashatru fortified Pataligram as a military outpost.\n3. Udayin formally established the imperial capital at Pataliputra (Patna) at the confluence of Ganga and Son.\n4. Hence, Udayin is the correct answer.',
                  shortcutTrick: 'Capital Shift = Udayin!'
                }
              ],
              practicalApplications: ['Essential foundation for all Bihar GK and Ancient History questions in TRE 4.0.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Ajatashatru shifted the capital to Pataliputra.',
                  whyWrongEn: 'Ajatashatru only built the military garrison at Pataligram. It was his son Udayin who officially shifted the capital.',
                  correctWayEn: 'Ajatashatru = Fort at Pataligram; Udayin = Capital transfer to Pataliputra.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Who shifted the capital to Pataliputra? (Udayin)',
                  'Founder of the world\'s first republic (Licchavis of Vaishali)',
                  'Royal physician sent by Bimbisara (Jivaka)',
                  'Ruler during Alexander\'s invasion (Dhana Nanda)'
                ],
                commonDistractorTraps: [
                  'Confusing Shishunaga with Mahapadma Nanda',
                  'Confusing Kalashoka with Ashoka for Buddhist councils'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.33 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.33 Series A)'
                ]
              },
              quickRevisionPoints: [
                '16 Mahajanapadas source: Anguttara Nikaya (Buddhist) & Bhagavati Sutra (Jain).',
                'Three Bihar Mahajanapadas: Magadha (Rajgir), Vajji (Vaishali), Anga (Champa).',
                'Bimbisara: Haryanka dynasty founder, married Kosala Devi, sent Jivaka.',
                'Ajatashatru: First Buddhist Council at Rajgir (Sattapani cave, 483 BCE).',
                'Udayin: Shifted capital to Pataliputra.',
                'Kalashoka: Second Buddhist Council at Vaishali (383 BCE).',
                'Dhana Nanda: Contemporary of Alexander the Great (326 BCE).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-mag-1',
                  questionEn: 'Who among the following Magadhan rulers transferred the imperial capital from Rajgriha to Pataliputra?',
                  options: [
                    { id: 'a', textEn: 'Bimbisara', isCorrect: false },
                    { id: 'b', textEn: 'Ajatashatru', isCorrect: false },
                    { id: 'c', textEn: 'Udayin', isCorrect: true },
                    { id: 'd', textEn: 'Mahapadma Nanda', isCorrect: false }
                  ],
                  explanationEn: 'Udayin, son of Ajatashatru, founded Pataliputra at the confluence of Ganga and Son rivers and transferred the capital from Rajgriha.',
                  conceptTested: 'Haryanka Dynasty & Capital Transfers'
                },
                {
                  id: 'kc-mag-2',
                  questionEn: 'Which dynasty was ruling over Magadha when Alexander the Great invaded northwestern India in 326 BCE?',
                  options: [
                    { id: 'a', textEn: 'Maurya Dynasty', isCorrect: false },
                    { id: 'b', textEn: 'Nanda Dynasty (Dhana Nanda)', isCorrect: true },
                    { id: 'c', textEn: 'Haryanka Dynasty', isCorrect: false },
                    { id: 'd', textEn: 'Shishunaga Dynasty', isCorrect: false }
                  ],
                  explanationEn: 'Dhana Nanda of the Nanda Dynasty was ruling Magadha when Alexander invaded India in 326 BCE.',
                  conceptTested: 'Ancient Invasions & Dynasties'
                }
              ]
            },
            practiceQuestions: []
          }
        ]
      },

      // CHAPTER 2: JAINISM, BUDDHISM & MAURYAN EMPIRE
      {
        id: 'hist-ch-buddhism-mauryas',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 2,
        slug: 'jainism-buddhism-and-mauryan-empire',
        titleEn: 'Jainism, Buddhism & The Great Mauryan Empire',
        titleHi: 'जैन धर्म, बौद्ध धर्म एवं महान मौर्य साम्राज्य',
        descriptionEn: 'Gautama Buddha, Mahavira, 4 Buddhist Councils, Chandragupta, Chanakya Arthashastra, and Ashoka\'s Dhamma.',
        descriptionHi: 'गौतम बुद्ध, महावीर स्वामी, बौद्ध संगीतियां, चंद्रगुप्त मौर्य, कौटिल्य का अर्थशास्त्र एवं अशोक का धम्म।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'hist-topic-buddhism-jainism',
            chapterId: 'hist-ch-buddhism-mauryas',
            topicNumber: 1,
            slug: 'buddhism-and-jainism-in-bihar',
            titleEn: 'Buddhism and Jainism: Philosophies, Councils & Bihar Roots',
            titleHi: 'बौद्ध एवं जैन धर्म: दर्शन, संगीतियाँ एवं बिहार से सम्बद्धता',
            descriptionEn: 'Four Noble Truths, Eightfold Path, Triratna, 4 Buddhist councils with rulers, venues and presidents.',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Highest-yield topic across all BPSC exams (TRE 1.0, 2.0, 3.0 asked multiple questions on Buddhist Councils)',
            isStoryFormat: true,
            storyEra: '6th Century BCE',
            tutorial: {
              id: 'tut-buddhism-jainism',
              topicId: 'hist-topic-buddhism-jainism',
              titleEn: 'The Spiritual Awakening of Bihar: Buddha and Mahavira',
              titleHi: 'बिहार की पावन धरती: भगवान बुद्ध एवं भगवान महावीर का दर्शन',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Master the life events of Gautama Buddha: Birth (Lumbini), Enlightenment (Bodh Gaya), First Sermon (Sarnath), Mahaparinirvana (Kushinagar).',
                'Memorize the Four Buddhist Councils (Venue, Patron King, Presiding Monk, Outcome).',
                'Understand Vardhamana Mahavira: Kundagrama (Vaishali), Kaivalya at Jimbhikagrama, Nirvana at Pawapuri.',
                'Analyze the Core Doctrines: Four Noble Truths, Ashtangika Marga, Syadvada, Triratna.'
              ],
              introductionEn: '==Bihar is the sacred cradle of two of humanity\'s greatest ethical philosophies: Buddhism and Jainism.==\n\nUnder the shade of the sacred Bodhi tree at **Uruvela (Bodh Gaya)**, Siddhartha Gautama attained supreme enlightenment to become the Buddha. Just a few miles away, at **Kundagrama (Vaishali)** and **Pawapuri (Nalanda)**, Vardhamana Mahavira systematized Jainism with his absolute doctrine of *Ahimsa* (non-violence).',
              introductionHi: 'बिहार की धरती पर विश्व को शांति, अहिंसा और करुणा का मार्ग दिखाने वाले तथागत बुद्ध और तीर्थंकर महावीर का प्राकट्य हुआ।',
              conceptSections: [
                {
                  title: '1. The Four Buddhist Councils (Master Grid for BPSC TRE)',
                  contentMarkdownEn: 'BPSC examiners almost **never skip** asking about the four Buddhist councils. Memorize this table completely:',
                  tableData: {
                    headers: ['Council', 'Year', 'Venue', 'Patron King', 'President', 'Significance / Outcome'],
                    rows: [
                      ['1st Council', '483 BCE', 'Rajagriha (Sattapani Cave)', 'Ajatashatru (Haryanka)', 'Mahakassapa', 'Compilation of Sutta Pitaka (by Ananda) & Vinaya Pitaka (by Upali)'],
                      ['2nd Council', '383 BCE', 'Vaishali', 'Kalashoka (Shishunaga)', 'Sabakami', 'First ideological schism: Sthaviravadins vs Mahasanghikas'],
                      ['3rd Council', '250 BCE', 'Pataliputra (Patna)', 'Ashoka (Maurya)', 'Moggaliputta Tissa', 'Compilation of Abhidhamma Pitaka; Missionaries sent abroad'],
                      ['4th Council', '72 CE', 'Kundalvana (Kashmir)', 'Kanishka (Kushana)', 'Vasumitra (VP: Asvaghosha)', 'Final division into Hinayana (Lesser Vehicle) & Mahayana (Greater Vehicle)']
                    ]
                  },
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Mnemonic to Remember 4 Buddhist Council Kings',
                    textEn: '==AK-AK==: **A**jatashatru (1st) -> **K**alashoka (2nd) -> **A**shoka (3rd) -> **K**anishka (4th). Venue Mnemonic: **R-V-P-K** (Rajgir -> Vaishali -> Pataliputra -> Kashmir).',
                    textHi: 'राजाओं का क्रम: ==AK-AK== (अजातशत्रु, कालाशोक, अशोक, कनिष्क)। स्थलों का क्रम: ==R-V-P-K== (राजगृह, वैशाली, पाटलिपुत्र, कुंडलवन/कश्मीर)।'
                  }
                },
                {
                  title: '2. Jainism & Lord Mahavira in Bihar',
                  contentMarkdownEn: '### Vardhamana Mahavira (24th Tirthankara)\n* **Birth**: 540 BCE at ==Kundagrama near Vaishali== (Jnatrika Kshatriya clan).\n* **Kaivalya (Enlightenment)**: At age 42, on the banks of **Rijupalika River** under a Sal tree at Jimbhikagrama.\n* **Mahaparinirvana**: At age 72 (468 BCE) at ==Pawapuri (near Nalanda/Rajgir)==, where the famous **Jal Mandir** stands today.\n* **The Five Great Vows (Pancha Mahavrata)**: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Aparigraha (non-possession), and ==Brahmacharya (celibacy - added by Mahavira)==. The first four were taught by the 23rd Tirthankara, Parshvanatha.\n* **First Jain Council**: Held at **Pataliputra (Patna)** in 300 BCE, presided over by **Sthulabhadra**, where the Jain canonical literature was compiled and Jains split into **Digambaras** (sky-clad, under Bhadrabahu) and **Shvetambaras** (white-clad, under Sthulabhadra).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Dharmachakrapravartana (धर्मचक्रप्रवर्तन)',
                  definitionEn: 'The "Turning of the Wheel of Law", signifying Gautama Buddha\'s historic first sermon delivered to his five disciples at the Deer Park in Sarnath.',
                  definitionHi: 'सारनाथ के मृगदाव में तथागत बुद्ध द्वारा अपने 5 शिष्यों को दिया गया प्रथम उपदेश।'
                },
                {
                  term: 'Syadvada / Anekantavada (स्याद्वाद / अनेकांतवाद)',
                  definitionEn: 'The Jain epistemological doctrine of pluralism and conditional truth, asserting that ultimate reality is multi-faceted and cannot be expressed in a single absolute statement.',
                  definitionHi: 'जैन दर्शन का सापेक्षतावाद जिसके अनुसार सत्य के अनेक पहलू होते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Tri-Pitaka Division Formula',
                  formulaOrRule: 'Vinaya (Monastic discipline) + Sutta (Buddha\'s dialogues/sermons) + Abhidhamma (Philosophical metaphysics)',
                  explanationEn: 'The three sacred baskets of Theravada Buddhist scripture in Pali language.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Third Buddhist Council Venue',
                  problemEn: 'The Third Buddhist Council was convened during the reign of Ashoka at which venue?',
                  stepByStepSolutionEn: '1. Use mnemonic R-V-P-K.\n2. Third letter is P = Pataliputra.\n3. Emperor Ashoka hosted it around 250 BCE under Moggaliputta Tissa.\n4. Therefore, venue is Pataliputra.',
                  shortcutTrick: 'Ashoka + 3rd Council = Pataliputra (Patna)!'
                }
              ],
              practicalApplications: ['Guaranteed 2 to 3 marks in Part 2 General Studies across all TRE exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Mahavira added all 5 vows of Jainism.',
                  whyWrongEn: 'Parshvanatha (23rd Tirthankara) gave the first four vows. Mahavira added only the 5th vow: Brahmacharya.',
                  correctWayEn: 'Parshvanatha = 4 vows; Mahavira added Brahmacharya (5th vow).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Third Buddhist Council President (Moggaliputta Tissa)',
                  'Where did Buddha attain enlightenment? (Bodh Gaya, under Bodhi tree on Falgu/Niranjana river)',
                  'Where did Mahavira attain Nirvana? (Pawapuri in Nalanda)',
                  'First Jain Council venue (Pataliputra under Sthulabhadra)'
                ],
                commonDistractorTraps: [
                  'Confusing Nirvana place of Buddha (Kushinagar) with Mahavira (Pawapuri)',
                  'Confusing the 1st council (Rajgir) with the 3rd council (Pataliputra)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.34 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.34 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.36 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Buddha: Enlightenment at Bodh Gaya (Niranjana river), First Sermon at Sarnath, Parinirvana at Kushinagar.',
                '1st Council: Rajgir (Ajatashatru, Mahakassapa, 483 BCE).',
                '2nd Council: Vaishali (Kalashoka, Sabakami, 383 BCE).',
                '3rd Council: Pataliputra (Ashoka, Moggaliputta Tissa, 250 BCE).',
                '4th Council: Kundalvana, Kashmir (Kanishka, Vasumitra, 72 CE).',
                'Mahavira: Born at Kundagrama (Vaishali), Nirvana at Pawapuri (Nalanda).',
                '1st Jain Council: Pataliputra (Sthulabhadra, ~300 BCE).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bud-1',
                  questionEn: 'Who among the following presided over the Third Buddhist Council held at Pataliputra under Emperor Ashoka?',
                  options: [
                    { id: 'a', textEn: 'Mahakassapa', isCorrect: false },
                    { id: 'b', textEn: 'Sabakami', isCorrect: false },
                    { id: 'c', textEn: 'Moggaliputta Tissa', isCorrect: true },
                    { id: 'd', textEn: 'Vasumitra', isCorrect: false }
                  ],
                  explanationEn: 'Moggaliputta Tissa presided over the Third Buddhist Council convened by Emperor Ashoka at Pataliputra in ~250 BCE.',
                  conceptTested: 'Buddhist Councils & Ashoka'
                },
                {
                  id: 'kc-bud-2',
                  questionEn: 'Vardhamana Mahavira attained Mahaparinirvana at which of the following places in Bihar?',
                  options: [
                    { id: 'a', textEn: 'Kundagrama', isCorrect: false },
                    { id: 'b', textEn: 'Pawapuri', isCorrect: true },
                    { id: 'c', textEn: 'Bodh Gaya', isCorrect: false },
                    { id: 'd', textEn: 'Vaishali', isCorrect: false }
                  ],
                  explanationEn: 'Lord Mahavira attained Nirvana at Pawapuri near Rajgir in Nalanda district, where the famous marble Jal Mandir is located.',
                  conceptTested: 'Life of Mahavira & Bihar Sites'
                }
              ]
            },
            practiceQuestions: []
          },
          {
            id: 'hist-topic-mauryan-empire',
            chapterId: 'hist-ch-buddhism-mauryas',
            topicNumber: 2,
            slug: 'mauryan-empire-chanakya-ashoka',
            titleEn: 'The Mauryan Empire: Chandragupta, Chanakya & Ashoka\'s Dhamma',
            titleHi: 'मौर्य साम्राज्य: चंद्रगुप्त मौर्य, चाणक्य का अर्थशास्त्र एवं अशोक का धम्म',
            descriptionEn: 'Arthashastra Saptanga theory, Megasthenes Indica, Kalinga War 261 BCE, Rock Edicts, and Lion Capital.',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Kalinga war edict), TRE 2.0 (Indica 7 castes), TRE 3.0 (Megasthenes at Pataliputra)',
            isStoryFormat: true,
            storyEra: '322 BCE – 185 BCE',
            tutorial: {
              id: 'tut-mauryan-empire',
              topicId: 'hist-topic-mauryan-empire',
              titleEn: 'The First Pan-Indian Superpower: The Mauryan Empire',
              titleHi: 'अखंड भारत का प्रथम साम्राज्य: मौर्य वंश का स्वर्णिम काल',
              readingTimeMinutes: 24,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Chandragupta Maurya\'s victory over Seleucus I Nicator (305 BCE) and Megasthenes\' arrival in Pataliputra.',
                'Master Chanakya\'s Arthashastra and the Saptanga Theory of State (King, Amatya, Janapada, Durga, Kosa, Danda, Mitra).',
                'Analyze Megasthenes\' Indica and his famous observation of Seven Castes in Indian society.',
                'Examine Emperor Ashoka, the Kalinga War (261 BCE / Major Rock Edict XIII), Ashoka\'s Dhamma, and Edict inscriptions in Brahmi and Kharosthi.'
              ],
              introductionEn: '==In 321 BCE, an orphaned boy trained by a vengeful Takshashila scholar overthrew the corrupt Nanda dynasty and created India\'s first subcontinental empire.==\n\nStretching from modern Afghanistan to the borders of Assam, and from the Himalayas down to Mysore, the Mauryan Empire established Pataliputra as the supreme cosmopolitan capital of Asia.',
              introductionHi: 'चाणक्य की कूटनीति और चंद्रगुप्त मौर्य के शौर्य से स्थापित मौर्य साम्राज्य ने भारत को एक सूत्र में पिरोया।',
              conceptSections: [
                {
                  title: '1. Chandragupta Maurya, Chanakya & Megasthenes',
                  contentMarkdownEn: '### Defeat of Seleucus Nicator (305 BCE)\n* Seleucus Nicator, the Greek successor of Alexander, invaded India to recover Alexander\'s conquests.\n* Chandragupta routed Seleucus. Under the peace treaty, Seleucus surrendered four satrapies: ==Aria (Herat), Arachosia (Kandahar), Gedrosia (Baluchistan), and Paropamisadae (Kabul)==.\n* Chandragupta gifted 500 war elephants in return and married Seleucus\'s daughter (Helena).\n* Seleucus sent **Megasthenes** as an ambassador to the court of Chandragupta Maurya at Pataliputra.\n\n### Megasthenes\' Account: *Indica*\n* Megasthenes described Pataliputra as a grand fortified city surrounded by a moat 600 feet wide and 45 feet deep, with ==64 gates and 570 towers==.\n* ==Seven Castes of Megasthenes==: Megasthenes mistakenly divided Indian society into 7 occupational classes: (1) Philosophers, (2) Farmers/Cultivators (largest class), (3) Herdsmen/Shepherds, (4) Artisans/Traders, (5) Soldiers/Warriors, (6) Overseers/Inspectors, (7) Councillors/Assessors.\n* He famously recorded that **slavery did not exist in India** (which was an illusion, as Indian domestic dasas were treated far more humanely than brutal Roman chattel slaves).\n\n### Chanakya\'s *Arthashastra* & The Saptanga Theory\nChanakya (Vishnugupta / Kautilya) formulated the organic state model comprising **Seven Limbs (Saptanga)**:\n1. **Swami** (The King / Head)\n2. **Amatya** (Ministers / Eyes)\n3. **Janapada** (Territory and Population / Legs)\n4. **Durga** (Fortified Capital / Arms)\n5. **Kosa** (Treasury / Mouth)\n6. **Danda / Bala** (Army / Justice / Brain)\n7. **Mitra** (Allies / Ears)'
                },
                {
                  title: '2. Emperor Ashoka & His Inscriptions',
                  contentMarkdownEn: '### The Kalinga War (261 BCE)\n* Fought in the ==8th year of Ashoka\'s coronation== (261 BCE).\n* Recorded in detail in **Major Rock Edict XIII (13th Edict)**: 100,000 men were slain, 150,000 taken captive, and hundreds of thousands perished.\n* The catastrophic bloodshed filled Ashoka with remorse, leading to the historic transition from ==Bherighosha (war drums)== to ==Dhammaghosha (conquest by righteousness)== under the guidance of Buddhist monk **Upagupta**.\n\n### Decipherment of Ashokan Inscriptions\n* In **1837**, ==James Prinsep==, an officer of the Calcutta Mint, first successfully deciphered Ashokan inscriptions written in the **Brahmi script**.\n* Ashoka is referred to in edicts by the titles ==Devanampiya== (\"Beloved of the Gods\") and ==Piyadassi== (\"Of Pleasing Appearance\").\n* Only four edicts explicitly mention his personal name **Ashoka**: Maski, Gurjara, Nittur, and Udegolam.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Dhamma Mahamattas (धम्म महामात्र)',
                  definitionEn: 'Special high-ranking imperial officers appointed by Ashoka in his 14th regnal year to propagate moral conduct and welfare among subjects.',
                  definitionHi: 'अशोक द्वारा अपने राज्याभिषेक के 14वें वर्ष में नियुक्त अधिकारी जो समाज में नैतिक मूल्यों (धम्म) के प्रचार के लिए उत्तरदायी थे।'
                },
                {
                  term: 'Major Rock Edict XIII (13वां प्रमुख शिलालेख)',
                  definitionEn: 'The most famous Ashokan rock edict detailing the tragedy of the Kalinga War and Ashoka\'s conversion to Buddhism and peace.',
                  definitionHi: 'अशोक का वह शिलालेख जिसमें कलिंग युद्ध के नरसंहार का वर्णन और युद्ध त्याग की घोषणा है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Mauryan Imperial Chronology',
                  formulaOrRule: 'Chandragupta (321-297 BCE) -> Bindusara (297-273 BCE) -> Ashoka (269-232 BCE) -> Brihadratha (last, slain 185 BCE by Pushyamitra Shunga)',
                  explanationEn: 'Standard Mauryan ruler timeline.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Kalinga War Edict',
                  problemEn: 'Which Rock Edict of Emperor Ashoka gives an account of the Kalinga War and mentions five contemporary Greek kings?',
                  stepByStepSolutionEn: '1. Recall Ashoka\'s 14 Major Rock Edicts.\n2. Rock Edict XIII (13th) details the Kalinga War fought in 261 BCE.\n3. It also mentions Hellenic rulers like Antiochus, Ptolemy, Antigonus, Magas, and Alexander.\n4. Therefore, correct answer is Major Rock Edict XIII.',
                  shortcutTrick: 'Kalinga War = 13 (Rock Edict XIII)!'
                }
              ],
              practicalApplications: ['Directly tested in Ancient Indian History across all BPSC examinations.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Ashoka invented Buddhism.',
                  whyWrongEn: 'Gautama Buddha lived 250 years before Ashoka. Ashoka adopted Buddhism and transformed it into a world religion.',
                  correctWayEn: 'Buddha = 6th Century BCE; Ashoka = 3rd Century BCE.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Kalinga war edict number (Major Rock Edict XIII)',
                  'Who deciphered Ashoka\'s Brahmi script? (James Prinsep in 1837)',
                  'Author of Indica (Megasthenes) and Arthashastra (Kautilya)',
                  'Last Mauryan ruler (Brihadratha, killed by Pushyamitra Shunga in 185 BCE)'
                ],
                commonDistractorTraps: [
                  'Confusing Major Rock Edict XIII with Edict XII or XI',
                  'Thinking Megasthenes came during Ashoka\'s reign (he came to Chandragupta Maurya)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.35 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.36 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Chandragupta Maurya founded Mauryan dynasty after defeating Dhana Nanda in 321 BCE.',
                'Seleucus Nicator sent Megasthenes to Pataliputra; author of Indica.',
                'Indica mentions 7 castes and absence of slavery in India.',
                'Chanakya Arthashastra details Saptanga theory (King, Amatya, Janapada, Durga, Kosa, Danda, Mitra).',
                'Kalinga War (261 BCE): Described in Major Rock Edict XIII.',
                'James Prinsep deciphered Ashoka\'s Brahmi script in 1837.',
                'National Emblem of India: Lion Capital of Ashoka at Sarnath.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-mau-1',
                  questionEn: 'Which Major Rock Edict of Emperor Ashoka provides an account of the Kalinga War and his conversion to Dhamma?',
                  options: [
                    { id: 'a', textEn: 'Major Rock Edict I', isCorrect: false },
                    { id: 'b', textEn: 'Major Rock Edict V', isCorrect: false },
                    { id: 'c', textEn: 'Major Rock Edict XIII', isCorrect: true },
                    { id: 'd', textEn: 'Major Rock Edict X', isCorrect: false }
                  ],
                  explanationEn: 'Major Rock Edict XIII details the terrible devastation of the Kalinga War (261 BCE) and Ashoka\'s abandonment of warfare in favor of Dhamma.',
                  conceptTested: 'Ashokan Inscriptions & Kalinga War'
                },
                {
                  id: 'kc-mau-2',
                  questionEn: 'Who among the following British scholars successfully deciphered the Brahmi script of Ashokan inscriptions in 1837?',
                  options: [
                    { id: 'a', textEn: 'Sir William Jones', isCorrect: false },
                    { id: 'b', textEn: 'James Prinsep', isCorrect: true },
                    { id: 'c', textEn: 'Alexander Cunningham', isCorrect: false },
                    { id: 'd', textEn: 'Max Muller', isCorrect: false }
                  ],
                  explanationEn: 'James Prinsep, an English scholar and mint official, deciphered the ancient Brahmi and Kharosthi scripts of Ashoka in 1837.',
                  conceptTested: 'Historical Epigraphy & Decipherment'
                }
              ]
            },
            practiceQuestions: []
          }
        ]
      },

      // CHAPTER 3: GUPTAS, HARSHA & PALA DYNASTY OF BIHAR
      {
        id: 'hist-ch-gupta-pala',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 3,
        slug: 'gupta-empire-harsha-pala-dynasty',
        titleEn: 'Gupta Golden Age, Harshavardhana & Pala Dynasty of Bihar',
        titleHi: 'गुप्त स्वर्ण युग, हर्षवर्धन एवं बिहार का पाल वंश',
        descriptionEn: 'Samudragupta Allahabad pillar, Aryabhata, Nalanda University, Vikramashila and Pala bronze sculptures.',
        descriptionHi: 'समुद्रगुप्त का प्रयाग प्रशस्ति, आर्यभट्ट, नालंदा विश्वविद्यालय, विक्रमशिला एवं पाल युगीन कांस्य मूर्तियां।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'hist-topic-gupta-golden-age',
            chapterId: 'hist-ch-gupta-pala',
            topicNumber: 1,
            slug: 'gupta-empire-culture-science',
            titleEn: 'Gupta Empire: Samudragupta, Chandragupta II & Scientific Renaissance',
            titleHi: 'गुप्त साम्राज्य: समुद्रगुप्त, चंद्रगुप्त विक्रमादित्य एवं वैज्ञानिक पुनर्जागरण',
            descriptionEn: 'Prayag Prashasti by Harisena, Navaratnas, Aryabhata of Kusumapura, and foundation of Nalanda University.',
            estimatedMinutes: 22,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Nalanda founder) & TRE 2.0 (Aryabhata birthplace & discoveries)',
            isStoryFormat: true,
            storyEra: '4th – 6th Century CE',
            tutorial: {
              id: 'tut-gupta-empire',
              topicId: 'hist-topic-gupta-empire',
              titleEn: 'The Classical Golden Age: Literature, Science & Architecture',
              titleHi: 'भारतीय इतिहास का स्वर्ण युग: साहित्य, विज्ञान एवं कला',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand Samudragupta\'s military campaigns detailed in the Prayag Prashasti (Allahabad Pillar) by Harisena.',
                'Examine Chandragupta II (Vikramaditya), the Chinese pilgrim Fa-Hien, and the Nine Gems (Navaratnas including Kalidasa).',
                'Celebrate Bihar\'s scientific legend Aryabhata (born in Kusumapura/Patna) and his seminal works Aryabhatiya and Surya Siddhanta.',
                'Identify Kumaragupta I as the founder of the world-famous Nalanda Mahavihara (~427 CE).'
              ],
              introductionEn: '==Under the Gupta rulers of Magadha, Indian art, literature, mathematics, and astronomy reached heights that illuminated the entire civilized world.==\n\nFrom the pioneering calculus of **Aryabhata** in Patna calculating the value of $\\pi$ and explaining solar eclipses, to **Kumaragupta I** founding the world\'s greatest residential university at Nalanda—the Gupta period defined India\'s intellectual heritage.',
              introductionHi: 'गुप्त काल को भारतीय इतिहास का \'स्वर्ण युग\' कहा जाता है। इसी काल में बिहार की भूमि पर नालंदा विश्वविद्यालय की नींव पड़ी और आर्यभट्ट ने खगोल विज्ञान को नई दिशा दी।',
              conceptSections: [
                {
                  title: '1. Great Rulers of the Gupta Dynasty',
                  contentMarkdownEn: '### Chandragupta I (319–335 CE)\n* Started the **Gupta Era (Gupta Samvat)** in ==319–320 CE==.\n* Adopted the grand imperial title **Maharajadhiraja**.\n* Strengthened his power by marrying the Licchavi princess **Kumaradevi** (earning the title *Licchavi-Dauhitra* for his son Samudragupta).\n\n### Samudragupta (335–380 CE) — \"The Napoleon of India\"\n* Historian **V.A. Smith** called Samudragupta the *Napoleon of India* because he was never defeated in any battle.\n* ==Prayag Prashasti (Allahabad Pillar Inscription)==: Composed in chaste classical Sanskrit (Champukavya style) by his court poet **Harisena**. It records his campaigns in North India (Aryavarta) where he uprooted 9 kings, and South India (Dakshinapatha) where he adopted the policy of *Grahana-Moksha-Anugraha* (capturing and liberating 12 kings).\n* Passionate musician: Depicted on gold coins playing the **Veena (lute)**.\n\n### Chandragupta II \"Vikramaditya\" (380–415 CE)\n* Destroyed the Western Shaka Kshatrapas of Gujarat, earning the title **Sakari** (Conqueror of Shakas).\n* Chinese Buddhist pilgrim **Fa-Hien (Faxian)** visited India during his reign (399–414 CE) and praised the peace, prosperity, and humane administration of Magadha.\n* Patronized the **Navaratnas (Nine Gems)**: Kalidasa, Amarasimha, Varahamihira, Dhanvantari, Ghatakarpara, Shanku, Kahapanaka, Vararuchi, and Vetalbhatta.\n\n### Kumaragupta I (415–455 CE)\n* Founded the famous ==Nalanda Mahavihara (Nalanda University)== in ~427 CE.\n* Assumed the title **Mahendraditya** and performed the Ashvamedha sacrifice.'
                },
                {
                  title: '2. Aryabhata of Bihar & Scientific Achievements',
                  contentMarkdownEn: '### Aryabhata of Kusumapura (Patna)\n* Born in **476 CE** at ==Kusumapura (near modern Patna/Khagaul)==.\n* Authored **Aryabhatiya** (at age 23 in 499 CE) and **Surya Siddhanta**.\n* **Scientific Discoveries**:\n  1. Proved that the **Earth is spherical and rotates on its own axis**, causing day and night (rejecting the mythological flat-earth belief).\n  2. Discovered the true scientific causes of **solar and lunar eclipses** as shadows cast by the Earth and Moon, rejecting the Rahu-Ketu demon myth.\n  3. Calculated the value of $\\pi$ (Pi) accurately to four decimal places: ==$\\pi \\approx 3.1416$==.\n  4. Calculated the solar year length as **365.258 days** (remarkably close to modern astronomical values).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Prayag Prashasti (प्रयाग प्रशस्ति)',
                  definitionEn: 'The Allahabad Pillar inscription authored by Harisena in Sanskrit verse celebrating Samudragupta\'s unbroken military conquests across Aryavarta and Dakshinapatha.',
                  definitionHi: 'हरिषेण द्वारा रचित समुद्रगुप्त का कीर्ति-वर्णन जो इलाहाबाद के स्तंभ पर उत्कीर्ण है।'
                },
                {
                  term: 'Nalanda Mahavihara (नालंदा महाविहार)',
                  definitionEn: 'The legendary Buddhist residential university founded by Kumaragupta I in Bihar, housing 10,000 students and 2,000 international scholars like Xuanzang.',
                  definitionHi: 'कुमारगुप्त प्रथम द्वारा बिहार के नालंदा में स्थापित विश्व का प्राचीनतम आवासीय विश्वविद्यालय।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Gupta Dynasty Lineage Formula',
                  formulaOrRule: 'Sri Gupta -> Ghatotkacha -> Chandragupta I -> Samudragupta -> Chandragupta II -> Kumaragupta I -> Skandagupta',
                  explanationEn: 'Essential royal succession of Magadha.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Nalanda Founder',
                  problemEn: 'Who among the following Gupta emperors founded the world-famous Nalanda University?',
                  stepByStepSolutionEn: '1. Nalanda University was founded in the early 5th century CE.\n2. Kumaragupta I (Mahendraditya) established the royal endowment for the Mahavihara.\n3. Skandagupta and later Harsha and Pala rulers further patronized it.\n4. Therefore, correct answer is Kumaragupta I.',
                  shortcutTrick: 'Nalanda Founder = Kumaragupta I!'
                }
              ],
              practicalApplications: ['Frequently asked across all BPSC and Bihar State exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing Nalanda University with Vikramashila University.',
                  whyWrongEn: 'Nalanda was founded by Kumaragupta I (Gupta period, 5th century CE). Vikramashila was founded 350 years later by Dharmapala (Pala dynasty, 8th century CE).',
                  correctWayEn: 'Nalanda = Kumaragupta I; Vikramashila = Dharmapala.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Founder of Nalanda University (Kumaragupta I)',
                  'Author of Prayag Prashasti (Harisena)',
                  'Birthplace and contributions of Aryabhata (Kusumapura/Patna, $\\pi \\approx 3.1416$, Earth\'s rotation)',
                  'Chinese pilgrim during Chandragupta II (Fa-Hien)'
                ],
                commonDistractorTraps: [
                  'Confusing Chandragupta Maurya with Chandragupta I or II',
                  'Thinking Samudragupta lost battles (he remained undefeated)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.36 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.38 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Gupta Era started in 319-320 CE by Chandragupta I.',
                'Samudragupta: "Napoleon of India" (V.A. Smith), Prayag Prashasti by Harisena.',
                'Chandragupta II Vikramaditya: Defeated Shakas, Navaratnas (Kalidasa), Fa-Hien visited.',
                'Kumaragupta I: Founded Nalanda University.',
                'Skandagupta: Repelled Huna barbarian invasion (Bhitari pillar).',
                'Aryabhata: Born in Kusumapura (Patna), wrote Aryabhatiya, calculated $\\pi \\approx 3.1416$.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-gup-1',
                  questionEn: 'Nalanda University was founded by which of the following Gupta rulers?',
                  options: [
                    { id: 'a', textEn: 'Samudragupta', isCorrect: false },
                    { id: 'b', textEn: 'Chandragupta II', isCorrect: false },
                    { id: 'c', textEn: 'Kumaragupta I', isCorrect: true },
                    { id: 'd', textEn: 'Skandagupta', isCorrect: false }
                  ],
                  explanationEn: 'Kumaragupta I (Mahendraditya) of the Gupta dynasty founded Nalanda Mahavihara around 427 CE.',
                  conceptTested: 'Gupta Dynasty & Nalanda'
                },
                {
                  id: 'kc-gup-2',
                  questionEn: 'The famous astronomer and mathematician Aryabhata was associated with which ancient place in Bihar?',
                  options: [
                    { id: 'a', textEn: 'Vaishali', isCorrect: false },
                    { id: 'b', textEn: 'Kusumapura (Patna)', isCorrect: true },
                    { id: 'c', textEn: 'Rajagriha', isCorrect: false },
                    { id: 'd', textEn: 'Champa', isCorrect: false }
                  ],
                  explanationEn: 'Aryabhata lived and conducted his astronomical observations at Kusumapura (modern Patna/Khagaul) in Bihar.',
                  conceptTested: 'Ancient Science & Aryabhata'
                }
              ]
            },
            practiceQuestions: []
          },
          {
            id: 'hist-topic-pala-dynasty-bihar',
            chapterId: 'hist-ch-gupta-pala',
            topicNumber: 2,
            slug: 'pala-dynasty-vikramashila-sculpture',
            titleEn: 'The Pala Empire: Gopala, Dharmapala & Vikramashila University',
            titleHi: 'पाल साम्राज्य: गोपाल, धर्मपाल एवं विक्रमशिला विश्वविद्यालय',
            descriptionEn: 'Gopala ending Matsyanyaya, Dharmapala founding Vikramashila, Odantapuri, Somapura, and Dhiman & Vitpala bronze art.',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Vikramashila founder) & TRE 3.0 (Destruction by Bakhtiyar Khilji)',
            isStoryFormat: true,
            storyEra: '8th – 12th Century CE',
            tutorial: {
              id: 'tut-pala-dynasty',
              topicId: 'hist-topic-pala-dynasty',
              titleEn: 'The Buddhist Renaissance in Medieval Bihar: The Palas',
              titleHi: 'मध्यकालीन बिहार में बौद्ध पुनर्जागरण: पाल राजवंश',
              readingTimeMinutes: 18,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand how Gopala ended anarchy (Matsyanyaya) in 750 CE to establish the Pala dynasty.',
                'Examine Dharmapala\'s foundation of Vikramashila University (Bhagalpur) and Somapura Mahavihara.',
                'Analyze the Tripartite Struggle between Palas, Pratiharas, and Rashtrakutas for control of Kannauj.',
                'Appreciate the Pala school of bronze sculpture led by Bihari artists Dhiman and Vitpala.',
                'Trace the tragic destruction of Nalanda and Vikramashila in 1193-1203 CE by Bakhtiyar Khilji.'
              ],
              introductionEn: '==Following the death of Harshavardhana in 647 CE, northern India fell into complete anarchy (Matsyanyaya—the law of the fishes where big fish eat small fish).==\n\nIn 750 CE, the citizens and nobles of Bihar and Bengal democratically elected a capable leader named **Gopala** to bring order. Thus began the celebrated **Pala Empire**, the last great Buddhist imperial dynasty of India.',
              introductionHi: 'हर्षवर्धन के बाद फैली अराजकता (मात्स्यन्याय) को समाप्त कर 750 ई. में गोपाल ने पाल वंश की स्थापना की। धर्मपाल ने भागलपुर में विक्रमशिला विश्वविद्यालय की स्थापना की।',
              conceptSections: [
                {
                  title: '1. Key Pala Emperors & Educational Monuments in Bihar',
                  contentMarkdownEn: '### Gopala (750–770 CE)\n* Elected by the people to end **Matsyanyaya**.\n* Founded **Odantapuri University** (near modern Bihar Sharif, Nalanda).\n\n### Dharmapala (770–810 CE) — The Great Builder\n* Founded the renowned ==Vikramashila University== at **Antichak in Kahalgaon (Bhagalpur district, Bihar)**.\n* Built the magnificent **Somapura Mahavihara** (in Paharpur, now a UNESCO World Heritage site).\n* Revived Nalanda University by granting 200 revenue villages for its maintenance.\n* Participated in the **Tripartite Struggle (त्रिपक्षीय संघर्ष)** against the Gurjara-Pratiharas (Vatsaraja/Nagabhata II) and Rashtrakutas (Dhruva/Govinda III) for hegemony over imperial **Kannauj**.\n\n### Devapala (810–850 CE)\n* Extended the empire to Assam (Kamarupa) and Odisha (Utkala).\n* Received an embassy from the Sailendra King of Sumatra/Java (**Balaputradeva**), granting five villages for the maintenance of a Buddhist monastery at Nalanda.\n\n### Pala Art: The Bronze Casting Masters\n* Two legendary artists from Nalanda, ==Dhiman and his son Vitpala==, established the famous Pala Bronze Sculpture School using the lost-wax technique (Cire Perdue).\n\n### The Tragic Destruction (1193–1203 CE)\n* In 1193–1203 CE, Turkish commander **Ikhtiyaruddin Muhammad Bakhtiyar Khilji** invaded Bihar, massacred Buddhist monks, and burned Nalanda and Vikramashila universities to the ground.\n* Persian historian **Minhaj-i-Siraj** in *Tabaqat-i-Nasiri* recorded that the colossal libraries of Nalanda (Dharmaganja, Ratnasagara, Ratnodadhi) burned continuously for over three months!'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Vikramashila University (विक्रमशिला विश्वविद्यालय)',
                  definitionEn: 'Premier Vajrayana Buddhist international university founded by Dharmapala in Antichak (Bhagalpur, Bihar), famous for Tibetan Buddhist scholar Atisa Dipankara.',
                  definitionHi: 'पाल सम्राट धर्मपाल द्वारा भागलपुर के अंतीचक में स्थापित अंतरराष्ट्रीय बौद्ध विश्वविद्यालय।'
                },
                {
                  term: 'Matsyanyaya (मात्स्यन्याय)',
                  definitionEn: 'Ancient political concept denoting complete anarchy and lawlessness where the powerful mercilessly exploit the weak, ended by Gopala\'s election in 750 CE.',
                  definitionHi: 'अराजकता की वह स्थिति जहाँ बड़ी मछली छोटी मछली को खा जाती है। पाल वंश ने इसे समाप्त किया।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Bihar Ancient Universities Matrix',
                  formulaOrRule: 'Nalanda = Kumaragupta I; Odantapuri = Gopala; Vikramashila = Dharmapala',
                  explanationEn: 'Instant reference table for BPSC questions on ancient Bihar universities.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Vikramashila Founder',
                  problemEn: 'Who among the following Pala rulers founded Vikramashila University in Bihar?',
                  stepByStepSolutionEn: '1. Gopala founded Odantapuri.\n2. Dharmapala founded Vikramashila at Antichak (Bhagalpur).\n3. Devapala expanded the empire.\n4. Therefore, correct answer is Dharmapala.',
                  shortcutTrick: 'Vikramashila = Dharmapala (Bhagalpur)!'
                }
              ],
              practicalApplications: ['Frequently asked in both BPSC TRE and general BPSC Combined Competitive Exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Bakhtiyar Khilji was an emperor of Delhi.',
                  whyWrongEn: 'He was a military general/commander under Qutb-ud-din Aibak / Muhammad Ghori, not an independent Delhi Sultan.',
                  correctWayEn: 'Bakhtiyar Khilji = Military commander of Ghori/Aibak who invaded Bihar.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Founder of Vikramashila (Dharmapala at Bhagalpur)',
                  'Founder of Pala dynasty (Gopala in 750 CE)',
                  'Invader who destroyed Nalanda & Vikramashila (Bakhtiyar Khilji)',
                  'Famous Pala artists (Dhiman and Vitpala)'
                ],
                commonDistractorTraps: [
                  'Confusing Gopala (Odantapuri) with Dharmapala (Vikramashila)',
                  'Confusing location of Vikramashila (Bhagalpur) with Nalanda'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.37 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.38 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Gopala founded Pala Dynasty in 750 CE, ending Matsyanyaya.',
                'Gopala founded Odantapuri University (Bihar Sharif).',
                'Dharmapala founded Vikramashila University at Antichak, Bhagalpur.',
                'Atisa Dipankara, renowned scholar of Vikramashila, went to Tibet to revive Buddhism.',
                'Pala Bronze Art: Pioneered by Dhiman and Vitpala of Nalanda.',
                'Bakhtiyar Khilji destroyed Nalanda and Vikramashila around 1193-1203 CE (recorded in Tabaqat-i-Nasiri by Minhaj-i-Siraj).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pal-1',
                  questionEn: 'Vikramashila University, located near Bhagalpur in Bihar, was established by which Pala ruler?',
                  options: [
                    { id: 'a', textEn: 'Gopala', isCorrect: false },
                    { id: 'b', textEn: 'Dharmapala', isCorrect: true },
                    { id: 'c', textEn: 'Devapala', isCorrect: false },
                    { id: 'd', textEn: 'Mahipala I', isCorrect: false }
                  ],
                  explanationEn: 'Dharmapala (770–810 CE) founded Vikramashila University at Antichak in Bhagalpur, Bihar.',
                  conceptTested: 'Pala Dynasty & Vikramashila'
                },
                {
                  id: 'kc-pal-2',
                  questionEn: 'Which Turkish invader destroyed the ancient universities of Nalanda and Vikramashila around 1193–1203 CE?',
                  options: [
                    { id: 'a', textEn: 'Mahmud of Ghazni', isCorrect: false },
                    { id: 'b', textEn: 'Muhammad Ghori', isCorrect: false },
                    { id: 'c', textEn: 'Bakhtiyar Khilji', isCorrect: true },
                    { id: 'd', textEn: 'Alauddin Khilji', isCorrect: false }
                  ],
                  explanationEn: 'Ikhtiyaruddin Muhammad Bakhtiyar Khilji destroyed Nalanda and Vikramashila monasteries around 1193-1203 CE.',
                  conceptTested: 'Medieval Invasions in Bihar'
                }
              ]
            },
            practiceQuestions: []
          }
        ]
      },

      // CHAPTER 4: MEDIEVAL INDIA - DELHI SULTANATE, MUGHALS & SHER SHAH SURI
      {
        id: 'hist-ch-medieval-sher-shah',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 4,
        slug: 'medieval-india-sultanate-mughals-sher-shah',
        titleEn: 'Medieval India: Delhi Sultanate, Mughals & Sher Shah Suri of Bihar',
        titleHi: 'मध्यकालीन भारत: दिल्ली सल्तनत, मुग़ल साम्राज्य एवं बिहार के शेरशाह सूरी',
        descriptionEn: 'Alauddin market reforms, Akbar administration, Sher Shah Suri\'s Grand Trunk Road, Rupiya, and Sasaram mausoleum.',
        descriptionHi: 'अलाउद्दीन के बाजार सुधार, अकबर की प्रशासनिक व्यवस्था, शेरशाह का ग्रैंड ट्रंक रोड, रुपया एवं सासाराम का मकबरा।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'hist-topic-sher-shah-suri',
            chapterId: 'hist-ch-medieval-sher-shah',
            topicNumber: 1,
            slug: 'sher-shah-suri-and-bihar-reforms',
            titleEn: 'Sher Shah Suri: From Sasaram Jagirdar to Emperor of India',
            titleHi: 'शेरशाह सूरी: सासाराम के जागीरदार से भारत के सम्राट तक की गौरवगाथा',
            descriptionEn: 'Farid Khan title, Battles of Chausa & Kannauj, Rupiya currency, Sadak-e-Azam (GT Road), and Sasaram red sandstone tomb.',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Battle of Chausa), TRE 2.0 (Sasaram Tomb architecture) & TRE 3.0 (Rupiya currency)',
            isStoryFormat: true,
            storyEra: '1486 – 1545 CE',
            tutorial: {
              id: 'tut-sher-shah-suri',
              topicId: 'hist-topic-sher-shah-suri',
              titleEn: 'The Lion of Bihar Who Outsmarted the Mughals',
              titleHi: 'बिहार का शेर: शेरशाह सूरी और उनके युगांतरकारी प्रशासनिक सुधार',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Trace the rise of Farid Khan from managing his father Hasan Khan Sur\'s jagir in Sasaram to becoming Sher Khan.',
                'Examine the Battle of Chausa (1539, Buxar) and Battle of Bilgram/Kannauj (1540) where Sher Shah routed Mughal Emperor Humayun.',
                'Master Sher Shah\'s administrative architecture: Sarkar, Pargana, Zabti land measurement (Patta and Qabuliyat).',
                'Analyze his communications network: Sadak-e-Azam (Grand Trunk Road), Sarais (inns), and postal horse couriers.',
                'Study currency reforms: Introduction of the silver Rupiya (178 grains) and copper Dam (380 grains).',
                'Examine his architectural masterpiece: The Indo-Islamic octagonal tomb in the middle of a lake at Sasaram, Bihar.'
              ],
              introductionEn: '==For five glorious years (1540–1545 CE), an Afghan nobleman from Bihar ruled Hindustan with such peerless administrative genius that even the great Mughal Emperor Akbar copied his systems almost verbatim.==\n\nBorn as **Farid Khan**, he earned the title **Sher Khan** after slaying a tiger single-handedly with his sword. From the historic soil of **Sasaram (Rohtas district, Bihar)**, he rose to shatter the Mughal throne, drive Humayun into exile, and build the infrastructure that unifies modern India even today.',
              introductionHi: 'सासाराम (रोहतास, बिहार) की धरती से उठकर मुग़ल बादशाह हुमायूं को परास्त करने वाले शेरशाह सूरी का 5 वर्षों का शासनकाल प्रशासनिक सुधारों का स्वर्णिम युग माना जाता है।',
              conceptSections: [
                {
                  title: '1. The Decisive Battles with Humayun',
                  contentMarkdownEn: '### Battle of Chausa (26 June 1539)\n* Fought near ==Chausa (Buxar district, Bihar)== on the banks of the Karmnasa and Ganga rivers.\n* Sher Shah outmaneuvered Humayun by launching a surprise dawn attack while the Mughal army was stranded in monsoon floods.\n* Humayun barely escaped drowning in the swollen Ganga with the assistance of a water-carrier (Bhishti) named **Nizam** (whom Humayun later allowed to sit on the throne for half a day, issuing leather coins).\n* Following this epic triumph, Sher Khan crowned himself and assumed the royal title ==Sher Shah Alam Sultan-ul-Adil==.\n\n### Battle of Bilgram / Kannauj (17 May 1540)\n* Sher Shah delivered a crushing, decisive defeat to Humayun at Kannauj.\n* Humayun fled to Persia as a landless exile for 15 years, and Sher Shah captured Delhi and Agra, establishing the **Second Afghan Sur Empire**.'
                },
                {
                  title: '2. Revolutionary Administrative, Road & Currency Reforms',
                  contentMarkdownEn: '### The Grand Trunk Road (Sadak-e-Azam)\n* Sher Shah reconstructed and extended the ancient Mauryan highway, naming it **Sadak-e-Azam** (known today as the ==Grand Trunk Road==), stretching **2,500 km** from **Sonargaon (Bengal)** through Patna, Varanasi, Delhi, Lahore, all the way to **Peshawar (now Pakistan)**.\n* Built **1,700 Sarais (rest houses/inns)** equipped with separate lodging, drinking water, and food for Hindu and Muslim travelers.\n* Shaded both sides of the highways with fruit-bearing trees and established a lightning-fast **horse-mounted postal courier system** (Dak Chowki).\n\n### Currency Standardization\n* Abolished debased mixed-metal coins and introduced standardized pure coinage:\n  1. ==Rupiya==: Pure silver coin weighing **178 grains** (which became the direct precursor of the modern Indian Rupee and British rupee).\n  2. ==Dam==: Pure copper coin weighing **380 grains** used for daily retail transactions (Ratio: 1 Silver Rupiya = 64 Copper Dams).\n\n### Agrarian & Revenue System\n* Introduced **Patta** (formal title deed given to farmers describing landholdings and taxes) and **Qabuliyat** (written agreement from the farmer promising to pay the tax).\n* Introduced the **Jarib** (measuring rope with iron rings) and standard Gaz (Sikandari Gaz of 32 digits).\n\n### Architectural Wonder: The Tomb at Sasaram\n* Designed by architect **Aliwal Khan**, this stunning octagonal red sandstone mausoleum stands **150 feet high in the center of an artificial square lake** in Sasaram.\n* It combines Hindu architectural elements (Kalasha, Chhatris) with Islamic domes and arches, hailed by historians as a transitional bridge to the Taj Mahal.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Rupiya (रुपिया)',
                  definitionEn: 'The standardized pure silver coin of 178 grains introduced by Sher Shah Suri in 1540 CE, which became the foundation of modern Indian currency.',
                  definitionHi: 'शेरशाह सूरी द्वारा 1540 में चलाया गया 178 ग्रेन का शुद्ध चांदी का सिक्का जो आधुनिक भारतीय रुपये का जनक बना।'
                },
                {
                  term: 'Patta & Qabuliyat (पट्टा एवं कबूलियत)',
                  definitionEn: 'Sher Shah\'s revolutionary agrarian system: Patta was the legal land deed given to the peasant, and Qabuliyat was the written acceptance of assessed tax by the peasant.',
                  definitionHi: 'शेरशाह द्वारा किसानों को दिया गया भू-अधिकार पत्र (पट्टा) और किसान द्वारा लगान चुकाने की सहमति (कबूलियत)।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Sher Shah Currency Ratio',
                  formulaOrRule: '1 Silver Rupiya (178 grains) = 64 Copper Dams (380 grains)',
                  explanationEn: 'The official bimetallic exchange ratio established by Suri administration.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Battle of Chausa Location',
                  problemEn: 'Where was the historic Battle of Chausa (1539) fought between Sher Shah Suri and Humayun?',
                  stepByStepSolutionEn: '1. Chausa is situated on the banks of the Ganga and Karmnasa rivers.\n2. Geographically, it is located in Buxar district of modern Bihar.\n3. Therefore, correct answer is Buxar (Bihar).',
                  shortcutTrick: 'Chausa = Buxar (Bihar) 1539!'
                }
              ],
              practicalApplications: ['Essential Bihar medieval history topic yielding guaranteed marks.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Akbar invented the Rupiya or Patta system.',
                  whyWrongEn: 'Akbar borrowed both the silver Rupiya and the Patta-Qabuliyat revenue measurement system directly from Sher Shah Suri.',
                  correctWayEn: 'Sher Shah invented/standardized them; Akbar later refined them.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Tomb of Sher Shah Suri (Sasaram, in the middle of a lake)',
                  'Battle of Chausa date and river (26 June 1539, near Buxar, Ganga/Karmnasa)',
                  'Currency introduced by Sher Shah (Silver Rupiya of 178 grains)',
                  'Original name of Sher Shah (Farid Khan)'
                ],
                commonDistractorTraps: [
                  'Confusing 1539 (Chausa) with 1540 (Kannauj/Bilgram)',
                  'Confusing Sasaram (lake tomb) with Delhi (Purana Qila)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.38 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.39 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Original name: Farid Khan; born in Sasaram (Bihar).',
                'Battle of Chausa (1539): Defeated Humayun near Buxar, Bihar.',
                'Battle of Kannauj/Bilgram (1540): Completely ousted Humayun and became Emperor.',
                'Built Sadak-e-Azam (Grand Trunk Road) from Sonargaon to Peshawar with 1,700 Sarais.',
                'Introduced pure silver Rupiya (178 grains) and copper Dam (380 grains).',
                'Land revenue: Patta (deed) and Qabuliyat (pledge).',
                'Died in 1545 during the siege of Kalinjar fort due to an accidental gunpowder explosion.',
                'Tomb: Grand octagonal red sandstone mausoleum in a lake at Sasaram, Bihar.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-suri-1',
                  questionEn: 'The majestic mausoleum of Sher Shah Suri, standing in the middle of an artificial lake, is located at which place in Bihar?',
                  options: [
                    { id: 'a', textEn: 'Patna', isCorrect: false },
                    { id: 'b', textEn: 'Sasaram', isCorrect: true },
                    { id: 'c', textEn: 'Maner Sharif', isCorrect: false },
                    { id: 'd', textEn: 'Gaya', isCorrect: false }
                  ],
                  explanationEn: 'Sher Shah Suri\'s tomb is an architectural masterpiece situated in Sasaram (Rohtas district, Bihar).',
                  conceptTested: 'Sher Shah Suri & Bihar Architecture'
                },
                {
                  id: 'kc-suri-2',
                  questionEn: 'Which standard silver coin of 178 grains, the direct ancestor of modern Indian currency, was first introduced by Sher Shah Suri?',
                  options: [
                    { id: 'a', textEn: 'Tanka', isCorrect: false },
                    { id: 'b', textEn: 'Rupiya', isCorrect: true },
                    { id: 'c', textEn: 'Jital', isCorrect: false },
                    { id: 'd', textEn: 'Mohur', isCorrect: false }
                  ],
                  explanationEn: 'Sher Shah Suri introduced the standardized 178-grain silver coin known as the Rupiya in 1540 CE.',
                  conceptTested: 'Medieval Currency Reforms'
                }
              ]
            },
            practiceQuestions: []
          }
        ]
      }
    ]
  }
];
