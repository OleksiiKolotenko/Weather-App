import React from "react";
import sun from "../assets/img/sun.svg";
import map from "../assets/img/map.svg";
import arrow from "../assets/img/arrow.svg";
import hot from "../assets/img/hot.svg";
import cold from "../assets/img/cold.svg";
import RightHeader from "./RightHeader";

export const RightBar = () => {
  return (
    <div className="right_bar">
      <RightHeader />
      <div className="days">
        <div className="days_block">
          <span className="day">Mon</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Tue</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Wed</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Thu</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Fri</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Sat</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
        <div className="days_block">
          <span className="day">Sun</span>
          <img src={sun} className="sun" alt="sun" />
          <div className="tempratures">
            <span className="day_temperature">12°</span>
            <span className="night_temperature">3°</span>
          </div>
        </div>
      </div>
      <h1>Today’s Highlights</h1>
      <div className="highlights">
        <div className="all_highlights">
          <div className="highlights_upper">
            <div className="highlights_block">
              <div className="uv_index">
                <span className="title">UV index</span>
              </div>
            </div>
            <div className="highlights_block">
              <span className="title">Wind Status</span>
              <div className="wind_speed">
                <span className="speed">7.70</span>
                <span className="speed_type">km/h</span>
              </div>
              <span className="wind_state">Windy</span>
            </div>
            <div className="highlights_block">
              <span className="title">Sunrise & Sunset</span>
              <div className="sunrise">
                <img src={arrow} alt="arrow" className="arrow_up" />
                <span className="time">6:35 AM</span>
              </div>
              <div className="sunset">
                <img src={arrow} alt="arrow" className="arrow_down" />
                <span className="time">5:42 AM</span>
              </div>
            </div>
          </div>
          <div className="highlights_lower">
            <div className="highlights_block">
              <span className="title">Humidity</span>
              <div className="humidity">
                <span className="humidity_value">12</span>
                <span className="humidity_percent">%</span>
              </div>
              <span className="humidity_state">Normal</span>
              <div className="humidity_scale">
                <div className="ball"></div>
              </div>
            </div>
            <div className="highlights_block">
              <span className="title">Visibility</span>
              <div className="visibility_info">
                <span className="range">5.2</span>
                <span className="range_type">km</span>
              </div>
              <span className="range_state">Average</span>
            </div>
            <div className="highlights_block">
              <span className="title">Max/mix temprature</span>
              <div className="max">
                <img src={hot} alt="hot" className="hot_index" />
                <span className="max_temperature">15°</span>
                <span className="celsius">c</span>
              </div>
              <div className="min">
                <img src={cold} alt="cold" className="cold_index" />
                <span className="min_temperature">3°</span>
                <span className="celsius">c</span>
              </div>
            </div>
          </div>
        </div>
        <div className="map_wrap">
          <img src={map} alt="map" className="map" />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
