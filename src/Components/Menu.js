import React from 'react'
import {Link} from "react-router-dom"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';

function Menu() {

    return (
      <AuthContext.Consumer>
        {
          context =>
              <Navbar bg="dark" variant="dark">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="Nav">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        {
          !context.userLogin &&
          <>
            <Nav.Link as={Link} to="/registrarse">Registro</Nav.Link>
            <Nav.Link as={Link} to="/ingreso">Ingresar</Nav.Link>
            
          </>
        }
        
        {
          context.userLogin &&
          <>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to= "/productos/alta">Alta</NavDropdown.Item>   
            </NavDropdown>
            <Nav.Link onClick={context.logOutUser}> Cerrar sesión </Nav.Link>
            
          </>
        }
        <Nav.Link as={Link} to="/carrito">Mi Carrito</Nav.Link>  
            
       </Nav>
       </Navbar.Collapse>
       </Navbar>
}
      </AuthContext.Consumer>
    );
} 
export default Menu;