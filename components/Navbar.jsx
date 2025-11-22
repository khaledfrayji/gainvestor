"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";

/**
 * Navbar Component
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = useCallback(
    (href) => {
      return href === "/" ? pathname === "/" : pathname.startsWith(href);
    },
    [pathname]
  );

  // Scroll styling
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

  // Desktop animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      if (linksRef.current?.children?.length > 0) {
        gsap.from(linksRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      gsap.from(ctaRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // ESC closes menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
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
            {/* LOGO */}
            <div ref={logoRef} className="relative z-50 flex-shrink-0">
              <Link href="/" className="group flex items-center">
                <div className="relative">
                  <Image
                    src="/l.png"
                    alt="Logo"
                    width={300}
                    height={100}
                    className="h-20 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 -z-10 rounded-lg bg-[#C6A664]/0 blur-xl transition-all duration-300 group-hover:bg-[#C6A664]/20" />
                </div>
              </Link>
            </div>

            {/* DESKTOP LINKS */}
            <div ref={linksRef} className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="group relative py-2">
                  <span
                    className={`text-sm xl:text-base font-semibold transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-[#C6A664]"
                        : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#C6A664] to-[#D4B876] transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div ref={ctaRef} className="hidden lg:flex items-center gap-4">
              <Link
                href="https://form.typeform.com/to/H7g8lHmO"
                className="group relative px-6 xl:px-8 py-3 xl:py-3.5 bg-gradient-to-r from-[#C6A664] to-[#D4B876] text-[#0A2342] text-sm xl:text-base font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A664]/40 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4B876] to-[#C6A664] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="relative inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#C6A664]/10 text-white transition-all duration-300 hover:bg-[#C6A664]/20 hover:scale-105"
              >
                <span className="relative w-6 h-6 sm:w-7 sm:h-7">
                  {/* Top */}
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 -translate-x-1/2"
                        : "-translate-y-2 -translate-x-1/2"
                    }`}
                  />

                  {/* Middle */}
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100 -translate-x-1/2"
                    }`}
                  />

                  {/* Bottom */}
                  <span
                    className={`absolute left-1/2 top-1/2 block h-0.5 w-6 sm:w-7 bg-current transition-all ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-x-1/2"
                        : "translate-y-2 -translate-x-1/2"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
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
 * Mobile Menu
 */
function MobileMenu({ isOpen, onClose, navLinks, isActive }) {
  const menuRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.fromTo(
          linksContainerRef.current.children,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      } else {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="fixed inset-0 z-40 lg:hidden">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-[#0A2342]/95 backdrop-blur-lg animate-fadeIn"
        onClick={onClose}
      />

      {/* MENU */}
      <div
        ref={menuRef}
        className="absolute left-0 right-0 top-0 opacity-0 translate-y-[-20px]"
        style={{ paddingTop: "5rem" }}
      >
        <div className="mx-4 mt-4 rounded-2xl border border-[#C6A664]/20 bg-gradient-to-b from-[#0A2342] to-[#0d2d54] shadow-2xl overflow-hidden">
          <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8">
            {/* LINKS */}
            <nav ref={linksContainerRef} className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="group relative block opacity-0"
                >
                  <div
                    className={`flex items-center justify-between rounded-xl px-4 py-4 transition-all ${
                      isActive(link.href)
                        ? "bg-[#C6A664]/20 text-[#C6A664]"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-lg font-semibold">{link.name}</span>
                    <FiArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </Link>
              ))}
            </nav>

            {/* DIVIDER */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#C6A664]/30 to-transparent" />

            {/* CTA */}
            <Link
              href="https://form.typeform.com/to/H7g8lHmO"
              onClick={onClose}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-6 py-4 text-base font-bold text-[#0A2342] hover:shadow-xl transition-all"
            >
              Get Started
              <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* CONTACT */}
            <div className="mt-4 text-center text-sm text-white/60">
              <p>Questions? Call us</p>
              <a
                href="tel:+61426000770"
                className="font-semibold text-[#C6A664] hover:text-[#D4B876]"
              >
                0426 000 770
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
