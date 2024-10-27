import React from "react";
import Card from "../resumeCreator/1EducationCardCreator";


function Interview(props) {
    return (
        <div className={props.class}>

            <div className="right-details">
                <p className="p-detalis">2007 - 2010</p>
                <h4 className="h-details">Company Experience</h4>

                <div className="eductionContainers">

                    <Card
                        ClassContainer="personalSection-container1"
                        ClassTitle="title-personal1"
                        header="Personal Portfolio April Fools"
                        subtitle="University of DVI (1997 - 2001)"
                        score="4.30/5"
                        descrabtion="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                    <Card
                        ClassContainer="personalSection-container1"
                        ClassTitle="title-personal1"
                        header="Examples Of Personal Portfolio"
                        subtitle="College of Studies (2000 - 2002)"
                        score="4.50/5"
                        descrabtion="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                    <Card
                        ClassContainer="personalSection-container1"
                        ClassTitle="title-personal1"
                        header="Tips For Personal Portfolio"
                        subtitle="University of Studies (1997 - 2001)"
                        score="4.80/5"
                        descrabtion="If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                </div>


            </div>

            <div className="left-details">
                <p className="p-detalis">2007 - 2010</p>
                <h4 className="h-details">Job Experience</h4>


                <div className="eductionContainers">


                    <Card
                        ClassContainer="personalSection-container2"
                        ClassTitle="title-personal2"
                        header="Diploma in Web Development"
                        subtitle="BSE In CSE (2004 - 2008)"
                        score="4.70/5"
                        descrabtion="Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                    <Card
                        ClassContainer="personalSection-container2"
                        ClassTitle="title-personal2"
                        header="The Personal Portfolio Mystery"
                        subtitle="Job at Rainbow-Themes (2008 - 2016)"
                        score="4.95/5"
                        descrabtion="Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                    <Card
                        ClassContainer="personalSection-container2"
                        ClassTitle="title-personal2"
                        header="Diploma in Computer Science"
                        subtitle="Works at Plugin Development (2016 - 2020)"
                        score="5.00/5"
                        descrabtion="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
                    />

                </div>
            </div>
        </div>
    )
}


export default Interview;