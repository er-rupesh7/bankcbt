// src/components/practice/SpeedArsenalPill.tsx

'use client';

import React, { useState } from 'react';
import { Zap, HelpCircle, CheckCircle2 } from 'lucide-react';
import { MathText } from '@/components/common/MathText';

interface SpeedArsenalPillProps {
  id: string;
  name: string;
  tooltipExample?: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const SpeedArsenalPill: React.FC<SpeedArsenalPillProps> = ({
  id,
  name,
  tooltipExample,
  isChecked,
  onToggle,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-2xs transition-all cursor-pointer select-none ${
          isChecked
            ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-400 dark:border-amber-700 text-amber-900 dark:text-amber-200 line-through decoration-amber-600'
            : 'bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 text-slate-800 dark:text-slate-200 hover:border-amber-400 hover:shadow-xs'
        }`}
        aria-label={`Shortcut: ${name}`}
      >
        <CheckCircle2
          className={`w-3.5 h-3.5 shrink-0 transition-colors ${
            isChecked
              ? 'text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950'
              : 'text-amber-500 dark:text-amber-400 group-hover:text-amber-600'
          }`}
        />

        <span className="truncate max-w-xs sm:max-w-md">
          <MathText text={name} />
        </span>

        {tooltipExample && (
          <HelpCircle className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0 opacity-80 group-hover:opacity-100" />
        )}
      </button>

      {/* Hover Tooltip Popup with 10-second exam trick */}
      {showTooltip && tooltipExample && (
        <div className="absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-2 w-72 sm:w-80 p-3 bg-slate-900 text-slate-100 text-xs rounded-xl shadow-xl border border-slate-700 z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center space-x-1.5 text-amber-400 font-bold mb-1">
            <Zap className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
            <span>10-Second Banking Exam Trick</span>
          </div>
          <p className="text-slate-200 text-[11px] leading-relaxed font-sans">{tooltipExample}</p>
          <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </div>
  );
};
