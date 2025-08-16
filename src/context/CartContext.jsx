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
        
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };

  const increaseQuantity = (productId) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, amount: item.amount + 1 } : item
      )
    );

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === productId);
      if (itemInCart?.amount === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, amount: item.amount - 1 } : item
      );
    });
  };

  const emptyCart = () => {
    setCart([]);
  };
  const value = useMemo(
    () => ({ cart, addToCart, emptyCart, increaseQuantity, decreaseQuantity }),
    [cart]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
