import React, { useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircle, Sparkles, Building2, ShieldCheck, Compass } from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';
import { AltoRioLogo } from './AltoRioLogo';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onContactClick }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // High quality royalty-free architecture & luxury home video mp4 stream with fallback
  const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-luxury-house-42460-large.mp4';
  const posterUrl = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80';

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent('Olá! Vi a página inicial da ALTO RIO IMÓVEIS e gostaria de conversar com a equipe sobre imóveis de alto padrão.');
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video Element */}
        {!videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterUrl}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40 scale-105' : 'opacity-0'
            }`}
            style={{ filter: 'brightness(0.75) contrast(1.1)' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        )}

        {/* Fallback Static Image */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-40'
          }`}
          style={{ backgroundImage: `url(${posterUrl})` }}
        />

        {/* Frosted Layer & Dark Overlays for Ultra Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#020617]/50 to-[#020617]/95" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
            {/* Frosted Luxury Tag */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Curadoria de Alto Padrão</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-title"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md"
            >
              Encontre o imóvel ideal para viver seus{' '}
              <span className="italic text-gold font-serif">melhores momentos.</span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed mb-10"
            >
              Imóveis selecionados, atendimento personalizado e segurança em todas as etapas da sua próxima conquista.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreClick}
                id="hero-cta-explore"
                className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <span>Conheça nossos imóveis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContactClick}
                id="hero-cta-contact"
                className="w-full sm:w-auto glass-light border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Fale com um corretor</span>
              </button>
            </div>

            {/* Trust Badges in Glass Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-white/10 text-slate-300 text-xs">
              <div className="flex items-center gap-2.5 p-2 rounded-xl glass-light border border-white/5">
                <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-slate-950 shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-200">Portfólio Prime</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl glass-light border border-white/5">
                <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-slate-950 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-200">Assessoria Jurídica</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl glass-light border border-white/5">
                <div className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-slate-950 shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-200">Consultoria VIP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Frosted Glass Floating Cards Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-5 items-end justify-center">
            {/* Broker Brand Glass Card */}
            <div className="glass-dark p-6 sm:p-7 rounded-3xl border border-white/10 w-full sm:w-92 shadow-2xl transition-all duration-300 hover:border-white/20">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <AltoRioLogo variant="horizontal" size="md" />
                <div className="w-9 h-9 rounded-full glass-light border border-white/10 flex items-center justify-center text-[#F6F4EE]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic font-light">
                &ldquo;Trabalhamos com transparência, segurança jurídica e profundo conhecimento do mercado imobiliário para encontrar as melhores oportunidades para cada cliente.&rdquo;
              </p>
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-[#D5D0C2]">
                <span className="font-medium">{BROKER_INFO.creci}</span>
                <span className="text-slate-400">Rio de Janeiro • RJ</span>
              </div>
            </div>

            {/* Featured Highlight Glass Card */}
            <div className="glass-light p-6 rounded-3xl border border-white/10 w-full sm:w-92 shadow-2xl space-y-3 transition-all duration-300 hover:border-white/20">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  Destaque da Semana
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-[#F6F4EE] font-semibold border border-white/20 uppercase tracking-wider">
                  Exclusivo
                </span>
              </div>
              <div className="flex gap-3.5 items-center">
                <div className="w-18 h-18 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80"
                    alt="Penthouse Leblon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-serif font-bold text-white">Penthouse Lumina</div>
                  <div className="text-xs text-slate-400 font-light">Av. Delfim Moreira • Leblon</div>
                  <div className="text-sm text-[#F6F4EE] font-bold mt-1 font-serif">R$ 8.900.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Indicator: Scroll Down */}
      <a
        href="#sobre"
        id="hero-scroll-indicator"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 hover:text-gold transition-colors cursor-pointer group animate-bounce opacity-80"
        aria-label="Rolar para a seção sobre"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">
          Explore mais
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-white to-transparent"></div>
      </a>
    </section>
  );
};
