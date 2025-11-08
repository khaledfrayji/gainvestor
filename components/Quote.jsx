"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiHeart } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (quoteRef.current) {
        gsap.from(quoteRef.current.children, {
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          clearProps: "all",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-t from-white to-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Big quote icon behind text */}
      <svg
        className="absolute left-8 top-1/2 -translate-y-1/2 h-[350px] w-[350px] text-[#C6A664]/10 -z-0"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div ref={quoteRef}>
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full bg-[#C6A664]/10 p-4 backdrop-blur-sm">
              <FiHeart className="h-8 w-8 text-[#C6A664]" />
            </div>
          </div>

          {/* Main quote */}
          <blockquote className="mb-8 text-3xl italic font-bold leading-relaxed text-[#0A2342] sm:text-4xl lg:text-5xl">
            Investing shouldn’t feel{" "}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              complicated
            </span>{" "}
            or{" "}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              risky
            </span>{" "}
            it should feel empowering, and actually{" "}
            <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
              enjoyable
            </span>
          </blockquote>

          {/* Supporting text */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#0A2342]/70 sm:text-xl">
            Our team works tirelessly behind the scenes to uncover opportunities
            that truly fit you. We guide, support, and simplify every step, so
            you can focus on growing your wealth with confidence and clarity.
            Professional. Transparent. Human.
          </p>
        </div>
      </div>
    </section>
  );
}
