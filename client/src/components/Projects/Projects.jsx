import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Streamify",
    description:
      "A full-stack Spotify-style music platform built with Flask, React, and Firebase. Supports playlists, auth, and real-time playback.",
    tags: ["Flask", "React", "Firebase"],
    live: "https://streamify-demo.vercel.app",
    code: "https://github.com/Hxrshmxllow/Streamify",
  },
  {
    title: "NobleMart",
    description:
      "An AI-powered e-commerce site for fragrances with UPC-based inventory sync to Amazon & eBay.",
    tags: ["Flask", "GCP", "Stripe", "NoSQL"],
    live: "https://noblemart-demo.vercel.app",
    code: "https://github.com/Hxrshmxllow/NobleMart",
  },
  {
    title: "Trading Bot",
    description:
      "An intelligent trading bot using Python, Alpaca API, and LSTM-based models for automated stock and options execution.",
    tags: ["Python", "TensorFlow", "Alpaca API"],
    live: "https://example-trading-demo.vercel.app",
    code: "https://github.com/Hxrshmxllow/Day-Trading-Bot",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                Live Demo
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
