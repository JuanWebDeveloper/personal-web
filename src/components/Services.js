import React from "react";

import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-area section-padding services-container">
        <div className="container">
          <div className="row text-center">
            <h2 className="pt-5 pb-4">Services</h2>
            <div className="col-lg-4 col-xs-12">
              <div className="single-services">
                <div className="symbol">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Websites</h3>
                <p>
                  I have knowledge in multiple technologies, I provide services
                  for large and small companies or the general public, the price
                  varies according to the requirements that the website must
                  meet, difficulty of development, size of the website, hosting,
                  etc.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-xs-12">
              <div className="single-services">
                <div className="symbol">
                  <i className="fas fa-folder-open"></i>
                </div>
                <h3>Web Application</h3>
                <p>
                  A web application is a much more complex system that must meet
                  more advanced requirements and functionalities, such as having
                  a user registry, a control panel, a sales system, etc. The
                  price varies according to the size of the project.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-xs-12">
              <div className="single-services">
                <div className="symbol">
                  <i className="fas fa-film"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>
                  If you need a logo for your company or a banner for your
                  advertising, I can help you, I provide a complete service with
                  constant support to develop the logo or banner of your dreams,
                  the price varies according to the service required by the
                  client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
