import React from "react";
import { connect } from "react-redux";
import { removeEvent } from "../redux/actions";
import "../styles/remove.scss";

let Remove = ({ dispatch }) => {
  return (
    <div className="remove-event">
      <button className="rm-btn" onClick={() => {dispatch(removeEvent())}}> pop </button>
    </div>
  );
};

Remove = connect()(Remove);
export default Remove;