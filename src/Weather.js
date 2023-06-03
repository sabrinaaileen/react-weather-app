import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState({});
  function handleResponse(response) {
    setInfo({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
    console.log(response.data);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <div className="weather-info">
          <h2>{info.city}</h2>
          <h6>{info.country}</h6>
          <p className="text-capitalize">{info.description}</p>

          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={info.icon}
                  alt={info.description}
                  className="float-left"
                />

                <span className="temperature">
                  {Math.round(info.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>precipatation: no value yet</li>
                <li>humidity: {info.humidity}%</li>
                <li>wind: {Math.round(info.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `197ef3a642b76eef90e131866f74a0a0`;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
