'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiCalendar } from 'react-icons/fi';

export default function BookingButton() {
  const buttonRef = useRef(null);
  const labelRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !buttonRef.current) return;

    // Entrance animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    // Pulse ring animation
    if (ringRef.current) {
      gsap.fromTo(
        ringRef.current,
        { opacity: 0.25, scale: 1 },
        {
          opacity: 0,
          scale: 1.4,
          duration: 1.8,
          ease: 'power1.out',
          repeat: -1,
        }
      );
    }
  }, [isVisible]);

  const showLabel = () => {
    if (!labelRef.current) return;
    gsap.killTweensOf(labelRef.current);
    gsap.fromTo(
      labelRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out', display: 'block' }
    );
  };

  const hideLabel = () => {
    if (!labelRef.current) return;
    gsap.killTweensOf(labelRef.current);
    gsap.to(labelRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => (labelRef.current.style.display = 'none'),
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8 flex flex-col items-center">
      {/* Hover label above button */}
      <div
        ref={labelRef}
        className="mb-2 hidden rounded-full bg-[#0A2342] px-3 py-2 text-xs font-medium text-white shadow-lg whitespace-nowrap pointer-events-none"
        style={{ opacity: 0 }}
      >
        Book a Call
      </div>

      {/* Button with pulse ring */}
      <div className="relative">
        <span
          ref={ringRef}
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: '0 0 0 0.25rem rgba(198,166,100,0.25)',
          }}
        />
        <a
          ref={buttonRef}
          href="https://calendly.com/ozgainvestor/welcome-call"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] p-4 sm:p-5 text-[#0A2342] shadow-xl hover:shadow-2xl hover:shadow-[#C6A664]/30 transition-shadow duration-300"
          aria-label="Book a call"
          onMouseEnter={showLabel}
          onMouseLeave={hideLabel}
          onTouchStart={showLabel}
          onTouchEnd={hideLabel}
        >
          <FiCalendar className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
