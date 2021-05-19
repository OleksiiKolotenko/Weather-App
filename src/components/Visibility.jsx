import React from "react";

function Visibility({ visibility }) {
  const [visibilityStatus, setVisibilityStatus] = React.useState("");
  React.useEffect(() => {
    if (visibility / 1000 <= 1) {
      setVisibilityStatus("Very low");
    }
    if (visibility / 1000 >= 1.5 && visibility / 1000 <= 2) {
      setVisibilityStatus("Low");
    }
    if (visibility / 1000 >= 2.5 && visibility / 1000 <= 5) {
      setVisibilityStatus("Normal");
    }
    if (visibility / 1000 >= 5.5 && visibility / 1000 <= 7.5) {
      setVisibilityStatus("Above average");
    }
    if (visibility / 1000 >= 8 && visibility / 1000 <= 10) {
      setVisibilityStatus("High");
    }
  }, [visibility / 1000]);
  return (
    <div className="highlights_block">
      <span className="title">Visibility</span>
      <div className="visibility_info">
        <span className="range">{visibility / 1000}</span>
        <span className="range_type">km</span>
      </div>
      <span className="range_state">{visibilityStatus}</span>
    </div>
  );
}

export default Visibility;
