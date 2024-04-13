import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

class Details{
  constructor(n,st,c,p,count,post,cardNum,cardExpir,cardSecur){
      this.name = n;
      this.stAdd = st;
      this.city=c;
      this.province = p;
      this.country=count;
      this.postal=post;
      this.cardNum = cardNum
      this.cardExpir = cardExpir
      this.cardSecur = cardSecur
  }
}

const Checkoutform = ({cartGames, purchaseInfo}) => {
  let [name, setName] = useState("");
  let [stAdd, setStAdd] = useState("");
  let [city, setCity] = useState("");
  let [province, setProvince] = useState("");
  let [country, setCountry] = useState("");
  let [postal, setPostal] = useState("");
  let [cardNumber, setCardNumber] = useState("");
  let [cardExrp, setCardExrp] = useState("");
  let [securityCode, setSecurityCode] = useState("");
  const navigate = useNavigate();

    let onSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        if (name===""||!stAdd===""||!city===""||!province===""||!country===""||!postal===""||cardNumber===""||!cardExrp===""||!securityCode==="") {
          alert("Please fill all textboxs");
          return;
          
        }
        
       let  details = new Details(name,stAdd,city,province,country,postal,cardNumber,cardExrp,securityCode)
       purchaseInfo.push(details)
       console.log("details: "+ purchaseInfo)
       navigate("/confirm");
       
      }

  return (
    
    <div>
      <br/>
     
        <form  onSubmit={onSubmit}>
            
        <label>
            Name
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
<br/>
<br/>
        <label>
                    Street Address
        </label>
        <br/>
        
        <input
          type="text"
          
          onChange={(e) => setStAdd(e.target.value)}
          value={stAdd}
        />
    <br/>
    <br/>

      <label>
                    City
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <br/>
        <br/>

        <label>
                    Province
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setProvince(e.target.value)}
          value={province}
        />
        <br/>
        <br/>

        <label>
                    Country
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <br/>
        <br/>

        <label>
                    Postal Code
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setPostal(e.target.value)}
          value={postal}
        />
        <br/>
        <br/>

        <label>
                    Card Number
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setCardNumber(e.target.value)}
          value={cardNumber}
        />
        <br/>
        <br/>

        <label>
                    Card Expiry Date
        </label>
        <br/>
        <input
          type="text"
          
          onChange={(e) => setCardExrp(e.target.value)}
          value={cardExrp}
        />
        <br/>
        <br/>

        <label>
                    Card Security Code
        </label>
        <br/>
        <input
          type="text" 
          
          onChange={(e) => setSecurityCode(e.target.value)}
          value={securityCode}
        />
        <br/>
        <br/>

          <input type="submit" value="Sumbit"  />
          
          
        </form>
    </div>
    
  )
}

export default Checkoutform