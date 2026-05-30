import { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Michael O.",
    role: "Estate Manager, Lagos",
    text: "Thomatech transformed our estate's security. The access control systems and CCTV coverage are top-notch. Their team was professional and the installation was incredibly neat.",
    rating: 5,
    highlight: "text-brand-cyan"
  },
  {
    name: "Sarah T.",
    role: "Homeowner",
    text: "We finally have peace of mind during power outages. The solar and inverter setup they installed powers our entire house effortlessly. Highly recommended for reliable backup power.",
    rating: 5,
    highlight: "text-brand-gold"
  },
  {
    name: "David K.",
    role: "Fleet Owner",
    text: "The real-time vehicle tracking has given me complete control over my delivery fleet. I can monitor routes and set boundaries seamlessly. Excellent service from start to finish.",
    rating: 5,
    highlight: "text-brand-blue"
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideIntervalRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
      
      autoSlideIntervalRef.current = window.setInterval(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        
        // Don't auto-slide if not scrollable (e.g. on desktop)
        if (window.innerWidth >= 768) return;
        if (carousel.scrollWidth <= carousel.clientWidth) return;

        // Check if we are near the end
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by approximately one card width
          const scrollAmount = window.innerWidth * 0.85; 
          carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    };

    const stopAutoSlide = () => {
      if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
    };

    const restartAutoSlide = () => {
      stopAutoSlide();
      if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = window.setTimeout(() => {
        startAutoSlide();
      }, 5000);
    };

    startAutoSlide();

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', restartAutoSlide, { passive: true });
      carousel.addEventListener('scroll', restartAutoSlide, { passive: true });
      carousel.addEventListener('mouseenter', stopAutoSlide);
      carousel.addEventListener('mouseleave', restartAutoSlide);
    }

    return () => {
      stopAutoSlide();
      if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
      if (carousel) {
        carousel.removeEventListener('touchstart', restartAutoSlide);
        carousel.removeEventListener('scroll', restartAutoSlide);
        carousel.removeEventListener('mouseenter', stopAutoSlide);
        carousel.removeEventListener('mouseleave', restartAutoSlide);
      }
    };
  }, []);

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

      // Cards staggered animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-brand-900 border-t border-brand-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full max-w-4xl mx-auto"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-white">
            Trusted by Our Clients
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it. Here is what people are saying about their experience with our security and solar solutions.
          </p>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reviews.map((review, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-full snap-center md:snap-align-none bg-brand-800 rounded-2xl p-8 border border-slate-800 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <Quote className={`absolute top-6 right-6 w-10 h-10 opacity-10 group-hover:opacity-20 transition-opacity ${review.highlight}`} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              
              <p className="text-slate-300 text-base leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <hr className="border-slate-700 mb-4" />
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className={`text-sm font-medium ${review.highlight}`}>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
