import React from "react";

function Visibility({ visibility }) {
  return (
    <div className="highlights_block">
      <span className="title">Visibility</span>
      <div className="visibility_info">
        <span className="range">{visibility / 1000}</span>
        <span className="range_type">km</span>
      </div>
      <span className="range_state">Average</span>
    </div>
  );
}

export default Visibility;
