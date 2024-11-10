import React from "react";
import Skill from "../resumeCreator/2professionalCreator"; 

function ProfessionalSkills(props) {
    return (
        <div className={props.class}>

           

               
            <div className="right-details">


                <Skill heading="C++" percent="95%" />
                <Skill heading="Unreal engine 5" percent="95%" />
                <Skill heading="Design patterns" percent="80%" />
                <Skill heading="Problem solving" percent="90%" />
                <Skill heading="GitHub" percent="80%" />

            </div>
        </div>
    )
}


export default ProfessionalSkills;