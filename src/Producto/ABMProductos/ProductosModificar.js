import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import FormGroup from '../../Components/FormGroup';
import Button from 'react-bootstrap/Button'
import firebase from '../../Config/firebase'
import {useParams} from 'react-router-dom'
import ButtonWithLoading from '../../Components/ButtonWithLoading'
import {useNavigate} from 'react-router-dom'

function ProductosModificar() {
    const { register, handleSubmit, setValue} = useForm();
    const [loading, setLoading] = useState (false)
    const {idproducto} = useParams();
    const navigate= useNavigate();
    const onSubmit = async (data) => {
        try {
            const document = firebase.db.doc ("productos/" +idproducto)
            .set (data)
            console.log (document)      
            navigate ("/") 
            
        }
        catch (e){
            console.log(e.code)
            
        }
    }
    useEffect (
        ()=> {
        const request = async ()=> {
            try {
                const response = await firebase.db.doc ("productos/" + idproducto)
                .get()

            if (response){
                setValue ("nombre", response.data().nombre)
                setValue ("precio", response.data().precio)
                setValue ("descripcion", response.data().descripcion)   
            } 
        }
            catch (e){
                console.log(e.code)
            }
            }
        request ()
        },
        [idproducto, setValue]
        
    )
        const handleDelete = async ()=> {
            try {
                const document = await firebase.db.doc ("productos/" + idproducto )
                .delete()
                console.log (document)
                setLoading (false)
                navigate("/")
            }
            catch (e){
                console.log (e.code)
                
            }
        }
    
    return (
        <div> 
            <h2>Modificar producto</h2>
         
         <form onSubmit={handleSubmit(onSubmit)}>
             <FormGroup label="Nombre"  register={{...register("nombre", {required:true})}} />
             <FormGroup label="Precio" register={{...register("precio", {required: true})}} />
             <FormGroup label="Descripcion" register={{...register("descripcion", {required: true})}} />
           
             <ButtonWithLoading loading={loading} type="submit" variant="success">Guardar cambios</ButtonWithLoading> 
             <Button onClick={handleDelete}  variant="danger">Eliminar producto</Button>
             
         </form>
            
        </div>
    );
    
}
export default ProductosModificar