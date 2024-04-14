import React from 'react'
import Checkoutformat from './Checkoutformat';
import BackButton from './BackButton';
import {  useNavigate } from "react-router-dom";
import "./Checkout.css"
//A componet to display the checkout page with all the games added to the cart and the total cost

const Checkout = ({games}) => {
const navigate = useNavigate();
let price = 0.00;

//get the total price of all the games in the cart
games.forEach((game)=>{
 price += parseFloat(game.price)
})
    
  return (
    <>
    <BackButton onClick = {() => {
          navigate(-1)}}/> 
    <div className="checkoutItems">    
          {games.length > 0 ? (
              // Display the games added int the cart
            <Checkoutformat games = {games} price = {price} />
      ): (
        //Display of there are no games in the cart
        <p>
            No games in cart
        </p>
      )}
    </div>  
  </>
  )
}

export default Checkout