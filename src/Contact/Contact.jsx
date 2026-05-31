import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [showNumber, setShowNumber] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setPopupMsg("Fix errors ❌");
      setShowPopup(true);
      return;
    }

    setLoading(true);

    // 👉 TEST PURPOSE (data check)
    console.log("Form Data:", formData);

    setTimeout(() => {
      setPopupMsg("Message sent successfully ✅");
      setShowPopup(true);
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h5><u>Contact</u></h5>
          <p className={styles.subtitle}>
            Let’s build something amazing 🚀
          </p>

          <div className={styles.infoBtns}>

            {/* EMAIL */}
            <a
              href="mailto:bharathkumarpappuraj15@gmail.com"
              className={styles.infoBtn}
            >
              <FaEnvelope className={styles.icon} />
              Email Me
            </a>

            {/* CALL */}
            <button
              className={styles.infoBtn}
              onClick={() => setShowNumber(!showNumber)}
            >
              <FaPhoneAlt className={styles.icon} />
              {showNumber ? "8220554279" : "Show Number"}
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918220554279?text=Hi%20Bharath%2C%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.infoBtn} ${styles.whatsapp}`}
            >
              <FaWhatsapp className={styles.icon} />
              WhatsApp Chat
            </a>

            {/* LOCATION */}
            <button className={styles.infoBtn}>
              <FaMapMarkerAlt className={styles.icon} />
              Tamil Nadu
            </button>

          </div>

          {/* SOCIAL LINKS */}
          <div className={styles.links}>
            <a href="https://github.com/Bharathkumar1508creator" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/bharathkumar-p-498a36314" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://www.instagram.com/bharathh__kumarr" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
          </div>

          <p className={styles.status}>Open to Work</p>
        </div>

        {/* FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>

          <div>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div>
            <input
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <input
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
          />

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* POPUP (CENTERED) */}
        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupBox}>
              <p>{popupMsg}</p>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Contact;