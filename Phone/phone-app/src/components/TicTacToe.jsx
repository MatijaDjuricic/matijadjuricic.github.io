import React, { useState } from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
export const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const Cells = ({ value, onClick }) => {
        const cell_style = value === 'X' ? "cellX" : "cellO";
        const cell_background = winner ? "background" : "cells";
        return (
            <button className={`cells ${cell_style} ${cell_background} no-background`} onClick={onClick}>{value}</button>
        );
    }
    const RenderCells = i => {
        return (
            <Cells value={cells[i]} onClick={() => onCellClick(i)}/>
        );
    }
    const onCellClick = i => {
        if (checkWinner(cells) || cells[i]) {
            return;
        }
        const updatedCells = [...cells];
        updatedCells[i] = isX ? "X" : "O";
        setCells(updatedCells);
        setIsX((boolean) => !boolean);
    }
    const checkWinner = cells => {
        for (let i = 0; i < patterns.length; i++) {
            const [x, y, z] = patterns[i];
            if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
                return cells[x];
            }
        }
        return null;
    }
    const RestartGame = () => {
        setIsX(true);
        setCells(Array(9).fill(null))
    }
    const winner = checkWinner(cells);
    const arreyCells = [...cells];
    let status;
    if (winner) {
        status = `Winner - ${winner}`;
    } else {
        status = `Next turn - ${isX ? 'X' : 'O'}`;
    } 
    if (!arreyCells.includes(null) && !winner) {
        status = "Draw";
    } 
    return (
        <div className="tictactoe-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Tic Tac Toe</p>
                    <i className="fa-solid fa-xmark close-tictactoe"></i>
                    <div className="tictactoe-container">
                        <div className="tictactoe-wrapper">
                            { RenderCells(0) }
                            { RenderCells(1) }
                            { RenderCells(2) }
                            { RenderCells(3) }
                            { RenderCells(4) }
                            { RenderCells(5) }
                            { RenderCells(6) }
                            { RenderCells(7) }
                            { RenderCells(8) }
                        </div>
                    </div>
                    <p className="statusText">{status}</p>
                    <div className="restart-btn-container"><button className="restart-button" onClick={RestartGame}>Restart</button></div>
                </div>
            </Zoom>
        </div>
    )
}
export default TicTacToe;
export const TicTacToeSc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".tictactoe-screen").style.display = "block";
    document.querySelector(".close-tictactoe").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".tictactoe-screen").style.display = "none";
    });
}