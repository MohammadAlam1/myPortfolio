import "../styles/Projects.css";
import movieSearchImg from "../assets/Movie-search.png";
import drumKitImg from "../assets/drum-kit.png";

const projects = [
  {
    title: "Movie Search App",
    description:
      "Developed a Movie Search application using React (Vite) that consumes TMDB API services.",
    tools: ["React", "Vite", "TMDB API", "Jenkins", "Nginx", "GitHub"],
    image: movieSearchImg,
    deployedOn:
      "https://drive.google.com/file/d/1x4K82_Yey3DIbVipLSu1AEzMAkGYUiR_/view",
    githubUrl: "https://github.com/yourusername/movie-search-app",
  },
  {
    title: "Dockerized Jenkins Drum Kit",
    description:
      "Created a Dockerized version of the Jenkins Drum Kit for easy deployment and management.",
    tools: ["Docker", "Jenkins", "Git", "HTML", "CSS", "JavaScript"],
    image: drumKitImg,
    deployedOn: "https://hub.docker.com/r/mohammadalam819/jenkins-drum-kit",
    githubUrl: "https://github.com/yourusername/movie-search-app",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-tag">Projects</span>
        <h2 className="section-title">My Recent Work</h2>
        <div className="section-line"></div>
      </div>

      {/* Project container */}
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool) => (
                <span key={tool} className="project-tool">
                  {tool}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.deployedOn}
                target="_blank"
                rel="noopener noreferrer"
                className="Project-link"
              >
                🔗 View Project
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                📂 View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
