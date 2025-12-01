'use client'
import { useEffect } from 'react';

export default function GetStarted() {
  useEffect(() => {
    // Initialize TikTok Pixel
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
      ttq.load('D4H93TJC77UEBGICSNA0');
      ttq.page();
    }(window, document, 'ttq');

    // Track form view
    window.ttq.track('ViewContent');

    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Typeform events
    const handleTypeformSubmit = () => {
      window.ttq.track('SubmitForm');
    };

    const handleTypeformReady = () => {
      window.ttq.track('FormReady');
    };

    window.addEventListener('typeform-submit', handleTypeformSubmit);
    window.addEventListener('typeform-ready', handleTypeformReady);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
      window.removeEventListener('typeform-submit', handleTypeformSubmit);
      window.removeEventListener('typeform-ready', handleTypeformReady);
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