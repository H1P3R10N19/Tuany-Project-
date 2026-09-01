import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Heart, Shield } from 'lucide-react';
import { BROKER_INFO } from '../data/brokerData';
import { AltoRioLogo } from './AltoRioLogo';

interface HeaderProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({ favoriteCount, onOpenFavorites }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre a corretora', href: '#sobre' },
    { label: 'Imóveis e projetos', href: '#imoveis' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Acessei o site da ALTO RIO IMÓVEIS e gostaria de um atendimento personalizado para encontrar um imóvel.');
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" id="brand-logo" className="group flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <AltoRioLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors duration-200 font-medium relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Wishlist Button */}
          <button
            onClick={onOpenFavorites}
            id="header-favorites-btn"
            title="Ver Imóveis Salvos"
            className="relative p-2.5 rounded-full glass-light border border-white/10 text-slate-300 hover:text-white hover:border-white/40 transition-all hover:scale-105"
            aria-label="Ver favoritos"
          >
            <Heart className="w-4 h-4" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-slate-950 text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            id="header-whatsapp-cta"
            className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-98 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950/20" />
            <span>Fale pelo WhatsApp</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-lg glass-light border border-white/10 text-slate-300"
            aria-label="Favoritos"
          >
            <Heart className="w-5 h-5" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-slate-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2.5 rounded-lg glass-dark border border-white/10 text-slate-200 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden glass-dark border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fale pelo WhatsApp</span>
              </button>
              <div className="text-center text-xs text-slate-400 pt-2 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>Atendimento Sigiloso & Consultoria Exclusiva</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
