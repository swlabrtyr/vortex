import React from "react";
import { connect } from "react-redux";
import { togglePlayBack } from "../redux/actions";
import init from "../engine";

let PlayPause = ({ dispatch }) => {
  return (
    <div className="play-pause">
      <button
        onClick={() => {
          const ctx = new AudioContext();
          dispatch(togglePlayBack());
          init(ctx);
        }}
      >
        {" start / stop "}
      </button>
    </div>
  );
};

PlayPause = connect()(PlayPause);
export default PlayPause;
