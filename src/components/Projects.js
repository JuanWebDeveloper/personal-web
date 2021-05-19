import React from "react";

import "../styles/Projects.css";

import reminder from "../images/projects/reminderApp.png";
import petAdoption from "../images/projects/petAdoption.png";
import personalWebTwo from "../images/projects/personalWebTwo.png";
import appToSaveLinks from "../images/projects/appToSaveLinks.png";
import gameJay from "../images/projects/gameJay.png";
import taskApp from "../images/projects/taskApp.png";
import personalWebOne from "../images/projects/personalWebOne.png";
import weightOnAnotherPlanet from "../images/projects/weightOnAnotherPlanet.png";
import schoolWebsite from "../images/projects/schoolWebsite.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="pt-5">Projects</h2>
      <div className="project-container">
        <div className="project-image">
          <img src={reminder} alt="Reminders application" />
          <div className="overlay">
            <h2>Reminder </h2>
            <h3>
              <a
                href="https://your-reminder-app.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/reminders-app"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={petAdoption} alt="pet Adoption" />
          <div className="overlay">
            <h2>Pet Adoption</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/pet-adoption-website/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/pet-adoption-website"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={personalWebTwo} alt="Personal web" />
          <div className="overlay">
            <h2>Personal Web</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/third-personal-website/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/third-personal-website"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={appToSaveLinks} alt="Application To Save Links" />
          <div className="overlay">
            <h2>Application To Save Links</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/app-to-save-links/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/app-to-save-links"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={gameJay} alt="GameJay website" />
          <div className="overlay">
            <h2>GameJay</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/gamejay-website/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/gamejay-website"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={taskApp} alt="Task application" />
          <div className="overlay">
            <h2>Task application</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/crud-with-registration-and-login/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/crud-with-registration-and-login"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={personalWebOne} alt="Personal web" />
          <div className="overlay">
            <h2>Personal web</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/second-personal-website/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/second-personal-website"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={weightOnAnotherPlanet} alt="Weight on another planet" />
          <div className="overlay">
            <h2>Weight on another planet</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/weight-on-another-planet/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/weight-on-another-planet"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>

        <div className="project-image">
          <img src={schoolWebsite} alt="School website" />
          <div className="overlay">
            <h2>School website</h2>
            <h3>
              <a
                href="https://juanwebdeveloper.github.io/school-website/"
                target="_blank"
                rel="noreferrer"
              >
                see Website
              </a>
              <a
                href="https://github.com/JuanWebDeveloper/school-website"
                target="_blank"
                rel="noreferrer"
              >
                see Code
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
