'use client';

import React from 'react';
import { useExamStore } from '@/store/useExamStore';
import { AlertTriangle, X, Check } from 'lucide-react';
import { Section } from '@/types/exam';

export const SubmitConfirmModal: React.FC = () => {
  const {
    isSubmitModalOpen,
    closeSubmitModal,
    submitExam,
    exam,
    questionStates,
  } = useExamStore();

  if (!isSubmitModalOpen || !exam) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-300 max-w-2xl w-full overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0e3b64] text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="text-sm sm:text-base font-bold">Exam Summary & Confirmation</h2>
          </div>
          <button
            onClick={closeSubmitModal}
            className="text-gray-300 hover:text-white p-1 rounded hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5">
          <p className="text-xs sm:text-sm text-gray-700 mb-4">
            Please review your exam attempt status across all sections before submitting.
            Once submitted, you will not be able to return to change any response.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full divide-y divide-gray-200 text-xs text-left">
              <thead className="bg-[#f0f4f8] text-gray-800 font-bold">
                <tr>
                  <th className="px-3 py-2">Section Name</th>
                  <th className="px-3 py-2 text-center">Total Qs</th>
                  <th className="px-3 py-2 text-center text-emerald-700">Answered</th>
                  <th className="px-3 py-2 text-center text-red-700">Not Answered</th>
                  <th className="px-3 py-2 text-center text-purple-700">Marked Review</th>
                  <th className="px-3 py-2 text-center text-purple-900">Ans & Marked*</th>
                  <th className="px-3 py-2 text-center text-gray-600">Not Visited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-[11px] sm:text-xs">
                {exam.sections.map((sec: Section) => {
                  let ans = 0;
                  let notAns = 0;
                  let marked = 0;
                  let ansMarked = 0;
                  let notVisited = 0;

                  sec.questions.forEach((q) => {
                    const st = questionStates[q.id]?.paletteState || 'NOT_VISITED';
                    if (st === 'ANSWERED') ans++;
                    else if (st === 'NOT_ANSWERED') notAns++;
                    else if (st === 'MARKED_FOR_REVIEW') marked++;
                    else if (st === 'ANSWERED_AND_MARKED_FOR_REVIEW') ansMarked++;
                    else notVisited++;
                  });

                  return (
                    <tr key={sec.id} className="hover:bg-blue-50/50">
                      <td className="px-3 py-2 font-sans font-semibold text-gray-900">
                        {sec.displayName}
                      </td>
                      <td className="px-3 py-2 text-center font-bold">{sec.questions.length}</td>
                      <td className="px-3 py-2 text-center text-emerald-700 font-bold">{ans}</td>
                      <td className="px-3 py-2 text-center text-red-700 font-bold">{notAns}</td>
                      <td className="px-3 py-2 text-center text-purple-700 font-bold">{marked}</td>
                      <td className="px-3 py-2 text-center text-purple-900 font-bold">{ansMarked}</td>
                      <td className="px-3 py-2 text-center text-gray-500 font-bold">{notVisited}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-gray-500 mt-2 italic">
            * Note: Questions marked as &apos;Answered &amp; Marked for Review&apos; are evaluated for scoring in real IBPS/SBI exams.
          </p>
        </div>

        {/* Modal Actions */}
        <div className="bg-gray-50 border-t border-gray-200 px-5 py-3 flex items-center justify-end space-x-3">
          <button
            onClick={closeSubmitModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
          >
            Cancel & Return to Exam
          </button>
          <button
            onClick={submitExam}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Confirm Final Submission</span>
          </button>
        </div>
      </div>
    </div>
  );
};
