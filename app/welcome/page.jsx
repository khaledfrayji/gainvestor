'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  FiCheckCircle,
  FiTrendingUp,
  FiHome,
  FiUsers,
  FiShield,
  FiTarget,
  FiMapPin,
  FiAward,
  FiDollarSign,
  FiPieChart,
  FiBarChart2
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const audienceRef = useRef(null);
  const promiseRef = useRef(null);
  const visionRef = useRef(null);
  const finalCtaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
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
        .from('.hero-cta', {
            autoAlpha: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        }, '-=0.4');
      }

      // Intro section
      if (introRef.current) {
        gsap.from('.intro-content', {
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power2.out',
        });
      }

      // Process steps
      if (processRef.current) {
        gsap.from('.process-step', {
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        });
      }

      // Benefits cards
      if (benefitsRef.current) {
        gsap.from('.benefit-card', {
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      // Audience items
      if (audienceRef.current) {
        gsap.from('.audience-item', {
          scrollTrigger: {
            trigger: audienceRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      // Promise items
      if (promiseRef.current) {
        gsap.from('.promise-item', {
          scrollTrigger: {
            trigger: promiseRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
        });
      }

      // Vision section
      if (visionRef.current) {
        gsap.from(visionRef.current.children, {
          scrollTrigger: {
            trigger: visionRef.current,
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
      if (finalCtaRef.current) {
        gsap.from(finalCtaRef.current.children, {
          scrollTrigger: {
            trigger: finalCtaRef.current,
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

  const processSteps = [
    {
      number: '01',
      title: 'Strategy & Chat',
      description: "We start with a simple conversation. You tell me your goals, budget, income, and long-term vision. I'll help you understand what's possible and what strategy suits you.",
      icon: FiUsers,
    },
    {
      number: '02',
      title: 'I Recommend Investment Properties That Match Your Goals',
      description: 'I source high-growth properties across Australia: house & land packages, townhouses, turnkey homes, SMSF-approved properties, co-living, NDIS, dual-key, high rental demand areas and more. You get hand-picked, data-driven investment opportunities that match your plan.',
      icon: FiHome,
    },
    {
      number: '03',
      title: 'Secure the Property & Watch It Grow',
      description: 'Once you choose the property, I help you secure it, complete the contracts, and guide you all the way to settlement. You then hold the property, build equity, increase rent over time... and repeat the process to build a portfolio.',
      icon: FiTrendingUp,
    },
  ];

  const benefits = [
    "No buyer's agent fee",
    'Access to off-market & pre-release opportunities',
    'National coverage (QLD, NSW, VIC, WA, SA)',
    'Support from search to settlement',
    'Market insights, suburb data, and growth forecasting',
    'A simple, honest, and transparent process',
    'Properties selected to create equity & long-term wealth',
    'A trusted network of developers, brokers & builders',
  ];

  const audience = [
    'First-time investors',
    'Busy professionals',
    'People with 5%-10% deposit saved',
    'Rentvestors',
    'Families wanting to build long-term assets',
    'People who want a clear, simple pathway',
    'Investors wanting to grow from 1 to 3-5 properties',
    'Anyone wanting passive income and equity growth',
  ];

  const promises = [
    'A personalised investment strategy',
    'A shortlist of properties matched to your goals',
    'Full support with contracts, valuations, and settlement',
    'Access to genuine growth markets and low-vacancy suburbs',
    'Education + guidance so you understand every step',
    'No pressure — no confusing jargon — no hidden fees',
  ];

  const visionPoints = [
    { icon: FiDollarSign, text: 'Equity' },
    { icon: FiTrendingUp, text: 'Rental income' },
    { icon: FiPieChart, text: 'Long-term wealth' },
    { icon: FiShield, text: 'Freedom and security' },
    { icon: FiAward, text: 'Options for your future and your family' },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] pt-8">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/welcomeee.png"
            alt="Investment property skyline"
            fill
            className="object-cover opacity-30"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl text-center">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
              <FiHome className="h-4 w-4" />
              <span>Investment Property Advisor</span>
            </div>

            <h1 className="hero-title mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Build Wealth Through Smart{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                Property Investing
              </span>{' '}
              Without Paying a Buyer's Agent Fee
            </h1>

            <p className="hero-subtitle mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-white/80 sm:text-2xl">
              I help everyday Australians find high-growth investment properties, secure the deal, and build a long-term portfolio, even if you're starting from zero.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/ozgainvestor/welcome-call"
                className="hero-cta group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="#qualify"
                className="hero-cta rounded-xl group relative border-2 border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                See If You Qualify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Who I Am & What I Do */}
      <section ref={introRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="intro-content order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/nabil2.png"
                  alt="Nabil Farha - Investment Property Advisor"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                  quality={90}
                />
              </div>
            </div>

            {/* Content */}
            <div className="intro-content order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
                <FiUsers className="h-4 w-4" />
                <span>Your Investment Partner</span>
              </div>

              <h2 className="mb-8 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
                Your Personal{' '}
                <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                  Investment Property Advisor
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  My name is <strong className="text-[#0A2342]">Nabil Farha</strong>, and I work as an Investment Properties Buyer's Agent. My mission is simple: help you secure the right investment property, in the right market, with the right strategy, and guide you through the entire process from search to settlement.
                </p>

                <p>
                  <strong className="text-[#0A2342]">Unlike traditional buyer's agents, you don't pay me a buyer's agent fee.</strong> I work as a real estate professional who sources investment properties nationwide, using market data, growth forecasting, and a strong network of developers, builders, and property partners.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/ozgainvestor/welcome-call"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Book a Quick Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The 3-Step Process */}
      <section ref={processRef} className="bg-gradient-to-b from-gray-50 to-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiTarget className="h-4 w-4" />
              <span>Our Process</span>
            </div>
            <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
              The GainVestor{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                3-Step Property Strategy
              </span>
            </h2>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-step group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl lg:p-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="flex items-center gap-6 lg:flex-col lg:items-center">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C6A664] to-[#D4B876] text-3xl font-bold text-white shadow-lg lg:h-24 lg:w-24">
                        {step.number}
                      </div>
                      <div className="inline-flex rounded-xl bg-[#C6A664]/10 p-3 lg:p-4">
                        <Icon className="h-7 w-7 text-[#C6A664] lg:h-8 lg:w-8" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold text-[#0A2342] sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center lg:mt-16">
            <a
              href="https://calendly.com/ozgainvestor/welcome-call"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Start Building Your Portfolio Today</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Clients Choose Me */}
      <section ref={benefitsRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiCheckCircle className="h-4 w-4" />
              <span>Why Choose GainVestor</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
              A Simpler Way to{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                Invest in Property
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <FiCheckCircle className="h-5 w-5 text-[#C6A664]" />
                  </div>
                  <p className="text-base font-medium text-[#0A2342]">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#qualify"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#C6A664] bg-[#C6A664]/5 px-8 py-4 text-lg font-semibold text-[#0A2342] transition-all duration-300 hover:bg-[#C6A664]/10"
            >
              <span>Let's See What You Qualify For</span>
            </a>
          </div>
        </div>
      </section>

    {/* Section 4 - Who This Is For */}
<section id="qualify" ref={audienceRef} className="relative bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
  {/* Background Image with overlay */}
  <div className="absolute inset-0">
    <Image
      src="/welcomee.png"
      alt="Investment property background"
      fill
      className="object-cover opacity-30"
      quality={90}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
  </div>

  {/* Gradient orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
    <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
  </div>

  <div className="relative z-10 mx-auto max-w-5xl">
    
    <div className="mb-12 text-center lg:mb-16">
      
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
        <FiUsers className="h-4 w-4" />
        <span>Perfect For</span>
      </div>
      <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        If You Want to Build Wealth Through Property ,{' '}
        <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
          You're in the Right Place
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-xl text-white/80">
        This service is perfect for:
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
      {audience.map((item, index) => (
        <div
          key={index}
          className="audience-item group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:bg-white/10"
        >
          <div className="shrink-0 rounded-lg bg-[#C6A664]/20 p-2">
            <FiCheckCircle className="h-6 w-6 text-[#C6A664]" />
          </div>
          <p className="text-lg font-medium text-white">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Section 5 - What You Get (Promise) */}
      <section ref={promiseRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiShield className="h-4 w-4" />
              <span>Your Promise</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
              I'll Help You Secure a Great{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                Investment Property
              </span>{' '}
              Without the Stress
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              When you work with me, you get:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="promise-item group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl bg-[#C6A664]/10 p-3">
                    <FiCheckCircle className="h-6 w-6 text-[#C6A664]" />
                  </div>
                  <p className="text-lg font-semibold leading-relaxed text-[#0A2342]">
                    {promise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Portfolio Growth Vision */}
      <section ref={visionRef} className="bg-gradient-to-b from-gray-50 to-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiBarChart2 className="h-4 w-4" />
            <span>Your Future</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
            This Isn't Just About Buying One Property{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              It's About Your Future
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600">
            I want you to build a portfolio that creates:
          </p>

          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#C6A664]/10 p-3 transition-all duration-300 group-hover:bg-[#C6A664]/20">
                    <Icon className="h-7 w-7 text-[#C6A664]" />
                  </div>
                  <p className="text-lg font-semibold text-[#0A2342]">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mb-10 text-xl font-medium text-[#0A2342]">
            It starts with one property... then we repeat the process.
          </p>

          <a
            href="/getstarted"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Start Your First Step Today</span>
          </a>
        </div>
      </section>

      {/* Section 7 - Final CTA */}
      <section ref={finalCtaRef} className="bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
            <FiTrendingUp className="h-4 w-4" />
            <span>Get Started Today</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Start Building Your{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              Wealth Through Property?
            </span>
          </h2>

          <p className="mb-10 text-xl leading-relaxed text-white/80">
            Fill in the quick form below and let's have a chat about your goals. I'll show you the best options based on your budget, strategy, and timeline.
          </p>

          <a
            href="https://calendly.com/ozgainvestor/welcome-call"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-12 py-6 text-xl font-semibold text-[#0A2342] shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Get Started — Free Consultation</span>
          </a>

          <p className="mt-8 text-sm text-white/60">
            Free consultation • No obligations • Completely confidential
          </p>
        </div>
      </section>
    </div>
  );
}