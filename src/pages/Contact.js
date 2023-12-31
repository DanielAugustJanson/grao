import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import ContactImage from "../assets/images/VT2.jpg";
import contactJSON from "./../content/contact.json"
import Loading from "./../comp/widgets/Loading";

const Contact = ({language}) => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div id="ContactPage">
      {loading ? <Loading loading={loading} /> : null}
      <section id="ContactLanding">
      <img alt="Vene Teater Front View" src={ContactImage} onLoad={() => {
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}></img>
        <h2>{contactJSON[language]["titleLanding"]}</h2>
      </section>
      <section id="ContactInfo">
      <div id="ContactMapDiv">
      <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d402.60928181608284!2d24.74457470090058!3d59.43268360365588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949e88296b5d%3A0x8fd78b587caa911c!2sArt-Salong%20GraO!5e0!3m2!1set!2see!4v1690038528730!5m2!1set!2see"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            zoom="12"
          ></iframe>
      </div>
        <div id="ContactData">
          <h3>{contactJSON[language]["contactInfo"]["h3"]}</h3>
          <p>Vene Teater<br/>Vabaduse Väljak 5<br/>10141</p>
          <p>{contactJSON[language]["contactInfo"]["contact"]}<br/>+372 5661 6636<br/>graocatering@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;