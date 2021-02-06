import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../constants/api";
import Heading from "../layout/Heading";


function AddHotel() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
      console.log("data", data);

      const url = BASE_URL + "establishments";

      const options = { headers, method: "POST", body: JSON.stringify(data) };

      await fetch(url, options);

      history.push("/admin/hotels");
    }

    return (
      <>
      <Heading title="Add Hotel"/>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" placeholder="Enter a name for the hotel" ref={register} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" placeholder="Enter an email address" ref={register} />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
        </>
        
        
    );
}

export default AddHotel;
