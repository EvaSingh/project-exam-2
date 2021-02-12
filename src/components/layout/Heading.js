import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

function Heading({title, subtitle}) {
  return (
    <Container>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </Container>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Heading;