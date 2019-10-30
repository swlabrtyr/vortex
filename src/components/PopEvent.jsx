import React from "react";
import { connect } from "react-redux";
import "../styles.css";

let PopEvent = ({ onClick }) => {
  return (
    <div className="pop-event">
      <button onClick={onClick}> x </button>
    </div>
  );
};

PopEvent = connect()(PopEvent);
export default PopEvent;