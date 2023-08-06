import React, { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import "./ContactUs.css"
import ordertJson from "./../../content/order.json"

const ContactUs = ({language}) => {

  const[name, setName] = useState("")
  const[email,setEmail] = useState("")
  const[message, setMessage] = useState("")

  const[messageSent,setMessageSent] = useState(false)


  const form = useRef();

  const checkFileld = () =>{
    let result = true;

    if(name === "" || email === "" || message === ""){
      result = false
    }
    return result;
  }

  const sendEmail = (e) => {

    if(checkFileld()){
      setMessageSent(true)

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
        },
        (error) => {
          console.log(error.text);
        }
      );

    }else{
      window.alert("Please fill all the slots")
    }
  };


  return (
    <form className="d-flex-column align-items-start " ref={form} onSubmit={sendEmail}>
      <h2>{ordertJson[language]["orderTitle"]}</h2>
      <label className="form-label" >{ordertJson[language]["nameInput"]}</label>
      <input onChange={(e)=>{setName(e.target.value)}} className="form-control" type="text" name="user_name" />
      <label className="form-label" >{ordertJson[language]["emailInput"]}</label>
      <input onChange={(e)=>{setEmail(e.target.value)}} className="form-control" type="email" name="user_email" />
      <label className="form-label" >{ordertJson[language]["messageInput"]}</label>
      <textarea onChange={(e)=>{setMessage(e.target.value)}} className="form-control" name="message" />
      <br/>
      <input className="btn" type="submit" value={ordertJson[language]["sendBtn"]} />
      {messageSent && (<p className="success">{ordertJson[language]["successMessage"]}</p>)}
    </form>
  );
};

export default ContactUs;
