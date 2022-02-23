import './App.css'
import React from 'react'
import AuthProvider from '../Context/AuthProvider'
import Public from './Public'

function App (){
    
  return(
    <div className='App'>
    <AuthProvider>
      <Public/> 
    </AuthProvider>
    </div>
  )
}
export default App;


