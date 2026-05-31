// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from "react"
// import Home from "./Home/Home";


function Navbar(){

    const [dark,setDark]=useState(false)
    function btnToggle() {
  setDark(prev => !prev);
}

useEffect(() => {
  if (dark) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
}, [dark]);


    const [active,setActive]=useState("home")
    // setting function to highlight the section
    useEffect(()=>{
       
        // when user scrolls the section navbar will be highlight
        function handleScroll(){

           const sections=["home","about","education","projects","contact"]

        //    using foreach method this is used for oru array le iruka elemets eh loop panni andh elements enna pannanum namma order kuduka porom

        // sections nu array iruku adhe namma direct ah access panna mudiyadho so id nu oruthangale vechu section nu oruthanga kita kudukurom
        sections.forEach((id)=>{
           const section=document.getElementById(id);

        //    using ifelse method namma kita neraya elements iruku ellamehy orey tym le work aaga kudadhu thani thani ya work aaganum so dhn  idhu use pandrom
//              if(top <= 150 && top >= -300)
// 150 → section top reach range
// -300 → section poitu pogumbothu handle panna idhu refer pannu 

            if(section){
                const top = section.getBoundingClientRect().top;
                 
                if(top <= 150 && top >= -300){
                        setActive(id); 
                    }
             }
        });

        }

        // attach scroll
         window.addEventListener("scroll", handleScroll);

        //  clean up

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return(
        <header className="sticky-top" id="navbar">
            
<nav className={`navbar navbar-expand-lg ${dark ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>

               <div className="container-fluid">
                    
                    <a href="" className="navbar-brand ">FullStack Web-Developer 🖥️</a>

                      {/* toggle btn */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                       {/* div to contain ul links */}
                       <div className="collapse navbar-collapse" id="Navbar">

                         <ul className="navbar-nav ms-auto ">
                            <li className="nav-item mt-2">
                                <a href="#home"  className={`nav-link ${active==="home" ? "active-link" : ""}`}> Home</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a href="#about" className={`nav-link ${active==="about" ? "active-link" : ""}`}> About</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a href="#education" className={`nav-link ${active==="education" ? "active-link" : ""}`}> Education</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a href="#projects" className={`nav-link ${active==="projects" ? "active-link" : ""}`}> Project</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a href="#contact" className={`nav-link ${active==="contact" ? "active-link" : ""}`}> Contact</a>
                            </li>

                                 <button onClick={btnToggle} className="btn btn-outline-secondary ms-3 me-5 rounded-pill mt-2">{dark ? "Light ☀️" : "Dark 🌙"}</button>

                         </ul>

                       </div>

               </div>
            </nav>
        </header>
    )

}

export default Navbar