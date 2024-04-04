import React from 'react'
import { Link } from "react-router-dom";

const Header = (games) => {
  return (
    <div>
    <h2>Company Name</h2>
    <Link to ="/cart">Cart</Link>
    <hr/>
    </div>
    
  )
}

export default Header