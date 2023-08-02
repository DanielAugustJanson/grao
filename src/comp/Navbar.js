/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import GraoBlack from "./../assets/logos/grao.30x47B2.png";
import VeneTeater from "./../assets/logos/VeneTeater.svg";
import DividerNav from "./../assets/dividers/div-V.svg";
import "./Navbar.css";

const Navbar = ({ language, activeLink, setActiveLink }) => {
  return (
    <nav>
      <div id="NavContainer">
        <img id="NavDivider" alt="divider" src={DividerNav}></img>
        <div id="NavDiv">
          <div className="logos">
            <img
              className="logo"
              alt="Grao Logo"
              src={GraoBlack}
              onClick={() => {
                setActiveLink("Home");
              }}
            ></img>
            <a
              href="https://www.veneteater.ee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Vene Teater Logo"
                className="logo"
                src={VeneTeater}
              ></img>
            </a>
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
              id="OrderNav"
            >
              Order
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
