import React from "react";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import PlayPause from "./PlayPause";
import VisibleEventList from "../containers/VisibleEventList";
import "../styles.css";


const App = () => (
  <div className="vortex-app">
    <div className="add-remove">
      <PlayPause />
      <AddEvent />
      <RemoveEvent />
    </div>
    <VisibleEventList />
  </div>
);

export default App;
