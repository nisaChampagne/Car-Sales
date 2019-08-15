import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";///middleground between react and redux
import { CarReducers } from './reducers/carReducer';
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";



const store = createStore(CarReducers);///created store and passed CarReducers in via createStore

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
