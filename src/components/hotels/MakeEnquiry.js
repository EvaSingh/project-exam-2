import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
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
    .required("Name is required")
    .min(2, "Name must be minimum 2 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  establishmentId: yup
    .string()
    .required("Please enter the hotel id"),
  checkIn: yup
    .date()
    .required("Please select a check in date"),
  checkOut: yup
    .date()
    .required("Please select a check out date")
});

function MakeEnquiry() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();
  let { id }  = useParams();

  async function onSubmit(data) {
    console.log("data", data);
    
    const url = BASE_URL + "enquiries";
    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.push("/admin/hotels/enquieries");
  }
    
  return (

    <>
    <Heading title="Make an enquiry" />
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" placeholder="Enter your name" ref={register} />
          {errors.name && <p>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" placeholder="Enter your email" ref={register} />
          {errors.name && <p>{errors.email.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Hotel id</Form.Label>
          <Form.Control name="establishmentId" value={id}  ref={register}/>
          
        </Form.Group>

        <Form.Group>
          <Form.Label>Check in</Form.Label>
          <Form.Control type="date" name="checkIn"  ref={register} />
          {errors.name && <p>{errors.checkIn.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Check out</Form.Label>
          <Form.Control type="date" name="checkOut" ref={register} />
          {errors.name && <p>{errors.checkOut.message}</p>}
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
    </>
        
  );
}

export default MakeEnquiry;