import React from "react";

function Wind({ windSpeed }) {
  const [windStatus, setWindStatus] = React.useState("");
  React.useEffect(() => {
    if (windSpeed >= 0 && windSpeed <= 1.4) {
      setWindStatus("Light air");
    }
    if (windSpeed >= 1.5 && windSpeed <= 2) {
      setWindStatus("Light breeze");
    }
    if (windSpeed >= 2.5 && windSpeed <= 5) {
      setWindStatus("Gentle breeze");
    }
    if (windSpeed >= 5.5 && windSpeed <= 7.5) {
      setWindStatus("Fresh breeze");
    }
    if (windSpeed >= 8 && windSpeed <= 10) {
      setWindStatus("Strong breeze");
    }
    if (windSpeed >= 12) {
      setWindStatus("Strong wind");
    }
  }, [windSpeed]);
  return (
    <div className="highlights_block">
      <span className="title">Wind Status</span>
      <div className="wind_speed">
        <span className="speed">{windSpeed.toFixed(1)}</span>
        <span className="speed_type">km/h</span>
      </div>
      <span className="wind_state">{windStatus}</span>
    </div>
  );
}

export default Wind;
