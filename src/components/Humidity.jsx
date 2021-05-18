import React from "react";

function Humidity({ humidity }) {
  return (
    <div className="highlights_block">
      <span className="title">Humidity</span>
      <div className="humidity">
        <span className="humidity_value">{humidity}</span>
        <span className="humidity_percent">%</span>
      </div>
      <span className="humidity_state">Normal</span>
      <div className="humidity_scale">
        <div className="ball"></div>
      </div>
    </div>
  );
}

export default Humidity;
