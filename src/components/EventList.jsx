import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import PopEvent from "./PopEvent";
import Input from "./Input";
import updateNotePosition from "../utils/updateNotePosition";
import "../styles.css";
import uuid from "uuid";

let EventList = ({ 
  events, 
  onEventClick, 
  onPopClick, 
  onInputSubmit, 
  onInputKeypress 
}) => {

  useLayoutEffect(() => { 
    updateNotePosition();  // Renders components in a circle
  });

  return (
    <ul>
      {events.map((event, index) => (
        <div>
          <Event
            key={uuid.v4(event)}
            id={index}
            {...event} // Pass props to Event components
            onClick={() => onEventClick(event.id)}
            content={event.content}
          />
          <Input 
            id={event.id}
            onSubmit={() => onInputSubmit(event.id, event.content)} 
            onKeyPress={() => onInputKeypress}
          />
          <PopEvent onClick={() => onPopClick(event.id)}/>
        </div>
      ))}
    </ul>
  );
};

// return <div className="event-list">{eventsList}</div>;

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
