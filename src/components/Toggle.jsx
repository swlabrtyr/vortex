import React from "react";
import { connect } from "react-redux";
import { togglePlayBack } from "../redux/actions";
import init from "../engine";

let Toggle = ({ dispatch }) => (
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

Toggle = connect()(Toggle);
export default Toggle;
