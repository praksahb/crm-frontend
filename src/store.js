import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./pages/ticket-list/ticketSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./components/add-ticket-form/addTicketSlice";
import registrationReducer from "./components/registration-form/userRegistration.slice";

const store = configureStore({
	reducer: {
		tickets: ticketReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
	},
});

export default store;
