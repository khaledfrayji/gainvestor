'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCheckCircle, FiTrendingUp, FiShield } from 'react-icons/fi';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate trust badge
      tl.from(statsRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
      });

      // Animate headline with split text effect
      const headlineWords = headlineRef.current.querySelectorAll('.word');
      tl.from(
        headlineWords,
        {
          y: 50,
          opacity: 0,
          rotationX: -90,
          transformOrigin: 'top center',
          duration: 0.8,
          stagger: 0.08,
        },
        '-=0.5'
      );

      // Animate subtext
      tl.from(
        subtextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.4'
      );

      // Animate CTA buttons
      tl.from(
        ctaRef.current.children,
        {
          y: 30,
          opacity: 0,
          duration: 0,
          stagger: 0.15,
        },
        '-=0.4'
      );

      // Floating animation for decorative elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: index % 2 === 0 ? -20 : 20,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }
      });

      // Scroll-triggered parallax effect
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        opacity: 0.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into words for animation
  const SplitText = ({ children, className }) => {
    const words = children.split(' ');
    return (
      <span className={className}>
        {words.map((word, i) => (
          <span key={i} className="word inline-block" style={{ whiteSpace: 'pre' }}>
            {word}{' '}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen   flex-col items-center justify-center overflow-hidden bg-[#0A2342] px-4 py-20 text-center text-white sm:px-6 lg:px-8"
    >
      {/* Background Video with overlay */}
<div className="absolute inset-0 overflow-hidden">
  <video
    src="/video.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover opacity-10"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
</div>

    

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Trust indicators */}
        <div
          ref={statsRef}
          className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
       
       
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <SplitText>Ready to</SplitText>
          <span className="relative mx-2 inline-block">
            <span className="word relative z-10 bg-gradient-to-r from-[#C6A664] via-[#D4B876] to-[#C6A664] bg-clip-text font-bold italic text-transparent">
              grow
            </span>
            <span className="absolute -bottom-1 left-0 h-3 w-full bg-[#C6A664]/20 blur-sm" />
          </span>
          <SplitText>your wealth</SplitText>
          <br className="hidden sm:block" />
          <SplitText>through smart property</SplitText>
          <br className="hidden sm:block" />
          <SplitText>investments?</SplitText>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:mt-8 md:text-xl"
        >
          At{' '}
          <span className="font-semibold text-white">Gainvestor</span>, we help you
          discover premium opportunities, build a diversified portfolio, and achieve
          financial freedom with guidance from trusted industry experts.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="relative z-210 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12">
          <a
            href="https://calendly.com/ozgainvestor/welcome-call"
            className="group relative overflow-hidden rounded-xl bg-linear-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-lg shadow-[#C6A664]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C6A664]/30 sm:px-10"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="/learnhowitworks"
            className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10 sm:px-10"
          >
            <span className="relative z-10">Learn How It Works</span>
          </a>
        </div>

     
      </div>
    </section>
  );
}
