import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Gamedetails1 = () => {
    const [loading, setLoading] = useState(true);
  const [game, setGame] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/games/${params.id}`);

      if (res.status === 404) {
        navigate("/");
      }

      const data = await res.json();

      setGame(data);
      setLoading(false);
    };


    fetchTask();
  });
  return (
    <div>
    <button>Back</button>
    <div>
        <img src={`${game.picture}`} height = "200px" width ="170px"/>
        <p>{game.name}</p>
        <p>For {game.console}</p>
        <div>
            <h4>
                About This Item
            </h4>
            <hr/>
            <p>
                {game.info}
            </p>
        </div>
        <button>Add To Cart</button>
    </div>
    </div>
  )
}

export default Gamedetails1