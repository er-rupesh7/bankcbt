// src/lib/englishEntropyEngine.ts

export const RC_DOMAIN_MATRIX = [
  "Global Semiconductor Supply Chain & Geopolitics of Rare Earth Minerals",
  "Green Hydrogen Economy, Carbon Credit Markets & Sovereign Green Bonds",
  "Behavioral Economics: Nudge Theory in Public Policy & Consumer Debt",
  "Microfinance Evolution, Self-Help Groups (SHGs) & Rural Agritech in India",
  "Artificial Intelligence Governance, Deepfake Regulation & Copyright Law",
  "Antimicrobial Resistance (AMR), Global Public Health Funding & Biotech",
  "Oceanic Trade Chokepoints (Suez/Red Sea), Maritime Insurance & Inflation",
  "Demographic Dividend vs Aging Economies: Pension Fund Sustainability",
  "Space Commercialization, Low-Earth Orbit (LEO) Satellites & Telecom",
  "Fast Fashion Environmental Impact, Circular Economy & ESG Compliance",
  "Gig Economy Labor Laws, Algorithmic Management & Social Security Nets",
  "Neuroplasticity, Digital Attention Spans & Cognitive Load in Education",
  "Urban Heat Islands, Sustainable Architecture & Climate Migration",
  "Shadow Banking (NBFCs), Systemic Liquidity Risk & Macro-Prudential Norms",
  "Global Food Security, El Niño Weather Patterns & Crop Insurance Models",
  "Basel III Endgame, Countercyclical Capital Buffers & Bank Stress Testing"
];

export const GRAMMAR_TRAP_POOL = [
  "Subject-Verb Inversion after negative adverbs (Hardly/Scarcely/No sooner/Seldom)",
  "Subjunctive Mood (demand/insist/recommend that + base verb, 'were' in hypotheticals)",
  "Parallelism in correlative conjunctions (not only...but also, neither...nor, both...and)",
  "Dangling & Misplaced Modifiers / Participial phrases at sentence openings",
  "Subject-Verb Agreement with prepositional interveners (along with, as well as, together with)",
  "Pronoun-Antecedent Agreement & Relative Pronouns (who vs whom, which vs that)",
  "Conditional Clauses (Zero, First, Second, Third & Mixed Conditionals - Had + V3)",
  "Gerund vs Infinitive triggers (look forward to + V-ing, accustomed to + V-ing, make/let + bare infinitive)",
  "Comparison Traps ('that of' / 'those of', superior/inferior/prior to, double comparatives)",
  "Uncountable Nouns treated as plural (information, equipment, luggage, scenery, furniture)"
];

export const VOCAB_SEED_CLUSTERS = [
  ["Exacerbate", "Mitigate", "Ubiquitous", "Ephemeral", "Pragmatic", "Obfuscate"],
  ["Calibrate", "Proliferate", "Stringent", "Bolster", "Ameliorate", "Capricious"],
  ["Insulation", "Contagion", "Prudent", "Hegemony", "Recalcitrant", "Equivocal"],
  ["Catalyst", "Inertia", "Galvanize", "Pervasive", "Lucid", "Anachronism"],
  ["Sanguine", "Precarious", "Circumvent", "Delineate", "Perfidy", "Magnanimous"],
  ["Ostentatious", "Tenacious", "Voracious", "Assiduous", "Erudite", "fastidious"]
];

export interface EnglishEntropyContext {
  rcThemePrimary: string;
  rcThemeSecondary: string;
  clozeTheme: string;
  grammarRules: string[];
  vocabSeeds: string[];
  bannedTopics: string[];
}

export function buildEnglishEntropyContext(
  mockNumber: number,
  shiftSeed: number = Date.now()
): EnglishEntropyContext {
  const rcIndex1 = Math.abs(mockNumber * 3 + shiftSeed) % RC_DOMAIN_MATRIX.length;
  const rcIndex2 = (rcIndex1 + 5) % RC_DOMAIN_MATRIX.length;
  const clozeIndex = (rcIndex1 + 9) % RC_DOMAIN_MATRIX.length;

  // Pick 6 distinct grammar rules for Error Spotting & Phrase Replacement
  const selectedGrammarRules = Array.from({ length: 6 }, (_, i) => 
    GRAMMAR_TRAP_POOL[Math.abs(mockNumber + i * 2) % GRAMMAR_TRAP_POOL.length]
  );

  const selectedVocabCluster = VOCAB_SEED_CLUSTERS[Math.abs(mockNumber) % VOCAB_SEED_CLUSTERS.length];

  return {
    rcThemePrimary: RC_DOMAIN_MATRIX[rcIndex1],
    rcThemeSecondary: RC_DOMAIN_MATRIX[rcIndex2],
    clozeTheme: RC_DOMAIN_MATRIX[clozeIndex],
    grammarRules: selectedGrammarRules,
    vocabSeeds: selectedVocabCluster,
    bannedTopics: ["Central Bank Digital Currency (CBDC)", "Digital Rupee (e₹)"] // Explicitly ban the overused passage!
  };
}
