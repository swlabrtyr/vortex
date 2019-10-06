import React from "react";
import { connect } from "react-redux";
import { playBack } from "../redux/actions";
import shouldPlay from "../engine";

let PlayPause = () => {
  return (
    <div className="play-pause">
      <button
        onClick={() => {
          shouldPlay();
        }}
      >
        {" "}
        start{" "}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      shouldPlay: state.sequence
  }
}

PlayPause = connect(mapStateToProps)(PlayPause);
export default PlayPause;
