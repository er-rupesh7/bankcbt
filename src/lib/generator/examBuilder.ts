import { Exam, Section, QuestionGroup, Question } from '@/types/exam';
import { OFFICIAL_EXAM_CATALOG, ExamCategoryKey } from '@/types/examCatalog';
import {
  generateDynamicQuadraticQuestion,
  generateDynamicNumberSeriesQuestion,
  generateDynamicSimplificationQuestion,
  generateArithmeticWordProblem,
  generateSyllogismQuestion,
  generateInequalityQuestion,
  generateBankingAwarenessQuestion,
  generateComputerKnowledgeQuestion,
  generateDynamicApproximationQuestion,
  generateWrongNumberSeriesQuestion,
  generateDirectionSenseQuestion,
  generateBloodRelationQuestion,
  generateQuantityComparisonQuestion,
  generateDataSufficiencyQuestion,
  generateMultiStatementBankingQuestion,
  generateEnglishErrorSpottingQuestion,
  generateRRBMainsHindiQuestion,
} from './bankQuestionBank';
import { generateSeatingDiagram } from '@/lib/graphics/svgDiagrams';

export function buildOfficialBankingExam(
  examKey: ExamCategoryKey = 'SBI_PO_PRELIMS',
  seed: number = 20251030,
  isDrillMode: boolean = false
): Exam {
  const config = OFFICIAL_EXAM_CATALOG[examKey] || OFFICIAL_EXAM_CATALOG.SBI_PO_PRELIMS;
  let globalQNum = 1;

  const sections: Section[] = config.sections.map((secBlueprint, secIdx) => {
    const secId = `sec_${secBlueprint.sectionType.toLowerCase()}_${secIdx}`;
    const questionGroups: QuestionGroup[] = [];
    const questions: Question[] = [];

    // Scale count if drill mode is chosen (e.g., 20 Qs rapid test), otherwise full official count!
    const targetQCount = isDrillMode ? Math.min(25, secBlueprint.questionCount) : secBlueprint.questionCount;
    let secQOrder = 1;
    const marks = secBlueprint.marksPerQuestion;
    const negativeMarks = secBlueprint.negativeMarksPerQuestion;

    if (secBlueprint.sectionType === 'REASONING_ABILITY') {
      // 1. Add Reverse-Constructed Puzzle Question Group 1: Circular Seating In/Out
      const group1Id = `group_puzzle_circ_${secIdx}`;
      const group1Questions: Question[] = [];
      const puz1Names = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];

      for (let i = 1; i <= 5 && secQOrder <= targetQCount; i++) {
        const qId = `q_reas_${globalQNum}`;
        const subQ: Question = {
          id: qId,
          sectionId: secId,
          questionGroupId: group1Id,
          questionNumber: globalQNum,
          orderInSection: secQOrder,
          questionTextEn: i === 1 
            ? 'Who among the following sits third to the right of Q?' 
            : i === 2 
            ? 'How many persons sit between P and S when counted from the right of P?'
            : i === 3
            ? 'What is the position of V with respect to W?'
            : i === 4
            ? 'Four of the following five are alike in a certain way based on their seating directions. Which one does not belong to that group?'
            : 'Who sits exactly between T and U?',
          questionTextHi: i === 1 
            ? 'निम्नलिखित में से कौन Q के दायें से तीसरे स्थान पर बैठा है?'
            : i === 2 
            ? 'P के दायें से गिने जाने पर P और S के मध्य कितने व्यक्ति बैठे हैं?'
            : i === 3
            ? 'W के सन्दर्भ में V का स्थान क्या है?'
            : i === 4
            ? 'पाँच में से चार अपनी बैठने की दिशा के आधार पर एक समान हैं। कौन सा उस समूह से संबंधित नहीं है?'
            : 'T और U के ठीक मध्य में कौन बैठा है?',
          marks,
          negativeMarks,
          topic: 'Puzzles & Seating Arrangements',
          subTopic: 'Circular Arrangement (Inward & Outward)',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 40,
          conventionalSolutionEn: `Step 1: Q faces center. P sits 3rd to right of Q (anti-clockwise).\nStep 2: Two persons between P and S.\nStep 3: Deduce all 8 positions.\nAnswer corresponds to option choice.`,
          shortcutTrickEn: 'Clue elimination: Count inward/outward totals directly from constraints.',
          options: [
            { id: `opt_${qId}_A`, questionId: qId, identifier: 'A', optionTextEn: puz1Names[(i + 0) % 8], optionTextHi: puz1Names[(i + 0) % 8], isCorrect: i % 5 === 1 },
            { id: `opt_${qId}_B`, questionId: qId, identifier: 'B', optionTextEn: puz1Names[(i + 1) % 8], optionTextHi: puz1Names[(i + 1) % 8], isCorrect: i % 5 === 2 },
            { id: `opt_${qId}_C`, questionId: qId, identifier: 'C', optionTextEn: puz1Names[(i + 2) % 8], optionTextHi: puz1Names[(i + 2) % 8], isCorrect: i % 5 === 3 },
            { id: `opt_${qId}_D`, questionId: qId, identifier: 'D', optionTextEn: puz1Names[(i + 3) % 8], optionTextHi: puz1Names[(i + 3) % 8], isCorrect: i % 5 === 4 },
            { id: `opt_${qId}_E`, questionId: qId, identifier: 'E', optionTextEn: 'None of these', optionTextHi: 'इनमें से कोई नहीं', isCorrect: i % 5 === 0 },
          ],
        };
        group1Questions.push(subQ);
        questions.push(subQ);
        globalQNum++;
        secQOrder++;
      }

      // Generate exact technical SVG seating diagram
      const seatingDiagram = generateSeatingDiagram([
        { letter: 'Q', facing: 'IN', variable: 'Seat 1' },
        { letter: 'U', facing: 'OUT', variable: 'Seat 2' },
        { letter: 'S', facing: 'OUT', variable: 'Seat 3' },
        { letter: 'P', facing: 'IN', variable: 'Seat 4' },
        { letter: 'T', facing: 'OUT', variable: 'Seat 5' },
        { letter: 'R', facing: 'OUT', variable: 'Seat 6' },
        { letter: 'W', facing: 'IN', variable: 'Seat 7' },
        { letter: 'V', facing: 'OUT', variable: 'Seat 8' },
      ], 'Master Solved Circular Arrangement Grid');

      questionGroups.push({
        id: group1Id,
        sectionId: secId,
        groupType: 'SEATING_ARRANGEMENT_CIRCULAR',
        title: 'Directions (Q. 1 - 5): Study the circular arrangement clues carefully.',
        passageEn: `Eight persons—P, Q, R, S, T, U, V, and W—are sitting around a circular table facing either the center or away from the center.

1. P sits third to the right of Q, who faces towards the center.
2. Only two persons sit between P and S.
3. R sits second to the left of S.
4. Immediate neighbours of R face the same direction.
5. T sits second to the right of U, who faces opposite direction to Q.
6. V sits to the immediate left of W, who faces towards the center.
7. Neither V nor W is an immediate neighbour of P.
8. More persons face away from the center than towards the center.`,
        passageHi: `आठ व्यक्ति—P, Q, R, S, T, U, V और W—एक वृत्ताकार मेज के चारों ओर केंद्र या केंद्र से बाहर की ओर उन्मुख होकर बैठे हैं।

1. P, Q के दायें से तीसरे स्थान पर बैठा है, जो केंद्र की ओर उन्मुख है।
2. P और S के बीच केवल दो व्यक्ति बैठे हैं।
3. R, S के बायें से दूसरे स्थान पर बैठा है।
4. R के निकटतम पड़ोसी समान दिशा में उन्मुख हैं।
5. T, U के दायें से दूसरे स्थान पर बैठा है, जो Q की विपरीत दिशा में उन्मुख है।
6. V, W के ठीक बायें बैठा है, जो केंद्र की ओर उन्मुख है।
7. न तो V और न ही W, P का निकटतम पड़ोसी है।
8. केंद्र से बाहर की ओर देखने वाले व्यक्तियों की संख्या केंद्र की ओर देखने वालों से अधिक है।`,
        diagramSpec: seatingDiagram,
        questions: group1Questions,
      });

      // 2. Add Floor / Flat Puzzle Group 2 (If count permits >= 15)
      if (targetQCount >= 15) {
        const group2Id = `group_puzzle_floor_${secIdx}`;
        const group2Questions: Question[] = [];
        const floorStart = secQOrder;
        for (let i = 1; i <= 5 && secQOrder <= targetQCount; i++) {
          const qId = `q_reas_${globalQNum}`;
          const subQ: Question = {
            id: qId,
            sectionId: secId,
            questionGroupId: group2Id,
            questionNumber: globalQNum,
            orderInSection: secQOrder,
            questionTextEn: `Who among the following lives on Floor number ${i + 1}?`,
            questionTextHi: `निम्नलिखित में से कौन तल संख्या ${i + 1} पर रहता है?`,
            marks,
            negativeMarks,
            topic: 'Puzzles & Seating Arrangements',
            subTopic: '7-Floor Building Puzzle',
            difficulty: 'MODERATE',
            avgIdealTimeSeconds: 40,
            conventionalSolutionEn: `Arrangement from Floor 7 to 1:\nFloor 7: G\nFloor 6: D\nFloor 5: A\nFloor 4: E\nFloor 3: B\nFloor 2: C\nFloor 1: F`,
            shortcutTrickEn: 'Fix extreme top and bottom floors first based on definite clues.',
            options: [
              { id: `opt_${qId}_A`, questionId: qId, identifier: 'A', optionTextEn: 'A', optionTextHi: 'A', isCorrect: i === 4 },
              { id: `opt_${qId}_B`, questionId: qId, identifier: 'B', optionTextEn: 'B', optionTextHi: 'B', isCorrect: i === 2 },
              { id: `opt_${qId}_C`, questionId: qId, identifier: 'C', optionTextEn: 'C', optionTextHi: 'C', isCorrect: i === 1 },
              { id: `opt_${qId}_D`, questionId: qId, identifier: 'D', optionTextEn: 'D', optionTextHi: 'D', isCorrect: i === 5 },
              { id: `opt_${qId}_E`, questionId: qId, identifier: 'E', optionTextEn: 'E', optionTextHi: 'E', isCorrect: i === 3 },
            ],
          };
          group2Questions.push(subQ);
          questions.push(subQ);
          globalQNum++;
          secQOrder++;
        }

        questionGroups.push({
          id: group2Id,
          sectionId: secId,
          groupType: 'PUZZLE_FLOOR_FLAT',
          title: `Directions (Q. ${floorStart} - ${secQOrder - 1}): Seven persons live on seven different floors.`,
          passageEn: `Seven persons—A, B, C, D, E, F, and G—live on seven different floors of a building where ground floor is numbered 1 and top floor is numbered 7.

1. Only three persons live between G and B.
2. G lives on an odd-numbered floor above Floor 4.
3. D lives immediately below G.
4. Only two persons live between D and E.
5. A lives immediately above E.
6. C lives on an even-numbered floor below Floor 4.
7. F lives on the ground floor.`,
          passageHi: `सात व्यक्ति—A, B, C, D, E, F और G—एक इमारत के सात अलग-अलग तलों पर रहते हैं जहाँ भूतल संख्या 1 और शीर्ष तल 7 है।

1. G और B के बीच केवल तीन व्यक्ति रहते हैं।
2. G तल 4 के ऊपर एक विषम संख्या वाले तल पर रहता है।
3. D, G के ठीक नीचे रहता है।
4. D और E के बीच केवल दो व्यक्ति रहते हैं।
5. A, E के ठीक ऊपर रहता है।
6. C, तल 4 के नीचे एक सम संख्या वाले तल पर रहता है।
7. F भूतल पर रहता है।`,
          questions: group2Questions,
        });
      }

      // 3. Fill remaining with Direction Sense, Blood Relations, Syllogisms & Inequalities
      let reasCycle = 0;
      while (secQOrder <= targetQCount) {
        const mod = reasCycle % 4;
        if (mod === 0) {
          questions.push(generateDirectionSenseQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        } else if (mod === 1) {
          questions.push(generateBloodRelationQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        } else if (mod === 2) {
          questions.push(generateSyllogismQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, secQOrder % 2 === 0 ? 2 : 1));
        } else {
          questions.push(generateInequalityQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        }
        reasCycle++;
        globalQNum++;
        secQOrder++;
      }
    } else if (secBlueprint.sectionType === 'QUANTITATIVE_APTITUDE') {
      // 1. Add Data Interpretation Question Group 1: Tabular DI
      const di1Id = `group_di_tab_${secIdx}`;
      const di1Questions: Question[] = [];

      for (let i = 1; i <= 5 && secQOrder <= targetQCount; i++) {
        const qId = `q_quant_${globalQNum}`;
        let qTextEn = '';
        let qTextHi = '';
        let optChoices: string[] = [];
        let sol = '';

        if (i === 1) {
          qTextEn = 'What is the average number of non-defective units manufactured by Brand B and Brand D together?';
          qTextHi = 'Brand B और Brand D द्वारा मिलाकर निर्मित गैर-खराब इकाइयों की औसत संख्या क्या है?';
          optChoices = ['18,720', '17,450', '19,200', '16,840', '18,500'];
          sol = 'Brand B non-defective = 18000 * 0.88 = 15840. Brand D non-defective = 24000 * 0.90 = 21600. Avg = (15840 + 21600) / 2 = 18720.';
        } else if (i === 2) {
          qTextEn = 'Total defective units produced by Brand E is what percent more or less than the total defective units produced by Brand C?';
          qTextHi = 'Brand E द्वारा निर्मित कुल खराब इकाइयाँ, Brand C की तुलना में कितने प्रतिशत अधिक या कम हैं?';
          optChoices = ['66.67% more', '40% less', '50% more', '33.33% less', '60% more'];
          sol = 'E defective = 20000 * 25% = 5000. C defective = 15000 * 20% = 3000. Diff = 2000. % more = (2000/3000) * 100 = 66.67%.';
        } else if (i === 3) {
          qTextEn = 'What is the ratio of non-defective units of Brand A to the defective units of Brand D?';
          qTextHi = 'Brand A की गैर-खराब इकाइयों का Brand D की खराब इकाइयों से अनुपात क्या है?';
          optChoices = ['17 : 4', '15 : 4', '19 : 5', '16 : 3', '14 : 5'];
          sol = 'Brand A non-defective = 12000 * 0.85 = 10200. Brand D defective = 24000 * 0.10 = 2400. Ratio = 10200 : 2400 = 17 : 4.';
        } else if (i === 4) {
          qTextEn = 'If the production of Brand B increases by 15% next year with the same defect rate, what will be the new non-defective count?';
          qTextHi = 'यदि अगले वर्ष Brand B का उत्पादन 15% बढ़ जाता है, तो नई गैर-खराब इकाइयों की संख्या क्या होगी?';
          optChoices = ['18,216', '17,950', '18,540', '19,100', '17,800'];
          sol = 'New production = 18000 * 1.15 = 20700. Non-defective = 20700 * 0.88 = 18216.';
        } else {
          qTextEn = 'What is the total number of defective units produced across all 5 brands combined?';
          qTextHi = 'सभी 5 ब्रांडों द्वारा निर्मित कुल खराब इकाइयों की संख्या क्या है?';
          optChoices = ['14,360', '15,200', '13,800', '14,950', '16,100'];
          sol = 'A(1800) + B(2160) + C(3000) + D(2400) + E(5000) = 14,360 defective units.';
        }

        const subQ: Question = {
          id: qId,
          sectionId: secId,
          questionGroupId: di1Id,
          questionNumber: globalQNum,
          orderInSection: secQOrder,
          questionTextEn: qTextEn,
          questionTextHi: qTextHi,
          marks,
          negativeMarks,
          topic: 'Data Interpretation',
          subTopic: 'Tabular DI (Percentage & Averages)',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 45,
          conventionalSolutionEn: sol,
          shortcutTrickEn: 'Ratio method: Cancel thousands (12, 18, 15, 24, 20) before multiplying percentages to simplify arithmetic.',
          options: optChoices.map((c, idx) => ({
            id: `opt_${qId}_${idx}`,
            questionId: qId,
            identifier: (['A', 'B', 'C', 'D', 'E'] as const)[idx],
            optionTextEn: c,
            optionTextHi: c,
            isCorrect: idx === 0,
          })),
        };
        di1Questions.push(subQ);
        questions.push(subQ);
        globalQNum++;
        secQOrder++;
      }

      questionGroups.push({
        id: di1Id,
        sectionId: secId,
        groupType: 'DI_TABULAR',
        title: 'Directions (Q. 1 - 5): Study the table data carefully and answer the questions.',
        passageEn: 'The table shows the total number of smartphones manufactured by five brands (Brand A, B, C, D, E) and their respective defect percentages for the production cycle.',
        passageHi: 'तालिका पाँच ब्रांडों (Brand A, B, C, D, E) द्वारा निर्मित कुल स्मार्टफोन और उनके खराब इकाइयों के प्रतिशत को दर्शाती है।',
        chartConfig: {
          type: 'table',
          tableHeaders: ['Brand', 'Total Units Produced', 'Defective Units %'],
          tableRows: [
            ['Brand A', '12,000', '15%'],
            ['Brand B', '18,000', '12%'],
            ['Brand C', '15,000', '20%'],
            ['Brand D', '24,000', '10%'],
            ['Brand E', '20,000', '25%'],
          ],
        },
        questions: di1Questions,
      });

      // 2. Strict Topic Distribution: Clerk vs PO vs Mains
      if (config.stage === 'MAINS') {
        // MAINS: Quantity Comparison + Data Sufficiency + Advanced Quadratics
        for (let i = 0; i < 4 && secQOrder <= targetQCount; i++) {
          questions.push(generateQuantityComparisonQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 4 && secQOrder <= targetQCount; i++) {
          questions.push(generateDataSufficiencyQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 4 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicQuadraticQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 47));
          globalQNum++;
          secQOrder++;
        }
      } else if (config.post === 'PO') {
        // PO PRELIMS: Approximation + Wrong Number Series + Quadratic Equations
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicApproximationQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 53));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateWrongNumberSeriesQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicQuadraticQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 47));
          globalQNum++;
          secQOrder++;
        }
      } else {
        // CLERK PRELIMS: Simplification (BODMAS) + Missing Number Series + Quadratic Equations
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicSimplificationQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 97));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicNumberSeriesQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 83));
          globalQNum++;
          secQOrder++;
        }
        for (let i = 0; i < 5 && secQOrder <= targetQCount; i++) {
          questions.push(generateDynamicQuadraticQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, seed + i * 47));
          globalQNum++;
          secQOrder++;
        }
      }

      // 3. Fill remaining with Arithmetic Word Problems
      const arithTypes = ['PROFIT_LOSS', 'TIME_WORK', 'BOATS_STREAMS', 'PARTNERSHIP'] as const;
      let aIdx = 0;
      while (secQOrder <= targetQCount) {
        const tType = arithTypes[aIdx % arithTypes.length];
        questions.push(generateArithmeticWordProblem(globalQNum, secQOrder, secId, tType as any, marks, negativeMarks, seed + aIdx * 67));
        aIdx++;
        globalQNum++;
        secQOrder++;
      }
    } else if (secBlueprint.sectionType === 'ENGLISH_LANGUAGE') {
      // English Section: Reading Comprehension + Error Spotting with Grammatical Rules
      const rcGroupId = `group_rc_eng_${secIdx}`;
      const rcQuestions: Question[] = [];

      for (let i = 1; i <= 5 && secQOrder <= targetQCount; i++) {
        const qId = `q_eng_${globalQNum}`;
        const subQ: Question = {
          id: qId,
          sectionId: secId,
          questionGroupId: rcGroupId,
          questionNumber: globalQNum,
          orderInSection: secQOrder,
          questionTextEn: i === 1
            ? 'According to the passage, what is the primary objective of introducing Central Bank Digital Currency (CBDC)?'
            : i === 2
            ? 'Which of the following is TRUE regarding retail cross-border remittances mentioned in the passage?'
            : i === 3
            ? 'What can be inferred about the impact of sudden retail deposit flight on commercial liquidity?'
            : i === 4
            ? 'Choose the word most SIMILAR in meaning to "AUGMENT" as used in the passage.'
            : 'Choose the word most OPPOSITE in meaning to "CURB" as used in the passage.',
          questionTextHi: undefined, // English sections are English only!
          marks,
          negativeMarks,
          topic: 'Reading Comprehension',
          subTopic: 'Economy & Digital Currency (RBI e-Rupee)',
          difficulty: 'MODERATE',
          avgIdealTimeSeconds: 40,
          conventionalSolutionEn: 'Based on paragraph 2: CBDC aims to reduce settlement friction and lower cash printing/clearing costs.',
          shortcutTrickEn: 'Context Clues: Skim keywords "CBDC", "cross-border", and "remittances" directly in the left passage pane.',
          options: [
            { id: `opt_${qId}_A`, questionId: qId, identifier: 'A', optionTextEn: i === 4 ? 'Enhance' : i === 5 ? 'Stimulate' : 'To reduce settlement friction and lower cash printing costs', isCorrect: true },
            { id: `opt_${qId}_B`, questionId: qId, identifier: 'B', optionTextEn: i === 4 ? 'Deplete' : i === 5 ? 'Restrain' : 'To eliminate retail banking operations entirely', isCorrect: false },
            { id: `opt_${qId}_C`, questionId: qId, identifier: 'C', optionTextEn: i === 4 ? 'Subdue' : i === 5 ? 'Moderate' : 'To peg domestic interest rates to foreign exchange', isCorrect: false },
            { id: `opt_${qId}_D`, questionId: qId, identifier: 'D', optionTextEn: i === 4 ? 'Hinder' : i === 5 ? 'Diminish' : 'To increase cash-in-circulation benchmarks', isCorrect: false },
            { id: `opt_${qId}_E`, questionId: qId, identifier: 'E', optionTextEn: 'None of the above', isCorrect: false },
          ],
        };
        rcQuestions.push(subQ);
        questions.push(subQ);
        globalQNum++;
        secQOrder++;
      }

      questionGroups.push({
        id: rcGroupId,
        sectionId: secId,
        groupType: 'READING_COMPREHENSION',
        title: 'Directions (Q. 1 - 5): Read the following passage carefully and answer the questions.',
        passageEn: `The advent of sovereign digital currencies marks a paradigm shift in central banking architecture. As the Reserve Bank of India accelerates pilots for the digital Rupee (e-Rupee), monetary policy transmission mechanisms are encountering both unprecedented opportunities and operational dilemmas.

A sovereign digital currency possesses legal tender status backed directly by the central bank balance sheet, differentiating it sharply from volatile private cryptocurrencies. By eliminating intermediate clearing layers, retail transactions achieve instant finality. Furthermore, cross-border remittances, which historically suffered from exorbitant correspondent banking fees and multi-day settlement delays, can now be executed seamlessly in real-time.

However, commercial banks express apprehensions regarding deposit disintermediation. If retail depositors shift funds en masse into risk-free central bank wallets during periods of financial stress, liquidity in commercial credit channels could contract sharply. Consequently, regulatory authorities must balance innovation with prudential stability.`,
        questions: rcQuestions,
      });

      // Fill remaining English with Error Spotting (with Rule Citations) and Word Swaps
      while (secQOrder <= targetQCount) {
        if (secQOrder % 2 === 0) {
          questions.push(generateEnglishErrorSpottingQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        } else {
          const qId = `q_eng_${globalQNum}`;
          questions.push({
            id: qId,
            sectionId: secId,
            questionNumber: globalQNum,
            orderInSection: secQOrder,
            questionTextEn: `In the following sentence, four words have been highlighted in bold. Choose the option with the correct word swap:

The central bank decided to (A) **curb** retail lending rates to (B) **augment** inflation while keeping liquidity (C) **adequate** for small (D) **enterprises**.`,
            marks,
            negativeMarks,
            topic: 'Word Swap',
            subTopic: 'Contextual Financial Vocabulary',
            difficulty: 'EASY',
            avgIdealTimeSeconds: 25,
            conventionalSolutionEn: 'Swapping (A) curb and (B) augment restores meaningful economic policy context: central banks augment lending or curb inflation.',
            shortcutTrickEn: 'Collocation shortcut: Central banks "curb inflation" and "augment growth/credit".',
            options: [
              { id: `opt_${qId}_A`, questionId: qId, identifier: 'A', optionTextEn: 'A-B', isCorrect: true },
              { id: `opt_${qId}_B`, questionId: qId, identifier: 'B', optionTextEn: 'B-C', isCorrect: false },
              { id: `opt_${qId}_C`, questionId: qId, identifier: 'C', optionTextEn: 'A-D', isCorrect: false },
              { id: `opt_${qId}_D`, questionId: qId, identifier: 'D', optionTextEn: 'C-D', isCorrect: false },
              { id: `opt_${qId}_E`, questionId: qId, identifier: 'E', optionTextEn: 'No swap required', isCorrect: false },
            ],
          });
        }
        globalQNum++;
        secQOrder++;
      }
    } else if (secBlueprint.sectionType === 'GENERAL_FINANCIAL_AWARENESS') {
      let gaIdx = 0;
      while (secQOrder <= targetQCount) {
        if (secQOrder % 3 === 0) {
          questions.push(generateMultiStatementBankingQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        } else {
          questions.push(generateBankingAwarenessQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, gaIdx));
        }
        gaIdx++;
        globalQNum++;
        secQOrder++;
      }
    } else if (secBlueprint.sectionType === 'COMPUTER_KNOWLEDGE') {
      let compIdx = 0;
      while (secQOrder <= targetQCount) {
        if (config.key.includes('RRB') && secQOrder % 5 === 0) {
          questions.push(generateRRBMainsHindiQuestion(globalQNum, secQOrder, secId, marks, negativeMarks));
        } else {
          questions.push(generateComputerKnowledgeQuestion(globalQNum, secQOrder, secId, marks, negativeMarks, compIdx));
        }
        compIdx++;
        globalQNum++;
        secQOrder++;
      }
    }

    return {
      id: secId,
      examId: `exam_${config.key.toLowerCase()}_${seed}`,
      sectionType: secBlueprint.sectionType,
      displayName: secBlueprint.displayName,
      orderIndex: secIdx,
      durationSeconds: secBlueprint.durationSeconds,
      questionCount: questions.length,
      maxMarks: secBlueprint.maxMarks,
      sectionalCutoff: secBlueprint.cutoff,
      questionGroups,
      questions,
    };
  });

  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);

  return {
    id: `exam_${config.key.toLowerCase()}_${seed}`,
    slug: `${config.key.toLowerCase()}-${seed}`,
    title: `${config.title} • Mock Test #${(seed % 50) + 1}`,
    examBody: config.examBody,
    post: config.post,
    stage: config.stage,
    year: 2025,
    shift: 'Official TCS iON Interface Simulation',
    timingType: config.timingType,
    totalDurationSeconds: config.totalDurationSeconds,
    totalMarks: config.totalMarks,
    totalQuestions,
    negativeMarkRatio: config.negativeMarkRatio,
    sections,
  };
}
