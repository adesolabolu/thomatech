import { Instagram, Phone } from 'lucide-react';
import { COMPANY_NAME, INSTAGRAM_LINK, WHATSAPP_LINK, IMAGES } from '../lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-slate-400 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-brand-800">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={IMAGES.logo} 
                alt={COMPANY_NAME} 
                className="w-8 h-8 rounded-md object-cover grayscale brightness-200"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="mb-6 max-w-sm">
              Your trusted partner in advanced vehicle security, home surveillance, and sustainable solar power solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a></li>
              <li><a href="#about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <p>Designed for Security.</p>
        </div>

      </div>
    </footer>
  );
}
