'use client'
import { useEffect } from 'react';

export default function GetStarted() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div 
        data-tf-live="01KAT2ACFKGSQXC31M18MHT5CR"
        className="w-full h-full"
      ></div>
    </div>
  );
}