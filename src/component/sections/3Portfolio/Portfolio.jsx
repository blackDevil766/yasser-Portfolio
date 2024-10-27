import React, { useState,Link } from "react";
import CardCreator from "./portfolioCreator";
import { portfolioImgs } from "./portfolioCreator";
import Tilt from 'react-parallax-tilt';



function Portfolio() {

    // const [actionTaken, setActionTaken] = useState(() => {
    //     return {
    //         page1: "hideTheFlyDiv1",
    //         page2: "hideTheFlyDiv2",
    //         page3: "hideTheFlyDiv3",
    //         page4: "hideTheFlyDiv4",
    //         page5: "hideTheFlyDiv5",
    //     }
    // })

    // function Showw1() {
    //     setActionTaken((prev) => {
    //         return {
    //             ...prev,
    //             page1: "flyingDiv"
    //         }
    //     })
    // }

    // function Showw2() {
    //     setActionTaken((prev) => {
    //         return {
    //             ...prev,
    //             page2: "flyingDiv"
    //         }
    //     })
    // }

    // function Showw3() {
    //     setActionTaken((prev) => {
    //         return {
    //             ...prev,
    //             page3: "flyingDiv"
    //         }
    //     })
    // }

    // function Showw4() {
    //     setActionTaken((prev) => {
    //         return {
    //             ...prev,
    //             page4: "flyingDiv"
    //         }
    //     })
    // }

    // function Showw5() {
    //     setActionTaken((prev) => {
    //         return {
    //             ...prev,
    //             page5: "flyingDiv"
    //         }
    //     })
    // }



    // function hideTheAction() {
    //     setActionTaken(() => {
    //         return {
    //             page1: "hideTheFlyDiv1",
    //             page2: "hideTheFlyDiv2",
    //             page3: "hideTheFlyDiv3",
    //             page4: "hideTheFlyDiv4",
    //             page5: "hideTheFlyDiv5"
    //         }
    //     }
    //     )
    // }


    // const [ShowDetail, setShowDetail] = useState(() =>{
    //     return{
    //         id1:"detali1",
    //         id2:"detali2",
    //         id3:"detali3",
    //     }
    // })


    // function PageDetails(props) {
    //     return (
    //         <div className={props.class} >
    //             <div className="portfolioShower">

    //                 <div className="showImg">
    //                     <img className="PortfoiloImg" src={props.img} alt="" />
    //                 </div>

    //                 <div className="showDescribtions">

    //                     <div onClick={hideTheAction} className="closeDiv">
    //                         <img className="closeIco" src="\img\closeIcon.svg" alt="" />
    //                     </div>

    //                     <div className="contactShower">
    //                         <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
    //                         <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
    //                         <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
    //                         <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
    //                     </div>
    //                     <div className="buttons">
    //                         <button i d="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
    //                         <button id="signUpBtn" className="btn viewBtn" type="submit"><a href={props.href}>view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }


    // function HiddenPart(props) {
    //     return (
    //         <>
    //             <div id="acti" className={props.class} >

    //                 <div className="portfolioShower">

    //                     <div onClick={hideTheAction} className="closeDiv">
    //                         <img className="closeIco" src="\img\closeIcon.svg" alt="" />
    //                     </div>

    //                     <div className="showImg">
    //                         <img id={props.id} className="PortfoiloImg" src={props.img} alt="" />
    //                     </div>

    //                     <div className="showDescribtions">

    //                         <div className="contactShower">
    //                             <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
    //                             <h3 className="titleOfFlyingDescribtion">{props.title}</h3>
    //                             <p className="md-typo-of-flying-describtion">{props.describ}</p>
    //                             <p className="md-typo-of-flying-describtion2">{props.language}</p>
    //                         </div>
    //                         <div className="buttons">
    //                             <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
    //                             <button id="signUpBtn" className="btn viewBtn" type="submit"><a href={props.href}>view project <img src="\img\right-arrow.svg" alt="" /> </a></button>
    //                         </div>


    //                     </div>


    //                 </div>

    //             </div>
    //         </>
    //     )
    // }

    return (
        <div id="portfolio" className="Portfolio-Container1">
            <hr />

            {/* <PageDetails href = "http://localhost:3002/" class = {actionTaken.page1} img="img/beete.png" />
            <PageDetails href = "http://localhost:3003/" class = {actionTaken.page2} img="img/inbio.png" />
            <PageDetails href = "http://localhost:3001/" class = {actionTaken.page3} img="img/smart.png" /> */}



{/* <FirstProject /> */}
{/* <Link to ={<FirstProject />} >hello</Link> */}
            
            {/* <div id="acti">
                <div className="portfolioShower">
            
                    <div className="showImg">
                     <img id="ecomImg" className="PortfoiloImg" src="img\portfolioImgs\ecommerce.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Ecommerce App.</h3>
                            <p className="md-typo-of-flying-describtion">sell products, its show product that owner add it and its have a payment method so that we can sell online</p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS - PYTHON - DEJANGO</p>
                        </div>
                        <div className="buttons">
                            <Tilt >
                                <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            </Tilt>
                            <Tilt >
                                <a href="https://ecom-two-lilac.vercel.app/"><button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /> </button></a>
                            </Tilt>
                        </div>


                    </div>
                    <div className="closeDiv">
                        <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                    </div>

                </div>
            </div>


            <div id="acti">

                <div className="portfolioShower">

                    <div className="closeDiv">
                        <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                    </div>

                    <div className="showImg">
                        <img id="rainbowitImg" className="PortfoiloImg" src="img\portfolioImgs\rainbowit.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Portfoilo Design</h3>
                            <p className="md-typo-of-flying-describtion">It a website to show some people who can make a UI/UX, and It's my first project and i just saw it somewhere and i just traditon it, </p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <Tilt >
                                <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            </Tilt>
                            <Tilt >
                                <a href="https://rainbowit.vercel.app/">   <button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /> </button></a>
                            </Tilt>
                        </div>


                    </div>



                </div>

            </div>

            <div id="acti">

                <div className="portfolioShower">

                    <div className="closeDiv">
                        <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                    </div>

                    <div className="showImg">
                        <img id="smartImg" className="PortfoiloImg" src="img\portfolioImgs\smart.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Agency Design</h3>
                            <p className="md-typo-of-flying-describtion">It a website to show some people who can make a UI/UX, and It's my first project and i just saw it somewhere and i just traditon it, </p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <Tilt >
                                <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            </Tilt>
                            <Tilt >
                                <a href="https://smart-academy.vercel.app/"><button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /> </button></a>
                            </Tilt>
                        </div>


                    </div>



                </div>

            </div>





            <div id="acti">

                <div className="portfolioShower">

                    <div className="closeDiv">
                        <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                    </div>

                    <div className="showImg">
                        <img id="netstormImg" className="PortfoiloImg" src="img\portfolioImgs\netstorm.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Netstorm</h3>
                            <p className="md-typo-of-flying-describtion">I don't remember what was the purpose of this website but i made like the real one from themesforcet, i made it to improve my skills in frontend i hope you like the design</p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <Tilt >
                                <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            </Tilt>
                            <Tilt >
                                <a href="https://net-storm.vercel.app/"><button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /> </button></a>
                            </Tilt>
                        </div>


                    </div>


                </div>

            </div>




            <div id="acti">

                <div className="portfolioShower">

                    <div className="closeDiv">
                        <img className="closeIco" src="\img\closeIcon.svg" alt="" />
                    </div>

                    <div className="showImg">
                        <img id="carDetails" className="PortfoiloImg" src="img\portfolioImgs\carDetails.png" alt="" />
                    </div>

                    <div className="showDescribtions">

                        <div className="contactShower">
                            <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
                            <h3 className="titleOfFlyingDescribtion">Car Details</h3>
                            <p className="md-typo-of-flying-describtion">It was a task i took it from someone who help me to improve my self and find a job</p>
                            <p className="md-typo-of-flying-describtion2">I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS</p>
                        </div>
                        <div className="buttons">
                            <Tilt >
                                <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
                            </Tilt>
                            <Tilt >
                                <a href="https://car-details.vercel.app/"><button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /> </button></a>
                            </Tilt>
                        </div>


                    </div>


                </div>

            </div> */}


            {/* <HiddenPart
                id="ecomImg"
                class={actionTaken.page1}
                img="img\portfolioImgs\ecommerce.png"
                title="Ecommerce App."
                describ="sell products, its show product that owner add it and its have a payment method so that we can sell online"
                language="I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS - PYTHON - DEJANGO"
                href="Ecommerce"
            />

            <HiddenPart
                id="rainbowitImg"
                class={actionTaken.page2}
                img="img\portfolioImgs\rainbowit.png"
                title="Portfoilo Design"
                describ="Portfoilo that show your skills and show it to the world, i made it to prove to my self that i can make anything and to prove to you what am cabable for."
                language="I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS"
                href="inbio"
            />


            <HiddenPart
                id="smartImg"
                class={actionTaken.page3}
                img="img\portfolioImgs\smart.png"
                title="Agency Design"
                describ="It a website to show some people who can make a UI/UX, and It's my first project and i just saw it somewhere and i just traditon it, "
                language="I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS"
                href="agency"
            />

            <HiddenPart
                id="netstormImg"
                class={actionTaken.page4}
                img="img/netstorm.png"
                title="Netstorm"
                describ="I don't remember what was the purpose of this website but i made like the real one from themesforcet, i made it to improve my skills in frontend i hope you like the design "
                language="I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS"
                href="netstorm"
            />

            <HiddenPart
                id="carDetails"
                class={actionTaken.page5}
                img="img\portfolioImgs\carDetails.png"
                title="Car Details"
                describ="It was a task i took it from someone who help me to improve my self and find a job"
                language="I made it using HTML - CSS - JSX - BOOTSTRAP - ES6 - REACT JS"
                href="CarDetails"
            /> */}



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
































































// import React, { useState } from "react";
// import PortfolioCreator from "./portfolioCreator";
// import { portfolioImgs } from "./portfolioCreator";

// function Portfolio() {


//     const [showIt, setShowIT] = useState("")

//     // const dataa = ;

//     function Showw() {
//         setShowIT(
//             <div className="flyingDiv">
//                 <div className="portfolioShower">

//                     <div className="showImg">
//                         <img className="rainboitImg" src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg" alt="" />
//                     </div>

//                     <div className="showDescribtions">

//                         <div onClick={hideIt} className="closeDiv">
//                             <img className="closeIco" src="\img\closeIcon.svg" alt="" />
//                         </div>

//                         <div className="contactShower">
//                             <p className="headTitleOfFlyingDescribtion">Featured - Design</p>
//                             <h3 className="titleOfFlyingDescribtion">App Design Development.</h3>
//                             <p className="md-typo-of-flying-describtion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
//                             <p className="md-typo-of-flying-describtion2">Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
//                         </div>
//                         <div className="buttons">
//                             <button id="signUpBtn" className="btn likeBtn" type="submit">Like this <img src="\img\like.svg" alt="" /></button>
//                             <button id="signUpBtn" className="btn viewBtn" type="submit">view project <img src="\img\right-arrow.svg" alt="" /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


//     function hideIt() {
//         setShowIT("")
//     }


//     return (
//         <div className="Portfolio-Container1">
//             <hr />

//             {showIt}


//             <div className="header-portoflio">
//                 <p className="subtitle2">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
//                 {/* <h1 className="title2">My Portfolio</h1> */}
//                 <h1 onClick={Showw} className="title2">My Portfolio</h1>
//             </div>

//             <div className="portfolio-boxes">
//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.development}
//                     listTitle="development"
//                     numbers="600"
//                     title="The services provide for design "
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.application}
//                     listTitle="application"
//                     numbers="750"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.photoShop}
//                     listTitle="photoshop"
//                     numbers="630"
//                     title="Logo design creativity &amp; Application"
//                 />


//             </div>

//             <div className="portfolio-boxes">

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.figma}
//                     listTitle="figma"
//                     numbers="360"
//                     title="Mobile app landing design & app maintain"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign}
//                     listTitle="web design"
//                     numbers="280"
//                     title="Design for tecnology & services"
//                 />

//                 <PortfolioCreator
//                     show={Showw}
//                     img={portfolioImgs.webDesign2}
//                     listTitle="web design"
//                     numbers="690"
//                     title="App for tecnology & services"
//                 />
//             </div>

//         </div>
//     )
// }

// export default Portfolio;