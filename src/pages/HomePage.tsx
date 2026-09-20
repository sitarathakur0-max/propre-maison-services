import React from 'react';
import {
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  CalendarClock,
  Home,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import {
  HeroInteriorVisual,
  ServiceVisualRegular,
  ServiceVisualDeep,
  ServiceVisualApartment,
  BeforeAfterComparison,
} from '../components/CleanInteriorVisuals';
import { TrustRatingBadge } from '../components/TrustRatingBadge';

interface HomePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section id="hero" className="relative pt-6 sm:pt-12 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <TrustRatingBadge variant="pill" />

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Une maison propre,{' '}
                  <span className="text-teal-700">un quotidien plus serein</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Propre Maison Services accompagne les particuliers à Paris avec des prestations de{' '}
                  <strong className="text-slate-900 font-semibold">nettoyage régulier à domicile</strong>, de{' '}
                  <strong className="text-slate-900 font-semibold">nettoyage en profondeur</strong> et de{' '}
                  <strong className="text-slate-900 font-semibold">nettoyage d'appartements</strong>. Un service soigné et attentif pour savourer un intérieur impeccable.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  id="hero-cta-contact"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Nous contacter</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  id="hero-cta-services"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Découvrir nos services</span>
                </button>
              </div>

              {/* Phone quick access & local badge */}
              <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>
                    Appel direct :{' '}
                    <a
                      id="hero-phone-link"
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="font-bold text-slate-900 hover:text-teal-700 transition-colors"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>36 Rue de Belleville, Paris 20e</span>
                </div>
              </div>
            </div>

            {/* Right Bespoke Visual */}
            <div className="lg:col-span-6">
              <HeroInteriorVisual />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section id="introduction" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Présentation de l'entreprise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Un service de nettoyage résidentiel dédié aux intérieurs parisiens
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {BUSINESS_DATA.shortAbout} Que vous ayez besoin d'un passage périodique pour entretenir
              vos pièces de vie, d'un nettoyage complet de votre appartement ou d'une remise à neuf en profondeur,
              nous adaptons notre savoir-faire aux besoins réels de votre logement.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services-preview" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
              Nos prestations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Des services clairs et adaptés à votre domicile
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Voir le détail complet des prestations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 */}
          <div
            id="card-service-regulier"
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <ServiceVisualRegular />
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <CalendarClock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Nettoyage régulier à domicile
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  L'entretien périodique de votre logement pour maintenir un cadre de vie propre, sain et ordonné tout au long de l'année.
                </p>
                <ul className="pt-2 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Aspiration et lavage des sols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Dépoussiérage des surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Désinfection sanitaires et cuisine</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => onNavigate('services', 'nettoyage-regulier')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-700 text-xs font-bold transition-colors border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div
            id="card-service-profondeur"
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <ServiceVisualDeep />
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Nettoyage en profondeur
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Une intervention minutieuse et intégrale pour remettre à neuf chaque recoin de votre domicile dans les moindres détails.
                </p>
                <ul className="pt-2 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Traitement approfondi des recoins et plinthes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Dégraissage minutieux des surfaces de cuisine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Détartrage soigné robinetterie & douche</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => onNavigate('services', 'nettoyage-profondeur')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-700 text-xs font-bold transition-colors border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div
            id="card-service-appartements"
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <ServiceVisualApartment />
              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Nettoyage d’appartements
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Une prise en charge sur mesure adaptée aux spécificités et aux configurations des appartements parisiens.
                </p>
                <ul className="pt-2 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Entretien attentif des parquets et tomettes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Optimisation des volumes et recoins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Respect des menuiseries et boiseries</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => onNavigate('services', 'nettoyage-appartements')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-700 text-xs font-bold transition-colors border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PROPRE MAISON SERVICES */}
      <section id="why-choose" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-md border border-teal-800">
              Nos engagements concrets
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Pourquoi confier votre intérieur à Propre Maison Services ?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Nous fondons notre travail sur la rigueur, le respect de votre espace de vie et la proximité géographique à Paris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_DATA.commitments.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEAN HOME VISUAL SECTION */}
      <section id="visual-showcase" className="max-w-6xl mx-auto px-4 sm:px-6">
        <BeforeAfterComparison />
      </section>

      {/* SIMPLE SERVICE PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Organisation simple
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comment se déroule notre intervention ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Une prise de contact fluide en 4 étapes simples pour planifier le nettoyage de votre logement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BUSINESS_DATA.processSteps.map((step) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS & TRUST SECTION */}
      <section id="trust-section" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Confiance locale vérifiée</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                La satisfaction de nos clients à Paris
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Propre Maison Services est notée avec constance par ses clients pour la rigueur de ses prestations à domicile et le soin porté à chaque logement.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>✓ Prestations à domicile régulières</span>
                <span>✓ Nettoyage approfondi</span>
                <span>✓ Arrondissement 75020 et Paris</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center mx-auto text-2xl font-black shadow-xs">
                  ★
                </div>
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {BUSINESS_DATA.rating} <span className="text-xl text-slate-400">/ 5</span>
                  </div>
                  <div className="text-amber-400 text-lg">★★★★★</div>
                  <p className="text-sm font-bold text-slate-800">
                    {BUSINESS_DATA.reviewCount} avis Google vérifiés
                  </p>
                  <p className="text-xs text-slate-500">
                    Évaluation pour Propre Maison Services
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Appeler le {BUSINESS_DATA.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL HOMEPAGE CTA */}
      <section id="cta-contact-home" className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-teal-50 border border-teal-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-950 tracking-tight">
              Envie d'un intérieur propre et agréable ?
            </h2>
            <p className="text-teal-800/80 text-sm sm:text-base leading-relaxed">
              Faites-nous part de vos besoins de nettoyage régulier, d'entretien approfondi ou de prise en charge de votre appartement à Paris.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-base shadow-sm transition-all cursor-pointer"
            >
              Envoyer une demande
            </button>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-teal-100/50 text-teal-900 font-bold text-base border border-teal-300 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>

          <p className="text-xs text-teal-700/70 pt-2">
            Localisation : 36 Rue de Belleville, 75020 Paris • Réponse rapide
          </p>
        </div>
      </section>
    </div>
  );
};
