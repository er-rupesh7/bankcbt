// src/data/concepts/index.ts

import { ConceptGuideData } from '@/types/topicPractice';
import { QUANT_CONCEPT_GUIDES } from './quantConcepts';
import { REASONING_CONCEPT_GUIDES } from './reasoningConcepts';
import { LANGUAGE_CONCEPT_GUIDES } from './languageConcepts';
import { GA_COMPUTER_CONCEPT_GUIDES } from './gaComputerConcepts';

export const ALL_CONCEPT_GUIDES: Record<string, ConceptGuideData> = {
  ...QUANT_CONCEPT_GUIDES,
  ...REASONING_CONCEPT_GUIDES,
  ...LANGUAGE_CONCEPT_GUIDES,
  ...GA_COMPUTER_CONCEPT_GUIDES,
};

export {
  QUANT_CONCEPT_GUIDES,
  REASONING_CONCEPT_GUIDES,
  LANGUAGE_CONCEPT_GUIDES,
  GA_COMPUTER_CONCEPT_GUIDES,
};

