import React from 'react'
import { Link } from "react-router-dom";
import shoppingCart from "../Pictures/Shopping Cart.png"
import './Header.css'

const Header = (games) => {
  return (
    <div className="navBar">
    <h2>GAME OVER</h2>
    <Link to ="/cart" className="cartButton"><img src={shoppingCart} width="50px" height="50px"/></Link>
    <hr/>
    </div>
    
  )
}

export default Header