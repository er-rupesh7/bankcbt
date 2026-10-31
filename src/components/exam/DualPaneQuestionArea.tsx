'use client';

import React, { useState } from 'react';
import { useExamStore } from '@/store/useExamStore';
import { Option, QuestionGroup } from '@/types/exam';
import { MathText } from '@/components/common/MathText';
import { BookOpen, HelpCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export const DualPaneQuestionArea: React.FC = () => {
  const {
    exam,
    currentSectionId,
    currentQuestionId,
    language,
    currentDraftOptionId,
    questionStates,
    selectOptionDraft,
  } = useExamStore();

  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [mobileTab, setMobileTab] = useState<'QUESTION' | 'PASSAGE'>('QUESTION');
  const [isPassageAccordionOpen, setIsPassageAccordionOpen] = useState<boolean>(false);

  if (!exam || !currentSectionId || !currentQuestionId) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-500 font-sans">
        No question selected.
      </div>
    );
  }

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  const currentQuestion = currentSection?.questions.find((q) => q.id === currentQuestionId);

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-500 font-sans">
        Question not found.
      </div>
    );
  }

  // Check if current question belongs to a QuestionGroup (Passage/DI/Puzzle)
  const questionGroup: QuestionGroup | undefined = currentQuestion.questionGroupId
    ? currentSection?.questionGroups.find((g) => g.id === currentQuestion.questionGroupId)
    : undefined;

  const currentSavedOptionId = questionStates[currentQuestion.id]?.selectedOptionId;
  const activeSelectedId = currentDraftOptionId ?? currentSavedOptionId ?? null;

  // Font sizing styles
  const fontClasses = {
    sm: 'text-xs md:text-sm',
    base: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
  }[fontSize];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white select-none">
      {/* Top Question Info Bar */}
      <div className="bg-[#EBF3FB] border-b border-slate-300 px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between text-xs text-slate-700 select-none shrink-0 gap-2">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="font-bold text-[#0A2F5C] text-sm md:text-base">
            Question No. {currentQuestion.orderInSection}
          </span>
          <span className="text-slate-300">|</span>
          <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded font-mono font-medium text-[11px] sm:text-xs">
            Correct: +{Number(currentQuestion.marks.toFixed(3))}
          </span>
          <span className="bg-red-50 text-red-800 border border-red-300 px-2 py-0.5 rounded font-mono font-medium text-[11px] sm:text-xs">
            Negative: -{Number(currentQuestion.negativeMarks.toFixed(3))}
          </span>
        </div>

        {/* Font Zoom Controls (Classic TCS iON) */}
        <div className="flex items-center space-x-1.5">
          <span className="text-[11px] text-slate-600 font-semibold mr-1 hidden sm:inline">Text Size:</span>
          <button
            onClick={() => setFontSize('sm')}
            title="Small text"
            className={`px-2 py-0.5 text-xs font-bold border rounded cursor-pointer ${
              fontSize === 'sm' ? 'bg-[#0A2F5C] text-white border-[#0A2F5C]' : 'bg-white text-slate-700 border-slate-300'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('base')}
            title="Regular text"
            className={`px-2 py-0.5 text-xs font-bold border rounded cursor-pointer ${
              fontSize === 'base' ? 'bg-[#0A2F5C] text-white border-[#0A2F5C]' : 'bg-white text-slate-700 border-slate-300'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            title="Large text"
            className={`px-2 py-0.5 text-xs font-bold border rounded cursor-pointer ${
              fontSize === 'lg' ? 'bg-[#0A2F5C] text-white border-[#0A2F5C]' : 'bg-white text-slate-700 border-slate-300'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Mobile Sub-Tab Switcher (Only visible when QuestionGroup/Passage/DI exists on screens < md) */}
      {questionGroup && (
        <div className="md:hidden flex border-b border-slate-300 bg-slate-100 p-1 shrink-0">
          <button
            onClick={() => setMobileTab('QUESTION')}
            className={`flex-1 py-1.5 text-xs font-bold rounded flex items-center justify-center space-x-1 transition-all ${
              mobileTab === 'QUESTION'
                ? 'bg-white text-[#0A2F5C] shadow-xs border border-slate-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>✍️ Question &amp; Options</span>
          </button>

          <button
            onClick={() => setMobileTab('PASSAGE')}
            className={`flex-1 py-1.5 text-xs font-bold rounded flex items-center justify-center space-x-1 transition-all ${
              mobileTab === 'PASSAGE'
                ? 'bg-white text-[#0A2F5C] shadow-xs border border-slate-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>📖 Read Passage / DI Table</span>
          </button>
        </div>
      )}

      {/* Main Split-Pane or Full Viewport */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Left Pane: Common Passage / Puzzle Clues / DI Table (If present) */}
        {questionGroup && (
          <div
            className={`p-4 md:p-6 border-b md:border-b-0 md:border-r border-slate-300 overflow-y-auto bg-[#F8FAFC] ${
              mobileTab === 'PASSAGE' ? 'flex-1 md:w-1/2 flex flex-col' : 'hidden md:block md:w-1/2'
            }`}
          >
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              {questionGroup.title && (
                <div className="text-xs font-bold uppercase tracking-wider text-[#0A2F5C] mb-3 pb-2 border-b border-blue-100 flex items-center justify-between">
                  <span>{questionGroup.title}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                    Common Context
                  </span>
                </div>
              )}

              {/* Passage / Clues */}
              <MathText
                as="div"
                className={`prose max-w-none text-slate-800 leading-relaxed font-sans ${fontClasses} whitespace-pre-line`}
                text={language === 'hi' && questionGroup.passageHi ? questionGroup.passageHi : questionGroup.passageEn}
              />

              {/* Structured DI Table Render (If present) */}
              {questionGroup.chartConfig && questionGroup.chartConfig.type === 'table' && (
                <div className="mt-4 overflow-x-auto border border-slate-300 rounded-md shadow-xs">
                  <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                    <thead className="bg-[#0A2F5C] text-white">
                      <tr>
                        {questionGroup.chartConfig.tableHeaders?.map((header: string, idx: number) => (
                          <th key={idx} className="px-3 py-2 text-left font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100 font-mono">
                      {questionGroup.chartConfig.tableRows?.map((row: (string | number)[], rIdx: number) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          {row.map((cell: string | number, cIdx: number) => (
                            <td key={cIdx} className="px-3 py-2 text-slate-800">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Mobile Quick Action to switch back to answering */}
              <div className="md:hidden mt-4 pt-3 border-t border-slate-200">
                <button
                  onClick={() => setMobileTab('QUESTION')}
                  className="w-full py-2 bg-[#0B4F8A] hover:bg-[#083D6B] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>✍️ Ready to Answer Question #{currentQuestion.orderInSection} ➔</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right Pane: Question Text & 5 Options */}
        <div
          className={`flex-1 p-4 md:p-6 overflow-y-auto ${
            questionGroup
              ? mobileTab === 'QUESTION'
                ? 'w-full md:w-1/2 block'
                : 'hidden md:block md:w-1/2'
              : 'w-full'
          }`}
        >
          <div className="max-w-3xl">
            {/* Quick Context Pill for Mobile (accordion toggle) */}
            {questionGroup && (
              <div className="md:hidden mb-3">
                <button
                  onClick={() => setIsPassageAccordionOpen(!isPassageAccordionOpen)}
                  className="w-full text-left bg-blue-50/90 border border-blue-200 text-[#0A2F5C] p-2.5 rounded-lg text-xs font-bold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                    <span>📄 View Reading Passage / Directions</span>
                  </span>
                  {isPassageAccordionOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-blue-700" />
                  )}
                </button>

                {isPassageAccordionOpen && (
                  <div className="mt-2 p-3 bg-[#F8FAFC] border border-blue-200 rounded-lg text-xs leading-relaxed max-h-48 overflow-y-auto text-slate-800 animate-in fade-in">
                    <MathText
                      as="div"
                      text={language === 'hi' && questionGroup.passageHi ? questionGroup.passageHi : questionGroup.passageEn}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Topic & Subtopic Tag */}
            <div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
              <span className="font-semibold text-[#0B4F8A]">{currentQuestion.topic}</span>
              {currentQuestion.subTopic && (
                <>
                  <span>•</span>
                  <span>{currentQuestion.subTopic}</span>
                </>
              )}
              <span>•</span>
              <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px] font-mono">
                Ideal: ~{currentQuestion.avgIdealTimeSeconds}s
              </span>
            </div>

            {/* Question Text */}
            <MathText
              as="div"
              className={`font-medium text-slate-900 mb-6 leading-relaxed whitespace-pre-line ${fontClasses}`}
              text={language === 'hi' && currentQuestion.questionTextHi ? currentQuestion.questionTextHi : currentQuestion.questionTextEn}
            />

            {/* 5 Radio Options (Standard Banking A, B, C, D, E) */}
            <div className="space-y-3 select-none pb-4">
              {currentQuestion.options.map((option: Option) => {
                const isChecked = activeSelectedId === option.id;

                return (
                  <label
                    key={option.id}
                    onClick={() => selectOptionDraft(option.id)}
                    className={`flex items-start p-3 sm:p-3.5 rounded-lg border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-blue-50/90 border-[#0B4F8A] shadow-xs ring-1 ring-[#0B4F8A]'
                        : 'bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                    }`}
                  >
                    {/* Authentic Circular Radio Selector */}
                    <div className="flex items-center h-5 mr-3 mt-0.5">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          isChecked ? 'border-[#0B4F8A] bg-[#0B4F8A]' : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isChecked && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="font-bold text-[#0B4F8A] text-xs sm:text-sm font-mono shrink-0">
                        ({option.identifier})
                      </span>
                      <MathText
                        as="span"
                        className={`text-slate-800 ${fontClasses}`}
                        text={language === 'hi' && option.optionTextHi ? option.optionTextHi : option.optionTextEn}
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
