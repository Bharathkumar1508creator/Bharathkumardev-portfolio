import styles from "./Education.module.css";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

// images (FIXED)
import hicas from '../assets/Hindusthan.jpg'
import siddhanaidu from '../assets/Prsiddhanaiduschool.jpg'
import manis from '../assets/Manischool.jpg'
import { useState } from "react";

function Education() {

const [selected,setSelected]=useState("");

// const Addvalue = (value)=>{
//   setSelected(value);
// } 

// toggle logic
const Addvalue = (value) => {
    setSelected(prev => (prev === value ? "" : value));
};


  return (
    
    <div id="education" className={styles.maincontainer}>
         <h5 style={{textAlign: "center"}}><u>Education</u></h5>
 <div className={styles.container}>
{/* card - 1 */}
          <div className={styles.cardcontainer}>
         <div className={styles.firstcard}>
            <div className={styles.front}>
                <img src={hicas} alt="College" />
            </div>
            <div className={styles.back}>
              <h6><strong>Hindusthan College Of Arts &  Science</strong></h6>
              <h6><strong>B.com Computer Applications</strong></h6>
              <h6><strong>(2022-2025)</strong></h6>
              <h6><strong>80%</strong></h6>
              <button onClick={() => Addvalue("hicas")} className={styles.btn}>More Info</button>
              {/* () => handleMoreInfo("HICAS") */}
            </div>
         </div>
         </div>
         {/*  */}

         {/* card - 2 */}
         <div className={styles.cardcontainer}>
         <div className={styles.seccard}>
            <div className={styles.front}>
                <img src={siddhanaidu}  alt="School"/>
            </div>
            <div className={styles.back}>
              <h6><strong>Siddha Naidu Matric Hr Sec School</strong></h6>
              <h6><strong>HSLC</strong></h6>
              <h6><strong>(2021-2022)</strong></h6>
              <h6><strong>70%</strong></h6>
               <button onClick={() => Addvalue("siddhanaidu")} className={styles.btn}>More Info</button>
            </div>
         </div>
         </div>
         {/*  */}

         {/* card - 3 */}
         <div className={styles.cardcontainer}>
         <div className={styles.thirdcard}>
            <div className={styles.front}>
                <img src={manis} alt="Sslc" />
            </div>
            <div className={styles.back}>
              <h6><strong>Mani Hr Sec School</strong></h6>
              <h6><strong>SSLC</strong></h6>
              <h6><strong>(2019-2020)</strong></h6>
              <h6><strong>67%</strong></h6>
               <button onClick={() => Addvalue("manis")} className={styles.btn}>More Info</button>
            </div>
         </div>
         </div>
         {/* card ends here */}
         </div>

       <div className={styles.Addvalue}>  
   {selected ==="hicas" && (
    <p className={styles.contentText} style={{ textAlign: "center", marginTop: "20px" }}>HICAS 🎓: Completed B.Com Computer Applications with foundational knowledge in C++, SQL, and DBMS. Gained basic understanding of programming concepts, database operations, and practical exposure through academic learning.</p>
   )}

   {selected === "siddhanaidu" && (
    <p className={styles.contentText} style={{textAlign:"center",marginTop:"20px"}}>Siddha Naidu 📚: Completed Higher Secondary (11th & 12th) with Arts and Computer Applications. Gained basic knowledge in HTML and CSS along with fundamental computer concepts.</p>
   )}

   {selected === "manis" && (
    <p className={styles.contentText} style={{textAlign:"center",marginTop:"20px"}}>Mani Hr Sec School 🏫: Completed SSLC with active involvement in sports, particularly football as a member of the school team. Developed teamwork, discipline, and a competitive mindset through regular participation in sports activities.</p>
   )}
</div>


    </div>
    
  )
};

export default Education;