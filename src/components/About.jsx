import "./About.css";
import {
  FaBrain,
  FaLaptopCode,
  FaDatabase,
  FaUserGraduate,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <h4>About Me</h4>

        <h2>
          Turning <span>Ideas</span> into Intelligent Solutions
        </h2>

        <p>
          I'm <strong>Avani Haretlia</strong>, a Computer Science student
          intrested in Machine Learning & Data Science. I enjoy
          building Machine Learning models, exploring Data Analytics, and
          creating modern web applications with clean UI and real-world impact.
        </p>

        <p>
          My goal is to become a Machine Learning Engineer / Data Scientist and contribute to
          innovative AI solutions that solve meaningful problems.
        </p>
      </div>

      <div className="about-right">
        <div className="about-card">
          <FaUserGraduate className="about-icon" />
          <h3>B.Tech CSE</h3>
          <p>Mandsaur University</p>
        </div>

        <div className="about-card">
          <FaBrain className="about-icon" />
          <h3>Machine Learning</h3>
          <p>Python • Scikit-learn</p>
        </div>

        <div className="about-card">
          <FaDatabase className="about-icon" />
          <h3>Data Analytics</h3>
          <p>SQL • Pandas • NumPy</p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Web Development</h3>
          <p>React • Flask</p>
        </div>
      </div>
    </section>
  );
};

export default About;