import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h2>Munich</h2>
        <h6>Germany</h6>
        <p>Mostly Clouded</p>

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Weather icon"
                className="float-left"
              />

              <span className="temperature">15</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>precipatation: 0%</li>
              <li>humidity: 37%</li>
              <li>wind: 14km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
