import React from "react";
import Footer from "./Footer";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import VisibleEventList from "../containers/VisibleEventList";
import "../styles.css";
import scheduler from "../engine";

window.onload = scheduler(); // AudioContext needs user interaction before it can be created

const App = () => (
  <div className="vortex-app">
      <div className="add-remove">
        <AddEvent />
        <RemoveEvent />
      </div>
    <VisibleEventList />
  </div>
);

export default App;
