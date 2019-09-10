import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./redux/reducers";
import App from "./components/App";
import "./styles.css";
//import playBack from "./engine/engine"

const store = createStore(rootReducer, applyMiddleware(logger));

//playBack();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;