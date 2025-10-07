import React, { useState, useEffect } from "react";
import "./StickyNavbar.css";

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#about" className="brand">HP</a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  );
}
