import React from "react";
import Skill from "../resumeCreator/2professionalCreator"; 

function ProfessionalSkills(props) {
    return (
        <div className={props.class}>

           

               
            <div className="right-details">


                <Skill heading="C++" percent="95%" />
                <Skill heading="Unreal" percent="90%" />
                <Skill heading="Design patterns" percent="80%" />
                <Skill heading="GitHub" percent="90%" />

            </div>
        </div>
    )
}


export default ProfessionalSkills;