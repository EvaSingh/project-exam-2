import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
//import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



let schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be minimum 2 characters"),
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

    
    //resolver: yupResolver(schema)
  });

  //const history = useHistory();

    async function onSubmit(data) {
      console.log("data", data);

      const url = BASE_URL + "contacts";

      const options = { headers, method: "POST", body: JSON.stringify(data) };

      await fetch(url, options);

      //history.push("/admin/messages");
    }

  
  
  return (
    <Form onSubmit={handleSubmit (onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control name="firstName" placeholder="Enter your name" ref={register} />
        {errors.name && <p>{errors.name.message}</p>}
      </Form.Group>
  
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" placeholder="Enter your email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
      </Form.Group>
  
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="12" name="message" placeholder="Enter a message" ref={register} />
        {errors.message && <p>{errors.message.message}</p>}
      </Form.Group>
  
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;