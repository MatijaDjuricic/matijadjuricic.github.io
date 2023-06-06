import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const Camera = () => {
    return (
        <div className="camera-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Camera</p>
                    <i className="fa-solid fa-xmark close-camera"></i>
                    <div className="camera-wrapper wrapper">
                        <p className="camera-p">Sorry, this phone doesn't have memory!</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Camera;
export const CameraSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".camera-screen").style.display = "block";
    document.querySelector(".close-camera").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".camera-screen").style.display = "none";
    });
}