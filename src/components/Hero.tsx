import { ArrowRight, ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';
import { WHATSAPP_LINK, IMAGES } from '../lib/constants';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-900 text-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 border border-slate-700 text-sm font-medium text-slate-300 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Professional Installation Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.1] mb-6">
              Complete Security & <br/>
              <span className="text-blue-400">Power Solutions.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              From advanced car tracking systems and CCTV surveillance to reliable solar power installations. Protect your assets and ensure uninterrupted power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex justify-center items-center gap-2 bg-brand-800 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-slate-700"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-brand-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">Car Tracking</h3>
                  <p className="text-slate-400 text-sm">Real-time GPS tracking and engine demobilization.</p>
                </div>
                <div className="bg-brand-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <ShieldAlert className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">Home Security</h3>
                  <p className="text-slate-400 text-sm">24/7 CCTV surveillance and smart alarms.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
                  <Cpu className="w-10 h-10 text-green-400 mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">Solar Systems</h3>
                  <p className="text-slate-400 text-sm">Inverters, batteries, and solar panel installation.</p>
                </div>
                <div className="h-48 rounded-2xl overflow-hidden border border-slate-700 relative">
                  <img 
                    src={IMAGES.cctvView}
                    alt="CCTV Camera" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
