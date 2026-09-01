import React, { useState } from 'react';
import { 
  Bed, 
  Car, 
  Maximize, 
  MapPin, 
  ArrowRight, 
  Heart, 
  Eye, 
  Sparkles,
  Check
} from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelectProperty
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`property-card-${property.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl glass-dark border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-black/80 hover:-translate-y-1"
    >
      {/* Media & Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-slate-950">
        <img
          src={property.images[currentImageIndex] || property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Top Badges Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {property.badge && (
              <span className="px-3 py-1 rounded-full glass-light backdrop-blur-md border border-white/10 text-gold text-[11px] font-semibold tracking-wide shadow-md">
                {property.badge}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full glass-light backdrop-blur-md border border-white/10 text-slate-300 text-[10px] font-medium uppercase tracking-wider">
              {property.status}
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            id={`favorite-btn-${property.id}`}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            className="pointer-events-auto w-9 h-9 rounded-full glass-light backdrop-blur-md border border-white/10 hover:border-gold flex items-center justify-center text-white transition-transform active:scale-90 hover:scale-105"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? 'fill-white text-white' : 'text-slate-300 hover:text-white'
              }`}
            />
          </button>
        </div>

        {/* Category Tag pill */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full glass-dark backdrop-blur-md text-[#F6F4EE] text-xs font-medium border border-white/10">
            {property.type}
          </span>
        </div>

        {/* Multi-image indicators if more than 1 image */}
        {property.images.length > 1 && isHovered && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {property.images.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentImageIndex === idx ? 'bg-white w-3' : 'bg-white/50'
                }`}
                aria-label={`Ver imagem ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Gradient dark fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Card Body Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Location Line */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#F6F4EE] shrink-0" />
            <span className="truncate">{property.neighborhood}, {property.city} - {property.state}</span>
          </div>

          {/* Project / Property Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors leading-snug mb-2 line-clamp-1">
            {property.title}
          </h3>

          {/* Subtitle / Key Hook */}
          <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-light">
            {property.subtitle || property.shortDescription}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-slate-300 text-xs mb-5">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#F6F4EE]" />
              <span>
                {property.bedrooms === 0 ? 'Laje livre' : `${property.bedrooms} ${property.bedrooms === 1 ? 'Quarto' : 'Quartos'}`}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#F6F4EE]" />
              <span>{property.parkingSpaces} {property.parkingSpaces === 1 ? 'Vaga' : 'Vagas'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="w-3.5 h-3.5 text-[#F6F4EE]" />
              <span>{property.areaM2} m²</span>
            </div>
          </div>
        </div>

        {/* Footer: Price & CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
              Investimento
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white">
              {property.isPriceOnConsult ? 'Consulte' : property.formattedPrice}
            </span>
          </div>

          <button
            onClick={() => onSelectProperty(property)}
            id={`view-details-btn-${property.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 group/btn shadow-md active:scale-95 cursor-pointer"
          >
            <span>Ver detalhes</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
