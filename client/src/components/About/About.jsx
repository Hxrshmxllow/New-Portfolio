import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Harshit Patel</span>
        </h1>
        <p className="hero-subtitle">
          Full-stack developer in training, blending creativity, data, and AI to build powerful software.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
