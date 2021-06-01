import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import UnitsContext from "./utils/context";
function Main() {
  const [switchUnits, setSwitchUnits] = React.useState(0);
  return (
    <React.StrictMode>
      <UnitsContext.Provider value={{ switchUnits, setSwitchUnits }}>
        <Provider store={store}>
          <App />
        </Provider>
      </UnitsContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
