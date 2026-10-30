'use client';

import React, { useEffect } from 'react';
import { useExamStore } from '@/store/useExamStore';
import { ExamSelectionGateway } from './ExamSelectionGateway';
import { ExamHeader } from './ExamHeader';
import { SectionTabBar } from './SectionTabBar';
import { DualPaneQuestionArea } from './DualPaneQuestionArea';
import { QuestionPalette } from './QuestionPalette';
import { ActionFooter } from './ActionFooter';
import { SubmitConfirmModal } from './SubmitConfirmModal';
import { AnalyticsDashboard } from './AnalyticsDashboard';

export const ExamInterface: React.FC = () => {
  const {
    exam,
    isExamStarted,
    isExamSubmitted,
    isGatewayOpen,
    tickTimer,
  } = useExamStore();

  // Master 1-second interval ticking the store's timer engine
  useEffect(() => {
    if (!isExamStarted || isExamSubmitted || isGatewayOpen) return;

    const interval = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamStarted, isExamSubmitted, isGatewayOpen, tickTimer]);

  // 1. If Exam has been submitted, show Analytics & Diagnostics Dashboard
  if (isExamSubmitted) {
    return <AnalyticsDashboard />;
  }

  // 2. If user is at Gateway or Exam has not started yet
  if (!isExamStarted || isGatewayOpen || !exam) {
    return <ExamSelectionGateway />;
  }

  // 3. Official TCS iON Examination CBT Arena
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-100 font-sans select-none">
      {/* 1. TCS iON Top Header */}
      <ExamHeader />

      {/* 2. Section Navigation Tab Bar (Hard sectional lock or composite) */}
      <SectionTabBar />

      {/* 3. Center Workspace: Main Question Viewport (Left 75%) + Palette Grid (Right 25%) */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        <DualPaneQuestionArea />
        <QuestionPalette />
      </div>

      {/* 4. TCS iON Bottom Action Footer */}
      <ActionFooter />

      {/* 5. Submission Confirmation Modal */}
      <SubmitConfirmModal />
    </div>
  );
};
