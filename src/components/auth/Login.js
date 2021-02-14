import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../layout/Heading";

function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  function onSubmit(data) {
      console.log("data", data);
      history.push("/dashboard");
  }

  return (

    <>
    <Heading 
    title="Login"
    subtitle="Log in to manage hotels, enquiries, messages and more."
    />
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="username" placeholder="Enter your username" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" placeholder="Enter your password" ref={register} />
        </Form.Group>
        <Button type="submit">Submit</Button>
       
      </Form>
    </Container>
    <Link to="/register">Register new user</Link>
    </>
    
  );
}

export default Login;

// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import Login from "./Logout";

// function Login() {
//     const { login } = useContext(AuthContext);

//     return <button onClick={login}>Log in</button>;
// }

// export default Login;