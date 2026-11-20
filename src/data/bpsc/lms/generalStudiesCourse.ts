import { LMSSubject } from '@/types/bpscLms';

export const BPSC_GENERAL_STUDIES_SUBJECTS: LMSSubject[] = [
  // ==========================================
  // SUBJECT 1: BIHAR SPECIAL GK & HISTORY
  // ==========================================
  {
    key: 'BIHAR_SPECIAL_GK',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Bihar Special: History, Geography & Economy',
    displayNameHi: 'बिहार विशेष: इतिहास, भूगोल एवं अर्थव्यवस्था',
    iconName: 'MapPin',
    descriptionEn: 'Essential Bihar-specific knowledge: 1857 Revolt, Champaran Satyagraha, Kisan Sabha, Azad Dasta, River systems, Soils, and Census 2011.',
    descriptionHi: 'वीर कुंवर सिंह, चंपारण सत्याग्रह, स्वामी सहजानंद, आजाद दस्ता, गंगा अपवाह तंत्र, तथा बिहार जनगणना 2011 का गहन अध्ययन।',
    chapters: [
      {
        id: 'bih-ch-freedom-struggle',
        subjectKey: 'BIHAR_SPECIAL_GK',
        chapterNumber: 1,
        slug: 'bihar-freedom-struggle',
        titleEn: 'Bihar in the Indian National Movement (1857–1947)',
        titleHi: 'भारतीय राष्ट्रीय आंदोलन में बिहार की भूमिका (1857–1947)',
        descriptionEn: 'The role of Veer Kunwar Singh in 1857, Champaran Satyagraha (1917), Non-Cooperation, Kisan Sabha Movement, and 1942 Quit India.',
        descriptionHi: '1857 की क्रांति, चंपारण सत्याग्रह, किसान सभा आंदोलन, और 1942 के भारत छोड़ो आंदोलन में बिहार का योगदान।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'bih-topic-champaran-1857',
            chapterId: 'bih-ch-freedom-struggle',
            topicNumber: 1,
            slug: 'champaran-satyagraha-and-1857',
            titleEn: '1857 Revolt in Bihar & Champaran Satyagraha (1917)',
            titleHi: 'बिहार में 1857 की क्रांति एवं चंपारण सत्याग्रह (1917)',
            descriptionEn: 'Detailed analysis of Jagdishpur\'s Kunwar Singh, Raj Kumar Shukla, Tinkathia system, and Mahatma Gandhi\'s first satyagraha in India.',
            descriptionHi: 'जगदीशपुर के बाबू कुंवर सिंह, राजकुमार शुक्ल का आमंत्रण, तिनकठिया प्रथा और गांधीजी का चंपारण आगमन।',
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
                '1857 की क्रांति में रोहिणी (देवघर), पटना (पीर अली), और जगदीशपुर (बाबू कुंवर सिंह) के घटनाक्रम को समझना।',
                'तिनकठिया प्रणाली (3/20 भाग पर नील की खेती) के शोषणकारी तंत्र का विश्लेषण करना।',
                'राजकुमार शुक्ल द्वारा गांधीजी को लखनऊ कांग्रेस (1916) में आमंत्रित करने के ऐतिहासिक संदर्भ को जानना।',
                'चंपारण कृषक समिति (Champaran Agrarian Committee) के गठन, सदस्यों और 25% अवैध वसूली वापसी के परिणाम को कंठस्थ करना।'
              ],
              introductionEn: 'Bihar played a monumental role in shaping modern Indian history. From the valiant leadership of octogenarian Veer Kunwar Singh in 1857 to Mahatma Gandhi\'s historic laboratory of Satyagraha at Champaran in 1917, these events are among the top recurring themes in every BPSC examination.',
              introductionHi: 'बिहार आधुनिक भारतीय इतिहास की दिशा तय करने में अग्रणी रहा। 1857 में जगदीशपुर के बाबू कुंवर सिंह की वीरता और 1917 में चंपारण की पावन भूमि पर महात्मा गांधी द्वारा सत्याग्रह का पहला सफल प्रयोग BPSC TRE परीक्षा का केंद्रीय विषय है।',
              conceptSections: [
                {
                  title: '1. 1857 की क्रांति: बिहार का महासंग्राम',
                  contentMarkdownEn: '**घटनाक्रम एवं केंद्र:**\n* **12 जून 1857:** बिहार (वर्तमान झारखंड) के देवघर जिले के **रोहिणी गाँव** में 32वीं नेटिव इन्फैंट्री के सैनिकों ने विद्रोह किया (मेजर नॉर्मन लेस्ली की हत्या)।\n* **3 जुलाई 1857 (पटना):** पटना के पुस्तक विक्रेता **पीर अली** ने विद्रोह का बिगुल फूंका। अफीम एजेंट डॉ. आर. लॉयल मारा गया। पटना कमिश्नर विलियम टेलर ने पीर अली को फांसी दी।\n* **25 जुलाई 1857 (दानापुर):** दानापुर छावनी की तीन रेजिमेंटों ने विद्रोह किया और शाहाबाद (आरा) की ओर कूच किया।\n* **बाबू वीर कुंवर सिंह (जगदीशपुर):** 80 वर्ष की आयु में विद्रोह का नेतृत्व संभाला। उन्होंने आरा, अतरौलिया (आजमगढ़), बलिया और रीवा में अंग्रेजों (कैप्टन डनबर, ले ग्रांड) को करारी शिकस्त दी। 26 अप्रैल 1858 को उनका निधन हुआ। उनके बाद उनके भाई **अमर सिंह** ने कैमूर की पहाड़ियों से छापामार युद्ध जारी रखा।',
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC TRE Trap: 1857 का आरंभ',
                    textEn: 'Remember: In undivided Bihar, the revolt started in Rohini on 12 June 1857; in Patna on 3 July 1857 under Pir Ali; in Danapur on 25 July 1857.',
                    textHi: 'याद रखें: अविभाजित बिहार में 1857 का पहला विद्रोह रोहिणी (12 जून) में हुआ था, पटना में 3 जुलाई को पीर अली द्वारा।'
                  }
                },
                {
                  title: '2. चंपारण सत्याग्रह (1917): गांधीजी की पहली कर्मभूमि',
                  contentMarkdownEn: '**पृष्ठभूमि एवं तिनकठिया प्रथा:**\n* यूरोपीय नीलहे (Planters) किसानों को उनकी प्रति बीघा भूमि (20 कट्ठा) के 3 कट्ठे (3/20 भाग) पर नील की खेती करने हेतु बाध्य करते थे। इसे **तिनकठिया प्रणाली** कहा गया।\n* जब जर्मनी में रासायनिक रंगों (सिंथेटिक डाई) का आविष्कार हुआ तो नील का व्यापार घाटे में आ गया। बागान मालिकों ने किसानों से अनुबंध मुक्त करने के एवज में भारी कर (शरहबेशी और तावान) वसूला।\n\n**गांधीजी का आगमन:**\n* 1916 के **लखनऊ कांग्रेस अधिवेशन** में मुरली भरहवा के किसान नेता **राजकुमार शुक्ल** ने गांधीजी को चंपारण आने का न्योता दिया।\n* **10 अप्रैल 1917:** गांधीजी पहली बार पटना पहुंचे (मजहरुल हक के घर)।\n* **15 अप्रैल 1917:** गांधीजी मोतिहारी (चंपारण) पहुंचे। उनके प्रमुख सहयोगी: डॉ. राजेंद्र प्रसाद, जे.बी. कृपलानी, ब्रजकिशोर प्रसाद, धरणीधर, अनुग्रह नारायण सिन्हा, और रामनवमी प्रसाद थे।',
                  tableData: {
                    headers: ['ऐतिहासिक पहलू', 'महत्वपूर्ण तथ्य / विवरण', 'BPSC में पूछा गया प्रश्न संदर्भ'],
                    rows: [
                      ['निमंत्रणकर्ता', 'राजकुमार शुक्ल (मुरली भरहवा गाँव)', 'लखनऊ अधिवेशन (1916) में आमंत्रण दिया'],
                      ['तिनकठिया अनुपात', '3/20 भाग पर अनिवार्य नील की खेती', 'प्रत्येक 1 बीघा (20 कट्ठा) में 3 कट्ठा'],
                      ['जांच समिति', 'चंपारण एग्रेरियन कमेटी (अध्यक्ष: एफ.जी. स्लाई)', 'गांधीजी भी समिति के सदस्य मनोनीत हुए'],
                      ['सत्याग्रह का परिणाम', 'तिनकठिया समाप्त; 25% अवैध वसूली वापस', 'भारत में गांधीजी का पहला सविनय अवज्ञा'],
                      ['उपाधि', 'रवींद्रनाथ टैगोर ने गांधीजी को \'महात्मा\' कहा', 'सत्याग्रह की अभूतपूर्व सफलता के उपरांत']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'तिनकठिया प्रणाली',
                  definitionEn: 'A coercive tenancy system where Bihar peasants had to cultivate indigo on 3 out of every 20 parts (3/20) of their land for British planters.',
                  definitionHi: 'ब्रिटिश काल में किसानों की कुल भूमि के 3/20 भाग (तिन कट्ठा प्रति बीघा) पर नील की खेती करने की बाध्यकारी प्रथा।'
                },
                {
                  term: 'आजाद दस्ता',
                  definitionEn: 'An underground guerrilla revolutionary force founded by Jayaprakash Narayan in the jungles of Nepal (Bakro ka Tapu) during the 1942 Quit India Movement.',
                  definitionHi: '1942 के भारत छोड़ो आंदोलन के दौरान जयप्रकाश नारायण द्वारा नेपाल के जंगलों में गठित भूमिगत छापामार दस्ता।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'तिनकठिया का अनुपात',
                  formulaOrRule: 'तिनकठिया अनुपात = 3 / 20 (3 कट्ठा प्रति 1 बीघा / 20 कट्ठा)',
                  explanationEn: 'Essential fraction tested in BPSC TRE.',
                  explanationHi: '20 कट्ठे में 3 कट्ठे पर नील की खेती अनिवार्य थी।'
                }
              ],
              examples: [
                {
                  title: 'BPSC प्रश्न: चंपारण में गांधीजी को निमंत्रण',
                  problemEn: 'चंपारण में गांधीजी को किसानों की समस्याओं की जांच के लिए किसने आमंत्रित किया था? (A) डॉ. राजेंद्र प्रसाद (B) राजकुमार शुक्ल (C) ब्रजकिशोर प्रसाद (D) स्वामी सहजानंद',
                  stepByStepSolutionEn: '1916 के लखनऊ कांग्रेस अधिवेशन में चंपारण के मुरली भरहवा निवासी राजकुमार शुक्ल ने गांधीजी से व्यक्तिगत रूप से मिलकर चंपारण आने का आग्रह किया था। सही उत्तर (B) राजकुमार शुक्ल है।',
                  shortcutTrick: 'चंपारण निमंत्रण = राजकुमार शुक्ल (मुरली भरहवा)।'
                }
              ],
              practicalApplications: [
                'सत्याग्रह और अहिंसक जन-आंदोलनों के मूल सिद्धांतों का समाज एवं शिक्षा में प्रसार।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'तिनकठिया में 1/3 या 3/10 अनुपात मान लेना।',
                  whyWrongEn: 'तिनकठिया का अर्थ 3 कट्ठा प्रति 20 कट्ठा (3/20) है, न कि 1/3 या 3/10।',
                  correctWayEn: 'हमेशा 3/20 याद रखें।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: ['राजकुमार शुक्ल का गाँव (मुरली भरहवा)', 'चंपारण समिति के अध्यक्ष (एफ.जी. स्लाई)', '1857 में बाबू कुंवर सिंह का जन्मस्थान (जगदीशपुर)', 'पटना में पीर अली की भूमिका'],
                commonDistractorTraps: ['अमर सिंह और कुंवर सिंह के क्रम में भ्रम।'],
                relatedPyqReferences: ['BPSC TRE 1.0 GS Paper Q32', 'BPSC TRE 2.0 GS Q41']
              },
              quickRevisionPoints: [
                '1857 का आरंभ: रोहिणी (12 जून) -> पटना (पीर अली, 3 जुलाई) -> दानापुर (25 जुलाई) -> जगदीशपुर (कुंवर सिंह)।',
                'चंपारण सत्याग्रह (1917): 3/20 तिनकठिया प्रथा के विरुद्ध।',
                'राजकुमार शुक्ल ने 1916 लखनऊ अधिवेशन में गांधीजी को आमंत्रित किया।',
                'जांच समिति: चंपारण एग्रेरियन कमेटी (अध्यक्ष: एफ.जी. स्लाई); गांधीजी सदस्य थे।',
                'रवींद्रनाथ टैगोर ने गांधीजी को \'महात्मा\' की उपाधि दी।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-bih-gs-1',
                  questionEn: '1857 की क्रांति के समय जगदीशपुर (बिहार) में विद्रोह का नेतृत्व किस महानायक ने किया था?',
                  questionHi: '1857 की क्रांति के समय जगदीशपुर (बिहार) में विद्रोह का नेतृत्व किस महानायक ने किया था?',
                  options: [
                    { id: 'A', textEn: 'पीर अली खां', isCorrect: false },
                    { id: 'B', textEn: 'बाबू वीर कुंवर सिंह', isCorrect: true },
                    { id: 'C', textEn: 'तात्या टोपे', isCorrect: false },
                    { id: 'D', textEn: 'नाना साहेब', isCorrect: false }
                  ],
                  explanationEn: 'बाबू वीर कुंवर सिंह ने 80 वर्ष की उम्र में जगदीशपुर (शाहाबाद) में 1857 की क्रांति का ऐतिहासिक नेतृत्व किया।',
                  conceptTested: '1857 की क्रांति में बिहार के नायक'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-bih-gs-1',
                topicId: 'bih-topic-champaran-1857',
                chapterId: 'bih-ch-freedom-struggle',
                subjectKey: 'BIHAR_SPECIAL_GK',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'बिहार के किस प्रसिद्ध किसान नेता के आग्रह पर महात्मा गांधी चंपारण आए थे?',
                questionTextHi: 'बिहार के किस प्रसिद्ध किसान नेता के आग्रह पर महात्मा गांधी चंपारण आए थे?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'स्वामी सहजानंद सरस्वती', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'राजकुमार शुक्ल', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'कार्यानंद शर्मा', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'राजकुमार शुक्ल ने 1916 के लखनऊ कांग्रेस अधिवेशन में गांधीजी को चंपारण में किसानों की दुर्दशा से अवगत कराकर आने का न्योता दिया था।',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // SUBJECT 2: INDIAN POLITY & CONSTITUTION
  // ==========================================
  {
    key: 'INDIAN_POLITY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian Polity & Constitution',
    displayNameHi: 'भारतीय राजव्यवस्था एवं संविधान',
    iconName: 'Shield',
    descriptionEn: 'Preamble, Fundamental Rights (Part III), DPSP (Part IV), Parliament, Judiciary, and Panchayati Raj 73rd/74th Amendments.',
    descriptionHi: 'प्रस्तावना, मौलिक अधिकार (अनुच्छेद 12-35), नीति निदेशक तत्व, संसद, तथा बिहार पंचायती राज अधिनियम 2006।',
    chapters: [
      {
        id: 'pol-ch-fundamental-rights',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 1,
        slug: 'fundamental-rights-dpsp',
        titleEn: 'Fundamental Rights & Directive Principles of State Policy',
        titleHi: 'मौलिक अधिकार (भाग III) एवं नीति निदेशक तत्व (भाग IV)',
        descriptionEn: 'Articles 12 to 35, Article 32 Writs, and Articles 36 to 51 DPSP with constitutional amendments.',
        descriptionHi: 'समानता, स्वतंत्रता, शोषण के विरुद्ध अधिकार, अनुच्छेद 32 की 5 रिटें, तथा कल्याणकारी राज्य के DPSP सिद्धांत।',
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
            descriptionEn: 'Articles 14 to 32, Right to Education (Art 21A), and 5 constitutional writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto).',
            descriptionHi: 'समानता, स्वतंत्रता, शिक्षा का अधिकार (अनुच्छेद 21क) तथा सर्वोच्च न्यायालय की 5 रिटें।',
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
                'संविधान के भाग III (अनुच्छेद 12–35) को भारत का \'मैग्नाकार्टा\' क्यों कहा जाता है, समझना।',
                '6 मूल अधिकारों (समानता, स्वतंत्रता, शोषण विरुद्ध, धर्म स्वतंत्रता, संस्कृति-शिक्षा, संवैधानिक उपचार) के प्रमुख अनुच्छेदों को कंठस्थ करना।',
                '86वें संविधान संशोधन 2002 द्वारा जोड़े गए अनुच्छेद 21क (शिक्षा का अधिकार) का विश्लेषण करना।',
                'अनुच्छेद 32 के तहत सर्वोच्च न्यायालय एवं अनुच्छेद 226 के तहत उच्च न्यायालय द्वारा जारी की जाने वाली 5 रिटों का अंतर स्पष्ट करना।'
              ],
              introductionEn: 'Fundamental Rights form the bedrock of the Indian Constitution. Questions in BPSC TRE regularly ask about specific article numbers (e.g., Abolition of Untouchability Art 17, Protection of Life Art 21, Right to Education Art 21A) and the nature of constitutional writs.',
              introductionHi: 'भारतीय संविधान का भाग III (अनुच्छेद 12 से 35) मौलिक अधिकारों से संबंधित है। डॉ. भीमराव अंबेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को \'संविधान की आत्मा एवं हृदय\' कहा था।',
              conceptSections: [
                {
                  title: '1. 6 मौलिक अधिकारों का वर्गीकरण (अनुच्छेद 14–32)',
                  contentMarkdownEn: 'मूल संविधान में 7 मौलिक अधिकार थे, परंतु **44वें संविधान संशोधन (1978)** द्वारा **संपत्ति के अधिकार (अनुच्छेद 31)** को मौलिक अधिकारों से हटाकर **अनुच्छेद 300क** के तहत कानूनी/विधिक अधिकार बना दिया गया। वर्तमान में 6 मौलिक अधिकार हैं:',
                  tableData: {
                    headers: ['मौलिक अधिकार', 'अनुच्छेद विस्तार', 'महत्वपूर्ण प्रमुख अनुच्छेद', 'संविधान प्रावधान'],
                    rows: [
                      ['1. समानता का अधिकार', 'अनुच्छेद 14–18', 'अनुच्छेद 14 (विधि के समक्ष समता), अनुच्छेद 17 (अस्पृश्यता का अंत)', 'जाति, धर्म, लिंग पर भेद का निषेध'],
                      ['2. स्वतंत्रता का अधिकार', 'अनुच्छेद 19–22', 'अनुच्छेद 19 (6 स्वतंत्रताओं का संरक्षण), अनुच्छेद 21 (प्राण एवं दैहिक स्वतंत्रता)', 'अनुच्छेद 21क: 6-14 वर्ष के बच्चों को निःशुल्क अनिवार्य शिक्षा (86वां संशोधन 2002)'],
                      ['3. शोषण के विरुद्ध अधिकार', 'अनुच्छेद 23–24', 'अनुच्छेद 23 (मानव दुर्व्यापार व बंधुआ मजदूरी निषेध), अनुच्छेद 24 (कारखानों में बालश्रम निषेध)', '14 वर्ष से कम आयु के बच्चों पर रोक'],
                      ['4. धार्मिक स्वतंत्रता का अधिकार', 'अनुच्छेद 25–28', 'अनुच्छेद 25 (अंतःकरण की स्वतंत्रता व धर्म आचरण)', 'भारत एक धर्मनिरपेक्ष राष्ट्र'],
                      ['5. संस्कृति व शिक्षा संबंधी अधिकार', 'अनुच्छेद 29–30', 'अनुच्छेद 29 (अल्पसंख्यकों के हितों का संरक्षण), अनुच्छेद 30 (शिक्षण संस्थाओं की स्थापना)', 'भाषाई एवं धार्मिक अल्पसंख्यकों को अधिकार'],
                      ['6. संवैधानिक उपचारों का अधिकार', 'अनुच्छेद 32', 'सर्वोच्च न्यायालय द्वारा 5 प्रकार की रिटें जारी करना', 'डॉ. अंबेडकर ने \'संविधान का हृदय और आत्मा\' कहा']
                    ]
                  }
                },
                {
                  title: '2. अनुच्छेद 32: 5 संवैधानिक रिटें',
                  contentMarkdownEn: 'सर्वोच्च न्यायालय (अनुच्छेद 32) एवं उच्च न्यायालय (अनुच्छेद 226) नागरिकों के मूल अधिकारों के संरक्षण हेतु 5 रिटें जारी कर सकते हैं:\n\n1. **बंदी प्रत्यक्षीकरण (Habeas Corpus):** \'शरीर को प्रस्तुत किया जाए\' — अवैध रूप से हिरासत में लिए गए व्यक्ति को 24 घंटे के भीतर न्यायालय के समक्ष प्रस्तुत करने का आदेश।\n2. **परमादेश (Mandamus):** \'हम आदेश देते हैं\' — किसी लोक अधिकारी (सार्वजनिक प्राधिकारी) को उसका विधिक कर्तव्य निभाने का आदेश।\n3. **प्रतिषेध (Prohibition):** \'रोकना / मना करना\' — उच्च न्यायालय द्वारा अधीनस्थ न्यायालय को अपने अधिकार क्षेत्र से बाहर जाने से रोकना।\n4. **उत्प्रेषण (Certiorari):** \'पूर्णतया सूचित होना\' — अधीनस्थ न्यायालय से लंबित मुकदमे को अपने पास मंगाना या उसके निर्णय को रद्द करना।\n5. **अधिकार पृच्छा (Quo Warranto):** \'आपका क्या अधिकार है\' — किसी व्यक्ति द्वारा सार्वजनिक पद के अनाधिकृत उपयोग की जांच।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'अनुच्छेद 21क',
                  definitionEn: 'Right to Education made a fundamental right for children aged 6 to 14 years by the 86th Constitutional Amendment Act, 2002.',
                  definitionHi: '86वें संविधान संशोधन 2002 द्वारा 6 से 14 वर्ष के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'संपत्ति के अधिकार का स्थानांतरण',
                  formulaOrRule: 'अनुच्छेद 31 (मौलिक अधिकार) -> 44वां संशोधन 1978 -> अनुच्छेद 300क (विधिक अधिकार)',
                  explanationEn: 'Right to Property is no longer a Fundamental Right; it is a Constitutional Legal Right under Article 300A.',
                  explanationHi: 'संपत्ति का अधिकार अब मौलिक अधिकार नहीं बल्कि अनुच्छेद 300क के तहत कानूनी अधिकार है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC प्रश्न: शिक्षा का अधिकार',
                  problemEn: 'भारतीय संविधान में \'शिक्षा का अधिकार\' किस अनुच्छेद के अंतर्गत मौलिक अधिकार के रूप में स्थापित किया गया है? (A) अनुच्छेद 19 (B) अनुच्छेद 21 (C) अनुच्छेद 21क (D) अनुच्छेद 45',
                  stepByStepSolutionEn: '86वें संविधान संशोधन अधिनियम 2002 द्वारा संविधान में अनुच्छेद 21क जोड़ा गया, जो 6 से 14 वर्ष के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा को मौलिक अधिकार बनाता है। अतः सही उत्तर (C) अनुच्छेद 21क है।',
                  shortcutTrick: 'Right to Education (RTE) = Article 21A (86th Amendment).'
                }
              ],
              practicalApplications: [
                'एक शिक्षक के रूप में छात्रों एवं अभिभावकों के संवैधानिक व शैक्षिक अधिकारों की समझ सुनिश्चित करना।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'अनुच्छेद 32 और अनुच्छेद 226 को एक समान समझना।',
                  whyWrongEn: 'अनुच्छेद 32 केवल मौलिक अधिकारों के लिए सर्वोच्च न्यायालय में लागू होता है, जबकि अनुच्छेद 226 उच्च न्यायालय को अन्य विधिक अधिकारों के लिए भी रिट जारी करने की व्यापक शक्ति देता है।',
                  correctWayEn: 'उच्च न्यायालय (226) का रिट क्षेत्राधिकार सर्वोच्च न्यायालय (32) से अधिक विस्तृत है।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: ['अस्पृश्यता का अंत (अनुच्छेद 17)', 'शिक्षा का अधिकार (अनुच्छेद 21क)', 'बंदी प्रत्यक्षीकरण का अर्थ', 'संपत्ति का अधिकार किस प्रकार का अधिकार है'],
                commonDistractorTraps: ['42वें और 44वें संशोधन में भ्रम (संपत्ति का अधिकार 44वें संशोधन द्वारा हटाया गया, 42वें द्वारा नहीं)।'],
                relatedPyqReferences: ['BPSC TRE 1.0 GS Paper Q28', 'BPSC TRE 2.0 GS Q36']
              },
              quickRevisionPoints: [
                'मौलिक अधिकार: भाग III (अनुच्छेद 12–35), अमेरिका के संविधान से प्रेरित।',
                'वर्तमान में 6 मौलिक अधिकार हैं (संपत्ति का अधिकार 44वें संशोधन 1978 द्वारा हटाया गया)।',
                'अनुच्छेद 17 = अस्पृश्यता का अंत।',
                'अनुच्छेद 21क = 6-14 वर्ष के बच्चों को अनिवार्य शिक्षा (86वां संशोधन 2002)।',
                'अनुच्छेद 32 = सर्वोच्च न्यायालय द्वारा 5 रिटें (संविधान की आत्मा - अंबेडकर)।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-gs-1',
                  questionEn: 'भारतीय संविधान के किस अनुच्छेद द्वारा \'अस्पृश्यता\' का उन्मूलन किया गया है?',
                  questionHi: 'भारतीय संविधान के किस अनुच्छेद द्वारा \'अस्पृश्यता\' का उन्मूलन किया गया है?',
                  options: [
                    { id: 'A', textEn: 'अनुच्छेद 14', isCorrect: false },
                    { id: 'B', textEn: 'अनुच्छेद 15', isCorrect: false },
                    { id: 'C', textEn: 'अनुच्छेद 17', isCorrect: true },
                    { id: 'D', textEn: 'अनुच्छेद 19', isCorrect: false }
                  ],
                  explanationEn: 'अनुच्छेद 17 के तहत अस्पृश्यता का पूर्ण उन्मूलन किया गया है और इसका किसी भी रूप में आचरण विधि के अनुसार दंडनीय अपराध है।',
                  conceptTested: 'समानता का अधिकार - अनुच्छेद 17'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-gs-1',
                topicId: 'pol-topic-fr-articles',
                chapterId: 'pol-ch-fundamental-rights',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'डॉ. बी.आर. अंबेडकर ने संविधान के किस अनुच्छेद को \'संविधान की आत्मा और उसका हृदय\' कहा था?',
                questionTextHi: 'डॉ. बी.आर. अंबेडकर ने संविधान के किस अनुच्छेद को \'संविधान की आत्मा और उसका हृदय\' कहा था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'अनुच्छेद 14', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'अनुच्छेद 19', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'अनुच्छेद 32', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'अनुच्छेद 32 संवैधानिक उपचारों का अधिकार प्रदान करता है जिसके बिना अन्य मौलिक अधिकार व्यर्थ हो जाते हैं। इसलिए डॉ. अंबेडकर ने इसे संविधान का हृदय और आत्मा कहा।',
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
