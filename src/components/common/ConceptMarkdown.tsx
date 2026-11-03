'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface ConceptMarkdownProps {
  content?: string | null;
  className?: string;
  theme?: 'blue' | 'emerald' | 'default';
}

interface HeadingBlock {
  type: 'heading';
  level: number;
  text: string;
}

interface MathDisplayBlock {
  type: 'math_display';
  formula: string;
}

interface TableBlock {
  type: 'table';
  headers: string[];
  alignments: ('left' | 'center' | 'right')[];
  rows: string[][];
}

interface ListItem {
  kind: 'ordered' | 'unordered';
  indent: number;
  prefix: string;
  text: string;
}

interface ListBlock {
  type: 'list';
  items: ListItem[];
}

interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

type Block = HeadingBlock | MathDisplayBlock | TableBlock | ListBlock | ParagraphBlock;

/**
 * Parses inline tokens: math ($...$, $$...$$), bold (**...**), italic (*...*), code (`...`), newline (\n).
 */
export const InlineMarkdownText: React.FC<{ text: string }> = ({ text }) => {
  const parts = useMemo(() => {
    if (!text) return [];

    // Local regex to avoid shared state across recursive calls
    const regex = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\*\*[^*]+?\*\*|\*[^*\n]+?\*|`[^`\n]+?`|\n)/g;

    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(text.substring(lastIndex, match.index));
      }

      const token = match[0];
      const key = `${match.index}-${token.length}-${match[0].slice(0, 5)}`;

      if (token === '\n') {
        result.push(<br key={key} />);
      } else if (token.startsWith('$$') && token.endsWith('$$')) {
        const formula = token.slice(2, -2).trim();
        let html = '';
        try {
          html = katex.renderToString(formula, {
            displayMode: true,
            throwOnError: false,
            output: 'htmlAndMathml',
          });
        } catch {
          html = '';
        }
        if (html) {
          result.push(
            <span
              key={key}
              className="block my-2 text-center overflow-x-auto inline-math-container font-mono"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          result.push(<span key={key}>{formula}</span>);
        }
      } else if (token.startsWith('$') && token.endsWith('$')) {
        const formula = token.slice(1, -1).trim();
        let html = '';
        try {
          html = katex.renderToString(formula, {
            displayMode: false,
            throwOnError: false,
            output: 'htmlAndMathml',
          });
        } catch {
          html = '';
        }
        if (html) {
          result.push(
            <span
              key={key}
              className="inline-math-container font-medium"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } else {
          result.push(<span key={key}>{formula}</span>);
        }
      } else if (token.startsWith('**') && token.endsWith('**')) {
        const inner = token.slice(2, -2);
        result.push(
          <strong key={key} className="font-bold text-gray-900">
            <InlineMarkdownText text={inner} />
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        const inner = token.slice(1, -1);
        result.push(
          <em key={key} className="italic text-gray-700">
            <InlineMarkdownText text={inner} />
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        const inner = token.slice(1, -1);
        result.push(
          <code key={key} className="px-1.5 py-0.5 rounded bg-gray-100 text-pink-700 text-xs font-mono border border-gray-200">
            {inner}
          </code>
        );
      }

      lastIndex = match.index + token.length;
    }

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result;
  }, [text]);

  if (!text) return null;
  return <>{parts.map((p, i) => <React.Fragment key={i}>{p}</React.Fragment>)}</>;
};

/**
 * Splits raw markdown into structured blocks:
 * - Headings (#, ##, ###)
 * - Tables (| ... | ... |)
 * - Display Math ($$ ... $$)
 * - Ordered and Unordered Lists
 * - Paragraphs
 */
function parseBlocks(markdown: string): Block[] {
  if (!markdown) return [];
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 1. Skip blank lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Headings (#, ##, ###)
    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      i++;
      continue;
    }

    // 3. Display Math block: starts with $$
    if (trimmed.startsWith('$$')) {
      if (trimmed.endsWith('$$') && trimmed.length > 2) {
        // Single-line display math: $$...$$
        blocks.push({
          type: 'math_display',
          formula: trimmed.slice(2, -2).trim(),
        });
        i++;
        continue;
      } else {
        // Multi-line display math
        let formula = trimmed.slice(2);
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) {
          formula += '\n' + lines[i];
          i++;
        }
        if (i < lines.length) {
          const last = lines[i].trim();
          formula += '\n' + last.slice(0, -2);
          i++;
        }
        blocks.push({
          type: 'math_display',
          formula: formula.trim(),
        });
        continue;
      }
    }

    // 4. Markdown Table: starts with | and next line has | :?---+:? |
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && i + 1 < lines.length) {
      const nextTrimmed = lines[i + 1].trim();
      const isDivider = /^\|(\s*:?-+:?\s*\|)+$/.test(nextTrimmed);
      if (isDivider) {
        const parseRow = (line: string): string[] =>
          line
            .split('|')
            .map((c) => c.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

        const headers = parseRow(trimmed);
        const dividerCells = parseRow(nextTrimmed);
        const alignments: ('left' | 'center' | 'right')[] = dividerCells.map((cell) => {
          const left = cell.startsWith(':');
          const right = cell.endsWith(':');
          if (left && right) return 'center';
          if (right) return 'right';
          return 'left';
        });

        const rows: string[][] = [];
        i += 2;
        while (i < lines.length) {
          const rowLine = lines[i].trim();
          if (!rowLine.startsWith('|') || !rowLine.endsWith('|')) break;
          rows.push(parseRow(rowLine));
          i++;
        }

        blocks.push({
          type: 'table',
          headers,
          alignments,
          rows,
        });
        continue;
      }
    }

    // 5. List items: ordered (1. ...) or unordered (- ... / * ...)
    const orderedMatch = rawLine.match(/^(\s*)(\d+)\.\s+(.*)$/);
    const unorderedMatch = rawLine.match(/^(\s*)[-*]\s+(.*)$/);
    if (orderedMatch || unorderedMatch) {
      const items: ListItem[] = [];
      while (i < lines.length) {
        const line = lines[i];
        const ord = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
        const unord = line.match(/^(\s*)[-*]\s+(.*)$/);
        if (ord) {
          items.push({
            kind: 'ordered',
            indent: ord[1].length,
            prefix: ord[2] + '.',
            text: ord[3],
          });
          i++;
        } else if (unord) {
          items.push({
            kind: 'unordered',
            indent: unord[1].length,
            prefix: '•',
            text: unord[2],
          });
          i++;
        } else {
          // Check if indented continuation of previous list item
          const continuationMatch = line.match(/^(\s{2,})(.*)$/);
          if (continuationMatch && items.length > 0 && continuationMatch[2].trim()) {
            items[items.length - 1].text += '\n' + continuationMatch[2].trim();
            i++;
          } else {
            break;
          }
        }
      }
      blocks.push({
        type: 'list',
        items,
      });
      continue;
    }

    // 6. Regular paragraph: gather consecutive text lines
    const paraLines: string[] = [];
    while (i < lines.length) {
      const line = lines[i];
      const t = line.trim();
      if (!t) break;
      // If next line starts heading, display math, table, or list, stop paragraph
      if (/^(#{1,3})\s+/.test(t)) break;
      if (t.startsWith('$$')) break;
      if (t.startsWith('|') && t.endsWith('|') && i + 1 < lines.length && /^\|(\s*:?-+:?\s*\|)+$/.test(lines[i + 1].trim())) break;
      if (/^(\s*)(\d+)\.\s+/.test(line) || /^(\s*)[-*]\s+/.test(line)) break;

      paraLines.push(t);
      i++;
    }

    if (paraLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: paraLines.join('\n'),
      });
    }
  }

  return blocks;
}

/**
 * ConceptMarkdown Component:
 * Full-featured Markdown and Math parser designed specifically for TCS iON bank exam concept notes.
 * Renders:
 * - Proper HTML tables with high-contrast banking style headers and zebra rows
 * - Sub-headings with clean colored accent bars
 * - Centered KaTeX display formulas
 * - Numbered and bulleted lists
 * - Inline KaTeX math and bold/italic highlights
 */
export const ConceptMarkdown: React.FC<ConceptMarkdownProps> = ({
  content,
  className = '',
  theme = 'default',
}) => {
  const blocks = useMemo(() => {
    if (!content) return [];
    return parseBlocks(content);
  }, [content]);

  if (!content || blocks.length === 0) return null;

  // Theme styling tokens
  const accentBar =
    theme === 'blue'
      ? 'bg-blue-600'
      : theme === 'emerald'
      ? 'bg-emerald-600'
      : 'bg-slate-700';

  const tableHeaderBg =
    theme === 'blue'
      ? 'bg-gradient-to-r from-blue-100/90 to-indigo-100/90 text-blue-950 border-blue-200'
      : theme === 'emerald'
      ? 'bg-gradient-to-r from-emerald-100/90 to-teal-100/90 text-emerald-950 border-emerald-200'
      : 'bg-slate-100 text-slate-900 border-slate-200';

  const tableBorder =
    theme === 'blue'
      ? 'border-blue-200'
      : theme === 'emerald'
      ? 'border-emerald-200'
      : 'border-slate-200';

  const mathBoxBorder =
    theme === 'blue'
      ? 'border-blue-200 bg-white shadow-xs'
      : theme === 'emerald'
      ? 'border-emerald-200 bg-white shadow-xs'
      : 'border-slate-200 bg-white shadow-xs';

  return (
    <div className={`space-y-3.5 text-gray-800 leading-relaxed ${className}`}>
      {blocks.map((block, bIdx) => {
        if (block.type === 'heading') {
          if (block.level === 3) {
            return (
              <div key={bIdx} className="flex items-center space-x-2 pt-3 pb-1 border-b border-gray-100 mt-3 mb-1">
                <span className={`w-1.5 h-4 rounded-full ${accentBar} shrink-0`} />
                <h3 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">
                  <InlineMarkdownText text={block.text} />
                </h3>
              </div>
            );
          }
          if (block.level === 2) {
            return (
              <div key={bIdx} className="flex items-center space-x-2 pt-3.5 pb-1 border-b border-gray-200 mt-4 mb-1.5">
                <span className={`w-2 h-4.5 rounded-full ${accentBar} shrink-0`} />
                <h2 className="font-bold text-gray-900 text-base sm:text-lg tracking-tight">
                  <InlineMarkdownText text={block.text} />
                </h2>
              </div>
            );
          }
          return (
            <div key={bIdx} className="flex items-center space-x-2.5 pt-4 pb-1.5 border-b border-gray-300 mt-4 mb-2">
              <span className={`w-2.5 h-5 rounded-full ${accentBar} shrink-0`} />
              <h1 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight">
                <InlineMarkdownText text={block.text} />
              </h1>
            </div>
          );
        }

        if (block.type === 'math_display') {
          let formulaHtml = '';
          try {
            formulaHtml = katex.renderToString(block.formula, {
              displayMode: true,
              throwOnError: false,
              output: 'htmlAndMathml',
            });
          } catch {
            formulaHtml = block.formula;
          }

          return (
            <div
              key={bIdx}
              className={`my-3 p-3.5 rounded-lg border text-center overflow-x-auto ${mathBoxBorder}`}
            >
              <div
                className="font-mono text-gray-950 inline-math-container"
                dangerouslySetInnerHTML={{ __html: formulaHtml }}
              />
            </div>
          );
        }

        if (block.type === 'table') {
          return (
            <div
              key={bIdx}
              className={`my-3.5 overflow-x-auto rounded-lg border ${tableBorder} shadow-xs bg-white`}
            >
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead className={`border-b font-bold ${tableHeaderBg}`}>
                  <tr>
                    {block.headers.map((h, hIdx) => {
                      const align = block.alignments[hIdx] || 'center';
                      const alignClass =
                        align === 'center'
                          ? 'text-center'
                          : align === 'right'
                          ? 'text-right'
                          : 'text-left';
                      return (
                        <th
                          key={hIdx}
                          className={`px-3 py-2.5 font-bold tracking-tight ${alignClass}`}
                        >
                          <InlineMarkdownText text={h} />
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {block.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={
                        rIdx % 2 === 0
                          ? 'bg-white hover:bg-blue-50/30 transition-colors'
                          : 'bg-slate-50/70 hover:bg-blue-50/40 transition-colors'
                      }
                    >
                      {row.map((cell, cIdx) => {
                        const align = block.alignments[cIdx] || 'center';
                        const alignClass =
                          align === 'center'
                            ? 'text-center'
                            : align === 'right'
                            ? 'text-right'
                            : 'text-left';
                        return (
                          <td
                            key={cIdx}
                            className={`px-3 py-2 text-gray-800 ${alignClass}`}
                          >
                            <InlineMarkdownText text={cell} />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === 'list') {
          return (
            <div key={bIdx} className="space-y-1.5 my-2.5">
              {block.items.map((item, itIdx) => {
                if (item.indent > 0 || item.kind === 'unordered') {
                  return (
                    <div
                      key={itIdx}
                      className="pl-5 flex items-start space-x-2 text-xs sm:text-sm text-gray-700 leading-relaxed"
                    >
                      <span className="text-gray-400 font-bold select-none shrink-0">•</span>
                      <div className="flex-1">
                        <InlineMarkdownText text={item.text} />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={itIdx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-800 leading-relaxed"
                  >
                    <span
                      className={`text-[11px] font-bold px-1.5 py-0.5 rounded select-none shrink-0 mt-0.5 ${
                        theme === 'emerald'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {item.prefix}
                    </span>
                    <div className="flex-1">
                      <InlineMarkdownText text={item.text} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        // Paragraph
        return (
          <p key={bIdx} className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            <InlineMarkdownText text={block.text} />
          </p>
        );
      })}
    </div>
  );
};
