import { LMSCourse, LMSSection, LMSSubject, LMSChapter, LMSTopic, LMSSectionKey, LMSSubjectKey } from '@/types/bpscLms';
import { BPSC_LANGUAGE_SUBJECTS } from './languageCourse';
import { BPSC_GENERAL_STUDIES_SUBJECTS } from './generalStudiesCourse';
import { BPSC_COMPUTER_SCIENCE_SUBJECTS } from './computerScienceCourse';

export const MASTER_BPSC_LMS_COURSE: LMSCourse = {
  id: 'bpsc-tre-4-master-course',
  examId: 'bpsc-tre-4-0',
  title: 'BPSC TRE 4.0 Comprehensive Learning Management System (LMS)',
  targetExam: 'BPSC TRE 4.0 – Computer Science (Class 11 & 12)',
  description: 'Structured pedagogical curriculum covering Part 1 (Language), Part 2 (General Studies), and Part 3 (Computer Science) following the 12-section blueprint.',
  sections: [
    {
      key: 'PART_1_LANGUAGE',
      partNumber: 1,
      displayNameEn: 'Part 1: Language Qualifying Section (30 Marks)',
      displayNameHi: 'भाग 1: भाषा अर्हक खंड (30 अंक - न्यूनतम 9 अंक अनिवार्य)',
      weightageMarks: 30,
      isQualifyingOnly: true,
      descriptionEn: 'Universal language section covering English Grammar & Hindi Grammar required to score qualifying marks (minimum 9/30).',
      subjects: BPSC_LANGUAGE_SUBJECTS
    },
    {
      key: 'PART_2_GENERAL_STUDIES',
      partNumber: 2,
      displayNameEn: 'Part 2: General Studies Section (40 Marks)',
      displayNameHi: 'भाग 2: सामान्य अध्ययन खंड (40 अंक - मेधा सूची में सम्मिलित)',
      weightageMarks: 40,
      isQualifyingOnly: false,
      descriptionEn: 'Universal general awareness module covering Bihar Special GK, Indian Freedom Movement, Indian Polity, Geography, and General Science.',
      subjects: BPSC_GENERAL_STUDIES_SUBJECTS
    },
    {
      key: 'PART_3_SUBJECT_CORE',
      partNumber: 3,
      displayNameEn: 'Part 3: Computer Science Class 11–12 (80 Marks)',
      displayNameHi: 'भाग 3: कंप्यूटर विज्ञान कक्षा 11–12 (80 अंक - मेधा सूची का मुख्य आधार)',
      weightageMarks: 80,
      isQualifyingOnly: false,
      descriptionEn: 'Core domain module for PGT Computer Science covering Digital Logic, Computer Architecture, OS, DSA, OOP, DBMS/SQL, Networks, and Cyber Security.',
      subjects: BPSC_COMPUTER_SCIENCE_SUBJECTS
    }
  ]
};

// ==========================================
// LOOKUP AND CATALOG QUERY HELPERS
// ==========================================

export function getMasterBPSCCourse(): LMSCourse {
  return MASTER_BPSC_LMS_COURSE;
}

export function getLMSSection(sectionKey: LMSSectionKey): LMSSection | undefined {
  return MASTER_BPSC_LMS_COURSE.sections.find(s => s.key === sectionKey);
}

export function getLMSSubject(subjectKey: LMSSubjectKey): LMSSubject | undefined {
  for (const sec of MASTER_BPSC_LMS_COURSE.sections) {
    const sub = sec.subjects.find(s => s.key === subjectKey);
    if (sub) return sub;
  }
  return undefined;
}

export function getLMSChapter(chapterId: string): LMSChapter | undefined {
  for (const sec of MASTER_BPSC_LMS_COURSE.sections) {
    for (const sub of sec.subjects) {
      const ch = sub.chapters.find(c => c.id === chapterId || c.slug === chapterId);
      if (ch) return ch;
    }
  }
  return undefined;
}

export function getLMSTopic(topicId: string): { topic: LMSTopic; chapter: LMSChapter; subject: LMSSubject; section: LMSSection } | undefined {
  for (const sec of MASTER_BPSC_LMS_COURSE.sections) {
    for (const sub of sec.subjects) {
      for (const ch of sub.chapters) {
        const top = ch.topics.find(t => t.id === topicId || t.slug === topicId);
        if (top) {
          return { topic: top, chapter: ch, subject: sub, section: sec };
        }
      }
    }
  }
  return undefined;
}

export function getAllLMSTopics(): { topic: LMSTopic; chapter: LMSChapter; subject: LMSSubject; section: LMSSection }[] {
  const all: { topic: LMSTopic; chapter: LMSChapter; subject: LMSSubject; section: LMSSection }[] = [];
  for (const sec of MASTER_BPSC_LMS_COURSE.sections) {
    for (const sub of sec.subjects) {
      for (const ch of sub.chapters) {
        for (const top of ch.topics) {
          all.push({ topic: top, chapter: ch, subject: sub, section: sec });
        }
      }
    }
  }
  return all;
}

export function searchLMSTopics(query: string) {
  const cleanQ = query.toLowerCase().trim();
  if (!cleanQ) return [];
  const all = getAllLMSTopics();
  return all.filter(({ topic, chapter, subject }) => {
    return (
      topic.titleEn.toLowerCase().includes(cleanQ) ||
      topic.titleHi.toLowerCase().includes(cleanQ) ||
      topic.descriptionEn.toLowerCase().includes(cleanQ) ||
      chapter.titleEn.toLowerCase().includes(cleanQ) ||
      chapter.titleHi.toLowerCase().includes(cleanQ) ||
      subject.displayNameEn.toLowerCase().includes(cleanQ) ||
      subject.displayNameHi.toLowerCase().includes(cleanQ)
    );
  });
}

/**
 * Maps a question topic/category name from CBT mock exam to the corresponding LMS tutorial.
 * Used for 1-click diagnostic transitions (e.g. from CBT exam error analysis straight to the LMS lesson).
 */
export function getRelatedTutorialForExamTopic(topicOrCategory: string): {
  topic: LMSTopic;
  chapter: LMSChapter;
  subject: LMSSubject;
  section: LMSSection;
} | undefined {
  const lower = topicOrCategory.toLowerCase();
  const all = getAllLMSTopics();

  // 1. Direct match on topic/chapter/slug
  const directMatch = all.find(item => 
    item.topic.slug.toLowerCase().includes(lower) ||
    lower.includes(item.topic.slug.toLowerCase()) ||
    item.topic.titleEn.toLowerCase().includes(lower) ||
    lower.includes(item.topic.titleEn.toLowerCase())
  );
  if (directMatch) return directMatch;

  // 2. Keyword heuristic mapping
  if (lower.includes('noun') || lower.includes('pronoun') || lower.includes('grammar')) {
    return all.find(item => item.topic.id === 'eng-topic-nouns-pronouns');
  }
  if (lower.includes('tense') || lower.includes('conditional')) {
    return all.find(item => item.topic.id === 'eng-topic-tenses-conditionals');
  }
  if (lower.includes('polity') || lower.includes('writ') || lower.includes('fundamental') || lower.includes('अधिकार') || lower.includes('संविधान')) {
    return all.find(item => item.topic.id === 'pol-topic-fr-articles');
  }
  if ((lower.includes('article') && !lower.includes('fundamental')) || lower.includes('preposition')) {
    return all.find(item => item.topic.id === 'eng-topic-articles-prepositions');
  }
  if (lower.includes('agreement') || lower.includes('subject-verb') || lower.includes('concord')) {
    return all.find(item => item.topic.id === 'eng-topic-sva-mastery');
  }
  if (lower.includes('वर्ण') || lower.includes('उच्चारण') || lower.includes('स्वर') || lower.includes('व्यंजन')) {
    return all.find(item => item.topic.id === 'hin-topic-varnamala');
  }
  if (lower.includes('संधि') || lower.includes('विच्छेद')) {
    return all.find(item => item.topic.id === 'hin-topic-swar-sandhi');
  }
  if (lower.includes('समास') || lower.includes('तत्पुरुष') || lower.includes('बहुव्रीहि') || lower.includes('द्विगु') || lower.includes('द्वंद्व')) {
    return all.find(item => item.topic.id === 'hin-topic-samass');
  }
  if (lower.includes('champaran') || lower.includes('1857') || lower.includes('kunwar') || lower.includes('bihar history') || lower.includes('चंपारण')) {
    return all.find(item => item.topic.id === 'bih-topic-champaran-1857');
  }
  if (lower.includes('1942') || lower.includes('quit india') || lower.includes('azad dasta') || lower.includes('secretariat') || lower.includes('सचिवालय') || lower.includes('आजाद दस्ता')) {
    return all.find(item => item.topic.id === 'bih-topic-quit-india-azad-dasta');
  }
  if (lower.includes('river') || lower.includes('ganga') || lower.includes('kosi') || lower.includes('son') || lower.includes('नदी')) {
    return all.find(item => item.topic.id === 'bih-topic-rivers-soils');
  }
  if (lower.includes('history') || lower.includes('inm') || lower.includes('movement') || lower.includes('swaraj') || lower.includes('आंदोलन')) {
    return all.find(item => item.topic.id === 'hist-topic-inm-landmarks');
  }
  if (lower.includes('polity') || lower.includes('article') || lower.includes('writ') || lower.includes('fundamental') || lower.includes('अधिकार')) {
    return all.find(item => item.topic.id === 'pol-topic-fr-articles');
  }
  if (lower.includes('geography') || lower.includes('regur') || lower.includes('monsoon') || lower.includes('soil') || lower.includes('भूगोल')) {
    return all.find(item => item.topic.id === 'geo-topic-soils-rivers');
  }
  if (lower.includes('science') || lower.includes('vitamin') || lower.includes('optics') || lower.includes('blood') || lower.includes('विज्ञान')) {
    return all.find(item => item.topic.id === 'sci-topic-vitamins-optics');
  }
  if (lower.includes('binary') || lower.includes('complement') || lower.includes('hex') || lower.includes('logic') || lower.includes('number system')) {
    return all.find(item => item.topic.id === 'cs-topic-number-systems-twos-comp');
  }
  if (lower.includes('scheduling') || lower.includes('deadlock') || lower.includes('operating') || lower.includes('process') || lower.includes('sjf')) {
    return all.find(item => item.topic.id === 'cs-topic-cpu-scheduling-deadlocks');
  }
  if (lower.includes('tree') || lower.includes('traversal') || lower.includes('bst') || lower.includes('inorder') || lower.includes('dsa') || lower.includes('sort')) {
    return all.find(item => item.topic.id === 'cs-topic-trees-traversals');
  }
  if (lower.includes('cpp') || lower.includes('c++') || lower.includes('constructor') || lower.includes('oop') || lower.includes('polymorphism')) {
    return all.find(item => item.topic.id === 'cs-topic-cpp-constructors-polymorphism');
  }
  if (lower.includes('dbms') || lower.includes('normalization') || lower.includes('acid') || lower.includes('sql') || lower.includes('having') || lower.includes('database')) {
    return all.find(item => item.topic.id === 'cs-topic-normalization-acid');
  }
  if (lower.includes('network') || lower.includes('osi') || lower.includes('ipv4') || lower.includes('ip address') || lower.includes('multicast')) {
    return all.find(item => item.topic.id === 'cs-topic-osi-ip-addressing');
  }
  if (lower.includes('python') || lower.includes('slice') || lower.includes('mutable') || lower.includes('tuple')) {
    return all.find(item => item.topic.id === 'cs-topic-python-datastructures');
  }

  // Fallback to the first available topic
  return all[0];
}
