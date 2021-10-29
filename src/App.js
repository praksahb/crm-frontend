import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { Registration } from "./pages/Registration/Registration.page";
import { UserVerification } from "./pages/user-verification/userVerification.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Entry />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/verification/:_id/:email">
						<UserVerification />
					</Route>

					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path="/add-ticket">
						<AddTicket />
					</PrivateRoute>
					<PrivateRoute path="/tickets">
						<TicketLists />
					</PrivateRoute>
					<PrivateRoute path="/ticket/:tid">
						<Ticket />
					</PrivateRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
