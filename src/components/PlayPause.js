import React from "react";
import { connect } from "react-redux";
import { playBack } from "../redux/actions";
import store from "../index";

let PlayPause = () => {
  return (
    <div className="play-pause">
      <button
        onClick={() => {
          store.dispatch(playBack());
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