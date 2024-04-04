import React from 'react'
import Checkoutformat from './Checkoutformat';
import Button from './Button';
import {  useNavigate } from "react-router-dom";

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
    <Button color ={"white"} text = {"Back"} onClick = {() => {
          navigate(-1)}}/> 
          {games.length > 0 ? (
     
            <Checkoutformat games = {games} price = {price}/>
      ): (
        <p>
            No games in cart
        </p>
      )}
  </>
  )
}

export default Checkout