import "../styles/MobileMenu.css";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "active" : ""}`}>
      <button className="closeBtn" onClick={onClose}>
        ✕
      </button>

      <a href="#about" onClick={onClose}>
        About
      </a>
      <a href="#skills" onClick={onClose}>
        Skills
      </a>
      <a href="#projects" onClick={onClose}>
        Projects
      </a>

      <a href="#contact" onClick={onClose}>
        Contact
      </a>
    </div>
  );
}
