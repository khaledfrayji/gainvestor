'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loading() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0A2342] z-[9999]">

      {/* Soft Gold Glow Background */}
      <div className="absolute h-72 w-72 rounded-full bg-[#C6A664]/20 blur-3xl"></div>

      {/* Logo */}
      <img
        ref={logoRef}
        src="/l.png"
        alt="Loading Logo"
        className="relative z-10 w-32 h-32 object-contain drop-shadow-[0_0_25px_rgba(198,166,100,0.35)]"
      />

    </div>
  );
}
