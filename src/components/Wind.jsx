import React from "react";
import { useSelector } from "react-redux";

function Wind() {
  const weather = useSelector(({ weather }) => weather.weather);
  return (
    <div className="highlights_block">
      <span className="title">Wind Status</span>
      <div className="wind_speed">
        <span className="speed">{Math.trunc(weather.daily[0].wind_speed)}</span>
        <span className="speed_type">km/h</span>
      </div>
      <span className="wind_state">Windy</span>
    </div>
  );
}

export default Wind;
