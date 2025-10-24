'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiTrendingUp, 
  FiShield, 
  FiUsers, 
  FiTarget,
  FiBarChart2,
  FiAward
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set GSAP defaults for better performance
      gsap.defaults({
        ease: 'power2.out',
        duration: 1,
      });

      // Heading animation - simplified and smooth
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

      // Stats cards animation - smooth entrance
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        if (statCards.length > 0) {
          gsap.from(statCards, {
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: 'all',
          });
        }
      }

      // Feature cards animation - smooth entrance
      if (featuresRef.current) {
        const featureCards = featuresRef.current.querySelectorAll('.feature-card');
        if (featureCards.length > 0) {
          gsap.from(featureCards, {
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
              once: true,
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
            clearProps: 'all',
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: FiBarChart2,
      value: '15%',
      label: 'Average ROI',
      description: 'Consistent returns year over year',
    },
    {
      icon: FiUsers,
      value: '1000+',
      label: 'Active Investors',
      description: 'Growing community of satisfied clients',
    },
    {
      icon: FiAward,
      value: '250+',
      label: 'Properties Sold',
      description: 'Successful investments completed',
    },
    {
      icon: FiTarget,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Trusted by investors nationwide',
    },
  ];

  const features = [
    {
      icon: FiTrendingUp,
      title: 'Expert Market Analysis',
      description:
        'Access comprehensive market insights and data-driven recommendations from our team of seasoned real estate analysts.',
      benefits: ['Live market data', 'Trend forecasting', 'ROI projections'],
    },
    {
      icon: FiShield,
      title: 'Secure Investment Platform',
      description:
        'Your investments are protected with bank-level security, legal compliance, and transparent transaction processes.',
      benefits: ['Encrypted transactions', 'Legal protection', 'Full transparency'],
    },
    {
      icon: FiUsers,
      title: 'Personalized Guidance',
      description:
        'Work one-on-one with dedicated investment advisors who understand your financial goals and risk tolerance.',
      benefits: ['Dedicated advisor', 'Custom strategy', '24/7 support'],
    },
    {
      icon: FiTarget,
      title: 'Diversified Portfolio',
      description:
        'Build a balanced real estate portfolio across multiple properties, locations, and investment strategies.',
      benefits: ['Risk mitigation', 'Multiple markets', 'Flexible options'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 text-center lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiAward className="h-4 w-4" />
            <span>Why Choose Gainvestor</span>
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
            Smart investing made{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#8B7355] bg-clip-text text-transparent">
              simple
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            We combine expert knowledge, cutting-edge technology, and personalized
            service to help you build lasting wealth through real estate.
          </p>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl bg-[#C6A664]/10 p-3 transition-colors duration-300 group-hover:bg-[#C6A664]/20">
                    <Icon className="h-6 w-6 text-[#C6A664]" />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-[#0A2342] lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 text-lg font-semibold text-gray-900">
                    {stat.label}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features grid */}
        <div
          ref={featuresRef}
          className="grid gap-8 sm:grid-cols-2 lg:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl lg:p-10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#C6A664]/10 to-[#C6A664]/5 p-4 transition-all duration-300 group-hover:scale-110 group-hover:from-[#C6A664]/20 group-hover:to-[#C6A664]/10">
                    <Icon className="h-8 w-8 text-[#C6A664]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-[#0A2342] lg:text-3xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-base leading-relaxed text-gray-600 lg:text-lg">
                    {feature.description}
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700"
                      >
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#C6A664]/10">
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
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="inline-flex flex-col gap-4 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg sm:flex-row sm:items-center sm:gap-6 lg:p-10">
            <div className="flex-1 text-left">
              <h3 className="mb-2 text-2xl font-bold text-[#0A2342] lg:text-3xl">
                Ready to start investing?
              </h3>
              <p className="text-base text-gray-600 lg:text-lg">
                Schedule a free consultation with our investment experts today.
              </p>
            </div>
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-lg shadow-[#C6A664]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C6A664]/30 sm:flex-shrink-0"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}