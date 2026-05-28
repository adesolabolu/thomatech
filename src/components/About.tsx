import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../lib/constants';

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image composition */}
          <div className="relative">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src={IMAGES.installation} 
                alt="Our installation process" 
                className="w-full h-80 object-cover rounded-3xl shadow-xl mt-8 border-4 border-white"
                referrerPolicy="no-referrer"
              />
              <img 
                src={IMAGES.owner} 
                alt="Thomatech Founder" 
                className="w-full h-80 object-cover rounded-3xl shadow-xl mb-8 border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-10 left-1/2 md:-left-6 -translate-x-1/2 md:translate-x-0 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-4 z-20 w-[90%] md:w-auto">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold text-xl">5+</span>
              </div>
              <div>
                <p className="font-bold text-brand-900">Years Experience</p>
                <p className="text-sm text-slate-500">Trusted securely</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-6">
              Expert Installers You Can Trust.
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Thomatech Car Tracker, we believe in providing absolute peace of mind. Whether it's securing your vehicle with state-of-the-art GPS tracking, outfitting your home with high-definition CCTV, or ensuring your power never goes out with reliable solar systems.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team approaches every installation meticulously, ensuring neat wiring, robust configurations, and seamless handovers so you know exactly how to use your new system.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Neat & Clean Installs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">Premium Hardware</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">After-sales Support</span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
