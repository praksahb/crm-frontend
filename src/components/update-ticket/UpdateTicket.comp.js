import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { replyOnTicket } from "../../pages/ticket-list/ticketsAction";
import PropTypes from "prop-types";

export const UpdateTicket = ({ _id }) => {
	const dispatch = useDispatch();
	const {
		user: { name },
	} = useSelector((state) => state.user);
	const [message, setMessage] = useState("");

	const handleOnChange = (e) => {
		setMessage(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const msgObj = {
			message,
			sender: name,
		};
		//action handle
		dispatch(replyOnTicket(_id, msgObj));
		setMessage("");
	};

	return (
		<div>
			<Form onSubmit={handleOnSubmit}>
				<Form.Label></Form.Label>
				<Form.Text>Please add reply</Form.Text>
				<Form.Control
					as="textarea"
					row="5"
					name="detail"
					value={message}
					onChange={handleOnChange}
				/>
				<div className="text-end mt-3 mb-3">
					<Button variant="info" type="submit">
						Reply
					</Button>
				</div>
			</Form>
		</div>
	);
};

UpdateTicket.propTypes = {
	_id: PropTypes.string.isRequired,
};
