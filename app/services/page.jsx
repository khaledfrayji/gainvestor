'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiSearch, 
  FiCheckCircle, 
  FiFileText,
  FiTrendingUp,
  FiShield,
  FiDollarSign,
  FiHome,
  FiUsers,
  FiAward,
  FiTarget
} from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Set initial states to prevent flash
    gsap.set('.hero-badge, .hero-title, .hero-subtitle, .hero-cta', { 
      opacity: 0, 
      y: 30 
    });
    
    gsap.set('.service-card', { 
      opacity: 0, 
      y: 60 
    });
    
    gsap.set('.process-step', { 
      opacity: 0, 
      x: -50 
    });
    
    gsap.set('.benefit-item', { 
      opacity: 0, 
      y: 40 
    });
    
    gsap.set('.cta-content > *', { 
      opacity: 0, 
      y: 30 
    });

    const ctx = gsap.context(() => {
      // Hero Section - Sequential entrance
      const heroTl = gsap.timeline({ 
        defaults: { 
          ease: 'power3.out',
          duration: 0.8 
        } 
      });
      
      heroTl
        .to('.hero-badge', {
          opacity: 1,
          y: 0,
          duration: 0.6,
        })
        .to('.hero-title', {
          opacity: 1,
          y: 0,
          duration: 1,
        }, '-=0.3')
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, '-=0.5')
        .to('.hero-cta', {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
        }, '-=0.4');

      // Parallax effect for hero background
      gsap.to('.hero-bg', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        yPercent: 20,
        ease: 'none',
      });

      // Floating animation for background elements
      gsap.to('.float-element-1', {
        y: 30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.float-element-2', {
        y: -40,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Section Headers Animation
      gsap.utils.toArray('.section-badge').forEach((badge) => {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: badge,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'back.out(1.7)',
        });
      });

      gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('.section-description').forEach((desc) => {
        gsap.from(desc, {
          scrollTrigger: {
            trigger: desc,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        });
      });

      // Services Cards with Stagger and Scroll
      ScrollTrigger.batch('.service-card', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            overwrite: true,
          });
        },
        start: 'top 85%',
        once: false,
      });

      // Hover effect for service cards
      gsap.utils.toArray('.service-card').forEach((card) => {
        const icon = card.querySelector('.service-icon');
        const bg = card.querySelector('.service-bg');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.15,
            rotation: 5,
            duration: 0.4,
            ease: 'back.out(2)',
          });
          gsap.to(bg, {
            opacity: 1,
            duration: 0.3,
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(2)',
          });
          gsap.to(bg, {
            opacity: 0,
            duration: 0.3,
          });
        });
      });

      // Process Steps with Scroll Progress
      ScrollTrigger.batch('.process-step', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            overwrite: true,
          });
        },
        start: 'top 80%',
        once: false,
      });

      // Animate process numbers separately
      gsap.utils.toArray('.process-number').forEach((number, index) => {
        gsap.from(number, {
          scrollTrigger: {
            trigger: number,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          scale: 0,
          rotation: -180,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        });
      });

      // Benefits Grid with Wave Effect
      ScrollTrigger.batch('.benefit-item', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.6,
              from: 'start',
              grid: 'auto',
            },
            ease: 'power2.out',
            overwrite: true,
          });
        },
        start: 'top 80%',
        once: false,
      });

      // CTA Section with Sequential Animation
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      ctaTl
        .to('.cta-content > *', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        });

      // Smooth scroll progress indicators
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.from(step.querySelector('.step-line'), {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scaleY: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          delay: i * 0.1,
        });
      });

    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: FiSearch,
      title: 'Property Search and Sourcing',
      description: 'We leverage our extensive network and market access to find investment opportunities that match your criteria—including off-market properties most investors never see.',
      features: [
        'Access to off-market listings',
        'Comprehensive market scanning',
        'Property matching to your criteria',
        'Regular opportunity updates'
      ]
    },
    {
      icon: FiFileText,
      title: 'Investment Analysis and Due Diligence',
      description: 'Every property undergoes rigorous analysis before we present it to you. We evaluate rental yields, capital growth potential, and investment risks.',
      features: [
        'Comparative market analysis',
        'Rental yield calculations',
        'Growth area identification',
        'Risk assessment reports'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Negotiation and Acquisition',
      description: "As your buyer's agent, we negotiate on your behalf to secure the best possible price and terms. Our experience and market knowledge give you a competitive advantage.",
      features: [
        'Strategic price negotiation',
        'Contract terms optimization',
        'Seller agent liaison',
        'Purchase price maximization'
      ]
    },
    {
      icon: FiShield,
      title: 'Transaction Management',
      description: 'We guide you through every step from contract to settlement, coordinating inspections, legal reviews, and ensuring all conditions are met.',
      features: [
        'Contract review coordination',
        'Building and pest inspections',
        'Settlement management',
        'Professional referrals'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Investment Strategy Consulting',
      description: 'Beyond individual properties, we help you develop a long-term investment strategy aligned with your financial goals and risk tolerance.',
      features: [
        'Portfolio planning',
        'Growth strategy development',
        'Tax efficiency guidance',
        'Ongoing market insights'
      ]
    },
    {
      icon: FiTarget,
      title: 'Ongoing Advisory Support',
      description: "Our relationship doesn't end at settlement. We provide continued support for portfolio reviews, market updates, and future acquisition planning.",
      features: [
        'Regular portfolio reviews',
        'Market update reports',
        'Expansion opportunities',
        'Investment performance tracking'
      ]
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your investment goals, budget, timeline, and preferences to create a tailored search strategy.'
    },
    {
      number: '02',
      title: 'Property Search',
      description: 'We actively search for properties matching your criteria, presenting only opportunities that meet our rigorous standards.'
    },
    {
      number: '03',
      title: 'Analysis & Presentation',
      description: 'Each property comes with detailed analysis including rental projections, growth forecasts, and investment metrics.'
    },
    {
      number: '04',
      title: 'Property Inspection',
      description: 'We arrange and attend inspections with you, providing expert insights on property condition and potential.'
    },
    {
      number: '05',
      title: 'Negotiation',
      description: 'We negotiate pricing and contract terms on your behalf to secure the best possible deal.'
    },
    {
      number: '06',
      title: 'Contract to Settlement',
      description: 'We manage the transaction process, coordinating all parties and ensuring a smooth path to settlement.'
    },
  ];

  const benefits = [
    {
      icon: FiCheckCircle,
      text: 'No seller conflicts - we work exclusively for you'
    },
    {
      icon: FiCheckCircle,
      text: 'Access to off-market opportunities'
    },
    {
      icon: FiCheckCircle,
      text: 'Expert negotiation saves you money'
    },
    {
      icon: FiCheckCircle,
      text: 'Professional market analysis and insights'
    },
    {
      icon: FiCheckCircle,
      text: 'Time-saving property search and screening'
    },
    {
      icon: FiCheckCircle,
      text: 'Reduced investment risk through due diligence'
    },
    {
      icon: FiCheckCircle,
      text: 'Ongoing support and advisory services'
    },
    {
      icon: FiCheckCircle,
      text: "Accredited, licensed buyer's agents"
    },
  ];

  return (
   <>
   <Navbar/>
    <div ref={heroRef} className="scroll-smooth overflow-hidden bg-white">
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Background Image with proper overlay */}
        <div className="hero-bg min-h-screen absolute inset-0">
          <Image
            src="/services.png"
            alt="City skyline at sunset"
            fill
            className="object-cover opacity-30"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-element-1 absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
          <div className="float-element-2 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
            <FiAward className="h-4 w-4" />
            <span>Our Services</span>
          </div>

          <h1 className="hero-title mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              buyer's agent
            </span>{' '}
            services
          </h1>

          <p className="hero-subtitle mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl">
            From property search to settlement and beyond, we handle every aspect of your investment property acquisition with professional expertise.
          </p>

          <a
            href="#services"
            className="hero-cta inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Explore Our Services</span>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" ref={servicesRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="section-badge mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiHome className="h-4 w-4" />
              <span>What We Do</span>
            </div>
            <h2 className="section-title mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              Full-service buyer{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                representation
              </span>
            </h2>
            <p className="section-description mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Everything you need to find, analyze, negotiate, and acquire high-return investment properties.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="service-bg absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0" />
                  
                  <div className="relative z-10">
                    <div className="service-icon mb-6 inline-flex rounded-2xl bg-[#C6A664]/10 p-4 transition-all duration-300 group-hover:bg-[#C6A664]/20">
                      <Icon className="h-8 w-8 text-[#C6A664]" />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-[#0A2342]">
                      {service.title}
                    </h3>

                    <p className="mb-6 text-base leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C6A664]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="section-badge mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiTarget className="h-4 w-4" />
              <span>Our Process</span>
            </div>
            <h2 className="section-title mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              How we work{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                with you
              </span>
            </h2>
            <p className="section-description mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              A proven, step-by-step approach to finding and securing your investment property.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="process-step group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Progress line */}
                <div className="step-line absolute -left-1 top-0 h-full w-1 origin-top bg-gradient-to-b from-[#C6A664] to-[#D4B876]" />
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="process-number flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#C6A664] to-[#D4B876] text-xl font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-[#0A2342]">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="section-badge mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiShield className="h-4 w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-title mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              The buyer's agent{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                advantage
              </span>
            </h2>
            <p className="section-description mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Working with accredited buyer's agents gives you significant advantages over going it alone.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-item flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-md"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-[#C6A664]" />
                  <p className="text-base font-medium text-gray-700">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
    </div>
    <Footer/>
   </>
  );
}