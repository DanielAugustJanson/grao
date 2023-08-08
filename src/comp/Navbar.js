/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import GraoBlack from "./../assets/logos/grao.30x47B2.png";
import VeneTeater from "./../assets/logos/VeneTeater.svg";
// import DividerNav from "./../assets/dividers/div-V.svg";
import "./Navbar.css";
import navbarJson from "./../content/navbar.json"

const Navbar = ({ language, activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div id="NavContainer">
        {/* <img id="NavDivider" alt="divider" src={DividerNav}></img> */}
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
          </div>
          <div className="links">
            <p
              onClick={() => {
                setActiveLink("Home");
              }}
              id="Home"
            >
              {navbarJson[language]["home"]}
            </p>

            <p
              onClick={() => {
                setActiveLink("About");
              }}
              id="About"
            >
              {navbarJson[language]["about"]}
            </p>

            {/* <p
              onClick={() => {
                setActiveLink("Gallery");
              }}
              id="Gallery"
            >
              Gallery
            </p>*/}

            <p
              onClick={() => {
                setActiveLink("Contact");
              }}
              id="Contact"
            >
              {navbarJson[language]["contact"]}
            </p>

            <p
              onClick={() => {
                setActiveLink("Order");
              }}
              id="OrderNav"
            >
              {navbarJson[language]["order"]}
            </p>
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
        </div>
      </div>

      {/* Mobile Menu Container*/}

      <div id="MobileMenuDiv">
        <div id="MobileMenuMainBar">
          <img
            className="logo"
            alt="Grao Logo"
            src={GraoBlack}
            onClick={() => {
              setActiveLink("Home");
            }}
          ></img>
          <svg
            onClick={()=>{
              setMenuOpen(!menuOpen)
              console.log("Menu clicked" + " Menu state: " +  {menuOpen})
            }}

            id="MenuBurger" 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              color="black"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {/* Menu Lower area*/}
        {menuOpen &&  (
          <div id="MobileToggleMenu">
          <div id="MobileLinks">
          <p
              onClick={() => {
                setActiveLink("Home");
                setMenuOpen(false)
              }}
              id="Home"
            >
              {navbarJson[language]["home"]}
            </p>

            <p
              onClick={() => {
                setActiveLink("About");
                setMenuOpen(false)
              }}
              id="About"
            >
              {navbarJson[language]["about"]}
            </p>

            {/* <p
              onClick={() => {
                setActiveLink("Gallery");
              }}
              id="Gallery"
            >
              Gallery
            </p>*/}

            <p
              onClick={() => {
                setActiveLink("Contact");
                setMenuOpen(false)
              }}
              id="Contact"
            >
              {navbarJson[language]["contact"]}
            </p>

            <p
              onClick={() => {
                setActiveLink("Order");
                setMenuOpen(false)
              }}
              id="OrderNav"
            >
              {navbarJson[language]["order"]}
            </p>
          </div>
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
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
