import { Exam } from '@/types/exam';

export const mockSbiPoPrelimsExam: Exam = {
  id: 'sbi-po-prelims-2025-mock-01',
  slug: 'sbi-po-prelims-all-india-live-mock-1',
  title: 'SBI PO Prelims 2025 - All India Live Mock Test #01',
  examBody: 'SBI',
  post: 'PO',
  stage: 'PRELIMS',
  year: 2025,
  shift: 'Shift 1 (Official TCS iON Pattern)',
  timingType: 'SECTIONAL_LOCKED',
  totalDurationSeconds: 3600, // 60 mins total
  totalMarks: 100,
  totalQuestions: 100,
  negativeMarkRatio: 0.25,
  sections: [
    {
      id: 'sec_reasoning',
      examId: 'sbi-po-prelims-2025-mock-01',
      sectionType: 'REASONING_ABILITY',
      displayName: 'Reasoning Ability',
      orderIndex: 0,
      durationSeconds: 1200, // 20 mins sectional lock
      questionCount: 35,
      maxMarks: 35,
      sectionalCutoff: 10.5,
      questionGroups: [
        {
          id: 'group_puzzle_circular',
          sectionId: 'sec_reasoning',
          groupType: 'SEATING_ARRANGEMENT_CIRCULAR',
          title: 'Directions (Q. 1 - 5): Circular Seating Arrangement Clues',
          passageEn: `Eight persons—P, Q, R, S, T, U, V, and W—are sitting around a circular table. Some of them are facing the center while some are facing away from the center.

1. P sits third to the right of Q.
2. Q faces the center.
3. Only two persons sit between P and S.
4. R sits second to the left of S.
5. Immediate neighbours of R face the same direction (i.e. if one faces center, the other also faces center).
6. T sits second to the right of U, who faces opposite direction to Q.
7. V sits to the immediate left of W.
8. Neither V nor W is an immediate neighbour of P.
9. W faces towards the center.
10. The persons facing outside are more than those facing inside.`,
          passageHi: `आठ व्यक्ति—P, Q, R, S, T, U, V और W—एक वृत्ताकार मेज के चारों ओर बैठे हैं। उनमें से कुछ केंद्र की ओर उन्मुख हैं जबकि कुछ केंद्र से बाहर की ओर उन्मुख हैं।

1. P, Q के दायें से तीसरे स्थान पर बैठा है।
2. Q केंद्र की ओर उन्मुख है।
3. P और S के बीच केवल दो व्यक्ति बैठे हैं।
4. R, S के बायें से दूसरे स्थान पर बैठा है।
5. R के निकटतम पड़ोसी समान दिशा में उन्मुख हैं।
6. T, U के दायें से दूसरे स्थान पर बैठा है, जो Q की विपरीत दिशा में उन्मुख है।
7. V, W के ठीक बायें बैठा है।
8. न तो V और न ही W, P का निकटतम पड़ोसी है।
9. W केंद्र की ओर उन्मुख है।
10. बाहर की ओर उन्मुख व्यक्तियों की संख्या अंदर की ओर उन्मुख व्यक्तियों से अधिक है।`,
          questions: [],
        },
      ],
      questions: [
        {
          id: 'q_reas_01',
          sectionId: 'sec_reasoning',
          questionGroupId: 'group_puzzle_circular',
          questionNumber: 1,
          orderInSection: 1,
          questionTextEn: 'Who among the following sits to the immediate right of P?',
          questionTextHi: 'निम्नलिखित में से कौन P के ठीक दायें बैठा है?',
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Circular Seating Arrangement',
          subTopic: 'Inward-Outward facing (8 persons)',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 45,
          conventionalSolutionEn: `Step-by-step arrangement:
1. Q faces Center. P is 3rd to right of Q (anti-clockwise).
2. Two people between P and S. S cannot be adjacent to Q, so S is placed clockwise.
3. R is 2nd to left of S -> R's position is fixed.
4. Testing inward/outward orientations reveals T sits immediate right of P.`,
          conventionalSolutionHi: `विस्तृत चरणबद्ध हल:
1. Q केंद्र की ओर देख रहा है। P, Q के दायें तीसरा है।
2. P और S के मध्य दो व्यक्ति हैं।
3. R, S के बायें दूसरा है।
4. सभी शर्तों को संतुष्ट करने पर P के ठीक दायें T बैठता है।`,
          shortcutTrickEn: 'Track outward/inward count first: Clue 10 states >4 face outside. Eliminate options where inside > 3.',
          shortcutTrickHi: 'शर्त 10 के अनुसार बाहर देखने वाले 4 से अधिक हैं। केवल 3 अंदर देख सकते हैं।',
          options: [
            { id: 'opt_q1_a', questionId: 'q_reas_01', identifier: 'A', optionTextEn: 'T', optionTextHi: 'T', isCorrect: true },
            { id: 'opt_q1_b', questionId: 'q_reas_01', identifier: 'B', optionTextEn: 'U', optionTextHi: 'U', isCorrect: false },
            { id: 'opt_q1_c', questionId: 'q_reas_01', identifier: 'C', optionTextEn: 'V', optionTextHi: 'V', isCorrect: false },
            { id: 'opt_q1_d', questionId: 'q_reas_01', identifier: 'D', optionTextEn: 'W', optionTextHi: 'W', isCorrect: false },
            { id: 'opt_q1_e', questionId: 'q_reas_01', identifier: 'E', optionTextEn: 'None of these', optionTextHi: 'इनमें से कोई नहीं', isCorrect: false },
          ],
        },
        {
          id: 'q_reas_02',
          sectionId: 'sec_reasoning',
          questionGroupId: 'group_puzzle_circular',
          questionNumber: 2,
          orderInSection: 2,
          questionTextEn: 'How many persons are facing away from the center (outside)?',
          questionTextHi: 'कितने व्यक्ति केंद्र से बाहर (विपरीत दिशा) की ओर उन्मुख हैं?',
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Circular Seating Arrangement',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 30,
          conventionalSolutionEn: 'Examining the verified arrangement, exactly 5 persons face outside (P, S, T, U, V) and 3 face inside (Q, R, W).',
          options: [
            { id: 'opt_q2_a', questionId: 'q_reas_02', identifier: 'A', optionTextEn: 'Three', optionTextHi: 'तीन', isCorrect: false },
            { id: 'opt_q2_b', questionId: 'q_reas_02', identifier: 'B', optionTextEn: 'Four', optionTextHi: 'चार', isCorrect: false },
            { id: 'opt_q2_c', questionId: 'q_reas_02', identifier: 'C', optionTextEn: 'Five', optionTextHi: 'पाँच', isCorrect: true },
            { id: 'opt_q2_d', questionId: 'q_reas_02', identifier: 'D', optionTextEn: 'Six', optionTextHi: 'छह', isCorrect: false },
            { id: 'opt_q2_e', questionId: 'q_reas_02', identifier: 'E', optionTextEn: 'Cannot be determined', optionTextHi: 'निर्धारित नहीं किया जा सकता', isCorrect: false },
          ],
        },
        {
          id: 'q_reas_03',
          sectionId: 'sec_reasoning',
          questionGroupId: 'group_puzzle_circular',
          questionNumber: 3,
          orderInSection: 3,
          questionTextEn: 'What is the position of V with respect to Q?',
          questionTextHi: 'Q के सन्दर्भ में V का स्थान क्या है?',
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Circular Seating Arrangement',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 35,
          conventionalSolutionEn: 'Counting clockwise from Q (who faces inside): V is fourth to the right or fourth to the left (directly opposite Q).',
          options: [
            { id: 'opt_q3_a', questionId: 'q_reas_03', identifier: 'A', optionTextEn: 'Third to the left', optionTextHi: 'बायें से तीसरा', isCorrect: false },
            { id: 'opt_q3_b', questionId: 'q_reas_03', identifier: 'B', optionTextEn: 'Fourth to the right', optionTextHi: 'दायें से चौथा', isCorrect: true },
            { id: 'opt_q3_c', questionId: 'q_reas_03', identifier: 'C', optionTextEn: 'Second to the right', optionTextHi: 'दायें से दूसरा', isCorrect: false },
            { id: 'opt_q3_d', questionId: 'q_reas_03', identifier: 'D', optionTextEn: 'Immediate left', optionTextHi: 'ठीक बायें', isCorrect: false },
            { id: 'opt_q3_e', questionId: 'q_reas_03', identifier: 'E', optionTextEn: 'Fifth to the right', optionTextHi: 'दायें से पाँचवाँ', isCorrect: false },
          ],
        },
        {
          id: 'q_reas_04',
          sectionId: 'sec_reasoning',
          questionGroupId: null,
          questionNumber: 4,
          orderInSection: 4,
          questionTextEn: `Statements:
Only a few Banks are Fintech.
All Fintech are Unicorns.
No Unicorn is Scam.

Conclusions:
I. Some Banks are not Fintech.
II. All Fintech can never be Scam.`,
          questionTextHi: `कथन:
केवल कुछ Bank, Fintech हैं।
सभी Fintech, Unicorn हैं।
कोई Unicorn, Scam नहीं है।

निष्कर्ष:
I. कुछ Bank, Fintech नहीं हैं।
II. सभी Fintech कभी भी Scam नहीं हो सकते।`,
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Syllogism',
          subTopic: 'Only a few + Negative deduction',
          difficulty: 'EASY',
          avgIdealTimeSeconds: 25,
          conventionalSolutionEn: `1. "Only a few A are B" means: "Some A are B" AND "Some A are not B". Hence Conclusion I ("Some Banks are not Fintech") is strictly TRUE.
2. All Fintech is inside Unicorn, and No Unicorn is Scam. Therefore Fintech and Scam can never overlap. Hence Conclusion II is TRUE.
Both I and II follow.`,
          shortcutTrickEn: 'Syllogism Shortcut: Whenever "Only a few A are B" is stated, "Some A are not B" is definitely true directly from definition.',
          options: [
            { id: 'opt_q4_a', questionId: 'q_reas_04', identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: false },
            { id: 'opt_q4_b', questionId: 'q_reas_04', identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
            { id: 'opt_q4_c', questionId: 'q_reas_04', identifier: 'C', optionTextEn: 'Either conclusion I or II follows', optionTextHi: 'या तो निष्कर्ष I या II अनुसरण करता है', isCorrect: false },
            { id: 'opt_q4_d', questionId: 'q_reas_04', identifier: 'D', optionTextEn: 'Neither conclusion I nor II follows', optionTextHi: 'न तो निष्कर्ष I न ही II अनुसरण करता है', isCorrect: false },
            { id: 'opt_q4_e', questionId: 'q_reas_04', identifier: 'E', optionTextEn: 'Both conclusions I and II follow', optionTextHi: 'दोनों निष्कर्ष I और II अनुसरण करते हैं', isCorrect: true },
          ],
        },
        {
          id: 'q_reas_05',
          sectionId: 'sec_reasoning',
          questionGroupId: null,
          questionNumber: 5,
          orderInSection: 5,
          questionTextEn: `Statements: P >= Q = R > S; T < U <= S

Conclusions:
I. P > T
II. Q >= U`,
          questionTextHi: `कथन: P >= Q = R > S; T < U <= S

निष्कर्ष:
I. P > T
II. Q >= U`,
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Inequalities',
          subTopic: 'Direct Inequalities',
          difficulty: 'EASY',
          avgIdealTimeSeconds: 20,
          conventionalSolutionEn: `Connecting chain: P >= Q = R > S >= U > T.
For I: P > T is directly true because of the strict '>' sign between R and S.
For II: Q > U (strict greater), whereas statement says Q >= U. Hence II is false.
Only conclusion I follows.`,
          shortcutTrickEn: 'Open Gate Method: Track arrow gates from P to T: P -> Q -> R -> S -> U -> T. Strict gate > exists at R>S, so P > T holds.',
          options: [
            { id: 'opt_q5_a', questionId: 'q_reas_05', identifier: 'A', optionTextEn: 'Only conclusion I follows', optionTextHi: 'केवल निष्कर्ष I अनुसरण करता है', isCorrect: true },
            { id: 'opt_q5_b', questionId: 'q_reas_05', identifier: 'B', optionTextEn: 'Only conclusion II follows', optionTextHi: 'केवल निष्कर्ष II अनुसरण करता है', isCorrect: false },
            { id: 'opt_q5_c', questionId: 'q_reas_05', identifier: 'C', optionTextEn: 'Either I or II follows', optionTextHi: 'या तो I या II', isCorrect: false },
            { id: 'opt_q5_d', questionId: 'q_reas_05', identifier: 'D', optionTextEn: 'Neither I nor II follows', optionTextHi: 'न तो I न ही II', isCorrect: false },
            { id: 'opt_q5_e', questionId: 'q_reas_05', identifier: 'E', optionTextEn: 'Both I and II follow', optionTextHi: 'दोनों I और II', isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 'sec_quant',
      examId: 'sbi-po-prelims-2025-mock-01',
      sectionType: 'QUANTITATIVE_APTITUDE',
      displayName: 'Quantitative Aptitude',
      orderIndex: 1,
      durationSeconds: 1200, // 20 mins sectional lock
      questionCount: 35,
      maxMarks: 35,
      sectionalCutoff: 11.0,
      questionGroups: [
        {
          id: 'group_di_table',
          sectionId: 'sec_quant',
          groupType: 'DI_TABULAR',
          title: 'Directions (Q. 6 - 8): Study the table data carefully and answer the questions.',
          passageEn: `The table shows the total number of smartphones manufactured by five companies (A, B, C, D, E) in the year 2024 and the percentage of defective units.

| Company | Total Units Produced | Defective Units % |
|:-------:|:--------------------:|:-----------------:|
|    A    |        12,000        |        15%        |
|    B    |        18,000        |        12%        |
|    C    |        15,000        |        20%        |
|    D    |        24,000        |        10%        |
|    E    |        20,000        |        25%        |`,
          passageHi: `तालिका वर्ष 2024 में पाँच कंपनियों (A, B, C, D, E) द्वारा निर्मित कुल स्मार्टफोन और खराब (Defective) इकाइयों के प्रतिशत को दर्शाती है।

| कंपनी | कुल निर्मित इकाइयाँ | खराब इकाइयाँ % |
|:-----:|:-------------------:|:--------------:|
|   A   |       12,000        |      15%       |
|   B   |       18,000        |      12%       |
|   C   |       15,000        |      20%       |
|   D   |       24,000        |      10%       |
|   E   |       20,000        |      25%       |`,
          chartConfig: {
            type: 'table',
            tableHeaders: ['Company', 'Total Units Produced', 'Defective Units %'],
            tableRows: [
              ['Company A', '12,000', '15%'],
              ['Company B', '18,000', '12%'],
              ['Company C', '15,000', '20%'],
              ['Company D', '24,000', '10%'],
              ['Company E', '20,000', '25%'],
            ],
          },
          questions: [],
        },
      ],
      questions: [
        {
          id: 'q_quant_06',
          sectionId: 'sec_quant',
          questionGroupId: 'group_di_table',
          questionNumber: 6,
          orderInSection: 1,
          questionTextEn: 'What is the average number of non-defective smartphones manufactured by companies B and D together?',
          questionTextHi: 'कंपनी B और D द्वारा मिलाकर निर्मित गैर-खराब (Non-defective) स्मार्टफोन की औसत संख्या क्या है?',
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Data Interpretation',
          subTopic: 'Tabular DI - Non-defective Average',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 50,
          conventionalSolutionEn: `1. Company B non-defective = 18,000 * (100 - 12)% = 18,000 * 0.88 = 15,840.
2. Company D non-defective = 24,000 * (100 - 10)% = 24,000 * 0.90 = 21,600.
3. Total non-defective = 15,840 + 21,600 = 37,440.
4. Average = 37,440 / 2 = 18,720.`,
          shortcutTrickEn: 'Shortcut: Average of B & D = [18k * 0.88 + 24k * 0.9] / 2 = 9k * 0.88 + 12k * 0.9 = 7,920 + 10,800 = 18,720.',
          options: [
            { id: 'opt_q6_a', questionId: 'q_quant_06', identifier: 'A', optionTextEn: '17,450', optionTextHi: '17,450', isCorrect: false },
            { id: 'opt_q6_b', questionId: 'q_quant_06', identifier: 'B', optionTextEn: '18,720', optionTextHi: '18,720', isCorrect: true },
            { id: 'opt_q6_c', questionId: 'q_quant_06', identifier: 'C', optionTextEn: '19,200', optionTextHi: '19,200', isCorrect: false },
            { id: 'opt_q6_d', questionId: 'q_quant_06', identifier: 'D', optionTextEn: '16,840', optionTextHi: '16,840', isCorrect: false },
            { id: 'opt_q6_e', questionId: 'q_quant_06', identifier: 'E', optionTextEn: '18,500', optionTextHi: '18,500', isCorrect: false },
          ],
        },
        {
          id: 'q_quant_07',
          sectionId: 'sec_quant',
          questionGroupId: 'group_di_table',
          questionNumber: 7,
          orderInSection: 2,
          questionTextEn: 'Total defective units produced by Company E is what percent more or less than the total defective units produced by Company C?',
          questionTextHi: 'कंपनी E द्वारा निर्मित कुल खराब इकाइयाँ, कंपनी C द्वारा निर्मित कुल खराब इकाइयों से कितने प्रतिशत अधिक या कम हैं?',
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Data Interpretation',
          subTopic: 'Percentage Comparison',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 40,
          conventionalSolutionEn: `1. Defective in E = 20,000 * 25% = 5,000.
2. Defective in C = 15,000 * 20% = 3,000.
3. Difference = 5,000 - 3,000 = 2,000 more.
4. Percentage more = (2,000 / 3,000) * 100 = 66.67% more.`,
          shortcutTrickEn: 'Ratio method: E(defective) : C(defective) = (20 * 25) : (15 * 20) = 500 : 300 = 5 : 3. % more = (2/3) * 100 = 66.67%.',
          options: [
            { id: 'opt_q7_a', questionId: 'q_quant_07', identifier: 'A', optionTextEn: '66.67% more', optionTextHi: '66.67% अधिक', isCorrect: true },
            { id: 'opt_q7_b', questionId: 'q_quant_07', identifier: 'B', optionTextEn: '40% less', optionTextHi: '40% कम', isCorrect: false },
            { id: 'opt_q7_c', questionId: 'q_quant_07', identifier: 'C', optionTextEn: '50% more', optionTextHi: '50% अधिक', isCorrect: false },
            { id: 'opt_q7_d', questionId: 'q_quant_07', identifier: 'D', optionTextEn: '33.33% less', optionTextHi: '33.33% कम', isCorrect: false },
            { id: 'opt_q7_e', questionId: 'q_quant_07', identifier: 'E', optionTextEn: '60% more', optionTextHi: '60% अधिक', isCorrect: false },
          ],
        },
        {
          id: 'q_quant_08',
          sectionId: 'sec_quant',
          questionGroupId: null,
          questionNumber: 8,
          orderInSection: 3,
          questionTextEn: `In the following question, two equations numbered I and II are given. You have to solve both equations and establish the relationship between x and y:

I. x^2 - 11x + 30 = 0
II. y^2 - 13y + 42 = 0`,
          questionTextHi: `निम्नलिखित प्रश्न में दो समीकरण I और II दिए गए हैं। दोनों को हल करें और x तथा y के बीच संबंध स्थापित करें:

I. x^2 - 11x + 30 = 0
II. y^2 - 13y + 42 = 0`,
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Quadratic Equations',
          subTopic: 'Sign Method Comparison',
          difficulty: 'EASY',
          avgIdealTimeSeconds: 25,
          conventionalSolutionEn: `Equation I: x^2 - 11x + 30 = 0 -> (x - 5)(x - 6) = 0 -> x = +5, +6.
Equation II: y^2 - 13y + 42 = 0 -> (y - 6)(y - 7) = 0 -> y = +6, +7.
Comparison:
When x = 5: x < y (since 5 < 6 and 5 < 7).
When x = 6: x = y (since 6 = 6) and x < y (since 6 < 7).
Therefore, x <= y.`,
          shortcutTrickEn: 'Speed Math Factor Split: 30 = 5 * 6 (sum = 11), roots are +5, +6. 42 = 6 * 7 (sum = 13), roots are +6, +7. Immediate comparison gives x <= y.',
          options: [
            { id: 'opt_q8_a', questionId: 'q_quant_08', identifier: 'A', optionTextEn: 'x > y', optionTextHi: 'x > y', isCorrect: false },
            { id: 'opt_q8_b', questionId: 'q_quant_08', identifier: 'B', optionTextEn: 'x >= y', optionTextHi: 'x >= y', isCorrect: false },
            { id: 'opt_q8_c', questionId: 'q_quant_08', identifier: 'C', optionTextEn: 'x < y', optionTextHi: 'x < y', isCorrect: false },
            { id: 'opt_q8_d', questionId: 'q_quant_08', identifier: 'D', optionTextEn: 'x <= y', optionTextHi: 'x <= y', isCorrect: true },
            { id: 'opt_q8_e', questionId: 'q_quant_08', identifier: 'E', optionTextEn: 'x = y or relationship cannot be established', optionTextHi: 'x = y अथवा संबंध स्थापित नहीं किया जा सकता', isCorrect: false },
          ],
        },
      ],
    },
    {
      id: 'sec_english',
      examId: 'sbi-po-prelims-2025-mock-01',
      sectionType: 'ENGLISH_LANGUAGE',
      displayName: 'English Language',
      orderIndex: 2,
      durationSeconds: 1200, // 20 mins sectional lock
      questionCount: 30,
      maxMarks: 30,
      sectionalCutoff: 10.0,
      questionGroups: [],
      questions: [
        {
          id: 'q_eng_09',
          sectionId: 'sec_english',
          questionGroupId: null,
          questionNumber: 9,
          orderInSection: 1,
          questionTextEn: `In the following sentence, four words have been highlighted in bold. One of these words may be inappropriately placed or grammatically incorrect. Choose the option with the correct word swap:

The central bank decided to (A) **curb** retail lending rates to (B) **augment** inflation while keeping liquidity (C) **adequate** for small (D) **enterprises**.`,
          questionTextHi: `वाक्य में दिए गए शब्दों के स्वैप पर विचार करें और सही विकल्प का चयन करें।`,
          marks: 1.0,
          negativeMarks: 0.25,
          topic: 'Word Swap',
          subTopic: 'Economy Contextual Usage',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 30,
          conventionalSolutionEn: 'Central banks raise or curb rates to temper or moderate inflation, not augment (increase) it. Swapping (A) curb with (B) augment restores meaningful economic policy meaning: "augment lending to curb inflation".',
          options: [
            { id: 'opt_q9_a', questionId: 'q_eng_09', identifier: 'A', optionTextEn: 'A-B', optionTextHi: 'A-B', isCorrect: true },
            { id: 'opt_q9_b', questionId: 'q_eng_09', identifier: 'B', optionTextEn: 'B-C', optionTextHi: 'B-C', isCorrect: false },
            { id: 'opt_q9_c', questionId: 'q_eng_09', identifier: 'C', optionTextEn: 'A-D', optionTextHi: 'A-D', isCorrect: false },
            { id: 'opt_q9_d', questionId: 'q_eng_09', identifier: 'D', optionTextEn: 'C-D', optionTextHi: 'C-D', isCorrect: false },
            { id: 'opt_q9_e', questionId: 'q_eng_09', identifier: 'E', optionTextEn: 'No exchange required', optionTextHi: 'किसी बदलाव की आवश्यकता नहीं', isCorrect: false },
          ],
        },
      ],
    },
  ],
};
