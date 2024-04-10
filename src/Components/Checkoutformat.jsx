import React from 'react'
import Checkoutgames from './Checkoutgames'

const Checkoutformat = ({games, price}) => {
  return (
    <div>
    <Checkoutgames games ={games} cartGames = {games}/>
    <br/>
    <h4>Total</h4>
    <hr/>
    <p>${price}</p>
    </div>
  )
}

export default Checkoutformat