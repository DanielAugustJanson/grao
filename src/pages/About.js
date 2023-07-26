import React from "react";
import PropTypes from "prop-types";
import "./About.css";

// This image is to be changed
import AboutLanding from "./../assets/gallery/B3.jpeg";
import AboutI from "./../assets/gallery/B6.jpg";

import AboutII from "./../assets/gallery/B5.jpg"
import AboutIII from "./../assets/gallery/B2.jpg"


const About = (props) => {
  return (
    <div>
      <section id="AboutLanding">
        <img alt="Grao title with flowers" src={AboutLanding}></img>
        <h2>About Us</h2>
      </section>
      <section id="AboutSection-I">
        <div className="spannerHor">
          <img alt="food plates" src={AboutI}></img>
          <div className="textDiv">
            <h2>Kohvik Grao</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <section id="AboutSection-II">
        <div className="spannerHor">
          <div className="textDiv">
            <h2>Kohvik Grao</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img alt="Bottles and food" src={AboutII}></img>
          <img alt="Decorated table with food" src={AboutIII}></img>
        </div>
      </section>
      <section id="AboutSection-III">
        <div className="spannerHor">
          
        </div>
      </section>
    </div>
  );
};

About.propTypes = {};

export default About;
