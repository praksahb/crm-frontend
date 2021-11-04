import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./pages/ticket-list/ticketSlice";
import clientLoginReducer from "./components/client-Login/clientLoginSlice";
import clientReducer from "./pages/clientDashboard/clientSlice";
import newTicketReducer from "./components/add-ticket-form/addTicketSlice";
import clientRegistrationReducer from "./components/client-registration-form/clientRegistration.slice";
import adminReducer from "./pages/adminDashboard/adminSlice";
import adminLoginReducer from "./components/admin-Login/AdminLoginSlice";

const store = configureStore({
	reducer: {
		tickets: ticketReducer,
		client: clientReducer,
		admin: adminReducer,
		clientLogin: clientLoginReducer,
		adminLogin: adminLoginReducer,
		openTicket: newTicketReducer,
		clientRegistration: clientRegistrationReducer,
	},
});

export default store;
