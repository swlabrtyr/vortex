import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../redux/actions";
import sanitize from "../utils/sanitizeInput";
import { MAX_EVENTS } from "../constants";
import "../styles.css";
import store from "../index";
import init from "../engine"; // call init to autoplay when user adds a note? 

let AddEvent = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (store.getState().events.length < MAX_EVENTS) {
            dispatch(addEvent(sanitize(input.value)));
          }
          input.value = "";
          input.focus();
        }}
      >
        <input autoFocus={true} className="add-event" ref={node => (input = node)} />
        <button type="submit"> add </button>
      </form>
    </div>
  );
};

AddEvent = connect()(AddEvent);
export default AddEvent;
