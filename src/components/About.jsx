import "../styles/About.css";
import myAvatar from "../assets/Photo.jpg";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">The person behind the code</h2>
        <div className="section-line"></div>
      </div>
      {/* Image div with glow effect and avatar emoji */}
      <div className="about-grid">
        <div className="imageWrapper">
          <div className="glow"></div>
          <div className="image">
            <img src={myAvatar} alt="My Avatar" className="avatar" />
          </div>
        </div>

        {/* info about me with animation-on-scroll */}
        <div className="text animation-on-scroll">
          <h3>Hi, I'm mohammad Alam Ansari 👋</h3>
          <p>
            Mechanical Engineer turned DevOps Engineer with GATE‑strengthened CS
            fundamentals and 6 months of internship experience in Jenkins,
            Docker, and AWS – ready to manage infrastructure immediately.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            gaming or working in my travel agency (Rafi International Travel and
            tourism)
          </p>
          <div className="stats">
            <div className="stat">
              <div className="number">6+</div>
              <div className="label">Months of DevOps Experience</div>
            </div>
            <div className="stat">
              <div className="number">2</div>
              <div className="label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="number">6+</div>
              <div className="label">CERTIFICATIONS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
