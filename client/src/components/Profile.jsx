// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import useStore from "../store/useStore";
import { getUserByUsername, getClient, getCompra } from "../api/users.api";

function Profile() {
  const { username, logout } = useStore();
  const [userDetails, setUserDetails] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);
  const [compraDetails, setCompraDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const userDetails = await getUserByUsername(username);
        setUserDetails(userDetails);
      } catch (error) {
        console.error('Failed to fetch user details:', error.message);
      }
    }

    async function fetchClientDetails() {
      try {
        const clientDetails = await getClient(username);
        setClientDetails(clientDetails);
      } catch (error) {
        console.error('Failed to fetch client details:', error.message);
      }
    }

    async function fetchCompraDetails() {
      try {
        const compraDetails = await getCompra(username);
        setCompraDetails(compraDetails);
      } catch (error) {
        console.error('Failed to fetch compra details:', error.message);
      }
    }

    if (username) {
      Promise.all([fetchUserDetails(), fetchClientDetails(), fetchCompraDetails()]).then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [username]);

  const handleLogout = () => {
    logout();
    setUserDetails(null);
    setClientDetails(null);
    setCompraDetails(null);
  };

  return (
    <div className="profile">
      {username && <h1>My Profile</h1>}
      {!username ? (
        <h1>You are not logged in.</h1>
      ) : (
        <div>
          {userDetails && (
            <div>
              <h3>Details:</h3>
              <p>Name: {userDetails.nom}</p>
              <p>Phone: {userDetails.telefon}</p>
              <p>Email: {userDetails.correu}</p>
            </div>
          )}
          {clientDetails && (
            <div>
              <p>Direcció d'enviament: {clientDetails.direccio_denviament}</p>
            </div>
          )}
          {compraDetails && (
            <div>
              <h3>Compras:</h3>
              <ul>
                {compraDetails.map((compra, index) => (
                  <li key={index}>
                    <p>Compra ID: {compra.id}</p>
                    <p>Fecha: {compra.data_de_compra}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {username && <button onClick={handleLogout} className="logout-button">Logout</button>}
        </div>
      )}
    </div>
  );
}

export default Profile;
