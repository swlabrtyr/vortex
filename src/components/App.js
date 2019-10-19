import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./PlayPause";
import EventContainer from "../containers/EventContainer";
import "../styles.css";

const App = () => (
  <div>
    <pre style={{color: 'white'}}>Type the desired note in the text input,
    ie "A4" or "C#5", no flats _ only sharps >
    </pre>  <div className="vortex-app">

    <div className="add-remove">
      <PlayPause />
      <AddEvent />
      <RemoveEvent />
    </div>
    <EventContainer />
  </div>
  </div>
);

export default App;
