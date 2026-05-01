import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Share,
  Animated,
} from 'react-native';
import { useCartStore } from '../../cart/store/useCartStore';
import { 
  ChevronLeft, 
  Share2, 
  Truck, 
  Minus, 
  Plus, 
  Star, 
  Info,
  ShoppingCart,
  CheckCircle 
} from 'lucide-react-native';
import Carousel from 'react-native-reanimated-carousel';
import { 
  Product, 
  formatPrice, 
  getProductById 
} from '../services/ProductService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface ProductDetailScreenProps {
  productId: string;
  goBack: () => void;
}

export const ProductDetailScreen = ({ productId, goBack }: ProductDetailScreenProps) => {
  const product = getProductById(productId);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedAroma, setSelectedAroma] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const isAddToCartDisabled = 
    (product?.sizes && product.sizes.length > 0 && !selectedSize) || 
    (product?.aromas && product.aromas.length > 0 && !selectedAroma);

  const slideAnim = useRef(new Animated.Value(-100)).current;

  const showToast = () => {
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 60,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAddToCart = () => {
    if (isAddToCartDisabled) return;
    
    addToCart(product!, selectedSize, selectedAroma, quantity);
    showToast();
    
    // Reiniciar estados para limpiar selección
    setSelectedSize('');
    setSelectedAroma('');
    setQuantity(1);
  };
  
  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Producto no encontrado</Text>
        <TouchableOpacity onPress={goBack} className="mt-4 bg-power-blue px-6 py-2 rounded-full">
          <Text className="text-white font-bold">Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const onShare = async () => {
    try {
      await Share.share({
        message: `¡Mira este producto en Power Andina: ${product?.name}!`,
        url: 'https://powerandina.com', // Placeholder URL
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  const currentPrice = product.priceBySize && selectedSize 
    ? (product.priceBySize[selectedSize] || product.price)
    : product.price;

  const productImages = product.images || [product.image];
  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - currentPrice) / product.originalPrice) * 100)
    : null;

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* ══════ HEADER TRANSPARENTE ══════ */}
      <View className="absolute top-0 left-0 right-0 z-50 flex-row justify-between items-center px-4" style={{ paddingTop: 50 }}>
        <TouchableOpacity 
          onPress={goBack}
          className="w-10 h-10 rounded-full bg-black/30 items-center justify-center"
        >
          <ChevronLeft color="white" size={24} strokeWidth={2.5} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={onShare}
          className="w-10 h-10 rounded-full bg-black/30 items-center justify-center"
        >
          <Share2 color="white" size={20} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* ══════ CARRUSEL DE IMÁGENES (1:1) ══════ */}
        <View style={{ height: SCREEN_WIDTH }}>
          <Carousel
            loop={productImages.length > 1}
            width={SCREEN_WIDTH}
            height={SCREEN_WIDTH}
            data={productImages}
            renderItem={({ item }) => (
              <Image 
                source={{ uri: item }} 
                className="w-full h-full"
                style={{ resizeMode: 'cover' }}
              />
            )}
          />
        </View>

        {/* ══════ INFORMACIÓN PRINCIPAL ══════ */}
        <View className="p-5">
          <View className="flex-row items-center mb-2">
            <Text className="text-power-blue font-bold text-xs uppercase tracking-wider bg-power-blue/5 px-2 py-1 rounded">
              {product.category}
            </Text>
            <View className="flex-row items-center ml-auto">
              <Star color="#FFD100" size={14} fill="#FFD100" />
              <Text className="text-xs font-bold text-gray-700 ml-1">{product.rating}</Text>
            </View>
          </View>

          <Text className="text-2xl font-black text-power-darkGreen mb-3 leading-tight">
            {product.name}
          </Text>

          <View className="flex-row items-center space-x-3 mb-6">
            <Text className="text-3xl font-black text-power-blue">
              {formatPrice(currentPrice)}
            </Text>
            {discountPct && (
              <View className="bg-power-lightGreen/20 px-2 py-1 rounded-lg">
                <Text className="text-power-lightGreen font-black text-xs">
                  -{discountPct}% OFF
                </Text>
              </View>
            )}
            {product.originalPrice && (
              <Text className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </Text>
            )}
          </View>

          {/* ══════ SELECTORES DE VARIANTES ══════ */}
          
          {/* Tamaño */}
          {product.sizes && product.sizes.length > 0 && (
            <View className="mb-6">
              <Text className="text-sm font-bold text-power-darkGreen mb-3">Tamaño</Text>
              <View className="flex-row flex-wrap">
                {product.sizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    className={`mr-3 mb-2 px-5 py-2.5 rounded-full border-2 ${
                      selectedSize === size 
                        ? 'border-power-blue bg-power-blue/5' 
                        : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    <Text className={`font-bold ${selectedSize === size ? 'text-power-blue' : 'text-gray-500'}`}>
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Aroma */}
          {product.aromas && product.aromas.length > 0 && (
            <View className="mb-6 -mx-5">
              <Text className="text-sm font-bold text-power-darkGreen mb-3 px-5">Aroma</Text>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
              >
                {product.aromas.map((aroma, index) => (
                  <TouchableOpacity
                    key={aroma}
                    onPress={() => setSelectedAroma(aroma)}
                    className={`mr-3 mb-2 px-5 py-2.5 rounded-full border-2 ${
                      selectedAroma === aroma 
                        ? 'border-power-blue bg-power-blue/5' 
                        : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    <Text className={`font-bold ${selectedAroma === aroma ? 'text-power-blue' : 'text-gray-500'}`}>
                      {aroma}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          <View className="h-[1px] bg-gray-100 w-full mb-6" />

          {/* ══════ DESCRIPCIÓN ══════ */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Info color="#0284c7" size={18} />
              <Text className="text-sm font-bold text-power-darkGreen ml-2">Descripción del producto</Text>
            </View>
            <Text className="text-gray-500 leading-6 text-sm">
              {product.description || 'No hay descripción disponible para este producto.'}
            </Text>
          </View>

          {/* ══════ ENVÍO ══════ */}
          <View className="bg-gray-50 p-4 rounded-2xl flex-row items-center">
            <View className="w-10 h-10 rounded-full bg-power-lightGreen/20 items-center justify-center mr-4">
              <Truck color="#10b981" size={20} />
            </View>
            <View>
              <Text className="text-sm font-bold text-power-darkGreen">Entrega de 3 a 5 días hábiles</Text>
              <Text className="text-[10px] text-gray-400">Envío nacional garantizado</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ══════ FOOTER FIJO DE ACCIÓN ══════ */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 pt-4 pb-8 border-t border-gray-100 flex-row items-center">
        {/* Cantidad */}
        <View className="flex-row items-center bg-gray-100 rounded-xl px-2 py-1 mr-4">
          <TouchableOpacity 
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 items-center justify-center"
          >
            <Minus color="#64748b" size={18} strokeWidth={3} />
          </TouchableOpacity>
          
          <Text className="text-lg font-black text-power-darkGreen mx-3 w-6 text-center">
            {quantity}
          </Text>
          
          <TouchableOpacity 
            onPress={() => setQuantity(quantity + 1)}
            className="w-8 h-8 items-center justify-center"
          >
            <Plus color="#64748b" size={18} strokeWidth={3} />
          </TouchableOpacity>
        </View>

        {/* Botón Comprar */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={handleAddToCart}
          disabled={isAddToCartDisabled}
          className={`flex-1 h-14 rounded-xl flex-row items-center justify-center shadow-lg ${
            isAddToCartDisabled ? 'bg-gray-300 shadow-none' : 'bg-power-blue shadow-power-blue/30'
          }`}
        >
          <ShoppingCart color={isAddToCartDisabled ? "#94a3b8" : "white"} size={20} style={{ marginRight: 8 }} />
          <Text className={`font-black text-base uppercase tracking-tight ${
            isAddToCartDisabled ? 'text-gray-500' : 'text-white'
          }`}>
            {isAddToCartDisabled ? 'Seleccionar opciones' : 'Agregar al carrito'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ══════ TOAST NOTIFICATION ══════ */}
      <Animated.View 
        className="absolute top-0 w-11/12 self-center bg-green-500 rounded-xl p-4 flex-row items-center shadow-lg z-50"
        style={{ 
          transform: [{ translateY: slideAnim }],
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >
        <CheckCircle color="white" size={24} />
        <Text className="text-white font-bold ml-3 text-base">Agregado al carrito</Text>
      </Animated.View>
    </View>
  );
};
