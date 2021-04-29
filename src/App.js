import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftBar, RightBar } from "./components/index.js";
import { fetchLocation } from "./redux/actions/location.js";

function App() {
  React.useEffect(() => {
    dispatch(fetchLocation());
  }, []);
  const dispatch = useDispatch();

  const location = useSelector(({ location }) => location.location);
  return (
    <div className="wrapper">
      {location.city && (
        <>
          <LeftBar />
          <RightBar />
        </>
      )}
    </div>
  );
}

export default App;
