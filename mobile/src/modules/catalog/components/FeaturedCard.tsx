import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Product, formatPrice } from '../services/ProductService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface FeaturedCardProps {
  item: Product;
  onPress: (id: string) => void;
}

export const FeaturedCard = ({ item, onPress }: FeaturedCardProps) => {
  const discountPct = item.originalPrice
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : null;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.id)}
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
        </View>
      </View>
    </TouchableOpacity>
  );
};
