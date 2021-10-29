import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Spinner, Alert } from "react-bootstrap";

import { userRegistrationVerification } from "../../api/userApi";

import "./userVerification.css";

const initialResponse = {
	status: "",
	message: "",
};

export const UserVerification = () => {
	const { _id, email } = useParams();
	const dt = { _id, email };

	const [response, setResponse] = useState(initialResponse);

	useEffect(() => {
		const apiCall = async () => {
			const result = await userRegistrationVerification(dt);
			setResponse(result);
		};

		!response.status && apiCall();
	}, [response]);

	//call api and send _id to verify user

	console.log(_id);

	return (
		<div className="verification-page bg-info">
			<div className="form-box">
				{!response.status && <Spinner variant="info" animation="border" />}

				{response.status && (
					<Alert variant={response.status === "success" ? "success" : "danger"}>
						{response.message}
					</Alert>
				)}
			</div>
		</div>
	);
};
