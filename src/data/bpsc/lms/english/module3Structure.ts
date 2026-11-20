import { LMSChapter } from '@/types/bpscLms';

export const MODULE_3_STRUCTURE_CHAPTERS: LMSChapter[] = [
  {
    "id": "eng-ch-15-phrases-and-clauses",
    "subjectKey": "ENGLISH_LANGUAGE",
    "chapterNumber": 15,
    "slug": "phrases-and-clauses-syntax",
    "titleEn": "Chapter 15: Phrases and Clauses (Noun, Adjective & Adverb Clauses)",
    "titleHi": "अध्याय 15: वाक्यांश (Phrases) एवं उपवाक्य (Clauses)",
    "descriptionEn": "Master the architectural building blocks of English sentences: distinguishing between phrases, dependent clauses, and independent clauses, and mastering Noun, Adjective (Relative), and Adverbial clauses.",
    "descriptionHi": "वाक्यांश (Phrase) एवं उपवाक्य (Clause) के बीच अंतर, संज्ञा उपवाक्य, विशेषण उपवाक्य एवं क्रियाविशेषण उपवाक्य की पहचान व वाक्य रचना में प्रयोग।",
    "totalPracticeQuestions": 25,
    "totalEstimatedMinutes": 50,
    "topics": [
      {
        "id": "eng-topic-phrases-clauses-classification",
        "chapterId": "eng-ch-15-phrases-and-clauses",
        "topicNumber": 1,
        "slug": "phrase-vs-clause-noun-adjective-adverb",
        "titleEn": "Classification of Phrases & Subordinate Clauses",
        "titleHi": "वाक्यांशों एवं आश्रित उपवाक्यों का वर्गीकरण",
        "descriptionEn": "Identify phrases (prepositional, participial, infinitive) versus subordinate clauses (noun, adjective, adverbial) and their syntactic markers.",
        "descriptionHi": "Phrase और Clause की सटीक पहचान, Relative Pronouns और Subordinating Conjunctions का उपवाक्य निर्माण में उपयोग।",
        "estimatedMinutes": 25,
        "isPrescribedInOfficialSyllabus": true,
        "pyqCount": 4,
        "hasAppearedInPyq": true,
        "examImportance": "HIGH_YIELD",
        "pyqAppearanceSummary": "Asked in BPSC TRE 2.0 (Language Part 1) & TRE 3.0",
        "isStoryFormat": false,
        "tutorial": {
          "id": "tut-phrase-vs-clause-noun-adjective-adverb",
          "topicId": "eng-topic-phrases-clauses-classification",
          "titleEn": "Classification of Phrases & Subordinate Clauses",
          "titleHi": "वाक्यांशों एवं आश्रित उपवाक्यों का वर्गीकरण",
          "readingTimeMinutes": 25,
          "difficulty": "INTERMEDIATE",
          "learningObjectives": [
            "Master core concepts and rules of Chapter 15: Phrases and Clauses (Noun, Adjective & Adverb Clauses)",
            "Identify frequent BPSC TRE question patterns and exam traps",
            "Apply systematic steps to solve 5-option English questions accurately"
          ],
          "introductionEn": "A sentence is like a building: words are bricks, phrases are pre-assembled walls, and clauses are entire functional rooms. If you cannot distinguish a clause from a phrase, complex sentence analysis becomes impossible!\n\nA **Phrase** is a group of related words that does **not** contain both a subject and a finite verb (e.g., *in the morning*, *to win the prize*). A **Clause** is a group of words that contains both a subject and a finite predicate (e.g., *because she was exhausted*, *who won the gold medal*). Independent clauses can stand alone as complete sentences; dependent (subordinate) clauses cannot stand alone and function as nouns, adjectives, or adverbs.",
          "introductionHi": "",
          "conceptSections": [
            {
              "title": "1. The Core Difference: Phrase vs. Clause",
              "contentMarkdownEn": "The acid test for distinguishing a phrase from a clause is the presence of a **Subject-Verb unit**:\n\n* **Phrase**: No Subject + Finite Verb combination. Functions as a single part of speech.\n  * *Prepositional Phrase*: *under the wooden table* (adverbial or adjectival)\n  * *Participial Phrase*: *walking down the street* (adjectival modifier)\n  * *Infinitive Phrase*: *to secure a first-class rank* (nominal or adverbial)\n* **Clause**: Must contain a **Subject** and a **Finite Verb**.\n  * *Independent (Main) Clause*: *The teacher entered the hall.* (Complete thought)\n  * *Dependent (Subordinate) Clause*: *When the bell rang* (Incomplete thought; needs an independent clause to make complete sense)."
            },
            {
              "title": "2. The Three Types of Subordinate Clauses",
              "contentMarkdownEn": "Subordinate clauses are categorized strictly by the grammatical role they perform in relation to the main clause:\n\n1. **Noun Clause**:\n   * Performs the job of a noun: Subject, Object of verb, Object of preposition, or Complement.\n   * Introduced by: *that, what, whatever, who, whoever, whether, if*.\n   * **Diagnostic Test**: Can be replaced by the pronoun **\"something\"** or **\"it\"**!\n   * Example: *I know [that honesty is the best policy].* $\\rightarrow$ *I know [something].* (Object of *know*).\n\n2. **Adjective (Relative) Clause**:\n   * Modifies an antecedent noun or pronoun immediately preceding it.\n   * Introduced by relative pronouns (*who, whom, whose, which, that*) or relative adverbs (*where, when, why*).\n   * Example: *The candidate [who scored top marks] was felicitated by the Governor.* (Modifies *The candidate*).\n\n3. **Adverb Clause**:\n   * Modifies a verb, adjective, or another adverb by answering *When? Where? Why? How? Under what condition?*\n   * Sub-types: Time (*when, while, before*), Reason (*because, since, as*), Condition (*if, unless*), Concession (*although, even though*), Purpose (*so that, lest*).\n   * Example: *You cannot enter the examination hall [unless you display your admit card].* (Adverb clause of condition)."
            }
          ],
          "importantDefinitions": [
            {
              "term": "Noun Clause",
              "definitionEn": "A dependent clause that takes the syntactic place of any noun in another clause, serving as subject, object, or complement.",
              "definitionHi": "संज्ञा उपवाक्य"
            },
            {
              "term": "Adjective (Relative) Clause",
              "definitionEn": "A dependent clause that modifies a noun or pronoun by providing descriptive or identifying information.",
              "definitionHi": "विशेषण उपवाक्य"
            }
          ],
          "rulesAndFormulas": [
            {
              "title": "A Relative Clause must be placed immediately adjacent to the antecedent noun it modifies; otherwise, it becomes a \"misplaced modifier\".",
              "formulaOrRule": "Noun (Antecedent) + [Relative Pronoun + Verb + Object]",
              "explanationEn": "A Relative Clause must be placed immediately adjacent to the antecedent noun it modifies; otherwise, it becomes a \"misplaced modifier\"."
            },
            {
              "title": "An Adverb Clause introduced by a subordinating conjunction at the beginning of a sentence must be followed by a comma separating it from the main clause.",
              "formulaOrRule": "Subordinate Conjunction + Clause 1, + Main Clause.",
              "explanationEn": "An Adverb Clause introduced by a subordinating conjunction at the beginning of a sentence must be followed by a comma separating it from the main clause."
            }
          ],
          "examples": [
            {
              "title": "Noun clauses can function as the subject of a complete sentence.",
              "problemEn": "What he said in the assembly surprised everyone present.",
              "stepByStepSolutionEn": "\"What he said in the assembly\" contains subject (he) and verb (said), and functions as the Subject of the main verb \"surprised\". Can be replaced by \"Something surprised everyone\". Thus, it is a Noun Clause.",
              "shortcutTrick": "Noun clauses can function as the subject of a complete sentence."
            },
            {
              "title": "Relative clauses modify the noun immediately preceding the relative pronoun.",
              "problemEn": "This is the historical monument which Dr. Rajendra Prasad visited in 1952.",
              "stepByStepSolutionEn": "\"which Dr. Rajendra Prasad visited in 1952\" describes the antecedent noun \"historical monument\". Hence, it is an Adjective (Relative) Clause.",
              "shortcutTrick": "Relative clauses modify the noun immediately preceding the relative pronoun."
            },
            {
              "title": "Adverb clauses of time answer \"When?\" and follow present tense after future main verbs.",
              "problemEn": "We shall begin the examination as soon as the superintendent gives the signal.",
              "stepByStepSolutionEn": "\"as soon as the superintendent gives the signal\" answers the question \"When will we begin?\". It modifies the verb \"shall begin\" and is an Adverb Clause of Time.",
              "shortcutTrick": "Adverb clauses of time answer \"When?\" and follow present tense after future main verbs."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Identify the nature of the bracketed clause: \"I cannot understand [why the principal cancelled the meeting].\"",
              "stepByStepSolutionEn": "The bracketed clause answers \"understand WHAT?\". It acts as the direct object of the transitive verb \"understand\". Apply the \"something\" test: \"I cannot understand [something].\" Hence, it is a Noun Clause.",
              "shortcutTrick": "Candidates confuse \"why\" with Adverb of Reason, but here it forms a clause acting as a direct object, not modifying a verb."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "In the sentence: \"The building where the constituent assembly met is now a national heritage site\", the clause \"where the constituent assembly met\" functions as:",
              "stepByStepSolutionEn": "Although introduced by \"where\", the clause directly describes the antecedent noun \"building\" (Which building? The building where the assembly met). Therefore, it functions as an Adjective (Relative) Clause.",
              "shortcutTrick": "Candidates mistakenly choose \"Adverb Clause of Place\" because of the word \"where\". If it modifies an antecedent noun, it is an Adjective Clause."
            }
          ],
          "practicalApplications": [
            "Crucial for scoring maximum qualifying marks in BPSC TRE Part 1 Language section."
          ],
          "commonMistakesAndMisconceptions": [
            {
              "mistakeEn": "The doctor examined the patient with a broken leg who arrived late.",
              "whyWrongEn": "Placing \"who arrived late\" after \"broken leg\" suggests the leg arrived late! The relative pronoun must refer directly to the person (the patient).",
              "correctWayEn": "The doctor examined the patient with a broken leg who had arrived late. / The doctor examined the patient who had a broken leg and arrived late."
            },
            {
              "mistakeEn": "Because she practiced diligently every single day.",
              "whyWrongEn": "A subordinate clause cannot stand alone as a sentence. It must be attached to an independent main clause.",
              "correctWayEn": "Because she practiced diligently every single day, she qualified BPSC TRE with distinction."
            }
          ],
          "bpscTrePerspective": {
            "frequentlyTestedAspects": [
              "Underlined clause classification and identifying relative pronoun errors."
            ],
            "commonDistractorTraps": [
              "Confusing Noun clauses acting as objects with Adverb clauses of reason."
            ],
            "relatedPyqReferences": [
              "BPSC TRE 2.0 (Language Part 1, Q.4)"
            ]
          },
          "quickRevisionPoints": [
            "A phrase has no subject-verb pair; a clause contains both subject and finite verb.",
            "Independent clauses can stand alone; dependent clauses cannot.",
            "Noun clauses answer \"What?\" and can be replaced with \"something/it\".",
            "Adjective clauses modify an antecedent noun right next to them.",
            "Adverb clauses answer When, Where, Why, How, or Under what condition."
          ],
          "knowledgeCheck": [
            {
              "id": "kc-eng-pc-1",
              "questionEn": "Identify the clause type: \"He told me that he was preparing for BPSC TRE.\"",
              "questionHi": "उपवाक्य का प्रकार पहचानें: \"He told me that he was preparing for BPSC TRE.\"",
              "options": [
                {
                  "id": "A",
                  "textEn": "Adverb Clause",
                  "isCorrect": false
                },
                {
                  "id": "B",
                  "textEn": "Noun Clause",
                  "isCorrect": true
                },
                {
                  "id": "C",
                  "textEn": "Adjective Clause",
                  "isCorrect": false
                },
                {
                  "id": "D",
                  "textEn": "Coordinate Clause",
                  "isCorrect": false
                }
              ],
              "explanationEn": "\"that he was preparing for BPSC TRE\" answers what he told me (direct object). Hence, it is a Noun Clause.",
              "conceptTested": "Noun clause identification"
            }
          ]
        },
        "practiceQuestions": [
          {
            "id": "pq-eng-pc-1",
            "topicId": "eng-topic-phrases-clauses-classification",
            "chapterId": "eng-ch-15-phrases-and-clauses",
            "subjectKey": "ENGLISH_LANGUAGE",
            "sectionKey": "PART_1_LANGUAGE",
            "questionTextEn": "In the sentence: \"The book that you recommended helped me crack the test\", the clause \"that you recommended\" is an example of a/an:",
            "questionTextHi": "वाक्य में रेखांकित उपवाक्य किसका उदाहरण है?",
            "options": [
              {
                "id": "o1",
                "identifier": "A",
                "textEn": "Noun Clause",
                "isCorrect": false
              },
              {
                "id": "o2",
                "identifier": "B",
                "textEn": "Adjective Clause",
                "isCorrect": true
              },
              {
                "id": "o3",
                "identifier": "C",
                "textEn": "Adverb Clause",
                "isCorrect": false
              },
              {
                "id": "o4",
                "identifier": "D",
                "textEn": "More than one of the above",
                "isCorrect": false
              },
              {
                "id": "o5",
                "identifier": "E",
                "textEn": "None of the above",
                "isCorrect": false
              }
            ],
            "correctOptionIdentifier": "B",
            "difficulty": "MODERATE",
            "practiceMode": "BPSC_EXAM",
            "explanationEn": "The clause \"that you recommended\" qualifies and describes the preceding noun \"book\" (Which book? The book that you recommended). Therefore, it is an Adjective (Relative) Clause.",
            "isAuthenticPyq": true,
            "treVersion": "TRE_2_0",
            "examDate": "2023-12-15",
            "shift": "Shift 1",
            "officialQuestionNumber": 4,
            "verificationStatus": "OFFICIALLY_VERIFIED"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-ch-16-sentence-types",
    "subjectKey": "ENGLISH_LANGUAGE",
    "chapterNumber": 16,
    "slug": "sentence-types-and-transformation",
    "titleEn": "Chapter 16: Sentence Types and Transformation (Simple, Compound, Complex)",
    "titleHi": "अध्याय 16: वाक्य भेद एवं वाक्य रूपांतरण (सरल, संयुक्त, मिश्रित वाक्य)",
    "descriptionEn": "Categorize sentences by purpose (Declarative, Interrogative, Imperative, Exclamatory) and syntactic structure (Simple, Compound, Complex, Compound-Complex). Master transformation without altering meaning.",
    "descriptionHi": "अर्थ के आधार पर (विधि, प्रश्न, आज्ञा, विस्मयादिबोधक) एवं रचना के आधार पर (साधारण, संयुक्त, मिश्र) वाक्यों का वर्गीकरण एवं अर्थ बदले बिना उनका परस्पर रूपांतरण।",
    "totalPracticeQuestions": 25,
    "totalEstimatedMinutes": 55,
    "topics": [
      {
        "id": "eng-topic-sentence-transformation-rules",
        "chapterId": "eng-ch-16-sentence-types",
        "topicNumber": 1,
        "slug": "simple-compound-complex-transformation",
        "titleEn": "Structural Sentence Types & Transformation Rules",
        "titleHi": "रचना के आधार पर वाक्य प्रकार एवं रूपांतरण के नियम",
        "descriptionEn": "Techniques for transforming Simple sentences (one independent clause) into Compound (FANBOYS) and Complex (subordinating conjunctions) sentences while strictly preserving original tense and sense.",
        "descriptionHi": "सरल, संयुक्त और मिश्र वाक्यों के बीच रूपांतरण के नियम, \"too...to\" से \"so...that\", \"in spite of\" से \"although\" में परिवर्तन।",
        "estimatedMinutes": 30,
        "isPrescribedInOfficialSyllabus": true,
        "pyqCount": 5,
        "hasAppearedInPyq": true,
        "examImportance": "CRITICAL_HIGH_YIELD",
        "pyqAppearanceSummary": "Tested regularly in BPSC TRE 1.0, 2.0 & 3.0",
        "isStoryFormat": false,
        "tutorial": {
          "id": "tut-simple-compound-complex-transformation",
          "topicId": "eng-topic-sentence-transformation-rules",
          "titleEn": "Structural Sentence Types & Transformation Rules",
          "titleHi": "रचना के आधार पर वाक्य प्रकार एवं रूपांतरण के नियम",
          "readingTimeMinutes": 30,
          "difficulty": "INTERMEDIATE",
          "learningObjectives": [
            "Master core concepts and rules of Chapter 16: Sentence Types and Transformation (Simple, Compound, Complex)",
            "Identify frequent BPSC TRE question patterns and exam traps",
            "Apply systematic steps to solve 5-option English questions accurately"
          ],
          "introductionEn": "Can you rewrite \"Being poor, he is honest\" into a compound sentence? If you said \"He is poor so he is honest\", you just inverted the logic! Master sentence transformation to conquer BPSC sentence improvement.\n\nSentences are structurally classified into: (1) **Simple**: One independent clause with one finite verb; (2) **Compound**: Two or more independent clauses joined by coordinating conjunctions (**FANBOYS**); (3) **Complex**: One independent clause and one or more dependent clauses joined by subordinating conjunctions; (4) **Compound-Complex**: At least two independent clauses and at least one dependent clause.",
          "introductionHi": "",
          "conceptSections": [
            {
              "title": "1. The Four Structural Types of Sentences",
              "contentMarkdownEn": "Observe how clauses combine to determine sentence structure:\n\n* **Simple Sentence**:\n  * Contains **one independent clause** and **one finite verb**.\n  * May contain phrases (participial, prepositional, infinitive), but NEVER a second finite clause.\n  * *Example*: *Inspite of his illness, Suresh attended the interview.* (Phrase + Independent Clause).\n\n* **Compound Sentence**:\n  * Contains **two or more independent clauses** of equal grammatical rank.\n  * Connected by coordinating conjunctions (**FANBOYS**: For, And, Nor, But, Or, Yet, So) or semicolon (;).\n  * *Example*: *Suresh was ill, yet he attended the interview.*\n\n* **Complex Sentence**:\n  * Contains **one principal (independent) clause** + **at least one subordinate (dependent) clause**.\n  * Connected by subordinating conjunctions (*although, because, since, if, unless, while, that, which*).\n  * *Example*: *Although Suresh was ill, he attended the interview.*"
            },
            {
              "title": "2. High-Yield Transformation Formulas for BPSC",
              "contentMarkdownEn": "Commit these four standard transformation patterns to memory:\n\n1. **Too...To $\\leftrightarrow$ So...That...Cannot/Could not**:\n   * *Simple*: *He is too weak to walk.*\n   * *Complex*: *He is ==so weak that he cannot walk==.*\n   * *Rule*: Present tense $\\rightarrow$ *cannot*; Past tense $\\rightarrow$ *could not*.\n\n2. **In spite of / Despite $\\leftrightarrow$ Although / Though $\\leftrightarrow$ But / Yet**:\n   * *Simple*: *Despite working hard, he failed the test.*\n   * *Complex*: *Although he worked hard, he failed the test.*\n   * *Compound*: *He worked hard, but he failed the test.*\n\n3. **As soon as $\\leftrightarrow$ No sooner...than**:\n   * *Affirmative*: *As soon as the bell rang, the students ran out.*\n   * *Negative (Inversion)*: *==No sooner did the bell ring than== the students ran out.*\n\n4. **Participle $\\leftrightarrow$ And / When**:\n   * *Simple*: *Seeing the police, the thief fled.*\n   * *Compound*: *The thief saw the police and he fled.*\n   * *Complex*: *When the thief saw the police, he fled.*"
            }
          ],
          "importantDefinitions": [
            {
              "term": "Simple Sentence",
              "definitionEn": "A sentence consisting of only one independent clause with a single subject and predicate.",
              "definitionHi": "सरल वाक्य / साधारण वाक्य"
            },
            {
              "term": "Compound Sentence",
              "definitionEn": "A sentence containing two or more independent clauses joined by a coordinating conjunction or semicolon.",
              "definitionHi": "संयुक्त वाक्य"
            }
          ],
          "rulesAndFormulas": [
            {
              "title": "When converting \"too...to\" to \"so...that\", use \"cannot\" for present tense and \"could not\" for past tense.",
              "formulaOrRule": "Subject + is/am/are + too + Adj + to + V1 $\\rightarrow$ Subject + is/am/are + so + Adj + that + Subject + cannot + V1",
              "explanationEn": "When converting \"too...to\" to \"so...that\", use \"cannot\" for present tense and \"could not\" for past tense."
            },
            {
              "title": "\"No sooner\" must always take inversion (Did + S + V1 or Had + S + V3) and must be paired with \"THAN\", never \"when\" or \"then\".",
              "formulaOrRule": "No sooner + did/had + Subject + Verb + THAN + Clause 2",
              "explanationEn": "\"No sooner\" must always take inversion (Did + S + V1 or Had + S + V3) and must be paired with \"THAN\", never \"when\" or \"then\"."
            }
          ],
          "examples": [
            {
              "title": "Too...to converts to so...that...cannot.",
              "problemEn": "Transform into Complex: \"The news is too good to be true.\"",
              "stepByStepSolutionEn": "\"too good to be true\" transforms into \"The news is so good that it cannot be true.\" Uses present tense \"cannot\" matching \"is\".",
              "shortcutTrick": "Too...to converts to so...that...cannot."
            },
            {
              "title": "Simple prepositional addition transforms into correlative compound conjunction.",
              "problemEn": "Transform into Compound: \"Besides being a poet, he was a philosopher.\"",
              "stepByStepSolutionEn": "\"Besides + V-ing\" transforms into cumulative coordinating conjunction \"not only...but also\": \"He was not only a poet but also a philosopher.\"",
              "shortcutTrick": "Simple prepositional addition transforms into correlative compound conjunction."
            },
            {
              "title": "Adverb clause of purpose simplifies into an infinitive of purpose.",
              "problemEn": "Transform into Simple: \"He worked hard so that he might win the scholarship.\"",
              "stepByStepSolutionEn": "The purpose clause \"so that he might win...\" reduces to an infinitive phrase: \"He worked hard to win the scholarship.\"",
              "shortcutTrick": "Adverb clause of purpose simplifies into an infinitive of purpose."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Choose the correct transformation of the sentence into complex: \"The old man was too weak to walk without support.\"",
              "stepByStepSolutionEn": "The original sentence is in the past tense (\"was\"). In the \"so...that\" structure, the past tense auxiliary \"could not\" must be used. Option A incorrectly uses \"cannot\", and Option C creates a compound sentence (joined by \"and\"), not complex. Thus, Option B is correct.",
              "shortcutTrick": "Option A is the classic present vs past modal trap; Option C is structurally compound, violating the question prompt."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Transform the following affirmative sentence into negative: \"As soon as the teacher entered, the students stood up.\"",
              "stepByStepSolutionEn": "\"No sooner\" must be followed by \"than\" (not \"when\" as in A). \"Hardly\" takes \"when\", not \"than\" (ruling out C). Hence, Option B is the sole correct transformation.",
              "shortcutTrick": "Option A incorrectly uses \"when\" with \"No sooner\"; Option C incorrectly pairs \"Hardly\" with \"than\"."
            }
          ],
          "practicalApplications": [
            "Crucial for scoring maximum qualifying marks in BPSC TRE Part 1 Language section."
          ],
          "commonMistakesAndMisconceptions": [
            {
              "mistakeEn": "The tea was so hot that I cannot drink it.",
              "whyWrongEn": "The principal clause is in past tense (\"was\"), so the subordinate clause must use \"could not\", not present tense \"cannot\".",
              "correctWayEn": "The tea was so hot that I could not drink it."
            },
            {
              "mistakeEn": "Despite of his hard work, he did not clear the cutoff.",
              "whyWrongEn": "\"Despite\" never takes the preposition \"of\". Only \"In spite\" takes \"of\".",
              "correctWayEn": "Despite his hard work, he did not clear the cutoff. / In spite of his hard work, he did not clear the cutoff."
            }
          ],
          "bpscTrePerspective": {
            "frequentlyTestedAspects": [
              "Transforming Simple to Complex and Affirmative to Negative using inversion."
            ],
            "commonDistractorTraps": [
              "Option D: More than one of the above when only one transformation obeys tense concord."
            ],
            "relatedPyqReferences": [
              "BPSC TRE 1.0 (Q.3)",
              "BPSC TRE 3.0 (Q.5)"
            ]
          },
          "quickRevisionPoints": [
            "Simple sentences contain exactly one finite verb.",
            "Compound sentences connect two independent clauses with FANBOYS.",
            "Complex sentences connect an independent clause with a subordinate clause.",
            "Too...to becomes so...that...cannot (present) or could not (past).",
            "No sooner takes inversion and pairs strictly with THAN."
          ],
          "knowledgeCheck": [
            {
              "id": "kc-eng-st-1",
              "questionEn": "\"In spite of his poverty, he is honest.\" Which type of sentence is this?",
              "questionHi": "\"In spite of his poverty, he is honest.\" यह किस प्रकार का वाक्य है?",
              "options": [
                {
                  "id": "A",
                  "textEn": "Simple Sentence",
                  "isCorrect": true
                },
                {
                  "id": "B",
                  "textEn": "Compound Sentence",
                  "isCorrect": false
                },
                {
                  "id": "C",
                  "textEn": "Complex Sentence",
                  "isCorrect": false
                },
                {
                  "id": "D",
                  "textEn": "Compound-Complex Sentence",
                  "isCorrect": false
                }
              ],
              "explanationEn": "The sentence contains only one finite verb (\"is\") and one independent clause (\"he is honest\"). \"In spite of his poverty\" is a prepositional phrase, not a clause. Hence, it is a Simple Sentence.",
              "conceptTested": "Sentence type identification"
            }
          ]
        },
        "practiceQuestions": [
          {
            "id": "pq-eng-st-1",
            "topicId": "eng-topic-sentence-transformation-rules",
            "chapterId": "eng-ch-16-sentence-types",
            "subjectKey": "ENGLISH_LANGUAGE",
            "sectionKey": "PART_1_LANGUAGE",
            "questionTextEn": "Which of the following is the correct negative transformation of: \"He was too late to catch the train\"?",
            "questionTextHi": "दिए गए वाक्य का सही नकारात्मक रूपांतरण कौन-सा है?",
            "options": [
              {
                "id": "o1",
                "identifier": "A",
                "textEn": "He was so late that he cannot catch the train.",
                "isCorrect": false
              },
              {
                "id": "o2",
                "identifier": "B",
                "textEn": "He was so late that he could not catch the train.",
                "isCorrect": true
              },
              {
                "id": "o3",
                "identifier": "C",
                "textEn": "He was not late enough to catch the train.",
                "isCorrect": false
              },
              {
                "id": "o4",
                "identifier": "D",
                "textEn": "More than one of the above",
                "isCorrect": false
              },
              {
                "id": "o5",
                "identifier": "E",
                "textEn": "None of the above",
                "isCorrect": false
              }
            ],
            "correctOptionIdentifier": "B",
            "difficulty": "MODERATE",
            "practiceMode": "BPSC_EXAM",
            "explanationEn": "The original sentence uses past tense (\"was\"). In the \"so...that...not\" negative transformation, past tense requires \"could not\". Therefore, \"He was so late that he could not catch the train\" is correct.",
            "isAuthenticPyq": true,
            "treVersion": "TRE_1_0",
            "examDate": "2023-08-25",
            "shift": "Shift 1",
            "officialQuestionNumber": 3,
            "verificationStatus": "OFFICIALLY_VERIFIED"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-ch-17-conditionals",
    "subjectKey": "ENGLISH_LANGUAGE",
    "chapterNumber": 17,
    "slug": "conditional-sentences-and-inversion",
    "titleEn": "Chapter 17: Conditional Sentences & Inversion (Zero, 1st, 2nd, 3rd Conditionals)",
    "titleHi": "अध्याय 17: शर्तबोधक वाक्य (Conditionals) एवं इनवर्जन",
    "descriptionEn": "Master the four core conditional structures (Zero, First, Second, Third), mixed conditionals, conjunctions of condition (unless, provided that), and formal inversion (Had I known, Were I you).",
    "descriptionHi": "शर्तबोधक वाक्यों के चार प्रमुख प्रकार (Zero, 1st, 2nd, 3rd), \"unless\", \"in case\", \"as long as\" का प्रयोग एवं \"Had I...\", \"Were I...\" से बनने वाले इनवर्जन नियम।",
    "totalPracticeQuestions": 25,
    "totalEstimatedMinutes": 60,
    "topics": [
      {
        "id": "eng-topic-conditional-tense-formulas",
        "chapterId": "eng-ch-17-conditionals",
        "topicNumber": 1,
        "slug": "conditional-formulas-and-inversion",
        "titleEn": "The 4 Golden Conditional Formulas & Inversion Syntax",
        "titleHi": "चार प्रमुख शर्तबोधक सूत्र एवं इनवर्जन संरचना",
        "descriptionEn": "Rigid tense pairing in conditional clauses, avoiding \"will/would\" in the if-clause, and converting hypothetical conditions into inverted structures.",
        "descriptionHi": "If-clause में will/would के प्रयोग से बचना, Had + V3 के साथ would have + V3 का अनिवार्य संबंध, एवं Unless के साथ Not के निषेध का नियम।",
        "estimatedMinutes": 30,
        "isPrescribedInOfficialSyllabus": true,
        "pyqCount": 7,
        "hasAppearedInPyq": true,
        "examImportance": "CRITICAL_HIGH_YIELD",
        "pyqAppearanceSummary": "One of the top 3 most frequently tested grammar topics in BPSC TRE 1.0, 2.0 & 3.0",
        "isStoryFormat": false,
        "tutorial": {
          "id": "tut-conditional-formulas-and-inversion",
          "topicId": "eng-topic-conditional-tense-formulas",
          "titleEn": "The 4 Golden Conditional Formulas & Inversion Syntax",
          "titleHi": "चार प्रमुख शर्तबोधक सूत्र एवं इनवर्जन संरचना",
          "readingTimeMinutes": 30,
          "difficulty": "INTERMEDIATE",
          "learningObjectives": [
            "Master core concepts and rules of Chapter 17: Conditional Sentences & Inversion (Zero, 1st, 2nd, 3rd Conditionals)",
            "Identify frequent BPSC TRE question patterns and exam traps",
            "Apply systematic steps to solve 5-option English questions accurately"
          ],
          "introductionEn": "Did you know that \"If you will study, you will pass\" is grammatically INCORRECT in standard English? In English syntax, you NEVER use \"will\" in an if-clause! Discover the iron laws of conditional sentences that BPSC tests repeatedly.\n\nA conditional sentence has two parts: the **Conditional Clause (If-Clause)** and the **Main Clause (Result Clause)**. The tense of the main clause is strictly determined by the tense of the if-clause. The four fundamental types are Zero (universal truths), First (real future possibility), Second (unreal/hypothetical present), and Third (unfulfilled past regret).",
          "introductionHi": "",
          "conceptSections": [
            {
              "title": "1. The Four Standard Conditional Types",
              "contentMarkdownEn": "Master this rigid tense matching table:\n\n| Type | If-Clause Tense | Main Clause Tense | Meaning & Reality |\n| :--- | :--- | :--- | :--- |\n| **Zero Conditional** | Simple Present (V1/V5) | Simple Present (V1/V5) | Scientific fact / General truth |\n| **1st Conditional** | Simple Present (V1/V5) | Will / Shall / Can + V1 | Real future condition and outcome |\n| **2nd Conditional** | Simple Past (V2 / Were) | Would / Could / Might + V1 | Hypothetical / Unreal present situation |\n| **3rd Conditional** | Past Perfect (Had + V3) | Would have / Could have + V3 | Unfulfilled past action / Regret |\n\n**Crucial Exam Nuances**:\n* **Zero**: *If you heat water to 100°C, it boils.* (Scientific certainty; never use *will*).\n* **1st**: *If it rains, we will cancel the field visit.* (NOT *If it will rain*).\n* **2nd (Subjunctive \"were\")**: For hypothetical states of being, use **\"were\"** for ALL subjects, even singular (*If I were a king*, *If she were here*).\n* **3rd**: *If they had warned us, we would have taken precautions.* (Action completed in past; outcome cannot be altered)."
            },
            {
              "title": "2. Inversion in Conditionals & The \"Unless\" Trap",
              "contentMarkdownEn": "Two critical advanced structures tested heavily in BPSC Class 11-12:\n\n### A. Inversion (Omitting \"If\")\nIn formal written English, \"If\" can be dropped by inverting the auxiliary verb to the front:\n* **Type 1 Inversion**: *Should you need any assistance, please call me.* (= *If you need...*)\n* **Type 2 Inversion**: *Were I the principal, I would reform the syllabus.* (= *If I were...*)\n* **Type 3 Inversion**: *==Had he worked hard, he would have qualified the exam.==* (= *If he had worked hard...*)\n\n### B. The \"Unless\" Negative Trap\n* **Unless = If...not**. It already contains an inherent negative.\n* **Golden Rule**: **NEVER use \"not\" in a clause governed by \"unless\"**!\n* *Incorrect*: *Unless you do not work hard, you will fail.*\n* *Correct*: *Unless you work hard, you will fail.* (= *If you do not work hard, you will fail.*)"
            }
          ],
          "importantDefinitions": [
            {
              "term": "Third Conditional",
              "definitionEn": "A conditional sentence expressing a hypothetical situation in the past that did not occur, along with its hypothetical past outcome.",
              "definitionHi": "तृतीय शर्तबोधक (अतीत की अपूर्ण शर्त)"
            },
            {
              "term": "Subjunctive \"Were\"",
              "definitionEn": "The use of the past subjunctive form \"were\" for all subjects in unreal or contrary-to-fact conditional clauses.",
              "definitionHi": "काल्पनिक एकवचन में Were का प्रयोग"
            }
          ],
          "rulesAndFormulas": [
            {
              "title": "Never use future auxiliaries (will/shall/would) in the conditional clause (If, As soon as, When, Unless, In case).",
              "formulaOrRule": "If + [Subject + V1/V5] (Present), [Subject + will + V1] (Future)",
              "explanationEn": "Never use future auxiliaries (will/shall/would) in the conditional clause (If, As soon as, When, Unless, In case)."
            },
            {
              "title": "If the conditional clause uses \"Had + V3\", the main clause must use \"Would have + V3\" (or could/might have + V3).",
              "formulaOrRule": "If + S + had + V3 $\\leftrightarrow$ S + would have + V3",
              "explanationEn": "If the conditional clause uses \"Had + V3\", the main clause must use \"Would have + V3\" (or could/might have + V3)."
            }
          ],
          "examples": [
            {
              "title": "Real future condition: Present in condition, Future in result.",
              "problemEn": "If the government issues the notification today, the candidates will begin applying tomorrow.",
              "stepByStepSolutionEn": "Type 1 Conditional: If-clause is in Simple Present (\"issues\"), and the main clause is in Simple Future (\"will begin\"). No \"will\" in the if-clause.",
              "shortcutTrick": "Real future condition: Present in condition, Future in result."
            },
            {
              "title": "Unreal present conditions take \"were\" for all grammatical persons.",
              "problemEn": "If I were the Education Minister of Bihar, I would build digital libraries in every panchayat.",
              "stepByStepSolutionEn": "Type 2 Unreal Conditional: The speaker is not the minister, so subjunctive \"were\" is used with singular \"I\", followed by \"would + V1\" (\"would build\").",
              "shortcutTrick": "Unreal present conditions take \"were\" for all grammatical persons."
            },
            {
              "title": "Inverted Type 3 condition: Had + S + V3 paired with would have + V3.",
              "problemEn": "Had the train arrived on schedule, we would have attended the opening ceremony.",
              "stepByStepSolutionEn": "Type 3 Inverted Conditional: \"Had the train arrived\" = \"If the train had arrived\". Main clause correctly uses \"would have attended\" (would have + V3).",
              "shortcutTrick": "Inverted Type 3 condition: Had + S + V3 paired with would have + V3."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Fill in the blank with the grammatically correct option: \"If he had informed the authorities in time, the disaster ________.\"",
              "stepByStepSolutionEn": "The if-clause is in the Past Perfect (\"had informed\"). Therefore, the main clause requires \"would have + V3\" (or passive \"would have been + V3\"). \"would have been averted\" correctly completes the Third Conditional.",
              "shortcutTrick": "Option A uses \"would be\" (Type 2, tense clash); Option C uses \"will have\" which cannot pair with past perfect."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Identify the error in the sentence: \"Had I known (A) / about the revision (B) / I would inform you earlier (C) / No error (D)\"",
              "stepByStepSolutionEn": "The inverted condition \"Had I known\" is Type 3 Past Perfect. The main clause must therefore be \"I would have informed you\" instead of \"I would inform you\". Part (C) is erroneous.",
              "shortcutTrick": "Part A is correct inversion. Part B is idiomatically sound."
            }
          ],
          "practicalApplications": [
            "Crucial for scoring maximum qualifying marks in BPSC TRE Part 1 Language section."
          ],
          "commonMistakesAndMisconceptions": [
            {
              "mistakeEn": "If you will come to Patna, I will host you.",
              "whyWrongEn": "Standard English syntax prohibits \"will\" in the conditional if-clause. The simple present \"come\" must express the condition.",
              "correctWayEn": "If you come to Patna, I will host you."
            },
            {
              "mistakeEn": "Unless you do not submit your certificate, your application will be rejected.",
              "whyWrongEn": "\"Unless\" already means \"if not\". Adding \"do not\" creates an erroneous double negative.",
              "correctWayEn": "Unless you submit your certificate, your application will be rejected. / If you do not submit your certificate, your application will be rejected."
            }
          ],
          "bpscTrePerspective": {
            "frequentlyTestedAspects": [
              "Fill in the blanks with correct modal auxiliary and error detection in if-clauses."
            ],
            "commonDistractorTraps": [
              "Options having \"would have\" in both clauses (e.g. *If he would have done* - completely ungrammatical)."
            ],
            "relatedPyqReferences": [
              "BPSC TRE 1.0 (Q.5)",
              "BPSC TRE 2.0 (Q.6)",
              "BPSC TRE 3.0 (Q.7)"
            ]
          },
          "quickRevisionPoints": [
            "Zero Conditional: Present + Present (Facts).",
            "First Conditional: Present + Future (Real possibilities).",
            "Second Conditional: Past/Were + Would + V1 (Hypothetical present).",
            "Third Conditional: Had + V3 + Would have + V3 (Past unfulfilled).",
            "Inverted Third Conditional: Had + Subject + V3, Subject + would have + V3.",
            "Never use \"not\" with \"unless\"."
          ],
          "knowledgeCheck": [
            {
              "id": "kc-eng-cnd-1",
              "questionEn": "\"If she ________ harder, she would have cleared the BPSC cutoff.\"",
              "questionHi": "\"If she ________ harder, she would have cleared the BPSC cutoff.\"",
              "options": [
                {
                  "id": "A",
                  "textEn": "worked",
                  "isCorrect": false
                },
                {
                  "id": "B",
                  "textEn": "had worked",
                  "isCorrect": true
                },
                {
                  "id": "C",
                  "textEn": "has worked",
                  "isCorrect": false
                },
                {
                  "id": "D",
                  "textEn": "would work",
                  "isCorrect": false
                }
              ],
              "explanationEn": "The result clause contains \"would have cleared\" (Third Conditional). Therefore, the if-clause requires the Past Perfect tense: \"had worked\".",
              "conceptTested": "Third conditional tense matching"
            }
          ]
        },
        "practiceQuestions": [
          {
            "id": "pq-eng-cnd-1",
            "topicId": "eng-topic-conditional-tense-formulas",
            "chapterId": "eng-ch-17-conditionals",
            "subjectKey": "ENGLISH_LANGUAGE",
            "sectionKey": "PART_1_LANGUAGE",
            "questionTextEn": "Complete the sentence with the appropriate option: \"Had I known about the changes in the examination syllabus, I ________ my preparation strategy.\"",
            "questionTextHi": "उचित विकल्प से वाक्य पूरा करें:",
            "options": [
              {
                "id": "o1",
                "identifier": "A",
                "textEn": "would change",
                "isCorrect": false
              },
              {
                "id": "o2",
                "identifier": "B",
                "textEn": "would have changed",
                "isCorrect": true
              },
              {
                "id": "o3",
                "identifier": "C",
                "textEn": "will have changed",
                "isCorrect": false
              },
              {
                "id": "o4",
                "identifier": "D",
                "textEn": "More than one of the above",
                "isCorrect": false
              },
              {
                "id": "o5",
                "identifier": "E",
                "textEn": "None of the above",
                "isCorrect": false
              }
            ],
            "correctOptionIdentifier": "B",
            "difficulty": "MODERATE",
            "practiceMode": "BPSC_EXAM",
            "explanationEn": "The clause \"Had I known\" represents an inverted Third Conditional (Past Perfect). The main clause must therefore take \"would have + V3\" (\"would have changed\"). Hence, Option B is correct.",
            "isAuthenticPyq": true,
            "treVersion": "TRE_2_0",
            "examDate": "2023-12-15",
            "shift": "Shift 1",
            "officialQuestionNumber": 6,
            "verificationStatus": "OFFICIALLY_VERIFIED"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-ch-18-non-finites",
    "subjectKey": "ENGLISH_LANGUAGE",
    "chapterNumber": 18,
    "slug": "non-finite-verbs-infinitives-gerunds-participles",
    "titleEn": "Chapter 18: Non-Finite Verbs (Infinitives, Gerunds & Participles)",
    "titleHi": "अध्याय 18: अपरिमित क्रियाएं (Infinitive, Gerund एवं Participle)",
    "descriptionEn": "Master the three non-finite verb forms: Infinitives (to+V1 and bare infinitives), Gerunds (verbal nouns ending in -ing), and Participles (present, past, perfect). Conquer dangling participles and fixed gerundial prepositions.",
    "descriptionHi": "Infinitive (To+V1 एवं Bare Infinitive), Gerund (क्रियावाचक संज्ञा) तथा Participle (कृदंत) के नियम, \"look forward to + V-ing\", एवं Dangling Participle की अशुद्धियों का निवारण।",
    "totalPracticeQuestions": 25,
    "totalEstimatedMinutes": 60,
    "topics": [
      {
        "id": "eng-topic-infinitives-gerunds-participles",
        "chapterId": "eng-ch-18-non-finites",
        "topicNumber": 1,
        "slug": "gerund-vs-infinitive-and-participle-rules",
        "titleEn": "Gerunds, Infinitives & Participles in Exam Syntax",
        "titleHi": "परीक्षा में Gerund, Infinitive एवं Participle के नियम",
        "descriptionEn": "Rules governing verbs followed exclusively by Gerunds vs Infinitives, the possessive case before gerunds, bare infinitive triggers, and resolving dangling modifiers.",
        "descriptionHi": "Gerund से पूर्व Possessive Adjective का अनिवार्य प्रयोग, \"Used to + V-ing\" बनाम \"Used to + V1\", एवं Bare Infinitive के नियामक शब्द (make, let, bid, watch).",
        "estimatedMinutes": 30,
        "isPrescribedInOfficialSyllabus": true,
        "pyqCount": 5,
        "hasAppearedInPyq": true,
        "examImportance": "CRITICAL_HIGH_YIELD",
        "pyqAppearanceSummary": "Tested repeatedly in BPSC TRE 1.0, 2.0 & 3.0",
        "isStoryFormat": false,
        "tutorial": {
          "id": "tut-gerund-vs-infinitive-and-participle-rules",
          "topicId": "eng-topic-infinitives-gerunds-participles",
          "titleEn": "Gerunds, Infinitives & Participles in Exam Syntax",
          "titleHi": "परीक्षा में Gerund, Infinitive एवं Participle के नियम",
          "readingTimeMinutes": 30,
          "difficulty": "INTERMEDIATE",
          "learningObjectives": [
            "Master core concepts and rules of Chapter 18: Non-Finite Verbs (Infinitives, Gerunds & Participles)",
            "Identify frequent BPSC TRE question patterns and exam traps",
            "Apply systematic steps to solve 5-option English questions accurately"
          ],
          "introductionEn": "Is it correct to say \"I am looking forward to meet you\" or \"I am looking forward to meeting you\"? Over 80% of candidates choose \"meet\" because of the word \"to\", and lose a crucial mark! Learn why \"meeting\" is correct.\n\nA **Finite Verb** changes its form according to the tense, number, and person of its subject. A **Non-Finite Verb** is unrestricted by tense, number, or person, and does not serve as the primary predicate. The three non-finite categories are:\n1. **Infinitive**: To + V1 (or bare V1 without \"to\").\n2. **Gerund**: V1 + ing functioning as a **Noun**.\n3. **Participle**: V1 + ing (Present), V3 (Past), or Having + V3 (Perfect) functioning as an **Adjective**.",
          "introductionHi": "",
          "conceptSections": [
            {
              "title": "1. The Gerund: Verbal Noun & Possessive Rule",
              "contentMarkdownEn": "A **Gerund** is a verb ending in *-ing* that performs the function of a **Noun** (acting as Subject, Direct Object, or Object of a Preposition).\n\n### Golden Rule 1: Possessive Case Before Gerunds\nA noun or pronoun modifying a gerund MUST be in the **possessive case** (my, his, her, their, your, Mohan's), NOT the objective case (me, him, them, Mohan)!\n* *Incorrect*: *I disliked him coming late to the class.*\n* *Correct*: *==I disliked his coming late to the class.==* (What is disliked? Not \"him\", but his \"coming\"!).\n* *Incorrect*: *She was confident of Ramesh winning the medal.*\n* *Correct*: *==She was confident of Ramesh's winning the medal.==*\n\n### Golden Rule 2: Phrasal Expressions Ending in \"To\" That Require a Gerund (V-ing)\nIn regular infinitives, \"to\" is followed by bare V1 (*want to go*). But when \"to\" is part of a **fixed prepositional idiom**, it MUST be followed by a **Gerund (V1 + ing)**:\n* **Looking forward to** + V-ing (*I look forward to meeting you.*)\n* **With a view to** + V-ing (*He went to Delhi with a view to attending the seminar.*)\n* **Accustomed to / Used to (as adjective)** + V-ing (*She is accustomed to working late.*)\n* **Addicted to / Devoted to / Dedicated to** + V-ing\n* **Object to / Opposed to** + V-ing\n* **Given to / Prone to** + V-ing"
            },
            {
              "title": "2. Bare Infinitives & The Dangling Participle Trap",
              "contentMarkdownEn": "### A. Bare Infinitives (V1 without \"To\")\nDo NOT use \"to\" with the infinitive after:\n1. **Modal Auxiliaries**: can, could, may, might, shall, should, will, would, must.\n2. **Causative and Perceptive Verbs** (in Active Voice): **make, let, bid, see, hear, watch, notice**.\n   * *Incorrect*: *The teacher made him to write the essay again.*\n   * *Correct*: *==The teacher made him write the essay again.==*\n   * *Exception*: When used in **Passive Voice**, \"make\" takes \"to\": *He was made to write the essay again.*\n   * *Note*: \"Let\" NEVER takes \"to\", even in passive!\n3. **Idiomatic Expressions**: **had better, would rather, sooner than** (*You had better leave now*).\n\n### B. Dangling Participle (Unattached Modifier)\nA participial phrase at the start of a sentence MUST logically describe the grammatical subject immediately following the comma!\n* *Incorrect*: *Walking in the morning, a snake bit him.* (Grammatically means the snake was walking!).\n* *Correct*: *While he was walking in the morning, a snake bit him.* OR *Walking in the morning, he was bitten by a snake.*"
            }
          ],
          "importantDefinitions": [
            {
              "term": "Gerund",
              "definitionEn": "A non-finite verb form ending in -ing that functions syntactically as a noun.",
              "definitionHi": "क्रियावाचक संज्ञा (Gerund)"
            },
            {
              "term": "Bare Infinitive",
              "definitionEn": "The base form of a verb (V1) functioning as an infinitive without the particle \"to\".",
              "definitionHi": "बिना \"To\" वाला Infinitive"
            }
          ],
          "rulesAndFormulas": [
            {
              "title": "Use the possessive form (noun's or possessive adjective) before a gerund.",
              "formulaOrRule": "Possessive (my/his/her/their/Mohan's) + Gerund (V1 + ing)",
              "explanationEn": "Use the possessive form (noun's or possessive adjective) before a gerund."
            },
            {
              "title": "Expressions like \"looking forward to\", \"with a view to\", \"accustomed to\", and \"used to\" (when preceded by be-verb) take V-ing, not V1.",
              "formulaOrRule": "Be (is/am/are/was/were) + used to / accustomed to + V1+ing",
              "explanationEn": "Expressions like \"looking forward to\", \"with a view to\", \"accustomed to\", and \"used to\" (when preceded by be-verb) take V-ing, not V1."
            }
          ],
          "examples": [
            {
              "title": "Looking forward to takes V-ing.",
              "problemEn": "We are looking forward to receiving your response regarding the appointment.",
              "stepByStepSolutionEn": "\"Looking forward to\" is a prepositional phrasal verb where \"to\" is a preposition, not an infinitive marker. Prepositions must be followed by nouns or gerunds (\"receiving\").",
              "shortcutTrick": "Looking forward to takes V-ing."
            },
            {
              "title": "Possessive adjective must precede a gerund.",
              "problemEn": "She objected to my attending the meeting without prior authorization.",
              "stepByStepSolutionEn": "\"Attending\" is a gerund functioning as the object of the preposition \"to\". The pronoun modifying it must be possessive (\"my\", not \"me\").",
              "shortcutTrick": "Possessive adjective must precede a gerund."
            },
            {
              "title": "Let + Object + Bare Infinitive (no \"to\").",
              "problemEn": "The officer let the candidates enter the hall after checking their hall tickets.",
              "stepByStepSolutionEn": "\"Let\" is followed by an object (\"the candidates\") and a bare infinitive (\"enter\", without \"to\").",
              "shortcutTrick": "Let + Object + Bare Infinitive (no \"to\")."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Choose the correct option to fill in the blank: \"He visited the education ministry with a view to ________ his grievance.\"",
              "stepByStepSolutionEn": "The idiomatic construction \"with a view to\" requires a gerund (V1 + ing) because \"to\" functions as a preposition indicating purpose. Hence, \"redressing\" is the correct form.",
              "shortcutTrick": "Candidates instinctively select \"redress\" (Option A) assuming standard \"to + V1\" infinitive, falling straight into the BPSC examiner's trap."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Identify the segment with an error: \"I do not appreciate (A) / you talking to the principal (B) / in such a disrespectful tone (C) / No error (D)\"",
              "stepByStepSolutionEn": "In segment (B), \"talking\" is a gerund functioning as the object of appreciate. The pronoun before it must be in the possessive case (\"your talking\", not \"you talking\"). Hence, Part (B) contains the grammatical error.",
              "shortcutTrick": "Part A is correct. Part C contains appropriate prepositional phrasing."
            }
          ],
          "practicalApplications": [
            "Crucial for scoring maximum qualifying marks in BPSC TRE Part 1 Language section."
          ],
          "commonMistakesAndMisconceptions": [
            {
              "mistakeEn": "He came to the library with a view to read previous years' question papers.",
              "whyWrongEn": "\"With a view to\" is a fixed idiomatic phrase where \"to\" is a preposition. It must be followed by a gerund (\"reading\"), not base verb \"read\".",
              "correctWayEn": "He came to the library with a view to reading previous years' question papers."
            },
            {
              "mistakeEn": "Being a rainy day, we decided not to go out for practice.",
              "whyWrongEn": "Without \"It\", the subject of the main clause (\"we\") attaches to the participle \"Being a rainy day\", implying \"we were a rainy day\".",
              "correctWayEn": "It being a rainy day, we decided not to go out for practice. / As it was a rainy day, we decided not to go out for practice."
            }
          ],
          "bpscTrePerspective": {
            "frequentlyTestedAspects": [
              "Error identification in possessives before gerunds and cloze choices after \"looking forward to\"."
            ],
            "commonDistractorTraps": [
              "Using objective pronouns (me, him, them) before gerunds."
            ],
            "relatedPyqReferences": [
              "BPSC TRE 1.0 (Q.4)",
              "BPSC TRE 2.0 (Q.8)",
              "BPSC TRE 3.0 (Q.6)"
            ]
          },
          "quickRevisionPoints": [
            "A gerund functions as a noun; a participle functions as an adjective.",
            "Always use a possessive adjective (my, his, your, their) before a gerund.",
            "\"Looking forward to\", \"with a view to\", and \"accustomed to\" take V-ing.",
            "\"Make\", \"let\", \"bid\", \"see\", \"hear\" take bare infinitive (no \"to\") in active voice.",
            "Dangling participles must be anchored to their rightful logical subjects."
          ],
          "knowledgeCheck": [
            {
              "id": "kc-eng-nf-1",
              "questionEn": "Which sentence is grammatically correct?",
              "questionHi": "कौन-सा वाक्य व्याकरण की दृष्टि से सही है?",
              "options": [
                {
                  "id": "A",
                  "textEn": "I remember him telling me the story.",
                  "isCorrect": false
                },
                {
                  "id": "B",
                  "textEn": "I remember his telling me the story.",
                  "isCorrect": true
                },
                {
                  "id": "C",
                  "textEn": "I remember he telling me the story.",
                  "isCorrect": false
                },
                {
                  "id": "D",
                  "textEn": "I remember himself telling me the story.",
                  "isCorrect": false
                }
              ],
              "explanationEn": "The gerund \"telling\" requires a possessive adjective (\"his\"). Hence, \"his telling\" is correct.",
              "conceptTested": "Possessive case with gerund"
            }
          ]
        },
        "practiceQuestions": [
          {
            "id": "pq-eng-nf-1",
            "topicId": "eng-topic-infinitives-gerunds-participles",
            "chapterId": "eng-ch-18-non-finites",
            "subjectKey": "ENGLISH_LANGUAGE",
            "sectionKey": "PART_1_LANGUAGE",
            "questionTextEn": "Fill in the blank with the appropriate form of the verb: \"The disciplinary committee objected to ________ the official documents without clearance.\"",
            "questionTextHi": "उचित क्रिया रूप से रिक्त स्थान भरें:",
            "options": [
              {
                "id": "o1",
                "identifier": "A",
                "textEn": "him leaking",
                "isCorrect": false
              },
              {
                "id": "o2",
                "identifier": "B",
                "textEn": "his leaking",
                "isCorrect": true
              },
              {
                "id": "o3",
                "identifier": "C",
                "textEn": "he leaking",
                "isCorrect": false
              },
              {
                "id": "o4",
                "identifier": "D",
                "textEn": "More than one of the above",
                "isCorrect": false
              },
              {
                "id": "o5",
                "identifier": "E",
                "textEn": "None of the above",
                "isCorrect": false
              }
            ],
            "correctOptionIdentifier": "B",
            "difficulty": "MODERATE",
            "practiceMode": "BPSC_EXAM",
            "explanationEn": "The word \"leaking\" is a gerund functioning as the object of the preposition \"to\". A noun or pronoun preceding a gerund must be in the possessive case (\"his\"). Therefore, \"his leaking\" is grammatically correct.",
            "isAuthenticPyq": true,
            "treVersion": "TRE_3_0",
            "examDate": "2024-03-15",
            "shift": "Shift 1",
            "officialQuestionNumber": 6,
            "verificationStatus": "OFFICIALLY_VERIFIED"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-ch-19-question-tags",
    "subjectKey": "ENGLISH_LANGUAGE",
    "chapterNumber": 19,
    "slug": "question-tags-and-short-responses",
    "titleEn": "Chapter 19: Question Tags & Short Responses",
    "titleHi": "अध्याय 19: प्रश्न पुछल्ले (Question Tags) एवं संक्षिप्त उत्तर",
    "descriptionEn": "Master the rules of Question Tags: polarity reversal (positive statement $\\rightarrow$ negative tag), selecting the correct auxiliary, semi-negative adverbs (hardly, scarcely, seldom), imperative tags, and special exceptions like \"I am\" and indefinite pronouns.",
    "descriptionHi": "Question Tags के नियम: सकारात्मक वाक्य के साथ नकारात्मक टैग, अर्ध-नकारात्मक शब्दों (hardly, rarely, seldom) के साथ सकारात्मक टैग, \"I am\" का \"aren't I?\", एवं Imperative वाक्यों के टैग।",
    "totalPracticeQuestions": 25,
    "totalEstimatedMinutes": 45,
    "topics": [
      {
        "id": "eng-topic-question-tag-rules",
        "chapterId": "eng-ch-19-question-tags",
        "topicNumber": 1,
        "slug": "polarity-auxiliary-and-irregular-tags",
        "titleEn": "Tag Polarity, Auxiliary Selection & Irregular Tags",
        "titleHi": "टैग ध्रुवीयता, सहायक क्रिया चयन एवं अपवाद",
        "descriptionEn": "Rigid polarity reversal, matching tense and auxiliaries, identifying covert negative words, and special rules for \"Let's\", \"Everybody\", and \"I am\".",
        "descriptionHi": "सकारात्मक और नकारात्मक टैग के नियम, \"Let's\" के साथ \"shall we?\", \"Everybody/Everyone\" के साथ बहुवचन सर्वनाम \"they\" का प्रयोग।",
        "estimatedMinutes": 25,
        "isPrescribedInOfficialSyllabus": true,
        "pyqCount": 4,
        "hasAppearedInPyq": true,
        "examImportance": "HIGH_YIELD",
        "pyqAppearanceSummary": "Appeared in BPSC TRE 1.0, 2.0 and 3.0 Language sections",
        "isStoryFormat": false,
        "tutorial": {
          "id": "tut-polarity-auxiliary-and-irregular-tags",
          "topicId": "eng-topic-question-tag-rules",
          "titleEn": "Tag Polarity, Auxiliary Selection & Irregular Tags",
          "titleHi": "टैग ध्रुवीयता, सहायक क्रिया चयन एवं अपवाद",
          "readingTimeMinutes": 25,
          "difficulty": "INTERMEDIATE",
          "learningObjectives": [
            "Master core concepts and rules of Chapter 19: Question Tags & Short Responses",
            "Identify frequent BPSC TRE question patterns and exam traps",
            "Apply systematic steps to solve 5-option English questions accurately"
          ],
          "introductionEn": "What is the tag for \"I am right\"? If you answered \"amn't I?\", you failed! In English, \"amn't\" does not exist; the correct tag is \"aren't I?\". Uncover the quirky, high-scoring world of question tags!\n\nA **Question Tag** is a mini-question turned onto the end of a declarative or imperative sentence to seek confirmation or agreement. The fundamental rule of tags is **Polarity Inversion**:\n* **Positive Statement $\\rightarrow$ Negative Tag** (*She is a teacher, isn't she?*)\n* **Negative Statement $\\rightarrow$ Positive Tag** (*She is not a teacher, is she?*)\nA question tag consists strictly of an **Auxiliary Verb + Subject Pronoun**.",
          "introductionHi": "",
          "conceptSections": [
            {
              "title": "1. The Golden Rules of Tag Formation",
              "contentMarkdownEn": "Four unbreakable rules determine every tag:\n\n1. **Tense & Auxiliary Concord**:\n   * The tag MUST use the same auxiliary verb as the main statement.\n   * *Statement*: *She has passed.* $\\rightarrow$ *Tag*: *hasn't she?*\n   * If the statement has no auxiliary (Simple Present/Past), use **do / does / did**:\n     * *He plays cricket.* $\\rightarrow$ *doesn't he?*\n     * *They went home.* $\\rightarrow$ *didn't they?*\n\n2. **Pronoun Agreement**:\n   * The subject of a tag is ALWAYS a personal pronoun (*he, she, it, they, we, you, I*). Never repeat a proper noun!\n   * *Patna is historical.* $\\rightarrow$ *isn't it?* (NOT *isn't Patna?*)\n\n3. **Contraction Requirement**:\n   * Negative tags must ALWAYS be contracted (*isn't, aren't, didn't, won't, can't*). Never write *is not he?* in a tag!"
            },
            {
              "title": "2. High-Frequency BPSC Irregular Tags & Traps",
              "contentMarkdownEn": "Commit these four special patterns to memory:\n\n### A. The \"I am\" Exception\n* Positive: *I am late, ==aren't I?==* (\"amn't I\" does not exist in standard English).\n* Negative: *I am not late, ==am I?==* (Regular positive form retains \"am\").\n\n### B. Semi-Negative Words (Inherent Negatives)\nStatements containing words like **hardly, scarcely, seldom, rarely, barely, neither, nor, few, little** are semantically NEGATIVE. Therefore, their question tag must be **POSITIVE**!\n* *Incorrect*: *He seldom visits his village, doesn't he?*\n* *Correct*: *==He seldom visits his village, does he?==*\n* *Barking dogs seldom bite, ==do they?==*\n\n### C. Indefinite Pronouns (Everybody, Somebody, Nobody)\n* Words referring to persons (**everybody, everyone, somebody, someone, nobody, no one, anybody**) take a singular verb in the statement, but their tag takes the PLURAL PRONOUN **THEY**!\n* Consequently, the auxiliary in the tag must also become plural!\n* *Statement*: *Everyone was present.* $\\rightarrow$ *Tag*: *==weren't they?==* (NOT *wasn't he/wasn't they*).\n* *Statement*: *Nobody called.* $\\rightarrow$ *Tag*: *==did they?==* (Nobody is negative $\\rightarrow$ positive tag).\n\n### D. Imperatives & \"Let's\"\n* **Let's / Let us** (Proposal/Suggestion) $\\rightarrow$ Tag is always **shall we?** (*Let's start the revision, shall we?*)\n* **Let him / Let them** (Permission) $\\rightarrow$ Tag is **will you?** (*Let him speak, will you?*)\n* **Imperative Orders / Requests** $\\rightarrow$ Tag is **will you?** or **won't you?** (*Close the door, will you?*)\n* **Negative Imperative** (Don't...) $\\rightarrow$ Tag is **will you?** (*Don't make noise, will you?*)"
            }
          ],
          "importantDefinitions": [
            {
              "term": "Question Tag",
              "definitionEn": "A short question added to the end of a declarative sentence, asking the listener to confirm that the statement is true.",
              "definitionHi": "प्रश्न पुछल्ला (Question Tag)"
            },
            {
              "term": "Semi-Negative Adverbs",
              "definitionEn": "Adverbs conveying an almost negative meaning (e.g., seldom, hardly, barely, scarcely) that render a clause syntactically negative.",
              "definitionHi": "अर्ध-नकारात्मक क्रियाविशेषण"
            }
          ],
          "rulesAndFormulas": [
            {
              "title": "If the statement is affirmative, the tag must be negative; if the statement is negative, the tag must be affirmative.",
              "formulaOrRule": "[+] Statement $\\rightarrow$ [-] Tag (Aux + n't + Pronoun?) | [-] Statement $\\rightarrow$ [+] Tag (Aux + Pronoun?)",
              "explanationEn": "If the statement is affirmative, the tag must be negative; if the statement is negative, the tag must be affirmative."
            },
            {
              "title": "Indefinite pronouns representing persons (everyone, someone, nobody) require the plural pronoun \"they\" in the tag, forcing plural auxiliary concord.",
              "formulaOrRule": "Everyone + Singular Verb $\\rightarrow$ Tag: Plural Auxiliary + they?",
              "explanationEn": "Indefinite pronouns representing persons (everyone, someone, nobody) require the plural pronoun \"they\" in the tag, forcing plural auxiliary concord."
            }
          ],
          "examples": [
            {
              "title": "Positive \"I am\" takes \"aren't I?\".",
              "problemEn": "I am eligible for the post of Computer Science teacher, aren't I?",
              "stepByStepSolutionEn": "The statement is affirmative with subject \"I\" and verb \"am\". The standard contracted negative tag for \"I am\" is \"aren't I?\".",
              "shortcutTrick": "Positive \"I am\" takes \"aren't I?\"."
            },
            {
              "title": "Hardly/Scarcely/Seldom demand a positive tag.",
              "problemEn": "He hardly ever misses a lecture, does he?",
              "stepByStepSolutionEn": "\"Hardly\" makes the sentence negative. Simple Present verb \"misses\" requires auxiliary \"does\". Polarity inversion demands a positive tag: \"does he?\".",
              "shortcutTrick": "Hardly/Scarcely/Seldom demand a positive tag."
            },
            {
              "title": "Let's always takes \"shall we?\".",
              "problemEn": "Let's conclude today's revision session, shall we?",
              "stepByStepSolutionEn": "Sentences beginning with \"Let's\" (let us) express a suggestion/proposal and take the fixed tag \"shall we?\".",
              "shortcutTrick": "Let's always takes \"shall we?\"."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Add the appropriate question tag: \"None of the candidates had submitted the required certificates, ________?\"",
              "stepByStepSolutionEn": "\"None\" is a negative word, making the statement negative; therefore, the tag must be affirmative. The auxiliary is \"had\" and the plural referent is \"they\". Thus, \"had they?\" is the correct tag.",
              "shortcutTrick": "Option A is negative (polarity clash); Option C changes auxiliary from past perfect \"had\" to simple past \"did\"."
            },
            {
              "title": "BPSC Exam-Style Example",
              "problemEn": "Choose the correct question tag: \"Let us help the flood-affected families in North Bihar, ________?\"",
              "stepByStepSolutionEn": "Sentences beginning with \"Let us\" or \"Let's\" expressing a collective proposal or suggestion always take the tag \"shall we?\".",
              "shortcutTrick": "Option A (\"will you\") is used for second-person orders or requests, not for collective \"Let us\"."
            }
          ],
          "practicalApplications": [
            "Crucial for scoring maximum qualifying marks in BPSC TRE Part 1 Language section."
          ],
          "commonMistakesAndMisconceptions": [
            {
              "mistakeEn": "Everyone attended the orientation program, didn't he?",
              "whyWrongEn": "Indefinite pronouns referring to persons must be replaced by the plural pronoun \"they\" in the question tag, not singular \"he\".",
              "correctWayEn": "Everyone attended the orientation program, didn't they?"
            },
            {
              "mistakeEn": "She seldom loses her patience, doesn't she?",
              "whyWrongEn": "\"Seldom\" is semantically negative. Adding a negative tag (\"doesn't she\") creates an ungrammatical double negative polarity.",
              "correctWayEn": "She seldom loses her patience, does she?"
            }
          ],
          "bpscTrePerspective": {
            "frequentlyTestedAspects": [
              "Choosing the correct question tag from 5 options with distractor options having polarity or pronoun errors."
            ],
            "commonDistractorTraps": [
              "Option D: More than one of the above."
            ],
            "relatedPyqReferences": [
              "BPSC TRE 1.0 (Q.6)",
              "BPSC TRE 3.0 (Q.4)"
            ]
          },
          "quickRevisionPoints": [
            "Positive statement gets negative tag; negative statement gets positive tag.",
            "Negative tags must always be contracted (isn't, aren't, didn't).",
            "\"I am\" takes \"aren't I?\". \"I am not\" takes \"am I?\".",
            "Hardly, scarcely, seldom, rarely take positive tags.",
            "Everybody/Nobody takes plural pronoun \"they\" in the tag.",
            "Everything/Nothing takes singular pronoun \"it\" in the tag.",
            "Let's takes \"shall we?\"."
          ],
          "knowledgeCheck": [
            {
              "id": "kc-eng-qt-1",
              "questionEn": "\"Nothing was stolen from the treasury, ________?\"",
              "questionHi": "\"Nothing was stolen from the treasury, ________?\"",
              "options": [
                {
                  "id": "A",
                  "textEn": "wasn't it",
                  "isCorrect": false
                },
                {
                  "id": "B",
                  "textEn": "was it",
                  "isCorrect": true
                },
                {
                  "id": "C",
                  "textEn": "were they",
                  "isCorrect": false
                },
                {
                  "id": "D",
                  "textEn": "weren't they",
                  "isCorrect": false
                }
              ],
              "explanationEn": "\"Nothing\" is negative and refers to a thing (pronoun \"it\"). Polarity must be affirmative, so the tag is \"was it?\".",
              "conceptTested": "Negative indefinite pronoun tag"
            }
          ]
        },
        "practiceQuestions": [
          {
            "id": "pq-eng-qt-1",
            "topicId": "eng-topic-question-tag-rules",
            "chapterId": "eng-ch-19-question-tags",
            "subjectKey": "ENGLISH_LANGUAGE",
            "sectionKey": "PART_1_LANGUAGE",
            "questionTextEn": "Select the correct question tag: \"The candidates have hardly begun their revision, ________?\"",
            "questionTextHi": "सही क्वेश्चन टैग का चयन करें:",
            "options": [
              {
                "id": "o1",
                "identifier": "A",
                "textEn": "haven't they",
                "isCorrect": false
              },
              {
                "id": "o2",
                "identifier": "B",
                "textEn": "have they",
                "isCorrect": true
              },
              {
                "id": "o3",
                "identifier": "C",
                "textEn": "did they",
                "isCorrect": false
              },
              {
                "id": "o4",
                "identifier": "D",
                "textEn": "More than one of the above",
                "isCorrect": false
              },
              {
                "id": "o5",
                "identifier": "E",
                "textEn": "None of the above",
                "isCorrect": false
              }
            ],
            "correctOptionIdentifier": "B",
            "difficulty": "MODERATE",
            "practiceMode": "BPSC_EXAM",
            "explanationEn": "The word \"hardly\" conveys an inherently negative meaning, making the statement syntactically negative. Therefore, the tag must be affirmative. The auxiliary is \"have\" and the subject pronoun is \"they\". Thus, \"have they?\" is correct.",
            "isAuthenticPyq": true,
            "treVersion": "TRE_1_0",
            "examDate": "2023-08-25",
            "shift": "Shift 1",
            "officialQuestionNumber": 6,
            "verificationStatus": "OFFICIALLY_VERIFIED"
          }
        ]
      }
    ]
  }
];
