import React from "react";
import Time from "./Time.jsx";
import Date from "./Date.jsx";
import "./Style.css";
import wa_img from "../img/whatsapp.png";
export const LockSc = () => {
    return (
        <div className="lock-screen">
            <div className="services-nav">
                <p className="mts">mt:s</p>
                <div className="camera"></div>
                <div className="services-right-side">
                    <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                    <p><i className="fa-solid fa-signal"></i></p>
                    <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                </div>
            </div>
                <div className="lock">
                <i className="fa-solid fa-lock"></i>
            </div>
            <div className="time-date">
                <div className="time-container">
                    <Time id="LockSc"/>
                </div>
                <div className="date-container">
                    <Date/>
                </div>
            </div>
            <div className="wa-message-container">
                <img className="wa-image" src={wa_img} alt=""/>
                <div className="wa-message">
                <p className="message-from">Matija Full-Stack web developer</p>
                <p className="message">Use the phone and contact me</p>
                </div>
            </div>
        </div>
    );
}
export default LockSc;