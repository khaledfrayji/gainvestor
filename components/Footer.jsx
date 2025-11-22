'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative  bg-[#0A2342] text-[#1F2937]">
      {/* Subtle diagonal pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:18px_18px] opacity-[0.15]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col items-start gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/l.png" // replace with your Gainvestor logo
              alt="Gainvestor"
              width={160}
              height={40}
             
              priority
            />
          </Link>

          {/* Socials + Contact */}
          <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Social href="https://www.facebook.com/nabil.farha.272489/" className="" label="Facebook" Icon={FiFacebook} />
              <Social href="https://www.instagram.com/gainvestor1/" label="Instagram" Icon={FiInstagram} />
              <Social href="https://www.linkedin.com/in/nabil-farha-gainvestor/" label="LinkedIn" Icon={FiLinkedin} />
              <Social href="https://www.tiktok.com/@gainvestor" label="TikTok" Icon={FaTiktok} />
              <Social href="https://wa.me/61433199937" label="WhatsApp" Icon={FaWhatsapp} />
            </div>

            {/* Phone */}
            <div className="text-base font-semibold text-gray-200">
              Call Us: <span className="font-bold">0433 199 937</span>
            </div>
          </div>
        </div>

      

        {/* Middle Section */}
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:gap-6 lg:py-12">
          {/* Email Section */}
          <div className="md:col-span-2">
            <p className="mb-3 text-lg text-gray-300">Let’s start working together</p>
            <a
              href="mailto:sales@gainvestor.com.au"
              className="block text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl md:text-5xl"
            >
              sales@gainvestor.com.au
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300 sm:w-80 sm:justify-self-end">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative border-t border-gray-500 py-5 text-center">
          <p className="text-xs text-gray-300 sm:text-sm">
            © {new Date().getFullYear()} Gainvestor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, Icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A664] text-white transition hover:opacity-90 sm:h-12 sm:w-12"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block py-1 text-base hover:text-gray-300"
    >
      {children}
    </Link>
  );
}
