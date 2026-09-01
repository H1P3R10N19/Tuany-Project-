import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ChevronUp 
} from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';
import { AltoRioLogo } from './AltoRioLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <AltoRioLogo />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Mais do que imóveis, realizamos projetos de vida. Curadoria e assessoria especializada em imóveis de alto padrão, coberturas e lançamentos no Rio de Janeiro com total segurança jurídica.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BROKER_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Alto Rio Imóveis"
                className="w-10 h-10 rounded-full glass-light border border-white/10 hover:border-white/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BROKER_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Alto Rio Imóveis"
                className="w-10 h-10 rounded-full glass-light border border-white/10 hover:border-white/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BROKER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Alto Rio Imóveis"
                className="w-10 h-10 rounded-full glass-light border border-white/10 hover:border-white/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BROKER_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Alto Rio Imóveis"
                className="w-10 h-10 rounded-full glass-light border border-white/10 hover:border-emerald-500 flex items-center justify-center text-emerald-400 hover:text-white transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Imobiliária</a>
              </li>
              <li>
                <a href="#imoveis" className="hover:text-white transition-colors">Imóveis e Projetos</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais & Processo</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato & Atendimento</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categorias de Imóveis */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li><a href="#imoveis" className="hover:text-white transition-colors">Apartamentos</a></li>
              <li><a href="#imoveis" className="hover:text-white transition-colors">Casas em Condomínio</a></li>
              <li><a href="#imoveis" className="hover:text-white transition-colors">Alto Padrão</a></li>
              <li><a href="#imoveis" className="hover:text-white transition-colors">Lançamentos</a></li>
              <li><a href="#imoveis" className="hover:text-white transition-colors">Comerciais</a></li>
              <li><a href="#imoveis" className="hover:text-white transition-colors">Investimentos</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Atendimento Direto
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="text-slate-300">{BROKER_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span className="text-slate-300">{BROKER_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span className="text-slate-300 break-all">{BROKER_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-slate-300 font-semibold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Registro Profissional: {BROKER_INFO.creci}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-400 font-medium">{BROKER_INFO.name}</strong>. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Política de Privacidade & LGPD
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              onClick={scrollToTop}
              title="Voltar ao topo"
              className="w-9 h-9 rounded-full glass-light border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/40 transition-colors ml-2 shadow-md cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
