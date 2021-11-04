import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { clientLogout } from "../../api/clientApi";

export const Header = () => {
	const history = useHistory();

	const logMeOut = () => {
		clientLogout();
		sessionStorage.removeItem("accessJWT");
		localStorage.removeItem("crmSite");
		history.push("/");
	};
	return (
		<Navbar collapseOnSelect bg="info" variant="light" expand="md">
			<Navbar.Brand>
				<img className="" src={logo} alt="default-logo" width="50px" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					{/* <Link to="/dashboard">Dashboard</Link>
					<Link to="/tickets">Tickets</Link>
					<Link to="">Logout</Link> */}
					<LinkContainer to="/dashboard">
						<Nav.Link>Dashboard</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/tickets">
						<Nav.Link>Tickets</Nav.Link>
					</LinkContainer>
					<Nav.Link onClick={logMeOut}>Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
