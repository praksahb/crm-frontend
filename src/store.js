import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./pages/ticket-list/ticketSlice";
import loginReducer from "./components/login/loginSlice";

const store = configureStore({
	reducer: {
		tickets: ticketReducer,
		login: loginReducer,
	},
});

export default store;
