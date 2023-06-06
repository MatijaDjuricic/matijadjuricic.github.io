import React from "react";
import Zoom from "react-reveal/Zoom";
import Weather from "./Weather";
let widthSc = 330;
let isDown = false;
let isSecondSc = false;
let XvalueMD;
let XvalueMU;
let XvalueMM;
export const ScrollChangeDot1Sc = () => {
    document.querySelector(".dot").addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(".Screens").style.transform = `translate3d(${-widthSc}px, 0px, 0px)`;
        isSecondSc = true;
    });
}
export const pointerDown = e => {
    isDown = true;
    XvalueMD = e.clientX;
    if (XvalueMD !== null) {
        return isDown && XvalueMD;
    } else return;
}
export const pointerUp = e => {
    isDown = false;
    XvalueMU = e.clientX;
    if (XvalueMU !== null) {
        let screen = document.querySelector(".Screens");
        if ((widthSc / 3) <= (XvalueMD - XvalueMM)) {
            screen.style.transform = `translate3d(${-widthSc}px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = true;
        } if (!isSecondSc && ((widthSc / 2) > (XvalueMD - XvalueMM))) {
            screen.style.transform = `translate3d(0px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = false;
        } if (isSecondSc && ((widthSc / 2) > (XvalueMD - XvalueMM))) {
            screen.style.transform = `translate3d(${-widthSc}px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = true;
            if ((XvalueMM > XvalueMD) && ((widthSc / 3) <= (XvalueMM - XvalueMD))) {
                screen.style.transform = `translate3d(0px, 0px, 0px)`;
                screen.style.transitionDuration = "0.4s";
                isSecondSc = false;
            }
        } return isDown && XvalueMD && isSecondSc;
    } else return;
}
export const pointerLeave = () => {
    isDown = false;
    if (!isDown) {
        let screen = document.querySelector(".Screens");
        if ((widthSc / 3) <= (XvalueMD - XvalueMM)) {
            screen.style.transform = `translate3d(${-widthSc}px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = true;
        } if (!isSecondSc && ((widthSc / 2) > (XvalueMD - XvalueMM))) {
            screen.style.transform = `translate3d(0px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = false;
        } if (isSecondSc && ((widthSc / 2) > (XvalueMD - XvalueMM))) {
            screen.style.transform = `translate3d(${-widthSc}px, 0px, 0px)`;
            screen.style.transitionDuration = "0.4s";
            isSecondSc = true;
            if ((XvalueMM > XvalueMD) && ((widthSc / 3) <= (XvalueMM - XvalueMD))) {
                screen.style.transform = `translate3d(0px, 0px, 0px)`;
                screen.style.transitionDuration = "0.4s";
                isSecondSc = false;
            }
        } return isDown && isSecondSc;
    } else return;
}
export const pointerMove = e => {
    if (isDown) {
        XvalueMM = e.clientX;
        let screen = document.querySelector(".Screens");
        if (isSecondSc) {
            screen.style.transform = `translate3d(${-widthSc + (XvalueMM - XvalueMD)}px, 0px, 0px)`;
            screen.style.transitionDuration = "0ms";
        } else {
            screen.style.transform = `translate3d(${(XvalueMM - XvalueMD)}px, 0px, 0px)`;
            screen.style.transitionDuration = "0ms";
        } return XvalueMM;
    }
    else return;
}
export const SecondSc = () => {
    const ScrollChangeDot2Sc = () => {
        document.querySelector(".dot-sc2").addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(".Screens").style.transform = "translate3d(0px, 0px, 0px)";
            isSecondSc = false;
        });
    }
    return (
        <div className="second-screen">
            <Zoom duration={800}>
            <Weather/>
            <div className="dots-sc2">
                <div className="dot-sc2" onClick={ScrollChangeDot2Sc}></div>
                <div className="fill-dot-sc2"></div>
            </div>
            </Zoom>
        </div>
    )
}
export default SecondSc;