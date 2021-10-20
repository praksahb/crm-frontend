import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Label></Form.Label>
			<Form.Text>Please add reply</Form.Text>
			<Form.Control
				as="textarea"
				row="5"
				name="detail"
				value={msg}
				onChange={handleOnChange}
			/>
			<div className="text-end mt-3 mb-3">
				<Button variant="info" type="submit">
					Reply
				</Button>
			</div>
		</Form>
	);
};

UpdateTicket.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
	msg: PropTypes.string.isRequired,
};
