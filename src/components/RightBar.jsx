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
        {weather.daily.slice(1, 8).map((obj, index) => (
          <Days key={`${obj.dt},${index}`} date={obj.dt} />
        ))}
      </div>
      <h1>Today’s Highlights</h1>
      <div className="highlights">
        <div className="all_highlights">
          <div className="highlights_upper">
            <UV_Index />
            <Wind windSpeed={weather.current.wind_speed} />
            <SunriseSunset
              sunrise={weather.current.sunrise}
              sunset={weather.current.sunset}
            />
          </div>
          <div className="highlights_lower">
            <Humidity humidity={weather.current.humidity} />
            <Visibility visibility={weather.current.visibility} />
            <MinMaxTemp
              min={weather.daily[0].temp.min}
              max={weather.daily[0].temp.max}
            />
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default RightBar;
