'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiTrendingUp } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function WelcomePage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({ ease: 'power3.out', duration: 1 });

      // HERO TITLE ANIMATION (per character)
      if (titleRef.current) {
        const text = titleRef.current.textContent || '';
        const words = text.split(' ');
        titleRef.current.innerHTML = '';

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span');
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'pre';

          word.split('').forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.style.display = 'inline-block';
            charSpan.className = 'title-char';
            wordSpan.appendChild(charSpan);
          });

          titleRef.current.appendChild(wordSpan);
          if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.innerHTML = '&nbsp;';
            titleRef.current.appendChild(space);
          }
        });

        gsap.from('.title-char', {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: '0% 50% -50',
          duration: 1,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
      }

      // SUBTITLE ANIMATION
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 50,
          delay: 1,
          ease: 'power2.out',
        });
      }

      // CTA BUTTON ANIMATION
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          delay: 1.4,
          ease: 'back.out(1.7)',
        });
      }

      // PARALLAX ORBS
      gsap.utils.toArray('.parallax-orb').forEach((orb, index) => {
        gsap.to(orb, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
          y: index % 2 === 0 ? -150 : -100,
          x: index % 2 === 0 ? 50 : -50,
          rotation: index * 60,
          ease: 'none',
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className=" bg-[#0A2342]">
    

      {/* HERO SECTION */}
      <section className="relative px-4 pt-28  pb-40 sm:px-6 lg:px-8 ">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
            <FiTrendingUp className="h-4 w-4" />
            <span>Your Investment Journey Starts Here</span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="mx-auto mb-8 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ perspective: '1000px' }}
          >
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              Welcome to Your Financial Future
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl"
          >
            At Gain Investor Property Group, we help you build real wealth through strategic property investment.
          </p>

          {/* GOLD CONTACT BUTTON */}
          <a
            ref={ctaRef}
            href="/getstarted"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto mt-12 inline-flex items-center justify-center gap-2 overflow-hidden 
                       rounded-xl bg-gradient-to-r from-[#D4B876] via-[#E6C980] to-[#C6A664] 
                       px-12 py-5 text-lg font-bold text-[#0A2342]
                       shadow-[0_0_25px_rgba(214,184,118,0.45)]
                       transition-all duration-300 hover:scale-105 
                       hover:shadow-[0_0_45px_rgba(214,184,118,0.7)]"
          >
            <span className="relative z-10">Contact Us</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0A2342"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>

          </a>
        </div>
      </section>
    </div>
  );
}
