// src/components/practice/PracticeHeader.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

interface PracticeHeaderProps {
  title?: string;
  subtitle?: string;
  showBackToHub?: boolean;
}

export const PracticeHeader: React.FC<PracticeHeaderProps> = ({
  title = 'Topic-Wise Syllabus & Concept Mastery',
  subtitle = 'Master granular banking exam topics with 20-second shortcut tricks, golden rules & multi-level drills',
  showBackToHub = false,
}) => {
  return (
    <header className="bg-gradient-to-r from-[#0c2f54] via-[#0e3b64] to-[#12497d] text-white border-b-4 border-[#ff9900] shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center space-x-3">
          {showBackToHub ? (
            <Link
              href="/practice"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white transition text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Syllabus Hub</span>
            </Link>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xl shadow-xs">
              📚
            </div>
          )}

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center space-x-2">
                <span>{title}</span>
              </h1>
              <span className="text-[10px] bg-[#ff9900] text-[#0e3b64] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                SBI &bull; IBPS &bull; RRB
              </span>
            </div>
            <p className="text-xs text-blue-200 mt-0.5 line-clamp-1">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5 self-end md:self-auto">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#ff9900] hover:bg-[#e68a00] text-[#0e3b64] font-bold text-xs transition shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>🏛️ Full Mock Tests</span>
          </Link>

          {!showBackToHub && (
            <a
              href="#topics-grid"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse All Topics</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
