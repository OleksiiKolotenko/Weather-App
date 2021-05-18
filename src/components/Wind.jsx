import React from "react";

function Wind({ windSpeed }) {
  return (
    <div className="highlights_block">
      <span className="title">Wind Status</span>
      <div className="wind_speed">
        <span className="speed">{Math.round(windSpeed)}</span>
        <span className="speed_type">km/h</span>
      </div>
      <span className="wind_state">Windy</span>
    </div>
  );
}

export default Wind;
