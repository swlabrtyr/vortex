import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editEvent, POP_EVENT } from "../redux/actions";
import "../styles.css";
import validateInput from "../utils/validateInput";
import store from "../index";

let Event = ({ id, onClick, isArmed, dispatch }) => {
  let input;
  let content;

  store.subscribe(() => {
    return store.getState().events[id]
      ? (content = store.getState().events[id].content)
      : "";
  });

  return (
    <div id={id}>
      {/* <PopEvent id={id}/> */}
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
      <li onClick={onClick} className={`${!isArmed ? "" : " event--armed"}`}>
        {" " + content}
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
