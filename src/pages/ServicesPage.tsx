import React, { useState } from 'react';
import {
  CalendarClock,
  Sparkles,
  Home,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_DATA, ServiceItem } from '../data/businessData';
import {
  ServiceVisualRegular,
  ServiceVisualDeep,
  ServiceVisualApartment,
} from '../components/CleanInteriorVisuals';

interface ServicesPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    selectedServiceId || 'all'
  );

  const renderServiceVisual = (id: string) => {
    switch (id) {
      case 'nettoyage-regulier':
        return <ServiceVisualRegular className="shadow-md" />;
      case 'nettoyage-profondeur':
        return <ServiceVisualDeep className="shadow-md" />;
      case 'nettoyage-appartements':
        return <ServiceVisualApartment className="shadow-md" />;
      default:
        return <ServiceVisualRegular className="shadow-md" />;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'nettoyage-regulier':
        return <CalendarClock className="w-6 h-6 text-teal-600" />;
      case 'nettoyage-profondeur':
        return <Sparkles className="w-6 h-6 text-teal-600" />;
      case 'nettoyage-appartements':
        return <Home className="w-6 h-6 text-teal-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  const filteredServices =
    activeTab === 'all'
      ? BUSINESS_DATA.services
      : BUSINESS_DATA.services.filter((s) => s.id === activeTab);

  return (
    <div id="services-page" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
          Prestations de nettoyage
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Nos services de nettoyage résidentiel à Paris
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Propre Maison Services propose trois formules ciblées pour répondre aux exigences réelles de votre cadre de vie : entretien périodique, remise à neuf minutieuse et soin sur-mesure des appartements.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          Tous nos services ({BUSINESS_DATA.services.length})
        </button>
        {BUSINESS_DATA.services.map((srv) => (
          <button
            key={srv.id}
            type="button"
            onClick={() => setActiveTab(srv.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === srv.id
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {srv.title}
          </button>
        ))}
      </div>

      {/* Detailed Services Sections */}
      <div className="space-y-16">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={service.id}
              id={`service-detail-${service.id}`}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xs space-y-8"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                {/* Visual */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  {renderServiceVisual(service.id)}
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-teal-800 bg-teal-50/80 px-3 py-1.5 rounded-lg border border-teal-100 inline-block">
                      {service.shortDesc}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Checklist of actions */}
                  <div className="space-y-2.5 pt-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Ce que comprend cette prestation :
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {service.focusPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for note */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Recommandé pour : </strong>
                      {service.idealFor}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', service.id)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Demander cette prestation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-200 shadow-2xs transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal-600" />
                      <span>{BUSINESS_DATA.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Assurance banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-teal-100" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Une prestation personnalisée pour votre domicile
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Chaque logement parisien a ses particularités. Nous évaluons vos besoins pour adapter précisément notre intervention.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-colors cursor-pointer"
        >
          Prendre contact
        </button>
      </div>
    </div>
  );
};
