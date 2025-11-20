'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiMessageSquare,
  FiSearch,
  FiFileText,
  FiEye,
  FiDollarSign,
  FiCheckCircle,
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

/**
 * LearnHowItWorks Component
 * Enterprise-level process showcase with advanced GSAP animations
 * 
 * Features:
 * - Character-by-character text reveals
 * - Scroll-linked animations with scrub
 * - Parallax effects on background elements
 * - Staggered card animations
 * - Timeline connector with progressive reveal
 * - Magnetic hover effects
 * 
 * @component
 */
export default function LearnHowItWorks() {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const timelineRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Ensure content is visible initially (fallback if GSAP doesn't load)
    const benefitItems = document.querySelectorAll('.benefit-item');
    const benefitsTitle = document.querySelector('.benefits-title');
    
    // Set initial visibility for accessibility
    if (benefitItems.length === 0 && benefitsTitle) {
      console.warn('Benefit items not found in DOM');
    }

    const ctx = gsap.context(() => {
      // Set GSAP defaults for consistent easing and performance
      gsap.defaults({
        ease: 'power3.out',
        duration: 1,
      });

      /* ========================================
         HEADER SECTION ANIMATIONS
         ======================================== */
      
      // Badge entrance with elastic bounce
      gsap.from('.header-badge', {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      // Title character-by-character reveal
      if (titleRef.current) {
        const titleText = titleRef.current.textContent;
        const chars = titleText.split('');
        titleRef.current.innerHTML = '';
        
        chars.forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.display = 'inline-block';
          span.className = 'title-char';
          titleRef.current.appendChild(span);
        });

        gsap.from('.title-char', {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 50,
          rotationX: -90,
          transformOrigin: '0% 50% -50',
          duration: 0.8,
          stagger: {
            amount: 0.8,
            from: 'start',
          },
          ease: 'back.out(1.7)',
        });
      }

      // Subtitle fade with slide
      gsap.from('.header-subtitle', {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
      });

      /* ========================================
         PARALLAX BACKGROUND EFFECTS
         ======================================== */
      
      gsap.utils.toArray('.parallax-orb').forEach((orb, index) => {
        gsap.to(orb, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: index % 2 === 0 ? -150 : -100,
          x: index % 2 === 0 ? 50 : -50,
          rotation: index * 90,
          ease: 'none',
        });
      });

      /* ========================================
         TIMELINE CONNECTOR ANIMATION
         ======================================== */
      
      if (timelineRef.current) {
        const timelinePath = timelineRef.current.querySelector('.timeline-path');
        
        if (timelinePath) {
          gsap.fromTo(
            timelinePath,
            {
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
            },
            {
              scrollTrigger: {
                trigger: stepsContainerRef.current,
                start: 'top 70%',
                end: 'bottom 30%',
                scrub: 1,
              },
              strokeDashoffset: 0,
              ease: 'none',
            }
          );
        }
      }

      /* ========================================
         STEP CARDS STAGGERED ANIMATION
         ======================================== */
      
      const stepCards = gsap.utils.toArray('.step-card');
      
      stepCards.forEach((card, index) => {
        // Card entrance
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power3.out',
        });

        // Step number animation
        const stepNumber = card.querySelector('.step-number');
        if (stepNumber) {
          gsap.from(stepNumber, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            scale: 0,
            rotation: -180,
            duration: 0.8,
            ease: 'back.out(2)',
          });
        }

        // Icon animation
        const icon = card.querySelector('.step-icon');
        if (icon) {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            scale: 0,
            rotation: 180,
            duration: 0.8,
            delay: 0.2,
            ease: 'back.out(2)',
          });
        }

        // Detail items stagger
        const detailItems = card.querySelectorAll('.detail-item');
        gsap.from(detailItems, {
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          x: -20,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
        });

        // Scroll-linked scale effect
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          },
          scale: 1.02,
          ease: 'none',
        });
      });

      /* ========================================
         BENEFITS SECTION ANIMATION
         ======================================== */
      
      if (benefitsRef.current) {
        // Section title
        const benefitsTitle = benefitsRef.current.querySelector('.benefits-title');
        if (benefitsTitle) {
          gsap.set(benefitsTitle, { opacity: 0, y: 40 });
          gsap.to(benefitsTitle, {
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
        }

        // Benefit items with wave effect
        const benefitItems = gsap.utils.toArray('.benefit-item');
        if (benefitItems.length > 0) {
          gsap.set(benefitItems, { opacity: 0, x: -30 });
          gsap.to(benefitItems, {
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: 'start',
              ease: 'power2.inOut',
            },
            ease: 'power3.out',
          });
        }
      }

      /* ========================================
         CTA SECTION ANIMATION
         ======================================== */
      
      if (ctaRef.current) {
        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        });

        ctaTl
          .from('.cta-card', {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
          })
          .from('.cta-title', {
            opacity: 0,
            y: 30,
            duration: 0.6,
          }, '-=0.4')
          .from('.cta-description', {
            opacity: 0,
            y: 20,
            duration: 0.6,
          }, '-=0.3')
          .from('.cta-button', {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
          }, '-=0.2')
          .from('.cta-note', {
            opacity: 0,
            duration: 0.4,
          }, '-=0.2');
      }

      /* ========================================
         MAGNETIC HOVER EFFECTS (Desktop only)
         ======================================== */
      
      if (window.innerWidth > 1024) {
        const cards = gsap.utils.toArray('.step-card');
        
        cards.forEach((card) => {
          const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            gsap.to(card, {
              rotationY: deltaX * 5,
              rotationX: -deltaY * 5,
              transformPerspective: 1000,
              duration: 0.5,
              ease: 'power2.out',
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotationY: 0,
              rotationX: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          };

          card.addEventListener('mousemove', handleMouseMove);
          card.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        });
      }

    }, sectionRef);

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Step data configuration
  const steps = [
    {
      number: '01',
      icon: FiMessageSquare,
      title: 'Initial Consultation & Strategy',
      description: 'We begin with an in-depth consultation to understand your financial goals, investment capacity, risk tolerance, and timeline. This foundation shapes your entire investment strategy.',
      details: [
        'Comprehensive financial assessment',
        'Investment goals clarification',
        'Risk profile evaluation',
        'Timeline and milestone setting',
      ],
    },
    {
      number: '02',
      icon: FiSearch,
      title: 'Market Research & Property Sourcing',
      description: 'Our analysts research hundreds of markets across Australia, identifying high-growth suburbs with strong fundamentals. We source properties that align with your investment criteria.',
      details: [
        'National market analysis',
        'Growth suburb identification',
        'Off-market property access',
        'Opportunity shortlisting',
      ],
    },
    {
      number: '03',
      icon: FiFileText,
      title: 'Due Diligence & Analysis',
      description: 'Every property undergoes rigorous analysis including rental yield projections, capital growth forecasts, depreciation schedules, and comprehensive risk assessment.',
      details: [
        'Rental yield calculations',
        'Capital growth forecasting',
        'Depreciation analysis',
        'Comprehensive risk assessment',
      ],
    },
    {
      number: '04',
      icon: FiEye,
      title: 'Property Presentation & Selection',
      description: 'We present curated opportunities with detailed reports covering all investment metrics. You make informed decisions backed by professional analysis and expert guidance.',
      details: [
        'Detailed property reports',
        'Investment metric breakdowns',
        'Comparative analysis',
        'Expert recommendations',
      ],
    },
    {
      number: '05',
      icon: FiDollarSign,
      title: 'Finance & Negotiation',
      description: 'Our finance partners structure optimal lending solutions while we negotiate on your behalf to secure the best possible price and contract terms.',
      details: [
        'Optimal loan structuring',
        'Pre-approval assistance',
        'Price negotiation',
        'Contract term optimization',
      ],
    },
    {
      number: '06',
      icon: FiCheckCircle,
      title: 'Settlement & Portfolio Growth',
      description: 'We manage the entire settlement process and set up property management. Then we help you plan the next investment to continue building your portfolio.',
      details: [
        'Settlement coordination',
        'Property management setup',
        'Portfolio performance tracking',
        'Future growth planning',
      ],
    },
  ];

  const benefits = [
    'Personalized investment strategy tailored to your goals',
    'Access to off-market and pre-market opportunities',
    'Professional negotiation saves thousands on every purchase',
    'Complete due diligence removes investment risk',
    'Ongoing portfolio management and growth planning',
    'Tax optimization strategies to maximize returns',
    'Expert team handling every detail from start to finish',
    'Data-driven decisions backed by market research',
  ];

  return (
    <>
      <style jsx>{`
        /* Ensure content is visible by default (progressive enhancement) */
        .benefit-item,
        .benefits-title {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        /* Prevent flash of unstyled content */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Animated parallax background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="parallax-orb absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
        <div className="parallax-orb absolute -right-40 top-1/2 h-[32rem] w-[32rem] rounded-full bg-[#0A2342]/5 blur-3xl" />
        <div className="parallax-orb absolute left-1/2 bottom-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C6A664]/10 blur-3xl" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================
            HEADER SECTION
            ======================================== */}
        <div ref={headerRef} className="mb-20 text-center lg:mb-28">
          {/* Animated badge */}
          <div className="header-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
            <FiTrendingUp className="h-4 w-4" />
            <span>Our Process</span>
          </div>

          {/* Main title with character animation */}
          <h2
            ref={titleRef}
            className="mx-auto mb-8 max-w-5xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-7xl"
          >
            From first conversation to portfolio growth
          </h2>

          {/* Subtitle */}
          <p className="header-subtitle mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            A proven, systematic approach to building wealth through strategic property investment. We handle every detail while you focus on your financial future.
          </p>
        </div>

        {/* ========================================
            STEPS TIMELINE
            ======================================== */}
        <div ref={stepsContainerRef} className="relative mb-20 lg:mb-28">
          {/* Animated timeline connector - Desktop only */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 1 100"
              fill="none"
            >
              <path
                className="timeline-path"
                d="M 0.5 0 L 0.5 100"
                stroke="url(#timeline-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <defs>
                <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C6A664" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#C6A664" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#C6A664" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps grid */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`step-card relative flex flex-col items-center gap-8 lg:flex-row ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-[calc(50%-3rem)]">
                    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:border-[#C6A664]/30 hover:shadow-2xl lg:p-10">
                      {/* Gradient overlay on hover */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        {/* Icon with animation */}
                        <div className="step-icon mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#C6A664] to-[#D4B876] p-4 text-white shadow-lg">
                          <Icon className="h-8 w-8" />
                        </div>

                        {/* Title */}
                        <h3 className="mb-4 text-2xl font-bold text-[#0A2342] lg:text-3xl">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-6 text-base leading-relaxed text-gray-600 lg:text-lg">
                          {step.description}
                        </p>

                        {/* Details list with stagger animation */}
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="detail-item flex items-start gap-3">
                              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C6A664]/10">
                                <svg
                                  className="h-3 w-3 text-[#C6A664]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-sm font-medium text-gray-700 lg:text-base">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Corner accent decoration */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#C6A664] to-[#D4B876] opacity-5 transition-opacity duration-500 group-hover:opacity-10" />
                    </div>
                  </div>

                  {/* Center step number with animation */}
                  <div className="relative z-20 flex h-24 w-24 flex-shrink-0 items-center justify-center lg:h-28 lg:w-28">
                    <div className="step-number absolute inset-0 rounded-full bg-gradient-to-br from-[#0A2342] to-[#0d2d54] shadow-2xl" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C6A664] to-[#D4B876] opacity-20" />
                    <span className="relative z-10 text-3xl font-bold text-white lg:text-4xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Spacer for opposite side - Desktop only */}
                  <div className="hidden w-[calc(50%-3rem)] lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================
            BENEFITS SECTION
            ======================================== */}
        <div
          ref={benefitsRef}
          className="mb-20 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg lg:mb-28 lg:p-16"
        >
          <div className="mb-12 text-center">
            <h3 className="benefits-title mb-4 text-3xl font-bold text-[#0A2342] sm:text-4xl lg:text-5xl">
              Why This Process{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                Works
              </span>
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A systematic approach designed to maximize returns while minimizing risk
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C6A664] to-[#D4B876]">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="flex-1 text-base font-medium leading-relaxed text-gray-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================
            CTA SECTION
            ======================================== */}
        <div ref={ctaRef} className="text-center">
          <div className="cta-card inline-flex flex-col items-center gap-6 rounded-3xl border border-[#C6A664]/20 bg-gradient-to-br from-[#0A2342] to-[#0d2d54] p-10 shadow-2xl lg:p-16">
            <div>
              <h3 className="cta-title mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                  Investment Journey?
                </span>
              </h3>
              <p className="cta-description mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
                Book your free strategy call today and discover how we can help you build wealth through strategic property investment.
              </p>
            </div>

            <a
              href="https://calendly.com/ozgainvestor/welcome-call"
              className="cta-button group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Schedule Your Free Consultation</span>
              <FiArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <p className="cta-note text-sm text-white/60">
              No obligations • Personalized strategy • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}