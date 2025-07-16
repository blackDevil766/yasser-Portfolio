import React from "react";
import Footer from "../../10Footer/Footer2";
import NavBar from '../../../navBar/Nav';

function FirstProject() {

    return (
        <div className="project-container">

            <NavBar />

            <div className="projects-container">

                <div className="explanation-about-game">
                    <h4><span className="toolsTitle">Tools:</span> <span className="tools-details">Unreal Engine 5 & C++</span></h4>
                    <h4> <span className="toolsTitle">Time frame:</span> <span className="tools-details">1 month</span></h4>
                    <h4><span className="mytools-details">" IF VIDEOS DIDN'T WORK RELOAD THE PAGE "</span></h4>
                </div>
                

                <iframe loading="lazy" className="vid" width="1280" height="720"
                    src="https://www.youtube-nocookie.com/embed/dQQwUtSKIsI?&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=dQQwUtSKIsI"
                    title="Pac-Runner: First-Person Maze Escape"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>




                <div className="project-details">
                    <h1 className="project-details-header">Title: Pac-Runner: First-Person Maze Escape</h1>
                    <p>
                        Step into the maze like never before in Pac-Runner, a first-person twist on the classic arcade game! As the player, you’ll find yourself inside the maze, navigating tight corridors, and dodging ghosts while frantically hunting down every piece of food to escape each level.
                        But you're not alone! Scattered throughout the maze are special ability foods that you can store and use at the perfect moment. Each level introduces new abilities, like the Map Guide, which reveals the entire maze layout and the locations of food and ghosts. Or maybe you’ll find the Speed Boost, giving you a burst of speed to outrun your ghostly pursuers. Freeze ghosts in their tracks with the Freeze ability or turn the tables with the Be the Eater power, letting you hunt down ghosts and send them running for a change!
                        Use your stored abilities wisely to survive each level and escape the maze. Will you outwit the ghosts and become the ultimate Pac-Runner?
                    </p>
                </div>

                {/* First Image And Descripition */}
                <div className="achivement-container">
                    <div id="achivement-details2" className="achivement-details achivement1">

                        <div className="image-project-container">
                            <img loading="lazy" src="\img\yasser-portfolio-images\Pac-runner-resized-images\pacman2.jpg" alt="" />
                        </div>

                        <div className="para-project-container">
                            <p>
                                <p className="text-gold">Unique First-Person Perspective : </p>
                                Unlike traditional Pac-Man games,
                            </p>
                            <p>
                                your version offers a first-person view, which immerses players directly into the maze.
                            </p>
                            <p>
                                This provides a fresh, engaging experience where
                            </p>

                            <p>
                                players feel as though they are navigating the maze themselves.
                            </p>
                        </div>



                    </div>
                </div>

                {/* Secondd Image And Descripition */}
                <div className="achivement-container">
                    <div id="achivement-details2" className="achivement-details achivement2">

                    <div className="image-project-container">
                            <img loading="lazy" src="\img\yasser-portfolio-images\Pac-runner-resized-images\pacman3.jpg" alt="" />
                        </div>
                        <div className="para-project-container">
                            <h2 className="achivement-header" style={{color: '#be9852'}}>
                                Strategic Use of Abilities:
                            </h2>
                            <p className="achivement-para"> Players can collect and store special abilities like:</p>
                            <p>
                                <span className="text-gold">Map Guide : </span>Reveals the layout of the maze, helping players plan their route.
                            </p>
                            <p>
                                <span className="text-gold">Ghost Freeze : </span>Freezes enemies for a short period, giving players time to collect food or strategize.
                            </p>
                        </div>

                      


                    </div>
                </div>

                {/* Third Image And Descripition */}
                <div className="achivement-container">
                    <div id="achivement-details2" className="achivement-details achivement3">

                        <div className="image-project-container">
                            <img loading="lazy" src="\img\yasser-portfolio-images\Pac-runner-resized-images\pacman1.jpg" alt="" />
                        </div>


                        <div className="para-project-container">
                            <h3 className="achivement-header" style={{color: '#be9852'}}>
                                And there is also :
                            </h3>

                            <p>
                                <b style={{ color: "#be9852" }}> Ghost Eater : </b>Grants the ability to defeat ghosts, adding an offensive layer to the gameplay.
                            </p>
                            <p>
                                <b style={{ color: "#be9852" }}>Speed Boost : </b>Temporarily increases movement speed to escape or evade danger.
                            </p>
                        </div>
                    </div>
                </div>

                <a className="downloadBtn" href="https://yasserallam.itch.io/pac-runner" target="" download>
                    <button className="button btn" type="submit">
                        Download
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default FirstProject;