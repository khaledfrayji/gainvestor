'use client'
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 leading-tight">
            GAIN INVESTOR PROPERTY GROUP
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-2 sm:mb-3 px-2">
            Our Pledge is to help you find the right investment properties and expand your investment portfolio.
          </p>
          <p className="text-gray-400 text-sm sm:text-base px-2">
            Please take a moment to fill out this form so we can understand your goals and guide you properly.
          </p>
        </div>

        {/* Typeform Embed Container */}
        <div className="w-full rounded-lg shadow-2xl overflow-hidden">
          <div 
            data-tf-live="01KAT2ACFKGSQXC31M18MHT5CR"
            data-tf-opacity="0"
            data-tf-hide-headers
            data-tf-hide-footer
            className="w-full"
            style={{ 
              minHeight: '500px',
              height: 'calc(100vh - 320px)',
              maxHeight: '800px'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}