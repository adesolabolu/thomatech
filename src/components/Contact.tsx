import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '../lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-slate-200/50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            
            {/* Left side info */}
            <div className="bg-brand-900 text-white p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Ready to secure your assets?</h3>
                <p className="text-slate-300 text-lg mb-10 max-w-md">
                  Reach out to us today for a free consultation. Our team of expert technicians is ready to assess your needs and provide a tailored solution.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">WhatsApp / Call</p>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-blue-400 transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Service Area</p>
                      <p className="text-xl font-medium">
                        Nationwide Installation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side CTA */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h4 className="text-2xl font-display font-bold text-brand-900 mb-6">Why Choose Us?</h4>
              
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-slate-700 text-lg">Professional and tidy installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-slate-700 text-lg">High-quality, durable equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-slate-700 text-lg">Reliable after-sales support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-slate-700 text-lg">Competitive and transparent pricing</span>
                </li>
              </ul>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-green-900/10 text-lg"
              >
                Chat with us on WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
