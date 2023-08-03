import React from "react";
import PropTypes from "prop-types";
import "./About.css";

// This image is to be changed
import AboutLanding from "./../assets/gallery/B3.jpeg";
import AboutI from "./../assets/gallery/B6.jpg";

import AboutII from "./../assets/gallery/B5.jpg";
import AboutIII from "./../assets/gallery/B2.jpg";

const About = (props) => {
  return (
    <div id="AboutPage">
      <section id="AboutLanding">
        <img alt="Grao title with flowers" src={AboutLanding}></img>
        <h2>About Us</h2>
      </section>
      <section id="AboutSection-I">
        <div className="imgDiv">
          <img alt="food plates" src={AboutI}></img>
        </div>
        <div className="textDiv">
          <h2>Kohvik Grao</h2>
          <p>
            {}
          </p>
          <p>
            {}
          </p>
        </div>
      </section>
      <section id="AboutSection-II">
        <div className="textDiv">
          <h2>Kohvik Grao</h2>
          <p>
            {}
          </p>
          <p>
            {}
          </p>
        </div>
        <div className="imgDiv">
          <img alt="Bottles and food" src={AboutII}></img>
          <img alt="Decorated table with food" src={AboutIII}></img>
        </div>
      </section>
      <section id="AboutSection-III"></section>
    </div>
  );
};

About.propTypes = {};

export default About;
