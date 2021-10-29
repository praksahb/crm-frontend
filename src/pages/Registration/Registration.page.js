import React from "react";

import { RegistrationForm } from "../../components/registration-form/RegistrationForm.component";

import "./registration.css";

export const Registration = () => {
	return (
		<div className="registration-page bg-info">
			<div className="form-box">
				<RegistrationForm />
			</div>
		</div>
	);
};
