"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Gainvestor">
            <Image
              src="/logo2.png"
              alt="Gainvestor"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={[
                  "relative text-lg font-medium transition-colors duration-200",
                  isActive(link.href)
                    ? "text-white after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-[#C6A664] after:rounded-full"
                    : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <MobileMenu navLinks={navLinks} isActive={isActive} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ navLinks, isActive }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center p-2 text-white hover:text-[#C6A664] transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        ) : (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A2342]/95 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={[
                "text-3xl font-semibold tracking-wide transition-colors",
                isActive(link.href)
                  ? "text-[#C6A664]"
                  : "text-white hover:text-[#C6A664]",
              ].join(" ")}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
