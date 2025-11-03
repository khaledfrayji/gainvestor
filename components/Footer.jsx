'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Our Team', href: '/team' },
      { name: 'Testimonials', href: '/testimonials' },
    ],
    services: [
      { name: 'Investment Properties', href: '/services/investment' },
      { name: 'Portfolio Management', href: '/services/portfolio' },
      { name: 'Market Analysis', href: '/services/analysis' },
      { name: 'Property Consultation', href: '/services/consultation' },
      { name: 'Financing Options', href: '/services/financing' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/nabil.farha.272489/' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/gainvestor1/' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/nabil-farha-gainvestor/' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@gainvestor' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/61433199937' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Company info - 4 columns */}
              <div className="lg:col-span-4">
                <Link href="/" className="mb-6 inline-block">
                  <div className="relative h-42 w-40">
                    <Image
                      src="/logo2.png"
                      alt="Gainvestor Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  Empowering investors to build wealth through smart real estate
                  decisions. Your trusted partner in property investment.
                </p>

                {/* Contact info */}
                <div className="space-y-3 text-sm">
                  <a
                    href="mailto:info@gainvestor.com"
                    className="group flex items-center gap-3 text-white/70 transition-colors hover:text-[#C6A664]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-[#C6A664]/20">
                      <FiMail className="h-4 w-4" />
                    </div>
                    <span>info@gainvestor.com</span>
                  </a>
                  <a
                    href="tel:+61426000770"
                    className="group flex items-center gap-3 text-white/70 transition-colors hover:text-[#C6A664]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-[#C6A664]/20">
                      <FiPhone className="h-4 w-4" />
                    </div>
                    <span>0426 000 770</span>
                  </a>
                  <a
                    href="tel:+61433199937"
                    className="group flex items-center gap-3 text-white/70 transition-colors hover:text-[#C6A664]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-[#C6A664]/20">
                      <FiPhone className="h-4 w-4" />
                    </div>
                    <span>0433 199 937</span>
                  </a>
                  <div className="group flex items-start gap-3 text-white/70">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <FiMapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">GainVestor Pty Ltd</p>
                      <p>Level 49, 8 Parramatta Square</p>
                      <p>10 Darcy Street, Parramatta NSW 2150</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-6 flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-all duration-300 hover:bg-[#C6A664] hover:text-white hover:scale-110"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Links grid - 8 columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
                {/* Company */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-[#C6A664]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-[#C6A664]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                    Support
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-[#C6A664]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              {/* Copyright */}
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Gainvestor. All rights reserved.
              </p>

              {/* Legal links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/50 transition-colors hover:text-[#C6A664]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}