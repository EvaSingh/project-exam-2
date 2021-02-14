import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import DeleteHotel from "./DeleteHotel";
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
  const defaultState = {
    name: "",
    email: "",
    image: "",
    price: "",
    maxGuests: "",
    description: ""
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const [hotel, setHotel] = useState(defaultState);
  const history = useHistory();

  let { id } = useParams();

  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error));
  }, []);

  async function onSubmit(data) {
    console.log("data", data);

    const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
    await fetch(fetchUrl, updateOptions);
    history.push("/admin/hotels");
  }

  return (

    <>
    <Heading title="Edit hotel"/>
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" defaultValue={hotel.name} placeholder="Enter a name for the hotel" ref={register} />
          {errors.name && <p>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" defaultValue={hotel.email} placeholder="Enter an email address" ref={register} />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" defaultValue={hotel.image} placeholder="Enter an image url" ref={register} />
            {errors.image && <p>{errors.image.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control name="price"  defaultValue={hotel.price} placeholder="Enter a price" ref={register} />
            {errors.price && <p>{errors.price.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Max guests</Form.Label>
            <Form.Control name="maxGuests"  defaultValue={hotel.maxGuests}placeholder="Enter a number" ref={register} />
            {errors.maxGuests && <p>{errors.maxGuests.message}</p>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description"  defaultValue={hotel.description} placeholder="Enter a description" ref={register} />
            {errors.description && <p>{errors.description.message}</p>}
          </Form.Group>

        <Button type="submit">Update</Button>
      </Form>
      <DeleteHotel id={id} />
    </Container>
    </>
      
  );
}

export default AddHotel;