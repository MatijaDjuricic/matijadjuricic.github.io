import React from "react";
import Time from "./Time.jsx";
import Zoom from "react-reveal/Zoom";
// images
import game_shop_img from "../img/shop-logo.png";
import tic_tac_toe_img from "../img/tic-tac-toe-logo.png";
import snake_game_img from "../img/snake-game-logo.png";
import film_tickets_img from "../img/film-tickets-logo.png";
import fakery_img from "../img/fakery-logo.png";
import to_do_list_img from "../img/to-do-list-logo.png";
import social_network_img from "../img/social_network_logo.png";
import drums_img from "../img/drums-logo.png";
import animations_img from "../img/animations-logo.png";
import charts_img from "../img/charts-logo.png";
export const Gallery = () => {
    const links = ['https://matijadjuricic.github.io/Game_shop/', 'https://matijadjuricic.github.io/Full_responsive/',
    'https://matijadjuricic.github.io/To_do_list/', 'https://matijadjuricic.github.io/The_drums/',
    'https://matijadjuricic.github.io/Film_tickets/','https://matijadjuricic.github.io/Tic_tac_toe/', 
    'https://matijadjuricic.github.io/Snake_game/', 'https://matijadjuricic.github.io/Animations/', 
    'https://matijadjuricic.github.io/Charts/', 'http://localhost:85/Social%20Network/index.php'];
    return (
        <div className="gallery-screen screens" style={{display: "none"}}>
            <Zoom duration={300}>
                <div>
                    <Time id="HomeSc"/>
                    <div className="camera"></div>
                    <div className="services-right-side">
                        <p><i className="fa-sharp fa-solid fa-wifi"></i></p>
                        <p><i className="fa-solid fa-signal"></i></p>
                        <p>75%<i className="fa-solid fa-battery-three-quarters"></i></p>
                    </div>
                    <p className="tittle-sc">Gallery</p>
                    <i className="fa-solid fa-xmark close-gallery"></i>
                    <div className="pojects-container">
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={game_shop_img} alt=""/>
                            <p className="projects-p">Game Shop</p>
                            <div className="projects-overlay">
                                <a href={links[0]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={fakery_img} alt=""/>
                            <p className="projects-p">Fakery</p>
                            <div className="projects-overlay">
                                <a href={links[1]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={to_do_list_img} alt=""/>
                            <p className="projects-p">To do list</p>
                            <div className="projects-overlay">
                                <a href={links[2]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={drums_img} alt=""/>
                            <p className="projects-p">Drums</p>
                            <div className="projects-overlay">
                                <a href={links[3]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={film_tickets_img} alt=""/>
                            <p className="projects-p">Film Tickets</p>
                            <div className="projects-overlay">
                                <a href={links[4]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={tic_tac_toe_img} alt=""/>
                            <p className="projects-p">Tic Tac Toe</p>
                            <div className="projects-overlay">
                                <a href={links[5]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={snake_game_img} alt=""/>
                            <p className="projects-p">Snake Game</p>
                            <div className="projects-overlay">
                                <a href={links[6]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={animations_img} alt=""/>
                            <p className="projects-p">Animations</p>
                            <div className="projects-overlay">
                                <a href={links[7]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={charts_img} alt=""/>
                            <p className="projects-p">Charts</p>
                            <div className="projects-overlay">
                                <a href={links[8]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                        <div className="project-wrapper wrapper">
                            <img className="projects-img-property" src={social_network_img} alt=""/>
                            <p className="projects-p">Social Network</p>
                            <div className="projects-overlay">
                                <a href={links[9]}><button className="view-btn">view</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default Gallery;
export const GallerySc = () => {
    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".gallery-screen").style.display = "block";
    document.querySelector(".close-gallery").addEventListener("click", () => {
        document.querySelector(".home-screen").style.display = "block";
        document.querySelector(".gallery-screen").style.display = "none";
    });
}