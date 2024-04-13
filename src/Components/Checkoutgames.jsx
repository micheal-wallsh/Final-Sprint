import React from 'react'
import Button from "./Button"
import {  useNavigate, Link } from "react-router-dom";


const Checkoutgames = ({games, cartGames}) => {
    const navigate = useNavigate();
    numGames=0;

  return (
    <>
   { games.map((game) => (
        <div class = "container" key ={"1"+game.id}>
         <Link to ={`/gamedetails/${game.id}`}>
            <img src = {game.picture} width ="136" height ="243"/>
            </Link>
            <p id="name">{game.name}</p>
            <p id="price">${game.price}</p>
            <Button text = {"Remove from cart"} onClick = {() => {
        let i = 0;
        i= cartGames.indexOf(game);
        cartGames[i]= cartGames[cartGames.length-1];
        cartGames.pop();
        
        alert(game.name+" removed from cart")
        navigate("/cart")
       }}/> 
          </div>
      ))}
   </>
  )
}

export default Checkoutgames