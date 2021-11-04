import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Spinner,
	Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
	clientLoginPending,
	clientLoginSuccess,
	clientLoginFail,
} from "./clientLoginSlice";
import { clientLogin } from "../../api/clientApi";
import { getClientProfile } from "../../pages/clientDashboard/clientAction";

export const ClientLoginForm = ({ formSwitcher }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, isAuth, error } = useSelector(
		(state) => state.clientLogin
	);

	useEffect(() => {
		sessionStorage.getItem("accessJWT") && history.push("/dashboard");
	}, [history, isAuth]);

	const [email, setEmail] = useState("ayra@gmail.com");
	const [password, setPassword] = useState("pass123");

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				break;
		}
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please enter the details");
		}

		dispatch(clientLoginPending());
		try {
			const isAuth = await clientLogin({ email, password });
			//console.log(isAuth);
			if (isAuth.status === "error") {
				return dispatch(clientLoginFail(isAuth.message));
			}

			dispatch(clientLoginSuccess());
			dispatch(getClientProfile());
			history.push("/dashboard");
		} catch (error) {
			dispatch(clientLoginFail(error.message));
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
					{error && <Alert variant="danger">{error}</Alert>}
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
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
						<Form.Group className="pass-top-spacing">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={password}
								onChange={handleOnChange}
								placeholder="Enter password"
								required
							/>
						</Form.Group>
						<Button className="btn" type="submit">
							Login
						</Button>
						{isLoading && <Spinner variant="primary" animation="border" />}
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="#!" onClick={() => formSwitcher("reset")}>
						Forget Password?
					</a>
				</Col>
			</Row>

			<Row className="py-4">
				<Col>
					New user sign up? <a href="/registration">Sign Up</a>
				</Col>
			</Row>
		</Container>
	);
};

ClientLoginForm.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};
