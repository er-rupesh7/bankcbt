'use client';

import React, { useState } from 'react';
import { useExamStore } from '@/store/useExamStore';
import { Question, Option, QuestionGroup } from '@/types/exam';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

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

  if (!exam || !currentSectionId || !currentQuestionId) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-gray-500">
        No question selected.
      </div>
    );
  }

  const currentSection = exam.sections.find((s) => s.id === currentSectionId);
  const currentQuestion = currentSection?.questions.find((q) => q.id === currentQuestionId);

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-gray-500">
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
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      {/* Top Question Info Bar */}
      <div className="bg-[#e9f2fb] border-b border-[#c4d1db] px-4 py-2 flex flex-wrap items-center justify-between text-xs text-gray-700 select-none">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-[#0e3b64] text-sm md:text-base">
            Question No. {currentQuestion.orderInSection}
          </span>
          <span className="text-gray-400">|</span>
          <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded font-mono font-medium">
            Marks for correct: +{Number(currentQuestion.marks.toFixed(3))}
          </span>
          <span className="bg-red-50 text-red-800 border border-red-300 px-2 py-0.5 rounded font-mono font-medium">
            Negative marks: -{Number(currentQuestion.negativeMarks.toFixed(3))}
          </span>
        </div>

        {/* Font Zoom Controls (Classic TCS iON) */}
        <div className="flex items-center space-x-1.5 mt-1 sm:mt-0">
          <span className="text-[11px] text-gray-600 font-semibold mr-1">Text Size:</span>
          <button
            onClick={() => setFontSize('sm')}
            title="Small text"
            className={`px-2 py-0.5 text-xs font-bold border rounded ${
              fontSize === 'sm' ? 'bg-[#0e3b64] text-white border-[#0e3b64]' : 'bg-white text-gray-700'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('base')}
            title="Regular text"
            className={`px-2 py-0.5 text-xs font-bold border rounded ${
              fontSize === 'base' ? 'bg-[#0e3b64] text-white border-[#0e3b64]' : 'bg-white text-gray-700'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            title="Large text"
            className={`px-2 py-0.5 text-xs font-bold border rounded ${
              fontSize === 'lg' ? 'bg-[#0e3b64] text-white border-[#0e3b64]' : 'bg-white text-gray-700'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Main Split-Pane or Full Viewport */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Pane: Common Passage / Puzzle Clues / DI Table (If present) */}
        {questionGroup && (
          <div className="w-full md:w-1/2 p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#c4d1db] overflow-y-auto bg-[#fafbfc]">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs">
              {questionGroup.title && (
                <div className="text-xs font-bold uppercase tracking-wider text-[#0e3b64] mb-3 pb-2 border-b border-blue-100 flex items-center justify-between">
                  <span>{questionGroup.title}</span>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    Common Context
                  </span>
                </div>
              )}

              {/* Passage / Clues */}
              <div className={`prose max-w-none text-gray-800 leading-relaxed font-sans ${fontClasses} whitespace-pre-line`}>
                {language === 'hi' && questionGroup.passageHi
                  ? questionGroup.passageHi
                  : questionGroup.passageEn}
              </div>

              {/* Structured DI Table Render (If present) */}
              {questionGroup.chartConfig && questionGroup.chartConfig.type === 'table' && (
                <div className="mt-4 overflow-x-auto border rounded-md">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                    <thead className="bg-[#0e3b64] text-white">
                      <tr>
                        {questionGroup.chartConfig.tableHeaders?.map((header: string, idx: number) => (
                          <th key={idx} className="px-3 py-2 text-left font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 font-mono">
                      {questionGroup.chartConfig.tableRows?.map((row: (string | number)[], rIdx: number) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          {row.map((cell: string | number, cIdx: number) => (
                            <td key={cIdx} className="px-3 py-2 text-gray-800">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Right Pane: Question Text & 5 Options */}
        <div className={`flex-1 p-4 md:p-6 overflow-y-auto ${questionGroup ? 'w-full md:w-1/2' : 'w-full'}`}>
          <div className="max-w-3xl">
            {/* Topic & Subtopic Tag */}
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
              <span className="font-semibold text-blue-700">{currentQuestion.topic}</span>
              {currentQuestion.subTopic && (
                <>
                  <span>•</span>
                  <span>{currentQuestion.subTopic}</span>
                </>
              )}
              <span>•</span>
              <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-mono">
                Ideal: ~{currentQuestion.avgIdealTimeSeconds}s
              </span>
            </div>

            {/* Question Text */}
            <div className={`font-medium text-gray-900 mb-6 leading-relaxed whitespace-pre-line ${fontClasses}`}>
              {language === 'hi' && currentQuestion.questionTextHi
                ? currentQuestion.questionTextHi
                : currentQuestion.questionTextEn}
            </div>

            {/* 5 Radio Options (Standard Banking A, B, C, D, E) */}
            <div className="space-y-3 select-none">
              {currentQuestion.options.map((option: Option) => {
                const isChecked = activeSelectedId === option.id;

                return (
                  <label
                    key={option.id}
                    onClick={() => selectOptionDraft(option.id)}
                    className={`flex items-start p-3 rounded-md border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-blue-50/80 border-[#0e3b64] shadow-xs ring-1 ring-[#0e3b64]'
                        : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    {/* Authentic Circular Radio Selector */}
                    <div className="flex items-center h-5 mr-3 mt-0.5">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          isChecked ? 'border-[#0e3b64] bg-[#0e3b64]' : 'border-gray-400 bg-white'
                        }`}
                      >
                        {isChecked && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="font-bold text-[#0e3b64] text-xs sm:text-sm font-mono">
                        ({option.identifier})
                      </span>
                      <span className={`text-gray-800 ${fontClasses}`}>
                        {language === 'hi' && option.optionTextHi
                          ? option.optionTextHi
                          : option.optionTextEn}
                      </span>
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
