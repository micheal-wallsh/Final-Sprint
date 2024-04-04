import React from 'react'
import { Link } from "react-router-dom";

const Games = ({games}) => {
  return (
   <>
   { games.map((game) => (
        <div class = "container">
            <Link to ={`/gamedetails/${game.id}`}>
                details
            </Link>

         <img src = {game.picture} width ="136" height ="243"/>
            <p>{game.name}</p>
            <p>{game.price}</p> 
          </div>
      ))}
   </>
  )
}

export default Games