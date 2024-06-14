// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from './context/CartContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
