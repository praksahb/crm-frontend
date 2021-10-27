import React, { useState } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.css";

export const Entry = () => {
	const [formLoad, setFormLoad] = useState("login");

	const handleOnResetSubmit = (e) => {
		e.preventDefault();
	};

	const formSwitcher = (formType) => {
		setFormLoad(formType);
	};

	return (
		<div className="entry-page bg-info">
			<div className="bg-light form-box">
				{formLoad === "login" && (
					<LoginForm className="" formSwitcher={formSwitcher} />
				)}
				{formLoad === "reset" && (
					<ResetPassword
						//handleOnChange={handleOnChange}
						handleOnResetSubmit={handleOnResetSubmit}
						formSwitcher={formSwitcher}
						//email={email}
					/>
				)}
			</div>
		</div>
	);
};
