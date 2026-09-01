import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Handshake, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { BROKER_INFO, DIFFERENTIATORS } from '../data/brokerData';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-[#C5A880]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C5A880]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C5A880]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#C5A880]" />,
  Handshake: <Handshake className="w-6 h-6 text-[#C5A880]" />
};

export const AboutSection: React.FC = () => {
  const handleConsultancyClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma reunião ou consultoria exclusiva com a equipe da ALTO RIO IMÓVEIS.');
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      {/* Subtle Frosted Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-light border border-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Perfil & Credibilidade</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Mais do que imóveis, <br className="hidden sm:inline" />
            <span className="italic font-serif text-slate-200">realizamos projetos de vida</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            A <strong className="text-white font-medium">ALTO RIO IMÓVEIS</strong> oferece atendimento personalizado para quem deseja comprar, vender ou investir em imóveis. Trabalhamos com transparência, segurança e conhecimento do mercado para encontrar as melhores oportunidades para cada cliente.
          </p>
        </div>

        {/* Grid: Broker Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 rounded-3xl border border-white/10 transform rotate-1 hidden sm:block pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-dark border border-white/10 p-2 shadow-2xl shadow-black/80">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={BROKER_INFO.teamImage}
                    alt="ALTO RIO IMÓVEIS - Equipe e Escritório Especialista em Alto Padrão"
                    className="w-full h-[480px] sm:h-[540px] object-cover object-center hover:scale-102 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent p-6 pt-16">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-white tracking-wide uppercase">ALTO RIO IMÓVEIS</h4>
                        <p className="text-xs text-slate-300 tracking-wider uppercase font-medium mt-0.5">
                          Corretagem & Consultoria Imobiliária • {BROKER_INFO.creci}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full glass-light border border-white/10 flex items-center justify-center text-white">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-dark border border-white/15 backdrop-blur-xl rounded-2xl p-4 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-serif">+14 Anos</div>
                    <div className="text-[11px] text-slate-400 font-medium">Excelência em Alto Padrão</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-5 text-slate-300 text-base leading-relaxed mb-8 font-light">
              <p>
                Entendemos que a compra de um imóvel de alto padrão vai muito além de uma simples transação patrimonial: é a materialização de conquistas, a busca por conforto supremo, segurança jurídica e a valorização contínua do seu patrimônio.
              </p>
              <p>
                Com uma atuação pautada em rigor ético, privacidade e inteligência de mercado, a <strong>ALTO RIO IMÓVEIS</strong> realiza uma curadoria seletiva das propriedades mais expressivas: coberturas cinematográficas, residências exclusivas em condomínios fechados e os lançamentos mais promissores do mercado.
              </p>
              <p className="text-slate-400 text-sm">
                Cada etapa é amparada por assessoria documental e jurídica completa, proporcionando total tranquilidade desde a primeira consultoria até a assinatura definitiva da escritura.
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-light border border-white/10 mb-8">
              {BROKER_INFO.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold font-serif text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Consultation Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleConsultancyClick}
                id="about-schedule-consult-btn"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consultoria Exclusiva</span>
              </button>

              <a
                href="#contato"
                className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Conheça nossos canais de contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Differentials Grid (5 Differentiators Requested) */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Nossos Diferenciais de Atuação
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
              Pilares que fundamentam uma experiência imobiliária segura, ágil e verdadeiramente personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((diff, index) => (
              <div
                key={diff.id}
                id={`differentiator-card-${index}`}
                className="p-7 rounded-2xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl glass-light border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-white/40 transition-all text-white">
                    {iconMap[diff.icon] || <Sparkles className="w-6 h-6 text-white" />}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2.5 group-hover:text-slate-100 transition-colors">
                    {diff.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wider uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Padrão Alto Rio</span>
                </div>
              </div>
            ))}

            {/* Extra 6th Card: Assessoria Jurídica & Notarial */}
            <div className="p-7 rounded-2xl glass-dark border border-white/15 hover:border-white/25 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl glass-light border border-white/10 flex items-center justify-center mb-5 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2.5">
                  Assessoria Jurídica & Notarial
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Análise minuciosa de certidões cíveis, fiscais e trabalhistas, garantindo uma compra 100% blindada e tranquila para compradores e investidores.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wider uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Segurança Absoluta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
