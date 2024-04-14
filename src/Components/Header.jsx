import React from 'react'
import { Link } from "react-router-dom";
import shoppingCart from "../Pictures/Shopping Cart.png"
import logo from "../Pictures/Logo.jpg"
import './Header.css'
//A header componet for the website

const Header = (games) => {
  return (
    <div className="navBar">
      <div className="logoSpace">
        <img src={logo} width="75px" height="100px" id="logo"></img>
        <p id="logoText">GAME OVER GAME STORE</p>
      </div>
      <div className="bannerSpace">

      </div>
      <div className="buttonSpace">
        <Link to ="/cart" className="cartButton"><img src={shoppingCart} width="50px" height="50px"/></Link>
      </div>
    </div>
    
  )
}

export default Header