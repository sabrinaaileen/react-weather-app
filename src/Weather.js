import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  const getGeolocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getCurrentWeather(latitude, longitude);
      getCurrentForecast(latitude, longitude);
    });
  };

  function getCurrentWeather(lat, lon) {
    const apiKey = `197ef3a642b76eef90e131866f74a0a0`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function showCurrentForecast(response) {
    console.log(response);
  }

  function getCurrentForecast(lat, lon) {
    const apiKey = `197ef3a642b76eef90e131866f74a0a0`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showCurrentForecast);
  }

  function handleResponse(response) {
    setInfo({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      coordinates: response.data.coord,
    });

    setReady(true);
  }
  function search() {
    const apiKey = `197ef3a642b76eef90e131866f74a0a0`;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
            <div className="col-2">
              <input
                type="button"
                value="📍"
                className="btn current"
                title="Get the weather for your current location!"
                onClick={getGeolocation}
              />
            </div>
          </div>
        </form>
        <WeatherData data={info} />
        <WeatherForecast coordinates={info.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
