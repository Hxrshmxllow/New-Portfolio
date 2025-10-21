import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

const projectData = [
  {
    title: "Streamify",
    description:
      "A full-stack Spotify-style music platform built with Flask, React, and Firebase. Supports playlists, auth, and real-time playback.",
    tags: ["Python", "Flask", "React", "Firebase", "GCP"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/Spotify",
  },
  {
    title: "NobleMart",
    description:
      "An AI-powered e-commerce site for fragrances with UPC-based inventory sync to Amazon & eBay.",
    tags: ["Python", "Flask", "React", "AWS", "DyanamoDB", "OpenAI API"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/noblemart",
  },
  {
    title: "Trading Bot",
    description:
      "An intelligent trading bot using Python, Alpaca API, and LSTM-based models for automated stock and options execution.",
    tags: ["Python", "TensorFlow", "Alpaca API"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/Day-Trading-Bot",
  },
  {
    title: "PrepAI for SAT",
    description:
      "An AI-powered SAT prep platform that generates unlimited CollegeBoard-style questions for personalized and adaptive test practice.",
    tags: ["Python", "Flask", "React", "GCP", "Firebase", "Selenium"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/PrepAI",
  },
  {
    title: "AI-Powered Chess Game",
    description: "An interactive chess platform supporting both player-vs-player matches and AI-powered gameplay for dynamic, adaptive challenges.",
    tags: ["Python", "Pytorch", "PyGame"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/projects/",
  },
  {
    title: "AI Poker Application",
    tags: ["Python", "Flask", "React", "PyTorch"],
    description: "A full-stack poker platform featuring an AI-powered bot trained on OpenAI gameplay data for strategic, human-like decision-making.",
    code: "https://github.com/Hxrshmxllow/Projects/tree/main/Poker",
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
  },
  {
    title: "NJ Transit Lost and Found",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    description: "A web-based lost and found system for NJ Transit with Flask, OpenAI API, and a responsive frontend to help passengers easily report and recover lost items.",
    code: 'https://github.com/Hxrshmxllow/Projects/tree/main/NJ-Transit-Lost-and-Found',
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
  },
  {
    title: "AI-Powered Tic-Tac-Toe",
    tags: ["Python", "Scikit-Learn"],
    description: "An intelligent Tic-Tac-Toe game powered by Scikit-Learn, training a model to predict optimal moves and adapt strategies based on real-time board states.",
    code: 'https://github.com/Hxrshmxllow/Projects/blob/main/Tic-Tac-Toe',
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
  },
  {
    title: "Banking Application",
    tags: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    description: "A full-stack banking platform featuring secure user accounts, seamless fund transfers, and a simulated money market for realistic financial interactions.",
    code: 'https://github.com/Hxrshmxllow/Projects/tree/main/Bank',
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
  },
  {
    title: "RULate",
    tags: ["React-Native", "Firebase", "Google Maps API", "Stripe"],
    description: "A mobile Rutgers ride-sharing app designed to connect students and optimize routes for faster, more efficient campus travel.",
    code: 'https://github.com/Hxrshmxllow/HackRU',
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
  }
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [redirectLink, setRedirectLink] = useState("https://hxrshmxllow.github.io/my-portfolio/#projects");

  const handleLiveClick = (url) => {
    setShowPopup(true);
  };

  const handleRedirect = () => {
    window.open(redirectLink, "_blank", "noopener,noreferrer");
    setShowPopup(false);
  };

  const handleCancel = () => setShowPopup(false);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className={`projects-grid ${visible ? "visible" : ""}`}>
        {projectData.map((proj, idx) => (
          <div
            key={proj.title}
            className="project-card"
            style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <div className="tags">
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="buttons">
              <a
                //href={proj.live}
                className="btn primary"
                onClick={(e) => handleLiveClick(e)}
              >
                Live Demo
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* === Redirect Popup === */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleCancel}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>Redirect Notice</h3>
            <p>
              This new portfolio is still under development.
              Would you like to visit the old version to see the demo?
            </p>

            <div className="popup-buttons">
              <button className="button-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn primary" onClick={handleRedirect}>
                Redirect
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
