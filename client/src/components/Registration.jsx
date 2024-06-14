// src/components/Registration.jsx
import React from 'react';

function Registration() {
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
