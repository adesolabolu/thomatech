import { Phone, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { COMPANY_NAME, WHATSAPP_LINK, INSTAGRAM_LINK, PHONE_DISPLAY, IMAGES } from '../lib/constants';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={IMAGES.logo} 
              alt={COMPANY_NAME} 
              className="w-10 h-10 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tight text-brand-900 hidden sm:block">
              {COMPANY_NAME}
            </span>
            <span className="font-display font-bold text-xl tracking-tight text-brand-900 sm:hidden">
              THOMATECH
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-pink-600 transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer" 
              className="flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-5 py-2.5 rounded-full font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 font-medium text-lg py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4 border-t border-slate-100">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-900 text-white py-3 rounded-xl font-medium w-full"
              >
                <Phone className="w-5 h-5" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-slate-600 py-3 rounded-xl font-medium border border-slate-200 w-full"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
