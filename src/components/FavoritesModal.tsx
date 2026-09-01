import React from 'react';
import { X, Heart, Trash2, ArrowRight, MessageCircle, MapPin, Bed, Car, Maximize } from 'lucide-react';
import { Property } from '../types';
import { BROKER_INFO } from '../data/brokerData';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Property[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProperty
}) => {
  if (!isOpen) return null;

  const handleSendWishlistToWhatsApp = () => {
    if (favorites.length === 0) return;
    const titles = favorites.map((p, idx) => `${idx + 1}. ${p.title} (${p.neighborhood}, ${p.city} - ${p.formattedPrice})`).join('\n');
    const message = `Olá! Salvei os seguintes imóveis favoritos no site da ALTO RIO IMÓVEIS e gostaria de agendar uma consulta sobre eles:\n\n${titles}`;
    window.open(`https://wa.me/${BROKER_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-dark border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-md">
              <Heart className="w-5 h-5 fill-slate-950/20" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Imóveis Salvos ({favorites.length})
              </h3>
              <p className="text-xs text-slate-400 font-light">Sua lista de interesses para consultoria exclusiva</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full glass-light border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="overflow-y-auto py-6 space-y-4 flex-1">
          {favorites.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-3">
              <Heart className="w-12 h-12 mx-auto text-slate-600 stroke-1" />
              <p className="text-sm font-light">Você ainda não adicionou nenhum imóvel aos favoritos.</p>
              <p className="text-xs text-slate-500 font-light">
                Clique no ícone de coração nos cards de imóveis para salvar opções e compará-las.
              </p>
            </div>
          ) : (
            favorites.map((prop) => (
              <div
                key={prop.id}
                className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-light border border-white/10 hover:border-white/20 transition-all shadow-md"
              >
                <img
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-full sm:w-28 h-24 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 w-full text-left">
                  <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                    {prop.neighborhood}, {prop.city}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white leading-tight">
                    {prop.title}
                  </h4>
                  <div className="text-sm font-bold text-white font-serif mt-1">
                    {prop.formattedPrice}
                  </div>
                  <div className="flex gap-3 text-xs text-slate-400 mt-1 font-light">
                    <span>{prop.bedrooms} Q</span>
                    <span>•</span>
                    <span>{prop.parkingSpaces} Vagas</span>
                    <span>•</span>
                    <span>{prop.areaM2} m²</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Detalhes</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(prop.id)}
                    className="p-2 rounded-full glass-light border border-white/5 text-slate-400 hover:text-red-400 hover:border-red-500/30 transition-all"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {favorites.length > 0 && (
          <div className="pt-4 border-t border-white/10 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-light">
              Envie sua lista de favoritos para receber uma análise comparativa da equipe ALTO RIO IMÓVEIS.
            </span>
            <button
              onClick={handleSendWishlistToWhatsApp}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Lista pelo WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
