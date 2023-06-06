import React from "react";
import WeatherIcon from "./WeatherIcon";
import ActualDate from "./ActualDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="weather-info">
      <h2>{props.data.city}</h2>
      <h6>{props.data.country}</h6>
      <strong>
        <ActualDate date={props.data.date} />
      </strong>
      <p className="text-capitalize">{props.data.description}</p>
      <div className="clearfix">
        <WeatherIcon code={props.data.icon} />

        <WeatherTemperature celsius={props.data.temperature} />
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>It feels like {Math.round(props.data.feelsLike)}°C</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>The humidity is: {props.data.humidity}%</li>
            <li>The wind speed is: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
