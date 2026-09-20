import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { InteractiveMap } from '../components/InteractiveMap';

interface ContactPageProps {
  initialServiceId?: string;
}

interface FormState {
  nom: string;
  telephone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  telephone?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<FormState>({
    nom: '',
    telephone: '',
    email: '',
    service: initialServiceId || '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.nom.trim() || formData.nom.trim().length < 2) {
      errs.nom = 'Veuillez renseigner votre nom complet (au moins 2 caractères).';
    }

    const phoneDigits = formData.telephone.replace(/\D/g, '');
    if (!formData.telephone.trim() || phoneDigits.length < 8) {
      errs.telephone = 'Veuillez saisir un numéro de téléphone valide (ex. 06 12 34 56 78).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Veuillez préciser votre demande en quelques mots (au moins 10 caractères).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Frontend simulation of clean enquiry submission without fake backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      nom: '',
      telephone: '',
      email: '',
      service: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="contact-page" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
          Contact direct
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Prenez contact avec Propre Maison Services
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Nous sommes à votre disposition pour échanger sur vos besoins de nettoyage résidentiel à Paris. Contactez-nous par téléphone ou via notre formulaire.
        </p>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Coordonnées de l'entreprise
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Adresse</strong>
                  <p className="text-slate-300">{BUSINESS_DATA.street}</p>
                  <p className="text-slate-400">{BUSINESS_DATA.postalCode} {BUSINESS_DATA.city}, France</p>
                  <p className="text-xs text-teal-400 mt-1">20e arrondissement de Paris</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">Téléphone</strong>
                  <a
                    id="contact-page-phone-link"
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-lg font-extrabold text-teal-300 hover:text-white transition-colors"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Appel direct sur mobile ou fixe</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Entreprise déclarée • Prestations résidentielles</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Note Google : {BUSINESS_DATA.rating}/5 sur {BUSINESS_DATA.reviewCount} avis</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200/70 space-y-2">
            <h3 className="text-sm font-bold text-teal-950">
              Prise de rendez-vous rapide
            </h3>
            <p className="text-xs text-teal-800 leading-relaxed">
              Pour une réponse immédiate ou une demande urgente concernant votre appartement, nous vous recommandons de composer directement notre numéro au{' '}
              <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="font-bold underline hover:text-teal-950">
                {BUSINESS_DATA.phone}
              </a>.
            </p>
          </div>
        </div>

        {/* Right column: Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Merci {formData.nom} !
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Votre demande de renseignement a bien été enregistrée. Nous vous contacterons rapidement au{' '}
                    <strong className="text-slate-900">{formData.telephone}</strong> ou par email à{' '}
                    <strong className="text-slate-900">{formData.email}</strong>.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Formulaire de contact
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Renseignez vos coordonnées ci-dessous pour nous exposer vos besoins.
                  </p>
                </div>

                {/* Nom */}
                <div>
                  <label htmlFor="form-nom" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nom et Prénom <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-nom"
                    name="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    placeholder="ex. Jean Dupont"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                      errors.nom ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                  {errors.nom && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.nom}</span>
                    </p>
                  )}
                </div>

                {/* Téléphone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-tel" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Téléphone <span className="text-teal-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form-tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="ex. 06 12 34 56 78"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                        errors.telephone ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.telephone && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.telephone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email <span className="text-teal-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ex. contact@exemple.fr"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                        errors.email ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Prestation souhaitée */}
                <div>
                  <label htmlFor="form-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Prestation souhaitée (optionnel)
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 text-slate-800"
                  >
                    <option value="">Sélectionnez un service...</option>
                    {BUSINESS_DATA.services.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="autre">Autre demande résidentielle</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Votre message ou description de votre besoin <span className="text-teal-600">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez la surface approximative, le type d'intervention souhaitée ou vos disponibilités..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-500 resize-y ${
                      errors.message ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section id="location-map" className="space-y-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
            Localisation géographique
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-2">
            Notre adresse à Paris
          </h2>
          <p className="text-sm text-slate-600">
            Retrouvez notre implantation au 36 Rue de Belleville dans le 20e arrondissement.
          </p>
        </div>

        <InteractiveMap />
      </section>
    </div>
  );
};
