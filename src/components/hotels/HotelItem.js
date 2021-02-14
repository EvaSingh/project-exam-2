import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HotelItem({ id, hotelName, image, price }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{hotelName}</Card.Title>
        <Card.Text>
          <p>NOK {price}/night </p>  
        </Card.Text>
        <Link to={"hotel/" + id}>
          <Button variant="primary" block>
            View
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

HotelItem.propTypes = {
  id: PropTypes.number.isRequired,
  hotelName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired 
};

export default HotelItem;