import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
     <header className="header"> 
  <img src="icon-color-md.png" alt="error" />

     <nav className="navbar" id="navbar2">
    <Link to="/home">home</Link>
    <a href="/about">about</a>
    <Link to="/book">book</Link>
    <Link to="/doctors">doctors</Link>
</nav>  
</header>

    </>
     
  )
}
