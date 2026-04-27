// ============================================================
// CartScreen.tsx — Pantalla del carrito de compras
// Diseño estilo Mercado Libre con paleta Power Andina
// ============================================================

import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';
import { ChevronLeft, Trash2, Minus, Plus, Truck, ShoppingBag } from 'lucide-react-native';
import { useCartStore, CartItem } from '../store/useCartStore';
import { formatPrice } from '../../catalog/services/ProductService';

interface CartScreenProps {
  onBack: () => void;
  onCheckout?: () => void;
}

// ────────────────────────────────────────────────────────────
// COMPONENTE: Tarjeta de ítem del carrito
// ────────────────────────────────────────────────────────────
const CartItemCard = ({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
}) => {
  const itemTotal = item.calculatedPrice * item.quantity;
  const productImage =
    (item.product.images && item.product.images[0]) || item.product.image;

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        marginHorizontal: 16,
        marginBottom: 12,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      {/* ── Imagen del producto ── */}
      <Image
        source={{ uri: productImage }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          backgroundColor: '#f8fafc',
          resizeMode: 'cover',
        }}
      />

      {/* ── Info central ── */}
      <View style={{ flex: 1, marginHorizontal: 12 }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 13,
            fontWeight: '700',
            color: '#113321',
            lineHeight: 18,
            marginBottom: 4,
          }}
        >
          {item.product.name}
        </Text>

        {/* Tamaño y Aroma */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
          {item.selectedSize ? (
            <View
              style={{
                backgroundColor: '#eff6ff',
                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: '700', color: '#0284c7' }}>
                {item.selectedSize}
              </Text>
            </View>
          ) : null}
          {item.selectedAroma ? (
            <View
              style={{
                backgroundColor: '#f0fdf4',
                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: '700', color: '#10b981' }}>
                {item.selectedAroma}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Control de cantidad — Píldora */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f1f5f9',
            borderRadius: 999,
            alignSelf: 'flex-start',
            paddingHorizontal: 4,
            paddingVertical: 4,
          }}
        >
          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.id, item.quantity - 1)}
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Minus color="#0284c7" size={14} strokeWidth={3} />
          </TouchableOpacity>

          <Text
            style={{
              marginHorizontal: 14,
              fontSize: 15,
              fontWeight: '900',
              color: '#113321',
              minWidth: 18,
              textAlign: 'center',
            }}
          >
            {item.quantity}
          </Text>

          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: '#0284c7',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Plus color="#fff" size={14} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Derecha: papelera + precio ── */}
      <View style={{ alignItems: 'flex-end', justifyContent: 'space-between', minHeight: 80 }}>
        <TouchableOpacity
          onPress={() => onRemove(item.id)}
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: '#fef2f2',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Trash2 color="#ef4444" size={16} strokeWidth={2} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '900',
            color: '#0284c7',
            marginTop: 8,
          }}
        >
          {formatPrice(itemTotal)}
        </Text>
      </View>
    </View>
  );
};

// ────────────────────────────────────────────────────────────
// COMPONENTE: Estado vacío
// ────────────────────────────────────────────────────────────
const EmptyCart = ({ onBack }: { onBack: () => void }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 }}>
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#eff6ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}
    >
      <ShoppingBag color="#0284c7" size={48} strokeWidth={1.5} />
    </View>
    <Text
      style={{
        fontSize: 20,
        fontWeight: '900',
        color: '#113321',
        textAlign: 'center',
        marginBottom: 8,
      }}
    >
      Tu carrito está vacío
    </Text>
    <Text
      style={{
        fontSize: 14,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 28,
      }}
    >
      Agrega productos desde el catálogo para comenzar tu pedido
    </Text>
    <TouchableOpacity
      onPress={onBack}
      style={{
        backgroundColor: '#0284c7',
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 14,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '900', fontSize: 15 }}>
        Explorar productos
      </Text>
    </TouchableOpacity>
  </View>
);

// ────────────────────────────────────────────────────────────
// PANTALLA PRINCIPAL
// ────────────────────────────────────────────────────────────
export const CartScreen = ({ onBack, onCheckout }: CartScreenProps) => {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCartStore();
  const total = totalItems();
  const subtotal = totalPrice();
  const shippingCost = subtotal > 150000 ? 0 : 9900;
  const grandTotal = subtotal + shippingCost;

  const renderItem = ({ item }: ListRenderItemInfo<CartItem>) => (
    <CartItemCard
      item={item}
      onRemove={removeFromCart}
      onUpdateQuantity={updateQuantity}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ══════ HEADER ══════ */}
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 14,
          borderBottomWidth: 1,
          borderBottomColor: '#f1f5f9',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <TouchableOpacity
          onPress={onBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            backgroundColor: '#f1f5f9',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
          }}
        >
          <ChevronLeft color="#113321" size={22} strokeWidth={2.5} />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: '900', color: '#113321' }}>
            Carrito ({total})
          </Text>
          {total > 0 && (
            <Text style={{ fontSize: 11, color: '#94a3b8', fontWeight: '500' }}>
              {total} {total === 1 ? 'producto' : 'productos'} seleccionados
            </Text>
          )}
        </View>
      </View>

      {/* ══════ CONTENIDO PRINCIPAL ══════ */}
      {cartItems.length === 0 ? (
        <EmptyCart onBack={onBack} />
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: 16, paddingBottom: 200 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View
                style={{
                  marginHorizontal: 16,
                  marginTop: 4,
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  padding: 16,
                  borderWidth: 1,
                  borderColor: '#f1f5f9',
                }}
              >
                {/* ── Sección de Envío ── */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 18,
                      backgroundColor: '#f0fdf4',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 12,
                    }}
                  >
                    <Truck color="#10b981" size={18} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, fontWeight: '700', color: '#113321' }}>
                      Costo de envío
                    </Text>
                    <Text style={{ fontSize: 11, color: '#94a3b8' }}>
                      {shippingCost === 0
                        ? '¡Envío gratis por compra mayor a $150.000!'
                        : 'Envío nacional — 3 a 5 días hábiles'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: shippingCost === 0 ? '#10b981' : '#113321',
                    }}
                  >
                    {shippingCost === 0 ? 'GRATIS' : formatPrice(shippingCost)}
                  </Text>
                </View>

                <View style={{ height: 1, backgroundColor: '#f1f5f9', marginVertical: 8 }} />

                {/* Subtotal + Envío */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text style={{ fontSize: 12, color: '#64748b' }}>Subtotal</Text>
                  <Text style={{ fontSize: 12, color: '#64748b', fontWeight: '600' }}>
                    {formatPrice(subtotal)}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 12, color: '#64748b' }}>Envío</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: shippingCost === 0 ? '#10b981' : '#64748b',
                      fontWeight: '600',
                    }}
                  >
                    {shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}
                  </Text>
                </View>
              </View>
            }
          />

          {/* ══════ FOOTER FIJO DE PAGO ══════ */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              paddingHorizontal: 20,
              paddingTop: 16,
              paddingBottom: 32,
              borderTopWidth: 1,
              borderTopColor: '#f1f5f9',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.08,
              shadowRadius: 12,
              elevation: 12,
            }}
          >
            {/* Fila de Total */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 14,
              }}
            >
              <Text style={{ fontSize: 14, color: '#64748b', fontWeight: '500' }}>
                Total
              </Text>
              <Text style={{ fontSize: 22, fontWeight: '900', color: '#113321' }}>
                {formatPrice(grandTotal)}
              </Text>
            </View>

            {/* Botón Continuar */}
            <TouchableOpacity
              onPress={onCheckout}
              activeOpacity={0.85}
              style={{
                backgroundColor: '#0284c7',
                borderRadius: 16,
                height: 58,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#0284c7',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.35,
                shadowRadius: 10,
                elevation: 8,
              }}
            >
              <ShoppingBag color="#fff" size={20} style={{ marginRight: 8 }} />
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '900', letterSpacing: 0.5 }}>
                Continuar ({total})
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
