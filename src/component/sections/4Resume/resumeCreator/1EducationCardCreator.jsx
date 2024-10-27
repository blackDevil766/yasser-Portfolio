import React from "react";

function Card(props) {
    return (
        <div className="personal-container">
            <div className="personal-portfolio">
                <div  className={props.ClassContainer}>

                    <div  className="personal-header">
                        <div className="personal-data">
                            <h4 className={props.ClassTitle}>{props.header}</h4>
                            <p className="subtitle-personal">{props.subtitle}</p>
                        </div>


                        <div className="score-container">
                            <span className="score">{props.score}</span>
                        </div>
                    </div>

                    <span className="personal-describtion">{props.descrabtion}</span>
                </div>
            </div>

        </div>
    )
}


export default Card;