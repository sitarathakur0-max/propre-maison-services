import React from 'react';
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Home,
  Star,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { HeroInteriorVisual } from '../components/CleanInteriorVisuals';

interface AboutPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
          À propos de notre entreprise
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Propre Maison Services : le soin de votre intérieur à Paris
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Petite entreprise de nettoyage spécialisée dans les prestations résidentielles, nous mettons notre rigueur au service des foyers et appartements parisiens.
        </p>
      </div>

      {/* Main Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Basée au <strong className="text-slate-900 font-semibold">36 Rue de Belleville dans le 20e arrondissement de Paris</strong>, 
              notre entreprise a fait le choix d'une spécialisation exclusive : le nettoyage résidentiel.
            </p>
            <p>
              Nous savons à quel point le maintien d'une maison ou d'un appartement soigné contribue au bien-être quotidien. C'est pourquoi nous proposons des solutions concrètes adaptées aux modes de vie citadins :
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 text-sm">Le ménage régulier à domicile</strong>
                  <span className="text-xs text-slate-600">Un entretien suivi pour préserver la propreté jour après jour.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 text-sm">Le nettoyage en profondeur</strong>
                  <span className="text-xs text-slate-600">Une remise à neuf complète de l'ensemble des pièces et des recoins.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-slate-900 text-sm">Le nettoyage d’appartements</strong>
                  <span className="text-xs text-slate-600">Une attention particulière portée aux spécificités des logements parisiens.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>Contacter notre équipe</span>
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

        <div className="lg:col-span-6">
          <HeroInteriorVisual />
        </div>
      </div>

      {/* Values & Local Focus */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Notre philosophie de service
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Une relation de proximité et de confiance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ouvrir sa porte exige une confiance réciproque. Nous veillons à ce que chaque passage s'effectue avec discrétion et professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Respect de votre lieu de vie
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nous accordons le plus grand soin à votre mobilier, vos objets personnels et vos revêtements délicats.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Ancrage parisien
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Implantés Rue de Belleville à Paris, nous connaissons le rythme urbain et facilitons l'organisation des interventions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Satisfaction constatée
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Une note moyenne de 4.8/5 sur Google avec 25 avis de clients témoignant de la qualité de nos interventions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
