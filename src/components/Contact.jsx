import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqaz1wi",
        "template_3o8dh5e",
        form.current,
        "d50Lz_ZqWtmUeyMsf"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h4>Get In Touch</h4>

      <h2>
        Let's <span>Connect</span>
      </h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Let's Build Something Amazing 🚀</h3>

          <p>
            I'm currently looking for AI/ML, Data Science and Software
            Development internship opportunities. Feel free to reach out!
          </p>

          <div className="info-box">
            <FaEnvelope />
            <span>avaniharetliya37@gmail.com</span>
          </div>

          <div className="social-links">
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
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;