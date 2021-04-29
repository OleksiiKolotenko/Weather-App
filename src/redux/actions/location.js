import axios from "axios";
import { fetchWeather } from "./weather";

export const setLocation = (location) => ({
  type: "SET_LOCATION",
  payload: location,
});

export const fetchLocation = () => (dispatch) => {
  axios.get("https://api.ipify.org?format=json").then(({ data }) => {
    axios
      .get(`https://ipinfo.io/${data.ip}?token=0aa408a88a0a1f`)
      .then(({ data }) => {
        dispatch(setLocation(data));
        const loc = data.loc.split(",");
        dispatch(fetchWeather(loc[0], loc[1]));
      });
  });
};
