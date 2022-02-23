import './App.css'
import React, {useState} from 'react'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Ingreso from '../Pages/Ingreso'
import Registro from '../Pages/Registro'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import DetalleProducto from '../Producto/DetalleProducto'
import NotFound from '../Pages/NotFound'
import Container from 'react-bootstrap/Container'
import ProductosAlta from '../Producto/ABMProductos/ProductosAlta'
import ProductosModificar from '../Producto/ABMProductos/ProductosModificar'
import Carrito from '../Pages/Carrito'
import AuthContext from '../Context/AuthContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

function Public (){
  const [ingreso, setIngreso] = useState (false)
  return(
    
      <AuthContext.Consumer>
        { context =>
        <div className='Public'>
      <Header/>
      
      <Router>
        <Menu statusLogin={ingreso}/>
        <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/home' element={<Navigate to="/"/>} />
          <Route path="/ingreso" element={<Ingreso setLoginUser={setIngreso}/>}/>
          <Route path="/productos/alta" element={<ProductosAlta/>}/>
        {context.userLogin &&
          <Route path="/productos/modificar/:idproducto" element={<ProductosModificar/>}/>
        }
          <Route path="/registrarse" element={<Registro/>}/>
          <Route path="/producto/:idproducto" element={<DetalleProducto/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="*" element={<NotFound/>} /> {/*Cualquier URL que no coincida con las rutas anteriores, entra en NOTFOUND*/}

        </Routes>
        </Container>
        <Footer/>

      </Router>
      </div>
}
      </AuthContext.Consumer> 
     
    
)}
export default Public;
