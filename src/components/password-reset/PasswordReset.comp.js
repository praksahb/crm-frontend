import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
	handleOnChange,
	handleOnResetSubmit,
	formSwitcher,
	email,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Reset Password</h1>
					<hr />
					<Form autoComplete="off" onSubmit={handleOnResetSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								placeholder="Enter Email"
								onChange={handleOnChange}
								required
							/>
						</Form.Group>

						<Button className="btn" type="submit">
							Reset Password
						</Button>
					</Form>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#!" onClick={() => formSwitcher("login")}>
						Login now?
					</a>
				</Col>
			</Row>
		</Container>
	);
};

ResetPassword.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnResetSubmit: PropTypes.func.isRequired,
	formSwitcher: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
};
