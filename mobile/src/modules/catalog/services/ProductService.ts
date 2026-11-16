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
  imagesByVariant?: Record<string, string>;
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
    "name": "Jabon Blúrey FANTASIA",
    "price": 5500,
    "originalPrice": 6600,
    "image": "https://picsum.photos/seed/prod_1_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_1_1/600/600",
      "https://picsum.photos/seed/prod_1_2/600/600"
    ],
    "imagesByVariant": {
      "3 LT": "https://picsum.photos/seed/prod_1_std_3LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_1_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_1_std_1LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_1_std_4LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_1_std_2LT/600/600"
    },
    "category": "Hogar",
    "badge": "Destacado",
    "rating": 4.3,
    "sold": 60,
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
    "description": "Jabon Blúrey FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "f2",
    "name": "Detergente En Polvo Multiusos GOOD MORNING",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://picsum.photos/seed/prod_2_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_2_1/600/600",
      "https://picsum.photos/seed/prod_2_2/600/600"
    ],
    "imagesByVariant": {
      "500 GR": "https://picsum.photos/seed/prod_2_std_500GR/600/600",
      "20 KG": "https://picsum.photos/seed/prod_2_std_20KG/600/600",
      "2 KG": "https://picsum.photos/seed/prod_2_std_2KG/600/600",
      "1 KG": "https://picsum.photos/seed/prod_2_std_1KG/600/600",
      "7.5 KG": "https://picsum.photos/seed/prod_2_std_7.5KG/600/600"
    },
    "category": "Lavandería",
    "badge": "Destacado",
    "rating": 4.4,
    "sold": 101,
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
    "description": "Detergente En Polvo Multiusos GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "f3",
    "name": "Ambientador De Espacios FANTASIA",
    "price": 4000,
    "originalPrice": 4800,
    "image": "https://picsum.photos/seed/prod_3_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_3_1/600/600",
      "https://picsum.photos/seed/prod_3_2/600/600"
    ],
    "imagesByVariant": {
      "New Car__20 LT": "https://picsum.photos/seed/prod_3_newcar_20LT/600/600",
      "New Car": "https://picsum.photos/seed/prod_3_newcar/600/600",
      "20 LT": "https://picsum.photos/seed/prod_3_20LT/600/600",
      "New Gam__250 ML": "https://picsum.photos/seed/prod_3_newgam_250ML/600/600",
      "New Gam": "https://picsum.photos/seed/prod_3_newgam/600/600",
      "250 ML": "https://picsum.photos/seed/prod_3_250ML/600/600",
      "New Gam__20 LT": "https://picsum.photos/seed/prod_3_newgam_20LT/600/600",
      "Yellow Fruits__120 ML": "https://picsum.photos/seed/prod_3_yellowfruits_120ML/600/600",
      "Yellow Fruits": "https://picsum.photos/seed/prod_3_yellowfruits/600/600",
      "120 ML": "https://picsum.photos/seed/prod_3_120ML/600/600",
      "Yellow Fruits__250 ML": "https://picsum.photos/seed/prod_3_yellowfruits_250ML/600/600",
      "Yellow Fruits__20 LT": "https://picsum.photos/seed/prod_3_yellowfruits_20LT/600/600",
      "New Car__250 ML": "https://picsum.photos/seed/prod_3_newcar_250ML/600/600",
      "Green Ecology__120 ML": "https://picsum.photos/seed/prod_3_greenecology_120ML/600/600",
      "Green Ecology": "https://picsum.photos/seed/prod_3_greenecology/600/600",
      "Spa Blu__20 LT": "https://picsum.photos/seed/prod_3_spablu_20LT/600/600",
      "Spa Blu": "https://picsum.photos/seed/prod_3_spablu/600/600",
      "Green Ecology__250 ML": "https://picsum.photos/seed/prod_3_greenecology_250ML/600/600",
      "Very Very__20 LT": "https://picsum.photos/seed/prod_3_veryvery_20LT/600/600",
      "Very Very": "https://picsum.photos/seed/prod_3_veryvery/600/600",
      "Green Ecology__3.75 LT": "https://picsum.photos/seed/prod_3_greenecology_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_3_3.75LT/600/600",
      "Yellow Fruits__3.75 LT": "https://picsum.photos/seed/prod_3_yellowfruits_3.75LT/600/600",
      "New Gam__3.75 LT": "https://picsum.photos/seed/prod_3_newgam_3.75LT/600/600",
      "New Car__3.75 LT": "https://picsum.photos/seed/prod_3_newcar_3.75LT/600/600",
      "New Gam__120 ML": "https://picsum.photos/seed/prod_3_newgam_120ML/600/600",
      "Lavanda & Orquideas__250 ML": "https://picsum.photos/seed/prod_3_lavanda&orquideas_250ML/600/600",
      "Lavanda & Orquideas": "https://picsum.photos/seed/prod_3_lavanda&orquideas/600/600",
      "New Baby__250 ML": "https://picsum.photos/seed/prod_3_newbaby_250ML/600/600",
      "New Baby": "https://picsum.photos/seed/prod_3_newbaby/600/600",
      "New Fresh__250 ML": "https://picsum.photos/seed/prod_3_newfresh_250ML/600/600",
      "New Fresh": "https://picsum.photos/seed/prod_3_newfresh/600/600",
      "Spa Blu__250 ML": "https://picsum.photos/seed/prod_3_spablu_250ML/600/600",
      "Lavanda & Orquideas__120 ML": "https://picsum.photos/seed/prod_3_lavanda&orquideas_120ML/600/600",
      "New Baby__120 ML": "https://picsum.photos/seed/prod_3_newbaby_120ML/600/600",
      "Lavanda & Orquideas__3.75 LT": "https://picsum.photos/seed/prod_3_lavanda&orquideas_3.75LT/600/600",
      "New Baby__3.75 LT": "https://picsum.photos/seed/prod_3_newbaby_3.75LT/600/600",
      "New Car__120 ML": "https://picsum.photos/seed/prod_3_newcar_120ML/600/600",
      "Lavanda & Orquideas__20 LT": "https://picsum.photos/seed/prod_3_lavanda&orquideas_20LT/600/600",
      "Spa Blu__3.75 LT": "https://picsum.photos/seed/prod_3_spablu_3.75LT/600/600",
      "Very Very__120 ML": "https://picsum.photos/seed/prod_3_veryvery_120ML/600/600",
      "New Baby__20 LT": "https://picsum.photos/seed/prod_3_newbaby_20LT/600/600",
      "New Fresh__20 LT": "https://picsum.photos/seed/prod_3_newfresh_20LT/600/600",
      "Very Very__3.75 LT": "https://picsum.photos/seed/prod_3_veryvery_3.75LT/600/600",
      "New Fresh__120 ML": "https://picsum.photos/seed/prod_3_newfresh_120ML/600/600",
      "Spa Blu__120 ML": "https://picsum.photos/seed/prod_3_spablu_120ML/600/600",
      "New Fresh__3.75 LT": "https://picsum.photos/seed/prod_3_newfresh_3.75LT/600/600",
      "Very Very__250 ML": "https://picsum.photos/seed/prod_3_veryvery_250ML/600/600",
      "Green Ecology__20 LT": "https://picsum.photos/seed/prod_3_greenecology_20LT/600/600"
    },
    "category": "Automóvil",
    "badge": "Destacado",
    "rating": 4.5,
    "sold": 142,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "250 ML",
      "120 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 16000,
      "250 ML": 6500,
      "120 ML": 6500,
      "3.75 LT": 17500
    },
    "aromas": [
      "New Car",
      "New Gam",
      "Yellow Fruits",
      "Green Ecology",
      "Spa Blu",
      "Very Very",
      "Lavanda & Orquideas",
      "New Baby",
      "New Fresh"
    ],
    "description": "Ambientador De Espacios FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "f4",
    "name": "Jabon Ph Balanceado WIND",
    "price": 1800,
    "originalPrice": 2160,
    "image": "https://picsum.photos/seed/prod_4_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_4_1/600/600",
      "https://picsum.photos/seed/prod_4_2/600/600"
    ],
    "imagesByVariant": {
      "Nectar Natural__2 LT": "https://picsum.photos/seed/prod_4_nectarnatural_2LT/600/600",
      "Nectar Natural": "https://picsum.photos/seed/prod_4_nectarnatural/600/600",
      "2 LT": "https://picsum.photos/seed/prod_4_2LT/600/600",
      "Avena & Miel__2 LT": "https://picsum.photos/seed/prod_4_avena&miel_2LT/600/600",
      "Avena & Miel": "https://picsum.photos/seed/prod_4_avena&miel/600/600",
      "Neutro__2 LT": "https://picsum.photos/seed/prod_4_neutro_2LT/600/600",
      "Neutro": "https://picsum.photos/seed/prod_4_neutro/600/600",
      "Nectar Natural__20 LT": "https://picsum.photos/seed/prod_4_nectarnatural_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_4_20LT/600/600",
      "Avena & Miel__20 LT": "https://picsum.photos/seed/prod_4_avena&miel_20LT/600/600",
      "Neutro__20 LT": "https://picsum.photos/seed/prod_4_neutro_20LT/600/600",
      "Nectar Natural__3.75 LT": "https://picsum.photos/seed/prod_4_nectarnatural_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_4_3.75LT/600/600",
      "Avena & Miel__3.75 LT": "https://picsum.photos/seed/prod_4_avena&miel_3.75LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_4_neutro_3.75LT/600/600",
      "Explosión Frutal__3.75 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_3.75LT/600/600",
      "Explosión Frutal": "https://picsum.photos/seed/prod_4_explosiónfrutal/600/600",
      "Explosión Frutal__20 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_20LT/600/600",
      "Explosión Frutal__500 ML": "https://picsum.photos/seed/prod_4_explosiónfrutal_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_4_500ML/600/600",
      "Explosión Frutal__1 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_4_1LT/600/600",
      "Delicia Primaveral__2 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_2LT/600/600",
      "Delicia Primaveral": "https://picsum.photos/seed/prod_4_deliciaprimaveral/600/600",
      "Explosión Frutal__2 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_2LT/600/600",
      "Citrus__2 LT": "https://picsum.photos/seed/prod_4_citrus_2LT/600/600",
      "Citrus": "https://picsum.photos/seed/prod_4_citrus/600/600",
      "Citrus__3.75 LT": "https://picsum.photos/seed/prod_4_citrus_3.75LT/600/600",
      "Delicia Primaveral__3.75 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_3.75LT/600/600",
      "Citrus__1 LT": "https://picsum.photos/seed/prod_4_citrus_1LT/600/600",
      "Delicia Primaveral__1 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_1LT/600/600",
      "Citrus__20 LT": "https://picsum.photos/seed/prod_4_citrus_20LT/600/600",
      "Delicia Primaveral__20 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_20LT/600/600",
      "Citrus__500 ML": "https://picsum.photos/seed/prod_4_citrus_500ML/600/600",
      "Delicia Primaveral__500 ML": "https://picsum.photos/seed/prod_4_deliciaprimaveral_500ML/600/600",
      "300 ML": "https://picsum.photos/seed/prod_4_std_300ML/600/600",
      "Nectar Natural__500 ML": "https://picsum.photos/seed/prod_4_nectarnatural_500ML/600/600",
      "Avena & Miel__500 ML": "https://picsum.photos/seed/prod_4_avena&miel_500ML/600/600",
      "Neutro__500 ML": "https://picsum.photos/seed/prod_4_neutro_500ML/600/600",
      "Nectar Natural__1 LT": "https://picsum.photos/seed/prod_4_nectarnatural_1LT/600/600",
      "Avena & Miel__1 LT": "https://picsum.photos/seed/prod_4_avena&miel_1LT/600/600",
      "Neutro__1 LT": "https://picsum.photos/seed/prod_4_neutro_1LT/600/600",
      "Avena & Miel__300 ML": "https://picsum.photos/seed/prod_4_avena&miel_300ML/600/600",
      "Delicia Primaveral__300 ML": "https://picsum.photos/seed/prod_4_deliciaprimaveral_300ML/600/600",
      "Citrus__300 ML": "https://picsum.photos/seed/prod_4_citrus_300ML/600/600",
      "Explosión Frutal__300 ML": "https://picsum.photos/seed/prod_4_explosiónfrutal_300ML/600/600",
      "Nectar Natural__300 ML": "https://picsum.photos/seed/prod_4_nectarnatural_300ML/600/600"
    },
    "category": "Cuidado Personal",
    "badge": "Destacado",
    "rating": 4.6,
    "sold": 183,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3.75 LT",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "2 LT": 9200,
      "20 LT": 42500,
      "3.75 LT": 12500,
      "500 ML": 3200,
      "1 LT": 3900,
      "300 ML": 1800
    },
    "aromas": [
      "Nectar Natural",
      "Avena & Miel",
      "Neutro",
      "Explosión Frutal",
      "Delicia Primaveral",
      "Citrus"
    ],
    "description": "Jabon Ph Balanceado WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "f5",
    "name": "Alcohol Glicerinado 70% WIND",
    "price": 2900,
    "originalPrice": 3480,
    "image": "https://picsum.photos/seed/prod_5_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_5_1/600/600",
      "https://picsum.photos/seed/prod_5_2/600/600"
    ],
    "imagesByVariant": {
      "250 ML": "https://picsum.photos/seed/prod_5_std_250ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_5_std_500ML/600/600",
      "1 LT": "https://picsum.photos/seed/prod_5_std_1LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_5_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_5_std_20LT/600/600"
    },
    "category": "Cuidado Personal",
    "badge": "Destacado",
    "rating": 4.7,
    "sold": 111,
    "brandId": "br4",
    "sizes": [
      "250 ML",
      "500 ML",
      "1 LT",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "250 ML": 2900,
      "500 ML": 4500,
      "1 LT": 7200,
      "3.75 LT": 22000,
      "20 LT": 102200
    },
    "description": "Alcohol Glicerinado 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "f6",
    "name": "Alcohol Industrial 70 % WIND",
    "price": 3300,
    "originalPrice": 3960,
    "image": "https://picsum.photos/seed/prod_6_std/400/300",
    "images": [
      "https://picsum.photos/seed/prod_6_1/600/600",
      "https://picsum.photos/seed/prod_6_2/600/600"
    ],
    "imagesByVariant": {
      "250 ML": "https://picsum.photos/seed/prod_6_std_250ML/600/600"
    },
    "category": "Desinfección",
    "badge": "Destacado",
    "rating": 4.8,
    "sold": 152,
    "brandId": "br4",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 3300
    },
    "description": "Alcohol Industrial 70 % WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  }
];

// ────────────────────────────────────────────────────────────
// CATÁLOGO GENERAL
// ────────────────────────────────────────────────────────────
export const catalogProducts: Product[] = [
  {
    "id": "p1",
    "name": "Jabon Blúrey FANTASIA",
    "price": 5500,
    "originalPrice": 6875,
    "image": "https://picsum.photos/seed/prod_1_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_1_1/600/600",
      "https://picsum.photos/seed/prod_1_2/600/600",
      "https://picsum.photos/seed/prod_1_3/600/600"
    ],
    "imagesByVariant": {
      "3 LT": "https://picsum.photos/seed/prod_1_std_3LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_1_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_1_std_1LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_1_std_4LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_1_std_2LT/600/600"
    },
    "category": "Hogar",
    "badge": "Oferta",
    "rating": 4.3,
    "sold": 60,
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
    "description": "Jabon Blúrey FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p2",
    "name": "Detergente En Polvo Multiusos GOOD MORNING",
    "price": 1800,
    "image": "https://picsum.photos/seed/prod_2_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_2_1/600/600",
      "https://picsum.photos/seed/prod_2_2/600/600",
      "https://picsum.photos/seed/prod_2_3/600/600"
    ],
    "imagesByVariant": {
      "500 GR": "https://picsum.photos/seed/prod_2_std_500GR/600/600",
      "20 KG": "https://picsum.photos/seed/prod_2_std_20KG/600/600",
      "2 KG": "https://picsum.photos/seed/prod_2_std_2KG/600/600",
      "1 KG": "https://picsum.photos/seed/prod_2_std_1KG/600/600",
      "7.5 KG": "https://picsum.photos/seed/prod_2_std_7.5KG/600/600"
    },
    "category": "Lavandería",
    "rating": 4.4,
    "sold": 101,
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
    "description": "Detergente En Polvo Multiusos GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p3",
    "name": "Ambientador De Espacios FANTASIA",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_3_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_3_1/600/600",
      "https://picsum.photos/seed/prod_3_2/600/600",
      "https://picsum.photos/seed/prod_3_3/600/600"
    ],
    "imagesByVariant": {
      "New Car__20 LT": "https://picsum.photos/seed/prod_3_newcar_20LT/600/600",
      "New Car": "https://picsum.photos/seed/prod_3_newcar/600/600",
      "20 LT": "https://picsum.photos/seed/prod_3_20LT/600/600",
      "New Gam__250 ML": "https://picsum.photos/seed/prod_3_newgam_250ML/600/600",
      "New Gam": "https://picsum.photos/seed/prod_3_newgam/600/600",
      "250 ML": "https://picsum.photos/seed/prod_3_250ML/600/600",
      "New Gam__20 LT": "https://picsum.photos/seed/prod_3_newgam_20LT/600/600",
      "Yellow Fruits__120 ML": "https://picsum.photos/seed/prod_3_yellowfruits_120ML/600/600",
      "Yellow Fruits": "https://picsum.photos/seed/prod_3_yellowfruits/600/600",
      "120 ML": "https://picsum.photos/seed/prod_3_120ML/600/600",
      "Yellow Fruits__250 ML": "https://picsum.photos/seed/prod_3_yellowfruits_250ML/600/600",
      "Yellow Fruits__20 LT": "https://picsum.photos/seed/prod_3_yellowfruits_20LT/600/600",
      "New Car__250 ML": "https://picsum.photos/seed/prod_3_newcar_250ML/600/600",
      "Green Ecology__120 ML": "https://picsum.photos/seed/prod_3_greenecology_120ML/600/600",
      "Green Ecology": "https://picsum.photos/seed/prod_3_greenecology/600/600",
      "Spa Blu__20 LT": "https://picsum.photos/seed/prod_3_spablu_20LT/600/600",
      "Spa Blu": "https://picsum.photos/seed/prod_3_spablu/600/600",
      "Green Ecology__250 ML": "https://picsum.photos/seed/prod_3_greenecology_250ML/600/600",
      "Very Very__20 LT": "https://picsum.photos/seed/prod_3_veryvery_20LT/600/600",
      "Very Very": "https://picsum.photos/seed/prod_3_veryvery/600/600",
      "Green Ecology__3.75 LT": "https://picsum.photos/seed/prod_3_greenecology_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_3_3.75LT/600/600",
      "Yellow Fruits__3.75 LT": "https://picsum.photos/seed/prod_3_yellowfruits_3.75LT/600/600",
      "New Gam__3.75 LT": "https://picsum.photos/seed/prod_3_newgam_3.75LT/600/600",
      "New Car__3.75 LT": "https://picsum.photos/seed/prod_3_newcar_3.75LT/600/600",
      "New Gam__120 ML": "https://picsum.photos/seed/prod_3_newgam_120ML/600/600",
      "Lavanda & Orquideas__250 ML": "https://picsum.photos/seed/prod_3_lavanda&orquideas_250ML/600/600",
      "Lavanda & Orquideas": "https://picsum.photos/seed/prod_3_lavanda&orquideas/600/600",
      "New Baby__250 ML": "https://picsum.photos/seed/prod_3_newbaby_250ML/600/600",
      "New Baby": "https://picsum.photos/seed/prod_3_newbaby/600/600",
      "New Fresh__250 ML": "https://picsum.photos/seed/prod_3_newfresh_250ML/600/600",
      "New Fresh": "https://picsum.photos/seed/prod_3_newfresh/600/600",
      "Spa Blu__250 ML": "https://picsum.photos/seed/prod_3_spablu_250ML/600/600",
      "Lavanda & Orquideas__120 ML": "https://picsum.photos/seed/prod_3_lavanda&orquideas_120ML/600/600",
      "New Baby__120 ML": "https://picsum.photos/seed/prod_3_newbaby_120ML/600/600",
      "Lavanda & Orquideas__3.75 LT": "https://picsum.photos/seed/prod_3_lavanda&orquideas_3.75LT/600/600",
      "New Baby__3.75 LT": "https://picsum.photos/seed/prod_3_newbaby_3.75LT/600/600",
      "New Car__120 ML": "https://picsum.photos/seed/prod_3_newcar_120ML/600/600",
      "Lavanda & Orquideas__20 LT": "https://picsum.photos/seed/prod_3_lavanda&orquideas_20LT/600/600",
      "Spa Blu__3.75 LT": "https://picsum.photos/seed/prod_3_spablu_3.75LT/600/600",
      "Very Very__120 ML": "https://picsum.photos/seed/prod_3_veryvery_120ML/600/600",
      "New Baby__20 LT": "https://picsum.photos/seed/prod_3_newbaby_20LT/600/600",
      "New Fresh__20 LT": "https://picsum.photos/seed/prod_3_newfresh_20LT/600/600",
      "Very Very__3.75 LT": "https://picsum.photos/seed/prod_3_veryvery_3.75LT/600/600",
      "New Fresh__120 ML": "https://picsum.photos/seed/prod_3_newfresh_120ML/600/600",
      "Spa Blu__120 ML": "https://picsum.photos/seed/prod_3_spablu_120ML/600/600",
      "New Fresh__3.75 LT": "https://picsum.photos/seed/prod_3_newfresh_3.75LT/600/600",
      "Very Very__250 ML": "https://picsum.photos/seed/prod_3_veryvery_250ML/600/600",
      "Green Ecology__20 LT": "https://picsum.photos/seed/prod_3_greenecology_20LT/600/600"
    },
    "category": "Automóvil",
    "rating": 4.5,
    "sold": 142,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "250 ML",
      "120 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 16000,
      "250 ML": 6500,
      "120 ML": 6500,
      "3.75 LT": 17500
    },
    "aromas": [
      "New Car",
      "New Gam",
      "Yellow Fruits",
      "Green Ecology",
      "Spa Blu",
      "Very Very",
      "Lavanda & Orquideas",
      "New Baby",
      "New Fresh"
    ],
    "description": "Ambientador De Espacios FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p4",
    "name": "Jabon Ph Balanceado WIND",
    "price": 1800,
    "image": "https://picsum.photos/seed/prod_4_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_4_1/600/600",
      "https://picsum.photos/seed/prod_4_2/600/600",
      "https://picsum.photos/seed/prod_4_3/600/600"
    ],
    "imagesByVariant": {
      "Nectar Natural__2 LT": "https://picsum.photos/seed/prod_4_nectarnatural_2LT/600/600",
      "Nectar Natural": "https://picsum.photos/seed/prod_4_nectarnatural/600/600",
      "2 LT": "https://picsum.photos/seed/prod_4_2LT/600/600",
      "Avena & Miel__2 LT": "https://picsum.photos/seed/prod_4_avena&miel_2LT/600/600",
      "Avena & Miel": "https://picsum.photos/seed/prod_4_avena&miel/600/600",
      "Neutro__2 LT": "https://picsum.photos/seed/prod_4_neutro_2LT/600/600",
      "Neutro": "https://picsum.photos/seed/prod_4_neutro/600/600",
      "Nectar Natural__20 LT": "https://picsum.photos/seed/prod_4_nectarnatural_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_4_20LT/600/600",
      "Avena & Miel__20 LT": "https://picsum.photos/seed/prod_4_avena&miel_20LT/600/600",
      "Neutro__20 LT": "https://picsum.photos/seed/prod_4_neutro_20LT/600/600",
      "Nectar Natural__3.75 LT": "https://picsum.photos/seed/prod_4_nectarnatural_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_4_3.75LT/600/600",
      "Avena & Miel__3.75 LT": "https://picsum.photos/seed/prod_4_avena&miel_3.75LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_4_neutro_3.75LT/600/600",
      "Explosión Frutal__3.75 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_3.75LT/600/600",
      "Explosión Frutal": "https://picsum.photos/seed/prod_4_explosiónfrutal/600/600",
      "Explosión Frutal__20 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_20LT/600/600",
      "Explosión Frutal__500 ML": "https://picsum.photos/seed/prod_4_explosiónfrutal_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_4_500ML/600/600",
      "Explosión Frutal__1 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_4_1LT/600/600",
      "Delicia Primaveral__2 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_2LT/600/600",
      "Delicia Primaveral": "https://picsum.photos/seed/prod_4_deliciaprimaveral/600/600",
      "Explosión Frutal__2 LT": "https://picsum.photos/seed/prod_4_explosiónfrutal_2LT/600/600",
      "Citrus__2 LT": "https://picsum.photos/seed/prod_4_citrus_2LT/600/600",
      "Citrus": "https://picsum.photos/seed/prod_4_citrus/600/600",
      "Citrus__3.75 LT": "https://picsum.photos/seed/prod_4_citrus_3.75LT/600/600",
      "Delicia Primaveral__3.75 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_3.75LT/600/600",
      "Citrus__1 LT": "https://picsum.photos/seed/prod_4_citrus_1LT/600/600",
      "Delicia Primaveral__1 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_1LT/600/600",
      "Citrus__20 LT": "https://picsum.photos/seed/prod_4_citrus_20LT/600/600",
      "Delicia Primaveral__20 LT": "https://picsum.photos/seed/prod_4_deliciaprimaveral_20LT/600/600",
      "Citrus__500 ML": "https://picsum.photos/seed/prod_4_citrus_500ML/600/600",
      "Delicia Primaveral__500 ML": "https://picsum.photos/seed/prod_4_deliciaprimaveral_500ML/600/600",
      "300 ML": "https://picsum.photos/seed/prod_4_std_300ML/600/600",
      "Nectar Natural__500 ML": "https://picsum.photos/seed/prod_4_nectarnatural_500ML/600/600",
      "Avena & Miel__500 ML": "https://picsum.photos/seed/prod_4_avena&miel_500ML/600/600",
      "Neutro__500 ML": "https://picsum.photos/seed/prod_4_neutro_500ML/600/600",
      "Nectar Natural__1 LT": "https://picsum.photos/seed/prod_4_nectarnatural_1LT/600/600",
      "Avena & Miel__1 LT": "https://picsum.photos/seed/prod_4_avena&miel_1LT/600/600",
      "Neutro__1 LT": "https://picsum.photos/seed/prod_4_neutro_1LT/600/600",
      "Avena & Miel__300 ML": "https://picsum.photos/seed/prod_4_avena&miel_300ML/600/600",
      "Delicia Primaveral__300 ML": "https://picsum.photos/seed/prod_4_deliciaprimaveral_300ML/600/600",
      "Citrus__300 ML": "https://picsum.photos/seed/prod_4_citrus_300ML/600/600",
      "Explosión Frutal__300 ML": "https://picsum.photos/seed/prod_4_explosiónfrutal_300ML/600/600",
      "Nectar Natural__300 ML": "https://picsum.photos/seed/prod_4_nectarnatural_300ML/600/600"
    },
    "category": "Cuidado Personal",
    "rating": 4.6,
    "sold": 183,
    "brandId": "br4",
    "sizes": [
      "2 LT",
      "20 LT",
      "3.75 LT",
      "500 ML",
      "1 LT",
      "300 ML"
    ],
    "priceBySize": {
      "2 LT": 9200,
      "20 LT": 42500,
      "3.75 LT": 12500,
      "500 ML": 3200,
      "1 LT": 3900,
      "300 ML": 1800
    },
    "aromas": [
      "Nectar Natural",
      "Avena & Miel",
      "Neutro",
      "Explosión Frutal",
      "Delicia Primaveral",
      "Citrus"
    ],
    "description": "Jabon Ph Balanceado WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p5",
    "name": "Alcohol Glicerinado 70% WIND",
    "price": 2900,
    "originalPrice": 3625,
    "image": "https://picsum.photos/seed/prod_5_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_5_1/600/600",
      "https://picsum.photos/seed/prod_5_2/600/600",
      "https://picsum.photos/seed/prod_5_3/600/600"
    ],
    "imagesByVariant": {
      "250 ML": "https://picsum.photos/seed/prod_5_std_250ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_5_std_500ML/600/600",
      "1 LT": "https://picsum.photos/seed/prod_5_std_1LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_5_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_5_std_20LT/600/600"
    },
    "category": "Cuidado Personal",
    "rating": 4.7,
    "sold": 111,
    "brandId": "br4",
    "sizes": [
      "250 ML",
      "500 ML",
      "1 LT",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "250 ML": 2900,
      "500 ML": 4500,
      "1 LT": 7200,
      "3.75 LT": 22000,
      "20 LT": 102200
    },
    "description": "Alcohol Glicerinado 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p6",
    "name": "Alcohol Industrial 70 % WIND",
    "price": 3300,
    "image": "https://picsum.photos/seed/prod_6_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_6_1/600/600",
      "https://picsum.photos/seed/prod_6_2/600/600",
      "https://picsum.photos/seed/prod_6_3/600/600"
    ],
    "imagesByVariant": {
      "250 ML": "https://picsum.photos/seed/prod_6_std_250ML/600/600"
    },
    "category": "Desinfección",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 152,
    "brandId": "br4",
    "sizes": [
      "250 ML"
    ],
    "priceBySize": {
      "250 ML": 3300
    },
    "description": "Alcohol Industrial 70 % WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p7",
    "name": "Alcohol Etilico 70% WIND",
    "price": 2900,
    "image": "https://picsum.photos/seed/prod_7_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_7_1/600/600",
      "https://picsum.photos/seed/prod_7_2/600/600",
      "https://picsum.photos/seed/prod_7_3/600/600"
    ],
    "imagesByVariant": {
      "250 ML": "https://picsum.photos/seed/prod_7_std_250ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_7_std_500ML/600/600",
      "1 LT": "https://picsum.photos/seed/prod_7_std_1LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_7_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_7_std_20LT/600/600"
    },
    "category": "Desinfección",
    "rating": 4.9,
    "sold": 193,
    "brandId": "br4",
    "sizes": [
      "250 ML",
      "500 ML",
      "1 LT",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "250 ML": 102200,
      "500 ML": 4500,
      "1 LT": 22000,
      "3.75 LT": 2900,
      "20 LT": 7200
    },
    "description": "Alcohol Etilico 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p8",
    "name": "Quita Grasa GOOD MORNING",
    "price": 2400,
    "image": "https://picsum.photos/seed/prod_8_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_8_1/600/600",
      "https://picsum.photos/seed/prod_8_2/600/600",
      "https://picsum.photos/seed/prod_8_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_8_std_500ML/600/600",
      "1 LT": "https://picsum.photos/seed/prod_8_std_1LT/600/600"
    },
    "category": "Cocina",
    "rating": 4.3,
    "sold": 234,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "1 LT"
    ],
    "priceBySize": {
      "500 ML": 2400,
      "1 LT": 3600
    },
    "description": "Quita Grasa GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p9",
    "name": "Ambientador De Espacios Red Fruits FANTASIA",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/prod_9_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_9_1/600/600",
      "https://picsum.photos/seed/prod_9_2/600/600",
      "https://picsum.photos/seed/prod_9_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_9_std_20LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_9_std_3.75LT/600/600",
      "120 ML": "https://picsum.photos/seed/prod_9_std_120ML/600/600",
      "250 ML": "https://picsum.photos/seed/prod_9_std_250ML/600/600"
    },
    "category": "Automóvil",
    "rating": 4.9,
    "sold": 80,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "3.75 LT",
      "120 ML",
      "250 ML"
    ],
    "priceBySize": {
      "20 LT": 16000,
      "3.75 LT": 17500,
      "120 ML": 4000,
      "250 ML": 6500
    },
    "description": "Ambientador De Espacios Red Fruits FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p10",
    "name": "Quita Manchas Ropa Color GOOD MORNING",
    "price": 1700,
    "image": "https://picsum.photos/seed/prod_10_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_10_1/600/600",
      "https://picsum.photos/seed/prod_10_2/600/600",
      "https://picsum.photos/seed/prod_10_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_10_std_20LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_10_std_2LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_10_std_4LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_10_std_1LT/600/600",
      "500 ML": "https://picsum.photos/seed/prod_10_std_500ML/600/600"
    },
    "category": "Lavandería",
    "rating": 4.9,
    "sold": 367,
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
    "description": "Quita Manchas Ropa Color GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p11",
    "name": "Desengrasante Industrial GOOD MORNING",
    "price": 1000,
    "image": "https://picsum.photos/seed/prod_11_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_11_1/600/600",
      "https://picsum.photos/seed/prod_11_2/600/600",
      "https://picsum.photos/seed/prod_11_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_11_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_11_std_20LT/600/600"
    },
    "category": "Cocina",
    "rating": 4.3,
    "sold": 408,
    "brandId": "br2",
    "sizes": [
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "3.75 LT": 1000,
      "20 LT": 10500
    },
    "description": "Desengrasante Industrial GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p12",
    "name": "Removedor De Cera FANTASIA",
    "price": 5800,
    "image": "https://picsum.photos/seed/prod_12_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_12_1/600/600",
      "https://picsum.photos/seed/prod_12_2/600/600",
      "https://picsum.photos/seed/prod_12_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_12_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_12_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_12_std_1LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.5,
    "sold": 90,
    "brandId": "br1",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3.75 LT": 13500,
      "20 LT": 49000,
      "1 LT": 5800
    },
    "description": "Removedor De Cera FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p13",
    "name": "Blanqueador Q BLAN Q",
    "price": 1550,
    "originalPrice": 1938,
    "image": "https://picsum.photos/seed/prod_13_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_13_1/600/600",
      "https://picsum.photos/seed/prod_13_2/600/600",
      "https://picsum.photos/seed/prod_13_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_13_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_13_std_20LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_13_std_2LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_13_std_4LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_13_std_1LT/600/600",
      "500 ML": "https://picsum.photos/seed/prod_13_std_500ML/600/600"
    },
    "category": "Lavandería",
    "rating": 4.6,
    "sold": 131,
    "brandId": "br5",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "2 LT",
      "4 LT",
      "1 LT",
      "500 ML"
    ],
    "priceBySize": {
      "3.75 LT": 6300,
      "20 LT": 19500,
      "2 LT": 3000,
      "4 LT": 6300,
      "1 LT": 2400,
      "500 ML": 1550
    },
    "description": "Blanqueador Q BLAN Q con fórmula especializada de BLAN Q. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p14",
    "name": "Hipoclorito De Sodio Q 13% BLAN Q",
    "price": 3600,
    "image": "https://picsum.photos/seed/prod_14_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_14_1/600/600",
      "https://picsum.photos/seed/prod_14_2/600/600",
      "https://picsum.photos/seed/prod_14_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_14_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_14_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_14_std_1LT/600/600"
    },
    "category": "Desinfección",
    "rating": 4.8,
    "sold": 213,
    "brandId": "br5",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "1 LT"
    ],
    "priceBySize": {
      "3.75 LT": 12500,
      "20 LT": 53500,
      "1 LT": 3600
    },
    "description": "Hipoclorito De Sodio Q 13% BLAN Q con fórmula especializada de BLAN Q. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p15",
    "name": "Sellador Polimerico Autobrillante FANTASIA",
    "price": 7350,
    "image": "https://picsum.photos/seed/prod_15_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_15_1/600/600",
      "https://picsum.photos/seed/prod_15_2/600/600",
      "https://picsum.photos/seed/prod_15_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__3.75 LT": "https://picsum.photos/seed/prod_15_blanco_3.75LT/600/600",
      "Blanco": "https://picsum.photos/seed/prod_15_blanco/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_15_3.75LT/600/600",
      "Blanco__20 LT": "https://picsum.photos/seed/prod_15_blanco_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_15_20LT/600/600",
      "Blanco__810 ML": "https://picsum.photos/seed/prod_15_blanco_810ML/600/600",
      "810 ML": "https://picsum.photos/seed/prod_15_810ML/600/600",
      "Blanco__500 ML": "https://picsum.photos/seed/prod_15_blanco_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_15_500ML/600/600",
      "Rojo__810 ML": "https://picsum.photos/seed/prod_15_rojo_810ML/600/600",
      "Rojo": "https://picsum.photos/seed/prod_15_rojo/600/600",
      "Rojo__20 LT": "https://picsum.photos/seed/prod_15_rojo_20LT/600/600",
      "Rojo__3.75 LT": "https://picsum.photos/seed/prod_15_rojo_3.75LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.3,
    "sold": 295,
    "brandId": "br1",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "810 ML",
      "500 ML"
    ],
    "priceBySize": {
      "3.75 LT": 53000,
      "20 LT": 245000,
      "810 ML": 11900,
      "500 ML": 7350
    },
    "aromas": [
      "Blanco",
      "Rojo"
    ],
    "description": "Sellador Polimerico Autobrillante FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p16",
    "name": "Multiusos Blue GOOD MORNING",
    "price": 10500,
    "image": "https://picsum.photos/seed/prod_16_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_16_1/600/600",
      "https://picsum.photos/seed/prod_16_2/600/600",
      "https://picsum.photos/seed/prod_16_3/600/600"
    ],
    "imagesByVariant": {
      "Neutro__20 LT": "https://picsum.photos/seed/prod_16_neutro_20LT/600/600",
      "Neutro": "https://picsum.photos/seed/prod_16_neutro/600/600",
      "20 LT": "https://picsum.photos/seed/prod_16_20LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_16_neutro_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_16_3.75LT/600/600",
      "Lavanda__3.75 LT": "https://picsum.photos/seed/prod_16_lavanda_3.75LT/600/600",
      "Lavanda": "https://picsum.photos/seed/prod_16_lavanda/600/600",
      "Canela__3.75 LT": "https://picsum.photos/seed/prod_16_canela_3.75LT/600/600",
      "Canela": "https://picsum.photos/seed/prod_16_canela/600/600",
      "Lavanda__20 LT": "https://picsum.photos/seed/prod_16_lavanda_20LT/600/600",
      "Canela__20 LT": "https://picsum.photos/seed/prod_16_canela_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.6,
    "sold": 418,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 42500,
      "3.75 LT": 10500
    },
    "aromas": [
      "Neutro",
      "Lavanda",
      "Canela"
    ],
    "description": "Multiusos Blue GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p17",
    "name": "Detergente Maximo Poder FANTASIA",
    "price": 8000,
    "originalPrice": 10000,
    "image": "https://picsum.photos/seed/prod_17_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_17_1/600/600",
      "https://picsum.photos/seed/prod_17_2/600/600",
      "https://picsum.photos/seed/prod_17_3/600/600"
    ],
    "imagesByVariant": {
      "4 LT": "https://picsum.photos/seed/prod_17_std_4LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_17_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_17_std_1LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_17_std_2LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_17_std_5LT/600/600",
      "3 LT": "https://picsum.photos/seed/prod_17_std_3LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.8,
    "sold": 100,
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
    "description": "Detergente Maximo Poder FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p18",
    "name": "Detergente Liq Con Bicarbonato FANTASIA",
    "price": 3300,
    "image": "https://picsum.photos/seed/prod_18_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_18_1/600/600",
      "https://picsum.photos/seed/prod_18_2/600/600",
      "https://picsum.photos/seed/prod_18_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_18_std_20LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_18_std_4LT/600/600",
      "3 LT": "https://picsum.photos/seed/prod_18_std_3LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_18_std_2LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_18_std_5LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_18_std_1LT/600/600",
      "120 ML": "https://picsum.photos/seed/prod_18_std_120ML/600/600"
    },
    "category": "Lavandería",
    "rating": 4.9,
    "sold": 141,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "4 LT",
      "3 LT",
      "2 LT",
      "5 LT",
      "1 LT",
      "120 ML"
    ],
    "priceBySize": {
      "20 LT": 79500,
      "4 LT": 21500,
      "3 LT": 16500,
      "2 LT": 11200,
      "5 LT": 26000,
      "1 LT": 6000,
      "120 ML": 3300
    },
    "description": "Detergente Liq Con Bicarbonato FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p19",
    "name": "Desinfectante GOOD MORNING",
    "price": 1700,
    "image": "https://picsum.photos/seed/prod_19_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_19_1/600/600",
      "https://picsum.photos/seed/prod_19_2/600/600",
      "https://picsum.photos/seed/prod_19_3/600/600"
    ],
    "imagesByVariant": {
      "Lavanda__500 ML": "https://picsum.photos/seed/prod_19_lavanda_500ML/600/600",
      "Lavanda": "https://picsum.photos/seed/prod_19_lavanda/600/600",
      "500 ML": "https://picsum.photos/seed/prod_19_500ML/600/600",
      "Bicarbonato Limón__2 LT": "https://picsum.photos/seed/prod_19_bicarbonatolimón_2LT/600/600",
      "Bicarbonato Limón": "https://picsum.photos/seed/prod_19_bicarbonatolimón/600/600",
      "2 LT": "https://picsum.photos/seed/prod_19_2LT/600/600",
      "Lavanda__1 LT": "https://picsum.photos/seed/prod_19_lavanda_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_19_1LT/600/600",
      "Lavanda__20 LT": "https://picsum.photos/seed/prod_19_lavanda_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_19_20LT/600/600",
      "Bicarbonato Limón__500 ML": "https://picsum.photos/seed/prod_19_bicarbonatolimón_500ML/600/600",
      "Bicarbonato Limón__3.75 LT": "https://picsum.photos/seed/prod_19_bicarbonatolimón_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_19_3.75LT/600/600",
      "Bicarbonato Limón__20 LT": "https://picsum.photos/seed/prod_19_bicarbonatolimón_20LT/600/600",
      "Bicarbonato Limón__1 LT": "https://picsum.photos/seed/prod_19_bicarbonatolimón_1LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.3,
    "sold": 182,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "2 LT",
      "1 LT",
      "20 LT",
      "3.75 LT"
    ],
    "priceBySize": {
      "500 ML": 1700,
      "2 LT": 4050,
      "1 LT": 2350,
      "20 LT": 36000,
      "3.75 LT": 8000
    },
    "aromas": [
      "Lavanda",
      "Bicarbonato Limón"
    ],
    "description": "Desinfectante GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p20",
    "name": "Desinfectante FANTASIA",
    "price": 700,
    "image": "https://picsum.photos/seed/prod_20_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_20_1/600/600",
      "https://picsum.photos/seed/prod_20_2/600/600",
      "https://picsum.photos/seed/prod_20_3/600/600"
    ],
    "imagesByVariant": {
      "Lavanda & Plus__90 ML (Sachet)": "https://picsum.photos/seed/prod_20_lavanda&plus_90ML(Sachet)/600/600",
      "Lavanda & Plus": "https://picsum.photos/seed/prod_20_lavanda&plus/600/600",
      "90 ML (Sachet)": "https://picsum.photos/seed/prod_20_90ML(Sachet)/600/600",
      "Flores Del Campo__1 LT": "https://picsum.photos/seed/prod_20_floresdelcampo_1LT/600/600",
      "Flores Del Campo": "https://picsum.photos/seed/prod_20_floresdelcampo/600/600",
      "1 LT": "https://picsum.photos/seed/prod_20_1LT/600/600",
      "Canela__1 LT": "https://picsum.photos/seed/prod_20_canela_1LT/600/600",
      "Canela": "https://picsum.photos/seed/prod_20_canela/600/600",
      "Explosión Tropical__1 LT": "https://picsum.photos/seed/prod_20_explosióntropical_1LT/600/600",
      "Explosión Tropical": "https://picsum.photos/seed/prod_20_explosióntropical/600/600",
      "Lavanda & Plus__1 LT": "https://picsum.photos/seed/prod_20_lavanda&plus_1LT/600/600",
      "Bicarbonato Limón__1 LT": "https://picsum.photos/seed/prod_20_bicarbonatolimón_1LT/600/600",
      "Bicarbonato Limón": "https://picsum.photos/seed/prod_20_bicarbonatolimón/600/600",
      "Flores Del Campo__3.75 LT": "https://picsum.photos/seed/prod_20_floresdelcampo_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_20_3.75LT/600/600",
      "Canela__3.75 LT": "https://picsum.photos/seed/prod_20_canela_3.75LT/600/600",
      "Explosión Tropical__3.75 LT": "https://picsum.photos/seed/prod_20_explosióntropical_3.75LT/600/600",
      "Lavanda & Plus__3.75 LT": "https://picsum.photos/seed/prod_20_lavanda&plus_3.75LT/600/600",
      "Bicarbonato Limón__500 ML": "https://picsum.photos/seed/prod_20_bicarbonatolimón_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_20_500ML/600/600",
      "Flores Del Campo__500 ML": "https://picsum.photos/seed/prod_20_floresdelcampo_500ML/600/600",
      "Bicarbonato Limón__3.75 LT": "https://picsum.photos/seed/prod_20_bicarbonatolimón_3.75LT/600/600",
      "Lavanda & Plus__500 ML": "https://picsum.photos/seed/prod_20_lavanda&plus_500ML/600/600",
      "Neutro__500 ML": "https://picsum.photos/seed/prod_20_neutro_500ML/600/600",
      "Neutro": "https://picsum.photos/seed/prod_20_neutro/600/600",
      "Explosión Tropical__5 LT": "https://picsum.photos/seed/prod_20_explosióntropical_5LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_20_5LT/600/600",
      "Lavanda & Plus__5 LT": "https://picsum.photos/seed/prod_20_lavanda&plus_5LT/600/600",
      "Neutro__20 LT": "https://picsum.photos/seed/prod_20_neutro_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_20_20LT/600/600",
      "Bicarbonato Limón__5 LT": "https://picsum.photos/seed/prod_20_bicarbonatolimón_5LT/600/600",
      "Flores Del Campo__20 LT": "https://picsum.photos/seed/prod_20_floresdelcampo_20LT/600/600",
      "Canela__20 LT": "https://picsum.photos/seed/prod_20_canela_20LT/600/600",
      "Explosión Tropical__20 LT": "https://picsum.photos/seed/prod_20_explosióntropical_20LT/600/600",
      "Lavanda & Plus__20 LT": "https://picsum.photos/seed/prod_20_lavanda&plus_20LT/600/600",
      "Explosión Tropical__500 ML": "https://picsum.photos/seed/prod_20_explosióntropical_500ML/600/600",
      "Canela__500 ML": "https://picsum.photos/seed/prod_20_canela_500ML/600/600",
      "Bicarbonato Limón__20 LT": "https://picsum.photos/seed/prod_20_bicarbonatolimón_20LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_20_neutro_3.75LT/600/600",
      "Explosión Citrus__500 ML": "https://picsum.photos/seed/prod_20_explosióncitrus_500ML/600/600",
      "Explosión Citrus": "https://picsum.photos/seed/prod_20_explosióncitrus/600/600",
      "Neutro__1 LT": "https://picsum.photos/seed/prod_20_neutro_1LT/600/600",
      "Citronela__1 LT": "https://picsum.photos/seed/prod_20_citronela_1LT/600/600",
      "Citronela": "https://picsum.photos/seed/prod_20_citronela/600/600",
      "Citronela__3.75 LT": "https://picsum.photos/seed/prod_20_citronela_3.75LT/600/600",
      "Citronela__20 LT": "https://picsum.photos/seed/prod_20_citronela_20LT/600/600",
      "Vainilla__500 ML": "https://picsum.photos/seed/prod_20_vainilla_500ML/600/600",
      "Vainilla": "https://picsum.photos/seed/prod_20_vainilla/600/600",
      "Canela__2 LT": "https://picsum.photos/seed/prod_20_canela_2LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_20_2LT/600/600",
      "Explosión Citrus__1 LT": "https://picsum.photos/seed/prod_20_explosióncitrus_1LT/600/600",
      "Explosión Citrus__3.75 LT": "https://picsum.photos/seed/prod_20_explosióncitrus_3.75LT/600/600",
      "Explosión Tropical__2 LT": "https://picsum.photos/seed/prod_20_explosióntropical_2LT/600/600",
      "Lavanda & Plus__2 LT": "https://picsum.photos/seed/prod_20_lavanda&plus_2LT/600/600",
      "Bicarbonato Limón__2 LT": "https://picsum.photos/seed/prod_20_bicarbonatolimón_2LT/600/600",
      "Vainilla__1 LT": "https://picsum.photos/seed/prod_20_vainilla_1LT/600/600",
      "Vainilla__2 LT": "https://picsum.photos/seed/prod_20_vainilla_2LT/600/600",
      "Vainilla__3.75 LT": "https://picsum.photos/seed/prod_20_vainilla_3.75LT/600/600",
      "Vainilla__5 LT": "https://picsum.photos/seed/prod_20_vainilla_5LT/600/600",
      "Vainilla__20 LT": "https://picsum.photos/seed/prod_20_vainilla_20LT/600/600",
      "Explosión Citrus__20 LT": "https://picsum.photos/seed/prod_20_explosióncitrus_20LT/600/600",
      "Citronela__2 LT": "https://picsum.photos/seed/prod_20_citronela_2LT/600/600",
      "Flores Del Campo__2 LT": "https://picsum.photos/seed/prod_20_floresdelcampo_2LT/600/600",
      "Explosión Citrus__2 LT": "https://picsum.photos/seed/prod_20_explosióncitrus_2LT/600/600",
      "Citronela__500 ML": "https://picsum.photos/seed/prod_20_citronela_500ML/600/600"
    },
    "category": "Hogar",
    "rating": 4.6,
    "sold": 305,
    "brandId": "br1",
    "sizes": [
      "90 ML (Sachet)",
      "1 LT",
      "3.75 LT",
      "500 ML",
      "5 LT",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "90 ML (Sachet)": 3600,
      "1 LT": 3600,
      "3.75 LT": 11500,
      "500 ML": 3600,
      "5 LT": 15400,
      "20 LT": 2200,
      "2 LT": 11500
    },
    "aromas": [
      "Lavanda & Plus",
      "Flores Del Campo",
      "Canela",
      "Explosión Tropical",
      "Bicarbonato Limón",
      "Neutro",
      "Explosión Citrus",
      "Citronela",
      "Vainilla"
    ],
    "description": "Desinfectante FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p21",
    "name": "Suavizante FANTASIA",
    "price": 700,
    "originalPrice": 875,
    "image": "https://picsum.photos/seed/prod_21_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_21_1/600/600",
      "https://picsum.photos/seed/prod_21_2/600/600",
      "https://picsum.photos/seed/prod_21_3/600/600"
    ],
    "imagesByVariant": {
      "Dulce Primavera__1 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_1LT/600/600",
      "Dulce Primavera": "https://picsum.photos/seed/prod_21_dulceprimavera/600/600",
      "1 LT": "https://picsum.photos/seed/prod_21_1LT/600/600",
      "Dulce Primavera__2 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_2LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_21_2LT/600/600",
      "Dulce Primavera__5 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_5LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_21_5LT/600/600",
      "Dulce Primavera__20 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_21_20LT/600/600",
      "Dulce Primavera__4 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_4LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_21_4LT/600/600",
      "Dulce Primavera__3 LT": "https://picsum.photos/seed/prod_21_dulceprimavera_3LT/600/600",
      "3 LT": "https://picsum.photos/seed/prod_21_3LT/600/600",
      "Dulce Primavera__90 ML": "https://picsum.photos/seed/prod_21_dulceprimavera_90ML/600/600",
      "90 ML": "https://picsum.photos/seed/prod_21_90ML/600/600"
    },
    "category": "Lavandería",
    "rating": 4.7,
    "sold": 346,
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
      "Dulce Primavera"
    ],
    "description": "Suavizante FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p22",
    "name": "Cera Polimerica Autobrillante FANTASIA",
    "price": 5400,
    "image": "https://picsum.photos/seed/prod_22_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_22_1/600/600",
      "https://picsum.photos/seed/prod_22_2/600/600",
      "https://picsum.photos/seed/prod_22_3/600/600"
    ],
    "imagesByVariant": {
      "Roja__3.75 LT": "https://picsum.photos/seed/prod_22_roja_3.75LT/600/600",
      "Roja": "https://picsum.photos/seed/prod_22_roja/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_22_3.75LT/600/600",
      "Blanca__3.75 LT": "https://picsum.photos/seed/prod_22_blanca_3.75LT/600/600",
      "Blanca": "https://picsum.photos/seed/prod_22_blanca/600/600",
      "Roja__20 LT": "https://picsum.photos/seed/prod_22_roja_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_22_20LT/600/600",
      "Blanca__20 LT": "https://picsum.photos/seed/prod_22_blanca_20LT/600/600",
      "Blanca__810 ML": "https://picsum.photos/seed/prod_22_blanca_810ML/600/600",
      "810 ML": "https://picsum.photos/seed/prod_22_810ML/600/600",
      "Roja__810 ML": "https://picsum.photos/seed/prod_22_roja_810ML/600/600",
      "Blanca__500 ML": "https://picsum.photos/seed/prod_22_blanca_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_22_500ML/600/600",
      "Roja__500 ML": "https://picsum.photos/seed/prod_22_roja_500ML/600/600"
    },
    "category": "Pisos",
    "rating": 4.4,
    "sold": 110,
    "brandId": "br1",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "810 ML",
      "500 ML"
    ],
    "priceBySize": {
      "3.75 LT": 36000,
      "20 LT": 160000,
      "810 ML": 160000,
      "500 ML": 8800
    },
    "aromas": [
      "Roja",
      "Blanca"
    ],
    "description": "Cera Polimerica Autobrillante FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p23",
    "name": "Jabon Blúrey GOOD MORNING",
    "price": 1,
    "image": "https://picsum.photos/seed/prod_23_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_23_1/600/600",
      "https://picsum.photos/seed/prod_23_2/600/600",
      "https://picsum.photos/seed/prod_23_3/600/600"
    ],
    "imagesByVariant": {
      "1 LT": "https://picsum.photos/seed/prod_23_std_1LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_23_std_4LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_23_std_20LT/600/600",
      "810 ML": "https://picsum.photos/seed/prod_23_std_810ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_23_std_3.75LT/600/600"
    },
    "category": "Hogar",
    "badge": "Nuevo",
    "rating": 4.8,
    "sold": 274,
    "brandId": "br2",
    "sizes": [
      "1 LT",
      "4 LT",
      "20 LT",
      "810 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "1 LT": 3900,
      "4 LT": 12000,
      "20 LT": 43500,
      "3.75 LT": 1
    },
    "description": "Jabon Blúrey GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p24",
    "name": "Quita Manchas Ropa Color FANTASIA",
    "price": 2050,
    "image": "https://picsum.photos/seed/prod_24_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_24_1/600/600",
      "https://picsum.photos/seed/prod_24_2/600/600",
      "https://picsum.photos/seed/prod_24_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_24_std_500ML/600/600",
      "4 LT": "https://picsum.photos/seed/prod_24_std_4LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_24_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_24_std_1LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.5,
    "sold": 438,
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
    "description": "Quita Manchas Ropa Color FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p25",
    "name": "Silicona Líquida 3, GOOD MORNING",
    "price": 29500,
    "originalPrice": 36875,
    "image": "https://picsum.photos/seed/prod_25_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_25_1/600/600",
      "https://picsum.photos/seed/prod_25_2/600/600",
      "https://picsum.photos/seed/prod_25_3/600/600"
    ],
    "imagesByVariant": {
      "Baby__3.75 LT": "https://picsum.photos/seed/prod_25_baby_3.75LT/600/600",
      "Baby": "https://picsum.photos/seed/prod_25_baby/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_25_3.75LT/600/600",
      "Chicle__3.75 LT": "https://picsum.photos/seed/prod_25_chicle_3.75LT/600/600",
      "Chicle": "https://picsum.photos/seed/prod_25_chicle/600/600",
      "One Million__3.75 LT": "https://picsum.photos/seed/prod_25_onemillion_3.75LT/600/600",
      "One Million": "https://picsum.photos/seed/prod_25_onemillion/600/600"
    },
    "category": "Automóvil",
    "rating": 4.6,
    "sold": 79,
    "brandId": "br2",
    "sizes": [
      "3.75 LT"
    ],
    "priceBySize": {
      "3.75 LT": 29500
    },
    "aromas": [
      "Baby",
      "Chicle",
      "One Million"
    ],
    "description": "Silicona Líquida 3, GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p26",
    "name": "Trapero Con Palo Copa Ref 500 GOOD MORNING",
    "price": 6500,
    "image": "https://picsum.photos/seed/prod_26_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_26_1/600/600",
      "https://picsum.photos/seed/prod_26_2/600/600",
      "https://picsum.photos/seed/prod_26_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 500": "https://picsum.photos/seed/prod_26_std_CopaRef500/600/600"
    },
    "category": "Traperos",
    "badge": "Oferta",
    "rating": 4.7,
    "sold": 120,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 500"
    ],
    "priceBySize": {
      "Copa Ref 500": 6500
    },
    "description": "Trapero Con Palo Copa Ref 500 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p27",
    "name": "Brillavidrios GOOD MORNING",
    "price": 2600,
    "image": "https://picsum.photos/seed/prod_27_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_27_1/600/600",
      "https://picsum.photos/seed/prod_27_2/600/600",
      "https://picsum.photos/seed/prod_27_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_27_std_500ML/600/600",
      "1 LT (Promo 750ml)": "https://picsum.photos/seed/prod_27_std_1LT(Promo750ml)/600/600",
      "3.75 LT (Galón)": "https://picsum.photos/seed/prod_27_std_3.75LT(Galón)/600/600",
      "20 LT": "https://picsum.photos/seed/prod_27_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.9,
    "sold": 202,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "1 LT (Promo 750ml)",
      "3.75 LT (Galón)",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 2600,
      "1 LT (Promo 750ml)": 3900,
      "3.75 LT (Galón)": 8500,
      "20 LT": 34000
    },
    "description": "Brillavidrios GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p28",
    "name": "Creolina GOOD MORNING",
    "price": 1800,
    "image": "https://picsum.photos/seed/prod_28_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_28_1/600/600",
      "https://picsum.photos/seed/prod_28_2/600/600",
      "https://picsum.photos/seed/prod_28_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_28_std_20LT/600/600",
      "240 ML": "https://picsum.photos/seed/prod_28_std_240ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_28_std_500ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_28_std_3.75LT/600/600"
    },
    "category": "Desinfección",
    "rating": 4.5,
    "sold": 325,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "240 ML",
      "500 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 49000,
      "240 ML": 1800,
      "500 ML": 2800,
      "3.75 LT": 11200
    },
    "description": "Creolina GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p29",
    "name": "Detergente Liq GOOD MORNING",
    "price": 3800,
    "originalPrice": 4750,
    "image": "https://picsum.photos/seed/prod_29_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_29_1/600/600",
      "https://picsum.photos/seed/prod_29_2/600/600",
      "https://picsum.photos/seed/prod_29_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_29_std_3.75LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_29_std_2LT/600/600",
      "3 LT": "https://picsum.photos/seed/prod_29_std_3LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_29_std_4LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_29_std_1LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_29_std_20LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_29_std_5LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.6,
    "sold": 366,
    "brandId": "br2",
    "sizes": [
      "3.75 LT",
      "2 LT",
      "3 LT",
      "4 LT",
      "1 LT",
      "20 LT",
      "5 LT"
    ],
    "priceBySize": {
      "3.75 LT": 10500,
      "2 LT": 7200,
      "3 LT": 10500,
      "4 LT": 14000,
      "1 LT": 3800,
      "20 LT": 43500,
      "5 LT": 18000
    },
    "description": "Detergente Liq GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p30",
    "name": "Quita Grasa FANTASIA",
    "price": 5200,
    "image": "https://picsum.photos/seed/prod_30_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_30_1/600/600",
      "https://picsum.photos/seed/prod_30_2/600/600",
      "https://picsum.photos/seed/prod_30_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_30_std_500ML/600/600",
      "20 LT": "https://picsum.photos/seed/prod_30_std_20LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_30_std_3.75LT/600/600",
      "1 LT (Promo 750ml)": "https://picsum.photos/seed/prod_30_std_1LT(Promo750ml)/600/600"
    },
    "category": "Cocina",
    "rating": 4.8,
    "sold": 448,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "20 LT",
      "3.75 LT",
      "1 LT (Promo 750ml)"
    ],
    "priceBySize": {
      "500 ML": 5200,
      "20 LT": 46000,
      "3.75 LT": 11200,
      "1 LT (Promo 750ml)": 7200
    },
    "description": "Quita Grasa FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p31",
    "name": "Cera Polimerica Autobrillante GOOD MORNING",
    "price": 22000,
    "image": "https://picsum.photos/seed/prod_31_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_31_1/600/600",
      "https://picsum.photos/seed/prod_31_2/600/600",
      "https://picsum.photos/seed/prod_31_3/600/600"
    ],
    "imagesByVariant": {
      "Roja__3.75 LT": "https://picsum.photos/seed/prod_31_roja_3.75LT/600/600",
      "Roja": "https://picsum.photos/seed/prod_31_roja/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_31_3.75LT/600/600",
      "Roja__20 LT": "https://picsum.photos/seed/prod_31_roja_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_31_20LT/600/600",
      "Blanca__3.75 LT": "https://picsum.photos/seed/prod_31_blanca_3.75LT/600/600",
      "Blanca": "https://picsum.photos/seed/prod_31_blanca/600/600",
      "Blanca__20 LT": "https://picsum.photos/seed/prod_31_blanca_20LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.7,
    "sold": 181,
    "brandId": "br2",
    "sizes": [
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "3.75 LT": 22000,
      "20 LT": 104000
    },
    "aromas": [
      "Roja",
      "Blanca"
    ],
    "description": "Cera Polimerica Autobrillante GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p32",
    "name": "Blanqueador Q Al 5,25% BLAN Q",
    "price": 3000,
    "image": "https://picsum.photos/seed/prod_32_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_32_1/600/600",
      "https://picsum.photos/seed/prod_32_2/600/600",
      "https://picsum.photos/seed/prod_32_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_32_std_20LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_32_std_4LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_32_std_2LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_32_std_1LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.4,
    "sold": 345,
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
    "description": "Blanqueador Q Al 5,25% BLAN Q con fórmula especializada de BLAN Q. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p33",
    "name": "Vinagre De Limpieza GOOD MORNING",
    "price": 1500,
    "originalPrice": 1875,
    "image": "https://picsum.photos/seed/prod_33_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_33_1/600/600",
      "https://picsum.photos/seed/prod_33_2/600/600",
      "https://picsum.photos/seed/prod_33_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_33_std_500ML/600/600",
      "810 ML": "https://picsum.photos/seed/prod_33_std_810ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_33_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_33_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.5,
    "sold": 386,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "810 ML",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 1500,
      "810 ML": 2500,
      "3.75 LT": 4000,
      "20 LT": 26500
    },
    "description": "Vinagre De Limpieza GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p34",
    "name": "Silicona Líquida Cr GOOD MORNING",
    "price": 5200,
    "image": "https://picsum.photos/seed/prod_34_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_34_1/600/600",
      "https://picsum.photos/seed/prod_34_2/600/600",
      "https://picsum.photos/seed/prod_34_3/600/600"
    ],
    "imagesByVariant": {
      "Citrus__250 ML": "https://picsum.photos/seed/prod_34_citrus_250ML/600/600",
      "Citrus": "https://picsum.photos/seed/prod_34_citrus/600/600",
      "250 ML": "https://picsum.photos/seed/prod_34_250ML/600/600",
      "Citrus__20 LT": "https://picsum.photos/seed/prod_34_citrus_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_34_20LT/600/600"
    },
    "category": "Automóvil",
    "rating": 4.5,
    "sold": 273,
    "brandId": "br2",
    "sizes": [
      "250 ML",
      "20 LT"
    ],
    "priceBySize": {
      "250 ML": 5200,
      "20 LT": 142000
    },
    "aromas": [
      "Citrus"
    ],
    "description": "Silicona Líquida Cr GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p35",
    "name": "Silicona Líquida GOOD MORNING",
    "price": 5200,
    "image": "https://picsum.photos/seed/prod_35_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_35_1/600/600",
      "https://picsum.photos/seed/prod_35_2/600/600",
      "https://picsum.photos/seed/prod_35_3/600/600"
    ],
    "imagesByVariant": {
      "Baby__20 LT": "https://picsum.photos/seed/prod_35_baby_20LT/600/600",
      "Baby": "https://picsum.photos/seed/prod_35_baby/600/600",
      "20 LT": "https://picsum.photos/seed/prod_35_20LT/600/600",
      "Baby__250 ML": "https://picsum.photos/seed/prod_35_baby_250ML/600/600",
      "250 ML": "https://picsum.photos/seed/prod_35_250ML/600/600",
      "Canela__20 LT": "https://picsum.photos/seed/prod_35_canela_20LT/600/600",
      "Canela": "https://picsum.photos/seed/prod_35_canela/600/600",
      "Chicle__20 LT": "https://picsum.photos/seed/prod_35_chicle_20LT/600/600",
      "Chicle": "https://picsum.photos/seed/prod_35_chicle/600/600",
      "New Car__20 LT": "https://picsum.photos/seed/prod_35_newcar_20LT/600/600",
      "New Car": "https://picsum.photos/seed/prod_35_newcar/600/600",
      "One Million__20 LT": "https://picsum.photos/seed/prod_35_onemillion_20LT/600/600",
      "One Million": "https://picsum.photos/seed/prod_35_onemillion/600/600",
      "Chicle__250 ML": "https://picsum.photos/seed/prod_35_chicle_250ML/600/600",
      "Canela__250 ML": "https://picsum.photos/seed/prod_35_canela_250ML/600/600",
      "One Million__250 ML": "https://picsum.photos/seed/prod_35_onemillion_250ML/600/600",
      "New Car__250 ML": "https://picsum.photos/seed/prod_35_newcar_250ML/600/600",
      "Canela__3.75 LT": "https://picsum.photos/seed/prod_35_canela_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_35_3.75LT/600/600",
      "New Car__3.75 LT": "https://picsum.photos/seed/prod_35_newcar_3.75LT/600/600"
    },
    "category": "Automóvil",
    "rating": 4.6,
    "sold": 314,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "250 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 142000,
      "250 ML": 5200,
      "3.75 LT": 29500
    },
    "aromas": [
      "Baby",
      "Canela",
      "Chicle",
      "New Car",
      "One Million"
    ],
    "description": "Silicona Líquida GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p36",
    "name": "Desinfectante Talco Bebé FANTASIA",
    "price": 2200,
    "image": "https://picsum.photos/seed/prod_36_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_36_1/600/600",
      "https://picsum.photos/seed/prod_36_2/600/600",
      "https://picsum.photos/seed/prod_36_3/600/600"
    ],
    "imagesByVariant": {
      "Talco Bebé__1 LT": "https://picsum.photos/seed/prod_36_talcobebé_1LT/600/600",
      "Talco Bebé": "https://picsum.photos/seed/prod_36_talcobebé/600/600",
      "1 LT": "https://picsum.photos/seed/prod_36_1LT/600/600",
      "Talco Bebé__3.75 LT": "https://picsum.photos/seed/prod_36_talcobebé_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_36_3.75LT/600/600",
      "Talco Bebé__500 ML": "https://picsum.photos/seed/prod_36_talcobebé_500ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_36_500ML/600/600",
      "Talco Bebé__20 LT": "https://picsum.photos/seed/prod_36_talcobebé_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_36_20LT/600/600",
      "Talco Bebé__2 LT": "https://picsum.photos/seed/prod_36_talcobebé_2LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_36_2LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.4,
    "sold": 119,
    "brandId": "br1",
    "sizes": [
      "1 LT",
      "3.75 LT",
      "500 ML",
      "20 LT",
      "2 LT"
    ],
    "priceBySize": {
      "1 LT": 42500,
      "3.75 LT": 2200,
      "500 ML": 6200,
      "20 LT": 15400,
      "2 LT": 11500
    },
    "aromas": [
      "Talco Bebé"
    ],
    "description": "Desinfectante Talco Bebé FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p37",
    "name": "Bicarbonato Bolsa FANTASIA",
    "price": 3800,
    "originalPrice": 4750,
    "image": "https://picsum.photos/seed/prod_37_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_37_1/600/600",
      "https://picsum.photos/seed/prod_37_2/600/600",
      "https://picsum.photos/seed/prod_37_3/600/600"
    ],
    "imagesByVariant": {
      "500 GR": "https://picsum.photos/seed/prod_37_std_500GR/600/600",
      "1 KG": "https://picsum.photos/seed/prod_37_std_1KG/600/600"
    },
    "category": "Lavandería",
    "rating": 4.5,
    "sold": 108,
    "brandId": "br1",
    "sizes": [
      "500 GR",
      "1 KG"
    ],
    "priceBySize": {
      "500 GR": 3800,
      "1 KG": 4800
    },
    "description": "Bicarbonato Bolsa FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p38",
    "name": "Tratamiento Pisos Laminado FANTASIA",
    "price": 3950,
    "image": "https://picsum.photos/seed/prod_38_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_38_1/600/600",
      "https://picsum.photos/seed/prod_38_2/600/600",
      "https://picsum.photos/seed/prod_38_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_38_std_20LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_38_std_3.75LT/600/600",
      "810 ML": "https://picsum.photos/seed/prod_38_std_810ML/600/600",
      "Chicle__810 ML": "https://picsum.photos/seed/prod_38_chicle_810ML/600/600",
      "Chicle": "https://picsum.photos/seed/prod_38_chicle/600/600",
      "Chicle__3.75 LT": "https://picsum.photos/seed/prod_38_chicle_3.75LT/600/600",
      "Chicle__20 LT": "https://picsum.photos/seed/prod_38_chicle_20LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.6,
    "sold": 149,
    "brandId": "br1",
    "sizes": [
      "20 LT",
      "3.75 LT",
      "810 ML"
    ],
    "priceBySize": {
      "20 LT": 3950,
      "3.75 LT": 66000,
      "810 ML": 15000
    },
    "aromas": [
      "Chicle"
    ],
    "description": "Tratamiento Pisos Laminado FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p39",
    "name": "Silicona Líquida Cr 3, GOOD MORNING",
    "price": 29500,
    "image": "https://picsum.photos/seed/prod_39_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_39_1/600/600",
      "https://picsum.photos/seed/prod_39_2/600/600",
      "https://picsum.photos/seed/prod_39_3/600/600"
    ],
    "imagesByVariant": {
      "Citrus__3.75 LT": "https://picsum.photos/seed/prod_39_citrus_3.75LT/600/600",
      "Citrus": "https://picsum.photos/seed/prod_39_citrus/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_39_3.75LT/600/600"
    },
    "category": "Automóvil",
    "rating": 4.8,
    "sold": 231,
    "brandId": "br2",
    "sizes": [
      "3.75 LT"
    ],
    "priceBySize": {
      "3.75 LT": 29500
    },
    "aromas": [
      "Citrus"
    ],
    "description": "Silicona Líquida Cr 3, GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p40",
    "name": "Trapero Con Palo Copa Ref 800 GOOD MORNING",
    "price": 7100,
    "image": "https://picsum.photos/seed/prod_40_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_40_1/600/600",
      "https://picsum.photos/seed/prod_40_2/600/600",
      "https://picsum.photos/seed/prod_40_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 800": "https://picsum.photos/seed/prod_40_std_CopaRef800/600/600"
    },
    "category": "Traperos",
    "rating": 4.4,
    "sold": 354,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 800"
    ],
    "priceBySize": {
      "Copa Ref 800": 7100
    },
    "description": "Trapero Con Palo Copa Ref 800 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p41",
    "name": "Trapero Con Palo Copa Ref 1000 GOOD MORNING",
    "price": 8100,
    "originalPrice": 10125,
    "image": "https://picsum.photos/seed/prod_41_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_41_1/600/600",
      "https://picsum.photos/seed/prod_41_2/600/600",
      "https://picsum.photos/seed/prod_41_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1000": "https://picsum.photos/seed/prod_41_std_CopaRef1000/600/600"
    },
    "category": "Traperos",
    "rating": 4.7,
    "sold": 77,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 1000"
    ],
    "priceBySize": {
      "Copa Ref 1000": 8100
    },
    "description": "Trapero Con Palo Copa Ref 1000 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p42",
    "name": "Detergente Liq Bicarbonato Basic FANTASIA",
    "price": 1000,
    "image": "https://picsum.photos/seed/prod_42_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_42_1/600/600",
      "https://picsum.photos/seed/prod_42_2/600/600",
      "https://picsum.photos/seed/prod_42_3/600/600"
    ],
    "imagesByVariant": {
      "90 ML (Sachet)": "https://picsum.photos/seed/prod_42_std_90ML(Sachet)/600/600"
    },
    "category": "Lavandería",
    "rating": 4.6,
    "sold": 210,
    "brandId": "br1",
    "sizes": [
      "90 ML (Sachet)"
    ],
    "priceBySize": {
      "90 ML (Sachet)": 1000
    },
    "description": "Detergente Liq Bicarbonato Basic FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p43",
    "name": "Limpiador De Juntas FANTASIA",
    "price": 3800,
    "image": "https://picsum.photos/seed/prod_43_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_43_1/600/600",
      "https://picsum.photos/seed/prod_43_2/600/600",
      "https://picsum.photos/seed/prod_43_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_43_std_500ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_43_std_3.75LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.7,
    "sold": 138,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "3.75 LT"
    ],
    "priceBySize": {
      "500 ML": 3800,
      "3.75 LT": 22000
    },
    "description": "Limpiador De Juntas FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p44",
    "name": "Suavizante GOOD MORNING",
    "price": 3800,
    "image": "https://picsum.photos/seed/prod_44_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_44_1/600/600",
      "https://picsum.photos/seed/prod_44_2/600/600",
      "https://picsum.photos/seed/prod_44_3/600/600"
    ],
    "imagesByVariant": {
      "Primaveral__2 LT": "https://picsum.photos/seed/prod_44_primaveral_2LT/600/600",
      "Primaveral": "https://picsum.photos/seed/prod_44_primaveral/600/600",
      "2 LT": "https://picsum.photos/seed/prod_44_2LT/600/600",
      "Primaveral__4 LT": "https://picsum.photos/seed/prod_44_primaveral_4LT/600/600",
      "4 LT": "https://picsum.photos/seed/prod_44_4LT/600/600",
      "Primaveral__20 LT": "https://picsum.photos/seed/prod_44_primaveral_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_44_20LT/600/600",
      "Manzana Verde__3 LT": "https://picsum.photos/seed/prod_44_manzanaverde_3LT/600/600",
      "Manzana Verde": "https://picsum.photos/seed/prod_44_manzanaverde/600/600",
      "3 LT": "https://picsum.photos/seed/prod_44_3LT/600/600",
      "Primaveral__3.75 LT": "https://picsum.photos/seed/prod_44_primaveral_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_44_3.75LT/600/600",
      "Primaveral__3 LT": "https://picsum.photos/seed/prod_44_primaveral_3LT/600/600",
      "Primaveral__5 LT": "https://picsum.photos/seed/prod_44_primaveral_5LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_44_5LT/600/600",
      "Lavanda__3 LT": "https://picsum.photos/seed/prod_44_lavanda_3LT/600/600",
      "Lavanda": "https://picsum.photos/seed/prod_44_lavanda/600/600",
      "Lavanda__5 LT": "https://picsum.photos/seed/prod_44_lavanda_5LT/600/600",
      "Manzana Verde__2 LT": "https://picsum.photos/seed/prod_44_manzanaverde_2LT/600/600",
      "Manzana Verde__5 LT": "https://picsum.photos/seed/prod_44_manzanaverde_5LT/600/600",
      "Frutos Rojos__2 LT": "https://picsum.photos/seed/prod_44_frutosrojos_2LT/600/600",
      "Frutos Rojos": "https://picsum.photos/seed/prod_44_frutosrojos/600/600",
      "Frutos Rojos__3 LT": "https://picsum.photos/seed/prod_44_frutosrojos_3LT/600/600",
      "Frutos Rojos__5 LT": "https://picsum.photos/seed/prod_44_frutosrojos_5LT/600/600",
      "Baby__3 LT": "https://picsum.photos/seed/prod_44_baby_3LT/600/600",
      "Baby": "https://picsum.photos/seed/prod_44_baby/600/600",
      "Baby__5 LT": "https://picsum.photos/seed/prod_44_baby_5LT/600/600",
      "Lavanda__20 LT": "https://picsum.photos/seed/prod_44_lavanda_20LT/600/600",
      "Baby__20 LT": "https://picsum.photos/seed/prod_44_baby_20LT/600/600",
      "Frutos Rojos__20 LT": "https://picsum.photos/seed/prod_44_frutosrojos_20LT/600/600",
      "Manzana Verde__20 LT": "https://picsum.photos/seed/prod_44_manzanaverde_20LT/600/600",
      "Lavanda__4 LT": "https://picsum.photos/seed/prod_44_lavanda_4LT/600/600",
      "Frutos Rojos__4 LT": "https://picsum.photos/seed/prod_44_frutosrojos_4LT/600/600",
      "Baby__4 LT": "https://picsum.photos/seed/prod_44_baby_4LT/600/600",
      "Manzana Verde__4 LT": "https://picsum.photos/seed/prod_44_manzanaverde_4LT/600/600",
      "Baby__2 LT": "https://picsum.photos/seed/prod_44_baby_2LT/600/600",
      "Lavanda__2 LT": "https://picsum.photos/seed/prod_44_lavanda_2LT/600/600",
      "Frutos Rojos__1 LT": "https://picsum.photos/seed/prod_44_frutosrojos_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_44_1LT/600/600",
      "Baby__1 LT": "https://picsum.photos/seed/prod_44_baby_1LT/600/600",
      "Manzana Verde__1 LT": "https://picsum.photos/seed/prod_44_manzanaverde_1LT/600/600",
      "Lavanda__1 LT": "https://picsum.photos/seed/prod_44_lavanda_1LT/600/600",
      "Primaveral__1 LT": "https://picsum.photos/seed/prod_44_primaveral_1LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.5,
    "sold": 230,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "4 LT",
      "20 LT",
      "3 LT",
      "3.75 LT",
      "5 LT",
      "1 LT"
    ],
    "priceBySize": {
      "2 LT": 8800,
      "4 LT": 3800,
      "3 LT": 11500,
      "3.75 LT": 3800,
      "5 LT": 5800,
      "20 LT": 11500,
      "1 LT": 42500
    },
    "aromas": [
      "Primaveral",
      "Manzana Verde",
      "Lavanda",
      "Frutos Rojos",
      "Baby"
    ],
    "description": "Suavizante GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p45",
    "name": "Shampoo Para Autos GOOD MORNING",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/prod_45_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_45_1/600/600",
      "https://picsum.photos/seed/prod_45_2/600/600",
      "https://picsum.photos/seed/prod_45_3/600/600"
    ],
    "imagesByVariant": {
      "1 LT": "https://picsum.photos/seed/prod_45_std_1LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_45_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_45_std_20LT/600/600"
    },
    "category": "Automóvil",
    "rating": 4.4,
    "sold": 363,
    "brandId": "br2",
    "sizes": [
      "1 LT",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "1 LT": 6000,
      "3.75 LT": 15000,
      "20 LT": 48000
    },
    "description": "Shampoo Para Autos GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p46",
    "name": "Sellador Polimerico Autobrillante GOOD MORNING",
    "price": 33200,
    "image": "https://picsum.photos/seed/prod_46_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_46_1/600/600",
      "https://picsum.photos/seed/prod_46_2/600/600",
      "https://picsum.photos/seed/prod_46_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_46_std_3.75LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.5,
    "sold": 404,
    "brandId": "br2",
    "sizes": [
      "3.75 LT"
    ],
    "priceBySize": {
      "3.75 LT": 33200
    },
    "description": "Sellador Polimerico Autobrillante GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p47",
    "name": "Sellador Polimerico Auto. GOOD MORNING",
    "price": 165000,
    "image": "https://picsum.photos/seed/prod_47_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_47_1/600/600",
      "https://picsum.photos/seed/prod_47_2/600/600",
      "https://picsum.photos/seed/prod_47_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__20 LT": "https://picsum.photos/seed/prod_47_blanco_20LT/600/600",
      "Blanco": "https://picsum.photos/seed/prod_47_blanco/600/600",
      "20 LT": "https://picsum.photos/seed/prod_47_20LT/600/600"
    },
    "category": "Pisos",
    "rating": 4.7,
    "sold": 86,
    "brandId": "br2",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 165000
    },
    "aromas": [
      "Blanco"
    ],
    "description": "Sellador Polimerico Auto. GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p48",
    "name": "Lavaloza GOOD MORNING",
    "price": 2350,
    "image": "https://picsum.photos/seed/prod_48_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_48_1/600/600",
      "https://picsum.photos/seed/prod_48_2/600/600",
      "https://picsum.photos/seed/prod_48_3/600/600"
    ],
    "imagesByVariant": {
      "Neutro__20 LT": "https://picsum.photos/seed/prod_48_neutro_20LT/600/600",
      "Neutro": "https://picsum.photos/seed/prod_48_neutro/600/600",
      "20 LT": "https://picsum.photos/seed/prod_48_20LT/600/600",
      "Limón__500 ML": "https://picsum.photos/seed/prod_48_limón_500ML/600/600",
      "Limón": "https://picsum.photos/seed/prod_48_limón/600/600",
      "500 ML": "https://picsum.photos/seed/prod_48_500ML/600/600",
      "Limón__1 LT": "https://picsum.photos/seed/prod_48_limón_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_48_1LT/600/600",
      "Limón__3.75 LT": "https://picsum.photos/seed/prod_48_limón_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_48_3.75LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_48_neutro_3.75LT/600/600",
      "Limón__20 LT": "https://picsum.photos/seed/prod_48_limón_20LT/600/600"
    },
    "category": "Cocina",
    "rating": 4.8,
    "sold": 127,
    "brandId": "br2",
    "sizes": [
      "20 LT",
      "500 ML",
      "1 LT",
      "3.75 LT"
    ],
    "priceBySize": {
      "20 LT": 43500,
      "500 ML": 2350,
      "1 LT": 4500,
      "3.75 LT": 10500
    },
    "aromas": [
      "Neutro",
      "Limón"
    ],
    "description": "Lavaloza GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p49",
    "name": "Oxigeno Activo Doy Pack FANTASIA",
    "price": 1500,
    "originalPrice": 1875,
    "image": "https://picsum.photos/seed/prod_49_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_49_1/600/600",
      "https://picsum.photos/seed/prod_49_2/600/600",
      "https://picsum.photos/seed/prod_49_3/600/600"
    ],
    "imagesByVariant": {
      "1000 GR": "https://picsum.photos/seed/prod_49_std_1000GR/600/600",
      "250 GR": "https://picsum.photos/seed/prod_49_std_250GR/600/600",
      "500 GR": "https://picsum.photos/seed/prod_49_std_500GR/600/600"
    },
    "category": "Lavandería",
    "rating": 4.5,
    "sold": 291,
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
    "description": "Oxigeno Activo Doy Pack FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p50",
    "name": "Pastillas Cloro Blanqueador Q BLAN Q",
    "price": 3800,
    "image": "https://picsum.photos/seed/prod_50_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_50_1/600/600",
      "https://picsum.photos/seed/prod_50_2/600/600",
      "https://picsum.photos/seed/prod_50_3/600/600"
    ],
    "imagesByVariant": {
      "1 KG": "https://picsum.photos/seed/prod_50_std_1KG/600/600",
      "240 GR (12 pastillas)": "https://picsum.photos/seed/prod_50_std_240GR(12pastillas)/600/600",
      "480 GR (24 pastillas)": "https://picsum.photos/seed/prod_50_std_480GR(24pastillas)/600/600"
    },
    "category": "Desinfección",
    "rating": 4.8,
    "sold": 414,
    "brandId": "br5",
    "sizes": [
      "1 KG",
      "240 GR (12 pastillas)",
      "480 GR (24 pastillas)"
    ],
    "priceBySize": {
      "1 KG": 8400,
      "240 GR (12 pastillas)": 3800,
      "480 GR (24 pastillas)": 6500
    },
    "description": "Pastillas Cloro Blanqueador Q BLAN Q con fórmula especializada de BLAN Q. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p51",
    "name": "Detergente Goodmax GOOD MORNING",
    "price": 4500,
    "image": "https://picsum.photos/seed/prod_51_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_51_1/600/600",
      "https://picsum.photos/seed/prod_51_2/600/600",
      "https://picsum.photos/seed/prod_51_3/600/600"
    ],
    "imagesByVariant": {
      "4 LT": "https://picsum.photos/seed/prod_51_std_4LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_51_std_2LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_51_std_20LT/600/600",
      "5 LT": "https://picsum.photos/seed/prod_51_std_5LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_51_std_1LT/600/600",
      "3 LT": "https://picsum.photos/seed/prod_51_std_3LT/600/600"
    },
    "category": "Lavandería",
    "rating": 4.4,
    "sold": 137,
    "brandId": "br2",
    "sizes": [
      "4 LT",
      "2 LT",
      "20 LT",
      "5 LT",
      "1 LT",
      "3 LT"
    ],
    "priceBySize": {
      "4 LT": 16800,
      "2 LT": 9391,
      "20 LT": 55000,
      "5 LT": 20500,
      "1 LT": 4500,
      "3 LT": 12900
    },
    "description": "Detergente Goodmax GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p52",
    "name": "Varsol Puro GOOD MORNING",
    "price": 4200,
    "image": "https://picsum.photos/seed/prod_52_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_52_1/600/600",
      "https://picsum.photos/seed/prod_52_2/600/600",
      "https://picsum.photos/seed/prod_52_3/600/600"
    ],
    "imagesByVariant": {
      "810 ML": "https://picsum.photos/seed/prod_52_std_810ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_52_std_3.75LT/600/600",
      "500 ML": "https://picsum.photos/seed/prod_52_std_500ML/600/600",
      "20 LT": "https://picsum.photos/seed/prod_52_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.6,
    "sold": 106,
    "brandId": "br2",
    "sizes": [
      "810 ML",
      "3.75 LT",
      "500 ML",
      "20 LT"
    ],
    "priceBySize": {
      "810 ML": 6800,
      "3.75 LT": 25000,
      "500 ML": 4200,
      "20 LT": 118400
    },
    "description": "Varsol Puro GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p53",
    "name": "Desengrasante Industrial FANTASIA",
    "price": 7000,
    "originalPrice": 8750,
    "image": "https://picsum.photos/seed/prod_53_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_53_1/600/600",
      "https://picsum.photos/seed/prod_53_2/600/600",
      "https://picsum.photos/seed/prod_53_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_53_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_53_std_20LT/600/600",
      "810 ML": "https://picsum.photos/seed/prod_53_std_810ML/600/600",
      "75 ML (Sachet)": "https://picsum.photos/seed/prod_53_std_75ML(Sachet)/600/600"
    },
    "category": "Cocina",
    "rating": 4.6,
    "sold": 393,
    "brandId": "br1",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "810 ML",
      "75 ML (Sachet)"
    ],
    "priceBySize": {
      "3.75 LT": 18500,
      "20 LT": 72000,
      "810 ML": 7000,
      "75 ML (Sachet)": 39000
    },
    "description": "Desengrasante Industrial FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p54",
    "name": "Lavaloza FANTASIA",
    "price": 3500,
    "image": "https://picsum.photos/seed/prod_54_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_54_1/600/600",
      "https://picsum.photos/seed/prod_54_2/600/600",
      "https://picsum.photos/seed/prod_54_3/600/600"
    ],
    "imagesByVariant": {
      "Limón__500 ML": "https://picsum.photos/seed/prod_54_limón_500ML/600/600",
      "Limón": "https://picsum.photos/seed/prod_54_limón/600/600",
      "500 ML": "https://picsum.photos/seed/prod_54_500ML/600/600",
      "Chicle__500 ML": "https://picsum.photos/seed/prod_54_chicle_500ML/600/600",
      "Chicle": "https://picsum.photos/seed/prod_54_chicle/600/600",
      "Limón__1 LT": "https://picsum.photos/seed/prod_54_limón_1LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_54_1LT/600/600",
      "Chicle__1 LT": "https://picsum.photos/seed/prod_54_chicle_1LT/600/600",
      "Limón__2 LT": "https://picsum.photos/seed/prod_54_limón_2LT/600/600",
      "2 LT": "https://picsum.photos/seed/prod_54_2LT/600/600",
      "Chicle__2 LT": "https://picsum.photos/seed/prod_54_chicle_2LT/600/600",
      "Limón__3.75 LT": "https://picsum.photos/seed/prod_54_limón_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_54_3.75LT/600/600",
      "Chicle__3.75 LT": "https://picsum.photos/seed/prod_54_chicle_3.75LT/600/600",
      "Limón__20 LT": "https://picsum.photos/seed/prod_54_limón_20LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_54_20LT/600/600",
      "Chicle__20 LT": "https://picsum.photos/seed/prod_54_chicle_20LT/600/600",
      "Neutro__3.75 LT": "https://picsum.photos/seed/prod_54_neutro_3.75LT/600/600",
      "Neutro": "https://picsum.photos/seed/prod_54_neutro/600/600",
      "Neutro__20 LT": "https://picsum.photos/seed/prod_54_neutro_20LT/600/600",
      "Neutro__1 LT": "https://picsum.photos/seed/prod_54_neutro_1LT/600/600",
      "Neutro__500 ML": "https://picsum.photos/seed/prod_54_neutro_500ML/600/600"
    },
    "category": "Cocina",
    "rating": 4.7,
    "sold": 321,
    "brandId": "br1",
    "sizes": [
      "500 ML",
      "1 LT",
      "2 LT",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 7500,
      "1 LT": 7000,
      "2 LT": 12500,
      "3.75 LT": 18500,
      "20 LT": 72500
    },
    "aromas": [
      "Limón",
      "Chicle",
      "Neutro"
    ],
    "description": "Lavaloza FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p55",
    "name": "Lavaloza Crema GOOD MORNING",
    "price": 9200,
    "image": "https://picsum.photos/seed/prod_55_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_55_1/600/600",
      "https://picsum.photos/seed/prod_55_2/600/600",
      "https://picsum.photos/seed/prod_55_3/600/600"
    ],
    "imagesByVariant": {
      "3 KG": "https://picsum.photos/seed/prod_55_std_3KG/600/600",
      "5 KG": "https://picsum.photos/seed/prod_55_std_5KG/600/600"
    },
    "category": "Cocina",
    "rating": 4.9,
    "sold": 351,
    "brandId": "br2",
    "sizes": [
      "3 KG",
      "5 KG"
    ],
    "priceBySize": {
      "3 KG": 9200,
      "5 KG": 12500
    },
    "description": "Lavaloza Crema GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p56",
    "name": "Oxigeno Activo Econopack FANTASIA",
    "price": 6800,
    "image": "https://picsum.photos/seed/prod_56_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_56_1/600/600",
      "https://picsum.photos/seed/prod_56_2/600/600",
      "https://picsum.photos/seed/prod_56_3/600/600"
    ],
    "imagesByVariant": {
      "1 KG": "https://picsum.photos/seed/prod_56_std_1KG/600/600"
    },
    "category": "Lavandería",
    "rating": 4.8,
    "sold": 145,
    "brandId": "br1",
    "sizes": [
      "1 KG"
    ],
    "priceBySize": {
      "1 KG": 6800
    },
    "description": "Oxigeno Activo Econopack FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p57",
    "name": "Biovarsol GOOD MORNING",
    "price": 3500,
    "originalPrice": 4375,
    "image": "https://picsum.photos/seed/prod_57_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_57_1/600/600",
      "https://picsum.photos/seed/prod_57_2/600/600",
      "https://picsum.photos/seed/prod_57_3/600/600"
    ],
    "imagesByVariant": {
      "500 ML": "https://picsum.photos/seed/prod_57_std_500ML/600/600",
      "810 ML": "https://picsum.photos/seed/prod_57_std_810ML/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_57_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_57_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.4,
    "sold": 442,
    "brandId": "br2",
    "sizes": [
      "500 ML",
      "810 ML",
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "500 ML": 3500,
      "810 ML": 6800,
      "3.75 LT": 23205,
      "20 LT": 116025
    },
    "description": "Biovarsol GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p58",
    "name": "Repuesto Trapero Copa Ref 500 GOOD MORNING",
    "price": 4400,
    "image": "https://picsum.photos/seed/prod_58_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_58_1/600/600",
      "https://picsum.photos/seed/prod_58_2/600/600",
      "https://picsum.photos/seed/prod_58_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 500": "https://picsum.photos/seed/prod_58_std_CopaRef500/600/600"
    },
    "category": "Traperos",
    "rating": 4.7,
    "sold": 400,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 500"
    ],
    "priceBySize": {
      "Copa Ref 500": 4400
    },
    "description": "Repuesto Trapero Copa Ref 500 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p59",
    "name": "Repuesto Trapero Copa Ref 800 GOOD MORNING",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_59_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_59_1/600/600",
      "https://picsum.photos/seed/prod_59_2/600/600",
      "https://picsum.photos/seed/prod_59_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 800": "https://picsum.photos/seed/prod_59_std_CopaRef800/600/600"
    },
    "category": "Traperos",
    "rating": 4.8,
    "sold": 441,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 800"
    ],
    "priceBySize": {
      "Copa Ref 800": 5000
    },
    "description": "Repuesto Trapero Copa Ref 800 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p60",
    "name": "Repuesto Trapero Copa Ref 1000 GOOD MORNING",
    "price": 6000,
    "image": "https://picsum.photos/seed/prod_60_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_60_1/600/600",
      "https://picsum.photos/seed/prod_60_2/600/600",
      "https://picsum.photos/seed/prod_60_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1000": "https://picsum.photos/seed/prod_60_std_CopaRef1000/600/600"
    },
    "category": "Traperos",
    "badge": "Nuevo",
    "rating": 4.9,
    "sold": 82,
    "brandId": "br2",
    "sizes": [
      "Copa Ref 1000"
    ],
    "priceBySize": {
      "Copa Ref 1000": 6000
    },
    "description": "Repuesto Trapero Copa Ref 1000 GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p61",
    "name": "Papel Higienico 250 Mts 4 Rollos GOOD MORNING",
    "price": 28000,
    "originalPrice": 35000,
    "image": "https://picsum.photos/seed/prod_61_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_61_1/600/600",
      "https://picsum.photos/seed/prod_61_2/600/600",
      "https://picsum.photos/seed/prod_61_3/600/600"
    ],
    "imagesByVariant": {
      "250 MTS": "https://picsum.photos/seed/prod_61_std_250MTS/600/600"
    },
    "category": "Hogar",
    "rating": 4.7,
    "sold": 348,
    "brandId": "br2",
    "sizes": [
      "250 MTS"
    ],
    "priceBySize": {
      "250 MTS": 28000
    },
    "description": "Papel Higienico 250 Mts 4 Rollos GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p62",
    "name": "Oxigeno Activo Tarrina FANTASIA",
    "price": 1,
    "image": "https://picsum.photos/seed/prod_62_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_62_1/600/600",
      "https://picsum.photos/seed/prod_62_2/600/600",
      "https://picsum.photos/seed/prod_62_3/600/600"
    ],
    "imagesByVariant": {
      "500 GR": "https://picsum.photos/seed/prod_62_std_500GR/600/600",
      "250 GR": "https://picsum.photos/seed/prod_62_std_250GR/600/600"
    },
    "category": "Hogar",
    "rating": 4.8,
    "sold": 389,
    "brandId": "br1",
    "sizes": [
      "500 GR",
      "250 GR"
    ],
    "priceBySize": {
      "500 GR": 1,
      "250 GR": 1
    },
    "description": "Oxigeno Activo Tarrina FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p63",
    "name": "Limpiador De Juntas FANTASIA",
    "price": 135000,
    "image": "https://picsum.photos/seed/prod_63_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_63_1/600/600",
      "https://picsum.photos/seed/prod_63_2/600/600",
      "https://picsum.photos/seed/prod_63_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_63_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.3,
    "sold": 71,
    "brandId": "br1",
    "sizes": [
      "20 LT"
    ],
    "priceBySize": {
      "20 LT": 135000
    },
    "description": "Limpiador De Juntas FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p64",
    "name": "Alcohol Etilico 96% Power Andina WIND",
    "price": 30500,
    "image": "https://picsum.photos/seed/prod_64_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_64_1/600/600",
      "https://picsum.photos/seed/prod_64_2/600/600",
      "https://picsum.photos/seed/prod_64_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_64_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_64_std_20LT/600/600"
    },
    "category": "Hogar",
    "rating": 4.5,
    "sold": 153,
    "brandId": "br4",
    "sizes": [
      "3.75 LT",
      "20 LT"
    ],
    "priceBySize": {
      "3.75 LT": 30500,
      "20 LT": 146000
    },
    "description": "Alcohol Etilico 96% Power Andina WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p65",
    "name": "Alcohol Industrial 70% WIND",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/prod_65_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_65_1/600/600",
      "https://picsum.photos/seed/prod_65_2/600/600",
      "https://picsum.photos/seed/prod_65_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_65_std_3.75LT/600/600",
      "20 LT": "https://picsum.photos/seed/prod_65_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_65_std_1LT/600/600",
      "500 ML": "https://picsum.photos/seed/prod_65_std_500ML/600/600"
    },
    "category": "Desinfección",
    "rating": 4.8,
    "sold": 276,
    "brandId": "br4",
    "sizes": [
      "3.75 LT",
      "20 LT",
      "1 LT",
      "500 ML"
    ],
    "priceBySize": {
      "500 ML": 5200
    },
    "description": "Alcohol Industrial 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p66",
    "name": "Alcohol Antiseptico 70% WIND",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_66_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_66_1/600/600",
      "https://picsum.photos/seed/prod_66_2/600/600",
      "https://picsum.photos/seed/prod_66_3/600/600"
    ],
    "imagesByVariant": {
      "20 LT": "https://picsum.photos/seed/prod_66_std_20LT/600/600",
      "1 LT": "https://picsum.photos/seed/prod_66_std_1LT/600/600",
      "750 ML": "https://picsum.photos/seed/prod_66_std_750ML/600/600",
      "500 ML": "https://picsum.photos/seed/prod_66_std_500ML/600/600"
    },
    "category": "Desinfección",
    "badge": "Nuevo",
    "rating": 4.3,
    "sold": 358,
    "brandId": "br4",
    "sizes": [
      "20 LT",
      "1 LT",
      "750 ML",
      "500 ML"
    ],
    "description": "Alcohol Antiseptico 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p67",
    "name": "Alcohol Antiseptico 70 % WIND",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_67_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_67_1/600/600",
      "https://picsum.photos/seed/prod_67_2/600/600",
      "https://picsum.photos/seed/prod_67_3/600/600"
    ],
    "imagesByVariant": {
      "3.75 LT": "https://picsum.photos/seed/prod_67_std_3.75LT/600/600"
    },
    "category": "Desinfección",
    "rating": 4.4,
    "sold": 399,
    "brandId": "br4",
    "sizes": [
      "3.75 LT"
    ],
    "description": "Alcohol Antiseptico 70 % WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p68",
    "name": "Alcohol Glicerinado 70% WIND",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_68_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_68_1/600/600",
      "https://picsum.photos/seed/prod_68_2/600/600",
      "https://picsum.photos/seed/prod_68_3/600/600"
    ],
    "imagesByVariant": {
      "120 ML": "https://picsum.photos/seed/prod_68_std_120ML/600/600"
    },
    "category": "Desinfección",
    "badge": "Oferta",
    "rating": 4.9,
    "sold": 204,
    "brandId": "br4",
    "sizes": [
      "120 ML"
    ],
    "description": "Alcohol Glicerinado 70% WIND con fórmula especializada de WIND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p69",
    "name": "Silicona Líquida GOOD MORNING",
    "price": 6000,
    "originalPrice": 7500,
    "image": "https://picsum.photos/seed/prod_69_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_69_1/600/600",
      "https://picsum.photos/seed/prod_69_2/600/600",
      "https://picsum.photos/seed/prod_69_3/600/600"
    ],
    "imagesByVariant": {
      "One Million__300 ML": "https://picsum.photos/seed/prod_69_onemillion_300ML/600/600",
      "One Million": "https://picsum.photos/seed/prod_69_onemillion/600/600",
      "300 ML": "https://picsum.photos/seed/prod_69_300ML/600/600",
      "New Car__300 ML": "https://picsum.photos/seed/prod_69_newcar_300ML/600/600",
      "New Car": "https://picsum.photos/seed/prod_69_newcar/600/600",
      "Chicle__300 ML": "https://picsum.photos/seed/prod_69_chicle_300ML/600/600",
      "Chicle": "https://picsum.photos/seed/prod_69_chicle/600/600",
      "Canela__300 ML": "https://picsum.photos/seed/prod_69_canela_300ML/600/600",
      "Canela": "https://picsum.photos/seed/prod_69_canela/600/600",
      "Baby__300 ML": "https://picsum.photos/seed/prod_69_baby_300ML/600/600",
      "Baby": "https://picsum.photos/seed/prod_69_baby/600/600"
    },
    "category": "Hogar",
    "rating": 4.3,
    "sold": 245,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "One Million",
      "New Car",
      "Chicle",
      "Canela",
      "Baby"
    ],
    "description": "Silicona Líquida GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p70",
    "name": "Silicona Líquida Cr GOOD MORNING",
    "price": 6000,
    "image": "https://picsum.photos/seed/prod_70_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_70_1/600/600",
      "https://picsum.photos/seed/prod_70_2/600/600",
      "https://picsum.photos/seed/prod_70_3/600/600"
    ],
    "imagesByVariant": {
      "Citrus__300 ML": "https://picsum.photos/seed/prod_70_citrus_300ML/600/600",
      "Citrus": "https://picsum.photos/seed/prod_70_citrus/600/600",
      "300 ML": "https://picsum.photos/seed/prod_70_300ML/600/600"
    },
    "category": "Hogar",
    "rating": 4.5,
    "sold": 327,
    "brandId": "br2",
    "sizes": [
      "300 ML"
    ],
    "priceBySize": {
      "300 ML": 6000
    },
    "aromas": [
      "Citrus"
    ],
    "description": "Silicona Líquida Cr GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p71",
    "name": "Shampoo Para Autos GOOD MORNING",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_71_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_71_1/600/600",
      "https://picsum.photos/seed/prod_71_2/600/600",
      "https://picsum.photos/seed/prod_71_3/600/600"
    ],
    "imagesByVariant": {
      "810 ML": "https://picsum.photos/seed/prod_71_std_810ML/600/600"
    },
    "category": "Hogar",
    "rating": 4.4,
    "sold": 173,
    "brandId": "br2",
    "sizes": [
      "810 ML"
    ],
    "description": "Shampoo Para Autos GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p72",
    "name": "Sellador Polimerico Autobrillante FANTASIA",
    "price": 7350,
    "image": "https://picsum.photos/seed/prod_72_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_72_1/600/600",
      "https://picsum.photos/seed/prod_72_2/600/600",
      "https://picsum.photos/seed/prod_72_3/600/600"
    ],
    "imagesByVariant": {
      "Rojo__500 ML": "https://picsum.photos/seed/prod_72_rojo_500ML/600/600",
      "Rojo": "https://picsum.photos/seed/prod_72_rojo/600/600",
      "500 ML": "https://picsum.photos/seed/prod_72_500ML/600/600"
    },
    "category": "Hogar",
    "rating": 4.6,
    "sold": 142,
    "brandId": "br1",
    "sizes": [
      "500 ML"
    ],
    "priceBySize": {
      "500 ML": 7350
    },
    "aromas": [
      "Rojo"
    ],
    "description": "Sellador Polimerico Autobrillante FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p73",
    "name": "Trapero Con Palo Copa Ref 1200 FANTASIA",
    "price": 1,
    "originalPrice": 1,
    "image": "https://picsum.photos/seed/prod_73_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_73_1/600/600",
      "https://picsum.photos/seed/prod_73_2/600/600",
      "https://picsum.photos/seed/prod_73_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1200": "https://picsum.photos/seed/prod_73_std_CopaRef1200/600/600"
    },
    "category": "Hogar",
    "rating": 4.7,
    "sold": 183,
    "brandId": "br1",
    "sizes": [
      "Copa Ref 1200"
    ],
    "priceBySize": {
      "Copa Ref 1200": 1
    },
    "description": "Trapero Con Palo Copa Ref 1200 FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p74",
    "name": "Trapero Con Palo Copa Ref 1500 (jumbo) FANTASIA",
    "price": 1,
    "image": "https://picsum.photos/seed/prod_74_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_74_1/600/600",
      "https://picsum.photos/seed/prod_74_2/600/600",
      "https://picsum.photos/seed/prod_74_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1500": "https://picsum.photos/seed/prod_74_std_CopaRef1500/600/600"
    },
    "category": "Hogar",
    "rating": 4.8,
    "sold": 224,
    "brandId": "br1",
    "sizes": [
      "Copa Ref 1500"
    ],
    "priceBySize": {
      "Copa Ref 1500": 1
    },
    "description": "Trapero Con Palo Copa Ref 1500 (jumbo) FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p75",
    "name": "Repuesto Trapero Copa Ref 1200 FANTASIA",
    "price": 1,
    "image": "https://picsum.photos/seed/prod_75_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_75_1/600/600",
      "https://picsum.photos/seed/prod_75_2/600/600",
      "https://picsum.photos/seed/prod_75_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1200": "https://picsum.photos/seed/prod_75_std_CopaRef1200/600/600"
    },
    "category": "Hogar",
    "rating": 4.9,
    "sold": 265,
    "brandId": "br1",
    "sizes": [
      "Copa Ref 1200"
    ],
    "priceBySize": {
      "Copa Ref 1200": 1
    },
    "description": "Repuesto Trapero Copa Ref 1200 FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p76",
    "name": "Repuesto Trapero Copa Ref 1500 (jumbo) FANTASIA",
    "price": 1,
    "image": "https://picsum.photos/seed/prod_76_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_76_1/600/600",
      "https://picsum.photos/seed/prod_76_2/600/600",
      "https://picsum.photos/seed/prod_76_3/600/600"
    ],
    "imagesByVariant": {
      "Copa Ref 1500": "https://picsum.photos/seed/prod_76_std_CopaRef1500/600/600"
    },
    "category": "Hogar",
    "rating": 4.3,
    "sold": 306,
    "brandId": "br1",
    "sizes": [
      "Copa Ref 1500"
    ],
    "priceBySize": {
      "Copa Ref 1500": 1
    },
    "description": "Repuesto Trapero Copa Ref 1500 (jumbo) FANTASIA con fórmula especializada de FANTASIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p77",
    "name": "Desinfectante GOOD MORNING",
    "price": 4050,
    "originalPrice": 5063,
    "image": "https://picsum.photos/seed/prod_77_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_77_1/600/600",
      "https://picsum.photos/seed/prod_77_2/600/600",
      "https://picsum.photos/seed/prod_77_3/600/600"
    ],
    "imagesByVariant": {
      "Lavanda__2 LT": "https://picsum.photos/seed/prod_77_lavanda_2LT/600/600",
      "Lavanda": "https://picsum.photos/seed/prod_77_lavanda/600/600",
      "2 LT": "https://picsum.photos/seed/prod_77_2LT/600/600",
      "Lavanda__3.75 LT": "https://picsum.photos/seed/prod_77_lavanda_3.75LT/600/600",
      "3.75 LT": "https://picsum.photos/seed/prod_77_3.75LT/600/600"
    },
    "category": "Desinfección",
    "rating": 4.4,
    "sold": 347,
    "brandId": "br2",
    "sizes": [
      "2 LT",
      "3.75 LT"
    ],
    "priceBySize": {
      "2 LT": 4050,
      "3.75 LT": 8000
    },
    "aromas": [
      "Lavanda"
    ],
    "description": "Desinfectante GOOD MORNING con fórmula especializada de GOOD MORNING. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p78",
    "name": "Aparato Limpiavidrios Metalico Pequeño",
    "price": 28000,
    "image": "https://picsum.photos/seed/prod_78_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_78_1/600/600",
      "https://picsum.photos/seed/prod_78_2/600/600",
      "https://picsum.photos/seed/prod_78_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_78_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 429,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 28000
    },
    "description": "Aparato Limpiavidrios Metalico Pequeño con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p79",
    "name": "Aparato Limpiavidrios Plastico Pequeño",
    "price": 10000,
    "image": "https://picsum.photos/seed/prod_79_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_79_1/600/600",
      "https://picsum.photos/seed/prod_79_2/600/600",
      "https://picsum.photos/seed/prod_79_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_79_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 70,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10000
    },
    "description": "Aparato Limpiavidrios Plastico Pequeño con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p80",
    "name": "Aragan Metalico",
    "price": 53000,
    "image": "https://picsum.photos/seed/prod_80_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_80_1/600/600",
      "https://picsum.photos/seed/prod_80_2/600/600",
      "https://picsum.photos/seed/prod_80_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_80_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 111,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 53000
    },
    "description": "Aragan Metalico con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p81",
    "name": "Aragan Plastico CLEANING 1A",
    "price": 11000,
    "originalPrice": 13750,
    "image": "https://picsum.photos/seed/prod_81_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_81_1/600/600",
      "https://picsum.photos/seed/prod_81_2/600/600",
      "https://picsum.photos/seed/prod_81_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_81_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 152,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 11000
    },
    "description": "Aragan Plastico CLEANING 1A con fórmula especializada de CLEANING 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p82",
    "name": "Balde Plastico",
    "price": 8500,
    "image": "https://picsum.photos/seed/prod_82_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_82_1/600/600",
      "https://picsum.photos/seed/prod_82_2/600/600",
      "https://picsum.photos/seed/prod_82_3/600/600"
    ],
    "imagesByVariant": {
      "10 LT": "https://picsum.photos/seed/prod_82_std_10LT/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 193,
    "sizes": [
      "10 LT"
    ],
    "priceBySize": {
      "10 LT": 8500
    },
    "description": "Balde Plastico con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p83",
    "name": "Bayetilla Mediana",
    "price": 2500,
    "image": "https://picsum.photos/seed/prod_83_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_83_1/600/600",
      "https://picsum.photos/seed/prod_83_2/600/600",
      "https://picsum.photos/seed/prod_83_3/600/600"
    ],
    "imagesByVariant": {
      "Blanca__Unidad": "https://picsum.photos/seed/prod_83_blanca_Unidad/600/600",
      "Blanca": "https://picsum.photos/seed/prod_83_blanca/600/600",
      "Unidad": "https://picsum.photos/seed/prod_83_Unidad/600/600",
      "Roja__Unidad": "https://picsum.photos/seed/prod_83_roja_Unidad/600/600",
      "Roja": "https://picsum.photos/seed/prod_83_roja/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.4,
    "sold": 234,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "aromas": [
      "Blanca",
      "Roja"
    ],
    "description": "Bayetilla Mediana con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p84",
    "name": "Bayetilla Metro",
    "price": 6500,
    "image": "https://picsum.photos/seed/prod_84_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_84_1/600/600",
      "https://picsum.photos/seed/prod_84_2/600/600",
      "https://picsum.photos/seed/prod_84_3/600/600"
    ],
    "imagesByVariant": {
      "Blanca__Unidad": "https://picsum.photos/seed/prod_84_blanca_Unidad/600/600",
      "Blanca": "https://picsum.photos/seed/prod_84_blanca/600/600",
      "Unidad": "https://picsum.photos/seed/prod_84_Unidad/600/600",
      "Roja__Unidad": "https://picsum.photos/seed/prod_84_roja_Unidad/600/600",
      "Roja": "https://picsum.photos/seed/prod_84_roja/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 316,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "aromas": [
      "Blanca",
      "Roja"
    ],
    "description": "Bayetilla Metro con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p85",
    "name": "Bolsa 70x100",
    "price": 9000,
    "originalPrice": 11250,
    "image": "https://picsum.photos/seed/prod_85_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_85_1/600/600",
      "https://picsum.photos/seed/prod_85_2/600/600",
      "https://picsum.photos/seed/prod_85_3/600/600"
    ],
    "imagesByVariant": {
      "Blanca__Unidad": "https://picsum.photos/seed/prod_85_blanca_Unidad/600/600",
      "Blanca": "https://picsum.photos/seed/prod_85_blanca/600/600",
      "Unidad": "https://picsum.photos/seed/prod_85_Unidad/600/600",
      "Roja__Unidad": "https://picsum.photos/seed/prod_85_roja_Unidad/600/600",
      "Roja": "https://picsum.photos/seed/prod_85_roja/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 398,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "aromas": [
      "Blanca",
      "Roja"
    ],
    "description": "Bolsa 70x100 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p86",
    "name": "Bolsa Negra 100x120",
    "price": 10500,
    "image": "https://picsum.photos/seed/prod_86_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_86_1/600/600",
      "https://picsum.photos/seed/prod_86_2/600/600",
      "https://picsum.photos/seed/prod_86_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_86_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 439,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10500
    },
    "description": "Bolsa Negra 100x120 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p87",
    "name": "Bolsa Negra 40x60",
    "price": 2600,
    "image": "https://picsum.photos/seed/prod_87_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_87_1/600/600",
      "https://picsum.photos/seed/prod_87_2/600/600",
      "https://picsum.photos/seed/prod_87_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_87_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.3,
    "sold": 80,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2600
    },
    "description": "Bolsa Negra 40x60 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p88",
    "name": "Bolsa Negra 60x80",
    "price": 5400,
    "image": "https://picsum.photos/seed/prod_88_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_88_1/600/600",
      "https://picsum.photos/seed/prod_88_2/600/600",
      "https://picsum.photos/seed/prod_88_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_88_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 121,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5400
    },
    "description": "Bolsa Negra 60x80 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p89",
    "name": "Bolsa Negra 70x100",
    "price": 9000,
    "originalPrice": 11250,
    "image": "https://picsum.photos/seed/prod_89_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_89_1/600/600",
      "https://picsum.photos/seed/prod_89_2/600/600",
      "https://picsum.photos/seed/prod_89_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_89_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 162,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "description": "Bolsa Negra 70x100 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p90",
    "name": "Bolsa Verde 70x100",
    "price": 9000,
    "image": "https://picsum.photos/seed/prod_90_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_90_1/600/600",
      "https://picsum.photos/seed/prod_90_2/600/600",
      "https://picsum.photos/seed/prod_90_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_90_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 244,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9000
    },
    "description": "Bolsa Verde 70x100 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p91",
    "name": "Bonaire BONAIRE",
    "price": 10800,
    "image": "https://picsum.photos/seed/prod_91_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_91_1/600/600",
      "https://picsum.photos/seed/prod_91_2/600/600",
      "https://picsum.photos/seed/prod_91_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_91_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 285,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10800
    },
    "description": "Bonaire BONAIRE con fórmula especializada de BONAIRE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p92",
    "name": "Cepillo De Piso CLEANING 1A",
    "price": 6500,
    "image": "https://picsum.photos/seed/prod_92_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_92_1/600/600",
      "https://picsum.photos/seed/prod_92_2/600/600",
      "https://picsum.photos/seed/prod_92_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_92_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 326,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Cepillo De Piso CLEANING 1A con fórmula especializada de CLEANING 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p93",
    "name": "Cepillo Dental COLGATE",
    "price": 32000,
    "originalPrice": 40000,
    "image": "https://picsum.photos/seed/prod_93_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_93_1/600/600",
      "https://picsum.photos/seed/prod_93_2/600/600",
      "https://picsum.photos/seed/prod_93_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_93_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 367,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 32000
    },
    "description": "Cepillo Dental COLGATE con fórmula especializada de COLGATE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p94",
    "name": "Cepillo Dental (economico) DENTIPLUS",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_94_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_94_1/600/600",
      "https://picsum.photos/seed/prod_94_2/600/600",
      "https://picsum.photos/seed/prod_94_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_94_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 408,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Cepillo Dental (economico) DENTIPLUS con fórmula especializada de DENTIPLUS. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p95",
    "name": "Cepillo Plancha CLEANING 1A",
    "price": 4800,
    "image": "https://picsum.photos/seed/prod_95_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_95_1/600/600",
      "https://picsum.photos/seed/prod_95_2/600/600",
      "https://picsum.photos/seed/prod_95_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_95_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 449,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Cepillo Plancha CLEANING 1A con fórmula especializada de CLEANING 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p96",
    "name": "Cepillo Plancha Economico 1A",
    "price": 3800,
    "image": "https://picsum.photos/seed/prod_96_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_96_1/600/600",
      "https://picsum.photos/seed/prod_96_2/600/600",
      "https://picsum.photos/seed/prod_96_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_96_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 90,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3800
    },
    "description": "Cepillo Plancha Economico 1A con fórmula especializada de 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p97",
    "name": "Cepillo Sanitario 1A",
    "price": 6500,
    "originalPrice": 8125,
    "image": "https://picsum.photos/seed/prod_97_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_97_1/600/600",
      "https://picsum.photos/seed/prod_97_2/600/600",
      "https://picsum.photos/seed/prod_97_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_97_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 131,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Cepillo Sanitario 1A con fórmula especializada de 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p98",
    "name": "Chupa CLEANING 1A",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_98_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_98_1/600/600",
      "https://picsum.photos/seed/prod_98_2/600/600",
      "https://picsum.photos/seed/prod_98_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_98_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 172,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5000
    },
    "description": "Chupa CLEANING 1A con fórmula especializada de CLEANING 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p99",
    "name": "Escoba Dura ITALIANA",
    "price": 10000,
    "image": "https://picsum.photos/seed/prod_99_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_99_1/600/600",
      "https://picsum.photos/seed/prod_99_2/600/600",
      "https://picsum.photos/seed/prod_99_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_99_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 213,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10000
    },
    "description": "Escoba Dura ITALIANA con fórmula especializada de ITALIANA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p100",
    "name": "Escoba Dura TR",
    "price": 7800,
    "image": "https://picsum.photos/seed/prod_100_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_100_1/600/600",
      "https://picsum.photos/seed/prod_100_2/600/600",
      "https://picsum.photos/seed/prod_100_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_100_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 254,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Dura TR con fórmula especializada de TR. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p101",
    "name": "Escoba Suave ZAMORA ALTA",
    "price": 12000,
    "originalPrice": 15000,
    "image": "https://picsum.photos/seed/prod_101_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_101_1/600/600",
      "https://picsum.photos/seed/prod_101_2/600/600",
      "https://picsum.photos/seed/prod_101_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_101_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 295,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 12000
    },
    "description": "Escoba Suave ZAMORA ALTA con fórmula especializada de ZAMORA ALTA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p102",
    "name": "Escoba Suave ZAMORA BAJA",
    "price": 11500,
    "image": "https://picsum.photos/seed/prod_102_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_102_1/600/600",
      "https://picsum.photos/seed/prod_102_2/600/600",
      "https://picsum.photos/seed/prod_102_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_102_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 336,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 11500
    },
    "description": "Escoba Suave ZAMORA BAJA con fórmula especializada de ZAMORA BAJA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p103",
    "name": "Escoba Suave ITALIANA",
    "price": 10500,
    "image": "https://picsum.photos/seed/prod_103_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_103_1/600/600",
      "https://picsum.photos/seed/prod_103_2/600/600",
      "https://picsum.photos/seed/prod_103_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_103_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 377,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 10500
    },
    "description": "Escoba Suave ITALIANA con fórmula especializada de ITALIANA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p104",
    "name": "Escoba Suave MONALISA",
    "price": 12000,
    "image": "https://picsum.photos/seed/prod_104_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_104_1/600/600",
      "https://picsum.photos/seed/prod_104_2/600/600",
      "https://picsum.photos/seed/prod_104_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_104_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 418,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 12000
    },
    "description": "Escoba Suave MONALISA con fórmula especializada de MONALISA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p105",
    "name": "Escoba Suave SUPER DANNA",
    "price": 13500,
    "originalPrice": 16875,
    "image": "https://picsum.photos/seed/prod_105_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_105_1/600/600",
      "https://picsum.photos/seed/prod_105_2/600/600",
      "https://picsum.photos/seed/prod_105_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_105_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 459,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13500
    },
    "description": "Escoba Suave SUPER DANNA con fórmula especializada de SUPER DANNA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p106",
    "name": "Escoba Suave TR",
    "price": 7800,
    "image": "https://picsum.photos/seed/prod_106_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_106_1/600/600",
      "https://picsum.photos/seed/prod_106_2/600/600",
      "https://picsum.photos/seed/prod_106_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_106_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 100,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Suave TR con fórmula especializada de TR. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p107",
    "name": "Escoba Suave ZULIA",
    "price": 7800,
    "image": "https://picsum.photos/seed/prod_107_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_107_1/600/600",
      "https://picsum.photos/seed/prod_107_2/600/600",
      "https://picsum.photos/seed/prod_107_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_107_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 141,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7800
    },
    "description": "Escoba Suave ZULIA con fórmula especializada de ZULIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p108",
    "name": "Esponja Acerada EBRAND",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_108_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_108_1/600/600",
      "https://picsum.photos/seed/prod_108_2/600/600",
      "https://picsum.photos/seed/prod_108_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_108_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 182,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 14000
    },
    "description": "Esponja Acerada EBRAND con fórmula especializada de EBRAND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p109",
    "name": "Esponja Oro -plata",
    "price": 1500,
    "originalPrice": 1875,
    "image": "https://picsum.photos/seed/prod_109_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_109_1/600/600",
      "https://picsum.photos/seed/prod_109_2/600/600",
      "https://picsum.photos/seed/prod_109_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_109_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 264,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Esponja Oro -plata con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p110",
    "name": "Esponja Sabra (-gris) LIAO",
    "price": 1300,
    "image": "https://picsum.photos/seed/prod_110_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_110_1/600/600",
      "https://picsum.photos/seed/prod_110_2/600/600",
      "https://picsum.photos/seed/prod_110_3/600/600"
    ],
    "imagesByVariant": {
      "Rojo__Unidad": "https://picsum.photos/seed/prod_110_rojo_Unidad/600/600",
      "Rojo": "https://picsum.photos/seed/prod_110_rojo/600/600",
      "Unidad": "https://picsum.photos/seed/prod_110_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 305,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1300
    },
    "aromas": [
      "Rojo"
    ],
    "description": "Esponja Sabra (-gris) LIAO con fórmula especializada de LIAO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p111",
    "name": "Disco GLADE",
    "price": 6500,
    "image": "https://picsum.photos/seed/prod_111_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_111_1/600/600",
      "https://picsum.photos/seed/prod_111_2/600/600",
      "https://picsum.photos/seed/prod_111_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_111_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 346,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Disco GLADE con fórmula especializada de GLADE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p112",
    "name": "Gorros Oruga (cofias) UKA",
    "price": 19000,
    "image": "https://picsum.photos/seed/prod_112_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_112_1/600/600",
      "https://picsum.photos/seed/prod_112_2/600/600",
      "https://picsum.photos/seed/prod_112_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_112_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 387,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 19000
    },
    "description": "Gorros Oruga (cofias) UKA con fórmula especializada de UKA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p113",
    "name": "Guantes Calibre 25 Talla 8 MILENIO",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/prod_113_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_113_1/600/600",
      "https://picsum.photos/seed/prod_113_2/600/600",
      "https://picsum.photos/seed/prod_113_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_113_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 428,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 8 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p114",
    "name": "Guantes Calibre 35 Talla 8 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_114_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_114_1/600/600",
      "https://picsum.photos/seed/prod_114_2/600/600",
      "https://picsum.photos/seed/prod_114_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_114_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 69,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 8 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p115",
    "name": "Guantes De Nitrilo Azul KUYK",
    "price": 27000,
    "image": "https://picsum.photos/seed/prod_115_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_115_1/600/600",
      "https://picsum.photos/seed/prod_115_2/600/600",
      "https://picsum.photos/seed/prod_115_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_115_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.5,
    "sold": 110,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Guantes De Nitrilo Azul KUYK con fórmula especializada de KUYK. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p116",
    "name": "Guantes De Nitrilo Negro UKA",
    "price": 27000,
    "image": "https://picsum.photos/seed/prod_116_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_116_1/600/600",
      "https://picsum.photos/seed/prod_116_2/600/600",
      "https://picsum.photos/seed/prod_116_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_116_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 151,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Guantes De Nitrilo Negro UKA con fórmula especializada de UKA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p117",
    "name": "Guantes Desechables (transparentes) ARANPLAST",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/prod_117_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_117_1/600/600",
      "https://picsum.photos/seed/prod_117_2/600/600",
      "https://picsum.photos/seed/prod_117_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_117_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 192,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Desechables (transparentes) ARANPLAST con fórmula especializada de ARANPLAST. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p118",
    "name": "Guantes Domesticos Talla 7 MILENIO",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_118_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_118_1/600/600",
      "https://picsum.photos/seed/prod_118_2/600/600",
      "https://picsum.photos/seed/prod_118_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_118_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 233,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 7 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p119",
    "name": "Guarda Escobas LIAO",
    "price": 23000,
    "image": "https://picsum.photos/seed/prod_119_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_119_1/600/600",
      "https://picsum.photos/seed/prod_119_2/600/600",
      "https://picsum.photos/seed/prod_119_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_119_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 274,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 31000
    },
    "description": "Guarda Escobas LIAO con fórmula especializada de LIAO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p120",
    "name": "Jabon Rey Barra DERSA",
    "price": 3200,
    "image": "https://picsum.photos/seed/prod_120_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_120_1/600/600",
      "https://picsum.photos/seed/prod_120_2/600/600",
      "https://picsum.photos/seed/prod_120_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_120_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.4,
    "sold": 356,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3200
    },
    "description": "Jabon Rey Barra DERSA con fórmula especializada de DERSA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p121",
    "name": "Limpion Grande",
    "price": 2200,
    "originalPrice": 2750,
    "image": "https://picsum.photos/seed/prod_121_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_121_1/600/600",
      "https://picsum.photos/seed/prod_121_2/600/600",
      "https://picsum.photos/seed/prod_121_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__Unidad": "https://picsum.photos/seed/prod_121_blanco_Unidad/600/600",
      "Blanco": "https://picsum.photos/seed/prod_121_blanco/600/600",
      "Unidad": "https://picsum.photos/seed/prod_121_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 397,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2200
    },
    "aromas": [
      "Blanco"
    ],
    "description": "Limpion Grande con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p122",
    "name": "Limpion Grande Colores",
    "price": 2200,
    "image": "https://picsum.photos/seed/prod_122_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_122_1/600/600",
      "https://picsum.photos/seed/prod_122_2/600/600",
      "https://picsum.photos/seed/prod_122_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_122_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 438,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2200
    },
    "description": "Limpion Grande Colores con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p123",
    "name": "Limpion Mediano",
    "price": 1500,
    "image": "https://picsum.photos/seed/prod_123_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_123_1/600/600",
      "https://picsum.photos/seed/prod_123_2/600/600",
      "https://picsum.photos/seed/prod_123_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__Unidad": "https://picsum.photos/seed/prod_123_blanco_Unidad/600/600",
      "Blanco": "https://picsum.photos/seed/prod_123_blanco/600/600",
      "Unidad": "https://picsum.photos/seed/prod_123_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 79,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "aromas": [
      "Blanco"
    ],
    "description": "Limpion Mediano con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p124",
    "name": "Limpion Mediano Colores",
    "price": 1500,
    "image": "https://picsum.photos/seed/prod_124_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_124_1/600/600",
      "https://picsum.photos/seed/prod_124_2/600/600",
      "https://picsum.photos/seed/prod_124_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_124_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 120,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Limpion Mediano Colores con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p125",
    "name": "Limpion Pequeño",
    "price": 1200,
    "originalPrice": 1500,
    "image": "https://picsum.photos/seed/prod_125_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_125_1/600/600",
      "https://picsum.photos/seed/prod_125_2/600/600",
      "https://picsum.photos/seed/prod_125_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__Unidad": "https://picsum.photos/seed/prod_125_blanco_Unidad/600/600",
      "Blanco": "https://picsum.photos/seed/prod_125_blanco/600/600",
      "Unidad": "https://picsum.photos/seed/prod_125_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 161,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1200
    },
    "aromas": [
      "Blanco"
    ],
    "description": "Limpion Pequeño con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p126",
    "name": "Limpion Pequeño Colores",
    "price": 1200,
    "image": "https://picsum.photos/seed/prod_126_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_126_1/600/600",
      "https://picsum.photos/seed/prod_126_2/600/600",
      "https://picsum.photos/seed/prod_126_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_126_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 202,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1200
    },
    "description": "Limpion Pequeño Colores con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p127",
    "name": "Limpiones Microfibra Estampado",
    "price": 4500,
    "image": "https://picsum.photos/seed/prod_127_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_127_1/600/600",
      "https://picsum.photos/seed/prod_127_2/600/600",
      "https://picsum.photos/seed/prod_127_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_127_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 243,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Limpiones Microfibra Estampado con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p128",
    "name": "Limpiones Microfibra Unicolor",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_128_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_128_1/600/600",
      "https://picsum.photos/seed/prod_128_2/600/600",
      "https://picsum.photos/seed/prod_128_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_128_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 284,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5000
    },
    "description": "Limpiones Microfibra Unicolor con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p129",
    "name": "Matrix",
    "price": 1500,
    "originalPrice": 1875,
    "image": "https://picsum.photos/seed/prod_129_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_129_1/600/600",
      "https://picsum.photos/seed/prod_129_2/600/600",
      "https://picsum.photos/seed/prod_129_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_129_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 325,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 1500
    },
    "description": "Matrix con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p130",
    "name": "Mopa Algodon Completa",
    "price": 58000,
    "image": "https://picsum.photos/seed/prod_130_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_130_1/600/600",
      "https://picsum.photos/seed/prod_130_2/600/600",
      "https://picsum.photos/seed/prod_130_3/600/600"
    ],
    "imagesByVariant": {
      "1 MT": "https://picsum.photos/seed/prod_130_std_1MT/600/600",
      "60 CM": "https://picsum.photos/seed/prod_130_std_60CM/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 366,
    "sizes": [
      "1 MT",
      "60 CM"
    ],
    "priceBySize": {
      "1 MT": 70000,
      "60 CM": 58000
    },
    "description": "Mopa Algodon Completa con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p131",
    "name": "Palo Madera",
    "price": 2000,
    "image": "https://picsum.photos/seed/prod_131_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_131_1/600/600",
      "https://picsum.photos/seed/prod_131_2/600/600",
      "https://picsum.photos/seed/prod_131_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_131_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.9,
    "sold": 448,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2000
    },
    "description": "Palo Madera con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p132",
    "name": "Palo Metalico 1,40",
    "price": 8500,
    "image": "https://picsum.photos/seed/prod_132_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_132_1/600/600",
      "https://picsum.photos/seed/prod_132_2/600/600",
      "https://picsum.photos/seed/prod_132_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_132_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 89,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 8500
    },
    "description": "Palo Metalico 1,40 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p133",
    "name": "Palo Metalico 1.20",
    "price": 7500,
    "originalPrice": 9375,
    "image": "https://picsum.photos/seed/prod_133_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_133_1/600/600",
      "https://picsum.photos/seed/prod_133_2/600/600",
      "https://picsum.photos/seed/prod_133_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_133_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 130,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7500
    },
    "description": "Palo Metalico 1.20 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p134",
    "name": "Pañitos BABY CHIQUIS",
    "price": 7500,
    "image": "https://picsum.photos/seed/prod_134_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_134_1/600/600",
      "https://picsum.photos/seed/prod_134_2/600/600",
      "https://picsum.photos/seed/prod_134_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_134_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 171,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 7500
    },
    "description": "Pañitos BABY CHIQUIS con fórmula especializada de BABY CHIQUIS. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p135",
    "name": "Paño Abrasivo(verde)",
    "price": 700,
    "image": "https://picsum.photos/seed/prod_135_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_135_1/600/600",
      "https://picsum.photos/seed/prod_135_2/600/600",
      "https://picsum.photos/seed/prod_135_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_135_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 212,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 700
    },
    "description": "Paño Abrasivo(verde) con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p136",
    "name": "Paños Multiusos WYPALL",
    "price": 43000,
    "image": "https://picsum.photos/seed/prod_136_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_136_1/600/600",
      "https://picsum.photos/seed/prod_136_2/600/600",
      "https://picsum.photos/seed/prod_136_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_136_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 253,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 43000
    },
    "description": "Paños Multiusos WYPALL con fórmula especializada de WYPALL. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p137",
    "name": "Paños Multiusos (morado) EBRAND",
    "price": 25000,
    "originalPrice": 31250,
    "image": "https://picsum.photos/seed/prod_137_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_137_1/600/600",
      "https://picsum.photos/seed/prod_137_2/600/600",
      "https://picsum.photos/seed/prod_137_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_137_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 294,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 25000
    },
    "description": "Paños Multiusos (morado) EBRAND con fórmula especializada de EBRAND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p138",
    "name": "Paños Multiusos (negro) EBRAND",
    "price": 36500,
    "image": "https://picsum.photos/seed/prod_138_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_138_1/600/600",
      "https://picsum.photos/seed/prod_138_2/600/600",
      "https://picsum.photos/seed/prod_138_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_138_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 335,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 36500
    },
    "description": "Paños Multiusos (negro) EBRAND con fórmula especializada de EBRAND. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p139",
    "name": "Pañuelos KLEENEX",
    "price": 13500,
    "image": "https://picsum.photos/seed/prod_139_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_139_1/600/600",
      "https://picsum.photos/seed/prod_139_2/600/600",
      "https://picsum.photos/seed/prod_139_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_139_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 376,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13500
    },
    "description": "Pañuelos KLEENEX con fórmula especializada de KLEENEX. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p140",
    "name": "Papel SCOTT",
    "price": 2500,
    "image": "https://picsum.photos/seed/prod_140_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_140_1/600/600",
      "https://picsum.photos/seed/prod_140_2/600/600",
      "https://picsum.photos/seed/prod_140_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_140_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 417,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Papel SCOTT con fórmula especializada de SCOTT. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p141",
    "name": "Papel Paca X 30 SCOTT",
    "price": 60000,
    "originalPrice": 75000,
    "image": "https://picsum.photos/seed/prod_141_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_141_1/600/600",
      "https://picsum.photos/seed/prod_141_2/600/600",
      "https://picsum.photos/seed/prod_141_3/600/600"
    ],
    "imagesByVariant": {
      "Paca x 30": "https://picsum.photos/seed/prod_141_std_Pacax30/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 458,
    "sizes": [
      "Paca x 30"
    ],
    "priceBySize": {
      "Paca x 30": 60000
    },
    "description": "Papel Paca X 30 SCOTT con fórmula especializada de SCOTT. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p142",
    "name": "Papelera PLASTIRED",
    "price": 13000,
    "image": "https://picsum.photos/seed/prod_142_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_142_1/600/600",
      "https://picsum.photos/seed/prod_142_2/600/600",
      "https://picsum.photos/seed/prod_142_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_142_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 99,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13000
    },
    "description": "Papelera PLASTIRED con fórmula especializada de PLASTIRED. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p143",
    "name": "Pastilla Azul",
    "price": 2800,
    "image": "https://picsum.photos/seed/prod_143_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_143_1/600/600",
      "https://picsum.photos/seed/prod_143_2/600/600",
      "https://picsum.photos/seed/prod_143_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_143_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.7,
    "sold": 140,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2800
    },
    "description": "Pastilla Azul con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p144",
    "name": "Recogedor SMART",
    "price": 4800,
    "image": "https://picsum.photos/seed/prod_144_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_144_1/600/600",
      "https://picsum.photos/seed/prod_144_2/600/600",
      "https://picsum.photos/seed/prod_144_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_144_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 181,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Recogedor SMART con fórmula especializada de SMART. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p145",
    "name": "Servilletas FAVORITA",
    "price": 4800,
    "originalPrice": 6000,
    "image": "https://picsum.photos/seed/prod_145_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_145_1/600/600",
      "https://picsum.photos/seed/prod_145_2/600/600",
      "https://picsum.photos/seed/prod_145_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_145_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 222,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Servilletas FAVORITA con fórmula especializada de FAVORITA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p146",
    "name": "Tapabocas (azul) UKA",
    "price": 13000,
    "image": "https://picsum.photos/seed/prod_146_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_146_1/600/600",
      "https://picsum.photos/seed/prod_146_2/600/600",
      "https://picsum.photos/seed/prod_146_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_146_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 263,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 13000
    },
    "description": "Tapabocas (azul) UKA con fórmula especializada de UKA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p147",
    "name": "Tapabocas (negro) UKA",
    "price": 15000,
    "image": "https://picsum.photos/seed/prod_147_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_147_1/600/600",
      "https://picsum.photos/seed/prod_147_2/600/600",
      "https://picsum.photos/seed/prod_147_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_147_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 304,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 15000
    },
    "description": "Tapabocas (negro) UKA con fórmula especializada de UKA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p148",
    "name": "Toalla Cocina Multiusos FAVORITAS",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_148_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_148_1/600/600",
      "https://picsum.photos/seed/prod_148_2/600/600",
      "https://picsum.photos/seed/prod_148_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_148_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 345,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Toalla Cocina Multiusos FAVORITAS con fórmula especializada de FAVORITAS. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p149",
    "name": "Toalla Cocina Multiusos FAMILIA",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/prod_149_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_149_1/600/600",
      "https://picsum.photos/seed/prod_149_2/600/600",
      "https://picsum.photos/seed/prod_149_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_149_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.6,
    "sold": 386,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Toalla Cocina Multiusos FAMILIA con fórmula especializada de FAMILIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p150",
    "name": "Toalla Cocina Multiusos X3 FAVORITAS",
    "price": 9500,
    "image": "https://picsum.photos/seed/prod_150_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_150_1/600/600",
      "https://picsum.photos/seed/prod_150_2/600/600",
      "https://picsum.photos/seed/prod_150_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_150_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 427,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9500
    },
    "description": "Toalla Cocina Multiusos X3 FAVORITAS con fórmula especializada de FAVORITAS. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p151",
    "name": "Toalla De Papel Tipo Z ELITE",
    "price": 6400,
    "image": "https://picsum.photos/seed/prod_151_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_151_1/600/600",
      "https://picsum.photos/seed/prod_151_2/600/600",
      "https://picsum.photos/seed/prod_151_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_151_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 68,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6400
    },
    "description": "Toalla De Papel Tipo Z ELITE con fórmula especializada de ELITE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p152",
    "name": "Toalla De Papel Tipo Z SOFI",
    "price": 4800,
    "image": "https://picsum.photos/seed/prod_152_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_152_1/600/600",
      "https://picsum.photos/seed/prod_152_2/600/600",
      "https://picsum.photos/seed/prod_152_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_152_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 109,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4800
    },
    "description": "Toalla De Papel Tipo Z SOFI con fórmula especializada de SOFI. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p153",
    "name": "Toalla De Papel Tipo Z X24 ELITE",
    "price": 145000,
    "originalPrice": 181250,
    "image": "https://picsum.photos/seed/prod_153_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_153_1/600/600",
      "https://picsum.photos/seed/prod_153_2/600/600",
      "https://picsum.photos/seed/prod_153_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_153_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 150,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 145000
    },
    "description": "Toalla De Papel Tipo Z X24 ELITE con fórmula especializada de ELITE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p154",
    "name": "Toalla De Papel Tipo Z X24 SOFI",
    "price": 34400,
    "image": "https://picsum.photos/seed/prod_154_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_154_1/600/600",
      "https://picsum.photos/seed/prod_154_2/600/600",
      "https://picsum.photos/seed/prod_154_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_154_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 191,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 34400
    },
    "description": "Toalla De Papel Tipo Z X24 SOFI con fórmula especializada de SOFI. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p155",
    "name": "Toalla De Mano X6 ELITE",
    "price": 158000,
    "image": "https://picsum.photos/seed/prod_155_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_155_1/600/600",
      "https://picsum.photos/seed/prod_155_2/600/600",
      "https://picsum.photos/seed/prod_155_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_155_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.5,
    "sold": 232,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 158000
    },
    "description": "Toalla De Mano X6 ELITE con fórmula especializada de ELITE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p156",
    "name": "Trapero Escurridor LIAO 1A",
    "price": 35000,
    "image": "https://picsum.photos/seed/prod_156_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_156_1/600/600",
      "https://picsum.photos/seed/prod_156_2/600/600",
      "https://picsum.photos/seed/prod_156_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_156_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 273,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 35000
    },
    "description": "Trapero Escurridor LIAO 1A con fórmula especializada de LIAO 1A. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p157",
    "name": "Vasos Carton CHAMPION",
    "price": 5500,
    "originalPrice": 6875,
    "image": "https://picsum.photos/seed/prod_157_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_157_1/600/600",
      "https://picsum.photos/seed/prod_157_2/600/600",
      "https://picsum.photos/seed/prod_157_3/600/600"
    ],
    "imagesByVariant": {
      "5 OZ": "https://picsum.photos/seed/prod_157_std_5OZ/600/600",
      "6 OZ": "https://picsum.photos/seed/prod_157_std_6OZ/600/600",
      "7 OZ": "https://picsum.photos/seed/prod_157_std_7OZ/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 314,
    "sizes": [
      "5 OZ",
      "6 OZ",
      "7 OZ"
    ],
    "priceBySize": {
      "5 OZ": 5500,
      "6 OZ": 6000,
      "7 OZ": 7500
    },
    "description": "Vasos Carton CHAMPION con fórmula especializada de CHAMPION. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p158",
    "name": "Vasos Desechables CHAMPION",
    "price": 2600,
    "image": "https://picsum.photos/seed/prod_158_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_158_1/600/600",
      "https://picsum.photos/seed/prod_158_2/600/600",
      "https://picsum.photos/seed/prod_158_3/600/600"
    ],
    "imagesByVariant": {
      "Blanco__5 OZ": "https://picsum.photos/seed/prod_158_blanco_5OZ/600/600",
      "Blanco": "https://picsum.photos/seed/prod_158_blanco/600/600",
      "5 OZ": "https://picsum.photos/seed/prod_158_5OZ/600/600",
      "7 OZ": "https://picsum.photos/seed/prod_158_std_7OZ/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 437,
    "sizes": [
      "5 OZ",
      "7 OZ"
    ],
    "priceBySize": {
      "5 OZ": 2600,
      "7 OZ": 3000
    },
    "aromas": [
      "Blanco"
    ],
    "description": "Vasos Desechables CHAMPION con fórmula especializada de CHAMPION. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p159",
    "name": "Detergente En Polvo 3d DERSA",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_159_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_159_1/600/600",
      "https://picsum.photos/seed/prod_159_2/600/600",
      "https://picsum.photos/seed/prod_159_3/600/600"
    ],
    "imagesByVariant": {
      "500 GR": "https://picsum.photos/seed/prod_159_std_500GR/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 119,
    "sizes": [
      "500 GR"
    ],
    "description": "Detergente En Polvo 3d DERSA con fórmula especializada de DERSA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p160",
    "name": "Papel X 4 SCOTT",
    "price": 9500,
    "image": "https://picsum.photos/seed/prod_160_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_160_1/600/600",
      "https://picsum.photos/seed/prod_160_2/600/600",
      "https://picsum.photos/seed/prod_160_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_160_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 160,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 9500
    },
    "description": "Papel X 4 SCOTT con fórmula especializada de SCOTT. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p161",
    "name": "Pastillas Cloro X 3 BLAN Q",
    "price": 2500,
    "originalPrice": 3125,
    "image": "https://picsum.photos/seed/prod_161_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_161_1/600/600",
      "https://picsum.photos/seed/prod_161_2/600/600",
      "https://picsum.photos/seed/prod_161_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_161_std_Unidad/600/600"
    },
    "category": "Desinfección",
    "rating": 4.7,
    "sold": 201,
    "brandId": "br5",
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Pastillas Cloro X 3 BLAN Q con fórmula especializada de BLAN Q. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p162",
    "name": "Atomizador",
    "price": 2500,
    "image": "https://picsum.photos/seed/prod_162_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_162_1/600/600",
      "https://picsum.photos/seed/prod_162_2/600/600",
      "https://picsum.photos/seed/prod_162_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_162_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 242,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 2500
    },
    "description": "Atomizador con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p163",
    "name": "Toalla En Rollo X 2 Und SOFI",
    "price": 35000,
    "image": "https://picsum.photos/seed/prod_163_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_163_1/600/600",
      "https://picsum.photos/seed/prod_163_2/600/600",
      "https://picsum.photos/seed/prod_163_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_163_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 283,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 35000
    },
    "description": "Toalla En Rollo X 2 Und SOFI con fórmula especializada de SOFI. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p164",
    "name": "Crema Multiusos FROTEX",
    "price": 8500,
    "image": "https://picsum.photos/seed/prod_164_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_164_1/600/600",
      "https://picsum.photos/seed/prod_164_2/600/600",
      "https://picsum.photos/seed/prod_164_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_164_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.3,
    "sold": 324,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 8500
    },
    "description": "Crema Multiusos FROTEX con fórmula especializada de FROTEX. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p165",
    "name": "Guantes Calibre 25 Talla 7 MILENIO",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/prod_165_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_165_1/600/600",
      "https://picsum.photos/seed/prod_165_2/600/600",
      "https://picsum.photos/seed/prod_165_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_165_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 365,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 7 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p166",
    "name": "Guantes Calibre 25 Talla 7 1/2 MILENIO",
    "price": 4500,
    "image": "https://picsum.photos/seed/prod_166_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_166_1/600/600",
      "https://picsum.photos/seed/prod_166_2/600/600",
      "https://picsum.photos/seed/prod_166_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_166_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 406,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 7 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p167",
    "name": "Guantes Calibre 25 Talla 8 1/2 MILENIO",
    "price": 4500,
    "image": "https://picsum.photos/seed/prod_167_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_167_1/600/600",
      "https://picsum.photos/seed/prod_167_2/600/600",
      "https://picsum.photos/seed/prod_167_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_167_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 447,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 8 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p168",
    "name": "Guantes Calibre 25 Talla 9 MILENIO",
    "price": 4500,
    "image": "https://picsum.photos/seed/prod_168_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_168_1/600/600",
      "https://picsum.photos/seed/prod_168_2/600/600",
      "https://picsum.photos/seed/prod_168_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_168_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 88,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 9 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p169",
    "name": "Guantes Calibre 25 Talla 9 1/2 MILENIO",
    "price": 4500,
    "originalPrice": 5625,
    "image": "https://picsum.photos/seed/prod_169_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_169_1/600/600",
      "https://picsum.photos/seed/prod_169_2/600/600",
      "https://picsum.photos/seed/prod_169_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_169_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 129,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4500
    },
    "description": "Guantes Calibre 25 Talla 9 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p170",
    "name": "Guantes Calibre 35 Talla 7 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_170_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_170_1/600/600",
      "https://picsum.photos/seed/prod_170_2/600/600",
      "https://picsum.photos/seed/prod_170_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_170_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 170,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 7 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p171",
    "name": "Guantes Calibre 35 Talla 7 1/2 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_171_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_171_1/600/600",
      "https://picsum.photos/seed/prod_171_2/600/600",
      "https://picsum.photos/seed/prod_171_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_171_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 211,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 7 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p172",
    "name": "Guantes Calibre 35 Talla 8 1/2 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_172_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_172_1/600/600",
      "https://picsum.photos/seed/prod_172_2/600/600",
      "https://picsum.photos/seed/prod_172_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_172_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 252,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 8 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p173",
    "name": "Guantes Calibre 35 Talla 9 MILENIO",
    "price": 5700,
    "originalPrice": 7125,
    "image": "https://picsum.photos/seed/prod_173_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_173_1/600/600",
      "https://picsum.photos/seed/prod_173_2/600/600",
      "https://picsum.photos/seed/prod_173_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_173_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 293,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 9 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p174",
    "name": "Guantes Calibre 35 Talla 9 1/2 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_174_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_174_1/600/600",
      "https://picsum.photos/seed/prod_174_2/600/600",
      "https://picsum.photos/seed/prod_174_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_174_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 334,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 9 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p175",
    "name": "Papel X12 FAMILIA",
    "price": 27000,
    "image": "https://picsum.photos/seed/prod_175_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_175_1/600/600",
      "https://picsum.photos/seed/prod_175_2/600/600",
      "https://picsum.photos/seed/prod_175_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_175_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 375,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 27000
    },
    "description": "Papel X12 FAMILIA con fórmula especializada de FAMILIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p176",
    "name": "Guantes Calibre 35 Talla 10 MILENIO",
    "price": 5700,
    "image": "https://picsum.photos/seed/prod_176_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_176_1/600/600",
      "https://picsum.photos/seed/prod_176_2/600/600",
      "https://picsum.photos/seed/prod_176_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_176_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.8,
    "sold": 416,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 5700
    },
    "description": "Guantes Calibre 35 Talla 10 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p177",
    "name": "Guantes Domesticos Talla 7 1/2 MILENIO",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/prod_177_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_177_1/600/600",
      "https://picsum.photos/seed/prod_177_2/600/600",
      "https://picsum.photos/seed/prod_177_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_177_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 457,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 7 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p178",
    "name": "Guantes Domesticos Talla 8 MILENIO",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_178_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_178_1/600/600",
      "https://picsum.photos/seed/prod_178_2/600/600",
      "https://picsum.photos/seed/prod_178_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_178_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 98,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 8 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p179",
    "name": "Guantes Domesticos Talla 8 1/2 MILENIO",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_179_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_179_1/600/600",
      "https://picsum.photos/seed/prod_179_2/600/600",
      "https://picsum.photos/seed/prod_179_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_179_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 139,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 8 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p180",
    "name": "Guantes Domesticos Talla 9 MILENIO",
    "price": 4000,
    "image": "https://picsum.photos/seed/prod_180_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_180_1/600/600",
      "https://picsum.photos/seed/prod_180_2/600/600",
      "https://picsum.photos/seed/prod_180_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_180_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 180,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 9 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p181",
    "name": "Guantes Domesticos Talla 9 1/2 MILENIO",
    "price": 4000,
    "originalPrice": 5000,
    "image": "https://picsum.photos/seed/prod_181_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_181_1/600/600",
      "https://picsum.photos/seed/prod_181_2/600/600",
      "https://picsum.photos/seed/prod_181_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_181_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.6,
    "sold": 221,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4000
    },
    "description": "Guantes Domesticos Talla 9 1/2 MILENIO con fórmula especializada de MILENIO. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p182",
    "name": "Pastilla Oxigeno",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_182_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_182_1/600/600",
      "https://picsum.photos/seed/prod_182_2/600/600",
      "https://picsum.photos/seed/prod_182_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_182_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Nuevo",
    "rating": 4.7,
    "sold": 262,
    "sizes": [
      "Unidad"
    ],
    "description": "Pastilla Oxigeno con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p183",
    "name": "Pañitos Pequeñin",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_183_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_183_1/600/600",
      "https://picsum.photos/seed/prod_183_2/600/600",
      "https://picsum.photos/seed/prod_183_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_183_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 303,
    "sizes": [
      "Unidad"
    ],
    "description": "Pañitos Pequeñin con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p184",
    "name": "Palo Recogedor",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_184_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_184_1/600/600",
      "https://picsum.photos/seed/prod_184_2/600/600",
      "https://picsum.photos/seed/prod_184_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_184_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 344,
    "sizes": [
      "Unidad"
    ],
    "description": "Palo Recogedor con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p185",
    "name": "Pastilla Cloro X 6",
    "price": 5000,
    "originalPrice": 6250,
    "image": "https://picsum.photos/seed/prod_185_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_185_1/600/600",
      "https://picsum.photos/seed/prod_185_2/600/600",
      "https://picsum.photos/seed/prod_185_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_185_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 385,
    "sizes": [
      "Unidad"
    ],
    "description": "Pastilla Cloro X 6 con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p186",
    "name": "Esponja Doble Uso X 24 Und",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_186_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_186_1/600/600",
      "https://picsum.photos/seed/prod_186_2/600/600",
      "https://picsum.photos/seed/prod_186_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_186_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 426,
    "sizes": [
      "Unidad"
    ],
    "description": "Esponja Doble Uso X 24 Und con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p187",
    "name": "Crema Dental Triple Axion COLGATE",
    "price": 5000,
    "image": "https://picsum.photos/seed/prod_187_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_187_1/600/600",
      "https://picsum.photos/seed/prod_187_2/600/600",
      "https://picsum.photos/seed/prod_187_3/600/600"
    ],
    "imagesByVariant": {
      "75 ML": "https://picsum.photos/seed/prod_187_std_75ML/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.5,
    "sold": 67,
    "sizes": [
      "75 ML"
    ],
    "description": "Crema Dental Triple Axion COLGATE con fórmula especializada de COLGATE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p188",
    "name": "Papel X 4 Rollos ELITE",
    "price": 54000,
    "image": "https://picsum.photos/seed/prod_188_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_188_1/600/600",
      "https://picsum.photos/seed/prod_188_2/600/600",
      "https://picsum.photos/seed/prod_188_3/600/600"
    ],
    "imagesByVariant": {
      "Pack x 4 Rollos": "https://picsum.photos/seed/prod_188_std_Packx4Rollos/600/600"
    },
    "category": "Accesorios y Varios",
    "badge": "Oferta",
    "rating": 4.6,
    "sold": 108,
    "sizes": [
      "Pack x 4 Rollos"
    ],
    "priceBySize": {
      "Pack x 4 Rollos": 54000
    },
    "description": "Papel X 4 Rollos ELITE con fórmula especializada de ELITE. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p189",
    "name": "Papel Und FAMILIA",
    "price": 3000,
    "originalPrice": 3750,
    "image": "https://picsum.photos/seed/prod_189_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_189_1/600/600",
      "https://picsum.photos/seed/prod_189_2/600/600",
      "https://picsum.photos/seed/prod_189_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_189_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.7,
    "sold": 149,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 3000
    },
    "description": "Papel Und FAMILIA con fórmula especializada de FAMILIA. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p190",
    "name": "Jabon Manos Und PROTEX",
    "price": 4300,
    "image": "https://picsum.photos/seed/prod_190_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_190_1/600/600",
      "https://picsum.photos/seed/prod_190_2/600/600",
      "https://picsum.photos/seed/prod_190_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_190_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.8,
    "sold": 190,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 4300
    },
    "description": "Jabon Manos Und PROTEX con fórmula especializada de PROTEX. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p191",
    "name": "Jabon Manos X 6 PROTEX",
    "price": 23500,
    "image": "https://picsum.photos/seed/prod_191_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_191_1/600/600",
      "https://picsum.photos/seed/prod_191_2/600/600",
      "https://picsum.photos/seed/prod_191_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_191_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.9,
    "sold": 231,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 23500
    },
    "description": "Jabon Manos X 6 PROTEX con fórmula especializada de PROTEX. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p192",
    "name": "Esponja Brillo",
    "price": 6500,
    "image": "https://picsum.photos/seed/prod_192_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_192_1/600/600",
      "https://picsum.photos/seed/prod_192_2/600/600",
      "https://picsum.photos/seed/prod_192_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_192_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.3,
    "sold": 272,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 6500
    },
    "description": "Esponja Brillo con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
  },
  {
    "id": "p193",
    "name": "Bolsa Hermetica 14 X 12 Millar",
    "price": 59000,
    "originalPrice": 73750,
    "image": "https://picsum.photos/seed/prod_193_std/300/300",
    "images": [
      "https://picsum.photos/seed/prod_193_1/600/600",
      "https://picsum.photos/seed/prod_193_2/600/600",
      "https://picsum.photos/seed/prod_193_3/600/600"
    ],
    "imagesByVariant": {
      "Unidad": "https://picsum.photos/seed/prod_193_std_Unidad/600/600"
    },
    "category": "Accesorios y Varios",
    "rating": 4.4,
    "sold": 313,
    "sizes": [
      "Unidad"
    ],
    "priceBySize": {
      "Unidad": 59000
    },
    "description": "Bolsa Hermetica 14 X 12 Millar con fórmula especializada de N/D. Máxima eficiencia, rendimiento y calidad garantizada."
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
