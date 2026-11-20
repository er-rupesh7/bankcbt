// src/data/bpsc/lms/english/module1Grammar.ts
// MODULE 1: GRAMMAR FUNDAMENTALS (Chapters 1 to 9)
// Complete digital textbook curriculum for BPSC TRE 4.0 English Language
// Equipped with detailed rules, 3+ correct examples, 2+ incorrect examples with explanations, 2+ exam-style examples, comparison tables, mnemonics, and authentic BPSC PYQs.

import { LMSChapter } from '@/types/bpscLms';

export const MODULE_1_GRAMMAR_CHAPTERS: LMSChapter[] = [
  // =========================================================================
  // CHAPTER 1: PARTS OF SPEECH
  // =========================================================================
  {
    id: 'eng-ch-01-parts-of-speech',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 1,
    slug: 'parts-of-speech-and-word-functions',
    titleEn: 'Chapter 1: Parts of Speech & Word Functions in Context',
    titleHi: 'अध्याय 1: शब्द भेद (Parts of Speech) एवं वाक्य में उनके कार्य',
    descriptionEn: 'Master the eight parts of speech (Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection) and understand how word functions change dynamically based on sentence context.',
    descriptionHi: 'आठों शब्द भेदों (संज्ञा, सर्वनाम, क्रिया, विशेषण, क्रियाविशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक) की पहचान एवं वाक्य के संदर्भ में शब्द के बदलते कार्य।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-pos-identification',
        chapterId: 'eng-ch-01-parts-of-speech',
        topicNumber: 1,
        slug: 'eight-parts-of-speech-identification',
        titleEn: 'The Eight Parts of Speech & Contextual Word Functions',
        titleHi: 'आठ शब्द भेद एवं वाक्य संदर्भ में उनके व्यावहारिक कार्य',
        descriptionEn: 'Detailed classification of all 8 parts of speech, identifying how the exact same word acts as noun, verb, adjective, or adverb depending on syntax.',
        descriptionHi: 'वाक्य में शब्दों की स्थिति के आधार पर शब्द भेद पहचानना (जैसे \'fast\', \'round\', \'after\' का विभिन्न रूपों में प्रयोग)।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 6,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.1), TRE 2.0 (Q.3) & TRE 3.0 (Q.2)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-pos-identification',
          topicId: 'eng-topic-pos-identification',
          titleEn: 'Comprehensive Guide to Parts of Speech & Syntactic Roles',
          titleHi: 'शब्द भेद एवं वाक्य संरचना की संपूर्ण मार्गदर्शिका',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Define and identify all eight parts of speech in complex sentences.',
            'Understand that a word\'s part of speech is determined by its FUNCTION in a sentence, not by its spelling.',
            'Differentiate between words acting as multiple parts of speech (e.g., "fast", "well", "before", "right").',
            'Solve BPSC questions that ask candidates to classify underlined words in prose excerpts.'
          ],
          introductionEn: '==In English grammar, a word does not permanently belong to a single part of speech. Its identity is dictated solely by what work it does in a given sentence.==\n\nFor example, consider the word **"water"**: In *"Water is life"*, it is a **Noun**; in *"I water the plants daily"*, it is a **Verb**; and in *"We drink water bottles"*, it functions as an **Adjective**. In BPSC TRE, examiners frequently test this contextual fluidity rather than simple dictionary definitions.',
          introductionHi: 'अंग्रेजी व्याकरण में कोई शब्द स्थायी रूप से केवल एक \'Part of Speech\' नहीं होता। वाक्य में वह क्या कार्य कर रहा है, इसी से उसका व्याकरणिक स्वरूप तय होता है। जैसे \'water\' संज्ञा भी है और क्रिया भी।',
          conceptSections: [
            {
              title: '1. The Eight Parts of Speech at a Glance',
              contentMarkdownEn: 'The English language classifies every word into one of eight functional categories:\n\n1. **Noun (संज्ञा):** Names a person, place, thing, concept, or quality. (*"==Patna== is the capital of ==Bihar==."*)\n2. **Pronoun (सर्वनाम):** Replaces a noun to avoid monotonous repetition. (*"Rajesh is diligent; ==he== studies daily."*)\n3. **Verb (क्रिया):** Asserts an action, state of being, or occurrence. (*"The train ==arrived== on time."*)\n4. **Adjective (विशेषण):** Modifies, describes, or quantifies a noun or pronoun. (*"She solved a ==difficult== problem."*)\n5. **Adverb (क्रियाविशेषण):** Modifies a verb, an adjective, or another adverb—answering *how, when, where, to what degree*. (*"He spoke ==eloquently==."*)\n6. **Preposition (संबंधबोधक):** Shows temporal, spatial, or logical relation between a noun/pronoun and other words. (*"The pen is ==on== the table."*)\n7. **Conjunction (समुच्चयबोधक):** Connects words, phrases, or clauses. (*"She worked hard ==yet== she failed."*)\n8. **Interjection (विस्मयादिबोधक):** Expresses sudden emotion or surprise. (*"==Alas!== we lost the match."*)'
            },
            {
              title: '2. Contextual Shifts: One Word, Multiple Parts of Speech',
              contentMarkdownEn: 'BPSC examiners love testing words that wear different masks depending on the syntactic environment:',
              tableData: {
                headers: ['Word', 'Used as Noun', 'Used as Verb', 'Used as Adjective', 'Used as Adverb / Preposition'],
                rows: [
                  ['**Fast**', 'He observed a day-long **fast**.', 'Muslims **fast** during Ramadan.', 'He caught the **fast** train.', 'He ran **fast** to catch the bus.'],
                  ['**Round**', 'The boxer won the first **round**.', 'The police will **round** up suspects.', 'The earth has a **round** shape.', 'The wheel turned **round** and round.'],
                  ['**After**', 'Our **afters** (dessert) arrived.', '—', 'In **after** years, he regretted it.', 'She came **after** I had left. (Conj) / Sat **after** him (Prep).'],
                  ['**Right**', 'Know your legal **rights**.', 'We must **right** this terrible wrong.', 'Take the **right** turn at the square.', 'Turn **right** immediately.']
                ]
              },
              calloutBox: {
                type: 'EXAM_TRAP',
                title: 'BPSC Exam Trap: "Fast" as an Adverb, NEVER "Fastly"!',
                textEn: 'In English, the word **"fast"** serves as both an adjective (*"a fast bowler"*) and an adverb (*"he bowls fast"*). The word **"fastly" DOES NOT EXIST** in standard English! Questions often tempt candidates with "He ran fastly" as Option A. Never select it!',
                textHi: '\'Fast\' का Adverb रूप भी \'fast\' ही होता है, \'fastly\' शब्द अंग्रेजी में अमान्य है।'
              }
            },
            {
              title: '3. Exemplary Library: Correct vs Incorrect Usages',
              contentMarkdownEn: '### Correct Examples (At least 3):\n1. *"The **patient** (**Noun**) was extremely **patient** (**Adjective**) with the doctors."*\n2. *"They **walk** (**Verb**) every morning, as an hour-long **walk** (**Noun**) keeps them fit."*\n3. *"**Since** (**Conjunction**) you insist, I will accompany you **since** (**Preposition**) noon."*\n\n### Incorrect Examples with Explanations (At least 2):\n1. ❌ *Incorrect:* *"He drove very **fastly** on the Patna bypass."*\n   * **Why Wrong:** "Fastly" is a non-existent word. "Fast" is already an adverb when modifying the verb "drove".\n   * ✔️ *Correct:* *"He drove very **fast** on the Patna bypass."*\n2. ❌ *Incorrect:* *"She gave a **well** explanation of the poem."*\n   * **Why Wrong:** "Explanation" is a noun. Nouns must be modified by adjectives ("good"), not adverbs ("well").\n   * ✔️ *Correct:* *"She gave a **good** explanation of the poem."*\n\n### BPSC Examination-Style Examples (At least 2):\n1. *"Identify the part of speech of the underlined word: "He arrived **shortly** after the chief guest."*\n   * Options: (A) Adjective, (B) Adverb, (C) Preposition, (D) More than one of the above, (E) None of the above.\n   * **Solution:** "Shortly" modifies the prepositional phrase "after the chief guest", answering *when*. It is an **Adverb** (Option B).\n2. *"Which part of speech is "down" in: "The elevator came **down** rapidly."*\n   * Options: (A) Preposition, (B) Noun, (C) Adverb, (D) More than one of the above, (E) None of the above.\n   * **Solution:** "Down" modifies the verb "came" by showing direction without taking a noun object. It functions as an **Adverb** (Option C).'
            }
          ],
          importantDefinitions: [
            {
              term: 'Syntax (वाक्य विन्यास)',
              definitionEn: 'The grammatical arrangement of words in a sentence that determines their syntactic role and part of speech.',
              definitionHi: 'वाक्य में शब्दों का वह क्रम और व्यवस्था जो उनके व्याकरणिक कार्य को निर्धारित करती है।'
            },
            {
              term: 'Part of Speech (शब्द भेद)',
              definitionEn: 'A category to which a word is assigned in accordance with its syntactic functions within a sentence.',
              definitionHi: 'वाक्य में कार्य के आधार पर शब्दों का वर्गीकरण।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Golden Rule of Word Function',
              formulaOrRule: 'Form follows Function: Meaning & placement in sentence determines Part of Speech, NOT spelling.',
              explanationEn: 'Never label a word in isolation. Always examine the surrounding words: Does it name? Describe? Assert action? Connect?'
            }
          ],
          examples: [
            {
              title: 'Contextual Shift of "Like"',
              problemEn: 'Identify the part of speech of "like" in: "Children **like** sweets" vs "He runs **like** a cheetah".',
              stepByStepSolutionEn: '1. In "Children like sweets", "like" asserts the action/preference of the subject "Children". Hence it is a Verb.\n2. In "He runs like a cheetah", "like" connects the verb to the noun "cheetah" showing similarity. Hence it is a Preposition.',
              shortcutTrick: 'Action verb = Verb; Comparison preposition = Preposition!'
            }
          ],
          practicalApplications: ['Essential for solving BPSC TRE Part 1 classification questions.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Assuming any word ending in "-ly" is automatically an adverb.',
              whyWrongEn: 'Words like "friendly", "lovely", "lonely", and "silly" are ADJECTIVES because they modify nouns (e.g., "a friendly teacher").',
              correctWayEn: 'Noun + "-ly" = Adjective (friend + ly = friendly). Adjective + "-ly" = Adverb (quick + ly = quickly).'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Distinguishing adverbs from adjectives ending in -ly (friendly vs quickly)',
              'Same word functioning as Preposition vs Conjunction (since, before, after)',
              'Absence of "fastly" in English'
            ],
            commonDistractorTraps: ['Confusing prepositions that take objects with adverbs of place that do not'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.1)', 'BPSC TRE 2.0 (Q.3)']
          },
          quickRevisionPoints: [
            'There are 8 parts of speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection.',
            'Function determines part of speech, not spelling.',
            'Fast is both adjective and adverb; fastly is non-existent.',
            'Noun + ly = Adjective (friendly, brotherly, costly).',
            'Adjective + ly = Adverb (beautifully, quietly, softly).'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-pos-1',
              questionEn: 'In the sentence "Still waters run deep", what part of speech is the word "Still"?',
              questionHi: '"Still waters run deep" वाक्य में रेखांकित शब्द "Still" कौन-सा शब्द भेद है?',
              options: [
                { id: 'A', textEn: 'Adjective', isCorrect: true },
                { id: 'B', textEn: 'Adverb', isCorrect: false },
                { id: 'C', textEn: 'Noun', isCorrect: false },
                { id: 'D', textEn: 'Conjunction', isCorrect: false }
              ],
              explanationEn: '"Still" modifies the plural noun "waters", describing its calm and stationary state. Therefore, it is an Adjective.',
              conceptTested: 'Adjective modifying Noun'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-pos-1',
            topicId: 'eng-topic-pos-identification',
            chapterId: 'eng-ch-01-parts-of-speech',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'In the sentence: "He arrived **after** the meeting had adjourned", the word "after" functions as which part of speech?',
            questionTextHi: '"He arrived after the meeting had adjourned" वाक्य में "after" कौन-सा शब्द भेद है?',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'Preposition', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'Conjunction', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'Adverb', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'MODERATE',
            practiceMode: 'BPSC_EXAM',
            explanationEn: '"After" connects two independent clauses: "He arrived" and "the meeting had adjourned". Because it joins two clauses containing finite verbs, it acts as a subordinating Conjunction. (If followed merely by a noun phrase like "after the meeting", it would be a Preposition).',
            isAuthenticPyq: true,
            treVersion: 'TRE_2_0',
            examDate: '2023-12-15',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 3,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 2: NOUNS
  // =========================================================================
  {
    id: 'eng-ch-02-nouns',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 2,
    slug: 'nouns-types-rules-and-errors',
    titleEn: 'Chapter 2: Nouns — Classes, Numbers, Genders & Possessive Cases',
    titleHi: 'अध्याय 2: संज्ञा — भेद, वचन, लिंग एवं संबंध कारक (Possessive Case)',
    descriptionEn: 'Exhaustive guide to common, proper, collective, and abstract nouns; uncountable nouns that never take plural -s (furniture, advice, scenery); hyphenated compound plurals, and possessive apostrophe rules.',
    descriptionHi: 'संज्ञा के सभी भेद, अगणनीय संज्ञाओं के नियम (furniture, scenery, luggage), यौगिक संज्ञाओं के बहुवचन एवं अपोस्ट्रॉफी (\'s) के सही प्रयोग।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-nouns-uncountables',
        chapterId: 'eng-ch-02-nouns',
        topicNumber: 1,
        slug: 'uncountable-nouns-and-plural-traps',
        titleEn: 'Uncountable Noun Traps, Compound Plurals & Possessive Cases',
        titleHi: 'अगणनीय संज्ञाओं के नियम, यौगिक बहुवचन एवं संबंध कारक',
        descriptionEn: 'The invariable singular nouns, collective nouns with singular vs plural verbs, compound nouns (commanders-in-chief), and apostrophe rules for joint vs separate possession.',
        descriptionHi: 'सदा एकवचन रहने वाले शब्द (luggage, poetry, advice), संयुक्त संज्ञाओं के बहुवचन, तथा निर्जीव वस्तुओं के साथ अपोस्ट्रॉफी का निषेध।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 8,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.2), TRE 2.0 (Q.1) & TRE 3.0 (Q.4)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-nouns-uncountables',
          topicId: 'eng-topic-nouns-uncountables',
          titleEn: 'Mastering Noun Rules & High-Yield Examination Traps',
          titleHi: 'संज्ञा के नियम एवं परीक्षा में पूछे जाने वाले प्रमुख अपवाद',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Memorize the list of uncountable nouns that NEVER take plural "-s" or indefinite articles "a/an".',
            'Form correct plural forms of compound nouns (e.g., "mothers-in-law", NOT "mother-in-laws").',
            'Apply apostrophe rules correctly: non-living objects do not take apostrophe \'s\' (e.g., "leg of the table", NOT "table\'s leg").',
            'Differentiate between collective nouns acting as a single unit (singular verb) versus divided members (plural verb).'
          ],
          introductionEn: '==Nouns form the bedrock of English sentence construction. In BPSC competitive examinations, direct classification questions are rare; instead, examiners target deceptive noun numbers and possessive irregularities.==\n\nMany candidates lose marks by writing "furnitures", "sceneries", or "informations". In standard English, these are mass uncountable nouns that cannot be pluralized with "-s" and cannot be preceded directly by "a" or "an".',
          introductionHi: 'संज्ञा के अंतर्गत BPSC में सबसे अधिक प्रश्न अगणनीय संज्ञाओं (Uncountable Nouns) से आते हैं। अंग्रेजी में furniture, advice, information, scenery, luggage आदि शब्दों का बहुवचन नहीं बनाया जाता।',
          conceptSections: [
            {
              title: '1. Invariable Uncountable Nouns (Never Take Plural -s or A/An)',
              contentMarkdownEn: 'The following nouns are **always singular in form and take a singular verb**:\n\n* **Furniture, Information, Advice, Scenery, Poetry, Luggage, Baggage, Machinery, Equipment, Bread, Stationery, Cutlery, Crockery, Jewelery, Hair, Knowledge, Postage, Work, Percentage.**\n\n* **Rules for These Words:**\n  1. Never add "-s" or "-es" (*NO furnitures, NO advices, NO informations*).\n  2. Never place "a" or "an" directly before them (*NO an advice, NO a furniture*).\n  3. To indicate quantity, use unit quantifiers:\n     * *"==a piece of advice=="* / *"two pieces of advice"*\n     * *"==an item of furniture=="* / *"three articles of furniture"*\n     * *"==a loaf of bread=="* / *"two loaves of bread"*'
            },
            {
              title: '2. Nouns Plural in Form but Singular in Meaning',
              contentMarkdownEn: 'These nouns end in "-s" but represent single academic disciplines, games, or diseases and take a **SINGULAR verb**:\n\n* **Subjects:** ==Mathematics, Physics, Economics, Politics, Ethics, Linguistics, Statistics.==\n  * *Example:* *"==Mathematics is== an intriguing subject."*\n  * *Exam Trap Exception:* When preceded by a possessive pronoun ("my", "his") or "the", words like *Mathematics* or *Statistics* refer to practical calculations or data and take a **PLURAL verb**! (*"His mathematics ==are== weak"*).\n* **Diseases:** ==Measles, Mumps, Rickets, Shingles.== (*"Measles is contagious."*)\n* **Sports/Games:** ==Billiards, Darts, Chess, Athletics.== (*"Billiards is played worldwide."*)'
            },
            {
              title: '3. Pluralization of Compound Nouns & Possessive Cases',
              contentMarkdownEn: '* **Plural of Compound Nouns:** Always add "-s" to the **PRINCIPAL (ROOT) WORD**, not to the prepositional tag:\n  * Brother-in-law → ==Brothers-in-law== *(NOT brother-in-laws)*\n  * Commander-in-chief → ==Commanders-in-chief==\n  * Passer-by → ==Passers-by==\n  * Looker-on → ==Lookers-on==\n  * Maid-servant → ==Maid-servants== *(Servant is root)*\n\n* **The Possessive Case (Apostrophe \'s\'):**\n  * Used with living beings: *"Ram\'s laptop"*, *"the lion\'s mane"*.\n  * **Rule with Non-Living Things:** Do NOT use apostrophe \'s\' with inanimate objects! Use the preposition **"of"** instead:\n    * ❌ *"The table\'s leg is broken."* → ✔️ *"==The leg of the table== is broken."*\n    * ❌ *"The fan\'s blade was bent."* → ✔️ *"==The blade of the fan== was bent."*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Mass Noun (द्रव्यवाचक / अगणनीय संज्ञा)',
              definitionEn: 'A noun denoting something that cannot be counted as distinct individual entities, having no plural form in standard English.',
              definitionHi: 'वह संज्ञा जिसे अलग-अलग इकाइयों में नहीं गिना जा सकता और जिसका बहुवचन नहीं बनाया जाता।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Non-Living Apostrophe Prohibition',
              formulaOrRule: 'Non-living object + \'s = INCORRECT. Use: "The [Part] of the [Object]".',
              explanationEn: 'Only living beings, personified objects, and expressions of time/space/distance can take apostrophe \'s\'.'
            }
          ],
          examples: [
            {
              title: 'Correcting Furniture Pluralization',
              problemEn: 'Find error: "All the furnitures of my office were purchased in Kolkata."',
              stepByStepSolutionEn: '1. "Furniture" is an uncountable mass noun.\n2. It has no plural form "furnitures".\n3. It takes a singular verb "was" unless preceded by "pieces/items of".\n4. Correct sentence: "All the furniture in my office was purchased in Kolkata."',
              shortcutTrick: 'No "s" on furniture, luggage, or scenery!'
            }
          ],
          practicalApplications: ['Frequently appears in Error Detection and Sentence Improvement questions.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "I have an urgent work today".',
              whyWrongEn: '"Work" in the sense of labor/task is uncountable; it cannot take the indefinite article "a/an".',
              correctWayEn: 'Say "I have an urgent piece of work today" or "I have urgent work today".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Scenery, furniture, advice with singular verbs (TRE 1.0 Q.2)',
              'Brothers-in-law pluralization (TRE 2.0 Q.1)',
              'Table\'s leg vs leg of the table'
            ],
            commonDistractorTraps: ['Using "are" after Mathematics or Politics in standard contexts'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.2)', 'BPSC TRE 2.0 (Q.1)']
          },
          quickRevisionPoints: [
            'Uncountable nouns take no "-s" and no "a/an": advice, information, furniture, luggage, scenery.',
            'Compound nouns pluralize the root word: Commanders-in-chief, Brothers-in-law.',
            'Inanimate objects take "of", not "\'s": leg of the table, roof of the house.',
            'Mathematics, Physics, Economics take singular verbs when referring to subjects.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-noun-1',
              questionEn: 'Which of the following sentences is grammatically correct?',
              questionHi: 'निम्नलिखित में से कौन-सा वाक्य व्याकरण की दृष्टि से शुद्ध है?',
              options: [
                { id: 'A', textEn: 'The sceneries of Kashmir are breathtaking.', isCorrect: false },
                { id: 'B', textEn: 'The scenery of Kashmir is breathtaking.', isCorrect: true },
                { id: 'C', textEn: 'A scenery of Kashmir is breathtaking.', isCorrect: false },
                { id: 'D', textEn: 'The sceneries of Kashmir is breathtaking.', isCorrect: false }
              ],
              explanationEn: '"Scenery" is an uncountable noun. It cannot be pluralized as "sceneries" and always takes the singular verb "is".',
              conceptTested: 'Scenery uncountable noun rule'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-noun-1',
            topicId: 'eng-topic-nouns-uncountables',
            chapterId: 'eng-ch-02-nouns',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Identify the part of the sentence containing an error: "(A) All his sister-in-laws / (B) are extremely hospitable / (C) and generous to guests / (D) More than one of the above / (E) None of the above"',
            questionTextHi: 'वाक्य के किस भाग में त्रुटि है?',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'All his sister-in-laws', isCorrect: true },
              { id: 'o2', identifier: 'B', textEn: 'are extremely hospitable', isCorrect: false },
              { id: 'o3', identifier: 'C', textEn: 'and generous to guests', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'A',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'In compound nouns joined by hyphens, the plural suffix "-s" is added to the principal noun. The correct plural form is "sisters-in-law", not "sister-in-laws".',
            isAuthenticPyq: true,
            treVersion: 'TRE_2_0',
            examDate: '2023-12-15',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 1,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 3: PRONOUNS
  // =========================================================================
  {
    id: 'eng-ch-03-pronouns',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 3,
    slug: 'pronouns-types-agreement-and-traps',
    titleEn: 'Chapter 3: Pronouns — Classification, 2-3-1 Order & Antecedent Agreement',
    titleHi: 'अध्याय 3: सर्वनाम — भेद, 2-3-1 क्रम एवं पूर्वावर्ती संगति (Antecedent Agreement)',
    descriptionEn: 'Master the 2-3-1 pronoun polite order vs 1-2-3 confession order; who vs whom distinction; each other vs one another; reflexive vs emphatic pronouns, and the indefinite pronoun "one\'s".',
    descriptionHi: 'सर्वनामों का शिष्टाचार क्रम (2-3-1 नियम), Who एवं Whom का अंतर, Each other बनाम One another, तथा One के साथ One\'s का अनिवार्य प्रयोग।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-pronoun-rules',
        chapterId: 'eng-ch-03-pronouns',
        topicNumber: 1,
        slug: 'pronoun-order-relative-pronouns-cases',
        titleEn: 'Pronoun Sequence (2-3-1 Rule), Relative Pronouns & Indefinite "One"',
        titleHi: 'सर्वनाम क्रम (2-3-1 नियम), संबंधवाचक सर्वनाम एवं अनिश्चयवाचक \'One\'',
        descriptionEn: 'Order of personal pronouns in good acts (2-3-1) and guilty acts (1-2-3), nominative vs objective pronoun cases after "between/let/than", and relative pronoun traps.',
        descriptionHi: 'सत्कर्मों में 2-3-1 क्रम (You, he and I) एवं भूल स्वीकारने में 1-2-3 क्रम (I, you and he), Let एवं Between के बाद Objective Case का नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 7,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.4), TRE 2.0 (Q.2) & TRE 3.0 (Q.3)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-pronoun-rules',
          topicId: 'eng-topic-pronoun-rules',
          titleEn: 'Mastering Pronoun Rules & Syntax',
          titleHi: 'सर्वनाम के नियम एवं वाक्य रचना',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Apply the 2-3-1 rule for positive statements and the 1-2-3 rule for confessions/negative contexts.',
            'Use objective case pronouns following prepositions and verbs like "let" (e.g. "between you and me", NOT "you and I").',
            'Enforce consistent pronoun agreement with indefinite "One" (One must do one\'s duty, NOT his duty).',
            'Distinguish between reciprocal pronouns: "each other" (two persons) vs "one another" (more than two).'
          ],
          introductionEn: '==Pronouns prevent tedious repetition, but their correct placement requires strict syntactic etiquette.==\n\nIn English polite conversation, when different persons are combined, the second person (You) comes first, followed by third person (He/She/They), and the speaker (I) comes last. Furthermore, after prepositions like "between" or verbs like "let", pronouns MUST always be in the objective case.',
          introductionHi: 'जब एक से अधिक सर्वनाम एक साथ आते हैं, तो सामान्य वाक्यों में 2-3-1 का नियम (द्वितीय पुरुष -> तृतीय पुरुष -> प्रथम पुरुष) लागू होता है। जैसे: You, he and I।',
          conceptSections: [
            {
              title: '1. Order of Personal Pronouns: 2-3-1 vs 1-2-3 Rule',
              contentMarkdownEn: '* **The 2-3-1 Rule (Polite / Normal Contexts):**\n  * When personal pronouns of different persons are combined in a singular pleasant or normal action, the sequence is: ==Second Person (2) → Third Person (3) → First Person (1)==.\n  * ✔️ *"==You, he, and I== will clear the BPSC examination."* *(NOT I, you and he)*.\n\n* **The 1-2-3 Rule (Confessions of Guilt / Mistakes / Negative Acts):**\n  * When confessing a mistake, admitting guilt, or expressing a crime, the speaker puts themselves first: ==First Person (1) → Second Person (2) → Third Person (3)==.\n  * ✔️ *"==I, you, and he== committed the theft."* *(Polite etiquette demands taking the blame first)*.\n\n* **Plural Pronouns:** When pronouns are in the plural form (We, You, They), the order is simply ==1 → 2 → 3==: *"We, you, and they should cooperate."*'
            },
            {
              title: '2. Case Rules: After "Let", "Between", and Prepositions',
              contentMarkdownEn: '* After the verb **"let"**, the pronoun must be in the ==OBJECTIVE CASE== (me, him, her, us, them):\n  * ❌ *"Let you and I go."* → ✔️ *"==Let you and me go.=="*\n  * ❌ *"Let he speak."* → ✔️ *"==Let him speak.=="*\n\n* After prepositions like **"between"**, **"except"**, **"but"**, use the ==OBJECTIVE CASE==:\n  * ❌ *"There is no enmity between you and I."* → ✔️ *"There is no enmity ==between you and me.=="*'
            },
            {
              title: '3. Indefinite Pronoun "One" & Reciprocal Pronouns',
              contentMarkdownEn: '* **Indefinite Pronoun "One":** When "One" is used as the subject, its possessive must remain ==one\'s==, and reflexive must be ==oneself== throughout the sentence! Never use "his" or "him":\n  * ❌ *"One must keep his promises."* → ✔️ *"==One must keep one\'s promises.=="*\n\n* **Each Other vs One Another:**\n  * **Each other:** Used strictly for ==two persons or things==. (*"The two brothers helped ==each other==."*)\n  * **One another:** Used for ==more than two persons or things==. (*"The five teammates congratulated ==one another==."*)'
            }
          ],
          importantDefinitions: [
            {
              term: 'Antecedent (पूर्वावर्ती संज्ञा)',
              definitionEn: 'The noun or pronoun to which a relative or personal pronoun refers, determining its number, gender, and person.',
              definitionHi: 'वह संज्ञा जिसके स्थान पर कोई सर्वनाम प्रयुक्त होता है और जो सर्वनाम के लिंग व वचन को नियंत्रित करती है।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'One\'s Agreement Rule',
              formulaOrRule: 'One -> One\'s -> Oneself (NEVER his, him, or himself)',
              explanationEn: 'If a sentence starts with "One" as a generic subject, continue with "one\'s" until the period.'
            }
          ],
          examples: [
            {
              title: 'Correcting Pronoun Order',
              problemEn: 'Arrange in correct sequence: "I, you and Mohan should complete the project."',
              stepByStepSolutionEn: '1. This is a positive collaborative action.\n2. Apply the 2-3-1 rule.\n3. 2nd person: You; 3rd person: Mohan; 1st person: I.\n4. Correct: "You, Mohan and I should complete the project."',
              shortcutTrick: '2-3-1 for good things, 1-2-3 for mistakes!'
            }
          ],
          practicalApplications: ['Frequently tested in BPSC Sentence Improvement.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "Between you and I, he is a fraud".',
              whyWrongEn: '"Between" is a preposition, which requires the objective pronoun "me", not the subjective pronoun "I".',
              correctWayEn: 'Say "Between you and me, he is a fraud".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'One must do one\'s duty (TRE 1.0 Q.4)',
              'Between you and me objective case (TRE 2.0 Q.2)',
              'Each other (2) vs One another (>2)'
            ],
            commonDistractorTraps: ['Using "his" after "One"'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.4)', 'BPSC TRE 2.0 (Q.2)']
          },
          quickRevisionPoints: [
            '2-3-1 rule for normal acts: You, he and I.',
            '1-2-3 rule for confessions of guilt: I, you and he.',
            'After let, between, and prepositions: use objective pronouns (me, him, her, us, them).',
            'One takes one\'s, never his.',
            'Each other is for two; One another is for more than two.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-pro-1',
              questionEn: 'Complete the sentence: "One should always be mindful of _____ words."',
              questionHi: 'रिक्त स्थान भरें: "One should always be mindful of _____ words."',
              options: [
                { id: 'A', textEn: 'his', isCorrect: false },
                { id: 'B', textEn: 'one\'s', isCorrect: true },
                { id: 'C', textEn: 'their', isCorrect: false },
                { id: 'D', textEn: 'her', isCorrect: false }
              ],
              explanationEn: 'When the indefinite pronoun "One" is used as the subject, its possessive form must be "one\'s", not "his" or "their".',
              conceptTested: 'One\'s possessive agreement'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-pro-1',
            topicId: 'eng-topic-pronoun-rules',
            chapterId: 'eng-ch-03-pronouns',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank: "Let there be no misunderstanding between ________."',
            questionTextHi: 'रिक्त स्थान भरें: "Let there be no misunderstanding between ________."',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'you and I', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'you and me', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'he and I', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'Prepositions govern nouns and pronouns in the objective case. Since "between" is a preposition, the pronoun "I" must be replaced by its objective form "me". Hence, "between you and me" is correct.',
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
  },

  // =========================================================================
  // CHAPTER 4: VERBS
  // =========================================================================
  {
    id: 'eng-ch-04-verbs',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 4,
    slug: 'verbs-transitive-intransitive-stative-dynamic',
    titleEn: 'Chapter 4: Verbs — Transitive, Intransitive, Stative & Verb Forms',
    titleHi: 'अध्याय 4: क्रिया — सकर्मक, अकर्मक, अवस्थासूचक (Stative) एवं क्रिया रूप',
    descriptionEn: 'Explore Transitive vs Intransitive verbs; Stative verbs that never take continuous -ing forms (know, belong, believe); regular vs irregular verb forms (V1, V2, V3), and linking verbs.',
    descriptionHi: 'सकर्मक एवं अकर्मक क्रिया, Stative क्रियाएं जिनका Continuous रूप नहीं बनता (understand, love, own), तथा V1, V2, V3 के अनियमित रूप।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-stative-transitive',
        chapterId: 'eng-ch-04-verbs',
        topicNumber: 1,
        slug: 'stative-verbs-and-transitive-mechanics',
        titleEn: 'Stative Verbs (No -ing) & Transitive vs Intransitive Mechanics',
        titleHi: 'Stative क्रियाएं (बिना -ing) एवं सकर्मक-अकर्मक क्रिया प्रणाली',
        descriptionEn: 'Why "I am loving it" or "I am knowing you" are grammatically invalid in formal English; identifying verbs requiring direct objects vs those that do not.',
        descriptionHi: 'मानक व्याकरण में Stative Verbs में -ing न लगाने का नियम, तथा सकर्मक क्रियाओं में कर्म (Object) की अनिवार्यता।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 6,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.5), TRE 3.0 (Q.5)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-stative-transitive',
          topicId: 'eng-topic-stative-transitive',
          titleEn: 'Verbs: Stative vs Dynamic & Transitive Verbs',
          titleHi: 'क्रिया के भेद: अवस्थासूचक बनाम गतिमान क्रियाएं',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Differentiate between Dynamic verbs (physical actions) and Stative verbs (thoughts, feelings, states).',
            'Memorize verbs that are NOT used in progressive/continuous tenses (know, own, belong, prefer, smell).',
            'Identify transitive verbs requiring direct objects (raise, lay) vs intransitive verbs (rise, lie).',
            'Master confusing verb triplets: Lie/Lay/Lain vs Lay/Laid/Laid.'
          ],
          introductionEn: '==Verbs are the engine of every English clause. Unlike dynamic verbs that portray physical motion, stative verbs depict involuntary mental states, ownership, or sensory perception.==\n\nIn formal examination English, stative verbs cannot be used in continuous (-ing) tenses. Writing *"I am understanding the lesson"* is an immediate grammatical error in BPSC TRE!',
          introductionHi: 'Stative Verbs वे क्रियाएं हैं जो किसी अवस्था, विचार, भावना या स्वामित्व को दर्शाती हैं। इनका प्रयोग Continuous tenses (ing) में नहीं किया जाता।',
          conceptSections: [
            {
              title: '1. Stative Verbs (Forbidden in Progressive / Continuous Tenses)',
              contentMarkdownEn: 'The following verbs express a permanent state or perception, **NOT a progressive action**:\n\n* **Verbs of Perception / Senses:** ==See, Hear, Smell, Taste, Notice, Recognize.==\n* **Verbs of Thinking / Cognition:** ==Know, Understand, Believe, Remember, Forget, Think, Suppose, Agree.==\n* **Verbs of Feeling / Emotion:** ==Love, Hate, Like, Dislike, Want, Wish, Desire, Prefer.==\n* **Verbs of Possession:** ==Own, Belong, Possess, Have (when meaning possession), Contain, Consist.==\n\n* **Grammatical Corrections:**\n  * ❌ *"I am knowing the answer."* → ✔️ *"==I know the answer.=="*\n  * ❌ *"This car is belonging to me."* → ✔️ *"==This car belongs to me.=="*\n  * ❌ *"I am having a car."* → ✔️ *"==I have a car.=="* *(Use "having" only for dynamic eating: "I am having dinner")*.'
            },
            {
              title: '2. Confusing Verb Pairs: Lie vs Lay & Rise vs Raise',
              contentMarkdownEn: 'BPSC examiners frequently test this precise matrix:',
              tableData: {
                headers: ['Verb Base (V1)', 'Meaning / Type', 'Past Simple (V2)', 'Past Participle (V3)', 'Present Participle (V-ing)'],
                rows: [
                  ['**Lie**', 'To rest / recline (Intransitive - NO object)', '==Lay==', '==Lain==', 'Lying'],
                  ['**Lay**', 'To put / place down (Transitive - NEEDS object)', '==Laid==', '==Laid==', 'Laying'],
                  ['**Lie**', 'To tell an untruth (Intransitive)', '==Lied==', '==Lied==', 'Lying'],
                  ['**Rise**', 'To get up / ascend (Intransitive)', '==Rose==', '==Risen==', 'Rising'],
                  ['**Raise**', 'To lift something up (Transitive)', '==Raised==', '==Raised==', 'Raising']
                ]
              },
              calloutBox: {
                type: 'EXAM_TRAP',
                title: 'BPSC Trap: Lie down vs Lay down',
                textEn: 'When you rest yourself on a bed, you **lie** down (V1) or **lay** down (V2). When you place a book on a table, you **lay** the book down (V1) or **laid** the book down (V2). Remember: Lay requires an object!',
                textHi: 'बिस्तर पर लेटने के लिए \'lie\' (V2: lay) आता है। किसी वस्तु को मेज पर रखने के लिए \'lay\' (V2: laid) आता है।'
              }
            }
          ],
          importantDefinitions: [
            {
              term: 'Transitive Verb (सकर्मक क्रिया)',
              definitionEn: 'A verb that requires one or more direct objects to receive its action in order to complete its meaning.',
              definitionHi: 'वह क्रिया जिसके कार्य का प्रभाव किसी कर्म (Object) पर पड़ता है।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Stative Verb Rule',
              formulaOrRule: 'Stative Verb + "-ing" = ERROR in formal English. Use Simple Present instead.',
              explanationEn: 'Replace "I am understanding" with "I understand".'
            }
          ],
          examples: [
            {
              title: 'Correcting Stative Continuous',
              problemEn: 'Correct: "I am seeing a bird in the sky."',
              stepByStepSolutionEn: '1. "See" is an involuntary sensory perception.\n2. Involuntary perception takes simple present.\n3. Correct: "I see a bird in the sky."',
              shortcutTrick: 'Senses = Simple tense!'
            }
          ],
          practicalApplications: ['Essential for Spotting Errors in BPSC TRE.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "He laid on the grass yesterday to sleep".',
              whyWrongEn: '"Laid" is the past of "lay" (to place an object). The past of "lie" (to rest oneself) is "lay".',
              correctWayEn: 'Say "He lay on the grass yesterday to sleep".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Stative verbs without -ing (know, belong, understand)',
              'Lie (lay, lain) vs Lay (laid, laid)',
              'Rise vs Raise'
            ],
            commonDistractorTraps: ['Using "belonging" in continuous tenses'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.5)', 'BPSC TRE 3.0 (Q.5)']
          },
          quickRevisionPoints: [
            'Stative verbs (know, believe, understand, belong, own) never take continuous -ing.',
            'Lie (rest) -> lay -> lain (No object).',
            'Lay (put) -> laid -> laid (Requires direct object).',
            'Rise (intransitive) -> rose -> risen; Raise (transitive) -> raised -> raised.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-vrb-1',
              questionEn: 'Which sentence correctly uses the verb?',
              questionHi: 'कौन-सा वाक्य क्रिया का सही प्रयोग करता है?',
              options: [
                { id: 'A', textEn: 'She is knowing French very well.', isCorrect: false },
                { id: 'B', textEn: 'She knows French very well.', isCorrect: true },
                { id: 'C', textEn: 'She has been knowing French.', isCorrect: false },
                { id: 'D', textEn: 'She was knowing French.', isCorrect: false }
              ],
              explanationEn: '"Know" is a stative verb of cognition and cannot be used in continuous tenses. Simple present "knows" is correct.',
              conceptTested: 'Stative verb "know"'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-vrb-1',
            topicId: 'eng-topic-stative-transitive',
            chapterId: 'eng-ch-04-verbs',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank with the correct verb form: "The tired traveler ________ down under the banyan tree and fell asleep."',
            questionTextHi: 'उचित क्रिया रूप से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'laid', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'lay', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'lied', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'MODERATE',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'The sentence requires the past simple tense of the intransitive verb "lie" (to recline/rest), which is "lay". "Laid" is the past of "lay" (to place an object down, requiring a direct object). Hence, "lay" is correct.',
            isAuthenticPyq: true,
            treVersion: 'TRE_3_0',
            examDate: '2024-07-22',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 5,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 5: ADJECTIVES
  // =========================================================================
  {
    id: 'eng-ch-05-adjectives',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 5,
    slug: 'adjectives-degrees-of-comparison-and-order',
    titleEn: 'Chapter 5: Adjectives — Degrees of Comparison & Order of Adjectives',
    titleHi: 'अध्याय 5: विशेषण — तुलना की अवस्थाएं (Degrees) एवं विशेषणों का क्रम',
    descriptionEn: 'Master comparative and superlative degrees; Latin adjectives taking "to" instead of "than" (senior, junior, superior, inferior); absolute adjectives that cannot be compared (unique, perfect, round), and the OSASCOMP adjective order rule.',
    descriptionHi: 'विशेषण की अवस्थाएं, लैटिन विशेषण (senior/superior के बाद to), अनुपम विशेषण (unique/perfect के साथ more/most का निषेध), तथा विशेषणों का OSASCOMP क्रम।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-adjective-degrees',
        chapterId: 'eng-ch-05-adjectives',
        topicNumber: 1,
        slug: 'degrees-of-comparison-latin-adjectives-order',
        titleEn: 'Degrees of Comparison, Latin Adjectives & OSASCOMP Sequence',
        titleHi: 'तुलना की अवस्थाएं, लैटिन विशेषण एवं विशेषण क्रम का नियम',
        descriptionEn: 'Senior/Junior/Superior/Inferior with "to", avoiding double comparatives ("more braver"), absolute adjectives, and the standard order of multiple adjectives.',
        descriptionHi: 'Junior/Senior के बाद Than के स्थान पर To का प्रयोग, Double Comparative का निषेध, तथा आकार-रंग-उत्पत्ति का सही क्रम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 7,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.6), TRE 2.0 (Q.4)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-adjective-degrees',
          topicId: 'eng-topic-adjective-degrees',
          titleEn: 'Mastering Adjectives & Degree Rules',
          titleHi: 'विशेषण की तुलना एवं वाक्य में सही क्रम',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Use "to" instead of "than" after Latin adjectives ending in -ior (senior, junior, superior, inferior, prior).',
            'Identify absolute adjectives that cannot be modified by more/most (unique, perfect, complete, round, dead).',
            'Avoid double comparatives (e.g. "more taller" is strictly incorrect).',
            'Apply the OSASCOMP rule when multiple adjectives describe a single noun.'
          ],
          introductionEn: '==Adjectives enrich our speech by qualifying nouns, but their degrees of comparison harbor subtle examination traps.==\n\nWhile regular comparatives take "than" (*"taller than"*), Latin adjectives ending in **-ior** demand the preposition **"to"** (*"senior to me"*, NOT *"senior than me"*). Furthermore, absolute qualities like *unique* or *perfect* represent ultimate states and can never be graded with *more* or *most*.',
          introductionHi: 'विशेषणों में तुलना के लिए साधारणतः Than आता है, किन्तु Latin से आए विशेषणों (Senior, Junior, Superior, Inferior, Prior) के बाद सदैव \'to\' आता है।',
          conceptSections: [
            {
              title: '1. Latin Adjectives: Followed by "TO", NEVER "THAN"',
              contentMarkdownEn: 'The following adjectives of Latin origin ending in **-ior** take the preposition **"to"**, never "than":\n\n* ==Senior to, Junior to, Superior to, Inferior to, Prior to, Anterior to, Posterior to, Preferable to.==\n\n* **Exam Traps:**\n  * ❌ *"He is senior than me in service."* → ✔️ *"==He is senior to me== in service."*\n  * ❌ *"Coffee is more preferable than tea."* → ✔️ *"==Coffee is preferable to tea.=="* *(Preferable already means "more desirable", so "more" is redundant!)*'
            },
            {
              title: '2. Absolute Adjectives (Non-Gradable Qualities)',
              contentMarkdownEn: 'Certain adjectives represent absolute and complete conditions. They **CANNOT be intensified** with "more", "most", "very", or "comparatively":\n\n* **List:** ==Unique, Perfect, Complete, Universal, Dead, Empty, Round, Square, Eternal, Impossible, Supreme, Final.==\n\n* **Corrections:**\n  * ❌ *"This is the most unique architectural piece in Patna."* → ✔️ *"==This is a unique== architectural piece in Patna."*\n  * ❌ *"His glass was more full than mine."* → ✔️ *"His glass was full / fuller."*'
            },
            {
              title: '3. The OSASCOMP Order of Multiple Adjectives',
              contentMarkdownEn: 'When multiple adjectives qualify the same noun, follow this standard sequence:\n\n1. **O**pinion: beautiful, lovely, ugly\n2. **S**ize: huge, tiny, small\n3. **A**ge: antique, young, ancient\n4. **S**hape: round, square, rectangular\n5. **C**olor: black, red, green\n6. **O**rigin: Indian, Italian, British\n7. **M**aterial: wooden, silk, gold\n8. **P**urpose: wedding (dress), sleeping (bag)\n\n* *Example:* *"A ==lovely== (Opinion), ==small== (Size), ==ancient== (Age), ==round== (Shape), ==black== (Color), ==Indian== (Origin), ==wooden== (Material) bowl."*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Comparative Degree (उत्तरावस्था)',
              definitionEn: 'The form of an adjective used to compare two persons, things, or groups, marked by -er or preceded by "more".',
              definitionHi: 'दो वस्तुओं या व्यक्तियों के गुणों की तुलना करने वाली विशेषण की अवस्था।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Latin Comparative Formula',
              formulaOrRule: 'Words ending in -ior + TO (NOT than)',
              explanationEn: 'Senior to, Junior to, Superior to, Inferior to, Prior to.'
            }
          ],
          examples: [
            {
              title: 'Correcting Latin Comparative',
              problemEn: 'Find error: "Milk is more preferable than cold drinks in summer."',
              stepByStepSolutionEn: '1. "Preferable" is a Latin comparative.\n2. It takes "to", never "than".\n3. It cannot take "more" as it is inherently comparative.\n4. Correct: "Milk is preferable to cold drinks in summer."',
              shortcutTrick: 'Preferable + To (No More, No Than)!'
            }
          ],
          practicalApplications: ['Directly tested in BPSC Sentence Improvement.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "He is the most supreme leader".',
              whyWrongEn: '"Supreme" is an absolute adjective meaning highest possible rank; adding "most" is a double superlative.',
              correctWayEn: 'Say "He is the supreme leader".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Senior/Junior/Superior + to (TRE 1.0 Q.6)',
              'Preferable to without more',
              'Unique without most'
            ],
            commonDistractorTraps: ['Using "than" after senior/junior'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.6)', 'BPSC TRE 2.0 (Q.4)']
          },
          quickRevisionPoints: [
            'Senior, junior, superior, inferior take TO, never than.',
            'Preferable takes TO and never takes "more".',
            'Unique, perfect, complete, round are absolute (no more/most).',
            'Order of adjectives: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose (OSASCOMP).'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-adj-1',
              questionEn: 'Choose the correct sentence:',
              questionHi: 'सही वाक्य का चयन करें:',
              options: [
                { id: 'A', textEn: 'This assignment is superior than that one.', isCorrect: false },
                { id: 'B', textEn: 'This assignment is superior to that one.', isCorrect: true },
                { id: 'C', textEn: 'This assignment is more superior to that one.', isCorrect: false },
                { id: 'D', textEn: 'This assignment is more superior than that one.', isCorrect: false }
              ],
              explanationEn: '"Superior" takes the preposition "to", not "than", and cannot be preceded by "more".',
              conceptTested: 'Superior + to rule'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-adj-1',
            topicId: 'eng-topic-adjective-degrees',
            chapterId: 'eng-ch-05-adjectives',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank with the appropriate preposition: "In the education department, he is senior ________ all his colleagues."',
            questionTextHi: 'उचित प्रीपोजिशन से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'than', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'to', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'from', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'Adjectives of Latin origin ending in "-ior" (such as senior, junior, superior, inferior) are always followed by the preposition "to" rather than "than".',
            isAuthenticPyq: true,
            treVersion: 'TRE_1_0',
            examDate: '2023-08-25',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 6,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 6: ADVERBS
  // =========================================================================
  {
    id: 'eng-ch-06-adverbs',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 6,
    slug: 'adverbs-types-inversion-and-position',
    titleEn: 'Chapter 6: Adverbs — Formation, Inversion Rules & Position Traps',
    titleHi: 'अध्याय 6: क्रियाविशेषण — निर्माण, व्युत्क्रम नियम (Inversion) एवं स्थान निर्धारण',
    descriptionEn: 'Master adverbs of manner, place, time, frequency, and degree; the Subject-Verb Inversion rule after negative adverbs (Hardly, Scarcely, Seldom, Never); Too...to vs So...that; and Adjective vs Adverb distinctions.',
    descriptionHi: 'नकारात्मक क्रियाविशेषणों (Hardly, Scarcely, Seldom) के बाद क्रिया का व्युत्क्रम (Inversion नियम), MPT क्रम, तथा Too...to का सही प्रयोग।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-adverb-inversion',
        chapterId: 'eng-ch-06-adverbs',
        topicNumber: 1,
        slug: 'adverb-inversion-and-position-rules',
        titleEn: 'Negative Adverb Inversion & The MPT Placement Rule',
        titleHi: 'नकारात्मक क्रियाविशेषणों में इनवर्जन एवं MPT स्थान नियम',
        descriptionEn: 'Subject-Auxiliary inversion when negative adverbs start a sentence (Hardly had he arrived...), and ordering adverbs of Manner, Place, and Time (MPT Rule).',
        descriptionHi: 'जब वाक्य Hardly/Scarcely से शुरू हो तो सहायक क्रिया कर्ता से पहले आती है। रीति (Manner), स्थान (Place), और समय (Time) का MPT क्रम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 6,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 2.0 (Q.5), TRE 3.0 (Q.6)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-adverb-inversion',
          topicId: 'eng-topic-adverb-inversion',
          titleEn: 'Adverbs: Syntax, Inversion & Positioning Rules',
          titleHi: 'क्रियाविशेषण: वाक्य विन्यास एवं इनवर्जन के नियम',
          readingTimeMinutes: 20,
          difficulty: 'ADVANCED',
          learningObjectives: [
            'Apply Subject-Verb Inversion when a sentence begins with negative or restrictive adverbs (Hardly, Scarcely, Seldom, Rarely, Never, Little).',
            'Arrange multiple adverbs using the MPT rule (Manner → Place → Time).',
            'Correctly position frequency adverbs (always, never, often) between auxiliary and main verbs.',
            'Differentiate between "too" (excessive/negative) and "very" (positive intensifier).'
          ],
          introductionEn: '==Adverbs modify verbs, adjectives, or other adverbs. However, when an adverb expressing negativity or restriction opens a sentence, it triggers a dramatic syntactic shift called "Inversion".==\n\nIn Inversion, the auxiliary verb moves ahead of the subject, exactly like a question structure. Writing *"Hardly he had arrived"* is an instant error in BPSC TRE; the correct syntax is *"Hardly had he arrived"*.',
          introductionHi: 'जब वाक्य के प्रारंभ में Hardly, Scarcely, Seldom, Never जैसे नकारात्मक शब्द आते हैं, तो कर्ता से पहले सहायक क्रिया लगानी पड़ती है। इसे Inversion कहते हैं।',
          conceptSections: [
            {
              title: '1. Subject-Verb Inversion with Negative Adverbs',
              contentMarkdownEn: 'When a sentence begins with any of these restrictive adverbs, use: ==Negative Adverb + Auxiliary Verb + Subject + Main Verb==:\n\n* **List:** ==Hardly, Scarcely, Seldom, Rarely, Barely, Never, Neither, Nor, Little, Nowhere, Not only.==\n\n* **Standard Examples:**\n  * ❌ *"Hardly I had reached the station when the train left."*\n  * ✔️ *"==Hardly had I reached== the station when the train left."*\n  * ❌ *"Seldom we have seen such courage."*\n  * ✔️ *"==Seldom have we seen== such courage."*\n  * ❌ *"No sooner he entered than the bell rang."*\n  * ✔️ *"==No sooner did he enter== than the bell rang."*'
            },
            {
              title: '2. The MPT Placement Rule (Manner → Place → Time)',
              contentMarkdownEn: 'When adverbs of Manner, Place, and Time appear together at the end of a sentence, they must strictly follow the **MPT sequence**:\n\n* **M** = Manner (How? e.g., beautifully, silently, bravely)\n* **P** = Place (Where? e.g., in the hall, at Patna, outside)\n* **T** = Time (When? e.g., yesterday, at 5 PM, recently)\n\n* *Example:* *"The choir sang ==beautifully== (Manner) ==in the auditorium== (Place) ==last night== (Time)."*'
            },
            {
              title: '3. "Too" vs "Very" Distinctions',
              contentMarkdownEn: '* **Too:** Means "more than enough / excessively" and carries a **negative connotation** leading to undesirable consequences:\n  * *"He is ==too weak to walk==."* (= He is so weak that he cannot walk).\n  * ❌ *"I am too happy to meet you."* → ✔️ *"==I am very happy== to meet you."* *(Unless you mean you are overwhelmed to tears!)*\n* **Very:** Merely intensifies a quality without implying inability or negative result.'
            }
          ],
          importantDefinitions: [
            {
              term: 'Grammatical Inversion (व्युत्क्रम)',
              definitionEn: 'The reversal of the normal word order in a sentence, where the auxiliary verb precedes the subject for rhetorical emphasis.',
              definitionHi: 'वाक्य में कर्ता से पूर्व सहायक क्रिया का प्रयोग करना ताकि प्रभाव या बल दिया जा सके।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Negative Inversion Formula',
              formulaOrRule: 'Negative Adverb + Auxiliary Verb + Subject + Main Verb',
              explanationEn: 'Hardly/Scarcely + had + Subject + V3 + when... | No sooner + did/had + Subject + than...'
            }
          ],
          examples: [
            {
              title: 'Applying Inversion to Seldom',
              problemEn: 'Rewrite: "He seldom visits his native village in Gaya" beginning with "Seldom".',
              stepByStepSolutionEn: '1. "Seldom" is a negative adverb.\n2. In simple present, auxiliary verb for "he" is "does".\n3. Inverted structure: Seldom + does + he + visit...\n4. Solution: "Seldom does he visit his native village in Gaya."',
              shortcutTrick: 'Seldom at start = Seldom does he visit!'
            }
          ],
          practicalApplications: ['Highly tested in Sentence Rearrangement and Error Detection.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Pairing "Hardly" with "than".',
              whyWrongEn: '"Hardly" and "Scarcely" are strictly correlated with "when". "No sooner" is paired with "than".',
              correctWayEn: 'Hardly...when; No sooner...than.'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Hardly had + Subject + when (TRE 2.0 Q.5)',
              'No sooner did + Subject + than (TRE 3.0 Q.6)',
              'MPT placement rule'
            ],
            commonDistractorTraps: ['Using "then" or "when" after "No sooner"'],
            relatedPyqReferences: ['BPSC TRE 2.0 (Q.5)', 'BPSC TRE 3.0 (Q.6)']
          },
          quickRevisionPoints: [
            'Negative adverb at sentence start triggers inversion: Hardly had I, Seldom do we.',
            'Order of adverbs: Manner -> Place -> Time (MPT).',
            'Hardly/Scarcely takes WHEN; No sooner takes THAN.',
            'Too means excessively with a negative result; Very is positive intensifying.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-adv-1',
              questionEn: 'Complete the sentence: "Scarcely had the teacher entered the classroom ________ the students stood up."',
              questionHi: 'रिक्त स्थान भरें: "Scarcely had the teacher entered the classroom ________ the students stood up."',
              options: [
                { id: 'A', textEn: 'than', isCorrect: false },
                { id: 'B', textEn: 'when', isCorrect: true },
                { id: 'C', textEn: 'then', isCorrect: false },
                { id: 'D', textEn: 'that', isCorrect: false }
              ],
              explanationEn: '"Scarcely" and "Hardly" are followed by the conjunction "when" (or "before"), never "than".',
              conceptTested: 'Scarcely...when correlative'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-adv-1',
            topicId: 'eng-topic-adverb-inversion',
            chapterId: 'eng-ch-06-adverbs',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Choose the sentence with correct word order:',
            questionTextHi: 'व्याकरण सम्मत सही वाक्य चुनें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'Hardly the doctor had arrived when the patient died.', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'Hardly had the doctor arrived when the patient died.', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'Hardly did the doctor arrived when the patient died.', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'MODERATE',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'When "Hardly" begins a sentence, inversion is mandatory: the auxiliary verb "had" precedes the subject "the doctor", followed by the past participle "arrived", and the correlative clause is introduced by "when". Option B is strictly correct.',
            isAuthenticPyq: true,
            treVersion: 'TRE_2_0',
            examDate: '2023-12-15',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 5,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 7: PREPOSITIONS
  // =========================================================================
  {
    id: 'eng-ch-07-prepositions',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 7,
    slug: 'prepositions-time-place-fixed-and-phrases',
    titleEn: 'Chapter 7: Prepositions — Time, Place, Dependent Prepositions & Confusing Pairs',
    titleHi: 'अध्याय 7: संबंधबोधक (Prepositions) — समय, स्थान, निश्चित प्रीपोजिशन एवं भ्रमित करने वाले युग्म',
    descriptionEn: 'Master in/on/at for time and place; since vs for; between vs among; beside vs besides; into vs in; enter into vs enter; and high-yield dependent prepositions (abstain from, adhere to, guilty of, prevent from).',
    descriptionHi: 'समय एवं स्थान के लिए In/On/At का त्रिकोण नियम, Between बनाम Among, Beside बनाम Besides, तथा BPSC में बार-बार पूछे जाने वाले निश्चित (Fixed) प्रीपोजिशन्स।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-prep-fixed-pairs',
        chapterId: 'eng-ch-07-prepositions',
        topicNumber: 1,
        slug: 'confusing-preposition-pairs-and-fixed-idioms',
        titleEn: 'Confusing Preposition Pairs & Fixed Dependent Prepositions',
        titleHi: 'भ्रमित करने वाले प्रीपोजिशन युग्म एवं निश्चित संबंधबोधक',
        descriptionEn: 'Beside vs Besides, Between vs Among, In vs Into, Enter vs Enter into, and fixed verbs requiring specific prepositions (abstain from, congratulated on).',
        descriptionHi: 'Beside (पास) बनाम Besides (अतिरिक्त), Between (दो) बनाम Among (दो से अधिक), Enter के साथ Into न लगाने का नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 10,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked across BPSC TRE 1.0 (Q.7), TRE 2.0 (Q.6), TRE 3.0 (Q.7)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-prep-fixed-pairs',
          topicId: 'eng-topic-prep-fixed-pairs',
          titleEn: 'Mastering Prepositions for BPSC TRE',
          titleHi: 'प्रीपोजिशन के नियम एवं महत्वपूर्ण अपवाद',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Differentiate between confusing pairs: Beside vs Besides, Between vs Among, Across vs Through.',
            'Apply the physical motion rule for In vs Into and On vs Onto.',
            'Identify verbs that DO NOT take a preposition when followed by an object (enter, resemble, discuss, order, marry).',
            'Memorize fixed dependent prepositions: congratulate on, abstain from, fond of, good at.'
          ],
          introductionEn: '==Prepositions bridge nouns with other sentence components. In BPSC examinations, prepositions constitute the single most tested grammar topic.==\n\nExaminers focus on two areas: confusing pairs (such as *beside* vs *besides*) and superfluous prepositions where students erroneously insert prepositions after transitive verbs (such as *"enter into a room"* instead of *"enter a room"*).',
          introductionHi: 'प्रीपोजिशन BPSC TRE का सर्वाधिक स्कोरिंग एवं बार-बार पूछा जाने वाला अध्याय है। विशेषकर Beside/Besides, In/Into, और Enter के साथ Preposition न लगाने के नियम पूछे जाते हैं।',
          conceptSections: [
            {
              title: '1. Confusing Preposition Pairs',
              contentMarkdownEn: '* **1. Beside vs Besides:**\n  * **Beside:** Means *"by the side of"* or *"adjacent to"*.\n    * *"She sat ==beside== me during the lecture."*\n  * **Besides:** Means *"in addition to"* or *"apart from"*.\n    * *"==Besides== English, he teaches Hindi."*\n\n* **2. Between vs Among:**\n  * **Between:** Strictly for ==TWO persons or things==. (*"Divide the cake ==between== Rohan and Sohan."*)\n  * **Among:** For ==MORE THAN TWO==. (*"Divide the sweets ==among== the children."*)\n  * *Reciprocal Exception:* "Between" can be used for more than two when expressing exact mutual relationships (e.g. *"a treaty between India, Nepal, and Bhutan"*).\n\n* **3. In vs Into (Static State vs Dynamic Motion):**\n  * **In:** Denotes position inside without motion. (*"He is ==in== the room."*)\n  * **Into:** Denotes movement from outside to inside. (*"The frog jumped ==into== the well."*)'
            },
            {
              title: '2. Verbs That Take NO Preposition (Common BPSC Errors)',
              contentMarkdownEn: 'These transitive verbs take a direct object **WITHOUT any intervening preposition**:\n\n* **Enter:** ❌ *"He entered into the classroom."* → ✔️ *"==He entered the classroom.=="*\n  * *(Note: "Enter into" is valid only metaphorically: "enter into an agreement/partnership")*.\n* **Resemble:** ❌ *"She resembles to her mother."* → ✔️ *"==She resembles her mother.=="*\n* **Discuss:** ❌ *"We discussed about the problem."* → ✔️ *"==We discussed the problem.=="*\n* **Order:** ❌ *"He ordered for a cup of tea."* → ✔️ *"==He ordered a cup of tea.=="*\n* **Marry:** ❌ *"Ram married with Sita."* → ✔️ *"==Ram married Sita.=="* *(In passive voice: "Sita was married to Ram")*.'
            },
            {
              title: '3. Essential Fixed Prepositions Chart',
              contentMarkdownEn: 'High-frequency fixed combinations tested in BPSC:',
              tableData: {
                headers: ['Verb / Adjective', 'Fixed Preposition', 'Example Sentence', 'BPSC Frequency'],
                rows: [
                  ['Congratulate', '==ON== (NOT for)', 'I congratulated him **on** his grand success.', 'Very High'],
                  ['Abstain / Refrain', '==FROM==', 'You must abstain **from** intoxicating drinks.', 'High Yield'],
                  ['Fond', '==OF==', 'Children are fond **of** sweets.', 'Standard'],
                  ['Good / Bad', '==AT== (NOT in)', 'She is exceptionally good **at** Mathematics.', 'Very High'],
                  ['Accused', '==OF== (NOT with)', 'He was accused **of** murder.', 'High Yield'],
                  ['Prevent / Prohibit', '==FROM== + V-ing', 'The police prevented him **from** entering.', 'Very High']
                ]
              }
            }
          ],
          importantDefinitions: [
            {
              term: 'Dependent Preposition (निश्चित प्रीपोजिशन)',
              definitionEn: 'A preposition that is syntactically required by a specific verb, adjective, or noun to complete its meaning.',
              definitionHi: 'वह प्रीपोजिशन जो किसी विशेष क्रिया या विशेषण के साथ अनिवार्य रूप से जुड़ता है।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Congratulate Rule',
              formulaOrRule: 'Congratulate someone ON something (NEVER for)',
              explanationEn: 'Examiners deliberately write "congratulated for his success". The correct preposition is "on".'
            }
          ],
          examples: [
            {
              title: 'Correcting "Enter into"',
              problemEn: 'Find error: "As soon as the inspector entered into the bank, the alarms sounded."',
              stepByStepSolutionEn: '1. "Enter" when meaning physical entry into a place takes NO preposition.\n2. Delete "into".\n3. Correct: "As soon as the inspector entered the bank, the alarms sounded."',
              shortcutTrick: 'Physical entry = Just "entered" (No into)!'
            }
          ],
          practicalApplications: ['Guaranteed 1 to 2 questions in BPSC TRE Part 1 Language.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "She is good in English".',
              whyWrongEn: 'Proficiency in a subject or skill is expressed using the preposition "at", not "in".',
              correctWayEn: 'Say "She is good at English".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Beside (next to) vs Besides (in addition to) (TRE 1.0 Q.7)',
              'No preposition after enter/discuss (TRE 2.0 Q.6)',
              'Congratulate on (TRE 3.0 Q.7)'
            ],
            commonDistractorTraps: ['Using "for" after congratulate or "in" after good at'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.7)', 'BPSC TRE 2.0 (Q.6)', 'BPSC TRE 3.0 (Q.7)']
          },
          quickRevisionPoints: [
            'Beside = by the side of; Besides = in addition to.',
            'Between is for two; Among is for more than two.',
            'Into shows dynamic movement; In shows static position.',
            'No preposition after: enter (physical), resemble, discuss, order.',
            'Congratulate ON, Good AT, Abstain FROM, Accused OF.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-prep-1',
              questionEn: 'Choose the correct preposition: "I congratulated my colleague ________ his promotion."',
              questionHi: 'रिक्त स्थान भरें: "I congratulated my colleague ________ his promotion."',
              options: [
                { id: 'A', textEn: 'for', isCorrect: false },
                { id: 'B', textEn: 'on', isCorrect: true },
                { id: 'C', textEn: 'with', isCorrect: false },
                { id: 'D', textEn: 'about', isCorrect: false }
              ],
              explanationEn: 'The verb "congratulate" is followed by the fixed preposition "on", not "for".',
              conceptTested: 'Congratulate on'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-prep-1',
            topicId: 'eng-topic-prep-fixed-pairs',
            chapterId: 'eng-ch-07-prepositions',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank: "________ physics and chemistry, she is deeply interested in ancient Indian history."',
            questionTextHi: 'उचित शब्द से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'Beside', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'Besides', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'Between', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: '"Besides" means "in addition to" or "as well as". "Beside" means "at the side of". Since the sentence denotes adding history to her interest in sciences, "Besides" is correct.',
            isAuthenticPyq: true,
            treVersion: 'TRE_1_0',
            examDate: '2023-08-25',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 7,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 8: CONJUNCTIONS
  // =========================================================================
  {
    id: 'eng-ch-08-conjunctions',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 8,
    slug: 'conjunctions-correlative-pairs-parallelism',
    titleEn: 'Chapter 8: Conjunctions — Correlative Pairs & Parallel Structures',
    titleHi: 'अध्याय 8: समुच्चयबोधक (Conjunctions) — युग्म संयोजक एवं समानांतर संरचनाएं',
    descriptionEn: 'Master coordinating conjunctions (FANBOYS); correlative pairs (Neither...nor, Either...or, Not only...but also, Although...yet); avoiding redundant double conjunctions; and parallel structure rules.',
    descriptionHi: 'FANBOYS संयोजक, युग्म संयोजक (Not only...but also, Although...yet), दोहरे संयोजकों का परिहार (Although के साथ But का निषेध), एवं समानांतर संरचना।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-correlative-pairs',
        chapterId: 'eng-ch-08-conjunctions',
        topicNumber: 1,
        slug: 'correlative-conjunctions-and-parallelism',
        titleEn: 'Correlative Conjunction Pairs & Faulty Parallelism',
        titleHi: 'युग्म संयोजक एवं समानांतर संरचना के नियम',
        descriptionEn: 'The exact pairs (Although...yet, Not only...but also, Lest...should), avoiding double connectors (Although + but), and placing correlatives before parallel parts of speech.',
        descriptionHi: 'Although के साथ Yet आता है But नहीं, Lest के साथ सदैव Should आता है, तथा Not only एवं But also के बाद समान शब्द भेद होना चाहिए।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 7,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.8), TRE 2.0 (Q.8)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-correlative-pairs',
          topicId: 'eng-topic-correlative-pairs',
          titleEn: 'Conjunction Pairs & Parallel Structure Guide',
          titleHi: 'संयोजक युग्म एवं समानांतर संरचना की संपूर्ण गाइड',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Pair correlative conjunctions accurately: Although...yet, Lest...should, Not only...but also, Scarcely...when.',
            'Identify and eliminate redundant connectors (e.g. As/Since/Because cannot be followed by therefore/so).',
            'Enforce parallel structures (e.g., if "not only" precedes a verb, "but also" must precede a verb).',
            'Use "lest" with "should" or bare subjunctive, never with negative "not".'
          ],
          introductionEn: '==Conjunctions join words and clauses, but in English, certain conjunctions travel strictly in inseparable pairs.==\n\nMixing up conjunction pairs—such as pairing *Although* with *but*, or pairing *Lest* with *may*—is an extremely frequent error tested in competitive examinations.',
          introductionHi: 'अंग्रेजी में कई संयोजक युग्मों में आते हैं। जैसे: Although के साथ Yet आता है (But नहीं)। Lest के साथ हमेशा Should आता है और Lest स्वयं नकारात्मक है अतः इसके साथ Not नहीं लगाया जाता।',
          conceptSections: [
            {
              title: '1. Standard Correlative Pairs Checklist',
              contentMarkdownEn: 'Memorize these inviolable conjunction marriages:\n\n* **Although / Though → Yet** *(or comma, NEVER "but")*:\n  * ❌ *"Although he is poor, but he is honest."* → ✔️ *"==Although he is poor, yet he is honest.=="*\n* **Lest → Should** *(Lest means "so that not"; NEVER use "not" with lest)*:\n  * ❌ *"Walk carefully lest you may not fall."* → ✔️ *"Walk carefully ==lest you should fall.=="*\n* **Not only → But also**\n* **Either → Or**\n* **Neither → Nor**\n* **Both → And** *(NEVER "as well as")*:\n  * ❌ *"Both Ram as well as Shyam attended."* → ✔️ *"==Both Ram and Shyam== attended."*\n* **Whether → Or**'
            },
            {
              title: '2. The Rule of Parallelism with Correlatives',
              contentMarkdownEn: 'Correlative conjunctions must be placed immediately before the **SAME PART OF SPEECH**:\n\n* ❌ *Faulty:* *"He not only visited **Patna** (Noun) but also **stayed** (Verb) there."*\n  * *Analysis:* "Not only" precedes a noun, while "but also" precedes a verb. This violates parallelism!\n* ✔️ *Parallel:* *"He ==not only visited Patna== but ==also explored Gaya==."* *(Verb + Verb)*, or:\n* ✔️ *Parallel:* *"He visited ==not only Patna== but ==also Gaya==."* *(Noun + Noun)*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Correlative Conjunctions (युग्म संयोजक)',
              definitionEn: 'Pairs of coordinating conjunctions that work together in tandem to join grammatically equal sentence elements.',
              definitionHi: 'दो शब्दों का ऐसा जोड़ा जो मिलकर वाक्य के दो समान व्याकरणिक भागों को जोड़ता है।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Lest Formula',
              formulaOrRule: 'Lest + Subject + SHOULD + V1 (NO "not")',
              explanationEn: 'Because "lest" already contains negative meaning ("for fear that"), adding "not" creates an erroneous double negative.'
            }
          ],
          examples: [
            {
              title: 'Correcting Both...and',
              problemEn: 'Find error: "He is both intelligent as well as hardworking."',
              stepByStepSolutionEn: '1. "Both" correlates strictly with "and".\n2. "As well as" cannot pair with "both".\n3. Correct: "He is both intelligent and hardworking."',
              shortcutTrick: 'Both + And (Never as well as)!'
            }
          ],
          practicalApplications: ['Essential for Sentence Correction.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Writing "Because he was ill, so he did not come".',
              whyWrongEn: 'Clauses introduced by "Because", "Since", or "As" do not take "so" or "therefore" in the main clause.',
              correctWayEn: 'Say "Because he was ill, he did not come".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Although paired with yet (TRE 1.0 Q.8)',
              'Lest followed by should (TRE 2.0 Q.8)',
              'Both paired with and'
            ],
            commonDistractorTraps: ['Using "but" after although'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.8)', 'BPSC TRE 2.0 (Q.8)']
          },
          quickRevisionPoints: [
            'Although pairs with YET (never but).',
            'Lest pairs with SHOULD (never may, never not).',
            'Both pairs with AND (never as well as).',
            'Parallelism: Place correlatives before identical grammatical parts of speech.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-cnj-1',
              questionEn: 'Fill in the blank: "Make haste lest you ________ miss the train."',
              questionHi: 'रिक्त स्थान भरें: "Make haste lest you ________ miss the train."',
              options: [
                { id: 'A', textEn: 'may', isCorrect: false },
                { id: 'B', textEn: 'should', isCorrect: true },
                { id: 'C', textEn: 'will', isCorrect: false },
                { id: 'D', textEn: 'might', isCorrect: false }
              ],
              explanationEn: '"Lest" is always followed by the modal auxiliary "should".',
              conceptTested: 'Lest + should rule'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-cnj-1',
            topicId: 'eng-topic-correlative-pairs',
            chapterId: 'eng-ch-08-conjunctions',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Identify the grammatically correct sentence:',
            questionTextHi: 'व्याकरण की दृष्टि से शुद्ध वाक्य पहचानें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'Although he worked hard, but he failed the exam.', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'Although he worked hard, yet he failed the exam.', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'Both Ramesh as well as Suresh arrived late.', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: '"Although" cannot be paired with "but"; it is correctly paired with "yet" or a comma. Furthermore, "both" must be paired with "and", not "as well as". Hence, Option B is the only correct sentence.',
            isAuthenticPyq: true,
            treVersion: 'TRE_1_0',
            examDate: '2023-08-25',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 8,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 9: ARTICLES AND DETERMINERS
  // =========================================================================
  {
    id: 'eng-ch-09-articles-determiners',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 9,
    slug: 'articles-and-determiners-a-an-the-quantifiers',
    titleEn: 'Chapter 9: Articles & Determiners — Phonetic A/An, The & Quantifiers',
    titleHi: 'अध्याय 9: आर्टिकल एवं निर्धारक — ध्वनि आधारित A/An, The एवं मात्रात्मक शब्द',
    descriptionEn: 'The definitive guide to Indefinite Articles (A/An based on initial vowel sound: SDO, European, honest); Definite Article (The) with geographical features; Zero Article omissions; and Quantifiers (Few vs A few vs The few; Little vs A little vs The little).',
    descriptionHi: 'स्वर ध्वनि आधारित A/An (SDO, European, Hour), The का प्रयोग, Zero Article (कहाँ आर्टिकल नहीं लगेगा), तथा Few/A Few एवं Little/A Little का अंतर।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-articles-quantifiers',
        chapterId: 'eng-ch-09-articles-determiners',
        topicNumber: 1,
        slug: 'articles-phonetics-and-quantifier-traps',
        titleEn: 'Phonetic Sound Rules, The Definite Article & Quantifiers',
        titleHi: 'ध्वनि आधारित आर्टिकल नियम, The एवं परिमाणवाचक शब्द',
        descriptionEn: 'The Devanagari vowel-sound test for A vs An, proper names with The, omitting articles before languages/sports, and Few/Little distinctions.',
        descriptionHi: 'स्वर ध्वनि (अ से औ) के आधार पर An का प्रयोग, नदियों-पर्वतों के साथ The, तथा Few (संख्या) बनाम Little (मात्रा) के नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 12,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'The highest-yield question across all BPSC papers (TRE 1.0 Q.1, Q.3; TRE 2.0 Q.1, Q.2; TRE 3.0 Q.1, Q.6)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-articles-quantifiers',
          topicId: 'eng-topic-articles-quantifiers',
          titleEn: 'Complete Masterclass on Articles & Determiners',
          titleHi: 'आर्टिकल एवं डिटरमिनर्स की संपूर्ण मास्टरक्लास',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Master the phonetic sound rule for A vs An using the Devanagari test (Swar = An, Vyanjan = A).',
            'Handle acronyms and abbreviations correctly (An SDO, An MLA, An FIR, A DSP).',
            'Apply "The" with geographical features (rivers, mountain ranges, oceans) and unique entities.',
            'Differentiate between Few/A few/The few (countable) and Little/A little/The little (uncountable).'
          ],
          introductionEn: '==Articles (A, An, The) constitute the single most tested question type in BPSC TRE Part 1 English Language.==\n\nIn every examination sitting, BPSC tests whether students rely on English written spelling or auditory pronunciation. The rule is absolute: **articles depend on the SPOKEN INITIAL SOUND, never on the alphabet letter.**',
          introductionHi: 'आर्टिकल BPSC TRE का सबसे महत्वपूर्ण अध्याय है। A अथवा An का प्रयोग अंग्रेजी वर्णमाला के अक्षर पर नहीं, बल्कि उस शब्द के पहले अक्षर की उच्चारण ध्वनि (Sound) पर निर्भर करता है।',
          conceptSections: [
            {
              title: '1. The Phonetic Sound Rule for "A" and "An"',
              contentMarkdownEn: 'Translate the initial sound of the word into Hindi Devanagari:\n\n* **Rule for "AN":** If the first spoken sound is a **VOWEL SOUND (अ, आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ)**, use ==AN==:\n  * ==An SDO== (Spoken as "एस्-डी-ओ" → starts with \'ए\' / Vowel sound).\n  * ==An MLA== (Spoken as "एम-एल-ए" → starts with \'ए\').\n  * ==An FIR== (Spoken as "एफ-आई-आर" → starts with \'ए\').\n  * ==An SP== (Spoken as "एस-पी" → starts with \'ए\').\n  * ==An honest man== (Silent \'h\'; spoken as "ऑनेस्ट" → starts with \'ऑ\').\n  * ==An hour== (Spoken as "आवर" → starts with \'आ\').\n  * ==An heir== (वारिस; spoken as "एयर" → starts with \'ए\').\n\n* **Rule for "A":** If the first spoken sound is a **CONSONANT SOUND (क to ज्ञ)**, use ==A==:\n  * ==A European== (Spoken as "यूरोपियन" → starts with \'य\' / Consonant sound).\n  * ==A University== (Spoken as "यूनिवर्सिटी" → starts with \'य\').\n  * ==A One-rupee note== (Spoken as "वन" → starts with \'व\' / Consonant sound).\n  * ==A Union== (Spoken as "यूनियन" → starts with \'य\').'
            },
            {
              title: '2. The Definite Article "The" & Omission Rules',
              contentMarkdownEn: '* **Use "THE" With:**\n  * **Mountain Ranges (Plural):** The Himalayas, The Alps. *(Exam Trap: NEVER use "the" with individual mountain peaks like Mount Everest or K2!)*\n  * **Rivers, Oceans, Seas:** The Ganga, The Indian Ocean, The Red Sea.\n  * **Sacred Scriptures:** The Gita, The Quran, The Bible.\n  * **Superlatives:** The tallest, The best.\n\n* **Omission of Articles (Zero Article):**\n  * Before names of **Languages**: *"He speaks ==English== (NOT the English)."*\n  * Before names of **Meals** in normal sense: *"Dinner is ready."*\n  * Before **Material & Abstract Nouns** in general sense: *"==Gold== is a precious metal."* / *"==Honesty== is the best policy."*'
            },
            {
              title: '3. Quantifiers: Few vs Little Matrix',
              contentMarkdownEn: 'Essential distinction tested in BPSC:',
              tableData: {
                headers: ['Form', 'Meaning / Connotation', 'Countable Nouns (Number)', 'Uncountable Nouns (Quantity)'],
                rows: [
                  ['**Bare (Few / Little)**', '==Negligible, almost none (Negative sense)==', '**Few** friends (*almost no friends*)', '**Little** milk (*barely a drop*)'],
                  ['**With "A" (A few / A little)**', '==Some, at least a small amount (Positive sense)==', '**A few** friends (*some friends*)', '**A little** milk (*enough for tea*)'],
                  ['**With "The" (The few / The little)**', '==Not many/much, but all that exists==', '**The few** friends he had helped him', '**The little** money he had was stolen']
                ]
              }
            }
          ],
          importantDefinitions: [
            {
              term: 'Indefinite Article (अनिश्चयवाचक आर्टिकल)',
              definitionEn: 'The determiners "a" and "an" used before singular countable nouns referring to an unspecified member of a class.',
              definitionHi: 'A और An जो किसी अनिश्चित एकवचन गणनीय संज्ञा के पूर्व प्रयुक्त होते हैं।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Devanagari Vowel Test',
              formulaOrRule: 'Pronounce word -> Starts with अ-औ? Use AN. Starts with क-ज्ञ? Use A.',
              explanationEn: 'Eliminates 100% of article errors on acronyms like SDO, MLA, and words like European.'
            }
          ],
          examples: [
            {
              title: 'Article for SDO',
              problemEn: 'Fill blank: "His uncle is appointed as _____ SDO in Patna."',
              stepByStepSolutionEn: '1. SDO is spoken as "Es-Dee-Oh".\n2. First sound is /e/ ("ए", a vowel sound).\n3. Vowel sound takes "an".\n4. Correct: "an SDO".',
              shortcutTrick: 'S starts with "ए" sound => An SDO!'
            }
          ],
          practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 1 Language.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "The Mount Everest is the highest peak".',
              whyWrongEn: 'Individual peaks (Everest, Kanchenjunga) do not take "the"; only mountain ranges (The Himalayas) take "the".',
              correctWayEn: 'Say "Mount Everest is the highest peak of the Himalayas".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'An SDO / An engineer (TRE 1.0 Q.1, TRE 2.0 Q.2)',
              'A European / A university (TRE 2.0 Q.1)',
              'Few vs A few; Little vs A little'
            ],
            commonDistractorTraps: ['Choosing "a" for SDO because S is a consonant letter'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.1, Q.3)', 'BPSC TRE 2.0 (Q.1, Q.2)', 'BPSC TRE 3.0 (Q.1, Q.6)']
          },
          quickRevisionPoints: [
            'A/An depends on SOUND, not alphabet spelling.',
            'An SDO, An MLA, An FIR, An honest man, An hour.',
            'A European, A university, A union, A one-rupee note.',
            'The for mountain ranges (The Himalayas), NOT individual peaks (Mount Everest).',
            'Few is for countable; Little is for uncountable.',
            'Bare few/little = negative (almost none); A few/A little = positive (some).'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-art-det-1',
              questionEn: 'Fill in the blank with the appropriate article: "His brother is ________ SDO posted at Gaya."',
              questionHi: 'उचित आर्टिकल से रिक्त स्थान भरें: "His brother is ________ SDO posted at Gaya."',
              options: [
                { id: 'A', textEn: 'a', isCorrect: false },
                { id: 'B', textEn: 'an', isCorrect: true },
                { id: 'C', textEn: 'the', isCorrect: false },
                { id: 'D', textEn: 'no article', isCorrect: false }
              ],
              explanationEn: 'The abbreviation "SDO" begins with the vowel sound /es/ ("Es-Dee-Oh"), which takes the indefinite article "an".',
              conceptTested: 'Article before SDO'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-art-det-1',
            topicId: 'eng-topic-articles-quantifiers',
            chapterId: 'eng-ch-09-articles-determiners',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank with the suitable article: "Your brother is appointed as ________ SDO."',
            questionTextHi: 'उचित आर्टिकल से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'an', isCorrect: true },
              { id: 'o2', identifier: 'B', textEn: 'a', isCorrect: false },
              { id: 'o3', identifier: 'C', textEn: 'the', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'A',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'The abbreviation "SDO" is pronounced /ɛs.diː.oʊ/, beginning with the vowel phoneme /ɛ/. Therefore, standard English phonetics mandates the use of the indefinite article "an".',
            isAuthenticPyq: true,
            treVersion: 'TRE_1_0',
            examDate: '2023-08-25',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 1,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  }
];
