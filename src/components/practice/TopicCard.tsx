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
  FileText,
} from 'lucide-react';

interface TopicCardProps {
  topic: SyllabusTopicConfig;
  mastery: UserTopicMastery;
}

function renderTopicIcon(slug: string, cluster: string) {
  const s = slug.toLowerCase();
  const c = cluster.toLowerCase();

  let Icon = FileText;
  if (s.includes('calc') || s.includes('simplification')) Icon = Calculator;
  else if (s.includes('missing-number') || s.includes('number-series')) Icon = Hash;
  else if (s.includes('wrong-number')) Icon = AlertTriangle;
  else if (s.includes('quadratic')) Icon = Scale;
  else if (s.includes('percent') || s.includes('profit') || s.includes('discount')) Icon = Percent;
  else if (s.includes('ratio') || s.includes('partnership')) Icon = Scale;
  else if (s.includes('time-work') || s.includes('pipes')) Icon = Clock;
  else if (s.includes('speed') || s.includes('distance') || s.includes('train')) Icon = TrendingUp;
  else if (s.includes('interest') || s.includes('sici')) Icon = Landmark;
  else if (s.includes('mixture') || s.includes('alligation')) Icon = Sparkles;
  else if (s.includes('di') || s.includes('data') || c.includes('interpretation')) Icon = BarChart3;
  else if (s.includes('seating') || s.includes('circular') || s.includes('linear')) Icon = Grid;
  else if (s.includes('puzzle') || s.includes('floor') || s.includes('box')) Icon = Grid;
  else if (s.includes('syllogism') || s.includes('inequalities') || s.includes('blood') || s.includes('direction')) Icon = Brain;
  else if (s.includes('coding') || s.includes('series')) Icon = Hash;
  else if (s.includes('rc') || s.includes('comprehension') || s.includes('cloze') || s.includes('parajumble') || s.includes('error') || s.includes('vocab')) Icon = BookOpen;
  else if (s.includes('rbi') || s.includes('monetary') || s.includes('banking') || s.includes('fintech') || s.includes('computer')) Icon = Cpu;

  return <Icon className="w-5 h-5 text-[#0B4F8A]" />;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, mastery }) => {
  const getBadge = (score: number) => {
    if (score >= 80) {
      return {
        label: 'PO Ready',
        classes: 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold',
      };
    }
    if (score >= 40) {
      return {
        label: 'Practitioner',
        classes: 'bg-blue-50 text-[#0B4F8A] border border-blue-300 font-bold',
      };
    }
    return {
      label: 'Beginner',
      classes: 'bg-slate-100 text-slate-600 border border-slate-300',
    };
  };

  const badge = getBadge(mastery.masteryScore);

  return (
    <div className="bg-white border border-slate-200 hover:border-[#0B4F8A] rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div className="space-y-3.5">
        {/* Top Icon, Category & Readiness Pill */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B4F8A] shrink-0 group-hover:scale-105 transition-transform shadow-xs">
              {renderTopicIcon(topic.slug, topic.clusterName)}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0B4F8A] uppercase tracking-wider block">
                {topic.clusterName}
              </span>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B4F8A] transition-colors leading-snug line-clamp-2">
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
          <p className="text-xs font-medium text-slate-500 line-clamp-1">
            {topic.titleHi}
          </p>
        )}

        {/* Weightage Badges */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium pt-0.5">
          {topic.weightagePrelims && (
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-md text-[11px] font-medium">
              Pre: {topic.weightagePrelims}
            </span>
          )}
          {topic.weightageMains && (
            <span className="bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-0.5 rounded-md text-[11px] font-medium">
              Mains: {topic.weightageMains}
            </span>
          )}
        </div>

        {/* Mastery Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-500">Mastery Progress</span>
            <span className="text-slate-800 font-bold">{mastery.masteryScore}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-[#0B4F8A] to-emerald-500 transition-all rounded-full"
              style={{ width: `${Math.max(3, mastery.masteryScore)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-slate-100">
        <Link
          href={`/practice/${topic.slug}?tab=concept`}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold text-center border border-slate-200 transition cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#0B4F8A] shrink-0" />
          <span className="truncate">Concept &amp; Tricks</span>
        </Link>

        <Link
          href={`/practice/${topic.slug}?tab=practice`}
          style={{ backgroundColor: '#0B4F8A', color: '#ffffff' }}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0B4F8A] hover:bg-[#083D6B] text-white text-xs font-semibold text-center shadow-xs transition cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
          <span className="truncate">Practice Drill</span>
        </Link>
      </div>
    </div>
  );
};
