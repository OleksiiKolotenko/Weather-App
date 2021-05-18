import React from "react";
import arrow from "../assets/img/arrow.svg";

function SunriseSunset({ sunrise, sunset }) {
  const dateRise = new Date(sunrise * 1000);
  const dateSet = new Date(sunset * 1000);
  return (
    <div className="highlights_block">
      <span className="title">Sunrise & Sunset</span>
      <div className="sunrise">
        <img src={arrow} alt="arrow" className="arrow_up" />
        <span className="time">{`${dateRise.toString().slice(16, 21)}`}</span>
      </div>
      <div className="sunset">
        <img src={arrow} alt="arrow" className="arrow_down" />
        <span className="time">{`${dateSet.toString().slice(16, 21)}`}</span>
      </div>
    </div>
  );
}

export default SunriseSunset;
