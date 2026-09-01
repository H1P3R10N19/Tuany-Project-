export type PropertyCategory = 
  | 'todos'
  | 'apartamentos'
  | 'casas'
  | 'alto-padrao'
  | 'lancamentos'
  | 'comerciais'
  | 'investimento';

export type PropertyStatus = 
  | 'Pronto para Morar'
  | 'Lançamento'
  | 'Em Obras'
  | 'Exclusividade Alto Rio'
  | 'Oportunidade';

export interface Property {
  id: string;
  title: string;
  subtitle: string;
  category: PropertyCategory;
  type: string; // e.g., 'Apartamento Garden', 'Cobertura Triplex', 'Mansão em Condomínio'
  neighborhood: string;
  city: string;
  state: string;
  price: number;
  formattedPrice: string;
  isPriceOnConsult?: boolean;
  condoFee?: number;
  propertyTax?: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpaces: number;
  areaM2: number;
  status: PropertyStatus;
  deliveryDate?: string;
  featured: boolean;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  virtualTourUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  image: string;
  quote: string;
  propertyType: string;
  rating: number;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  neighborhood: string;
  priceRange: string;
  message: string;
  lgpdAccepted: boolean;
}
