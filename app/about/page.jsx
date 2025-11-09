'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  FiHeart, 
  FiShield, 
  FiUsers, 
  FiTarget,
  FiAward,
  FiTrendingUp,
  FiCompass
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const quoteRef = useRef(null);
  const valuesRef = useRef(null);
  const approachRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance - clean and simple
      if (heroRef.current) {
        const tl = gsap.timeline({ delay: 0.3 });
        
        tl.from('.hero-badge', {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power2.out',
        })
        .from('.hero-title', {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power2.out',
        }, '-=0.4')
        .from('.hero-subtitle', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.5')
        .fromTo('.hero-cta', 
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.15,
            ease: 'power2.out',
          }, 
        '-=0.4');
      }

      // Story section
      if (storyRef.current) {
        gsap.from('.story-image', {
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: 'power2.out',
        });

        gsap.from('.story-content', {
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          x: 30,
          duration: 1,
          ease: 'power2.out',
        });
      }

      // Quote section
      if (quoteRef.current) {
        gsap.from(quoteRef.current.children, {
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        });
      }

      // Values section
      if (valuesRef.current) {
        gsap.from('.value-card', {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }

      // Approach section
      if (approachRef.current) {
        gsap.from('.approach-item', {
          scrollTrigger: {
            trigger: approachRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        });
      }

      // Final CTA
      if (finalRef.current) {
        gsap.from(finalRef.current.children, {
          scrollTrigger: {
            trigger: finalRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: FiHeart,
      title: 'Client-Only Representation',
      description: 'We work exclusively for buyers, never sellers. No conflicts of interest, no divided loyalties, your success is our only agenda.',
    },
    {
      icon: FiShield,
      title: 'Accredited Expertise',
      description: "Licensed, accredited buyer's agents with proven track records. We bring professional standards and accountability to every transaction.",
    },
    {
      icon: FiCompass,
      title: 'Market Intelligence',
      description: 'Access to off-market opportunities, comparative market analysis, and insider knowledge that gives you a competitive advantage.',
    },
    {
      icon: FiAward,
      title: 'Negotiation Mastery',
      description: 'Skilled negotiators who secure favorable terms and pricing. We fight for every advantage to maximize your investment returns.',
    },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden  bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342]">
        {/* Background Image with proper overlay */}
        <div className="absolute inset-0">
          <Image
            src="/i2.png"
            alt="City skyline at sunset"
            fill
            className="object-cover opacity-30"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
              <FiUsers className="h-4 w-4" />
              <span>Accredited Buyer's Agents</span>
            </div>

            <h1 className="hero-title mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Your trusted{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                buyer's advocate
              </span>{' '}
              for investment property
            </h1>

            <p className="hero-subtitle mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl">
              As accredited buyer's agents, we represent your interests in finding and securing high-return investment properties. No conflicts, no hidden agendas, just expert guidance working exclusively for you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#our-story"
                className="hero-cta group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="/contact"
                className="hero-cta rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" ref={storyRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="story-image">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/i1.png"
                  alt="Professional team collaboration"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                  quality={90}
                />
              </div>
            </div>

            {/* Content */}
            <div className="story-content">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
                <FiHeart className="h-4 w-4" />
                <span>Our Story</span>
              </div>

              <h2 className="mb-8 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
                Professional buyer's agents,{' '}
                <span className="bg-gradient-to-r from-[#C6A664] to-[#8B7355] bg-clip-text text-transparent">
                  working for you
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Gainvestor was founded on a critical principle: investors deserve representation that works exclusively in their interests. As accredited buyer's agents, we don't represent sellers, we represent you.
                </p>

                <p>
                  Our team of licensed professionals brings years of market expertise, negotiation experience, and investment analysis to every property search. We navigate the complexities of property acquisition so you can focus on building wealth.
                </p>

                <p>
                  From identifying high-return opportunities to conducting thorough due diligence and negotiating favorable terms, we handle every aspect of the buying process. Our goal is simple: secure the right investment property at the best possible price.
                </p>

                <p className="font-semibold text-[#0A2342]">
                  We succeed only when you succeed. That's the buyer's agent advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section ref={quoteRef} className="bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex rounded-full bg-[#C6A664]/10 p-4 backdrop-blur-sm">
            <svg className="h-12 w-12 text-[#C6A664]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="mb-8 text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
            The right property at the right price. That's not luck, it's{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              expert representation
            </span>{' '}
            working in your corner.
          </blockquote>

          <p className="text-lg text-white/70">
            As your buyer's agents, we bring professional advocacy, market expertise, and negotiation power to every investment decision.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiAward className="h-4 w-4" />
              <span>Our Values</span>
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              The buyer's agent{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                advantage
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Why working with accredited buyer's agents makes all the difference in your investment journey.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-10 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-[#C6A664]/10 p-4 transition-all duration-300 group-hover:bg-[#C6A664]/20">
                      <Icon className="h-8 w-8 text-[#C6A664]" />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                      {value.title}
                    </h3>

                    <p className="text-lg leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={approachRef} className="bg-gradient-to-t from-white to-gray-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiTarget className="h-4 w-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              Our buyer's agent process
            </h2>
          </div>

          <div className="space-y-12">
            <div className="approach-item">
              <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                Discovery and strategy
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                We start by understanding your investment criteria, budget, timeline, and return expectations. This foundation shapes our entire property search and acquisition strategy.
              </p>
            </div>

            <div className="approach-item">
              <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                Property sourcing and analysis
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                We leverage our market access to identify opportunities, including off-market properties. Every option undergoes rigorous due diligence, from rental yield analysis to growth potential assessment.
              </p>
            </div>

            <div className="approach-item">
              <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                Negotiation and acquisition
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                As your representatives, we negotiate terms, pricing, and conditions to secure the best possible deal. We handle all communication with selling agents and guide you through contracts, inspections, and settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={finalRef} className="px-4 py-24 bg-gradient-to-b from-white to-[#D4B876] sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiTrendingUp className="h-4 w-4" />
            <span>Start Your Journey</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
            Ready to have an expert{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              in your corner?
            </span>
          </h2>

          <p className="mb-10 text-xl leading-relaxed text-gray-600">
            Let's discuss your investment goals and how our buyer's agent services can help you secure high-return properties with confidence. No obligations, just expert advice.
          </p>

          <a
            href="https://calendly.com/ozgainvestor/welcome-call"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Schedule a Consultation</span>
          </a>

          <p className="mt-8 text-sm text-gray-100">
            Free consultation • No obligations • Completely confidential
          </p>
        </div>
      </section>
    </div>
  );
}