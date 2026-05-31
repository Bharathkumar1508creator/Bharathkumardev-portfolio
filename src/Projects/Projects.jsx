import styles from "./Projects.module.css";

// images
import noir from '../assets/Noirfashions.jpg'
import exam from '../assets/Examportal.jpg'
import job from '../assets/Jobeligibility.jpg'
import task from '../assets/Taskmanager.jpg'


function Projects(){
    return(

       <div className={styles.maincontainer}>
        
        <h5 className={styles.title}><u>Projects</u></h5>

        <p className={styles.desc}>A collection of real-world frontend projects including e-commerce, task management, and dynamic web apps built using JavaScript, Bootstrap, and modern UI practices.</p>

         <div className={styles.innercontainer}>

              {/* ecommerce */}
            <div className={styles.card}>
                <img src={noir} alt="ecommerce" className={styles.noir}/>
                <h6>E-Commerce Website</h6>
                <p>[JS] [BootStrap]</p>
                <button className={styles.btn}><a href="https://bharathkumar1508creator.github.io/E-commerce-Landing-Page/" target="_blank">live 🌐</a></button>
                <button className={styles.btn}><a href="https://github.com/Bharathkumar1508creator" target="_blank">Code ⚙️</a></button>
            </div>
             {/* ecommerce */}

               {/* exam */}
             <div className={styles.card}>
                <img src={exam} alt="exam" className={styles.exam}/>
                <h6>Exam Result Portal</h6>
                <p>[HTML5] [CSS3] [JS] [BootStrap]</p>
                <button className={styles.btn}><a href="https://bharathkumar1508creator.github.io/Exam-Portal/" target="_blank">live 🌐</a></button>
                <button className={styles.btn}><a href="https://github.com/Bharathkumar1508creator" target="_blank">Code ⚙️</a></button>
            </div>
             {/* exam */}

             {/* job */}
             <div className={styles.card}>
                <img src={job} alt="job" className={styles.job}/>
                <h6>Job Eligibility Portal</h6>
                <p>[HTML5] [CSS3] [JS] [BootStrap]</p>
                <button className={styles.btn}><a href="https://bharathkumar1508creator.github.io/Job-Eligibility-Portal/" target="_blank">live 🌐</a></button>
                <button className={styles.btn}><a href="https://github.com/Bharathkumar1508creator" target="_blank">Code ⚙️</a></button>
            </div>
            {/* job */}

            {/* task */}
             <div className={styles.card}>
                <img src={task} alt="task" className={styles.task}/>
                <h6>Job Eligibility Portal</h6>
                <p>[HTML5] [CSS3] [JS] [BootStrap]</p>
                <button className={styles.btn}><a href="https://bharathkumar1508creator.github.io/task-manger-app/" target="_blank">live 🌐</a></button>
                <button className={styles.btn}><a href="https://github.com/Bharathkumar1508creator" target="_blank">Code ⚙️</a></button>
            </div>
            {/* task */}

         </div>

       </div>


    )
};

export default Projects