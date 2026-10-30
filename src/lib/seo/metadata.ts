// Principal Technical SEO Architect & Brand Specification Engine
// For Indian Banking CBT Mock Test Platform (SBI, IBPS, RRB PO & Clerk)

import type { Metadata } from 'next';

/**
 * 1. OFFICIAL KEYWORD MATRIX (Categorized by Search Intent)
 */
export const BANKING_KEYWORD_MATRIX = {
  transactional: [
    'attempt free sbi po cbt mock test online',
    'ibps po live mock test series free',
    'sbi clerk prelims mock test tcs ion interface',
    'ibps rrb po free mock test bilingual',
    'take online bank exam test series free 2026',
    'sbi po mains high level reasoning mock test',
    'ibps clerk speed drill test online',
  ],
  informational: [
    'ibps po revised exam pattern 2026',
    'sbi po prelims syllabus and sectional cutoff',
    'ibps rrb po composite timing rule 45 minutes',
    'sbi po negative marking formula 0.25',
    'tcs ion banking exam question palette color codes',
    'quantitative aptitude arithmetic shortcut tricks for bank exams',
    'how to solve only a few syllogism in 10 seconds',
  ],
  navigational: [
    'tcs ion real interface bank test series',
    'karna banking mock test portal',
    'bank exam cbt simulation 2026',
    'official ibps mock test clone portal',
  ],
};

/**
 * 2. PRODUCTION NEXT.JS METADATA FACTORY (50-60 char title, 150-160 char description)
 */
export function getBankingPlatformMetadata(examTitle?: string): Metadata {
  const baseTitle = examTitle 
    ? `${examTitle} 2026 Mock Test: Official TCS iON CBT Engine` 
    : 'SBI PO & IBPS Mock Test 2026: Official TCS iON CBT Engine';

  // Strict 50-60 character title calibration
  const title = baseTitle.length > 60 ? baseTitle.substring(0, 57) + '...' : baseTitle;

  // Strict 150-160 character description with CTR hook
  const description =
    'Exact TCS iON CBT interface, bilingual Hindi/English, sectional timers & instant All-India rank. Free live mocks for SBI PO, SBI Clerk, IBPS PO & RRB 2026.';

  const keywords = [
    'SBI PO Mock Test 2026',
    'IBPS PO Live Mock',
    'SBI Clerk Prelims Test Series',
    'IBPS RRB Officer Scale 1 Mock',
    'TCS iON CBT Interface Clone',
    'Bilingual Bank Exam Test',
    'Banking Quantitative Aptitude PYQ',
    'Banking Reasoning Puzzles Practice',
    'Fatal Time Trap Analysis',
    'Sectional Timing Bank Mock',
    'Free All India Bank Mock Test',
    'IBPS Clerk Speed Drill',
    'SBI PO Mains Mock Test',
    'Bank Exam Percentile Predictor',
    'TCS iON Question Palette Simulator',
  ];

  return {
    title,
    description,
    keywords,
    applicationName: 'TCS iON Bank Exam CBT Simulator',
    authors: [{ name: 'Indian Banking Examination Board Engine' }],
    creator: 'Antigravity EdTech Engineering',
    publisher: 'National Banking Mock Test Portal',
    metadataBase: new URL('https://bankexam-cbt.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'en-IN': '/en',
        'hi-IN': '/hi',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://bankexam-cbt.vercel.app',
      siteName: 'TCS iON Real Bank CBT Simulator',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'SBI PO & IBPS Mock Test 2026 - Exact TCS iON CBT Interface Preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
      creator: '@BankExamCBT',
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    manifest: '/site.webmanifest',
  };
}

/**
 * 3. OPENGRAPH (OG) SOCIAL SHARE SPECIFICATION (1200 x 630 px)
 * AI Prompt & Dynamic HTML Canvas Template
 */
export const OG_IMAGE_SPEC = {
  dimensions: { width: 1200, height: 630, aspectRatio: '1.91:1' },
  ai_prompt: `Clean ultra-modern digital marketing banner for Indian Banking Exams, 1200x630 resolution, on a deep navy-blue to dark royal emerald gradient background (#0B132B to #064E3B). In the center, a 3D isometric perspective preview of the authentic TCS iON computer screen showing the 5-color question palette (green, red, purple, gray), live countdown timer displaying '19:45', candidate name 'Karna', bold gold and white glowing typography reading 'FREE LIVE CBT MOCK TEST — SBI | IBPS | RRB 2026', sleek trust badges at the bottom: 'Bilingual (EN/HI) • Exact TCS iON UI • All-India Rank', hyper-realistic, 8k render, professional EdTech brand aesthetic.`,
  html_canvas_template: `
    <div style="width: 1200px; height: 630px; background: linear-gradient(135deg, #0B132B 0%, #1C2541 60%, #064E3B 100%); display: flex; flex-direction: column; justify-content: space-between; padding: 60px; font-family: system-ui, sans-serif; color: #FFFFFF; position: relative; overflow: hidden;">
      <!-- Glowing Background Accents -->
      <div style="position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%);"></div>
      
      <!-- Top Brand Header -->
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="background: #1D4ED8; width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; color: #FFFFFF; box-shadow: 0 4px 12px rgba(29,78,216,0.5);">⚡</div>
          <span style="font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">BANKEXAM <span style="color: #10B981;">CBT ENGINE</span></span>
        </div>
        <div style="background: rgba(255,255,255,0.12); padding: 8px 18px; border-radius: 20px; font-size: 14px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2);">
          🔴 LIVE 2026 RECRUITMENT CYCLE
        </div>
      </div>

      <!-- Center Hero Content -->
      <div style="margin-top: 20px;">
        <div style="font-size: 16px; font-weight: 800; color: #F59E0B; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">
          ★ 100% Exact TCS iON Interface Simulation
        </div>
        <h1 style="font-size: 48px; font-weight: 900; line-height: 1.15; margin: 0 0 16px 0; max-width: 900px;">
          SBI PO, SBI Clerk, IBPS PO & RRB Free All-India Live Mock Test
        </h1>
        <p style="font-size: 20px; color: #CBD5E1; margin: 0; max-width: 800px; line-height: 1.4;">
          Authentic 5-state question palette, sectional timers, negative marking (-0.25), and 4-quadrant fatal time-trap analytics.
        </p>
      </div>

      <!-- Bottom Trust Badges -->
      <div style="display: flex; align-items: center; gap: 20px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 24px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: #E2E8F0;">
          <span style="color: #10B981;">✔</span> Bilingual (Hindi & English)
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: #E2E8F0;">
          <span style="color: #10B981;">✔</span> Strict Sectional Timing Lock
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: #E2E8F0;">
          <span style="color: #10B981;">✔</span> Instant Percentile & Rank
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 700; color: #E2E8F0;">
          <span style="color: #10B981;">✔</span> Vedic Math Speed Tricks
        </div>
      </div>
    </div>
  `,
};
