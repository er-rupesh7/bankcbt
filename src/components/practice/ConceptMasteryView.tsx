// src/components/practice/ConceptMasteryView.tsx

'use client';

import React, { useState } from 'react';
import { ConceptGuideData, ContentLanguage, SyllabusTopicConfig } from '@/types/topicPractice';
import { MathText } from '@/components/common/MathText';
import {
  Lightbulb,
  AlertTriangle,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ConceptMasteryViewProps {
  topic: SyllabusTopicConfig;
  conceptGuide: ConceptGuideData;
  onStartPractice: () => void;
  onMarkConceptCompleted?: () => void;
  isCompleted?: boolean;
}

export const ConceptMasteryView: React.FC<ConceptMasteryViewProps> = ({
  topic,
  conceptGuide,
  onStartPractice,
  onMarkConceptCompleted,
  isCompleted = false,
}) => {
  const [langMode, setLangMode] = useState<ContentLanguage>('BILINGUAL');
  const [expandedExamples, setExpandedExamples] = useState<Record<number, boolean>>({
    0: true, // first example open by default
  });

  const toggleExample = (idx: number) => {
    setExpandedExamples((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const showEn = langMode === 'EN' || langMode === 'BILINGUAL';
  const showHi = langMode === 'HI' || langMode === 'BILINGUAL';

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner / Topic Overview & Controls */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{topic.icon || '📖'}</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">
              {topic.titleEn}
            </h2>
          </div>
          <p className="text-sm text-gray-500 font-medium mt-1">
            {topic.titleHi} &bull; <span className="text-blue-600 font-semibold">{topic.clusterName}</span>
          </p>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg self-start md:self-auto border border-gray-200">
          <button
            onClick={() => setLangMode('EN')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition ${
              langMode === 'EN'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLangMode('HI')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition ${
              langMode === 'HI'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            हिन्दी
          </button>
          <button
            onClick={() => setLangMode('BILINGUAL')}
            className={`px-3 py-1 text-xs font-bold rounded-md transition ${
              langMode === 'BILINGUAL'
                ? 'bg-[#0e3b64] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Bilingual
          </button>
        </div>
      </div>

      {/* 1. Core Theory & Concept SVG Visual Diagram */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-5">
        <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Core Concept Architecture &amp; Mental Model
            </h3>
            <p className="text-xs text-gray-500">
              Foundational theory taught the exam-proven unit and ratio way
            </p>
          </div>
        </div>

        {/* SVG Mental Model Diagram */}
        {conceptGuide.conceptSvgDiagram && (
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-slate-50 p-2 sm:p-4 my-4 flex items-center justify-center shadow-inner">
            <div
              className="w-full max-w-2xl"
              dangerouslySetInnerHTML={{ __html: conceptGuide.conceptSvgDiagram }}
            />
          </div>
        )}

        {/* Theory Text (English & Hindi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
          {showEn && (
            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                English Concept Note
              </span>
              <div className="text-gray-800 whitespace-pre-line prose prose-sm max-w-none">
                <MathText text={conceptGuide.coreTheoryEn} />
              </div>
            </div>
          )}

          {showHi && (
            <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                हिन्दी संकल्पना विवरण
              </span>
              <div className="text-gray-800 whitespace-pre-line prose prose-sm max-w-none">
                <MathText text={conceptGuide.coreTheoryHi} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Formula Sheet & Golden Exam Rules */}
      {conceptGuide.formulasAndRules && conceptGuide.formulasAndRules.length > 0 && (
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Formula Sheet &amp; Golden Banking Rules
              </h3>
              <p className="text-xs text-gray-500">
                Standardized LaTeX formulas and rules to commit to memory
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conceptGuide.formulasAndRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-gray-200 bg-gray-50/60 hover:bg-white hover:border-blue-300 transition space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-gray-900 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{rule.title}</span>
                  </h4>
                </div>

                {/* LaTeX Formula Display */}
                {rule.latexFormula && (
                  <div className="bg-white p-3 rounded-md border border-gray-200 text-center font-mono text-blue-900 shadow-xs overflow-x-auto">
                    <MathText text={`$$${rule.latexFormula}$$`} />
                  </div>
                )}

                {/* Explanations */}
                <div className="text-xs space-y-1.5 text-gray-700">
                  {showEn && (
                    <p>
                      <strong className="text-gray-900">EN:</strong>{' '}
                      <MathText text={rule.explanationEn} />
                    </p>
                  )}
                  {showHi && (
                    <p>
                      <strong className="text-gray-900">HI:</strong>{' '}
                      <MathText text={rule.explanationHi} />
                    </p>
                  )}
                  {rule.exampleEn && showEn && (
                    <p className="text-gray-500 italic">
                      Eg: <MathText text={rule.exampleEn} />
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Conventional vs. Smart Approach Comparison Table */}
      {conceptGuide.shortcutTricks && conceptGuide.shortcutTricks.length > 0 && (
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                The 20-Second Exam Shortcut vs. School Method
              </h3>
              <p className="text-xs text-gray-500">
                Cutting calculation friction from 90 seconds down to 20 seconds
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {conceptGuide.shortcutTricks.map((trick, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-xs"
              >
                <div className="bg-gray-100/80 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
                  <span className="font-bold text-sm text-gray-900 flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>{trick.trickName}</span>
                  </span>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="line-through text-red-500 font-semibold flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{trick.conventionalTime}</span>
                    </span>
                    <span className="text-emerald-700 font-black bg-emerald-100 px-2 py-0.5 rounded flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>{trick.shortcutTime}</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-xs sm:text-sm">
                  {/* Conventional Method */}
                  <div className="p-4 bg-red-50/30 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-red-700 bg-red-100/60 px-2 py-0.5 rounded">
                      ❌ School Method (Slow)
                    </span>
                    <p className="text-gray-700 whitespace-pre-line">
                      <MathText text={showEn ? trick.conventionalMethodEn : trick.conventionalMethodHi} />
                    </p>
                  </div>

                  {/* Smart PO Shortcut */}
                  <div className="p-4 bg-emerald-50/40 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded flex items-center space-x-1 w-fit">
                      <Sparkles className="w-3 h-3" />
                      <span>⚡ Bank PO 20s Method (Fast)</span>
                    </span>
                    <p className="text-gray-900 font-medium whitespace-pre-line">
                      <MathText text={showEn ? trick.shortcutStepsEn : trick.shortcutStepsHi} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. TCS iON Examiner Traps & Red Flags Alert Box */}
      {conceptGuide.commonTraps && conceptGuide.commonTraps.length > 0 && (
        <section className="bg-red-50/60 border-2 border-red-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5 pb-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-black text-red-900">
                ⚠️ TCS iON Examiner Traps &amp; Common Pitfalls
              </h3>
              <p className="text-xs text-red-700">
                The exact tricky mistakes 75% of banking aspirants make under exam timer pressure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conceptGuide.commonTraps.map((trap, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-red-200 space-y-2 text-xs sm:text-sm shadow-xs"
              >
                <h4 className="font-bold text-red-900 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>{trap.trapTitle}</span>
                </h4>
                <div className="space-y-1.5 text-gray-700">
                  <p>
                    <span className="font-semibold text-red-700">Common Mistake:</span>{' '}
                    <MathText text={trap.mistakeStudentsMake} />
                  </p>
                  <p className="text-emerald-800 font-medium bg-emerald-50 p-2 rounded border border-emerald-200">
                    <span className="font-bold text-emerald-900">✓ How to Avoid:</span>{' '}
                    <MathText text={trap.howToAvoid} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. 3 Interactive Solved Examples with Accordion Reveal */}
      {conceptGuide.solvedExamples && conceptGuide.solvedExamples.length > 0 && (
        <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Step-by-Step Solved Benchmark Examples
              </h3>
              <p className="text-xs text-gray-500">
                Easy, Moderate &amp; Mains difficulty models with expandable solution breakdowns
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {conceptGuide.solvedExamples.map((ex, idx) => {
              const isExpanded = !!expandedExamples[idx];
              const levelColor =
                ex.level === 'Easy'
                  ? 'bg-blue-100 text-blue-800'
                  : ex.level === 'Moderate'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-red-100 text-red-800';

              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden transition"
                >
                  {/* Header / Question Stem */}
                  <div
                    onClick={() => toggleExample(idx)}
                    className="p-4 bg-gray-50 hover:bg-gray-100/80 cursor-pointer flex items-start justify-between gap-3 select-none"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${levelColor}`}
                        >
                          {ex.level} Model
                        </span>
                        <span className="text-xs font-bold text-gray-500">
                          Example #{idx + 1}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        <MathText text={showEn ? ex.questionEn : ex.questionHi} />
                      </p>
                    </div>

                    <button className="text-gray-500 hover:text-gray-900 p-1">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Accordion Body */}
                  {isExpanded && (
                    <div className="p-4 border-t border-gray-200 bg-white space-y-4 text-xs sm:text-sm">
                      {/* Conventional Solution */}
                      <div className="space-y-1">
                        <span className="font-bold text-gray-900 flex items-center space-x-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Foundational Step-by-Step Derivation:</span>
                        </span>
                        <p className="text-gray-700 whitespace-pre-line pl-5 border-l-2 border-blue-200">
                          <MathText text={showEn ? ex.conventionalSolEn : ex.conventionalSolHi} />
                        </p>
                      </div>

                      {/* 20-Second Shortcut Trick */}
                      <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 space-y-1">
                        <span className="font-bold text-emerald-900 flex items-center space-x-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>Bank PO 20s Shortcut Trick:</span>
                        </span>
                        <p className="text-emerald-800 whitespace-pre-line font-medium pl-5 border-l-2 border-emerald-300">
                          <MathText text={showEn ? ex.shortcutTrickEn : ex.shortcutTrickHi} />
                        </p>
                      </div>

                      {/* Final Answer Badge */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500 font-semibold">
                          Final Exam Answer:
                        </span>
                        <span className="text-xs font-black bg-blue-100 text-blue-900 px-3 py-1 rounded">
                          {ex.finalAnswer}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Completion & Call-to-Action Bar */}
      <div className="bg-gradient-to-r from-[#0c2f54] to-[#12497d] text-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-black text-lg text-white flex items-center space-x-2">
            <span>Concept Theory Review Complete!</span>
            {isCompleted && (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400 text-white" />
            )}
          </h4>
          <p className="text-xs text-blue-200">
            You are ready to test speed and accuracy with Level 1, 2, and 3 practice drills.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {onMarkConceptCompleted && !isCompleted && (
            <button
              onClick={onMarkConceptCompleted}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-blue-100 font-semibold text-xs transition border border-white/20"
            >
              Mark Concept Read (✓)
            </button>
          )}

          <button
            onClick={onStartPractice}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#ff9900] hover:bg-[#e68a00] text-[#0e3b64] font-black text-sm shadow-md transition transform active:scale-95"
          >
            <span>Start Practice Questions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
