import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div class='navbar'>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Navbar