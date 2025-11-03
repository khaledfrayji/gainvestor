'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    // Initial animation for navbar elements
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 }
    ).fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    );

    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (isMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll('.mobile-link'),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.2 }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setIsMenuOpen(false),
      });
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLinkLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              ref={logoRef}
              className="relative z-10 flex items-center"
            >
              <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={(el) => (linksRef.current[index] = el)}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                  className={`text-base font-medium transition-colors duration-300 relative group ${
                    isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-blue-400'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div
              ref={(el) => (linksRef.current[navLinks.length] = el)}
              className="hidden lg:block"
            >
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg'
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden z-50 p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose className="w-7 h-7" />
              ) : (
                <HiMenuAlt3 className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="mobile-link text-3xl sm:text-4xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="mobile-link mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;