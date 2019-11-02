import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles.css";

let Event = ({ id, onClick, content, isArmed, key }) => (
  <li
    id={id}
    key={key}
    onClick={onClick}
    className={`${!isArmed ? "event-unarmed" : "event-armed"}`}
  >
    {content}
  </li>
);

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  isArmed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

Event = connect()(Event);
export default Event;
