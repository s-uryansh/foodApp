import React, { createContext, useContext, useState } from "react";
import { CartProduct } from "../types/cart";

interface CartContextType {
  cart: CartProduct[];
  addToCart: (item: Omit<CartProduct, "quantity">) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (item: Omit<CartProduct, "quantity">) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increase = (id: string) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));

  const decrease = (id: string) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );

  const remove = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
