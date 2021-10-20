import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PropTypes from "prop-types";

import "./add-ticket-form.style.css";

export const AddTicketForm = ({
	handleOnSubmit,
	handleOnChange,
	frmDt,
	formDataError,
}) => {
	console.log(frmDt);
	return (
		<div className="container-fluid mt-3 add-new-ticket bg-light">
			<h2 className="mb-4 pt-2 text-info text-center">Add New Ticket</h2>
			<Form autoComplete="off" onSubmit={handleOnSubmit}>
				<Form.Group className="mb-3" as={Row}>
					<Form.Label column sm={3}>
						Subject
					</Form.Label>
					<Col sm={9}>
						<Form.Control
							type="text"
							name="subject"
							value={frmDt.subject}
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
							value={frmDt.issueDate}
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
							name="detail"
							value={frmDt.detail}
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
						Login
					</Button>
				</div>
			</Form>
		</div>
	);
};

AddTicketForm.propTypes = {
	handleOnSubmit: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	frmDt: PropTypes.object.isRequired,
	formDataError: PropTypes.object.isRequired,
};
