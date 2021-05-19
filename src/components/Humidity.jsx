import React from "react";
function Humidity({ humidity }) {
  const [humidityStatus, setHumidityStatus] = React.useState("");
  React.useEffect(() => {
    if (humidity <= 25) {
      setHumidityStatus("Low");
    }
    if (humidity >= 26 && humidity <= 50) {
      setHumidityStatus("Average");
    }
    if (humidity >= 51 && humidity <= 75) {
      setHumidityStatus("Above average");
    }
    if (humidity >= 76) {
      setHumidityStatus("Very high");
    }
  }, [humidity]);

  return (
    <div className="highlights_block">
      <span className="title">Humidity</span>
      <div className="humidity">
        <div className="humidity_val">
          <span className="humidity_value">{humidity}</span>
          <span className="humidity_percent">%</span>
        </div>
        <div className="humidity_scale">
          <div
            style={{ height: humidity / 1.31 }}
            className="humidity_ball"
          ></div>
        </div>
      </div>
      <span className="humidity_state">{humidityStatus}</span>
    </div>
  );
}

export default Humidity;
