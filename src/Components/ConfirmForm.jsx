import React from 'react'
import Button from './Button'
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ComfirmForm = ({details, cartGames}) => {
  let info = details[0]
  const navigate = useNavigate();

  return (
    <div>
        <h4>Please confirm that the following information is correct</h4>
        <hr/>
        <br/>
        <p>Name:</p>
        <br/>
        <p>{info.name}</p>
        <br/>
        <p>Street Address:</p>
        <br/>
        <p>{info.stAdd}</p>
        <br/>
        <p>City:</p>
        <br/>
        <p>{info.city}</p>
        <br/>
        <p>Province:</p>
        <br/>
        <p>{info.province}</p>
        <br/>
        <p>Country:</p>
        <br/>
        <p>{info.country}</p>
        <br/>
        <p>Postal Code:</p>
        <br/>
        <p>{info.postal}</p>
        <br/>
        <p>Card Number:</p>
        <br/>
        <p>{info.cardNumber}</p>
        <br/>
        <p>Card Expirey Date:</p>
        <br/>
        <p>{info.cardExpir}</p>
        <br/>
        <p>Card Security Code:</p>
        <br/>
        <p>{info.securityCode}</p>

        <Button color={"White"} text={"Back"} onClick={()=>{
            navigate(-1);
        }}/>

<Button color={"White"} text={"Confirm"} onClick={()=>{
            alert("Thank you for ypur purchase!");
            cartGames=[];
            navigate("/");
        }}/>
    </div>
  )
}

export default ComfirmForm