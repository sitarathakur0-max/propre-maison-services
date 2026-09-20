import React, { useState } from 'react';
import { Sparkles, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface VisualProps {
  className?: string;
}

export const HeroInteriorVisual: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group ${className}`}>
      {/* High-fidelity Vector Illustration of an immaculate Parisian Apartment Living Room */}
      <svg
        viewBox="0 0 800 560"
        className="w-full h-auto block select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="windowLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="sunBeam" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="parquetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C799" />
            <stop offset="50%" stopColor="#D4B483" />
            <stop offset="100%" stopColor="#C49F6B" />
          </linearGradient>
          <linearGradient id="sofaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#115E59" />
          </linearGradient>
          <linearGradient id="cushionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Back Wall with moldings */}
        <rect x="0" y="0" width="800" height="380" fill="url(#wallGrad)" />
        {/* Parisian Haussmann molding panels */}
        <rect x="50" y="40" width="160" height="240" fill="none" stroke="#CBD5E1" strokeWidth="2.5" rx="3" />
        <rect x="60" y="50" width="140" height="220" fill="none" stroke="#E2E8F0" strokeWidth="1.5" rx="2" />
        
        {/* French Window with Parisian Balcony railing */}
        <rect x="250" y="30" width="170" height="290" fill="url(#windowLight)" stroke="#94A3B8" strokeWidth="4" rx="4" />
        {/* Window Panes */}
        <line x1="335" y1="30" x2="335" y2="320" stroke="#94A3B8" strokeWidth="3" />
        <line x1="250" y1="120" x2="420" y2="120" stroke="#94A3B8" strokeWidth="2.5" />
        <line x1="250" y1="210" x2="420" y2="210" stroke="#94A3B8" strokeWidth="2.5" />
        {/* Parisian ironwork balcony */}
        <path d="M245 270 Q285 260 335 270 Q385 280 425 270 L425 320 L245 320 Z" fill="#334155" opacity="0.6" />

        {/* Sunbeam pouring through window */}
        <polygon points="335,30 580,560 220,560 250,30" fill="url(#sunBeam)" />

        {/* Second molding panel with artwork */}
        <rect x="460" y="50" width="140" height="180" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" rx="4" />
        <rect x="472" y="62" width="116" height="156" fill="#F1F5F9" />
        <path d="M485 170 C510 120 540 160 575 110" fill="none" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" />
        <circle cx="545" cy="100" r="10" fill="#FBBF24" />

        {/* Floor - Clean Parisian Herringbone Parquet */}
        <rect x="0" y="360" width="800" height="200" fill="url(#parquetGrad)" />
        {/* Parquet herringbone subtle line pattern */}
        <path d="M0 370 L800 370 M0 400 L800 400 M0 435 L800 435 M0 475 L800 475 M0 520 L800 520" stroke="#B89059" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M120 360 L80 560 M260 360 L210 560 M400 360 L350 560 M540 360 L490 560 M680 360 L630 560" stroke="#A97E43" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="6,4" />

        {/* Soft Designer Rug */}
        <ellipse cx="440" cy="460" rx="260" ry="70" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

        {/* Modern Clean Sofa */}
        <g id="sofa">
          <rect x="360" y="310" width="310" height="90" rx="16" fill="url(#sofaGrad)" />
          {/* Back cushions */}
          <rect x="370" y="270" width="140" height="65" rx="10" fill="#0D9488" />
          <rect x="520" y="270" width="140" height="65" rx="10" fill="#0D9488" />
          {/* Accent yellow cushion */}
          <polygon points="400,285 435,285 445,330 390,330" fill="url(#cushionGrad)" />
          {/* Sofa wooden legs */}
          <line x1="380" y1="400" x2="375" y2="425" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
          <line x1="650" y1="400" x2="655" y2="425" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Houseplant - Fiddle leaf fig in white ceramic pot */}
        <g id="plant">
          <polygon points="125,380 145,380 140,430 130,430" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M135 380 Q130 320 110 270" stroke="#15803D" strokeWidth="3" fill="none" />
          <ellipse cx="110" cy="270" rx="20" ry="12" fill="#16A34A" transform="rotate(-25 110 270)" />
          <ellipse cx="125" cy="300" rx="18" ry="11" fill="#22C55E" transform="rotate(30 125 300)" />
          <ellipse cx="145" cy="330" rx="22" ry="13" fill="#15803D" transform="rotate(15 145 330)" />
          <ellipse cx="115" cy="340" rx="19" ry="11" fill="#16A34A" transform="rotate(-35 115 340)" />
        </g>

        {/* Coffee Table with clean glass surface & fresh flowers */}
        <g id="coffeeTable">
          <ellipse cx="380" cy="465" rx="75" ry="24" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2" />
          {/* Glass gleam */}
          <path d="M330 460 Q380 455 430 465" stroke="#99F6E4" strokeWidth="2" fill="none" />
          {/* Vase with fresh minimal eucalyptus */}
          <ellipse cx="370" cy="458" rx="8" ry="14" fill="#CCFBF1" stroke="#5EEAD4" strokeWidth="1" />
          <line x1="370" y1="445" x2="370" y2="420" stroke="#059669" strokeWidth="2" />
          <circle cx="370" cy="418" r="4" fill="#34D399" />
          <circle cx="366" cy="425" r="3" fill="#34D399" />
        </g>

        {/* Sparkle effects denoting spotless cleanliness */}
        <g transform="translate(460, 240)">
          <path d="M0 -12 Q0 0 12 0 Q0 0 0 12 Q0 0 -12 0 Q0 0 0 -12 Z" fill="#38BDF8" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>
        <g transform="translate(340, 450)">
          <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8 Z" fill="#0D9488" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
        <g transform="translate(190, 180)">
          <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10 Z" fill="#F59E0B" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
      </svg>

      {/* Floating Badge on Hero visual */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-teal-500 text-white flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 leading-tight">Intérieur soigné & lumineux</p>
          <p className="text-[11px] text-slate-500">Ménage résidentiel méticuleux à Paris</p>
        </div>
      </div>
    </div>
  );
};

export const ServiceVisualRegular: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F0FDF4" />
        {/* Wall & Floor */}
        <rect x="0" y="0" width="400" height="200" fill="#F8FAFC" />
        <rect x="0" y="200" width="400" height="100" fill="#E2E8F0" />
        {/* Bookshelf neatly organized */}
        <rect x="40" y="40" width="130" height="180" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" rx="4" />
        <line x1="40" y1="100" x2="170" y2="100" stroke="#E2E8F0" strokeWidth="2" />
        <line x1="40" y1="160" x2="170" y2="160" stroke="#E2E8F0" strokeWidth="2" />
        {/* Neatly aligned books */}
        <rect x="50" y="55" width="12" height="45" fill="#0D9488" rx="2" />
        <rect x="65" y="60" width="14" height="40" fill="#14B8A6" rx="2" />
        <rect x="82" y="50" width="10" height="50" fill="#0F766E" rx="2" />
        <rect x="120" y="70" width="35" height="28" fill="#F59E0B" rx="2" />
        {/* Middle shelf tidy plant & clock */}
        <circle cx="70" cy="135" r="14" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" />
        <line x1="70" y1="135" x2="70" y2="126" stroke="#0F766E" strokeWidth="2" />
        <line x1="70" y1="135" x2="77" y2="135" stroke="#0F766E" strokeWidth="2" />
        {/* Pristine Armchair */}
        <rect x="210" y="110" width="150" height="110" rx="16" fill="#0F766E" />
        <rect x="230" y="100" width="110" height="60" rx="10" fill="#115E59" />
        <polygon points="255,140 285,140 290,175 250,175" fill="#FEF08A" />
        {/* Vacuum cleaner silhouette parked neatly */}
        <path d="M360 250 Q350 200 370 160" stroke="#64748B" strokeWidth="3" fill="none" />
        <rect x="340" y="240" width="40" height="25" rx="6" fill="#0284C7" />
        <circle cx="350" cy="265" r="7" fill="#334155" />
        <circle cx="370" cy="265" r="7" fill="#334155" />
        {/* Sparkle */}
        <path d="M290 80 Q290 90 300 90 Q290 90 290 100 Q290 90 280 90 Q290 90 290 80 Z" fill="#14B8A6" />
      </svg>
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-teal-800 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-200">
        Entretien hebdomadaire ou bimensuel
      </div>
    </div>
  );
};

export const ServiceVisualDeep: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F0FDF4" />
        {/* Tiled Wall Background */}
        <rect x="0" y="0" width="400" height="210" fill="#F8FAFC" />
        <line x1="0" y1="50" x2="400" y2="50" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="80" y1="0" x2="80" y2="210" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="160" y1="0" x2="160" y2="210" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="240" y1="0" x2="240" y2="210" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="320" y1="0" x2="320" y2="210" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4,4" />

        {/* Polished Countertop */}
        <rect x="0" y="190" width="400" height="110" fill="#0F172A" />
        <rect x="0" y="190" width="400" height="16" fill="#334155" />
        {/* Gleaming polished reflection */}
        <polygon points="120,206 200,206 170,300 90,300" fill="#FFFFFF" fillOpacity="0.08" />

        {/* Gleaming Stainless steel faucet */}
        <path d="M190 190 L190 90 Q190 70 210 70 Q230 70 230 90 L230 110" fill="none" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" />
        <line x1="220" y1="110" x2="240" y2="110" stroke="#CBD5E1" strokeWidth="4" />
        {/* Sink basin */}
        <rect x="150" y="190" width="120" height="20" rx="4" fill="#1E293B" />

        {/* Sparkle stars reflecting off faucet and counter */}
        <g transform="translate(235, 75)">
          <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10 Z" fill="#38BDF8" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>
        <g transform="translate(140, 200)">
          <path d="M0 -8 Q0 0 8 0 Q0 0 0 8 Q0 0 -8 0 Q0 0 0 -8 Z" fill="#0D9488" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
        </g>
        <g transform="translate(300, 215)">
          <path d="M0 -12 Q0 0 12 0 Q0 0 0 12 Q0 0 -12 0 Q0 0 0 -12 Z" fill="#F59E0B" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>

        {/* Spotless glass container */}
        <rect x="300" y="145" width="45" height="45" rx="6" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-sky-800 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-200">
        Prise en charge intégrale des recoins
      </div>
    </div>
  );
};

export const ServiceVisualApartment: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F8FAFC" />
        {/* Haussmann Apartment Interior */}
        <rect x="0" y="0" width="400" height="200" fill="#FAF5FF" />
        <rect x="0" y="200" width="400" height="100" fill="#E2C799" />
        {/* Parquet diagonal lines */}
        <line x1="0" y1="210" x2="400" y2="210" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="0" y1="240" x2="400" y2="240" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="0" y1="275" x2="400" y2="275" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.5" />

        {/* Tall French Apartment double window */}
        <rect x="130" y="20" width="140" height="180" fill="#BAE6FD" fillOpacity="0.35" stroke="#64748B" strokeWidth="3" rx="2" />
        <line x1="200" y1="20" x2="200" y2="200" stroke="#64748B" strokeWidth="2.5" />
        <line x1="130" y1="80" x2="270" y2="80" stroke="#64748B" strokeWidth="1.5" />
        <line x1="130" y1="140" x2="270" y2="140" stroke="#64748B" strokeWidth="1.5" />
        {/* Balcony silhouette */}
        <path d="M125 170 Q200 160 275 170 L275 200 L125 200 Z" fill="#334155" opacity="0.4" />

        {/* Minimalist modern table with white chairs */}
        <rect x="30" y="150" width="65" height="50" rx="4" fill="#0D9488" />
        <ellipse cx="62" cy="148" rx="24" ry="7" fill="#14B8A6" />
        <rect x="310" y="140" width="55" height="60" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Paris Rooftops subtle silhouette outside window */}
        <path d="M132 75 L160 55 L190 75 L230 60 L268 75" stroke="#94A3B8" strokeWidth="2" fill="none" opacity="0.7" />

        {/* Sparkle */}
        <g transform="translate(198, 45)">
          <path d="M0 -9 Q0 0 9 0 Q0 0 0 9 Q0 0 -9 0 Q0 0 0 -9 Z" fill="#0D9488" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-indigo-900 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-200">
        Adapté aux spécificités parisiennes
      </div>
    </div>
  );
};

export const BeforeAfterComparison: React.FC<VisualProps> = ({ className = '' }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Exemple visuel d'intervention</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Avant / Après : La sérénité d'un intérieur impeccable
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Faites glisser le curseur pour apprécier la netteté et le soin apporté à votre logement après une intervention Propre Maison Services.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 self-start md:self-auto">
          <SlidersHorizontal className="w-3.5 h-3.5 text-teal-600" />
          <span>Glissez pour comparer</span>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-xl overflow-hidden border border-slate-300 select-none bg-slate-100 shadow-inner">
        {/* Right side: AFTER (Clean, gleaming, organized) */}
        <div className="absolute inset-0 w-full h-full bg-emerald-50/40">
          <svg viewBox="0 0 900 450" className="w-full h-full object-cover block" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="450" fill="#F8FAFC" />
            {/* Parquet floor */}
            <rect x="0" y="270" width="900" height="180" fill="#E2C799" />
            <line x1="0" y1="310" x2="900" y2="310" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="0" y1="360" x2="900" y2="360" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="0" y1="410" x2="900" y2="410" stroke="#C49F6B" strokeWidth="1" strokeOpacity="0.4" />
            {/* Pristine Clean Desk */}
            <rect x="350" y="210" width="400" height="90" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Laptop closed & polished */}
            <rect x="490" y="235" width="120" height="14" rx="2" fill="#64748B" />
            {/* Perfectly stacked books */}
            <rect x="670" y="215" width="60" height="14" rx="2" fill="#0D9488" />
            <rect x="675" y="201" width="50" height="14" rx="2" fill="#14B8A6" />
            {/* Fresh plant */}
            <rect x="380" y="225" width="26" height="30" rx="4" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1" />
            <circle cx="393" cy="215" r="10" fill="#16A34A" />
            {/* Big gleaming window */}
            <rect x="50" y="30" width="220" height="230" fill="#E0F2FE" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="3" rx="4" />
            {/* Sparkles everywhere */}
            <g transform="translate(560, 170)">
              <path d="M0 -14 Q0 0 14 0 Q0 0 0 14 Q0 0 -14 0 Q0 0 0 -14 Z" fill="#0D9488" />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            </g>
            <g transform="translate(420, 240)">
              <path d="M0 -10 Q0 0 10 0 Q0 0 0 10 Q0 0 -10 0 Q0 0 0 -10 Z" fill="#38BDF8" />
            </g>
            <g transform="translate(720, 260)">
              <path d="M0 -12 Q0 0 12 0 Q0 0 0 12 Q0 0 -12 0 Q0 0 0 -12 Z" fill="#F59E0B" />
            </g>
          </svg>
          <span className="absolute top-4 right-4 bg-emerald-600 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Après intervention
          </span>
        </div>

        {/* Left side: BEFORE (Cluttered, dusty, dimmed) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-2xl"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-[900px] h-full" style={{ width: '100%', minWidth: '100%' }}>
            <svg viewBox="0 0 900 450" className="w-full h-full object-cover block" xmlns="http://www.w3.org/2000/svg">
              <rect width="900" height="450" fill="#E2E8F0" />
              {/* Dull floor with dust spots */}
              <rect x="0" y="270" width="900" height="180" fill="#C9B185" />
              {/* Desk with clutter */}
              <rect x="350" y="210" width="400" height="90" rx="8" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
              {/* Scattered papers */}
              <polygon points="480,225 540,230 535,260 475,255" fill="#FFFFFF" stroke="#CBD5E1" />
              <polygon points="520,240 580,235 575,265 515,270" fill="#F1F5F9" stroke="#CBD5E1" />
              <polygon points="650,230 710,245 700,270 640,255" fill="#F8FAFC" stroke="#CBD5E1" />
              {/* Messy cables on floor */}
              <path d="M420 300 Q460 360 520 320 Q560 380 620 310" stroke="#475569" strokeWidth="3" fill="none" />
              {/* Dim window without clean light */}
              <rect x="50" y="30" width="220" height="230" fill="#CBD5E1" stroke="#64748B" strokeWidth="3" rx="4" />
              {/* Dust particles */}
              <circle cx="150" cy="120" r="3" fill="#94A3B8" opacity="0.6" />
              <circle cx="180" cy="160" r="4" fill="#94A3B8" opacity="0.5" />
              <circle cx="600" cy="180" r="3" fill="#94A3B8" opacity="0.6" />
              <circle cx="680" cy="210" r="4" fill="#94A3B8" opacity="0.5" />
            </svg>
          </div>
          <span className="absolute top-4 left-4 bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
            Avant le passage
          </span>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-white text-slate-800 shadow-xl border border-slate-300 flex items-center justify-center text-xs font-bold -ml-3.5">
            ⇄
          </div>
        </div>

        {/* Interactive range input overlaid across the entire container */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
          aria-label="Glissière avant après"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-sm">
        <div className="flex items-start gap-2.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <span>Surfaces désencombrées et dépoussiérées</span>
        </div>
        <div className="flex items-start gap-2.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <span>Sols soigneusement aspirés et lavés</span>
        </div>
        <div className="flex items-start gap-2.5 text-slate-700">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <span>Atmosphère aérée et confort immédiat</span>
        </div>
      </div>
    </div>
  );
};
