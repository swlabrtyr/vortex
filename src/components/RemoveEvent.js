import React from "react";
import { connect } from "react-redux";
import { removeEvent } from "../redux/actions";
import "../styles.css";

let RemoveEvent = ({ dispatch }) => {
  return (
    <div className="remove-event">
      <button onClick={() => {dispatch(removeEvent())}}> pop </button>
    </div>
  );
};

RemoveEvent = connect()(RemoveEvent);
export default RemoveEvent;