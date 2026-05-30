import { Phone, MapPin, CheckCircle2, Copy } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_LINK, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContactProps {
  selectedService?: string;
  onServiceChange?: (service: string) => void;
}

export function Contact({ selectedService: propSelectedService, onServiceChange }: ContactProps) {
  const [localService, setLocalService] = useState('Complete Package (Security + Power)');
  const [copied, setCopied] = useState(false);
  const selectedService = propSelectedService || localService;
  const setSelectedService = onServiceChange || setLocalService;
  
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Thomatech, I am interested in getting a quote for: ${selectedService}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-brand-900 relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div ref={cardRef} className="bg-brand-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 w-full">
          <div className="grid md:grid-cols-2">
            
            {/* Left side info */}
            <div className="bg-gradient-to-br from-brand-900 to-brand-800 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between border-r border-slate-800/50">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 text-white">Ready to secure your assets?</h3>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Reach out to us today for a free consultation. Our team of expert technicians is ready to assess your needs and provide a tailored solution.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                      <Phone className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">WhatsApp / Call</p>
                      <div className="flex items-center gap-3">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-xl font-medium text-white hover:text-brand-cyan transition-colors">
                          {PHONE_DISPLAY}
                        </a>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(WHATSAPP_NUMBER);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="p-1.5 rounded-md hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors"
                          title="Copy phone number"
                        >
                          {copied ? <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                      <MapPin className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Service Area</p>
                      <p className="text-xl font-medium text-white">
                        Nationwide Installation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side CTA Form */}
            <div id="quote" className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-brand-800">
              <h4 className="text-2xl font-display font-bold text-white mb-6">Request a Free Quote</h4>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    What service do you need?
                  </label>
                  <div className="relative">
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full appearance-none border border-slate-700 rounded-xl px-4 py-4 bg-brand-900 text-white font-medium focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all shadow-inner"
                    >
                      <option value="Vehicle Security & Tracking">Vehicle Security & Tracking</option>
                      <option value="Home Security & Access Control">Home Security & Access Control</option>
                      <option value="Solar & Backup Power">Solar & Backup Power</option>
                      <option value="Complete Package (Security + Power)">Complete Package (Security + Power)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-slate-300">Professional and tidy installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-slate-300">High-quality, durable equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-slate-300">Reliable after-sales support</span>
                  </li>
                </ul>

                <button 
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1ebc56] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] text-lg"
                >
                  Get a Quote via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
