import {useForm} from 'react-hook-form'
import { registerUser } from '../api/users.api'

export function register() {
  const { register, handleSubmit, formState: {
  } } = useForm();

  const onSubmit = handleSubmit(async data => {
     const res = await registerUser(data);
     console.log(res);
  });

  return (
      <div className="registration">
        <h1>Registration</h1>
          <form onSubmit={onSubmit}>
              <label>
              Username:
              <input type="text" placeholder="Username" {...register("username",
              {required: true})}/>
              </label>
              <label>
              Contrasenya:
              <input type="text" placeholder="Contrasenya" {...register("contrasenya",
              {required: true})}/>
              </label>
              <label>
              Nom:
              <input type="text" placeholder="Nom" {...register("nom",
              {required: true})}/>
              </label>
              <label>
              Telefon:
              <input type="text" placeholder="Telefon" {...register("telefon",
              {required: true})}/>
              </label>
              <label>
              Correu:
              <input type="text" placeholder="Correu" {...register("correu",
              {required: true})}/>
              </label>
              <input type="checkbox" placeholder="Client" {...register("client",
              {required: true})}/>
              <input type="submit" />
          </form>
      </div>
  );
}

export default register;