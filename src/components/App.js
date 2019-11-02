import React from "react";
import Add from "./Add";
import Remove from "./Remove";
import List from "../containers/List";
import ToggleContainer from "../containers/ToggleContainer";
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
        <ToggleContainer />
        <Add />
        <Remove />
      </div>
      <div>
        <div className="event-list-container" id="event-list-container">
          <List />
        </div>
      </div>
    </div>
  </div>
);

export default App;
