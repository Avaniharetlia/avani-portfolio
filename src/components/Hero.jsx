import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Left Side */}
      <div className="hero-left">

        <motion.p
          className="hello"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Avani <span>Haretlia</span>
        </motion.h1>

        <h2>
          <Typewriter
            words={[
              "Computer Science Student",
              "Aspiring ML Engineer",
              "Data Scientist Enthusiast",
              "Python Developer"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </h2>
<br></br>

        <p className="hero-text">
          Passionate about Artificial Intelligence, Machine Learning,
          Data Analytics, and Full Stack Development. I enjoy building
          intelligent applications and solving real-world problems
          through technology.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
  href="/resume_ah.pdf"
  download
  className="btn-outline"
>
  Download Resume
</a>

        </div>

        {/* Social Icons */}
        <div className="socials">

          <a
            href="https://github.com/Avaniharetlia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/avani-haretlia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Right Side */}
      <motion.div
        className="hero-right"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >

        <div className="image-circle">

          <img
            src="/WhatsApp Image 2026-08-07 at 8.42.03 PM.jpeg"
            alt="Avani Haretlia"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;