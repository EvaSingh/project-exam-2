import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {AuthContext} from "../../context/AuthContext";
import Heading from "../layout/Heading";

let schema = yup.object().shape({
  username: yup
      .string()
      .required("Username is required"),
  password: yup
      .string()
      .required("Password is required")
});

function Login() {
  const { user: regUser, password: regPassword } = useContext(AuthContext);
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema)
  });
  const history = useHistory();

  function onSubmit({ username, password }) {
    if ( regUser && regUser === username && regPassword && regPassword === password) {
      history.push("/admin");
    } else {
      setError("creds", { type: "manual", message: "Invalid password" });
    }   
  }

  return (
    <>
    <Container>
      <Heading 
        title="Login"
        subtitle="Log in to manage hotels, enquiries, messages and more." 
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="username" placeholder="Enter your username" ref={register} />
          {errors.username && <p>{errors.username.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" placeholder="Enter your password" ref={register} />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>

        <Button type="submit">Submit</Button>
        {errors.creds && <p>{errors.creds.message}</p>}
      </Form>
    </Container>
    <Link to="/register">Register new user</Link>
    </> 
  );
}

export default Login;