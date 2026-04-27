// ============================================================
// useCartStore.ts — Estado global del carrito (Zustand)
// ============================================================

import { create } from 'zustand';
import { Product } from '../../catalog/services/ProductService';

export interface CartItem {
  /** ID único generado como: productId + size + aroma */
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedAroma: string;
  /** Precio calculado según el tamaño seleccionado */
  calculatedPrice: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (
    product: Product,
    selectedSize: string,
    selectedAroma: string,
    quantity?: number
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

  addToCart: (product, selectedSize, selectedAroma, quantity = 1) => {
    const itemId = `${product.id}__${selectedSize}__${selectedAroma}`;
    const calculatedPrice =
      product.priceBySize && selectedSize
        ? product.priceBySize[selectedSize] ?? product.price
        : product.price;

    set((state) => {
      const existingIndex = state.cartItems.findIndex((i) => i.id === itemId);

      if (existingIndex >= 0) {
        // El ítem ya existe — incrementa cantidad
        const updated = [...state.cartItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return { cartItems: updated };
      }

      // Ítem nuevo
      return {
        cartItems: [
          ...state.cartItems,
          { id: itemId, product, quantity, selectedSize, selectedAroma, calculatedPrice },
        ],
      };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== itemId),
    }));
  },

  updateQuantity: (itemId, quantity) => {
    if (quantity < 1) {
      get().removeFromCart(itemId);
      return;
    }
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      ),
    }));
  },

  clearCart: () => set({ cartItems: [] }),

  totalItems: () => get().cartItems.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().cartItems.reduce((sum, i) => sum + i.calculatedPrice * i.quantity, 0),
}));
