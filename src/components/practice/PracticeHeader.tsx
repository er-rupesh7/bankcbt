// src/components/practice/PracticeHeader.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, GraduationCap } from 'lucide-react';

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
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40 h-16 flex items-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          {showBackToHub ? (
            <Link
              href="/practice"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Syllabus Hub</span>
            </Link>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold shadow-xs">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
          )}

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                <span>{title}</span>
              </h1>
              <span className="text-[10px] bg-amber-500/15 text-amber-400 border border-amber-500/30 font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline-block">
                SBI &bull; IBPS &bull; RRB
              </span>
            </div>
            <p className="text-xs text-slate-400 line-clamp-1 hidden md:block">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-sm shadow-blue-600/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Mock Tests</span>
          </Link>

          {!showBackToHub && (
            <a
              href="#topics-grid"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium text-xs transition hidden sm:inline-flex"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Browse Grid</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
