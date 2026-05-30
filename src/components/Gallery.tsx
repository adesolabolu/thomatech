import { useRef, useEffect } from 'react';
import { IMAGES } from '../lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        });
      }

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { src: IMAGES.cctvView, alt: "CCTV Installation View", colSpan: "md:col-span-2", rowSpan: "md:row-span-2", height: "h-64 md:h-[500px]" },
    { src: IMAGES.installation, alt: "Team during Installation", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-64 md:h-[240px]" },
    { src: IMAGES.solar, alt: "Solar Panel Setup", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", height: "h-64 md:h-[240px]" },
  ];

  return (
    <section ref={sectionRef} id="gallery" className="py-24 bg-brand-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan font-semibold tracking-wider uppercase text-sm">Gallery</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mt-4 text-white">
            Our Work in Action
          </h2>
          <p className="text-lg text-slate-400 mt-6">
            Glimpse into our professional setup, ongoing projects, and finalized installations across the country.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-2xl relative group ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={item.src} 
                alt={item.alt} 
                className={`w-full object-cover transform transition-transform duration-700 group-hover:scale-105 ${item.height}`}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
