import React from 'react'
import Checkoutgames from './Checkoutgames'
import Button from './Button';
import { useParams, useNavigate, useLocation } from "react-router-dom";
//A componet to display the games in cart and the total price

const Checkoutformat = ({games, price}) => {
 
  const navigate = useNavigate();
  return (
    <div>
    <Checkoutgames games ={games} cartGames = {games}/>
    <br/>
    <h4>Total</h4>
    <hr/>
    <p>${price}</p>

    <Button color={"red"} text={"Checkout"}onClick={()=>{
    navigate("/cartForm");
  }}/>
    </div>
  )
}

export default Checkoutformat