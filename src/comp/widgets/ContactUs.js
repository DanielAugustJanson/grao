import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
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
  };

  return (
    <form className="d-flex-column align-items-start " ref={form} onSubmit={sendEmail}>
      <h2>Send us custom order</h2>
      <label className="form-label" >Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label className="form-label" >Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label className="form-label" >Message</label>
      <textarea className="form-control"  name="message" />
      <br/>
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
