import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const availableDaysOptions = ["Today", "Week"];
const availableDegreesOptions = ["°c", "°F"];

function RightHeader({ switchDays, daysOption, unitsOption, switchUnits }) {
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
        {availableDegreesOptions.map((obj, units) => (
          <button
            key={`${units}_${obj}`}
            className={`button_degree ${
              switchUnits === units ? "active_degree" : ""
            }`}
            onClick={() => unitsOption(units)}
          >
            {obj}
          </button>
        ))}
      </div>
    </div>
  );
}
export default RightHeader;
