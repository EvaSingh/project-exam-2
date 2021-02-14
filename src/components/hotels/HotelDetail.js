import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import { BASE_URL, headers } from "../../constants/api";

function HotelDetail() {
	const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  
  let { id }  = useParams();

  const url = BASE_URL + 'establishments';
  const detailUrl = url + '/' + id;
  const options = { headers };

	useEffect(() => {
    fetch(detailUrl, options)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }, []);

    if (loading) {
      return <Spinner animation="border" className="spinner" />;
    }

  return (
    
    <>
    <Heading 
      title={detail.name} 
      subtitle={detail.description} />
    <Container>
      <Row>
        <Col sm={7}>
          <Image className="img-fluid object-fit" src={detail.image} /> 
        </Col>
        <Col>
          <p>Price: {detail.price}/night</p>
          <p>Max guests: {detail.maxGuests}</p>
          <p>Contact the hotel: {detail.email}</p>
          <Link to={`/enquire/${detail.id}`}>
            <Button>
              Send enquiry
            </Button>
          </Link> 
        </Col>
      </Row>
    </Container>
    </>
      
  );
}

export default HotelDetail;