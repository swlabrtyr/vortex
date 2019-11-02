import React from "react";
import { connect } from "react-redux";
import "../styles.css";

let PopEvent = ({ onClick }) => {
  return (
      <button className="pop-event" onClick={onClick}> x </button>
  );
};

PopEvent = connect()(PopEvent);
export default PopEvent;