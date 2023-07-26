import React, { useState } from "react";
import PropTypes from "prop-types";
import "./OrderBox.css";
import { Button, TextField } from "@mui/material";

const OrderBox = (props) => {
  const[emailStatus, setEmailStatus] = useState(false)
  const[emailMsg, setEmailMsg] = useState(null)


  return (
    <div id="OrderBox">
      <div className="orderSpanner">
        <TextField
          sx={{ width: "300px" }}
          id="NameInput"
          label="Name"
          variant="outlined"
        />
        <TextField
          sx={{ width: "300px" }}
          id="PhoneIntput"
          label="Phone"
          variant="outlined"
        />
      </div>
      <TextField
        sx={{ width: "610px" }}
        id="EmailInput"
        label="Email"
        variant="outlined"
      />
      <TextField
        sx={{ width: "610px" }}
        multiline
        id="MessageInput"
        rows={5}
        label="Message"
        variant="outlined"
      />
      <Button sx={{ width: "100px" }} variant="outlined" color="success" onClick={()=>{setEmailStatus(true)}}>
        Submit
      </Button>
      {emailStatus && (<p>Your order has been submitted. We will contact you at first chance.</p>)}
    </div>
  );
};

OrderBox.propTypes = {};

export default OrderBox;
