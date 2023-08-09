import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import GraoBlack from "./../assets/logos/grao.30x47B2.png";
import LandingImg from "./../assets/grao/G1.JPG";
import G1 from "./../assets/grao/G6.png";
import G2 from "./../assets/grao/G7.png";
import G3 from "./../assets/grao/G8.png";
import homeJson from "./../content/home.json";

import Menu from "./../assets/menu/menu.jpg";
import Loading from "./../comp/widgets/Loading";

const Home = ({ language, setActiveLink }) => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div id="HomePage">
      {show ? <Loading loading={loading}/> : null}
      <section id="HomeLanding">
        <img
          alt="Cafe"
          src={LandingImg}
          onLoad={() => {
            setLoading(false);
            setTimeout(() => {
              setShow(false)       
            }, 500);
          }}
        ></img>
        <div className="landingText">
          <h1>{homeJson[language]["titleLanding"]}</h1>
        </div>
      </section>
      {/*--------------------------------------------------------------------------------*/}
      <section id="HomeContent">
        <div className="HomeImgI">
          <img src={G1} alt="cafe"></img>
        </div>
        <div className="HomeImgII">
          <img src={G2} alt="cafe"></img>
        </div>
        <div className="HomeImgIII">
          <img src={G3} alt="cafe"></img>
        </div>

        <div className="HomeDivText">
          {/* <h2>{homeJson[language]["HomeSecI"]["h2"]}</h2> */}
          <p>{homeJson[language]["HomeSecI"]["p1"]}</p>
          <p>{homeJson[language]["HomeSecI"]["p2"]}</p>
          <h3
            onClick={() => {
              setActiveLink("About");
              window.scrollTo(0, 0);
            }}
          >
            {homeJson[language]["HomeSecI"]["h3"]}
          </h3>
        </div>
      </section>

      {/*--------------------------------------------------------------------------------*/}
      <section id="HomeMenu">
        <img id="menuLogo" alt="grao logo" src={GraoBlack}></img>
        <h2>{homeJson[language]["menu"]}</h2>
        <img id="menuImg" alt="menu" src={Menu}></img>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
