import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import DeleteEnquiries from "../admin/DeleteEnquiries";
import { BASE_URL, headers } from "../../constants/api";
import { Button } from "react-bootstrap";

function EnquiryDetail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  
  let { id }  = useParams();

  const url = BASE_URL + 'enquiries';
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
    <Container>
      <Heading 
        title="Enquiry"  
        subtitle={`From: ${detail.name}`} /> 
      <Row>
        <Col>
          <p>Email: {detail.email}</p> 
          <p>Hotel: { id }</p>
          <p>Check in: {detail.checkIn}</p>
          <p>Check out: {detail.checkOut}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Accept</Button>
          <DeleteEnquiries id={id}/>
        </Col>
      </Row>
    </Container>   
  );
}

export default EnquiryDetail;