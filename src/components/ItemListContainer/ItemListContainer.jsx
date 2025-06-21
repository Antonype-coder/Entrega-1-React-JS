import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <main className="item-list-container">
      <h1>{greeting}</h1>
      <p>Próximamente nuestro catálogo de productos</p>
    </main>
  );
};

export default ItemListContainer;