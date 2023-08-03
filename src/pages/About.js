import React from "react";
import PropTypes from "prop-types";
import "./About.css";
import aboutJson from "./../content/about.json"

// This image is to be changed
import AboutLanding from "./../assets/gallery/B3.jpeg";
import AboutI from "./../assets/gallery/B6.jpg";

import AboutII from "./../assets/gallery/B5.jpg";
import AboutIII from "./../assets/gallery/B2.jpg";

const About = ({language}) => {
  return (
    <div id="AboutPage">
      <section id="AboutLanding">
        <img alt="Grao title with flowers" src={AboutLanding}></img>
        <h2>{aboutJson[language]["titleLanding"]}</h2>
      </section>
      <br/>
      <section id="AboutSection-I">
        <div className="imgDiv">
          <img alt="food plates" src={AboutI}></img>
        </div>
        <div className="textDiv">
          <h2>{aboutJson[language]["AboutSectionI"]["h2"]}</h2>
          <p>
            {aboutJson[language]["AboutSectionI"]["p1"]}
          </p>
          <p>
            {aboutJson[language]["AboutSectionI"]["p2"]}
          </p>
        </div>
      </section>
      <br/>
      <section id="AboutSection-II">
        <div className="textDiv">
        <h2>{aboutJson[language]["AboutSectionII"]["h2"]}</h2>
          <p>
            {aboutJson[language]["AboutSectionII"]["p1"]}
          </p>
          <p>
            {aboutJson[language]["AboutSectionII"]["p2"]}
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
