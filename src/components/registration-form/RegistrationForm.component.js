import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const RegistrationForm = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h2>User Registration</h2>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<Form>
						<Form.Group>
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="text" placeholder="Enter your name" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Phone</Form.Label>
							<Form.Control type="number" placeholder="Phone" min="0" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Company Name</Form.Label>
							<Form.Control type="text" placeholder="Company name" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" placeholder="Enter your address" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Form.Group className="pass-top-spacing">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<ul className="pass-top-spacing">
							<li className="text-danger">Min 8 characters</li>
							<li className="text-danger">Atleast one upper case char</li>
							<li className="text-danger">Atleast one lowercase</li>
							<li className="text-danger">At least one number</li>
							<li className="text-danger">One special case</li>
						</ul>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
