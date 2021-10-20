import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";

const ticket = tickets[0];
export const Ticket = () => {
	const [message, setMessage] = useState("");

	useEffect(() => {}, [message]);

	const handleOnChange = (e) => {
		setMessage(e.target.value);
	};

	const handleOnSubmit = (e) => {
		//handle api integration
		alert("Form submitted");
	};

	return (
		<Container>
			<Row>
				<Col>
					<PageBreadcrumb page="Ticket" />
				</Col>
			</Row>
			<Row>
				<Col className="font-weight-bolder text-secondary">
					<div className="subject">Subject: {ticket.subject}</div>
					<div className="date">Ticket Opened: {ticket.addedAt}</div>
					<div className="status">Status: {ticket.status}</div>
				</Col>
				<Col className="text-end">
					<Button variant="outline-info">Close ticket</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<MessageHistory msg={ticket.history} />
				</Col>
			</Row>
			<hr />
			<Row className="mt-4">
				<Col>
					<UpdateTicket
						msg={message}
						handleOnChange={handleOnChange}
						handleOnSubmit={handleOnSubmit}
					/>
				</Col>
			</Row>
		</Container>
	);
};
