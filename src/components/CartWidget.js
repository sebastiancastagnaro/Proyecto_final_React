import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartWidget() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras ({cartItems.length})</h2>
    </div>
  );
}

export default CartWidget;
