import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Products from './components/Products.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import About from './components/About.jsx'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import './index.css'


const appRouter = createBrowserRouter([
  {
      path:"/",
     element:<App/>,
     
     children:[
      {
        path:"/",
        element:<Body/>,
        
      },
      {
        path:"/about",
        element:<About/>,
        
      },
      {path:"/contact",
       element:<Contact/>
       },
      {
        path:"/products",
        element:<Products/>,
        
      },
      {
        path:"/products/:id",
        element:<ProductInfo/>
      }
      
     ]
    },
     

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
