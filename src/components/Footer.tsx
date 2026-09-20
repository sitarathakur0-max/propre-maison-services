import React from 'react';
import { Sparkles, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5 text-teal-200" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {BUSINESS_DATA.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {BUSINESS_DATA.shortAbout}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Note Google : {BUSINESS_DATA.rating}/5 ({BUSINESS_DATA.reviewCount} avis)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services résidentiels
            </h4>
            <ul className="space-y-2 text-sm">
              {BUSINESS_DATA.services.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services', srv.id)}
                    className="hover:text-teal-300 text-left transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Coordonnées
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <p className="text-slate-300">
                  {BUSINESS_DATA.address}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  id="footer-phone"
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-white font-bold hover:text-teal-300 transition-colors"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="w-full text-center px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-wide transition-colors cursor-pointer"
                >
                  Demander un renseignement
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice & local disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {BUSINESS_DATA.name}. Tous droits réservés.
          </p>
          <p>
            Nettoyage résidentiel et entretien d'appartements à Paris (75020).
          </p>
        </div>
      </div>
    </footer>
  );
};
