import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      className="filter"
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      style={{marginLeft: '4px'}}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
