'use client';

import { useState, useEffect, useRef } from 'react';
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
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

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
    <div className="">
     
        

        {/* Typeform Embed Container */}
        <div className=" ">
          <div 
            data-tf-live="01KAT2ACFKGSQXC31M18MHT5CR"
            style={{ minHeight: '500px' }}
          ></div>
      
      </div>
      <Footer/>
    </>
  );
}