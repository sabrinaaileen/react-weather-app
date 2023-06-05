import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setInfo({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
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
            <div className="col-6">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <WeatherData data={info} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
