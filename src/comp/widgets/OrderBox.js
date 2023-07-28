import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./OrderBox.css";
import { Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

const OrderBox = (props) => {
  ///////////////////////////////////////////////////////////////////////
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(false);


  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [messageEmpty, setMessageEmpty] = useState(false);

  //Form Details
  const [formName, setFormName] = useState("");
  const [formNumber, setFormNumber] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  ////////////////////////////////////////////////////////////////////////

  let tempalteParams = {
    formName: formName,
    formNumber: formNumber,
    formEmail: formEmail,
    formMessage: formMessage,
  };

  function checkForm() {
    let result = true;

    if (formName === "") {
      result = false;
      setNameEmpty(true);
    } else {
      setNameEmpty(false);
    }
    ///////////////////////
    if (formEmail === "") {
      result = false;
      setEmailEmpty(true);
    } else {
      setEmailEmpty(false);
    }
    ///////////////////////
    if (formMessage === "") {
      result = false;
      setMessageEmpty(true);
    } else {
      setMessageEmpty(false);
    }

    return result;
  }

  function sendForm() {
    sendEmail()
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44ntx5g",
        "template_cqds9hq",
        form.current,
        "uMdPW65UGfGCWdsTe"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Sent");
        },
        (error) => {
          console.log(error.text);
          window.alert("An error occured. Try Again");
        }
      );
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

OrderBox.propTypes = {};

export default OrderBox;

/* rebakat357@inkiny.com */


/*



<>
      <div id="OrderBox">
        <form ref={form} onSubmit={sendEmail}>
          <div className="horSpanner">
            <div className="vertSpanner">
              <label>Name</label>
              <input type="text" id="NameInput" name="user_name" />
            </div>
            <div className="vertSpanner">
              <label>Email</label>
              <input type="email" id="EmailInput" name="user_email" />
            </div>
          </div>
          <div className="vertSpanner">
            <label>Message</label>
            <textarea id="MessageInput" name="message" />
          </div>
          <input id="SubmitInput" type="submit" value="Send" />
        </form>
      </div>
      {emailStatus && (
        <p>
          Your order has been submitted. We will contact you at first chance.
        </p>
      )}
    </>




*/