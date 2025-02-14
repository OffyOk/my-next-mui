import { create } from "zustand";

type CartItem = { id: string; name: string; price: number };

type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeItem: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
