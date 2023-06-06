import React, { useState } from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
/* eslint-disable */
export const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setReslt] = useState("");
    const operators = ['+', '-', '*', '/', '.'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const calc_style = document.querySelector(".calc");
    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            );
        }
        return digits;
    }
    const updateCalc = value => {
        let array = [...calc];
        let bool = true;
        if ((value === '.' && array[array.length - 2] === '.') || (value === '.' && operators.includes(calc.slice(-1)))) {
            bool = false;
        }
        if (array.includes('.') && array[array.length - 2] !== '.') {
            bool = true;
        }
        if ((value ==='.' && calc === '') || (value === '.' && bool === false)) {
            return;
        }
        if ((operators.includes(value) && calc === '') || (operators.includes(value) && operators.includes(calc.slice(-1)))) {
            return;
        }
        if (numbers.includes(value) && calc === '0') {
            return;
        }
        if (calc.length > 6 && calc.length < 12) {
            calc_style.style.fontSize = "42px";
        }
        if (calc.length > 12 && calc.length < 16) {
            calc_style.style.fontSize = "32px";
        }
        if (calc.length > 16) {
            calc_style.style.fontSize = "26px";
        }
        if (calc.length > 20) {
            alert("this (number or expresion) is too long");
        }
        if (calc === 'NaN') {
            return;
        }
        setCalc(calc + value);
        if (!operators.includes(value)) {
            setReslt(eval(calc + value).toFixed(2).toString());
        }
    }
    const calculate = () => {
        if (numbers.includes(calc.slice(-1))) {
            setCalc(eval(calc).toFixed(2).toString());
            calc_style.style.fontSize = "60px";
        } else {
            return;
        }
    }
    const deleteLast = () => {
        if (calc === '')  {
            return;
        }
        if (calc.slice(0, -1) === 0) {
            setCalc("");
            setReslt("");
        }
        const value = calc.slice(0, -1);
        setCalc(value);
    }
    const deleteAll = () => {
        if (calc === '')  {
            setReslt("");
        }
        setCalc("");
        setReslt("");
        calc_style.style.fontSize = "60px";
    }
    const ivertNumber = () => {
        setCalc(eval(calc * -1).toFixed(2).toString());
        setReslt(eval(calc * -1).toFixed(2).toString());
    }
    return (
        <div className="calculator-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Calculator</p>
                    <i className="fa-solid fa-xmark close-calculator"></i>
                    <div className="calculator-wrapper">
                        <div className="calculator-display wrapper">
                            { result ? <span className="result">({ result })</span>: ''} &nbsp; <span className="calc">{calc}</span>
                        </div>
                        <div className="operators">
                            <button onClick={() => updateCalc('+')}> + </button>
                            <button onClick={() => updateCalc('-')}> - </button>
                            <button onClick={() => updateCalc('*')}> * </button>
                            <button onClick={() => updateCalc('/')}> / </button>
                        </div>
                        <div className="functions">
                            <button onClick={ ivertNumber }> +/- </button>
                            <button onClick={ deleteAll }>C</button>
                            <button className="del-btn" onClick={ deleteLast }>DEL</button>
                        </div>
                        <div className="digits">
                            { createDigits() }
                            <button onClick={() => updateCalc('.')}> . </button>
                            <button onClick={() => updateCalc('0')}> 0 </button>
                            <button onClick={ calculate }> = </button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Calculator;
export const CalculatorSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".calculator-screen").style.display = "block";
    document.querySelector(".close-calculator").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".calculator-screen").style.display = "none";
    });
}