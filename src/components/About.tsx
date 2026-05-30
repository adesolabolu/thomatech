import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../lib/constants';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        });
      }

      // Images slide-up animation
      if (imagesRef.current) {
        gsap.from(imagesRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 85%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Subtle top border/separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image composition */}
          <div ref={imagesRef} className="relative order-2 lg:order-1">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              <img 
                src={IMAGES.installation} 
                alt="Our installation process" 
                className="w-full h-56 sm:h-80 object-cover rounded-2xl sm:rounded-3xl shadow-2xl mt-4 sm:mt-8 border border-slate-700 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <img 
                src={IMAGES.owner} 
                alt="Thomatech Founder" 
                className="w-full h-56 sm:h-80 object-cover rounded-2xl sm:rounded-3xl shadow-2xl mb-4 sm:mb-8 border border-slate-700 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            {/* Floating badge (relative on mobile to prevent overflow, absolute on desktop) */}
            <div className="relative sm:absolute mt-6 sm:mt-0 sm:bottom-10 sm:-left-6 bg-brand-800 p-5 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center sm:justify-start gap-4 z-20 w-full sm:w-max mx-auto sm:mx-0">
              <div className="w-12 h-12 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center shrink-0 border border-brand-cyan/30">
                <span className="font-bold text-xl drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">5+</span>
              </div>
              <div>
                <p className="font-bold text-white">Years Experience</p>
                <p className="text-sm text-brand-cyan">Trusted securely</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <h2 className="text-brand-cyan font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-6">
              Precision Engineering & <span className="text-brand-cyan">Trusted Security.</span>
            </h3>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              At Thomatech, we believe in providing absolute peace of mind. Whether it's securing your vehicle with state-of-the-art GPS tracking, outfitting your home with high-definition CCTV, or ensuring your power never goes out with reliable solar systems.
            </p>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our team approaches every installation meticulously, ensuring neat wiring, robust configurations, and seamless handovers so you know exactly how to use your new system.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-800/30 border border-brand-800">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-800/30 border border-brand-800">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">Neat & Clean Installs</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-800/30 border border-brand-800">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">Premium Hardware</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-800/30 border border-brand-800">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">After-sales Support</span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
