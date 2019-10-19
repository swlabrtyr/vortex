import React from "react";
import { connect } from "react-redux";
import { togglePlayBack } from "../redux/actions";
import shouldPlay from "../engine";

let PlayPause = ({ dispatch }) => {
  console.log(dispatch)
  return (
    <div className="play-pause">
      <button
        onClick={() => {
          dispatch(togglePlayBack());
          shouldPlay();
        }}
      >
        {" start / stop "}
      </button>
    </div>
  );
};

PlayPause = connect()(PlayPause);
export default PlayPause;
