import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import PopEvent from "./PopEvent";
import Input from "./Input";
import updateNotePosition from "../utils/rotateComponent";
import "../styles.css";
import uuid from "uuid";
import rotateComponent from "../utils/rotateComponent";

let EventList = ({
  events,
  onEventClick,
  onPopClick,
  onInputSubmit,
  onInputKeypress
}) => {

  useLayoutEffect(() => {
    rotateComponent(); // Renders components in a circle
  });

  return (
    <div className="event-list">
      <ul>
        {events.map((event, index) => (
          <div key={uuid.v4(event) }className="event-container">
              
            <Event
              id={index}
              {...event} // Pass props to each individual Event component
              onClick={() => onEventClick(event.id)}
              content={event.content}
            />
            <Input
              id={event.id}
              onSubmit={() => onInputSubmit(event.id, event.content)}
              onKeyPress={() => onInputKeypress}
            />
            <PopEvent onClick={() => onPopClick(event.id)} />
          </div>
        ))}
      </ul>
    </div>
  );
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
