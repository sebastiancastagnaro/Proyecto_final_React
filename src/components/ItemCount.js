import React, { useState } from 'react';

function ItemCount({ onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAddToCart(quantity)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
