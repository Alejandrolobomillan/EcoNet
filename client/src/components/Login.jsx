import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/users.api';
import useStore from "../store/useStore";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useStore();

  const onSubmit = handleSubmit(async (data) => {
    try {
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
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input type="text" placeholder="Username" {...register("username", { required: true })} />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
