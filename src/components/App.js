import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./Toggle";
import List from "../containers/List";
import "../styles.css";

const App = () => (
  <div>
    <div className="vortex-app">
      <div className="controls">
        <div className="instructions">
          <h4>
            <strong>Vortex</strong>
          </h4>
          <p>
            <br /> Type a note + octave & press enter
            <br />
            <br /> Ex. "A4" or "C#5"
            <br />
          </p>
        </div>
        <AddEvent />
        <RemoveEvent />
        <PlayPause />
      </div>
      <div>
        <div id="outer-container">
          <List />
        </div>
      </div>
    </div>
  </div>
);

export default App;
