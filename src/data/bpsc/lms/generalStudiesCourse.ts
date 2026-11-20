// Comprehensive BPSC TRE 4.0 General Studies Course Data
// 5 Subjects, 7 Chapters, 15 High-Yield Topics covering Bihar Special, Freedom Struggle, Polity, Geography & Science
// Fully equipped with Historical Story Mode, 12-section blueprint, authentic TRE 1/2/3 PYQs, and ==yellow highlighters==

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_GENERAL_STUDIES_SUBJECTS: LMSSubject[] = [
  // =========================================================================
  // SUBJECT 1: BIHAR SPECIAL: HISTORY, GEOGRAPHY & MOVEMENTS
  // =========================================================================
  {
    key: 'BIHAR_SPECIAL_GK',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Bihar Special: History, Geography & Economy',
    displayNameHi: 'बिहार विशेष: इतिहास, भूगोल एवं अर्थव्यवस्था',
    iconName: 'Landmark',
    descriptionEn: 'Essential Bihar-specific knowledge: 1857 Veer Kunwar Singh, Champaran 1917, Swami Sahajanand Kisan Sabha, 1942 Patna Secretariat firing, JP Azad Dasta, 12 Ganga districts, and Agro-Climatic Zones.',
    descriptionHi: 'बिहार का स्वतंत्रता संग्राम, 1857 में बाबू कुंवर सिंह, चंपारण सत्याग्रह (1917), स्वामी सहजानंद एवं किसान सभा, 1942 सचिवालय गोलीकांड, जयप्रकाश नारायण का आजाद दस्ता, गंगा नदी एवं कृषि-जलवायु क्षेत्र।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: BIHAR IN THE FREEDOM STRUGGLE (1857-1947)
      // ----------------------------------------------------
      {
        id: 'bih-ch-freedom-struggle',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 1,
        slug: 'bihar-freedom-struggle',
        titleEn: 'Bihar in the Freedom Struggle (1857–1947)',
            titleHi: 'Bihar in the Freedom Struggle (1857–1947)',
        descriptionEn: 'The epic saga of 80-year-old Veer Kunwar Singh, Pir Ali Khan of Patna, Raj Kumar Shukla, Champaran Satyagraha, and Swami Sahajanand Saraswati.',
        descriptionHi: '80 वर्षीय वीर कुंवर सिंह का शौर्य, पटना के शहीद पीर अली, राजकुमार शुक्ल एवं चंपारण सत्याग्रह, तथा स्वामी सहजानंद सरस्वती का किसान आंदोलन।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 1.1: 1857 & Champaran 1917
          {
            id: 'bih-topic-1857-champaran',
            chapterId: 'bih-ch-freedom-struggle',
            topicNumber: 1,
            slug: '1857-revolt-bihar-champaran-satyagraha',
            titleEn: '1857 Revolt in Bihar & Champaran Satyagraha (1917)',
            titleHi: '1857 Revolt in Bihar & Champaran Satyagraha (1917)',
            descriptionEn: 'Veer Kunwar Singh\'s guerrilla resistance at Jagdishpur, severed arm at Sheopur Ghat, Raj Kumar Shukla, and Gandhiji\'s first Civil Disobedience in India.',
            descriptionHi: 'जगदीशपुर के वीर कुंवर सिंह, शिवपुर घाट पर हाथ काटने की अमर गाथा, राजकुमार शुक्ल का आमंत्रण एवं गांधी जी की चंपारण यात्रा (तिनकठिया प्रणाली का अंत)।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked across BPSC TRE 1.0 (Q.32), TRE 2.0 (Q.35) & TRE 3.0 (Q.35)',
            isStoryFormat: true,
            storyEra: '1857 Revolt to 1917 Champaran Satyagraha',
            tutorial: {
              id: 'tut-bih-1857-champaran',
              topicId: 'bih-topic-1857-champaran',
              titleEn: 'The Epic Story of Veer Kunwar Singh & Champaran 1917',
              titleHi: 'The Epic Story of Veer Kunwar Singh & Champaran 1917',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 18,
              learningObjectives: [
                'Relive the dramatic story of 80-year-old Babu Kunwar Singh of Jagdishpur during 1857.',
                'Understand Pir Ali Khan\'s rebellion in Patna on 3 July 1857 and his defiance before the gallows.',
                'Trace the journey of Raj Kumar Shukla who persuaded Mahatma Gandhi to visit Champaran.',
                'Master the mechanics of the Tinkathia System (3/20th compulsory indigo cultivation).',
                'Examine the recommendations of the Champaran Agrarian Committee and Abolition of Tinkathia.'
              ],
              introductionEn: '==History is not a dry list of dates; it is the living heartbeat of courage.== In Bihar, the struggle for freedom produced moments of unparalleled bravery that shook the British Empire to its very foundations.\n\nFrom an 80-year-old warrior-king severing his own arm to offer it to the holy river Ganga, to an illiterate indigo farmer walking thousands of miles across India to bring Mohandas Karamchand Gandhi to a remote corner of northern Bihar—this chapter holds the key to your success in BPSC TRE 4.0.',
              introductionHi: 'बिहार की पावन भूमि केवल इतिहास की साक्षी नहीं, बल्कि स्वतंत्रता के महासंग्राम की धुरी रही है। 1857 में जगदीशपुर के 80 वर्षीय वीर बाबू कुंवर सिंह ने जब अंग्रेजों के छक्के छुड़ाए, तो पूरी दुनिया उनकी वीरता देखकर दंग रह गई। वहीं 1917 में एक साधारण किसान राजकुमार शुक्ल के अदम्य संकल्प ने मोहनदास करमचंद गांधी को चंपारण लाकर भारत में सत्याग्रह की पहली मशाल जलाई।',
              conceptSections: [
                {
                  title: 'The Legend of Babu Veer Kunwar Singh (1857)',
                  contentMarkdownEn: '### The Lion of Jagdishpur\nWhen the mutiny of 1857 erupted in Danapur on 25 July 1857, the rebel sepoys crossed the Son river and reached ==Jagdishpur (Bhojpur/Arrah)==. They had one leader in mind: the 80-year-old Ujjainiya Rajput chieftain, **Babu Kunwar Singh**.\n\nDespite his ripe age, Kunwar Singh possessed the fury of a youthful conqueror. He took command of the Danapur regiments, liberated Arrah, and established an independent administration.\n\n### The Immortal Sacrifice at Sheopur Ghat\nIn April 1858, pursued by British forces under Captain Le Grand and Brigadier Douglas, Kunwar Singh was crossing the swollen Ganga river at **Sheopur Ghat** (near Ballia). A British cannonball struck his left arm, shattering the bone and poisoning his flesh with lead.\n\nWithout a single flinch or hesitation, Kunwar Singh drew his flashing talwar (sword) with his right hand, **severed his shattered left arm at the elbow**, held it up to the sun, and cast it into the swirling sacred waters with the immortal words:\n==\"गंगा मैया! अपने इस अकिंचन भक्त का यह अंतिम उपहार स्वीकार करो!\"== (Mother Ganga, accept this humble last offering of your devotee!)\n\nHe returned to Jagdishpur with his bleeding stump, completely routed Captain Le Grand\'s British force on 23 April 1858, tore down the Union Jack, and raised his own flag. Three days later, on 26 April 1858, having never surrendered to a single Englishman, the unconquered Lion of Bihar breathed his last.\n\n* ==Pir Ali Khan (Patna Rebel)==: On **3 July 1857**, a humble bookseller named Pir Ali Khan led an armed uprising in Patna, killing British opium agent Dr. Lyell. When Commissioner William Tayler sentenced him to be hanged, Pir Ali boldly declared: *\"You can hang me, but for every drop of my blood, a thousand patriots will arise to destroy your empire!\"*\n* ==Danapur Sepoy Mutiny==: 25 July 1857 (7th, 8th, and 40th Native Infantries mutinied at Danapur Cantt).',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Examiner Trap: Kunwar Singh vs Amar Singh',
                    textEn: 'BPSC repeatedly asks who led the guerrilla struggle in the Kaimur hills after Kunwar Singh\'s death. The correct answer is his younger brother, ==Amar Singh==, NOT Kunwar Singh!',
                    textHi: 'कुंवर सिंह की मृत्यु के उपरांत कैमूर की पहाड़ियों में समानांतर सरकार एवं छापामार युद्ध का नेतृत्व उनके छोटे भाई ==अमर सिंह== ने किया था।'
                  }
                },
                {
                  title: 'Raj Kumar Shukla & The Champaran Satyagraha (1917)',
                  contentMarkdownEn: '### The Curse of Tinkathia ($3/20$)\nUnder European planters in Champaran, every tenant farmer was legally coerced under the Tinkathia system to cultivate indigo on ==$3/20^{th}$ of their most fertile land== (3 kathas out of every 20 kathas of 1 Bigha). When synthetic German chemical dyes destroyed indigo profits, European planters levied extortionate illegal cesses called *Sharahbeshi* (rent increase) and *Tawan* (lump sum exit fee).\n\n### The Stubborn Peasant: Raj Kumar Shukla\n**Raj Kumar Shukla**, a resident of Murali Bharhawa in Champaran, resolved to end this misery. In December 1916, at the **Lucknow Congress Session**, Shukla approached Lokmanya Tilak and Mahatma Gandhi.\n\nGandhi initially hesitated, saying he knew nothing of Champaran. Shukla did not give up. He shadowed Gandhi across India—from Lucknow to Kanpur, from Sabarmati Ashram to Calcutta—pleading:\n==\"बापू, आप एक बार चंपारण चलकर अपनी आँखों से हमारे किसानों का दुख देख लीजिए!\"==\n\nMoved by Shukla\'s unshakable persistence, Gandhiji agreed. On **10 April 1917**, Gandhi arrived in Patna with Shukla, stayed at Dr. Rajendra Prasad\'s residence, and reached Motihari (Champaran) on 15 April 1917.\n\n### First Victory of Civil Disobedience\nWhen British District Magistrate W.B. Heycock ordered Gandhi to leave Champaran immediately, Gandhi politely refused, choosing to go to jail. Faced with thousands of peasants surrounding the courthouse, the Government yielded.\n* Lieutenant Governor Sir Edward Gait appointed the **Champaran Agrarian Committee**, with Gandhi as a member.\n* The Committee recommended the ==complete abolition of the Tinkathia system== and the refund of 25% of illegally extorted money to farmers.\n* It was during this epic movement that Rabindranath Tagore conferred the title of ==\"Mahatma\"== on Mohandas Karamchand Gandhi!',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Associates of Gandhiji in Champaran (BPSC TRE Must-Memorize)',
                    textEn: 'Dr. Rajendra Prasad, Acharya J.B. Kripalani, Babu Brajkishore Prasad, Anugrah Narayan Sinha, Mahadev Desai, Narhari Parikh, and Mazhar-ul-Haque.',
                    textHi: 'गांधीजी के मुख्य सहयोगी: डॉ. राजेंद्र प्रसाद, जे.बी. कृपलानी, ब्रजकिशोर प्रसाद, अनुग्रह नारायण सिन्हा, महादेव देसाई एवं मौलाना मजहरुल हक।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Tinkathia System (तिनकठिया प्रणाली)',
                  definitionEn: 'A colonial extortion system in Champaran obligating farmers to cultivate indigo on ==3 out of every 20 kathas== (3/20th) of their best arable land.',
                  definitionHi: 'चंपारण में यूरोपीय नीलहों द्वारा लागू व्यवस्था, जिसमें किसानों को अपनी भूमि के 3/20 भाग पर अनिवार्य रूप से नील की खेती करनी पड़ती थी।'
                },
                {
                  term: 'Bakasht Land (बकाश्त भूमि)',
                  definitionEn: 'Agricultural land cultivated directly by zamindars after legally dispossessing tenant farmers due to rent defaults during the Great Depression.',
                  definitionHi: 'जमींदारों की वह भूमि जिस पर काश्तकारों के लगान न चुका पाने के कारण जमींदारों ने जबरन दखल कर लिया था।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Tinkathia Proportion Rule',
                  formulaOrRule: 'Tinkathia Land Ratio = 3 / 20 = 15% of Agricultural Bigha',
                  explanationEn: '1 Bigha = 20 Kathas in Bihar land measurements. Tinkathia strictly mandated 3 kathas for indigo.',
                },
                {
                  title: 'Champaran Agrarian Committee Refund Formula',
                  formulaOrRule: 'Refund Percentage = 25% of Extorted Tawan/Sharahbeshi',
                  explanationEn: 'Planters agreed to refund exactly 25% of illegal dues, breaking the psychological monopoly of European planters.',
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question Breakdown: Tinkathia Ratio',
                  problemEn: 'Under the Tinkathia system in Champaran, how much land was reserved for indigo cultivation per bigha?',
                  stepByStepSolutionEn: '1. Recognize that 1 Bigha contains exactly 20 Kathas in northern Bihar agrarian measurements.\n2. \"Tin-kathia\" literally translates to \"Three Kathas\".\n3. Therefore, the proportion is precisely 3 Kathas out of 20 Kathas = ==3/20==.',
                  shortcutTrick: 'Tin = 3, Kathia = out of 20 kathas (1 bigha). Directly lock Option with 3/20!'
                }
              ],
              practicalApplications: ['Directly yields 2 to 3 marks across General Studies (Part 2) in all BPSC TRE exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Gandhi was invited to Champaran by Dr. Rajendra Prasad.',
                  whyWrongEn: 'Dr. Rajendra Prasad was practicing law in Patna and joined later. It was ==Raj Kumar Shukla== who personally pursued and brought Gandhi.',
                  correctWayEn: 'Always identify Raj Kumar Shukla as the peasant who invited Gandhi at the Lucknow Congress (1916).'
                },
                {
                  mistakeEn: 'Believing Kunwar Singh was killed in battle at Sheopur Ghat.',
                  whyWrongEn: 'He lost his arm at Sheopur Ghat, but successfully reached Jagdishpur, defeated Le Grand\'s British army, and died of wounds as an undefeated victor on 26 April 1858.',
                  correctWayEn: 'Kunwar Singh died on 26 April 1858 after defeating Captain Le Grand on 23 April 1858.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Who invited Gandhiji to Champaran? (Raj Kumar Shukla at 1916 Lucknow Session)',
                  'What was the fraction of land in Tinkathia? (3/20)',
                  'Where did Kunwar Singh lead the revolt? (Jagdishpur / Arrah / Bihar)',
                  'Who accompanied Gandhi during the Champaran enquiry? (Dr. Rajendra Prasad, J.B. Kripalani, Brajkishore Prasad)'
                ],
                commonDistractorTraps: [
                  'Confusing 3/20 with 1/3 or 3/10',
                  'Confusing Kunwar Singh\'s place of rebellion (Jagdishpur) with Patna (Pir Ali)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.32 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.35 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.35 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Veer Kunwar Singh of Jagdishpur: 80 years old, severed his own arm at Sheopur Ghat, defeated Captain Le Grand on 23 April 1858, died undefeated on 26 April 1858.',
                'Pir Ali Khan: Bookseller of Patna, martyred on 7 July 1857 by William Tayler.',
                'Raj Kumar Shukla of Murali Bharhawa invited Gandhi at the 1916 Lucknow Congress.',
                'Champaran Satyagraha (1917): India\'s first Civil Disobedience movement.',
                'Tinkathia System: 3/20 of land compulsory indigo cultivation.',
                'Champaran Agrarian Committee refunded 25% of extorted money.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bih-1',
                  questionEn: 'Who among the following invited Mahatma Gandhi to visit Champaran at the 1916 Lucknow Congress Session?',
                  options: [
                    { id: 'a', textEn: 'Dr. Rajendra Prasad', isCorrect: false },
                    { id: 'b', textEn: 'Raj Kumar Shukla', isCorrect: true },
                    { id: 'c', textEn: 'Babu Brajkishore Prasad', isCorrect: false },
                    { id: 'd', textEn: 'Swami Sahajanand Saraswati', isCorrect: false }
                  ],
                  explanationEn: 'Raj Kumar Shukla, an indigo cultivator from Murali Bharhawa (Champaran), persistently persuaded Gandhiji to visit Champaran.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                },
                {
                  id: 'kc-bih-2',
                  questionEn: 'What proportion of land was compulsorily reserved for indigo cultivation under the Tinkathia system?',
                  options: [
                    { id: 'a', textEn: '1/3rd of the total land', isCorrect: false },
                    { id: 'b', textEn: '3/20th of the total land', isCorrect: true },
                    { id: 'c', textEn: '3/10th of the total land', isCorrect: false },
                    { id: 'd', textEn: '1/4th of the total land', isCorrect: false }
                  ],
                  explanationEn: '1 Bigha = 20 Kathas in Bihar. Under Tinkathia, 3 Kathas out of 20 (3/20) had to be planted with indigo.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-1',
                topicId: 'bih-topic-1857-champaran',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under the Tinkathia system in Champaran, the cultivators were bound to grow indigo on what fraction of their land?',
                questionTextHi: 'चंपारण में तिनकठिया पद्धति के अंतर्गत काश्तकारों को अपनी भूमि के कितने हिस्से पर नील की खेती करना अनिवार्य था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '1/3', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '3/20', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '3/10', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Under the oppressive Tinkathia system, tenant farmers were legally obligated to cultivate indigo on exactly 3 out of every 20 kathas (3/20) of their land.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 32,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.32 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-bih-pyq-2',
                topicId: 'bih-topic-1857-champaran',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Who was the peasant leader from Bihar who invited Mahatma Gandhi to visit Champaran to witness the plight of indigo cultivators?',
                questionTextHi: 'बिहार के किस किसान नेता ने गांधीजी को चंपारण के नील किसानों की दुर्दशा देखने हेतु आमंत्रित किया था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Raj Kumar Shukla', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Swami Sahajanand Saraswati', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Karyanand Sharma', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Raj Kumar Shukla persistently followed Mahatma Gandhi from the Lucknow Congress of 1916 until Gandhi agreed to travel to Champaran in April 1917.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 35,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.35 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 1.2: Swami Sahajanand Saraswati & Kisan Sabha
          {
            id: 'bih-topic-kisan-sabha-sahajanand',
            chapterId: 'bih-ch-freedom-struggle',
            topicNumber: 2,
            slug: 'kisan-sabha-swami-sahajanand-saraswati',
            titleEn: 'Swami Sahajanand Saraswati & The Kisan Sabha Movement',
            titleHi: 'Swami Sahajanand Saraswati & The Kisan Sabha Movement',
            descriptionEn: 'Formation of Bihar Provincial Kisan Sabha (1929) at Sonepur Fair, AIKS Lucknow (1936), Bakasht Movement at Barahiya Tal, and Karyanand Sharma.',
            descriptionHi: 'सोनपुर मेला (1929) में बिहार प्रांतीय किसान सभा का गठन, 1936 लखनऊ में अखिल भारतीय किसान सभा (AIKS), बड़हिया टाल में बकाश्त सत्याग्रह एवं कार्यानंद शर्मा।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.31) & TRE 3.0 (Q.33)',
            isStoryFormat: true,
            storyEra: 'Sonepur Fair 1929 to Bakasht Struggle 1939',
            tutorial: {
              id: 'tut-bih-kisan-sabha',
              topicId: 'bih-topic-kisan-sabha-sahajanand',
              titleEn: 'Peasant Awakening: Swami Sahajanand & The Kisan Sabha',
              titleHi: 'Peasant Awakening: Swami Sahajanand & The Kisan Sabha',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 16,
              learningObjectives: [
                'Understand the formation of the Bihar Provincial Kisan Sabha (BPKS) at Sonepur in 1929.',
                'Learn about the founders: Swami Sahajanand Saraswati, Sri Krishna Sinha, and Karyanand Sharma.',
                'Trace the historic founding of the All India Kisan Sabha (AIKS) in Lucknow in April 1936.',
                'Master the Bakasht Movement in Barahiya Tal (Monghyr) led by Karyanand Sharma.'
              ],
              introductionEn: '==\"जो अन्न उपजाएगा, अब वही देश चलाएगा!\"== (The peasant who grows the grain shall henceforth govern the nation!). This thunderous proclamation echoed across the villages of Bihar in the 1930s.\n\nLed by an austere ascetic who cast aside his holy staff to take up the wooden danda of the starving peasant, **Swami Sahajanand Saraswati** transformed Bihar into the epicenter of the greatest agrarian revolution in Asian history.',
              introductionHi: 'स्वामी सहजानंद सरस्वती भारतीय किसान आंदोलन के निर्विवाद जनक थे। उन्होंने संन्यास के पारंपरिक मार्ग को छोड़कर शोषित किसानों की पीड़ा को अपना धर्म बनाया। 1929 के सोनपुर मेले से लेकर 1936 के लखनऊ सम्मेलन तक, स्वामी जी ने जमींदारी उत्पीड़न और बेदखली के विरुद्ध जो शंखनाद किया, उसने ब्रिटिश हुकूमत और देशी जमींदारों दोनों की नींव हिला दी।',
              conceptSections: [
                {
                  title: 'The Sonepur Mela Historic Convention (November 1929)',
                  contentMarkdownEn: '### Birth of the Bihar Provincial Kisan Sabha\nIn November 1929, at the world-famous cattle fair in **Sonepur (Saran)**, progressive nationalists gathered to protect peasants from brutal landlord evictions.\n* Under the leadership of Swami Sahajanand Saraswati, the ==Bihar Provincial Kisan Sabha (BPKS)== was officially formed.\n* **President**: Swami Sahajanand Saraswati.\n* **Secretary**: **Dr. Sri Krishna Sinha** (who later became the first Chief Minister of Bihar / Bihar Kesari).\n* Other stalwart leaders: Yamuna Karjee, Rahul Sankrityayan, and Yadunandan Sharma.\n\n### All India Kisan Sabha (Lucknow, April 1936)\nBy 1936, the peasant fire ignited in Bihar swept across the country. In April 1936, during the Lucknow Congress session:\n* The ==All India Kisan Sabha (AIKS)== was founded.\n* **President**: ==Swami Sahajanand Saraswati==.\n* **General Secretary**: **N.G. Ranga** (from Andhra Pradesh).\n* Jawaharlal Nehru addressed the historic first session.\n* The Kisan Manifesto demanded the total abolition of zamindari and cancellation of agricultural debts.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC High-Yield Fact',
                    textEn: 'Swami Sahajanand Saraswati is revered as ==\"Kisan Pran\"== (The Life of Peasants). He established his primary ashram at **Bihta (near Patna)**, which served as the operational command center for peasant mobilization.',
                    textHi: 'स्वामी सहजानंद सरस्वती को \'किसान प्राण\' कहा जाता है। उन्होंने अपना मुख्य आश्रम बिहटा (पटना) में स्थापित किया था।'
                  }
                },
                {
                  title: 'The Bakasht Land Satyagraha at Barahiya Tal (1937–39)',
                  contentMarkdownEn: '### The Battle for Bakasht Land\nDuring the Great Depression of 1929–33, crashing agricultural prices made it impossible for impoverished tenants to pay high cash rents (*Lagaan*). Zamindars ruthlessly seized their lands, converting them into *Bakasht* (land in zamindar\'s direct possession) and treating former owners as bonded day-laborers.\n\n### The Hero of Barahiya: Karyanand Sharma\nIn **Barahiya Tal (Monghyr district)**, communist and kisan leader ==Karyanand Sharma== led thousands of landless peasants to forcibly plough and harvest the Bakasht lands. Women armed with sickles and chilli powder defended their fields against the lathis of zamindari mercenaries.\n\nOther epic Bakasht movements in Bihar:\n* **Reora Satyagraha (Gaya)**: Led by **Yadunandan Sharma**.\n* **Amwari Satyagraha (Chhapra)**: Led by celebrated scholar and explorer **Rahul Sankrityayan**.\n* **Chhatapur (Bhagalpur)**: Led by **Narahari Parikh** and local leaders.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'Leader vs Area Match (Very Common in BPSC)',
                    textEn: '1. Barahiya Tal (Monghyr) → Karyanand Sharma\n2. Reora (Gaya) → Yadunandan Sharma\n3. Amwari (Saran/Chhapra) → Rahul Sankrityayan',
                    textHi: '1. बड़हिया टाल (मुंगेर) → कार्यानंद शर्मा\n2. रेवड़ा (गया) → यदुनंदन शर्मा\n3. अंबवारी (छपरा) → राहुल सांकृत्यायन'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Bihar Provincial Kisan Sabha (1929)',
                  definitionEn: 'The pioneering provincial peasant union formed at the Sonepur Fair in November 1929 by Swami Sahajanand Saraswati to defend tenants against eviction.',
                  definitionHi: 'नवंबर 1929 में सोनपुर मेले में स्वामी सहजानंद सरस्वती द्वारा गठित प्रांतीय संगठन जिसका उद्देश्य जमींदारों के अत्याचारों से किसानों की रक्षा करना था।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'AIKS 1936 Leadership Duo',
                  formulaOrRule: 'AIKS President (Swami Sahajanand) + General Secretary (N.G. Ranga) = Lucknow 1936',
                  explanationEn: 'Essential BPSC memory rule: President was always Swami Sahajanand, General Secretary was N.G. Ranga.',
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question Breakdown: BPKS Founder',
                  problemEn: 'Who founded the Bihar Provincial Kisan Sabha in 1929?',
                  stepByStepSolutionEn: '1. Recall the Sonepur Fair meeting in November 1929.\n2. The undisputed founder and president was Swami Sahajanand Saraswati.\n3. Verify that Dr. Sri Krishna Sinha was the Secretary.\n4. Mark Swami Sahajanand Saraswati as the founder.',
                  shortcutTrick: 'Kisan movement in Bihar = Swami Sahajanand Saraswati. Direct 5-second answer!'
                }
              ],
              practicalApplications: ['Directly tested in BPSC TRE Part 2 (General Studies) and Part 3 (Social Science/History).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Dr. Rajendra Prasad was the president of the Bihar Provincial Kisan Sabha.',
                  whyWrongEn: 'Dr. Rajendra Prasad represented the moderate Congress leadership. It was ==Swami Sahajanand Saraswati== who founded and presided over BPKS.',
                  correctWayEn: 'President was Swami Sahajanand; Secretary was Sri Krishna Sinha.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Who founded the Bihar Provincial Kisan Sabha in 1929? (Swami Sahajanand Saraswati)',
                  'Where was BPKS formed? (Sonepur Fair, November 1929)',
                  'Who presided over the First All India Kisan Sabha in Lucknow in 1936? (Swami Sahajanand Saraswati)',
                  'Who led the Bakasht movement in Barahiya Tal? (Karyanand Sharma)'
                ],
                commonDistractorTraps: [
                  'Confusing the secretary (Sri Krishna Sinha) with the president (Swami Sahajanand)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.31 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.33 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Bihar Provincial Kisan Sabha: Founded in November 1929 at Sonepur Mela by Swami Sahajanand Saraswati.',
                'Dr. Sri Krishna Sinha was the first secretary of BPKS.',
                'All India Kisan Sabha: Founded in April 1936 at Lucknow. President: Swami Sahajanand; Gen Sec: N.G. Ranga.',
                'Ashram: Bihta (Patna).',
                'Barahiya Tal Bakasht Movement: Led by Karyanand Sharma.',
                'Reora (Gaya) Satyagraha: Led by Yadunandan Sharma.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-kisan-1',
                  questionEn: 'Who presided over the first session of the All India Kisan Sabha held in Lucknow in April 1936?',
                  options: [
                    { id: 'a', textEn: 'N.G. Ranga', isCorrect: false },
                    { id: 'b', textEn: 'Swami Sahajanand Saraswati', isCorrect: true },
                    { id: 'c', textEn: 'Jawaharlal Nehru', isCorrect: false },
                    { id: 'd', textEn: 'Acharya Narendra Dev', isCorrect: false }
                  ],
                  explanationEn: 'Swami Sahajanand Saraswati presided over the historic first session of the AIKS in Lucknow in April 1936, while N.G. Ranga was elected General Secretary.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-3',
                topicId: 'bih-topic-kisan-sabha-sahajanand',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Who founded the Bihar Provincial Kisan Sabha (BPKS) in 1929?',
                questionTextHi: 'बिहार प्रांतीय किसान सभा (BPKS) का गठन 1929 में किसने किया था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Swami Sahajanand Saraswati', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Dr. Rajendra Prasad', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Jayaprakash Narayan', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Swami Sahajanand Saraswati formed the Bihar Provincial Kisan Sabha in November 1929 during the Sonepur Fair to mobilize tenant farmers against landlord oppression.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 31,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.31 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },
      // ----------------------------------------------------
      // CHAPTER 2: BIHAR GEOGRAPHY, RIVER SYSTEMS & AGRO-CLIMATIC ZONES
      // ----------------------------------------------------
      {
        id: 'bih-ch-geography',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 2,
        slug: 'bihar-geography-rivers-agro-zones',
        titleEn: 'Bihar Geography, River Systems & Agro-Climatic Zones',
            titleHi: 'Bihar Geography, River Systems & Agro-Climatic Zones',
        descriptionEn: 'The path of River Ganga across 12 districts, Himalayan and Peninsular tributaries, and the 3 Agro-Climatic Zones (Zone I, II, III-A & III-B).',
        descriptionHi: 'गंगा नदी का 12 जिलों में प्रवाह, हिमालयी एवं प्रायद्वीपीय सहायक नदियां (कोसी, गंडक, सोन), तथा बिहार के कृषि-जलवायु क्षेत्र (जोन I, II, III-A, III-B)।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          // Topic 2.1: River Systems & The 12 Ganga Districts
          {
            id: 'bih-topic-rivers-drainage',
            chapterId: 'bih-ch-geography',
            topicNumber: 1,
            slug: 'river-systems-ganga-twelve-districts',
            titleEn: 'River Systems of Bihar & The 12 Ganga Districts',
            titleHi: 'River Systems of Bihar & The 12 Ganga Districts',
            descriptionEn: 'Entry at Chausa (Buxar) to exit at Katihar, traversing 445 km across 12 districts, North-bank glacial rivers vs South-bank peninsular rivers.',
            descriptionHi: 'चौसा (बक्सर) में प्रवेश से कटिहार तक 445 किमी का प्रवाह, गंगा के किनारे स्थित 12 जिले, तथा उत्तर व दक्षिण बिहार की प्रमुख सहायक नदियां।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Repeatedly tested in BPSC TRE 1.0 (Q.38), TRE 2.0 (Q.38) & TRE 3.0 (Q.39)',
            isStoryFormat: true,
            storyEra: 'Physical Geography & Fluvial Evolution of Bihar',
            tutorial: {
              id: 'tut-bih-rivers',
              topicId: 'bih-topic-rivers-drainage',
              titleEn: 'The Lifeline of Bihar: Ganga & Drainage Architecture',
              titleHi: 'The Lifeline of Bihar: Ganga & Drainage Architecture',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Memorize the exact 12 districts along the banks of River Ganga in Bihar.',
                'Identify entry points: Ganga enters at Chausa (Buxar) and exits at Katihar.',
                'Distinguish North-bank Himalayan tributaries (Gandak, Kosi, Bagmati) from South-bank tributaries (Son, Punpun, Falgu).',
                'Examine the confluence points (e.g. Son meets Ganga near Maner/Patna, Gandak at Sonpur/Hajipur).'
              ],
              introductionEn: '==River Ganga divides the State of Bihar into two unequal halves: North Bihar Plain and South Bihar Plain.== Flowing for 445 km through the heart of Bihar, she touches exactly 12 districts.\n\nMastering this fluvial anatomy gives you an unshakeable advantage, as BPSC asks at least 1 or 2 direct questions on Bihar river confluences and districts every year.',
              introductionHi: 'गंगा नदी बिहार को दो असमान भागों—उत्तरी बिहार का मैदान और दक्षिणी बिहार का मैदान—में विभाजित करती है। बिहार में गंगा की कुल लंबाई 445 किमी है और यह ठीक 12 जिलों से होकर प्रवाहित होती है। BPSC TRE में गंगा के किनारे स्थित जिलों और नदियों के संगम स्थल से संबंधित प्रश्न अनिवार्य रूप से पूछे जाते हैं।',
              conceptSections: [
                {
                  title: 'The 12 Districts Bordering River Ganga',
                  contentMarkdownEn: '### The West-to-East Flow Path\nRiver Ganga enters Bihar at **Chausa (Buxar district)** on the western border and leaves Bihar at **Katihar district** on the eastern border.\n\nThe ==12 districts bordering River Ganga== in exact geographical sequence from West to East are:\n1. **Buxar** (बक्सर)\n2. **Bhojpur** (भोजपुर)\n3. **Saran** (सारण / छपरा)\n4. **Patna** (पटना — has the maximum river length of 99 km!)\n5. **Vaishali** (वैशाली / हाजीपुर)\n6. **Samastipur** (समस्तीपुर)\n7. **Begusarai** (बेगूसराय — home to Kanwar Lake / Kabartal Ramsar site!)\n8. **Lakhisarai** (लखीसराय)\n9. **Munger** (मुंगेर)\n10. **Khagaria** (खगड़िया)\n11. **Bhagalpur** (भागलपुर — Vikramshila Gangetic Dolphin Sanctuary!)\n12. **Katihar** (कटिहार)\n\n* ==Maximum Length in a Single District==: **Patna** (~99 km), followed by Bhagalpur.\n* ==Minimum Length==: Samastipur and Lakhisarai.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Trap: Districts that DO NOT touch Ganga',
                    textEn: 'BPSC often inserts **Nalanda**, **Gaya**, or **Muzaffarpur** as trap options. None of these three touch the river Ganga!',
                    textHi: 'नालंदा, गया, और मुजफ्फरपुर गंगा नदी को स्पर्श नहीं करते हैं।'
                  }
                },
                {
                  title: 'North-Bank vs. South-Bank Tributaries',
                  contentMarkdownEn: '### North-Bank Himalayan Rivers (Perennial & Flood-Prone)\n* **Ghaghara (Saryu)**: Enters at Saran; meets Ganga at Revelganj (Chhapra).\n* **Gandak (Narayani/Saligrami)**: Originates in Tibet/Nepal; enters Bihar at Valmiki Nagar (West Champaran); meets Ganga at **Pahleza Ghat (near Sonepur/Hajipur)**.\n* **Burhi Gandak**: Originates in Someshwar Hills (Chautarwa Chaur, West Champaran); meets Ganga near **Khagaria**.\n* **Bagmati**: Merges with Kosi in Badlaghat.\n* **Kosi (\"Sorrow of Bihar\")**: Formed by the confluence of seven Himalayan streams (Saptakoshi); enters Bihar at Bhimnagar (Supaul); notoriously shifts its course; meets Ganga at **Kursela (Katihar)**.\n\n### South-Bank Peninsular Rivers (Rainfed & Seasonal)\n* **Karamnasa**: Originates in Kaimur range; considered unholy/inauspicious in mythology; meets Ganga at Chausa.\n* **Son**: Originates at **Amarkantak** (Madhya Pradesh); enters Bihar near Rohtas; meets Ganga near **Maner (Patna)**.\n* **Punpun**: Originates in Palamu (Chota Nagpur); sacred for Pinda Daan; meets Ganga at **Fatuha (Patna)**.\n* **Falgu (Niranjana + Mohana)**: Flowing through Gaya; Lord Buddha attained enlightenment on the banks of Niranjana; sacred Falgu Rubber Dam (Gayaji Dam) built on it.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Must-Memorize Confluences for TRE 4.0',
                    textEn: '1. Son meets Ganga → ==Maner (Patna)==\n2. Punpun meets Ganga → ==Fatuha==\n3. Gandak meets Ganga → ==Sonepur/Hajipur==\n4. Kosi meets Ganga → ==Kursela (Katihar)==',
                    textHi: '1. सोन + गंगा → मनेर\n2. पुनपुन + गंगा → फतुहा\n3. गंडक + गंगा → सोनपुर\n4. कोसी + गंगा → कुरसेला (कटिहार)'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Chaur and Maun (चौर एवं मन)',
                  definitionEn: 'Oxbow lakes and saucer-shaped, marshy depressions formed in the floodplains of North Bihar by meandering rivers like Gandak and Burhi Gandak.',
                  definitionHi: 'उत्तरी बिहार के मैदानों में विसर्पी नदियों द्वारा छोड़े गए गोखुर झील व दलदली निम्न भूमि को चौर या मन कहा जाता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Ganga Spatial Metrics in Bihar',
                  formulaOrRule: 'Length = 445 km, Districts = 12, Longest Stretch = Patna (99 km)',
                  explanationEn: 'Ganga flows 445 km through Bihar, touching 12 districts with Patna having the longest stretch.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Confluence of River Punpun',
                  problemEn: 'At which of the following places does the river Punpun join the river Ganga?',
                  stepByStepSolutionEn: '1. Recall south bank tributaries entering near Patna.\n2. Son joins at Maner (west of Patna).\n3. Punpun joins Ganga at Fatuha (east of Patna).\n4. Select Fatuha.',
                  shortcutTrick: 'Punpun = Pinda Daan gateway = Fatuha!'
                }
              ],
              practicalApplications: ['Directly tested across BPSC TRE General Studies papers.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Gaya is situated on the banks of River Ganga.',
                  whyWrongEn: 'Gaya is situated on the banks of River ==Falgu==, more than 100 km south of Ganga.',
                  correctWayEn: 'Gaya is on the Falgu (Niranjana) river.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'How many districts in Bihar touch the River Ganga? (12 districts)',
                  'Where does River Punpun join the Ganga? (Fatuha)',
                  'Where does River Son join the Ganga? (Maner near Danapur)',
                  'Where does River Kosi join the Ganga? (Kursela in Katihar)'
                ],
                commonDistractorTraps: [
                  'Options including Nalanda, Gaya, or Muzaffarpur as Ganga districts',
                  'Confusing Fatuha (Punpun) with Maner (Son)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.38 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.38 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Ganga in Bihar: 445 km long, enters at Chausa (Buxar), leaves at Katihar.',
                '12 Districts: Buxar, Bhojpur, Saran, Patna, Vaishali, Samastipur, Begusarai, Lakhisarai, Munger, Khagaria, Bhagalpur, Katihar.',
                'Longest in Patna (~99 km).',
                'Son joins at Maner, Punpun joins at Fatuha, Gandak joins at Sonepur, Kosi joins at Kursela.',
                'Falgu is formed by Niranjana + Mohana rivers.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-rivers-1',
                  questionEn: 'River Punpun joins River Ganga at which of the following locations in Bihar?',
                  options: [
                    { id: 'a', textEn: 'Maner', isCorrect: false },
                    { id: 'b', textEn: 'Fatuha', isCorrect: true },
                    { id: 'c', textEn: 'Digha', isCorrect: false },
                    { id: 'd', textEn: 'Munger', isCorrect: false }
                  ],
                  explanationEn: 'River Punpun, originating from Chota Nagpur, meets River Ganga at Fatuha, about 25 km east of Patna.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-4',
                topicId: 'bih-topic-rivers-drainage',
                chapterId: 'bih-ch-geography',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'How many districts in Bihar are situated on the banks of River Ganga?',
                questionTextHi: 'बिहार के कितने जिले गंगा नदी के किनारे स्थित हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '10', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '12', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '14', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Exactly 12 districts in Bihar are situated along the banks of River Ganga: Buxar, Bhojpur, Saran, Patna, Vaishali, Samastipur, Begusarai, Lakhisarai, Munger, Khagaria, Bhagalpur, and Katihar.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 38,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.38 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 2.2: Agro-Climatic Zones & Soils of Bihar
          {
            id: 'bih-topic-agro-climatic-zones-soils',
            chapterId: 'bih-ch-geography',
            topicNumber: 2,
            slug: 'agro-climatic-zones-soils-bihar',
            titleEn: 'Agro-Climatic Zones (Zone I, II, III) & Soils of Bihar',
            titleHi: 'Agro-Climatic Zones (Zone I, II, III) & Soils of Bihar',
            descriptionEn: 'Zone I (North-West alluvial), Zone II (North-East high rainfall), Zone III-A and III-B (South Bihar plains), Piedmont swamp soil, and Karail-Kewal soils.',
            descriptionHi: 'जोन I (उत्तर-पश्चिम जलोढ़ मैदान), जोन II (उत्तर-पूर्व मखाना/जूट क्षेत्र), जोन III (दक्षिण बिहार दलहन/गेहूं क्षेत्र), तराई मिट्टी, तथा करैल-केवाल भारी मटियार मिट्टी।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Tested in BPSC TRE 2.0 (Q.41) & TRE 3.0 (Q.40)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-bih-agro-zones',
              topicId: 'bih-topic-agro-climatic-zones-soils',
              titleEn: 'Agro-Climatic Zones & Soil Geography of Bihar',
              titleHi: 'Agro-Climatic Zones & Soil Geography of Bihar',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 14,
              learningObjectives: [
                'Identify the 3 major Agro-Climatic Zones of Bihar (Zone I, Zone II, and Zone III).',
                'Understand the division of South Bihar into Zone III-A (South-East) and Zone III-B (South-West).',
                'Examine Piedmont Swamp Soil in West Champaran and Terai Soil along the Nepal border.',
                'Analyze Karail-Kewal clayey soil characteristics in South Bihar plains.'
              ],
              introductionEn: '==Agriculture is the backbone of Bihar\'s economy, engaging over 75% of the working population.== To optimize agricultural policy and crop selection, the State of Bihar is classified into **three distinct Agro-Climatic Zones** based on rainfall, temperature, terrain, and soil composition.',
              introductionHi: 'बिहार एक कृषि-प्रधान राज्य है। कृषि अनुसंधान परिषद द्वारा बिहार को तीन मुख्य कृषि-जलवायु क्षेत्रों में विभाजित किया गया है। उत्तरी बिहार में दो जोन (जोन I एवं जोन II) तथा दक्षिणी बिहार में जोन III (उप-विभाजित: III-A एवं III-B) आते हैं।',
              conceptSections: [
                {
                  title: 'The 3 Agro-Climatic Zones of Bihar',
                  contentMarkdownEn: '### Zone I: North-West Alluvial Plains (13 Districts)\n* **Districts**: West Champaran, East Champaran, Sheohar, Sitamarhi, Madhubani, Muzaffarpur, Darbhanga, Vaishali, Samastipur, Gopalganj, Siwan, Saran, Begusarai.\n* **Rainfall**: 1040 – 1450 mm.\n* **Soil**: Rich calcareous alluvial soil.\n* **Crops**: Rice, Wheat, Sugarcane, Maize, Litchi (Shahi Litchi of Muzaffarpur GI tag).\n\n### Zone II: North-East Alluvial Plains (8 Districts)\n* **Districts**: Supaul, Saharsa, Madhepura, Araria, Kishanganj, Purnea, Katihar, Khagaria.\n* **Rainfall**: Highest in Bihar (1200 – 1700 mm). ==Kishanganj receives the highest annual rainfall in Bihar (~1800 mm)==.\n* **Soil**: Non-calcareous sandy loam, acidic in parts.\n* **Crops**: Jute (Purnea/Katihar), Maize, and world-renowned **Makhana (Fox Nut - Mithila Makhana GI Tag)**.\n\n### Zone III: South Bihar Alluvial Plains (17 Districts)\nSubdivided by River Kiul into:\n* **Zone III-A (South-East, 6 Districts)**: Sheikhpura, Munger, Jamui, Lakhisarai, Bhagalpur, Banka.\n* **Zone III-B (South-West, 11 Districts)**: Rohtas, Kaimur, Buxar, Bhojpur, Patna, Nalanda, Arwal, Jehanabad, Aurangabad, Gaya, Nawada.\n* **Rainfall**: Lowest in Bihar (990 – 1240 mm). ==Gaya is both the hottest and coldest district==.\n* **Soil**: Heavy clayey Old Alluvium (**Bangar / Karail-Kewal**).\n* **Crops**: Pulses (Gram, Lentil/Masoor in Mokama Tal), Wheat, and Rice (Rohtas is the Rice Bowl of Bihar).',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC Extremes in Weather & Crops',
                    textEn: '1. Highest Rainfall District: ==Kishanganj==\n2. Lowest Rainfall District: ==Aurangabad== / Arwal\n3. Hottest & Coldest District: ==Gaya==\n4. Rice Bowl of Bihar: ==Rohtas==',
                    textHi: '1. सर्वाधिक वर्षा: किशनगंज\n2. न्यूनतम वर्षा: औरंगाबाद\n3. सर्वाधिक गर्म व ठंडा जिला: गया\n4. बिहार का धान का कटोरा: रोहतास'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Karail-Kewal Soil (करैल-केवाल मृदा)',
                  definitionEn: 'Heavy, dark clayey old alluvium soil found in South Bihar (Patna to Bhagalpur), with high water-retention capacity and deep cracking upon drying.',
                  definitionHi: 'दक्षिण बिहार के मैदानों में पाई जाने वाली भारी मटियार पुरानी जलोढ़ मिट्टी जिसमें जल धारण क्षमता अधिक होती है और सूखने पर गहरी दरारें पड़ती हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Zone Tally Rule',
                  formulaOrRule: 'Zone I (13 Districts) + Zone II (8 Districts) + Zone III (17 Districts) = Total 38 Districts',
                  explanationEn: 'The 38 districts of Bihar perfectly divide into 13 (NW), 8 (NE), and 17 (South).',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Highest Rainfall District',
                  problemEn: 'Which district of Bihar receives the maximum rainfall?',
                  stepByStepSolutionEn: '1. Zone II North-East receives the maximum monsoon moisture from the Bay of Bengal branch.\n2. The easternmost district bordering West Bengal and Nepal is Kishanganj.\n3. Kishanganj receives ~1800 mm rainfall annually.\n4. Select Kishanganj.',
                  shortcutTrick: 'Easternmost corner = Kishanganj = Highest rainfall!'
                }
              ],
              practicalApplications: ['Directly tested in BPSC TRE Part 2 (General Studies).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Patna receives the highest rainfall.',
                  whyWrongEn: 'Patna lies in Zone III-B and receives moderate rainfall (~1000 mm). Kishanganj receives the highest.',
                  correctWayEn: 'Kishanganj is the wettest district of Bihar.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which district receives maximum rainfall? (Kishanganj)',
                  'Which district is the leading producer of Jute in Bihar? (Purnea)',
                  'Which district has Piedmont swamp soil? (West Champaran)'
                ],
                commonDistractorTraps: [
                  'Confusing Zone II (Purnea/Kishanganj) with Zone I for Jute cultivation'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.41 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Zone I (North-West, 13 districts): Calcareous alluvium, Sugarcane & Shahi Litchi.',
                'Zone II (North-East, 8 districts): Acidic/Sandy, Jute & Mithila Makhana. Kishanganj is wettest.',
                'Zone III (South, 17 districts): Karail-Kewal clay. Rohtas is Rice Bowl.',
                'Piedmont Swamp Soil: Confined exclusively to northwestern corner of West Champaran.',
                'Gaya: Hottest in summer, coldest in winter.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-agro-1',
                  questionEn: 'Which district of Bihar is the leading producer of Jute in the state?',
                  options: [
                    { id: 'a', textEn: 'Patna', isCorrect: false },
                    { id: 'b', textEn: 'Purnea', isCorrect: true },
                    { id: 'c', textEn: 'Gaya', isCorrect: false },
                    { id: 'd', textEn: 'Bhojpur', isCorrect: false }
                  ],
                  explanationEn: 'Purnea (in Agro-Climatic Zone II) is the largest producer of jute in Bihar due to high humidity and abundant rainfall.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-5',
                topicId: 'bih-topic-agro-climatic-zones-soils',
                chapterId: 'bih-ch-geography',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Which of the following districts of Bihar receives the highest annual rainfall?',
                questionTextHi: 'बिहार के निम्नलिखित जिलों में से किस जिले में सर्वाधिक वार्षिक वर्षा होती है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Patna', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Gaya', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Kishanganj', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Kishanganj, situated in the northeastern corner of Bihar (Zone II), receives the highest rainfall (~1800 mm) due to its proximity to the Bay of Bengal branch and Himalayan foothills.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 41,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.41 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: QUIT INDIA MOVEMENT (1942) IN BIHAR
      // ----------------------------------------------------
      {
        id: 'bih-ch-quit-india',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 3,
        slug: 'quit-india-movement-bihar-azad-dasta',
        titleEn: 'Quit India Movement (1942) in Bihar & Azad Dasta',
            titleHi: 'Quit India Movement (1942) in Bihar & Azad Dasta',
        descriptionEn: 'The martyrdom of 7 school students at Patna Secretariat, JP\'s heroic Diwali night jailbreak, and Azad Dasta guerrilla warfare in Nepal.',
        descriptionHi: '11 अगस्त 1942 का पटना सचिवालय गोलीकांड (7 अमर शहीद छात्र), दिवाली की रात जयप्रकाश नारायण का हजारीबाग जेल ब्रेक, तथा नेपाल में आजाद दस्ता।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 65,
        topics: [
          // Topic 3.1: 7 Student Martyrs of Patna Secretariat
          {
            id: 'bih-topic-patna-secretariat-firing',
            chapterId: 'bih-ch-quit-india',
            topicNumber: 1,
            slug: 'patna-secretariat-martyrs-11-august-1942',
            titleEn: 'Blood on the Tricolor: The 7 Martyrs of Patna Secretariat (11 Aug 1942)',
            titleHi: 'Blood on the Tricolor: The 7 Martyrs of Patna Secretariat (11 Aug 1942)',
            descriptionEn: 'The supreme sacrifice of 7 young students marching unarmed to hoist the National Flag on the Secretariat against DM W.G. Archer\'s firing.',
            descriptionHi: 'जिला मजिस्ट्रेट डब्ल्यू. जी. आर्चर के आदेश पर निहत्थे छात्रों पर पुलिस फायरिंग, 7 स्कूली छात्रों की शहादत और अमर शहीद स्मारक।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 10,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Tested in BPSC TRE 1.0 (Q.35) & TRE 3.0 (Q.38)',
            isStoryFormat: true,
            storyEra: '11 August 1942 Patna Secretariat Bloodbath',
            tutorial: {
              id: 'tut-bih-secretariat',
              topicId: 'bih-topic-patna-secretariat-firing',
              titleEn: 'The Immortal Seven: Patna Secretariat Firing of 1942',
              titleHi: 'The Immortal Seven: Patna Secretariat Firing of 1942',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 16,
              learningObjectives: [
                'Learn the names, schools, and districts of the Seven Student Martyrs of Patna Secretariat.',
                'Identify District Magistrate W.G. Archer who ordered the firing on 11 August 1942.',
                'Understand the aftermath: total shutdown of rail, telephone lines, and parallel national governments in Bihar.',
                'Appreciate the Martyr\'s Memorial (Shahid Smarak) sculptured by Debi Prasad Roy Choudhury.'
              ],
              introductionEn: '==11 August 1942. A date written in pure gold and sacrificial blood in the history of Bihar.== Following Gandhiji\'s clarion call of \"Do or Die\" (करो या मरो) and the immediate arrest of national leaders under Operation Zero Hour, the youth of Bihar took the tricolor flag into their own hands.\n\nSeven tender-aged school and college students faced British bullets with their chests out, refusing to let the National Flag fall to the dust.',
              introductionHi: '9 अगस्त 1942 को गांधीजी समेत कांग्रेस के शीर्ष नेताओं को ब्रिटिश सरकार ने गिरफ्तार कर लिया। इसके विरोध में 11 अगस्त 1942 को पटना में हजारों छात्रों का एक विशाल जुलूस राष्ट्रीय ध्वज फहराने पटना सचिवालय की ओर बढ़ा। पटना के क्रूर जिला मजिस्ट्रेट डब्ल्यू. जी. आर्चर ने पुलिस को सीधी गोली चलाने का आदेश दिया। सात निर्दोष छात्र भारत माता की जय बोलते हुए शहीद हो गए।',
              conceptSections: [
                {
                  title: 'The Story of the Seven Immortal Martyrs',
                  contentMarkdownEn: '### The Deadly Firing at 4:57 PM\nOn the afternoon of **11 August 1942**, an unarmed sea of students surrounded the Eastern Gate of the Patna Secretariat. Patna District Magistrate **W.G. Archer** repeatedly ordered the British-led Gurkha military police to open fire.\n\nAs the bullets tore through flesh, when one student holding the flag fell bleeding, another student dashed forward, seized the fallen flag, and carried it ahead until he too was shot down. Seven heroic students made the supreme sacrifice:\n\n1. ==Umakant Prasad Sinha== (उमाकांत प्रसाद सिन्हा) — Class 11, Ram Mohan Roy Seminary, Patna (Resident of Narendrapur, Saran).\n2. ==Ramanand Singh== (रामानंद सिंह) — Class 11, Ram Mohan Roy Seminary, Patna (Resident of Sahadatnagar, Patna).\n3. ==Satish Prasad Jha== (सतीश प्रसाद झा) — Class 10, Patna Collegiate School (Resident of Khahara, Bhagalpur).\n4. ==Jagatpati Kumar== (जगतपति कुमार) — 2nd Year, B.N. College, Patna (Resident of Kharati, Aurangabad).\n5. ==Devipada Choudhury== (देवीपद चौधरी) — Class 9, Miller High School, Patna (Resident of Jamalpur, Sylhet).\n6. ==Rajendra Singh== (राजेन्द्र सिंह) — Class 10, Patna High School (Resident of Banwar Chak, Saran).\n7. ==Ramgovind Singh== (रामगोविंद सिंह) — Class 9, Punpun High School (Resident of Dashratha, Patna).\n\n### The Monument of Freedom\nToday, right in front of the Bihar Vidhan Sabha, stands the magnificent bronze **Shahid Smarak (Martyr\'s Memorial)**, depicting the seven courageous youths marching forward, created by world-renowned sculptor **Devi Prasad Roy Choudhury**.\nThe foundation stone was laid by the first Governor of Bihar, **Jairamdas Daulatram**, on 15 August 1947, and unveiled by the first Prime Minister, **Jawaharlal Nehru**, on 24 October 1956.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC TRE High-Yield Memorization',
                    textEn: 'District Magistrate who ordered firing: ==W.G. Archer==\nDate of Firing: ==11 August 1942==\nNumber of Martyrs: ==7 students==',
                    textHi: 'गोली चलाने का आदेश देने वाला डीएम: डब्ल्यू. जी. आर्चर\nघटना की तारीख: 11 अगस्त 1942\nशहीदों की संख्या: 7 छात्र'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Patna Secretariat Firing (11 August 1942)',
                  definitionEn: 'The brutal British police firing on school and college students attempting to unfurl the Indian National Flag on the Secretariat, resulting in the martyrdom of 7 students.',
                  definitionHi: '11 अगस्त 1942 को पटना सचिवालय पर तिरंगा फहराने के प्रयास में 7 स्कूली छात्रों पर ब्रिटिश पुलिस द्वारा किया गया घातक गोलीकांड।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Archer\'s Order Rule',
                  formulaOrRule: 'Date: 11 August 1942 + DM: W.G. Archer + Victims: 7 School Students',
                  explanationEn: 'The definitive tripartite fact set for BPSC questions on Patna Secretariat firing.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: DM during Patna Secretariat Firing',
                  problemEn: 'Who was the District Magistrate of Patna who ordered firing on students on 11 August 1942?',
                  stepByStepSolutionEn: '1. Recall the 1942 Quit India events in Patna.\n2. The district magistrate who ordered the police firing at the Eastern Gate was W.G. Archer.\n3. Lock Option with W.G. Archer.',
                  shortcutTrick: 'Archer shot bullets like arrows (Archer) on students!'
                }
              ],
              practicalApplications: ['Consistently asked in BPSC teacher examinations.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing William Tayler ordered the 1942 firing.',
                  whyWrongEn: 'William Tayler was commissioner during 1857 (who hanged Pir Ali). In 1942, the DM was ==W.G. Archer==.',
                  correctWayEn: '1857 = William Tayler; 1942 = W.G. Archer.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Who ordered firing on students on 11 August 1942? (W.G. Archer)',
                  'How many students were martyred? (7 students)',
                  'Which school did Devipada Choudhury belong to? (Miller High School)',
                  'Who sculpted the Shahid Smarak in Patna? (Devi Prasad Roy Choudhury)'
                ],
                commonDistractorTraps: [
                  'Confusing W.G. Archer with Le Grand or Tayler'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.35 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.38 Series A)'
                ]
              },
              quickRevisionPoints: [
                '11 August 1942: Firing at Eastern Gate of Patna Secretariat.',
                'DM W.G. Archer ordered firing.',
                '7 Students martyred: Umakant, Ramanand, Satish Jha, Jagatpati, Devipada, Rajendra Singh, Ramgovind.',
                'Memorial sculpted by Devi Prasad Roy Choudhury.',
                'Unveiled on 24 October 1956 by Jawaharlal Nehru.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sec-1',
                  questionEn: 'Who was the District Magistrate of Patna who ordered police firing on the student procession at Patna Secretariat on 11 August 1942?',
                  options: [
                    { id: 'a', textEn: 'William Tayler', isCorrect: false },
                    { id: 'b', textEn: 'W.G. Archer', isCorrect: true },
                    { id: 'c', textEn: 'Captain Le Grand', isCorrect: false },
                    { id: 'd', textEn: 'E.N. Blunt', isCorrect: false }
                  ],
                  explanationEn: 'W.G. Archer was the District Magistrate of Patna who gave the orders to fire upon the unarmed students at the Secretariat.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-6',
                topicId: 'bih-topic-patna-secretariat-firing',
                chapterId: 'bih-ch-quit-india',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'During the Quit India Movement, on 11 August 1942, how many students were killed in police firing at the Patna Secretariat?',
                questionTextHi: 'भारत छोड़ो आंदोलन के दौरान 11 अगस्त 1942 को पटना सचिवालय पर पुलिस गोलीबारी में कितने छात्र शहीद हुए थे?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '5', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '7', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '9', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Exactly seven students were martyred in police firing at the Patna Secretariat on 11 August 1942 while attempting to unfurl the national flag.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 35,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.35 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 3.2: JP Diwali Jailbreak & Azad Dasta
          {
            id: 'bih-topic-azad-dasta-jp-jailbreak',
            chapterId: 'bih-ch-quit-india',
            topicNumber: 2,
            slug: 'jp-hazaribagh-jailbreak-azad-dasta',
            titleEn: 'JP\'s Hazaribagh Diwali Jailbreak & The Azad Dasta Guerrillas',
            titleHi: 'जयप्रकाश नारायण का हजारीबाग जेल ब्रेक एवं आजाद दस्ता',
            descriptionEn: 'The thrilling escape of Loknayak JP on Diwali night (9 Nov 1942) and the training of guerrilla freedom fighters in the Rajvilas jungles of Nepal.',
            descriptionHi: 'दिवाली की रात (9 नवंबर 1942) हजारीबाग सेंट्रल जेल से दीवार फांदकर पलायन, नेपाल के राजविलास जंगल में राम मनोहर लोहिया के साथ आजाद दस्ते की स्थापना।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Tested in BPSC TRE 1.0 (Q.36) & TRE 2.0 (Q.37)',
            isStoryFormat: true,
            storyEra: 'Diwali Night 1942 Hazaribagh Jailbreak to Azad Dasta',
            tutorial: {
              id: 'tut-bih-azad-dasta',
              topicId: 'bih-topic-azad-dasta-jp-jailbreak',
              titleEn: 'The Daring Escape of Loknayak JP & Azad Dasta',
              titleHi: 'The Daring Escape of Loknayak JP & Azad Dasta',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Relive the dramatic escape from Hazaribagh Central Jail on Diwali night (9 November 1942).',
                'Identify JP\'s five comrades who escaped with him.',
                'Learn how Azad Dasta was established in the Rajvilas jungle of Nepal Terai.',
                'Understand the roles of Dr. Ram Manohar Lohia, Suraj Narayan Singh, and Sardar Nityanand Singh.'
              ],
              introductionEn: '==When the open struggle is suppressed by brute force, the underground revolution begins.==\n\nOn the festive night of Diwali in 1942, while jail wardens made merry with fireworks and sweets, six political prisoners tied bedsheets together, scaled a 17-foot stone wall, and vanished into the dense forests. Among them was **Loknayak Jayaprakash Narayan**, destined to become the torchbearer of Indian liberty.',
              introductionHi: '1942 के भारत छोड़ो आंदोलन में जब सारे बड़े नेता जेलों में बंद थे, तब जयप्रकाश नारायण ने हजारीबाग जेल की दीवार फांदकर आंदोलन को एक नई ऊर्जा दी। नेपाल की तराई में \'आजाद दस्ता\' का गठन कर उन्होंने ब्रिटिश हुकूमत के संचार तंत्र, रेलवे पटरियों और थानों को पंगु बना दिया।',
              conceptSections: [
                {
                  title: 'The Hazaribagh Jailbreak: Diwali Night (9 November 1942)',
                  contentMarkdownEn: '### Scaling the 17-Foot Wall\n**Jayaprakash Narayan** had been imprisoned in **Hazaribagh Central Jail** (now in Jharkhand). Observing the Diwali celebrations on ==9 November 1942==, when guarding was lax due to oil lamps and noise, JP and five fearless companions launched their plan.\n\nThe ==Six Freedom Fighters== who scaled the prison wall were:\n1. **Jayaprakash Narayan**\n2. **Ramanandan Mishra**\n3. **Yogendra Shukla** (the lion-hearted revolutionary who carried JP on his shoulders through rivers)\n4. **Suraj Narayan Singh**\n5. **Gulab Chand Gupta** (Gulabi Sonar)\n6. **Shaligram Singh**\n\nThey marched barefoot through hills and malaria-infested jungles, crossing the border into the independent kingdom of Nepal.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC TRE Repeated Question',
                    textEn: 'BPSC TRE repeatedly asks: *\"On which festival did Jayaprakash Narayan escape from Hazaribagh Jail?\"* The answer is ==Diwali== (दिवाली).',
                    textHi: 'जयप्रकाश नारायण हजारीबाग जेल से ==दिवाली== के पावन त्योहार की रात फरार हुए थे।'
                  }
                },
                {
                  title: 'The Azad Dasta in Rajvilas Forest of Nepal',
                  contentMarkdownEn: '### The Guerrilla Sabotage Organization\nIn early 1943, in the **Rajvilas forest of Nepal Terai**, JP founded the ==Azad Dasta (आजाद दस्ता)==.\n* **Objective**: Paralyze the British war machinery through targeted sabotage: cutting telegraph wires, blowing up railway tracks supplying Allied forces, and raiding police arms dumps—without causing loss of civilian lives.\n* **Director of Radio & Underground Publicity**: **Dr. Ram Manohar Lohia** (operated underground radio from Nepal and Bombay).\n* **Chief Military Trainer**: **Sardar Nityanand Singh** (trained revolutionary youth in bomb-making and firearms).\n\n### The Hanumannagar Jail Heroic Raid\nIn May 1943, under intense British pressure, the Nepalese Rana police arrested JP and Dr. Lohia and detained them in **Hanumannagar Jail (Nepal)**.\n\nOn the night of **22 May 1943**, a heroic strike squad led by ==Suraj Narayan Singh== raided Hanumannagar Jail with pistols, overpowered the Nepalese guards, broke open the cells, and **rescued both Jayaprakash Narayan and Ram Manohar Lohia**!',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'Hanumannagar Hero',
                    textEn: 'Who led the armed raid to free JP and Lohia from Hanumannagar Jail? ==Suraj Narayan Singh==.',
                    textHi: 'हनुमाननगर जेल पर छापा मारकर जेपी और लोहिया को मुक्त कराने वाले दस्ते के नेता ==सूरज नारायण सिंह== थे।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Azad Dasta (आजाद दस्ता)',
                  definitionEn: 'An underground guerrilla sabotage resistance founded by Jayaprakash Narayan in Nepal in 1942 to disrupt British transportation and communications.',
                  definitionHi: '1942 में जयप्रकाश नारायण द्वारा नेपाल के जंगलों में गठित भूमिगत क्रांतिकारी दस्ता जिसका कार्य ब्रिटिश संचार एवं परिवहन को नष्ट करना था।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Azad Dasta Leadership Formula',
                  formulaOrRule: 'Founder (JP) + Underground Radio (Lohia) + Military Training (Nityanand Singh) + Rescue Raid (Suraj Narayan Singh)',
                  explanationEn: 'The four cornerstones of the 1942 Nepal underground guerrilla resistance.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Festival on JP\'s Escape',
                  problemEn: 'On the night of which festival did Jayaprakash Narayan escape from Hazaribagh Central Jail in 1942?',
                  stepByStepSolutionEn: '1. Recall the date: 9 November 1942.\n2. The festival celebrated that evening across northern India was Diwali (Festival of Lights).\n3. Lock Option with Diwali.',
                  shortcutTrick: 'Diwali fireworks masked the escape over the 17-foot wall!'
                }
              ],
              practicalApplications: ['Directly tested across BPSC TRE 1.0, 2.0 & 3.0.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking JP escaped from Bankipur Jail in Patna.',
                  whyWrongEn: 'Dr. Rajendra Prasad was imprisoned in Bankipur Jail (Patna). JP was in ==Hazaribagh Central Jail==.',
                  correctWayEn: 'JP escaped from Hazaribagh Jail; Rajendra Prasad was detained in Bankipur Jail.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'From which jail did JP escape? (Hazaribagh Central Jail)',
                  'On which festival did JP escape? (Diwali, 9 November 1942)',
                  'Where was Azad Dasta formed? (Nepal / Rajvilas Jungle)',
                  'Who led the raid on Hanumannagar jail to free JP? (Suraj Narayan Singh)'
                ],
                commonDistractorTraps: [
                  'Confusing Holi or Dussehra with Diwali',
                  'Confusing Bankipur Jail (Patna) with Hazaribagh Jail'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.36 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.37 Series A)'
                ]
              },
              quickRevisionPoints: [
                '9 November 1942: JP escaped from Hazaribagh Central Jail on Diwali night.',
                'Escaped with Yogendra Shukla, Ramanandan Mishra, Suraj Narayan Singh, Shaligram Singh, Gulab Chand Gupta.',
                'Azad Dasta founded in Nepal Terai (Rajvilas jungle).',
                'Dr. Ram Manohar Lohia ran the underground radio.',
                'Suraj Narayan Singh rescued JP and Lohia from Hanumannagar Jail.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-jp-1',
                  questionEn: 'On the night of which festival did Jayaprakash Narayan escape from Hazaribagh Central Jail in 1942?',
                  options: [
                    { id: 'a', textEn: 'Holi', isCorrect: false },
                    { id: 'b', textEn: 'Diwali', isCorrect: true },
                    { id: 'c', textEn: 'Dussehra', isCorrect: false },
                    { id: 'd', textEn: 'Chhath Puja', isCorrect: false }
                  ],
                  explanationEn: 'On 9 November 1942, during the Diwali festivities, JP and his comrades escaped over the walls of Hazaribagh Central Jail.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-7',
                topicId: 'bih-topic-azad-dasta-jp-jailbreak',
                chapterId: 'bih-ch-quit-india',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Jayaprakash Narayan escaped from Hazaribagh Central Jail on the night of which festival in 1942?',
                questionTextHi: 'जयप्रकाश नारायण 1942 में किस त्योहार की रात हजारीबाग सेंट्रल जेल से फरार हुए थे?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Holi', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Diwali', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Dussehra', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Jayaprakash Narayan escaped from Hazaribagh Central Jail on the festive night of Diwali (9 November 1942) along with five revolutionary companions.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 36,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.36 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },
  // =========================================================================
  // SUBJECT 2: INDIAN NATIONAL MOVEMENT (1885-1947)
  // =========================================================================
  {
    key: 'INDIAN_HISTORY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian National Movement (1885–1947)',
    displayNameHi: 'भारतीय राष्ट्रीय आंदोलन (1885–1947)',
    iconName: 'BookOpen',
    descriptionEn: 'The historic journey of India\'s freedom: 1905 Swadeshi, 1919 Jallianwala Bagh, 1920 Non-Cooperation, 1930 Dandi Salt March, 1929 Lahore Purna Swaraj, and 1931 Karachi Session.',
    descriptionHi: 'भारतीय स्वतंत्रता संग्राम: 1905 स्वदेशी, 1919 जलियांवाला बाग, 1920 असहयोग आंदोलन, 1930 दांडी नमक सत्याग्रह, 1929 लाहौर पूर्ण स्वराज, तथा 1931 कराची अधिवेशन।',
    chapters: [
      {
        id: 'hist-ch-national-movement',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 4,
        slug: 'indian-national-movement-phases',
        titleEn: 'Major Phases of Indian National Movement',
            titleHi: 'Major Phases of Indian National Movement',
        descriptionEn: 'From Gandhian mass satyagrahas to landmark Congress sessions: 1929 Lahore Purna Swaraj and 1931 Karachi Fundamental Rights.',
        descriptionHi: 'गांधीवादी जन-आंदोलन, 1929 लाहौर अधिवेशन (रावी तट पर पूर्ण स्वराज), तथा 1931 कराची अधिवेशन (मूल अधिकार संकल्प)।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          // Topic 4.1: Gandhian Mass Movements
          {
            id: 'hist-topic-gandhian-movements',
            chapterId: 'hist-ch-national-movement',
            topicNumber: 1,
            slug: 'gandhian-mass-movements-inm',
            titleEn: 'Gandhian Mass Movements (1920–1942) & Revolutionary Heroes',
            titleHi: 'Gandhian Mass Movements (1920–1942) & Revolutionary Heroes',
            descriptionEn: 'Non-Cooperation Movement (1920), Chauri Chaura incident (1922), Civil Disobedience & Dandi March (1930), and Quit India (1942).',
            descriptionHi: 'असहयोग आंदोलन (1920), चौरी-चौरा कांड (4 फरवरी 1922), सविनय अवज्ञा एवं दांडी मार्च (12 मार्च–6 अप्रैल 1930), तथा भारत छोड़ो आंदोलन (1942)।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Tested across BPSC TRE 1.0 (Q.33), TRE 2.0 (Q.33) & TRE 3.0 (Q.34)',
            isStoryFormat: true,
            storyEra: '1905 Swadeshi to 1942 Quit India',
            tutorial: {
              id: 'tut-hist-gandhi-movements',
              topicId: 'hist-topic-gandhian-movements',
              titleEn: 'The Epic Arc of Gandhian Mass Satyagraha',
              titleHi: 'The Epic Arc of Gandhian Mass Satyagraha',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 16,
              learningObjectives: [
                'Trace the timeline: Rowlatt Act (1919), Jallianwala Bagh Massacre (13 April 1919), Non-Cooperation Movement (1920).',
                'Examine the Chauri Chaura incident (4 February 1922) and the withdrawal of Non-Cooperation.',
                'Master the Dandi Salt March (12 March – 6 April 1930): 78 delegates, 240 miles from Sabarmati to Dandi.',
                'Understand the Quit India Resolution passed at Gowalia Tank (Mumbai) on 8 August 1942.'
              ],
              introductionEn: '==\"सत्य और अहिंसा मेरे दो फेफड़े हैं।\" (Truth and Non-violence are my two lungs.)== With these revolutionary weapons, Mahatma Gandhi mobilized millions of ordinary peasants, workers, and women, transforming a petitioning political club into the world\'s largest anti-colonial mass movement.',
              introductionHi: '1919 में रोलेट एक्ट के काले कानून और 13 अप्रैल 1919 को जलियांवाला बाग में निहत्थे भारतीयों पर जनरल डायर की गोलियों ने भारत की आत्मा को झकझोर कर रख दिया। इसके बाद गांधीजी के नेतृत्व में असहयोग, सविनय अवज्ञा और भारत छोड़ो जैसे तीन राष्ट्रव्यापी महा-आंदोलन चले, जिन्होंने ब्रिटिश साम्राज्य की जड़ें हिला दीं।',
              conceptSections: [
                {
                  title: 'From Non-Cooperation (1920) to Dandi March (1930)',
                  contentMarkdownEn: '### 1. Non-Cooperation Movement (1920–1922)\n* Launched on **1 August 1920** (the very morning Lokmanya Bal Gangadhar Tilak passed away).\n* Main pillars: Surrender of government titles, boycott of foreign cloth, courts, and government schools; promotion of Charkha and Khadi.\n* **Chauri Chaura Incident**: On ==4 February 1922==, at Chauri Chaura in Gorakhpur district (UP), a police firing provoked an angry crowd to set fire to the police station, killing 22 policemen. Heartbroken by the violation of non-violence, Gandhi abruptly suspended the movement on **12 February 1922** at Bardoli.\n\n### 2. Civil Disobedience & The Historic Dandi March (1930)\nOn 31 January 1930, Gandhi sent his famous **Eleven Demands** to Viceroy Lord Irwin. When Irwin ignored them, Gandhi chose salt—the most universal staple of the poorest Indian—as the symbol of civil disobedience.\n* **The March**: Started on ==12 March 1930== from Sabarmati Ashram with **78 trusted followers**.\n* **The Distance**: Marched **240 miles (385 km)** in 24 days.\n* **The Law Broken**: Reached the sea shore at **Dandi** on the evening of 5 April, and on the morning of ==6 April 1930==, Gandhi picked up a handful of natural salt, breaking the British salt monopoly.\n* ==BPSC High Yield Fact==: Who was the only participant from Bihar among the original 78 Dandi Marchers? ==Girivardhari Choudhary (Dharani Dhar Choudhary)== of Darbhanga!',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Trap: Chauri Chaura Date',
                    textEn: 'BPSC officially considers ==4 February 1922== (or 5 February depending on shift) as the date of the Chauri Chaura incident. Bardoli resolution withdrew the movement on 12 February 1922.',
                    textHi: 'चौरी-चौरा कांड: 4 फरवरी 1922। असहयोग आंदोलन वापस लिया गया: 12 फरवरी 1922 (बारदोली प्रस्ताव)।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Satyagraha (सत्याग्रह)',
                  definitionEn: 'Insistence on Truth; a non-violent spiritual weapon of moral resistance pioneered by Mahatma Gandhi in South Africa and Champaran.',
                  definitionHi: 'सत्य के प्रति आग्रह; महात्मा गांधी द्वारा प्रतिपादित अहिंसक आत्मबल एवं नैतिक प्रतिरोध की पद्धति।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Dandi March Metrics Rule',
                  formulaOrRule: 'Start: 12 March 1930 + Days: 24 + Distance: 240 Miles + Followers: 78 + Salt Broken: 6 April 1930',
                  explanationEn: 'The definitive statistical blueprint of the Dandi March tested in competitive exams.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Start Date of Dandi March',
                  problemEn: 'On which date did Mahatma Gandhi begin his historic Dandi March from Sabarmati Ashram?',
                  stepByStepSolutionEn: '1. Recall the timeline of Civil Disobedience.\n2. The march started on 12 March 1930 from Sabarmati with 78 volunteers.\n3. It concluded on 6 April 1930 at Dandi.\n4. Lock 12 March 1930.',
                  shortcutTrick: '12 March start → 6 April salt pickup!'
                }
              ],
              practicalApplications: ['Directly tested across all BPSC exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Dandi March ended on 12 March.',
                  whyWrongEn: '12 March was the start date. It concluded on 6 April 1930.',
                  correctWayEn: 'Started: 12 March 1930; Concluded: 6 April 1930.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Start date of Dandi March (12 March 1930)',
                  'End date of Dandi March (6 April 1930)',
                  'Number of followers on Dandi March (78)',
                  'Date of Chauri Chaura incident (4 February 1922)'
                ],
                commonDistractorTraps: [
                  'Confusing 6 April with 12 March for salt law breaking'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.33 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.33 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Non-Cooperation started: 1 August 1920.',
                'Chauri Chaura: 4 Feb 1922; Movement withdrawn: 12 Feb 1922 at Bardoli.',
                'Dandi March: 12 March to 6 April 1930 (24 days, 240 miles, 78 marchers).',
                'Only participant from Bihar in Dandi march: Girivardhari Choudhary of Darbhanga.',
                'Quit India: 8 August 1942 at Gowalia Tank (Do or Die).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-gandhi-1',
                  questionEn: 'How many trusted volunteers accompanied Mahatma Gandhi when he started the historic Dandi March from Sabarmati Ashram on 12 March 1930?',
                  options: [
                    { id: 'a', textEn: '72', isCorrect: false },
                    { id: 'b', textEn: '78', isCorrect: true },
                    { id: 'c', textEn: '84', isCorrect: false },
                    { id: 'd', textEn: '92', isCorrect: false }
                  ],
                  explanationEn: 'Mahatma Gandhi started the Dandi March on 12 March 1930 with 78 handpicked ashram volunteers.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hist-pyq-1',
                topicId: 'hist-topic-gandhian-movements',
                chapterId: 'hist-ch-national-movement',
                subjectKey: 'INDIAN_HISTORY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'On which date did Mahatma Gandhi begin his historic Dandi March from Sabarmati Ashram to break the Salt Law?',
                questionTextHi: 'महात्मा गांधी ने नमक कानून तोड़ने हेतु साबरमती आश्रम से अपनी ऐतिहासिक दांडी यात्रा किस तारीख को प्रारंभ की थी?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '12 March 1930', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: '6 April 1930', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '15 March 1930', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The historic Dandi Salt March was launched on 12 March 1930 from Sabarmati Ashram, reaching the coast of Dandi on 5 April and breaking the salt monopoly on 6 April 1930.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 33,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.33 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 4.2: Congress Sessions: 1929 Lahore & 1931 Karachi
          {
            id: 'hist-topic-congress-sessions-swaraj',
            chapterId: 'hist-ch-national-movement',
            topicNumber: 2,
            slug: 'congress-sessions-lahore-karachi',
            titleEn: 'Landmark Congress Sessions: 1929 Lahore & 1931 Karachi',
            titleHi: 'Landmark Congress Sessions: 1929 Lahore & 1931 Karachi',
            descriptionEn: 'Midnight tricolor unfurling on the Ravi (Purna Swaraj 1929) under Nehru, and Sardar Patel\'s 1931 Karachi Session on Fundamental Rights.',
            descriptionHi: '1929 लाहौर अधिवेशन (रावी नदी तट पर आधी रात को पूर्ण स्वराज की घोषणा) तथा 1931 कराची अधिवेशन (सरदार पटेल की अध्यक्षता में मूल अधिकारों का ऐतिहासिक प्रस्ताव)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 10,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Directly tested in BPSC TRE 2.0 (Q.34) & TRE 3.0 (Q.31)',
            isStoryFormat: true,
            storyEra: 'Midnight of 31 Dec 1929 to Karachi March 1931',
            tutorial: {
              id: 'tut-hist-sessions',
              topicId: 'hist-topic-congress-sessions-swaraj',
              titleEn: 'Tricolor on the Ravi & The Magna Carta of Karachi',
              titleHi: 'Tricolor on the Ravi & The Magna Carta of Karachi',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Relive the 1929 Lahore Congress Session on the banks of River Ravi under Jawaharlal Nehru.',
                'Understand the historic declaration of Purna Swaraj (Complete Independence) and 26 January 1930 as Independence Day.',
                'Analyze the 1931 Karachi Congress Session presided over by Sardar Vallabhbhai Patel.',
                'Examine the landmark Resolution on Fundamental Rights and National Economic Programme drafted by Nehru.'
              ],
              introductionEn: '==There are moments when a nation decides its own destiny forever.==\n\nIn December 1929, beside the freezing waters of the River Ravi at midnight, a young Jawaharlal Nehru hoisted the Tricolor flag and declared that India would accept nothing less than **Purna Swaraj (Complete Independence)**.\n\nFifteen months later, in March 1931 at Karachi, amidst grief over the martyrdom of Bhagat Singh, Sardar Vallabhbhai Patel led the Congress to adopt India\'s first formal charter of Fundamental Rights.',
              introductionHi: '1929 का लाहौर अधिवेशन और 1931 का कराची अधिवेशन आधुनिक भारतीय इतिहास के दो सबसे महत्वपूर्ण मील के पत्थर हैं। लाहौर में भारत ने पूर्ण स्वतंत्रता का संकल्प लिया, जबकि कराची में स्वतंत्र भारत के सामाजिक-आर्थिक ढांचे और नागरिकों के मूल अधिकारों की पहली वैधानिक रूपरेखा तैयार की गई।',
              conceptSections: [
                {
                  title: '1929 Lahore Session: The Purna Swaraj Declaration',
                  contentMarkdownEn: '### The River Ravi Midnight Declaration\nIn December 1929, the Indian National Congress met in Lahore.\n* **President**: 40-year-old **Jawaharlal Nehru** (proposed by Mahatma Gandhi).\n* **The Goal**: The Congress formally abandoned \"Dominion Status\" and declared ==Purna Swaraj (Complete Independence)== as its sole objective.\n* **Midnight 31 December 1929**: On the banks of River Ravi, Jawaharlal Nehru unfurled the newly adopted tricolor national flag amidst deafening cries of *\"Inquilab Zindabad!\"*\n* **First Independence Day**: It was resolved that **26 January 1930** would be celebrated throughout India as ==Purna Swaraj Day (First Independence Day)== with millions taking the national independence pledge.\n*(This is why our Constitution was specifically enforced on 26 January 1950 to honor this date!)*',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC TRE Must-Know Fact',
                    textEn: 'Who presided over the 1929 Lahore Congress? ==Jawaharlal Nehru==.\nWhere was the session held? ==Banks of River Ravi (Lahore)==.\nWhen was Purna Swaraj Day celebrated? ==26 January 1930==.',
                    textHi: '1929 लाहौर अधिवेशन के अध्यक्ष: पं. जवाहरलाल नेहरू। नदी: रावी। पहला स्वाधीनता दिवस: 26 जनवरी 1930।'
                  }
                },
                {
                  title: '1931 Karachi Session: Fundamental Rights & Economic Program',
                  contentMarkdownEn: '### Sardar Patel\'s Presidency & Bhagat Singh\'s Shadow\nHeld in March 1931 in Karachi, just **six days after the martyrdom of Bhagat Singh, Sukhdev, and Rajguru** (23 March 1931).\n* **President**: ==Sardar Vallabhbhai Patel==.\n* **The Gandhi-Irwin Pact** (Delhi Pact, 5 March 1931) was formally endorsed, enabling Gandhi to attend the Second Round Table Conference.\n* **The Magna Carta**: The session passed the historic ==Resolution on Fundamental Rights and National Economic Programme== (drafted by Jawaharlal Nehru with MN Roy\'s inputs).\n* It promised free speech, equality before law, adult suffrage, free primary education, neutrality of the State in religious matters, and protection of workers\' and peasants\' rights.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Examiner Trap: Who drafted vs Who presided',
                    textEn: 'BPSC frequently tests this trap: Who *presided* over the 1931 Karachi Session? → ==Sardar Vallabhbhai Patel==.\nWho *drafted* the Fundamental Rights Resolution? → ==Jawaharlal Nehru==.',
                    textHi: 'कराची अधिवेशन की अध्यक्षता: सरदार वल्लभभाई पटेल। मूल अधिकार प्रस्ताव का प्रारूप तैयार किया: जवाहरलाल नेहरू।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Purna Swaraj (पूर्ण स्वराज)',
                  definitionEn: 'Complete Independence from British colonial rule, adopted as the official creed of the Indian National Congress at the Lahore Session in December 1929.',
                  definitionHi: 'ब्रिटिश दासता से पूर्ण स्वतंत्रता, जिसे दिसंबर 1929 के लाहौर कांग्रेस अधिवेशन में राष्ट्रीय आंदोलन का अंतिम लक्ष्य घोषित किया गया।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Congress Landmark Sessions Formula',
                  formulaOrRule: 'Lahore 1929 (Nehru + Purna Swaraj) | Karachi 1931 (Patel + Fundamental Rights)',
                  explanationEn: 'The definitive pair of sessions repeatedly queried by BPSC in General Studies.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: President of 1931 Karachi Session',
                  problemEn: 'Who presided over the Karachi Session of the Indian National Congress in 1931?',
                  stepByStepSolutionEn: '1. Recall the March 1931 Karachi session that endorsed the Gandhi-Irwin pact.\n2. Sardar Vallabhbhai Patel was the president.\n3. Jawaharlal Nehru drafted the Fundamental Rights resolution.\n4. Select Sardar Vallabhbhai Patel.',
                  shortcutTrick: 'Karachi 1931 = Iron Man Sardar Patel!'
                }
              ],
              practicalApplications: ['Directly foundational for understanding Fundamental Rights in Indian Polity.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Jawaharlal Nehru presided over the Karachi Session.',
                  whyWrongEn: 'Nehru presided over the 1929 Lahore session. Sardar Patel presided over the 1931 Karachi session.',
                  correctWayEn: '1929 Lahore = Nehru; 1931 Karachi = Sardar Patel.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Who was the President of the 1931 Karachi Congress Session? (Sardar Vallabhbhai Patel)',
                  'Where was the Purna Swaraj resolution passed? (Lahore, 1929)',
                  'On the banks of which river was the Tricolor hoisted on 31 Dec 1929? (River Ravi)',
                  'Who drafted the Fundamental Rights resolution at Karachi? (Jawaharlal Nehru)'
                ],
                commonDistractorTraps: [
                  'Confusing the president of Karachi (Patel) with the drafter of the resolution (Nehru)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.34 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.31 Series A)'
                ]
              },
              quickRevisionPoints: [
                '1929 Lahore Session: Jawaharlal Nehru President, Purna Swaraj goal adopted.',
                'Tricolor hoisted on banks of River Ravi on midnight 31 Dec 1929.',
                '26 January 1930 celebrated as first Independence Day.',
                '1931 Karachi Session: Sardar Vallabhbhai Patel President.',
                'Passed Fundamental Rights & Economic Policy resolution (drafted by Nehru).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-karachi-1',
                  questionEn: 'Who presided over the historic Karachi Session of the Indian National Congress in 1931 where the Resolution on Fundamental Rights was passed?',
                  options: [
                    { id: 'a', textEn: 'Jawaharlal Nehru', isCorrect: false },
                    { id: 'b', textEn: 'Sardar Vallabhbhai Patel', isCorrect: true },
                    { id: 'c', textEn: 'Subhas Chandra Bose', isCorrect: false },
                    { id: 'd', textEn: 'Dr. Rajendra Prasad', isCorrect: false }
                  ],
                  explanationEn: 'Sardar Vallabhbhai Patel presided over the Karachi Session in March 1931, while Jawaharlal Nehru drafted the Fundamental Rights resolution.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hist-pyq-2',
                topicId: 'hist-topic-congress-sessions-swaraj',
                chapterId: 'hist-ch-national-movement',
                subjectKey: 'INDIAN_HISTORY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Who among the following was the President of the Karachi Session of the Indian National Congress held in 1931?',
                questionTextHi: '1931 में आयोजित भारतीय राष्ट्रीय कांग्रेस के कराची अधिवेशन के अध्यक्ष निम्नलिखित में से कौन थे?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Jawaharlal Nehru', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Sardar Vallabhbhai Patel', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Dr. Rajendra Prasad', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Sardar Vallabhbhai Patel presided over the historic Karachi Session in March 1931, which ratified the Gandhi-Irwin Pact and passed the Resolution on Fundamental Rights and National Economic Programme.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 34,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.34 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 3: INDIAN POLITY & CONSTITUTION
  // =========================================================================
  {
    key: 'INDIAN_POLITY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian Polity & Constitution',
    displayNameHi: 'भारतीय राजव्यवस्था एवं संविधान',
    iconName: 'Scale',
    descriptionEn: 'Core constitutional architecture: Part III Fundamental Rights (Articles 12-35), Article 32 Writs, Part IV DPSP (Articles 36-51), and Part IV-A Fundamental Duties.',
    descriptionHi: 'संविधान के भाग III मूल अधिकार (अनुच्छेद 12-35), अनुच्छेद 32 के 5 रिट, भाग IV राज्य के नीति निदेशक तत्व (अनुच्छेद 36-51), एवं भाग IV-A मूल कर्तव्य।',
    chapters: [
      {
        id: 'pol-ch-rights-dpsp',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 5,
        slug: 'fundamental-rights-dpsp-polity',
        titleEn: 'Fundamental Rights (Part III) & DPSP (Part IV)',
            titleHi: 'Fundamental Rights (Part III) & DPSP (Part IV)',
        descriptionEn: 'Articles 14, 17, 19, 21, 21A, 32 Constitutional Writs, DPSP Irish origins, Article 40 Panchayats, Article 44 UCC, and 51A Duties.',
        descriptionHi: 'अनुच्छेद 14, 17 (अस्पृश्यता का अंत), 21 (प्राण एवं दैहिक स्वतंत्रता), 32 (संवैधानिक उपचार/5 रिट), अनुच्छेद 40 (ग्राम पंचायत), अनुच्छेद 44 (समान नागरिक संहिता)।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          // Topic 5.1: Fundamental Rights & Article 32 Writs
          {
            id: 'pol-topic-fr-articles',
            chapterId: 'pol-ch-rights-dpsp',
            topicNumber: 1,
            slug: 'fundamental-rights-article-32-writs',
            titleEn: 'Fundamental Rights & Article 32 Writs',
            titleHi: 'Fundamental Rights & Article 32 Writs',
            descriptionEn: 'Part III Magna Carta of India, Articles 14, 17, 19, 21, 21A, and the 5 constitutional writs under Article 32 and Article 226.',
            descriptionHi: 'संविधान का मैग्ना कार्टा (भाग III), अस्पृश्यता उन्मूलन (अनु. 17), शिक्षा का अधिकार (अनु. 21A), तथा 5 रिट: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Tested across BPSC TRE 1.0 (Q.28), TRE 2.0 (Q.36) & TRE 3.0 (Q.36)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-pol-fr-writs',
              topicId: 'pol-topic-fr-articles',
              titleEn: 'The Magna Carta: Fundamental Rights & Judicial Writs',
              titleHi: 'The Magna Carta: Fundamental Rights & Judicial Writs',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Master Part III of the Constitution (Articles 12 to 35).',
                'Memorize high-yield Articles: Art 14 (Equality), Art 17 (Untouchability), Art 21 (Life & Liberty), Art 21A (Education).',
                'Understand Dr. Ambedkar\'s description of Article 32 as the \"Heart and Soul of the Constitution\".',
                'Distinguish the 5 types of Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.'
              ],
              introductionEn: '==Part III of the Indian Constitution (Articles 12 to 35) is rightfully hailed as the \"Magna Carta of India\".== Inspired by the US Bill of Rights, these rights guarantee basic human freedoms against arbitrary state action.\n\nWithout a remedy, a right is merely a wish. That is why **Article 32** guarantees the right to move the Supreme Court directly for the enforcement of fundamental rights through prerogative writs.',
              introductionHi: 'भारतीय संविधान का भाग III (अनुच्छेद 12 से 35) नागरिकों के मूल अधिकारों से संबंधित है। इसे भारत का मैग्ना कार्टा कहा जाता है। डॉ. भीमराव अंबेडकर ने अनुच्छेद 32 को \'संविधान का हृदय और आत्मा\' कहा था, क्योंकि इसके बिना मूल अधिकार निष्प्रभावी हो जाते हैं।',
              conceptSections: [
                {
                  title: 'Crucial Fundamental Rights Articles for BPSC TRE',
                  contentMarkdownEn: '### The Six Broad Categories of Fundamental Rights\n1. **Right to Equality** (Articles 14–18)\n   * ==Article 14==: Equality before law and equal protection of the laws.\n   * Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.\n   * Article 16: Equality of opportunity in matters of public employment.\n   * ==Article 17==: **Abolition of Untouchability** (अस्पृश्यता का अंत) and prohibition of its practice in any form. (Most repeated in BPSC!)\n   * Article 18: Abolition of titles (except military and academic).\n2. **Right to Freedom** (Articles 19–22)\n   * Article 19: Protection of 6 freedoms (speech, assembly, association, movement, residence, profession).\n   * Article 20: Protection in respect of conviction for offences (no ex-post facto law, no double jeopardy, no self-incrimination).\n   * ==Article 21==: **Protection of Life and Personal Liberty** (प्राण एवं दैहिक स्वतंत्रता) — has the widest judicial interpretation (right to privacy, clean environment, shelter).\n   * ==Article 21A==: **Right to Education** (6 to 14 years free & compulsory education) — inserted by the **86th Constitutional Amendment Act, 2002**.\n3. **Right against Exploitation** (Articles 23–24)\n   * Article 23: Prohibition of human trafficking and forced labour (Begar).\n   * Article 24: Prohibition of child labour in hazardous employment under 14 years.\n4. **Right to Freedom of Religion** (Articles 25–28)\n5. **Cultural and Educational Rights** (Articles 29–30)\n6. **Right to Constitutional Remedies** (Article 32)',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Articles Applicable ONLY to Indian Citizens',
                    textEn: 'Articles ==15, 16, 19, 29, and 30== are available ONLY to Indian citizens. All other Fundamental Rights (such as 14, 20, 21, 21A, 22, 23, 24, 25-28) apply to all persons (citizens as well as foreigners)!',
                    textHi: 'केवल भारतीय नागरिकों को प्राप्त मूल अधिकार: अनुच्छेद 15, 16, 19, 29 एवं 30।'
                  }
                },
                {
                  title: 'The Five Prerogative Writs under Article 32 & 226',
                  contentMarkdownEn: 'The Supreme Court under **Article 32** and High Courts under **Article 226** can issue 5 types of writs:\n\n1. ==Habeas Corpus (बंदी प्रत्यक्षीकरण)==: Meaning *\"To have the body of\"*. Issued against both public authorities and private individuals to release a person who has been illegally detained.\n2. ==Mandamus (परमादेश)==: Meaning *\"We command\"*. An order issued to a public official or lower court commanding them to perform an official duty that they have failed or refused to perform. Cannot be issued against private individuals, the President, or Governors.\n3. ==Prohibition (प्रतिषेध)==: Meaning *\"To forbid\"*. Issued by a higher court to a lower judicial or quasi-judicial body to prevent it from exceeding its jurisdiction or usurping jurisdiction.\n4. ==Certiorari (उत्प्रेषण)==: Meaning *\"To be certified / informed\"*. Issued to a lower court to quash an order already passed in excess of jurisdiction or in violation of natural justice (both preventive and curative).\n5. ==Quo-Warranto (अधिकार-पृच्छा)==: Meaning *\"By what authority or warrant\"*. Issued to prevent illegal usurpation of a public office by an unqualified person.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'Article 32 vs Article 226 Scope',
                    textEn: 'The writ jurisdiction of the High Court (Art 226) is **wider** than that of the Supreme Court (Art 32) because High Courts can issue writs for fundamental rights as well as ordinary legal rights!',
                    textHi: 'उच्च न्यायालय (अनु. 226) का रिट क्षेत्राधिकार सर्वोच्च न्यायालय (अनु. 32) से अधिक विस्तृत है क्योंकि उच्च न्यायालय सामान्य कानूनी अधिकारों के लिए भी रिट जारी कर सकता है।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Writ (रिट / समादेश)',
                  definitionEn: 'A formal written order issued by a constitutional court (Supreme Court or High Court) commanding or prohibiting a specific legal action to protect citizen rights.',
                  definitionHi: 'न्यायालय द्वारा जारी किया गया औपचारिक कानूनी आदेश जो किसी अधिकारी या संस्था को कोई कार्य करने अथवा न करने का निर्देश देता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Writ Keyword Association Rule',
                  formulaOrRule: 'Habeas Corpus = Produce Body | Mandamus = We Command | Quo-Warranto = By What Authority',
                  explanationEn: 'Instant translation matching rule for multi-choice questions.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Abolition of Untouchability Article',
                  problemEn: 'Which Article of the Constitution of India abolishes \"Untouchability\" and forbids its practice in any form?',
                  stepByStepSolutionEn: '1. Untouchability eradication is a core equality right.\n2. Recall Articles 14 to 18.\n3. Article 17 explicitly declares: \"Untouchability is abolished and its practice in any form is forbidden.\"\n4. Select Article 17.',
                  shortcutTrick: '17 = Unlucky for social evils = Abolition of Untouchability!'
                }
              ],
              practicalApplications: ['Directly yields 1 to 2 marks in Part 2 of all BPSC TRE exams.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Article 32 can be issued for ordinary legal rights.',
                  whyWrongEn: 'Article 32 can be invoked ONLY for Fundamental Rights. Article 226 can be invoked for ordinary rights.',
                  correctWayEn: 'SC (Art 32) = Fundamental Rights only. HC (Art 226) = Fundamental + Ordinary rights.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which article abolishes Untouchability? (Article 17)',
                  'Which article guarantees Right to Education (6-14 years)? (Article 21A, 86th Amendment)',
                  'Which article is called Heart and Soul of the Constitution? (Article 32)',
                  'What does Habeas Corpus mean? (To produce the body of the detained person)'
                ],
                commonDistractorTraps: [
                  'Confusing Article 17 with Article 18 (Titles)',
                  'Confusing Mandamus with Prohibition'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.28 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.36 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Part III: Articles 12 to 35 (Magna Carta of India).',
                'Article 14: Equality before law.',
                'Article 17: Abolition of Untouchability.',
                'Article 21: Life and Personal Liberty.',
                'Article 21A: Right to Education (86th Amendment 2002).',
                'Article 32: Heart and Soul of Constitution (5 Writs).',
                '5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-1',
                  questionEn: 'Which Article of the Constitution of India provides for the \"Abolition of Untouchability\"?',
                  options: [
                    { id: 'a', textEn: 'Article 14', isCorrect: false },
                    { id: 'b', textEn: 'Article 17', isCorrect: true },
                    { id: 'c', textEn: 'Article 19', isCorrect: false },
                    { id: 'd', textEn: 'Article 21', isCorrect: false }
                  ],
                  explanationEn: 'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-pyq-1',
                topicId: 'pol-topic-fr-articles',
                chapterId: 'pol-ch-rights-dpsp',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under which Article of the Constitution of India is \"Untouchability\" abolished and its practice in any form forbidden?',
                questionTextHi: 'भारतीय संविधान के किस अनुच्छेद के तहत \'अस्पृश्यता\' का अंत किया गया है और किसी भी रूप में इसका आचरण निषिद्ध है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Article 14', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Article 17', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Article 19', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Article 17 of the Constitution of India states: \"Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law.\"',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 36,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.36 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 5.2: DPSP & Fundamental Duties
          {
            id: 'pol-topic-dpsp-fundamental-duties',
            chapterId: 'pol-ch-rights-dpsp',
            topicNumber: 2,
            slug: 'dpsp-part-iv-fundamental-duties',
            titleEn: 'Directive Principles (Part IV) & Fundamental Duties (Part IV-A)',
            titleHi: 'Directive Principles (Part IV) & Fundamental Duties (Part IV-A)',
            descriptionEn: 'Articles 36-51 borrowed from Ireland, Article 40 Panchayats, Article 44 UCC, Article 50 Separation of Judiciary, and 11 Fundamental Duties under 51A.',
            descriptionHi: 'आयरलैंड से लिए गए नीति निदेशक तत्व (अनु. 36-51), ग्राम पंचायत (अनु. 40), समान नागरिक संहिता (अनु. 44), कार्यपालिका से न्यायपालिका का पृथक्करण (अनु. 50), एवं स्वर्ण सिंह समिति (अनु. 51A)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Tested in BPSC TRE 1.0 (Q.29) & TRE 3.0 (Q.37)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-pol-dpsp-duties',
              topicId: 'pol-topic-dpsp-fundamental-duties',
              titleEn: 'Welfare State Architecture: DPSP & Fundamental Duties',
              titleHi: 'Welfare State Architecture: DPSP & Fundamental Duties',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Learn that DPSP (Part IV, Articles 36-51) was borrowed from the Irish Constitution.',
                'Understand that DPSPs are non-justiciable (cannot be enforced by courts under Article 37).',
                'Memorize landmark Articles: Art 40 (Village Panchayats), Art 44 (Uniform Civil Code), Art 50 (Separation of Judiciary from Executive).',
                'Examine Part IV-A (Article 51A): 11 Fundamental Duties added by the 42nd Amendment 1976 on the recommendation of the Swaran Singh Committee.'
              ],
              introductionEn: '==While Fundamental Rights establish political democracy, Directive Principles establish social and economic democracy.==\n\nContained in Part IV (Articles 36 to 51) and borrowed from Ireland, DPSPs embody the concept of a \"Welfare State\". Complementing these are the **Fundamental Duties** in Part IV-A, reminding citizens of their moral obligations towards the nation.',
              introductionHi: 'संविधान के भाग IV (अनुच्छेद 36 से 51) में राज्य के नीति निदेशक तत्व निहित हैं। ये आयरलैंड के संविधान से प्रेरित हैं और भारत में एक कल्याणकारी राज्य की स्थापना का लक्ष्य रखते हैं। वहीं भाग IV-A में अनुच्छेद 51A के तहत नागरिकों के 11 मूल कर्तव्य वर्णित हैं।',
              conceptSections: [
                {
                  title: 'Landmark Directive Principles Articles',
                  contentMarkdownEn: '### Key Articles Tested in BPSC\n* **Article 37**: Declares that DPSPs are **non-justiciable** (not enforceable by courts), but are fundamental in the governance of the country.\n* **Article 39(b) & (c)**: Equitable distribution of material resources to subserve common good; prevention of concentration of wealth.\n* **Article 39A**: Equal justice and free legal aid to the poor.\n* ==Article 40==: **Organization of Village Panchayats** (ग्राम पंचायतों का संगठन) — inspired by Gandhian ideology.\n* ==Article 44==: **Uniform Civil Code** (समान नागरिक संहिता) for all citizens throughout India. (Currently implemented in Goa and Uttarakhand).\n* **Article 45**: Early childhood care and education for children below 6 years.\n* **Article 48**: Organization of agriculture and animal husbandry, prohibiting slaughter of cows and calves.\n* **Article 48A**: Protection and improvement of environment and safeguarding of forests and wildlife (added by 42nd Amendment 1976).\n* ==Article 50==: **Separation of Judiciary from the Executive** (कार्यपालिका से न्यायपालिका का पृथक्करण).\n* **Article 51**: Promotion of international peace and security.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC Top Repeat: Article 40 & 50',
                    textEn: 'Article 40 = Panchayats\nArticle 44 = Uniform Civil Code\nArticle 50 = Separation of Judiciary from Executive',
                    textHi: 'अनुच्छेद 40 = ग्राम पंचायतें\nअनुच्छेद 44 = समान नागरिक संहिता\nअनुच्छेद 50 = न्यायपालिका का कार्यपालिका से पृथक्करण'
                  }
                },
                {
                  title: 'Fundamental Duties: Part IV-A (Article 51A)',
                  contentMarkdownEn: '### Origin and Amendments\n* **Source**: Borrowed from the **Constitution of USSR** (Soviet Union).\n* **Committee**: Recommended by the ==Swaran Singh Committee== (1976).\n* **42nd Constitutional Amendment Act, 1976**: Added **Part IV-A** and **Article 51A**, introducing **10 Fundamental Duties**.\n* **86th Constitutional Amendment Act, 2002**: Added the **11th Fundamental Duty** — Duty of parent/guardian to provide educational opportunities to children aged 6 to 14 years.\n* Just like DPSPs, Fundamental Duties are **non-justiciable**.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Trap: Original Constitution vs Amendments',
                    textEn: 'Did the original Constitution of 1950 contain Fundamental Duties? ==NO!== The original constitution had ZERO fundamental duties. 10 were added in 1976, and the 11th was added in 2002.',
                    textHi: 'मूल संविधान (1950) में कोई मूल कर्तव्य नहीं था। 1976 में 10 जोड़े गए और 2002 में 11वां जोड़ा गया।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Directive Principles of State Policy (DPSP)',
                  definitionEn: 'Guidelines and principles addressed to the State in Part IV of the Constitution, directing policy towards socioeconomic justice and welfare.',
                  definitionHi: 'संविधान के भाग IV में राज्य को दिए गए वे निर्देश जो सामाजिक एवं आर्थिक लोकतंत्र की स्थापना हेतु नीतियां बनाने का मार्गदर्शन करते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Duties Evolution Equation',
                  formulaOrRule: 'Original (0) + 42nd Amendment 1976 (10) + 86th Amendment 2002 (1) = Total 11 Duties',
                  explanationEn: 'The chronological mathematical progression of Fundamental Duties.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Separation of Judiciary Article',
                  problemEn: 'Separation of the judiciary from the executive is enjoined by which Article of the Constitution of India?',
                  stepByStepSolutionEn: '1. Recall Part IV DPSP provisions.\n2. Article 50 explicitly states: \"The State shall take steps to separate the judiciary from the executive in the public services of the State.\"\n3. Lock Article 50.',
                  shortcutTrick: '50-50 split between Judiciary and Executive = Article 50!'
                }
              ],
              practicalApplications: ['Directly tested in BPSC TRE Part 2 (General Studies).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Fundamental Duties were borrowed from the USA.',
                  whyWrongEn: 'Fundamental Rights were inspired by the USA (Bill of Rights). Fundamental Duties were borrowed from the ==USSR==.',
                  correctWayEn: 'Rights = USA; Duties = USSR; DPSP = Ireland.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'From which country was DPSP borrowed? (Ireland)',
                  'Which article relates to Village Panchayats? (Article 40)',
                  'Which article separates Judiciary from Executive? (Article 50)',
                  'Which committee recommended Fundamental Duties? (Swaran Singh Committee, 1976)'
                ],
                commonDistractorTraps: [
                  'Confusing DPSP (Ireland) with Fundamental Rights (USA)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.29 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Part IV (Articles 36 to 51): Borrowed from Ireland, non-justiciable.',
                'Article 40: Village Panchayats.',
                'Article 44: Uniform Civil Code.',
                'Article 50: Separation of Judiciary from Executive.',
                'Part IV-A (Article 51A): 11 Fundamental Duties borrowed from USSR.',
                'Swaran Singh Committee recommended Duties (42nd Amendment 1976).',
                '11th Duty added by 86th Amendment 2002 (Education 6-14 years).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-dpsp-1',
                  questionEn: 'The Directive Principles of State Policy in the Indian Constitution were borrowed from the Constitution of which country?',
                  options: [
                    { id: 'a', textEn: 'USA', isCorrect: false },
                    { id: 'b', textEn: 'Ireland', isCorrect: true },
                    { id: 'c', textEn: 'USSR', isCorrect: false },
                    { id: 'd', textEn: 'Australia', isCorrect: false }
                  ],
                  explanationEn: 'The concept of Directive Principles of State Policy (Part IV) was borrowed from the Irish Constitution (which borrowed it from Spain).',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-pyq-2',
                topicId: 'pol-topic-dpsp-fundamental-duties',
                chapterId: 'pol-ch-rights-dpsp',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'The Directive Principles of State Policy in the Indian Constitution have been borrowed from the Constitution of which country?',
                questionTextHi: 'भारतीय संविधान में राज्य के नीति निदेशक तत्व किस देश के संविधान से लिए गए हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'United States of America', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Ireland', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'United Kingdom', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The makers of the Indian Constitution borrowed the Directive Principles of State Policy (Part IV, Articles 36-51) from the Irish Constitution of 1937.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-24',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 29,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, General Studies, Q.29 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 4: INDIAN GEOGRAPHY & ENVIRONMENT
  // =========================================================================
  {
    key: 'INDIAN_GEOGRAPHY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian Geography & Environment',
    displayNameHi: 'भारत का भूगोल एवं पर्यावरण',
    iconName: 'Globe',
    descriptionEn: 'Peninsular rivers (Narmada, Tapi rift valleys, Godavari, Krishna), Deccan trap Regur/Black cotton soils, Southwest Monsoon mechanism, and Western Disturbances.',
    descriptionHi: 'प्रायद्वीपीय नदियां (नर्मदा व ताप्ती भ्रंश घाटी, गोदावरी, कृष्णा), दक्कन ट्रैप की काली (रेगुर) मिट्टी, दक्षिण-पश्चिम मानसून एवं पश्चिमी विक्षोभ।',
    chapters: [
      {
        id: 'geo-ch-rivers-climate',
        subjectKey: 'INDIAN_GEOGRAPHY',
        chapterNumber: 6,
        slug: 'indian-rivers-soils-monsoon',
        titleEn: 'Physical Features, River Systems & Soils of India',
            titleHi: 'Physical Features, River Systems & Soils of India',
        descriptionEn: 'West-flowing rift valley rivers vs East-flowing deltaic rivers, Black soil moisture retention, and Monsoon Arabian Sea & Bay of Bengal branches.',
        descriptionHi: 'अरब सागर में गिरने वाली भ्रंश घाटी नदियां, बंगाल की खाड़ी की नदियां, कपास की काली (रेगुर) मिट्टी, तथा दक्षिण-पश्चिम मानसून की शाखाएं।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 65,
        topics: [
          // Topic 6.1: Peninsular Rivers & Black Soil
          {
            id: 'geo-topic-soils-rivers',
            chapterId: 'geo-ch-rivers-climate',
            topicNumber: 1,
            slug: 'peninsular-rivers-black-cotton-soil',
            titleEn: 'Major Indian River Basins & Soil Classification',
            titleHi: 'Major Indian River Basins & Soil Classification',
            descriptionEn: 'Rift valley drainage of Narmada and Tapi (forming estuaries not deltas), Godavari Dakshin Ganga, and basaltic Regur soil self-ploughing property.',
            descriptionHi: 'नर्मदा एवं ताप्ती का भ्रंश घाटी अपवाह (डेल्टा नहीं, एश्चुअरी), दक्षिण गंगा गोदावरी, तथा दक्कन ट्रैप की बेसाल्टी काली कपास (रेगुर) मृदा।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Tested in BPSC TRE 2.0 (Q.39) & TRE 3.0 (Q.41)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-geo-rivers-soils',
              topicId: 'geo-topic-soils-rivers',
              titleEn: 'Peninsular Drainage & Soil Geography of India',
              titleHi: 'Peninsular Drainage & Soil Geography of India',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Distinguish between West-flowing rivers (Narmada, Tapi) and East-flowing rivers (Godavari, Krishna, Kaveri, Mahanadi).',
                'Understand why Narmada and Tapi do not form deltas but estuaries due to hard rock rift valleys.',
                'Master Black Cotton Soil (Regur): volcanic basalt origin, high clay content, and self-ploughing capacity.',
                'Examine Alluvial soils (Khadar new alluvium vs Bhangar old alluvium).'
              ],
              introductionEn: '==India\'s physical landscape is defined by the contrast between the young, folded Himalayas and the ancient, stable Peninsular shield.==\n\nWhile Himalayan rivers are perennial and form vast alluvial plains, Peninsular rivers are rainfed and have carved deep rift valleys and rocky gorges.',
              introductionHi: 'प्रायद्वीपीय भारत का अपवाह तंत्र हिमालयी नदियों से काफी प्राचीन है। विंध्य और सतपुड़ा के बीच भ्रंश घाटी से बहने वाली नर्मदा और ताप्ती नदियां अरब सागर में गिरती हैं और डेल्टा के स्थान पर ज्वारनदमुख (एश्चुअरी) का निर्माण करती हैं।',
              conceptSections: [
                {
                  title: 'West-Flowing vs. East-Flowing Rivers',
                  contentMarkdownEn: '### West-Flowing Rivers (Emptying into Arabian Sea)\n* ==Narmada==: Originates at **Amarkantak plateau (MP)**; flows through a steep **rift valley** between Vindhyas (north) and Satpuras (south); famous **Dhuandhar Falls** (Marble Rocks at Jabalpur); forms an **estuary** (no delta) at Bharuch (Gujarat).\n* ==Tapi (Tapti)==: Originates at **Multai (Betul district, MP)**; flows south of Satpuras through a rift valley; empties into Arabian Sea near Surat.\n* *Other West-flowing*: Sabarmati, Mahi (crosses Tropic of Cancer twice!), Periyar and Bharathapuzha (Kerala).\n\n### East-Flowing Rivers (Emptying into Bay of Bengal & Forming Large Deltas)\n* ==Godavari (\"Dakshin Ganga\" / \"Vridha Ganga\")==: Longest river in Peninsular India (~1465 km); originates at **Trimbakeshwar (Nashik, Maharashtra)**.\n* **Krishna**: Originates at **Mahabaleshwar (Maharashtra)**; major tributaries: Tungabhadra, Bhima, Koyna.\n* **Kaveri (Cauvery)**: Originates at **Talakaveri in Brahmagiri hills (Karnataka)**; flows through Karnataka and Tamil Nadu; perennial among peninsular rivers due to both SW and NE monsoon rains; famous Sivasamudram falls.',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC Top Repeat: Why No Delta?',
                    textEn: 'Why do Narmada and Tapi NOT form deltas? Because they flow through hard rock ==rift valleys (भ्रंश घाटी)== with steep gradients and carry very little alluvial sediment load.',
                    textHi: 'नर्मदा और ताप्ती कठोर चट्टानी भ्रंश घाटियों से तीव्र ढाल पर बहती हैं, इसलिए गाद (सिल्ट) का अभाव होने से डेल्टा नहीं बनातीं।'
                  }
                },
                {
                  title: 'Black Cotton Soil (Regur Soil)',
                  contentMarkdownEn: '### Characteristics of Black Soil\n* **Origin**: Derived from the weathering of volcanic basalt lava of the **Deccan Trap (Maharashtra, Gujarat, MP, northern Karnataka)**.\n* **Local Name**: ==Regur (रेगुर)== or Black Cotton Soil.\n* **Composition**: Rich in iron, lime, calcium, magnesium, and potash; deficient in nitrogen, phosphorus, and organic matter.\n* **Unique Property**: Extremely clayey and impervious. Possesses extraordinary moisture-retention capacity.\n* ==\"Self-Ploughing\" Characteristic==: During dry summer months, moisture loss causes the soil to shrink and develop **wide, deep cracks**, allowing aeration. During rains, it becomes sticky and swollen.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Trap: Regur Soil Alternative Names',
                    textEn: 'Regur = Black Soil = Lava Soil = Tropical Chernozem. Ideal crop: ==Cotton==.',
                    textHi: 'रेगुर मृदा को काली मृदा, लावा मृदा या कपासी मिट्टी भी कहा जाता है।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Estuary (ज्वारनदमुख)',
                  definitionEn: 'A tidal mouth of a large river where the tide meets and mingles with the river stream, free of deltaic alluvial deposit accumulation.',
                  definitionHi: 'नदी का वह मुहाना जहां समुद्री ज्वार और नदी का जल आपस में मिलते हैं और बिना गाद जमाव के खुला रहता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Rift Valley Duo Rule',
                  formulaOrRule: 'Rift Valley + West Flowing + Arabian Sea + Estuary = Narmada & Tapi',
                  explanationEn: 'The four-point identity formula for Narmada and Tapi.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Soil Known as Regur',
                  problemEn: 'Which of the following soils is also known as \'Regur soil\'?',
                  stepByStepSolutionEn: '1. Recall the local nomenclature of Indian soils.\n2. Black Cotton Soil derived from Deccan lava is locally termed Regur.\n3. Lock Black Soil.',
                  shortcutTrick: 'Regur = Black Cotton Soil of Deccan!'
                }
              ],
              practicalApplications: ['Directly tested in BPSC TRE Part 2 (General Studies).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Godavari flows into the Arabian Sea.',
                  whyWrongEn: 'Godavari flows eastwards across Maharashtra, Telangana, and Andhra Pradesh, emptying into the Bay of Bengal.',
                  correctWayEn: 'Godavari empties into the Bay of Bengal.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which soil is known as Regur soil? (Black soil)',
                  'Which rivers flow through rift valleys? (Narmada and Tapi)',
                  'Which river is known as Dakshin Ganga? (Godavari)',
                  'Where does river Narmada originate? (Amarkantak)'
                ],
                commonDistractorTraps: [
                  'Confusing Red soil or Laterite soil with Regur'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.39 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Narmada & Tapi: Flow west through rift valleys, empty into Arabian Sea, form estuaries.',
                'Narmada originates at Amarkantak; Tapi at Multai.',
                'Godavari: Longest peninsular river (1465 km), known as Dakshin Ganga.',
                'Black Soil (Regur): Basaltic origin, Deccan trap, self-ploughing deep cracks, ideal for cotton.',
                'Alluvial: Khadar (new flood silt) vs Bhangar (old calcareous clay).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-geo-1',
                  questionEn: 'Which of the following soils is famously referred to as \'Regur Soil\' in India?',
                  options: [
                    { id: 'a', textEn: 'Alluvial Soil', isCorrect: false },
                    { id: 'b', textEn: 'Black Soil', isCorrect: true },
                    { id: 'c', textEn: 'Laterite Soil', isCorrect: false },
                    { id: 'd', textEn: 'Red and Yellow Soil', isCorrect: false }
                  ],
                  explanationEn: 'Black Soil, predominantly found in the Deccan Plateau, is known as Regur soil and is exceptionally suitable for cotton cultivation.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-geo-pyq-1',
                topicId: 'geo-topic-soils-rivers',
                chapterId: 'geo-ch-rivers-climate',
                subjectKey: 'INDIAN_GEOGRAPHY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Which of the following soils in India is also known as \'Regur soil\'?',
                questionTextHi: 'भारत में निम्नलिखित में से किस मिट्टी को \'रेगुर मिट्टी\' के नाम से भी जाना जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Alluvial Soil', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Black Soil', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Laterite Soil', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Black soil, formed by the weathering of volcanic basalt rocks of the Deccan Trap, is popularly known as Regur soil or Black Cotton soil.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 39,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.39 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 5: GENERAL SCIENCE (PHYSICS, CHEMISTRY & BIOLOGY)
  // =========================================================================
  {
    key: 'GENERAL_SCIENCE',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'General Science (Physics, Chemistry & Biology)',
    displayNameHi: 'सामान्य विज्ञान (भौतिक, रसायन एवं जीव विज्ञान)',
    iconName: 'Atom',
    descriptionEn: 'High-yield General Science concepts: Vitamins and deficiency diseases, Human blood pH (7.35-7.45), Total Internal Reflection (TIR), and Ohm\'s Law.',
    descriptionHi: 'विटामिन एवं हीनताजन्य रोग (रिकेट्स, स्कर्वी), मानव रक्त का pH (7.35-7.45), पूर्ण आंतरिक परावर्तन (ऑप्टिकल फाइबर/मृगमरीचिका), तथा ओम का नियम।',
    chapters: [
      {
        id: 'sci-ch-applied-science',
        subjectKey: 'GENERAL_SCIENCE',
        chapterNumber: 7,
        slug: 'applied-science-human-optics',
        titleEn: 'Human Physiology, Optics & Chemical Reactions',
            titleHi: 'Human Physiology, Optics & Chemical Reactions',
        descriptionEn: 'Vitamins A, B, C, D, E, K deficiencies, Blood buffer system, Total Internal Reflection critical angle, and Resistance in series/parallel.',
        descriptionHi: 'विटामिन D एवं रिकेट्स, रक्त pH मान, प्रकाश का पूर्ण आंतरिक परावर्तन एवं ऑप्टिकल फाइबर, तथा श्रेणी एवं समानांतर क्रम में प्रतिरोध।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 65,
        topics: [
          // Topic 7.1: Vitamins & Optics
          {
            id: 'sci-topic-vitamins-optics',
            chapterId: 'sci-ch-applied-science',
            topicNumber: 1,
            slug: 'vitamins-physiology-optics-phenomena',
            titleEn: 'Vitamins, Deficiency Diseases & Light Phenomena',
            titleHi: 'Vitamins, Deficiency Diseases & Light Phenomena',
            descriptionEn: 'Fat-soluble vs water-soluble vitamins, Vitamin D Rickets, Normal blood pH 7.35-7.45, and Total Internal Reflection in Optical Fibers.',
            descriptionHi: 'वसा में घुलनशील बनाम जल में घुलनशील विटामिन, विटामिन D से रिकेट्स, रक्त का pH (7.35-7.45), तथा ऑप्टिकल फाइबर में पूर्ण आंतरिक परावर्तन।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Tested across BPSC TRE 1.0 (Q.37), TRE 2.0 (Q.40) & TRE 3.0 (Q.42)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-sci-vitamins',
              topicId: 'sci-topic-vitamins-optics',
              titleEn: 'Essential Vitamins, Human Blood & Optical Physics',
              titleHi: 'Essential Vitamins, Human Blood & Optical Physics',
              difficulty: 'INTERMEDIATE',
              readingTimeMinutes: 15,
              learningObjectives: [
                'Classify vitamins into Fat-Soluble (A, D, E, K) and Water-Soluble (B-complex, C).',
                'Memorize deficiency diseases: Vitamin A (Night blindness), B1 (Beriberi), C (Scurvy), D (Rickets in children / Osteomalacia in adults).',
                'Understand human blood pH (7.35 to 7.45, slightly alkaline) and bicarbonate buffer.',
                'Master conditions for Total Internal Reflection (TIR): denser to rarer medium and angle of incidence > critical angle.'
              ],
              introductionEn: '==General Science in BPSC TRE focuses on everyday physiological facts, biochemical essentials, and fundamental physical laws.==\n\nA solid understanding of nutritional vitamins, blood chemistry, and optical principles guarantees full marks in the science portion of the General Studies section.',
              introductionHi: 'BPSC TRE में सामान्य विज्ञान के प्रश्न दैनिक जीवन में उपयोगी भौतिक, रासायनिक एवं जैविक सिद्धांतों पर आधारित होते हैं। विटामिनों के रासायनिक नाम व उनकी कमी से होने वाले रोग, मानव रक्त का pH मान, तथा प्रकाश का पूर्ण आंतरिक परावर्तन सर्वाधिक पूछे जाने वाले विषय हैं।',
              conceptSections: [
                {
                  title: 'Comprehensive Vitamin Master Chart',
                  contentMarkdownEn: '### Fat-Soluble Vitamins (Stored in Liver & Adipose Tissue: A, D, E, K)\n* ==Vitamin A (Retinol)==: Deficiency causes **Night Blindness (Nyctalopia)** and Xerophthalmia (dry cornea).\n* ==Vitamin D (Calciferol / Cholecalciferol)==: Synthesized in skin via sunlight; essential for calcium absorption. Deficiency causes **Rickets** (रिकेट्स / soft curved bones) in growing children and **Osteomalacia** (हड्डी का कमजोर होना) in adults.\n* ==Vitamin E (Tocopherol)==: Beauty vitamin / Antioxidant. Deficiency causes reduced fertility and muscle weakness.\n* ==Vitamin K (Phylloquinone)==: Essential for blood clotting (prothrombin synthesis). Deficiency causes delayed blood coagulation / excessive bleeding.\n\n### Water-Soluble Vitamins (Must be replenished daily: B & C)\n* **Vitamin B1 (Thiamine)**: Deficiency causes **Beriberi** (बेरी-बेरी).\n* **Vitamin B3 (Niacin)**: Deficiency causes **Pellagra** (4D syndrome: Dermatitis, Diarrhea, Dementia, Death).\n* **Vitamin B12 (Cyanocobalamin)**: Contains ==Cobalt==! Deficiency causes **Pernicious Anemia**.\n* ==Vitamin C (Ascorbic Acid)==: Heat-sensitive vitamin; destroyed by cooking. Found in amla, citrus fruits. Deficiency causes **Scurvy** (bleeding gums).',
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'BPSC Top Repeat: Blood pH & Minerals',
                    textEn: '1. Normal Human Blood pH: ==7.35 – 7.45== (Slightly alkaline/basic).\n2. Metal ion in Vitamin B12: ==Cobalt (Co)==.\n3. Metal ion in Hemoglobin: ==Iron (Fe)==.\n4. Metal ion in Chlorophyll: ==Magnesium (Mg)==.',
                    textHi: '1. मानव रक्त का pH मान: 7.35 से 7.45 (हल्का क्षारीय)\n2. विटामिन B12 में धातु: कोबाल्ट\n3. हीमोग्लोबिन में धातु: आयरन\n4. क्लोरोफिल में धातु: मैग्नीशियम'
                  }
                },
                {
                  title: 'Total Internal Reflection (TIR) in Nature & Technology',
                  contentMarkdownEn: '### The Two Mandatory Conditions for TIR\n1. Light must travel from an ==optically denser medium to an optically rarer medium== (e.g., from glass to air, or water to air).\n2. The angle of incidence ($i$) in the denser medium must be **strictly greater than the critical angle** ($\theta_c$):\n$$i > \\theta_c$$\n\n### High-Yield Applications of TIR Tested in BPSC\n* ==Optical Fiber Cables (OFC)==: Light signals undergo continuous total internal reflections within the glass core, transmitting high-speed telecommunications with minimal signal loss.\n* ==Mirage (मृगमरीचिका)==: An optical illusion in deserts and hot asphalt roads caused by TIR through layers of heated air with varying refractive indices.\n* ==Sparkling of Cut Diamonds==: Due to diamond\'s very small critical angle (~$24.4^\\circ$), light entering a well-cut diamond undergoes multiple internal reflections before exiting.',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Trap: Optical Fiber Working Principle',
                    textEn: 'BPSC frequently asks: \"An optical fiber works on which optical principle?\"\nOptions: (A) Refraction, (B) Total Internal Reflection, (C) Interference.\n==Always choose Total Internal Reflection (TIR)!==',
                    textHi: 'ऑप्टिकल फाइबर (प्रकाशिक तंतु) प्रकाश के \'पूर्ण आंतरिक परावर्तन\' (TIR) के सिद्धांत पर कार्य करता है।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Total Internal Reflection (TIR)',
                  definitionEn: 'The complete reflection of a light ray within a denser medium when the angle of incidence exceeds the critical angle of the boundary.',
                  definitionHi: 'सघन माध्यम से विरल माध्यम में जाने वाली प्रकाश किरण का आपतन कोण क्रांतिक कोण से अधिक होने पर उसी सघन माध्यम में पूर्ण रूप से परावर्तित होना।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Critical Angle Formula',
                  formulaOrRule: '\\sin(\\theta_c) = \\frac{n_2}{n_1} \\quad \\text{where } n_1 > n_2',
                  explanationEn: 'The critical angle is the angle of incidence for which the angle of refraction is exactly 90 degrees.',
                }
              ],
              examples: [
                {
                  title: 'BPSC Question: Vitamin D Deficiency',
                  problemEn: 'Deficiency of Vitamin D in children leads to which of the following diseases?',
                  stepByStepSolutionEn: '1. Vitamin D regulates calcium and phosphorus absorption in bones.\n2. In growing children, bone demineralization causes bent bones, known as Rickets.\n3. In adults, it is called Osteomalacia.\n4. Select Rickets.',
                  shortcutTrick: 'Vitamin D = Sun = Bone growth = Rickets prevention!'
                }
              ],
              practicalApplications: ['Directly tested in BPSC TRE Part 2 (General Studies).'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking human blood is acidic.',
                  whyWrongEn: 'Human blood pH is strictly maintained between 7.35 and 7.45, making it slightly ==basic/alkaline==.',
                  correctWayEn: 'Blood pH is slightly alkaline (7.35–7.45).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which disease is caused by Vitamin D deficiency? (Rickets)',
                  'What is the normal pH of human blood? (7.35 to 7.45)',
                  'On which principle does Optical Fiber work? (Total Internal Reflection)',
                  'Which vitamin contains Cobalt? (Vitamin B12)'
                ],
                commonDistractorTraps: [
                  'Confusing Scurvy (Vitamin C) with Rickets (Vitamin D)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.37 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.40 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Vitamin D deficiency: Rickets in children, Osteomalacia in adults.',
                'Vitamin C (Ascorbic acid): Scurvy (bleeding gums), destroyed by heat.',
                'Vitamin B12 (Cyanocobalamin): Contains Cobalt, prevents pernicious anemia.',
                'Human blood pH: 7.35 – 7.45 (slightly alkaline).',
                'Optical fiber: Works on Total Internal Reflection (TIR).',
                'Conditions for TIR: Denser to rarer medium + angle of incidence > critical angle.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sci-1',
                  questionEn: 'An optical fiber used in telecommunications operates on which of the following optical phenomena?',
                  options: [
                    { id: 'a', textEn: 'Refraction of light', isCorrect: false },
                    { id: 'b', textEn: 'Total Internal Reflection', isCorrect: true },
                    { id: 'c', textEn: 'Interference of light', isCorrect: false },
                    { id: 'd', textEn: 'Diffraction of light', isCorrect: false }
                  ],
                  explanationEn: 'Optical fibers transmit light signals with almost zero loss using continuous Total Internal Reflection (TIR) within the core.',
                  conceptTested: 'BPSC TRE Core Syllabus Concept',
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sci-pyq-1',
                topicId: 'sci-topic-vitamins-optics',
                chapterId: 'sci-ch-applied-science',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Deficiency of which of the following vitamins causes Rickets in children?',
                questionTextHi: 'बच्चों में रिकेट्स (Rickets) रोग निम्नलिखित में से किस विटामिन की कमी के कारण होता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Vitamin A', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Vitamin C', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Vitamin D', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Deficiency of Vitamin D (Calciferol) in growing children prevents normal bone mineralization, causing soft, weak, and deformed bones known as Rickets.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 40,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, General Studies, Q.40 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },
  // =========================================================================
  // SUBJECT 6: ELEMENTARY MATHEMATICS & QUANTITATIVE APTITUDE
  // =========================================================================
  {
    key: 'ELEMENTARY_MATHEMATICS',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Elementary Mathematics & Mental Ability',
    displayNameHi: 'प्रारंभिक गणित एवं मानसिक क्षमता परीक्षण',
    iconName: 'Calculator',
    descriptionEn: 'Official 8-mark General Studies math pillar: Algebraic identities, quadratic roots, commercial profit/loss, mensuration, and time & work.',
    descriptionHi: 'सामान्य अध्ययन का अनिवार्य 8 अंकों वाला गणितीय खंड: बीजगणितीय सर्वसमिकाएं, द्विघात समीकरण, लाभ-हानि एवं छूट, क्षेत्रमिति तथा समय एवं कार्य।',
    chapters: [
      {
        id: 'math-ch-algebra-arithmetic',
        subjectKey: 'ELEMENTARY_MATHEMATICS',
        chapterNumber: 1,
        slug: 'elementary-algebra-commercial-arithmetic',
        titleEn: 'Algebraic Identities & Commercial Arithmetic',
        titleHi: 'बीजगणितीय सर्वसमिकाएं एवं व्यावसायिक अंकगणित',
        descriptionEn: 'Core scoring topics tested across TRE 1.0, 2.0, and 3.0: (x + 1/x)² expansions, discriminant nature of roots, and markup/discount combinations.',
        descriptionHi: 'TRE 1.0, 2.0 तथा 3.0 में पूछे गए प्रश्न: (x + 1/x)² का प्रसार, विविक्तकर (D > 0) द्वारा मूलों की प्रकृति, तथा 10% छूट एवं लाभ-हानि के सूत्र।',
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 60,
        topics: [
          {
            id: 'math-topic-algebra-identities',
            chapterId: 'math-ch-algebra-arithmetic',
            topicNumber: 1,
            slug: 'algebraic-identities-quadratic-roots',
            titleEn: 'Algebraic Identities & Quadratic Roots',
            titleHi: 'बीजगणितीय सर्वसमिकाएं एवं द्विघात मूल',
            descriptionEn: 'Mastering (x + 1/x)² expansions, quadratic discriminant conditions (b² - 4ac > 0), and telescoping fractions.',
            descriptionHi: '(x + 1/x)² = x² + 1/x² + 2 सर्वसमिका, b² - 4ac > 0 द्वारा वास्तविक व भिन्न मूल, तथा भिन्नों का मान।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'TRE 3.0 (Q.31), TRE 2.0 (Q.34, Q.36), TRE 1.0 (Q.2)',
            tutorial: {
              id: 'tut-math-algebra',
              topicId: 'math-topic-algebra-identities',
              titleEn: 'Algebraic Identities & Quadratic Equations for BPSC TRE',
              titleHi: 'BPSC TRE हेतु बीजगणित एवं द्विघात समीकरण का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Expand symmetric reciprocal algebraic forms like ==(x + 1/x)² = x² + 1/x² + 2==.',
                'Determine root nature using the quadratic discriminant: ==D = b² - 4ac==.',
                'Quickly simplify telescoping fraction series: (1 + 1/2)(1 + 1/3)...(1 + 1/n).'
              ],
              introductionEn: 'In every BPSC TRE paper, questions on elementary algebraic identities and quadratic roots are asked in General Studies (Q.31 to Q.38). These are direct formula-based questions carrying guaranteed marks.',
              introductionHi: 'BPSC TRE के प्रत्येक सामान्य अध्ययन पत्र में (प्र. 31 से 38) बीजगणित की मानक सर्वसमिकाओं और द्विघात समीकरण के विविक्तकर (Discriminant) से सीधे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. Reciprocal Identity: (x + 1/x)²',
                  contentMarkdownEn: `From the standard binomial identity $(a + b)² = a² + b² + 2ab$:
* Let $a = x$ and $b = 1/x$:
  * ==$(x + 1/x)² = x² + 1/x² + 2$==
* Similarly for difference:
  * ==$(x - 1/x)² = x² + 1/x² - 2$==
* **BPSC TRE 3.0 Trap:** Many candidates mistakenly select $x² + 1/x²$ forgetting the middle cross-product term $2(x)(1/x) = 2$.`
                },
                {
                  title: '2. Quadratic Discriminant & Nature of Roots',
                  contentMarkdownEn: `For the standard quadratic equation $ax² + bx + c = 0$ ($a ≠ 0$), the discriminant is:
* ==$D = b² - 4ac$==
* **Rule 1 (Real & Distinct Roots):** If ==$b² - 4ac > 0$==, roots are real and unequal.
* **Rule 2 (Real & Equal Roots):** If ==$b² - 4ac = 0$==, roots are real and equal ($x = -b/2a$).
* **Rule 3 (Imaginary Roots):** If ==$b² - 4ac < 0$==, roots are complex conjugate numbers.`
                }
              ],
              importantDefinitions: [
                {
                  term: 'Discriminant (विविक्तकर)',
                  definitionEn: 'The algebraic quantity D = b² - 4ac that discriminates between real and non-real roots of a quadratic equation.',
                  definitionHi: 'द्विघात समीकरण ax² + bx + c = 0 में D = b² - 4ac को विविक्तकर कहते हैं जो मूलों के वास्तविक या काल्पनिक होने का निर्धारण करता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Core Algebraic Formulas',
                  formulaOrRule: '(x + 1/x)² = x² + 1/x² + 2 | D = b² - 4ac > 0 for distinct real roots',
                  explanationEn: 'Essential identities tested in TRE 2.0 Q.34 and TRE 3.0 Q.31.',
                  explanationHi: 'द्विघात समीकरण में भिन्न वास्तविक मूल हेतु b² - 4ac > 0 अनिवार्य है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Official Problem Analysis',
                  problemEn: 'Which of the following is the value of (x + 1/x)²? (A) x² + 1/x² (B) x² + 1/x² + 2 (C) x² + 1/x² - 2 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: `1. Apply identity (a + b)² = a² + b² + 2ab.
2. Here a = x, b = 1/x.
3. Product 2ab = 2 × x × (1/x) = 2.
4. Expansion is x² + 1/x² + 2.
5. Official BPSC Key: Option (B).`,
                  shortcutTrick: 'Middle term 2(x)(1/x) cancels to constant 2.'
                }
              ],
              practicalApplications: ['Algebraic modeling, polynomial solving, and physical projectile trajectories.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Forgetting the constant +2 in (x + 1/x)²',
                  whyWrongEn: 'Thinking (a+b)² = a² + b² without the 2ab cross product.',
                  correctWayEn: 'Always include +2: (x + 1/x)² = x² + 1/x² + 2.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Value of (x + 1/x)² (TRE 3.0 Q.31).',
                  'Condition for two distinct real roots: b² - 4ac > 0 (TRE 2.0 Q.34).',
                  'Difference of squares: X = a² - b² = (a+b)(a-b) (TRE 2.0 Q.36).'
                ],
                commonDistractorTraps: ['Omitting +2 in expansion, confusing D > 0 with D ≥ 0.'],
                relatedPyqReferences: ['BPSC TRE 3.0 (Q.31)', 'BPSC TRE 2.0 (Q.34, Q.36)']
              },
              quickRevisionPoints: [
                '(x + 1/x)² = ==x² + 1/x² + 2==.',
                '(x - 1/x)² = ==x² + 1/x² - 2==.',
                'Distinct real roots: ==b² - 4ac > 0==.',
                'Equal real roots: ==b² - 4ac = 0==.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-math-alg-1',
                  questionEn: 'If a quadratic equation has real and equal roots, what must be the value of its discriminant D = b² - 4ac?',
                  questionHi: 'यदि किसी द्विघात समीकरण के मूल वास्तविक और समान हों, तो उसके विविक्तकर D = b² - 4ac का मान क्या होना चाहिए?',
                  options: [
                    { id: 'A', textEn: 'D = 0', isCorrect: true },
                    { id: 'B', textEn: 'D > 0', isCorrect: false },
                    { id: 'C', textEn: 'D < 0', isCorrect: false },
                    { id: 'D', textEn: 'D ≥ 1', isCorrect: false }
                  ],
                  explanationEn: 'When D = 0, the quadratic formula x = (-b ± √0)/2a gives two identical real roots x = -b/2a.',
                  conceptTested: 'Quadratic Discriminant Nature of Roots'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-math-alg-1',
                topicId: 'math-topic-algebra-identities',
                chapterId: 'math-ch-algebra-arithmetic',
                subjectKey: 'ELEMENTARY_MATHEMATICS',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'The equation ax² + bx + c = 0 has two distinct real roots if:',
                questionTextHi: 'समीकरण ax² + bx + c = 0 के दो भिन्न वास्तविक मूल होंगे यदि:',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'b² - 4ac > 0', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'b² - 4ac = 0', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'b² - 4ac < 0', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'For distinct real roots, discriminant D = b² - 4ac must strictly exceed zero.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 34,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 7: CURRENT AFFAIRS, SPACE & TECH MISSIONS
  // =========================================================================
  {
    key: 'CURRENT_AFFAIRS',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Current Affairs & Science Missions',
    displayNameHi: 'समसामयिकी एवं विज्ञान-प्रौद्योगिकी मिशन',
    iconName: 'Globe',
    descriptionEn: 'Flagship national science and global integration topics: ISRO Gaganyaan, Chandrayaan-3, Green Hydrogen Mission, G20 African Union induction, G7, and international UPI.',
    descriptionHi: 'इसरो का गगनयान मिशन, चंद्रयान-3, राष्ट्रीय हरित हाइड्रोजन मिशन, G20 में अफ्रीकी संघ का स्थायी प्रवेश, G7 सम्मेलन तथा अंतरराष्ट्रीय UPI विस्तार।',
    chapters: [
      {
        id: 'ca-ch-space-summits',
        subjectKey: 'CURRENT_AFFAIRS',
        chapterNumber: 1,
        slug: 'isro-space-missions-green-hydrogen-summits',
        titleEn: 'ISRO Space Missions, Green Hydrogen & Summits',
        titleHi: 'इसरो अंतरिक्ष मिशन, हरित हाइड्रोजन एवं वैश्विक शिखर सम्मेलन',
        descriptionEn: 'Comprehensive guide to high-yield science and geopolitical developments tested in TRE 1.0, 2.0, and 3.0.',
        descriptionHi: 'गगनयान, हरित हाइड्रोजन निर्माण प्रक्रिया (इलेक्ट्रोलिसिस), G20 नई दिल्ली शिखर सम्मेलन तथा CAA पर आधारित संपूर्ण अध्ययन।',
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'ca-topic-isro-green-energy',
            chapterId: 'ca-ch-space-summits',
            topicNumber: 1,
            slug: 'isro-gaganyaan-chandrayaan-green-hydrogen',
            titleEn: 'ISRO Space Missions & Green Hydrogen Technology',
            titleHi: 'इसरो अंतरिक्ष मिशन एवं ग्रीन हाइड्रोजन तकनीक',
            descriptionEn: 'Gaganyaan crewed orbital mission, Chandrayaan-2/3 communications, and green hydrogen water electrolysis.',
            descriptionHi: 'गगनयान मानवयुक्त अंतरिक्ष यान, चंद्रयान-3 और चंद्रयान-2 का संपर्क संदेश, तथा जल के विद्युत-अपघटन द्वारा हरित हाइड्रोजन।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'TRE 3.0 (Q.49, Q.51), TRE 2.0 (Q.51), TRE 1.0 (Q.19, Q.20)',
            tutorial: {
              id: 'tut-ca-space',
              topicId: 'ca-topic-isro-green-energy',
              titleEn: 'ISRO Missions & Green Energy for BPSC TRE',
              titleHi: 'BPSC TRE हेतु इसरो मिशन एवं हरित ऊर्जा का अध्ययन',
              readingTimeMinutes: 10,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the mission profile of ==Gaganyaan== (ISRO\'s human spaceflight).',
                'Know the official message sent by Chandrayaan-2 to Chandrayaan-3: ==\"Welcome buddy!\"==.',
                'Explain how ==Green Hydrogen== is generated through water electrolysis powered by renewable energy.'
              ],
              introductionEn: 'Science & technology and space achievements constitute the most consistent segment of Current Affairs in BPSC TRE General Studies. BPSC questions focus on mission names, technological processes, and specific historic milestones.',
              introductionHi: 'BPSC TRE में समसामयिकी खंड के तहत इसरो के प्रमुख अंतरिक्ष मिशन (गगनयान, चंद्रयान-3) तथा हरित हाइड्रोजन जैसे राष्ट्रीय अभियानों से सीधे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. ISRO Gaganyaan: India\'s Crewed Spaceflight',
                  contentMarkdownEn: `* **Mission Goal:** Send a crew of **3 Indian astronauts** to Low Earth Orbit (400 km) for a 3-day mission and return safely to Earth.
* **Launch Vehicle:** ==LVM3 (Launch Vehicle Mark-3)==.
* **Crew Module:** Equipped with environmental control and life support system (ECLSS) and crew escape system (CES).
* **Astronaut Designation:** Astronaut designates trained at Yuri Gagarin Cosmonaut Training Center and ISRO.`
                },
                {
                  title: '2. Green Hydrogen Generation Process',
                  contentMarkdownEn: `* **Green Hydrogen** is produced by splitting water ($H_2O$) into hydrogen and oxygen via ==electrolysis==.
* **Crucial Criterion:** The electrical energy driving the electrolyzer MUST come from ==100% renewable sources== (solar, wind, hydro).
* **National Target:** 5 Million Metric Tonnes (MMT) annual production by 2030 under National Green Hydrogen Mission.
* **First Pilot Plant in India:** Commissioned by Oil India Limited at ==Jorhat, Assam== (99.999% pure).`
                }
              ],
              importantDefinitions: [
                {
                  term: 'Green Hydrogen',
                  definitionEn: 'Hydrogen produced through water electrolysis powered entirely by renewable solar, wind, or hydro electricity with zero carbon emissions.',
                  definitionHi: 'नवीकरणीय ऊर्जा (सौर/पवन) की सहायता से जल के विद्युत-अपघटन (Electrolysis) द्वारा उत्पादित हाइड्रोजन जिसमें शून्य कार्बन उत्सर्जन होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Hydrogen Color Classifications',
                  formulaOrRule: 'Green = Water Electrolysis + Renewable | Grey = Methane Steam Reforming (High CO2) | Blue = Methane + Carbon Capture',
                  explanationEn: 'Only Green Hydrogen utilizes renewable electricity-driven water electrolysis.',
                  explanationHi: 'केवल ग्रीन हाइड्रोजन में नवीकरणीय ऊर्जा द्वारा जल का इलेक्ट्रोलिसिस होता है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 3.0 Question Analysis',
                  problemEn: 'What is the name of spacecraft to be launched by ISRO in 2024 to carry astronauts? (A) Gaganyaan (B) Chandrayaan-3 (C) Aditya-L1 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. ISRO\'s crewed mission to carry Indian astronauts is Gaganyaan. 2. Aditya-L1 is a solar observatory, Chandrayaan-3 was a lunar lander/rover. 3. Official Answer: (A) Gaganyaan.',
                  shortcutTrick: "'Gagan' = Sky/Space; 'Yaan' = Vehicle => Gaganyaan for human spaceflight."
                }
              ],
              practicalApplications: ['Zero-emission transport, heavy industry decarbonization, and space propulsion.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Green Hydrogen is produced from natural gas.',
                  whyWrongEn: 'Natural gas reforming produces Grey Hydrogen, releasing carbon dioxide.',
                  correctWayEn: 'Green Hydrogen is produced exclusively from water electrolysis using renewable energy.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'ISRO crewed spacecraft name: Gaganyaan (TRE 3.0 Q.49).',
                  'Process for green hydrogen: water electrolysis (TRE 3.0 Q.51, TRE 1.0 Q.20).',
                  'Chandrayaan-2 message to Chandrayaan-3: "Welcome buddy!" (TRE 2.0 Q.51).'
                ],
                commonDistractorTraps: ['Confusing Gaganyaan with Chandrayaan or Aditya-L1.'],
                relatedPyqReferences: ['BPSC TRE 3.0 (Q.49, Q.51)', 'BPSC TRE 2.0 (Q.51)']
              },
              quickRevisionPoints: [
                'Human spaceflight mission: ==Gaganyaan==.',
                'Green hydrogen production: ==Electrolysis of water powered by renewables==.',
                'First pure green hydrogen plant: ==Jorhat, Assam==.',
                'Chandrayaan-2 greeting: ==\"Welcome buddy!\"==.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-ca-gh-1',
                  questionEn: 'Which chemical process is utilized to extract Green Hydrogen without generating greenhouse carbon emissions?',
                  questionHi: 'ग्रीन हाइड्रोजन प्राप्त करने के लिए बिना ग्रीनहाउस गैस उत्सर्जन के किस रासायनिक प्रक्रिया का उपयोग किया जाता है?',
                  options: [
                    { id: 'A', textEn: 'Water electrolysis powered by renewable electricity', isCorrect: true },
                    { id: 'B', textEn: 'Coal gasification', isCorrect: false },
                    { id: 'C', textEn: 'Natural gas steam reforming', isCorrect: false },
                    { id: 'D', textEn: 'Nuclear fission', isCorrect: false }
                  ],
                  explanationEn: 'Electrolysis splits water into hydrogen and oxygen using clean renewable power, creating zero greenhouse emissions.',
                  conceptTested: 'Green Hydrogen Process'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-ca-space-1',
                topicId: 'ca-topic-isro-green-energy',
                chapterId: 'ca-ch-space-summits',
                subjectKey: 'CURRENT_AFFAIRS',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'What is the name of spacecraft to be launched by ISRO to carry astronauts into space?',
                questionTextHi: 'भारतीय अंतरिक्ष यात्रियों को अंतरिक्ष में ले जाने हेतु इसरो द्वारा विकसित अंतरिक्ष यान का नाम क्या है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Gaganyaan', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Aditya-L1', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Chandrayaan-3', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: "Gaganyaan is ISRO's indigenous crewed spacecraft project.",
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 49,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
