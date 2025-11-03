'use client';

import { FiCheckCircle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
      {/* Animated background gradients */}
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element-1 absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#C6A664]/10 blur-3xl" />
        <div className="floating-element-2 absolute -right-20 top-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="floating-element-3 absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C6A664]/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Trust indicators */}
        <div className="hero-badge mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {/* Social proof badge */}
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#0A2342] bg-gradient-to-br from-[#C6A664] to-[#8B7355]"
                >
                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-white/90">
              <FiCheckCircle className="h-4 w-4 text-[#C6A664]" />
              <span>1000+ Successful Investors</span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="hero-headline mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="hero-word">Ready to </span>
          <span className="relative mx-2 inline-block">
            <span className="hero-word-highlight relative z-10 bg-gradient-to-r from-[#C6A664] via-[#D4B876] to-[#C6A664] bg-clip-text font-bold italic text-transparent">
              grow
            </span>
            <span className="absolute -bottom-1 left-0 h-3 w-full bg-[#C6A664]/20 blur-sm" />
          </span>
          <span className="hero-word">your wealth</span>
          <br className="hidden sm:block" />
          <span className="hero-word">through smart property</span>
          <br className="hidden sm:block" />
          <span className="hero-word">investments?</span>
        </h1>

        {/* Subtext */}
        <p className="hero-subtext mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:mt-8 md:text-xl">
          At{' '}
          <span className="font-semibold text-white">Gainvestor</span>, we help you
          discover premium opportunities, build a diversified portfolio, and achieve
          financial freedom with guidance from trusted industry experts.
        </p>

        {/* CTA buttons */}
        <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12">
          <a
            href="#contact"
            className="hero-cta-primary group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 text-base font-semibold text-[#0A2342] shadow-lg shadow-[#C6A664]/20 hover:shadow-xl hover:shadow-[#C6A664]/30 sm:px-10"
          >
            <span className="relative z-10">Book a Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#about"
            className="hero-cta-secondary group relative overflow-hidden rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm  hover:border-white/40 hover:bg-white/10 sm:px-10"
          >
            <span className="relative z-10">Learn How It Works</span>
          </a>
        </div>

        {/* Additional trust elements */}
        <div className="hero-trust-badges mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60 md:mt-16">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="h-4 w-4 text-[#C6A664]" />
            <span>No hidden fees</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <FiCheckCircle className="h-4 w-4 text-[#C6A664]" />
            <span>Expert guidance</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <FiCheckCircle className="h-4 w-4 text-[#C6A664]" />
            <span>Proven track record</span>
          </div>
        </div>
      </div>

    </section>
  );
}