import React from "react";
import { connect } from "react-redux";
import "../styles.css";

let Pop = ({ onClick }) => {
  return (
      <button className="pop-event" onClick={onClick}> x </button>
  );
};

Pop = connect()(Pop);
export default Pop;