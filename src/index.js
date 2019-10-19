import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./redux/reducers";
import App from "./components/App";
import "./styles.css";

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;
