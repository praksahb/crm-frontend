import React from "react";

import { ClientRegistrationForm } from "../../components/client-registration-form/ClientRegistrationForm.component";

import "./registration.css";

export const Registration = () => {
	return (
		<div className="registration-page bg-info">
			<div className="form-box">
				<ClientRegistrationForm />
			</div>
		</div>
	);
};
