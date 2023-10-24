import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Item({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default Item;
