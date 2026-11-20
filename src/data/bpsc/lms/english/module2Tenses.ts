// src/data/bpsc/lms/english/module2Tenses.ts
// MODULE 2: TENSES AND VERB STRUCTURES (Chapters 10 to 14)
// Complete digital textbook curriculum for BPSC TRE 4.0 English Language
// Covers Present Tense, Past Tense, Future Tense, Subject-Verb Agreement, and Modals with authentic BPSC PYQs.

import { LMSChapter } from '@/types/bpscLms';

export const MODULE_2_TENSES_CHAPTERS: LMSChapter[] = [
  // =========================================================================
  // CHAPTER 10: PRESENT TENSE
  // =========================================================================
  {
    id: 'eng-ch-10-present-tense',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 10,
    slug: 'present-tense-simple-continuous-perfect',
    titleEn: 'Chapter 10: Present Tense — Forms, Signal Words & Time Markers',
    titleHi: 'अध्याय 10: वर्तमान काल — रूप, पहचान शब्द एवं समय सूचक',
    descriptionEn: 'Master Simple Present (universal truths, habits), Present Continuous (temporary actions), Present Perfect (completed past actions with present relevance; since/for), and Present Perfect Continuous.',
    descriptionHi: 'सामान्य वर्तमान (शाश्वत सत्य, आदतें), अपूर्ण वर्तमान, पूर्ण वर्तमान (Since एवं For का प्रयोग), तथा पूर्ण-अपूर्ण वर्तमान काल।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-present-tense-mastery',
        chapterId: 'eng-ch-10-present-tense',
        topicNumber: 1,
        slug: 'present-perfect-and-universal-truths',
        titleEn: 'Simple Present Universal Truths & Present Perfect "Since/For"',
        titleHi: 'शाश्वत सत्य, सामान्य वर्तमान एवं पूर्ण वर्तमान में Since/For',
        descriptionEn: 'Universal facts taking simple present, avoiding simple past with "just/already/yet", and the exact rules for "since" (point of time) vs "for" (period of time).',
        descriptionHi: 'सूर्य पूर्व में उगता है जैसे सार्वभौमिक सत्य, \'Since\' (निश्चित समय) बनाम \'For\' (समयावधि) का सही प्रयोग।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 7,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.2), TRE 2.0 (Q.3) & TRE 3.0 (Q.4)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-present-tense-mastery',
          topicId: 'eng-topic-present-tense-mastery',
          titleEn: 'Mastering the Four Dimensions of Present Tense',
          titleHi: 'वर्तमान काल के चारों रूपों का संपूर्ण अध्ययन',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Use Simple Present for universal scientific truths, proverbs, and routine habits regardless of main clause tense.',
            'Apply Present Perfect with time adverbs: just, already, yet, recently, so far.',
            'Differentiate precisely between "Since" (starting point of time) and "For" (duration/period of time).',
            'Avoid using simple past when time markers like "yet" or "already" are present.'
          ],
          introductionEn: '==Present tense in competitive examinations goes far beyond everyday conversational usage. In BPSC TRE, examiners strictly assess the interface between time adverbs and aspectual auxiliaries.==\n\nFor example, while universal scientific truths remain strictly in the simple present (*"The Earth revolves around the Sun"*), ongoing actions that began in the past demand the present perfect continuous with *since* or *for*.',
          introductionHi: 'वर्तमान काल में BPSC मुख्य रूप से दो नियमों का परीक्षण करता है: सार्वभौमिक सत्य (Universal Truths) में Simple Present का प्रयोग और समय की निरंतरता दर्शाने के लिए Since और For का सही चयन।',
          conceptSections: [
            {
              title: '1. Simple Present: Universal Truths & Permanent Facts',
              contentMarkdownEn: 'The Simple Present (Subject + V1/V5) is mandatory for:\n\n* **Universal / Scientific Facts:**\n  * ✔️ *"The Sun ==rises== in the east."*\n  * ✔️ *"Water ==boils== at 100°C."*\n  * *Exam Trap:* Even in indirect speech following a past reporting verb, universal truths DO NOT change tense!\n    * ❌ *"The teacher said that the earth was round."* → ✔️ *"The teacher said that the earth ==is== round."*\n* **Habitual Actions & Proverbs:**\n  * *"Barking dogs seldom ==bite==."*\n  * *"He ==reads== the newspaper every morning."*'
            },
            {
              title: '2. Present Perfect: Signal Words & Since vs For',
              contentMarkdownEn: 'Formed with: ==Subject + have/has + V3==.\n\n* **Mandatory Signal Words:** When a sentence contains **already, just, recently, yet, so far, ever, never**, use Present Perfect, NOT Simple Past!\n  * ❌ *"I did not see him yet."* → ✔️ *"I ==have not seen== him yet."*\n  * ❌ *"He already finished the work."* → ✔️ *"He ==has already finished== the work."*\n\n* **Since vs For (Time Markers):**\n  * **==SINCE== (Point of Time / निश्चित समय):** Used with exact dates, days, years, clock times, or life stages:\n    * *since Monday, since 2018, since 8 AM, since childhood, since morning.*\n  * **==FOR== (Period of Time / समयावधि):** Used with durations:\n    * *for two hours, for three days, for ten years, for a long time.*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Point of Time (निश्चित समय)',
              definitionEn: 'A specific calendar timestamp or temporal milestone marking when an action commenced, requiring the preposition "since".',
              definitionHi: 'वह निश्चित समय या तिथि जहाँ से कोई कार्य प्रारंभ हुआ, जिसके साथ Since आता है।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Since vs For Formula',
              formulaOrRule: 'Since + Exact Point (2020 / Monday) | For + Duration (5 years / 2 days)',
              explanationEn: 'If you can count the units of time (years, months, hours), use FOR. If it names the clock/calendar point, use SINCE.'
            }
          ],
          examples: [
            {
              title: 'Correcting Since and For',
              problemEn: 'Correct: "He has been living in Patna since five years."',
              stepByStepSolutionEn: '1. "Five years" is a counted duration/period of time.\n2. Periods of time require "for", not "since".\n3. Correct: "He has been living in Patna for five years."',
              shortcutTrick: 'Counted number + units = FOR!'
            }
          ],
          practicalApplications: ['Directly scores in BPSC TRE Part 1 Fill in the Blanks.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "I am living here since 2015".',
              whyWrongEn: 'An action starting in the past and continuing into the present requires Present Perfect Continuous ("have been living"), not simple continuous.',
              correctWayEn: 'Say "I have been living here since 2015".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Since (point) vs For (period) (TRE 1.0 Q.2)',
              'Universal truths in simple present (TRE 2.0 Q.3)',
              'Yet with present perfect negative'
            ],
            commonDistractorTraps: ['Using simple past with "yet" or "already"'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.2)', 'BPSC TRE 2.0 (Q.3)']
          },
          quickRevisionPoints: [
            'Universal truths never change tense (Earth revolves around the Sun).',
            'Since is for exact points: since 2010, since morning, since Monday.',
            'For is for counted duration: for 5 hours, for 2 days, for 10 years.',
            'Already and yet require Present Perfect (have/has + V3).'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-prs-1',
              questionEn: 'Fill in the blank: "Dr. Sharma has been serving as the principal of this college ________ 2015."',
              questionHi: 'रिक्त स्थान भरें: "Dr. Sharma has been serving as the principal of this college ________ 2015."',
              options: [
                { id: 'A', textEn: 'for', isCorrect: false },
                { id: 'B', textEn: 'since', isCorrect: true },
                { id: 'C', textEn: 'from', isCorrect: false },
                { id: 'D', textEn: 'by', isCorrect: false }
              ],
              explanationEn: '"2015" is an exact starting point of time in the calendar, which mandates the use of "since".',
              conceptTested: 'Since with calendar year'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-prs-1',
            topicId: 'eng-topic-present-tense-mastery',
            chapterId: 'eng-ch-10-present-tense',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank with the appropriate verb form: "Our physics teacher taught us that light ________ faster than sound."',
            questionTextHi: 'उचित क्रिया रूप से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'traveled', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'travels', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'was traveling', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'Statements expressing eternal physical laws, scientific principles, or universal truths are always expressed in the Simple Present Tense, regardless of whether the principal reporting clause is in the past tense. Hence, "travels" is correct.',
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
  // CHAPTER 11: PAST TENSE
  // =========================================================================
  {
    id: 'eng-ch-11-past-tense',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 11,
    slug: 'past-tense-simple-past-vs-past-perfect',
    titleEn: 'Chapter 11: Past Tense — Simple Past vs Past Perfect Mechanics',
    titleHi: 'अध्याय 11: भूतकाल — सामान्य भूतकाल बनाम पूर्ण भूतकाल की संरचना',
    descriptionEn: 'The sequence of two past actions: the earlier action takes Past Perfect (had + V3) while the subsequent action takes Simple Past (V2); specific past time adverbs (yesterday, ago, in 1947).',
    descriptionHi: 'भूतकाल में दो घटनाओं का क्रम: पहले घटित कार्य में Had + V3 तथा बाद के कार्य में Simple Past (डॉक्टर के आने से पहले रोगी मर चुका था)।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-past-sequence',
        chapterId: 'eng-ch-11-past-tense',
        topicNumber: 1,
        slug: 'two-past-actions-sequence-of-tenses',
        titleEn: 'Sequence of Two Past Actions: Past Perfect & Simple Past',
        titleHi: 'भूतकाल में दो कार्यों का क्रम: पास्ट परफेक्ट एवं सिंपल पास्ट',
        descriptionEn: 'The classic rule: Action 1 = Had + V3, Action 2 = V2. Specific past time adverbs that forbid Present Perfect (yesterday, last night, ago).',
        descriptionHi: 'डॉक्टर के आने से पहले रोगी मर चुका था (The patient had died before the doctor arrived), तथा Yesterday के साथ Present Perfect न लगाने का नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 8,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.3), TRE 2.0 (Q.5) & TRE 3.0 (Q.2)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-past-sequence',
          topicId: 'eng-topic-past-sequence',
          titleEn: 'The Chronology of Past Events: Perfect vs Simple',
          titleHi: 'भूतकाल की घटनाओं का क्रम निर्धारण',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Identify which of two past actions occurred first and apply Past Perfect (had + V3) to it.',
            'Apply Simple Past (V2) to the subsequent past action.',
            'Never use Present Perfect with past time markers like "yesterday", "last year", "ago", or in historical dates.',
            'Correctly construct clauses introduced by "before" and "after".'
          ],
          introductionEn: '==When two events occurred in the past, English grammar does not treat them equally. The earlier event must be placed in the "Past of the Past" (Past Perfect: had + V3).==\n\nThis is the famous grammatical formula tested across decades of Indian competitive exams: *"The patient had died before the doctor arrived."*',
          introductionHi: 'जब भूतकाल में दो घटनाएं एक के बाद एक घटित होती हैं, तो जो कार्य पहले समाप्त हुआ उसमें Past Perfect (had + V3) और जो बाद में हुआ उसमें Simple Past (V2) आता है।',
          conceptSections: [
            {
              title: '1. The Golden Rule of Two Past Actions',
              contentMarkdownEn: '* **Formula 1 (With "BEFORE"):**\n  * ==[1st Action: Had + V3]== + **BEFORE** + ==[2nd Action: V2]==\n  * *Example:* *"The train ==had departed== (1st) before we ==reached== (2nd) the station."*\n  * *Example:* *"The patient ==had died== (1st) before the doctor ==arrived== (2nd)."*\n\n* **Formula 2 (With "AFTER"):**\n  * ==[2nd Action: V2]== + **AFTER** + ==[1st Action: Had + V3]==\n  * *Example:* *"We ==reached== (2nd) the platform after the train ==had departed== (1st)."*'
            },
            {
              title: '2. Past Time Adverbs Forbid Present Perfect',
              contentMarkdownEn: 'If a sentence mentions an **explicit past time marker**, you MUST use **Simple Past (V2)**, NEVER Present Perfect (have/has + V3):\n\n* **Forbidden Time Markers:** ==Yesterday, Last night, Last week, Two days ago, In 1947, Formerly.==\n\n* **Exam Traps:**\n  * ❌ *"India has won freedom in 1947."* → ✔️ *"India ==won== freedom in 1947."*\n  * ❌ *"I have received your letter yesterday."* → ✔️ *"I ==received== your letter yesterday."*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Past Perfect (पूर्ण भूतकाल)',
              definitionEn: 'The tense used to emphasize that an action was completed prior to another definite point or event in the past.',
              definitionHi: 'वह काल जो यह दर्शाता है कि कोई कार्य भूतकाल में किसी अन्य घटना से पूर्व ही संपन्न हो चुका था।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Two Past Actions Formula',
              formulaOrRule: 'Earlier Action = HAD + V3 | Subsequent Action = V2 (Simple Past)',
              explanationEn: 'Earlier event = had + V3; Later event = simple past.'
            }
          ],
          examples: [
            {
              title: 'Analyzing Doctor & Patient Sentence',
              problemEn: 'Fill blanks: "The patient (die) before the doctor (arrive)."',
              stepByStepSolutionEn: '1. Which happened first? Patient dying happened first.\n2. 1st action takes had + V3: "had died".\n3. 2nd action takes V2: "arrived".\n4. Result: "The patient had died before the doctor arrived."',
              shortcutTrick: 'First event = HAD + V3!'
            }
          ],
          practicalApplications: ['Frequently appears in Error Detection and Fill in the Blanks.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "I have completed my graduation in 2021".',
              whyWrongEn: '"In 2021" is a completed past year; it strictly requires Simple Past ("completed"), not Present Perfect.',
              correctWayEn: 'Say "I completed my graduation in 2021".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Had + V3 before V2 (TRE 1.0 Q.3)',
              'Yesterday / in 1947 takes Simple Past (TRE 2.0 Q.5)',
              'After + had + V3'
            ],
            commonDistractorTraps: ['Using had + V3 for both actions'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.3)', 'BPSC TRE 2.0 (Q.5)']
          },
          quickRevisionPoints: [
            'Earlier past action = had + V3; Subsequent past action = V2.',
            'Had + V3 before V2.',
            'V2 after had + V3.',
            'Explicit past time (yesterday, in 1947, ago) takes Simple Past, never Present Perfect.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-pst-1',
              questionEn: 'Choose the correct verb combination: "By the time the fire brigade ________, the house ________ to ashes."',
              questionHi: 'उचित क्रिया रूप चुनें: "By the time the fire brigade ________, the house ________ to ashes."',
              options: [
                { id: 'A', textEn: 'arrived, had burnt', isCorrect: true },
                { id: 'B', textEn: 'had arrived, burnt', isCorrect: false },
                { id: 'C', textEn: 'arrived, was burning', isCorrect: false },
                { id: 'D', textEn: 'had arrived, had burnt', isCorrect: false }
              ],
              explanationEn: 'The burning to ashes occurred first (Past Perfect: had burnt), before the fire brigade arrived (Simple Past: arrived).',
              conceptTested: 'Two past actions sequence'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-pst-1',
            topicId: 'eng-topic-past-sequence',
            chapterId: 'eng-ch-11-past-tense',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blanks: "The bell ________ before I ________ the school premises."',
            questionTextHi: 'उचित क्रिया रूपों से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'had rung, reached', isCorrect: true },
              { id: 'o2', identifier: 'B', textEn: 'rang, had reached', isCorrect: false },
              { id: 'o3', identifier: 'C', textEn: 'has rung, reached', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'A',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'The ringing of the bell occurred prior to reaching school. The earlier completed action requires the Past Perfect ("had rung"), while the subsequent event requires the Simple Past ("reached").',
            isAuthenticPyq: true,
            treVersion: 'TRE_1_0',
            examDate: '2023-08-25',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 3,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 12: FUTURE TENSE
  // =========================================================================
  {
    id: 'eng-ch-12-future-tense',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 12,
    slug: 'future-tense-will-shall-future-perfect',
    titleEn: 'Chapter 12: Future Tense — Will vs Shall & Future Perfect "By the time"',
    titleHi: 'अध्याय 12: भविष्य काल — Will/Shall का प्रयोग एवं Future Perfect',
    descriptionEn: 'Traditional vs modern Will/Shall (promises, commands, determination); Future Perfect with "by next month" / "by the time" (will have + V3); and future conditional time clauses.',
    descriptionHi: 'Will एवं Shall का नियम, Future Perfect (will have + V3) में By the time का प्रयोग, तथा समय सूचक उपवाक्य में Will न लगाने का नियम।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-future-mechanics',
        chapterId: 'eng-ch-12-future-tense',
        topicNumber: 1,
        slug: 'future-perfect-and-conditional-time-clauses',
        titleEn: 'Future Perfect (Will Have + V3) & No "Will" in Time Clauses',
        titleHi: 'फ्यूचर परफेक्ट एवं समय सूचक उपवाक्यों में \'Will\' का निषेध',
        descriptionEn: 'The critical rule: No "will/shall" in subordinate time clauses (If/When/As soon as + Simple Present); and Future Perfect with "By + future time".',
        descriptionHi: 'शर्त एवं समय वाले वाक्यों में Will/Shall नहीं आता (If it rains, we will cancel); तथा \'By next year\' के साथ Will have + V3 का नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 6,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 2.0 (Q.4), TRE 3.0 (Q.3)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-future-mechanics',
          topicId: 'eng-topic-future-mechanics',
          titleEn: 'Future Tense Mastery & Examination Rules',
          titleHi: 'भविष्य काल के नियम एवं परीक्षा उपयोगी सूत्र',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Never use "will" or "shall" in subordinate conditional and time clauses (introduced by if, when, as soon as, unless, until).',
            'Use Future Perfect (will have + V3) when an action will be completed before a specified future deadline ("by June", "by next year").',
            'Differentiate between "will" and "shall" in expressing determination, promises, and commands.'
          ],
          introductionEn: '==In English future expressions, the single most lethal examination trap is the double future trap: placing "will" in both clauses of a conditional sentence.==\n\nWriting *"If you will come, I will help you"* is grammatically incorrect in standard English. The subordinate condition takes Simple Present: *"If you come, I will help you"*.',
          introductionHi: 'भविष्य काल में दोनों उपवाक्यों में Will लगाना सबसे बड़ी भूल है। शर्त या समय वाले भाग में केवल Simple Present आता है (जैसे: If it rains, NOT If it will rain)।',
          conceptSections: [
            {
              title: '1. The Prohibition of "Will" in Conditional & Time Clauses',
              contentMarkdownEn: 'When two future events are linked, the clause introduced by **If, When, As soon as, Before, After, Until, Unless** takes the ==SIMPLE PRESENT (V1/V5)==, NOT Future Tense:\n\n* **Formula:** ==[If / When / As soon as + Simple Present (V1/V5)]==, ==[Main Clause: Simple Future (Will + V1)]==\n\n* **Standard Examples:**\n  * ❌ *"If it will rain, we will postpone the match."*\n  * ✔️ *"==If it rains==, we will postpone the match."*\n  * ❌ *"When he will arrive, I will inform you."*\n  * ✔️ *"==When he arrives==, I will inform you."*\n  * ❌ *"Unless you will work hard, you will not succeed."*\n  * ✔️ *"==Unless you work hard==, you will not succeed."*'
            },
            {
              title: '2. Future Perfect Tense (Will Have + V3) with "BY"',
              contentMarkdownEn: 'Denotes an action that will be completed prior to a designated future time limit:\n\n* **Signal Marker:** ==BY + Future Time== *(by next Monday, by June 2026, by 5 PM)*:\n  * ✔️ *"By the end of this year, I ==will have completed== my syllabus."*\n  * ✔️ *"By 2026, the government ==will have built== the expressway."*'
            }
          ],
          importantDefinitions: [
            {
              term: 'Future Perfect (पूर्ण भविष्य काल)',
              definitionEn: 'A verb construction indicating that an action will be completed before a specified future milestone, formed by will have + V3.',
              definitionHi: 'वह काल जो यह दर्शाता है कि कोई कार्य भविष्य में किसी निश्चित समय तक पूर्ण हो चुका होगा।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'No Double Future Rule',
              formulaOrRule: 'If/When/Unless + Simple Present, Will + V1 (NEVER will...will)',
              explanationEn: 'Subordinate clause = Present; Main clause = Future.'
            }
          ],
          examples: [
            {
              title: 'Correcting Double Future',
              problemEn: 'Find error: "As soon as the minister will arrive, the function will begin."',
              stepByStepSolutionEn: '1. "As soon as" introduces a temporal subordinate clause.\n2. Subordinate clause cannot take "will".\n3. Replace "will arrive" with simple present "arrives".\n4. Correct: "As soon as the minister arrives, the function will begin."',
              shortcutTrick: 'No "will" after as soon as, if, or when!'
            }
          ],
          practicalApplications: ['Essential for Error Detection.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Using "will" after "until".',
              whyWrongEn: '"Until" is a temporal connector; it mandates Simple Present, not Future.',
              correctWayEn: 'Say "Wait here until I return" (not until I will return).'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'No will after if/when/as soon as (TRE 2.0 Q.4)',
              'By next month + will have + V3 (TRE 3.0 Q.3)'
            ],
            commonDistractorTraps: ['Using will in conditional clauses'],
            relatedPyqReferences: ['BPSC TRE 2.0 (Q.4)', 'BPSC TRE 3.0 (Q.3)']
          },
          quickRevisionPoints: [
            'Never use will/shall after: if, when, as soon as, unless, until, before.',
            'Structure: If + Simple Present, Will + V1.',
            'Future Perfect (will have + V3) pairs with "By + future time".'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-fut-1',
              questionEn: 'Complete the sentence: "By this time tomorrow, they ________ the examination."',
              questionHi: 'रिक्त स्थान भरें: "By this time tomorrow, they ________ the examination."',
              options: [
                { id: 'A', textEn: 'will finish', isCorrect: false },
                { id: 'B', textEn: 'will have finished', isCorrect: true },
                { id: 'C', textEn: 'have finished', isCorrect: false },
                { id: 'D', textEn: 'finished', isCorrect: false }
              ],
              explanationEn: '"By this time tomorrow" denotes a future completion deadline, requiring the Future Perfect tense ("will have finished").',
              conceptTested: 'Future Perfect with "by"'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-fut-1',
            topicId: 'eng-topic-future-mechanics',
            chapterId: 'eng-ch-12-future-tense',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Choose the grammatically correct sentence:',
            questionTextHi: 'व्याकरण सम्मत शुद्ध वाक्य चुनें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'If he will study diligently, he will clear the BPSC examination.', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'If he studies diligently, he will clear the BPSC examination.', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'If he studied diligently, he will clear the BPSC examination.', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'In conditional sentences referring to future possibilities, the conditional clause introduced by "if" takes the Simple Present tense ("studies"), while the main result clause takes the Simple Future tense ("will clear"). Option B is correct.',
            isAuthenticPyq: true,
            treVersion: 'TRE_2_0',
            examDate: '2023-12-15',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 4,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 13: SUBJECT-VERB AGREEMENT
  // =========================================================================
  {
    id: 'eng-ch-13-subject-verb-agreement',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 13,
    slug: 'subject-verb-agreement-concord-mastery',
    titleEn: 'Chapter 13: Subject-Verb Concord — The Core 14 Golden Rules',
    titleHi: 'अध्याय 13: कर्ता-क्रिया संगति (Subject-Verb Agreement) — 14 स्वर्णिम नियम',
    descriptionEn: 'The supreme foundation of English syntax: Proximity rules with Neither...nor; Interveners (as well as, along with); One of the + Plural noun + Singular verb; A number of vs The number of; and Collective noun concord.',
    descriptionHi: 'कर्ता और क्रिया का तालमेल: Neither...nor में निकटवर्ती कर्ता, As well as में प्रथम कर्ता, One of the के बाद बहुवचन संज्ञा एवं एकवचन क्रिया, तथा A number of बनाम The number of।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-sva-mastery',
        chapterId: 'eng-ch-13-subject-verb-agreement',
        topicNumber: 1,
        slug: 'fourteen-golden-rules-of-concord',
        titleEn: 'The Golden Rules of Subject-Verb Concord & Exam Traps',
        titleHi: 'कर्ता-क्रिया संगति के प्रमुख नियम एवं परीक्षा के जाल',
        descriptionEn: 'Exhaustive rules covering compound subjects, parenthetical expressions, fractional expressions, and relative pronoun agreement.',
        descriptionHi: 'Neither...nor, Either...or, As well as, Along with, One of the, More than one के सभी महत्वपूर्ण नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 14,
        hasAppearedInPyq: true,
        examImportance: 'CRITICAL_HIGH_YIELD',
        pyqAppearanceSummary: 'Tested in EVERY single BPSC TRE sitting (TRE 1.0 Q.1, TRE 2.0 Q.2, TRE 3.0 Q.1)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-sva-mastery',
          topicId: 'eng-topic-sva-mastery',
          titleEn: 'Complete Masterclass on Subject-Verb Concord',
          titleHi: 'कर्ता-क्रिया संगति (Subject-Verb Agreement) का संपूर्ण अध्याय',
          readingTimeMinutes: 22,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Match singular verbs with singular subjects and plural verbs with plural subjects.',
            'Apply Rule of Proximity for Either...or and Neither...nor.',
            'Identify the true subject when parenthetical interveners (as well as, together with, accompanied by) separate subject from verb.',
            'Master the formula: "One of the + Plural Noun + Singular Verb" vs relative clause exception.'
          ],
          introductionEn: '==Subject-Verb Concord is the spinal cord of English grammar. In BPSC TRE, approximately 25% of all grammar-based questions trace directly back to Subject-Verb Agreement.==\n\nThe fundamental principle is deceptively simple: a singular subject requires a singular verb, while a plural subject requires a plural verb. However, intervening phrases, compound connectors, and deceptive pronouns make this topic the examiner\'s favorite hunting ground.',
          introductionHi: 'Subject-Verb Agreement अंग्रेजी व्याकरण का सबसे महत्वपूर्ण विषय है। एकवचन कर्ता के साथ एकवचन क्रिया और बहुवचन कर्ता के साथ बहुवचन क्रिया का प्रयोग होता है।',
          conceptSections: [
            {
              title: '1. Rule of Interveners: As well as, Along with, Together with',
              contentMarkdownEn: 'When two subjects are joined by:\n\n* **as well as, along with, together with, in addition to, accompanied by, like, unlike, besides, with, rather than**\n\nThe verb agrees strictly with the ==FIRST SUBJECT==!\n\n* **Examples:**\n  * *"The Captain, ==along with his sailors, was== rescued."* *(Captain is singular => was)*\n  * *"The students, ==as well as their teacher, were== praised."* *(Students is plural => were)*'
            },
            {
              title: '2. Rule of Proximity: Either...or, Neither...nor, Not only...but also',
              contentMarkdownEn: 'When subjects are connected by **Either...or**, **Neither...nor**, or **Not only...but also**, the verb agrees with the ==NEAREST SUBJECT== (the subject closest to the verb):\n\n* **Examples:**\n  * *"Neither the principal nor the ==teachers were== present."* *(Teachers is nearest => were)*\n  * *"Either the boys or the ==father has== the key."* *(Father is nearest => has)*'
            },
            {
              title: '3. "One of the" vs "A number of" vs "The number of"',
              contentMarkdownEn: 'Examine this high-frequency comparison table:',
              tableData: {
                headers: ['Expression', 'Noun Following It', 'Verb Required', 'Example Sentence'],
                rows: [
                  ['**One of the**', '==Plural Noun==', '==Singular Verb==', 'One of the **students is** absent.'],
                  ['**One of the + Relative Pronoun (who/that)**', '==Plural Noun==', '==Plural Verb==', 'He is one of the **teachers who have** inspired us.'],
                  ['**A number of**', '==Plural Noun==', '==Plural Verb==', 'A number of **candidates are** waiting.'],
                  ['**The number of**', '==Plural Noun==', '==Singular Verb==', 'The number of **candidates is** fifty.']
                ]
              }
            }
          ],
          importantDefinitions: [
            {
              term: 'Concord (व्याकरणिक संगति)',
              definitionEn: 'The agreement between words in gender, number, case, or person, particularly between a subject and its finite verb.',
              definitionHi: 'वाक्य में कर्ता के लिंग, वचन और पुरुष के अनुसार क्रिया का उचित रूप धारण करना।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'The Number vs A Number Formula',
              formulaOrRule: 'A number of + Plural Verb | The number of + Singular Verb',
              explanationEn: '"A number of" means many (plural); "The number of" denotes a single mathematical total (singular).'
            }
          ],
          examples: [
            {
              title: 'Correcting One of the',
              problemEn: 'Find error: "One of my friend is an IAS officer in Bihar."',
              stepByStepSolutionEn: '1. "One of" selects one entity out of a plural group.\n2. The noun must be plural: "friends".\n3. The verb remains singular: "is".\n4. Correct: "One of my friends is an IAS officer in Bihar."',
              shortcutTrick: 'One of the + Plural Noun + Singular Verb!'
            }
          ],
          practicalApplications: ['The single most tested concept across BPSC TRE.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Using a plural verb after "as well as" when the first subject is singular.',
              whyWrongEn: '"As well as" is a parenthetical prepositional connector, not a coordinating conjunction like "and". The verb must agree with the first subject.',
              correctWayEn: 'Say "Ramesh, as well as his friends, is coming".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Neither...nor proximity agreement (TRE 1.0 Q.1)',
              'As well as first subject agreement (TRE 2.0 Q.2)',
              'One of the + plural noun + singular verb (TRE 3.0 Q.1)'
            ],
            commonDistractorTraps: ['Looking at the second subject in "as well as" structures'],
            relatedPyqReferences: ['BPSC TRE 1.0 (Q.1)', 'BPSC TRE 2.0 (Q.2)', 'BPSC TRE 3.0 (Q.1)']
          },
          quickRevisionPoints: [
            'As well as / along with: verb agrees with the FIRST subject.',
            'Either...or / Neither...nor: verb agrees with the NEAREST subject.',
            'One of the + Plural Noun + Singular Verb.',
            'A number of takes plural verb; The number of takes singular verb.',
            'Each, every, either, neither always take singular verb.'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-sva-1',
              questionEn: 'Choose the correct verb: "The manager, along with his assistants, ________ attending the conference."',
              questionHi: 'उचित क्रिया चुनें: "The manager, along with his assistants, ________ attending the conference."',
              options: [
                { id: 'A', textEn: 'is', isCorrect: true },
                { id: 'B', textEn: 'are', isCorrect: false },
                { id: 'C', textEn: 'were', isCorrect: false },
                { id: 'D', textEn: 'have been', isCorrect: false }
              ],
              explanationEn: 'When two subjects are joined by "along with", the verb agrees with the first subject ("The manager", which is singular). Hence, "is" is correct.',
              conceptTested: 'Along with first subject agreement'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-sva-1',
            topicId: 'eng-topic-sva-mastery',
            chapterId: 'eng-ch-13-subject-verb-agreement',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank: "Neither the headmaster nor the assistant teachers ________ present at the meeting."',
            questionTextHi: 'उचित क्रिया से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'was', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'were', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'is', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'Under the Rule of Proximity, when two subjects are connected by "Neither...nor", the verb agrees with the nearest subject. Since "the assistant teachers" is plural and adjacent to the verb, the plural verb "were" is required.',
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
  },

  // =========================================================================
  // CHAPTER 14: MODALS
  // =========================================================================
  {
    id: 'eng-ch-14-modals',
    subjectKey: 'ENGLISH_LANGUAGE',
    chapterNumber: 14,
    slug: 'modals-can-could-may-might-must-ought',
    titleEn: 'Chapter 14: Modal Auxiliaries — Possibility, Obligation & Bare Infinitives',
    titleHi: 'अध्याय 14: रूपात्मक सहायक क्रियाएं (Modals) — संभावना, कर्तव्य एवं बेयर इन्फिनिटिव',
    descriptionEn: 'Can vs Could, May vs Might, Must vs Ought to; Modal + Bare Infinitive (no "to"); Had better / Would rather rules; and semi-modals (Need, Dare, Used to).',
    descriptionHi: 'Can, May, Must, Ought to के प्रयोग, Modals के बाद क्रिया की मूल अवस्था (V1), तथा Had better के बाद To न लगाने का नियम।',
    totalPracticeQuestions: 25,
    totalEstimatedMinutes: 60,
    topics: [
      {
        id: 'eng-topic-modals-rules',
        chapterId: 'eng-ch-14-modals',
        topicNumber: 1,
        slug: 'modal-meanings-and-bare-infinitive-rules',
        titleEn: 'Modal Nuances, Had Better & Bare Infinitive Constraints',
        titleHi: 'Modals के विशिष्ट अर्थ एवं Had Better के नियम',
        descriptionEn: 'Possibility hierarchy (Might < May < Can), Had better + V1 (no "to"), Ought to for moral duty, and Need/Dare as auxiliary vs main verb.',
        descriptionHi: 'Had better के बाद सीधे V1 आता है (to नहीं), Ought to नैतिक कर्तव्य के लिए, तथा Need/Dare के विशेष नियम।',
        estimatedMinutes: 30,
        isPrescribedInOfficialSyllabus: true,
        pyqCount: 5,
        hasAppearedInPyq: true,
        examImportance: 'HIGH_YIELD',
        pyqAppearanceSummary: 'Asked in BPSC TRE 2.0 (Q.7)',
        isStoryFormat: false,
        tutorial: {
          id: 'tut-modals-rules',
          topicId: 'eng-topic-modals-rules',
          titleEn: 'Modal Auxiliaries Guide for BPSC TRE',
          titleHi: 'मोडल्स की संपूर्ण मार्गदर्शिका',
          readingTimeMinutes: 20,
          difficulty: 'INTERMEDIATE',
          learningObjectives: [
            'Express possibility degrees: Might (remote), May (good possibility), Must (strong certainty).',
            'Follow "had better" and "would rather" strictly with bare infinitives (WITHOUT "to").',
            'Use "ought to" for moral obligation and "must" for legal/urgent necessity.',
            'Handle "need" and "dare" as negative modals without "to" (e.g. "He need not go").'
          ],
          introductionEn: '==Modal auxiliaries express the speaker\'s attitude—such as permission, ability, obligation, or possibility. Unlike primary verbs, modals never change their form with subject person or number.==\n\nA critical rule tested in BPSC is that modals take the bare infinitive (V1 without "to"). Furthermore, expressions like *had better* demand a bare verb, defying the intuition to insert "to".',
          introductionHi: 'Modals (Can, Could, May, Might, Must आदि) के बाद हमेशा क्रिया का मूल रूप (V1 बिना To) आता है। Had better के बाद भी To का प्रयोग वर्जित है।',
          conceptSections: [
            {
              title: '1. Possibility & Permission Nuances',
              contentMarkdownEn: '* **May vs Might vs Can:**\n  * **May:** Formal permission (*"May I come in?"*) or factual possibility (*"It may rain today" - ~50% chance*).\n  * **Might:** Remote / weak possibility (*"He has not prepared, but he might pass" - ~20% chance*).\n  * **Can:** General theoretical ability (*"Anyone can make a mistake"*).\n  * **Must:** Strong logical deduction or certainty (*"He has three luxury cars; he ==must be== wealthy"*).'
            },
            {
              title: '2. "Had Better" & "Would Rather" (Bare Infinitive Rule)',
              contentMarkdownEn: 'The expressions **had better**, **would rather**, **sooner than** take a ==BARE INFINITIVE (V1 WITHOUT TO)==:\n\n* ❌ *"You had better to leave now."* → ✔️ *"You ==had better leave== now."*\n* ❌ *"I would rather to die than beg."* → ✔️ *"I ==would rather die== than beg."*\n* *Exam Trap:* Despite the past word "had", *had better* refers to the present or future advice!'
            }
          ],
          importantDefinitions: [
            {
              term: 'Bare Infinitive (मूल अकर्मक क्रिया)',
              definitionEn: 'The base form of a verb used without the particle "to", mandatory following modal auxiliaries and expressions like had better.',
              definitionHi: 'बिना \'to\' के प्रयुक्त होने वाला क्रिया का मूल रूप (V1)।'
            }
          ],
          rulesAndFormulas: [
            {
              title: 'Had Better Formula',
              formulaOrRule: 'Subject + HAD BETTER + V1 (NO "to")',
              explanationEn: 'Never attach "to" after had better or would rather.'
            }
          ],
          examples: [
            {
              title: 'Correcting Had Better',
              problemEn: 'Find error: "You had better to consult a physician immediately."',
              stepByStepSolutionEn: '1. "Had better" is an idiomatic modal phrase meaning "ought to".\n2. It requires a bare infinitive.\n3. Delete "to".\n4. Correct: "You had better consult a physician immediately."',
              shortcutTrick: 'Had better + V1 (No to)!'
            }
          ],
          practicalApplications: ['Frequently tested in BPSC Sentence Improvement.'],
          commonMistakesAndMisconceptions: [
            {
              mistakeEn: 'Saying "He needs not to worry".',
              whyWrongEn: 'When "need" functions as an auxiliary modal with "not", it takes a bare infinitive without "to".',
              correctWayEn: 'Say "He need not worry".'
            }
          ],
          bpscTrePerspective: {
            frequentlyTestedAspects: [
              'Had better followed by bare infinitive (TRE 2.0 Q.7)',
              'Ought to for moral duty',
              'Need not without to'
            ],
            commonDistractorTraps: ['Inserting "to" after had better'],
            relatedPyqReferences: ['BPSC TRE 2.0 (Q.7)']
          },
          quickRevisionPoints: [
            'Modals take V1 bare infinitive (no "to").',
            'Had better takes V1 without to (You had better go).',
            'Would rather takes V1 without to (I would rather starve than steal).',
            'Ought to expresses moral obligation; Must expresses strong obligation.',
            'Need not and dare not do not take "to".'
          ],
          knowledgeCheck: [
            {
              id: 'kc-eng-mdl-1',
              questionEn: 'Choose the correct sentence:',
              questionHi: 'सही वाक्य का चयन करें:',
              options: [
                { id: 'A', textEn: 'You had better to take an umbrella.', isCorrect: false },
                { id: 'B', textEn: 'You had better take an umbrella.', isCorrect: true },
                { id: 'C', textEn: 'You had better taking an umbrella.', isCorrect: false },
                { id: 'D', textEn: 'You had better took an umbrella.', isCorrect: false }
              ],
              explanationEn: '"Had better" is followed by a bare infinitive (V1 without "to"). Hence, "take" is correct.',
              conceptTested: 'Had better bare infinitive'
            }
          ]
        },
        practiceQuestions: [
          {
            id: 'pq-eng-mdl-1',
            topicId: 'eng-topic-modals-rules',
            chapterId: 'eng-ch-14-modals',
            subjectKey: 'ENGLISH_LANGUAGE',
            sectionKey: 'PART_1_LANGUAGE',
            questionTextEn: 'Fill in the blank with the appropriate word: "You look exhausted; you had better ________ some rest."',
            questionTextHi: 'उचित शब्द से रिक्त स्थान भरें:',
            options: [
              { id: 'o1', identifier: 'A', textEn: 'to take', isCorrect: false },
              { id: 'o2', identifier: 'B', textEn: 'take', isCorrect: true },
              { id: 'o3', identifier: 'C', textEn: 'taking', isCorrect: false },
              { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
              { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
            ],
            correctOptionIdentifier: 'B',
            difficulty: 'EASY',
            practiceMode: 'BPSC_EXAM',
            explanationEn: 'The idiomatic expression "had better" functions as an auxiliary signifying advisable action and must be followed by a bare infinitive (the base form of the verb without "to"). Therefore, "take" is correct.',
            isAuthenticPyq: true,
            treVersion: 'TRE_2_0',
            examDate: '2023-12-15',
            shift: 'Shift 1 (Language Section)',
            officialQuestionNumber: 7,
            verificationStatus: 'OFFICIALLY_VERIFIED'
          }
        ]
      }
    ]
  }
];
