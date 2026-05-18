// Step 2 Hero.jsx file banana hai jisme hum ek hero section banayenge jisme ek heading, subheading aur ek button hoga.import React from 'react';
// sath me Hero.css file bhi banana hai jisme hum hero section ke styles define karenge.

import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="home-content">
        <div className="badge">
          <span className="dot"></span>OPEN TO WORK
        </div>
        <h1 className="title">
          Building digital <br />
          <span className="gradient">experiences</span>that matter
        </h1>
        <p className="subtitle">
          Full stack developer crafting clean, performant web applications with
          modern technologies. Focused on great user experiences and robust
          architecture.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div
        className="scrollIndicator"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>Scroll</span>
        <span>↓</span>
      </div>
    </section>
  );
}
