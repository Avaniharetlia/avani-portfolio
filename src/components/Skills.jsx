import "./Skills.css";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiFlask,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h4>My Skills</h4>

      <h2>
        Technologies I <span>Work With</span>
      </h2>

      <div className="skills-grid">

        {/* Programming */}

        <div className="skill-card">
          <FaPython className="skill-icon" />
          <h3>Python</h3>
        </div>

        <div className="skill-card">
          <FaJava className="skill-icon" />
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaDatabase className="skill-icon" />
          <h3>SQL</h3>
        </div>

        {/* AI */}

        <div className="skill-card">
          <SiPandas className="skill-icon" />
          <h3>Pandas</h3>
        </div>

        <div className="skill-card">
          <SiNumpy className="skill-icon" />
          <h3>NumPy</h3>
        </div>

        <div className="skill-card">
          <SiScikitlearn className="skill-icon" />
          <h3>Scikit-Learn</h3>
        </div>

        {/* Web */}

        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <h3>React.js</h3>
        </div>

        <div className="skill-card">
          <SiFlask className="skill-icon" />
          <h3>Flask</h3>
        </div>

        {/* Tools */}

        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="skill-icon" />
          <h3>GitHub</h3>
        </div>

        <div className="skill-card">
          <SiMysql className="skill-icon" />
          <h3>MySQL</h3>
        </div>

      </div>

    </section>
  );
};

export default Skills;