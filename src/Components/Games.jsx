import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button";

const Games = ({games, cartGames}) => {
    
  return (
   <>
   { games.map((game) => (
        <div className = "container" key ={game.id}>
            <Link to ={`/gamedetails/${game.id}`}>
            <img src = {game.picture} width ="136" height ="243"/>
            </Link>

         
            <p id="name" data-testid="nameTest">{game.name}</p>
            <p id="price" data-testid="priceTest">${game.price}</p>
        
     
        <Button text = {"Add to cart"} id="addToCart" onClick = {() => {
        cartGames.push(game)
        alert(game.name+" added to cart")}}/> 
          </div>
      ))}
   </>
  )
}

export default Games