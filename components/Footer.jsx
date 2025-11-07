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
  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/nabil.farha.272489/' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/gainvestor1/' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/nabil-farha-gainvestor/' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@gainvestor' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/61433199937' },
  ];

  const usefulLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        
        {/* Logo & Quote */}
        <div>
          <Link href="/" className="block mb-4">
            <div className="relative h-20 w-32">
              <Image
                src="/logo2.png"
                alt="Gainvestor Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed italic">
            The right property at the right price , not luck, but expert representation.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#C6A664]">
            Useful Links
          </h3>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
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

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#C6A664]">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FiMail className="h-4 w-4 text-[#C6A664]" />
              <a href="mailto:info@gainvestor.com" className="hover:text-[#C6A664]">
                info@gainvestor.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="h-4 w-4 text-[#C6A664]" />
              <a href="tel:+61426000770" className="hover:text-[#C6A664]">
                0426 000 770
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="h-4 w-4 mt-0.5 text-[#C6A664]" />
              <span>
                Level 49, 8 Parramatta Square <br />
                10 Darcy Street, Parramatta NSW 2150
              </span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#C6A664]">
            Follow Us
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A664]/40 text-white/80 hover:bg-[#C6A664] hover:text-[#0A2342] transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Gainvestor. All rights reserved.
      </div>
    </footer>
  );
}
