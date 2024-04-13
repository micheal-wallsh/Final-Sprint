import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from "react";



const Checkoutform = ({cartGames}) => {
  let [name, setName] = useState("");
  let [stAdd, setStAdd] = useState("");
  let [city, setCity] = useState("");
  let [province, setProvince] = useState("");
  let [country, setCountry] = useState("");
  let [postal, setPostal] = useState("");
  let [cardNumber, setCardNumber] = useState("");
  let [cardExrp, setCardExrp] = useState("");
  let [securityCode, setSecurityCode] = useState("");

    let onSubmit = (e) => {
        e.preventDefault();
        if (!name||!stAdd||!city||!province||!country||!postal||cardNumber||!cardExrp||!securityCode) {
          alert("Please fill all textboxs");
          return;
          
        }
        alert(" Thank your for your purchase")

        cartGames=[];
       

  return (
    <div>
      <p>Hi</p>
        <form  onSubmit={onSubmit}>
            
        <label>
            Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />

        <label>
                    Street Addresss
        </label>
        <input
          type="text"
          value={stAdd}
          onChange={(e) => setStAdd(e.target.value)}
          
        />
    

      <label>
                    City
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          
        />

        <label>
                    Province
        </label>
        <input
          type="text"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          
        />

        <label>
                    Country
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          
        />

        <label>
                    Postal Code
        </label>
        <input
          type="text"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          
        />

        <label>
                    Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          
        />

        <label>
                    Card Expirey Date
        </label>
        <input
          type="text"
          value={cardExrp}
          onChange={(e) => setCardExrp(e.target.value)}
          
        />

        <label>
                    Card Security Code
        </label>
        <input
          type="text" 
          value={securityCode}
          onChange={(e) => setSecurityCode(e.target.value)}
         
        />

          <input type="submit" value="Sumbit"  />
          
          
        </form>
    </div>
  )
}
}

export default Checkoutform