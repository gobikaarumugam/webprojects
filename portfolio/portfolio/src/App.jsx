import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Project from "./Project";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Navigation Bar */}
        <nav className="navbar">
          <h2 className="logo">Nivedha</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Project page="home" />} />
          <Route path="/about" element={<Project page="about" />} />
          <Route path="/projects" element={<Project page="projects" />} />
          <Route path="/skills" element={<Project page="skills" />} />
          <Route path="/contact" element={<Project page="contact" />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;