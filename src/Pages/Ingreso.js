import { useForm } from "react-hook-form";
import React,{useState, useContext} from 'react'
import FormGroup from '../Components/FormGroup';
import firebase from '../Config/firebase'
import ButtonWithLoading from '../Components/ButtonWithLoading';
import {ingresoMessage} from "../Utils/errorMessages"
import AlertCustom from '../Components/AlertCustom';
import AuthContext from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom'

function Ingreso() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({variant:"",text:""})
    const context = useContext(AuthContext)
    const navigate = useNavigate()
   const onSubmit = async (data) => {
        
    try{
        setLoading(true)
        const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
        if (responseUser.user.uid){
          const userInfo = await firebase.db.collection ("usuarios")
          .where("userId", "==", responseUser.user.uid)
          .get()

          if (userInfo){
            setLoading(false)
            console.log(userInfo.docs[0]?.data())
            context.logInUser()
            console.log(responseUser.user.uid)
          }
        }
        
        
        navigate("/")
                
      }
      catch(e){
        console.log(e.code)
        setAlert({variant:"danger",text:ingresoMessage[e.code]})
        setLoading(false)
      }
    }
    
    return(
        
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Ingresá a tu cuenta</h2>
            <FormGroup label="Email" register={{...register("email", {required:true})}} placeholder='Ingrese su email'/>
              {errors.usuario && <div>Ningún usuario ingresado</div>}
            <FormGroup label="Contraseña" type="password" register={{...register("password", {required:true})}} placeholder='Ingrese su contraseña'/>
             {errors.password?.type === "required" && <div>Ninguna contraseña ingresada</div>}
            
            <ButtonWithLoading loading={loading} type="submit" variant="dark">Ingresar</ButtonWithLoading>
            <AlertCustom {...alert}  />
        </form>
       </div>
    );
    }


export default Ingreso;