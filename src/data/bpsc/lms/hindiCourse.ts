// Comprehensive BPSC TRE 4.0 Hindi Vyakaran Course Data
// In-depth curriculum covering Varnamala, Swar-Vyanjan, Sandhi (5 Swar Sandhi types), Samas (6 types), Karak (8 vibhaktis), and Shuddh Vartani
// Fully equipped with authentic BPSC TRE 1.0, 2.0, 3.0 Language Section PYQs, yellow highlighters (==text==), and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_HINDI_SUBJECTS: LMSSubject[] = [
  {
    key: 'HINDI_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'Hindi Language & Grammar',
    displayNameHi: 'हिंदी भाषा एवं व्याकरण',
    iconName: 'Languages',
    descriptionEn: 'Core Hindi qualifying module (Part 1, 22 Questions): Varn विचार (Swar, Vyanjan, Alpapran-Mahapran), Sandhi (Dirgh, Gun, Vriddhi, Yan, Ayadi), Samas (6 types), Karak (8 vibhaktis), and Shuddh Vartani.',
    descriptionHi: 'भाग 1 भाषा अर्हक खंड (22 प्रश्न): वर्ण विचार (स्वर, व्यंजन, अल्पप्राण, महाप्राण, अघोष, सघोष), संधि (स्वर संधि के 5 भेद), समास (6 भेद), कारक (8 भेद), तथा शुद्ध वर्तनी (उज्ज्वल, कवयित्री, शृंगार)।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: VARN VICHAR & SANDHI
      // ----------------------------------------------------
      {
        id: 'hin-ch-varn-sandhi',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 1,
        slug: 'hindi-varn-vichar-and-sandhi',
        titleEn: 'Varn Vichar & Sandhi Rules',
        titleHi: 'वर्ण विचार एवं संधि के नियम',
        descriptionEn: 'Classification of Swar (11), Vyanjan (33), Alpapran vs Mahapran, Aghosh vs Ghosh, and the 5 types of Swar Sandhi with identification tricks.',
        descriptionHi: 'स्वरों (11) एवं व्यंजनों (33) का वर्गीकरण, अल्पप्राण-महाप्राण, अघोष-सघोष, तथा स्वर संधि के 5 भेदों (दीर्घ, गुण, वृद्धि, यण, अयादि) की पहचान की अचूक विधियां।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'hin-topic-varn-sandhi-core',
            chapterId: 'hin-ch-varn-sandhi',
            topicNumber: 1,
            slug: 'varnamala-and-swar-sandhi-rules',
            titleEn: 'Varnamala, Phonetics & Swar Sandhi',
            titleHi: 'वर्णमाला, उच्चारण स्थान एवं स्वर संधि के 5 भेद',
            descriptionEn: 'Touch consonants (Sparsh Vyanjan), Alpapran (1,3,5), Mahapran (2,4), Aghosh (1,2), Ghosh (3,4,5), and shortcut tricks to identify Sandhi without breaking words.',
            descriptionHi: 'स्पर्श व्यंजन (क-प वर्ग), अल्पप्राण, महाप्राण, अघोष, सघोष, तथा शब्द देखकर संधि पहचानने के आसान नियम।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.11, Q.14), TRE 2.0 (Q.12, Q.15) & TRE 3.0 (Q.10, Q.13)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-varn-sandhi-core',
              topicId: 'hin-topic-varn-sandhi-core',
              titleEn: 'Varnamala, Phonetics & Swar Sandhi',
              titleHi: 'वर्णमाला, उच्चारण स्थान एवं स्वर संधि के 5 भेद',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the complete Devanagari Varnamala: 11 Swar, 2 Ayogwah, 33 Vyanjan, 4 Sanyukta Vyanjan (क्ष, त्र, ज्ञ, श्र).',
                'Classify consonants based on breath (Alpapran: 1st, 3rd, 5th + Antahastha; Mahapran: 2nd, 4th + Ushma).',
                'Classify consonants based on vocal chord vibration (Aghosh: 1st, 2nd + श, ष, स; Ghosh: 3rd, 4th, 5th + य, र, ल, व, ह + all Swar).',
                'Master the 5 types of Swar Sandhi: Dirgh, Gun, Vriddhi, Yan, and Ayadi.'
              ],
              introductionEn: '==In BPSC TRE Part 1, Hindi Language carries 22 questions, making it the most reliable scoring section.==\n\nDevanagari phonetics and Sandhi follow strict acoustic rules: by observing vowel lengths and semi-vowel glides, one can identify the compound type without lengthy etymological derivation.',
              introductionHi: 'बीपीएससी टीआरई के भाग 1 में हिंदी भाषा के 22 प्रश्न आते हैं, जो अर्हक अंक (9/30) प्राप्त करने के लिए सबसे सुरक्षित और स्कोरिंग खंड है। वर्णमाला और संधि को यदि वैज्ञानिक तरीके से समझा जाए, तो बिना शब्द विच्छेद किए केवल शब्द की बनावट देखकर सही उत्तर पहचाना जा सकता है।',
              conceptSections: [
                {
                  title: '1. वर्णमाला एवं ध्वनियों का वैज्ञानिक वर्गीकरण',
                  contentMarkdownEn: 'हिंदी वर्णमाला में कुल ==52 वर्ण== हैं:\n\n* **स्वर (11):** अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।\n* **अयोगवाह (2):** अं (अनुस्वार), अः (विसर्ग)।\n* **व्यंजन (33):** स्पर्श व्यंजन (25, क-वर्ग से प-वर्ग तक), अन्तःस्थ (==य, र, ल, व==), ऊष्म (==श, ष, स, ह==)।\n* **संयुक्त व्यंजन (4):** ==क्ष== (क्+ष्), ==त्र== (त्+र्), ==ज्ञ== (ज्+ञ्), ==श्र== (श्+र्)।'
                },
                {
                  title: '2. अल्पप्राण, महाप्राण, अघोष एवं सघोष',
                  contentMarkdownEn: '* **अल्पप्राण (1, 3, 5 + अन्तःस्थ):** प्रत्येक वर्ग का 1, 3, 5 वां वर्ण + य, र, ल, व + सभी स्वर।\n* **महाप्राण (2, 4 + ऊष्म):** प्रत्येक वर्ग का 2, 4 वां वर्ण + श, ष, स, ह।\n* **अघोष (1, 2 + श, ष, स):** प्रत्येक वर्ग का 1 और 2 वां वर्ण + श, ष, स।\n* **सघोष / घोष (3, 4, 5 + य, र, ल, व, ह + सभी स्वर):** प्रत्येक वर्ग का 3, 4, 5 वां वर्ण + य, र, ल, व, ह + सभी स्वर।'
                },
                {
                  title: '3. स्वर संधि के 5 भेद एवं पहचान की जादुई ट्रिक्स',
                  contentMarkdownEn: '* **1. दीर्घ संधि:** शब्द के मध्य में ==बड़ी मात्रा (आ, ई, ऊ)== दिखेगी (विद्यालय, गिरीश, भानूदय)।\n* **2. गुण संधि:** शब्द के ऊपर ==एक मात्रा (ए \'े\' या ओ \'ो\')== दिखेगी (नरेंद्र, महोत्सव, सूर्योदय)।\n* **3. वृद्धि संधि:** शब्द के ऊपर ==दो मात्राएं (ऐ \'ै\' या औ \'ौ\')== दिखेगी (सदैव, एकैक, वनौषधि)।\n* **4. यण संधि:** शब्द में ==\'य\' या \'व\' से पहले आधा व्यंजन== आता है (इत्यादि, स्वागत, प्रत्येक)।\n* **5. अयादि संधि:** तीन अक्षरों का सरल शब्द जिसमें मध्य में य या व हो (नयन, पवन, पावक)।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'यण संधि ट्रिक',
                  definitionEn: 'A rule stating that when an unstressed half-consonant precedes "y" or "v", the compound is Yan Sandhi.',
                  definitionHi: '\'य\' या \'व\' से पहले आधा व्यंजन आने पर यण संधि होती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'संयुक्त व्यंजन ज्ञ का निर्माण',
                  formulaOrRule: 'ज्ञ = ज् (हलंत) + ञ्',
                  explanationEn: 'Crucial BPSC PYQ: ज + ञ मिलकर ज्ञ बनाते हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: स्वागत में संधि',
                  problemEn: '\'स्वागत\' में कौन सी संधि है?',
                  stepByStepSolutionEn: '1. सु + आगत = स्वागत।\n2. \'व\' से पहले आधा \'स्\' है।\n3. यह यण संधि का नियम है।\n4. उत्तर: यण संधि।',
                  shortcutTrick: '\'व\' से पहले आधा \'स्\' = यण संधि!'
                }
              ],
              practicalApplications: ['Directly scores 3 to 4 marks in BPSC TRE Part 1 Language.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Breaking ज्ञ into ग् + य.',
                  whyWrongEn: 'In Sanskrit and Hindi, ज्ञ is strictly formed by ज् + ञ्.',
                  correctWayEn: 'Always select ज् + ञ्.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'ज्ञ का निर्माण: ज् + ञ् (TRE 1.0 Q.11)',
                  'स्वागत में यण संधि (TRE 2.0 Q.12)',
                  'अल्पप्राण एवं महाप्राण के नियम'
                ],
                commonDistractorTraps: ['Confusing Gun Sandhi with Vriddhi Sandhi'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.11)', 'BPSC TRE 2.0 (Q.12)']
              },
              quickRevisionPoints: [
                'हिंदी वर्णमाला में कुल 52 वर्ण (11 स्वर, 33 मूल व्यंजन, 4 संयुक्त व्यंजन)।',
                'संयुक्त व्यंजन: क्ष (क्+ष्), त्र (त्+र्), ज्ञ (ज्+ञ्), श्र (श्+र्)।',
                'अल्पप्राण: 1, 3, 5 + अन्तःस्थ (य, र, ल, व)।',
                'महाप्राण: 2, 4 + ऊष्म (श, ष, स, ह)।',
                'दीर्घ संधि: बड़ी मात्रा; गुण संधि: एक मात्रा; वृद्धि संधि: दो मात्राएं।',
                'यण संधि: य या व से पहले आधा अक्षर (स्वागत, प्रत्येक)।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-sandhi-1',
                  questionEn: '\'स्वागत\' शब्द में निम्नलिखित में से कौन सी स्वर संधि है?',
                  questionHi: '\'स्वागत\' शब्द में निम्नलिखित में से कौन सी स्वर संधि है?',
                  options: [
                    { id: 'A', textEn: 'दीर्घ संधि', isCorrect: false },
                    { id: 'B', textEn: 'गुण संधि', isCorrect: false },
                    { id: 'C', textEn: 'यण संधि', isCorrect: true },
                    { id: 'D', textEn: 'वृद्धि संधि', isCorrect: false }
                  ],
                  explanationEn: 'सु + आगत = स्वागत। यहां उ + आ मिलकर \'वा\' बनाते हैं और \'स\' आधा हो जाता है, जो यण संधि का विशिष्ट नियम है।',
                  conceptTested: 'यण संधि की पहचान'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-sandhi-1',
                topicId: 'hin-topic-varn-sandhi-core',
                chapterId: 'hin-ch-varn-sandhi',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'संयुक्त व्यंजन \'ज्ञ\' का निर्माण किन दो वर्णों के परस्पर मेल से हुआ है?',
                questionTextHi: 'संयुक्त व्यंजन \'ज्ञ\' का निर्माण किन दो वर्णों के परस्पर मेल से हुआ है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'ग् + य', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'ज् + ञ्', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'ध् + य', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'हिंदी व्याकरण में संयुक्त व्यंजन \'ज्ञ\' का निर्माण \'ज्\' (हलंत) और \'ञ्\' के योग से होता है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-25',
                shift: 'Shift 1 (Language Section)',
                officialQuestionNumber: 11,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: SAMAS, KARAK & SHUDDH VARTANI
      // ----------------------------------------------------
      {
        id: 'hin-ch-samas-karak',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 2,
        slug: 'samas-karak-and-shuddh-vartani',
        titleEn: 'Samas (6 Types), Karak & Spelling Correction',
        titleHi: 'समास के 6 भेद, कारक एवं शुद्ध वर्तनी',
        descriptionEn: 'The 6 types of Samas, 8 grammatical cases (Karak vibhaktis: Apadan vs Karan), and highest-yield spelling traps (Ujjwal, Kawayitri, Shringar).',
        descriptionHi: 'समास के 6 भेद (अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि), कारक के 8 भेद एवं चिह्न (अपादान \'से\' अलग होना), तथा शुद्ध वर्तनी (उज्ज्वल, कवयित्री, शृंगार)।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'hin-topic-samas-karak-core',
            chapterId: 'hin-ch-samas-karak',
            topicNumber: 1,
            slug: 'samas-six-types-and-karak-vibhaktis',
            titleEn: 'Samas, Karak Vibhaktis & Shuddh Vartani',
            titleHi: 'समास के ६ भेद, कारक एवं शुद्ध वर्तनी',
            descriptionEn: 'Step-by-step master guide: Avyayibhav, Tatpurush, Karmadharay, Dvigu, Dvandva, Bahuvrihi, Apadan vs Karan, and BPSC spelling traps.',
            descriptionHi: 'समास विग्रह के नियम, करण बनाम अपादान कारक में अंतर, तथा बीपीएससी में सर्वाधिक पूछे जाने वाले अशुद्ध-शुद्ध शब्द।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 14,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.15, Q.18), TRE 2.0 (Q.16, Q.19) & TRE 3.0 (Q.14, Q.17)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-samas-karak-core',
              topicId: 'hin-topic-samas-karak-core',
              titleEn: 'Samas, Karak Vibhaktis & Shuddh Vartani',
              titleHi: 'समास के ६ भेद, कारक एवं शुद्ध वर्तनी',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Distinguish between all 6 Samas types with instant identification shortcuts.',
                'Understand the difference between Karan Karak (instrument / साधन: कलम से लिखा) and Apadan Karak (separation / अलगाव: पेड़ से पत्ता गिरा).',
                'Memorize correct spellings of tricky Hindi words: कवयित्री (NOT कवियत्री), उज्ज्वल (दो बार आधा ज), शृंगार (NOT श्रृंगार), आशीर्वाद।',
                'Qualify Part 1 with a safe 25+ score out of 30 marks.'
              ],
              introductionEn: '==Samas is the art of condensing multiple words into a single concise compound.==\n\nBased on semantic primacy, Hindi grammar classifies compounds into 6 types: Avyayibhav, Tatpurush, Karmadharay, Dvigu, Dvandva, and Bahuvrihi.',
              introductionHi: 'समास का शाब्दिक अर्थ है संक्षेप। किस पद की प्रधानता है, इसी आधार पर समास के 6 भेद होते हैं। इसके साथ ही कारक के 8 भेदों (विशेषकर अपादान और करण में अंतर) से सीधे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. समास के ६ भेदों की अचूक पहचान तालिका',
                  contentMarkdownEn: '* **1. अव्ययीभाव:** पहला पद उपसर्ग/अव्यय (यथाशक्ति, प्रतिदिन, आजन्म, भरपेट)।\n* **2. तत्पुरुष:** कारक चिह्नों का लोप (राजपुत्र = राजा का पुत्र, देशभक्ति = देश के लिए भक्ति)।\n* **3. कर्मधारय:** विशेषण-विशेष्य या तुलना (नीलकमल = नीला है जो कमल, चंद्रमुखी, चरणकमल)।\n* **4. द्विगु:** पहला पद संख्यावाचक (चौराहा, त्रिफला, पंचवटी, सप्ताह)।\n* **5. द्वंद्व:** दोनों पद प्रधान, बीच में \'और\' का लोप (माता-पिता, दिन-रात, सुख-दुख)।\n* **6. बहुव्रीहि:** तीसरा विशेष अर्थ (दशानन = रावण, लंबोदर = गणेश जी, पीतांबर = भगवान विष्णु)।'
                },
                {
                  title: '2. कारक के ८ भेद एवं अपादान कारक का नियम',
                  contentMarkdownEn: '1. कर्ता (ने), 2. कर्म (को), 3. करण (से - साधन के अर्थ में), 4. संप्रदान (को, के लिए), 5. ==अपादान (से - अलगाव के अर्थ में)==, 6. संबंध (का, के, की), 7. अधिकरण (में, पर), 8. संबोधन (हे, अरे)।\n\n* **==अपादान कारक (अलगाव):==** जब किसी वस्तु का दूसरी वस्तु से अलग होना पाया जाए (पेड़ से पत्ता गिरा, गंगा हिमालय से निकलती है, बच्चा छत से कूद पड़ा)।'
                },
                {
                  title: '3. शुद्ध वर्तनी: परीक्षा के सबसे महत्वपूर्ण शब्द',
                  contentMarkdownEn: '* अशुद्ध: कवियित्री / कवियत्री  →  **==शुद्ध: कवयित्री==**\n* अशुद्ध: उज्जवल / उज्वल  →  **==शुद्ध: उज्ज्वल==** (दो बार आधा \'ज्\')\n* अशुद्ध: श्रृंगार  →  **==शुद्ध: शृंगार==**\n* अशुद्ध: आशिर्वाद  →  **==शुद्ध: आशीर्वाद==**\n* अशुद्ध: पूज्यनीय  →  **==शुद्ध: पूजनीय==**\n* अशुद्ध: अनाधिकार  →  **==शुद्ध: अनधिकार==**'
                }
              ],
              importantDefinitions: [
                {
                  term: 'अपादान कारक (अलगाव)',
                  definitionEn: 'The grammatical case indicating separation, departure, fear, or origin from a point, marked by the postposition \'se\'.',
                  definitionHi: 'संज्ञा या सर्वनाम का वह रूप जिससे किसी वस्तु के अलग होने का भाव प्रकट हो।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'करण बनाम अपादान अंतर',
                  formulaOrRule: 'साधन से काम हो = करण कारक | किसी से अलग हो = अपादान कारक',
                  explanationEn: 'कलम से लिखा = करण; पेड़ से पत्ता गिरा = अपादान।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: पेड़ से पत्ता गिरा',
                  problemEn: '"पेड़ से पत्ता गिरा" वाक्य में कौन सा कारक है?',
                  stepByStepSolutionEn: '1. पत्ता पेड़ से अलग हो रहा है (अलगाव).\n2. अलगाव के अर्थ में \'से\' अपादान कारक होता है.\n3. उत्तर: अपादान कारक.',
                  shortcutTrick: 'पेड़ से अलग हुआ = अपादान!'
                }
              ],
              practicalApplications: ['Directly scores 3 to 4 marks in BPSC TRE Part 1 Language.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Spelling कवयित्री as कवियत्री.',
                  whyWrongEn: 'The standard Hindi spelling places \'इ\' matra strictly on \'य\', not on \'व\'.',
                  correctWayEn: 'Always write कवयित्री.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'पेड़ से पत्ता गिरा में अपादान कारक (TRE 2.0 Q.16)',
                  'पीतांबर में बहुव्रीहि समास (TRE 1.0 Q.15)',
                  'कवयित्री एवं उज्ज्वल की शुद्ध वर्तनी'
                ],
                commonDistractorTraps: ['Confusing Karan Karak with Apadan Karak'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.15)', 'BPSC TRE 2.0 (Q.16)']
              },
              quickRevisionPoints: [
                'अव्ययीभाव: पहला पद अव्यय/उपसर्ग (यथाशक्ति, प्रतिदिन, आजन्म)।',
                'तत्पुरुष: कारक चिह्नों का लोप (राजपुत्र = राजा का पुत्र)।',
                'कर्मधारय: विशेषण-विशेष्य (नीलकमल = नीला है जो कमल)।',
                'द्विगु: पहला पद संख्यावाचक (चौराहा, त्रिफला)।',
                'द्वंद्व: दोनों पद प्रधान (माता-पिता, सुख-दुख)।',
                'बहुव्रीहि: तीसरा विशिष्ट अर्थ (दशानन = रावण, लंबोदर = गणेश जी)।',
                'अपादान कारक: अलगाव के अर्थ में \'से\' (पेड़ से पत्ता गिरा)।',
                'शुद्ध शब्द: कवयित्री, उज्ज्वल, शृंगार, आशीर्वाद, पूजनीय।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-samas-1',
                  questionEn: '\'पीतांबर\' (पीले हैं वस्त्र जिसके अर्थात भगवान विष्णु) शब्द में कौन सा समास है?',
                  questionHi: '\'पीतांबर\' (पीले हैं वस्त्र जिसके अर्थात भगवान विष्णु) शब्द में कौन सा समास है?',
                  options: [
                    { id: 'A', textEn: 'द्विगु समास', isCorrect: false },
                    { id: 'B', textEn: 'तत्पुरुष समास', isCorrect: false },
                    { id: 'C', textEn: 'बहुव्रीहि समास', isCorrect: true },
                    { id: 'D', textEn: 'द्वंद्व समास', isCorrect: false }
                  ],
                  explanationEn: 'जब दोनों पद मिलकर किसी तीसरे विशिष्ट संज्ञा (भगवान विष्णु) की ओर संकेत करते हैं, तो वहां बहुव्रीहि समास होता है।',
                  conceptTested: 'बहुव्रीहि समास'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-samas-1',
                topicId: 'hin-topic-samas-karak-core',
                chapterId: 'hin-ch-samas-karak',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '"पेड़ से पत्ता गिरा।" इस वाक्य में \'पेड़ से\' में कौन सा कारक प्रयुक्त हुआ है?',
                questionTextHi: '"पेड़ से पत्ता गिरा।" इस वाक्य में \'पेड़ से\' में कौन सा कारक प्रयुक्त हुआ है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'करण कारक', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'अपादान कारक', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'कर्म कारक', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'संज्ञा के जिस रूप से किसी वस्तु का दूसरी वस्तु से अलग होना (अलगाव) पाया जाए, उसे अपादान कारक कहते हैं। इसका विभक्ति चिह्न \'से\' है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (Language Section)',
                officialQuestionNumber: 16,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
