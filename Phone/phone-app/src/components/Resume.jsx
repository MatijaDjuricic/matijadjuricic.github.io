import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const Resume = () => {
    return (
        <div className="resume-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Resume(CV)</p>
                    <i className="fa-solid fa-xmark close-resume"></i>
                    <div className="resume-div wrapper">
                        <p className="resume-p">
                            Soon...
                        </p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Resume;
export const ResumeSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".resume-screen").style.display = "block";
    document.querySelector(".close-resume").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".resume-screen").style.display = "none";
    });
}