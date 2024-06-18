import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/users.api';
import useStore from "../store/useStore";
import { getClient } from "../api/users.api";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login, username } = useStore(); // Obtén el estado del username de la tienda

  const onSubmit = handleSubmit(async (data) => {
    try {
      const clientDetails = await getClient(data.username);
      if(clientDetails == null) {
        console.error("Login failed");
      }
      const res = await loginUser(data);
      console.log(res);
      if (res.status === 200) {
        login(data.username, data.password);
        navigate("/");
      } else {
        console.error("Login failed: ", res.data);
      }
    } catch (error) {
      console.error("Login failed: ", error.response ? error.response.data : error.message);
    }
  });

  return (
    <div className="login">
      {username ? ( // Verifica si el usuario ya está registrado
        <h1>You are already logged in.</h1> // Muestra un mensaje si ya está registrado
      ) : (
        <>
          <h1>Login Client</h1>
          <form onSubmit={onSubmit}>
            <label>
              Username:
              <input type="text" placeholder="Username" {...register("username", { required: true })} />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Password" {...register("password", { required: true })} />
            </label>
            <button type="submit" className="login-button">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
