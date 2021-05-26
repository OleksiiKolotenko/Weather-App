import React from "react";
import loupe from "../assets/img/loupe.svg";
import house from "../assets/img/house.svg";
import drizzle from "../assets/img/drizzle.svg";
import cloud1 from "../assets/img/cloud1.png";
import cloud_state from "../assets/img/cloud_state.svg";
import { useSelector } from "react-redux";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday ",
  "Saturday",
];

export const LeftBar = () => {
  const location = useSelector(({ location }) => location.location);
  const weather = useSelector(({ weather }) => weather.weather);
  console.log(weather);
  const date = new Date();
  return (
    <div className="left_bar">
      <div className="left_header">
        <div className="input_field">
          <img src={loupe} alt="loupe" className="loupe" />
          <input
            className="input"
            type="text"
            placeholder="search for places ..."
          />
        </div>
        <div className="button_circle">
          <button className="button_home">
            <img src={house} alt="house" />
          </button>
        </div>
      </div>
      <img src={drizzle} alt="drizzle" className="big_picture" />
      <div className="info">
        <span className="current_degree">
          {Math.trunc(weather.current.temp)}&#176;
        </span>
        <span className="current_location">
          {location.city}, {location.country}
        </span>
        <div className="current_date">
          <span className="current_day">{days[date.getDay()]}</span>
          <span className="current_time">
            {date.toLocaleTimeString().slice(0, -3)}
          </span>
        </div>
        <hr />
      </div>
      <div className="descriptions">
        <div className="cloud_prediction">
          <img src={cloud1} alt="cloud_prediction" />
          <span className="cloud_description">
            Clouds - {weather.current.clouds}%
          </span>
        </div>
        <div className="weather_prediction">
          <img src={cloud_state} alt="cloud_state" className="cloud_state" />
          <span className="weather_description">
            {weather.current.weather[0].description
              .toString()
              .charAt(0)
              .toUpperCase() + weather.current.weather[0].description.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
