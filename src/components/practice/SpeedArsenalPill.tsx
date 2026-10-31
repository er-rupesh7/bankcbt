// src/components/practice/SpeedArsenalPill.tsx

'use client';

import React, { useState } from 'react';
import { Zap, HelpCircle, Check } from 'lucide-react';
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
      <div
        onClick={onToggle}
        className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all cursor-pointer select-none ${
          isChecked
            ? 'bg-amber-100 dark:bg-amber-900/60 border-amber-400 dark:border-amber-700 text-amber-950 dark:text-amber-200 line-through decoration-amber-600'
            : 'bg-white dark:bg-slate-800 border-amber-200 dark:border-amber-800/80 text-amber-900 dark:text-amber-300 hover:border-amber-400 hover:bg-amber-50/50'
        }`}
      >
        <span
          className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
            isChecked
              ? 'bg-amber-600 border-amber-600 text-white'
              : 'border-amber-400 dark:border-amber-600 bg-white dark:bg-slate-900'
          }`}
        >
          {isChecked ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : <Zap className="w-2 h-2 text-amber-500 fill-amber-500" />}
        </span>

        <span className="truncate max-w-xs sm:max-w-md">
          <MathText text={name} />
        </span>

        {tooltipExample && (
          <HelpCircle className="w-3 h-3 text-amber-500/70 hover:text-amber-600 shrink-0 ml-0.5" />
        )}
      </div>

      {/* Hover Tooltip Popup */}
      {showTooltip && tooltipExample && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-2.5 bg-slate-900 text-slate-100 text-xs rounded-xl shadow-xl border border-slate-700 z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center space-x-1.5 text-amber-400 font-bold mb-1">
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>Banking Exam Speed Technique</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-sans">{tooltipExample}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </div>
  );
};
