// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Registration from './components/Registration';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <div className="header">
        <div className="contact-info">
          <span>📞 +34 123456789</span>
          <span>📧 arshadchowdhury46@gmail.com</span>
        </div>
        <div className="logo">
          <h1>econet</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-products">All Products</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
