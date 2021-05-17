import React from "react";
import { useSelector } from "react-redux";

import {
  RightHeader,
  Days,
  UV_Index,
  Wind,
  SunriseSunset,
  Humidity,
  Visibility,
  MinMaxTemp,
  Map,
} from "./index";

export const RightBar = () => {
  const weather = useSelector(({ weather }) => weather.weather);
  return (
    <div className="right_bar">
      <RightHeader />
      <div className="days">
        {weather.daily.slice(0, 7).map((obj, index) => (
          <Days key={`${obj.dt},${index}`} date={obj.dt} />
        ))}
      </div>
      <h1>Today’s Highlights</h1>
      <div className="highlights">
        <div className="all_highlights">
          <div className="highlights_upper">
            <UV_Index />
            <Wind />
            <SunriseSunset />
          </div>
          <div className="highlights_lower">
            <Humidity />
            <Visibility />
            <MinMaxTemp />
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default RightBar;
