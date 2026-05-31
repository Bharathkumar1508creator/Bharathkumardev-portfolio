import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Mainpage from './Mainpage/Mainpage';
import Navbar from './Navbar';
import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';




function App(){
     return(
      <>
      <Mainpage />
      <Navbar />
    <div id="home"><Home /></div>
    <div id="about">< About/></div>
    <div id="education">< Education/></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    <Footer />
      </>
     )
}

export default App;
