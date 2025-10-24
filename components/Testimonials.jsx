'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiStar, 
  FiChevronLeft, 
  FiChevronRight,
  FiYoutube
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Tech Entrepreneur',
      location: 'San Francisco, CA',
      image: 'SM',
      rating: 5,
      text: 'Working with Gainvestor has been transformative. Their team took the time to understand my goals and guided me through every decision. I finally feel confident about my investment strategy and my financial future.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Investment Banker',
      location: 'New York, NY',
      image: 'MC',
      rating: 5,
      text: 'What impressed me most was the depth of knowledge and transparency. Every recommendation was backed by solid research and clear explanations. Gainvestor treats clients like partners, not just numbers.',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      name: 'Jennifer Adams',
      role: 'Marketing Director',
      location: 'Austin, TX',
      image: 'JA',
      rating: 5,
      text: 'I was hesitant about real estate investing, but the team made everything accessible. They answered every question with patience and provided insights that actually made sense. I wish I had started sooner.',
      gradient: 'from-green-400 to-green-600',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Software Engineer',
      location: 'Seattle, WA',
      image: 'DR',
      rating: 5,
      text: 'The level of personalized attention and expertise is unmatched. My advisor understands my situation and provides recommendations tailored to my specific needs. It feels like having a trusted friend in the industry.',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Business Owner',
      location: 'Miami, FL',
      image: 'LT',
      rating: 5,
      text: 'Gainvestor has been instrumental in helping me build a secure financial foundation. Their strategic approach and ongoing support have given me peace of mind about my long-term goals.',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Medical Professional',
      location: 'Boston, MA',
      image: 'RK',
      rating: 5,
      text: 'Between my demanding career and family commitments, I needed experts I could trust completely. The team handles everything professionally and keeps me informed without overwhelming me with details.',
      gradient: 'from-indigo-400 to-indigo-600',
    },
  ];

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

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.testimonial-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: cardsRef.current,
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-16 text-center lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#C6A664]/10 px-4 py-2 text-sm font-semibold text-[#C6A664]">
            <FiStar className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#0A2342] sm:text-5xl lg:text-6xl">
            What our clients{' '}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#8B7355] bg-clip-text text-transparent">
              say
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Real experiences from real people who trusted us with their
            investment journey.
          </p>
        </div>

        {/* Featured testimonial carousel */}
        <div className="mb-16 lg:mb-20">
          <div className="relative mx-auto max-w-4xl">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:p-12">
              {/* Quote icon */}
              <div className="absolute right-8 top-8 opacity-5">
                <FiYoutube className="h-24 w-24 text-[#C6A664] lg:h-32 lg:w-32" />
              </div>

              <div className="relative z-10">
                {/* Star rating - top */}
                <div className="mb-6 flex justify-center gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="h-6 w-6 fill-[#C6A664] text-[#C6A664]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="mb-8 text-center text-xl leading-relaxed text-gray-700 lg:text-2xl">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                {/* Avatar and info - centered */}
                <div className="flex flex-col items-center gap-4">
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonials[activeIndex].gradient} text-xl font-bold text-white shadow-lg`}
                  >
                    {testimonials[activeIndex].image}
                  </div>
                  <div className="text-center">
                    <h3 className="mb-1 text-xl font-bold text-[#0A2342]">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-base text-gray-600">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="group absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white p-3 shadow-lg transition-all duration-300 hover:border-[#C6A664] hover:bg-[#C6A664] lg:p-4"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="group absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-gray-200 bg-white p-3 shadow-lg transition-all duration-300 hover:border-[#C6A664] hover:bg-[#C6A664] lg:p-4"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-white" />
            </button>

            {/* Dots navigation */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#C6A664]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div ref={cardsRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A664]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Star rating */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="h-5 w-5 fill-[#C6A664] text-[#C6A664]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-6 text-base leading-relaxed text-gray-700">
                  "{testimonial.text}"
                </p>

                {/* Avatar and info */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white`}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-[#0A2342]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple trust indicator */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-6 shadow-lg lg:flex-row lg:gap-8 lg:px-12">
            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-[#0A2342] lg:text-xl">
                Join over 1,000 satisfied investors
              </p>
              <p className="text-base text-gray-600">
                Start your investment journey with confidence
              </p>
            </div>
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-3 text-base font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:flex-shrink-0"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}