'use client';

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 grid place-items-center bg-[#0A2342]"
    >
      {/* Wrapper */}
      <div className="flex flex-col items-center gap-8 px-6">
        {/* Mark + spinner ring */}
        <div className="relative h-28 w-28 md:h-32 md:w-32">
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-[#C6A664] opacity-[0.08] blur-2xl" />
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent">
            <div className="absolute inset-0 rounded-full border-2 border-t-[#C6A664] border-r-[#C6A664] animate-spin-smooth" />
          </div>
          {/* Monogram / replace with <img src="/logo.svg" .../> if you like */}
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#C6A664] to-[#B99C58] text-[#0A2342] shadow-xl md:h-20 md:w-20">
              <span className="text-2xl font-extrabold md:text-3xl">G</span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="text-center">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            Loading
          </h2>
          <p className="mt-2 text-white/60 text-sm md:text-base">
            Preparing your experience…
          </p>
        </div>

        {/* Indeterminate bar (subtle) */}
        <div className="w-64 md:w-80 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#C6A664] to-[#B99C58] animate-progress" />
        </div>

        {/* Screen reader text */}
        <span className="sr-only">Loading content, please wait…</span>
      </div>

      {/* Decorative background (very subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#C6A664] blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#C6A664] blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes spin-smooth {
          to { transform: rotate(360deg); }
        }
        .animate-spin-smooth {
          animation: spin-smooth 1.4s linear infinite;
        }

        @keyframes progress {
          0% { transform: translateX(-120%); }
          60% { transform: translateX(15%); }
          100% { transform: translateX(120%); }
        }
        .animate-progress {
          animation: progress 1.8s ease-in-out infinite;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-smooth,
          .animate-progress {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
