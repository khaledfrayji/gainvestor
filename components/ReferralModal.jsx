'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  FiX,
  FiUsers,
  FiShare2,
  FiBriefcase,
  FiCalendar,
  FiGlobe,
  FiMessageSquare,
  FiTrendingUp,
  FiSearch,
  FiYoutube,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi';
import { FaTiktok } from "react-icons/fa6";
const referralOptions = [
  { value: 'google_search', label: 'Google Search', icon: FiSearch },
  { value: 'facebook', label: 'Facebook', icon: FiFacebook },
  { value: 'instagram', label: 'Instagram', icon: FiInstagram },
  { value: 'tiktok', label: 'TikTok', icon: FaTiktok  },
  { value: 'youtube', label: 'YouTube', icon: FiYoutube },
  { value: 'linkedin', label: 'LinkedIn', icon: FiBriefcase },
  { value: 'friends', label: 'Friends & Family', icon: FiUsers },
  { value: 'property_events', label: 'Property Events', icon: FiCalendar },
  { value: 'financial_advisor', label: 'Financial Advisor', icon: FiTrendingUp },
  { value: 'other', label: 'Other', icon: FiGlobe },
];

function setCookie(name, value, days) {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

export default function GainvestorReferralModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show modal after 3s if not already answered
  useEffect(() => {
    const hasSeen = getCookie('gainvestor_referral_seen');
    const source = getCookie('gainvestor_referral_source');

    if (!hasSeen && !source) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (typeof document !== 'undefined') {
          document.body.style.overflow = 'hidden';
        }
      }, 3000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const handleSubmit = async () => {
    if (!selectedOption || isSubmitting) return;
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    setCookie('gainvestor_referral_source', selectedOption, 365);
    setCookie('gainvestor_referral_seen', 'true', 365);

    setIsSubmitting(false);
    closeModal();
  };

  const handleSkip = () => {
    setCookie('gainvestor_referral_seen', 'true', 30); // show again after 30 days
    closeModal();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-3 sm:px-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-[#C6A664]/30 bg-gradient-to-br from-[#0A2342] to-[#0d2d54] shadow-2xl shadow-[#C6A664]/20 p-4 sm:p-6 animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close */}
        <button
          onClick={handleSkip}
          className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close referral modal"
        >
          <FiX className="h-6 w-6" />
        </button>

        {/* Logo + title */}
        <div className="mt-2 flex flex-col items-center text-center">
          <div className="mb-4 sm:mb-5 flex items-center justify-center">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-[#C6A664]/30">
              <Image
                src="/l.png"
                alt="Gainvestor Logo"
                width={64}
                height={64}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                priority
              />
            </div>
          </div>

          <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-white">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              Gainvestor
            </span>
          </h2>
          <p className="px-3 text-sm sm:text-base text-white/70">
            Help us serve you better by telling us how you found us.
          </p>
        </div>

        {/* Options */}
        <div className="mt-5 sm:mt-6">
          <div className="max-h-[300px] sm:max-h-[350px] space-y-2 sm:space-y-2.5 overflow-y-auto pr-1">
            {referralOptions.map((option) => {
              const Icon = option.icon;
              const isActive = selectedOption === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedOption(option.value)}
                  className={[
                    'flex w-full items-center gap-3 rounded-xl border p-3 text-left sm:p-3.5 transition-all duration-200',
                    isActive
                      ? 'border-[#C6A664] bg-[#C6A664]/10 text-[#C6A664] shadow-lg shadow-[#C6A664]/20'
                      : 'border-white/10 text-white/80 hover:border-[#C6A664]/60 hover:bg-white/5',
                  ].join(' ')}
                >
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex-shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="truncate text-sm sm:text-base font-medium">
                      {option.label}
                    </span>
                  </div>
                  {isActive && (
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0 rounded-full bg-[#C6A664] animate-pulse shadow-lg shadow-[#C6A664]/60" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleSkip}
              className="order-2 sm:order-1 w-full sm:flex-1 rounded-xl border border-white/20 px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white/70 hover:border-white/40 hover:bg-white/5 hover:text-white transition-all"
            >
              Skip for now
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!selectedOption || isSubmitting}
              className="order-1 sm:order-2 w-full sm:flex-1 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-4 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#0A2342] shadow-lg shadow-[#C6A664]/30 hover:from-[#D4B876] hover:to-[#C6A664] hover:shadow-[#C6A664]/50 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-[#0A2342]/40 border-t-[#0A2342] animate-spin" />
                  <span>Saving...</span>
                </span>
              ) : (
                'Continue'
              )}
            </button>
          </div>

          <p className="mt-4 sm:mt-5 px-2 text-center text-xs sm:text-sm text-white/50">
            Your feedback helps us understand our community and improve our property investment services.
          </p>
        </div>
      </div>
    </div>
  );
}
