import logo from './logo.svg';
import Switchgames from "./Componets/Switch/Switchgames"
import PSgames from "./Componets/Psgames"
import './App.css';
import Psgames from './Componets/Psgames';
import Xboxgames from"./Componets/Xboxgames"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gamedetails1 from "./Componets/Gamedetails1"
import Checkout from './Componets/Checkout';
import Header from "./Componets/Header"

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
      <Header/>
      <Routes>
      
      <Route path ="/switch" element = {<Switchgames games={games} cartGames={cartGames}/>}/>
      <Route path ="/gamedetails/:id" element = {<Gamedetails1 cartGames={cartGames}/>}/>
      <Route path ="/cart" element = {<Checkout games ={cartGames}/>}/>
     
    </Routes>
     
    </Router>
        <div>hey</div>
         </div>
         
  );
}

export default App;
