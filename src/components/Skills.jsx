import SkillCollections from "./SkillCollections";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-tag">Technologies</span>
        <h2 className="section-title">My tech collections</h2>
        <div className="section-line"></div>
      </div>

      <SkillCollections />
    </section>
  );
}
