import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button";

const Games = ({games, cartGames}) => {
    console.log();
  return (
   <>
   { games.map((game) => (
        <div class = "container">
            <Link to ={`/gamedetails/${game.id}`}>
                details
            </Link>

         <img src = {game.picture} width ="136" height ="243"/>
            <p>{game.name}</p>
            <p>${game.price}</p>
        
     
        <Button color ={"red"} text = {"Add to cart"} onClick = {() => {
        cartGames.push(game)
        alert(game.name+" added to cart")}}/> 
          </div>
      ))}
   </>
  )
}

export default Games