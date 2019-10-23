import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import updateOuterNotePosition from "../utils/updateOuterNotePosition";
import "../styles.css";
import PopEvent from "../components/PopEvent";
import { popEvent } from "../redux/actions";

let OuterEventList = ({ id, events, toggleEvent }) => {
  useLayoutEffect(() => {
    updateOuterNotePosition();
  });

  return (
    <div className="outer-event-list">
      <ul>
        {events.map(event => {
          return (
            <div class="event">
              {/* <PopEvent id={event.id} /> */}
              <Event
                key={event.id}
                {...event}
                onClick={() => toggleEvent(event.id)}
              />
            </div>
          );
        })}
      </ul>
      {/* <InnerEventContainer /> */}
    </div>
  );
};

OuterEventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isArmed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleEvent: PropTypes.func.isRequired
};

export default OuterEventList;
