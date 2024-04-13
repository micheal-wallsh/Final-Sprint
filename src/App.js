import logo from './logo.svg';
import './App.css';
import SwitchPage from "./Components/Switch/SwitchPage"
import PlaystationPage from"./Components/Playstation/PlaystationPage"
import XboxPage from"./Components/Xbox/XboxPage"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameDetails from "./Components/GameDetails"
import Checkout from './Components/Checkout';
import HomePage from "./Components/HomePage"
import Header from "./Components/Header"
import Checkoutform from './Components/Checkoutform';

function App() {
  let [games, setGames] = useState([]);
  let cartGames = [];

  const fetchGames= async () => {
    const res = await fetch("http://localhost:5000/games");
    const data = await res.json();
    console.log(data)
    
    return data;
  }
  

  useEffect(() => {
    const getGames = async () => {
      const gamesFromServer = await fetchGames();
      setGames(gamesFromServer);
    };
    getGames();
  }, []);


return (
  <div className="App">
    <Router>
      <Header />
      <div className="appContent">
        <Routes>
          <Route path="/switch" element={<SwitchPage games={games} cartGames={cartGames} />} />
          <Route path="/xbox" element={<XboxPage games={games} cartGames={cartGames} />} />
          <Route path="/playstation" element={<PlaystationPage games={games} cartGames={cartGames} />} />
          <Route path="/gamedetails/:id" element={<GameDetails cartGames={cartGames} />} />
          <Route path="/cart" element={<Checkout games={cartGames} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cartForm" element={<Checkoutform cartGames={cartGames}/>}/>
        </Routes>
      </div>
    </Router>
  </div>
);
}

export default App;
