'use client';

import React from 'react';
import { InlineMarkdownText } from './ConceptMarkdown';

interface MathTextProps {
  text?: string | null;
  className?: string;
  as?: 'div' | 'span' | 'p';
}

/**
 * MathText Component:
 * Automatically parses and renders mathematical expressions containing LaTeX:
 * - Inline math: $ ... $
 * - Display math: $$ ... $$
 * Also seamlessly supports inline Markdown:
 * - Bold: **text**
 * - Italic: *text*
 * - Code: `text`
 * - Line breaks: \n
 */
export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
}) => {
  if (!text) return null;

  return (
    <Component className={className}>
      <InlineMarkdownText text={text} />
    </Component>
  );
};
