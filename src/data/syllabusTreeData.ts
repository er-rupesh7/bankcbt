// src/data/syllabusTreeData.ts

import { CompleteSyllabusData } from '@/types/syllabusTree';

export const OFFICIAL_SYLLABUS_TREE: CompleteSyllabusData = {
  syllabus: [
    {
      id: 'quant',
      name: 'Quantitative Aptitude',
      icon: '📐',
      exam_types: ['Prelims', 'Mains'],
      clusters: [
        {
          id: 'cluster_speed_math',
          name: 'Speed Math & Calculation Cluster',
          weightage: '10-15 Marks (Clerk Pre) | 5 Marks (PO Pre)',
          accentColor: '#2563eb',
          topics: [
            {
              id: 'topic_simplification_approx',
              name: 'Simplification & Approximation',
              stageTag: 'PRELIMS',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_bodmas',
                  name: 'BODMAS & Bracket Operations',
                  techniques: [
                    'Order of Precedence (VBODMAS)',
                    'Nested bracket elimination',
                  ],
                },
                {
                  id: 'sub_surds_indices',
                  name: 'Surds, Indices & Powers',
                  techniques: [
                    'Base conversion laws',
                    'Fractional power simplification',
                  ],
                },
                {
                  id: 'sub_decimals_approx',
                  name: 'Decimal & Approximate Calculations',
                  techniques: [
                    'Safe rounding off (0.98 -> 1.0, 0.49 -> 0.5)',
                    'Range estimation and boundary checks',
                  ],
                },
              ],
              speed_arsenal: [
                'Fraction-to-Percentage conversion matrix (1/1 through 1/25)',
                'Squares up to 50 & Cubes up to 30 rote recall',
                'Digital Sum / Digital Root for direct option elimination',
                'Base 100 / Base 50 fast multiplication technique',
                'Split-and-Merge mental addition/subtraction',
              ],
              speed_arsenal_tooltips: {
                'Fraction-to-Percentage conversion matrix (1/1 through 1/25)':
                  'e.g. 1/14 = 7.14%, 1/16 = 6.25%, 1/7 = 14.28% enables evaluating 14.28% of 490 = (1/7) × 490 = 70 in 2 seconds.',
                'Squares up to 50 & Cubes up to 30 rote recall':
                  'e.g. 42² = 1764, 46² = 2116, 17³ = 4913, 19³ = 6859 instantly eliminate 30 seconds of paper calculation.',
                'Digital Sum / Digital Root for direct option elimination':
                  'e.g. In 45% of 600 + 14 × 15 = ?², sum of digits LHS = 9 + 3 = 12 -> 3; eliminate options whose digital root != 3.',
                'Base 100 / Base 50 fast multiplication technique':
                  'e.g. 96 × 94 = (96 - 6) × 100 + (-4) × (-6) = 9024; 104 × 107 = (104 + 7) × 100 + 4 × 7 = 11128.',
                'Split-and-Merge mental addition/subtraction':
                  'e.g. 486 + 328 = (480 + 320) + (6 + 8) = 800 + 14 = 814.',
              },
            },
            {
              id: 'topic_number_series',
              name: 'Missing & Wrong Number Series',
              stageTag: 'PRELIMS',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_diff_series',
                  name: 'Difference Series',
                  techniques: [
                    'Single-step differences',
                    'Double / Triple difference ladders',
                  ],
                },
                {
                  id: 'sub_mult_alt_series',
                  name: 'Multiplication & Alternating Patterns',
                  techniques: [
                    'Decimal multipliers (*0.5, *1.5, *2.5)',
                    'Alternating +/- arithmetic steps',
                  ],
                },
                {
                  id: 'sub_special_series',
                  name: 'Special Series',
                  techniques: [
                    'n² ± k, n³ ± k patterns',
                    'Fibonacci and prime number ladders',
                  ],
                },
              ],
              speed_arsenal: [
                'Steep slope check (Multiplication vs. Addition detection)',
                'Wrong term pinpointing using boundary difference verification',
              ],
              speed_arsenal_tooltips: {
                'Steep slope check (Multiplication vs. Addition detection)':
                  'e.g. 4, 11, 35, 143 shows steep exponential slope (×3-1, ×3+2, ×4+3) versus shallow linear difference ladders.',
                'Wrong term pinpointing using boundary difference verification':
                  'e.g. If consecutive differences are 6, 12, 19, 31, the two consecutive abnormal diffs (19, 31) flag the middle number as the wrong term.',
              },
            },
            {
              id: 'topic_quadratic_equations',
              name: 'Quadratic & Inequality Comparisons',
              stageTag: 'PRELIMS',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_std_quadratics',
                  name: 'Standard Quadratics (ax² + bx + c = 0)',
                  techniques: [
                    'Sign rule matrix (+, + -> -, - | -, + -> +, +)',
                    'Root factoring without quadratic formula',
                  ],
                },
                {
                  id: 'sub_adv_quadratics',
                  name: 'Advanced Mains Equations',
                  techniques: [
                    'Square root coefficient equations (ax² + √k bx + c = 0)',
                    'Cubic equations and power comparisons',
                  ],
                },
              ],
              speed_arsenal: [
                'Direct sign-table deduction (eliminates solving in 5 seconds)',
                'Coefficient equalization shortcut',
              ],
              speed_arsenal_tooltips: {
                'Direct sign-table deduction (eliminates solving in 5 seconds)':
                  'e.g. ax² - bx - c = 0 has (+, -) roots; if both constant terms are negative in equations I & II, the relationship is ALWAYS CND.',
                'Coefficient equalization shortcut':
                  'e.g. In 2x² - 7x + 6 = 0 and 4y² - 15y + 14 = 0, multiply roots of x by 2 to compare with y directly without fraction divisions.',
              },
            },
          ],
        },
        {
          id: 'cluster_arithmetic_core',
          name: 'Commercial Arithmetic Core',
          weightage: '10-12 Marks (Pre) | 15-20 Marks (Mains)',
          accentColor: '#059669',
          topics: [
            {
              id: 'topic_percentages_pl',
              name: 'Percentages, Profit, Loss & Discount',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_perc_successive',
                  name: 'Percentages & Successive Change',
                  techniques: [
                    'Formula: a + b + (ab/100)',
                    'Fraction-multiplier transitions (e.g., 16.66% = 1/6)',
                  ],
                },
                {
                  id: 'sub_profit_markup',
                  name: 'Profit, Loss & Markup',
                  techniques: [
                    'Cost Price to Marked Price chain',
                    'Dishonest shopkeeper false-weight ratio method',
                  ],
                },
              ],
              speed_arsenal: [
                'Ratio scaling method for multi-step discounts',
                '100-Base assumption for quick marked-price calculation',
              ],
              speed_arsenal_tooltips: {
                'Ratio scaling method for multi-step discounts':
                  'e.g. Discounts of 20% and 10% mean multiplier (4/5) × (9/10) = 36/50 = 72% SP -> 28% net discount.',
                '100-Base assumption for quick marked-price calculation':
                  'e.g. Profit 20%, discount 10% -> CP : MP = (100 - D) : (100 + P) = 90 : 120 = 3 : 4.',
              },
            },
            {
              id: 'topic_ratio_partnership',
              name: 'Ratio, Proportion, Ages & Partnership',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_ratio_merging',
                  name: 'Ratio Merging & Proportions',
                  techniques: [
                    'A:B and B:C bridging',
                    'Cross-multiplication trick for increment/decrement',
                  ],
                },
                {
                  id: 'sub_partnership_profit',
                  name: 'Partnership',
                  techniques: [
                    'Investment × Time = Profit ratio rule',
                    'Active vs. Sleeping partner salary deduction',
                  ],
                },
              ],
              speed_arsenal: [
                'Age difference constancy rule',
                'Direct unit-value equating',
              ],
              speed_arsenal_tooltips: {
                'Age difference constancy rule':
                  'e.g. The difference between Father and Son remains identical across any number of years; equate difference units directly.',
                'Direct unit-value equating':
                  'e.g. (4 × 7 - 5 × 8) units = (-48 - 84) -> 12 units = 132 -> 1 unit = 11.',
              },
            },
            {
              id: 'topic_time_work_pipes',
              name: 'Time & Work, Pipes & Cisterns',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_efficiency_work',
                  name: 'Efficiency & Group Work',
                  techniques: [
                    'Total work = LCM of days',
                    'Negative work (Leakages / Emptying pipes)',
                  ],
                },
                {
                  id: 'sub_alternate_days',
                  name: 'Variable & Alternate Day Work',
                  techniques: [
                    'Cyclic unit method for alternate days',
                    'M1×D1×H1 / W1 = M2×D2×H2 / W2 chain formula',
                  ],
                },
              ],
              speed_arsenal: [
                'Unit efficiency grid (eliminates fractional work additions)',
              ],
              speed_arsenal_tooltips: {
                'Unit efficiency grid (eliminates fractional work additions)':
                  'e.g. A in 18d, B in 24d -> LCM 72 units. Eff A = 4, B = 3. Together 7 units/day; eliminates 1/18 + 1/24 fractions completely.',
              },
            },
            {
              id: 'topic_tsd_trains_boats',
              name: 'Time, Speed, Distance, Trains & Boats',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_speed_conversions',
                  name: 'Speed Conversions & Average Speed',
                  techniques: [
                    'km/h to m/s conversion factor (5/18)',
                    'Harmonic mean for equal distances: 2xy/(x+y)',
                  ],
                },
                {
                  id: 'sub_relative_speed',
                  name: 'Relative Speed & Trains',
                  techniques: [
                    'Same direction (s1 - s2), Opposite (s1 + s2)',
                    'Train passing pole vs. train passing platform length additions',
                  ],
                },
                {
                  id: 'sub_boats_streams',
                  name: 'Boats & Streams',
                  techniques: [
                    'Downstream = u + v, Upstream = u - v',
                    'Still water speed = (Downstream + Upstream)/2',
                  ],
                },
              ],
              speed_arsenal: [
                'Proportionality rules (Time inversely proportional to Speed when D is constant)',
                'Relative speed offset calculation',
              ],
              speed_arsenal_tooltips: {
                'Proportionality rules (Time inversely proportional to Speed when D is constant)':
                  'e.g. Speed ratio 4 : 5 means time ratio is 5 : 4; 1 unit difference = 15 mins late -> original time = 5 × 15 = 75 mins.',
                'Relative speed offset calculation':
                  'e.g. 72 km/h = 20 m/s; crosses 260m platform in 23s -> total distance 460m -> train length = 200m -> crosses pole in 200/20 = 10s.',
              },
            },
            {
              id: 'topic_sici',
              name: 'Simple & Compound Interest',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_si_fundamentals',
                  name: 'Simple Interest Fundamentals',
                  techniques: [
                    'P×R×T/100 direct substitutions',
                    'Principal-amount ratio changes',
                  ],
                },
                {
                  id: 'sub_ci_differences',
                  name: 'Compound Interest & Differences',
                  techniques: [
                    'Effective percentage rates for CI (e.g., 2 yrs @ 10% = 21%)',
                    'Difference formulas: 2 Years = P×(R/100)²',
                  ],
                },
              ],
              speed_arsenal: [
                "Pascal's Triangle Ratio Method (2:1 for 2 yrs, 3:3:1 for 3 yrs)",
                'Effective CI rate tables',
              ],
              speed_arsenal_tooltips: {
                "Pascal's Triangle Ratio Method (2:1 for 2 yrs, 3:3:1 for 3 yrs)":
                  'e.g. CI on 10,000 @ 10% for 3 yrs: 1000, 100, 10. Multipliers 3:3:1 -> 3(1000) + 3(100) + 1(10) = Rs. 3,310 in 15 seconds.',
                'Effective CI rate tables':
                  'e.g. 5% for 2 yrs = 10.25%, 10% for 2 yrs = 21%, 15% for 2 yrs = 32.25%. Multiply directly with Principal.',
              },
            },
            {
              id: 'topic_mixtures',
              name: 'Mixtures, Alligations & Averages',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_alligation_replacement',
                  name: 'Weighted Averages & Replacement',
                  techniques: [
                    'Rule of Alligation cross-diagram',
                    'Repeated liquid withdrawal & replacement formula: Final = Initial × (1 - x/V)ⁿ',
                  ],
                },
              ],
              speed_arsenal: [
                'Mean balancing deviation method for averages',
              ],
              speed_arsenal_tooltips: {
                'Mean balancing deviation method for averages':
                  'e.g. In an average of 45: values 42, 48, 51 have deviations -3, +3, +6 -> net +6 distributed over remaining items.',
              },
            },
          ],
        },
        {
          id: 'cluster_di_data',
          name: 'Data Interpretation & Sufficiency Cluster',
          weightage: '10-15 Marks (Pre) | 25-35 Marks (Mains)',
          accentColor: '#7c3aed',
          topics: [
            {
              id: 'topic_basic_di',
              name: 'Standard Tabular & Graphical DI',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_tables_charts',
                  name: 'Tables, Bar Charts & Line Graphs',
                  techniques: ['Fast column additions', 'Visual trend tracking'],
                },
                {
                  id: 'sub_pie_charts',
                  name: 'Pie Charts (Single & Dual)',
                  techniques: ['Degree-to-Percentage conversion (360° = 100%, 3.6° = 1%)'],
                },
              ],
              speed_arsenal: [
                'Relative % difference shortcuts without calculating base absolute numbers',
                'Visual ratio approximations',
              ],
              speed_arsenal_tooltips: {
                'Relative % difference shortcuts without calculating base absolute numbers':
                  'e.g. Compare 24% of 5000 and 18% of 5000 directly as (24-18)/18 = 6/18 = 33.33% without calculating 1200 and 900.',
                'Visual ratio approximations':
                  'e.g. Ratio of bar height A to B estimated as 3.2 : 4.8 = 2 : 3.',
              },
            },
            {
              id: 'topic_advanced_di',
              name: 'Advanced Caselet & Mains Arithmetic DI',
              stageTag: 'MAINS',
              badgeTag: 'Mains Advanced',
              subtopics: [
                {
                  id: 'sub_caselets_venn',
                  name: 'Caselets & Paragraph DI',
                  techniques: ['2-Circle & 3-Circle Venn diagrams', 'Paragraph-to-Table mapping'],
                },
                {
                  id: 'sub_arithmetic_di',
                  name: 'Arithmetic-Based DI',
                  techniques: ['DI on TSD/Radar graphs', 'Missing Value Tables with Profit/Loss rules'],
                },
              ],
              speed_arsenal: [
                'Residual value table formulation',
                'Variable constraints deduction',
              ],
              speed_arsenal_tooltips: {
                'Residual value table formulation':
                  'e.g. Fill known table cells first, sum rows and columns to reveal missing variables via simultaneous subtraction.',
              },
            },
            {
              id: 'topic_data_sufficiency',
              name: 'Data Sufficiency & Quantity Comparisons (Q1 vs Q2)',
              stageTag: 'MAINS',
              badgeTag: 'Mains Advanced',
              subtopics: [
                {
                  id: 'sub_two_three_ds',
                  name: 'Two-Statement & Three-Statement DS',
                  techniques: ['Sufficiency check without computing final values'],
                },
                {
                  id: 'sub_qty_comparisons',
                  name: 'Quantity Comparisons',
                  techniques: ['Direct boundary comparison'],
                },
              ],
              speed_arsenal: [
                'Stop-early heuristic: Check sufficiency at the equation formulation stage',
              ],
              speed_arsenal_tooltips: {
                'Stop-early heuristic: Check sufficiency at the equation formulation stage':
                  'e.g. 2 linear independent equations in 2 variables are ALWAYS sufficient; stop solving immediately and mark Option (E).',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'reasoning',
      name: 'Reasoning Ability',
      icon: '🧩',
      exam_types: ['Prelims', 'Mains'],
      clusters: [
        {
          id: 'cluster_puzzles',
          name: 'Puzzles & Seating Arrangements Cluster',
          weightage: '15-20 Marks (Pre) | 20-25 Marks (Mains)',
          accentColor: '#9333ea',
          topics: [
            {
              id: 'topic_seating',
              name: 'Seating Arrangements',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_circular_square',
                  name: 'Circular & Square/Rectangular Tables',
                  techniques: ['Inward/Outward facing conditions', 'Corner vs. Edge rules'],
                },
                {
                  id: 'sub_linear_parallel',
                  name: 'Linear Row & Parallel Rows',
                  techniques: ['North-South facing', 'Thread Method for single-line'],
                },
              ],
              speed_arsenal: [
                'Maximum possibility branch pruning (limit to 2 simultaneous cases)',
                'Definite clue prioritization',
              ],
              speed_arsenal_tooltips: {
                'Maximum possibility branch pruning (limit to 2 simultaneous cases)':
                  'e.g. Start with the most restrictive definite clue (e.g. sits at extreme end) and draw Case 1 & Case 2 in parallel.',
                'Definite clue prioritization':
                  'e.g. Skip indefinite clues like "P sits somewhere between Q and R" until absolute anchors are plotted.',
              },
            },
            {
              id: 'topic_puzzles_matrix',
              name: 'Classification & Scheduling Puzzles',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_floor_flat',
                  name: 'Floor & Flat Matrix Puzzles',
                  techniques: ['Floor-Flat coordinate grid', 'Vacant flat scenarios'],
                },
                {
                  id: 'sub_box_scheduling',
                  name: 'Box Stacking & Day/Month Scheduling',
                  techniques: ['Fixed reference timeline mapping', 'Gap-count conditions'],
                },
              ],
              speed_arsenal: [
                'Anchor element assignment',
                'Contradiction filtering',
              ],
              speed_arsenal_tooltips: {
                'Anchor element assignment':
                  'e.g. In month-date puzzles, draw Month & Dates (e.g. Jan 7, 14; Mar 7, 14) as the fixed vertical spine first.',
                'Contradiction filtering':
                  'e.g. Test negative clues ("G does not live on even floor") immediately to eliminate secondary case within 2 steps.',
              },
            },
          ],
        },
        {
          id: 'cluster_logical_reasoning',
          name: 'Miscellaneous & Logical Reasoning',
          weightage: '15-20 Marks (Pre) | 10-15 Marks (Mains)',
          accentColor: '#d97706',
          topics: [
            {
              id: 'topic_syllogism',
              name: 'Syllogisms (New Pattern)',
              stageTag: 'BOTH',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_only_few',
                  name: 'Only a Few / Only Conditions',
                  techniques: ['Venn intersection with restricted boundary'],
                },
                {
                  id: 'sub_possibility',
                  name: 'Possibility & Negation',
                  techniques: ['Definite false vs. possibility testing'],
                },
              ],
              speed_arsenal: [
                'Complimentary pairs for Either-Or (Some + No, Some + Some-Not)',
              ],
              speed_arsenal_tooltips: {
                'Complimentary pairs for Either-Or (Some + No, Some + Some-Not)':
                  'e.g. When both conclusions are individually indeterminate and share same subject-predicate, Either-Or is triggered.',
              },
            },
            {
              id: 'topic_inequalities',
              name: 'Inequalities',
              stageTag: 'PRELIMS',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_direct_coded_ineq',
                  name: 'Direct & Coded Inequalities',
                  techniques: ['Open Gate / Closed Gate symbol traversal'],
                },
              ],
              speed_arsenal: [
                'Direct path continuity check without pen-paper',
              ],
              speed_arsenal_tooltips: {
                'Direct path continuity check without pen-paper':
                  'e.g. A > B ≥ C = D > E: travel from A to E is unobstructed with strict > symbol -> A > E is verified in 5s.',
              },
            },
            {
              id: 'topic_blood_direction',
              name: 'Blood Relations & Direction Sense',
              stageTag: 'PRELIMS',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_family_tree',
                  name: 'Family Tree Diagrams',
                  techniques: ['Generation level grid (+/- for gender)'],
                },
                {
                  id: 'sub_direction_distance',
                  name: 'Direction & Distance',
                  techniques: [
                    'Pythagoras triplets (3-4-5, 5-12-13, 8-15-17), Coded directions',
                  ],
                },
              ],
              speed_arsenal: [
                'Self-referencing generation markers',
              ],
              speed_arsenal_tooltips: {
                'Self-referencing generation markers':
                  'e.g. "Pointing to a man, woman said: He is son of only brother of my mother" -> Mother\'s brother is Uncle -> Uncle\'s son is Cousin.',
              },
            },
            {
              id: 'topic_coding_series',
              name: 'Coding-Decoding & Alphanumeric Series',
              stageTag: 'BOTH',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_substitution_coding',
                  name: 'Chinese / Substitution Coding',
                  techniques: ['Word-symbol commonality cancellation'],
                },
                {
                  id: 'sub_mains_coding',
                  name: 'New Pattern Machine Coding (Mains)',
                  techniques: ['Alphabet rank forward/backward (EJOTY rules)'],
                },
              ],
              speed_arsenal: [
                'Reverse alphabet rank mapping (Pair sum = 27)',
              ],
              speed_arsenal_tooltips: {
                'Reverse alphabet rank mapping (Pair sum = 27)':
                  'e.g. A(1) opposite Z(26), B(2) opposite Y(25), C(3) opposite X(24); sum of opposite letters is ALWAYS 27.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English Language',
      icon: '📖',
      exam_types: ['Prelims', 'Mains'],
      clusters: [
        {
          id: 'cluster_reading',
          name: 'Reading & Discourse Cluster',
          weightage: '10-15 Marks (Pre) | 15-20 Marks (Mains)',
          accentColor: '#059669',
          topics: [
            {
              id: 'topic_rc',
              name: 'Reading Comprehension & Inferences',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_tone_theme',
                  name: 'Tone, Central Theme & Title',
                  techniques: [
                    'Skimming first and last paragraphs',
                    'Author stance identification',
                  ],
                },
                {
                  id: 'sub_direct_inference',
                  name: 'Direct & Inference Questions',
                  techniques: [
                    'Keyword scanning in passage',
                    'Fact vs. Inference isolation',
                  ],
                },
              ],
              speed_arsenal: [
                'Extreme-word option elimination (Always, Never, Only, Completely)',
              ],
              speed_arsenal_tooltips: {
                'Extreme-word option elimination (Always, Never, Only, Completely)':
                  'e.g. In banking RC, options containing absolute extremes like "entirely obsolete" or "never fails" are wrong 95% of the time.',
              },
            },
            {
              id: 'topic_cloze_parajumble',
              name: 'Cloze Test & Parajumbles',
              stageTag: 'BOTH',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_cloze_test',
                  name: 'Contextual Cloze Test',
                  techniques: ['Collocations and prepositional pairing'],
                },
                {
                  id: 'sub_parajumbles',
                  name: 'Sentence Rearrangement / Parajumbles',
                  techniques: ['Mandatory pair detection', 'Pronoun-Noun link'],
                },
              ],
              speed_arsenal: [
                'Independent opening sentence deduction',
              ],
              speed_arsenal_tooltips: {
                'Independent opening sentence deduction':
                  'e.g. A sentence starting with "This initiative", "However", or "They" can never be sentence 1; locate the noun introducer.',
              },
            },
          ],
        },
        {
          id: 'cluster_grammar_vocab',
          name: 'Applied Grammar & Vocabulary',
          weightage: '15-20 Marks (Pre) | 10-15 Marks (Mains)',
          accentColor: '#0284c7',
          topics: [
            {
              id: 'topic_error_detection',
              name: 'Error Spotting & Sentence Improvement',
              stageTag: 'BOTH',
              badgeTag: 'Speed Drill',
              subtopics: [
                {
                  id: 'sub_core_grammar',
                  name: 'Core Grammar Rules',
                  techniques: ['Subject-Verb agreement, Parallelism, Modifiers'],
                },
                {
                  id: 'sub_tense_conditionals',
                  name: 'Tense & Conditional Statements',
                  techniques: ['If-clauses and subjunctive mood rules'],
                },
              ],
              speed_arsenal: [
                'Split-sentence 5-point verification checklist',
              ],
              speed_arsenal_tooltips: {
                'Split-sentence 5-point verification checklist':
                  'e.g. Check: 1) Subject-Verb match, 2) Pronoun number, 3) Parallelism (and/or), 4) Preposition pairing, 5) Modifier proximity.',
              },
            },
            {
              id: 'topic_vocab_usage',
              name: 'Vocabulary & Word Usage',
              stageTag: 'BOTH',
              badgeTag: 'Prelims Core',
              subtopics: [
                {
                  id: 'sub_fillers',
                  name: 'Fillers (Single, Double, Triple)',
                  techniques: ['Positive/Negative connotation matching'],
                },
                {
                  id: 'sub_word_swap',
                  name: 'Word Swap & Misspelt Words',
                  techniques: ['Contextual suitability'],
                },
              ],
              speed_arsenal: [
                'Prefix/Suffix tone filtering',
              ],
              speed_arsenal_tooltips: {
                'Prefix/Suffix tone filtering':
                  'e.g. "Bene-", "Pro-" indicate positive tone; "Mal-", "Dis-", "De-" indicate negative tone; align with blank context.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'general_awareness',
      name: 'General & Banking Awareness',
      icon: '🏛️',
      exam_types: ['Mains'],
      clusters: [
        {
          id: 'cluster_banking_awareness',
          name: 'Banking Awareness & Financial Systems',
          weightage: '20-25 Marks (Mains)',
          accentColor: '#ea580c',
          topics: [
            {
              id: 'topic_rbi_monetary',
              name: 'RBI Structure, Monetary Policy & Instruments',
              stageTag: 'MAINS',
              badgeTag: 'Mains Advanced',
              subtopics: [
                {
                  id: 'sub_policy_rates',
                  name: 'Quantitative Tools (CRR, SLR, Repo, Reverse Repo, MSF, SDF)',
                  techniques: ['Rate transmission mechanisms', 'LAF window operation'],
                },
                {
                  id: 'sub_banking_history',
                  name: 'Nationalization, Scheduled Commercial Banks & Small Finance Banks',
                  techniques: ['Capital adequacy norms', 'Priority Sector Lending (PSL) targets'],
                },
              ],
              speed_arsenal: [
                'PSL target table rote recall (40% for domestic banks, 75% for RRBs/SFBs)',
              ],
              speed_arsenal_tooltips: {
                'PSL target table rote recall (40% for domestic banks, 75% for RRBs/SFBs)':
                  'e.g. Domestic SCBs must lend 40% of ANBC to PSL; RRBs and Small Finance Banks must lend 75% of ANBC.',
              },
            },
            {
              id: 'topic_fintech_payments',
              name: 'Digital Banking & NPCI Ecosystem',
              stageTag: 'MAINS',
              badgeTag: 'High Frequency',
              subtopics: [
                {
                  id: 'sub_npci_products',
                  name: 'UPI, IMPS, RTGS, NEFT & NACH Limits',
                  techniques: ['Settlement cycle batch vs. gross real-time', 'Transaction ceilings'],
                },
              ],
              speed_arsenal: [
                'Payment gateway ceiling cheat sheet (RTGS min 2 Lakhs, UPI standard 1 Lakh/5 Lakh for hospitals/education)',
              ],
              speed_arsenal_tooltips: {
                'Payment gateway ceiling cheat sheet (RTGS min 2 Lakhs, UPI standard 1 Lakh/5 Lakh for hospitals/education)':
                  'e.g. RTGS operates 24x7 for transactions >= Rs. 2,00,000; NEFT has no minimum ceiling.',
              },
            },
          ],
        },
      ],
    },
  ],
};
