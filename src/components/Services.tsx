import { Car, Cctv, Sun, ArrowRight, Zap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Vehicle Security Tracking",
    description: "Monitor your fleet and private vehicles using cutting-edge GPS tracking technology. Locate assets in real-time, view detailed route histories, and remotely immobilize engines.",
    icon: Car,
    activeBgClass: "bg-[#00E5FF]",
    textAccentClass: "text-[#00E5FF]",
    bgAccentClass: "bg-[#00E5FF]",
    ctaText: "Get a Vehicle Security Quote",
    ctaBorderClass: "border-[#00E5FF]",
    ctaTextClass: "text-[#00E5FF]",
    effect: "scan",
    formValue: "Vehicle Security & Tracking"
  },
  {
    title: "Home Security & Access",
    description: "Secure your perimeter with high-definition CCTV surveillance. Implement smart locks, biometric entry points, and automated gate systems for robust, 24/7 access control.",
    icon: Cctv,
    activeBgClass: "bg-[#3B82F6]",
    textAccentClass: "text-[#3B82F6]",
    bgAccentClass: "bg-[#3B82F6]",
    ctaText: "Secure My Property",
    ctaBorderClass: "border-[#3B82F6]",
    ctaTextClass: "text-[#3B82F6]",
    effect: "scan",
    formValue: "Home Security & Access Control"
  },
  {
    title: "Solar & Backup Power",
    description: "Ensure continuous defense with reliable solar power. We eliminate downtime for your security systems using premium solar panels, intelligent inverters, and deep-cycle batteries.",
    icon: Sun,
    activeBgClass: "bg-[#F59E0B]",
    textAccentClass: "text-[#F59E0B]",
    bgAccentClass: "bg-[#F59E0B]",
    ctaText: "Explore Solar Solutions",
    ctaBorderClass: "border-[#F59E0B]",
    ctaTextClass: "text-[#F59E0B]",
    effect: "counter",
    formValue: "Solar & Backup Power"
  }
];

export interface ServicesProps {
  onSelectService?: (service: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hoverAnims = useRef<(gsap.core.Tween | null)[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Angled notch at the top left - removed to support clean large rounded corners
  // const cardClipPath = "polygon(0 50px, 50px 50px, 65px 0, 100% 0, 100% 100%, 0 100%)";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header staggered animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          }
        });
      }

      // Problem-Solution Matrix Fade
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        });

        tl.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.15
        });

        const scanLine = card.querySelector('.scan-line');
        if (scanLine) {
          tl.fromTo(scanLine, 
            { y: '-10%', opacity: 0 },
            { y: '110%', opacity: 0.5, duration: 2, ease: "linear", repeat: -1 },
            "<"
          );
        }

        const counterElement = card.querySelector('.energy-counter');
        if (counterElement) {
          let obj = { val: 0 };
          tl.to(obj, {
            val: 100,
            duration: 2,
            ease: "power3.out",
            onUpdate: function() {
              counterElement.innerHTML = `${Math.floor(obj.val)}% Backup`;
            }
          }, "-=0.2");
        }

        // Hover animations setup
        const hoverIcon = card.querySelector('.hover-icon');
        if (hoverIcon) {
          let hoverAnim: gsap.core.Tween | null = null;
          
          if (index === 0) {
            // Pulse for Car
            hoverAnim = gsap.to(hoverIcon, { scale: 1.15, duration: 0.6, repeat: -1, yoyo: true, ease: "sine.inOut", paused: true });
          } else if (index === 1) {
            // Scan-rotation for CCTV
            hoverAnim = gsap.to(hoverIcon, { rotation: 20, duration: 1.5, repeat: -1, yoyo: true, ease: "power1.inOut", paused: true });
          } else if (index === 2) {
            // Slow rotation for Sun
            hoverAnim = gsap.to(hoverIcon, { rotation: 360, duration: 8, repeat: -1, ease: "linear", paused: true });
          }

          hoverAnims.current[index] = hoverAnim;
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              How we help
            </h2>
          </div>
          <div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              With strong foundations in physical security, our comprehensive platforms solve common challenges 
              homeowners and fleet managers face, such as managing access, securing valuable assets, and understanding 
              risks during power outages.
            </p>
            <div className="mt-6">
              <span className="font-semibold text-sm uppercase tracking-wider text-brand-cyan">Services</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;
            
            return (
              <div 
                key={index} 
                ref={el => cardsRef.current[index] = el}
                className={`relative h-[480px] sm:h-[520px] w-full mt-4 sm:mt-0 cursor-pointer lg:cursor-default`}
                onMouseEnter={() => {
                  setActiveCard(index);
                  hoverAnims.current[index]?.play();
                }}
                onMouseLeave={() => {
                  setActiveCard(null);
                  hoverAnims.current[index]?.pause();
                  gsap.to(cardsRef.current[index]?.querySelector('.hover-icon'), { scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" });
                  hoverAnims.current[index]?.time(0);
                }}
                onClick={() => {
                  if (activeCard === index) {
                    setActiveCard(null);
                    hoverAnims.current[index]?.pause();
                    gsap.to(cardsRef.current[index]?.querySelector('.hover-icon'), { scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" });
                    hoverAnims.current[index]?.time(0);
                  } else {
                    setActiveCard(index);
                    hoverAnims.current[index]?.play();
                  }
                }}
              >
                {/* Number / Label */}
                <div className={`absolute top-4 left-4 text-xs font-mono z-10 transition-colors duration-500 ${isActive ? 'text-brand-900 font-bold' : 'text-white/50'}`}>
                  / 0{index + 1}
                </div>
                
                {/* Outer Border Layer */}
                <div 
                  className={`absolute inset-0 rounded-[24px] transition-all duration-500 ${isActive ? service.activeBgClass : 'bg-brand-800/50'}`}
                >
                  {/* Inner Background Layer */}
                  <div 
                    className={`absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-[24px] transition-colors duration-500 overflow-hidden ${isActive ? service.activeBgClass : 'bg-brand-800'}`}
                  >
                    {/* Scan Line Effect for Security */}
                    {service.effect === 'scan' && (
                      <div className="scan-line absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[rgba(0,229,255,0.1)] to-transparent opacity-0 pointer-events-none z-20"></div>
                    )}
                    
                    {/* Default State Content */}
                    <div className={`absolute inset-0 p-6 sm:p-10 flex flex-col items-center justify-center transition-all duration-500 z-10 ${isActive ? 'opacity-0 scale-95 -translate-y-4 pointer-events-none' : 'opacity-100 scale-100 translate-y-0'}`}>
                      {/* Counter for Solar */}
                      {service.effect === 'counter' && (
                        <div className="absolute top-8 right-8 flex items-center gap-2">
                           <Zap className={`w-4 h-4 ${service.textAccentClass}`} />
                           <span className={`energy-counter font-mono font-bold text-sm ${service.textAccentClass}`}>0% Backup</span>
                        </div>
                      )}

                      <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-xl"></div>
                        <div className="relative bg-gradient-to-br from-[#0B0F19] to-[#1E293B] shadow-[inset_0_2px_15px_rgba(0,0,0,0.6)] w-24 h-24 rounded-[20px] flex items-center justify-center border border-slate-700/50 skew-y-3 skew-x-3 transform-gpu">
                           <Icon className={`w-12 h-12 ${service.textAccentClass}`} strokeWidth={1.5} />
                           <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${service.bgAccentClass} border-4 border-[#0B0F19] flex items-center justify-center text-[#0B0F19] font-bold text-lg`}>
                              *
                           </div>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-sans font-bold text-center leading-snug tracking-tight">
                        {service.title}
                      </h4>
                    </div>

                    {/* Hover State Content */}
                    <div className={`absolute inset-0 p-6 sm:p-10 flex flex-col justify-center transition-all duration-500 z-10 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                      
                      <Icon className="hover-icon w-10 h-10 text-brand-900 mb-6 shrink-0" strokeWidth={2} />
                      
                      <h4 className="text-2xl font-sans font-bold text-white mb-4 leading-snug tracking-tight drop-shadow-md">
                        {service.title}
                      </h4>

                      <p className="text-brand-900 text-base sm:text-lg font-semibold leading-relaxed overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {service.description}
                      </p>
                      
                      <a 
                        href="#quote" 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService && onSelectService(service.formValue);
                        }}
                        className={`mt-4 sm:mt-8 inline-flex items-center justify-center px-6 py-3 border-2 rounded-xl bg-brand-900 font-bold transition-transform hover:scale-105 shadow-xl shrink-0 ${service.ctaBorderClass} ${service.ctaTextClass}`}
                      >
                         {service.ctaText}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
