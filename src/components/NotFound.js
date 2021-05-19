import React from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";
import error404Image from "../images/notFound/error404.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-content">
        <div className="notFound-image">
          <img src={error404Image} alt="Not Found" />
        </div>

        <div className="notFound-message">
          <h2>Ooops!</h2>
          <p>The page you are looking for does not exist.</p>
          <Link to="/" className="custom-default-btn notFound-btn">
            <span>Go to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
