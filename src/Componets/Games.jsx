import React from 'react'

const Games = ({games}) => {
  return (
   <>
   { games.map((game) => (
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