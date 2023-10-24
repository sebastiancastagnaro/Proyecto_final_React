import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Consulta la colección de productos en Firebase y actualiza el estado
    db.collection('items')
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setProducts(items);
      });
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {/* Muestra la lista de productos obtenida de Firebase */}
      { products.map((product) => (
        <Item key={product.id} product={product} />
      ) ) }
    </div>
  );
}

export default ItemListContainer;
