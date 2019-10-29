import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editEvent } from "../redux/actions";
import "../styles.css";
import validateInput from "../utils/validateInput";

let Event = ({ id, onClick, isArmed, dispatch }) => {
  let input;
  return (
    <div>
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
      <div
        onClick={onClick}
        className={`${!isArmed ? "" : " event--armed"}`}
      ></div>
    </div>
  );
};

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  isArmed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

Event = connect()(Event);
export default Event;
