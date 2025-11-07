'use client';

import { useState, useEffect, useRef } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for animations
  const heroRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const particlesRef = useRef([]);
  const contactCardsRef = useRef([]);
  const formContainerRef = useRef(null);
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

      // Floating particles animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: `${gsap.utils.random(-100, 100)}`,
            x: `${gsap.utils.random(-100, 100)}`,
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });

          gsap.to(particle, {
            opacity: gsap.utils.random(0.3, 0.7),
            duration: gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

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

      // Form container animation
      if (formContainerRef.current) {
        gsap.from(formContainerRef.current, {
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: -60,
          duration: 1,
          ease: 'power3.out',
        });
      }

      // Info container animation
      if (infoContainerRef.current) {
        gsap.from(infoContainerRef.current, {
          scrollTrigger: {
            trigger: infoContainerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: 60,
          duration: 1,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
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
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/nabil.farha.272489/' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/gainvestor1/' },
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/nabil-farha-gainvestor/' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@gainvestor' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/61433199937' },
  ];

  return (
    <>
      <style jsx>{`
        .input-field:focus {
          border-color: #C6A664;
          box-shadow: 0 0 0 3px rgba(198, 166, 100, 0.1);
        }

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

        {/* Quick Contact Cards */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (contactCardsRef.current[index] = el)}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C6A664]/30 hover:shadow-lg"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -8,
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
                    <div className="mb-4 inline-flex rounded-xl bg-[#C6A664]/10 p-3 transition-all duration-300 group-hover:bg-[#C6A664]/20">
                      <Icon className="h-6 w-6 text-[#C6A664]" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#0A2342]">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="block space-y-1 text-sm text-gray-600 transition-colors hover:text-[#C6A664]"
                      >
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </a>
                    ) : (
                      <div className="space-y-1 text-sm text-gray-600">
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="relative overflow-hidden bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Subtle background animation */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C6A664]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div ref={formContainerRef}>
                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-bold text-[#0A2342] sm:text-4xl">
                    Send us a message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 transition-all duration-300 focus:outline-none"
                        placeholder="John Doe"
                        onFocus={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1.02,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                        onBlur={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 transition-all duration-300 focus:outline-none"
                        placeholder="john@example.com"
                        onFocus={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1.02,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                        onBlur={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 transition-all duration-300 focus:outline-none"
                        placeholder="0400 000 000"
                        onFocus={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1.02,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                        onBlur={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.2,
                            ease: 'power2.out',
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all duration-300 focus:outline-none"
                      placeholder="Investment Property Inquiry"
                      onFocus={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1.02,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                      onBlur={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field w-full resize-none rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-900 transition-all duration-300 focus:outline-none"
                      placeholder="Tell us about your investment goals..."
                      onFocus={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1.02,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                      onBlur={(e) => {
                        gsap.to(e.currentTarget, {
                          scale: 1,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C6A664] to-[#D4B876] px-8 py-4 font-semibold text-[#0A2342] shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#0A2342] border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div ref={infoContainerRef}>
                <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
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
                        <p>Phone: 0426 000 770</p>
                        <p>Phone: 0433 199 937</p>
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

                <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
                  <div className="aspect-video bg-gray-200">
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