import React from 'react'

const Games = (games) => {
let i = 0
   let gameData = [];
   while(i<= games.legent-1){
    gameData.push(games[i]);
   }
  return (
   <>
   { gameData.map((game) => (
        <div class = "container">
         <img src = {game.picture} width ="136" height ="243"/>
            <p>{game.name}</p>
            <p>{game.price}</p> 
          </div>
      ))}
   </>
  )
}

export default Games