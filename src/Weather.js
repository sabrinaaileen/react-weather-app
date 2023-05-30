import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather Search</h1>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <h2>Munich</h2>
              </li>
              <li>22°C</li>
              <li>Mostly Clouded</li>
            </ul>
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
