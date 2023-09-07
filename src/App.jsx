import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'


 

function App() {
  const [searchTxt, setSearchTxt] = useState('')

  return (
    <>
      
        <Header/>
           <Outlet/>
        <Footer/>
       
        
    </>
  )
}

export default App
