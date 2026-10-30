// src/components/practice/TopicCard.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import { SyllabusTopicConfig, UserTopicMastery } from '@/types/topicPractice';
import { BookOpen, Zap, Award, CheckCircle2 } from 'lucide-react';

interface TopicCardProps {
  topic: SyllabusTopicConfig;
  mastery: UserTopicMastery;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, mastery }) => {
  const getBadge = (score: number) => {
    if (score >= 80) return { label: 'PO Ready', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
    if (score >= 40) return { label: 'Practitioner', color: 'bg-blue-100 text-blue-800 border-blue-300' };
    return { label: 'Beginner', color: 'bg-gray-100 text-gray-700 border-gray-200' };
  };

  const badge = getBadge(mastery.masteryScore);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Top Badges & Category */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl p-1.5 rounded-lg bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform">
              {topic.icon || '📌'}
            </span>
            <div>
              <span className="text-[11px] font-bold text-blue-600 block leading-none">
                {topic.clusterName}
              </span>
              <h3 className="font-black text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors mt-0.5 line-clamp-1">
                {topic.titleEn}
              </h3>
            </div>
          </div>

          <span
            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border tracking-wide whitespace-nowrap ${badge.color}`}
          >
            {badge.label}
          </span>
        </div>

        {/* Hindi Subtitle */}
        <p className="text-xs text-gray-500 font-medium line-clamp-1">
          {topic.titleHi}
        </p>

        {/* Weightage Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-gray-600">
          <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-100">
            Pre: {topic.weightagePrelims}
          </span>
          <span className="bg-purple-50 text-purple-800 px-2 py-0.5 rounded border border-purple-100">
            Mains: {topic.weightageMains}
          </span>
        </div>

        {/* Mastery Progress Bar */}
        <div className="space-y-1 pt-1">
          <div className="flex items-center justify-between text-[11px] font-bold">
            <span className="text-gray-500">Mastery Progress</span>
            <span className="text-blue-900">{mastery.masteryScore}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all rounded-full"
              style={{ width: `${Math.max(3, mastery.masteryScore)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Two Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-gray-100">
        <Link
          href={`/practice/${topic.slug}?tab=concept`}
          className="inline-flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-lg border border-gray-200 hover:border-blue-300 bg-gray-50 hover:bg-white text-gray-800 font-bold text-xs transition text-center"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="truncate">Study Concept</span>
        </Link>

        <Link
          href={`/practice/${topic.slug}?tab=practice`}
          className="inline-flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-lg bg-[#0e3b64] hover:bg-[#12497d] text-white font-black text-xs transition shadow-xs text-center"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
          <span className="truncate">Practice Qs</span>
        </Link>
      </div>
    </div>
  );
};
