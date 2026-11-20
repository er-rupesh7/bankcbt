import { LMSSubject } from '@/types/bpscLms';

export const BPSC_LANGUAGE_SUBJECTS: LMSSubject[] = [
  // =========================================================================
  // SUBJECT 1: ENGLISH LANGUAGE & GRAMMAR (QUALIFYING SECTION - 30 MARKS)
  // =========================================================================
  {
    key: 'ENGLISH_LANGUAGE',
    sectionKey: 'PART_1_LANGUAGE',
    displayNameEn: 'English Language & Grammar',
    displayNameHi: 'अंग्रेजी भाषा एवं व्याकरण',
    iconName: 'BookOpen',
    descriptionEn: 'Essential 8-mark English syllabus for BPSC TRE: Parts of Speech, Tenses, Subject-Verb Agreement, Prepositions, Voice, and Vocabulary with authentic TRE 1.0, 2.0, 3.0 PYQs.',
    descriptionHi: 'BPSC TRE भाषा पत्र (30 अंक अर्हक) में अंग्रेजी व्याकरण, काल, कर्ता-क्रिया सामंजस्य, और शब्दावली के प्रामाणिक प्रश्न।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: PARTS OF SPEECH & NOUNS
      // ----------------------------------------------------
      {
        id: 'eng-ch-parts-of-speech',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 1,
        slug: 'parts-of-speech',
        titleEn: 'Parts of Speech & Word Classes',
        titleHi: 'शब्द भेद (Parts of Speech)',
        descriptionEn: 'Invariable singular nouns (furniture, advice), collective noun concord, pronoun order (2-3-1 rule), and relative pronouns.',
        descriptionHi: 'संज्ञा के नियम, एकवचन-बहुवचन अपवाद, सर्वनाम क्रम (2-3-1 नियम), तथा BPSC त्रुटि सुधार।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 40,
        topics: [
          {
            id: 'eng-topic-nouns-pronouns',
            chapterId: 'eng-ch-parts-of-speech',
            topicNumber: 1,
            slug: 'nouns-and-pronouns',
            titleEn: 'Nouns, Cases, Numbers & Pronoun Concord',
            titleHi: 'संज्ञा, वचन, कारक एवं सर्वनाम संबंध',
            descriptionEn: 'Uncountable nouns without plural -s (furniture, scenery), polite pronoun sequence, and pronoun antecedent rules.',
            descriptionHi: 'अगणनीय संज्ञाएं (furniture, advice), सर्वनामों का 2-3-1 क्रम, तथा indefinite pronoun \'one\'s\' का प्रयोग।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-eng-nouns-pronouns',
              topicId: 'eng-topic-nouns-pronouns',
              titleEn: 'Nouns & Pronoun Agreement for BPSC TRE',
              titleHi: 'BPSC TRE हेतु संज्ञा एवं सर्वनाम की संपूर्ण गाइड',
              readingTimeMinutes: 12,
              difficulty: 'BEGINNER',
              learningObjectives: [
                'Identify uncountable nouns that never take plural \'s/es\' or indefinite article \'a/an\' (furniture, advice, luggage, scenery).',
                'Apply the 2-3-1 pronoun sequence rule (You, he, and I) in polite contexts vs 1-2-3 rule in guilt/blame.',
                'Enforce concord with indefinite pronoun "one" (must use "one\'s", not "his").',
                'Recognize invariable plural nouns (cattle, people, police) that take plural verbs without an \'s\' suffix.'
              ],
              introductionEn: 'In BPSC TRE Language papers, error detection and sentence completion questions frequently test deceptive uncountable nouns and pronoun agreement. Mastering invariable nouns and the 2-3-1 pronoun order ensures easy full marks in General English.',
              introductionHi: 'BPSC TRE भाषा खंड में संज्ञा और सर्वनाम के अपवादों पर बार-बार प्रश्न पूछे जाते हैं। विशेष रूप से furniture, advice जैसे अगणनीय शब्द और सर्वनामों के क्रम (2-3-1) पर आधारित प्रश्न हर शिफ्ट में आते हैं।',
              conceptSections: [
                {
                  title: '1. Invariable Singular Nouns (Uncountable Nouns)',
                  contentMarkdownEn: 'Certain nouns are uncountable in standard English and **never take an indefinite article (a/an) or a plural \'s/es\' suffix**:\n\n* **Furniture, Scenery, Poetry, Machinery, Luggage, Baggage, Information, Advice, Hair, Bread, Stationery.**\n* *Incorrect:* The furnitures in the hall are new.\n* *Correct:* The **furniture in the hall is** new.\n* *Incorrect:* He gave me many advices.\n* *Correct:* He gave me **many pieces of advice**.'
                },
                {
                  title: '2. Pronoun Order & Concord Rules',
                  contentMarkdownEn: '* **Polite / Positive Contexts (2-3-1 Rule):** Second Person (You) $\\rightarrow$ Third Person (He/She) $\\rightarrow$ First Person (I).\n  * "You, he, and I have passed the BPSC exam."\n* **Confession / Negative / Plural (1-2-3 Rule):** First Person (I) $\\rightarrow$ Second Person (You) $\\rightarrow$ Third Person (He).\n  * "I, you, and he are to blame for this loss."\n* **Indefinite Pronoun Concord:** The pronoun "One" takes **"one\'s"**, never "his" or "her":\n  * "One must perform **one\'s** duty faithfully."'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Uncountable Noun',
                  definitionEn: 'Substances or concepts that cannot be counted as individual items and take singular verbs with no plural -s suffix.',
                  definitionHi: 'वे संज्ञाएं जिनकी गणना नहीं की जा सकती (जैसे advice, furniture); इनके साथ एकवचन क्रिया लगती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: '231 Pronoun Rule',
                  formulaOrRule: '2nd Person (You) + 3rd Person (He/She) + 1st Person (I)',
                  explanationEn: 'The polite order of singular pronouns in English sentences.',
                  explanationHi: 'सकारात्मक वाक्यों में सर्वनामों का क्रम: You, he, and I।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Fill in the blank: "One must respect ________ elders." (A) his (B) their (C) one\'s (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. When the subject is the indefinite pronoun "one", the possessive adjective is strictly "one\'s".\n2. Official BPSC TRE 2.0 Key: Option (C) one\'s.',
                  shortcutTrick: 'Subject is "One" -> Possessive is "one\'s".'
                }
              ],
              practicalApplications: [
                'Official letter writing and drafting administrative notices without pronoun discord.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Writing "myself" as the subject: "Myself and Ramesh will attend."',
                  whyWrongEn: 'Reflexive pronouns cannot function as subjects without a noun/pronoun antecedent.',
                  correctWayEn: '"Ramesh and I will attend."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Uncountable nouns (furniture, advice, luggage).',
                  'One -> one\'s concord (TRE 2.0 Q.02).',
                  '2-3-1 pronoun sequence.'
                ],
                commonDistractorTraps: [
                  'Adding plural -s to luggage or furniture.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.02 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.04 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Furniture, advice, scenery, luggage -> Always singular, no plural \'s\'.',
                'Cattle, police, people -> Always plural, take plural verbs.',
                'Order of pronouns: 2 -> 3 -> 1 ("You, he, and I").',
                'One must do one\'s duty.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-noun-1',
                  questionEn: 'Which of the following sentences is grammatically CORRECT?',
                  questionHi: 'निम्नलिखित में से कौन-सा वाक्य व्याकरण की दृष्टि से शुद्ध है?',
                  options: [
                    { id: 'A', textEn: 'The sceneries of Kashmir are breathtaking.', isCorrect: false },
                    { id: 'B', textEn: 'The scenery of Kashmir is breathtaking.', isCorrect: true },
                    { id: 'C', textEn: 'All the furnitures were auctioned.', isCorrect: false },
                    { id: 'D', textEn: 'He gave me many advices.', isCorrect: false }
                  ],
                  explanationEn: '"Scenery" is an uncountable noun. It cannot be pluralized as "sceneries" and always takes a singular verb "is".',
                  conceptTested: 'Uncountable noun syntax'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-pyq-1',
                topicId: 'eng-topic-nouns-pronouns',
                chapterId: 'eng-ch-parts-of-speech',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank with the appropriate possessive pronoun: "One should always remain faithful to ________ country."',
                questionTextHi: 'उचित सर्वनाम से रिक्त स्थान भरें: "One should always remain faithful to ________ country."',
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
                explanationEn: 'In formal English grammar, when the subject is the generic pronoun "one", the corresponding possessive form is strictly "one\'s".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 2,
                sourceDocumentRef: 'BPSC Advt 27/2023 Language Paper Series A, Q.2 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: SUBJECT-VERB AGREEMENT & CONCORD
      // ----------------------------------------------------
      {
        id: 'eng-ch-sva',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 2,
        slug: 'subject-verb-agreement',
        titleEn: 'Subject-Verb Concord & Syntax Rules',
        titleHi: 'कर्ता-क्रिया सामंजस्य (Subject-Verb Agreement)',
        descriptionEn: 'Correlative conjunctions (Either... or, Neither... nor - Proximity Rule), As well as (Primary subject rule), and Each/Every.',
        descriptionHi: 'Neither... nor के साथ निकटतम कर्ता का नियम (TRE 2.0 Q.01), As well as के साथ प्रथम कर्ता का नियम।',
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
            descriptionEn: 'Rule of proximity for Neither/Nor and Either/Or (TRE 2.0 Q.01), As well as / Along with concord, and "One of the... who" plural verb rule.',
            descriptionHi: 'Neither... nor में क्रिया निकटतम कर्ता के अनुसार बदलती है; As well as में प्रथम कर्ता के अनुसार।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 6,
            tutorial: {
              id: 'tut-eng-sva-mastery',
              topicId: 'eng-topic-sva-mastery',
              titleEn: 'Subject-Verb Concord for BPSC TRE',
              titleHi: 'BPSC TRE हेतु Subject-Verb Concord की संपूर्ण गाइड',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Apply the Rule of Proximity: In "Neither... nor" and "Either... or", the verb agrees with the NEAREST subject (TRE 2.0 Q.01).',
                'Apply the Primary Subject Rule: With "as well as, along with, with, together with", the verb agrees with the FIRST subject.',
                'Enforce singular verbs with distributive pronouns: "Each of, Neither of, Either of + Plural Noun + Singular Verb".',
                'Solve relative clause concord: "One of the [Plural Noun] WHO [Plural Verb]".'
              ],
              introductionEn: 'Subject-Verb Agreement is the single highest-yield topic in the BPSC English Language section. Question 1 in the TRE 2.0 Language paper directly tested the proximity rule with "Neither the teacher nor the students".',
              introductionHi: 'BPSC TRE भाषा पत्र में Subject-Verb Concord से हर शिफ्ट में प्रश्न आते हैं। TRE 2.0 भाषा पेपर का पहला प्रश्न (Q.01) सीधे "Neither... nor" के निकटता नियम पर आधारित था।',
              conceptSections: [
                {
                  title: '1. Rule of Proximity: Neither... Nor & Either... Or',
                  contentMarkdownEn: 'When two subjects are connected by:\n* **Neither... nor**, **Either... or**, **Not only... but also**, or **Or**\n\nThe verb agrees **STRICTLY with the NEAREST subject** (the subject immediately preceding the verb):\n\n* *Example 1:* Neither the teacher nor the **students were** present in the classroom.\n* *Example 2:* Neither the students nor the **teacher was** present in the classroom.'
                },
                {
                  title: '2. Primary Subject Rule: As Well As & Along With',
                  contentMarkdownEn: 'When two nouns are connected by:\n* **As well as, Along with, Together with, With, In addition to, Accompanied by, Besides**\n\nThe verb agrees **STRICTLY with the FIRST (Primary) subject**, ignoring the secondary subject:\n\n* *Example 1:* The Principal, **as well as all the teachers**, **is** attending the meeting.\n* *Example 2:* The players, **along with their coach**, **are** celebrating the victory.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Rule of Proximity',
                  definitionEn: 'The grammatical principle where the verb agrees in number with the subject physically closest to it.',
                  definitionHi: 'निकटता का नियम: जब क्रिया अपने सबसे निकट स्थित कर्ता के अनुसार निर्धारित होती है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Neither... Nor Proximity Formula',
                  formulaOrRule: 'Neither A nor B + Verb (Verb agrees strictly with B, the nearest subject)',
                  explanationEn: 'Directly tested in TRE 2.0 Language Q.01.',
                  explanationHi: 'Neither... nor में क्रिया हमेशा B (निकटतम कर्ता) के अनुसार लगेगी।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Choose the correct option: "Neither the teacher nor the students ________ present." (A) was (B) were (C) is (D) More than one of the above (E) None of the above',
                  stepByStepSolutionEn: '1. Connective is "Neither... nor". The verb must agree with the nearest subject.\n2. The nearest subject is "the students" (plural).\n3. Therefore, the verb must be plural: "were".\n4. Official BPSC TRE 2.0 Key: Option (B) were.',
                  shortcutTrick: 'Nearest subject is "students" (plural) -> Choose plural verb "were".'
                }
              ],
              practicalApplications: [
                'Writing flawless administrative correspondence and syllabus notifications.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Using a plural verb with "Neither of the boys were present."',
                  whyWrongEn: '"Neither of" is distributive and takes a singular verb: "Neither of the boys was present."',
                  correctWayEn: '"Neither of the boys was present."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Neither... nor proximity rule (TRE 2.0 Q.01).',
                  'As well as first-subject agreement.',
                  'Each of / Either of + singular verb.'
                ],
                commonDistractorTraps: [
                  'Assuming "Neither... nor" always takes a singular verb.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.01 Series A)'
                ]
              },
              quickRevisionPoints: [
                'Neither... nor / Either... or -> Verb agrees with nearest subject.',
                'As well as / Along with -> Verb agrees with first subject.',
                'Each, Every, Neither of, Either of -> Singular verb.',
                'One of the [plural] who [plural verb].'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-sva-1',
                  questionEn: 'Complete the sentence: "The Prime Minister, along with his cabinet colleagues, ________ arrived at the venue."',
                  questionHi: 'वाक्य पूरा करें: "The Prime Minister, along with his cabinet colleagues, ________ arrived at the venue."',
                  options: [
                    { id: 'A', textEn: 'have', isCorrect: false },
                    { id: 'B', textEn: 'has', isCorrect: true },
                    { id: 'C', textEn: 'are', isCorrect: false },
                    { id: 'D', textEn: 'were', isCorrect: false }
                  ],
                  explanationEn: 'With "along with", the verb agrees with the primary subject ("The Prime Minister", singular). Therefore, "has" is correct.',
                  conceptTested: 'Along with first subject concord'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-sva-pyq-1',
                topicId: 'eng-topic-sva-mastery',
                chapterId: 'eng-ch-sva',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Choose the correct form of the verb to complete the sentence: "Neither the teacher nor the students ________ present in the auditorium."',
                questionTextHi: 'वाक्य पूरा करने के लिए क्रिया का सही रूप चुनें: "Neither the teacher nor the students ________ present in the auditorium."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'was', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'were', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'is', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'When two subjects are joined by "Neither... nor", the verb must agree in number with the nearest subject. Here, the nearest subject is "students" (plural), requiring the plural past verb "were".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 1,
                sourceDocumentRef: 'BPSC Advt 27/2023 Language Paper Series A, Q.1 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 3: TENSES, CONDITIONALS & SEQUENCE OF TENSES
      // -----------------------------------------------------------------------
      {
        id: 'eng-ch-tenses-conditionals',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 3,
        slug: 'tenses-conditionals-sequence',
        titleEn: 'Tenses, Conditionals & Sequence of Tenses',
        titleHi: 'काल, शर्तबोधक वाक्य एवं काल-क्रम नियम',
        descriptionEn: 'Present, Past, and Future Tense structures, 3 types of Conditional Clauses (Type 0, 1, 2, 3), and "since/for" usage.',
        descriptionHi: 'Tenses के 12 भेद, Conditional Sentences (यदि... तो), काल्पनिक वाक्य (If I were a king), तथा Since/For का सही प्रयोग।',
        totalPracticeQuestions: 16,
        totalEstimatedMinutes: 35,
        topics: [
          {
            id: 'eng-topic-tenses-conditionals',
            chapterId: 'eng-ch-tenses-conditionals',
            topicNumber: 1,
            slug: 'tenses-and-conditionals',
            titleEn: 'Tenses, Conditionals & Sequence of Tenses',
            titleHi: 'काल, शर्तबोधक वाक्य एवं काल-क्रम नियम',
            descriptionEn: 'Master Past Perfect + Simple Past sequences, Type 3 Conditionals (Had + V3 ... would have + V3), and Subjunctive moods.',
            descriptionHi: 'Had + V3 के साथ would have + V3 का युग्म; Since (निश्चित समय) vs For (समयावधि); Past indefinite vs Present perfect।',
            estimatedMinutes: 20,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-eng-tenses',
              topicId: 'eng-topic-tenses-conditionals',
              titleEn: 'Tenses, Conditionals & Subjunctive Mood for BPSC TRE',
              titleHi: 'BPSC TRE हेतु Tenses एवं Conditionals का संपूर्ण अध्ययन',
              readingTimeMinutes: 12,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the 3 core types of Conditional Sentences with standard formulas.',
                'Master the Type 3 Conditional rule: If + Had + V3, Subject + would have + V3.',
                'Differentiate between "since" (Point of time) and "for" (Period of time).',
                'Identify Subjunctive Mood triggers (as if, wish, if only) using past plural "were".'
              ],
              introductionEn: 'Tenses and Conditionals form one of the highest-yield grammar topics in the BPSC TRE Language qualifying paper. BPSC consistently tests conditional clause inversion, Type 3 hypothetical past conditions, and the distinction between point of time and duration.',
              introductionHi: 'BPSC TRE भाषा अर्हक परीक्षा में Tenses और Conditionals से प्रतिवर्ष 2-3 प्रश्न पूछे जाते हैं। विशेष रूप से Type 3 Conditional (काल्पनिक भूतकाल) और Since/For का प्रयोग परीक्षार्थियों के लिए सर्वाधिक निर्णायक होता है।',
              conceptSections: [
                {
                  title: '1. Three Types of Conditional Clauses in English',
                  contentMarkdownEn: 'A conditional sentence has two parts: the **If-Clause** (Condition) and the **Main Clause** (Result).\n\n**Key Formulas:**\n* **Type 1 (Probable/Real):** If + Simple Present $\\rightarrow$ Simple Future (will / shall + V1).\n  * *Example:* "If it rains, we will cancel the match."\n* **Type 2 (Improbable/Hypothetical Present):** If + Simple Past (V2 / were) $\\rightarrow$ would + V1.\n  * *Example:* "If I had money, I would buy a car." / "If I were the CM, I would reform schools."\n* **Type 3 (Impossible/Unfulfilled Past):** If + Past Perfect (had + V3) $\\rightarrow$ would have + V3.\n  * *Example:* "If he had invited me, I would have attended the party."',
                  tableData: {
                    headers: ['Conditional Type', 'If-Clause Structure', 'Main Clause Structure', 'BPSC Frequency'],
                    rows: [
                      ['Type 0 (Universal Truth)', 'If + Simple Present', 'Simple Present', 'Moderate'],
                      ['Type 1 (Possible Future)', 'If + V1 / V1+s/es', 'will / can / may + V1', 'High'],
                      ['Type 2 (Hypothetical)', 'If + Simple Past (were/V2)', 'would / could + V1', 'Very High'],
                      ['Type 3 (Unfulfilled Past)', 'If + had + V3', 'would have + V3', 'Highest (TRE 1.0 & 2.0)']
                    ]
                  }
                },
                {
                  title: '2. "Since" vs. "For" Usage in Perfect Tenses',
                  contentMarkdownEn: '* **Since:** Used for a **Point of Time** (a specific start moment in time).\n  * Examples: *since 2015, since Monday, since morning, since childhood, since 7:00 PM.*\n* **For:** Used for a **Period of Time** (duration/quantity of time).\n  * Examples: *for 3 years, for 5 hours, for two months, for a long time.*'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Type 3 Conditional',
                  definitionEn: 'A conditional sentence describing an unfulfilled past action and its hypothetical past result: If + had + V3 ..., would have + V3.',
                  definitionHi: 'अपूर्ण भूतकाल की शर्त, जहाँ कार्य भूतकाल में नहीं हो सका: If + had + V3 ..., would have + V3।'
                },
                {
                  term: 'Subjunctive Mood',
                  definitionEn: 'Expresses wishes, hypothetical scenarios, or conditions contrary to fact, using "were" irrespective of the subject.',
                  definitionHi: 'काल्पनिक या इच्छाबोधक भाव, जहाँ कर्ता एकवचन होने पर भी "were" का प्रयोग होता है (जैसे: If I were a bird)।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Type 3 Conditional Master Rule',
                  formulaOrRule: 'If + Subject + had + V3  -->  Subject + would have + V3',
                  explanationEn: 'Both clauses must be in the past perfect / modal perfect form. Never use "would have" in the If-clause.',
                  explanationHi: 'If-क्लॉज में कभी भी "would have" नहीं आता, केवल "had + V3" आता है।'
                },
                {
                  title: 'Point vs. Period Time Rule',
                  formulaOrRule: 'Since + Exact Calendar Point | For + Numerical Duration',
                  explanationEn: 'Since 1947 / 8 o\'clock vs. For 10 years / 3 days.',
                  explanationHi: 'निश्चित बिंदु के लिए Since, अवधि के लिए For।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 2.0 Original Question Analysis',
                  problemEn: 'Complete the sentence: "If he had invited me, I ________ have attended the party."',
                  stepByStepSolutionEn: '1. Identify the If-clause: "If he had invited me" -> Structure is [If + had + V3].\n2. This is a Type 3 Conditional.\n3. The Main Clause requires [Subject + would have + V3].\n4. Since "have attended" is already written in the question sentence, we only need the auxiliary "would".\n5. Official BPSC Key: Option (A) would.',
                  shortcutTrick: 'Match: "had + V3" in condition always demands "would have + V3" in result.'
                }
              ],
              practicalApplications: [
                'Correct usage of time markers and professional formal communication in classroom and official drafting.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Writing "If he would have studied, he would have passed."',
                  whyWrongEn: '"Would have" cannot appear in the If-clause; only "had + V3" is correct.',
                  correctWayEn: '"If he had studied, he would have passed."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Type 3 Conditional structure (TRE 2.0 Q.03).',
                  'Since vs For in Present Perfect Continuous (TRE 1.0 Q.05).',
                  'Past action interrupted by another: Past Continuous + Simple Past.'
                ],
                commonDistractorTraps: [
                  'Selecting "would have" when "have" is already present in the question text.'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.03 Series A)',
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.05 Series A)'
                ]
              },
              quickRevisionPoints: [
                'If + had + V3 ... would have + V3 (Type 3).',
                'Since = Point of time (since 2015, since morning).',
                'For = Period of time (for 5 years, for two hours).',
                'If I were you (Subjunctive mood takes "were").',
                'Two past actions: Earlier action = Past Perfect (had + V3); Later action = Simple Past (V2).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-tense-1',
                  questionEn: 'Choose the correct form of the verb: "If the doctor had arrived on time, the patient ________ saved."',
                  questionHi: 'क्रिया का सही रूप चुनें: "If the doctor had arrived on time, the patient ________ saved."',
                  options: [
                    { id: 'A', textEn: 'would be', isCorrect: false },
                    { id: 'B', textEn: 'would have been', isCorrect: true },
                    { id: 'C', textEn: 'will have been', isCorrect: false },
                    { id: 'D', textEn: 'had been', isCorrect: false }
                  ],
                  explanationEn: 'Passive voice of Type 3 conditional requires "would have been + V3".',
                  conceptTested: 'Type 3 Conditional Passive Voice'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-pyq-tenses-1',
                topicId: 'eng-topic-tenses-conditionals',
                chapterId: 'eng-ch-tenses-conditionals',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank with the correct auxiliary verb: "If he had invited me, I ________ have attended the party."',
                questionTextHi: 'उचित सहायक क्रिया से रिक्त स्थान भरें: "If he had invited me, I ________ have attended the party."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'would', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'will', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'could', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'MODERATE',
                practiceMode: 'PYQ',
                explanationEn: 'In a third conditional sentence (had + invited), the main clause structure is "would + have + past participle". Since "have attended" is already printed, "would" completes the predicate.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 3,
                sourceDocumentRef: 'BPSC Advt 27/2023 Language Paper Series A, Q.3 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-eng-pyq-tenses-2',
                topicId: 'eng-topic-tenses-conditionals',
                chapterId: 'eng-ch-tenses-conditionals',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank with the appropriate preposition/time marker: "He has been living in Delhi ________ 2015."',
                questionTextHi: 'उचित प्रीपोजिशन से रिक्त स्थान भरें: "He has been living in Delhi ________ 2015."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'since', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'for', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'from', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: '2015 denotes a specific starting year (Point of Time). In Present Perfect Continuous tense, "since" is strictly used before points of time.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 5,
                sourceDocumentRef: 'BPSC Advt 26/2023 Language Paper Series A, Q.5 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // -----------------------------------------------------------------------
      // CHAPTER 4: ARTICLES & PREPOSITIONS
      // -----------------------------------------------------------------------
      {
        id: 'eng-ch-articles-prepositions',
        subjectKey: 'ENGLISH_LANGUAGE',
        chapterNumber: 4,
        slug: 'articles-and-prepositions',
        titleEn: 'Articles (A, An, The) & Prepositions of Relation',
        titleHi: 'आर्टिकल्स (A, An, The) एवं संबंधबोधक अव्यय',
        descriptionEn: 'Vowel vs consonant sounds (an honest, a European), Definite article rules, and Fixed Latin prepositions (senior to, fond of).',
        descriptionHi: 'स्वर ध्वनि (an hour, an MLA) vs व्यंजन ध्वनि (a university, a European); लैटिन तुलनात्मक विशेषण (senior/junior + to)।',
        totalPracticeQuestions: 15,
        totalEstimatedMinutes: 30,
        topics: [
          {
            id: 'eng-topic-articles-prepositions',
            chapterId: 'eng-ch-articles-prepositions',
            topicNumber: 1,
            slug: 'articles-prepositions-mastery',
            titleEn: 'Articles & Fixed Prepositions',
            titleHi: 'आर्टिकल्स एवं निश्चित प्रीपोजिशन नियम',
            descriptionEn: 'Indefinite article rules based on phonetic pronunciation, Zero Article, and Latin adjectives taking "to" instead of "than".',
            descriptionHi: 'उच्चारण आधारित Articles (a European, an FIR); Senior, junior, superior, inferior के बाद "to" का प्रयोग।',
            estimatedMinutes: 18,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 5,
            tutorial: {
              id: 'tut-eng-art-prep',
              topicId: 'eng-topic-articles-prepositions',
              titleEn: 'Articles & Fixed Prepositions for BPSC TRE',
              titleHi: 'BPSC TRE हेतु Articles एवं Prepositions का संपूर्ण मार्गदर्शक',
              readingTimeMinutes: 10,
              difficulty: 'BEGINNER',
              learningObjectives: [
                'Master phonetic rules for A vs An (sound-based, not letter-based).',
                'Recognize exceptional vowel words sounding like consonants: a European, a university, a one-eyed man.',
                'Identify silent-H words requiring "an": an hour, an heir, an honest man.',
                'Learn Latin comparative adjectives that strictly take "to" rather than "than".'
              ],
              introductionEn: 'Articles and Prepositions represent the foundational test of English grammatical accuracy in BPSC TRE. The examination repeatedly focuses on sound-based article selection and fixed preposition collocations.',
              introductionHi: 'BPSC TRE के अंग्रेजी खंड में आर्टिकल्स (A, An, The) और प्रीपोजिशन से निश्चित प्रश्न पूछे जाते हैं। आयोग विशेष रूप से उच्चारण ध्वनि के भ्रम (जैसे European, University, Honest) और लैटिन विशेषणों की परीक्षा लेता है।',
              conceptSections: [
                {
                  title: '1. Phonetic Selection of Articles: Sound vs. Letter',
                  contentMarkdownEn: 'The choice between **"a"** and **"an"** is determined by **SOUND**, never by spelling:\n* **Use "AN" before Vowel Sounds:** /æ/, /e/, /ɪ/, /ɒ/, /ʌ/, /aɪ/ etc.\n  * *an apple, an egg, an umbrella, an inkpot, an honest man (silent h), an hour, an MBA, an MLA, an FIR.*\n* **Use "A" before Consonant Sounds:** /j/, /w/, /b/, /k/ etc.\n  * *a boy, a pen, a European (/jʊərəˈpiːən/), a university (/juːnɪˈvɜːsɪti/), a one-rupee note (/wʌn/), a union.*',
                  tableData: {
                    headers: ['Word', 'Initial Sound', 'Correct Article', 'Reason / Exam Note'],
                    rows: [
                      ['European', 'Consonant /j/ (य)', 'a European', 'High-frequency BPSC TRE trap'],
                      ['University', 'Consonant /j/ (य)', 'a university', 'Starts with vowel U, but sound is consonant'],
                      ['Honest / Hour', 'Vowel /ɒ/ (अ)', 'an honest / an hour', 'Initial "h" is completely silent'],
                      ['MLA / MP / FIR', 'Vowel /e/ (ए)', 'an MLA / an FIR', 'Acronym starts with vowel sound "Em"']
                    ]
                  }
                },
                {
                  title: '2. Latin Comparative Adjectives Taking "TO"',
                  contentMarkdownEn: 'Adjectives ending in **-ior** (derived from Latin) are followed by the preposition **"to"**, NEVER by **"than"**:\n* **Senior to, Junior to, Superior to, Inferior to, Prior to, Anterior to, Posterior to**.\n* *Example:* "He is senior to me" (NOT: senior than me).\n* **Prefer / Preferable:** Always takes "to" (e.g. "I prefer tea to coffee").'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Indefinite Article',
                  definitionEn: '"A" and "An" used to refer to a non-specific singular countable noun.',
                  definitionHi: 'A और An अनिश्चित एकवचन गणनीय संज्ञा के पूर्व प्रयुक्त होते हैं।'
                },
                {
                  term: 'Latin Comparatives',
                  definitionEn: 'Adjectives ending in "-ior" that govern the preposition "to" instead of the standard conjunction "than".',
                  definitionHi: '-ior पर समाप्त होने वाले विशेषण जो "than" के स्थान पर "to" लेते हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Sound-Based Article Axiom',
                  formulaOrRule: 'Vowel Sound (अ, आ, इ, ई, ए, ऐ, ओ, औ) = AN | Consonant Sound = A',
                  explanationEn: 'Always pronounce the word in Hindi/Devanagari: if the first letter is a Swar, use "an".',
                  explanationHi: 'शब्द का पहला अक्षर हिंदी में बोलें: यदि स्वर ध्वनि (अ से औ) निकले तो "an", यदि व्यंजन निकले तो "a"।'
                },
                {
                  title: 'Latin Adjective Preposition Rule',
                  formulaOrRule: 'Senior / Junior / Superior / Inferior / Prefer + TO (Never THAN)',
                  explanationEn: 'Never use "than" with Latin comparatives.',
                  explanationHi: 'Senior/Junior आदि के साथ कभी भी "than" न लगाएं, हमेशा "to" लगाएं।'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE 1.0 Original Question Analysis',
                  problemEn: 'Choose the correct article: "He is ________ European scholar."',
                  stepByStepSolutionEn: '1. The following word is "European".\n2. While it begins with the letter "E", phonetically it starts with the semi-vowel /j/ (sound of "य").\n3. Consonant sounds take the indefinite article "a".\n4. Official BPSC TRE 1.0 Key: Option (A) a.',
                  shortcutTrick: 'European = "यूरेशियन" -> starts with "य" (व्यंजन) -> Use "a".'
                }
              ],
              practicalApplications: [
                'Error detection, academic writing, and avoiding common spoken English errors.'
              ],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Saying "He is senior than me."',
                  whyWrongEn: 'Senior is a Latin comparative and takes the preposition "to".',
                  correctWayEn: '"He is senior to me."'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'European / University with article "a" (TRE 1.0 Q.01).',
                  'Senior/Junior with preposition "to" (TRE 2.0 Q.04).',
                  'An MLA / An FIR phonetic acronyms.'
                ],
                commonDistractorTraps: [
                  'Selecting "an" merely because "European" starts with vowel letter "E".'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (26-08-2023, Shift 2, Q.01 Series A)',
                  'BPSC TRE 2.0 (15-12-2023, Shift 2, Q.04 Series A)'
                ]
              },
              quickRevisionPoints: [
                'a European, a university, a union, a one-rupee note.',
                'an honest, an hour, an heir, an MLA, an FIR, an SP.',
                'Senior / Junior / Superior / Inferior / Prefer + TO.',
                'Before superlative adjectives (the highest, the best) use "the".'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-eng-art-1',
                  questionEn: 'Which of the following sentences uses the correct article?',
                  questionHi: 'निम्नलिखित में से किस वाक्य में आर्टिकल का सही प्रयोग हुआ है?',
                  options: [
                    { id: 'A', textEn: 'He filed a FIR at the police station.', isCorrect: false },
                    { id: 'B', textEn: 'He filed an FIR at the police station.', isCorrect: true },
                    { id: 'C', textEn: 'He filed the FIR with an pen.', isCorrect: false },
                    { id: 'D', textEn: 'He is an university professor.', isCorrect: false }
                  ],
                  explanationEn: '"FIR" is pronounced "Ef-Eye-Aar", beginning with the vowel sound /e/, hence taking "an".',
                  conceptTested: 'Acronym Article Selection'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-eng-pyq-art-1',
                topicId: 'eng-topic-articles-prepositions',
                chapterId: 'eng-ch-articles-prepositions',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Fill in the blank with the appropriate article: "He is ________ European scholar."',
                questionTextHi: 'उचित आर्टिकल से रिक्त स्थान भरें: "He is ________ European scholar."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'a', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'an', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'the', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Although "European" starts with vowel letter "E", it begins with the consonant glide /j/ ("yoo"). Hence the correct indefinite article is "a".',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-26',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 1,
                sourceDocumentRef: 'BPSC Advt 26/2023 Language Paper Series A, Q.1 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              },
              {
                id: 'pq-eng-pyq-prep-2',
                topicId: 'eng-topic-articles-prepositions',
                chapterId: 'eng-ch-articles-prepositions',
                subjectKey: 'ENGLISH_LANGUAGE',
                sectionKey: 'PART_1_LANGUAGE',
                questionTextEn: 'Select the correct preposition: "Mr. Sharma is senior ________ me in the department."',
                questionTextHi: 'सही प्रीपोजिशन चुनें: "Mr. Sharma is senior ________ me in the department."',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'than', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'to', isCorrect: true },
                  { id: 'o3', identifier: 'C', textEn: 'from', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'B',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Comparative adjectives ending in -ior (senior, junior, superior, inferior) are always accompanied by the preposition "to", not the conjunction "than".',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 2 (Language Qualifying Paper)',
                bookletSeries: 'Series A',
                officialQuestionNumber: 4,
                sourceDocumentRef: 'BPSC Advt 27/2023 Language Paper Series A, Q.4 & Final Answer Key',
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  },

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
      }
    ]
  }
];
