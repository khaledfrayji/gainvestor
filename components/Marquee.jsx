'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

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
    "Accredited Buyer's Agents",
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
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    if (!marquee || !content) return;

    // Duplicate content twice for seamless wrap
    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    marquee.appendChild(clone1);
    marquee.appendChild(clone2);

    const totalWidth = content.offsetWidth;
    const dir = direction === 'right' ? 1 : -1;

    // GSAP seamless infinite loop
    animationRef.current = gsap.to(marquee.children, {
      xPercent: dir * -100,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
      marquee.innerHTML = '';
      marquee.appendChild(content);
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
      fadeFrom: 'from-[#0A2342]',
      fadeTo: 'to-[#0A2342]',
    },
    gold: {
      bg: 'bg-gradient-to-r from-[#C6A664] via-[#D4B876] to-[#C6A664]',
      text: 'text-[#0A2342]',
      fadeFrom: 'from-[#C6A664]',
      fadeTo: 'to-[#C6A664]',
    },
    minimal: {
      bg: 'bg-white',
      text: 'text-[#0A2342]',
      fadeFrom: 'from-white',
      fadeTo: 'to-white',
    },
    bold: {
      bg: 'bg-[#0A2342]',
      text: 'text-transparent bg-clip-text bg-gradient-to-r from-[#C6A664] via-white to-[#D4B876]',
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
     
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="flex items-center">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className={`px-8 text-4xl font-bold transition-transform duration-300 sm:text-5xl lg:text-6xl xl:text-7xl ${currentVariant.text} ${isPaused ? 'scale-110' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
