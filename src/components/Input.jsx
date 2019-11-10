import React from "react";
import validateInput from "../utils/validateInput";
import { connect } from "react-redux";
import { editEvent } from "../redux/actions";
import "../styles/note-input.scss";

let Input = ({ id, dispatch }) => {
  let input;
  return (
    <form
      onKeyPress={e => validateInput(e)}
      onSubmit={e => {
        e.preventDefault();
        dispatch(editEvent(id, input.value));
        input.value = "";
      }}
    >
      <input className="edit-event-input" ref={node => (input = node)} />
    </form>
  );
};

Input = connect()(Input);
export default Input;
