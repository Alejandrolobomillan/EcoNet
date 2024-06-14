// src/components/Login.jsx
import React from 'react';

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
