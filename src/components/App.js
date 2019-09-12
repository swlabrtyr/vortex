import React from "react";
import Footer from "./Footer";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import VisibleEventList from "../containers/VisibleEventList";
import "../styles.css";
import scheduler from "../engine";
scheduler();

const App = () => (
  <div className="vortex-app">
    <div className="settings-container">
      <div className="add-remove">
        <AddEvent />
        <RemoveEvent />
      </div>
      {/* <Footer /> */}
    </div>
    <VisibleEventList />
  </div>
);

export default App;
