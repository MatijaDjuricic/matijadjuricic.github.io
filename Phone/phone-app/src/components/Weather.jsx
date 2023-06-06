import React from "react";
// images
import error404_img from "../img/404.png";
import clear_img from "../img/clear.png";
import snow_img from "../img/snow.png";
import cloud_img from "../img/cloud.png";
import mist_img from "../img/mist.png";
import rain_img from "../img/rain.png";
export const Weather = () => {
    const Search = () => {
        const container = document.querySelector('.weather-div');
        const weatherBox = document.querySelector('.weather-box');
        const weatherDetails = document.querySelector('.weather-details');
        const error404 = document.querySelector('.not-found')
        const APIKey = '080292acf61db0851375ff5ce9894314';
        const city = document.querySelector('.search-box input').value;
        if (city === '') return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '250px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = `${clear_img}`;
                    break;
                case 'Rain':
                    image.src = `${rain_img}`;
                    break;
                case 'Snow':
                    image.src = `${snow_img}`;
                    break;
                case 'Clouds':
                    image.src = `${cloud_img}`;
                    break;
                case 'Haze':
                    image.src = `${mist_img}`;
                    break;
                default:
                    image.src = '';
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '350px';
        });
    }
    return (
        <div className="weather-div wrapper">
            <div className="search-box">
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="Enter location"></input>
                <button className="fa-solid fa-magnifying-glass" onClick={Search}></button>
            </div>
            <div className="not-found">
                <img src={error404_img} alt="not-found"></img>
                <p>Oops! Invalid location</p>
            </div>
            <div class="weather-box">
                <img alt="not-found"/>
                <p className="temperature"></p>
                <p className="description"></p>
            </div>
            <div className="weather-details">
                <div className="humidity">
                    <i className="fa-solid fa-water"></i>
                    <div className="text">
                        <span></span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span></span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;