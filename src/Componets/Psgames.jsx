import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gamedetails from "./Gamedetails1";
import Games from './Games';


const Psgames = (games) => {
   console.log(Array.isArray(games))
   console.log(games);
   let i = 0
   let gameData = [];
   while(i<= games.legent){
    gameData.push(games[i]);
   }
   console.log(Array.isArray(gameData))
  var output = [];
  {gameData.forEach((game)=>{

      if(game.console ==="Playstation 5")
      {
          output.push(game);
      }})
      console.log(output)
return (
  
  <div>
    <button>back</button>
    <div class = "websitecontainer">
       
 <Games games={output}/>
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
}

export default Psgames