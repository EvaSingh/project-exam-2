import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import bergen from "../../images/bergen-building.jpg";
import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";

export function ContactPage() {
  return (
    <Container>
      <Heading 
        title="Contact us"
        subtitle="Drop us a message and we will get back to you" 
      />
      <Row>
        <Col sm={12} md={7}>
          <ContactForm classname="contact-form" />
        </Col>
        <Col>
          <Image src={bergen} className="img-fluid" />
        </Col>
      </Row>
    </Container>  
  );
}

export default ContactPage;