import logo from './logo.svg';
import Switchgames from "./Componets/Switchgames"
import PSgames from "./Componets/Psgames"
import './App.css';
import Psgames from './Componets/Psgames';
import Xboxgames from"./Componets/Xboxgames"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameDetails1 from "./Componets/Gamedetails1"

function App() {
  let [games, setGames] = useState([]);

  const fetchGames= async () => {
    const res = await fetch("http://localhost:5000/games");
    const data = await res.json();
    console.log(data)
    
    return data;
  }
  

  useEffect(() => {
    const getGames = async () => {
      const tasksFromServer = await fetchGames();
      setGames(tasksFromServer);
    };
    getGames();
  }, []);

console.log("The data is an "+ Array.isArray(games))
  return (
    <div className="App">
      <header>
      <h2>Company Name</h2>
      <hr/>
      </header>
      {games.length > 0 ? (
      <Switchgames  games={games}/>)
      : (
        "No games to show"
      )}
      <Router>
      <Routes>
    
     <Route path ="/gamedetails:id" element = {<GameDetails1/>}/>
     </Routes>
     </Router>
         </div>
  );
}

export default App;
