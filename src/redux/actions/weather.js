import axios from "axios";

export const setWeather = (weather) => ({
  type: "SET_WEATHER",
  payload: weather,
});

export const fetchWeather = (lat, lon) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=af918003566c01882ca4d94c4bf8bbb0&units=metric`
    )
    .then(({ data }) => {
      dispatch(setWeather(data));
    });
};
