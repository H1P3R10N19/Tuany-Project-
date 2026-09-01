import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || customMsg || 'Olá! Estou no site da ALTO RIO IMÓVEIS e gostaria de tirar dúvidas sobre os imóveis.';
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${encodeURIComponent(finalMsg)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const quickPrompts = [
    'Quero ver lançamentos exclusivos no Rio',
    'Gostaria de agendar uma visita guiada',
    'Busco cobertura no Leblon / Ipanema',
    'Quero anunciar meu imóvel com a Alto Rio'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl glass-dark border border-white/20 shadow-2xl shadow-black/80 overflow-hidden animate-fadeIn backdrop-blur-2xl">
          {/* Top Header */}
          <div className="glass-light p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={BROKER_INFO.portraitImage}
                  alt="ALTO RIO IMÓVEIS"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/40 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#020617]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white leading-tight uppercase">ALTO RIO IMÓVEIS</h4>
                <p className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                  Online para Atendimento VIP
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full glass-light border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 bg-[#020617]/90 text-xs text-slate-200 max-h-72 overflow-y-auto font-light">
            <div className="p-3.5 rounded-2xl glass-light border border-white/10 text-slate-200 leading-relaxed shadow-sm">
              <p className="mb-1">
                Olá! Seja muito bem-vindo(a) à <strong className="text-white">ALTO RIO IMÓVEIS</strong>.
              </p>
              <p className="text-slate-400">
                Como podemos ajudar você a encontrar o imóvel dos seus sonhos hoje?
              </p>
            </div>

            {/* Quick suggested chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium block">
                Sugestões rápidas:
              </span>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2.5 rounded-xl glass-light hover:bg-white/10 border border-white/10 hover:border-white/30 text-[11px] text-slate-300 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{prompt}</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 glass-light border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-3.5 py-2 rounded-xl glass-light border border-white/10 text-white text-xs outline-none focus:border-white"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        aria-label="Abrir chat no WhatsApp com a Alto Rio Imóveis"
        className="relative group p-4 rounded-full bg-white text-slate-950 shadow-2xl shadow-black/80 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/40"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#020617] animate-pulse" />
        <MessageCircle className="w-6 h-6 fill-slate-950/20 text-slate-950" />
        
        {/* Tooltip on hover */}
        {!isOpen && (
          <span className="hidden sm:group-hover:flex absolute right-full mr-3 px-3.5 py-1.5 rounded-xl glass-dark border border-white/20 text-xs font-semibold text-slate-200 whitespace-nowrap shadow-xl">
            Falar com a ALTO RIO
          </span>
        )}
      </button>
    </div>
  );
};
