'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // Refs for animations
  const heroRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const contactCardsRef = useRef([]);
  const infoContainerRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const ctx = gsap.context(() => {
      // Animated background orbs
      gsap.to(orb1Ref.current, {
        x: 100,
        y: -100,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(orb2Ref.current, {
        x: -80,
        y: 80,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(orb3Ref.current, {
        x: 60,
        y: 60,
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'none',
      });

      // Hero content animations
      const heroTimeline = gsap.timeline();
      heroTimeline
        .from('.hero-badge', {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: 'back.out(1.7)',
        })
        .from('.hero-title', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.hero-subtitle', {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.4');

      // Contact cards stagger animation
      gsap.from(contactCardsRef.current, {
        scrollTrigger: {
          trigger: contactCardsRef.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Info container animation
      if (infoContainerRef.current) {
        gsap.from(infoContainerRef.current.children, {
          scrollTrigger: {
            trigger: infoContainerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // CTA section animation
      if (ctaSectionRef.current) {
        gsap.from(ctaSectionRef.current.children, {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Track TikTok events
  const trackTikTokEvent = (eventName) => {
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track(eventName);
    }
  };

  // Track CTA button click
  const handleCTAClick = () => {
    trackTikTokEvent('ClickButton');
    // The link will open normally
  };

  // Track phone clicks
  const handlePhoneClick = () => {
    trackTikTokEvent('Contact');
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: ['info@gainvestor.com'],
      link: 'mailto:info@gainvestor.com',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: ['0426 000 770', '0433 199 937'],
      link: 'tel:+61426000770',
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: [
        'Level 49, 8 Parramatta Square',
        '10 Darcy Street, Parramatta NSW 2150',
      ],
      link: 'https://maps.google.com/?q=Level+49+8+Parramatta+Square+10+Darcy+Street+Parramatta+NSW+2150',
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: By Appointment'],
      link: null,
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/share/16eEqQDZs1/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/gainvestor1/' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/company/gainvestor/' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@investor.property.group?_r=1&_t=ZS-91ZHF2ipvOh' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/+61426000770' },
  ];

  return (
    <>
      {/* TikTok Pixel */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            
            ttq.load('D4H93TJC77UEBGICSNA0');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="scroll-smooth overflow-hidden bg-white">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0d2d54] to-[#0A2342] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
        >
           {/* Background Image with proper overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="City skyline at sunset"
            fill
            className="object-cover opacity-30"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/50 via-[#0A2342]/70 to-[#0A2342]" />
        </div>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large animated orbs */}
            <div 
              ref={orb1Ref}
              className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C6A664]/10 blur-3xl"
            />
            <div 
              ref={orb2Ref}
              className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
            />
            <div 
              ref={orb3Ref}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A664]/5 blur-2xl"
            />
          </div>

          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
          
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#C6A664]/20 bg-[#C6A664]/10 px-5 py-2.5 text-sm font-semibold text-[#C6A664] backdrop-blur-sm">
              <FiMessageSquare className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>

            <h1 className="hero-title mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Let's discuss your{' '}
              <span className="bg-gradient-to-r from-[#C6A664] to-[#D4B876] bg-clip-text text-transparent">
                investment goals
              </span>
            </h1>

            <p className="hero-subtitle mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 sm:text-2xl">
              Ready to start your investment journey? Our accredited buyer's agents are here to help you find the perfect property.
            </p>
          </div>
        </section>

      
        {/* Office Info Section */}
        <section className="relative overflow-hidden bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          
          {/* Subtle background animation */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <div ref={infoContainerRef} className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#0A2342] sm:text-4xl">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600">
                We're here to help you achieve your investment goals
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Office Details */}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-[#0A2342]">
                  Our Office
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 font-semibold text-[#0A2342]">Address</h4>
                    <p className="text-gray-600">
                      GainVestor Pty Ltd<br />
                      Level 49, 8 Parramatta Square<br />
                      10 Darcy Street<br />
                      Parramatta NSW 2150
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-[#0A2342]">Contact</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Email: info@gainvestor.com</p>
                      <p>
                        Phone: <a 
                          href="tel:+61426000770" 
                          onClick={handlePhoneClick}
                          className="hover:text-[#C6A664] transition-colors"
                        >
                          0426 000 770
                        </a>
                      </p>
                      <p>
                        Phone: <a 
                          href="tel:+61433199937"
                          onClick={handlePhoneClick}
                          className="hover:text-[#C6A664] transition-colors"
                        >
                          0433 199 937
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-[#0A2342]">Follow Us</h4>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#C6A664] hover:text-white hover:scale-110"
                            aria-label={social.name}
                            onMouseEnter={(e) => {
                              gsap.to(e.currentTarget, {
                                rotate: 360,
                                duration: 0.6,
                                ease: 'back.out(1.7)',
                              });
                            }}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map with CTA */}
              <div className="flex flex-col gap-6">
                {/* CTA Card */}
                <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#0A2342] to-[#0d2d54] p-8 shadow-sm">
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    Ready to Get Started?
                  </h3>
                  <p className="mb-6 text-white/80">
                    Take the first step towards your investment success. Fill out our quick form and we'll get back to you within 24 hours.
                  </p>
                  <a
                    href="https://form.typeform.com/to/H7g8lHmO"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCTAClick}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#C6A664] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#D4B876] hover:shadow-xl hover:scale-105"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -4,
                        duration: 0.3,
                        ease: 'power2.out',
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                      });
                    }}
                  >
                    <FiMessageSquare className="h-5 w-5" />
                    <span>Contact Us Now</span>
                  </a>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
                  <div className="aspect-square bg-gray-200 lg:h-full lg:min-h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29640665.877589837!2d93.64804770275957!3d-24.923710520104134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60ef8eebf772de55%3A0x698914bc91a2b5e3!2sGainVestor!5e0!3m2!1sen!2sus!4v1762475413422!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gainvestor Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}