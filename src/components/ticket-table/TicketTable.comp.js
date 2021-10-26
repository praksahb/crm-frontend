import React from "react";
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const TicketTable = () => {
	const { searchTicketList, isLoading, error } = useSelector(
		(state) => state.tickets
	);

	if (isLoading) return <h3>Loading...</h3>;
	if (error) return <h3>{error}</h3>;
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
				{searchTicketList.length ? (
					searchTicketList.map((row) => {
						const { _id, subject, status, openAt } = row;
						return (
							<tr key={_id}>
								<td>{_id}</td>
								<td>
									<Link to={`/ticket/${_id}`}>{subject}</Link>
								</td>
								<td>{status}</td>
								<td>{openAt}</td>
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
