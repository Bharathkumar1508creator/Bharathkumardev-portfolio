import React from 'react'
import styles from './About.module.css';

function About() {
  return (
    <div id="about" className={styles.container}>
      <h5 className={styles.title}><u>About Me</u></h5>
      <p className={styles.dec}>Frontend Developer focused on building responsive and user-friendly web applications. Skilled in HTML, CSS, JavaScript, and React.</p>
      <div className={styles.content}>

        <ul className={styles.section}>
          <h5><u>Technologies 💻</u></h5>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap5</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Python</li>
          <li>SQL</li>
          <li>MS Excel</li>
        </ul>

        <ul className={styles.section}>
          <h5><u>Certifications 🎓</u></h5>
          <li>Fullstack Developer</li>
          <li>Udemy Python Certification</li>
          <li>Microsoft Cloud Computing</li>
          <li>Tally</li>
        </ul>

        <ul className={styles.section}>
          <h5><u>Tools 🔮</u></h5>
            <li>VS code</li>
            <li>Git&Github</li>
            <li>Chrome DevTools</li>
        </ul>

      </div>
    </div>
  )
}

export default About
