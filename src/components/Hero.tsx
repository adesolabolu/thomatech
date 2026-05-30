import { ArrowRight, ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';
import { WHATSAPP_LINK, IMAGES } from '../lib/constants';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // Staggered text reveal: Headline lines
    if (headlineRef.current) {
      const lines = headlineRef.current.children;
      tl.fromTo(lines, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }

    // Subtitle reveal
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 
        "-=0.6"
      );
    }

    // CTA Button Activation
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current.children, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, 
        "-=0.4"
      );
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-[120px] pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-900 text-white min-h-[100dvh] flex items-center">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 border border-slate-700 text-xs sm:text-sm font-medium text-slate-300 mb-6 sm:mb-8 mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan"></span>
              Professional Installation Services
            </div>
            
            <h1 ref={headlineRef} className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight mb-6 sm:mb-8">
              <span className="block sm:inline">Complete Vehicle Security, </span>
              <span className="block sm:inline">Home Access Control, & </span>
              <span className="block text-brand-gold mt-1 md:mt-0">Uninterrupted Power.</span>
            </h1>
            
            <p ref={subtitleRef} className="text-base sm:text-2xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              From advanced car tracking systems and smart home access control to reliable solar backup power—we've got you covered 24/7.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-2 sm:px-0">
              <a 
                href="#quote"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-cyan hover:bg-cyan-400 text-brand-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] text-center text-sm sm:text-base relative z-20"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-800 hover:bg-[#25334a] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium transition-all border border-slate-700 hover:border-slate-500 text-center text-sm sm:text-base relative z-20"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}