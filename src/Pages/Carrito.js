import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"


function Carrito () {


    return (
        
        <div className='container'>
              
            <h2>Carrito</h2>
         
         

            {/*si el usuario tiene productos seleccionados*/}
            <Button variant="dark"> Finalizar compra </Button>

            {/*Si no selecciono ninguno*/}
            <Button as={Link} to="/" variant="primary"> Agregar productos </Button>
            </div>

    )

}
export default Carrito