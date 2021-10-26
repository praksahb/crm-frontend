import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-list/ticketsAction";

export const SearchForm = () => {
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { value } = e.target;

		dispatch(filterSearchTicket(value));
	};

	return (
		<div>
			<Form>
				<Form.Group as={Row}>
					<Col sm="12">
						<Form.Control
							name="searchStr"
							onChange={handleOnChange}
							placeholder="Search..."
						/>
					</Col>
				</Form.Group>
			</Form>
		</div>
	);
};
