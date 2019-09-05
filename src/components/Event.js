import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editEvent } from "../redux/actions";
import "../styles.css";
import sanitize from "../utils/sanitizeInput";
import store from "../index";

let Event = ({ id, onClick, isArmed, isScheduled, dispatch }) => {
  let input;

  let eventStyle = {
    isArmed: "isArmed",
    isScheduled: "isSelected"
  };

  return (
    <div className="event">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(
            editEvent(
              id,
              sanitize(input.value, store.getState().events[id].content)
            )
          );
          input.value = "";
        }}
      >
        <input className="edit-event-input" ref={node => (input = node)} />
      </form>
      <li
        onClick={onClick}
        className={`${!isArmed ? "" : " event--armed"} 
                    ${!isScheduled ? "" : " event--scheduled"}`}
      >
        {store.getState().events[id].content}
      </li>
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
