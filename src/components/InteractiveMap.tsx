import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Phone } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface InteractiveMapProps {
  className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Coordinates for 36 Rue de Belleville, 75020 Paris
  const lat = 48.8725;
  const lon = 2.3815;
  const bbox = `${lon - 0.004}%2C${lat - 0.0025}%2C${lon + 0.004}%2C${lat + 0.0025}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_DATA.name} ${BUSINESS_DATA.address}`
  )}`;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Map View Frame */}
        <div className="lg:col-span-7 h-72 sm:h-96 relative bg-slate-100">
          <iframe
            title={`Localisation de ${BUSINESS_DATA.name}`}
            src={osmEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Paris 20e — Belleville</span>
          </div>
        </div>

        {/* Location Details Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-50/50">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
              Implantation locale
            </span>

            <h3 className="text-xl font-bold text-slate-900 mt-3">
              {BUSINESS_DATA.name}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-900">{BUSINESS_DATA.street}</p>
                  <p className="text-slate-600">{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, France</p>
                  <p className="text-xs text-slate-500 mt-0.5">Arrondissement de Belleville (Paris 20e)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="font-bold text-slate-900 hover:text-teal-700 transition-colors"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                  <p className="text-xs text-slate-500">Contact direct par téléphone</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Proximité Métro : Belleville (Lignes 2 & 11), Pyrénées (Ligne 11)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Intervention résidentielle dans les appartements parisiens</span>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Adresse copiée !</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copier l'adresse</span>
                </>
              )}
            </button>

            <a
              href={externalMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Ouvrir dans Plans</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
