import React from "react";
import CardCreator from "./portfolioCreator";



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

                <CardCreator
                    time="1500"
                    id="id1"
                    link= "/FirstProject"
                    // img="img\beete.png"
                    img="\img\Projects photos videos\pac-runnerPhotosVideoedit.mp4"
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
                />
            </div>


        </div>
    )
}

export default Portfolio;
