import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';
import { LeadFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Apartamento de Alto Padrão',
    neighborhood: '',
    priceRange: 'R$ 2.5M a R$ 5M',
    message: '',
    lgpdAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Format phone mask (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 14) {
      setErrorMessage('Por favor, informe um telefone de contato válido com DDD.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    if (!formData.lgpdAccepted) {
      setErrorMessage('É necessário autorizar o tratamento de dados de acordo com a LGPD.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission and provide instant WhatsApp forwarding option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleSendViaWhatsAppDirect = () => {
    const text = `*Novo Contato via Site Oficial ALTO RIO IMÓVEIS*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*E-mail:* ${formData.email}\n*Tipo de Imóvel:* ${formData.propertyType}\n*Região:* ${formData.neighborhood || 'Não informado'}\n*Faixa de Preço:* ${formData.priceRange}\n*Mensagem:* ${formData.message || 'Sem mensagem adicional'}`;
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#020617] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-light border border-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Fale com Nossos Especialistas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Inicie Seu Atendimento Personalizado
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Preencha o formulário para receber uma seleção customizada ou entre em contato diretamente pelos nossos canais exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl glass-dark border border-white/10 shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Informações de Contato
              </h3>
              <p className="text-slate-400 text-sm font-light">
                Atendimento sigiloso, técnico e voltado para as melhores decisões patrimoniais.
              </p>

              <div className="space-y-3 pt-2">
                {/* Phone */}
                <a
                  href={`tel:${BROKER_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl glass-light border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefone de Contato</span>
                    <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                      {BROKER_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={() => {
                    const msg = encodeURIComponent('Olá! Gostaria de atendimento exclusivo com a ALTO RIO IMÓVEIS.');
                    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${msg}`, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full text-left flex items-start gap-3.5 p-3 rounded-2xl glass-light border border-white/5 hover:border-emerald-500/40 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Direto</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {BROKER_INFO.phoneDisplay} (Iniciar conversa)
                    </span>
                  </div>
                </button>

                {/* Email */}
                <a
                  href={`mailto:${BROKER_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl glass-light border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mail Corporativo</span>
                    <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors break-all">
                      {BROKER_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl glass-light border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shrink-0 shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Endereço do Escritório</span>
                    <span className="text-sm font-semibold text-white leading-relaxed">
                      {BROKER_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl glass-light border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shrink-0 shadow-md">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Horário de Atendimento</span>
                    <span className="text-sm font-semibold text-white leading-relaxed">
                      {BROKER_INFO.officeHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Redes Sociais
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={BROKER_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-instagram-link"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:border-pink-500/50 text-slate-300 hover:text-pink-400 text-xs font-medium transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={BROKER_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-facebook-link"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:border-blue-500/50 text-slate-300 hover:text-blue-400 text-xs font-medium transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={BROKER_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-linkedin-link"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-light hover:border-sky-500/50 text-slate-300 hover:text-sky-400 text-xs font-medium transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Preview */}
            <div className="p-6 rounded-3xl glass-dark border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Localização Privilegiada</span>
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BROKER_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Escritório corporativo no Leblon, com ambiente privativo, estacionamento e sala VIP para reuniões, análises técnicas e assinaturas.
              </p>
              <div className="h-40 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80"
                  alt="Mapa de Localização do Escritório Leblon Rio de Janeiro"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full glass-dark border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                    <span>Leblon - Rio de Janeiro - RJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-dark border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full glass-light border-2 border-white flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light">
                    Obrigado pelo seu contato, <strong className="text-white">{formData.name}</strong>. A equipe da <strong>ALTO RIO IMÓVEIS</strong> entrará em contato em breve através do número <strong className="text-white">{formData.phone}</strong>.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleSendViaWhatsAppDirect}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:bg-slate-100 hover:scale-105 transition-transform"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar Atendimento via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          propertyType: 'Apartamento de Alto Padrão',
                          neighborhood: '',
                          priceRange: 'R$ 2.5M a R$ 5M',
                          message: '',
                          lgpdAccepted: false
                        });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline py-2 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="lead-contact-form">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                      Solicite Atendimento Sob Medida
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-light">
                      Campos marcados com * são essenciais para estruturar uma curadoria alinhada aos seus critérios.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        id="contact-form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Roberto Silva"
                        className="w-full px-4 py-3 rounded-xl glass-light border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-white transition-colors"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        id="contact-form-phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(21) 99876-5432"
                        className="w-full px-4 py-3 rounded-xl glass-light border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      id="contact-form-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com.br"
                      className="w-full px-4 py-3 rounded-xl glass-light border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Tipo de Imóvel */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Tipo de Imóvel Procurado
                      </label>
                      <select
                        id="contact-form-type"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-sm outline-none focus:border-white transition-colors"
                      >
                        <option value="Apartamento de Alto Padrão">Apartamento de Alto Padrão</option>
                        <option value="Cobertura Duplex / Triplex">Cobertura Duplex / Triplex</option>
                        <option value="Casa em Condomínio Fechado">Casa em Condomínio Fechado</option>
                        <option value="Lançamento na Planta">Lançamento na Planta</option>
                        <option value="Imóvel Comercial / Laje Corporativa">Imóvel Comercial / Laje Corporativa</option>
                        <option value="Investimento / Alta Rentabilidade">Investimento / Oportunidade</option>
                        <option value="Venda do Meu Imóvel">Quero vender meu imóvel com a Alto Rio</option>
                      </select>
                    </div>

                    {/* Bairro ou Região de Interesse */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                        Bairro ou Região de Interesse
                      </label>
                      <input
                        type="text"
                        id="contact-form-neighborhood"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        placeholder="Ex: Leblon, Ipanema, Barra da Tijuca, Joá..."
                        className="w-full px-4 py-3 rounded-xl glass-light border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Faixa de Preço */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Faixa de Preço Pretendida
                    </label>
                    <select
                      id="contact-form-price-range"
                      value={formData.priceRange}
                      onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white text-sm outline-none focus:border-white transition-colors"
                    >
                      <option value="Até R$ 1.500.000">Até R$ 1.500.000</option>
                      <option value="R$ 1.5M a R$ 3.000.000">R$ 1.500.000 a R$ 3.000.000</option>
                      <option value="R$ 3.0M a R$ 6.000.000">R$ 3.000.000 a R$ 6.000.000</option>
                      <option value="R$ 6.0M a R$ 12.000.000">R$ 6.000.000 a R$ 12.000.000</option>
                      <option value="Acima de R$ 12.000.000">Acima de R$ 12.000.000 (Alto Padrão / Luxo)</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Mensagem ou Detalhes Específicos
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte sobre suas preferências (número de suítes, vista para o mar, vagas de garagem, prazo desejado)..."
                      className="w-full px-4 py-3 rounded-xl glass-light border border-white/10 text-white placeholder-slate-500 text-sm outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* LGPD Checkbox Authorization */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="contact-form-lgpd-checkbox"
                        checked={formData.lgpdAccepted}
                        onChange={(e) => setFormData({ ...formData, lgpdAccepted: e.target.checked })}
                        className="w-4 h-4 mt-0.5 rounded border-slate-700 text-white focus:ring-white accent-white cursor-pointer"
                      />
                      <span className="text-xs text-slate-400 leading-relaxed font-light">
                        Autorizo o tratamento dos meus dados pessoais fornecidos acima de acordo com a{' '}
                        <strong className="text-slate-300 font-medium">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>{' '}
                        para receber atendimento personalizado e propostas exclusivas da ALTO RIO IMÓVEIS.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-form-submit-btn"
                    className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Enviando dados com segurança...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação de Atendimento</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>Seus dados são confidenciais e nunca serão compartilhados com terceiros.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
