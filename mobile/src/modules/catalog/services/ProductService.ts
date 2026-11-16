// ============================================================
// ProductService.ts — Catálogo Oficial Power Andina
// ============================================================

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  badge?: string;
  rating: number;
  sold: number;
  description?: string;
  sizes?: string[];
  aromas?: string[];
  priceBySize?: Record<string, number>;
  brandId?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo_url?: any;
  banner_url?: any;
}

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
// CATEGORÍAS OFICIALES
// ────────────────────────────────────────────────────────────
export const categories: Category[] = [
  { id: 'c_hogar',        name: 'Hogar',              icon: '🏠', color: '#e0f2fe' },
  { id: 'c_lavanderia',   name: 'Lavandería',         icon: '🧺', color: '#f3e8ff' },
  { id: 'c_automovil',    name: 'Automóvil',          icon: '🚗', color: '#fee2e2' },
  { id: 'c_cuidado',      name: 'Cuidado Personal',   icon: '🧴', color: '#dcfce7' },
  { id: 'c_cocina',       name: 'Cocina',             icon: '🍳', color: '#fef3c7' },
  { id: 'c_pisos',        name: 'Pisos',              icon: '✨', color: '#fef9c3' },
  { id: 'c_desinfeccion', name: 'Desinfección',       icon: '🧪', color: '#ccfbf1' },
  { id: 'c_traperos',     name: 'Traperos',           icon: '🧹', color: '#ffedd5' },
  { id: 'c_tercerizados', name: 'Accesorios y Varios', icon: '🛍️', color: '#f1f5f9' },
];

// ────────────────────────────────────────────────────────────
// PRODUCTOS DESTACADOS
// ────────────────────────────────────────────────────────────
export const featuredProducts: Product[] = [
  {
    "id": "f1",
    "name": "Jabon Blúrey Fantasia",
    "price": 5500,
    "originalPrice": 6600,
    "image": "https://picsum.photos/seed/power_1/400/300",
    "category": "Hogar",
    "badge": "Destacado",
    "rating": 4.2,
    "sold": 50,
    "brandId": "br1",
    "sizes": [
      "3 LT",
      "20 LT",
      "1 LT",
      "4 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3 LT": 19040,
      "20 LT": 72000,
      "1 LT": 5500,
      "4 LT": 25386,
      "2 LT": 9800
    },
    "description": "Jabon Blúrey Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "f2",
    "name": "Detergente En Polvo Multiusos Good Morning",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://picsum.photos/seed/power_2/400/300",
    "category": "Lavandería",
    "badge": "Destacado",
    "rating": 4.3,
    "sold": 87,
    "brandId": "br2",
    "sizes": [
      "500 GR",
      "20 KG",
      "2 KG",
      "1 KG",
      "7.5 KG"
    ],
    "priceBySize": {
      "500 GR": 1800,
      "2 KG": 9000,
      "1 KG": 4500,
      "7.5 KG": 35000
    },
    "description": "Detergente En Polvo Multiusos Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "f3",
    "name": "Ambientador De Espacios Fantasia New Carr",
    "price": 4000,
    "originalPrice": 4800,
    "image": "https://picsum.photos/seed/power_3/400/300",
    "category": "Automóvil",
    "badge": "Destacado",
    "rating": 4.4,
    "sold": 124,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "250 ML",
      "3",
      "120 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "20 LT": 16000,
      "250 ML": 6500,
      "120 ML": 4000
    },
    "aromas": [
      "NEW CARR"
    ],
    "description": "Ambientador De Espacios Fantasia New Carr con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "f4",
    "name": "Jabon Ph Balanceado Nectar Natural Wind",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://picsum.photos/seed/power_4/400/300",
    "category": "Cuidado Personal",
    "badge": "Destacado",
    "rating": 4.5,
    "sold": 161,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "20 LT": 42500,
      "500 ML": 3200,
      "1 LT": 5600,
      "300 ML": 1800
    },
    "aromas": [
      "NECTAR NATURAL"
    ],
    "description": "Jabon Ph Balanceado Nectar Natural Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "f5",
    "name": "Jabon Ph Balanceado Avena & Miel Wind",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://picsum.photos/seed/power_5/400/300",
    "category": "Cuidado Personal",
    "badge": "Destacado",
    "rating": 4.6,
    "sold": 198,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "20 LT": 42500,
      "500 ML": 3200,
      "1 LT": 5600,
      "300 ML": 1800
    },
    "aromas": [
      "AVENA & MIEL"
    ],
    "description": "Jabon Ph Balanceado Avena & Miel Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "f6",
    "name": "Ambientador De Espacios Fantasia New Gam",
    "price": 4000,
    "originalPrice": 4800,
    "image": "https://picsum.photos/seed/power_6/400/300",
    "category": "Automóvil",
    "badge": "Destacado",
    "rating": 4.7,
    "sold": 235,
    "brandId": "br1",
    "sizes": [
      "250 ML",
      "20 LT",
      "3",
      "120 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "250 ML": 6500,
      "20 LT": 16000,
      "120 ML": 4000
    },
    "aromas": [
      "NEW GAM"
    ],
    "description": "Ambientador De Espacios Fantasia New Gam con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  }
];

// ────────────────────────────────────────────────────────────
// CATÁLOGO GENERAL
// ────────────────────────────────────────────────────────────
export const catalogProducts: Product[] = [
  {
    "id": "p1",
    "name": "Jabon Blúrey Fantasia",
    "price": 5500,
    "originalPrice": 6875,
    "image": "https://picsum.photos/seed/power_1/300/300",
    "images": [
      "https://picsum.photos/seed/power_1/600/600",
      "https://picsum.photos/seed/power_1b/600/600",
      "https://picsum.photos/seed/power_1c/600/600"
    ],
    "category": "Hogar",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 50,
    "brandId": "br1",
    "sizes": [
      "3 LT",
      "20 LT",
      "1 LT",
      "4 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3 LT": 19040,
      "20 LT": 72000,
      "1 LT": 5500,
      "4 LT": 25386,
      "2 LT": 9800
    },
    "description": "Jabon Blúrey Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p2",
    "name": "Detergente En Polvo Multiusos Good Morning",
    "price": 1800,
    "image": "https://picsum.photos/seed/power_2/300/300",
    "images": [
      "https://picsum.photos/seed/power_2/600/600",
      "https://picsum.photos/seed/power_2b/600/600",
      "https://picsum.photos/seed/power_2c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.3,
    "sold": 87,
    "brandId": "br2",
    "sizes": [
      "500 GR",
      "20 KG",
      "2 KG",
      "1 KG",
      "7.5 KG"
    ],
    "priceBySize": {
      "500 GR": 1800,
      "2 KG": 9000,
      "1 KG": 4500,
      "7.5 KG": 35000
    },
    "description": "Detergente En Polvo Multiusos Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p3",
    "name": "Ambientador De Espacios Fantasia New Carr",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_3/300/300",
    "images": [
      "https://picsum.photos/seed/power_3/600/600",
      "https://picsum.photos/seed/power_3b/600/600",
      "https://picsum.photos/seed/power_3c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.4,
    "sold": 124,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "250 ML",
      "3",
      "120 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "20 LT": 16000,
      "250 ML": 6500,
      "120 ML": 4000
    },
    "aromas": [
      "NEW CARR"
    ],
    "description": "Ambientador De Espacios Fantasia New Carr con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p4",
    "name": "Jabon Ph Balanceado Nectar Natural Wind",
    "price": 1800,
    "image": "https://picsum.photos/seed/power_4/300/300",
    "images": [
      "https://picsum.photos/seed/power_4/600/600",
      "https://picsum.photos/seed/power_4b/600/600",
      "https://picsum.photos/seed/power_4c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.5,
    "sold": 161,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "20 LT": 42500,
      "500 ML": 3200,
      "1 LT": 5600,
      "300 ML": 1800
    },
    "aromas": [
      "NECTAR NATURAL"
    ],
    "description": "Jabon Ph Balanceado Nectar Natural Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p5",
    "name": "Jabon Ph Balanceado Avena & Miel Wind",
    "price": 1800,
    "originalPrice": 2250,
    "image": "https://picsum.photos/seed/power_5/300/300",
    "images": [
      "https://picsum.photos/seed/power_5/600/600",
      "https://picsum.photos/seed/power_5b/600/600",
      "https://picsum.photos/seed/power_5c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.6,
    "sold": 198,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "20 LT": 42500,
      "500 ML": 3200,
      "1 LT": 5600,
      "300 ML": 1800
    },
    "aromas": [
      "AVENA & MIEL"
    ],
    "description": "Jabon Ph Balanceado Avena & Miel Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p6",
    "name": "Ambientador De Espacios Fantasia New Gam",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_6/300/300",
    "images": [
      "https://picsum.photos/seed/power_6/600/600",
      "https://picsum.photos/seed/power_6b/600/600",
      "https://picsum.photos/seed/power_6c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.7,
    "sold": 235,
    "brandId": "br1",
    "sizes": [
      "250 ML",
      "20 LT",
      "3",
      "120 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "250 ML": 6500,
      "20 LT": 16000,
      "120 ML": 4000
    },
    "aromas": [
      "NEW GAM"
    ],
    "description": "Ambientador De Espacios Fantasia New Gam con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p7",
    "name": "Jabon Ph Balanceado Neutro Wind",
    "price": 3200,
    "image": "https://picsum.photos/seed/power_7/300/300",
    "images": [
      "https://picsum.photos/seed/power_7/600/600",
      "https://picsum.photos/seed/power_7b/600/600",
      "https://picsum.photos/seed/power_7c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.8,
    "sold": 272,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3",
      "500 ML",
      "1 LT"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "20 LT": 42500,
      "500 ML": 3200,
      "1 LT": 3900
    },
    "aromas": [
      "NEUTRO"
    ],
    "description": "Jabon Ph Balanceado Neutro Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p8",
    "name": "Ambientador De Espacios Fantasia Yellow Fruits",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_8/300/300",
    "images": [
      "https://picsum.photos/seed/power_8/600/600",
      "https://picsum.photos/seed/power_8b/600/600",
      "https://picsum.photos/seed/power_8c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.2,
    "sold": 346,
    "brandId": "br1",
    "sizes": [
      "120 ML",
      "250 ML",
      "20 LT",
      "3"
    ],
    "priceBySize": {
      "3": 17500,
      "120 ML": 4000,
      "250 ML": 6500,
      "20 LT": 16000
    },
    "aromas": [
      "YELLOW FRUITS"
    ],
    "description": "Ambientador De Espacios Fantasia Yellow Fruits con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p9",
    "name": "Alcohol Glicerinado Wind 70%",
    "price": 2900,
    "originalPrice": 3625,
    "image": "https://picsum.photos/seed/power_9/300/300",
    "images": [
      "https://picsum.photos/seed/power_9/600/600",
      "https://picsum.photos/seed/power_9b/600/600",
      "https://picsum.photos/seed/power_9c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.5,
    "sold": 457,
    "brandId": "br4",
    "sizes": [
      "250 ML SPRAY",
      "500 ML SPRAY",
      "1 LT ATM",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 22000,
      "250 ML SPRAY": 2900,
      "500 ML SPRAY": 4500,
      "1 LT ATM": 7200,
      "20 LT": 102200
    },
    "description": "Alcohol Glicerinado Wind 70% con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p10",
    "name": "Alcohol Industrial Wind 70 %",
    "price": 3300,
    "image": "https://picsum.photos/seed/power_10/300/300",
    "images": [
      "https://picsum.photos/seed/power_10/600/600",
      "https://picsum.photos/seed/power_10b/600/600",
      "https://picsum.photos/seed/power_10c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.6,
    "sold": 494,
    "brandId": "br4",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 3300
    },
    "description": "Alcohol Industrial Wind 70 % con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p11",
    "name": "Alcohol Etilico Wind 70%",
    "price": 2900,
    "image": "https://picsum.photos/seed/power_11/300/300",
    "images": [
      "https://picsum.photos/seed/power_11/600/600",
      "https://picsum.photos/seed/power_11b/600/600",
      "https://picsum.photos/seed/power_11c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.7,
    "sold": 81,
    "brandId": "br4",
    "sizes": [
      "250 ML SPRAY",
      "500 ML SPRAY",
      "1 LT ATM",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 2900,
      "250 ML SPRAY": 102200,
      "500 ML SPRAY": 4500,
      "1 LT ATM": 22000,
      "20 LT": 7200
    },
    "description": "Alcohol Etilico Wind 70% con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p12",
    "name": "Quita Grasa Good Morning",
    "price": 2400,
    "image": "https://picsum.photos/seed/power_12/300/300",
    "images": [
      "https://picsum.photos/seed/power_12/600/600",
      "https://picsum.photos/seed/power_12b/600/600",
      "https://picsum.photos/seed/power_12c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.8,
    "sold": 118,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "1 LT"
    ],
    "priceBySize": {
      "500 ML": 2400,
      "1 LT": 3600
    },
    "description": "Quita Grasa Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p13",
    "name": "Ambientador De Espacios Fantasia Red Fruits",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_13/300/300",
    "images": [
      "https://picsum.photos/seed/power_13/600/600",
      "https://picsum.photos/seed/power_13b/600/600",
      "https://picsum.photos/seed/power_13c/600/600"
    ],
    "category": "Automóvil",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 340,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "3",
      "120 ML",
      "250 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "20 LT": 16000,
      "120 ML": 4000,
      "250 ML": 6500
    },
    "aromas": [
      "RED FRUITS"
    ],
    "description": "Ambientador De Espacios Fantasia Red Fruits con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p14",
    "name": "Ambientador De Espacios Fantasia Green Ecology",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_14/300/300",
    "images": [
      "https://picsum.photos/seed/power_14/600/600",
      "https://picsum.photos/seed/power_14b/600/600",
      "https://picsum.photos/seed/power_14c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.9,
    "sold": 451,
    "brandId": "br1",
    "sizes": [
      "120 ML",
      "250 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 17500,
      "120 ML": 4000,
      "250 ML": 6500,
      "20 LT": 16000
    },
    "aromas": [
      "GREEN ECOLOGY"
    ],
    "description": "Ambientador De Espacios Fantasia Green Ecology con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p15",
    "name": "Ambientador De Espacios Fantasia Spa Blu",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_15/300/300",
    "images": [
      "https://picsum.photos/seed/power_15/600/600",
      "https://picsum.photos/seed/power_15b/600/600",
      "https://picsum.photos/seed/power_15c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.4,
    "sold": 112,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "250 ML",
      "3",
      "120 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "20 LT": 4000,
      "250 ML": 16000,
      "120 ML": 6500
    },
    "aromas": [
      "SPA BLU"
    ],
    "description": "Ambientador De Espacios Fantasia Spa Blu con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p16",
    "name": "Quita Manchas Ropa Color Good Morning",
    "price": 1700,
    "image": "https://picsum.photos/seed/power_16/300/300",
    "images": [
      "https://picsum.photos/seed/power_16/600/600",
      "https://picsum.photos/seed/power_16b/600/600",
      "https://picsum.photos/seed/power_16c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.5,
    "sold": 149,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "2 LT",
      "4 LT",
      "1 LT",
      "500 ML"
    ],
    "priceBySize": {
      "20 LT": 32000,
      "2 LT": 4150,
      "4 LT": 8200,
      "1 LT": 2650,
      "500 ML": 1700
    },
    "description": "Quita Manchas Ropa Color Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p17",
    "name": "Desengrasante Industrial Good Morning",
    "price": 1000,
    "originalPrice": 1250,
    "image": "https://picsum.photos/seed/power_17/300/300",
    "images": [
      "https://picsum.photos/seed/power_17/600/600",
      "https://picsum.photos/seed/power_17b/600/600",
      "https://picsum.photos/seed/power_17c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.6,
    "sold": 186,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 1000,
      "20 LT": 10500
    },
    "description": "Desengrasante Industrial Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p18",
    "name": "Removedor De Cera Fantasia",
    "price": 5800,
    "image": "https://picsum.photos/seed/power_18/300/300",
    "images": [
      "https://picsum.photos/seed/power_18/600/600",
      "https://picsum.photos/seed/power_18b/600/600",
      "https://picsum.photos/seed/power_18c/600/600"
    ],
    "category": "Pisos",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 260,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3": 13500,
      "20 LT": 49000,
      "1 LT": 5800
    },
    "description": "Removedor De Cera Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p19",
    "name": "Blanqueador Q",
    "price": 1550,
    "image": "https://picsum.photos/seed/power_19/300/300",
    "images": [
      "https://picsum.photos/seed/power_19/600/600",
      "https://picsum.photos/seed/power_19b/600/600",
      "https://picsum.photos/seed/power_19c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.9,
    "sold": 297,
    "brandId": "br5",
    "sizes": [
      "3",
      "20 LT",
      "2 LT",
      "4 LT",
      "1 LT",
      "500 ML"
    ],
    "priceBySize": {
      "3": 6300,
      "20 LT": 19500,
      "2 LT": 3000,
      "4 LT": 6300,
      "1 LT": 2400,
      "500 ML": 1550
    },
    "description": "Blanqueador Q con calidad garantizada de BLAN Q. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p20",
    "name": "Hipoclorito De Sodio Q 13%",
    "price": 3600,
    "image": "https://picsum.photos/seed/power_20/300/300",
    "images": [
      "https://picsum.photos/seed/power_20/600/600",
      "https://picsum.photos/seed/power_20b/600/600",
      "https://picsum.photos/seed/power_20c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.3,
    "sold": 371,
    "brandId": "br5",
    "sizes": [
      "3",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3": 12500,
      "20 LT": 53500,
      "1 LT": 3600
    },
    "description": "Hipoclorito De Sodio Q 13% con calidad garantizada de BLAN Q. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p21",
    "name": "Sellador Polimerico Autobrillante Fantasia Blanco",
    "price": 7350,
    "originalPrice": 9188,
    "image": "https://picsum.photos/seed/power_21/300/300",
    "images": [
      "https://picsum.photos/seed/power_21/600/600",
      "https://picsum.photos/seed/power_21b/600/600",
      "https://picsum.photos/seed/power_21c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.5,
    "sold": 445,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "810 ML",
      "500 ML"
    ],
    "priceBySize": {
      "3": 53000,
      "20 LT": 245000,
      "810 ML": 11900,
      "500 ML": 7350
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Sellador Polimerico Autobrillante Fantasia Blanco con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p22",
    "name": "Multiusos Blue Good Morning Neutro",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_22/300/300",
    "images": [
      "https://picsum.photos/seed/power_22/600/600",
      "https://picsum.photos/seed/power_22b/600/600",
      "https://picsum.photos/seed/power_22c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 106,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "3"
    ],
    "priceBySize": {
      "3": 10500,
      "20 LT": 42500
    },
    "aromas": [
      "NEUTRO"
    ],
    "description": "Multiusos Blue Good Morning Neutro con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p23",
    "name": "Detergente Fantasia Maximo Poder",
    "price": 8000,
    "image": "https://picsum.photos/seed/power_23/300/300",
    "images": [
      "https://picsum.photos/seed/power_23/600/600",
      "https://picsum.photos/seed/power_23b/600/600",
      "https://picsum.photos/seed/power_23c/600/600"
    ],
    "category": "Lavandería",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 180,
    "brandId": "br1",
    "sizes": [
      "4 LT",
      "20 LT",
      "1 LT",
      "2 LT",
      "5 LT",
      "3 LT"
    ],
    "priceBySize": {
      "4 LT": 29500,
      "20 LT": 130000,
      "1 LT": 8000,
      "2 LT": 15500,
      "5 LT": 36000,
      "3 LT": 22500
    },
    "description": "Detergente Fantasia Maximo Poder con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p24",
    "name": "Detergente Liq Fantasia Con Bicarbonato",
    "price": 3300,
    "image": "https://picsum.photos/seed/power_24/300/300",
    "images": [
      "https://picsum.photos/seed/power_24/600/600",
      "https://picsum.photos/seed/power_24b/600/600",
      "https://picsum.photos/seed/power_24c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.3,
    "sold": 217,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "120 ML"
    ],
    "priceBySize": {
      "20 LT": 79500,
      "120 ML": 3300
    },
    "description": "Detergente Liq Fantasia Con Bicarbonato con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p25",
    "name": "Desinfectante Good Morning Lavanda",
    "price": 1700,
    "originalPrice": 2125,
    "image": "https://picsum.photos/seed/power_25/300/300",
    "images": [
      "https://picsum.photos/seed/power_25/600/600",
      "https://picsum.photos/seed/power_25b/600/600",
      "https://picsum.photos/seed/power_25c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.4,
    "sold": 254,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "1 LT",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 1700,
      "1 LT": 2350,
      "20 LT": 36000
    },
    "aromas": [
      "LAVANDA"
    ],
    "description": "Desinfectante Good Morning Lavanda con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p26",
    "name": "Desinfectante 5 Gen Lavanda & Plus Fantasia",
    "price": 700,
    "image": "https://picsum.photos/seed/power_26/300/300",
    "images": [
      "https://picsum.photos/seed/power_26/600/600",
      "https://picsum.photos/seed/power_26b/600/600",
      "https://picsum.photos/seed/power_26c/600/600"
    ],
    "category": "Hogar",
    "badge": "Nuevo",
    "rating": 4.7,
    "sold": 365,
    "brandId": "br1",
    "sizes": [
      "SACHET 90 ML",
      "1 LT",
      "3",
      "500 ML",
      "5 LT",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 11500,
      "SACHET 90 ML": 3600,
      "1 LT": 700,
      "500 ML": 2200,
      "5 LT": 2200,
      "20 LT": 42500,
      "2 LT": 3600
    },
    "aromas": [
      "LAVANDA & PLUS"
    ],
    "description": "Desinfectante 5 Gen Lavanda & Plus Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p27",
    "name": "Suavizante Fantasia Dulce Primavera",
    "price": 700,
    "image": "https://picsum.photos/seed/power_27/300/300",
    "images": [
      "https://picsum.photos/seed/power_27/600/600",
      "https://picsum.photos/seed/power_27b/600/600",
      "https://picsum.photos/seed/power_27c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.8,
    "sold": 402,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "2 LT",
      "5 LT",
      "20 LT",
      "4 LT",
      "3 LT",
      "90 ML"
    ],
    "priceBySize": {
      "1 LT": 18600,
      "2 LT": 5500,
      "5 LT": 18600,
      "20 LT": 10450,
      "4 LT": 15470,
      "3 LT": 72000,
      "90 ML": 700
    },
    "aromas": [
      "DULCE PRIMAVERA"
    ],
    "description": "Suavizante Fantasia Dulce Primavera con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p28",
    "name": "Desinfectante Good Morning Bicarbonato Limón",
    "price": 1700,
    "image": "https://picsum.photos/seed/power_28/300/300",
    "images": [
      "https://picsum.photos/seed/power_28/600/600",
      "https://picsum.photos/seed/power_28b/600/600",
      "https://picsum.photos/seed/power_28c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.2,
    "sold": 476,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "500 ML",
      "3",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3": 8000,
      "2 LT": 4050,
      "500 ML": 1700,
      "20 LT": 36000,
      "1 LT": 2350
    },
    "aromas": [
      "BICARBONATO LIMÓN"
    ],
    "description": "Desinfectante Good Morning Bicarbonato Limón con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p29",
    "name": "Cera Polimerica Autobrillante Roja Fantasia",
    "price": 5400,
    "originalPrice": 6750,
    "image": "https://picsum.photos/seed/power_29/300/300",
    "images": [
      "https://picsum.photos/seed/power_29/600/600",
      "https://picsum.photos/seed/power_29b/600/600",
      "https://picsum.photos/seed/power_29c/600/600"
    ],
    "category": "Pisos",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 100,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "810 ML",
      "500 ML"
    ],
    "priceBySize": {
      "3": 5400,
      "20 LT": 36000,
      "810 ML": 160000,
      "500 ML": 8800
    },
    "aromas": [
      "ROJA"
    ],
    "description": "Cera Polimerica Autobrillante Roja Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p30",
    "name": "Cera Polimerica Autobrillante Blanca Fantasia",
    "price": 5400,
    "image": "https://picsum.photos/seed/power_30/300/300",
    "images": [
      "https://picsum.photos/seed/power_30/600/600",
      "https://picsum.photos/seed/power_30b/600/600",
      "https://picsum.photos/seed/power_30c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.5,
    "sold": 137,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "810 ML",
      "500 ML"
    ],
    "priceBySize": {
      "3": 36000,
      "20 LT": 160000,
      "810 ML": 8800,
      "500 ML": 5400
    },
    "aromas": [
      "BLANCA"
    ],
    "description": "Cera Polimerica Autobrillante Blanca Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p31",
    "name": "Jabon Blúrey Good Morning",
    "price": 1,
    "image": "https://picsum.photos/seed/power_31/300/300",
    "images": [
      "https://picsum.photos/seed/power_31/600/600",
      "https://picsum.photos/seed/power_31b/600/600",
      "https://picsum.photos/seed/power_31c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 248,
    "brandId": "br2",
    "sizes": [
      "1 LT",
      "4 LT",
      "20 LT",
      "810 ML",
      "3"
    ],
    "priceBySize": {
      "3": 1,
      "1 LT": 3900,
      "4 LT": 12000,
      "20 LT": 43500
    },
    "description": "Jabon Blúrey Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p32",
    "name": "Quita Manchas Ropa Color Fantasia",
    "price": 2050,
    "image": "https://picsum.photos/seed/power_32/300/300",
    "images": [
      "https://picsum.photos/seed/power_32/600/600",
      "https://picsum.photos/seed/power_32b/600/600",
      "https://picsum.photos/seed/power_32c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.4,
    "sold": 396,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "4 LT",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "500 ML": 2050,
      "4 LT": 11200,
      "20 LT": 42500,
      "1 LT": 3400
    },
    "description": "Quita Manchas Ropa Color Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p33",
    "name": "Silicona Líquida Baby Nv Good Morning 3,75 Lt",
    "price": 29500,
    "originalPrice": 36875,
    "image": "https://picsum.photos/seed/power_33/300/300",
    "images": [
      "https://picsum.photos/seed/power_33/600/600",
      "https://picsum.photos/seed/power_33b/600/600",
      "https://picsum.photos/seed/power_33c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.5,
    "sold": 433,
    "brandId": "br2",
    "sizes": [
      "75 LT"
    ],
    "priceBySize": {
      "75 LT": 29500
    },
    "aromas": [
      "BABY NV"
    ],
    "description": "Silicona Líquida Baby Nv Good Morning 3,75 Lt con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p34",
    "name": "Trapero Con Palo Copa Ref 500",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_34/300/300",
    "images": [
      "https://picsum.photos/seed/power_34/600/600",
      "https://picsum.photos/seed/power_34b/600/600",
      "https://picsum.photos/seed/power_34c/600/600"
    ],
    "category": "Traperos",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 470,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Trapero Con Palo Copa Ref 500 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p35",
    "name": "Brillavidrios",
    "price": 2600,
    "image": "https://picsum.photos/seed/power_35/300/300",
    "images": [
      "https://picsum.photos/seed/power_35/600/600",
      "https://picsum.photos/seed/power_35b/600/600",
      "https://picsum.photos/seed/power_35c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 94,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "PAGUE 750 ML LLEVE 1000 ML",
      "PAGUE 3",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 2600,
      "PAGUE 750 ML LLEVE 1000 ML": 3900,
      "PAGUE 3": 8500,
      "20 LT": 34000
    },
    "description": "Brillavidrios con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p36",
    "name": "Ambientador De Espacios Fantasia Very Very",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_36/300/300",
    "images": [
      "https://picsum.photos/seed/power_36/600/600",
      "https://picsum.photos/seed/power_36b/600/600",
      "https://picsum.photos/seed/power_36c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.2,
    "sold": 168,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "120 ML",
      "3",
      "250 ML"
    ],
    "priceBySize": {
      "3": 17500,
      "20 LT": 16000,
      "120 ML": 4000,
      "250 ML": 6500
    },
    "aromas": [
      "VERY VERY"
    ],
    "description": "Ambientador De Espacios Fantasia Very Very con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p37",
    "name": "Creolina Good Morning",
    "price": 1800,
    "originalPrice": 2250,
    "image": "https://picsum.photos/seed/power_37/300/300",
    "images": [
      "https://picsum.photos/seed/power_37/600/600",
      "https://picsum.photos/seed/power_37b/600/600",
      "https://picsum.photos/seed/power_37c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.3,
    "sold": 205,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "240 ML",
      "500 ML",
      "3"
    ],
    "priceBySize": {
      "3": 11200,
      "20 LT": 49000,
      "240 ML": 1800,
      "500 ML": 2800
    },
    "description": "Creolina Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p38",
    "name": "Detergente Liq Good Morning",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_38/300/300",
    "images": [
      "https://picsum.photos/seed/power_38/600/600",
      "https://picsum.photos/seed/power_38b/600/600",
      "https://picsum.photos/seed/power_38c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.4,
    "sold": 242,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 10500,
      "20 LT": 43500
    },
    "description": "Detergente Liq Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p39",
    "name": "Quita Grasa Fantasia",
    "price": 5200,
    "image": "https://picsum.photos/seed/power_39/300/300",
    "images": [
      "https://picsum.photos/seed/power_39/600/600",
      "https://picsum.photos/seed/power_39b/600/600",
      "https://picsum.photos/seed/power_39c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.6,
    "sold": 316,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "20 LT",
      "3",
      "1 LT"
    ],
    "priceBySize": {
      "3": 11200,
      "500 ML": 5200,
      "20 LT": 46000,
      "1 LT": 7200
    },
    "description": "Quita Grasa Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p40",
    "name": "Cera Polimerica Autobrillante Roja Good Morning",
    "price": 22000,
    "image": "https://picsum.photos/seed/power_40/300/300",
    "images": [
      "https://picsum.photos/seed/power_40/600/600",
      "https://picsum.photos/seed/power_40b/600/600",
      "https://picsum.photos/seed/power_40c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.3,
    "sold": 347,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 22000,
      "20 LT": 104000
    },
    "aromas": [
      "ROJA"
    ],
    "description": "Cera Polimerica Autobrillante Roja Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p41",
    "name": "Blanqueador Q Al 5,25%",
    "price": 3000,
    "originalPrice": 3750,
    "image": "https://picsum.photos/seed/power_41/300/300",
    "images": [
      "https://picsum.photos/seed/power_41/600/600",
      "https://picsum.photos/seed/power_41b/600/600",
      "https://picsum.photos/seed/power_41c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.7,
    "sold": 495,
    "brandId": "br5",
    "sizes": [
      "20 LT",
      "4 LT",
      "2 LT",
      "1 LT"
    ],
    "priceBySize": {
      "20 LT": 31000,
      "4 LT": 8700,
      "2 LT": 4300,
      "1 LT": 3000
    },
    "description": "Blanqueador Q Al 5,25% con calidad garantizada de BLAN Q. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p42",
    "name": "Vinagre De Limpieza Good Morning",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_42/300/300",
    "images": [
      "https://picsum.photos/seed/power_42/600/600",
      "https://picsum.photos/seed/power_42b/600/600",
      "https://picsum.photos/seed/power_42c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 82,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "810 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 4000,
      "500 ML": 1500,
      "810 ML": 2500,
      "20 LT": 26500
    },
    "description": "Vinagre De Limpieza Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p43",
    "name": "Silicona Líquida Citrus Cr Good Morning 250 Ml",
    "price": 5200,
    "image": "https://picsum.photos/seed/power_43/300/300",
    "images": [
      "https://picsum.photos/seed/power_43/600/600",
      "https://picsum.photos/seed/power_43b/600/600",
      "https://picsum.photos/seed/power_43c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.7,
    "sold": 341,
    "brandId": "br2",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 5200
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Silicona Líquida Citrus Cr Good Morning 250 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p44",
    "name": "Silicona Líquida Baby Nv Good Morning",
    "price": 142000,
    "image": "https://picsum.photos/seed/power_44/300/300",
    "images": [
      "https://picsum.photos/seed/power_44/600/600",
      "https://picsum.photos/seed/power_44b/600/600",
      "https://picsum.photos/seed/power_44c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.8,
    "sold": 378,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 142000
    },
    "aromas": [
      "BABY NV"
    ],
    "description": "Silicona Líquida Baby Nv Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p45",
    "name": "Ambientador De Espacios Fantasia Lavanda & Orquideas",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_45/300/300",
    "images": [
      "https://picsum.photos/seed/power_45/600/600",
      "https://picsum.photos/seed/power_45b/600/600",
      "https://picsum.photos/seed/power_45c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.9,
    "sold": 415,
    "brandId": "br1",
    "sizes": [
      "250 ML",
      "120 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 17500,
      "250 ML": 6500,
      "120 ML": 4000,
      "20 LT": 16000
    },
    "aromas": [
      "LAVANDA & ORQUIDEAS"
    ],
    "description": "Ambientador De Espacios Fantasia Lavanda & Orquideas con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p46",
    "name": "Ambientador De Espacios Fantasia New Baby",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_46/300/300",
    "images": [
      "https://picsum.photos/seed/power_46/600/600",
      "https://picsum.photos/seed/power_46b/600/600",
      "https://picsum.photos/seed/power_46c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.2,
    "sold": 452,
    "brandId": "br1",
    "sizes": [
      "250 ML",
      "120 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 17500,
      "250 ML": 16000,
      "120 ML": 6500,
      "20 LT": 4000
    },
    "aromas": [
      "BABY"
    ],
    "description": "Ambientador De Espacios Fantasia New Baby con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p47",
    "name": "Ambientador De Espacios Fantasia New Fresh",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_47/300/300",
    "images": [
      "https://picsum.photos/seed/power_47/600/600",
      "https://picsum.photos/seed/power_47b/600/600",
      "https://picsum.photos/seed/power_47c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.3,
    "sold": 489,
    "brandId": "br1",
    "sizes": [
      "250 ML",
      "20 LT",
      "120 ML",
      "3"
    ],
    "priceBySize": {
      "3": 17500,
      "250 ML": 16000,
      "20 LT": 4000,
      "120 ML": 6500
    },
    "aromas": [
      "NEW FRESH"
    ],
    "description": "Ambientador De Espacios Fantasia New Fresh con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p48",
    "name": "Desinfectante 5 Gen Talco Bebé Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_48/300/300",
    "images": [
      "https://picsum.photos/seed/power_48/600/600",
      "https://picsum.photos/seed/power_48b/600/600",
      "https://picsum.photos/seed/power_48c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.5,
    "sold": 113,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3",
      "500 ML",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 2200,
      "1 LT": 42500,
      "500 ML": 6200,
      "20 LT": 15400,
      "2 LT": 11500
    },
    "aromas": [
      "TALCO BEBÉ"
    ],
    "description": "Desinfectante 5 Gen Talco Bebé Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p49",
    "name": "Desinfectante 5 Gen Flores Del Campo Fantasia",
    "price": 2200,
    "originalPrice": 2750,
    "image": "https://picsum.photos/seed/power_49/300/300",
    "images": [
      "https://picsum.photos/seed/power_49/600/600",
      "https://picsum.photos/seed/power_49b/600/600",
      "https://picsum.photos/seed/power_49c/600/600"
    ],
    "category": "Hogar",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 150,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3",
      "500 ML",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 15400,
      "1 LT": 6200,
      "500 ML": 2200,
      "20 LT": 11500,
      "2 LT": 42500
    },
    "aromas": [
      "FLORES DEL CAMPO"
    ],
    "description": "Desinfectante 5 Gen Flores Del Campo Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p50",
    "name": "Desinfectante 5 Gen Canela Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_50/300/300",
    "images": [
      "https://picsum.photos/seed/power_50/600/600",
      "https://picsum.photos/seed/power_50b/600/600",
      "https://picsum.photos/seed/power_50c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.7,
    "sold": 187,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3",
      "20 LT",
      "500 ML",
      "2 LT"
    ],
    "priceBySize": {
      "3": 6200,
      "1 LT": 42500,
      "20 LT": 2200,
      "500 ML": 42500,
      "2 LT": 11500
    },
    "aromas": [
      "CANELA"
    ],
    "description": "Desinfectante 5 Gen Canela Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p51",
    "name": "Desinfectante 5 Gen Explosión Tropical Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_51/300/300",
    "images": [
      "https://picsum.photos/seed/power_51/600/600",
      "https://picsum.photos/seed/power_51b/600/600",
      "https://picsum.photos/seed/power_51c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 224,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3",
      "5 LT",
      "20 LT",
      "500 ML",
      "2 LT"
    ],
    "priceBySize": {
      "3": 11500,
      "1 LT": 3600,
      "5 LT": 2200,
      "20 LT": 42500,
      "500 ML": 3600,
      "2 LT": 6200
    },
    "aromas": [
      "EXPLOSIÓN TROPICAL"
    ],
    "description": "Desinfectante 5 Gen Explosión Tropical Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p52",
    "name": "Desinfectante 5 Gen Bicarbonato Limón Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_52/300/300",
    "images": [
      "https://picsum.photos/seed/power_52/600/600",
      "https://picsum.photos/seed/power_52b/600/600",
      "https://picsum.photos/seed/power_52c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.2,
    "sold": 298,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "500 ML",
      "3",
      "5 LT",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 2200,
      "1 LT": 3600,
      "500 ML": 3600,
      "5 LT": 6200,
      "20 LT": 11500,
      "2 LT": 42500
    },
    "aromas": [
      "BICARBONATO LIMÓN"
    ],
    "description": "Desinfectante 5 Gen Bicarbonato Limón Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p53",
    "name": "Desinfectante 5 Gen Neutro Fantasia",
    "price": 3600,
    "originalPrice": 4500,
    "image": "https://picsum.photos/seed/power_53/300/300",
    "images": [
      "https://picsum.photos/seed/power_53/600/600",
      "https://picsum.photos/seed/power_53b/600/600",
      "https://picsum.photos/seed/power_53c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.4,
    "sold": 218,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "20 LT",
      "3",
      "1 LT"
    ],
    "priceBySize": {
      "3": 6200,
      "500 ML": 3600,
      "20 LT": 11500,
      "1 LT": 42500
    },
    "aromas": [
      "NEUTRO"
    ],
    "description": "Desinfectante 5 Gen Neutro Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p54",
    "name": "Bicarbonato Fantasia Bolsa",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_54/300/300",
    "images": [
      "https://picsum.photos/seed/power_54/600/600",
      "https://picsum.photos/seed/power_54b/600/600",
      "https://picsum.photos/seed/power_54c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.2,
    "sold": 286,
    "brandId": "br1",
    "sizes": [
      "500 GR",
      "1 KG"
    ],
    "priceBySize": {
      "500 GR": 3800,
      "1 KG": 4800
    },
    "description": "Bicarbonato Fantasia Bolsa con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p55",
    "name": "Tratamiento Pisos Laminado Fantasia",
    "price": 3950,
    "image": "https://picsum.photos/seed/power_55/300/300",
    "images": [
      "https://picsum.photos/seed/power_55/600/600",
      "https://picsum.photos/seed/power_55b/600/600",
      "https://picsum.photos/seed/power_55c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.3,
    "sold": 323,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "3",
      "810 ML"
    ],
    "priceBySize": {
      "3": 66000,
      "20 LT": 3950,
      "810 ML": 15200
    },
    "description": "Tratamiento Pisos Laminado Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p56",
    "name": "Silicona Líquida Citrus Cr Good Morning 3,75 Lt",
    "price": 29500,
    "image": "https://picsum.photos/seed/power_56/300/300",
    "images": [
      "https://picsum.photos/seed/power_56/600/600",
      "https://picsum.photos/seed/power_56b/600/600",
      "https://picsum.photos/seed/power_56c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.5,
    "sold": 397,
    "brandId": "br2",
    "sizes": [
      "75 LT"
    ],
    "priceBySize": {
      "75 LT": 29500
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Silicona Líquida Citrus Cr Good Morning 3,75 Lt con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p57",
    "name": "Silicona Líquida Baby Nv Good Morning 250 Ml",
    "price": 5200,
    "originalPrice": 6500,
    "image": "https://picsum.photos/seed/power_57/300/300",
    "images": [
      "https://picsum.photos/seed/power_57/600/600",
      "https://picsum.photos/seed/power_57b/600/600",
      "https://picsum.photos/seed/power_57c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.6,
    "sold": 434,
    "brandId": "br2",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 5200
    },
    "aromas": [
      "BABY NV"
    ],
    "description": "Silicona Líquida Baby Nv Good Morning 250 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p58",
    "name": "Trapero Con Palo Copa Ref 800",
    "price": 7100,
    "image": "https://picsum.photos/seed/power_58/300/300",
    "images": [
      "https://picsum.photos/seed/power_58/600/600",
      "https://picsum.photos/seed/power_58b/600/600",
      "https://picsum.photos/seed/power_58c/600/600"
    ],
    "category": "Traperos",
    "rating": 4.8,
    "sold": 58,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7100
    },
    "description": "Trapero Con Palo Copa Ref 800 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p59",
    "name": "Trapero Con Palo Copa Ref 1000",
    "price": 8100,
    "image": "https://picsum.photos/seed/power_59/300/300",
    "images": [
      "https://picsum.photos/seed/power_59/600/600",
      "https://picsum.photos/seed/power_59b/600/600",
      "https://picsum.photos/seed/power_59c/600/600"
    ],
    "category": "Traperos",
    "rating": 4.3,
    "sold": 169,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 8100
    },
    "description": "Trapero Con Palo Copa Ref 1000 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p60",
    "name": "Detergente Liq Good Morning Tapa Dosif",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_60/300/300",
    "images": [
      "https://picsum.photos/seed/power_60/600/600",
      "https://picsum.photos/seed/power_60b/600/600",
      "https://picsum.photos/seed/power_60c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.7,
    "sold": 317,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "3 LT",
      "4 LT",
      "1 LT",
      "5 LT"
    ],
    "priceBySize": {
      "2 LT": 7200,
      "3 LT": 10500,
      "4 LT": 14000,
      "1 LT": 3800,
      "5 LT": 18000
    },
    "description": "Detergente Liq Good Morning Tapa Dosif con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p61",
    "name": "Detergente Liq Fantasia Con Bicarbonato Tapa Dosif",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/power_61/300/300",
    "images": [
      "https://picsum.photos/seed/power_61/600/600",
      "https://picsum.photos/seed/power_61b/600/600",
      "https://picsum.photos/seed/power_61c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.9,
    "sold": 391,
    "brandId": "br1",
    "sizes": [
      "4 LT",
      "3 LT",
      "2 LT",
      "5 LT",
      "1 LT"
    ],
    "priceBySize": {
      "4 LT": 21500,
      "3 LT": 16500,
      "2 LT": 11200,
      "5 LT": 26000,
      "1 LT": 6000
    },
    "description": "Detergente Liq Fantasia Con Bicarbonato Tapa Dosif con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p62",
    "name": "Desinfectante 5 Gen Explosión Citrus Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_62/300/300",
    "images": [
      "https://picsum.photos/seed/power_62/600/600",
      "https://picsum.photos/seed/power_62b/600/600",
      "https://picsum.photos/seed/power_62c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.4,
    "sold": 52,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "1 LT",
      "3",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 15400,
      "500 ML": 6200,
      "1 LT": 42500,
      "20 LT": 2200,
      "2 LT": 11500
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Desinfectante 5 Gen Explosión Citrus Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p63",
    "name": "Detergente Liq Bicarbonato Fantasia Basic",
    "price": 1000,
    "image": "https://picsum.photos/seed/power_63/300/300",
    "images": [
      "https://picsum.photos/seed/power_63/600/600",
      "https://picsum.photos/seed/power_63b/600/600",
      "https://picsum.photos/seed/power_63c/600/600"
    ],
    "category": "Lavandería",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 200,
    "brandId": "br1",
    "sizes": [
      "SACHET 90 ML"
    ],
    "priceBySize": {
      "SACHET 90 ML": 1000
    },
    "description": "Detergente Liq Bicarbonato Fantasia Basic con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p64",
    "name": "Desinfectante 5 Gen Citronela Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_64/300/300",
    "images": [
      "https://picsum.photos/seed/power_64/600/600",
      "https://picsum.photos/seed/power_64b/600/600",
      "https://picsum.photos/seed/power_64c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.5,
    "sold": 385,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3",
      "20 LT",
      "2 LT",
      "500 ML"
    ],
    "priceBySize": {
      "3": 2200,
      "1 LT": 11500,
      "20 LT": 6200,
      "2 LT": 3600,
      "500 ML": 3600
    },
    "aromas": [
      "CITRONELA"
    ],
    "description": "Desinfectante 5 Gen Citronela Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p65",
    "name": "Limpiador De Juntas Fantasia",
    "price": 3800,
    "originalPrice": 4750,
    "image": "https://picsum.photos/seed/power_65/300/300",
    "images": [
      "https://picsum.photos/seed/power_65/600/600",
      "https://picsum.photos/seed/power_65b/600/600",
      "https://picsum.photos/seed/power_65c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.8,
    "sold": 496,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "3"
    ],
    "priceBySize": {
      "3": 22000,
      "500 ML": 3800
    },
    "description": "Limpiador De Juntas Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p66",
    "name": "Desinfectante 5 Gen Vainilla Fantasia",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_66/300/300",
    "images": [
      "https://picsum.photos/seed/power_66/600/600",
      "https://picsum.photos/seed/power_66b/600/600",
      "https://picsum.photos/seed/power_66c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 342,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "1 LT",
      "2 LT",
      "3",
      "5 LT",
      "20 LT"
    ],
    "priceBySize": {
      "3": 11500,
      "500 ML": 2200,
      "1 LT": 3600,
      "2 LT": 6200,
      "5 LT": 15400,
      "20 LT": 42500
    },
    "aromas": [
      "VAINILLA"
    ],
    "description": "Desinfectante 5 Gen Vainilla Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p67",
    "name": "Silicona Líquida Canela Good Morning",
    "price": 5200,
    "image": "https://picsum.photos/seed/power_67/300/300",
    "images": [
      "https://picsum.photos/seed/power_67/600/600",
      "https://picsum.photos/seed/power_67b/600/600",
      "https://picsum.photos/seed/power_67c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.9,
    "sold": 379,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "250 ML",
      "3"
    ],
    "priceBySize": {
      "3": 142000,
      "20 LT": 5200,
      "250 ML": 29500
    },
    "aromas": [
      "CANELA"
    ],
    "description": "Silicona Líquida Canela Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p68",
    "name": "Silicona Líquida Chicle Cr Good Morning",
    "price": 142000,
    "image": "https://picsum.photos/seed/power_68/300/300",
    "images": [
      "https://picsum.photos/seed/power_68/600/600",
      "https://picsum.photos/seed/power_68b/600/600",
      "https://picsum.photos/seed/power_68c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.2,
    "sold": 416,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 142000
    },
    "aromas": [
      "CHICLE CR"
    ],
    "description": "Silicona Líquida Chicle Cr Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p69",
    "name": "Silicona Líquida New Car Good Morning",
    "price": 29500,
    "originalPrice": 36875,
    "image": "https://picsum.photos/seed/power_69/300/300",
    "images": [
      "https://picsum.photos/seed/power_69/600/600",
      "https://picsum.photos/seed/power_69b/600/600",
      "https://picsum.photos/seed/power_69c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.3,
    "sold": 453,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "3"
    ],
    "priceBySize": {
      "3": 29500,
      "20 LT": 142000
    },
    "description": "Silicona Líquida New Car Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p70",
    "name": "Suavizante Good Morning Primaveral",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_70/300/300",
    "images": [
      "https://picsum.photos/seed/power_70/600/600",
      "https://picsum.photos/seed/power_70b/600/600",
      "https://picsum.photos/seed/power_70c/600/600"
    ],
    "category": "Lavandería",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 490,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "4 LT",
      "20 LT",
      "3",
      "3 LT",
      "5 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3": 3800,
      "2 LT": 8800,
      "4 LT": 15000,
      "3 LT": 14500,
      "5 LT": 14500,
      "1 LT": 42500
    },
    "aromas": [
      "PRIMAVERAL"
    ],
    "description": "Suavizante Good Morning Primaveral con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p71",
    "name": "Jabon Ph Balanceado Explosión Frutal Wind",
    "price": 3200,
    "image": "https://picsum.photos/seed/power_71/300/300",
    "images": [
      "https://picsum.photos/seed/power_71/600/600",
      "https://picsum.photos/seed/power_71b/600/600",
      "https://picsum.photos/seed/power_71c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.6,
    "sold": 114,
    "brandId": "br4",
    "sizes": [
      "3",
      "20 LT",
      "500 ML",
      "1 LT",
      "2 LT"
    ],
    "priceBySize": {
      "3": 42500,
      "20 LT": 9200,
      "500 ML": 3200,
      "1 LT": 12500,
      "2 LT": 5600
    },
    "aromas": [
      "EXPLOSIÓN FRUTAL"
    ],
    "description": "Jabon Ph Balanceado Explosión Frutal Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p72",
    "name": "Silicona Líquida Citrus Cr Good Morning",
    "price": 142000,
    "image": "https://picsum.photos/seed/power_72/300/300",
    "images": [
      "https://picsum.photos/seed/power_72/600/600",
      "https://picsum.photos/seed/power_72b/600/600",
      "https://picsum.photos/seed/power_72c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.7,
    "sold": 447,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 142000
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Silicona Líquida Citrus Cr Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p73",
    "name": "Silicona Líquida One Millon Vq Good Morning",
    "price": 142000,
    "originalPrice": 177500,
    "image": "https://picsum.photos/seed/power_73/300/300",
    "images": [
      "https://picsum.photos/seed/power_73/600/600",
      "https://picsum.photos/seed/power_73b/600/600",
      "https://picsum.photos/seed/power_73c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.8,
    "sold": 484,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 142000
    },
    "aromas": [
      "ONE MILLON VQ"
    ],
    "description": "Silicona Líquida One Millon Vq Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p74",
    "name": "Shampoo Para Autos Good Morning",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_74/300/300",
    "images": [
      "https://picsum.photos/seed/power_74/600/600",
      "https://picsum.photos/seed/power_74b/600/600",
      "https://picsum.photos/seed/power_74c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.9,
    "sold": 71,
    "brandId": "br2",
    "sizes": [
      "1 LT",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 15000,
      "1 LT": 6000,
      "20 LT": 48000
    },
    "description": "Shampoo Para Autos Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p75",
    "name": "Sellador Polimerico Autobrillante Good Morning",
    "price": 33200,
    "image": "https://picsum.photos/seed/power_75/300/300",
    "images": [
      "https://picsum.photos/seed/power_75/600/600",
      "https://picsum.photos/seed/power_75b/600/600",
      "https://picsum.photos/seed/power_75c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.2,
    "sold": 108,
    "brandId": "br2",
    "sizes": [
      "3"
    ],
    "priceBySize": {
      "3": 33200
    },
    "description": "Sellador Polimerico Autobrillante Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p76",
    "name": "Sellador Polimerico Auto. Good Morning Blanco",
    "price": 165000,
    "image": "https://picsum.photos/seed/power_76/300/300",
    "images": [
      "https://picsum.photos/seed/power_76/600/600",
      "https://picsum.photos/seed/power_76b/600/600",
      "https://picsum.photos/seed/power_76c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.4,
    "sold": 182,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 165000
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Sellador Polimerico Auto. Good Morning Blanco con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p77",
    "name": "Lavaloza Neutro Good Morning",
    "price": 10500,
    "originalPrice": 13125,
    "image": "https://picsum.photos/seed/power_77/300/300",
    "images": [
      "https://picsum.photos/seed/power_77/600/600",
      "https://picsum.photos/seed/power_77b/600/600",
      "https://picsum.photos/seed/power_77c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.5,
    "sold": 219,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "3"
    ],
    "priceBySize": {
      "3": 10500,
      "20 LT": 43500
    },
    "aromas": [
      "NEUTRO"
    ],
    "description": "Lavaloza Neutro Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p78",
    "name": "Oxigeno Activo Fantasia Doy Pack",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_78/300/300",
    "images": [
      "https://picsum.photos/seed/power_78/600/600",
      "https://picsum.photos/seed/power_78b/600/600",
      "https://picsum.photos/seed/power_78c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.9,
    "sold": 367,
    "brandId": "br1",
    "sizes": [
      "1000 GR",
      "250 GR",
      "500 GR"
    ],
    "priceBySize": {
      "1000 GR": 8800,
      "250 GR": 1500,
      "500 GR": 4900
    },
    "description": "Oxigeno Activo Fantasia Doy Pack con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p79",
    "name": "Suavizante Good Morning Manzana Verde",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_79/300/300",
    "images": [
      "https://picsum.photos/seed/power_79/600/600",
      "https://picsum.photos/seed/power_79b/600/600",
      "https://picsum.photos/seed/power_79c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.2,
    "sold": 404,
    "brandId": "br2",
    "sizes": [
      "3 LT",
      "2 LT",
      "5 LT",
      "20 LT",
      "4 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3 LT": 14500,
      "2 LT": 8800,
      "5 LT": 5800,
      "20 LT": 11500,
      "4 LT": 3800,
      "1 LT": 42500
    },
    "aromas": [
      "MANZANA VERDE"
    ],
    "description": "Suavizante Good Morning Manzana Verde con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p80",
    "name": "Pastillas Cloro Blanqueador Q",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_80/300/300",
    "images": [
      "https://picsum.photos/seed/power_80/600/600",
      "https://picsum.photos/seed/power_80b/600/600",
      "https://picsum.photos/seed/power_80c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.4,
    "sold": 478,
    "brandId": "br5",
    "sizes": [
      "1 KG",
      "TARRO 240 GR 12 PASTILLAS",
      "TARRO 480 GR 24 PASTILLAS"
    ],
    "priceBySize": {
      "1 KG": 8400,
      "TARRO 240 GR 12 PASTILLAS": 3800,
      "TARRO 480 GR 24 PASTILLAS": 6500
    },
    "description": "Pastillas Cloro Blanqueador Q con calidad garantizada de BLAN Q. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p81",
    "name": "Detergente Goodmax Tapa Dosif",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/power_81/300/300",
    "images": [
      "https://picsum.photos/seed/power_81/600/600",
      "https://picsum.photos/seed/power_81b/600/600",
      "https://picsum.photos/seed/power_81c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.7,
    "sold": 139,
    "brandId": "br2",
    "sizes": [
      "4 LT",
      "2 LT",
      "5 LT",
      "1 LT",
      "3 LT"
    ],
    "priceBySize": {
      "4 LT": 16800,
      "2 LT": 9391,
      "5 LT": 20500,
      "1 LT": 4500,
      "3 LT": 12900
    },
    "description": "Detergente Goodmax Tapa Dosif con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p82",
    "name": "Cera Polimerica Autobrillante Blanca Good Morning",
    "price": 22000,
    "image": "https://picsum.photos/seed/power_82/300/300",
    "images": [
      "https://picsum.photos/seed/power_82/600/600",
      "https://picsum.photos/seed/power_82b/600/600",
      "https://picsum.photos/seed/power_82c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.9,
    "sold": 213,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 22000,
      "20 LT": 104000
    },
    "aromas": [
      "BLANCA"
    ],
    "description": "Cera Polimerica Autobrillante Blanca Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p83",
    "name": "Varsol Puro Good Morning",
    "price": 4200,
    "image": "https://picsum.photos/seed/power_83/300/300",
    "images": [
      "https://picsum.photos/seed/power_83/600/600",
      "https://picsum.photos/seed/power_83b/600/600",
      "https://picsum.photos/seed/power_83c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 472,
    "brandId": "br2",
    "sizes": [
      "810 ML",
      "3",
      "500 ML",
      "20 LT"
    ],
    "priceBySize": {
      "3": 25000,
      "810 ML": 6800,
      "500 ML": 4200,
      "20 LT": 118400
    },
    "description": "Varsol Puro Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p84",
    "name": "Desengrasante Industrial Fantasia",
    "price": 7000,
    "image": "https://picsum.photos/seed/power_84/300/300",
    "images": [
      "https://picsum.photos/seed/power_84/600/600",
      "https://picsum.photos/seed/power_84b/600/600",
      "https://picsum.photos/seed/power_84c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.7,
    "sold": 281,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "810 ML"
    ],
    "priceBySize": {
      "3": 18500,
      "20 LT": 72000,
      "810 ML": 7000
    },
    "description": "Desengrasante Industrial Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p85",
    "name": "Lavaloza Limón Fantasia",
    "price": 3500,
    "originalPrice": 4375,
    "image": "https://picsum.photos/seed/power_85/300/300",
    "images": [
      "https://picsum.photos/seed/power_85/600/600",
      "https://picsum.photos/seed/power_85b/600/600",
      "https://picsum.photos/seed/power_85c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.7,
    "sold": 127,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "1 LT",
      "2 LT",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 18500,
      "500 ML": 3500,
      "1 LT": 12500,
      "2 LT": 6500,
      "20 LT": 72500
    },
    "aromas": [
      "LIMÓN"
    ],
    "description": "Lavaloza Limón Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p86",
    "name": "Lavaloza Chicle Fantasia",
    "price": 3500,
    "image": "https://picsum.photos/seed/power_86/300/300",
    "images": [
      "https://picsum.photos/seed/power_86/600/600",
      "https://picsum.photos/seed/power_86b/600/600",
      "https://picsum.photos/seed/power_86c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.8,
    "sold": 164,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "1 LT",
      "2 LT",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 18500,
      "500 ML": 3500,
      "1 LT": 6500,
      "2 LT": 12500,
      "20 LT": 72500
    },
    "aromas": [
      "CHICLE"
    ],
    "description": "Lavaloza Chicle Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p87",
    "name": "Lavaloza Neutro Fantasia",
    "price": 7000,
    "image": "https://picsum.photos/seed/power_87/300/300",
    "images": [
      "https://picsum.photos/seed/power_87/600/600",
      "https://picsum.photos/seed/power_87b/600/600",
      "https://picsum.photos/seed/power_87c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.9,
    "sold": 497,
    "brandId": "br1",
    "sizes": [
      "3",
      "20 LT",
      "1 LT",
      "500 ML"
    ],
    "priceBySize": {
      "3": 18500,
      "20 LT": 72500,
      "1 LT": 7000,
      "500 ML": 7500
    },
    "aromas": [
      "NEUTRO"
    ],
    "description": "Lavaloza Neutro Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p88",
    "name": "Jabon Ph Balanceado Delicia Primaveral Wind",
    "price": 1800,
    "image": "https://picsum.photos/seed/power_88/300/300",
    "images": [
      "https://picsum.photos/seed/power_88/600/600",
      "https://picsum.photos/seed/power_88b/600/600",
      "https://picsum.photos/seed/power_88c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.3,
    "sold": 121,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "3",
      "1 LT",
      "20 LT",
      "500 ML",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "1 LT": 5600,
      "20 LT": 42500,
      "500 ML": 3200,
      "300 ML": 1800
    },
    "aromas": [
      "DELICIA PRIMAVERAL"
    ],
    "description": "Jabon Ph Balanceado Delicia Primaveral Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p89",
    "name": "Jabon Ph Balanceado Citrus Wind",
    "price": 1800,
    "originalPrice": 2250,
    "image": "https://picsum.photos/seed/power_89/300/300",
    "images": [
      "https://picsum.photos/seed/power_89/600/600",
      "https://picsum.photos/seed/power_89b/600/600",
      "https://picsum.photos/seed/power_89c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.5,
    "sold": 195,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "3",
      "1 LT",
      "20 LT",
      "500 ML",
      "300 ML"
    ],
    "priceBySize": {
      "3": 12500,
      "2 LT": 9200,
      "1 LT": 5600,
      "20 LT": 42500,
      "500 ML": 3200,
      "300 ML": 1800
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Jabon Ph Balanceado Citrus Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p90",
    "name": "Lavaloza Crema",
    "price": 9200,
    "image": "https://picsum.photos/seed/power_90/300/300",
    "images": [
      "https://picsum.photos/seed/power_90/600/600",
      "https://picsum.photos/seed/power_90b/600/600",
      "https://picsum.photos/seed/power_90c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.5,
    "sold": 337,
    "brandId": "br2",
    "sizes": [
      "3 KG",
      "5 KG"
    ],
    "priceBySize": {
      "3 KG": 9200,
      "5 KG": 12500
    },
    "description": "Lavaloza Crema con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p91",
    "name": "Multiusos Blue Good Morning Lavanda",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_91/300/300",
    "images": [
      "https://picsum.photos/seed/power_91/600/600",
      "https://picsum.photos/seed/power_91b/600/600",
      "https://picsum.photos/seed/power_91c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.2,
    "sold": 368,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 10500,
      "20 LT": 42500
    },
    "aromas": [
      "LAVANDA"
    ],
    "description": "Multiusos Blue Good Morning Lavanda con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p92",
    "name": "Multiusos Blue Good Morning Canela",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_92/300/300",
    "images": [
      "https://picsum.photos/seed/power_92/600/600",
      "https://picsum.photos/seed/power_92b/600/600",
      "https://picsum.photos/seed/power_92c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.3,
    "sold": 405,
    "brandId": "br2",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 10500,
      "20 LT": 42500
    },
    "aromas": [
      "CANELA"
    ],
    "description": "Multiusos Blue Good Morning Canela con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p93",
    "name": "Silicona Líquida Chicle Cr Good Morning 250 Ml",
    "price": 5200,
    "originalPrice": 6500,
    "image": "https://picsum.photos/seed/power_93/300/300",
    "images": [
      "https://picsum.photos/seed/power_93/600/600",
      "https://picsum.photos/seed/power_93b/600/600",
      "https://picsum.photos/seed/power_93c/600/600"
    ],
    "category": "Automóvil",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 140,
    "brandId": "br2",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 5200
    },
    "aromas": [
      "CHICLE CR"
    ],
    "description": "Silicona Líquida Chicle Cr Good Morning 250 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p94",
    "name": "Silicona Líquida One Millon Vq Good Morning 250 Ml",
    "price": 5200,
    "image": "https://picsum.photos/seed/power_94/300/300",
    "images": [
      "https://picsum.photos/seed/power_94/600/600",
      "https://picsum.photos/seed/power_94b/600/600",
      "https://picsum.photos/seed/power_94c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.2,
    "sold": 214,
    "brandId": "br2",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 5200
    },
    "aromas": [
      "ONE MILLON VQ"
    ],
    "description": "Silicona Líquida One Millon Vq Good Morning 250 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p95",
    "name": "Silicona Líquida New Car Good Morning 250 Ml",
    "price": 5200,
    "image": "https://picsum.photos/seed/power_95/300/300",
    "images": [
      "https://picsum.photos/seed/power_95/600/600",
      "https://picsum.photos/seed/power_95b/600/600",
      "https://picsum.photos/seed/power_95c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.3,
    "sold": 251,
    "brandId": "br2",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 5200
    },
    "description": "Silicona Líquida New Car Good Morning 250 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p96",
    "name": "Silicona Líquida Chicle Cr Good Morning 3,75 Lt",
    "price": 29500,
    "image": "https://picsum.photos/seed/power_96/300/300",
    "images": [
      "https://picsum.photos/seed/power_96/600/600",
      "https://picsum.photos/seed/power_96b/600/600",
      "https://picsum.photos/seed/power_96c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.4,
    "sold": 288,
    "brandId": "br2",
    "sizes": [
      "75 LT"
    ],
    "priceBySize": {
      "75 LT": 29500
    },
    "aromas": [
      "CHICLE CR"
    ],
    "description": "Silicona Líquida Chicle Cr Good Morning 3,75 Lt con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p97",
    "name": "Silicona Líquida One Millon Vq Good Morning 3,75 Lt",
    "price": 29500,
    "originalPrice": 36875,
    "image": "https://picsum.photos/seed/power_97/300/300",
    "images": [
      "https://picsum.photos/seed/power_97/600/600",
      "https://picsum.photos/seed/power_97b/600/600",
      "https://picsum.photos/seed/power_97c/600/600"
    ],
    "category": "Automóvil",
    "rating": 4.6,
    "sold": 362,
    "brandId": "br2",
    "sizes": [
      "75 LT"
    ],
    "priceBySize": {
      "75 LT": 29500
    },
    "aromas": [
      "ONE MILLON VQ"
    ],
    "description": "Silicona Líquida One Millon Vq Good Morning 3,75 Lt con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p98",
    "name": "Sellador Polimerico Autobrillante Fantasia Rojo",
    "price": 11900,
    "image": "https://picsum.photos/seed/power_98/300/300",
    "images": [
      "https://picsum.photos/seed/power_98/600/600",
      "https://picsum.photos/seed/power_98b/600/600",
      "https://picsum.photos/seed/power_98c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.9,
    "sold": 473,
    "brandId": "br1",
    "sizes": [
      "810 ML",
      "20 LT",
      "3"
    ],
    "priceBySize": {
      "3": 53000,
      "810 ML": 11900,
      "20 LT": 245000
    },
    "aromas": [
      "ROJO"
    ],
    "description": "Sellador Polimerico Autobrillante Fantasia Rojo con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p99",
    "name": "Desengrasante Industrial",
    "price": 39000,
    "image": "https://picsum.photos/seed/power_99/300/300",
    "images": [
      "https://picsum.photos/seed/power_99/600/600",
      "https://picsum.photos/seed/power_99b/600/600",
      "https://picsum.photos/seed/power_99c/600/600"
    ],
    "category": "Cocina",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 60,
    "brandId": "br1",
    "sizes": [
      "SACHET 75 ML"
    ],
    "priceBySize": {
      "SACHET 75 ML": 39000
    },
    "description": "Desengrasante Industrial con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p100",
    "name": "Tratamiento Pisos Laminado Chicle Fantasia",
    "price": 3950,
    "image": "https://picsum.photos/seed/power_100/300/300",
    "images": [
      "https://picsum.photos/seed/power_100/600/600",
      "https://picsum.photos/seed/power_100b/600/600",
      "https://picsum.photos/seed/power_100c/600/600"
    ],
    "category": "Pisos",
    "rating": 4.4,
    "sold": 134,
    "brandId": "br1",
    "sizes": [
      "810 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 66000,
      "810 ML": 15000,
      "20 LT": 3950
    },
    "aromas": [
      "CHICLE"
    ],
    "description": "Tratamiento Pisos Laminado Chicle Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p101",
    "name": "Oxigeno Activo Fantasia Econopack",
    "price": 6800,
    "originalPrice": 8500,
    "image": "https://picsum.photos/seed/power_101/300/300",
    "images": [
      "https://picsum.photos/seed/power_101/600/600",
      "https://picsum.photos/seed/power_101b/600/600",
      "https://picsum.photos/seed/power_101c/600/600"
    ],
    "category": "Lavandería",
    "badge": "Nuevo",
    "rating": 4.7,
    "sold": 245,
    "brandId": "br1",
    "sizes": [
      "1 KG"
    ],
    "priceBySize": {
      "1 KG": 6800
    },
    "description": "Oxigeno Activo Fantasia Econopack con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p102",
    "name": "Suavizante Good Morning Lavanda",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_102/300/300",
    "images": [
      "https://picsum.photos/seed/power_102/600/600",
      "https://picsum.photos/seed/power_102b/600/600",
      "https://picsum.photos/seed/power_102c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.7,
    "sold": 91,
    "brandId": "br2",
    "sizes": [
      "3 LT",
      "5 LT",
      "20 LT",
      "4 LT",
      "2 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3 LT": 14500,
      "5 LT": 5800,
      "20 LT": 11500,
      "4 LT": 3800,
      "2 LT": 8800,
      "1 LT": 42500
    },
    "aromas": [
      "LAVANDA"
    ],
    "description": "Suavizante Good Morning Lavanda con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p103",
    "name": "Suavizante Good Morning Frutos Rojos",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_103/300/300",
    "images": [
      "https://picsum.photos/seed/power_103/600/600",
      "https://picsum.photos/seed/power_103b/600/600",
      "https://picsum.photos/seed/power_103c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.3,
    "sold": 239,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "3 LT",
      "5 LT",
      "20 LT",
      "4 LT",
      "1 LT"
    ],
    "priceBySize": {
      "2 LT": 8800,
      "3 LT": 14500,
      "5 LT": 5800,
      "20 LT": 11500,
      "4 LT": 3800,
      "1 LT": 42500
    },
    "aromas": [
      "FRUTOS ROJOS"
    ],
    "description": "Suavizante Good Morning Frutos Rojos con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p104",
    "name": "Suavizante Good Morning Baby",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_104/300/300",
    "images": [
      "https://picsum.photos/seed/power_104/600/600",
      "https://picsum.photos/seed/power_104b/600/600",
      "https://picsum.photos/seed/power_104c/600/600"
    ],
    "category": "Lavandería",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 350,
    "brandId": "br2",
    "sizes": [
      "3 LT",
      "5 LT",
      "20 LT",
      "4 LT",
      "2 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3 LT": 11500,
      "5 LT": 5800,
      "20 LT": 11500,
      "4 LT": 3800,
      "2 LT": 42500,
      "1 LT": 5800
    },
    "aromas": [
      "BABY"
    ],
    "description": "Suavizante Good Morning Baby con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p105",
    "name": "Biovarsol Good Morning",
    "price": 3500,
    "originalPrice": 4375,
    "image": "https://picsum.photos/seed/power_105/300/300",
    "images": [
      "https://picsum.photos/seed/power_105/600/600",
      "https://picsum.photos/seed/power_105b/600/600",
      "https://picsum.photos/seed/power_105c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 424,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "810 ML",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 23205,
      "500 ML": 3500,
      "810 ML": 6800,
      "20 LT": 116025
    },
    "description": "Biovarsol Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p106",
    "name": "Detergente Goodmax",
    "price": 55000,
    "image": "https://picsum.photos/seed/power_106/300/300",
    "images": [
      "https://picsum.photos/seed/power_106/600/600",
      "https://picsum.photos/seed/power_106b/600/600",
      "https://picsum.photos/seed/power_106c/600/600"
    ],
    "category": "Lavandería",
    "rating": 4.3,
    "sold": 381,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 55000
    },
    "description": "Detergente Goodmax con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p107",
    "name": "Repuesto Trapero Copa Ref 500",
    "price": 4400,
    "image": "https://picsum.photos/seed/power_107/300/300",
    "images": [
      "https://picsum.photos/seed/power_107/600/600",
      "https://picsum.photos/seed/power_107b/600/600",
      "https://picsum.photos/seed/power_107c/600/600"
    ],
    "category": "Traperos",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 480,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4400
    },
    "description": "Repuesto Trapero Copa Ref 500 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p108",
    "name": "Repuesto Trapero Copa Ref 800",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_108/300/300",
    "images": [
      "https://picsum.photos/seed/power_108/600/600",
      "https://picsum.photos/seed/power_108b/600/600",
      "https://picsum.photos/seed/power_108c/600/600"
    ],
    "category": "Traperos",
    "rating": 4.7,
    "sold": 67,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5000
    },
    "description": "Repuesto Trapero Copa Ref 800 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p109",
    "name": "Repuesto Trapero Copa Ref 1000",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/power_109/300/300",
    "images": [
      "https://picsum.photos/seed/power_109/600/600",
      "https://picsum.photos/seed/power_109b/600/600",
      "https://picsum.photos/seed/power_109c/600/600"
    ],
    "category": "Traperos",
    "rating": 4.8,
    "sold": 104,
    "brandId": "br2",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6000
    },
    "description": "Repuesto Trapero Copa Ref 1000 con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p110",
    "name": "Jabon Ph Balanceado Wind",
    "price": 1800,
    "image": "https://picsum.photos/seed/power_110/300/300",
    "images": [
      "https://picsum.photos/seed/power_110/600/600",
      "https://picsum.photos/seed/power_110b/600/600",
      "https://picsum.photos/seed/power_110c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.3,
    "sold": 61,
    "brandId": "br4",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 1800
    },
    "description": "Jabon Ph Balanceado Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p111",
    "name": "Lavaloza Limón Good Morning",
    "price": 2350,
    "image": "https://picsum.photos/seed/power_111/300/300",
    "images": [
      "https://picsum.photos/seed/power_111/600/600",
      "https://picsum.photos/seed/power_111b/600/600",
      "https://picsum.photos/seed/power_111c/600/600"
    ],
    "category": "Cocina",
    "rating": 4.7,
    "sold": 209,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "1 LT",
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 10500,
      "500 ML": 2350,
      "1 LT": 4500,
      "20 LT": 43500
    },
    "aromas": [
      "LIMÓN"
    ],
    "description": "Lavaloza Limón Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p112",
    "name": "Papel Higienico 250 Mts Good Morning 4 Rollos",
    "price": 28000,
    "image": "https://picsum.photos/seed/power_112/300/300",
    "images": [
      "https://picsum.photos/seed/power_112/600/600",
      "https://picsum.photos/seed/power_112b/600/600",
      "https://picsum.photos/seed/power_112c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.2,
    "sold": 166,
    "brandId": "br2",
    "sizes": [
      "250 MT"
    ],
    "priceBySize": {
      "250 MT": 28000
    },
    "description": "Papel Higienico 250 Mts Good Morning 4 Rollos con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p113",
    "name": "Oxigeno Activo Fantasia Tarrina",
    "price": 1,
    "originalPrice": 1,
    "image": "https://picsum.photos/seed/power_113/300/300",
    "images": [
      "https://picsum.photos/seed/power_113/600/600",
      "https://picsum.photos/seed/power_113b/600/600",
      "https://picsum.photos/seed/power_113c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.3,
    "sold": 203,
    "brandId": "br1",
    "sizes": [
      "500 GR",
      "250 GR"
    ],
    "priceBySize": {
      "500 GR": 1,
      "250 GR": 1
    },
    "description": "Oxigeno Activo Fantasia Tarrina con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p114",
    "name": "Limpiador De Juntas Fantasia",
    "price": 135000,
    "image": "https://picsum.photos/seed/power_114/300/300",
    "images": [
      "https://picsum.photos/seed/power_114/600/600",
      "https://picsum.photos/seed/power_114b/600/600",
      "https://picsum.photos/seed/power_114c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.5,
    "sold": 277,
    "brandId": "br1",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 135000
    },
    "description": "Limpiador De Juntas Fantasia con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p115",
    "name": "Alcohol Etilico 96% Power Andina",
    "price": 30500,
    "image": "https://picsum.photos/seed/power_115/300/300",
    "images": [
      "https://picsum.photos/seed/power_115/600/600",
      "https://picsum.photos/seed/power_115b/600/600",
      "https://picsum.photos/seed/power_115c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.7,
    "sold": 351,
    "brandId": "br4",
    "sizes": [
      "3",
      "20 LT"
    ],
    "priceBySize": {
      "3": 30500,
      "20 LT": 146000
    },
    "description": "Alcohol Etilico 96% Power Andina con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p116",
    "name": "Alcohol Industrial Wind 70%",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_116/300/300",
    "images": [
      "https://picsum.photos/seed/power_116/600/600",
      "https://picsum.photos/seed/power_116b/600/600",
      "https://picsum.photos/seed/power_116c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.2,
    "sold": 462,
    "brandId": "br4",
    "sizes": [
      "3",
      "20 LT",
      "1 LT ATM",
      "500 ML"
    ],
    "priceBySize": {
      "500 ML": 5200
    },
    "description": "Alcohol Industrial Wind 70% con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p117",
    "name": "Alcohol Antiseptico Wind 70%",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/power_117/300/300",
    "images": [
      "https://picsum.photos/seed/power_117/600/600",
      "https://picsum.photos/seed/power_117b/600/600",
      "https://picsum.photos/seed/power_117c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.4,
    "sold": 86,
    "brandId": "br4",
    "sizes": [
      "20 LT",
      "1 LT ATM",
      "750 ML ATM",
      "500 ML"
    ],
    "description": "Alcohol Antiseptico Wind 70% con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p118",
    "name": "Alcohol Antiseptico Wind 70 %",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_118/300/300",
    "images": [
      "https://picsum.photos/seed/power_118/600/600",
      "https://picsum.photos/seed/power_118b/600/600",
      "https://picsum.photos/seed/power_118c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.5,
    "sold": 123,
    "brandId": "br4",
    "sizes": [
      "3"
    ],
    "description": "Alcohol Antiseptico Wind 70 % con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p119",
    "name": "Alcohol Glicerinado Wind 70%",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_119/300/300",
    "images": [
      "https://picsum.photos/seed/power_119/600/600",
      "https://picsum.photos/seed/power_119b/600/600",
      "https://picsum.photos/seed/power_119c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.2,
    "sold": 308,
    "brandId": "br4",
    "sizes": [
      "120 ML SPRAY"
    ],
    "description": "Alcohol Glicerinado Wind 70% con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p120",
    "name": "Silicona Líquida One Millon Vq Good Morning 300 Ml",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_120/300/300",
    "images": [
      "https://picsum.photos/seed/power_120/600/600",
      "https://picsum.photos/seed/power_120b/600/600",
      "https://picsum.photos/seed/power_120c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.3,
    "sold": 345,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "ONE MILLON VQ"
    ],
    "description": "Silicona Líquida One Millon Vq Good Morning 300 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p121",
    "name": "Silicona Líquida New Car Good Morning 300 Ml",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/power_121/300/300",
    "images": [
      "https://picsum.photos/seed/power_121/600/600",
      "https://picsum.photos/seed/power_121b/600/600",
      "https://picsum.photos/seed/power_121c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.4,
    "sold": 382,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "description": "Silicona Líquida New Car Good Morning 300 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p122",
    "name": "Silicona Líquida Citrus Cr Good Morning 300 Ml",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_122/300/300",
    "images": [
      "https://picsum.photos/seed/power_122/600/600",
      "https://picsum.photos/seed/power_122b/600/600",
      "https://picsum.photos/seed/power_122c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.5,
    "sold": 419,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "CITRUS"
    ],
    "description": "Silicona Líquida Citrus Cr Good Morning 300 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p123",
    "name": "Silicona Líquida Chicle Cr Good Morning 300 Ml",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_123/300/300",
    "images": [
      "https://picsum.photos/seed/power_123/600/600",
      "https://picsum.photos/seed/power_123b/600/600",
      "https://picsum.photos/seed/power_123c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.6,
    "sold": 456,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "CHICLE CR"
    ],
    "description": "Silicona Líquida Chicle Cr Good Morning 300 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p124",
    "name": "Silicona Líquida Canela Good Morning",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_124/300/300",
    "images": [
      "https://picsum.photos/seed/power_124/600/600",
      "https://picsum.photos/seed/power_124b/600/600",
      "https://picsum.photos/seed/power_124c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.7,
    "sold": 493,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "CANELA"
    ],
    "description": "Silicona Líquida Canela Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p125",
    "name": "Silicona Líquida Baby Nv Good Morning 300 Ml",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/power_125/300/300",
    "images": [
      "https://picsum.photos/seed/power_125/600/600",
      "https://picsum.photos/seed/power_125b/600/600",
      "https://picsum.photos/seed/power_125c/600/600"
    ],
    "category": "Hogar",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 80,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "BABY NV"
    ],
    "description": "Silicona Líquida Baby Nv Good Morning 300 Ml con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p126",
    "name": "Shampoo Para Autos Good Morning",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_126/300/300",
    "images": [
      "https://picsum.photos/seed/power_126/600/600",
      "https://picsum.photos/seed/power_126b/600/600",
      "https://picsum.photos/seed/power_126c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.3,
    "sold": 191,
    "brandId": "br2",
    "sizes": [
      "810 ML"
    ],
    "description": "Shampoo Para Autos Good Morning con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p127",
    "name": "Jabon Ph Balanceado Explosion Frutal Wind",
    "price": 1800,
    "image": "https://picsum.photos/seed/power_127/300/300",
    "images": [
      "https://picsum.photos/seed/power_127/600/600",
      "https://picsum.photos/seed/power_127b/600/600",
      "https://picsum.photos/seed/power_127c/600/600"
    ],
    "category": "Cuidado Personal",
    "rating": 4.9,
    "sold": 413,
    "brandId": "br4",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 1800
    },
    "aromas": [
      "EXPLOSION FRUTAL"
    ],
    "description": "Jabon Ph Balanceado Explosion Frutal Wind con calidad garantizada de WIND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p128",
    "name": "Sellador Polimerico Autobrillante Fantasia Rojo",
    "price": 7350,
    "image": "https://picsum.photos/seed/power_128/300/300",
    "images": [
      "https://picsum.photos/seed/power_128/600/600",
      "https://picsum.photos/seed/power_128b/600/600",
      "https://picsum.photos/seed/power_128c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.4,
    "sold": 74,
    "brandId": "br1",
    "sizes": [
      "500 ML"
    ],
    "priceBySize": {
      "500 ML": 7350
    },
    "aromas": [
      "ROJO"
    ],
    "description": "Sellador Polimerico Autobrillante Fantasia Rojo con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p129",
    "name": "Trapero Con Palo Copa Ref 1200",
    "price": 1,
    "originalPrice": 1,
    "image": "https://picsum.photos/seed/power_129/300/300",
    "images": [
      "https://picsum.photos/seed/power_129/600/600",
      "https://picsum.photos/seed/power_129b/600/600",
      "https://picsum.photos/seed/power_129c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.5,
    "sold": 111,
    "brandId": "br1",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1
    },
    "description": "Trapero Con Palo Copa Ref 1200 con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p130",
    "name": "Trapero Con Palo Copa Ref 1500 (jumbo)",
    "price": 1,
    "image": "https://picsum.photos/seed/power_130/300/300",
    "images": [
      "https://picsum.photos/seed/power_130/600/600",
      "https://picsum.photos/seed/power_130b/600/600",
      "https://picsum.photos/seed/power_130c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.6,
    "sold": 148,
    "brandId": "br1",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1
    },
    "description": "Trapero Con Palo Copa Ref 1500 (jumbo) con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p131",
    "name": "Repuesto Trapero Copa Ref 1200",
    "price": 1,
    "image": "https://picsum.photos/seed/power_131/300/300",
    "images": [
      "https://picsum.photos/seed/power_131/600/600",
      "https://picsum.photos/seed/power_131b/600/600",
      "https://picsum.photos/seed/power_131c/600/600"
    ],
    "category": "Hogar",
    "badge": "Nuevo",
    "rating": 4.7,
    "sold": 185,
    "brandId": "br1",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1
    },
    "description": "Repuesto Trapero Copa Ref 1200 con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p132",
    "name": "Repuesto Trapero Copa Ref 1500 (jumbo)",
    "price": 1,
    "image": "https://picsum.photos/seed/power_132/300/300",
    "images": [
      "https://picsum.photos/seed/power_132/600/600",
      "https://picsum.photos/seed/power_132b/600/600",
      "https://picsum.photos/seed/power_132c/600/600"
    ],
    "category": "Hogar",
    "rating": 4.8,
    "sold": 222,
    "brandId": "br1",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1
    },
    "description": "Repuesto Trapero Copa Ref 1500 (jumbo) con calidad garantizada de FANTASIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p133",
    "name": "Desinfectante Good Morning Lavanda",
    "price": 4050,
    "originalPrice": 5063,
    "image": "https://picsum.photos/seed/power_133/300/300",
    "images": [
      "https://picsum.photos/seed/power_133/600/600",
      "https://picsum.photos/seed/power_133b/600/600",
      "https://picsum.photos/seed/power_133c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.9,
    "sold": 259,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "3"
    ],
    "priceBySize": {
      "3": 8000,
      "2 LT": 4050
    },
    "aromas": [
      "LAVANDA"
    ],
    "description": "Desinfectante Good Morning Lavanda con calidad garantizada de GOOD MORNING. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p134",
    "name": "Aparato Limpiavidrios Metalico Pequeño",
    "price": 28000,
    "image": "https://picsum.photos/seed/power_134/300/300",
    "images": [
      "https://picsum.photos/seed/power_134/600/600",
      "https://picsum.photos/seed/power_134b/600/600",
      "https://picsum.photos/seed/power_134c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 333,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 28000
    },
    "description": "Aparato Limpiavidrios Metalico Pequeño con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p135",
    "name": "Aparato Limpiavidrios Plastico Pequeño",
    "price": 10000,
    "image": "https://picsum.photos/seed/power_135/300/300",
    "images": [
      "https://picsum.photos/seed/power_135/600/600",
      "https://picsum.photos/seed/power_135b/600/600",
      "https://picsum.photos/seed/power_135c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 370,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10000
    },
    "description": "Aparato Limpiavidrios Plastico Pequeño con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p136",
    "name": "Aragan Metalico",
    "price": 53000,
    "image": "https://picsum.photos/seed/power_136/300/300",
    "images": [
      "https://picsum.photos/seed/power_136/600/600",
      "https://picsum.photos/seed/power_136b/600/600",
      "https://picsum.photos/seed/power_136c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 407,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 53000
    },
    "description": "Aragan Metalico con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p137",
    "name": "Aragan Plastico",
    "price": 11000,
    "originalPrice": 13750,
    "image": "https://picsum.photos/seed/power_137/300/300",
    "images": [
      "https://picsum.photos/seed/power_137/600/600",
      "https://picsum.photos/seed/power_137b/600/600",
      "https://picsum.photos/seed/power_137c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 444,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 11000
    },
    "description": "Aragan Plastico con calidad garantizada de CLEANING 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p138",
    "name": "Balde Plastico 10lt",
    "price": 8500,
    "image": "https://picsum.photos/seed/power_138/300/300",
    "images": [
      "https://picsum.photos/seed/power_138/600/600",
      "https://picsum.photos/seed/power_138b/600/600",
      "https://picsum.photos/seed/power_138c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 481,
    "sizes": [
      "10LT"
    ],
    "priceBySize": {
      "10LT": 8500
    },
    "description": "Balde Plastico 10lt con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p139",
    "name": "Bayetilla Mediana Blanca",
    "price": 2500,
    "image": "https://picsum.photos/seed/power_139/300/300",
    "images": [
      "https://picsum.photos/seed/power_139/600/600",
      "https://picsum.photos/seed/power_139b/600/600",
      "https://picsum.photos/seed/power_139c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 68,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "aromas": [
      "BLANCA"
    ],
    "description": "Bayetilla Mediana Blanca con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p140",
    "name": "Bayetilla Mediana Roja",
    "price": 2500,
    "image": "https://picsum.photos/seed/power_140/300/300",
    "images": [
      "https://picsum.photos/seed/power_140/600/600",
      "https://picsum.photos/seed/power_140b/600/600",
      "https://picsum.photos/seed/power_140c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 105,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "aromas": [
      "ROJA"
    ],
    "description": "Bayetilla Mediana Roja con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p141",
    "name": "Bayetilla Metro Blanca",
    "price": 6500,
    "originalPrice": 8125,
    "image": "https://picsum.photos/seed/power_141/300/300",
    "images": [
      "https://picsum.photos/seed/power_141/600/600",
      "https://picsum.photos/seed/power_141b/600/600",
      "https://picsum.photos/seed/power_141c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 142,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "aromas": [
      "BLANCA"
    ],
    "description": "Bayetilla Metro Blanca con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p142",
    "name": "Bayetilla Metro Roja",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_142/300/300",
    "images": [
      "https://picsum.photos/seed/power_142/600/600",
      "https://picsum.photos/seed/power_142b/600/600",
      "https://picsum.photos/seed/power_142c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 179,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "aromas": [
      "ROJA"
    ],
    "description": "Bayetilla Metro Roja con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p143",
    "name": "Bolsa Blanca 70x100",
    "price": 9000,
    "image": "https://picsum.photos/seed/power_143/300/300",
    "images": [
      "https://picsum.photos/seed/power_143/600/600",
      "https://picsum.photos/seed/power_143b/600/600",
      "https://picsum.photos/seed/power_143c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 216,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "aromas": [
      "BLANCA"
    ],
    "description": "Bolsa Blanca 70x100 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p144",
    "name": "Bolsa Negra 100x120",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_144/300/300",
    "images": [
      "https://picsum.photos/seed/power_144/600/600",
      "https://picsum.photos/seed/power_144b/600/600",
      "https://picsum.photos/seed/power_144c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 253,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10500
    },
    "description": "Bolsa Negra 100x120 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p145",
    "name": "Bolsa Negra 40x60",
    "price": 2600,
    "originalPrice": 3250,
    "image": "https://picsum.photos/seed/power_145/300/300",
    "images": [
      "https://picsum.photos/seed/power_145/600/600",
      "https://picsum.photos/seed/power_145b/600/600",
      "https://picsum.photos/seed/power_145c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 290,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2600
    },
    "description": "Bolsa Negra 40x60 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p146",
    "name": "Bolsa Negra 60x80",
    "price": 5400,
    "image": "https://picsum.photos/seed/power_146/300/300",
    "images": [
      "https://picsum.photos/seed/power_146/600/600",
      "https://picsum.photos/seed/power_146b/600/600",
      "https://picsum.photos/seed/power_146c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 327,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5400
    },
    "description": "Bolsa Negra 60x80 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p147",
    "name": "Bolsa Negra 70x100",
    "price": 9000,
    "image": "https://picsum.photos/seed/power_147/300/300",
    "images": [
      "https://picsum.photos/seed/power_147/600/600",
      "https://picsum.photos/seed/power_147b/600/600",
      "https://picsum.photos/seed/power_147c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 364,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "description": "Bolsa Negra 70x100 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p148",
    "name": "Bolsa Roja 70x100",
    "price": 9000,
    "image": "https://picsum.photos/seed/power_148/300/300",
    "images": [
      "https://picsum.photos/seed/power_148/600/600",
      "https://picsum.photos/seed/power_148b/600/600",
      "https://picsum.photos/seed/power_148c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 401,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "aromas": [
      "ROJA"
    ],
    "description": "Bolsa Roja 70x100 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p149",
    "name": "Bolsa Verde 70x100",
    "price": 9000,
    "originalPrice": 11250,
    "image": "https://picsum.photos/seed/power_149/300/300",
    "images": [
      "https://picsum.photos/seed/power_149/600/600",
      "https://picsum.photos/seed/power_149b/600/600",
      "https://picsum.photos/seed/power_149c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 438,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "description": "Bolsa Verde 70x100 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p150",
    "name": "Bonaire",
    "price": 10800,
    "image": "https://picsum.photos/seed/power_150/300/300",
    "images": [
      "https://picsum.photos/seed/power_150/600/600",
      "https://picsum.photos/seed/power_150b/600/600",
      "https://picsum.photos/seed/power_150c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 475,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10800
    },
    "description": "Bonaire con calidad garantizada de BONAIRE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p151",
    "name": "Cepillo De Piso",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_151/300/300",
    "images": [
      "https://picsum.photos/seed/power_151/600/600",
      "https://picsum.photos/seed/power_151b/600/600",
      "https://picsum.photos/seed/power_151c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 62,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Cepillo De Piso con calidad garantizada de CLEANING 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p152",
    "name": "Cepillo Dental",
    "price": 32000,
    "image": "https://picsum.photos/seed/power_152/300/300",
    "images": [
      "https://picsum.photos/seed/power_152/600/600",
      "https://picsum.photos/seed/power_152b/600/600",
      "https://picsum.photos/seed/power_152c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 99,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 32000
    },
    "description": "Cepillo Dental con calidad garantizada de COLGATE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p153",
    "name": "Cepillo Dental (economico)",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_153/300/300",
    "images": [
      "https://picsum.photos/seed/power_153/600/600",
      "https://picsum.photos/seed/power_153b/600/600",
      "https://picsum.photos/seed/power_153c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 136,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Cepillo Dental (economico) con calidad garantizada de DENTIPLUS. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p154",
    "name": "Cepillo Plancha",
    "price": 4800,
    "image": "https://picsum.photos/seed/power_154/300/300",
    "images": [
      "https://picsum.photos/seed/power_154/600/600",
      "https://picsum.photos/seed/power_154b/600/600",
      "https://picsum.photos/seed/power_154c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 173,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Cepillo Plancha con calidad garantizada de CLEANING 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p155",
    "name": "Cepillo Plancha Economico",
    "price": 3800,
    "image": "https://picsum.photos/seed/power_155/300/300",
    "images": [
      "https://picsum.photos/seed/power_155/600/600",
      "https://picsum.photos/seed/power_155b/600/600",
      "https://picsum.photos/seed/power_155c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 210,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3800
    },
    "description": "Cepillo Plancha Economico con calidad garantizada de 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p156",
    "name": "Cepillo Sanitario",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_156/300/300",
    "images": [
      "https://picsum.photos/seed/power_156/600/600",
      "https://picsum.photos/seed/power_156b/600/600",
      "https://picsum.photos/seed/power_156c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 247,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Cepillo Sanitario con calidad garantizada de 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p157",
    "name": "Chupa",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/power_157/300/300",
    "images": [
      "https://picsum.photos/seed/power_157/600/600",
      "https://picsum.photos/seed/power_157b/600/600",
      "https://picsum.photos/seed/power_157c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 284,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5000
    },
    "description": "Chupa con calidad garantizada de CLEANING 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p158",
    "name": "Escoba Dura Italiana",
    "price": 10000,
    "image": "https://picsum.photos/seed/power_158/300/300",
    "images": [
      "https://picsum.photos/seed/power_158/600/600",
      "https://picsum.photos/seed/power_158b/600/600",
      "https://picsum.photos/seed/power_158c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 321,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10000
    },
    "description": "Escoba Dura Italiana con calidad garantizada de ITALIANA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p159",
    "name": "Escoba Dura Tr",
    "price": 7800,
    "image": "https://picsum.photos/seed/power_159/300/300",
    "images": [
      "https://picsum.photos/seed/power_159/600/600",
      "https://picsum.photos/seed/power_159b/600/600",
      "https://picsum.photos/seed/power_159c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 358,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Dura Tr con calidad garantizada de TR. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p160",
    "name": "Escoba Suave Zamora Alta",
    "price": 12000,
    "image": "https://picsum.photos/seed/power_160/300/300",
    "images": [
      "https://picsum.photos/seed/power_160/600/600",
      "https://picsum.photos/seed/power_160b/600/600",
      "https://picsum.photos/seed/power_160c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.5,
    "sold": 395,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 12000
    },
    "description": "Escoba Suave Zamora Alta con calidad garantizada de ZAMORA ALTA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p161",
    "name": "Escoba Suave Zamora Baja",
    "price": 11500,
    "originalPrice": 14375,
    "image": "https://picsum.photos/seed/power_161/300/300",
    "images": [
      "https://picsum.photos/seed/power_161/600/600",
      "https://picsum.photos/seed/power_161b/600/600",
      "https://picsum.photos/seed/power_161c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 432,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 11500
    },
    "description": "Escoba Suave Zamora Baja con calidad garantizada de ZAMORA BAJA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p162",
    "name": "Escoba Suave Italiana",
    "price": 10500,
    "image": "https://picsum.photos/seed/power_162/300/300",
    "images": [
      "https://picsum.photos/seed/power_162/600/600",
      "https://picsum.photos/seed/power_162b/600/600",
      "https://picsum.photos/seed/power_162c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 469,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10500
    },
    "description": "Escoba Suave Italiana con calidad garantizada de ITALIANA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p163",
    "name": "Escoba Suave Monalisa",
    "price": 12000,
    "image": "https://picsum.photos/seed/power_163/300/300",
    "images": [
      "https://picsum.photos/seed/power_163/600/600",
      "https://picsum.photos/seed/power_163b/600/600",
      "https://picsum.photos/seed/power_163c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 56,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 12000
    },
    "description": "Escoba Suave Monalisa con calidad garantizada de MONALISA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p164",
    "name": "Escoba Suave Super Danna",
    "price": 13500,
    "image": "https://picsum.photos/seed/power_164/300/300",
    "images": [
      "https://picsum.photos/seed/power_164/600/600",
      "https://picsum.photos/seed/power_164b/600/600",
      "https://picsum.photos/seed/power_164c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 93,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13500
    },
    "description": "Escoba Suave Super Danna con calidad garantizada de SUPER DANNA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p165",
    "name": "Escoba Suave Tr",
    "price": 7800,
    "originalPrice": 9750,
    "image": "https://picsum.photos/seed/power_165/300/300",
    "images": [
      "https://picsum.photos/seed/power_165/600/600",
      "https://picsum.photos/seed/power_165b/600/600",
      "https://picsum.photos/seed/power_165c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 130,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Suave Tr con calidad garantizada de TR. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p166",
    "name": "Escoba Suave Zulia",
    "price": 7800,
    "image": "https://picsum.photos/seed/power_166/300/300",
    "images": [
      "https://picsum.photos/seed/power_166/600/600",
      "https://picsum.photos/seed/power_166b/600/600",
      "https://picsum.photos/seed/power_166c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 167,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Suave Zulia con calidad garantizada de ZULIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p167",
    "name": "Esponja Acerada",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_167/300/300",
    "images": [
      "https://picsum.photos/seed/power_167/600/600",
      "https://picsum.photos/seed/power_167b/600/600",
      "https://picsum.photos/seed/power_167c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 204,
    "sizes": [
      "Unidad",
      "4"
    ],
    "priceBySize": {
      "4": 14000,
      "Unidad": 4000
    },
    "description": "Esponja Acerada con calidad garantizada de EBRAND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p168",
    "name": "Esponja Oro -plata",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_168/300/300",
    "images": [
      "https://picsum.photos/seed/power_168/600/600",
      "https://picsum.photos/seed/power_168b/600/600",
      "https://picsum.photos/seed/power_168c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 278,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Esponja Oro -plata con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p169",
    "name": "Esponja Sabra (rojo-gris)",
    "price": 1300,
    "originalPrice": 1625,
    "image": "https://picsum.photos/seed/power_169/300/300",
    "images": [
      "https://picsum.photos/seed/power_169/600/600",
      "https://picsum.photos/seed/power_169b/600/600",
      "https://picsum.photos/seed/power_169c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 315,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1300
    },
    "aromas": [
      "ROJO"
    ],
    "description": "Esponja Sabra (rojo-gris) con calidad garantizada de LIAO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p170",
    "name": "Glade Disco",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_170/300/300",
    "images": [
      "https://picsum.photos/seed/power_170/600/600",
      "https://picsum.photos/seed/power_170b/600/600",
      "https://picsum.photos/seed/power_170c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 352,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Glade Disco con calidad garantizada de GLADE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p171",
    "name": "Gorros Oruga (cofias)",
    "price": 19000,
    "image": "https://picsum.photos/seed/power_171/300/300",
    "images": [
      "https://picsum.photos/seed/power_171/600/600",
      "https://picsum.photos/seed/power_171b/600/600",
      "https://picsum.photos/seed/power_171c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 389,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 19000
    },
    "description": "Gorros Oruga (cofias) con calidad garantizada de UKA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p172",
    "name": "Guantes Calibre 25 Talla 8",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_172/300/300",
    "images": [
      "https://picsum.photos/seed/power_172/600/600",
      "https://picsum.photos/seed/power_172b/600/600",
      "https://picsum.photos/seed/power_172c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 426,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 8 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p173",
    "name": "Guantes Calibre 35 Talla 8",
    "price": 5700,
    "originalPrice": 7125,
    "image": "https://picsum.photos/seed/power_173/300/300",
    "images": [
      "https://picsum.photos/seed/power_173/600/600",
      "https://picsum.photos/seed/power_173b/600/600",
      "https://picsum.photos/seed/power_173c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 463,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 8 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p174",
    "name": "Guantes De Nitrilo Azul",
    "price": 27000,
    "image": "https://picsum.photos/seed/power_174/300/300",
    "images": [
      "https://picsum.photos/seed/power_174/600/600",
      "https://picsum.photos/seed/power_174b/600/600",
      "https://picsum.photos/seed/power_174c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 50,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Guantes De Nitrilo Azul con calidad garantizada de KUYK. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p175",
    "name": "Guantes De Nitrilo Negro",
    "price": 27000,
    "image": "https://picsum.photos/seed/power_175/300/300",
    "images": [
      "https://picsum.photos/seed/power_175/600/600",
      "https://picsum.photos/seed/power_175b/600/600",
      "https://picsum.photos/seed/power_175c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 87,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Guantes De Nitrilo Negro con calidad garantizada de UKA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p176",
    "name": "Guantes Desechables (transparentes)",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_176/300/300",
    "images": [
      "https://picsum.photos/seed/power_176/600/600",
      "https://picsum.photos/seed/power_176b/600/600",
      "https://picsum.photos/seed/power_176c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 124,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Desechables (transparentes) con calidad garantizada de ARANPLAST. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p177",
    "name": "Guantes Domesticos Talla 7",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_177/300/300",
    "images": [
      "https://picsum.photos/seed/power_177/600/600",
      "https://picsum.photos/seed/power_177b/600/600",
      "https://picsum.photos/seed/power_177c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 161,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 7 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p178",
    "name": "Guarda Escobas",
    "price": 23000,
    "image": "https://picsum.photos/seed/power_178/300/300",
    "images": [
      "https://picsum.photos/seed/power_178/600/600",
      "https://picsum.photos/seed/power_178b/600/600",
      "https://picsum.photos/seed/power_178c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 198,
    "sizes": [
      "3",
      "5"
    ],
    "priceBySize": {
      "3": 23000,
      "5": 31000
    },
    "description": "Guarda Escobas con calidad garantizada de LIAO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p179",
    "name": "Jabon Rey Barra",
    "price": 3200,
    "image": "https://picsum.photos/seed/power_179/300/300",
    "images": [
      "https://picsum.photos/seed/power_179/600/600",
      "https://picsum.photos/seed/power_179b/600/600",
      "https://picsum.photos/seed/power_179c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 272,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3200
    },
    "description": "Jabon Rey Barra con calidad garantizada de DERSA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p180",
    "name": "Limpion Grande Blanco",
    "price": 2200,
    "image": "https://picsum.photos/seed/power_180/300/300",
    "images": [
      "https://picsum.photos/seed/power_180/600/600",
      "https://picsum.photos/seed/power_180b/600/600",
      "https://picsum.photos/seed/power_180c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 309,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2200
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Limpion Grande Blanco con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p181",
    "name": "Limpion Grande Colores",
    "price": 2200,
    "originalPrice": 2750,
    "image": "https://picsum.photos/seed/power_181/300/300",
    "images": [
      "https://picsum.photos/seed/power_181/600/600",
      "https://picsum.photos/seed/power_181b/600/600",
      "https://picsum.photos/seed/power_181c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 346,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2200
    },
    "description": "Limpion Grande Colores con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p182",
    "name": "Limpion Mediano Blanco",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_182/300/300",
    "images": [
      "https://picsum.photos/seed/power_182/600/600",
      "https://picsum.photos/seed/power_182b/600/600",
      "https://picsum.photos/seed/power_182c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 383,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Limpion Mediano Blanco con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p183",
    "name": "Limpion Mediano Colores",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_183/300/300",
    "images": [
      "https://picsum.photos/seed/power_183/600/600",
      "https://picsum.photos/seed/power_183b/600/600",
      "https://picsum.photos/seed/power_183c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 420,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Limpion Mediano Colores con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p184",
    "name": "Limpion Pequeño Blanco",
    "price": 1200,
    "image": "https://picsum.photos/seed/power_184/300/300",
    "images": [
      "https://picsum.photos/seed/power_184/600/600",
      "https://picsum.photos/seed/power_184b/600/600",
      "https://picsum.photos/seed/power_184c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 457,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1200
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Limpion Pequeño Blanco con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p185",
    "name": "Limpion Pequeño Colores",
    "price": 1200,
    "originalPrice": 1500,
    "image": "https://picsum.photos/seed/power_185/300/300",
    "images": [
      "https://picsum.photos/seed/power_185/600/600",
      "https://picsum.photos/seed/power_185b/600/600",
      "https://picsum.photos/seed/power_185c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 494,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1200
    },
    "description": "Limpion Pequeño Colores con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p186",
    "name": "Limpiones Microfibra Estampado",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_186/300/300",
    "images": [
      "https://picsum.photos/seed/power_186/600/600",
      "https://picsum.photos/seed/power_186b/600/600",
      "https://picsum.photos/seed/power_186c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 81,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Limpiones Microfibra Estampado con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p187",
    "name": "Limpiones Microfibra Unicolor",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_187/300/300",
    "images": [
      "https://picsum.photos/seed/power_187/600/600",
      "https://picsum.photos/seed/power_187b/600/600",
      "https://picsum.photos/seed/power_187c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 118,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5000
    },
    "description": "Limpiones Microfibra Unicolor con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p188",
    "name": "Matrix",
    "price": 1500,
    "image": "https://picsum.photos/seed/power_188/300/300",
    "images": [
      "https://picsum.photos/seed/power_188/600/600",
      "https://picsum.photos/seed/power_188b/600/600",
      "https://picsum.photos/seed/power_188c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.3,
    "sold": 155,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Matrix con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p189",
    "name": "Mopa Algodon Completa 1mt",
    "price": 70000,
    "originalPrice": 87500,
    "image": "https://picsum.photos/seed/power_189/300/300",
    "images": [
      "https://picsum.photos/seed/power_189/600/600",
      "https://picsum.photos/seed/power_189b/600/600",
      "https://picsum.photos/seed/power_189c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 192,
    "sizes": [
      "1MT"
    ],
    "priceBySize": {
      "1MT": 70000
    },
    "description": "Mopa Algodon Completa 1mt con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p190",
    "name": "Mopa Algodon Completa 60cm",
    "price": 58000,
    "image": "https://picsum.photos/seed/power_190/300/300",
    "images": [
      "https://picsum.photos/seed/power_190/600/600",
      "https://picsum.photos/seed/power_190b/600/600",
      "https://picsum.photos/seed/power_190c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 229,
    "sizes": [
      "60CM"
    ],
    "priceBySize": {
      "60CM": 58000
    },
    "description": "Mopa Algodon Completa 60cm con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p191",
    "name": "Palo Madera",
    "price": 2000,
    "image": "https://picsum.photos/seed/power_191/300/300",
    "images": [
      "https://picsum.photos/seed/power_191/600/600",
      "https://picsum.photos/seed/power_191b/600/600",
      "https://picsum.photos/seed/power_191c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 266,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2000
    },
    "description": "Palo Madera con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p192",
    "name": "Palo Metalico 1,40",
    "price": 8500,
    "image": "https://picsum.photos/seed/power_192/300/300",
    "images": [
      "https://picsum.photos/seed/power_192/600/600",
      "https://picsum.photos/seed/power_192b/600/600",
      "https://picsum.photos/seed/power_192c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 303,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 8500
    },
    "description": "Palo Metalico 1,40 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p193",
    "name": "Palo Metalico 1.20",
    "price": 7500,
    "originalPrice": 9375,
    "image": "https://picsum.photos/seed/power_193/300/300",
    "images": [
      "https://picsum.photos/seed/power_193/600/600",
      "https://picsum.photos/seed/power_193b/600/600",
      "https://picsum.photos/seed/power_193c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 340,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7500
    },
    "description": "Palo Metalico 1.20 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p194",
    "name": "Pañitos",
    "price": 7500,
    "image": "https://picsum.photos/seed/power_194/300/300",
    "images": [
      "https://picsum.photos/seed/power_194/600/600",
      "https://picsum.photos/seed/power_194b/600/600",
      "https://picsum.photos/seed/power_194c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 377,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7500
    },
    "description": "Pañitos con calidad garantizada de BABY CHIQUIS. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p195",
    "name": "Paño Abrasivo(verde)",
    "price": 700,
    "image": "https://picsum.photos/seed/power_195/300/300",
    "images": [
      "https://picsum.photos/seed/power_195/600/600",
      "https://picsum.photos/seed/power_195b/600/600",
      "https://picsum.photos/seed/power_195c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 414,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 700
    },
    "description": "Paño Abrasivo(verde) con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p196",
    "name": "Paños Multiusos",
    "price": 43000,
    "image": "https://picsum.photos/seed/power_196/300/300",
    "images": [
      "https://picsum.photos/seed/power_196/600/600",
      "https://picsum.photos/seed/power_196b/600/600",
      "https://picsum.photos/seed/power_196c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 451,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 43000
    },
    "description": "Paños Multiusos con calidad garantizada de WYPALL. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p197",
    "name": "Paños Multiusos (morado)",
    "price": 25000,
    "originalPrice": 31250,
    "image": "https://picsum.photos/seed/power_197/300/300",
    "images": [
      "https://picsum.photos/seed/power_197/600/600",
      "https://picsum.photos/seed/power_197b/600/600",
      "https://picsum.photos/seed/power_197c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 488,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 25000
    },
    "description": "Paños Multiusos (morado) con calidad garantizada de EBRAND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p198",
    "name": "Paños Multiusos (negro)",
    "price": 36500,
    "image": "https://picsum.photos/seed/power_198/300/300",
    "images": [
      "https://picsum.photos/seed/power_198/600/600",
      "https://picsum.photos/seed/power_198b/600/600",
      "https://picsum.photos/seed/power_198c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 75,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 36500
    },
    "description": "Paños Multiusos (negro) con calidad garantizada de EBRAND. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p199",
    "name": "Pañuelos",
    "price": 13500,
    "image": "https://picsum.photos/seed/power_199/300/300",
    "images": [
      "https://picsum.photos/seed/power_199/600/600",
      "https://picsum.photos/seed/power_199b/600/600",
      "https://picsum.photos/seed/power_199c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 112,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13500
    },
    "description": "Pañuelos con calidad garantizada de KLEENEX. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p200",
    "name": "Papel Scott",
    "price": 2500,
    "image": "https://picsum.photos/seed/power_200/300/300",
    "images": [
      "https://picsum.photos/seed/power_200/600/600",
      "https://picsum.photos/seed/power_200b/600/600",
      "https://picsum.photos/seed/power_200c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 149,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Papel Scott con calidad garantizada de SCOTT. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p201",
    "name": "Papel Scott Paca X 30",
    "price": 60000,
    "originalPrice": 75000,
    "image": "https://picsum.photos/seed/power_201/300/300",
    "images": [
      "https://picsum.photos/seed/power_201/600/600",
      "https://picsum.photos/seed/power_201b/600/600",
      "https://picsum.photos/seed/power_201c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 186,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 60000
    },
    "description": "Papel Scott Paca X 30 con calidad garantizada de SCOTT. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p202",
    "name": "Papelera",
    "price": 13000,
    "image": "https://picsum.photos/seed/power_202/300/300",
    "images": [
      "https://picsum.photos/seed/power_202/600/600",
      "https://picsum.photos/seed/power_202b/600/600",
      "https://picsum.photos/seed/power_202c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 223,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13000
    },
    "description": "Papelera con calidad garantizada de PLASTIRED. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p203",
    "name": "Pastilla Azul",
    "price": 2800,
    "image": "https://picsum.photos/seed/power_203/300/300",
    "images": [
      "https://picsum.photos/seed/power_203/600/600",
      "https://picsum.photos/seed/power_203b/600/600",
      "https://picsum.photos/seed/power_203c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 260,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2800
    },
    "description": "Pastilla Azul con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p204",
    "name": "Recogedor",
    "price": 4800,
    "image": "https://picsum.photos/seed/power_204/300/300",
    "images": [
      "https://picsum.photos/seed/power_204/600/600",
      "https://picsum.photos/seed/power_204b/600/600",
      "https://picsum.photos/seed/power_204c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 297,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Recogedor con calidad garantizada de SMART. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p205",
    "name": "Servilletas",
    "price": 4800,
    "originalPrice": 6000,
    "image": "https://picsum.photos/seed/power_205/300/300",
    "images": [
      "https://picsum.photos/seed/power_205/600/600",
      "https://picsum.photos/seed/power_205b/600/600",
      "https://picsum.photos/seed/power_205c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 334,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Servilletas con calidad garantizada de FAVORITA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p206",
    "name": "Tapabocas (azul)",
    "price": 13000,
    "image": "https://picsum.photos/seed/power_206/300/300",
    "images": [
      "https://picsum.photos/seed/power_206/600/600",
      "https://picsum.photos/seed/power_206b/600/600",
      "https://picsum.photos/seed/power_206c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 371,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13000
    },
    "description": "Tapabocas (azul) con calidad garantizada de UKA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p207",
    "name": "Tapabocas (negro)",
    "price": 15000,
    "image": "https://picsum.photos/seed/power_207/300/300",
    "images": [
      "https://picsum.photos/seed/power_207/600/600",
      "https://picsum.photos/seed/power_207b/600/600",
      "https://picsum.photos/seed/power_207c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 408,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 15000
    },
    "description": "Tapabocas (negro) con calidad garantizada de UKA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p208",
    "name": "Toalla Cocina Multiusos",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_208/300/300",
    "images": [
      "https://picsum.photos/seed/power_208/600/600",
      "https://picsum.photos/seed/power_208b/600/600",
      "https://picsum.photos/seed/power_208c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 445,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Toalla Cocina Multiusos con calidad garantizada de FAVORITAS. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p209",
    "name": "Toalla Cocina Multiusos",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_209/300/300",
    "images": [
      "https://picsum.photos/seed/power_209/600/600",
      "https://picsum.photos/seed/power_209b/600/600",
      "https://picsum.photos/seed/power_209c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 482,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Toalla Cocina Multiusos con calidad garantizada de FAMILIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p210",
    "name": "Toalla Cocina Multiusos X3",
    "price": 9500,
    "image": "https://picsum.photos/seed/power_210/300/300",
    "images": [
      "https://picsum.photos/seed/power_210/600/600",
      "https://picsum.photos/seed/power_210b/600/600",
      "https://picsum.photos/seed/power_210c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 69,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9500
    },
    "description": "Toalla Cocina Multiusos X3 con calidad garantizada de FAVORITAS. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p211",
    "name": "Toalla De Papel Tipo Z Elite",
    "price": 6400,
    "image": "https://picsum.photos/seed/power_211/300/300",
    "images": [
      "https://picsum.photos/seed/power_211/600/600",
      "https://picsum.photos/seed/power_211b/600/600",
      "https://picsum.photos/seed/power_211c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 106,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6400
    },
    "description": "Toalla De Papel Tipo Z Elite con calidad garantizada de ELITE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p212",
    "name": "Toalla De Papel Tipo Z Sofi",
    "price": 4800,
    "image": "https://picsum.photos/seed/power_212/300/300",
    "images": [
      "https://picsum.photos/seed/power_212/600/600",
      "https://picsum.photos/seed/power_212b/600/600",
      "https://picsum.photos/seed/power_212c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 143,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Toalla De Papel Tipo Z Sofi con calidad garantizada de SOFI. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p213",
    "name": "Toalla De Papel Tipo Z X24 Elite",
    "price": 145000,
    "originalPrice": 181250,
    "image": "https://picsum.photos/seed/power_213/300/300",
    "images": [
      "https://picsum.photos/seed/power_213/600/600",
      "https://picsum.photos/seed/power_213b/600/600",
      "https://picsum.photos/seed/power_213c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 180,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 145000
    },
    "description": "Toalla De Papel Tipo Z X24 Elite con calidad garantizada de ELITE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p214",
    "name": "Toalla De Papel Tipo Z X24 Sofi",
    "price": 34400,
    "image": "https://picsum.photos/seed/power_214/300/300",
    "images": [
      "https://picsum.photos/seed/power_214/600/600",
      "https://picsum.photos/seed/power_214b/600/600",
      "https://picsum.photos/seed/power_214c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 217,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 34400
    },
    "description": "Toalla De Papel Tipo Z X24 Sofi con calidad garantizada de SOFI. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p215",
    "name": "Toalla Elite De Mano X6",
    "price": 158000,
    "image": "https://picsum.photos/seed/power_215/300/300",
    "images": [
      "https://picsum.photos/seed/power_215/600/600",
      "https://picsum.photos/seed/power_215b/600/600",
      "https://picsum.photos/seed/power_215c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 254,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 158000
    },
    "description": "Toalla Elite De Mano X6 con calidad garantizada de ELITE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p216",
    "name": "Trapero Escurridor",
    "price": 35000,
    "image": "https://picsum.photos/seed/power_216/300/300",
    "images": [
      "https://picsum.photos/seed/power_216/600/600",
      "https://picsum.photos/seed/power_216b/600/600",
      "https://picsum.photos/seed/power_216c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 291,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 35000
    },
    "description": "Trapero Escurridor con calidad garantizada de LIAO 1A. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p217",
    "name": "Vasos Carton 5oz",
    "price": 5500,
    "originalPrice": 6875,
    "image": "https://picsum.photos/seed/power_217/300/300",
    "images": [
      "https://picsum.photos/seed/power_217/600/600",
      "https://picsum.photos/seed/power_217b/600/600",
      "https://picsum.photos/seed/power_217c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 328,
    "sizes": [
      "5OZ"
    ],
    "priceBySize": {
      "5OZ": 5500
    },
    "description": "Vasos Carton 5oz con calidad garantizada de CHAMPION. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p218",
    "name": "Vasos Carton 6oz",
    "price": 6000,
    "image": "https://picsum.photos/seed/power_218/300/300",
    "images": [
      "https://picsum.photos/seed/power_218/600/600",
      "https://picsum.photos/seed/power_218b/600/600",
      "https://picsum.photos/seed/power_218c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.9,
    "sold": 365,
    "sizes": [
      "6OZ"
    ],
    "priceBySize": {
      "6OZ": 6000
    },
    "description": "Vasos Carton 6oz con calidad garantizada de CHAMPION. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p219",
    "name": "Vasos Carton 7oz",
    "price": 7500,
    "image": "https://picsum.photos/seed/power_219/300/300",
    "images": [
      "https://picsum.photos/seed/power_219/600/600",
      "https://picsum.photos/seed/power_219b/600/600",
      "https://picsum.photos/seed/power_219c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 402,
    "sizes": [
      "7OZ"
    ],
    "priceBySize": {
      "7OZ": 7500
    },
    "description": "Vasos Carton 7oz con calidad garantizada de CHAMPION. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p220",
    "name": "Vasos Desechables 5oz Blanco",
    "price": 2600,
    "image": "https://picsum.photos/seed/power_220/300/300",
    "images": [
      "https://picsum.photos/seed/power_220/600/600",
      "https://picsum.photos/seed/power_220b/600/600",
      "https://picsum.photos/seed/power_220c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 439,
    "sizes": [
      "5OZ"
    ],
    "priceBySize": {
      "5OZ": 2600
    },
    "aromas": [
      "BLANCO"
    ],
    "description": "Vasos Desechables 5oz Blanco con calidad garantizada de CHAMPION. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p221",
    "name": "Vasos Desechables 7oz",
    "price": 3000,
    "originalPrice": 3750,
    "image": "https://picsum.photos/seed/power_221/300/300",
    "images": [
      "https://picsum.photos/seed/power_221/600/600",
      "https://picsum.photos/seed/power_221b/600/600",
      "https://picsum.photos/seed/power_221c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 476,
    "sizes": [
      "7OZ"
    ],
    "priceBySize": {
      "7OZ": 3000
    },
    "description": "Vasos Desechables 7oz con calidad garantizada de CHAMPION. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p222",
    "name": "Detergente En Polvo 3d 500 Gr",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_222/300/300",
    "images": [
      "https://picsum.photos/seed/power_222/600/600",
      "https://picsum.photos/seed/power_222b/600/600",
      "https://picsum.photos/seed/power_222c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 63,
    "sizes": [
      "500 GR"
    ],
    "description": "Detergente En Polvo 3d 500 Gr con calidad garantizada de DERSA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p223",
    "name": "Papel Scott X 4",
    "price": 9500,
    "image": "https://picsum.photos/seed/power_223/300/300",
    "images": [
      "https://picsum.photos/seed/power_223/600/600",
      "https://picsum.photos/seed/power_223b/600/600",
      "https://picsum.photos/seed/power_223c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 100,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9500
    },
    "description": "Papel Scott X 4 con calidad garantizada de SCOTT. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p224",
    "name": "Pastillas Cloro X 3",
    "price": 2500,
    "image": "https://picsum.photos/seed/power_224/300/300",
    "images": [
      "https://picsum.photos/seed/power_224/600/600",
      "https://picsum.photos/seed/power_224b/600/600",
      "https://picsum.photos/seed/power_224c/600/600"
    ],
    "category": "Desinfección",
    "rating": 4.7,
    "sold": 137,
    "brandId": "br5",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Pastillas Cloro X 3 con calidad garantizada de BLAN Q. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p225",
    "name": "Atomizador",
    "price": 2500,
    "originalPrice": 3125,
    "image": "https://picsum.photos/seed/power_225/300/300",
    "images": [
      "https://picsum.photos/seed/power_225/600/600",
      "https://picsum.photos/seed/power_225b/600/600",
      "https://picsum.photos/seed/power_225c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 174,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Atomizador con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p226",
    "name": "Toalla En Rollo X 2 Und Sofi",
    "price": 35000,
    "image": "https://picsum.photos/seed/power_226/300/300",
    "images": [
      "https://picsum.photos/seed/power_226/600/600",
      "https://picsum.photos/seed/power_226b/600/600",
      "https://picsum.photos/seed/power_226c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 211,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 35000
    },
    "description": "Toalla En Rollo X 2 Und Sofi con calidad garantizada de SOFI. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p227",
    "name": "Crema Multiusos Frotex",
    "price": 8500,
    "image": "https://picsum.photos/seed/power_227/300/300",
    "images": [
      "https://picsum.photos/seed/power_227/600/600",
      "https://picsum.photos/seed/power_227b/600/600",
      "https://picsum.photos/seed/power_227c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 248,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 8500
    },
    "description": "Crema Multiusos Frotex con calidad garantizada de FROTEX. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p228",
    "name": "Guantes Calibre 25 Talla 7",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_228/300/300",
    "images": [
      "https://picsum.photos/seed/power_228/600/600",
      "https://picsum.photos/seed/power_228b/600/600",
      "https://picsum.photos/seed/power_228c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 285,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 7 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p229",
    "name": "Guantes Calibre 25 Talla 7 1/2",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/power_229/300/300",
    "images": [
      "https://picsum.photos/seed/power_229/600/600",
      "https://picsum.photos/seed/power_229b/600/600",
      "https://picsum.photos/seed/power_229c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 322,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 7 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p230",
    "name": "Guantes Calibre 25 Talla 8 1/2",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_230/300/300",
    "images": [
      "https://picsum.photos/seed/power_230/600/600",
      "https://picsum.photos/seed/power_230b/600/600",
      "https://picsum.photos/seed/power_230c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 359,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 8 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p231",
    "name": "Guantes Calibre 25 Talla 9",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_231/300/300",
    "images": [
      "https://picsum.photos/seed/power_231/600/600",
      "https://picsum.photos/seed/power_231b/600/600",
      "https://picsum.photos/seed/power_231c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 396,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 9 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p232",
    "name": "Guantes Calibre 25 Talla 9 1/2",
    "price": 4500,
    "image": "https://picsum.photos/seed/power_232/300/300",
    "images": [
      "https://picsum.photos/seed/power_232/600/600",
      "https://picsum.photos/seed/power_232b/600/600",
      "https://picsum.photos/seed/power_232c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 433,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 9 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p233",
    "name": "Guantes Calibre 35 Talla 7",
    "price": 5700,
    "originalPrice": 7125,
    "image": "https://picsum.photos/seed/power_233/300/300",
    "images": [
      "https://picsum.photos/seed/power_233/600/600",
      "https://picsum.photos/seed/power_233b/600/600",
      "https://picsum.photos/seed/power_233c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 470,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 7 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p234",
    "name": "Guantes Calibre 35 Talla 7 1/2",
    "price": 5700,
    "image": "https://picsum.photos/seed/power_234/300/300",
    "images": [
      "https://picsum.photos/seed/power_234/600/600",
      "https://picsum.photos/seed/power_234b/600/600",
      "https://picsum.photos/seed/power_234c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 57,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 7 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p235",
    "name": "Guantes Calibre 35 Talla 8 1/2",
    "price": 5700,
    "image": "https://picsum.photos/seed/power_235/300/300",
    "images": [
      "https://picsum.photos/seed/power_235/600/600",
      "https://picsum.photos/seed/power_235b/600/600",
      "https://picsum.photos/seed/power_235c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 94,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 8 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p236",
    "name": "Guantes Calibre 35 Talla 9",
    "price": 5700,
    "image": "https://picsum.photos/seed/power_236/300/300",
    "images": [
      "https://picsum.photos/seed/power_236/600/600",
      "https://picsum.photos/seed/power_236b/600/600",
      "https://picsum.photos/seed/power_236c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 131,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 9 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p237",
    "name": "Guantes Calibre 35 Talla 9 1/2",
    "price": 5700,
    "originalPrice": 7125,
    "image": "https://picsum.photos/seed/power_237/300/300",
    "images": [
      "https://picsum.photos/seed/power_237/600/600",
      "https://picsum.photos/seed/power_237b/600/600",
      "https://picsum.photos/seed/power_237c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 168,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 9 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p238",
    "name": "Papel Familia X12",
    "price": 27000,
    "image": "https://picsum.photos/seed/power_238/300/300",
    "images": [
      "https://picsum.photos/seed/power_238/600/600",
      "https://picsum.photos/seed/power_238b/600/600",
      "https://picsum.photos/seed/power_238c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 205,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Papel Familia X12 con calidad garantizada de FAMILIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p239",
    "name": "Guantes Calibre 35 Talla 10",
    "price": 5700,
    "image": "https://picsum.photos/seed/power_239/300/300",
    "images": [
      "https://picsum.photos/seed/power_239/600/600",
      "https://picsum.photos/seed/power_239b/600/600",
      "https://picsum.photos/seed/power_239c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 242,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 10 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p240",
    "name": "Guantes Domesticos Talla 7 1/2",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_240/300/300",
    "images": [
      "https://picsum.photos/seed/power_240/600/600",
      "https://picsum.photos/seed/power_240b/600/600",
      "https://picsum.photos/seed/power_240c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 279,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 7 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p241",
    "name": "Guantes Domesticos Talla 8",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/power_241/300/300",
    "images": [
      "https://picsum.photos/seed/power_241/600/600",
      "https://picsum.photos/seed/power_241b/600/600",
      "https://picsum.photos/seed/power_241c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 316,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 8 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p242",
    "name": "Guantes Domesticos Talla 8 1/2",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_242/300/300",
    "images": [
      "https://picsum.photos/seed/power_242/600/600",
      "https://picsum.photos/seed/power_242b/600/600",
      "https://picsum.photos/seed/power_242c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 353,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 8 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p243",
    "name": "Guantes Domesticos Talla 9",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_243/300/300",
    "images": [
      "https://picsum.photos/seed/power_243/600/600",
      "https://picsum.photos/seed/power_243b/600/600",
      "https://picsum.photos/seed/power_243c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.2,
    "sold": 390,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 9 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p244",
    "name": "Guantes Domesticos Talla 9 1/2",
    "price": 4000,
    "image": "https://picsum.photos/seed/power_244/300/300",
    "images": [
      "https://picsum.photos/seed/power_244/600/600",
      "https://picsum.photos/seed/power_244b/600/600",
      "https://picsum.photos/seed/power_244c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 427,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 9 1/2 con calidad garantizada de MILENIO. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p245",
    "name": "Pastilla Oxigeno",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/power_245/300/300",
    "images": [
      "https://picsum.photos/seed/power_245/600/600",
      "https://picsum.photos/seed/power_245b/600/600",
      "https://picsum.photos/seed/power_245c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 464,
    "sizes": [
      "Unidad"
    ],
    "description": "Pastilla Oxigeno con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p246",
    "name": "Pañitos Pequeñin",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_246/300/300",
    "images": [
      "https://picsum.photos/seed/power_246/600/600",
      "https://picsum.photos/seed/power_246b/600/600",
      "https://picsum.photos/seed/power_246c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 51,
    "sizes": [
      "Unidad"
    ],
    "description": "Pañitos Pequeñin con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p247",
    "name": "Palo Recogedor",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_247/300/300",
    "images": [
      "https://picsum.photos/seed/power_247/600/600",
      "https://picsum.photos/seed/power_247b/600/600",
      "https://picsum.photos/seed/power_247c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 88,
    "sizes": [
      "Unidad"
    ],
    "description": "Palo Recogedor con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p248",
    "name": "Pastilla Cloro X 6",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_248/300/300",
    "images": [
      "https://picsum.photos/seed/power_248/600/600",
      "https://picsum.photos/seed/power_248b/600/600",
      "https://picsum.photos/seed/power_248c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.7,
    "sold": 125,
    "sizes": [
      "Unidad"
    ],
    "description": "Pastilla Cloro X 6 con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p249",
    "name": "Esponja Doble Uso X 24 Und",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/power_249/300/300",
    "images": [
      "https://picsum.photos/seed/power_249/600/600",
      "https://picsum.photos/seed/power_249b/600/600",
      "https://picsum.photos/seed/power_249c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 162,
    "sizes": [
      "Unidad"
    ],
    "description": "Esponja Doble Uso X 24 Und con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p250",
    "name": "Crema Dental Colgate Triple Axion 75 Ml",
    "price": 5000,
    "image": "https://picsum.photos/seed/power_250/300/300",
    "images": [
      "https://picsum.photos/seed/power_250/600/600",
      "https://picsum.photos/seed/power_250b/600/600",
      "https://picsum.photos/seed/power_250c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 199,
    "sizes": [
      "75 ML"
    ],
    "description": "Crema Dental Colgate Triple Axion 75 Ml con calidad garantizada de COLGATE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p251",
    "name": "Papel Elite X 4 Rollos",
    "price": 54000,
    "image": "https://picsum.photos/seed/power_251/300/300",
    "images": [
      "https://picsum.photos/seed/power_251/600/600",
      "https://picsum.photos/seed/power_251b/600/600",
      "https://picsum.photos/seed/power_251c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.2,
    "sold": 236,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 54000
    },
    "description": "Papel Elite X 4 Rollos con calidad garantizada de ELITE. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p252",
    "name": "Papel Familia Und",
    "price": 3000,
    "image": "https://picsum.photos/seed/power_252/300/300",
    "images": [
      "https://picsum.photos/seed/power_252/600/600",
      "https://picsum.photos/seed/power_252b/600/600",
      "https://picsum.photos/seed/power_252c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 273,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3000
    },
    "description": "Papel Familia Und con calidad garantizada de FAMILIA. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p253",
    "name": "Jabon Manos Protex Und",
    "price": 4300,
    "originalPrice": 5375,
    "image": "https://picsum.photos/seed/power_253/300/300",
    "images": [
      "https://picsum.photos/seed/power_253/600/600",
      "https://picsum.photos/seed/power_253b/600/600",
      "https://picsum.photos/seed/power_253c/600/600"
    ],
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 310,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4300
    },
    "description": "Jabon Manos Protex Und con calidad garantizada de PROTEX. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p254",
    "name": "Jabon Manos Protex X 6",
    "price": 23500,
    "image": "https://picsum.photos/seed/power_254/300/300",
    "images": [
      "https://picsum.photos/seed/power_254/600/600",
      "https://picsum.photos/seed/power_254b/600/600",
      "https://picsum.photos/seed/power_254c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 347,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 23500
    },
    "description": "Jabon Manos Protex X 6 con calidad garantizada de PROTEX. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p255",
    "name": "Esponja Brillo",
    "price": 6500,
    "image": "https://picsum.photos/seed/power_255/300/300",
    "images": [
      "https://picsum.photos/seed/power_255/600/600",
      "https://picsum.photos/seed/power_255b/600/600",
      "https://picsum.photos/seed/power_255c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 384,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Esponja Brillo con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  },
  {
    "id": "p256",
    "name": "Bolsa Hermetica 14 X 12 Millar",
    "price": 59000,
    "image": "https://picsum.photos/seed/power_256/300/300",
    "images": [
      "https://picsum.photos/seed/power_256/600/600",
      "https://picsum.photos/seed/power_256b/600/600",
      "https://picsum.photos/seed/power_256c/600/600"
    ],
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 421,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 59000
    },
    "description": "Bolsa Hermetica 14 X 12 Millar con calidad garantizada de N/D. Ideal para uso institucional y del hogar."
  }
];

// ────────────────────────────────────────────────────────────
// BANNERS PROMOCIONALES
// ────────────────────────────────────────────────────────────
export const promotionalBanners: PromotionalBanner[] = [
  {
    id: 'b1',
    title: 'Desengrasantes Industriales',
    subtitle: 'Máximo poder desengrasante con Power Andina',
    bgColor: 'bg-power-blue',
    image: 'https://picsum.photos/seed/banner1/800/450',
    targetCategoryId: 'c_cocina',
    badgeText: 'Oferta Relámpago ⚡',
  },
  {
    id: 'b2',
    title: 'Línea de Suavizantes Fantasia',
    subtitle: 'Fragancias premium que perduran por más tiempo',
    bgColor: 'bg-power-lightGreen',
    image: 'https://picsum.photos/seed/banner2/800/450',
    targetCategoryId: 'c_lavanderia',
    badgeText: 'Exclusivo App',
  },
  {
    id: 'b3',
    title: 'Cuidado Automotriz',
    subtitle: 'Siliconas líquidas y ambientadores de larga duración',
    bgColor: 'bg-power-yellow',
    image: 'https://picsum.photos/seed/banner3/800/450',
    targetCategoryId: 'c_automovil',
    badgeText: 'Línea Vehicular 🚗',
  },
];

// ────────────────────────────────────────────────────────────
// NUESTRAS MARCAS
// ────────────────────────────────────────────────────────────
export const mockBrands: Brand[] = [
  { 
    id: 'br1', 
    name: 'Fantasia', 
    logo_url: require('../../../../assets/images/brands/logos/logo-fantasia.png'),
    banner_url: require('../../../../assets/images/brands/banners/banner-fantasia.jpg')
  },
  { 
    id: 'br2', 
    name: 'Good Morning', 
    logo_url: require('../../../../assets/images/brands/logos/logo-good-morning.png'),
    banner_url: require('../../../../assets/images/brands/banners/banner-good-morning.jpg')
  },
  { 
    id: 'br3', 
    name: 'Winnd', 
    logo_url: require('../../../../assets/images/brands/logos/logo-winnd.png'),
    banner_url: require('../../../../assets/images/brands/banners/banner-winnd.jpg')
  },
  { 
    id: 'br4', 
    name: 'Wind', 
    logo_url: require('../../../../assets/images/brands/logos/logo-wind.png'),
    banner_url: require('../../../../assets/images/brands/banners/banner-wind.jpg')
  },
  { 
    id: 'br5', 
    name: "Q' Blanqueador", 
    logo_url: require('../../../../assets/images/brands/logos/logo-q-blanqueador.png'),
    banner_url: require('../../../../assets/images/brands/banners/banner-q-blanqueador.jpg')
  },
];

// ────────────────────────────────────────────────────────────
// HELPERS
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
  
  const allProducts = [...featuredProducts, ...catalogProducts];
  return allProducts.filter((p) => p.category.toLowerCase() === category.name.toLowerCase());
};

export const getProductsByBrand = (brandId: string): Product[] => {
  const allProducts = [...featuredProducts, ...catalogProducts];
  return allProducts.filter((p) => p.brandId === brandId);
};

export const getBrandById = (brandId: string): Brand | undefined => {
  return mockBrands.find((b) => b.id === brandId);
};

export const getExploreProducts = (): Product[] => {
  return catalogProducts.slice(0, 10);
};

export const getBrands = (): Brand[] => {
  return mockBrands;
};
