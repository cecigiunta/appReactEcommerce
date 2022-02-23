import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import FormGroup from '../../Components/FormGroup';
import firebase from '../../Config/firebase'
import ButtonWithLoading from '../../Components/ButtonWithLoading'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ProductosAlta() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState (false)
    const navigate= useNavigate();
    const onSubmit = async (data) => {
        try {
            setLoading (true)
            const document = await firebase.db.collection ("productos")
            .add (data)
            console.log (document)
            setLoading (false)
            navigate ("/")
        }
        catch (e){
            console.log(e.code)
        }
        }
            
    return (
        <div> 
            <h2>Alta de producto</h2>

            <input type="file" name="imagen"  />
            <Button>Guardar imagen </Button>
       

         <form onSubmit={handleSubmit(onSubmit)}>
             <FormGroup label="Nombre" register={{...register("nombre", {required:true})}} placeholder='nombre'/>
              {errors.nombre && <div>El campo es obligatorio</div>}
              <FormGroup label="Precio" register={{...register("precio", {required: true})}} placeholder='precio'/>
              {errors.precio && <div>El campo es obligatorio</div>}
              <FormGroup label="Descripcion" register={{...register("descripcion", {required: true})}} placeholder='descripción'/>
              {errors.descripcion && <div>El campo es obligatorio</div>}
            
              <ButtonWithLoading loading={loading} type="submit" variant="dark">Guardar</ButtonWithLoading>
             
         </form>   
        </div>
    );
    }
export default ProductosAlta