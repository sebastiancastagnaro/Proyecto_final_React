import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Agregar lógica para agregar productos al carrito
  };

  const removeItem = (product) => {
    // Agregar lógica para eliminar productos del carrito
  };

  const emptyCart = () => {
    // Agregar lógica para vaciar el carrito
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, emptyCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
