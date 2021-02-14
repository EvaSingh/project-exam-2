import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";
import Heading from "../layout/Heading";

function Register() {
	const { register, handleSubmit } = useForm();
	const { registerUser } = useContext(AuthContext);
	const history = useHistory();

	function onSubmit(data) {
		console.log("data", data);
		registerUser(data.username, data.password);
		history.push("/login");
	}

	return (

		<>
		<Heading 
		  title="Register user"
		  subtitle="Create a user name and password."
	    />
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control name="username" placeholder="Enter a username" ref={register} />
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control name="password" placeholder="Enter a pasword" ref={register} />
				</Form.Group>

				<Button type="submit">Submit</Button>
		  </Form>
		</Container>
		</>

	);
}

export default Register;