
import React from "react";
import { ReactTyped } from 'react-typed'; // Corrected import

function WelcomeToMyWorld() {
  const textLines = [
    `a Game Developer.`,
    `Coder.`,
    `a Creative.`,
  ];

  return (
    <div className="welcomeToMyWebSite">
      <div className="welcomeToMyWorldSection-continer">
        <div id="carouselExampleControls" className="slide carousel" data-bs-ride="carousel">
          <div className="carousel-item active">
            <img className="welcome-carousel-img" src="img/yasser-portfolio-images/shooting1.png" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="img/yasser-portfolio-images/home2.png" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="img/yasser-portfolio-images/night-3.png" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="img/yasser-portfolio-images/night4.png" alt="..." />
          </div>
        </div>

        <div className="space welcomeToMyWorldSection-right">
          <div className="my-front-data">
            <h1 className="typo"> Yasser Allam,</h1>
            <h1 className="typoChanger">
              <span className="subName">
                <span className="auto-type">
                  <ReactTyped 
                    strings={textLines} 
                    typeSpeed={60} 
                    backSpeed={60} 
                    startDelay={500} 
                    backDelay={500} 
                    loop={true} 
                  />
                </span>
              </span>
            </h1>
            <p className="description">
              a Front End Web Developer, using React.js as a Framework and also
              using multiple languages, Creative in some points, and can do anything I see into Code, ambition to learn a lot of new skills to improve myself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeToMyWorld;
  




// import React from "react";
// import { Typed } from 'react-typed';
// import { ReactTyped } from 'react-typed';

// function WelcomeToMyWorld() {


//     const textLines = [
//         `a Game Developer.`,
//         `Coder.`,
//         `a Creative.`,
//     ];




//     return (
//         // <div id="des">
//         <div className="welcomeToMyWebSite">
//             <div id="#" className="welcomeToMyWorldSection-continer">


//                 {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"> */}
//                 <div id="carouselExampleControls" class="slide carousel " data-bs-ride="carousel">
//                     <div class="carousel-item active">
//                         <img className="welcome-carousel-img" src="img\yasser-portfolio-images\shooting1.png" class="d" alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                         <img className="welcome-carousel-img" src="img\yasser-portfolio-images\home2.png" class="d" alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                         <img className="welcome-carousel-img" src="img\yasser-portfolio-images\night-3.png" class="d" alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                         <img className="welcome-carousel-img" src="img\yasser-portfolio-images\night4.png" class="d" alt="..." />
//                     </div>
//                 </div>


//                 {/* </div> */}

//                 {/* <CarouselFadeExample /> */}
//                 <div className="space welcomeToMyWorldSection-right">
//                     {/* <img data-aos-anchor-placement="center-center" className="personal-img" src="img\portfolioImgs\PortfoiloImg.png" alt="" /> */}
//                     <div className="my-front-data">
//                         <h1 className="typo"> Yasser Allam,</h1>
//                         <h1 className="typoChanger">
//                             <span className="subName">
//                                 <span className="auto-type">
//                                     <Typed strings={textLines} typeSpeed={60} backSpeed={60} startDelay={500} backDelay={500} loop={true} />
//                                 </span>
//                             </span>
//                         </h1>
//                         {/* <p className="pleasureLine">It's a Pleasure To Be In My World</p> */}
//                         <p className="description"> a Front End Web Developmet, using React js as a Framework and also
//                             using a Multiple language, Creative in some points and can do anything i see into Code, ambition to learn alot of new skills to improve my self.</p>
//                     </div>
//                 </div>

//             </div>
//             {/* <img className="settingCharacters" src="img\welcomeToAbout1.png" alt="" /> */}
//         </div>
//         // </div>

//     )
// }


// export default WelcomeToMyWorld;