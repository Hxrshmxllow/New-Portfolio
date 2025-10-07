import React, { useState, useEffect } from "react";
import "./Admin.css";

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [navShrink, setNavShrink] = useState(false);

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const [analytics] = useState({
    totalViews: 2398,
    growth: 8.2,
    sources: [
      { name: "LinkedIn", percent: 56 },
      { name: "GitHub", percent: 28 },
      { name: "Direct", percent: 10 },
      { name: "Other", percent: 6 },
    ],
  });

  const [newProject, setNewProject] = useState({ title: "", desc: "", link: "" });
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setNavShrink(true);
      else setNavShrink(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    if (password === "123") setAuthorized(true);
    else alert("Incorrect password");
  };

  const handleLogout = () => {
    setAuthorized(false);
    setPassword("");
  };

  const addProject = () => {
    if (!newProject.title.trim()) return;
    setProjects([...projects, newProject]);
    setNewProject({ title: "", desc: "", link: "" });
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  if (!authorized) {
    return (
      <div className="admin-login">
        <div className="login-box">
          <h2>Admin Access</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      {/* === Admin Navbar === */}
      <nav className={`admin-nav ${navShrink ? "shrink" : ""}`}>
        <div className="nav-left">
          <h2>My Portfolio</h2>
        </div>
        <div className="nav-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <header>
        <h1>Portfolio Dashboard</h1>
        <p>Manage your projects, skills, and insights</p>
      </header>

      {/* === Analytics Card === */}
      <section className="analytics-modern">
        <div className="analytics-top">
          <div>
            <h2>Profile Insights</h2>
            <p>View engagement metrics for your portfolio</p>
          </div>
          <span className={`growth ${analytics.growth >= 0 ? "up" : "down"}`}>
            {analytics.growth >= 0 ? "▲" : "▼"} {analytics.growth}%
          </span>
        </div>

        <div className="analytics-stats">
          <h3>{analytics.totalViews.toLocaleString()}</h3>
          <p>Total Profile Views</p>
        </div>

        <div className="analytics-bars">
          {analytics.sources.map((src, i) => (
            <div key={i} className="bar-row">
              <span>{src.name}</span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{
                    width: `${src.percent}%`,
                    background: `linear-gradient(90deg, #6ed3cf, #a8d5e6)`,
                  }}
                ></div>
              </div>
              <span className="bar-percent">{src.percent}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* === Admin Grid === */}
      <div className="admin-grid">
        <section className="admin-card">
          <h2>Projects</h2>
          <div className="form">
            <input
              type="text"
              placeholder="Title"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.desc}
              onChange={(e) =>
                setNewProject({ ...newProject, desc: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Link"
              value={newProject.link}
              onChange={(e) =>
                setNewProject({ ...newProject, link: e.target.value })
              }
            />
            <button onClick={addProject}>Add Project</button>
          </div>

          <ul className="project-list">
            {projects.map((p, i) => (
              <li key={i}>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="admin-card">
          <h2>Skills</h2>
          <div className="form inline">
            <input
              type="text"
              placeholder="Add skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button onClick={addSkill}>Add</button>
          </div>

          <div className="skill-list">
            {skills.map((s, i) => (
              <span key={i} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
