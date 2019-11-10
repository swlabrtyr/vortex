import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import Pop from "./Pop";
import Envelope from "./Envelope";
import Input from "./Input";
import rotateComponent from "../utils/rotateComponent";
import "../styles/event.scss";

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
    <div id="event-list-container" className="event-list">
        {events.map(event => { 
        return (
          <div key={event.id} className="event-container">
            <Note
              id={event.id}
              {...event} // Pass props to each individual Event component
              onClick={() => onEventClick(event.id)}
              content={event.content}
              isArmed={event.isArmed}
            />
            <Input
              id={event.id}
              onSubmit={() => onInputSubmit(event.id, event.content)}
              onKeyPress={() => onInputKeypress}
            />
            <Pop onClick={() => onPopClick(event.id)} />
          </div>
        )})}
      {/* <Envelope /> */}
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
};

export default EventList;
