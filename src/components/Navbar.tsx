import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      {/* Top micro bar with phone and location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="font-medium text-slate-200">Nettoyage résidentiel à Paris (75020)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="top-bar-phone"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-teal-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          aria-label="Accueil Propre Maison Services"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-teal-200" />
          </div>
          <div>
            <span className="block text-lg font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
              Propre Maison
            </span>
            <span className="block text-[11px] font-semibold text-teal-700 uppercase tracking-widest leading-tight">
              Services • Paris
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 p-1 rounded-xl border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                id={`nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-teal-800 shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span>{BUSINESS_DATA.phone}</span>
          </a>

          <button
            type="button"
            id="nav-contact-cta"
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-sm font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            aria-label="Appeler Propre Maison Services"
            className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 font-bold border border-teal-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-teal-600"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              id="mobile-drawer-call"
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Appeler : {BUSINESS_DATA.phone}</span>
            </a>

            <button
              type="button"
              id="mobile-drawer-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-600 text-white font-bold text-sm shadow-sm"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
