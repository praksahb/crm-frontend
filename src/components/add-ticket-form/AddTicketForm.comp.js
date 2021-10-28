import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { shortText } from "../../utils/validation";
import { openNewTicket } from "./addTicketAction";

import "./add-ticket-form.style.css";

const initialFrmDt = {
	subject: "",
	issueDate: "",
	message: "",
};

const initialFrmError = {
	subject: false,
	issueDate: false,
	message: false,
};
export const AddTicketForm = () => {
	const dispatch = useDispatch();
	const {
		user: { name },
	} = useSelector((state) => state.user);

	const { isLoading, error, successMsg } = useSelector(
		(state) => state.openTicket
	);

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

		dispatch(openNewTicket({ ...formData, sender: name }));
		setFormdata(initialFrmDt);
		//console.log("form submit req received", formData);
	};

	return (
		<div className="container-fluid mt-3 add-new-ticket bg-light">
			<h2 className="mb-4 pt-2 text-info text-center">Add New Ticket</h2>
			<div>
				{error && <Alert variant="danger">{error}</Alert>}
				{successMsg && <Alert variant="success">{successMsg}</Alert>}
				{isLoading && <Spinner variant="primary" animation="border" />}
			</div>
			<Form autoComplete="off" onSubmit={handleOnSubmit}>
				<Form.Group className="mb-3" as={Row}>
					<Form.Label column sm={3}>
						Subject
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							type="text"
							name="subject"
							value={formData.subject}
							placeholder="Subject"
							minLength="3"
							maxLength="10"
							onChange={handleOnChange}
							required
						/>
						<Form.Text className="text-danger">
							{formDataError.subject && "Subject is required"}
						</Form.Text>
					</Col>
				</Form.Group>
				<Form.Group className="mb-3" as={Row}>
					<Form.Label column sm={3}>
						Date Issued
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							type="date"
							name="issueDate"
							value={formData.issueDate}
							onChange={handleOnChange}
							required
						/>
					</Col>
				</Form.Group>
				<Form.Group>
					<FloatingLabel
						controlId="floatingTextarea2"
						label="Add information here"
						className="mb-3"
					>
						<Form.Control
							as="textarea"
							name="message"
							value={formData.message}
							placeholder="information"
							style={{ height: "100px" }}
							onChange={handleOnChange}
							required
						/>
					</FloatingLabel>
				</Form.Group>
				<div className="d-grid gap-2">
					<Button
						className="mt-3 mb-4 text-center"
						type="submit"
						variant="info"
					>
						Open ticket
					</Button>
				</div>
			</Form>
		</div>
	);
};
