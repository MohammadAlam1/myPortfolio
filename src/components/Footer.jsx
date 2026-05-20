import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-links">
          <a href="https://github.com/MohammadAlam1" title="GitHub">
            <img
              src="https://img.icons8.com/?size=96&id=20906&format=png"
              alt="GitHub-Img"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-alam-ansari-311120174?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            title="LinkedIn"
          >
            <img
              src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png"
              alt="LinkedIn-Img"
            />
          </a>

          <a href="mailto:mohammadalamansari00@gmail.com" title="Email">
            <img
              src="https://img.icons8.com/?size=96&id=X0mEIh0RyDdL&format=png"
              alt="Email-Img"
            />
          </a>
        </div>
        <ul className="goto-links">
          <li>
            <a href="#home">Home</a>
          </li>
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="copy-right">
          &copy; {new Date().getFullYear()} Mohammad Alam Ansari. Built with ❤️
          using Vite + React. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
