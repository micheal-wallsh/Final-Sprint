import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from"./Button";
import BackButton from "./BackButton"
import "./GameDetails.css"
//Componet to display the details of a selected game

const GameDetails = ({cartGames}) => {
  const [gameDetails, setGame] = useState({});
  

  const params = useParams();
  const navigate = useNavigate();
  
// obtian the dat of the game from the json-server
  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(`http://localhost:5000/games/${params.id}`);
      const data = await res.json();

      setGame(data);
    };

    fetchGame();
    
  });
  
  return (
    <div>
    <BackButton onClick = {() => {
          navigate(-1)}}/> 
    <div className="detailsPage">
      <div className="gameInfo">
        <img src={`${gameDetails.picture}`} height = "300px" width ="255px"/>
        <h2 data-testid="gameName">{gameDetails.name}</h2>
        <p data-testid="console">For {gameDetails.console}</p>
        
     
        <Button text = {"Add to cart"} onClick = {() => {
          //Add game to the cart
        cartGames.push(gameDetails)
        alert(gameDetails.name+" added to cart!")
      }
      }/> 
        
      </div>
        <div className="gameText">
            <h4 data-testid="gameDes">
                About This Item
            </h4>
            <hr/>
            <p data-testid="gameInfo">
                {gameDetails.info}
            </p>
        </div>
        
    </div>
    </div>
  )
}

export default GameDetails