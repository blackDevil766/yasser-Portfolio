import React from "react";
import NavBar from "../../../navBar/Nav";
import Footer from "../../10Footer/Footer";


function ThirdProject() {
    return (
        <div className="firstProject-contianer">
            <NavBar />
            <div className="projects-container">
                <video className="vid" autoPlay muted loop controls >
                    <source autoPlay type="video/mp4" src="\img\GamesShortVideos\IslandOfTheLastSurvivorShortVideo.mp4" />
                </video>

                <div className="project-details">
                    <h1 className="project-details-header">Island of the Last Survivor</h1>
                    <p >In Island of the Last Survivor, you awaken on a mysterious island with only a machete in hand and a daunting mission ahead. On the beach, you discover a dead man clutching a worn diary. The journal reveals the dark history of a once-thriving village, now wiped out by relentless monster attacks that emerge at the end of every month. The last survivor of the village planned an escape, leaving behind a blueprint for a ship—but he didn't survive long enough to build it.

                        Now, it’s up to you. You have just 3 days before the next monstrous onslaught. Armed with the machete and a sword you find, you must gather resources, build your ship, and escape before it’s too late. Each day, the threat intensifies, with more dangerous creatures appearing as time runs out.

                        Featuring a building system, inventory management, and escalating monster encounters, Island of the Last Survivor tests your survival skills. Will you have what it takes to outlast the monsters and sail to freedom before the island claims your life too?
                    </p>
                </div>
                <div className="achivement-container">
                    <div className="achivement-details">
                        <img src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\last2.png" alt="" />
                        <div className="para-project-container">
                            <h2 className="last-surviver-header">Gameplay Systems:</h2>
                            <p>
                                <b style={{ color: "#fff" }}>Building System:</b> a flexible, extendable system that allows players to gather resources and construct structures freely, with no space limitations, enabling them to build anywhere they choose.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details">
                        <p>
                            <b style={{ color: "#fff" }}>Item System:</b> As a developer, creating new items is simple and code-free, directly from the editor. Each item comes with predefined variables and enums, allowing you to easily customize its properties, such as designating it as food, a weapon, storable, or non-storable, depending on your needs.

                            Monster Spawning System: Monsters attack the player, with attacks increasing in frequency and strength as time progresses.
                        </p>
                        <img src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\last17.png" alt="" />
                    </div>
                </div>

                <div className="achivement-container">
                    <div className="achivement-details">

                        <img src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\last10.png" alt="" />
                        <p>
                            <b style={{ color: "#fff" }}>Inventory System:</b> Manages resources, and items.
                        </p>

                    </div>
                </div>


                <div className="achivement-container">
                    <div className="achivement-details">
                        <div className="para-project-container">
                            <h2 className="last-surviver-header">Weapons</h2>
                            <p><b style={{ color: "#fff" }}> Starting Weapon: </b> A machete is available at the beginning. </p>
                            <p><b style={{ color: "#fff" }}>Upgraded Weapon: </b>A better sword can be found later in the game.</p>
                        </div>
                        <img src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\last19.png" alt="" />
                    </div>
                </div>

                <div className="achivement-container">
                    <div className="achivement-details">

                        <img src="\img\yasser-portfolio-images\island-of-the-last-survivor-Screenshots\last11.png" alt="" />
                        <p>
                            <b style={{ color: "#fff" }}>Monster Spawning System:</b>  Monsters attack the player, with attacks increasing in frequency and strength as time progresses.
                        </p>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ThirdProject;