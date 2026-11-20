import { LMSSubject } from '@/types/bpscLms';

export const BPSC_LANGUAGE_SUBJECTS: LMSSubject[] = [
  // ==========================================
  // SUBJECT 1: ENGLISH LANGUAGE
  // ==========================================
  {
    key: 'ENGLISH_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'English Language & Grammar',
    displayNameHi: 'अंग्रेजी भाषा एवं व्याकरण',
    iconName: 'BookOpen',
    descriptionEn: 'Comprehensive foundation in English grammar, syntax, vocabulary, and reading comprehension tailored for BPSC TRE 4.0 Language section.',
    descriptionHi: 'BPSC TRE 4.0 भाषा खंड के लिए अंग्रेजी व्याकरण, वाक्य रचना और शब्दावली की संपूर्ण तैयारी।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: PARTS OF SPEECH
      // ----------------------------------------------------
      {
        id: 'eng-ch-parts-of-speech',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 1,
        slug: 'parts-of-speech',
        titleEn: 'Parts of Speech & Word Classes',
        titleHi: 'शब्द भेद (Parts of Speech)',
        descriptionEn: 'Identification and grammatical functions of Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, and Interjections.',
        descriptionHi: 'संज्ञा, सर्वनाम, क्रिया, विशेषण, क्रियाविशेषण और संबंधबोधक अव्यय की पहचान और नियम।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'eng-topic-nouns-pronouns',
            chapterId: 'eng-ch-parts-of-speech',
            topicNumber: 1,
            slug: 'nouns-and-pronouns',
            titleEn: 'Nouns, Cases, Numbers & Pronoun Concord',
            titleHi: 'संज्ञा, वचन, कारक एवं सर्वनाम संबंध',
            descriptionEn: 'Master singular/plural exceptions, collective nouns, abstract nouns, and relative/demonstrative pronoun agreement.',
            descriptionHi: 'संज्ञा के प्रकार, एकवचन-बहुवचन के अपवाद, और सर्वनाम के सटीक उपयोग के नियम।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 4,
            tutorial: {
              id: 'tut-eng-nouns-pronouns',
              topicId: 'eng-topic-nouns-pronouns',
              titleEn: 'Mastering Nouns & Pronouns for BPSC TRE',
              titleHi: 'BPSC TRE के लिए संज्ञा एवं सर्वनाम की संपूर्ण व्याख्या',
              readingTimeMinutes: 12,
              difficulty: 'BEGINNER',
              learningObjectives: [
                'Identify collective nouns that take singular vs plural verbs based on unity vs division.',
                'Recognize nouns with invariable singular or plural forms (e.g., furniture, scenery vs cattle, scissors).',
                'Apply correct pronoun cases (Subjective vs Objective vs Possessive) in compound structures.',
                'Use Relative Pronouns (who, whom, whose, which, that) without common BPSC examination traps.'
              ],
              introductionEn: 'In BPSC TRE examination, questions testing parts of speech frequently target deceptive nouns that look plural but take singular verbs, or collective nouns whose number shifts depending on contextual unity. Understanding pronoun-antecedent agreement is equally pivotal for sentence correction and error spotting.',
              introductionHi: 'BPSC TRE परीक्षा में अक्सर ऐसे संज्ञा शब्दों पर प्रश्न आते हैं जो दिखने में बहुवचन लगते हैं परंतु एकवचन क्रिया लेते हैं (जैसे furniture, machinery, mathematics), या समूहवाचक संज्ञाएँ जो संदर्भ अनुसार बदलती हैं।',
              conceptSections: [
                {
                  title: '1. Invariable Singular Nouns (Uncountable Nouns)',
                  contentMarkdownEn: 'Certain nouns are uncountable in standard English and **never take an indefinite article (a/an) or a plural \'s/es\' suffix**. They always take a **singular verb**:\n\n* **Furniture, Scenery, Poetry, Machinery, Luggage, Baggage, Information, Advice, Hair, Bread, Stationery.**\n* *Incorrect:* The sceneries of Kashmir are beautiful.\n* *Correct:* The **scenery of Kashmir is** beautiful.\n* *Incorrect:* He gave me many advices.\n* *Correct:* He gave me **many pieces of advice**.',
                  tableData: {
                    headers: ['Noun Category', 'Examples', 'Verb Agreement', 'Quantifier Rule'],
                    rows: [
                      ['Uncountable Substances & Concepts', 'Luggage, baggage, information, knowledge, advice', 'Always Singular (is, has, was)', 'Use "a piece of", "an item of", "much", NOT "many"'],
                      ['Nouns ending in -s (Singular)', 'Mathematics, Physics, Politics, Economics, News, Measles', 'Singular in general sense', 'Takes singular verb ("Physics is fascinating")'],
                      ['Invariable Plural Nouns (No -s addition needed)', 'Cattle, poultry, gentry, clergy, police, people', 'Always Plural (are, have, were)', 'Never say "cattles" or "polices"'],
                      ['Two-part Tools & Clothing', 'Scissors, pliers, trousers, spectacles, binoculars', 'Plural alone; Singular with "a pair of"', '"Spectacles are" vs "A pair of spectacles is"']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC TRE Traps: Politics & Mathematics',
                    textEn: 'When words like "Politics", "Mathematics", or "Statistics" are preceded by a possessive pronoun (e.g., "His politics", "Her mathematics"), they denote specific beliefs or calculation skills rather than the academic discipline, and take a PLURAL verb: "His mathematics are exceptionally sharp."',
                    textHi: 'यदि Mathematics या Politics से पहले \'His\', \'Her\', \'Their\' लगा हो, तो वे बहुवचन क्रिया लेते हैं (जैसे: His mathematics are weak).'
                  }
                },
                {
                  title: '2. Collective Nouns: Unity vs. Separation',
                  contentMarkdownEn: 'A collective noun (jury, committee, family, team, crew, council):\n1. Takes a **singular verb and singular pronoun (it/its)** when acting as a **single unified body**.\n2. Takes a **plural verb and plural pronoun (they/their)** when individual members are **acting independently or in disagreement**.\n\n* *Example 1 (Unified):* The committee **has** submitted **its** unanimous report.\n* *Example 2 (Divided):* The jury **were** divided in **their** opinions regarding the verdict.',
                  calloutBox: {
                    type: 'TIP',
                    title: 'BPSC Fast-Recognition Clue',
                    textEn: 'Look for words like "unanimous", "consensus", or "single" for singular verbs; look for "divided", "different opinions", or "separate rooms" for plural verbs.',
                    textHi: 'यदि वाक्य में "divided", "differ" जैसे शब्द हों तो क्रिया हमेशा बहुवचन होगी।'
                  }
                },
                {
                  title: '3. Relative Pronouns: Who vs. Whom vs. That',
                  contentMarkdownEn: 'Relative pronouns link subordinate clauses to an antecedent:\n* **Who:** Used as a subject (performs the action). Test: replace with *he/she/they*.\n* **Whom:** Used as an object (receives the action or follows a preposition). Test: replace with *him/her/them*.\n* **That:** Preferred over *who/which* after superlatives ("the best that"), words like *all, only, any, none, the same*, and when antecedents mix a person and an animal.\n\n* *BPSC Sentence:* "The teacher spoke to the candidate **whom** she had interviewed yesterday." (*she had interviewed him* -> *whom*).',
                  codeSnippet: {
                    language: 'markdown',
                    code: 'Subject Test: [Who / Whom] called the principal? -> HE called -> Use WHO.\nObject Test: The student [who / whom] the board selected -> The board selected HIM -> Use WHOM.\nPreposition Rule: To WHOM did you submit the thesis? (Never "To who")',
                    explanation: 'Substitute he/him to determine Who vs Whom in under 5 seconds.'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Antecedent',
                  definitionEn: 'The noun or noun phrase to which a pronoun refers and with which it must agree in gender, person, and number.',
                  definitionHi: 'वह संज्ञा जिसकी ओर कोई सर्वनाम संकेत करता है और जिसके अनुसार सर्वनाम का रूप निर्धारित होता है।'
                },
                {
                  term: 'Partitive Expression',
                  definitionEn: 'A phrase such as "a flock of", "a herd of", or "a pair of" indicating a part or grouping of an uncountable or plural noun.',
                  definitionHi: 'वह वाक्यांश जो किसी समूह या मात्रा को दर्शाता है, जैसे "a pair of trousers"।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Order of Personal Pronouns Rule (231 Rule)',
                  formulaOrRule: 'Good/Normal Contexts: Second Person (2) + Third Person (3) + First Person (1)',
                  explanationEn: 'When multiple singular pronouns are joined by "and", the polite order is 2nd person (You) -> 3rd person (He/She) -> 1st person (I). Example: "You, he, and I are selected."',
                  explanationHi: 'सामान्य और सकारात्मक संदर्भ में सर्वनामों का क्रम: द्वितीय पुरुष -> तृतीय पुरुष -> प्रथम पुरुष (2-3-1) होता है।'
                },
                {
                  title: 'Order for Confession of Blame / Plural Pronouns (123 Rule)',
                  formulaOrRule: 'Negative Contexts / Guilt / Plural: 1st Person (1) + 2nd Person (2) + 3rd Person (3)',
                  explanationEn: 'When confessing guilt or using plural pronouns (We, You, They), order is 1 -> 2 -> 3. Example: "I, you, and he are responsible for this mistake."',
                  explanationHi: 'गलती स्वीकारने या बहुवचन होने पर क्रम 1-2-3 होता है: "I, you, and he made the blunder."'
                }
              ],
              examples: [
                {
                  title: 'BPSC Exam Example: Uncountable Noun in Error Spotting',
                  problemEn: 'Find the part with error: "The furnitures (A) / in the examination hall (B) / was arranged properly. (C) / No error (D)"',
                  stepByStepSolutionEn: '1. Inspect Part (A): "furnitures" is incorrect because "furniture" is an uncountable noun with no plural \'s\'.\n2. The correct noun is "furniture", and it correctly agrees with singular verb "was" in part (C).\n3. Hence, the error lies in Part (A).',
                  shortcutTrick: 'Instantly eliminate any option with "furnitures", "informations", "sceneries", or "luggage".'
                },
                {
                  title: 'Pronoun Case after "Than" and "As"',
                  problemEn: 'Choose correct option: "She is taller than _____ (he / him)."',
                  stepByStepSolutionEn: 'In formal standard English, "than" is a conjunction comparing two subjects: "She is taller than he (is)". Therefore, subjective pronoun "he" is the strictly correct standard form.',
                  shortcutTrick: 'Complete the implied verb: "She works harder than [I / me] [work] -> than I.'
                }
              ],
              practicalApplications: [
                'Drafting formal administrative letters, circulars, and school correspondence without grammatical discord.',
                'Evaluating student essays and descriptive answer sheets with high syntactic precision.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Writing "One must respect his teachers."',
                  whyWrongEn: 'Indefinite pronoun "one" must maintain concord with "one\'s", not "his" or "her".',
                  correctWayEn: '"One must respect one\'s teachers."'
                },
                {
                  mistakeEn: 'Using "myself" as a subject: "Myself and Suresh will conduct the assembly."',
                  whyWrongEn: 'Reflexive pronouns cannot function as the grammatical subject of a sentence without an antecedent noun.',
                  correctWayEn: '"Suresh and I will conduct the assembly."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Uncountable nouns (furniture, advice, machinery, scenery).',
                  'Pronoun order (2-3-1 rule vs 1-2-3 rule).',
                  'Pronoun concord with "one of the... who" structures.',
                  'Who vs Whom in complex clauses.'
                ],
                commonDistractorTraps: [
                  'Adding plural -s to nouns that already denote a plural class (e.g. cattles, peoplings).',
                  'Placing "I" first in polite multi-person subject lists ("I and principal decided...").'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 Class 11-12 Language Paper Q4',
                  'BPSC TRE 2.0 General English Q7'
                ]
              },
              quickRevisionPoints: [
                'Uncountable nouns (furniture, scenery, advice, information, luggage) -> No plural \'s\', singular verb.',
                'Plural in form, singular in sense (News, Mathematics, Measles, Physics) -> Singular verb.',
                'Plural in sense, singular in form (Cattle, Poultry, Police, People) -> Plural verb.',
                'Polite pronoun sequence: 2 -> 3 -> 1 ("You, he, and I"). Blame/Plural: 1 -> 2 -> 3.',
                'Reflexive pronoun ("myself") can never be the standalone subject of a sentence.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-noun-1',
                  questionEn: 'Which of the following sentences is grammatically CORRECT according to standard English rules?',
                  questionHi: 'निम्नलिखित में से कौन सा वाक्य व्याकरण की दृष्टि से शुद्ध है?',
                  options: [
                    { id: 'A', textEn: 'The cattles are grazing in the lush green pasture.', isCorrect: false },
                    { id: 'B', textEn: 'The police has arrested the burglar within three hours.', isCorrect: false },
                    { id: 'C', textEn: 'The committee was unanimous in its decision.', isCorrect: true },
                    { id: 'D', textEn: 'He gave me several valuable advices for the examination.', isCorrect: false }
                  ],
                  explanationEn: '"Committee" is acting with complete unity ("unanimous"), so it correctly takes singular verb "was" and singular pronoun "its". In (A) "cattle" is already plural; in (B) "police" takes plural verb "have"; in (D) "advice" is uncountable.',
                  conceptTested: 'Collective noun concord and uncountable noun syntax'
                },
                {
                  id: 'kc-eng-noun-2',
                  questionEn: 'Fill in the blank: "Between you and ______, this proposal should be rejected immediately."',
                  questionHi: 'रिक्त स्थान भरें: "Between you and ______, this proposal should be rejected immediately."',
                  options: [
                    { id: 'A', textEn: 'I', isCorrect: false },
                    { id: 'B', textEn: 'me', isCorrect: true },
                    { id: 'C', textEn: 'myself', isCorrect: false },
                    { id: 'D', textEn: 'mine', isCorrect: false }
                  ],
                  explanationEn: '"Between" is a preposition. A preposition is always followed by an objective case pronoun ("between you and me", NOT "between you and I").',
                  conceptTested: 'Prepositional object pronoun case'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-np-1',
                topicId: 'eng-topic-nouns-pronouns',
                chapterId: 'eng-ch-parts-of-speech',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Identify the segment containing a grammatical error: "All the furnitures (A) / in the newly renovated staffroom (B) / have been imported from Italy. (C) / No error (D)"',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'All the furnitures', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'in the newly renovated staffroom', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'have been imported from Italy', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'BPSC_EXAM',
                explanationEn: '"Furniture" is an uncountable noun and does not have a plural form with \'-s\'. The correct phrasing is "All the furniture... has been imported".',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-eng-np-2',
                topicId: 'eng-topic-nouns-pronouns',
                chapterId: 'eng-ch-parts-of-speech',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Choose the correct pronoun to complete the sentence: "One should always remain faithful to ______ country."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'his', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'their', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'one\'s', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'When the subject is the generic indefinite pronoun "one", the corresponding possessive form is strictly "one\'s".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: TENSES & TIME RELATIONS
      // ----------------------------------------------------
      {
        id: 'eng-ch-tenses',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 2,
        slug: 'tenses-time-relations',
        titleEn: 'Tenses, Sequence of Tenses & Conditionals',
        titleHi: 'काल, काल-क्रम एवं शर्त-बोधक वाक्य (Tenses & Conditionals)',
        descriptionEn: 'Deep dive into 12 tenses, present perfect vs simple past, time-clauses, and zero/first/second/third conditional rules.',
        descriptionHi: '12 कालों के नियम, Present Perfect और Simple Past में भेद, तथा Conditional Sentences की संरचना।',
        totalPracticeQuestions: 20,
        totalEstimatedMinutes: 50,
        topics: [
          {
            id: 'eng-topic-tenses-conditionals',
            chapterId: 'eng-ch-tenses',
            topicNumber: 1,
            slug: 'tenses-and-conditionals',
            titleEn: 'Tense Syntax & Conditional Sentences',
            titleHi: 'काल रचना एवं शर्त-बोधक वाक्य',
            descriptionEn: 'Master "since vs for", past perfect time markers, and the 4 fundamental conditional sentence formulas.',
            descriptionHi: '"Since vs for" का प्रयोग, भूतकाल की पूर्व-घटनाएँ (Past Perfect), एवं Conditionals के BPSC नियम।',
            estimatedMinutes: 25,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-eng-tenses-conditionals',
              topicId: 'eng-topic-tenses-conditionals',
              titleEn: 'Complete Guide to Tenses & Conditionals for BPSC TRE',
              titleHi: 'BPSC TRE हेतु काल एवं Conditional Sentences की विस्तृत गाइड',
              readingTimeMinutes: 14,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Distinguish between Simple Past (completed at specific point) and Present Perfect (relevant to present).',
                'Correctly apply Past Perfect when two past actions occur sequentially (earlier action = had + V3).',
                'Identify and rectify errors involving "since" (point of time) vs "for" (period of duration).',
                'Solve conditional clauses (If + had + V3 -> would have + V3) in under 15 seconds.'
              ],
              introductionEn: 'Tense consistency questions are among the highest-yielding items in the BPSC TRE Language section. Examiners test whether candidates can recognize sequence-of-tense violations in complex sentences and properly balance conditional \'If\' clauses.',
              introductionHi: 'BPSC TRE भाषा परीक्षा में काल (Tenses) तथा Conditionals से 2 से 3 प्रश्न निश्चित पूछे जाते हैं। विशेष रूप से भूतकाल की दो परस्पर जुड़ी घटनाओं तथा "If + had + V3" के पैटर्न पर प्रश्न आते हैं।',
              conceptSections: [
                {
                  title: '1. Present Perfect vs. Simple Past',
                  contentMarkdownEn: 'A fundamental rule in English grammar:\n* **Never use Present Perfect with a specific past time marker** (yesterday, last night, two years ago, in 1947, then).\n* *Incorrect:* I have completed my B.Ed. in 2021.\n* *Correct:* I **completed** my B.Ed. in 2021. (Simple Past)\n* *Present Perfect:* "I have completed my degree." (Action finished, effect endures, no specific past time adverb).\n\n**Since vs. For:**\n* **Since:** Used with a definite starting point in time (*since morning, since 1995, since Monday, since childhood*).\n* **For:** Used with a span or duration of time (*for 3 hours, for five years, for two weeks*).'
                },
                {
                  title: '2. Past Perfect Rule: Two Actions in the Past',
                  contentMarkdownEn: 'When two independent events occurred in the past, the **first completed action takes Past Perfect (had + V3)**, while the **subsequent action takes Simple Past (V2)**:\n\n$$\\text{Past Action 1 (Earlier)} = \\mathbf{had + V3} \\quad \\longrightarrow \\quad \\text{Past Action 2 (Later)} = \\mathbf{V2}$$\n\n* *Classic Sentence:* The patient **had died** before the doctor **arrived**.\n* *Example 2:* The train **had left** the station when we **reached** there.',
                  calloutBox: {
                    type: 'WARNING',
                    title: 'BPSC Trap: Inverted Order',
                    textEn: 'Watch out when the clause starts with "After": "After he HAD FINISHED his homework, he WENT to play." The earlier action still takes "had + V3" even if placed after the word "After".',
                    textHi: '\'After\' वाले वाक्यों में भी पहले समाप्त होने वाले कार्य में \'had + V3\' ही आता है।'
                  }
                },
                {
                  title: '3. The 3 Golden Conditional Formulas',
                  contentMarkdownEn: 'Conditional sentences consist of an \'If-clause\' (condition) and a \'Main-clause\' (result). Memorize these 3 formulas verbatim:',
                  tableData: {
                    headers: ['Conditional Type', 'If-Clause Structure', 'Main Clause Structure', 'BPSC Exam Example'],
                    rows: [
                      ['Type 1 (Probable / Real)', 'If + Simple Present (V1/V1+s)', 'Will / Shall / Can + V1', 'If you study diligently, you **will clear** BPSC TRE.'],
                      ['Type 2 (Hypothetical / Unreal)', 'If + Simple Past (V2 or WERE)', 'Would / Could / Might + V1', 'If I **were** the director, I **would reform** the curriculum.'],
                      ['Type 3 (Impossible Past / Regret)', 'If + Past Perfect (had + V3)', 'Would have / Could have + V3', 'If they **had warned** us, we **would have prepared** earlier.']
                    ]
                  },
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Subjunctive "Were" Rule',
                    textEn: 'In Type 2 unreal conditions, the verb "to be" is ALWAYS "were", regardless of whether the subject is singular (I, he, she, it): "If he WERE here today, he would support you."',
                    textHi: 'काल्पनिक वाक्यों में एकवचन कर्ता के साथ भी \'was\' के स्थान पर \'were\' का प्रयोग होता है।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Sequence of Tenses',
                  definitionEn: 'The grammatical rule dictating that when the principal clause is in the past tense, subordinate clauses must also be in a past tense (except when expressing universal truths).',
                  definitionHi: 'वह नियम जिसके अनुसार मुख्य उपवाक्य भूतकाल में होने पर आश्रित उपवाक्य भी भूतकाल में होना चाहिए।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Type 3 Conditional Formula',
                  formulaOrRule: 'If + Subject + had + V3, Subject + would have + V3',
                  explanationEn: 'Expresses an unreal past event that can no longer occur.',
                  explanationHi: 'यदि भूतकाल में ऐसा हुआ होता तो वैसा हो गया होता।'
                },
                {
                  title: 'Inversion of Type 3 Conditional',
                  formulaOrRule: 'Had + Subject + V3, Subject + would have + V3',
                  explanationEn: '"Had he arrived in time, we would have caught the train." (Omission of "if" via inversion).',
                  explanationHi: '\'If\' हटाकर वाक्य को \'Had\' से शुरू करना।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Exam Problem: Conditional Correction',
                  problemEn: 'Spot the error: "If he had informed me (A) / about the emergency, (B) / I would help him immediately. (C) / No error (D)"',
                  stepByStepSolutionEn: '1. If-clause uses "had informed" (Past Perfect, Type 3 condition).\n2. According to Type 3 formula, the main clause must use "would have + V3".\n3. Part (C) uses "would help" (Type 2 form), which violates conditional concordance.\n4. Correction: "I would have helped him immediately." Error is in Part (C).',
                  shortcutTrick: 'Match: "had + V3" in the IF clause demands "would have + V3" in the main clause. No exceptions.'
                }
              ],
              practicalApplications: [
                'Composing error-free test questions, research statements, and curriculum guidelines.',
                'Distinguishing sequential event causality in reading comprehension passages.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Using "would have" in the If-clause: "If I would have known..."',
                  whyWrongEn: 'The conditional marker "If" never takes modal auxiliaries like "would have".',
                  correctWayEn: '"If I had known..."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Type 3 conditionals (Had + V3 -> would have + V3).',
                  'Since + Simple Past point of time ("Ten years have passed since he left Patna").',
                  'Universal truth exception to sequence of tenses.'
                ],
                commonDistractorTraps: [
                  'Pairing "since" with a duration instead of a point in time ("since three hours").',
                  'Using "was" in place of subjunctive "were" in hypothetical clauses.'
                ],
                relatedPyqReferences: ['BPSC TRE 1.0 Language Paper Q12', 'BPSC TRE 3.0 Q2']
              },
              quickRevisionPoints: [
                'Present Perfect cannot be paired with past date markers (yesterday, ago, in 1990).',
                'Earlier of two past actions = had + V3; later action = V2.',
                'Subjunctive condition: "If I were..." (never "If I was").',
                'Type 3 conditional: If + had + V3 -> would have + V3.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-tense-1',
                  questionEn: 'Complete the sentence correctly: "Had the warning siren sounded earlier, the residents ________ the low-lying zone safely."',
                  questionHi: 'वाक्य पूरा करें: "Had the warning siren sounded earlier, the residents ________ the low-lying zone safely."',
                  options: [
                    { id: 'A', textEn: 'would evacuate', isCorrect: false },
                    { id: 'B', textEn: 'would have evacuated', isCorrect: true },
                    { id: 'C', textEn: 'will have evacuated', isCorrect: false },
                    { id: 'D', textEn: 'had evacuated', isCorrect: false }
                  ],
                  explanationEn: 'The sentence is an inverted Type 3 conditional ("Had the siren sounded..."). The main clause must take "would have + V3" ("would have evacuated").',
                  conceptTested: 'Inverted Type 3 conditional'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-tc-1',
                topicId: 'eng-topic-tenses-conditionals',
                chapterId: 'eng-ch-tenses',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank: "It has been five years since he ________ to New Delhi."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'has moved', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'moved', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'had moved', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'MODERATE',
                practiceMode: 'BPSC_EXAM',
                explanationEn: 'When "since" is used as a conjunction of time connecting a present perfect main clause ("It has been five years"), the subordinate clause takes Simple Past (V2: "moved").',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: SUBJECT-VERB AGREEMENT
      // ----------------------------------------------------
      {
        id: 'eng-ch-sva',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 3,
        slug: 'subject-verb-agreement',
        titleEn: 'Subject-Verb Concord & Syntax Rules',
        titleHi: 'कर्ता-क्रिया सामंजस्य (Subject-Verb Agreement)',
        descriptionEn: 'Exhaustive rules covering Either/Neither, Along with, As well as, Each/Every, and inverted subjects.',
        descriptionHi: 'Either/or, Neither/nor, As well as, तथा Each/Every के साथ क्रिया के सामंजस्य के अचूक नियम।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'eng-topic-sva-mastery',
            chapterId: 'eng-ch-sva',
            topicNumber: 1,
            slug: 'subject-verb-agreement-rules',
            titleEn: 'Golden Rules of Subject-Verb Concord',
            titleHi: 'कर्ता-क्रिया सामंजस्य के प्रमुख नियम',
            descriptionEn: 'The proximity rule vs the primary subject rule; fractional subjects, and "more than one" syntax.',
            descriptionHi: 'निकटता का नियम, प्राथमिक कर्ता का नियम, और भिन्नवाचक कर्ताओं के साथ क्रिया का प्रयोग।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-eng-sva-mastery',
              topicId: 'eng-topic-sva-mastery',
              titleEn: 'Mastering Subject-Verb Agreement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु Subject-Verb Agreement की मास्टर क्लास',
              readingTimeMinutes: 11,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Distinguish between correlative conjunctions (Proximity Rule) and additive prepositional phrases (Primary Subject Rule).',
                'Handle "Each", "Every", "Neither of", and "Either of" with singular verbs.',
                'Master the "One of the [Plural Noun] who [Plural Verb]" relative clause structure.',
                'Apply correct agreement with fractions, percentages, and expressions of distance/sum.'
              ],
              introductionEn: 'Subject-Verb Concord is the cornerstone of the BPSC Language syllabus. Questions test your ability to look past intervening prepositional phrases and locate the true grammatical subject.',
              introductionHi: 'Subject-Verb Agreement से BPSC TRE में न्यूनतम 2 प्रश्न पूछे जाते हैं। परीक्षक अक्सर मुख्य कर्ता और क्रिया के बीच लंबे वाक्यांश जोड़कर भ्रमित करते हैं।',
              conceptSections: [
                {
                  title: '1. Additive Phrases vs. Primary Subject Rule',
                  contentMarkdownEn: 'When two nouns are connected by:\n* **As well as, Along with, Together with, In addition to, Accompanied by, Like, Unlike, Besides, With**\n\nThe verb agrees **STRICTLY with the FIRST (PRIMARY) subject**, completely ignoring the second noun:\n\n* *Example 1:* The Principal, **along with all the teachers**, **is** attending the seminar.\n* *Example 2:* The students, **as well as the monitor**, **are** participating in the debate.'
                },
                {
                  title: '2. Correlative Conjunctions: Rule of Proximity',
                  contentMarkdownEn: 'When two subjects are joined by:\n* **Either... or**, **Neither... nor**, **Not only... but also**, or **Or**\n\nThe verb agrees with the **NEAREST subject (the noun closest to the verb)**:\n\n* *Example 1:* Neither the teacher nor the students **were** present.\n* *Example 2:* Neither the students nor the teacher **was** present.'
                },
                {
                  title: '3. The High-Yield "One of the..." Structure',
                  contentMarkdownEn: 'Analyze these two variations carefully:\n\n1. **Standard Pattern:** One of + Plural Noun + **Singular Verb**\n   * "One of the candidates **has** qualified."\n2. **Relative Clause Pattern:** One of + Plural Noun + **WHO / WHICH / THAT** + **Plural Verb**\n   * "She is one of the candidates **who have** qualified." (The antecedent of \'who\' is candidates, so verb is plural!)\n3. **The "ONLY One of" Exception:** The ONLY one of + Plural Noun + WHO + **Singular Verb**\n   * "She is the **only one** of the candidates who **has** qualified."'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Rule of Proximity',
                  definitionEn: 'The grammatical principle where a verb agrees in person and number with the noun located nearest to it in correlative structures.',
                  definitionHi: 'निकटता का नियम: जब क्रिया अपने सबसे निकट स्थित कर्ता के अनुसार बदलती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Rule for "More than one"',
                  formulaOrRule: 'More than one + Singular Noun -> Singular Verb. | More than two/three + Plural Noun -> Plural Verb.',
                  explanationEn: '"More than one student WAS absent" (singular), but "More students than one WERE absent" (plural).',
                  explanationHi: '\'More than one\' के बाद एकवचन संज्ञा और एकवचन क्रिया आती है।'
                }
              ],
              examples: [
                {
                  title: 'BPSC Exam Question: As Well As Concord',
                  problemEn: 'Select the correct sentence: "The Minister, as well as his bodyguards, (was / were) injured."',
                  stepByStepSolutionEn: 'Connective is "as well as". The verb must agree with the first subject ("The Minister", singular). Therefore, the correct verb is "was".',
                  shortcutTrick: 'Cross out everything between commas ("as well as his bodyguards") and read: "The Minister was injured."'
                }
              ],
              practicalApplications: [
                'Editing administrative orders, examination notifications, and institutional policy documents.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Saying "Neither of the boys were selected."',
                  whyWrongEn: '"Neither" refers to neither one (singular distributive).',
                  correctWayEn: '"Neither of the boys was selected."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: ['"As well as" first-subject concord.', 'Neither... nor proximity rule.', 'One of the [plural] who [plural verb].'],
                commonDistractorTraps: ['Using plural verb after "each of" or "either of".'],
                relatedPyqReferences: ['BPSC TRE 2.0 Language Q15']
              },
              quickRevisionPoints: [
                '"As well as, with, along with" -> First subject decides verb.',
                '"Either... or, Neither... nor" -> Nearest subject decides verb.',
                '"Each, Every, Neither of, Either of" -> Singular verb.',
                '"One of the... who" -> Plural verb.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-sva-1',
                  questionEn: 'Choose the correct option: "Not only the captain but also the crew members ________ awarded medals for bravery."',
                  questionHi: 'सही विकल्प चुनें: "Not only the captain but also the crew members ________ awarded medals for bravery."',
                  options: [
                    { id: 'A', textEn: 'was', isCorrect: false },
                    { id: 'B', textEn: 'were', isCorrect: true },
                    { id: 'C', textEn: 'is', isCorrect: false },
                    { id: 'D', textEn: 'has been', isCorrect: false }
                  ],
                  explanationEn: 'In "Not only... but also", the verb agrees with the nearest subject ("crew members", plural). Hence "were" is correct.',
                  conceptTested: 'Not only but also concord'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-sva-1',
                topicId: 'eng-topic-sva-mastery',
                chapterId: 'eng-ch-sva',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank: "Ten miles ________ a long distance to cover on foot in one day."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'is', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'are', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'were', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'BASIC',
                explanationEn: 'When a specific plural measurement of distance, amount, weight, or time is treated as a unified whole, it takes a singular verb ("is").',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // SUBJECT 2: HINDI LANGUAGE (सामान्य हिंदी)
  // ==========================================
  {
    key: 'HINDI_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'General Hindi Grammar & Composition',
    displayNameHi: 'सामान्य हिंदी व्याकरण एवं रचना',
    iconName: 'Languages',
    descriptionEn: 'High-scoring Hindi syllabus for BPSC TRE: वर्ण विचार, संधि, समास, उपसर्ग, प्रत्यय, तत्सम-तद्भव, वाक्य शुद्धि, मुहावरे एवं अपठित गद्यांश।',
    descriptionHi: 'BPSC TRE भाषा खंड में 22 प्रश्नों के लिए हिंदी व्याकरण की प्रामाणिक एवं विस्तृत अध्ययन सामग्री।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: VARNA VICHAR
      // ----------------------------------------------------
      {
        id: 'hin-ch-varna',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 1,
        slug: 'varna-vichar',
        titleEn: 'Phonology & Sound Classification (वर्ण विचार)',
        titleHi: 'वर्ण विचार एवं उच्चारण स्थान',
        descriptionEn: 'Vowels, consonants, places of articulation (कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य), घोष-अघोष and अल्पप्राण-महाप्राण.',
        descriptionHi: 'स्वर, व्यंजन, उच्चारण स्थान, अल्पप्राण-महाप्राण, घोष-अघोष ध्वनियों का वैज्ञानिक वर्गीकरण।',
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
            descriptionEn: 'Classification of 52 varnas, hrasva/dirgha/pluta swara, sparsha/antastha/ushma vyanjan, and articulation charts.',
            descriptionHi: 'ह्रस्व-दीर्घ स्वर, स्पर्श, अंतःस्थ एवं ऊष्म व्यंजन, तथा उच्चारण स्थान के BPSC सूत्र।',
            estimatedMinutes: 18,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-hin-varnamala',
              topicId: 'hin-topic-varnamala',
              titleEn: 'Complete Guide to Hindi Varna Vichar for BPSC TRE',
              titleHi: 'BPSC TRE के लिए वर्ण विचार की संपूर्ण प्रामाणिक गाइड',
              readingTimeMinutes: 10,
              difficulty: 'BEGINNER',
              learningObjectives: [
                'हिंदी वर्णमाला के 52 वर्णों का विभाजन (11 स्वर + 41 व्यंजन) समझना।',
                'उच्चारण स्थान (कंठ, तालु, मूर्धा, दंत, ओष्ठ) के अनुसार वर्णों की सटीक पहचान।',
                'अल्पप्राण (1, 3, 5 + अंतःस्थ) एवं महाप्राण (2, 4 + ऊष्म) में अंतर स्पष्ट करना।',
                'अघोष (1, 2 + श, ष, स) एवं सघोष/घोष (3, 4, 5 + सभी स्वर + य, र, ल, व, ह) को कंठस्थ करना।'
              ],
              introductionEn: 'Varna Vichar forms the fundamental linguistic bedrock of the BPSC Hindi language test. Questions directly ask for the place of articulation or phonetic characteristics (alpaprana/mahaprana) of specific letters.',
              introductionHi: 'BPSC TRE भाषा पत्र में वर्ण विचार से कम से कम 2 प्रश्न निश्चित पूछे जाते हैं। आयोग उच्चारण स्थान (कंठ्य, तालव्य, आदि) तथा अल्पप्राण-महाप्राण के वर्गीकरण पर केंद्रित प्रश्न बनाता है।',
              conceptSections: [
                {
                  title: '1. वर्णों का वर्गीकरण एवं भेद',
                  contentMarkdownEn: 'हिंदी वर्णमाला में कुल 52 वर्ण माने गए हैं:\n1. **स्वर (11):** अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ\n   * **ह्रस्व स्वर (4):** अ, इ, उ, ऋ (मूल स्वर)\n   * **दीर्घ स्वर (7):** आ, ई, ऊ, ए, ऐ, ओ, औ (संधि स्वर)\n2. **अयोगवाह (2):** अं (अनुस्वार), अः (विसर्ग)\n3. **व्यंजन (39):**\n   * स्पर्श व्यंजन: क-वर्ग से प-वर्ग तक (25 वर्ण)\n   * द्विगुण/उत्क्षिप्त व्यंजन: ड़, ढ़ (2 वर्ण)\n   * अंतःस्थ व्यंजन: य, र, ल, व (4 वर्ण)\n   * ऊष्म/संघर्षी व्यंजन: श, ष, स, ह (4 वर्ण)\n   * संयुक्त व्यंजन: क्ष (क्+ष्), त्र (त्+र्), ज्ञ (ज्+ञ्), श्र (श्+र्) (4 वर्ण)'
                },
                {
                  title: '2. उच्चारण स्थान की तालिका (BPSC का सर्वाधिक प्रिय विषय)',
                  contentMarkdownEn: 'विभिन्न ध्वनियों का उच्चारण मुख के जिस भाग से होता है, वही उसका उच्चारण स्थान कहलाता है:',
                  tableData: {
                    headers: ['उच्चारण स्थान', 'स्वर', 'व्यंजन वर्ग', 'अन्य वर्ण', 'संस्कृत सूत्र'],
                    rows: [
                      ['कंठ्य (कंठ से)', 'अ, आ', 'क, ख, ग, घ, ङ', 'ह, विसर्ग (:) ', 'अकुहविसर्जनीयानां कण्ठः'],
                      ['तालव्य (तालु से)', 'इ, ई', 'च, छ, ज, झ, ञ', 'य, श', 'इचुयशानां तालु'],
                      ['मूर्धन्य (मूर्धा से)', 'ऋ', 'ट, ठ, ड, ढ, ण, ड़, ढ़', 'र, ष', 'ऋटुरषाणां मूर्धा'],
                      ['दंत्य (दाँत से)', '—', 'त, थ, द, ध, न', 'ल, स', 'लृतुलसानां दन्ताः'],
                      ['ओष्ठ्य (होंठ से)', 'उ, ऊ', 'प, फ, ब, भ, म', '—', 'उपूपध्मानीयानाम् ओष्ठौ'],
                      ['कंठतालव्य', 'ए, ऐ', '—', '—', 'एदैतोः कण्ठतालु'],
                      ['कंठोष्ठ्य', 'ओ, औ', '—', '—', 'ओदौतोः कण्ठोष्ठम्'],
                      ['दंतोष्ठ्य', '—', '—', 'व', 'वकारस्य दन्तोष्ठम्']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Exam Trap: \'व\' और \'श/ष/स\'',
                    textEn: 'Remember that \'व\' is Danto-sthya (teeth + lips), and among the sibilants: श is Talavya, ष is Murdhanya, and स is Dantya.',
                    textHi: '\'श\' तालव्य है, \'ष\' मूर्धन्य है, और \'स\' दंत्य है। BPSC इन तीनों के उच्चारण स्थान पर बार-बार प्रश्न पूछता है।'
                  }
                },
                {
                  title: '3. प्राणत्व एवं घोषत्व के आधार पर वर्गीकरण',
                  contentMarkdownEn: '**1. प्राणत्व (वायु की मात्रा) के आधार पर:**\n* **अल्पप्राण:** प्रत्येक वर्ग का **1, 3, 5वाँ वर्ण** + सभी अंतःस्थ (य, र, ल, व) + सभी स्वर।\n* **महाप्राण:** प्रत्येक वर्ग का **2, 4था वर्ण** + सभी ऊष्म (श, ष, स, ह)।\n\n**2. घोषत्व (नाद/कंपन) के आधार पर:**\n* **अघोष:** प्रत्येक वर्ग का **1, 2रा वर्ण** + श, ष, स (कुल 13)।\n* **सघोष (घोष):** प्रत्येक वर्ग का **3, 4, 5वाँ वर्ण** + सभी अंतःस्थ (य, र, ल, व) + ह + सभी स्वर।'
                }
              ],
              importantDefinitions: [
                {
                  term: 'अल्पप्राण',
                  definitionEn: 'Speech sounds articulated with minimal breath expulsion (Columns 1, 3, 5 + ya, ra, la, va).',
                  definitionHi: 'जिन वर्णों के उच्चारण में मुख से कम वायु निकलती है तथा हकार जैसी ध्वनि नहीं होती।'
                },
                {
                  term: 'महाप्राण',
                  definitionEn: 'Aspirated consonants produced with strong puff of air (Columns 2, 4 + sha, sha, sa, ha).',
                  definitionHi: 'जिन वर्णों के उच्चारण में मुख से अधिक वायु निकलती है और हकार जैसी ध्वनि सुनाई देती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'अल्पप्राण-महाप्राण शॉर्टकट',
                  formulaOrRule: 'अल्पप्राण = विषम (1, 3, 5) | महाप्राण = सम (2, 4)',
                  explanationEn: 'Odd columns are Alpaprana, even columns are Mahaprana.',
                  explanationHi: 'क, ग, ङ अल्पप्राण हैं; ख, घ महाप्राण हैं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC प्रश्न उदाहरण: उच्चारण स्थान',
                  problemEn: '\'च\' वर्ग की ध्वनियों का उच्चारण स्थान क्या है? (A) कंठ (B) तालु (C) मूर्धा (D) दंत',
                  stepByStepSolutionEn: 'सूत्र: "इचुयशानां तालु" -> इ, ई, च-वर्ग, य, श का उच्चारण स्थान तालु है। अतः सही उत्तर (B) तालु है।',
                  shortcutTrick: 'क-वर्ग = कंठ, च-वर्ग = तालु, ट-वर्ग = मूर्धा, त-वर्ग = दंत, प-वर्ग = ओष्ठ।'
                }
              ],
              practicalApplications: [
                'शुद्ध उच्चारण, वर्तनी शुद्धि और प्राथमिक/माध्यमिक कक्षाओं में भाषा शिक्षण।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: '\'ह\' को अघोष मानना।',
                  whyWrongEn: '\'ह\' ऊष्म व्यंजन होते हुए भी सघोष (घोष) ध्वनि है, जबकि श, ष, स अघोष हैं।',
                  correctWayEn: '\'ह\' सघोष और महाप्राण है।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: ['\'श\', \'ष\', \'स\' का उच्चारण स्थान', '\'व\' का उच्चारण स्थान (दंतोष्ठ्य)', 'अल्पप्राण एवं महाप्राण की पहचान'],
                commonDistractorTraps: ['अघोष में \'ह\' को शामिल कर लेना।'],
                relatedPyqReferences: ['BPSC TRE 1.0 Hindi Paper Q3', 'BPSC TRE 2.0 Hindi Q5']
              },
              quickRevisionPoints: [
                'स्वर 11 हैं, मूल स्वर 4 (अ, इ, उ, ऋ) हैं।',
                'कंठ्य: क-वर्ग, अ, आ, ह, विसर्ग।',
                'तालव्य: च-वर्ग, इ, ई, य, श।',
                'मूर्धन्य: ट-वर्ग, ऋ, र, ष।',
                'अल्पप्राण = 1, 3, 5 + य, र, ल, व। महाप्राण = 2, 4 + श, ष, स, ह।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-varna-1',
                  questionEn: 'हिंदी में \'ष\' (मूर्धन्य षकार) का उच्चारण स्थान निम्नलिखित में से कौन सा है?',
                  questionHi: 'हिंदी में \'ष\' वर्ण का उच्चारण स्थान निम्नलिखित में से कौन सा है?',
                  options: [
                    { id: 'A', textEn: 'तालु', isCorrect: false },
                    { id: 'B', textEn: 'मूर्धा', isCorrect: true },
                    { id: 'C', textEn: 'दंत', isCorrect: false },
                    { id: 'D', textEn: 'कंठ', isCorrect: false }
                  ],
                  explanationEn: '\'ष\' मूर्धन्य ध्वनि है (ऋटुरषाणां मूर्धा)। \'श\' तालव्य है तथा \'स\' दंत्य है।',
                  conceptTested: 'उच्चारण स्थान'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-v-1',
                topicId: 'hin-topic-varnamala',
                chapterId: 'hin-ch-varna',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'निम्नलिखित में से कौन सा वर्ण \'महाप्राण\' व्यंजन है?',
                questionTextHi: 'निम्नलिखित में से कौन सा वर्ण \'महाप्राण\' व्यंजन है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'क', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'ग', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'ख', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'BPSC_EXAM',
                explanationEn: 'प्रत्येक वर्ग का दूसरा और चौथा वर्ण महाप्राण होता है। \'ख\' क-वर्ग का दूसरा वर्ण है, अतः यह महाप्राण है।',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: SANDHI VICHAR
      // ----------------------------------------------------
      {
        id: 'hin-ch-sandhi',
        subjectKey: 'HINDI_LANGUAGE',
        chapterNumber: 2,
        slug: 'sandhi-rules',
        titleEn: 'Sandhi Rules & Word Formation (संधि विचार)',
        titleHi: 'संधि विचार एवं संधि विच्छेद',
        descriptionEn: 'Swar Sandhi (Dirgha, Guna, Vriddhi, Yan, Ayadi), Vyanjan Sandhi, and Visarga Sandhi rules with BPSC exam patterns.',
        descriptionHi: 'स्वर संधि के 5 भेद, व्यंजन संधि के नियम, और विसर्ग संधि का विस्तृत अध्ययन।',
        totalPracticeQuestions: 18,
        totalEstimatedMinutes: 45,
        topics: [
          {
            id: 'hin-topic-swar-sandhi',
            chapterId: 'hin-ch-sandhi',
            topicNumber: 1,
            slug: 'swar-sandhi-types',
            titleEn: 'Five Types of Swar Sandhi',
            titleHi: 'स्वर संधि के पाँच प्रमुख भेद',
            descriptionEn: 'Formulas and identification of दीर्घ, गुण, वृद्धि, यण, और अयादि संधि with classic examples.',
            descriptionHi: 'दीर्घ, गुण, वृद्धि, यण, अयादि संधि के सूत्र और विच्छेद की अचूक तकनीक।',
            estimatedMinutes: 22,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-hin-swar-sandhi',
              topicId: 'hin-topic-swar-sandhi',
              titleEn: 'Mastering Swar Sandhi for BPSC TRE',
              titleHi: 'BPSC TRE हेतु स्वर संधि की मास्टर क्लास',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'स्वर संधि के पाँचों भेदों (दीर्घ, गुण, वृद्धि, यण, अयादि) के नियमों को समझना।',
                'शब्द देखते ही संधि का नाम पहचानने की 5-सेकंड ट्रिक सीखना।',
                'यण संधि (इ/ई -> य्, उ/ऊ -> व्) एवं अयादि संधि (ए -> अय्, ओ -> अव्) के विच्छेद में निपुणता।',
                'BPSC के भ्रमित करने वाले प्रश्नों में सही उत्तर चुनना।'
              ],
              introductionEn: 'Sandhi questions in BPSC TRE evaluate a candidate\'s knowledge of phonetic junction rules. Identifying whether a word belongs to Yan, Guna, or Vriddhi is crucial for scoring full marks.',
              introductionHi: 'संधि से BPSC TRE में 2 से 3 प्रश्न अवश्य पूछे जाते हैं। विशेष रूप से यण संधि (अत्यधिक, स्वागत) और अयादि संधि (पावक, नयन) आयोग के सर्वाधिक पसंदीदा विषय हैं।',
              conceptSections: [
                {
                  title: '1. स्वर संधि के 5 भेद एवं उनके अचूक सूत्र',
                  contentMarkdownEn: 'दो स्वरों के मेल से होने वाले विकार को स्वर संधि कहते हैं:',
                  tableData: {
                    headers: ['संधि का नाम', 'नियम / सूत्र', 'मात्रा पहचान (शॉर्टकट)', 'प्रमुख उदाहरण'],
                    rows: [
                      ['1. दीर्घ संधि', 'अ/आ + अ/आ = आ; इ/ई + इ/ई = ई; उ/ऊ + उ/ऊ = ऊ', 'बड़ी मात्रा: आ (ा), ई (ी), ऊ (ू)', 'विद्या + आलय = विद्यालय, गिरि + ईश = गिरीश, भानु + उदय = भानूदय'],
                      ['2. गुण संधि', 'अ/आ + इ/ई = ए; अ/आ + उ/ऊ = ओ; अ/आ + ऋ = अर्', 'एक मात्रा: ए (े), ओ (ो), तथा \'अर्\'', 'नर + इंद्र = नरेंद्र, सूर्य + उदय = सूर्योदय, देव + ऋषि = देवर्षि'],
                      ['3. वृद्धि संधि', 'अ/आ + ए/ऐ = ऐ; अ/आ + ओ/औ = औ', 'दो मात्राएँ: ऐ (ै), औ (ौ)', 'एक + एक = एकैक, महा + ओज = महौज, सदा + एव = सदैव'],
                      ['4. यण संधि', 'इ/ई -> य्; उ/ऊ -> व्; ऋ -> र् (किसी भिन्न स्वर के साथ)', 'य, व, र से पहले आधा अक्षर', 'इति + आदि = इत्यादि, सु + आगत = स्वागत, अनु + अय = अन्वय'],
                      ['5. अयादि संधि', 'ए -> अय्; ऐ -> आय्; ओ -> अव्; औ -> आव्', 'शब्द के बीच में य या व (बिना आधा अक्षर)', 'ने + अन = नयन, नै + अक = नायक, पो + अन = पवन, पौ + अक = पावक']
                    ]
                  },
                  calloutBox: {
                    type: 'TIP',
                    title: 'BPSC 5-सेकंड पहचान ट्रिक',
                    textEn: 'If there is half letter before ya/va -> Yan Sandhi. If ya/va appears with simple vowels (no half letter) -> Ayadi Sandhi.',
                    textHi: 'यदि \'य\' या \'व\' से पहले आधा व्यंजन हो तो 99% यण संधि होती है (जैसे: स्वागत, अत्यधिक)। यदि बीच में \'य\' या \'व\' अकेला हो तो अयादि संधि (जैसे: पावक, नयन)।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'यण संधि',
                  definitionEn: 'Junction where i/ee transforms to y, and u/oo transforms to v before dissimilar vowels.',
                  definitionHi: 'जब इ/ई, उ/ऊ, या ऋ के बाद कोई भिन्न स्वर आए तो इ/ई का \'य\', उ/ऊ का \'व\', और ऋ का \'र\' हो जाता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'अयादि संधि सूत्र',
                  formulaOrRule: 'ए/ऐ/ओ/औ + भिन्न स्वर = अय्/आय्/अव्/आव्',
                  explanationEn: 'Ne + an = Nayan; Pau + ak = Paavak.',
                  explanationHi: 'ने + अन = नयन; पौ + अक = पावक।'
                }
              ],
              examples: [
                {
                  title: 'BPSC प्रश्न: स्वागत का संधि विच्छेद',
                  problemEn: '\'स्वागत\' का सही संधि विच्छेद क्या है? (A) स्वा + गत (B) सु + आगत (C) स्व + आगत (D) सु + गत',
                  stepByStepSolutionEn: '\'स्वागत\' में \'व\' से पहले आधा \'स्\' है (यण संधि)। उ/ऊ + आ = वा। अतः सु + आगत = स्वागत। सही उत्तर (B) है।',
                  shortcutTrick: 'यण संधि में \'व्\' का विच्छेद हमेशा \'उ\' या \'ऊ\' से होता है।'
                }
              ],
              practicalApplications: [
                'शब्द संपदा संवर्धन, शुद्ध वर्तनी और भाषा विश्लेषण।'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: '\'सदैव\' को गुण संधि समझना।',
                  whyWrongEn: '\'सदैव\' में दो मात्राएँ (ऐ) हैं, जो वृद्धि संधि का परिचायक है।',
                  correctWayEn: 'सदा + एव = सदैव (वृद्धि संधि)।'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: ['यण संधि (इत्यादि, स्वागत, अन्वेषण)', 'अयादि संधि (पावक, पावन, नयन)', 'वृद्धि संधि (एकैक, महौषध)'],
                commonDistractorTraps: ['स्व + आगत को सही मान लेना जबकि शुद्ध \'सु + आगत\' है।'],
                relatedPyqReferences: ['BPSC TRE 1.0 Q8', 'BPSC TRE 2.0 Q11']
              },
              quickRevisionPoints: [
                'दीर्घ = आ, ई, ऊ।',
                'गुण = ए, ओ, अर्।',
                'वृद्धि = ऐ, औ।',
                'यण = य, व से पहले आधा अक्षर।',
                'अयादि = अय्, आय्, अव्, आव्।'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-hin-sandhi-1',
                  questionEn: '\'पावक\' शब्द में कौन सी संधि है?',
                  questionHi: '\'पावक\' शब्द में कौन सी संधि है?',
                  options: [
                    { id: 'A', textEn: 'दीर्घ संधि', isCorrect: false },
                    { id: 'B', textEn: 'गुण संधि', isCorrect: false },
                    { id: 'C', textEn: 'यण संधि', isCorrect: false },
                    { id: 'D', textEn: 'अयादि संधि', isCorrect: true }
                  ],
                  explanationEn: 'पौ + अक = पावक (औ + अ = आव्), यह अयादि संधि का उदाहरण है।',
                  conceptTested: 'अयादि संधि'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-hin-s-1',
                topicId: 'hin-topic-swar-sandhi',
                chapterId: 'hin-ch-sandhi',
                subjectKey: 'HINDI_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: '\'अन्वेषण\' का सही संधि विच्छेद क्या होगा?',
                questionTextHi: '\'अन्वेषण\' का सही संधि विच्छेद क्या होगा?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'अनु + एषण', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'अन्व + एषण', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'अनु + षण', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'MODERATE',
                practiceMode: 'BPSC_EXAM',
                explanationEn: '\'अनु + एषण\' = अन्वेषण (उ + ए = वे, यण संधि)।',
                treVersion: 'TRE_4_0',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
