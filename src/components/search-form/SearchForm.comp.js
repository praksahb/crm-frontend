import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";

export const SearchForm = ({ handleOnChange, str }) => {
	return (
		<div>
			<Form>
				<Form.Group as={Row}>
					<Col sm="12">
						<Form.Control
							name="searchStr"
							onChange={handleOnChange}
							value={str}
							placeholder="Search..."
						/>
					</Col>
				</Form.Group>
			</Form>
		</div>
	);
};

SearchForm.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	str: PropTypes.string.isRequired,
};
