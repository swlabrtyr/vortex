import React from "react";
import Footer from "./Footer";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import VisibleEventList from "../containers/VisibleEventList";
import "../styles.css";
import sequence from "../engine";

window.onload = sequence(); // AudioContext needs user interaction before it can be created

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
