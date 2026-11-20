import { LMSSubject } from '@/types/bpscLms';
import { BPSC_ENGLISH_COMPLETE_SUBJECT } from './englishCourse';
import { BPSC_HINDI_SUBJECTS } from './hindiCourse';

export const BPSC_LANGUAGE_SUBJECTS: LMSSubject[] = [
  // =========================================================================
  // SUBJECT 1: ENGLISH LANGUAGE (MASTER 33-CHAPTER DIGITAL TEXTBOOK)
  // =========================================================================
  BPSC_ENGLISH_COMPLETE_SUBJECT,

  // =========================================================================
  // SUBJECT 2: HINDI LANGUAGE (सामान्य हिंदी - 22 अंक अर्हक)
  // =========================================================================
  {
    key: 'HINDI_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'General Hindi Grammar & Composition',
    displayNameHi: 'सामान्य हिंदी व्याकरण एवं रचना',
    iconName: 'Languages',
    descriptionEn: 'Official 22-mark Hindi syllabus for BPSC TRE: वर्ण विचार, संधि, समास, उपसर्ग, प्रत्यय, तत्सम-तद्भव, वाक्य शुद्धि, मुहावरे with authentic TRE 1.0, 2.0, 3.0 PYQs.',
    descriptionHi: 'BPSC TRE भाषा पत्र (न्यूनतम 9 अंक अर्हक) में हिंदी वर्णमाला, उच्चारण स्थान, संधि, समास, मुहावरे के प्रामाणिक प्रश्न।',
    chapters: [
      {
        id: 'hin-ch-varna',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 1,
        slug: 'varna-vichar',
        titleEn: 'Phonology & Sound Classification (वर्ण विचार)',
        titleHi: 'वर्ण विचार एवं उच्चारण स्थान',
        descriptionEn: 'Places of articulation (कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य), अल्पप्राण-महाप्राण, and अघोष-सघोष classification.',
        descriptionHi: 'स्वर (11), व्यंजन, उच्चारण स्थान के सूत्र (इचुयशानां तालु), तथा अल्पप्राण-महाप्राण की पहचान।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 35,
        topics: [
          {
            id: 'hin-topic-varnamala',
            chapterId: 'hin-ch-varna',
            topicNumber: 1,
            slug: 'varna-classification',
            titleEn: 'Hindi Alphabet Classification & Pronunciation',
            titleHi: 'हिंदी वर्णमाला वर्गीकरण एवं उच्चारण स्थान',
            descriptionEn: 'Articulation places (तालु for \'च\' वर्ग, मूर्धा for \'ष\', दंतोष्ठ्य for \'व\') and Alpaprana/Mahaprana formulas.',
            descriptionHi: '\'श\' तालव्य, \'ष\' मूर्धन्य, \'स\' दंत्य, तथा \'व\' दंतोष्ठ्य (BPSC TRE में बार-बार पूछे जाने वाले सूत्र)।',
            estimatedMinutes: 18,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-hin-varnamala',
              topicId: 'hin-topic-varnamala',
              titleEn: 'Hindi Varna Vichar for BPSC TRE',
              titleHi: 'BPSC TRE हेतु वर्ण विचार की संपूर्ण प्रामाणिक गाइड',
              readingTimeMinutes: 10,
              difficulty: 'BEGINNER',
              learningObjectives: [
                'उच्चारण स्थान (कंठ, तालु, मूर्धा, दंत, ओष्ठ) के आधार पर वर्णों की अचूक पहचान।',
                'अल्पप्राण (1, 3, 5 + अंतःस्थ) एवं महाप्राण (2, 4 + ऊष्म) का वर्गीकरण।',
                'अघोष (1, 2 + श, ष, स) एवं सघोष (3, 4, 5 + य, र, ल, व, ह + सभी स्वर) में भेद समझना।',
                '\'व\' (दंतोष्ठ्य) और \'ष\' (मूर्धन्य) के उच्चारण स्थान को कंठस्थ करना।'
              ],
              introductionEn: 'Varna Vichar and places of articulation form the opening section of BPSC Hindi papers. Candidates must master Sanskrit grammatical aphorisms (such as Ichuyashanam Talu) to correctly identify phonetic origins.',
              introductionHi: 'BPSC TRE भाषा पत्र में हिंदी के 22 प्रश्नों में से 2 से 3 प्रश्न वर्ण विचार और उच्चारण स्थान पर होते हैं। \'च\' वर्ग का तालव्य होना और \'ष\' का मूर्धन्य होना आयोग के सबसे पसंदीदा प्रश्न हैं।',
              conceptSections: [
                {
                  title: '1. उच्चारण स्थान की संपूर्ण तालिका',
                  contentMarkdownEn: 'मुख के जिस अवयव से ध्वनि निकलती है, वही उसका उच्चारण स्थान है:',
                  tableData: {
                    headers: ['उच्चारण स्थान', 'स्वर', 'व्यंजन वर्ग', 'अन्य वर्ण', 'शास्त्रीय सूत्र'],
                    rows: [
                      ['कंठ्य (कंठ)', 'अ, आ', 'क, ख, ग, घ, ङ', 'ह, विसर्ग (:)', 'अकुहविसर्जनीयानां कण्ठः'],
                      ['तालव्य (तालु)', 'इ, ई', 'च, छ, ज, झ, ञ', 'य, श', 'इचुयशानां तालु'],
                      ['मूर्धन्य (मूर्धा)', 'ऋ', 'ट, ठ, ड, ढ, ण', 'र, ष, ड़, ढ़', 'ऋटुरषाणां मूर्धा'],
                      ['दंत्य (दाँत)', '—', 'त, थ, द, ध, न', 'ल, स', 'लृतुलसानां दन्ताः'],
                      ['ओष्ठ्य (होंठ)', 'उ, ऊ', 'प, फ, ब, भ, म', '—', 'उपूपध्मानीयानाम् ओष्ठौ'],
                      ['दंतोष्ठ्य', '—', '—', 'व', 'वकारस्य दन्तोष्ठम्']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'महाप्राण व्यंजन',
                  definitionEn: 'Aspirated consonants pronounced with a forceful puff of air (Columns 2, 4 + sha, sha, sa, ha).',
                  definitionHi: 'जिन वर्णों के उच्चारण में अधिक श्वास वायु निकलती है और हकार जैसी ध्वनि होती है (प्रत्येक वर्ग का दूसरा व चौथा वर्ण)।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'अल्पप्राण-महाप्राण ट्रिक',
                  formulaOrRule: 'अल्पप्राण = विषम (1, 3, 5) | महाप्राण = सम (2, 4)',
                  explanationEn: 'Columns 1, 3, 5 are Alpaprana; Columns 2, 4 are Mahaprana.',
                  explanationHi: 'क, ग, ङ अल्पप्राण हैं; ख, घ महाप्राण हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: '\'च\' वर्ग की ध्वनियों का उच्चारण स्थान निम्नलिखित में से क्या है? (A) कंठ (B) तालु (C) मूर्धा (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. सूत्र: "इचुयशानां तालु" -> इ, ई, च-वर्ग (च, छ, ज, झ, ञ), य, श का उच्चारण स्थान तालु है।\n2. Official BPSC TRE 1.0 Key: Option (B) तालु।',
                  shortcutTrick: 'क-वर्ग = कंठ, च-वर्ग = तालु, ट-वर्ग = मूर्धा।'
                }
              ],
              practicalApplications: [
                'Orthographic accuracy, phonetics, and language instruction in secondary schools.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: '\'ह\' को अघोष ध्वनि मानना।',
                  whyWrongEn: '\'ह\' ऊष्म व्यंजन होते हुए भी सघोष (घोष) है, जबकि श, ष, स अघोष हैं।',
                  correctWayEn: '\'ह\' सघोष और महाप्राण है।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  '\'च\' वर्ग का उच्चारण स्थान (तालु - TRE 1.0 Q.03).',
                  '\'व\' का उच्चारण स्थान (दंतोष्ठ्य).',
                  'महाप्राण वर्ण की पहचान (ख, घ, छ, झ).'
                ],
                commonDistractorTraps: [
                  'तालव्य \'श\' और मूर्धन्य \'ष\' में भ्रम।'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.03 Series A)'
                ]
              },
              quickRevisionPoints: [
                'कंठ्य: क-वर्ग, अ, आ, ह।',
                'तालव्य: च-वर्ग, इ, ई, य, श।',
                'मूर्धन्य: ट-वर्ग, ऋ, र, ष।',
                'दंतोष्ठ्य: केवल \'व\'।',
                'महाप्राण = प्रत्येक वर्ग का 2रा और 4था वर्ण।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-v-1',
                  questionEn: 'हिंदी वर्णमाला में \'व\' वर्ण का उच्चारण स्थान कौन-सा है?',
                  questionHi: 'हिंदी वर्णमाला में \'व\' वर्ण का उच्चारण स्थान कौन-सा है?',
                  options: [
                    { id: 'A', textEn: 'ओष्ठ्य', isCorrect: false },
                    { id: 'B', textEn: 'दंतोष्ठ्य', isCorrect: true },
                    { id: 'C', textEn: 'कंठतालव्य', isCorrect: false },
                    { id: 'D', textEn: 'कंठोष्ठ्य', isCorrect: false }
                  ],
                  explanationEn: '\'व\' का उच्चारण ऊपरी दाँत और निचले होंठ के स्पर्श से होता है, अतः इसका उच्चारण स्थान \'दंतोष्ठ्य\' है।',
                  conceptTested: '\'व\' का उच्चारण स्थान'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-pyq-1',
                topicId: 'hin-topic-varnamala',
                chapterId: 'hin-ch-varna',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'च\' वर्ग के वर्णों का उच्चारण स्थान निम्नलिखित में से कौन-सा है?',
                questionTextHi: '\'च\' वर्ग के वर्णों का उच्चारण स्थान निम्नलिखित में से कौन-सा है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'कंठ (Throat)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'तालु (Palate)', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'मूर्धा (Retroflex)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'व्याकरण सूत्र "इचुयशानां तालु" के अनुसार इ, ई, च-वर्ग (च, छ, ज, झ, ञ), य और श का उच्चारण स्थान तालु (तालव्य) होता है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 3,
                sourceDocumentRef: 'BPSC Advt 26/2023 Language Paper Series A, Q.3 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 2: संधि (स्वर संधि, व्यंजन संधि एवं विसर्ग संधि)
      // -----------------------------------------------------------------------
      {
        id: 'hin-ch-sandhi',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 2,
        slug: 'sandhi-prakar',
        titleEn: 'Sandhi Rules & Word Separation (संधि एवं विच्छेद)',
        titleHi: 'संधि के नियम एवं विच्छेद (स्वर, व्यंजन, विसर्ग)',
        descriptionEn: 'Five types of Swar Sandhi (दीर्घ, गुण, वृद्धि, यण, अयादि), Vyanjan Sandhi, and Visarga Sandhi with high-frequency BPSC words.',
        descriptionHi: 'दीर्घ, गुण, वृद्धि, यण और अयादि स्वर संधि के सूत्र; पावक, पवन, यद्यपि, सदैव, महर्षि का सटीक संधि-विच्छेद।',
        totalPracticeQuestions: 18,
        totalEstimatedMinutes: 35,
        topics: [
          {
            id: 'hin-topic-swar-sandhi',
            chapterId: 'hin-ch-sandhi',
            topicNumber: 1,
            slug: 'swar-sandhi-rules',
            titleEn: 'Swar Sandhi Rules & Identification (स्वर संधि)',
            titleHi: 'स्वर संधि के भेद एवं नियम',
            descriptionEn: 'Master Yan Sandhi (इ/ई + असमान स्वर = य) and Ayadi Sandhi (ए/ऐ/ओ/औ + स्वर = अय्/आय्/अव्/आव्).',
            descriptionHi: 'यण संधि (यदि + अपि = यद्यपि) तथा अयादि संधि (पो + अन = पवन, पौ + अक = पावक) के प्रामाणिक नियम।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-hin-sandhi',
              topicId: 'hin-topic-swar-sandhi',
              titleEn: 'Swar Sandhi Rules for BPSC TRE',
              titleHi: 'BPSC TRE हेतु स्वर संधि के 5 भेद एवं पहचान सूत्र',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'स्वर संधि के 5 मुख्य भेदों (दीर्घ, गुण, वृद्धि, यण, अयादि) के नियमों को समझना।',
                'अयादि संधि में "पो + अन = पवन" तथा "पौ + अक = पावक" के सूक्ष्म अंतर को पहचानना।',
                'यण संधि के सूत्र (इ/ई $\\rightarrow$ य्, उ/ऊ $\\rightarrow$ व्, ऋ $\\rightarrow$ र्) को कंठस्थ करना।',
                'गुण (ए, ओ, अर्) और वृद्धि (ऐ, औ) संधि की तुरंत पहचान के ट्रिक्स सीखना।'
              ],
              introductionEn: 'Sandhi is a mandatory topic in the 22-mark Hindi qualifying section of BPSC TRE. BPSC frequently asks tricky questions on Ayadi and Yan sandhi where minor matra differences determine the answer.',
              introductionHi: 'BPSC TRE भाषा अर्हता खंड (हिंदी) में संधि से प्रत्येक पाली में 2-3 प्रश्न अवश्य पूछे जाते हैं। आयोग विशेष रूप से अयादि संधि (पवन, पावक, नयन) और यण संधि (यद्यपि, इत्यादि, स्वागत) से प्रश्न पूछता है।',
              conceptSections: [
                {
                  title: '1. स्वर संधि के 5 भेद एवं पहचान सूत्र',
                  contentMarkdownEn: 'दो स्वरों के मेल से होने वाले विकार (परिवर्तन) को **स्वर संधि** कहते हैं। इसके 5 भेद होते हैं:\n\n1. **दीर्घ संधि ($अ+अ=आ, इ+इ=ई, उ+उ=ऊ$):**\n   * विद्या + आलय = विद्यालय | गिरि + ईश = गिरीश | भानु + उदय = भानूदय\n2. **गुण संधि ($अ/आ + इ/ई = ए, अ/आ + उ/ऊ = ओ, अ/आ + ऋ = अर्$):**\n   * देव + इंद्र = देवेंद्र | महा + उत्सव = महोत्सव | महा + ऋषि = महर्षि\n3. **वृद्धि संधि ($अ/आ + ए/ऐ = ऐ, अ/आ + ओ/औ = औ$):**\n   * सदा + एव = सदैव | एक + एक = एकैक | महा + औषधि = महौषधि\n4. **यण संधि ($इ/ई + स्वर = य्, उ/ऊ + स्वर = व्, ऋ + स्वर = र्$):**\n   * यदि + अपि = **यद्यपि** | इति + आदि = **इत्यादि** | सु + आगत = **स्वागत**\n5. **अयादि संधि ($ए \\rightarrow अय्, ऐ \\rightarrow आय्, ओ \\rightarrow अव्, औ \\rightarrow आव्$):**\n   * ने + अन = नयन | गै + अक = गायक | **पो + अन = पवन** | **पौ + अक = पावक**',
                  tableData: {
                    headers: ['संधि का भेद', 'नियम / पहचान', 'उदाहरण', 'BPSC TRE आवृत्ति'],
                    rows: [
                      ['दीर्घ संधि', 'बड़ी मात्रा (आ, ई, ऊ)', 'देवालय, कवींद्र, भानूदय', 'मध्यम'],
                      ['गुण संधि', 'एक चोटी की मात्रा (ए, ओ, अर्)', 'महेंद्र, सूर्योदय, देवर्षि', 'उच्च'],
                      ['वृद्धि संधि', 'दो चोटी की मात्रा (ऐ, औ)', 'सदैव, वनौषधि, तथैव', 'उच्च'],
                      ['यण संधि', 'य/व/र से पहले आधा अक्षर', 'यद्यपि, स्वागत, अन्वय', 'अति उच्च (TRE 1.0)'],
                      ['अयादि संधि', 'अय्, आय्, अव्, आव् का उच्चारण', 'पवन, पावक, नयन, भवन', 'सर्वोच्च (TRE 2.0)']
                    ]
                  }
                },
                {
                  title: '2. अयादि संधि: \'पवन\' vs. \'पावक\' का सूक्ष्म अंतर',
                  contentMarkdownEn: '* **पवन = पो + अन:**\n  * यहाँ \'प\' में ह्रस्व \'ओ\' है: $ओ + अ = अव् + अ = अव$ $\\rightarrow$ प् + अव् + न = पवन।\n* **पावक = पौ + अक:**\n  * यहाँ \'प\' में दीर्घ \'औ\' है: $औ + अ = आव् + अ = आव$ $\\rightarrow$ प् + आव् + क = पावक।\n* **नियम:** ओ से \'अव\' बनता है, औ से \'आव\' बनता है।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'संधि (Sandhi)',
                  definitionEn: 'The phonetic union or transformation occurring at the juncture of two adjoining sounds.',
                  definitionHi: 'दो समीपवर्ती वर्णों के मेल से जो विकार (परिवर्तन) उत्पन्न होता है, उसे संधि कहते हैं।'
                },
                {
                  term: 'अयादि संधि (Ayadi Sandhi)',
                  definitionEn: 'Transformation of e, ai, o, au followed by another vowel into ay, aay, av, aav respectively.',
                  definitionHi: 'जब ए, ऐ, ओ, औ के बाद कोई भिन्न स्वर आए, तो क्रमशः अय्, आय्, अव्, आव् हो जाता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'अयादि संधि सूत्र',
                  formulaOrRule: 'ओ + अ = अव (पवन) | औ + अक = आवक (पावक) | ने + अन = नयन',
                  explanationEn: 'Single vowel sound creates "av", double matra creates "aav".',
                  explanationHi: 'एक मात्रा (ओ) से अव बनता है, दो मात्रा (औ) से आव बनता है।'
                },
                {
                  title: 'यण संधि पहचान ट्रिक',
                  formulaOrRule: 'य, व, र से पहले आधा व्यंजन = 99% यण संधि',
                  explanationEn: 'Half consonant before ya, va, ra indicates Yan Sandhi (e.g. यद्यपि, स्वागत).',
                  explanationHi: 'यदि \'य\' या \'व\' से पहले आधा वर्ण हो (जैसे स्व- में आधा स, यद्य- में आधा द), तो वह यण संधि होती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: '\'पवन\' शब्द का सही संधि-विच्छेद कौन-सा है? (A) पो + अन (B) पौ + अन (C) प + वन (D) उपर्युक्त में से एक से अधिक (E) उपर्युक्त में से कोई नहीं',
                  stepByStepSolutionEn: '1. शब्द है "पवन" -> इसका उच्चारण "प् + अव् + न" है।\n2. "अव्" विकार उत्पन्न होता है "ओ + अ" से।\n3. अतः सही संधि विच्छेद होगा: पो + अन = पवन।\n4. यदि "पौ + अन" होता तो बनता "पावन"।\n5. BPSC आधिकारिक उत्तर कुंजी: Option (A) पो + अन।',
                  shortcutTrick: 'पवन में "अव" है -> "पो + अन"। पावन में "आव" है -> "पौ + अन"।'
                }
              ],
              practicalApplications: [
                'हिंदी भाषा की शुद्ध वर्तनी, शब्द-रचना, और आधिकारिक पत्राचार।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Confusing "पौ + अन" with "पो + अन".',
                  whyWrongEn: 'पौ + अन yields पावन, whereas पो + अन yields पवन.',
                  correctWayEn: 'पवन = पो + अन | पावन = पौ + अन।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'पवन का संधि-विच्छेद (TRE 2.0 Q.15).',
                  'यद्यपि का संधि-विच्छेद (TRE 1.0 Q.11).',
                  'सदैव (सदा + एव) में वृद्धि संधि की पहचान।'
                ],
                commonDistractorTraps: [
                  'Selecting "पौ + अन" instead of "पो + अन" for पवन.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.15 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.11 Series A)'
                ]
              },
              quickRevisionPoints: [
                'दीर्घ: अ+अ=आ, इ+इ=ई, उ+उ=ऊ (विद्यालय, कवींद्र)।',
                'गुण: अ/आ + इ/ई = ए, अ/आ + उ/ऊ = ओ (देवेंद्र, सूर्योदय)।',
                'वृद्धि: अ/आ + ए/ऐ = ऐ, अ/आ + ओ/औ = औ (सदैव, महौषध)।',
                'यण: इ/ई -> य्, उ/ऊ -> व् (यद्यपि = यदि + अपि, स्वागत = सु + आगत)।',
                'अयादि: ओ -> अव् (पवन = पो + अन), औ -> आव् (पावक = पौ + अक)।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-sandhi-1',
                  questionEn: '\'इत्यादि\' शब्द का सही संधि-विच्छेद क्या होगा?',
                  questionHi: '\'इत्यादि\' शब्द का सही संधि-विच्छेद क्या होगा?',
                  options: [
                    { id: 'A', textEn: 'इत + आदि', isCorrect: false },
                    { id: 'B', textEn: 'इति + आदि', isCorrect: true },
                    { id: 'C', textEn: 'इत्या + दि', isCorrect: false },
                    { id: 'D', textEn: 'इत्य + आदि', isCorrect: false }
                  ],
                  explanationEn: 'इति + आदि = इत्यादि (यण संधि: इ + आ = या)।',
                  conceptTested: 'यण स्वर संधि'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-pyq-sandhi-1',
                topicId: 'hin-topic-swar-sandhi',
                chapterId: 'hin-ch-sandhi',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'पवन\' शब्द का सही संधि-विच्छेद निम्नलिखित में से कौन-सा है?',
                questionTextHi: '\'पवन\' शब्द का सही संधि-विच्छेद निम्नलिखित में से कौन-सा है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'पो + अन', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'पौ + अन', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'प + वन', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'अयादि संधि के नियमानुसार "ओ + अ = अव् + अ = अव" होता है। अतः "पो + अन = पवन"। "पौ + अन" से "पावन" बनता है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 15,
                sourceDocumentRef: 'BPSC Advt 27/2023 Language Paper Series A, Q.15 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-hin-pyq-sandhi-2',
                topicId: 'hin-topic-swar-sandhi',
                chapterId: 'hin-ch-sandhi',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'यद्यपि\' शब्द का सही संधि-विच्छेद क्या होगा?',
                questionTextHi: '\'यद्यपि\' शब्द का सही संधि-विच्छेद क्या होगा?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'यदि + अपि', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'यद्य + अपि', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'यद + अपि', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'यण संधि के नियम के अनुसार "इ + अ = य् + अ = य" होता है। अतः "यदि + अपि = यद्यपि"।',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 11,
                sourceDocumentRef: 'BPSC Advt 26/2023 Language Paper Series A, Q.11 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 3: समास (समास के 6 भेद एवं विग्रह)
      // -----------------------------------------------------------------------
      {
        id: 'hin-ch-samass',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 3,
        slug: 'samas-bhed',
        titleEn: 'Compound Words (समास के भेद एवं विग्रह)',
        titleHi: 'समास के 6 भेद एवं सामासिक पद विग्रह',
        descriptionEn: 'अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, और बहुव्रीहि समास के नियम तथा प्रामाणिक BPSC उदाहरण।',
        descriptionHi: 'यथाशक्ति (अव्ययीभाव), राजपुत्र (तत्पुरुष), दशानन/पीतांबर (बहुव्रीहि), चौराहा (द्विगु), माता-पिता (द्वंद्व)।',
        totalPracticeQuestions: 16,
        totalEstimatedMinutes: 30,
        topics: [
          {
            id: 'hin-topic-samass',
            chapterId: 'hin-ch-samass',
            topicNumber: 1,
            slug: 'samas-classification',
            titleEn: 'Samas Classification & Identification (समास)',
            titleHi: 'समास के भेद एवं पहचान के नियम',
            descriptionEn: 'Determine the primary/dominant component (पूर्वपद, उत्तरपद, अन्यपद) to classify compounds.',
            descriptionHi: 'अव्ययीभाव (पहला पद प्रधान), तत्पुरुष (दूसरा पद प्रधान), द्वंद्व (दोनों पद प्रधान), बहुव्रीहि (तीसरा पद प्रधान)।',
            estimatedMinutes: 18,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-hin-samas',
              topicId: 'hin-topic-samass',
              titleEn: 'Samas Mastery for BPSC TRE',
              titleHi: 'BPSC TRE हेतु समास के 6 भेदों की संपूर्ण मार्गदर्शिका',
              readingTimeMinutes: 10,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'समास के 6 भेदों की पद प्रधानता (पूर्वपद, उत्तरपद, दोनों पद, अन्यपद) के आधार पर पहचान करना।',
                'अव्ययीभाव समास के उपसर्ग युक्त पदों (यथा, प्रति, आ, भर, अनु) को पहचानना।',
                'द्विगु (संख्यावाचक) और बहुव्रीहि (रूढ़ विशेष अर्थ) के अंतर (जैसे दशानन, त्रिनेत्र) को समझना।',
                'तत्पुरुष समास के कारक चिन्हों (को, से, के लिए, का/की/के) का विग्रह करना।'
              ],
              introductionEn: 'Compound words (समास) represent a core grammar component in BPSC TRE. BPSC frequently tests candidate discernment between Bahuvrihi and Dvigu/Karmadharaya compounds.',
              introductionHi: 'BPSC TRE हिंदी खंड में समास से प्रतिवर्ष प्रश्न पूछे जाते हैं। विशेष रूप से अव्ययीभाव (यथाशक्ति, प्रतिदिन) और बहुव्रीहि (दशानन, पीतांबर) आयोग के सर्वाधिक प्रिय विषय हैं।',
              conceptSections: [
                {
                  title: '1. पद प्रधानता के आधार पर समास का वर्गीकरण',
                  contentMarkdownEn: 'दो या दो से अधिक शब्दों के मेल से बने नए सार्थक शब्द को **समास** कहते हैं:\n\n* **1. अव्ययीभाव समास:** पूर्वपद (पहला पद) प्रधान एवं अव्यय हो।\n  * *पहचान उपसर्ग:* यथा, प्रति, आ, भर, बे, अनु (यथाशक्ति = शक्ति के अनुसार, प्रतिदिन = प्रत्येक दिन, आजन्म = जन्म से लेकर)।\n* **2. तत्पुरुष समास:** उत्तरपद (दूसरा पद) प्रधान हो और कारक-विभक्ति का लोप हो।\n  * *राजपुत्र (राजा का पुत्र - संबंध तत्पुरुष), रोगमुक्त (रोग से मुक्त - अपादान तत्पुरुष)।*\n* **3. कर्मधारय समास:** विशेषण-विशेष्य या उपमेय-उपमान का संबंध हो।\n  * *नीलकमल (नीला है जो कमल), चंद्रमुखी (चंद्रमा के समान मुख)।*\n* **4. द्विगु समास:** पहला पद संख्यावाचक विशेषण हो और समूह का बोध कराए।\n  * *चौराहा (चार राहों का समाहार), तिरंगा (तीन रंगों का समाहार)।*\n* **5. द्वंद्व समास:** दोनों पद प्रधान हों और \'और/या\' का लोप हो।\n  * *माता-पिता (माता और पिता), सुख-दुख (सुख या दुख)।*\n* **6. बहुव्रीहि समास:** दोनों पदों में से कोई भी प्रधान न होकर किसी **तीसरे (अन्य) पद** की ओर संकेत करे।\n  * *दशानन (दस हैं आनन जिसके अर्थात् रावण), पीतांबर (पीले हैं वस्त्र जिसके अर्थात् श्रीकृष्ण), लंबोदर (गणेश)।*',
                  tableData: {
                    headers: ['समास का नाम', 'प्रधान पद', 'मुख्य पहचान / ट्रिक', 'BPSC TRE उदाहरण'],
                    rows: [
                      ['अव्ययीभाव', 'पूर्वपद (पहला)', 'यथा, प्रति, आ, भर उपसर्ग', 'यथाशक्ति, आजन्म (TRE 1.0)'],
                      ['तत्पुरुष', 'उत्तरपद (दूसरा)', 'कारक चिन्हों का लोप', 'राजमहल, गंगाजल, देशप्रेम'],
                      ['कर्मधारय', 'उत्तरपद', '\'है जो\' या \'के समान\'', 'महात्मा, चरणकमल'],
                      ['द्विगु', 'उत्तरपद (पहला संख्या)', 'पहला पद 1, 2, 3 संख्या', 'त्रिफला, दोपहर, पंचवटी'],
                      ['द्वंद्व', 'दोनों पद', 'योजक चिन्ह (-), \'और\', \'या\'', 'पाप-पुण्य, दाल-रोटी'],
                      ['बहुव्रीहि', 'अन्य पद (तीसरा)', 'देवी-देवता या रूढ़ विशेष अर्थ', 'दशानन (TRE 3.0), चक्रपाणि']
                    ]
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'समास विग्रह (Samas Vigrah)',
                  definitionEn: 'The explanatory expansion of a compound word to clarify the syntactic relationship between its components.',
                  definitionHi: 'सामासिक शब्दों के बीच के संबंध को स्पष्ट करना समास विग्रह कहलाता है।'
                },
                {
                  term: 'बहुव्रीहि समास',
                  definitionEn: 'An exocentric compound where neither constituent word is head, pointing to an external referent.',
                  definitionHi: 'जिस समास में कोई भी पद प्रधान न होकर अन्य पद प्रधान होता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'बहुव्रीहि बनाम द्विगु/कर्मधारय नियम',
                  formulaOrRule: 'संख्या + अन्य अर्थ = बहुव्रीहि (दशानन = रावण) | संख्या + केवल समूह = द्विगु (चौराहा)',
                  explanationEn: 'If a number points to a specific person/deity, Bahuvrihi takes precedence.',
                  explanationHi: 'यदि संख्या किसी विशेष व्यक्ति/देवता (जैसे दशानन = रावण, त्रिनेत्र = शिव) का बोध कराए, तो प्राथमिकता बहुव्रीहि को दी जाती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: '\'यथाशक्ति\' शब्द में कौन-सा समास है? (A) अव्ययीभाव (B) तत्पुरुष (C) कर्मधारय (D) उपर्युक्त में से एक से अधिक (E) उपर्युक्त में से कोई नहीं',
                  stepByStepSolutionEn: '1. शब्द का विग्रह करें: "यथाशक्ति" = "शक्ति के अनुसार"।\n2. यहाँ पहला पद "यथा" एक अव्यय (उपसर्ग) है जो प्रधान है।\n3. जिस समास का पहला पद अव्यय और प्रधान हो, वह अव्ययीभाव समास कहलाता है।\n4. BPSC आधिकारिक उत्तर कुंजी: Option (A) अव्ययीभाव।',
                  shortcutTrick: 'यथा, प्रति, आ, भर से शुरू होने वाले शब्द = अव्ययीभाव समास।'
                }
              ],
              practicalApplications: [
                'हिंदी भाषा की अभिव्यक्ति क्षमता, संक्षेपण, तथा प्रशासनिक शब्दावली।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Classifying "दशानन" as Dvigu because "दस" is a number.',
                  whyWrongEn: 'Dasanana refers uniquely to Ravana (third person referent), making it Bahuvrihi.',
                  correctWayEn: 'दशानन = बहुव्रीहि समास (रावण के लिए रूढ़)।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'यथाशक्ति में समास (TRE 1.0 Q.08).',
                  'दशानन / पीतांबर में बहुव्रीहि की पहचान (TRE 3.0 Q.12).',
                  'द्वंद्व समास में योजक चिन्ह।'
                ],
                commonDistractorTraps: [
                  'Selecting Dvigu for Dasanana or Trinetra.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.08 Series A)',
                  'BPSC TRE 3.0 (22-07-2024, Shift 1, Q.12 Series A)'
                ]
              },
              quickRevisionPoints: [
                'अव्ययीभाव: यथा, प्रति, आ, भर, बे (यथाशक्ति, प्रतिदिन)।',
                'तत्पुरुष: कारक चिन्हों का विग्रह (राजपुत्र = राजा का पुत्र)।',
                'कर्मधारय: विशेषण-विशेष्य (नीलकमल = नीला है जो कमल)।',
                'द्विगु: पहला पद संख्या + समूह (चौराहा, नवरत्न)।',
                'द्वंद्व: दोनों पद प्रधान (रात-दिन, माता-पिता)।',
                'बहुव्रीहि: तीसरा अर्थ प्रधान (दशानन, लंबोदर, नीलकंठ)।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-samas-1',
                  questionEn: '\'त्रिफला\' शब्द में कौन-सा समास है?',
                  questionHi: '\'त्रिफला\' शब्द में कौन-सा समास है?',
                  options: [
                    { id: 'A', textEn: 'द्विगु समास', isCorrect: true },
                    { id: 'B', textEn: 'द्वंद्व समास', isCorrect: false },
                    { id: 'C', textEn: 'तत्पुरुष समास', isCorrect: false },
                    { id: 'D', textEn: 'कर्मधारय समास', isCorrect: false }
                  ],
                  explanationEn: '\'त्रिफला\' का विग्रह "तीन फलों का समाहार" है। पहला पद संख्यावाचक है और समूह का बोध कराता है, अतः यह द्विगु समास है।',
                  conceptTested: 'द्विगु समास'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-pyq-samas-1',
                topicId: 'hin-topic-samass',
                chapterId: 'hin-ch-samass',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'यथाशक्ति\' शब्द में कौन-सा समास है?',
                questionTextHi: '\'यथाशक्ति\' शब्द में कौन-सा समास है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'अव्ययीभाव', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'तत्पुरुष', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'कर्मधारय', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: '\'यथाशक्ति\' का विग्रह "शक्ति के अनुसार" होता है। इसमें पूर्वपद \'यथा\' एक अव्यय है और वही प्रधान है, अतः यह अव्ययीभाव समास है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 8,
                sourceDocumentRef: 'BPSC Advt 26/2023 Language Paper Series A, Q.8 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-hin-pyq-samas-2',
                topicId: 'hin-topic-samass',
                chapterId: 'hin-ch-samass',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'दशानन\' (दस हैं आनन जिसके अर्थात् रावण) में कौन-सा समास है?',
                questionTextHi: '\'दशानन\' (दस हैं आनन जिसके अर्थात् रावण) में कौन-सा समास है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'बहुव्रीहि', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'द्विगु', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'कर्मधारय', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'उपर्युक्त में से एक से अधिक', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'उपर्युक्त में से कोई नहीं', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: '\'दशानन\' में \'दस\' और \'आनन\' मिलकर तीसरे पद \'रावण\' का बोध कराते हैं। जब कोई अन्य पद प्रधान हो, तो वह बहुव्रीहि समास कहलाता है।',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 12,
                sourceDocumentRef: 'BPSC Advt 22/2024 Re-Exam Language Paper Series A, Q.12 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },
            // ----------------------------------------------------
      // CHAPTER 4: SHUDDH VARTANI & SPELLING ACCURACY
      // ----------------------------------------------------
      {
        id: "hin-ch-shuddh-vartani",
        subjectKey: "HINDI_LANGUAGE",
        chapterNumber: 4,
        slug: "shuddh-vartani-spelling-accuracy",
        titleEn: "Shuddh Vartani & Spelling Traps (शुद्ध वर्तनी)",
        titleHi: "शुद्ध वर्तनी एवं अशुद्ध शब्द निवारण",
        descriptionEn: "High-yield examination words tested in TRE 1.0, 2.0, and 3.0: उज्ज्वल, प्रामाणिक, कवयित्री, संन्यास, शुश्रूषा, बीभत्स, क्षत्रिय.",
        descriptionHi: "BPSC में बार-बार पूछे जाने वाले शुद्ध वर्तनी शब्द: उज्ज्वल, प्रामाणिक, कवयित्री, संन्यास, आशीर्वाद, शुश्रूषा, वीभत्स आदि।",
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: "hin-topic-shuddh-vartani",
            chapterId: "hin-ch-shuddh-vartani",
            topicNumber: 1,
            slug: "high-yield-spelling-traps-bpsc",
            titleEn: "High-Yield BPSC Spelling Traps (उज्ज्वल, प्रामाणिक, कवयित्री)",
            titleHi: "उच्च-अंकदायी वर्तनी नियम एवं परीक्षोपयोगी शब्द",
            descriptionEn: "Mastering the golden orthographic rules for sandhi-based spellings, nasalization (अनुस्वार), and double consonants.",
            descriptionHi: "संधि जनित वर्तनी, द्वित्व व्यंजन (उज्ज्वल), इक प्रत्यय के प्रभाव (प्रमाण -> प्रामाणिक), तथा मानक हिन्दी वर्तनी के नियम।",
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 7,
            hasAppearedInPyq: true,
            examImportance: "CRITICAL_HIGH_YIELD",
            pyqAppearanceSummary: "TRE 2.0 (Q.14, Q.15, Q.23, Q.24), TRE 3.0 (Q.H-25)",
            tutorial: {
              id: "tut-hin-shuddh-vartani",
              topicId: "hin-topic-shuddh-vartani",
              titleEn: "Mastering High-Yield Hindi Spellings for BPSC TRE",
              titleHi: "BPSC TRE हेतु शुद्ध वर्तनी का सटीक मार्गदर्शन",
              readingTimeMinutes: 12,
              difficulty: "BEGINNER",
              learningObjectives: [
                "Master the double half-ज rule in ==उज्ज्वल== (उत् + ज्वल).",
                "Understand the vowel lengthening rule of इक प्रत्यय: ==प्रमाण -> प्रामाणिक==.",
                "Distinguish classical tatsam forms: ==वीभत्स== (not बीभत्स), ==क्षत्रिय== (not क्षत्रीय)."
              ],
              introductionEn: "Spelling accuracy (शुद्ध वर्तनी) contributes 2 to 3 questions in every BPSC Language paper. BPSC tests predictable phonetic traps where everyday colloquial pronunciation differs from grammatical orthography.",
              introductionHi: "BPSC भाषा अर्हक परीक्षा में शुद्ध वर्तनी से 2 से 3 प्रश्न निश्चित रूप से पूछे जाते हैं। BPSC उन शब्दों को चुनता है जहाँ सामान्य बोलचाल का अशुद्ध उच्चारण लिखित रूप को भ्रमित करता है।",
              conceptSections: [
                {
                  title: "1. The Classic उज्ज्वल Rule",
                  contentMarkdownEn: "* **Derivation:** उत् + ज्वल = ==उज्ज्वल==.\n* **Crucial Feature:** It contains **two successive half-ज** characters (ज्ज्).\n* **Examiner Trap:** Options frequently write उज्जवल (with one full ज). This is strictly **incorrect**.\n* **BPSC TRE 2.0 Q.24:** \"उसका भविष्य उज्ज्वल है।\" -> Official answer is ==उज्ज्वल==."
                },
                {
                  title: "2. The इक प्रत्यय Vowel Lengthening Rule",
                  contentMarkdownEn: "When the suffix **इक** is added to a word, the initial vowel gets lengthened (वृद्धि):\n* **अ -> आ:** प्रमाण + इक = ==प्रामाणिक== (NOT प्रमाणिक).\n* **इ/ई -> ऐ:** इतिहास + इक = ==ऐतिहासिक==; दिन + इक = ==दैनिक==.\n* **उ/ऊ -> औ:** भूगोल + इक = ==भौगोलिक==; उद्योग + इक = ==औद्योगिक==.\n* **BPSC TRE 3.0 Q.H-25:** Identify the pure word -> ==प्रामाणिक==."
                }
              ],
              importantDefinitions: [
                {
                  term: "शुद्ध वर्तनी (Orthography)",
                  definitionEn: "The conventional spelling system of a language adhering strictly to grammatical sandhi, suffixation, and phonetic rules.",
                  definitionHi: "व्याकरण के नियमों (संधि, प्रत्यय, उपसर्ग) के अनुसार वर्णों का मानक एवं शुद्ध विन्यास वर्तनी कहलाता है।"
                }
              ],
              rulesAndFormulas: [
                {
                  title: "Double-Consonant Sandhi Rule",
                  formulaOrRule: "त् / द् + ज् / झ् -> ज्ज् (उद् + ज्वल = उज्ज्वल, विपद् + जाल = विपज्जाल)",
                  explanationEn: "Whenever dental t/d merges with palatal j, it assimilates to double half-j (ज्ज्).",
                  explanationHi: "त् या द् के बाद यदि ज् या झ् आए तो त्/द् के स्थान पर आधा ज् हो जाता है।"
                }
              ],
              examples: [
                {
                  title: "BPSC TRE 2.0 Official Question Analysis",
                  problemEn: "Which is the correctly spelled word? (A) क्षत्रिय (B) क्षत्रीय (C) उज्जल (D) More than one of the above (E) None of the above",
                  stepByStepSolutionEn: "1. In standard Sanskrit tatsam orthography, क्षत्रिय uses short vowel इ on त्र.\n2. क्षत्रीय is incorrect colloquial elongation.\n3. उज्जल is dialectal tadbhav.\n4. Official BPSC Key: (A) क्षत्रिय.",
                  shortcutTrick: "Standard warrior caste name has short इ: क्षत्रिय."
                }
              ],
              practicalApplications: ["Official state correspondence, error-free language qualification, and drafting."],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: "Writing कवियत्री instead of कवयित्री.",
                  whyWrongEn: "In Sanskrit, feminine of कवि is formed as कवयित्री with no इ on व.",
                  correctWayEn: "Always write कवयित्री."
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  "उज्ज्वल with double half-ज (TRE 2.0 Q.24).",
                  "प्रामाणिक with lengthened आ (TRE 3.0 Q.H-25).",
                  "क्षत्रिय with short-इ (TRE 2.0 Q.15)."
                ],
                commonDistractorTraps: ["Writing उज्जवल with full-ज."],
                relatedPyqReferences: ["BPSC TRE 2.0 (Q.15, Q.24)", "BPSC TRE 3.0 (Q.H-25)"]
              },
              quickRevisionPoints: [
                "उज्ज्वल = ==उत् + ज्वल== (दो बार आधा ज).",
                "प्रामाणिक = ==प्रमाण + इक== (प्र में आ की मात्रा).",
                "कवयित्री = ==क + व + यि + त्री==.",
                "आशीर्वाद = ==शी पर बड़ी ई, वा पर रेफ==."
              ],
              knowledgeCheck: [
                {
                  id: "kc-hin-var-1",
                  questionEn: "Which of the following is the correct spelling of the feminine form of कवि in Hindi?",
                  questionHi: "कवि का सही स्त्रीलिंग रूप निम्नलिखित में से कौन-सा है?",
                  options: [
                    { id: "A", textEn: "कवयित्री", isCorrect: true },
                    { id: "B", textEn: "कवियत्री", isCorrect: false },
                    { id: "C", textEn: "कवयत्री", isCorrect: false },
                    { id: "D", textEn: "कवियित्री", isCorrect: false }
                  ],
                  explanationEn: "The pure grammatical feminine form is कवयित्री. The व retains no vowel mark.",
                  conceptTested: "Hindi Feminine Noun Orthography"
                }
              ]
            },
            practiceQuestions: [
              {
                id: "pq-hin-var-1",
                topicId: "hin-topic-shuddh-vartani",
                chapterId: "hin-ch-shuddh-vartani",
                subjectKey: "HINDI_LANGUAGE",
                sectionKey: "PART_1_LANGUAGE",
                questionTextEn: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
                questionTextHi: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
                options: [
                  { id: "o1", identifier: "A", textEn: "उज्ज्वल", isCorrect: true },
                  { id: "o2", identifier: "B", textEn: "उज्जवल", isCorrect: false },
                  { id: "o3", identifier: "C", textEn: "उज्वल", isCorrect: false },
                  { id: "o4", identifier: "D", textEn: "उपर्युक्त में से एक से अधिक", isCorrect: false },
                  { id: "o5", identifier: "E", textEn: "उपर्युक्त में से कोई नहीं", isCorrect: false }
                ],
                correctOptionIdentifier: "A",
                difficulty: "EASY",
                practiceMode: "PYQ",
                explanationEn: "उज्ज्वल में दो बार आधा ज आता है। अतः विकल्प (A) शुद्ध है।",
                isAuthenticPyq: true,
                treVersion: "TRE_2_0",
                examDate: "2023-12-15",
                shift: "Shift 1 (Language)",
                officialQuestionNumber: 24,
                verificationStatus: "OFFICIALLY_VERIFIED"
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 5: WORD ORIGINS (तत्सम, तद्भव, देशज, विदेशज)
      // ----------------------------------------------------
      {
        id: "hin-ch-shabd-bhed",
        subjectKey: "HINDI_LANGUAGE",
        chapterNumber: 5,
        slug: "shabd-bhed-tatsam-tadbhav-deshaj-videshaj",
        titleEn: "Word Origins & Lexicography (शब्द भेद)",
        titleHi: "शब्द भेद: तत्सम, तद्भव, देशज एवं विदेशज",
        descriptionEn: "Core vocabulary classification tested in TRE 2.0 (Q.16, 17, 18, 20, 22) and TRE 3.0 (Q.H-24): पुष्प, स्नेह, परवल, चाय, खारिज.",
        descriptionHi: "उत्पत्ति के आधार पर शब्द भेद: तत्सम (संस्कृत मूल), तद्भव, देशज (क्षेत्रीय बोली), विदेशज (अरबी, फारसी, चीनी) तथा रचना के आधार पर रूढ़/यौगिक।",
        totalPracticeQuestions: 25,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: "hin-topic-shabd-origins",
            chapterId: "hin-ch-shabd-bhed",
            topicNumber: 1,
            slug: "tatsam-tadbhav-deshaj-videshaj-classification",
            titleEn: "Tatsam, Tadbhav, Deshaj & Videshaj Words",
            titleHi: "तत्सम, तद्भव, देशज एवं विदेशज शब्दों की पहचान",
            descriptionEn: "Recognizing Sanskrit roots vs derived regional expressions and Arabic/Persian/Portuguese loanwords.",
            descriptionHi: "पुष्प (तत्सम) -> फूल (तद्भव), परवल/लोटा (देशज), चाय (चीनी विदेशज), तथा खारिज (अरबी विदेशज)।",
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 8,
            hasAppearedInPyq: true,
            examImportance: "CRITICAL_HIGH_YIELD",
            pyqAppearanceSummary: "TRE 2.0 (Q.16, 17, 20, 22), TRE 3.0 (Q.H-24)",
            tutorial: {
              id: "tut-hin-origins",
              topicId: "hin-topic-shabd-origins",
              titleEn: "Word Etymology & Origins for BPSC TRE",
              titleHi: "BPSC TRE हेतु शब्द व्युत्पत्ति एवं स्रोत का संपूर्ण अध्ययन",
              readingTimeMinutes: 12,
              difficulty: "INTERMEDIATE",
              learningObjectives: [
                "Distinguish between ==तत्सम== (pure Sanskrit) and ==तद्भव== (evolved Prakrit/Hindi) words.",
                "Identify native ==देशज== words like परवल, लोटा, पगड़ी.",
                "Recognize loan ==विदेशज== origins: चाय (Chinese), खारिज (Arabic)."
              ],
              introductionEn: "Word origins constitute the backbone of Hindi vocabulary in BPSC examinations. TRE 2.0 alone featured 5 questions on Tatsam, Deshaj, Videshaj, and Roodh words.",
              introductionHi: "शब्दों की उत्पत्ति (व्युत्पत्ति) हिन्दी भाषा खंड का सर्वाधिक अंकदायी भाग है। TRE 2.0 में इस अकेले अध्याय से 5 प्रश्न पूछे गए थे।",
              conceptSections: [
                {
                  title: "1. Four Classes of Word Origins",
                  contentMarkdownEn: "* **तत्सम (Tatsam):** Words borrowed directly from Sanskrit without phonetic alteration:\n  * Examples: ==पुष्प==, ==स्नेह==, अग्नि, सूर्य, गृह, दुग्ध, परीक्षा.\n* **तद्भव (Tadbhav):** Words originating in Sanskrit but modified over centuries:\n  * Examples: ==फूल== (from पुष्प), ==नेह== (from स्नेह), आग (अग्नि), घर (गृह), दूध (दुग्ध).\n* **देशज (Deshaj):** Indigenous regional words with no Sanskrit or foreign roots:\n  * Examples: ==परवल==, ==लोटा==, ==पगड़ी==, खिड़की, डिबिया, तेंदुआ.\n* **विदेशज (Videshaj):** Loan words from foreign languages:\n  * **अरबी (Arabic):** ==खारिज==, अदालत, कानून, तारीख, मुहावरा.\n  * **फारसी (Persian):** आवारा, चश्मा, आमदनी, सरकार, दीवार.\n  * **चीनी (Chinese):** ==चाय==, लीची, तूफान.\n  * **पुर्तगाली (Portuguese):** आलमारी, साबुन, बाल्टी, गमला."
                }
              ],
              importantDefinitions: [
                {
                  term: "तत्सम शब्द",
                  definitionEn: "Words from Sanskrit that have entered Hindi in their original, unmodified phonetic form (तद् + सम = उसके समान).",
                  definitionHi: "संस्कृत भाषा के वे शब्द जो बिना किसी परिवर्तन के हिन्दी में ज्यों के त्यों प्रयुक्त होते हैं, तत्सम कहलाते हैं।"
                }
              ],
              rulesAndFormulas: [
                {
                  title: "Tatsam Recognition Shortcuts",
                  formulaOrRule: "Words containing संयुक्त वर्ण (क्ष, त्र, ज्ञ, श्र), ऋ की मात्रा, या रेफ (र्) are 99% तत्सम",
                  explanationEn: "E.g. क्षत्रिय, नक्षत्र, कृपा, स्नेह, सूर्य, परीक्षा are all तत्सम.",
                  explanationHi: "क्ष, त्र, ज्ञ, श्र, ष तथा ऋ वर्ण वाले शब्द लगभग हमेशा तत्सम होते हैं।"
                }
              ],
              examples: [
                {
                  title: "BPSC TRE 2.0 Question Analysis",
                  problemEn: "Which of the following is a foreign word (विदेशज शब्द)? (A) बाघ (B) परीक्षा (C) चाय (D) More than one of the above (E) None of the above",
                  stepByStepSolutionEn: "1. बाघ is tadbhav (from Sanskrit व्याघ्र).\n2. परीक्षा is pure tatsam Sanskrit.\n3. चाय is borrowed from Chinese (चाइनीज).\n4. Official Answer: (C) चाय.",
                  shortcutTrick: "चाय and लीची originate from Chinese."
                }
              ],
              practicalApplications: ["Vocabulary enrichment, comprehension, and etymological reasoning."],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: "Classifying परवल as Tatsam.",
                  whyWrongEn: "परवल is an indigenous regional dialect word with no classical Sanskrit root.",
                  correctWayEn: "परवल is an authentic Deshaj word."
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  "Tatsam word: पुष्प (TRE 3.0 Q.H-24), स्नेह (TRE 2.0 Q.16).",
                  "Foreign word: चाय (TRE 2.0 Q.17), खारिज (TRE 2.0 Q.22).",
                  "Deshaj word: परवल (TRE 2.0 Q.20)."
                ],
                commonDistractorTraps: ["Confusing Persian and Arabic loan words."],
                relatedPyqReferences: ["BPSC TRE 2.0 (Q.16, 17, 20, 22)", "BPSC TRE 3.0 (Q.H-24)"]
              },
              quickRevisionPoints: [
                "तत्सम = ==पुष्प, स्नेह, गृह==.",
                "तद्भव = ==फूल, नेह, घर==.",
                "देशज = ==परवल, लोटा, पगड़ी==.",
                "विदेशज = ==चाय (चीनी), खारिज (अरबी)==."
              ],
              knowledgeCheck: [
                {
                  id: "kc-hin-ori-1",
                  questionEn: "Which of the following is an authentic तत्सम word in Hindi?",
                  questionHi: "निम्नलिखित में से तत्सम शब्द कौन-सा है?",
                  options: [
                    { id: "A", textEn: "पुष्प", isCorrect: true },
                    { id: "B", textEn: "फूल", isCorrect: false },
                    { id: "C", textEn: "आग", isCorrect: false },
                    { id: "D", textEn: "घर", isCorrect: false }
                  ],
                  explanationEn: "पुष्प is pure Sanskrit tatsam; फूल, आग, and घर are tadbhav.",
                  conceptTested: "Tatsam Identification"
                }
              ]
            },
            practiceQuestions: [
              {
                id: "pq-hin-ori-1",
                topicId: "hin-topic-shabd-origins",
                chapterId: "hin-ch-shabd-bhed",
                subjectKey: "HINDI_LANGUAGE",
                sectionKey: "PART_1_LANGUAGE",
                questionTextEn: "निम्नलिखित में से कौन-सा विदेशज शब्द है?",
                questionTextHi: "निम्नलिखित में से कौन-सा विदेशज शब्द है?",
                options: [
                  { id: "o1", identifier: "A", textEn: "चाय", isCorrect: true },
                  { id: "o2", identifier: "B", textEn: "बाघ", isCorrect: false },
                  { id: "o3", identifier: "C", textEn: "परीक्षा", isCorrect: false },
                  { id: "o4", identifier: "D", textEn: "उपर्युक्त में से एक से अधिक", isCorrect: false },
                  { id: "o5", identifier: "E", textEn: "उपर्युक्त में से कोई नहीं", isCorrect: false }
                ],
                correctOptionIdentifier: "A",
                difficulty: "EASY",
                practiceMode: "PYQ",
                explanationEn: "चाय चीनी भाषा से हिन्दी में आया हुआ विदेशज शब्द है।",
                isAuthenticPyq: true,
                treVersion: "TRE_2_0",
                examDate: "2023-12-15",
                shift: "Shift 1 (Language)",
                officialQuestionNumber: 17,
                verificationStatus: "OFFICIALLY_VERIFIED"
              }
            ]
          }
        ]
      },
      ...BPSC_HINDI_SUBJECTS[0].chapters
    ]
  }
];
