import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
	subject: "",
	issueDate: "",
	detail: "",
};

const initialFrmError = {
	subject: false,
	issueDate: false,
	detail: false,
};

export const AddTicket = () => {
	const [formData, setFormdata] = useState(initialFrmDt);
	const [formDataError, setFormDataError] = useState(initialFrmError);

	useEffect(() => {}, [formData, formDataError]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormdata({
			...formData,
			[name]: value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		setFormDataError(initialFrmError);

		const isSubjectValid = await shortText(formData.subject);

		setFormDataError({
			...initialFrmError,
			subject: !isSubjectValid,
		});

		console.log("form submit req received");
	};

	return (
		<Container>
			<Row className="mb-3">
				<Col>
					<PageBreadcrumb page="New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<AddTicketForm
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
						frmDt={formData}
						formDataError={formDataError}
					/>
				</Col>
			</Row>
		</Container>
	);
};
