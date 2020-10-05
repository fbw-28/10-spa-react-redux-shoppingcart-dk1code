import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {Reducer} from "./reducers"

const ReduxStore = createStore(Reducer)

ReactDOM.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
