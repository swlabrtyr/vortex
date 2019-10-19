import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./PlayPause";
import EventContainer from "../containers/EventContainer";
import "../styles.css";

const App = () => (
  <div className="vortex-app">
    <div className="add-remove">
      <PlayPause />
      <AddEvent />
      <RemoveEvent />
    </div>
    <EventContainer />
  </div>
);

export default App;
