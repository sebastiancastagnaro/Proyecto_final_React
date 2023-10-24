


import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Nombre de tu tienda</h1>
      <Link to="/categories/electronica">Electrónica</Link>
      <Link to="/categories/ropa">Ropa</Link>
      {/* Agrega más enlaces a categorías según sea necesario */}
    </nav>
  );
}

export default NavBar;
