import '../Routes/App.css';
import {Card, CardGroup, Col} from 'react-bootstrap'
import Actions from './Actions'
import AuthContext from '../Context/AuthContext'


function IndexProducto(props) {
  const {datos} = props
 
  return (
    <div className='CardProducto'>
    <AuthContext.Consumer>
     {
      context =>
      <Col>
      <CardGroup>
      <Card  style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Header as="h5">{datos.nombre}</Card.Header>
          <Card.Img variant="top" src=""/>
          <Card.Title> $ {datos.precio} </Card.Title>     
          <Card.Text>{datos.descripcion}</Card.Text>   
 
        </Card.Body>
        <Actions userLogin= {context.userLogin} datos={datos}/>
      </Card>
      </CardGroup>
      </Col> 
      }
    </AuthContext.Consumer>
    
    </div>
  );
}

export default IndexProducto;


