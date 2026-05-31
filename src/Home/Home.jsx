import profile from '../assets/Profile.jpeg'
import styles from './Home.module.css';
import resume from '../assets/resume.pdf';
function Home(){
    return(
        <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <img src={profile} alt="Bharath Kumar.P" title="Bharath Kumar.P" style={{ width: "200px" }} className={styles.image} />
            <h5 className={styles.title}><strong>Bharath Kumar.P</strong></h5>
        </div>
        <p className={styles.dec}>FullStack Developer with a strong foundation in HTML, CSS, JavaScript, and React.js,Python focused on building responsive and user-friendly web applications.
A 2025 B.Com (Computer Applications) graduate with a passion for creating intuitive and visually appealing digital experiences.
Skilled in translating design concepts into functional, high-performance interfaces.
Committed to writing clean, maintainable code and continuously improving development skills.
Eager to contribute to real-world projects and collaborate within dynamic development teams.
Seeking an opportunity to grow as a frontend developer while delivering impactful and scalable solutions.</p>

 <a href={resume} target="_blank">
  <button className={styles.btn}>Hire Me 📧</button>
</a>

        </div>
    )
}

export default Home