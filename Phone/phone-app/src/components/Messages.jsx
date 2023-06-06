import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const Messages = () => {
    let boolean = true;
    const ToggleForm = () => {
        if (boolean) {    
            document.querySelector(".message-form").style.display = "block";
            boolean = false;
        } else {
            document.querySelector(".message-form").style.display = "none";
            boolean = true;
        }
    }
    return (
        <div className="messages-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Messages</p>
                    <i className="fa-solid fa-xmark close-messages"></i>
                    <div className="first-message wrapper">
                        <p>If you want to message me on Email, click "Email form" button, and you will open my Email form</p>
                    </div>
                    <div className="second-message wrapper">
                        <p>Ok, thanks!</p>
                    </div>
                    <div className="message-form wrapper">
                        <form action="https://formspree.io/f/mnqyjdpq" method="POST">
                            <input type="text" className="name-input" name="Name" placeholder="Name" required/>
                            <input type="text" className="email-input" name="Email" placeholder="Email" required/>
                            <textarea className="textarea" name="Message" placeholder="Message..." required></textarea><br/>
                            <input className="submit" type="submit" value="Send"/>
                        </form>
                    </div>
                    <button className="toggle-form-btn no-background" onClick={ToggleForm}>Email form</button>
                </div>
            </Zoom>
        </div>
    )
}
export default Messages;
export const MessagesSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".messages-screen").style.display = "block";
    document.querySelector(".close-messages").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".messages-screen").style.display = "none";
    });
}