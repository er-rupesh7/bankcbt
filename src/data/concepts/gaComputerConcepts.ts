// src/data/concepts/gaComputerConcepts.ts
// Complete textbook-grade concept guides for General Awareness & Computer Aptitude (7 topics)

import { ConceptGuideData } from '@/types/topicPractice';

export const GA_COMPUTER_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  // ==========================================================================
  // Topic: rbi-monetary-policy
  // ==========================================================================
  'rbi-monetary-policy': {
    "topicSlug": "rbi-monetary-policy",
    "coreTheoryEn": "The Reserve Bank of India (RBI) is the central banking institution of India, established on **April 1, 1935** under the RBI Act 1934 and nationalized on **January 1, 1949**.\n\n### 1. Monetary Policy Committee (MPC):\n- Formed under Section 45ZB of the amended RBI Act 1934.\n- **Composition (6 Members):** 3 members from RBI (Governor as Ex-officio Chairperson, Deputy Governor in-charge of Monetary Policy, and 1 RBI officer) + 3 external members appointed by the Central Government.\n- **Voting:** Each member has 1 vote; Governor has a **Casting Vote** in case of a tie.\n- **Mandate:** Maintain Consumer Price Index (CPI) inflation at **4% with a tolerance band of ±2%** (i.e. 2% to 6%).\n\n### 2. The Policy Rate Corridor (LAF):\n$$\\text{LAF Corridor} = [\\text{SDF}, \\text{MSF}]$$\n- **Policy Repo Rate:** The benchmark interest rate at which RBI lends short-term liquidity to commercial banks against pledged government securities (G-Secs).\n- **Standing Deposit Facility (SDF):** The uncollateralized floor rate at which RBI absorbs overnight excess liquidity from banks (fixed at **Repo - 25 bps**).\n- **Marginal Standing Facility (MSF):** The overnight penal lending rate where banks can borrow against their SLR quota (fixed at **Repo + 25 bps**).\n- **Bank Rate:** The standard rediscounting rate for long-term commercial paper, aligned with MSF.\n\n### 3. Reserve Ratios:\n- **Cash Reserve Ratio (CRR):** Section 42(1) of RBI Act. Percentage of Net Demand and Time Liabilities (NDTL) banks must maintain as liquid cash balances with the RBI. **Earns 0% interest!**\n- **Statutory Liquidity Ratio (SLR):** Section 24 of Banking Regulation Act 1949. Percentage of NDTL banks must maintain in approved liquid assets (G-Secs, Treasury Bills, Cash, Gold). Max statutory ceiling = 40%.",
    "coreTheoryHi": "भारतीय रिज़र्व बैंक (RBI) एवं मौद्रिक नीति:\n### 1. मौद्रिक नीति समिति (MPC):\n- 6 सदस्यीय समिति (3 RBI + 3 केंद्र सरकार द्वारा नामित)।\n- गवर्नर के पास टाई होने पर **निर्णायक मत (Casting Vote)** होता है।\n- **मुद्रास्फीति लक्ष्य:** CPI 4% (±2% सहनशीलता सीमा: 2% से 6%)।\n\n### 2. नीतिगत दरें (Policy Rates):\n- **रेपो दर (Repo Rate):** वह दर जिस पर RBI प्रतिभूतियों के बदले बैंकों को अल्पकालिक ऋण देता है।\n- **SDF (Standing Deposit Facility):** Repo - 0.25% (बिना प्रतिभूति अतिरिक्त तरलता सोखने की दर)।\n- **MSF (Marginal Standing Facility):** Repo + 0.25% (SLR कोटे से आपातकालीन रातभर का ऋण)।\n- **CRR (नकद आरक्षित अनुपात):** NDTL का वह भाग जो नकदी रूप में RBI के पास रखना अनिवार्य है (0% ब्याज)।\n- **SLR (वैधानिक तरलता अनुपात):** NDTL का वह भाग जो स्वर्ण, सरकारी प्रतिभूतियों में रखना अनिवार्य है।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">RBI Liquidity Adjustment Facility (LAF) Corridor</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"13\">MSF (Ceiling)</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"12\">Repo + 25 bps</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#b91c1c\" font-size=\"11\">Emergency overnight borrowing</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Repo Rate (Center)</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Benchmark Rate</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Key Policy Anchor</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">SDF (Floor)</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Repo - 25 bps</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Collateral-free absorption</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "LAF Corridor Symmetry Rule",
        "latexFormula": "\\text{MSF} = \\text{Repo} + 0.25\\% \\quad | \\quad \\text{SDF} = \\text{Repo} - 0.25\\%",
        "explanationEn": "SDF and MSF form a symmetric 50 basis point corridor around the policy repo rate.",
        "explanationHi": "SDF और MSF रेपो दर के दोनों ओर 25-25 आधार अंकों का गलियारा बनाते हैं।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Act & Section Distinction",
        "conventionalTime": "45s",
        "shortcutTime": "5s",
        "conventionalMethodEn": "Confusing whether CRR is in RBI Act or BR Act.",
        "conventionalMethodHi": "CRR और SLR के अधिनियमों में भ्रमित होना।",
        "shortcutStepsEn": "1. CRR = RBI Act 1934 (Section 42).\n2. SLR = Banking Regulation (BR) Act 1949 (Section 24).\n3. Remember: CRR is central cash (RBI); SLR is banking regulation (BR Act).",
        "shortcutStepsHi": "1. CRR = RBI Act (Sec 42). 2. SLR = BR Act (Sec 24)।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Assuming RBI Pays Interest on CRR",
        "mistakeStudentsMake": "Thinking banks earn repo rate or reverse repo rate on CRR balances.",
        "howToAvoid": "RBI pays ZERO interest on CRR cash balances since 2007."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "What is the inflation targeting mandate assigned to the Reserve Bank of India by the Central Government under the RBI Act?",
        "questionHi": "RBI अधिनियम के तहत केंद्र सरकार द्वारा रिज़र्व बैंक को क्या मुद्रास्फीति लक्ष्य सौंपा गया है?",
        "conventionalSolEn": "Under Section 45ZA of the RBI Act 1934, the inflation target is set at 4% Consumer Price Index (CPI) with a tolerance band of ±2% (i.e. lower tolerance limit of 2% and upper tolerance limit of 6%).",
        "conventionalSolHi": "उपभोक्ता मूल्य सूचकांक (CPI) आधारित 4% मुद्रास्फीति (सहनशीलता सीमा: 2% से 6%)।",
        "shortcutTrickEn": "4% ± 2% (Range: 2% to 6%).",
        "shortcutTrickHi": "4% (±2%)।",
        "finalAnswer": "4% with a tolerance band of ±2% (2% to 6%)"
      },
      {
        "level": "Moderate",
        "questionEn": "If the Monetary Policy Committee sets the Policy Repo Rate at 6.50%, what are the applicable rates for the Standing Deposit Facility (SDF) and Marginal Standing Facility (MSF)?",
        "questionHi": "यदि नीतिगत रेपो दर 6.50% है, तो SDF और MSF की दरें क्या होंगी?",
        "conventionalSolEn": "SDF is set 25 bps below Repo: SDF = 6.50% - 0.25% = 6.25%. MSF is set 25 bps above Repo: MSF = 6.50% + 0.25% = 6.75%.",
        "conventionalSolHi": "SDF = 6.50% - 0.25% = 6.25%. MSF = 6.50% + 0.25% = 6.75%.",
        "shortcutTrickEn": "SDF = Repo - 0.25% (6.25%). MSF = Repo + 0.25% (6.75%).",
        "shortcutTrickHi": "SDF = 6.25%, MSF = 6.75%।",
        "finalAnswer": "SDF = 6.25%, MSF = 6.75%"
      },
      {
        "level": "Mains",
        "questionEn": "Under Section 24 of the Banking Regulation Act 1949, what is the maximum statutory ceiling up to which the Reserve Bank of India can prescribe the Statutory Liquidity Ratio (SLR)?",
        "questionHi": "बैंकिंग विनियमन अधिनियम 1949 की धारा 24 के तहत, RBI अधिकतम किस सीमा तक SLR निर्धारित कर सकता है?",
        "conventionalSolEn": "Section 24(2A) of the Banking Regulation Act 1949 specifies that the Reserve Bank may specify the SLR percentage, provided that it shall not exceed 40% of the total Net Demand and Time Liabilities (NDTL) of a banking company in India.",
        "conventionalSolHi": "बैंकिंग विनियमन अधिनियम की धारा 24 के अनुसार SLR की अधिकतम वैधानिक सीमा 40% है।",
        "shortcutTrickEn": "Statutory ceiling for SLR = 40% of NDTL.",
        "shortcutTrickHi": "40%।",
        "finalAnswer": "40% of NDTL"
      }
    ]
  },

  // ==========================================================================
  // Topic: banking-acts-norms
  // ==========================================================================
  'banking-acts-norms': {
    "topicSlug": "banking-acts-norms",
    "coreTheoryEn": "Banking laws and global prudential frameworks ensure financial solvency, debt resolution, and customer protection.\n\n### 1. Key Indian Banking Acts:\n- **Negotiable Instruments (NI) Act 1881:**\n  - Section 4: Promissory Note\n  - Section 5: Bill of Exchange\n  - Section 6: Cheque (always drawn on a specified banker, payable on demand)\n  - Section 138: Dishonour of Cheque for insufficiency of funds (criminal offence: up to 2 years imprisonment or fine up to twice cheque amount).\n- **SARFAESI Act 2002:**\n  - Enables banks to seize and auction pledged collateral (commercial/residential property) WITHOUT court intervention upon 60 days notice under Section 13(2).\n  - Does NOT apply to agricultural land or debts below ₹1 lakh.\n- **Insolvency and Bankruptcy Code (IBC) 2016:**\n  - Corporate Insolvency Resolution Process (CIRP) timeline: 180 days (extendable by 90 days, overall cap 330 days).\n  - Adjudicating Authority: NCLT (for corporates), DRT (for individuals).\n\n### 2. Basel III Prudential Capital Framework:\n- **Capital Adequacy Ratio (CRAR):**\n  $$\\text{CRAR} = \\frac{\\text{Tier 1 Capital} + \\text{Tier 2 Capital}}{\\text{Risk-Weighted Assets (RWA)}} \\times 100\\%$$\n  - RBI mandated minimum CRAR = **9%** (higher than Basel global minimum of 8%).\n  - Capital Conservation Buffer (CCB) = **2.5%** in Common Equity Tier 1 (CET1).\n  - Total minimum capital with CCB = **11.5%**.\n- **Liquidity Coverage Ratio (LCR):** High-Quality Liquid Assets (HQLA) must cover 30-day net cash outflows under acute stress ($LCR \\ge 100\\%$).",
    "coreTheoryHi": "बैंकिंग अधिनियम एवं बासेल मानक (Basel III Norms):\n### 1. महत्वपूर्ण अधिनियम:\n- **परक्राम्य लिखत अधिनियम 1881 (NI Act):** धारा 138 (चेक बाउंस - 2 वर्ष तक का कारावास या चेक राशि का दोगुना जुर्माना)।\n- **सरफेसी अधिनियम 2002 (SARFAESI):** न्यायालय के हस्तक्षेप के बिना गिरवी संपत्ति जब्त करने का अधिकार (कृषि भूमि पर लागू नहीं)।\n- **आईबीसी 2016 (IBC):** कॉर्पोरेट दिवालिया समाधान प्रक्रिया (180 + 90 दिन = 270 दिन)।\n\n### 2. बासेल III मानक:\n- **न्यूनतम CRAR (RBI नियम):** 9% + 2.5% CCB = **11.5%**।\n- **LCR (तरलता कवरेज अनुपात):** न्यूनतम 100%।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Basel III Regulatory Capital Stack (RBI Norms: 11.5%)</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">CET 1 Capital</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Min 5.5%</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Equity &amp; Reserves</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">CCB Buffer</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Fixed 2.5%</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Conservation Reserve</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Tier 2 Capital</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Max 2.0%</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Subordinated Debt</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Basel III CRAR Formula",
        "latexFormula": "\\text{CRAR} = \\frac{\\text{Tier 1} + \\text{Tier 2}}{\\text{RWA}} \\ge 9.0\\% \\quad (11.5\\% \\text{ with CCB})",
        "explanationEn": "Calculates capital adequacy against total credit, market, and operational risk-weighted assets.",
        "explanationHi": "जोखिम भारित परिसंपत्तियों के विरुद्ध कुल पूंजी अनुपात।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "SARFAESI Exclusion Shortcut",
        "conventionalTime": "40s",
        "shortcutTime": "5s",
        "conventionalMethodEn": "Reading full clauses of property seizure laws.",
        "conventionalMethodHi": "संपूर्ण अधिनियम की धाराएं याद करना।",
        "shortcutStepsEn": "1. SARFAESI does NOT apply to: (1) Agricultural Land, (2) Claims under ₹1 Lakh, (3) Remaining debt < 20% of principal.\n2. Spot 'Agricultural land' in options and eliminate in 3 seconds.",
        "shortcutStepsHi": "सरफेसी कृषि भूमि और 1 लाख से कम के ऋण पर लागू नहीं होता।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Basel III Global vs RBI Minimum CRAR",
        "mistakeStudentsMake": "Marking 8% for Indian banks (8% is global Basel III minimum, but RBI mandates 9%).",
        "howToAvoid": "For Indian scheduled commercial banks, minimum CRAR is strictly 9% (11.5% with CCB)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Under the Negotiable Instruments Act 1881, which section deals with the criminal offence of dishonour of cheque due to insufficiency of funds in the bank account?",
        "questionHi": "परक्राम्य लिखत अधिनियम 1881 की कौन सी धारा खाते में अपर्याप्त राशि के कारण चेक बाउंस होने से संबंधित है?",
        "conventionalSolEn": "Section 138 of the Negotiable Instruments Act 1881 provides that dishonour of cheque for insufficiency of funds is a criminal offence punishable with imprisonment for a term up to 2 years, or with fine up to twice the amount of the cheque, or both.",
        "conventionalSolHi": "धारा 138 (Section 138) चेक बाउंस से संबंधित है।",
        "shortcutTrickEn": "Cheque bounce = Section 138.",
        "shortcutTrickHi": "धारा 138।",
        "finalAnswer": "Section 138"
      },
      {
        "level": "Moderate",
        "questionEn": "What is the minimum Common Equity Tier 1 (CET1) capital ratio and Capital Conservation Buffer (CCB) mandated by RBI for Indian commercial banks under Basel III?",
        "questionHi": "बासेल III के तहत RBI द्वारा भारतीय बैंकों के लिए न्यूनतम CET1 और CCB क्या निर्धारित किया गया है?",
        "conventionalSolEn": "Under RBI's Basel III guidelines, commercial banks in India must maintain a minimum Common Equity Tier 1 (CET1) of 5.5% of RWA and a Capital Conservation Buffer (CCB) of 2.5% of RWA, making total CET1 requirement 8.0%.",
        "conventionalSolHi": "न्यूनतम CET1 = 5.5% और CCB = 2.5%।",
        "shortcutTrickEn": "CET1 = 5.5%, CCB = 2.5% (Total CET1 with CCB = 8.0%).",
        "shortcutTrickHi": "CET1 = 5.5%, CCB = 2.5%।",
        "finalAnswer": "CET1 = 5.5%, CCB = 2.5%"
      },
      {
        "level": "Mains",
        "questionEn": "Under the SARFAESI Act 2002, what is the statutory notice period a secured creditor (bank) must grant the defaulting borrower before taking possession of secured assets?",
        "questionHi": "सरफेसी अधिनियम 2002 के तहत, बैंक को गिरवी संपत्ति पर कब्जा करने से पहले ऋणी को कितने दिनों का वैधानिक नोटिस देना अनिवार्य है?",
        "conventionalSolEn": "Under Section 13(2) of SARFAESI Act 2002, the secured creditor must issue a 60-day demand notice requiring the borrower to discharge liabilities in full. If the borrower fails to pay within 60 days, the bank can take possession of secured assets under Section 13(4).",
        "conventionalSolHi": "धारा 13(2) के तहत 60 दिनों का मांग नोटिस देना अनिवार्य है।",
        "shortcutTrickEn": "SARFAESI Section 13(2) notice period = 60 days.",
        "shortcutTrickHi": "60 दिन।",
        "finalAnswer": "60 days"
      }
    ]
  },

  // ==========================================================================
  // Topic: digital-banking-npci
  // ==========================================================================
  'digital-banking-npci': {
    "topicSlug": "digital-banking-npci",
    "coreTheoryEn": "Digital banking infrastructure in India is anchored by the **National Payments Corporation of India (NPCI)**, set up in **2008** under the Payment and Settlement Systems Act 2007.\n\n### 1. The NPCI Product Umbrella:\n- **UPI (Unified Payments Interface):** Virtual Payment Address (VPA), instant 24x7 mobile payment protocol. UPI 123Pay (feature phones), UPI Lite (offline pinless small payments up to ₹500).\n- **IMPS (Immediate Payment Service):** Real-time interbank electronic funds transfer. Maximum limit per transaction = **₹5 Lakh**.\n- **RuPay:** India's domestic card scheme launched to challenge Visa/Mastercard.\n- **AePS (Aadhaar Enabled Payment System):** Interoperable financial transactions through Aadhaar biometric authentication at Business Correspondents / MicroATMs.\n- **NACH (National Automated Clearing House):** Web-based high-volume bulk interbank clearing (subsidies, dividends, salaries, ECS replacement).\n- **NETC FASTag:** RFID-based electronic toll collection.\n\n### 2. Wholesale Settlement Systems (Operated by RBI directly):\n- **RTGS (Real Time Gross Settlement):** Order-by-order gross settlement. Minimum limit = **₹2,00,000**; No maximum ceiling. Available 24x7x365.\n- **NEFT (National Electronic Funds Transfer):** Batch-based net settlement in half-hourly batches 24x7. No minimum limit; No maximum ceiling.",
    "coreTheoryHi": "डिजिटल बैंकिंग, एनपीसीआई (NPCI) एवं वित्तीय समावेशन:\n### 1. NPCI के प्रमुख उत्पाद:\n- **UPI:** VPA आधारित तात्कालिक भुगतान प्रणाली।\n- **IMPS:** 24x7 तात्कालिक अंतर-बैंक अंतरण (अधिकतम सीमा: ₹5 लाख)।\n- **AePS:** आधार बायोमेट्रिक आधारित बैंकिंग।\n- **NACH:** वेतन, सब्सिडी का थोक इलेक्ट्रॉनिक समाशोधन।\n\n### 2. RBI द्वारा संचालित भुगतान प्रणालियां:\n- **RTGS (रियल टाइम ग्रॉस सेटलमेंट):** न्यूनतम ₹2 लाख, कोई अधिकतम सीमा नहीं, 24x7 उपलब्ध।\n- **NEFT:** आधे घंटे के बैचों में नेट निपटान, कोई न्यूनतम या अधिकतम सीमा नहीं।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Indian Digital Payment Protocols Architecture</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">RTGS (RBI)</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Min: ₹2 Lakh</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Real-time gross</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">IMPS (NPCI)</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Max: ₹5 Lakh</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Instant retail</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">NEFT (RBI)</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">No Min / Max</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Half-hourly batches</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Payment System Limit Boundaries",
        "latexFormula": "\\text{RTGS}_{\\min} = \\text{₹2,00,000} \\quad | \\quad \\text{IMPS}_{\\max} = \\text{₹5,00,000}",
        "explanationEn": "RTGS requires a minimum floor of 2 lakhs; IMPS has a ceiling of 5 lakhs.",
        "explanationHi": "RTGS की न्यूनतम सीमा ₹2 लाख है; IMPS की अधिकतम सीमा ₹5 लाख है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Settlement Entity Classification",
        "conventionalTime": "30s",
        "shortcutTime": "5s",
        "conventionalMethodEn": "Confusing whether NEFT and RTGS belong to NPCI.",
        "conventionalMethodHi": "NEFT/RTGS को NPCI का उत्पाद मान लेना।",
        "shortcutStepsEn": "1. RTGS & NEFT are owned and operated directly by RBI.\n2. UPI, IMPS, RuPay, AePS, NACH, NETC are owned and operated by NPCI.\n3. Never mix RBI systems with NPCI systems.",
        "shortcutStepsHi": "RTGS और NEFT का संचालन RBI करता है; UPI और IMPS का NPCI।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Thinking NEFT has a Minimum Transfer Limit",
        "mistakeStudentsMake": "Assuming NEFT requires at least ₹1,000.",
        "howToAvoid": "NEFT can be used to transfer even ₹1 (zero minimum limit)."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "What is the minimum transaction amount required to initiate a fund transfer through the Real Time Gross Settlement (RTGS) system in India?",
        "questionHi": "भारत में RTGS के माध्यम से धन अंतरण के लिए न्यूनतम आवश्यक राशि क्या है?",
        "conventionalSolEn": "The RTGS system is meant for high-value transactions. The minimum amount that can be remitted through RTGS is ₹2,00,000 (Two Lakh Rupees). There is no upper ceiling.",
        "conventionalSolHi": "RTGS के लिए न्यूनतम राशि ₹2,00,000 है।",
        "shortcutTrickEn": "RTGS minimum floor = ₹2 Lakh.",
        "shortcutTrickHi": "₹2 लाख।",
        "finalAnswer": "₹2,00,000"
      },
      {
        "level": "Moderate",
        "questionEn": "Which organization in India launched the Unified Payments Interface (UPI) and RuPay card schemes?",
        "questionHi": "भारत में UPI और RuPay कार्ड योजना किस संगठन द्वारा शुरू की गई?",
        "conventionalSolEn": "The National Payments Corporation of India (NPCI), an umbrella organization for operating retail payments and settlement systems in India, launched RuPay (2012) and UPI (2016).",
        "conventionalSolHi": "भारतीय राष्ट्रीय भुगतान निगम (NPCI)।",
        "shortcutTrickEn": "Retail payment innovations (UPI, RuPay, IMPS) = NPCI.",
        "shortcutTrickHi": "NPCI।",
        "finalAnswer": "National Payments Corporation of India (NPCI)"
      },
      {
        "level": "Mains",
        "questionEn": "What is the per-transaction limit and maximum wallet balance allowed on UPI Lite for offline pinless digital transactions?",
        "questionHi": "UPI Lite पर पिन-रहित ऑफलाइन लेनदेन के लिए प्रति लेनदेन सीमा और अधिकतम वॉलेट शेष राशि क्या है?",
        "conventionalSolEn": "RBI enhanced the per-transaction limit for UPI Lite to ₹500 (earlier ₹200). The maximum overall wallet balance allowed on UPI Lite at any point in time is ₹2,000.",
        "conventionalSolHi": "प्रति लेनदेन सीमा = ₹500, वॉलेट की अधिकतम सीमा = ₹2,000।",
        "shortcutTrickEn": "UPI Lite: ₹500 per transaction / ₹2,000 maximum balance.",
        "shortcutTrickHi": "₹500 / ₹2,000।",
        "finalAnswer": "₹500 per transaction; ₹2,000 wallet limit"
      }
    ]
  },

  // ==========================================================================
  // Topic: capital-money-markets
  // ==========================================================================
  'capital-money-markets': {
    "topicSlug": "capital-money-markets",
    "coreTheoryEn": "Financial markets in India are partitioned into the **Money Market** (short-term funds $\\le 1$ year, regulated by RBI) and the **Capital Market** (long-term funds $> 1$ year, regulated by SEBI).\n\n### 1. Money Market Instruments (Tenor $\\le 1$ Year):\n- **Treasury Bills (T-Bills):** Zero-coupon discounted debt issued by GoI through RBI. Tenors: **91 days, 182 days, 364 days**. Minimum denomination = **₹25,000**.\n- **Cash Management Bills (CMBs):** Ultra-short term discounted bills for temporary cash mismatches (tenor < 91 days).\n- **Commercial Paper (CP):** Unsecured promissory note issued by highly-rated corporates/NBFCs to raise working capital. Tenor: **7 days to 1 year**. Minimum denomination = **₹5 Lakh**.\n- **Certificate of Deposit (CD):** Negotiable money market receipt issued by commercial banks and financial institutions. Tenor: **7 days to 1 year** (banks). Minimum denomination = **₹1 Lakh**.\n- **Call Money & Notice Money:** Inter-bank borrowing without collateral.\n  - *Call Money:* 1 day (overnight).\n  - *Notice Money:* 2 days to 14 days.\n  - *Term Money:* 15 days to 1 year.\n\n### 2. Capital Market Segments:\n- **Primary Market:** New securities issued for the first time (IPO - Initial Public Offering, FPO - Follow-on Public Offering, Rights Issue, Private Placement).\n- **Secondary Market:** Existing securities traded between investors on stock exchanges (NSE, BSE) under **T+1 Rolling Settlement**.",
    "coreTheoryHi": "पूंजी एवं मुद्रा बाजार (Capital & Money Markets):\n### 1. मुद्रा बाजार उपकरण (Money Market - RBI द्वारा विनियमित, $\\le 1$ वर्ष):\n- **ट्रेजरी बिल (T-Bills):** 91 दिन, 182 दिन, 364 दिन (न्यूनतम: ₹25,000)।\n- **कमर्शियल पेपर (CP):** कॉर्पोरेट्स द्वारा जारी, 7 दिन से 1 वर्ष (न्यूनतम: ₹5 लाख)।\n- **सर्टिफिकेट ऑफ डिपॉजिट (CD):** बैंकों द्वारा जारी, 7 दिन से 1 वर्ष (न्यूनतम: ₹1 लाख)।\n- **कॉल मनी:** 1 दिन (रातभर) | **नोटिस मनी:** 2 से 14 दिन | **टर्म मनी:** 15 दिन से 1 वर्ष।\n\n### 2. पूंजी बाजार (Capital Market - SEBI द्वारा विनियमित, $> 1$ वर्ष):\n- प्राथमिक बाजार (IPO/FPO) और द्वितीयक बाजार (NSE/BSE, T+1 निपटान)।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Money Market Minimum Denomination Matrix</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">T-Bills (GoI)</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"13\">Min: ₹25,000</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">91, 182, 364 days</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Cert. of Deposit (CD)</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"13\">Min: ₹1,00,000</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Issued by Banks</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Commercial Paper (CP)</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"13\">Min: ₹5,00,000</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Issued by Corporates</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Money Market Denomination Rule",
        "latexFormula": "\\text{T-Bill}_{\\min} = \\text{₹25,000} \\quad | \\quad \\text{CD}_{\\min} = \\text{₹1 Lakh} \\quad | \\quad \\text{CP}_{\\min} = \\text{₹5 Lakh}",
        "explanationEn": "T-Bills, CDs, and CPs scale at 25k, 1 Lakh, and 5 Lakh minimums.",
        "explanationHi": "ट्रेजरी बिल ₹25,000; CD ₹1 लाख; CP ₹5 लाख न्यूनतम मूल्यवर्ग में जारी होते हैं।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Call vs Notice vs Term Mnemonics",
        "conventionalTime": "30s",
        "shortcutTime": "5s",
        "conventionalMethodEn": "Memorizing days randomly without structure.",
        "conventionalMethodHi": "दिनों की संख्या भूल जाना।",
        "shortcutStepsEn": "1. Call = 1 day (quick call).\n2. Notice = 2 to 14 days (give two-week notice).\n3. Term = > 14 days (15 days to 1 year).\n4. Solved in 3 seconds.",
        "shortcutStepsHi": "Call = 1 दिन; Notice = 2-14 दिन; Term = 15 दिन से 1 वर्ष।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing Issuers of CP and CD",
        "mistakeStudentsMake": "Thinking Commercial Paper is issued by banks.",
        "howToAvoid": "Commercial Paper (CP) is issued by CORPORATES; Certificate of Deposit (CD) is issued by BANKS."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "What are the standard maturities (tenors) of Treasury Bills (T-Bills) currently issued by the Government of India?",
        "questionHi": "भारत सरकार द्वारा वर्तमान में जारी किए जाने वाले ट्रेजरी बिलों की मानक परिपक्वता अवधियां क्या हैं?",
        "conventionalSolEn": "The Government of India currently issues three types of Treasury Bills through auction: 91-day, 182-day, and 364-day T-Bills. They are zero-coupon debt instruments issued at a discount and redeemed at face value.",
        "conventionalSolHi": "91 दिन, 182 दिन और 364 दिन।",
        "shortcutTrickEn": "91d, 182d (91×2), 364d (182×2).",
        "shortcutTrickHi": "91, 182, 364 दिन।",
        "finalAnswer": "91 days, 182 days, and 364 days"
      },
      {
        "level": "Moderate",
        "questionEn": "What is the minimum denomination in which Commercial Paper (CP) can be issued in the Indian money market?",
        "questionHi": "भारतीय मुद्रा बाजार में कमर्शियल पेपर (CP) न्यूनतम किस मूल्यवर्ग में जारी किया जा सकता है?",
        "conventionalSolEn": "As per RBI guidelines, Commercial Paper (CP) can be issued in denominations of ₹5 Lakh and multiples thereof. It is an unsecured promissory note with maturity between 7 days and 1 year.",
        "conventionalSolHi": "कमर्शियल पेपर न्यूनतम ₹5 लाख और उसके गुणकों में जारी किया जाता है।",
        "shortcutTrickEn": "CP minimum = ₹5 Lakh.",
        "shortcutTrickHi": "₹5 लाख।",
        "finalAnswer": "₹5,00,000"
      },
      {
        "level": "Mains",
        "questionEn": "In the inter-bank money market, borrowing or lending of funds for a period between 2 days and 14 days is technically classified as which of the following?",
        "questionHi": "अंतर-बैंक मुद्रा बाजार में 2 दिन से 14 दिन की अवधि के लिए धन उधार लेने या देने को क्या कहा जाता है?",
        "conventionalSolEn": "In the Indian money market: Borrowing/lending for 1 day (overnight) is 'Call Money'. Borrowing/lending for 2 days to 14 days is 'Notice Money'. Borrowing/lending for 15 days to 1 year is 'Term Money'.",
        "conventionalSolHi": "2 से 14 दिनों के लिए अंतर-बैंक उधार 'Notice Money' कहलाता है।",
        "shortcutTrickEn": "1 day = Call; 2-14 days = Notice; 15-365 days = Term.",
        "shortcutTrickHi": "Notice Money (नोटिस मनी)।",
        "finalAnswer": "Notice Money"
      }
    ]
  },

  // ==========================================================================
  // Topic: computer-hardware-memory-os
  // ==========================================================================
  'computer-hardware-memory-os': {
    "topicSlug": "computer-hardware-memory-os",
    "coreTheoryEn": "Computer Aptitude in banking exams (RRB PO & Clerk, SBI/IBPS PO Mains) tests von Neumann architecture, memory hierarchy, and process scheduling.\n\n### 1. Von Neumann Architecture & Bus System:\n- **CPU Components:**\n  - **ALU (Arithmetic Logic Unit):** Arithmetic ($+, -, \\times, \\div$) and logical comparisons ($AND, OR, NOT, <, >$).\n  - **Control Unit (CU):** Directs flow of data and instructions (fetch-decode-execute cycle).\n  - **Registers:** Fastest internal CPU memory (Accumulator, Program Counter PC, Instruction Register IR, Memory Address Register MAR).\n- **System Buses:**\n  - *Data Bus:* Bidirectional (transfers actual data).\n  - *Address Bus:* Unidirectional (CPU points to memory address; width determines max addressable memory, e.g. 32-bit = $2^{32} = 4\\text{ GB}$).\n  - *Control Bus:* Bidirectional/unidirectional (control signals: read, write, interrupt).\n\n### 2. Memory Hierarchy (Fastest to Slowest):\n$$\\text{Registers} > \\text{L1 Cache} > \\text{L2 Cache} > \\text{L3 Cache} > \\text{RAM (DRAM)} > \\text{SSD / Flash} > \\text{HDD} > \\text{Magnetic Tape}$$\n- **SRAM (Static RAM):** Used in Cache memory, faster, does NOT need periodic refreshing, expensive, uses flip-flops.\n- **DRAM (Dynamic RAM):** Used in main RAM, uses capacitors and transistors, REQUIRES continuous electric refreshing to prevent data loss.\n- **ROM Types:** PROM (Programmable), EPROM (Erasable via UV light), EEPROM (Electrically Erasable, e.g. Flash memory).\n\n### 3. Operating System Core Concepts:\n- **Kernel:** Central core of the OS that manages CPU, memory, and devices.\n- **Deadlock:** A state where processes are permanently blocked. **4 Necessary Coffman Conditions:**\n  1. Mutual Exclusion\n  2. Hold and Wait\n  3. No Preemption\n  4. Circular Wait",
    "coreTheoryHi": "कंप्यूटर हार्डवेयर, मेमोरी एवं ऑपरेटिंग सिस्टम:\n### 1. मेमोरी पदानुक्रम (गति के अनुसार):\n$$\\text{रजिस्टर (Registers)} > \\text{कैश (L1/L2/L3 Cache)} > \\text{रैम (RAM)} > \\text{एसएसडी (SSD)} > \\text{हार्ड डिस्क (HDD)}$$\n- **SRAM:** कैश मेमोरी में उपयोग, रिफ्रेश करने की आवश्यकता नहीं होती।\n- **DRAM:** मुख्य मेमोरी, कैपेसिटर आधारित, बार-बार रिफ्रेश करना अनिवार्य है।\n\n### 2. ऑपरेटिंग सिस्टम एवं डेडलॉक (Deadlock):\n- **कर्नेल (Kernel):** ऑपरेटिंग सिस्टम का हृदय।\n- **डेडलॉक की 4 आवश्यक शर्तें (Coffman Conditions):**\n  1. पारस्परिक अपवर्जन (Mutual Exclusion)\n  2. होल्ड एंड वेट (Hold and Wait)\n  3. कोई पूर्वमुक्ति नहीं (No Preemption)\n  4. चक्रीय प्रतीक्षा (Circular Wait)",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">Computer Memory Hierarchy &amp; Speed Pyramid</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\" font-size=\"13\">1. CPU Registers</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#dc2626\" font-size=\"12\">&lt; 1 ns Access</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#b91c1c\" font-size=\"11\">Fastest / Smallest</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">2. Cache &amp; RAM</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">SRAM / DRAM</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">Volatile Primary Memory</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">3. SSD &amp; HDD</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Secondary Storage</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">Non-Volatile / High Capacity</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Address Bus Memory Capacity Formula",
        "latexFormula": "\\text{Addressable Memory} = 2^N \\text{ bytes} \\quad (\\text{where } N = \\text{Address Bus bits})",
        "explanationEn": "A 32-bit address bus can address 2^32 bytes = 4 GB of RAM directly.",
        "explanationHi": "32-बिट एड्रेस बस अधिकतम 4 GB रैम को एक्सेस कर सकती है।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "SRAM vs DRAM Refresh Trick",
        "conventionalTime": "20s",
        "shortcutTime": "2s",
        "conventionalMethodEn": "Thinking whether Cache uses DRAM or SRAM.",
        "conventionalMethodHi": "कैश और रैम में अंतर भूलना।",
        "shortcutStepsEn": "1. D in DRAM stands for Dynamic ➔ Needs constant refreshing.\n2. S in SRAM stands for Static ➔ Stays without refreshing (used in Cache).\n3. Solved in 2 seconds.",
        "shortcutStepsHi": "DRAM = Dynamic (रिफ्रेश चाहिए); SRAM = Static (कैश मेमोरी, रिफ्रेश नहीं चाहिए)।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Confusing Volatile and Non-Volatile Memory",
        "mistakeStudentsMake": "Thinking ROM is volatile because it is inside the computer box.",
        "howToAvoid": "ROM and Secondary Storage are NON-VOLATILE (retain data on power off). RAM and Cache are VOLATILE."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Which of the following computer memories requires periodic electric refreshing to retain its stored data?",
        "questionHi": "निम्न में से किस कंप्यूटर मेमोरी को संग्रहीत डेटा बनाए रखने के लिए समय-समय पर विद्युत रिफ्रेशिंग की आवश्यकता होती है?",
        "conventionalSolEn": "Dynamic RAM (DRAM) stores data in microscopic capacitors within an integrated circuit. Because capacitors leak charge gradually, DRAM must be read and rewritten (refreshed) thousands of times per second. Static RAM (SRAM) does not require refreshing.",
        "conventionalSolHi": "DRAM (डायनामिक रैम) कैपेसिटर आधारित होती है और इसे लगातार रिफ्रेश करना पड़ता है।",
        "shortcutTrickEn": "DRAM = Dynamic = Requires periodic Refreshing.",
        "shortcutTrickHi": "DRAM।",
        "finalAnswer": "Dynamic RAM (DRAM)"
      },
      {
        "level": "Moderate",
        "questionEn": "Which internal CPU register holds the memory address of the NEXT instruction waiting to be fetched and executed?",
        "questionHi": "कौन सा आंतरिक CPU रजिस्टर निष्पादित होने वाले अगले निर्देश का मेमोरी पता रखता है?",
        "conventionalSolEn": "The Program Counter (PC), also called Instruction Pointer, holds the memory address of the next instruction to be fetched from memory. Once fetched, the PC automatically increments to point to the subsequent instruction.",
        "conventionalSolHi": "प्रोग्राम काउंटर (Program Counter - PC) अगले निर्देश का पता रखता है।",
        "shortcutTrickEn": "Next instruction address = Program Counter (PC).",
        "shortcutTrickHi": "Program Counter (PC)।",
        "finalAnswer": "Program Counter (PC)"
      },
      {
        "level": "Mains",
        "questionEn": "How many necessary conditions (Coffman conditions) must be simultaneously satisfied for a Deadlock situation to arise in an operating system?",
        "questionHi": "एक ऑपरेटिंग सिस्टम में डेडलॉक (Deadlock) उत्पन्न होने के लिए कितनी शर्तों (कौफमैन शर्तें) का एक साथ पूरा होना आवश्यक है?",
        "conventionalSolEn": "In 1971, E.G. Coffman proved that a deadlock can arise if and only if four conditions hold simultaneously: (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, and (4) Circular Wait. Eliminating even one condition prevents deadlock.",
        "conventionalSolHi": "डेडलॉक के लिए 4 स्थितियां एक साथ होना आवश्यक हैं: म्यूचुअल एक्सक्लूजन, होल्ड एंड वेट, नो प्रीमेम्प्शन, और सर्कुलर वेट।",
        "shortcutTrickEn": "4 Coffman Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
        "shortcutTrickHi": "4 स्थितियां।",
        "finalAnswer": "4 conditions"
      }
    ]
  },

  // ==========================================================================
  // Topic: networking-internet-security
  // ==========================================================================
  'networking-internet-security': {
    "topicSlug": "networking-internet-security",
    "coreTheoryEn": "Computer Networking and Cybersecurity in banking exams test the **OSI 7-Layer Reference Model**, network protocols, and cryptographic defense.\n\n### 1. The OSI 7-Layer Reference Model:\n$$\\begin{matrix}\n\\textbf{Layer} & \\textbf{Name} & \\textbf{Data Unit} & \\textbf{Key Device / Protocol} \\\\\n\\hline\n7 & \\text{Application} & \\text{Data} & \\text{HTTP, HTTPS, FTP, SMTP, DNS} \\\\\n6 & \\text{Presentation} & \\text{Data} & \\text{Encryption, Compression, SSL, ASCII} \\\\\n5 & \\text{Session} & \\text{Data} & \\text{Dialog control, Session tokens} \\\\\n4 & \\text{Transport} & \\text{Segments} & \\text{TCP (Reliable), UDP (Fast), Ports} \\\\\n3 & \\text{Network} & \\text{Packets} & \\text{Router, IP (IPv4 32-bit, IPv6 128-bit)} \\\\\n2 & \\text{Data Link} & \\text{Frames} & \\text{Switch, Bridge, MAC (48-bit)} \\\\\n1 & \\text{Physical} & \\text{Bits} & \\text{Hub, Repeater, Cables, Modems}\n\\end{matrix}$$\n*Mnemonic to remember:* **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing ($7 \\to 1$).\n\n### 2. Standard Network Topologies:\n- **Mesh Topology:** Every node is connected to every other node.\n  $$\\text{Number of Duplex Links} = \\frac{N(N - 1)}{2}$$\n  Most fault-tolerant, most redundant, highest cabling cost.\n- **Star Topology:** All nodes connect to a central Hub/Switch. If one cable fails, only that node goes down. Central hub failure halts the entire network.\n\n### 3. Cybersecurity & Malware Taxonomies:\n- **Phishing:** Fraudulent emails/websites imitating banks to harvest login credentials.\n- **Ransomware:** Encrypts user files and demands cryptocurrency extortion payment.\n- **Trojan Horse:** Malicious program camouflaged as legitimate, harmless software.\n- **Worm:** Self-replicating malware that spreads across networks **without user intervention**.",
    "coreTheoryHi": "कंप्यूटर नेटवर्किंग, इंटरनेट एवं साइबर सुरक्षा:\n### 1. OSI 7-परत मॉडल (OSI 7-Layer Model):\n- **7. Application:** HTTP, HTTPS (पोर्ट 443), FTP (पोर्ट 20/21), SMTP (पोर्ट 25)\n- **6. Presentation:** एन्क्रिप्शन (SSL/TLS), डेटा कम्प्रेशन\n- **4. Transport:** TCP (विश्वसनीय), UDP (अविश्वसनीय/तीव्र), पोर्ट्स\n- **3. Network:** राउटर, IP एड्रेस (IPv4 = 32 बिट, IPv6 = 128 बिट)\n- **2. Data Link:** स्विच, ब्रिज, MAC एड्रेस (48 बिट हेक्साडेसिमल)\n- **1. Physical:** हब, रिपीटर, केबल (बिट्स में डेटा)\n\n### 2. नेटवर्क टोपोलॉजी:\n- **मेश टोपोलॉजी (Mesh):** प्रत्येक नोड एक-दूसरे से जुड़ा होता है। कुल लिंक = $\\frac{N(N-1)}{2}$। सर्वाधिक सुरक्षित।\n- **स्टार टोपोलॉजी (Star):** केंद्रीय हब/स्विच से जुड़ी होती है।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">OSI 7-Layer Protocol Stack &amp; Hardware Devices</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">Layer 3: Network</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">Packets | Router</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">IP Addressing (32/128 bit)</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">Layer 2: Data Link</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">Frames | Switch</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">MAC Address (48-bit)</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">Layer 1: Physical</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">Bits | Hub / Repeater</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">Raw electrical signals</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Mesh Topology Links Formula",
        "latexFormula": "\\text{Total Links} = \\frac{N(N - 1)}{2} \\quad (\\text{where } N = \\text{number of nodes})",
        "explanationEn": "Calculates physical communication lines in full mesh networking.",
        "explanationHi": "पूर्ण मेश नेटवर्क में कुल आवश्यक संचार लिंकों की संख्या।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Device-to-Layer Fast Mapping",
        "conventionalTime": "30s",
        "shortcutTime": "3s",
        "conventionalMethodEn": "Trying to memorize which layer each hardware runs on.",
        "conventionalMethodHi": "डिवाइस और लेयर में भ्रमित होना।",
        "shortcutStepsEn": "1. Repeater / Hub = Layer 1 (Physical).\n2. Switch / Bridge = Layer 2 (Data Link - MAC).\n3. Router = Layer 3 (Network - IP).\n4. Gateway = Layer 7 (Application).",
        "shortcutStepsHi": "Hub = L1; Switch = L2; Router = L3; Gateway = L7।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "IPv4 vs IPv6 Bit Length Confusion",
        "mistakeStudentsMake": "Confusing IPv4 (32 bits / 4 bytes) with IPv6 (128 bits / 16 bytes) or MAC (48 bits / 6 bytes).",
        "howToAvoid": "IPv4 = 32 bits. MAC Address = 48 bits. IPv6 = 128 bits."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "What is the total bit length of an IPv4 address and an IPv6 address respectively in computer networking?",
        "questionHi": "कंप्यूटर नेटवर्किंग में क्रमशः IPv4 और IPv6 पते की कुल बिट लंबाई क्या है?",
        "conventionalSolEn": "An IPv4 address consists of 32 bits (4 bytes), represented as four decimal numbers separated by dots (e.g. 192.168.1.1). An IPv6 address consists of 128 bits (16 bytes), represented as eight groups of four hexadecimal digits separated by colons.",
        "conventionalSolHi": "IPv4 = 32 बिट्स, IPv6 = 128 बिट्स।",
        "shortcutTrickEn": "IPv4 = 32 bits; IPv6 = 128 bits.",
        "shortcutTrickHi": "32 बिट्स और 128 बिट्स।",
        "finalAnswer": "IPv4 = 32 bits, IPv6 = 128 bits"
      },
      {
        "level": "Moderate",
        "questionEn": "In a network consisting of 10 computers connected in a fully connected Mesh topology, how many physical communication links are required?",
        "questionHi": "पूर्ण मेश टोपोलॉजी में जुड़े 10 कंप्यूटरों के नेटवर्क में कितने भौतिक संचार लिंक आवश्यक होंगे?",
        "conventionalSolEn": "Formula for number of physical links in a mesh topology is N(N - 1) / 2. For N = 10 nodes: Links = 10 × (10 - 1) / 2 = (10 × 9) / 2 = 90 / 2 = 45 links.",
        "conventionalSolHi": "मेश टोपोलॉजी सूत्र: N(N - 1) / 2 = 10 × 9 / 2 = 45 लिंक।",
        "shortcutTrickEn": "10 × 9 / 2 = 45 links.",
        "shortcutTrickHi": "45 लिंक।",
        "finalAnswer": "45"
      },
      {
        "level": "Mains",
        "questionEn": "At which layer of the OSI 7-layer reference model does data encryption, decryption, and compression occur?",
        "questionHi": "OSI 7-लेयर मॉडल की किस परत पर डेटा एन्क्रिप्शन, डिक्रिप्शन और कम्प्रेशन होता है?",
        "conventionalSolEn": "The Presentation Layer (Layer 6) is responsible for the syntax and semantics of the information exchanged. It handles data translation, ASCII/EBCDIC conversions, data compression, and cryptographic encryption/decryption (e.g., SSL/TLS protocol functions).",
        "conventionalSolHi": "प्रेजेंटेशन लेयर (Presentation Layer - Layer 6) पर एन्क्रिप्शन और कम्प्रेशन होता है।",
        "shortcutTrickEn": "Encryption, Decryption, Compression = Presentation Layer (Layer 6).",
        "shortcutTrickHi": "Presentation Layer (लेयर 6)।",
        "finalAnswer": "Presentation Layer (Layer 6)"
      }
    ]
  },

  // ==========================================================================
  // Topic: dbms-ms-office-number-system
  // ==========================================================================
  'dbms-ms-office-number-system': {
    "topicSlug": "dbms-ms-office-number-system",
    "coreTheoryEn": "DBMS, MS Office (Excel formulas & shortcuts), and Number Systems constitute guaranteed marks in Computer Aptitude.\n\n### 1. Database Management Systems (DBMS & SQL):\n- **Relational DBMS (RDBMS):** Data structured into tables (relations) with rows (tuples) and columns (attributes).\n- **Key Concepts:**\n  - **Primary Key:** Unique identifier for each record. CANNOT be NULL!\n  - **Foreign Key:** A field in one table that uniquely identifies a row in another table (enforces **Referential Integrity**).\n  - **Candidate Key:** Minimal set of attributes that can uniquely identify a tuple.\n- **SQL Sublanguage Classification:**\n  - **DDL (Data Definition Language):** Defines structure: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`. (Auto-committed!).\n  - **DML (Data Manipulation Language):** Modifies records: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.\n  - **DCL (Data Control Language):** Access rights: `GRANT`, `REVOKE`.\n  - **TCL (Transaction Control Language):** `COMMIT`, `ROLLBACK`, `SAVEPOINT`.\n\n### 2. MS Excel Formulas & Referencing:\n- **Relative Referencing (`A1`):** Adjusts automatically when formula is copied to another cell.\n- **Absolute Referencing (`$A$1`):** Row and Column are permanently locked using the `$` sign.\n  - Shortcut to toggle absolute referencing: **`F4` Key**.\n- **Key Functions:**\n  - `VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`\n  - `COUNT(range)` counts numbers only; `COUNTA(range)` counts all non-empty cells.\n\n### 3. Number Systems Conversion:\n- Binary (Base 2: 0, 1) $\\leftrightarrow$ Decimal (Base 10) $\\leftrightarrow$ Hexadecimal (Base 16: 0-9, A-F where $A=10, B=11, C=12, D=13, E=14, F=15$).\n- Hexadecimal conversion shortcut: Group binary bits into sets of **4 bits** from right to left!\n  $$(10110110)_2 = \\underbrace{1011}_{11 = \\text{B}} \\, \\underbrace{0110}_{6} = (\\text{B}6)_{16}$$",
    "coreTheoryHi": "डीबीएमएस (DBMS), एमएस ऑफिस एवं संख्या प्रणाली:\n### 1. डेटाबेस प्रबंधन प्रणाली (DBMS & SQL):\n- **Primary Key:** अद्वितीय पहचानकर्ता, कभी NULL नहीं हो सकती।\n- **Foreign Key:** दूसरे टेबल से संबंध स्थापित करने वाली कुंजी (रेफरेंशियल इंटीग्रिटी)।\n- **DDL कमांड्स:** `CREATE`, `ALTER`, `DROP`, `TRUNCATE` (संरचना निर्माण)।\n- **DML कमांड्स:** `SELECT`, `INSERT`, `UPDATE`, `DELETE` (डेटा प्रबंधन)।\n\n### 2. MS Excel संदर्भ एवं शॉर्टकट:\n- **Absolute Reference:** `$A$1` (सेल को लॉक करना, F4 कुंजी से)।\n- **COUNT:** केवल संख्याओं की गिनती करता है; **COUNTA:** सभी भरे हुए सेल गिनता है।\n\n### 3. संख्या प्रणाली (Hexadecimal to Binary):\n- हेक्साडेसिमल (Base 16): 0-9 और A=10, B=11, C=12, D=13, E=14, F=15।\n- 4-बिट बाइनरी समूह बनाकर तुरंत हेक्साडेसिमल में बदलें।",
    "conceptSvgDiagram": "<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 660 180\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-full h-auto max-w-full block\">\n  <rect width=\"660\" height=\"180\" fill=\"#f8fafc\" rx=\"12\" />\n  <text x=\"330\" y=\"30\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\" font-size=\"16\">SQL Command Categories Architecture</text>\n  <rect x=\"50\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" />\n  <text x=\"130\" y=\"85\" text-anchor=\"middle\" fill=\"#1e40af\" font-weight=\"bold\" font-size=\"13\">DDL (Structure)</text>\n  <text x=\"130\" y=\"115\" text-anchor=\"middle\" fill=\"#2563eb\" font-size=\"12\">CREATE, ALTER</text>\n  <text x=\"130\" y=\"135\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-size=\"11\">DROP, TRUNCATE</text>\n\n  <rect x=\"250\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#ecfdf5\" stroke=\"#10b981\" />\n  <text x=\"330\" y=\"85\" text-anchor=\"middle\" fill=\"#065f46\" font-weight=\"bold\" font-size=\"13\">DML (Data)</text>\n  <text x=\"330\" y=\"115\" text-anchor=\"middle\" fill=\"#059669\" font-size=\"12\">INSERT, UPDATE</text>\n  <text x=\"330\" y=\"135\" text-anchor=\"middle\" fill=\"#047857\" font-size=\"11\">DELETE, SELECT</text>\n\n  <rect x=\"450\" y=\"55\" width=\"160\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#f59e0b\" />\n  <text x=\"530\" y=\"85\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\" font-size=\"13\">TCL (Transaction)</text>\n  <text x=\"530\" y=\"115\" text-anchor=\"middle\" fill=\"#d97706\" font-size=\"12\">COMMIT, ROLLBACK</text>\n  <text x=\"530\" y=\"135\" text-anchor=\"middle\" fill=\"#b45309\" font-size=\"11\">SAVEPOINT</text>\n</svg>",
    "formulasAndRules": [
      {
        "title": "Hexadecimal Nibble Grouping Rule",
        "latexFormula": "(b_3 b_2 b_1 b_0)_2 = (d)_{16} \\quad (\\text{Every 4 binary bits equal 1 hex digit})",
        "explanationEn": "Group binary digits in sets of 4 from right to left to convert to Hexadecimal directly.",
        "explanationHi": "बाइनरी अंकों को दाएं से 4-4 के समूहों में बांटकर हेक्साडेसिमल में बदलें।"
      }
    ],
    "shortcutTricks": [
      {
        "trickName": "Drop vs Truncate vs Delete",
        "conventionalTime": "30s",
        "shortcutTime": "5s",
        "conventionalMethodEn": "Confusing whether TRUNCATE is DDL or DML.",
        "conventionalMethodHi": "डिलीट और ट्रंकेट में अंतर भूलना।",
        "shortcutStepsEn": "1. DELETE = DML (can be rolled back, removes rows one by one).\n2. TRUNCATE = DDL (cannot be rolled back, resets whole table fast).\n3. DROP = DDL (destroys the entire table structure).",
        "shortcutStepsHi": "DELETE = DML (रोलबैक संभव); TRUNCATE = DDL (तालिका खाली करता है); DROP = संरचना समाप्त।"
      }
    ],
    "commonTraps": [
      {
        "trapTitle": "Primary Key Null Trap",
        "mistakeStudentsMake": "Assuming a Primary Key can contain a single NULL value.",
        "howToAvoid": "A Primary Key CANNOT contain any NULL values. A Unique Key can contain at most one NULL."
      }
    ],
    "solvedExamples": [
      {
        "level": "Easy",
        "questionEn": "Which function key is used in Microsoft Excel to toggle between relative, absolute, and mixed cell referencing (adding the $ symbol)?",
        "questionHi": "माइक्रोसॉफ्ट एक्सेल में सेल रेफरेंसिंग ($ चिन्ह जोड़ना) बदलने के लिए किस फंक्शन कुंजी का उपयोग किया जाता है?",
        "conventionalSolEn": "Pressing the F4 function key in MS Excel cycles through all reference modes: A1 (relative) ➔ $A$1 (absolute) ➔ A$1 (row absolute) ➔ $A1 (column absolute) ➔ A1.",
        "conventionalSolHi": "एक्सेल में F4 कुंजी सेल संदर्भ को लॉक करने ($A$1) के लिए प्रयुक्त होती है।",
        "shortcutTrickEn": "F4 toggles cell reference lock ($).",
        "shortcutTrickHi": "F4 कुंजी।",
        "finalAnswer": "F4"
      },
      {
        "level": "Moderate",
        "questionEn": "Convert the binary number (11010110)₂ into its equivalent Hexadecimal representation.",
        "questionHi": "बाइनरी संख्या (11010110)₂ को हेक्साडेसिमल में बदलिए।",
        "conventionalSolEn": "Divide into 4-bit nibbles from right to left: Group 1 (left): 1101 = (1×8 + 1×4 + 0×2 + 1×1) = 8 + 4 + 0 + 1 = 13. In Hexadecimal, 13 = 'D'. Group 2 (right): 0110 = (0×8 + 1×4 + 1×2 + 0×1) = 4 + 2 = 6. Combining the two hex digits gives: D6.",
        "conventionalSolHi": "1101 = 13 = D; 0110 = 6. संयुक्त हेक्साडेसिमल = D6।",
        "shortcutTrickEn": "1101 (13=D) and 0110 (6) ➔ (D6)₁₆.",
        "shortcutTrickHi": "D6।",
        "finalAnswer": "(D6)₁₆"
      },
      {
        "level": "Mains",
        "questionEn": "Which SQL command category do TRUNCATE, ALTER, and CREATE belong to, and why can TRUNCATE not be rolled back by default?",
        "questionHi": "TRUNCATE, ALTER और CREATE किस SQL श्रेणी के अंतर्गत आते हैं, और TRUNCATE को सामान्यतः रोलबैक क्यों नहीं किया जा सकता?",
        "conventionalSolEn": "TRUNCATE, ALTER, and CREATE belong to Data Definition Language (DDL). DDL commands execute an implicit COMMIT immediately upon completion in the database transaction log, altering the underlying schema/storage deallocation directly. Therefore, TRUNCATE cannot be rolled back with a ROLLBACK command.",
        "conventionalSolHi": "ये सभी DDL (Data Definition Language) कमांड हैं, जो स्वतः कमिट (Auto-commit) हो जाती हैं।",
        "shortcutTrickEn": "TRUNCATE = DDL ➔ Auto-committed ➔ Cannot be rolled back.",
        "shortcutTrickHi": "DDL (Data Definition Language)।",
        "finalAnswer": "DDL (Data Definition Language)"
      }
    ]
  },

};
