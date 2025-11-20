'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiTrendingUp, 
  FiDollarSign, 
  FiMapPin,
  FiShield,
  FiUsers,
  FiFileText,
  FiArrowRight
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

/**
 * GetStarted Component
 * Enterprise-level section with advanced GSAP animations
 * 
 * Features:
 * - Character-by-character text reveals
 * - Scroll-linked parallax effects
 * - Smooth card animations with scrub
 * - 3D tilt effects on hover
 * - Progressive content reveals
 * - Optimized performance
 * 
 * @component
 */
export default function GetStarted() {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const reasonsRef = useRef(null);
  const helpSectionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      // Set GSAP defaults
      gsap.defaults({
        ease: 'power3.out',
        duration: 1,
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
            scrub: prefersReducedMotion ? 0 : 1.5,
          },
          y: index % 2 === 0 ? -120 : -80,
          x: index % 2 === 0 ? 40 : -40,
          rotation: index * 45,
          ease: 'none',
        });
      });

      /* ========================================
         BADGE ANIMATION
         ======================================== */
      
      gsap.from('.section-badge', {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        scale: 0,
        opacity: 0,
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'back.out(1.7)',
      });

      /* ========================================
         TITLE CHARACTER-BY-CHARACTER REVEAL
         ======================================== */
      
      if (titleRef.current && !prefersReducedMotion) {
        // Split title into words and characters
        const titleText = titleRef.current.textContent;
        const words = titleText.split(' ');
        titleRef.current.innerHTML = '';
        
        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span');
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'pre';
          wordSpan.className = 'title-word';
          
          const chars = word.split('');
          chars.forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.style.display = 'inline-block';
            charSpan.className = 'title-char';
            wordSpan.appendChild(charSpan);
          });
          
          // Add space after word (except last word)
          if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.innerHTML = '&nbsp;';
            space.style.display = 'inline-block';
            titleRef.current.appendChild(wordSpan);
            titleRef.current.appendChild(space);
          } else {
            titleRef.current.appendChild(wordSpan);
          }
        });

        // Animate characters
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
            amount: 1,
            from: 'start',
          },
          ease: 'back.out(1.7)',
        });
      }

      /* ========================================
         SUBTITLE ANIMATION
         ======================================== */
      
      if (subtitleRef.current) {
        // Split into sentences for better animation
        const sentences = subtitleRef.current.innerText.split('. ');
        subtitleRef.current.innerHTML = '';
        
        sentences.forEach((sentence, index) => {
          const sentenceSpan = document.createElement('span');
          sentenceSpan.textContent = sentence + (index < sentences.length - 1 ? '. ' : '');
          sentenceSpan.style.display = 'inline';
          sentenceSpan.className = 'subtitle-sentence';
          subtitleRef.current.appendChild(sentenceSpan);
        });

        gsap.from('.subtitle-sentence', {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: prefersReducedMotion ? 0.01 : 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        });
      }

      /* ========================================
         REASON CARDS WITH SCROLL SCRUB
         ======================================== */
      
      if (reasonsRef.current) {
        const cards = gsap.utils.toArray('.reason-card');
        
        cards.forEach((card, index) => {
          // Entrance animation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
            opacity: 0,
            y: 80,
            rotation: prefersReducedMotion ? 0 : -5,
            duration: prefersReducedMotion ? 0.01 : 1,
            ease: 'power3.out',
          });

          // Scroll-linked scale effect
          if (!prefersReducedMotion) {
            gsap.to(card, {
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                end: 'top 20%',
                scrub: 1,
              },
              scale: 1.02,
              ease: 'none',
            });
          }

          // Icon animation
          const icon = card.querySelector('.reason-icon');
          if (icon) {
            gsap.from(icon, {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
              scale: 0,
              rotation: prefersReducedMotion ? 0 : 180,
              duration: prefersReducedMotion ? 0.01 : 0.8,
              delay: 0.2,
              ease: 'back.out(2)',
            });
          }
        });

        /* ========================================
           3D TILT EFFECT ON HOVER (Desktop only)
           ======================================== */
        
        if (!prefersReducedMotion && window.innerWidth > 1024) {
          cards.forEach((card) => {
            const handleMouseMove = (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = (y - centerY) / 20;
              const rotateY = (centerX - x) / 20;

              gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                duration: 0.5,
                ease: 'power2.out',
              });
            };

            const handleMouseLeave = () => {
              gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out',
              });
            };

            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
          });
        }
      }

      /* ========================================
         HOW WE HELP SECTION
         ======================================== */
      
      if (helpSectionRef.current) {
        // Section title
        const helpTitle = helpSectionRef.current.querySelector('.help-title');
        if (helpTitle) {
          gsap.from(helpTitle, {
            scrollTrigger: {
              trigger: helpSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
              once: true,
            },
            opacity: 0,
            scale: 0.9,
            duration: prefersReducedMotion ? 0.01 : 0.8,
            ease: 'back.out(1.7)',
          });
        }

        // Help items with wave effect
        const helpItems = gsap.utils.toArray('.help-item');
        gsap.from(helpItems, {
          scrollTrigger: {
            trigger: helpSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          x: -30,
          duration: prefersReducedMotion ? 0.01 : 0.6,
          stagger: {
            amount: 0.8,
            from: 'start',
          },
          ease: 'power2.out',
        });
      }

      /* ========================================
         CTA SECTION SEQUENTIAL ANIMATION
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
            scale: 0.95,
            duration: prefersReducedMotion ? 0.01 : 0.8,
            ease: 'back.out(1.7)',
          })
          .from('.cta-title', {
            opacity: 0,
            y: 30,
            duration: prefersReducedMotion ? 0.01 : 0.6,
            ease: 'power2.out',
          }, '-=0.4')
          .from('.cta-description', {
            opacity: 0,
            y: 20,
            duration: prefersReducedMotion ? 0.01 : 0.6,
            ease: 'power2.out',
          }, '-=0.3')
          .from('.cta-button', {
            opacity: 0,
            scale: 0.9,
            duration: prefersReducedMotion ? 0.01 : 0.5,
            ease: 'back.out(2)',
          }, '-=0.2')
          .from('.cta-note', {
            opacity: 0,
            duration: prefersReducedMotion ? 0.01 : 0.4,
          }, '-=0.2');
      }

    }, sectionRef);

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const reasons = [
    {
      icon: FiTrendingUp,
      title: 'Pure Investment Focus',
      description: 'We specialize exclusively in investment properties designed to maximize capital growth, cash flow, and equity creation. Every property is selected to build your wealth faster and safer.',
    },
    {
      icon: FiMapPin,
      title: 'National Property Sourcing',
      description: 'Access properties across Victoria, Queensland, NSW, WA and more. We focus on suburbs with strong population growth, tight vacancy rates, and high rental demand.',
    },
    {
      icon: FiDollarSign,
      title: 'Smart Tax Advantages',
      description: 'Legally optimize the tax system through depreciation benefits, negative gearing, and strategic structuring. Put more money back in your pocket to reinvest faster.',
    },
    {
      icon: FiFileText,
      title: 'Full Strategy & Planning',
      description: 'Before sourcing properties, we create your personalized investment roadmap covering net worth goals, portfolio size, timeline, and suburb selection.',
    },
    {
      icon: FiUsers,
      title: 'Expert Team Support',
      description: 'Backed by investment specialists, property analysts, finance partners, solicitors, property managers, and builder networks working to secure your best deals.',
    },
    {
      icon: FiShield,
      title: 'End-to-End Guidance',
      description: 'From your first property to building a full portfolio, we analyze markets, negotiate deals, and guide you step-by-step through every purchase.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#C6A664]/10  px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Animated parallax background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="parallax-orb absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
        <div className="parallax-orb absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0A2342]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================
            SECTION HEADING
            ======================================== */}
        <div ref={headingRef} className="mb-16 text-center lg:mb-20">
          {/* Animated badge */}
          <div className="section-badge mb-6 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiTrendingUp className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          
          {/* Title with character animation */}
          <h2
            ref={titleRef}
            className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#f2f2f2] sm:text-5xl lg:text-6xl"
          >
            Your partner in building wealth through smart property investment
          </h2>
          
          {/* Subtitle with sentence animation */}
          <p
            ref={subtitleRef}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            At Gain Investor Property Group, we exist for one mission — to help everyday Australians build real wealth through strategic property investing. We don't sell homes. We secure high-performing investment properties that grow your wealth, expand your portfolio, and help you reach the financial future you want.
          </p>
        </div>

        {/* ========================================
            REASONS GRID
            ======================================== */}
        <div ref={reasonsRef} className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:mb-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="reason-card group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  {/* Icon with animation */}
                  <div className="reason-icon mb-6 inline-flex rounded-2xl bg-[#C6A664]/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C6A664]/20">
                    <Icon className="h-8 w-8 text-[#C6A664]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================
            HOW WE HELP SECTION
            ======================================== */}
        <div ref={helpSectionRef} className="mb-20 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
          <h3 className="help-title mb-8 text-center text-3xl font-bold text-[#0A2342] sm:text-4xl">
            How We Help You Win
          </h3>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Analyze hundreds of markets so you don\'t have to',
              'Negotiate directly with developers, builders, and agents',
              'Secure properties that create equity, cash flow, and tax benefits',
              'Guide you step-by-step through the entire purchase',
              'Help you grow from your first property to a full portfolio',
              'Create personalized investment roadmaps tailored to your goals',
            ].map((item, index) => (
              <div key={index} className="help-item flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C6A664]/10">
                  <svg
                    className="h-4 w-4 text-[#C6A664]"
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
                <p className="text-base leading-relaxed text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================
            CTA SECTION
            ======================================== */}
        <div ref={ctaRef} className="text-center">
          <div className="cta-card inline-flex flex-col items-center gap-8 rounded-3xl border border-[#C6A664]/20 bg-gradient-to-br from-[#0A2342] to-[#0d2d54] p-10 shadow-2xl lg:p-16">
            <div>
              <h3 className="cta-title mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Your Investment Future Starts Here
              </h3>
              <p className="cta-description mx-auto max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
                Ready to build wealth, increase net worth, create equity, reduce tax, and grow your investment portfolio with high-performing properties Australia-wide? You need more than a property. You need a strategy, a plan, and a partner who knows how to get you there.
              </p>
            </div>

            <a
              href="https://calendly.com/ozgainvestor/welcome-call"
              className="cta-button group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Book Your Free Strategy Call</span>
              <FiArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <p className="cta-note text-sm text-white/60">
              Free consultation • No obligations • Personalized investment roadmap
            </p>
          </div>
        </div>
      </div>

      {/* Inline styles for proper 3D transforms */}
      <style jsx>{`
        .reason-card {
          transform-style: preserve-3d;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}