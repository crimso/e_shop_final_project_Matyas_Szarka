import React from "react";
import { useState, createContext, useContext, useMemo } from "react";

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If it exists, map over the cart and update the amount for the matching product
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // If it doesn't exist, add it with amount 1
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };

  const emptyCart = () => {
    setCart([]);
  };
  const value = useMemo(() => ({ cart, addToCart, emptyCart }), [cart]);
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
