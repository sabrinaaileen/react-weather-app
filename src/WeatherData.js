import React from "react";
import ActualDate from "./ActualDate";
import "./Weather.css";

export default function WeatherData(props) {
  return (
    <div className="weather-info">
      <h2>{props.data.city}</h2>
      <h6>{props.data.country}</h6>
      <strong>
        <ActualDate date={props.data.date} />
      </strong>
      <p className="text-capitalize">{props.data.description}</p>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>precipatation: no value yet</li>
            <li>humidity: {props.data.humidity}%</li>
            <li>wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
