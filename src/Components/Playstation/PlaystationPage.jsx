import Games from "../Games"
import BackButton from '../BackButton';
import { useNavigate } from "react-router-dom";
import banner from "./ps5-banner.png"
// A componet to display only Playstation games
const PlaystationPage = ({games, cartGames}) => {
   
  const navigate = useNavigate();
  let output = [];

  //obtian the games to display
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
       
 
  <div className = "bannerBox">
  
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