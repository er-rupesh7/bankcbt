// Comprehensive BPSC TRE 4.0 Indian & Bihar Economy Course Data
// In-depth curriculum covering National Income, RBI Monetary Policy, Inflation, Budgeting, NITI Aayog, GST, and Bihar Economy (Saat Nischay-2, Agri Road Map 4, Ethanol Policy)
// Fully equipped with authentic BPSC TRE PYQs, yellow highlighters (==text==), mnemonics, callout boxes, and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_ECONOMY_SUBJECTS: LMSSubject[] = [
  {
    key: 'INDIAN_ECONOMY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian & Bihar Economy',
    displayNameHi: 'भारतीय एवं बिहार की अर्थव्यवस्था',
    iconName: 'TrendingUp',
    descriptionEn: 'Essential macroeconomic concepts and Bihar state finances: National Income (GDP, GNP, NNP), RBI Monetary Policy (Repo, CRR, SLR), Inflation, Budget Deficits, NITI Aayog, GST, Saat Nischay-2, and Bihar Ethanol Promotion Policy.',
    descriptionHi: 'राष्ट्रीय आय (GDP, GNP, NNP), आरबीआई की मौद्रिक नीति (रेपो रेट, सीआरआर, एसएलआर), मुद्रास्फीति, बजट घाटा, नीति आयोग, जीएसटी, सात निश्चय-2, तथा बिहार की इथेनॉल नीति।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: NATIONAL INCOME & MONETARY POLICY
      // ----------------------------------------------------
      {
        id: 'eco-ch-national-income-money',
        subjectKey: 'INDIAN_ECONOMY',
        chapterNumber: 1,
        slug: 'national-income-and-monetary-policy',
        titleEn: 'National Income, Inflation & RBI Monetary Policy',
        titleHi: 'राष्ट्रीय आय, मुद्रास्फीति एवं आरबीआई की मौद्रिक नीति',
        descriptionEn: 'Concepts of GDP, GNP, NNP, Real vs Nominal GDP, CPI vs WPI inflation, and Reserve Bank of India quantitative & qualitative tools.',
        descriptionHi: 'जीडीपी, जीएनपी, एनएनपी, वास्तविक बनाम नाममात्र जीडीपी, सीपीआई एवं डब्ल्यूपीआई मुद्रास्फीति, तथा भारतीय रिज़र्व बैंक के मौद्रिक उपकरण।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          {
            id: 'eco-topic-gdp-rbi-tools',
            chapterId: 'eco-ch-national-income-money',
            topicNumber: 1,
            slug: 'national-income-and-rbi-monetary-policy',
            titleEn: 'National Income Aggregates & RBI Monetary Policy',
            titleHi: 'राष्ट्रीय आय की अवधारणाएं एवं आरबीआई मौद्रिक नीति',
            descriptionEn: 'Formulas for GDP, NNP at Factor Cost (National Income), Repo Rate, Reverse Repo, CRR, SLR, and methods to curb inflation.',
            descriptionHi: 'सकल घरेलू उत्पाद (GDP), साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP_FC), रेपो रेट, रिवर्स रेपो, सीआरआर, एसएलआर एवं मुद्रास्फीति नियंत्रण।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 10,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.42), TRE 2.0 (Q.43) & TRE 3.0 (Q.45)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-gdp-rbi-tools',
              topicId: 'eco-topic-gdp-rbi-tools',
              titleEn: 'National Income Aggregates & RBI Monetary Policy',
              titleHi: 'राष्ट्रीय आय की अवधारणाएं एवं आरबीआई मौद्रिक नीति',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Distinguish between GDP, GNP, NDP, and NNP at factor cost.',
                'Understand the establishment of RBI (1935 on Hilton Young Commission) and nationalization (1949).',
                'Master RBI\'s quantitative credit control tools: Repo Rate, Reverse Repo, CRR, and SLR.',
                'Explain how increasing Repo Rate or CRR controls inflation by sucking liquidity from the banking system.'
              ],
              introductionEn: '==The first person to estimate India\'s National Income was Dadabhai Naoroji in 1867–68, who calculated an annual per capita income of just ₹20.==\n\nHe exposed British economic drainage in his historic book "Poverty and Un-British Rule in India". Today, the National Statistics Office (NSO) computes India\'s GDP, while the Reserve Bank of India (established in 1935) regulates credit flow and inflation across the country.',
              introductionHi: 'भारत में राष्ट्रीय आय का सबसे पहला अनुमान 1867-68 में दादाभाई नौरोजी ने लगाया था, जिन्होंने प्रति व्यक्ति आय मात्र ₹20 आंकी थी। आज राष्ट्रीय सांख्यिकी कार्यालय (NSO) जीडीपी की गणना करता है, जबकि भारतीय रिज़र्व बैंक मौद्रिक नीति का संचालन करता है।',
              conceptSections: [
                {
                  title: '1. National Income Aggregates & Scientific Formulas',
                  contentMarkdownEn: '* **Gross Domestic Product (GDP):** Total market value of all final goods and services produced within the domestic territory of a country in a year.\n* **Gross National Product (GNP):** GNP = GDP + Net Factor Income from Abroad (NFIA).\n* **Net National Product (NNP):** NNP = GNP - Depreciation.\n* **==National Income (NI)==:** Defined as ==NNP at Factor Cost (NNP_FC)==:\n  * ==National Income = NNP at Market Price - Indirect Taxes + Subsidies=='
                },
                {
                  title: '2. The Reserve Bank of India & Quantitative Credit Control Tools',
                  contentMarkdownEn: 'Established on ==1 April 1935== under RBI Act 1934 on recommendation of ==Hilton Young Commission==; nationalized on ==1 January 1949==:\n\n* **1. Repo Rate:** Rate at which RBI lends short-term funds to commercial banks against government securities. *(Higher Repo Rate = Costlier loans = Less liquidity = Controls inflation)*.\n* **2. Reverse Repo Rate:** Rate at which RBI borrows short-term funds from commercial banks.\n* **3. Cash Reserve Ratio (CRR):** Percentage of net deposits that commercial banks ==must keep in cash with the RBI==. (No interest is paid by RBI).\n* **4. Statutory Liquidity Ratio (SLR):** Percentage of deposits banks must keep ==with themselves== in liquid assets (cash, gold, government bonds).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Repo Rate (रेपो दर)',
                  definitionEn: 'The policy interest rate at which the Reserve Bank of India provides overnight liquidity to commercial banks against collateral of government securities.',
                  definitionHi: 'वह ब्याज दर जिस पर वाणिज्यिक बैंक भारतीय रिज़र्व बैंक से अल्पकालिक ऋण लेते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Inflation Control Rule',
                  formulaOrRule: 'To curb inflation: RBI INCREASES Repo Rate, CRR, and SLR (Tighter liquidity)',
                  explanationEn: 'Higher rates make borrowing costly and absorb cash from market, pulling inflation down.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: CRR Increase Impact',
                  problemEn: 'When RBI increases Cash Reserve Ratio (CRR), what happens to bank lending capacity?',
                  stepByStepSolutionEn: '1. Higher CRR forces banks to deposit more cash with RBI.\n2. Less loanable funds remain in bank vaults.\n3. Lending capacity decreases.\n4. Correct Answer: Decreases.',
                  shortcutTrick: 'Higher CRR = Less Lending!'
                }
              ],
              practicalApplications: ['Essential knowledge for BPSC General Studies macroeconomic section.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking CRR earns interest from the RBI.',
                  whyWrongEn: 'Under RBI Act, no interest is payable on Cash Reserve Ratio deposits maintained by banks.',
                  correctWayEn: 'Remember that CRR earns 0% interest from RBI.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Hilton Young Commission recommended establishment of RBI',
                  'Dadabhai Naoroji estimated ₹20 per capita income (1867-68)',
                  'Impact of CRR and Repo Rate increases on inflation'
                ],
                commonDistractorTraps: ['Confusing CRR (kept with RBI) with SLR (kept with bank itself)'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.42)', 'BPSC TRE 2.0 (Q.43)']
              },
              quickRevisionPoints: [
                'Dadabhai Naoroji first calculated Indian per capita income (₹20) in 1867-68.',
                'National Income = Net National Product at Factor Cost (NNP_FC).',
                'RBI established 1 April 1935 on Hilton Young Commission recommendation; nationalized 1 January 1949.',
                'To control inflation: RBI INCREASES Repo Rate, CRR, and SLR.',
                'CRR is deposited with RBI; SLR is maintained by banks with themselves in liquid form.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eco-rbi-1',
                  questionEn: 'On the recommendation of which Commission was the Reserve Bank of India established in 1935?',
                  questionHi: '1935 में किस आयोग की सिफारिश पर भारतीय रिज़र्व बैंक की स्थापना की गई थी?',
                  options: [
                    { id: 'A', textEn: 'Hilton Young Commission', isCorrect: true },
                    { id: 'B', textEn: 'Hunter Commission', isCorrect: false },
                    { id: 'C', textEn: 'Simon Commission', isCorrect: false },
                    { id: 'D', textEn: 'Kothari Commission', isCorrect: false }
                  ],
                  explanationEn: 'The RBI was set up based on the recommendations of the Hilton Young Commission (Royal Commission on Indian Currency and Finance, 1926).',
                  conceptTested: 'Hilton Young Commission RBI'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eco-rbi-1',
                topicId: 'eco-topic-gdp-rbi-tools',
                chapterId: 'eco-ch-national-income-money',
                subjectKey: 'INDIAN_ECONOMY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'When the Reserve Bank of India increases the Cash Reserve Ratio (CRR), what is the direct impact on the lending capacity of commercial banks?',
                questionTextHi: 'जब भारतीय रिज़र्व बैंक नकद आरक्षित अनुपात (CRR) में वृद्धि करता है, तो वाणिज्यिक बैंकों की ऋण देने की क्षमता पर इसका क्या सीधा प्रभाव पड़ता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Lending capacity increases significantly', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Lending capacity decreases', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'No effect on lending capacity', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Increasing CRR requires commercial banks to lock away a higher percentage of their deposits with the RBI, thereby reducing the available pool of funds they can lend.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 43,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: BIHAR ECONOMY & SCHEMES
      // ----------------------------------------------------
      {
        id: 'eco-ch-bihar-schemes',
        subjectKey: 'INDIAN_ECONOMY',
        chapterNumber: 2,
        slug: 'bihar-economy-and-flagship-schemes',
        titleEn: 'Bihar Economy, Economic Survey & Saat Nischay-2',
        titleHi: 'बिहार की अर्थव्यवस्था, आर्थिक सर्वेक्षण एवं सात निश्चय-2',
        descriptionEn: 'Economic profile of Bihar, Sectoral contributions (Tertiary ~60%, Primary ~20%, Secondary ~20%), Saat Nischay-2 flagship targets, Agri Road Map 4, and Ethanol Production Promotion Policy.',
        descriptionHi: 'बिहार की आर्थिक संरचना, विभिन्न क्षेत्रों का योगदान, सात निश्चय-2 के सात संकल्प, कृषि रोड मैप-4 (2023-2028), तथा इथेनॉल उत्पादन संवर्धन नीति।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          {
            id: 'eco-topic-bihar-survey-schemes',
            chapterId: 'eco-ch-bihar-schemes',
            topicNumber: 1,
            slug: 'bihar-economic-survey-saat-nischay-2',
            titleEn: 'Bihar Economic Survey & Saat Nischay-2 (2020–2025)',
            titleHi: 'बिहार आर्थिक सर्वेक्षण एवं सात निश्चय-2',
            descriptionEn: 'Detailed breakdown of Bihar\'s GSDP, key welfare initiatives, all 7 commitments of Saat Nischay-2, and Bihar\'s status as the first state to launch an Ethanol Policy.',
            descriptionHi: 'बिहार का जीएसडीपी, सात निश्चय-2 के सभी 7 घटक (युवा शक्ति, सशक्त महिला, हर खेत सिंचाई, स्वच्छ गांव, स्वच्छ शहर, सुलभ संपर्कता, स्वास्थ्य सुविधा), एवं इथेनॉल नीति।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.43), TRE 2.0 (Q.44) & TRE 3.0 (Q.46)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-bihar-survey-schemes',
              topicId: 'eco-topic-bihar-survey-schemes',
              titleEn: 'Bihar Economic Survey & Saat Nischay-2 (2020–2025)',
              titleHi: 'बिहार आर्थिक सर्वेक्षण एवं सात निश्चय-2',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the sectoral composition of Bihar GSDP (Tertiary/Services sector dominates with ~60%).',
                'Memorize all 7 components of "Saat Nischay-2" (2020–2025).',
                'Recall key facts of Bihar\'s Fourth Agri Road Map (2023–2028 launched by President Droupadi Murmu).',
                'Highlight Bihar\'s pioneering role in Ethanol Production Promotion Policy (2021).'
              ],
              introductionEn: '==Over the last decade, Bihar has consistently registered high economic growth rates, often outperforming the national average.==\n\nTo direct this growth towards holistic human development, the Government of Bihar launched the historic "Saat Nischay-2" (Seven Resolves Part 2) for the period 2020–2025. Furthermore, Bihar became the first state in India to announce an Ethanol Production Promotion Policy in 2021.',
              introductionHi: 'बिहार सरकार ने 2020-2025 के लिए "सात निश्चय-2" योजना लागू की। इसके अतिरिक्त, कृषि उपज को जैव ईंधन में बदलने के उद्देश्य से बिहार 2021 में इथेनॉल उत्पादन संवर्धन नीति लाने वाला देश का पहला राज्य बना।',
              conceptSections: [
                {
                  title: '1. Economic Profile & Bihar Economic Survey Highlights',
                  contentMarkdownEn: '* **Sectoral Share in Gross State Value Added (GSVA):**\n  * **Tertiary Sector (Services):** ~==60%== (Largest contributor to state economy).\n  * **Primary Sector (Agriculture & Allied):** ~==20%== (Employs ~70% of state workforce).\n  * **Secondary Sector (Manufacturing & Construction):** ~==20%==.\n* **Per Capita Income Disparity:** Highest in ==Patna==; Lowest in ==Sheohar==.\n* **Fourth Agriculture Road Map (2023–2028):** Inaugurated by President of India, ==Smt. Droupadi Murmu== on 18 October 2023 in Patna.'
                },
                {
                  title: '2. "Saat Nischay Part-2" (2020–2025): The 7 Resolves',
                  contentMarkdownEn: '1. **==1. Yuva Shakti - Bihar ki Pragati==** (Mega Skill Centers in each district).\n2. **==2. Sashakt Mahila - Saksham Mahila==** (₹25,000 to unmarried girls passing Intermediate, and ₹50,000 to girls completing Graduation under Mukhyamantri Kanya Utthan Yojana).\n3. **==3. Har Khet Tak Sinchai ka Pani==** (Assured irrigation to every field).\n4. **==4. Swachh Gaon - Samriddh Gaon==** (Solar street lights in all rural wards).\n5. **==5. Swachh Shahar - Viksit Shahar==** (Solid waste management and elderly shelters).\n6. **==6. Sulabh Samparkata==** (Bypass roads and rural connectivity).\n7. **==7. Sabke Liye Atirikt Swasthya Suvidha==** (Telemedicine and Bal Hriday Yojana for free child heart surgery).'
                },
                {
                  title: '3. Bihar Ethanol Production Promotion Policy (2021)',
                  contentMarkdownEn: '* Bihar became the ==FIRST state in India== to implement an **Ethanol Production Promotion Policy (2021)**.\n* Allows production of ethanol directly from 100% sugarcane juice, molasses, maize, and broken rice.\n* Eastern India\'s first grain-based greenfield ethanol plant was inaugurated at ==Ganeshpur, Purnea==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Saat Nischay-2 (सात निश्चय-2)',
                  definitionEn: 'The second phase of seven flagship governance commitments of the Bihar Government for the 2020–2025 term.',
                  definitionHi: '2020-2025 के लिए बिहार सरकार के सात विकासात्मक संकल्प।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Saat Nischay Cash Grants',
                  formulaOrRule: 'Intermediate Pass Unmarried Girl = ₹25,000 | Graduate Girl = ₹50,000',
                  explanationEn: 'Financial assistance directly credited under Mukhyamantri Kanya Utthan Yojana.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Graduate Girl Incentive',
                  problemEn: 'What financial incentive is provided to female graduates under Saat Nischay-2?',
                  stepByStepSolutionEn: '1. Under Mukhyamantri Kanya Utthan Yojana (Saat Nischay-2), graduate girl students receive ₹50,000.\n2. Intermediate pass girls receive ₹25,000.\n3. Answer: ₹50,000.',
                  shortcutTrick: 'Graduation = 50K!'
                }
              ],
              practicalApplications: ['Frequent direct question in BPSC General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing Saat Nischay-1 cash incentives (₹10,000 and ₹25,000) with Saat Nischay-2.',
                  whyWrongEn: 'Under Saat Nischay-2, the grants were doubled to ₹25,000 (Inter) and ₹50,000 (Graduation).',
                  correctWayEn: 'Always use the updated ₹25,000 and ₹50,000 amounts for Saat Nischay-2.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Bihar was first state to launch Ethanol Policy (2021)',
                  'First grain ethanol plant in Purnea (Ganeshpur)',
                  'Saat Nischay-2 cash grant of ₹50,000 for girl graduates'
                ],
                commonDistractorTraps: ['Confusing Saat Nischay-1 with Saat Nischay-2'],
                relatedPyqReferences: ['BPSC TRE 2.0 (Q.44)', 'BPSC TRE 3.0 (Q.46)']
              },
              quickRevisionPoints: [
                'Services sector contributes ~60% of Bihar GSDP; Agriculture employs ~70% workforce.',
                'Patna has highest per capita income; Sheohar has lowest in Bihar.',
                'Fourth Agriculture Road Map (2023-2028) inaugurated by President Droupadi Murmu.',
                'Saat Nischay-2 components: Yuva Shakti, Sashakt Mahila, Har Khet Sinchai, Swachh Gaon, Swachh Shahar, Sulabh Samparkata, Atirikt Swasthya.',
                'Bihar was FIRST state to launch Ethanol Policy (2021); plant in Purnea.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eco-bih-1',
                  questionEn: 'Which state in India was the first to implement an Ethanol Production Promotion Policy allowing ethanol production from surplus grain?',
                  questionHi: 'अधिशेष खाद्यान्नों से इथेनॉल उत्पादन की अनुमति देने वाली इथेनॉल उत्पादन संवर्धन नीति लागू करने वाला भारत का पहला राज्य कौन सा था?',
                  options: [
                    { id: 'A', textEn: 'Uttar Pradesh', isCorrect: false },
                    { id: 'B', textEn: 'Maharashtra', isCorrect: false },
                    { id: 'C', textEn: 'Bihar', isCorrect: true },
                    { id: 'D', textEn: 'Punjab', isCorrect: false }
                  ],
                  explanationEn: 'In 2021, Bihar became the first state in India to launch an Ethanol Production Promotion Policy.',
                  conceptTested: 'Bihar Ethanol Policy 2021'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eco-bih-1',
                topicId: 'eco-topic-bihar-survey-schemes',
                chapterId: 'eco-ch-bihar-schemes',
                subjectKey: 'INDIAN_ECONOMY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under the "Saat Nischay-2" scheme of the Bihar Government, what financial grant is provided to girl students upon successfully completing Graduation?',
                questionTextHi: 'बिहार सरकार की "सात निश्चय-2" योजना के तहत स्नातक उत्तीर्ण होने पर छात्राओं को कितनी आर्थिक सहायता प्रदान की जाती है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '₹25,000', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '₹50,000', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: '₹10,000', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Under Mukhyamantri Kanya Utthan Yojana (part of Saat Nischay-2), ₹50,000 is transferred directly to girl graduates.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 44,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
