import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftBar, RightBar } from "./components/index.js";
import { fetchLocation } from "./redux/actions/location.js";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchLocation());
  }, []);
  const weather = useSelector(({ weather }) => weather.weather);
  return (
    <div className="wrapper">
      {weather.daily && (
        <>
          <LeftBar />
          <RightBar />
        </>
      )}
    </div>
  );
}

export default App;
