import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../redux/actions";
import validateInput from "../utils/validateInput";
import { MAX_EVENTS } from "../constants";
import store from "../index";
import "../styles/add.scss";

let Add = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onKeyPress={e => validateInput(e)}
        onSubmit={e => {
          e.preventDefault();
          if (store.getState().events.length < MAX_EVENTS) {
            dispatch(addEvent(input.value));
          }
          input.value = "";
          input.focus();
        }}
      >
        <input autoFocus={true} className="note-input" ref={node => (input = node)} />
        <button type="submit" className="add-btn"> add </button>
      </form>
    </div>
  );
};

Add = connect()(Add);
export default Add;
