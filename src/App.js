import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { PrivateRouteClient } from "./components/private-route/PrivateRouteClient.comp";
import { PrivateRouteAdmin } from "./components/private-route/PrivateRouteAdmin.comp";

import { Dashboard } from "./pages/clientDashboard/ClientDashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { Registration } from "./pages/Registration/Registration.page";
import { ClientVerification } from "./pages/user-verification/clientVerification.page";
import { AdminLogin } from "./pages/adminLogin/AdminLogin.page";
import { AdminDashboard } from "./pages/adminDashboard/AdminDashboard.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{/* public routes */}
					<Route exact path="/">
						<Entry />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/verification/:_id/:email">
						<ClientVerification />
					</Route>
					<Route exact path="/admin">
						<AdminLogin />
					</Route>

					{/* client routes */}
					<PrivateRouteClient path="/dashboard">
						<Dashboard />
					</PrivateRouteClient>
					<PrivateRouteClient path="/add-ticket">
						<AddTicket />
					</PrivateRouteClient>
					<PrivateRouteClient path="/tickets">
						<TicketLists />
					</PrivateRouteClient>
					<PrivateRouteClient path="/ticket/:tid">
						<Ticket />
					</PrivateRouteClient>

					{/* admin routes */}
					<PrivateRouteAdmin path="/admin-dashboard">
						<AdminDashboard />
					</PrivateRouteAdmin>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
