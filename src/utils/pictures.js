import clearCloudy from "../assets/img/clear-cloudy.svg";
import cloudy from "../assets/img/cloudy.svg";
import drizzle1 from "../assets/img/drizzle-1.svg";
import drizzle from "../assets/img/drizzle.svg";
import mostlyCloudy from "../assets/img/mostly-cloudy.svg";
import snow from "../assets/img/snow.svg";
import sunny from "../assets/img/sunny.svg";
import thunderStorms from "../assets/img/thunderstroms.svg";

export const pictures = (id) => {
  if (id >= 200 && id <= 232) {
    return thunderStorms;
  }
  if (id >= 300 && id <= 321) {
    return drizzle1;
  }
  if (id >= 500 && id <= 504) {
    return drizzle;
  }
  if (id === 511) {
    return snow;
  }
  if (id >= 520 && id <= 522 && id === 531) {
    return drizzle1;
  }
  if (id >= 600 && id <= 602 && id >= 611 && id <= 622) {
    return snow;
  }
  if (id >= 761 && id <= 781) {
    return snow;
  }
  if (id === 800) {
    return sunny;
  }
  if (id === 801) {
    return clearCloudy;
  }
  if (id === 802) {
    return cloudy;
  }
  if (id === 803) {
    return mostlyCloudy;
  }
  if (id === 804) {
    return mostlyCloudy;
  }
};

export default pictures;
