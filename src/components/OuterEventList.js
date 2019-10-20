import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import InnerEventContainer from "../containers/InnerEventContainer";
import updateOuterNotePosition from "../utils/updateOuterNotePosition";
import "../styles.css";

let OuterEventList = ({ events, toggleEvent }) => {
  useLayoutEffect(() => {
    updateOuterNotePosition();
  });

  return (
    <ul className="outer-event-list">
      {events.map(event => {
        return (
          <Event
            key={event.id}
            {...event}
            onClick={() => toggleEvent(event.id)}
          />
        );
      })}
      {/* <div id="inner-container">
 <InnerEventContainer />
</div> */}
    </ul>
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
