import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/PageBreadcrumb.comp";

export const AddTicket = () => {
	return (
		<Container>
			<Row className="mb-3">
				<Col>
					<PageBreadcrumb page="New Ticket" />
				</Col>
			</Row>
			<Row>
				<Col>
					<AddTicketForm />
				</Col>
			</Row>
		</Container>
	);
};
