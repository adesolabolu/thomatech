import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedService, setSelectedService] = useState('Complete Package (Security + Power)');
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Page load "split curtain" or subtle clip-path wipe using Slate Grey (#1E293B)
    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2
    });

    // Scroll Progress Bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-900 overflow-hidden text-white w-full">
      {/* Scroll Progress Bar */}
      <div 
        ref={progressRef} 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan z-[100] origin-left scale-x-0" 
      />

      {/* Load Mask */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[90] bg-brand-800 flex items-center justify-center transform origin-top pointer-events-none"
      />

      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <Services onSelectService={setSelectedService} />
        <Gallery />
        <About />
        <Testimonials />
        <Contact selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
