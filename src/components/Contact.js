import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-information">
        <h2 className="pt-5">Contact</h2>

        <div className="information">
          <a
            href="https://github.com/JuanWebDeveloper"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-method-name">
              <h3>GitHub</h3>
            </div>
          </a>

          <a
            href="https://twitter.com/vargas_wd"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="contact-method-name">
              <h3>Twitter</h3>
            </div>
          </a>

          <a
            href="https://www.instagram.com/juan_vargas_wd/"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="contact-method-name">
              <h3>Instagram</h3>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-fernando-vargas-garces-a4a22720b/"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-method-name">
              <h3>Linkedin</h3>
            </div>
          </a>

          <a
            href="https://wa.link/xpq33u"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="contact-method-name">
              <h3>Whatsapp</h3>
            </div>
          </a>

          <a
            href="mailto:juandeveloper19@gmail.com?Subject=Hi, how are you? I am interested in working with you"
            target="_blank"
            rel="noreferrer"
            className="fact"
          >
            <div className="fact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-method-name">
              <h3>Email</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
