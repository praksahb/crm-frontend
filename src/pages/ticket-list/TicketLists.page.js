import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";

export const TicketLists = () => {
	const [str, setStr] = useState("");
	const [showTicket, setShowTicket] = useState(tickets);

	useEffect(() => {}, [str, showTicket]);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setStr(value);
		searchTicket(value);
	};

	const searchTicket = (sttr) => {
		const displayTickets = tickets.filter((row) =>
			row.subject.toLowerCase().includes(sttr.toLowerCase())
		);
		console.log(displayTickets);
		setShowTicket(displayTickets);
	};

	return (
		<Container>
			<Row>
				<Col>
					<PageBreadcrumb page="Ticket Lists" />
				</Col>
			</Row>
			<Row className="mt-4">
				<Col md={4} className="mb-2">
					<Link to="/add-ticket">
						<Button variant="info">Add New Ticket</Button>
					</Link>
				</Col>
				<Col md={{ span: 4, offset: 4 }} className="text-end mb-2">
					<SearchForm handleOnChange={handleOnChange} str={str} />
				</Col>
			</Row>

			<Row>
				<Col className="mt-5">
					<TicketTable tickets={showTicket} />
				</Col>
			</Row>
		</Container>
	);
};
