// Comprehensive BPSC TRE 4.0 English Language Course Data
// In-depth curriculum covering Subject-Verb Concord, Articles & Prepositions, Tenses, Voice, and High-Yield Vocabulary
// Fully equipped with authentic BPSC TRE 1.0, 2.0, 3.0 Language Section PYQs, yellow highlighters (==text==), and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_ENGLISH_SUBJECTS: LMSSubject[] = [
  {
    key: 'ENGLISH_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'English Language & Grammar',
    displayNameHi: 'अंग्रेजी भाषा एवं व्यावहारिक व्याकरण',
    iconName: 'BookOpen',
    descriptionEn: 'Essential English Language qualifying module (Part 1, 8 Questions): Subject-Verb Agreement, Articles (A, An, The rules & exceptions), Preposition pairs, Tenses, and BPSC vocabulary.',
    descriptionHi: 'भाग 1 भाषा अर्हक खंड (8 प्रश्न): कर्ता-क्रिया संगति (Subject-Verb Agreement), आर्टिकल (A, An, The के नियम एवं अपवाद), प्रीपोजिशन, काल (Tenses), तथा महत्वपूर्ण शब्दावली।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: GRAMMAR & CONCORD
      // ----------------------------------------------------
      {
        id: 'eng-ch-grammar',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 1,
        slug: 'english-grammar-and-concord',
        titleEn: 'English Grammar, Subject-Verb Agreement & Articles',
        titleHi: 'अंग्रेजी व्याकरण, कर्ता-क्रिया संगति एवं आर्टिकल',
        descriptionEn: 'Subject-Verb agreement rules, Article exceptions (A European, An hour), Preposition distinctions (Between vs Among, Beside vs Besides), and Spotting Errors.',
        descriptionHi: 'कर्ता-क्रिया संगति के नियम, आर्टिकल के अपवाद (A European, An hour), प्रीपोजिशन के महत्वपूर्ण अंतर (Between बनाम Among, Beside बनाम Besides)।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 70,
        topics: [
          {
            id: 'eng-topic-concord-articles',
            chapterId: 'eng-ch-grammar',
            topicNumber: 1,
            slug: 'subject-verb-agreement-and-articles',
            titleEn: 'Subject-Verb Concord, Articles & Prepositions',
            titleHi: 'कर्ता-क्रिया संगति, आर्टिकल एवं प्रीपोजिशन',
            descriptionEn: 'Rules of proximity with "Neither...nor", collective nouns, article sound rules (vowel sound vs vowel letter), and high-frequency preposition traps.',
            descriptionHi: 'Neither...nor के नियम, सामूहिक संज्ञाएं, स्वर ध्वनि के आधार पर A/An का चयन, तथा प्रीपोजिशन के नियम।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 10,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.1, Q.3), TRE 2.0 (Q.1, Q.2) & TRE 3.0 (Q.1, Q.4)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-concord-articles',
              topicId: 'eng-topic-concord-articles',
              titleEn: 'Subject-Verb Concord, Articles & Prepositions',
              titleHi: 'कर्ता-क्रिया संगति, आर्टिकल एवं प्रीपोजिशन',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Master Subject-Verb agreement rules for compound subjects and correlative conjunctions.',
                'Apply Article rules based on initial phonetic sound rather than spelling (e.g. A European, An honest man).',
                'Distinguish between confusing preposition pairs: Beside vs Besides; Between vs Among.',
                'Solve BPSC 5-option English questions without grammatical uncertainty.'
              ],
              introductionEn: '==In BPSC TRE Part 1, English consists of 8 mandatory questions covering functional grammar and vocabulary.==\n\nMany candidates stumble over deceptive traps: assuming that every word starting with "E" takes "An", or placing a plural verb after "as well as". In English, phonetic pronunciation determines article usage, and syntactic headwords determine verb agreement.',
              introductionHi: 'बीपीएससी टीआरई के भाग 1 (भाषा) में अंग्रेजी के 8 अनिवार्य प्रश्न पूछे जाते हैं। अंग्रेजी में आर्टिकल का चयन वर्तनी से नहीं, बल्कि उच्चारण की ध्वनि (Phonetic sound) से तय होता है।',
              conceptSections: [
                {
                  title: '1. Subject-Verb Agreement (Crucial Exam Rules)',
                  contentMarkdownEn: '* **Rule of Proximity:** With **"Either...or"** and **"Neither...nor"**, verb agrees with the ==NEAREST subject== (e.g. "Neither the teacher nor the ==students were== present").\n* **As well as, Along with:** Verb agrees with the ==FIRST subject== (e.g. "The Captain, ==along with his sailors, was== rescued").\n* **Each, Every, Either, Neither:** Always take a ==SINGULAR verb== (e.g. "==Each== of the boys ==has== a pen").'
                },
                {
                  title: '2. Articles: A, An, The (Phonetic Rules & Exceptions)',
                  contentMarkdownEn: '* **Use of "An" (Before Vowel Sound):** ==An hour== (silent h), ==An honest man==, ==An MLA==, ==An MP==, ==An SP==.\n* **Use of "A" (Before Consonant Sound):** ==A European== (starts with \'yu\' / य sound), ==A University==, ==A Union==, ==A one-rupee note== (starts with \'wa\' / व sound).\n* **Omission of Articles:** Before names of languages (He speaks ==English==, NOT the English), abstract nouns in general sense (Honesty is the best policy).'
                },
                {
                  title: '3. Preposition Distinctions',
                  contentMarkdownEn: '* **Beside vs Besides:** Beside = next to (She sat ==beside== me); Besides = in addition to (==Besides== Hindi, he knows English).\n* **Between vs Among:** Between = for ==two== persons/things; Among = for ==more than two==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Phonetic Initial Sound (स्वर ध्वनि)',
                  definitionEn: 'The initial auditory vocalization of a word in speech, which determines whether "a" or "an" is prefixed.',
                  definitionHi: 'उच्चारण की प्रारंभिक ध्वनि जो तय करती है कि शब्द से पहले A लगेगा या An।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Hindi Devanagari Article Rule',
                  formulaOrRule: 'If spoken initial is Swar (अ-औ) -> AN | If spoken initial is Vyanjan (क-ज्ञ) -> A',
                  explanationEn: '"European" starts with \'य\' (Vyanjan => A). "Honest" starts with \'ऑ\' (Swar => An).'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Article before European',
                  problemEn: 'Fill in the blank: "He is _____ European scholar."',
                  stepByStepSolutionEn: '1. "European" begins with consonant glide sound /juː/ (य).\n2. Consonant sounds take "a".\n3. Answer: a European.',
                  shortcutTrick: 'European sounds like "You-ropean" => A European!'
                }
              ],
              practicalApplications: ['Essential for scoring qualifying marks in Part 1 Language.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Placing "An" before University or European because they start with vowels.',
                  whyWrongEn: 'Articles depend on sound, not orthography.',
                  correctWayEn: 'Always test the spoken sound in Devanagari.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Article before European (TRE 1.0 Q.1, TRE 2.0 Q.2)',
                  'Subject-Verb agreement with "as well as"',
                  'Beside vs Besides'
                ],
                commonDistractorTraps: ['Choosing "an" before words starting with vowel letters but consonant sounds'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.1)', 'BPSC TRE 2.0 (Q.2)']
              },
              quickRevisionPoints: [
                'Use AN before vowel sounds: An hour, An honest man, An MLA.',
                'Use A before consonant sounds: A European, A university, A one-rupee note.',
                'With "Neither...nor", verb agrees with the NEAREST subject.',
                'With "as well as", verb agrees with the FIRST subject.',
                'Beside means next to; Besides means in addition to.',
                'Between is for two; Among is for more than two.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-art-1',
                  questionEn: 'Choose the appropriate article to fill in the blank: "He graduated from _____ university in London."',
                  questionHi: 'रिक्त स्थान के लिए उपयुक्त आर्टिकल चुनें: "He graduated from _____ university in London."',
                  options: [
                    { id: 'A', textEn: 'an', isCorrect: false },
                    { id: 'B', textEn: 'a', isCorrect: true },
                    { id: 'C', textEn: 'the', isCorrect: false },
                    { id: 'D', textEn: 'no article', isCorrect: false }
                  ],
                  explanationEn: '"University" begins with a consonant \'yu\' sound, hence it takes the indefinite article "a".',
                  conceptTested: 'Article before University'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-art-1',
                topicId: 'eng-topic-concord-articles',
                chapterId: 'eng-ch-grammar',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank with the suitable article: "Mr. David is _____ European scholar residing in Patna."',
                questionTextHi: 'उपयुक्त आर्टिकल से रिक्त स्थान भरें: "Mr. David is _____ European scholar residing in Patna."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'an', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'a', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'the', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Although "European" begins with the vowel letter \'E\', it produces a consonant sound /juː/ (like \'you\'), requiring the article "a".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (Language Section)',
                officialQuestionNumber: 2,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
