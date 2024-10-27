// import './App.css';
import React, { useEffect } from "react"
import NavBar from "./component/navBar/Nav";
import Footer from "./component/sections/10Footer/Footer";
import WelcomeToMyWorld from "./component/sections/1Welcome/WelcomeToMyWorld";
import AboutMe from "./component/sections/2About/AboutMe";
import Portfolio from "./component/sections/3Portfolio/Portfolio";
import Resume from "./component/sections/4Resume/Resume";
import Contact from "./component/sections/9Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';


import 'bootstrap/dist/css/bootstrap.min.css';

// import motion from "framer-motion";
function App() {

  // let cursor = document.querySelector("#cursor")
  // let body = document.querySelector(".body")
  // document.addEventListener("mousemove", (e) => {
  //     body.style.backgroundPositionX = e.pageX / -4 + "px";
  //     body.style.backgroundPositionY = e.pageY / -4 + "px";
  //     cursor.style.top = e.pageY + "px";
  //     cursor.style.left = e.pageX + "px";
  // })

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
    <div className="App" onmousemove="myFunction(event)">
      <NavBar />

    <div id="cursor"></div>
      <div className="appcontainer">

        {/* <div className="navAndWelcomeSection"> */}
      
          <WelcomeToMyWorld />
        {/* </div> */}
        {/* <div className="onlyAbout" > */}
        {/* </div> */}
        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>


      {/* <div className="container2">
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>

      </div> */}
    </div>
  );
}

export default App;
