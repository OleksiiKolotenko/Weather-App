import React from "react";
import { useState } from "react";

const availableDaysOptions = ["Today", "Week"];
const availableDegreesOptions = ["°c", "°F"];

function RightHeader({ switchDays, daysOption }) {
  const [activeDegreeType, setActiveDegreeType] = useState(0);
  return (
    <div className="right_bar__header">
      <div className="days_switch">
        {availableDaysOptions.map((obj, index) => (
          <button
            key={`${index}_${obj}`}
            className={`button_days ${
              switchDays === index ? "active_days" : ""
            }`}
            onClick={() => daysOption(index)}
          >
            {obj}
          </button>
        ))}
      </div>
      <div className="degree_switch">
        {availableDegreesOptions.map((obj, index) => (
          <button
            key={`${index}_${obj}`}
            className={`button_degree ${
              activeDegreeType === index ? "active_degree" : ""
            }`}
            onClick={() => setActiveDegreeType(index)}
          >
            {obj}
          </button>
        ))}
      </div>
    </div>
  );
}
export default RightHeader;
