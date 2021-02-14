import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import DeleteMessages from "./DeleteMessages";
import { BASE_URL, headers } from "../../constants/api";


function MessageDetail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  
  let { id }  = useParams();

  const url = BASE_URL + 'contacts';
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
        title="Message"
        subtitle={`From: ${detail.name} (${detail.email})`}
      />
      <Row>
        <Col>
          <p>{detail.message}</p> 
        </Col> 
      </Row> 
      <Row>
        <Col>
          <Button>Reply</Button>
          <DeleteMessages id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default MessageDetail;