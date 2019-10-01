import React from "react";
import sequence from "../engine";

const PlayPause = () => {
  return (
    <div className="play-pause">
      <button onClick={() => {sequence()}}> start </button>
    </div>
  );
}

export default PlayPause;