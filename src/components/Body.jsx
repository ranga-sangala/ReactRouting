import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div>
     products
     <Link to={`products/123`}>Product info</Link>
    </div>
  )
}

export default Body
