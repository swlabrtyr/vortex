import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./PlayPause";
import OuterEventContainer from "../containers/OuterEventContainer";
import "../styles.css";
import InnerEventContainer from "../containers/InnerEventContainer";

const App = () => (
  <div>
    <div className="vortex-app">
      <div className="controls">
        <h5>
          <strong>Vortex</strong>
        </h5>
        <div className="instructions">
          <p>
            Input the desired note in the text input
            <br />
            <br /> ie "A4" or "C#5"
            <br />
            <br /> No flats (b), <strong>only</strong> sharps (#)
            <br />
            <br /> Click the number to disable/enable a note
          </p>
        </div>
        <PlayPause />
        <AddEvent />
        <RemoveEvent />
      </div>
      <div>
        <div id="outer-container">
          <OuterEventContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
