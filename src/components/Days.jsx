import React, { useEffect } from "react";
import pictures from "../utils/pictures";

function Days({ date, day, night, temp, switchDays, id, switchUnits }) {
  const dateNow = new Date(date * 1000);
  if (switchUnits === 1) {
    day = day * 1.8 + 32;
    temp = temp * 1.8 + 32;
    night = night * 1.8 + 32;
  }
  return (
    <div className="days_block">
      <span className="day">
        {switchDays === 1
          ? dateNow.toString().slice(0, 3)
          : dateNow.toString().slice(16, 21)}
      </span>
      <img src={pictures(id)} className="pic" alt="pic" />
      <div className="tempratures">
        <span className="day_temperature">
          {switchDays === 1 ? Math.trunc(day) : Math.trunc(temp)}
          &#176;
        </span>
        {switchDays === 1 ? (
          <span className="night_temperature">{Math.trunc(night)}&#176;</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Days;
