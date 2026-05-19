import "../styles/Skills.css";

const skillsData = [
  {
    id: 1,
    icon: "https://img.icons8.com/?size=512&id=39292&format=png",
    name: "Jenkins",
    level: "Basic",
    description: "CI/CD pipeline management",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000",
    name: "Docker",
    level: "Intermediate",
    description: "Containerization platform",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/?size=100&id=f8puwbhs0kUR&format=png&color=000000",
    name: "Nginx",
    level: "Basic",
    description: "Web server and reverse proxy",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/?size=96&id=20906&format=png",
    name: "Git & GitHub",
    level: "Intermediate",
    description: "Version control system",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/?size=96&id=PXTY4q2Sq2lG&format=png",
    name: "JavaScript",
    level: "Intermediate",
    description: "programming language for web development",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/?size=96&id=13441&format=png",
    name: "Python",
    level: "Intermediate",
    description:
      "High-level programming language for general-purpose programming",
  },
  {
    id: 7,
    icon: "https://img.icons8.com/?size=96&id=19292&format=png",
    name: "Scripting",
    level: "Basic",
    description:
      " Scripting languages like Bash, PowerShell, or Python for automation tasks",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/?size=160&id=wPohyHO_qO1a&format=png",
    name: "React",
    level: "Intermediate",
    description:
      "React is a JavaScript library for building user interfaces, particularly single-page applications    ",
  },
  {
    id: 9,
    icon: "https://img.icons8.com/?size=160&id=JRnxU7ZWP4mi&format=png",
    name: "PostgreSQL",
    level: "Intermediate",
    description:
      "PostgreSQL is a powerful, open-source relational database management system known for its robustness and extensibility.  ",
  },
  {
    id: 10,
    icon: "https://img.icons8.com/?size=96&id=dJjTWMogzFzg&format=png",
    name: "Vite",
    level: "Basic",
    description:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-tag">Technologies</span>
        <h2 className="section-title">My tech collections</h2>
        <div className="section-line"></div>
      </div>

      <div className="skill-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card animate-on-scroll">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <div className="skill-name">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
