import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles.css";

let Note = ({ id, onClick, content, isArmed, key }) => (
  <div
    id={id}
    key={key}
    onClick={onClick}
    className={`${!isArmed ? "event-unarmed" : "event-armed"}`}
  >
    {content}
  </div>
);

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  isArmed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

Note = connect()(Note);
export default Note;
