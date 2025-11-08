'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiCalendar } from 'react-icons/fi';

export default function BookingButton() {
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !buttonRef.current) return;

    // Smooth entrance animation
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [isVisible]);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  if (!isVisible) return null;

  return (
    <a
      ref={buttonRef}
      href="https://calendly.com/ozgainvestor/welcome-call"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-6 py-4 font-semibold text-[#0A2342] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#C6A664]/30 sm:bottom-8 sm:right-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Book a call"
    >
      <FiCalendar className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="hidden text-sm sm:inline sm:text-base">Book a Call</span>
    </a>
  );
}