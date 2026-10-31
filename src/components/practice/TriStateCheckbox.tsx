// src/components/practice/TriStateCheckbox.tsx

'use client';

import React from 'react';
import { CheckboxState } from '@/types/syllabusTree';
import { Check, Minus } from 'lucide-react';

interface TriStateCheckboxProps {
  state: CheckboxState;
  onChange: () => void;
  ariaLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TriStateCheckbox: React.FC<TriStateCheckboxProps> = ({
  state,
  onChange,
  ariaLabel = 'Checkbox',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5 text-[10px]',
    md: 'w-4 h-4 text-xs',
    lg: 'w-5 h-5 text-sm',
  }[size];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange();
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={state === 'CHECKED' ? 'true' : state === 'INDETERMINATE' ? 'mixed' : 'false'}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center rounded border transition-all shrink-0 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500/50 ${sizeClasses} ${
        state === 'CHECKED'
          ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
          : state === 'INDETERMINATE'
          ? 'bg-indigo-500 border-indigo-500 text-white shadow-xs'
          : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-indigo-400'
      } ${className}`}
    >
      {state === 'CHECKED' && <Check className="w-3 h-3 stroke-[3]" />}
      {state === 'INDETERMINATE' && <Minus className="w-3 h-3 stroke-[3]" />}
    </button>
  );
};
