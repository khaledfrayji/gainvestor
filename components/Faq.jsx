'use client';

import { useEffect, useRef, useState } from 'react';
import { FiPlus, FiMinus, FiSearch, FiHelpCircle } from 'react-icons/fi';

export default function FAQ() {
  const observerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'investment', label: 'Investment' },
    { id: 'process', label: 'Process' },
    { id: 'support', label: 'Support' },
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How much money do I need to start investing?',
      answer:
        "There's no one-size-fits-all answer. We work with investors at various levels, from first-timers starting with smaller investments to experienced portfolios. During our initial consultation, we'll discuss your budget and find opportunities that match your financial situation.",
    },
    {
      category: 'getting-started',
      question: 'Do I need prior real estate experience?',
      answer:
        "Not at all. Many of our clients started with zero experience. We guide you through every step, explain everything in plain language, and help you make informed decisions. Think of us as your real estate mentors.",
    },
    {
      category: 'investment',
      question: 'What types of properties do you offer?',
      answer:
        'We specialize in residential investment properties including single-family homes, condos, and multi-unit buildings. Each property is carefully vetted for investment potential, location quality, and long-term value.',
    },
    {
      category: 'investment',
      question: 'How do you find investment opportunities?',
      answer:
        'Our team uses advanced market analysis, local connections, and years of experience to identify properties before they hit the mainstream market. We evaluate hundreds of options to present you with only the best opportunities.',
    },
    {
      category: 'investment',
      question: 'Can I invest in properties outside my state?',
      answer:
        'Yes! We help investors build portfolios across multiple markets. We handle the research, local partnerships, and management coordination, so you can invest anywhere without needing to be there physically.',
    },
    {
      category: 'process',
      question: 'What happens after I choose a property?',
      answer:
        "Once you select a property, we guide you through financing, inspections, closing, and setup. We coordinate with all parties involved and keep you informed at every stage. You'll never feel lost in the process.",
    },
    {
      category: 'process',
      question: 'How long does the buying process take?',
      answer:
        'Typically, from property selection to closing takes 30-60 days, depending on financing and local regulations. We work efficiently to move things forward while ensuring all due diligence is properly completed.',
    },
    {
      category: 'process',
      question: 'Do you help with property management?',
      answer:
        'Yes. We can connect you with trusted property management services or provide guidance if you prefer to self-manage. Our goal is to make ownership as hands-off or hands-on as you want it to be.',
    },
    {
      category: 'support',
      question: 'What kind of ongoing support do you provide?',
      answer:
        "We don't disappear after closing. You'll have access to our team for portfolio reviews, market updates, growth strategy sessions, and any questions that come up. We're here for the long haul.",
    },
    {
      category: 'support',
      question: 'Are there any hidden fees?',
      answer:
        "Never. We're completely transparent about all costs upfront. You'll know exactly what you're paying for and why. No surprises, no fine print, no hidden charges.",
    },
    {
      category: 'support',
      question: 'How do I get started?',
      answer:
        "Simple! Click the 'Schedule a Consultation' button and book a free call with our team. We'll chat about your goals, answer your questions, and explore whether we're a good fit. No pressure, no obligations.",
    },
    {
      category: 'investment',
      question: 'What returns can I expect?',
      answer:
        "Returns vary based on property type, location, and market conditions. We focus on realistic projections and long-term value rather than unrealistic promises. During your consultation, we'll discuss typical returns for different investment strategies.",
    },
  ];

  useEffect(() => {
    // Fast Intersection Observer for immediate animations
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger earlier for faster perception
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all animated elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    
     <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:pt-32">
      {/* Decorative background elements */}
      
     

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mb-12 text-center lg:mb-16">
          <div className="animate-on-scroll fade-in-up-fast delay-0 mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiHelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="animate-on-scroll fade-in-up-fast delay-1 mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
            Questions?{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#8B7355] bg-clip-text text-transparent">
              We've got answers
            </span>
          </h2>
          <p className="animate-on-scroll fade-in-up-fast delay-2 mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Everything you need to know about getting started with real estate
            investing.
          </p>
        </div>

        {/* Search bar */}
        <div className="animate-on-scroll fade-in-up-fast delay-3 mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-300 focus:border-[#C6A664] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/20"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="animate-on-scroll fade-in-up-fast delay-4 mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#C6A664] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="animate-on-scroll fade-in-up-fast group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors duration-300 lg:p-8"
                >
                  <span className="flex-1 text-lg font-bold text-[#0A2342] lg:text-xl">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-[#C6A664] text-white rotate-180'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}
                  >
                    {openIndex === index ? (
                      <FiMinus className="h-5 w-5" />
                    ) : (
                      <FiPlus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Answer - Faster animation */}
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4 lg:px-8 lg:pb-8">
                      <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="animate-on-scroll fade-in-up-fast rounded-2xl border border-gray-200 bg-white p-12 text-center">
              <FiSearch className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="animate-on-scroll fade-in-up-fast mt-12 text-center lg:mt-16">
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-[#0A2342] p-8 shadow-lg lg:p-10">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-[#f2f2f2] lg:text-3xl">
                Still have questions?
              </h3>
              <p className="text-base text-gray-200 lg:text-lg">
                Let's chat. Our team is here to help you get started.
              </p>
            </div>
            <a
              href="https://form.typeform.com/to/H7g8lHmO"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-lg  hover:shadow-xl"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}