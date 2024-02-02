import React from 'react'
import logo from "./assets/logo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  return (
    <div>
      <ToastContainer />
      <nav
        className="navbar">

        <Link style={
          {
            textDecoration: "none",
            color: "red"
          }
        } to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/"}>
          <img src={logo} height={"100px"} width={"200px"} />
        </Link>
        <Link style={
          {
            textDecoration: "none",
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