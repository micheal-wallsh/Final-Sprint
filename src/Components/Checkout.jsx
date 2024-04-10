import React from 'react'
import Checkoutformat from './Checkoutformat';
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";
import "./Checkout.css"

const Checkout = ({games}) => {
const navigate = useNavigate();
let price = 0.00;
console.log("games: "+games.length);
console.log(games);
games.forEach((game)=>{
 price += parseFloat(game.price)
})
    
  return (
    <>
    <BackButton onClick = {() => {
          navigate(-1)}}/> 
    <div className="checkoutItems">    
          {games.length > 0 ? (
     
            <Checkoutformat games = {games} price = {price} />
      ): (
        <p>
            No games in cart
        </p>
      )}
    </div>  
  </>
  )
}

export default Checkout