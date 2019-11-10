import React from "react";
import { connect } from "react-redux";
import { togglePlayBack } from "../redux/actions";
import init from "../engine";
import "../styles/controls.scss";

let Toggle = ({ dispatch }) => {
  let isPlaying = false;
  return (
      <button
        className="play-pause"
        onClick={() => {
          const ctx = new AudioContext();
          dispatch(togglePlayBack());
          init(ctx);
          isPlaying = !isPlaying;
        }}
      >
        {"start / stop"}
      </button>
  );
};

Toggle = connect()(Toggle);
export default Toggle;
