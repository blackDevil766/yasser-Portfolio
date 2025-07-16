import React from "react";
import Footer from "../../10Footer/Footer2";
import NavBar from '../../../navBar/Nav';

function ThirdProject() {
    return (
        <div className="project-container">
            
            <NavBar />

            <div className="projects-container">

                <div className="explanation-about-game">
                        <h4><span className="toolsTitle">Tools:</span> <span className="tools-details">Unreal Engine 5 & C++ & %40 Blueprints</span></h4>
                        <h4> <span className="toolsTitle">Time frame:</span> <span className="tools-details">5 month</span></h4>
                        <h4><span className="mytools-details">" IF VIDEOS DIDN'T WORK RELOAD THE PAGE "</span></h4>
                </div>

                <iframe loading="lazy" className="vid" width="1280" height="720"
                    src="https://www.youtube-nocookie.com/embed/_YsQ8SRjU80?&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=_YsQ8SRjU80"
                    title="Revenge Boss fight game demo (Short video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>

                <div className="project-details">
                    <h1 className="project-details-header">Island of the Last Survivor</h1>
                    <p >In Island of the Last Survivor, you awaken on a mysterious island with only a machete in hand and a daunting mission ahead. On the beach, you discover a dead man clutching a worn diary. The journal reveals the dark history of a once-thriving village, now wiped out by relentless monster attacks that emerge at the end of every month. The last survivor of the village planned an escape, leaving behind a blueprint for a ship—but he didn't survive long enough to build it.

                        Now, it’s up to you. You have just 3 days before the next monstrous onslaught. Armed with the machete and a sword you find, you must gather resources, build your ship, and escape before it’s too late. Each day, the threat intensifies, with more dangerous creatures appearing as time runs out.

                        Featuring a building system, inventory management, and escalating monster encounters, Island of the Last Survivor tests your survival skills. Will you have what it takes to outlast the monsters and sail to freedom before the island claims your life too?
                    </p>
                </div>
                
                <div className="achivement-container">
                    <div className="achivement-details">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Island-of-the-last-survivor-resized-images\Island5.jpg" alt="" />
                        <div className="para-project-container">
                            {/* last-surviver-header */}
                            <h2 className="project-details-header">Gameplay Systems:</h2>
                            <p>
                                <b style={{ color: "#be9852" }}>Building System:</b> a flexible, extendable system that allows players to gather resources and construct
                            </p>
                            <p>
                                structures freely, with no space limitations, enabling them to build anywhere they choose.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details achivement2">
                        <img src="\img\yasser-portfolio-images\Island-of-the-last-survivor-resized-images\Island4.jpg" alt="" />
                        <div className="para-project-container">
                            <p>
                                <b style={{ color: "#be9852" }}>Item System:</b> As a developer, creating new items is simple and code-free,
                            </p>

                            <p>
                             directly from the editor.  Each item comes with predefined variables and enums, 

                            </p>

                            <p>
                            allowing you to easily customize its properties, such as designating it as food, a weapon,

                            </p>

                            <p>
                             storable, or non-storable, depending on your needs.  Monster Spawning System: Monsters attack the player, 

                            </p>

                            <p>
                            with attacks increasing in frequency and strength as time progresses.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="achivement-container">
                    <div className="achivement-details">

                        <img loading="lazy" src="\img\yasser-portfolio-images\Island-of-the-last-survivor-resized-images\Island1.jpg" alt="" />
                        <div className="para-project-container">
                            <p>
                                <b style={{ color: "#be9852" }}>Inventory System:</b> Manages resources, and items.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details achivement2">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Island-of-the-last-survivor-resized-images\Island3.jpg" alt="" />

                        <div className="para-project-container">
                            <h2 className="project-details-header">Weapons</h2>
                            <p><b style={{ color: "#be9852" }}> Starting Weapon: </b> A machete is available at the beginning. </p>
                            <p><b style={{ color: "#be9852" }}>Upgraded Weapon: </b>A better sword can be found later in the game.</p>
                        </div>
                    </div>
                </div>

                <div className="achivement-container">
                    <div className="achivement-details">
                        <img loading="lazy" src="\img\yasser-portfolio-images\Island-of-the-last-survivor-resized-images\Island2.jpg" alt="" />
                        <div className="para-project-container">
                            <p>
                                <b style={{ color: "#be9852" }}>Monster Spawning System:</b>  Monsters attack the player, with attacks increasing in frequency and strength as time progresses.
                            </p>
                        </div> 
                    </div>
                </div>
                <a className="downloadBtn" href="https://yasserallam.itch.io/island-of-the-last-survivor"  download>
                    <button className="button btn" type="submit">
                        Download
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default ThirdProject;