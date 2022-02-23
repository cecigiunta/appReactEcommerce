import Spinner from 'react-bootstrap/Spinner'

function Loading(props){
const {loading, children} = props 

if (loading){
    return(
        <div>
            <Spinner animation="border" variant="info" />
        </div>
    ); 
}else{
    return(
        <>
        {children}
        </>
    )
    }
}
    

export default Loading