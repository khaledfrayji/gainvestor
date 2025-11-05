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
    <footer className="bg-gradient-to-b from-[#0A2342] to-[#0d2d54] text-white">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Top Section: Logo and Description */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <Link href="/" className="mb-4 inline-block">
                <div className="relative h-32 w-32">
                  <Image
                    src="/logo2.png"
                    alt="Gainvestor Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-sm text-white/70">
                Empowering investors to build wealth through smart real estate decisions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-all hover:bg-[#C6A664] hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links and Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@gainvestor.com"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                >
                  <FiMail className="h-4 w-4 flex-shrink-0" />
                  <span>info@gainvestor.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+61426000770"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                >
                  <FiPhone className="h-4 w-4 flex-shrink-0" />
                  <span>0426 000 770</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+61433199937"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#C6A664]"
                >
                  <FiPhone className="h-4 w-4 flex-shrink-0" />
                  <span>0433 199 937</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/60">
                  <FiMapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white/90">GainVestor Pty Ltd</p>
                    <p>Level 49, 8 Parramatta Square</p>
                    <p>10 Darcy Street, Parramatta NSW 2150</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0A2342]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Gainvestor. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:gap-6">
              {footerLinks.legal.map((link) => (
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
    </footer>
  );
}