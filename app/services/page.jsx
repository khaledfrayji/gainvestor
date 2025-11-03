'use client';

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

export default function Services() {

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
    <div className="scroll-smooth overflow-hidden bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .hero-badge {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-title {
          animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .hero-cta {
          animation: fadeInUp 0.8s ease-out 0.8s backwards;
        }

        .service-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
        .service-card:nth-child(6) { animation-delay: 0.6s; }

        .process-step {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .process-step:nth-child(1) { animation-delay: 0.1s; }
        .process-step:nth-child(2) { animation-delay: 0.2s; }
        .process-step:nth-child(3) { animation-delay: 0.3s; }
        .process-step:nth-child(4) { animation-delay: 0.4s; }
        .process-step:nth-child(5) { animation-delay: 0.5s; }
        .process-step:nth-child(6) { animation-delay: 0.6s; }

        .benefit-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .benefit-item:nth-child(1) { animation-delay: 0.05s; }
        .benefit-item:nth-child(2) { animation-delay: 0.1s; }
        .benefit-item:nth-child(3) { animation-delay: 0.15s; }
        .benefit-item:nth-child(4) { animation-delay: 0.2s; }
        .benefit-item:nth-child(5) { animation-delay: 0.25s; }
        .benefit-item:nth-child(6) { animation-delay: 0.3s; }
        .benefit-item:nth-child(7) { animation-delay: 0.35s; }
        .benefit-item:nth-child(8) { animation-delay: 0.4s; }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
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
            From property search to settlement and beyond—we handle every aspect of your investment property acquisition with professional expertise.
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
      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiHome className="h-4 w-4" />
              <span>What We Do</span>
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              Full-service buyer{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                representation
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
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
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex rounded-2xl bg-[#C6A664]/10 p-4 transition-all duration-300 group-hover:bg-[#C6A664]/20">
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
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiTarget className="h-4 w-4" />
              <span>Our Process</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              How we work{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                with you
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              A proven, step-by-step approach to finding and securing your investment property.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="process-step group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#C6A664] to-[#D4B876] text-xl font-bold text-white shadow-lg">
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
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
              <FiShield className="h-4 w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl">
              The buyer's agent{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                advantage
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
            <FiUsers className="h-4 w-4" />
            <span>Get Started</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ready to find your next{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              investment property?
            </span>
          </h2>

          <p className="mb-10 text-xl leading-relaxed text-white/80">
            Schedule a free consultation to discuss your investment goals and how our buyer's agent services can help you succeed.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-10 py-5 text-lg font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Book Free Consultation</span>
          </a>

          <p className="mt-8 text-sm text-white/60">
            No obligations • Expert advice • Accredited professionals
          </p>
        </div>
      </section>
    </div>
  );
}