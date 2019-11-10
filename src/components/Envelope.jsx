import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles/envelope.scss";

let Envelope = ({  }) => (
<div className="envelope"> env </div>
);

Envelope.propTypes = {
  onClick: PropTypes.func.isRequired,
  isArmed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

Envelope = connect()(Envelope);
export default Envelope;
