import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editEvent } from "../redux/actions";
import "../styles.css";
import validateInput from "../utils/validateInput";
import store from "../index";

let Event = ({ id, onClick, isArmed, dispatch }) => {
  let input;

  return (
    <div className="event" id={id}>
      <form
        onKeyPress={e => validateInput(e)}
        onSubmit={e => {
          e.preventDefault();
          let text = e.value
          if (text === undefined) text = "";
          dispatch(
            editEvent(
              id,
              text
            )
          );
          input.value = "";
        }}
      >
        <input className="edit-event-input" ref={node => (input = node)} />
      </form>
      <li
        onClick={onClick}
        className={`${!isArmed ? "" : " event--armed"}`}
      >
        {/* {id+1} */}
        {" " + store.getState().events[id].content}
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
