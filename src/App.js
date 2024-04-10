import logo from './logo.svg';
import './App.css';
import SwitchPage from "./Components/Switch/SwitchPage"
import PlaystationPage from"./Components/Playstation/PlaystationPage"
import XboxPage from"./Components/Xbox/XboxPage"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gamedetails1 from "./Components/Gamedetails1"
import Checkout from './Components/Checkout';
import HomePage from "./Components/HomePage"
import Header from "./Components/Header"

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
      const tasksFromServer = await fetchGames();
      setGames(tasksFromServer);
    };
    getGames();
  }, []);

console.log("The data is an "+ Array.isArray(games))
return (
  <div className="App">
    <Router>
      <Header />
      <div className="appContent">
        <Routes>
          <Route path="/switch" element={<SwitchPage games={games} cartGames={cartGames} />} />
          <Route path="/xbox" element={<XboxPage games={games} cartGames={cartGames} />} />
          <Route path="/playstation" element={<PlaystationPage games={games} cartGames={cartGames} />} />
          <Route path="/gamedetails/:id" element={<Gamedetails1 cartGames={cartGames} />} />
          <Route path="/cart" element={<Checkout games={cartGames} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  </div>
);
}

export default App;
