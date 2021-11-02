import React, { useState, useEffect } from "react";

import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { loginPending, loginSuccess, loginFail } from "../login/loginSlice";
import { adminLogin } from "../../api/adminApi";
import { getAdminProfile } from "../../pages/adminDashboard/adminAction";

import "./AdminLoginForm.style.css";

export const AdminLoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, isAuth, error } = useSelector((state) => state.login);

	useEffect(() => {
		sessionStorage.getItem("accessJWT") && history.push("/admin-dashboard");
	}, [history, isAuth]);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please enter the details");
		}
		dispatch(loginPending());
		try {
			const isAuth = await adminLogin({ email, password });
			console.log(isAuth);
			if (isAuth.status === "error") {
				return dispatch(loginFail(isAuth.message));
			}

			dispatch(loginSuccess());
			dispatch(getAdminProfile());
			history.push("/admin-dashboard");
		} catch (error) {
			dispatch(loginFail(error.message));
		}
	};

	return (
		<div className="Login">
			{error && <Alert variant="danger">{error}</Alert>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group size="lg" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button block size="lg" type="submit">
					Login
				</Button>
				{isLoading && <Spinner variant="primary" animation="border" />}
			</Form>
		</div>
	);
};
