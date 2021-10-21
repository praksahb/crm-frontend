import React, { useState } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.css";

export const Entry = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formLoad, setFormLoad] = useState("login");

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

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please enter the details");
		}
		//TODO capp api to submit the form
		console.log(email, password);
	};

	const handleOnResetSubmit = (e) => {
		e.preventDefault();
		if (!email) {
			return alert("Please enter the detail");
		}
		//TODO capp api to submit the form
		console.log(email);
	};

	const formSwitcher = (formType) => {
		setFormLoad(formType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="bg-light form-box">
				{formLoad === "login" && (
					<LoginForm
						className=""
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						formSwitcher={formSwitcher}
						email={email}
						pass={password}
					/>
				)}
				{formLoad === "reset" && (
					<ResetPassword
						handleOnChange={handleOnChange}
						handleOnResetSubmit={handleOnResetSubmit}
						formSwitcher={formSwitcher}
						email={email}
					/>
				)}
			</div>
		</div>
	);
};
