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
        <div className="instructions">
          <h4>
            <strong>Vortex</strong>
          </h4>
          <br />
          <p>
            <br /> Type a note + octave & press enter
            <br />
            <br /> Ex. "A4" or "C#5"
            <br />
            {/* <br /> 3)  */}
            {/* <br /> */}
            {/* <br /> 4) No flats (b), <strong>only</strong> sharps (#) */}
            {/* <br /> */}
            {/* <br /> 5) Click the number to disable/enable a note. */}
            {/* <br /> */}
            {/* <br /> 6) Notes can be added by simply pressing{" "} */}
            {/* <strong>Enter</strong> */}
          </p>
        </div>
        <AddEvent />
        <RemoveEvent />
        <PlayPause />
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
