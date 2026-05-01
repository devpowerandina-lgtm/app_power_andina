import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import { 
  getProductsByCategory, 
  categories, 
  formatPrice, 
  Product 
} from '../services/ProductService';
import { useCartStore } from '../../cart/store/useCartStore';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const COLUMN_WIDTH = (SCREEN_WIDTH - 48) / 2;

interface CategoryScreenProps {
  categoryId: string;
  onBack: () => void;
  onNavigateToDetails: (id: string) => void;
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
      <View className="flex-row items-center justify-between mt-auto">
        <Text className="text-power-blue font-black text-sm">
          {formatPrice(item.price)}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export const CategoryScreen = ({ 
  categoryId, 
  onBack, 
  onNavigateToDetails 
}: CategoryScreenProps) => {
  const category = useMemo(() => categories.find((c) => c.id === categoryId), [categoryId]);
  const products = useMemo(() => getProductsByCategory(categoryId), [categoryId]);
  const cartCount = useCartStore((state) => state.totalItems)();

  return (
    <SafeAreaView className="flex-1 bg-power-background">
      <StatusBar barStyle="light-content" />

      <View
        className="bg-power-blue px-4 pb-4 shadow-md flex-row items-center justify-between"
        style={{ paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50 }}
      >
        <TouchableOpacity 
          onPress={onBack}
          className="p-2 -ml-2"
        >
          <ArrowLeft color="white" size={24} strokeWidth={2.5} />
        </TouchableOpacity>

        <Text className="text-white text-lg font-black uppercase tracking-tight flex-1 text-center">
          {category?.name || 'Categoría'}
        </Text>

        <View className="relative">
          <ShoppingCart color="white" size={24} strokeWidth={2} />
          {cartCount > 0 && (
            <View className="absolute -top-1.5 -right-1.5 bg-power-lightGreen rounded-full w-5 h-5 items-center justify-center border-2 border-power-blue">
              <Text className="text-power-darkGreen text-[9px] font-black">
                {cartCount}
              </Text>
            </View>
          )}
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CompactProductCard item={item} onPress={onNavigateToDetails} />
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
              Pronto agregaremos productos a esta categoría
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
