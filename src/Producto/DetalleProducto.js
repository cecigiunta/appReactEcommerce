import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from '../Components/Loading'
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

function DetalleProducto(){
    const [loading, setLoading]= useState(true)
    const [producto, setProducto] = useState ({}) /*Se crea un Hook y se lo inicializa con un objeto vacío*/
    const {idproducto}=useParams();
    console.log("idproducto",idproducto)

    useEffect (
        ()=>{
            const request = async () => {
            try {
                const document = await firebase.db.doc("productos/" + idproducto)
                .get()

                if (document){
                    setProducto (document.data())
                    setLoading (false)
                }
            }
             catch(e) {
                 console.log (e.code)}
             }
                 request()
            },
                 [idproducto]
    )    
   if(loading){
        return (
        <div> <Loading/></div>
    )
        }
else{
    return (
        <Loading loading={loading}>
        <Card  style={{ 
            width: '20rem',
            padding: 'auto',
            margin: 'auto'}}>
        <Card.Body>
        <Card.Header as="h5">{producto.nombre}</Card.Header>
        <Card.Title> Precio: $ {producto.precio} </Card.Title>    
        <Card.Text>Descripción: {producto.descripcion}</Card.Text>   
        <Card.Text>SKU: {idproducto}</Card.Text>   
        </Card.Body>

      </Card>

        <Button variant="dark" as={Link} to={'/carrito'}> Agregar al carrito </Button>
        <Button variant="primary" as={Link} to={'/'}> Continuar comprando </Button>
      </Loading>
    );
}
}
export default DetalleProducto