import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// A componet for having a form for the user to use for purchasing their games

//object that contians all of the users data for purchasing games
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

  //Enter if the user hits submit
    let onSubmit = (e) => {
        e.preventDefault();
       
        //enter if the user did not fill out all the feilds
        if (name===""||!stAdd===""||!city===""||!province===""||!country===""||!postal===""||cardNumber===""||!cardExrp===""||!securityCode==="") {
          alert("Please fill all textboxs");
          return;
          
        }
       //create an object from the data the user subbited 
       let  details = new Details(name,stAdd,city,province,country,postal,cardNumber,cardExrp,securityCode)
       purchaseInfo.push(details)
      //navigate to the confirm page
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
                    Street Addresss
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
                    Card Expirey Date
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