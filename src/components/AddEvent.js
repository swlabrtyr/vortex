import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../redux/actions";
import sanitize from "../utils/sanitizeInput";
import "../styles.css";
import store from "../index";

let AddEvent = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (store.getState().events.length < 36) {
            dispatch(addEvent(sanitize(input.value)));
          }
          input.value = "";
        }}
      >
        <input className="add-event" ref={node => (input = node)} />
        <button type="submit"> Add Event </button>
      </form>
    </div>
  );
};

AddEvent = connect()(AddEvent);
export default AddEvent;
