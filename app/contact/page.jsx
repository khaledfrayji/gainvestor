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
    <div className="">
     
        

        {/* Typeform Embed Container */}
        <div className=" ">
          <div 
            data-tf-live="01KAT2ACFKGSQXC31M18MHT5CR"
            style={{ minHeight: '500px' }}
          ></div>
      
      </div>
    </div>
  );
}