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
    console.log("index: ", index);
    return (
      <ul>
        <div className="event">
          <Event
            id={index}
            key={uuid.v4()}
            {...event}
            onClick={() => toggleEvent(index)}
            content={event.content}
          />
          <PopEvent key={uuid.v4()} onClick={() => popEvent(index)} />
        </div>
      </ul>
    );
  });

  return <div className="outer-event-list">{evenstList}</div>;
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