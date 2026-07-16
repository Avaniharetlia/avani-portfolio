import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education" id="education">
      <h4>Education</h4>

      <h2>
        My <span>Academic Journey</span>
      </h2>

      <div className="timeline">

        {/* College */}

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>B.Tech in Computer Science Engineering</h3>

            <h4>
              Mandsaur University, Mandsaur
            </h4>

            <p>
  Currently pursuing a <strong>B.Tech in Computer Science Engineering</strong>.
  Passionate about <strong>Machine Learning, Data Science, Artificial Intelligence,
  and Full Stack Development</strong>. Continuously building real-world projects and
  strengthening my skills in Python, SQL, React.js, Flask, and modern software
  development.
</p>
            <span>2024 – 2028</span>
          </div>
        </div>

        {/* Class 12 */}

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>Higher Secondary (Class XII)</h3>

            <h4>
              Saraswati Vidhya Mandir CBSE Sainik School
            </h4>

            <p>
              Physics • Chemistry • Mathematics • Computer Science
            </p>

            <span>2024</span>
          </div>
        </div>

        {/* Class 10 */}

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>Secondary School (Class X)</h3>

            <h4>
              Saraswati Vidhya Mandir CBSE Sainik School
            </h4>

            <p>
              Completed secondary education with a strong academic foundation.
            </p>

            <span>2022</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;