# 🏛️ Universal Competitive & Government Examination Platform (Banking & BPSC TRE 4.0)

> **Enterprise-Grade Computer-Based Test (CBT) Examination Engine & Digital Learning Management System (LMS)**  
> Engineered for Indian Public Service Commission & Banking Recruitment Examinations:  
> 1. **BPSC TRE 4.0 (Bihar Public Service Commission - Teacher Recruitment Examination)** — PGT Class 11–12 Computer Science, TGT Mathematics, Science, Universal Qualifying Language, and General Studies.  
> 2. **TCS iON Banking Examination Engine** — SBI PO/Clerk, IBPS PO/Clerk, and IBPS RRB Officer/Assistant (Prelims & Mains).  
> Featuring pixel-accurate CBT terminals, authentic BPSC 5-option response evaluation, a dynamic 800-question syllabus generator with zero mock collisions, and a full-scale digital learning course platform.

---

## 📌 Table of Contents

- [Executive Overview](#-executive-overview)
- [Supported Government & Public Recruitment Examinations](#-supported-government--public-recruitment-examinations)
- [BPSC TRE 4.0 Examination Architecture & Blueprint](#-bpsc-tre-40-examination-architecture--blueprint)
  - [Part 1: Universal Qualifying Language (30 Questions, 30 Marks)](#part-1-universal-qualifying-language-30-questions-30-marks)
  - [Part 2: Universal General Studies (40 Questions, 40 Marks)](#part-2-universal-general-studies-40-questions-40-marks)
  - [Part 3: Computer Science Core Class 11–12 (80 Questions, 80 Marks)](#part-3-computer-science-core-class-1112-80-questions-80-marks)
- [Official BPSC TRE 4.0 Response Evaluation & Negative Marking Rules](#-official-bpsc-tre-40-response-evaluation--negative-marking-rules)
  - [The 5-Option Structure (A, B, C, D, E)](#the-5-option-structure-a-b-c-d-e)
  - [Crucial Marking Matrix: Explicit Option E vs Blank Penalty](#crucial-marking-matrix-explicit-option-e-vs-blank-penalty)
- [Dynamic Question Generator Engine (800 Verified Questions)](#-dynamic-question-generator-engine-800-verified-questions)
  - [10-Mock Zero Overlap Guarantee](#10-mock-zero-overlap-guarantee)
  - [The 12 Official Syllabus Units for Computer Science](#the-12-official-syllabus-units-for-computer-science)
- [BPSC TRE 4.0 Digital Learning Management System (LMS)](#-bpsc-tre-40-digital-learning-management-system-lms)
  - [Pedagogical Model: Learn → Practice → Test → Analyze → Revise](#pedagogical-model-learn--practice--test--analyze--revise)
  - [PYQ Integration (TRE 1.0, TRE 2.0, TRE 3.0)](#pyq-integration-tre-10-tre-20-tre-30)
- [TCS iON Banking Examination Simulation Module](#-tcs-ion-banking-examination-simulation-module)
- [Technical Architecture & Technology Stack](#-technical-architecture--technology-stack)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Directory Structure](#-directory-structure)

---

## 🎯 Executive Overview

Every year, millions of candidates in India sit for premier government recruitment examinations conducted by state public service commissions and national banking bodies:
1. **Bihar Public Service Commission (BPSC)**: The **Teacher Recruitment Examination (TRE)** for Class 1–5 (Primary), 6–8 (Middle), 9–10 (Secondary / TGT), and 11–12 (Higher Secondary / PGT).
2. **State Bank of India (SBI) & IBPS**: Premier national bank probationary officer and clerical exams.

Preparing candidates face critical shortcomings with generic quiz applications:
- **Flawed Option Structure**: Most apps use 4 options, completely failing to prepare aspirants for BPSC's notorious 5th option trap (*Option D: More than one of the above* and *Option E: None of the above / Not Answered*).
- **Inaccurate Negative Marking**: BPSC TRE 4.0 introduced strict response evaluation where leaving a question blank incurs a penalty, whereas marking Option E serves as a safe skip.
- **Repeated Mock Questions**: Static question banks reuse identical questions across mocks, inflating scores and giving candidates a false sense of readiness.
- **Lack of Deep Learning Content**: Students are forced to juggle fragmented YouTube videos, low-quality PDFs, and disjointed test series without an integrated syllabus pathway.

**This platform is a unified, production-grade examination preparation ecosystem** providing high-fidelity CBT simulation, rigorous syllabus coverage, official negative marking enforcement, and an in-depth interactive LMS.

---

## 🏛️ Supported Government & Public Recruitment Examinations

### 1. Bihar Public Service Commission (BPSC)
- **BPSC TRE 4.0 — PGT Computer Science (Class 11–12)** (Full 150 Qs / 150 Mins)
- **BPSC TRE 4.0 — TGT Mathematics (Class 9–10)** *(Universal Lang + GS + Math)*
- **BPSC TRE 4.0 — TGT Science (Class 9–10)** *(Universal Lang + GS + Science)*
- **BPSC TRE 4.0 — General Studies & Language Qualifying Module**

### 2. Indian National Banking (TCS iON Standard)
- **SBI PO & SBI Clerk** (Prelims & Mains)
- **IBPS PO & IBPS Clerk** (Prelims & Mains)
- **IBPS RRB Officer Scale-I & Office Assistant** (Prelims & Mains)

---

## 📋 BPSC TRE 4.0 Examination Architecture & Blueprint

The official BPSC Teacher Recruitment Examination (Class 11–12) consists of **150 questions**, **150 marks**, and a **composite duration of 150 minutes (2.5 hours)** with free cross-sectional navigation.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       BPSC TRE 4.0 CBT EXAMINATION                          │
│                150 Questions | 150 Marks | 150 Minutes Composite            │
├─────────────────────────┬─────────────────────────┬─────────────────────────┤
│         PART 1          │         PART 2          │         PART 3          │
│   Qualifying Language   │     General Studies     │     Computer Science    │
│   30 Qs (Q1 - Q30)      │   40 Qs (Q31 - Q70)     │   80 Qs (Q71 - Q150)    │
│   30 Marks (Qualifying) │   40 Marks (Merit)      │   80 Marks (Merit)      │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### Part 1: Universal Qualifying Language (30 Questions, 30 Marks)
Designed as a modular, universal section applicable across all teaching subjects (Computer Science, Mathematics, Science, Social Science, Hindi, English):
- **English Language (8 Questions)**: Articles, Prepositions, Tenses, Sentence Correction, Vocabulary, Synonyms & Antonyms, Reading Comprehension.
- **Hindi Language (22 Questions)**: वर्णमाला एवं वर्तनी, संधि एवं समास, उपसर्ग एवं प्रत्यय, मुहावरे एवं लोकोक्तियाँ, पर्यायवाची एवं विलोम शब्द, वाक्य शुद्धि, गद्यांश।
- **Qualifying Standard**: Minimum qualifying threshold (30% / 9 marks) mandated by BPSC regulations.

### Part 2: Universal General Studies (40 Questions, 40 Marks)
Calibrated directly from official TRE 1.0, TRE 2.0, and TRE 3.0 question papers:
- **Bihar Special History & Geography (8 Qs)**: 1857 Revolt in Bihar (Veer Kunwar Singh), Champaran Satyagraha (1917), Quit India Movement in Bihar, Bihar physical divisions, river systems (Ganga tributaries), climate, and soil.
- **Indian National Movement 1885–1947 (8 Qs)**: Early Nationalist Phase, Swadeshi Movement, Non-Cooperation Movement, Civil Disobedience, Cabinet Mission, Partition & Independence.
- **Indian Polity & Constitution (6 Qs)**: Preamble, Fundamental Rights (Articles 14–32), DPSP, President & Parliament, Judicial Review, Panchayati Raj (73rd Amendment).
- **General Science (6 Qs)**: Physics (Optics, Mechanics, Electricity), Chemistry (Acids & Bases, Chemical bonding, Organic compounds), Biology (Human Physiology, Nutrition, Genetics).
- **Indian Geography & Environment (6 Qs)**: Himalayan & Peninsular drainage, monsoons, natural vegetation, ecology, wildlife sanctuaries, national parks.
- **Elementary Mathematics & Mental Ability (6 Qs)**: Percentages, Profit & Loss, Ratio & Proportion, Time & Work, Number Series, Syllogisms, Coding-Decoding.

### Part 3: Computer Science Core Class 11–12 (80 Questions, 80 Marks)
Spans all **12 official syllabus units** defined by BPSC and SCERT/NCERT for Higher Secondary Computer Teachers.

---

## ⚖️ Official BPSC TRE 4.0 Response Evaluation & Negative Marking Rules

BPSC TRE examinations are defined by a distinctive 5-option structure and response evaluation scheme. The platform implements this exact rulebook.

### The 5-Option Structure (A, B, C, D, E)

Every question is presented with five options:
- **Option (A)**: Content Choice 1
- **Option (B)**: Content Choice 2
- **Option (C)**: Content Choice 3
- **Option (D)**: **More than one of the above** (*उपर्युक्त में से एक से अधिक*)
- **Option (E)**: **None of the above** (*उपर्युक्त में से कोई नहीं*) / **Not Answered** in TRE 4.0 CBT mode

### Crucial Marking Matrix: Explicit Option E vs Blank Penalty

The CBT platform strictly differentiates between an **explicitly selected Option E** and an **unattempted / blank question**:

| Candidate Action in CBT | Score Awarded | Explanation |
|---|:---:|---|
| **Selects Correct Option (A, B, C, or D)** | **+1.00 Mark** | Full credit for correct answer |
| **Selects Incorrect Option (A, B, C, or D)** | **-0.333 Mark (-1/3)** | Negative marking penalty for wrong attempt |
| **Explicitly Selects Option E ("Not Answered")** | **0.00 Marks** | Safe skip. Candidate officially registers intention to pass without penalty |
| **Completely Blank / Unvisited / Unselected** | **-0.333 Mark (-1/3)** | **Penalty for unattempted question** under TRE 4.0 evaluation rules |

> [!IMPORTANT]
> The CBT engine actively warns candidates: **Never leave questions completely blank**. Candidates must actively select Option E if they choose not to answer a question to avoid the -1/3 unselected penalty.

---

## ⚙️ Dynamic Question Generator Engine (800 Verified Questions)

To eliminate the problem of identical questions repeating across mocks, the platform includes a dynamic Question Generator Engine.

### 10-Mock Zero Overlap Guarantee

- **80 Slots × 10 Verified Variants = 800 Unique Questions**: Every slot (from Slot 1 to Slot 80) contains 10 distinct, syllabus-calibrated variants.
- **Direct Deterministic Mapping**:
  - `Full Official Mock #1` $\to$ Variant Index 0 across all 80 slots
  - `Full Official Mock #2` $\to$ Variant Index 1 across all 80 slots
  - `Full Official Mock #3` $\to$ Variant Index 2 across all 80 slots
  - ...
  - `Full Official Mock #10` $\to$ Variant Index 9 across all 80 slots
- **Zero Collision**: Verified via automated test suite with **0% question overlap** between any pair of Mocks 1 through 10.

### The 12 Official Syllabus Units for Computer Science

| Unit | Title | Slot Range | Key Tested Concepts |
|---|---|:---:|---|
| **Unit 1** | Computer Fundamentals & Architecture | Slots 1–6 | Von Neumann architecture, memory hierarchy, cache hit/miss, RAM/ROM, system buses, secondary storage |
| **Unit 2** | Digital Logic & Boolean Algebra | Slots 7–13 | De Morgan's laws, Universal gates (NAND/NOR counts), Half/Full Adders, MUX, K-Maps, Flip-Flops, Counters |
| **Unit 3** | Computer Organization & Assembly | Slots 14–19 | Addressing modes, RISC vs CISC, instruction pipelining, pipeline hazards, DMA, interrupts |
| **Unit 4** | Operating Systems | Slots 20–27 | CPU Scheduling (FCFS, SJF, RR), Deadlocks (Coffman conditions, Banker's algorithm), Paging, TLB, Page replacement (FIFO, LRU, Optimal) |
| **Unit 5** | Data Structures & Algorithms | Slots 28–37 | Stacks, Queues, Linked Lists, Binary Search Trees, Heaps, Sorting algorithms (Quick, Merge, Heap), Graph BFS/DFS, Big-O asymptotics |
| **Unit 6** | Programming in C++ & Python | Slots 38–47 | OOP concepts, virtual functions, inheritance, Python slicing, mutability, list comprehensions, exception handling, code output tracking |
| **Unit 7** | Database Management Systems & SQL | Slots 48–56 | Relational model, Candidate keys, Normalization (1NF to BCNF), SQL DDL/DML, GROUP BY/HAVING, Joins, ACID, 2PL Concurrency |
| **Unit 8** | Computer Networks | Slots 57–64 | OSI 7 Layers, TCP/IP, Ethernet framing, CRC, IPv4/IPv6, Subnetting & CIDR, TCP vs UDP, Ports, Transmission media |
| **Unit 9** | Software Engineering | Slots 65–69 | SDLC models (Waterfall, Spiral, Agile/Scrum), Coupling & Cohesion, Testing (White-box, Black-box, Cyclomatic complexity), CMMI, COCOMO |
| **Unit 10** | Web Technologies | Slots 70–73 | HTML5 semantic tags, CSS Box Model, Flexbox/Grid, JavaScript closures, hoisting, event loop, Cookies vs LocalStorage |
| **Unit 11** | Theory of Computation & Systems | Slots 74–76 | Chomsky hierarchy, DFA/NFA, Turing machines, Compiler phases, Lexical analysis, Two-pass assemblers, Linkers & Loaders |
| **Unit 12** | Cyber Security, Cloud & AI | Slots 77–80 | Symmetric (AES) vs Asymmetric (RSA), SHA-256, SQLi, XSS, CSRF, Cloud models (IaaS, PaaS, SaaS), Hypervisors, ML basics |

---

## 📚 BPSC TRE 4.0 Digital Learning Management System (LMS)

The platform includes an integrated digital learning management system accessible under `/bpsc/learn`:

```
BPSC TRE 4.0 LMS
  ├── Part 1: Language Learning (English & Hindi)
  ├── Part 2: General Studies Learning (Bihar Special, Freedom Struggle, Polity, Science)
  └── Part 3: Computer Science Class 11–12 (All 12 Units)
       └── Chapter
            └── Topic
                 ├── Theoretical Tutorial & Conceptual Narrative
                 ├── Yellow Highlighter Key Takeaways
                 ├── Formatted Mathematical & Scientific Proofs
                 ├── Authentic PYQ Badges (TRE 1.0, TRE 2.0, TRE 3.0 Shift Tags)
                 └── Interactive Knowledge Check Drills
```

### Pedagogical Model: Learn → Practice → Test → Analyze → Revise
- **Deep Conceptual Tutorials**: Comprehensive, readable articles structured with clean typographic hierarchy.
- **Yellow Highlighter Style**: Key formulas, exam traps, and critical facts are highlighted using high-contrast yellow pill styling (`#FEF08A` background with `#713F12` text) for rapid revision.
- **Bilingual Context**: Clear translations and bilingual explanations ensure students from both Hindi and English mediums excel.

### PYQ Integration (TRE 1.0, TRE 2.0, TRE 3.0)
Topics are directly annotated with official examination badges showing historical question frequency:
- `TRE 1.0 (Aug 2023)`
- `TRE 2.0 (Dec 2023)`
- `TRE 3.0 (Mar 2024 / Jul 2024 Re-exam)`

---

## 🏦 TCS iON Banking Examination Simulation Module

For banking aspirants (SBI, IBPS, RRB), the platform preserves the complete TCS iON CBT engine:
- **Pixel-Accurate Interface**: Standard Navy `#0E3B64` header, Candidate Karna profile badge (Node `C042`, Roll `2408199201`), live countdown timer with red pulse alerts.
- **Sectional Timing Locks**: 20-minute hard sectional locking with irreversible auto-advance (SBI/IBPS PO & Clerk Prelims).
- **Composite Timers**: 45-minute and 120-minute composite free-navigation timers (IBPS RRB).
- **Vector SVG Diagram Engine**: Dynamic generation of Seating Arrangement circles, Syllogism Venn diagrams, Direction paths, and Blood Relation family trees.
- **Post-Exam 4-Quadrant Diagnostics**:
  - Quadrant 1: Fast & Correct (Mastered questions)
  - Quadrant 2: Slow & Correct (Needs speed refinement)
  - Quadrant 3: Fast & Incorrect (Careless errors / traps)
  - Quadrant 4: **Fatal Time-Traps** ($>90$ seconds spent on incorrect or abandoned questions)

---

## 💻 Technical Architecture & Technology Stack

- **Framework**: [Next.js 16.4.6](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Reactive state persistence)
- **ORM & Database**: [Prisma 6.4](https://www.prisma.io/) with SQLite/PostgreSQL
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/)

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/er-rupesh7/bankcbt.git
cd bankexam

# 2. Install dependencies
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. Verify TypeScript type safety
npx tsc --noEmit

# 5. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the examination gateway.  
To access the BPSC Learning Course, navigate to [http://localhost:3000/bpsc/learn](http://localhost:3000/bpsc/learn).

### Production Build

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
│   ├── favicon.svg                  # Brand SVG shield icon
│   └── site.webmanifest             # PWA installation manifest
├── src/
│   ├── app/
│   │   ├── bpsc/
│   │   │   └── learn/               # Digital Learning Management System (LMS)
│   │   │       ├── page.tsx         # LMS Course Catalog & Syllabus Navigator
│   │   │       └── [...slug]/       # Dynamic Topic & Tutorial Reader
│   │   ├── globals.css              # Design tokens & CBT terminal styles
│   │   ├── layout.tsx               # Root layout with SEO metadata & JSON-LD
│   │   └── page.tsx                 # Main entry hosting ExamInterface
│   ├── components/
│   │   ├── bpsc/
│   │   │   ├── BPSCSelectionView.tsx   # BPSC TRE 4.0 Mode & Mock Selector
│   │   │   └── BPSCExamView.tsx        # BPSC 5-Option CBT Question Renderer
│   │   ├── exam/
│   │   │   ├── ActionFooter.tsx        # Save & Next, Mark for Review, Option E handler
│   │   │   ├── AnalyticsDashboard.tsx  # 4-Quadrant matrix & solution analysis
│   │   │   ├── DualPaneQuestionArea.tsx# Split screen with passage, tables & SVGs
│   │   │   ├── ExamHeader.tsx          # Candidate badge, countdown timer & medium switcher
│   │   │   ├── ExamInterface.tsx       # Dual-engine screen coordinator (Banking + BPSC)
│   │   │   ├── ExamSelectionGateway.tsx# 12-Exam selection portal & instructions
│   │   │   └── QuestionPalette.tsx     # 5-State color legend and question matrix
│   ├── data/
│   │   └── bpsc/
│   │       ├── bpscTaxonomy.ts         # Official syllabus taxonomy & hierarchy
│   │       ├── bpscLanguageBank.ts     # Part 1: Qualifying Language question bank
│   │       ├── bpscGSBank.ts           # Part 2: General Studies question bank
│   │       ├── bpscCSBank.ts           # Part 3: 800 CS questions (80 slots × 10 variants)
│   │       └── lms/                    # Complete structured tutorials & syllabus notes
│   ├── lib/
│   │   ├── analytics/
│   │   │   └── timeTrapEngine.ts       # Percentile predictor & time-trap classifier
│   │   ├── generator/
│   │   │   ├── bpscExamBuilder.ts      # BPSC 150-Q exam assembler & negative marking config
│   │   │   ├── bpscQuestionEngine.ts   # Dynamic question generator engine
│   │   │   ├── bankQuestionBank.ts     # Banking Quant, Reasoning, English, GA setters
│   │   │   └── examBuilder.ts          # Banking 12-Exam assembler
│   │   └── graphics/
│   │       └── svgDiagrams.ts          # Technical SVG diagram generator engine
│   ├── store/
│   │   └── useExamStore.ts             # Zustand store enforcing CBT state & TRE 4.0 evaluation
│   └── types/
│       ├── bpsc.ts                     # BPSC TypeScript definitions (Syllabus, Slots, Evaluation)
│       ├── exam.ts                     # Core CBT TypeScript definitions
│       └── examCatalog.ts              # Official blueprint matrix for all examinations
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚖️ License & Attribution

- Built and engineered for aspirants of **BPSC TRE (Bihar Public Service Commission)** and **Indian National Banking Exams (SBI, IBPS, RRB)**.
- Modeled in strict compliance with official examination notifications, syllabi, and CBT assessment standards.
