import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { ChevronLeft, ShoppingCart, Star } from 'lucide-react-native';
import { getExploreProducts, Product, formatPrice } from '../services/ProductService';
import { useCartStore } from '../../cart/store/useCartStore';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const COLUMN_WIDTH = (SCREEN_WIDTH - 32) / 2;

export const ExploreScreen = ({ 
  goBack, 
  navigateTo, 
  setSelectedProductId 
}: { 
  goBack: () => void;
  navigateTo: (screen: string) => void;
  setSelectedProductId: (id: string) => void;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const cartCount = useCartStore((state) => state.totalItems)();

  useEffect(() => {
    setProducts(getExploreProducts());
  }, []);

  const renderProduct = ({ item }: { item: Product }) => {
    const discountPct = item.originalPrice
      ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
      : null;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setSelectedProductId(item.id);
          navigateTo('details');
        }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4"
        style={{ width: COLUMN_WIDTH, marginHorizontal: 4 }}
      >
        {/* Imagen y Badge */}
        <View className="relative">
          <Image
            source={{ uri: item.image }}
            className="w-full"
            style={{ height: COLUMN_WIDTH * 0.9, resizeMode: 'cover' }}
          />
          
          {item.badge && (
            <View 
              className="absolute top-3 left-3 bg-power-yellow/90 px-2 py-1 rounded-lg shadow-sm"
              style={{ 
                backgroundColor: item.badge.includes('OFF') || item.badge.includes('PROMO') 
                  ? '#FFD100' // bg-power-yellow
                  : '#86efac' // bg-power-lightGreen (approx)
              }}
            >
              <Text className="text-[10px] text-power-darkGreen font-black uppercase">
                {item.badge}
              </Text>
            </View>
          )}
        </View>

        {/* Detalles */}
        <View className="p-3">
          <View className="flex-row items-center mb-1">
            <Star color="#FFD100" size={10} fill="#FFD100" />
            <Text className="text-[9px] text-gray-500 ml-1 font-bold">
              {item.rating} · {item.sold} vendidos
            </Text>
          </View>

          <Text 
            numberOfLines={2} 
            className="text-xs text-power-darkGreen font-bold leading-4 mb-2 h-8"
          >
            {item.name}
          </Text>

          <View>
            {item.originalPrice && (
              <Text className="text-[10px] text-gray-400 line-through">
                {formatPrice(item.originalPrice)}
              </Text>
            )}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm font-black text-power-blue">
                {formatPrice(item.price)}
              </Text>
              {discountPct && (
                <View className="bg-power-lightGreen/20 px-1.5 py-0.5 rounded-md">
                  <Text className="text-[9px] text-power-lightGreen font-black">
                    -{discountPct}%
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-power-background">
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View 
        className="bg-power-blue px-4 pb-5 shadow-lg z-50 flex-row items-center justify-between"
        style={{ paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50 }}
      >
        <TouchableOpacity 
          onPress={goBack}
          className="w-10 h-10 items-center justify-center bg-white/10 rounded-full"
        >
          <ChevronLeft color="white" size={24} strokeWidth={2.5} />
        </TouchableOpacity>

        <Text className="text-white text-lg font-black tracking-tight">
          Ofertas y Novedades
        </Text>

        <TouchableOpacity 
          onPress={() => navigateTo('cart')}
          className="w-10 h-10 items-center justify-center bg-white/10 rounded-full"
        >
          <ShoppingCart color="white" size={20} strokeWidth={2.5} />
          {cartCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-power-yellow w-4 h-4 rounded-full items-center justify-center">
              <Text className="text-[8px] font-black text-power-darkGreen">{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Grid List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderProduct}
        contentContainerStyle={{ padding: 12, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="mb-4 mt-2">
            <Text className="text-[10px] font-black text-power-darkGreen uppercase tracking-widest opacity-60">
              Descubre lo mejor de Power Andina
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
