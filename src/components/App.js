import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./PlayPause";
import EventContainer from "../containers/EventContainer";
import "../styles.css";

const App = () => (
  <div>

    <div className="vortex-app">
    <div className="instructions">
      <p>
        Input the desired note in the text input
        <br /> ie "A4" or "C#5"
        <br /> No flats (b), <strong>only</strong> sharps (#)
        <br /> Click the number to disable/enable a note
      </p>
    </div>
      <div className="controls">
        <PlayPause />
        <AddEvent />
        <RemoveEvent />
      </div>
      <EventContainer />
    </div>
  </div>
);

export default App;
