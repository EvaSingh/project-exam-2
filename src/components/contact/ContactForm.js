import React from "react";
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

let contactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be minimum 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be minimum 2 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .required("Please write a message")
    .min(10, "Message must be minimum 10 characters")
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    //resolver: yupResolver(contactSchema)
  });

  function onSubmit(data) {
    console.log("data", data);
  }
  
  return (
    <Form onSubmit={handleSubmit (onSubmit)}>
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </Form.Group>
  
      <Form.Group>
        <Form.Label>Last name</Form.Label>
        <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </Form.Group>
  
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" placeholder="Enter your email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
      </Form.Group>
  
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control name="message" placeholder="Enter a message" ref={register} />
        {errors.message && <p>{errors.message.message}</p>}
      </Form.Group>
  
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;