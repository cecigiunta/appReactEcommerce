/*EJEMPLO CON BIBLIOTECA REACT HOOK FORM*/
import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import FormGroup from '../Components/FormGroup';
import firebase from '../Config/firebase'
import AlertCustom from '../Components/AlertCustom'
import ButtonWithLoading from '../Components/ButtonWithLoading'

function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState (false)
    const [alert, setAlert] = useState ({variant:"", text:""})
    const onSubmit = async (data) => {

    try {
        setLoading (true)
        console.log ("estos son los datos", data.email, data.password)
        const responseUser = await firebase.auth.createUserWithEmailAndPassword (data.email, data.password)
        console.log (responseUser)

        if(responseUser.user.uid){
            const document = await firebase.db.collection ("usuarios")
            .add ({
                nombre: data.nombre,
                apellido: data.apellido,
                userId: responseUser.user.uid
            })
            console.log(document)
        
        setAlert ({variant:"info", text: "¡Registro exitoso!"})
        setLoading (false)
        }
        }catch (e){
            console.log(e.code)
            switch (e.code){
                case "auth/email-already-in-use":
                setAlert ({variant:"danger", text: "El email ya se encuentra registrado"})
                break;

                case "auth/weak-password":
                setAlert ({variant:"danger", text: "La contraseña debe tener al menos 8 caracteres"})
                break;

                default: 
                setAlert ({variant:"danger", text: "Error en el registro"})
                setLoading (false)
                }

        }
    }
    
    return (
        <div> 
        <h2>Creá tu usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup label="Nombre" register={{...register("nombre", {required:true})}} placeholder='Ingrese su nombre'/>
            {errors.nombre && <div>El campo es obligatorio</div>}
            <FormGroup label="Apellido" register={{...register("apellido")}} placeholder='Ingrese su apellido'/>
            <FormGroup label="Email" type="email" register={{...register("email")}} placeholder='Ingrese su email'/>
            <FormGroup label="Contraseña" type="password" register={{...register("password", {required:true, minLength:8})}} placeholder='Ingrese su contraseña'/>
            <div>
                {errors.password?.type === "required" && <div>El campo es obligatorio</div>}
                {errors.password?.type === "minLength" && <div>La contraseña debe tener al menos 8 caracteres</div>}
            </div>
            
             <ButtonWithLoading loading={loading} type="submit" variant="dark">Registrarme</ButtonWithLoading>

             <AlertCustom {...alert} />
        </form>
            
        </div>
    );
    
}
export default Registro

