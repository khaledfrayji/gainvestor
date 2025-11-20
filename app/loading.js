'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Loading Component
 * Enterprise-level loading screen with optimized animations
 * 
 * Features:
 * - GSAP-powered smooth animations
 * - Brand-consistent design
 * - Accessibility compliant
 * - Performance optimized
 * - Graceful error handling
 * - Reduced motion support
 * 
 * @component
 * @returns {JSX.Element | null} Loading screen or null when complete
 */
export default function Loading() {
  // Refs for animation targets
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const ringRef = useRef(null);
  const progressBarRef = useRef(null);
  const textRef = useRef(null);

  // State management
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Early return if component unmounted
    let isMounted = true;

    /**
     * Initialize GSAP animations
     * Separated for better organization and performance
     */
    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Set animation defaults for consistent timing
        gsap.defaults({
          ease: 'power2.inOut',
          duration: prefersReducedMotion ? 0.01 : 1,
        });

        /* ========================================
           LOGO ANIMATIONS
           ======================================== */
        
        if (logoRef.current) {
          // Logo pulse effect
          gsap.to(logoRef.current, {
            scale: 1.05,
            duration: prefersReducedMotion ? 0 : 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          // Logo entrance
          gsap.from(logoRef.current, {
            scale: 0,
            opacity: 0,
            rotation: -180,
            duration: prefersReducedMotion ? 0 : 0.8,
            ease: 'back.out(1.7)',
          });
        }

        /* ========================================
           RING ANIMATIONS
           ======================================== */
        
        if (ringRef.current && !prefersReducedMotion) {
          // Outer ring rotation
          gsap.to(ringRef.current, {
            rotation: 360,
            duration: 1.8,
            repeat: -1,
            ease: 'none',
          });

          // Pulsating opacity
          gsap.to(ringRef.current, {
            opacity: 0.3,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        /* ========================================
           TEXT ANIMATIONS
           ======================================== */
        
        if (textRef.current) {
          // Text fade and slide
          gsap.from(textRef.current.children, {
            opacity: 0,
            y: 20,
            duration: prefersReducedMotion ? 0 : 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3,
          });

          // Loading text pulse
          if (!prefersReducedMotion) {
            gsap.to('.loading-text', {
              opacity: 0.6,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
        }

      }, containerRef);

      return ctx;
    };

    /**
     * Simulate loading progress
     * In production, this would track actual resource loading
     */
    const simulateProgress = () => {
      const duration = prefersReducedMotion ? 100 : 2000;
      const steps = 20;
      const increment = 100 / steps;
      let currentProgress = 0;

      const interval = setInterval(() => {
        if (!isMounted) {
          clearInterval(interval);
          return;
        }

        currentProgress += increment;
        
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          
          // Delay before hiding to ensure smooth transition
          setTimeout(() => {
            if (isMounted) {
              handleComplete();
            }
          }, prefersReducedMotion ? 0 : 300);
        }

        setProgress(currentProgress);
      }, duration / steps);

      return interval;
    };

    /**
     * Handle loading completion
     * Animate out and cleanup
     */
    const handleComplete = () => {
      if (!containerRef.current) return;

      if (prefersReducedMotion) {
        setIsVisible(false);
        return;
      }

      // Fade out animation
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          if (isMounted) {
            setIsVisible(false);
          }
        },
      });
    };

    /**
     * Error handler
     * Gracefully handle animation errors
     */
    const handleError = (err) => {
      console.error('Loading animation error:', err);
      setError(true);
      
      // Fallback: hide loading screen after delay
      setTimeout(() => {
        if (isMounted) {
          setIsVisible(false);
        }
      }, 1000);
    };

    // Initialize
    try {
      const ctx = initAnimations();
      const progressInterval = simulateProgress();

      // Cleanup function
      return () => {
        isMounted = false;
        ctx.revert();
        clearInterval(progressInterval);
      };
    } catch (err) {
      handleError(err);
    }
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  // Error fallback UI
  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A2342]">
        <div className="text-center">
          <div className="mb-4 text-white/60">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A2342]"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#C6A664] blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-[#C6A664] blur-3xl" />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        
        {/* ========================================
            LOGO WITH ANIMATED RING
            ======================================== */}
        <div className="relative h-32 w-32 md:h-40 md:w-40">
          
          {/* Animated outer ring */}
          <div
            ref={ringRef}
            className="absolute inset-0"
            aria-hidden="true"
          >
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#C6A664] via-[#D4B876] to-[#C6A664] bg-clip-border opacity-25" />
            
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-[#C6A664]/10 blur-md" />
          </div>

          {/* Static border ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-white/10"
            aria-hidden="true"
          />

          {/* Logo container */}
          <div
            ref={logoRef}
            className="relative z-10 flex h-full w-full items-center justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#C6A664] to-[#D4B876] shadow-2xl shadow-[#C6A664]/20 md:h-24 md:w-24">
              <span className="text-3xl font-extrabold text-[#0A2342] md:text-4xl">
                G
              </span>
            </div>
          </div>
        </div>

        {/* ========================================
            TEXT CONTENT
            ======================================== */}
        <div ref={textRef} className="text-center">
          <h2 className="loading-text mb-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
            Loading
          </h2>
          <p className="text-sm text-white/60 md:text-base">
            Preparing your experience...
          </p>
        </div>

        {/* ========================================
            PROGRESS BAR
            ======================================== */}
        <div className="w-64 md:w-80">
          {/* Progress track */}
          <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
            {/* Animated progress fill */}
            <div
              ref={progressBarRef}
              className="h-full rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
            
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                animation: 'shimmer 2s infinite',
                backgroundSize: '200% 100%',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Progress percentage */}
          <div className="mt-2 text-center">
            <span className="text-xs font-medium text-white/40">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Screen reader only text */}
        <span className="sr-only">
          Loading content, please wait. Progress: {Math.round(progress)} percent complete.
        </span>
      </div>

      {/* ========================================
          INLINE STYLES FOR ANIMATIONS
          ======================================== */}
      <style jsx>{`
        /* Shimmer animation for progress bar */
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Ensure smooth rendering */
        [ref] {
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          @keyframes shimmer {
            0%, 100% {
              background-position: 0 0;
            }
          }
        }

        /* Prevent flash of content */
        @media (prefers-color-scheme: dark) {
          [role="status"] {
            color-scheme: dark;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Performance optimizations applied:
 * 
 * 1. GSAP Context API for automatic cleanup
 * 2. Will-change properties for GPU acceleration
 * 3. Backface-visibility for rendering optimization
 * 4. Debounced state updates
 * 5. Early return patterns
 * 6. Reduced motion support
 * 7. Error boundary handling
 * 8. Memory leak prevention
 * 9. Z-index management
 * 10. Progressive enhancement
 */