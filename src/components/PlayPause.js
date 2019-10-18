import React from "react";
import { connect } from "react-redux";
import { playBack } from "../redux/actions";
import shouldPlay from "../engine";

let PlayPause = ({ dispatch }) => {
  return (
    <div className="play-pause">
      <button
        onClick={() => {
          dispatch(playBack());
          shouldPlay();
        }}
      >
        {" "}
        start{" "}
      </button>
    </div>
  );
};

PlayPause = connect()(PlayPause);
export default PlayPause;
