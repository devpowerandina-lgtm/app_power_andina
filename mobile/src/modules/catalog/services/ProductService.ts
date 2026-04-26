// ============================================================
// ProductService.ts — Mock data para el catálogo Power Andina
// ============================================================

export interface Category {
  id: string;
  name: string;
  icon: string; // emoji como ícono rápido
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string; // 'Nuevo', 'Oferta', etc.
  rating: number;
  sold: number;
}

// ────────────────────────────────────────────────────────────
// CATEGORÍAS
// ────────────────────────────────────────────────────────────
export const categories: Category[] = [
  { id: 'c1', name: 'Detergentes', icon: '🧴', color: '#dbeafe' },
  { id: 'c2', name: 'Ceras',       icon: '✨', color: '#fef9c3' },
  { id: 'c3', name: 'Desinfect.',  icon: '🧪', color: '#dcfce7' },
  { id: 'c4', name: 'Papel',       icon: '🧻', color: '#fce7f3' },
  { id: 'c5', name: 'Aromas',      icon: '🌸', color: '#ede9fe' },
  { id: 'c6', name: 'Equipos',     icon: '🔧', color: '#ffedd5' },
];

// ────────────────────────────────────────────────────────────
// PRODUCTOS DESTACADOS (FlatList horizontal)
// ────────────────────────────────────────────────────────────
export const featuredProducts: Product[] = [
  {
    id: 'f1',
    name: 'Detergente Industrial Power Clean 5L',
    price: 45900,
    originalPrice: 59900,
    image: 'https://picsum.photos/seed/clean1/400/300',
    category: 'Detergentes',
    badge: 'Oferta',
    rating: 4.8,
    sold: 320,
  },
  {
    id: 'f2',
    name: 'Cera Líquida Premium para Pisos',
    price: 32500,
    image: 'https://picsum.photos/seed/wax1/400/300',
    category: 'Ceras',
    badge: 'Nuevo',
    rating: 4.6,
    sold: 145,
  },
  {
    id: 'f3',
    name: 'Desinfectante Multiusos Lavanda 3.8L',
    price: 28000,
    originalPrice: 35000,
    image: 'https://picsum.photos/seed/disinfect1/400/300',
    category: 'Desinfectantes',
    badge: 'Oferta',
    rating: 4.9,
    sold: 512,
  },
];

// ────────────────────────────────────────────────────────────
// CATÁLOGO GENERAL (FlatList 2 columnas)
// ────────────────────────────────────────────────────────────
export const catalogProducts: Product[] = [
  {
    id: 'p1',
    name: 'Limpiador Multiusos Citrus 1L',
    price: 12500,
    image: 'https://picsum.photos/seed/prod1/300/300',
    category: 'Detergentes',
    rating: 4.5,
    sold: 88,
  },
  {
    id: 'p2',
    name: 'Cera Acrílica Alto Brillo 3.8L',
    price: 38000,
    originalPrice: 45000,
    image: 'https://picsum.photos/seed/prod2/300/300',
    category: 'Ceras',
    badge: 'Oferta',
    rating: 4.7,
    sold: 210,
  },
  {
    id: 'p3',
    name: 'Jabón Líquido de Manos 500ml',
    price: 8900,
    image: 'https://picsum.photos/seed/prod3/300/300',
    category: 'Aseo',
    rating: 4.3,
    sold: 450,
  },
  {
    id: 'p4',
    name: 'Limpiavidrios Cristal Clear 750ml',
    price: 15200,
    image: 'https://picsum.photos/seed/prod4/300/300',
    category: 'Detergentes',
    badge: 'Nuevo',
    rating: 4.6,
    sold: 67,
  },
  {
    id: 'p5',
    name: 'Aromatizante Ambiente Brisa Marina',
    price: 11000,
    image: 'https://picsum.photos/seed/prod5/300/300',
    category: 'Aromas',
    rating: 4.4,
    sold: 130,
  },
  {
    id: 'p6',
    name: 'Cloro Concentrado 3.8L',
    price: 18500,
    originalPrice: 22000,
    image: 'https://picsum.photos/seed/prod6/300/300',
    category: 'Desinfectantes',
    badge: 'Oferta',
    rating: 4.8,
    sold: 390,
  },
  {
    id: 'p7',
    name: 'Papel Higiénico Industrial x48',
    price: 55000,
    image: 'https://picsum.photos/seed/prod7/300/300',
    category: 'Papel',
    rating: 4.5,
    sold: 175,
  },
  {
    id: 'p8',
    name: 'Desengrasante Heavy Duty 2L',
    price: 24800,
    image: 'https://picsum.photos/seed/prod8/300/300',
    category: 'Detergentes',
    badge: 'Nuevo',
    rating: 4.7,
    sold: 92,
  },
];

export interface PromotionalBanner {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

// ────────────────────────────────────────────────────────────
// BANNERS PROMOCIONALES (Hero Banners)
// ────────────────────────────────────────────────────────────
export const promotionalBanners: PromotionalBanner[] = [
  {
    id: 'b1',
    title: '20% en Desengrasantes',
    subtitle: 'Limpia profundamente con Power Andina',
    bgColor: 'bg-power-blue',
  },
  {
    id: 'b2',
    title: 'Nuevos Suavizantes',
    subtitle: 'Fragancias que perduran por más tiempo',
    bgColor: 'bg-power-lightGreen',
  },
  {
    id: 'b3',
    title: 'Kits de Limpieza',
    subtitle: 'Todo lo que necesitas en un solo pack',
    bgColor: 'bg-power-yellow',
  },
];

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
