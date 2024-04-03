import React from 'react'
import Games from"./Games"

const Xboxgames = ({games}) => {
  let output = [];
  games.forEach((game)=>{

      if(game.console ==="Xbox Series X")
      {
          output.push(game);
      }})
      console.log(output)
return (
  
  <div>
    <button>back</button>
    <div className = "websitecontainer">
       
 
  <div class = "bannerBox">
  
  <img src = "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_switch_1/nintendo_switch_oled_2/H2x1_NintendoSwitch_Family_enGB.jpg" 
  height = "200px" width = "650px"/> 
<div class = "gameBox">
<Games games={output}/>

</div>
 </div>
 </div>
 </div>
  )
}

export default Xboxgames