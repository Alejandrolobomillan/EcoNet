// src/components/Home.jsx
import React from 'react';
import './Home.css';

const products = [
  { id: 1, name: 'Tomatoes', price: '2.50€/kg', img: 'url-to-tomato-image' },
  { id: 2, name: 'Apples', price: '3.00€/kg', img: 'url-to-apple-image' },
  { id: 3, name: 'Potatoes', price: '1.20€/kg', img: 'url-to-potato-image' },
  // Agrega más productos según sea necesario
];

function Home() {
  return (
    <div className="home">
      <aside className="sidebar">
        <ul>
          <li>Fruites</li>
          <li>Verdures</li>
          <li>Carns</li>
          <li>Lactis</li>
          <li>Dolços</li>
          <li>Ous</li>
          <li>Health</li>
          <li>Pets</li>
          <li>Baby</li>
          <li>Groceries</li>
          <li>Books</li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>50% Off On Your First Shopping</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
        <button>Visit Collections</button>
        <div className="product-cards">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
