import "./Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>Avani Haretlia</h2>

      <p>
        Computer Science Student • Aspiring ML Engineer • Data Science Enthusiast
      </p>

      <div className="footer-icons">

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

      <p className="copyright">
        Designed & Developed by Avani Haretlia
      </p>

    </footer>
  );
};

export default Footer;