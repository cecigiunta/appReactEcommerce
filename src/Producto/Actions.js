import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Actions (props){
    const {datos, userLogin} = props
    return (
        <div>
            <Button variant="dark" as={Link} to={'/producto/' +datos.id}>Ver más...</Button>

            {
                userLogin &&
                <Button variant="primary" as={Link} to={'/productos/modificar/' +datos.id}>Modificar</Button>
            }
            
        </div>
    )
}
export default Actions