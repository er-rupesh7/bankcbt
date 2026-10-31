'use client';

import React, { useEffect } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useExamStore } from '@/store/useExamStore';
import { ExamSelectionGateway } from './ExamSelectionGateway';
import { ExamHeader } from './ExamHeader';
import { SectionTabBar } from './SectionTabBar';
import { DualPaneQuestionArea } from './DualPaneQuestionArea';
import { QuestionPalette } from './QuestionPalette';
import { ActionFooter } from './ActionFooter';
import { SubmitConfirmModal } from './SubmitConfirmModal';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { MobileDeviceAdvisoryModal } from './MobileDeviceAdvisoryModal';

export const ExamInterface: React.FC = () => {
  const mounted = useIsMounted();

  const {
    exam,
    isExamStarted,
    isExamSubmitted,
    isGatewayOpen,
    isQuestionPaletteOpen,
    setQuestionPaletteOpen,
    tickTimer,
  } = useExamStore();

  // Master 1-second interval ticking the store's timer engine
  useEffect(() => {
    if (!mounted || !isExamStarted || isExamSubmitted || isGatewayOpen) return;

    const interval = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, isExamStarted, isExamSubmitted, isGatewayOpen, tickTimer]);

  if (!mounted) {
    return <ExamSelectionGateway />;
  }

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
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#F1F5F9] font-sans select-none">
      {/* 1. TCS iON Top Header */}
      <ExamHeader />

      {/* 2. Section Navigation Tab Bar */}
      <SectionTabBar />

      {/* 3. Center Workspace: Main Question Viewport (100% on mobile, 75% on desktop) + Permanent Palette Grid on Desktop (Right 25%) */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        <DualPaneQuestionArea />
        <QuestionPalette isMobileDrawer={false} />
      </div>

      {/* 3b. Slide-Over Mobile Question Palette Drawer (Mobile Only) */}
      {isQuestionPaletteOpen && (
        <div className="lg:hidden">
          <QuestionPalette
            isMobileDrawer={true}
            onClose={() => setQuestionPaletteOpen(false)}
          />
        </div>
      )}

      {/* 4. TCS iON Bottom Action Footer */}
      <ActionFooter />

      {/* 5. Submission Confirmation Modal */}
      <SubmitConfirmModal />

      {/* 6. Mobile Device Advisory Modal */}
      <MobileDeviceAdvisoryModal />
    </div>
  );
};
