import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import PopEvent from "./PopEvent";
import updateNotePosition from "../utils/updateNotePosition";
import "../styles.css";
import uuid from "uuid";

let EventList = ({ events, toggleEvent, popEvent }) => {
  useLayoutEffect(() => {
    updateNotePosition();
  });

  const evenstList = events.map(event => {
    const index = events.indexOf(event);

    return (
        <div key={uuid.v4(event)} id={index} className="event">
          <Event
            id={index}
            {...event}
            onClick={() => toggleEvent(index)}
            content={event.content}
          />
          <PopEvent onClick={() => popEvent(index)} />
        </div>
    );
  });

  return <div className="event-list">{evenstList}</div>;
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isArmed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleEvent: PropTypes.func.isRequired
};

export default EventList;