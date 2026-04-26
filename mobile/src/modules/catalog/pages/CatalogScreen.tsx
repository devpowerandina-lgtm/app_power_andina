import React, { useState, useCallback } from 'react';
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
  formatPrice,
  Product,
  Category,
} from '../services/ProductService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 32) / 2; // 2 columnas con padding lateral

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
      style={{
        width: CARD_WIDTH,
        margin: 4,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      }}
    >
      {/* Imagen + botón flotante */}
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: CARD_WIDTH * 0.85, resizeMode: 'cover' }}
        />

        {/* Badge (Nuevo / Oferta) */}
        {item.badge && (
          <View
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: item.badge === 'Oferta' ? '#ef4444' : '#0284c7',
              borderRadius: 6,
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 11, fontWeight: '700' }}>
              {item.badge}
            </Text>
          </View>
        )}

        {/* Botón de acción rápida — flotante en esquina inferior derecha */}
        <TouchableOpacity
          onPress={() => onAddToCart(item.id)}
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            bottom: -16,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: '#0284c7',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            shadowColor: '#0284c7',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 6,
          }}
        >
          <Plus color="#fff" size={20} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Textos */}
      <View style={{ padding: 10, paddingTop: 22 }}>
        {/* Estrellas */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          <Star color="#f59e0b" size={12} fill="#f59e0b" />
          <Text style={{ fontSize: 11, color: '#6b7280', marginLeft: 3 }}>
            {item.rating} · {item.sold} vendidos
          </Text>
        </View>

        {/* Nombre */}
        <Text
          numberOfLines={2}
          style={{ fontSize: 13, color: '#1e293b', lineHeight: 18, marginBottom: 6 }}
        >
          {item.name}
        </Text>

        {/* Precio tachado */}
        {item.originalPrice && (
          <Text style={{ fontSize: 11, color: '#9ca3af', textDecorationLine: 'line-through' }}>
            {formatPrice(item.originalPrice)}
          </Text>
        )}

        {/* Precio principal */}
        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: '800', color: '#0f172a' }}>
            {formatPrice(item.price)}
          </Text>
          {discountPct && (
            <Text style={{ fontSize: 12, color: '#16a34a', fontWeight: '700' }}>
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
      style={{
        width: SCREEN_WIDTH * 0.62,
        marginRight: 12,
        backgroundColor: '#fff',
        borderRadius: 14,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      }}
    >
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 130, resizeMode: 'cover' }}
        />
        {item.badge && (
          <View
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: item.badge === 'Oferta' ? '#ef4444' : '#0284c7',
              borderRadius: 6,
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 11, fontWeight: '700' }}>
              {item.badge}
            </Text>
          </View>
        )}
      </View>
      <View style={{ padding: 10 }}>
        <Text numberOfLines={2} style={{ fontSize: 13, color: '#1e293b', marginBottom: 4 }}>
          {item.name}
        </Text>
        {item.originalPrice && (
          <Text style={{ fontSize: 11, color: '#9ca3af', textDecorationLine: 'line-through' }}>
            {formatPrice(item.originalPrice)}
          </Text>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#0f172a' }}>
            {formatPrice(item.price)}
          </Text>
          {discountPct && (
            <Text style={{ fontSize: 12, color: '#16a34a', fontWeight: '700' }}>
              -{discountPct}%
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

/** Ícono circular de categoría */
const CategoryChip = ({ item }: { item: Category }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{ alignItems: 'center', marginRight: 16, width: 68 }}
  >
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: item.color,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
      }}
    >
      <Text style={{ fontSize: 24 }}>{item.icon}</Text>
    </View>
    <Text
      numberOfLines={1}
      style={{ fontSize: 11, color: '#374151', textAlign: 'center', fontWeight: '500' }}
    >
      {item.name}
    </Text>
  </TouchableOpacity>
);

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
        style={{
          backgroundColor: '#0284c7',
          paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 44,
          paddingBottom: 12,
          paddingHorizontal: 16,
        }}
      >
        {/* Fila superior: logo + íconos */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#bae6fd', fontSize: 11, fontWeight: '600', letterSpacing: 1.5 }}>
              POWER ANDINA
            </Text>
            <Text style={{ color: '#fff', fontSize: 17, fontWeight: '800' }}>
              Catálogo
            </Text>
          </View>
          {/* Carrito */}
          <TouchableOpacity style={{ marginRight: 12, position: 'relative' }}>
            <ShoppingCart color="#fff" size={24} />
            {cartCount > 0 && (
              <View
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  backgroundColor: '#f59e0b',
                  borderRadius: 9,
                  width: 18,
                  height: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: '#fff', fontSize: 10, fontWeight: '800' }}>
                  {cartCount > 9 ? '9+' : cartCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          {/* Notificaciones */}
          <TouchableOpacity style={{ marginRight: 4 }}>
            <Bell color="#fff" size={24} />
          </TouchableOpacity>
          {/* Logout */}
          <TouchableOpacity onPress={handleSignOut} style={{ marginLeft: 8 }}>
            <LogOut color="#bae6fd" size={22} />
          </TouchableOpacity>
        </View>

        {/* Barra de búsqueda */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 9,
          }}
        >
          <Search color="#9ca3af" size={18} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar productos Power Andina..."
            placeholderTextColor="#9ca3af"
            style={{ flex: 1, marginLeft: 8, fontSize: 14, color: '#1e293b', padding: 0 }}
            returnKeyType="search"
          />
        </View>
      </View>

      {/* ══════ BANNER PROMOCIONAL ══════ */}
      <View style={{ paddingHorizontal: 12, paddingTop: 14 }}>
        <View
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            height: 120,
            backgroundColor: '#0369a1',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            elevation: 4,
            shadowColor: '#0369a1',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}
        >
          {/* Círculo decorativo de fondo */}
          <View
            style={{
              position: 'absolute',
              right: -30,
              top: -30,
              width: 160,
              height: 160,
              borderRadius: 80,
              backgroundColor: '#0284c7',
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: 'absolute',
              right: 20,
              bottom: -40,
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: '#0ea5e9',
              opacity: 0.3,
            }}
          />

          {/* Texto banner */}
          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: '#f59e0b',
                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 3,
                alignSelf: 'flex-start',
                marginBottom: 6,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 11, fontWeight: '800', letterSpacing: 0.5 }}>
                🔥 PROMO ESPECIAL
              </Text>
            </View>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900', lineHeight: 24 }}>
              Hasta 30% OFF
            </Text>
            <Text style={{ color: '#bae6fd', fontSize: 13, marginTop: 2 }}>
              en productos de aseo industrial
            </Text>
          </View>

          {/* Ícono decorativo */}
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'rgba(255,255,255,0.15)',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 12,
            }}
          >
            <Zap color="#f59e0b" size={32} fill="#f59e0b" />
          </View>
        </View>
      </View>

      {/* ══════ CATEGORÍAS (Quick Access) ══════ */}
      <View style={{ paddingTop: 20, paddingBottom: 4 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: '#1e293b',
            paddingHorizontal: 16,
            marginBottom: 12,
          }}
        >
          Categorías
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
      <View style={{ paddingTop: 20, paddingBottom: 8 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#1e293b' }}>
            ⭐ Destacados
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 13, color: '#0284c7', fontWeight: '600' }}>
              Ver todos
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
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: '700', color: '#1e293b' }}>
          🛒 Catálogo completo
        </Text>
        <Text style={{ fontSize: 12, color: '#6b7280' }}>
          {catalogProducts.length} productos
        </Text>
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f5f9' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0284c7" />

      <FlatList
        data={catalogProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 24 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={6}
        maxToRenderPerBatch={4}
        windowSize={5}
      />
    </SafeAreaView>
  );
};
