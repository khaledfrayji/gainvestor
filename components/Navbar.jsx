"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = useCallback(
    (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname]
  );

  // header bg on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  useEffect(() => setIsOpen(false), [pathname]);

  // body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, [isOpen]);

  // Esc to close + focus trap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && isOpen && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a,button,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // autofocus first link when opening
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const firstLink = panelRef.current.querySelector("a,button");
    firstLink?.focus();
  }, [isOpen]);

  // simple swipe-to-close (right swipe)
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    let startX = 0, deltaX = 0;
    const onStart = (e) => (startX = e.touches?.[0]?.clientX ?? 0);
    const onMove = (e) => (deltaX = (e.touches?.[0]?.clientX ?? 0) - startX);
    const onEnd = () => {
      if (deltaX > 80) setIsOpen(false);
      startX = 0; deltaX = 0;
    };
    const el = panelRef.current;
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, [isOpen]);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        "motion-safe:duration-300 motion-reduce:transition-none",
        isScrolled
          ? "bg-[#0A2342]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "bg-transparent",
      ].join(" ")}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo2.png"
              alt="Gainvestor"
              width={160}
              height={48}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={[
                    "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]/60",
                    active ? "text-white" : "text-white/80 hover:text-white",
                  ].join(" ")}
                >
                  {link.name}
                  <span
                    className={[
                      "pointer-events-none absolute left-3 right-3 -bottom-1 h-[2px] rounded",
                      "transition-opacity motion-safe:duration-300",
                      active ? "opacity-100 bg-[#C6A664]" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]/60 transition-colors"
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {!isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* overlay */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]",
          "transition-opacity motion-safe:duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* FULL-SCREEN LEFT DRAWER */}
      <aside
        id="mobile-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={[
          "lg:hidden fixed inset-0 z-50",
          "flex flex-col",
          // panel (left -> right)
          "will-change-transform translate-x-[-100%]",
          "bg-[#0A2342] text-white",
          "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]", // smooth easeOut
          "motion-reduce:transition-none",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* header inside drawer */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <Image src="/logo2.png" alt="Gainvestor" width={160} height={48} className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]/60"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* nav links */}
        <nav className="px-4 sm:px-6 pt-2 pb-8 overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block rounded-xl px-4 py-4 text-lg font-medium",
                      "transition-colors",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A664]/60",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/90 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* optional footer info / socials */}
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
            <p className="mb-2">© {new Date().getFullYear()} Gainvestor</p>
            <p>Professional. Transparent. Human.</p>
          </div>
        </nav>
      </aside>
    </nav>
  );
}
