import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import CursorTrail from "./components/CursorTrail/CursorTrail";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <CursorTrail />
              <StickyNavbar />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
