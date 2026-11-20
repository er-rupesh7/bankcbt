import { LMSSubject } from '@/types/bpscLms';

export const BPSC_GENERAL_STUDIES_SUBJECTS: LMSSubject[] = [
  // =========================================================================
  // SUBJECT 1: BIHAR SPECIAL GK, HISTORY & GEOGRAPHY
  // =========================================================================
  {
    key: 'BIHAR_SPECIAL_GK',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Bihar Special: History, Geography & Economy',
    displayNameHi: 'बिहार विशेष: इतिहास, भूगोल एवं अर्थव्यवस्था',
    iconName: 'MapPin',
    descriptionEn: 'Official high-yield syllabus: 1857 Revolt in Bihar, Champaran 1917, River drainage (Ganga, Gandak, Kosi, Son), Agro-climatic zones, and Census 2011.',
    descriptionHi: 'वीर कुंवर सिंह, चंपारण सत्याग्रह, किसान सभा, गंगा एवं सहायक नदियाँ, मिट्टी, तथा बिहार जनगणना 2011 का प्रामाणिक अध्ययन।',
    chapters: [
      {
        id: 'bih-ch-freedom-struggle',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 1,
        slug: 'bihar-freedom-struggle',
        titleEn: 'Bihar in the Freedom Struggle (1857–1947)',
        titleHi: 'भारतीय स्वतंत्रता संग्राम में बिहार (1857–1947)',
        descriptionEn: 'Veer Kunwar Singh in 1857, Champaran Satyagraha (1917), Kisan Sabha movement, and Jayaprakash Narayan\'s Azad Dasta (1942).',
        descriptionHi: 'जगदीशपुर के बाबू कुंवर सिंह, राजकुमार शुक्ल, स्वामी सहजानंद सरस्वती, और 1942 में जयप्रकाश नारायण का आजाद दस्ता।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'bih-topic-champaran-1857',
            chapterId: 'bih-ch-freedom-struggle',
            topicNumber: 1,
            slug: 'champaran-satyagraha-and-1857',
            titleEn: '1857 Revolt in Bihar & Champaran Satyagraha (1917)',
            titleHi: 'बिहार में 1857 की क्रांति एवं चंपारण सत्याग्रह (1917)',
            descriptionEn: 'Detailed analysis of Kunwar Singh (Jagdishpur), Pir Ali (Patna), Tinkathia system (3/20), Raj Kumar Shukla, and Gandhiji\'s first satyagraha.',
            descriptionHi: '80 वर्षीय बाबू कुंवर सिंह का नेतृत्व, पटना में पीर अली का विद्रोह, तिनकठिया प्रथा और राजकुमार शुक्ल का आमंत्रण।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-bih-champaran',
              topicId: 'bih-topic-champaran-1857',
              titleEn: 'Bihar Freedom Movement: 1857 & Champaran 1917',
              titleHi: 'बिहार का स्वतंत्रता संग्राम: 1857 क्रांति एवं चंपारण 1917',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                '1857 क्रांति: रोहिणी (12 जून), पटना (पीर अली, 3 जुलाई), दानापुर (25 जुलाई) और जगदीशपुर (बाबू कुंवर सिंह) के घटनाक्रम को समझना।',
                'तिनकठिया प्रणाली (कुल भूमि के 3/20 भाग पर अनिवार्य नील की खेती) के शोषणकारी स्वरूप का विश्लेषण करना।',
                '1916 के लखनऊ कांग्रेस अधिवेशन में राजकुमार शुक्ल द्वारा गांधीजी को चंपारण आने का न्योता देने की ऐतिहासिक घटना को जानना।',
                'चंपारण एग्रेरियन कमेटी (अध्यक्ष: एफ.जी. स्लाई) की सिफारिशों और 25% अवैध वसूली वापसी के परिणाम को कंठस्थ करना।'
              ],
              introductionEn: 'From Veer Kunwar Singh\'s battle against British generals Dunbar and Le Grand in 1857 to Mahatma Gandhi\'s historic laboratory of Satyagraha at Champaran in 1917, Bihar has been the epicenter of India\'s freedom struggle. Every BPSC TRE examination asks direct factual questions on these events.',
              introductionHi: '1857 में जगदीशपुर के बाबू कुंवर सिंह की अद्वितीय वीरता और 1917 में चंपारण की पावन भूमि पर महात्मा गांधी द्वारा सत्याग्रह का प्रथम सफल प्रयोग आधुनिक भारत के इतिहास का स्वर्णिम अध्याय है। BPSC TRE में यहाँ से 2 से 3 प्रश्न अवश्य पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. 1857 की क्रांति: बिहार का महासंग्राम',
                  contentMarkdownEn: '**घटनाक्रम एवं केंद्र:**\n* **12 जून 1857:** देवघर के **रोहिणी गाँव** में 32वीं नेटिव इन्फैंट्री के सैनिकों का विद्रोह (मेजर नॉर्मन लेस्ली की हत्या)।\n* **3 जुलाई 1857 (पटना):** पटना के पुस्तक विक्रेता **पीर अली** ने विद्रोह का नेतृत्व किया। अफीम एजेंट डॉ. आर. लॉयल मारा गया। पटना कमिश्नर विलियम टेलर ने पीर अली को फांसी दी।\n* **25 जुलाई 1857 (दानापुर):** दानापुर की 3 रेजिमेंटों ने विद्रोह कर शाहाबाद की ओर कूच किया।\n* **बाबू वीर कुंवर सिंह (जगदीशपुर):** 80 वर्ष की उम्र में कमान संभाली। उन्होंने आरा, अतरौलिया (आजमगढ़), बलिया और रीवा में अंग्रेजों को पराजित किया। 26 अप्रैल 1858 को उनका निधन हुआ। उनके बाद उनके भाई **अमर सिंह** ने कैमूर की पहाड़ियों से छापामार युद्ध जारी रखा।'
                },
                {
                  title: '2. चंपारण सत्याग्रह (1917): गांधीजी की पहली कर्मभूमि',
                  contentMarkdownEn: '**तिनकठिया प्रथा (3/20 भाग):**\n* यूरोपीय बागान मालिक (Planters) किसानों को उनकी प्रति बीघा भूमि (20 कट्ठा) के 3 कट्ठे (3/20 भाग) पर नील की खेती करने हेतु बाध्य करते थे।\n* जर्मनी में सिंथेटिक डाई के आविष्कार के बाद नील की मांग घटी तो बागान मालिकों ने अनुबंध मुक्ति के एवज में भारी कर (**शरहबेशी और तावान**) वसूला।\n\n**गांधीजी का आगमन एवं सहयोग:**\n* 1916 के **लखनऊ कांग्रेस अधिवेशन** में मुरली भरहवा के किसान नेता **राजकुमार शुक्ल** ने गांधीजी को चंपारण आने का न्योता दिया।\n* 15 अप्रैल 1917 को गांधीजी मोतिहारी पहुंचे। उनके प्रमुख सहयोगी: डॉ. राजेंद्र प्रसाद, जे.बी. कृपलानी, ब्रजकिशोर प्रसाद, अनुग्रह नारायण सिन्हा, और मजहरुल हक थे।\n* **परिणाम:** चंपारण एग्रेरियन कमेटी (अध्यक्ष: एफ.जी. स्लाई) गठित हुई। तिनकठिया प्रथा समाप्त हुई और अवैध वसूली का **25% धन वापस** किया गया। रवींद्रनाथ टैगोर ने गांधीजी को **\'महात्मा\'** की उपाधि दी।',
                  tableData: {
                    headers: ['ऐतिहासिक पहलू', 'महत्वपूर्ण तथ्य / विवरण', 'BPSC TRE प्रश्न संदर्भ'],
                    rows: [
                      ['निमंत्रणकर्ता', 'राजकुमार शुक्ल (मुरली भरहवा गाँव)', 'TRE 1.0 (26-08-2023 Shift 1, Q.32 Series A)'],
                      ['तिनकठिया अनुपात', '3/20 भाग (3 कट्ठा प्रति 1 बीघा)', 'TRE 2.0 (15-12-2023 Shift 2, Q.34 Series A)'],
                      ['जांच समिति', 'चंपारण एग्रेरियन कमेटी (अध्यक्ष: एफ.जी. स्लाई)', 'TRE 3.0 (22-07-2024 Shift 1, Q.33 Series A)'],
                      ['1857 जगदीशपुर नायक', 'बाबू वीर कुंवर सिंह (उम्र: 80 वर्ष)', 'TRE 3.0 (22-07-2024 Shift 1, Q.35 Series A)'],
                      ['आजाद दस्ता', 'जयप्रकाश नारायण (नेपाल - बकरों का टापू)', 'TRE 1.0 (26-08-2023 Shift 1, Q.34 Series A)']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'तिनकठिया प्रणाली',
                  definitionEn: 'Coercive indigo tenancy system requiring cultivation on 3 out of every 20 parts (3/20) of agricultural land.',
                  definitionHi: 'कुल कृषि भूमि के 3/20 भाग (प्रति बीघा 3 कट्ठा) पर नील की खेती करने की बाध्यकारी औपनिवेशिक प्रथा।'
                },
                {
                  term: 'आजाद दस्ता',
                  definitionEn: 'Underground guerrilla warfare organization founded by Jayaprakash Narayan in Nepal during 1942 Quit India.',
                  definitionHi: '1942 के भारत छोड़ो आंदोलन के समय जयप्रकाश नारायण द्वारा नेपाल के जंगलों में स्थापित छापामार दस्ता।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'तिनकठिया गणितीय अनुपात',
                  formulaOrRule: 'तिनकठिया = 3 / 20 भाग (3 कट्ठा / 20 कट्ठा = 1 बीघा)',
                  explanationEn: 'Essential fraction tested in BPSC TRE exams.',
                  explanationHi: '20 कट्ठे में 3 कट्ठे पर अनिवार्य नील की खेती।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Who invited Mahatma Gandhi to Champaran to investigate the condition of farmers? (A) Dr. Rajendra Prasad (B) Raj Kumar Shukla (C) Brajkishore Prasad (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Historical context: At the 1916 Lucknow session of the Indian National Congress, Raj Kumar Shukla met Gandhi and persistently requested him to visit Champaran.\n2. In BPSC TRE 1.0 official key, Option (B) is the confirmed answer.',
                  shortcutTrick: 'Champaran invitation = Raj Kumar Shukla (Village Murli Bharhawa).'
                }
              ],
              practicalApplications: [
                'Understanding grassroots agrarian resistance and the birth of mass civil disobedience in India.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing 100% of illegal dues were refunded by British planters.',
                  whyWrongEn: 'Only 25% of the extracted amount was refunded to farmers, but planters abandoned Champaran within a decade.',
                  correctWayEn: 'Planters agreed to refund 25% of illegally extorted money.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Village of Raj Kumar Shukla (Murli Bharhawa).',
                  'Chairman of Champaran Agrarian Committee (F.G. Sly).',
                  'Age and battle locations of Veer Kunwar Singh (80 years; Jagdishpur, Arrah, Azamgarh).',
                  'Pir Ali\'s occupation (Book seller in Patna).'
                ],
                commonDistractorTraps: [
                  'Selecting Amar Singh instead of Kunwar Singh for the main 1857 leadership in Jagdishpur.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.32 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.35 Series A)'
                ]
              },
              quickRevisionPoints: [
                '1857 Revolt in Bihar: Rohini (12 June) -> Patna (Pir Ali, 3 July) -> Danapur (25 July) -> Jagdishpur (Kunwar Singh).',
                'Champaran Satyagraha (1917): Against 3/20 Tinkathia indigo system.',
                'Raj Kumar Shukla invited Gandhi at the 1916 Lucknow Congress.',
                'Champaran Agrarian Committee: F.G. Sly (Chairman), Gandhi was a member; 25% refund.',
                'Azad Dasta was founded by Jayaprakash Narayan in Nepal during 1942.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bih-1',
                  questionEn: 'Who among the following led the 1857 revolt in Patna and was hanged by Commissioner William Tayler?',
                  questionHi: 'पटना में 1857 की क्रांति का नेतृत्व किसने किया था जिन्हें कमिश्नर विलियम टेलर ने फांसी दी?',
                  options: [
                    { id: 'A', textEn: 'Pir Ali Khan', isCorrect: true },
                    { id: 'B', textEn: 'Babu Veer Kunwar Singh', isCorrect: false },
                    { id: 'C', textEn: 'Amar Singh', isCorrect: false },
                    { id: 'D', textEn: 'Inayat Ali', isCorrect: false }
                  ],
                  explanationEn: 'Pir Ali Khan, a bookseller in Patna, led the uprising on 3 July 1857. He was captured and hanged by British Commissioner William Tayler.',
                  conceptTested: '1857 revolt leadership in Patna'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-1',
                topicId: 'bih-topic-champaran-1857',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under which system in Champaran were peasants compelled by European planters to cultivate indigo on 3 out of every 20 parts of their land?',
                questionTextHi: 'चंपारण में किस प्रथा के अंतर्गत किसानों को अपनी भूमि के 3/20 भाग पर अनिवार्य रूप से नील की खेती करनी होती थी?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Ryotwari system', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Tinkathia system', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Kurtauli system', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The Tinkathia system mandated indigo cultivation on 3 kathas per bigha (3/20th of land). Mahatma Gandhi successfully launched the Champaran Satyagraha in 1917 to abolish this oppressive system.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 34,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.34 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-bih-pyq-2',
                topicId: 'bih-topic-champaran-1857',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'During the 1857 Revolt, 80-year-old Babu Veer Kunwar Singh was the landlord of which estate in Bihar?',
                questionTextHi: '1857 की क्रांति के समय 80 वर्षीय बाबू वीर कुंवर सिंह बिहार के किस क्षेत्र के जमींदार थे?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Jagdishpur (Shahabad/Bhojpur)', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Dumraon', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Tekari', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Babu Veer Kunwar Singh belonged to the Ujjayaniya Rajput clan of Jagdishpur in Shahabad (present Bhojpur) district.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (Secondary & Higher Secondary GS)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 35,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Q.35 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: BIHAR GEOGRAPHY, RIVERS & NATURAL RESOURCES
      // ----------------------------------------------------
      {
        id: 'bih-ch-geography',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 2,
        slug: 'bihar-geography-rivers',
        titleEn: 'Bihar Geography, River Systems & Agro-Climatic Zones',
        titleHi: 'बिहार का भूगोल, अपवाह तंत्र (नदियाँ) एवं कृषि-जलवायु क्षेत्र',
        descriptionEn: 'Ganga basin, North Bihar rivers (Gandak, Burhi Gandak, Bagmati, Kosi, Mahananda), South Bihar rivers (Son, Punpun, Falgu), and soils.',
        descriptionHi: 'गंगा नदी का बिहार में प्रवाह, कोसी (बिहार का शोक), गंडक, सोन नदी, तथा बिहार की मिट्टियों का संपूर्ण भौगोलिक विवरण।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'bih-topic-rivers-soils',
            chapterId: 'bih-ch-geography',
            topicNumber: 1,
            slug: 'river-systems-soils-bihar',
            titleEn: 'River Systems of Bihar & Agro-Climatic Zones',
            titleHi: 'बिहार का अपवाह तंत्र एवं जलवायु क्षेत्र',
            descriptionEn: 'Course of River Ganga in Bihar (445 km, entering at Chausa), Kosi course shifts, Son river origin (Amarkantak), and 3 agro-climatic zones.',
            descriptionHi: 'गंगा नदी (चौसा में प्रवेश, 445 किमी), कोसी नदी (बिहार का शोक), सोन नदी, तथा 3 कृषि जलवायु क्षेत्र।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-bih-rivers',
              topicId: 'bih-topic-rivers-soils',
              titleEn: 'River Drainage & Physical Geography of Bihar for BPSC TRE',
              titleHi: 'BPSC TRE हेतु बिहार की नदियाँ एवं भूगोल की संपूर्ण गाइड',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'गंगा नदी का बिहार में प्रवेश (चौसा, बक्सर) और कुल लंबाई (445 किमी) कंठस्थ करना।',
                'उत्तर बिहार की नदियों (घाघरा, गंडक, बूढ़ी गंडक, बागमती, कोसी, महानंदा) के मिलन स्थल पहचानना।',
                'दक्षिण बिहार की पठारी नदियों (कर्मनाशा, सोन, पुनपुन, फल्गु/निरंजना, किऊल) के उद्गम और संगम को जानना।',
                'बिहार के 3 प्रमुख कृषि-जलवायु क्षेत्रों (Zone I: उत्तर-पश्चिम, Zone II: उत्तर-पूर्व, Zone III: दक्षिण बिहार) का विश्लेषण करना।'
              ],
              introductionEn: 'The geography of Bihar is fundamentally shaped by the holy River Ganga which bisects the state into North Bihar Plain and South Bihar Plain. Questions regarding river confluences, flood characteristics (Kosi as Sorrow of Bihar), and districts along the Ganga appear regularly in BPSC examinations.',
              introductionHi: 'गंगा नदी बिहार को दो लगभग समान भागों (उत्तरी बिहार मैदान और दक्षिणी बिहार मैदान) में विभाजित करती है। बिहार में गंगा की लंबाई 445 किमी है और यह 12 जिलों से होकर गुजरती है। BPSC TRE में नदियों के उद्गम और संगम पर नियमित प्रश्न आते हैं।',
              conceptSections: [
                {
                  title: '1. गंगा नदी एवं प्रमुख सहायक नदियाँ',
                  contentMarkdownEn: '**गंगा नदी:**\n* बिहार में प्रवेश: **चौसा (बक्सर जिला)** के निकट।\n* बिहार से निकास: कटिहार जिले के मनिहारी के निकट पश्चिम बंगाल में।\n* बिहार में कुल लंबाई: **445 किमी** (सर्वाधिक लंबाई पटना जिले में, लगभग 99 किमी)।\n* गंगा के किनारे स्थित कुल जिले: **12 जिले** (बक्सर, भोजपुर, सारण, पटना, वैशाली, समस्तीपुर, बेगूसराय, लखीसराय, मुंगेर, खगड़िया, भागलपुर, कटिहार)।\n\n**उत्तर बिहार की नदियाँ (हिमालयी नदियाँ - सदानीरा):**\n1. **घाघरा (सरयू):** छपरा (सारण) के निकट गंगा में मिलती है।\n2. **गंडक (नारायणी/सप्तगंडकी):** पहलेजा (हाजीपुर/सोनपुर) के पास गंगा में मिलती है।\n3. **बूढ़ी गंडक:** सोमेश्वर श्रेणी से निकलकर खगड़िया के निकट गंगा में मिलती है।\n4. **कोसी (बिहार का शोक):** सप्तकोशिकी (नेपाल) से निकलती है, मार्ग परिवर्तन और बाढ़ के लिए कुख्यात; कुरसेला (कटिहार) के निकट गंगा में मिलती है।\n5. **महानंदा:** दार्जिलिंग पहाड़ियों से निकलकर कटिहार में गंगा में मिलती है (सबसे पूर्वी नदी)।\n\n**दक्षिण बिहार की नदियाँ (पठारी नदियाँ - मौसमी):**\n1. **सोन नदी:** अमरकंटक (मध्य प्रदेश) से निकलती है; मनेर (पटना) के निकट गंगा में मिलती है।\n2. **पुनपुन:** पलामू (झारखंड) से निकलकर फतुहा (पटना) के निकट गंगा में मिलती है।\n3. **फल्गु (निरंजना):** बोधगया में लीलाजन और मोहाना के संगम से बनती है; इसी नदी तट पर गौतम बुद्ध को ज्ञान प्राप्त हुआ था।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'कोसी (बिहार का शोक)',
                  definitionEn: 'Himalayan antecedent river known for rapid course shifting and catastrophic flooding in Mithila region.',
                  definitionHi: 'अपने मार्ग परिवर्तन और भीषण बाढ़ के लिए कुख्यात नदी जो कुरसेला (कटिहार) के पास गंगा में मिलती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'गंगा नदी का विस्तार सूत्र',
                  formulaOrRule: 'प्रवेश = चौसा (बक्सर) | लंबाई = 445 किमी | जिले = 12 | सर्वाधिक लंबाई = पटना (99 किमी)',
                  explanationEn: 'Top factual data points tested in BPSC General Studies.',
                  explanationHi: 'गंगा नदी 12 जिलों से होकर बहती है और पटना में सबसे लंबी है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Which river in Bihar is traditionally known as the "Sorrow of Bihar" due to its unpredictable floods and course shifting? (A) Gandak (B) Kosi (C) Son (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Fact: River Kosi shifts its course westward frequently, causing devastating floods in Supaul, Saharsa, Madhepura, and Purnia.\n2. In official BPSC TRE 2.0 key, Option (B) Kosi is the correct answer.',
                  shortcutTrick: 'Sorrow of Bihar = Kosi (confluence at Kursela).'
                }
              ],
              practicalApplications: [
                'Understanding flood management, irrigation canal networks (Western Gandak Canal, Son Canal), and environmental planning in Bihar.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Son river originates in the Himalayas.',
                  whyWrongEn: 'Son is a right-bank Peninsular river originating at Amarkantak plateau in Madhya Pradesh.',
                  correctWayEn: 'Son originates in Amarkantak (MP) and flows northward to meet the Ganga near Maner (Patna).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which river meets Ganga at Fatuha (Punpun).',
                  'Which river is associated with Buddha\'s enlightenment (Falgu / Niranjana).',
                  'Number of Bihar districts bordered by Ganga (12 districts).',
                  'Origin of Son river (Amarkantak).'
                ],
                commonDistractorTraps: [
                  'Confusing Burhi Gandak with Gandak River confluences.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.38 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.39 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Ganga in Bihar: 445 km, enters at Chausa (Buxar), passes through 12 districts.',
                'Longest stretch of Ganga is in Patna district (~99 km).',
                'Kosi meets Ganga at Kursela (Katihar) -> Sorrow of Bihar.',
                'Son originates at Amarkantak and joins Ganga near Maner (Patna).',
                'Punpun joins Ganga at Fatuha (Patna).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bih-riv-1',
                  questionEn: 'At which of the following places does the River Punpun join the River Ganga in Bihar?',
                  questionHi: 'बिहार में पुनपुन नदी किस स्थान पर गंगा नदी में मिलती है?',
                  options: [
                    { id: 'A', textEn: 'Maner', isCorrect: false },
                    { id: 'B', textEn: 'Fatuha', isCorrect: true },
                    { id: 'C', textEn: 'Digha', isCorrect: false },
                    { id: 'D', textEn: 'Munger', isCorrect: false }
                  ],
                  explanationEn: 'River Punpun, originating from Chota Nagpur plateau / Palamau, flows northeast and merges into the Ganga at Fatuha in Patna district.',
                  conceptTested: 'Punpun river confluence'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-geo-1',
                topicId: 'bih-topic-rivers-soils',
                chapterId: 'bih-ch-geography',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Which of the following rivers is known as the "Sorrow of Bihar" due to its frequent course changes and devastating monsoon floods?',
                questionTextHi: 'निम्नलिखित में से किस नदी को उसके अनियंत्रित मार्ग परिवर्तन और बाढ़ के कारण "बिहार का शोक" कहा जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Gandak River', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Kosi River', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Kamla River', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'River Kosi originates as the Saptakoshi in the Himalayas and joins Ganga at Kursela. Its immense silt load causes frequent avulsion and devastating inundations, earning it the moniker "Sorrow of Bihar".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 38,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.38 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 3: QUIT INDIA MOVEMENT IN BIHAR & AZAD DASTA (1942)
      // -----------------------------------------------------------------------
      {
        id: 'bih-ch-quit-india',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 3,
        slug: 'quit-india-bihar-azad-dasta',
        titleEn: 'Quit India Movement (1942) in Bihar & Azad Dasta',
        titleHi: '1942 भारत छोड़ो आंदोलन में बिहार एवं आजाद दस्ता',
        descriptionEn: 'Patna Secretariat Firing (11 August 1942), 7 student martyrs, Jayaprakash Narayan\'s escape from Hazaribagh Jail, and Azad Dasta in Nepal.',
        descriptionHi: 'पटना सचिवालय गोलीकांड (11 अगस्त 1942), सात शहीद छात्र, हजारीबाग जेल से जयप्रकाश नारायण का पलायन, तथा नेपाल में आजाद दस्ता का गठन।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 35,
        topics: [
          {
            id: 'bih-topic-quit-india-azad-dasta',
            chapterId: 'bih-ch-quit-india',
            topicNumber: 1,
            slug: 'quit-india-secretariat-azad-dasta',
            titleEn: 'Patna Secretariat Firing & Azad Dasta (1942)',
            titleHi: 'पटना सचिवालय गोलीकांड एवं आजाद दस्ता',
            descriptionEn: 'Detailed chronological account of the 11 August 1942 martyrdom, Archer\'s firing order, and JP\'s underground guerrilla network.',
            descriptionHi: '11 अगस्त 1942 को राष्ट्रीय ध्वज फहराते समय 7 छात्रों की शहादत; डब्लू. जी. आर्चर का आदेश; जेपी, राममनोहर लोहिया और नेपाल का राजविलास जंगल।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-bih-1942',
              topicId: 'bih-topic-quit-india-azad-dasta',
              titleEn: 'Quit India Movement (1942) in Bihar for BPSC TRE',
              titleHi: 'BPSC TRE हेतु 1942 भारत छोड़ो आंदोलन एवं बिहार की भूमिका',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                '11 अगस्त 1942 के पटना सचिवालय गोलीकांड की ऐतिहासिक तिथि एवं 7 शहीद छात्रों के नाम जानना।',
                'पटना के तत्कालीन जिला मजिस्ट्रेट डब्लू. जी. आर्चर के गोली चलाने के आदेश को समझना।',
                'दीपावली की रात (1942) हजारीबाग सेंट्रल जेल से जयप्रकाश नारायण और उनके साथियों का पलायन।',
                'नेपाल के राजविलास जंगल में \'आजाद दस्ता\' का गठन और राममनोहर लोहिया द्वारा रेडियो संचालन।'
              ],
              introductionEn: 'Bihar played a monumental role in the Quit India Movement of 1942. The brutal Secretariat firing on 11 August 1942 catalyzed statewide mass uprisings, parallel governments (Jatiya Sarkar), and guerrilla resistance spearheaded by Jayaprakash Narayan.',
              introductionHi: '1942 के भारत छोड़ो आंदोलन में बिहार का योगदान अभूतपूर्व था। 11 अगस्त 1942 को पटना सचिवालय पर तिरंगा फहराते हुए 7 युवा छात्रों की शहादत ने पूरे बिहार में क्रांति की ज्वाला भड़का दी। हजारीबाग जेल से पलायन के बाद जयप्रकाश नारायण ने नेपाल में भूमिगत \'आजाद दस्ता\' की स्थापना की।',
              conceptSections: [
                {
                  title: '1. पटना सचिवालय गोलीकांड (11 अगस्त 1942)',
                  contentMarkdownEn: '**घटनाक्रम:**\n* 9 अगस्त 1942 को गांधीजी सहित शीर्ष नेताओं की गिरफ्तारी (ऑपरेशन ज़ीरो ऑवर) के बाद पूरे देश में जनाक्रोश फूट पड़ा।\n* **11 अगस्त 1942** को पटना के विद्यार्थियों का एक विशाल जुलूस पटना सचिवालय भवन पर राष्ट्रीय ध्वज फहराने पहुँचा।\n* पटना के तत्कालीन जिलाधिकारी **डब्लू. जी. आर्चर (W.G. Archer)** के आदेश पर पुलिस ने निहत्थे छात्रों पर गोली चलाई।\n* इस गोलीकांड में **7 छात्र शहीद** हुए और कई घायल हुए।\n* **7 अमर शहीद छात्र:**\n  1. उमाकांत प्रसाद सिन्हा (रामनगर हाई स्कूल, सारण)\n  2. रामानंद सिंह (राम मोहन रॉय सेमीनरी, पटना)\n  3. सतीश प्रसाद झा (पटना कॉलेजिएट स्कूल, भागलपुर)\n  4. जगपति कुमार (बी.एन. कॉलेज, गया)\n  5. देवीपद चौधरी (मिलर हाई स्कूल, सिलहट/जमालपुर)\n  6. राजेंद्र सिंह (पटना हाई स्कूल, सारण)\n  7. रामगोविंद सिंह (पुनपुन हाई स्कूल, पटना)\n* स्वतंत्रता के बाद बिहार के प्रथम राज्यपाल जयरामदास दौलतराम ने 15 अगस्त 1947 को शहीद स्मारक का शिलान्यास किया।',
                  tableData: {
                    headers: ['ऐतिहासिक घटना', 'तिथि / वर्ष', 'प्रमुख नेतृत्व / अंग्रेज अधिकारी', 'BPSC TRE आवृत्ति'],
                    rows: [
                      ['सचिवालय गोलीकांड', '11 अगस्त 1942', 'डब्लू. जी. आर्चर (डीएम) का आदेश', 'अति उच्च (TRE 3.0 Q.38)'],
                      ['हजारीबाग जेल पलायन', 'दीपावली (9 नवम्बर 1942)', 'जयप्रकाश नारायण, रामानंद मिश्र, सूरज नारायण सिंह', 'उच्च'],
                      ['आजाद दस्ता का गठन', '1942 के अंत में', 'जयप्रकाश नारायण (संस्थापक), नेपाल का राजविलास जंगल', 'सर्वोच्च (TRE 1.0 Q.35)'],
                      ['आजाद रेडियो प्रसारण', '1942', 'डॉ. राममनोहर लोहिया', 'उच्च']
                    ]
                  }
                },
                {
                  title: '2. जयप्रकाश नारायण एवं \'आजाद दस्ता\' का गठन',
                  contentMarkdownEn: '**हजारीबाग जेल से पलायन:**\n* दीपावली की रात (9 नवंबर 1942) को जयप्रकाश नारायण, रामानंद मिश्र, सूरज नारायण सिंह, योगेंद्र शुक्ल, और गुलाब चंद गुप्त हजारीबाग सेंट्रल जेल की दीवार फांदकर फरार हो गए।\n\n**आजाद दस्ता (Azad Dasta):**\n* जेपी नेपाल पहुँचे और **नेपाल के तराई (राजविलास जंगल)** में **\'आजाद दस्ता\'** का गठन किया।\n* इसका मुख्य उद्देश्य छापामार (गुरिल्ला) युद्ध पद्धति से संचार साधनों (रेल, टेलीग्राफ, डाक) को ठप करना था।\n* आजाद दस्ता के छापामारों को सैन्य प्रशिक्षण देने का कार्य **सरदार नित्यानंद सिंह** ने किया।\n* डॉ. राममनोहर लोहिया के निर्देशन में आजाद दस्ता का रेडियो प्रचार विभाग संचालित होता था।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'आजाद दस्ता (Azad Dasta)',
                  definitionEn: 'An underground guerrilla revolutionary organization formed in Nepal jungles by Jayaprakash Narayan to sabotage British infrastructure during the 1942 movement.',
                  definitionHi: '1942 आंदोलन के दौरान ब्रिटिश संचार तंत्र को ठप करने हेतु नेपाल के जंगलों में जयप्रकाश नारायण द्वारा गठित भूमिगत क्रांतिकारी संगठन।'
                },
                {
                  term: 'सचिवालय शहीद स्मारक',
                  definitionEn: 'Sculpted memorial in Patna created by artist Devi Prasad Roy Choudhury honoring the 7 martyrs of 11 August 1942.',
                  definitionHi: 'प्रख्यात मूर्तिकार देवी प्रसाद राय चौधरी द्वारा निर्मित स्मारक, जो 11 अगस्त 1942 के 7 अमर शहीदों को समर्पित है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'सचिवालय गोलीकांड तिथि सूत्र',
                  formulaOrRule: 'गांधी गिरफ्तारी (9 अगस्त) + 2 दिन = सचिवालय गोलीकांड (11 अगस्त 1942)',
                  explanationEn: 'The Secretariat firing took place exactly two days after the launch of Quit India.',
                  explanationHi: '9 अगस्त को गिरफ्तारी हुई और 11 अगस्त को सचिवालय पर गोलीबारी हुई।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Who organized the "Azad Dasta" in the jungles of Nepal during the Quit India Movement 1942? (A) Jayaprakash Narayan (B) Ram Manohar Lohia (C) Aruna Asaf Ali (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Identify the core historic entity: "Azad Dasta" founded in Nepal in 1942.\n2. Jayaprakash Narayan escaped from Hazaribagh Jail on Diwali 1942 and reached Nepal.\n3. In the Rajvilas forest of Nepal, JP formally established the underground Azad Dasta.\n4. Official BPSC TRE 1.0 Key: Option (A) Jayaprakash Narayan.',
                  shortcutTrick: 'आजाद दस्ता = जयप्रकाश नारायण (जेपी)।'
                }
              ],
              practicalApplications: [
                'State administrative governance, historic heritage preservation, and competitive general awareness.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking the Secretariat firing took place on 9 August 1942.',
                  whyWrongEn: '9 August was the arrest of leaders (Operation Zero Hour); the firing occurred on 11 August 1942.',
                  correctWayEn: 'सचिवालय गोलीकांड 11 अगस्त 1942 को हुआ था।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'आजाद दस्ता के संस्थापक (जयप्रकाश नारायण - TRE 1.0 Q.35).',
                  'पटना सचिवालय गोलीकांड की सही तिथि (11 अगस्त 1942 - TRE 3.0 Q.38).',
                  'गोली चलाने का आदेश देने वाले कलेक्टर (डब्लू. जी. आर्चर).'
                ],
                commonDistractorTraps: [
                  'Confusing 9 August with 11 August 1942.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.35 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.38 Series A)'
                ]
              },
              quickRevisionPoints: [
                '11 अगस्त 1942: पटना सचिवालय गोलीकांड, 7 छात्र शहीद हुए।',
                'आदेश देने वाला डीएम: डब्लू. जी. आर्चर (W.G. Archer)।',
                '9 नवंबर 1942 (दीपावली): जेपी हजारीबाग जेल से फरार हुए।',
                'आजाद दस्ता: जयप्रकाश नारायण द्वारा नेपाल के राजविलास जंगल में गठित।',
                'रेडियो प्रसारण: डॉ. राममनोहर लोहिया।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bih-1942-1',
                  questionEn: 'जयप्रकाश नारायण ने 1942 के भारत छोड़ो आंदोलन के दौरान किस जेल से भागकर भूमिगत आंदोलन का संचालन किया था?',
                  questionHi: 'जयप्रकाश नारायण ने 1942 के भारत छोड़ो आंदोलन के दौरान किस जेल से भागकर भूमिगत आंदोलन का संचालन किया था?',
                  options: [
                    { id: 'A', textEn: 'बांकीपुर जेल (पटना)', isCorrect: false },
                    { id: 'B', textEn: 'हजारीबाग सेंट्रल जेल', isCorrect: true },
                    { id: 'C', textEn: 'भागलपुर जेल', isCorrect: false },
                    { id: 'D', textEn: 'बक्सर जेल', isCorrect: false }
                  ],
                  explanationEn: 'जयप्रकाश नारायण 9 नवंबर 1942 (दीपावली की रात) को हजारीबाग सेंट्रल जेल की दीवार फांदकर फरार हुए थे।',
                  conceptTested: 'जेपी हजारीबाग जेल पलायन'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-pyq-1942-1',
                topicId: 'bih-topic-quit-india-azad-dasta',
                chapterId: 'bih-ch-quit-india',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Who among the following national leaders organized the underground "Azad Dasta" in the jungles of Nepal during the Quit India Movement of 1942?',
                questionTextHi: '1942 के भारत छोड़ो आंदोलन के दौरान निम्नलिखित में से किस राष्ट्रीय नेता ने नेपाल के जंगलों में भूमिगत "आजाद दस्ता" का गठन किया था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Jayaprakash Narayan', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Dr. Ram Manohar Lohia', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Aruna Asaf Ali', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Following his daring escape from Hazaribagh Jail on Diwali night in 1942, Jayaprakash Narayan established the "Azad Dasta" in the Rajvilas forests of Nepal to organize guerrilla sabotage against British military communications.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (General Studies & Subject)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 35,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Paper I General Studies, Q.35 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-bih-pyq-1942-2',
                topicId: 'bih-topic-quit-india-azad-dasta',
                chapterId: 'bih-ch-quit-india',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'On which date did the historic Patna Secretariat firing take place during the Quit India Movement, resulting in the martyrdom of 7 brave students while attempting to hoist the national flag?',
                questionTextHi: 'भारत छोड़ो आंदोलन के दौरान राष्ट्रीय ध्वज फहराने के प्रयास में 7 बहादुर छात्रों की शहादत के साथ ऐतिहासिक पटना सचिवालय गोलीकांड किस तिथि को हुआ था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '9 August 1942', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '11 August 1942', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '15 August 1942', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'On 11 August 1942, Patna District Magistrate W.G. Archer ordered police firing on students attempting to hoist the tricolour at Patna Secretariat, martyring 7 students.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (General Studies Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 38,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Question Booklet Series A, Q.38 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 2: INDIAN HISTORY & FREEDOM MOVEMENT (1885–1947)
  // =========================================================================
  {
    key: 'INDIAN_HISTORY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian National Movement (1885–1947)',
    displayNameHi: 'भारतीय राष्ट्रीय आंदोलन (1885–1947)',
    iconName: 'History',
    descriptionEn: 'Partition of Bengal (1905), Swadeshi, Home Rule, Non-Cooperation (1920), Civil Disobedience (1930), Quit India (1942), and INA.',
    descriptionHi: 'बंग-भंग 1905, असहयोग आंदोलन, सविनय अवज्ञा, दांडी मार्च, 1942 भारत छोड़ो आंदोलन तथा सुभाष चंद्र बोस की आजाद हिंद फौज।',
    chapters: [
      {
        id: 'hist-ch-national-movement',
        subjectKey: 'INDIAN_HISTORY',
        chapterNumber: 1,
        slug: 'inm-phases',
        titleEn: 'Major Phases of Indian National Movement',
        titleHi: 'भारतीय राष्ट्रीय आंदोलन के प्रमुख चरण',
        descriptionEn: 'Congress foundations (1885), Surat Split (1907), Rowlatt Act & Jallianwala Bagh (1919), Dandi March, and Cabinet Mission Plan.',
        descriptionHi: 'कांग्रेस स्थापना, सूरत विभाजन, जलियांवाला बाग हत्याकांड 1919, गांधी-इरविन समझौता, तथा 1942 भारत छोड़ो आंदोलन।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'hist-topic-inm-landmarks',
            chapterId: 'hist-ch-national-movement',
            topicNumber: 1,
            slug: 'inm-landmarks-gandhian-era',
            titleEn: 'Gandhian Mass Movements (1920–1942) & Revolutionary Heroes',
            titleHi: 'गांधीवादी जन-आंदोलन (1920–1942) एवं क्रांतिकारी राष्ट्रवाद',
            descriptionEn: 'Non-Cooperation Movement (1920), Chauri Chaura incident (1922), Dandi Salt Satyagraha (1930), and Quit India \'Do or Die\' (1942).',
            descriptionHi: 'असहयोग आंदोलन, चौरी-चौरा कांड, सविनय अवज्ञा आंदोलन, 1929 लाहौर अधिवेशन (पूर्ण स्वराज), और भारत छोड़ो आंदोलन।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-hist-inm',
              topicId: 'hist-topic-inm-landmarks',
              titleEn: 'Gandhian Era & Indian National Movement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु गांधीवादी युग एवं राष्ट्रीय आंदोलन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                '1919 के रौलट एक्ट और 13 अप्रैल 1919 के जलियांवाला बाग नरसंहार के प्रभावों को समझना।',
                'असहयोग आंदोलन (1 अगस्त 1920) और चौरी-चौरा की घटना (4 फरवरी 1922) के कारण आंदोलन वापसी का विश्लेषण।',
                '1929 के लाहौर कांग्रेस अधिवेशन में जवाहरलाल नेहरू की अध्यक्षता में \'पूर्ण स्वराज\' संकल्प को जानना।',
                'दांडी मार्च (12 मार्च - 6 अप्रैल 1930) और 8 अगस्त 1942 के भारत छोड़ो आंदोलन में गांधीजी के \'करो या मरो\' नारे को समझना।'
              ],
              introductionEn: 'Modern Indian History and the Indian National Movement form the highest-weightage core of the General Studies section in all BPSC TRE examinations. Chronological clarity on Gandhian movements and institutional landmarks is essential for scoring full marks.',
              introductionHi: 'BPSC TRE सामान्य अध्ययन में आधुनिक भारत के राष्ट्रीय आंदोलन से सर्वाधिक प्रश्न पूछे जाते हैं। 1920 का असहयोग आंदोलन, 1930 का सविनय अवज्ञा आंदोलन और 1942 का भारत छोड़ो आंदोलन आयोग के सर्वाधिक पसंदीदा विषय हैं।',
              conceptSections: [
                {
                  title: '1. प्रमुख आंदोलनों की कालक्रमानुसार समयरेखा',
                  contentMarkdownEn: '**महत्वपूर्ण ऐतिहासिक पड़ाव:**\n* **1905:** लॉर्ड कर्जन द्वारा बंगाल का विभाजन; स्वदेशी एवं बहिष्कार आंदोलन का प्रारंभ।\n* **1906:** ढाका में मुस्लिम लीग की स्थापना (नवाब सलीमुल्लाह व आगा खां)।\n* **1907:** कांग्रेस का सूरत विभाजन (नरम दल और गरम दल में विभाजन, अध्यक्ष: रास बिहारी घोष)।\n* **1916:** लखनऊ समझौता (कांग्रेस और मुस्लिम लीग के बीच समझौता; गरम दल की कांग्रेस में वापसी; अध्यक्ष: अंबिका चरण मजूमदार)।\n* **13 अप्रैल 1919:** जलियांवाला बाग नरसंहार (अमृतसर), जनरल डायर द्वारा गोलीबारी; विरोध में रवींद्रनाथ टैगोर ने \'नाइटहुड\' उपाधि त्यागी।\n* **1 अगस्त 1920:** असहयोग आंदोलन का आरंभ (इसी दिन बाल गंगाधर तिलक का निधन हुआ)।\n* **4 फरवरी 1922:** चौरी-चौरा कांड (गोरखपुर); 12 फरवरी 1922 को बारदोली बैठक में गांधीजी ने असहयोग आंदोलन वापस लिया।\n* **दिसंबर 1929:** लाहौर कांग्रेस अधिवेशन; जवाहरलाल नेहरू ने रावी नदी तट पर तिरंगा फहराया और **\'पूर्ण स्वराज\'** का प्रस्ताव पारित किया। 26 जनवरी 1930 को प्रथम स्वतंत्रता दिवस मनाया गया।\n* **12 मार्च – 6 अप्रैल 1930:** दांडी मार्च (78 अनुयायियों के साथ साबरमती से दांडी तक 240 मील यात्रा); नमक कानून तोड़कर सविनय अवज्ञा आंदोलन की शुरुआत।\n* **8 अगस्त 1942:** मुंबई के ग्वालिया टैंक मैदान से **भारत छोड़ो आंदोलन** की घोषणा; गांधीजी ने **\'करो या मरो\' (Do or Die)** का नारा दिया। ऑपरेशन जीरो ऑवर के तहत सभी शीर्ष नेता गिरफ्तार हुए।',
                  tableData: {
                    headers: ['ऐतिहासिक घटना', 'वर्ष / तिथि', 'अध्यक्ष / प्रमुख व्यक्तित्व', 'BPSC TRE में पूछा गया प्रश्न संदर्भ'],
                    rows: [
                      ['लाहौर अधिवेशन (पूर्ण स्वराज)', 'दिसंबर 1929', 'जवाहरलाल नेहरू', 'TRE 2.0 (15-12-2023 Shift 2, Q.35 Series A)'],
                      ['दांडी मार्च दूरी एवं अवधि', '12 मार्च – 6 अप्रैल 1930 (24 दिन)', 'महात्मा गांधी (78 अनुयायी)', 'TRE 1.0 (26-08-2023 Shift 1, Q.31 Series A)'],
                      ['भारत छोड़ो \'करो या मरो\'', '8 अगस्त 1942', 'महात्मा गांधी (ग्वालिया टैंक)', 'TRE 3.0 (22-07-2024 Shift 1, Q.31 Series A)'],
                      ['आजाद हिंद फौज कमान', '1943 (सिंगापुर)', 'सुभाष चंद्र बोस', 'TRE 2.0 (15-12-2023 Shift 2, Q.37 Series A)']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'पूर्ण स्वराज संकल्प',
                  definitionEn: 'Resolution adopted at the Lahore Congress (1929) declaring Complete Independence as the ultimate goal.',
                  definitionHi: '1929 के लाहौर कांग्रेस अधिवेशन में स्वीकृत प्रस्ताव जिसके तहत पूर्ण स्वाधीनता को कांग्रेस का अंतिम लक्ष्य घोषित किया गया।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'गांधीवादी आंदोलनों का सटीक क्रम',
                  formulaOrRule: 'चंपारण (1917) -> खेड़ा (1918) -> असहयोग (1920) -> सविनय अवज्ञा (1930) -> भारत छोड़ो (1942)',
                  explanationEn: 'The definitive sequence tested in BPSC chronological matching questions.',
                  explanationHi: 'चंपारण -> खेड़ा -> असहयोग -> सविनय अवज्ञा -> भारत छोड़ो।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'In which session of the Indian National Congress was the historic resolution of "Purna Swaraj" (Complete Independence) passed? (A) Karachi Session 1931 (B) Lahore Session 1929 (C) Calcutta Session 1928 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Fact: In December 1929 at Lahore, Jawaharlal Nehru presided over the session where the Congress passed the Purna Swaraj resolution.\n2. Official BPSC Key confirmed Option (B).',
                  shortcutTrick: 'Purna Swaraj = Lahore Session 1929 (Jawaharlal Nehru).'
                }
              ],
              practicalApplications: [
                'Constitutional development insight and understanding civic mobilization in modern democracies.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Gandhi presided over the 1929 Lahore Session.',
                  whyWrongEn: 'Gandhi presided only over the 1924 Belgaum Congress Session. Jawaharlal Nehru presided over the 1929 Lahore Session.',
                  correctWayEn: 'Nehru presided over the 1929 Lahore Congress.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which Congress session was presided over by Mahatma Gandhi (Belgaum 1924).',
                  'Operation Zero Hour related to which movement (1942 Quit India).',
                  'Who gave the slogan \'Do or Die\' (Mahatma Gandhi in 1942).'
                ],
                commonDistractorTraps: [
                  'Confusing 1922 Chauri Chaura with 1919 Jallianwala Bagh.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.35 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.31 Series A)'
                ]
              },
              quickRevisionPoints: [
                '1905: Partition of Bengal (Curzon).',
                '1919: Jallianwala Bagh massacre (13 April). Tagore renounced Knighthood.',
                '1920: Non-Cooperation movement launched (1 August).',
                '1922: Chauri Chaura incident (4 February) -> Movement called off.',
                '1929: Lahore Congress passed Purna Swaraj (Nehru presiding).',
                '1930: Dandi March (12 March – 6 April, 78 delegates).',
                '1942: Quit India movement launched on 8 August with "Do or Die" call.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hist-inm-1',
                  questionEn: 'Mahatma Gandhi presided over only one annual session of the Indian National Congress. Which session was it?',
                  questionHi: 'महात्मा गांधी ने भारतीय राष्ट्रीय कांग्रेस के केवल एक वार्षिक अधिवेशन की अध्यक्षता की थी। वह कौन सा अधिवेशन था?',
                  options: [
                    { id: 'A', textEn: 'Kanpur Session (1925)', isCorrect: false },
                    { id: 'B', textEn: 'Belgaum Session (1924)', isCorrect: true },
                    { id: 'C', textEn: 'Lahore Session (1929)', isCorrect: false },
                    { id: 'D', textEn: 'Karachi Session (1931)', isCorrect: false }
                  ],
                  explanationEn: 'Mahatma Gandhi presided only over the 39th session of the INC held in Belgaum (Karnataka) in December 1924.',
                  conceptTested: 'Gandhi INC Presidency'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-inm-pyq-1',
                topicId: 'hist-topic-inm-landmarks',
                chapterId: 'hist-ch-national-movement',
                subjectKey: 'INDIAN_HISTORY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'The historic resolution of "Purna Swaraj" (Complete Independence) was adopted by the Indian National Congress at which of the following sessions?',
                questionTextHi: 'भारतीय राष्ट्रीय कांग्रेस द्वारा "पूर्ण स्वराज" (पूर्ण स्वतंत्रता) का ऐतिहासिक प्रस्ताव निम्नलिखित में से किस अधिवेशन में पारित किया गया था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Calcutta Session (1928)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Lahore Session (1929)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Karachi Session (1931)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'At the Lahore Congress Session in December 1929 under Jawaharlal Nehru\'s presidency, the Congress adopted Purna Swaraj as its sole objective and resolved to celebrate 26 January 1930 as Independence Day.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 35,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.35 & Final Answer Key',
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
    iconName: 'Shield',
    descriptionEn: 'Preamble, Fundamental Rights (12–35), 5 Writs (Art 32), DPSP (36–51), Parliament, Judiciary, and Panchayati Raj (73rd Amendment).',
    descriptionHi: 'प्रस्तावना, मौलिक अधिकार, अनुच्छेद 32 की 5 रिटें, नीति निदेशक तत्व, तथा बिहार पंचायती राज अधिनियम 2006।',
    chapters: [
      {
        id: 'pol-ch-fundamental-rights',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 1,
        slug: 'fundamental-rights-dpsp',
        titleEn: 'Fundamental Rights (Part III) & DPSP (Part IV)',
        titleHi: 'मौलिक अधिकार (भाग III) एवं नीति निदेशक तत्व (भाग IV)',
        descriptionEn: 'Articles 14 to 32, Right to Education (Art 21A), 5 Constitutional Writs, and DPSP welfare state principles.',
        descriptionHi: 'अनुच्छेद 14-32, अनुच्छेद 21क (RTE 2002), 5 संवैधानिक रिटें, तथा अनुच्छेद 40 (ग्राम पंचायत गठन)।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'pol-topic-fr-articles',
            chapterId: 'pol-ch-fundamental-rights',
            topicNumber: 1,
            slug: 'fundamental-rights-writs',
            titleEn: 'Fundamental Rights & Article 32 Writs',
            titleHi: 'मौलिक अधिकार एवं अनुच्छेद 32 (संवैधानिक उपचार)',
            descriptionEn: 'Detailed analysis of Equality (14–18), Untouchability (17), Life & Liberty (21), Education (21A), and 5 Writs.',
            descriptionHi: 'समानता, अस्पृश्यता का अंत (अनुच्छेद 17), प्राण व दैहिक स्वतंत्रता (अनुच्छेद 21), शिक्षा का अधिकार (अनुच्छेद 21क), और 5 रिटें।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-pol-fr-writs',
              topicId: 'pol-topic-fr-articles',
              titleEn: 'Fundamental Rights & Writs for BPSC TRE',
              titleHi: 'BPSC TRE हेतु मौलिक अधिकार एवं रिटों की संपूर्ण व्याख्या',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'संविधान के भाग III (अनुच्छेद 12–35) के 6 मूल अधिकारों के प्रावधानों को समझना।',
                'अनुच्छेद 17 (अस्पृश्यता का अंत) और अनुच्छेद 21क (86वां संविधान संशोधन 2002) को कंठस्थ करना।',
                'अनुच्छेद 32 (सर्वोच्च न्यायालय) एवं अनुच्छेद 226 (उच्च न्यायालय) की 5 रिटों का व्यावहारिक अर्थ जानना।',
                '44वें संविधान संशोधन (1978) द्वारा संपत्ति के अधिकार को मौलिक अधिकारों से हटाए जाने के प्रावधान को समझना।'
              ],
              introductionEn: 'Fundamental Rights guarantee civil liberties to Indian citizens against state overreach. Dr. B.R. Ambedkar termed Article 32 (Right to Constitutional Remedies) as the "Heart and Soul of the Constitution". In BPSC examinations, direct factual questions on article numbers and writ remedies are standard.',
              introductionHi: 'भारतीय संविधान का भाग III मौलिक अधिकारों का मैग्नाकार्टा है। डॉ. भीमराव अंबेडकर ने अनुच्छेद 32 को \'संविधान का हृदय और आत्मा\' कहा था। BPSC TRE में अनुच्छेद 17, 21क, और 32 की रिटों पर सीधे प्रश्न पूछे जाते हैं।',
              conceptSections: [
                {
                  title: '1. मौलिक अधिकार (अनुच्छेद 14–32) एवं संशोधन',
                  contentMarkdownEn: '**6 मौलिक अधिकार:**\n1. **समानता का अधिकार (अनुच्छेद 14–18):** अनुच्छेद 14 (विधि के समक्ष समता), अनुच्छेद 15 (धर्म, मूलवंश, जाति, लिंग पर भेद का निषेध), अनुच्छेद 16 (लोक नियोजन में अवसर की समानता), **अनुच्छेद 17 (अस्पृश्यता का अंत - अत्यंत महत्वपूर्ण)**, अनुच्छेद 18 (उपाधियों का अंत)।\n2. **स्वतंत्रता का अधिकार (अनुच्छेद 19–22):** अनुच्छेद 19 (6 मूल स्वतंत्रताएँ), अनुच्छेद 20 (अपराधों के दोषसिद्धि के संबंध में संरक्षण), अनुच्छेद 21 (प्राण एवं दैहिक स्वतंत्रता), **अनुच्छेद 21क (शिक्षा का अधिकार: 6-14 वर्ष के बच्चों हेतु अनिवार्य शिक्षा - 86वां संशोधन 2002)**।\n3. **शोषण के विरुद्ध अधिकार (अनुच्छेद 23–24):** अनुच्छेद 23 (मानव दुर्व्यापार व बंधुआ मजदूरी निषेध), अनुच्छेद 24 (कारखानों में बालश्रम निषेध - 14 वर्ष से कम आयु)।\n4. **धार्मिक स्वतंत्रता का अधिकार (अनुच्छेद 25–28):** अनुच्छेद 25 (अंतःकरण की स्वतंत्रता)।\n5. **संस्कृति व शिक्षा संबंधी अधिकार (अनुच्छेद 29–30):** अल्पसंख्यकों के हितों का संरक्षण।\n6. **संवैधानिक उपचारों का अधिकार (अनुच्छेद 32):** सर्वोच्च न्यायालय द्वारा 5 रिटें जारी करना।\n\n*नोट:* **44वें संविधान संशोधन 1978** द्वारा **संपत्ति के अधिकार (अनुच्छेद 31)** को मौलिक अधिकार से हटाकर **अनुच्छेद 300क** के तहत विधिक/कानूनी अधिकार बना दिया गया।'
                },
                {
                  title: '2. 5 संवैधानिक रिटें (अनुच्छेद 32 एवं अनुच्छेद 226)',
                  contentMarkdownEn: 'नागरिकों के मूल अधिकारों के संरक्षण हेतु न्यायालय 5 रिटें जारी कर सकता है:\n1. **बंदी प्रत्यक्षीकरण (Habeas Corpus):** \'शरीर को प्रस्तुत किया जाए\' — गैरकानूनी रूप से बंदी बनाए गए व्यक्ति को न्यायालय के समक्ष प्रस्तुत करने का आदेश।\n2. **परमादेश (Mandamus):** \'हम आदेश देते हैं\' — किसी लोक प्राधिकारी को उसके कानूनी कर्तव्य का पालन करने का निर्देश।\n3. **प्रतिषेध (Prohibition):** \'रोकना\' — उच्चतर न्यायालय द्वारा अधीनस्थ न्यायालय को अपने अधिकार क्षेत्र से बाहर जाने से रोकना।\n4. **उत्प्रेषण (Certiorari):** \'प्रमाणित होना\' — अधीनस्थ न्यायालय से मामले को उच्च न्यायालय में स्थानांतरित करना या गैरकानूनी निर्णय को रद्द करना।\n5. **अधिकार पृच्छा (Quo Warranto):** \'किस अधिकार से\' — किसी व्यक्ति द्वारा किसी सार्वजनिक पद के अनाधिकृत उपयोग की वैधता की जांच।',
                  tableData: {
                    headers: ['संवैधानिक प्रावधान', 'अनुच्छेद / विवरण', 'BPSC TRE प्रश्न संदर्भ'],
                    rows: [
                      ['अस्पृश्यता का उन्मूलन', 'अनुच्छेद 17 (भाग III)', 'TRE 2.0 (15-12-2023 Shift 2, Q.36 Series A)'],
                      ['शिक्षा का अधिकार (RTE)', 'अनुच्छेद 21क (86वां संशोधन 2002)', 'TRE 1.0 (26-08-2023 Shift 1, Q.28 Series A)'],
                      ['संविधान की आत्मा व हृदय', 'अनुच्छेद 32 (डॉ. अंबेडकर का कथन)', 'TRE 2.0 (15-12-2023 Shift 2, Q.33 Series A)'],
                      ['ग्राम पंचायतों का संगठन', 'अनुच्छेद 40 (DPSP - गांधीवादी सिद्धांत)', 'TRE 3.0 (22-07-2024 Shift 1, Q.37 Series A)']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'अनुच्छेद 21क',
                  definitionEn: 'Right to Free & Compulsory Education for children aged 6 to 14, enacted via 86th Constitutional Amendment Act, 2002.',
                  definitionHi: '86वें संविधान संशोधन 2002 द्वारा 6 से 14 वर्ष के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'संपत्ति के अधिकार का दर्जा',
                  formulaOrRule: 'अनुच्छेद 31 (मौलिक अधिकार) -> 44वां संशोधन 1978 -> अनुच्छेद 300क (विधिक अधिकार)',
                  explanationEn: 'Right to Property is a legal constitutional right under Article 300A, NOT a fundamental right.',
                  explanationHi: 'संपत्ति का अधिकार अब मौलिक अधिकार नहीं बल्कि विधिक अधिकार है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Under which Article of the Indian Constitution is "Untouchability" abolished and its practice in any form forbidden? (A) Article 14 (B) Article 17 (C) Article 19 (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Article 17 expressly declares: "Untouchability is abolished and its practice in any form is forbidden."\n2. Official BPSC TRE 2.0 Key: Option (B) is the correct answer.',
                  shortcutTrick: 'Abolition of Untouchability = Article 17.'
                }
              ],
              practicalApplications: [
                'Defending civil rights and applying statutory constitutional protections in institutional education management.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Right to Property was abolished by the 42nd Amendment.',
                  whyWrongEn: 'It was the 44th Amendment Act (1978) under the Janata Party government that repealed Article 31.',
                  correctWayEn: '44th Amendment Act 1978 moved property right to Article 300A.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which article abolishes untouchability (Article 17).',
                  'Which article provides Right to Education (Article 21A).',
                  'Who called Article 32 the heart and soul of the Constitution (Dr. B.R. Ambedkar).'
                ],
                commonDistractorTraps: [
                  'Confusing Article 21 with Article 21A.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.36 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.28 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Fundamental Rights: Part III (Articles 12–35), inspired by US Bill of Rights.',
                '6 Fundamental Rights currently (Right to Property removed via 44th Amendment 1978).',
                'Article 17: Abolition of Untouchability.',
                'Article 21A: Right to Education (86th Amendment 2002).',
                'Article 32: Constitutional Remedies (5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-1',
                  questionEn: 'Which writ is issued by the Supreme Court to quash the order of a lower court that exceeded its jurisdiction?',
                  questionHi: 'सर्वोच्च न्यायालय द्वारा किसी अधीनस्थ न्यायालय के उस आदेश को रद्द करने के लिए कौन सी रिट जारी की जाती है जो उसके क्षेत्राधिकार से बाहर था?',
                  options: [
                    { id: 'A', textEn: 'Mandamus', isCorrect: false },
                    { id: 'B', textEn: 'Certiorari (उत्प्रेषण)', isCorrect: true },
                    { id: 'C', textEn: 'Quo Warranto', isCorrect: false },
                    { id: 'D', textEn: 'Habeas Corpus', isCorrect: false }
                  ],
                  explanationEn: 'Certiorari is a corrective writ issued to quash an order already passed by an inferior court or tribunal without jurisdiction.',
                  conceptTested: 'Certiorari writ function'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-pyq-1',
                topicId: 'pol-topic-fr-articles',
                chapterId: 'pol-ch-fundamental-rights',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under which Article of the Constitution of India is "Untouchability" abolished and its practice in any form made an offence punishable by law?',
                questionTextHi: 'भारतीय संविधान के किस अनुच्छेद के तहत "अस्पृश्यता" का उन्मूलन किया गया है और इसका किसी भी रूप में आचरण विधि के अनुसार दंडनीय अपराध घोषित किया गया है?',
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
                explanationEn: 'Article 17 explicitly abolishes untouchability and forbids its practice in all forms. The Protection of Civil Rights Act, 1955 prescribes punishments for offenses under this article.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 36,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.36 & Final Answer Key',
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
    descriptionEn: 'Physical features, Himalayas, Peninsular Plateau, River drainage systems, Monsoons, Black/Alluvial soil, and Forests.',
    descriptionHi: 'हिमालय पर्वतमाला, प्रायद्वीपीय पठार, सिंधु-गंगा-ब्रह्मपुत्र अपवाह तंत्र, दक्षिण-पश्चिम मानसून, तथा प्रमुख मिट्टियाँ।',
    chapters: [
      {
        id: 'geo-ch-physical-india',
        subjectKey: 'INDIAN_GEOGRAPHY',
        chapterNumber: 1,
        slug: 'physical-geography-drainage',
        titleEn: 'Physical Features, River Systems & Soils of India',
        titleHi: 'भारत का भौतिक स्वरूप, अपवाह तंत्र एवं मिट्टियाँ',
        descriptionEn: 'Himalayan vs Peninsular rivers, Arabian Sea vs Bay of Bengal drainage, Alluvial & Black soils, and Monsoon mechanism.',
        descriptionHi: 'सिंधु, गंगा, गोदावरी, कृष्णा, नर्मदा, ताप्ती; जलोढ़ एवं काली (रेगुर) मिट्टी; तथा मानसून का आगमन।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'geo-topic-soils-rivers',
            chapterId: 'geo-ch-physical-india',
            topicNumber: 1,
            slug: 'indian-rivers-soils-monsoon',
            titleEn: 'Major Indian River Basins & Soil Classification',
            titleHi: 'भारत के प्रमुख नदी तंत्र एवं मिट्टियों का वर्गीकरण',
            descriptionEn: 'Himalayan antecedent rivers, west-flowing rift valley rivers (Narmada, Tapi), Black soil (Regur) for cotton, and Alluvial soils.',
            descriptionHi: 'गंगा, गोदावरी (दक्षिण गंगा), पश्चिम की ओर बहने वाली नदियाँ (नर्मदा, ताप्ती), काली मिट्टी (रेगुर), और जलोढ़ मिट्टी।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-geo-soils',
              topicId: 'geo-topic-soils-rivers',
              titleEn: 'Indian Rivers & Soil Types for BPSC TRE',
              titleHi: 'BPSC TRE हेतु भारत की नदियाँ एवं मिट्टियों का अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'पूर्व की ओर बहने वाली (बंगाल की खाड़ी) तथा पश्चिम की ओर बहने वाली (अरब सागर - नर्मदा, ताप्ती) नदियों का अंतर समझना।',
                'प्रायद्वीपीय भारत की सबसे लंबी नदी गोदावरी (दक्षिण गंगा / वृद्ध गंगा) की सहायक नदियों को जानना।',
                'काली मिट्टी (रेगुर / कपास मिट्टी) की जलधारण क्षमता और दक्कन लावा उत्पत्ति को समझना।',
                'जलोढ़ मिट्टी (खादर - नवीन जलोढ़, बांगर - पुरातन जलोढ़) के कृषि महत्व को कंठस्थ करना।'
              ],
              introductionEn: 'Physical geography questions in BPSC TRE focus on drainage patterns and soil agronomic capabilities. Understanding which rivers form estuaries versus deltas and the distribution of black and alluvial soils guarantees quick marks in General Studies.',
              introductionHi: 'भारत का भूगोल BPSC TRE सामान्य अध्ययन का प्रमुख घटक है। विशेष रूप से नर्मदा और ताप्ती द्वारा भ्रंश घाटी में बहकर एश्चुअरी बनाना तथा काली (रेगुर) मिट्टी का कपास उत्पादन में योगदान बार-बार पूछे जाने वाले तथ्य हैं।',
              conceptSections: [
                {
                  title: '1. प्रमुख नदी तंत्र एवं एश्चुअरी बनाम डेल्टा',
                  contentMarkdownEn: '**अपवाह तंत्र का वर्गीकरण:**\n* **बंगाल की खाड़ी में गिरने वाली नदियाँ (डेल्टा निर्माता):** गंगा, ब्रह्मपुत्र, महानदी, गोदावरी, कृष्णा, कावेरी।\n  * **गोदावरी:** प्रायद्वीपीय भारत की सबसे लंबी नदी (1465 किमी); इसे \'दक्षिण गंगा\' या \'वृद्ध गंगा\' भी कहा जाता है (उद्गम: त्र्यंबकेश्वर, नासिक, महाराष्ट्र)।\n* **अरब सागर में गिरने वाली नदियाँ (एश्चुअरी / ज्वारनदमुख निर्माता):** **नर्मदा एवं ताप्ती (तापी)**।\n  * नर्मदा अमरकंटक (MP) से निकलकर विंध्य और सतपुड़ा के बीच **भ्रंश घाटी (Rift Valley)** में बहती है और धुआंधार जलप्रपात (जबलपुर) बनाती है।\n  * ताप्ती बैतूल (MP) के मुलताई से निकलती है।\n\n**2. भारतीय मिट्टियों का वर्गीकरण (ICAR द्वारा 8 वर्ग):**\n* **जलोढ़ मिट्टी (Alluvial Soil):** भारत के सर्वाधिक क्षेत्रफल (लगभग 40%) पर विस्तृत।\n  * **खादर:** नवीन जलोढ़, बाढ़ क्षेत्रों में प्रतिवर्ष नवीनीकृत, सर्वाधिक उपजाऊ।\n  * **बांगर:** पुरातन जलोढ़, कंकड़ युक्त, बाढ़ की पहुंच से दूर।\n* **काली मिट्टी (Black Soil / Regur Soil):** बेसाल्ट लावा के अपक्षय से निर्मित।\n  * सर्वाधिक विस्तार: महाराष्ट्र, गुजरात, मध्य प्रदेश (दक्कन ट्रैप)।\n  * विशेषता: अत्यधिक जलधारण क्षमता, सूखने पर गहरी दरारें (स्वयं-जुताई वाली मिट्टी)।\n  * सर्वाधिक उपयुक्त फसल: **कपास (Cotton)**। इसे \'कपासी मिट्टी\' भी कहते हैं।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'रेगुर मिट्टी (Regur)',
                  definitionEn: 'Mature black basaltic lava soil of the Deccan plateau, rich in montmorillonite clay and ideal for cotton farming.',
                  definitionHi: 'दक्कन के लावा पठार पर पाई जाने वाली काली मिट्टी जिसमें नमी धारण करने की उच्च क्षमता होती है और जो कपास के लिए आदर्श है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'भ्रंश घाटी नदियाँ',
                  formulaOrRule: 'पश्चिम वाहिनी + भ्रंश घाटी (Rift Valley) + एश्चुअरी = नर्मदा एवं ताप्ती',
                  explanationEn: 'Crucial shortcut for river flow direction questions.',
                  explanationHi: 'नर्मदा और ताप्ती डेल्टा नहीं बनातीं बल्कि एश्चुअरी बनाती हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Black soil, also known as Regur soil, is most suitable for the commercial cultivation of which of the following crops? (A) Wheat (B) Cotton (C) Tea (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Fact: Black soil possesses high clay content and moisture retention, making it globally recognized as Black Cotton Soil.\n2. Official BPSC TRE 2.0 key: Option (B) Cotton.',
                  shortcutTrick: 'Regur / Black Soil = Cotton (कपास).'
                }
              ],
              practicalApplications: [
                'Agricultural crop planning, water conservation, and soil fertility management across Indian farming zones.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing Khadar with Bhangar.',
                  whyWrongEn: 'Khadar is the NEW fertile alluvium replenished by annual floods, while Bhangar is the older, less fertile terrace alluvium.',
                  correctWayEn: 'Khadar = New alluvium; Bhangar = Old alluvium.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which soil is known as Regur (Black soil).',
                  'Which rivers flow through a rift valley (Narmada and Tapi).',
                  'Longest river of Peninsular India (Godavari - 1465 km).'
                ],
                commonDistractorTraps: [
                  'Assuming Kaveri is longer than Godavari.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.39 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Alluvial soil covers ~40% of India\'s landmass (Khadar = New, Bhangar = Old).',
                'Black soil = Regur soil, formed from basalt lava, best for Cotton.',
                'Narmada and Tapi flow westwards through rift valleys into Arabian Sea.',
                'Godavari is the longest Peninsular river (Dakshin Ganga).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-geo-1',
                  questionEn: 'Which of the following rivers flows through a rift valley between the Vindhya and Satpura ranges in India?',
                  questionHi: 'भारत में विंध्य और सतपुड़ा श्रेणियों के बीच भ्रंश घाटी (Rift Valley) से होकर कौन सी नदी बहती है?',
                  options: [
                    { id: 'A', textEn: 'Chambal', isCorrect: false },
                    { id: 'B', textEn: 'Narmada', isCorrect: true },
                    { id: 'C', textEn: 'Mahanadi', isCorrect: false },
                    { id: 'D', textEn: 'Betwa', isCorrect: false }
                  ],
                  explanationEn: 'River Narmada originates at Amarkantak and flows westward in a rift valley bounded by the Vindhyas to the north and Satpuras to the south.',
                  conceptTested: 'Rift valley drainage'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-geo-pyq-1',
                topicId: 'geo-topic-soils-rivers',
                chapterId: 'geo-ch-physical-india',
                subjectKey: 'INDIAN_GEOGRAPHY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Black soil of India, predominantly found in the Deccan Trap region and also known as "Regur Soil", is commercially most suitable for the cultivation of:',
                questionTextHi: 'भारत में दक्कन ट्रैप क्षेत्र में मुख्य रूप से पाई जाने वाली काली मिट्टी, जिसे "रेगुर मिट्टी" भी कहा जाता है, व्यावसायिक रूप से किसकी खेती के लिए सर्वाधिक उपयुक्त है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Sugarcane', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Cotton', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Jute', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Black soil is famous for its moisture-retentive capacity and clayey texture, making it ideal for cotton cultivation (hence termed Black Cotton Soil).',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 39,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.39 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SUBJECT 5: GENERAL SCIENCE (PHYSICS, CHEMISTRY, BIOLOGY)
  // =========================================================================
  {
    key: 'GENERAL_SCIENCE',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'General Science (Physics, Chemistry & Biology)',
    displayNameHi: 'सामान्य विज्ञान (भौतिकी, रसायन एवं जीव विज्ञान)',
    iconName: 'Microscope',
    descriptionEn: 'Daily life science: Optics, Electricity, Periodic Table, Acids-Bases, Human Physiology, Vitamins, and Deficiency Diseases.',
    descriptionHi: 'दैनिक जीवन में विज्ञान: प्रकाशिकी, विद्युत, अम्ल-क्षार, मानव शरीर क्रिया विज्ञान, विटामिन एवं पोषण संबंधी रोग।',
    chapters: [
      {
        id: 'sci-ch-fundamentals',
        subjectKey: 'GENERAL_SCIENCE',
        chapterNumber: 1,
        slug: 'science-fundamentals-vitamins',
        titleEn: 'Human Physiology, Optics & Chemical Reactions',
        titleHi: 'मानव शरीर क्रिया, प्रकाशिकी एवं पोषण विज्ञान',
        descriptionEn: 'Human circulatory and digestive systems, Vitamin deficiencies (A, B-complex, C, D), Total Internal Reflection, and pH scale.',
        descriptionHi: 'विटामिन और उनकी कमी से होने वाले रोग, रक्त समूह, पूर्ण आंतरिक परावर्तन, तथा pH मान।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'sci-topic-vitamins-optics',
            chapterId: 'sci-ch-fundamentals',
            topicNumber: 1,
            slug: 'vitamins-physiology-optics',
            titleEn: 'Vitamins, Deficiency Diseases & Light Phenomena',
            titleHi: 'विटामिन, पोषण संबंधी रोग एवं प्रकाशिक घटनाएं',
            descriptionEn: 'Fat-soluble (A, D, E, K) vs water-soluble (B, C) vitamins, Rickets, Scurvy, Beriberi, Total Internal Reflection (Mirage, Optical Fibre).',
            descriptionHi: 'विटामिन A, B, C, D के रासायनिक नाम व रोग; रक्त का pH (7.35–7.45); पूर्ण आंतरिक परावर्तन (मरीचिका, ऑप्टिकल फाइबर)।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            tutorial: {
              id: 'tut-sci-vitamins',
              topicId: 'sci-topic-vitamins-optics',
              titleEn: 'Vitamins, Physiology & Optics for BPSC TRE',
              titleHi: 'BPSC TRE हेतु विटामिन, शरीर क्रिया एवं प्रकाशिकी',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'वसा में घुलनशील (A, D, E, K) तथा जल में घुलनशील (B, C) विटामिनों का वर्गीकरण कंठस्थ करना।',
                'विटामिनों के रासायनिक नाम और उनकी कमी से होने वाले प्रमुख रोग (रतौंधी, बेरी-बेरी, स्कर्वी, रिकेट्स) जानना।',
                'मानव रक्त का सामान्य pH मान (7.35 से 7.45) और रक्त समूहों (AB सार्वभौमिक ग्राही, O सार्वभौमिक दाता) को समझना।',
                'पूर्ण आंतरिक परावर्तन (Total Internal Reflection) के उदाहरण: रेगिस्तान में मरीचिका और ऑप्टिकल फाइबर का कार्यसिद्धांत।'
              ],
              introductionEn: 'General Science accounts for 8 to 10 marks in the BPSC General Studies paper. Factual questions testing vitamin deficiencies, human blood parameters, and fundamental optical principles appear consistently.',
              introductionHi: 'सामान्य विज्ञान BPSC TRE में उच्च प्राप्तांक दिलाने वाला खंड है। विटामिनों की कमी से होने वाले रोग, रक्त का pH, तथा प्रकाश के पूर्ण आंतरिक परावर्तन से संबंधित प्रश्न हर परीक्षा में दोहराए जाते हैं।',
              conceptSections: [
                {
                  title: '1. विटामिन: रासायनिक नाम एवं कमी से होने वाले रोग',
                  contentMarkdownEn: '**वर्गीकरण:**\n* **वसा में घुलनशील (Fat-Soluble):** Vitamin A, D, E, K.\n* **जल में घुलनशील (Water-Soluble):** Vitamin B-Complex, Vitamin C.\n\n**महत्वपूर्ण विटामिन तालिका:**',
                  tableData: {
                    headers: ['विटामिन', 'रासायनिक नाम', 'कमी से होने वाला रोग', 'मुख्य स्रोत'],
                    rows: [
                      ['Vitamin A', 'रेटिनॉल (Retinol)', 'रतौंधी (Night Blindness), ज़ेरोफ्थैल्मिया', 'गाजर, पपीता, दूध, मछली का तेल'],
                      ['Vitamin B1', 'थायमीन (Thiamine)', 'बेरी-बेरी (Beriberi)', 'खमीर, अनाजों के छिलके, दालें'],
                      ['Vitamin B12', 'सायनोकोबालामिन (इसमें कोबाल्ट होता है)', 'घातक रक्ताल्पता (Pernicious Anaemia)', 'मांस, अंडा, दूध'],
                      ['Vitamin C', 'एस्कॉर्बिक एसिड (Ascorbic Acid)', 'स्कर्वी (मसूड़ों से खून आना)', 'आंवला (सर्वाधिक), नींबू, संतरा'],
                      ['Vitamin D', 'कैल्सीफेरॉल (Calciferol)', 'रिकेट्स (बच्चों में सूखारोग), ऑस्टियोमलेशिया', 'सूर्य का प्रकाश, दूध, कॉड लिवर ऑयल'],
                      ['Vitamin K', 'फिलोक्विनोन (Phylloquinone)', 'रक्त का थक्का न जमना', 'हरी पत्तेदार सब्जियां']
                    ]
                  }
                },
                {
                  title: '2. मानव शरीर क्रिया विज्ञान एवं प्रकाशिक घटनाएं',
                  contentMarkdownEn: '**मानव रक्त:**\n* रक्त का pH मान: **7.35 – 7.45** (हल्का क्षारीय / Slightly Alkaline)।\n* सार्वभौमिक दाता (Universal Donor): **O-negative (O-)**।\n* सार्वभौमिक ग्राही (Universal Recipient): **AB-positive (AB+)**।\n\n**पूर्ण आंतरिक परावर्तन (Total Internal Reflection - TIR):**\n* शर्तें: 1. प्रकाश सघन माध्यम से विरल माध्यम में जाए। 2. आपतन कोण क्रांतिक कोण से बड़ा हो ($i > \theta_c$)।\n* दैनिक जीवन में उदाहरण:\n  * रेगिस्तान में मरीचिका (Mirage) का दिखाई देना।\n  * हीरे की अत्यधिक चमक।\n  * **ऑप्टिकल फाइबर (Optical Fibre)** का कार्यसिद्धांत (दूरसंचार में सिग्नल संचरण)।\n  * एंडोस्कोपी (चिकित्सा उपकरण)।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'पूर्ण आंतरिक परावर्तन (TIR)',
                  definitionEn: 'Complete reflection of a ray of light within a dense medium when angle of incidence exceeds critical angle.',
                  definitionHi: 'जब प्रकाश सघन से विरल माध्यम में जाते समय क्रांतिक कोण से बड़े कोण पर आपतित होकर उसी माध्यम में पूर्णतः परावर्तित हो जाए।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'विटामिन घुलनशीलता ट्रिक',
                  formulaOrRule: 'K E D A = वसा में घुलनशील | B & C = जल में घुलनशील',
                  explanationEn: 'KEDA dissolves in fat; B and C dissolve in water.',
                  explanationHi: 'KEDA वसा में घुलता है, B और C जल में।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Deficiency of Vitamin D in growing children leads to which of the following skeletal deformities? (A) Scurvy (B) Rickets (C) Beriberi (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Vitamin D (Calciferol) facilitates intestinal absorption of calcium and phosphate.\n2. In children, deficiency causes soft, weak bones leading to bow-legs (Rickets).\n3. Official BPSC TRE 1.0 key: Option (B) Rickets.',
                  shortcutTrick: 'Vitamin D = Rickets (सूखारोग).'
                }
              ],
              practicalApplications: [
                'Nutritional health, diagnostic blood analysis, and fiber-optic communication engineering.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Vitamin C can be stored in the human body.',
                  whyWrongEn: 'Vitamin C is water-soluble and is excreted daily through urine, requiring regular dietary intake.',
                  correctWayEn: 'Water-soluble vitamins (B, C) cannot be stored in the body.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which metal is present in Vitamin B12 (Cobalt).',
                  'Deficiency disease caused by lack of Vitamin D (Rickets).',
                  'Working principle of Optical Fibre (Total Internal Reflection).',
                  'Normal human blood pH (7.35–7.45).'
                ],
                commonDistractorTraps: [
                  'Confusing Scurvy (Vit C) with Rickets (Vit D).'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 1, Q.37 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.40 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.39 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Fat-soluble: A, D, E, K. Water-soluble: B, C.',
                'Vit A: Night blindness; Vit B1: Beriberi; Vit C: Scurvy; Vit D: Rickets.',
                'Vitamin B12 contains Cobalt.',
                'Human blood pH is slightly basic: 7.35 to 7.45.',
                'Optical fibre and Mirage work on Total Internal Reflection (TIR).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-sci-1',
                  questionEn: 'Which essential metallic element is uniquely present in the chemical structure of Vitamin B12 (Cyanocobalamin)?',
                  questionHi: 'विटामिन B12 (सायनोकोबालामिन) की रासायनिक संरचना में कौन सी धातु अनिवार्य रूप से उपस्थित होती है?',
                  options: [
                    { id: 'A', textEn: 'Iron (लोहा)', isCorrect: false },
                    { id: 'B', textEn: 'Cobalt (कोबाल्ट)', isCorrect: true },
                    { id: 'C', textEn: 'Magnesium (मैग्नीशियम)', isCorrect: false },
                    { id: 'D', textEn: 'Copper (तांबा)', isCorrect: false }
                  ],
                  explanationEn: 'Vitamin B12 contains a cobalt ion at the center of its corrin ring, giving it the systematic chemical name cyanocobalamin.',
                  conceptTested: 'Metal in Vitamin B12'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sci-pyq-1',
                topicId: 'sci-topic-vitamins-optics',
                chapterId: 'sci-ch-fundamentals',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Deficiency of Vitamin D in growing children leads to softening and weakening of bones, clinically known as:',
                questionTextHi: 'बढ़ते बच्चों में विटामिन D की कमी से हड्डियों का कमजोर व मुड़ जाना किस बीमारी के रूप में जाना जाता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Scurvy', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Rickets (सूखारोग)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Beriberi', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Vitamin D facilitates calcium absorption. Its prolonged deficiency in children results in rickets, characterized by skeletal malformations such as bow-legs and pigeon chest.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 1 (Higher Secondary Class 11-12 General Studies)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 37,
                sourceDocumentRef: 'BPSC Advt 26/2023 Question Booklet Series A, Q.37 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-sci-pyq-2',
                topicId: 'sci-topic-vitamins-optics',
                chapterId: 'sci-ch-fundamentals',
                subjectKey: 'GENERAL_SCIENCE',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Optical fibers used in high-speed telecommunications transmit light signals over long distances based on the physical principle of:',
                questionTextHi: 'हाई-स्पीड दूरसंचार में उपयोग किए जाने वाले ऑप्टिकल फाइबर किस भौतिक सिद्धांत पर प्रकाश संकेतों को प्रसारित करते हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Refraction of light', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Total Internal Reflection (पूर्ण आंतरिक परावर्तन)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'Diffraction of light', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Optical fiber cores have a higher refractive index than the cladding, causing light entered above the critical angle to undergo continuous Total Internal Reflection with virtually zero transmission loss.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (General Studies & Language)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 40,
                sourceDocumentRef: 'BPSC Advt 27/2023 Question Booklet Series A, Q.40 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
