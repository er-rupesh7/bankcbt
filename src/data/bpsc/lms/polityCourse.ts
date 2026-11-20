// Comprehensive BPSC TRE 4.0 Indian Polity & Constitution Course Data
// In-depth textbook curriculum covering Constitutional Framework, Preamble, Fundamental Rights, Writs, DPSP, Union Parliament, Judiciary, and Panchayati Raj (Bihar PR Act 2006)
// Fully equipped with authentic BPSC TRE 1.0, 2.0, 3.0 PYQs, yellow highlighters (==text==), mnemonics, callout boxes, and knowledge checks

import { LMSSubject } from '@/types/bpscLms';

export const BPSC_POLITY_SUBJECTS: LMSSubject[] = [
  {
    key: 'INDIAN_POLITY',
    sectionKey: 'PART_2_GENERAL_STUDIES',
    displayNameEn: 'Indian Polity & Constitution',
    displayNameHi: 'भारतीय राजव्यवस्था एवं संविधान',
    iconName: 'ShieldCheck',
    descriptionEn: 'Complete constitutional guide: Making of Constitution, Preamble, Fundamental Rights (Articles 12-35), 5 Writs, DPSP (Article 40 Panchayats, Article 44 UCC), President & Parliament, Emergency Provisions, and Bihar Panchayati Raj Act 2006 (50% women reservation).',
    descriptionHi: 'संविधान निर्माण, प्रस्तावना, मूल अधिकार (अनुच्छेद 12-35), 5 रिट, नीति निर्देशक तत्व (अनुच्छेद 40 पंचायत, अनुच्छेद 44 समान नागरिक संहिता), संसद एवं राष्ट्रपति, आपात उपबंध, तथा बिहार पंचायती राज अधिनियम 2006 (महिलाओं को 50% आरक्षण)।',
    chapters: [
      // ----------------------------------------------------
      // CHAPTER 1: CONSTITUTIONAL FRAMEWORK & PREAMBLE
      // ----------------------------------------------------
      {
        id: 'pol-ch-framework',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 1,
        slug: 'constitutional-framework-preamble',
        titleEn: 'Constitutional Framework & Preamble',
        titleHi: 'संविधान का निर्माण, स्रोत एवं प्रस्तावना',
        descriptionEn: 'Cabinet Mission Plan, Constituent Assembly sessions, Dr. Sachchidananda Sinha & Dr. Rajendra Prasad, Drafting Committee, borrowed features, and Preamble philosophy.',
        descriptionHi: 'कैबिनेट मिशन योजना, संविधान सभा की बैठकें, डॉ. सच्चिदानंद सिन्हा एवं डॉ. राजेंद्र प्रसाद का योगदान, प्रारूप समिति, विभिन्न देशों से लिए गए स्रोत, तथा प्रस्तावना।',
        totalPracticeQuestions: 30,
        totalEstimatedMinutes: 75,
        topics: [
          {
            id: 'pol-topic-making-preamble',
            chapterId: 'pol-ch-framework',
            topicNumber: 1,
            slug: 'making-of-constitution-and-preamble',
            titleEn: 'Making of Constitution & The Preamble',
            titleHi: 'संविधान का निर्माण एवं प्रस्तावना',
            descriptionEn: 'Detailed chronicle of Constituent Assembly (1946-1949), Drafting Committee under Dr. Ambedkar, sources of Indian Constitution, and Preamble keywords.',
            descriptionHi: 'संविधान सभा का गठन (1946-1949), डॉ. अंबेडकर की अध्यक्षता में प्रारूप समिति, प्रमुख स्रोत तथा प्रस्तावना के मुख्य शब्द (संप्रभु, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक गणराज्य)।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 9,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.41), TRE 2.0 (Q.39) & TRE 3.0 (Q.42)',
            isStoryFormat: true,
            storyEra: '1946 – 1950 CE',
            tutorial: {
              id: 'tut-making-preamble',
              topicId: 'pol-topic-making-preamble',
              titleEn: 'Making of Constitution & The Preamble',
              titleHi: 'संविधान का निर्माण एवं प्रस्तावना',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the timeline of the Constituent Assembly from 9 December 1946 to 26 November 1949.',
                'Memorize the key personalities from Bihar: Dr. Sachchidananda Sinha (Interim President) and Dr. Rajendra Prasad (Permanent President).',
                'Trace the borrowed features: UK (Parliamentary system), USA (Fundamental Rights, Judicial Review), Ireland (DPSP), USSR (Fundamental Duties).',
                'Analyze the Preamble: 42nd Constitutional Amendment 1976 additions (Socialist, Secular, Integrity) and landmark Supreme Court rulings (Kesavananda Bharati case 1973).'
              ],
              introductionEn: '==When the British Cabinet Mission arrived in India in 1946, it laid the foundation for the Constituent Assembly.==\n\nOn 9 December 1946, the oldest member, ==Dr. Sachchidananda Sinha== (a proud son of Bihar), was elected as the Interim President. Two days later, on 11 December 1946, another titan from Bihar, ==Dr. Rajendra Prasad==, was unanimously elected the Permanent President. On 13 December 1946, Jawaharlal Nehru introduced the historic "Objective Resolution", which later became the Preamble of the Indian Constitution.',
              introductionHi: '1946 में कैबिनेट मिशन योजना के तहत संविधान सभा का गठन हुआ। 9 दिसंबर 1946 को संविधान सभा की पहली बैठक में बिहार के वरिष्ठतम नेता डॉ. सच्चिदानंद सिन्हा को अंतरिम अध्यक्ष चुना गया। इसके दो दिन बाद, 11 दिसंबर 1946 को बिहार के ही डॉ. राजेंद्र प्रसाद को स्थायी अध्यक्ष निर्वाचित किया गया।',
              conceptSections: [
                {
                  title: '1. Chronology of Constituent Assembly & Bihar Personalities',
                  contentMarkdownEn: 'The Constituent Assembly took exactly ==2 years, 11 months, and 18 days== to complete the world\'s lengthiest written Constitution.\n\n* **9 December 1946:** First meeting held in New Delhi. ==Dr. Sachchidananda Sinha== (from Bihar) appointed Interim President following French practice of appointing the oldest member.\n* **11 December 1946:** ==Dr. Rajendra Prasad== (born in Ziradei, Siwan, Bihar) elected Permanent President. H.C. Mukherjee elected Vice-President, and Sir B.N. Rau appointed Constitutional Advisor.\n* **13 December 1946:** Jawaharlal Nehru moved the ==Objective Resolution==, defining core principles.\n* **29 August 1947:** ==Drafting Committee== appointed with ==Dr. B.R. Ambedkar== as Chairman (total 7 members).\n* **26 November 1949:** Constitution adopted and enacted by the Assembly (observed as ==Constitution Day / Samvidhan Divas==).\n* **26 January 1950:** Constitution came into full force (chosen to honor the 1930 ==Purna Swaraj Declaration== at Lahore Congress session).'
                },
                {
                  title: '2. Major Sources Borrowed from Other Constitutions',
                  contentMarkdownEn: 'The framers of the Constitution incorporated the best features from world democracies:',
                  tableData: {
                    headers: ['Source Country / Act', 'Key Features Borrowed', 'Exam Frequency'],
                    rows: [
                      ['Government of India Act 1935', 'Federal Scheme, Office of Governor, Judiciary, Emergency Provisions', 'Very High (About 60% base)'],
                      ['United Kingdom (Britain)', 'Parliamentary government, Rule of Law, Single Citizenship, Cabinet system, Prerogative Writs', 'Critical High Yield'],
                      ['United States of America', '==Fundamental Rights (Bill of Rights)==, Judicial Review, Independence of Judiciary, Impeachment of President', 'Critical High Yield'],
                      ['Ireland (Irish Constitution)', '==Directive Principles of State Policy (DPSP)==, Method of Presidential election, Nomination of 12 members to Rajya Sabha', 'Most Frequent BPSC PYQ'],
                      ['USSR (Soviet Union)', '==Fundamental Duties (Article 51A)==, Ideals of Justice in Preamble', 'High Yield'],
                      ['Australia', '==Concurrent List==, Joint Sitting of Parliament (Article 108)', 'High Yield'],
                      ['South Africa', 'Procedure for Amendment of Constitution (Article 368)', 'Moderate']
                    ]
                  },
                  calloutBox: {
                    type: 'EXAM_TRAP',
                    title: 'BPSC Exam Trap: Interim vs Permanent President from Bihar',
                    textEn: 'Questions often ask: "Who was the President of the Constituent Assembly on 9 December 1946?" Answer: Dr. Sachchidananda Sinha (Interim). If asked: "Who was elected President on 11 December 1946?" Answer: Dr. Rajendra Prasad (Permanent). Both were illustrious leaders from Bihar! Do not confuse their dates and designations.',
                    textHi: '9 दिसंबर 1946 को अंतरिम अध्यक्ष डॉ. सच्चिदानंद सिन्हा थे, जबकि 11 दिसंबर 1946 को स्थायी अध्यक्ष डॉ. राजेंद्र प्रसाद निर्वाचित हुए। दोनों ही बिहार के महान विभूति थे।'
                  }
                },
                {
                  title: '3. The Preamble: Key Terms & Constitutional Status',
                  contentMarkdownEn: 'The Preamble is the identity card and preface of our Constitution:\n\n* **Keywords in Sequence:** ==SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC, REPUBLIC==.\n* **The 42nd Amendment Act 1976:** Added three new words: ==SOCIALIST==, ==SECULAR==, and ==INTEGRITY==. (The Preamble has been amended only ONCE in history!).\n* **Four Objectives:** Justice (Social, Economic, Political), Liberty (Thought, Expression, Belief, Faith, Worship), Equality (Status and Opportunity), Fraternity (Dignity and Unity).\n* **==Kesavananda Bharati Case (1973)==:** Supreme Court ruled that ==Preamble IS an integral part of the Constitution== and can be amended under Article 368 without altering the Basic Structure!'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Sovereign (संप्रभु)',
                  definitionEn: 'India is neither a dependency nor a dominion of any other nation; it is entirely free to conduct its own internal and external affairs.',
                  definitionHi: 'भारत किसी अन्य देश पर निर्भर नहीं है और अपने आंतरिक एवं बाह्य मामलों के संचालन में पूरी तरह स्वतंत्र है।'
                },
                {
                  term: 'Objective Resolution (उद्देश्य प्रस्ताव)',
                  definitionEn: 'Historic resolution moved by Jawaharlal Nehru on 13 December 1946 laying down constitutional philosophy, later adopted as the Preamble.',
                  definitionHi: '13 दिसंबर 1946 को पं. नेहरू द्वारा प्रस्तुत ऐतिहासिक प्रस्ताव जो भारतीय संविधान की प्रस्तावना का आधार बना।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Preamble Keyword Sequence',
                  formulaOrRule: 'S-S-S-D-R : Sovereign -> Socialist -> Secular -> Democratic -> Republic',
                  explanationEn: 'Remember Triple-S D-R to avoid ordering errors in BPSC examinations.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question Analysis',
                  problemEn: 'Which three words were added to the Preamble of the Indian Constitution by the 42nd Constitutional Amendment Act, 1976?',
                  stepByStepSolutionEn: '1. The 42nd Amendment 1976 amended the Preamble for the only time in Indian history.\n2. It added: Socialist, Secular, and Integrity.\n3. Sovereign, Democratic, and Republic were already present in the 1950 text.',
                  shortcutTrick: 'S-S-I: Socialist, Secular, Integrity!'
                }
              ],
              practicalApplications: ['Directly yields 1 to 2 questions in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking the Preamble has been amended multiple times.',
                  whyWrongEn: 'The Preamble has been amended exactly ONCE by the 42nd Constitutional Amendment Act in 1976.',
                  correctWayEn: 'Always answer "Only once (42nd Amendment, 1976)".'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Interim President (Dr. Sachchidananda Sinha) vs Permanent President (Dr. Rajendra Prasad)',
                  '42nd Amendment additions: Socialist, Secular, Integrity (TRE 1.0 Q.41, TRE 2.0 Q.39)',
                  'Drafting Committee Chairman: Dr. B.R. Ambedkar (7 members)',
                  'Borrowed features: DPSP from Ireland, Fundamental Rights from USA'
                ],
                commonDistractorTraps: [
                  'Confusing 26 November 1949 (Adoption) with 26 January 1950 (Commencement)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (Q.41)',
                  'BPSC TRE 2.0 (Q.39)',
                  'BPSC TRE 3.0 (Q.42)'
                ]
              },
              quickRevisionPoints: [
                'Constituent Assembly first met on 9 December 1946 (Dr. Sachchidananda Sinha, Interim President).',
                'Dr. Rajendra Prasad elected Permanent President on 11 December 1946.',
                'Drafting Committee formed on 29 August 1947 with Dr. B.R. Ambedkar as Chairman (7 members).',
                'Total time taken: 2 years, 11 months, 18 days.',
                'Adopted on 26 November 1949; came into full effect on 26 January 1950.',
                '42nd Amendment (1976) added Socialist, Secular, Integrity.',
                'Preamble declared an integral part of Constitution in Kesavananda Bharati case (1973).'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-preamble-1',
                  questionEn: 'Which three words were added to the Preamble of the Constitution of India by the 42nd Constitutional Amendment Act, 1976?',
                  questionHi: '42वें संविधान संशोधन अधिनियम, 1976 द्वारा भारतीय संविधान की प्रस्तावना में कौन से तीन शब्द जोड़े गए थे?',
                  options: [
                    { id: 'A', textEn: 'Socialist, Secular, Integrity', isCorrect: true },
                    { id: 'B', textEn: 'Sovereign, Democratic, Republic', isCorrect: false },
                    { id: 'C', textEn: 'Justice, Liberty, Equality', isCorrect: false },
                    { id: 'D', textEn: 'Federal, Parliamentary, Unity', isCorrect: false }
                  ],
                  explanationEn: 'The 42nd Amendment Act 1976 added three specific words: Socialist, Secular, and Integrity to the Preamble.',
                  conceptTested: '42nd Amendment Preamble additions'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-preamble-1',
                topicId: 'pol-topic-making-preamble',
                chapterId: 'pol-ch-framework',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'In which landmark case did the Supreme Court of India hold that the Preamble is an integral part of the Constitution and can be amended under Article 368 without altering the basic structure?',
                questionTextHi: 'किस ऐतिहासिक मामले में भारत के सर्वोच्च न्यायालय ने यह व्यवस्था दी कि प्रस्तावना संविधान का अभिन्न अंग है और मूल ढांचे को बदले बिना अनुच्छेद 368 के तहत इसमें संशोधन किया जा सकता है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Berubari Union case (1960)', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Golaknath case (1967)', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Kesavananda Bharati case (1973)', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'MODERATE',
                practiceMode: 'PYQ',
                explanationEn: 'In Kesavananda Bharati v. State of Kerala (1973), the historic 13-judge bench overruled the Berubari case and held that the Preamble is an integral part of the Constitution.',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 39,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 2: FUNDAMENTAL RIGHTS, WRITS & DPSP
      // ----------------------------------------------------
      {
        id: 'pol-ch-rights-dpsp',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 2,
        slug: 'fundamental-rights-writs-dpsp',
        titleEn: 'Fundamental Rights, Writs & Directive Principles (DPSP)',
        titleHi: 'मूल अधिकार, संवैधानिक उपचार (रिट) एवं नीति निर्देशक तत्व',
        descriptionEn: 'Articles 12-35 (Part III), 5 Constitutional Writs under Article 32 & 226, DPSP Articles 36-51 (Part IV), Article 40 (Panchayats), and Fundamental Duties (Article 51A).',
        descriptionHi: 'मूल अधिकार (अनुच्छेद 12-35), अनुच्छेद 32 के तहत 5 रिटें, नीति निर्देशक तत्व (अनुच्छेद 36-51), अनुच्छेद 40 (ग्राम पंचायत), एवं मूल कर्तव्य (अनुच्छेद 51A)।',
        totalPracticeQuestions: 40,
        totalEstimatedMinutes: 90,
        topics: [
          {
            id: 'pol-topic-fr-writs',
            chapterId: 'pol-ch-rights-dpsp',
            topicNumber: 1,
            slug: 'fundamental-rights-article-32-writs',
            titleEn: 'Fundamental Rights & Article 32 Writs',
            titleHi: 'मूल अधिकार एवं अनुच्छेद 32 के तहत संवैधानिक उपचार',
            descriptionEn: 'The Magna Carta of India (Part III, Articles 12-35): Equality, Freedom, Protection against Exploitation, Religious Freedom, and 5 Prerogative Writs.',
            descriptionHi: 'भारत का मैग्नाकार्टा (भाग 3, अनुच्छेद 12-35): समानता, स्वतंत्रता, शोषण के विरुद्ध अधिकार, धार्मिक स्वतंत्रता, तथा 5 प्रकार की रिटें।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 14,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.36, Q.38), TRE 2.0 (Q.40) & TRE 3.0 (Q.41, Q.43)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-fr-writs',
              topicId: 'pol-topic-fr-writs',
              titleEn: 'Fundamental Rights & Article 32 Writs',
              titleHi: 'मूल अधिकार एवं अनुच्छेद 32 के तहत संवैधानिक उपचार',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Understand the 6 Fundamental Rights guaranteed under Articles 14 to 32.',
                'Explain the removal of Right to Property from Part III by the 44th Constitutional Amendment Act 1978 (now a legal right under Article 300A).',
                'Master all 5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto.',
                'Distinguish between Article 32 (Supreme Court) and Article 226 (High Court) writ jurisdictions.'
              ],
              introductionEn: '==Part III of the Indian Constitution (Articles 12 to 35) is rightfully described as the "Magna Carta of India".==\n\nBorrowed from the American Bill of Rights, it guarantees justiciable fundamental rights to every individual. Dr. B.R. Ambedkar termed Article 32—the Right to Constitutional Remedies—as the very "Heart and Soul of the Constitution", because without enforcement mechanisms, rights are mere ink on paper.',
              introductionHi: 'भारतीय संविधान के भाग III (अनुच्छेद 12 से 35) को भारत का "मैग्नाकार्टा" कहा जाता है। डॉ. बी.आर. अंबेडकर ने अनुच्छेद 32 को "संविधान का हृदय और आत्मा" कहा था।',
              conceptSections: [
                {
                  title: '1. The Six Fundamental Rights (Classification)',
                  contentMarkdownEn: 'The ==44th Amendment Act, 1978== omitted the Right to Property (Article 31) from Fundamental Rights and made it a legal right under ==Article 300A in Part XII==.\n\nToday, there are ==six Fundamental Rights==:\n\n1. **Right to Equality (Articles 14–18):** Art 14 (Equality before law), Art 15 (Prohibition of discrimination), Art 16 (Equal opportunity in public employment), Art 17 (==Abolition of Untouchability==), Art 18 (Abolition of titles).\n2. **Right to Freedom (Articles 19–22):** Art 19 (6 democratic freedoms), Art 20 (Protection against retroactive criminal law/double jeopardy), Art 21 (==Life and Personal Liberty==), Art 21A (==Right to Education 6-14 years==, 86th Amendment 2002), Art 22 (Protection against arrest).\n3. **Right against Exploitation (Articles 23–24):** Art 23 (Human trafficking/begar ban), Art 24 (Child labor ban in factories under 14 years).\n4. **Right to Freedom of Religion (Articles 25–28)**.\n5. **Cultural and Educational Rights (Articles 29–30)**.\n6. **Right to Constitutional Remedies (Article 32):** Moving the Supreme Court for enforcement.'
                },
                {
                  title: '2. The Five Types of Prerogative Writs',
                  contentMarkdownEn: 'Under ==Article 32== (Supreme Court) and ==Article 226== (High Courts), five types of writs can be issued:',
                  tableData: {
                    headers: ['Writ Name', 'Literal Meaning', 'Against Whom Issued', 'Primary Objective'],
                    rows: [
                      ['1. Habeas Corpus', '"To have the body of"', 'Both public authorities and private individuals', 'Set free a person detained illegally or without legal justification.'],
                      ['2. Mandamus', '"We Command"', 'Public official, public body, tribunal, or government', 'Compel performance of a mandatory official public duty.'],
                      ['3. Prohibition', '"To forbid"', 'Lower courts and quasi-judicial tribunals', 'Prevent lower courts from exceeding jurisdiction (issued during trial).'],
                      ['4. Certiorari', '"To be certified / informed"', 'Lower courts, tribunals, and authorities', 'Quash the order already passed by an inferior court in excess of jurisdiction.'],
                      ['5. Quo-Warranto', '"By what authority"', 'A person occupying a public office', 'Inquire into the legality of a person\'s claim to a public office.']
                    ]
                  },
                  calloutBox: {
                    type: 'IMPORTANT',
                    title: 'Articles 20 and 21 Cannot Be Suspended in Emergency',
                    textEn: 'By the 44th Constitutional Amendment Act 1978, Article 20 (Protection in respect of conviction) and Article 21 (Right to Life and Personal Liberty) CANNOT be suspended even during a National Emergency under Article 352!',
                    textHi: '44वें संशोधन द्वारा यह अनिवार्य किया गया कि अनुच्छेद 352 के तहत राष्ट्रीय आपातकाल में भी अनुच्छेद 20 और 21 निलंबित नहीं हो सकते।'
                  }
                }
              ],
              importantDefinitions: [
                {
                  term: 'Habeas Corpus (बंदी प्रत्यक्षीकरण)',
                  definitionEn: 'A court order commanding that a detained person be produced before the court to determine whether detention is lawful.',
                  definitionHi: 'अवैध रूप से बंदी बनाए गए व्यक्ति को न्यायालय के समक्ष प्रस्तुत करने का आदेश।'
                },
                {
                  term: 'Article 226 vs Article 32',
                  definitionEn: 'Article 32 is a Fundamental Right limited to Part III; Article 226 is wider in subject-matter because High Courts can issue writs for any other legal purpose.',
                  definitionHi: 'उच्च न्यायालय अनुच्छेद 226 के तहत मूल अधिकारों के साथ-साथ अन्य विधिक अधिकारों के लिए भी रिट जारी कर सकता है।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Citizen-Only Fundamental Rights',
                  formulaOrRule: 'Articles 15, 16, 19, 29, 30',
                  explanationEn: 'These 5 Fundamental Rights belong exclusively to Indian citizens; foreigners cannot claim them.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question Analysis',
                  problemEn: 'Under which Article was Right to Education made a Fundamental Right?',
                  stepByStepSolutionEn: '1. The 86th Amendment Act 2002 inserted Article 21A into Part III.\n2. Mandates free and compulsory education for all children between 6 and 14 years.\n3. Therefore, correct answer is Article 21A.',
                  shortcutTrick: '21 is Life, 21A is Education for Life!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Right to Property is still a Fundamental Right.',
                  whyWrongEn: 'It was removed from Part III by the 44th Amendment in 1978 and placed in Article 300A as a legal right.',
                  correctWayEn: 'Remember that Right to Property is a legal/constitutional right, NOT a Fundamental Right.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Article 21A Right to Education (86th Amendment 2002)',
                  'Article 17 Abolition of Untouchability',
                  '5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto',
                  'Articles 20 and 21 remain alive during National Emergency'
                ],
                commonDistractorTraps: [
                  'Confusing Article 32 (Supreme Court) with Article 226 (High Court)'
                ],
                relatedPyqReferences: [
                  'BPSC TRE 1.0 (Q.36)',
                  'BPSC TRE 2.0 (Q.40)',
                  'BPSC TRE 3.0 (Q.41)'
                ]
              },
              quickRevisionPoints: [
                'Part III (Articles 12-35) is the Magna Carta of India.',
                'Right to Property deleted by 44th Amendment 1978; now under Article 300A.',
                'Article 17: Abolition of Untouchability.',
                'Article 21A: Right to Education (6-14 years), added by 86th Amendment 2002.',
                'Articles 15, 16, 19, 29, 30 are available ONLY to Indian citizens.',
                'Dr. Ambedkar called Article 32 the "Heart and Soul" of the Constitution.',
                'Articles 20 and 21 cannot be suspended during National Emergency.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-fr-1',
                  questionEn: 'Which writ literally translates to "We Command" and is issued to compel a public official to perform a statutory duty?',
                  questionHi: 'किस रिट का शाब्दिक अर्थ "हम आदेश देते हैं" है और यह किसी लोक अधिकारी को अपने वैधानिक कर्तव्य का पालन करने के लिए जारी की जाती है?',
                  options: [
                    { id: 'A', textEn: 'Habeas Corpus', isCorrect: false },
                    { id: 'B', textEn: 'Mandamus', isCorrect: true },
                    { id: 'C', textEn: 'Certiorari', isCorrect: false },
                    { id: 'D', textEn: 'Quo-Warranto', isCorrect: false }
                  ],
                  explanationEn: 'Mandamus literally means "We Command". It is an order directed to any public authority or official to perform a duty imposed by law.',
                  conceptTested: 'Writ of Mandamus definition'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-fr-1',
                topicId: 'pol-topic-fr-writs',
                chapterId: 'pol-ch-rights-dpsp',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Under which Article of the Constitution of India is the Right to Education (free and compulsory education for all children between the ages of 6 and 14 years) enshrined as a Fundamental Right?',
                questionTextHi: 'भारतीय संविधान के किस अनुच्छेद के तहत 6 से 14 वर्ष की आयु के सभी बच्चों के लिए मुफ्त और अनिवार्य शिक्षा को मौलिक अधिकार के रूप में स्थापित किया गया है?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Article 21A', isCorrect: true },
                  { id: 'o2', identifier: 'B', textEn: 'Article 45', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Article 51A(k)', isCorrect: false },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'A',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'Article 21A was inserted by the 86th Constitutional Amendment Act 2002, making elementary education a Fundamental Right.',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-25',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 36,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          },

          // Topic 2.2: DPSP & Fundamental Duties
          {
            id: 'pol-topic-dpsp-fd',
            chapterId: 'pol-ch-rights-dpsp',
            topicNumber: 2,
            slug: 'dpsp-article-40-and-fundamental-duties',
            titleEn: 'Directive Principles (DPSP) & Fundamental Duties',
            titleHi: 'राज्य के नीति निर्देशक तत्व एवं मूल कर्तव्य',
            descriptionEn: 'Part IV (Articles 36-51): Gandhian, Socialistic, and Liberal-Intellectual principles. Article 40 (Village Panchayats), Article 44 (UCC), and Part IVA (Article 51A Fundamental Duties).',
            descriptionHi: 'भाग IV (अनुच्छेद 36-51): गांधीवादी, समाजवादी एवं उदार-बौद्धिक सिद्धांत। अनुच्छेद 40 (ग्राम पंचायत), अनुच्छेद 44 (समान नागरिक संहिता), तथा भाग IVA (अनुच्छेद 51A मूल कर्तव्य)।',
            estimatedMinutes: 35,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 11,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.39), TRE 2.0 (Q.42) & TRE 3.0 (Q.44)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-dpsp-fd',
              topicId: 'pol-topic-dpsp-fd',
              titleEn: 'Directive Principles (DPSP) & Fundamental Duties',
              titleHi: 'राज्य के नीति निर्देशक तत्व एवं मूल कर्तव्य',
              readingTimeMinutes: 20,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Classify DPSP into Socialistic, Gandhian, and Liberal-Intellectual principles.',
                'Memorize critical DPSP Articles: Article 39A (Free legal aid), Article 40 (Panchayats), Article 44 (Uniform Civil Code), Article 45 (Early childhood care), Article 50 (Separation of judiciary).',
                'Trace the origin of Fundamental Duties: Swaran Singh Committee recommendations, 42nd Amendment 1976 (10 duties), and 86th Amendment 2002 (11th duty).'
              ],
              introductionEn: '==While Fundamental Rights establish political democracy, Directive Principles of State Policy (Part IV, Articles 36–51) aim to establish economic and social democracy.==\n\nBorrowed from the Irish Constitution, Dr. B.R. Ambedkar termed DPSP the "Novel Features" of the Indian Constitution. Though non-justiciable in court (Article 37), they are fundamental in the governance of the country.',
              introductionHi: 'नीति निर्देशक तत्व (भाग IV, अनुच्छेद 36-51) कल्याणकारी राज्य की स्थापना का आधार हैं। आयरलैंड से लिए गए इन तत्वों को डॉ. अंबेडकर ने संविधान की अनूठी विशेषता कहा था।',
              conceptSections: [
                {
                  title: '1. Classification of DPSP (Socialistic, Gandhian & Liberal)',
                  contentMarkdownEn: '* **Gandhian Principles:**\n  * **==Article 40==:** ==Organization of Village Panchayats== as units of self-government (The foundation of 73rd Amendment!).\n  * **Article 43:** Cottage industries promotion.\n  * **Article 47:** Prohibition of intoxicating drinks and drugs injurious to health (Basis of Bihar Prohibition Law!).\n  * **Article 48:** Prohibition of cow slaughter.\n* **Socialistic Principles:**\n  * **Article 39A:** Equal justice and free legal aid to the poor (42nd Amendment 1976).\n  * **Article 41:** Right to work, education, and public assistance in old age/sickness.\n  * **Article 42:** Maternity relief.\n* **Liberal-Intellectual Principles:**\n  * **==Article 44==:** ==Uniform Civil Code (UCC)== for all citizens throughout India.\n  * **==Article 50==:** ==Separation of Judiciary from Executive== in public services.\n  * **Article 51:** Promotion of international peace and security.'
                },
                {
                  title: '2. Fundamental Duties (Part IVA, Article 51A)',
                  contentMarkdownEn: 'The original Constitution did not contain Fundamental Duties!\n\n* **Swaran Singh Committee (1976):** Recommended incorporating Fundamental Duties.\n* **==42nd Constitutional Amendment Act, 1976==:** Inserted ==Part IVA== and a single ==Article 51A== with **10 Fundamental Duties** (borrowed from **USSR**).\n* **==86th Constitutional Amendment Act, 2002==:** Added the **11th Fundamental Duty** [Article 51A(k)]: Duty of parent/guardian to provide education to their child aged 6 to 14 years.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Article 37 Non-Justiciability',
                  definitionEn: 'Directs that DPSP cannot be enforced by any court, yet the State has a duty to apply these principles in making laws.',
                  definitionHi: 'नीति निर्देशक तत्व न्यायालय द्वारा अप्रवर्तनीय हैं, लेकिन शासन के लिए मूलभूत हैं।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'DPSP High-Yield Numbers',
                  formulaOrRule: 'Art 40 = Panchayats | Art 44 = UCC | Art 50 = Judiciary Separation',
                  explanationEn: '40 is Panchayat, 44 is Uniform (equal digits 4 and 4), 50 is Fifty-Fifty separation.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Article 40',
                  problemEn: 'Which Article directs the state to organize Village Panchayats?',
                  stepByStepSolutionEn: '1. Article 40 is the Gandhian directive for village panchayats.\n2. Led to the Balwant Rai Mehta Committee and 73rd Constitutional Amendment Act.',
                  shortcutTrick: '40 = Gram Panchayat!'
                }
              ],
              practicalApplications: ['Essential knowledge for BPSC General Studies paper.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Believing Fundamental Duties were part of the 1950 original constitution.',
                  whyWrongEn: 'They were added in 1976 by the 42nd Amendment on Swaran Singh Committee recommendation.',
                  correctWayEn: 'Always recall that Fundamental Duties were added in 1976.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Article 40: Village Panchayats',
                  'Article 44: Uniform Civil Code',
                  '11th Fundamental Duty added by 86th Amendment 2002'
                ],
                commonDistractorTraps: ['Confusing DPSP (Ireland) with Fundamental Duties (USSR)'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.39)', 'BPSC TRE 2.0 (Q.42)']
              },
              quickRevisionPoints: [
                'DPSP borrowed from Ireland; Part IV (Articles 36-51).',
                'Article 37 explicitly declares DPSP non-justiciable.',
                'Article 40: Organization of Village Panchayats.',
                'Article 44: Uniform Civil Code (UCC).',
                'Article 50: Separation of Judiciary from Executive.',
                'Fundamental Duties added by 42nd Amendment 1976 (Article 51A, USSR model).',
                '11th duty added by 86th Amendment 2002.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-dpsp-1',
                  questionEn: 'Which Article of the Indian Constitution directs the State to organize Village Panchayats as units of self-government?',
                  questionHi: 'भारतीय संविधान का कौन सा अनुच्छेद राज्य को स्वशासन की इकाइयों के रूप में ग्राम पंचायतों को संगठित करने का निर्देश देता है?',
                  options: [
                    { id: 'A', textEn: 'Article 38', isCorrect: false },
                    { id: 'B', textEn: 'Article 40', isCorrect: true },
                    { id: 'C', textEn: 'Article 44', isCorrect: false },
                    { id: 'D', textEn: 'Article 50', isCorrect: false }
                  ],
                  explanationEn: 'Article 40 embodies the Gandhian principle directing the State to take steps to organize village panchayats.',
                  conceptTested: 'Article 40 Panchayats'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-dpsp-1',
                topicId: 'pol-topic-dpsp-fd',
                chapterId: 'pol-ch-rights-dpsp',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'The 11th Fundamental Duty, which mandates parents or guardians to provide opportunities for education to their child between the ages of 6 and 14 years, was added by which Constitutional Amendment Act?',
                questionTextHi: '11वां मूल कर्तव्य, जो माता-पिता या संरक्षक को 6 से 14 वर्ष की आयु के अपने बच्चे को शिक्षा के अवसर प्रदान करने का निर्देश देता है, किस संविधान संशोधन अधिनियम द्वारा जोड़ा गया था?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '42nd Constitutional Amendment Act, 1976', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '44th Constitutional Amendment Act, 1978', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '86th Constitutional Amendment Act, 2002', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'MODERATE',
                practiceMode: 'PYQ',
                explanationEn: 'The 86th Amendment Act 2002 added the 11th Fundamental Duty under Article 51A(k), simultaneously with Article 21A (Fundamental Right) and amending Article 45 (DPSP).',
                isAuthenticPyq: true,
                treVersion: 'TRE_2_0',
                examDate: '2023-12-15',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 42,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 3: UNION GOVERNMENT, PARLIAMENT & EMERGENCY
      // ----------------------------------------------------
      {
        id: 'pol-ch-union-parliament',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 3,
        slug: 'union-government-parliament-emergency',
        titleEn: 'Union Government, Parliament & Emergency Provisions',
        titleHi: 'संघीय कार्यपालिका, संसद एवं आपातकालीन उपबंध',
        descriptionEn: 'The President (Articles 52-62, Impeachment Art 61), Prime Minister & Council of Ministers (Art 74-75), Lok Sabha, Rajya Sabha, Money Bill (Art 110), and Emergency (Art 352, 356, 360).',
        descriptionHi: 'राष्ट्रपति (अनुच्छेद 52-62, महाभियोग अनुच्छेद 61), प्रधानमंत्री एवं मंत्रिपरिषद (अनुच्छेद 74-75), लोकसभा, राज्यसभा, धन विधेयक (अनुच्छेद 110), तथा आपात उपबंध (अनुच्छेद 352, 356, 360)।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'pol-topic-union-exec-parliament',
            chapterId: 'pol-ch-union-parliament',
            topicNumber: 1,
            slug: 'president-parliament-and-emergency-powers',
            titleEn: 'President, Parliament of India & Emergency Provisions',
            titleHi: 'राष्ट्रपति, भारतीय संसद एवं आपातकालीन शक्तियां',
            descriptionEn: 'Electoral college of President, ordinance making power (Art 123), Money Bill passing procedure, Joint Sitting (Art 108), and three types of National/State Emergencies.',
            descriptionHi: 'राष्ट्रपति का निर्वाचक मंडल, अध्यादेश शक्ति (अनुच्छेद 123), धन विधेयक प्रक्रिया (अनुच्छेद 110), संयुक्त बैठक (अनुच्छेद 108), तथा तीन प्रकार के आपातकाल।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 12,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.40), TRE 2.0 (Q.41) & TRE 3.0 (Q.43)',
            isStoryFormat: false,
            tutorial: {
              id: 'tut-union-parliament',
              topicId: 'pol-topic-union-exec-parliament',
              titleEn: 'President, Parliament of India & Emergency Provisions',
              titleHi: 'राष्ट्रपति, भारतीय संसद एवं आपातकालीन शक्तियां',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Identify the composition of the Presidential Electoral College (Article 54) and the impeachment process (Article 61).',
                'Explain the law-making machinery: Ordinary Bills vs Money Bills (Article 110).',
                'Understand the role of the Speaker of Lok Sabha in deciding Money Bills and presiding over Joint Sittings (Article 108).',
                'Distinguish between National Emergency (Article 352), President\'s Rule (Article 356), and Financial Emergency (Article 360).'
              ],
              introductionEn: '==The Constitution establishes a parliamentary form of government modeled after the Westminster system.==\n\nThe President is the de jure (nominal) head of state, while the Prime Minister heading the Council of Ministers is the de facto (real) executive. The bicameral Parliament consists of the President, Rajya Sabha (Upper House), and Lok Sabha (Lower House).',
              introductionHi: 'भारतीय संविधान ने ब्रिटेन की संसदीय व्यवस्था अपनाई है। राष्ट्रपति राष्ट्र का संवैधानिक प्रमुख होता है, जबकि प्रधानमंत्री के नेतृत्व वाली मंत्रिपरिषद वास्तविक कार्यपालिका होती है।',
              conceptSections: [
                {
                  title: '1. The President of India (Key Articles & Powers)',
                  contentMarkdownEn: '* **Article 54 (Electoral College):** The President is elected by elected members of: (1) Both Houses of Parliament (Lok Sabha & Rajya Sabha), (2) Legislative Assemblies of States, (3) Legislative Assemblies of UTs of Delhi and Puducherry.\n  * ==CRITICAL EXAM TRAP: Nominated members of Parliament and State Assemblies DO NOT vote in Presidential elections!==\n* **Article 61 (Impeachment):** Can be impeached ONLY for "Violation of the Constitution". Resolution requires a 14-day notice signed by at least 1/4th members, and must be passed by a special majority of ==not less than two-thirds of the TOTAL membership== of each House.\n* **Article 123:** ==Power to promulgate Ordinances== during recess of Parliament.'
                },
                {
                  title: '2. Money Bill (Article 110) & Joint Sitting (Article 108)',
                  contentMarkdownEn: '* **Money Bill (Article 110):**\n  * Can be introduced ==ONLY in Lok Sabha== and ==ONLY with prior recommendation of the President==.\n  * The ==Speaker of Lok Sabha== decides definitively whether a bill is a Money Bill or not.\n  * Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations within ==14 days==.\n  * ==No Joint Sitting is possible for a Money Bill or Constitutional Amendment Bill!==\n\n* **Joint Sitting (Article 108):**\n  * Summoned by the **President** in case of deadlock on an Ordinary Bill.\n  * Presided over by the ==Speaker of Lok Sabha== (Chairman of Rajya Sabha NEVER presides!).'
                },
                {
                  title: '3. Emergency Provisions (Part XVIII, Articles 352–360)',
                  contentMarkdownEn: '* **==National Emergency (Article 352)==:** Grounds: War, External Aggression, or ==Armed Rebellion== (44th Amendment 1978 substituted "Armed Rebellion" for "Internal Disturbance").\n* **==President\'s Rule (Article 356)==:** Imposed on failure of constitutional machinery in states.\n* **==Financial Emergency (Article 360)==:** ==HIGH-YIELD FACT: Financial Emergency has NEVER been declared in India so far!==.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Money Bill (Article 110)',
                  definitionEn: 'A bill dealing exclusively with taxation, borrowing, custody of the Consolidated Fund of India, or expenditure.',
                  definitionHi: 'कर लगाने, समाप्त करने या भारत की संचित निधि से धन निकालने संबंधी विधेयक।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: 'Emergency Articles +4 Rule',
                  formulaOrRule: '352 (National) + 4 = 356 (State) + 4 = 360 (Financial)',
                  explanationEn: 'Add 4 to 352 to get 356, and add 4 to 356 to get 360.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question: Presidential Electorate',
                  problemEn: 'Who among the following cannot vote in Presidential elections?',
                  stepByStepSolutionEn: '1. Under Article 54, only elected members vote.\n2. Nominated members of Rajya Sabha (12 members) do NOT vote.\n3. Nominated members participate only in impeachment (Article 61).',
                  shortcutTrick: 'Nominated = No vote in election!'
                }
              ],
              practicalApplications: ['Directly scores 2 marks in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking the Chairman of Rajya Sabha (Vice President) can preside over a Joint Sitting.',
                  whyWrongEn: 'Under Article 118(4), the Speaker of Lok Sabha presides. The Chairman of Rajya Sabha is not a member of Parliament and cannot preside.',
                  correctWayEn: 'Always identify the Speaker of Lok Sabha as presiding officer.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Speaker decides Money Bill under Article 110',
                  'Nominated members excluded from Presidential election',
                  'Financial Emergency (Article 360) never declared in India'
                ],
                commonDistractorTraps: ['Confusing Joint Sitting summoner (President) with presiding officer (Speaker)'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.40)', 'BPSC TRE 3.0 (Q.43)']
              },
              quickRevisionPoints: [
                'President elected by elected members of LS, RS, and State Assemblies.',
                'Money Bill defined under Article 110; introduced ONLY in Lok Sabha.',
                'Rajya Sabha has only 14 days to return a Money Bill.',
                'Article 108: Joint Sitting summoned by President, presided by Lok Sabha Speaker.',
                'Emergency Articles: 352 (National), 356 (President\'s Rule), 360 (Financial).',
                'Financial Emergency (Article 360) has NEVER been proclaimed in India.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-parl-1',
                  questionEn: 'Who decides whether a bill is a Money Bill or not, and whose decision is final in this regard?',
                  questionHi: 'यह कौन तय करता है कि कोई विधेयक धन विधेयक है या नहीं, और इस संबंध में किसका निर्णय अंतिम होता है?',
                  options: [
                    { id: 'A', textEn: 'The President of India', isCorrect: false },
                    { id: 'B', textEn: 'The Prime Minister', isCorrect: false },
                    { id: 'C', textEn: 'The Speaker of Lok Sabha', isCorrect: true },
                    { id: 'D', textEn: 'The Chairman of Rajya Sabha', isCorrect: false }
                  ],
                  explanationEn: 'Under Article 110(3), the decision of the Speaker of the Lok Sabha on whether a bill is a Money Bill is final.',
                  conceptTested: 'Speaker decision on Money Bill'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-parl-1',
                topicId: 'pol-topic-union-exec-parliament',
                chapterId: 'pol-ch-union-parliament',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'Which of the following members do NOT participate in the election of the President of India?',
                questionTextHi: 'निम्नलिखित में से कौन से सदस्य भारत के राष्ट्रपति के चुनाव में भाग नहीं लेते हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: 'Elected members of Lok Sabha', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: 'Elected members of Legislative Assemblies of States', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: 'Nominated members of Rajya Sabha', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'MODERATE',
                practiceMode: 'PYQ',
                explanationEn: 'Under Article 54, only ELECTED members of Parliament and State Legislative Assemblies can vote in Presidential elections. Nominated members are strictly excluded.',
                isAuthenticPyq: true,
                treVersion: 'TRE_3_0',
                examDate: '2024-07-22',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 43,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      },

      // ----------------------------------------------------
      // CHAPTER 4: JUDICIARY & PANCHAYATI RAJ (BIHAR SPECIAL)
      // ----------------------------------------------------
      {
        id: 'pol-ch-judiciary-panchayat',
        subjectKey: 'INDIAN_POLITY',
        chapterNumber: 4,
        slug: 'judiciary-and-panchayati-raj-bihar',
        titleEn: 'Judiciary & Panchayati Raj System (Bihar Panchayati Raj Act 2006)',
        titleHi: 'न्यायपालिका एवं पंचायती राज व्यवस्था (बिहार पंचायती राज अधिनियम 2006)',
        descriptionEn: 'Supreme Court & High Courts, 73rd Constitutional Amendment Act 1992, Balwant Rai Mehta Committee, and the pioneering Bihar Panchayati Raj Act 2006 with 50% reservation for women.',
        descriptionHi: 'सर्वोच्च न्यायालय एवं उच्च न्यायालय, 73वां संविधान संशोधन अधिनियम 1992, बलवंत राय मेहता समिति, तथा महिलाओं को 50% आरक्षण देने वाला ऐतिहासिक बिहार पंचायती राज अधिनियम 2006।',
        totalPracticeQuestions: 35,
        totalEstimatedMinutes: 80,
        topics: [
          {
            id: 'pol-topic-pri-bihar-2006',
            chapterId: 'pol-ch-judiciary-panchayat',
            topicNumber: 1,
            slug: 'panchayati-raj-system-and-bihar-act-2006',
            titleEn: 'Panchayati Raj System & Bihar Panchayati Raj Act 2006',
            titleHi: 'पंचायती राज व्यवस्था एवं बिहार पंचायती राज अधिनियम 2006',
            descriptionEn: 'Committees on Panchayati Raj (Balwant Rai Mehta, Ashok Mehta, L.M. Singhvi), 73rd Amendment (11th Schedule, 29 subjects), and Bihar\'s historic 50% reservation for women.',
            descriptionHi: 'पंचायती राज समितियां (बलवंत राय मेहता, अशोक मेहता, एल.एम. सिंघवी), 73वां संशोधन (11वीं अनुसूची, 29 विषय), तथा बिहार द्वारा महिलाओं को 50% आरक्षण प्रदान करने का ऐतिहासिक निर्णय।',
            estimatedMinutes: 40,
            isPrescribedInOfficialSyllabus: true,
            pyqCount: 15,
            hasAppearedInPyq: true,
            examImportance: 'CRITICAL_HIGH_YIELD',
            pyqAppearanceSummary: 'Asked in BPSC TRE 1.0 (Q.37), TRE 2.0 (Q.38) & TRE 3.0 (Q.40)',
            isStoryFormat: true,
            storyEra: '1957 – 2006 CE',
            tutorial: {
              id: 'tut-pri-bihar-2006',
              topicId: 'pol-topic-pri-bihar-2006',
              titleEn: 'Panchayati Raj System & Bihar Panchayati Raj Act 2006',
              titleHi: 'पंचायती राज व्यवस्था एवं बिहार पंचायती राज अधिनियम 2006',
              readingTimeMinutes: 22,
              difficulty: 'INTERMEDIATE',
              learningObjectives: [
                'Trace the evolution of Panchayati Raj from Balwant Rai Mehta Committee (1957) to 73rd Amendment (1992).',
                'Recall that Rajasthan (Nagaur district, 2 Oct 1959) was the first state to launch Panchayati Raj, followed by Andhra Pradesh.',
                'Master the features of 73rd Amendment: Part IX, Articles 243 to 243O, 11th Schedule with 29 functional items.',
                'Analyze the Bihar Panchayati Raj Act 2006: Bihar was the FIRST state in India to provide 50% reservation for women in local bodies.'
              ],
              introductionEn: '==Mahatma Gandhi famously declared that "India lives in her villages. If the village perishes, India will perish too."==\n\nTo realize democratic decentralization, the Balwant Rai Mehta Committee in 1957 recommended a 3-tier Panchayati Raj system. On 2 October 1959, Prime Minister Nehru inaugurated it at Nagaur, Rajasthan. Decades later, the 73rd Constitutional Amendment 1992 gave constitutional status to Panchayats. In 2006, the State of Bihar created history by enacting the Bihar Panchayati Raj Act 2006, becoming the first state in India to grant 50% reservation to women across all tiers of local bodies!',
              introductionHi: '1957 में बलवंत राय मेहता समिति ने त्रिस्तरीय पंचायती राज व्यवस्था की सिफारिश की। 2 अक्टूबर 1959 को राजस्थान के नागौर में इसका उद्घाटन हुआ। 1992 के 73वें संविधान संशोधन ने इसे संवैधानिक दर्जा दिया। 2006 में बिहार ने देश में एक नया इतिहास रचा और पंचायतों में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य बना!',
              conceptSections: [
                {
                  title: '1. Evolution & High-Yield Committees on Panchayati Raj',
                  contentMarkdownEn: '* **Balwant Rai Mehta Committee (1957):** Recommended a ==3-tier Panchayati Raj System==: (a) Gram Panchayat at village level, (b) Panchayat Samiti at block level, (c) Zila Parishad at district level. First implemented in ==Nagaur, Rajasthan== on ==2 October 1959==.\n* **Ashok Mehta Committee (1977):** Recommended a 2-tier system.\n* **L.M. Singhvi Committee (1986):** Recommended Constitutional recognition for PRIs.'
                },
                {
                  title: '2. The 73rd Constitutional Amendment Act, 1992',
                  contentMarkdownEn: 'Came into force on ==24 April 1993== (celebrated nationally as ==National Panchayati Raj Day==):\n\n* Added **Part IX** to the Constitution (Articles 243 to 243O).\n* Added the ==11th Schedule==, containing ==29 functional subjects/items==.\n* **Article 243D:** Reservation of not less than 1/3rd (33%) seats for women.\n* **Article 243E:** Fixed tenure of **5 years**.\n* **Article 243I:** State Finance Commission; **Article 243K:** State Election Commission.'
                },
                {
                  title: '3. Bihar Panchayati Raj Act, 2006 (Pioneering Revolution)',
                  contentMarkdownEn: '* **==50% Reservation for Women==:** Bihar became the ==FIRST state in the country== to provide 50% reservation for women in all three tiers of Panchayati Raj Institutions (Gram Panchayat, Panchayat Samiti, Zila Parishad) as well as for Mukhiya and Pramukh posts!\n* **Backward Classes (EBC):** Provided up to 20% reservation for Extremely Backward Classes.'
                }
              ],
              importantDefinitions: [
                {
                  term: 'Gram Sabha (Article 243A)',
                  definitionEn: 'A body consisting of all persons registered in the electoral rolls relating to a village comprised within the area of Panchayat.',
                  definitionHi: 'गांव के सभी पंजीकृत मतदाताओं की सभा।'
                }
              ],
              rulesAndFormulas: [
                {
                  title: '11th vs 12th Schedule Item Counts',
                  formulaOrRule: 'Panchayat (11th Schedule) = 29 Items | Municipality (12th Schedule) = 18 Items',
                  explanationEn: '29 items for rural local bodies; 18 items for urban local bodies.'
                }
              ],
              examples: [
                {
                  title: 'BPSC TRE Question Analysis',
                  problemEn: 'How many items are in the 11th Schedule for Panchayats?',
                  stepByStepSolutionEn: '1. The 73rd Amendment added the 11th Schedule.\n2. Contains exactly 29 subjects.\n3. Answer: 29 subjects.',
                  shortcutTrick: '2 + 9 = 11 (Matches 11th Schedule!)'
                }
              ],
              practicalApplications: ['Guaranteed 1 to 2 questions in BPSC TRE Part 2 General Studies.'],
              commonMistakesAndMisconceptions: [
                {
                  mistakeEn: 'Thinking Bihar only provided 33% reservation for women.',
                  whyWrongEn: 'While the 73rd Amendment mandates 33%, Bihar enacted state law in 2006 to provide 50% reservation for women.',
                  correctWayEn: 'Always remember 50% for Bihar Panchayati Raj Act 2006.'
                }
              ],
              bpscTrePerspective: {
                frequentlyTestedAspects: [
                  'Bihar was first state to give 50% women reservation in PRIs (Act 2006)',
                  '11th Schedule has 29 items (TRE 1.0 Q.37)',
                  'First PR system launched in Nagaur, Rajasthan (2 Oct 1959)'
                ],
                commonDistractorTraps: ['Confusing 33% national minimum with 50% Bihar reservation'],
                relatedPyqReferences: ['BPSC TRE 1.0 (Q.37)', 'BPSC TRE 2.0 (Q.38)', 'BPSC TRE 3.0 (Q.40)']
              },
              quickRevisionPoints: [
                'Balwant Rai Mehta Committee (1957) recommended 3-tier Panchayati Raj.',
                'First implemented in Nagaur, Rajasthan on 2 October 1959.',
                '73rd Amendment 1992 added Part IX and 11th Schedule (29 subjects).',
                '24 April is celebrated as National Panchayati Raj Day.',
                'Bihar was the FIRST state to grant 50% reservation to women in Panchayati Raj (Act 2006).',
                'State Election Commission (Article 243K) conducts local body elections.'
              ],
              knowledgeCheck: [
                {
                  id: 'kc-pol-pri-1',
                  questionEn: 'Which was the first state in India to grant 50% reservation for women in Panchayati Raj Institutions through its state legislation?',
                  questionHi: 'अपने राज्य विधान के माध्यम से पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य कौन सा था?',
                  options: [
                    { id: 'A', textEn: 'Rajasthan', isCorrect: false },
                    { id: 'B', textEn: 'Madhya Pradesh', isCorrect: false },
                    { id: 'C', textEn: 'Bihar', isCorrect: true },
                    { id: 'D', textEn: 'Kerala', isCorrect: false }
                  ],
                  explanationEn: 'Bihar became the first state in India to provide 50% reservation for women in Panchayati Raj Institutions under the Bihar Panchayati Raj Act, 2006.',
                  conceptTested: '50% women reservation in Bihar PR Act 2006'
                }
              ]
            },
            practiceQuestions: [
              {
                id: 'pq-pol-pri-1',
                topicId: 'pol-topic-pri-bihar-2006',
                chapterId: 'pol-ch-judiciary-panchayat',
                subjectKey: 'INDIAN_POLITY',
                sectionKey: 'PART_2_GENERAL_STUDIES',
                questionTextEn: 'How many functional items/subjects are included in the 11th Schedule of the Constitution of India distributed to Panchayats under the 73rd Constitutional Amendment Act, 1992?',
                questionTextHi: '73वें संविधान संशोधन अधिनियम, 1992 के तहत पंचायतों को सौंपे गए भारतीय संविधान की 11वीं अनुसूची में कितने कार्यात्मक विषय शामिल हैं?',
                options: [
                  { id: 'o1', identifier: 'A', textEn: '18 subjects', isCorrect: false },
                  { id: 'o2', identifier: 'B', textEn: '21 subjects', isCorrect: false },
                  { id: 'o3', identifier: 'C', textEn: '29 subjects', isCorrect: true },
                  { id: 'o4', identifier: 'D', textEn: 'More than one of the above', isCorrect: false },
                  { id: 'o5', identifier: 'E', textEn: 'None of the above', isCorrect: false }
                ],
                correctOptionIdentifier: 'C',
                difficulty: 'EASY',
                practiceMode: 'PYQ',
                explanationEn: 'The 11th Schedule contains exactly 29 functional items for Panchayats. (The 12th Schedule for Municipalities contains 18 items).',
                isAuthenticPyq: true,
                treVersion: 'TRE_1_0',
                examDate: '2023-08-25',
                shift: 'Shift 1 (General Studies)',
                officialQuestionNumber: 37,
                verificationStatus: 'OFFICIALLY_VERIFIED'
              }
            ]
          }
        ]
      }
    ]
  }
];
