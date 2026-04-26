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
import { Search, ShoppingCart, Bell, LogOut, Plus, Star, Zap } from 'lucide-react-native';
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

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 32) / 2; // 2 columnas con padding lateral
const ITEM_WIDTH = SCREEN_WIDTH * 0.85;
const MARGIN = 8; // Correspondiente a mx-2

// ────────────────────────────────────────────────────────────
// SUB-COMPONENTES
// ────────────────────────────────────────────────────────────

/** Tarjeta de producto para el grid de 2 columnas */
const ProductCard = ({ item, onAddToCart }: { item: Product; onAddToCart: (id: string) => void }) => {
  const discountPct =
    item.originalPrice
      ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
      : null;

  return (
    <View
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      style={{ width: CARD_WIDTH, margin: 4 }}
    >
      {/* Imagen + botón flotante */}
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          className="w-full"
          style={{ height: CARD_WIDTH * 0.85, resizeMode: 'cover' }}
        />

        {/* Badge (Nuevo / Oferta) */}
        {item.badge && (
          <View
            className={`absolute top-2 left-2 px-2 py-0.5 rounded-md ${
              item.badge === 'Oferta' ? 'bg-red-500' : 'bg-power-lightBlue'
            }`}
          >
            <Text className="text-white text-[10px] font-bold">
              {item.badge}
            </Text>
          </View>
        )}

        {/* Botón de acción rápida — flotante en esquina inferior derecha */}
        <TouchableOpacity
          onPress={() => onAddToCart(item.id)}
          activeOpacity={0.8}
          className="absolute -bottom-4 right-3 w-9 h-9 rounded-full bg-power-lightBlue items-center justify-center shadow-lg"
          style={{ elevation: 5 }}
        >
          <Plus color="#fff" size={20} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Textos */}
      <View className="p-2.5 pt-5">
        {/* Estrellas */}
        <View className="flex-row items-center mb-1">
          <Star color="#FFD100" size={11} fill="#FFD100" />
          <Text className="text-[10px] text-gray-500 ml-1">
            {item.rating} · {item.sold} vendidos
          </Text>
        </View>

        {/* Nombre */}
        <Text
          numberOfLines={2}
          className="text-xs text-power-darkGreen font-medium leading-4 mb-1.5 h-8"
        >
          {item.name}
        </Text>

        {/* Precio tachado */}
        {item.originalPrice && (
          <Text className="text-[10px] text-gray-400 line-through">
            {formatPrice(item.originalPrice)}
          </Text>
        )}

        {/* Precio principal */}
        <View className="flex-row items-baseline space-x-1">
          <Text className="text-base font-extrabold text-power-blue">
            {formatPrice(item.price)}
          </Text>
          {discountPct && (
            <Text className="text-[10px] text-power-lightGreen font-bold">
              -{discountPct}%
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

/** Tarjeta de producto destacado (FlatList horizontal) */
const FeaturedCard = ({ item }: { item: Product }) => {
  const discountPct =
    item.originalPrice
      ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
      : null;

  return (
    <View
      className="bg-white rounded-2xl overflow-hidden shadow-md mr-3 border border-gray-50"
      style={{ width: SCREEN_WIDTH * 0.65 }}
    >
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          className="w-full h-32"
          style={{ resizeMode: 'cover' }}
        />
        {item.badge && (
          <View
            className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg ${
              item.badge === 'Oferta' ? 'bg-red-500' : 'bg-power-lightBlue'
            }`}
          >
            <Text className="text-white text-[11px] font-extrabold uppercase tracking-tight">
              {item.badge}
            </Text>
          </View>
        )}
      </View>
      <View className="p-3">
        <Text numberOfLines={2} className="text-sm text-power-darkGreen font-semibold mb-1 h-10">
          {item.name}
        </Text>
        <View className="flex-row items-center justify-between mt-1">
          <View>
            {item.originalPrice && (
              <Text className="text-[10px] text-gray-400 line-through">
                {formatPrice(item.originalPrice)}
              </Text>
            )}
            <View className="flex-row items-center space-x-1.5">
              <Text className="text-lg font-black text-power-blue">
                {formatPrice(item.price)}
              </Text>
              {discountPct && (
                <Text className="text-xs text-power-lightGreen font-bold">
                  -{discountPct}%
                </Text>
              )}
            </View>
          </View>
          <TouchableOpacity className="bg-power-yellow p-2 rounded-full shadow-sm">
            <Plus color="#113321" size={18} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

/** Ícono circular de categoría */
const CategoryChip = ({ item }: { item: Category }) => (
  <TouchableOpacity
    activeOpacity={0.7}
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
const PromotionBannerContent = ({ item }: { item: PromotionalBanner }) => {
  const isYellow = item.bgColor === 'bg-power-yellow';
  const textColor = isYellow ? 'text-power-darkGreen' : 'text-white';
  const subtitleColor = isYellow ? 'text-power-darkGreen/70' : 'text-power-lightGreen';
  const zapColor = isYellow ? '#113321' : '#FFD100';

  return (
    <View className={`rounded-2xl overflow-hidden h-32 ${item.bgColor} flex-row items-center px-5 shadow-lg w-full`}>
      {/* Círculos decorativos de fondo */}
      <View 
        className={`absolute -right-8 -top-8 w-40 h-40 rounded-full ${isYellow ? 'bg-power-blue' : 'bg-power-lightGreen'} opacity-20`} 
      />
      <View className="absolute right-5 -bottom-10 w-28 h-28 rounded-full bg-white opacity-10" />

      {/* Texto banner */}
      <View className="flex-1">
        <View className={`${isYellow ? 'bg-power-blue' : 'bg-power-yellow'} rounded-md px-2 py-0.5 self-start mb-1.5 shadow-sm`}>
          <Text className={`${isYellow ? 'text-white' : 'text-power-darkGreen'} text-[10px] font-black tracking-widest`}>
            🔥 EXCLUSIVO
          </Text>
        </View>
        <Text className={`${textColor} text-xl font-black leading-tight`}>
          {item.title}
        </Text>
        <Text className={`${subtitleColor} text-sm font-semibold`}>
          {item.subtitle}
        </Text>
      </View>

      {/* Ícono decorativo */}
      <View className="w-14 h-14 rounded-full bg-white/10 items-center justify-center ml-3">
        <Zap color={zapColor} size={28} fill={zapColor} />
      </View>
    </View>
  );
};

/** Carrusel de Promociones con Autoplay y Peeking Infinito */
const PromotionalCarousel = () => {
  const flatListRef = useRef<FlatList>(null);

  // Truco de lista virtualmente infinita (150 elementos ligeros)
  const infiniteData = Array(50).fill(promotionalBanners).flat();
  const INITIAL_INDEX = promotionalBanners.length * 25; // Empezamos en el medio para permitir scroll atrás

  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_WIDTH + MARGIN * 2,
    offset: (ITEM_WIDTH + MARGIN * 2) * index,
    index,
  });

  return (
    <FlatList
      ref={flatListRef}
      data={infiniteData}
      keyExtractor={(_, index) => `banner-${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH + MARGIN * 2}
      initialScrollIndex={INITIAL_INDEX}
      contentContainerStyle={{
        paddingHorizontal: (SCREEN_WIDTH - (ITEM_WIDTH + MARGIN * 2)) / 2 + MARGIN,
      }}
      getItemLayout={getItemLayout}
      renderItem={({ item }) => (
        <View style={{ width: ITEM_WIDTH }} className="mx-2">
          <PromotionBannerContent item={item} />
        </View>
      )}
    />
  );
};

// ────────────────────────────────────────────────────────────
// PANTALLA PRINCIPAL
// ────────────────────────────────────────────────────────────
export const CatalogScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleAddToCart = useCallback((id: string) => {
    setCartCount((c) => c + 1);
  }, []);

  // ── ListHeaderComponent: todo lo que va ANTES del grid ──
  const ListHeader = () => (
    <View>
      {/* ══════ HEADER BAR ══════ */}
      <View
        className="bg-power-blue px-4 pb-4 shadow-lg"
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
            {/* Carrito */}
            <TouchableOpacity className="relative">
              <ShoppingCart color="#fff" size={22} strokeWidth={2.5} />
              {cartCount > 0 && (
                <View className="absolute -top-1.5 -right-1.5 bg-power-yellow rounded-full w-4.5 h-4.5 items-center justify-center border-2 border-power-blue">
                  <Text className="text-power-darkGreen text-[9px] font-black">
                    {cartCount > 9 ? '9+' : cartCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            {/* Notificaciones */}
            <TouchableOpacity>
              <Bell color="#fff" size={22} strokeWidth={2} />
            </TouchableOpacity>
            {/* Logout */}
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
          />
        </View>
      </View>

      {/* ══════ CARRUSEL PROMOCIONAL ══════ */}
      <View className="mt-5">
        <PromotionalCarousel />
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
            <CategoryChip key={cat.id} item={cat} />
          ))}
        </ScrollView>
      </View>

      {/* ══════ PRODUCTOS DESTACADOS ══════ */}
      <View className="mt-6">
        <View className="flex-row items-center justify-between px-4 mb-3">
          <Text className="text-sm font-black text-power-darkGreen uppercase tracking-tighter">
            ⭐ Recomendados
          </Text>
          <TouchableOpacity>
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
          renderItem={({ item }) => <FeaturedCard item={item} />}
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

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => (
      <ProductCard item={item} onAddToCart={handleAddToCart} />
    ),
    [handleAddToCart]
  );

  return (
    <SafeAreaView className="flex-1 bg-power-background">
      <StatusBar barStyle="light-content" />

      <FlatList
        data={catalogProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={{ paddingBottom: 40 }}
        columnWrapperStyle={{ paddingHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        windowSize={5}
      />
    </SafeAreaView>
  );
};
