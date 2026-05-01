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
  images?: string[]; // Para el carrusel de detalles
  category: string;
  badge?: string; // 'Nuevo', 'Oferta', etc.
  rating: number;
  sold: number;
  description?: string;
  sizes?: string[];
  aromas?: string[];
  priceBySize?: Record<string, number>;
}

// ────────────────────────────────────────────────────────────
// CATEGORÍAS
// ────────────────────────────────────────────────────────────
export const categories: Category[] = [
  { id: 'c1', name: 'Detergentes',    icon: '🧴', color: '#dbeafe' },
  { id: 'c2', name: 'Ceras',          icon: '✨', color: '#fef9c3' },
  { id: 'c3', name: 'Desinfectantes', icon: '🧪', color: '#dcfce7' },
  { id: 'c4', name: 'Papel',          icon: '🧻', color: '#fce7f3' },
  { id: 'c5', name: 'Aromas',         icon: '🌸', color: '#ede9fe' },
  { id: 'c6', name: 'Equipos',        icon: '🔧', color: '#ffedd5' },
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
    images: [
      'https://picsum.photos/seed/prod1/600/600',
      'https://picsum.photos/seed/prod1b/600/600',
      'https://picsum.photos/seed/prod1c/600/600',
    ],
    category: 'Detergentes',
    rating: 4.5,
    sold: 88,
    description: 'Poderoso limpiador multiusos con aroma cítrico. Elimina grasa y suciedad en una sola pasada sin dejar residuos. Ideal para cocinas, baños y pisos.',
    sizes: ['1LT', 'GL', 'GF'],
    priceBySize: { '1LT': 12500, 'GL': 45000, 'GF': 180000 },
    aromas: ['Cítrico', 'Lavanda', 'Neutro', 'Pino', 'Brisa Marina', 'Manzana', 'Eucalipto', 'Floral'],
  },
  {
    id: 'p2',
    name: 'Cera Acrílica Alto Brillo 3.8L',
    price: 38000,
    originalPrice: 45000,
    image: 'https://picsum.photos/seed/prod2/300/300',
    images: [
      'https://picsum.photos/seed/prod2/600/600',
      'https://picsum.photos/seed/prod2b/600/600',
    ],
    category: 'Ceras',
    badge: 'Oferta',
    rating: 4.7,
    sold: 210,
    description: 'Cera acrílica de alta resistencia que proporciona un brillo espejo duradero. Protege tus pisos de rayones y tráfico pesado.',
    sizes: ['1LT', '3.8L', 'GL'],
    priceBySize: { '1LT': 12000, '3.8L': 38000, 'GL': 42000 },
  },
  {
    id: 'p3',
    name: 'Jabón Líquido de Manos 500ml',
    price: 8900,
    image: 'https://picsum.photos/seed/prod3/300/300',
    images: ['https://picsum.photos/seed/prod3/600/600'],
    category: 'Detergentes',
    rating: 4.3,
    sold: 450,
    description: 'Jabón suave para manos con glicerina y vitamina E. Protege tu piel mientras elimina bacterias efectivamente.',
    sizes: ['500ml', '1LT', 'GL'],
    aromas: ['Frutos Rojos', 'Aloe Vera', 'Neutro'],
  },
  {
    id: 'p4',
    name: 'Limpiavidrios Cristal Clear 750ml',
    price: 15200,
    image: 'https://picsum.photos/seed/prod4/300/300',
    images: ['https://picsum.photos/seed/prod4/600/600'],
    category: 'Detergentes',
    badge: 'Nuevo',
    rating: 4.6,
    sold: 67,
    description: 'Fórmula anti-empañante que deja tus vidrios y espejos impecables y sin vetas por más tiempo.',
    sizes: ['750ml', '1LT'],
  },
];

export interface PromotionalBanner {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  image?: string;
  targetProductId?: string;
  targetCategoryId?: string;
  badgeText?: string;
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
    image: 'https://picsum.photos/seed/banner1/800/450',
    targetCategoryId: 'c1',
    badgeText: 'Oferta Relámpago ⚡',
  },
  {
    id: 'b2',
    title: 'Nuevos Suavizantes',
    subtitle: 'Fragancias que perduran por más tiempo',
    bgColor: 'bg-power-lightGreen',
    image: 'https://picsum.photos/seed/banner2/800/450',
    targetProductId: 'p1',
    badgeText: 'Exclusivo App',
  },
  {
    id: 'b3',
    title: 'Kits de Limpieza',
    subtitle: 'Todo lo que necesitas en un solo pack',
    bgColor: 'bg-power-yellow',
    image: 'https://picsum.photos/seed/banner3/800/450',
    targetProductId: 'f1',
    badgeText: 'Últimas Horas',
  },
];

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
export const getProductById = (id: string): Product | undefined => {
  return [...featuredProducts, ...catalogProducts].find((p) => p.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return [];
  
  // Filtramos tanto los destacados como el catálogo general que coincidan con el nombre de la categoría
  const allProducts = [...featuredProducts, ...catalogProducts];
  return allProducts.filter((p) => p.category.toLowerCase() === category.name.toLowerCase());
};

export const getExploreProducts = (): Product[] => {
  return [
    {
      id: 'e1',
      name: 'Kit de Inicio Limpieza Hogar',
      price: 85000,
      originalPrice: 110000,
      image: 'https://picsum.photos/seed/kit1/400/400',
      category: 'Kits',
      badge: '🔥 20% OFF',
      rating: 4.9,
      sold: 120,
      description: 'Todo lo que necesitas para empezar a limpiar tu hogar con la calidad de Power Andina.',
    },
    {
      id: 'e2',
      name: 'Desinfectante Galón Pino',
      price: 22000,
      image: 'https://picsum.photos/seed/dis1/400/400',
      category: 'Desinfectantes',
      badge: '✨ NUEVO',
      rating: 4.7,
      sold: 85,
    },
    {
      id: 'e3',
      name: 'Papel Higiénico Institucional x 4',
      price: 48000,
      originalPrice: 55000,
      image: 'https://picsum.photos/seed/paper1/400/400',
      category: 'Papel',
      badge: '🔥 OFERTA',
      rating: 4.8,
      sold: 300,
    },
    {
      id: 'e4',
      name: 'Cera Roja Premium 1L',
      price: 15900,
      image: 'https://picsum.photos/seed/wax2/400/400',
      category: 'Ceras',
      badge: '✨ NUEVO',
      rating: 4.6,
      sold: 42,
    },
    {
      id: 'e5',
      name: 'Detergente en Polvo 5kg',
      price: 32000,
      originalPrice: 38000,
      image: 'https://picsum.photos/seed/det1/400/400',
      category: 'Detergentes',
      badge: '🔥 15% OFF',
      rating: 4.5,
      sold: 156,
    },
    {
      id: 'e6',
      name: 'Ambientador Spray Brisa 500ml',
      price: 12500,
      image: 'https://picsum.photos/seed/air1/400/400',
      category: 'Aromas',
      badge: '✨ NUEVO',
      rating: 4.4,
      sold: 98,
    },
    {
      id: 'e7',
      name: 'Escoba Industrial Reforzada',
      price: 25000,
      image: 'https://picsum.photos/seed/tool1/400/400',
      category: 'Equipos',
      badge: '✨ TOP',
      rating: 4.9,
      sold: 210,
    },
    {
      id: 'e8',
      name: 'Desengrasante de Motores 5L',
      price: 55000,
      originalPrice: 65000,
      image: 'https://picsum.photos/seed/deg1/400/400',
      category: 'Detergentes',
      badge: '🔥 PROMO',
      rating: 4.7,
      sold: 75,
    },
  ];
};
