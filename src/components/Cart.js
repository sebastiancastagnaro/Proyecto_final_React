import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cartItems, total, emptyCart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - Cantidad: {item.quantity}</p>
          <button onClick={() => removeItem(item)}>Eliminar</button>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
