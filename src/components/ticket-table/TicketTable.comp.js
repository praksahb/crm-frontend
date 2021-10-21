import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Subject</th>
					<th>Status</th>
					<th>Opened Date</th>
				</tr>
			</thead>
			<tbody>
				{tickets.length ? (
					tickets.map((row) => {
						const { id, subject, status, addedAt } = row;
						return (
							<tr key={id}>
								<td>{id}</td>
								<td>
									<Link to={`/ticket/${id}`}>{subject}</Link>
								</td>
								<td>{status}</td>
								<td>{addedAt}</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan="4" className="text-center">
							No tickets to show
						</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

TicketTable.propTypes = {
	tickets: PropTypes.array.isRequired,
};
