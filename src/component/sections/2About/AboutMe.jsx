import React, { useState } from "react";
import BoxCreator, { iconContain } from "./BoxCreator"
// import FeatureCreator from "./FeaturesCreator";




function Features() {

    

    

    return (
        <div id="AboutMe">
             {/* <video id="myVideo" loop autoPlay muted={true} >
                    <source src="./img/welcome_BackGroundvideo4.mp4" type="video/mp4" ></source>
                        Your browser does not support HTML5 video.
                </video> */}
            {/* <hr /> */}

            <div className="About-secondSection">
                <span data-aos="fade-down" data-aos-duration="1500" className="subtitle">About</span>
                <h2 data-aos="fade-down" data-aos-duration="1000" className="title AboutTitle">About Me</h2>

            </div>


            <div className="about-continer">



                {/* <div  className="about-right-img-section">
                    <img src="img\hero2.gif" alt="" />                    
                </div>
                 */}
                <div className="about-left-sectiom">
                    <h1 className="about-title">It's Nice To Have You Here</h1>
                    <p className="about-decribtion">Let's talk about my journey, I Start Coding in 2020, and learning web development fullstack in udemy with angla, after i ending this cource i choose to improve myself in frontend and started to learn and use backend in my project, I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                </div>

                

                {/* <ul className="feild">
                    <BoxCreator svgIcon={iconContain.listBox} title="Web application" describe="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                    <BoxCreator svgIcon={iconContain.bookBox} title="Web Development" describe=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence." />
                    <BoxCreator svgIcon={iconContain.tevBox} title="App Development" describe="I throw myself down among the tall grass by the stream as I lie close to the earth." />
                </ul>

                <ul className="feild">
                    <BoxCreator svgIcon={iconContain.switchAppBox} title="Mobile App" describe="There are many variations of passages of Lorem Ipsum available, but the majority." />
                    <BoxCreator svgIcon={iconContain.wifiBox} title="CEO Marketing" describe="always free from repetition, injected humour, or non-characteristic words etc." />
                    <BoxCreator svgIcon={iconContain.slackBox} title="Personal Portfolio April" describe=" It uses a dictionary of over 200 Latin words, combined with a handful of model sentence." />
                </ul> */}

            </div>
        </div>
    )
}


export default Features;

