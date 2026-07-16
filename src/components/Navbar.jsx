import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "glass" : ""}`}>

      <h2 className="logo">
        Avani<span>.</span>
      </h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a
            href="#home"
            className={active === "home" ? "active-link" : ""}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#education"
            className={active === "education" ? "active-link" : ""}
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active-link" : ""}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active-link" : ""}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className={active === "experience" ? "active-link" : ""}
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>

      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
};

export default Navbar;