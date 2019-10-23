import React from "react";
import { connect } from "react-redux";
import { popEvent } from "../redux/actions";
import "../styles.css";

let PopEvent = ({ id, dispatch }) => {
  return (
    <div className="pop-event">
      <button onClick={() => {dispatch(popEvent(id))}}> x </button>
    </div>
  );
};

PopEvent = connect()(PopEvent);
export default PopEvent;