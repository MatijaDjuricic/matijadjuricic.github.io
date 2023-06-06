import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
// images
import profile_img from "../img/profile_img.jpg";
import phone_img from "../img/phone.png";
import message_img from "../img/message.png";
import gmail_img from "../img/gmail.png";
import instagram_img from "../img/instagram.png";
import facebook_img from "../img/facebook.png";
import twitter_img from "../img/twitter.png";
import github_img from "../img/github.png";
export const Contacts = () => {
    let boolean = true;
    const ToggleContact = () => {
        if (boolean) {    
            document.querySelector(".contacts-drop-wrapper").style.display = "block";
            document.querySelector(".arrow-up").style.display = "none";
            document.querySelector(".arrow-down").style.display = "block";
            document.querySelector(".contacts-wrapper").style.borderRadius = "0px 10px 0px 0";
            boolean = false;
        } else {
            document.querySelector(".contacts-drop-wrapper").style.display = "none";
            document.querySelector(".arrow-up").style.display = "block";
            document.querySelector(".arrow-down").style.display = "none";
            document.querySelector(".contacts-wrapper").style.borderRadius = "0px 10px 10px 0px";
            boolean = true;
        }
    }
    const OpenMessages = () => {
        document.querySelector(".contacts-screen").style.display = "none";
        document.querySelector(".messages-screen").style.display = "block";
        document.querySelector(".close-messages").addEventListener("click", () => {
            document.querySelector(".home-screen").style.display = "block";
            document.querySelector(".messages-screen").style.display = "none";
        });
    }
    return (
        <div className="contacts-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Contacts</p>
                    <i className="fa-solid fa-xmark close-contacts"></i>
                    <div className="contacts-container">
                        <div className="contacts-wrapper wrapper" onClick={ToggleContact}>
                            <p>Matija Djuricic</p>
                            <img src={profile_img} alt=""/>
                            <i className="fa-solid fa-circle-chevron-up arrow-up"></i>
                            <i className="fa-solid fa-circle-chevron-down arrow-down"></i>
                        </div>
                        <div className="alphabet-wrapper wrapper">
                            <p className="alphabet">A B C D E F G H I J K L <span>M</span> N O P Q R S T U V W X Y Z</p>
                        </div>
                        <div className="contacts-drop-wrapper wrapper">
                            <div className="first-hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Phone Call</p>
                                <a className="contacts-call-a" href="tel:+381641284718">
                                    <img src={phone_img} alt=""/>
                                </a>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Message</p>
                                <button className="contacts-call-a no-background" onClick={OpenMessages}>
                                    <img src={message_img} alt=""/>
                                </button>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Gmail</p>
                                <a className="contacts-call-a" href="mailto:matijadjuricic25@gmail.com">
                                    <img src={gmail_img} alt=""/>
                                </a>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Github</p>
                                <a className="contacts-call-a" href="https://github.com/MatijaDjuricic">
                                    <img src={github_img} alt=""/>
                                </a>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Instagram</p>
                                <a className="contacts-call-a" href="https://www.instagram.com/djuricicmatija">
                                    <img src={instagram_img} alt=""/>
                                </a>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Facebook</p>
                                <a className="contacts-call-a" href="https://www.facebook.com/matija.djuricic.5">
                                    <img src={facebook_img} alt=""/>
                                </a>
                            </div>
                            <div className="hr"/>
                            <div className="phone-call-contacts-wrapper">
                                <p>Twitter</p>
                                <a className="contacts-call-a" href="https://twitter.com/DjuricicMatija">
                                    <img src={twitter_img} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Contacts;
export const ContactsSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".contacts-screen").style.display = "block";
    document.querySelector(".close-contacts").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".contacts-screen").style.display = "none";
    });
}