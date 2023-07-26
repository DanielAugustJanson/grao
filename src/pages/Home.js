import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import GraoBlack from "./../assets/logos/grao.30x47B2.png";
import LandingImg from "./../assets/grao/G1.JPG";
import G1 from "./../assets/grao/G6.png";
import G2 from "./../assets/grao/G7.png";
import G3 from "./../assets/grao/G8.png";

import Menu from "./../assets/menu/menu.jpg";

const Home = ({ language, setActiveLink }) => {
  return (
    <div>
      <section id="HomeLanding">
        <img alt="Cafe" src={LandingImg}></img>
        <h1>Magusa Elu Kunst</h1>
        <h2>Kohvik Grao</h2>
      </section>
      <section id="HomeContent">
        <div className="spannerHor">
          <div className="galleryDiv">
            <img src={G1} alt="cafe" className="galleryUpper"></img>
            <div className="galleryLower">
              <img src={G2} alt="cafe"></img>
              <img src={G3} alt="cafe"></img>
            </div>
          </div>
          <div className="TextDiv">
            <h2>Kovhik Grao</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p
              onClick={() => {
                setActiveLink("About");
              }}
            >
              About us
            </p>
          </div>
        </div>
      </section>
      <section id="HomeMenu">
        <div>
          <img id="menuLogo" alt="grao logo" src={GraoBlack}></img>
          <h2>Menu</h2>
          <img id="menuImg" alt="menu" src={Menu}></img>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
