import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";
//import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { fetchSingleTicket } from "../ticket-list/ticketsAction";

// const ticket = tickets[0];
export const Ticket = () => {
	const { tid } = useParams();
	const dispatch = useDispatch();
	const { isLoading, selectedTicket, error } = useSelector(
		(state) => state.tickets
	);

	const [message, setMessage] = useState("");
	const [ticket, setTicket] = useState("");

	useEffect(() => {
		dispatch(fetchSingleTicket(tid));
	}, [message, tid, dispatch]);

	return (
		<Container>
			<Row>
				<Col>
					<PageBreadcrumb page="Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					{isLoading && <Spinner variant="primary" animation="grow" />}
					{error && <Alert variant="danger">{error}</Alert>}
				</Col>
			</Row>
			<Row>
				<Col className="font-weight-bolder text-secondary">
					<div className="subject">Subject: {selectedTicket.subject}</div>
					<div className="date">
						Ticket Opened:{" "}
						{selectedTicket.openAt &&
							new Date(selectedTicket.openAt).toLocaleString()}
					</div>
					<div className="status">Status: {selectedTicket.status}</div>
				</Col>
				<Col className="text-end">
					<Button variant="outline-info">Close ticket</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					{selectedTicket.conversations && (
						<MessageHistory msg={selectedTicket.conversations} />
					)}
				</Col>
			</Row>
			<hr />
			<Row className="mt-4">
				<Col>
					<UpdateTicket _id={tid} />
				</Col>
			</Row>
		</Container>
	);
};
