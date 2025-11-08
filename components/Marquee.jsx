'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Professional Marquee Component
 * 
 * @param {string} variant - 'default' | 'gold' | 'minimal' | 'bold'
 * @param {number} speed - Animation duration in seconds (lower = faster)
 * @param {boolean} pauseOnHover - Whether to pause on hover
 * @param {string} direction - 'left' | 'right'
 */

export default function Marquee({ 
  variant = 'default', 
  speed = 50,
  pauseOnHover = false,
  direction = 'left'
}) {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = [
    'Investment Properties',
    'Accredited Buyer\'s Agents',
    'Wealth Creation',
    'Property Portfolio',
    'Strategic Acquisition',
    'Market Analysis',
    'Real Estate Investment',
    'Financial Freedom',
    'Expert Guidance',
    'Property Research',
    'Portfolio Growth',
    'Smart Investing',
    'Capital Growth',
    'Passive Income',
    'Property Due Diligence',
    'Investment Strategy',
  ];

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Duplicate content for seamless loop
    const contentWidth = content.offsetWidth;
    const clone = content.cloneNode(true);
    marqueeRef.current.appendChild(clone);

    // Direction multiplier
    const directionMultiplier = direction === 'right' ? 1 : -1;

    // GSAP infinite scroll animation
    animationRef.current = gsap.to([content, clone], {
      x: directionMultiplier * contentWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
      }
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [speed, direction]);

  const handleMouseEnter = () => {
    if (pauseOnHover && animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 1,
        duration: 0.5,
        ease: 'power2.in'
      });
      setIsPaused(false);
    }
  };

  // Variant styles
  const variants = {
    default: {
      bg: 'bg-[#0A2342]',
      text: 'text-white',
      dot: 'bg-[#C6A664]',
      fadeFrom: 'from-[#0A2342]',
      fadeTo: 'to-[#0A2342]',
    },
    gold: {
      bg: 'bg-gradient-to-r from-[#C6A664] via-[#D4B876] to-[#C6A664]',
      text: 'text-[#0A2342]',
      dot: 'bg-[#0A2342]',
      fadeFrom: 'from-[#C6A664]',
      fadeTo: 'to-[#C6A664]',
    },
    minimal: {
      bg: 'bg-white',
      text: 'text-[#0A2342]',
      dot: 'bg-[#C6A664]',
      fadeFrom: 'from-white',
      fadeTo: 'to-white',
    },
    bold: {
      bg: 'bg-[#0A2342]',
      text: 'text-transparent bg-clip-text bg-gradient-to-r from-[#C6A664] via-white to-[#D4B876]',
      dot: 'bg-gradient-to-r from-[#C6A664] to-[#D4B876]',
      fadeFrom: 'from-[#0A2342]',
      fadeTo: 'to-[#0A2342]',
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div 
      className={`relative w-full overflow-hidden ${currentVariant.bg} py-12 transition-all duration-500 sm:py-16 lg:py-20`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlays for fade effect */}
      <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r ${currentVariant.fadeFrom} to-transparent`} />
      <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l ${currentVariant.fadeTo} to-transparent`} />

      {/* Pause indicator */}
      {pauseOnHover && isPaused && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 px-6 py-3 backdrop-blur-sm">
          <span className="text-sm font-semibold text-white">Paused</span>
        </div>
      )}

      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="flex items-center">
          {marqueeItems.map((item, index) => (
            <div key={index} className="inline-flex items-center">
              <span className={`px-8 text-4xl font-bold transition-all duration-300 sm:text-5xl lg:text-6xl xl:text-7xl ${currentVariant.text} ${isPaused ? 'scale-110' : ''}`}>
                {item}
              </span>
              <div className={`mx-8 h-3 w-3 rounded-full ${currentVariant.dot} transition-all duration-300 ${isPaused ? 'scale-150' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}