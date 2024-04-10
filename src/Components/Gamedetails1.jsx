import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from"./Button";

const Gamedetails1 = ({cartGames}) => {
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
    <Button color ={"white"} text = {"Back"} onClick = {() => {
          navigate(-1)}}/>
    <div>
        <img src={`${gameDetails.picture}`} height = "200px" width ="170px"/>
        <p>{gameDetails.name}</p>
        <p>For {gameDetails.console}</p>
        <div>
            <h4>
                About This Item
            </h4>
            <hr/>
            <p>
                {gameDetails.info}
            </p>
        </div>
        {
        gameDetails.name != cartGames.forEach((game)=>{
          return game.name
        }) ? (
     
        <Button color ={"red"} text = {"Add to cart"} onClick = {() => {
        cartGames.push(gameDetails)
        gameDetails.cart = true
        console.log("cart"+gameDetails.cart);
      }
      }/> 
        ): (
        <p>
            
            Game in cart
        </p>
        )}
    </div>
    </div>
  )
}

export default Gamedetails1