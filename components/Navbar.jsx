"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A2342]/95 backdrop-blur-lg shadow-xl border-b border-[#C6A664]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src={"/logo2.png"}
                alt="GainVestor.png"
                width={90}
                height={90}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[#0A2342] bg-[#C6A664]"
                    : "text-white hover:text-[#0A2342] hover:bg-[#C6A664]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section - CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#C6A664] to-[#D4B876] text-[#0A2342] font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-[#C6A664] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C6A664] transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-[#0A2342]/98 backdrop-blur-lg border-t border-[#C6A664]/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                isActive(link.href)
                  ? "text-[#0A2342] bg-[#C6A664]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="block w-full text-center mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C6A664] to-[#D4B876] text-[#0A2342] font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}