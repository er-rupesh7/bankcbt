'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

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
 * Also handles superscripts (^2, ^3), subscripts (_1, _2), fractions, square roots, etc.
 */
export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
}) => {
  // Split string into math tokens ($...$ or $$...$$) and normal text
  const parts = useMemo(() => {
    if (!text) return [];
    // Regex matches $$...$$ or $...$
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g;
    const tokens: { isMath: boolean; content: string; displayMode: boolean }[] = [];

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          isMath: false,
          content: text.substring(lastIndex, match.index),
          displayMode: false,
        });
      }

      const raw = match[0];
      const isDisplay = raw.startsWith('$$') && raw.endsWith('$$');
      const formula = isDisplay ? raw.slice(2, -2) : raw.slice(1, -1);

      tokens.push({
        isMath: true,
        content: formula.trim(),
        displayMode: isDisplay,
      });

      lastIndex = match.index + raw.length;
    }

    if (lastIndex < text.length) {
      tokens.push({
        isMath: false,
        content: text.substring(lastIndex),
        displayMode: false,
      });
    }

    return tokens;
  }, [text]);

  if (!text || parts.length === 0) return null;

  return (
    <Component className={className}>
      {parts.map((part, index) => {
        if (!part.isMath) {
          return <React.Fragment key={index}>{part.content}</React.Fragment>;
        }

        try {
          const html = katex.renderToString(part.content, {
            displayMode: part.displayMode,
            throwOnError: false,
            output: 'htmlAndMathml',
          });

          return (
            <span
              key={index}
              className={`inline-math-container ${part.displayMode ? 'block my-2 text-center' : 'inline'}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          // Fallback if KaTeX encounters malformed syntax
          return <span key={index}>{part.content}</span>;
        }
      })}
    </Component>
  );
};
