import React from "react";

import "../styles/HomePage.css";
import personalPhoto from "../images/homePage/personalPhoto.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="home">
        {/* Presentation */}
        <div className="text-welcome">
          <h2>
            <span>Welcome to my website</span>
          </h2>
          <div className="photo-and-description">
            <img src={personalPhoto} alt="Personal " />
            <div className="description">
              <p>
                My name is Juan Fernando Vargas Garcés, I live in Colombia in
                the city of Medellín, I am a 19-year-old self-taught young man
                who is passionate about technology and programming, despite my
                young age, I am an extremely responsible person who loves
                challenges and learning.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <div className="btn-network">
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <a
              href="https://github.com/JuanWebDeveloper"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="btn-network">
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <a
              href="https://twitter.com/vargas_wd"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>

          <div className="btn-network">
            <div className="icon">
              <i className="fab fa-instagram-square"></i>
            </div>
            <a
              href="https://www.instagram.com/juan_vargas_wd/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="btn-network">
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <a
              href="https://www.linkedin.com/in/juan-fernando-vargas-garces-a4a22720b/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
