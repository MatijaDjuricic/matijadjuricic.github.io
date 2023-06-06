import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const Notes = () => {
    return (
        <div className="notes-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Notes</p>
                    <i className="fa-solid fa-xmark close-notes"></i>
                    <div className="notes-div wrapper">
                        <p className="notes-p1">Long story short,</p>
                        <p className="notes-p2">I'm 17 years old full-stack web developer and I live in Serbia.</p>
                        <p className="notes-p3">
                            I have almost two years of full-stack experience and solid knowledge in
                            HTML, CSS(Sass, Bootstrap), JS(React, Node), PHP(Laravel), PYTHON(Flask).
                        </p>
                        <p className="notes-p4">
                            I'm also completely familiar with Webflow platform. 
                            I'm looking for a great and talented team to join.
                        </p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Notes;
export const NotesSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".notes-screen").style.display = "block";
    document.querySelector(".close-notes").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".notes-screen").style.display = "none";
    });
}