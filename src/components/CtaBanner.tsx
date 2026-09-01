import React from 'react';
import { MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';

interface CtaBannerProps {
  onRequestConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestConsultation }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de falar com a equipe da ALTO RIO IMÓVEIS para encontrar meu próximo imóvel.');
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const bgImageUrl = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80';

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#020617] border-t border-white/5">
      {/* Background Image with Dark Sophisticated Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/85 to-[#020617]/90" />
      <div className="absolute inset-0 bg-radial from-transparent to-[#020617]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Atendimento Exclusivo</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
          Pronto para encontrar o seu <br className="hidden sm:inline" />
          <span className="italic text-slate-200">próximo imóvel?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Converse com um especialista da ALTO RIO IMÓVEIS e receba um atendimento personalizado para a sua conquista.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsAppClick}
            id="cta-banner-whatsapp-btn"
            className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
          </button>

          <button
            onClick={onRequestConsultation}
            id="cta-banner-request-btn"
            className="w-full sm:w-auto glass-light border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>Solicitar atendimento</span>
          </button>
        </div>
      </div>
    </section>
  );
};
