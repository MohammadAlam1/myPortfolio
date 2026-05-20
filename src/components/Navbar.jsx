// step1 navbar.jsx create karna hai and uska Css file banana hai

import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

import "../styles/Navbar.css";
//
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scroll-navbar" : ""}`}>
        <div className="innerItems">
          <a href="#home" className="logo">
            Mohammad Alam Ansari
          </a>
          <ul className="navLinks">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact" className="cta">
                Let's Talk
              </a>
            </li>
          </ul>
          <button
            className="mobileBtn"
            onClick={() => setMobileOpen(true)}
            aria-label="open menu"
          >
            ☰
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
