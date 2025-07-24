
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
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\Revenge-3.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\Revenge-1.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\Island-of-1.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\Island-of-3.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\Island-of-2.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\pac-runner1.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="welcome-carousel-img" src="\img\yasser-portfolio-images\Page-head-images\pac-runner2.jpg" alt="..." />
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
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeToMyWorld;
  