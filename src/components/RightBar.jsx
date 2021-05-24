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
  const [switchDays, setSwitchDays] = React.useState(1);
  function daysOption(activeDaysOption) {
    setSwitchDays(activeDaysOption);
  }
  return (
    <div className="right_bar">
      <RightHeader switchDays={switchDays} daysOption={daysOption} />
      <div className="days">
        {switchDays === 1
          ? weather.daily
              .slice(1, 8)
              .map((obj, index) => (
                <Days
                  switchDays={switchDays}
                  key={`${obj.dt},${index}`}
                  date={obj.dt}
                  day={obj.temp.day}
                  night={obj.temp.night}
                />
              ))
          : weather.hourly.slice(1, 21).map((obj, index) => {
              if (index % 3 !== 0) {
                return null;
              }
              return (
                <Days
                  switchDays={switchDays}
                  key={`${obj.dt},${index}`}
                  date={obj.dt}
                  temp={obj.temp}
                />
              );
            })}
      </div>
      <h1>Today’s Highlights</h1>
      <div className="highlights">
        <div className="all_highlights">
          <div className="highlights_upper">
            <UV_Index uvi={weather.current.uvi} />
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
