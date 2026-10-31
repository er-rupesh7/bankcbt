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
    <header
      className="bg-[#0A2F5C] text-white border-b-[3px] border-[#F59E0B] sticky top-0 z-40 h-16 flex items-center transition-colors shadow-md"
      style={{ backgroundColor: '#0A2F5C', color: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          {showBackToHub ? (
            <Link
              href="/practice"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition text-xs font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Syllabus Hub</span>
            </Link>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F59E0B] font-bold shadow-xs">
              <GraduationCap className="w-5 h-5 text-[#F59E0B]" />
            </div>
          )}

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                <span>{title}</span>
              </h1>
              <span
                className="text-[10px] bg-[#F59E0B] text-[#0A2F5C] font-black px-2 py-0.5 rounded uppercase tracking-wider hidden sm:inline-block"
                style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
              >
                SBI &bull; IBPS &bull; RRB
              </span>
            </div>
            <p className="text-xs text-blue-200 line-clamp-1 hidden md:block">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-[#F59E0B] hover:bg-amber-400 text-[#0A2F5C] font-black text-xs transition shadow-xs cursor-pointer"
            style={{ backgroundColor: '#F59E0B', color: '#0A2F5C' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Mock Tests</span>
          </Link>

          {!showBackToHub && (
            <a
              href="#topics-grid"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs transition hidden sm:inline-flex cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Browse Grid</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
