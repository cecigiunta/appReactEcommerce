import React,{useState,useEffect} from 'react'
import '../Routes/App.css'
import IndexProducto from '../Producto/IndexProducto'
import firebase from '../Config/firebase'
import Loading from '../Components/Loading'
import {Row, CardGroup, } from 'react-bootstrap'

function Home() {
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  console.log(firebase)

  useEffect(
    ()=>{
     const request = async () =>{
       try{
         const querySnapshot = await firebase.db.collection ("productos")
         .get()
         if (querySnapshot){
           setProductos (querySnapshot.docs)
           setLoading (false)
         }
       }
   
      catch(e) {
        console.log(e)
      }
    }
    request ()
    },
    []
  )
 
    return (
      <div classname="Home">
        <Row xs={1} className="g-4">
        <Loading loading= {loading}>
        
          <h3>PRODUCTOS</h3>
          <CardGroup className='CardGroup'> 
          {productos.map((producto, indice)=><IndexProducto key={producto.id} datos={{...producto.data(), id:producto.id}} />)}
          </CardGroup>
        </Loading>
        </Row>
      </div>
    );
  }
  
export default Home;