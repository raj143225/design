import React from "react";
import classNames from "classnames";
import Link from "../../../../core/src/components/link";
import * as styles from "./header.css";
import Architect from "./images/architect.jpg";

const Header = (props) => {
  return (
      <div>
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>
            <div className="w3-right w3-hide-small">
              <a href="#projects" className="w3-bar-item w3-button">Projects</a>
              <a href="#about" className="w3-bar-item w3-button">About</a>
              <a href="#contact" className="w3-bar-item w3-button">Contact</a>
            </div>
          </div>
        </div>
        <header className="w3-display-container w3-content w3-wide header-container" id="home"  style={{maxWidth: "1500px"}}>
          <img className="w3-image" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Leonardo_Glass_Cube_-_Corporate_architecture.jpg" alt="Architecture" width="1500" height="800" />
            <div className="w3-display-middle w3-margin-top w3-center">
              <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span></h1>
            </div>
        </header>
      </div>
  );
};


export default Header;