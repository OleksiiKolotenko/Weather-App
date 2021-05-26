import React from "react";

function UvIndex({ uvi }) {
  const [uvStatus, setUvStatus] = React.useState("");
  React.useEffect(() => {
    if (uvi <= 2) {
      setUvStatus("Low radiation");
    }
    if (uvi >= 2.1 && uvi <= 7) {
      setUvStatus("Intensive radiation");
    }
    if (uvi >= 7.1) {
      setUvStatus("Extreme radiation");
    }
  }, [uvi]);
  return (
    <div className="highlights_block">
      <span className="title">UV index</span>
      <div className="uv_index">
        <span className="uv_index_value">{uvi.toFixed(1)}</span>
        <div className="uv_index_scale">
          {uvi * 6.3 <= 16 ? (
            <div className="uv_index_ball"></div>
          ) : (
            <div style={{ height: uvi * 6.3 }} className="uv_index_ball"></div>
          )}
        </div>
      </div>
      <span className="uv_state">{uvStatus}</span>
    </div>
  );
}

export default UvIndex;
