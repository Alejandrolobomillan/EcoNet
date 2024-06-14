import {useForm} from 'react-hook-form'
import { registerUser } from '../api/users.api'

export function RegisterPage() {
    const { register, handleSubmit, formState: {
    } } = useForm();

    const onSubmit = handleSubmit(async data => {
       const res = await registerUser(data);
       console.log(res);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div> Usuari: </div>
                <input type="text" placeholder="Username" {...register("username",
                {required: true})}/>
                <input type="text" placeholder="Contrasenya" {...register("contrasenya",
                {required: true})}/>
                <input type="text" placeholder="Nom" {...register("nom",
                {required: true})}/>
                <input type="text" placeholder="Telefon" {...register("telefon",
                {required: true})}/>
                <input type="text" placeholder="Correu" {...register("correu",
                {required: true})}/>
                <input type="checkbox" placeholder="Client" {...register("client",
                {required: true})}/>
                <input type="submit" />
            </form>
        </div>
    );
}