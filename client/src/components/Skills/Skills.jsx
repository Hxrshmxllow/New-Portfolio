import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skillsData = {
  Languages: ["Python", "C", "C++", "JavaScript", "SQL", "HTML/CSS"],
  Frameworks: ["React", "Flask", "Firebase", "Node.js", "TensorFlow"],
  Tools: ["Git", "Docker", "VS Code", "GCP", "AWS", "Postman"],
};

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">
        Tools and technologies I use to build, analyze, and deploy scalable systems.
      </p>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, items], idx) => (
          <div
            key={category}
            className="skill-card hidden"
            style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
          >
            <h3>{category}</h3>
            <div className="skill-list">
              {items.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
