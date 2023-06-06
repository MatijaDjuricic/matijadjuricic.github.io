import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
import "./Style.css";
import { Camera, CameraSc } from "./Camera.jsx";
import { Gallery ,GallerySc } from "./Gallery.jsx";
import { Calculator, CalculatorSc } from "./Calculator.jsx";
import { TicTacToe, TicTacToeSc } from "./TicTacToe.jsx";
import { Notes, NotesSc } from "./Notes.jsx";
import { PhoneCall, PhoneCallSc } from "./PhoneCall.jsx";
import { Contacts, ContactsSc } from "./Contacts.jsx";
import { Messages , MessagesSc } from "./Messages.jsx";
import { Settings, SettingsSc } from "./Settings.jsx";
import { Resume, ResumeSc } from "./Resume.jsx";
import { SecondSc, ScrollChangeDot1Sc, pointerDown, pointerUp, pointerLeave, pointerMove } from "./PhoneScrolling.jsx";
// images
import profile_img from "../img/profile_img.jpg";
import gmail_img from "../img/gmail.png";
import instagram_img from "../img/instagram.png";
import facebook_img from "../img/facebook.png";
import twitter_img from "../img/twitter.png";
import github_img from "../img/github.png";
import discord_img from "../img/discord.png";
import gallery_img from "../img/gallery.png";
import camera_img from "../img/camera.png";
import calculator_img from "../img/calculator.png";
import tic_tac_toe_img from "../img/tic_tac_toe.png";
import phone_img from "../img/phone.png";
import contacts_img from "../img/contacts.png";
import message_img from "../img/message.png";
import settings_img from "../img/settings.png";
import notes_img from "../img/notes.png";
import resume_img from "../img/resume.png";
export const HomeSc = () => {
    return (
        <div>
            <div className="home-screen screens">
                <Zoom duration={800}>
                    <div>
                        <Time id="HomeSc"/>
                        <div className="camera"></div>
                        <div className="services-right-side">
                            <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                            <p><i className="fa-solid fa-signal"></i></p>
                            <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                        </div>
                    </div>
                    <div>
                        <div className="Screens" onPointerDown={pointerDown} onPointerUp={pointerUp} onPointerLeave={pointerLeave} onPointerMove={pointerMove}>
                            <div className="first-screen">
                                <div className="message-about-container wrapper">
                                    <div className="message-about">
                                        <p className="message-about-heading">Hello, I am Matija Djuricic Full-Stack web developer</p>
                                        <p className="message-about-p">Currently located in Serbia. I love building interactive, digital experiences on the web</p>
                                    </div>
                                </div>
                                <div className="icons-container">
                                    <div className="icons-wrapper">
                                        <div className="profile-image-wrapper wrapper">
                                            <img className="profile-image" src={profile_img} alt=""/>
                                            <p className="photo-p">Photo Widget</p>
                                        </div>
                                        <a href="mailto:matijadjuricic25@gmail.com">
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={gmail_img} alt=""/>
                                                <p className="icon-p">Gmail</p>
                                            </div>
                                        </button>
                                        </a>
                                        <a href="https://github.com/MatijaDjuricic">
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={github_img} alt=""/>
                                                <p className="icon-p">Github</p>
                                            </div>
                                        </button>
                                        </a>
                                        <a href="https://www.instagram.com/djuricicmatija">
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={instagram_img} alt=""/>
                                                <p className="icon-p">Instagram</p>
                                            </div>
                                        </button>
                                        </a>
                                        <a href="https://www.facebook.com/matija.djuricic.5">
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={facebook_img} alt=""/>
                                                <p className="icon-p">Facebook</p>
                                            </div>
                                        </button>
                                        </a>
                                        <a href="https://dsc.bio/matijadjuricic">
                                        <button className="icons-btn"> 
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={discord_img} alt=""/>
                                                <p className="icon-p">Discord</p>
                                            </div>
                                        </button>
                                        </a>
                                        <a href="https://twitter.com/DjuricicMatija">
                                        <button className="icons-btn"> 
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={twitter_img} alt=""/>
                                                <p className="icon-p">Twitter</p>
                                            </div>
                                        </button>
                                        </a>
                                        <button className="camera-btn icons-btn" onClick={CameraSc}>
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={camera_img} alt=""/>
                                                <p className="icon-p">Camera</p>
                                            </div>
                                        </button>
                                        <button className="icons-btn" onClick={GallerySc}>
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={gallery_img} alt=""/>
                                                <p className="icon-p">Gallery</p>
                                            </div>
                                        </button>    
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper" onClick={CalculatorSc}>
                                                <img className="secondary-icon" src={calculator_img} alt=""/>
                                                <p className="icon-p">Calculator</p>
                                            </div>
                                        </button>
                                        <button className="icons-btn">
                                            <div className="icon-background wrapper" onClick={TicTacToeSc}>
                                                <img className="secondary-icon" src={tic_tac_toe_img} alt=""/>
                                                <p className="icon-p">X/O</p>
                                            </div>
                                        </button>
                                        <div className="icon-right-side">
                                            <button className="icons-btn" onClick={NotesSc}>
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={notes_img} alt=""/>
                                                <p className="icon-p">Notes</p>
                                            </div>
                                            </button>
                                            <button className="icons-btn" onClick={ResumeSc}>
                                            <div className="icon-background wrapper">
                                                <img className="secondary-icon" src={resume_img} alt=""/>
                                                <p className="icon-p">Resume</p>
                                            </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="dots">
                                    <div className="fill-dot"></div>
                                    <div className="dot" onClick={ScrollChangeDot1Sc}></div>
                                </div>
                            </div>
                            <SecondSc/>
                        </div>
                        <div className="main-icons">
                            <img className="main-icon-property phone-main-icon" onClick={PhoneCallSc} src={phone_img} alt=""/>
                            <img className="main-icon-property contact-main-icon" onClick={ContactsSc} src={contacts_img} alt=""/>
                            <img className="main-icon-property message-main-icon" onClick={MessagesSc} src={message_img} alt=""/>
                            <img className="main-icon-property settings-main-icon" onClick={SettingsSc} src={settings_img} alt=""/>
                        </div>
                    </div>
                </Zoom>
            </div>
            <Camera/>
            <Gallery/>
            <Calculator/>
            <TicTacToe/>
            <Notes/>
            <Resume/>
            <PhoneCall/>
            <Contacts/>
            <Messages/>
            <Settings/>
        </div>
    )
}
export default HomeSc;