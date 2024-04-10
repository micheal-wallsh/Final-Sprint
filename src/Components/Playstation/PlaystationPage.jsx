import Games from "../Games"
import BackButton from '../BackButton';
import { useNavigate } from "react-router-dom";
import banner from "./ps5-banner.png"

const PlaystationPage = ({games, cartGames}) => {
   
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
    <BackButton onClick = {() => {
          navigate(-1)}}/> 
    <div className = "websitecontainer">
       
 
  <div class = "bannerBox">
  
  <img src = {banner} 
  height = "200px" width = "800px"/> 
<div class = "gameBox">
<Games games={output} cartGames={cartGames}/>


</div>
 </div>
 </div>
 </div>
)
};


export default PlaystationPage