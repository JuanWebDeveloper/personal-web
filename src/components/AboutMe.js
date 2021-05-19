import React from "react";

import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-content">
        {/* Autograph */}
        <div className="autograph-container">
          <h2>A little about me</h2>
          <p>
            My name is Juan Fernando Vargas Garcés I am a person who loves
            technology for three years I started programming and since then I
            have not stopped learning and growing as a developer, among my most
            outstanding qualities are honesty, kindness, humility and
            responsibility, I take My work very seriously and I always do my
            best to improve myself day by day I love challenges that is why when
            a client comes to me with a project I always see it as a challenge
            that must be overcome and I do the best I can so that everything
            turns out. excellent and the customer is more than satisfied.
          </p>

          <p>
            I have already told you a little about how I am and how I usually
            work, so if you want to work with me, contact me and tell me your
            idea and I will make it come true.
          </p>

          <a
            href="https://juanwebdeveloper.github.io/curriculum/"
            target="_blank"
            rel="noreferrer"
            className="custom-default-btn about-btn"
          >
            See CV
          </a>
        </div>

        {/* hobbies */}
        <div className="hobby-container">
          <h2>My hobbies</h2>
          <div className="hobby">
            <div className="icon">
              <i className="fas fa-laptop-code"></i>
            </div>

            <div className="description">
              <h3>Program</h3>
              <p>
                It is the hobby that I practice the most, almost all day and
                much of the night I spend it programming, it is something that I
                really love and enjoy doing.
              </p>
            </div>
          </div>

          <div className="hobby">
            <div className="icon">
              <i className="fas fa-book"></i>
            </div>

            <div className="description">
              <h3>Read</h3>
              <p>
                I usually read when I feel a little tired, it helps me to rest a
                bit from the computer and to think about something other than
                code, it distracts me while I learn.
              </p>
            </div>
          </div>

          <div className="hobby">
            <div className="icon">
              <i className="fas fa-dumbbell"></i>
            </div>

            <div className="description">
              <h3>Do sport</h3>
              <p>
                I always take a couple of hours a day to exercise since I spend
                too much time sitting and I don't like to lose physical
                condition, and in this way I release a lot of stress and clarify
                my ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bubbles Background */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
};

export default AboutMe;
