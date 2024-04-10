import React from 'react'
import Button from "./Button"
import {  useNavigate } from "react-router-dom";


const Checkoutgames = ({games, cartGames}) => {
    const navigate = useNavigate();

  return (
    <>
   { games.map((game) => (
        <div class = "container">

         <img src = {game.picture} width ="136" height ="243"/>
         <Button color ={"red"} text = {"Remove from cart"} onClick = {() => {
        let i = 0;
        i= cartGames.indexOf(game);
        cartGames[i]= cartGames[cartGames.length-1];
        cartGames.pop();
        
        alert(game.name+" removed from cart")
        navigate("/cart");
       }}/>
            <p>{game.name}</p>
            <p>${game.price}</p> 
          </div>
      ))}
   </>
  )
}

export default Checkoutgames