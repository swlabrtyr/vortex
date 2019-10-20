import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import updateInnerNotePosition from "../utils/updateOuterNotePosition";
import "../styles.css";

let InnerEventList = ({ events, toggleEvent }) => {
  useLayoutEffect(() => {
    updateInnerNotePosition();
  });

  return (
    <ul className="inner-event-list">
      {events.map(event => {
        return (
          <Event
            key={event.id}
            {...event}
            onClick={() => toggleEvent(event.id)}
          />
        );
      })}
    </ul>
  );
};

InnerEventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isArmed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleEvent: PropTypes.func.isRequired
};

export default InnerEventList;