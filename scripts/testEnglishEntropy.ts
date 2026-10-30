import {
  buildEnglishEntropyContext,
  RC_DOMAIN_MATRIX,
  GRAMMAR_TRAP_POOL,
  VOCAB_SEED_CLUSTERS,
} from '../src/lib/englishEntropyEngine';
import {
  buildEnglishSectionPrompt,
  buildSectionPrompt,
  IBPSStandardSectionOutputSchema,
} from '../src/lib/ai/generator';

console.log('--- Testing English Entropy Engine ---');

// Test 1: Check entropy generation across 10 mocks
for (let m = 1; m <= 10; m++) {
  const ctx = buildEnglishEntropyContext(m, 12345);
  console.log(`Mock #${m}:`);
  console.log(`  RC Primary: ${ctx.rcThemePrimary}`);
  console.log(`  RC Secondary: ${ctx.rcThemeSecondary}`);
  console.log(`  Cloze Theme: ${ctx.clozeTheme}`);
  console.log(`  Grammar Rules (${ctx.grammarRules.length}): ${ctx.grammarRules.slice(0, 2).join(' | ')}...`);
  console.log(`  Vocab Cluster (${ctx.vocabSeeds.length}): ${ctx.vocabSeeds.join(', ')}`);
  
  if (!ctx.bannedTopics.includes('Central Bank Digital Currency (CBDC)')) {
    throw new Error('CBDC must be banned!');
  }
  if (!ctx.bannedTopics.includes('Digital Rupee (e₹)')) {
    throw new Error('Digital Rupee must be banned!');
  }
  if (ctx.grammarRules.length !== 6) {
    throw new Error('Expected 6 grammar rules!');
  }
}

// Test 2: Verify Prompt Generation for SBI PO Prelims (40 Qs)
const sbiPrompt = buildEnglishSectionPrompt({
  examCode: 'SBI_PO_PRELIMS',
  mockNumber: 1,
});
console.log('\n--- SBI PO Prelims Prompt (snippet) ---');
console.log(sbiPrompt.slice(0, 300) + '...\n');
if (!sbiPrompt.includes('SBI PO PRELIMS (Total = 40 Questions')) {
  throw new Error('SBI PO Prelims should have 40 Questions distribution');
}
if (!sbiPrompt.includes('BANNED DEFAULT TOPICS')) {
  throw new Error('Banned topics missing from prompt');
}

// Test 3: Verify Batch Range Support (Chunked generation)
const chunkedPrompt = buildEnglishSectionPrompt({
  examCode: 'SBI_PO_PRELIMS',
  mockNumber: 2,
  batchRange: 'Batch 1: Q1-Q16 [RC + Cloze]',
});
if (!chunkedPrompt.includes('ACTIVE BATCH RANGE (CHUNKED GENERATION)')) {
  throw new Error('Chunked batch range handling missing');
}
if (!chunkedPrompt.includes('Batch 1: Q1-Q16 [RC + Cloze]')) {
  throw new Error('Specific batch range string not injected');
}

// Test 4: Verify Mains Prompt (40 Qs with two RCs)
const mainsPrompt = buildEnglishSectionPrompt({
  examCode: 'SBI_PO_MAINS',
  stage: 'MAINS',
  mockNumber: 3,
});
if (!mainsPrompt.includes('Two High-Density Editorial Reading Comprehensions')) {
  throw new Error('Mains prompt should have two RCs');
}

// Test 5: Verify buildSectionPrompt delegation
const genericEnglishPrompt = buildSectionPrompt('IBPS_PO_PRELIMS', 'ENGLISH', 1.0, 1200, 30, 4);
if (!genericEnglishPrompt.includes('DYNAMIC ENTROPY SEED INJECTION')) {
  throw new Error('buildSectionPrompt should delegate to buildEnglishSectionPrompt for ENGLISH');
}

console.log('ALL ENGLISH ENTROPY AND PROMPT GENERATION TESTS PASSED SUCCESSFULLY!');
