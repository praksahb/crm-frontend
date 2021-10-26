import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { Link } from "react-router-dom";

export const TicketLists = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTickets());
	}, [dispatch]);

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
					<SearchForm />
				</Col>
			</Row>

			<Row>
				<Col className="mt-5">
					<TicketTable />
				</Col>
			</Row>
		</Container>
	);
};
