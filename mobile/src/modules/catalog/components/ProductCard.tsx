import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Star } from 'lucide-react-native';
import { Product, formatPrice } from '../services/ProductService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 32) / 2;

interface ProductCardProps {
  item: Product;
  onPress: (id: string) => void;
}

export const ProductCard = ({ item, onPress }: ProductCardProps) => {
  const discountPct = item.originalPrice
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : null;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.id)}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      style={{ width: CARD_WIDTH, margin: 4 }}
    >
      {/* Imagen */}
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
    </TouchableOpacity>
  );
};
