import React from 'react'

const Games = (games1) => {


    console.log(games1.isArray)

    
    let output = games1.map((game) => (
        <div class = "container">
         <img src = {game.picture} width ="136" height ="243"/>
            <p>{game.name}</p>
            <p>{game.price}</p> 
          </div>
      ))
      console.log(output)
    
    
  return (
   <p>hi</p>
  )
}

export default Games