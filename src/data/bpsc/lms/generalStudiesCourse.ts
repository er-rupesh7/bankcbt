// Comprehensive BPSC TRE 4.0 General Studies Course Data
// Aggregates Bihar Special, Indian History, Indian Geography, Indian Polity, Indian Economy, General Science, Math & Reasoning, and Current Affairs
// In-depth textbook curriculum following the 12-section blueprint with authentic BPSC TRE PYQs, yellow highlighters (==text==), and knowledge checks

import { LMSSubject } from '@/types/bpscLms';
import { BPSC_HISTORY_SUBJECTS } from './historyCourse';
import { BPSC_GEOGRAPHY_SUBJECTS } from './geographyCourse';
import { BPSC_POLITY_SUBJECTS } from './polityCourse';
import { BPSC_ECONOMY_SUBJECTS } from './economyCourse';
import { BPSC_SCIENCE_SUBJECTS } from './scienceCourse';
import { BPSC_MATH_REASONING_SUBJECTS } from './mathReasoningCourse';

export const BPSC_GENERAL_STUDIES_SUBJECTS: LMSSubject[] = [
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
  ...BPSC_HISTORY_SUBJECTS,
  ...BPSC_GEOGRAPHY_SUBJECTS,
  ...BPSC_POLITY_SUBJECTS,
  ...BPSC_ECONOMY_SUBJECTS,
  ...BPSC_SCIENCE_SUBJECTS,
  ...BPSC_MATH_REASONING_SUBJECTS,
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
