import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <h4>Experience</h4>

      <h2>
        Internship <span>Journey</span>
      </h2>

      <div className="experience-container">

        {/* Experience 1 */}

        <div className="experience-card">

          <FaBriefcase className="exp-icon" />

          <h3>Infosys Springboard Pragati Mentee – Cohort 3</h3>

          <h4>Infosys Springboard</h4>

          <p>
            Selected as a <strong>Pragati Mentee (Cohort 3)</strong>, where I
            enhanced my skills in Artificial Intelligence, Data Science,
            problem-solving, professional development, and industry-oriented
            learning through mentorship and hands-on projects.
          </p>

          <span>2024</span>

        </div>

        {/* Experience 2 */}

        <div className="experience-card">

  <FaBriefcase className="exp-icon" />

  <h3>Generative AI & Cloud Computing Intern</h3>

  <h4>IBM SkillsBuild × CSRBOX</h4>

  <p>
    Completed a virtual internship focused on <strong>Generative AI</strong> and
    <strong> Cloud Computing</strong>. Gained hands-on experience with AI concepts,
    prompt engineering, cloud fundamentals, and practical project development
    while enhancing problem-solving and industry-ready technical skills.
  </p>

  <span>2026</span>

</div>
      </div>

    </section>
  );
};

export default Experience;