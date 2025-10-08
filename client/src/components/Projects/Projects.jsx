import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

const projectData = [
  {
    title: "Streamify",
    description:
      "A full-stack Spotify-style music platform built with Flask, React, and Firebase. Supports playlists, auth, and real-time playback.",
    tags: ["Flask", "React", "Firebase"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/Spotify",
  },
  {
    title: "NobleMart",
    description:
      "An AI-powered e-commerce site for fragrances with UPC-based inventory sync to Amazon & eBay.",
    tags: ["Flask", "GCP", "Stripe", "NoSQL"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/Projects/noblemart",
  },
  {
    title: "Trading Bot",
    description:
      "An intelligent trading bot using Python, Alpaca API, and LSTM-based models for automated stock and options execution.",
    tags: ["Python", "TensorFlow", "Alpaca API"],
    live: "https://hxrshmxllow.github.io/my-portfolio/#projects",
    code: "https://github.com/Hxrshmxllow/Day-Trading-Bot",
  },
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
              This new portfolio focuses on UI and showing live demos.
              The old version contains the project demo videos/images.  
              Would you like to visit the old version?
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
