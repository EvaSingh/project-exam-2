import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";

function Heading({title, subtitle}) {
  return (
    <div className="heading--controlled">
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Heading;