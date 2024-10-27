import React from "react";

function Skill(props) {
    
    return (
        <div  className="professionalCreators">
            <div className="ProfessionalContainers">
                <h6 className="heading-h6">{props.heading}</h6>

                {/* <div className="progress" >
                    <div className="progress-bar" style={{ width: props.percent }}>
                        <span className="percent-label">{props.percent}</span>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Skill;