import React, { useState } from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const Settings = () => {
    let boolean = true;
    let currentTheme = true;
    const [, setTheme] = useState(currentTheme);
    const BackgrorundsColors = [
        "linear-gradient( 34deg, rgba(10, 139, 140, 1) 0%, rgba(255, 214, 0, 1) 100% )", "linear-gradient( 34deg, rgba(10, 139, 140, 1) 0%, rgba(0, 52, 255, 1) 100% )",
        "linear-gradient( 34deg, rgba(0, 0, 0, 1) 0%, rgba(255, 0, 219, 1) 100% )", "linear-gradient( 149deg, rgba(255, 0, 215, 1) 0%, rgba(0, 255, 226, 1) 100% )"
    ];
    const ThemeColors = ["rgb(255, 255, 255)", "rgb(0, 0, 0)",  "rgba(225, 230, 230, 0.7)", "rgba(35, 25, 25, 0.7)", "#0b83af", "transparent"];
    const openPickerBg = () => {
        let screens = document.querySelectorAll(".screens");
        let startBg = document.querySelector(".color-0");
        if (boolean) {    
            document.querySelector(".colors-wrapper").style.display = "block";
            document.querySelector(".arrow-up").style.display = "none";
            document.querySelector(".arrow-down").style.display = "block";
            document.querySelector(".change-bg-div").style.borderRadius = "10px 10px 0 0";
            for (let i = 0; i < screens.length; i++) {
                if (screens[i].style.background === startBg.style.background) {
                    startBg.style.border = `5px solid ${ThemeColors[4]}`;
                }
            }
            boolean = false;
        } else {
            document.querySelector(".colors-wrapper").style.display = "none";
            document.querySelector(".arrow-up").style.display = "block";
            document.querySelector(".arrow-down").style.display = "none";
            document.querySelector(".change-bg-div").style.borderRadius = "10px 10px 10px 10px";
            boolean = true;
        }
    }
    const Background = ({value, onClick}) => {
        return (
            <div className={`color-${value} colorsBg`} onClick={onClick}></div>
        );
    }
    const createBg = i => {
        return (
            <Background value={i} onClick={() => onClickChangeBg(i)}/>
        );
    }
    const onClickChangeBg = j => {
        let screens = document.querySelectorAll(".screens");
        let colorsBg = document.querySelectorAll(".colorsBg");
        for (let i = 0; i < screens.length; i++) {
            screens[i].style.background = BackgrorundsColors[j];
        }
        for (let i = 0; i < colorsBg.length; i++) {
            if (i === j) {
                colorsBg[i].style.border = "5px solid #0b83af";
            } else {
                colorsBg[i].style.border = 0;
            }
        }
    }
    const ToggleTheme = () => {
        let paragraphs = document.querySelectorAll("p");
        let buttons = document.querySelectorAll("button");
        let wrappers = document.querySelectorAll(".wrapper");
        let inputs = document.querySelectorAll("input");
        let calc = document.querySelector(".calc");
        let iconBg = document.querySelectorAll(".icon-background");
        let noBg = document.querySelectorAll(".no-background");
        setTheme((currentTheme) => currentTheme);
        if (currentTheme) {
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = ThemeColors[0];
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = ThemeColors[3];
                buttons[i].style.color = ThemeColors[0];
            }
            for (let i = 0; i < wrappers.length; i++) {
                wrappers[i].style.backgroundColor = ThemeColors[3];
            }
            for (let i = 0; i < iconBg.length; i++) {
                iconBg[i].style.backgroundColor = ThemeColors[5];
            }
            for (let i = 0; i < noBg.length; i++) {
                noBg[i].style.backgroundColor = ThemeColors[5];
            }
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.color = ThemeColors[0];
            }
            calc.style.color = ThemeColors[0];
            currentTheme = false;
        } else {
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.color = ThemeColors[1];
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = ThemeColors[2];
                buttons[i].style.color = ThemeColors[1];
            }
            for (let i = 0; i < wrappers.length; i++) {
                wrappers[i].style.backgroundColor = ThemeColors[2];
            }
            for (let i = 0; i < iconBg.length; i++) {
                iconBg[i].style.backgroundColor = ThemeColors[5];
            }
            for (let i = 0; i < noBg.length; i++) {
                noBg[i].style.backgroundColor = ThemeColors[5];
            }
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].style.color = ThemeColors[1];
            }
            calc.style.color = ThemeColors[1];
            currentTheme = true;
        }
    }
    return (
        <div className="settings-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Settings</p>
                    <i className="fa-solid fa-xmark close-settings"></i>
                    <div className="settings-wrapper">
                        <div className="switch-wrapper wrapper">
                            <p>Change theme</p>
                            <div className="switch">
                                <label>
                                    <input type="checkbox" onChange={ToggleTheme}/>
                                    <span className="check"></span>
                                </label>
                            </div>
                        </div>
                        <div className="change-bg-div wrapper" onClick={openPickerBg}>
                            <p className="settings-p-cw">Change Wallpaper</p>
                            <i className="fa-solid fa-circle-chevron-up arrow-up"></i>
                            <i className="fa-solid fa-circle-chevron-down arrow-down"></i>
                        </div>
                        <div className="colors-wrapper">
                            <div className="colors-wallpaper wrapper">
                                {createBg(0)}
                                {createBg(1)}
                                {createBg(2)}
                                {createBg(3)}
                            </div>
                        </div>
                    </div>             
                </div>
            </Zoom>
        </div>
    )
}
export default Settings;
export const SettingsSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".settings-screen").style.display = "block";
    document.querySelector(".close-settings").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".settings-screen").style.display = "none";
    });
}