import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";

function MessageConfirm() {
  return(
    <Container>
      <Heading
        title="Thank you"
        subtitle="We will get back to you shortly." 
      />
    </Container>
  );
}       
export default MessageConfirm;