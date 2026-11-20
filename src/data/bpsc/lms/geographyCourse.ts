// Comprehensive Geography of India, Bihar & Environment Course for BPSC TRE 4.0
// Covers Physical Geography, Indian Physiography & Rivers, Bihar Geography, Agro-Climatic Zones & Wildlife.

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_GEOGRAPHY_SUBJECTS: LMSSubject[] = [
  {
    key: 'INDIAN_GEOGRAPHY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian & Bihar Geography and Environment',
    displayNameHi: 'भारत एवं बिहार का भूगोल तथा पर्यावरण',
    iconName: 'Globe',
    descriptionEn: 'Comprehensive physical, drainage, climatic, and agro-economic geography of India and Bihar, including Valmiki National Park and river basins.',
    descriptionHi: 'भारत एवं बिहार का भौतिक भूगोल, नदी तंत्र, जलवायु, कृषि जलवायु क्षेत्र, मिट्टी, खनिज एवं वन्यजीव अभयारण्य।',
    chapters: [
      // CHAPTER 1: BIHAR GEOGRAPHY, RIVER SYSTEMS & AGRO-CLIMATIC ZONES
      {
        id: 'geo-ch-bihar-rivers-climate',
        subjectKey: 'INDIAN_GEOGRAPHY',
        chapterNumber: 1,
        slug: 'bihar-geography-rivers-agro-zones',
        titleEn: 'Bihar Geography: Physical Divisions, River Systems & Agriculture',
        titleHi: 'बिहार का भूगोल: भौतिक विभाजन, नदी तंत्र एवं कृषि जलवायु क्षेत्र',
        descriptionEn: 'Ganga and its tributaries, Kosi "Sorrow of Bihar", Someshwar range, 4 Agro-climatic zones, and GI tag crops.',
        descriptionHi: 'गंगा एवं उसकी सहायक नदियां, कोसी नदी, सोमेश्वर श्रेणी, 4 कृषि-जलवायु क्षेत्र एवं जीआई टैग प्राप्त फसलें।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'geo-topic-bihar-rivers',
            chapterId: 'geo-ch-bihar-rivers-climate',
            topicNumber: 1,
            slug: 'rivers-of-bihar-ganga-tributaries',
            titleEn: 'Rivers of Bihar: Ganga & Northern and Southern Tributaries',
            titleHi: 'बिहार की नदियां: गंगा एवं उसकी उत्तरी तथा दक्षिणी सहायक नदियां',
            descriptionEn: 'Ganga path (Buxar to Katihar, 445 km in Bihar), Kosi, Gandak, Son, and flood plains.',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'One of the most frequently tested topics across BPSC TRE 1.0, 2.0 & 3.0 (River origins, confluence points, length)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-bihar-rivers',
              topicId: 'geo-topic-bihar-rivers',
              titleEn: 'The Lifelines of Bihar: Complete River Drainage Atlas',
              titleHi: 'बिहार की जीवनरेखा: सम्पूर्ण नदी तंत्र एवं जल अपवाह प्रणाली',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Master the path of River Ganga in Bihar: Enters at Chausa (Buxar), flows 445 km across 12 districts, exits at Manihari (Katihar).',
                'Classify rivers into Northern (Himalayan, perennial, flood-causing) and Southern (Peninsular plateau, rainfed/seasonal).',
                'Memorize origin points and confluence locations: Gandak (Pahleza Ghat), Kosi (Kursela/Katihar), Son (Maniyer/Danapur), Punpun (Fatuha), Falgu (Gaya/Bodhi).',
                'Understand Kosi River: Why it is called the "Sorrow of Bihar" (Shifting courses due to heavy silt deposition).'
              ],
              introductionEn: '==River Ganga bisects the state of Bihar into two distinct geographical halves: North Bihar Plains and South Bihar Plains.==\n\nFlowing for **445 km inside Bihar** through 12 districts (longest in Patna district: 99 km), Ganga receives mighty glacial tributaries from Nepal in the north and rocky plateau rivers from Jharkhand/MP in the south.',
              introductionHi: 'गंगा नदी बिहार को दो लगभग बराबर भागों—उत्तरी बिहार का मैदान और दक्षिणी बिहार का मैदान—में विभाजित करती है। बिहार में गंगा की कुल लंबाई 445 किमी है और यह 12 जिलों से होकर गुजरती है।',
              conceptSections: [
                {
                  title: '1. Master Drainage Grid: Northern vs Southern Tributaries of Ganga in Bihar',
                  contentMarkdownEn: 'BPSC examiners test the exact **confluence points** where tributary rivers merge into Ganga:',
                  tableData: {
                    headers: ['River', 'Origin / Source', 'Enters Bihar at', 'Confluence with Ganga (Meeting Point)', 'Type / Character'],
                    rows: [
                      ['Ganga', 'Gangotri (Uttarkashi, UK)', 'Chausa (Buxar district)', 'Main artery (445 km in Bihar, exits at Katihar)', 'Perennial, navigable'],
                      ['Ghaghra (Saryu)', 'Mapchachungo Glacier (Tibet)', 'Gopalganj/Siwan', 'Near Chhapra (Saran district)', 'Northern perennial tributary'],
                      ['Gandak', 'Narayani / Dhaulagiri (Nepal)', 'Valmikinagar (West Champaran)', 'Pahleza Ghat (near Sonpur/Hajipur)', 'Forms Triveni Canal system'],
                      ['Burhi Gandak', 'Someshwar Hills (Chautarwa)', 'West Champaran', 'Khagaria (near Mansi)', 'Fastest flowing river of North Bihar'],
                      ['Bagmati', 'Shivpuri range (Kathmandu, Nepal)', 'Shorvat (Sitamarhi)', 'Merges with Kosi at Badlaghat', 'Floods Muzaffarpur and Darbhanga'],
                      ['Kamla', 'Mahabharat range (Nepal)', 'Jayanagar (Madhubani)', 'Merges with Bagmati/Kosi', 'Sacred river of Mithila'],
                      ['Kosi (Saptakoshi)', 'Gosainthan (Tibet/Nepal)', 'Bhaptiyahi (Supaul)', '==Kursela (Katihar district)==', '==Sorrow of Bihar== (shifted 120 km west in 200 years)'],
                      ['Mahananda', 'Mahaldhiram (Darjeeling, WB)', 'Kishanganj district', 'Godagari (Bangladesh, joins Padma)', 'Easternmost river of North Bihar'],
                      ['Son', '==Amarkantak Plateau (MP)==', 'Rohtas/Bhojpur', 'Maniyer (near Danapur/Patna)', 'Major southern tributary, Dehri barrage'],
                      ['Punpun', 'Palalamu Plateau (Jharkhand)', 'Aurangabad district', '==Fatuha (Patna district)==', 'Southern tributary, sacred for Pind Daan'],
                      ['Falgu (Niranjana)', 'Chhota Nagpur (formed by Lilajan + Mohana)', 'Gaya district', 'Disappears in Taal area before Ganga', 'Lord Buddha\'s enlightenment at Bodh Gaya, Gaya Pinda Daan, Rubber Dam (Gayaji Dam)']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Examiner Trap: Kosi Confluence vs Son Confluence',
                    textEn: 'BPSC repeatedly asks: Where does Kosi meet Ganga? The answer is ==Kursela (Katihar)==. Where does Punpun meet Ganga? At ==Fatuha==. Where does Son meet Ganga? Near ==Danapur (Patna)==!',
                    textHi: 'कोसी नदी गंगा में ==कुरसेला (कटिहार)== के निकट मिलती है। पुनपुन नदी गंगा में ==फतुहा (पटना)== के निकट मिलती है। सोन नदी दानापुर के निकट गंगा में मिलती है।'
                  }
                },
                {
                  title: '2. Physical Divisions of Bihar & Someshwar Range',
                  contentMarkdownEn: 'Geographically, Bihar (total area: ==94,163 sq km==, 12th largest state by area in India) is divided into 3 physical units:\n\n### 1. Shivalik / Sub-Himalayan Region (North-West)\n* Located in **West Champaran district** covering ~932 sq km.\n* Highest peak: ==Someshwar Fort (874 meters / 2,867 ft)== on the Indo-Nepal border.\n* Passes: **Someshwar Pass, Bhikhna Thori Pass, and Marwat Pass** through which trade passes to Nepal.\n\n### 2. The Great Bihar Plains (95% of State Area)\n* Divided by River Ganga into:\n  - **North Bihar Plain** (56,980 sq km): Characterized by **Chaurs** (natural semi-circular saucer-shaped waterlogged depressions) and **Mauns** (ox-bow lakes formed by river abandonment like Kanwar Lake).\n  - **South Bihar Plain** (33,670 sq km): Characterized by the **Taal Region** (a strip of low-lying waterlogged soil stretching 8–10 km south of the Ganga levee from Fatuha to Lakhisarai).\n\n### 3. Southern Hilly / Plateau Margin\n* Pre-Cambrian granite, gneiss, and schist formations bordering Jharkhand in Kaimur, Rohtas, Gaya, Nawada, Jamui, and Banka.\n* **Kaimur Plateau**: Formed of Vindhyan sandstones and limestones (famous for cement industry at Banjari/Rohtas).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Chaur & Maun (चौर एवं मौर)',
                  definitionEn: 'Chaur is a saucer-shaped natural waterlogged depression in North Bihar. Maun is an ox-bow lake formed when a meandering Himalayan river cuts off a loop.',
                  definitionHi: 'उत्तर बिहार के मैदानों में पाए जाने वाले जलमग्न गड्ढों को \'चौर\' और गोखुर झीलों को \'मौन\' कहा जाता है।'
                },
                {
                  term: 'Taal Region (टाल क्षेत्र)',
                  definitionEn: 'A continuous low-lying depression strip 8-10 km wide along the south bank of Ganga from Fatuha to Mokama and Barahiya where monsoonal backwaters accumulate.',
                  definitionHi: 'फतुहा से बड़हिया तक गंगा के समानांतर दक्षिण में फैला निचला भूभाग जहाँ वर्षा ऋतु में जलभराव रहता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Bihar River Geography Numbers',
                  formulaOrRule: 'Ganga in Bihar = 445 km | Total State Area = 94,163 sq km (2.86% of India) | Someshwar Peak = 874 m',
                  explanationEn: 'Crucial numerical facts repeatedly tested in BPSC prelims.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Kosi Confluence Point',
                  problemEn: 'At which of the following places does the Kosi River join the River Ganga in Bihar?',
                  stepByStepSolutionEn: '1. Kosi originates from Gosainthan (Nepal/Tibet) as Saptakoshi.\n2. Flows through Supaul, Saharsa, Madhepura, Khagaria, and Katihar.\n3. Joins the Ganga at Kursela in Katihar district.\n4. Therefore, correct answer is Kursela.',
                  shortcutTrick: 'Kosi meets Ganga at Kursela (Katihar)!'
                }
              ],
              practicalApplications: ['Directly yields 2 to 4 questions in General Studies (Part 2) of BPSC TRE.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Kosi meets Ganga at Patna.',
                  whyWrongEn: 'Son meets Ganga near Patna. Kosi meets Ganga much further downstream in eastern Bihar at Kursela (Katihar).',
                  correctWayEn: 'Son -> Danapur/Patna; Punpun -> Fatuha; Kosi -> Kursela (Katihar).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Length of Ganga in Bihar (445 km, flows through 12 districts)',
                  'District where Ganga is longest (Patna: 99 km)',
                  'Highest peak in Bihar (Someshwar Fort, 874 meters in West Champaran)',
                  'Where does Punpun meet Ganga? (Fatuha)',
                  'River associated with Bodh Gaya (Falgu / Niranjana)'
                ],
                commonDistractorTraps: [
                  'Confusing length of Ganga in Bihar (445 km) with total length (2,525 km)',
                  'Confusing Gandak with Burhi Gandak origin'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.41 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.42 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.41 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Total geographical area of Bihar: 94,163 sq km (2.86% of India, 12th largest state).',
                'Ganga enters at Chausa (Buxar) and leaves at Manihari (Katihar), traversing 445 km through 12 districts.',
                'Patna has the longest stretch of River Ganga in Bihar (99 km).',
                'Kosi River joins Ganga at Kursela (Katihar); famous for shifting course westward (Sorrow of Bihar).',
                'Punpun joins Ganga at Fatuha (Patna district).',
                'Son river originates at Amarkantak (MP) and joins Ganga near Danapur/Maniyer.',
                'Falgu river (Niranjana + Mohana) flows past Gaya; site of Gayaji Rubber Dam.',
                'Someshwar Peak in West Champaran: 874 m (highest point of Bihar).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-geo-bih-1',
                  questionEn: 'Through how many districts does the River Ganga flow in the state of Bihar?',
                  options: [
                    { id: 'a', textEn: '10 districts', isCorrect: false },
                    { id: 'b', textEn: '12 districts', isCorrect: true },
                    { id: 'c', textEn: '14 districts', isCorrect: false },
                    { id: 'd', textEn: '16 districts', isCorrect: false }
                  ],
                  explanationEn: 'River Ganga flows through exactly 12 districts in Bihar: Buxar, Bhojpur, Saran, Patna, Vaishali, Samastipur, Begusarai, Lakhisarai, Munger, Khagaria, Bhagalpur, and Katihar.',
                  conceptTested: 'Ganga Basin in Bihar'
                },
                {
                  id: 'kc-geo-bih-2',
                  questionEn: 'At which of the following places in Bihar does the Punpun River merge into the River Ganga?',
                  options: [
                    { id: 'a', textEn: 'Danapur', isCorrect: false },
                    { id: 'b', textEn: 'Fatuha', isCorrect: true },
                    { id: 'c', textEn: 'Munger', isCorrect: false },
                    { id: 'd', textEn: 'Barh', isCorrect: false }
                  ],
                  explanationEn: 'Punpun River, originating from the Palamu hills in Jharkhand, merges into the Ganga at Fatuha, about 25 km east of Patna.',
                  conceptTested: 'Southern Tributaries of Ganga'
                }
              ]
            },
            practiceQuestions: []
          },
          {
            id: 'geo-topic-bihar-agro-zones',
            chapterId: 'geo-ch-bihar-rivers-climate',
            topicNumber: 2,
            slug: 'bihar-agro-climatic-zones-and-crops',
            titleEn: 'Agro-Climatic Zones, Soils & GI Tagged Crops of Bihar',
            titleHi: 'बिहार के कृषि-जलवायु क्षेत्र, मिट्टियाँ एवं जीआई टैग प्राप्त उत्पाद',
            descriptionEn: 'Zones I, II, IIIA, IIIB, Terai soil, Balasundari soil, Karail-Kewal soil, Makhana, Shahi Litchi, and Katarni rice.',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: 'HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in TRE 1.0 (Bihar agro-climatic zones count: 3 main zones / 4 sub-zones) & TRE 3.0 (Shahi Litchi GI tag)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-bihar-agro-zones',
              topicId: 'geo-topic-bihar-agro-zones',
              titleEn: 'Agro-Ecological Classification & Soils of Bihar',
              titleHi: 'बिहार का कृषि भूगोल: मिट्टियाँ, जलवायु क्षेत्र एवं विशिष्ट फसलें',
              readingTimeMinutes: 18,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Differentiate the 3 Major Agro-Climatic Zones of Bihar (Zone I North-West, Zone II North-East, Zone III South Bihar divided into IIIA and IIIB).',
                'Identify major soils: Terai Soil (sub-Himalayan), Balasundari (older alluvial / calcareous), Karail-Kewal (heavy clay alluvial of South Bihar).',
                'Memorize Bihar\'s GI Tagged agricultural products: Mithila Makhana, Shahi Litchi of Muzaffarpur, Zardalu Mango of Bhagalpur, Katarni Rice, Magahi Paan.',
                'Understand Bihar\'s national ranking: #1 in Makhana (90% of world supply), #1 in Litchi, #3 in Maize and Vegetables.'
              ],
              introductionEn: '==Bihar is blessed with profound alluvial fertility, perennial rivers, and diverse agro-climatic zones that support multi-cropping year-round.==\n\nFrom the water-drenched wetlands of Mithila producing **90% of the world\'s Makhana (Fox Nuts)** to the lush orchards of Muzaffarpur exporting sweet **Shahi Litchi** to royal tables across the globe, Bihar is an agricultural powerhouse.',
              introductionHi: 'बिहार की जलोढ़ मिट्टी और अनुकूल जलवायु इसे कृषि के क्षेत्र में अग्रणी बनाती है। देश का 90% मखाना अकेले बिहार में उत्पादित होता है।',
              conceptSections: [
                {
                  title: '1. The 3 Major Agro-Climatic Zones of Bihar',
                  contentMarkdownEn: 'The Indian Council of Agricultural Research (ICAR) and Rajendra Prasad Central Agricultural University (Pusa) classify Bihar into **three broad Agro-Climatic Zones** (with Zone III subdivided into two):',
                  tableData: {
                    headers: ['Zone', 'Name / Region', 'Number of Districts', 'Annual Rainfall', 'Key Soil Type & Major Crops'],
                    rows: [
                      ['Zone I', 'North-West Alluvial Plains', '13 districts (W & E Champaran, Siwan, Saran, Sitamarhi, Muzaffarpur, Vaishali, etc.)', '1,040 – 1,450 mm', 'Calcareous Alluvial & Balasundari; Sugarcane, Paddy, Maize, Wheat, Shahi Litchi'],
                      ['Zone II', 'North-East Alluvial Plains', '8 districts (Purnea, Katihar, Saharsa, Madhepura, Supaul, Araria, Kishanganj, Khagaria)', '==1,200 – 1,700 mm (Highest)==', 'Sandy Loam & Clay Loam; Jute (Purnea leads), Paddy, Maize, ==Mithila Makhana=='],
                      ['Zone IIIA', 'South-East Alluvial Plains', '6 districts (Bhagalpur, Banka, Munger, Jamui, Lakhisarai, Sheikhpura)', '990 – 1,300 mm', 'Old Alluvial & Tal soils; Rice, Wheat, Pulses, Zardalu Mango, Katarni Rice'],
                      ['Zone IIIB', 'South-West Alluvial Plains', '11 districts (Patna, Nalanda, Bhojpur, Buxar, Rohtas, Kaimur, Gaya, Aurangabad, etc.)', '990 – 1,120 mm (Driest)', 'Karail-Kewal heavy clay & Red-yellow soils; Wheat, Gram, Pulses (Mokama Taal), Rice']
                    ]
                  },
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Highest vs Lowest Rainfall District in Bihar',
                    textEn: '==Kishanganj== receives the highest annual rainfall in Bihar (~1,600–2,000 mm), while ==Aurangabad / Gaya== receives the lowest annual rainfall (~990 mm).',
                    textHi: 'बिहार में सर्वाधिक वर्षा ==किशनगंज== जिले में होती है, जबकि सबसे कम वर्षा ==औरंगाबाद/गया== जिले में होती है।'
                  }
                },
                {
                  title: '2. Prestigious GI Tag Agricultural Products of Bihar',
                  contentMarkdownEn: 'Bihar holds Geographical Indication (GI) tags for distinct agricultural specialties:\n* ==Mithila Makhana (Fox Nut)==: Awarded GI tag in 2022. Grown in shallow wetlands/ponds across Madhubani, Darbhanga, Saharsa, Supaul, and Katihar. Bihar produces >85-90% of global supply.\n* ==Shahi Litchi of Muzaffarpur==: Famous for distinct aroma, sweet pulp, and thin seed; awarded GI tag in 2018.\n* ==Zardalu Mango of Bhagalpur==: Renowned for its golden hue and intoxicating fragrance.\n* ==Katarni Rice==: A highly aromatic, slender medium-grain native rice grown in Bhagalpur and Banka.\n* ==Magahi Paan==: Grown in Nawada, Gaya, Nalanda, and Aurangabad; famous for softness and non-fibrous leaf melting in mouth.\n* ==Marcha Rice (Mircha Chawal)==: Distinctive aromatic, small round grain resembling black pepper, awarded GI tag in 2023 from West Champaran.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Karail-Kewal Soil (कराइल-केवाल मिट्टी)',
                  definitionEn: 'Heavy clay alluvial soil of South Bihar Plains possessing high moisture retention capacity, ideal for rabi crops, pulses, and wheat.',
                  definitionHi: 'दक्षिण बिहार के मैदानों में पाई जाने वाली भारी चीका (क्ले) युक्त पुरानी जलोढ़ मिट्टी जो रबी फसलों और दलहन के लिए अत्यंत उपयुक्त है।'
                },
                {
                  term: 'Balasundari Soil (बलसुंदरी मिट्टी)',
                  definitionEn: 'Older calcareous alluvial soil found in southern parts of North Bihar plains (Muzaffarpur, Darbhanga, Saran) containing 30% lime, ideal for sugarcane and maize.',
                  definitionHi: 'उत्तर बिहार के दक्षिणी भाग में पाई जाने वाली चूनेदार पुरानी जलोढ़ मिट्टी जो गन्ना, मक्का और गेहूं के लिए प्रसिद्ध है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Agro-Climatic Zones Count Rule',
                  formulaOrRule: 'Total Broad Zones = 3 (Zone I, Zone II, Zone III) | Total Sub-zones = 4 (I, II, IIIA, IIIB)',
                  explanationEn: 'Essential distinction for BPSC multiple choice questions.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Highest Rainfall District',
                  problemEn: 'Which district of Bihar receives the maximum rainfall from the Southwest Monsoon?',
                  stepByStepSolutionEn: '1. Southwest monsoon enters Bihar from the northeast (Bay of Bengal branch).\n2. Kishanganj is situated at the northeastern extremity bordering West Bengal and Nepal.\n3. It receives first and heaviest orographic rainfall.\n4. Therefore, correct answer is Kishanganj.',
                  shortcutTrick: 'Max Rainfall in Bihar = Kishanganj!'
                }
              ],
              practicalApplications: ['Frequently tested in BPSC General Studies paper.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Patna receives the highest rainfall.',
                  whyWrongEn: 'Patna is in central Bihar receiving moderate rainfall (~1,000 mm). Kishanganj receives the highest (~1,800 mm).',
                  correctWayEn: 'Highest rainfall = Kishanganj; Lowest rainfall = Aurangabad/Gaya.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Which district leads in Jute production? (Purnea)',
                  'Mithila Makhana and Shahi Litchi GI tag',
                  'Number of agro-climatic zones in Bihar (3 main zones / 4 sub-zones)',
                  'Highest rainfall district (Kishanganj)'
                ],
                commonDistractorTraps: [
                  'Confusing Zone II (North-East: Purnea/Kishanganj) with Zone I (North-West: Champaran/Muzaffarpur)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.42 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.43 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Bihar is divided into 3 Agro-Climatic Zones: Zone I (North-West, 13 districts), Zone II (North-East, 8 districts), Zone III (South Bihar, 17 districts split into IIIA & IIIB).',
                'Zone II (North-East) receives highest rainfall; leads in Jute and Makhana.',
                'Purnea is the leading producer of Jute in Bihar (2nd largest in India after West Bengal).',
                'Kishanganj receives highest rainfall; Aurangabad receives lowest rainfall.',
                'Mithila Makhana, Shahi Litchi (Muzaffarpur), Zardalu Mango (Bhagalpur), Katarni Rice, Magahi Paan, and Marcha Rice (W. Champaran) hold GI Tags.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-geo-agro-1',
                  questionEn: 'Which district of Bihar is the leading producer of Jute, contributing the largest share to the state\'s fiber production?',
                  options: [
                    { id: 'a', textEn: 'Patna', isCorrect: false },
                    { id: 'b', textEn: 'Purnea', isCorrect: true },
                    { id: 'c', textEn: 'Gaya', isCorrect: false },
                    { id: 'd', textEn: 'Muzaffarpur', isCorrect: false }
                  ],
                  explanationEn: 'Purnea district in North-East Bihar (Zone II) is the leading jute producing district of Bihar and second largest in India.',
                  conceptTested: 'Agro-Economy of Bihar'
                },
                {
                  id: 'kc-geo-agro-2',
                  questionEn: 'Which district in Bihar receives the highest annual rainfall from the Southwest Monsoon?',
                  options: [
                    { id: 'a', textEn: 'Kishanganj', isCorrect: true },
                    { id: 'b', textEn: 'Aurangabad', isCorrect: false },
                    { id: 'c', textEn: 'Patna', isCorrect: false },
                    { id: 'd', textEn: 'Rohtas', isCorrect: false }
                  ],
                  explanationEn: 'Kishanganj, situated in the northeastern corner of Bihar near the foothills of the Himalayas, receives the highest annual rainfall (over 1,600 mm).',
                  conceptTested: 'Climate of Bihar'
                }
              ]
            },
            practiceQuestions: []
          }
        ]
      },

      // CHAPTER 2: PROTECTED AREAS, NATIONAL PARKS & ENVIRONMENT IN BIHAR
      {
        id: 'geo-ch-bihar-environment-parks',
        subjectKey: 'INDIAN_GEOGRAPHY',
        chapterNumber: 2,
        slug: 'valmiki-national-park-and-wildlife-bihar',
        titleEn: 'National Parks, Wildlife Sanctuaries & Ramsar Sites of Bihar',
        titleHi: 'बिहार के राष्ट्रीय उद्यान, वन्यजीव अभयारण्य एवं रामसर स्थल',
        descriptionEn: 'Valmiki National Park & Tiger Reserve, Kanwar Lake Ramsar Site, Vikramshila Dolphin Sanctuary, and Bhimbandh.',
        descriptionHi: 'वाल्मीकि राष्ट्रीय उद्यान एवं टाइगर रिजर्व, कावर ताल रामसर स्थल, विक्रमशिला गांगेय डॉल्फिन अभयारण्य एवं भीमबांध।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'geo-topic-valmiki-kanwar',
            chapterId: 'geo-ch-bihar-environment-parks',
            topicNumber: 1,
            slug: 'valmiki-tiger-reserve-and-kanwar-lake',
            titleEn: 'Valmiki Tiger Reserve, Kanwar Lake & Wildlife Sanctuaries of Bihar',
            titleHi: 'वाल्मीकि टाइगर रिजर्व, कावर झील एवं बिहार के प्रमुख वन्यजीव अभयारण्य',
            descriptionEn: 'Bihar\'s only National Park (Valmiki), first Ramsar site (Kanwar Lake, Begusarai), and Gangetic Dolphin sanctuary (Bhagalpur).',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Repeatedly asked in TRE 1.0 (Kanwar Lake location: Begusarai), TRE 2.0 (Only national park: Valmiki), TRE 3.0 (Dolphin sanctuary)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-valmiki-kanwar',
              topicId: 'geo-topic-valmiki-kanwar',
              titleEn: 'Ecological Treasures of Bihar: National Parks, Wetlands & Sanctuaries',
              titleHi: 'बिहार की प्राकृतिक संपदा: राष्ट्रीय उद्यान, आर्द्रभूमियाँ एवं वन्यजीव अभयारण्य',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify Valmiki National Park in West Champaran as Bihar\'s ONLY National Park and Tiger Reserve.',
                'Master Kanwar Lake (Kabartal) in Begusarai as Bihar\'s FIRST Ramsar Wetland of International Importance (Asia\'s largest freshwater ox-bow lake).',
                'Locate the Vikramshila Gangetic Dolphin Sanctuary in Bhagalpur (India\'s only sanctuary for the National Aquatic Animal).',
                'Survey key wildlife sanctuaries: Bhimbandh (Munger), Kaimur Sanctuary (Rohtas/Kaimur - proposed 2nd Tiger Reserve), Rajgir Wildlife Sanctuary (Nalanda), Gautam Buddha Sanctuary (Gaya).'
              ],
              introductionEn: '==Bihar is home to rare biodiversity: the royal Bengal tiger roaming the foothills of the Himalayas in West Champaran, millions of migratory Siberian birds wintering in Begusarai, and the blind Gangetic river dolphin leaping in the holy waters of Bhagalpur.==\n\nFor BPSC aspirants, mastering the exact districts, sanctuary names, and wildlife species is essential for guaranteed marks in General Studies.',
              introductionHi: 'बिहार में पश्चिम चंपारण के शिवालिक तराई से लेकर भागलपुर में गंगा की लहरों तक समृद्ध जैव विविधता पाई जाती है। वाल्मीकि टाइगर रिजर्व, कावर ताल एवं विक्रमशिला डॉल्फिन अभयारण्य परीक्षा की दृष्टि से अति-महत्वपूर्ण हैं।',
              conceptSections: [
                {
                  title: '1. Master Table of Protected Areas in Bihar',
                  contentMarkdownEn: 'Memorize this complete sanctuary and wetland table for BPSC exams:',
                  tableData: {
                    headers: ['Sanctuary / Protected Area', 'District', 'Key Wildlife / Ecological Significance'],
                    rows: [
                      ['==Valmiki National Park & Tiger Reserve==', '==West Champaran==', '==Bihar\'s ONLY National Park==; Royal Bengal Tiger, One-horned Rhino, Gandak river basin'],
                      ['==Kanwar Lake (Kabartal) Ramsar Site==', '==Begusarai==', '==Bihar\'s FIRST Ramsar Wetland== (Designated 2020); Asia\'s largest freshwater ox-bow lake, Siberian migratory birds'],
                      ['==Vikramshila Gangetic Dolphin Sanctuary==', '==Bhagalpur==', 'India\'s ONLY protected sanctuary for the National Aquatic Animal (Gangetic Dolphin / Platanista gangetica, locally called *Susu*) stretching 60 km from Sultanganj to Kahalgaon'],
                      ['Kaimur Wildlife Sanctuary', 'Kaimur & Rohtas', 'Largest sanctuary in Bihar by area (1,342 sq km); proposed as Bihar\'s ==2nd Tiger Reserve=='],
                      ['Bhimbandh Wildlife Sanctuary', 'Munger', 'Famous for natural hot water springs (Sita Kund, Rishikund), leopards, tigers, birds'],
                      ['Gautam Buddha Wildlife Sanctuary', 'Gaya (bordering Jharkhand)', 'Tigers, leopards, chital; sacred Buddhist pilgrimage surroundings'],
                      ['Rajgir (Pant) Wildlife Sanctuary', 'Nalanda', 'Surrounded by five holy hills; famous for glass sky bridge and Nature Safari'],
                      ['Nagi Dam & Nakti Dam Bird Sanctuaries', 'Jamui', 'Wintering habitat for Bar-headed Geese; hosted Bihar\'s first state bird festival *Kalrav* in 2021'],
                      ['Kusheshwar Asthan Bird Sanctuary', 'Darbhanga', 'Wintering wetland for migratory waterfowls across 14 villages'],
                      ['Sanjay Gandhi Jaivik Udyan', 'Patna', 'Premier biological park and rhino breeding center in Asia']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Examiner Trap: Only National Park vs 2nd Tiger Reserve',
                    textEn: 'Bihar has only **ONE National Park: Valmiki National Park** (West Champaran). The Bihar State Wildlife Board has approved **Kaimur Wildlife Sanctuary** to become Bihar\'s **second Tiger Reserve**!',
                    textHi: 'बिहार का एकमात्र राष्ट्रीय उद्यान वाल्मीकि राष्ट्रीय उद्यान (पश्चिम चंपारण) है। कैमूर वन्यजीव अभयारण्य को बिहार का दूसरा टाइगर रिजर्व घोषित करने की प्रक्रिया जारी है।'
                  }
                },
                {
                  title: '2. Kanwar Lake: Asia\'s Largest Freshwater Ox-Bow Wetland',
                  contentMarkdownEn: '### The Legend of Kabartal (Begusarai)\n* **Formation**: Formed as an **ox-bow lake (गोखुर झील)** when the meandering **Burhi Gandak River** cut off its loop.\n* **Ramsar Designation**: In **July 2020**, Kanwar Lake was designated as **Ramsar Site No. 2436**, becoming Bihar\'s first internationally recognized wetland.\n* **Avian Haven**: Every winter, over **106 species of migratory birds** travel over 5,000 kilometers from Central Asia and Siberia (including the endangered Oriental White-backed Vulture and Greater Spotted Eagle).'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Ramsar Site (रामसर स्थल)',
                  definitionEn: 'A wetland site designated to be of international importance under the UNESCO Ramsar Convention on Wetlands (signed in Ramsar, Iran in 1971). Kanwar Lake in Begusarai is Bihar\'s first Ramsar site.',
                  definitionHi: '1971 के रामसर समझौते के तहत अंतरराष्ट्रीय महत्व की घोषित आर्द्रभूमि। बेगूसराय का कावर ताल बिहार का पहला रामसर स्थल है।'
                },
                {
                  term: 'Gangetic Dolphin / Susu (गांगेय डॉल्फिन)',
                  definitionEn: 'India\'s National Aquatic Animal (Platanista gangetica), a blind freshwater river dolphin that navigates by ultrasonic echolocation, protected in Vikramshila Sanctuary (Bhagalpur).',
                  definitionHi: 'भारत का राष्ट्रीय जलीय जीव जो मीठे पानी में रहता है और पराश्रव्य ध्वनि (इकोलोकेशन) से शिकार करता है। विक्रमशिला (भागलपुर) में इसका संरक्षित क्षेत्र है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Bihar Ecological Triad Rule',
                  formulaOrRule: 'Only NP = Valmiki (W. Champaran) | 1st Ramsar = Kanwar (Begusarai) | Dolphin Sanctuary = Vikramshila (Bhagalpur)',
                  explanationEn: 'The three most critical environmental landmarks in Bihar.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Kanwar Lake Location',
                  problemEn: 'Kanwar Lake (Kabartal), Bihar\'s first Ramsar Wetland, is situated in which district?',
                  stepByStepSolutionEn: '1. Kanwar Lake is Asia\'s largest freshwater ox-bow lake.\n2. Designated as a Ramsar site in 2020.\n3. Located in Begusarai district of Bihar.\n4. Therefore, correct answer is Begusarai.',
                  shortcutTrick: 'Kanwar Lake = Begusarai!'
                }
              ],
              practicalApplications: ['Essential recurring question across all BPSC Teacher Recruitment Examinations.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Valmiki Tiger Reserve is in East Champaran.',
                  whyWrongEn: 'Valmiki National Park and Tiger Reserve is located exclusively in ==West Champaran== district along the Nepal border.',
                  correctWayEn: 'Valmiki = West Champaran (NOT East Champaran).'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Where is Kanwar Lake Ramsar site located? (Begusarai)',
                  'Where is Vikramshila Gangetic Dolphin Sanctuary? (Bhagalpur)',
                  'Only National Park of Bihar (Valmiki National Park in West Champaran)',
                  'Proposed 2nd Tiger Reserve of Bihar (Kaimur)'
                ],
                commonDistractorTraps: [
                  'Confusing Begusarai (Kanwar Lake) with Darbhanga (Kusheshwar Asthan)',
                  'Confusing Jamui (Nagi-Nakti) with Munger (Bhimbandh)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (24-08-2023, Shift 1, Q.43 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 1, Q.44 Series A)',
                  'BPSC TRE 3.0 (15-03-2024, Shift 1, Q.42 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Bihar has only ONE National Park: Valmiki National Park (West Champaran).',
                'Kanwar Lake (Kabartal) in Begusarai: Bihar\'s first Ramsar site (2020), Asia\'s largest freshwater ox-bow lake.',
                'Vikramshila Gangetic Dolphin Sanctuary: Bhagalpur (Sultanganj to Kahalgaon, 60 km).',
                'Kaimur Wildlife Sanctuary: Largest sanctuary by area, proposed 2nd Tiger Reserve of Bihar.',
                'Bhimbandh Wildlife Sanctuary in Munger: Famous for hot water springs.',
                'Nagi Dam & Nakti Dam Bird Sanctuaries in Jamui: Famous for Bar-headed Geese and Kalrav Bird Festival.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-geo-env-1',
                  questionEn: 'Kanwar Lake (Kabartal), designated as Bihar\'s first Ramsar Wetland site, is located in which district?',
                  options: [
                    { id: 'a', textEn: 'Darbhanga', isCorrect: false },
                    { id: 'b', textEn: 'Begusarai', isCorrect: true },
                    { id: 'c', textEn: 'Katihar', isCorrect: false },
                    { id: 'd', textEn: 'Khagaria', isCorrect: false }
                  ],
                  explanationEn: 'Kanwar Lake (Kabartal) is located in Begusarai district and was declared Bihar\'s first Ramsar site in July 2020.',
                  conceptTested: 'Ramsar Wetlands of Bihar'
                },
                {
                  id: 'kc-geo-env-2',
                  questionEn: 'India\'s only protected sanctuary for the endangered Gangetic River Dolphin is located in which district of Bihar?',
                  options: [
                    { id: 'a', textEn: 'Patna', isCorrect: false },
                    { id: 'b', textEn: 'Bhagalpur (Vikramshila)', isCorrect: true },
                    { id: 'c', textEn: 'Buxar', isCorrect: false },
                    { id: 'd', textEn: 'Vaishali', isCorrect: false }
                  ],
                  explanationEn: 'The Vikramshila Gangetic Dolphin Sanctuary is located in Bhagalpur district, spanning 60 km of the River Ganga from Sultanganj to Kahalgaon.',
                  conceptTested: 'Wildlife Conservation in Bihar'
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
