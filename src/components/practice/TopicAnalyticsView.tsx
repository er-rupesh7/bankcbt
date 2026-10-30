// src/components/practice/TopicAnalyticsView.tsx

'use client';

import React from 'react';
import { SyllabusTopicConfig, UserTopicMastery } from '@/types/topicPractice';
import {
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  Bookmark,
  AlertCircle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

interface TopicAnalyticsViewProps {
  topic: SyllabusTopicConfig;
  mastery: UserTopicMastery;
  onStartPracticeLevel: (level: 'LEVEL_1_CLERK_PRE' | 'LEVEL_2_PO_PRE' | 'LEVEL_3_MAINS') => void;
}

export const TopicAnalyticsView: React.FC<TopicAnalyticsViewProps> = ({
  topic,
  mastery,
  onStartPracticeLevel,
}) => {
  const getMasteryBadge = (score: number) => {
    if (score >= 80) return { label: 'PO Ready', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
    if (score >= 40) return { label: 'Practitioner', color: 'bg-blue-100 text-blue-800 border-blue-300' };
    return { label: 'Beginner', color: 'bg-amber-100 text-amber-800 border-amber-300' };
  };

  const badge = getMasteryBadge(mastery.masteryScore);

  const l1Acc = mastery.level1Attempted > 0
    ? Math.round((mastery.level1Correct / mastery.level1Attempted) * 100)
    : 0;
  const l2Acc = mastery.level2Attempted > 0
    ? Math.round((mastery.level2Correct / mastery.level2Attempted) * 100)
    : 0;
  const l3Acc = mastery.level3Attempted > 0
    ? Math.round((mastery.level3Correct / mastery.level3Attempted) * 100)
    : 0;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Mastery Overview Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{topic.icon || '📊'}</span>
              <h3 className="text-xl font-black text-gray-900">
                {topic.titleEn} — Mastery Profile
              </h3>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {topic.clusterName} &bull; Prelims: {topic.weightagePrelims} &bull; Mains: {topic.weightageMains}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span
              className={`text-xs font-black px-3 py-1 rounded-full border uppercase tracking-wider ${badge.color}`}
            >
              {badge.label}
            </span>
            <div className="text-right">
              <span className="text-2xl font-black text-[#0e3b64]">
                {mastery.masteryScore}%
              </span>
              <span className="block text-[10px] text-gray-400 uppercase font-bold">
                Mastery Score
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-500 transition-all duration-500 rounded-full"
            style={{ width: `${Math.max(4, mastery.masteryScore)}%` }}
          />
        </div>
      </div>

      {/* Level Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Level 1: Clerk Prelims */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              Level 1: Clerk Pre
            </span>
            <span className="text-xs text-gray-400 font-semibold">Speed &amp; Basics</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Accuracy:</span>
              <span className="font-black text-gray-900">{l1Acc}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Solved:</span>
              <span className="font-bold text-gray-900">
                {mastery.level1Correct} / {mastery.level1Attempted}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Topper Benchmark:</span>
              <span className="font-medium text-emerald-700">20s - 30s</span>
            </div>
          </div>

          <button
            onClick={() => onStartPracticeLevel('LEVEL_1_CLERK_PRE')}
            className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-1"
          >
            <span>Practice Level 1</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Level 2: PO Prelims */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              Level 2: PO Pre
            </span>
            <span className="text-xs text-gray-400 font-semibold">Moderate &amp; Traps</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Accuracy:</span>
              <span className="font-black text-gray-900">{l2Acc}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Solved:</span>
              <span className="font-bold text-gray-900">
                {mastery.level2Correct} / {mastery.level2Attempted}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Topper Benchmark:</span>
              <span className="font-medium text-emerald-700">45s - 60s</span>
            </div>
          </div>

          <button
            onClick={() => onStartPracticeLevel('LEVEL_2_PO_PRE')}
            className="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-1"
          >
            <span>Practice Level 2</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Level 3: Mains */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
              Level 3: Mains
            </span>
            <span className="text-xs text-gray-400 font-semibold">High-Level Analysis</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Accuracy:</span>
              <span className="font-black text-gray-900">{l3Acc}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Solved:</span>
              <span className="font-bold text-gray-900">
                {mastery.level3Correct} / {mastery.level3Attempted}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Topper Benchmark:</span>
              <span className="font-medium text-emerald-700">75s - 120s</span>
            </div>
          </div>

          <button
            onClick={() => onStartPracticeLevel('LEVEL_3_MAINS')}
            className="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-1"
          >
            <span>Practice Level 3</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bookmarked & Weak Question Review */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
        <h4 className="font-bold text-sm text-gray-900 flex items-center space-x-2 border-b border-gray-100 pb-3">
          <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Bookmarked &amp; Tricky Questions ({mastery.bookmarkedQuestionIds.length})</span>
        </h4>

        {mastery.bookmarkedQuestionIds.length === 0 ? (
          <p className="text-xs text-gray-400 py-3 text-center">
            No questions bookmarked yet. Click the bookmark icon during practice to save questions for revision.
          </p>
        ) : (
          <div className="space-y-2">
            {mastery.bookmarkedQuestionIds.map((qId, idx) => (
              <div
                key={qId}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-700">#{idx + 1}</span>
                  <span className="font-mono text-gray-500 text-[11px]">{qId}</span>
                </div>
                <button
                  onClick={() => onStartPracticeLevel('LEVEL_2_PO_PRE')}
                  className="px-2.5 py-1 bg-white border border-gray-300 hover:bg-gray-100 rounded text-gray-700 font-semibold"
                >
                  Review
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
