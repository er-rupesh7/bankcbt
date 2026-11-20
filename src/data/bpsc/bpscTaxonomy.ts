// Official BPSC TRE Syllabus & Taxonomy Engine
// Source: Official BPSC Notifications (Advt. 26/2023, 27/2023, 22/2024 & TRE 4.0 Guidelines)
// Universal Architecture for Language, General Studies, and Computer Science (Class 11-12)

import { BPSCComputerScienceUnit, BPSCUnitCoverage } from '@/types/bpsc';

export interface BPSCTopicDetail {
  id: string;
  unit: BPSCComputerScienceUnit;
  unitNameEn: string;
  unitNameHi: string;
  topicNameEn: string;
  topicNameHi: string;
  subtopics: string[];
  expectedWeightage: string; // e.g. "6-8 Marks"
  keyConcepts: string[];
}

export const BPSC_CS_11_12_SYLLABUS: BPSCTopicDetail[] = [
  {
    id: 'CS_U1_FUNDAMENTALS',
    unit: 'UNIT_1_COMPUTER_FUNDAMENTALS',
    unitNameEn: 'Unit 1: Computer Fundamentals & Number Systems',
    unitNameHi: 'इकाई 1: कंप्यूटर फंडामेंटल्स और संख्या प्रणाली',
    topicNameEn: 'Computer Fundamentals, Architecture & Number Systems',
    topicNameHi: 'कंप्यूटर फंडामेंटल्स, आर्किटेक्चर एवं नंबर सिस्टम्स',
    subtopics: [
      'Generations of Computers (Vacuum tubes to VLSI/ULSI)',
      'Input/Output Devices and Interfaces',
      'Memory Units: Bit, Nibble, Byte, KB, MB, GB, TB, PB',
      'Binary, Octal, Decimal, Hexadecimal Number Systems',
      'Radix Conversions and Fraction Conversions',
      'Signed Number Representation: Sign-Magnitude, 1s Complement, 2s Complement',
      'Character Encodings: ASCII, ISCII, and Unicode (UTF-8, UTF-16)',
    ],
    expectedWeightage: '6-8 Marks',
    keyConcepts: [
      '2s complement range and calculation formula: -2^(n-1) to 2^(n-1)-1',
      'Hexadecimal to binary 4-bit grouping',
      'Memory conversion: 1 TB = 1024 GB = 2^40 bytes',
    ],
  },
  {
    id: 'CS_U2_DIGITAL_LOGIC',
    unit: 'UNIT_2_DIGITAL_LOGIC',
    unitNameEn: 'Unit 2: Digital Logic & Boolean Algebra',
    unitNameHi: 'इकाई 2: डिजिटल लॉजिक एवं बूलियन बीजगणित',
    topicNameEn: 'Boolean Algebra, Logic Gates & Circuits',
    topicNameHi: 'बूलियन बीजगणित, लॉजिक गेट्स एवं सर्किट',
    subtopics: [
      'Boolean Laws & Axioms (Idempotent, Boundedness, Absorption, Consensus)',
      'De Morgan’s Theorems and Proofs',
      'Standard Logic Gates (AND, OR, NOT, XOR, XNOR)',
      'Universal Logic Gates (NAND and NOR Gate Minimization)',
      'Canonical Forms: SOP (Minterms) and POS (Maxterms)',
      'Karnaugh Maps (K-Maps up to 4 variables) & Don’t Care Conditions',
      'Combinational Circuits: Half Adder, Full Adder, Multiplexer (MUX), Decoder, Encoder',
      'Sequential Circuits: Latches, Flip-Flops (SR, JK, D, T), Race-around Condition & Master-Slave',
    ],
    expectedWeightage: '8-10 Marks',
    keyConcepts: [
      'Universal gate implementation counts (e.g. 4 NANDs for XOR, 5 NANDs for XNOR)',
      'XOR truth table and odd parity generator',
      'K-map adjacency and gray code labeling',
    ],
  },
  {
    id: 'CS_U3_COA',
    unit: 'UNIT_3_COA',
    unitNameEn: 'Unit 3: Computer Organization and Architecture (COA)',
    unitNameHi: 'इकाई 3: कंप्यूटर संगठन और वास्तुकला',
    topicNameEn: 'CPU Architecture, Memory Hierarchy & Addressing Modes',
    topicNameHi: 'सीपीयू संरचना, मेमोरी पदानुक्रम एवं एड्रेसिंग मोड्स',
    subtopics: [
      'Von Neumann vs Harvard Architecture',
      'CPU Registers (PC, MAR, MDR, IR, Accumulator, Status Register)',
      'Instruction Cycle (Fetch, Decode, Execute, Interrupt)',
      'Addressing Modes (Immediate, Direct, Indirect, Register, Indexed, Relative)',
      'Memory Hierarchy and Speed-Cost Trade-offs',
      'Cache Memory: Direct, Associative, Set-Associative Mapping, Cache Hit/Miss Ratio',
      'Secondary Storage Organization and Magnetic Disk Latency (Seek Time, Rotational Latency)',
      'Instruction Pipelining and Structural/Data/Control Hazards',
    ],
    expectedWeightage: '6-8 Marks',
    keyConcepts: [
      'Effective memory access time: EAT = h * Tc + (1 - h) * Tm',
      'Program Counter points to the next instruction address',
      'Relative addressing uses Program Counter offset',
    ],
  },
  {
    id: 'CS_U4_OPERATING_SYSTEMS',
    unit: 'UNIT_4_OPERATING_SYSTEMS',
    unitNameEn: 'Unit 4: Operating Systems',
    unitNameHi: 'इकाई 4: ऑपरेटिंग सिस्टम',
    topicNameEn: 'Process Management, Scheduling, Memory & Deadlocks',
    topicNameHi: 'प्रक्रिया प्रबंधन, शेड्यूलिंग, मेमोरी एवं डेडलॉक',
    subtopics: [
      'OS Types: Batch, Multi-programmed, Time-sharing, Real-time OS',
      'Process Lifecycle & Process Control Block (PCB)',
      'CPU Scheduling Algorithms: FCFS, SJF (Preemptive/Non-preemptive), Round Robin, Priority',
      'Process Synchronization, Critical Section Problem & Semaphores',
      'Deadlocks: Coffman 4 Conditions, Resource Allocation Graph, Banker’s Algorithm',
      'Memory Management: Contiguous, Paging, Segmentation, TLB',
      'Virtual Memory & Page Replacement: FIFO, LRU, Optimal, Belady’s Anomaly',
      'File Systems, Directory Structures & Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN)',
    ],
    expectedWeightage: '8-10 Marks',
    keyConcepts: [
      'Belady’s anomaly occurs in FIFO page replacement',
      'Banker’s algorithm is used for deadlock avoidance',
      'Turnaround Time = Completion Time - Arrival Time',
    ],
  },
  {
    id: 'CS_U5_DSA',
    unit: 'UNIT_5_DATA_STRUCTURES_ALGORITHMS',
    unitNameEn: 'Unit 5: Data Structures & Algorithms',
    unitNameHi: 'इकाई 5: डेटा संरचनाएं और एल्गोरिदम',
    topicNameEn: 'Arrays, Stacks, Queues, Trees, Graphs & Complexity',
    topicNameHi: 'ऐरे, स्टैक, कतार, ट्री, ग्राफ एवं जटिलता',
    subtopics: [
      'Linear vs Non-linear Data Structures',
      'Arrays: 1D, 2D Row-Major and Column-Major Address Calculations',
      'Linked Lists: Singly, Doubly, Circular Linked List Operations',
      'Stacks: Infix to Postfix/Prefix, Postfix Evaluation, Function Call Stack',
      'Queues: Linear Queue, Circular Queue Condition ((rear+1)%size == front), Deque, Priority Queue',
      'Trees: Binary Trees, Binary Search Trees (BST), AVL Trees, Tree Traversals (Inorder, Preorder, Postorder)',
      'Graphs: Representation (Adjacency Matrix/List), BFS, DFS, Minimum Spanning Trees (Kruskal, Prim)',
      'Searching & Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Binary Search',
      'Asymptotic Notations: Big-O, Big-Omega, Big-Theta, Best/Worst Case Complexities',
    ],
    expectedWeightage: '10-12 Marks',
    keyConcepts: [
      'Inorder traversal of a BST yields sorted order',
      'Worst case time complexity of Quick Sort is O(n^2), Merge Sort is O(n log n)',
      'Stack is used for expression evaluation and backtracking',
    ],
  },
  {
    id: 'CS_U6_PROGRAMMING',
    unit: 'UNIT_6_PROGRAMMING_LANGUAGES',
    unitNameEn: 'Unit 6: Programming in C++ & Python',
    unitNameHi: 'इकाई 6: C++ एवं पायथन में प्रोग्रामिंग',
    topicNameEn: 'OOP Principles, C++ Mechanics & Python Syntax',
    topicNameHi: 'ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग, C++ एवं पायथन सिंटैक्स',
    subtopics: [
      'C++ Data Types, Operators, Precedence, and Type Casting',
      'Control Structures: if-else, switch-case, loops (for, while, do-while)',
      'Functions: Pass by Value vs Pass by Reference, Inline Functions, Default Arguments',
      'Pointers, References, and Dynamic Memory Allocation (new/delete)',
      'Object Oriented Programming: Classes, Objects, Access Specifiers (public, private, protected)',
      'Constructors (Default, Parameterized, Copy) and Destructors',
      'Inheritance: Single, Multiple, Multilevel, Hierarchical, Hybrid',
      'Polymorphism: Function Overloading, Operator Overloading, Virtual Functions, Abstract Classes',
      'Python Basics: Dynamic Typing, Indentation, Lists, Tuples (Immutable), Dictionaries, Sets, Slicing',
    ],
    expectedWeightage: '12-14 Marks',
    keyConcepts: [
      'Constructors cannot be virtual and have no return type',
      'Tuples in Python are immutable, lists are mutable',
      'Virtual functions achieve runtime polymorphism via vtable',
    ],
  },
  {
    id: 'CS_U7_DBMS_SQL',
    unit: 'UNIT_7_DBMS_SQL',
    unitNameEn: 'Unit 7: Database Management Systems & SQL',
    unitNameHi: 'इकाई 7: डेटाबेस प्रबंधन प्रणाली एवं एसक्यूएल',
    topicNameEn: 'RDBMS, Relational Algebra, Normalization & SQL Queries',
    topicNameHi: 'आरडीबीएमएस, रिलेशनल बीजगणित, नॉर्मलाइजेशन एवं एसक्यूएल',
    subtopics: [
      'DBMS Architecture (3-Level Schema Architecture: Physical, Conceptual, External)',
      'Data Models: Entity-Relationship (ER) Diagram, Entity, Attributes, Cardinality',
      'Relational Model Concepts: Tuples, Attributes, Domain, Degree, Cardinality',
      'Keys: Super Key, Candidate Key, Primary Key, Foreign Key, Alternate Key',
      'Relational Integrity Constraints: Entity Integrity, Referential Integrity',
      'Normalization: 1NF, 2NF (No partial dependency), 3NF (No transitive dependency), BCNF',
      'SQL Sublanguages: DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK)',
      'SQL Clauses & Functions: GROUP BY, HAVING, ORDER BY, Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)',
      'SQL Joins: INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, NATURAL JOIN',
      'ACID Properties of Transactions: Atomicity, Consistency, Isolation, Durability',
    ],
    expectedWeightage: '10-12 Marks',
    keyConcepts: [
      'Primary key cannot contain NULL and enforces entity integrity',
      'HAVING clause filters grouped records, WHERE filters individual rows',
      '3NF eliminates transitive functional dependencies for non-prime attributes',
    ],
  },
  {
    id: 'CS_U8_NETWORKS',
    unit: 'UNIT_8_COMPUTER_NETWORKS',
    unitNameEn: 'Unit 8: Computer Networks & Communication',
    unitNameHi: 'इकाई 8: कंप्यूटर नेटवर्क एवं संचार',
    topicNameEn: 'OSI Model, TCP/IP, Subnetting & Protocols',
    topicNameHi: 'ओएसआई मॉडल, टीसीपी/आईपी, सबनेटिंग एवं प्रोटोकॉल',
    subtopics: [
      'Network Topologies: Bus, Star, Ring, Mesh, Tree, Hybrid (Cost and Reliability)',
      'Network Types: PAN, LAN, MAN, WAN',
      'OSI 7-Layer Model: Functions of Physical, Data Link, Network, Transport, Session, Presentation, Application',
      'TCP/IP Suite Comparison with OSI',
      'Transmission Media: Guided (Twisted Pair, Coaxial, Optical Fiber) vs Unguided (Radio, Microwave, Infrared)',
      'Network Devices: Repeater, Hub, Bridge, Switch, Router, Gateway',
      'IPv4 Addressing: Classes (A, B, C, D, E), Subnet Mask, CIDR Notation, Private IP Ranges',
      'Protocols: HTTP (Port 80), HTTPS (Port 443), FTP (Port 20/21), SMTP (Port 25), DNS (Port 53), DHCP (Port 67/68)',
      'Transport Layer Protocols: TCP (Connection-oriented, Reliable) vs UDP (Connectionless, Best Effort)',
    ],
    expectedWeightage: '8-10 Marks',
    keyConcepts: [
      'Router operates at Network layer (Layer 3); Switch operates at Data Link layer (Layer 2)',
      'Subnet mask /26 gives 64 total addresses and 62 usable host addresses',
      'Class D IPv4 addresses (224.0.0.0 to 239.255.255.255) are reserved for multicasting',
    ],
  },
  {
    id: 'CS_U9_SOFTWARE_ENG',
    unit: 'UNIT_9_SOFTWARE_ENGINEERING',
    unitNameEn: 'Unit 9: Software Engineering',
    unitNameHi: 'इकाई 9: सॉफ्टवेयर इंजीनियरिंग',
    topicNameEn: 'SDLC Models, Testing Strategies & Design Metrics',
    topicNameHi: 'एसडीएलसी मॉडल, परीक्षण रणनीतियाँ एवं डिजाइन मेट्रिक्स',
    subtopics: [
      'Software Development Life Cycle (SDLC) Phases',
      'SDLC Models: Waterfall, Prototyping, Spiral (Risk Analysis), Incremental, Agile (Scrum)',
      'Software Requirements Specification (SRS) Characteristics',
      'Software Design Principles: Cohesion (High preferred) and Coupling (Low/Loose preferred)',
      'Software Testing: Black Box (Equivalence Partitioning, Boundary Value) vs White Box (Basis Path, Cyclomatic Complexity)',
      'Testing Levels: Unit Testing, Integration Testing, System Testing, Acceptance Testing',
      'Software Maintenance: Corrective, Adaptive, Perfective, Preventive',
    ],
    expectedWeightage: '4-6 Marks',
    keyConcepts: [
      'High cohesion and low coupling represent optimal modular design',
      'Spiral model is best suited for large, risk-driven software projects',
      'Cyclomatic complexity V(G) = E - N + 2P',
    ],
  },
  {
    id: 'CS_U10_WEB_TECH',
    unit: 'UNIT_10_WEB_TECHNOLOGIES',
    unitNameEn: 'Unit 10: Web Technologies',
    unitNameHi: 'इकाई 10: वेब प्रौद्योगिकियां',
    topicNameEn: 'HTML5, CSS, Client-Server & Web Architecture',
    topicNameHi: 'एचटीएमएल5, सीएसएस, क्लाइंट-सर्वर एवं वेब वास्तुकला',
    subtopics: [
      'HTML Basics: Tags, Elements, Attributes, Document Structure (<!DOCTYPE html>, <html>, <head>, <body>)',
      'HTML Elements: Headings, Paragraphs, Lists (Ordered, Unordered), Tables, Links (<a>), Images (<img>)',
      'HTML Forms: <input>, <select>, <textarea>, GET vs POST methods',
      'CSS Basics: Inline, Internal, External Style Sheets, Selectors (Element, ID, Class)',
      'CSS Box Model: Margin, Border, Padding, Content',
      'Client-Server Web Architecture, URL Anatomy, HTTP Request-Response Cycle',
      'Client-Side vs Server-Side Scripting (JavaScript vs PHP/Node.js)',
    ],
    expectedWeightage: '4-6 Marks',
    keyConcepts: [
      'POST method is secure for passwords as data is sent in the HTTP request body',
      'CSS Box Model order: Margin (outermost) > Border > Padding > Content (innermost)',
      'HTML is a markup language, not a programming language',
    ],
  },
  {
    id: 'CS_U11_TOC_SYSTEM_SOFTWARE',
    unit: 'UNIT_11_TOC_SYSTEM_SOFTWARE',
    unitNameEn: 'Unit 11: Theory of Computation & System Software',
    unitNameHi: 'इकाई 11: संगणना सिद्धांत एवं सिस्टम सॉफ्टवेयर',
    topicNameEn: 'Translators, Automata, Regular Expressions & Grammars',
    topicNameHi: 'अनुवादक, ऑटोमेटा, रेगुलर एक्सप्रेशन्स एवं व्याकरण',
    subtopics: [
      'Language Translators: Assembler, Compiler, Interpreter',
      'Compiler Phases: Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code, Code Optimization, Target Code Generation',
      'Linkers (Resolving external references) and Loaders (Placing executable in memory)',
      'Finite State Automata: Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA)',
      'Regular Expressions and Regular Languages',
      'Chomsky Hierarchy: Regular (Type 3), Context-Free (Type 2), Context-Sensitive (Type 1), Recursively Enumerable (Type 0)',
    ],
    expectedWeightage: '4-6 Marks',
    keyConcepts: [
      'Lexical analyzer produces tokens using regular expressions',
      'DFA and NFA have equal computational power for recognizing regular languages',
      'Compiler translates entire source code before execution; Interpreter executes line by line',
    ],
  },
  {
    id: 'CS_U12_EMERGING_TECH_SECURITY',
    unit: 'UNIT_12_EMERGING_TECH_SECURITY',
    unitNameEn: 'Unit 12: Emerging Technologies & Cyber Security',
    unitNameHi: 'इकाई 12: उभरती प्रौद्योगिकियां एवं साइबर सुरक्षा',
    topicNameEn: 'Cyber Security, Malware, Cloud Computing & AI Fundamentals',
    topicNameHi: 'साइबर सुरक्षा, मैलवेयर, क्लाउड कंप्यूटिंग एवं एआई फंडामेंटल्स',
    subtopics: [
      'Information Security: Confidentiality, Integrity, Availability (CIA Triad)',
      'Malicious Software: Viruses, Worms, Trojan Horses, Spyware, Ransomware, Adware',
      'Cyber Attacks: Phishing, Denial of Service (DoS), Distributed DoS (DDoS), Man-in-the-Middle (MitM), SQL Injection',
      'Indian IT Act 2000 & Cyber Crime Provisions (Section 66, Section 43)',
      'Cloud Computing Service Models: IaaS (Infrastructure), PaaS (Platform), SaaS (Software)',
      'Cloud Deployment Models: Public, Private, Hybrid, Community Cloud',
      'Internet of Things (IoT) Fundamentals & Artificial Intelligence / Machine Learning Concepts',
    ],
    expectedWeightage: '4-6 Marks',
    keyConcepts: [
      'Worm self-replicates over network without host program; Virus requires a host program',
      'SaaS provides ready-to-use software applications over the internet (e.g. Gmail, Google Drive)',
      'CIA triad forms the foundation of information security',
    ],
  },
];

// Universal Part 1: Language Topics (30 Questions / 30 Marks)
export const BPSC_LANGUAGE_SYLLABUS = {
  sectionTitleEn: 'Part 1: Language (Qualifying - 30 Marks)',
  sectionTitleHi: 'भाग 1: भाषा (अर्हक - 30 अंक)',
  qualifyingPercentage: 30, // 30% = 9 Marks minimum
  distribution: {
    englishCount: 8, // Questions 1 to 8
    hindiCount: 22,  // Questions 9 to 30
  },
  englishTopics: [
    'Articles (A, An, The) and Prepositions',
    'Tenses and Subject-Verb Agreement',
    'Vocabulary: Synonyms and Antonyms',
    'Error Detection and Sentence Improvement',
    'Reading Comprehension and Cloze Test',
    'Idioms, Phrases and One Word Substitution',
  ],
  hindiTopics: [
    'वर्णमाला, संधि एवं संधि-विच्छेद',
    'समास और उनके भेद',
    'उपसर्ग और प्रत्यय',
    'पर्यायवाची एवं विलोम शब्द',
    'तत्सम एवं तद्भव शब्द',
    'वाक्य शुद्धि एवं वर्तनी शुद्धि',
    'मुहावरे एवं लोकोक्तियाँ',
    'अपठित गद्यांश बोध',
  ],
};

// Universal Part 2: General Studies Topics (40 Questions / 40 Marks)
export const BPSC_GENERAL_STUDIES_SYLLABUS = {
  sectionTitleEn: 'Part 2: General Studies (40 Marks)',
  sectionTitleHi: 'भाग 2: सामान्य अध्ययन (40 अंक)',
  totalQuestions: 40,
  categories: [
    {
      nameEn: 'Elementary Mathematics & Mental Ability',
      nameHi: 'प्रारंभिक गणित एवं मानसिक क्षमता',
      subtopics: ['Number Systems', 'Percentage & Ratio', 'Simple & Compound Interest', 'Time & Work', 'Logical Reasoning'],
      weightage: '8-10 Marks',
    },
    {
      nameEn: 'General Science',
      nameHi: 'सामान्य विज्ञान',
      subtopics: ['Physics (Laws of Motion, Optics, Electricity)', 'Chemistry (Acids/Bases, Metals, Periodic Table)', 'Biology (Human Anatomy, Nutrition, Diseases, Botany)'],
      weightage: '8-10 Marks',
    },
    {
      nameEn: 'Indian National Movement & History',
      nameHi: 'भारतीय राष्ट्रीय आंदोलन एवं इतिहास',
      subtopics: ['Revolt of 1857 & Bihar Role', 'Champaran Satyagraha (1917)', 'Non-Cooperation & Quit India Movement', 'Prominent Bihar Freedom Fighters (Babu Kunwar Singh, Rajendra Prasad)'],
      weightage: '8-10 Marks',
    },
    {
      nameEn: 'Geography & Environment',
      nameHi: 'भूगोल एवं पर्यावरण',
      subtopics: ['Indian Physical Geography', 'River Systems of India & Bihar', 'Climate, Soil & Forests', 'Ecology, Wildlife Sanctuaries (Valmiki National Park)'],
      weightage: '6-8 Marks',
    },
    {
      nameEn: 'Bihar GK, Polity & Current Affairs',
      nameHi: 'बिहार सामान्य ज्ञान, राजव्यवस्था एवं समसामयिकी',
      subtopics: ['Constitution & Panchayati Raj in Bihar', 'Bihar Economy & Census 2011', 'Key Government Schemes', 'National & Bihar Current Affairs'],
      weightage: '6-8 Marks',
    },
  ],
};

// Helper: Get Unit Detail by Unit Key
export function getBPSCUnitDetail(unitKey: BPSCComputerScienceUnit | string): BPSCTopicDetail | undefined {
  return BPSC_CS_11_12_SYLLABUS.find((u) => u.unit === unitKey);
}

// Helper: Calculate Coverage Matrix for Computer Science
export function getBPSCCoverageMatrix(
  pyqCounts: Record<string, number>,
  generatedCounts: Record<string, number>
): BPSCUnitCoverage[] {
  return BPSC_CS_11_12_SYLLABUS.map((u) => {
    const pyqs = pyqCounts[u.unit] || 0;
    const generated = generatedCounts[u.unit] || 0;
    const total = pyqs + generated;
    
    // Coverage percentage: target is at least 15 verified questions per unit for 100% unit readiness
    const coveragePercentage = Math.min(100, Math.round((total / 15) * 100));

    return {
      unitKey: u.unit,
      unitTitle: u.unitNameEn,
      totalPYQs: pyqs,
      totalGenerated: generated,
      easyCount: Math.round(total * 0.3),
      moderateCount: Math.round(total * 0.5),
      hardCount: Math.max(0, total - Math.round(total * 0.3) - Math.round(total * 0.5)),
      coveragePercentage,
    };
  });
}
