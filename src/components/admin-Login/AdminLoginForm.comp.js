import React, { useState, useEffect } from "react";

import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
	adminLoginPending,
	adminLoginSuccess,
	adminLoginFail,
} from "../../components/admin-Login/AdminLoginSlice";
import { adminLogin } from "../../api/adminApi";
import { getAdminProfile } from "../../pages/adminDashboard/adminAction";

import "./AdminLoginForm.style.css";

export const AdminLoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading, isAuth, error } = useSelector((state) => state.adminLogin);
	const { adminInfo } = useSelector((state) => state.admin);

	//console.log(adminInfo);

	useEffect(() => {
		sessionStorage.getItem("accessJWT") && history.push("/admin-dashboard");
	}, [history, isAuth, adminInfo]);

	const [email, setEmail] = useState("ghodas3@flora.com");
	const [password, setPassword] = useState("friendly_123");

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please enter the details");
		}
		try {
			dispatch(adminLoginPending());
			const isAuth = await adminLogin({ email, password });
			console.log(isAuth);
			if (isAuth.status === "error") {
				return dispatch(adminLoginFail(isAuth.message));
			}

			dispatch(adminLoginSuccess());
			const user = await dispatch(getAdminProfile());

			history.push("/admin-dashboard");
		} catch (error) {
			dispatch(adminLoginFail(error.message));
		}
	};

	return (
		<div className="Login">
			<h2 className="text-center text-info mb-3">Employees Login</h2>
			{error && <Alert variant="danger">{error}</Alert>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>
				<Button type="submit">Login</Button>
				{isLoading && <Spinner variant="primary" animation="border" />}
			</Form>
		</div>
	);
};
