import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavigationMenu.css";

const NavigationMenu = () => {
  const handleShowMenu = () => {
    const BTNBARS = document.getElementById("btnBars");
    const NAVIGATION = document.getElementById("navigation");

    BTNBARS.checked
      ? NAVIGATION.classList.add("show-menu")
      : NAVIGATION.classList.remove("show-menu");
  };

  const handleEffectActive = (e) => {
    const BTNBARS = document.getElementById("btnBars");
    const NAVIGATION = document.getElementById("navigation");
    const ACTIVE_CLASS_ELEMENT = document.querySelector(".active");
    const CLICKED_ITEM = e.target.parentNode;

    if (!CLICKED_ITEM.classList.contains("active")) {
      BTNBARS.checked = false;
      NAVIGATION.classList.remove("show-menu");
      ACTIVE_CLASS_ELEMENT.classList.remove("active");
      CLICKED_ITEM.classList.add("active");
    }
  };

  return (
    <React.Fragment>
      <div className="bars">
        <input type="checkbox" id="btnBars" onClick={handleShowMenu} />
        <label htmlFor="btnBars">
          <span id="line1"></span>
          <span id="line2"></span>
          <span id="line3"></span>
        </label>
      </div>

      <ul className="navigation" id="navigation">
        <li>
          <Link to="/" className="website-section active">
            <span onClick={handleEffectActive}>Home </span>
          </Link>
        </li>
        <li>
          <Link to="/AboutMe" className="website-section">
            <span onClick={handleEffectActive}>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/Services" className="website-section">
            <span onClick={handleEffectActive}>Services</span>
          </Link>
        </li>
        <li>
          <Link to="/Projects" className="website-section">
            <span onClick={handleEffectActive}>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="website-section">
            <span onClick={handleEffectActive}>Contact</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavigationMenu;
