import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const initialState = {
	name: "",
	phone: "",
	email: "",
	company: "",
	address: "",
	password: "",
	confirmPass: "",
};

const passVerification = {
	isLengthy: false,
	hasUpper: false,
	hasLower: false,
	hasNumber: false,
	hasSpecial: false,
	confirmPassword: false,
};

export const RegistrationForm = () => {
	const [newUser, setNewUser] = useState(initialState);
	const [passwordError, setPasswordError] = useState(passVerification);

	useEffect(() => {}, [newUser]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setNewUser({ ...newUser, [name]: value });
		if (name === "password") {
			const isLengthy = value.length > 7;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSpecial = /[@ # $ % & ., _ ]/.test(value);

			setPasswordError({
				...passwordError,
				isLengthy,
				hasUpper,
				hasLower,
				hasNumber,
				hasSpecial,
			});
		}

		if (name === "confirmPass") {
			setPasswordError({
				...passwordError,
				confirmPassword: newUser.password === value,
			});
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		console.log(newUser);
	};

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="py-0 my-0 text-info">User Registration</h2>
				</Col>
			</Row>
			<hr className="mt-1" />
			<Row>
				<Col>
					<Form onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={newUser.name}
								onChange={handleOnChange}
								placeholder="Enter your name"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="number"
								name="phone"
								value={newUser.phone}
								onChange={handleOnChange}
								placeholder="Phone"
								min="0"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={newUser.email}
								onChange={handleOnChange}
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Company Name</Form.Label>
							<Form.Control
								type="text"
								name="company"
								value={newUser.company}
								onChange={handleOnChange}
								placeholder="Company name"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								name="address"
								value={newUser.address}
								onChange={handleOnChange}
								placeholder="Enter your address"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={newUser.password}
								onChange={handleOnChange}
								placeholder="Password"
							/>
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="confirmPass"
								value={newUser.confirmPass}
								onChange={handleOnChange}
								placeholder="Password"
							/>
						</Form.Group>
						<Form.Text>
							{!passwordError.confirmPassword ? (
								<div className="text-danger mb-2">Passwords don't match</div>
							) : (
								<div className="text-success mb-2">Passwords matched</div>
							)}
						</Form.Text>

						<ul className="pass-top-spacing">
							<li
								className={
									passwordError.isLengthy ? "text-success" : "text-danger"
								}
							>
								Min 8 characters
							</li>
							<li
								className={
									passwordError.hasUpper ? "text-success" : "text-danger"
								}
							>
								Atleast one upper case char
							</li>
							<li
								className={
									passwordError.hasLower ? "text-success" : "text-danger"
								}
							>
								Atleast one lowercase
							</li>
							<li
								className={
									passwordError.hasNumber ? "text-success" : "text-danger"
								}
							>
								At least one number
							</li>
							<li
								className={
									passwordError.hasSpecial ? "text-success" : "text-danger"
								}
							>
								One special character
							</li>
						</ul>

						<Button
							className="mt-0 py-1"
							variant="primary"
							type="submit"
							disabled={Object.values(passwordError).includes(false)}
						>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>

			<Row className="pt-2">
				<Col>
					Already have an account <a href="/">Login</a>
				</Col>
			</Row>
		</Container>
	);
};
