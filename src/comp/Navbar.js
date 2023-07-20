/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import GraoBorder from "./../assets/logos/grao.13x8mm.png";
import GraoGold from "./../assets/logos/grao.30x47.png";
import GraoBlack from "./../assets/logos/grao.30x47B2.png";
import GraoWhite from "./../assets/logos/grao.30x472.png";

const Navbar = ({ language, activeLink, setActiveLink }) => {
  return (
    <nav>
      <div className="navDiv">
        <div className="logos">
          <img alt="Grao Logo" src={GraoBlack} onClick={()=>{
            setActiveLink("Home")
          }}></img>
        </div>

        <div className="links">
          <p
            onClick={() => {
              setActiveLink("Home");
            }}
            id="Home"
          >
            Home
          </p>

          <p
            onClick={() => {
              setActiveLink("About");
            }}
            id="About"
          >
            About
          </p>

          <p
            onClick={() => {
              setActiveLink("Gallery");
            }}
            id="Gallery"
          >
            Gallery
          </p>

          <p
            onClick={() => {
              setActiveLink("Contact");
            }}
            id="Contact"
          >
            Contact
          </p>

          <p
            onClick={() => {
              setActiveLink("Order");
            }}
            id="Order"
          >
            Order
          </p>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
