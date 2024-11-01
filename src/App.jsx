// import './App.css';
import React, { useEffect } from "react"
import NavBar from "./component/navBar/Nav";
import Footer from "./component/sections/10Footer/Footer2";
import WelcomeToMyWorld from "./component/sections/1Welcome/WelcomeToMyWorld";
import AboutMe from "./component/sections/2About/AboutMe";
import Portfolio from "./component/sections/3Portfolio/Portfolio";
import Resume from "./component/sections/4Resume/Resume";
// import Contact from "./component/sections/9Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


var timeout;
  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector('#cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    cursor.style.visibility ="visible";

    function mousestops() {
      cursor.style.visibility ="hidden";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mousestops,1000)
  });

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    // <div className="App" onMouseMove="myFunction(event)">

    <div className="App" >
      <NavBar />

    <div id="cursor"></div>
      <div className="appcontainer">
        <WelcomeToMyWorld />
        <AboutMe />
        <Portfolio />
        <Resume />
        {/* <Contact /> */}
        <Footer />
      </div>


    </div>
  );
}

export default App;
