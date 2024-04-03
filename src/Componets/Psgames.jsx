import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gamedetails from "./Gamedetails1";
import Games from './Games';


const Psgames = (games) => {
   
  var output = [];
  games.forEach((game)=>{

      if(game.console ==="Playstation 5")
      {
          output.push(game);
      }
      
      
   
  })
return (
  
  <div>
    <button>back</button>
    <div class = "websitecontainer">
       
 
  <div class = "bannerBox">
  <img src = "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_switch_1/nintendo_switch_oled_2/H2x1_NintendoSwitch_Family_enGB.jpg" 
  height = "200px" width = "650px"/> 
<div class = "gameBox">
<Games games1 = {output}/>
<div dangerouslySetInnerHTML= {{__html:`${output}`}}></div>
</div>
 </div>
 </div>
 </div>
  )
}

export default Psgames