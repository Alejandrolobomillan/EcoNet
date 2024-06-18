import React from 'react';
import useStore from "../store/useStore";

function Profile() {
  const { username, logout } = useStore();

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
