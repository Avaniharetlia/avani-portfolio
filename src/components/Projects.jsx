import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


import shopSutra from "../assets/shopsutra.png";
import salaryPrediction from "../assets/salary-prediction.png";
import nakshatra from "../assets/nakshatra.png";
const projects = [
  {
    title: "ShopSutra - AI Spend Analyzer",
    image: shopSutra,
    description:
      "An AI-powered expense tracking platform that helps users track expenses, compare shopping carts, and analyze spending trends through an interactive dashboard.",
    tech: ["React.js", "Flask", "Python", "SQL"],
    github: "https://github.com/Avaniharetlia",
    live: "",
  },
  {
    title: "Salary Prediction System",
    image: salaryPrediction,
    description:
      "Machine Learning application that predicts salary based on experience and skills using Linear Regression and data visualization.",
    tech: ["Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Avaniharetlia",
    live: "",
  },
  {
    title: "Nakshatra",
    image: nakshatra,
    description:
      "Astrology web application that provides personalized predictions using birth details with a modern and responsive user interface.",
    tech: ["React.js", "Flask", "MySQL"],
    github: "https://github.com/Avaniharetlia",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h4>My Work</h4>

      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live !== "" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;