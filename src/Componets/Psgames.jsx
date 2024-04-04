import React from 'react'
import { useNavigate } from "react-router-dom";
import Games from './Games';
import Button from './Button';


const Psgames = ({games}) => {
  const navigate = useNavigate();
  let output = [];
  games.forEach((game)=>{

      if(game.console ==="Playstation 5")
      {
          output.push(game);
      }})
      console.log(output)
return (
  
  <div>
    <Button color ={"white"} text = {"Back"} onClick = {() => {
          navigate(-1)}}/>
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


export default Psgames