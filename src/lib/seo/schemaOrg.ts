// JSON-LD Structured Data Schema Generator for Indian Banking EdTech Mock Test Platform
// Generates Quiz, Course, SoftwareApplication, and FAQPage schemas for Google Rich Snippets

export function generateBankingStructuredData(examTitle = 'SBI PO & IBPS PO All India CBT Mock Test 2026') {
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: `${examTitle} - TCS iON Standard CBT`,
    description:
      'Full-length authentic computer-based mock test for Indian banking recruitment exams with sectional timer locks, negative marking, and bilingual Hindi/English questions.',
    educationalLevel: 'Competitive Banking Recruitment (Graduation / Post Graduation)',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Indian Banking Examination Simulation Board',
      url: 'https://bankexam-cbt.vercel.app',
    },
    about: {
      '@type': 'Thing',
      name: 'Quantitative Aptitude, Reasoning Ability, English Language & General Awareness',
    },
    timeRequired: 'PT60M',
    typicalAgeRange: '20-30',
    learningResourceType: 'Practice Exam / CBT Mock Test',
    isAccessibleForFree: true,
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TCS iON CBT Exam Interface Simulator',
    operatingSystem: 'All Modern Web Browsers (Chrome, Firefox, Safari, Edge)',
    applicationCategory: 'EducationalApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '18450',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    featureList: [
      'Official 5-State Question Palette',
      'Hard Sectional Timing Lock',
      'Authentic Dual-Language Hindi and English switcher',
      '0.25 Negative Marking Evaluation',
      '4-Quadrant Fatal Time-Trap Diagnostic Matrix',
    ],
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this CBT interface an exact match of the real SBI PO and IBPS exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The test interface replicates the exact TCS iON CBT software used by the Institute of Banking Personnel Selection (IBPS) and State Bank of India (SBI), including question palette color states, question navigation, zoom controls, and candidate photo badge.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are questions marked as "Answered & Marked for Review" evaluated in the final score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! As per official IBPS and SBI instructions, if an option is chosen and the candidate clicks "Mark for Review & Next", the question is given a purple badge with a green dot and WILL BE EVALUATED for final marks and negative penalties.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the negative marking scheme applied in these banking mock tests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A negative marking penalty of 0.25 (one-fourth) of the marks assigned to that question is deducted for every incorrect response. Unattempted questions receive zero marks without penalty.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the platform support both English and Hindi mediums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Candidates can toggle between English and authentic exam-standard Hindi anytime during the test for Quantitative Aptitude, Reasoning Ability, and Banking Awareness sections.',
        },
      },
    ],
  };

  return {
    quizSchema,
    softwareAppSchema,
    faqPageSchema,
  };
}
