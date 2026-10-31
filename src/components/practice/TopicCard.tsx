// src/components/practice/TopicCard.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { SyllabusTopicConfig, UserTopicMastery } from '@/types/topicPractice';
import {
  BookOpen,
  Zap,
  Calculator,
  Hash,
  AlertTriangle,
  Scale,
  Percent,
  Clock,
  TrendingUp,
  Landmark,
  Sparkles,
  BarChart3,
  Brain,
  Grid,
  Cpu,
  HelpCircle,
  FileText,
  LucideIcon,
} from 'lucide-react';

interface TopicCardProps {
  topic: SyllabusTopicConfig;
  mastery: UserTopicMastery;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, mastery }) => {
  const getBadge = (score: number) => {
    if (score >= 80) {
      return {
        label: 'PO Ready',
        classes: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
      };
    }
    if (score >= 40) {
      return {
        label: 'Practitioner',
        classes: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
      };
    }
    return {
      label: 'Beginner',
      classes: 'bg-slate-800 text-slate-400 border border-slate-700',
    };
  };

  const badge = getBadge(mastery.masteryScore);

  // Map each topic/cluster to a clean Lucide vector icon
  const getTopicIcon = (slug: string, cluster: string): LucideIcon => {
    const s = slug.toLowerCase();
    const c = cluster.toLowerCase();

    if (s.includes('calc') || s.includes('simplification')) return Calculator;
    if (s.includes('missing-number') || s.includes('number-series')) return Hash;
    if (s.includes('wrong-number')) return AlertTriangle;
    if (s.includes('quadratic')) return Scale;
    if (s.includes('percent') || s.includes('profit') || s.includes('discount')) return Percent;
    if (s.includes('ratio') || s.includes('partnership')) return Scale;
    if (s.includes('time-work') || s.includes('pipes')) return Clock;
    if (s.includes('speed') || s.includes('distance') || s.includes('train')) return TrendingUp;
    if (s.includes('interest') || s.includes('sici')) return Landmark;
    if (s.includes('mixture') || s.includes('alligation')) return Sparkles;
    if (s.includes('di') || s.includes('data') || c.includes('interpretation')) return BarChart3;
    if (s.includes('seating') || s.includes('circular') || s.includes('linear')) return Grid;
    if (s.includes('puzzle') || s.includes('floor') || s.includes('box')) return Grid;
    if (s.includes('syllogism') || s.includes('inequalities') || s.includes('blood') || s.includes('direction')) return Brain;
    if (s.includes('coding') || s.includes('series')) return Hash;
    if (s.includes('rc') || s.includes('comprehension') || s.includes('cloze') || s.includes('parajumble') || s.includes('error') || s.includes('vocab')) return BookOpen;
    if (s.includes('rbi') || s.includes('monetary') || s.includes('banking') || s.includes('fintech') || s.includes('computer')) return Cpu;

    return FileText;
  };

  const IconComponent = getTopicIcon(topic.slug, topic.clusterName);

  return (
    <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
      <div className="space-y-3.5">
        {/* Top Icon, Category & Readiness Pill */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
              <IconComponent className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                {topic.clusterName}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                {topic.titleEn}
              </h3>
            </div>
          </div>

          <span
            className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full tracking-wider whitespace-nowrap shrink-0 ${badge.classes}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Bilingual Hindi Subtitle */}
        {topic.titleHi && (
          <p className="text-xs font-medium text-slate-400 line-clamp-1">
            {topic.titleHi}
          </p>
        )}

        {/* Weightage Badges (High Contrast) */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium pt-0.5">
          {topic.weightagePrelims && (
            <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 px-2.5 py-0.5 rounded-md text-[11px]">
              Pre: {topic.weightagePrelims}
            </span>
          )}
          {topic.weightageMains && (
            <span className="bg-purple-500/10 text-purple-300 border border-purple-500/25 px-2.5 py-0.5 rounded-md text-[11px]">
              Mains: {topic.weightageMains}
            </span>
          )}
        </div>

        {/* Mastery Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-400">Mastery Progress</span>
            <span className="text-white font-bold">{mastery.masteryScore}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all rounded-full"
              style={{ width: `${Math.max(3, mastery.masteryScore)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-slate-800/80">
        <Link
          href={`/practice/${topic.slug}?tab=concept`}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700 transition"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="truncate">Concept &amp; Tricks</span>
        </Link>

        <Link
          href={`/practice/${topic.slug}?tab=practice`}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center shadow-sm shadow-blue-600/20 transition"
        >
          <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
          <span className="truncate">Practice Drill</span>
        </Link>
      </div>
    </div>
  );
};
