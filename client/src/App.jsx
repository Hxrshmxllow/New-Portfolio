import React, {useEffect} from "react";
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
  useEffect(() => {
    const url = new URL(window.location.href);
    const source = url.searchParams.get("source");
    if (!source) {
      setTimeout(() => {
        const retryUrl = new URL(window.location.href);
        const retrySource = retryUrl.searchParams.get("source");
        if (retrySource) {
          logSource(retrySource);
        }
      }, 500);
      return;
    }

    logSource(source);
  }, []);

  const logSource = (src) => {
    console.log("Source detected:", src);
    fetch(
      `https://portfolio-api-908235041403.us-central1.run.app/api/log_view?source=${encodeURIComponent(src)}`
    )
      .then((res) => res.json())
      .then((data) => console.log("Logged:", data))
      .catch((err) => console.error("Error logging:", err));
  };
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
