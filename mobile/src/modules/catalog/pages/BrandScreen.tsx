import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { ArrowLeft, ShoppingCart, Search, Star } from 'lucide-react-native';
import { 
  getProductsByBrand, 
  getBrandById,
  formatPrice, 
  Product 
} from '../services/ProductService';
import { useCartStore } from '../../cart/store/useCartStore';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const COLUMN_WIDTH = (SCREEN_WIDTH - 48) / 2;

interface BrandScreenProps {
  brandId: string;
  navigateTo: (screen: string) => void;
  goBack: () => void;
  setSelectedProductId: (id: string) => void;
}

const CompactProductCard = ({ 
  item, 
  onPress 
}: { 
  item: Product; 
  onPress: (id: string) => void; 
}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => onPress(item.id)}
    className="bg-white rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100"
    style={{ width: COLUMN_WIDTH, elevation: 2 }}
  >
    <View style={{ width: COLUMN_WIDTH, height: COLUMN_WIDTH }}>
      <Image
        source={{ uri: item.image }}
        className="w-full h-full"
        resizeMode="cover"
      />
      {item.badge && (
        <View className="absolute top-2 left-2 bg-power-yellow px-2 py-0.5 rounded-md shadow-sm">
          <Text className="text-power-darkGreen text-[10px] font-black uppercase tracking-tighter">
            {item.badge}
          </Text>
        </View>
      )}
    </View>

    <View className="p-3">
      <Text 
        className="text-power-darkGreen text-xs font-bold mb-1" 
        numberOfLines={2}
      >
        {item.name}
      </Text>
      <View className="flex-row items-center mt-1">
        <Star size={12} color="#fbbf24" fill="#fbbf24" />
        <Text className="text-gray-500 text-xs ml-1 font-bold">
          {item.rating}
        </Text>
        <Text className="text-gray-300 mx-1 text-xs">|</Text>
        <Text className="text-gray-500 text-xs">
          {item.sold} vendidos
        </Text>
      </View>

      <View className="flex-row items-center justify-between mt-auto">
        <Text className="text-power-blue font-black text-sm">
          {formatPrice(item.price)}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export const BrandScreen = ({ 
  brandId, 
  navigateTo, 
  goBack, 
  setSelectedProductId 
}: BrandScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState<'none' | 'price_asc' | 'price_desc' | 'name_asc' | 'rating'>('none');

  const brand = useMemo(() => getBrandById(brandId), [brandId]);
  const brandProducts = useMemo(() => getProductsByBrand(brandId), [brandId]);
  const cartCount = useCartStore((state) => state.totalItems)();

  const displayedProducts = useMemo(() => {
    let result = [...brandProducts];

    // Paso A: Búsqueda
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Paso B: Ordenamiento
    switch (sortType) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return result;
  }, [brandProducts, searchQuery, sortType]);

  const SortChip = ({ label, type }: { label: string, type: typeof sortType }) => (
    <TouchableOpacity
      onPress={() => setSortType(sortType === type ? 'none' : type)}
      className={`px-4 py-2 rounded-full mr-2 border ${
        sortType === type 
          ? 'bg-power-blue/10 border-power-blue' 
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <Text className={`text-xs font-bold ${
        sortType === type ? 'text-power-blue' : 'text-power-darkGreen/60'
      }`}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-power-background">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Banner Panorámico con Header Integrado */}
      <View className="w-full h-48 md:h-56 overflow-hidden">
        <ImageBackground
          source={brand?.banner_url}
          className="w-full h-full"
          resizeMode="cover"
        >
          {/* Overlay Oscuro */}
          <View className="absolute inset-0 bg-black/40" />

          {/* Header Integrado en el Banner */}
          <View 
            className="flex-1 px-4 pb-4 justify-between"
            style={{ paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50 }}
          >
            <View className="flex-row items-center justify-between">
              <TouchableOpacity 
                onPress={goBack}
                className="p-2 bg-black/20 rounded-full"
              >
                <ArrowLeft color="white" size={24} strokeWidth={2.5} />
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => navigateTo('cart')}
                className="relative p-2 bg-black/20 rounded-full"
                activeOpacity={0.7}
              >
                <ShoppingCart color="white" size={24} strokeWidth={2} />
                {cartCount > 0 && (
                  <View className="absolute -top-0.5 -right-0.5 bg-power-lightGreen rounded-full w-5 h-5 items-center justify-center border-2 border-black/20">
                    <Text className="text-power-darkGreen text-[9px] font-black">
                      {cartCount}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            {/* Nombre de la Marca Centrado */}
            <View className="items-center mb-4">
              <Text className="text-white text-3xl font-black uppercase tracking-widest text-center shadow-lg">
                {brand?.name || 'Marca'}
              </Text>
              <View className="h-1 w-12 bg-power-lightGreen mt-1 rounded-full" />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Barra de Búsqueda y Filtros */}
      <View className="bg-white px-4 py-3 shadow-sm z-10">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 h-12">
          <Search size={20} color="#64748b" />
          <TextInput
            placeholder="Buscar en esta marca..."
            placeholderTextColor="#94a3b8"
            className="flex-1 ml-3 text-power-darkGreen font-semibold"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Chips de Ordenamiento */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-3"
          contentContainerStyle={{ paddingBottom: 2 }}
        >
          <SortChip label="Menor Precio" type="price_asc" />
          <SortChip label="Mayor Precio" type="price_desc" />
          <SortChip label="A - Z" type="name_asc" />
          <SortChip label="Mejor Puntuados" type="rating" />
        </ScrollView>
      </View>

      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CompactProductCard item={item} onPress={(id) => {
            setSelectedProductId(id);
            navigateTo('details');
          }} />
        )}
        contentContainerStyle={{ 
          padding: 16, 
          paddingBottom: 40,
          flexGrow: 1 
        }}
        columnWrapperStyle={{ 
          justifyContent: 'space-between' 
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pt-20">
            <View className="bg-gray-100 p-6 rounded-full mb-4">
              <Text className="text-4xl">📦</Text>
            </View>
            <Text className="text-power-darkGreen/50 font-bold text-center px-10">
              Esta marca aún no tiene productos disponibles.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default BrandScreen;
