import React from "react";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../layout/Heading";


function HotelEnquiry() {
  const { register, handleSubmit } = useForm({
      //resolver: yupResolver(schema)
    });

    function onSubmit(data) {
      console.log("data", data);
    }

      return (
        <>
        <Heading title="Send enquiry to this hotel"/>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" placeholder="Enter your name" ref={register} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" placeholder="Enter your email address" ref={register} />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
        </Container></>
        
        
      );

}

export default HotelEnquiry;