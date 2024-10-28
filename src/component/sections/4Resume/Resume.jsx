import React from "react";
// import Eduction from "./resume/1educationResume";
import ProfessionalSkills from "./resume/2ProfessionalSkills";



function Resume() {



    return (
        <div id="resume" className="resume-container">
            <hr />
            <div  className="header-container">
                <p data-aos="fade-down" data-aos-duration="1500" className="headerParagrafe">1.5+ years of experience</p>
                <h1 data-aos="fade-down" data-aos-duration="1000" className="headerTitle">My Resume</h1>
                <p  className="p-detalis">Skills</p>
            </div>

            <div className="Resume-section">
                <ProfessionalSkills class="skills-container"/>
            </div>

        </div>
    )
}

export default Resume;

