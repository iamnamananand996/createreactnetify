import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./assets/scss/material-kit-react.scss";
import { store } from "store/store";
import Routes from "routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
