import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
import phone_img from "../img/phone.png";
export const PhoneCall = () => {
    const createNumbers = () => {
        const numbers = [];
        for (let i = 1; i < 10; i++) {
            numbers.push(
                <button key={i}>{i}</button>
            );
        }
        return numbers;
    }
    return (
        <div className="phonecall-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Phone Call</p>
                    <i className="fa-solid fa-xmark close-phonecall"></i>
                    <div className="phonecall-wrapper">
                        <div className="phonecall-display wrapper">
                            <span className="call-span">(This is my phone number :)</span>
                            <p className="phone-number-p">+381641284718</p>
                        </div>
                        <div className="numbers">
                            { createNumbers() }
                            <button> * </button>
                            <button> 0 </button>
                            <button> # </button>
                        </div>
                        <div className="phone-call-img-wrapper">
                            <a className="phone-call-a" href="tel:+381641284718">
                                <img className="phone-call-img" src={phone_img} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default PhoneCall;
export const PhoneCallSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".phonecall-screen").style.display = "block";
    document.querySelector(".close-phonecall").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".phonecall-screen").style.display = "none";
    });
}