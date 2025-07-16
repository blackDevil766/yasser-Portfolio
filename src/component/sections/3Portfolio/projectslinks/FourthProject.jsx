import React from "react";
import Footer from "../../10Footer/Footer2";
import NavBar from '../../../navBar/Nav';

function FourthProject() {

    return (
    
        <div className="project-container">
            <NavBar />

            <div className="projects-container">

                <div className="explanation-about-game">
                    <h4><span className="toolsTitle">Tools:</span> <span className="tools-details">Unreal Engine 5 & C++ & %30 Blueprints</span></h4>
                    <h4> <span className="toolsTitle">Time frame:</span> <span className="tools-details">2 month</span></h4>
                    <h4><span className="mytools-details">" IF VIDEOS DIDN'T WORK RELOAD THE PAGE "</span></h4>
                </div>

                <div className="project-details">
                    <h1 className="project-details-header">Gameplay Tutorial</h1>
                </div>
                <iframe loading="lazy" className="vid" width="1280" height="720"
                    src="https://www.youtube.com/embed/OyOtfBA6OsI?si=7PzCEkfeuTrLY_I-"
                    title="Gameplay tutorial demo (Portfolio)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <h2 className="project-details-header">Gameplay Systems:</h2>
                        <p className="text-gold big-text">
                            Climbing:
                        </p>
                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            There are 3 types of climbing 
                            small height, medium height, high height climb 
                            when the player press space bar he checks if there is a wall or something to climb infront of him 
                            For the high height climb he has to be in air so he can grab the ledge
                        </p>
                    </div>
                    <div>

                    <div className="grid-images">
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman4.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman5.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman2.png" alt="" />
                        {/* <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman1.png" alt="" /> */}
                    </div>
                        
                    </div>
                </div>

                <hr className="horizontal-Line"></hr>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <p className="text-gold big-text" style={{marginTop: '20px'}}>
                            Hooking:
                        </p>
                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            There is a hooking point the developer can set it up by putting them into the level 
                            when the player hooks, he can swing, climb up and down the rope and jump of the hooking 
                        </p>
                    </div>
                    <div className="grid-images">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman6.png" alt="" />
                        <img loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman7.png" alt="" />
                        <img loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman8.png" alt="" />
                        {/* <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman1.png" alt="" /> */}
                    </div>
                </div>

                <hr className="horizontal-Line" ></hr>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <p className="text-gold big-text" style={{marginTop: '20px', lineHeight: '1.1'}}>Melee combat with motion warping:</p>
                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            The player uses (W, S, A, D) when he is attacking so he can navigate between enemies<br/>
                            the player can also dodge by pressing button to the direction he wants to dodge to 
                        </p>  
                    </div>
                    <div className="grid-images">
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman12.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman13.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman32.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman34.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman38.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman36.png" alt="" />
                    
                    </div>
                </div>

                <hr className="horizontal-Line"></hr>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <h2 className="project-details-header" style={{marginBottom: '0'}}>Axe & Rope Mechanics</h2>
                        <p>Mechanic for throwing and retrieving an axe.</p>
                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            <span className="text-gold big-text" style={{marginTop: '20px'}}>Main Mechanic:</span>
                            <br/>
                            When the axe is not in the player's hand, it can be thrown using a rope. 
                            Hold the [Left Mouse Button] to aim at your target, then release it to launch the axe toward the
                            desired object.
                        </p>
                    </div>
                    <div className="grid-images">
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman9.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman21.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman23.png" alt="" />
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman24.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman25.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman28.png" alt="" />
                    
                        {/* <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman1.png" alt="" /> */}
                    </div>
                </div>

                <hr className="horizontal-Line"></hr>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <p className="text-gold big-text" style={{marginTop: '20px', lineHeight: '1.1'}}>
                            Pulling objects and Enemies:
                        </p>
                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            the player can pull objects or enemies, to pull objects the player has 
                            to throw the axe at object then hold [E], pulling enemies by pressing [Middle mouse button]. 
                        </p>
                    </div> 
                    <div className="grid-images">
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman11.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman17.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman19.png" alt="" />
                    
                        {/* <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman1.png" alt="" /> */}
                    </div>
                    
                </div>

                <hr className="horizontal-Line"></hr>

                <div className="achivement-container">
                    <div className="para-project-container" style={{textAlign: 'center'}}>
                        <p className="text-gold big-text" style={{marginTop: '20px'}}>
                            Enemies:
                        </p>

                        <p className="game-system-description" style={{ maxWidth: '700px', margin: '0 auto 10px'}}>
                            Enemies can detect the player by seeing him, only two enemies can attack the player at the same time so if two are attacking the rest of them 
                            move around the player until they get a chance to attack him and they attack him using motion warping
                        </p>
                    </div>
                    <div className="grid-images">
                        <img className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman29.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman30.png" alt="" />
                        <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman33.png" alt="" />
                    
                        {/* <img  className="OneImage-Grid" loading="lazy" src="\img\yasser-portfolio-images\Cavman-Images\Cavman1.png" alt="" /> */}
                    </div>
                </div>
                <hr className="horizontal-Line"/>
                <a className="downloadBtn" target="_blank" style={{marginTop: '40px'}} href="https://github.com/Yasser-GD">
                    <button className="button btn" type="submit">
                        Github
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default FourthProject;