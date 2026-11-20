// src/data/bpsc/lms/english/index.ts
// Complete Master Curriculum Aggregator for BPSC TRE 4.0 English Language
// 6 Modules, 33 Chapters, 100% Comprehensive Digital Textbook

import { LMSChapter, LMSSubject } from '@/types/bpscLms';
import { MODULE_1_GRAMMAR_CHAPTERS } from './module1Grammar';
import { MODULE_2_TENSES_CHAPTERS } from './module2Tenses';
import { MODULE_3_STRUCTURE_CHAPTERS } from './module3Structure';
import { MODULE_4_VOICE_SPEECH_CHAPTERS } from './module4VoiceSpeech';
import { MODULE_5_VOCABULARY_CHAPTERS } from './module5Vocabulary';
import { MODULE_6_APPLICATION_CHAPTERS } from './module6ExamApplication';

export {
  MODULE_1_GRAMMAR_CHAPTERS,
  MODULE_2_TENSES_CHAPTERS,
  MODULE_3_STRUCTURE_CHAPTERS,
  MODULE_4_VOICE_SPEECH_CHAPTERS,
  MODULE_5_VOCABULARY_CHAPTERS,
  MODULE_6_APPLICATION_CHAPTERS,
};

// All 33 BPSC TRE 4.0 English Language Chapters compiled sequentially
export const BPSC_ENGLISH_CHAPTERS: LMSChapter[] = [
  ...MODULE_1_GRAMMAR_CHAPTERS,       // Chapters 1 to 9 (Grammar Fundamentals)
  ...MODULE_2_TENSES_CHAPTERS,        // Chapters 10 to 14 (Tenses & Verb Structures)
  ...MODULE_3_STRUCTURE_CHAPTERS,     // Chapters 15 to 19 (Sentence Structure & Syntax)
  ...MODULE_4_VOICE_SPEECH_CHAPTERS,  // Chapters 20 to 21 (Voice & Speech Transformation)
  ...MODULE_5_VOCABULARY_CHAPTERS,    // Chapters 22 to 28 (Vocabulary & Word Usage)
  ...MODULE_6_APPLICATION_CHAPTERS,   // Chapters 29 to 33 (Applied English & Exam Skills)
];

// Complete Subject definition for English Language in BPSC LMS
export const BPSC_ENGLISH_COMPLETE_SUBJECT: LMSSubject = {
  key: 'ENGLISH_LANGUAGE',
  sectionKey: 'PART_1_LANGUAGE',
  displayNameEn: 'English Language (Class 11–12 Master Curriculum)',
  displayNameHi: 'अंग्रेजी भाषा (कक्षा 11–12 संपूर्ण डिजिटल पाठ्यपुस्तक)',
  iconName: 'BookOpen',
  descriptionEn: 'Complete 33-Chapter Digital Textbook for BPSC TRE 4.0 English Language: Grammar, Tenses, Concord, Voice, Speech, Vocabulary, and Comprehension with unlimited practice drills.',
  descriptionHi: 'BPSC TRE 4.0 अंग्रेजी भाषा हेतु 6 मॉड्यूल्स एवं 33 अध्यायों की संपूर्ण डिजिटल पाठ्यपुस्तक: विस्तृत नियम, उदाहरण, अपवाद, PYQ विश्लेषण एवं असीमित प्रश्न जनरेटर।',
  chapters: BPSC_ENGLISH_CHAPTERS,
};

export const BPSC_ENGLISH_SUBJECTS: LMSSubject[] = [
  BPSC_ENGLISH_COMPLETE_SUBJECT,
];

// Helper functions for easy chapter retrieval
export function getEnglishChapterByNumber(chapterNumber: number): LMSChapter | undefined {
  return BPSC_ENGLISH_CHAPTERS.find((ch) => ch.chapterNumber === chapterNumber);
}

export function getEnglishChapterById(id: string): LMSChapter | undefined {
  return BPSC_ENGLISH_CHAPTERS.find((ch) => ch.id === id);
}

export function getEnglishChapterBySlug(slug: string): LMSChapter | undefined {
  return BPSC_ENGLISH_CHAPTERS.find((ch) => ch.slug === slug);
}
