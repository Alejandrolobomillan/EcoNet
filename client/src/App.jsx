// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import RegistrationClient from './components/RegistrationClient';
import Profile from './components/Profile';
import useStore from './store/useStore';
import './App.css';

function App() {
  const { username, logout } = useStore();
  return (
    <Router>
      <div className="header">
        <div className="contact-info">
            <>
              <span>📞 {"+34 658 98 13 12"}</span>
              <span>📧 {"econet_team@gmail.com"}</span>
            </>
        </div>
        <div className="logo">
          <h1>econet</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login Client</Link></li>
            <li><Link to="/registration">Register User</Link></li>
            <li><Link to="/registrationclient">Register Client</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registrationclient" element={<RegistrationClient />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
