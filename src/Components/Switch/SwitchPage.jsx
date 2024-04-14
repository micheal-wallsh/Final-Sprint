import Games from "../Games"
import BackButton from '../BackButton';
import { useNavigate } from "react-router-dom";
import banner from "./Switch-Banner.jpg"
// A componet to display only Nintendo Switch games

const SwitchPage = ({games, cartGames}) => {
   
  const navigate = useNavigate();
  let output = [];
  //obtian the games to display
  games.forEach((game)=>{

      if(game.console ==="Nintendo Switch")
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


export default SwitchPage