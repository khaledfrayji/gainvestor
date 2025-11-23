'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiLinkedin, 
  FiAward, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget 
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function CEOSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power3.out',
      });

      // Content animation
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Stats animation
      gsap.from(statsRef.current, {
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: FiAward,
      label: 'Licensed Buyer\'s Agent',
    },
    {
      icon: FiTrendingUp,
      label: '15+ Years Experience',
    },
    {
      icon: FiUsers,
      label: '500+ Happy Clients',
    },
    {
      icon: FiTarget,
      label: '$200M+ Investments',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C6A664] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0A2342] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2 text-sm font-semibold text-[#C6A664]">
            <FiUsers className="h-4 w-4" />
            <span>Meet The CEO</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0A2342] sm:text-5xl">
            Leadership & Vision
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2342] to-[#0d2d54] p-1">
              <div className="overflow-hidden rounded-3xl bg-white">
                <Image
                  src="/ceo.png"
                  alt="Nabil Farha - CEO of GainVestor"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-[#C6A664]/20 bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] p-3">
                  <FiAward className="h-6 w-6 text-[#0A2342]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Accredited</p>
                  <p className="text-lg font-bold text-[#0A2342]">Buyer's Agent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="flex flex-col justify-center">
            <h3 className="mb-2 text-3xl font-bold text-[#0A2342] sm:text-4xl">
              Nabil Farha
            </h3>
            <p className="mb-6 text-xl font-semibold text-[#C6A664]">
              Founder & CEO, GainVestor Property Group
            </p>

            <div className="mb-8 space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                With over 15 years of experience in the Australian property market, 
                Nabil Farha has helped hundreds of investors build substantial wealth 
                through strategic property acquisitions.
              </p>
              <p>
                As a licensed and accredited buyer's agent, Nabil combines deep market 
                knowledge with a client-first approach, ensuring every investment 
                decision is backed by thorough research and expert analysis.
              </p>
              <p>
                His passion for property investment and commitment to client success 
                has positioned GainVestor as a trusted partner for investors seeking 
                to build lasting wealth through real estate.
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nabil-farha-gainvestor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2342] text-white transition-all duration-300 hover:scale-110 hover:bg-[#C6A664]"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <div>
                <p className="text-sm font-semibold text-gray-600">Connect on</p>
                <p className="text-base font-bold text-[#0A2342]">LinkedIn</p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative rounded-2xl border-l-4 border-[#C6A664] bg-gray-50 p-6">
              <svg
                className="absolute left-4 top-4 h-8 w-8 text-[#C6A664]/20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
              </svg>
              <p className="relative z-10 text-lg italic text-gray-700">
                "Success in property investment isn't about luck, it's about knowledge, 
                strategy, and having the right guidance. I'm here to provide all three."
              </p>
              <p className="mt-4 font-semibold text-[#0A2342]">— Nabil Farha</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}