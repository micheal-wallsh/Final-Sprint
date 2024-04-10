import Games from "../Games"
import BackButton from '../BackButton';
import { useNavigate } from "react-router-dom";
import banner from "./Switch-Banner.jpg"

const SwitchPage = ({games, cartGames}) => {
   
  const navigate = useNavigate();
  let output = [];
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


export default SwitchPage