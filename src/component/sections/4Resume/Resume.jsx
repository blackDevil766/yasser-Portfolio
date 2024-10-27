import React, { useState } from "react";
// import Eduction from "./resume/1educationResume";
import ProfessionalSkills from "./resume/2ProfessionalSkills";
import Experience from "./resume/3ExperienceResume";
import Interview from "./resume/4InterviewResume";


function Resume() {


    {/* resume1 */ }

    // const [changes, setChanges] = useState(() => {
    //     return({
    //         change1: "active",
    //         change2: "",
    //         change3: "",
    //         change4: ""

    //     })
    // })
    

    // function clicked1(e) {
    //     if (changes.change1 === "") {
    //         setChanges(()=> {
    //             return({
    //                 change1: "active",
    //                 change2: "",
    //                 change3: "",
    //                 change4: ""
    //             })
    //         })
    //     }
    // }

    {/* resume2 */ }

    // function clicked2(e) {
    //     if (changes.change2 === "") {
    //         setChanges(()=> {
    //             return({
    //                 change1: "",
    //                 change2: "active",
    //                 change3: "",
    //                 change4: ""
    //             })
    //         })
    //     }
    // }



    // const [sets, setSets] = useState(() => {
    //     return ({
    //         del1: "ShowEducation",
    //         del2: "HideProfessional",
    //         del3: "HideExperiences",
    //         del4: "HideInterview"
    //     })
    // })


    // function ShowProfessionals() {
    //     setSets(() => {
    //         return ({
    //             del1: "HideEducation",
    //             del2: "ShowProfessional fadeIt"
    //         })
    //     })
    // }

    // function ShowEducations() {
    //     setSets(() => {
    //         return ({
    //             del1: "ShowEducation",
    //             del2: "HideProfessional"
    //         })
    //     })
    // }




    return (
        <div id="resume" className="resume-container">
            <hr />
            <div  className="header-container">
                <p data-aos="fade-down" data-aos-duration="1500" className="headerParagrafe">1.5+ years of experience</p>
                <h1 data-aos="fade-down" data-aos-duration="1000" className="headerTitle">My Resume</h1>
                <p  className="p-detalis">Skills</p>
                {/* <h4 className="h-details">Design Skill</h4> */}
            </div>

            {/* <div className="containers">
                <div className="resumeHolder">

                    resume1

                    <div  onClick={ShowEducations} className="resumeCreator">
                        <h1  id={changes.change1} onClick={clicked1} className="choosenTitle">Education</h1>
                    </div>

                    resume2

                    <div onClick={ShowProfessionals} className="resumeCreator">
                        <h1 id={changes.change2} onClick={clicked2} className="choosenTitle">Professional Skills</h1>
                    </div>

                </div>
            </div> */}

            <div className="Resume-section">
                <ProfessionalSkills class="skills-container"/>
            </div>

        </div>
    )
}

export default Resume;












































































































































// import React, { useState } from "react";
// import Eduction from "./resume/1educationResume";
// import ProfessionalSkills from "./resume/2ProfessionalSkills";
// import Experience from "./resume/3ExperienceResume";
// import Interview from "./resume/4InterviewResume";


// function Resume() {


//     {/* resume1 */ }

//     const [change1, setChange1] = useState("active")

//     function clicked1(e) {
//         if (change1 === "") {
//             setChange1("active")
//             setChange2("")
//             setChange3("")
//             setChange4("")
//         }
//     }

//     {/* resume2 */ }

//     const [change2, setChange2] = useState("")

//     function clicked2(e) {
//         if (change2 === "") {
//             setChange1("")
//             setChange2("active")
//             setChange3("")
//             setChange4("")
//         }
//     }

//     {/* resume3 */ }

//     const [change3, setChange3] = useState("")

//     function clicked3(e) {
//         if (change3 === "") {
//             setChange1("")
//             setChange2("")
//             setChange3("active")
//             setChange4("")
//         }
//     }

//     {/* resume4 */ }

//     const [change4, setChange4] = useState("")
//     function clicked4(e) {
//         if (change4 === "") {
//             setChange1("")
//             setChange2("")
//             setChange3("")
//             setChange4("active")
//         }
//     }


//     const [sets, setsets] = useState(() => {
//         return ({
//             del1: "ShowEducation",
//             del2: "HideProfessional",
//             del3: "hideExperiences",
//             del4: "HideInterview"
//         })
//     })


//     function ShowProfessionals() {
//         setsets(() => {
//             return ({
//                 del1: "HideEducation",
//                 del2: "ShowProfessional fadeIt",
//                 del3: "HideExperiences",
//                 del4: "HideInterview"


//             })
//         })
//     }

//     function ShowEducations() {
//         setsets(() => {
//             return ({
//                 del1: "ShowEducation",
//                 del2: "HideProfessional",
//                 del3: "HideExperiences",
//                 del4: "HideInterview"

//             })
//         })
//     }


//     function ShowExperiences() {
//         setsets(() => {
//             return ({
//                 del1: "HideEducation",
//                 del2: "HideProfessional",
//                 del3: "ShowExperiences",
//                 del4: "HideInterview"
//             })
//         })
//     }


//     function Interviews() {
//         setsets(() => {
//             return ({
//                 del1: "HideEducation",
//                 del2: "HideProfessional",
//                 del3: "HideExperiences",
//                 del4: "ShowInterview"
//             })
//         })
//     }

//     return (
//         <div className="resume-container">
//             <hr />
//             <div className="resume-header-container">
//                 <p className="yearsOfExperience">7+ years of experience</p>
//                 <h1 className="resumeTitle">My Resume</h1>
//             </div>

//             <div className="resume-choose-container">
//                 <div className="resumeHolder">

//                     {/* resume1 */}

//                     <div onClick={ShowEducations} className="resumeCreator">
//                         <h1 id={change1} onClick={clicked1} className="choosenTitle">Education</h1>
//                     </div>

//                     {/* resume2 */}

//                     <div onClick={ShowProfessionals} className="resumeCreator">
//                         <h1 id={change2} onClick={clicked2} className="choosenTitle">Professional Skills</h1>
//                     </div>

//                     {/* resume3 */}

//                     <div onClick={ShowExperiences} className="resumeCreator">
//                         <h1 id={change3} onClick={clicked3} className="choosenTitle">Experience</h1>
//                     </div>

//                     {/* resume4 */}
//                     <div onClick={Interviews} className="resumeCreator">
//                         <h1 id={change4} onClick={clicked4} className="choosenTitle">Interview</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className="Resume-section">

//                 <Eduction class={sets.del1} />
//                 <ProfessionalSkills class={sets.del2} />
//                 <Experience class={sets.del3} />
//                 <Interview class={sets.del4} />
//             </div>

//         </div>
//     )
// }

// export default Resume;










