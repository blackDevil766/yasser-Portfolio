import React from "react";
import Card from "../resumeCreator/1EducationCardCreator";

function Eduction(props) {
    return(
        <div className= {props.class}>

        <div className="right-details">
            <p className="p-detalis">2020 - 2022</p>
            <h4 className="h-details">Education Quality</h4>

            <div className="eductionContainers">

                <Card
                animate = "fade-right"
                    ClassContainer="personalSection-container1"
                    ClassTitle="title-personal1"
                    header="FullStack Udemy"
                    subtitle="Angla (2020 - 2021)"
                    score="4.70/5"
                    descrabtion="online"
                />

                <Card
                    ClassContainer="personalSection-container1"
                    ClassTitle="title-personal1"
                    header="FrontEnd course - A.T.E.C"
                    subtitle="2021"
                    score="4.30/5"
                    descrabtion="Egypt - Obour High Institutes"
                />

                {/* <Card
                    ClassContainer="personalSection-container1"
                    ClassTitle="title-personal1"
                    header="python course"
                    subtitle="University of Studies (2020 - 2022)"
                    score="4.80/5"
                    descrabtion="still improveing myself in it"
                /> */}

            </div>


        </div>

        <div className="left-details">
            <p className="p-detalis">2022 - 2023</p>
            <h4 className="h-details">Job Experience</h4>


            <div className="eductionContainers">


                <Card
                    ClassContainer="personalSection-container2"
                    ClassTitle="title-personal2"
                    header="graduate project"
                    subtitle="2023"
                    score="4.70/5"
                    descrabtion="Obour High Institutes"
                />

                <Card
                    ClassContainer="personalSection-container2"
                    ClassTitle="title-personal2"
                    header="Design traditions"
                    subtitle="2022"
                    score="4.30/5"
                    descrabtion="by my self"
                />


            </div>
        </div>
    </div>
    )
}


export default Eduction;