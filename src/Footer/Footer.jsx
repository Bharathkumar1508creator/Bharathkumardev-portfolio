import React from "react";
import styles from "./Footer.module.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <h3>Bharath Kumar</h3>
          <p>FullStack Developer | React Enthusiast</p>
        </div>

        {/* CENTER LINKS */}
        <div className={styles.center}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className={styles.right}>
          <a href="mailto:bharathkumarpappuraj15@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Bharathkumar1508creator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bharathkumar-p-498a36314"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/bharathh__kumarr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2026 Bharath Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;