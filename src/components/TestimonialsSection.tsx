import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/brokerData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[#020617] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-light border border-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Confiança de Quem Já Realizou
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            O que clientes, investidores e famílias dizem sobre o padrão de atendimento e negociação da ALTO RIO IMÓVEIS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${idx}`}
              className="p-8 rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-white">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/30" />
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6 font-light">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} • {t.city}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#F6F4EE] font-medium mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.propertyType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
