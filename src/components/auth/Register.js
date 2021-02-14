import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";
import Heading from "../layout/Heading";

let schema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required"),
	password: yup
		.string()
		.required("Password is required")
});

function Register() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema)
	});

	const { registerUser } = useContext(AuthContext);
	const history = useHistory();

	function onSubmit(data) {
		console.log("data", data);
		registerUser(data.username, data.password);
		history.push("/login");
	}

	return (
    <Container>
      <Heading 
        title="Register user"
        subtitle="Create a user name and password." 
      />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control name="username" placeholder="Enter a username" ref={register} />
					{errors.username && <p>{errors.username.message}</p>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" name="password" placeholder="Enter a pasword" ref={register} />
					{errors.password && <p>{errors.password.message}</p>}
				</Form.Group>

				<Button type="submit">Submit</Button>
		  </Form>
		</Container>
	);
}

export default Register;