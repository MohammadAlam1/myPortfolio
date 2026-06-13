import { useState } from "react";

const skillCollections = [
  {
    type: "DevOps",
    skills: [
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=512&id=39292&format=png",
        name: "Jenkins",
        level: "Basic",
        description: "CI/CD pipeline management",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000",
        name: "Docker",
        level: "Intermediate",
        description: "Containerization platform",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=100&id=f8puwbhs0kUR&format=png&color=000000",
        name: "Nginx",
        level: "Basic",
        description: "Web server and reverse proxy",
      },
    ],
  },
  {
    type: "Programming",
    skills: [
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=PXTY4q2Sq2lG&format=png",
        name: "JavaScript",
        level: "Intermediate",
        description: "Programming language for web development",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=13441&format=png",
        name: "Python",
        level: "Intermediate",
        description:
          "High-level programming language for general-purpose programming",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=19292&format=png",
        name: "Scripting",
        level: "Basic",
        description:
          "Scripting languages like Bash, PowerShell, or Python for automation tasks",
      },
    ],
  },
  {
    type: "Web Development",
    skills: [
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=160&id=wPohyHO_qO1a&format=png",
        name: "React",
        level: "Intermediate",
        description:
          "React is a JavaScript library for building user interfaces, particularly single-page applications",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=v8RpPQUwv0N8&format=png",
        name: "HTML",
        level: "Intermediate",
        description:
          "HyperText Markup Language, is the standard standard markup language used worldwide to create and structure the framework of all web pages.",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=160&id=9SdwwW5M3bEI&format=png",
        name: "CSS",
        level: "Intermediate",
        description:
          "CSS (Cascading Style Sheets) is a standard stylesheet language used to design, style, and layout web pages",
      },
    ],
  },
  {
    type: "Database",
    skills: [
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=160&id=JRnxU7ZWP4mi&format=png",
        name: "PostgreSQL",
        level: "Intermediate",
        description:
          "PostgreSQL is a powerful, open-source relational database management system known for its robustness and extensibility.",
      },
    ],
  },
  {
    type: "Tools",
    skills: [
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=20906&format=png",
        name: "Git & GitHub",
        level: "Intermediate",
        description:
          "Git is a local software tool used for version tracking, while GitHub is a cloud-based hosting platform built to share and collaborate on those tracked files.",
      },
      {
        id: crypto.randomUUID(),
        icon: "https://img.icons8.com/?size=96&id=dJjTWMogzFzg&format=png",
        name: "Vite",
        level: "Basic",
        description:
          "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
      },
    ],
  },
];

export default function SkillCollections() {
  const [selectedType, setSelectedType] = useState(skillCollections[0].type);
  const selectedCollection = skillCollections.find(
    (collection) => collection.type === selectedType,
  );

  return (
    <>
      <div
        className="skill-grid"
        style={{
          marginBottom: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        }}
      >
        {skillCollections.map((collection) => (
          <button
            key={collection.type}
            type="button"
            className="skill-card animate-on-scroll"
            onClick={() => setSelectedType(collection.type)}
            aria-pressed={selectedType === collection.type}
            style={{
              padding: "1rem",
              cursor: "pointer",
              borderColor:
                selectedType === collection.type ? "var(--accent)" : undefined,
            }}
          >
            <div className="skill-name">{collection.type}</div>
          </button>
        ))}
      </div>

      <div className="skill-grid">
        {selectedCollection.skills.map((skill) => (
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
    </>
  );
}
