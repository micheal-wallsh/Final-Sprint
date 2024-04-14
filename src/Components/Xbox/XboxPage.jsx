import Games from "../Games"
import BackButton from '../BackButton';
import { useNavigate } from "react-router-dom";
import banner from "./xbox-banner.png"
// A componet to display only Xbox games
const XboxPage = ({games, cartGames}) => {
   
  const navigate = useNavigate();
  let output = [];

  //obtian the games to display
  games.forEach((game)=>{

      if(game.console ==="Xbox Series X")
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
<div className = "gameBox">
<Games games={output} cartGames={cartGames}/>


</div>
 </div>
 </div>
 </div>
)
};


export default XboxPage