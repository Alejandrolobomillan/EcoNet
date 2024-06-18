import React, { useEffect, useState } from 'react';
import useStore from "../store/useStore";
import { getUserByUsername, getClient } from "../api/users.api";

function Profile() {
  const { username, logout } = useStore();
  const [userDetails, setUserDetails] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga inicial

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

    if (username) {
      Promise.all([fetchUserDetails(), fetchClientDetails()]).then(() => {
        setLoading(false); // Marcar la carga como completa cuando ambos detalles se han cargado
      });
    } else {
      setLoading(false); // Si no hay username, la carga se marca como completa
    }
  }, [username]);

  const handleLogout = () => {
    logout();
    setUserDetails(null);
    setClientDetails(null);
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
              {/* Mostrar otros detalles del cliente según sea necesario */}
            </div>
          )}
          {username && <button onClick={handleLogout} className="logout-button">Logout</button>}
        </div>
      )}
    </div>
  );
}

export default Profile;
