import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from"./Button";
import BackButton from "./BackButton"
import "./GameDetails.css"

const GameDetails = ({cartGames}) => {
  const [gameDetails, setGame] = useState({});
  
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  console.log(useParams());

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/games/${params.id}`);
      const data = await res.json();
console.log(data);
      setGame(data);
    };

    fetchTask();
    
  });
  
  return (
    <div>
    <BackButton onClick = {() => {
          navigate(-1)}}/> 
    <div className="detailsPage">
      <div className="gameInfo">
        <img src={`${gameDetails.picture}`} height = "300px" width ="255px"/>
        <h2>{gameDetails.name}</h2>
        <p>For {gameDetails.console}</p>
        {
        gameDetails.name != cartGames.forEach((game)=>{
          return game.name
        }) ? (
     
        <Button text = {"Add to cart"} onClick = {() => {
        cartGames.push(gameDetails)
        gameDetails.cart = true
        console.log("cart"+gameDetails.cart);
        alert(gameDetails.name+" added to cart!")
      }
      }/> 
        ): (
        <p>
            Game in cart
        </p>
        )}
      </div>
        <div className="gameText">
            <h4>
                About This Item
            </h4>
            <hr/>
            <p>
                {gameDetails.info}
            </p>
        </div>
        
    </div>
    </div>
  )
}

export default GameDetails