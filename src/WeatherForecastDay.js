import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }
  function showDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{showDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span> |
        <span className="WeatherForecast-temperature-min"> {minTemp()}</span>
      </div>
    </div>
  );
}
