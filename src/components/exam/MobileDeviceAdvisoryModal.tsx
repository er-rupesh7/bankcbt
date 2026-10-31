'use client';

import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, CheckCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import { useExamStore } from '@/store/useExamStore';

interface MobileDeviceAdvisoryModalProps {
  onDismiss?: () => void;
  forceShow?: boolean;
}

const STORAGE_KEY = 'bankcbt_mobile_advisory_dismissed';

export const MobileDeviceAdvisoryModal: React.FC<MobileDeviceAdvisoryModalProps> = ({
  onDismiss,
  forceShow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { returnToGateway } = useExamStore();

  useEffect(() => {
    // Only check on client side
    if (typeof window === 'undefined') return;

    const isSmallScreen = window.innerWidth < 1024;
    const isDismissed = sessionStorage.getItem(STORAGE_KEY) === 'true';

    if ((isSmallScreen && !isDismissed) || forceShow) {
      setIsOpen(true);
    }
  }, [forceShow]);

  const handleContinue = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsOpen(false);
    onDismiss?.();
  };

  const handleBackToDashboard = () => {
    setIsOpen(false);
    returnToGateway();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white border-2 border-[#0B4F8A] rounded-xl max-w-md w-[92%] sm:w-full mx-auto p-5 sm:p-6 shadow-2xl text-slate-800 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="advisory-modal-title"
      >
        {/* Header with Monitor + Smartphone Icons */}
        <div className="flex items-center space-x-3 mb-4 border-b border-slate-200 pb-3">
          <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B4F8A] shrink-0 shadow-xs">
            <div className="flex items-center -space-x-1">
              <Monitor className="w-5 h-5 text-[#0B4F8A]" />
              <Smartphone className="w-4 h-4 text-amber-500" />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0B4F8A] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block mb-1">
              Official Examination Advisory
            </span>
            <h2
              id="advisory-modal-title"
              className="text-base sm:text-lg font-bold text-slate-900 leading-snug"
            >
              Desktop / Laptop Recommended for Real CBT Simulation
            </h2>
          </div>
        </div>

        {/* Body Text */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          <p>
            Official <strong>SBI, IBPS, and RRB Computer-Based Tests (CBT)</strong> are conducted on desktop monitors at TCS iON examination centers. For the most authentic two-column exam hall experience, we recommend attempting full-length mocks on a Laptop or Desktop PC.
          </p>
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-lg p-3 text-emerald-900 text-xs flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              However, if you only have a mobile phone right now, we have optimized a dedicated <strong>Mobile Smart-CBT Mode</strong> so you can comfortably read passages, view DI charts, and practice seamlessly on your phone.
            </span>
          </div>
        </div>

        {/* Action Buttons in Modal Footer */}
        <div className="space-y-2.5">
          <button
            onClick={handleContinue}
            className="w-full py-3 px-4 rounded-lg bg-[#0B4F8A] hover:bg-[#083D6B] active:bg-[#062c4e] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>📱 Continue on Mobile (Smart-CBT Mode)</span>
          </button>

          <button
            onClick={handleBackToDashboard}
            className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};
