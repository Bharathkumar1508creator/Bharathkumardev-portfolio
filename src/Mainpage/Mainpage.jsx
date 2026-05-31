import styles from "./Mainpage.module.css";
import Mainlogo from '../assets/Mainlogo.jpg'

function Mainpage(){
    return(
       <div className={styles.maincontainer}>
        <div className={styles.subcontainerone}>
          <img src={Mainlogo} alt="Logo" className={styles.logoimg}/>
          
          {/* ✅ button remove → direct anchor */}
          <a href="#home" className={styles.btn}>More Info 🖥️</a>

        </div>
       </div>
    )
};

export default Mainpage;