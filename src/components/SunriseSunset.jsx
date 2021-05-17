import React from "react";
import arrow from "../assets/img/arrow.svg";

function SunriseSunset() {
  return (
    <div className="highlights_block">
      <span className="title">Sunrise & Sunset</span>
      <div className="sunrise">
        <img src={arrow} alt="arrow" className="arrow_up" />
        <span className="time">6:35 AM</span>
      </div>
      <div className="sunset">
        <img src={arrow} alt="arrow" className="arrow_down" />
        <span className="time">5:42 PM</span>
      </div>
    </div>
  );
}

export default SunriseSunset;
