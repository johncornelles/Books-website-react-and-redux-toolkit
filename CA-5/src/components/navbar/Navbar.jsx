import React from 'react'
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar">

        <Link style={
          { textDecoration: "none",
          color:"red"
           }
        } to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/"}>
          <img src={logo} height={"70px"} width={"200px"} />
        </Link>
        <Link style={
          { textDecoration: "none",
          color: "red"
           }
        } to={"/registration"}>
          <h1>Register</h1>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar