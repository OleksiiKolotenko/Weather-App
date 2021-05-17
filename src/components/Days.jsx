import React from "react";
import { useSelector } from "react-redux";
import sun from "../assets/img/sun.svg";

function Days({ date }) {
  const dateNow = new Date(date * 1000);
  const weather = useSelector(({ weather }) => weather.weather);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];

  return (
    <div className="days_block">
      <span className="day">{dateNow.getDay()}</span>
      <img src={sun} className="sun" alt="sun" />
      <div className="tempratures">
        <span className="day_temperature">
          {Math.trunc(weather.daily[dateNow.getDay()].temp.day)}
          &#176;
        </span>
        <span className="night_temperature">
          {Math.trunc(weather.daily[dateNow.getDay()].temp.night)}&#176;
        </span>
      </div>
    </div>
  );
}
export default Days;
