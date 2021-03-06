import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router } from "@/router";
import { store } from "@/store/store";

import "@/assets/css/basic.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
