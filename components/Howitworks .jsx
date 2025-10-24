'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCompass, FiKey, FiTrendingUp } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        const headingElements = headingRef.current.children;
        if (headingElements.length > 0) {
          gsap.from(headingElements, {
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all',
          });
        }
      }

      // Steps animation
      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll('.step-card');
        if (steps.length > 0) {
          gsap.from(steps, {
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            clearProps: 'all',
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      icon: FiCompass,
      title: 'Discover your path',
      description:
        'We start with a conversation about your goals, timeline, and comfort level. No cookie-cutter plans, just a strategy built around your life.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      number: '02',
      icon: FiKey,
      title: 'Find your property',
      description:
        'Our team searches, analyzes, and presents opportunities that match your criteria. We handle the research so you can make confident decisions.',
      color: 'from-[#C6A664] to-[#D4B876]',
    },
    {
      number: '03',
      icon: FiTrendingUp,
      title: 'Watch it grow',
      description:
        'From purchase to profit, we stay with you. Track performance, get insights, and plan your next move, all with ongoing expert support.',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A2342] px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 text-center lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <span>Process</span>
          </div>
          
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your investment journey{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text italic text-transparent">
                simplified
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#C6A664]/20 blur-sm" />
            </span>
            <br />
            in three steps
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            From first conversation to growing portfolio, we guide you through every
            stage with clarity and confidence.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={stepsRef} className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="step-card group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#C6A664]/30 hover:shadow-2xl lg:p-10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Number indicator */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-6xl font-bold text-white/10 transition-colors duration-500 group-hover:text-[#C6A664]/20">
                      {step.number}
                    </span>
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white/70 lg:text-lg">
                    {step.description}
                  </p>

                  {/* Arrow indicator for next step */}
                  {index < steps.length - 1 && (
                    <div className="mt-8 hidden lg:block">
                      <div className="flex items-center gap-2 text-sm text-[#C6A664]/60">
                        <span>Next</span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="inline-flex flex-col items-center gap-4 sm:flex-row">
            <p className="text-lg text-white/70">Ready to get started?</p>
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-lg shadow-[#C6A664]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C6A664]/30"
            >
              <span className="relative z-10">Schedule Your Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}