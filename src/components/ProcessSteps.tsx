import React from 'react';
import { PROCESS_STEPS } from '../data/brokerData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#020617] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-light border border-white/10 text-[#F6F4EE] text-xs font-semibold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Processo Transparente</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Como Conduzimos a Sua Conquista
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Uma jornada estruturada do primeiro contato à assinatura final da escritura, com foco em exclusividade e conformidade jurídica total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${idx}`}
              className="relative p-7 rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-white/50 group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#F6F4EE] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/30">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
