import React, { useState } from "react";
import PropTypes from "prop-types";
import "./OrderBox.css";
import { Button, TextField } from "@mui/material";

const OrderBox = (props) => {
  const[emailStatus, setEmailStatus] = useState(false)

  const[nameEmpty,setNameEmpty] = useState(false)
  const[emailEmpty,setEmailEmpty] = useState(false)
  const[messageEmpty,setMessageEmpty] = useState(false)

  //Form Details
  const[formName,setFormName] = useState("")
  const[formNumber,setFormNumber] = useState("")
  const[formEmail,setFormEmail] = useState("")
  const[formMessage,setFormMessage] = useState("")

  function checkForm(){
      let result = true;

      if(formName === ""){
        result = false;
        setNameEmpty(true);
      }
      else{
        setNameEmpty(false)
      }
      ///////////////////////
      if(formEmail === ""){
        result = false;
        setEmailEmpty(true)
      }else{
        setEmailEmpty(false)
      }
      ///////////////////////
      if(formMessage === ""){
        result = false;
        setMessageEmpty(true)
      }else{
        
        setMessageEmpty(false)
      }

      return result;
  }

  function sendForm(){
    checkForm()
  }


  return (
    <div id="OrderBox">
      <h2>Sumbit order</h2>
      <div className="orderSpanner">
        <TextField
          sx={{ width: "300px" }}
          id="NameInput"
          label="Name"
          variant="outlined"
          required
          error={nameEmpty}
          onChange={(e)=>{setFormName(e.target.value)}}
        />
        <TextField
          sx={{ width: "300px" }}
          id="PhoneIntput"
          label="Phone"
          variant="outlined"
          onChange={(e)=>{setFormNumber(e.target.value)}}
        />
      </div>
      <TextField
        sx={{ width: "610px" }}
        id="EmailInput"
        label="Email"
        variant="outlined"
        required
        error={emailEmpty}
        onChange={(e)=>{setFormEmail(e.target.value)}}
      />
      <TextField
        sx={{ width: "610px"}}
        multiline
        id="MessageInput"
        rows={5}
        label="Message"
        variant="outlined"
        required
        error={messageEmpty}
        onChange={(e)=>{setFormMessage(e.target.value)}}
      />
      <Button sx={{ width: "100px" }} variant="outlined" color="success" onClick={()=>{sendForm()}}>
        Submit
      </Button>
      {emailStatus && (<p>Your order has been submitted. We will contact you at first chance.</p>)}
    </div>
  );
};

OrderBox.propTypes = {};

export default OrderBox;


/* rebakat357@inkiny.com */