import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../constants/api";
import Heading from "../layout/Heading";

let schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  image: yup
    .string()
    .required("Please enter an image url"),
  price: yup
    .number()
    .required("Please enter a price"),
  maxGuests: yup
    .number()
    .required("Please enter a number"),
  description: yup
    .string()
    .required("Please enter a description")
});

function AddHotel() {
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema)
    });
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
            {errors.name && <p>{errors.name.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" placeholder="Enter an email address" ref={register} />
            {errors.email && <p>{errors.email.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" placeholder="Enter an image url" ref={register} />
            {errors.image && <p>{errors.image.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" placeholder="Enter a price" ref={register} />
            {errors.price && <p>{errors.price.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Max guests</Form.Label>
            <Form.Control name="maxGuests" placeholder="Enter a number" ref={register} />
            {errors.maxGuests && <p>{errors.maxGuests.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" placeholder="Enter a description" ref={register} />
            {errors.description && <p>{errors.description.message}</p>}
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      </>
           
    );
}

export default AddHotel;
