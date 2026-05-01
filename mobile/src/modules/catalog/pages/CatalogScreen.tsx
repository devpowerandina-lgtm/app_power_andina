import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ListRenderItemInfo,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Search, ShoppingCart, Bell, LogOut, Star, Zap, X } from 'lucide-react-native';
import { ProductCard } from '../components/ProductCard';
import { FeaturedCard } from '../components/FeaturedCard';
import { signOut } from '../../auth/services/AuthService';
import {
  categories,
  featuredProducts,
  catalogProducts,
  promotionalBanners,
  formatPrice,
  Product,
  Category,
  PromotionalBanner,
} from '../services/ProductService';
import { useCartStore } from '../../cart/store/useCartStore';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 32) / 2; // 2 columnas con padding lateral
const ITEM_WIDTH = SCREEN_WIDTH * 0.85;
const MARGIN = 8; // Correspondiente a mx-2

// ────────────────────────────────────────────────────────────
// SUB-COMPONENTES
// ────────────────────────────────────────────────────────────



/** Ícono circular de categoría */
const CategoryChip = ({ item, onPress }: { item: Category; onPress: (id: string) => void }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => onPress(item.id)}
    className="items-center mr-4 w-16"
  >
    <View
      className="w-14 h-14 rounded-full items-center justify-center mb-1.5 shadow-sm"
      style={{ backgroundColor: item.color }}
    >
      <Text className="text-2xl">{item.icon}</Text>
    </View>
    <Text
      numberOfLines={1}
      className="text-[10px] text-power-darkGreen text-center font-bold uppercase tracking-tight"
    >
      {item.name}
    </Text>
  </TouchableOpacity>
);

/** Contenido del Banner (Separado para reutilización) */
/** Contenido del Banner Premium e Interactivo */
const PromotionBannerContent = ({ 
  item, 
  onPress 
}: { 
  item: PromotionalBanner;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      onPress={onPress}
      className="rounded-2xl overflow-hidden h-full shadow-xl"
    >
      {/* Imagen de fondo 16:9 resizeMode="cover" */}
      {item.image && (
        <Image
          source={{ uri: item.image }}
          className="absolute inset-0 w-full h-full"
          style={{ resizeMode: 'cover' }}
        />
      )}
      
      {/* Gradiente Oscuro Overlay */}
      <View className="absolute inset-0 bg-black/30 rounded-2xl" />

      {/* Badge Exclusivo (Arriba Izquierda) - Efecto Cristal */}
      {item.badgeText && (
        <View className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1">
          <Text className="text-[10px] text-white font-bold uppercase tracking-wider">
            {item.badgeText}
          </Text>
        </View>
      )}

      {/* Textos Promocionales (Abajo Izquierda) */}
      <View className="absolute bottom-4 left-4 right-24">
        <Text className="text-white text-xl font-bold leading-tight" numberOfLines={2}>
          {item.title}
        </Text>
        <Text className="text-white/80 text-sm font-medium mt-0.5" numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>

      {/* Botón de Acción (Abajo Derecha) */}
      <View className="bg-power-lightGreen px-4 py-2 rounded-full absolute bottom-4 right-4 shadow-md">
        <Text className="text-white text-[11px] font-semibold">
          Ver oferta
        </Text>
      </View>
    </TouchableOpacity>
  );
};

/** Carrusel de Promociones con Loop Infinito Real */
/** Carrusel de Promociones con Loop Infinito Real */
const PromotionalCarousel = ({ 
  navigateTo, 
  setSelectedProductId, 
  setSelectedCategory 
}: { 
  navigateTo: (screen: string) => void;
  setSelectedProductId: (id: string) => void;
  setSelectedCategory: (id: string) => void;
}) => {
  const handlePress = (item: PromotionalBanner) => {
    if (item.targetProductId) {
      setSelectedProductId(item.targetProductId);
      navigateTo('details');
    } else if (item.targetCategoryId) {
      setSelectedCategory(item.targetCategoryId);
      navigateTo('category');
    }
  };

  return (
    <Carousel
      loop
      width={SCREEN_WIDTH}
      height={SCREEN_WIDTH * 0.56} // Proporción 16:9 aprox
      autoPlay={true}
      autoPlayInterval={4000}
      data={promotionalBanners}
      scrollAnimationDuration={1000}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.92,
        parallaxScrollingOffset: 45,
      }}
      renderItem={({ item }) => (
        <View className="px-4 h-full">
          <PromotionBannerContent 
            item={item} 
            onPress={() => handlePress(item)} 
          />
        </View>
      )}
    />
  );
};
import { useMemo } from 'react';

// ────────────────────────────────────────────────────────────
// PANTALLA PRINCIPAL
// ────────────────────────────────────────────────────────────
export const CatalogScreen = ({ 
  navigateTo,
  goBack,
  setSelectedProductId,
  setSelectedCategory,
}: { 
  navigateTo: (screen: string) => void;
  goBack: () => void;
  setSelectedProductId: (id: string) => void;
  setSelectedCategory: (id: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const addToCart = useCartStore((state) => state.addToCart);
  const cartCount = useCartStore((state) => state.totalItems)();

  // Filtrado de productos
  const displayedProducts = useMemo(() => {
    if (!searchQuery) return catalogProducts;
    return catalogProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [catalogProducts, searchQuery]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // ── ListHeaderComponent: Banners y secciones promocionales ──
  const ListHeader = () => {
    if (searchQuery.length > 0) {
      return (
        <View className="px-4 py-6">
          <Text className="text-gray-500 font-bold text-sm">
            Resultados para: <Text className="text-power-blue">"{searchQuery}"</Text>
          </Text>
        </View>
      );
    }

    return (
      <View>
        {/* ══════ CARRUSEL PROMOCIONAL ══════ */}
        <View className="mt-5">
          <PromotionalCarousel 
            navigateTo={navigateTo}
            setSelectedProductId={setSelectedProductId}
            setSelectedCategory={setSelectedCategory}
          />
        </View>

        {/* ══════ CATEGORÍAS (Quick Access) ══════ */}
        <View className="mt-6">
          <Text className="text-sm font-black text-power-darkGreen px-4 mb-3 uppercase tracking-tighter">
            Nuestras Categorías
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          >
            {categories.map((cat) => (
              <CategoryChip 
                key={cat.id} 
                item={cat} 
                onPress={(id) => {
                  setSelectedCategory(id);
                  navigateTo('category');
                }}
              />
            ))}
          </ScrollView>
        </View>

        {/* ══════ PRODUCTOS DESTACADOS ══════ */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between px-4 mb-3">
            <Text className="text-sm font-black text-power-darkGreen uppercase tracking-tighter">
              ⭐ Recomendados
            </Text>
            <TouchableOpacity onPress={() => navigateTo('explore')}>
              <Text className="text-xs color-power-lightBlue font-bold">
                Explorar todo
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={featuredProducts}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => <FeaturedCard item={item} onPress={(id) => {
              setSelectedProductId(id);
              navigateTo('details');
            }} />}
            scrollEnabled
            nestedScrollEnabled
          />
        </View>

        {/* Título del grid principal */}
        <View className="px-4 mt-8 mb-3 flex-row items-center justify-between">
          <Text className="text-sm font-black text-power-darkGreen uppercase tracking-tighter">
            🛒 Catálogo de Productos
          </Text>
          <View className="bg-gray-100 px-2 py-0.5 rounded-full">
            <Text className="text-[10px] text-gray-500 font-bold">
              {catalogProducts.length} ÍTEMS
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard 
        item={item} 
        onPress={(id) => {
          setSelectedProductId(id);
          navigateTo('details');
        }} 
      />
    ),
    [navigateTo, setSelectedProductId]
  );

  return (
    <SafeAreaView className="flex-1 bg-power-background">
      <StatusBar barStyle="light-content" />

      {/* ══════ FIXED HEADER BAR ══════ */}
      <View
        className="bg-power-blue px-4 pb-4 shadow-lg z-50"
        style={{ paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50 }}
      >
        {/* Fila superior: logo + íconos */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1">
            <Text className="text-power-lightGreen text-[10px] font-black uppercase tracking-[2px] mb-0.5">
              POWER ANDINA
            </Text>
            <Text className="text-white text-xl font-black">
              Tienda Oficial
            </Text>
          </View>
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity onPress={() => navigateTo('notifications')}>
              <Bell color="#fff" size={22} strokeWidth={2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} className="bg-white/10 p-1.5 rounded-lg">
              <LogOut color="#fff" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Barra de búsqueda */}
        <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow-sm">
          <Search color="#94a3b8" size={18} strokeWidth={2.5} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="¿Qué estás buscando hoy?"
            placeholderTextColor="#94a3b8"
            className="flex-1 ml-3 text-sm text-power-darkGreen font-medium p-0"
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <X color="#94a3b8" size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader />}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20 px-10">
            <Search color="#cbd5e1" size={64} strokeWidth={1} />
            <Text className="text-gray-500 text-center font-bold mt-4 text-base">
              No encontramos productos que coincidan con tu búsqueda.
            </Text>
            <TouchableOpacity 
              onPress={() => setSearchQuery('')}
              className="mt-4 bg-power-blue/10 px-6 py-2 rounded-full"
            >
              <Text className="text-power-blue font-bold">Limpiar búsqueda</Text>
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        windowSize={5}
      />

      {/* ══════ CARRITO FLOTANTE (FAB) ══════ */}
      <View 
        className="absolute bottom-8 w-full items-center justify-center pointer-events-box-none"
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigateTo('cart')}
          className="bg-power-blue rounded-full p-5 shadow-lg border border-white/20 items-center justify-center"
          style={{ elevation: 5 }}
        >
          <ShoppingCart color="white" size={30} strokeWidth={2.5} />
          
          {/* Badge (Indicador) */}
          <View 
            className="absolute -top-1 -right-1 bg-red-500 rounded-full w-6 h-6 items-center justify-center border-2 border-white shadow-md"
          >
            <Text className="text-white text-[11px] font-black">
              {cartCount}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
