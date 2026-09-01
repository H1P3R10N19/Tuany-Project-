/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PropertiesSection } from './components/PropertiesSection';
import { ProcessSteps } from './components/ProcessSteps';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { FavoritesModal } from './components/FavoritesModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';
import { PROPERTIES_DATA } from './data/propertiesData';
import { Property } from './types';

export default function App() {
  const [properties] = useState<Property[]>(PROPERTIES_DATA);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('altorio_favorites');
      return saved ? JSON.parse(saved) : ['prop-01', 'prop-02'];
    } catch {
      return ['prop-01', 'prop-02'];
    }
  });
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('altorio_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExploreClick = () => {
    const el = document.getElementById('imoveis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Favorite Property objects list
  const favoriteProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col relative selection:bg-[#D4AF37] selection:text-slate-950">
      {/* Fixed Sticky Header */}
      <Header
        favoriteCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Page Content Sections */}
      <main className="flex-1">
        {/* Fullscreen Video Hero Section */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onContactClick={handleContactClick}
        />

        {/* About the Broker Section */}
        <AboutSection />

        {/* Featured Projects & Properties Grid */}
        <PropertiesSection
          properties={properties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* Process & Differentials */}
        <ProcessSteps />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* High Impact Call to Action Banner */}
        <CtaBanner onRequestConsultation={handleContactClick} />

        {/* Comprehensive Contact & LGPD Form */}
        <ContactSection />
      </main>

      {/* Elegant Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Saved Favorites Wishlist Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteProperties}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      {/* Legal Policies Modal (Privacy & Terms) */}
      <LegalModals
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
