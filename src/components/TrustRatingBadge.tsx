import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface TrustRatingBadgeProps {
  variant?: 'compact' | 'detailed' | 'pill';
  className?: string;
}

export const TrustRatingBadge: React.FC<TrustRatingBadgeProps> = ({
  variant = 'detailed',
  className = '',
}) => {
  if (variant === 'pill') {
    return (
      <div
        id="trust-badge-pill"
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wide ${className}`}
      >
        <div className="flex items-center text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-bold text-slate-800">{BUSINESS_DATA.rating}/5</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-600">{BUSINESS_DATA.reviewCount} avis Google</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div id="trust-badge-compact" className={`flex items-center gap-2.5 ${className}`}>
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="text-sm">
          <strong className="text-slate-900 font-bold">{BUSINESS_DATA.rating}/5</strong>
          <span className="text-slate-500 ml-1.5">({BUSINESS_DATA.reviewCount} avis vérifiés Google)</span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="trust-badge-detailed"
      className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-blue-600 text-xl shadow-xs">
          G
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-slate-900">{BUSINESS_DATA.rating} / 5</span>
            <div className="flex text-amber-400 ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Note moyenne basée sur {BUSINESS_DATA.reviewCount} avis clients Google
          </p>
        </div>
      </div>
      <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-100 text-center sm:text-right">
        Entreprise locale vérifiée • Paris 20e
      </div>
    </div>
  );
};
