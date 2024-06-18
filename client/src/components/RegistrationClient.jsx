import {useForm} from 'react-hook-form'
import { registerClient} from '../api/users.api'

export function register() {
  const { register, handleSubmit, formState: {
  } } = useForm();

  const onSubmit = handleSubmit(async data => {
     const res = await registerClient(data);
     console.log(res);
  });

  return (
      <div className="registrationclient">
        <h1>Register Client</h1>
          <form onSubmit={onSubmit}>
              <label>
              Username:
              <input type="text" placeholder="Username" {...register("username_client",
              {required: true})}/>
              </label>
              <label>
              Direcció D'enviament:
              <input type="text" placeholder="Direcció" {...register("direccio_denviament",
              {required: true})}/>
              </label>
              <button type="submit" className="register-button">Register</button>
          </form>
      </div>
  );
}

export default register;