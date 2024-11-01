import React from "react";
// import CardCreator from "./portfolioCreator";



function Portfolio() {

    return (
        <div id="portfolio" className="Portfolio-Container1">
            <hr />

            <div className="header-portoflio">
                <p data-aos="fade-down" data-aos-duration="1500" className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                {/* <h1 className="title2">My Portfolio</h1> */}
                <h1 data-aos="fade-down" data-aos-duration="1000" className="title2">My Portfolio</h1>
            </div>



            <div className="portfolio-boxes">


                <div data-aos="fade-up" data-aos-duration="1500" className="portfolio-container2">

                    <a id="pac-runner" className="Portfo-img" href="/FirstProject" >


                        <iframe loading="lazy" className=" portfoliodisplay imgHover" width="1280" height="720"
                            src="https://www.youtube-nocookie.com/embed/u8Meky-9LT8?&controls=0&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=u8Meky-9LT8"
                            title="Pac-Runner: First-Person Maze Escape"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >

                        </iframe>
                    </a>

                </div>


                <div data-aos="fade-up" data-aos-duration="2000" className="portfolio-container2">

                    <a id="Revenge" className="Portfo-img" href="/SecProject" >


                        <iframe loading="lazy" className=" portfoliodisplay imgHover" width="1280" height="720"
                            src="https://www.youtube-nocookie.com/embed/Wsx1IvkztoM?&controls=0&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=Wsx1IvkztoM"
                            title="Pac-Runner: First-Person Maze Escape"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </a>

                </div>


                <div data-aos="fade-up" data-aos-duration="2500" className="portfolio-container2">

                    <a id="IslandOfTheLastSurvivor" className="Portfo-img" href="/ThirdProject" >


                        <iframe loading="lazy" className=" portfoliodisplay imgHover" width="1280" height="720"
                            src="https://www.youtube-nocookie.com/embed/Krq_1DBNHnw?&controls=0&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=Krq_1DBNHnw"
                            title="Pac-Runner: First-Person Maze Escape"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </a>
                </div>

                {/* <CardCreator
                    time="1500"
                    id="id1"
                    link= "/FirstProject"
                    // img="img\beete.png"
                    img="https://www.youtube.com/embed/u8Meky-9LT8&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&loop=1&playlist=u8Meky-9LT8"
                    listTitle="Ecommerce"
                    numbers="600"
                    title="Its provide a products"
                    gameID= "pac-runner"
                />
    
                <CardCreator
                    time="2000"
                    id="id2"
                    link= "/SecProject"
                    img="\img\Projects photos videos\RevengePhotosVideo_Cutted.mp4"
                    // img="img\inbio.png"
                    listTitle="application"
                    numbers="750"
                    title="portfoilo landing Page"
                    gameID= "Revenge"
                />

                <CardCreator
                    time="2500"
                    id="id3"
                    link= "/ThirdProject"
                    img="\img\Projects photos videos\IslandOfTheLastSurvivorPhotosVideo.mp4"
                    // img="img\smart.png"
                    listTitle="Design"
                    numbers="630"
                    title="Discover Agency developers"
                    gameID= "IslandOfTheLastSurvivor"
                /> */}
            </div>


        </div>
    )
}

export default Portfolio;
