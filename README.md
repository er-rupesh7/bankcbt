# 🏦 TCS iON Indian Banking Exam Simulation Engine & CBT Mock Test Platform

> **Production-Grade EdTech CBT Platform and Syllabus-Strict Question Paper Setter for SBI, IBPS, and RRB (Prelims & Mains).**  
> Replicating the **exact pixel-accurate TCS iON examination interface** used in real Indian banking recruitment exams, coupled with reverse-constructed reasoning puzzles, arithmetic speed engines, SVG diagram rendering, and 4-quadrant fatal time-trap diagnostics.

---

## 📌 Table of Contents
- [Executive Overview](#-executive-overview)
- [Core Value Proposition](#-core-value-proposition)
- [Official Exam Matrix & Syllabus Calibration (12 Exams)](#-official-exam-matrix--syllabus-calibration-12-exams)
- [Authentic TCS iON Exam Engine Features](#-authentic-tcs-ion-exam-engine-features)
  - [Candidate Profile & Environment](#candidate-profile--environment)
  - [The 5-State Question Palette](#the-5-state-question-palette)
  - [Sectional Timing & Navigation Locks](#sectional-timing--navigation-locks)
  - [Dual-Pane Context & Question Workspace](#dual-pane-context--question-workspace)
- [AI Question Generation & Paper Setter Architecture](#-ai-question-generation--paper-setter-architecture)
  - [Quantitative Aptitude & Data Interpretation](#1-quantitative-aptitude--data-interpretation)
  - [Reasoning Ability & Puzzle Reverse-Construction](#2-reasoning-ability--puzzle-reverse-construction)
  - [English Language & Rajbhasha Hindi](#3-english-language--rajbhasha-hindi)
  - [General, Banking & Computer Awareness](#4-general-banking--computer-awareness)
- [Technical Diagram & SVG Graphics Engine](#-technical-diagram--svg-graphics-engine)
- [Post-Exam Diagnostics & The 4-Quadrant Time-Trap Matrix](#-post-exam-diagnostics--the-4-quadrant-time-trap-matrix)
- [Technical Architecture & Technology Stack](#-technical-architecture--technology-stack)
- [SEO Architecture & Brand Identity](#-seo-architecture--brand-identity)
- [Database Schema (Prisma)](#-database-schema-prisma)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Directory Structure](#-directory-structure)

---

## 🎯 Executive Overview

Every year, over **3.5 million Indian aspirants** compete for high-stakes banking recruitment exams conducted by:
1. **State Bank of India (SBI)**: SBI PO (Probationary Officer) & SBI Clerk (Junior Associates)
2. **Institute of Banking Personnel Selection (IBPS)**: IBPS PO & IBPS Clerk
3. **Regional Rural Banks (IBPS RRB)**: RRB Officer Scale-I (PO) & RRB Office Assistant (Clerk)

In real exam halls, all of these exams are delivered exclusively via the **Tata Consultancy Services (TCS) iON Assessment Platform**. Most existing EdTech platforms provide generic, rounded quiz interfaces that fail to build **subconscious muscle memory** for the actual test day. Aspirants frequently lose critical minutes struggling with:
- Strict sectional timing countdowns and irreversible auto-advance locks.
- Complex question palette state rules (specifically the critical rule regarding *Answered & Marked for Review*).
- Left-right split screen scrolling between lengthy reading comprehension passages or tabular DI and the options.
- Fatal time-traps (spending $>90$ seconds on a deceptive question and abandoning or guessing it).

**This platform is an exact, high-fidelity reproduction of the real TCS iON examination terminal**, combined with an authentic, syllabus-calibrated Question Paper Setter that generates unique, uniquely solvable test sets with realistic calculation traps and visual diagrams.

---

## ⚡ Core Value Proposition

| Dimension | Generic Quiz Apps | This Platform (TCS iON Standard) |
|---|---|---|
| **Interface Fidelity** | Modern pastel dashboards | **100% Authentic TCS iON Terminal Layout** (Navy `#0E3B64` header, exact border radii, font zoom controls) |
| **Candidate Identity** | Generic profile | **Candidate "Karna"** with System Node `C042` and Roll Number `2408199201` |
| **Question Palette** | 2–3 simple states | **Official 5-State Palette** with exact evaluation semantics (Purple + Green Dot strictly scored) |
| **Timing Constraints** | Loose free timers | **Hard Sectional Locking** (auto-advance upon expiry) or **Composite 45-min Timing** (RRB) |
| **Marking Penalties** | Flat -0.25 | **Exact Dynamic Penalties** ($0.25 \times \text{Marks}$, e.g. $+1.143 \to -0.286$; $+2.00 \to -0.50$) |
| **Puzzle Generation** | Random ambiguous clues | **Reverse-Constructed Master Grids** with verified unique solvability |
| **Diagram Support** | Static stock images or none | **Vector SVG Engine** for Seating circles, Syllogism Venn diagrams, Direction paths, and Family trees |
| **Analytics Engine** | Simple score breakdown | **4-Quadrant Speed-Accuracy Matrix** identifying fatal $>90\text{s}$ time-traps |

---

## 📊 Official Exam Matrix & Syllabus Calibration (12 Exams)

The platform provides a pre-exam gateway where candidates select their exact target exam and stage. The engine configures the exact question counts, marks, penalties, and timers according to the official examination notification:

| Exam Key | Post | Stage | Total Qs | Total Marks | Timing Mode | Sectional Breakdown |
|---|---|---|---|---|---|---|
| `SBI_PO_PRELIMS` | PO | Prelims | 100 | 100 | Sectional Lock (60m) | Eng (40 Qs, 40m), Quant (30 Qs, 20m), Reas (30 Qs, 20m) |
| `SBI_PO_MAINS` | PO | Mains | 155 | 200 | Sectional Lock (180m) | Reas & Comp (45 Qs, 60m), Data Analysis (35 Qs, 45m), GA (50 Qs, 45m), Eng (35 Qs, 40m) |
| `SBI_CLERK_PRELIMS` | Clerk | Prelims | 100 | 100 | Sectional Lock (60m) | Eng (30 Qs, 20m), Quant (35 Qs, 20m), Reas (35 Qs, 20m) |
| `SBI_CLERK_MAINS` | Clerk | Mains | 190 | 200 | Sectional Lock (160m) | GA (50 Qs, 35m), Eng (40 Qs, 35m), Quant (50 Qs, 45m), Reas & Comp (50 Qs, 45m) |
| `IBPS_PO_PRELIMS` | PO | Prelims | 100 | 100 | Sectional Lock (60m) | Eng (30 Qs, 20m [1.0M]), Quant (35 Qs, 20m [0.857M]), Reas (35 Qs, 20m [1.143M]) |
| `IBPS_PO_MAINS` | PO | Mains | 155 | 200 | Sectional Lock (180m) | Reas & Comp (45 Qs, 60m), Data Analysis (35 Qs, 45m), GA (40 Qs, 35m), Eng (35 Qs, 40m) |
| `IBPS_CLERK_PRELIMS`| Clerk | Prelims | 100 | 100 | Sectional Lock (60m) | Eng (30 Qs, 20m), Quant (35 Qs, 20m), Reas (35 Qs, 20m) |
| `IBPS_CLERK_MAINS` | Clerk | Mains | 190 | 200 | Sectional Lock (160m) | GA (50 Qs, 35m), Eng (40 Qs, 35m), Quant (50 Qs, 45m), Reas & Comp (50 Qs, 45m) |
| `IBPS_RRB_PO_PRELIMS` | PO | Prelims | 80 | 80 | Composite (45m) | Reasoning (40 Qs), Quantitative Aptitude (40 Qs) |
| `IBPS_RRB_PO_MAINS` | PO | Mains | 200 | 200 | Composite (120m) | Reas (40 Qs), Quant (40 Qs), GA (40 Qs), Eng/Hindi (40 Qs), Comp (40 Qs) |
| `IBPS_RRB_CLERK_PRELIMS` | Clerk | Prelims | 80 | 80 | Composite (45m) | Reasoning (40 Qs), Numerical Ability (40 Qs) |
| `IBPS_RRB_CLERK_MAINS` | Clerk | Mains | 200 | 200 | Composite (120m) | Reas (40 Qs), Numerical (40 Qs), GA (40 Qs), Eng/Hindi (40 Qs), Comp (40 Qs) |

---

## 🖥️ Authentic TCS iON Exam Engine Features

### Candidate Profile & Environment
- **Candidate Name**: **Karna (Candidate)**
- **System Node**: `C042`
- **Roll Number**: `2408199201`
- **Live Countdown Timer**: Located at top-right. Displays remaining time with minute-second precision. Automatically transitions to alert-red with pulse when remaining time is less than 5 minutes.
- **Bilingual Medium Switcher**: Dropdown in top header allowing instant toggling between English (`en`) and authentic exam-standard Hindi (`hi`) for Quantitative Aptitude, Reasoning, and General Awareness sections.

### The 5-State Question Palette
TCS iON employs a 5-state coloring system that dictates how candidate answers are evaluated:

```
[ 01 ] Gray    -> NOT VISITED (Candidate has not yet navigated to this question)
[ 02 ] Red     -> NOT ANSWERED (Candidate visited but did not save an option)
[ 03 ] Green   -> ANSWERED (Candidate selected an option and saved)
[ 04 ] Purple  -> MARKED FOR REVIEW (Marked for review without answering - NOT EVALUATED)
[ 05 ] Purple* -> ANSWERED & MARKED FOR REVIEW (Option chosen + marked - EVALUATED IN FINAL MARKS)
```

> ⚠️ **Official Evaluation Rule**: As enforced in real IBPS and SBI exams, questions in state `ANSWERED_AND_MARKED_FOR_REVIEW` (Purple with a Green indicator dot) **ARE EVALUATED** for final positive score and negative penalties upon test submission.

### Sectional Timing & Navigation Locks
- **`SECTIONAL_LOCKED` Mode (SBI & IBPS PO/Clerk)**:
  - Candidates are locked into their current section for the exact statutory duration (e.g., 20 minutes for Prelims sections).
  - Manual section switching is hard-disabled.
  - When the countdown reaches `00:00`, the active section locks permanently, responses are autosaved, and the engine automatically advances to the next section.
- **`COMPOSITE` Mode (IBPS RRB PO & Clerk)**:
  - Candidates receive an undivided 45-minute or 120-minute timer and can freely switch between Reasoning and Quantitative sections.

### Dual-Pane Context & Question Workspace
- **Left Pane (Context Workspace)**:
  - Displays Reading Comprehension passages, Data Interpretation tables, or Puzzle clues.
  - Features structured HTML table rendering for tabular DI.
  - Features embedded vector SVG graphics for seating arrangements, input-output machines, and pattern grids.
- **Right Pane (Question Workspace)**:
  - Strictly consecutive numbering (`Question No. 1` to `N` per section, avoiding arbitrary global numbering jumps).
  - Exact mark and negative mark indicators (e.g., `+1.143 | -0.286`).
  - **TCS iON Font Zoom**: `A-` (compact), `A` (standard), and `A+` (large) dynamic font scaler.
  - Standalone SVG diagrams (Syllogism Venn, Direction Sense, Family Tree) when relevant.
  - 5 authentic circular radio buttons (`A`, `B`, `C`, `D`, `E`).

---

## 🧠 AI Question Generation & Paper Setter Architecture

### 1. Quantitative Aptitude & Data Interpretation
- **Clerk Prelims Calibration**:
  - **Simplification (10–15 Qs)**: Pure BODMAS, percentage fraction conversions ($12.5\% = 1/8, 37.5\% = 3/8$), square roots, and cube roots.
  - **Missing Number Series (5 Qs)**: Prime differences, alternating additive/subtractive series, and $\times 0.5 + 0.5$ series.
  - **Tabular DI (5 Qs)**: Direct ratio, percentage increase/decrease, and averages.
  - **Arithmetic Word Problems (10 Qs)**: Single-step Profit & Loss, LCM efficiency Time & Work, Boats & Streams.
- **PO Prelims Calibration**:
  - **Approximation (5 Qs)**: Decimal rounding ($\approx$) with realistic distractor traps.
  - **Wrong Number Series (5 Qs)**: Patterns like $\times 2 + n$ with subtle calculation errors inserted.
  - **Quadratic Equations (5 Qs)**: $ax^2 + bx + c = 0$ solved via sign methods ($+ - \implies - +$; $+ + \implies - -$) and roots comparison ($x > y, x \ge y, x < y, x \le y, x=y \text{ or CND}$).
- **Mains Calibration**:
  - **Quantity I vs Quantity II Comparison**: Determining whether $Q_1 > Q_2$, $Q_1 < Q_2$, $Q_1 \ge Q_2$, $Q_1 \le Q_2$, or $Q_1 = Q_2 / \text{CND}$.
  - **Data Sufficiency (2 Statements)**: Determining sufficiency of Statement I, Statement II, Either, Neither, or Both together.
- **Realistic Traps**: Distractors reflect actual cognitive slips (e.g., forgetting to subtract, applying markup to Selling Price instead of Cost Price).

### 2. Reasoning Ability & Puzzle Reverse-Construction
- **Reverse-Construction Methodology**:
  1. The engine first defines the solved master table/matrix in memory (`masterArrangementGrid`).
  2. 6 to 10 logical constraints (direct, relative position, and negative clues) are reverse-engineered.
  3. Clues ensure exactly 1 or 2 initial possibilities, where the secondary branch is eliminated by the final constraint, guaranteeing a **100% uniquely solvable puzzle**.
- **Topic Coverage**:
  - **Circular Seating**: 8 persons facing inward/outward with attached radial SVG diagram.
  - **Floor & Flat Puzzles**: 7-floor or 4-floor $\times$ 2-flat building arrangements.
  - **Syllogisms**: "Only a few", "Only", "Some... are not", and "Possibility" deductions with attached Venn diagram.
  - **Direction & Distance**: Point-to-point Cartesian vectors with shortest distance (Pythagorean theorem) calculations.
  - **Blood Relations**: 3-generation family tree problems with gender symbols.
  - **Inequalities**: Coded & direct Open Gate deductive techniques.

### 3. English Language & Rajbhasha Hindi
- **High-Density RC Passages**: 450+ word economic/banking texts modeled on *The Hindu BusinessLine*, *The Economist*, and RBI reports (e.g., Central Bank Digital Currency e-Rupee, Cross-Border Remittances).
- **RC Question Types**: Central theme, tone of the author, inference-based deductions, bold vocabulary synonyms/antonyms, and factual statements.
- **Error Spotting with Grammatical Citations**:
  - Every solution cites the exact grammatical rule (e.g., *Subject-Verb Agreement with "along with"*, *Rule of Proximity with "neither... nor"*, *Dangling Participles*).
- **RRB Mains Hindi Section**: Authentic Hindi language questions featuring idiom usage (*हाथ-पांव फूलना*), वाक्य त्रुटि सुधार, and पर्यायवाची/विलोम शब्द.

### 4. General, Banking & Computer Awareness
- **40% RBI Circulars & Banking**: Priority Sector Lending targets (40% ANBC), NI Act Section 138 (cheque bouncing), DICGC insurance limits (₹5 Lakh), Basel-III CRAR (9.0%).
- **20% Multi-Statement Questions**: *"Consider the following statements regarding the Monetary Policy Committee (MPC): (I)... (II)... (III)... Which of the above statements is/are correct?"*
- **Complete Revision Capsules**: Detailed solutions contain comprehensive bullet summaries (founding year, committee recommendations, quorum rules, statutory mandates).
- **Computer Aptitude (RRB Mains)**: OSI 7-layer model (Transport Layer flow control), SQL DDL vs DML commands, IPv4 vs IPv6 bit sizing, and MS Office keyboard shortcuts.

---

## 🎨 Technical Diagram & SVG Graphics Engine

The platform includes a dedicated vector graphics engine located at `src/lib/graphics/svgDiagrams.ts`. It generates responsive inline SVGs with crisp labels, direction vectors, and legend tags:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DIAGRAM SPECIFICATION                           │
├─────────────────────────┬──────────────────────────────────────────────┤
│ Diagram Type            │ Visual Features                              │
├─────────────────────────┼──────────────────────────────────────────────┤
│ 1. SEATING_DIAGRAM      │ Circular table (#2563EB), radial arrows for  │
│                         │ Inward (Green) and Outward (Red), person cards│
├─────────────────────────┼──────────────────────────────────────────────┤
│ 2. SYLLOGISM_VENN       │ Overlapping semi-transparent circles, shaded  │
│                         │ common zone, red cross (×) for 'Some not'     │
├─────────────────────────┼──────────────────────────────────────────────┤
│ 3. DIRECTION_PATH       │ Cartesian coordinate grid, labeled points,   │
│                         │ compass rose, red dashed hypotenuse vector   │
├─────────────────────────┼──────────────────────────────────────────────┤
│ 4. FAMILY_TREE          │ Horizontal tiers (Gen I, II, III), squares   │
│                         │ for males, circles for females, = for married│
├─────────────────────────┼──────────────────────────────────────────────┤
│ 5. INPUT_OUTPUT_BOX     │ Numbered transformation boxes in rows with   │
│                         │ downward connecting process arrows           │
└─────────────────────────┴──────────────────────────────────────────────┘
```

---

## 📈 Post-Exam Diagnostics & The 4-Quadrant Time-Trap Matrix

Upon submitting an exam, the platform presents the candidate with the **Analytics & Performance Dashboard** ([AnalyticsDashboard.tsx](file:///Users/rupeshkumar/Desktop/bankexam/src/components/exam/AnalyticsDashboard.tsx)):

### 1. Sectional Cutoff Evaluation
- Displays score, accuracy percentage, time spent, and marks scored vs. sectional cutoff (Pass/Fail indicator).
- Computes estimated **All-India Percentile** calibrated to historical SBI and IBPS cutoff curves.

### 2. The 4-Quadrant Speed-Accuracy Matrix
In banking exams, speed without accuracy is fatal, and time spent on unattempted questions is wasted. The engine classifies every question attempt into one of four diagnostic quadrants:

```
                    ACCURACY
                       ▲
                       │
       QUADRANT 2      │       QUADRANT 1
     SLOW & CORRECT    │     FAST & CORRECT
   (Needs shortcuts)   │     (Core Strengths)
                       │
 ──────────────────────┼──────────────────────► SPEED
                       │
       QUADRANT 4      │       QUADRANT 3
   FATAL TIME-TRAPS    │      FAST & WRONG
   (>90s spent & wrong │    (Silly mistakes /
       or skipped)     │       guesswork)
                       ▼
```

- **Quadrant 1 (Fast & Correct)**: Solved within ideal benchmark time. Maintain muscle memory.
- **Quadrant 2 (Slow & Correct)**: Right answer, but exceeded ideal benchmark by $>40\%$. Candidate should learn ratio/Vedic math shortcuts.
- **Quadrant 3 (Fast & Wrong)**: Quick negative penalty. Indicates haste, misreading "more than" vs "of", or blind guessing.
- **Quadrant 4 (Fatal Time-Traps)**: **Spent $>90$ seconds and ended up wrong or skipped.** This is the primary reason aspirants fail to clear cutoffs.

### 3. Dual-Solution Drawer
For every question, candidates can toggle between:
1. 📖 **Textbook Solution**: Step-by-step rigorous conventional method.
2. ⚡ **Vedic / Ratio Shortcut**: 10-to-20 second mental calculation or elimination trick.
3. 📐 **Visual Solution Diagram**: Inline SVG diagram showing the exact puzzle arrangement or Venn intersection.

---

## 🛠️ Technical Architecture & Technology Stack

- **Framework**: [Next.js 16.4.3](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: TypeScript 5 (Strict type checking enabled)
- **Styling**: Tailwind CSS v4 + Vanilla CSS tokens for pixel-accurate TCS iON replication
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) with local storage hydration and persistence
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database ORM**: [Prisma](https://www.prisma.io/) with PostgreSQL schema
- **Mathematical Typography**: Standard LaTeX syntax (`$...$`)

---

## 🌐 SEO Architecture & Brand Identity

The platform is optimized for top organic search engine rankings for Indian banking exam queries:

### 1. Keyword Intent Matrix
- **Transactional**: `"attempt free sbi po cbt mock test online"`, `"ibps po live mock test series free"`, `"sbi clerk mock test tcs ion interface"`
- **Informational**: `"ibps po revised exam pattern 2026"`, `"sbi po prelims syllabus and sectional cutoff"`, `"sbi po negative marking formula 0.25"`
- **Navigational**: `"tcs ion real interface bank test series"`, `"karna banking mock test portal"`

### 2. Next.js Metadata Specification
- **Title**: `SBI PO & IBPS Mock Test 2026: Official TCS iON CBT Engine` (58 characters)
- **Description**: `Exact TCS iON CBT interface, bilingual Hindi/English, sectional timers & instant All-India rank. Free live mocks for SBI PO, SBI Clerk, IBPS PO & RRB 2026.` (157 characters)
- **Robots Directives**: `index, follow, max-image-preview:large`

### 3. JSON-LD Structured Data (Rich Snippets)
Embedded in `layout.tsx`:
- **`Quiz` Schema**: Includes question count, duration (`PT60M`), free access flag, and educational level.
- **`SoftwareApplication` Schema**: 4.9 aggregate rating, educational category, and zero-cost pricing.
- **`FAQPage` Schema**: Expandable search snippets explaining TCS iON color palette rules, negative marking (-0.25), and bilingual support.

### 4. Brand Favicon & PWA Manifest
- [public/favicon.svg](file:///Users/rupeshkumar/Desktop/bankexam/public/favicon.svg): Royal blue shield (`#1D4ED8`) with high-contrast emerald checkmark and stopwatch dial.
- [public/site.webmanifest](file:///Users/rupeshkumar/Desktop/bankexam/public/site.webmanifest): Progressive Web App configuration for standalone full-screen mobile/desktop installation.

---

## 🗄️ Database Schema (Prisma)

The project includes a production-grade relational database schema at [`prisma/schema.prisma`](file:///Users/rupeshkumar/Desktop/bankexam/prisma/schema.prisma):
- `Exam`: Models the exam body (SBI, IBPS, RRB), post (PO, Clerk), stage (Prelims, Mains), year, duration, and timing mode.
- `Section`: Configures section order, duration, question count, max marks, and cutoff.
- `QuestionGroup`: Common passages, DI charts, puzzle clue sets, and SVG diagram specs.
- `Question`: Bilingual text (`questionTextEn`, `questionTextHi`), marks, negative marks, ideal benchmark time, and conventional vs. shortcut solutions.
- `Option`: Options A through E with bilingual text and correctness flags.
- `ExamAttempt` & `QuestionAttempt`: Full telemetry tracking entered-at timestamps, duration spent, selected option, and 4-quadrant classification.

---

## 🚀 Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18.0 or higher
- `npm`, `pnpm`, or `yarn`

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/er-rupesh7/bankcbt.git
cd bankexam

# 2. Install dependencies
npm install

# 3. Verify TypeScript type safety
npx tsc --noEmit

# 4. Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start the simulation.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📁 Directory Structure

```
bankexam/
├── prisma/
│   └── schema.prisma                # Relational Prisma schema for exams & telemetry
├── public/
│   ├── favicon.svg                  # Brand SVG shield icon with stopwatch
│   └── site.webmanifest             # PWA installation manifest
├── src/
│   ├── app/
│   │   ├── globals.css              # Design tokens & TCS iON skin styles
│   │   ├── layout.tsx               # Root layout with SEO metadata & JSON-LD schemas
│   │   └── page.tsx                 # Entry page hosting ExamInterface
│   ├── components/
│   │   └── exam/
│   │       ├── ActionFooter.tsx         # Save & Next, Mark for Review, Submit buttons
│   │       ├── AnalyticsDashboard.tsx   # 4-Quadrant matrix & dual-solution viewer
│   │       ├── DualPaneQuestionArea.tsx # Split screen with passage, tables & SVGs
│   │       ├── ExamHeader.tsx           # Karna candidate badge, timer & switcher
│   │       ├── ExamInterface.tsx        # Top-level screen coordinator
│   │       ├── ExamSelectionGateway.tsx # 12-Exam selection portal & instructions
│   │       ├── QuestionPalette.tsx      # 5-State color legend and question buttons
│   │       └── SubmitConfirmModal.tsx   # Sectional summary confirmation modal
│   ├── lib/
│   │   ├── ai/
│   │   │   └── generator.ts             # Zod validation schema for question sets
│   │   ├── analytics/
│   │   │   └── timeTrapEngine.ts        # Percentile predictor & 4-quadrant classifier
│   │   ├── generator/
│   │   │   ├── bankQuestionBank.ts      # Dynamic Quant, Reasoning, English, GA setters
│   │   │   └── examBuilder.ts           # 12-Exam assembler & consecutive numbering
│   │   ├── graphics/
│   │   │   └── svgDiagrams.ts           # Technical SVG diagram generator engine
│   │   └── seo/
│   │       ├── metadata.ts              # Next.js Metadata factory & keyword matrices
│   │       └── schemaOrg.ts             # JSON-LD Quiz & FAQ structured data
│   ├── store/
│   │   └── useExamStore.ts              # Zustand store enforcing TCS iON state machine
│   └── types/
│       ├── exam.ts                      # Core TypeScript definitions (Exam, Question, DiagramSpec)
│       └── examCatalog.ts               # Official blueprint matrix for all 12 exams
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚖️ License & Attribution
- Designed and engineered for Indian Banking Aspirants (SBI, IBPS, RRB).
- Modeled strictly on TCS iON Computer-Based Assessment standards.
