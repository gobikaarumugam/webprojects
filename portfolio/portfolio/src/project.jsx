import React from "react";
import "./Project.css";

function Project({ page }) {

  // HOME PAGE
  if (page === "home") {
    return (
      <section className="home page">
        <div className="home-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Nivedha</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p>
            I am interested in Web Development, Problem Solving
            and exploring new technologies.
          </p>

          <div className="home-buttons">
            <a href="/about" className="btn">Know More</a>
            <a href="/projects" className="btn outline">My Projects</a>
          </div>
        </div>
      </section>
    );
  }

  // ABOUT PAGE
  if (page === "about") {
    return (
      <section className="page about">
        <div className="card">
          <h1>About Me</h1>

          <p>
            Hello! I am Nivedha, a Computer Science student
            who enjoys creating simple and useful web applications.
          </p>

          <p>
            I am learning React, JavaScript, HTML, CSS, SQL
            and other technologies. I enjoy solving problems
            and developing creative projects.
          </p>

          <div className="info-box">
            <h3>What I Like</h3>
            <p>Web Development • Coding • Problem Solving</p>
          </div>
        </div>
      </section>
    );
  }

  // PROJECTS PAGE
  if (page === "projects") {
    return (
      <section className="page projects">
        <h1>My Projects</h1>

        <div className="project-container">

          <div className="project-card">
            <h2>Student Record System</h2>
            <p>
              A React application for displaying and managing
              student information using components and props.
            </p>
            <span>React</span>
          </div>

          <div className="project-card">
            <h2>Form Validation</h2>
            <p>
              A user registration form with input validation,
              password checking and user-friendly messages.
            </p>
            <span>React + CSS</span>
          </div>

          <div className="project-card">
            <h2>Farmer Collection System</h2>
            <p>
              A web application designed to manage farmer
              collection records and display useful information.
            </p>
            <span>Python + Flask + SQLite</span>
          </div>

        </div>
      </section>
    );
  }

  // SKILLS PAGE
  if (page === "skills") {
    return (
      <section className="page skills">
        <h1>My Skills</h1>

        <div className="skills-container">

          <div className="skill">
            <h3>HTML</h3>
            <div className="bar">
              <div className="progress html"></div>
            </div>
          </div>

          <div className="skill">
            <h3>CSS</h3>
            <div className="bar">
              <div className="progress css"></div>
            </div>
          </div>

          <div className="skill">
            <h3>JavaScript</h3>
            <div className="bar">
              <div className="progress js"></div>
            </div>
          </div>

          <div className="skill">
            <h3>React</h3>
            <div className="bar">
              <div className="progress react"></div>
            </div>
          </div>

          <div className="skill">
            <h3>SQL</h3>
            <div className="bar">
              <div className="progress sql"></div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // CONTACT PAGE
  if (page === "contact") {
    return (
      <section className="page contact">
        <div className="contact-card">

          <h1>Let's Connect</h1>

          <p>
            Feel free to contact me for projects,
            collaborations or learning opportunities.
          </p>

          <div className="contact-info">
            <p>📧 Email: nivedha@example.com</p>
            <p>📱 Phone: +91 XXXXX XXXXX</p>
            <p>📍 Location: Chennai, India</p>
          </div>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </section>
    );
  }

  return null;
}

export default Project;