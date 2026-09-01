import React, { useState, useMemo } from 'react';
import { 
  Building, 
  Home, 
  Crown, 
  Sparkles, 
  Briefcase, 
  TrendingUp, 
  Layers, 
  Search, 
  SlidersHorizontal, 
  X,
  ChevronDown
} from 'lucide-react';
import { Property, PropertyCategory } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertiesSectionProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

const CATEGORIES: { id: PropertyCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'todos', label: 'Todos os Imóveis', icon: <Layers className="w-4 h-4" /> },
  { id: 'apartamentos', label: 'Apartamentos', icon: <Building className="w-4 h-4" /> },
  { id: 'casas', label: 'Casas', icon: <Home className="w-4 h-4" /> },
  { id: 'alto-padrao', label: 'Alto Padrão', icon: <Crown className="w-4 h-4" /> },
  { id: 'lancamentos', label: 'Lançamentos', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'comerciais', label: 'Imóveis Comerciais', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'investimento', label: 'Investimento', icon: <TrendingUp className="w-4 h-4" /> },
];

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty
}) => {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('todas');
  const [maxPrice, setMaxPrice] = useState<number>(20000000);
  const [minBedrooms, setMinBedrooms] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(6);

  // Extract unique cities
  const uniqueCities = useMemo(() => {
    const cities = properties.map((p) => p.city);
    return Array.from(new Set(cities));
  }, [properties]);

  // Filtered properties logic
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Category match
      if (activeCategory !== 'todos' && p.category !== activeCategory) {
        return false;
      }

      // Search Query (title, neighborhood, city, description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesNeighborhood = p.neighborhood.toLowerCase().includes(query);
        const matchesCity = p.city.toLowerCase().includes(query);
        const matchesType = p.type.toLowerCase().includes(query);
        if (!matchesTitle && !matchesNeighborhood && !matchesCity && !matchesType) {
          return false;
        }
      }

      // City filter
      if (cityFilter !== 'todas' && p.city !== cityFilter) {
        return false;
      }

      // Max price
      if (p.price > maxPrice) {
        return false;
      }

      // Min bedrooms
      if (minBedrooms > 0 && p.bedrooms < minBedrooms) {
        return false;
      }

      return true;
    });
  }, [properties, activeCategory, searchQuery, cityFilter, maxPrice, minBedrooms]);

  const displayedList = filteredProperties.slice(0, displayLimit);
  const hasMore = displayedList.length < filteredProperties.length;

  const resetAllFilters = () => {
    setActiveCategory('todos');
    setSearchQuery('');
    setCityFilter('todas');
    setMaxPrice(20000000);
    setMinBedrooms(0);
    setDisplayLimit(6);
  };

  return (
    <section id="imoveis" className="py-24 sm:py-32 bg-[#020617] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-light border border-white/10 text-[#F6F4EE] text-xs font-semibold tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Portfólio Exclusivo</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Projetos e Imóveis em Destaque
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Conheça nossa seleção criteriosa de residências de alto padrão, coberturas exclusivas e oportunidades de investimento.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              id="toggle-advanced-filters-btn"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                showFilters || cityFilter !== 'todas' || minBedrooms > 0 || maxPrice < 20000000
                  ? 'bg-white border-transparent text-slate-950 shadow-lg'
                  : 'glass-light border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{showFilters ? 'Ocultar Filtros' : 'Filtros Avançados'}</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="space-y-6 mb-10">
          {/* Quick Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="property-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por bairro, condomínio, cidade ou tipo de imóvel..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl glass-light border border-white/10 focus:border-white text-slate-100 placeholder-slate-500 text-sm outline-none transition-all shadow-inner backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`category-tab-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-lg'
                      : 'glass-light text-slate-300 border border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-slate-950' : 'text-[#F6F4EE]'}>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Expandable Advanced Filters Tray */}
          {showFilters && (
            <div className="p-6 rounded-3xl glass-dark border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fadeIn shadow-2xl">
              {/* City selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Cidade
                </label>
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm outline-none focus:border-white"
                >
                  <option value="todas">Todas as Cidades</option>
                  {uniqueCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms filter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Mínimo de Quartos
                </label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setMinBedrooms(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        minBedrooms === num
                          ? 'bg-white text-slate-950 border-transparent'
                          : 'bg-slate-950/60 text-slate-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      {num === 0 ? 'Todos' : `${num}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max price slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Valor Máximo
                  </label>
                  <span className="text-xs font-bold text-[#F6F4EE] font-serif">
                    {maxPrice >= 20000000
                      ? 'Sem limite'
                      : `Até R$ ${(maxPrice / 1000000).toFixed(1)} Milhões`}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={20000000}
                  step={500000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Counter & Active Filters Tag */}
        <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-slate-400">
          <div>
            Mostrando <span className="text-white font-semibold">{displayedList.length}</span> de{' '}
            <span className="text-white font-semibold">{filteredProperties.length}</span> imóveis selecionados
          </div>

          {(activeCategory !== 'todos' || searchQuery || cityFilter !== 'todas' || minBedrooms > 0 || maxPrice < 20000000) && (
            <button
              onClick={resetAllFilters}
              className="text-[#F6F4EE] hover:underline flex items-center gap-1 text-xs cursor-pointer"
            >
              <span>Limpar filtros</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Properties Grid */}
        {displayedList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedList.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl">
            <div className="w-16 h-16 rounded-full glass-light border border-white/10 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Nenhum imóvel encontrado com esses critérios
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 font-light">
              Experimente ajustar os filtros ou entre em contato com a ALTO RIO IMÓVEIS para solicitar uma busca exclusiva sob encomenda.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2.5 rounded-full bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-transform cursor-pointer"
            >
              Ver todos os imóveis
            </button>
          </div>
        )}

        {/* "Ver todos os imóveis" Button Section */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setDisplayLimit((prev) => prev + 6)}
              id="view-all-properties-btn"
              className="px-8 py-4 rounded-full glass-light border border-white/20 hover:border-white/40 text-[#F6F4EE] font-bold text-xs tracking-wider uppercase shadow-xl hover:bg-white hover:text-slate-950 transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Ver todos os imóveis ({filteredProperties.length - displayedList.length} restantes)</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
