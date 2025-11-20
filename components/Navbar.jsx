"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

/**
 * Navbar Component
 * Enterprise-level navigation with responsive design
 * 
 * Features:
 * - Smooth scroll-based styling
 * - GSAP-powered animations
 * - Professional slide-in mobile menu
 * - Accessibility compliant
 * - Performance optimized
 * - Keyboard navigation support
 * 
 * @component
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Refs for animation targets
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);

  // Navigation links configuration
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  /**
   * Check if route is active
   * @param {string} href - Route path
   * @returns {boolean}
   */
  const isActive = useCallback((href) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }, [pathname]);

  /**
   * Handle scroll events with throttling for performance
   */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Initial entrance animations
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance from left
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Nav links staggered entrance
      if (linksRef.current && linksRef.current.children.length > 0) {
        gsap.from(linksRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // CTA button entrance from right
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          x: 30,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.4,
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  /**
   * Close mobile menu on route change
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /**
   * Handle escape key to close mobile menu
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A2342]/95 backdrop-blur-lg shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 sm:h-24 lg:h-28 items-center justify-between">
            
            {/* ========================================
                LOGO - LEFT
                ======================================== */}
            <div ref={logoRef} className="relative z-50 flex-shrink-0">
              <Link
                href="/"
                className="group flex items-center"
                aria-label="Gainvestor Home"
              >
                <div className="relative">
                  <Image
                    src="/l.png"
                    alt="Gainvestor"
                    width={220}
                    height={62}
                    className="h-12 sm:h-16 md:h-18 lg:h-20 xl:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-lg bg-[#C6A664]/0 blur-xl transition-all duration-300 group-hover:bg-[#C6A664]/20" />
                </div>
              </Link>
            </div>

            {/* ========================================
                NAVIGATION LINKS - CENTER (Desktop)
                ======================================== */}
            <div
              ref={linksRef}
              className="hidden lg:flex items-center gap-6 xl:gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative py-2"
                >
                  <span
                    className={`text-sm xl:text-base font-semibold transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-[#C6A664]"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] transition-all duration-300 ${
                      isActive(link.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* ========================================
                CTA BUTTON - RIGHT (Desktop)
                ======================================== */}
            <div ref={ctaRef} className="hidden lg:flex items-center gap-4">
              <Link
                href="https://calendly.com/ozgainvestor/welcome-call"
                className="group relative px-6 xl:px-8 py-3 xl:py-3.5 bg-gradient-to-r from-[#C6A664] to-[#D4B876] text-[#0A2342] text-sm xl:text-base font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A664]/40 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Hover overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>

            {/* ========================================
                MOBILE MENU BUTTON
                ======================================== */}
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#C6A664]/10 text-white transition-all duration-300 hover:bg-[#C6A664]/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C6A664]/50"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="relative w-6 h-6 sm:w-7 sm:h-7">
                  {/* Animated hamburger icon */}
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0 -translate-x-1/2"
                        : "-translate-y-2 -translate-x-1/2"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 -translate-x-1/2"
                        : "-translate-x-1/2"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-rotate-45 translate-y-0 -translate-x-1/2"
                        : "translate-y-2 -translate-x-1/2"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ========================================
          MOBILE MENU COMPONENT
          ======================================== */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
      />
    </>
  );
}

/**
 * MobileMenu Component
 * Professional slide-in drawer menu
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Menu open state
 * @param {Function} props.onClose - Close handler
 * @param {Array} props.navLinks - Navigation links
 * @param {Function} props.isActive - Active route checker
 */
function MobileMenu({ isOpen, onClose, navLinks, isActive }) {
  const backdropRef = useRef(null);
  const drawerRef = useRef(null);
  const contentRef = useRef(null);

  /**
   * Animate menu open/close
   */
  useEffect(() => {
    if (!backdropRef.current || !drawerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Prevent body scroll
        document.body.style.overflow = "hidden";

        // Backdrop fade in
        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Drawer slide in from right
        gsap.to(drawerRef.current, {
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        // Content stagger animation
        gsap.from(contentRef.current.children, {
          opacity: 0,
          x: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2,
        });
      } else {
        // Restore body scroll
        document.body.style.overflow = "unset";

        // Drawer slide out
        gsap.to(drawerRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
        });

        // Backdrop fade out
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Don't render if not open (after animation completes)
  if (!isOpen && drawerRef.current) {
    const style = window.getComputedStyle(drawerRef.current);
    if (style.transform === "matrix(1, 0, 0, 1, 0, 0)") return null;
  }

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
      id="mobile-menu"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-[#0A2342]/95 backdrop-blur-md opacity-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-[85vw] max-w-sm translate-x-full bg-gradient-to-b from-[#0A2342] to-[#0d2d54] shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C6A664] blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#C6A664] blur-3xl" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 flex h-full flex-col px-6 py-8 sm:px-8 sm:py-12"
        >
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Navigation
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876]" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="group relative block"
              >
                <div
                  className={`flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-[#C6A664]/20 text-[#C6A664]"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-lg font-semibold sm:text-xl">
                    {link.name}
                  </span>
                  
                  {/* Arrow indicator */}
                  <FiArrowRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive(link.href)
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
                
                {/* Active indicator */}
                {isActive(link.href) && (
                  <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#C6A664] to-[#D4B876]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 space-y-4">
            <Link
              href="getstarted"
              onClick={onClose}
              className="group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-6 py-4 text-center text-base font-bold text-[#0A2342] transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A664]/40 hover:scale-105 sm:text-lg"
            >
              <span className="relative z-10">Get Started</span>
              <FiArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            {/* Contact Info */}
            <div className="text-center text-sm text-white/60">
              <p>Questions? Call us</p>
              <a
                href="tel:+61426000770"
                className="font-semibold text-[#C6A664] transition-colors hover:text-[#D4B876]"
              >
                0426 000 770
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Performance optimizations applied:
 * 
 * 1. Throttled scroll handler with requestAnimationFrame
 * 2. GSAP Context API for automatic cleanup
 * 3. Conditional rendering for mobile menu
 * 4. Memoized isActive callback
 * 5. Passive event listeners
 * 6. Keyboard navigation support (Escape key)
 * 7. Automatic menu close on route change
 * 8. Body scroll lock when menu open
 * 9. GPU-accelerated transforms
 * 10. Proper ARIA attributes for accessibility
 */