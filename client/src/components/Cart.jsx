// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
