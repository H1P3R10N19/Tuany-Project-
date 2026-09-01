import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Bed, 
  Car, 
  Maximize, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  MessageCircle, 
  Calculator, 
  Share2, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Phone,
  Clock
} from 'lucide-react';
import { Property } from '../types';
import { BROKER_INFO } from '../data/brokerData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'detalhes' | 'simulador' | 'agendar'>('detalhes');
  const [copied, setCopied] = useState(false);

  // Financing Simulator state
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanYears, setLoanYears] = useState<number>(30);
  const [interestRateYearly, setInterestRateYearly] = useState<number>(9.9);

  // Schedule Visit form
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('10:00');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitScheduled, setVisitScheduled] = useState(false);

  // Financing calculations
  const downPaymentValue = (property.price * downPaymentPercent) / 100;
  const financedAmount = property.price - downPaymentValue;
  const totalMonths = loanYears * 12;
  const monthlyRate = interestRateYearly / 100 / 12;
  const estimatedMonthlyInstallment =
    financedAmount > 0 && monthlyRate > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const handleWhatsAppInquiry = () => {
    const text = `Olá! Tenho interesse no imóvel "${property.title}" (Ref: ${property.id}) localizado em ${property.neighborhood}, ${property.city}. Valor: ${property.formattedPrice}. Gostaria de mais informações e disponibilidade para visita com a ALTO RIO IMÓVEIS.`;
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: property.title,
          text: `Confira este imóvel exclusivo com a ALTO RIO IMÓVEIS: ${property.title} - ${property.formattedPrice}`,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone || !visitDate) return;

    setVisitScheduled(true);
    const text = `Olá! Gostaria de agendar uma visita VIP com a ALTO RIO IMÓVEIS para o imóvel "${property.title}".\nNome: ${visitorName}\nTelefone: ${visitorPhone}\nData desejada: ${visitDate} às ${visitTime}`;
    setTimeout(() => {
      window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  return (
    <div
      id="property-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl glass-dark border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 glass-light shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full glass-light border border-white/10 text-[#F6F4EE] text-xs font-semibold">
              {property.badge || property.type}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-light">Ref: {property.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Compartilhar imóvel"
              className="p-2.5 rounded-full glass-light border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(property.id)}
              title={isFavorite ? 'Remover dos favoritos' : 'Salvar favorito'}
              className="p-2.5 rounded-full glass-light border border-white/10 text-slate-300 hover:text-white hover:border-white/40 transition-all cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white text-white' : ''}`} />
            </button>
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="p-2.5 rounded-full glass-light border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group shadow-lg">
              <img
                src={property.images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass-dark border border-white/20 text-xs text-white font-medium">
                {activeImageIndex + 1} / {property.images.length} fotos
              </div>
            </div>

            {/* Thumbnails row */}
            {property.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-white scale-102 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Header Specs & Price Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F6F4EE] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>{property.neighborhood}, {property.city} - {property.state}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {property.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">{property.subtitle}</p>
            </div>

            <div className="lg:text-right shrink-0 glass-light p-4 sm:p-5 rounded-2xl border border-white/10 shadow-lg">
              <span className="text-xs text-slate-400 uppercase tracking-widest block font-medium">
                Valor de Investimento
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F6F4EE]">
                {property.isPriceOnConsult ? 'Consulte' : property.formattedPrice}
              </div>
              {property.condoFee && (
                <div className="text-xs text-slate-400 mt-1 font-light">
                  Condomínio: R$ {property.condoFee.toLocaleString('pt-BR')} | IPTU: R$ {property.propertyTax?.toLocaleString('pt-BR')}/mês
                </div>
              )}
            </div>
          </div>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl glass-light border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <Maximize className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Área Privativa</span>
                <span className="font-bold text-white text-base">{property.areaM2} m²</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-light border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Quartos & Suítes</span>
                <span className="font-bold text-white text-base">{property.bedrooms} Q ({property.suites} Suítes)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-light border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Vagas de Garagem</span>
                <span className="font-bold text-white text-base">{property.parkingSpaces} Vagas</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-light border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">Status do Imóvel</span>
                <span className="font-bold text-white text-base">{property.status}</span>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('detalhes')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                activeTab === 'detalhes'
                  ? 'border-white text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Descrição & Diferenciais
            </button>
            <button
              onClick={() => setActiveTab('simulador')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'simulador'
                  ? 'border-white text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Simulador de Financiamento</span>
            </button>
            <button
              onClick={() => setActiveTab('agendar')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'agendar'
                  ? 'border-white text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita VIP</span>
            </button>
          </div>

          {/* Tab 1: Detalhes */}
          {activeTab === 'detalhes' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Sobre esta Propriedade
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {property.fullDescription}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F6F4EE]" />
                  <span>Destaques Arquitetônicos</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#F6F4EE] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h4 className="font-serif text-lg font-bold text-white mb-3">
                  Infraestrutura & Comodidades
                </h4>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full glass-light border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Simulador */}
          {activeTab === 'simulador' && (
            <div className="space-y-6 animate-fadeIn glass-light p-6 rounded-2xl border border-white/10">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  Simulação de Financiamento Imobiliário
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light">
                  Cálculo aproximado baseado no sistema SAC / Price para o valor de R${' '}
                  {property.price.toLocaleString('pt-BR')}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                    Entrada ({downPaymentPercent}%)
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-white mb-1 cursor-pointer"
                  />
                  <div className="text-sm font-bold text-[#F6F4EE]">
                    R$ {downPaymentValue.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                    Prazo ({loanYears} anos / {totalMonths} meses)
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={35}
                    step={5}
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full accent-white mb-1 cursor-pointer"
                  />
                  <div className="text-sm font-bold text-white">{loanYears} anos</div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                    Taxa Anual Estimada (% a.a.)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="6"
                    max="18"
                    value={interestRateYearly}
                    onChange={(e) => setInterestRateYearly(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl glass-light border border-white/10 text-white text-sm outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Simulation Result Box */}
              <div className="p-5 rounded-2xl glass-dark border border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">
                    Parcela Inicial Estimada
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F6F4EE]">
                    R$ {estimatedMonthlyInstallment.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} / mês
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">
                    Saldo Financiado
                  </span>
                  <span className="text-lg font-bold text-white">
                    R$ {financedAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Agendar Visita */}
          {activeTab === 'agendar' && (
            <div className="animate-fadeIn">
              {visitScheduled ? (
                <div className="p-8 rounded-2xl glass-light border border-white/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full glass-dark border-2 border-white flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Solicitação Encaminhada com Sucesso!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto font-light">
                    A equipe da ALTO RIO IMÓVEIS entrará em contato em instantes para confirmar o horário e preparar a visita com todo o sigilo e exclusividade.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-4 glass-light p-6 rounded-2xl border border-white/10">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    Agende uma Visita Guiada e Privativa
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Nome</label>
                      <input
                        type="text"
                        required
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="Ex: Dr. Marcelo Soares"
                        className="w-full px-4 py-2.5 rounded-xl glass-light border border-white/10 text-white text-sm outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        placeholder="(21) 99876-5432"
                        className="w-full px-4 py-2.5 rounded-xl glass-light border border-white/10 text-white text-sm outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Data Preferencial</label>
                      <input
                        type="date"
                        required
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl glass-light border border-white/10 text-white text-sm outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Horário de Preferência</label>
                      <select
                        value={visitTime}
                        onChange={(e) => setVisitTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-white text-sm outline-none focus:border-white"
                      >
                        <option value="09:00">09:00 (Manhã)</option>
                        <option value="11:00">11:00 (Manhã)</option>
                        <option value="14:30">14:30 (Tarde)</option>
                        <option value="16:30">16:30 (Final de tarde / Pôr do sol)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 active:scale-98 transition-all cursor-pointer"
                  >
                    Confirmar Agendamento com a ALTO RIO IMÓVEIS
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 sm:p-6 glass-light border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-md">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-medium block uppercase tracking-wider">ALTO RIO IMÓVEIS</span>
              <span className="font-light">{BROKER_INFO.phoneDisplay} • {BROKER_INFO.creci}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              id="modal-whatsapp-inquiry-btn"
              className="flex-1 sm:flex-none px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp sobre este Imóvel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
