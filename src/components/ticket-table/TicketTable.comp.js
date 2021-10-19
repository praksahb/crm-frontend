import React from "react";
import { Table } from "react-bootstrap";

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
						//const { id, subjects, status, addedAt } = row;
						return (
							<tr key={row.id}>
								<td>{row.id}</td>
								<td>{row.subjects}</td>
								<td>{row.status}</td>
								<td>{row.addedAt}</td>
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
